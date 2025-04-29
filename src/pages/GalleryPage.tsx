import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const GalleryPage = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images - using images from the design you provided
  const galleryImages = [
    {
      src: "/courtt.jpeg",
      alt: "Court Image",
      category: "Court"
    },
    {
      src: "/oi.jpg",
      alt: "photo of jitendra ji in court",
      category: "Office"
    },
    {
      src: "/officee.jpg",
      alt: "Office Image",
      category: "Office"
    },
    {
      src: "/rahuloffice.jpg",
      alt: "office image of jitendra ji",
      category: "Office"
    },
    {
      src: "/rahulimg.jpg",
      alt: "",
      category: "Court"
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

  // Get unique categories
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter images by category
  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <Navbar />
      <div className="pt-24">
        <section className="py-16 bg-navy text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{t('gallery')}</h1>
            <p className="max-w-3xl text-gray-300">{t('gallery_subtitle')}</p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center mb-10 gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-navy text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                  onClick={() => openLightbox(image.src)}
                >
                  <div className="relative group">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white font-medium text-lg">{image.alt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
      
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
    </>
  );
};

export default GalleryPage;
