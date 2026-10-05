import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra: přehrávač vizuálních románů v Ren'Py pro iPhone a iPad",
    homeDescription:
      "Narra na iPhonu a iPadu přehraje vizuální romány v Ren'Py, které už máš. Třináct vestavěných verzí enginu, správce uložených her se synchronizací přes iCloud, módy, galerie a malá průvodkyně jménem Narra. Zdarma, bez účtu a bez sledování.",
    privacyTitle: "Zásady ochrany osobních údajů",
    privacyDescription:
      "Co Narra dělá s tvými údaji: žádný účet, žádné reklamy, žádná analytika. Tvoje hry i uložené hry zůstávají v zařízení a ve tvém vlastním iCloudu.",
    supportTitle: "Nápověda a podpora",
    supportDescription:
      "Odpovědi na časté otázky o Narře, jak nahlásit problém a jak se spojit s vývojářem e-mailem nebo na Discordu.",
    termsTitle: "Podmínky použití",
    termsDescription:
      "Podmínky používání Narry: standardní licenční smlouva Applu a pár poznámek k obsahu, který si přineseš, a k nákupům.",
    notFoundTitle: "Stránka nenalezena",
    ogAlt: "Narra, malá zářící průvodkyně, vykukuje z okraje vedle názvu aplikace",
  },
  nav: {
    skip: "Přejít na obsah",
    home: "Narra – úvodní stránka",
    support: "Podpora",
    privacy: "Soukromí",
    terms: "Podmínky",
    language: "Jazyk",
    toLight: "Přepnout na světlý motiv",
    toDark: "Přepnout na tmavý motiv",
    contents: "Obsah",
  },
  langSuggest: {
    message: "Tato stránka je k dispozici i v češtině.",
    action: "Číst česky",
    dismiss: "Zavřít",
  },
  cta: {
    appStore: "Stáhnout v App Storu",
    comingSoon: "Brzy v App Storu",
    discord: "Sleduj vývoj na Discordu",
  },
  hero: {
    eyebrow: "Přehrávač vizuálních románů pro iPhone a iPad",
    dialogueLabel: "Narra se představuje",
    lines: [
      "Á, ahoj. Já jsem Narra.",
      "Přines svoje hry. O zbytek se postarám.",
      "Složky, soubory ZIP, uložené hry, dokonce i správnou verzi Ren'Py pro každou hru. Všechno mám pod palcem.",
      "Až budeš chtít, sjeď dolů. Povím ti celý příběh.",
    ],
    next: "Další řádek",
    begin: "Začít příběh",
    compat: "Pro hry vytvořené v Ren'Py 7.4 až 8.6. Narra neobsahuje žádné hry; ty si přineseš vlastní.",
    sceneAlt: "Narra se v noci vznáší nad spícím městečkem a čte zářící knihu",
  },
  chapters: {
    arrive: {
      title: "Přines si vlastní příběhy",
      say: "Hry neprodávám a žádné v sobě nemám. Ty přineseš ty, které už máš, a já se postarám, aby se tu cítily jako doma.",
      lead: "Přidej hru v Ren'Py z aplikace Soubory jako složku nebo archiv ZIP. Vyber jich víc najednou a Narra je přidá jednu po druhé.",
      pathLabel: "Nebo hru zkopíruj sem a Narra ji najde sama:",
      path: ["Soubory", "Na mém iPhonu", "Narra", "Games"],
      items: [
        { t: "Obaly najde sama", d: "Narra vezme obal z obrázků samotné hry. Vždycky si můžeš vybrat vlastní." },
        { t: "Kolekce", d: "Seskup hry podle série, podle nálady nebo jakkoli chceš. Podrž hru a přetáhni ji na místo." },
        { t: "Hledání, filtry, stav", d: "Najdi hru podle názvu, zobraz jen oblíbené a označ, co právě hraješ, co máš dohrané a co si necháváš na později." },
        { t: "Aktualizace, které zachovají uložené hry", d: "Přidej novější verzi hry, kterou už máš, a Narra nabídne, že ji aktualizuje. Uložené hry zůstanou, kde jsou." },
        { t: "Obnovení stažením dolů", d: "Dostala se hra do složky Games, zatímco byla Narra otevřená? Stáhni knihovnu dolů a Narra se podívá znovu." },
      ],
    },
    engine: {
      title: "Správný engine pro každou hru",
      say: "Každá hra vznikla v jednom konkrétním Ren'Py. Já jich nosím třináct, takže každá hra dostane přesně ten, který čeká.",
      lead: "Narra obsahuje Ren'Py od verze 7.4.11 po 8.6. Přečte si každou hru, sama vybere odpovídající engine a nepotřebuje k tomu složku renpy dané hry. Pokud víš líp, změň ho na stránce hry.",
      timelineLabel: "Verze Ren'Py obsažené v Narře",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "předběžné sestavení",
      items: [
        { t: "Časová osa enginů", d: "Uvidíš všechny obsažené verze popořadě, ve které hra vznikla a kterou Narra vybrala." },
        { t: "Varianty obrazovky", d: "Řekni hře, že běží na telefonu, tabletu, počítači nebo televizi, a ona může přepnout na rozložení, které je pro ně připravené." },
        { t: "Nastavení pro jednu hru", d: "Rychlost textu, písma, orientace a další mohou řídit tvoje globální nastavení, nebo mohou platit jen pro jednu hru." },
        { t: "Vlastní písma", d: "Přidej písma pro všechny hry, nebo jen pro jednu." },
      ],
    },
    helper: {
      title: "Kamarádka na okraji obrazovky",
      say: "Zatímco čteš, držím se okraje obrazovky a jsem zticha. Většinou.",
      lead: "Narra čeká na kraji hry a nepřekáží. Oblouk kolem ní se plní, jak postupuješ příběhem. Klepni na ni a otevře se nabídka, nebo ji přetáhni k jinému okraji.",
      bubblesLabel: "Co by Narra mohla říct",
      bubblesNote: "Její návrhy jsou volitelné. Když je vypneš, nechá si je pro sebe.",
      barLabel: "Kompaktní lišta",
      bar: { rewind: "Vrátit zpět", skip: "Přeskočit", hide: "Skrýt textové pole", keyboard: "Klávesnice" },
      items: [
        { t: "Kompaktní lišta podle tebe", d: "Vracej se zpět, přeskakuj, skryj textové pole nebo otevři klávesnici z malé lišty. Přesuň ji, změň její velikost a průhlednost a vyber až pět tlačítek." },
        { t: "Obrazovka pozastavení", d: "Kolik máš přečteno, jak dlouho hraješ, rychlá nastavení a všechny nástroje na jednom místě." },
        { t: "Rychlé uložení a načtení", d: "Jedno klepnutí a Narra ti dá vědět, že je hotovo." },
        { t: "Snímky obrazovky", d: "Uchovej si scénu, která se ti líbí. Snímky se ukládají do složky Screenshots v aplikaci Soubory." },
      ],
    },
    controls: {
      title: "Hraj po svém",
      say: "Na gauči, ve vlaku, u stolu. Klidně si vezmi ovladač. Mně to nevadí.",
      lead: "Narra se přizpůsobí tomu, jak zařízení držíš a čím hraješ.",
      items: [
        { t: "Herní ovladače", d: "Připoj ovladač a nastav si jeho tlačítka, jak chceš." },
        { t: "Klávesové zkratky", d: "S klávesnicí fungují obvyklé klávesy Ren'Py a k tomu zkratky pro vlastní nástroje Narry." },
        { t: "Na výšku na iPhonu", d: "Drž iPhone na výšku a čti dál, nebo nech hru otáčet se s tebou." },
        { t: "Vlastní klávesnice", d: "Když po tobě hra chce napsat jméno, Narra přinese klávesnici, která ke hře sedí." },
        { t: "Posouvání dvěma prsty", d: "Posouvej historii textu dvěma prsty, nebo si na obrazovku dej malé rolovací kolečko." },
      ],
    },
    saves: {
      title: "Uložené hry, na které se můžeš spolehnout",
      say: "Než cokoli změním nebo smažu, udělám bezpečnostní zálohu. Starý zvyk.",
      lead: "Každá hra má vlastního správce uložených her. Prohlédni si každou uloženou hru i se snímkem obrazovky, zálohuj je, exportuj, obnov, nebo začni znovu.",
      items: [
        { t: "Synchronizace s iCloudem", d: "Uložené hry putují mezi iPhonem a iPadem přes tvůj vlastní iCloud a nahrají se hned, jak přestaneš hrát." },
        { t: "Zálohy", d: "Zálohuj jednu hru, nebo všechny najednou. Archivy ZIP najdeš v aplikaci Soubory ve složce Narra." },
        { t: "Import a export", d: "Přenes uložené hry z počítače nebo z jiného zařízení. Když je pozice obsazená, rozhodneš ty: ponechat obě, nahradit, nebo přeskočit." },
        { t: "Bezpečnostní zálohy", d: "Obnovení, smazání i reset vždy nejdřív vytvoří bezpečnostní zálohu, takže jedno špatné klepnutí neznamená konec." },
        { t: "Inspektor uložených her", d: "Zajímá tě, co je uvnitř uložené hry? Otevři ji a prohlédni si její data, text a snímek obrazovky." },
      ],
    },
    extras: {
      title: "Módy, galerie a pár tajemství",
      say: "Některé z těch věcí jsou pro zvědavce. Nikomu to neřeknu.",
      lead: "Pro dny, kdy chceš zajít o kousek dál.",
      items: [
        { t: "Správce módů", d: "Přidávej módy jako složky nebo soubory ZIP, seřaď je a zapínej nebo vypínej. Globální módy platí pro všechny hry v Ren'Py, a když něco zlobí, můžeš hru jednou spustit bez módů." },
        { t: "Galerie", d: "Procházej obrázky, hudbu a videa uložené v archivech .rpa dané hry." },
        { t: "Překlad ve hře", d: "Volitelný. Překládej text hry během hraní. Když je zapnutý, text k překladu se odesílá do Překladače Google." },
        { t: "Menu cheatů (beta)", d: "Menu cheatů a pár šikovných nástrojů, třeba návrat zpět, počítadlo FPS a odemčení galerie." },
      ],
    },
    world: {
      title: "Sedmnáct jazyků, žádné sledování",
      say: "Mluvím sedmnácti jazyky. Ráda si popovídám, ale poznámky si o tobě nedělám.",
      lead: "Narra používá jazyk tvého zařízení. Pokud chceš jiný jen pro Narru, otevři aplikaci Nastavení a přejdi do Aplikace > Narra > Jazyk.",
      languagesLabel: "Narra mluví",
      promises: ["Žádný účet.", "Žádné reklamy.", "Žádná analytika, žádné sledování."],
      promisesNote: "Tvoje hry i uložené hry zůstávají v zařízení a ve tvém vlastním iCloudu.",
      privacyLink: "Přečíst zásady ochrany osobních údajů",
    },
  },
  epilogue: {
    label: "Epilog",
    title: "Zdarma, od první stránky po poslední",
    lead: "Všechny funkce Narry jsou zdarma. Narru vytváří jediný vývojář, Emir Han Temur, a pokud chceš pomoct, aby rostla, máš dvě možnosti.",
    supporterTitle: "Předplatné podporovatele",
    supporter: "Měsíční nebo roční. Odemyká animované motivy pozadí, a nic víc.",
    tipsTitle: "Spropitné",
    tips: "Jednorázové poděkování. Spropitné nic neodemyká, ale hodně znamená.",
    say: "To je zatím můj příběh. Teď je na řadě ten tvůj.",
    choices: "Co teď?",
    faq: "Přečíst otázky a odpovědi",
  },
  footer: {
    madeBy: "Vytvořil Emir Han Temur.",
    independent: "Narra je nezávislá aplikace a není nijak spojena s projektem Ren'Py ani jím schválena.",
    trademarks: "Apple, iPhone, iPad, iCloud a App Store jsou ochranné známky společnosti Apple Inc.",
    email: "E-mail",
  },
  legal: {
    effective: "Platné od {date}",
    translationNote: "Toto je překlad. Pokud se od anglické verze liší, platí anglická verze.",
  },
  privacy: {
    intro: [
      "Narra je aplikace pro hraní vizuálních románů v Ren'Py na iPhonu a iPadu. Vytváří ji Emir Han Temur, nezávislý vývojář (níže „já“). Tyto zásady vysvětlují, co se děje s tvými údaji, když používáš aplikaci Narra a web playnarra.app.",
      "Stručně: Narra nemá účty, reklamy ani analytiku a tvoje osobní údaje neshromažďuji.",
    ],
    sections: [
      {
        h: "Co zůstává v tvém zařízení",
        p: [
          "Hry, které importuješ, jejich obaly, tvoje uložené hry, nastavení, doba hraní, snímky obrazovky, písma a módy se ukládají v Narře ve tvém zařízení. Neposílají se mi a nevidím je.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "Pokud je zapnutá synchronizace s iCloudem (ve výchozím stavu je), Narra kopíruje tvoje uložené hry na tvůj vlastní iCloud Drive, aby se mohly přenášet mezi zařízeními. Samotné hry se nenahrávají. Tato data jsou ve tvém účtu iCloud, pod kontrolou společnosti Apple a podle jejích zásad ochrany osobních údajů; já k nim přístup nemám.",
          "Synchronizaci můžeš kdykoli vypnout v Nastavení Narry v části Uložené hry a iCloud. Vypnutím se nesmaže nic, co už na iCloudu je.",
        ],
      },
      {
        h: "Překlad ve hře (volitelný)",
        p: [
          "Překlad je vypnutý, dokud ho nezapneš. Když ho používáš, text hry k překladu se odesílá do Překladače Google a na tento text se vztahují zásady ochrany soukromí společnosti Google. Narra k němu nepřipojuje tvé jméno, účet ani žádný identifikátor.",
        ],
        link: { text: "Zásady ochrany soukromí Google", href: "https://policies.google.com/privacy?hl=cs" },
      },
      {
        h: "Hlášení chyb a e-maily podpoře",
        p: [
          "Když se něco pokazí, Narra umí připravit hlášení o chybě a Nahlásit problém připraví e-mail podpoře. Nic z toho se neodesílá automaticky: sdílí se jen tehdy, když to odešleš ty, e-mailem nebo přes nabídku sdílení.",
          "Hlášení jsou anonymizovaná. Cesty k souborům se zkracují a název tvé uživatelské složky i e-mailové adresy se skrývají. Hlášení může obsahovat model zařízení, verzi systému, jazyk a oblast, verzi aplikace, podrobnosti o dotčené hře (její verzi, verzi Ren'Py a velikost) a nedávné protokoly. Nikdy neobsahuje obsah tvých uložených her.",
          "To, co mi pošleš, používám jen k tomu, abych ti odpověděl a opravil problémy, a s nikým to nesdílím.",
        ],
      },
      {
        h: "Nákupy",
        p: [
          "Předplatné podporovatele a spropitné zpracovává Apple prostřednictvím App Storu. Nedostávám tvé jméno, e-mailovou adresu ani platební údaje. Narra se Applu jen ptá, zda je předplatné aktivní, aby mohla odemknout animovaná pozadí.",
        ],
      },
      {
        h: "Žádná analytika, reklamy ani sledování",
        p: [
          "Narra neobsahuje žádný analytický ani reklamní kód. Nesleduje tě napříč aplikacemi ani weby a nepoužívá tvoje data k reklamě.",
        ],
      },
      {
        h: "Tento web",
        p: [
          "playnarra.app je statický web hostovaný na GitHub Pages. Nepoužívá cookies, analytiku ani písma či skripty třetích stran. Když změníš motiv, tvoje volba se uloží do místního úložiště prohlížeče a nikdy neopustí tvoje zařízení.",
          "Jako každý hosting může GitHub ve svých serverových protokolech zpracovávat technické údaje, například IP adresy, aby udržel službu v bezpečí.",
        ],
        link: { text: "Prohlášení GitHubu o ochraně osobních údajů", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" },
      },
      {
        h: "Děti",
        p: [
          "Narra neshromažďuje osobní údaje od nikoho, ani od dětí. Narra neobsahuje žádné hry; o obsahu, který importuješ, a o tom, zda je vhodný pro tvůj věk, rozhoduješ ty.",
        ],
      },
      {
        h: "Tvoje volby",
        p: [
          "Protože tvoje data nemám, nemám co předat ani smazat. Smazáním Narry odstraníš vše, co uložila ve tvém zařízení. Uložené hry na iCloudu můžeš spravovat v nastavení iCloudu ve svém zařízení. Překlad i synchronizaci s iCloudem můžeš kdykoli vypnout.",
        ],
      },
      {
        h: "Změny",
        p: [
          "Pokud se tyto zásady změní, nová verze bude zveřejněna na této stránce s novým datem účinnosti. Důležité změny budou zmíněny také v poznámkách k vydání aplikace.",
        ],
      },
      {
        h: "Kontakt",
        p: ["S dotazy k ochraně soukromí se klidně obrať na adresu níže."],
      },
    ],
  },
  terms: {
    intro: [
      "Narra je ti licencována podle Standardní licenční smlouvy s koncovým uživatelem pro licencované aplikace společnosti Apple (EULA). Poznámky níže ji doplňují; pokud se od ní liší, má přednost EULA společnosti Apple.",
    ],
    eulaLink: "Standardní EULA společnosti Apple",
    sections: [
      {
        h: "Tvůj obsah",
        p: [
          "Narra neposkytuje, neprodává ani nešíří hry ani žádný jiný obsah. Za hry, módy, písma a soubory, které importuješ, a za to, že máš právo je používat, odpovídáš ty.",
        ],
      },
      {
        h: "Hry od jiných autorů",
        p: [
          "Hry, které v Narře hraješ, patří jejich tvůrcům. Narra s nimi ani s projektem Ren'Py není spojena a nemůže slíbit, že bude fungovat každá hra.",
        ],
      },
      {
        h: "Předplatné a spropitné",
        p: [
          "Nákupy vyřizuje Apple. Předplatné podporovatele se automaticky obnovuje, pokud není zrušeno alespoň 24 hodin před koncem aktuálního období; spravovat nebo zrušit ho můžeš v nastavení svého účtu App Store. Spropitné je jednorázová platba a nic neodemyká.",
        ],
      },
      {
        h: "Překlad",
        p: ["Překlad ve hře zajišťuje Překladač Google a nemusí být vždy přesný."],
      },
      {
        h: "Změny",
        p: ["Tyto podmínky se mohou aktualizovat. Datum nahoře ukazuje aktuální verzi."],
      },
      {
        h: "Kontakt",
        p: ["S dotazy k těmto podmínkám se klidně obrať na adresu níže."],
      },
    ],
  },
  support: {
    intro: "Odpovědi na časté otázky a cesta ke skutečnému člověku.",
    contactTitle: "Napiš nám",
    emailNote: "Chyby, otázky, nápady: všechno vítáme.",
    discordTitle: "Discord",
    discordNote: "Povídej si s ostatními hráči a sleduj vývoj Narry.",
    faqTitle: "Otázky a odpovědi",
    basicsTitle: "Než začneš",
    basics: [
      { q: "Obsahuje Narra nějaké hry?", a: "Ne. Narra hry neobsahuje, neprodává ani nestahuje. Přehrává hry v Ren'Py, které už máš, například verze pro PC nebo Mac od jejich tvůrců." },
      { q: "Je Narra zdarma?", a: "Ano, všechny funkce jsou zdarma. Volitelné předplatné podporovatele odemyká jen animované motivy pozadí a spropitné neodemyká nic." },
      { q: "Přehraje Narra hry vytvořené v jiných enginech?", a: "Ne. Narra je určená jen pro hry v Ren'Py." },
      { q: "Synchronizují se moje uložené hry mezi zařízeními?", a: "Ano, přes tvůj vlastní iCloud. Zapnout nebo vypnout to můžeš v Nastavení Narry v části Uložené hry a iCloud. Vývojář tvoje data na iCloudu nevidí." },
      { q: "Nahrává Narra moje hry někam?", a: "Ne. Hry zůstávají v tvém zařízení. Když je zapnutá synchronizace, na tvůj vlastní iCloud jdou jen uložené hry. Pokud zapneš překlad ve hře, text k překladu se odesílá do Překladače Google." },
    ],
    reportTitle: "Nahlášení problému",
    reportIntro: "Nejrychleji to jde přímo z aplikace:",
    reportSteps: [
      "Otevři nabídku vpravo nahoře v knihovně a vyber Nápověda a podpora.",
      "Klepni na Nahlásit problém, vyber hru a popiš, co se stalo.",
      "Pokud se hra dá stáhnout zdarma, přidej odkaz, aby ji šlo vyzkoušet.",
      "Otevře se tvoje poštovní aplikace s vyplněnými podrobnostmi. Nic se neodešle, dokud neklepneš na Odeslat.",
    ],
    reportCrash: "Když hra spadne, Narra zobrazí chybovou obrazovku. Přes Sdílet nebo Nahlásit problém tam pošleš hlášení i s protokoly.",
  },
  notFound: {
    title: "Tahle stránka se zatoulala",
    say: "Hledala jsem všude, i za měsícem. Tahle stránka tu není.",
    back: "Zpět na začátek",
  },
} satisfies Dict;
