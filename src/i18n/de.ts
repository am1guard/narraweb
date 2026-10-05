import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra: ein Player für Ren'Py-Visual-Novels auf iPhone und iPad",
    homeDescription:
      "Narra spielt die Ren'Py-Visual-Novels, die du schon hast, auf iPhone und iPad. Dreizehn eingebaute Engine-Versionen, eine Spielstand-Verwaltung mit iCloud-Synchronisierung, Mods, eine Galerie und eine kleine Begleiterin namens Narra. Einmal kaufen, ohne Konto und ohne Tracking.",
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
    compat: "Für Spiele, die mit Ren'Py 7.4 bis 8.6 erstellt wurden. Bis auf eine kurze Beispielgeschichte enthält Narra keine Spiele; die bringst du selbst mit.",
    sceneAlt: "Narra schwebt nachts über einer schlafenden Stadt und liest in einem leuchtenden Buch",
  },
  chapters: {
    arrive: {
      title: "Bring deine eigenen Geschichten mit",
      say: "Ich verkaufe keine Spiele. Bring die mit, die du schon hast, und ich sorge dafür, dass sie sich wie zu Hause fühlen. Noch nichts zum Spielen da? Ich habe eine kleine Geschichte von mir mitgebracht.",
      lead: "Füge ein Ren'Py-Spiel aus der Dateien-App als Ordner oder als ZIP-, RAR- oder 7z-Archiv hinzu, auch wenn es in mehrere Teile aufgeteilt ist. Passwortgeschützte RAR- und 7z-Archive funktionieren, ebenso Ren'Py-Spiele, die für Android verpackt wurden (APK).",
      pathLabel: "Oder leg ein Spiel hier ab, und Narra findet es von selbst:",
      path: ["Dateien", "Auf meinem iPhone", "Narra", "Games"],
      items: [
        { t: "Eine erste Geschichte zum Ausprobieren", d: "Narra bringt eine kurze Beispielgeschichte mit, damit du alles ausprobieren kannst, bevor du deine eigenen Spiele hinzufügst." },
        { t: "Sammlungen, Suche und Status", d: "Ordne Spiele ganz nach deiner Art und zieh sie an ihren Platz. Finde jedes davon über seinen Namen, über deine Favoriten oder über das, was du gerade spielst." },
        { t: "Updates, die deine Spielstände behalten", d: "Füge eine neuere Version eines Spiels hinzu oder wähle in seinen Einstellungen „Spiel aktualisieren“. Deine Spielstände bleiben, wo sie sind." },
        { t: "Cover, für dich gefunden", d: "Narra nimmt ein Cover aus den Bildern des Spiels. Du kannst jederzeit ein eigenes wählen." },
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
        { t: "Bildschirmfotos", d: "Halte eine Szene fest, die dir gefällt. Jedes Spiel hat in seinen Einstellungen eine eigene Galerie mit Bildschirmfotos, und die Bilder findest du auch in der Dateien-App." },
      ],
    },
    controls: {
      title: "Spiel, wie du willst",
      say: "Auf dem Sofa, im Zug, am Schreibtisch. Bring ruhig einen Controller mit. Mich stört das nicht.",
      lead: "Narra passt sich daran an, wie du dein Gerät hältst, womit du spielst und wie du am liebsten loslegst.",
      widgetLabel: "Das Widget „Zuletzt gespielt“ auf dem Home-Bildschirm",
      items: [
        { t: "Controller und Tastaturen", d: "Verbinde einen Gamecontroller und leg fest, was jede Taste tut, oder nutze eine Tastatur mit den üblichen Ren'Py-Tasten und Kurzbefehlen für Narras Werkzeuge." },
        { t: "Hochformat auf dem iPhone", d: "Halte dein iPhone aufrecht und lies weiter, oder lass das Spiel sich mit dir drehen." },
        { t: "Eine eigene Tastatur", d: "Wenn ein Spiel dich bittet, einen Namen einzugeben, bringt Narra eine Tastatur mit, die zum Spiel passt." },
        { t: "Direkt vom Home-Bildschirm", d: "Halte das Narra-Symbol gedrückt, um weiterzuspielen, starte ein Spiel mit Siri oder über die Kurzbefehle-App, oder füge das Widget „Zuletzt gespielt“ hinzu." },
      ],
    },
    saves: {
      title: "Spielstände, auf die du dich verlassen kannst",
      say: "Bevor ich etwas ändere oder lösche, mache ich eine Sicherheitskopie. Alte Gewohnheit.",
      lead: "Jedes Spiel hat seine eigene Spielstand-Verwaltung. Sieh jeden Spielstand mit seinem Bildschirmfoto, sichere, exportiere oder stelle sie wieder her, oder fang von vorn an.",
      cardsLabel: "Speicherplätze in der Spielstand-Verwaltung, mit iCloud synchronisiert",
      items: [
        { t: "iCloud-Synchronisierung, auch beim Spielen", d: "Spielstände wandern über deine eigene iCloud zwischen iPhone und iPad. Narra lädt Änderungen hoch, während du spielst, und noch einmal, wenn du zu einer anderen App wechselst." },
        { t: "Sicherungen", d: "Sichere ein Spiel oder alle auf einmal, und Narra legt bei jedem Spielstart eine frische Kopie an. Die ZIP-Archive findest du in der Dateien-App." },
        { t: "Importieren und exportieren", d: "Hol Spielstände von einem Computer oder einem anderen Gerät. Ist ein Platz schon belegt, entscheidest du: beide behalten, ersetzen oder überspringen." },
        { t: "Sicherheitskopien", d: "Wiederherstellen, Löschen oder Zurücksetzen erstellt immer zuerst eine Sicherheitskopie, damit ein falscher Tipp nicht das Ende ist." },
      ],
    },
    extras: {
      title: "Mods, eine Galerie und ein paar Geheimnisse",
      say: "Manches davon ist für Neugierige. Ich verrate es niemandem.",
      lead: "Für die Tage, an denen du ein bisschen weiter gehen willst.",
      stackLabel: "Mods liegen als Ebenen über dem Spiel",
      stackGame: "Spieldateien",
      stackMod: "Mod {n}",
      stackNote: "Wenn zwei Mods dieselbe Datei ändern, setzt sich der durch, der in der Liste weiter oben steht.",
      items: [
        { t: "Mod-Verwaltung", d: "Füge Mods als Ordner oder ZIP-Dateien hinzu, bring sie in eine Reihenfolge und schalte sie ein oder aus. Globale Mods gelten für alle Ren'Py-Spiele, und wenn etwas nicht stimmt, kannst du ein Spiel einmal ohne Mods starten." },
        { t: "Galerie", d: "Stöbere durch die Bilder, Musik und Videos in den .rpa-Archiven eines Spiels." },
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
      lock: "Soll ein Spiel privat bleiben? Sperre es mit Face ID, Touch ID oder deinem Gerätecode, und sein Cover bleibt in deiner Bibliothek unscharf.",
      privacyLink: "Datenschutzrichtlinie lesen",
    },
  },
  more: {
    label: "Register",
    title: "Und noch ein paar Dinge",
    items: [
      "Bibliothek nach unten ziehen, um neue Spiele zu finden",
      "Textgröße, Kontur und Schrift beim Spielen",
      "Scrollen mit zwei Fingern und ein Scrollrad auf dem Bildschirm",
      "Ein Spielstand-Inspektor für Neugierige",
      "Spielzeit für jedes Spiel",
      "Die eigene Galerie eines Spiels freischalten",
      "Eine Speicherverwaltung",
      "Fehlerberichte mit Protokollen, wenn ein Spiel abstürzt",
      "Helles und dunkles Erscheinungsbild",
      "Ton, der nach einem Anruf oder Wecker zurückkommt",
    ],
  },
  screens: {
    sampleNote: "Beispielbibliothek. Die Spieltitel sind erfunden.",
  },
  epilogue: {
    label: "Epilog",
    title: "Einmal kaufen, alles gehört dir",
    lead: "Du kaufst Narra einmal, und alles gehört dir. Narra wird von einem einzigen Entwickler gemacht, Emir Han Temur. Wenn du mehr geben möchtest, schaltet das optionale Unterstützer-Abo die animierten Designs frei, und Trinkgelder unterstützen die Entwicklung.",
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
      "Kurz gesagt: Narra erhebt keine Daten. Es gibt keine Konten, keine Werbung und keine Analyse, und die App geht nur für iCloud (deine eigenen Spielstände), App-Store-Käufe und Links, die du selbst öffnest, online.",
    ],
    sections: [
      {
        h: "Was auf deinem Gerät bleibt",
        p: [
          "Die Spiele, die du importierst, ihre Cover, deine Spielstände, Einstellungen, Spielzeit, Bildschirmfotos, Schriften und Mods werden in Narra auf deinem Gerät gespeichert. Sie werden nicht an mich gesendet, und ich kann sie nicht sehen.",
          "Das Widget „Zuletzt gespielt“, die Kurzbefehle auf dem Home-Bildschirm und Siri lesen deine Bibliothek auf dem Gerät. Wenn du ein Spiel mit Face ID oder Touch ID sperrst, übernimmt dein Gerät die Prüfung; Narra sieht deine biometrischen Daten nie.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "Wenn die iCloud-Synchronisierung aktiv ist (standardmäßig ist sie das), kopiert Narra deine Spielstände in dein eigenes iCloud Drive, während du spielst und danach, damit sie zwischen deinen Geräten wandern können. Die Spiele selbst werden nicht hochgeladen. Diese Daten liegen in deinem iCloud-Account, unter der Kontrolle von Apple und gemäß Apples Datenschutzrichtlinie; ich habe keinen Zugriff darauf.",
          "Du kannst die Synchronisierung jederzeit in den Einstellungen von Narra unter „Spielstände & iCloud“ ausschalten. Das Ausschalten löscht nichts, was bereits in iCloud liegt.",
        ],
      },
      {
        h: "Internetverbindungen",
        p: [
          "Narra verbindet sich nur mit dem Internet, um deine Spielstände mit iCloud zu synchronisieren, App-Store-Käufe abzuwickeln und Links zu öffnen, die du antippst, etwa Discord. Nichts aus deinen Spielen, auch nicht ihr Text, wird irgendwohin gesendet.",
        ],
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
          "playnarra.app ist eine statische Website, die über Cloudflare ausgeliefert wird. Sie verwendet keine Cookies, keine Analyse und keine Schriften oder Skripte von Drittanbietern. Wenn du das Design wechselst, wird deine Wahl im lokalen Speicher deines Browsers gesichert und verlässt dein Gerät nie.",
          "Um die Website auszuliefern und vor Missbrauch zu schützen, verarbeitet Cloudflare technische Verbindungsdaten wie IP-Adressen gemäß seiner eigenen Datenschutzrichtlinie.",
        ],
        link: { text: "Datenschutzrichtlinie von Cloudflare", href: "https://www.cloudflare.com/privacypolicy/" },
      },
      {
        h: "Kinder",
        p: [
          "Narra erhebt von niemandem personenbezogene Daten, auch nicht von Kindern. Bis auf eine eigene kurze Beispielgeschichte enthält Narra keine Spiele; welche Inhalte du importierst und ob sie für dein Alter geeignet sind, liegt bei dir.",
        ],
      },
      {
        h: "Deine Wahlmöglichkeiten",
        p: [
          "Da ich deine Daten nicht habe, gibt es für mich nichts herauszugeben oder zu löschen. Wenn du Narra löschst, wird alles entfernt, was die App auf deinem Gerät gespeichert hat. Spielstände in iCloud kannst du in den iCloud-Einstellungen deines Geräts verwalten. Die iCloud-Synchronisierung lässt sich jederzeit ausschalten.",
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
          "Bis auf eine eigene kurze Beispielgeschichte stellt Narra keine Spiele oder sonstigen Inhalte bereit, verkauft sie nicht und verbreitet sie nicht. Du bist für die Spiele, Mods, Schriften und Dateien verantwortlich, die du importierst, und dafür, dass du das Recht hast, sie zu verwenden.",
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
      { q: "Enthält Narra Spiele?", a: "Nur eine eigene kurze Beispielgeschichte. Narra verkauft keine Spiele und lädt keine herunter; die App spielt Ren'Py-Spiele, die du schon hast, etwa die PC- oder Mac-Versionen, die du von ihren Entwicklern bekommen hast." },
      { q: "Was kostet Narra?", a: "Narra ist ein einmaliger Kauf; den Preis für deine Region zeigt der App Store. Das optionale Unterstützer-Abo schaltet die animierten Hintergrund-Designs frei. Trinkgelder schalten nichts frei, sie sind einfach Unterstützung." },
      { q: "Werden meine Spielstände zwischen Geräten synchronisiert?", a: "Ja, über deine eigene iCloud, sogar während du spielst. Schalte das in den Einstellungen von Narra unter „Spielstände & iCloud“ ein oder aus. Der Entwickler kann deine iCloud-Daten nicht sehen." },
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
