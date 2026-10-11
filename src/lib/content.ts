import { createReader } from '@keystatic/core/reader';
import Markdoc, { type Node } from '@markdoc/markdoc';
import type { ImageMetadata } from 'astro';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

// Keystatic stores image fields as a root-relative path (see keystatic.config.ts).
// Globbing every asset lets a page turn that path into something <Image> can optimise.
const assets = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,JPG,JPEG,png,webp}', {
  eager: true,
});

export function asset(path: string | null): ImageMetadata {
  const found = path ? assets[path] : undefined;
  if (!found) throw new Error(`Image not found in src/assets: ${path}`);
  return found.default;
}

export function markdoc(value: { node: Node }): string {
  // The HTML renderer wraps a document in <article>; the pages supply their own wrappers.
  return Markdoc.renderers
    .html(Markdoc.transform(value.node))
    .replace(/^<article>|<\/article>$/g, '');
}

export async function read<K extends keyof typeof reader.singletons>(key: K) {
  const data = await reader.singletons[key].readOrThrow();
  return data as NonNullable<Awaited<ReturnType<(typeof reader.singletons)[K]['read']>>>;
}


