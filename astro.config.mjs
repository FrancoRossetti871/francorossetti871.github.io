// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Para GitHub Pages el sitio vive en /<nombre-del-repo>/.
// En otros hosts (Vercel, Netlify) se puede dejar BASE_PATH vacío.
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://francorossetti871.github.io",
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
