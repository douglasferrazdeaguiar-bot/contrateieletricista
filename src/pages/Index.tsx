import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SchedulingSection from "@/components/SchedulingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AuthoritySection />
      <ServicesSection />
      <DifferentialsSection />
      <SchedulingSection />
      <TestimonialsSection />
      <FinalCTASection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
