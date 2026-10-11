import { reader } from './content';

/** Every gallery, in the order set in the editor. */
export async function galleries() {
  const all = await reader.collections.galleries.all();
  return all.sort((a, b) => (a.entry.order ?? 0) - (b.entry.order ?? 0));
}
