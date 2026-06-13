import { useEffect, useState, type ReactNode } from 'react';
import { translations, type Language } from '../i18n/translations';
import { LanguageContext } from './i18nContext';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider
      value={{ language, t: translations[language], toggleLanguage, dir }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
