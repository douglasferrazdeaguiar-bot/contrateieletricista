import { CheckCircle, Target, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Clientes Atendidos" },
    { number: "1000+", label: "Projetos Concluídos" },
    { number: "15+", label: "Anos de Experiência" },
    { number: "98%", label: "Taxa de Satisfação" },
  ];

  const values = [
    "Excelência em tudo que fazemos",
    "Inovação constante e criatividade", 
    "Transparência e confiança",
    "Foco no cliente e resultados"
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com mais de 10 anos de experiência, somos especialistas em reparos 
                e pequenas reformas, oferecendo qualidade e confiança para seu lar.
              </p>
            </div>

            <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Nossa Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Transformar cada lar em um ambiente mais seguro, funcional e bonito 
                através de serviços de qualidade e atendimento personalizado.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Acreditamos que sua casa merece o melhor cuidado, e nosso papel é 
                oferecer soluções práticas e duradouras para todos os tipos de 
                reparos e pequenas reformas.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Nossos Valores</h3>
              </div>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
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
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                  Fale Conosco
                </button>
                <button className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-semibold transition-colors">
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