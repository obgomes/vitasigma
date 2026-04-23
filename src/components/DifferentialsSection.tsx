import { motion } from "framer-motion";
import { Cpu, Globe, Users, Heart } from "lucide-react";

const diffs = [
  { icon: Cpu, title: "Tecnologia própria", desc: "Plataforma proprietária desenvolvida para gestão inteligente de SST." },
  { icon: Globe, title: "Abrangência nacional", desc: "Rede credenciada em todo o Brasil para exames e atendimento." },
  { icon: Users, title: "Equipe especializada", desc: "Engenheiros, médicos e técnicos com vasta experiência em SST." },
  { icon: Heart, title: "Atendimento humanizado", desc: "Consultoria próxima, ágil e focada nas necessidades do cliente." },
];

const DifferentialsSection = () => (
  <section id="diferenciais" className="py-12 lg:py-16 relative overflow-hidden">
    <div className="absolute inset-0 gradient-blue opacity-95" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
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
            className="group relative overflow-hidden bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-left"
          >
            <d.icon
              className="absolute -right-3 top-1/2 -translate-y-1/2 h-24 w-24 text-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              strokeWidth={1.5}
            />
            <div className="relative z-10 pr-14">
              <h3 className="font-display font-semibold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
