// the only list of locales: Astro's routing (astro.config.mjs) and i18next both read it
export const locales = ['en', 'es', 'ca', 'de', 'da', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
