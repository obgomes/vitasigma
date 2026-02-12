import { motion } from "framer-motion";
import {
  FileText, Stethoscope, ClipboardList, Monitor, Users,
  Brain, GraduationCap, Search,
} from "lucide-react";

const services = [
  { icon: FileText, title: "PGR", desc: "Programa de Gerenciamento de Riscos com análise completa e planos de ação." },
  { icon: Stethoscope, title: "PCMSO", desc: "Programa de Controle Médico com exames e monitoramento da saúde ocupacional." },
  { icon: ClipboardList, title: "LTCAT", desc: "Laudo Técnico de Condições Ambientais do Trabalho para aposentadoria especial." },
  { icon: Monitor, title: "eSocial SST", desc: "Envio de eventos S-2210, S-2220 e S-2240 com total conformidade." },
  { icon: Users, title: "SESMT Terceirizado", desc: "Equipe multidisciplinar dedicada à sua empresa sem custos fixos internos." },
  { icon: Brain, title: "NR-1 Riscos Psicossociais", desc: "Avaliação e gestão de fatores psicossociais conforme a nova NR-1." },
  { icon: GraduationCap, title: "Treinamentos", desc: "Capacitações em NRs, primeiros socorros, trabalho em altura e mais." },
  { icon: Search, title: "Auditorias", desc: "Auditorias técnicas e de conformidade para identificar gaps e oportunidades." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-20 lg:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Soluções completas em SST
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Da documentação à gestão ativa, cobrimos todas as necessidades de segurança e saúde do trabalho.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-4 transition-colors duration-300 mx-auto">
              <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
