import { motion } from "framer-motion";
import { Globe, Calendar, Bell, FileCheck, Stethoscope, ArrowRight } from "lucide-react";

const exams = [
  "Admissionais",
  "Periódicos",
  "Mudança de função",
  "Retorno ao trabalho",
  "Demissionais",
  "Exames complementares",
];

const features = [
  { icon: Calendar, text: "Controle de vencimentos" },
  { icon: Bell, text: "Convocação de colaboradores" },
  { icon: FileCheck, text: "Integração com eSocial SST" },
  { icon: Globe, text: "Abrangência nacional via rede credenciada" },
];

const ExamsSection = () => (
  <section id="exames" className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 gradient-blue opacity-95" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(215_70%_55%/0.25),transparent_50%)]" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/60">
          Destaque
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
          Gestão de Exames com Abrangência Nacional
        </h2>
        <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
          Centralizamos o agendamento, controle e monitoramento de todos os exames ocupacionais — em todo o Brasil.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xl font-semibold text-primary-foreground mb-6 flex items-center gap-2">
            <Stethoscope className="h-5 w-5" /> Exames que gerenciamos
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {exams.map((e, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-3 text-sm text-primary-foreground font-medium"
              >
                <ArrowRight className="h-4 w-4 text-primary-foreground/60 shrink-0" />
                {e}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-primary-foreground">{f.text}</h4>
                <p className="text-sm text-primary-foreground/70 mt-1">
                  {i === 3
                    ? "Realizamos o agendamento de exames em todo o Brasil, através de rede credenciada. A empresa não precisa contatar clínicas."
                    : "Automatizamos para que nenhum prazo seja perdido e sua empresa fique sempre em conformidade."}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExamsSection;
