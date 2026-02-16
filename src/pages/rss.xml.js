import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = await getCollection('entries');
  const sortedEntries = entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Open Sozna Research',
    description: 'A live research program into the mathematics of living systems, consciousness, and what we owe the minds we build.',
    site: context.site,
    items: sortedEntries.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.subtitle || '',
      link: `/entries/${entry.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
