import { Zap, Wrench, Paintbrush, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Reparos Elétricos",
      description: "Instalações e reparos elétricos residenciais com segurança e qualidade garantida.",
      features: [
        "Instalação de Tomadas",
        "Troca de Disjuntores", 
        "Fiação Elétrica",
        "Iluminação"
      ]
    },
    {
      icon: Wrench,
      title: "Encanamento",
      description: "Serviços completos de encanamento para sua casa, do básico ao complexo.",
      features: [
        "Vazamentos",
        "Desentupimentos",
        "Instalação de Torneiras", 
        "Tubulações"
      ]
    },
    {
      icon: Paintbrush,
      title: "Pintura e Acabamentos",
      description: "Pintura interna e externa com materiais de qualidade e acabamento perfeito.",
      features: [
        "Pintura Interna",
        "Pintura Externa",
        "Textura e Grafiato",
        "Acabamentos Especiais"
      ]
    },
    {
      icon: Hammer,
      title: "Pequenas Reformas",
      description: "Reformas e melhorias para deixar sua casa mais funcional e bonita.",
      features: [
        "Instalação de Prateleiras",
        "Montagem de Móveis",
        "Reparos em Portas",
        "Manutenção Geral"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços completos de reparos e reformas para deixar 
            sua casa sempre em perfeito estado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="sm"
                className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
              >
                Saiba Mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Não encontrou o serviço que procura? Entre em contato conosco!
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;