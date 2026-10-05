// English is the source language. Every other language file must match this shape:
// `satisfies Dict` makes `astro check` fail on a missing or extra key, and
// src/i18n/index.ts checks the same thing (plus array lengths) during the build.
// Texts that already exist in the app (tagline, Narra's lines, FAQ) come from
// app-strings.json and are not repeated here.

const en = {
  meta: {
    homeTitle: "Narra: a Ren'Py visual novel player for iPhone and iPad",
    homeDescription:
      "Narra plays the Ren'Py visual novels you already have on iPhone and iPad. Thirteen built-in engine versions, a save manager with iCloud sync, mods, a gallery and a small guide named Narra. Free, with no account and no tracking.",
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
    compat: "For games made with Ren'Py 7.4 to 8.6. Narra doesn't come with any games; you bring your own.",
    sceneAlt: "Narra floating above a sleeping town at night, reading a glowing book",
  },
  chapters: {
    arrive: {
      title: "Bring your own stories",
      say: "I don't sell games and I don't come with any. You bring the ones you already have, and I make them feel at home.",
      lead: "Add a Ren'Py game from the Files app as a folder or a ZIP archive. Pick several at once and Narra adds them one after another.",
      pathLabel: "Or drop a game here and Narra finds it by herself:",
      path: ["Files", "On My iPhone", "Narra", "Games"],
      items: [
        { t: "Covers, found for you", d: "Narra takes a cover from the game's own images. You can always pick your own." },
        { t: "Collections", d: "Group games by series, by mood, or any way you like. Touch and hold a game to drag it into place." },
        { t: "Search, filters, status", d: "Find a game by name, show only your favorites, and mark what you're playing, have finished or are saving for later." },
        { t: "Updates that keep your saves", d: "Add a newer version of a game you already have and Narra offers to update it. Your saves stay where they are." },
        { t: "Pull to refresh", d: "Copied a game into the Games folder while Narra was open? Pull down on your library and she looks again." },
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
      barLabel: "The short bar",
      bar: { rewind: "Rewind", skip: "Skip", hide: "Hide text box", keyboard: "Keyboard" },
      items: [
        { t: "A short bar you arrange", d: "Rewind, skip, hide the text box or open the keyboard from a small bar. Move it, resize it, fade it, and choose up to five buttons." },
        { t: "Pause screen", d: "How far you've read, how long you've played, quick settings and every tool in one place." },
        { t: "Quick save and load", d: "One tap, and Narra lets you know it's done." },
        { t: "Screenshots", d: "Keep a scene you like. Screenshots go to the Screenshots folder in the Files app." },
      ],
    },
    controls: {
      title: "Play it your way",
      say: "On the couch, on a train, at a desk. Bring a controller if you like. I don't mind.",
      lead: "Narra fits how you hold your device, and what you hold it with.",
      items: [
        { t: "Game controllers", d: "Connect a controller and set its buttons the way you want." },
        { t: "Keyboard shortcuts", d: "With a keyboard, the usual Ren'Py keys work, along with shortcuts for Narra's own tools." },
        { t: "Portrait on iPhone", d: "Hold your iPhone upright and keep reading, or let the game turn with you." },
        { t: "A keyboard of its own", d: "When a game asks you to type a name, Narra brings a keyboard that fits the game." },
        { t: "Two-finger scrolling", d: "Scroll the text history with two fingers, or place a small scroll wheel on the screen." },
      ],
    },
    saves: {
      title: "Saves you can trust",
      say: "Before I change or delete anything, I make a safety backup. Old habit.",
      lead: "Every game has its own save manager. See each save with its screenshot, back them up, export them, bring them back, or start over.",
      items: [
        { t: "iCloud sync", d: "Saves travel between your iPhone and iPad through your own iCloud, uploaded as soon as you finish playing." },
        { t: "Backups", d: "Back up one game or all of them at once. The ZIP archives appear in the Files app, under Narra." },
        { t: "Import and export", d: "Bring saves over from a computer or another device. If a slot is taken, you decide: keep both, replace, or skip." },
        { t: "Safety backups", d: "Restoring, deleting or resetting always makes a safety backup first, so one wrong tap isn't the end." },
        { t: "Save inspector", d: "Curious what's inside a save? Open it and look at its data, its text and its screenshot." },
      ],
    },
    extras: {
      title: "Mods, a gallery, and a few secrets",
      say: "Some of these are for the curious. I won't tell anyone.",
      lead: "For the days you want to go a little further.",
      items: [
        { t: "Mod manager", d: "Add mods as folders or ZIP files, put them in order, and switch them on or off. Global mods apply to every Ren'Py game, and you can start a game once without mods when something misbehaves." },
        { t: "Gallery", d: "Browse the images, music and videos packed inside a game's .rpa archives." },
        { t: "In-game translation", d: "Optional. Translate a game's text while you play. When it's on, the text being translated is sent to Google Translate." },
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
      privacyLink: "Read the privacy policy",
    },
  },
  epilogue: {
    label: "Epilogue",
    title: "Free, from the first page to the last",
    lead: "Every feature in Narra is free. Narra is made by one developer, Emir Han Temur, and if you'd like to help it grow, there are two ways.",
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
      "The short version: Narra has no accounts, no ads and no analytics, and I don't collect your personal data.",
    ],
    sections: [
      {
        h: "What stays on your device",
        p: [
          "The games you import, their covers, your saves, settings, play time, screenshots, fonts and mods are stored inside Narra on your device. They are not sent to me, and I can't see them.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "If iCloud sync is on (it is by default), Narra copies your game saves to your own iCloud Drive so they can move between your devices. Games themselves are not uploaded. This data lives in your iCloud account, under Apple's control and Apple's privacy policy; I have no access to it.",
          "You can turn sync off at any time in Narra's Settings, under Saves & iCloud. Turning it off doesn't delete anything already in iCloud.",
        ],
      },
      {
        h: "In-game translation (optional)",
        p: [
          "Translation is off until you turn it on. When you use it, the game text being translated is sent to Google Translate, and Google's privacy policy applies to that text. Narra doesn't attach your name, account or any identifier to it.",
        ],
        link: { text: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
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
          "playnarra.app is a static website hosted on GitHub Pages. It uses no cookies, no analytics and no third-party fonts or scripts. If you change the theme, your choice is saved in your browser's local storage and never leaves your device.",
          "Like any web host, GitHub may process technical data such as IP addresses in its server logs to keep the service secure.",
        ],
        link: { text: "GitHub Privacy Statement", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" },
      },
      {
        h: "Children",
        p: [
          "Narra doesn't collect personal data from anyone, including children. Narra doesn't include any games; the content you import, and whether it suits your age, is up to you.",
        ],
      },
      {
        h: "Your choices",
        p: [
          "Because I don't hold your data, there's nothing for me to hand over or delete. Deleting Narra removes everything it stored on your device. Saves in iCloud can be managed in your device's iCloud settings. Translation and iCloud sync can be turned off at any time.",
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
          "Narra doesn't provide, sell or distribute games or any other content. You are responsible for the games, mods, fonts and files you import, and for having the right to use them.",
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
        h: "Translation",
        p: ["In-game translation is provided by Google Translate and may not always be accurate."],
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
      { q: "Does Narra come with games?", a: "No. Narra doesn't include, sell or download games. It plays Ren'Py games you already have, such as the PC or Mac versions you got from their creators." },
      { q: "Is Narra free?", a: "Yes, every feature is free. The optional supporter subscription only unlocks the animated background themes, and tips don't unlock anything." },
      { q: "Does Narra play games made with other engines?", a: "No. Narra is made for Ren'Py games only." },
      { q: "Do my saves sync between devices?", a: "Yes, through your own iCloud. Turn it on or off in Narra's Settings, under Saves & iCloud. The developer can't see your iCloud data." },
      { q: "Does Narra upload my games?", a: "No. Games stay on your device. Only saves go to your own iCloud when sync is on. If you turn on in-game translation, the text being translated is sent to Google Translate." },
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
