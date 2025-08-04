import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(61) 99633-9282",
      subtitle: "Atendemos 24h"
    },
    {
      icon: Mail,
      title: "WhatsApp",
      content: "(61) 99633-9282",
      subtitle: "Resposta rápida"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Brasília, DF",
      subtitle: "CEP 71590-538"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 7h às 18h",
      subtitle: "Emergências 24h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Precisa de Serviços Elétricos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e garanta a segurança elétrica da sua casa 
            ou empresa com profissionais certificados e mais de 10 anos de experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-card backdrop-blur-sm p-6 rounded-xl border border-border text-center group hover:bg-muted/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{info.title}</h3>
              <p className="text-foreground text-lg font-medium mb-1">{info.content}</p>
              <p className="text-muted-foreground text-sm">{info.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="bg-card backdrop-blur-sm rounded-2xl border border-border p-8 max-w-4xl mx-auto shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Orçamento Elétrico Gratuito
              </h3>
              <p className="text-muted-foreground mb-6">
                Preencha o formulário ao lado ou chame no WhatsApp. 
                Nossa equipe retornará em até 2 horas com seu orçamento!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Diagnóstico elétrico gratuito</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Orçamento sem compromisso</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Equipe certificada e uniformizada</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 backdrop-blur-sm rounded-xl p-6 border border-border">
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Seu telefone"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Descreva o serviço elétrico que precisa"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                <Button 
                  type="button"
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-button"
                  onClick={() => window.open('https://wa.me/5561996339282?text=Olá! Gostaria de solicitar um orçamento para serviços elétricos.', '_blank')}
                >
                  Solicitar Orçamento Elétrico
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;