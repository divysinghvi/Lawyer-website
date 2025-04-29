
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const GalleryCarousel = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Gallery images - using images from the design you provided
  const galleryImages = [
   
    {
      src: "/courtt.jpeg",
      alt: "Court Image"
    },
    {
      src: "/oi.jpg",
      alt: "photo of jitendra ji in court"
    },
    {
      src: "/officee.jpg",
      alt: "Office Image"
    },
    {
      src: "/rahuloffice.jpg",
      alt: "office image of jitendra ji"
    },
    {
      src: "/rahulimg.jpg",
      alt: "Judge gavel"
    },
   
  ];
  // Open image in lightbox
  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Auto-rotate slides
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('gallery-carousel')?.offsetTop || 0;
      
      if (scrollPosition > sectionPosition - 200) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adjust visible slides based on screen width
  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : 3;
    }
    return 3;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section id="gallery-carousel" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-merriweather text-navy">{t('gallery_title')}</h2>
        <div className="w-24 h-1 bg-maroon mx-auto mb-4"></div>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">{t('gallery_subtitle')}</p>
        
        <div className={`relative transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div ref={carouselRef} className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.333%] px-2"
                >
                  <div 
                    onClick={() => openLightbox(image.src)}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer h-64 group relative"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white font-medium px-4 py-2 border border-white rounded-md transform scale-0 group-hover:scale-100 transition-transform duration-300">Click to view</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -ml-4 z-10 transition-transform hover:scale-110 duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md -mr-4 z-10 transition-transform hover:scale-110 duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-navy" />
          </button>
        </div>
        
        <div className="text-center mt-8">
          <Button
            asChild
            variant="default"
            className="bg-navy text-white hover:bg-navy/90 hover:scale-105 transition-all duration-300"
            size="lg"
          >
            <a href="/gallery">
              {t('gallery')}
            </a>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery enlarged view" 
            className="max-w-full max-h-[90vh] object-contain rounded animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GalleryCarousel;
