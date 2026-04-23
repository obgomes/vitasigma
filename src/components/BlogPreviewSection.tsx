import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts, formatDate } from "@/data/blogPosts";

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
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all group flex flex-col"
          >
            <div className="h-40 gradient-blue-subtle flex items-center justify-center relative">
              <span className="font-display text-5xl font-bold text-primary/20">VS</span>
              <span className="absolute top-3 left-3 text-xs bg-white/90 text-primary font-semibold px-2.5 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {post.summary}
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold justify-start">
                <Link to={`/blog/${post.slug}`}>
                  Ler artigo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreviewSection;
