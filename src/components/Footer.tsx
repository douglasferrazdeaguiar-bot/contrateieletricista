const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border/60 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <img
              src="/lovable-uploads/contratei-logo.png"
              alt="CONTRATEI Eletricista"
              className="h-12 w-auto mb-4"
            />
            <p className="text-foreground font-semibold">CONTRATEI ELETRICISTA</p>
            <p className="text-muted-foreground text-sm">CNPJ: 52.785.857/0001-68</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-3">Contato</h3>
            <p className="text-muted-foreground text-sm mb-1">
              WhatsApp:{" "}
              <a
                href="https://wa.me/5561996339282"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                (61) 99633-9282
              </a>
            </p>
            <p className="text-muted-foreground text-sm">Atendimento em Brasília e região</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => { e.preventDefault(); scrollTo("servicos"); }}
                  className="text-muted-foreground hover:text-primary"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#orcamento"
                  onClick={(e) => { e.preventDefault(); scrollTo("orcamento"); }}
                  className="text-muted-foreground hover:text-primary"
                >
                  Orçamento
                </a>
              </li>
              <li>
                <a href="#/privacidade" className="text-muted-foreground hover:text-primary">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} CONTRATEI ELETRICISTA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
