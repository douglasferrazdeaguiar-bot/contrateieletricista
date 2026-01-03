import Header from "@/components/Header";
import BannerCarousel from "@/components/BannerCarousel";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import DifferentialsSection from "@/components/DifferentialsSection";
import SchedulingSection from "@/components/SchedulingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BannerCarousel />
      <AuthoritySection />
      <ServicesSection />
      <PortfolioGallery />
      <DifferentialsSection />
      <SchedulingSection />
      <TestimonialsSection />
      <FinalCTASection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
