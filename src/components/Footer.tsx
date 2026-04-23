import logo from "@/assets/logo-vitasigma-azul.png";
import linktreeIcon from "@/assets/linktree-icon.png";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/vitasigmatechsso/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/vitasigma", label: "LinkedIn" },
  { type: "linktree" as const, href: "https://linktr.ee/VitaSigmaTechSSO", label: "Linktree" },
];

const Footer = () => (
  <footer className="bg-card text-foreground py-8 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center sm:text-left">
          <img src={logo} alt="VitaSigma" className="h-10 mb-3 mx-auto sm:mx-0" />
          <p className="text-base leading-relaxed text-muted-foreground">
            Tecnologia, Medicina e Segurança do Trabalho.
          </p>
          <div className="flex items-center gap-3 mt-3 justify-center sm:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
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
        </div>

        <div className="text-center sm:text-left">
          <h4 className="font-display font-semibold text-foreground mb-3 text-lg">Links</h4>
          <ul className="space-y-1.5 text-base text-muted-foreground">
            {["Início", "Serviços", "Tecnologia", "Blog", "Contato"].map((l) => (
              <li key={l}>
                <button
                  onClick={() =>
                    document
                      .querySelector(`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="font-display font-semibold text-foreground mb-3 text-lg">Contato</h4>
          <ul className="space-y-2 text-base text-muted-foreground">
            <li className="flex items-center gap-2 justify-center sm:justify-start">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="https://wa.me/55119911191768" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                (11) 99119-1768
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center sm:justify-start">
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span className="text-muted-foreground">WhatsApp Business</span>
            </li>
            <li className="flex items-center gap-2 justify-center sm:justify-start">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:contato@vitasigma.com.br" className="hover:text-primary transition-colors">
                contato@vitasigma.com.br
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center sm:justify-start">
              <MapPin className="h-4 w-4 shrink-0" /> São Paulo, SP
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-6 pt-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VitaSigma – Tech & SSO. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
