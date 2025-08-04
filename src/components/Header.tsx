import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/e1c5eca4-5034-4067-9b87-87e0dbd55b25.png" 
              alt="Contratei Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex"
              onClick={() => window.open('https://wa.me/5561996339282', '_blank')}
            >
              Fale Conosco
            </Button>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Gostaria de solicitar um orçamento para serviços elétricos.', '_blank')}
            >
              Orçamento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;