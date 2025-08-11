import { CheckCircle, Target, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "200+", label: "Clientes Atendidos" },
    { number: "200+", label: "Projetos Concluídos" },
    { number: "10+", label: "Anos de Experiência" },
    { number: "98%", label: "Taxa de Satisfação" },
  ];

  const values = [
    "Orçamento gratuito",
    "Atendimento rápido", 
    "Garantia de serviço",
    "Equipe certificada",
    "Atendimento em toda Brasília e entorno"
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Sobre a Contratei
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Mais de 10 anos de experiência em serviços elétricos e manutenção na 
                construção civil. Atuamos com profissionalismo, segurança e pontualidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Garantimos qualidade em cada etapa do serviço, com equipe uniformizada, 
                equipamentos adequados e atendimento humanizado.
              </p>
            </div>

            <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-card-foreground">Nossa Missão</h3>
              </div>
              <p className="text-card-foreground/90 leading-relaxed font-medium">
                Transformar cada lar e empresa em um ambiente mais seguro e funcional 
                através de instalações elétricas de qualidade e atendimento especializado.
              </p>
              <p className="text-card-foreground/90 leading-relaxed mt-4 font-medium">
                Sua segurança elétrica é nossa prioridade. Oferecemos soluções técnicas 
                confiáveis e duradouras para todos os tipos de instalações elétricas 
                residenciais e comerciais.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Nossos Diferenciais</h3>
              </div>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card p-6 rounded-xl shadow-soft text-center group hover:shadow-card transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Pronto para Transformar Seu Negócio?</h3>
              </div>
              <p className="mb-6 opacity-90">
                Junte-se a centenas de empresas que já confiam em nossas soluções
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Gostaria de falar sobre serviços elétricos.', '_blank', 'noopener,noreferrer')}
                >
                  Fale Conosco
                </button>
                <button 
                  className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-semibold transition-colors"
                  onClick={() => window.open('https://www.instagram.com/contratei_profissionais/', '_blank', 'noopener,noreferrer')}
                >
                  Ver Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;