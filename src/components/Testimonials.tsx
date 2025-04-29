
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: t('Tatva entertainment Company'),
      location: t('Udaipur, Rajasthan'),
      testimonial: t('client1_testimonial'),
      avatar: "/t.jpg",
      rating: 5
    },
    {
      id: 2,
      name: t('Nikhil Rajmani'),
      location: t('Udaipur, Rajasthan'),
      testimonial: t('client2_testimonial'),
      avatar: "n.jpg",
      rating: 5
    },
    {
      id: 3,
      name: t('Yuvraj rathore'),
      location: t('Udaipur, Rajasthan'),
      testimonial: t('client3_testimonial'),
      avatar: "/y.jpg",
      rating: 5
    },
  ];
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('testimonials')?.offsetTop || 0;
      
      if (scrollPosition > sectionPosition) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">{t('client_testimonials')}</h2>
        <p className="section-subheading text-center">{t('testimonials_subtitle')}</p>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop view - all testimonials in a grid */}
          <div className={`hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="testimonial-card"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
          
          {/* Mobile view - slider */}
          <div className="md:hidden">
            <div className={`relative h-[400px] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-card absolute inset-0 transition-all duration-500 transform ${
                    index === activeIndex 
                      ? 'translate-x-0 opacity-100' 
                      : index < activeIndex 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover" 
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.testimonial}</p>
                </div>
              ))}
            </div>
            
            {/* Dots for mobile slider */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-navy' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
