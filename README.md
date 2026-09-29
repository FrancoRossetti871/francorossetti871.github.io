# Portfolio — Franco Rossetti

Portfolio personal para presentarme como **Desarrollador Full Stack**: quién soy, qué tecnologías manejo, mis proyectos y cómo contactarme.

🌐 **Sitio publicado:** https://francorossetti871.github.io/

## Stack

| Herramienta | Uso |
| --- | --- |
| [Astro](https://astro.build) | Generador de sitio estático (HTML sin JS innecesario, muy rápido) |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos y diseño responsive |
| TypeScript | Datos del perfil tipados y scripts del cliente |
| Playwright | Generación del CV en PDF |
| GitHub Actions + GitHub Pages | Build y deploy automático |

## Secciones

- **Hero:** nombre, rol, frase de presentación, botones "Ver proyectos", "Contactarme" y descarga del CV.
- **Sobre mí:** biografía breve y habilidades agrupadas en Frontend, Backend y Herramientas.
- **Proyectos:** 4 proyectos reales con descripción, tecnologías y link al repositorio/demo.
- **Contacto:** email, GitHub y formulario con validación de campos.
- **Navbar** fija con menú hamburguesa en mobile.

## Extras

- Modo claro / oscuro (respeta la preferencia del sistema y recuerda la elección).
- Animaciones sutiles de aparición que se desactivan con `prefers-reduced-motion`.
- CV descargable en PDF.
- HTML semántico (`header`, `nav`, `main`, `section`, `footer`, un solo `h1`), link "Saltar al contenido", foco visible y navegación por teclado.
- Responsive probado en 360px, 768px y 1280px sin scroll horizontal.

## Cómo correrlo localmente

Requisitos: **Node.js 20 o superior** y npm.

```bash
git clone https://github.com/FrancoRossetti871/francorossetti871.github.io.git
cd francorossetti871.github.io
npm install
npm run dev
```

Abrir http://localhost:4321 en el navegador.

### Otros comandos

| Comando | Descripción |
| --- | --- |
| `npm run build` | Genera el sitio de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run cv` | Regenera `public/cv-franco-rossetti.pdf` desde `scripts/cv.html` (requiere `npx playwright install chromium` la primera vez) |

## Estructura

```
src/
├── data/profile.ts      # Todo el contenido: datos, bio, skills y proyectos
├── layouts/Layout.astro # <head>, metadatos y tema
├── components/          # Header, Hero, About, Projects, Contact, Footer
├── pages/index.astro    # Página principal
└── styles/global.css    # Tailwind + paleta clara/oscura
public/                  # Favicon, foto de perfil y CV en PDF
scripts/                 # Generación del CV
```

Para modificar textos, links o proyectos alcanza con editar `src/data/profile.ts`.

## Deploy

Cada push a `main` ejecuta el workflow `.github/workflows/deploy.yml`, que compila el sitio y lo publica en GitHub Pages.
Para activarlo por primera vez: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
