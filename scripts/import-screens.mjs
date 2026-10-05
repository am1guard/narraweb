// Copies the app's screenshots into the site as high-quality WebP sources (Astro then makes
// AVIF/WebP sizes at build time). English goes to src/assets/screens/common, other languages
// to src/assets/screens/<lang>; languages without their own shot fall back to common.
//
// Usage: node scripts/import-screens.mjs [raw folder]
//   default raw folder: ../marketing/screens/raw/iphone-air
//   Either PNGs directly in that folder (English only, goes to common) or one subfolder per
//   language (en/, tr/, ...). Anything that isn't a folder or a PNG is ignored.
import { mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RAW = path.resolve(process.argv[2] ?? path.join(SITE, "..", "marketing", "screens", "raw", "iphone-air"));
// The names the site uses (src/lib/screens.ts).
const NAMES = ["library", "hub", "engine-picker", "saves", "mods", "gallery", "settings", "in-game-narra", "pause", "proactive", "portrait-play"];

if (!existsSync(RAW)) {
  console.error(`Screenshot folder not found: ${RAW}`);
  process.exit(1);
}
const entries = await readdir(RAW, { withFileTypes: true });
const sources = entries.filter((e) => e.isDirectory()).map((e) => [e.name, path.join(RAW, e.name)]);
if (entries.some((e) => e.isFile() && e.name.endsWith(".png"))) sources.unshift(["en", RAW]);
for (const [lang, from] of sources) {
  const to = path.join(SITE, "src/assets/screens", lang === "en" ? "common" : lang);
  await mkdir(to, { recursive: true });
  let count = 0;
  for (const name of NAMES) {
    const src = path.join(from, `${name}.png`);
    if (!existsSync(src)) continue;
    await sharp(src).webp({ quality: 90, effort: 6 }).toFile(path.join(to, `${name}.webp`));
    count++;
  }
  console.log(`${path.relative(SITE, to)}: ${count}`);
}
