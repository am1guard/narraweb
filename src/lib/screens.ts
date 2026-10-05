// App screenshots: src/assets/screens/<lang>/<name>.png overrides src/assets/screens/common/<name>.png.
// Portrait 1206 x 2622 (iPhone), landscape 2622 x 1206 for in-game shots. JPEG/WebP also accepted.
import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n/languages";

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
