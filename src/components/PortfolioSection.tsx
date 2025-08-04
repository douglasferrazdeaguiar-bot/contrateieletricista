import { useState } from "react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const portfolioItems = [
    {
      title: "Iluminação LED Residencial",
      location: "Águas Claras - DF",
      description: "Projeto completo de iluminação LED embutida em cozinha moderna com controle automatizado",
      category: "Residencial",
      image: "/lovable-uploads/12f2d256-4888-460e-9413-75bf30018f69.png"
    },
    {
      title: "Quadro de Distribuição Residencial",
      location: "Taguatinga - DF", 
      description: "Instalação e organização de quadro elétrico com DR, DPS e identificação completa",
      category: "Quadro Elétrico",
      image: "/lovable-uploads/c2154055-7a84-4970-beaf-0c1146302933.png"
    },
    {
      title: "Carregador Veicular Elétrico",
      location: "Lago Sul - Brasília",
      description: "Instalação de carregador para veículo elétrico com circuito dedicado e proteções",
      category: "Automação",
      image: "/lovable-uploads/45017765-5a7c-4356-8f68-2970ef4e7bd0.png"
    },
    {
      title: "Quadro Elétrico Comercial",
      location: "Asa Norte - Brasília",
      description: "Modernização de quadro elétrico comercial com identificação e adequação às normas",
      category: "Comercial",
      image: "/lovable-uploads/b134ce9c-eaf4-4b06-a1c7-3a097e97169f.png"
    },
    {
      title: "Iluminação Externa Decorativa",
      location: "Park Way - DF",
      description: "Sistema de iluminação externa com controle automático e efeitos decorativos",
      category: "Automação",
      image: "/lovable-uploads/3dbe4690-f333-45c9-ace1-cc580d27ce19.png"
    },
    {
      title: "Iluminação Moderna Integrada",
      location: "Jardim Botânico - DF",
      description: "Projeto de iluminação embutida em área de lazer com LED e controle inteligente",
      category: "Residencial",
      image: "/lovable-uploads/3c5c88a8-d96b-421d-b210-4013843fa9aa.png"
    },
    {
      title: "Adequação de Padrão Elétrico",
      location: "Sobradinho - DF",
      description: "Modernização e adequação de quadro às normas da CEB com aumento de carga",
      category: "Padrão de Entrada",
      image: "/lovable-uploads/f65def89-0969-421d-99a3-ce70954dbfca.png"
    },
    {
      title: "Carregador Veicular Externo",
      location: "Vicente Pires - DF",
      description: "Instalação de carregador veicular em área externa com proteção contra intempéries",
      category: "Automação", 
      image: "/lovable-uploads/d1c98764-e355-475c-b14f-d7a60c678660.png"
    }
  ];

  const categories = ["Todos", "Residencial", "Comercial", "Automação", "Quadro Elétrico", "Padrão de Entrada"];
  
  const filteredItems = selectedCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Projetos Realizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos em instalações elétricas, 
            automação e manutenção em Brasília e região.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  📍 {item.location}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-foreground hover:bg-primary"
                    onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Vi este projeto no portfólio e gostaria de saber mais.', '_blank')}
                  >
                    Solicitar Orçamento Similar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Gostou dos Nossos Trabalhos?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Quer um projeto similar para sua casa ou empresa? Entre em contato 
            e receba um orçamento personalizado para suas necessidades elétricas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
              onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Vi o portfólio e gostaria de solicitar um orçamento.', '_blank')}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://wa.me/5561996339282', '_blank')}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;