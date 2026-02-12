import { motion } from "framer-motion";
import { Cpu, Globe, Users, Heart } from "lucide-react";

const diffs = [
  { icon: Cpu, title: "Tecnologia própria", desc: "Plataforma proprietária desenvolvida para gestão inteligente de SST." },
  { icon: Globe, title: "Abrangência nacional", desc: "Rede credenciada em todo o Brasil para exames e atendimento." },
  { icon: Users, title: "Equipe especializada", desc: "Engenheiros, médicos e técnicos com vasta experiência em SST." },
  { icon: Heart, title: "Atendimento humanizado", desc: "Consultoria próxima, ágil e focada nas necessidades do cliente." },
];

const DifferentialsSection = () => (
  <section id="diferenciais" className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 gradient-blue opacity-95" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
          Por que escolher a VitaSigma?
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {diffs.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 mx-auto mb-5 flex items-center justify-center">
              <d.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-primary-foreground mb-2">{d.title}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
