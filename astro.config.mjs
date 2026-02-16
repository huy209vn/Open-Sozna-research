import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import rehypeKatex from 'rehype-katex';
import { remarkConcept } from './src/plugins/remarkConcept.js';

export default defineConfig({
  site: 'https://huy209vn.github.io',
  base: '/Open-Sozna-research',
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkConcept],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'material-theme-palenight',
    },
  },
});
