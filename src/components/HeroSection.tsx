import { Button } from "@/components/ui/button";
import { CheckCircle, Zap } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [showZap, setShowZap] = useState(false);
  return (
    <section className="relative min-h-screen bg-gradient-section overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/lovable-uploads/a7d8d575-09d1-43c3-908c-b957ce70e046.png')" }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-32 h-32 bg-primary/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-accent/30 rounded-full animate-ping"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-foreground space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative group cursor-pointer">
                {/* Logo com efeitos interativos */}
                <img 
                  src="/lovable-uploads/a7d8d575-09d1-43c3-908c-b957ce70e046.png" 
                  alt="Contratei Logo" 
                  className="h-40 w-auto brightness-110 contrast-110 drop-shadow-lg 
                           transition-all duration-500 ease-in-out
                           hover:scale-110 hover:brightness-125 hover:drop-shadow-2xl
                           animate-fade-in group-hover:animate-pulse interactive-logo"
                  onClick={(e) => {
                    // Efeito de rotação ao clicar + raio
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.transition = 'transform 0.6s ease-in-out';
                    img.style.transform = 'rotate(360deg) scale(1.1)';
                    setShowZap(true);
                    setTimeout(() => {
                      img.style.transform = 'rotate(0deg) scale(1)';
                    }, 600);
                    setTimeout(() => setShowZap(false), 700);
                  }}
                />
                
                {/* Efeito de brilho ao redor */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 
                              rounded-full blur-xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 animate-pulse"></div>
                
                {/* Partículas decorativas */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full 
                              animate-bounce opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 delay-100"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary rounded-full 
                              animate-bounce opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 delay-200"></div>
                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-accent/70 rounded-full 
                              animate-ping opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 delay-300"></div>
                
                {/* Texto interativo que aparece no hover */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                              bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm
                              opacity-0 group-hover:opacity-100 transition-all duration-300
                              translate-y-2 group-hover:translate-y-0">
                  ⚡ Clique na logo!
                </div>
              </div>
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
            
            <div className="flex justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-button"
                onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Gostaria de solicitar um orçamento para serviços elétricos.', '_blank', 'noopener,noreferrer')}
              >
                Solicitar Orçamento Elétrico
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