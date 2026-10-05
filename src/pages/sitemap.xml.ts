// sitemap.xml with hreflang alternates for every page in every language.
import type { APIRoute } from "astro";
import { config } from "../config";
import { LANGS, pathFor } from "../i18n/languages";

const PAGES = ["", "support", "privacy", "terms"];

export const GET: APIRoute = () => {
  const url = (path: string) => new URL(path, config.siteUrl).href;
  const entries = PAGES.flatMap((page) =>
    LANGS.map((lang) => {
      const alternates = LANGS.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(pathFor(l, page))}"/>`,
      ).join("\n");
      return `  <url>\n    <loc>${url(pathFor(lang, page))}</loc>\n    <lastmod>${config.lastUpdated}</lastmod>\n${alternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${url(pathFor("en", page))}"/>\n  </url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
