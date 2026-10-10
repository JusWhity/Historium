import { Figure } from '../../types';

export const FIGURES_PART_2: Figure[] = [
  /* Greece */
  {
    id: "socrates",
    name: { fa: "سقراط", en: "Socrates" },
    country: "greece", field: "thought",
    born: -470, died: -399,
    summary: { fa: "پدر فلسفه اخلاق غرب و ابداع‌کننده‌ی روش پرسش و پاسخ سقراطی", en: "Father of Western ethics and the Socratic method" },
    bio: {
      fa: ["سقراط در آتن با گفتگو در آگورا شهروندان را به آزمودن زندگی فراخواند و در ۳۹۹ پیش از میلاد جام شوکران را نوشید."],
      en: ["Socrates questioned conventional wisdom in Athens and famously proclaimed that the unexamined life is not worth living."]
    },
    achievements: {
      fa: ["روش دیالکتیک و مامایی سقراطی", "پایه‌گذاری اخلاق فلسفی"],
      en: ["The Socratic dialectical method", "Foundations of Western moral philosophy"]
    },
    quote: { fa: "زندگی نیازموده ارزش زیستن ندارد.", en: "The unexamined life is not worth living." },
    added: "2026-10-10"
  },
  {
    id: "plato",
    name: { fa: "افلاطون", en: "Plato" },
    country: "greece", field: "thought",
    born: -427, died: -347,
    summary: { fa: "شاگرد سقراط، نویسنده‌ی «جمهور» و بنیان‌گذار آکادمی آتن", en: "Founder of the Academy in Athens, author of The Republic" },
    bio: {
      fa: ["افلاطون با نظریه مُثُل و رساله‌های جاودان خود از جمله جمهور و ضیافت تفکر غرب را شکل داد."],
      en: ["Plato founded the Academy, Western civilization's first institution of higher learning, and formulated the Theory of Forms."]
    },
    achievements: {
      fa: ["کتاب جمهور", "تأسیس آکادمی آتن"],
      en: ["The Republic", "Founding of the Platonic Academy"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "aristotle",
    name: { fa: "ارسطو", en: "Aristotle" },
    country: "greece", field: "thought",
    born: -384, died: -322,
    summary: { fa: "معلم اول؛ سامان‌دهنده‌ی منطق، زیست‌شناسی، اخلاق و سیاست", en: "The First Teacher, pioneer of formal logic and the sciences" },
    bio: {
      fa: ["ارسطو شاگرد افلاطون و آموزگار اسکندر مقدونی بود که منطق صوری، اخلاق نیکوماخوس و علوم طبیعی را تدوین کرد."],
      en: ["Aristotle categorized human knowledge across biology, ethics, rhetoric, and physics at the Lyceum."]
    },
    achievements: {
      fa: ["تدوین علم منطق", "اخلاق نیکوماخوس و سیاست"],
      en: ["Systematization of formal logic", "Nicomachean Ethics and Politics"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "alexander-the-great",
    name: { fa: "اسکندر مقدونی", en: "Alexander the Great" },
    country: "greece", field: "politics",
    born: -356, died: -323,
    summary: { fa: "فاتح جوان دنیای باستان و پیونددهنده‌ی فرهنگ‌های یونانی و شرقی", en: "Macedonian king who established an empire from Greece to India" },
    bio: {
      fa: ["اسکندر تا سن ۳۲ سالگی شاهنشاهی هخامنشی و دره سند را فتح کرد و عصر هلنیستی را آغاز نمود."],
      en: ["Alexander conquered the Persian Empire by 330 BCE, inaugurating the cosmopolitan Hellenistic era."]
    },
    achievements: {
      fa: ["فتح امپراتوری هخامنشی", "آغاز عصر هلنیسم و پیوند شرق و غرب"],
      en: ["Conquest of the Achaemenid realm", "Launch of the Hellenistic era"]
    },
    quote: null,
    added: "2026-10-10"
  },

  /* United States */
  {
    id: "george-washington",
    name: { fa: "جرج واشینگتن", en: "George Washington" },
    country: "united-states", field: "politics",
    born: 1732, died: 1799,
    summary: { fa: "فرمانده کل ارتش آزادی‌بخش و نخستین رئیس‌جمهور آمریکا", en: "Commander-in-Chief in the Revolution and first US President" },
    bio: {
      fa: ["واشینگتن با رهبری در جنگ استقلال و واگذاری داوطلبانه قدرت پس از دو دوره، ستون دموکراسی آمریکا شد."],
      en: ["Washington led the Continental Army to victory in 1783 and set the precedent for peaceful transfer of presidential power."]
    },
    achievements: {
      fa: ["پیروزی در جنگ استقلال آمریکا", "نخستین رئیس‌جمهور ایالات متحده"],
      en: ["Victory in the Revolutionary War", "First President of the United States"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "thomas-jefferson",
    name: { fa: "توماس جفرسون", en: "Thomas Jefferson" },
    country: "united-states", field: "thought",
    born: 1743, died: 1826,
    summary: { fa: "نویسنده‌ی اصلی اعلامیه‌ی استقلال آمریکا و سومین رئیس‌جمهور", en: "Principal author of the Declaration of Independence and third US President" },
    bio: {
      fa: ["جفرسون با نگارش اعلامیه ۱۷۷۶ حقوق طبیعی انسان‌ها یعنی حق حیات، آزادی و جستجوی شادکامی را تصریح کرد."],
      en: ["Jefferson drafted the 1776 Declaration affirming unalienable rights to life, liberty, and happiness."]
    },
    achievements: {
      fa: ["نگارش اعلامیه استقلال آمریکا", "خرید قلمرو لوئیزیانا (۱۸۰۳)"],
      en: ["Author of the Declaration of Independence", "Louisiana Purchase (1803)"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "abraham-lincoln",
    name: { fa: "آبراهام لینکلن", en: "Abraham Lincoln" },
    country: "united-states", field: "politics",
    born: 1809, died: 1865,
    summary: { fa: "شانزدهمین رئیس‌جمهور آمریکا؛ حافظ اتحاد ملی و لغوکننده‌ی برده‌داری", en: "16th US President who preserved the Union and abolished slavery" },
    bio: {
      fa: ["لینکلن آمریکا را در جنگ داخلی ۱۸۶۱-۱۸۶۵ رهبری کرد و با صدور اعلامیه آزادی بردگان نام خود را در تاریخ ثبت کرد."],
      en: ["Lincoln preserved the American union through the Civil War and issued the Emancipation Proclamation."]
    },
    achievements: {
      fa: ["اعلامیه آزادی بردگان (۱۸۶۳)", "نطق گتیسبورگ", "پایان پیروزمندانه جنگ داخلی"],
      en: ["Emancipation Proclamation (1863)", "The Gettysburg Address", "Preserved the Union"]
    },
    quote: { fa: "حکومت مردم، توسط مردم، برای مردم از روی زمین محو نخواهد شد.", en: "Government of the people, by the people, for the people, shall not perish from the earth." },
    added: "2026-10-10"
  },
  {
    id: "martin-luther-king",
    name: { fa: "مارتین لوتر کینگ جونیور", en: "Martin Luther King Jr." },
    country: "united-states", field: "thought", era: "contemporary",
    born: 1929, died: 1968,
    summary: { fa: "رهبر جنبش مدنی سیاه‌پوستان و صاحب خطابه جاودان «من رویایی دارم»", en: "Civil rights leader, Nobel Peace Prize laureate, author of 'I Have a Dream'" },
    bio: {
      fa: ["دکتر کینگ با مبارزه بدون خشونت علیه تبعیض نژادی قانون حقوق مدنی ۱۹۶۴ را به ثمر رساند و نوبل صلح گرفت."],
      en: ["King led the American civil rights movement with nonviolent resistance, winning the 1964 Nobel Peace Prize."]
    },
    achievements: {
      fa: ["راهپیمایی تاریخی واشینگتن (۱۹۶۳)", "تصویب قانون حقوق مدنی", "جایزه صلح نوبل (۱۹۶۴)"],
      en: ["March on Washington (1963)", "Civil Rights Act passage", "Nobel Peace Prize (1964)"]
    },
    quote: { fa: "من رویایی دارم که روزی فرزندانم نه بر اساس رنگ پوستشان، بلکه با محتوای شخصیتشان داوری شوند.", en: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character." },
    added: "2026-10-10"
  },
  {
    id: "thomas-edison",
    name: { fa: "توماس ادیسون", en: "Thomas Edison" },
    country: "united-states", field: "invention",
    born: 1847, died: 1931,
    summary: { fa: "مخترع لامپ رشته‌ای پایدار، گرامافون و دوربین تصویربرداری متحرک", en: "Prolific inventor of the incandescent light bulb, phonograph, and motion picture camera" },
    bio: {
      fa: ["ادیسون با بیش از هزار اختراع ثبت‌شده شب‌های تاریک جهان را روشن ساخت و پایه‌های برق‌رسانی صنعتی را پی‌ریخت."],
      en: ["With 1,093 patents, Edison built the world's first industrial research laboratory at Menlo Park."]
    },
    achievements: {
      fa: ["لامپ روشنایی الکتریکی", "گرامافون (ضبط صوت)", "نخستین شبکه برق‌رسانی شهری"],
      en: ["Commercial incandescent light", "The phonograph", "First central electric power station"]
    },
    quote: null,
    added: "2026-10-10"
  },

  /* India */
  {
    id: "ashoka",
    name: { fa: "آشوکا بزرگ", en: "Ashoka the Great" },
    country: "india", field: "politics",
    born: -304, died: -232,
    summary: { fa: "امپراتور مائوریا؛ پذیرنده‌ی آیین صلح و منتشرکننده‌ی کتیبه‌های اخلاقی", en: "Mauryan emperor who unified India and embraced Buddhist nonviolence" },
    bio: {
      fa: ["آشوکا پس از نبرد خونین کالینگا به بودیسم گروید و صلح، درختکاری، درمانگاه‌ها و مدارا را در ستون‌های سنگی ثبت کرد."],
      en: ["Renouncing conquest after the Kalinga war, Ashoka spread Buddhist humanitarian edicts across India."]
    },
    achievements: {
      fa: ["ستون‌های سنگی آشوکا (شیرهای سارنات)", "ترویج جهانی بودیسم"],
      en: ["Lion Capital of Ashoka (India's emblem)", "Global spread of Buddhist dharma"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "mahatma-gandhi",
    name: { fa: "مهاتما گاندی", en: "Mahatma Gandhi" },
    country: "india", field: "thought",
    born: 1869, died: 1948,
    summary: { fa: "رهبر استقلال هند و آموزگار اصل ساتی آگراها (مقاومت بدون خشونت)", en: "Leader of Indian independence through nonviolent civil resistance (Satyagraha)" },
    bio: {
      fa: ["مهنداس کارامچاند گاندی با راهپیمایی نمک و اعتصاب‌های مسالمت‌آمیز امپراتوری بریتانیا را به زانو درآورد."],
      en: ["Gandhi inspired worldwide civil rights movements through soul-force (Satyagraha) and nonviolence (Ahimsa)."]
    },
    achievements: {
      fa: ["رهبری استقلال هند (۱۹۴۷)", "راهپیمایی نمک (۱۹۳۰)", "الگوی جهانی مبارزه بی‌خشونت"],
      en: ["Independence of India (1947)", "The Salt March (1930)", "Global icon of nonviolence"]
    },
    quote: { fa: "تغییری باش که می‌خواهی در جهان ببینی.", en: "You must be the change you wish to see in the world." },
    added: "2026-10-10"
  },
  {
    id: "rabindranath-tagore",
    name: { fa: "رابیندرانات تاگور", en: "Rabindranath Tagore" },
    country: "india", field: "arts",
    born: 1861, died: 1941,
    summary: { fa: "شاعر پرآوازه‌ی گیتانجالی و نخستین برنده‌ی آسیایی جایزه نوبل", en: "Bengali polymath, poet of Gitanjali, first Asian Nobel laureate" },
    bio: {
      fa: ["تاگور در ۱۹۱۳ جایزه نوبل ادبیات را ربود و سرود ملی دو کشور هند و بنگلادش را سرود."],
      en: ["Tagore reshaped Bengali literature and music, winning the 1913 Nobel Prize in Literature."]
    },
    achievements: {
      fa: ["مجموعه شعر گیتانجالی", "جایزه نوبل ادبیات (۱۹۱۳)"],
      en: ["Poetry collection Gitanjali", "Nobel Prize in Literature (1913)"]
    },
    quote: null,
    added: "2026-10-10"
  },

  /* Egypt */
  {
    id: "ramesses-ii",
    name: { fa: "رامسس دوم", en: "Ramesses II" },
    country: "egypt", field: "politics",
    born: -1303, died: -1213,
    summary: { fa: "بزرگ‌ترین فرعون سازنده‌ی مصر باستان، معمار معبد ابوسمبل", en: "Greatest pharaoh of the New Kingdom, builder of Abu Simbel" },
    bio: {
      fa: ["رامسس دوم با نبرد قادش علیه هیتی‌ها و معاهده صلح نامدار آن، باشکوه‌ترین بناهای مصر علیا را ساخت."],
      en: ["Ramesses II reigned for 66 years, signed history's first known peace treaty, and carved Abu Simbel."]
    },
    achievements: {
      fa: ["معابد صخره‌ای ابوسمبل", "نخستین پیمان صلح بین‌المللی ثبت‌شده با هیتی‌ها"],
      en: ["Temples of Abu Simbel", "First recorded peace treaty (Treaty of Kadesh)"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "cleopatra-vii",
    name: { fa: "کلئوپاترا هفتم", en: "Cleopatra VII" },
    country: "egypt", field: "politics",
    born: -69, died: -30,
    summary: { fa: "واپسین ملکه دودمان بطالمه و چهره‌ی افسانه‌ای دیپلماسی با رم", en: "Last active ruler of the Ptolemaic Kingdom of Egypt" },
    bio: {
      fa: ["کلئوپاترا با تسلط به چندین زبان و پیوند با ژولیوس سزار و مارک آنتونی از استقلال مصر پاسداری کرد."],
      en: ["A multilingual diplomat and ruler, Cleopatra commanded naval fleets and resisted Roman annexation."]
    },
    achievements: {
      fa: ["حفظ استقلال مصر در عصر سزار", "رهبری ناوگان در نبرد آکتیوم"],
      en: ["Preserved Egyptian sovereignty in late Hellenistic period", "Naval command at Actium"]
    },
    quote: null,
    added: "2026-10-10"
  },

  /* Russia */
  {
    id: "peter-the-great",
    name: { fa: "پتر کبیر", en: "Peter the Great" },
    country: "russia", field: "politics",
    born: 1672, died: 1725,
    summary: { fa: "تزار نوساز روسیه و بنیان‌گذار پایتخت اروپایی سن پترزبورگ", en: "Tsar who modernized Russia and founded Saint Petersburg" },
    bio: {
      fa: ["پتر اول با سفر به اروپای غربی، نیروی دریایی، ارتش و علوم جدید را به روسیه آورد و کشور را به امپراتوری بدل کرد."],
      en: ["Peter transformed Russia into an empire, building St. Petersburg as a maritime window to the West."]
    },
    achievements: {
      fa: ["بنیان‌گذاری سن پترزبورگ (۱۷۰۳)", "تأسیس امپراتوری روسیه"],
      en: ["Founding of Saint Petersburg (1703)", "Proclamation of the Russian Empire"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "leo-tolstoy",
    name: { fa: "لئو تولستوی", en: "Leo Tolstoy" },
    country: "russia", field: "arts",
    born: 1828, died: 1910,
    summary: { fa: "خالق شاهکارهای «جنگ و صلح» و «آنا کارنینا»", en: "Literary colossus, author of War and Peace and Anna Karenina" },
    bio: {
      fa: ["تولستوی با واقع‌گرایی ژرف و فلسفه اخلاقی مقاومت مسالمت‌آمیز بر مهاتما گاندی و ادبیات جهان اثر نهاد."],
      en: ["Tolstoy produced monumental epics of human nature and inspired nonviolent Christian anarchism."]
    },
    achievements: {
      fa: ["رمان جنگ و صلح", "آنا کارنینا"],
      en: ["War and Peace", "Anna Karenina"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "dmitri-mendeleev",
    name: { fa: "دیمیتری مندلیف", en: "Dmitri Mendeleev" },
    country: "russia", field: "science",
    born: 1834, died: 1907,
    summary: { fa: "شیمی‌دان نابغه و واضع جدول تناوبی عناصر", en: "Chemist who formulated the Periodic Law and Periodic Table of Elements" },
    bio: {
      fa: ["مندلیف با دسته‌بندی تناوبی عناصر، خواص عنصرهایی را که هنوز کشف نشده بودند با دقت پیش‌بینی کرد."],
      en: ["Mendeleev organized elements by atomic weight, predicting undiscovered elements with striking accuracy."]
    },
    achievements: {
      fa: ["جدول تناوبی عناصر (۱۸۶۹)", "پیش‌بینی عناصر ناشناخته"],
      en: ["The Periodic Table (1869)", "Predicted gallium and germanium"]
    },
    quote: null,
    added: "2026-10-10"
  },

  /* South Africa */
  {
    id: "nelson-mandela",
    name: { fa: "نلسون ماندلا", en: "Nelson Mandela" },
    country: "south-africa", field: "politics", era: "contemporary",
    born: 1918, died: 2013,
    summary: { fa: "رهبر افسانه‌ای مبارزه با آپارتاید، نماد آشتی ملی و برنده صلح نوبل", en: "Anti-apartheid hero, first black president of South Africa, Nobel Peace laureate" },
    bio: {
      fa: ["ماندلا پس از ۲۷ سال زندان در جزیره روبن، با بخشش و خرد آفریقای جنوبی را به دموکراسی چندنژادی رساند."],
      en: ["After 27 years in prison, Madiba guided South Africa to peaceful transition and democratic reconciliation."]
    },
    achievements: {
      fa: ["پایان نظام آپارتاید", "جایزه صلح نوبل (۱۹۹۳)", "ریاست جمهوری دموکراتیک (۱۹۹۴)"],
      en: ["Abolition of apartheid", "Nobel Peace Prize (1993)", "President of South Africa (1994)"]
    },
    quote: { fa: "همیشه غیرممکن به نظر می‌رسد تا زمانی که انجام شود.", en: "It always seems impossible until it's done." },
    added: "2026-10-10"
  },

  /* Poland */
  {
    id: "copernicus",
    name: { fa: "نیکلاس کوپرنیک", en: "Nicolaus Copernicus" },
    country: "poland", field: "science",
    born: 1473, died: 1543,
    summary: { fa: "ستاره‌شناس انقلاب علمی و ارائه‌کننده‌ی الگوی خورشیدمرکزی", en: "Astronomer who formulated the heliocentric model of the universe" },
    bio: {
      fa: ["کوپرنیک در کتاب گردش افلاک آسمانی زمین را از مرکزیت کیهان کنار زد و خورشید را در مرکز منظومه قرار داد."],
      en: ["Copernicus triggered the Scientific Revolution with De revolutionibus orbium coelestium."]
    },
    achievements: {
      fa: ["نظریه خورشیدمرکزی", "کتاب گردش افلاک آسمانی (۱۵۴۳)"],
      en: ["Heliocentric model", "On the Revolutions of Heavenly Spheres (1543)"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "marie-curie",
    name: { fa: "ماری کوری", en: "Marie Curie" },
    country: "poland", field: "science",
    born: 1867, died: 1934,
    summary: { fa: "کاشف رادیوم و پولونیوم؛ تنها برنده‌ی دو نوبل در دو رشته علمی متفاوت", en: "Pioneer in radioactivity, only person to win Nobel Prizes in two scientific fields" },
    bio: {
      fa: ["ماری اسکلودوفسکا کوری برنده نوبل فیزیک (۱۹۰۳) و نوبل شیمی (۱۹۱۱) برای کشف پرتوزایی بود."],
      en: ["Marie Curie discovered polonium and radium, pioneering mobile X-ray units during WWI."]
    },
    achievements: {
      fa: ["کشف رادیوم و پولونیوم", "جایزه نوبل فیزیک (۱۹۰۳) و شیمی (۱۹۱۱)"],
      en: ["Discovery of radium and polonium", "Nobel Prizes in Physics (1903) and Chemistry (1911)"]
    },
    quote: null,
    added: "2026-10-10"
  },

  /* Turkey */
  {
    id: "ataturk",
    name: { fa: "مصطفی کمال آتاتورک", en: "Mustafa Kemal Atatürk" },
    country: "turkey", field: "politics",
    born: 1881, died: 1938,
    summary: { fa: "بنیان‌گذار جمهوری مدرن ترکیه و رهبر اصلاحات پیشرو", en: "Founding father and first president of the Republic of Turkey" },
    bio: {
      fa: ["آتاتورک در نبرد گالیپولی درخشید، جنگ استقلال را پیروز شد و الفبای لاتین و نظام آموزشی مدرن را بنا نهاد."],
      en: ["Atatürk led the Turkish War of Independence and modernized the legal, cultural, and educational systems."]
    },
    achievements: {
      fa: ["تأسیس جمهوری ترکیه (۱۹۲۳)", "اصلاحات آموزشی و حقوق زنان"],
      en: ["Founding the Republic of Turkey", "Secular legal and educational reforms"]
    },
    quote: { fa: "صلح در خانه، صلح در جهان.", en: "Peace at home, peace in the world." },
    added: "2026-10-10"
  },
  {
    id: "rumi",
    name: { fa: "مولانا جلال‌الدین رومی", en: "Rumi" },
    country: "turkey", field: "arts",
    born: 1207, died: 1273,
    summary: { fa: "عارف و شاعر بزرگ مثنوی معنوی و دیوان شمس در قونیه", en: "Mystic poet of the Masnavi, universal voice of spiritual love" },
    bio: {
      fa: ["مولوی متولد بلخ و مقیم قونیه، با مثنوی معنوی پرفروش‌ترین شاعر معنوی جهان در هزاره نو شد."],
      en: ["Rumi's poetry transcends borders, teaching divine love and spiritual unity through the whirling dervishes."]
    },
    achievements: {
      fa: ["مثنوی معنوی", "دیوان شمس تبریزی"],
      en: ["The Masnavi", "Divan-e Shams"]
    },
    quote: { fa: "عشق آینه‌ی تجلی حق است.", en: "Let yourself be silently drawn by the strange pull of what you really love." },
    added: "2026-10-10"
  },

  /* Americas - Colombia & Venezuela */
  {
    id: "simon-bolivar",
    name: { fa: "سیمون بولیوار", en: "Simón Bolívar" },
    country: "venezuela", field: "politics",
    born: 1783, died: 1830,
    summary: { fa: "«رهایی‌بخش» آمریکای لاتین و پایه‌گذار کلمبیای بزرگ", en: "El Libertador, who freed Venezuela, Colombia, Ecuador, Peru, and Bolivia" },
    bio: {
      fa: ["بولیوار با نبردهای حماسی بویوکا و کارابوبو پنج ملت را از استعمار اسپانیا رهایی بخشید."],
      en: ["Bolívar's military campaigns liberated northern South America and envisioned continental unity."]
    },
    achievements: {
      fa: ["رهایی پنج کشور آمریکای جنوبی", "تأسیس کلمبیای بزرگ"],
      en: ["Liberation of northern South America", "Presidency of Gran Colombia"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "garcia-marquez",
    name: { fa: "گابریل گارسیا مارکز", en: "Gabriel García Márquez" },
    country: "colombia", field: "arts", era: "contemporary",
    born: 1927, died: 2014,
    summary: { fa: "استاد رئالیسم جادویی، خالق «صد سال تنهایی» و برنده نوبل ادبیات", en: "Master of magical realism, author of One Hundred Years of Solitude, Nobel laureate" },
    bio: {
      fa: ["مارکز با شهر خیالی ماکوندو و رمان صد سال تنهایی در ۱۹۸۲ جایزه نوبل ادبیات را از آن خود کرد."],
      en: ["Gabo enchanted the world with magical realism and won the 1982 Nobel Prize in Literature."]
    },
    achievements: {
      fa: ["صد سال تنهایی (۱۹۶۷)", "جایزه نوبل ادبیات (۱۹۸۲)"],
      en: ["One Hundred Years of Solitude (1967)", "Nobel Prize in Literature (1982)"]
    },
    quote: null,
    added: "2026-10-10"
  },

  /* Austria */
  {
    id: "mozart",
    name: { fa: "ولفگانگ آمادئوس موتسارت", en: "Wolfgang Amadeus Mozart" },
    country: "austria", field: "arts",
    born: 1756, died: 1791,
    summary: { fa: "نابغه کودک و اعجوبه‌ی موسیقی کلاسیک در سالزبورگ و وین", en: "Prolific and influential classical composer of over 600 masterworks" },
    bio: {
      fa: ["موتسارت با اپراهای فلوت سحرآمیز، دون ژوان و سمفونی شماره ۴۰ موسیقی را به اوج رساند."],
      en: ["Mozart composed symphonies, concertos, and operas that remain timeless pillars of Western music."]
    },
    achievements: {
      fa: ["اپرای فلوت سحرآمیز", "رکوییم در دمور"],
      en: ["The Magic Flute", "Requiem in D minor"]
    },
    quote: null,
    added: "2026-10-10"
  },

  /* Netherlands */
  {
    id: "rembrandt",
    name: { fa: "رامبراند وان راین", en: "Rembrandt van Rijn" },
    country: "netherlands", field: "arts",
    born: 1606, died: 1669,
    summary: { fa: "استاد نور و سایه در عصر طلایی نقاشی هلند، خالق «گشت شبانه»", en: "Master of light and shadow in the Dutch Golden Age, painter of The Night Watch" },
    bio: {
      fa: ["رامبراند با تکنیک شگفت‌انگیز کیاروسکورو (روشن و تاریک) و پرتره‌های عمیق روحی ماندگار شد."],
      en: ["Rembrandt is regarded as one of the greatest visual artists in the history of art."]
    },
    achievements: {
      fa: ["تابلوی گشت شبانه (۱۶۴۲)", "خودنگاره‌های روان‌شناختی"],
      en: ["The Night Watch (1642)", "Psychological self-portraits"]
    },
    quote: null,
    added: "2026-10-10"
  },
  {
    id: "van-gogh",
    name: { fa: "وینسنت ون گوگ", en: "Vincent van Gogh" },
    country: "netherlands", field: "arts",
    born: 1853, died: 1890,
    summary: { fa: "نقاش پرشور پسادریافت‌گری، خالق «شب پرستاره» و «گل‌های آفتابگردان»", en: "Post-Impressionist painter of The Starry Night and Sunflowers" },
    bio: {
      fa: ["ون گوگ با ضرب قلم‌موهای پرحرارت و رنگ‌های زنده مسیر هنر مدرن قرن بیستم را هموار ساخت."],
      en: ["Van Gogh's expressive canvases and dramatic colors laid the foundation for modern Expressionism."]
    },
    achievements: {
      fa: ["شب پرستاره (۱۸۸۹)", "گل‌های آفتابگردان"],
      en: ["The Starry Night (1889)", "Sunflowers"]
    },
    quote: null,
    added: "2026-10-10"
  }
];
