// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// Pages are prerendered; only Keystatic's admin (/keystatic) and its API run on demand.
export default defineConfig({
  site: 'https://www.23twenty.com',
  trailingSlash: 'ignore',
  integrations: [react(), keystatic()],
  adapter: vercel(),
  devToolbar: { enabled: false },
});
