import { motion } from "framer-motion";
import {
  BarChart3, Bell, FileText, LayoutDashboard, Lock, TrendingUp } from
"lucide-react";
import vitaImg from "@/assets/vita-dr-sigma.png";
import dashboardImg from "@/assets/dashboard-screenshot.png";

const dashFeatures = [
{ icon: LayoutDashboard, title: "Acesso centralizado", desc: "Tudo em uma plataforma única e intuitiva." },
{ icon: Bell, title: "Alertas automáticos", desc: "Notificações de vencimentos e pendências em tempo real." },
{ icon: BarChart3, title: "Indicadores estratégicos", desc: "KPIs de SST para tomada de decisão baseada em dados." },
{ icon: FileText, title: "Gestão documental", desc: "PGR, PCMSO, LTCAT e laudos sempre organizados e acessíveis." },
{ icon: TrendingUp, title: "Relatórios executivos", desc: "Relatórios prontos para compliance e apresentações à diretoria." },
{ icon: Lock, title: "Segurança dos dados", desc: "Criptografia e controle de acesso para proteção total." }];


const TechnologySection = () =>
<section id="tecnologia" className="py-10 lg:py-14 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10">

        
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          VitaSigma Dashboard
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Nossa plataforma proprietária reúne gestão, indicadores e automação em uma interface moderna e poderosa.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
        {/* Mock dashboard */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>

          <img
          src={dashboardImg}
          alt="VitaSigma Dashboard - Painel de gestão SST"
          className="rounded-2xl border border-border shadow-xl w-full object-contain" />

        </motion.div>

        {/* Characters */}
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center">

          <img
          src={vitaImg}
          alt="Engenheira Vita e Dr. Sigma – VitaSigma"
          className="w-full max-w-sm object-contain drop-shadow-2xl animate-float" />

        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashFeatures.map((f, i) =>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">

            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default TechnologySection;