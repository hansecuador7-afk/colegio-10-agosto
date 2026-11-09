import { getCollection } from 'astro:content';

export async function getAdmisionesData() {
  const [entry] = await getCollection('admisiones');

  if (!entry) {
    throw new Error('No se encontró el contenido editable de la página de admisiones.');
  }

  return entry.data;
}

export async function getPensionesData() {
  const [entry] = await getCollection('pensiones');

  if (!entry) {
    throw new Error('No se encontró el contenido editable de la página de pensiones.');
  }

  return entry.data;
}
