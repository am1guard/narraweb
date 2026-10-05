#!/usr/bin/env python3
"""Amiri (Arapça/Farsça başlık yazısı) için küçük bir alt küme üretir.

@fontsource/amiri'nin Arapça dosyası ~100 KB; sitenin ar/fa başlıklarında geçen harfler
ve temel Arapça/Farsça harf kümesiyle ~40 KB'a iner (mobil LCP için). Çıktı:
public/fonts/amiri-arabic-700-subset.woff2. prepare-assets.mjs bu dosya varsa onu kullanır.

Gerekli: fonttools ve brotli (pip install fonttools brotli).
Yeni ar/fa metni eklenince yeniden çalıştırın: python3 scripts/subset_amiri.py
"""
from __future__ import annotations

import json
from pathlib import Path

from fontTools import subset

SITE = Path(__file__).resolve().parent.parent
SRC = SITE / "node_modules/@fontsource/amiri/files/amiri-arabic-700-normal.woff2"
OUT = SITE / "public/fonts/amiri-arabic-700-subset.woff2"


def characters() -> str:
    text = (SITE / "src/i18n/ar.ts").read_text("utf-8") + (SITE / "src/i18n/fa.ts").read_text("utf-8")
    strings = json.loads((SITE / "src/i18n/app-strings.json").read_text("utf-8"))
    text += json.dumps(strings["ar"], ensure_ascii=False) + json.dumps(strings["fa"], ensure_ascii=False)
    used = {c for c in text if "؀" <= c <= "ۿ" or "ݐ" <= c <= "ݿ" or c in "‌‍‎‏"}
    core = [*range(0x0621, 0x063B), *range(0x0640, 0x0656), *range(0x0660, 0x066A), *range(0x06F0, 0x06FA),
            0x060C, 0x061B, 0x061F, 0x067E, 0x0686, 0x0698, 0x06A9, 0x06AF, 0x06CC, 0x06C0, 0x0670]
    return "".join(sorted(used | {chr(c) for c in core}))


def main() -> None:
    options = subset.Options()
    options.flavor = "woff2"
    options.layout_features = ["ccmp", "locl", "isol", "init", "medi", "fina", "rlig", "liga", "calt", "mark", "mkmk", "kern", "curs"]
    font = subset.load_font(str(SRC), options)
    subsetter = subset.Subsetter(options)
    subsetter.populate(text=characters())
    subsetter.subset(font)
    subset.save_font(font, str(OUT), options)
    print(f"{OUT.relative_to(SITE)}: {OUT.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
