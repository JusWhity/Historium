import { Figure } from '../../types';

export const FIGURES_WORLD_ADDITIONAL: Figure[] = [
  {
    id: "al-khwarizmi",
    name: { fa: "محمد بن موسی خوارزمی", en: "Muhammad ibn Musa al-Khwarizmi" },
    country: "uzbekistan", field: "science",
    born: 780, died: 850,
    summary: { fa: "پدر علم جبر و الگوریتم، دانشمند بزرگ بیت‌الحکمه بغداد", en: "Father of algebra and algorithms, polymath of the House of Wisdom" },
    bio: {
      fa: ["خوارزمی با تألیف «الجبر و المقابله» شاخه‌ی بنیادین جبر را در ریاضیات پدید آورد و واژه الگوریتم برگرفته از نام اوست."],
      en: ["Al-Khwarizmi introduced systematic solutions of linear and quadratic equations, establishing algebra."]
    },
    achievements: {
      fa: ["بنیان‌گذاری دانش جبر", "معرفی ارقام هندی-عربی به جهان", "اصطلاح الگوریتم"],
      en: ["Founding the discipline of algebra", "Introduced Hindu-Arabic numerals to the West", "Etymological source of 'algorithm'"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "saladin",
    name: { fa: "صلاح‌الدین ایوبی", en: "Saladin" },
    country: "egypt", field: "politics",
    born: 1137, died: 1193,
    summary: { fa: "سلطان جوانمرد، فاتح بیت‌المقدس و نماد دادگری و شجاعت", en: "Sultan of Egypt and Syria, legendary chivalric conqueror of Jerusalem" },
    bio: {
      fa: ["صلاح‌الدین در نبرد حطین (۱۱۸۷) صلیبیون را شکست داد، قدس را بدون کشتار بازپس گرفت و به جوانمردی حتی نزد دشمنانش شهره شد."],
      en: ["Saladin recaptured Jerusalem in 1187 with clemency and mutual respect toward Christian defenders."]
    },
    achievements: {
      fa: ["پیروزی در نبرد حطین (۱۱۸۷)", "بازپس‌گیری قدس با تساهل و عفو عمومی"],
      en: ["Victory at the Battle of Hattin (1187)", "Reconquest of Jerusalem with chivalric magnanimity"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "hammurabi",
    name: { fa: "حمورابی", en: "Hammurabi" },
    country: "iraq", field: "politics",
    born: -1810, died: -1750,
    summary: { fa: "پادشاه بابل باستان و صادرکننده‌ی نخستین قانون مدون تاریخ", en: "King of Babylon who enacted the historic Code of Hammurabi" },
    bio: {
      fa: ["حمورابی با متحد ساختن بین‌النهرین بر سنگی از بازالت سیاه ۲۸۲ قانون دادگستری را برای همیشه حک کرد."],
      en: ["Hammurabi united Mesopotamia under Babylon and proclaimed one of the oldest deciphered legal codes."]
    },
    achievements: {
      fa: ["قانون‌نامه حمورابی (حدود ۱۷۵۴ پ.م.)", "یکپارچگی بین‌النهرین باستان"],
      en: ["The Code of Hammurabi (c. 1754 BCE)", "Unification of ancient Mesopotamia"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "archimedes",
    name: { fa: "ارشمیدس", en: "Archimedes" },
    country: "greece", field: "science",
    born: -287, died: -212,
    summary: { fa: "بزرگ‌ترین ریاضی‌دان و فیزیک‌دان جهان باستان، کاشف قانون شناوری", en: "Preeminent ancient mathematician, physicist, and inventor of Syracuse" },
    bio: {
      fa: ["ارشمیدس با کشف قانون تعادل هیدرواستاتیک (اصل ارشمیدس)، اهرم‌ها و پیچ ارشمیدس جهان علم را متحول کرد."],
      en: ["Archimedes formulated the principles of hydrostatics, levers, and early infinitesimal calculus."]
    },
    achievements: {
      fa: ["اصل ارشمیدس در شناوری مایعات", "قانون اهرم‌ها و محاسبه عدد پی"],
      en: ["Archimedes' principle of buoyancy", "Law of the lever and approximation of pi"]
    },
    quote: { fa: "به من جایی برای ایستادن بدهید تا زمین را جابجا کنم.", en: "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world." },
    added: "2026-10-10"
  },
  {
    id: "homer",
    name: { fa: "هومر", en: "Homer" },
    country: "greece", field: "arts",
    born: -800, died: -701,
    summary: { fa: "سراینده‌ی حماسه‌های جاودان ایلیاد و ادیسه در سپیده‌دم یونان باستان", en: "Legendary epic poet of the Iliad and the Odyssey" },
    bio: {
      fa: ["هومر با دو حماسه‌ی ایلیاد و ادیسه سنگ‌بنای ادبیات، اسطوره‌شناسی و درام غرب را در سده هشتم پیش از میلاد نهاد."],
      en: ["Homer's epics established the heroic ideals, mythological narrative, and meter of Western poetry."]
    },
    achievements: {
      fa: ["منظومه حماسی ایلیاد", "منظومه حماسی ادیسه"],
      en: ["The Iliad", "The Odyssey"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "sun-tzu",
    name: { fa: "سون تزو", en: "Sun Tzu" },
    country: "china", field: "thought",
    born: -544, died: -496,
    summary: { fa: "استراتژیست نظامی و نویسنده‌ی کهن‌ترین شاهکار راهبرد «هنر جنگ»", en: "Ancient general and military strategist, author of The Art of War" },
    bio: {
      fa: ["سون تزو در دوران بهار و پاییز چین کتاب هنر جنگ را نگاشت که عالی‌ترین پیروزی را پیروزی بدون جنگ می‌داند."],
      en: ["Sun Tzu's The Art of War remains the world's most influential treatise on strategy and psychology."]
    },
    achievements: {
      fa: ["کتاب هنر جنگ (سیزده فصل)", "آموزش اصل غلبه بر حریف بدون خونریزی"],
      en: ["The Art of War", "Strategic doctrine of winning without fighting"]
    },
    quote: { fa: "هنر برتر جنگ، تسلیم کردن دشمن بدون نبرد است.", en: "The supreme art of war is to subdue the enemy without fighting." },
    added: "2026-10-10"
  },
  {
    id: "genghis-khan",
    name: { fa: "چنگیزخان", en: "Genghis Khan" },
    country: "mongolia", field: "politics",
    born: 1162, died: 1227,
    summary: { fa: "بنیان‌گذار امپراتوری مغول و بزرگ‌ترین فاتح استپ‌های اوراسیا", en: "Founder and Great Khan of the Mongol Empire" },
    bio: {
      fa: ["تموچین با متحد کردن قبایل پراکنده مغولستان امپراتوری عظیمی از پکن تا دریای خزر برپا کرد و جاده ابریشم را به هم پیوست."],
      en: ["Genghis Khan unified the Eurasian steppes, established meritocracy, religious tolerance, and Yassa law."]
    },
    achievements: {
      fa: ["یکپارچه‌سازی قبایل مغول (۱۲۰۶)", "تأسیس امپراتوری مغول و قانون یاسا"],
      en: ["Unification of the nomadic tribes (1206)", "Founding of the transcontinental Mongol Empire"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "mansa-musa",
    name: { fa: "مانسا موسی", en: "Mansa Musa" },
    country: "mali", field: "politics",
    born: 1280, died: 1337,
    summary: { fa: "پادشاه زرین امپراتوری مالی و ثروتمندترین انسان در تاریخ مستند", en: "Emperor of the Mali Empire, considered the wealthiest historical figure" },
    bio: {
      fa: ["مانسا موسی در سفر مشهور حج خود در سال ۱۳۲۴ با توزیع سخاوتمندانه طلا اقتصاد قاهره و مدیترانه را دگرگون ساخت و تمبوکتو را مرکز علم کرد."],
      en: ["Mansa Musa put West Africa on European maps and established the Sankore University of Timbuktu."]
    },
    achievements: {
      fa: ["سفر حج تاریخی ۱۳۲۴ میلادی", "ساخت دانشگاه سانکوره در تمبوکتو"],
      en: ["Historic 1324 pilgrimage to Mecca", "Endowed the University of Sankore in Timbuktu"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "yuri-gagarin",
    name: { fa: "یوری گاگارین", en: "Yuri Gagarin" },
    country: "russia", field: "exploration", era: "contemporary",
    born: 1934, died: 1968,
    summary: { fa: "نخستین فضانورد تاریخ بشر؛ فاتح مدار زمین در فضاپیمای وستوک ۱", en: "First human in space, orbiting Earth aboard Vostok 1 in 1961" },
    bio: {
      fa: ["گاگارین در ۱۲ آوریل ۱۹۶۱ با فریاد «بزن بریم!» (پویخالی) نخستین پرواز مداری سرنشین‌دار تاریخ بشر را به مدت ۱۰۸ دقیقه رقم زد."],
      en: ["Gagarin made history on 12 April 1961 as the first human to cross into outer space and orbit the Earth."]
    },
    achievements: {
      fa: ["نخستین سفر انسان به مدار زمین (۱۲ آوریل ۱۹۶۱)", "آغازگر عصر پروازهای فضایی سرنشین‌دار"],
      en: ["First human spaceflight (12 April 1961)", "Hero of humanity's cosmic era"]
    },
    quote: { fa: "زمین آبی و بسیار زیباست. شگفت‌انگیز است!", en: "The Earth is blue. How wonderful. It is amazing." },
    added: "2026-10-10"
  },
  {
    id: "vasco-da-gama",
    name: { fa: "واسکو دا گاما", en: "Vasco da Gama" },
    country: "portugal", field: "exploration",
    born: 1460, died: 1524,
    summary: { fa: "دریانورد بزرگ پرتغالی و کاشف نخستین مسیر مستقیم دریایی از اروپا به هند", en: "Portuguese explorer who commanded the first ocean voyage from Europe to India" },
    bio: {
      fa: ["دا گاما در ۱۴۹۷ با دور زدن دماغه امید نیک نخستین مسیر دریایی مستمر میان اروپا و اقیانوس هند را گشود."],
      en: ["Vasco da Gama linked Europe and Asia by sea route in 1498, inaugurating maritime globalization."]
    },
    achievements: {
      fa: ["کشف مسیر دریایی به هند (۱۴۹۸)", "گشایش راه ادویه به مشرق‌زمین"],
      en: ["Discovery of sea route to India (1498)", "Opened maritime spice trade"]
    },
    quote: null,
    added: "2026-10-10"
  }
];
