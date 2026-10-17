import i18next, { type TFunction } from 'i18next';
import { defaultLocale, locales } from './locales';

const files = import.meta.glob<{ default: Record<string, unknown> }>('../../messages/*.json', {
	eager: true
});
const resources = Object.fromEntries(
	locales.map((locale) => [locale, { translation: files[`../../messages/${locale}.json`].default }])
);

const i18n = i18next.createInstance();
await i18n.init({
	resources,
	fallbackLng: defaultLocale,
	interpolation: { escapeValue: false }
});

export function useTranslations(locale: string | undefined): TFunction {
	return i18n.getFixedT(locale ?? defaultLocale);
}

// locale en url, pero / en lugar de /en
export function localeStaticPaths() {
	return locales.map((locale) => ({
		params: { locale: locale === defaultLocale ? undefined : locale }
	}));
}

// helper para reemplazar idiomas -> /es/credits a /ca/credits
export function pathWithoutLocale(pathname: string): string {
	const [, first, ...rest] = pathname.split('/');
	return (locales as readonly string[]).includes(first) ? `/${rest.join('/')}` : pathname;
}
