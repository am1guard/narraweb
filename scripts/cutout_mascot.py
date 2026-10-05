#!/usr/bin/env python3
"""Alt bilgide gezinen Narra'nın pozlarını hazırlar: zemini temizler, hepsini aynı
ölçeğe getirir, sıkıca kırpar ve src/assets/mascot/walk/<ad>.png olarak yazar.

Kaynak PNG'ler depoya girmez; yalnız çıktılar girer. Kaynak klasör ilk argüman ya da
NARRA_WALK_SRC ile verilir; içinde narra-drift.png, narra-look.png ... bulunur.

Kullanım:
  uv run --no-project --with pillow --with numpy python scripts/cutout_mascot.py <kaynak klasör>

Zemin:
- Kaynak zaten saydamsa (köşeler saydam) alfa korunur; karakterin içindeki neredeyse
  opak pikseller (alfa >= 248) tam opak yapılır, alfa < 3 olan kırıntılar silinir.
- Kaynak beyaz zeminliyse "unmultiply white" uygulanır: alfa = 1 - min(R,G,B)/255,
  renk = (C - 255 * (1 - alfa)) / alfa. Yalnız dış zemine ve dış haleye uygulanır:
  bölge kenarlardan içeri açık renkli pikseller üzerinden flood-fill ile bulunur ve
  hale için birkaç piksel genişletilir. Karakterin içi (gövdenin beyaza yakın ortası
  dahil) tam opak kalır, delinmez.

Ölçek: her pozda iki gözün merkezi elle ölçülmüştür (FACES, kaynak pikseli). Pozlar,
gözler arası uzaklık EYE_DISTANCE olacak şekilde ölçeklenir; böylece baş her pozda aynı
büyüklüktedir. Kırpma yatayda yüzün ortasına göre simetriktir (aynalamada baş yerinde
kalır), dikeyde sıkıdır; peek'in alt kesik kenarı korunur.
"""
from __future__ import annotations

import os
import sys
from pathlib import Path

import numpy as np
from PIL import Image

SITE = Path(__file__).resolve().parent.parent
OUT = SITE / "src" / "assets" / "mascot" / "walk"

# Göz merkezleri (sol göz, sağ göz), 1254x1254 kaynak pikseli.
FACES: dict[str, tuple[tuple[int, int], tuple[int, int]]] = {
    "narra-drift": ((860, 520), (1070, 540)),
    "narra-look": ((568, 525), (780, 565)),
    "narra-wave": ((560, 460), (785, 550)),
    "narra-sit": ((640, 515), (805, 555)),
    "narra-sleep": ((615, 550), (840, 680)),
    "narra-peek": ((535, 780), (800, 825)),
}
# Çıktıda gözler arası uzaklık (piksel). narra-look yaklaşık 470 px yükseklikte çıkar;
# sitede en çok ~190 px yükseklikte gösterildiği için 2x ekranda bile yeterli.
EYE_DISTANCE = 84
# Alt kenarı düz kesik pozlar: kesik kırpılmaz, sitede çizginin üstüne oturur.
FLAT_BOTTOM = {"narra-peek"}
PAD = 4


def flood_from_border(passable: np.ndarray) -> np.ndarray:
    """Kenarlardan başlayıp yalnız `passable` pikseller üzerinden yayılan bölge."""
    region = np.zeros_like(passable)
    region[0, :] = passable[0, :]
    region[-1, :] = passable[-1, :]
    region[:, 0] = passable[:, 0]
    region[:, -1] = passable[:, -1]
    while True:
        grown = region.copy()
        grown[1:, :] |= region[:-1, :]
        grown[:-1, :] |= region[1:, :]
        grown[:, 1:] |= region[:, :-1]
        grown[:, :-1] |= region[:, 1:]
        grown &= passable
        if np.array_equal(grown, region):
            return region
        region = grown


def dilate(mask: np.ndarray, steps: int) -> np.ndarray:
    for _ in range(steps):
        grown = mask.copy()
        grown[1:, :] |= mask[:-1, :]
        grown[:-1, :] |= mask[1:, :]
        grown[:, 1:] |= mask[:, :-1]
        grown[:, :-1] |= mask[:, 1:]
        mask = grown
    return mask


def clean(img: Image.Image) -> np.ndarray:
    """RGBA float dizisi (0-1), zemini temizlenmiş, renkler premultiplied değil."""
    rgba = np.asarray(img.convert("RGBA")).astype(np.float64) / 255.0
    rgb, alpha = rgba[..., :3], rgba[..., 3]
    corners = [alpha[0, 0], alpha[0, -1], alpha[-1, 0], alpha[-1, -1]]

    if max(corners) < 0.04:
        # Zaten saydam: içi tam opak, kırıntılar sıfır.
        alpha = np.where(alpha >= 248 / 255, 1.0, alpha)
    else:
        # Beyaz zemin: dış zemin + hale bölgesinde beyazdan uzaklıkla alfa.
        light = rgb.min(axis=2) >= 200 / 255
        outside = dilate(flood_from_border(light), 6)
        a_white = 1.0 - rgb.min(axis=2)
        safe = np.maximum(a_white, 1e-6)[..., None]
        unmult = np.clip((rgb - (1.0 - a_white)[..., None]) / safe, 0.0, 1.0)
        alpha = np.where(outside, a_white, 1.0)
        rgb = np.where(outside[..., None], unmult, rgb)

    alpha = np.where(alpha < 3 / 255, 0.0, alpha)
    rgb = np.where(alpha[..., None] > 0, rgb, 0.0)
    return np.dstack([rgb, alpha])


def prepare(name: str, src: Path) -> Path:
    (lx, ly), (rx, ry) = FACES[name]
    data = clean(Image.open(src))
    img = Image.fromarray(np.round(data * 255).astype(np.uint8), "RGBA")

    scale = EYE_DISTANCE / float(np.hypot(rx - lx, ry - ly))
    size = (round(img.width * scale), round(img.height * scale))
    img = img.resize(size, Image.Resampling.LANCZOS)  # Pillow RGBA'yı premultiplied ölçekler
    face_x = (lx + rx) / 2 * scale

    alpha = np.asarray(img)[..., 3]
    ys, xs = np.nonzero(alpha > 6)
    top, bottom = max(int(ys.min()) - PAD, 0), int(ys.max()) + 1
    if name not in FLAT_BOTTOM:
        bottom = min(bottom + PAD, img.height)
    half = max(face_x - xs.min(), xs.max() + 1 - face_x) + PAD
    left, right = round(face_x - half), round(face_x + half)

    canvas = Image.new("RGBA", (right - left, bottom - top), (0, 0, 0, 0))
    canvas.paste(img.crop((max(left, 0), top, min(right, img.width), bottom)), (max(-left, 0), 0))

    out = OUT / f"{name}.png"
    canvas.save(out, optimize=True)
    return out


def main() -> None:
    src_dir = Path(sys.argv[1] if len(sys.argv) > 1 else os.environ.get("NARRA_WALK_SRC", ""))
    if not src_dir.is_dir():
        sys.exit("Kaynak klasör verin: scripts/cutout_mascot.py <klasör> (ya da NARRA_WALK_SRC)")
    OUT.mkdir(parents=True, exist_ok=True)
    for name in FACES:
        src = src_dir / f"{name}.png"
        if not src.exists():
            print(f"atlandı (kaynak yok): {name}")
            continue
        out = prepare(name, src)
        with Image.open(out) as done:
            print(f"{name}: {done.width}x{done.height}  {out.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
