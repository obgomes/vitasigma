import { motion } from "framer-motion";
import { Stethoscope, Brain, ClipboardCheck, ExternalLink } from "lucide-react";

const diagnostics = [
  {
    icon: Stethoscope,
    title: "Medicina e Segurança",
    desc: "Diagnóstico completo de saúde ocupacional e segurança do trabalho da sua empresa.",
    href: "#",
  },
  {
    icon: Brain,
    title: "NR-1 Psicossocial",
    desc: "Avaliação de riscos psicossociais conforme as exigências da nova NR-1.",
    href: "#",
  },
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Inicial",
    desc: "Análise inicial gratuita para identificar gaps e oportunidades na gestão de SST.",
    href: "#",
  },
];

const DiagnosticsSection = () => (
  <section id="diagnosticos" className="py-12 lg:py-16">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Solicite seu Diagnóstico
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Escolha o tipo de diagnóstico e descubra como podemos ajudar sua empresa.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {diagnostics.map((d, i) => (
          <motion.a
            key={i}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group relative overflow-hidden bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-left"
          >
            <d.icon
              className="absolute -right-4 top-1/2 -translate-y-1/2 h-28 w-28 text-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              strokeWidth={1.5}
            />
            <div className="relative z-10 pr-16">
              <h3 className="font-display font-semibold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{d.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Acessar <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default DiagnosticsSection;
