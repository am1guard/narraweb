import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra: um player de visual novels de Ren'Py para iPhone e iPad",
    homeDescription:
      "O Narra roda no iPhone e no iPad as visual novels de Ren'Py que você já tem. Treze versões do motor incluídas, um gerenciador de salvamentos com sincronização pelo iCloud, mods, uma galeria e uma pequena guia chamada Narra. Grátis, sem conta e sem rastreamento.",
    privacyTitle: "Política de Privacidade",
    privacyDescription:
      "O que o Narra faz com as suas informações: sem conta, sem anúncios, sem análises. Seus jogos e salvamentos ficam no seu dispositivo e no seu próprio iCloud.",
    supportTitle: "Ajuda e suporte",
    supportDescription:
      "Respostas para as dúvidas mais comuns sobre o Narra, como relatar um problema e como falar com o desenvolvedor por e-mail ou no Discord.",
    termsTitle: "Termos de Uso",
    termsDescription:
      "Os termos para usar o Narra: o contrato de licença padrão da Apple, mais algumas observações sobre o conteúdo que você traz e sobre as compras.",
    notFoundTitle: "Página não encontrada",
    ogAlt: "A Narra, uma pequena guia luminosa, espiando da borda ao lado do nome do app",
  },
  nav: {
    skip: "Pular para o conteúdo",
    home: "Início do Narra",
    support: "Suporte",
    privacy: "Privacidade",
    terms: "Termos",
    language: "Idioma",
    toLight: "Mudar para o tema claro",
    toDark: "Mudar para o tema escuro",
    contents: "Conteúdo",
  },
  langSuggest: {
    message: "Esta página também está disponível em português.",
    action: "Ler em português",
    dismiss: "Fechar",
  },
  cta: {
    appStore: "Baixar na App Store",
    comingSoon: "Em breve na App Store",
    discord: "Acompanhe no Discord",
  },
  hero: {
    eyebrow: "Player de visual novels para iPhone e iPad",
    dialogueLabel: "A Narra se apresenta",
    lines: [
      "Ah, oi. Eu sou a Narra.",
      "Traga seus jogos. Do resto eu cuido.",
      "Pastas, arquivos ZIP, salvamentos, até a versão certa do Ren'Py para cada jogo. Eu fico de olho em tudo isso.",
      "Role a página quando quiser. Eu te conto a história toda.",
    ],
    next: "Próxima fala",
    begin: "Começar a história",
    compat: "Para jogos feitos com Ren'Py 7.4 a 8.6. Tirando uma pequena história de exemplo, o Narra não vem com jogos; quem traz os jogos é você.",
    sceneAlt: "A Narra flutuando sobre uma cidadezinha adormecida à noite, lendo um livro que brilha",
  },
  chapters: {
    arrive: {
      title: "Traga suas próprias histórias",
      say: "Eu não vendo jogos. Traga os que você já tem, e eu faço com que eles se sintam em casa. Ainda não tem nada para jogar? Eu trouxe uma historinha minha.",
      lead: "Adicione um jogo de Ren'Py pelo app Arquivos como pasta ou como arquivo ZIP, RAR ou 7z, mesmo que esteja dividido em partes. Arquivos RAR e 7z protegidos por senha também funcionam, assim como jogos de Ren'Py empacotados para Android (APK).",
      pathLabel: "Ou coloque um jogo aqui e a Narra o encontra sozinha:",
      path: ["Arquivos", "No Meu iPhone", "Narra", "Games"],
      items: [
        { t: "Uma primeira história para experimentar", d: "Uma pequena história de exemplo vem com o Narra, para você experimentar tudo antes de adicionar seus próprios jogos." },
        { t: "Coleções, busca e status", d: "Agrupe os jogos do seu jeito e arraste-os até o lugar certo. Encontre qualquer um pelo nome, pelos favoritos ou pelo que você está jogando." },
        { t: "Atualizações que mantêm seus salvamentos", d: "Adicione uma versão mais nova de um jogo ou escolha Atualizar jogo nos ajustes dele. Seus salvamentos ficam onde estão." },
        { t: "Capas encontradas para você", d: "A Narra pega uma capa das próprias imagens do jogo. Você sempre pode escolher a sua." },
      ],
    },
    engine: {
      title: "O motor certo para cada jogo",
      say: "Cada jogo foi feito com um Ren'Py específico. Eu carrego treze deles, para que cada jogo receba o que espera.",
      lead: "O Narra inclui o Ren'Py da versão 7.4.11 à 8.6. Ele lê cada jogo, escolhe sozinho o motor correspondente e não precisa da pasta renpy do próprio jogo. Se você souber melhor, mude isso na página do jogo.",
      timelineLabel: "Versões do Ren'Py incluídas no Narra",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "versão de pré-lançamento",
      items: [
        { t: "Uma linha do tempo de motores", d: "Veja todas as versões incluídas em ordem, com qual delas o jogo foi feito e qual o Narra escolheu." },
        { t: "Variantes de tela", d: "Diga a um jogo que ele está rodando num celular, num tablet, num computador ou numa TV, e ele pode mudar para o layout feito para isso." },
        { t: "Ajustes para um só jogo", d: "Velocidade do texto, fontes, orientação e mais podem seguir seus ajustes gerais ou valer para um único jogo." },
        { t: "Suas próprias fontes", d: "Adicione fontes para todos os jogos ou só para um." },
      ],
    },
    helper: {
      title: "Uma amiga na borda da tela",
      say: "Enquanto você lê, eu me seguro na borda da tela e fico quietinha. Quase sempre.",
      lead: "A Narra espera na lateral do jogo, sem atrapalhar. O arco ao redor dela se enche conforme você avança na história. Toque nela para abrir o menu ou arraste-a para outra borda.",
      bubblesLabel: "Coisas que a Narra pode dizer",
      bubblesNote: "As sugestões dela são opcionais. Se você desligar, ela fica na dela.",
      barLabel: "A barra compacta",
      bar: { rewind: "Voltar", skip: "Pular", hide: "Ocultar caixa de texto", keyboard: "Teclado" },
      items: [
        { t: "Uma barra compacta do seu jeito", d: "Volte, pule, oculte a caixa de texto ou abra o teclado por uma barra pequena. Mova, mude o tamanho, deixe mais transparente e escolha até cinco botões." },
        { t: "Tela de pausa", d: "Quanto você já leu, quanto tempo jogou, ajustes rápidos e todas as ferramentas num só lugar." },
        { t: "Salvamento e carregamento rápidos", d: "Um toque, e a Narra avisa que está feito." },
        { t: "Capturas de tela", d: "Guarde uma cena de que você gostou. Cada jogo tem sua própria galeria de capturas de tela nos ajustes dele, e as imagens também ficam no app Arquivos." },
      ],
    },
    controls: {
      title: "Jogue do seu jeito",
      say: "No sofá, no trem, na mesa. Traga um controle se quiser. Eu não me importo.",
      lead: "O Narra se adapta ao jeito como você segura o dispositivo, ao que você usa para jogar e a como você gosta de começar.",
      widgetLabel: "O widget Recentes na Tela de Início",
      items: [
        { t: "Controles e teclados", d: "Conecte um controle de jogo e escolha o que cada botão faz, ou use um teclado com as teclas de sempre do Ren'Py e atalhos para as ferramentas do Narra." },
        { t: "Retrato no iPhone", d: "Segure o iPhone em pé e continue lendo, ou deixe o jogo girar junto com você." },
        { t: "Um teclado próprio", d: "Quando um jogo pede para você digitar um nome, a Narra traz um teclado que combina com o jogo." },
        { t: "Direto da Tela de Início", d: "Toque e segure o ícone do Narra para continuar, inicie um jogo com a Siri ou o app Atalhos, ou adicione o widget Recentes." },
      ],
    },
    saves: {
      title: "Salvamentos em que você pode confiar",
      say: "Antes de mudar ou apagar qualquer coisa, eu faço um backup de segurança. Mania antiga.",
      lead: "Cada jogo tem seu próprio gerenciador de salvamentos. Veja cada salvamento com sua captura de tela, faça backup, exporte, restaure ou comece do zero.",
      cardsLabel: "Espaços de salvamento no gerenciador de salvamentos, sincronizados com o iCloud",
      items: [
        { t: "Sincronização pelo iCloud, até enquanto você joga", d: "Os salvamentos vão e vêm entre seu iPhone e seu iPad pelo seu próprio iCloud. O Narra envia as mudanças enquanto você joga e de novo quando você muda para outro app." },
        { t: "Backups", d: "Faça backup de um jogo ou de todos de uma vez, e o Narra guarda uma cópia nova sempre que um jogo é aberto. Os arquivos ZIP ficam no app Arquivos." },
        { t: "Importar e exportar", d: "Traga salvamentos de um computador ou de outro dispositivo. Se um espaço já estiver ocupado, você decide: manter ambos, substituir ou pular." },
        { t: "Backups de segurança", d: "Restaurar, apagar ou redefinir sempre faz um backup de segurança antes, então um toque errado não é o fim." },
      ],
    },
    extras: {
      title: "Mods, uma galeria e alguns segredos",
      say: "Algumas dessas coisas são para os curiosos. Não vou contar para ninguém.",
      lead: "Para os dias em que você quer ir um pouco mais longe.",
      stackLabel: "Os mods são camadas sobre o jogo",
      stackGame: "Arquivos do jogo",
      stackMod: "Mod {n}",
      stackNote: "Quando dois mods mudam o mesmo arquivo, vence o que está mais acima na lista.",
      items: [
        { t: "Gerenciador de mods", d: "Adicione mods como pastas ou arquivos ZIP, coloque-os em ordem e ative ou desative cada um. Os mods globais valem para todos os jogos Ren'Py, e você pode iniciar um jogo uma vez sem mods quando algo der errado." },
        { t: "Galeria", d: "Navegue pelas imagens, músicas e vídeos guardados dentro dos arquivos .rpa de um jogo." },
        { t: "Menu de trapaças (beta)", d: "Um menu de trapaças e algumas ferramentas úteis, como voltar no texto, um contador de FPS e um desbloqueador de galeria." },
      ],
    },
    world: {
      title: "Dezessete idiomas, nada para rastrear",
      say: "Eu falo dezessete idiomas. Adoro conversar, mas não faço anotações sobre você.",
      lead: "O Narra segue o idioma do seu dispositivo. Para escolher outro só para o Narra, abra o app Ajustes e vá em Apps > Narra > Idioma.",
      languagesLabel: "O Narra fala",
      promises: ["Sem conta.", "Sem anúncios.", "Sem análises, sem rastreamento."],
      promisesNote: "Seus jogos e salvamentos ficam no seu dispositivo e no seu próprio iCloud.",
      lock: "Quer manter um jogo em segredo? Bloqueie-o com Face ID, Touch ID ou seu código, e a capa dele fica desfocada na sua biblioteca.",
      privacyLink: "Ler a política de privacidade",
    },
  },
  more: {
    label: "Índice",
    title: "E mais algumas coisas",
    items: [
      "Puxar a biblioteca para baixo para procurar jogos novos",
      "Tamanho, contorno e fonte do texto enquanto você joga",
      "Rolagem com dois dedos e roda de rolagem na tela",
      "Um inspetor de salvamentos para os curiosos",
      "Tempo de jogo de cada jogo",
      "Desbloquear a galeria do próprio jogo",
      "Um gerenciador de armazenamento",
      "Relatórios de erro com registros quando um jogo trava",
      "Aparência clara e escura",
      "Som que volta depois de uma ligação ou de um alarme",
    ],
  },
  screens: {
    sampleNote: "Biblioteca de exemplo. Os títulos dos jogos são fictícios.",
  },
  epilogue: {
    label: "Epílogo",
    title: "Grátis, da primeira à última página",
    lead: "Todos os recursos do Narra são gratuitos. O Narra é feito por um único desenvolvedor, Emir Han Temur, e se você quiser ajudar o app a crescer, há duas formas.",
    supporterTitle: "Assinatura de apoiador",
    supporter: "Mensal ou anual. Ela desbloqueia os temas de fundo animados, e é só isso que ela desbloqueia.",
    tipsTitle: "Gorjetas",
    tips: "Um agradecimento único. As gorjetas não desbloqueiam nada, mas significam muito.",
    say: "Essa é a minha história até aqui. A próxima é a sua.",
    choices: "E agora?",
    faq: "Ler as perguntas e respostas",
  },
  footer: {
    madeBy: "Feito por Emir Han Temur.",
    independent: "O Narra é um app independente e não é afiliado ao projeto Ren'Py nem endossado por ele.",
    trademarks: "Apple, iPhone, iPad, iCloud e App Store são marcas comerciais da Apple Inc.",
    email: "E-mail",
  },
  legal: {
    effective: "Data de vigência: {date}",
    translationNote: "Este texto é uma tradução. Em caso de diferença em relação à versão em inglês, prevalece a versão em inglês.",
  },
  privacy: {
    intro: [
      "O Narra é um app para jogar visual novels de Ren'Py no iPhone e no iPad. Ele é feito por Emir Han Temur, um desenvolvedor independente (chamado de “eu” daqui em diante). Esta política explica o que acontece com as suas informações quando você usa o app Narra e o site playnarra.app.",
      "Resumindo: o Narra não coleta nenhum dado. Não tem contas, nem anúncios, nem análises, e só se conecta à internet para o iCloud (seus próprios salvamentos), compras na App Store e links que você mesmo abre.",
    ],
    sections: [
      {
        h: "O que fica no seu dispositivo",
        p: [
          "Os jogos que você importa, as capas deles, seus salvamentos, ajustes, tempo de jogo, capturas de tela, fontes e mods ficam armazenados dentro do Narra no seu dispositivo. Eles não são enviados para mim, e eu não consigo vê-los.",
          "O widget Recentes, os atalhos da Tela de Início e a Siri leem sua biblioteca no dispositivo. Se você bloquear um jogo com Face ID ou Touch ID, a verificação é feita pelo seu dispositivo; o Narra nunca vê seus dados biométricos.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "Se a sincronização pelo iCloud estiver ativada (ela vem ativada por padrão), o Narra copia os salvamentos dos seus jogos para o seu próprio iCloud Drive, enquanto você joga e depois, para que eles possam passar de um dispositivo para outro. Os jogos em si não são enviados. Esses dados ficam na sua conta do iCloud, sob o controle da Apple e sujeitos à política de privacidade da Apple; eu não tenho acesso a eles.",
          "Você pode desativar a sincronização a qualquer momento nos Ajustes do Narra, em Salvamentos e iCloud. Desativá-la não apaga nada que já esteja no iCloud.",
        ],
      },
      {
        h: "Conexões com a internet",
        p: [
          "O Narra só se conecta à internet para sincronizar seus salvamentos com o iCloud, processar compras na App Store e abrir links que você tocar, como o Discord. Nada dos seus jogos, nem mesmo o texto deles, é enviado para lugar nenhum.",
        ],
      },
      {
        h: "Relatórios de erro e e-mails de suporte",
        p: [
          "Quando algo dá errado, o Narra pode preparar um relatório de erro, e Relatar um problema prepara um e-mail de suporte. Nenhum dos dois é enviado automaticamente: eles só são compartilhados se você mesmo os enviar, por e-mail ou pelo menu Compartilhar.",
          "Os relatórios são anonimizados. Os caminhos de arquivo são encurtados, e o nome da sua pasta de usuário e os endereços de e-mail ficam ocultos. Um relatório pode incluir o modelo do dispositivo, a versão do sistema, o idioma e a região, a versão do app, detalhes sobre o jogo afetado (a versão dele, a versão do Ren'Py e o tamanho) e registros recentes. Ele nunca inclui o conteúdo dos seus salvamentos.",
          "Eu uso o que você envia apenas para responder a você e corrigir problemas, e não compartilho isso com ninguém.",
        ],
      },
      {
        h: "Compras",
        p: [
          "As assinaturas de apoiador e as gorjetas são processadas pela Apple, por meio da App Store. Eu não recebo seu nome, seu endereço de e-mail nem seus dados de pagamento. O Narra só pergunta à Apple se há uma assinatura ativa, para desbloquear os fundos animados.",
        ],
      },
      {
        h: "Sem análises, anúncios ou rastreamento",
        p: [
          "O Narra não contém código de análise nem de publicidade. Ele não rastreia você entre apps ou sites e não usa seus dados para publicidade.",
        ],
      },
      {
        h: "Este site",
        p: [
          "playnarra.app é um site estático servido pela Cloudflare. Ele não usa cookies, nem análises, nem fontes ou scripts de terceiros. Se você mudar o tema, sua escolha é salva no armazenamento local do seu navegador e nunca sai do seu dispositivo.",
          "Para servir o site e protegê-lo contra abusos, a Cloudflare processa dados técnicos de conexão, como endereços IP, de acordo com a própria política de privacidade.",
        ],
        link: { text: "Política de Privacidade da Cloudflare", href: "https://www.cloudflare.com/privacypolicy/" },
      },
      {
        h: "Crianças",
        p: [
          "O Narra não coleta dados pessoais de ninguém, inclusive de crianças. Com exceção de sua própria pequena história de exemplo, o Narra não inclui jogos; o conteúdo que você importa, e se ele é adequado para a sua idade, é decisão sua.",
        ],
      },
      {
        h: "Suas escolhas",
        p: [
          "Como eu não guardo seus dados, não há nada que eu possa entregar ou apagar. Apagar o Narra remove tudo o que ele armazenou no seu dispositivo. Os salvamentos no iCloud podem ser gerenciados nos ajustes do iCloud do seu dispositivo. A sincronização pelo iCloud pode ser desativada a qualquer momento.",
        ],
      },
      {
        h: "Alterações",
        p: [
          "Se esta política mudar, a nova versão será publicada nesta página com uma nova data de vigência. Mudanças importantes também serão mencionadas nas notas de versão do app.",
        ],
      },
      {
        h: "Contato",
        p: ["Dúvidas sobre privacidade são bem-vindas no endereço abaixo."],
      },
    ],
  },
  terms: {
    intro: [
      "O Narra é licenciado a você nos termos do Contrato de Licença de Usuário Final de Aplicativo Licenciado Padrão da Apple (EULA). As observações abaixo complementam esse contrato; quando houver diferença, o EULA da Apple prevalece.",
    ],
    eulaLink: "EULA Padrão da Apple",
    sections: [
      {
        h: "Seu conteúdo",
        p: [
          "Com exceção de sua própria pequena história de exemplo, o Narra não fornece, vende nem distribui jogos ou qualquer outro conteúdo. Você é responsável pelos jogos, mods, fontes e arquivos que importa, e por ter o direito de usá-los.",
        ],
      },
      {
        h: "Jogos feitos por outras pessoas",
        p: [
          "Os jogos que você joga no Narra pertencem aos seus criadores. O Narra não é afiliado a eles nem ao projeto Ren'Py, e não pode prometer que todo jogo vai funcionar.",
        ],
      },
      {
        h: "Assinaturas e gorjetas",
        p: [
          "As compras são feitas pela Apple. A assinatura de apoiador é renovada automaticamente, a menos que seja cancelada pelo menos 24 horas antes do fim do período atual; você pode gerenciá-la ou cancelá-la nos ajustes da sua conta da App Store. As gorjetas são pagamentos únicos e não desbloqueiam nada.",
        ],
      },
      {
        h: "Alterações",
        p: ["Estes termos podem ser atualizados. A data no topo mostra a versão atual."],
      },
      {
        h: "Contato",
        p: ["Dúvidas sobre estes termos são bem-vindas no endereço abaixo."],
      },
    ],
  },
  support: {
    intro: "Respostas para as dúvidas mais comuns e um jeito de falar com uma pessoa de verdade.",
    contactTitle: "Fale com a gente",
    emailNote: "Bugs, dúvidas, ideias: tudo é bem-vindo.",
    discordTitle: "Discord",
    discordNote: "Converse com outros jogadores e acompanhe o desenvolvimento do Narra.",
    faqTitle: "Perguntas e respostas",
    basicsTitle: "Antes de começar",
    basics: [
      { q: "O Narra vem com jogos?", a: "Só uma pequena história de exemplo própria. O Narra não vende nem baixa jogos; ele roda os jogos de Ren'Py que você já tem, como as versões para PC ou Mac que você conseguiu com os criadores." },
      { q: "O Narra é grátis?", a: "Sim, todos os recursos são gratuitos. A assinatura de apoiador, que é opcional, só desbloqueia os temas de fundo animados, e as gorjetas não desbloqueiam nada." },
      { q: "Meus salvamentos sincronizam entre dispositivos?", a: "Sim, pelo seu próprio iCloud, até enquanto você joga. Ative ou desative isso nos Ajustes do Narra, em Salvamentos e iCloud. O desenvolvedor não consegue ver seus dados do iCloud." },
    ],
    reportTitle: "Como relatar um problema",
    reportIntro: "O jeito mais rápido é pelo próprio app:",
    reportSteps: [
      "Abra o menu no canto superior direito da sua biblioteca e escolha Ajuda e suporte.",
      "Toque em Relatar um problema, escolha o jogo e descreva o que aconteceu.",
      "Se o jogo puder ser baixado de graça, adicione um link para que ele possa ser testado.",
      "Seu app de e-mail abre com os detalhes já preenchidos. Nada é enviado até você tocar em Enviar.",
    ],
    reportCrash: "Se um jogo travar e fechar, o Narra mostra uma tela de erro. Use Compartilhar ou Relatar um problema nessa tela para enviar o relatório com os registros.",
  },
  notFound: {
    title: "Esta página se perdeu",
    say: "Procurei em todo canto, até atrás da lua. Esta página não está aqui.",
    back: "Voltar ao começo",
  },
} satisfies Dict;
