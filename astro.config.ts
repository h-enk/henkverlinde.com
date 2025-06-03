import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import { spectreDark } from './src/ec-theme';

import netlify from '@astrojs/netlify';

const {
  GISCUS_REPO,
  GISCUS_REPO_ID,
  GISCUS_CATEGORY,
  GISCUS_CATEGORY_ID,
  GISCUS_MAPPING,
  GISCUS_STRICT,
  GISCUS_REACTIONS_ENABLED,
  GISCUS_EMIT_METADATA,
  GISCUS_LANG
} = loadEnv(process.env.NODE_ENV!, process.cwd(), "");

// https://astro.build/config
const config = defineConfig({
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
        repository: GISCUS_REPO,
        repositoryId: GISCUS_REPO_ID,
        category: GISCUS_CATEGORY,
        categoryId: GISCUS_CATEGORY_ID,
        mapping: GISCUS_MAPPING as any,
        strict: GISCUS_STRICT === "true",
        reactionsEnabled: GISCUS_REACTIONS_ENABLED === "true",
        emitMetadata: GISCUS_EMIT_METADATA === "true",
        lang: GISCUS_LANG,
      }
    })
  ],
  adapter: netlify({
    imageCDN: true,
  }),
  prefetch: {
    prefetchAll: true
  },
});

export default config;
