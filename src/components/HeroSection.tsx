import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarDays } from "lucide-react";

const HeroSection = () => {
  const scrollToScheduling = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Serviços Elétricos Profissionais em Brasília
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Instalações, manutenção e emergências com segurança e garantia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={scrollToScheduling}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-button"
            >
              <CalendarDays className="w-5 h-5 mr-2" />
              Agendar Serviço
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/5561996339282", "_blank", "noopener,noreferrer")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
