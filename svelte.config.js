import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: adapter(),
		csp: {
			mode: 'hash',
			directives: {
				'default-src': ['self'],
				'manifest-src': ['self'],
				'connect-src': ['self', 'https://analytics.ventizo.com/api/event'],
				'font-src': ['self', 'https://fonts.gstatic.com'],
				'frame-src': ['https://app.netlify.com'],
				'frame-ancestors': ['https://feeder.co'],
				'img-src': ['self'],
				'script-src': [
					'self',
					'https://netlify-cdp-loader.netlify.app/netlify.js',
					'https://analytics.ventizo.com/js/plausible.js'
				],
				'style-src': [
					'self',
					'unsafe-inline',
					'https://github.githubassets.com/assets/',
					'https://fonts.googleapis.com/css'
				]
			}
		},
		floc: process.env.NODE_ENV === 'development',
		prerender: { entries: ['*', '/rss.xml'] },
		trailingSlash: 'never'
	}
};

export default config;
