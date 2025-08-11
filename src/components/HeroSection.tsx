import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-section overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/lovable-uploads/a7d8d575-09d1-43c3-908c-b957ce70e046.png')" }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full"></div>
      <div className="absolute top-1/2 right-20 w-32 h-32 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-accent/30 rounded-full"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-foreground space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/lovable-uploads/a7d8d575-09d1-43c3-908c-b957ce70e046.png" 
                alt="Contratei Logo" 
                className="h-40 w-auto brightness-110 contrast-110 drop-shadow-lg"
              />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">Especialistas</span> em Serviços{" "}
              <span className="text-accent">Elétricos</span><br />
              Residenciais e Comerciais
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sua segurança elétrica começa aqui. Soluções completas para sua instalação 
              elétrica com segurança, agilidade e garantia. Atendemos Brasília e região com 
              mais de 10 anos de experiência.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-foreground/90 font-semibold">Orçamento elétrico gratuito</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-foreground/90 font-semibold">Equipe certificada e uniformizada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-foreground/90 font-semibold">Atendimento em Brasília e entorno</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-foreground/90 font-semibold">Mais de 10 anos de experiência</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-button"
                onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Gostaria de solicitar um orçamento para serviços elétricos.', '_blank', 'noopener,noreferrer')}
              >
                Solicitar Orçamento Elétrico
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://wa.me/5561996339282', '_blank', 'noopener,noreferrer')}
              >
                Fale pelo WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Statistics circle */}
              <div className="w-80 h-80 bg-card rounded-full flex items-center justify-center shadow-card border border-border">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground text-lg">Projetos Entregues</div>
                </div>
              </div>
              
              {/* Small accent circle */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-soft">
                <span className="text-accent-foreground font-bold text-lg">99%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;