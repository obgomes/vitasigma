import logo from "@/assets/logo-vitasigma.jpg";
import linktreeIcon from "@/assets/linktree-icon.png";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/vitasigmatechsso/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/vitasigma", label: "LinkedIn" },
  { type: "linktree" as const, href: "https://linktr.ee/VitaSigmaTechSSO", label: "Linktree" },
];

const Footer = () => (
  <footer className="bg-card text-foreground py-8 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <img src={logo} alt="VitaSigma" className="h-10 mb-3" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Tecnologia, Medicina e Segurança do Trabalho.
          </p>
          <div className="flex items-center gap-3 mt-3">
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

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3 text-sm">Serviços</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {["PGR", "PCMSO", "LTCAT", "eSocial SST", "SESMT Terceirizado", "Treinamentos"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3 text-sm">Links</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
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

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3 text-sm">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="https://wa.me/5511966308228" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                (11) 96630-8228
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="https://wa.me/5511983737163" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                (11) 98373-7163
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" /> contato@vitasigma.com.br
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> São Paulo, SP
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
