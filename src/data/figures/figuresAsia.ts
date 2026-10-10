import { Figure } from '../../types';

export const FIGURES_ASIA: Figure[] = [
  /* China */
  {
    id: "confucius",
    name: { fa: "کنفوسیوس", en: "Confucius" },
    country: "china", field: "thought",
    born: -551, died: -479,
    summary: { fa: "فیلسوف و آموزگار بزرگ اخلاق؛ بنیان‌گذار آیین کنفوسیوس", en: "Philosopher and moral teacher; founder of Confucianism" },
    bio: {
      fa: ["کنفوسیوس با تأکید بر فضیلت انسانی (رِن)، احترام به والدین، هماهنگی اجتماعی و آموزش، پایه فرهنگ دوهزار ساله چین را ساخت."],
      en: ["Confucius emphasized personal and governmental morality, correctness of social relationships, and justice."]
    },
    achievements: {
      fa: ["کتاب گفتارها (آنالکت‌ها)", "پایه‌گذاری مکتب کنفوسیوس"],
      en: ["The Analects", "Foundation of Confucian philosophy"]
    },
    quote: { fa: "آنچه برای خود نمی‌پسندی، برای دیگران نیز مپسند.", en: "Do not do to others what you do not want done to yourself." },
    added: "2026-10-09"
  },
  {
    id: "qin-shi-huang",
    name: { fa: "شی هوانگ‌دی", en: "Qin Shi Huang" },
    country: "china", field: "politics",
    born: -259, died: -210,
    summary: { fa: "نخستین امپراتور چین متحد و سازنده‌ی ارتش سفالین", en: "First Emperor of unified China, creator of the Terracotta Army" },
    bio: {
      fa: ["پادشاه کین در ۲۲۱ پ.م. ایالات متخاصم را یکی کرد، خط و اوزان را یکسان ساخت و دیوار بزرگ چین را پیوند داد."],
      en: ["Qin Shi Huang unified China in 221 BCE, standardizing currency, weights, and script."]
    },
    achievements: {
      fa: ["یکپارچه‌سازی چین (۲۲۱ پ.م.)", "ارتش سفالین شی‌آن", "یکسان‌سازی خط چینی"],
      en: ["Unification of China (221 BCE)", "Terracotta Army of Xi'an", "Standardized Chinese script"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "sima-qian",
    name: { fa: "سیما چیان", en: "Sima Qian" },
    country: "china", field: "arts",
    born: -145, died: -86,
    summary: { fa: "پدر تاریخ‌نگاری چین و نویسنده‌ی «یادداشت‌های مورخ بزرگ»", en: "Father of Chinese historiography, author of Records of the Grand Historian" },
    bio: {
      fa: ["سیما چیان تاریخ بیش از دو هزار ساله چین از پادشاه زرد تا هان را در کتاب شی‌جی (یادداشت‌های مورخ بزرگ) تدوین کرد."],
      en: ["Sima Qian composed the monumental Shiji, setting the biographical format for imperial Chinese history."]
    },
    achievements: {
      fa: ["یادداشت‌های مورخ بزرگ (شی‌جی)", "الگوی دوهزار ساله تاریخ‌نگاری چین"],
      en: ["Records of the Grand Historian (Shiji)", "Foundation of Asian historiography"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "wu-zetian",
    name: { fa: "ووجه‌تیان", en: "Wu Zetian" },
    country: "china", field: "politics",
    born: 624, died: 705,
    summary: { fa: "تنها زنی که رسماً عنوان امپراتور چین را بر خود نهاد", en: "Only female emperor regnant in Chinese history" },
    bio: {
      fa: ["ووجه‌تیان در دوران سلسله تانگ به اوج قدرت رسید و با شایسته‌سالاری در آزمون‌های دیوانی کشور را با اقتدار اداره کرد."],
      en: ["Wu Zetian ruled China with formidable administrative acumen, expanding civil service exams."]
    },
    achievements: {
      fa: ["سلطنت مستقل امپراتوری (۶۹۰-۷۰۵)", "ترویج شایسته‌سالاری و بودیسم"],
      en: ["Sole female emperor in China", "Meritocratic expansion of imperial exams"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "li-bai",
    name: { fa: "لی‌بای", en: "Li Bai" },
    country: "china", field: "arts",
    born: 701, died: 762,
    summary: { fa: "شاعر جاودان عصر طلایی تانگ و نماد تخیل زلال در شعر شرق", en: "Genius poet of the Tang Golden Age, famed for romantic imagery" },
    bio: {
      fa: ["لی‌بای شاعر دوستدار طبیعت و آزادی بود که شعرهایش درباره‌ی ماه، شراب و دوستی قله ادبیات چین است."],
      en: ["Li Bai captured the sublime beauty of nature, wine, and moonlight in timeless verses."]
    },
    achievements: {
      fa: ["بیش از هزار شعر ماندگار تانگ", "لقب شاعر آسمانی"],
      en: ["Over 1,000 surviving poems", "The 'Poet Immortal' of China"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "zheng-he",
    name: { fa: "ژنگ هه", en: "Zheng He" },
    country: "china", field: "exploration",
    born: 1371, died: 1433,
    summary: { fa: "دریاسالار مسلمان دربار مینگ و فرمانده هفت سفر بزرگ دریایی", en: "Muslim admiral of the Ming fleet who commanded seven epic voyages" },
    bio: {
      fa: ["ژنگ هه با ناوگان غول‌پیکر کشتی‌های گنج در سده پانزدهم تا سواحل هند، خلیج فارس و شرق آفریقا دریانوردی کرد."],
      en: ["Zheng He led treasure fleets across the Indian Ocean to Arabia and East Africa decades before Columbus."]
    },
    achievements: {
      fa: ["هفت سفر دریایی تا اقیانوس هند و آفریقا", "فرماندهی بزرگ‌ترین ناوگان چوبی تاریخ"],
      en: ["Seven maritime expeditions (1405–1433)", "Command of legendary Treasure Ships"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "sun-yat-sen",
    name: { fa: "سان یات‌سن", en: "Sun Yat-sen" },
    country: "china", field: "politics",
    born: 1866, died: 1925,
    summary: { fa: "پدر ملت چین مدرن و رهبر انقلاب ۱۹۱۱ علیه سلسله چینگ", en: "Father of modern China, leader of the 1911 Xinhai Revolution" },
    bio: {
      fa: ["سان یات‌سن با اصل سه‌گانه مردم (ملی‌گرایی، دموکراسی و رفاه مردم) نخستین جمهوری آسیا را در ۱۹۱۲ برپا کرد."],
      en: ["Sun Yat-sen formulated the Three Principles of the People and served as provisional president."]
    },
    achievements: {
      fa: ["سرنگونی نظام امپراتوری در ۱۹۱۱", "اصول سه‌گانه مردم"],
      en: ["Overthrew the Qing dynasty", "Three Principles of the People"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "deng-xiaoping",
    name: { fa: "دنگ شیائوپینگ", en: "Deng Xiaoping" },
    country: "china", field: "politics",
    born: 1904, died: 1997,
    summary: { fa: "معمار اصلاحات اقتصادی و درهای باز چین نوین", en: "Architect of China's economic opening up and modernization" },
    bio: {
      fa: ["دنگ از ۱۹۷۸ با ایجاد مناطق ویژه اقتصادی، سرمایه‌گذاری خارجی و آزادسازی بازار چین را به دومین اقتصاد جهان بدل کرد."],
      en: ["Deng Xiaoping steered China's transition to a market economy, lifting hundreds of millions from poverty."]
    },
    achievements: {
      fa: ["سیاست درهای باز و اصلاحات اقتصادی (۱۹۷۸)", "فرمول یک کشور دو نظام"],
      en: ["Reform and Opening Up (1978)", "One Country, Two Systems formula"]
    },
    quote: { fa: "مهم نیست گربه سیاه باشد یا سفید، مهم این است که موش بگیرد.", en: "It doesn't matter whether a cat is black or white, as long as it catches mice." },
    added: "2026-10-09"
  },

  /* Japan */
  {
    id: "shotoku",
    name: { fa: "شاهزاده شوتوکو", en: "Prince Shōtoku" },
    country: "japan", field: "politics",
    born: 574, died: 622,
    summary: { fa: "تدوین‌کننده‌ی قانون اساسی هفده‌ماده‌ای و حامی بودیسم در ژاپن", en: "Regent who drafted the Seventeen-Article Constitution and patronized Buddhism" },
    bio: {
      fa: ["شاهزاده شوتوکو با بنای معبد هوریوجی و تدوین اصول اخلاقی کشورداری در سال ۶۰۴ پایه‌های دولت متمدن ژاپن را ریخت."],
      en: ["Prince Shōtoku introduced Buddhist culture and moral governance principles to the Yamato court."]
    },
    achievements: {
      fa: ["قانون اساسی هفده‌ماده‌ای (۶۰۴)", "ساخت معبد هوریوجی"],
      en: ["Seventeen-Article Constitution (604)", "Construction of Hōryū-ji temple"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "murasaki-shikibu",
    name: { fa: "موراساکی شیکیبو", en: "Murasaki Shikibu" },
    country: "japan", field: "arts",
    born: 973, died: 1014,
    summary: { fa: "نویسنده‌ی «داستان گنجی»، نخستین رمان جهان", en: "Author of The Tale of Genji, widely regarded as the world's first novel" },
    bio: {
      fa: ["بانوی درباری هیان با نوشتن داستان گنجی شاهکاری از روان‌شناسی، عشق و گذر زمان را در آغاز سده یازدهم خلق کرد."],
      en: ["Murasaki Shikibu composed The Tale of Genji around 1000 CE, pioneering the psychological novel."]
    },
    achievements: {
      fa: ["نگارش داستان گنجی (حدود ۱۰۰۸)", "خلق نخستین رمان تاریخ بشریت"],
      en: ["The Tale of Genji", "Created the world's first novel"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "nobunaga",
    name: { fa: "اودا نوبوناگا", en: "Oda Nobunaga" },
    country: "japan", field: "politics",
    born: 1534, died: 1582,
    summary: { fa: "داینیو بزرگ و آغازگر اتحاد ژاپن در عصر سنگوکو", en: "Visionary warlord who initiated the unification of Japan in the Sengoku era" },
    bio: {
      fa: ["نوبوناگا با بهره‌گیری انقلابی از سلاح گرم در نبرد ناگاشینو (۱۵۷۵) ساختار نظامی ژاپن فئودال را دگرگون ساخت."],
      en: ["Nobunaga conquered rival samurai domains through firearm tactics, setting the stage for national unity."]
    },
    achievements: {
      fa: ["نبرد ناگاشینو (۱۵۷۵)", "برچیدن شوگونی آشیکاگا"],
      en: ["Battle of Nagashino (1575)", "Ended the Ashikaga shogunate"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "ieyasu",
    name: { fa: "توکوگاوا ایه‌یاسو", en: "Tokugawa Ieyasu" },
    country: "japan", field: "politics",
    born: 1543, died: 1616,
    summary: { fa: "بنیان‌گذار شوگونی توکوگاوا و معمار صلح ۲۵۰ ساله ادو", en: "Founder of the Tokugawa shogunate, bringing 250 years of peace in the Edo period" },
    bio: {
      fa: ["ایه‌یاسو با پیروزی در نبرد سکیگاهارا (۱۶۰۰) شوگونی را در ادو (توکیوی کنونی) بنا کرد و صلح پایدار پدید آورد."],
      en: ["Ieyasu won the decisive Battle of Sekigahara in 1600, establishing the lasting Tokugawa order."]
    },
    achievements: {
      fa: ["پیروزی در نبرد سکیگاهارا (۱۶۰۰)", "تأسیس شوگونی ادو (۱۶۰۳)"],
      en: ["Battle of Sekigahara (1600)", "Established the Edo Shogunate (1603)"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "basho",
    name: { fa: "ماتسوئو باشو", en: "Matsuo Bashō" },
    country: "japan", field: "arts",
    born: 1644, died: 1694,
    summary: { fa: "استاد اعظم شعر هایکو و نویسنده‌ی «راه باریک به شمال دور»", en: "Supreme master of haiku poetry, author of The Narrow Road to the Deep North" },
    bio: {
      fa: ["باشو قالب شعری هایکو را از تفنن به عالی‌ترین مرتبه‌ی ذن و ادراک طبیعت در ادبیات ژاپن ارتقا بخشید."],
      en: ["Bashō transformed haiku into profound Zen-infused observations of nature and impermanence."]
    },
    achievements: {
      fa: ["ارتقای هایکو به هنر برتر", "سفرنامه راه باریک به شمال دور"],
      en: ["Elevated haiku to high art", "The Narrow Road to the Deep North"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "hokusai",
    name: { fa: "کاتسوشیکا هوکوسای", en: "Katsushika Hokusai" },
    country: "japan", field: "arts", era: "modern",
    born: 1760, died: 1849,
    summary: { fa: "هنرمند برجسته اوکیو-ائه، خالق چاپ چوبی «موج بزرگ کاناگاوا»", en: "Ukiyo-e master printmaker, creator of The Great Wave off Kanagawa" },
    bio: {
      fa: ["هوکوسای با مجموعه سی و شش منظره از کوه فوجی و موج بزرگ کاناگاوا نقاشی اروپا و امپرسیونیست‌ها را مسحور کرد."],
      en: ["Hokusai's Thirty-Six Views of Mount Fuji inspired global aesthetics and Impressionist art."]
    },
    achievements: {
      fa: ["موج بزرگ کاناگاوا (۱۸۳۱)", "مجموعه سی و شش منظره از کوه فوجی"],
      en: ["The Great Wave off Kanagawa (1831)", "Thirty-Six Views of Mount Fuji"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "kurosawa",
    name: { fa: "آکیرا کوروساوا", en: "Akira Kurosawa" },
    country: "japan", field: "arts",
    born: 1910, died: 1998,
    summary: { fa: "کارگردان افسانه‌ای سینمای جهان؛ سازنده‌ی راشومون و هفت سامورایی", en: "Legendary film director of Rashomon and Seven Samurai" },
    bio: {
      fa: ["کوروساوا با فتح جشنواره ونیز با راشومون (۱۹۵۰) و اثر حماسی هفت سامورایی دستور زبان سینمای جهان را تغییر داد."],
      en: ["Kurosawa won the Golden Lion in Venice for Rashomon, introducing dynamic framing to world cinema."]
    },
    achievements: {
      fa: ["راشومون (شیر طلایی ونیز ۱۹۵۱)", "هفت سامورایی (۱۹۵۴)"],
      en: ["Rashomon (Golden Lion 1951)", "Seven Samurai (1954)"]
    },
    quote: null,
    added: "2026-10-09"
  },

  /* Iran Additional */
  {
    id: "ardashir-i",
    name: { fa: "اردشیر بابکان", en: "Ardashir I" },
    country: "iran", field: "politics",
    born: 180, died: 242,
    summary: { fa: "بنیان‌گذار شاهنشاهی ساسانی و احیاکننده‌ی حاکمیت متمرکز ایران", en: "Founder of the Sasanian Empire, restorer of centralized Persian rule" },
    bio: {
      fa: ["اردشیر بابکان در ۲۲۴ میلادی آخرین پادشاه اشکانی را شکست داد و دولت متمرکز و مقتدر ساسانی را بنیان نهاد."],
      en: ["Ardashir defeated the Parthians in 224 CE, establishing the four-century Sasanian dynasty."]
    },
    achievements: {
      fa: ["تأسیس شاهنشاهی ساسانی (۲۲۴ میلادی)", "ایجاد دولت متمرکز اداری"],
      en: ["Founding the Sasanian Empire (224 CE)", "Establishment of centralized administration"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "saadi",
    name: { fa: "سعدی شیرازی", en: "Saadi Shirazi" },
    country: "iran", field: "arts",
    born: 1210, died: 1291,
    summary: { fa: "استاد سخن و نویسنده‌ی جاودانه‌ی «گلستان» و «بوستان»", en: "Master of Speech, author of the Gulistan and the Bustan" },
    bio: {
      fa: ["مشرف‌الدین مصلح بن عبدالله شیرازی معروف به سعدی، با آثاری در حکمت عملی و غزل عاشقانه، شاعر انسانیت است."],
      en: ["Saadi's Gulistan (The Rose Garden) and Bustan (The Orchard) represent the height of practical Persian humanism."]
    },
    achievements: {
      fa: ["گلستان سعدی (۱۲۵۸)", "بوستان سعدی (۱۲۵۷)", "سرودن شعر بنی‌آدم"],
      en: ["The Gulistan (1258)", "The Bustan (1257)", "Famous poem 'Children of Adam' at the UN"]
    },
    quote: { fa: "بنی‌آدم اعضای یک پیکرند / که در آفرینش ز یک گوهرند", en: "Human beings are members of a whole, / In creation of one essence and soul." },
    added: "2026-10-09"
  },
  {
    id: "shah-abbas",
    name: { fa: "شاه عباس بزرگ", en: "Shah Abbas the Great" },
    country: "iran", field: "politics",
    born: 1571, died: 1629,
    summary: { fa: "پادشاه مقتدر صفوی، معمار میدان نقش جهان و شکوفایی اصفهان", en: "Safavid monarch who made Isfahan the center of Persian Renaissance" },
    bio: {
      fa: ["شاه عباس پایتخت را به اصفهان برد، میدان نقش جهان و سی و سه پل را ساخت و هرمز را از استعمار پرتغال آزاد کرد."],
      en: ["Shah Abbas created the majestic Naqsh-e Jahan Square in Isfahan and recaptured Hormuz from Portugal in 1622."]
    },
    achievements: {
      fa: ["پایتختی و شکوه اصفهان (۱۵۹۸)", "آزادسازی جزیره هرمز از پرتغال (۱۶۲۲)"],
      en: ["Capital of Isfahan and architectural flowering", "Liberation of Hormuz Island (1622)"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "amir-kabir",
    name: { fa: "امیرکبیر", en: "Amir Kabir" },
    country: "iran", field: "politics",
    born: 1807, died: 1852,
    summary: { fa: "صدراعظم اصلاح‌گر قاجار و بنیان‌گذار دارالفنون (نخستین دانشگاه مدرن ایران)", en: "Reformist prime minister who founded Dar ul-Funun, Iran's first modern polytechnic" },
    bio: {
      fa: ["میرزا تقی‌خان فراهانی با تأسیس دارالفنون در ۱۸۵۱ و روزنامه وقایع اتفاقیه، پرچم‌دار تجدد و اصلاحات استقلال‌طلبانه در ایران شد."],
      en: ["Amir Kabir modernized education, health, and state administration in 19th-century Iran."]
    },
    achievements: {
      fa: ["تأسیس دارالفنون (۱۸۵۱)", "اصلاحات همه‌جانبه مالی و اداری"],
      en: ["Founding of Dar ul-Funun (1851)", "Modern institutional reforms"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "mosaddegh",
    name: { fa: "دکتر محمد مصدق", en: "Mohammad Mosaddegh" },
    country: "iran", field: "politics",
    born: 1882, died: 1967,
    summary: { fa: "نخست‌وزیر دموکرات و رهبر نهضت ملی‌شدن صنعت نفت ایران", en: "Democratically elected Prime Minister who nationalized Iran's oil industry" },
    bio: {
      fa: ["دکتر مصدق در اسفند ۱۳۲۹ با حمایت ملت صنعت نفت ایران را ملی کرد و در برابر فشارهای استعماری بریتانیا ایستاد."],
      en: ["Mosaddegh championed sovereign resource rights by nationalizing the Anglo-Iranian Oil Company in 1951."]
    },
    achievements: {
      fa: ["ملی شدن صنعت نفت (۲۹ اسفند ۱۳۲۹)", "مبارزه برای استقلال اقتصادی در دادگاه لاهه"],
      en: ["Nationalization of Iranian oil (1951)", "Defense of national sovereignty at The Hague"]
    },
    quote: null,
    added: "2026-10-09"
  },
  {
    id: "mirzakhani",
    name: { fa: "مریم میرزاخانی", en: "Maryam Mirzakhani" },
    country: "iran", field: "science",
    born: 1977, died: 2017,
    summary: { fa: "ریاضی‌دان نابغه و نخستین زن برنده‌ی مدال فیلدز (نوبل ریاضیات)", en: "Stanford mathematician, first woman to win the Fields Medal in mathematics" },
    bio: {
      fa: ["مریم میرزاخانی استاد دانشگاه استنفورد، با پژوهش‌های انقلابی در دینامیک و هندسه هذلولی سطوح ریمانی در ۲۰۱۴ مدال فیلدز را دریافت کرد."],
      en: ["Mirzakhani made breakthrough discoveries in hyperbolic geometry and moduli spaces of Riemann surfaces."]
    },
    achievements: {
      fa: ["مدال فیلدز (۲۰۱۴)", "حل مسائل پیچیده در هندسه هذلولی"],
      en: ["Fields Medal (2014)", "Breakthroughs in hyperbolic surface dynamics"]
    },
    quote: null,
    added: "2026-10-09"
  }
];
