import { getCollection } from 'astro:content';

export async function getMatriculaYPensionesData() {
  const [entry] = await getCollection('matriculaYPensiones');

  if (!entry) {
    throw new Error(
      'No se encontró el contenido editable de la página de matrícula y pensiones.',
    );
  }

  return entry.data;
}
