// Narra's poses for her walk along the footer (FooterNarra.astro).
//
// This list is the only place a pose is named. The drawings live in
// src/assets/mascot/walk/<name>.png and are made by scripts/cutout_mascot.py (background
// removed, every pose at the same head size, cropped tight and centred on the face). A new
// drawing dropped there is picked up on the next build; a pose without one borrows an
// existing picture (`fallback`, shown at the reference size).
//
// sway: how much her hair and tail sway on top of the float ("strong" while she drifts).
// The drift drawing faces right; the walker mirrors it when she goes left.
import type { ImageMetadata } from "astro";

export type PoseName = "narra-drift" | "narra-look" | "narra-wave" | "narra-sit" | "narra-sleep" | "narra-peek";
export type Sway = "strong" | "soft" | "none";

export const WALK_POSES: readonly { name: PoseName; fallback: string; sway: Sway; note: string }[] = [
  { name: "narra-drift", fallback: "mascot/guide_explain", sway: "strong", note: "drifting to the right, side view" },
  { name: "narra-look", fallback: "mascot/welcome", sway: "soft", note: "stops and looks at the visitor" },
  { name: "narra-wave", fallback: "brand/narra-wave", sway: "soft", note: "waves" },
  { name: "narra-sit", fallback: "brand/hero-narra", sway: "soft", note: "sits on the edge reading her book" },
  { name: "narra-sleep", fallback: "mascot/support_hero", sway: "soft", note: "curls up and sleeps" },
  { name: "narra-peek", fallback: "mascot/guide_peek", sway: "none", note: "holds the edge with both hands and peeks" },
];

const drawn = import.meta.glob<{ default: ImageMetadata }>("../assets/mascot/walk/*.{png,webp}", { eager: true });
const borrowed = import.meta.glob<{ default: ImageMetadata }>(["../assets/mascot/*.webp", "../assets/brand/*.webp"], {
  eager: true,
});

const baseName = (path: string) => path.split("/").pop()!.replace(/\.(png|webp)$/, "");

/** The pose every drawing is measured against: its height is the walker's size (--walker). */
export const REFERENCE_POSE: PoseName = "narra-look";

/** The picture for a pose: its own drawing when there is one, the fallback otherwise. */
export function poseImage(pose: (typeof WALK_POSES)[number]): { image: ImageMetadata; own: boolean } {
  const own = Object.entries(drawn).find(([path]) => baseName(path) === pose.name);
  if (own) return { image: own[1].default, own: true };
  const fallback = borrowed[`../assets/${pose.fallback}.webp`];
  if (!fallback) throw new Error(`[walk-poses] ${pose.name}: fallback ${pose.fallback}.webp not found`);
  return { image: fallback.default, own: false };
}
