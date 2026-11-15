import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [blocked, setBlocked] = useState(false);
  useEffect(() => {
    const check = () => {
      const size = window.innerWidth >= 768 ? 64 : 56;
      const offset = window.innerWidth >= 768 ? 24 : 20;
      const left = window.innerWidth - offset - size;
      const top = window.innerHeight - offset - size;
      setBlocked(Array.from(document.querySelectorAll("main button, main a, main input, main textarea, main [role='combobox']")).some((element) => {
        const box = element.getBoundingClientRect();
        return box.width > 0 && box.height > 0 && box.right > left - 8 && box.left < left + size + 8 && box.bottom > top - 8 && box.top < top + size + 8;
      }));
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => { window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, []);
  if (blocked) return null;
  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50">
      <Button
        size="lg"
        aria-label="Falar com a CONTRATEI no WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-soft hover:shadow-xl transition-all duration-300"
        onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Gostaria de falar sobre serviços elétricos.', '_blank', 'noopener,noreferrer')}
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;