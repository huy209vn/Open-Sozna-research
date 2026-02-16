import { defineCollection, z } from 'astro:content';

const entriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

const conceptsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'entries': entriesCollection,
  'concepts': conceptsCollection,
};
