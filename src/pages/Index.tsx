
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PracticeAreas from "../components/PracticeAreas";
import AboutSection from "../components/AboutSection";
import GalleryCarousel from "../components/GalleryCarousel"; 
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ContactSection from "../components/ContactSection";
import DisclaimerModal from "../components/DisclaimerModal";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  const { t } = useLanguage();
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [hasAgreed, setHasAgreed] = useState(() => {
    return localStorage.getItem('disclaimerAgreed') === 'true';
  });

  useEffect(() => {
    setShowDisclaimer(!hasAgreed);
  }, [hasAgreed]);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setHasAgreed(true);
    setShowDisclaimer(false);
  };

  const handleDisagree = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreas />
        <GalleryCarousel />
        <TestimonialsCarousel />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      
      {showDisclaimer && (
        <DisclaimerModal
          onAgree={handleAgree}
          onDisagree={handleDisagree}
        />
      )}
    </div>
  );
};

export default Index;
