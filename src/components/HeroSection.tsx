import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import vitaImg from "@/assets/vita-dr-sigma.png";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-blue opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(215_70%_55%/0.3),transparent_60%)]" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4 border border-primary-foreground/20 rounded-full px-4 py-1">
              Tech & SSO
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Tecnologia e Engenharia aplicadas à{" "}
              <span className="text-primary-foreground/90 underline decoration-primary-foreground/30 underline-offset-8">
                Segurança do Trabalho
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              Transformamos obrigações legais em gestão estratégica, organização
              e proteção real para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-card text-primary hover:bg-card/90 font-semibold text-base"
                onClick={() => scrollTo("#contato")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com especialista
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base"
                onClick={() => scrollTo("#contato")}
              >
                <ClipboardCheck className="mr-2 h-5 w-5" />
                Solicitar diagnóstico
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-primary-foreground/5 blur-2xl" />
              <img
                src={vitaImg}
                alt="Engenheira Vita e Dr. Sigma – VitaSigma"
                className="relative w-full max-w-md object-contain animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
