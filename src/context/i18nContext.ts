import { createContext } from 'react';
import { translations, type Language } from '../i18n/translations';

type Translation = (typeof translations)[Language];

export interface LanguageContextValue {
  language: Language;
  t: Translation;
  toggleLanguage: () => void;
  dir: 'ltr' | 'rtl';
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
