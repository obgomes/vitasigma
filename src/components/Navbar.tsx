import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoColor from "@/assets/logo-vitasigma.jpg";
import logoWhite from "@/assets/logo-vitasigma-branco.png";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Exames", href: "#exames" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/vitasigmatechsso/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/vitasigma", label: "LinkedIn" },
  { icon: LinkIcon, href: "https://linktr.ee/VitaSigmaTechSSO", label: "Linktree" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <img
          src={scrolled ? logoColor : logoWhite}
          alt="VitaSigma"
          className="h-10 md:h-12 object-contain"
        />

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-2 ml-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  scrolled
                    ? "text-foreground/60 hover:text-primary"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <Button
            size="sm"
            onClick={() => handleClick("#contato")}
            className={scrolled ? "" : "bg-card text-primary hover:bg-card/90"}
          >
            Falar com especialista
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-b border-border px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="block w-full text-left py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-3 py-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={s.label}
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <Button size="sm" className="mt-2 w-full" onClick={() => handleClick("#contato")}>
            Falar com especialista
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
