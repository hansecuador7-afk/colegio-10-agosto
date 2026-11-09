export const AREAS_ESTRUCTURA = [
  'Rectorado',
  'Vicerrectorado',
  'Inspección',
  'DECE',
  'Docentes',
  'Consejo Estudiantil',
] as const;

export type AreaEstructura = (typeof AREAS_ESTRUCTURA)[number];

export const areaInfo: Record<
  AreaEstructura,
  { description: string; icon: string }
> = {
  Rectorado: {
    description: 'Dirección y representación institucional.',
    icon: 'school',
  },
  Vicerrectorado: {
    description: 'Acompañamiento académico y gestión pedagógica.',
    icon: 'book-open',
  },
  Inspección: {
    description: 'Convivencia, disciplina y bienestar estudiantil.',
    icon: 'shield-check',
  },
  DECE: {
    description: 'Acompañamiento socioemocional y consejería estudiantil.',
    icon: 'heart',
  },
  Docentes: {
    description: 'El equipo que impulsa el aprendizaje en cada etapa.',
    icon: 'users',
  },
  'Consejo Estudiantil': {
    description: 'La voz y la participación de nuestras y nuestros estudiantes.',
    icon: 'sparkles',
  },
};
