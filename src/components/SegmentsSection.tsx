import { motion } from "framer-motion";
import { Factory, HardHat, HeartPulse, ShoppingBag, Truck, Building2 } from "lucide-react";

const segments = [
  { icon: Factory, label: "Indústria" },
  { icon: HardHat, label: "Construção Civil" },
  { icon: HeartPulse, label: "Saúde" },
  { icon: ShoppingBag, label: "Comércio e Varejo" },
  { icon: Truck, label: "Logística e Transporte" },
  { icon: Building2, label: "Serviços e Escritórios" },
];

const SegmentsSection = () => (
  <section className="py-12 lg:py-16 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Segmentos que atendemos
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Expertise para atender os mais variados setores da economia com soluções sob medida.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {segments.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all text-left"
          >
            <s.icon
              className="absolute -right-2 top-1/2 -translate-y-1/2 h-20 w-20 text-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              strokeWidth={1.5}
            />
            <p className="relative z-10 text-sm font-medium text-foreground pr-10">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SegmentsSection;
