// After `astro build`: every internal link and asset reference in dist/ must resolve to a file.
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function exists(p) {
  try {
    const s = await stat(p);
    if (s.isDirectory()) return (await stat(path.join(p, "index.html"))).isFile();
    return true;
  } catch {
    return false;
  }
}

const files = (await walk(DIST)).filter((f) => f.endsWith(".html"));
const broken = [];
let checked = 0;
for (const file of files) {
  const html = await readFile(file, "utf8");
  const refs = [...html.matchAll(/\b(?:href|src|srcset)="([^"]+)"/g)].flatMap((m) =>
    m[0].startsWith("srcset") ? m[1].split(",").map((s) => s.trim().split(/\s+/)[0]) : [m[1]],
  );
  for (const ref of refs) {
    if (!ref.startsWith("/") || ref.startsWith("//")) continue;
    const clean = decodeURI(ref.split("#")[0].split("?")[0]);
    if (!clean) continue;
    checked++;
    if (!(await exists(path.join(DIST, clean)))) broken.push(`${path.relative(DIST, file)} -> ${ref}`);
  }
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    checked++;
    if (!html.includes(`id="${m[1]}"`)) broken.push(`${path.relative(DIST, file)} -> #${m[1]} (no such id)`);
  }
}
if (broken.length) {
  console.error(`Broken internal links (${broken.length}):\n  ${broken.join("\n  ")}`);
  process.exit(1);
}
console.log(`Links OK: ${checked} internal references in ${files.length} pages.`);
