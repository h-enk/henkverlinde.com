import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://henkverlinde.com',
    integrations: [
        expressiveCode({
            themes: ['github-dark', 'github-light']
        }),
        mdx(),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date()
        }),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
