import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import type { DetectorOptions } from 'i18next-browser-languagedetector';
import enUS from '../locales/en-US.json';
import ptBR from '../locales/pt-BR.json';
// import ep from './locales/ep.json';

const resources = {
  'en-US': {
    translation: enUS,
  },
  'pt-BR': {
    translation: ptBR,
  },
  // ep: {
  //   translation: ep,
  // },
};

const options: DetectorOptions | undefined = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  cookieMinutes: 10,
  cookieDomain: 'myDomain',
  htmlTag: document.documentElement,
  cookieOptions: { path: '/', sameSite: 'strict' },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-US',
    detection: options,
  })
  .catch(console.log);

export default i18n;
