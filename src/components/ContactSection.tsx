import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  phone: z.string()
    .min(10, "Telefone deve ter pelo menos 10 dígitos")
    .max(15, "Telefone deve ter no máximo 15 dígitos")
    .regex(/^[\d\s\(\)\-\+]+$/, "Formato de telefone inválido"),
  email: z.string()
    .email("Email inválido")
    .max(100, "Email deve ter no máximo 100 caracteres"),
  description: z.string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres")
    .max(500, "Descrição deve ter no máximo 500 caracteres")
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const message = `Olá! Gostaria de solicitar um orçamento para serviços elétricos.

Nome: ${values.name}
Telefone: ${values.phone}
Email: ${values.email}
Descrição: ${values.description}`;
    
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/5561996339282?text=${encodedMessage}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
    toast({
      title: "Formulário enviado!",
      description: "Redirecionando para o WhatsApp...",
    });
  };

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
               <div className="flex items-center justify-center mb-6">
                 <img 
                   src="/lovable-uploads/a7d8d575-09d1-43c3-908c-b957ce70e046.png" 
                   alt="Contratei Logo" 
                   className="h-16 w-auto opacity-80"
                 />
               </div>
               <Form {...form}>
                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                   <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                       <FormItem>
                         <FormControl>
                           <Input 
                             placeholder="Seu nome"
                             className="px-4 py-3 h-auto"
                             {...field}
                           />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                   <FormField
                     control={form.control}
                     name="phone"
                     render={({ field }) => (
                       <FormItem>
                         <FormControl>
                           <Input 
                             type="tel"
                             placeholder="Seu telefone"
                             className="px-4 py-3 h-auto"
                             {...field}
                           />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                   <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                       <FormItem>
                         <FormControl>
                           <Input 
                             type="email"
                             placeholder="Seu e-mail"
                             className="px-4 py-3 h-auto"
                             {...field}
                           />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                   <FormField
                     control={form.control}
                     name="description"
                     render={({ field }) => (
                       <FormItem>
                         <FormControl>
                           <Textarea 
                             rows={4}
                             placeholder="Descreva o serviço elétrico que precisa"
                             className="px-4 py-3 resize-none"
                             {...field}
                           />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                   <Button 
                     type="submit"
                     size="lg" 
                     className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-button"
                   >
                     Solicitar Orçamento Elétrico
                   </Button>
                 </form>
               </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;