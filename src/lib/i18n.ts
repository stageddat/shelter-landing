import i18next, { type TFunction } from 'i18next';
import { defaultLocale, locales } from './locales';

// all messages/*.json, read at build time (they never reach the browser)
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
	// Astro already escapes {expressions}; escaping here too would show &amp; and similar
	interpolation: { escapeValue: false }
});

// t() for one page: const t = useTranslations(Astro.currentLocale)
export function useTranslations(locale: string | undefined): TFunction {
	return i18n.getFixedT(locale ?? defaultLocale);
}

// one static page per locale; the default locale has no prefix (/ instead of /en/)
export function localeStaticPaths() {
	return locales.map((locale) => ({
		params: { locale: locale === defaultLocale ? undefined : locale }
	}));
}
