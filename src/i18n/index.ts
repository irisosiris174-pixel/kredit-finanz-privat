import { de } from './de';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import type { Language, Translations } from './types';

export const translations: Record<Language, Translations> = {
  de,
  en,
  es,
  fr,
};

export const defaultLanguage: Language = 'fr';

export const getLanguageFromPath = (pathname: string): Language => {
  const segment = pathname.split('/')[1];
  if (segment === 'de' || segment === 'en' || segment === 'es' || segment === 'fr') {
    return segment;
  }
  return defaultLanguage;
};
