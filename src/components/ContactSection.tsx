import React from 'react';
import { useState, useEffect, FormEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('contact-section')?.offsetTop || 0;
      
      if (scrollPosition > sectionPosition) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_email: 'jitendrarajak.2612@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      await emailjs.send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        templateParams,
        'your_public_key' // Replace with your EmailJS public key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">{t('contact_us')}</h2>
        <p className="section-subheading text-center">{t('contact_subtitle')}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6 text-navy">{t('get_in_touch')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-navy mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('phone')}</h4>
                  <a href="tel:+919829673560" className="text-gray-700 hover:text-navy transition-colors">
                    +91-9829673560
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-navy mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('email')}</h4>
                  <a href="mailto:jitendrarajak.2612@gmail.com" className="text-gray-700 hover:text-navy transition-colors">
                    jitendrarajak.2612@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-navy mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('office_address')}</h4>
                  <p className="text-gray-700">
                    52,Gandhi Nagar, near New Aishwarya College building, New RTO Office, Udaipur
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-navy mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('court_office')}</h4>
                  <p className="text-gray-700">
                    Near Old Police Choki, Court Campus, Udaipur (Raj.)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-navy mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('residence_address')}</h4>
                  <p className="text-gray-700">
                    "Jaldevi Niwas", 621, Shiv Nagar, Kalka Mata Road, Pahada, Udaipur (Raj.)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-navy mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('office_timing')}</h4>
                  <p className="text-gray-700">7 AM to 8 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-navy mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('consultation')}</h4>
                  <p className="text-gray-700">Available 24 Hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-navy mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('started_practice')}</h4>
                  <p className="text-gray-700">Since 2018</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://calendly.com/jitendrarajak-2612/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </a>
              <p className="text-sm text-gray-500 mt-2">{t('free_initial_consultation')}</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-navy">{t('send_message')}</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    {t('your_name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    {t('your_email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                    {t('your_phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : t('send_message')}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Google Map */}
        <div className={`mt-16 rounded-lg overflow-hidden shadow-md transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.1604766875053!2d73.72921169999999!3d24.606638299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM2JzIzLjkiTiA3M8KwNDMnNDUuMiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
