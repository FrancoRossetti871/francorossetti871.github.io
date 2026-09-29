// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// En GitHub Pages de proyecto el sitio vive en /<nombre-del-repo>/; en el repo
// <usuario>.github.io (sitio de usuario) vive en la raíz "/".
// En otros hosts (Vercel, Netlify) se puede dejar BASE_PATH vacío.
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://francorossetti871.github.io",
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
