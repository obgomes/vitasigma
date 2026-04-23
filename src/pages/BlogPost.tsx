import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getPostBySlug, formatDate, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (post) {
      document.title = `${post.title} | Blog VitaSigma`;
    }
  }, [post]);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
          <h1 className="font-display text-3xl font-bold">Post não encontrado</h1>
          <Link to="/#blog" className="text-primary mt-4 inline-block">
            Voltar para o blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold">
                <Tag className="h-3 w-3" /> {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{post.summary}</p>

            <div className="h-56 md:h-80 rounded-xl overflow-hidden mb-10">
              <img
                src={post.image}
                alt={post.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="prose prose-slate max-w-none [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-3 [&>p]:text-foreground/80 [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:mb-2 [&>ul>li]:text-foreground/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 p-6 rounded-xl border border-border bg-card">
              <p className="text-sm text-muted-foreground">Escrito por</p>
              <p className="font-display font-semibold text-foreground">{post.author}</p>
            </div>
          </motion.div>
        </article>

        {related.length > 0 && (
          <section className="container mx-auto px-4 mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Leia também
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="block bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/40 transition-all"
                >
                  <p className="text-xs text-primary font-semibold mb-2">{p.category}</p>
                  <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.summary}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/#blog">Ver todos os artigos</Link>
              </Button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
