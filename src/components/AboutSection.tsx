import React from "react";
import { MapPin, Clock, Calendar, CheckCircle } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="section-title">{t('about_advocate')}</h2>
            <p className="mb-6 text-gray-700">
              {t('about_description')}
            </p>
            <p className="mb-6 text-gray-700">
              {t('about_experience')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-maroon flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">{t('qualified_professional')}</h3>
                  <p className="text-sm text-gray-600">{t('education_details')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-maroon flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">{t('years_experience')}</h3>
                  <p className="text-sm text-gray-600">{t('about_experience')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-maroon flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">{t('client_focused')}</h3>
                  <p className="text-sm text-gray-600">{t('available_24_7')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-maroon flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">{t('modern_approach')}</h3>
                  <p className="text-sm text-gray-600">{t('tech_savvy_representation')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-navy">{t('contact_information')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-maroon flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy">{t('office_address')}</h4>
                  <p className="text-gray-700">52, Gandhi Nagar, near New Aishwarya College building, new RTO Office, Udaipur</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-maroon flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy">{t('court_office')}</h4>
                  <p className="text-gray-700">Near Old Police Choki, Court Campus, Udaipur (Raj.)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-maroon flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy">{t('residence_address')}</h4>
                  <p className="text-gray-700">"Jaldevi Niwas", 621, Shiv Nagar, Kalka Mata Road, Pahada, Udaipur (Raj.)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-maroon flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy">{t('office_timing')}</h4>
                  <p className="text-gray-700">7 AM to 8 PM</p>
                  <p className="text-gray-700">{t('consultation')}: {t('available_24_7')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Calendar className="h-6 w-6 text-maroon flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-navy">{t('started_practice')}</h4>
                  <p className="text-gray-700">{t('years_experience')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
