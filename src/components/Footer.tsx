import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-navy to-navy/90 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-white text-2xl font-bold mb-2">{t('need_legal_assistance')}</h3>
              <p className="text-gray-300">{t('schedule_consultation')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="default"
                className="bg-white text-navy hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <a
                  href="https://calendly.com/divysinghvi5/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {t('free_consultation')}
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                className="bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <a 
                  href="https://wa.me/919829673560" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('chat_on_whatsapp')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-12 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Info */}
            <div className="transform hover:translate-y-[-5px] transition-all duration-300">
              <h2 className="text-white text-xl font-bold mb-4">Jitendra Rajak</h2>
              <p className="mb-2">{t('advocate_title')}</p>
              <p className="mb-4 text-sm">{t('hero_subtitle')}</p>
              <p className="text-sm">
                {t('about_experience')}
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="transform hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-white text-lg font-bold mb-4">{t('quick_links')}</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="footer-link hover:underline hover:text-white transition-colors">{t('home')}</Link></li>
                <li><Link to="/about" className="footer-link hover:underline hover:text-white transition-colors">{t('about')}</Link></li>
                <li><Link to="/practice-areas" className="footer-link hover:underline hover:text-white transition-colors">{t('practice_areas')}</Link></li>
                <li><Link to="/gallery" className="footer-link hover:underline hover:text-white transition-colors">{t('gallery')}</Link></li>
                <li><Link to="/contact" className="footer-link hover:underline hover:text-white transition-colors">{t('contact')}</Link></li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div className="transform hover:translate-y-[-5px] transition-all duration-300">
              <h3 className="text-white text-lg font-bold mb-4">{t('contact_information')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-maroon" />
                  <span>52, Gandhi Nagar, near New Aishwarya College building, New RTO Office, Udaipur</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 flex-shrink-0 text-maroon" />
                  <a href="tel:+919829673560" className="hover:text-white transition-colors">+91-9829673560</a>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 flex-shrink-0 text-maroon" />
                  <a href="mailto:jitendrarajak.2612@gmail.com" className="hover:text-white transition-colors">jitendrarajak.2612@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <Clock size={18} className="mr-2 flex-shrink-0 text-maroon" />
                  <span>7 AM to 8 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Developer Information */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {currentYear} Jitendra Rajak. {t('all_rights_reserved')}.</p>
              <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center text-gray-400 text-sm">
                <div className="flex items-center mb-2 md:mb-0">
                  <Code size={14} className="mr-1 text-maroon" />
                  <span>{t('developer_info')}: </span>
                  <span className="ml-1 text-white font-medium">Rajat Soni</span>
                </div>
                <div className="flex flex-col md:flex-row md:ml-4 space-y-1 md:space-y-0">
                  <span className="md:border-l md:border-gray-700 md:pl-4">
                    <a href="tel:+918890311922" className="hover:text-white transition-colors">+91 8890311922</a>
                  </span>
                  <span className="md:ml-4 md:border-l md:border-gray-700 md:pl-4">
                    <a href="mailto:rjrs045@gmail.com" className="hover:text-white transition-colors">rjrs045@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
