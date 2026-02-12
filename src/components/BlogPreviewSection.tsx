import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const placeholderPosts = [
  {
    title: "O que é PGR e por que sua empresa precisa?",
    slug: "o-que-e-pgr",
    summary: "Entenda o Programa de Gerenciamento de Riscos e como ele protege sua empresa de multas e acidentes.",
    readTime: "5 min",
  },
  {
    title: "NR-1 e Riscos Psicossociais: o que muda?",
    slug: "nr-1-riscos-psicossociais",
    summary: "A nova NR-1 exige avaliação de riscos psicossociais. Saiba como se adequar.",
    readTime: "7 min",
  },
  {
    title: "Agendamento de Exames Ocupacionais: guia completo",
    slug: "agendamento-exames-ocupacionais",
    summary: "Tudo o que você precisa saber sobre exames admissionais, periódicos e demissionais.",
    readTime: "6 min",
  },
];

const BlogPreviewSection = () => (
  <section id="blog" className="py-12 lg:py-16">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Blog VitaSigma
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Conteúdos estratégicos sobre segurança do trabalho, saúde ocupacional e conformidade legal.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderPosts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="h-40 gradient-blue-subtle flex items-center justify-center">
              <span className="font-display text-5xl font-bold text-primary/20">VS</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime} de leitura
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.summary}</p>
              <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                Ler artigo <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreviewSection;
