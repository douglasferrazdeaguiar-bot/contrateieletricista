import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2.5 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://contrateieletricista.lovable.app/lovable-uploads/contratei-logo.png" 
              alt="Contratei Logo" 
              className="h-9 md:h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("servicos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="#agendamento"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("agendamento")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Agendamento
            </a>
            <a
              href="#depoimentos"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("depoimentos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Depoimentos
            </a>
          </nav>
          
          <Button 
            size="sm"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft md:h-10 md:px-5"
            onClick={() => window.open("https://wa.me/5561996339282", "_blank", "noopener,noreferrer")}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
