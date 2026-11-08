import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="bg-background">
      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight tracking-tight">
              Serviços elétricos em Brasília para sua casa, empresa e condomínio
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Instalações, manutenção e adequações elétricas, carregadores veiculares,
              SPDA e detectores de fumaça. A CONTRATEI também atende demandas de
              construtoras e imobiliárias.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/5561996339282?text=" +
                      encodeURIComponent("Olá! Vim pelo site da CONTRATEI e gostaria de solicitar um orçamento."),
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base md:text-lg font-semibold shadow-button"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar orçamento pelo WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToServices}
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base md:text-lg font-semibold"
              >
                Conhecer nossos serviços
              </Button>
            </div>
          </div>

          <div className="order-first md:order-last">
            <img
              src="/lovable-uploads/projeto-wallbox.jpg"
              alt="Instalação de carregador veicular wallbox executada pela CONTRATEI"
              className="w-full rounded-2xl shadow-card object-cover aspect-[4/3]"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
