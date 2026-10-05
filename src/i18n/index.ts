import en, { type Dict } from "./en";
import appStrings from "./app-strings.json";
import { LANGS, type Lang } from "./languages";

// Every language file in this folder, loaded at build time.
const modules = import.meta.glob<{ default: Dict }>(["./*.ts", "!./index.ts", "!./languages.ts"], { eager: true });

const dicts = {} as Record<Lang, Dict>;
for (const lang of LANGS) {
  const mod = modules[`./${lang}.ts`];
  if (!mod) throw new Error(`[i18n] Missing translation file src/i18n/${lang}.ts`);
  dicts[lang] = mod.default;
}

/** Fails the build when a language is missing a key, has an extra one, or a list has the wrong length. */
function compare(reference: unknown, other: unknown, path: string, lang: string, problems: string[]) {
  if (typeof reference === "string") {
    if (typeof other !== "string") problems.push(`${lang}: ${path} should be text`);
    else if (other.trim() === "" && reference.trim() !== "") problems.push(`${lang}: ${path} is empty`);
    else if (reference.includes("{date}") && !other.includes("{date}")) problems.push(`${lang}: ${path} lost {date}`);
    return;
  }
  if (Array.isArray(reference)) {
    if (!Array.isArray(other)) return void problems.push(`${lang}: ${path} should be a list`);
    if (other.length !== reference.length) problems.push(`${lang}: ${path} has ${other.length} items, English has ${reference.length}`);
    reference.forEach((item, i) => compare(item, other[i], `${path}[${i}]`, lang, problems));
    return;
  }
  if (reference && typeof reference === "object") {
    if (!other || typeof other !== "object") return void problems.push(`${lang}: ${path} should be an object`);
    const refKeys = Object.keys(reference);
    const otherKeys = Object.keys(other);
    for (const key of refKeys) {
      if (!(key in other)) problems.push(`${lang}: missing ${path}.${key}`);
      else compare((reference as Record<string, unknown>)[key], (other as Record<string, unknown>)[key], `${path}.${key}`, lang, problems);
    }
    for (const key of otherKeys) if (!refKeys.includes(key)) problems.push(`${lang}: extra key ${path}.${key}`);
  }
}

const problems: string[] = [];
for (const lang of LANGS) {
  if (lang === "en") continue;
  compare(en, dicts[lang], "", lang, problems);
  if (!dicts[lang].legal.translationNote.trim()) problems.push(`${lang}: legal.translationNote is empty`);
  if (!(appStrings as Record<string, unknown>)[lang]) problems.push(`${lang}: missing from app-strings.json`);
}
if (problems.length) throw new Error(`[i18n] Translation problems:\n  ${problems.join("\n  ")}`);

export type AppStrings = (typeof appStrings)["en"];
export const t = (lang: Lang): Dict => dicts[lang];
export const app = (lang: Lang): AppStrings => (appStrings as Record<Lang, AppStrings>)[lang];
export { LANGS, type Lang, type Dict };
