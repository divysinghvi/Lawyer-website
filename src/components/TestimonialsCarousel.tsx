
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
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

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('testimonials-carousel')?.offsetTop || 0;
      
      if (scrollPosition > sectionPosition - 200) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="testimonials-carousel" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-merriweather">{t('client_testimonials')}</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">{t('testimonials_subtitle')}</p>
        
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 transform p-6 md:p-10 bg-white/10 backdrop-blur-sm rounded-lg ${
                  index === activeIndex 
                    ? 'translate-x-0 opacity-100' 
                    : index < activeIndex 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                }`}
              >
                <Quote className="text-white/20 absolute top-6 left-6 w-16 h-16" />
                <div className="relative z-10">
                  <p className="text-gray-100 mb-6 italic text-lg">{testimonial.testimonial}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white/30" 
                      />
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-300">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
