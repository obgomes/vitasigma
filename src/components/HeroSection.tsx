import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-blue" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(215_70%_55%/0.3),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-16 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4 border border-primary-foreground/20 rounded-full px-4 py-1">
            Tech & SSO
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Tecnologia, Medicina e{" "}
            <span className="text-primary-foreground/90 underline decoration-primary-foreground/30 underline-offset-8">
              Segurança do Trabalho
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Transformamos obrigações legais em gestão estratégica, organização
            e proteção real para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold text-base"
              onClick={() => scrollTo("#diagnosticos")}
            >
              <ClipboardCheck className="mr-2 h-5 w-5" />
              Solicitar diagnóstico
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
