import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PortfolioSection } from "@/components/PortfolioSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
