import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    site: siteConfig.website,
    trailingSlash: 'always',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap({
        filter: (page) =>
            page !== 'https://henkverlinde.com/newsletter/success/',
    })],
    adapter: netlify({
        imageCDN: true,
    }),
    prefetch: {
        prefetchAll: true
    },
});
