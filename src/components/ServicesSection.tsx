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
      description: "Montagem de quadros com DR, DPS e disjuntores para sua segurança."
    },
    {
      icon: Wrench,
      title: "Manutenção e Emergências 24h",
      description: "Reparos urgentes, diagnóstico de falhas e correção de curto-circuito."
    },
    {
      icon: FileCheck,
      title: "Padrão de Entrada CEB",
      description: "Instalação e regularização de padrões monofásicos e trifásicos."
    },
    {
      icon: Car,
      title: "Wallbox para Veículos Elétricos",
      description: "Instalação de carregadores residenciais para veículos elétricos."
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
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
