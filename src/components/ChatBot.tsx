import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import vitaDrSigma from "@/assets/dr-sigma-button.png";
import ReactMarkdown from "react-markdown";
import { supabase } from "@/integrations/supabase/client";

type Msg = { role: "user" | "assistant"; content: string };

const maskPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
const LEAD_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-lead-email`;

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [lead, setLead] = useState({ nome: "", email: "", telefone: "" });
  const [leadId, setLeadId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const saveMessage = async (currentLeadId: string, role: "user" | "assistant", content: string) => {
    try {
      await supabase.from("chat_messages").insert({ lead_id: currentLeadId, role, content } as any);
    } catch (err) {
      console.error("Error saving message:", err);
    }
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.nome.trim() || !lead.email.trim() || !lead.telefone.trim()) return;

    // Save lead to database
    let savedLeadId: string | null = null;
    try {
      const { data, error } = await supabase.from("chat_leads").insert({
        nome: lead.nome.trim(),
        email: lead.email.trim(),
        telefone: lead.telefone.trim(),
      } as any).select("id").single();
      if (!error && data) {
        savedLeadId = (data as any).id;
        setLeadId(savedLeadId);
      }
    } catch (err) {
      console.error("Error saving lead:", err);
    }

    // Send lead email (existing logic)
    try {
      await fetch(LEAD_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("Lead send error:", err);
    }

    const welcomeMsg = `Olá, ${lead.nome}! 👋 Sou o Doutor Sigma, assistente virtual da VitaSigma. Como posso ajudar você com Saúde e Segurança do Trabalho?`;
    setLeadCaptured(true);
    setMessages([{ role: "assistant", content: welcomeMsg }]);

    if (savedLeadId) {
      saveMessage(savedLeadId, "assistant", welcomeMsg);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Msg = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    if (leadId) {
      saveMessage(leadId, "user", userMsg.content);
    }
    setIsLoading(true);

    let assistantSoFar = "";
    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!resp.ok || !resp.body) {
        const errData = await resp.json().catch(() => ({}));
        setMessages(prev => [...prev, { role: "assistant", content: errData.error || "Desculpe, ocorreu um erro. Tente novamente." }]);
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") { streamDone = true; break; }
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && prev.length > 1 && prev[prev.length - 2]?.role === "user") {
                  return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantSoFar } : m);
                }
                return [...prev, { role: "assistant", content: assistantSoFar }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Save complete assistant response
      if (leadId && assistantSoFar) {
        saveMessage(leadId, "assistant", assistantSoFar);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages(prev => [...prev, { role: "assistant", content: "Desculpe, ocorreu um erro de conexão." }]);
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 transition-transform hover:scale-110 overflow-hidden border-2 border-white"
          aria-label="Abrir assistente virtual"
        >
          <img src={vitaDrSigma} alt="Dr. Sigma" className="w-full h-full object-cover" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-4 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-2rem)] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground">
            <img src={vitaDrSigma} alt="Dr. Sigma" className="w-11 h-11 rounded-full object-cover border border-white/30" />
            <div className="flex-1">
              <p className="font-bold text-base">Doutor Sigma</p>
              <p className="text-sm opacity-80">Assistente VitaSigma</p>
            </div>
            <button onClick={() => setOpen(false)} className="hover:opacity-70"><X className="h-5 w-5" /></button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {!leadCaptured ? (
              <form onSubmit={submitLead} className="flex flex-col h-full">
                <p className="text-sm font-semibold text-muted-foreground">Para iniciar, preencha seus dados:</p>
                <div className="space-y-4 mt-4">
                  <Input placeholder="Seu nome" value={lead.nome} onChange={e => setLead({ ...lead, nome: e.target.value })} required />
                  <Input type="email" placeholder="E-mail" value={lead.email} onChange={e => setLead({ ...lead, email: e.target.value })} required />
                  <Input placeholder="Telefone" value={lead.telefone} onChange={e => setLead({ ...lead, telefone: maskPhone(e.target.value) })} maxLength={15} required />
                </div>
                <div className="mt-auto pt-4">
                  <Button type="submit" className="w-full">Iniciar conversa</Button>
                </div>
              </form>
            ) : (
              <>
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                      {m.role === "assistant" ? (
                        <div className="prose prose-sm max-w-none [&>p]:m-0">
                          <ReactMarkdown>{m.content}</ReactMarkdown>
                        </div>
                      ) : m.content}
                    </div>
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-xl px-3 py-2 text-sm text-muted-foreground">Digitando...</div>
                  </div>
                )}
                <div ref={bottomRef} />
              </>
            )}
          </div>

          {/* Input */}
          {leadCaptured && (
            <div className="p-3 border-t border-border flex gap-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
                disabled={isLoading}
              />
              <Button size="icon" onClick={sendMessage} disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
