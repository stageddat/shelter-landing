export const locales = ['en', 'ca', 'es', 'de', 'da', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// idiomas traducidos oficialmente
export const officialLocales: readonly Locale[] = ['en', 'ca'];

// se puede conseguir el nombre del idioma con Intl.DisplayNames
// tmb se pasa el nombre a minuscula
export function localeName(locale: Locale): string {
	const name = new Intl.DisplayNames([locale], { type: 'language' }).of(locale) ?? locale;
	return name.toLocaleLowerCase(locale);
}
