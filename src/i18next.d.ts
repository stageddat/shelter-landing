import 'i18next';
import type en from '../messages/en.json';

// types t() keys from the English file, so t('landing.typo') is a type error
declare module 'i18next' {
	interface CustomTypeOptions {
		resources: { translation: typeof en };
	}
}
