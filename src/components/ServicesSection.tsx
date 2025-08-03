import { Zap, Wrench, Paintbrush, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const electricalServices = [
    {
      icon: Zap,
      title: "Instalação e Manutenção Elétrica",
      description: "Instalações elétricas completas e manutenção preventiva com segurança garantida.",
      features: [
        "Instalação de tomadas e interruptores",
        "Fiação elétrica completa", 
        "Manutenção preventiva",
        "Identificação de problemas elétricos"
      ]
    },
    {
      icon: Wrench,
      title: "Quadro de Distribuição",
      description: "Instalação, modernização e manutenção de quadros elétricos residenciais e comerciais.",
      features: [
        "Quadros de distribuição",
        "Troca de disjuntores",
        "Organização de circuitos", 
        "Adequação às normas"
      ]
    },
    {
      icon: Zap,
      title: "Correção de Fuga de Energia",
      description: "Identificação e correção de vazamentos elétricos que aumentam sua conta de luz.",
      features: [
        "Diagnóstico completo",
        "Localização de fugas",
        "Correção de problemas",
        "Teste de eficiência"
      ]
    },
    {
      icon: Hammer,
      title: "Padrão de Entrada",
      description: "Instalação e adequação de padrão de entrada conforme normas da CEB.",
      features: [
        "Padrão residencial",
        "Padrão comercial",
        "Adequação CEB",
        "Aumento de carga"
      ]
    }
  ];

  const complementaryServices = [
    {
      icon: Paintbrush,
      title: "Pintura e Acabamentos",
      description: "Pintura interna e externa com materiais de qualidade.",
      features: [
        "Pintura residencial",
        "Textura e grafiato",
        "Acabamentos especiais",
        "Pintura comercial"
      ]
    },
    {
      icon: Hammer,
      title: "Pequenos Reparos",
      description: "Reparos diversos para manter sua casa sempre em ordem.",
      features: [
        "Instalação de prateleiras",
        "Reparos em portas",
        "Montagem de móveis",
        "Manutenção geral"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Serviços Elétricos Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Evite riscos com instalações mal feitas. Conte com profissionais capacitados 
            para soluções completas em elétrica com segurança e agilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {electricalServices.map((service, index) => (
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

        {/* Serviços Complementares */}
        <div className="text-center mb-12 mt-20">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Serviços Complementares
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Além dos serviços elétricos, oferecemos soluções completas para sua casa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {complementaryServices.map((service, index) => (
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
            Precisa de um serviço elétrico específico? Fale conosco!
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Solicitar Orçamento Elétrico
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;