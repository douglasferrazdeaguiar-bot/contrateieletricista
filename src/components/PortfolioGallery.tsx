import { useState } from "react";
import { Button } from "@/components/ui/button";
import { availableWorks, evolution, hasPortfolioFile } from "@/lib/portfolio";
import { WorkMedia } from "@/components/WorkMedia";

const PortfolioGallery = () => {
  const [expanded, setExpanded] = useState(false);
  const evolutionReady = evolution.every((work) => hasPortfolioFile(work.cover));
  return <>
    <section id="obras" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground">Obras e serviços realizados</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">Conheça registros de execução, instalações concluídas e manutenção em ambientes comerciais.</p>
        {availableWorks.length > 0 && <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"><WorkMedia items={expanded ? availableWorks : availableWorks.slice(0, 6)} /></div>}
        {availableWorks.length > 6 && <Button variant="outline" className="mt-8" onClick={() => setExpanded(!expanded)}>{expanded ? "Ver menos trabalhos" : "Ver mais trabalhos"}</Button>}
      </div>
    </section>
    {evolutionReady && <section className="py-12 md:py-20 bg-secondary/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-bold">Da execução à iluminação instalada</h2>
        <p className="mt-3 text-muted-foreground">Drogasil — Jardim Nova Esperança, Goiânia/GO</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8"><WorkMedia items={evolution} /></div>
      </div>
    </section>}
  </>;
};
export default PortfolioGallery;
