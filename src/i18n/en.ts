// English is the source language. Every other language file must match this shape:
// `satisfies Dict` makes `astro check` fail on a missing or extra key, and
// src/i18n/index.ts checks the same thing (plus array lengths) during the build.
// Texts that already exist in the app (tagline, Narra's lines, FAQ) come from
// app-strings.json and are not repeated here.

const en = {
  meta: {
    homeTitle: "Narra: a Ren'Py visual novel player for iPhone and iPad",
    homeDescription:
      "Narra plays the Ren'Py visual novels you already have on iPhone and iPad. Thirteen built-in engine versions, a save manager with iCloud sync, mods, a gallery and a small guide named Narra. One purchase, no account and no tracking.",
    privacyTitle: "Privacy Policy",
    privacyDescription:
      "What Narra does with your information: no account, no ads, no analytics. Your games and saves stay on your device and in your own iCloud.",
    supportTitle: "Help & Support",
    supportDescription:
      "Answers to common questions about Narra, how to report a problem, and how to reach the developer by email or on Discord.",
    termsTitle: "Terms of Use",
    termsDescription:
      "The terms for using Narra: Apple's standard license agreement, plus a few notes about the content you bring and about purchases.",
    notFoundTitle: "Page not found",
    ogAlt: "Narra, a small glowing guide, peeking in from the edge next to the app's name",
  },
  nav: {
    skip: "Skip to content",
    home: "Narra home",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    language: "Language",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    contents: "Contents",
  },
  langSuggest: {
    message: "This page is also available in English.",
    action: "Read in English",
    dismiss: "Dismiss",
  },
  cta: {
    appStore: "Download on the App Store",
    comingSoon: "Coming soon to the App Store",
    discord: "Follow along on Discord",
  },
  hero: {
    eyebrow: "Visual novel player for iPhone and iPad",
    dialogueLabel: "Narra introduces herself",
    lines: [
      "Oh, hello. I'm Narra.",
      "Bring your games. I'll take care of the rest.",
      "Folders, ZIP files, saves, even the right Ren'Py version for each game. I keep track of all of it.",
      "Scroll down when you're ready. I'll tell you the whole story.",
    ],
    next: "Next line",
    begin: "Begin the story",
    compat: "For games made with Ren'Py 7.4 to 8.6. Apart from one short sample story, Narra doesn't come with games; you bring your own.",
    sceneAlt: "Narra floating above a sleeping town at night, reading a glowing book",
  },
  chapters: {
    arrive: {
      title: "Bring your own stories",
      say: "I don't sell games. Bring the ones you already have, and I'll make them feel at home. Nothing to play yet? I brought a short story of my own.",
      lead: "Add a Ren'Py game from the Files app as a folder or a ZIP, RAR or 7z archive, even one split into parts. Password-protected RAR and 7z archives work, and so do Ren'Py games packed for Android (APK).",
      pathLabel: "Or drop a game here and Narra finds it by herself:",
      path: ["Files", "On My iPhone", "Narra", "Games"],
      items: [
        { t: "A first story to try", d: "A short sample story comes with Narra, so you can try everything before adding your own games." },
        { t: "Collections, search and status", d: "Group games your own way and drag them into place. Find any of them by name, by favorite or by what you're playing." },
        { t: "Updates that keep your saves", d: "Add a newer version of a game, or choose Update Game in its settings. Your saves stay where they are." },
        { t: "Covers, found for you", d: "Narra takes a cover from the game's own images. You can always pick your own." },
      ],
    },
    engine: {
      title: "The right engine for every game",
      say: "Every game was made with one particular Ren'Py. I carry thirteen of them, so each game gets the one it expects.",
      lead: "Narra includes Ren'Py from 7.4.11 to 8.6. It reads each game, picks the matching engine on its own, and doesn't need the game's own renpy folder. If you know better, change it on the game's page.",
      timelineLabel: "Ren'Py versions included in Narra",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "pre-release build",
      items: [
        { t: "A timeline of engines", d: "See every included version in order, which one the game was made with, and which one Narra chose." },
        { t: "Screen variants", d: "Tell a game it's running on a phone, a tablet, a computer or a TV, and it can switch to the layout made for it." },
        { t: "Settings for one game", d: "Text speed, fonts, orientation and more can follow your general settings or apply to a single game." },
        { t: "Your own fonts", d: "Add fonts for every game or just for one." },
      ],
    },
    helper: {
      title: "A friend at the edge of the screen",
      say: "While you read, I hold on to the edge of the screen and stay quiet. Mostly.",
      lead: "Narra waits at the side of the game, out of the way. The arc around her fills as you read through the story. Tap her for the menu, or drag her to another edge.",
      bubblesLabel: "Things Narra might say",
      bubblesNote: "Her suggestions are optional. Turn them off and she keeps to herself.",
      barLabel: "The compact bar",
      bar: { rewind: "Rewind", skip: "Skip", hide: "Hide text box", keyboard: "Keyboard" },
      items: [
        { t: "A compact bar you arrange", d: "Rewind, skip, hide the text box or open the keyboard from a small bar. Move it, resize it, fade it, and choose up to five buttons." },
        { t: "Pause screen", d: "How far you've read, how long you've played, quick settings and every tool in one place." },
        { t: "Quick save and load", d: "One tap, and Narra lets you know it's done." },
        { t: "Screenshots", d: "Keep a scene you like. Each game gets its own screenshot gallery in its settings, and the images are in the Files app too." },
      ],
    },
    controls: {
      title: "Play it your way",
      say: "On the couch, on a train, at a desk. Bring a controller if you like. I don't mind.",
      lead: "Narra fits how you hold your device, what you hold it with, and how you like to start.",
      widgetLabel: "The Recently Played widget on the Home Screen",
      items: [
        { t: "Controllers and keyboards", d: "Pair a game controller and choose what each button does, or use a keyboard with the usual Ren'Py keys and shortcuts for Narra's tools." },
        { t: "Portrait on iPhone", d: "Hold your iPhone upright and keep reading, or let the game turn with you." },
        { t: "A keyboard of its own", d: "When a game asks you to type a name, Narra brings a keyboard that fits the game." },
        { t: "Straight from the Home Screen", d: "Touch and hold Narra's icon to continue, start a game with Siri or Shortcuts, or add the Recently Played widget." },
      ],
    },
    saves: {
      title: "Saves you can trust",
      say: "Before I change or delete anything, I make a safety backup. Old habit.",
      lead: "Every game has its own save manager. See each save with its screenshot, back them up, export them, bring them back, or start over.",
      cardsLabel: "Save slots in the save manager, synced with iCloud",
      items: [
        { t: "iCloud sync, even while you play", d: "Saves travel between your iPhone and iPad through your own iCloud. Narra uploads changes while you play and again when you switch to another app." },
        { t: "Backups", d: "Back up one game or all of them at once, and Narra keeps a fresh copy each time a game opens. The ZIP archives are in the Files app." },
        { t: "Import and export", d: "Bring saves over from a computer or another device. If a slot is taken, you decide: keep both, replace, or skip." },
        { t: "Safety backups", d: "Restoring, deleting or resetting always makes a safety backup first, so one wrong tap isn't the end." },
      ],
    },
    extras: {
      title: "Mods, a gallery, and a few secrets",
      say: "Some of these are for the curious. I won't tell anyone.",
      lead: "For the days you want to go a little further.",
      stackLabel: "Mods are layers on top of the game",
      stackGame: "Game files",
      stackMod: "Mod {n}",
      stackNote: "When two mods change the same file, the one higher in the list wins.",
      items: [
        { t: "Mod manager", d: "Add mods as folders or ZIP files, put them in order, and switch them on or off. Global mods apply to every Ren'Py game, and you can start a game once without mods when something misbehaves." },
        { t: "Gallery", d: "Browse the images, music and videos packed inside a game's .rpa archives." },
        { t: "Cheat menu (beta)", d: "A cheat menu and a few handy tools, like rollback, an FPS counter and a gallery unlocker." },
      ],
    },
    world: {
      title: "Seventeen languages, nothing to track",
      say: "I speak seventeen languages. I'm happy to chat, but I don't take notes about you.",
      lead: "Narra follows your device language. To choose another one just for Narra, open the Settings app and go to Apps > Narra > Language.",
      languagesLabel: "Narra speaks",
      promises: ["No account.", "No ads.", "No analytics, no tracking."],
      promisesNote: "Your games and saves stay on your device and in your own iCloud.",
      lock: "Want a game kept private? Lock it with Face ID, Touch ID or your passcode, and its cover stays blurred in your library.",
      privacyLink: "Read the privacy policy",
    },
  },
  more: {
    label: "Index",
    title: "And a few more things",
    items: [
      "Pull down on the library to look for new games",
      "Text size, outline and font while you play",
      "Two-finger scrolling and an on-screen scroll wheel",
      "A save inspector for the curious",
      "Play time for every game",
      "Unlock a game's own gallery",
      "A storage manager",
      "Error reports with logs when a game crashes",
      "Light and dark appearance",
      "Sound that comes back after a call or an alarm",
    ],
  },
  screens: {
    sampleNote: "Sample library. The game titles are made up.",
  },
  epilogue: {
    label: "Epilogue",
    title: "Buy once, and it's yours",
    lead: "Buy Narra once and it's all yours. Narra is made by one developer, Emir Han Temur. If you'd like to give more, the optional supporter subscription unlocks the animated themes, and tips help development.",
    supporterTitle: "Supporter subscription",
    supporter: "Monthly or yearly. It unlocks the animated background themes, and that's all it unlocks.",
    tipsTitle: "Tips",
    tips: "A one-time thank-you. Tips don't unlock anything, but they mean a lot.",
    say: "That's my story so far. Yours is next.",
    choices: "What now?",
    faq: "Read the questions and answers",
  },
  footer: {
    madeBy: "Made by Emir Han Temur.",
    independent: "Narra is an independent app and isn't affiliated with or endorsed by the Ren'Py project.",
    trademarks: "Apple, iPhone, iPad, iCloud and App Store are trademarks of Apple Inc.",
    email: "Email",
  },
  legal: {
    effective: "Effective {date}",
    translationNote: "",
  },
  privacy: {
    intro: [
      "Narra is an app for playing Ren'Py visual novels on iPhone and iPad. It's made by Emir Han Temur, an independent developer (\"I\" and \"me\" below). This policy explains what happens to your information when you use the Narra app and the playnarra.app website.",
      "The short version: Narra doesn't collect any data. It has no accounts, ads or analytics, and it only goes online for iCloud (your own saves), App Store purchases and links you open yourself.",
    ],
    sections: [
      {
        h: "What stays on your device",
        p: [
          "The games you import, their covers, your saves, settings, play time, screenshots, fonts and mods are stored inside Narra on your device. They are not sent to me, and I can't see them.",
          "The Recently Played widget, Home Screen shortcuts and Siri read your library on the device. If you lock a game with Face ID or Touch ID, the check is done by your device; Narra never sees your biometric data.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "If iCloud sync is on (it is by default), Narra copies your game saves to your own iCloud Drive, while you play and afterwards, so they can move between your devices. Games themselves are not uploaded. This data lives in your iCloud account, under Apple's control and Apple's privacy policy; I have no access to it.",
          "You can turn sync off at any time in Narra's Settings, under Saves & iCloud. Turning it off doesn't delete anything already in iCloud.",
        ],
      },
      {
        h: "Internet connections",
        p: [
          "Narra itself connects to the internet only to sync your saves with iCloud, to handle App Store purchases and to open links you tap, such as Discord. Nothing from your games, including their text, is sent anywhere.",
        ],
      },
      {
        h: "Error reports and support emails",
        p: [
          "When something goes wrong, Narra can prepare an error report, and Report a Problem prepares a support email. Neither is sent automatically: they are shared only if you send them yourself, by email or with the share sheet.",
          "Reports are anonymized. File paths are shortened, and your user folder name and email addresses are hidden. A report can include the device model, system version, language and region, app version, details about the affected game (its version, Ren'Py version and size) and recent logs. It never includes the contents of your saves.",
          "I use what you send only to answer you and to fix problems, and I don't share it with anyone.",
        ],
      },
      {
        h: "Purchases",
        p: [
          "Supporter subscriptions and tips are processed by Apple through the App Store. I don't receive your name, email address or payment details. Narra only asks Apple whether a subscription is active, to unlock the animated backgrounds.",
        ],
      },
      {
        h: "No analytics, ads or tracking",
        p: [
          "Narra contains no analytics or advertising code. It doesn't track you across apps or websites and doesn't use your data for advertising.",
        ],
      },
      {
        h: "This website",
        p: [
          "playnarra.app is a static website served through Cloudflare. It uses no cookies, no analytics and no third-party fonts or scripts. If you change the theme, your choice is saved in your browser's local storage and never leaves your device.",
          "To deliver the site and protect it from abuse, Cloudflare processes technical connection data such as IP addresses under its own privacy policy.",
        ],
        link: { text: "Cloudflare Privacy Policy", href: "https://www.cloudflare.com/privacypolicy/" },
      },
      {
        h: "Children",
        p: [
          "Narra doesn't collect personal data from anyone, including children. Apart from its own short sample story, Narra doesn't include games; the content you import, and whether it suits your age, is up to you.",
        ],
      },
      {
        h: "Your choices",
        p: [
          "Because I don't hold your data, there's nothing for me to hand over or delete. Deleting Narra removes everything it stored on your device. Saves in iCloud can be managed in your device's iCloud settings. iCloud sync can be turned off at any time.",
        ],
      },
      {
        h: "Changes",
        p: [
          "If this policy changes, the new version will be posted on this page with a new effective date. Important changes will also be mentioned in the app's release notes.",
        ],
      },
      {
        h: "Contact",
        p: ["Questions about privacy are welcome at the address below."],
      },
    ],
  },
  terms: {
    intro: [
      "Narra is licensed to you under Apple's Standard Licensed Application End User License Agreement (EULA). The notes below add to it; where they differ, Apple's EULA comes first.",
    ],
    eulaLink: "Apple's Standard EULA",
    sections: [
      {
        h: "Your content",
        p: [
          "Apart from its own short sample story, Narra doesn't provide, sell or distribute games or any other content. You are responsible for the games, mods, fonts and files you import, and for having the right to use them.",
        ],
      },
      {
        h: "Games made by others",
        p: [
          "The games you play in Narra belong to their creators. Narra isn't affiliated with them or with the Ren'Py project, and can't promise that every game will work.",
        ],
      },
      {
        h: "Subscriptions and tips",
        p: [
          "Purchases are handled by Apple. The supporter subscription renews automatically unless cancelled at least 24 hours before the end of the current period; you can manage or cancel it in your App Store account settings. Tips are one-time payments and don't unlock anything.",
        ],
      },
      {
        h: "Changes",
        p: ["These terms may be updated. The date at the top shows the current version."],
      },
      {
        h: "Contact",
        p: ["Questions about these terms are welcome at the address below."],
      },
    ],
  },
  support: {
    intro: "Answers to common questions, and a way to reach a real person.",
    contactTitle: "Talk to us",
    emailNote: "Bugs, questions, ideas: all welcome.",
    discordTitle: "Discord",
    discordNote: "Chat with other players and follow Narra's development.",
    faqTitle: "Questions and answers",
    basicsTitle: "Before you start",
    basics: [
      { q: "Does Narra come with games?", a: "Only a short sample story of its own. Narra doesn't sell or download games; it plays the Ren'Py games you already have, such as the PC or Mac versions you got from their creators." },
      { q: "How much does Narra cost?", a: "Narra is a one-time purchase; the App Store shows the price for your region. The optional supporter subscription unlocks the animated background themes. Tips don't unlock anything; they're simply support." },
      { q: "Do my saves sync between devices?", a: "Yes, through your own iCloud, even while you play. Turn it on or off in Narra's Settings, under Saves & iCloud. The developer can't see your iCloud data." },
    ],
    reportTitle: "Reporting a problem",
    reportIntro: "The quickest way is from inside the app:",
    reportSteps: [
      "Open the menu at the top right of your library and choose Help & Support.",
      "Tap Report a Problem, choose the game and describe what happened.",
      "If the game can be downloaded for free, add a link so it can be tested.",
      "Your mail app opens with the details filled in. Nothing is sent until you tap Send.",
    ],
    reportCrash: "If a game crashes, Narra shows an error screen. Use Share or Report a Problem there to send the report with its logs.",
  },
  notFound: {
    title: "This page wandered off",
    say: "I looked everywhere, even behind the moon. This page isn't here.",
    back: "Back to the beginning",
  },
};

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

export type Dict = Widen<typeof en>;
export default en satisfies Dict;
