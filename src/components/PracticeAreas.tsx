import React from "react";
import { 
  Scale, Shield, Gavel, FileCheck, FileText, Heart, 
  Home, User, BookOpen, Lightbulb, BarChart4, MessageCircle 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '../contexts/LanguageContext';

const PracticeAreas = () => {
  const { t } = useLanguage();
  
  const practiceAreas = [
    {
      title: t('criminal_defense'),
      description: t('criminal_defense_desc'),
      icon: Scale,
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: true
    },
    {
      title: t('cyber_crime'),
      description: t('cyber_crime_desc'),
      icon: Shield,
      image: "hacking.png"
    },
    {
      title: t('court_marriage'),
      description: t('court_marriage_desc'),
      icon: FileText,
      image: "/court.jpg"
    },
    {
      title: t('bail_applications'),
      description: t('bail_applications_desc'),
      icon: Gavel,
      image: "/bail.jpg"
    },
    {
      title: t('divorce_cases'),
      description: t('divorce_cases_desc'),
      icon: User,
      image: "/divorce.png"
    },
    {
      title: t('matrimonial_cases'),
      description: t('matrimonial_cases_desc'),
      icon: Heart,
      image: "io.jpg"
    },
    {
      title: t('womens_domestic'),
      description: t('womens_domestic_desc'),
      icon: Home,
      image: "domestic.jpeg"
    },
    {
      title: t('hindu_muslim_law'),
      description: t('hindu_muslim_law_desc'),
      icon: BookOpen,
      image: ""
    },
    {
      title: t('contract_agreement'),
      description: t('contract_agreement_desc'),
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: t('banking_finance'),
      description: t('banking_finance_desc'),
      icon: BarChart4,
      image: "money.jpg"
    }
  ];

  return (
    <section id="practice-areas" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">{t('practice_areas')}</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            {t('practice_areas_subtitle')}
          </p>
        </div>

        {/* Featured Criminal Defense Banner */}
        <div className="mb-12 bg-gradient-to-r from-navy to-navy-dark text-white p-8 md:p-10 rounded-lg shadow-lg animate-fade-in transform transition-transform duration-500 hover:scale-[1.01] overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={practiceAreas[0].image} 
              alt="Criminal Defense" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Specialized in Criminal Defense
              </h3>
              <p className="mb-4">
                Advocate Rajak brings years of experience and expertise in criminal law to provide effective legal representation for clients facing criminal charges.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assault and violent crimes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Drug offenses and property crimes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>White-collar crimes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>DUI and traffic violations</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="bg-white/10 p-8 rounded-full">
                <Scale className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.filter(area => !area.featured).map((area, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:border-navy hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="bg-gray-100 p-4 rounded-full mb-4 transition-colors duration-300 hover:bg-navy/10 -mt-10 border-4 border-white z-10">
                  <area.icon className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">{area.title}</h3>
                <p className="text-gray-700">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://wa.me/919829673560"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center transform transition-transform hover:scale-105 duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
