import { motion } from "framer-motion";
import {
  BarChart3, Bell, FileText, LayoutDashboard, Lock, TrendingUp,
} from "lucide-react";

const dashFeatures = [
  { icon: LayoutDashboard, title: "Acesso centralizado", desc: "Tudo em uma plataforma única e intuitiva." },
  { icon: Bell, title: "Alertas automáticos", desc: "Notificações de vencimentos e pendências em tempo real." },
  { icon: BarChart3, title: "Indicadores estratégicos", desc: "KPIs de SST para tomada de decisão baseada em dados." },
  { icon: FileText, title: "Gestão documental", desc: "PGR, PCMSO, LTCAT e laudos sempre organizados e acessíveis." },
  { icon: TrendingUp, title: "Relatórios executivos", desc: "Relatórios prontos para compliance e apresentações à diretoria." },
  { icon: Lock, title: "Segurança dos dados", desc: "Criptografia e controle de acesso para proteção total." },
];

const TechnologySection = () => (
  <section id="tecnologia" className="py-20 lg:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Tecnologia</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          VitaSigma Dashboard
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Nossa plataforma proprietária reúne gestão, indicadores e automação em uma interface moderna e poderosa.
        </p>
      </motion.div>

      {/* Mock dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-14"
      >
        <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">dashboard.vitasigma.com.br</span>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Exames em dia", value: "94%", color: "text-green-600" },
                { label: "Pendências", value: "12", color: "text-accent" },
                { label: "Colaboradores", value: "1.247", color: "text-foreground" },
              ].map((stat, i) => (
                <div key={i} className="bg-muted/60 rounded-xl p-4 text-center">
                  <p className={`font-display text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="h-32 bg-muted/40 rounded-xl flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-primary/20" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashFeatures.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologySection;
