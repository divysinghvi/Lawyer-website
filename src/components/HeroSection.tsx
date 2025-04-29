import React from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-navy to-navy-dark text-white pt-16"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          backgroundBlendMode: "overlay",
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="mb-8 md:mb-0 flex flex-col items-center">
            <div className="fit-content">
              <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden">
                <AvatarImage 
                  src="/rahu.jpg" 
                  alt="Advocate Jitendra Rajak" 
                  className="object-cover object-center w-full h-full"
                />
                <AvatarFallback className="text-4xl">JR</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="max-w-3xl animate-fade-in text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Jitendra Rajak
            </h1>
            <h2 className="text-2xl md:text-3xl mb-2">
              {t('advocate_title')}
            </h2>
            <p className="text-lg md:text-xl mb-2">
              B.Com, M.Com, LL.B, PGDCL (Cyber Law)
            </p>
            <p className="text-lg md:text-xl mb-2 text-maroon font-semibold">
              Associate: DRD Legal and Tax Consultant
            </p>
            <div className="h-1 w-24 bg-maroon my-6 mx-auto md:mx-0"></div>
            <p className="text-lg md:text-xl mb-8">
              {t('hero_description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://calendly.com/jitendrarajak-2612/30min"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free 5 Min Consultation
              </a>
              <a 
                href="#practice-areas"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white/20 transition-all duration-300 font-semibold text-center"
              >
                {t('explore_practice_areas')}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
        <a 
          href="#about" 
          className="inline-block text-white animate-bounce"
          aria-label="Scroll Down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
