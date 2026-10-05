import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra: un lettore di visual novel Ren'Py per iPhone e iPad",
    homeDescription:
      "Narra fa girare su iPhone e iPad le visual novel Ren'Py che hai già. Tredici versioni del motore incluse, un gestore dei salvataggi con sincronizzazione iCloud, mod, una galleria e una piccola guida di nome Narra. Gratis, senza account e senza tracciamento.",
    privacyTitle: "Informativa sulla privacy",
    privacyDescription:
      "Cosa fa Narra con le tue informazioni: niente account, niente pubblicità, niente analisi. I tuoi giochi e i tuoi salvataggi restano sul tuo dispositivo e nel tuo iCloud.",
    supportTitle: "Aiuto e supporto",
    supportDescription:
      "Risposte alle domande più comuni su Narra, come segnalare un problema e come contattare lo sviluppatore via email o su Discord.",
    termsTitle: "Condizioni d'uso",
    termsDescription:
      "Le condizioni per usare Narra: il contratto di licenza standard di Apple, più qualche nota sui contenuti che porti e sugli acquisti.",
    notFoundTitle: "Pagina non trovata",
    ogAlt: "Narra, una piccola guida luminosa, che fa capolino dal bordo accanto al nome dell'app",
  },
  nav: {
    skip: "Vai al contenuto",
    home: "Home di Narra",
    support: "Supporto",
    privacy: "Privacy",
    terms: "Condizioni",
    language: "Lingua",
    toLight: "Passa al tema chiaro",
    toDark: "Passa al tema scuro",
    contents: "Indice",
  },
  langSuggest: {
    message: "Questa pagina è disponibile anche in italiano.",
    action: "Leggi in italiano",
    dismiss: "Chiudi",
  },
  cta: {
    appStore: "Scarica su App Store",
    comingSoon: "Presto su App Store",
    discord: "Seguici su Discord",
  },
  hero: {
    eyebrow: "Lettore di visual novel per iPhone e iPad",
    dialogueLabel: "Narra si presenta",
    lines: [
      "Oh, ciao. Sono Narra.",
      "Porta i tuoi giochi. Al resto ci penso io.",
      "Cartelle, file ZIP, salvataggi, perfino la versione giusta di Ren'Py per ogni gioco. Tengo io il conto di tutto.",
      "Scorri giù quando sei pronto. Ti racconto tutta la storia.",
    ],
    next: "Battuta successiva",
    begin: "Inizia la storia",
    compat: "Per giochi creati con Ren'Py dalla 7.4 alla 8.6. A parte una breve storia di esempio, Narra non include giochi: i tuoi li porti tu.",
    sceneAlt: "Narra che fluttua sopra un paese addormentato di notte, leggendo un libro luminoso",
  },
  chapters: {
    arrive: {
      title: "Porta le tue storie",
      say: "Non vendo giochi. Porta quelli che hai già, e io li faccio sentire a casa. Non hai ancora niente da giocare? Ho portato una breve storia tutta mia.",
      lead: "Aggiungi un gioco Ren'Py dall'app File come cartella o come archivio ZIP, RAR o 7z, anche se è diviso in più parti. Funzionano anche gli archivi RAR e 7z protetti da password, e i giochi Ren'Py impacchettati per Android (APK).",
      pathLabel: "Oppure lascia un gioco qui e Narra lo trova da sola:",
      path: ["File", "Sul mio iPhone", "Narra", "Games"],
      items: [
        { t: "Una prima storia da provare", d: "Con Narra arriva una breve storia di esempio, così puoi provare tutto prima di aggiungere i tuoi giochi." },
        { t: "Raccolte, ricerca e stato", d: "Raggruppa i giochi a modo tuo e trascinali al loro posto. Trovali per nome, tra i preferiti o in base a quello che stai giocando." },
        { t: "Aggiornamenti che conservano i salvataggi", d: "Aggiungi una versione più recente di un gioco, oppure scegli Aggiorna gioco nelle sue impostazioni. I tuoi salvataggi restano dove sono." },
        { t: "Copertine trovate per te", d: "Narra prende una copertina dalle immagini del gioco stesso. Puoi sempre sceglierne una tua." },
      ],
    },
    engine: {
      title: "Il motore giusto per ogni gioco",
      say: "Ogni gioco è stato creato con un Ren'Py ben preciso. Io ne porto con me tredici, così ogni gioco ha quello che si aspetta.",
      lead: "Narra include Ren'Py dalla 7.4.11 alla 8.6. Legge ogni gioco, sceglie da sola il motore adatto e non ha bisogno della cartella renpy del gioco. Se ne sai di più, puoi cambiarlo nella pagina del gioco.",
      timelineLabel: "Versioni di Ren'Py incluse in Narra",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "versione di anteprima",
      items: [
        { t: "Una linea del tempo dei motori", d: "Vedi in ordine tutte le versioni incluse, con quale è stato creato il gioco e quale ha scelto Narra." },
        { t: "Varianti di schermo", d: "Di' a un gioco che gira su un telefono, un tablet, un computer o una TV, e potrà passare al layout pensato per quel dispositivo." },
        { t: "Impostazioni per un solo gioco", d: "Velocità del testo, font, orientamento e altro possono seguire le impostazioni generali o valere per un solo gioco." },
        { t: "I tuoi font", d: "Aggiungi font per tutti i giochi o solo per uno." },
      ],
    },
    helper: {
      title: "Un'amica sul bordo dello schermo",
      say: "Mentre leggi, mi aggrappo al bordo dello schermo e sto zitta. Quasi sempre.",
      lead: "Narra aspetta a lato del gioco, senza dare fastidio. L'arco che la circonda si riempie man mano che vai avanti nella storia. Toccala per aprire il menu o trascinala su un altro bordo.",
      bubblesLabel: "Cose che Narra potrebbe dire",
      bubblesNote: "I suoi suggerimenti sono facoltativi. Se li disattivi, se ne sta per conto suo.",
      barLabel: "La barra compatta",
      bar: { rewind: "Torna indietro", skip: "Salta", hide: "Nascondi riquadro di testo", keyboard: "Tastiera" },
      items: [
        { t: "Una barra compatta su misura", d: "Torna indietro, salta, nascondi il riquadro di testo o apri la tastiera da una piccola barra. Spostala, ridimensionala, rendila più trasparente e scegli fino a cinque pulsanti." },
        { t: "Schermata di pausa", d: "Quanto hai letto, quanto hai giocato, impostazioni rapide e tutti gli strumenti in un solo posto." },
        { t: "Salvataggio e caricamento rapidi", d: "Un tocco, e Narra ti fa sapere che è fatto." },
        { t: "Screenshot", d: "Conserva una scena che ti piace. Ogni gioco ha la sua galleria di screenshot nelle impostazioni, e le immagini sono anche nell'app File." },
      ],
    },
    controls: {
      title: "Gioca a modo tuo",
      say: "Sul divano, in treno, alla scrivania. Porta un controller, se vuoi. A me va bene.",
      lead: "Narra si adatta a come tieni il dispositivo, a cosa usi per giocare e a come ti piace iniziare.",
      widgetLabel: "Il widget Recenti nella schermata Home",
      items: [
        { t: "Controller e tastiere", d: "Abbina un controller e scegli cosa fa ogni pulsante, oppure usa una tastiera con i soliti tasti di Ren'Py e le abbreviazioni per gli strumenti di Narra." },
        { t: "Verticale su iPhone", d: "Tieni l'iPhone in verticale e continua a leggere, oppure lascia che il gioco ruoti con te." },
        { t: "Una tastiera tutta sua", d: "Quando un gioco ti chiede di scrivere un nome, Narra porta una tastiera in tono con il gioco." },
        { t: "Direttamente dalla schermata Home", d: "Tieni premuta l'icona di Narra per continuare, avvia un gioco con Siri o Comandi Rapidi, oppure aggiungi il widget Recenti." },
      ],
    },
    saves: {
      title: "Salvataggi di cui ti puoi fidare",
      say: "Prima di cambiare o eliminare qualsiasi cosa, faccio un backup di sicurezza. Vecchia abitudine.",
      lead: "Ogni gioco ha il suo gestore dei salvataggi. Vedi ogni salvataggio con il suo screenshot, fanne il backup, esportali, ripristinali o ricomincia da capo.",
      cardsLabel: "Slot di salvataggio nel gestore dei salvataggi, sincronizzati con iCloud",
      items: [
        { t: "Sincronizzazione iCloud, anche mentre giochi", d: "I salvataggi viaggiano tra il tuo iPhone e il tuo iPad attraverso il tuo iCloud. Narra carica le modifiche mentre giochi e di nuovo quando passi a un'altra app." },
        { t: "Backup", d: "Fai il backup di un gioco o di tutti insieme, e Narra conserva una copia aggiornata ogni volta che si apre un gioco. Gli archivi ZIP sono nell'app File." },
        { t: "Importa ed esporta", d: "Porta i salvataggi da un computer o da un altro dispositivo. Se uno slot è occupato, decidi tu: mantenere entrambi, sostituire o saltare." },
        { t: "Backup di sicurezza", d: "Ripristinare, eliminare o reimpostare crea sempre prima un backup di sicurezza, così un tocco sbagliato non è la fine." },
      ],
    },
    extras: {
      title: "Mod, una galleria e qualche segreto",
      say: "Alcune di queste cose sono per i curiosi. Non lo dirò a nessuno.",
      lead: "Per i giorni in cui vuoi spingerti un po' più in là.",
      stackLabel: "Le mod sono livelli sopra il gioco",
      stackGame: "File del gioco",
      stackMod: "Mod {n}",
      stackNote: "Se due mod modificano lo stesso file, vince quella più in alto nell'elenco.",
      items: [
        { t: "Gestore mod", d: "Aggiungi le mod come cartelle o file ZIP, mettile in ordine e attivale o disattivale. Le mod globali valgono per tutti i giochi Ren'Py, e se qualcosa non va puoi avviare un gioco una volta senza mod." },
        { t: "Galleria", d: "Sfoglia le immagini, la musica e i video racchiusi negli archivi .rpa di un gioco." },
        { t: "Traduzione nel gioco", d: "Facoltativa. Traduci il testo di un gioco mentre giochi. Quando è attiva, il testo da tradurre viene inviato a Google Traduttore." },
        { t: "Menu trucchi (beta)", d: "Un menu trucchi e qualche strumento utile, come il ritorno indietro, un contatore di FPS e uno sblocco della galleria." },
      ],
    },
    world: {
      title: "Diciassette lingue, niente da tracciare",
      say: "Parlo diciassette lingue. Mi piace chiacchierare, ma non prendo appunti su di te.",
      lead: "Narra usa la lingua del tuo dispositivo. Per sceglierne un'altra solo per Narra, apri l'app Impostazioni e vai su App > Narra > Lingua.",
      languagesLabel: "Narra parla",
      promises: ["Niente account.", "Niente pubblicità.", "Niente analisi, niente tracciamento."],
      promisesNote: "I tuoi giochi e i tuoi salvataggi restano sul tuo dispositivo e nel tuo iCloud.",
      lock: "Vuoi tenere un gioco riservato? Bloccalo con Face ID, Touch ID o il codice, e la sua copertina resta sfocata nella libreria.",
      privacyLink: "Leggi l'informativa sulla privacy",
    },
  },
  more: {
    label: "Indice",
    title: "E qualche altra cosa",
    items: [
      "Ricerca di nuovi giochi trascinando giù la libreria",
      "Dimensione, contorno e font del testo mentre giochi",
      "Scorrimento con due dita e rotella di scorrimento sullo schermo",
      "Un ispettore dei salvataggi per i curiosi",
      "Tempo di gioco per ogni gioco",
      "Sblocco della galleria del gioco",
      "Gestione spazio",
      "Rapporti di errore con i registri se un gioco si blocca",
      "Aspetto chiaro e scuro",
      "Audio che ritorna dopo una chiamata o una sveglia",
    ],
  },
  screens: {
    sampleNote: "Libreria di esempio. I titoli dei giochi sono inventati.",
  },
  epilogue: {
    label: "Epilogo",
    title: "Gratis, dalla prima all'ultima pagina",
    lead: "Tutte le funzioni di Narra sono gratuite. Narra è fatta da un solo sviluppatore, Emir Han Temur, e se vuoi aiutarla a crescere, ci sono due modi.",
    supporterTitle: "Abbonamento sostenitore",
    supporter: "Mensile o annuale. Sblocca i temi di sfondo animati, e non sblocca nient'altro.",
    tipsTitle: "Mance",
    tips: "Un ringraziamento una tantum. Le mance non sbloccano nulla, ma significano molto.",
    say: "Questa è la mia storia, finora. Adesso tocca alla tua.",
    choices: "E adesso?",
    faq: "Leggi domande e risposte",
  },
  footer: {
    madeBy: "Creata da Emir Han Temur.",
    independent: "Narra è un'app indipendente e non è affiliata al progetto Ren'Py né approvata da esso.",
    trademarks: "Apple, iPhone, iPad, iCloud e App Store sono marchi di Apple Inc.",
    email: "Email",
  },
  legal: {
    effective: "Data di entrata in vigore: {date}",
    translationNote: "Questo testo è una traduzione. In caso di differenze con la versione inglese, prevale la versione inglese.",
  },
  privacy: {
    intro: [
      "Narra è un'app per giocare alle visual novel Ren'Py su iPhone e iPad. È creata da Emir Han Temur, uno sviluppatore indipendente (di seguito «io»). Questa informativa spiega cosa succede alle tue informazioni quando usi l'app Narra e il sito playnarra.app.",
      "In breve: Narra non ha account, pubblicità né analisi, e io non raccolgo i tuoi dati personali.",
    ],
    sections: [
      {
        h: "Cosa resta sul tuo dispositivo",
        p: [
          "I giochi che importi, le loro copertine, i tuoi salvataggi, le impostazioni, il tempo di gioco, gli screenshot, i font e le mod sono conservati all'interno di Narra sul tuo dispositivo. Non vengono inviati a me e io non posso vederli.",
          "Il widget Recenti, le scorciatoie della schermata Home e Siri leggono la tua libreria sul dispositivo. Se blocchi un gioco con Face ID o Touch ID, la verifica viene fatta dal tuo dispositivo; Narra non vede mai i tuoi dati biometrici.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "Se la sincronizzazione iCloud è attiva (lo è per impostazione predefinita), Narra copia i salvataggi dei tuoi giochi nel tuo iCloud Drive, mentre giochi e dopo, così possono passare da un dispositivo all'altro. I giochi in sé non vengono caricati. Questi dati si trovano nel tuo account iCloud, sotto il controllo di Apple e soggetti all'informativa sulla privacy di Apple; io non vi ho accesso.",
          "Puoi disattivare la sincronizzazione in qualsiasi momento nelle Impostazioni di Narra, in Salvataggi e iCloud. Disattivarla non elimina nulla di ciò che è già in iCloud.",
        ],
      },
      {
        h: "Traduzione nel gioco (facoltativa)",
        p: [
          "La traduzione resta disattivata finché non la attivi. Quando la usi, il testo del gioco da tradurre viene inviato a Google Traduttore, e a quel testo si applica l'informativa sulla privacy di Google. Narra non vi aggiunge il tuo nome, il tuo account né alcun identificativo.",
        ],
        link: { text: "Norme sulla privacy di Google", href: "https://policies.google.com/privacy?hl=it" },
      },
      {
        h: "Segnalazioni di errore ed email al supporto",
        p: [
          "Quando qualcosa va storto, Narra può preparare una segnalazione di errore, e Segnala un problema prepara un'email per il supporto. Nessuna delle due viene inviata automaticamente: vengono condivise solo se sei tu a inviarle, via email o con il menu Condividi.",
          "Le segnalazioni sono rese anonime. I percorsi dei file vengono accorciati, e il nome della tua cartella utente e gli indirizzi email vengono nascosti. Una segnalazione può includere il modello del dispositivo, la versione del sistema, la lingua e la regione, la versione dell'app, i dettagli del gioco interessato (la sua versione, la versione di Ren'Py e le dimensioni) e i registri recenti. Non include mai il contenuto dei tuoi salvataggi.",
          "Uso ciò che mi invii solo per risponderti e per risolvere i problemi, e non lo condivido con nessuno.",
        ],
      },
      {
        h: "Acquisti",
        p: [
          "Gli abbonamenti sostenitore e le mance sono gestiti da Apple tramite App Store. Io non ricevo il tuo nome, il tuo indirizzo email né i tuoi dati di pagamento. Narra chiede ad Apple soltanto se c'è un abbonamento attivo, per sbloccare gli sfondi animati.",
        ],
      },
      {
        h: "Niente analisi, pubblicità o tracciamento",
        p: [
          "Narra non contiene codice di analisi o pubblicitario. Non ti traccia tra app o siti web e non usa i tuoi dati a fini pubblicitari.",
        ],
      },
      {
        h: "Questo sito",
        p: [
          "playnarra.app è un sito statico ospitato su GitHub Pages. Non usa cookie, analisi, né font o script di terze parti. Se cambi il tema, la tua scelta viene salvata nell'archiviazione locale del browser e non lascia mai il tuo dispositivo.",
          "Come qualsiasi servizio di hosting, GitHub può trattare dati tecnici, come gli indirizzi IP, nei registri dei suoi server per mantenere sicuro il servizio.",
        ],
        link: { text: "Informativa sulla privacy di GitHub", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" },
      },
      {
        h: "Minori",
        p: [
          "Narra non raccoglie dati personali da nessuno, minori compresi. A parte la sua breve storia di esempio, Narra non include giochi; i contenuti che importi, e se siano adatti alla tua età, dipendono da te.",
        ],
      },
      {
        h: "Le tue scelte",
        p: [
          "Poiché non conservo i tuoi dati, non c'è nulla che io possa consegnare o eliminare. Eliminare Narra rimuove tutto ciò che ha conservato sul tuo dispositivo. I salvataggi in iCloud si possono gestire nelle impostazioni iCloud del dispositivo. La traduzione e la sincronizzazione iCloud si possono disattivare in qualsiasi momento.",
        ],
      },
      {
        h: "Modifiche",
        p: [
          "Se questa informativa cambia, la nuova versione sarà pubblicata in questa pagina con una nuova data di entrata in vigore. Le modifiche importanti saranno indicate anche nelle note di versione dell'app.",
        ],
      },
      {
        h: "Contatti",
        p: ["Per domande sulla privacy, scrivi pure all'indirizzo qui sotto."],
      },
    ],
  },
  terms: {
    intro: [
      "Narra ti viene concessa in licenza in base al Contratto di licenza con l'utente finale per le applicazioni concesse in licenza standard di Apple (EULA). Le note che seguono lo integrano; in caso di differenze, prevale l'EULA di Apple.",
    ],
    eulaLink: "EULA standard di Apple",
    sections: [
      {
        h: "I tuoi contenuti",
        p: [
          "A parte la sua breve storia di esempio, Narra non fornisce, vende né distribuisce giochi o altri contenuti. Sei responsabile dei giochi, delle mod, dei font e dei file che importi, e di avere il diritto di usarli.",
        ],
      },
      {
        h: "Giochi creati da altri",
        p: [
          "I giochi a cui giochi in Narra appartengono ai loro creatori. Narra non è affiliata a loro né al progetto Ren'Py, e non può garantire che ogni gioco funzioni.",
        ],
      },
      {
        h: "Abbonamenti e mance",
        p: [
          "Gli acquisti sono gestiti da Apple. L'abbonamento sostenitore si rinnova automaticamente, a meno che non venga annullato almeno 24 ore prima della fine del periodo in corso; puoi gestirlo o annullarlo nelle impostazioni del tuo account App Store. Le mance sono pagamenti una tantum e non sbloccano nulla.",
        ],
      },
      {
        h: "Traduzione",
        p: ["La traduzione nel gioco è fornita da Google Traduttore e potrebbe non essere sempre accurata."],
      },
      {
        h: "Modifiche",
        p: ["Queste condizioni possono essere aggiornate. La data in alto indica la versione in vigore."],
      },
      {
        h: "Contatti",
        p: ["Per domande su queste condizioni, scrivi pure all'indirizzo qui sotto."],
      },
    ],
  },
  support: {
    intro: "Risposte alle domande più comuni e un modo per parlare con una persona vera.",
    contactTitle: "Scrivici",
    emailNote: "Bug, domande, idee: tutto è benvenuto.",
    discordTitle: "Discord",
    discordNote: "Chiacchiera con altri giocatori e segui lo sviluppo di Narra.",
    faqTitle: "Domande e risposte",
    basicsTitle: "Prima di iniziare",
    basics: [
      { q: "Narra include dei giochi?", a: "Solo una sua breve storia di esempio. Narra non vende e non scarica giochi; fa girare i giochi Ren'Py che hai già, come le versioni per PC o Mac che hai ottenuto dai loro creatori." },
      { q: "Narra è gratis?", a: "Sì, tutte le funzioni sono gratuite. L'abbonamento sostenitore, facoltativo, sblocca solo i temi di sfondo animati, e le mance non sbloccano nulla." },
      { q: "I miei salvataggi si sincronizzano tra dispositivi?", a: "Sì, tramite il tuo iCloud, anche mentre giochi. Puoi attivarla o disattivarla nelle Impostazioni di Narra, in Salvataggi e iCloud. Lo sviluppatore non può vedere i tuoi dati iCloud." },
    ],
    reportTitle: "Segnalare un problema",
    reportIntro: "Il modo più rapido è dall'app stessa:",
    reportSteps: [
      "Apri il menu in alto a destra nella libreria e scegli Aiuto e supporto.",
      "Tocca Segnala un problema, scegli il gioco e descrivi cosa è successo.",
      "Se il gioco si può scaricare gratuitamente, aggiungi un link così si può provare.",
      "Si apre la tua app di posta con i dettagli già compilati. Non viene inviato nulla finché non tocchi Invia.",
    ],
    reportCrash: "Se un gioco si blocca, Narra mostra una schermata di errore. Usa lì Condividi o Segnala un problema per inviare la segnalazione con i suoi registri.",
  },
  notFound: {
    title: "Questa pagina si è persa",
    say: "Ho cercato dappertutto, perfino dietro la luna. Questa pagina non è qui.",
    back: "Torna all'inizio",
  },
} satisfies Dict;
