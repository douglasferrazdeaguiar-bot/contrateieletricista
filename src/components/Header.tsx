import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/contratei-logo.png" 
              alt="Contratei Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#agendamento" className="text-foreground hover:text-primary transition-colors font-medium">
              Agendamento
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors font-medium">
              Depoimentos
            </a>
          </nav>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
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
