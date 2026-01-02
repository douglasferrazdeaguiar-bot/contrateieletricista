import { Calculator, Clock, Award, ShieldCheck } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Calculator,
      title: "Orçamento gratuito",
    },
    {
      icon: Clock,
      title: "Atendimento rápido",
    },
    {
      icon: Award,
      title: "Equipe certificada",
    },
    {
      icon: ShieldCheck,
      title: "Garantia de serviço",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-foreground font-medium text-sm md:text-base">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
