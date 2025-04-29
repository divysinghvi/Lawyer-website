
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Award, Users, Lightbulb, Clock, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="pt-24">
        <section className="py-16 bg-navy text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{t('about_advocate')}</h1>
            <p className="max-w-3xl text-gray-300">{t('about_description')}</p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6 text-navy">{t('about_advocate')}</h2>
                <p className="mb-4 text-gray-700">
                  {t('about_description')}
                </p>
                <p className="mb-6 text-gray-700">
                  {t('about_experience')}
                </p>
                
                <div className="space-y-8 mt-8">
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-3 rounded-full mr-4">
                      <GraduationCap className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-navy">{t('education_details')}</h3>
                      <p className="text-gray-600">Bachelor of Commerce (B.Com)</p>
                      <p className="text-gray-600">Master of Commerce (M.Com)</p>
                      <p className="text-gray-600">Bachelor of Laws (LL.B)</p>
                      <p className="text-gray-600">Post Graduate Diploma in Cyber Law (PGDCL)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-3 rounded-full mr-4">
                      <Briefcase className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-navy">Professional Experience</h3>
                      <p className="text-gray-600">{t('years_experience')}</p>
                      <p className="text-gray-600">Started practice in 2018</p>
                      <p className="text-gray-600">Specialized in Cyber Law and Family Law</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-3 rounded-full mr-4">
                      <Award className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-navy">Memberships & Affiliations</h3>
                      <p className="text-gray-600">Bar Council of Rajasthan</p>
                      <p className="text-gray-600">Udaipur Bar Association</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 flex justify-center items-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-navy/5 -z-10"></div>
                  <img 
                    src="/rahula.jpg" 
                    alt="Advocate Jitendra Rajak" 
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy">Why Choose Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-navy/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">{t('client_focused')}</h3>
                <p className="text-gray-600">
                  Dedicated to understanding each client's unique situation and providing personalized legal solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-navy/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">{t('available_24_7')}</h3>
                <p className="text-gray-600">
                  Legal issues don't wait for business hours. I'm available for consultations 24 hours a day to address your urgent concerns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-navy/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">{t('modern_approach')}</h3>
                <p className="text-gray-600">
                  Combining traditional legal expertise with modern technology for efficient case management and client communication.
                </p>
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

export default About;
