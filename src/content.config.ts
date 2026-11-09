import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

import { CARGOS_ESTRUCTURA } from './data/estructura';

const eventos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventos' }),
  schema: z.object({
    title: z.string().min(3, 'El título debe tener al menos 3 caracteres.'),
    date: z.coerce.date(),
    image: z.string().min(1, 'La imagen es obligatoria.'),
    description: z.string().min(1, 'La descripción es obligatoria.'),
  }),
});

const estructura = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/estructura' }),
  schema: z.object({
    nombre: z.string().min(3, 'El nombre debe tener al menos 3 caracteres.'),
    cargo: z.enum(CARGOS_ESTRUCTURA),
    foto: z.string().min(1, 'La fotografía es obligatoria.'),
  }),
});

const admisiones = defineCollection({
  loader: glob({ pattern: 'admisiones.md', base: './src/content/paginas' }),
  schema: z.object({
    estado: z.enum(['abiertas', 'cerradas']),
    aviso: z.string().min(5, 'El aviso debe tener al menos 5 caracteres.'),
    mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
  }),
});

const pensiones = defineCollection({
  loader: glob({ pattern: 'pensiones.md', base: './src/content/paginas' }),
  schema: z.object({
    titulo: z.string().min(3, 'El título debe tener al menos 3 caracteres.'),
    introduccion: z.string().min(10, 'La introducción debe tener al menos 10 caracteres.'),
    matricula_inicial: z.coerce.number().nonnegative(),
    pension_inicial: z.coerce.number().nonnegative(),
    matricula_bachillerato: z.coerce.number().nonnegative(),
    pension_bachillerato: z.coerce.number().nonnegative(),
    nota_pago: z.string().min(5, 'La nota de pago debe tener al menos 5 caracteres.'),
  }),
});

export const collections = { eventos, estructura, admisiones, pensiones };
