import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('fr');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  'ar-ly': { name: 'العربية', rtl: true },
  en: { name: 'English' },
  fr: { name: 'Français' },
  ja: { name: '日本語' },
  es: { name: 'Español' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const isRTL = (lang: string): boolean => languages[lang] && languages[lang].rtl;

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'fr')));
};
