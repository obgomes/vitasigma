import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Users, ShieldCheck } from "lucide-react";

const points = [
  { icon: Cpu, text: "Tecnologia própria com dashboards e automações" },
  { icon: ShieldCheck, text: "Equipe multidisciplinar de engenheiros e médicos" },
  { icon: Users, text: "Atendimento humanizado e consultivo" },
  { icon: CheckCircle2, text: "Conformidade total com eSocial SST e NRs" },
];

const SolutionSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">A Solução</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            VitaSigma: onde a tecnologia encontra a segurança do trabalho
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Combinamos engenharia de segurança, saúde ocupacional e tecnologia proprietária para
            transformar a gestão de SST da sua empresa. Menos burocracia, mais proteção real.
          </p>
          <div className="space-y-4">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{p.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl gradient-blue p-1">
            <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-2xl gradient-blue mx-auto mb-6 flex items-center justify-center">
                  <ShieldCheck className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Gestão 360° em SST</h3>
                <p className="text-muted-foreground">
                  PGR • PCMSO • LTCAT • eSocial • SESMT • Treinamentos • Auditorias
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
