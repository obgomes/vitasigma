import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setForm({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
  };

  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de falar com um especialista da VitaSigma.";

  return (
    <section id="contato" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-blue opacity-95" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Pronto para transformar a SST da sua empresa?
            </h2>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Solicite um diagnóstico gratuito ou fale diretamente com nosso time de especialistas.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-base"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar pelo WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-xl space-y-4"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Solicitar contato</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                required
              />
              <Input
                placeholder="Empresa"
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                required
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <Input
                placeholder="Telefone"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                required
              />
            </div>
            <Textarea
              placeholder="Mensagem (opcional)"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              rows={3}
            />
            <Button type="submit" className="w-full font-semibold" size="lg">
              <Send className="mr-2 h-4 w-4" />
              Enviar mensagem
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
