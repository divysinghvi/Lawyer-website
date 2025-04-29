import * as React from 'react';

type LanguageType = 'en' | 'hi';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
};

export const LanguageContext = React.createContext<LanguageContextType>(defaultContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = React.useState<LanguageType>('en');
  const [translations, setTranslations] = React.useState<Record<string, Record<string, string>>>({});

  React.useEffect(() => {
    const loadTranslations = async () => {
      const translationsModule = await import('../translations');
      setTranslations(translationsModule.default);
    };
    loadTranslations();
  }, []);

  const t = (key: string): string => {
    if (!translations[language]) return key;
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
