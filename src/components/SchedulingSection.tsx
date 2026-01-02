import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Clock, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00",
  "14:00", "15:00", "16:00", "17:00"
];

const formatPhoneNumber = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  
  if (numbers.length <= 2) {
    return numbers.length > 0 ? `(${numbers}` : "";
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }
  if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

const SchedulingSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const isFormValid = () => {
    const cleanPhone = phone.replace(/\D/g, "");
    return name.trim().length >= 3 && cleanPhone.length >= 10 && date && selectedTime;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos corretamente.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const formattedDate = date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "";
    
    const message = `🔔 *NOVO AGENDAMENTO*%0A%0A` +
      `👤 *Cliente:* ${encodeURIComponent(name)}%0A` +
      `📱 *Telefone:* ${encodeURIComponent(phone)}%0A` +
      `📅 *Data:* ${formattedDate}%0A` +
      `🕐 *Horário:* ${selectedTime}`;

    const ownerPhone = "5561996339282";
    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${message}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    setName("");
    setPhone("");
    setDate(undefined);
    setSelectedTime("");
  };

  const disabledDays = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0;
  };

  return (
    <section id="agendamento" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agende Seu Serviço
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha a data e horário. Entraremos em contato para confirmar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendário */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <span>Data</span>
                </div>
                <div className="flex justify-center md:justify-start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={disabledDays}
                    locale={ptBR}
                    className="rounded-xl border border-border bg-background p-3 pointer-events-auto"
                  />
                </div>
              </div>

              {/* Horários */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Horário</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                        selectedTime === time
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:border-primary/50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dados do Cliente */}
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 bg-background border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Telefone (WhatsApp) *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(61) 99999-9999"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={16}
                  className="h-12 bg-background border-border"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="w-full md:w-auto px-12 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Agendar Serviço"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-2xl text-center">
              Agendamento Realizado!
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Entraremos em contato em breve para confirmar.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setShowSuccess(false)} className="px-8">
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SchedulingSection;
