// The seventeen languages Narra ships in, in the app's own order.
// `code` is the BCP 47 tag used for <html lang> and hreflang; `slug` is the URL prefix
// (English lives at the root).

export const LANGS = [
  "en", "tr", "es", "fr", "de", "it", "pt", "cs", "fa", "ru",
  "ja", "ko", "zh-Hans", "zh-Hant", "ar", "vi", "la",
] as const;

export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

type LangInfo = {
  /** The language's name in itself, for the language menu. */
  name: string;
  dir: "ltr" | "rtl";
  /** Open Graph locale. */
  og: string;
  /** Writing system, used to pick fonts. */
  script: "latin" | "cyrillic" | "arabic" | "cjk";
};

export const LANG_INFO: Record<Lang, LangInfo> = {
  en: { name: "English", dir: "ltr", og: "en_US", script: "latin" },
  tr: { name: "Türkçe", dir: "ltr", og: "tr_TR", script: "latin" },
  es: { name: "Español", dir: "ltr", og: "es_ES", script: "latin" },
  fr: { name: "Français", dir: "ltr", og: "fr_FR", script: "latin" },
  de: { name: "Deutsch", dir: "ltr", og: "de_DE", script: "latin" },
  it: { name: "Italiano", dir: "ltr", og: "it_IT", script: "latin" },
  pt: { name: "Português", dir: "ltr", og: "pt_BR", script: "latin" },
  cs: { name: "Čeština", dir: "ltr", og: "cs_CZ", script: "latin" },
  fa: { name: "فارسی", dir: "rtl", og: "fa_IR", script: "arabic" },
  ru: { name: "Русский", dir: "ltr", og: "ru_RU", script: "cyrillic" },
  ja: { name: "日本語", dir: "ltr", og: "ja_JP", script: "cjk" },
  ko: { name: "한국어", dir: "ltr", og: "ko_KR", script: "cjk" },
  "zh-Hans": { name: "简体中文", dir: "ltr", og: "zh_CN", script: "cjk" },
  "zh-Hant": { name: "繁體中文", dir: "ltr", og: "zh_TW", script: "cjk" },
  ar: { name: "العربية", dir: "rtl", og: "ar_AR", script: "arabic" },
  vi: { name: "Tiếng Việt", dir: "ltr", og: "vi_VN", script: "latin" },
  la: { name: "Latina", dir: "ltr", og: "la_VA", script: "latin" },
};

export const isLang = (value: string | undefined): value is Lang =>
  value !== undefined && (LANGS as readonly string[]).includes(value);

/** URL segment for a language: "" for English, "tr", "zh-hans", ... */
export const slugOf = (lang: Lang): string => (lang === DEFAULT_LANG ? "" : lang.toLowerCase());

export const langFromSlug = (slug: string | undefined): Lang => {
  if (!slug) return DEFAULT_LANG;
  const found = LANGS.find((l) => l.toLowerCase() === slug.toLowerCase());
  if (!found) throw new Error(`Unknown language slug: ${slug}`);
  return found;
};

/** Site path for a page in a language, always with a trailing slash. */
export const pathFor = (lang: Lang, page = ""): string => {
  const parts = [slugOf(lang), page].filter(Boolean);
  return parts.length ? `/${parts.join("/")}/` : "/";
};

/** getStaticPaths helper: one entry per language, English without a prefix. */
export const langPaths = () =>
  LANGS.map((lang) => ({ params: { lang: slugOf(lang) || undefined }, props: { lang } }));

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const CJK_NUM = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const AR_ORD = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس", "السابع", "الثامن", "التاسع", "العاشر"];
const FA_ORD = ["یکم", "دوم", "سوم", "چهارم", "پنجم", "ششم", "هفتم", "هشتم", "نهم", "دهم"];

/** "Chapter I", "Bölüm I", "第1章", "第一章", "الفصل الأول" ... (n starts at 1). */
export function chapterLabel(lang: Lang, n: number): string {
  const r = ROMAN[n - 1];
  switch (lang) {
    case "en": return `Chapter ${r}`;
    case "tr": return `Bölüm ${r}`;
    case "es": return `Capítulo ${r}`;
    case "fr": return `Chapitre ${r}`;
    case "de": return `Kapitel ${r}`;
    case "it": return `Capitolo ${r}`;
    case "pt": return `Capítulo ${r}`;
    case "cs": return `Kapitola ${r}`;
    case "ru": return `Глава ${r}`;
    case "vi": return `Chương ${r}`;
    case "la": return `Caput ${r}`;
    case "ja": return `第${n}章`;
    case "ko": return `제${n}장`;
    case "zh-Hans":
    case "zh-Hant": return `第${CJK_NUM[n - 1]}章`;
    case "ar": return `الفصل ${AR_ORD[n - 1]}`;
    case "fa": return `فصل ${FA_ORD[n - 1]}`;
  }
}

/** Short numeral for the table of contents. */
export function chapterNumeral(lang: Lang, n: number): string {
  if (lang === "ja" || lang === "ko") return String(n);
  if (lang === "zh-Hans" || lang === "zh-Hant") return CJK_NUM[n - 1];
  if (lang === "ar") return n.toLocaleString("ar-EG");
  if (lang === "fa") return n.toLocaleString("fa-IR");
  return ROMAN[n - 1];
}

const LA_MONTHS = ["Ianuarii", "Februarii", "Martii", "Aprilis", "Maii", "Iunii", "Iulii", "Augusti", "Septembris", "Octobris", "Novembris", "Decembris"];

/** Long date in the page language (Latin has no Intl data, so it's spelled out here). */
export function formatDate(lang: Lang, iso: string): string {
  const date = new Date(`${iso}T12:00:00Z`);
  if (lang === "la") return `${date.getUTCDate()} ${LA_MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  return new Intl.DateTimeFormat(lang, { dateStyle: "long", timeZone: "UTC" }).format(date);
}
