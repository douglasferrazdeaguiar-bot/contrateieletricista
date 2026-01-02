import { Clock, CheckCircle, MapPin } from "lucide-react";

const AuthoritySection = () => {
  const stats = [
    { icon: Clock, text: "+10 anos de experiência" },
    { icon: CheckCircle, text: "+500 serviços realizados" },
    { icon: MapPin, text: "Atendimento em Brasília e entorno" },
  ];

  return (
    <section className="py-8 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <stat.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
