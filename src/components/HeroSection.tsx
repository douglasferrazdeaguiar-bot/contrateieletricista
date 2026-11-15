import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle, Pause, Play } from "lucide-react";
import { heroWorks } from "@/lib/portfolio";
import { WorkImage } from "@/components/WorkMedia";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reduced, setReduced] = useState(true);
  const touch = useRef<number | null>(null);
  const go = useCallback((direction: number) => {
    if (heroWorks.length) setIndex((current) => (current + direction + heroWorks.length) % heroWorks.length);
  }, []);
  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update(); query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || interacting || reduced || heroWorks.length < 2) return;
    const timer = setTimeout(() => go(1), 6000);
    return () => clearTimeout(timer);
  }, [paused, interacting, reduced, index, go]);
  return (
    <section id="inicio" className="bg-primary text-primary-foreground">
      <div className={`container mx-auto px-4 py-10 md:py-14 grid gap-8 lg:gap-12 items-center ${heroWorks.length ? "md:grid-cols-2" : "max-w-4xl"}`}>
        <div className="min-w-0">
          <div className="h-1 w-12 bg-accent mb-5" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">Execução elétrica para obras comerciais e construtoras</h1>
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-primary-foreground/90">Infraestrutura, cabeamento, quadros e iluminação para lojas, farmácias e restaurantes. Atendimento no Distrito Federal e em Goiás.</p>
          <div className="mt-7 flex flex-col gap-3 items-start">
            <Button size="lg" asChild className="h-auto py-4 px-5 whitespace-normal bg-accent text-accent-foreground hover:bg-accent/90 max-w-full">
              <a href={"https://wa.me/5561996339282?text=" + encodeURIComponent("Olá! Vim pelo site da CONTRATEI e gostaria de solicitar uma proposta para minha obra.")} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5 shrink-0" />Solicitar proposta para minha obra</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-auto py-4 px-5 border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary whitespace-normal">
              <Link to="/#obras">Ver obras realizadas</Link>
            </Button>
          </div>
        </div>
        {heroWorks.length > 0 && <div className="min-w-0" role="region" aria-roledescription="carrossel" aria-label="Obras atendidas"
          onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
          onFocusCapture={() => setInteracting(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}
          onTouchStart={(event) => { touch.current = event.touches[0]?.clientX ?? null; setInteracting(true); }}
          onTouchEnd={(event) => { const end = event.changedTouches[0]?.clientX; if (touch.current !== null && end !== undefined && Math.abs(end - touch.current) > 50) go(end < touch.current ? 1 : -1); touch.current = null; setInteracting(false); }}>
          <div className="relative aspect-[4/3] bg-secondary rounded-lg">
            {heroWorks.map((work, position) => (position === index || position === 0) && <div key={work.cover} aria-hidden={position !== index}
              className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${position === index ? "opacity-100" : "opacity-0"}`}><WorkImage work={work} eager={position === 0} /></div>)}
          </div>
          <div className="flex flex-wrap gap-2 mt-4 pb-4 pr-16 md:pr-0 items-center" aria-label="Contrôles das fotos">
            <Button size="icon" variant="ghost" aria-label="Foto anterior" onClick={() => go(-1)}><ChevronLeft /></Button>
            {heroWorks.map((work, position) => <Button key={work.cover} size="icon" variant="ghost" aria-label={`Foto ${position + 1}: ${work.title}`} aria-pressed={position === index} onClick={() => setIndex(position)} className="w-7 h-10"><span className={`h-2.5 w-2.5 rounded-full ${position === index ? "bg-accent" : "bg-primary-foreground/50"}`} /></Button>)}
            <Button size="icon" variant="ghost" aria-label="Próxima foto" onClick={() => go(1)}><ChevronRight /></Button>
            <Button size="icon" variant="ghost" aria-label={paused ? "Retomar troca automática de fotos" : "Pausar troca automática de fotos"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play /> : <Pause />}</Button>
          </div>
        </div>}
      </div>
    </section>
  );
};
export default HeroSection;
