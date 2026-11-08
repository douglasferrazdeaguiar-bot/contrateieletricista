import { Zap, Shield, Wrench, Lightbulb, Car, Plug, Earth, CloudLightning, AlarmSmoke, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Instalações elétricas residenciais e comerciais",
    description: "Infraestrutura, eletrodutos, cabeamento, tomadas, interruptores, novos circuitos e adequação de pontos.",
  },
  {
    icon: Shield,
    title: "Quadros elétricos e proteções",
    description: "Montagem, organização e adequação de QDC, disjuntores, DR, DPS e identificação de circuitos.",
  },
  {
    icon: Wrench,
    title: "Manutenção elétrica",
    description: "Diagnóstico de falhas, quedas de energia, curtos-circuitos, aquecimento e reparos preventivos e corretivos.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação",
    description: "Instalação e substituição de luminárias, iluminação LED e soluções residenciais e comerciais.",
  },
  {
    icon: Car,
    title: "Carregadores veiculares e wallbox",
    description: "Infraestrutura, cabeamento, quadro de proteção e instalação para residências, empresas e condomínios, conforme avaliação técnica.",
  },
  {
    icon: Plug,
    title: "Padrão de entrada",
    description: "Instalação e adequação do padrão de entrada conforme os requisitos da distribuidora local.",
  },
  {
    icon: Earth,
    title: "Aterramento e equipotencialização",
    description: "Execução e adequação de sistemas de aterramento e conexões de proteção.",
  },
  {
    icon: CloudLightning,
    title: "SPDA",
    description: "Instalação, manutenção e adequação de sistemas de proteção contra descargas atmosféricas.",
  },
  {
    icon: AlarmSmoke,
    title: "Detectores de fumaça",
    description: "Instalação, substituição e manutenção conforme as características do equipamento e a necessidade do local.",
  },
  {
    icon: Settings2,
    title: "Automação",
    description: "Instalação e configuração de dispositivos para controle de iluminação e outras funções compatíveis com o serviço contratado.",
  },
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
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Atendimento residencial, comercial e predial em Brasília e região.
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-5 md:p-6 rounded-2xl border border-border/60 shadow-soft hover:shadow-card transition-shadow duration-300 flex flex-col"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
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
      </div>
    </section>
  );
};

export default ServicesSection;
