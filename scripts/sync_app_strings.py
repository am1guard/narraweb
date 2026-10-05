#!/usr/bin/env python3
"""Narra uygulamasının Localizable.strings dosyalarından sitenin kullandığı
metinleri src/i18n/app-strings.json dosyasına çeker.

Site ayrı bir depodur; uygulama deposunun yolu NARRA_APP_DIR ile verilir
(varsayılan: bu klasörün bir üstü, yani narraweb uygulama deposunun içindeyken).
Çıktı depoya işlenir; CI bu betiği çalıştırmaz.

Kullanım: python3 scripts/sync_app_strings.py
"""
from __future__ import annotations

import json
import os
import re
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
APP = Path(os.environ.get("NARRA_APP_DIR", SITE.parent))
OUT = SITE / "src" / "i18n" / "app-strings.json"

LANGS = ["en", "tr", "es", "fr", "de", "it", "pt", "cs", "fa", "ru",
         "ja", "ko", "zh-Hans", "zh-Hant", "ar", "vi", "la"]

# Uygulamadaki SSS bölümleri ve sitede gösterilen sorular (HelpContent.swift sırası).
# Uygulama ekranına göre yazılmış ("aşağıdaki düğme") ya da sitenin kendi
# sorularıyla çakışan maddeler bilerek alınmaz: whereSaves, privacy, report.
FAQ = {
    "adding": ["addGame", "getOnDevice", "whatIsRenPy", "formats", "duplicate"],
    "library": ["covers", "collections", "findGames", "favoritesStatus"],
    "saves": ["backup", "storage", "deleteApp"],
    "playing": ["engine", "compatibility"],
    "app": ["language", "appearance"],
    "troubleshooting": ["notRenPy", "unreadable", "space"],
}

EXTRA_KEYS = [
    "help.about.tagline",
    "engine.speech.choice",
    "engine.speech.mainMenuResume",
    "engine.speech.saveReminder",
    "engine.speech.justLoaded",
    "engine.helper.saved",
    "engine.speech.more",
    "engine.hud.quickSave",
    "engine.hud.rollback",
    "settings.category.cloud",
    "help.contact.report",
    "help.title",
]

LINE = re.compile(r'^"((?:[^"\\]|\\.)*)"\s*=\s*"((?:[^"\\]|\\.)*)";\s*$')


def unescape(value: str) -> str:
    return (value.replace('\\"', '"').replace("\\n", "\n").replace("\\\\", "\\"))


def load(lang: str) -> dict[str, str]:
    path = APP / "Narra" / f"{lang}.lproj" / "Localizable.strings"
    table: dict[str, str] = {}
    for raw in path.read_text(encoding="utf-8").splitlines():
        match = LINE.match(raw.strip())
        if match:
            table[unescape(match.group(1))] = unescape(match.group(2))
    return table


def main() -> None:
    result: dict[str, dict] = {}
    for lang in LANGS:
        table = load(lang)

        def get(key: str) -> str:
            if key not in table:
                raise SystemExit(f"{lang}: eksik anahtar {key}")
            return table[key]

        sections = []
        for section, items in FAQ.items():
            sections.append({
                "id": section,
                "title": get(f"help.faq.section.{section}"),
                "items": [{"id": item, "q": get(f"help.faq.{item}.q"), "a": get(f"help.faq.{item}.a")}
                          for item in items],
            })
        result[lang] = {
            "faq": sections,
            "strings": {key: get(key) for key in EXTRA_KEYS},
        }
    OUT.write_text(json.dumps(result, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"{OUT.relative_to(SITE)}: {len(LANGS)} dil")


if __name__ == "__main__":
    main()
