import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10 md:py-14 grid gap-8 lg:gap-12 items-center md:grid-cols-2">
        <div className="min-w-0">
          <div className="h-1 w-12 bg-accent mb-5" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">Execução elétrica para obras comerciais e construtoras</h1>
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-primary-foreground/90">Infraestrutura, cabeamento, quadros e iluminação para lojas, farmácias e restaurantes. Atendimento no Distrito Federal e em Goiás.</p>
          <div className="mt-7 flex flex-col gap-3 items-start">
            <Button size="lg" asChild className="h-auto py-4 px-5 whitespace-normal bg-accent text-accent-foreground hover:bg-accent/90 max-w-full">
              <a href={"https://wa.me/5561996339282?text=" + encodeURIComponent("Olá! Vim pelo site da CONTRATEI e gostaria de solicitar uma proposta para minha obra.")} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5 shrink-0" />Solicitar proposta para minha obra</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-auto py-4 px-5 border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary whitespace-normal">
              <Link to="/#obras">Ver obras realizadas</Link>
            </Button>
          </div>
        </div>
        <HeroVideo />
      </div>
    </section>
  );
};
export default HeroSection;
