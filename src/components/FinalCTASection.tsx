import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarDays } from "lucide-react";

const FinalCTASection = () => {
  const scrollToScheduling = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Precisa de um eletricista agora?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open("https://wa.me/5561996339282", "_blank", "noopener,noreferrer")}
              className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chamar no WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToScheduling}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold"
            >
              <CalendarDays className="w-5 h-5 mr-2" />
              Agendar Serviço
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
