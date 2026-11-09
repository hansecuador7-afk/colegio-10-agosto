export const PUESTOS_CUADRO_HONOR = [
  'Abanderado del Pabellón Nacional',
  'Portaestandarte del Cantón',
  'Portaestandarte de la Institución',
  '1.er Escolta del Pabellón Nacional',
  '2.do Escolta del Pabellón Nacional',
  '1.er Escolta del Cantón',
  '2.do Escolta del Cantón',
  '1.er Escolta de la Institución',
  '2.do Escolta de la Institución',
] as const;

export type PuestoCuadroHonor = (typeof PUESTOS_CUADRO_HONOR)[number];

export interface CategoriaCuadroHonor {
  id: 'pabellon-nacional' | 'canton' | 'institucion';
  title: string;
  description: string;
  flag: string;
  flagAlt: string;
  puestos: readonly PuestoCuadroHonor[];
  accentText: string;
  badgeClass: string;
  glowClass: string;
}

export const CATEGORIAS_CUADRO_HONOR: readonly CategoriaCuadroHonor[] = [
  {
    id: 'pabellon-nacional',
    title: 'Pabellón Nacional',
    description: 'Abanderado y escoltas de la Bandera del Ecuador.',
    flag: '/assets/banderas/bandera-ecuador.png',
    flagAlt: 'Bandera del Ecuador',
    puestos: [
      'Abanderado del Pabellón Nacional',
      '1.er Escolta del Pabellón Nacional',
      '2.do Escolta del Pabellón Nacional',
    ],
    accentText: 'text-sun-300',
    badgeClass: 'border-sun-300/30 bg-sun-300/10 text-sun-200',
    glowClass: 'bg-sun-400/15',
  },
  {
    id: 'canton',
    title: 'Cantón',
    description: 'Portaestandarte y escoltas de la Bandera de San Lorenzo.',
    flag: '/assets/banderas/bandera-san-lorenzo.jpg',
    flagAlt: 'Bandera del cantón San Lorenzo',
    puestos: [
      'Portaestandarte del Cantón',
      '1.er Escolta del Cantón',
      '2.do Escolta del Cantón',
    ],
    accentText: 'text-emerald-300',
    badgeClass: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200',
    glowClass: 'bg-emerald-400/15',
  },
  {
    id: 'institucion',
    title: 'Institución',
    description: 'Portaestandarte y escoltas de la Bandera Institucional.',
    flag: '/assets/banderas/bandera-institucion.png',
    flagAlt: 'Bandera de la Unidad Educativa Fiscomisional 10 de Agosto',
    puestos: [
      'Portaestandarte de la Institución',
      '1.er Escolta de la Institución',
      '2.do Escolta de la Institución',
    ],
    accentText: 'text-brand-300',
    badgeClass: 'border-brand-300/30 bg-brand-300/10 text-brand-100',
    glowClass: 'bg-brand-400/15',
  },
];

export const esPuestoPrincipal = (puesto: PuestoCuadroHonor) =>
  puesto.startsWith('Abanderado') || puesto.startsWith('Portaestandarte');
