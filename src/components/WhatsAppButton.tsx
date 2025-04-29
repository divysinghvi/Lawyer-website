
import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919829673560"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-40 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
      aria-label="Contact on WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
