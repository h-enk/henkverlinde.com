import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import netlify from '@astrojs/netlify';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://henkverlinde.com',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Henk Verlinde',
      openGraph: {
        home: {
          title: 'Henk Verlinde',
          description: 'I have a deep passion for innovation, fueled by a desire to simplify complex problems and develop practical solutions. I am the founder and CEO at Ventizo and developed the Thulite web framework and the Doks documentation theme.'
        },
        blog: {
          title: 'Blog',
          description: 'News and guides from Henk Verlinde.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'h-enk/henkverlinde.com',
        repositoryId: 'MDEwOlJlcG9zaXRvcnkyMTkwNDAyNTM=',
        category: 'Posts',
        categoryId: 'DIC_kwDODQ5J_c4CeirK',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  adapter: netlify(),
  prefetch: {
    prefetchAll: true
  },
});
