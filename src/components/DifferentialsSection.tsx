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
    <section className="py-10 md:py-16 bg-card border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-2.5 md:mb-3">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <span className="text-foreground/90 font-medium text-sm md:text-base">
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
