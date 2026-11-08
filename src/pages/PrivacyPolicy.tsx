import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Dados coletados</h2>
            <p>
              O formulário de orçamento deste site solicita nome, telefone, tipo de serviço,
              cidade ou região administrativa, descrição da necessidade e, opcionalmente,
              uma preferência de data. Esses dados são usados apenas para montar uma mensagem
              que é aberta no seu próprio WhatsApp — nenhuma informação é armazenada em
              servidores da CONTRATEI através deste site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. Uso das informações</h2>
            <p>
              As informações enviadas por você via WhatsApp são utilizadas exclusivamente para
              atendimento, elaboração de orçamento e execução dos serviços contratados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. Ferramentas de terceiros</h2>
            <p>
              Este site utiliza o Google Tag Manager para fins de mensuração e análise de
              navegação. Essas ferramentas podem coletar dados anonimizados de uso, conforme
              suas próprias políticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Compartilhamento</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para
              fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">5. Seus direitos</h2>
            <p>
              Conforme a Lei Geral de Proteção de Dados (LGPD), você pode solicitar acesso,
              correção ou exclusão dos seus dados pessoais a qualquer momento pelo WhatsApp
              (61) 99633-9282.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">6. Contato</h2>
            <p>
              CONTRATEI ELETRICISTA — CNPJ: 52.785.857/0001-68
              <br />
              WhatsApp: (61) 99633-9282
              <br />
              Atendimento em Brasília e região.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
