import { Button } from "@/components/ui/button";
import { Instagram, Phone } from "lucide-react";

const Banner = () => {
  return (
    <section className="bg-gradient-primary py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-glow/30 rounded-full translate-x-12 translate-y-12"></div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
           <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
             Sua <span className="bg-black/50 px-6 py-3 rounded-lg text-accent backdrop-blur-sm border border-accent/30">
               Solução Elétrica
             </span> Completa em Brasília
           </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Atendimento 24h • Orçamento Gratuito • Equipe Certificada • Mais de 500 Projetos Entregues
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold px-12 py-4 text-lg shadow-button group animate-pulse hover:animate-none transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Preciso de um eletricista urgente!', '_blank', 'noopener,noreferrer')}
            >
              <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Chamar Eletricista Agora
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
              onClick={() => window.open('https://www.instagram.com/contratei_profissionais/', '_blank', 'noopener,noreferrer')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Siga no Instagram
            </Button>
          </div>
          
          <div className="text-white/80 text-sm">
            🔴 EMERGÊNCIA ELÉTRICA? Atendemos 24 horas por dia!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;