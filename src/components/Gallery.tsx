
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(0);

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
    {
      src: "/sataya.jpeg",
      alt: "sataya logo"
    }
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

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('gallery')?.offsetTop || 0;
      
      if (scrollPosition > sectionPosition) {
        // Gradually show items
        const interval = setInterval(() => {
          setVisibleItems(prev => {
            if (prev < galleryImages.length) {
              return prev + 1;
            } else {
              clearInterval(interval);
              return prev;
            }
          });
        }, 150);
        
        return () => clearInterval(interval);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [galleryImages.length]);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">{t('gallery')}</h2>
        <p className="section-subheading text-center">{t('gallery_subtitle')}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-500 hover:shadow-lg hover:scale-[1.02] ${
                index < visibleItems ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
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

export default Gallery;
