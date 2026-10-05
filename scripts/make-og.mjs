// Renders the 1200x630 share images (public/og/<lang>.png), one per language, with
// headless Chromium (Playwright): Narra peeking in from the left on og-background,
// the wordmark, the app's tagline and the eyebrow line in each language on the right.
// The output is committed; CI doesn't run this.
//
// Usage: npm run og
//   (Chromium: npx playwright install chromium; set PLAYWRIGHT_BROWSERS_PATH to keep it off the system disk)
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LANGS = ["en", "tr", "es", "fr", "de", "it", "pt", "cs", "fa", "ru", "ja", "ko", "zh-Hans", "zh-Hant", "ar", "vi", "la"];
const RTL = new Set(["ar", "fa"]);

async function firstExisting(...files) {
  for (const f of files) {
    try {
      await access(f);
      return f;
    } catch {}
  }
  throw new Error(`None found: ${files.join(", ")}`);
}

const bg = await firstExisting(
  path.join(SITE, "src/assets/brand/og-background.png"),
  path.join(SITE, "src/assets/brand/og-background.webp"),
);
const appStrings = JSON.parse(await readFile(path.join(SITE, "src/i18n/app-strings.json"), "utf8"));
const fontsCss = (await readFile(path.join(SITE, "src/styles/fonts.css"), "utf8")).replaceAll(
  "url(/fonts/",
  `url(${pathToFileURL(path.join(SITE, "public/fonts")).href}/`,
);

// The eyebrow text lives in the TypeScript dictionaries; read it with a light regex.
async function eyebrow(lang) {
  const src = await readFile(path.join(SITE, "src/i18n", `${lang}.ts`), "utf8");
  const hero = src.slice(src.indexOf("hero:"));
  return hero.match(/eyebrow:\s*"((?:[^"\\]|\\.)*)"/)[1].replace(/\\"/g, '"');
}

const FONT = {
  latin: { display: '"Cormorant Garamond", serif', body: '"Nunito Variable", sans-serif' },
  ar: { display: '"Amiri", "Cormorant Garamond", serif', body: '"Vazirmatn Variable", sans-serif' },
  ja: { display: '"Cormorant Garamond", "Hiragino Mincho ProN", serif', body: '"Nunito Variable", "Hiragino Maru Gothic ProN", sans-serif' },
  ko: { display: '"Cormorant Garamond", "AppleMyungjo", serif', body: '"Nunito Variable", "Apple SD Gothic Neo", sans-serif' },
  "zh-Hans": { display: '"Cormorant Garamond", "Songti SC", serif', body: '"Nunito Variable", "PingFang SC", sans-serif' },
  "zh-Hant": { display: '"Cormorant Garamond", "Songti TC", serif', body: '"Nunito Variable", "PingFang TC", sans-serif' },
};
const fontsFor = (lang) => FONT[lang] ?? (RTL.has(lang) ? FONT.ar : FONT.latin);

const html = (lang, tagline, eyebrowText) => {
  const f = fontsFor(lang);
  const dir = RTL.has(lang) ? "rtl" : "ltr";
  return `<!doctype html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><style>
${fontsCss}
*{margin:0;box-sizing:border-box}
html,body{width:1200px;height:630px;overflow:hidden;background:#120c1b}
body{background:url("${pathToFileURL(bg).href}") center/cover no-repeat;color:#f3eefa;font-family:${f.body}}
.box{position:absolute;top:0;bottom:0;left:560px;right:72px;display:flex;flex-direction:column;justify-content:center;gap:22px;text-align:start}
.mark{font-family:"Cormorant Garamond",serif;font-weight:600;font-size:112px;line-height:.9;letter-spacing:.01em;direction:ltr;text-align:${dir === "rtl" ? "right" : "left"}}
.tag{font-family:${f.display};font-weight:${RTL.has(lang) ? 700 : 600};font-size:${RTL.has(lang) ? 50 : 54}px;line-height:1.2;text-wrap:balance}
.eye{font-weight:800;font-size:21px;letter-spacing:${/^(ja|ko|zh|ar|fa)/.test(lang) ? "0" : ".06em"};text-transform:${/^(ja|ko|zh|ar|fa)/.test(lang) ? "none" : "uppercase"};color:#c4a1ff}
.spark{width:180px;height:2px;background:linear-gradient(to ${dir === "rtl" ? "left" : "right"},#c4a1ff,transparent)}
:lang(ja) .tag{word-break:auto-phrase}
</style></head><body><div class="box">
<div class="mark">Narra</div><div class="spark"></div>
<div class="tag">${tagline}</div>
<div class="eye">${eyebrowText}</div>
</div></body></html>`;
};

await mkdir(path.join(SITE, "public/og"), { recursive: true });
const tmp = path.join(os.tmpdir(), "narra-og");
await mkdir(tmp, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const lang of LANGS) {
  // Loaded from a file:// URL so the local fonts and background are allowed to load.
  const file = path.join(tmp, `${lang}.html`);
  await writeFile(file, html(lang, appStrings[lang].strings["help.about.tagline"], await eyebrow(lang)));
  await page.goto(pathToFileURL(file).href, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(SITE, "public/og", `${lang.toLowerCase()}.png`), type: "png" });
  console.log(`og/${lang.toLowerCase()}.png`);
}
await browser.close();
