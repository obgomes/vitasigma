import { useState } from "react";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoColor from "@/assets/logo-vitasigma.jpg";
import linktreeIcon from "@/assets/linktree-icon.png";

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
  { type: "linktree" as const, href: "https://linktr.ee/VitaSigmaTechSSO", label: "Linktree" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <img src={logoColor} alt="VitaSigma" className="h-14 md:h-16 object-contain ml-4" />

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
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
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={s.label}
              >
                {"icon" in s ? (
                  <s.icon className="h-4 w-4" />
                ) : (
                  <img src={linktreeIcon} alt="Linktree" className="h-4 w-4 object-contain" />
                )}
              </a>
            ))}
          </div>
          <Button size="sm" onClick={() => handleClick("#contato")}>
            Falar com especialista
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-border px-4 pb-4">
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
                {"icon" in s ? (
                  <s.icon className="h-5 w-5" />
                ) : (
                  <img src={linktreeIcon} alt="Linktree" className="h-5 w-5 object-contain" />
                )}
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
