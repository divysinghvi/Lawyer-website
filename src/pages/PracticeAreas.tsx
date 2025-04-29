import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { 
  Globe, 
  HeartHandshake, 
  Scale, 
  Gavel, 
  Users, 
  ShieldAlert, 
  BookOpen, 
  FileSignature, 
  Building, 
  Lightbulb,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const PracticeAreasPage = () => {
  const { t } = useLanguage();

  // Practice areas detailed data with icons
  const practiceAreas = [
    {
      id: 'criminal-defense',
      icon: <Scale className="h-16 w-16 text-navy" />,
      title: t('Specialized in Criminal Defense'),
      description: t('Advocate Rajak brings years of experience and expertise in criminal law to provide effective legal representation for clients facing criminal charges.'),
      details: [
        t('cyber-crime'),
        t('court-marriage'),
        t('bail-applications'),
        t('divorce-cases'),
        t('matrimonial-cases'),
        t('womens-domestic'),
        t('contract-agreement'),
        t('banking-finance')
      ],
      featured: true,
      image: ""
    },
    {
      id: 'cyber-crime',
      icon: <Globe className="h-16 w-16 text-navy" />,
      title: t('cyber_crime'),
      description: t('cyber_crime_desc'),
      details: [
        "Investigation and prosecution of cyber crimes",
        "Protection against online fraud and identity theft",
        "Data privacy violations and data breaches",
        "Digital evidence collection and analysis",
        "Legal compliance for websites and online businesses",
        "Social media defamation cases",
        "E-contract disputes"
      ],
      image: "/hacking.png"
    },
    {
      id: 'court-marriage',
      icon: <HeartHandshake className="h-16 w-16 text-navy" />,
      title: t('court_marriage'),
      description: t('court_marriage_desc'),
      details: [
        "Court marriage registration and documentation",
        "Inter-caste and inter-religion marriages",
        "Legal counseling for court marriages",
        "Assistance with special marriage act procedures",
        "Post-marriage legal documentation"
      ],
      image: "/court.jpg"
    },
    {
      id: 'bail-applications',
      icon: <Scale className="h-16 w-16 text-navy" />,
      title: t('bail_applications'),
      description: t('bail_applications_desc'),
      details: [
        "Regular bail applications",
        "Anticipatory bail applications",
        "Interim bail applications",
        "Bail conditions modification",
        "Bail cancellation opposition"
      ],
      image: "bail.jpg"
    },
    {
      id: 'divorce-cases',
      icon: <Gavel className="h-16 w-16 text-navy" />,
      title: t('divorce_cases'),
      description: t('divorce_cases_desc'),
      details: [
        "Contested divorce proceedings",
        "Mutual consent divorce",
        "Maintenance and alimony cases",
        "Child custody and visitation rights",
        "Division of matrimonial property"
      ],
      image: "divorce.png"
    },
    {
      id: 'matrimonial-cases',
      icon: <Users className="h-16 w-16 text-navy" />,
      title: t('matrimonial_cases'),
      description: t('matrimonial_cases_desc'),
      details: [
        "Maintenance under Section 125 CrPC",
        "Restitution of conjugal rights",
        "Judicial separation proceedings",
        "Annulment of marriage",
        "Mediation for matrimonial disputes"
      ],
      image: "/io.jpg"
    },
    {
      id: 'womens-domestic',
      icon: <ShieldAlert className="h-16 w-16 text-navy" />,
      title: t('womens_domestic'),
      description: t('womens_domestic_desc'),
      details: [
        "Protection against domestic violence",
        "Restraining orders and injunctions",
        "Compensation claims for victims",
        "Dowry harassment cases",
        "Counseling and support services"
      ],
      image: "/domestic.jpeg"
    },
    {
      id: 'hindu-muslim-law',
      icon: <BookOpen className="h-16 w-16 text-navy" />,
      title: t('hindu_muslim_law'),
      description: t('hindu_muslim_law_desc'),
      details: [
        "Hindu Marriage Act cases",
        "Muslim Personal Law matters",
        "Succession and inheritance disputes",
        "Adoption matters under Hindu law",
        "Marriage, divorce, and maintenance"
      ],
      image: ""
    },
    {
      id: 'contract-agreement',
      icon: <FileSignature className="h-16 w-16 text-navy" />,
      title: t('contract_agreement'),
      description: t('contract_agreement_desc'),
      details: [
        "Commercial contract drafting and review",
        "Breach of contract disputes",
        "Partnership agreements",
        "Lease and rental agreements",
        "Service and employment contracts"
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 'banking-finance',
      icon: <Building className="h-16 w-16 text-navy" />,
      title: t('banking_finance'),
      description: t('banking_finance_desc'),
      details: [
        "Banking fraud and recovery cases",
        "Loan default and debt recovery",
        "Credit card disputes",
        "Consumer banking complaints",
        "Bank guarantee and letter of credit issues"
      ],
      image: "/money.jpg" 
    },
   
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-navy to-navy-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Legal Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold mb-6">{t('practice_areas')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">{t('practice_areas_subtitle')}</p>
          </div>
        </section>
        
        {/* Featured Practice Area */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-navy to-navy-dark text-white rounded-2xl p-8 md:p-12 mb-16 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={practiceAreas[0].image} 
                  alt="Criminal Defense" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {practiceAreas[0].title}
                  </h2>
                  <p className="text-lg mb-6 text-gray-200">
                    {practiceAreas[0].description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {practiceAreas[0].details.map((detail, index) => (
                      <div key={index} className="flex items-start group">
                        <span className="mr-2 text-maroon group-hover:text-white transition-colors">•</span>
                        <span className="group-hover:text-white transition-colors">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-white/10 p-8 rounded-full group-hover:bg-white/20 transition-all duration-300">
                    {practiceAreas[0].icon}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Practice Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.slice(1).map((area, index) => {
                // Define different color schemes for cards
                const colorVariants = [
                  { gradient: 'from-blue-600 to-blue-800', text: 'text-blue-600', hover: 'hover:text-blue-700' },
                  { gradient: 'from-indigo-600 to-indigo-800', text: 'text-indigo-600', hover: 'hover:text-indigo-700' },
                  { gradient: 'from-purple-600 to-purple-800', text: 'text-purple-600', hover: 'hover:text-purple-700' },
                  { gradient: 'from-teal-600 to-teal-800', text: 'text-teal-600', hover: 'hover:text-teal-700' },
                  { gradient: 'from-navy to-navy-dark', text: 'text-navy', hover: 'hover:text-navy-dark' },
                  { gradient: 'from-maroon to-maroon-dark', text: 'text-maroon', hover: 'hover:text-maroon-dark' },
                  { gradient: 'from-slate-600 to-slate-800', text: 'text-slate-600', hover: 'hover:text-slate-700' },
                  { gradient: 'from-emerald-600 to-emerald-800', text: 'text-emerald-600', hover: 'hover:text-emerald-700' },
                  { gradient: 'from-cyan-600 to-cyan-800', text: 'text-cyan-600', hover: 'hover:text-cyan-700' },
                ];
                const colors = colorVariants[index % colorVariants.length];

                return (
                  <Card 
                    key={area.id} 
                    className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-90 mix-blend-multiply`} />
                      <img 
                        src={area.image} 
                        alt={area.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6 bg-white">
                      <div className="flex items-center mb-4">
                        <div className={`bg-gradient-to-br ${colors.gradient} p-3 rounded-full mr-4`}>
                          {React.cloneElement(area.icon, { className: "h-8 w-8 text-white" })}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{area.description}</p>
                      <div className="space-y-2">
                        {area.details.slice(0, 3).map((detail, index) => (
                          <div key={index} className="flex items-start group">
                            <span className={`mr-2 ${colors.text}`}>•</span>
                            <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{detail}</span>
                          </div>
                        ))}
                      </div>
                      <div className={`mt-4 flex items-center ${colors.text} ${colors.hover} transition-colors`}>
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-navy mb-4">Need Legal Assistance?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today for expert legal guidance and representation in your case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/919829673560" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center transform transition-transform hover:scale-105 duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact on WhatsApp
                </a>
                <a 
                  href="https://calendly.com/jitendrarajak-2612/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center transform transition-transform hover:scale-105 duration-300"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PracticeAreasPage;
