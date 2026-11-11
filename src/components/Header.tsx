import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/contratei-logo.webp.asset.json";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Empresas", href: "#empresas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Orçamento", href: "#orcamento" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background/90 backdrop-blur-md border-b border-border/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2.5 md:py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            aria-label="CONTRATEI Eletricista - voltar ao início"
          >
            <img
              src={logo.url}
              width={640}
              height={427}
              alt="CONTRATEI Eletricista"
              className="h-11 md:h-14 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft md:h-10 md:px-5"
              onClick={() =>
                window.open(
                  "https://wa.me/5561996339282?text=" +
                    encodeURIComponent("Olá! Vim pelo site da CONTRATEI e gostaria de solicitar um orçamento."),
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              WhatsApp
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden min-w-11 min-h-11 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" className="md:hidden pt-4 pb-2 border-t border-border/60 mt-2" aria-label="Menu móvel">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={`/${link.href}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-2 text-foreground hover:text-primary font-medium rounded-lg hover:bg-muted/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
