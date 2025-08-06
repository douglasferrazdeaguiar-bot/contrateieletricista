import { Button } from "@/components/ui/button";
import { Zap, Shield, Wrench, Home, Droplets, Paintbrush, Hammer } from "lucide-react";

const ServicesSection = () => {
  const electricalServices = [
    {
      icon: Zap,
      title: "Instalação Elétrica",
      description: "Instalações completas residenciais e comerciais",
      features: ["Projeto elétrico", "Fiação nova", "Pontos de luz", "Tomadas"]
    },
    {
      icon: Shield,
      title: "Quadro de Distribuição",
      description: "Montagem e manutenção de quadros elétricos",
      features: ["Disjuntores", "DR e DPS", "Organização", "Identificação"]
    },
    {
      icon: Wrench,
      title: "Manutenção Elétrica",
      description: "Correção de problemas e melhorias",
      features: ["Diagnóstico", "Fuga de energia", "Curto-circuito", "Emergências"]
    },
    {
      icon: Home,
      title: "Padrão de Entrada",
      description: "Instalação de padrões residenciais e comerciais",
      features: ["Monofásico", "Bifásico", "Trifásico", "Regularização"]
    }
  ];

  const otherServices = [
    {
      icon: Droplets,
      title: "Hidráulica",
      description: "Reparos e instalações hidráulicas completas"
    },
    {
      icon: Paintbrush,
      title: "Pintura",
      description: "Pintura residencial e comercial com qualidade"
    },
    {
      icon: Hammer,
      title: "Reparos Diversos",
      description: "Manutenção geral e pequenos reparos"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para sua casa ou empresa com foco em qualidade e segurança
          </p>
        </div>

        {/* Serviços Elétricos Principais */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            ⚡ Serviços Elétricos - Nossa Especialidade
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {electricalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-primary font-bold mb-3 text-lg">{service.title}</h4>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Outros Serviços */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            🔧 Serviços Complementares
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-primary font-bold mb-2 text-lg">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-section rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Precisa de um Orçamento?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento gratuito para seu projeto elétrico. 
            Atendemos com agilidade e profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
              onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Gostaria de solicitar um orçamento.', '_blank', 'noopener,noreferrer')}
            >
              Solicitar Orçamento Gratuito
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://wa.me/5561996339282', '_blank', 'noopener,noreferrer')}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;