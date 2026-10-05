import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra : un lecteur de visual novels Ren'Py pour iPhone et iPad",
    homeDescription:
      "Narra lit les visual novels Ren'Py que vous avez déjà, sur iPhone et iPad. Treize versions du moteur intégrées, un gestionnaire de sauvegardes synchronisé avec iCloud, des mods, une galerie et une petite guide nommée Narra. Gratuit, sans compte et sans pistage.",
    privacyTitle: "Politique de confidentialité",
    privacyDescription:
      "Ce que Narra fait de vos informations : pas de compte, pas de publicité, pas d'outils d'analyse. Vos jeux et vos sauvegardes restent sur votre appareil et dans votre propre iCloud.",
    supportTitle: "Aide et assistance",
    supportDescription:
      "Réponses aux questions fréquentes sur Narra, comment signaler un problème et comment joindre le développeur par e-mail ou sur Discord.",
    termsTitle: "Conditions d'utilisation",
    termsDescription:
      "Les conditions d'utilisation de Narra : le contrat de licence standard d'Apple, plus quelques remarques sur le contenu que vous apportez et sur les achats.",
    notFoundTitle: "Page introuvable",
    ogAlt: "Narra, une petite guide lumineuse, qui jette un œil depuis le bord, à côté du nom de l'app",
  },
  nav: {
    skip: "Aller au contenu",
    home: "Accueil Narra",
    support: "Assistance",
    privacy: "Confidentialité",
    terms: "Conditions",
    language: "Langue",
    toLight: "Passer au thème clair",
    toDark: "Passer au thème sombre",
    contents: "Sommaire",
  },
  langSuggest: {
    message: "Cette page est aussi disponible en français.",
    action: "Lire en français",
    dismiss: "Fermer",
  },
  cta: {
    appStore: "Télécharger dans l'App Store",
    comingSoon: "Bientôt sur l'App Store",
    discord: "Suivre le projet sur Discord",
  },
  hero: {
    eyebrow: "Lecteur de visual novels pour iPhone et iPad",
    dialogueLabel: "Narra se présente",
    lines: [
      "Oh, bonjour. Moi, c'est Narra.",
      "Apporte tes jeux. Je m'occupe du reste.",
      "Dossiers, fichiers ZIP, sauvegardes, et même la bonne version de Ren'Py pour chaque jeu. Je garde un œil sur tout.",
      "Fais défiler quand tu veux. Je te raconte toute l'histoire.",
    ],
    next: "Réplique suivante",
    begin: "Commencer l'histoire",
    compat: "Pour les jeux créés avec Ren'Py 7.4 à 8.6. À part une courte histoire d'exemple, Narra ne contient aucun jeu ; c'est vous qui apportez les vôtres.",
    sceneAlt: "Narra flotte la nuit au-dessus d'une ville endormie, en lisant un livre lumineux",
  },
  chapters: {
    arrive: {
      title: "Apportez vos propres histoires",
      say: "Je ne vends pas de jeux. Tu apportes ceux que tu as déjà, et moi, je fais en sorte qu'ils se sentent chez eux. Pas encore de jeu ? J'ai apporté une petite histoire bien à moi.",
      lead: "Ajoutez un jeu Ren'Py depuis l'app Fichiers, sous forme de dossier ou d'archive ZIP, RAR ou 7z, même découpée en plusieurs parties. Les archives RAR et 7z protégées par mot de passe fonctionnent, tout comme les jeux Ren'Py empaquetés pour Android (APK).",
      pathLabel: "Ou déposez un jeu ici, et Narra le trouve toute seule :",
      path: ["Fichiers", "Sur mon iPhone", "Narra", "Games"],
      items: [
        { t: "Une première histoire à essayer", d: "Une courte histoire d'exemple est fournie avec Narra, pour que vous puissiez tout essayer avant d'ajouter vos propres jeux." },
        { t: "Collections, recherche et statut", d: "Regroupez vos jeux comme bon vous semble et faites-les glisser à leur place. Retrouvez n'importe lequel par son nom, parmi vos favoris ou selon ce à quoi vous jouez." },
        { t: "Des mises à jour qui gardent vos sauvegardes", d: "Ajoutez une version plus récente d'un jeu, ou choisissez Mettre à jour le jeu dans ses réglages. Vos sauvegardes restent où elles sont." },
        { t: "Des couvertures trouvées pour vous", d: "Narra choisit une couverture parmi les images du jeu. Vous pouvez toujours choisir la vôtre." },
      ],
    },
    engine: {
      title: "Le bon moteur pour chaque jeu",
      say: "Chaque jeu a été créé avec une version précise de Ren'Py. J'en ai treize avec moi, alors chaque jeu reçoit celle qu'il attend.",
      lead: "Narra intègre Ren'Py de la version 7.4.11 à la 8.6. Il lit chaque jeu, choisit de lui-même le moteur qui lui correspond et n'a pas besoin du dossier renpy du jeu. Si vous savez mieux, changez-le depuis la page du jeu.",
      timelineLabel: "Versions de Ren'Py incluses dans Narra",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "préversion",
      items: [
        { t: "Une frise des moteurs", d: "Voyez toutes les versions incluses dans l'ordre, celle avec laquelle le jeu a été créé et celle que Narra a choisie." },
        { t: "Variantes d'écran", d: "Indiquez à un jeu qu'il tourne sur un téléphone, une tablette, un ordinateur ou une télévision, et il peut passer à la mise en page prévue pour cet appareil." },
        { t: "Des réglages pour un seul jeu", d: "Vitesse du texte, polices, orientation et plus encore peuvent suivre vos réglages généraux ou ne s'appliquer qu'à un seul jeu." },
        { t: "Vos propres polices", d: "Ajoutez des polices pour tous les jeux ou pour un seul." },
      ],
    },
    helper: {
      title: "Une amie au bord de l'écran",
      say: "Pendant que tu lis, je m'accroche au bord de l'écran et je ne dis rien. Enfin, presque.",
      lead: "Narra attend sur le côté du jeu, sans gêner. L'arc qui l'entoure se remplit à mesure que vous avancez dans l'histoire. Touchez-la pour ouvrir le menu, ou faites-la glisser vers un autre bord.",
      bubblesLabel: "Ce que Narra pourrait dire",
      bubblesNote: "Ses suggestions sont facultatives. Désactivez-les, et elle se fait discrète.",
      barLabel: "La barre compacte",
      bar: { rewind: "Revenir en arrière", skip: "Passer", hide: "Masquer la boîte de texte", keyboard: "Clavier" },
      items: [
        { t: "Une barre compacte à votre façon", d: "Revenez en arrière, passez, masquez la boîte de texte ou ouvrez le clavier depuis une petite barre. Déplacez-la, changez sa taille et son opacité, et choisissez jusqu'à cinq boutons." },
        { t: "Écran de pause", d: "Où vous en êtes dans la lecture, votre temps de jeu, des réglages rapides et tous les outils au même endroit." },
        { t: "Sauvegarde et chargement rapides", d: "Un seul toucher, et Narra vous fait savoir que c'est fait." },
        { t: "Captures d'écran", d: "Gardez une scène que vous aimez. Chaque jeu a sa propre galerie de captures dans ses réglages, et les images se trouvent aussi dans l'app Fichiers." },
      ],
    },
    controls: {
      title: "Jouez à votre façon",
      say: "Sur le canapé, dans le train, au bureau. Prends une manette si tu veux, ça ne me dérange pas.",
      lead: "Narra s'adapte à la façon dont vous tenez votre appareil, à ce que vous avez en main et à la façon dont vous aimez lancer vos jeux.",
      widgetLabel: "Le widget Récents sur l'écran d'accueil",
      items: [
        { t: "Manettes et claviers", d: "Connectez une manette et choisissez le rôle de chaque bouton, ou utilisez un clavier avec les touches habituelles de Ren'Py et des raccourcis pour les outils de Narra." },
        { t: "Portrait sur iPhone", d: "Tenez votre iPhone à la verticale et continuez à lire, ou laissez le jeu pivoter avec vous." },
        { t: "Un clavier bien à lui", d: "Quand un jeu vous demande de taper un nom, Narra apporte un clavier assorti au jeu." },
        { t: "Directement depuis l'écran d'accueil", d: "Maintenez le doigt sur l'icône de Narra pour reprendre, lancez un jeu avec Siri ou Raccourcis, ou ajoutez le widget Récents." },
      ],
    },
    saves: {
      title: "Des sauvegardes en toute confiance",
      say: "Avant de modifier ou de supprimer quoi que ce soit, je fais une sauvegarde de sécurité. Vieille habitude.",
      lead: "Chaque jeu a son propre gestionnaire de sauvegardes. Voyez chaque sauvegarde avec sa capture d'écran, faites-en des copies, exportez-les, restaurez-les ou repartez de zéro.",
      cardsLabel: "Les emplacements du gestionnaire de sauvegardes, synchronisés avec iCloud",
      items: [
        { t: "Synchronisation iCloud, même en jeu", d: "Vos sauvegardes passent de votre iPhone à votre iPad via votre propre iCloud. Narra envoie les changements pendant que vous jouez, puis à nouveau quand vous passez à une autre app." },
        { t: "Copies de sauvegarde", d: "Faites une copie d'un seul jeu ou de tous à la fois, et Narra garde une copie récente chaque fois qu'un jeu s'ouvre. Les archives ZIP se trouvent dans l'app Fichiers." },
        { t: "Importer et exporter", d: "Récupérez des sauvegardes depuis un ordinateur ou un autre appareil. Si un emplacement est occupé, c'est vous qui décidez : garder les deux, remplacer ou ignorer." },
        { t: "Sauvegardes de sécurité", d: "Restaurer, supprimer ou réinitialiser crée toujours d'abord une sauvegarde de sécurité : un faux geste n'est jamais la fin du monde." },
      ],
    },
    extras: {
      title: "Des mods, une galerie et quelques secrets",
      say: "Certaines de ces choses sont pour les curieux. Je ne le dirai à personne.",
      lead: "Pour les jours où vous avez envie d'aller un peu plus loin.",
      stackLabel: "Les mods sont des couches posées sur le jeu",
      stackGame: "Fichiers du jeu",
      stackMod: "Mod {n}",
      stackNote: "Quand deux mods modifient le même fichier, c'est celui placé le plus haut dans la liste qui l'emporte.",
      items: [
        { t: "Gestionnaire de mods", d: "Ajoutez des mods sous forme de dossiers ou de fichiers ZIP, mettez-les dans l'ordre et activez-les ou désactivez-les. Les mods globaux s'appliquent à tous les jeux Ren'Py, et vous pouvez lancer un jeu une fois sans mods si quelque chose ne va pas." },
        { t: "Galerie", d: "Parcourez les images, la musique et les vidéos contenues dans les archives .rpa d'un jeu." },
        { t: "Traduction en jeu", d: "Facultative. Traduisez le texte d'un jeu pendant que vous jouez. Quand elle est activée, le texte à traduire est envoyé à Google Traduction." },
        { t: "Menu de triche (bêta)", d: "Un menu de triche et quelques outils pratiques, comme le retour arrière, un compteur FPS et le déblocage de galerie." },
      ],
    },
    world: {
      title: "Dix-sept langues, aucun pistage",
      say: "Je parle dix-sept langues. J'adore bavarder, mais je ne prends pas de notes sur toi.",
      lead: "Narra suit la langue de votre appareil. Pour en choisir une autre rien que pour Narra, ouvrez l'app Réglages et allez dans Apps > Narra > Langue.",
      languagesLabel: "Narra parle",
      promises: ["Pas de compte.", "Pas de publicité.", "Pas d'outils d'analyse, pas de pistage."],
      promisesNote: "Vos jeux et vos sauvegardes restent sur votre appareil et dans votre propre iCloud.",
      lock: "Envie de garder un jeu pour vous ? Verrouillez-le avec Face ID, Touch ID ou votre code, et sa couverture reste floutée dans votre bibliothèque.",
      privacyLink: "Lire la politique de confidentialité",
    },
  },
  more: {
    label: "Index",
    title: "Et encore quelques petites choses",
    items: [
      "Tirer la bibliothèque vers le bas pour chercher de nouveaux jeux",
      "Taille, contour et police du texte en cours de jeu",
      "Défilement à deux doigts et molette à l'écran",
      "Un inspecteur de sauvegardes pour les curieux",
      "Le temps de jeu de chaque jeu",
      "Débloquer la galerie intégrée d'un jeu",
      "Un gestionnaire de stockage",
      "Des rapports d'erreur avec journaux quand un jeu plante",
      "Apparence claire et sombre",
      "Le son qui revient après un appel ou une alarme",
    ],
  },
  screens: {
    sampleNote: "Bibliothèque d’exemple. Les titres des jeux sont inventés.",
  },
  epilogue: {
    label: "Épilogue",
    title: "Gratuit, de la première à la dernière page",
    lead: "Toutes les fonctionnalités de Narra sont gratuites. Narra est l'œuvre d'un seul développeur, Emir Han Temur, et si vous souhaitez l'aider à grandir, il y a deux façons de le faire.",
    supporterTitle: "Abonnement supporter",
    supporter: "Mensuel ou annuel. Il débloque les thèmes d'arrière-plan animés, et rien d'autre.",
    tipsTitle: "Pourboires",
    tips: "Un remerciement ponctuel. Les pourboires ne débloquent rien, mais ils comptent beaucoup.",
    say: "Voilà mon histoire, pour l'instant. La suite, c'est la tienne.",
    choices: "Et maintenant ?",
    faq: "Lire les questions et réponses",
  },
  footer: {
    madeBy: "Créé par Emir Han Temur.",
    independent: "Narra est une app indépendante, qui n'est ni affiliée au projet Ren'Py ni approuvée par celui-ci.",
    trademarks: "Apple, iPhone, iPad, iCloud et App Store sont des marques d'Apple Inc.",
    email: "E-mail",
  },
  legal: {
    effective: "En vigueur à compter du {date}",
    translationNote: "Ceci est une traduction. En cas de différence avec la version anglaise, c'est la version anglaise qui fait foi.",
  },
  privacy: {
    intro: [
      "Narra est une app qui permet de jouer à des visual novels Ren'Py sur iPhone et iPad. Elle est créée par Emir Han Temur, développeur indépendant (« je », « me » et « moi » ci-dessous). Cette politique explique ce qu'il advient de vos informations lorsque vous utilisez l'app Narra et le site web playnarra.app.",
      "En bref : Narra n'a ni compte, ni publicité, ni outils d'analyse, et je ne collecte pas vos données personnelles.",
    ],
    sections: [
      {
        h: "Ce qui reste sur votre appareil",
        p: [
          "Les jeux que vous importez, leurs couvertures, vos sauvegardes, vos réglages, votre temps de jeu, vos captures d'écran, vos polices et vos mods sont stockés dans Narra, sur votre appareil. Ils ne me sont pas envoyés, et je ne peux pas les voir.",
          "Le widget Récents, les raccourcis de l'écran d'accueil et Siri lisent votre bibliothèque sur l'appareil. Si vous verrouillez un jeu avec Face ID ou Touch ID, la vérification est effectuée par votre appareil ; Narra ne voit jamais vos données biométriques.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "Si la synchronisation iCloud est activée (elle l'est par défaut), Narra copie vos sauvegardes de jeu dans votre propre iCloud Drive, pendant que vous jouez et ensuite, afin qu'elles puissent passer d'un appareil à l'autre. Les jeux eux-mêmes ne sont pas envoyés. Ces données se trouvent dans votre compte iCloud, sous le contrôle d'Apple et soumises à la politique de confidentialité d'Apple ; je n'y ai pas accès.",
          "Vous pouvez désactiver la synchronisation à tout moment dans les Réglages de Narra, sous Sauvegardes et iCloud. La désactiver ne supprime rien de ce qui se trouve déjà dans iCloud.",
        ],
      },
      {
        h: "Traduction en jeu (facultative)",
        p: [
          "La traduction reste désactivée tant que vous ne l'activez pas. Lorsque vous l'utilisez, le texte du jeu à traduire est envoyé à Google Traduction, et les règles de confidentialité de Google s'appliquent à ce texte. Narra n'y associe ni votre nom, ni votre compte, ni aucun identifiant.",
        ],
        link: { text: "Règles de confidentialité de Google", href: "https://policies.google.com/privacy?hl=fr" },
      },
      {
        h: "Rapports d'erreur et e-mails d'assistance",
        p: [
          "Quand quelque chose ne va pas, Narra peut préparer un rapport d'erreur, et Signaler un problème prépare un e-mail d'assistance. Aucun des deux n'est envoyé automatiquement : ils ne sont partagés que si vous les envoyez vous-même, par e-mail ou avec la feuille de partage.",
          "Les rapports sont anonymisés. Les chemins de fichiers sont raccourcis, et le nom de votre dossier utilisateur ainsi que les adresses e-mail sont masqués. Un rapport peut contenir le modèle de l'appareil, la version du système, la langue et la région, la version de l'app, des détails sur le jeu concerné (sa version, sa version de Ren'Py et sa taille) et des journaux récents. Il ne contient jamais le contenu de vos sauvegardes.",
          "J'utilise ce que vous m'envoyez uniquement pour vous répondre et pour corriger des problèmes, et je ne le partage avec personne.",
        ],
      },
      {
        h: "Achats",
        p: [
          "Les abonnements supporter et les pourboires sont traités par Apple via l'App Store. Je ne reçois ni votre nom, ni votre adresse e-mail, ni vos informations de paiement. Narra demande seulement à Apple si un abonnement est actif, afin de débloquer les arrière-plans animés.",
        ],
      },
      {
        h: "Pas d'outils d'analyse, de publicité ni de pistage",
        p: [
          "Narra ne contient aucun code d'analyse ou de publicité. L'app ne vous piste pas d'une app ou d'un site web à l'autre et n'utilise pas vos données à des fins publicitaires.",
        ],
      },
      {
        h: "Ce site web",
        p: [
          "playnarra.app est un site web statique hébergé sur GitHub Pages. Il n'utilise ni cookies, ni outils d'analyse, ni polices ou scripts tiers. Si vous changez de thème, votre choix est enregistré dans le stockage local de votre navigateur et ne quitte jamais votre appareil.",
          "Comme tout hébergeur web, GitHub peut traiter des données techniques, comme les adresses IP, dans ses journaux de serveur afin d'assurer la sécurité du service.",
        ],
        link: { text: "Déclaration de confidentialité de GitHub", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" },
      },
      {
        h: "Enfants",
        p: [
          "Narra ne collecte de données personnelles auprès de personne, y compris les enfants. À part sa propre courte histoire d'exemple, Narra ne contient aucun jeu ; le contenu que vous importez, et la question de savoir s'il convient à votre âge, relèvent de vous.",
        ],
      },
      {
        h: "Vos choix",
        p: [
          "Comme je ne détiens pas vos données, je n'ai rien à vous transmettre ni à supprimer. Supprimer Narra efface tout ce que l'app a stocké sur votre appareil. Les sauvegardes dans iCloud peuvent être gérées dans les réglages iCloud de votre appareil. La traduction et la synchronisation iCloud peuvent être désactivées à tout moment.",
        ],
      },
      {
        h: "Modifications",
        p: [
          "Si cette politique change, la nouvelle version sera publiée sur cette page avec une nouvelle date d'entrée en vigueur. Les changements importants seront aussi mentionnés dans les notes de version de l'app.",
        ],
      },
      {
        h: "Contact",
        p: ["Vos questions sur la confidentialité sont les bienvenues à l'adresse ci-dessous."],
      },
    ],
  },
  terms: {
    intro: [
      "Narra vous est concédé sous licence selon le Contrat de licence de l'utilisateur final (EULA) standard d'Apple pour les applications sous licence. Les remarques ci-dessous le complètent ; en cas de différence, l'EULA d'Apple prévaut.",
    ],
    eulaLink: "L'EULA standard d'Apple",
    sections: [
      {
        h: "Votre contenu",
        p: [
          "À part sa propre courte histoire d'exemple, Narra ne fournit, ne vend ni ne distribue de jeux ou tout autre contenu. Vous êtes responsable des jeux, mods, polices et fichiers que vous importez, et du fait d'avoir le droit de les utiliser.",
        ],
      },
      {
        h: "Les jeux créés par d'autres",
        p: [
          "Les jeux auxquels vous jouez dans Narra appartiennent à leurs créateurs. Narra n'est affilié ni à eux ni au projet Ren'Py, et ne peut pas promettre que chaque jeu fonctionnera.",
        ],
      },
      {
        h: "Abonnements et pourboires",
        p: [
          "Les achats sont gérés par Apple. L'abonnement supporter se renouvelle automatiquement, sauf s'il est annulé au moins 24 heures avant la fin de la période en cours ; vous pouvez le gérer ou l'annuler dans les réglages de votre compte App Store. Les pourboires sont des paiements uniques et ne débloquent rien.",
        ],
      },
      {
        h: "Traduction",
        p: ["La traduction en jeu est fournie par Google Traduction et peut ne pas toujours être exacte."],
      },
      {
        h: "Modifications",
        p: ["Ces conditions peuvent être mises à jour. La date en haut de la page indique la version en vigueur."],
      },
      {
        h: "Contact",
        p: ["Vos questions sur ces conditions sont les bienvenues à l'adresse ci-dessous."],
      },
    ],
  },
  support: {
    intro: "Des réponses aux questions fréquentes, et un moyen de joindre une vraie personne.",
    contactTitle: "Nous écrire",
    emailNote: "Bugs, questions, idées : tout est bienvenu.",
    discordTitle: "Discord",
    discordNote: "Discutez avec d'autres joueurs et suivez le développement de Narra.",
    faqTitle: "Questions et réponses",
    basicsTitle: "Avant de commencer",
    basics: [
      { q: "Narra contient-il des jeux ?", a: "Seulement une courte histoire d'exemple qui lui est propre. Narra ne vend ni ne télécharge aucun jeu ; l'app lit les jeux Ren'Py que vous avez déjà, comme les versions PC ou Mac obtenues auprès de leurs créateurs." },
      { q: "Narra est-il gratuit ?", a: "Oui, toutes les fonctionnalités sont gratuites. L'abonnement supporter facultatif ne débloque que les thèmes d'arrière-plan animés, et les pourboires ne débloquent rien." },
      { q: "Mes sauvegardes se synchronisent-elles entre mes appareils ?", a: "Oui, via votre propre iCloud, même pendant que vous jouez. Activez ou désactivez la synchronisation dans les Réglages de Narra, sous Sauvegardes et iCloud. Le développeur ne peut pas voir vos données iCloud." },
    ],
    reportTitle: "Signaler un problème",
    reportIntro: "Le plus rapide, c'est depuis l'app :",
    reportSteps: [
      "Ouvrez le menu en haut à droite de votre bibliothèque et choisissez Aide et assistance.",
      "Touchez Signaler un problème, choisissez le jeu et décrivez ce qui s'est passé.",
      "Si le jeu peut être téléchargé gratuitement, ajoutez un lien pour qu'il puisse être testé.",
      "Votre app de messagerie s'ouvre avec les détails déjà remplis. Rien n'est envoyé tant que vous ne touchez pas Envoyer.",
    ],
    reportCrash: "Si un jeu plante, Narra affiche un écran d'erreur. Utilisez Partager ou Signaler un problème depuis cet écran pour envoyer le rapport avec ses journaux.",
  },
  notFound: {
    title: "Cette page s'est égarée",
    say: "J'ai cherché partout, même derrière la lune. Cette page n'est pas là.",
    back: "Retour au début",
  },
} satisfies Dict;
