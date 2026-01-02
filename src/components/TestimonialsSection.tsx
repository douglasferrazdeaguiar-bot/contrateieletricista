import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      service: "Instalação Elétrica Residencial",
      comment: "Trabalho impecável, pontual e muito profissional. Recomendo!"
    },
    {
      name: "Maria Santos",
      service: "Manutenção de Quadro Elétrico",
      comment: "Resolveu o problema no mesmo dia. Atendimento rápido e preço justo."
    },
    {
      name: "João Oliveira",
      service: "Padrão de Entrada Trifásico",
      comment: "Passou na vistoria da CEB sem problemas. Muito satisfeito!"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Dizem Nossos Clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
