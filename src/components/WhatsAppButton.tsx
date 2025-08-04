import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Gostaria de falar sobre serviços elétricos.', '_blank')}
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;