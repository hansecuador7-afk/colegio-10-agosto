import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const eventos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventos' }),
  schema: z.object({
    title: z.string().min(3, 'El título debe tener al menos 3 caracteres.'),
    date: z.coerce.date(),
    image: z.string().min(1, 'La imagen es obligatoria.'),
    description: z.string().min(1, 'La descripción es obligatoria.'),
  }),
});

export const collections = { eventos };
