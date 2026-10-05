# playnarra.app

Narra'nın tanıtım sitesi. Astro ile üretilen durağan bir site; Cloudflare Workers üzerinden `playnarra.app` alan adıyla yayımlanır. Varsayılan dil İngilizce (`/`), diğer 16 dil kendi önekinde (`/tr/`, `/de/`, `/zh-hans/` ...).

Sayfalar: ana sayfa (görsel roman gibi okunan bölümler), `/privacy/` (App Store Connect'e verilecek kalıcı gizlilik adresi), `/support/`, `/terms/` ve 404.

## Yerel geliştirme

Node 20 ve npm gerekir.

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # tip denetimi + derleme + iç bağlantı denetimi (dist/)
npm run preview    # dist/ klasörünü sunar
```

`npm run build` üç adımdır: `astro check` (eksik ya da fazla çeviri anahtarı burada hata verir), `astro build` (görseller AVIF/WebP'ye burada çevrilir; çeviri dosyaları arasında anahtar ya da liste uzunluğu farkı varsa derleme durur) ve `scripts/check-links.mjs` (kırık iç bağlantı varsa durur).

## Ayarlar: `src/config.ts`

| Alan | Açıklama |
| --- | --- |
| `siteUrl` | `https://playnarra.app` |
| `appStoreUrl` | Boşken indirme düğmesi "Yakında App Store'da" yazısına dönüşür ve bağlantı değildir. |
| `appStoreId` | Boşken Safari'nin akıllı uygulama bandı (`apple-itunes-app`) eklenmez. |
| `supportEmail`, `discordUrl` | Destek sayfası, alt bilgi ve gizlilik sayfasında kullanılır. |
| `screensReady` | Uygulama ekran görüntüleri eklenince `true` yapılır (aşağıya bakın). |
| `lastUpdated` | Gizlilik politikası ve kullanım şartlarının yürürlük tarihi (YYYY-MM-DD). |

### App Store bağlantısını ayarlama

Uygulama yayımlanınca `appStoreUrl` alanına `https://apps.apple.com/app/id<KİMLİK>` ve `appStoreId` alanına yalnız sayıyı yazın, sonra değişikliği gönderin. Giriş bölümündeki ve son bölümdeki düğmeler kendiliğinden "App Store'dan İndir" bağlantısına döner, JSON-LD'ye indirme adresi eklenir.

## Ekran görüntüleri

Bölümler uygulamanın gerçek ekran görüntülerini telefon çerçevesinde gösterir (`screensReady: true`). Görüntüler şu yuvalara konur:

```
src/assets/screens/common/<ad>.png    tüm diller için
src/assets/screens/<dil>/<ad>.png     o dile özel (ör. tr/, ja/, zh-Hans/); varsa ortak olanın yerine geçer
```

| Ad | Yön ve boyut | Gösterildiği bölüm |
| --- | --- | --- |
| `library` | dikey 1260x2736 | Bölüm I (oyun ekleme ve kütüphane) |
| `hub` | dikey 1260x2736 | Bölüm II'de `engine-picker` yoksa |
| `engine-picker` | dikey 1260x2736 | Bölüm II (motor sürümleri) |
| `in-game-narra` | yatay 2736x1260 | Bölüm III, `proactive` yoksa |
| `portrait-play` | dikey 1260x2736 | Bölüm IV (kontroller); yoksa `pause` |
| `pause` | yatay 2736x1260 | Bölüm III'te öneri balonunun arkasında; Bölüm IV'te `portrait-play` yoksa |
| `saves` | dikey 1260x2736 | Bölüm V (kayıtlar) |
| `mods` | dikey 1260x2736 | Bölüm VI (modlar, galeri) |
| `gallery` | dikey 1260x2736 | Bölüm VI, mod ekranının arkasında |
| `proactive` | yatay 2736x1260 | Bölüm III (Narra'nın öneri balonu) |
| `settings` | dikey 1260x2736 | Bölüm VII (diller, gizlilik) |

PNG, JPEG ya da WebP olabilir; Astro derlemede AVIF/WebP ve uygun boyutlar üretir. Telefon çerçevesi görüntünün kendi oranını alır (iPhone Air 1260x2736 varsayılır, başka boyutlar da olur). Görüntüleri pazarlama klasöründen almak için: `node scripts/import-screens.mjs` (varsayılan kaynak `../marketing/screens/raw/iphone-air`; PNG'ler doğrudan bu klasördeyse İngilizce sayılıp ortak klasöre, `<dil>/<ad>.png` alt klasörleri varsa o dilin klasörüne gider, `en` ortak klasöre gider). Betik PNG'leri yüksek kaliteli WebP kaynağa çevirir, depo küçük kalır.

`screensReady: false` yapılırsa bölümleri yine Narra'nın pozları ve çizimler anlatır (kayıt kartları, mod katmanları, oyun içi sahne çizimi). Açıkken eksik kalan görüntünün yerine uygulamanın zemini ve Narra ile çizilmiş bir yer tutucu görünür. Ekran görüntüleri açıkken:
- Bölüm III'te çizim yerine gerçek öneri balonu (`proactive`, yoksa `in-game-narra`) ve arkasında duraklatma ekranı (`pause`) gösterilir; ikisi aynı şeyi anlattığı için hiçbir zaman birlikte görünmez.
- Kayıt kartları ve mod katmanları çizimleri kalkar (gerçek ekranlar aynı şeyi gösteriyor); bölümün Narra pozu telefonun köşesinde küçük durur.
- Bölüm VI'da mod ekranının arkasında galeri ekranı yelpaze gibi durur.
- Kütüphane ve mod ekranlarındaki oyun adları uydurmadır; altlarında dile göre "Örnek kütüphane. Oyun adları uydurmadır." notu çıkar (`screens.sampleNote`).

Telefon çerçevesi CSS ile çizilir; ekran görüntüsünün kendisinde çerçeve olmamalı (Simulator'daki "Save Screen" ya da cihaz ekran görüntüsü olduğu gibi).

## Görseller ve yazı tipleri

- Marka görselleri `src/assets/brand/` altında: `hero-backdrop.webp` (giriş zemini, yalnız koyu temada tam görünür), `hero-narra.webp`, `narra-wave.webp`, `narra-gamepad.webp`, `narra-cloud.webp`, `og-background.webp`, `app-icon.webp`.
- Alt bilgide gezinen Narra'nın pozları `src/assets/mascot/walk/<ad>.png` altındadır: `narra-drift` (sağa doğru süzülme, yandan), `narra-look` (izleyiciye bakma), `narra-wave` (el sallama), `narra-sit` (kenarda kitap okuma), `narra-sleep` (kıvrılıp uyuma), `narra-peek` (alt kenarı düz kesik, iki eliyle kenara tutunup bakma). Poz listesi tek yerdedir: `src/lib/walk-poses.ts`. Klasöre aynı adla yeni bir çizim konunca derlemede kendiliğinden kullanılır; çizimi olmayan poz mevcut bir maskot görselini ödünç alır.
- Bu çizimler `scripts/cutout_mascot.py` ile hazırlanır (kaynak PNG'ler depoya girmez): zemin temizlenir (saydam kaynakta alfa korunur, karakterin içi tam opak yapılır; beyaz zeminli kaynakta yalnız dış zemine ve dış haleye "unmultiply white" uygulanır, iç bölge delinmez), her pozda baş aynı büyüklüğe getirilir (göz merkezleri betikte ölçülüdür), kırpma yüzün ortasına göre simetriktir, peek'in alt kesiği korunur: `uv run --no-project --with pillow --with numpy python scripts/cutout_mascot.py <kaynak klasör>`.
- Maskot pozları uygulamanın asset kataloğundan alınır: `npm run assets` (`scripts/prepare-assets.mjs`). Site uygulama deposunun içinde değilse yol verin: `NARRA_APP_DIR=/yol/Narra npm run assets`. Aynı betik favicon ve simgeleri üretir, yazı tiplerini `public/fonts/` altına kopyalar ve `src/styles/fonts.css` dosyasını yazar.
- Yazı tipleri siteyle birlikte barındırılır (Google Fonts'a istek gitmez). Her dil yalnız kendi alt kümesini indirir (`unicode-range`). Japonca, Korece ve Çince için web yazı tipi indirilmez; sistem yazı tipleri kullanılır.
  - Nunito (gövde) ve Cormorant Garamond (başlıklar): Latin, Latin Extended, Kiril, Vietnamca.
  - Vazirmatn (Arapça ve Farsça gövde), Amiri (Arapça ve Farsça başlıklar).
  - Lisanslar: dördü de SIL Open Font License 1.1 (`public/fonts/*-LICENSE.txt`).
- Amiri, mobil hız için sitede geçen harflere göre küçültülür: `python3 scripts/subset_amiri.py` (fonttools ve brotli gerekir: `pip install fonttools brotli`). Arapça ya da Farsça metin değişince bu betiği, ardından `npm run assets` çalıştırın.
- Paylaşım görselleri (1200x630, her dil için): `npm run og` ile `public/og/` altına üretilir. Playwright Chromium ister: `npx playwright install chromium`. Zemin `src/assets/brand/og-background.png` varsa ondan, yoksa `og-background.webp`'den alınır.

## Çeviriler

- Her dilin metni `src/i18n/<dil>.ts` dosyasındadır. Kaynak dil `en.ts`'tir; diğerleri `satisfies Dict` ile ona bağlıdır.
- Uygulamanın kendi metinleri (slogan, Narra'nın oyun içi cümleleri, SSS) uygulamanın `Localizable.strings` dosyalarından gelir: `python3 scripts/sync_app_strings.py` bunları `src/i18n/app-strings.json` dosyasına yazar. Uygulama metni değişince betiği yeniden çalıştırın.
- Dil listesi, URL önekleri, yazı yönü ve "Bölüm I / 第1章 / الفصل الأول" biçimleri `src/i18n/languages.ts` içindedir.

### Yeni dil ekleme

1. `src/i18n/languages.ts`: `LANGS` listesine kodu, `LANG_INFO`'ya adı, yönü, Open Graph yerel ayarını ve yazı sistemini; `chapterLabel` ve gerekiyorsa `chapterNumeral`'a bölüm biçimini ekleyin.
2. `src/i18n/en.ts` dosyasını `src/i18n/<kod>.ts` olarak kopyalayıp çevirin (`import type { Dict } from "./en";` ve `satisfies Dict` ile).
3. `scripts/sync_app_strings.py` içindeki `LANGS` listesine kodu ekleyip betiği çalıştırın (uygulamada da o dil olmalı).
4. `scripts/make-og.mjs` içindeki `LANGS` listesine ekleyip `npm run og` çalıştırın.
5. Yeni bir yazı sistemi gerekiyorsa `scripts/prepare-assets.mjs` içindeki `FONTS` listesine alt kümeyi, `src/styles/tokens.css` içine o dilin yazı tipi yığınını ekleyin.
6. `npm run build`. Eksik anahtar varsa derleme hangi anahtar olduğunu söyleyerek durur.

## Yayın (Cloudflare Workers)

Site Cloudflare'de `narraweb` adlı Worker'dan yayımlanır; Worker bu GitHub deposuna bağlıdır. `main` dalına her gönderimde Cloudflare siteyi derler (`npm run build`, çıktı `dist/`) ve yaklaşık bir iki dakikada `playnarra.app`'e yansır.

- DNS: `playnarra.app` kaydı Cloudflare'de Worker türündedir ve proxili (turuncu bulut) kalmalıdır; griye çevrilirse site kapanır.
- GitHub Pages kullanılmaz (kapalı); `.github/workflows` ve `public/CNAME` bu yüzden yoktur.
- Cloudflare Web Analytics bu alan adı için kapalıdır. Gizlilik politikası "analiz yok" dediği için açılmamalıdır; açılırsa gizlilik metni de güncellenmelidir.
- Posta: `support@playnarra.app` Cloudflare Email Routing ile Gmail'e yönlenir (MX + SPF + DMARC kayıtları). Bu kayıtlar silinmemelidir.

## Hareket

Hareket dili `src/styles/motion.css` ve `src/scripts/motion.ts` içindedir (bileşene özel hareketler bileşenin kendi `<style>` bloğunda). Hepsi yalnız transform ve opacity kullanır (tek istisna oyun içi sahnedeki ilerleme yayının çizgi uzunluğu) ve Hareketi Azalt açıkken kapanır: gizli başlangıç durumları yalnız `prefers-reduced-motion: no-preference` içinde tanımlıdır, bu yüzden Hareketi Azalt'ta ya da JavaScript olmadan içerik her zaman görünür.

- Sayfa geçişleri: `@view-transition { navigation: auto; }`; logo, üst çubuk araçları, Narra ve alt bilgideki Narra paylaşılan öğe (`data-vt`). Ekranda olmayan öğenin adı geçişte kaldırılır (`<head>` içindeki küçük betik), uçarak gelmez.
- Tema: düğmeden açılan dairesel maske (View Transitions), desteklenmezse ve sistem teması değişince 300 ms renk geçişi.
- Kaydırma: `[data-rise]` öğeleri `animation-timeline: view()` ile belirir; desteklemeyen tarayıcıda IntersectionObserver bir kez `.is-in` ekler. `[data-seq]` kapsayıcıları (zaman çizelgesi, oyun içi sahne, Dosyalar yolu, dil çipleri, kayıt kartları, mod katmanları, widget, son bölüm) görünüme girince bir kez oynar.
- Sonsuz döngüler (`.loop`, `.float`) bulundukları bölüm (`[data-loop]`) ekran dışındayken durur.
- Giriş (`Hero.astro`): solda başlık (uygulamanın `help.about.tagline` metni; "Ren'Py" kelimesi lavanta vurguda, `RevealTitle`'ın `accent` özelliği; Almanca, Rusça, Çekçe, Vietnamca gibi uzun başlıklar daha küçük `clamp` ile), Discord düğmesi ve "Yakında App Store'da" notu (App Store bağlantısı girilince App Store düğmesi birincil olur), uyumluluk notu; sağda kitabıyla süzülen Narra ve yanında küçük "NARRA" satırı (`DialogueBox` `variant="whisper"`: tıklayınca ya da ok düğmesiyle sıradaki satır gelir, son satır Bölüm I'e götürür; bütün satırlar HTML'de durur). Arka planda gece kasabası ve ay; sağdan sola dillerde sahne aynalanır, ay Narra'nın tarafına geçer. Altta sahneyi saran bulut şeridi: üç katman, ay ışığıyla üstten aydınlanan, kenarı dalgalı bulutlar; çok yavaş kayar (120-240 sn), alt kenarı sonraki bölüme solar.
- Alt bilgideki Narra (`FooterNarra.astro`): alt bilginin üst kenar çizgisinin üstünde gezinir, bağlantıların ve metnin üstüne binmez. Bacakla yürümez, süzülür: yukarı-aşağı salınım, gittiği yöne eğilme, saç ve kuyrukta sallantı (aynı görselin maskelenmiş kopyaları), yön değişince aynalama, pozlar arasında çapraz solma. Durum makinesi: ilk görünüşte kenarda `narra-peek`; birkaç yüz piksel süzülür (`narra-drift`); ortada durunca `narra-look`, ara ara `narra-wave`; kenarda durunca `narra-sit`; sayfanın sonuna gelinince en yakın kenara gidip `narra-peek`; 20 sn boyunca kaydırma, işaretçi ya da tuş yoksa `narra-sleep` (üstünde z'ler), hareket gelince uyanır. Üzerine gelince el sallar, dokununca zıplayıp el sallar (`aria-hidden`, odak almaz, dokunma alanı en az 140 px). Döngü yalnız alt bilgi ekrandayken ve sekme görünürken çalışır; Hareketi Azalt'ta ya da JavaScript olmadan kenarda tek pozda (`narra-peek`) durur.

## Gizlilik

Site çerez, analiz ya da üçüncü taraf betik ve yazı tipi kullanmaz. Site Cloudflare arkasında yayımlanıyorsa Cloudflare Web Analytics (otomatik betik ekleme) kapalı olmalı; açıkken gizlilik sayfasındaki "analiz yok" ifadesi doğru olmaz. Tarayıcıda yalnız iki şey saklanır, ikisi de `localStorage`'da ve yalnız o tarayıcıda: seçilen tema (`narra-theme`) ve dil önerisinin kapatıldığı (`narra-lang-dismissed`). İkisi de erişilemezse sayfa yine çalışır.

## Klasör yapısı

```
astro.config.mjs        site adresi, sondaki eğik çizgi, görsel servisi (sharp)
public/                 CNAME, .nojekyll, robots.txt, simgeler, site.webmanifest, fonts/, og/
scripts/                prepare-assets.mjs, make-og.mjs, sync_app_strings.py, subset_amiri.py, cutout_mascot.py, check-links.mjs
src/config.ts           site ayarları
src/i18n/               17 dil dosyası, app-strings.json, languages.ts, index.ts (denetim)
src/styles/             tokens.css (renk, boşluk, yazı, hareket token'ları), global.css, fonts.css (üretilir)
src/components/         Hero, DialogueBox, Footer, FooterNarra, Chapter, Say, HelperScene, EngineTimeline, PhoneFrame, ...
src/lib/                walk-poses.ts (alt bilgideki Narra'nın poz listesi), screens.ts, sparkle.ts
src/layouts/Base.astro  <head> (SEO, hreflang, Open Graph), üst ve alt bilgi
src/pages/              [...lang]/ altında ana sayfa, privacy, support, terms; 404.astro; sitemap.xml.ts
```
