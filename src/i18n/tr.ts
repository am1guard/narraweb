import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra: iPhone ve iPad için Ren'Py görsel roman oynatıcısı",
    homeDescription:
      "Narra, sahip olduğun Ren'Py görsel romanlarını iPhone ve iPad'de oynatır. On üç gömülü motor sürümü, iCloud eşitlemeli kayıt yöneticisi, modlar, galeri ve Narra adında küçük bir rehber. Ücretsiz; hesap yok, izleme yok.",
    privacyTitle: "Gizlilik Politikası",
    privacyDescription:
      "Narra bilgilerinle ne yapar: hesap yok, reklam yok, analiz yok. Oyunların ve kayıtların cihazında ve kendi iCloud'unda kalır.",
    supportTitle: "Yardım ve Destek",
    supportDescription:
      "Narra hakkında sık sorulan sorular, sorun bildirme yolu ve geliştiriciye e-postayla ya da Discord'da ulaşma.",
    termsTitle: "Kullanım Şartları",
    termsDescription:
      "Narra'yı kullanma şartları: Apple'ın standart lisans sözleşmesi ve getirdiğin içerikle satın alımlar hakkında birkaç not.",
    notFoundTitle: "Sayfa bulunamadı",
    ogAlt: "Uygulamanın adının yanında, kenardan bakan küçük ve parlak rehber Narra",
  },
  nav: {
    skip: "İçeriğe geç",
    home: "Narra ana sayfa",
    support: "Destek",
    privacy: "Gizlilik",
    terms: "Şartlar",
    language: "Dil",
    toLight: "Açık temaya geç",
    toDark: "Koyu temaya geç",
    contents: "İçindekiler",
  },
  langSuggest: {
    message: "Bu sayfanın Türkçesi de var.",
    action: "Türkçe oku",
    dismiss: "Kapat",
  },
  cta: {
    appStore: "App Store'dan İndir",
    comingSoon: "Yakında App Store'da",
    discord: "Discord'da gelişmeleri izle",
  },
  hero: {
    eyebrow: "iPhone ve iPad için görsel roman oynatıcısı",
    dialogueLabel: "Narra kendini tanıtıyor",
    lines: [
      "Aa, merhaba. Ben Narra.",
      "Oyunlarını getir, gerisini ben hallederim.",
      "Klasörler, ZIP dosyaları, kayıtlar, hatta her oyuna uygun Ren'Py sürümü. Hepsinin kaydını ben tutarım.",
      "Hazır olduğunda aşağı kaydır. Sana hikâyenin tamamını anlatayım.",
    ],
    next: "Sonraki satır",
    begin: "Hikâyeye başla",
    compat: "Ren'Py 7.4 ile 8.6 arasında yapılmış oyunlar için. Narra'nın içinde oyun yok; oyunlarını sen getirirsin.",
    sceneAlt: "Gece uyuyan bir kasabanın üstünde süzülen, parlayan bir kitap okuyan Narra",
  },
  chapters: {
    arrive: {
      title: "Hikâyelerini getir",
      say: "Oyun satmıyorum, içimde de oyun yok. Sen zaten sahip olduklarını getiriyorsun, ben de onları evinde hissettiriyorum.",
      lead: "Bir Ren'Py oyununu Dosyalar uygulamasından klasör ya da ZIP arşivi olarak ekle. Birkaçını birden seç, Narra hepsini sırayla ekler.",
      pathLabel: "Ya da oyunu buraya bırak, Narra onu kendisi bulur:",
      path: ["Dosyalar", "iPhone'umda", "Narra", "Games"],
      items: [
        { t: "Kapaklar kendiliğinden", d: "Narra kapağı oyunun kendi görsellerinden seçer. İstersen her zaman kendin değiştirebilirsin." },
        { t: "Koleksiyonlar", d: "Oyunları seriye, havaya ya da canın nasıl isterse öyle grupla. Bir oyuna basılı tut ve sürükleyerek yerine koy." },
        { t: "Arama, filtre, durum", d: "Oyunu adıyla bul, yalnız favorilerini göster; oynadığını, bitirdiğini ya da sonraya bıraktığını işaretle." },
        { t: "Kayıtları koruyan güncelleme", d: "Zaten olan bir oyunun yeni sürümünü ekle, Narra güncellemeyi önerir. Kayıtların yerinde kalır." },
        { t: "Aşağı çekip yenile", d: "Narra açıkken Games klasörüne oyun mu kopyaladın? Kütüphaneyi aşağı çek, Narra bir daha baksın." },
      ],
    },
    engine: {
      title: "Her oyuna doğru motor",
      say: "Her oyun belli bir Ren'Py ile yapılmıştır. Ben on üç tanesini yanımda taşıyorum; her oyun beklediğine kavuşsun diye.",
      lead: "Narra, 7.4.11'den 8.6'ya Ren'Py sürümlerini içinde taşır. Her oyunu okur, uygun motoru kendisi seçer ve oyunun kendi renpy klasörüne ihtiyaç duymaz. Daha iyisini biliyorsan oyunun sayfasından değiştir.",
      timelineLabel: "Narra'da gelen Ren'Py sürümleri",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "ön sürüm derlemesi",
      items: [
        { t: "Motorların zaman çizgisi", d: "Gelen tüm sürümleri sırayla gör: oyun hangisiyle yapılmış, Narra hangisini seçmiş." },
        { t: "Ekran varyantları", d: "Oyuna telefonda, tablette, bilgisayarda ya da televizyonda çalıştığını söyle; oyun ona göre hazırlanmış düzene geçebilir." },
        { t: "Tek oyuna özel ayarlar", d: "Metin hızı, yazı tipleri, ekran yönü ve dahası genel ayarlarını izleyebilir ya da yalnız bir oyuna uygulanabilir." },
        { t: "Kendi yazı tiplerin", d: "Yazı tiplerini tüm oyunlara ya da yalnız birine ekle." },
      ],
    },
    helper: {
      title: "Ekranın kenarında bir dost",
      say: "Sen okurken ben ekranın kenarına tutunur, sessizce beklerim. Çoğunlukla.",
      lead: "Narra oyunun kenarında, yolundan çekilmiş bekler. Hikâyede ilerledikçe çevresindeki yay dolar. Menü için ona dokun, başka bir kenara taşımak için sürükle.",
      bubblesLabel: "Narra'nın söyleyebilecekleri",
      bubblesNote: "Önerileri isteğe bağlıdır. Kapatırsan sesini çıkarmaz.",
      barLabel: "Kısa çubuk",
      bar: { rewind: "Geri sar", skip: "Atla", hide: "Metin kutusunu gizle", keyboard: "Klavye" },
      items: [
        { t: "Sana göre kısa çubuk", d: "Geri sar, atla, metin kutusunu gizle ya da klavyeyi aç; hepsi küçük bir çubukta. Taşı, boyutunu ve saydamlığını ayarla, en fazla beş düğme seç." },
        { t: "Duraklatma ekranı", d: "Ne kadar okuduğun, ne kadar oynadığın, hızlı ayarlar ve tüm araçlar tek yerde." },
        { t: "Hızlı kaydet ve yükle", d: "Tek dokunuş; Narra işin bittiğini haber verir." },
        { t: "Ekran görüntüleri", d: "Sevdiğin bir sahneyi sakla. Görüntüler Dosyalar uygulamasındaki Screenshots klasörüne gider." },
      ],
    },
    controls: {
      title: "Nasıl istersen öyle oyna",
      say: "Kanepede, trende, masada. İstersen kumandanı da getir, bana uyar.",
      lead: "Narra cihazını nasıl tuttuğuna ve neyle oynadığına uyum sağlar.",
      items: [
        { t: "Oyun kumandaları", d: "Bir kumanda bağla, tuşlarını istediğin gibi ayarla." },
        { t: "Klavye kısayolları", d: "Klavyeyle alışık olduğun Ren'Py tuşları çalışır; Narra'nın kendi araçları için de kısayollar var." },
        { t: "iPhone'da dikey", d: "iPhone'unu dik tut ve okumaya devam et, ya da oyun seninle birlikte dönsün." },
        { t: "Kendi klavyesi", d: "Oyun senden bir ad yazmanı istediğinde Narra oyuna uyan kendi klavyesini getirir." },
        { t: "İki parmakla kaydırma", d: "Metin geçmişini iki parmakla kaydır ya da ekrana küçük bir kaydırma tekerleği koy." },
      ],
    },
    saves: {
      title: "Güvenebileceğin kayıtlar",
      say: "Bir şeyi değiştirmeden ya da silmeden önce güvenlik yedeği alırım. Eski alışkanlık.",
      lead: "Her oyunun kendi kayıt yöneticisi var. Kayıtları ekran görüntüleriyle gör, yedekle, dışa aktar, geri yükle ya da baştan başla.",
      items: [
        { t: "iCloud eşitleme", d: "Kayıtların kendi iCloud'un üzerinden iPhone ile iPad arasında gidip gelir; oynamayı bitirir bitirmez yüklenir." },
        { t: "Yedekler", d: "Tek bir oyunu ya da hepsini birden yedekle. ZIP arşivleri Dosyalar uygulamasında Narra altında görünür." },
        { t: "İçe ve dışa aktarma", d: "Kayıtları bilgisayardan ya da başka bir cihazdan getir. Yuva doluysa karar senin: ikisini de tut, üzerine yaz ya da atla." },
        { t: "Güvenlik yedekleri", d: "Geri yükleme, silme ya da sıfırlama önce mutlaka güvenlik yedeği alır; tek bir yanlış dokunuş son olmaz." },
        { t: "Kayıt denetleyicisi", d: "Bir kaydın içinde ne olduğunu mu merak ediyorsun? Aç; verisine, metnine ve ekran görüntüsüne bak." },
      ],
    },
    extras: {
      title: "Modlar, galeri ve birkaç sır",
      say: "Bunların bazıları meraklılar için. Kimseye söylemem.",
      lead: "Biraz daha ileri gitmek istediğin günler için.",
      items: [
        { t: "Mod yöneticisi", d: "Modları klasör ya da ZIP olarak ekle, sıraya koy, aç ya da kapat. Genel modlar tüm Ren'Py oyunlarına uygulanır; bir şeyler ters giderse oyunu bir kez modsuz başlatabilirsin." },
        { t: "Galeri", d: "Oyunun .rpa arşivlerindeki görsellere, müziklere ve videolara göz at." },
        { t: "Oyun içi çeviri", d: "İsteğe bağlı. Oynarken oyunun metnini çevir. Açıkken çevrilecek metin Google Çeviri'ye gönderilir." },
        { t: "Hile menüsü (beta)", d: "Bir hile menüsü ve geri sarma, FPS sayacı, galeri açıcı gibi birkaç kullanışlı araç." },
      ],
    },
    world: {
      title: "On yedi dil, izlenecek hiçbir şey",
      say: "On yedi dil konuşurum. Sohbete her zaman varım ama senin hakkında not tutmam.",
      lead: "Narra cihazının dilini izler. Yalnız Narra için başka bir dil seçmek istersen Ayarlar uygulamasında Uygulamalar > Narra > Dil'e git.",
      languagesLabel: "Narra'nın konuştuğu diller",
      promises: ["Hesap yok.", "Reklam yok.", "Analiz yok, izleme yok."],
      promisesNote: "Oyunların ve kayıtların cihazında ve kendi iCloud'unda kalır.",
      privacyLink: "Gizlilik politikasını oku",
    },
  },
  epilogue: {
    label: "Son söz",
    title: "İlk sayfadan son sayfaya ücretsiz",
    lead: "Narra'nın tüm özellikleri ücretsiz. Narra'yı tek bir geliştirici, Emir Han Temur yapıyor; büyümesine yardım etmek istersen iki yolu var.",
    supporterTitle: "Destekçi aboneliği",
    supporter: "Aylık ya da yıllık. Animasyonlu arka plan temalarını açar; açtığı tek şey de bu.",
    tipsTitle: "Bahşiş",
    tips: "Tek seferlik bir teşekkür. Bahşiş hiçbir şeyin kilidini açmaz ama çok şey ifade eder.",
    say: "Benim hikâyem şimdilik bu kadar. Sıra seninkinde.",
    choices: "Şimdi ne yapalım?",
    faq: "Soru ve cevapları oku",
  },
  footer: {
    madeBy: "Emir Han Temur tarafından yapıldı.",
    independent: "Narra bağımsız bir uygulamadır; Ren'Py projesiyle bağlantılı değildir ve onun tarafından onaylanmamıştır.",
    trademarks: "Apple, iPhone, iPad, iCloud ve App Store, Apple Inc.'in ticari markalarıdır.",
    email: "E-posta",
  },
  legal: {
    effective: "Yürürlük tarihi: {date}",
    translationNote: "Bu metin bir çeviridir. İngilizce sürümle arasında fark olursa İngilizce sürüm geçerlidir.",
  },
  privacy: {
    intro: [
      "Narra, iPhone ve iPad'de Ren'Py görsel romanları oynamak için bir uygulamadır. Bağımsız geliştirici Emir Han Temur tarafından yapılır (aşağıda \"ben\" olarak geçer). Bu politika, Narra uygulamasını ve playnarra.app sitesini kullandığında bilgilerine ne olduğunu açıklar.",
      "Kısaca: Narra'da hesap, reklam ve analiz yoktur; kişisel verilerini toplamam.",
    ],
    sections: [
      {
        h: "Cihazında kalanlar",
        p: [
          "İçe aktardığın oyunlar, kapakları, kayıtların, ayarların, oynama süren, ekran görüntülerin, yazı tiplerin ve modların cihazında, Narra'nın içinde saklanır. Bana gönderilmez, onları göremem.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "iCloud eşitlemesi açıksa (varsayılan olarak açıktır), Narra oyun kayıtlarını cihazların arasında taşınabilsinler diye kendi iCloud Drive'ına kopyalar. Oyunların kendisi yüklenmez. Bu veriler iCloud hesabında, Apple'ın denetiminde ve Apple'ın gizlilik politikasına tabi olarak durur; benim erişimim yoktur.",
          "Eşitlemeyi istediğin zaman Narra'nın Ayarlar ekranında Kayıtlar ve iCloud bölümünden kapatabilirsin. Kapatmak iCloud'da duran hiçbir şeyi silmez.",
        ],
      },
      {
        h: "Oyun içi çeviri (isteğe bağlı)",
        p: [
          "Çeviri, sen açana kadar kapalıdır. Kullandığında çevrilecek oyun metni Google Çeviri'ye gönderilir ve o metne Google'ın gizlilik politikası uygulanır. Narra bu metne adını, hesabını ya da herhangi bir tanımlayıcıyı eklemez.",
        ],
        link: { text: "Google Gizlilik Politikası", href: "https://policies.google.com/privacy?hl=tr" },
      },
      {
        h: "Hata raporları ve destek e-postaları",
        p: [
          "Bir şeyler ters gittiğinde Narra bir hata raporu hazırlayabilir; Sorun Bildir de bir destek e-postası hazırlar. İkisi de kendiliğinden gönderilmez: yalnız sen e-postayla ya da paylaşım ekranıyla gönderirsen paylaşılır.",
          "Raporlar anonimleştirilir. Dosya yolları kısaltılır; kullanıcı klasörünün adı ve e-posta adresleri gizlenir. Bir rapor cihaz modelini, sistem sürümünü, dil ve bölgeyi, uygulama sürümünü, ilgili oyunun ayrıntılarını (sürümü, Ren'Py sürümü ve boyutu) ve son günlükleri içerebilir. Kayıtlarının içeriğini asla içermez.",
          "Gönderdiklerini yalnız sana cevap vermek ve sorunları düzeltmek için kullanırım, kimseyle paylaşmam.",
        ],
      },
      {
        h: "Satın alımlar",
        p: [
          "Destekçi abonelikleri ve bahşişler App Store üzerinden Apple tarafından işlenir. Adın, e-posta adresin ya da ödeme bilgilerin bana ulaşmaz. Narra, animasyonlu arka planları açmak için Apple'a yalnız aboneliğin etkin olup olmadığını sorar.",
        ],
      },
      {
        h: "Analiz, reklam ve izleme yok",
        p: [
          "Narra'da analiz ya da reklam kodu yoktur. Seni uygulamalar ve siteler arasında izlemez, verilerini reklam için kullanmaz.",
        ],
      },
      {
        h: "Bu site",
        p: [
          "playnarra.app, GitHub Pages'te barındırılan durağan bir sitedir. Çerez, analiz ya da üçüncü taraf yazı tipi ve betik kullanmaz. Temayı değiştirirsen seçimin tarayıcının yerel depolamasına kaydedilir ve cihazından dışarı çıkmaz.",
          "Her barındırma hizmeti gibi GitHub da hizmeti güvende tutmak için sunucu günlüklerinde IP adresi gibi teknik verileri işleyebilir.",
        ],
        link: { text: "GitHub Gizlilik Bildirimi", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" },
      },
      {
        h: "Çocuklar",
        p: [
          "Narra, çocuklar dahil kimseden kişisel veri toplamaz. Narra'nın içinde oyun yoktur; içe aktardığın içerik ve yaşına uygun olup olmadığı senin kararındır.",
        ],
      },
      {
        h: "Seçimlerin",
        p: [
          "Verilerini ben tutmadığım için teslim edecek ya da silecek bir şeyim yok. Narra'yı silmek, cihazında sakladığı her şeyi kaldırır. iCloud'daki kayıtları cihazının iCloud ayarlarından yönetebilirsin. Çeviriyi ve iCloud eşitlemesini istediğin zaman kapatabilirsin.",
        ],
      },
      {
        h: "Değişiklikler",
        p: [
          "Bu politika değişirse yeni sürüm yeni bir yürürlük tarihiyle bu sayfada yayımlanır. Önemli değişiklikler uygulamanın sürüm notlarında da belirtilir.",
        ],
      },
      {
        h: "İletişim",
        p: ["Gizlilikle ilgili sorularını aşağıdaki adrese yazabilirsin."],
      },
    ],
  },
  terms: {
    intro: [
      "Narra sana Apple'ın Standart Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesi (EULA) kapsamında lisanslanır. Aşağıdaki notlar ona eklenir; bir fark olursa Apple'ın EULA'sı önce gelir.",
    ],
    eulaLink: "Apple'ın Standart EULA'sı",
    sections: [
      {
        h: "İçeriğin",
        p: [
          "Narra oyun ya da başka bir içerik sağlamaz, satmaz, dağıtmaz. İçe aktardığın oyunlardan, modlardan, yazı tiplerinden ve dosyalardan ve onları kullanma hakkına sahip olmaktan sen sorumlusun.",
        ],
      },
      {
        h: "Başkalarının yaptığı oyunlar",
        p: [
          "Narra'da oynadığın oyunlar yapımcılarına aittir. Narra'nın onlarla ya da Ren'Py projesiyle bir bağı yoktur ve her oyunun çalışacağına söz veremez.",
        ],
      },
      {
        h: "Abonelikler ve bahşişler",
        p: [
          "Satın alımları Apple yürütür. Destekçi aboneliği, mevcut dönemin bitiminden en az 24 saat önce iptal edilmezse kendiliğinden yenilenir; App Store hesap ayarlarından yönetebilir ya da iptal edebilirsin. Bahşişler tek seferlik ödemelerdir ve hiçbir şeyin kilidini açmaz.",
        ],
      },
      {
        h: "Çeviri",
        p: ["Oyun içi çeviri Google Çeviri tarafından sağlanır ve her zaman doğru olmayabilir."],
      },
      {
        h: "Değişiklikler",
        p: ["Bu şartlar güncellenebilir. En üstteki tarih geçerli sürümü gösterir."],
      },
      {
        h: "İletişim",
        p: ["Bu şartlarla ilgili sorularını aşağıdaki adrese yazabilirsin."],
      },
    ],
  },
  support: {
    intro: "Sık sorulan soruların cevapları ve gerçek bir insana ulaşmanın yolu.",
    contactTitle: "Bize yaz",
    emailNote: "Hatalar, sorular, fikirler: hepsi olur.",
    discordTitle: "Discord",
    discordNote: "Diğer oyuncularla sohbet et ve Narra'nın gelişimini izle.",
    faqTitle: "Soru ve cevaplar",
    basicsTitle: "Başlamadan önce",
    basics: [
      { q: "Narra'nın içinde oyun var mı?", a: "Hayır. Narra oyun içermez, satmaz, indirmez. Zaten sahip olduğun Ren'Py oyunlarını, örneğin yapımcılarından edindiğin PC ya da Mac sürümlerini oynatır." },
      { q: "Narra ücretsiz mi?", a: "Evet, tüm özellikleri ücretsiz. İsteğe bağlı destekçi aboneliği yalnız animasyonlu arka plan temalarını açar; bahşişler hiçbir şeyin kilidini açmaz." },
      { q: "Narra başka motorlarla yapılmış oyunları oynatır mı?", a: "Hayır. Narra yalnız Ren'Py oyunları için yapıldı." },
      { q: "Kayıtlarım cihazlar arasında eşitlenir mi?", a: "Evet, kendi iCloud'un üzerinden. Narra'nın Ayarlar ekranında Kayıtlar ve iCloud bölümünden açıp kapatabilirsin. Geliştirici iCloud verilerini göremez." },
      { q: "Narra oyunlarımı bir yere yükler mi?", a: "Hayır. Oyunlar cihazında kalır. Eşitleme açıkken yalnız kayıtlar kendi iCloud'una gider. Oyun içi çeviriyi açarsan çevrilecek metin Google Çeviri'ye gönderilir." },
    ],
    reportTitle: "Sorun bildirirken",
    reportIntro: "En hızlı yol uygulamanın içinden:",
    reportSteps: [
      "Kütüphanenin sağ üstündeki menüyü aç ve Yardım ve Destek'i seç.",
      "Sorun Bildir'e dokun, oyunu seç ve ne olduğunu anlat.",
      "Oyun ücretsiz indirilebiliyorsa denenebilmesi için bağlantısını ekle.",
      "E-posta uygulaman ayrıntılar doldurulmuş olarak açılır. Gönder'e dokunmadıkça hiçbir şey gönderilmez.",
    ],
    reportCrash: "Bir oyun çökerse Narra bir hata ekranı gösterir. Raporu günlükleriyle göndermek için oradaki Paylaş ya da Sorun Bildir düğmesini kullan.",
  },
  notFound: {
    title: "Bu sayfa yolunu kaybetmiş",
    say: "Her yere baktım, ayın arkasına bile. Bu sayfa burada değil.",
    back: "Başa dön",
  },
} satisfies Dict;
