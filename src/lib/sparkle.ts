// The four-pointed sparkle from the app's background and icon (NarraStaticBackground.sparkle).

/** SVG path for a sparkle centered at (cx, cy) with radius r. */
export function sparklePath(cx: number, cy: number, r: number): string {
  const i = r * 0.22;
  const f = (n: number) => Math.round(n * 100) / 100;
  return [
    `M${f(cx)} ${f(cy - r)}`,
    `Q${f(cx + i)} ${f(cy - i)} ${f(cx + r)} ${f(cy)}`,
    `Q${f(cx + i)} ${f(cy + i)} ${f(cx)} ${f(cy + r)}`,
    `Q${f(cx - i)} ${f(cy + i)} ${f(cx - r)} ${f(cy)}`,
    `Q${f(cx - i)} ${f(cy - i)} ${f(cx)} ${f(cy - r)}Z`,
  ].join("");
}

/** SplitMix64 like the app's SeededGenerator, so the sky is the same on every build. */
export function seeded(seed: number) {
  let state = BigInt(seed);
  const mask = (1n << 64n) - 1n;
  return () => {
    state = (state + 0x9e3779b97f4a7c15n) & mask;
    let z = state;
    z = ((z ^ (z >> 30n)) * 0xbf58476d1ce4e5b9n) & mask;
    z = ((z ^ (z >> 27n)) * 0x94d049bb133111ebn) & mask;
    z = z ^ (z >> 31n);
    return Number(z >> 11n) / 2 ** 53;
  };
}

export type Star = { x: number; y: number; size: number; opacity: number };

/** Stars in a w x h box, kept in the top `depth` share like the app (0.75). */
export function stars(count: number, w: number, h: number, seed = 0x4e415252, depth = 0.75): Star[] {
  const rand = seeded(seed);
  const between = (a: number, b: number) => a + (b - a) * rand();
  return Array.from({ length: count }, () => ({
    x: between(0, w),
    y: between(0, h * depth),
    size: between(4, 11),
    opacity: between(0.25, 0.7),
  }));
}
