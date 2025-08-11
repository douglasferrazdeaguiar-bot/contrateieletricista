import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "Brasília, DF",
      service: "Instalação Elétrica Residencial",
      rating: 5,
      comment: "Excelente profissional! Fez toda a instalação elétrica da minha casa nova em apenas 3 dias. Trabalho muito bem organizado, sempre pontual e explicou tudo que estava fazendo. Recomendo sem dúvidas!",
      date: "Dezembro 2024"
    },
    {
      name: "Maria Santos",
      location: "Águas Claras, DF",
      service: "Manutenção de Quadro Elétrico",
      rating: 5,
      comment: "Tive um problema sério no quadro de luz e ele resolveu no mesmo dia que liguei. Muito profissional, chegou rápido e o preço foi justo. Minha energia voltou a funcionar perfeitamente!",
      date: "Novembro 2024"
    },
    {
      name: "João Oliveira",
      location: "Taguatinga, DF",
      service: "Padrão de Entrada Trifásico",
      rating: 5,
      comment: "Precisava instalar um padrão trifásico para minha oficina. O trabalho foi impecável, tudo conforme as normas da CEB e passou na vistoria sem problemas. Muito satisfeito com o resultado!",
      date: "Outubro 2024"
    },
    {
      name: "Ana Paula",
      location: "Samambaia, DF",
      service: "Instalação de Pontos e Tomadas",
      rating: 5,
      comment: "Contratei para instalar várias tomadas e pontos de luz em casa. Trabalho limpo, sem sujeira e ficou tudo perfeito. Preço honesto e entrega no prazo combinado. Super recomendo!",
      date: "Setembro 2024"
    },
    {
      name: "Roberto Costa",
      location: "Planaltina, DF",
      service: "Reparo Emergencial",
      rating: 5,
      comment: "Tive uma emergência elétrica num domingo à noite e ele veio me atender. Resolveu o problema rapidamente e salvou meu fim de semana. Profissional dedicado e confiável!",
      date: "Novembro 2024"
    },
    {
      name: "Luciana Ferreira",
      location: "Ceilândia, DF",
      service: "Instalação Completa Comercial",
      rating: 5,
      comment: "Fez toda a parte elétrica da minha loja. Projeto bem elaborado, materiais de qualidade e execução perfeita. A loja está funcionando há 6 meses sem nenhum problema elétrico!",
      date: "Agosto 2024"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 500 clientes satisfeitos em toda região do Distrito Federal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-card-foreground mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Service */}
              <div className="bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
                <span className="text-primary text-sm font-medium">
                  {testimonial.service}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-card-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-xs">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-section rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Quer fazer parte dos nossos clientes satisfeitos?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra por que somos a escolha preferida 
              para serviços elétricos no Distrito Federal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-button transition-all duration-300"
                onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Vi os depoimentos e gostaria de solicitar um orçamento.', '_blank', 'noopener,noreferrer')}
              >
                Solicitar Orçamento
              </button>
              <button 
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Contatos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;