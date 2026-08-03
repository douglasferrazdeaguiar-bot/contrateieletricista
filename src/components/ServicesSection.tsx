import { Zap, Shield, Wrench, FileCheck, Car } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Instalação Elétrica",
      description: "Instalações completas residenciais e comerciais com projeto técnico."
    },
    {
      icon: Shield,
      title: "Quadro de Distribuição",
      description: "Montagem de quadros com DR, DPS e disjuntores para a sua segurança."
    },
    {
      icon: Wrench,
      title: "Manutenção e Emergência 24h",
      description: "Reparos urgentes, diagnóstico de falhas e correção de curto-circuito."
    },
    {
      icon: FileCheck,
      title: "Padrão de Entrada (CEB)",
      description: "Instalação e regularização de padrões monofásicos e trifásicos."
    },
    {
      icon: Car,
      title: "Wallbox para Carros Elétricos",
      description: "Instalação de carregadores residenciais para veículos elétricos."
    }
  ];


  return (
    <section id="servicos" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold md:font-bold text-foreground mb-3 md:mb-4 tracking-tight">
            Nossos Serviços
          </h2>
          <div className="mx-auto h-1 w-12 rounded-full bg-accent" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-5 md:p-6 rounded-2xl border border-border/60 shadow-soft hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
