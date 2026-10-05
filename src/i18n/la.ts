import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra: fabulae visuales Ren'Py in iPhone et iPad",
    homeDescription:
      "Narra fabulas visuales Ren'Py quas iam habes in iPhone et iPad ludit. Tredecim versiones machinae inclusae, administrator servatorum cum synchronizatione iCloud, mutationes, pinacotheca et parva dux nomine Narra. Gratuita, sine ratione, sine vestigatione.",
    privacyTitle: "Ratio secreti",
    privacyDescription:
      "Quid Narra cum notitiis tuis faciat: nulla ratio, nulla praeconia, nullae analyses. Ludi et servata tua in instrumento tuo et in tuo iCloud manent.",
    supportTitle: "Auxilium et subsidium",
    supportDescription:
      "Responsa ad quaestiones de Narra frequentes, quomodo difficultatem nunties, et quomodo auctorem per epistulam electronicam vel in Discord attingas.",
    termsTitle: "Condiciones usus",
    termsDescription:
      "Condiciones Narra utendi: pactum licentiae Apple usitatum, et pauca de rebus quas affers deque emptionibus.",
    notFoundTitle: "Pagina non inventa",
    ogAlt: "Narra, parva dux lucens, ex ora prope nomen applicationis prospiciens",
  },
  nav: {
    skip: "Ad contentum transi",
    home: "Narra: pagina prima",
    support: "Subsidium",
    privacy: "Secretum",
    terms: "Condiciones",
    language: "Lingua",
    toLight: "Ad thema lucidum transi",
    toDark: "Ad thema obscurum transi",
    contents: "Index rerum",
  },
  langSuggest: {
    message: "Haec pagina etiam Latine praesto est.",
    action: "Latine lege",
    dismiss: "Claude",
  },
  cta: {
    appStore: "Ex App Store depone",
    comingSoon: "Mox in App Store",
    discord: "In Discord nos sequere",
  },
  hero: {
    eyebrow: "Lector fabularum visualium pro iPhone et iPad",
    dialogueLabel: "Narra se praesentat",
    lines: [
      "O, salve. Narra sum.",
      "Ludos tuos affer. Cetera ego curabo.",
      "Capsas, fasciculos ZIP, servata, etiam versionem Ren'Py cuique ludo aptam: omnia ego custodio.",
      "Ubi voles, deorsum volve. Totam tibi fabulam narrabo.",
    ],
    next: "Versus sequens",
    begin: "Fabulam incipe",
    compat: "Pro ludis Ren'Py 7.4 ad 8.6 factis. Praeter unam brevem fabulam exemplarem, Narra nullos ludos secum affert; tuos tu affers.",
    sceneAlt: "Narra noctu super oppidum dormiens volitans, librum lucentem legens",
  },
  chapters: {
    arrive: {
      title: "Fabulas tuas affer",
      say: "Ludos non vendo. Tu affers quos iam habes, ego facio ut hic domi sint. Nihil adhuc quod ludas? Brevem fabulam meam attuli.",
      lead: "Ludum Ren'Py ex applicatione Files adde, ut capsam vel archivum ZIP, RAR aut 7z, etiam in partes divisum. Archiva RAR et 7z tessera munita funguntur, itemque ludi Ren'Py ad Android compositi (APK).",
      pathLabel: "Aut ludum huc demitte, et Narra eum sua sponte inveniet:",
      path: ["Files", "On My iPhone", "Narra", "Games"],
      items: [
        { t: "Prima fabula experienda", d: "Brevis fabula exemplaris cum Narra venit, ut omnia experiaris antequam ludos tuos addas." },
        { t: "Collectiones, quaestio, status", d: "Ludos tuo modo congrega et in locum suum trahe. Quemvis nomine, dilectis, vel eo quod nunc ludis invenies." },
        { t: "Renovationes quae servata conservant", d: "Novam versionem ludi adde, vel in optionibus eius Lusum renova elige. Servata tua manent ubi sunt." },
        { t: "Tegumenta pro te inventa", d: "Narra tegumentum ex imaginibus ipsius ludi sumit. Tuum semper eligere potes." },
      ],
    },
    engine: {
      title: "Machina recta cuique ludo",
      say: "Quisque ludus certa quadam Ren'Py factus est. Tredecim mecum fero, ut quisque eam accipiat quam exspectat.",
      lead: "Narra Ren'Py a 7.4.11 usque ad 8.6 continet. Quemque ludum legit, machinam congruentem sua sponte eligit, nec capsa renpy ipsius ludi eget. Si melius scis, in pagina ludi muta.",
      timelineLabel: "Versiones Ren'Py in Narra inclusae",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "versio praevia",
      items: [
        { t: "Series machinarum", d: "Omnes versiones inclusas ordine vide: qua ludus factus sit, et quam Narra elegerit." },
        { t: "Formae visus", d: "Ludo dic eum in telephono, tabula, computatro an televisione currere, et ad dispositionem sibi factam transire potest." },
        { t: "Optiones unius ludi", d: "Celeritas textus, litterae, directio et alia optiones tuas universales sequi possunt vel uni tantum ludo valere." },
        { t: "Litterae tuae", d: "Litteras omnibus ludis vel uni tantum adde." },
      ],
    },
    helper: {
      title: "Amica in ora scaenae",
      say: "Dum legis, orae scaenae haereo et taceo. Plerumque.",
      lead: "Narra ad latus ludi exspectat, nec obstat. Arcus circa eam impletur dum fabulam perlegis. Eam tange ut indicem aperias, vel ad aliam oram trahe.",
      bubblesLabel: "Quae Narra dicere possit",
      bubblesNote: "Consilia eius optionalia sunt. Exstingue ea, et secum tacebit.",
      barLabel: "Fascia brevis",
      bar: { rewind: "Retrorsum", skip: "Praeteri", hide: "Capsam textus cela", keyboard: "Clavile" },
      items: [
        { t: "Fascia brevis tuo arbitrio", d: "Ex parva fascia retrorsum i, praeteri, capsam textus cela vel clavile aperi. Eam move, magnitudinem et opacitatem muta, et usque ad quinque bullas elige." },
        { t: "Pagina intermissionis", d: "Quantum legeris, quamdiu luseris, optiones celeres et omnia instrumenta uno loco." },
        { t: "Celeriter serva et onera", d: "Unus tactus, et Narra te certiorem facit rem confectam esse." },
        { t: "Imagines scaenae", d: "Scaenam quae tibi placet retine. Quisque ludus in optionibus suis pinacothecam imaginum suam habet, et imagines etiam in applicatione Files sunt." },
      ],
    },
    controls: {
      title: "Lude tuo modo",
      say: "In lecto, in tramine, ad mensam. Moderatorem affer, si vis. Mihi non obest.",
      lead: "Narra se accommodat ad modum quo instrumentum tenes, ad id quo ludis, et ad modum quo incipere mavis.",
      widgetLabel: "Instrumentum «Nuper lusi» in Home Screen",
      items: [
        { t: "Moderatores et clavilia", d: "Moderatorem ludorum coniunge et quid quaeque bulla faciat elige, vel clavili utere cum clavibus Ren'Py usitatis et compendiis instrumentorum Narrae." },
        { t: "Erectum in iPhone", d: "iPhone erectum tene et perge legere, vel sine ludum tecum verti." },
        { t: "Clavile proprium", d: "Cum ludus te nomen scribere iubet, Narra clavile ludo aptum affert." },
        { t: "Recta ex Home Screen", d: "Iconem Narrae tange et tene ut pergas, ludum per Siri vel Shortcuts incipe, vel instrumentum «Nuper lusi» adde." },
      ],
    },
    saves: {
      title: "Servata quibus confidere potes",
      say: "Antequam quidquam muto vel deleo, exemplar tutelae facio. Vetus consuetudo.",
      lead: "Quisque ludus suum administratorem servatorum habet. Quodque servatum cum imagine sua vide, exemplaria fac, exporta, restitue, vel de integro incipe.",
      cardsLabel: "Loci servatorum in administratore servatorum, cum iCloud synchronizati",
      items: [
        { t: "Synchronizatio iCloud, etiam dum ludis", d: "Servata inter iPhone et iPad per tuum iCloud transeunt. Narra mutationes mittit dum ludis, et iterum cum ad aliam applicationem transis." },
        { t: "Exemplaria", d: "Unius ludi vel omnium simul exemplaria fac, et Narra recens exemplar servat quotiens ludus aperitur. Archiva ZIP in applicatione Files sunt." },
        { t: "Importare et exportare", d: "Servata ex computatro vel alio instrumento affer. Si locus occupatus est, tu decernis: utrumque servare, substituere, an omittere." },
        { t: "Exemplaria tutelae", d: "Restitutio, deletio vel renovatio semper prius exemplar tutelae facit, ne unus tactus perperam factus finis sit." },
      ],
    },
    extras: {
      title: "Mutationes, pinacotheca, et pauca arcana",
      say: "Quaedam ex his curiosis sunt. Nemini dicam.",
      lead: "Pro diebus quibus paulo ulterius progredi vis.",
      stackLabel: "Mutationes strata super ludum sunt",
      stackGame: "Fasciculi ludi",
      stackMod: "Mutatio {n}",
      stackNote: "Cum duae mutationes eundem fasciculum mutant, ea quae in indice superior est vincit.",
      items: [
        { t: "Administrator mutationum", d: "Mutationes ut capsas vel fasciculos ZIP adde, ordine dispone, accende vel exstingue. Mutationes universales omnibus ludis Ren'Py valent, et ludum semel sine mutationibus incipere potes cum aliquid perperam fit." },
        { t: "Pinacotheca", d: "Imagines, musicam et pelliculas in archivis .rpa ludi inclusas perlustra." },
        { t: "Translatio in ludo", d: "Optionalis. Textum ludi dum ludis converte. Cum accensa est, textus convertendus ad Google Translate mittitur." },
        { t: "Index fraudium (beta)", d: "Index fraudium et pauca instrumenta utilia, ut regressus, numerator FPS et pinacotheca reserata." },
      ],
    },
    world: {
      title: "Septendecim linguae, nihil vestigatum",
      say: "Septendecim linguis loquor. Libenter tecum fabulor, sed nihil de te annoto.",
      lead: "Narra linguam instrumenti tui sequitur. Ut aliam pro Narra tantum eligas, applicationem Settings aperi et ad Apps > Narra > Language i.",
      languagesLabel: "Narra loquitur",
      promises: ["Nulla ratio.", "Nulla praeconia.", "Nullae analyses, nulla vestigatio."],
      promisesNote: "Ludi et servata tua in instrumento tuo et in tuo iCloud manent.",
      lock: "Visne ludum secretum servari? Eum Face ID, Touch ID aut tessera claude, et tegumentum eius in bibliotheca obscuratum manet.",
      privacyLink: "Rationem secreti lege",
    },
  },
  more: {
    label: "Index",
    title: "Et pauca alia",
    items: [
      "Novi ludi quaesiti bibliotheca deorsum tracta",
      "Magnitudo textus, ambitus et litterae dum ludis",
      "Volutio duobus digitis et rota volvendi in scaena",
      "Inspector servatorum curiosis",
      "Tempus ludendi cuiusque ludi",
      "Pinacotheca ipsius ludi reserata",
      "Administrator spatii",
      "Relationes errorum cum commentariis, si ludus corruit",
      "Species lucida et obscura",
      "Sonus post vocationem telephonicam vel excitatorium restitutus",
    ],
  },
  epilogue: {
    label: "Epilogus",
    title: "Gratis, a prima pagina ad ultimam",
    lead: "Omnia Narrae munera gratuita sunt. Narra ab uno auctore, Emir Han Temur, fit; si eam crescere adiuvare vis, duae viae patent.",
    supporterTitle: "Subscriptio fautoris",
    supporter: "Menstrua vel annua. Themata fundi animata reserat, nec quicquam aliud.",
    tipsTitle: "Stipes",
    tips: "Gratiae semel actae. Stipes nihil reserant, sed multum valent.",
    say: "Haec est adhuc fabula mea. Tua sequitur.",
    choices: "Quid nunc?",
    faq: "Quaestiones et responsa lege",
  },
  footer: {
    madeBy: "Ab Emir Han Temur facta.",
    independent: "Narra applicatio independens est neque cum incepto Ren'Py coniuncta neque ab eo probata.",
    trademarks: "Apple, iPhone, iPad, iCloud et App Store notae mercatoriae Apple Inc. sunt.",
    email: "Epistula electronica",
  },
  legal: {
    effective: "Valet ex {date}",
    translationNote: "Haec est translatio; si quid ab exemplari Anglico discrepat, exemplar Anglicum valet.",
  },
  privacy: {
    intro: [
      "Narra applicatio est ad fabulas visuales Ren'Py in iPhone et iPad ludendas. Ab Emir Han Temur, auctore independenti, facta est (infra «ego» et «me»). Haec ratio explicat quid notitiis tuis fiat cum applicatione Narra et situ interretiali playnarra.app uteris.",
      "Breviter: Narra nullas rationes, nulla praeconia, nullas analyses habet, nec ego notitias tuas personales colligo.",
    ],
    sections: [
      {
        h: "Quae in instrumento tuo manent",
        p: [
          "Ludi quos importas, eorum tegumenta, servata, optiones, tempus lusus, imagines scaenae, litterae et mutationes tuae intra Narra in instrumento tuo servantur. Ad me non mittuntur, nec ea videre possum.",
          "Instrumentum (widget) «Nuper lusi», compendia Home Screen et Siri bibliothecam tuam in ipso instrumento tuo legunt. Si ludum Face ID vel Touch ID claudis, probatio ab instrumento tuo fit; Narra notitias tuas biometricas numquam videt.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "Si synchronizatio iCloud accensa est (quod ex praefinito est), Narra servata ludorum tuorum in tuum iCloud Drive exscribit, dum ludis et postea, ut inter instrumenta tua transire possint. Ipsi ludi non mittuntur. Haec data in ratione tua iCloud sunt, sub potestate Apple et ratione secreti Apple; ego nullum ad ea accessum habeo.",
          "Synchronizationem quovis tempore in Optionibus Narrae, sub Servata et iCloud, exstinguere potes. Exstinctio nihil delet quod iam in iCloud est.",
        ],
      },
      {
        h: "Translatio in ludo (optionalis)",
        p: [
          "Translatio exstincta est donec eam accendis. Cum ea uteris, textus ludi convertendus ad Google Translate mittitur, et ratio secreti Google ad eum textum pertinet. Narra nec nomen tuum nec rationem nec ullum signum identificationis ei adiungit.",
        ],
        link: { text: "Ratio secreti Google", href: "https://policies.google.com/privacy" },
      },
      {
        h: "Relationes errorum et epistulae subsidii",
        p: [
          "Cum aliquid perperam fit, Narra relationem erroris parare potest, et Difficultatem nuntia epistulam subsidii parat. Neutra sponte mittitur: tantum communicantur si tu ipse eas mittis, per epistulam electronicam vel per tabulam communicandi.",
          "Relationes anonymae redduntur. Viae fasciculorum breviantur, et nomen capsae usoris tui et inscriptiones electronicae celantur. Relatio continere potest exemplar instrumenti, versionem systematis, linguam et regionem, versionem applicationis, singula de ludo affecto (eius versionem, versionem Ren'Py et magnitudinem) et commentarios recentes. Numquam contenta servatorum tuorum continet.",
          "Quae mittis tantum adhibeo ut tibi respondeam et difficultates corrigam, nec cum ullo communico.",
        ],
      },
      {
        h: "Emptiones",
        p: [
          "Subscriptiones fautoris et stipes ab Apple per App Store tractantur. Nomen tuum, inscriptionem electronicam vel singula solutionis non accipio. Narra ab Apple tantum quaerit num subscriptio activa sit, ut fundos animatos reseret.",
        ],
      },
      {
        h: "Nullae analyses, praeconia, vestigatio",
        p: [
          "Narra nullum codicem analyseos vel praeconiorum continet. Te per applicationes vel situs non vestigat nec notitiis tuis ad praeconia utitur.",
        ],
      },
      {
        h: "Hic situs",
        p: [
          "playnarra.app situs staticus est in GitHub Pages hospitatus. Nullis crustulis (cookies), nullis analysibus, nullis litteris vel scriptis tertiarum partium utitur. Si thema mutas, electio tua in repositorio locali navigatri tui servatur nec umquam instrumentum tuum relinquit.",
          "Ut quivis hospes interretialis, GitHub data technica, ut inscriptiones IP, in commentariis servitoris tractare potest, ut servitium tutum servet.",
        ],
        link: { text: "Declaratio secreti GitHub", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" },
      },
      {
        h: "Pueri",
        p: [
          "Narra a nemine notitias personales colligit, ne a pueris quidem. Praeter suam brevem fabulam exemplarem, Narra nullos ludos continet; quae importas, et utrum aetati tuae conveniant, tuum est.",
        ],
      },
      {
        h: "Electiones tuae",
        p: [
          "Quia notitias tuas non teneo, nihil habeo quod tradam vel deleam. Narra deleta, omnia quae in instrumento tuo servavit removentur. Servata in iCloud per optiones iCloud instrumenti tui administrari possunt. Translatio et synchronizatio iCloud quovis tempore exstingui possunt.",
        ],
      },
      {
        h: "Mutationes",
        p: [
          "Si haec ratio mutatur, nova versio in hac pagina cum nova die vigoris proponetur. Mutationes graviores etiam in notis editionis applicationis memorabuntur.",
        ],
      },
      {
        h: "Contactus",
        p: ["Quaestiones de secreto libenter ad inscriptionem infra positam accipiuntur."],
      },
    ],
  },
  terms: {
    intro: [
      "Narra tibi conceditur sub Pacto Licentiae Usoris Finalis (EULA) Apple usitato pro applicationibus licentia concessis. Notae infra id supplent; ubi discrepant, EULA Apple praevalet.",
    ],
    eulaLink: "EULA Apple usitatum",
    sections: [
      {
        h: "Contenta tua",
        p: [
          "Praeter suam brevem fabulam exemplarem, Narra nec ludos nec ulla alia contenta praebet, vendit vel distribuit. Tu ipse rationem reddis de ludis, mutationibus, litteris et fasciculis quos importas, deque iure eis utendi.",
        ],
      },
      {
        h: "Ludi ab aliis facti",
        p: [
          "Ludi quos in Narra ludis ad suos auctores pertinent. Narra neque cum eis neque cum incepto Ren'Py coniuncta est, nec promittere potest omnem ludum operaturum esse.",
        ],
      },
      {
        h: "Subscriptiones et stipes",
        p: [
          "Emptiones ab Apple tractantur. Subscriptio fautoris sponte renovatur nisi saltem 24 horis ante finem periodi praesentis revocatur; eam in optionibus rationis tuae App Store administrare vel revocare potes. Stipes solutiones semel factae sunt nec quicquam reserant.",
        ],
      },
      {
        h: "Translatio",
        p: ["Translatio in ludo a Google Translate praebetur et fortasse non semper accurata est."],
      },
      {
        h: "Mutationes",
        p: ["Hae condiciones renovari possunt. Dies in summo versionem praesentem ostendit."],
      },
      {
        h: "Contactus",
        p: ["Quaestiones de his condicionibus libenter ad inscriptionem infra positam accipiuntur."],
      },
    ],
  },
  support: {
    intro: "Responsa ad quaestiones frequentes, et via qua hominem verum attingas.",
    contactTitle: "Nobis scribe",
    emailNote: "Errata, quaestiones, consilia: omnia grata.",
    discordTitle: "Discord",
    discordNote: "Cum aliis lusoribus colloquere et progressum Narrae sequere.",
    faqTitle: "Quaestiones et responsa",
    basicsTitle: "Antequam incipis",
    basics: [
      { q: "Habetne Narra ludos inclusos?", a: "Tantum brevem fabulam exemplarem suam. Narra ludos nec vendit nec deponit; ludos Ren'Py quos iam habes ludit, ut versiones pro PC vel Mac ab auctoribus acceptas." },
      { q: "Estne Narra gratuita?", a: "Ita, omnia munera gratuita sunt. Subscriptio fautoris optionalis tantum themata fundi animata reserat, et stipes nihil reserant." },
      { q: "Synchronizanturne servata mea inter instrumenta?", a: "Ita, per tuum iCloud, etiam dum ludis. In Optionibus Narrae, sub Servata et iCloud, accende vel exstingue. Auctor data tua iCloud videre non potest." },
    ],
    reportTitle: "Difficultatem nuntiare",
    reportIntro: "Via celerrima est intra applicationem:",
    reportSteps: [
      "Indicem in summa dextra bibliothecae aperi et Auxilium et subsidium elige.",
      "Difficultatem nuntia tange, ludum elige et quid acciderit describe.",
      "Si ludus gratis deponi potest, nexum adde ut probari possit.",
      "Applicatio epistularis cum singulis iam scriptis aperitur. Nihil mittitur donec Mitte tangis.",
    ],
    reportCrash: "Si ludus corruit, Narra paginam erroris ostendit. Ibi Communica vel Difficultatem nuntia adhibe ut relationem cum commentariis mittas.",
  },
  notFound: {
    title: "Haec pagina aberravit",
    say: "Ubique quaesivi, etiam post lunam. Haec pagina hic non est.",
    back: "Ad initium redi",
  },
} satisfies Dict;
