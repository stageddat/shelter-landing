/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	// prettier-plugin-tailwindcss has to be the last one
	plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [
		{ files: '*.astro', options: { parser: 'astro' } },
		{ files: '*.svelte', options: { parser: 'svelte' } }
	],
	tailwindStylesheet: './src/styles/global.css',
	tailwindFunctions: ['tv', 'cn']
};

export default config;
