import { Country } from '../../types';

export const OCEANIA_AND_REMAINING_COUNTRIES: Country[] = [
  /* ================= OCEANIA (14) ================= */
  {
    id: "australia",
    name: { fa: "استرالیا", en: "Australia" },
    flag: ["#012169"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 15'><rect width='30' height='15' fill='%23012169'/><path d='M0 0h15v7.5H0z' fill='%23012169'/><path d='M0 0l15 7.5M15 0L0 7.5' stroke='white' stroke-width='1.5'/><path d='M0 3.75h15M7.5 0v7.5' stroke='white' stroke-width='2.5'/><circle cx='22.5' cy='7.5' r='2' fill='white'/></svg>",
    founded: 1901,
    foundedNote: {
      fa: "قدمت استرالیا از اول ژانویه ۱۹۰۱ با فدراسیون شش مستعمره در مشترک‌المنافع استرالیا حساب می‌شود؛ بومیان استرالیا بیش از ۶۵ هزار سال در این قاره زیسته‌اند.",
      en: "Federation established on 1 January 1901; Indigenous Australian nations have inhabited the continent for over 65,000 years."
    },
    summary: {
      fa: "قاره-جزیره‌ی پهناور؛ دیواره‌ی بزرگ مرجانی، صخره‌ی مقدس اولورو در صحرا و تالار اپرای سیدنی.",
      en: "Island continent featuring the Great Barrier Reef, sacred Uluru, Sydney Opera House, and unique wildlife."
    },
    facts: {
      capital: { fa: "کانبرا", en: "Canberra" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۲۶٫۵ میلیون نفر", en: "About 26.5 million" }
    },
    overview: {
      fa: [
        "استرالیا با حیات وحش بی‌همتای کانگوروها و کوآلاها و تمدن باستانی کهن‌ترین فرهنگ پیوسته جهان (بومیان استرالیا)، در ۱۹۰۱ به کشوری یکپارچه و فدرال بدل شد."
      ],
      en: [
        "Home to the world's oldest surviving human cultures, Australia developed a highly prosperous, multicultural society between Pacific and Indian oceans."
      ]
    },
    timeline: [
      { year: 1901, title: { fa: "فدراسیون استرالیا", en: "Federation of Australia" }, text: { fa: "شش ایالت مشترک‌المنافع استرالیا را تشکیل دادند.", en: "Six colonies united into one commonwealth on 1 January." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "new-zealand",
    name: { fa: "نیوزیلند", en: "New Zealand" },
    flag: ["#00247D"],
    founded: 1840,
    foundedNote: {
      fa: "قدمت نیوزیلند از ۶ فوریه ۱۸۴۰ با امضای پیمان وایتانگی میان نمایندگان بریتانیا و روسای قبایل مائوری حساب می‌شود.",
      en: "Counted from 6 February 1840 and the Treaty of Waitangi between Māori chiefs and the British Crown."
    },
    summary: {
      fa: "سرزمین ابر سپید کشیده (آئوتئاروا)؛ فرهنگ غنی مائوری، مناظر رویایی آلپ جنوبی و پیشگام حق رأی زنان.",
      en: "Aotearoa, land of the long white cloud, vibrant Māori culture, fiords, and first in women's suffrage."
    },
    facts: {
      capital: { fa: "ولینگتون", en: "Wellington" },
      language: { fa: "انگلیسی، مائوری", en: "English, Māori" },
      population: { fa: "حدود ۵٫۲ میلیون نفر", en: "About 5.2 million" }
    },
    overview: {
      fa: [
        "نیوزیلند با فرهنگ باستانی هاوایکی مائوری و کوهستان‌های آلپ جنوبی، در سال ۱۸۹۳ نخستین کشور جهان شد که حق رأی زنان را به رسمیت شناخت."
      ],
      en: [
        "Revered for stunning landscapes and environmental stewardship, New Zealand led the world in women's voting rights in 1893."
      ]
    },
    timeline: [
      { year: 1840, title: { fa: "پیمان وایتانگی", en: "Treaty of Waitangi" }, text: { fa: "سنگ بنای تاریخی شکل‌گیری نیوزیلند.", en: "Founding document signed on 6 February." } },
      { year: 1893, title: { fa: "حق رأی زنان", en: "Women's Suffrage" }, text: { fa: "نخستین کشور خودگردان جهان با حق رأی برای زنان.", en: "First nation granting women the right to vote." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "papua-new-guinea",
    name: { fa: "پاپوآ گینه نو", en: "Papua New Guinea" },
    flag: ["#000000", "#DA121A"],
    founded: 1975,
    foundedNote: {
      fa: "قدمت استقلال پاپوآ گینه نو از ۱۶ سپتامبر ۱۹۷۵ از استرالیا حساب می‌شود.",
      en: "Independence gained on 16 September 1975 from Australia."
    },
    summary: {
      fa: "متنوع‌ترین کشور زبانی جهان با بیش از ۸۰۰ زبان بومی در جنگل‌های بارانی استوایی.",
      en: "Most linguistically diverse nation on Earth with over 800 indigenous languages."
    },
    facts: {
      capital: { fa: "پورت مورسبی", en: "Port Moresby" },
      language: { fa: "توک پیسین، انگلیسی، هیری موتو", en: "Tok Pisin, English, Hiri Motu" },
      population: { fa: "حدود ۱۰ میلیون نفر", en: "About 10 million" }
    },
    overview: {
      fa: [
        "پاپوآ گینه نو با پرندگان بهشتی باشکوه، سنت‌های کهن دره‌های مرتفع و تنوع بی‌همتای زیستی و زبانی در اقیانوس آرام جنوبی شناخته می‌شود."
      ],
      en: [
        "Home to Birds of Paradise and pristine highland valleys, PNG preserves hundreds of traditional tribal cultures."
      ]
    },
    timeline: [
      { year: 1975, title: { fa: "استقلال پاپوآ گینه نو", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۱۶ سپتامبر.", en: "Sovereignty established from Australia." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "fiji",
    name: { fa: "فیجی", en: "Fiji" },
    flag: ["#68BFE5"],
    founded: 1970,
    foundedNote: {
      fa: "قدمت استقلال فیجی از ۱۰ اکتبر ۱۹۷۰ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 10 October 1970 from the United Kingdom."
    },
    summary: {
      fa: "مروارید اقیانوس آرام جنوبی با ۳۳۰ جزیره‌ی مرجانی، مهمان‌نوازی بولا و آب‌های زلال فیروزه‌ای.",
      en: "Tropical South Pacific hub of 330 islands, famed for Bula hospitality and coral reefs."
    },
    facts: {
      capital: { fa: "سووا", en: "Suva" },
      language: { fa: "انگلیسی، فیجیایی، هندی فیجی", en: "English, Fijian, Fiji Hindi" },
      population: { fa: "حدود ۹۴۰ هزار نفر", en: "About 940,000" }
    },
    overview: {
      fa: [
        "فیجی مرکز دیپلماسی و فرهنگ ملانزی و پلی‌نزی در اقیانوس آرام است و به خاطر راگبی هفت‌نفره و آیین‌های سنتی کاوا در جهان مشهور است."
      ],
      en: [
        "Crossroads of Pacific seafaring traditions, Fiji is celebrated for rugby prowess and warm communal customs."
      ]
    },
    timeline: [
      { year: 1970, title: { fa: "استقلال فیجی", en: "Independence" }, text: { fa: "استقلال رسمی در ۱۰ اکتبر.", en: "Full sovereignty gained from Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "solomon-islands",
    name: { fa: "جزایر سلیمان", en: "Solomon Islands" },
    flag: ["#0051BA", "#215B33"],
    founded: 1978,
    foundedNote: {
      fa: "قدمت استقلال جزایر سلیمان از ۷ ژوئیه ۱۹۷۸ از بریتانیا حساب می‌شود.",
      en: "Independence achieved on 7 July 1978 from the United Kingdom."
    },
    summary: {
      fa: "مجمع‌الجزایر ملانزی با تالاب‌های مرجانی بکر ماروو و تاریخ نبردهای دریایی جنگ دوم جهانی.",
      en: "Melanesian archipelago famous for pristine Marovo Lagoon and WWII history at Guadalcanal."
    },
    facts: {
      capital: { fa: "هونیارا", en: "Honiara" },
      language: { fa: "انگلیسی، پیجین", en: "English, Pijin" },
      population: { fa: "حدود ۷۳۰ هزار نفر", en: "About 730,000" }
    },
    overview: {
      fa: [
        "جزایر سلیمان با صدها جزیره‌ی آتشفشانی و مرجانی و غواصی در لاشه‌های کشتی‌های تاریخی، بهشتی از حیات دریایی در ملانزی است."
      ],
      en: [
        "Comprising nearly 1,000 islands, the Solomons offer rich coral biodiversity and historic Pacific heritage."
      ]
    },
    timeline: [
      { year: 1978, title: { fa: "استقلال جزایر سلیمان", en: "Independence" }, text: { fa: "استقلال در ۷ ژوئیه ۱۹۷۸.", en: "Independence proclaimed from Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "vanuatu",
    name: { fa: "وانواتو", en: "Vanuatu" },
    flag: ["#D21034", "#009543", "#000000"],
    founded: 1980,
    foundedNote: {
      fa: "قدمت استقلال وانواتو از ۳۰ ژوئیه ۱۹۸۰ پس از حکومت مشترک فرانسه و بریتانیا (کاندومینیوم نیوهبریدز) حساب می‌شود.",
      en: "Independence gained on 30 July 1980 from joint British-French condominium."
    },
    summary: {
      fa: "سرزمین آتشفشان فعال یاسور، خاستگاه پرش بانجی در جزیره پنته‌کاست و شاخص‌های بالای شادکامی زیست‌محیطی.",
      en: "Island nation of active Mount Yasur volcano, origin of land-diving (bungy jumping)."
    },
    facts: {
      capital: { fa: "پورت ویلا", en: "Port Vila" },
      language: { fa: "بسلاما، فرانسوی، انگلیسی", en: "Bislama, French, English" },
      population: { fa: "حدود ۳۳۰ هزار نفر", en: "About 330,000" }
    },
    overview: {
      fa: [
        "وانواتو مجمع‌الجزایری به شکل حرف Y در اقیانوس آرام با آیین‌های اصیل قبیله‌ای کاستوم و اقیانوس‌نوردی باستانی است."
      ],
      en: [
        "Preserving living tribal traditions, Vanuatu consistently ranks among the happiest ecological places in the world."
      ]
    },
    timeline: [
      { year: 1980, title: { fa: "استقلال وانواتو", en: "Independence" }, text: { fa: "تولد جمهوری وانواتو در ۳۰ ژوئیه.", en: "Father Walter Lini led independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "samoa",
    name: { fa: "ساموآ", en: "Samoa" },
    flag: ["#CE1126"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'><rect width='20' height='10' fill='%23CE1126'/><rect width='10' height='5' fill='%23002B7F'/></svg>",
    founded: 1962,
    foundedNote: {
      fa: "قدمت استقلال ساموآ از اول ژانویه ۱۹۶۲ از نیوزیلند حساب می‌شود؛ نخستین کشور جزیره‌ای مستقل در پلی‌نزی.",
      en: "First Polynesian island nation to regain independence on 1 January 1962 from New Zealand."
    },
    summary: {
      fa: "گهواره‌ی فرهنگ پلی‌نزی با آیین باستانی فا ساموآ، خالکوبی‌های سنتی تاتائو و سواحل بکر اوپولو.",
      en: "Cradle of Polynesia, safeguarding Fa'a Samoa customs and natural trench pools."
    },
    facts: {
      capital: { fa: "آپیا", en: "Apia" },
      language: { fa: "ساموآیی، انگلیسی", en: "Samoan, English" },
      population: { fa: "حدود ۲۲۰ هزار نفر", en: "About 220,000" }
    },
    overview: {
      fa: [
        "ساموآ با سنت سه هزار ساله فا ساموآ (روش زندگی ساموآیی) و استخر طبیعی باشکوه تو سوآ، گوهر درخشان اقیانوس آرام است."
      ],
      en: [
        "Home to Robert Louis Stevenson's last resting place, Samoa exemplifies traditional Polynesian village self-governance."
      ]
    },
    timeline: [
      { year: 1962, title: { fa: "استقلال ساموآ", en: "Independence" }, text: { fa: "نخستین کشور مستقل در پلی‌نزی مدرن.", en: "Independence from New Zealand mandate." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "kiribati",
    name: { fa: "کیریباتی", en: "Kiribati" },
    flag: ["#CE1126", "#002B7F"],
    founded: 1979,
    foundedNote: {
      fa: "قدمت استقلال کیریباتی از ۱۲ ژوئیه ۱۹۷۹ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 12 July 1979 from the United Kingdom."
    },
    summary: {
      fa: "تنها کشوری در جهان که در هر چهار نیم‌کره زمین قرار دارد، امتدادیافته بر پهنه‌ی عظیم ۳٫۵ میلیون کیلومتر مربع اقیانوس آرام.",
      en: "The only nation straddling all four hemispheres, extending across 3.5 million sq km of ocean."
    },
    facts: {
      capital: { fa: "تاراوای جنوبی", en: "South Tarawa" },
      language: { fa: "گیلبرتی، انگلیسی", en: "Gilbertese, English" },
      population: { fa: "حدود ۱۳۰ هزار نفر", en: "About 130,000" }
    },
    overview: {
      fa: [
        "کیریباتی متشکل از ۳۳ آب‌سنگ مرجانی، نخستین نقطه‌ی خشکی جهان است که هر روز شاهد طلوع خورشید نو در جزیره‌ی میلینیوم است."
      ],
      en: [
        "Spanning the Gilbert, Phoenix, and Line islands, Kiribati hosts one of the world's largest marine protected areas."
      ]
    },
    timeline: [
      { year: 1979, title: { fa: "استقلال کیریباتی", en: "Independence" }, text: { fa: "پایان حکومت جزایر گیلبرت بریتانیا.", en: "Full independence on 12 July." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "tonga",
    name: { fa: "تونگا", en: "Tonga" },
    flag: ["#C10000"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'><rect width='20' height='10' fill='%23C10000'/><rect width='8' height='5' fill='white'/><path d='M4 1v3M2.5 2.5h3' stroke='%23C10000' stroke-width='1'/></svg>",
    founded: 1845,
    foundedNote: {
      fa: "قدمت پادشاهی تونگا از ۴ دسامبر ۱۸۴۵ با اتحاد جزایر به دست جرج توپوی اول حساب می‌شود؛ تنها پادشاهی بومی پیوسته که هرگز حاکمیت خود را از دست نداد.",
      en: "Unified in 1845 by King George Tupou I; the only Pacific nation never to lose indigenous sovereignty."
    },
    summary: {
      fa: "«جزایر دوستانه» با پادشاهی بومی استوار، نهنگ‌های کوهان‌دار در آب‌های واریر و دروازه‌ی سنگی تریلیتون هاامونگا آ مائوئی.",
      en: "The Friendly Islands, the only Pacific kingdom never formally colonized, home to Ha'amonga 'a Maui trilithon."
    },
    facts: {
      capital: { fa: "نوکوآلوفا", en: "Nuku'alofa" },
      language: { fa: "تونگایی، انگلیسی", en: "Tongan, English" },
      population: { fa: "حدود ۱۰۵ هزار نفر", en: "About 105,000" }
    },
    overview: {
      fa: [
        "پادشاهی تونگا با امپراتوری کهن دریایی توی تونگا در سده‌ی دهم میلادی، قرن‌هاست سنت پادشاهی بومی مستقل خود را حفظ کرده است."
      ],
      en: [
        "Preserving centuries of Tu'i Tonga royal lineage, Tonga remains a proud Polynesian constitutional monarchy."
      ]
    },
    timeline: [
      { year: 1845, title: { fa: "پادشاهی مدرن تونگا", en: "Modern Kingdom Formed" }, text: { fa: "جرج توپوی اول جزایر را متحد ساخت.", en: "George Tupou I established the unified state." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "micronesia",
    name: { fa: "میکرونزی", en: "Micronesia" },
    flag: ["#6799FF"],
    founded: 1986,
    foundedNote: {
      fa: "قدمت ایالات فدرال میکرونزی از ۳ نوامبر ۱۹۸۶ با استقلال و امضای پیمان اتحاد آزاد با آمریکا حساب می‌شود؛ شهر سنگی باستانی نان مادول در آن به ۱۲۰۰ میلادی برمی‌گردد.",
      en: "Sovereignty recognized on 3 November 1986; historic stone city Nan Madol dates to 1200 CE."
    },
    summary: {
      fa: "شهر باستانی سنگی شناور نان مادول، جزایر چهارگانه‌ی یاپ با پول‌های غول‌پیکر سنگی، چوک، پونپی و کوسرائه.",
      en: "Federation across western Pacific, famed for the megalithic ruins of Nan Madol and Yap stone money."
    },
    facts: {
      capital: { fa: "پالیکیر", en: "Palikir" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۱۱۵ هزار نفر", en: "About 115,000" }
    },
    overview: {
      fa: [
        "ایالات فدرال میکرونزی با ویرانه‌های عظیم شهر سنگی نان مادول بر روی آب‌راه‌ها («ونیز اقیانوس آرام») شاهکار مهندسی باستان است."
      ],
      en: [
        "Composed of Yap, Chuuk, Pohnpei, and Kosrae, the FSM spans 607 islands across the turquoise Caroline archipelago."
      ]
    },
    timeline: [
      { year: 1986, title: { fa: "استقلال میکرونزی", en: "Independence" }, text: { fa: "تأسیس رسمی دولت خودمختار فدرال.", en: "Compact of Free Association took effect." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "marshall-islands",
    name: { fa: "جزایر مارشال", en: "Marshall Islands" },
    flag: ["#003882"],
    founded: 1986,
    foundedNote: {
      fa: "قدمت استقلال جزایر مارشال از ۲۱ اکتبر ۱۹۸۶ از قیمومیت سازمان ملل و آمریکا حساب می‌شود.",
      en: "Independence gained on 21 October 1986 from the UN Trust Territory."
    },
    summary: {
      fa: "مجمع‌الجزایر ۲۹ آب‌سنگ مرجانی و دریانوردان سنتی با نقشه‌های چوبی مسیر امواج (چک‌باک).",
      en: "Atoll nation renowned for traditional stick charts navigating Pacific swell patterns."
    },
    facts: {
      capital: { fa: "ماجورو", en: "Majuro" },
      language: { fa: "مارشالی، انگلیسی", en: "Marshallese, English" },
      population: { fa: "حدود ۴۲ هزار نفر", en: "About 42,000" }
    },
    overview: {
      fa: [
        "جزایر مارشال در میکرونزی با دو زنجیره‌ی مرجانی رالیک و راتاک، از پیشتازان جهانی در دادخواهی حقوق اقلیمی هستند."
      ],
      en: [
        "Surrounded by vast marine sanctuaries, the Marshall Islands lead international diplomacy against oceanic pollution."
      ]
    },
    timeline: [
      { year: 1986, title: { fa: "استقلال جزایر مارشال", en: "Independence" }, text: { fa: "اعلام حاکمیت ملی مستقل در ۲۱ اکتبر.", en: "Full sovereign status established." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "palau",
    name: { fa: "پالائو", en: "Palau" },
    flag: ["#4AADD6"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='16' fill='%234AADD6'/><circle cx='10' cy='8' r='5' fill='%23FFDE00'/></svg>",
    founded: 1994,
    foundedNote: {
      fa: "قدمت استقلال پالائو از اول اکتبر ۱۹۹۴ حساب می‌شود؛ پیشگام نخستین پناهگاه کوسه‌ها در جهان.",
      en: "Independence achieved on 1 October 1994; created the world's first shark sanctuary."
    },
    summary: {
      fa: "جزایر قارچی‌شکل صخره‌ای راک آیلندز، دریاچه‌ی بی‌نظیر عروس‌های دریایی طلایی و بهشت غواصی جهان.",
      en: "Rock Islands marine sanctuary, Jellyfish Lake, and premier marine conservation."
    },
    facts: {
      capital: { fa: "نگرولمود", en: "Ngerulmud" },
      language: { fa: "پالائویی، انگلیسی", en: "Palauan, English" },
      population: { fa: "حدود ۱۸ هزار نفر", en: "About 18,000" }
    },
    overview: {
      fa: [
        "پالائو با تعهدنامه معروف محیط زیستی پالائو که در پاسپورت گردشگران مهر می‌شود، نماد پیشرو حفاظت از مرجان‌ها و محیط زیست دریاهاست."
      ],
      en: [
        "Pioneering the 'Palau Pledge' conservation passport stamp, Palau protects vibrant coral drop-offs and lagoon wonder."
      ]
    },
    timeline: [
      { year: 1994, title: { fa: "استقلال پالائو", en: "Independence of Palau" }, text: { fa: "پایان آخرین قلمرو تحت قیمومیت در سازمان ملل.", en: "UN trust status concluded on 1 October." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "nauru",
    name: { fa: "نائورو", en: "Nauru" },
    flag: ["#002B7F"],
    founded: 1968,
    foundedNote: {
      fa: "قدمت استقلال نائورو از ۳۱ ژانویه ۱۹۶۸ حساب می‌شود؛ کوچک‌ترین کشور جزیره‌ای جهان.",
      en: "Independence gained on 31 January 1968; world's smallest independent island nation."
    },
    summary: {
      fa: "کوچک‌ترین جمهوری جهان با مساحت تنها ۲۱ کیلومتر مربع، صخره‌های فسفاتی و محصور در آب‌های زلال اقیانوس آرام.",
      en: "World's smallest island republic, measuring just 21 square kilometers."
    },
    facts: {
      capital: { fa: "یارن (ناحیه دولتی)", en: "Yaren District" },
      language: { fa: "نائورویی، انگلیسی", en: "Nauruan, English" },
      population: { fa: "حدود ۱۱ هزار نفر", en: "About 11,000" }
    },
    overview: {
      fa: [
        "نائورو با یک جزیره‌ی صخره‌ای دایره‌ای شکل در جنوب خط استوا، سومین کشور کوچک جهان پس از واتیکان و موناکو است."
      ],
      en: [
        "Single coral atoll ringed by sandy beaches, Nauru gained independence under Hammer DeRoburt in 1968."
      ]
    },
    timeline: [
      { year: 1968, title: { fa: "استقلال نائورو", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۳۱ ژانویه.", en: "Hammer DeRoburt led nation to freedom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "tuvalu",
    name: { fa: "تووالو", en: "Tuvalu" },
    flag: ["#5B97C8"],
    founded: 1978,
    foundedNote: {
      fa: "قدمت استقلال تووالو از اول اکتبر ۱۹۷۸ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 1 October 1978 from the United Kingdom."
    },
    summary: {
      fa: "یکی از کوچک‌ترین و منزوی‌ترین کشورهای جهان؛ ۹ آب‌سنگ مرجانی آرام و پیشتاز دیپلماسی مقابله با گرمایش زمین.",
      en: "Nine peaceful coral atolls leading global climate advocacy against rising tides."
    },
    facts: {
      capital: { fa: "فونافوتی", en: "Funafuti" },
      language: { fa: "تووالویی، انگلیسی", en: "Tuvaluan, English" },
      population: { fa: "حدود ۱۱ هزار نفر", en: "About 11,000" }
    },
    overview: {
      fa: [
        "تووالو با ارتفاع میانگین کمتر از دو متر از سطح دریا، در قلب اقیانوس آرام جنوبی به عنوان نمادی جهانی از مقاومت در برابر تغییرات اقلیمی شناخته می‌شود."
      ],
      en: [
        "Stretching across pristine coral ring atolls, Tuvalu preserves traditional Polynesian fishing and weaving arts."
      ]
    },
    timeline: [
      { year: 1978, title: { fa: "استقلال تووالو", en: "Independence" }, text: { fa: "اعلام استقلال در اول اکتبر.", en: "Independence celebrated on 1 October." } }
    ],
    added: "2026-10-10"
  },

  /* ================= REMAINING AMERICAS (15) ================= */
  {
    id: "el-salvador",
    name: { fa: "السالوادور", en: "El Salvador" },
    flag: ["#0047AB", "#FFFFFF", "#0047AB"],
    founded: 1821,
    foundedNote: {
      fa: "قدمت استقلال السالوادور از ۱۵ سپتامبر ۱۸۲۱ از امپراتوری اسپانیا حساب می‌شود.",
      en: "Independence declared on 15 September 1821 from Spain."
    },
    summary: {
      fa: "سرزمین آتشفشان‌ها در آمریکای مرکزی، سواحل موج‌سواری مشهور ال تونکو و فرهنگ باستانی پیپیل.",
      en: "Land of Volcanoes, famed for Pacific surfing at El Tunco and ancient Pipil culture."
    },
    facts: {
      capital: { fa: "سان سالوادور", en: "San Salvador" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۶٫۳ میلیون نفر", en: "About 6.3 million" }
    },
    overview: {
      fa: [
        "السالوادور کوچک‌ترین و متراکم‌ترین کشور آمریکای مرکزی است که در امتداد نوار آتشفشانی اقیانوس آرام قرار دارد."
      ],
      en: [
        "Featuring majestic volcanic crater lakes like Coatepeque, El Salvador is known for resilient artisans and coffee culture."
      ]
    },
    timeline: [
      { year: 1821, title: { fa: "استقلال آمریکای مرکزی", en: "Independence" }, text: { fa: "امضای بیانیه استقلال در ۱۵ سپتامبر.", en: "Independence from the Spanish Empire." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "honduras",
    name: { fa: "هندوراس", en: "Honduras" },
    flag: ["#0073CF", "#FFFFFF", "#0073CF"],
    founded: 1821,
    foundedNote: {
      fa: "قدمت استقلال هندوراس از ۱۵ سپتامبر ۱۸۲۱ حساب می‌شود؛ ویرانه‌های تمدن مایا در کوپان به سده پنجم میلادی می‌رسد.",
      en: "Independence gained on 15 September 1821; Mayan hieroglyphic city of Copán dates back to the 5th century."
    },
    summary: {
      fa: "پلکان شگفت‌انگیز هیروگلیف مایا در کوپان، جنگل‌های بارانی ماسکیتیا و آب‌سنگ‌های مرجانی جزایر رواتان.",
      en: "Home to the Mayan hieroglyphic stairway at Copán and Roatán coral reefs."
    },
    facts: {
      capital: { fa: "تگوسیگالپا", en: "Tegucigalpa" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۱۰٫۵ میلیون نفر", en: "About 10.5 million" }
    },
    overview: {
      fa: [
        "هندوراس با میراث هنری بی‌نظیر مایا در کوپان و جزایر خلیج کارائیب، پل ارتباطی مهم در تاریخ باستان و مدرن آمریکای مرکزی است."
      ],
      en: [
        "Rich in biodiverse rainforests and Mesoamerican archaeology, Copán represents the pinnacle of Mayan sculpture."
      ]
    },
    timeline: [
      { year: 1821, title: { fa: "استقلال هندوراس", en: "Independence" }, text: { fa: "استقلال رسمی در ۱۵ سپتامبر.", en: "Independence declared from Spain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "nicaragua",
    name: { fa: "نیکاراگوئه", en: "Nicaragua" },
    flag: ["#0067C6", "#FFFFFF", "#0067C6"],
    founded: 1821,
    foundedNote: {
      fa: "قدمت استقلال نیکاراگوئه از ۱۵ سپتامبر ۱۸۲۱ حساب می‌شود.",
      en: "Independence proclaimed on 15 September 1821 from Spain."
    },
    summary: {
      fa: "سرزمین دریاچه‌ها و آتشفشان‌ها؛ دریاچه عظیم نیکاراگوئه با کوسه‌های آب شیرین، معماری گرانادا و شعر روبن داریو.",
      en: "Land of lakes and volcanoes, Lake Nicaragua, colonial Granada, and poet Rubén Darío."
    },
    facts: {
      capital: { fa: "ماناگوآ", en: "Managua" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۷ میلیون نفر", en: "About 7 million" }
    },
    overview: {
      fa: [
        "نیکاراگوئه بزرگ‌ترین کشور آمریکای مرکزی است و با دریاچه اومتپه و شهر استعماری رنگارنگ گرانادا از مراکز تاریخی منطقه است."
      ],
      en: [
        "Spanning between Pacific and Caribbean waters, Nicaragua gave the Hispanic world the Modernist literary giant Rubén Darío."
      ]
    },
    timeline: [
      { year: 1821, title: { fa: "استقلال نیکاراگوئه", en: "Independence" }, text: { fa: "امضای سند استقلال در ۱۵ سپتامبر.", en: "Independence from the Spanish Crown." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "trinidad-and-tobago",
    name: { fa: "ترینیداد و توباگو", en: "Trinidad and Tobago" },
    flag: ["#DA121A"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 12'><rect width='20' height='12' fill='%23DA121A'/><polygon points='0,0 3,0 20,12 17,12' fill='white'/><polygon points='0,0 2,0 20,12 18,12' fill='black'/></svg>",
    founded: 1962,
    foundedNote: {
      fa: "قدمت استقلال ترینیداد و توباگو از ۳۱ اوت ۱۹۶۲ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 31 August 1962 from Britain under Eric Williams."
    },
    summary: {
      fa: "زادگاه ساز استیل‌پن، کارناوال پرشکوه پورت آو اسپین، موسیقی کالیپسو و سوکا و بزرگ‌ترین دریاچه قیر طبیعی جهان.",
      en: "Birthplace of steelpan drums, calypso, carnival, and Pitch Lake."
    },
    facts: {
      capital: { fa: "پورت آو اسپین", en: "Port of Spain" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۱٫۵ میلیون نفر", en: "About 1.5 million" }
    },
    overview: {
      fa: [
        "ترینیداد و توباگو در جنوبی‌ترین نقطه کارائیب با آمیزه‌ای پرشور از فرهنگ‌های آفریقایی و هندی، کانون موسیقی و انرژی منطقه است."
      ],
      en: [
        "Rich in natural gas and vibrant cultural fusion, Trinidad invented the steel drum, the only acoustic instrument invented in the 20th century."
      ]
    },
    timeline: [
      { year: 1962, title: { fa: "استقلال ترینیداد و توباگو", en: "Independence" }, text: { fa: "اریک ویلیامز نخستین نخست‌وزیر کشور شد.", en: "Independence declared on 31 August." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "guyana",
    name: { fa: "گویان", en: "Guyana" },
    flag: ["#009E49"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 12'><rect width='20' height='12' fill='%23009E49'/><polygon points='0,0 20,6 0,12' fill='%23FCD116'/><polygon points='0,0 10,6 0,12' fill='%23CE1126'/></svg>",
    founded: 1966,
    foundedNote: {
      fa: "قدمت استقلال گویان از ۲۶ مه ۱۹۶۶ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 26 May 1966 from the United Kingdom."
    },
    summary: {
      fa: "سرزمین آب‌های بسیار، آبشار کایتور بلندترین آبشار تک‌ریزش جهان و جنگل‌های بارانی بکر آمازونی.",
      en: "Land of Many Waters, featuring the massive single-drop Kaieteur Falls."
    },
    facts: {
      capital: { fa: "جورج‌تاون", en: "Georgetown" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۸۰۰ هزار نفر", en: "About 800,000" }
    },
    overview: {
      fa: [
        "گویان تنها کشور انگلیسی‌زبان آمریکای جنوبی است که بیش از ۷۵ درصد خاک آن با جنگل‌های بارانی بکر و غنی پوشیده شده است."
      ],
      en: [
        "Combining South American geography with Caribbean culture, Guyana possesses the world's most impressive thunderous single-drop waterfall."
      ]
    },
    timeline: [
      { year: 1966, title: { fa: "استقلال گویان", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۲۶ مه.", en: "Independence recognized from Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "suriname",
    name: { fa: "سورینام", en: "Suriname" },
    flag: ["#377E3F", "#FFFFFF", "#B40A28", "#FFFFFF", "#377E3F"],
    founded: 1975,
    foundedNote: {
      fa: "قدمت استقلال سورینام از ۲۵ نوامبر ۱۹۷۵ از هلند حساب می‌شود.",
      en: "Independence gained on 25 November 1975 from the Netherlands."
    },
    summary: {
      fa: "سرسبزترین کشور جهان از نظر پوشش جنگلی، پایتخت چوبی پاراماریبو در فهرست یونسکو و تنوع بی‌همتای فرهنگی.",
      en: "The greenest nation on Earth with 93% forest cover and Dutch-Creole Paramaribo."
    },
    facts: {
      capital: { fa: "پاراماریبو", en: "Paramaribo" },
      language: { fa: "هلندی", en: "Dutch" },
      population: { fa: "حدود ۶۲۰ هزار نفر", en: "About 620,000" }
    },
    overview: {
      fa: [
        "سورینام با جامعه‌ای متشکل از مارون‌ها، هندی‌ها، جاواها و اروپاییان، تنها کشور هلندی‌زبان آمریکای جنوبی است."
      ],
      en: [
        "Holding over 93% forest canopy, Suriname preserves rich maroon cultures and harmonious multifaith harmony."
      ]
    },
    timeline: [
      { year: 1975, title: { fa: "استقلال سورینام", en: "Independence" }, text: { fa: "پایان استعمار هلند در ۲۵ نوامبر.", en: "Independence from the Kingdom of the Netherlands." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "belize",
    name: { fa: "بلیز", en: "Belize" },
    flag: ["#003F87", "#CE1126"],
    founded: 1981,
    foundedNote: {
      fa: "قدمت استقلال بلیز از ۲۱ سپتامبر ۱۹۸۱ از بریتانیا حساب می‌شود.",
      en: "Independence achieved on 21 September 1981 from the United Kingdom."
    },
    summary: {
      fa: "حفره آبی بزرگ (گریت بلو هول)، سد مرجانی بلیز دومین سد بزرگ جهان و هرم‌های کهن مایا کاراکول.",
      en: "Home to the Great Blue Hole, second-largest barrier reef, and ancient Caracol Maya ruins."
    },
    facts: {
      capital: { fa: "بلموپان", en: "Belmopan" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۴۱۰ هزار نفر", en: "About 410,000" }
    },
    overview: {
      fa: [
        "بلیز در سواحل کارائیب آمریکای مرکزی، پیوندگاه فرهنگ مایا و زبان انگلیسی با بزرگ‌ترین شگفتی‌های غواصی زیر آب است."
      ],
      en: [
        "Offering pristine marine conservation along the Mesoamerican Barrier Reef, Belize preserves Caracol and Xunantunich temples."
      ]
    },
    timeline: [
      { year: 1981, title: { fa: "استقلال بلیز", en: "Independence" }, text: { fa: "پایان حکومت هندوراس بریتانیا در ۲۱ سپتامبر.", en: "George Price led independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "bahamas",
    name: { fa: "باهاما", en: "Bahamas" },
    flag: ["#00778B", "#FFC72C", "#00778B"],
    founded: 1973,
    foundedNote: {
      fa: "قدمت استقلال باهاما از ۱۰ ژوئیه ۱۹۷۳ از بریتانیا حساب می‌شود؛ نخستین خشکی در آمریکا که کلمب در ۱۴۹۲ بر آن پا گذاشت.",
      en: "Independence gained on 10 July 1973; the site of Columbus's first landfall in the Americas in 1492."
    },
    summary: {
      fa: "مجمع‌الجزایر ۷۰۰ جزیره‌ای با زلال‌ترین آب‌های جهان، سواحل شنی صورتی و غارهای آبی زیردریایی دینز بلو هول.",
      en: "Coral archipelago of 700 islands, pink sand beaches, and crystal Lucayan waters."
    },
    facts: {
      capital: { fa: "ناسائو", en: "Nassau" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۴۱۰ هزار نفر", en: "About 410,000" }
    },
    overview: {
      fa: [
        "باهاما با سواحل شگفت‌انگیز اگزوما و آب‌های فیروزه‌ای، کانون گردشگری بین‌المللی و حافظ بوم‌سازگان‌های آبی کارائیب است."
      ],
      en: [
        "First landfall of Columbus on San Salvador in 1492, Bahamas hosts world-class coral shallows and Dean's Blue Hole."
      ]
    },
    timeline: [
      { year: 1973, title: { fa: "استقلال باهاما", en: "Independence" }, text: { fa: "استقلال رسمی در ۱۰ ژوئیه ۱۹۷۳.", en: "Lynden Pindling led independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "barbados",
    name: { fa: "باربادوس", en: "Barbados" },
    flag: ["#00267F", "#FFC72C", "#00267F"],
    flagDirection: "vertical",
    founded: 1966,
    foundedNote: {
      fa: "قدمت استقلال باربادوس از ۳۰ نوامبر ۱۹۶۶ حساب می‌شود؛ در سال ۲۰۲۱ به جمهوری مستقل تبدیل شد.",
      en: "Independence gained on 30 November 1966; transitioned to a republic in 2021."
    },
    summary: {
      fa: "خاوری‌ترین جزیره‌ی کارائیب، زادگاه نوشیدنی رام در سال ۱۷۰۳، پایتخت تاریخی بریج‌تاون و زادگاه ریحانا.",
      en: "Easternmost Caribbean island, birthplace of rum at Mount Gay (1703), and UNESCO Bridgetown."
    },
    facts: {
      capital: { fa: "بریج‌تاون", en: "Bridgetown" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۲۸۰ هزار نفر", en: "About 280,000" }
    },
    overview: {
      fa: [
        "باربادوس با پارلمان تاریخی مستمر از ۱۶۳۹ و گذار موفق به جمهوری در ۲۰۲۱، یکی از پیشرفته‌ترین جوامع کارائیب است."
      ],
      en: [
        "Boasting one of the oldest parliaments in the Commonwealth (1639), Barbados transitioned to a sovereign republic in 2021."
      ]
    },
    timeline: [
      { year: 1966, title: { fa: "استقلال باربادوس", en: "Independence" }, text: { fa: "استقلال در ۳۰ نوامبر.", en: "Errol Barrow led nation to sovereignty." } },
      { year: 2021, title: { fa: "اعلام جمهوری", en: "Republic Declared" }, text: { fa: "پایان وابستگی به تاج بریتانیا و انتخاب نخستین رئیس‌جمهور.", en: "First president inaugurated in Bridgetown." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "saint-lucia",
    name: { fa: "سنت لوسیا", en: "Saint Lucia" },
    flag: ["#65C5EA"],
    founded: 1979,
    foundedNote: {
      fa: "قدمت استقلال سنت لوسیا از ۲۲ فوریه ۱۹۷۹ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 22 February 1979 from the United Kingdom."
    },
    summary: {
      fa: "قله‌های آتشفشانی دو قلوی پیتونز ثبت یونسکو، چشمه‌های گوگردی و بیشترین تعداد برنده جایزه نوبل سرانه.",
      en: "Iconic volcanic twin peaks of the Pitons, sulfur springs, and two Nobel laureates."
    },
    facts: {
      capital: { fa: "کاستریز", en: "Castries" },
      language: { fa: "انگلیسی، کریول", en: "English, Creole" },
      population: { fa: "حدود ۱۸۰ هزار نفر", en: "About 180,000" }
    },
    overview: {
      fa: [
        "سنت لوسیا جزیره‌ای دراماتیک در دریای کارائیب است که نوبلیست‌هایی چون درک والکات (ادبیات) و آرتور لوئیس (اقتصاد) را پرورانده است."
      ],
      en: [
        "Dominated by the emerald volcanic spires of the Pitons, Saint Lucia combines Creole cuisine and rainforest majesty."
      ]
    },
    timeline: [
      { year: 1979, title: { fa: "استقلال سنت لوسیا", en: "Independence" }, text: { fa: "استقلال رسمی در ۲۲ فوریه.", en: "Independence from the United Kingdom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "grenada",
    name: { fa: "گرنادا", en: "Grenada" },
    flag: ["#CE1126", "#FCD116", "#007A3D"],
    founded: 1974,
    foundedNote: {
      fa: "قدمت استقلال گرنادا از ۷ فوریه ۱۹۷۴ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 7 February 1974 from the United Kingdom."
    },
    summary: {
      fa: "«جزیره‌ی ادویه» کارائیب با عطر جوز هندی و دارچین، بندر رویایی سنت جورج و پارک مجسمه‌های زیر آب.",
      en: "The Spice Isle of the Caribbean, world's leading nutmeg producer and underwater sculpture park."
    },
    facts: {
      capital: { fa: "سنت جورج", en: "St. George's" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۱۲۵ هزار نفر", en: "About 125,000" }
    },
    overview: {
      fa: [
        "گرنادا با تپه‌های سرسبز پوشیده از درختان جوز هندی و سواحل ماسه‌ای گرند آنسه، بهشت آرام جزایر بادگیر کارائیب است."
      ],
      en: [
        "Known worldwide for producing a major share of the world's nutmeg, Grenada features pastel-colored harbor houses in St. George's."
      ]
    },
    timeline: [
      { year: 1974, title: { fa: "استقلال گرنادا", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۷ فوریه.", en: "Eric Gairy led independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "saint-vincent-and-the-grenadines",
    name: { fa: "سنت وینسنت و گرنادین‌ها", en: "Saint Vincent and the Grenadines" },
    flag: ["#00247D", "#FFD100", "#009E49"],
    flagDirection: "vertical",
    founded: 1979,
    foundedNote: {
      fa: "قدمت استقلال سنت وینسنت از ۲۷ اکتبر ۱۹۷۹ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 27 October 1979 from the United Kingdom."
    },
    summary: {
      fa: "زنجیره‌ای از ۳۲ جزیره‌ی رویایی، آتشفشان لا سوفریر و آب‌های کریستالی توباگو کیز.",
      en: "Volcanic Saint Vincent and 32 idyllic Grenadine islands, famous for Tobago Cays marine park."
    },
    facts: {
      capital: { fa: "کینگزتاون", en: "Kingstown" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۱۱۰ هزار نفر", en: "About 110,000" }
    },
    overview: {
      fa: [
        "سنت وینسنت و گرنادین‌ها با آب‌های کم‌عمق توباگو کیز و خلیج‌های آرام، پایتخت دریانوردی قایق‌های بادبانی در کارائیب است."
      ],
      en: [
        "World capital for yachting and turtle sanctuaries in the Tobago Cays, flanked by Saint Vincent's lush volcanic peaks."
      ]
    },
    timeline: [
      { year: 1979, title: { fa: "استقلال سنت وینسنت", en: "Independence" }, text: { fa: "استقلال رسمی در ۲۷ اکتبر.", en: "Independence achieved from Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "antigua-and-barbuda",
    name: { fa: "آنتیگوا و باربودا", en: "Antigua and Barbuda" },
    flag: ["#CE1126", "#000000", "#0072CE", "#FFFFFF"],
    founded: 1981,
    foundedNote: {
      fa: "قدمت استقلال آنتیگوا و باربودا از اول نوامبر ۱۹۸۱ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 1 November 1981 from the United Kingdom."
    },
    summary: {
      fa: "سرزمین ۳۶۵ ساحل شنی سپید (یک ساحل برای هر روز سال) و اسکله‌ی تاریخی نلسون.",
      en: "Land of 365 beaches—one for every day of the year—and UNESCO-listed Nelson's Dockyard."
    },
    facts: {
      capital: { fa: "سنت جانز", en: "St. John's" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۱۰۰ هزار نفر", en: "About 100,000" }
    },
    overview: {
      fa: [
        "آنتیگوا و باربودا در جزایر لی‌وارد با اسکله تاریخی نلسون در انگلیش هاربر و مسابقات قایقرانی بادبانی بین‌المللی نامدار است."
      ],
      en: [
        "Home to the English Harbor naval base built in the 18th century, Antigua hosts world-renowned sailing regattas."
      ]
    },
    timeline: [
      { year: 1981, title: { fa: "استقلال آنتیگوا و باربودا", en: "Independence" }, text: { fa: "تولد کشور مستقل در اول نوامبر.", en: "Vere Bird became first prime minister." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "dominica",
    name: { fa: "دومینیکا", en: "Dominica" },
    flag: ["#006B3F"],
    founded: 1978,
    foundedNote: {
      fa: "قدمت استقلال کشورهای مشترک‌المنافع دومینیکا از ۳ نوامبر ۱۹۷۸ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 3 November 1978 from the United Kingdom."
    },
    summary: {
      fa: "«جزیره‌ی طبیعت کارائیب»؛ دریاچه‌ی جوشان بوئیلینگ لیک، آبشارهای استوایی و جنگل‌های بارانی دست‌نخورده.",
      en: "The Nature Isle of the Caribbean, home to Boiling Lake and untouched volcanic rainforests."
    },
    facts: {
      capital: { fa: "روسو", en: "Roseau" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۷۲ هزار نفر", en: "About 72,000" }
    },
    overview: {
      fa: [
        "دومینیکا ناهموارترین و طبیعی‌ترین جزیره کارائیب است که زیستگاه مردم بومی کالیناگو و چشمه‌های آب گرم آتشفشانی است."
      ],
      en: [
        "Holding the Caribbean's last indigenous territory for the Kalinago people, Dominica is an uncommercialized eco-paradise."
      ]
    },
    timeline: [
      { year: 1978, title: { fa: "استقلال دومینیکا", en: "Independence" }, text: { fa: "استقلال رسمی در ۳ نوامبر.", en: "Patrick John led independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "saint-kitts-and-nevis",
    name: { fa: "سنت کیتس و نویس", en: "Saint Kitts and Nevis" },
    flag: ["#009E49", "#CE1126"],
    founded: 1983,
    foundedNote: {
      fa: "قدمت استقلال فدراسیون سنت کیتس و نویس از ۱۹ سپتامبر ۱۹۸۳ از بریتانیا حساب می‌شود؛ کوچک‌ترین کشور قاره آمریکا.",
      en: "Independence achieved on 19 September 1983; the smallest sovereign state in the Americas."
    },
    summary: {
      fa: "کوچک‌ترین کشور قاره آمریکا؛ دژ تسخیرناپذیر بریمستون هیل (جبل‌الطارق کارائیب) و خط‌آهن تاریخی نیشکر.",
      en: "Smallest independent nation in the Americas, home to the UNESCO Brimstone Hill Fortress."
    },
    facts: {
      capital: { fa: "باستر", en: "Basseterre" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۴۸ هزار نفر", en: "About 48,000" }
    },
    overview: {
      fa: [
        "فدراسیون دو جزیره‌ای سنت کیتس و نویس با قلعه‌ی سنگی بریمستون هیل در ارتفاعات باستر، نخستین مستعمره بریتانیا در کارائیب بود."
      ],
      en: [
        "Known as the 'Mother Colony of the West Indies', Saint Kitts and Nevis combines historical fortresses with quiet Nevis beaches."
      ]
    },
    timeline: [
      { year: 1983, title: { fa: "استقلال سنت کیتس و نویس", en: "Independence" }, text: { fa: "اعلام استقلال در ۱۹ سپتامبر ۱۹۸۳.", en: "Kennedy Simmonds became first prime minister." } }
    ],
    added: "2026-10-10"
  },

  /* ================= REMAINING AFRICA (19) ================= */
  {
    id: "burundi",
    name: { fa: "بوروندی", en: "Burundi" },
    flag: ["#18B637", "#FFFFFF", "#C8102E"],
    founded: 1962,
    foundedNote: {
      fa: "قدمت استقلال پادشاهی سنتی بوروندی از اول ژوئیه ۱۹۶۲ از بلژیک حساب می‌شود؛ پادشاهی بوروندی در سده شانزدهم پایه‌گذاری شد.",
      en: "Independence gained on 1 July 1962; traditional Kingdom of Burundi dates to the 16th century."
    },
    summary: {
      fa: "قلب تپنده‌ی دریاچه‌ی تانگانیکا، طبل‌نوازان سلطنتی آیابوزی و مزارع سرسبز کوهستانی قهوه.",
      en: "Heart of Lake Tanganyika, world-famous for the royal drummers of Burundi."
    },
    facts: {
      capital: { fa: "گیتگا (سیاسی)، بوجومبورا (اقتصادی)", en: "Gitega (Bujumbura)" },
      language: { fa: "کیروندی، فرانسوی، انگلیسی", en: "Kirundi, French, English" },
      population: { fa: "حدود ۱۳ میلیون نفر", en: "About 13 million" }
    },
    overview: {
      fa: [
        "بوروندی در منطقه‌ی دریاچه‌های بزرگ آفریقا با سنت شگفت‌انگیز طبل‌نوازی ثبت یونسکو و آب‌های شفاف دریاچه تانگانیکا شناخته می‌شود."
      ],
      en: [
        "Preserving ancient sacred drumming ceremonies, Burundi is framed by the Great Rift Valley and Lake Tanganyika."
      ]
    },
    timeline: [
      { year: 1962, title: { fa: "استقلال بوروندی", en: "Independence" }, text: { fa: "استقلال رسمی پادشاهی در اول ژوئیه.", en: "Independence from Belgian trusteeship." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "cabo-verde",
    name: { fa: "کیپ ورد (دماغه سبز)", en: "Cabo Verde" },
    flag: ["#003882"],
    founded: 1975,
    foundedNote: {
      fa: "قدمت استقلال کیپ ورد از ۵ ژوئیه ۱۹۷۵ با رهبری آمیکال کابرال و حزب PAIGC از پرتغال حساب می‌شود.",
      en: "Independence gained on 5 July 1975 from Portugal under Amílcar Cabral's movement."
    },
    summary: {
      fa: "مجمع‌الجزایر آتشفشانی اقیانوس اطلس، زادگاه موسیقی مورنا و سزاریا اوورا و دموکراسی نمونه در غرب آفریقا.",
      en: "Atlantic archipelago famed for Morna blues music, Cesária Évora, and democratic stability."
    },
    facts: {
      capital: { fa: "پرایا", en: "Praia" },
      language: { fa: "پرتغالی، کریول کیپ‌وردی", en: "Portuguese, Cape Verdean Creole" },
      population: { fa: "حدود ۵۹۰ هزار نفر", en: "About 590,000" }
    },
    overview: {
      fa: [
        "کیپ ورد با ده جزیره‌ی آتشفشانی در سواحل غرب آفریقا، الگوی باثبات دموکراسی و پرورش‌دهنده‌ی نوای دلنشین موسیقی مورنا است."
      ],
      en: [
        "A peaceful crossroads between Africa and Europe, Cabo Verde is celebrated for volcanic Peak of Fogo and vibrant Creole culture."
      ]
    },
    timeline: [
      { year: 1975, title: { fa: "استقلال کیپ ورد", en: "Independence" }, text: { fa: "استقلال رسمی در ۵ ژوئیه.", en: "Aristides Pereira became first president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "central-african-republic",
    name: { fa: "جمهوری آفریقای مرکزی", en: "Central African Republic" },
    flag: ["#003082", "#FFFFFF", "#009E49", "#FFCE00"],
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال جمهوری آفریقای مرکزی از ۱۳ اوت ۱۹۶۰ با رهبری بارتلمی بوگاندا از فرانسه حساب می‌شود.",
      en: "Independence achieved on 13 August 1960 led by Barthélemy Boganda."
    },
    summary: {
      fa: "قلب جغرافیایی قاره آفریقا، پناهگاه حیات وحش دزانگا-سانگا و رودهای پرآب حوضه کنگو و چاد.",
      en: "Geographical center of Africa, home to Dzanga-Sangha gorilla and elephant clearings."
    },
    facts: {
      capital: { fa: "بانگی", en: "Bangui" },
      language: { fa: "سانگو، فرانسوی", en: "Sango, French" },
      population: { fa: "حدود ۵٫۵ میلیون نفر", en: "About 5.5 million" }
    },
    overview: {
      fa: [
        "جمهوری آفریقای مرکزی در حوضه آبریز رود اوبانگی، زیستگاه فیل‌های جنگلی و گوریل‌های دشت در پارک ملی دزانگا-سانگا است."
      ],
      en: [
        "Straddling savanna and equatorial rainforests, the CAR preserves rare forest elephants and indigenous BaAka heritage."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال آفریقای مرکزی", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۱۳ اوت.", en: "David Dacko became first president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "chad",
    name: { fa: "چاد", en: "Chad" },
    flag: ["#002664", "#FECB00", "#C60C30"],
    flagDirection: "vertical",
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال چاد از ۱۱ اوت ۱۹۶۰ از فرانسه حساب می‌شود؛ امپراتوری کانم-بورنو در سده هشتم میلادی شکل گرفت.",
      en: "Independence gained on 11 August 1960; the historic Kanem-Bornu Empire flourished from the 8th century."
    },
    summary: {
      fa: "چهارراه صحرا و ساحل، دریاچه چاد، کوهستان سنگی انِدی و دریاچه‌های اسرارآمیز اونیانگا.",
      en: "Babel of the Sahel, Lake Chad, sandstone spires of Ennedi, and Ounianga desert lakes."
    },
    facts: {
      capital: { fa: "انجامنا", en: "N'Djamena" },
      language: { fa: "عربی، فرانسوی", en: "Arabic, French" },
      population: { fa: "حدود ۱۸ میلیون نفر", en: "About 18 million" }
    },
    overview: {
      fa: [
        "چاد با صخره‌های شگفت‌انگیز انِدی و دریاچه‌ی کهن چاد، زادگاه یکی از کهن‌ترین سنگواره‌های نیاکان انسان (تومای با قدمت ۷ میلیون سال) است."
      ],
      en: [
        "Discovery site of Sahelanthropus tchadensis ('Toumaï'), Chad links northern Saharan dunes with fertile southern river valleys."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال چاد", en: "Independence of Chad" }, text: { fa: "اعلام استقلال در ۱۱ اوت.", en: "François Tombalbaye inaugurated president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "comoros",
    name: { fa: "کومور (مجمع‌الجزایر قمر)", en: "Comoros" },
    flag: ["#FFC61E", "#FFFFFF", "#CE1126", "#002F6C"],
    founded: 1975,
    foundedNote: {
      fa: "قدمت استقلال اتحاد قمر از ۶ ژوئیه ۱۹۷۵ از فرانسه حساب می‌شود.",
      en: "Independence declared on 6 July 1975 from France."
    },
    summary: {
      fa: "«جزایر عطر» در اقیانوس هند با مزارع معطر یلانگ-یلانگ، آتشفشان فعال کارتالا و ماهی فسیلی سیلکانت.",
      en: "The Perfumed Islands, world's leading producer of ylang-ylang essence, Mount Karthala."
    },
    facts: {
      capital: { fa: "مورونی", en: "Moroni" },
      language: { fa: "کوموری (شیکومور)، عربی، فرانسوی", en: "Comorian, Arabic, French" },
      population: { fa: "حدود ۸۵۰ هزار نفر", en: "About 850,000" }
    },
    overview: {
      fa: [
        "کومور مجمع‌الجزایری آتشفشانی در کانال موزامبیک است که با فرهنگ سواحیلی-عربی و صید ماهی باستانی سیلکانت در آب‌های عمیق مشهور است."
      ],
      en: [
        "Nestled off the East African coast, Comoros blends Islamic traditions with volcanic landscapes and oceanic biodiversity."
      ]
    },
    timeline: [
      { year: 1975, title: { fa: "استقلال کومور", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۶ ژوئیه.", en: "Ahmed Abdallah proclaimed sovereignty." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "djibouti",
    name: { fa: "جیبوتی", en: "Djibouti" },
    flag: ["#6AB2E7", "#12AD2B"],
    founded: 1977,
    foundedNote: {
      fa: "قدمت استقلال جیبوتی از ۲۷ ژوئن ۱۹۷۷ از فرانسه حساب می‌شود.",
      en: "Independence gained on 27 June 1977 from France."
    },
    summary: {
      fa: "دیده‌بان استراتژیک تنگه باب‌المندب در شاخ آفریقا، دریاچه‌ی نمک عسل پست‌ترین نقطه آفریقا.",
      en: "Strategic gateway of the Bab-el-Mandeb, home to Lake Assal (lowest point in Africa)."
    },
    facts: {
      capital: { fa: "جیبوتی", en: "Djibouti City" },
      language: { fa: "فرانسوی، عربی", en: "French, Arabic" },
      population: { fa: "حدود ۱٫۱ میلیون نفر", en: "About 1.1 million" }
    },
    overview: {
      fa: [
        "جیبوتی با موقعیت بی‌بدیل بندری در خلیج عدن و دریاچه‌های نمکی دره ریفت، قطب بین‌المللی کشتیرانی و تجارت شاخ آفریقاست."
      ],
      en: [
        "Positioned at the entrance to the Red Sea, Djibouti hosts major multinational ports and dramatic geothermal rift landscapes."
      ]
    },
    timeline: [
      { year: 1977, title: { fa: "استقلال جیبوتی", en: "Independence" }, text: { fa: "استقلال از فرانسه در ۲۷ ژوئن.", en: "Hassan Gouled Aptidon became first president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "equatorial-guinea",
    name: { fa: "گینه استوایی", en: "Equatorial Guinea" },
    flag: ["#3E9A00", "#FFFFFF", "#E32118"],
    founded: 1968,
    foundedNote: {
      fa: "قدمت استقلال گینه استوایی از ۱۲ اکتبر ۱۹۶۸ از اسپانیا حساب می‌شود؛ تنها کشور اسپانیایی‌زبان قاره آفریقا.",
      en: "Independence gained on 12 October 1968; the only Spanish-speaking nation in Africa."
    },
    summary: {
      fa: "تنها کشور اسپانیایی‌زبان آفریقا، جزیره آتشفشانی بیوکو، پایتخت مالابو و منابع سرشار نفت خلیج گینه.",
      en: "Africa's only Spanish-speaking state, Bioko volcanic island, and Gulf of Guinea oil wealth."
    },
    facts: {
      capital: { fa: "مالابو", en: "Malabo" },
      language: { fa: "اسپانیایی، فرانسوی، پرتغالی", en: "Spanish, French, Portuguese" },
      population: { fa: "حدود ۱٫۷ میلیون نفر", en: "About 1.7 million" }
    },
    overview: {
      fa: [
        "گینه استوایی شامل جزیره آتشفشانی بیوکو و بخش سرزمینی ریو مونی است و با معماری استعماری اسپانیایی در غرب آفریقا متمایز است."
      ],
      en: [
        "Flanked by dense coastal rainforests, Equatorial Guinea transformed into a major hydrocarbon exporter."
      ]
    },
    timeline: [
      { year: 1968, title: { fa: "استقلال گینه استوایی", en: "Independence" }, text: { fa: "استقلال در ۱۲ اکتبر ۱۹۶۸.", en: "Independence declared from Spain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "eritrea",
    name: { fa: "اریتره", en: "Eritrea" },
    flag: ["#14B53A", "#00A3E0", "#EA112D"],
    founded: 1993,
    foundedNote: {
      fa: "قدمت استقلال اریتره از ۲۴ مه ۱۹۹۳ با برگزاری همه‌پرسی سراسری پس از سه دهه جنگ آزادی‌بخش حساب می‌شود.",
      en: "Independence internationally recognized on 24 May 1993 following a UN-monitored referendum."
    },
    summary: {
      fa: "مروارید دریای سرخ با معماری مدرنیستی ایتالیایی اسمره (میراث یونسکو) و مجمع‌الجزایر داهلاک.",
      en: "Red Sea coastline nation featuring Asmara's UNESCO Italian modernist architecture."
    },
    facts: {
      capital: { fa: "اسمره", en: "Asmara" },
      language: { fa: "تیگرینیا، عربی، انگلیسی", en: "Tigrinya, Arabic, English" },
      population: { fa: "حدود ۳٫۷ میلیون نفر", en: "About 3.7 million" }
    },
    overview: {
      fa: [
        "اریتره در کرانه دریای سرخ با بندر باستانی ادولیس و معماری سبک آرت دکو در پایتخت اسمره، نگینی تاریخی در شاخ آفریقاست."
      ],
      en: [
        "Asmara holds the world's most concentrated ensemble of 1930s modernist architecture in a highland setting."
      ]
    },
    timeline: [
      { year: 1993, title: { fa: "استقلال اریتره", en: "Independence" }, text: { fa: "به رسمیت شناخته شدن استقلال در ۲۴ مه.", en: "Sovereignty officially recognized." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "gabon",
    name: { fa: "گابن", en: "Gabon" },
    flag: ["#009E60", "#FCD116", "#3A75C4"],
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال گابن از ۱۷ اوت ۱۹۶۰ از فرانسه حساب می‌شود.",
      en: "Independence gained on 17 August 1960 from France."
    },
    summary: {
      fa: "بهشت اکوتوریسم استوایی با ۸۵ درصد پوشش جنگل بارانی بکر، گوریل‌های ساحلی لوآنگو و رود اوگوئه.",
      en: "Last Eden of Africa, 85% covered in pristine rainforest, home to Loango National Park."
    },
    facts: {
      capital: { fa: "لیبرویل", en: "Libreville" },
      language: { fa: "فرانسوی", en: "French" },
      population: { fa: "حدود ۲٫۴ میلیون نفر", en: "About 2.4 million" }
    },
    overview: {
      fa: [
        "گابن با پارک ملی لوآنگو جایی است که نهنگ‌ها، فیل‌ها و گوریل‌ها در سواحل اقیانوس اطلس به هم می‌رسند؛ نماد تعهد آفریقا به حفاظت از جنگل‌ها."
      ],
      en: [
        "Pioneering network of 13 national parks preserves extensive equatorial biodiversity and coastal wildlife."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال گابن", en: "Independence" }, text: { fa: "لئون امبا استقلال را در ۱۷ اوت اعلام کرد.", en: "Léon M'ba became first president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "gambia",
    name: { fa: "گامبیا", en: "Gambia" },
    flag: ["#CE1126", "#0C1C8C", "#3A7728"],
    founded: 1965,
    foundedNote: {
      fa: "قدمت استقلال گامبیا از ۱۸ فوریه ۱۹۶۵ با رهبری داودا جاوارا از بریتانیا حساب می‌شود.",
      en: "Independence gained on 18 February 1965 from Britain under Dawda Jawara."
    },
    summary: {
      fa: "«ساحل خندان آفریقا»، کشور نواری شکل در امتداد رود پرپیچ‌وخم گامبیا با پرندگان رنگارنگ استوایی.",
      en: "The Smiling Coast of Africa, winding along the banks of the Gambia River."
    },
    facts: {
      capital: { fa: "بانجول", en: "Banjul" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۲٫۷ میلیون نفر", en: "About 2.7 million" }
    },
    overview: {
      fa: [
        "گامبیا باریکه‌ای در دل سنگال است که رود گامبیا ستون فقرات حیات، پرنده‌نگری و روستاهای سنتی آن است."
      ],
      en: [
        "Surrounded entirely by Senegal, Gambia offers rich ornithology along mangrove waterways and Kunta Kinteh Island."
      ]
    },
    timeline: [
      { year: 1965, title: { fa: "استقلال گامبیا", en: "Independence" }, text: { fa: "استقلال رسمی در ۱۸ فوریه ۱۹۶۵.", en: "Dawda Jawara became leader." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "guinea",
    name: { fa: "گینه", en: "Guinea" },
    flag: ["#CE1126", "#FCD116", "#009460"],
    flagDirection: "vertical",
    founded: 1958,
    foundedNote: {
      fa: "قدمت استقلال گینه از ۲ اکتبر ۱۹۵۸ حساب می‌شود؛ تنها مستعمره فرانسه که در همه‌پرسی شارل دوگل به استقلال فوری رأی «نه» داد.",
      en: "Independence proclaimed on 2 October 1958 by Ahmed Sékou Touré, rejecting the French Community."
    },
    summary: {
      fa: "برج آب غرب آفریقا؛ سرچشمه رودخانه‌های بزرگ نیجر و سنگال در ارتفاعات فوتا جالو و غنی‌ترین معادن بوکسیت.",
      en: "Water tower of West Africa, highland source of the Niger River, and global bauxite reserve leader."
    },
    facts: {
      capital: { fa: "کوناکری", en: "Conakry" },
      language: { fa: "فرانسوی", en: "French" },
      population: { fa: "حدود ۱۴ میلیون نفر", en: "About 14 million" }
    },
    overview: {
      fa: [
        "گینه با شعار «مرگ با آزادی بهتر از ثروت در بندگی»، در ۱۹۵۸ شجاعانه استقلال یافت و چشمه‌های رود نیجر در دامنه‌های آن جاری است."
      ],
      en: [
        "With Fouta Djallon waterfalls and Mount Nimba Strict Nature Reserve, Guinea is a major source of African rivers."
      ]
    },
    timeline: [
      { year: 1958, title: { fa: "استقلال تاریخی گینه", en: "Historical Independence" }, text: { fa: "احمد سکو توره استقلال فوری را در ۲ اکتبر اعلام کرد.", en: "Sékou Touré voted 'No' to French union." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "guinea-bissau",
    name: { fa: "گینه بیسائو", en: "Guinea-Bissau" },
    flag: ["#CE1126", "#FCD116", "#009E49"],
    founded: 1973,
    foundedNote: {
      fa: "قدمت استقلال گینه بیسائو از ۲۴ سپتامبر ۱۹۷۳ با اعلام استقلال یک‌جانبه توسط حزب PAIGC در مدینا دو بو حساب می‌شود.",
      en: "Independence unilaterally declared on 24 September 1973 under Amílcar Cabral's movement."
    },
    summary: {
      fa: "مجمع‌الجزایر بیژاگوس، زیستگاه اسب‌های آبی آب‌شور در حرا و سنت‌های مادرتباری باستانی.",
      en: "Bijagós Archipelago, saltwater hippos, and preserved matrilineal culture."
    },
    facts: {
      capital: { fa: "بیسائو", en: "Bissau" },
      language: { fa: "پرتغالی، کریول", en: "Portuguese, Creole" },
      population: { fa: "حدود ۲٫۱ میلیون نفر", en: "About 2.1 million" }
    },
    overview: {
      fa: [
        "گینه بیسائو با ۸۸ جزیره بیژاگوس ذخیره‌گاه زیست‌کره یونسکو، مهد مقاومت چریکی ضد استعماری در غرب آفریقا بود."
      ],
      en: [
        "Led by intellectual revolutionary Amílcar Cabral, Guinea-Bissau waged an influential war of national liberation."
      ]
    },
    timeline: [
      { year: 1973, title: { fa: "اعلام استقلال", en: "Independence" }, text: { fa: "اعلام استقلال در ۲۴ سپتامبر ۱۹۷۳.", en: "PAIGC proclaimed sovereign republic." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "malawi",
    name: { fa: "مالاوی", en: "Malawi" },
    flag: ["#000000", "#C8102E", "#007A3D"],
    founded: 1964,
    foundedNote: {
      fa: "قدمت استقلال مالاوی از ۶ ژوئیه ۱۹۶۴ با رهبری هاستینگز باندا از بریتانیا حساب می‌شود.",
      en: "Independence gained on 6 July 1964 from the United Kingdom."
    },
    summary: {
      fa: "«قلب گرم آفریقا»، دریاچه پهناور مالاوی با بیش از هزار گونه ماهی سیکلید رنگارنگ و رشته‌کوه مولانجه.",
      en: "The Warm Heart of Africa, famed for Lake Malawi cichlid fish and Mount Mulanje."
    },
    facts: {
      capital: { fa: "لیلونگوه", en: "Lilongwe" },
      language: { fa: "چیچوا، انگلیسی", en: "Chichewa, English" },
      population: { fa: "حدود ۲۰ میلیون نفر", en: "About 20 million" }
    },
    overview: {
      fa: [
        "مالاوی با مردمانی صمیمی و دریاچه مالاوی که یک‌پنجم مساحت کشور را تشکیل می‌دهد، مهد تنوع زیستی ماهی‌های آب شیرین است."
      ],
      en: [
        "Lake Malawi National Park protects an extraordinary evolutionary radiation of tropical cichlids."
      ]
    },
    timeline: [
      { year: 1964, title: { fa: "استقلال مالاوی", en: "Independence" }, text: { fa: "پایان نیاسالند و تولد مالاوی در ۶ ژوئیه.", en: "Hastings Banda led independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "mauritania",
    name: { fa: "موریتانی", en: "Mauritania" },
    flag: ["#00A95C"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='%2300A95C'/><rect y='0' width='30' height='3' fill='%23D01C1C'/><rect y='17' width='30' height='3' fill='%23D01C1C'/><circle cx='15' cy='10' r='5' fill='%23FFD700'/></svg>",
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال موریتانی از ۲۸ نوامبر ۱۹۶۰ از فرانسه حساب می‌شود؛ شهر کاروانی شنگقیط به سده هشتم میلادی بازمی‌گردد.",
      en: "Independence gained on 28 November 1960; ancient caravan city of Chinguetti founded in 777 CE."
    },
    summary: {
      fa: "پیوندگاه جهان عرب و سیاه در صحرای بزرگ، کتابخانه‌های خشتی شنگقیط و قطار طویل سنگ‌آهن نوادیبو.",
      en: "Bridge between Arab Maghreb and western Sahel, historic desert libraries of Chinguetti."
    },
    facts: {
      capital: { fa: "نواکشوت", en: "Nouakchott" },
      language: { fa: "عربی (حسانیه)", en: "Arabic" },
      population: { fa: "حدود ۴٫۸ میلیون نفر", en: "About 4.8 million" }
    },
    overview: {
      fa: [
        "موریتانی با شهر ثبت یونسکو شنگقیط (هفتمین شهر مقدس اسلام در غرب آفریقا) و پارک ملی حوض بان دارگوئن، گنجینه کاروان‌های باستان است."
      ],
      en: [
        "Famous for the historic Banc d'Arguin migratory bird coast and vast Saharan sand seas."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال موریتانی", en: "Independence" }, text: { fa: "مختار ولد داداه استقلال را در ۲۸ نوامبر اعلام کرد.", en: "Moktar Ould Daddah became first president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "niger",
    name: { fa: "نیجر", en: "Niger" },
    flag: ["#E05A10", "#FFFFFF", "#0DB02B"],
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال نیجر از ۳ اوت ۱۹۶۰ از فرانسه حساب می‌شود.",
      en: "Independence achieved on 3 August 1960 from France."
    },
    summary: {
      fa: "دروازه‌ی صحرای تنره، مسجد چوبی آگادز با بلندترین مناره خشتی جهان و کاروان‌های باستانی نمک توارگ‌ها.",
      en: "Gateway to the Tenere desert, mud-brick minaret of Agadez, and Tuareg salt caravans."
    },
    facts: {
      capital: { fa: "نیامی", en: "Niamey" },
      language: { fa: "فرانسوی، هاوسا", en: "French, Hausa" },
      population: { fa: "حدود ۲۶ میلیون نفر", en: "About 26 million" }
    },
    overview: {
      fa: [
        "نیجر با کوه‌های آیر در صحرا، مناره خشتی آگادز و ذخایر غنی اورانیوم، پل تاریخی میان صحرای بزرگ و حوزه رود نایجر است."
      ],
      en: [
        "Home to dinosaur fossil beds and the Tuareg Cure Salée festival, Niger preserves vibrant Sahelian heritage."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال نیجر", en: "Independence" }, text: { fa: "همانی دیوری استقلال را در ۳ اوت اعلام کرد.", en: "Hamani Diori became first president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "sao-tome-and-principe",
    name: { fa: "سائوتومه و پرنسیپ", en: "Sao Tome and Principe" },
    flag: ["#12AD2B", "#FFD100", "#12AD2B"],
    founded: 1975,
    foundedNote: {
      fa: "قدمت استقلال سائوتومه و پرنسیپ از ۱۲ ژوئیه ۱۹۷۵ از پرتغال حساب می‌شود.",
      en: "Independence gained on 12 July 1975 from Portugal."
    },
    summary: {
      fa: "جزایر شکلاتی خلیج گینه بر روی خط استوا، سوزن سنگی باشکوه پیکو کائو گراند و جنگل‌های بارانی اوبو.",
      en: "Equatorial chocolate islands in the Gulf of Guinea, famed for Pico Cão Grande volcanic needle."
    },
    facts: {
      capital: { fa: "سائوتومه", en: "Sao Tome" },
      language: { fa: "پرتغالی", en: "Portuguese" },
      population: { fa: "حدود ۲۳۰ هزار نفر", en: "About 230,000" }
    },
    overview: {
      fa: [
        "سائوتومه و پرنسیپ زمانی بزرگ‌ترین تولیدکننده کاکائو در جهان بود و دومین کشور کوچک قاره آفریقاست."
      ],
      en: [
        "Dubbed the 'Chocolate Islands', this bio-rich nation preserves UNESCO biosphere reserves on the equator."
      ]
    },
    timeline: [
      { year: 1975, title: { fa: "استقلال سائوتومه و پرنسیپ", en: "Independence" }, text: { fa: "استقلال در ۱۲ ژوئیه ۱۹۷۵.", en: "Manuel Pinto da Costa became first president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "seychelles",
    name: { fa: "سیشل", en: "Seychelles" },
    flag: ["#003D88", "#FCD116", "#D21034", "#FFFFFF", "#007A3D"],
    founded: 1976,
    foundedNote: {
      fa: "قدمت استقلال جمهوری سیشل از ۲۹ ژوئن ۱۹۷۶ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 29 June 1976 from the United Kingdom."
    },
    summary: {
      fa: "مجمع‌الجزایر گرانیتی در اقیانوس هند با سواحل رویایی آنسه سورس دارژان و نخل بومی کوکو دو مر.",
      en: "Granitic island paradise, home to the unique Coco de Mer palm and Aldabra giant tortoises."
    },
    facts: {
      capital: { fa: "ویکتوریا", en: "Victoria" },
      language: { fa: "کریول سیشلی، انگلیسی، فرانسوی", en: "Seychellois Creole, English, French" },
      population: { fa: "حدود ۱۰۰ هزار نفر", en: "About 100,000" }
    },
    overview: {
      fa: [
        "سیشل با ۱۱۵ جزیره در اقیانوس هند، دارای بالاترین شاخص توسعه انسانی در قاره آفریقا و زیستگاه لاک‌پشت‌های غول‌پیکر آلدابرا است."
      ],
      en: [
        "With UNESCO Vallée de Mai and Aldabra atolls, Seychelles is a world leader in ocean marine conservation."
      ]
    },
    timeline: [
      { year: 1976, title: { fa: "استقلال سیشل", en: "Independence" }, text: { fa: "جیمز مانشام نخستین رئیس‌جمهور شد.", en: "Independence declared from Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "sierra-leone",
    name: { fa: "سیرالئون", en: "Sierra Leone" },
    flag: ["#1EB53A", "#FFFFFF", "#0072C6"],
    founded: 1961,
    foundedNote: {
      fa: "قدمت استقلال سیرالئون از ۲۷ آوریل ۱۹۶۱ از بریتانیا با رهبری میلتون مارگای حساب می‌شود.",
      en: "Independence gained on 27 April 1961 from Britain under Milton Margai."
    },
    summary: {
      fa: "پناهگاه تاریخی بردگان رهایی‌یافته در فری‌تاون، درخت نمادین پنبه، سواحل بکر پنینسولا و معادن الماس.",
      en: "Historic refuge of freed slaves in Freetown, famed for the historic Cotton Tree."
    },
    facts: {
      capital: { fa: "فری‌تاون", en: "Freetown" },
      language: { fa: "انگلیسی، کریو", en: "English, Krio" },
      population: { fa: "حدود ۸٫۸ میلیون نفر", en: "About 8.8 million" }
    },
    overview: {
      fa: [
        "سیرالئون (کوهستان شیر) در غرب آفریقا در سال ۱۷۸۷ برای اسکان بردگان سیاه‌پوست آزادشده در فری‌تاون پی‌ریزی شد."
      ],
      en: [
        "Freetown was founded in the 18th century as a settlement for freed African-American and Caribbean maroons."
      ]
    },
    timeline: [
      { year: 1961, title: { fa: "استقلال سیرالئون", en: "Independence" }, text: { fa: "استقلال رسمی در ۲۷ آوریل.", en: "Sir Milton Margai led independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "togo",
    name: { fa: "توگو", en: "Togo" },
    flag: ["#006A4E", "#FFCE00"],
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال توگو از ۲۷ آوریل ۱۹۶۰ با رهبری سیلوانوس المپیو از فرانسه حساب می‌شود.",
      en: "Independence gained on 27 April 1960 from France under Sylvanus Olympio."
    },
    summary: {
      fa: "نوار باریک زیبای غرب آفریقا، خانه‌های گلی مستحکم کوتاکاماکو ثبت یونسکو و بازارهای ساحلی لومه.",
      en: "Slender West African corridor, mud tower houses of Koutammakou, and vibrant Lomé markets."
    },
    facts: {
      capital: { fa: "لومه", en: "Lomé" },
      language: { fa: "فرانسوی، اِوه", en: "French, Ewe" },
      population: { fa: "حدود ۸٫۹ میلیون نفر", en: "About 8.9 million" }
    },
    overview: {
      fa: [
        "توگو با دژهای گلی سنتی کوتاکاماکو مردم باتاماریبا و پایتخت بندری لومه در خلیج بنین کشوری بافرهنگ و کهن است."
      ],
      en: [
        "Featuring UNESCO-listed Koutammakou landscape, Togo connects coastal lagoons with the northern savannah."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال توگو", en: "Independence" }, text: { fa: "سیلوانوس المپیو استقلال را در ۲۷ آوریل اعلام کرد.", en: "Sylvanus Olympio led independence." } }
    ],
    added: "2026-10-10"
  }
];
