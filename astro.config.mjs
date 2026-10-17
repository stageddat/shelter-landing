// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { defaultLocale, locales } from './src/lib/locales.ts';

// https://astro.build/config
export default defineConfig({
	integrations: [svelte()],

	// lista de idiomas en src/lib/locales.ts
	i18n: {
		locales: [...locales],
		defaultLocale,
		routing: { prefixDefaultLocale: false }
	},

	vite: {
		plugins: [tailwindcss()],
		server: {
			// shelter-assets esta en ../assets, pero vite solo sirve desde el proyecto
			fs: { allow: ['.', '../assets'] }
		}
	}
});
