// Genera public/cv-franco-rossetti.pdf a partir de scripts/cv.html.
// Uso: npm run cv (requiere Playwright: npx playwright install chromium)
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const html = fileURLToPath(new URL("./cv.html", import.meta.url));
const out = fileURLToPath(new URL("../public/cv-franco-rossetti.pdf", import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${html}`);
await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log(`CV generado en ${out}`);
