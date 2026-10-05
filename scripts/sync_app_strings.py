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

# SSS bölümleri ve sırası uygulamanın HelpContent.swift dosyasından okunur. Uygulama
# ekranına göre yazılmış ("aşağıdaki düğme") maddeler alınmaz.
FAQ_EXCLUDE = {"report"}


def faq_layout() -> dict[str, list[str]]:
    source = (APP / "Narra" / "Help" / "HelpContent.swift").read_text(encoding="utf-8")
    block = source[source.index("static let sections"):]
    layout: dict[str, list[str]] = {}
    current = None
    for line in block.splitlines():
        section = re.search(r'HelpFAQSection\(id: "(\w+)"', line)
        item = re.search(r'HelpFAQItem\(id: "(\w+)"', line)
        if section:
            current = section.group(1)
            layout[current] = []
        elif item and current and item.group(1) not in FAQ_EXCLUDE:
            layout[current].append(item.group(1))
        elif line.strip() == "]" and layout:
            break
    return layout


FAQ = faq_layout()

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
    "sample.title",
    "update.title",
    "saves.group.page %lld",
    "saves.slot.number %lld",
    "saves.group.quick",
    "settings.category.cloud",
    "help.contact.report",
    "help.title",
]

LINE = re.compile(r'^"((?:[^"\\]|\\.)*)"\s*=\s*"((?:[^"\\]|\\.)*)";\s*$')


def unescape(value: str) -> str:
    return (value.replace('\\"', '"').replace("\\n", "\n").replace("\\\\", "\\"))


# Ana ekran widget'ının metinleri ayrı bir hedefte durur.
WIDGET_KEYS = ["widget.recent.title", "widget.continue"]


def load(lang: str) -> dict[str, str]:
    table: dict[str, str] = {}
    for target in ("Narra", "NarraWidget"):
        path = APP / target / f"{lang}.lproj" / "Localizable.strings"
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
            "strings": {key: get(key) for key in EXTRA_KEYS + WIDGET_KEYS},
        }
    OUT.write_text(json.dumps(result, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"{OUT.relative_to(SITE)}: {len(LANGS)} dil")


if __name__ == "__main__":
    main()
