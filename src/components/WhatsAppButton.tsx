import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50">
      <Button
        size="lg"
        aria-label="Falar no WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-soft hover:shadow-xl transition-all duration-300"
        onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Gostaria de falar sobre serviços elétricos.', '_blank', 'noopener,noreferrer')}
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;