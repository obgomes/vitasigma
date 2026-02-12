import { motion } from "framer-motion";
import { AlertTriangle, FileWarning, Scale, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Documentação desorganizada",
    desc: "PGR, PCMSO e LTCAT desatualizados ou inexistentes, expondo a empresa a riscos legais.",
  },
  {
    icon: Scale,
    title: "Multas e autuações",
    desc: "Fiscalizações do MTE e eSocial SST geram penalidades que poderiam ser evitadas.",
  },
  {
    icon: AlertTriangle,
    title: "Acidentes evitáveis",
    desc: "Sem gestão de riscos, colaboradores ficam expostos a situações perigosas.",
  },
  {
    icon: ShieldAlert,
    title: "Sem controle de exames",
    desc: "Exames vencidos, convocações perdidas e falta de integração com eSocial.",
  },
];

const ProblemSection = () => (
  <section className="py-20 lg:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Sua empresa ainda gerencia SST assim?
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A maioria das empresas enfrenta desafios críticos na gestão de Segurança e Saúde do Trabalho que geram prejuízos financeiros e humanos.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
