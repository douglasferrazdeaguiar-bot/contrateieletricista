import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const { useState } = React;

const galleryItems = [
  {
    src: "https://contrateieletricista.lovable.app/lovable-uploads/servico-wallbox.png",
    alt: "Instalação de Wallbox para veículos elétricos",
    caption: "Instalação de Wallbox",
  },
  {
    src: "https://contrateieletricista.lovable.app/lovable-uploads/servico-quadro-residencial.jpg",
    alt: "Quadro de distribuição elétrica residencial",
    caption: "Quadro Residencial",
  },
  {
    src: "https://contrateieletricista.lovable.app/lovable-uploads/servico-quadro-comercial.jpg",
    alt: "Quadro de distribuição elétrica comercial",
    caption: "Quadro Comercial",
  },
  {
    src: "https://contrateieletricista.lovable.app/lovable-uploads/servico-iluminacao-residencial.jpg",
    alt: "Projeto de iluminação residencial",
    caption: "Iluminação Residencial",
  },
  {
    src: "https://contrateieletricista.lovable.app/lovable-uploads/servico-loja-comercial.jpg",
    alt: "Instalação elétrica em loja comercial",
    caption: "Loja Comercial",
  },
  {
    src: "https://contrateieletricista.lovable.app/lovable-uploads/servico-iluminacao-comercial.jpg",
    alt: "Projeto de iluminação comercial",
    caption: "Iluminação Comercial",
  },
];

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços Executados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alguns trabalhos reais realizados com segurança e padrão profissional.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-card"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Caption */}
              <div className="p-3 bg-card">
                <p className="text-sm text-muted-foreground text-center">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-2 bg-background/95 backdrop-blur-sm border-border">
            <VisuallyHidden>
              <DialogTitle>{selectedImage?.caption}</DialogTitle>
            </VisuallyHidden>
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <p className="text-center text-muted-foreground mt-3 text-sm">
                  {selectedImage.caption}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioGallery;
