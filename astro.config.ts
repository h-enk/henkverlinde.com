import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://henkverlinde.com',
  output: 'static',
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    spectre({
      name: 'Henk Verlinde',
      openGraph: {
        home: {
          title: 'Henk Verlinde',
          description: 'A minimalistic theme for Astro.'
        },
        blog: {
          title: 'Blog',
          description: 'News and guides for Spectre.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'louisescher/spectre',
        repositoryId: 'R_kgDONjm3ig',
        category: 'General',
        categoryId: 'DIC_kwDONjm3is4ClmBF',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  adapter: netlify(),
});
