
import { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DisclaimerModalProps {
  onAgree: () => void;
  onDisagree: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onAgree, onDisagree }) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show modal with slight delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-scale-in">
        <div className="flex items-center mb-4 text-navy">
          <Scale className="h-6 w-6 mr-2" />
          <h2 className="text-2xl font-bold">{t('disclaimer_title')}</h2>
        </div>
        
        <p className="mb-6 text-gray-700">
          {t('disclaimer_text')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onDisagree}
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {t('disagree')}
          </button>
          <button
            onClick={onAgree}
            className="px-4 py-2 bg-navy text-white rounded hover:bg-opacity-90 transition-colors"
          >
            {t('agree')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
