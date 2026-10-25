/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	// TODO: it's on an insiders build because 0.8.1 doesn't sort classes with prettier-plugin-astro v1
	// (tailwindlabs/prettier-plugin-tailwindcss#473). Move to the first release after 0.8.1.
	plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [
		{ files: '*.astro', options: { parser: 'astro' } },
		{ files: '*.svelte', options: { parser: 'svelte' } }
	],
	tailwindStylesheet: './src/styles/global.css',
	tailwindFunctions: ['tv', 'cn']
};

export default config;
