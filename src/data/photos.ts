export type PhotoCategory = 'vida' | 'cultura' | 'ceremonias' | 'deportes';

export interface Photo {
  src: string;
  thumb: string;
  alt: string;
  caption: string;
  category: PhotoCategory;
}

export const categories: { id: PhotoCategory | 'todas'; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'vida', label: 'Vida escolar' },
  { id: 'cultura', label: 'Cultura y arte' },
  { id: 'ceremonias', label: 'Ceremonias' },
  { id: 'deportes', label: 'Deporte' },
];

export const categoryLabels: Record<PhotoCategory, string> = {
  vida: 'Vida escolar',
  cultura: 'Cultura y arte',
  ceremonias: 'Ceremonias',
  deportes: 'Deporte',
};

export const photos: Photo[] = [
  {
    src: '/assets/marco.jpg',
    thumb: '/assets/fotos/thumbs/marco.jpg',
    alt: 'Banda institucional y comunidad educativa reunida en las gradas del colegio',
    caption: 'Banda institucional y comunidad educativa',
    category: 'cultura',
  },
  {
    src: '/assets/fotos/IMG_5034.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5034.jpg',
    alt: 'Estudiantes junto a una representación del pesebre navideño en el patio del colegio',
    caption: 'Representación navideña',
    category: 'cultura',
  },
  {
    src: '/assets/fotos/IMG_5036.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5036.jpg',
    alt: 'Estudiantes y docentes con trajes tradicionales durante una actividad cultural',
    caption: 'Encuentro de tradiciones',
    category: 'cultura',
  },
  {
    src: '/assets/fotos/IMG_5037.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5037.jpg',
    alt: 'Presentación cultural de estudiantes con vestimenta tradicional',
    caption: 'Presentación cultural',
    category: 'cultura',
  },
  {
    src: '/assets/fotos/IMG_5038.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5038.jpg',
    alt: 'Grupo de estudiantes con trajes típicos en una tarima decorada',
    caption: 'Cultura y tradición',
    category: 'cultura',
  },
  {
    src: '/assets/fotos/IMG_5039.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5039.jpg',
    alt: 'Formación de estudiantes uniformados en el patio del colegio',
    caption: 'Jornada institucional',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5040.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5040.jpg',
    alt: 'Estudiantes reunidos en el patio durante una jornada institucional',
    caption: 'Comunidad educativa',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5041.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5041.jpg',
    alt: 'Pareja de estudiantes bailando con vestuario tradicional',
    caption: 'Danza y tradición',
    category: 'cultura',
  },
  {
    src: '/assets/fotos/IMG_5042.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5042.jpg',
    alt: 'Celebración religiosa al aire libre con estudiantes y docentes',
    caption: 'Celebración de la comunidad',
    category: 'ceremonias',
  },
  {
    src: '/assets/fotos/IMG_5043.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5043.jpg',
    alt: 'Estudiantes uniformados formados en el patio techado del colegio',
    caption: 'Formación en el patio',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5044.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5044.jpg',
    alt: 'Docentes con vestimenta institucional en el patio del colegio',
    caption: 'Nuestro equipo docente',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5045.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5045.jpg',
    alt: 'Estudiante con banda de representación durante una ceremonia',
    caption: 'Representación institucional',
    category: 'ceremonias',
  },
  {
    src: '/assets/fotos/IMG_5046.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5046.jpg',
    alt: 'Estudiantes y docentes reunidos dentro de un aula',
    caption: 'Aprendizaje compartido',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5047.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5047.jpg',
    alt: 'Abanderados junto a la bandera nacional',
    caption: 'Honor a nuestros símbolos',
    category: 'ceremonias',
  },
  {
    src: '/assets/fotos/IMG_5048.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5048.jpg',
    alt: 'Estudiantes abanderados en una ceremonia institucional',
    caption: 'Abanderados del colegio',
    category: 'ceremonias',
  },
  {
    src: '/assets/fotos/IMG_5049.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5049.jpg',
    alt: 'Abanderados portando las banderas del colegio',
    caption: 'Ceremonia de abanderamiento',
    category: 'ceremonias',
  },
  {
    src: '/assets/fotos/IMG_5050.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5050.jpg',
    alt: 'Persona de la comunidad educativa preparando alimentos en la cocina',
    caption: 'El día a día en el colegio',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5051.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5051.jpg',
    alt: 'Estudiantes en las gradas del patio durante un acto',
    caption: 'Compartir en comunidad',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5052.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5052.jpg',
    alt: 'Estudiantes junto a las barandas del patio del colegio',
    caption: 'Momentos entre clases',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5053.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5053.jpg',
    alt: 'Estudiantes sentados durante una actividad grupal',
    caption: 'Aprender juntos',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5054.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5054.jpg',
    alt: 'Estudiante en el photocall de la actividad Mi Viaje Lector',
    caption: 'Mi Viaje Lector',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5055.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5055.jpg',
    alt: 'Actividad recreativa en el patio con estudiantes y docentes',
    caption: 'Juego y convivencia',
    category: 'deportes',
  },
  {
    src: '/assets/fotos/IMG_5056.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5056.jpg',
    alt: 'Docentes y estudiantes posan en el photocall Mi Viaje Lector',
    caption: 'Feria de lectura',
    category: 'cultura',
  },
  {
    src: '/assets/fotos/IMG_5057.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5057.jpg',
    alt: 'Estudiantes participando en una actividad deportiva',
    caption: 'Movimiento y trabajo en equipo',
    category: 'deportes',
  },
  {
    src: '/assets/fotos/IMG_5058.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5058.jpg',
    alt: 'Patio del colegio decorado con tela de colores para una actividad',
    caption: 'El patio se llena de color',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5059.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5059.jpg',
    alt: 'Grupo de estudiantes con uniforme deportivo junto a docentes',
    caption: 'Nuestra comunidad deportiva',
    category: 'deportes',
  },
  {
    src: '/assets/fotos/IMG_5060.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5060.jpg',
    alt: 'Estudiantes y docentes reunidos en el patio del colegio',
    caption: 'Encuentro de la comunidad educativa',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5061.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5061.jpg',
    alt: 'Celebración con globos en el patio del colegio',
    caption: 'Un día para celebrar',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5062.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5062.jpg',
    alt: 'Estudiantes formados en el patio techado durante una jornada',
    caption: 'Jornadas de encuentro',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5063.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5063.jpg',
    alt: 'Reunión de trabajo de docentes en un aula',
    caption: 'Trabajo en equipo docente',
    category: 'vida',
  },
  {
    src: '/assets/fotos/IMG_5064.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5064.jpg',
    alt: 'Presentación de danza folclórica en el patio del colegio',
    caption: 'Danza folclórica',
    category: 'cultura',
  },
  {
    src: '/assets/fotos/IMG_5065.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5065.jpg',
    alt: 'Ceremonia religiosa con estudiantes en el patio',
    caption: 'Un momento de encuentro',
    category: 'ceremonias',
  },
  {
    src: '/assets/fotos/IMG_5066.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5066.jpg',
    alt: 'Estudiante junto a un arco de globos en una celebración',
    caption: 'Celebrando juntos',
    category: 'ceremonias',
  },
  {
    src: '/assets/fotos/IMG_5067.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5067.jpg',
    alt: 'Entrega de reconocimiento a una docente',
    caption: 'Reconocimiento a la vocación',
    category: 'ceremonias',
  },
  {
    src: '/assets/fotos/IMG_5068.jpg',
    thumb: '/assets/fotos/thumbs/IMG_5068.jpg',
    alt: 'Estudiantes con diplomas en la ceremonia de graduación',
    caption: 'Una etapa que culmina',
    category: 'ceremonias',
  },
];

export const featuredPhotos: Photo[] = [
  photos[0],
  photos[7],
  photos[34],
  photos[14],
  photos[20],
  photos[30],
];

export function photosByCategory(category: PhotoCategory): Photo[] {
  return photos.filter((photo) => photo.category === category);
}
