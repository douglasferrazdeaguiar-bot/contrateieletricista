import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999",
      subtitle: "Atendemos 24h"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@contratei.com.br",
      subtitle: "Resposta em até 2h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP",
      subtitle: "Atendemos toda região"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 7h às 18h",
      subtitle: "Emergências 24h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e transforme sua casa com a qualidade 
            e confiança que você merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <info.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-white font-semibold mb-2">{info.title}</h3>
              <p className="text-white text-lg font-medium mb-1">{info.content}</p>
              <p className="text-white/70 text-sm">{info.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Solicite seu Orçamento Gratuito
              </h3>
              <p className="text-white/90 mb-6">
                Preencha o formulário ao lado ou entre em contato diretamente. 
                Nossa equipe retornará em até 2 horas!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/90">Atendimento personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/90">Orçamento sem compromisso</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white/90">Visita técnica gratuita</span>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Seu telefone"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Descreva o serviço que precisa"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Solicitar Orçamento Gratuito
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