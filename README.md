# Unidad Educativa Fiscomisional 10 de Agosto

Sitio web institucional de la **Unidad Educativa Fiscomisional 10 de Agosto**, de San Lorenzo, Esmeraldas, Ecuador. Su lema es **“Siempre sembrando”**.

El sitio está construido con **Astro**, **Tailwind CSS** y **Decap CMS**. Es estático, responsive y está organizado en páginas independientes: Inicio, Nosotros, Estructura organizacional, Oferta académica, Matrícula y Pensiones, Eventos y Galería.

## Contenido del sitio

- **Inicio:** presentación, accesos a las secciones, carrusel de fotografías y próximos eventos.
- **Nosotros:** historia, misión, visión y pilares institucionales.
- **Estructura organizacional:** perfiles agrupados por Rectorado, Vicerrectorado, Inspección, DECE, Docentes y Consejo Estudiantil, administrables desde Decap CMS.
- **Oferta académica:** Educación Inicial, Preparatoria, Básica Elemental, Media, Superior, Bachillerato en Ciencias y Bachillerato Técnico en Informática (con pasantías en el último año).
- **Matrícula y Pensiones:** estado del periodo de matrículas, los 7 requisitos y los costos de matrícula y pensión para Inicial a 10mo y Bachillerato. Todo el contenido se edita desde un único archivo en Decap CMS.
- **Eventos:** agenda administrable desde Decap CMS y páginas de detalle.
- **Galería:** 35 fotografías con filtros por categoría y visor ampliado.
- **Redes oficiales:** Facebook, TikTok e Instagram. El sitio no incluye WhatsApp.

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
│   │   └── config.yml          # Configuración del panel y de las colecciones
│   └── assets/
│       ├── logo.png            # Escudo institucional
│       ├── marco.jpg           # Fotografía principal de portada
│       ├── og-cover.jpg        # Imagen para compartir en redes
│       ├── estructura/         # Fotografías de la estructura organizacional
│       ├── eventos/            # Imágenes de los eventos
│       └── fotos/              # 35 fotografías de la galería y sus miniaturas
├── src/
│   ├── components/             # Encabezado, pie, carrusel, galería, tarjetas, iconos…
│   ├── content/
│   │   ├── eventos/            # Eventos en Markdown
│   │   ├── estructura/         # Perfiles de la estructura organizacional
│   │   └── paginas/            # Contenido editable de Matrícula y Pensiones
│   │       └── matricula-y-pensiones.md
│   ├── data/
│   │   ├── estructura.ts       # Áreas, descripciones e iconos
│   │   ├── photos.ts           # Metadatos de las 35 fotografías
│   │   └── site.ts             # Datos institucionales, redes y navegación
│   ├── layouts/MainLayout.astro
│   ├── lib/
│   │   ├── eventos.ts          # Fechas, orden y rutas de eventos
│   │   └── paginas.ts          # Lectura de las páginas editables
│   ├── pages/
│   │   ├── index.astro
│   │   ├── nosotros.astro
│   │   ├── estructura-organizacional.astro
│   │   ├── oferta.astro
│   │   ├── matricula-y-pensiones.astro
│   │   ├── eventos.astro
│   │   ├── eventos/[slug].astro
│   │   ├── galeria.astro
│   │   └── 404.astro
│   ├── styles/global.css       # Tema, componentes y animaciones
│   └── content.config.ts       # Esquemas de todas las colecciones
├── astro.config.mjs
├── netlify.toml                # Build, cabeceras y redirecciones 301
└── package.json
```

## Cómo actualizar el contenido

### Datos institucionales y redes sociales

Edita `src/data/site.ts`. Allí están el nombre, lema, años de trayectoria, ubicación, descripción y enlaces de Facebook, TikTok e Instagram.

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

### Estructura organizacional

Los perfiles se administran desde **Decap CMS** o editando archivos Markdown en `src/content/estructura/`. Cada registro tiene:

- `area`: Rectorado, Vicerrectorado, Inspección, DECE, Docentes o Consejo Estudiantil. Determina el grupo en el que aparece el perfil.
- `title`: nombre y apellido.
- `cargo`: puesto exacto en texto libre. Ejemplos: `Rector`, `Psicólogo Clínico`, `Profesor de Matemáticas`.
- `image`: ruta de la fotografía, por ejemplo `/assets/estructura/nombre.jpg`.

La página `/estructura-organizacional` agrupa automáticamente los registros por `area` y muestra el `cargo` específico en cada tarjeta. Las fotos subidas desde el panel se guardan en `public/assets/estructura/`.

La colección se entrega sin perfiles cargados para no inventar información institucional. Agrega los integrantes reales desde `/admin/`; hasta entonces, la página muestra un aviso de actualización.

### Matrícula y Pensiones

Todo el contenido de esta sección se edita desde **Decap CMS** en un único archivo:

- `src/content/paginas/matricula-y-pensiones.md`: estado del proceso, aviso superior, mensaje, título, introducción, matrícula y pensión de Inicial a 10mo y Bachillerato, y nota de pago.

Los valores actuales son: Inicial a 10mo, matrícula **$12.42** y pensión **$19.87**; Bachillerato, matrícula **$16.56** y pensión **$26.50**. La nota de pago indica que estos valores se cancelan los primeros días de cada mes.

La página `/matricula-y-pensiones` muestra juntos el estado del proceso, los requisitos, los costos y los canales oficiales. El aviso superior del sitio lee el mismo archivo, por lo que el estado se actualiza en ambos lugares al cambiar `estado` y `aviso` en el panel.

Las rutas anteriores `/admisiones` y `/pensiones` se eliminaron y redirigen con estado **301** a `/matricula-y-pensiones` mediante `netlify.toml`.

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
6. En **Identity**, invita a las personas que administrarán los eventos, la estructura organizacional y las páginas editables.
7. Ingresa a `https://TU-DOMINIO.netlify.app/admin/` e inicia sesión con la invitación.

Si el sitio se aloja fuera de Netlify, será necesario cambiar el backend de Decap (por ejemplo, a GitHub con OAuth) y ajustar la autenticación.

## Antes de publicar

- Revisar y actualizar el texto de misión y visión si la institución los modifica.
- Verificar el estado del periodo de matrículas en Decap CMS y actualizar el aviso si cambia.
- Confirmar los requisitos de admisión.
- Confirmar los valores de matrícula y pensiones antes de publicarlos.
- Cargar los perfiles reales de la estructura organizacional con fotografías autorizadas.
- Reemplazar los eventos de ejemplo por la agenda oficial.
- Revisar los enlaces de Facebook, TikTok e Instagram.
- Reemplazar o completar las fotografías con material autorizado por la institución.
- Configurar el dominio definitivo en Netlify.

## Créditos

- **Fotografías y escudo:** material proporcionado por la institución.
- **Tipografías:** Manrope y Fraunces, mediante Fontsource.
- **Sitio:** Astro + Tailwind CSS.
- **Gestión de contenido:** Decap CMS.
