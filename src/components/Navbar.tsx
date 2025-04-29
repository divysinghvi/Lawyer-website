import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-md py-2' : 'bg-navy py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="text-white">
              <h1 className="text-lg md:text-xl font-bold font-merriweather">Jitendra Rajak</h1>
              <p className="text-[10px] md:text-xs text-gray-200">{t('advocate_title')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-6 mr-4">
              <Link to="/" className="text-white hover:text-gray-200 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">{t('home')}</Link>
              <Link to="/about" className="text-white hover:text-gray-200 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">{t('about')}</Link>
              <Link to="/practice-areas" className="text-white hover:text-gray-200 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">{t('practice_areas')}</Link>
              <Link to="/gallery" className="text-white hover:text-gray-200 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">{t('gallery')}</Link>
              <Link to="/contact" className="text-white hover:text-gray-200 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">{t('contact')}</Link>
            </div>
            <Button
              asChild
              variant="default"
              className="bg-green-600 hover:bg-green-700 text-white transition-colors font-medium flex items-center"
            >
              <a 
                href="https://wa.me/919829673560" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Phone size={18} className="mr-2" /> WhatsApp
              </a>
            </Button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-white hover:text-gray-200 font-medium transition-colors border border-white/30 rounded-full px-3 py-1 hover:bg-white/10"
            >
              <span className="flex items-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.938 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                </svg>
                {language === 'en' ? 'हिंदी' : 'English'}
              </span>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="text-white hover:text-gray-200 text-sm bg-navy-dark px-2 py-1 rounded-md"
            >
              {language === 'en' ? 'हिंदी' : 'En'}
            </button>
            <button 
              onClick={toggleMenu} 
              className="text-white z-50 bg-navy-dark p-1.5 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-navy/98 backdrop-blur-md z-40 overflow-y-auto pt-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col">
                <div className="flex flex-col space-y-3">
                  <Link 
                    to="/" 
                    className="bg-navy-dark/50 text-white px-4 py-3 rounded-lg hover:bg-navy-dark transition-colors flex items-center justify-between text-lg" 
                    onClick={closeMenu}
                  >
                    <span>{t('home')}</span>
                    <span className="text-gray-400">→</span>
                  </Link>
                  <Link 
                    to="/about" 
                    className="bg-navy-dark/50 text-white px-4 py-3 rounded-lg hover:bg-navy-dark transition-colors flex items-center justify-between text-lg" 
                    onClick={closeMenu}
                  >
                    <span>{t('about')}</span>
                    <span className="text-gray-400">→</span>
                  </Link>
                  <Link 
                    to="/practice-areas" 
                    className="bg-navy-dark/50 text-white px-4 py-3 rounded-lg hover:bg-navy-dark transition-colors flex items-center justify-between text-lg" 
                    onClick={closeMenu}
                  >
                    <span>{t('practice_areas')}</span>
                    <span className="text-gray-400">→</span>
                  </Link>
                  <Link 
                    to="/gallery" 
                    className="bg-navy-dark/50 text-white px-4 py-3 rounded-lg hover:bg-navy-dark transition-colors flex items-center justify-between text-lg" 
                    onClick={closeMenu}
                  >
                    <span>{t('gallery')}</span>
                    <span className="text-gray-400">→</span>
                  </Link>
                  <Link 
                    to="/contact" 
                    className="bg-navy-dark/50 text-white px-4 py-3 rounded-lg hover:bg-navy-dark transition-colors flex items-center justify-between text-lg" 
                    onClick={closeMenu}
                  >
                    <span>{t('contact')}</span>
                    <span className="text-gray-400">→</span>
                  </Link>
                </div>

                <div className="flex justify-center mt-8">
                  <a 
                    href="https://wa.me/919829673560" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center w-full justify-center text-lg font-medium"
                    onClick={closeMenu}
                  >
                    <Phone size={20} className="mr-2" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
