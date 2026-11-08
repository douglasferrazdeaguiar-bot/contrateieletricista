import { Button } from "@/components/ui/button";
import { Building2, Check } from "lucide-react";

const items = [
  "Execução de infraestrutura e cabeamento",
  "Montagem e adequação de quadros",
  "Iluminação e pontos elétricos",
  "Manutenção de imóveis e áreas comuns",
  "Instalação de wallbox",
  "SPDA",
  "Detectores de fumaça",
];

const BusinessSection = () => {
  return (
    <section id="empresas" className="py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold md:font-bold tracking-tight">
              Parceria elétrica para construtoras, imobiliárias e condomínios
            </h2>
          </div>

          <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
            Atendemos demandas de instalação, manutenção e adequação elétrica em obras,
            lojas, imóveis e áreas comuns. Solicite uma proposta conforme o escopo e as
            necessidades do seu projeto.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 mb-8 max-w-2xl">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2.5">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/90 text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            onClick={() =>
              window.open(
                "https://wa.me/5561996339282?text=" +
                  encodeURIComponent("Olá! Vim pelo site da CONTRATEI e gostaria de solicitar uma proposta para minha empresa/obra."),
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base md:text-lg font-semibold shadow-button"
          >
            Solicitar proposta para minha empresa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
