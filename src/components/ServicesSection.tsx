import { Zap, Shield, Wrench, Lightbulb, Car, Plug, Earth, CloudLightning, AlarmSmoke, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Zap, title: "Execução de infraestrutura e cabeamento", description: "Eletrodutos, infraestrutura e passagem de cabos para obras comerciais." },
  { icon: Shield, title: "Montagem e adequação de quadros", description: "Montagem, organização, proteções e identificação dos circuitos elétricos." },
  { icon: Lightbulb, title: "Iluminação comercial", description: "Instalação de luminárias, spots e iluminação para lojas, farmácias e restaurantes." },
  { icon: Wrench, title: "Manutenção elétrica", description: "Diagnóstico e manutenção preventiva e corretiva das instalações." },
  { icon: AlarmSmoke, title: "Instalação de detectores de incêndio", description: "Instalação dos equipamentos conforme o escopo contratado." },
];
const complementary = [
  { icon: Car, title: "Carregadores veiculares e wallbox", description: "Infraestrutura e instalação conforme avaliação técnica." },
  { icon: Earth, title: "Aterramento e equipotencialização", description: "Execução e adequação de sistemas e conexões de proteção." },
  { icon: CloudLightning, title: "SPDA", description: "Instalação, manutenção e adequação de proteção contra descargas atmosféricas." },
  { icon: Plug, title: "Elétrica residencial e padrão de entrada", description: "Instalações, circuitos e adequação ao padrão da distribuidora local." },
  { icon: Settings2, title: "Automação", description: "Controle de iluminação e dispositivos compatíveis com o escopo contratado." },
];

const ServicesSection = () => {
  const requestQuote = (service: string) => {
    window.open(
      "https://wa.me/5561996339282?text=" +
        encodeURIComponent(`Olá! Vim pelo site da CONTRATEI e gostaria de solicitar um orçamento para: ${service}.`),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="servicos" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold md:font-bold text-foreground mb-3 md:mb-4 tracking-tight">
            Serviços para obras comerciais
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Execução elétrica para construtoras no Distrito Federal e em Goiás.
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-5 md:p-6 rounded-lg border border-border/60 shadow-soft hover:shadow-card transition-shadow duration-300 flex flex-col"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => requestQuote(service.title)}
                className="self-start rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Solicitar orçamento
              </Button>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-14 border-t border-border pt-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Serviços complementares</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complementary.map((service) => <div key={service.title}>
              <service.icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-3">{service.description}</p>
              <Button size="sm" variant="outline" onClick={() => requestQuote(service.title)}>Solicitar orçamento</Button>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
