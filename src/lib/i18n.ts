export const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ro', label: 'RO', name: 'Română' },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];

export const defaultLanguage: LanguageCode = 'en';

export type { SiteCopy } from './i18n/types';

import { mergeCopy } from './i18n/types';
import en from './i18n/en';

export { en };

export function loadTranslation(lang: LanguageCode): Promise<import('./i18n/types').SiteCopy> {
  if (lang === 'fr') return import('./i18n/fr').then((m) => m.default);
  if (lang === 'ro') return import('./i18n/ro').then((m) => mergeCopy(en, m.default));
  return Promise.resolve(en);
}
