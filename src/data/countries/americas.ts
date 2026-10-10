import { Country } from '../../types';

export const AMERICAS_COUNTRIES: Country[] = [
  {
    id: "brazil",
    name: { fa: "برزیل", en: "Brazil" },
    flag: ["#009C3B"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 14'><rect width='20' height='14' fill='%23009C3B'/><path d='M1.7 7 10 1.2 18.3 7 10 12.8z' fill='%23FFDF00'/><circle cx='10' cy='7' r='3.5' fill='%23002776'/></svg>",
    founded: 1822,
    foundedNote: {
      fa: "قدمت برزیل در این سایت از سال ۱۸۲۲ میلادی با اعلام استقلال شاهزاده پدرو کنار رود ایپیرانگا در ۷ سپتامبر حساب می‌شود.",
      en: "On this site Brazil’s age is counted from 1822, the year Prince Pedro declared independence from Portugal on 7 September."
    },
    summary: {
      fa: "بزرگ‌ترین کشور آمریکای جنوبی؛ پهنه‌ی جنگل‌های آمازون، سامبا، کارناوال ریو و سرزمین فوتبال.",
      en: "South America's giant, home to the Amazon rainforest, samba, Rio carnival, and football."
    },
    facts: {
      capital: { fa: "برازیلیا", en: "Brasília" },
      language: { fa: "پرتغالی", en: "Portuguese" },
      population: { fa: "حدود ۲۰۳ میلیون نفر", en: "About 203 million" }
    },
    overview: {
      fa: [
        "برزیل با رودخانه‌ی آمازون و تنوع زیستی شگفت‌انگیز، از پادشاهی بومیان و استعمار پرتغال تا امپراتوری قرن نوزدهم و جمهوری مدرن تحول یافته است."
      ],
      en: [
        "Encompassing 60% of the Amazon rainforest, Brazil bridges Indigenous, African, and European legacies into a vibrant continental power."
      ]
    },
    timeline: [
      { year: 1500, title: { fa: "رسیدن کابرال به برزیل", en: "Cabral's Arrival" }, text: { fa: "پدرو آلوارس کابرال برزیل را برای پرتغال ثبت کرد.", en: "Portuguese landed on Brazilian shores." } },
      { year: 1822, title: { fa: "اعلام استقلال برزیل", en: "Independence" }, text: { fa: "فریاد ایپیرانگا و استقلال پادشاهی برزیل.", en: "Prince Pedro declared independence on 7 September." } },
      { year: 1888, title: { fa: "قانون زرین", en: "Golden Law" }, text: { fa: "لغو کامل برده‌داری در برزیل.", en: "Complete abolition of slavery." } }
    ],
    added: "2026-10-09"
  },
  {
    id: "united-states",
    name: { fa: "ایالات متحده آمریکا", en: "United States" },
    flag: ["#B22234", "#FFFFFF"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19 10'><rect width='19' height='10' fill='%23B22234'/><path d='M0 1.5h19M0 3h19M0 4.6h19M0 6.1h19M0 7.7h19M0 9.2h19' stroke='white' stroke-width='.8'/><rect width='7.6' height='5.4' fill='%233C3B6E'/></svg>",
    founded: 1776,
    foundedNote: {
      fa: "قدمت ایالات متحده از ۴ ژوئیه ۱۷۷۶ با تصویب اعلامیه‌ی استقلال در فیلادلفیا حساب می‌شود.",
      en: "Counted from 4 July 1776 and the adoption of the Declaration of Independence in Philadelphia."
    },
    summary: {
      fa: "بزرگ‌ترین اقتصاد جهان؛ سرزمین آزادی‌های مدنی، هالیوود، دره سیلیکون و مأموریت‌های آپولو به ماه.",
      en: "Leading global economy and innovation center, founded on the 1776 Declaration of Independence."
    },
    facts: {
      capital: { fa: "واشینگتن دی‌سی", en: "Washington, D.C." },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۳۳۵ میلیون نفر", en: "About 335 million" }
    },
    overview: {
      fa: [
        "ایالات متحده با قانون اساسی ۱۷۸۷، نظامی فدرال مبتنی بر تفکیک قوا ایجاد کرد و از سیزده مستعمره اقیانوس اطلس به قدرتی جهانی میان دو اقیانوس بدل شد."
      ],
      en: [
        "From thirteen Atlantic colonies to a global technological powerhouse, the US pioneered modern constitutional democracy and space exploration."
      ]
    },
    timeline: [
      { year: 1776, title: { fa: "اعلامیه استقلال", en: "Declaration of Independence" }, text: { fa: "تصویب استقلال در ۴ ژوئیه در فیلادلفیا.", en: "Adopted in Philadelphia on 4 July." } },
      { year: 1787, title: { fa: "قانون اساسی ایالات متحده", en: "US Constitution" }, text: { fa: "تدوین کهن‌ترین قانون اساسی مدون فعال جهان.", en: "World's oldest active written constitution." } },
      { year: 1969, title: { fa: "فرود آپولو ۱۱ بر ماه", en: "Moon Landing" }, text: { fa: "نیل آرمسترانگ نخستین گام را بر کره ماه نهاد.", en: "First humans walked on the Moon." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "canada",
    name: { fa: "کانادا", en: "Canada" },
    flag: ["#FF0000", "#FFFFFF", "#FF0000"],
    flagDirection: "vertical",
    founded: 1867,
    foundedNote: {
      fa: "قدمت کنفدراسیون کانادا از اول ژوئیه ۱۸۶۷ با تصویب قانون بریتانیای آمریکای شمالی حساب می‌شود.",
      en: "Counted from 1 July 1867 with Confederation under the British North America Act."
    },
    summary: {
      fa: "دومین کشور پهناور جهان؛ سرزمین برگ افرا، دریاچه‌های نیلگون راکی و جامعه‌ی چندفرهنگی پیشرفته.",
      en: "World's second-largest country by area, famed for maple syrup, Rocky lakes, and pluralism."
    },
    facts: {
      capital: { fa: "اتاوا", en: "Ottawa" },
      language: { fa: "انگلیسی، فرانسوی", en: "English, French" },
      population: { fa: "حدود ۴۰ میلیون نفر", en: "About 40 million" }
    },
    overview: {
      fa: [
        "کانادا کشوری پهناور از اقیانوس اطلس تا آرام و منجمد شمالی است که با پیوند فرهنگ‌های بومی نخستین، انگلیسی و فرانسوی کبک جامعه‌ای امن و صلح‌آمیز پدید آورده است."
      ],
      en: [
        "Spanning six time zones from Atlantic to Pacific, Canada preserves majestic boreal wilderness and bilingual democratic institutions."
      ]
    },
    timeline: [
      { year: 1867, title: { fa: "کنفدراسیون کانادا", en: "Canadian Confederation" }, text: { fa: "تولد قلمرو کانادا در اول ژوئیه.", en: "Four provinces united under Confederation." } },
      { year: 1982, title: { fa: "قانون اساسی ۱۹۸۲", en: "Patriation of Constitution" }, text: { fa: "منشور حقوق و آزادی‌های کانادا تصویب شد.", en: "Charter of Rights and Freedoms enacted." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "mexico",
    name: { fa: "مکزیک", en: "Mexico" },
    flag: ["#006847", "#FFFFFF", "#CE1126"],
    flagDirection: "vertical",
    founded: 1810,
    foundedNote: {
      fa: "قدمت مکزیک از ۱۶ سپتامبر ۱۸۱۰ با ندای دولورس (Grito de Dolores) به رهبری کشیش میگل ایدالگو حساب می‌شود؛ تمدن‌های مایا و آزتک هزاران سال پیشینه‌اند.",
      en: "Independence movement launched on 16 September 1810 by Miguel Hidalgo; ancient Maya and Aztec civilizations date back millennia."
    },
    summary: {
      fa: "مهد اهرام چیچن ایتزا و تئوتیهواکان، تمدن‌های آزتک و مایا، نقاشی‌های فریدا کالو و غذای ثبت جهانی یونسکو.",
      en: "Cradle of Aztec and Maya pyramids, vibrant Day of the Dead traditions, and Frida Kahlo."
    },
    facts: {
      capital: { fa: "مکزیکوسیتی", en: "Mexico City" },
      language: { fa: "اسپانیایی (همراه با ۶۸ زبان بومی)", en: "Spanish (plus 68 indigenous languages)" },
      population: { fa: "حدود ۱۲۹ میلیون نفر", en: "About 129 million" }
    },
    overview: {
      fa: [
        "مکزیک با ویرانه‌های باشکوه هرم خورشید، شهرهای استعماری باروک و غذاهای اصیل باستانی، یکی از غنی‌ترین گنجینه‌های فرهنگی قاره آمریکاست."
      ],
      en: [
        "Built atop ancient Tenochtitlan, Mexico preserves Mayan astronomical pyramids and a world-renowned culinary culture."
      ]
    },
    timeline: [
      { year: 1325, title: { fa: "بنیان‌گذاری تنوچتیتلان", en: "Founding of Tenochtitlan" }, text: { fa: "آزتک‌ها پایتخت افسانه‌ای خود را در دریاچه تکسکوکو بنا نهادند.", en: "Aztec capital established on Lake Texcoco." } },
      { year: 1810, title: { fa: "فریاد دولورس (استقلال)", en: "Grito de Dolores" }, text: { fa: "میگل ایدالگو قیام استقلال علیه اسپانیا را آغاز کرد.", en: "Call to arms for Mexican freedom." } },
      { year: 1821, title: { fa: "پیروزی استقلال مکزیک", en: "Independence Consummated" }, text: { fa: "پایان سه قرن سلطه استعماری اسپانیا.", en: "Treaty of Córdoba recognized independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "argentina",
    name: { fa: "آرژانتین", en: "Argentina" },
    flag: ["#74ACDF", "#FFFFFF", "#74ACDF"],
    founded: 1816,
    foundedNote: {
      fa: "قدمت استقلال آرژانتین از ۹ ژوئیه ۱۸۱۶ با صدور اعلامیه‌ی استقلال استان‌های متحد در توکومان حساب می‌شود.",
      en: "Independence declared on 9 July 1816 at the Congress of Tucumán."
    },
    summary: {
      fa: "سرزمین تانگوی پرشور بوینس‌آیرس، دشت‌های پامپاس، یخچال‌های طبیعی پاتاگونیا و فوتبال افسانه‌ای مارادونا و مسی.",
      en: "Land of passionate tango, Patagonian glaciers, Gaucho plains, and football legend."
    },
    facts: {
      capital: { fa: "بوئنوس آیرس", en: "Buenos Aires" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۴۶ میلیون نفر", en: "About 46 million" }
    },
    overview: {
      fa: [
        "آرژانتین از سواحل رود لاپلاتا تا قله‌های آکونکاگوا در آند و یخسارهای پریتو مورنو، دومین کشور پهناور آمریکای جنوبی است."
      ],
      en: [
        "Stretching from Iguazu Falls to the tip of Tierra del Fuego, Argentina produced literary master Borges and football icons."
      ]
    },
    timeline: [
      { year: 1816, title: { fa: "اعلام استقلال در توکومان", en: "Declaration of Independence" }, text: { fa: "استقلال رسمی استان‌های متحد ریو د لا پلاتا.", en: "Independence declared from Spain on 9 July." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "colombia",
    name: { fa: "کلمبیا", en: "Colombia" },
    flag: ["#FCD116", "#003893", "#CE1126"],
    founded: 1810,
    foundedNote: {
      fa: "قدمت استقلال کلمبیا از ۲۰ ژوئیه ۱۸۱۰ در بوگوتا حساب می‌شود؛ نبرد بویاکا در ۱۸۱۹ پیروزی نهایی را رقم زد.",
      en: "Independence proclaimed on 20 July 1810; finalized by Simón Bolívar at the Battle of Boyacá in 1819."
    },
    summary: {
      fa: "دروازه‌ی آمریکای جنوبی با دو ساحل اقیانوسی، بهترین قهوه‌ی ملایم عربیکا، زادگاه گابریل گارسیا مارکز.",
      en: "Gateway to South America with Pacific and Caribbean coasts, premier coffee, and García Márquez."
    },
    facts: {
      capital: { fa: "بوگوتا", en: "Bogota" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۵۲ میلیون نفر", en: "About 52 million" }
    },
    overview: {
      fa: [
        "کلمبیا با تنوع زیستی شگفت‌انگیز در کوه‌های آند و سواحل کارائیب کارتاخنا، کانون جنبش آزادی‌بخش سیمون بولیوار در آمریکای جنوبی بود."
      ],
      en: [
        "Boasting second-highest biodiversity on Earth and vibrant Cartagena, Colombia honors Bolívar's liberation campaign."
      ]
    },
    timeline: [
      { year: 1810, title: { fa: "آغاز استقلال کلمبیا", en: "First Cry of Independence" }, text: { fa: "شورای خودگردان در بوگوتا در ۲۰ ژوئیه تشکیل شد.", en: "Junta established in Bogota." } },
      { year: 1819, title: { fa: "نبرد بویاکا", en: "Battle of Boyacá" }, text: { fa: "پیروزی سیمون بولیوار و تأسیس کلمبیای بزرگ.", en: "Bolívar secured independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "peru",
    name: { fa: "پرو", en: "Peru" },
    flag: ["#D91023", "#FFFFFF", "#D91023"],
    flagDirection: "vertical",
    founded: 1821,
    foundedNote: {
      fa: "قدمت پرو از ۲۸ ژوئیه ۱۸۲۱ با اعلام استقلال به دست خوزه د سن مارتین حساب می‌شود؛ امپراتوری کهن اینکا در ۱۴۳۸ در کوسکو به اوج رسید.",
      en: "Independence proclaimed on 28 July 1821 by José de San Martín; Inca imperial golden age dates to 1438."
    },
    summary: {
      fa: "پایتخت افسانه‌ای امپراتوری اینکا در کوسکو، ارگ اسرارآمیز ماچو پیچو در ابرها و خطوط باستانی نازکا.",
      en: "Cradle of the Inca Empire, majestic cloud city Machu Picchu, and Nazca Lines."
    },
    facts: {
      capital: { fa: "لیما", en: "Lima" },
      language: { fa: "اسپانیایی، کچوا، آیمارا", en: "Spanish, Quechua, Aymara" },
      population: { fa: "حدود ۳۴ میلیون نفر", en: "About 34 million" }
    },
    overview: {
      fa: [
        "پرو مهد یکی از شش تمدن مادر تاریخ (کارال) و امپراتوری فراگیر اینکاها با جاده‌های سنگی آندی و عجایب معماری ماچو پیچو است."
      ],
      en: [
        "From Caral (oldest civilization in the Americas) to Machu Picchu, Peru preserves breathtaking Andean metallurgy, textiles, and cuisine."
      ]
    },
    timeline: [
      { year: 1438, title: { fa: "آغاز امپراتوری اینکا", en: "Inca Empire Expansion" }, text: { fa: "پاچاکوتی امپراتوری تاهوانتین‌سویو را پی‌ریخت.", en: "Pachacuti expanded Inca dominion." } },
      { year: 1821, title: { fa: "استقلال پرو", en: "Independence of Peru" }, text: { fa: "سن مارتین در ۲۸ ژوئیه در لیما استقلال را اعلام کرد.", en: "San Martín proclaimed freedom in Lima." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "chile",
    name: { fa: "شیلی", en: "Chile" },
    flag: ["#0039A6", "#FFFFFF", "#D52B1E"],
    founded: 1810,
    foundedNote: {
      fa: "قدمت شیلی از ۱۸ سپتامبر ۱۸۱۰ و تشکیل نخستین انجمن دولتی خودگردان در سانتیاگو حساب می‌شود؛ استقلال در ۱۸۱۸ با نبرد مایپو تثبیت شد.",
      en: "First National Government Junta on 18 September 1810; formal independence oath taken in 1818 under O'Higgins."
    },
    summary: {
      fa: "بلندترین کشور باریک جهان میان کوهستان سرکش آند و اقیانوس آرام، کویر آتاکاما و جزیره ایستر.",
      en: "Long ribbon between the Andes and Pacific, home to the Atacama Desert, Easter Island, and Neruda."
    },
    facts: {
      capital: { fa: "سانتیاگو", en: "Santiago" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۱۹٫۵ میلیون نفر", en: "About 19.5 million" }
    },
    overview: {
      fa: [
        "شیلی با بیش از ۴۳۰۰ کیلومتر طول، از خشک‌ترین کویر جهان (آتاکاما) تا آبدره‌های یخچالی پاتاگونیا و تندیس‌های موآی جزیره ایستر گسترده است."
      ],
      en: [
        "World capital of astronomical observation in the Atacama, Chile is the homeland of Nobel laureates Gabriela Mistral and Pablo Neruda."
      ]
    },
    timeline: [
      { year: 1810, title: { fa: "نخستین انجمن خودگردان ملی", en: "First National Junta" }, text: { fa: "آغاز راه استقلال در ۱۸ سپتامبر.", en: "Birth of self-government." } },
      { year: 1818, title: { fa: "اعلام استقلال شیلی", en: "Independence Proclaimed" }, text: { fa: "برناردو اوهیگینز استقلال را تثبیت کرد.", en: "O'Higgins led decisive victory at Maipú." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "venezuela",
    name: { fa: "ونزوئلا", en: "Venezuela" },
    flag: ["#FCE300", "#0038A8", "#CE1126"],
    founded: 1811,
    foundedNote: {
      fa: "قدمت ونزوئلا از ۵ ژوئیه ۱۸۱۱ با صدور اعلامیه‌ی استقلال از اسپانیا حساب می‌شود؛ زادگاه سیمون بولیوار «رهایی‌بخش».",
      en: "Independence declared on 5 July 1811; birthplace of South American Liberator Simón Bolívar."
    },
    summary: {
      fa: "زادگاه سیمون بولیوار، آبشار آنجل بلندترین آبشار جهان و بزرگ‌ترین ذخایر اثبات‌شده‌ی نفت خام جهان.",
      en: "Home of Angel Falls (tallest in the world), world's largest oil reserves, and Lake Maracaibo."
    },
    facts: {
      capital: { fa: "کاراکاس", en: "Caracas" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۲۹ میلیون نفر", en: "About 29 million" }
    },
    overview: {
      fa: [
        "ونزوئلا در ساحل کارائیب با فلات‌های صخره‌ای تپوئی و آبشار افسانه‌ای آنجل، خاستگاه مبارزات رهایی‌بخش قاره آمریکای جنوبی به رهبری سیمون بولیوار بود."
      ],
      en: [
        "Featuring ancient tabletop tepuis in Canaima National Park, Venezuela sparked liberation across South America."
      ]
    },
    timeline: [
      { year: 1811, title: { fa: "اعلام استقلال ونزوئلا", en: "Independence Declared" }, text: { fa: "نخستین کشور آمریکای اسپانیایی که رسماً استقلال یافت.", en: "Declaration signed on 5 July." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "cuba",
    name: { fa: "کوبا", en: "Cuba" },
    flag: ["#002590", "#FFFFFF"],
    founded: 1902,
    foundedNote: {
      fa: "قدمت استقلال جمهوری کوبا از ۲۰ مه ۱۹۰۲ پس از جنگ‌های استقلال به رهبری خوزه مارتی حساب می‌شود.",
      en: "Formal independence achieved on 20 May 1902 following liberation wars inspired by José Martí."
    },
    summary: {
      fa: "بزرگ‌ترین جزیره کارائیب با خودروهای کلاسیک هاوانا، موسیقی پرشور سالسا و تاریخ انقلابی برجسته.",
      en: "Largest Caribbean island, famed for vintage cars, Havana architecture, and vibrant music."
    },
    facts: {
      capital: { fa: "هاوانا", en: "Havana" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۱۱ میلیون نفر", en: "About 11 million" }
    },
    overview: {
      fa: [
        "کوبا با معماری باشکوه باروک اسپانیایی در هاوانای قدیم، مزارع نیشکر و تنباکو و پیشگامی در پزشکی و ورزش، نگین دریای کارائیب است."
      ],
      en: [
        "Famed for Son Cubano rhythms, cigars, and healthcare advances, Cuba played a pivotal role in 20th-century geopolitical history."
      ]
    },
    timeline: [
      { year: 1902, title: { fa: "استقلال رسمی کوبا", en: "Independence" }, text: { fa: "پایان اشغال موقت آمریکا و تولد جمهوری.", en: "Republic inaugurated in Havana." } },
      { year: 1959, title: { fa: "پیروزی انقلاب کوبا", en: "Cuban Revolution" }, text: { fa: "فیدل کاسترو و چه‌گوارا حکومت جدید را برپا کردند.", en: "Fidel Castro entered Havana." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "ecuador",
    name: { fa: "اکوادور", en: "Ecuador" },
    flag: ["#FFDD00", "#034EA2", "#ED1C24"],
    founded: 1809,
    foundedNote: {
      fa: "قدمت اکوادور از ۱۰ اوت ۱۸۰۹ و نخستین فریاد استقلال در کیتو («نور آمریکای لاتین») حساب می‌شود.",
      en: "Counted from 10 August 1809 and the 'First Cry of Independence' in Quito."
    },
    summary: {
      fa: "کشور خط استوا، مهد تکاملی جزایر گالاپاگوس چارلز داروین و آتشفشان باشکوه کوتوپاکسی.",
      en: "Crossed by the Equator, home to the Galápagos evolutionary sanctuary and historic Quito."
    },
    facts: {
      capital: { fa: "کیتو", en: "Quito" },
      language: { fa: "اسپانیایی، کچوا", en: "Spanish, Kichwa" },
      population: { fa: "حدود ۱۸ میلیون نفر", en: "About 18 million" }
    },
    overview: {
      fa: [
        "اکوادور با پایتخت مرتفع کیتو (نخستین شهر ثبت‌شده در یونسکو) و مجمع‌الجزایر زیستی گالاپاگوس، چکیده‌ای از چهار اقلیم شگفت‌انگیز جهان است."
      ],
      en: [
        "Boasting four distinct worlds (Galápagos, Coast, Andes, Amazon), Ecuador inspired Darwin's theory of evolution."
      ]
    },
    timeline: [
      { year: 1809, title: { fa: "نخستین فریاد استقلال", en: "First Cry of Independence" }, text: { fa: "کیتو پرچم‌دار آزادی در آمریکای جنوبی شد.", en: "Quito declared self-rule on 10 August." } },
      { year: 1822, title: { fa: "نبرد پیچینچا", en: "Battle of Pichincha" }, text: { fa: "آنتونیو خوزه د سوکره آزادی کیتو را تثبیت کرد.", en: "Sucre won definitive independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "bolivia",
    name: { fa: "بولیوی", en: "Bolivia" },
    flag: ["#D52B1E", "#F9E300", "#007934"],
    founded: 1825,
    foundedNote: {
      fa: "قدمت استقلال بولیوی از ۶ اوت ۱۸۲۵ حساب می‌شود و کشور به افتخار رهایی‌بخش قاره، سیمون بولیوار، نام‌گذاری شد.",
      en: "Independence proclaimed on 6 August 1825, named in honor of the Liberator Simón Bolívar."
    },
    summary: {
      fa: "بزرگ‌ترین کویر نمک آینه‌ای جهان در سالار د اویونی، دریاچه‌ی مقدس تیتیکاکا و فرهنگ ریشه‌دار آیمارا.",
      en: "High Andean wonderland featuring the world's largest salt mirror Salar de Uyuni and Lake Titicaca."
    },
    facts: {
      capital: { fa: "سوکرِه (قانون اساسی)، لاپاز (مقر دولت)", en: "Sucre (La Paz)" },
      language: { fa: "اسپانیایی، کچوا، آیمارا (۳۷ زبان رسمی)", en: "Spanish, Quechua, Aymara" },
      population: { fa: "حدود ۱۲ میلیون نفر", en: "About 12 million" }
    },
    overview: {
      fa: [
        "بولیوی در فلات مرتفع آلتی‌پلانو با تمدن کهن تیواناکو، دریاچه تیتیکاکا و کویر بی‌پایان نمک، قلب تپنده‌ی فرهنگ بومیان آمریکای جنوبی است."
      ],
      en: [
        "Rooted in Tiwanaku ruins and rich silver heritage at Potosí, Bolivia is renowned for cultural indigenous preservation."
      ]
    },
    timeline: [
      { year: 1825, title: { fa: "اعلام استقلال بولیوی", en: "Independence" }, text: { fa: "مجمع استقلال در سوکره به نام بولیوار تشکیل شد.", en: "Independence declared on 6 August." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "paraguay",
    name: { fa: "پاراگوئه", en: "Paraguay" },
    flag: ["#D52B1E", "#FFFFFF", "#0038A8"],
    founded: 1811,
    foundedNote: {
      fa: "قدمت استقلال پاراگوئه از ۱۴ و ۱۵ مه ۱۸۱۱ با سرنگونی فرماندار اسپانیایی در آسونسیون حساب می‌شود.",
      en: "Independence achieved on 14–15 May 1811 through peaceful overthrow of Spanish rule in Asunción."
    },
    summary: {
      fa: "قلب آمریکای جنوبی، فرهنگ دوزبانه‌ی زبان بومی گوارانی و سد برق‌آبی عظیم ایتایپو.",
      en: "Heart of South America, unique bilingual Guarani culture, and Itaipu Dam engineering."
    },
    facts: {
      capital: { fa: "آسونسیون", en: "Asuncion" },
      language: { fa: "گوارانی، اسپانیایی", en: "Guarani, Spanish" },
      population: { fa: "حدود ۶٫۸ میلیون نفر", en: "About 6.8 million" }
    },
    overview: {
      fa: [
        "پاراگوئه تنها کشور قاره است که در آن زبان بومی گوارانی توسط اکثریت مردم در کنار اسپانیایی صحبت می‌شود و دارای حیات وحش غنی چاکو است."
      ],
      en: [
        "Flanked by the Paraguay and Paraná rivers, Paraguay is globally unique in retaining an indigenous tongue as national language."
      ]
    },
    timeline: [
      { year: 1811, title: { fa: "انقلاب مه و استقلال", en: "Independence" }, text: { fa: "آسونسیون بدون خونریزی مستقل شد.", en: "Independence won in Asunción." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "uruguay",
    name: { fa: "اروگوئه", en: "Uruguay" },
    flag: ["#FFFFFF"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 18'><rect width='27' height='18' fill='white'/><path d='M0 2h27M0 6h27M0 10h27M0 14h27' stroke='%230038A8' stroke-width='2'/><circle cx='5' cy='5' r='3' fill='%23FCD116'/></svg>",
    founded: 1825,
    foundedNote: {
      fa: "قدمت استقلال اروگوئه از ۲۵ اوت ۱۸۲۵ به رهبری «سی و سه شرقی» (Treinta y Tres Orientales) حساب می‌شود.",
      en: "Independence proclaimed on 25 August 1825 by the Thirty-Three Orientals under Juan Antonio Lavalleja."
    },
    summary: {
      fa: "پیشتاز دموکراسی و شاخص‌های مدنی در آمریکای لاتین، سواحل پونتا دل استه و قهرمان نخستین جام جهانی ۱۹۳۰.",
      en: "Beacon of progressive democracy, Atlantic resort beaches, and host of the first World Cup in 1930."
    },
    facts: {
      capital: { fa: "مونته‌ویدئو", en: "Montevideo" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۳٫۴ میلیون نفر", en: "About 3.4 million" }
    },
    overview: {
      fa: [
        "اروگوئه در کرانه‌ی شمالی رود ریو د لا پلاتا با جامعه‌ای آرام، دموکراسی ریشه‌دار و رفاه اجتماعی بالا، سوئیس آمریکای لاتین نامیده می‌شود."
      ],
      en: [
        "Ranked highest in Latin America for democracy and peacefulness, Uruguay hosted and won the inaugural 1930 FIFA World Cup."
      ]
    },
    timeline: [
      { year: 1825, title: { fa: "اعلامیه استقلال ۲۵ اوت", en: "Declaration of Independence" }, text: { fa: "سی و سه شرقی استقلال را اعلام کردند.", en: "Declaration of freedom from Brazil and Portugal." } },
      { year: 1930, title: { fa: "نخستین جام جهانی فوتبال", en: "First FIFA World Cup" }, text: { fa: "اروگوئه در ورزشگاه سنتناریو قهرمان جهان شد.", en: "Uruguay won inaugural World Cup." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "haiti",
    name: { fa: "هائیتی", en: "Haiti" },
    flag: ["#00209F", "#D21034"],
    founded: 1804,
    foundedNote: {
      fa: "قدمت استقلال هائیتی از اول ژانویه ۱۸۰۴ حساب می‌شود؛ نخستین کشور مستقل آمریکای لاتین و کارائیب و تنها قیام پیروزمندانه بردگان در تاریخ بشر.",
      en: "Independence declared on 1 January 1804; first independent nation of Latin America and only successful slave revolt in history."
    },
    summary: {
      fa: "نخستین جمهوری سیاه‌پوستان جهان، حماسه‌ی توسان لوورتور، دژ تاریخی لافریر و هنر پرشور هائیتیایی.",
      en: "World's first black republic, born from the triumph of the Haitian Revolution under Toussaint Louverture."
    },
    facts: {
      capital: { fa: "پورتو پرنس", en: "Port-au-Prince" },
      language: { fa: "کریول هائیتیایی، فرانسوی", en: "Haitian Creole, French" },
      population: { fa: "حدود ۱۱٫۵ میلیون نفر", en: "About 11.5 million" }
    },
    overview: {
      fa: [
        "هائیتی در بخش غربی جزیره هیسپانیولا با شکست ارتش ناپلئون در ۱۸۰۳ و اعلام استقلال در ۱۸۰۴، نقطه عطفی در تاریخ مبارزات ضدبرده‌داری رقم زد."
      ],
      en: [
        "Overthrowing colonial slavery at the Battle of Vertières, Haiti declared independence on New Year's Day 1804."
      ]
    },
    timeline: [
      { year: 1804, title: { fa: "استقلال جمهوری هائیتی", en: "Independence" }, text: { fa: "ژان ژاک دسالین تولد نخستین جمهوری آزاد سیاه را اعلام کرد.", en: "Jean-Jacques Dessalines declared freedom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "dominican-republic",
    name: { fa: "جمهوری دومینیکن", en: "Dominican Republic" },
    flag: ["#002F6C", "#CE1126"],
    founded: 1844,
    foundedNote: {
      fa: "قدمت جمهوری دومینیکن از ۲۷ فوریه ۱۸۴۴ با رهبری خوان پابلو دوارته و گروه ترینیتریا حساب می‌شود.",
      en: "Independence achieved on 27 February 1844 led by Juan Pablo Duarte."
    },
    summary: {
      fa: "نخستین شهر دنیای نو در سانتو دومینگو، سواحل سفید پونتا کانا و موسیقی پرانرژی مرنگه و باچاتا.",
      en: "Home to Santo Domingo's first New World cathedral, Punta Cana beaches, and merengue."
    },
    facts: {
      capital: { fa: "سانتو دومینگو", en: "Santo Domingo" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۱۱٫۲ میلیون نفر", en: "About 11.2 million" }
    },
    overview: {
      fa: [
        "جمهوری دومینیکن در شرق جزیره هیسپانیولا میزبان کهن‌ترین کلیسای جامع، قلعه و دانشگاه قاره آمریکاست که توسط اروپاییان بنا شد."
      ],
      en: [
        "Santo Domingo's Colonial Zone was the first European settlement in the Americas, pioneering baseball and bachata."
      ]
    },
    timeline: [
      { year: 1844, title: { fa: "استقلال دومینیکن", en: "Independence" }, text: { fa: "اعلام استقلال در دروازه کنت در ۲۷ فوریه.", en: "Duarte established the sovereign republic." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "guatemala",
    name: { fa: "گواتمالا", en: "Guatemala" },
    flag: ["#4997D0", "#FFFFFF", "#4997D0"],
    flagDirection: "vertical",
    founded: 1821,
    foundedNote: {
      fa: "قدمت استقلال گواتمالا از ۱۵ سپتامبر ۱۸۲۱ حساب می‌شود؛ شهرهای اهرام تمدن مایا در تیکال به ۲۰۰۰ پیش از میلاد می‌رسد.",
      en: "Independence declared on 15 September 1821; classical Mayan cities like Tikal date back millennia."
    },
    summary: {
      fa: "قلب کهن تمدن مایا، اهرام جنگلی تیکال، دریاچه‌ی رویایی آتیتلان و شهر استعماری آنتیگوآ.",
      en: "Heart of the Maya world, famed for jungle temples of Tikal and volcanic Lake Atitlán."
    },
    facts: {
      capital: { fa: "گواتمالاسیتی", en: "Guatemala City" },
      language: { fa: "اسپانیایی (همراه با ۲۲ زبان مایایی)", en: "Spanish (plus 22 Mayan tongues)" },
      population: { fa: "حدود ۱۸ میلیون نفر", en: "About 18 million" }
    },
    overview: {
      fa: [
        "گواتمالا در آمریکای مرکزی با نگهداری لباس‌های سنتی بافتنی، اهرام سربه‌فلک‌کشیده‌ی تیکال و آتشفشان‌های فعال، گنجینه فرهنگ مایاست."
      ],
      en: [
        "Home to Popol Vuh sacred texts, Guatemala preserves thriving indigenous Maya communities across scenic volcanic highlands."
      ]
    },
    timeline: [
      { year: 1821, title: { fa: "استقلال آمریکای مرکزی", en: "Independence" }, text: { fa: "امضای بیانیه استقلال در گواتمالاسیتی در ۱۵ سپتامبر.", en: "Independence from Spain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "panama",
    name: { fa: "پاناما", en: "Panama" },
    flag: ["#FFFFFF"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='white'/><rect x='15' width='15' height='10' fill='%23DA121A'/><rect y='10' width='15' height='10' fill='%23072357'/></svg>",
    founded: 1903,
    foundedNote: {
      fa: "قدمت استقلال پاناما از ۳ نوامبر ۱۹۰۳ با جدایی از کلمبیا حساب می‌شود؛ پل ارتباطی خشکی قاره‌ها از سده شانزدهم کانون عبور کالا بوده است.",
      en: "Separation from Colombia achieved on 3 November 1903; Isthmus has connected oceanic trade since the 16th century."
    },
    summary: {
      fa: "شاهکار مهندسی کانال پاناما که دو اقیانوس آرام و اطلس را به هم پیوند می‌دهد و کانون بانکداری بین‌المللی.",
      en: "Bridge of the Americas, joining the Atlantic and Pacific via the marvel of the Panama Canal."
    },
    facts: {
      capital: { fa: "پاناماسیتی", en: "Panama City" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۴٫۴ میلیون نفر", en: "About 4.4 million" }
    },
    overview: {
      fa: [
        "باریکه‌ی خاکی پاناما پیونددهنده‌ی دو قاره آمریکای شمالی و جنوبی است و کانال ۸۲ کیلومتری آن شاهرگ حیاتی تجارت دریایی جهان به‌شمار می‌رود."
      ],
      en: [
        "Connecting two oceans through the Panama Canal, Panama is a global maritime crossroads and ecological corridor."
      ]
    },
    timeline: [
      { year: 1903, title: { fa: "جدایی پاناما از کلمبیا", en: "Independence" }, text: { fa: "استقلال رسمی پاناما در ۳ نوامبر.", en: "Sovereignty established on 3 November." } },
      { year: 1914, title: { fa: "افتتاح کانال پاناما", en: "Canal Opening" }, text: { fa: "گشایش آبراه اتصال دو اقیانوس.", en: "First ship crossed the canal on 15 August." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "costa-rica",
    name: { fa: "کاستاریکا", en: "Costa Rica" },
    flag: ["#002B7F", "#FFFFFF", "#CE1126", "#FFFFFF", "#002B7F"],
    founded: 1821,
    foundedNote: {
      fa: "قدمت استقلال کاستاریکا از ۱۵ سپتامبر ۱۸۲۱ حساب می‌شود؛ این کشور در ۱۹۴۸ ارتش خود را منحل کرد و کانون صلح و محیط زیست شد.",
      en: "Independence gained on 15 September 1821; abolished its military in 1948 to invest in health and education."
    },
    summary: {
      fa: "پایتخت بوم‌گردی جهان با شعار پوراویدا (زندگی ناب)، بدون ارتش، با بالاترین تنوع زیستی در هر کیلومتر مربع.",
      en: "Pura Vida green democracy, military-free since 1948, holding 5% of global biodiversity."
    },
    facts: {
      capital: { fa: "سان خوزه", en: "San Jose" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۵٫۲ میلیون نفر", en: "About 5.2 million" }
    },
    overview: {
      fa: [
        "کاستاریکا با جنگل‌های ابری مونته‌ورده و انرژی‌های ۱۰۰ درصد تجدیدپذیر، با لغو دائمی ارتش در ۱۹۴۸، الگوی پیشرو صلح و حفظ کره‌ی زمین است."
      ],
      en: [
        "Running almost entirely on renewable energy, Costa Rica champions eco-tourism, reforestation, and Nobel peace diplomacy."
      ]
    },
    timeline: [
      { year: 1821, title: { fa: "استقلال کاستاریکا", en: "Independence" }, text: { fa: "استقلال از امپراتوری اسپانیا.", en: "Independence from Spain." } },
      { year: 1948, title: { fa: "انحلال ارتش", en: "Abolition of the Military" }, text: { fa: "خوزه فیگورس فرر ارتش را منحل و بودجه را وقف آموزش کرد.", en: "Army abolished by Figueres Ferrer." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "jamaica",
    name: { fa: "جامائیکا", en: "Jamaica" },
    flag: ["#009B3A", "#FED100", "#000000"],
    founded: 1962,
    foundedNote: {
      fa: "قدمت استقلال جامائیکا از ۶ اوت ۱۹۶۲ با پایان حکومت بریتانیا حساب می‌شود.",
      en: "Independence achieved on 6 August 1962 from the United Kingdom."
    },
    summary: {
      fa: "مهد موسیقی رگی، باب مارلی، دوندگان تیزپای تاریخ در کینگستون و سواحل نیلگون مونتگوبی.",
      en: "Birthplace of reggae and Bob Marley, sprinting legends, and Blue Mountain coffee."
    },
    facts: {
      capital: { fa: "کینگستون", en: "Kingston" },
      language: { fa: "انگلیسی، پاتوا (پاتوای جامائیکایی)", en: "English, Jamaican Patois" },
      population: { fa: "حدود ۲٫۸ میلیون نفر", en: "About 2.8 million" }
    },
    overview: {
      fa: [
        "جامائیکا با صادرات قهوه کوهستان آبی، ریتم‌های جهانی موسیقی رگی و ثبت رکوردهای دوی سرعت توسط یوسین بولت، کشوری شگفت‌انگیز در کارائیب است."
      ],
      en: [
        "Influencing global music, fashion, and athletics, Jamaica is a cultural giant in the Caribbean basin."
      ]
    },
    timeline: [
      { year: 1962, title: { fa: "استقلال جامائیکا", en: "Independence" }, text: { fa: "پرچم سه رنگ جامائیکا در ۶ اوت برافراشته شد.", en: "First English-speaking Caribbean island to gain independence." } }
    ],
    added: "2026-10-10"
  }
];
