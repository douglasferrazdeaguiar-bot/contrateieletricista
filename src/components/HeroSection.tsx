import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle, Pause, Play } from "lucide-react";

// Fotos reais de trabalhos enviadas pela empresa (reaproveitadas do carrossel anterior)
const slides = [
  { src: "/lovable-uploads/projeto-wallbox.jpg", alt: "Carregador veicular wallbox instalado pela CONTRATEI" },
  { src: "/lovable-uploads/projeto-quadro.jpg", alt: "Quadro de distribuição elétrica montado pela CONTRATEI" },
  { src: "/lovable-uploads/projeto-youcom.jpg", alt: "Instalação elétrica em loja comercial atendida pela CONTRATEI" },
  { src: "/lovable-uploads/servico-iluminacao-comercial.jpg", alt: "Iluminação comercial instalada pela CONTRATEI" },
];

const INTERVAL = 6000;

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length), []);

  const autoplay = !paused && !hovering && !reducedMotion;
  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(t);
  }, [autoplay, index, go]);

  const [touchX, setTouchX] = useState<number | null>(null);

  const openWhatsApp = () =>
    window.open(
      "https://wa.me/5561996339282?text=" +
        encodeURIComponent("Olá! Vim pelo site da CONTRATEI e gostaria de solicitar um orçamento."),
      "_blank",
      "noopener,noreferrer"
    );

  const ctrl =
    "inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/15 text-primary-foreground border border-primary-foreground/30 hover:bg-background/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors";

  return (
    <section
      id="inicio"
      aria-roledescription="carrossel"
      aria-label="Trabalhos realizados pela CONTRATEI"
      className="relative isolate overflow-hidden bg-primary"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocusCapture={() => setHovering(true)}
      onBlurCapture={() => setHovering(false)}
      onTouchStart={(e) => { setTouchX(e.touches[0].clientX); setHovering(true); }}
      onTouchEnd={(e) => {
        if (touchX !== null) {
          const dx = e.changedTouches[0].clientX - touchX;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }
        setTouchX(null);
        setHovering(false);
      }}
    >
      {/* Fotos de fundo */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={`absolute inset-0 w-full h-full object-cover ${
              reducedMotion ? "" : "transition-opacity duration-1000 ease-in-out"
            } ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
      </div>

      {/* Conteúdo fixo */}
      <div className="container mx-auto px-4 flex flex-col min-h-[520px] sm:min-h-[560px] md:min-h-[620px]">
        <div className="flex-1 flex items-center justify-center py-12 md:py-20">
          <div className="max-w-3xl text-center">
            <span className="inline-block h-1 w-12 rounded-full bg-accent mb-5" aria-hidden="true" />
            <h1 className="text-[1.65rem] leading-tight sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 tracking-tight">
              Serviços elétricos em Brasília para sua casa, empresa e condomínio
            </h1>
            <p className="text-base md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Instalações, manutenção e adequações elétricas, wallbox, SPDA e detectores de fumaça.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-sm sm:max-w-none mx-auto">
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 md:px-8 py-6 text-base md:text-lg font-semibold shadow-button whitespace-normal h-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                Solicitar orçamento pelo WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 md:px-8 py-6 text-base md:text-lg font-semibold whitespace-normal h-auto"
              >
                Conhecer nossos serviços
              </Button>
            </div>
          </div>
        </div>

        {/* Controles em faixa própria, sem sobrepor o conteúdo; espaço à direita para o botão flutuante */}
        <div className="flex items-center justify-start sm:justify-center gap-3 pb-6 pr-20 sm:pr-0">
          <button type="button" className={ctrl} onClick={() => go(-1)} aria-label="Foto anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2" role="tablist" aria-label="Escolher foto">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Foto ${i + 1} de ${slides.length}: ${s.alt}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-7 bg-accent" : "w-2.5 bg-primary-foreground/60 hover:bg-primary-foreground"}`}
              />
            ))}
          </div>
          <button type="button" className={ctrl} onClick={() => go(1)} aria-label="Próxima foto">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            className={ctrl}
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Retomar troca automática de fotos" : "Pausar troca automática de fotos"}
            aria-pressed={paused}
          >
            {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
        </div>
        <p className="sr-only" aria-live="polite">{slides[index].alt}</p>
      </div>
    </section>
  );
};

export default HeroSection;
