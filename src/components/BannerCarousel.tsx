import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/projeto-wallbox.jpg",
    title: "Instalação Profissional de Wallbox",
    subtitle: "Segurança, eficiência e conformidade com as normas elétricas.",
  },
  {
    id: 2,
    image: "/lovable-uploads/projeto-quadro.jpg",
    title: "Serviços Elétricos Residenciais",
    subtitle: "Instalações, manutenções e adequações elétricas com qualidade.",
  },
  {
    id: 3,
    image: "/lovable-uploads/projeto-drogasil.jpg",
    title: "Soluções Elétricas Comerciais",
    subtitle: "Infraestrutura elétrica segura para seu negócio.",
  },
  {
    id: 4,
    image: "/lovable-uploads/projeto-youcom.jpg",
    title: "Segurança Elétrica em Primeiro Lugar",
    subtitle: "Serviços executados com responsabilidade e padrão profissional.",
  },
];

const BannerCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    
    // Auto-play
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  const handleCTA = () => {
    window.open(
      "https://wa.me/5561996339282?text=Olá! Gostaria de solicitar um orçamento para serviços elétricos.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Blur overlay for depth */}
              <div className="absolute inset-0 backdrop-blur-[2px]" />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
                <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto font-light">
                    {slide.subtitle}
                  </p>
                  <div className="pt-4">
                    <Button
                      size="lg"
                      onClick={handleCTA}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Solicitar Orçamento
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white hidden sm:flex items-center justify-center"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white hidden sm:flex items-center justify-center"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;
