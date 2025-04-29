import { FormEvent, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        subject: formData.subject,
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
        subject: '',
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
    <>
      <Navbar />
      <div className="pt-24">
        <section className="py-16 bg-navy text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{t('contact_us')}</h1>
            <p className="max-w-3xl text-gray-300">{t('contact_subtitle')}</p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <h2 className="text-2xl font-bold mb-6 text-navy">{t('contact_information')}</h2>
                  
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
                          52, Gandhi Nagar, near New Aishwarya College building, New RTO Office, Udaipur
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
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <a
                      href="https://calendly.com/jitendrarajak-2612/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      Book Free Consultation
                    </a>
                    <a 
                      href="https://wa.me/919829673560"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors w-full text-center block"
                    >
                      {t('chat_on_whatsapp')}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <h2 className="text-2xl font-bold mb-6 text-navy">{t('send_message')}</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                          {t('your_name')} *
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
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                          {t('your_email')} *
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
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                          {t('your_phone')} *
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
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="Cyber Crime">Cyber Crime & Cyber Law</option>
                          <option value="Divorce">Divorce Cases</option>
                          <option value="Matrimonial">Matrimonial Cases</option>
                          <option value="Court Marriage">Court Marriage</option>
                          <option value="Family/Criminal">Family & Criminal Cases</option>
                          <option value="Women's Domestic Violence">Women's Domestic Violence</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                        {t('message')} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : t('send_message')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="mt-12 rounded-lg overflow-hidden shadow-md">
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
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
