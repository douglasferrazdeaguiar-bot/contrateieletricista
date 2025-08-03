import { useState } from "react";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    {
      title: "Carregador para Veículo Elétrico GWM",
      location: "Brasília - DF",
      description: "Instalação de carregador veicular com circuito dedicado e proteção",
      category: "Automação",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Instalação Elétrica Comercial",
      location: "Asa Norte - Brasília",
      description: "Projeto elétrico completo com iluminação LED e acabamentos modernos",
      category: "Comercial",
      image: "photo-1581090464777-f3220bbe1b8b"
    },
    {
      title: "Quadro de Distribuição Residencial",
      location: "Taguatinga - DF",
      description: "Modernização de quadro elétrico com disjuntores e organização de circuitos",
      category: "Quadro Elétrico",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Padrão de Entrada Trifásico",
      location: "Águas Claras - DF",
      description: "Instalação completa de padrão de entrada com medidor e proteções",
      category: "Padrão de Entrada",
      image: "photo-1581090464777-f3220bbe1b8b"
    },
    {
      title: "Carregador Veicular Residencial",
      location: "Lago Sul - Brasília",
      description: "Sistema de carregamento para carro elétrico em área externa",
      category: "Automação",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Manutenção Elétrica Preventiva",
      location: "Sobradinho - DF",
      description: "Revisão completa da instalação elétrica e troca de componentes",
      category: "Manutenção",
      image: "photo-1581090464777-f3220bbe1b8b"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos projetos elétricos que realizamos com qualidade e segurança 
            em Brasília e região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(selectedImage === index ? null : index)}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <div className="text-primary font-bold text-2xl">⚡</div>
                  </div>
                  <span className="text-sm bg-accent/20 text-accent-foreground px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  📍 {item.location}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {selectedImage === index && (
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Projeto realizado seguindo todas as normas técnicas de segurança, 
                      com garantia de serviço e materiais de qualidade certificada.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer ver seu projeto elétrico aqui também?
          </p>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;