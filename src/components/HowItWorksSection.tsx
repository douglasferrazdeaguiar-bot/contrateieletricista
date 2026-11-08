const steps = [
  {
    number: "1",
    title: "Você informa o serviço",
    description: "Conte o que precisa e a localização.",
  },
  {
    number: "2",
    title: "Avaliamos a necessidade",
    description: "Analisamos o pedido e a eventual visita técnica.",
  },
  {
    number: "3",
    title: "Apresentamos o orçamento",
    description: "Combinamos as condições antes de executar.",
  },
  {
    number: "4",
    title: "Agendamos e executamos",
    description: "Realizamos o serviço contratado na data combinada.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold md:font-bold text-foreground mb-3 md:mb-4 tracking-tight">
            Como Funciona
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card p-5 md:p-6 rounded-2xl border border-border/60 shadow-soft text-center"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-lg font-bold">
                {step.number}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
