// Todo el contenido personal del portfolio vive acá.
// Para actualizar textos, links o proyectos, editar solo este archivo.

export const profile = {
  name: "Franco Rossetti",
  role: "Desarrollador Full Stack",
  tagline:
    "Construyo aplicaciones web de punta a punta: interfaces claras en el frontend y APIs y bases de datos que las sostienen.",
  email: "franrossetticolon@icloud.com",
  github: "https://github.com/FrancoRossetti871",
  cv: "cv-franco-rossetti.pdf",
};

export const bio = [
  "Soy estudiante de desarrollo de software y me gusta resolver problemas reales con código. Empecé maquetando sitios con HTML y CSS, y hoy trabajo con React, Next.js y TypeScript conectados a bases de datos SQL.",
  "Mi proyecto más completo es MiCochera, una plataforma de alquiler de cocheras con autenticación, roles y gestión de incidentes. Busco mi primera experiencia profesional en un equipo donde pueda aportar y seguir aprendiendo.",
];

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Next.js API Routes", "SQL Server", "SQL", "Autenticación con tokens"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "VS Code", "npm", "Astro"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "MiCochera",
    description:
      "Plataforma para alquilar y administrar cocheras. Incluye registro e inicio de sesión con sesiones persistentes, roles (conductor, propietario y administrador), mapa de ubicaciones y un sistema de reporte de incidentes.",
    tech: ["Next.js 14", "TypeScript", "React", "Tailwind CSS", "shadcn/ui", "SQL Server", "Leaflet"],
    repo: "https://github.com/FrancoRossetti871/micochera-alquiler",
  },
  {
    title: "Mundo Burger",
    description:
      "Sitio web para una hamburguesería con menú de burgers inspiradas en ciudades del mundo, página institucional, mapa de ubicación y carrito de compras. Diseño responsive con grilla de Bootstrap.",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "Bootstrap Icons"],
    repo: "https://github.com/FrancoRossetti871/entrega2--Franco-Rossetti",
  },
  {
    title: "Nota periodística Rosario3",
    description:
      "Maquetación de una nota deportiva sobre las lesiones de figuras antes del Mundial 2026, recreando el estilo de un diario digital con HTML semántico y hojas de estilo propias.",
    tech: ["HTML5 semántico", "CSS3"],
    repo: "https://github.com/FrancoRossetti871/Probando-CSS",
  },
  {
    title: "Este portfolio",
    description:
      "Sitio personal estático, accesible y responsive, con modo claro/oscuro, animaciones que respetan prefers-reduced-motion, formulario con validación y deploy automático con GitHub Actions.",
    tech: ["Astro", "Tailwind CSS", "TypeScript", "GitHub Pages"],
    repo: "https://github.com/FrancoRossetti871/francorossetti871.github.io",
    demo: "https://francorossetti871.github.io/",
  },
];
