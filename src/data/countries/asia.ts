import { Country } from '../../types';

export const ASIA_COUNTRIES: Country[] = [
  {
    id: "iran",
    name: { fa: "ایران", en: "Iran" },
    flag: ["#239F40", "#FFFFFF", "#DA0000"],
    founded: -550,
    foundedNote: {
      fa: "قدمت ایران در این سایت از سال ۵۵۰ پیش از میلاد و تشکیل شاهنشاهی هخامنشی به دست کوروش بزرگ محاسبه شده است؛ تمدن عیلام به ۲۷۰۰ پ.م. می‌رسد.",
      en: "Counted from 550 BCE when Cyrus the Great established the Achaemenid Persian Empire; ancient Elam dates to 2700 BCE."
    },
    summary: {
      fa: "مهد هخامنشیان، ساسانیان، فردوسی و حافظ؛ یکی از کهن‌ترین تمدن‌های پیوسته‌ی تاریخ بشریت.",
      en: "Cradle of the Achaemenids, Sasanians, Ferdowsi, and Hafez; among humanity's oldest continuous civilizations."
    },
    facts: {
      capital: { fa: "تهران", en: "Tehran" },
      language: { fa: "فارسی", en: "Persian" },
      population: { fa: "حدود ۸۹ میلیون نفر", en: "About 89 million" }
    },
    overview: {
      fa: [
        "ایران بر فلاتی در میانه‌ی خاورمیانه و آسیای غربی، زادگاه نخستین امپراتوری‌های بزرگ جهان چون هخامنشیان و ساسانیان است. فرهنگ و ادب فارسی در سراسر جهان اسلام و جاده‌ی ابریشم اثری ماندگار به جا گذاشت."
      ],
      en: [
        "Situated on the Iranian Plateau, Iran originated world-spanning empires and pioneered monumental architecture, poetry, and philosophy across the Silk Road."
      ]
    },
    timeline: [
      { year: -550, title: { fa: "تأسیس شاهنشاهی هخامنشی", en: "Achaemenid Empire Founded" }, text: { fa: "کوروش بزرگ امپراتوری هخامنشی را بنیان نهاد.", en: "Cyrus the Great united the realm." } },
      { year: -539, title: { fa: "فتح بابل و استوانه کوروش", en: "Cyrus Cylinder" }, text: { fa: "صدور منشور حقوق بشر در بابل.", en: "Cyrus entered Babylon and issued his cylinder." } },
      { year: 224, title: { fa: "آغاز شاهنشاهی ساسانی", en: "Sasanian Empire" }, text: { fa: "اردشیر بابکان شاهنشاهی ساسانی را پی ریخت.", en: "Ardashir I founded the Sasanian dynasty." } },
      { year: 1501, title: { fa: "آغاز صفویان", en: "Safavid Dynasty" }, text: { fa: "شاه اسماعیل اول ایران یکپارچه را احیا کرد.", en: "Shah Ismail I reunited Iran." } },
      { year: 1906, title: { fa: "انقلاب مشروطه", en: "Constitutional Revolution" }, text: { fa: "امضای فرمان مشروطه و تأسیس مجلس.", en: "Constitutional monarchy proclaimed." } },
      { year: 1979, title: { fa: "انقلاب ۱۳۵۷", en: "1979 Revolution" }, text: { fa: "پایان حکومت پهلوی و استقرار جمهوری اسلامی.", en: "Establishment of the Islamic Republic." } }
    ],
    added: "2026-10-09"
  },
  {
    id: "china",
    name: { fa: "چین", en: "China" },
    flag: ["#DE2910"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='%23DE2910'/><polygon points='5,2 5.6,4 7.8,4 6,5.3 6.7,7.4 5,6.1 3.2,7.4 3.9,5.3 2.1,4 4.3,4' fill='%23FFDE00'/></svg>",
    founded: -221,
    foundedNote: {
      fa: "قدمت چین در این سایت از سال ۲۲۱ پیش از میلاد با یکپارچه‌سازی دولت‌های متخاصم به دست شی هوانگ‌دی محاسبه شده است؛ سلسله شانگ به حدود ۱۶۰۰ پ.م. می‌رسد.",
      en: "Counted from 221 BCE, the unification of China under Qin Shi Huang; traditional dynasties date back to 1600 BCE."
    },
    summary: {
      fa: "تمدنی پنج‌هزارساله در شرق آسیا؛ خاستگاه قطب‌نما، باروت، کاغذ و خط منحصربه‌فرد باستانی.",
      en: "Five millennia of civilization; birthplace of paper, printing, the compass, and gunpowder."
    },
    facts: {
      capital: { fa: "پکن", en: "Beijing" },
      language: { fa: "چینی استاندارد (ماندارین)", en: "Standard Chinese" },
      population: { fa: "حدود ۱٫۴ میلیارد نفر", en: "About 1.4 billion" }
    },
    overview: {
      fa: [
        "چین در دره‌های رودهای زرد و یانگ‌تسه بالید و با سلسله‌های هان، تانگ، سونگ و مینگ یکی از درخشان‌ترین قطب‌های علم و هنر و اقتصاد جهان شد."
      ],
      en: [
        "Flourishing along the Yellow and Yangtze rivers, China built the Great Wall, Grand Canal, and Silk Road trade networks."
      ]
    },
    timeline: [
      { year: -221, title: { fa: "یکپارچگی چین به دست کین", en: "Qin Unification" }, text: { fa: "شی هوانگ‌دی نخستین امپراتور چین شد.", en: "First Emperor united all warring states." } },
      { year: 1912, title: { fa: "تأسیس جمهوری چین", en: "Republic of China" }, text: { fa: "پایان دو هزار سال حکومت امپراتوری.", en: "Abdication of the last emperor Puyi." } },
      { year: 1949, title: { fa: "تأسیس جمهوری خلق چین", en: "PRC Founded" }, text: { fa: "مائو تسه‌تونگ در پکن اعلام جمهوری کرد.", en: "Mao Zedong proclaimed the PRC." } }
    ],
    added: "2026-10-09"
  },
  {
    id: "japan",
    name: { fa: "ژاپن", en: "Japan" },
    flag: ["#FFFFFF"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'><rect width='3' height='2' fill='white'/><circle cx='1.5' cy='1' r='.6' fill='%23BC002D'/></svg>",
    founded: 701,
    foundedNote: {
      fa: "قدمت دولت مستند ژاپن از سال ۷۰۱ میلادی و تدوین قانون تایهو حساب می‌شود؛ سنت ملی تاج‌گذاری جیمو را در ۶۶۰ پ.م. می‌داند.",
      en: "Counted from the 701 CE Taihō Code establishing centralized statehood; legendary founding dates to 660 BCE."
    },
    summary: {
      fa: "مجمع‌الجزایر آفتاب تابان؛ پیوند هارمونیک آیین شینتو، شجاعت سامورایی و نوآوری‌های فوق‌پیشرفته.",
      en: "Land of the Rising Sun, harmonizing Shinto roots, samurai ethos, and cutting-edge tech."
    },
    facts: {
      capital: { fa: "توکیو", en: "Tokyo" },
      language: { fa: "ژاپنی", en: "Japanese" },
      population: { fa: "حدود ۱۲۴ میلیون نفر", en: "About 124 million" }
    },
    overview: {
      fa: [
        "ژاپن با قرن‌ها حکومت درباری نارا و هیان، عصر شوگون‌ها و سامورایی‌ها، و نوسازی شتابان میجی در ۱۸۶۸، به پیشرفته‌ترین اقتصاد شرق آسیا بدل شد."
      ],
      en: [
        "From Heian court poetry and Tokugawa shogunate peace to the rapid Meiji Restoration, Japan became a global industrial titan."
      ]
    },
    timeline: [
      { year: 701, title: { fa: "قانون تایهو", en: "Taihō Code" }, text: { fa: "شکل‌گیری دولت منسجم و کاربرد نام نیهون.", en: "Centralized imperial bureaucracy established." } },
      { year: 1868, title: { fa: "احیای میجی", en: "Meiji Restoration" }, text: { fa: "پایان شوگونی و آغاز عصر مدرن ژاپن.", en: "Modernization under Emperor Meiji." } },
      { year: 1947, title: { fa: "قانون اساسی صلح", en: "Post-War Constitution" }, text: { fa: "رد جنگ به‌عنوان ابزار سیاسی.", en: "Article 9 peace constitution enacted." } }
    ],
    added: "2026-10-09"
  },
  {
    id: "india",
    name: { fa: "هند", en: "India" },
    flag: ["#FF9933", "#FFFFFF", "#128807"],
    founded: -1500,
    foundedNote: {
      fa: "قدمت تمدن هند در این سایت از آغاز عصر ودایی در حدود ۱۵۰۰ پیش از میلاد محاسبه شده است؛ استقلال هند نوین در ۱۵ اوت ۱۹۴۷ رقم خورد.",
      en: "Counted from c. 1500 BCE with the dawn of the Vedic period; modern sovereign Republic founded in 1947."
    },
    summary: {
      fa: "پرجمعیت‌ترین کشور جهان؛ مهد هندوئیسم و بودیسم، سرزمین تاج محل و تنوع بی‌نظیر فرهنگی.",
      en: "World's most populous nation, cradle of Hinduism and Buddhism, land of the Taj Mahal."
    },
    facts: {
      capital: { fa: "دهلی نو", en: "New Delhi" },
      language: { fa: "هندی، انگلیسی (و ۲۲ زبان رسمی دیگر)", en: "Hindi, English (plus 22 official)" },
      population: { fa: "حدود ۱٫۴۳ میلیارد نفر", en: "About 1.43 billion" }
    },
    overview: {
      fa: [
        "شبه‌قاره‌ی هند زادگاه تمدن‌های دره سند و گنگ، امپراتوری‌های بزرگ مائوریا به رهبری آشوکا و گورکانیان، و خاستگاه جنبش استقلال مسالمت‌آمیز مهاتما گاندی است."
      ],
      en: [
        "Home to the Indus Valley Civilization, the Mauryan and Mughal empires, and Mahatma Gandhi's nonviolent independence movement."
      ]
    },
    timeline: [
      { year: -268, title: { fa: "حکومت آشوکا کبیر", en: "Reign of Ashoka" }, text: { fa: "امپراتوری مائوریا بودیسم را در سراسر آسیا گسترش داد.", en: "Ashoka unified subcontinent under Buddhist ideals." } },
      { year: 1947, title: { fa: "استقلال هند", en: "Indian Independence" }, text: { fa: "پایان استعمار بریتانیا در ۱۵ اوت.", en: "Sovereignty won under Gandhi and Nehru." } },
      { year: 1950, title: { fa: "تصویب قانون اساسی هند", en: "Constitution of India" }, text: { fa: "بزرگ‌ترین دموکراسی جهان رسماً شکل گرفت.", en: "Largest secular democracy in the world." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "turkey",
    name: { fa: "ترکیه", en: "Turkey" },
    flag: ["#E30A17"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='%23E30A17'/><circle cx='11' cy='10' r='6' fill='white'/><circle cx='12.5' cy='10' r='4.8' fill='%23E30A17'/><polygon points='17,10 19,8.5 18,11 20,10.5 17.5,12' fill='white'/></svg>",
    founded: 1923,
    foundedNote: {
      fa: "قدمت جمهوری ترکیه از ۲۹ اکتبر ۱۹۲۳ با رهبری مصطفی کمال آتاتورک حساب می‌شود؛ ریشه‌های سلجوقی روم (۱۰۷۷) و عثمانی (۱۲۹۹) در آن پیوسته است.",
      en: "Modern Republic founded on 29 October 1923 by Mustafa Kemal Atatürk; Ottoman Empire dates to 1299."
    },
    summary: {
      fa: "پل اتصال آسیا و اروپا در بسفر؛ وارث امپراتوری عثمانی و تمدن‌های آناتولی و بیزانس.",
      en: "Bridge between East and West at the Bosphorus, heir to Byzantine and Ottoman legacies."
    },
    facts: {
      capital: { fa: "آنکارا", en: "Ankara" },
      language: { fa: "ترکی", en: "Turkish" },
      population: { fa: "حدود ۸۵ میلیون نفر", en: "About 85 million" }
    },
    overview: {
      fa: [
        "ترکیه در شبه‌جزیره آناتولی با استانبول، شهر دو قاره، میراث‌دار قرن‌ها فرمانروایی امپراتوری‌های روم شرقی و عثمانی و دگرگونی مدرن آتاتورک است."
      ],
      en: [
        "Crossroads of continents, Turkey evolved from the Seljuk and Ottoman empires into a vibrant secular republic under Atatürk."
      ]
    },
    timeline: [
      { year: 1453, title: { fa: "فتح قسطنطنیه", en: "Fall of Constantinople" }, text: { fa: "سلطان محمد فاتح شهر را پایتخت عثمانی کرد.", en: "Mehmed the Conqueror captured the city." } },
      { year: 1923, title: { fa: "اعلام جمهوری ترکیه", en: "Republic of Turkey" }, text: { fa: "آتاتورک جمهوری مدرن را بنیان نهاد.", en: "Atatürk proclaimed the secular republic." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "saudi-arabia",
    name: { fa: "عربستان سعودی", en: "Saudi Arabia" },
    flag: ["#006C35"],
    founded: 1744,
    foundedNote: {
      fa: "قدمت کشور عربستان از تأسیس نخستین دولت سعودی در درعیه در سال ۱۷۴۴ میلادی حساب می‌شود؛ پادشاهی نوین در ۱۹۳۲ یکپارچه شد.",
      en: "Counted from the First Saudi State (Emirate of Diriyah) in 1744; modern Kingdom unified in 1932."
    },
    summary: {
      fa: "مهد اسلام، سرزمین حرمین شریفین در مکه و مدینه و بزرگ‌ترین صادرکننده‌ی نفت جهان.",
      en: "Birthplace of Islam, custodian of Mecca and Medina, and leading energy producer."
    },
    facts: {
      capital: { fa: "ریاض", en: "Riyadh" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۳۶ میلیون نفر", en: "About 36 million" }
    },
    overview: {
      fa: [
        "عربستان سعودی قلب شبه‌جزیره عربستان و قبله‌گاه مسلمانان جهان است و با اکتشاف نفت در سده‌ی بیستم دگرگونی شگرفی در اقتصاد خود ایجاد کرد."
      ],
      en: [
        "Encompassing Islam's holiest sites, Saudi Arabia was unified by King Abdulaziz Ibn Saud into a global energy leader."
      ]
    },
    timeline: [
      { year: 1744, title: { fa: "پیمان درعیه", en: "First Saudi State" }, text: { fa: "پایه‌ریزی نخستین حکومت آل سعود.", en: "Alliance establishing the Emirate of Diriyah." } },
      { year: 1932, title: { fa: "تأسیس پادشاهی عربستان سعودی", en: "Unification of Saudi Arabia" }, text: { fa: "ملک عبدالعزیز کشور را یکپارچه کرد.", en: "King Abdulaziz proclaimed the Kingdom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "iraq",
    name: { fa: "عراق", en: "Iraq" },
    flag: ["#CE1126", "#FFFFFF", "#000000"],
    founded: 1932,
    foundedNote: {
      fa: "قدمت عراق نوین از سال ۱۹۳۲ با پایان تحت‌الحمایگی بریتانیا حساب می‌شود؛ بین‌النهرین باستان (سومر و بابل) به بیش از ۳۰۰۰ پ.م. می‌رسد.",
      en: "Modern sovereign kingdom established in 1932; ancient Mesopotamian roots (Sumer, Babylon) date back 5,000 years."
    },
    summary: {
      fa: "گهواره‌ی کهن بین‌النهرین میان دجله و فرات، سرزمین سومر، بابل، آشور و دارالخلافه بغداد.",
      en: "Cradle of civilization between the Tigris and Euphrates, land of Sumer, Babylon, and Baghdad."
    },
    facts: {
      capital: { fa: "بغداد", en: "Baghdad" },
      language: { fa: "عربی، کردی", en: "Arabic, Kurdish" },
      population: { fa: "حدود ۴۴ میلیون نفر", en: "About 44 million" }
    },
    overview: {
      fa: [
        "عراق سرزمین کهن بین‌النهرین است که نخستین خط، نخستین قوانین مکتوب جهان (قانون حمورابی) و عصر طلایی عباسی در بغداد در آن پدیدار شدند."
      ],
      en: [
        "Mesopotamia birthed writing, the Wheel, Code of Hammurabi, and later the Golden Age of Islam centered in Baghdad."
      ]
    },
    timeline: [
      { year: -1754, title: { fa: "قانون حمورابی", en: "Code of Hammurabi" }, text: { fa: "نخستین مجموعه قوانین مدون جهان در بابل.", en: "World's earliest deciphered legal code." } },
      { year: 762, title: { fa: "بنیان‌گذاری بغداد", en: "Founding of Baghdad" }, text: { fa: "خلیفه منصور شهر صلح را بنا نهاد.", en: "Caliph al-Mansur built the Round City." } },
      { year: 1932, title: { fa: "استقلال پادشاهی عراق", en: "Independence" }, text: { fa: "پایان قیمومیت بریتانیا و پیوستن به جامعه ملل.", en: "End of British mandate." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "south-korea",
    name: { fa: "کره جنوبی", en: "South Korea" },
    flag: ["#FFFFFF"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='white'/><circle cx='15' cy='10' r='5' fill='%23C60C30'/></svg>",
    founded: -2333,
    foundedNote: {
      fa: "قدمت سنتی تمدن کره از ۲۳۳۳ پیش از میلاد و بنیان‌گذاری گوجوسان به دست دانگون حساب می‌شود؛ جمهوری کره در ۱۹۴۸ تأسیس شد.",
      en: "Traditional founding date of Gojoseon by Dangun in 2333 BCE; modern Republic of Korea founded in 1948."
    },
    summary: {
      fa: "پیشگام فناوری، امواج فرهنگی کی‌پاپ و سینما، کشوری پویا در شبه‌جزیره کره.",
      en: "Dynamic East Asian tech and cultural titan, famed for high technology and K-culture."
    },
    facts: {
      capital: { fa: "سئول", en: "Seoul" },
      language: { fa: "کره‌ای", en: "Korean" },
      population: { fa: "حدود ۵۱ میلیون نفر", en: "About 51 million" }
    },
    overview: {
      fa: [
        "کره جنوبی با اختراع خط هانگول در دوران شاه سجونگ و معجزه‌ی اقتصادی رود هان پس از جنگ، یکی از نوآورترین ملل مدرن است."
      ],
      en: [
        "From the invention of Hangul by King Sejong to the Miracle on the Han River, South Korea achieved global democratic and industrial prominence."
      ]
    },
    timeline: [
      { year: 1443, title: { fa: "ابداع خط هانگول", en: "Creation of Hangul" }, text: { fa: "پادشاه سجونگ خط ملی کره‌ای را ابداع کرد.", en: "King Sejong introduced phonetic script." } },
      { year: 1948, title: { fa: "تأسیس جمهوری کره", en: "Republic of Korea" }, text: { fa: "برپایی دولت مستقل در ۱۵ اوت.", en: "First government inaugurated in Seoul." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "north-korea",
    name: { fa: "کره شمالی", en: "North Korea" },
    flag: ["#024FA2", "#ED1C27", "#024FA2"],
    founded: 1948,
    foundedNote: {
      fa: "قدمت جمهوری دموکراتیک خلق کره از ۹ سپتامبر ۱۹۴۸ اعلام شده است؛ ریشه‌های گوجوسان مشترک است.",
      en: "Democratic People's Republic of Korea proclaimed on 9 September 1948."
    },
    summary: {
      fa: "کشوری در شمال شبه‌جزیره کره با ایدیولوژی جوچه و بناهای یادبود عظیم پیونگ‌یانگ.",
      en: "State in northern Korean peninsula governed by Juche ideology."
    },
    facts: {
      capital: { fa: "پیونگ‌یانگ", en: "Pyongyang" },
      language: { fa: "کره‌ای", en: "Korean" },
      population: { fa: "حدود ۲۶ میلیون نفر", en: "About 26 million" }
    },
    overview: {
      fa: [
        "کره شمالی پس از تقسیم شبه‌جزیره کره در پی جنگ دوم جهانی، نظام سیاسی متمرکز خود را با پایتختی در پیونگ‌یانگ بنا کرد."
      ],
      en: [
        "Established post-WWII division, North Korea features mountain ranges such as Paektu and grand monuments in Pyongyang."
      ]
    },
    timeline: [
      { year: 1948, title: { fa: "اعلام جمهوری خلق", en: "DPRK Proclaimed" }, text: { fa: "کیم ایل سونگ تشکیل دولت را در ۹ سپتامبر اعلام کرد.", en: "Proclamation of government in Pyongyang." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "indonesia",
    name: { fa: "اندونزی", en: "Indonesia" },
    flag: ["#FF0000", "#FFFFFF"],
    founded: 1945,
    foundedNote: {
      fa: "قدمت اندونزی از ۱۷ اوت ۱۹۴۵ و اعلام استقلال به دست سوکارنو حساب می‌شود؛ امپراتوری سریویجایا و ماجاپاهیت در سده‌های ۷ تا ۱۳ فعال بودند.",
      en: "Proclaimed on 17 August 1945 by Sukarno; historical kingdoms Srivijaya and Majapahit date to medieval times."
    },
    summary: {
      fa: "بزرگ‌ترین کشور مجمع‌الجزایری جهان با بیش از ۱۷ هزار جزیره و پرجمعیت‌ترین کشور مسلمان‌نشین.",
      en: "The world's largest archipelago with over 17,000 islands and immense biological diversity."
    },
    facts: {
      capital: { fa: "جاکارتا", en: "Jakarta" },
      language: { fa: "اندونزیایی", en: "Indonesian" },
      population: { fa: "حدود ۲۷۸ میلیون نفر", en: "About 278 million" }
    },
    overview: {
      fa: [
        "اندونزی پل اقیانوس آرام و هند است؛ معابد عظیم بوروبودور و پرامبانان گواه عظمت فرهنگ کهن این مجمع‌الجزایر ادویه است."
      ],
      en: [
        "Spanning the equator, Indonesia united diverse cultures across Java, Sumatra, Bali, and Borneo under the motto Bhinneka Tunggal Ika."
      ]
    },
    timeline: [
      { year: 1293, title: { fa: "امپراتوری ماجاپاهیت", en: "Majapahit Empire" }, text: { fa: "بزرگ‌ترین امپراتوری دریایی جنوب شرق آسیا.", en: "Golden age of maritime kingdom." } },
      { year: 1945, title: { fa: "اعلام استقلال اندونزی", en: "Proclamation of Independence" }, text: { fa: "سوکارنو استقلال از هلند را اعلام کرد.", en: "Declaration of independence on 17 August." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "pakistan",
    name: { fa: "پاکستان", en: "Pakistan" },
    flag: ["#FFFFFF", "#01411C"],
    flagDirection: "vertical",
    founded: 1947,
    foundedNote: {
      fa: "قدمت استقلال پاکستان از ۱۴ اوت ۱۹۴۷ با رهبری محمدعلی جناح و جنبش استقلال مسلمانان شبه‌قاره حساب می‌شود.",
      en: "Founded on 14 August 1947 as an independent Muslim nation led by Muhammad Ali Jinnah."
    },
    summary: {
      fa: "سرزمین تمدن کهن دره سند (موهنجودارو و هاراپا)، رشته‌کوه‌های قراقروم و قله K2.",
      en: "Home to the Indus Valley civilization, Karakoram peaks including K2, and Mughal architecture."
    },
    facts: {
      capital: { fa: "اسلام‌آباد", en: "Islamabad" },
      language: { fa: "اردو، انگلیسی", en: "Urdu, English" },
      population: { fa: "حدود ۲۴۰ میلیون نفر", en: "About 240 million" }
    },
    overview: {
      fa: [
        "پاکستان با دارا بودن محوطه‌های باستانی موهنجودارو، شاهکارهای معماری گورکانی لاهور و قله‌های سر به فلک کشیده‌ی هیمالیا کشوری پرشکوه است."
      ],
      en: [
        "Bridging South and Central Asia, Pakistan preserves the ancient Indus heritage, Lahore's Badshahi Mosque, and dramatic alpine valleys."
      ]
    },
    timeline: [
      { year: 1947, title: { fa: "استقلال پاکستان", en: "Independence of Pakistan" }, text: { fa: "تولد دولت مستقل در ۱۴ اوت به رهبری قائد اعظم.", en: "Creation of Pakistan on 14 August." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "bangladesh",
    name: { fa: "بنگلادش", en: "Bangladesh" },
    flag: ["#006A4E"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 12'><rect width='20' height='12' fill='%23006A4E'/><circle cx='9' cy='6' r='4' fill='%23F42A41'/></svg>",
    founded: 1971,
    foundedNote: {
      fa: "قدمت استقلال بنگلادش از ۲۶ مارس ۱۹۷۱ در پی جنگ رهایی‌بخش بنگلادش به رهبری شیخ مجیب‌الرحمن محاسبه می‌شود.",
      en: "Independence proclaimed on 26 March 1971 led by Sheikh Mujibur Rahman."
    },
    summary: {
      fa: "سرزمین دلتای بنگال، رودهای پرآب پادما و جمنا، شعر رابیندرانات تاگور و جنگل‌های حرا سونداربانس.",
      en: "Lush delta of Bengal, famed for Sundarbans mangrove forests and Tagore's literary soul."
    },
    facts: {
      capital: { fa: "داکا", en: "Dhaka" },
      language: { fa: "بنگالی", en: "Bengali" },
      population: { fa: "حدود ۱۷۰ میلیون نفر", en: "About 170 million" }
    },
    overview: {
      fa: [
        "بنگلادش در حاصلخیزترین دلتای رودخانه‌ای جهان قرار دارد و جنبش زبان بنگالی در سال ۱۹۵۲ الهام‌بخش روز جهانی زبان مادری شد."
      ],
      en: [
        "Bangladesh championed linguistic pride in the 1952 Language Movement and emerged as a resilient textile and riverine nation."
      ]
    },
    timeline: [
      { year: 1971, title: { fa: "جنگ آزادی‌بخش بنگلادش", en: "Liberation War" }, text: { fa: "پیروزی استقلال در دسامبر ۱۹۷۱.", en: "Victory and birth of Bangladesh." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "thailand",
    name: { fa: "تایلند", en: "Thailand" },
    flag: ["#A51931", "#F4F5F8", "#2D2A4A", "#F4F5F8", "#A51931"],
    founded: 1238,
    foundedNote: {
      fa: "قدمت پادشاهی تایلند از تأسیس پادشاهی سوکوتای در سال ۱۲۳۸ میلادی حساب می‌شود؛ تنها کشور جنوب شرق آسیا که هرگز مستعمره نشد.",
      en: "Counted from 1238 CE with the establishment of Sukhothai Kingdom; never colonized by Western powers."
    },
    summary: {
      fa: "سرزمین لبخندها در جنوب شرق آسیا؛ معابد زرین بودایی، فرهنگ آیوتایا و جزایر گرمسیری رویایی.",
      en: "The Land of Smiles, proud of never being colonized, famed for Buddhist heritage and Ayutthaya."
    },
    facts: {
      capital: { fa: "بانکوک", en: "Bangkok" },
      language: { fa: "تای", en: "Thai" },
      population: { fa: "حدود ۷۱ میلیون نفر", en: "About 71 million" }
    },
    overview: {
      fa: [
        "تایلند (سیام پیشین) با پادشاهی‌های سوکوتای و آیوتایا استقلال پایدار خود را حفظ کرد و کاخ‌های بانکوک نگین این فرهنگ پرآوازه‌اند."
      ],
      en: [
        "Preserving ancient Theravada Buddhist arts, Thailand maintained sovereignty through diplomatic skill and royal leadership."
      ]
    },
    timeline: [
      { year: 1238, title: { fa: "تأسیس پادشاهی سوکوتای", en: "Sukhothai Kingdom" }, text: { fa: "آغاز دوران استقلال تای‌ها.", en: "First unified Thai kingdom." } },
      { year: 1782, title: { fa: "تأسیس دودمان چاکری", en: "Chakri Dynasty" }, text: { fa: "پایه‌گذاری بانکوک به‌عنوان پایتخت.", en: "Bangkok established as royal capital." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "vietnam",
    name: { fa: "ویتنام", en: "Vietnam" },
    flag: ["#DA251D"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='%23DA251D'/><polygon points='15,4 17.5,11 24,11 19,15 21,21 15,17 9,21 11,15 6,11 12.5,11' fill='%23FFFF00'/></svg>",
    founded: -257,
    foundedNote: {
      fa: "قدمت تاریخی ویتنام از پادشاهی آولاک در سال ۲۵۷ پیش از میلاد (و اسطوره‌ی وان‌لانگ پیش از آن) حساب می‌شود؛ استقلال نوین در ۱۹۴۵ اعلام شد.",
      en: "Traditional statehood traces to Âu Lạc in 257 BCE and ancient Đông Sơn culture; modern independence declared in 1945."
    },
    summary: {
      fa: "سرزمین خلیج شگفت‌انگیز هالونگ، مزارع پلکانی برنج، دلتای مکونگ و روحیه‌ی مقاومت پولادین.",
      en: "Land of karst Ha Long Bay, vibrant river deltas, and extraordinary resilience."
    },
    facts: {
      capital: { fa: "هانوی", en: "Hanoi" },
      language: { fa: "ویتنامی", en: "Vietnamese" },
      population: { fa: "حدود ۱۰۰ میلیون نفر", en: "About 100 million" }
    },
    overview: {
      fa: [
        "ویتنام با تمدن طبل‌های برنزی دونگ‌سون، قرن‌ها مقاومت در برابر سلطه‌ی خارجی را رقم زد و امروزه یکی از پویاترین اقتصادهای آسیاست."
      ],
      en: [
        "Celebrated for Ha Long Bay and culinary art, Vietnam unified into an industrial and agricultural export leader."
      ]
    },
    timeline: [
      { year: 938, title: { fa: "نبرد رود باک‌دانگ", en: "Battle of Bạch Đằng" }, text: { fa: "پایان هزار سال تسلط چین و احیای استقلال.", en: "Ngô Quyền won national sovereignty." } },
      { year: 1945, title: { fa: "اعلام استقلال ویتنام", en: "Declaration of Independence" }, text: { fa: "هو چی مین استقلال را در هانوی اعلام کرد.", en: "Ho Chi Minh declared independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "philippines",
    name: { fa: "فیلیپین", en: "Philippines" },
    flag: ["#0038A8", "#CE1126"],
    founded: 1898,
    foundedNote: {
      fa: "قدمت استقلال فیلیپین از ۱۲ ژوئن ۱۸۹۸ با اعلام استقلال از اسپانیا به دست امیلیو آگوینالدو حساب می‌شود.",
      en: "Independence declared on 12 June 1898 from Spain by Emilio Aguinaldo."
    },
    summary: {
      fa: "مجمع‌الجزایر بیش از ۷۰۰۰ جزیره با مردمان صمیمی، سواحل فیروزه‌ای و صخره‌های مرجانی استثنایی.",
      en: "Archipelago of over 7,000 islands, renowned for warm hospitality and biodiversity."
    },
    facts: {
      capital: { fa: "مانیل", en: "Manila" },
      language: { fa: "فیلیپینی (تاگالوگ)، انگلیسی", en: "Filipino, English" },
      population: { fa: "حدود ۱۱۵ میلیون نفر", en: "About 115 million" }
    },
    overview: {
      fa: [
        "فیلیپین پیوندگاه منحصربه‌فرد فرهنگ‌های بومی آسترونزیایی، نفوذ تاریخی سه قرن استعمار اسپانیا و پیوندهای مدرن با آمریکاست."
      ],
      en: [
        "Encompassing Luzon, Visayas, and Mindanao, the Philippines created Asia's first constitutional republic in 1899."
      ]
    },
    timeline: [
      { year: 1898, title: { fa: "اعلام استقلال در کاویته", en: "Declaration of Independence" }, text: { fa: "نخستین جمهوری مشروطه در آسیا.", en: "First Philippine Republic proclaimed." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "malaysia",
    name: { fa: "مالزی", en: "Malaysia" },
    flag: ["#ED2939", "#FFFFFF"],
    founded: 1957,
    foundedNote: {
      fa: "قدمت استقلال مالزی از ۳۱ اوت ۱۹۵۷ (فدراسیون مالایا) با پایان حکومت بریتانیا حساب می‌شود؛ سلطنت ملاکا در ۱۴۰۰ میلادی شکل گرفت.",
      en: "Independence gained on 31 August 1957; the historic Sultanate of Malacca dates to 1400."
    },
    summary: {
      fa: "پیوندگاه مدرنیته و طبیعت، با برج‌های دوقلوی پتروناس، جنگل‌های بارانی کهن بورنئو و تنوع فرهنگی غنی.",
      en: "Multicultural federation featuring the iconic Petronas Towers and Borneo rainforests."
    },
    facts: {
      capital: { fa: "کوالالامپور", en: "Kuala Lumpur" },
      language: { fa: "مالایی", en: "Malay" },
      population: { fa: "حدود ۳۴ میلیون نفر", en: "About 34 million" }
    },
    overview: {
      fa: [
        "مالزی متشکل از شبه‌جزیره مالایا و ایالت‌های صباح و ساراواک در بورنئو، نمونه‌ای موفق از همزیستی اقوام مالایی، چینی و هندی است."
      ],
      en: [
        "Centered around historic straits trade, Malaysia stands as a technologically advanced, multi-ethnic Southeast Asian nation."
      ]
    },
    timeline: [
      { year: 1400, title: { fa: "سلطنت ملاکا", en: "Malacca Sultanate" }, text: { fa: "تأسیس بزرگ‌ترین کانون بازرگانی تنگه ملاکا.", en: "Golden age of maritime commerce." } },
      { year: 1957, title: { fa: "مردکا (استقلال)", en: "Merdeka (Independence)" }, text: { fa: "اعلام استقلال فدراسیون در کوالالامپور.", en: "Independence from British rule." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "singapore",
    name: { fa: "سنگاپور", en: "Singapore" },
    flag: ["#ED2939", "#FFFFFF"],
    founded: 1965,
    foundedNote: {
      fa: "قدمت استقلال سنگاپور از ۹ اوت ۱۹۶۵ با جدایی از فدراسیون مالزی به رهبری لی کوآن یو حساب می‌شود.",
      en: "Sovereignty achieved on 9 August 1965 following separation from Malaysia."
    },
    summary: {
      fa: "دولت‌شهر جزیره‌ای نوآور، پایتخت مالی و فناوری جهان و الگوی خیره‌کننده‌ی توسعه پایدار شهری.",
      en: "Island city-state, premier global financial powerhouse and urban green marvel."
    },
    facts: {
      capital: { fa: "سنگاپور", en: "Singapore" },
      language: { fa: "انگلیسی، مالایی، چینی ماندارین، تامیلی", en: "English, Malay, Mandarin, Tamil" },
      population: { fa: "حدود ۶ میلیون نفر", en: "About 6 million" }
    },
    overview: {
      fa: [
        "سنگاپور با رهبری لی کوآن یو ظرف چند دهه از جزیره‌ای با منابع اندک به یکی از مرفه‌ترین، پاکیزه‌ترین و پیشرفته‌ترین دولت‌های جهان بدل شد."
      ],
      en: [
        "Under Lee Kuan Yew's vision, Singapore transformed from a small port into one of the world's highest per-capita GDP nations."
      ]
    },
    timeline: [
      { year: 1965, title: { fa: "استقلال جمهوری سنگاپور", en: "Independence" }, text: { fa: "آغاز راه استقلال در ۹ اوت ۱۹۶۵.", en: "Separation and birth of sovereign Singapore." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "israel",
    name: { fa: "اسرائیل", en: "Israel" },
    flag: ["#0038B8"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 16'><rect width='22' height='16' fill='white'/><rect y='2' width='22' height='2' fill='%230038B8'/><rect y='12' width='22' height='2' fill='%230038B8'/></svg>",
    founded: 1948,
    foundedNote: {
      fa: "قدمت کشور اسرائیل از ۱۴ مه ۱۹۴۸ با صدور اعلامیه‌ی استقلال به دست داوید بن گوریون حساب می‌شود.",
      en: "Declared on 14 May 1948 by David Ben-Gurion."
    },
    summary: {
      fa: "سرزمین کهن با آثار باستانی چند هزار ساله، قطب نوآوری‌های سیلیکون وادی در شرق مدیترانه.",
      en: "Historic eastern Mediterranean land and prominent high-tech innovation center."
    },
    facts: {
      capital: { fa: "اورشلیم (قدس)", en: "Jerusalem" },
      language: { fa: "عبری", en: "Hebrew" },
      population: { fa: "حدود ۹٫۸ میلیون نفر", en: "About 9.8 million" }
    },
    overview: {
      fa: [
        "اسرائیل در کرانه‌ی شرقی مدیترانه، کانونی از اماکن مقدس تاریخی، فناوری‌های پیشرفته و جامعه‌ای چندفرهنگی است."
      ],
      en: [
        "Located in the Levant, Israel bridges historic holy sites with world-leading scientific and medical research."
      ]
    },
    timeline: [
      { year: 1948, title: { fa: "اعلامیه استقلال", en: "Declaration of Independence" }, text: { fa: "تأسیس دولت در تل‌آویو.", en: "State established on 14 May." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "palestine",
    name: { fa: "فلسطین", en: "Palestine" },
    flag: ["#000000", "#FFFFFF", "#007A3D"],
    founded: 1988,
    foundedNote: {
      fa: "قدمت اعلامیه‌ی استقلال دولت فلسطین از ۱۵ نوامبر ۱۹۸۸ به دست یاسر عرفات در الجزیره حساب می‌شود؛ تاریخ باستان کنعان به هزاره‌ها قبل برمی‌گردد.",
      en: "Declaration of Independence issued on 15 November 1988 by Yasser Arafat; historic Canaanite heritage dates back millennia."
    },
    summary: {
      fa: "سرزمین مقدس کنعان و زیتون، بیت‌المقدس، کرانه‌ی باختری و غزه؛ مهد ادیان ابراهیمی.",
      en: "Historic Holy Land of Canaan, Jerusalem, olive groves, and ancient sanctuaries."
    },
    facts: {
      capital: { fa: "قدس شرقی (اورشلیم)", en: "East Jerusalem" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۵٫۴ میلیون نفر", en: "About 5.4 million" }
    },
    overview: {
      fa: [
        "فلسطین سرشار از معابد و آثار مقدس ابراهیمی همچون مسجد الاقصی، قبه الصخره و کلیسای رستاخیز در قدس و کلیسای مهد در بیت‌لحم است."
      ],
      en: [
        "Revered by Islam, Christianity, and Judaism, Palestine encompasses ancient Jericho, Bethlehem, and historic Old Jerusalem."
      ]
    },
    timeline: [
      { year: 1988, title: { fa: "اعلامیه استقلال فلسطین", en: "Palestinian Declaration" }, text: { fa: "یاسر عرفات استقلال فلسطین را در الجزیره اعلام کرد.", en: "Independence declared by PLO in Algiers." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "jordan",
    name: { fa: "اردن", en: "Jordan" },
    flag: ["#000000", "#FFFFFF", "#007A3D"],
    founded: 1946,
    foundedNote: {
      fa: "قدمت استقلال پادشاهی اردن هاشمی از ۲۵ مه ۱۹۴۶ حساب می‌شود؛ شهر باستانی پترا در آن به سده چهارم پیش از میلاد بازمی‌گردد.",
      en: "Kingdom of Transjordan achieved full sovereignty on 25 May 1946; ancient Nabataean Petra dates to 4th c. BCE."
    },
    summary: {
      fa: "واحه‌ی صلح در خاورمیانه، شهر سرخ‌گون سنگی پترا از عجایب هفتگانه، و بیابان‌های وادی رم.",
      en: "Oasis of stability in the Levant, home to rose-red Petra and Wadi Rum desert."
    },
    facts: {
      capital: { fa: "امان", en: "Amman" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۱۱ میلیون نفر", en: "About 11 million" }
    },
    overview: {
      fa: [
        "اردن با پادشاهی خاندان هاشمی و میراث شگفت‌انگیز نبطی‌ها در پترا و بحرالمیت، پل ارتباطی صلح و فرهنگ در منطقه است."
      ],
      en: [
        "Led by the Hashemite monarchy, Jordan preserves Nabataean Petra, Mount Nebo, and Roman ruins at Jerash."
      ]
    },
    timeline: [
      { year: -312, title: { fa: "پایتختی پترا", en: "Petra Capital of Nabataeans" }, text: { fa: "شکوفایی شاهکار مهندسی آب و سنگ.", en: "Peak of Nabataean civilization." } },
      { year: 1946, title: { fa: "استقلال اردن", en: "Independence of Jordan" }, text: { fa: "پایان قیمومیت بریتانیا و استقلال کامل.", en: "Treaty of London granted independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "lebanon",
    name: { fa: "لبنان", en: "Lebanon" },
    flag: ["#ED1C24", "#FFFFFF", "#ED1C24"],
    founded: 1943,
    foundedNote: {
      fa: "قدمت استقلال جمهوری لبنان از ۲۲ نوامبر ۱۹۴۳ با پایان قیمومیت فرانسه حساب می‌شود؛ بنادر فنیقی بیبلوس و صور به هزاران سال پیش برمی‌گردند.",
      en: "Independence gained on 22 November 1943 from France; ancient Phoenician cities Byblos and Tyre date back 5,000 years."
    },
    summary: {
      fa: "عروس خاورمیانه در کرانه‌ی مدیترانه، سروهای باستانی، بنادر کهن فنیقی و بیروت پرشور.",
      en: "Pearl of the Levant, land of ancient cedar trees, Phoenician seafaring, and vibrant Beirut."
    },
    facts: {
      capital: { fa: "بیروت", en: "Beirut" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۵٫۳ میلیون نفر", en: "About 5.3 million" }
    },
    overview: {
      fa: [
        "لبنان با نماد درخت سرو، مهد دریانوردان فنیقی است که الفبای آوایی را به جهان آموختند، و معابد رومی بعلبک از شکوه آن سخن می‌گویند."
      ],
      en: [
        "Famed for the Cedars of God and Baalbek's colossal Roman temples, Lebanon preserves a cosmopolitan coastal heritage."
      ]
    },
    timeline: [
      { year: 1943, title: { fa: "استقلال لبنان", en: "Independence" }, text: { fa: "پایان قیمومیت فرانسه و امضای میثاق ملی.", en: "Independence from French mandate." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "syria",
    name: { fa: "سوریه", en: "Syria" },
    flag: ["#CE1126", "#FFFFFF", "#000000"],
    founded: 1946,
    foundedNote: {
      fa: "قدمت استقلال سوریه از خروج آخرین سرباز فرانسوی در ۱۷ آوریل ۱۹۴۶ حساب می‌شود؛ دمشق از کهن‌ترین سکونتگاه‌های پیوسته جهان است.",
      en: "Evacuation Day on 17 April 1946 marked independence; Damascus is one of the world's oldest continuously inhabited cities."
    },
    summary: {
      fa: "کهن‌ترین پایتخت پیوسته‌ی جهان در دمشق، تمدن‌های پالمیرا، اوگاریت و مسجد جامع اموی.",
      en: "Cradle of ancient civilizations, home to Damascus, Palmyra, and Aleppo's Citadel."
    },
    facts: {
      capital: { fa: "دمشق", en: "Damascus" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۲۲ میلیون نفر", en: "About 22 million" }
    },
    overview: {
      fa: [
        "سوریه در هلال حاصلخیز، جایی است که الفبای اوگاریتی ابداع شد و دمشق در قرن هفتم میلادی پایتخت امپراتوری جهانی امویان بود."
      ],
      en: [
        "Home to the Ugaritic alphabet and early agricultural settlements, Syria was the heart of the Umayyad Caliphate."
      ]
    },
    timeline: [
      { year: 661, title: { fa: "دمشق پایتخت خلافت اموی", en: "Umayyad Damascus" }, text: { fa: "دمشق مرکز بزرگ‌ترین امپراتوری وقت جهان شد.", en: "Damascus became the caliphate's capital." } },
      { year: 1946, title: { fa: "روز تخلیه (استقلال)", en: "Evacuation Day" }, text: { fa: "خروج نیروهای فرانسوی و استقلال کامل سوریه.", en: "Full sovereignty achieved on 17 April." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "united-arab-emirates",
    name: { fa: "امارات متحده عربی", en: "United Arab Emirates" },
    flag: ["#00732F", "#FFFFFF", "#000000"],
    founded: 1971,
    foundedNote: {
      fa: "قدمت اتحاد امارات متحده عربی از ۲ دسامبر ۱۹۷۱ به رهبری شیخ زاید بن سلطان آل نهیان محاسبه می‌شود.",
      en: "Founded on 2 December 1971 under the visionary leadership of Sheikh Zayed bin Sultan Al Nahyan."
    },
    summary: {
      fa: "کانون آسمان‌خراش‌ها، برج خلیفه، معماری مدرن و قطب بازرگانی و هوانوردی خلیج فارس.",
      en: "Federation of seven emirates famed for Burj Khalifa, futuristic Dubai, and Abu Dhabi."
    },
    facts: {
      capital: { fa: "ابوظبی", en: "Abu Dhabi" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۱۰ میلیون نفر", en: "About 10 million" }
    },
    overview: {
      fa: [
        "امارات با اتحاد هفت شیخ‌نشین ظرف نیم قرن از بنادر صید مروارید به یکی از پویاترین مراکز مالی، گردشگری و نوآوری جهان بدل شد."
      ],
      en: [
        "Uniting Abu Dhabi, Dubai, Sharjah, and four other emirates, the UAE is a global aviation, trade, and architectural marvel."
      ]
    },
    timeline: [
      { year: 1971, title: { fa: "تأسیس امارات متحده عربی", en: "Federation Established" }, text: { fa: "اتحاد تاریخی امارت‌ها در ۲ دسامبر.", en: "Seven emirates unified into one nation." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "qatar",
    name: { fa: "قطر", en: "Qatar" },
    flag: ["#FFFFFF", "#8D1B3D"],
    flagDirection: "vertical",
    founded: 1878,
    foundedNote: {
      fa: "قدمت قطر از ۱۸ دسامبر ۱۸۷۸ با جانشینی جاسم بن محمد آل ثانی به‌عنوان بنیان‌گذار کشور حساب می‌شود؛ استقلال نوین در ۱۹۷۱ رقم خورد.",
      en: "National Day commemorates 18 December 1878 under Jassim bin Mohammed Al Thani; modern independence gained in 1971."
    },
    summary: {
      fa: "شبه‌جزیره‌ی گاز طبیعی، موزه‌های معماری پیشرو در دوحه و میزبان جام جهانی ۲۰۲۲.",
      en: "Prosperous Gulf peninsula, leading LNG exporter, and host of the 2022 World Cup."
    },
    facts: {
      capital: { fa: "دوحه", en: "Doha" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۲٫۹ میلیون نفر", en: "About 2.9 million" }
    },
    overview: {
      fa: [
        "قطر در کرانه‌ی خلیج فارس با بزرگ‌ترین ذخایر گاز طبیعی مشترک و چشم‌انداز ملی، کانون رویدادهای بین‌المللی و دیپلماسی است."
      ],
      en: [
        "Boasting immense natural gas reserves and iconic Doha skyline architecture, Qatar is an active diplomatic center."
      ]
    },
    timeline: [
      { year: 1878, title: { fa: "آغاز حاکمیت آل ثانی", en: "Jassim bin Mohammed's reign" }, text: { fa: "تثبیت وحدت قبایل قطر.", en: "Foundations of unified Qatar laid." } },
      { year: 1971, title: { fa: "استقلال رسمی", en: "Independence" }, text: { fa: "پایان پیمان تحت‌الحمایگی با بریتانیا.", en: "Independence declared from Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "kuwait",
    name: { fa: "کویت", en: "Kuwait" },
    flag: ["#007A3D", "#FFFFFF", "#CE1126"],
    founded: 1752,
    foundedNote: {
      fa: "قدمت کویت از سال ۱۷۵۲ میلادی و انتخاب صباح اول بن جابر به‌عنوان نخستین حکمران خاندان آل صباح حساب می‌شود.",
      en: "Counted from 1752 when Sabah I bin Jaber was chosen as the first ruler of the House of Sabah."
    },
    summary: {
      fa: "بندرگاه تاریخی در شمال خلیج فارس، برج‌های مشهور کویت و اقتصاد قدرتمند بر پایه‌ی نفت.",
      en: "Historic maritime port at the head of the Gulf, famed for the Kuwait Towers."
    },
    facts: {
      capital: { fa: "کویت", en: "Kuwait City" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۴٫۳ میلیون نفر", en: "About 4.3 million" }
    },
    overview: {
      fa: [
        "کویت با سابقه‌ی دریانوردی و تجارت مروارید، نخستین کشور عربی خلیج فارس بود که قانون اساسی و پارلمان منتخب را بنا نهاد."
      ],
      en: [
        "Kuwait evolved from seafaring merchant traditions into a constitutional emirate with an active parliamentary life."
      ]
    },
    timeline: [
      { year: 1752, title: { fa: "حکومت آل صباح", en: "House of Sabah established" }, text: { fa: "آغاز حکمرانی صباح اول در کویت.", en: "Sabah dynasty began governance." } },
      { year: 1961, title: { fa: "استقلال کویت", en: "Independence" }, text: { fa: "پایان توافق‌نامه با بریتانیا.", en: "Independence declared on 19 June." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "bahrain",
    name: { fa: "بحرین", en: "Bahrain" },
    flag: ["#FFFFFF", "#DA291C"],
    flagDirection: "vertical",
    founded: 1783,
    foundedNote: {
      fa: "قدمت حاکمیت آل خلیفه در بحرین از سال ۱۷۸۳ میلادی با تصرف جزیره به دست احمد بن محمد آل خلیفه حساب می‌شود؛ تمدن دیلمون به ۳۰۰۰ پ.م. می‌رسد.",
      en: "House of Khalifa rule began in 1783; ancient Dilmun civilization dates back to 3000 BCE."
    },
    summary: {
      fa: "مجمع‌الجزایر مروارید در خلیج فارس، کانون تمدن کهن دیلمون و پل ارتباطی با شبه‌جزیره عربستان.",
      en: "Ancient Kingdom of Dilmun, famed for natural pearl fisheries and financial services."
    },
    facts: {
      capital: { fa: "منامه", en: "Manama" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۱٫۵ میلیون نفر", en: "About 1.5 million" }
    },
    overview: {
      fa: [
        "بحرین مهد تمدن تجاری دیلمون در عصر برنز بود و با پل ملک فهد به عربستان پیوند خورده است."
      ],
      en: [
        "Rich in Dilmun burial mounds and natural sweet springs in the sea, Bahrain is an open banking hub."
      ]
    },
    timeline: [
      { year: 1783, title: { fa: "استقرار حکومت آل خلیفه", en: "Al Khalifa Rule Begins" }, text: { fa: "آغاز دوران حکمرانی نوین بحرین.", en: "Al Khalifa took control of Bahrain." } },
      { year: 1971, title: { fa: "استقلال بحرین", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۱۵ اوت.", en: "Independence from British treaty status." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "oman",
    name: { fa: "عمان", en: "Oman" },
    flag: ["#ED1B24", "#FFFFFF", "#008000"],
    founded: 751,
    foundedNote: {
      fa: "قدمت عمان از سال ۷۵۱ میلادی و استقرار نخستین امامت اباضیه در نزوی حساب می‌شود؛ تمدن ماجان به ۳۰۰۰ پ.م. برمی‌گردد.",
      en: "Counted from 751 CE with the first Ibadi Imamate at Nizwa; ancient copper realm of Magan dates to 3000 BCE."
    },
    summary: {
      fa: "سلطنت کهن دریانوردی در دهانه‌ی اقیانوس هند، قلعه‌های باشکوه نزوی، بهشت کندر و معماری چشم‌نواز مسقط.",
      en: "Sultanate with a storied maritime empire, frankincense trails, and grand forts."
    },
    facts: {
      capital: { fa: "مسقط", en: "Muscat" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۵٫۱ میلیون نفر", en: "About 5.1 million" }
    },
    overview: {
      fa: [
        "عمان امپراتوری دریایی بزرگی از زنگبار تا گوادر پاکستان را در سده‌ی هجدهم اداره می‌کرد و به سنت‌های دیرین صلح و میانجی‌گری وفادار است."
      ],
      en: [
        "Once ruling a maritime domain from Zanzibar to Pakistan, Oman is celebrated for peaceful diplomacy and preserved heritage."
      ]
    },
    timeline: [
      { year: 751, title: { fa: "نخستین امامت عمان", en: "First Ibadi Imamate" }, text: { fa: "انتخاب جلندی بن مسعود به‌عنوان نخستین امام.", en: "Election of first Ibadi Imam." } },
      { year: 1650, title: { fa: "اخراج پرتغالی‌ها", en: "Expulsion of the Portuguese" }, text: { fa: "امام سلطان بن سیف مسقط را آزاد کرد.", en: "Omani fleet cleared the coast." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "yemen",
    name: { fa: "یمن", en: "Yemen" },
    flag: ["#CE1126", "#FFFFFF", "#000000"],
    founded: -1000,
    foundedNote: {
      fa: "قدمت یمن باستانی از پادشاهی سبا در حدود ۱۰۰۰ پیش از میلاد و سد مشهور مأرب حساب می‌شود؛ جمهوری مدرن در ۱۹۹۰ متحد شد.",
      en: "Historic statehood dates to the Kingdom of Sheba (Saba) c. 1000 BCE; modern unified Republic established in 1990."
    },
    summary: {
      fa: "سرزمین کهن ملکه سبا، معماری خشتی چندطبقه‌ی شبام، دروازه‌ی باب‌المندب و خاک حاصلخیز عربستان سعیده.",
      en: "Land of Queen of Sheba, skyscraper mud cities of Shibam, and Bab el-Mandeb strait."
    },
    facts: {
      capital: { fa: "صنعا", en: "Sanaa" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۳۴ میلیون نفر", en: "About 34 million" }
    },
    overview: {
      fa: [
        "یمن ملقب به «عربیا فلیکس» (عربستان خوشبخت)، زادگاه تمدن‌های سبا و حمیر و مبدأ تجارت کندر و قهوه‌ی نامدار مخا در جهان است."
      ],
      en: [
        "Known as Arabia Felix in antiquity, Yemen engineered the Marib Dam and gave the world Mocha coffee."
      ]
    },
    timeline: [
      { year: -1000, title: { fa: "پادشاهی سبا", en: "Kingdom of Saba" }, text: { fa: "شکوفایی تجارت کندر و ساخت سد مأرب.", en: "Peak of Sabaean kingdom." } },
      { year: 1990, title: { fa: "اتحاد یمن", en: "Yemeni Unification" }, text: { fa: "یکپارچگی شمال و جنوب یمن در ۲۲ مه.", en: "North and South Yemen unified." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "afghanistan",
    name: { fa: "افغانستان", en: "Afghanistan" },
    flag: ["#000000", "#D32011", "#007A36"],
    flagDirection: "vertical",
    founded: 1747,
    foundedNote: {
      fa: "قدمت افغانستان مدرن از سال ۱۷۴۷ میلادی با تشکیل لویه جرگه و پادشاهی احمد شاه درانی در قندهار حساب می‌شود.",
      en: "Modern statehood founded in 1747 when Ahmad Shah Durrani established the Durrani Empire in Kandahar."
    },
    summary: {
      fa: "چهارراه استراتژیک آسیا در رشته‌کوه‌های هندوکش، مهد تمدن بلخ و بوداهای بامیان و تاریخ پرفراز و نشیب.",
      en: "Crossroads of Central and South Asia, framed by the Hindu Kush, Balkh, and Herat."
    },
    facts: {
      capital: { fa: "کابل", en: "Kabul" },
      language: { fa: "دری (فارسی)، پشتو", en: "Dari, Pashto" },
      population: { fa: "حدود ۴۱ میلیون نفر", en: "About 41 million" }
    },
    overview: {
      fa: [
        "افغانستان در قلب جاده‌ی ابریشم، گذرگاه پیوند تمدن‌های ایرانی، هندی و آسیای مرکزی بوده و شهرهایی چون بلخ، هرات و کابل کانون‌های تاریخی آنند."
      ],
      en: [
        "At the heart of the Silk Road, Afghanistan flourished under the Kushans, Ghaznavids, and Timurid renaissance in Herat."
      ]
    },
    timeline: [
      { year: 1747, title: { fa: "پادشاهی احمد شاه درانی", en: "Durrani Empire" }, text: { fa: "بنیان‌گذاری دولت مستقل درانی در قندهار.", en: "Ahmad Shah crowned in Kandahar." } },
      { year: 1919, title: { fa: "استقلال کامل از بریتانیا", en: "Treaty of Rawalpindi" }, text: { fa: "شاه امان‌الله خان استقلال کامل را تثبیت کرد.", en: "Full sovereignty regained from Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "sri-lanka",
    name: { fa: "سری‌لانکا", en: "Sri Lanka" },
    flag: ["#FFBE29"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'><rect width='24' height='12' fill='%23FFBE29'/><rect x='2' y='1' width='3' height='10' fill='%23005F41'/><rect x='5' y='1' width='3' height='10' fill='%23EB7400'/><rect x='9' y='1' width='13' height='10' fill='%238D153A'/></svg>",
    founded: -543,
    foundedNote: {
      fa: "قدمت سری‌لانکا بر پایه‌ی تاریخ سنتی ماهاوامسا از سال ۵۴۳ پیش از میلاد با ورود شاهزاده ویجایا حساب می‌شود؛ استقلال نوین در ۱۹۴۸ رقم خورد.",
      en: "Chronicles trace founding to Prince Vijaya in 543 BCE (Kingdom of Tambapanni); modern independence in 1948."
    },
    summary: {
      fa: "مروارید اقیانوس هند؛ باغ‌های چای سیلان، معبد دندان بودا در کندی و دژ صخره‌ای سیگیریا.",
      en: "Pearl of the Indian Ocean, famous for Ceylon tea, ancient Anuradhapura, and Sigiriya."
    },
    facts: {
      capital: { fa: "سری جایاواردنپورا کوته (کلمبو)", en: "Sri Jayawardenepura Kotte" },
      language: { fa: "سینهالی، تامیلی", en: "Sinhala, Tamil" },
      population: { fa: "حدود ۲۲ میلیون نفر", en: "About 22 million" }
    },
    overview: {
      fa: [
        "سری‌لانکا با بیش از دو هزار سال سنت بودایی تراوادا و شهرهای باستانی آنوراداپورا و پولوناروا، از نگین‌های تمدنی آسیاست."
      ],
      en: [
        "Featuring UNESCO heritage cities and historic Buddhist monasteries, Sri Lanka is a global producer of tea and spices."
      ]
    },
    timeline: [
      { year: -247, title: { fa: "ورود بودیسم به سری‌لانکا", en: "Arrival of Buddhism" }, text: { fa: "ماهیندا آیین بودا را به پادشاه معرفی کرد.", en: "Ashoka's son Mahinda brought Buddhism." } },
      { year: 1948, title: { fa: "استقلال سیلان", en: "Independence" }, text: { fa: "استقلال رسمی از بریتانیا.", en: "Sovereignty granted by Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "nepal",
    name: { fa: "نپال", en: "Nepal" },
    flag: ["#DC143C"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 20'><path d='M0 0l16 10H5l11 10H0z' fill='%23DC143C' stroke='%23003893' stroke-width='1.5'/></svg>",
    founded: 1768,
    foundedNote: {
      fa: "قدمت پادشاهی یکپارچه نپال از سال ۱۷۶۸ میلادی با فتح دره کاتماندو به دست پریثوی نارایان شاه حساب می‌شود.",
      en: "Counted from 1768 when Prithvi Narayan Shah unified the kingdoms of the Kathmandu Valley."
    },
    summary: {
      fa: "بام جهان با قله‌ی اورست، زادگاه بودا در لومبینی و معابد تاریخی دره‌ی کاتماندو.",
      en: "Roof of the world featuring Mount Everest, birthplace of Buddha at Lumbini."
    },
    facts: {
      capital: { fa: "کاتماندو", en: "Kathmandu" },
      language: { fa: "نپالی", en: "Nepali" },
      population: { fa: "حدود ۳۱ میلیون نفر", en: "About 31 million" }
    },
    overview: {
      fa: [
        "نپال هشت قله از ده قله‌ی بلند جهان از جمله اورست را در خود جای داده و مهد صلح و همزیستی هندوئیسم و بودیسم است."
      ],
      en: [
        "Home to Mount Everest and the sacred birth shrine of Gautama Buddha, Nepal preserved independence throughout the colonial era."
      ]
    },
    timeline: [
      { year: -563, title: { fa: "زادروز بودا در لومبینی", en: "Birth of Buddha" }, text: { fa: "سیدهارتا گوتاما در لومبینی زاده شد.", en: "Gautama Buddha born in Lumbini." } },
      { year: 1768, title: { fa: "یکپارچگی نپال", en: "Unification of Nepal" }, text: { fa: "پریثوی نارایان شاه نپال متحد را بنا نهاد.", en: "Prithvi Narayan Shah founded modern Nepal." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "bhutan",
    name: { fa: "بوتان", en: "Bhutan" },
    flag: ["#FFD520", "#FF4E12"],
    founded: 1616,
    foundedNote: {
      fa: "قدمت بوتان از سال ۱۶۱۶ میلادی و ورود شبدرونگ نگاوانگ نامگیال که دره‌های بوتان را متحد ساخت حساب می‌شود.",
      en: "Counted from 1616 CE when Zhabdrung Ngawang Namgyal unified the valleys into Druk Yul."
    },
    summary: {
      fa: "پادشاهی اژدهای تندر در دل هیمالیا، مبتکر شاخص شادی ناخالص ملی و دژهای بودایی جونگ.",
      en: "The Kingdom of the Thunder Dragon, pioneer of Gross National Happiness."
    },
    facts: {
      capital: { fa: "تیمفو", en: "Thimphu" },
      language: { fa: "جونگخا", en: "Dzongkha" },
      population: { fa: "حدود ۷۸۰ هزار نفر", en: "About 780,000" }
    },
    overview: {
      fa: [
        "بوتان کشوری کربن‌منفی در هیمالیاست که اولویت توسعه‌ی خود را به جای رشد مادی بر شادکامی معنوی و حفاظت از محیط زیست نهاده است."
      ],
      en: [
        "The world's only carbon-negative nation, Bhutan balances ancient Mahayana Buddhist monastic life with sustainable modernization."
      ]
    },
    timeline: [
      { year: 1616, title: { fa: "اتحاد دروک یول", en: "Unification of Bhutan" }, text: { fa: "شبدرونگ سیستم قلعه‌های جونگ را پی‌ریخت.", en: "Zhabdrung established unified Buddhist state." } },
      { year: 1907, title: { fa: "پادشاهی موروثی وانگچوک", en: "First Druk Gyalpo" }, text: { fa: "اوگن وانگچوک نخستین پادشاه مدرن شد.", en: "Monarchy established under Wangchuck dynasty." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "maldives",
    name: { fa: "مالدیو", en: "Maldives" },
    flag: ["#D13F43"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 12'><rect width='18' height='12' fill='%23D13F43'/><rect x='3' y='2' width='12' height='8' fill='%23007E3A'/><circle cx='9.5' cy='6' r='2' fill='white'/></svg>",
    founded: 1153,
    foundedNote: {
      fa: "قدمت سلطنت اسلامی مالدیو از سال ۱۱۵۳ میلادی و گرویدن پادشاه دهووهی به اسلام حساب می‌شود؛ استقلال در ۱۹۶۵ به دست آمد.",
      en: "Counted from 1153 CE when the kingdom converted to Islam; independence from Britain achieved in 1965."
    },
    summary: {
      fa: "بهشت آب‌سنگ‌های مرجانی در اقیانوس هند با ۱۱۹۲ جزیره‌ی پست و تالاب‌های نیلگون شگفت‌انگیز.",
      en: "Coral atoll paradise in the Indian Ocean, famous for crystal lagoons."
    },
    facts: {
      capital: { fa: "ماله", en: "Male" },
      language: { fa: "دیوهی", en: "Dhivehi" },
      population: { fa: "حدود ۵۲۰ هزار نفر", en: "About 520,000" }
    },
    overview: {
      fa: [
        "مالدیو با جزایر مرجانی کم‌ارتفاع خود در اقیانوس هند، نماد پیشگامی جهانی در آگاهی‌بخشی نسبت به تغییرات اقلیمی است."
      ],
      en: [
        "Composed of 26 natural atolls, the Maldives leads global advocacy against sea-level rise and climate change."
      ]
    },
    timeline: [
      { year: 1153, title: { fa: "گرویدن مالدیو به اسلام", en: "Conversion to Islam" }, text: { fa: "آغاز دوران سلطنت اسلامی در ماله.", en: "King converted and sultanate established." } },
      { year: 1965, title: { fa: "استقلال از بریتانیا", en: "Independence" }, text: { fa: "اعلام استقلال کامل در ۲۶ ژوئیه.", en: "Full independence recognized." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "myanmar",
    name: { fa: "میانمار", en: "Myanmar" },
    flag: ["#FECB00", "#34B233", "#EA2839"],
    founded: 1044,
    foundedNote: {
      fa: "قدمت میانمار از تأسیس پادشاهی باگان در سال ۱۰۴۴ میلادی به دست شاه آنوراتا حساب می‌شود.",
      en: "Counted from 1044 CE when King Anawrahta unified the realm into the Pagan Kingdom."
    },
    summary: {
      fa: "سرزمین دشت‌های باستانی باگان با هزاران بتکده‌ی طلایی و پاگودای باشکوه شوئداگون در یانگون.",
      en: "Golden land of Bagan pagodas, Irrawaddy river, and Shwedagon Pagoda."
    },
    facts: {
      capital: { fa: "نایپیداو", en: "Naypyidaw" },
      language: { fa: "برمه‌ای", en: "Burmese" },
      population: { fa: "حدود ۵۴ میلیون نفر", en: "About 54 million" }
    },
    overview: {
      fa: [
        "میانمار در دره‌ی رود ایراوادی با میراث باگان و امپراتوری‌های تائونگو و کونبائونگ، کانون سنت بودایی تروادا است."
      ],
      en: [
        "Pagan Kingdom built over 2,000 Buddhist monuments across the Bagan plains between the 11th and 13th centuries."
      ]
    },
    timeline: [
      { year: 1044, title: { fa: "پادشاهی باگان", en: "Pagan Empire" }, text: { fa: "آنوراتا زبان و فرهنگ برمه‌ای را یکپارچه ساخت.", en: "Anawrahta unified Burma under Theravada Buddhism." } },
      { year: 1948, title: { fa: "استقلال برمه", en: "Independence of Burma" }, text: { fa: "استقلال رسمی در ۴ ژانویه.", en: "Independence from British rule." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "cambodia",
    name: { fa: "کامبوج", en: "Cambodia" },
    flag: ["#032EA6", "#E00025", "#032EA6"],
    founded: 802,
    foundedNote: {
      fa: "قدمت کامبوج از سال ۸۰۲ میلادی با تاج‌گذاری جایاورمان دوم و بنیان‌گذاری امپراتوری خمر در آنگکور حساب می‌شود.",
      en: "Counted from 802 CE when Jayavarman II proclaimed himself universal monarch, founding the Khmer Empire."
    },
    summary: {
      fa: "مهد امپراتوری خمر و معبد شگفت‌انگیز آنگکور وات، بزرگ‌ترین بنای مذهبی جهان.",
      en: "Kingdom of the Khmers, home to the colossal temples of Angkor Wat."
    },
    facts: {
      capital: { fa: "پنوم‌پن", en: "Phnom Penh" },
      language: { fa: "خمری", en: "Khmer" },
      population: { fa: "حدود ۱۷ میلیون نفر", en: "About 17 million" }
    },
    overview: {
      fa: [
        "امپراتوری خمر کامبوج در سده‌های نهم تا پانزدهم بر بخش‌های وسیعی از جنوب شرق آسیا حکم راند و آنگکور وات اوج هنر معماری آن است."
      ],
      en: [
        "The Khmer Empire was Southeast Asia's greatest medieval power, constructing intricate water reservoirs and stone temples."
      ]
    },
    timeline: [
      { year: 802, title: { fa: "آغاز امپراتوری خمر", en: "Khmer Empire Founded" }, text: { fa: "جایاورمان دوم امپراتوری را متحد کرد.", en: "Jayavarman II established the empire." } },
      { year: 1150, title: { fa: "ساخت آنگکور وات", en: "Angkor Wat Built" }, text: { fa: "سوریاوارمان دوم بزرگ‌ترین معبد جهان را ساخت.", en: "Suryavarman II constructed the temple." } },
      { year: 1953, title: { fa: "استقلال از فرانسه", en: "Independence" }, text: { fa: "شاه نورودوم سیهانوک استقلال را به دست آورد.", en: "King Norodom Sihanouk secured freedom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "laos",
    name: { fa: "لائوس", en: "Laos" },
    flag: ["#CE1126", "#002868", "#CE1126"],
    founded: 1353,
    foundedNote: {
      fa: "قدمت لائوس از سال ۱۳۵۳ میلادی و بنیان‌گذاری پادشاهی لان شانگ (سرزمین یک میلیون فیل) به دست فا نگوم حساب می‌شود.",
      en: "Counted from 1353 CE when Fa Ngum established the Kingdom of Lan Xang (Million Elephants)."
    },
    summary: {
      fa: "سرزمین آرام یک میلیون فیل، رود پرخروش مکونگ و شهر باستانی لوانگ پرابانگ.",
      en: "Peaceful land of a million elephants, Luang Prabang, and the Mekong River."
    },
    facts: {
      capital: { fa: "وینتیان", en: "Vientiane" },
      language: { fa: "لائو", en: "Lao" },
      population: { fa: "حدود ۷٫۶ میلیون نفر", en: "About 7.6 million" }
    },
    overview: {
      fa: [
        "لائوس تنها کشور محصور در خشکی جنوب شرق آسیاست که در امتداد رود مکونگ، معابد طلایی و سنت‌های کهن بودایی را حفظ کرده است."
      ],
      en: [
        "Flanked by the Annamite Range and Mekong River, Laos preserves tranquil Buddhist traditions and French colonial architecture."
      ]
    },
    timeline: [
      { year: 1353, title: { fa: "پادشاهی لان شانگ", en: "Kingdom of Lan Xang" }, text: { fa: "فا نگوم پادشاهی یک میلیون فیل را بنا نهاد.", en: "Fa Ngum unified Lao lands." } },
      { year: 1953, title: { fa: "استقلال لائوس", en: "Independence" }, text: { fa: "استقلال کامل از فرانسه به دست آمد.", en: "Independence from France." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "brunei",
    name: { fa: "برونئی", en: "Brunei" },
    flag: ["#F7E017"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'><rect width='20' height='10' fill='%23F7E017'/><polygon points='0,0 20,7 20,8 0,1' fill='white'/><polygon points='0,1 20,8 20,10 0,3' fill='black'/></svg>",
    founded: 1368,
    foundedNote: {
      fa: "قدمت سلطنت برونئی از سال ۱۳۶۸ میلادی با پادشاهی محمد شاه (آوانگ آلاک بتاتار) حساب می‌شود؛ استقلال در ۱۹۸۴ تثبیت شد.",
      en: "Sultanate dates to 1368 under Sultan Muhammad Shah; full independence from Britain in 1984."
    },
    summary: {
      fa: "سلطنت مرفه در ساحل شمالی جزیره بورنئو، مساجد باشکوه با گنبدهای زرین و جنگل‌های بارانی استوایی دست‌نخورده.",
      en: "Wealthy Borneo sultanate famed for golden-domed mosques and pristine rainforests."
    },
    facts: {
      capital: { fa: "بندر سری بگاوان", en: "Bandar Seri Begawan" },
      language: { fa: "مالایی", en: "Malay" },
      population: { fa: "حدود ۴۵۰ هزار نفر", en: "About 450,000" }
    },
    overview: {
      fa: [
        "سلطنت برونئی دارالسلام در سده‌های ۱۵ و ۱۶ بر بیشتر مناطق جزیره بورنئو و فیلیپین نفوذ داشت و امروزه با منابع انرژی مرفه‌ترین دولت جزیره است."
      ],
      en: [
        "Historic maritime sultanate of Borneo that retains pristine tropical rainforests and Islamic monarchy traditions."
      ]
    },
    timeline: [
      { year: 1368, title: { fa: "تأسیس سلطنت برونئی", en: "Sultanate Founded" }, text: { fa: "آغاز دودمان پادشاهی برونئی.", en: "Muhammad Shah became first Sultan." } },
      { year: 1984, title: { fa: "استقلال کامل", en: "Independence" }, text: { fa: "استقلال رسمی از بریتانیا در اول ژانویه.", en: "Full sovereignty resumed." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "timor-leste",
    name: { fa: "تیمور شرقی", en: "Timor-Leste" },
    flag: ["#DC241F"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'><rect width='20' height='10' fill='%23DC241F'/><polygon points='0,0 10,5 0,10' fill='%23FFC726'/><polygon points='0,0 7,5 0,10' fill='black'/></svg>",
    founded: 2002,
    foundedNote: {
      fa: "قدمت استقلال نوین تیمور شرقی از ۲۰ مه ۲۰۰۲ به‌عنوان نخستین کشور جدید قرن بیست و یکم پس از استعمار پرتغال و اندونزی حساب می‌شود.",
      en: "Independence internationally restored on 20 May 2002, the first new sovereign state of the 21st century."
    },
    summary: {
      fa: "کشور جوان مجمع‌الجزایر مالایی با فرهنگ کاتولیک پرتغالی، سواحل مرجانی و قهوه‌ی مرغوب ارگانیک.",
      en: "Young Pacific-island nation combining Portuguese Catholic heritage and coral biodiversity."
    },
    facts: {
      capital: { fa: "دیلی", en: "Dili" },
      language: { fa: "تتوم، پرتغالی", en: "Tetum, Portuguese" },
      population: { fa: "حدود ۱٫۴ میلیون نفر", en: "About 1.4 million" }
    },
    overview: {
      fa: [
        "تیمور شرقی پس از قرن‌ها حکومت پرتغال و دهه‌ها مبارزه در دوران اشغال، با همه‌پرسی نظارت‌شده توسط سازمان ملل به آزادی و دموکراسی رسید."
      ],
      en: [
        "Occupying the eastern half of Timor island, Timor-Leste gained hard-won sovereignty following an UN-supervised 1999 referendum."
      ]
    },
    timeline: [
      { year: 2002, title: { fa: "احیای استقلال تیمور شرقی", en: "Restoration of Independence" }, text: { fa: "تأسیس رسمی جمهوری دموکراتیک در ۲۰ مه.", en: "Internationally recognized sovereignty." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "mongolia",
    name: { fa: "مغولستان", en: "Mongolia" },
    flag: ["#E4002B", "#003DA5", "#E4002B"],
    flagDirection: "vertical",
    founded: 1206,
    foundedNote: {
      fa: "قدمت مغولستان از سال ۱۲۰۶ میلادی با اتحاد قبایل چادرنشین استپ‌ها به دست چنگیزخان و برپایی امپراتوری مغول حساب می‌شود.",
      en: "Counted from 1206 CE when Genghis Khan united the nomadic tribes into the Mongol Empire."
    },
    summary: {
      fa: "سرزمین آسمان آبی بی‌پایان، استپ‌های پهناور اوراسیا، چادرهای سنتی یورت و اسب‌سواران بادپا.",
      en: "Land of the eternal blue sky, boundless steppes, nomadic yurts, and Genghis Khan."
    },
    facts: {
      capital: { fa: "اولان‌باتور", en: "Ulaanbaatar" },
      language: { fa: "مغولی", en: "Mongolian" },
      population: { fa: "حدود ۳٫۴ میلیون نفر", en: "About 3.4 million" }
    },
    overview: {
      fa: [
        "امپراتوری مغول در سده سیزدهم میلادی پهناورترین امپراتوری متصل در تاریخ بشر را از اقیانوس آرام تا اروپای مرکزی بنیان نهاد."
      ],
      en: [
        "The Mongol Empire created the Pax Mongolica across Eurasia, opening Silk Road commerce and cultural exchange."
      ]
    },
    timeline: [
      { year: 1206, title: { fa: "قوریلتای ۱۲۰۶", en: "Kurultai of 1206" }, text: { fa: "تموچین لقب چنگیزخان گرفت و امپراتوری را پایه‌گذاری کرد.", en: "Genghis Khan proclaimed supreme ruler." } },
      { year: 1911, title: { fa: "اعلام استقلال از سلسله چینگ", en: "Independence from Qing" }, text: { fa: "مغولستان خودمختاری را احیا کرد.", en: "Declaration of independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "kazakhstan",
    name: { fa: "قزاقستان", en: "Kazakhstan" },
    flag: ["#00AFCA"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 15'><rect width='30' height='15' fill='%2300AFCA'/><circle cx='15' cy='7.5' r='3' fill='%23FEC50C'/></svg>",
    founded: 1465,
    foundedNote: {
      fa: "قدمت قزاقستان از تأسیس خانات قزاق در سال ۱۴۶۵ میلادی به دست جانی‌بک خان و کری خان در استپ‌های اوراسیا حساب می‌شود.",
      en: "Counted from 1465 CE and the founding of the Kazakh Khanate by Janibek and Kerei."
    },
    summary: {
      fa: "نهمین کشور پهناور جهان؛ قلب استپ‌های طلایی اوراسیا، پایگاه فضایی بایکونور و معماری مدرن آستانه.",
      en: "World's largest landlocked country, bridging European and Asian steppes."
    },
    facts: {
      capital: { fa: "آستانه", en: "Astana" },
      language: { fa: "قزاقی، روسی", en: "Kazakh, Russian" },
      population: { fa: "حدود ۲۰ میلیون نفر", en: "About 20 million" }
    },
    overview: {
      fa: [
        "قزاقستان پهناورترین کشور آسیای مرکزی است و با منابع عظیم انرژی و دشت‌های تاریخی، نقطه پیوند تاریخی شرق و غرب بوده است."
      ],
      en: [
        "Spanning from the Caspian Sea to the Altai Mountains, Kazakhstan was home to nomadic horse cultures and the Baikonur Cosmodrome."
      ]
    },
    timeline: [
      { year: 1465, title: { fa: "تأسیس خانات قزاق", en: "Kazakh Khanate" }, text: { fa: "جدایی قبایل و آغاز تاریخ دولت قزاق.", en: "Formation of Kazakh Khanate." } },
      { year: 1991, title: { fa: "استقلال قزاقستان", en: "Independence" }, text: { fa: "اعلام استقلال از اتحاد شوروی در ۱۶ دسامبر.", en: "Independence declared from the USSR." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "uzbekistan",
    name: { fa: "ازبکستان", en: "Uzbekistan" },
    flag: ["#0099B5", "#CE1126", "#FFFFFF", "#CE1126", "#1EB53A"],
    founded: 1991,
    foundedNote: {
      fa: "قدمت استقلال ازبکستان از ۳۱ اوت ۱۹۹۱ اعلام شده است؛ شهرهای جاده ابریشم سمرقند و بخارا بیش از ۲۵۰۰ سال قدمت دارند.",
      en: "Independent statehood achieved on 31 August 1991; ancient Silk Road gems Samarkand and Bukhara date back 2,500 years."
    },
    summary: {
      fa: "قلب جاده‌ی ابریشم؛ گنبدهای فیروزه‌ای سمرقند، مناره‌های تاریخی بخارا و معماری خیره‌کننده‌ی تیموری.",
      en: "Heart of the ancient Silk Road, adorned with turquoise domes of Samarkand and Bukhara."
    },
    facts: {
      capital: { fa: "تاشکند", en: "Tashkent" },
      language: { fa: "ازبکی", en: "Uzbek" },
      population: { fa: "حدود ۳۶ میلیون نفر", en: "About 36 million" }
    },
    overview: {
      fa: [
        "ازبکستان با شهرهای افسانه‌ای سمرقند، بخارا و خیوه، زادگاه دانشمندانی چون ابوریحان بیرونی و خوارزمی و پایتخت امپراتوری تیمور لنگ بود."
      ],
      en: [
        "Home to Registan square, Uzbekistan birthed world polymaths Al-Khwarizmi and Ibn Sina along major trans-Eurasian trade routes."
      ]
    },
    timeline: [
      { year: 1370, title: { fa: "سمرقند پایتخت تیمور", en: "Timur's Empire" }, text: { fa: "سمرقند کانون هنر و معماری جهان شد.", en: "Samarkand transformed into imperial capital." } },
      { year: 1991, title: { fa: "استقلال ازبکستان", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در اول سپتامبر.", en: "Sovereignty proclaimed from the USSR." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "turkmenistan",
    name: { fa: "ترکمنستان", en: "Turkmenistan" },
    flag: ["#009944"],
    founded: 1991,
    foundedNote: {
      fa: "قدمت استقلال ترکمنستان از ۲۷ اکتبر ۱۹۹۱ حساب می‌شود؛ شهرهای باستانی مرو و نسا به دوران اشکانیان و سلجوقیان برمی‌گردند.",
      en: "Independence gained on 27 October 1991; ancient Merv and Nisa date back to the Parthian and Seljuk eras."
    },
    summary: {
      fa: "سرزمین صحرای قره‌قوم، اسب‌های اصیل آخال‌تکه، مرو باستان و شهر سپیدمرمر عشق‌آباد.",
      en: "Land of the Karakum Desert, Akhal-Teke horses, ancient Merv, and marble Ashgabat."
    },
    facts: {
      capital: { fa: "عشق‌آباد", en: "Ashgabat" },
      language: { fa: "ترکمنی", en: "Turkmen" },
      population: { fa: "حدود ۶٫۵ میلیون نفر", en: "About 6.5 million" }
    },
    overview: {
      fa: [
        "ترکمنستان با پایتخت باستانی اشکانیان در نسا و شهر مرو که زمانی از بزرگ‌ترین شهرهای جهان اسلام بود، پیوندی عمیق با تاریخ کهن دارد."
      ],
      en: [
        "Holding immense natural gas reserves and preserving historic desert caravanserais, Turkmenistan observes UN-recognized permanent neutrality."
      ]
    },
    timeline: [
      { year: 1991, title: { fa: "استقلال ترکمنستان", en: "Independence" }, text: { fa: "اعلام استقلال از اتحاد شوروی.", en: "Independence declared from the USSR." } },
      { year: 1995, title: { fa: "تصویب بی‌طرفی دائمی", en: "Permanent Neutrality" }, text: { fa: "مجمع عمومی سازمان ملل بی‌طرفی ترکمنستان را تصویب کرد.", en: "UN recognized permanent neutrality." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "kyrgyzstan",
    name: { fa: "قرقیزستان", en: "Kyrgyzstan" },
    flag: ["#E8112D"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 12'><rect width='20' height='12' fill='%23E8112D'/><circle cx='10' cy='6' r='3.5' fill='%23FFE600'/></svg>",
    founded: 1991,
    foundedNote: {
      fa: "قدمت استقلال قرقیزستان از ۳۱ اوت ۱۹۹۱ با فروپاشی شوروی حساب می‌شود؛ حماسه‌ی کهن ماناس ریشه در تاریخ باستان دارد.",
      en: "Independence achieved on 31 August 1991; the epic of Manas preserves millennia of nomadic oral history."
    },
    summary: {
      fa: "سرزمین کوهستان‌های سر به فلک کشیده‌ی تیان شان، دریاچه‌ی بی‌نظیر ایسیک‌کول و حماسه‌ی ماناس.",
      en: "Alpine wonder of the Tien Shan, alpine lake Issyk-Kul, and Epic of Manas."
    },
    facts: {
      capital: { fa: "بیشکک", en: "Bishkek" },
      language: { fa: "قرقیزی، روسی", en: "Kyrgyz, Russian" },
      population: { fa: "حدود ۷ میلیون نفر", en: "About 7 million" }
    },
    overview: {
      fa: [
        "قرقیزستان با ۹۰ درصد اراضی کوهستانی در رشته‌کوه‌های تیان شان و دریاچه‌ی ایسیک‌کول، یکی از زیباترین جلوه‌های طبیعت بکر آسیای مرکزی است."
      ],
      en: [
        "Famed for high alpine pastures, yurts, and nomadic horse culture, Kyrgyzstan features the dramatic Celestial Mountains."
      ]
    },
    timeline: [
      { year: 1991, title: { fa: "استقلال قرقیزستان", en: "Independence" }, text: { fa: "اعلام استقلال در ۳۱ اوت.", en: "Declaration of state sovereignty." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "tajikistan",
    name: { fa: "تاجیکستان", en: "Tajikistan" },
    flag: ["#CC0000", "#FFFFFF", "#009900"],
    founded: 1991,
    foundedNote: {
      fa: "قدمت استقلال تاجیکستان از ۹ سپتامبر ۱۹۹۱ حساب می‌شود؛ پادشاهی سامانیان در سده‌های ۹ و ۱۰ میلادی کانون هویت ملی تاجیک است.",
      en: "Independence declared on 9 September 1991; historic identity is rooted in the 9th-century Samanid Empire."
    },
    summary: {
      fa: "بام جهان در کوهستان پامیر؛ هم‌زبان فارسی با رودکی و سمرقند و میراث درخشان سامانیان.",
      en: "Roof of the world in the Pamir Mountains, sharing Persian literary lineage with Rudaki and Avicenna."
    },
    facts: {
      capital: { fa: "دوشنبه", en: "Dushanbe" },
      language: { fa: "تاجیکی (فارسی)", en: "Tajik" },
      population: { fa: "حدود ۱۰ میلیون نفر", en: "About 10 million" }
    },
    overview: {
      fa: [
        "تاجیکستان در رشته‌کوه‌های مرتفع پامیر و فان، پاسدار زبان فارسی و فرهنگ ایرانی در آسیای مرکزی است و اسماعیل سامانی نماد ملی آن به‌شمار می‌رود."
      ],
      en: [
        "Preserving Persian language and literary traditions in Central Asia, Tajikistan celebrates the Samanid revival under Ismail Samani."
      ]
    },
    timeline: [
      { year: 875, title: { fa: "عصر طلایی سامانیان", en: "Samanid Renaissance" }, text: { fa: "اسماعیل سامانی زبان و فرهنگ فارسی را احیا کرد.", en: "Samanid dynasty revived Persian letters and science." } },
      { year: 1991, title: { fa: "استقلال تاجیکستان", en: "Independence" }, text: { fa: "اعلام استقلال در ۹ سپتامبر.", en: "Sovereignty proclaimed from the USSR." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "azerbaijan",
    name: { fa: "آذربایجان", en: "Azerbaijan" },
    flag: ["#00B9E4", "#ED2939", "#3F9C35"],
    founded: 1918,
    foundedNote: {
      fa: "قدمت جمهوری آذربایجان از ۲۸ مه ۱۹۱۸ با تأسیس جمهوری دموکراتیک آذربایجان حساب می‌شود؛ استقلال دوباره در ۱۹۹۱ رقم خورد.",
      en: "First declared on 28 May 1918 as the Azerbaijan Democratic Republic; restored in 1991."
    },
    summary: {
      fa: "سرزمین آتش در کرانه‌ی دریای خزر، ایچری‌شهر باستانی باکو، کاخ شروان‌شاهان و قلعه دختر.",
      en: "Land of Fire on the Caspian Sea, home to Baku's Flame Towers and ancient Maiden Tower."
    },
    facts: {
      capital: { fa: "باکو", en: "Baku" },
      language: { fa: "آذربایجانی (ترکی آذری)", en: "Azerbaijani" },
      population: { fa: "حدود ۱۰٫۲ میلیون نفر", en: "About 10.2 million" }
    },
    overview: {
      fa: [
        "جمهوری آذربایجان در تقاطع قفقاز و خزر با تاریخ باستانی شروان‌شاهان و منابع سرشار انرژی، نخستین دموکراسی پارلمانی جهان اسلام را در ۱۹۱۸ بنا کرد."
      ],
      en: [
        "Famed for natural gas vents and historic oil discoveries, Azerbaijan established the Muslim world's first secular democratic republic in 1918."
      ]
    },
    timeline: [
      { year: 1918, title: { fa: "جمهوری دموکراتیک آذربایجان", en: "Democratic Republic" }, text: { fa: "تأسیس نخستین جمهوری دموکراتیک در شرق مسلمان.", en: "First secular democracy in the Muslim world." } },
      { year: 1991, title: { fa: "احیای استقلال", en: "Independence Restored" }, text: { fa: "استقلال رسمی از شوروی در ۱۸ اکتبر.", en: "Sovereignty restored following Soviet collapse." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "armenia",
    name: { fa: "ارمنستان", en: "Armenia" },
    flag: ["#D90012", "#0033A0", "#F2A800"],
    founded: -190,
    foundedNote: {
      fa: "قدمت پادشاهی ارمنستان از سال ۱۹۰ پیش از میلاد و حکومت دودمان آرتاشسی حساب می‌شود؛ ارمنستان در سال ۳۰۱ میلادی نخستین کشوری شد که مسیحیت را دین رسمی اعلام کرد.",
      en: "Counted from 190 BCE under the Artaxiad dynasty; became the first nation to adopt Christianity in 301 CE."
    },
    summary: {
      fa: "نخستین کشور مسیحی جهان در دامنه‌های کوه آرارات با صومعه‌های سنگی باستانی و خط ۳۶ حرفی مشتوک.",
      en: "First Christian nation in the shadow of Mount Ararat, rich in medieval monasteries."
    },
    facts: {
      capital: { fa: "ایروان", en: "Yerevan" },
      language: { fa: "ارمنی", en: "Armenian" },
      population: { fa: "حدود ۳ میلیون نفر", en: "About 3 million" }
    },
    overview: {
      fa: [
        "ارمنستان در فلات قفقاز جنوبی، با تمدن باستانی اورارتو و ابداع خط ارمنی به دست مسروپ ماشتوتس در سال ۴۰۵ میلادی، میراث فرهنگی ممتازی دارد."
      ],
      en: [
        "With roots in ancient Urartu and the Kingdom of Greater Armenia under Tigranes the Great, Armenia preserves UNESCO rock monasteries."
      ]
    },
    timeline: [
      { year: 301, title: { fa: "پذیرش رسمی مسیحیت", en: "Christianity Adopted" }, text: { fa: "تیرداد سوم مسیحیت را آیین رسمی کشور اعلام کرد.", en: "Armenia became the first Christian state." } },
      { year: 405, title: { fa: "ابداع الفبای ارمنی", en: "Creation of the Alphabet" }, text: { fa: "مسروپ ماشتوتس خط ارمنی را پدید آورد.", en: "Mesrop Mashtots created Armenian script." } },
      { year: 1991, title: { fa: "استقلال جمهوری ارمنستان", en: "Independence" }, text: { fa: "استقلال رسمی در ۲۱ سپتامبر.", en: "Independence from the Soviet Union." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "georgia",
    name: { fa: "گرجستان", en: "Georgia" },
    flag: ["#FFFFFF"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='white'/><path d='M0 10h30M15 0v20' stroke='%23FF0000' stroke-width='4'/></svg>",
    founded: -302,
    foundedNote: {
      fa: "قدمت گرجستان از سال ۳۰۲ پیش از میلاد و پادشاهی ایبریا به رهبری فارناواز اول حساب می‌شود؛ گرجستان در سال ۳۲۶ مسیحی شد.",
      en: "Counted from 302 BCE under King Pharnavaz I of Iberia; adopted Christianity in 326 CE."
    },
    summary: {
      fa: "زادگاه هشت‌هزارساله‌ی شراب در دامنه‌های قفقاز، خط منحصربه‌فرد باستانی و دوران طلایی ملکه تامار.",
      en: "8,000-year cradle of winemaking in the Caucasus, unique alphabet, and Queen Tamar's golden age."
    },
    facts: {
      capital: { fa: "تفلیس", en: "Tbilisi" },
      language: { fa: "گرجی", en: "Georgian" },
      population: { fa: "حدود ۳٫۷ میلیون نفر", en: "About 3.7 million" }
    },
    overview: {
      fa: [
        "گرجستان در دامنه‌های قفقاز جنوبی، با میراث کهن شراب‌سازی در خمره‌های سفالی (کوری)، خط گرجی و سرودهای پلی‌فونیک مشهور است."
      ],
      en: [
        "Bridging Black Sea waters and Caucasus heights, Georgia flourished during the medieval Golden Age under David the Builder and Queen Tamar."
      ]
    },
    timeline: [
      { year: 326, title: { fa: "مسیحی‌شدن گرجستان", en: "Christianity in Iberia" }, text: { fa: "سنت نینو ایبریا را به مسیحیت رهنمون ساخت.", en: "Saint Nino converted the kingdom." } },
      { year: 1184, title: { fa: "عصر طلایی ملکه تامار", en: "Golden Age of Queen Tamar" }, text: { fa: "اوج شکوفایی سیاسی، ادبی و معماری گرجستان.", en: "Peak of Georgian medieval Renaissance." } },
      { year: 1991, title: { fa: "استقلال گرجستان", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۹ آوریل.", en: "Independence restored from the USSR." } }
    ],
    added: "2026-10-10"
  }
];
