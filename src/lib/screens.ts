// App screenshots: src/assets/screens/<lang>/<name>.png overrides src/assets/screens/common/<name>.png.
// iPhone Air: portrait 1260 x 2736, landscape 2736 x 1260 (other sizes work too). JPEG/WebP also accepted.
import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n/languages";

// Orientation is only a hint for placeholders; a real screenshot keeps its own shape.
export const SCREENS = {
  library: "portrait",
  hub: "portrait",
  "engine-picker": "portrait",
  "in-game-narra": "landscape",
  pause: "landscape",
  saves: "portrait",
  mods: "portrait",
  gallery: "portrait",
  settings: "portrait",
  proactive: "landscape",
  "portrait-play": "portrait",
} as const;

export type ScreenName = keyof typeof SCREENS;

const files = import.meta.glob<ImageMetadata>("/src/assets/screens/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

/** The screenshot for a language, falling back to the shared one; undefined if neither exists. */
export function screenFor(lang: Lang, name: ScreenName): ImageMetadata | undefined {
  const pick = (folder: string) =>
    Object.entries(files).find(([path]) => {
      const [dir, file] = path.split("/").slice(-2);
      return dir === folder && file.replace(/\.[^.]+$/, "") === name;
    })?.[1];
  return pick(lang) ?? pick(lang.toLowerCase()) ?? pick("common");
}

/** The first of several screenshots that exists (for chapters with a preferred and a fallback shot). */
export function firstScreen(lang: Lang, names: ScreenName[]): { name: ScreenName; image: ImageMetadata } | undefined {
  for (const name of names) {
    const image = screenFor(lang, name);
    if (image) return { name, image };
  }
  return undefined;
}
