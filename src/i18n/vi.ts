import type { Dict } from "./en";

export default {
  meta: {
    homeTitle: "Narra: trình chơi visual novel Ren'Py cho iPhone và iPad",
    homeDescription:
      "Narra chơi những visual novel Ren'Py bạn đã có trên iPhone và iPad. Mười ba phiên bản công cụ có sẵn, trình quản lý bản lưu có đồng bộ iCloud, bản mod, thư viện ảnh và một người dẫn đường nhỏ tên là Narra. Miễn phí, không cần tài khoản, không theo dõi.",
    privacyTitle: "Chính sách quyền riêng tư",
    privacyDescription:
      "Narra làm gì với thông tin của bạn: không tài khoản, không quảng cáo, không phân tích. Trò chơi và bản lưu của bạn ở lại trên thiết bị và trong iCloud của chính bạn.",
    supportTitle: "Trợ giúp & hỗ trợ",
    supportDescription:
      "Giải đáp các câu hỏi thường gặp về Narra, cách báo cáo sự cố và cách liên hệ nhà phát triển qua email hoặc Discord.",
    termsTitle: "Điều khoản sử dụng",
    termsDescription:
      "Điều khoản sử dụng Narra: thỏa thuận cấp phép tiêu chuẩn của Apple, cùng vài lưu ý về nội dung bạn mang vào và về việc mua hàng.",
    notFoundTitle: "Không tìm thấy trang",
    ogAlt: "Narra, một người dẫn đường nhỏ phát sáng, ló ra từ mép bên cạnh tên ứng dụng",
  },
  nav: {
    skip: "Chuyển đến nội dung",
    home: "Trang chủ Narra",
    support: "Hỗ trợ",
    privacy: "Quyền riêng tư",
    terms: "Điều khoản",
    language: "Ngôn ngữ",
    toLight: "Chuyển sang giao diện sáng",
    toDark: "Chuyển sang giao diện tối",
    contents: "Mục lục",
  },
  langSuggest: {
    message: "Trang này cũng có bản tiếng Việt.",
    action: "Đọc bằng tiếng Việt",
    dismiss: "Đóng",
  },
  cta: {
    appStore: "Tải về trên App Store",
    comingSoon: "Sắp có trên App Store",
    discord: "Theo dõi trên Discord",
  },
  hero: {
    eyebrow: "Trình chơi visual novel cho iPhone và iPad",
    dialogueLabel: "Narra tự giới thiệu",
    lines: [
      "Ồ, chào bạn. Mình là Narra.",
      "Bạn cứ mang trò chơi tới. Phần còn lại để mình lo.",
      "Thư mục, tệp ZIP, bản lưu, cả phiên bản Ren'Py hợp với từng trò chơi nữa. Mình nhớ hết.",
      "Khi nào sẵn sàng thì cuộn xuống nhé. Mình sẽ kể bạn nghe trọn câu chuyện.",
    ],
    next: "Câu tiếp theo",
    begin: "Bắt đầu câu chuyện",
    compat: "Dành cho trò chơi làm bằng Ren'Py 7.4 đến 8.6. Narra không kèm sẵn trò chơi nào; bạn tự mang trò chơi của mình tới.",
    sceneAlt: "Narra lơ lửng trên một thị trấn đang ngủ trong đêm, đọc một cuốn sách phát sáng",
  },
  chapters: {
    arrive: {
      title: "Mang câu chuyện của bạn tới",
      say: "Mình không bán trò chơi và cũng chẳng có sẵn trò chơi nào. Bạn mang những trò bạn đã có tới, mình sẽ giúp chúng thấy như ở nhà.",
      lead: "Thêm trò chơi Ren'Py từ ứng dụng Tệp dưới dạng thư mục hoặc tệp nén ZIP. Chọn nhiều trò cùng lúc, Narra sẽ lần lượt thêm từng trò.",
      pathLabel: "Hoặc thả trò chơi vào đây, Narra sẽ tự tìm thấy:",
      path: ["Tệp", "Trên iPhone", "Narra", "Games"],
      items: [
        { t: "Ảnh bìa tự tìm", d: "Narra lấy ảnh bìa từ chính hình ảnh của trò chơi. Bạn luôn có thể tự chọn ảnh khác." },
        { t: "Bộ sưu tập", d: "Nhóm trò chơi theo series, theo tâm trạng hay theo bất kỳ cách nào bạn thích. Chạm và giữ một trò chơi để kéo nó vào chỗ." },
        { t: "Tìm kiếm, bộ lọc, trạng thái", d: "Tìm trò chơi theo tên, chỉ hiện mục yêu thích, và đánh dấu trò đang chơi, đã chơi xong hay để dành chơi sau." },
        { t: "Cập nhật mà vẫn giữ bản lưu", d: "Thêm phiên bản mới hơn của một trò chơi bạn đã có, Narra sẽ đề nghị cập nhật. Bản lưu của bạn vẫn ở nguyên chỗ cũ." },
        { t: "Kéo để làm mới", d: "Bạn đã chép trò chơi vào thư mục Games trong lúc Narra đang mở? Kéo thư viện xuống, Narra sẽ tìm lại." },
      ],
    },
    engine: {
      title: "Đúng phiên bản Ren'Py cho từng trò chơi",
      say: "Mỗi trò chơi được làm bằng một bản Ren'Py nhất định. Mình mang theo mười ba bản, nên trò nào cũng nhận được đúng bản nó cần.",
      lead: "Narra có sẵn Ren'Py từ 7.4.11 đến 8.6. Narra đọc từng trò chơi, tự chọn phiên bản công cụ phù hợp và không cần thư mục renpy riêng của trò chơi. Nếu bạn muốn tự chọn, hãy đổi trong trang của trò chơi.",
      timelineLabel: "Các phiên bản Ren'Py có trong Narra",
      py2: "Python 2",
      py3: "Python 3",
      preRelease: "bản dựng thử trước phát hành",
      items: [
        { t: "Dòng thời gian phiên bản", d: "Xem mọi phiên bản có sẵn theo thứ tự, trò chơi được làm bằng bản nào và Narra đã chọn bản nào." },
        { t: "Biến thể màn hình", d: "Cho trò chơi biết nó đang chạy trên điện thoại, máy tính bảng, máy tính hay TV, và trò chơi có thể chuyển sang bố cục dành riêng cho thiết bị đó." },
        { t: "Cài đặt cho từng trò chơi", d: "Tốc độ chữ, phông chữ, hướng màn hình và nhiều thứ khác có thể theo cài đặt chung hoặc chỉ áp dụng cho một trò chơi." },
        { t: "Phông chữ của riêng bạn", d: "Thêm phông chữ cho mọi trò chơi hoặc chỉ cho một trò." },
      ],
    },
    helper: {
      title: "Người bạn ở mép màn hình",
      say: "Trong lúc bạn đọc, mình bám vào mép màn hình và giữ im lặng. Phần lớn thời gian thôi.",
      lead: "Narra chờ ở bên cạnh trò chơi, không cản đường bạn. Vòng cung quanh Narra đầy dần khi bạn đọc tiếp câu chuyện. Chạm vào Narra để mở menu, hoặc kéo sang mép khác.",
      bubblesLabel: "Những điều Narra có thể nói",
      bubblesNote: "Gợi ý của Narra là tùy chọn. Tắt đi thì Narra sẽ im lặng.",
      barLabel: "Thanh thu gọn",
      bar: { rewind: "Tua lại", skip: "Bỏ qua", hide: "Ẩn hộp văn bản", keyboard: "Bàn phím" },
      items: [
        { t: "Thanh thu gọn theo ý bạn", d: "Tua lại, bỏ qua, ẩn hộp văn bản hay mở bàn phím từ một thanh nhỏ. Di chuyển, đổi kích thước, chỉnh độ mờ và chọn tối đa năm nút." },
        { t: "Màn hình tạm dừng", d: "Bạn đã đọc đến đâu, đã chơi bao lâu, cài đặt nhanh và mọi công cụ ở cùng một chỗ." },
        { t: "Lưu nhanh và tải nhanh", d: "Chạm một lần, Narra sẽ báo khi xong." },
        { t: "Ảnh chụp màn hình", d: "Giữ lại cảnh bạn thích. Ảnh chụp màn hình được lưu vào thư mục Screenshots trong ứng dụng Tệp." },
      ],
    },
    controls: {
      title: "Chơi theo cách của bạn",
      say: "Trên ghế sofa, trên tàu, bên bàn làm việc. Mang tay cầm theo cũng được. Mình không phiền đâu.",
      lead: "Narra thích ứng với cách bạn cầm thiết bị và với thứ bạn dùng để chơi.",
      items: [
        { t: "Tay cầm chơi game", d: "Kết nối tay cầm và gán nút theo ý bạn." },
        { t: "Phím tắt bàn phím", d: "Với bàn phím, các phím Ren'Py quen thuộc vẫn dùng được, kèm phím tắt cho các công cụ riêng của Narra." },
        { t: "Màn hình dọc trên iPhone", d: "Cầm iPhone dọc và đọc tiếp, hoặc để trò chơi xoay theo bạn." },
        { t: "Bàn phím riêng", d: "Khi trò chơi yêu cầu bạn nhập tên, Narra mang tới một bàn phím hợp với trò chơi." },
        { t: "Cuộn bằng hai ngón", d: "Cuộn lịch sử hội thoại bằng hai ngón tay, hoặc đặt một bánh xe cuộn nhỏ trên màn hình." },
      ],
    },
    saves: {
      title: "Bản lưu bạn có thể tin tưởng",
      say: "Trước khi thay đổi hay xóa thứ gì, mình luôn tạo một bản sao lưu an toàn. Thói quen cũ rồi.",
      lead: "Mỗi trò chơi có trình quản lý bản lưu riêng. Xem từng bản lưu kèm ảnh chụp màn hình, sao lưu, xuất, khôi phục hoặc bắt đầu lại từ đầu.",
      items: [
        { t: "Đồng bộ iCloud", d: "Bản lưu đi lại giữa iPhone và iPad qua iCloud của chính bạn, được tải lên ngay khi bạn chơi xong." },
        { t: "Sao lưu", d: "Sao lưu một trò chơi hoặc tất cả cùng lúc. Các tệp nén ZIP xuất hiện trong ứng dụng Tệp, trong mục Narra." },
        { t: "Nhập và xuất", d: "Mang bản lưu từ máy tính hoặc thiết bị khác sang. Nếu ô đã có bản lưu, bạn quyết định: giữ cả hai, thay thế hoặc bỏ qua." },
        { t: "Bản sao lưu an toàn", d: "Khôi phục, xóa hay đặt lại đều tạo bản sao lưu an toàn trước, nên một lần chạm nhầm không phải là hết." },
        { t: "Xem nội dung bản lưu", d: "Tò mò bên trong bản lưu có gì? Mở ra và xem dữ liệu, văn bản và ảnh chụp màn hình của nó." },
      ],
    },
    extras: {
      title: "Bản mod, thư viện ảnh và vài bí mật",
      say: "Mấy thứ này dành cho người tò mò. Mình sẽ không kể với ai đâu.",
      lead: "Cho những ngày bạn muốn đi xa thêm một chút.",
      items: [
        { t: "Trình quản lý bản mod", d: "Thêm bản mod dưới dạng thư mục hoặc tệp ZIP, sắp xếp thứ tự và bật hoặc tắt chúng. Bản mod chung áp dụng cho mọi trò chơi Ren'Py, và khi có gì trục trặc, bạn có thể khởi động trò chơi một lần không mod." },
        { t: "Thư viện ảnh", d: "Xem hình ảnh, nhạc và video được đóng gói trong các tệp lưu trữ .rpa của trò chơi." },
        { t: "Dịch trong trò chơi", d: "Tùy chọn. Dịch văn bản của trò chơi trong khi chơi. Khi bật, văn bản cần dịch sẽ được gửi tới Google Dịch." },
        { t: "Menu gian lận (beta)", d: "Menu gian lận và vài công cụ tiện lợi như tua lại, bộ đếm FPS và mở khóa thư viện ảnh." },
      ],
    },
    world: {
      title: "Mười bảy ngôn ngữ, không theo dõi gì cả",
      say: "Mình nói được mười bảy ngôn ngữ. Trò chuyện thì mình rất sẵn lòng, nhưng mình không ghi chép gì về bạn đâu.",
      lead: "Narra dùng ngôn ngữ của thiết bị. Để chọn ngôn ngữ khác chỉ cho Narra, hãy mở ứng dụng Cài đặt và vào Ứng dụng > Narra > Ngôn ngữ.",
      languagesLabel: "Narra nói được",
      promises: ["Không tài khoản.", "Không quảng cáo.", "Không phân tích, không theo dõi."],
      promisesNote: "Trò chơi và bản lưu của bạn ở lại trên thiết bị và trong iCloud của chính bạn.",
      privacyLink: "Đọc chính sách quyền riêng tư",
    },
  },
  epilogue: {
    label: "Lời kết",
    title: "Miễn phí từ trang đầu đến trang cuối",
    lead: "Mọi tính năng của Narra đều miễn phí. Narra do một nhà phát triển duy nhất, Emir Han Temur, làm ra, và nếu bạn muốn giúp Narra lớn lên thì có hai cách.",
    supporterTitle: "Gói đăng ký ủng hộ",
    supporter: "Theo tháng hoặc theo năm. Gói này mở khóa các chủ đề nền động, và chỉ mở khóa đúng thế thôi.",
    tipsTitle: "Tiền tip",
    tips: "Một lời cảm ơn một lần. Tiền tip không mở khóa gì cả, nhưng có ý nghĩa rất lớn.",
    say: "Câu chuyện của mình tạm thời đến đây. Tiếp theo là câu chuyện của bạn.",
    choices: "Giờ làm gì tiếp?",
    faq: "Đọc phần hỏi đáp",
  },
  footer: {
    madeBy: "Do Emir Han Temur làm ra.",
    independent: "Narra là ứng dụng độc lập, không liên kết với và không được dự án Ren'Py xác nhận.",
    trademarks: "Apple, iPhone, iPad, iCloud và App Store là nhãn hiệu của Apple Inc.",
    email: "Email",
  },
  legal: {
    effective: "Có hiệu lực từ {date}",
    translationNote: "Đây là bản dịch. Nếu có khác biệt với bản tiếng Anh, bản tiếng Anh sẽ được ưu tiên áp dụng.",
  },
  privacy: {
    intro: [
      "Narra là ứng dụng để chơi visual novel Ren'Py trên iPhone và iPad, do Emir Han Temur, một nhà phát triển độc lập, làm ra (dưới đây gọi là “tôi”). Chính sách này giải thích điều gì xảy ra với thông tin của bạn khi bạn dùng ứng dụng Narra và trang web playnarra.app.",
      "Tóm lại: Narra không có tài khoản, không có quảng cáo, không có phân tích, và tôi không thu thập dữ liệu cá nhân của bạn.",
    ],
    sections: [
      {
        h: "Những gì ở lại trên thiết bị",
        p: [
          "Trò chơi bạn nhập, ảnh bìa của chúng, bản lưu, cài đặt, thời gian chơi, ảnh chụp màn hình, phông chữ và bản mod được lưu trong Narra trên thiết bị của bạn. Chúng không được gửi cho tôi và tôi không thể xem chúng.",
        ],
      },
      {
        h: "iCloud",
        p: [
          "Nếu đồng bộ iCloud đang bật (mặc định là bật), Narra sao chép bản lưu trò chơi của bạn vào iCloud Drive của chính bạn để chúng có thể chuyển giữa các thiết bị. Bản thân trò chơi không được tải lên. Dữ liệu này nằm trong tài khoản iCloud của bạn, dưới sự kiểm soát của Apple và theo chính sách quyền riêng tư của Apple; tôi không có quyền truy cập vào dữ liệu đó.",
          "Bạn có thể tắt đồng bộ bất cứ lúc nào trong Cài đặt của Narra, ở mục Bản lưu & iCloud. Tắt đồng bộ không xóa bất cứ thứ gì đã có trên iCloud.",
        ],
      },
      {
        h: "Dịch trong trò chơi (tùy chọn)",
        p: [
          "Tính năng dịch luôn tắt cho đến khi bạn bật. Khi bạn dùng, văn bản trò chơi cần dịch được gửi tới Google Dịch, và chính sách quyền riêng tư của Google áp dụng cho văn bản đó. Narra không gắn tên, tài khoản hay bất kỳ mã định danh nào của bạn vào văn bản.",
        ],
        link: { text: "Chính sách quyền riêng tư của Google", href: "https://policies.google.com/privacy?hl=vi" },
      },
      {
        h: "Báo cáo lỗi và email hỗ trợ",
        p: [
          "Khi có sự cố, Narra có thể chuẩn bị một báo cáo lỗi, còn Báo cáo sự cố sẽ chuẩn bị một email hỗ trợ. Cả hai đều không được gửi tự động: chúng chỉ được chia sẻ nếu chính bạn gửi đi, qua email hoặc bảng chia sẻ.",
          "Báo cáo được ẩn danh hóa. Đường dẫn tệp được rút gọn, tên thư mục người dùng và địa chỉ email được ẩn đi. Một báo cáo có thể gồm kiểu máy, phiên bản hệ thống, ngôn ngữ và vùng, phiên bản ứng dụng, thông tin về trò chơi liên quan (phiên bản, phiên bản Ren'Py và dung lượng) và nhật ký gần đây. Báo cáo không bao giờ chứa nội dung bản lưu của bạn.",
          "Tôi chỉ dùng những gì bạn gửi để trả lời bạn và sửa lỗi, và không chia sẻ chúng với bất kỳ ai.",
        ],
      },
      {
        h: "Mua hàng",
        p: [
          "Gói đăng ký ủng hộ và tiền tip được Apple xử lý qua App Store. Tôi không nhận được tên, địa chỉ email hay thông tin thanh toán của bạn. Narra chỉ hỏi Apple xem gói đăng ký có đang hoạt động hay không, để mở khóa các nền động.",
        ],
      },
      {
        h: "Không phân tích, quảng cáo hay theo dõi",
        p: [
          "Narra không chứa mã phân tích hay quảng cáo. Narra không theo dõi bạn qua các ứng dụng hay trang web và không dùng dữ liệu của bạn cho quảng cáo.",
        ],
      },
      {
        h: "Trang web này",
        p: [
          "playnarra.app là một trang web tĩnh được lưu trữ trên GitHub Pages. Trang web không dùng cookie, không phân tích và không dùng phông chữ hay tập lệnh của bên thứ ba. Nếu bạn đổi giao diện, lựa chọn của bạn được lưu trong bộ nhớ cục bộ của trình duyệt và không bao giờ rời khỏi thiết bị của bạn.",
          "Như mọi dịch vụ lưu trữ web, GitHub có thể xử lý dữ liệu kỹ thuật như địa chỉ IP trong nhật ký máy chủ để giữ cho dịch vụ an toàn.",
        ],
        link: { text: "Tuyên bố về quyền riêng tư của GitHub", href: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" },
      },
      {
        h: "Trẻ em",
        p: [
          "Narra không thu thập dữ liệu cá nhân từ bất kỳ ai, kể cả trẻ em. Narra không kèm sẵn trò chơi nào; nội dung bạn nhập vào và việc nội dung đó có phù hợp với độ tuổi của bạn hay không là do bạn quyết định.",
        ],
      },
      {
        h: "Lựa chọn của bạn",
        p: [
          "Vì tôi không giữ dữ liệu của bạn nên tôi không có gì để giao lại hay xóa. Xóa Narra sẽ gỡ mọi thứ Narra đã lưu trên thiết bị của bạn. Bản lưu trên iCloud có thể được quản lý trong phần cài đặt iCloud của thiết bị. Tính năng dịch và đồng bộ iCloud có thể tắt bất cứ lúc nào.",
        ],
      },
      {
        h: "Thay đổi",
        p: [
          "Nếu chính sách này thay đổi, phiên bản mới sẽ được đăng trên trang này kèm ngày hiệu lực mới. Những thay đổi quan trọng cũng sẽ được nêu trong ghi chú phát hành của ứng dụng.",
        ],
      },
      {
        h: "Liên hệ",
        p: ["Mọi câu hỏi về quyền riêng tư, bạn cứ gửi đến địa chỉ bên dưới."],
      },
    ],
  },
  terms: {
    intro: [
      "Narra được cấp phép cho bạn theo Thỏa thuận cấp phép người dùng cuối dành cho ứng dụng được cấp phép tiêu chuẩn của Apple (EULA). Các lưu ý dưới đây bổ sung cho thỏa thuận đó; nếu có điểm khác nhau, EULA của Apple được ưu tiên.",
    ],
    eulaLink: "EULA tiêu chuẩn của Apple",
    sections: [
      {
        h: "Nội dung của bạn",
        p: [
          "Narra không cung cấp, bán hay phân phối trò chơi hoặc bất kỳ nội dung nào khác. Bạn chịu trách nhiệm về các trò chơi, bản mod, phông chữ và tệp bạn nhập vào, cũng như về việc có quyền sử dụng chúng.",
        ],
      },
      {
        h: "Trò chơi do người khác làm",
        p: [
          "Các trò chơi bạn chơi trong Narra thuộc về người tạo ra chúng. Narra không liên kết với họ hay với dự án Ren'Py, và không thể hứa rằng mọi trò chơi đều chạy được.",
        ],
      },
      {
        h: "Gói đăng ký và tiền tip",
        p: [
          "Việc mua hàng do Apple xử lý. Gói đăng ký ủng hộ tự động gia hạn trừ khi được hủy ít nhất 24 giờ trước khi kỳ hiện tại kết thúc; bạn có thể quản lý hoặc hủy gói trong phần cài đặt tài khoản App Store. Tiền tip là khoản thanh toán một lần và không mở khóa gì cả.",
        ],
      },
      {
        h: "Bản dịch",
        p: ["Tính năng dịch trong trò chơi do Google Dịch cung cấp và không phải lúc nào cũng chính xác."],
      },
      {
        h: "Thay đổi",
        p: ["Các điều khoản này có thể được cập nhật. Ngày ở đầu trang cho biết phiên bản hiện hành."],
      },
      {
        h: "Liên hệ",
        p: ["Mọi câu hỏi về các điều khoản này, bạn cứ gửi đến địa chỉ bên dưới."],
      },
    ],
  },
  support: {
    intro: "Giải đáp những câu hỏi thường gặp, và cách để liên hệ với một người thật.",
    contactTitle: "Trò chuyện với chúng tôi",
    emailNote: "Lỗi, câu hỏi, ý tưởng: đều được chào đón.",
    discordTitle: "Discord",
    discordNote: "Trò chuyện với những người chơi khác và theo dõi quá trình phát triển của Narra.",
    faqTitle: "Hỏi và đáp",
    basicsTitle: "Trước khi bắt đầu",
    basics: [
      { q: "Narra có kèm sẵn trò chơi không?", a: "Không. Narra không kèm theo, không bán và không tải trò chơi về. Narra chơi những trò chơi Ren'Py bạn đã có, chẳng hạn bản PC hoặc Mac bạn nhận từ người làm trò chơi." },
      { q: "Narra có miễn phí không?", a: "Có, mọi tính năng đều miễn phí. Gói đăng ký ủng hộ không bắt buộc chỉ mở khóa các chủ đề nền động, còn tiền tip không mở khóa gì cả." },
      { q: "Narra có chơi được trò chơi làm bằng công cụ khác không?", a: "Không. Narra chỉ dành cho trò chơi Ren'Py." },
      { q: "Bản lưu của tôi có đồng bộ giữa các thiết bị không?", a: "Có, qua iCloud của chính bạn. Bật hoặc tắt trong Cài đặt của Narra, ở mục Bản lưu & iCloud. Nhà phát triển không thể xem dữ liệu iCloud của bạn." },
      { q: "Narra có tải trò chơi của tôi lên không?", a: "Không. Trò chơi ở lại trên thiết bị của bạn. Khi bật đồng bộ, chỉ bản lưu được gửi lên iCloud của chính bạn. Nếu bạn bật dịch trong trò chơi, văn bản cần dịch sẽ được gửi tới Google Dịch." },
    ],
    reportTitle: "Báo cáo sự cố",
    reportIntro: "Cách nhanh nhất là ngay trong ứng dụng:",
    reportSteps: [
      "Mở menu ở góc trên bên phải thư viện và chọn Trợ giúp & hỗ trợ.",
      "Chạm vào Báo cáo sự cố, chọn trò chơi và mô tả chuyện đã xảy ra.",
      "Nếu trò chơi tải về miễn phí được, hãy thêm đường liên kết để có thể thử.",
      "Ứng dụng thư sẽ mở ra với thông tin đã được điền sẵn. Không có gì được gửi đi cho đến khi bạn chạm Gửi.",
    ],
    reportCrash: "Nếu trò chơi bị văng, Narra sẽ hiện màn hình lỗi. Dùng Chia sẻ hoặc Báo cáo sự cố ở đó để gửi báo cáo kèm nhật ký.",
  },
  notFound: {
    title: "Trang này đi lạc mất rồi",
    say: "Mình đã tìm khắp nơi, cả sau lưng mặt trăng. Trang này không có ở đây.",
    back: "Quay về từ đầu",
  },
} satisfies Dict;
