import { Country } from '../../types';

export const AFRICA_COUNTRIES: Country[] = [
  {
    id: "egypt",
    name: { fa: "مصر", en: "Egypt" },
    flag: ["#CE1126", "#FFFFFF", "#000000"],
    founded: -3100,
    foundedNote: {
      fa: "قدمت تمدن مصر در این سایت از سال ۳۱۰۰ پیش از میلاد با یکپارچه‌سازی مصر علیا و سفلی به دست نارمر (منس) نخستین فرعون سلسله اول حساب می‌شود.",
      en: "Counted from c. 3100 BCE with the unification of Upper and Lower Egypt by King Narmer (Menes)."
    },
    summary: {
      fa: "هدیه‌ی ابدی رود نیل؛ اهرام سه‌گانه جیزه، ابوالهول، فراعنه باستان و دانشگاه تاریخی الازهر در قاهره.",
      en: "Gift of the Nile, home to the Great Pyramids of Giza, the Sphinx, and five millennia of history."
    },
    facts: {
      capital: { fa: "قاهره", en: "Cairo" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۱۱۰ میلیون نفر", en: "About 110 million" }
    },
    overview: {
      fa: [
        "مصر باستان با خط هیروگلیف، معماری غول‌پیکر اهرام و پادشاهی‌های کهن، میانه و نوین، ستون تمدن بشری است. در دوران اسلامی قاهره به کانون فرهنگ و بازرگانی جهان عرب بدل شد."
      ],
      en: [
        "Flourishing along the Nile, ancient Egypt engineered the pyramids and temples of Luxor, later becoming the intellectual heart of the Arab world in Cairo."
      ]
    },
    timeline: [
      { year: -3100, title: { fa: "اتحاد دو مصر به دست نارمر", en: "Unification by Narmer" }, text: { fa: "پایه‌ریزی سلسله نخست فراعنه.", en: "Narmer united Upper and Lower Egypt." } },
      { year: -2560, title: { fa: "ساخت هرم بزرگ جیزه", en: "Great Pyramid Built" }, text: { fa: "آرامگاه فرعون خوفو در جیزه برپا شد.", en: "Khufu's pyramid completed." } },
      { year: 1952, title: { fa: "انقلاب ۱۹۵۲ مصر", en: "Egyptian Revolution" }, text: { fa: "پایان پادشاهی و برپایی جمهوری به رهبری ناصر.", en: "Establishment of the republic." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "ethiopia",
    name: { fa: "اتیوپی", en: "Ethiopia" },
    flag: ["#009A44", "#FED100", "#EF3340"],
    founded: 980,
    foundedNote: {
      fa: "قدمت اتیوپی از پادشاهی دمت (حدود ۹۸۰ پ.م.) و امپراتوری آکسوم حساب می‌شود؛ تنها کشور بزرگ آفریقایی که هرگز مستعمره نشد.",
      en: "Counted from the Kingdom of D'mt c. 980 BCE and the Aksumite Empire; never colonized by foreign powers."
    },
    summary: {
      fa: "خاستگاه باستانی بشر در شاخ آفریقا، کلیساهای یکپارچه‌سنگی لالی‌بلا و پادشاهی باستانی آکسوم.",
      en: "Ancient Highland kingdom, cradle of coffee and humanity, famous for Lalibela rock churches."
    },
    facts: {
      capital: { fa: "آدیس آبابا", en: "Addis Ababa" },
      language: { fa: "امهری", en: "Amharic" },
      population: { fa: "حدود ۱۲۶ میلیون نفر", en: "About 126 million" }
    },
    overview: {
      fa: [
        "اتیوپی زادگاه قهوه و انسان‌تباران کهن (لوسی)، با خط باستانی گعز و استقلال شکست‌ناپذیر در نبرد آدوا (۱۸۹۶)، نماد آزادی قاره آفریقاست."
      ],
      en: [
        "Home to the rock-hewn monolithic churches of Lalibela, Ethiopia defeated colonial Italy at the Battle of Adwa in 1896."
      ]
    },
    timeline: [
      { year: 100, title: { fa: "امپراتوری آکسوم", en: "Kingdom of Aksum" }, text: { fa: "مرکز تجاری قدرتمند میان روم و هند.", en: "Major trading power on the Red Sea." } },
      { year: 1896, title: { fa: "نبرد آدوا", en: "Battle of Adwa" }, text: { fa: "پیروزی قاطع امپراتور منلیک دوم بر نیروهای متجاوز ایتالیا.", en: "Defeat of colonial invaders secured independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "south-africa",
    name: { fa: "آفریقای جنوبی", en: "South Africa" },
    flag: ["#007749", "#001489", "#E03C31", "#FFB81C"],
    founded: 1910,
    foundedNote: {
      fa: "قدمت اتحادیه آفریقای جنوبی از ۳۱ مه ۱۹۱۰ حساب می‌شود؛ در سال ۱۹۹۴ با انتخابات دموکراتیک و ریاست‌جمهوری نلسون ماندلا، ملت رنگین‌کمان متولد شد.",
      en: "Union of South Africa formed on 31 May 1910; non-racial democracy established under Nelson Mandela in 1994."
    },
    summary: {
      fa: "ملت رنگین‌کمان، سرزمین نلسون ماندلا، کوه تیبل کیپ‌تاون و حیات وحش بی‌نظیر پارک کروگر.",
      en: "Rainbow Nation at the continent's southern tip, famed for Nelson Mandela and biodiversity."
    },
    facts: {
      capital: { fa: "پرتوریا (اجرایی)، کیپ‌تاون (قانون‌گذاری)، بلومفونتین (قضایی)", en: "Pretoria, Cape Town, Bloemfontein" },
      language: { fa: "زولو، خوسا، آفریکانس، انگلیسی (و ۸ زبان رسمی دیگر)", en: "Zulu, Xhosa, Afrikaans, English (plus 8)" },
      population: { fa: "حدود ۶۲ میلیون نفر", en: "About 62 million" }
    },
    overview: {
      fa: [
        "آفریقای جنوبی با تنوع ۱۲ زبان رسمی و مناظر کوهستان تیبل و دماغه امید نیک، الگوی جهانی گذار مسالمت‌آمیز از آپارتاید به دموکراسی است."
      ],
      en: [
        "Featuring the Cape of Good Hope, South Africa triumphed over apartheid through truth and reconciliation to build a multiracial democracy."
      ]
    },
    timeline: [
      { year: 1910, title: { fa: "تأسیس اتحادیه آفریقای جنوبی", en: "Union of South Africa" }, text: { fa: "یکپارچه‌سازی مستعمرات چهارگانه دماغه و ناتال.", en: "Consolidation of four colonies." } },
      { year: 1994, title: { fa: "پایان آپارتاید و انتخابات آزاد", en: "End of Apartheid" }, text: { fa: "نلسون ماندلا نخستین رئیس‌جمهور سیاه‌پوست شد.", en: "Nelson Mandela elected president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "morocco",
    name: { fa: "مراکش", en: "Morocco" },
    flag: ["#C1272D"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='%23C1272D'/><polygon points='15,6 16.5,10.5 21,10.5 17.5,13.5 19,18 15,15 11,18 12.5,13.5 9,10.5 13.5,10.5' fill='none' stroke='%23006233' stroke-width='1.2'/></svg>",
    founded: 789,
    foundedNote: {
      fa: "قدمت کشور مراکش از سال ۷۸۹ میلادی و تأسیس دودمان ادریسیان به دست ادریس اول در شهر تاریخی فاس حساب می‌شود.",
      en: "Counted from 789 CE when Idris I founded the Idrisid dynasty at Fez."
    },
    summary: {
      fa: "پادشاهی کهن دروازه جبل‌الطارق؛ شهرهای تاریخی فاس و مراکش، بازارهای سنتی و قله‌های اطلس.",
      en: "Historic kingdom at the gates of Gibraltar, celebrated for Fez, Marrakesh, and the Atlas peaks."
    },
    facts: {
      capital: { fa: "رباط", en: "Rabat" },
      language: { fa: "عربی، آمازیغی (بربر)", en: "Arabic, Berber" },
      population: { fa: "حدود ۳۷ میلیون نفر", en: "About 37 million" }
    },
    overview: {
      fa: [
        "مراکش با دانشگاه قرویین در فاس (کهن‌ترین دانشگاه فعال جهان)، شاهکارهای معماری مرابطان و موحدان و بازارهای ادویه، شاهکار تمدن مغرب عربی است."
      ],
      en: [
        "Home to the world's oldest existing university (Al-Qarawiyyin in Fez), Morocco bridges Saharan trade routes and Mediterranean culture."
      ]
    },
    timeline: [
      { year: 789, title: { fa: "تأسیس دودمان ادریسیان", en: "Idrisid Dynasty Founded" }, text: { fa: "ادریس اول شهر فاس را پایه‌گذاری کرد.", en: "Idris I established the kingdom at Fez." } },
      { year: 1956, title: { fa: "استقلال مراکش", en: "Independence of Morocco" }, text: { fa: "پایان الحمایگی فرانسه و اسپانیا به رهبری محمد پنجم.", en: "Independence secured by Mohammed V." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "algeria",
    name: { fa: "الجزایر", en: "Algeria" },
    flag: ["#006233", "#FFFFFF"],
    flagDirection: "vertical",
    founded: 1962,
    foundedNote: {
      fa: "قدمت استقلال الجزایر نوین از ۵ ژوئیه ۱۹۶۲ پس از جنگ خونین آزادی‌بخش با فرانسه حساب می‌شود؛ پادشاهی نومیدیا به ۲۰۲ پیش از میلاد می‌رسد.",
      en: "Independence won on 5 July 1962 after an epic war of liberation; ancient Numidian kingdom dates to 202 BCE."
    },
    summary: {
      fa: "پهناورترین کشور قاره آفریقا؛ تپه‌های شنی صحرای بزرگ، آثار باستانی رومی تپازه و قهرمان مبارزه با استعمار.",
      en: "Africa's largest nation by area, vast Sahara dunes, and Roman ruins of Timgad and Tipasa."
    },
    facts: {
      capital: { fa: "الجزیره", en: "Algiers" },
      language: { fa: "عربی، تمازیغت", en: "Arabic, Tamazight" },
      population: { fa: "حدود ۴۵ میلیون نفر", en: "About 45 million" }
    },
    overview: {
      fa: [
        "الجزایر با میراث تمدنی کهن ماسینیسا در نومیدیا و مقاومت سرسختانه‌ی یک و نیم میلیون شهید در جنگ استقلال، نماد استواری در شمال آفریقاست."
      ],
      en: [
        "Spanning Mediterranean hills and the vast Grand Erg of the Sahara, Algeria won sovereignty through monumental anti-colonial sacrifice."
      ]
    },
    timeline: [
      { year: -202, title: { fa: "پادشاهی نومیدیا", en: "Kingdom of Numidia" }, text: { fa: "ماسینیسا قبایل بربر نومیدیا را متحد کرد.", en: "Massinissa unified the Numidian tribes." } },
      { year: 1962, title: { fa: "استقلال الجزایر", en: "Algerian Independence" }, text: { fa: "پایان ۱۳۲ سال سلطه‌ی استعماری فرانسه.", en: "Independence after eight years of war." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "tunisia",
    name: { fa: "تونس", en: "Tunisia" },
    flag: ["#E70013"],
    founded: 1956,
    foundedNote: {
      fa: "قدمت استقلال تونس از ۲۰ مارس ۱۹۵۶ حساب می‌شود؛ کارتاژ باستان به رهبری هانیبال در ۸۱۴ پیش از میلاد بنا نهاده شد.",
      en: "Independence achieved on 20 March 1956; ancient Phoenician Carthage was founded in 814 BCE."
    },
    summary: {
      fa: "خاستگاه امپراتوری بازرگانی کارتاژ، هانیبال باستان، مساجد باشکوه قیروان و مبدأ بهار عربی.",
      en: "Homeland of ancient Carthage and Hannibal, blue-and-white Sidi Bou Said on the Mediterranean."
    },
    facts: {
      capital: { fa: "تونس", en: "Tunis" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۱۲ میلیون نفر", en: "About 12 million" }
    },
    overview: {
      fa: [
        "تونس جایی است که تمدن کارتاژ رقیب سرسخت روم باستان بود و شهر اسلامی قیروان پایگاه گسترش دانش در مغرب اسلامی شد."
      ],
      en: [
        "From Hannibal's campaigns to the Grand Mosque of Kairouan, Tunisia preserves deep Mediterranean and Islamic history."
      ]
    },
    timeline: [
      { year: -814, title: { fa: "بنیان‌گذاری کارتاژ", en: "Founding of Carthage" }, text: { fa: "فنیقی‌ها بندر تجاری کارتاژ را پی‌ریختند.", en: "Phoenicians founded Queen Dido's city." } },
      { year: 1956, title: { fa: "استقلال تونس", en: "Independence" }, text: { fa: "حبیب بورقیبه استقلال را به دست آورد.", en: "Independence under Habib Bourguiba." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "libya",
    name: { fa: "لیبی", en: "Libya" },
    flag: ["#E70013", "#000000", "#239E46"],
    founded: 1951,
    foundedNote: {
      fa: "قدمت استقلال کشور لیبی از ۲۴ دسامبر ۱۹۵۱ به رهبری ملک ادریس اول پس از دوران استعمار ایتالیا حساب می‌شود.",
      en: "Declared an independent kingdom on 24 December 1951 under King Idris."
    },
    summary: {
      fa: "سرزمین بنادر باستانی رومی لِپتیس مگنا، صحرای بی‌کران و سواحل طولانی مدیترانه‌ای.",
      en: "Home to colossal Roman ruins of Leptis Magna, vast oil reserves, and Sahara expanses."
    },
    facts: {
      capital: { fa: "طرابلس", en: "Tripoli" },
      language: { fa: "عربی", en: "Arabic" },
      population: { fa: "حدود ۷ میلیون نفر", en: "About 7 million" }
    },
    overview: {
      fa: [
        "لیبی در شمال آفریقا با شهرهای باستانی لپتیس مگنا و صبراته و واحات کویری قدافس، از دیرباز چهارراه کاروان‌های صحرانورد بوده است."
      ],
      en: [
        "Hosting exceptionally preserved Roman cities on the Mediterranean and ancient desert rock art in the Acacus Mountains."
      ]
    },
    timeline: [
      { year: 1951, title: { fa: "استقلال لیبی", en: "Libyan Independence" }, text: { fa: "پادشاهی مشروطه به رهبری ملک ادریس اعلام شد.", en: "United Kingdom of Libya established." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "sudan",
    name: { fa: "سودان", en: "Sudan" },
    flag: ["#D21034", "#FFFFFF", "#000000"],
    founded: 1956,
    foundedNote: {
      fa: "قدمت استقلال سودان از اول ژانویه ۱۹۵۶ حساب می‌شود؛ پادشاهی کوش و اهرام مروئه به ۱۰۷۰ پیش از میلاد بازمی‌گردد.",
      en: "Independence gained on 1 January 1956; ancient Kingdom of Kush and Nubian pyramids date to 1070 BCE."
    },
    summary: {
      fa: "سرزمین اهرام نوبیا در مروئه و تلاقی نیل نیلگون و نیل سپید در خارطوم.",
      en: "Land of the Black Pharaohs of Kush, featuring more pyramids in Meroë than Egypt."
    },
    facts: {
      capital: { fa: "خارطوم", en: "Khartoum" },
      language: { fa: "عربی، انگلیسی", en: "Arabic, English" },
      population: { fa: "حدود ۴۸ میلیون نفر", en: "About 48 million" }
    },
    overview: {
      fa: [
        "سودان زادگاه پادشاهی کهن کوش است که فراعنه سیاه آن در سده هشتم پیش از میلاد بر مصر نیز فرمان راندند و اهرام مروئه گواه آنند."
      ],
      en: [
        "Kushite pharaohs ruled both Nubia and Egypt during the 25th Dynasty, leaving hundreds of steep-sided pyramids at Meroë."
      ]
    },
    timeline: [
      { year: -750, title: { fa: "سلسله بیست و پنجم فراعنه کوش", en: "25th Dynasty of Egypt" }, text: { fa: "پادشاهان کوش مصر و سودان را متحد کردند.", en: "Kushite pharaohs ruled from Napata." } },
      { year: 1956, title: { fa: "استقلال سودان", en: "Independence" }, text: { fa: "پایان حاکمیت مشترک بریتانیا و مصر.", en: "End of Anglo-Egyptian condominium." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "south-sudan",
    name: { fa: "سودان جنوبی", en: "South Sudan" },
    flag: ["#000000", "#DA121A", "#078930"],
    founded: 2011,
    foundedNote: {
      fa: "قدمت سودان جنوبی از ۹ ژوئیه ۲۰۱۱ به‌عنوان جدیدترین کشور دارای حاکمیت در جهان حساب می‌شود.",
      en: "Became the world's newest sovereign nation on 9 July 2011 following a decisive independence referendum."
    },
    summary: {
      fa: "جوان‌ترین کشور جهان، باتلاق‌های عظیم سود در حوضه نیل و زیستگاه اقوام سنتی دینکا و نوئر.",
      en: "World's youngest sovereign country, rich in Sudd wetland biodiversity along the White Nile."
    },
    facts: {
      capital: { fa: "جوبا", en: "Juba" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۱۱ میلیون نفر", en: "About 11 million" }
    },
    overview: {
      fa: [
        "سودان جنوبی پس از دهه‌ها مبارزه در سال ۲۰۱۱ با رأی قاطع مردم به استقلال رسید و غنی از منابع نفت و تنوع فرهنگی در آفریقای شرقی است."
      ],
      en: [
        "Gaining independence in 2011, South Sudan encompasses the vast Sudd swamps, one of the world's largest freshwater wetlands."
      ]
    },
    timeline: [
      { year: 2011, title: { fa: "استقلال سودان جنوبی", en: "Independence of South Sudan" }, text: { fa: "تولد ۱۹۳مین کشور عضو سازمان ملل در ۹ ژوئیه.", en: "Independence proclaimed on 9 July." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "nigeria",
    name: { fa: "نیجریه", en: "Nigeria" },
    flag: ["#008751", "#FFFFFF", "#008751"],
    flagDirection: "vertical",
    founded: 1960,
    foundedNote: {
      fa: "قدمت نیجریه از اول اکتبر ۱۹۶۰ با استقلال از بریتانیا حساب می‌شود؛ تمدن تندیس‌های سفالین نوک به ۱۰۰۰ پیش از میلاد می‌رسد.",
      en: "Independence gained on 1 October 1960 from Britain; the ancient Nok terracotta culture dates to 1000 BCE."
    },
    summary: {
      fa: "غول آفریقا؛ پرجمعیت‌ترین کشور قاره با صنعت سینمای نالیوود، تمدن کهن نوک و پویایی لاگوس.",
      en: "Giant of Africa, most populous nation on the continent, leading in Nollywood and tech."
    },
    facts: {
      capital: { fa: "آبوجا", en: "Abuja" },
      language: { fa: "انگلیسی (همراه با هاوسا، یوروبا و ایگبو)", en: "English, Hausa, Yoruba, Igbo" },
      population: { fa: "حدود ۲۲۵ میلیون نفر", en: "About 225 million" }
    },
    overview: {
      fa: [
        "نیجریه با بیش از ۲۵۰ گروه قومی، تمدن‌های باستانی ایف و بنین، و اقتصاد نفتی و هنری بزرگ‌ترین موتور محرک اقتصادی غرب آفریقاست."
      ],
      en: [
        "Celebrated for the bronze sculptures of Benin and Ife, Nigeria is Africa's largest demographic and cultural titan."
      ]
    },
    timeline: [
      { year: -500, title: { fa: "تمدن نوک", en: "Nok Culture" }, text: { fa: "ساخت مجسمه‌های سفالین و متالورژی آهن.", en: "Pioneering terracotta and iron-smelting." } },
      { year: 1960, title: { fa: "استقلال نیجریه", en: "Independence of Nigeria" }, text: { fa: "اعلام استقلال رسمی در اول اکتبر.", en: "Independence from the United Kingdom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "kenya",
    name: { fa: "کنیا", en: "Kenya" },
    flag: ["#000000", "#BB162B", "#006600"],
    founded: 1963,
    foundedNote: {
      fa: "قدمت استقلال کنیا از ۱۲ دسامبر ۱۹۶۳ با رهبری جومو کنیاتا پس از جنبش مائو مائو حساب می‌شود.",
      en: "Independence achieved on 12 December 1963 under Jomo Kenyatta."
    },
    summary: {
      fa: "پایتخت سافاری جهان، مهاجرت عظیم حیات وحش در ماسای مارا، دره ریفت و دوندگان اسطوره‌ای ماراتن.",
      en: "Safari heartland of the Great Rift Valley, Maasai Mara wildlife migration, and Mount Kenya."
    },
    facts: {
      capital: { fa: "نایروبی", en: "Nairobi" },
      language: { fa: "سواحیلی، انگلیسی", en: "Swahili, English" },
      population: { fa: "حدود ۵۵ میلیون نفر", en: "About 55 million" }
    },
    overview: {
      fa: [
        "کنیا نگین شرق آفریقا، مهد اکوتوریسم، مرکز شرکت‌های فناوری آفریقا (سیلیکون ساوانا) و خاستگاه کشف قدیمی‌ترین فسیل‌های انسان در تورکانا است."
      ],
      en: [
        "Home to Lake Turkana human origin sites and Nairobi's tech hub, Kenya is world-famous for athletics and national parks."
      ]
    },
    timeline: [
      { year: 1963, title: { fa: "استقلال کنیا (جمهوری)", en: "Kenyan Independence" }, text: { fa: "پایان حکومت استعماری در ۱۲ دسامبر.", en: "Jomo Kenyatta sworn in as leader." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "ghana",
    name: { fa: "غنا", en: "Ghana" },
    flag: ["#CF0921", "#FCD20E", "#006B3F"],
    founded: 1957,
    foundedNote: {
      fa: "قدمت غنا از ۶ مارس ۱۹۵۷ با رهبری قوام نکرومه به‌عنوان نخستین کشور زیر صحرای آفریقا که به استقلال رسید حساب می‌شود؛ امپراتوری غنا به سده چهارم میلادی بازمی‌گردد.",
      en: "First sub-Saharan nation to achieve independence on 6 March 1957 under Kwame Nkrumah."
    },
    summary: {
      fa: "ستاره درخشان سیاه آفریقا؛ پیشگام پان‌آفریقانیسم، پادشاهی طلا و کتل آشاتی و قلعه‌های تاریخی ساحل کیپ.",
      en: "The Black Star of Africa, pioneer of pan-African independence, famed for Ashanti gold and cocoa."
    },
    facts: {
      capital: { fa: "آکرا", en: "Accra" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۳۴ میلیون نفر", en: "About 34 million" }
    },
    overview: {
      fa: [
        "غنا (ساحل طلای پیشین) با پادشاهی پرشکوه آشانتی و رهبری الهام‌بخش قوام نکرومه، مشعل‌دار استقلال و دموکراسی در سراسر قاره آفریقا شد."
      ],
      en: [
        "Rich in gold and cocoa, Ghana led the African independence movement under Nkrumah and established an enduring democratic model."
      ]
    },
    timeline: [
      { year: 1701, title: { fa: "امپراتوری آشانتی", en: "Ashanti Empire" }, text: { fa: "اوسی توتو تاج زرین طلایی را پی‌ریخت.", en: "Golden Stool unified the Ashanti." } },
      { year: 1957, title: { fa: "استقلال غنا", en: "Independence" }, text: { fa: "نخستین کشور مستقل جنوب صحرا در ۶ مارس.", en: "Kwame Nkrumah proclaimed freedom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "mali",
    name: { fa: "مالی", en: "Mali" },
    flag: ["#14B53A", "#FCD116", "#CE1126"],
    flagDirection: "vertical",
    founded: 1235,
    foundedNote: {
      fa: "قدمت امپراتوری مالی از سال ۱۲۳۵ میلادی با پیروزی سوندیاتا کیتا در نبرد کرینا و صدور منشور حقوق کوروکان فوگا حساب می‌شود.",
      en: "Counted from 1235 CE when Sundiata Keita founded the Mali Empire and proclaimed the Kouroukan Fouga charter."
    },
    summary: {
      fa: "سرزمین مساجد شگفت‌انگیز گلی در جنه، کانون کهن کتابخانه‌های خطی تمبوکتو و امپراتوری مانسا موسی.",
      en: "Land of mud-brick Djenne mosque, legendary Timbuktu manuscripts, and Mansa Musa."
    },
    facts: {
      capital: { fa: "باماکو", en: "Bamako" },
      language: { fa: "بامبارا (و ۱۲ زبان ملی دیگر)", en: "Bambara (plus 12 national)" },
      population: { fa: "حدود ۲۳ میلیون نفر", en: "About 23 million" }
    },
    overview: {
      fa: [
        "امپراتوری مالی در سده چهاردهم با پادشاهی مانسا موسی ثروتمندترین امپراتوری جهان در تجارت طلا بود و تمبوکتو کانون دانشگاهی و فقهی آفریقا شد."
      ],
      en: [
        "Home to the ancient universities of Timbuktu and the Niger River bend, Mali generated monumental West African scholarship and music."
      ]
    },
    timeline: [
      { year: 1235, title: { fa: "نبرد کرینا و امپراتوری مالی", en: "Battle of Kirina" }, text: { fa: "سوندیاتا کیتا امپراتوری مالی را پی‌ریخت.", en: "Sundiata Keita established the empire." } },
      { year: 1324, title: { fa: "سفر حج مانسا موسی", en: "Mansa Musa's Hajj" }, text: { fa: "ثروتمندترین پادشاه تاریخ طلای مالی را به جهان شناساند.", en: "Pilgrimage displayed Mali's immense gold." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "senegal",
    name: { fa: "سنگال", en: "Senegal" },
    flag: ["#00853F", "#FDEF42", "#E31B23"],
    flagDirection: "vertical",
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال سنگال از ۴ آوریل ۱۹۶۰ با رهبری شاعر و فیلسوف لئوپولد سدار سنگور حساب می‌شود.",
      en: "Independence gained on 4 April 1960 led by poet-statesman Léopold Sédar Senghor."
    },
    summary: {
      fa: "دروازه‌ی اقیانوس اطلس در غرب آفریقا، جزیره تاریخی گوره، فرهنگ مهمان‌نوازی «ترانگا» و موسیقی سنگالی.",
      en: "Westernmost African nation, famed for Gorée Island, Teranga hospitality, and Senghor."
    },
    facts: {
      capital: { fa: "داکار", en: "Dakar" },
      language: { fa: "فرانسوی، ولوف", en: "French, Wolof" },
      population: { fa: "حدود ۱۸ میلیون نفر", en: "About 18 million" }
    },
    overview: {
      fa: [
        "سنگال با ثبات سیاسی دیرپا در غرب آفریقا و پایتخت بین‌المللی داکار، پایتخت هنر و ادبیات فرانسوی‌زبان آفریقا شناخته می‌شود."
      ],
      en: [
        "Renowned for peaceful democracy and UNESCO-listed Gorée Island, Senegal is a beacon of West African culture."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال سنگال", en: "Independence" }, text: { fa: "سنگور نخستین رئیس‌جمهور کشور شد.", en: "Léopold Sédar Senghor became president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "democratic-republic-of-the-congo",
    name: { fa: "جمهوری دموکراتیک کنگو", en: "Democratic Republic of the Congo" },
    flag: ["#007FFF"],
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال جمهوری دموکراتیک کنگو از ۳۰ ژوئن ۱۹۶۰ با پایان استعمار بلژیک به دست پاتریس لومومبا حساب می‌شود؛ پادشاهی کنگو در ۱۳۹۰ تأسیس شد.",
      en: "Independence gained on 30 June 1960 from Belgium; historic Kingdom of Kongo dates to 1390."
    },
    summary: {
      fa: "قلب حوضه جنگل‌های بارانی کنگو، غنی‌ترین گنجینه‌ی مواد معدنی جهان و زیستگاه گوریل‌های کوهی.",
      en: "Immense Congo Basin rainforest, mineral wealth of Katanga, and Virunga mountain gorillas."
    },
    facts: {
      capital: { fa: "کینشاسا", en: "Kinshasa" },
      language: { fa: "فرانسوی (همراه با لینگالا و سواحیلی)", en: "French, Lingala, Swahili" },
      population: { fa: "حدود ۱۰۲ میلیون نفر", en: "About 102 million" }
    },
    overview: {
      fa: [
        "جمهوری دموکراتیک کنگو دومین کشور پهناور آفریقاست که با رود عظیم کنگو و غنی‌ترین معادن کبالت و مس نقشی کلیدی در آینده فناوری جهان دارد."
      ],
      en: [
        "Featuring the mighty Congo River and the Virunga National Park, the DRC holds essential mineral resources for global green transition."
      ]
    },
    timeline: [
      { year: 1390, title: { fa: "پادشاهی کنگو", en: "Kingdom of Kongo" }, text: { fa: "تأسیس پادشاهی قدرتمند در حوضه رود کنگو.", en: "Lukeni lua Nimi founded the kingdom." } },
      { year: 1960, title: { fa: "استقلال کنگو", en: "Independence" }, text: { fa: "پاتریس لومومبا استقلال از بلژیک را اعلام کرد.", en: "Independence declared on 30 June." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "republic-of-the-congo",
    name: { fa: "جمهوری کنگو", en: "Republic of the Congo" },
    flag: ["#009543", "#FBDE4A", "#DC241F"],
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال جمهوری کنگو (برازاویل) از ۱۵ اوت ۱۹۶۰ از فرانسه حساب می‌شود.",
      en: "Independence gained on 15 August 1960 from France."
    },
    summary: {
      fa: "سرزمین جنگل‌های استوایی در کرانه‌ی راست رود کنگو، پایتخت برازاویل و بندر اقیانوسی پوانت نوار.",
      en: "Lush tropical forests along the right bank of the Congo River with capital Brazzaville."
    },
    facts: {
      capital: { fa: "برازاویل", en: "Brazzaville" },
      language: { fa: "فرانسوی، لینگالا", en: "French, Lingala" },
      population: { fa: "حدود ۶٫۱ میلیون نفر", en: "About 6.1 million" }
    },
    overview: {
      fa: [
        "جمهوری کنگو با رودخانه‌های پرآب و ذخایر جنگلی و نفتی، یکی از مراکز مهم اقتصادی و بندری در غرب آفریقای استوایی است."
      ],
      en: [
        "Brazzaville served as the symbolic capital of Free France under Charles de Gaulle during World War II."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال کنگو برازاویل", en: "Independence" }, text: { fa: "استقلال کامل از فرانسه در ۱۵ اوت.", en: "Full sovereignty achieved." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "tanzania",
    name: { fa: "تانزانیا", en: "Tanzania" },
    flag: ["#1EB53A", "#00A3DD"],
    founded: 1964,
    foundedNote: {
      fa: "قدمت جمهوری متحد تانزانیا از ۲۶ آوریل ۱۹۶۴ با اتحاد تانگانیکا و زنگبار به رهبری جولیوس نایرره حساب می‌شود.",
      en: "United on 26 April 1964 from the merger of Tanganyika and Zanzibar under Julius Nyerere."
    },
    summary: {
      fa: "سرزمین قله کلیمانجارو بلندترین نقطه آفریقا، دشت‌های سرنگتی و جزیره‌ی ادویه زنگبار.",
      en: "Home to Mount Kilimanjaro, the Serengeti plains, and the historic spice island of Zanzibar."
    },
    facts: {
      capital: { fa: "دودوما (دارالسلام اقتصادی)", en: "Dodoma (Dar es Salaam)" },
      language: { fa: "سواحیلی، انگلیسی", en: "Swahili, English" },
      population: { fa: "حدود ۶۷ میلیون نفر", en: "About 67 million" }
    },
    overview: {
      fa: [
        "تانزانیا با دهانه‌ی آتشفشانی انگورونگورو، جزیره‌ی شگفت‌انگیز زنگبار و دشت‌های سرنگتی، مهد حیات وحش و فرهنگ سواحیلی در شرق آفریقاست."
      ],
      en: [
        "Boasting Ngorongoro Crater and Zanzibar Stone Town, Tanzania is renowned for peaceful social cohesion and wildlife."
      ]
    },
    timeline: [
      { year: 1964, title: { fa: "اتحاد تانزانیا", en: "Union of Tanzania" }, text: { fa: "پیمان اتحاد تاریخی میان تانگانیکا و زنگبار.", en: "Nyerere formed the United Republic." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "uganda",
    name: { fa: "اوگاندا", en: "Uganda" },
    flag: ["#000000", "#FCDC04", "#D90000"],
    founded: 1962,
    foundedNote: {
      fa: "قدمت استقلال اوگاندا از ۹ اکتبر ۱۹۶۲ از بریتانیا حساب می‌شود؛ پادشاهی باستانی بوگاندا قرن‌ها پیشینه دارد.",
      en: "Independence achieved on 9 October 1962 from Britain; historic Kingdom of Buganda dates back centuries."
    },
    summary: {
      fa: "«مروارید آفریقا» در سرچشمه‌ی نیل، دریاچه‌ی ویکتوریا و کوه‌های افسانه‌ای روونزوری (کوه‌های ماه).",
      en: "The Pearl of Africa at the source of the Nile, famous for Lake Victoria and the Rwenzori peaks."
    },
    facts: {
      capital: { fa: "کامپالا", en: "Kampala" },
      language: { fa: "انگلیسی، سواحیلی", en: "English, Swahili" },
      population: { fa: "حدود ۴۹ میلیون نفر", en: "About 49 million" }
    },
    overview: {
      fa: [
        "اوگاندا که وینستون چرچیل آن را مروارید آفریقا نامید، در سرچشمه نیل سفید قرار دارد و پادشاهی بوگاندا قلب تپنده‌ی فرهنگ سنتی آن است."
      ],
      en: [
        "Featuring half the world's mountain gorillas in Bwindi Impenetrable Forest, Uganda offers remarkable equatorial biodiversity."
      ]
    },
    timeline: [
      { year: 1962, title: { fa: "استقلال اوگاندا", en: "Independence" }, text: { fa: "پایان حکومت بریتانیا در ۹ اکتبر.", en: "Independence declared from Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "rwanda",
    name: { fa: "رواندا", en: "Rwanda" },
    flag: ["#00A1DE", "#FAD201", "#20603D"],
    founded: 1962,
    foundedNote: {
      fa: "قدمت استقلال رواندا از اول ژوئیه ۱۹۶۲ حساب می‌شود؛ پادشاهی سنتی رواندا به سده یازدهم بازمی‌گردد.",
      en: "Independence gained on 1 July 1962; traditional Kingdom of Rwanda dates to the 11th century."
    },
    summary: {
      fa: "سرزمین هزار تپه، الگوی نوین پاکیزگی و توسعه در آفریقا و زیستگاه گوریل‌های نادر کوهستانی.",
      en: "Land of a Thousand Hills, inspiring model of rapid green modernization and mountain gorilla conservation."
    },
    facts: {
      capital: { fa: "کیگالی", en: "Kigali" },
      language: { fa: "کینیارواندا، فرانسوی، انگلیسی، سواحیلی", en: "Kinyarwanda, French, English, Swahili" },
      population: { fa: "حدود ۱۴ میلیون نفر", en: "About 14 million" }
    },
    overview: {
      fa: [
        "رواندا پس از فاجعه‌ی نسل‌کشی ۱۹۹۴، با آشتی ملی و مدیریت مدرن به یکی از پاک‌ترین، امن‌ترین و پیشرفته‌ترین اقتصادهای فناوری آفریقا بدل شد."
      ],
      en: [
        "Rising from tragic 1994 genocide, Rwanda engineered exceptional reconciliation, tech innovation, and environmental protection in Kigali."
      ]
    },
    timeline: [
      { year: 1962, title: { fa: "استقلال رواندا", en: "Independence" }, text: { fa: "پایان قیمومیت بلژیک.", en: "Independence from Belgian rule." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "angola",
    name: { fa: "آنگولا", en: "Angola" },
    flag: ["#CE1126", "#000000"],
    founded: 1975,
    foundedNote: {
      fa: "قدمت استقلال آنگولا از ۱۱ نوامبر ۱۹۷۵ پس از مبارزات آزادی‌بخش علیه استعمار پرتغال حساب می‌شود.",
      en: "Independence proclaimed on 11 November 1975 following liberation war against Portugal."
    },
    summary: {
      fa: "سرزمین ثروتمند نفت و الماس در اقیانوس اطلس جنوبی، آبشارهای کالاندولا و سواحل زیبای لواندا.",
      en: "Resource-rich southwestern African nation, home to Kalandula Falls and historic Luanda."
    },
    facts: {
      capital: { fa: "لواندا", en: "Luanda" },
      language: { fa: "پرتغالی", en: "Portuguese" },
      population: { fa: "حدود ۳۶ میلیون نفر", en: "About 36 million" }
    },
    overview: {
      fa: [
        "آنگولا دومین تولیدکننده‌ی بزرگ نفت در آفریقاست و با میراث ملکه نزینگا در مقاومت علیه استعمار پرتغال، هویتی پرافتخار دارد."
      ],
      en: [
        "Endowed with vast diamond and petroleum wealth, Angola honors the fierce 17th-century resistance of Queen Nzinga."
      ]
    },
    timeline: [
      { year: 1975, title: { fa: "استقلال آنگولا", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۱۱ نوامبر.", en: "Agostinho Neto proclaimed independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "mozambique",
    name: { fa: "موزامبیک", en: "Mozambique" },
    flag: ["#009639", "#000000", "#FFD100"],
    founded: 1975,
    foundedNote: {
      fa: "قدمت استقلال موزامبیک از ۲۵ ژوئن ۱۹۷۵ با رهبری سامورا ماچل و جبهه فرلیمو از پرتغال حساب می‌شود.",
      en: "Independence achieved on 25 June 1975 under Samora Machel."
    },
    summary: {
      fa: "کرانه‌های فیروزه‌ای کانال موزامبیک، مجمع‌الجزایر بازاروتو و جزیره‌ی تاریخی موزامبیک.",
      en: "Pristine Indian Ocean coastline, Bazaruto coral archipelago, and historic Ilha de Moçambique."
    },
    facts: {
      capital: { fa: "ماپوتو", en: "Maputo" },
      language: { fa: "پرتغالی", en: "Portuguese" },
      population: { fa: "حدود ۳۳ میلیون نفر", en: "About 33 million" }
    },
    overview: {
      fa: [
        "موزامبیک با بیش از ۲۵۰۰ کیلومتر خط ساحلی اقیانوس هند و جزیره‌ی میراث جهانی موزامبیک، قطب بازرگانی دریایی کهن بوده است."
      ],
      en: [
        "Historic Swahili and Portuguese port, Mozambique offers marine conservation sanctuaries and burgeoning gas reserves."
      ]
    },
    timeline: [
      { year: 1975, title: { fa: "استقلال موزامبیک", en: "Independence" }, text: { fa: "پایان پنج قرن استعمار پرتغال.", en: "FRELIMO took power in Maputo." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "zimbabwe",
    name: { fa: "زیمبابوه", en: "Zimbabwe" },
    flag: ["#006400", "#FFD200", "#D40000", "#000000"],
    founded: 1980,
    foundedNote: {
      fa: "قدمت استقلال زیمبابوه از ۱۸ آوریل ۱۹۸۰ حساب می‌شود؛ دیوارهای سنگی زیمبابوه بزرگ به سال ۱۱۰۰ میلادی برمی‌گردند.",
      en: "Independence recognized on 18 April 1980; stone citadel of Great Zimbabwe dates to 1100 CE."
    },
    summary: {
      fa: "سرزمین بناهای سنگی زیمبابوه بزرگ و آبشار خروشان ویکتوریا (مه خروشان) در رود زامبزی.",
      en: "Land of the medieval stone towers of Great Zimbabwe and colossal Victoria Falls."
    },
    facts: {
      capital: { fa: "هراره", en: "Harare" },
      language: { fa: "شونا، اندبله، انگلیسی (۱۶ زبان رسمی)", en: "Shona, Ndebele, English" },
      population: { fa: "حدود ۱۶ میلیون نفر", en: "About 16 million" }
    },
    overview: {
      fa: [
        "زیمبابوه نام خود را از قلعه‌های سنگی باستانی بدون ملاط «زیمبابوه بزرگ» گرفته و میزبان یکی از عجایب طبیعی جهان یعنی آبشار ویکتوریاست."
      ],
      en: [
        "Home to the medieval Shona civilization that constructed Great Zimbabwe, and the thunderous smoke of Victoria Falls."
      ]
    },
    timeline: [
      { year: 1100, title: { fa: "تمدن زیمبابوه بزرگ", en: "Great Zimbabwe" }, text: { fa: "ساخت بناهای یادبود سنگی عظیم.", en: "Flourishing of stone architecture and trade." } },
      { year: 1980, title: { fa: "استقلال زیمبابوه", en: "Independence of Zimbabwe" }, text: { fa: "پایان حکومت اقلیت و استقلال رسمی در ۱۸ آوریل.", en: "Internationally recognized independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "zambia",
    name: { fa: "زامبیا", en: "Zambia" },
    flag: ["#198A00"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 12'><rect width='18' height='12' fill='%23198A00'/><rect x='13' y='4' width='1.6' height='8' fill='%23DE2010'/><rect x='14.6' y='4' width='1.6' height='8' fill='black'/><rect x='16.2' y='4' width='1.6' height='8' fill='%23EF7D00'/></svg>",
    founded: 1964,
    foundedNote: {
      fa: "قدمت استقلال زامبیا از ۲۴ اکتبر ۱۹۶۴ با رهبری کنث کائوندا از بریتانیا حساب می‌شود.",
      en: "Independence gained on 24 October 1964 led by Kenneth Kaunda."
    },
    summary: {
      fa: "کمربند مس آفریقا، رود پهناور زامبزی و بخش شمالی آبشارهای دیدنی ویکتوریا.",
      en: "Copperbelt leader, home to the northern rim of Victoria Falls and South Luangwa safaris."
    },
    facts: {
      capital: { fa: "لوساکا", en: "Lusaka" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۲۰ میلیون نفر", en: "About 20 million" }
    },
    overview: {
      fa: [
        "زامبیا با صلح دیرپا در جنوب آفریقا و حیات وحش دره لوانگوا، یکی از پیشگامان استخراج مس و حفاظت از محیط زیست در آفریقاست."
      ],
      en: [
        "Endowed with premier copper deposits, Zambia has enjoyed decades of peaceful multiracial democracy."
      ]
    },
    timeline: [
      { year: 1964, title: { fa: "استقلال زامبیا", en: "Independence" }, text: { fa: "پایان رودزیای شمالی و تولد زامبیا در ۲۴ اکتبر.", en: "Kenneth Kaunda inaugurated president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "botswana",
    name: { fa: "بوتسوانا", en: "Botswana" },
    flag: ["#75AADB", "#FFFFFF", "#000000", "#FFFFFF", "#75AADB"],
    founded: 1966,
    foundedNote: {
      fa: "قدمت استقلال بوتسوانا از ۳۰ سپتامبر ۱۹۶۶ به رهبری سر سرتسه خاما حساب می‌شود.",
      en: "Independence achieved on 30 September 1966 under Sir Seretse Khama."
    },
    summary: {
      fa: "الگوی درخشان دموکراسی و حکمرانی خوب در آفریقا، دلتای بی‌نظیر اوکاوانگو و صحرای کالاهاری.",
      en: "Shining model of democratic governance and diamond prosperity, home to the Okavango Delta."
    },
    facts: {
      capital: { fa: "گابورون", en: "Gaborone" },
      language: { fa: "تسوانا، انگلیسی", en: "Tswana, English" },
      population: { fa: "حدود ۲٫۶ میلیون نفر", en: "About 2.6 million" }
    },
    overview: {
      fa: [
        "بوتسوانا با مدیریت شفاف منابع الماس و دلتای بکر درون‌سرزمینی اوکاوانگو، یکی از بالاترین نرخ‌های رشد و ثبات را در قاره ثبت کرده است."
      ],
      en: [
        "Pioneering sustainable diamond mining and eco-tourism, Botswana boasts unbroken multi-party democracy since 1966."
      ]
    },
    timeline: [
      { year: 1966, title: { fa: "استقلال بوتسوانا", en: "Independence of Botswana" }, text: { fa: "تولد جمهوری مستقل در ۳۰ سپتامبر.", en: "Seretse Khama elected first president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "namibia",
    name: { fa: "نامیبیا", en: "Namibia" },
    flag: ["#003580", "#D21034", "#009543"],
    founded: 1990,
    foundedNote: {
      fa: "قدمت استقلال نامیبیا از ۲۱ مارس ۱۹۹۰ با خروج نیروهای آفریقای جنوبی و تلاش‌های سام نوجوما حساب می‌شود.",
      en: "Independence achieved on 21 March 1990 under Sam Nujoma."
    },
    summary: {
      fa: "کهن‌ترین بیابان جهان در نامیب، تپه‌های شنی سرخ سوسوسولی و ساحل اسکلت در اقیانوس اطلس.",
      en: "Land of the ancient Namib Desert dunes, Sossusvlei, and dramatic Skeleton Coast."
    },
    facts: {
      capital: { fa: "ویندهوک", en: "Windhoek" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۲٫۶ میلیون نفر", en: "About 2.6 million" }
    },
    overview: {
      fa: [
        "نامیبیا با بیابان ۵۵ میلیون ساله‌ی نامیب، پارک ملی اتوشا و ذخایر عظیم اورانیوم و الماس، نخستین کشوری بود که محیط زیست را در قانون اساسی گنجاند."
      ],
      en: [
        "Featuring iconic red sand dunes, Namibia was the first African nation to incorporate environmental conservation into its constitution."
      ]
    },
    timeline: [
      { year: 1990, title: { fa: "استقلال نامیبیا", en: "Independence of Namibia" }, text: { fa: "پایان حکومت آپارتاید در ۲۱ مارس.", en: "Sam Nujoma inaugurated as president." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "cameroon",
    name: { fa: "کامرون", en: "Cameroon" },
    flag: ["#007A5E", "#CE1126", "#FCD116"],
    flagDirection: "vertical",
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال کامرون از اول ژانویه ۱۹۶۰ از فرانسه و سپس الحاق بخش بریتانیایی در ۱۹۶۱ حساب می‌شود.",
      en: "Independence achieved on 1 January 1960; unified with British Southern Cameroons in 1961."
    },
    summary: {
      fa: "«آفریقا در ابعاد کوچک»؛ تنوع اقلیمی از جنگل‌های بارانی تا سواحل آتشفشانی و کوهستان کامرون.",
      en: "Africa in miniature, capturing all the continent's climates, from beaches to Sahel."
    },
    facts: {
      capital: { fa: "یااونده", en: "Yaoundé" },
      language: { fa: "فرانسوی، انگلیسی", en: "French, English" },
      population: { fa: "حدود ۲۸ میلیون نفر", en: "About 28 million" }
    },
    overview: {
      fa: [
        "کامرون با داشتن بیش از ۲۵۰ زبان محلی و قله آتشفشانی کوه کامرون در خلیج گینه، گلچینی از طبیعت و فرهنگ قاره آفریقاست."
      ],
      en: [
        "Reflecting both francophone and anglophone traditions, Cameroon features Mount Cameroon and famed Indomitable Lions football."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال کامرون", en: "Independence" }, text: { fa: "تولد جمهوری مستقل کامرون.", en: "Independence from French mandate." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "cote-divoire",
    name: { fa: "ساحل عاج", en: "Côte d'Ivoire" },
    flag: ["#F77F00", "#FFFFFF", "#008751"],
    flagDirection: "vertical",
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال ساحل عاج از ۷ اوت ۱۹۶۰ با رهبری فلیکس هوفوئه-بوآنی از فرانسه حساب می‌شود.",
      en: "Independence gained on 7 August 1960 led by Félix Houphouët-Boigny."
    },
    summary: {
      fa: "بزرگ‌ترین تولیدکننده‌ی دانه‌ی کاکائو در جهان، بازسیلیکای عظیم یاموسوکرو و بندر تجاری ابیجان.",
      en: "World's top cocoa producer, featuring the colossal Basilica of Yamoussoukro and vibrant Abidjan."
    },
    facts: {
      capital: { fa: "یاموسوکرو (سیاسی)، آبیجان (اقتصادی)", en: "Yamoussoukro (Abidjan)" },
      language: { fa: "فرانسوی", en: "French" },
      population: { fa: "حدود ۲۹ میلیون نفر", en: "About 29 million" }
    },
    overview: {
      fa: [
        "ساحل عاج با جنگل‌های بارانی تائی و تولید بیش از ۴۰ درصد شکلات و کاکائوی جهان، قطب اقتصادی پررونق غرب آفریقاست."
      ],
      en: [
        "Leading the global cocoa supply, Côte d'Ivoire hosts the largest Christian church in the world, the Basilica of Our Lady of Peace."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال ساحل عاج", en: "Independence" }, text: { fa: "پایان استعمار فرانسه در ۷ اوت.", en: "Félix Houphouët-Boigny took power." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "madagascar",
    name: { fa: "ماداگاسکار", en: "Madagascar" },
    flag: ["#FFFFFF", "#FC3D32", "#007E3A"],
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال ماداگاسکار از ۲۶ ژوئن ۱۹۶۰ حساب می‌شود؛ پادشاهی مرینا در سده هفدهم جزیره را متحد ساخت.",
      en: "Independence gained on 26 June 1960; historic Merina Kingdom unified the island in the 17th century."
    },
    summary: {
      fa: "قاره‌ی هشتم؛ تنوع زیستی شگفت‌انگیز لِمورها، درختان افسانه‌ای بائوباب و جنگل‌های صخره‌ای تسینگی.",
      en: "The Eighth Continent, an evolutionary sanctuary of lemurs, baobabs, and tsingy limestone towers."
    },
    facts: {
      capital: { fa: "آنتاناناریوو", en: "Antananarivo" },
      language: { fa: "مالاگاسی، فرانسوی", en: "Malagasy, French" },
      population: { fa: "حدود ۳۰ میلیون نفر", en: "About 30 million" }
    },
    overview: {
      fa: [
        "ماداگاسکار چهارمین جزیره بزرگ جهان است و به دلیل میلیون‌ها سال جدایی از خشکی، بیش از ۹۰ درصد حیات وحش آن بومی و منحصر به فرد است."
      ],
      en: [
        "Settled by Austronesians and Africans, Madagascar is an ecological treasure holding endemic wildlife found nowhere else on Earth."
      ]
    },
    timeline: [
      { year: 1817, title: { fa: "پادشاهی مرینا", en: "Merina Kingdom" }, text: { fa: "رادامای اول جزیره را یکپارچه ساخت.", en: "Radama I recognized as King of Madagascar." } },
      { year: 1960, title: { fa: "استقلال ماداگاسکار", en: "Independence" }, text: { fa: "استقلال رسمی از فرانسه در ۲۶ ژوئن.", en: "Full sovereignty restored." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "somalia",
    name: { fa: "سومالی", en: "Somalia" },
    flag: ["#4189DD"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='%234189DD'/><polygon points='15,5 17,9.5 21.5,9.5 18,12.5 19.5,17 15,14 10.5,17 12,12.5 8.5,9.5 13,9.5' fill='white'/></svg>",
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال سومالی از اول ژوئیه ۱۹۶۰ با اتحاد سومالی بریتانیا و ایتالیا حساب می‌شود؛ سرزمین باستانی پونت به ۲۵۰۰ پیش از میلاد می‌رسد.",
      en: "Independence and unification realized on 1 July 1960; ancient Land of Punt dates back to 2500 BCE."
    },
    summary: {
      fa: "سرزمین باستانی پونت و دریانوردان شاخ آفریقا، طولانی‌ترین خط ساحلی آفریقا و سنت شعر کهن.",
      en: "Ancient land of frankincense and Punt, possessing mainland Africa's longest coastline."
    },
    facts: {
      capital: { fa: "موگادیشو", en: "Mogadishu" },
      language: { fa: "سومالیایی، عربی", en: "Somali, Arabic" },
      population: { fa: "حدود ۱۸ میلیون نفر", en: "About 18 million" }
    },
    overview: {
      fa: [
        "سومالی در دماغه شاخ آفریقا با سلطنت‌های کهن عدل و اجوران، از هزاره‌های پیش مرکز تجارت صمغ کندر و مر با مصر باستان بوده است."
      ],
      en: [
        "Historically trading myrrh and ivory with ancient dynasties, Somalia was celebrated as the 'Nation of Bards' for oral poetry."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "اتحاد و استقلال سومالی", en: "Independence & Unification" }, text: { fa: "تولد جمهوری مستقل سومالی در اول ژوئیه.", en: "Northern and southern territories united." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "benin",
    name: { fa: "بنین", en: "Benin" },
    flag: ["#008751", "#FCD116", "#E8112D"],
    founded: 1600,
    foundedNote: {
      fa: "قدمت پادشاهی داهومی در بنین به سال ۱۶۰۰ میلادی بازمی‌گردد؛ استقلال نوین در اول اوت ۱۹۶۰ حاصل شد.",
      en: "Kingdom of Dahomey founded c. 1600; modern independence gained on 1 August 1960."
    },
    summary: {
      fa: "خاستگاه آیین سنتی وودو، پادشاهی تاریخی داهومی با سپاه افسانه‌ای زنان آمازون.",
      en: "Birthplace of Vodun (Voodoo) traditions and the legendary Dahomey Amazon warriors."
    },
    facts: {
      capital: { fa: "پورتو نووو", en: "Porto-Novo" },
      language: { fa: "فرانسوی", en: "French" },
      population: { fa: "حدود ۱۳ میلیون نفر", en: "About 13 million" }
    },
    overview: {
      fa: [
        "بنین با کاخ‌های سلطنتی آبومی و تاریخ رزم‌آوران زن داهومی، خاستگاه معنوی فرهنگ‌های آفریقایی در حوضه اقیانوس اطلس است."
      ],
      en: [
        "Featuring the royal palaces of Abomey, Benin transitioned smoothly into a stable West African democracy in 1991."
      ]
    },
    timeline: [
      { year: 1600, title: { fa: "پادشاهی داهومی", en: "Kingdom of Dahomey" }, text: { fa: "شکل‌گیری یکی از مقتدرترین دولت‌های نظامی خلیج گینه.", en: "Rise of the Dahomey warrior kingdom." } },
      { year: 1960, title: { fa: "استقلال بنین", en: "Independence" }, text: { fa: "استقلال رسمی از فرانسه.", en: "Independence declared from France." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "burkina-faso",
    name: { fa: "بورکینافاسو", en: "Burkina Faso" },
    flag: ["#EF2B2D", "#009E49"],
    founded: 1960,
    foundedNote: {
      fa: "قدمت استقلال کشور از ۵ اوت ۱۹۶۰ (با نام ولتای علیا) حساب می‌شود؛ نام بورکینافاسو به معنای «سرزمین مردمان درستکار» در ۱۹۸۴ برگزیده شد.",
      en: "Independence gained on 5 August 1960; renamed Burkina Faso ('Land of Incorruptible People') in 1984."
    },
    summary: {
      fa: "سرزمین مردمان درستکار در قلب ساحل صحرا، پایتخت سینمای آفریقا با جشنواره فسپاکو.",
      en: "Land of Incorruptible People, heart of the Sahel and host to Africa's premier FESPACO film festival."
    },
    facts: {
      capital: { fa: "واگادوگو", en: "Ouagadougou" },
      language: { fa: "فرانسوی، مورسی", en: "French, Mooré" },
      population: { fa: "حدود ۲۳ میلیون نفر", en: "About 23 million" }
    },
    overview: {
      fa: [
        "بورکینافاسو با امپراتوری‌های باستانی موسی و آرمان‌های توماس سانکارا، کانون هنر، موسیقی و همبستگی فرهنگی در غرب آفریقاست."
      ],
      en: [
        "Rooted in the ancient Mossi kingdoms, Burkina Faso is celebrated for its dynamic craftspeople and cultural vitality."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال از فرانسه", en: "Independence" }, text: { fa: "استقلال رسمی ولتای علیا.", en: "Independence of Upper Volta." } },
      { year: 1984, title: { fa: "نام‌گذاری بورکینافاسو", en: "Renamed by Sankara" }, text: { fa: "توماس سانکارا نام کشور را به سرزمین مردمان پاک‌نهاد تغییر داد.", en: "Thomas Sankara renamed the nation." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "liberia",
    name: { fa: "لیبریا", en: "Liberia" },
    flag: ["#BF0A30", "#FFFFFF"],
    founded: 1847,
    foundedNote: {
      fa: "قدمت استقلال جمهوری لیبریا از ۲۶ ژوئیه ۱۸۴۷ حساب می‌شود؛ کهن‌ترین جمهوری مدرن در سراسر قاره آفریقا.",
      en: "Declared independence on 26 July 1847, making it Africa's oldest modern republic."
    },
    summary: {
      fa: "کهن‌ترین جمهوری آفریقا، پناهگاه آزادی بردگان رهایی‌یافته از آمریکا و جنگل‌های بارانی ساپو.",
      en: "Africa's first modern republic, founded by freed African-Americans, home to Sapo National Park."
    },
    facts: {
      capital: { fa: "مونروویا", en: "Monrovia" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۵٫۴ میلیون نفر", en: "About 5.4 million" }
    },
    overview: {
      fa: [
        "لیبریا در سال ۱۸۲۲ توسط انجمن استعمار آمریکا برای بردگان سیاه‌پوست آزادشده تأسیس شد و در ۱۸۴۷ به عنوان نخستین جمهوری دموکراتیک آفریقا اعلام استقلال کرد."
      ],
      en: [
        "Founded on principles of liberty by returning African diaspora, Liberia maintained unbroken sovereignty throughout the Scramble for Africa."
      ]
    },
    timeline: [
      { year: 1847, title: { fa: "اعلام استقلال جمهوری لیبریا", en: "Declaration of Independence" }, text: { fa: "جوزف جنکینز رابرتز نخستین رئیس‌جمهور شد.", en: "First democratic republic in Africa." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "mauritius",
    name: { fa: "موریس", en: "Mauritius" },
    flag: ["#EA2839", "#1A2061", "#FFD500", "#00A551"],
    founded: 1968,
    foundedNote: {
      fa: "قدمت استقلال موریس از ۱۲ مارس ۱۹۶۸ از بریتانیا حساب می‌شود.",
      en: "Independence gained on 12 March 1968 from the United Kingdom."
    },
    summary: {
      fa: "جزیره‌ی بهشتی در اقیانوس هند با سواحل مرجانی، سرزمین پرنده‌ی افسانه‌ای دودو و اقتصاد باثبات.",
      en: "Indian Ocean island paradise famed for coral reefs, the extinct Dodo, and top African governance."
    },
    facts: {
      capital: { fa: "پورت لوئیس", en: "Port Louis" },
      language: { fa: "انگلیسی، فرانسوی، کریول موریسی", en: "English, French, Mauritian Creole" },
      population: { fa: "حدود ۱٫۳ میلیون نفر", en: "About 1.3 million" }
    },
    overview: {
      fa: [
        "موریس با جامعه‌ای متکثر از تبار هندی، آفریقایی، فرانسوی و چینی، یکی از مرفه‌ترین و باثبات‌ترین دموکراسی‌های قاره آفریقاست."
      ],
      en: [
        "Harmonizing Hindu, African, and European communities, Mauritius is an African leader in economic freedom and human development."
      ]
    },
    timeline: [
      { year: 1968, title: { fa: "استقلال موریس", en: "Independence" }, text: { fa: "اعلام استقلال رسمی در ۱۲ مارس.", en: "Sir Seewoosagur Ramgoolam led independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "eswatini",
    name: { fa: "اسواتینی", en: "Eswatini" },
    flag: ["#4169E1", "#FFD700", "#B22222"],
    founded: 1745,
    foundedNote: {
      fa: "قدمت پادشاهی اسواتینی (سوازیلند پیشین) از استقرار نگوانه سوم در سال ۱۷۴۵ حساب می‌شود؛ استقلال در ۱۹۶۸ تثبیت شد.",
      en: "Kingdom founded c. 1745 under Ngwane III; independence from Britain regained in 1968."
    },
    summary: {
      fa: "پادشاهی پابرجا در جنوب آفریقا با سنت‌های اصیل رقص رید و مناظر کوهستانی مللووان.",
      en: "Scenic kingdom preserving deep traditional ceremonies like the Umhlanga Reed Dance."
    },
    facts: {
      capital: { fa: "امبابانه (اداری)، لوبامبا (سلطنتی)", en: "Mbabane, Lobamba" },
      language: { fa: "سوازی، انگلیسی", en: "Swati, English" },
      population: { fa: "حدود ۱٫۲ میلیون نفر", en: "About 1.2 million" }
    },
    overview: {
      fa: [
        "پادشاهی اسواتینی یکی از واپسین پادشاهی‌های سنتی جهان است که آیین‌ها و فرهنگ اصیل مردم سوازی را نسل به نسل زنده نگه داشته است."
      ],
      en: [
        "Nestled in the Drakensberg escarpment, Eswatini retains royal traditions and wildlife sanctuaries."
      ]
    },
    timeline: [
      { year: 1968, title: { fa: "استقلال اسواتینی", en: "Independence" }, text: { fa: "پادشاه سوبوزا دوم استقلال از بریتانیا را اعلام کرد.", en: "King Sobhuza II restored sovereignty." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "lesotho",
    name: { fa: "لسوتو", en: "Lesotho" },
    flag: ["#00209F", "#FFFFFF", "#009543"],
    founded: 1822,
    foundedNote: {
      fa: "قدمت پادشاهی لسوتو از سال ۱۸۲۲ با اتحاد قبایل باسوتو به دست شاه موشوئوشوئه اول در پناهگاه کوه تابا بوسیو حساب می‌شود.",
      en: "Founded in 1822 by King Moshoeshoe I uniting the Basotho people at Thaba Bosiu."
    },
    summary: {
      fa: "پادشاهی در آسمان؛ تنها کشور جهان که تمام خاک آن بالای ۱۰۰۰ متر از سطح دریا قرار دارد.",
      en: "Kingdom in the Sky, completely elevated over 1,000 meters above sea level."
    },
    facts: {
      capital: { fa: "ماسرو", en: "Maseru" },
      language: { fa: "سوتو، انگلیسی", en: "Sesotho, English" },
      population: { fa: "حدود ۲٫۳ میلیون نفر", en: "About 2.3 million" }
    },
    overview: {
      fa: [
        "لسوتو کوهستانی محصور در خاک آفریقای جنوبی، با دلاوری شاه موشوئوشوئه در برابر هجوم مهاجمان ایستادگی کرد و هویت مستقل خود را حفظ کرد."
      ],
      en: [
        "Perched high on the Maloti Mountains, Lesotho is famous for Basotho blankets, pony trekking, and water reservoirs."
      ]
    },
    timeline: [
      { year: 1822, title: { fa: "تأسیس پادشاهی باسوتو", en: "Basotho Kingdom" }, text: { fa: "موشوئوشوئه اول پایه‌گذار ملت باسوتو شد.", en: "Moshoeshoe I gathered the nation at Thaba Bosiu." } },
      { year: 1966, title: { fa: "استقلال لسوتو", en: "Independence" }, text: { fa: "استقلال از بریتانیا در ۴ اکتبر.", en: "Full independence regained." } }
    ],
    added: "2026-10-10"
  }
];
