import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra: un reproductor de novelas visuales de Ren'Py para iPhone y iPad",
    homeDescription:
      "Narra reproduce en iPhone y iPad las novelas visuales de Ren'Py que ya tienes. Trece versiones del motor incluidas, un gestor de partidas con sincronización con iCloud, mods, una galería y una pequeña guía llamada Narra. Gratis, sin cuenta y sin rastreo.",
    privacyTitle: "Política de privacidad",
    privacyDescription:
      "Qué hace Narra con tu información: sin cuenta, sin anuncios, sin analíticas. Tus juegos y tus partidas se quedan en tu dispositivo y en tu propio iCloud.",
    supportTitle: "Ayuda y soporte",
    supportDescription:
      "Respuestas a las preguntas frecuentes sobre Narra, cómo informar de un problema y cómo contactar con el desarrollador por correo o en Discord.",
    termsTitle: "Condiciones de uso",
    termsDescription:
      "Las condiciones para usar Narra: el contrato de licencia estándar de Apple y algunas notas sobre el contenido que traes y sobre las compras.",
    notFoundTitle: "Página no encontrada",
    ogAlt: "Narra, una pequeña guía luminosa, asomándose desde el borde junto al nombre de la app",
  },
  nav: {
    skip: "Saltar al contenido",
    home: "Inicio de Narra",
    support: "Soporte",
    privacy: "Privacidad",
    terms: "Condiciones",
    language: "Idioma",
    toLight: "Cambiar al tema claro",
    toDark: "Cambiar al tema oscuro",
    contents: "Contenido",
  },
  langSuggest: {
    message: "Esta página también está disponible en español.",
    action: "Leer en español",
    dismiss: "Cerrar",
  },
  cta: {
    appStore: "Descárgalo en el App Store",
    comingSoon: "Próximamente en el App Store",
    discord: "Síguenos en Discord",
  },
  hero: {
    eyebrow: "Reproductor de novelas visuales para iPhone y iPad",
    dialogueLabel: "Narra se presenta",
    lines: [
      "Ah, hola. Soy Narra.",
      "Trae tus juegos. Yo me encargo del resto.",
      "Carpetas, archivos ZIP, partidas, hasta la versión de Ren'Py adecuada para cada juego. Yo llevo la cuenta de todo.",
      "Baja cuando quieras. Te contaré toda la historia.",
    ],
    next: "Siguiente línea",
    begin: "Empezar la historia",
    compat: "Para juegos hechos con Ren'Py 7.4 a 8.6. Salvo una breve historia de ejemplo, Narra no incluye juegos; los traes tú.",
    sceneAlt: "Narra flotando sobre un pueblo dormido de noche, leyendo un libro que brilla",
  },
  chapters: {
    arrive: {
      title: "Trae tus propias historias",
      say: "No vendo juegos. Trae los que ya tienes y yo haré que se sientan como en casa. ¿Aún no tienes nada para jugar? Traje una pequeña historia mía.",
      lead: "Añade un juego de Ren'Py desde la app Archivos como carpeta o como archivo ZIP, RAR o 7z, incluso si está dividido en partes. También funcionan los archivos RAR y 7z protegidos con contraseña, y los juegos de Ren'Py empaquetados para Android (APK).",
      pathLabel: "O deja un juego aquí y Narra lo encontrará por sí sola:",
      path: ["Archivos", "En mi iPhone", "Narra", "Games"],
      items: [
        { t: "Una primera historia para probar", d: "Con Narra viene una breve historia de ejemplo, para que puedas probarlo todo antes de añadir tus propios juegos." },
        { t: "Colecciones, búsqueda y estado", d: "Agrupa los juegos a tu manera y arrástralos a su sitio. Encuentra cualquiera por su nombre, por favoritos o por lo que estás jugando." },
        { t: "Actualizaciones que conservan tus partidas", d: "Añade una versión más reciente de un juego o elige Actualizar juego en sus ajustes. Tus partidas se quedan donde están." },
        { t: "Portadas sin esfuerzo", d: "Narra toma una portada de las propias imágenes del juego. Siempre puedes elegir la tuya." },
      ],
    },
    engine: {
      title: "El motor adecuado para cada juego",
      say: "Cada juego se hizo con un Ren'Py concreto. Yo llevo trece, así que cada juego recibe el que espera.",
      lead: "Narra incluye Ren'Py desde 7.4.11 hasta 8.6. Lee cada juego, elige por sí sola el motor que le corresponde y no necesita la carpeta renpy del propio juego. Si sabes más, cámbialo en la página del juego.",
      timelineLabel: "Versiones de Ren'Py incluidas en Narra",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "versión preliminar",
      items: [
        { t: "Una línea de tiempo de motores", d: "Mira todas las versiones incluidas en orden, con cuál se hizo el juego y cuál eligió Narra." },
        { t: "Variantes de pantalla", d: "Dile a un juego que se ejecuta en un teléfono, una tableta, un ordenador o una tele, y podrá pasar al diseño pensado para ello." },
        { t: "Ajustes para un solo juego", d: "La velocidad del texto, las fuentes, la orientación y más pueden seguir tus ajustes generales o aplicarse a un solo juego." },
        { t: "Tus propias fuentes", d: "Añade fuentes para todos los juegos o solo para uno." },
      ],
    },
    helper: {
      title: "Una amiga en el borde de la pantalla",
      say: "Mientras lees, me agarro al borde de la pantalla y no digo nada. Casi siempre.",
      lead: "Narra espera a un lado del juego, sin estorbar. El arco que la rodea se llena a medida que avanzas en la historia. Tócala para abrir el menú o arrástrala a otro borde.",
      bubblesLabel: "Cosas que Narra podría decir",
      bubblesNote: "Sus sugerencias son opcionales. Si las desactivas, no dice nada.",
      barLabel: "La barra compacta",
      bar: { rewind: "Retroceder", skip: "Saltar", hide: "Ocultar cuadro de texto", keyboard: "Teclado" },
      items: [
        { t: "Una barra compacta a tu medida", d: "Retrocede, salta, oculta el cuadro de texto o abre el teclado desde una barra pequeña. Muévela, cambia su tamaño, hazla más transparente y elige hasta cinco botones." },
        { t: "Pantalla de pausa", d: "Cuánto has leído, cuánto tiempo llevas jugando, ajustes rápidos y todas las herramientas en un solo lugar." },
        { t: "Guardado y carga rápidos", d: "Un toque, y Narra te avisa de que está hecho." },
        { t: "Capturas de pantalla", d: "Guarda una escena que te guste. Cada juego tiene su propia galería de capturas en sus ajustes, y las imágenes también están en la app Archivos." },
      ],
    },
    controls: {
      title: "Juega a tu manera",
      say: "En el sofá, en el tren, en el escritorio. Trae un mando si quieres. A mí no me molesta.",
      lead: "Narra se adapta a cómo sostienes tu dispositivo, a lo que usas para jugar y a cómo te gusta empezar.",
      widgetLabel: "El widget Recientes en la pantalla de inicio",
      items: [
        { t: "Mandos y teclados", d: "Conecta un mando y elige qué hace cada botón, o usa un teclado con las teclas habituales de Ren'Py y atajos para las herramientas de Narra." },
        { t: "Vertical en iPhone", d: "Sostén el iPhone en vertical y sigue leyendo, o deja que el juego gire contigo." },
        { t: "Un teclado propio", d: "Cuando un juego te pide escribir un nombre, Narra trae un teclado que encaja con el juego." },
        { t: "Directamente desde la pantalla de inicio", d: "Mantén pulsado el icono de Narra para continuar, inicia un juego con Siri o Atajos, o añade el widget Recientes." },
      ],
    },
    saves: {
      title: "Partidas en las que puedes confiar",
      say: "Antes de cambiar o borrar nada, hago una copia de seguridad. Costumbre de toda la vida.",
      lead: "Cada juego tiene su propio gestor de partidas. Mira cada partida con su captura, haz copias, expórtalas, restáuralas o empieza de cero.",
      cardsLabel: "Ranuras del gestor de partidas, sincronizadas con iCloud",
      items: [
        { t: "Sincronización con iCloud, incluso mientras juegas", d: "Tus partidas viajan entre tu iPhone y tu iPad a través de tu propio iCloud. Narra sube los cambios mientras juegas y otra vez cuando cambias a otra app." },
        { t: "Copias", d: "Haz copia de un juego o de todos a la vez, y Narra guarda una copia nueva cada vez que se abre un juego. Los archivos ZIP están en la app Archivos." },
        { t: "Importar y exportar", d: "Trae partidas desde un ordenador u otro dispositivo. Si una ranura está ocupada, tú decides: conservar ambas, reemplazar u omitir." },
        { t: "Copias de seguridad previas", d: "Restaurar, eliminar o restablecer siempre crea antes una copia de seguridad, así que un toque equivocado no es el final." },
      ],
    },
    extras: {
      title: "Mods, una galería y algún que otro secreto",
      say: "Algunas de estas cosas son para curiosos. No se lo diré a nadie.",
      lead: "Para los días en que quieres ir un poco más allá.",
      stackLabel: "Los mods son capas sobre el juego",
      stackGame: "Archivos del juego",
      stackMod: "Mod {n}",
      stackNote: "Si dos mods cambian el mismo archivo, gana el que está más arriba en la lista.",
      items: [
        { t: "Gestor de mods", d: "Añade mods como carpetas o archivos ZIP, ordénalos y actívalos o desactívalos. Los mods globales se aplican a todos los juegos de Ren'Py, y si algo falla puedes iniciar un juego una vez sin mods." },
        { t: "Galería", d: "Explora las imágenes, la música y los vídeos guardados dentro de los archivos .rpa de un juego." },
        { t: "Traducción en el juego", d: "Opcional. Traduce el texto de un juego mientras juegas. Cuando está activada, el texto que se traduce se envía a Google Traductor." },
        { t: "Menú de trucos (beta)", d: "Un menú de trucos y algunas herramientas útiles, como retroceder, un contador de FPS y un desbloqueador de galería." },
      ],
    },
    world: {
      title: "Diecisiete idiomas, nada que rastrear",
      say: "Hablo diecisiete idiomas. Me encanta charlar, pero no tomo notas sobre ti.",
      lead: "Narra usa el idioma de tu dispositivo. Para elegir otro solo para Narra, abre la app Ajustes y ve a Apps > Narra > Idioma.",
      languagesLabel: "Narra habla",
      promises: ["Sin cuenta.", "Sin anuncios.", "Sin analíticas ni rastreo."],
      promisesNote: "Tus juegos y tus partidas se quedan en tu dispositivo y en tu propio iCloud.",
      lock: "¿Quieres que un juego quede en privado? Bloquéalo con Face ID, Touch ID o tu código, y su portada se verá borrosa en tu biblioteca.",
      privacyLink: "Leer la política de privacidad",
    },
  },
  more: {
    label: "Índice",
    title: "Y unas cuantas cosas más",
    items: [
      "Buscar juegos nuevos deslizando hacia abajo en la biblioteca",
      "Tamaño, contorno y fuente del texto mientras juegas",
      "Desplazamiento con dos dedos y rueda de desplazamiento en pantalla",
      "Un inspector de partidas para curiosos",
      "Tiempo jugado en cada juego",
      "Desbloquear la galería propia de un juego",
      "Un gestor de almacenamiento",
      "Informes de error con registros cuando un juego se cierra inesperadamente",
      "Apariencia clara y oscura",
      "Sonido que vuelve tras una llamada o una alarma",
    ],
  },
  epilogue: {
    label: "Epílogo",
    title: "Gratis, de la primera página a la última",
    lead: "Todas las funciones de Narra son gratis. Narra la hace un solo desarrollador, Emir Han Temur, y si quieres ayudar a que crezca, hay dos maneras.",
    supporterTitle: "Suscripción de colaborador",
    supporter: "Mensual o anual. Desbloquea los temas de fondo animados, y eso es todo lo que desbloquea.",
    tipsTitle: "Propinas",
    tips: "Un agradecimiento único. Las propinas no desbloquean nada, pero significan mucho.",
    say: "Esa es mi historia hasta ahora. La siguiente es la tuya.",
    choices: "¿Y ahora qué?",
    faq: "Leer las preguntas y respuestas",
  },
  footer: {
    madeBy: "Hecho por Emir Han Temur.",
    independent: "Narra es una app independiente y no está afiliada al proyecto Ren'Py ni cuenta con su respaldo.",
    trademarks: "Apple, iPhone, iPad, iCloud y App Store son marcas comerciales de Apple Inc.",
    email: "Correo",
  },
  legal: {
    effective: "Fecha de entrada en vigor: {date}",
    translationNote: "Este texto es una traducción. Si hay alguna diferencia con la versión en inglés, prevalece la versión en inglés.",
  },
  privacy: {
    intro: [
      "Narra es una app para jugar novelas visuales de Ren'Py en iPhone y iPad. La hace Emir Han Temur, un desarrollador independiente («yo» en adelante). Esta política explica qué pasa con tu información cuando usas la app Narra y el sitio web playnarra.app.",
      "En resumen: Narra no tiene cuentas, ni anuncios, ni analíticas, y no recopilo tus datos personales.",
    ],
    sections: [
      {
        h: "Lo que se queda en tu dispositivo",
        p: [
          "Los juegos que importas, sus portadas, tus partidas, tus ajustes, tu tiempo de juego, tus capturas, tus fuentes y tus mods se guardan dentro de Narra en tu dispositivo. No se me envían y no puedo verlos.",
          "El widget Recientes, los accesos directos de la pantalla de inicio y Siri leen tu biblioteca en el dispositivo. Si bloqueas un juego con Face ID o Touch ID, la comprobación la hace tu dispositivo; Narra nunca ve tus datos biométricos.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "Si la sincronización con iCloud está activada (lo está por defecto), Narra copia tus partidas en tu propio iCloud Drive, mientras juegas y después, para que puedan pasar de un dispositivo a otro. Los juegos en sí no se suben. Estos datos están en tu cuenta de iCloud, bajo el control de Apple y sujetos a la política de privacidad de Apple; yo no tengo acceso a ellos.",
          "Puedes desactivar la sincronización cuando quieras en los Ajustes de Narra, en Partidas e iCloud. Desactivarla no elimina nada de lo que ya está en iCloud.",
        ],
      },
      {
        h: "Traducción en el juego (opcional)",
        p: [
          "La traducción está desactivada hasta que la actives. Cuando la usas, el texto del juego que se traduce se envía a Google Traductor, y a ese texto se le aplica la política de privacidad de Google. Narra no le añade tu nombre, tu cuenta ni ningún identificador.",
        ],
        link: { text: "Política de privacidad de Google", href: "https://policies.google.com/privacy?hl=es" },
      },
      {
        h: "Informes de errores y correos de soporte",
        p: [
          "Cuando algo sale mal, Narra puede preparar un informe de error, e Informar de un problema prepara un correo de soporte. Ninguno de los dos se envía automáticamente: solo se comparten si los envías tú, por correo o con el menú Compartir.",
          "Los informes se anonimizan. Las rutas de archivo se acortan, y el nombre de tu carpeta de usuario y las direcciones de correo se ocultan. Un informe puede incluir el modelo del dispositivo, la versión del sistema, el idioma y la región, la versión de la app, detalles del juego afectado (su versión, su versión de Ren'Py y su tamaño) y registros recientes. Nunca incluye el contenido de tus partidas.",
          "Uso lo que me envías solo para responderte y para corregir problemas, y no lo comparto con nadie.",
        ],
      },
      {
        h: "Compras",
        p: [
          "Las suscripciones de colaborador y las propinas las procesa Apple a través del App Store. Yo no recibo tu nombre, tu dirección de correo ni tus datos de pago. Narra solo le pregunta a Apple si hay una suscripción activa, para desbloquear los fondos animados.",
        ],
      },
      {
        h: "Sin analíticas, anuncios ni rastreo",
        p: [
          "Narra no contiene código de analíticas ni de publicidad. No te rastrea entre apps ni sitios web y no usa tus datos con fines publicitarios.",
        ],
      },
      {
        h: "Este sitio web",
        p: [
          "playnarra.app es un sitio web estático alojado en GitHub Pages. No usa cookies, ni analíticas, ni fuentes o scripts de terceros. Si cambias el tema, tu elección se guarda en el almacenamiento local de tu navegador y nunca sale de tu dispositivo.",
          "Como cualquier servicio de alojamiento web, GitHub puede tratar datos técnicos, como direcciones IP, en los registros de sus servidores para mantener el servicio seguro.",
        ],
        link: { text: "Declaración de privacidad de GitHub", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" },
      },
      {
        h: "Menores",
        p: [
          "Narra no recopila datos personales de nadie, incluidos los menores. Salvo su propia historia breve de ejemplo, Narra no incluye juegos; el contenido que importas, y si es adecuado para tu edad, depende de ti.",
        ],
      },
      {
        h: "Tus opciones",
        p: [
          "Como no tengo tus datos, no hay nada que pueda entregar ni eliminar. Al eliminar Narra se borra todo lo que guardó en tu dispositivo. Las partidas de iCloud se pueden gestionar en los ajustes de iCloud de tu dispositivo. La traducción y la sincronización con iCloud se pueden desactivar en cualquier momento.",
        ],
      },
      {
        h: "Cambios",
        p: [
          "Si esta política cambia, la nueva versión se publicará en esta página con una nueva fecha de entrada en vigor. Los cambios importantes también se mencionarán en las notas de la versión de la app.",
        ],
      },
      {
        h: "Contacto",
        p: ["Si tienes preguntas sobre privacidad, escríbeme a la dirección de abajo."],
      },
    ],
  },
  terms: {
    intro: [
      "Narra se te concede bajo licencia conforme al Contrato de Licencia de Usuario Final de Aplicaciones con Licencia Estándar de Apple (EULA). Las notas siguientes lo complementan; si hay alguna diferencia, prevalece el EULA de Apple.",
    ],
    eulaLink: "EULA estándar de Apple",
    sections: [
      {
        h: "Tu contenido",
        p: [
          "Salvo su propia historia breve de ejemplo, Narra no proporciona, vende ni distribuye juegos ni ningún otro contenido. Eres responsable de los juegos, mods, fuentes y archivos que importas, y de tener derecho a usarlos.",
        ],
      },
      {
        h: "Juegos hechos por otros",
        p: [
          "Los juegos que juegas en Narra pertenecen a sus creadores. Narra no está afiliada a ellos ni al proyecto Ren'Py, y no puede prometer que todos los juegos funcionen.",
        ],
      },
      {
        h: "Suscripciones y propinas",
        p: [
          "Las compras las gestiona Apple. La suscripción de colaborador se renueva automáticamente salvo que se cancele al menos 24 horas antes del final del periodo en curso; puedes gestionarla o cancelarla en los ajustes de tu cuenta del App Store. Las propinas son pagos únicos y no desbloquean nada.",
        ],
      },
      {
        h: "Traducción",
        p: ["La traducción en el juego la proporciona Google Traductor y puede no ser siempre exacta."],
      },
      {
        h: "Cambios",
        p: ["Estas condiciones pueden actualizarse. La fecha de arriba indica la versión vigente."],
      },
      {
        h: "Contacto",
        p: ["Si tienes preguntas sobre estas condiciones, escríbeme a la dirección de abajo."],
      },
    ],
  },
  support: {
    intro: "Respuestas a las preguntas frecuentes y una forma de hablar con una persona de verdad.",
    contactTitle: "Escríbenos",
    emailNote: "Errores, preguntas, ideas: todo es bienvenido.",
    discordTitle: "Discord",
    discordNote: "Charla con otros jugadores y sigue el desarrollo de Narra.",
    faqTitle: "Preguntas y respuestas",
    basicsTitle: "Antes de empezar",
    basics: [
      { q: "¿Narra incluye juegos?", a: "Solo una breve historia de ejemplo propia. Narra no vende ni descarga juegos; reproduce los juegos de Ren'Py que ya tienes, como las versiones para PC o Mac que conseguiste de sus creadores." },
      { q: "¿Narra es gratis?", a: "Sí, todas las funciones son gratis. La suscripción de colaborador, que es opcional, solo desbloquea los temas de fondo animados, y las propinas no desbloquean nada." },
      { q: "¿Mis partidas se sincronizan entre dispositivos?", a: "Sí, a través de tu propio iCloud, incluso mientras juegas. Actívalo o desactívalo en los Ajustes de Narra, en Partidas e iCloud. El desarrollador no puede ver tus datos de iCloud." },
    ],
    reportTitle: "Informar de un problema",
    reportIntro: "La forma más rápida es desde la propia app:",
    reportSteps: [
      "Abre el menú de la esquina superior derecha de tu biblioteca y elige Ayuda y soporte.",
      "Toca Informar de un problema, elige el juego y cuenta qué pasó.",
      "Si el juego se puede descargar gratis, añade un enlace para que se pueda probar.",
      "Se abre tu app de correo con los detalles ya rellenados. No se envía nada hasta que toques Enviar.",
    ],
    reportCrash: "Si un juego se cierra inesperadamente, Narra muestra una pantalla de error. Usa ahí Compartir o Informar de un problema para enviar el informe con sus registros.",
  },
  notFound: {
    title: "Esta página se ha perdido",
    say: "He buscado por todas partes, hasta detrás de la luna. Esta página no está aquí.",
    back: "Volver al principio",
  },
} satisfies Dict;
