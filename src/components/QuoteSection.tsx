import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceTypes = [
  "Instalações elétricas residenciais e comerciais",
  "Quadros elétricos e proteções",
  "Manutenção elétrica",
  "Iluminação",
  "Carregadores veiculares e wallbox",
  "Padrão de entrada",
  "Aterramento e equipotencialização",
  "SPDA",
  "Detectores de fumaça",
  "Automação",
  "Outro",
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

const QuoteSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { toast } = useToast();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  const isFormValid = () => {
    const cleanPhone = phone.replace(/\D/g, "");
    return name.trim().length >= 3 && cleanPhone.length >= 10 && service && city.trim().length >= 2;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha nome, telefone, tipo de serviço e cidade/região.",
        variant: "destructive",
      });
      return;
    }

    const lines = [
      "Olá! Vim pelo site da CONTRATEI e gostaria de solicitar um orçamento.",
      "",
      `Nome: ${name.trim()}`,
      `Telefone: ${phone}`,
      `Serviço: ${service}`,
      `Cidade/Região: ${city.trim()}`,
    ];
    if (description.trim()) lines.push(`Descrição: ${description.trim()}`);
    if (date) lines.push(`Preferência de data: ${date}`);

    window.open(
      `https://wa.me/5561996339282?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="orcamento" className="py-12 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold md:font-bold text-foreground mb-3 md:mb-4 tracking-tight">
            Solicite um Orçamento
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Preencha os dados abaixo. A mensagem será montada automaticamente e aberta no WhatsApp para você enviar.
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-soft md:shadow-card p-4 md:p-8 border border-border/60">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              <div className="space-y-2">
                <Label htmlFor="quote-name" className="text-foreground font-medium">
                  Nome *
                </Label>
                <Input
                  id="quote-name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 bg-background border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-phone" className="text-foreground font-medium">
                  Telefone (WhatsApp) *
                </Label>
                <Input
                  id="quote-phone"
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

            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              <div className="space-y-2">
                <Label htmlFor="quote-service" className="text-foreground font-medium">
                  Tipo de serviço *
                </Label>
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger id="quote-service" className="h-12 bg-background border-border">
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quote-city" className="text-foreground font-medium">
                  Cidade ou região administrativa *
                </Label>
                <Input
                  id="quote-city"
                  type="text"
                  placeholder="Ex.: Águas Claras, Sudoeste..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="h-12 bg-background border-border"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-description" className="text-foreground font-medium">
                Descrição da necessidade
              </Label>
              <Textarea
                id="quote-description"
                placeholder="Descreva brevemente o que você precisa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-background border-border min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quote-date" className="text-foreground font-medium">
                Preferência de data <span className="text-muted-foreground font-normal">(opcional, sujeita à confirmação)</span>
              </Label>
              <Input
                id="quote-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="h-12 bg-background border-border"
              />
            </div>

            <div className="flex items-start gap-2.5 bg-muted/60 rounded-xl p-3.5 text-sm text-muted-foreground">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                Ao tocar em "Enviar pelo WhatsApp", o aplicativo será aberto com a mensagem pronta.
                É necessário confirmar o envio no WhatsApp para que recebamos sua solicitação.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={!isFormValid()}
                className="w-full md:w-auto rounded-full px-10 py-5 md:px-12 md:py-6 text-base md:text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft disabled:opacity-50"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar pelo WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
