# Unidad Educativa Fiscomisional 10 de Agosto

Sitio web institucional de la **Unidad Educativa Fiscomisional 10 de Agosto**, de San Lorenzo, Esmeraldas, Ecuador. Su lema es **“Siempre sembrando”**.

El sitio está construido con **Astro**, **Tailwind CSS** y **Decap CMS**. Es estático, responsive y está organizado en páginas independientes: Inicio, Nosotros, Oferta académica, Admisiones, Eventos y Galería.

## Contenido del sitio

- **Inicio:** presentación, accesos a las secciones, carrusel de fotografías y próximos eventos.
- **Nosotros:** historia, misión, visión y pilares institucionales.
- **Oferta académica:** Educación Inicial, Preparatoria, Básica Elemental, Media, Superior, Bachillerato en Ciencias y Bachillerato Técnico en Informática (con pasantías en el último año).
- **Admisiones:** aviso de matrículas cerradas y los 7 requisitos para cuando se habilite el proceso.
- **Eventos:** agenda administrable desde Decap CMS y páginas de detalle.
- **Galería:** 35 fotografías con filtros por categoría y visor ampliado.
- **Redes oficiales:** únicamente Facebook y TikTok. El sitio no incluye WhatsApp.

## Requisitos

- **Node.js 22.23.4 o superior** (el proyecto usa Astro 7).
- npm 9.6.5 o superior.

Comprueba la versión instalada:

```bash
node --version
npm --version
```

## Instalación y desarrollo

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre `http://localhost:4321` en el navegador.

### Si `npm run dev` falla en este equipo

El `PATH` de este equipo contiene una comilla mal formada que puede impedir que npm resuelva los comandos. Si ocurre, abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
$env:Path = $env:Path.Replace('"','')
npm run dev
```

También puedes iniciar Astro directamente, sin pasar por el script de npm:

```powershell
node .\node_modules\astro\bin\astro.mjs dev
```

## Compilar y previsualizar

```bash
npm run build
npm run preview
```

`npm run build` ejecuta primero `astro check` y luego genera el sitio en `dist/`.

En este equipo, si npm presenta el problema de `PATH` descrito arriba:

```powershell
$env:Path = $env:Path.Replace('"','')
npm run build
npm run preview
```

O directamente:

```powershell
node .\node_modules\astro\bin\astro.mjs check
node .\node_modules\astro\bin\astro.mjs build
node .\node_modules\astro\bin\astro.mjs preview
```

## Estructura del proyecto

```text
.
├── public/
│   ├── admin/
│   │   ├── index.html          # Panel de Decap CMS
│   │   └── config.yml          # Configuración del panel y de la colección Eventos
│   └── assets/
│       ├── logo.png            # Escudo institucional
│       ├── marco.jpg           # Fotografía principal de portada
│       ├── og-cover.jpg        # Imagen para compartir en redes
│       ├── eventos/            # Imágenes de los eventos
│       └── fotos/              # 35 fotografías de la galería y sus miniaturas
├── src/
│   ├── components/             # Encabezado, pie, carrusel, galería, tarjetas, iconos…
│   ├── content/eventos/        # Eventos en Markdown (administrados por Decap)
│   ├── data/
│   │   ├── site.ts             # Datos institucionales, redes y navegación
│   │   └── photos.ts           # Metadatos de las 35 fotografías
│   ├── layouts/MainLayout.astro
│   ├── lib/eventos.ts          # Fechas, orden y rutas de eventos
│   ├── pages/
│   │   ├── index.astro
│   │   ├── nosotros.astro
│   │   ├── oferta.astro
│   │   ├── admisiones.astro
│   │   ├── eventos.astro
│   │   ├── eventos/[slug].astro
│   │   ├── galeria.astro
│   │   └── 404.astro
│   ├── styles/global.css       # Tema, componentes y animaciones
│   └── content.config.ts       # Esquema de la colección Eventos
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## Cómo actualizar el contenido

### Datos institucionales y redes sociales

Edita `src/data/site.ts`. Allí están el nombre, lema, años de trayectoria, ubicación, descripción y enlaces de Facebook y TikTok.

### Fotografías

Las imágenes públicas se encuentran en `public/assets/fotos/`. Las miniaturas usadas por la galería están en `public/assets/fotos/thumbs/`.

Para reemplazar o agregar fotografías:

1. Guarda la versión grande en `public/assets/fotos/`.
2. Guarda una miniatura en `public/assets/fotos/thumbs/`.
3. Actualiza `src/data/photos.ts` con la ruta, descripción, texto alternativo y categoría.

Se recomienda mantener las imágenes en formato JPG/WebP y un ancho cercano a **1500 px** para las fotografías grandes y **640 px** para las miniaturas.

### Eventos

Los eventos se administran desde **Decap CMS**, en `/admin/`, o editando los archivos Markdown de `src/content/eventos/`.

Cada evento tiene estos campos:

- `title`: título del evento.
- `date`: fecha en formato `AAAA-MM-DD`.
- `image`: ruta pública de la imagen, por ejemplo `/assets/eventos/mi-evento.jpg`.
- `description`: descripción breve.

Las imágenes que se suben desde Decap se guardan en `public/assets/eventos/`.

> **Importante:** los cuatro eventos incluidos actualmente son ejemplos de demostración. Deben revisarse, actualizarse o eliminarse antes de publicar el sitio. No deben presentarse como una agenda oficial hasta que la institución confirme las fechas.

## Panel de administración con Decap CMS

El panel está en:

```text
http://localhost:4321/admin/
```

En desarrollo, el archivo `public/admin/config.yml` tiene `local_backend: true`. Para probar el panel localmente:

1. En una terminal, inicia el sitio con `npm run dev`.
2. En otra terminal, inicia el servidor local de Decap:

```bash
npx decap-server
```

3. Abre `http://localhost:4321/admin/`.

Los cambios se guardarán directamente en los archivos del proyecto.

### Publicación en Netlify con Netlify Identity

La configuración de Decap usa `git-gateway` y la rama `main`. Para habilitar la edición en producción:

1. Sube el proyecto a un repositorio de GitHub y asegúrate de que la rama principal se llame `main`.
2. Crea un sitio nuevo en Netlify a partir del repositorio.
3. Netlify puede usar la configuración de `netlify.toml`:
   - Comando de build: `npm run build`
   - Directorio de publicación: `dist`
4. En el panel de Netlify del sitio, entra en **Site configuration → Identity** y habilita **Identity**.
5. En **Identity → Services**, habilita **Git Gateway**.
6. En **Identity**, invita a las personas que administrarán los eventos.
7. Ingresa a `https://TU-DOMINIO.netlify.app/admin/` e inicia sesión con la invitación.

Si el sitio se aloja fuera de Netlify, será necesario cambiar el backend de Decap (por ejemplo, a GitHub con OAuth) y ajustar la autenticación.

## Antes de publicar

- Revisar y actualizar el texto de misión y visión si la institución los modifica.
- Verificar que el aviso de matrículas cerradas siga vigente.
- Confirmar los requisitos de admisión.
- Reemplazar los eventos de ejemplo por la agenda oficial.
- Revisar los enlaces de Facebook y TikTok.
- Reemplazar o completar las fotografías con material autorizado por la institución.
- Configurar el dominio definitivo en Netlify.

## Créditos

- **Fotografías y escudo:** material proporcionado por la institución.
- **Tipografías:** Manrope y Fraunces, mediante Fontsource.
- **Sitio:** Astro + Tailwind CSS.
- **Gestión de eventos:** Decap CMS.
