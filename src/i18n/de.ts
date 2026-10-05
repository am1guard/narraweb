import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra: ein Player für Ren'Py-Visual-Novels auf iPhone und iPad",
    homeDescription:
      "Narra spielt die Ren'Py-Visual-Novels, die du schon hast, auf iPhone und iPad. Dreizehn eingebaute Engine-Versionen, eine Spielstand-Verwaltung mit iCloud-Synchronisierung, Mods, eine Galerie und eine kleine Begleiterin namens Narra. Kostenlos, ohne Konto und ohne Tracking.",
    privacyTitle: "Datenschutzrichtlinie",
    privacyDescription:
      "Was Narra mit deinen Daten macht: kein Konto, keine Werbung, keine Analyse. Deine Spiele und Spielstände bleiben auf deinem Gerät und in deiner eigenen iCloud.",
    supportTitle: "Hilfe & Support",
    supportDescription:
      "Antworten auf häufige Fragen zu Narra, wie du ein Problem meldest und wie du den Entwickler per E-Mail oder auf Discord erreichst.",
    termsTitle: "Nutzungsbedingungen",
    termsDescription:
      "Die Bedingungen für die Nutzung von Narra: Apples Standard-Lizenzvertrag und ein paar Hinweise zu den Inhalten, die du mitbringst, und zu Käufen.",
    notFoundTitle: "Seite nicht gefunden",
    ogAlt: "Narra, eine kleine leuchtende Begleiterin, schaut neben dem Namen der App vom Rand herein",
  },
  nav: {
    skip: "Zum Inhalt springen",
    home: "Narra Startseite",
    support: "Support",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    language: "Sprache",
    toLight: "Zum hellen Design wechseln",
    toDark: "Zum dunklen Design wechseln",
    contents: "Inhalt",
  },
  langSuggest: {
    message: "Diese Seite gibt es auch auf Deutsch.",
    action: "Auf Deutsch lesen",
    dismiss: "Schließen",
  },
  cta: {
    appStore: "Laden im App Store",
    comingSoon: "Bald im App Store",
    discord: "Auf Discord mitverfolgen",
  },
  hero: {
    eyebrow: "Visual-Novel-Player für iPhone und iPad",
    dialogueLabel: "Narra stellt sich vor",
    lines: [
      "Oh, hallo. Ich bin Narra.",
      "Bring deine Spiele mit. Um den Rest kümmere ich mich.",
      "Ordner, ZIP-Dateien, Spielstände, sogar die passende Ren'Py-Version für jedes Spiel. Ich behalte alles im Blick.",
      "Scroll runter, wenn du so weit bist. Dann erzähle ich dir die ganze Geschichte.",
    ],
    next: "Nächste Zeile",
    begin: "Die Geschichte beginnen",
    compat: "Für Spiele, die mit Ren'Py 7.4 bis 8.6 erstellt wurden. Narra enthält keine Spiele; die bringst du selbst mit.",
    sceneAlt: "Narra schwebt nachts über einer schlafenden Stadt und liest in einem leuchtenden Buch",
  },
  chapters: {
    arrive: {
      title: "Bring deine eigenen Geschichten mit",
      say: "Ich verkaufe keine Spiele und habe auch keine dabei. Du bringst die mit, die du schon hast, und ich sorge dafür, dass sie sich wie zu Hause fühlen.",
      lead: "Füge ein Ren'Py-Spiel aus der Dateien-App als Ordner oder ZIP-Archiv hinzu. Wähle mehrere auf einmal, und Narra fügt sie nacheinander hinzu.",
      pathLabel: "Oder leg ein Spiel hier ab, und Narra findet es von selbst:",
      path: ["Dateien", "Auf meinem iPhone", "Narra", "Games"],
      items: [
        { t: "Cover, für dich gefunden", d: "Narra nimmt ein Cover aus den Bildern des Spiels. Du kannst jederzeit ein eigenes wählen." },
        { t: "Sammlungen", d: "Ordne Spiele nach Reihe, nach Stimmung oder ganz, wie du magst. Halte ein Spiel gedrückt und zieh es an seinen Platz." },
        { t: "Suche, Filter, Status", d: "Finde ein Spiel über seinen Namen, zeig nur deine Favoriten an und markiere, was du gerade spielst, abgeschlossen hast oder dir für später aufhebst." },
        { t: "Updates, die deine Spielstände behalten", d: "Füge eine neuere Version eines Spiels hinzu, das du schon hast, und Narra bietet an, es zu aktualisieren. Deine Spielstände bleiben, wo sie sind." },
        { t: "Zum Aktualisieren ziehen", d: "Du hast ein Spiel in den Ordner „Games“ kopiert, während Narra offen war? Zieh deine Bibliothek nach unten, und Narra schaut noch einmal nach." },
      ],
    },
    engine: {
      title: "Die passende Engine für jedes Spiel",
      say: "Jedes Spiel wurde mit einem ganz bestimmten Ren'Py gemacht. Ich habe dreizehn davon dabei, damit jedes Spiel genau das bekommt, das es erwartet.",
      lead: "Narra enthält Ren'Py von 7.4.11 bis 8.6. Die App liest jedes Spiel, wählt die passende Engine von selbst und braucht den renpy-Ordner des Spiels nicht. Wenn du es besser weißt, ändere sie auf der Seite des Spiels.",
      timelineLabel: "In Narra enthaltene Ren'Py-Versionen",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "Vorabversion",
      items: [
        { t: "Eine Zeitleiste der Engines", d: "Sieh alle enthaltenen Versionen der Reihe nach, mit welcher das Spiel gemacht wurde und welche Narra gewählt hat." },
        { t: "Bildschirmvarianten", d: "Sag einem Spiel, dass es auf einem Telefon, einem Tablet, einem Computer oder einem Fernseher läuft, und es kann zu dem Layout wechseln, das dafür gemacht ist." },
        { t: "Einstellungen für ein einzelnes Spiel", d: "Textgeschwindigkeit, Schriften, Ausrichtung und mehr können deinen allgemeinen Einstellungen folgen oder nur für ein Spiel gelten." },
        { t: "Deine eigenen Schriften", d: "Füge Schriften für alle Spiele hinzu oder nur für eines." },
      ],
    },
    helper: {
      title: "Eine Freundin am Bildschirmrand",
      say: "Während du liest, halte ich mich am Bildschirmrand fest und bin still. Meistens.",
      lead: "Narra wartet am Rand des Spiels, ohne im Weg zu sein. Der Bogen um sie herum füllt sich, während du die Geschichte liest. Tippe sie an, um das Menü zu öffnen, oder zieh sie an einen anderen Rand.",
      bubblesLabel: "Was Narra sagen könnte",
      bubblesNote: "Ihre Vorschläge sind optional. Schalte sie aus, und Narra bleibt für sich.",
      barLabel: "Die kompakte Leiste",
      bar: { rewind: "Zurückspulen", skip: "Überspringen", hide: "Textfeld ausblenden", keyboard: "Tastatur" },
      items: [
        { t: "Eine kompakte Leiste nach deinem Geschmack", d: "Zurückspulen, überspringen, das Textfeld ausblenden oder die Tastatur öffnen, alles über eine kleine Leiste. Verschiebe sie, ändere Größe und Deckkraft und wähle bis zu fünf Tasten." },
        { t: "Pausenbildschirm", d: "Wie weit du gelesen hast, wie lange du gespielt hast, schnelle Einstellungen und alle Werkzeuge an einem Ort." },
        { t: "Schnellspeichern und -laden", d: "Einmal tippen, und Narra sagt dir, dass es geklappt hat." },
        { t: "Bildschirmfotos", d: "Halte eine Szene fest, die dir gefällt. Bildschirmfotos landen im Ordner „Screenshots“ der Dateien-App." },
      ],
    },
    controls: {
      title: "Spiel, wie du willst",
      say: "Auf dem Sofa, im Zug, am Schreibtisch. Bring ruhig einen Controller mit. Mich stört das nicht.",
      lead: "Narra passt sich daran an, wie du dein Gerät hältst und womit du spielst.",
      items: [
        { t: "Gamecontroller", d: "Verbinde einen Controller und belege seine Tasten so, wie du willst." },
        { t: "Tastaturkurzbefehle", d: "Mit einer Tastatur funktionieren die üblichen Ren'Py-Tasten, dazu Kurzbefehle für Narras eigene Werkzeuge." },
        { t: "Hochformat auf dem iPhone", d: "Halte dein iPhone aufrecht und lies weiter, oder lass das Spiel sich mit dir drehen." },
        { t: "Eine eigene Tastatur", d: "Wenn ein Spiel dich bittet, einen Namen einzugeben, bringt Narra eine Tastatur mit, die zum Spiel passt." },
        { t: "Mit zwei Fingern scrollen", d: "Scrolle mit zwei Fingern durch den Textverlauf, oder leg ein kleines Scrollrad auf den Bildschirm." },
      ],
    },
    saves: {
      title: "Spielstände, auf die du dich verlassen kannst",
      say: "Bevor ich etwas ändere oder lösche, mache ich eine Sicherheitskopie. Alte Gewohnheit.",
      lead: "Jedes Spiel hat seine eigene Spielstand-Verwaltung. Sieh jeden Spielstand mit seinem Bildschirmfoto, sichere, exportiere oder stelle sie wieder her, oder fang von vorn an.",
      items: [
        { t: "iCloud-Synchronisierung", d: "Spielstände wandern über deine eigene iCloud zwischen iPhone und iPad und werden hochgeladen, sobald du mit dem Spielen fertig bist." },
        { t: "Sicherungen", d: "Sichere ein Spiel oder alle auf einmal. Die ZIP-Archive erscheinen in der Dateien-App unter Narra." },
        { t: "Importieren und exportieren", d: "Hol Spielstände von einem Computer oder einem anderen Gerät. Ist ein Platz schon belegt, entscheidest du: beide behalten, ersetzen oder überspringen." },
        { t: "Sicherheitskopien", d: "Wiederherstellen, Löschen oder Zurücksetzen erstellt immer zuerst eine Sicherheitskopie, damit ein falscher Tipp nicht das Ende ist." },
        { t: "Spielstand-Inspektor", d: "Neugierig, was in einem Spielstand steckt? Öffne ihn und sieh dir Daten, Text und Bildschirmfoto an." },
      ],
    },
    extras: {
      title: "Mods, eine Galerie und ein paar Geheimnisse",
      say: "Manches davon ist für Neugierige. Ich verrate es niemandem.",
      lead: "Für die Tage, an denen du ein bisschen weiter gehen willst.",
      items: [
        { t: "Mod-Verwaltung", d: "Füge Mods als Ordner oder ZIP-Dateien hinzu, bring sie in eine Reihenfolge und schalte sie ein oder aus. Globale Mods gelten für alle Ren'Py-Spiele, und wenn etwas nicht stimmt, kannst du ein Spiel einmal ohne Mods starten." },
        { t: "Galerie", d: "Stöbere durch die Bilder, Musik und Videos in den .rpa-Archiven eines Spiels." },
        { t: "Übersetzung im Spiel", d: "Optional. Übersetze den Text eines Spiels, während du spielst. Wenn sie aktiv ist, wird der zu übersetzende Text an Google Übersetzer gesendet." },
        { t: "Cheat-Menü (Beta)", d: "Ein Cheat-Menü und ein paar praktische Werkzeuge wie Zurückspulen, eine FPS-Anzeige und eine Galerie-Freischaltung." },
      ],
    },
    world: {
      title: "Siebzehn Sprachen, kein Tracking",
      say: "Ich spreche siebzehn Sprachen. Ich plaudere gern, aber ich mache mir keine Notizen über dich.",
      lead: "Narra folgt der Sprache deines Geräts. Um nur für Narra eine andere zu wählen, öffne die Einstellungen-App und gehe zu Apps > Narra > Sprache.",
      languagesLabel: "Narra spricht",
      promises: ["Kein Konto.", "Keine Werbung.", "Keine Analyse, kein Tracking."],
      promisesNote: "Deine Spiele und Spielstände bleiben auf deinem Gerät und in deiner eigenen iCloud.",
      privacyLink: "Datenschutzrichtlinie lesen",
    },
  },
  epilogue: {
    label: "Epilog",
    title: "Kostenlos, von der ersten bis zur letzten Seite",
    lead: "Jede Funktion in Narra ist kostenlos. Narra wird von einem einzigen Entwickler gemacht, Emir Han Temur. Wenn du helfen möchtest, dass die App wächst, gibt es zwei Wege.",
    supporterTitle: "Unterstützer-Abo",
    supporter: "Monatlich oder jährlich. Es schaltet die animierten Hintergrund-Designs frei, und sonst nichts.",
    tipsTitle: "Trinkgeld",
    tips: "Ein einmaliges Dankeschön. Trinkgeld schaltet nichts frei, bedeutet aber viel.",
    say: "Das ist meine Geschichte bis hierhin. Jetzt kommt deine.",
    choices: "Und jetzt?",
    faq: "Fragen und Antworten lesen",
  },
  footer: {
    madeBy: "Gemacht von Emir Han Temur.",
    independent: "Narra ist eine unabhängige App und weder mit dem Ren'Py-Projekt verbunden noch von ihm unterstützt.",
    trademarks: "Apple, iPhone, iPad, iCloud und App Store sind Marken von Apple Inc.",
    email: "E-Mail",
  },
  legal: {
    effective: "Gültig ab {date}",
    translationNote: "Dies ist eine Übersetzung. Bei Abweichungen von der englischen Fassung gilt die englische Fassung.",
  },
  privacy: {
    intro: [
      "Narra ist eine App zum Spielen von Ren'Py-Visual-Novels auf iPhone und iPad. Sie wird von Emir Han Temur entwickelt, einem unabhängigen Entwickler (im Folgenden „ich“). Diese Richtlinie erklärt, was mit deinen Daten passiert, wenn du die Narra-App und die Website playnarra.app nutzt.",
      "Kurz gesagt: Narra hat keine Konten, keine Werbung und keine Analyse, und ich erhebe keine personenbezogenen Daten von dir.",
    ],
    sections: [
      {
        h: "Was auf deinem Gerät bleibt",
        p: [
          "Die Spiele, die du importierst, ihre Cover, deine Spielstände, Einstellungen, Spielzeit, Bildschirmfotos, Schriften und Mods werden in Narra auf deinem Gerät gespeichert. Sie werden nicht an mich gesendet, und ich kann sie nicht sehen.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "Wenn die iCloud-Synchronisierung aktiv ist (standardmäßig ist sie das), kopiert Narra deine Spielstände in dein eigenes iCloud Drive, damit sie zwischen deinen Geräten wandern können. Die Spiele selbst werden nicht hochgeladen. Diese Daten liegen in deinem iCloud-Account, unter der Kontrolle von Apple und gemäß Apples Datenschutzrichtlinie; ich habe keinen Zugriff darauf.",
          "Du kannst die Synchronisierung jederzeit in den Einstellungen von Narra unter „Spielstände & iCloud“ ausschalten. Das Ausschalten löscht nichts, was bereits in iCloud liegt.",
        ],
      },
      {
        h: "Übersetzung im Spiel (optional)",
        p: [
          "Die Übersetzung ist aus, bis du sie einschaltest. Wenn du sie nutzt, wird der zu übersetzende Spieltext an Google Übersetzer gesendet, und für diesen Text gilt die Datenschutzerklärung von Google. Narra fügt ihm weder deinen Namen noch dein Konto noch irgendeine Kennung hinzu.",
        ],
        link: { text: "Datenschutzerklärung von Google", href: "https://policies.google.com/privacy?hl=de" },
      },
      {
        h: "Fehlerberichte und Support-E-Mails",
        p: [
          "Wenn etwas schiefgeht, kann Narra einen Fehlerbericht vorbereiten, und „Problem melden“ bereitet eine Support-E-Mail vor. Keines von beiden wird automatisch gesendet: Sie werden nur geteilt, wenn du sie selbst verschickst, per E-Mail oder über das Teilen-Menü.",
          "Berichte werden anonymisiert. Dateipfade werden gekürzt, und der Name deines Benutzerordners sowie E-Mail-Adressen werden ausgeblendet. Ein Bericht kann das Gerätemodell, die Systemversion, Sprache und Region, die App-Version, Details zum betroffenen Spiel (seine Version, Ren'Py-Version und Größe) und aktuelle Protokolle enthalten. Er enthält niemals den Inhalt deiner Spielstände.",
          "Was du mir schickst, nutze ich nur, um dir zu antworten und Probleme zu beheben, und ich gebe es an niemanden weiter.",
        ],
      },
      {
        h: "Käufe",
        p: [
          "Unterstützer-Abos und Trinkgelder werden von Apple über den App Store abgewickelt. Ich erhalte weder deinen Namen noch deine E-Mail-Adresse noch deine Zahlungsdaten. Narra fragt Apple nur, ob ein Abo aktiv ist, um die animierten Hintergründe freizuschalten.",
        ],
      },
      {
        h: "Keine Analyse, keine Werbung, kein Tracking",
        p: [
          "Narra enthält keinen Analyse- oder Werbecode. Die App verfolgt dich nicht über Apps oder Websites hinweg und verwendet deine Daten nicht für Werbung.",
        ],
      },
      {
        h: "Diese Website",
        p: [
          "playnarra.app ist eine statische Website, die auf GitHub Pages gehostet wird. Sie verwendet keine Cookies, keine Analyse und keine Schriften oder Skripte von Drittanbietern. Wenn du das Design wechselst, wird deine Wahl im lokalen Speicher deines Browsers gesichert und verlässt dein Gerät nie.",
          "Wie jeder Webhoster kann GitHub technische Daten wie IP-Adressen in seinen Serverprotokollen verarbeiten, um den Dienst sicher zu halten.",
        ],
        link: { text: "Datenschutzerklärung von GitHub", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" },
      },
      {
        h: "Kinder",
        p: [
          "Narra erhebt von niemandem personenbezogene Daten, auch nicht von Kindern. Narra enthält keine Spiele; welche Inhalte du importierst und ob sie für dein Alter geeignet sind, liegt bei dir.",
        ],
      },
      {
        h: "Deine Wahlmöglichkeiten",
        p: [
          "Da ich deine Daten nicht habe, gibt es für mich nichts herauszugeben oder zu löschen. Wenn du Narra löschst, wird alles entfernt, was die App auf deinem Gerät gespeichert hat. Spielstände in iCloud kannst du in den iCloud-Einstellungen deines Geräts verwalten. Übersetzung und iCloud-Synchronisierung lassen sich jederzeit ausschalten.",
        ],
      },
      {
        h: "Änderungen",
        p: [
          "Wenn sich diese Richtlinie ändert, wird die neue Fassung mit einem neuen Gültigkeitsdatum auf dieser Seite veröffentlicht. Wichtige Änderungen werden außerdem in den Versionshinweisen der App erwähnt.",
        ],
      },
      {
        h: "Kontakt",
        p: ["Fragen zum Datenschutz kannst du gern an die Adresse unten schicken."],
      },
    ],
  },
  terms: {
    intro: [
      "Narra wird dir gemäß Apples Standard-Endbenutzer-Lizenzvertrag für lizenzierte Apps (EULA) lizenziert. Die folgenden Hinweise ergänzen ihn; wo sie abweichen, hat Apples EULA Vorrang.",
    ],
    eulaLink: "Apples Standard-EULA",
    sections: [
      {
        h: "Deine Inhalte",
        p: [
          "Narra stellt keine Spiele oder sonstigen Inhalte bereit, verkauft sie nicht und verbreitet sie nicht. Du bist für die Spiele, Mods, Schriften und Dateien verantwortlich, die du importierst, und dafür, dass du das Recht hast, sie zu verwenden.",
        ],
      },
      {
        h: "Spiele von anderen",
        p: [
          "Die Spiele, die du in Narra spielst, gehören ihren Urhebern. Narra steht weder mit ihnen noch mit dem Ren'Py-Projekt in Verbindung und kann nicht versprechen, dass jedes Spiel funktioniert.",
        ],
      },
      {
        h: "Abos und Trinkgelder",
        p: [
          "Käufe werden von Apple abgewickelt. Das Unterstützer-Abo verlängert sich automatisch, sofern es nicht mindestens 24 Stunden vor Ende des aktuellen Zeitraums gekündigt wird; du kannst es in den Einstellungen deines App Store-Accounts verwalten oder kündigen. Trinkgelder sind einmalige Zahlungen und schalten nichts frei.",
        ],
      },
      {
        h: "Übersetzung",
        p: ["Die Übersetzung im Spiel wird von Google Übersetzer bereitgestellt und ist möglicherweise nicht immer genau."],
      },
      {
        h: "Änderungen",
        p: ["Diese Bedingungen können aktualisiert werden. Das Datum oben zeigt die aktuelle Fassung."],
      },
      {
        h: "Kontakt",
        p: ["Fragen zu diesen Bedingungen kannst du gern an die Adresse unten schicken."],
      },
    ],
  },
  support: {
    intro: "Antworten auf häufige Fragen und ein Weg zu einem echten Menschen.",
    contactTitle: "Schreib uns",
    emailNote: "Fehler, Fragen, Ideen: alles willkommen.",
    discordTitle: "Discord",
    discordNote: "Unterhalte dich mit anderen Spielern und verfolge die Entwicklung von Narra.",
    faqTitle: "Fragen und Antworten",
    basicsTitle: "Bevor du loslegst",
    basics: [
      { q: "Enthält Narra Spiele?", a: "Nein. Narra enthält keine Spiele, verkauft keine und lädt keine herunter. Die App spielt Ren'Py-Spiele, die du schon hast, etwa die PC- oder Mac-Versionen, die du von ihren Entwicklern bekommen hast." },
      { q: "Ist Narra kostenlos?", a: "Ja, alle Funktionen sind kostenlos. Das optionale Unterstützer-Abo schaltet nur die animierten Hintergrund-Designs frei, und Trinkgelder schalten nichts frei." },
      { q: "Spielt Narra auch Spiele, die mit anderen Engines gemacht wurden?", a: "Nein. Narra ist nur für Ren'Py-Spiele gemacht." },
      { q: "Werden meine Spielstände zwischen Geräten synchronisiert?", a: "Ja, über deine eigene iCloud. Schalte das in den Einstellungen von Narra unter „Spielstände & iCloud“ ein oder aus. Der Entwickler kann deine iCloud-Daten nicht sehen." },
      { q: "Lädt Narra meine Spiele hoch?", a: "Nein. Spiele bleiben auf deinem Gerät. Nur Spielstände gehen in deine eigene iCloud, wenn die Synchronisierung aktiv ist. Wenn du die Übersetzung im Spiel einschaltest, wird der zu übersetzende Text an Google Übersetzer gesendet." },
    ],
    reportTitle: "Ein Problem melden",
    reportIntro: "Am schnellsten geht es direkt in der App:",
    reportSteps: [
      "Öffne das Menü oben rechts in deiner Bibliothek und wähle „Hilfe & Support“.",
      "Tippe auf „Problem melden“, wähle das Spiel und beschreibe, was passiert ist.",
      "Wenn sich das Spiel kostenlos herunterladen lässt, füge einen Link hinzu, damit es getestet werden kann.",
      "Deine Mail-App öffnet sich mit bereits ausgefüllten Details. Nichts wird gesendet, bevor du auf „Senden“ tippst.",
    ],
    reportCrash: "Wenn ein Spiel abstürzt, zeigt Narra einen Fehlerbildschirm. Nutze dort „Teilen“ oder „Problem melden“, um den Bericht mit seinen Protokollen zu senden.",
  },
  notFound: {
    title: "Diese Seite hat sich verlaufen",
    say: "Ich habe überall gesucht, sogar hinter dem Mond. Diese Seite ist nicht hier.",
    back: "Zurück zum Anfang",
  },
} satisfies Dict;
