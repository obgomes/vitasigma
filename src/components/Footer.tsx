import logo from "@/assets/logo-vitasigma.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 py-14">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="VitaSigma" className="h-10 mb-4 brightness-0 invert opacity-90" />
          <p className="text-sm leading-relaxed text-primary-foreground/60">
            Tecnologia e Engenharia aplicadas à Segurança do Trabalho.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["PGR", "PCMSO", "LTCAT", "eSocial SST", "SESMT Terceirizado", "Treinamentos"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Início", "Serviços", "Tecnologia", "Blog", "Contato"].map((l) => (
              <li key={l}>
                <button
                  onClick={() =>
                    document
                      .querySelector(`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary-foreground transition-colors"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" /> (11) 9999-9999
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

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} VitaSigma – Tech & SSO. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
