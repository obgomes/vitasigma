import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Você é o Doutor Sigma, assistente virtual da VitaSigma – Tech & SSO. Você responde APENAS sobre:
- Saúde e Segurança do Trabalho (SST)
- Normas Regulamentadoras (NRs)
- Serviços da VitaSigma: PGR, PCMSO, LTCAT, eSocial SST, SESMT Terceirizado, Treinamentos NRs, Gestão de Exames Ocupacionais, Perícias e Assistência Técnica
- O Sistema SOC utilizado pela VitaSigma
- O VitaSigma Dashboard para gestão de SST

Se o visitante perguntar algo fora desses temas, responda educadamente que você só pode ajudar com assuntos de SST e serviços da VitaSigma.

Seja sempre cordial, profissional e objetiva. Use linguagem clara e acessível. Quando possível, sugira que o visitante entre em contato com a equipe VitaSigma pelo WhatsApp (11) 99119-1768 ou pelo e-mail contato@vitasigma.com.br para mais detalhes.`;

// --- Rate Limiting ---
const MAX_REQUESTS = 10;
const WINDOW_MS = 60_000;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > MAX_REQUESTS;
}

// Cleanup expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}, 5 * 60_000);

// --- Validation ---
const ALLOWED_ROLES = new Set(["user", "assistant"]);
const MAX_MESSAGES = 20;
const MAX_CONTENT_LENGTH = 2000;

function validateMessages(messages: unknown): { valid: boolean; error?: string } {
  if (!Array.isArray(messages)) return { valid: false, error: "messages deve ser um array." };
  if (messages.length === 0) return { valid: false, error: "messages não pode ser vazio." };
  if (messages.length > MAX_MESSAGES) return { valid: false, error: `Máximo de ${MAX_MESSAGES} mensagens por requisição.` };

  for (const msg of messages) {
    if (!msg || typeof msg !== "object") return { valid: false, error: "Mensagem inválida." };
    if (!ALLOWED_ROLES.has(msg.role)) return { valid: false, error: `Role inválido: ${msg.role}` };
    if (typeof msg.content !== "string" || msg.content.length === 0) return { valid: false, error: "Conteúdo da mensagem inválido." };
    if (msg.content.length > MAX_CONTENT_LENGTH) return { valid: false, error: `Mensagem excede ${MAX_CONTENT_LENGTH} caracteres.` };
  }
  return { valid: true };
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    // 1. Rate limiting by IP
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || req.headers.get("cf-connecting-ip")
      || "unknown";
    if (isRateLimited(clientIp)) {
      return new Response(JSON.stringify({ error: "Muitas requisições. Tente novamente em alguns instantes." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 3. Parse and validate input
    const body = await req.json();
    const validation = validateMessages(body.messages);
    if (!validation.valid) {
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const messages = body.messages as { role: string; content: string }[];

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Muitas requisições. Tente novamente em alguns instantes." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Erro ao conectar com a IA." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
