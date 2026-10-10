import { Country } from '../../types';

export const EUROPE_COUNTRIES: Country[] = [
  {
    id: "germany",
    name: { fa: "آلمان", en: "Germany" },
    flag: ["#000000", "#DD0000", "#FFCE00"],
    founded: 843,
    foundedNote: {
      fa: "قدمت آلمان در این سایت از سال ۸۴۳ میلادی حساب شده است؛ سالی که پیمان وردون امپراتوری کارولنژی را میان سه وارث تقسیم کرد و بخش شرقی آن به لویی ژرمنی رسید؛ این بخش بعدها هسته‌ی آلمان شد.",
      en: "On this site Germany’s age is counted from 843 CE, the year the Treaty of Verdun divided the Carolingian Empire among three heirs; its eastern part (East Francia) gradually became the core of Germany."
    },
    summary: {
      fa: "کشوری در قلب اروپا با تاریخی از قبایل ژرمن و امپراتوری مقدس روم تا اتحاد دوباره.",
      en: "A country in the heart of Europe, with a history from Germanic tribes and the Holy Roman Empire to reunification."
    },
    facts: {
      capital: { fa: "برلین", en: "Berlin" },
      language: { fa: "آلمانی", en: "German" },
      population: { fa: "حدود ۸۴ میلیون نفر", en: "About 84 million" }
    },
    overview: {
      fa: [
        "آلمان کشوری در قلب اروپاست. تاریخ آن از قبایل ژرمن و امپراتوری فرانک‌ها آغاز می‌شود، قرن‌ها در قالب امپراتوری مقدس روم و صدها قلمرو کوچک و بزرگ ادامه می‌یابد و در سال ۱۸۷۱ به یک دولت واحد می‌رسد.",
        "قرن بیستم برای آلمان دوره‌ی شکست در جنگ جهانی اول، حکومت نازی‌ها و جنگ جهانی دوم، تقسیم کشور به دو دولت و سرانجام اتحاد دوباره در سال ۱۹۹۰ بود."
      ],
      en: [
        "Germany lies in the heart of Europe. Its history begins with Germanic tribes and the Frankish realm, runs for centuries through the Holy Roman Empire and hundreds of small and large territories, and reaches a single state in 1871.",
        "The twentieth century brought defeat in the First World War, Nazi rule and the Second World War, the division of the country into two states, and finally reunification in 1990."
      ]
    },
    sections: [
      {
        id: "origins",
        title: { fa: "ریشه‌ها: ژرمن‌ها و روم", en: "Roots: the Germanic tribes and Rome" },
        text: {
          fa: [
            "رومی‌ها قبایلی را که در شرق رود راین و شمال رود دانوب زندگی می‌کردند «ژرمن» می‌نامیدند. در سال ۹ میلادی ائتلافی از این قبایل به رهبری آرمینیوس در جنگل توتوبورگ سه لژیون رومی را نابود کرد."
          ],
          en: [
            "The Romans used the name ‘Germani’ for the tribes living east of the Rhine and north of the Danube. In 9 CE a coalition of tribes led by Arminius destroyed three Roman legions in the Teutoburg Forest."
          ]
        }
      },
      {
        id: "empire",
        title: { fa: "از فرانک‌ها تا امپراتوری مقدس روم", en: "From the Franks to the Holy Roman Empire" },
        text: {
          fa: [
            "در سال ۹۶۲ اتو اول در رم تاج امپراتوری گرفت و این تاریخ را آغاز سنتی امپراتوری مقدس روم می‌دانند، امپراتوری‌ای که تا ۱۸۰۶ دوام آورد."
          ],
          en: [
            "In 962 Otto I was crowned emperor in Rome, traditionally seen as the beginning of the Holy Roman Empire, which lasted until 1806."
          ]
        }
      },
      {
        id: "unification",
        title: { fa: "راه اتحاد و دوران مدرن", en: "Unification and the Modern Era" },
        text: {
          fa: [
            "در ۱۸ ژانویه‌ی ۱۸۷۱ در کاخ ورسای ویلهلم اول امپراتور آلمان اعلام شد. بیسمارک صدراعظم بود. پس از تقسیم در دوران جنگ سرد، دیوار برلین در ۱۹۸۹ فروریخت و اتحاد دوباره در ۳ اکتبر ۱۹۹۰ رقم خورد."
          ],
          en: [
            "On 18 January 1871 at Versailles, Wilhelm I was proclaimed German Emperor. After Cold War division, the Berlin Wall fell in 1989 and reunification was realized on 3 October 1990."
          ]
        }
      }
    ],
    timeline: [
      { year: 9, title: { fa: "نبرد جنگل توتوبورگ", en: "Battle of the Teutoburg Forest" }, text: { fa: "ائتلافی از قبایل ژرمن سه لژیون رومی را نابود کرد.", en: "A coalition of Germanic tribes destroyed three Roman legions." } },
      { year: 843, title: { fa: "پیمان وردون", en: "Treaty of Verdun" }, text: { fa: "امپراتوری کارولنژی تقسیم شد و بخش شرقی هسته‌ی آلمان شد.", en: "The Carolingian Empire was divided; East Francia became the core of Germany." } },
      { year: 962, title: { fa: "آغاز امپراتوری مقدس روم", en: "Holy Roman Empire" }, text: { fa: "اتو اول در رم تاج‌گذاری کرد.", en: "Otto I was crowned emperor in Rome." } },
      { year: 1517, title: { fa: "اصلاحات دینی لوتر", en: "Luther's Reformation" }, text: { fa: "لوتر ۹۵ تز خود را منتشر کرد.", en: "Luther posted his Ninety-five Theses." } },
      { year: 1871, title: { fa: "تأسیس امپراتوری آلمان", en: "German Empire Founded" }, text: { fa: "اتحاد آلمان به رهبری بیسمارک شکل گرفت.", en: "German unification was achieved under Bismarck." } },
      { year: 1989, title: { fa: "سقوط دیوار برلین", en: "Fall of the Berlin Wall" }, text: { fa: "مرزها در ۹ نوامبر گشوده شد.", en: "Borders opened on 9 November." } },
      { year: 1990, title: { fa: "اتحاد دوباره‌ی آلمان", en: "German Reunification" }, text: { fa: "در ۳ اکتبر دو آلمان یکپارچه شدند.", en: "On 3 October Germany was reunified." } }
    ],
    added: "2026-10-06"
  },
  {
    id: "italy",
    name: { fa: "ایتالیا", en: "Italy" },
    flag: ["#009246", "#FFFFFF", "#CE2B37"],
    flagDirection: "vertical",
    founded: 1861,
    foundedNote: {
      fa: "قدمت ایتالیا در این سایت از سال ۱۸۶۱ میلادی حساب شده است؛ سالی که در ۱۷ مارس پادشاهی ایتالیا به‌عنوان نخستین دولت واحد شبه‌جزیره اعلام شد. تاریخ سرزمین رم البته به ۷۵۳ پیش از میلاد بازمی‌گردد.",
      en: "On this site Italy’s age is counted from 1861, the year the Kingdom of Italy was proclaimed on 17 March. Traditional Roman history dates to 753 BCE."
    },
    summary: {
      fa: "سرزمین روم باستان، رنسانس و هنر؛ مهد شکوفایی فرهنگ و معماری جهان مدیترانه.",
      en: "The land of ancient Rome, the Renaissance and art; a cradle of Mediterranean culture."
    },
    facts: {
      capital: { fa: "رم", en: "Rome" },
      language: { fa: "ایتالیایی", en: "Italian" },
      population: { fa: "حدود ۵۹ میلیون نفر", en: "About 59 million" }
    },
    overview: {
      fa: [
        "ایتالیا شبه‌جزیره‌ای در جنوب اروپاست که قرن‌ها قلب امپراتوری روم بود و سپس در عصر رنسانس شهرهایی چون فلورانس و ونیز کانون هنر و اندیشه‌ی جهان شدند.",
        "در قرن نوزدهم جنبش ریسورجیمنتو به رهبری کاوور و گاریبالدی کشور را در ۱۸۶۱ متحد ساخت. پس از دوران فاشیسم، همه‌پرسی ۱۹۴۶ جمهوری ایتالیا را پی ریخت."
      ],
      en: [
        "Italy is a southern European peninsula that was the heart of the Roman Empire, later blossoming into Renaissance city-states such as Florence and Venice.",
        "In the 19th century the Risorgimento led by Cavour and Garibaldi united the nation in 1861. Following fascism, the 1946 referendum established the Italian Republic."
      ]
    },
    sections: [
      {
        id: "rome-renaissance",
        title: { fa: "از روم باستان تا رنسانس", en: "From Ancient Rome to the Renaissance" },
        text: {
          fa: [
            "رم باستان از جمهوری به امپراتوری جهان‌گستر بدل شد و حقوق، راه و معماری را سامان داد. در سده‌های ۱۴ و ۱۵ میلادی، رنسانس در فلورانس دانش و هنر را متحول کرد."
          ],
          en: [
            "Ancient Rome evolved from Republic to world empire, shaping law and architecture. In the 14th–15th centuries, the Renaissance in Florence revolutionized European art and thought."
          ]
        }
      }
    ],
    timeline: [
      { year: -753, title: { fa: "بنیان‌گذاری سنتی رم", en: "Founding of Rome" }, text: { fa: "بنا به سنت، شهر رم پی‌ریزی شد.", en: "Traditional founding date of Rome." } },
      { year: -27, title: { fa: "آغاز امپراتوری روم", en: "Roman Empire Begins" }, text: { fa: "آگوستوس نخستین امپراتور روم شد.", en: "Augustus became the first Roman Emperor." } },
      { year: 1861, title: { fa: "اعلام پادشاهی ایتالیا", en: "Kingdom of Italy" }, text: { fa: "اتحاد ایتالیا رسماً تحقق یافت.", en: "Italy was officially united." } },
      { year: 1946, title: { fa: "تأسیس جمهوری", en: "Republic Proclaimed" }, text: { fa: "مردم در همه‌پرسی به جمهوری رأی دادند.", en: "Italians voted for a republic." } }
    ],
    added: "2026-10-08"
  },
  {
    id: "spain",
    name: { fa: "اسپانیا", en: "Spain" },
    flag: ["#AA151B", "#F1BF00", "#F1BF00", "#AA151B"],
    founded: 1479,
    foundedNote: {
      fa: "قدمت اسپانیا از سال ۱۴۷۹ با اتحاد پادشاهی‌های کاستیل و آراگون به رهبری ایزابل و فردیناند محاسبه شده است.",
      en: "On this site Spain's age is counted from 1479, when Castile and Aragon united under Ferdinand and Isabella."
    },
    summary: {
      fa: "سرزمین تمدن‌های ایبری، روم، اندلس اسلامی و عصر اکتشافات جهانی.",
      en: "A land of Iberian, Roman, and Andalusian heritage that forged a global empire."
    },
    facts: {
      capital: { fa: "مادرید", en: "Madrid" },
      language: { fa: "اسپانیایی", en: "Spanish" },
      population: { fa: "حدود ۴۸ میلیون نفر", en: "About 48 million" }
    },
    overview: {
      fa: [
        "اسپانیا با پیشینه‌ای پرفراز و نشیب از حضور رومی‌ها، حکومت چندصدساله‌ی مسلمانان در اندلس، و اتحاد پادشاهان کاتولیک در ۱۴۷۹ شکل گرفت.",
        "سال ۱۴۹۲ سال تسخیر گرانادا و سفر کریستف کلمب به قاره آمریکا بود که اسپانیا را به یکی از گسترده‌ترین امپراتوری‌های تاریخ بدل کرد."
      ],
      en: [
        "Spain was forged through Roman rule, centuries of Islamic al-Andalus, and the union of the Catholic Monarchs in 1479.",
        "The year 1492 marked both the fall of Granada and Columbus's journey, launching Spain's globe-spanning empire."
      ]
    },
    timeline: [
      { year: 711, title: { fa: "آغاز اندلس اسلامی", en: "Start of al-Andalus" }, text: { fa: "طارق بن زیاد وارد شبه‌جزیره شد.", en: "Muslim rule began across Iberia." } },
      { year: 1479, title: { fa: "اتحاد کاستیل و آراگون", en: "Union of Crowns" }, text: { fa: "پایه‌گذاری پادشاهی اسپانیای متحد.", en: "The foundations of modern Spain were laid." } },
      { year: 1492, title: { fa: "فتح گرانادا و سفر کلمب", en: "Granada & Columbus" }, text: { fa: "پایان حکومت مسلمانان و آغاز عصر نو.", en: "Fall of Granada and voyage to America." } },
      { year: 1978, title: { fa: "قانون اساسی دموکراتیک", en: "Constitution of 1978" }, text: { fa: "گذار مسالمت‌آمیز به دموکراسی پارلمانی.", en: "Democratic constitutional monarchy established." } }
    ],
    added: "2026-10-08"
  },
  {
    id: "france",
    name: { fa: "فرانسه", en: "France" },
    flag: ["#0055A4", "#FFFFFF", "#EF4135"],
    flagDirection: "vertical",
    founded: 843,
    foundedNote: {
      fa: "قدمت فرانسه در این سایت از سال ۸۴۳ میلادی و پیمان وردون (فرانکیای باختری به پادشاهی شارل کچل) حساب شده است.",
      en: "France’s age is counted from the 843 Treaty of Verdun, establishing West Francia under Charles the Bald."
    },
    summary: {
      fa: "از گال‌ها و فرانک‌ها تا انقلاب کبیر ۱۷۸۹؛ مهد حقوق شهروندی، روشنگری و فرهنگ جهانی.",
      en: "From the Gauls and Franks to the 1789 Revolution; champion of liberty, enlightenment, and culture."
    },
    facts: {
      capital: { fa: "پاریس", en: "Paris" },
      language: { fa: "فرانسوی", en: "French" },
      population: { fa: "حدود ۶۸ میلیون نفر", en: "About 68 million" }
    },
    overview: {
      fa: [
        "فرانسه از سپیده‌دم قرون وسطی و حکومت کاپتی‌ها نقشی محوری در تاریخ اروپا ایفا کرده است.",
        "انقلاب فرانسه در ۱۷۸۹ نظم پادشاهی مطلقه را برچید و اصول آزادی، برابری و برادری را به سراسر گیتی رساند."
      ],
      en: [
        "France has played a central role in European civilization since the Capetian medieval era.",
        "The French Revolution of 1789 abolished the Ancien Régime, championing liberty, equality, and fraternity worldwide."
      ]
    },
    timeline: [
      { year: 486, title: { fa: "پیروزی کلوویس", en: "Victory of Clovis" }, text: { fa: "کلوویس پادشاهی فرانک‌ها را پایه‌گذاری کرد.", en: "Clovis unified the Frankish realm." } },
      { year: 843, title: { fa: "پیمان وردون", en: "Treaty of Verdun" }, text: { fa: "پیدایش فرانکیای غربی، هسته فرانسه.", en: "Birth of West Francia." } },
      { year: 1789, title: { fa: "انقلاب کبیر فرانسه", en: "French Revolution" }, text: { fa: "تسخیر باستیل و اعلام حقوق بشر.", en: "Storming of the Bastille and declaration of human rights." } },
      { year: 1958, title: { fa: "تأسیس جمهوری پنجم", en: "Fifth Republic" }, text: { fa: "قانون اساسی جدید با رهبری دوگل تصویب شد.", en: "Charles de Gaulle founded the Fifth Republic." } }
    ],
    added: "2026-10-08"
  },
  {
    id: "united-kingdom",
    name: { fa: "بریتانیا", en: "United Kingdom" },
    flag: ["#012169"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'><clipPath id='s'><path d='M0,0 v30 h60 v-30 z'/></clipPath><clipPath id='t'><path d='M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z'/></clipPath><g clip-path='url(%23s)'><path d='M0,0 v30 h60 v-30 z' fill='%23012169'/><path d='M0,0 L60,30 M60,0 L0,30' stroke='%23fff' stroke-width='6'/><path d='M0,0 L60,30 M60,0 L0,30' clip-path='url(%23t)' stroke='%23C8102E' stroke-width='4'/><path d='M30,0 v30 M0,15 h60' stroke='%23fff' stroke-width='10'/><path d='M30,0 v30 M0,15 h60' stroke='%23C8102E' stroke-width='6'/></g></svg>",
    founded: 1707,
    foundedNote: {
      fa: "قدمت پادشاهی متحد در این سایت از سال ۱۷۰۷ با تصویب قوانین اتحاد میان انگلستان و اسکاتلند محاسبه شده است.",
      en: "Counted from the 1707 Acts of Union uniting the kingdoms of England and Scotland into Great Britain."
    },
    summary: {
      fa: "خاستگاه دموکراسی پارلمانی، انقلاب صنعتی و ادبیات جهان‌گستر انگلیسی.",
      en: "Birthplace of parliamentary democracy, the Industrial Revolution, and Shakespeare."
    },
    facts: {
      capital: { fa: "لندن", en: "London" },
      language: { fa: "انگلیسی", en: "English" },
      population: { fa: "حدود ۶۸ میلیون نفر", en: "About 68 million" }
    },
    overview: {
      fa: [
        "پادشاهی بریتانیای کبیر متشکل از انگلستان، اسکاتلند، ولز و ایرلند شمالی است. منشور کبیر در ۱۲۱۵ و انقلاب صنعتی در سده‌ی هجدهم جهان را تغییر دادند."
      ],
      en: [
        "The United Kingdom comprises England, Scotland, Wales, and Northern Ireland. Magna Carta (1215) and the Industrial Revolution shaped modern global governance and technology."
      ]
    },
    timeline: [
      { year: 1066, title: { fa: "فتح نورمن‌ها", en: "Norman Conquest" }, text: { fa: "ویلیام فاتح در نبرد هستینگز پیروز شد.", en: "William the Conqueror won at Hastings." } },
      { year: 1215, title: { fa: "منشور کبیر (مگنا کارتا)", en: "Magna Carta" }, text: { fa: "تحدید اختیارات پادشاه به نفع قانون.", en: "Rule of law established." } },
      { year: 1707, title: { fa: "قوانین اتحاد", en: "Acts of Union" }, text: { fa: "اتحاد انگلستان و اسکاتلند.", en: "Union of England and Scotland." } },
      { year: 1945, title: { fa: "پایان جنگ دوم جهانی", en: "End of WWII" }, text: { fa: "آغاز عصر دولت رفاه و نظام خدمات درمانی.", en: "Founding of the NHS and modern welfare state." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "russia",
    name: { fa: "روسیه", en: "Russia" },
    flag: ["#FFFFFF", "#0039A6", "#D52B1E"],
    founded: 862,
    foundedNote: {
      fa: "قدمت روسیه سنتاً از سال ۸۶۲ میلادی با ورود روریک به نووگورود و پایه‌گذاری روس کی‌یف محاسبه می‌شود.",
      en: "Counted from 862 CE when Rurik established rule at Novgorod, beginning the Kievan Rus lineage."
    },
    summary: {
      fa: "پهناورترین کشور جهان؛ پیونددهنده‌ی آسیا و اروپا با تاریخی از تزارها، شوروی و فرهنگ غنی اسلاوی.",
      en: "The world's largest country, bridging Europe and Asia with a profound imperial and literary legacy."
    },
    facts: {
      capital: { fa: "مسکو", en: "Moscow" },
      language: { fa: "روسی", en: "Russian" },
      population: { fa: "حدود ۱۴۴ میلیون نفر", en: "About 144 million" }
    },
    overview: {
      fa: [
        "روسیه تمدنی ریشه‌دار در دشت‌های اوراسیا است که از ولایت‌های روس کی‌یف و پادشاهی مسکووی آغاز شد، در عصر پتر کبیر به امپراتوری اروپایی بدل شد و در قرن بیستم کانون اتحاد جماهیر شوروی بود."
      ],
      en: [
        "Russia's statehood emerged from Kievan Rus and the Grand Duchy of Moscow, transforming into a vast Eurasian empire under Peter the Great and later the Soviet Union."
      ]
    },
    timeline: [
      { year: 862, title: { fa: "آغاز دودمان روریک", en: "Founding of Rus" }, text: { fa: "پایه‌گذاری حکومت اسلاوهای شرقی در نووگورود.", en: "Rurik arrived in Novgorod." } },
      { year: 988, title: { fa: "مسیحی‌شدن روس", en: "Christianization of Rus" }, text: { fa: "ولادیمیر کبیر آیین ارتدوکس را پذیرفت.", en: "Vladimir the Great adopted Christianity." } },
      { year: 1703, title: { fa: "بنیان‌گذاری سن پترزبورگ", en: "Founding of St. Petersburg" }, text: { fa: "پتر کبیر پنجره‌ای رو به اروپا گشود.", en: "Peter the Great opened a window to Europe." } },
      { year: 1917, title: { fa: "انقلاب اکتبر", en: "October Revolution" }, text: { fa: "پایان حکومت تزارها و برپایی دولت سوسیالیستی.", en: "Bolsheviks took power, founding the Soviet state." } },
      { year: 1991, title: { fa: "فروپاشی اتحاد شوروی", en: "Dissolution of USSR" }, text: { fa: "پیدایش فدراسیون روسیه‌ی نوین.", en: "Modern Russian Federation emerged." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "greece",
    name: { fa: "یونان", en: "Greece" },
    flag: ["#005BAE", "#FFFFFF", "#005BAE", "#FFFFFF", "#005BAE"],
    founded: -800,
    foundedNote: {
      fa: "قدمت تمدنی یونان از آغاز عصر کهن پولیس‌ها (دولت‌شهرها) در حدود ۸۰۰ پیش از میلاد و المپیک باستان (۷۷۶ پ.م.) حساب شده است؛ استقلال نوین یونان در ۱۸۲۱ رخ داد.",
      en: "Counted from c. 800 BCE with the emergence of the Archaic polis and ancient Olympics (776 BCE); modern Greek independence dates to 1821."
    },
    summary: {
      fa: "گهواره‌ی دموکراسی، فلسفه‌ی باستان، بازی‌های المپیک و ادبیات غرب.",
      en: "Cradle of Western democracy, classical philosophy, drama, and the Olympic Games."
    },
    facts: {
      capital: { fa: "آتن", en: "Athens" },
      language: { fa: "یونانی", en: "Greek" },
      population: { fa: "حدود ۱۰٫۴ میلیون نفر", en: "About 10.4 million" }
    },
    overview: {
      fa: [
        "یونان باستان مهد دموکراسی آتن، اندیشه‌های سقراط و افلاطون و نبردهای مشهور ماراتن و ترموپیل بود. در سده‌های بعد در قلب امپراتوری بیزانس شکوفا شد و در ۱۸۲۱ استقلال خود را بازیافت."
      ],
      en: [
        "Ancient Greece gave birth to Athenian democracy, Socratic philosophy, and epic literature, later flourishing as Byzantium's core before modern independence in 1821."
      ]
    },
    timeline: [
      { year: -776, title: { fa: "نخستین المپیک باستان", en: "First Olympic Games" }, text: { fa: "آغاز تاریخ مدون تقویم یونان باستان.", en: "First recorded Olympic contest at Olympia." } },
      { year: -508, title: { fa: "اصلاحات کلئیستنس", en: "Democracy in Athens" }, text: { fa: "پایه‌ریزی دموکراسی در آتن.", en: "Cleisthenes established democracy." } },
      { year: 1821, title: { fa: "آغاز جنگ استقلال", en: "Greek War of Independence" }, text: { fa: "قیام علیه امپراتوری عثمانی.", en: "Rebellion launched for sovereignty." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "portugal",
    name: { fa: "پرتغال", en: "Portugal" },
    flag: ["#006600", "#FF0000"],
    flagDirection: "vertical",
    founded: 1143,
    foundedNote: {
      fa: "قدمت پرتغال از سال ۱۱۴۳ و پیمان سامورا که در آن آلفونسو اول پادشاه کشور مستقل پرتغال شناخته شد حساب می‌شود.",
      en: "Counted from 1143 when the Treaty of Zamora recognized Afonso Henriques as the first King of Portugal."
    },
    summary: {
      fa: "پیشگام دریانوردی عصر اکتشافات بزرگ دریایی و کهن‌ترین دولت-ملت با مرزهای باثبات در اروپا.",
      en: "Pioneer of maritime exploration and Europe's oldest continuous nation-state with stable borders."
    },
    facts: {
      capital: { fa: "لیسبون", en: "Lisbon" },
      language: { fa: "پرتغالی", en: "Portuguese" },
      population: { fa: "حدود ۱۰٫۳ میلیون نفر", en: "About 10.3 million" }
    },
    overview: {
      fa: [
        "پرتغال از سده‌ی پانزدهم با دریانوردانی چون واسکو دا گاما و ماژلان راه‌های دریایی به هند، آفریقا و برزیل را گشود و امپراتوری نخستین جهانی را ساخت."
      ],
      en: [
        "During the Age of Discovery, Portuguese navigators charted routes to India, Brazil, and East Asia, establishing the first global sea empire."
      ]
    },
    timeline: [
      { year: 1143, title: { fa: "پیمان سامورا", en: "Treaty of Zamora" }, text: { fa: "به رسمیت شناختن استقلال پادشاهی پرتغال.", en: "Independence formally recognized." } },
      { year: 1498, title: { fa: "سفر واسکو دا گاما به هند", en: "Vasco da Gama reaches India" }, text: { fa: "گشایش مسیر دریایی به آسیا.", en: "Sea route to India established." } },
      { year: 1974, title: { fa: "انقلاب میخک", en: "Carnation Revolution" }, text: { fa: "گذار دموکراتیک و پایان حکومت استبدادی.", en: "Peaceful transition to democracy." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "netherlands",
    name: { fa: "هلند", en: "Netherlands" },
    flag: ["#AE1C28", "#FFFFFF", "#21468B"],
    founded: 1581,
    foundedNote: {
      fa: "قدمت هلند از سال ۱۵۸۱ میلادی و صدور اعلامیه خلع ید (استقلال از امپراتوری اسپانیا) حساب می‌شود.",
      en: "Counted from 1581 and the Act of Abjuration declaring independence from the Spanish crown."
    },
    summary: {
      fa: "سرزمین کانال‌ها، نوآوری‌های مالی، هنر عصر طلایی و مدیریت آب در کرانه‌های دریای شمال.",
      en: "Pioneer of maritime commerce, financial innovation, and Dutch Golden Age art."
    },
    facts: {
      capital: { fa: "آمستردام", en: "Amsterdam" },
      language: { fa: "هلندی", en: "Dutch" },
      population: { fa: "حدود ۱۸ میلیون نفر", en: "About 18 million" }
    },
    overview: {
      fa: [
        "هلند در قرن هفدهم به قدرت برتر دریانوردی و تجارت بین‌الملل تبدیل شد و نقاشانی چون رامبراند و ورمیر فرهنگ آن را درخشان ساختند."
      ],
      en: [
        "In the 17th century the Dutch Republic was a global trading and cultural powerhouse, giving birth to Rembrandt, Vermeer, and modern corporate commerce."
      ]
    },
    timeline: [
      { year: 1581, title: { fa: "اعلام استقلال هلند", en: "Act of Abjuration" }, text: { fa: "هفت استان متحد اعلام استقلال کردند.", en: "Declaration of Dutch independence." } },
      { year: 1602, title: { fa: "تأسیس شرکت هند شرقی هلند", en: "Dutch East India Company" }, text: { fa: "نخستین شرکت سهامی عام جهان.", en: "First publicly traded multinational." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "switzerland",
    name: { fa: "سوئیس", en: "Switzerland" },
    flag: ["#D52B1E"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23D52B1E'/><path d='M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z' fill='white'/></svg>",
    founded: 1291,
    foundedNote: {
      fa: "قدمت کنفدراسیون سوئیس از اول اوت ۱۲۹۱ با امضای منشور فدرال میان سه کانتون نخستین در کوه‌های آلپ حساب می‌شود.",
      en: "Counted from 1 August 1291, when the Federal Charter was agreed between Uri, Schwyz, and Unterwalden."
    },
    summary: {
      fa: "کنفدراسیون بی‌طرف آلپی با نظام دموکراسی مستقیم و کانون دیپلماسی و سازمان‌های بین‌المللی.",
      en: "An alpine confederation renowned for armed neutrality, direct democracy, and global diplomacy."
    },
    facts: {
      capital: { fa: "برن", en: "Bern" },
      language: { fa: "آلمانی، فرانسوی، ایتالیایی، رومانش", en: "German, French, Italian, Romansh" },
      population: { fa: "حدود ۸٫۹ میلیون نفر", en: "About 8.9 million" }
    },
    overview: {
      fa: [
        "سوئیس با موقعیت جغرافیایی منحصربه‌فرد در کوه‌های آلپ، قرن‌هاست بی‌طرفی فعال خود را حفظ کرده و نماد ثبات، بانکداری و صلح است."
      ],
      en: [
        "Guarded by the Alps, Switzerland developed a unique model of multilingual direct democracy and sustained armed neutrality."
      ]
    },
    timeline: [
      { year: 1291, title: { fa: "منشور فدرال سوئیس", en: "Federal Charter of 1291" }, text: { fa: "پیمان همبستگی کانتون‌ها.", en: "Founding pact of the Swiss Confederation." } },
      { year: 1815, title: { fa: "تثبیت بی‌طرفی دائمی", en: "Permanent Neutrality" }, text: { fa: "کنگره وین بی‌طرفی دائمی سوئیس را پذیرفت.", en: "Congress of Vienna recognized Swiss neutrality." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "austria",
    name: { fa: "اتریش", en: "Austria" },
    flag: ["#ED2939", "#FFFFFF", "#ED2939"],
    founded: 996,
    foundedNote: {
      fa: "قدمت اتریش از سال ۹۹۶ میلادی و نخستین سند تاریخی که نام اوستاریچی (Ostarrîchi) در آن ثبت شده حساب می‌شود.",
      en: "Counted from 996 CE, the first recorded mention of Ostarrîchi in an imperial document."
    },
    summary: {
      fa: "کانال اصلی تاریخ اروپای مرکزی، خاستگاه خاندان هابسبورگ و پایتخت جهانی موسیقی کلاسیک.",
      en: "Heartland of the Habsburg monarchy and the global epicenter of classical music."
    },
    facts: {
      capital: { fa: "وین", en: "Vienna" },
      language: { fa: "آلمانی", en: "German" },
      population: { fa: "حدود ۹٫۱ میلیون نفر", en: "About 9.1 million" }
    },
    overview: {
      fa: [
        "وین برای سده‌ها پایتخت یکی از بزرگ‌ترین امپراتوری‌های اروپا بود و میزبان نوابغی چون موتسارت، بتهوون و شوبرت شد."
      ],
      en: [
        "Austria stood at the core of the Holy Roman and Austro-Hungarian empires, enriching world culture with classical music and philosophy."
      ]
    },
    timeline: [
      { year: 996, title: { fa: "سند اوستاریچی", en: "Ostarrîchi Document" }, text: { fa: "نخستین ذکر نام تاریخی اتریش.", en: "First historic record of Austria." } },
      { year: 1867, title: { fa: "امپراتوری اتریش-مجارستان", en: "Austro-Hungarian Empire" }, text: { fa: "سازش دوجانبه در قلب اروپا.", en: "Dual monarchy established." } },
      { year: 1955, title: { fa: "پیمان دولت اتریش", en: "State Treaty of 1955" }, text: { fa: "بازپس‌گیری استقلال و استقرار بی‌طرفی.", en: "Full sovereignty restored with neutrality." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "sweden",
    name: { fa: "سوئد", en: "Sweden" },
    flag: ["#006AA7"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'><rect width='16' height='10' fill='%23006AA7'/><rect x='5' width='2' height='10' fill='%23FECC00'/><rect y='4' width='16' height='2' fill='%23FECC00'/></svg>",
    founded: 970,
    foundedNote: {
      fa: "قدمت پادشاهی سوئد سنتاً از پادشاهی اریک پیروزمند در حدود ۹۷۰ میلادی محاسبه می‌شود.",
      en: "Traditionally counted from Eric the Victorious around 970 CE, uniting Svealand and Götaland."
    },
    summary: {
      fa: "کشوری اسکاندیناوی با گذشته‌ی وایکینگی، امپراتوری سده‌ی ۱۷، جایزه‌ی نوبل و جامعه‌ی رفاه پیشرفته.",
      en: "Scandinavian land of Norse heritage, 17th-century empire, Nobel prizes, and innovation."
    },
    facts: {
      capital: { fa: "استکهلم", en: "Stockholm" },
      language: { fa: "سوئدی", en: "Swedish" },
      population: { fa: "حدود ۱۰٫۵ میلیون نفر", en: "About 10.5 million" }
    },
    overview: {
      fa: [
        "سوئد از دوران وایکینگ‌ها و عصر گوستاو آدولف به قدرت بزرگ بالتیک بدل شد و در دویست سال اخیر در صلح و رفاه زیسته است."
      ],
      en: [
        "From Viking seafarers to a Baltic powerhouse under Gustavus Adolphus, Sweden evolved into a beacon of social welfare and high technology."
      ]
    },
    timeline: [
      { year: 970, title: { fa: "پادشاهی اریک پیروزمند", en: "Reign of Eric the Victorious" }, text: { fa: "یکپارچه‌سازی قبایل سوئد.", en: "Consolidation of the Swedish kingdom." } },
      { year: 1523, title: { fa: "تاج‌گذاری گوستاو واسا", en: "Gustav Vasa crowned" }, text: { fa: "پایان اتحاد کالمار و استقلال مدرن سوئد.", en: "Sweden left the Kalmar Union." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "norway",
    name: { fa: "نروژ", en: "Norway" },
    flag: ["#BA0C2F"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 16'><rect width='22' height='16' fill='%23BA0C2F'/><path d='M0 8h22M8 0v16' stroke='white' stroke-width='4'/><path d='M0 8h22M8 0v16' stroke='%2300205B' stroke-width='2'/></svg>",
    founded: 872,
    foundedNote: {
      fa: "قدمت نروژ از نبرد هافرس‌فیورد در سال ۸۷۲ میلادی که در آن هارالد زیباموی پادشاهی یکپارچه نروژ را پی‌ریخت حساب می‌شود.",
      en: "Counted from the Battle of Hafrsfjord in 872 CE when Harald Fairhair first unified Norway."
    },
    summary: {
      fa: "سرزمین فیوردهای باشکوه، دریانوردان وایکینگ، کاوشگران قطبی و بالاترین شاخص‌های توسعه انسانی.",
      en: "Fabled land of fjords, Norse explorers, and preeminent human development."
    },
    facts: {
      capital: { fa: "اسلو", en: "Oslo" },
      language: { fa: "نروژی", en: "Norwegian" },
      population: { fa: "حدود ۵٫۵ میلیون نفر", en: "About 5.5 million" }
    },
    overview: {
      fa: [
        "نروژ در سواحل اقیانوس اطلس شمالی، با میراثی از دریانوردی کهن تا کشف قطب جنوب و نفت دریای شمال، یکی از موفق‌ترین جوامع مدرن است."
      ],
      en: [
        "Famed for fjords and maritime resilience, Norway boasts rich traditions from Viking explorations to modern global energy leadership."
      ]
    },
    timeline: [
      { year: 872, title: { fa: "نبرد هافرس‌فیورد", en: "Battle of Hafrsfjord" }, text: { fa: "اتحاد نروژ به دست هارالد زیباموی.", en: "Unification under Harald Fairhair." } },
      { year: 1905, title: { fa: "انحلال اتحاد با سوئد", en: "Independence from Sweden" }, text: { fa: "استقلال کامل و بازگشت پادشاهی مستقل.", en: "Full sovereignty restored." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "denmark",
    name: { fa: "دانمارک", en: "Denmark" },
    flag: ["#C8102E"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 37 28'><rect width='37' height='28' fill='%23C8102E'/><path d='M0 14h37M14 0v28' stroke='white' stroke-width='4'/></svg>",
    founded: 965,
    foundedNote: {
      fa: "قدمت دانمارک از سنگ‌نبشته‌ی جلینگ در حدود ۹۶۵ میلادی به فرمان هارالد بلوتوث که دانمارک را متحد و مسیحی کرد محاسبه می‌شود.",
      en: "Counted from the Jelling Stone c. 965 CE, recording Harald Bluetooth's unification of Denmark."
    },
    summary: {
      fa: "کهن‌ترین پادشاهی پیوسته در اروپا با پرچم باستانی دانه‌برو، سرزمین هانس کریستین اندرسن.",
      en: "Europe's oldest continuous monarchy, home of the legendary Dannebrog and Hans Christian Andersen."
    },
    facts: {
      capital: { fa: "کپنهاگ", en: "Copenhagen" },
      language: { fa: "دانمارکی", en: "Danish" },
      population: { fa: "حدود ۵٫۹ میلیون نفر", en: "About 5.9 million" }
    },
    overview: {
      fa: [
        "دانمارک پیوندگاه اسکاندیناوی و اروپای قاره‌ای است و پرچم آن یکی از قدیمی‌ترین نمادهای ملی مورد استفاده در جهان است."
      ],
      en: [
        "Bridging Scandinavia and mainland Europe, Denmark hosts the world's oldest continuous monarchy and a model green economy."
      ]
    },
    timeline: [
      { year: 965, title: { fa: "سنگ‌های جلینگ", en: "Jelling Stones" }, text: { fa: "اعلام اتحاد دانمارک به دست هارالد بلوتوث.", en: "Unification and Christianization under Harald Bluetooth." } },
      { year: 1849, title: { fa: "قانون اساسی دانمارک", en: "Constitution of 1849" }, text: { fa: "تأسیس پادشاهی مشروطه.", en: "Establishment of constitutional monarchy." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "finland",
    name: { fa: "فنلاند", en: "Finland" },
    flag: ["#FFFFFF"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 11'><rect width='18' height='11' fill='white'/><path d='M0 5.5h18M6.5 0v11' stroke='%23003580' stroke-width='3'/></svg>",
    founded: 1917,
    foundedNote: {
      fa: "قدمت استقلال فنلاند از ۶ دسامبر ۱۹۱۷ با اعلام جدایی از امپراتوری روسیه پس از قرن‌ها حکومت سوئد و روسیه حساب می‌شود.",
      en: "Independence declared on 6 December 1917 following the fall of the Russian Empire."
    },
    summary: {
      fa: "سرزمین هزاران دریاچه و جنگل، پیشتاز نظام‌های آموزشی، نوآوری و کیفیت زندگی.",
      en: "The land of a thousand lakes, celebrated for world-class education and technology."
    },
    facts: {
      capital: { fa: "هلسینکی", en: "Helsinki" },
      language: { fa: "فنلاندی، سوئدی", en: "Finnish, Swedish" },
      population: { fa: "حدود ۵٫۶ میلیون نفر", en: "About 5.6 million" }
    },
    overview: {
      fa: [
        "فنلاند پس از قرن‌ها زندگی زیر پرچم سوئد و روسیه، با استقلال در ۱۹۱۷ و ایستادگی در جنگ زمستان، جامعه‌ای مدرن، امن و پیشرو بنا نهاد."
      ],
      en: [
        "Governed historically by Sweden and Russia, Finland achieved independence in 1917 and forged an egalitarian, high-tech society."
      ]
    },
    timeline: [
      { year: 1917, title: { fa: "اعلام استقلال فنلاند", en: "Independence Declared" }, text: { fa: "جدایی رسمی از روسیه در ۶ دسامبر.", en: "Independence declared on 6 December." } },
      { year: 1939, title: { fa: "جنگ زمستان", en: "The Winter War" }, text: { fa: "مقاومت قهرمانانه در برابر نیروهای شوروی.", en: "Fierce defense of sovereignty against Soviet invasion." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "ireland",
    name: { fa: "ایرلند", en: "Ireland" },
    flag: ["#169B62", "#FFFFFF", "#FF883E"],
    flagDirection: "vertical",
    founded: 1922,
    foundedNote: {
      fa: "قدمت استقلال ایرلند نوین از سال ۱۹۲۲ با بنیان‌گذاری دولت آزاد ایرلند پس از قرن‌ها مبارزه حساب می‌شود؛ تمدن سلتی آن به پیش از میلاد بازمی‌گردد.",
      en: "Modern statehood dates to 1922 (Irish Free State); Gaelic Celtic civilization dates back millennia."
    },
    summary: {
      fa: "جزیره‌ی زمردین با ادبیاتی غنی از جویس و ییتس، موسیقی سنتی دل‌انگیز و فرهنگی پرآوازه.",
      en: "The Emerald Isle, famed for literary giants from Joyce to Yeats, Celtic lore, and folklore."
    },
    facts: {
      capital: { fa: "دوبلین", en: "Dublin" },
      language: { fa: "ایرلندی، انگلیسی", en: "Irish, English" },
      population: { fa: "حدود ۵٫۲ میلیون نفر", en: "About 5.2 million" }
    },
    overview: {
      fa: [
        "ایرلند با حفظ هویت سلتی و زبان گیلیک در برابر قرن‌ها حکومت بریتانیا مقاومت کرد و سرانجام به جمهوری مستقل و شکوفا تبدیل شد."
      ],
      en: [
        "Resilient against centuries of colonial domination, Ireland preserved its Gaelic culture and emerged as a dynamic European republic."
      ]
    },
    timeline: [
      { year: 1916, title: { fa: "قیام عید پاک", en: "Easter Rising" }, text: { fa: "نقطه‌ی عطفی در مبارزه برای استقلال ایرلند.", en: "Pivotal uprising in Dublin for freedom." } },
      { year: 1922, title: { fa: "تأسیس دولت آزاد ایرلند", en: "Irish Free State" }, text: { fa: "تولد دولت نوین ایرلند.", en: "Birth of the independent Irish Free State." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "poland",
    name: { fa: "لهستان", en: "Poland" },
    flag: ["#FFFFFF", "#DC143C"],
    founded: 966,
    foundedNote: {
      fa: "قدمت لهستان از سال ۹۶۶ میلادی و تعمید میشکو اول (غسل تعمید لهستان) که کشور را وارد جامعه‌ی مسیحی اروپا کرد محاسبه می‌شود.",
      en: "Counted from the Baptism of Poland in 966 CE under Mieszko I."
    },
    summary: {
      fa: "سرزمین کوپرنیک و شوپن؛ پل تاریخی شرق و غرب اروپا با تاریخی سرشار از ایستادگی و باززایی.",
      en: "Homeland of Copernicus and Chopin, a resilient bridge between East and West."
    },
    facts: {
      capital: { fa: "ورشو", en: "Warsaw" },
      language: { fa: "لهستانی", en: "Polish" },
      population: { fa: "حدود ۳۸ میلیون نفر", en: "About 38 million" }
    },
    overview: {
      fa: [
        "لهستان از پادشاهی قرون وسطایی و مشترک‌المنافع لهستان-لیتوانی تا بازسازی شگفت‌انگیز پس از جنگ دوم جهانی، نماد ماندگاری ملی است."
      ],
      en: [
        "From the golden age of the Polish-Lithuanian Commonwealth to post-war rebirth, Poland exemplifies cultural resilience."
      ]
    },
    timeline: [
      { year: 966, title: { fa: "غسل تعمید لهستان", en: "Baptism of Poland" }, text: { fa: "آغاز رسمی حکومت مسیحی میشکو اول.", en: "Mieszko I converted to Christianity." } },
      { year: 1569, title: { fa: "اتحاد لوبلین", en: "Union of Lublin" }, text: { fa: "پیدایش مشترک‌المنافع لهستان-لیتوانی.", en: "Birth of the Polish-Lithuanian Commonwealth." } },
      { year: 1989, title: { fa: "پیروزی جنبش همبستگی", en: "Solidarity Victory" }, text: { fa: "پایان دوران کمونیسم با انتخابات آزاد.", en: "Solidarność led transition to democracy." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "czech-republic",
    name: { fa: "جمهوری چک", en: "Czech Republic" },
    flag: ["#FFFFFF", "#D7141A"],
    founded: 870,
    foundedNote: {
      fa: "قدمت کشور چک از بنیان‌گذاری دوک‌نشین بوهمیا در حدود ۸۷۰ میلادی به دست خاندان پرمیسلید حساب می‌شود.",
      en: "Counted from the founding of the Duchy of Bohemia around 870 CE under the Přemyslid dynasty."
    },
    summary: {
      fa: "قلب تاریخی بوهم و موراوی با پایتخت رویایی پراگ؛ سرزمین قلعه‌ها، آبجو و ادبیات فرانتس کافکا.",
      en: "Historic Bohemia and Moravia, featuring majestic Prague and a legendary intellectual tradition."
    },
    facts: {
      capital: { fa: "پراگ", en: "Prague" },
      language: { fa: "چکی", en: "Czech" },
      population: { fa: "حدود ۱۰٫۹ میلیون نفر", en: "About 10.9 million" }
    },
    overview: {
      fa: [
        "جمهوری چک با پایتخت پراگ، «شهر صد برج»، قرن‌ها مرکز امپراتوری مقدس روم تحت فرمانروایی شارل چهارم بود."
      ],
      en: [
        "Bohemia served as imperial center under Charles IV. The Velvet Revolution in 1989 peacefully restored Czech democracy."
      ]
    },
    timeline: [
      { year: 1348, title: { fa: "تأسیس دانشگاه چارلز", en: "Charles University" }, text: { fa: "کهن‌ترین دانشگاه اروپای مرکزی.", en: "First university in Central Europe." } },
      { year: 1989, title: { fa: "انقلاب مخملی", en: "Velvet Revolution" }, text: { fa: "پایان مسالمت‌آمیز رژیم کمونیستی به رهبری واسلاو هاول.", en: "Peaceful end to communist rule." } },
      { year: 1993, title: { fa: "انحلال چکسلواکی", en: "Dissolution of Czechoslovakia" }, text: { fa: "جدایی مسالمت‌آمیز چک و اسلواکی.", en: "Velvet Divorce created Czech Republic." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "hungary",
    name: { fa: "مجارستان", en: "Hungary" },
    flag: ["#CE2939", "#FFFFFF", "#477050"],
    founded: 895,
    foundedNote: {
      fa: "قدمت مجارستان از ورود قبایل مجار (مگیارها) به حوضه پانونی در سال ۸۹۵ میلادی و تاج‌گذاری سنت استفان در سال ۱۰۰۰ حساب می‌شود.",
      en: "Counted from the Honfoglalás (Magyar conquest of the Carpathian Basin) in 895 CE and King Stephen I in 1000."
    },
    summary: {
      fa: "سرزمین مگیارها در کرانه‌های دانوب، با چشمه‌های آب گرم، تاریخ پادشاهی کهن و موسیقی فرانتس لیست.",
      en: "Land of the Magyars, Danube vistas, rich thermal springs, and Franz Liszt."
    },
    facts: {
      capital: { fa: "بوداپست", en: "Budapest" },
      language: { fa: "مجاری", en: "Hungarian" },
      population: { fa: "حدود ۹٫۶ میلیون نفر", en: "About 9.6 million" }
    },
    overview: {
      fa: [
        "مجارستان با زبان فین‌واوگری منحصربه‌فرد، سده‌ها سد دفاعی اروپای مرکزی بود و پایتخت آن بوداپست نگین دانوب نام دارد."
      ],
      en: [
        "Forged by the Magyars in the 9th century, Hungary boasts a distinct Uralic tongue and rich heritage on the Danube."
      ]
    },
    timeline: [
      { year: 895, title: { fa: "ورود مجارها به حوضه کارپات", en: "Hungarian Conquest" }, text: { fa: "استقرار قبایل آرپاد در مجارستان.", en: "Arrival of Árpád and Magyar tribes." } },
      { year: 1000, title: { fa: "تاج‌گذاری سنت استفان", en: "Coronation of Saint Stephen" }, text: { fa: "بنیان پادشاهی مسیحی مجارستان.", en: "Kingdom of Hungary established." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "belgium",
    name: { fa: "بلژیک", en: "Belgium" },
    flag: ["#000000", "#FFD100", "#FF0F21"],
    flagDirection: "vertical",
    founded: 1830,
    foundedNote: {
      fa: "قدمت بلژیک از انقلاب ۱۸۳۰ و جدایی از پادشاهی متحد هلند محاسبه می‌شود.",
      en: "Counted from the Belgian Revolution of 1830 and secession from the United Kingdom of the Netherlands."
    },
    summary: {
      fa: "قلب اداری اروپا و مقر اتحادیه‌ی اروپا، کشوری چندزبانه با هنرهای فلمیش و شکلات‌های نامدار.",
      en: "Administrative crossroads of Europe, home to the EU capital and Flemish artistic mastery."
    },
    facts: {
      capital: { fa: "بروکسل", en: "Brussels" },
      language: { fa: "هلندی، فرانسوی، آلمانی", en: "Dutch, French, German" },
      population: { fa: "حدود ۱۱٫۸ میلیون نفر", en: "About 11.8 million" }
    },
    overview: {
      fa: [
        "بلژیک پیوندگاه فرهنگ‌های ژرمنی و رومی در شمال غربی اروپاست و شهرهای بروکسل، بروژ و آنتورپ گنجینه‌های معماری و بازرگانی آنند."
      ],
      en: [
        "Bridging Germanic and Romance Europe, Belgium hosts Brussels, Bruges, and Antwerp as keystones of diplomacy and trade."
      ]
    },
    timeline: [
      { year: 1830, title: { fa: "انقلاب بلژیک", en: "Belgian Revolution" }, text: { fa: "اعلام استقلال از پادشاهی هلند.", en: "Independence declared from the Netherlands." } },
      { year: 1957, title: { fa: "بنیان‌گذاری جامعه اروپا", en: "Founding Member of EEC" }, text: { fa: "بلژیک از بنیان‌گذاران اروپای متحد شد.", en: "Signed the Treaty of Rome." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "albania",
    name: { fa: "آلبانی", en: "Albania" },
    flag: ["#E41E20"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 14'><rect width='20' height='14' fill='%23E41E20'/><path d='M10 3l1 2 2-1-1 3 2 1-3 1 1 2-2-1-2 1 1-2-3-1 2-1-1-3 2 1z' fill='black'/></svg>",
    founded: 1912,
    foundedNote: {
      fa: "قدمت استقلال آلبانی نوین از ۲۸ نوامبر ۱۹۱۲ با اعلام استقلال از امپراتوری عثمانی در ولوره حساب می‌شود؛ ریشه‌های ایلیریایی آن کهن‌ترند.",
      en: "Modern independence declared on 28 November 1912 at Vlorë; ancient Illyrian roots date back millennia."
    },
    summary: {
      fa: "سرزمین عقاب‌ها در بالکان غربی با سواحل آدریاتیک و میراث تمدن ایلیریایی.",
      en: "Land of the Eagles on the Adriatic, rooted in ancient Illyrian culture."
    },
    facts: {
      capital: { fa: "تیرانا", en: "Tirana" },
      language: { fa: "آلبانیایی", en: "Albanian" },
      population: { fa: "حدود ۲٫۸ میلیون نفر", en: "About 2.8 million" }
    },
    overview: {
      fa: [
        "آلبانی با زبان هندواروپایی مستقل و تاریخ باستانی خود، در سده پانزدهم با قهرمانی اسکندربیک در برابر عثمانی مقاومت کرد و در ۱۹۱۲ مستقل شد."
      ],
      en: [
        "Boasting an independent Indo-European linguistic branch, Albania resisted Ottoman rule under Skanderbeg and won sovereignty in 1912."
      ]
    },
    timeline: [
      { year: 1444, title: { fa: "اتحاد لژه به رهبری اسکندربیک", en: "League of Lezhë" }, text: { fa: "اتحاد قبایل آلبانی برای دفاع از استقلال.", en: "Skanderbeg united Albanian princes." } },
      { year: 1912, title: { fa: "اعلام استقلال در ولوره", en: "Independence at Vlorë" }, text: { fa: "آلبانی رسماً کشور مستقل شد.", en: "Declaration of sovereignty." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "andorra",
    name: { fa: "آندورا", en: "Andorra" },
    flag: ["#10069F", "#FEDD00", "#D52B1E"],
    flagDirection: "vertical",
    founded: 1278,
    foundedNote: {
      fa: "قدمت آندورا از سال ۱۲۷۸ با معاهده‌ی پارتاژ میان اسقف اورخل کاتالونیا و کنت فوآی فرانسه حساب می‌شود.",
      en: "Counted from the 1278 Paréage agreement establishing co-principality under Urgell and Foix."
    },
    summary: {
      fa: "شاهزاده‌نشین کوهستانی در دل پیرنه میان فرانسه و اسپانیا با بیش از هفت قرن صلح پیوسته.",
      en: "A Pyrenean co-principality boasting seven centuries of peaceful co-rule."
    },
    facts: {
      capital: { fa: "آندورا لاولا", en: "Andorra la Vella" },
      language: { fa: "کاتالان", en: "Catalan" },
      population: { fa: "حدود ۸۰ هزار نفر", en: "About 80,000" }
    },
    overview: {
      fa: [
        "آندورا در گذرگاه‌های مرتفع کوه‌های پیرنه با قانون اساسی ۱۹۹۳ و ساختار شاهزاده‌نشینی مشترک یکی از امن‌ترین و کهن‌ترین دولت‌های کوچک اروپاست."
      ],
      en: [
        "Nestled in the high Pyrenees, Andorra has maintained autonomous status since medieval feudal treaties."
      ]
    },
    timeline: [
      { year: 1278, title: { fa: "معاهده پارتاژ", en: "The Paréage of 1278" }, text: { fa: "پایه‌گذاری نظام شاهزاده‌نشین مشترک.", en: "Co-principality established." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "belarus",
    name: { fa: "بلاروس", en: "Belarus" },
    flag: ["#C8372D", "#4B8B3B"],
    founded: 1991,
    foundedNote: {
      fa: "قدمت استقلال بلاروس نوین از سال ۱۹۹۱ و فروپاشی شوروی حساب می‌شود؛ پرنس‌نشین پولوتسک در آن به سده دهم میلادی برمی‌گردد.",
      en: "Independence achieved in 1991; roots trace to the 10th-century Principality of Polotsk."
    },
    summary: {
      fa: "سرزمین دشت‌های سرسبز، جنگل‌های باستانی بیاووویژا و قلعه‌های تاریخی میر و نسویژ.",
      en: "Heartland of the ancient Belovezhskaya Pushcha forest and fortress heritage."
    },
    facts: {
      capital: { fa: "مینسک", en: "Minsk" },
      language: { fa: "بلاروسی، روسی", en: "Belarusian, Russian" },
      population: { fa: "حدود ۹٫۲ میلیون نفر", en: "About 9.2 million" }
    },
    overview: {
      fa: [
        "بلاروس در اروپای شرقی با تاریخی گره‌خورده با روس کی‌یف و دوک‌نشین بزرگ لیتوانی، پس از استقلال در ۱۹۹۱ جایگاه خود را در منطقه حفظ کرده است."
      ],
      en: [
        "Sharing Eastern Slavic roots, Belarus was part of Kievan Rus and the Grand Duchy of Lithuania before modern sovereignty."
      ]
    },
    timeline: [
      { year: 1991, title: { fa: "استقلال بلاروس", en: "Independence" }, text: { fa: "امضای پیمان بلاوژا و انحلال شوروی.", en: "Belavezha Accords dissolved the Soviet Union." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "bosnia-and-herzegovina",
    name: { fa: "بوسنی و هرزگوین", en: "Bosnia and Herzegovina" },
    flag: ["#002366"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'><rect width='20' height='10' fill='%23002366'/><path d='M7 0l8 10H7z' fill='%23FECB00'/></svg>",
    founded: 1189,
    foundedNote: {
      fa: "قدمت بوسنی از منشور کولین بان در سال ۱۱۸۹ میلادی که یکی از کهن‌ترین اسناد دولتی اسلاوی در بالکان است حساب می‌شود.",
      en: "Counted from the Charter of Ban Kulin in 1189 CE, one of the oldest Slavic diplomatic documents."
    },
    summary: {
      fa: "پیوندگاه فرهنگ‌های اسلامی، کاتولیک و ارتدوکس با پل تاریخی موستار و پایتخت تاریخی سارایوو.",
      en: "A historic cultural crossroads of Islam, Catholicism, and Orthodoxy in the Dinaric Alps."
    },
    facts: {
      capital: { fa: "سارایوو", en: "Sarajevo" },
      language: { fa: "بوسنیایی، کرواتی، صربی", en: "Bosnian, Croatian, Serbian" },
      population: { fa: "حدود ۳٫۲ میلیون نفر", en: "About 3.2 million" }
    },
    overview: {
      fa: [
        "بوسنی و هرزگوین با تاریخی غنی از دوران حکومت بان‌ها و پادشاهی کوترومانیچ تا روزگار عثمانی و اتریش-مجارستان، قلب تپنده‌ی تنوع فرهنگی در بالکان است."
      ],
      en: [
        "Marked by centuries of coexistence, Bosnia and Herzegovina features historic Sarajevo and UNESCO landmark Mostar Bridge."
      ]
    },
    timeline: [
      { year: 1189, title: { fa: "منشور کولین بان", en: "Charter of Ban Kulin" }, text: { fa: "رسمیت یافتن دولت قرون وسطایی بوسنی.", en: "Sovereign trade pact signed." } },
      { year: 1992, title: { fa: "اعلام استقلال", en: "Independence" }, text: { fa: "استقلال از یوگسلاوی.", en: "Sovereignty recognized following referendum." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "bulgaria",
    name: { fa: "بلغارستان", en: "Bulgaria" },
    flag: ["#FFFFFF", "#00966E", "#D62612"],
    founded: 681,
    foundedNote: {
      fa: "قدمت بلغارستان از سال ۶۸۱ میلادی و تأسیس نخستین امپراتوری بلغار به دست خان آسپاروخ و پیمان با امپراتوری بیزانس حساب می‌شود.",
      en: "Counted from 681 CE when Khan Asparukh established the First Bulgarian Empire recognized by Byzantium."
    },
    summary: {
      fa: "یکی از کهن‌ترین دولت‌های مداوم اروپا، خاستگاه خط سیریلیک و مهد تمدن تراکیه‌ای.",
      en: "One of Europe's oldest continuous states, birthplace of the Cyrillic alphabet."
    },
    facts: {
      capital: { fa: "صوفیه", en: "Sofia" },
      language: { fa: "بلغاری", en: "Bulgarian" },
      population: { fa: "حدود ۶٫۵ میلیون نفر", en: "About 6.5 million" }
    },
    overview: {
      fa: [
        "بلغارستان در جنوب شرقی اروپا با ابداع خط سیریلیک در عصر طلایی تزار سیمئون اول نقشی بی‌همتا در فرهنگ جهان اسلاو ایفا کرده است."
      ],
      en: [
        "Bulgaria developed the Cyrillic script in the 9th century and preserves ancient Thracian and medieval Christian heritage."
      ]
    },
    timeline: [
      { year: 681, title: { fa: "تأسیس نخستین امپراتوری بلغار", en: "First Bulgarian Empire" }, text: { fa: "پیمان صلح با بیزانس و رسمیت دولت بلغار.", en: "Byzantine treaty recognized Asparukh's realm." } },
      { year: 886, title: { fa: "ابداع خط سیریلیک در بلغارستان", en: "Preslav Literary School" }, text: { fa: "گسترش خط سیریلیک در سراسر جهان اسلاو.", en: "Cyrillic script disseminated across the Slavic world." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "croatia",
    name: { fa: "کرواسی", en: "Croatia" },
    flag: ["#FF0000", "#FFFFFF", "#0000FF"],
    founded: 925,
    foundedNote: {
      fa: "قدمت کرواسی از تاج‌گذاری تومیسلاو به‌عنوان نخستین پادشاه کرواسی در سال ۹۲۵ میلادی محاسبه می‌شود.",
      en: "Counted from 925 CE when Tomislav was crowned the first King of Croatia."
    },
    summary: {
      fa: "مروارید دریای آدریاتیک با هزار جزیره، شهر تاریخی دوبروونیک و تبار کهن دریانوردی.",
      en: "Adriatic jewel boasting a thousand islands, ancient Dubrovnik, and Dalmatian heritage."
    },
    facts: {
      capital: { fa: "زاگرب", en: "Zagreb" },
      language: { fa: "کرواتی", en: "Croatian" },
      population: { fa: "حدود ۳٫۹ میلیون نفر", en: "About 3.9 million" }
    },
    overview: {
      fa: [
        "کرواسی با خط ساحلی دالماتیا و تاریخ پادشاهی قرون وسطی، پیوندگاه بالکان و فرهنگ مدیترانه‌ای اروپاست."
      ],
      en: [
        "Croatia's history spans early medieval kings, the maritime Republic of Ragusa (Dubrovnik), and modern European integration."
      ]
    },
    timeline: [
      { year: 925, title: { fa: "پادشاهی تومیسلاو", en: "Coronation of Tomislav" }, text: { fa: "تأسیس پادشاهی متحد کرواسی.", en: "Unification of Dalmatian and Pannonian Croatia." } },
      { year: 1991, title: { fa: "استقلال کرواسی", en: "Independence" }, text: { fa: "جدایی رسمی از یوگسلاوی.", en: "Declaration of independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "cyprus",
    name: { fa: "قبرس", en: "Cyprus" },
    flag: ["#FFFFFF"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'><rect width='30' height='20' fill='white'/><path d='M9 8c2-2 7-1 12 1s3 4-2 3-8-1-10-4z' fill='%23D57800'/></svg>",
    founded: 1960,
    foundedNote: {
      fa: "قدمت جمهوری قبرس از ۱۶ اوت ۱۹۶۰ با استقلال از بریتانیا حساب می‌شود؛ تاریخ باستان آن به هزاره دهم پیش از میلاد بازمی‌گردد.",
      en: "Independence gained on 16 August 1960 from British rule; ancient civilization dates back over 10,000 years."
    },
    summary: {
      fa: "جزیره‌ی افسانه‌ای آفرودیت در شرق مدیترانه، پیوندگاه کهن تمدن‌های یونانی، فنیقی و بیزانسی.",
      en: "Mythic birthplace of Aphrodite, connecting Greek, Phoenician, and Levantine antiquity."
    },
    facts: {
      capital: { fa: "نیکوزیا", en: "Nicosia" },
      language: { fa: "یونانی، ترکی", en: "Greek, Turkish" },
      population: { fa: "حدود ۱٫۲ میلیون نفر", en: "About 1.2 million" }
    },
    overview: {
      fa: [
        "قبرس سومین جزیره بزرگ مدیترانه، سرشار از محوطه‌های باستانی یونانی-رومی و کلیساهای نقاشی‌شده‌ی بیزانسی است."
      ],
      en: [
        "Strategically located in the eastern Mediterranean, Cyprus boasts thousands of years of trade, metallurgy, and mythology."
      ]
    },
    timeline: [
      { year: 1960, title: { fa: "استقلال قبرس", en: "Independence" }, text: { fa: "پایان حکومت بریتانیا و استقلال جمهوری قبرس.", en: "Independence from the United Kingdom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "estonia",
    name: { fa: "استونی", en: "Estonia" },
    flag: ["#0072CE", "#000000", "#FFFFFF"],
    founded: 1918,
    foundedNote: {
      fa: "قدمت استونی از اعلامیه استقلال ۲۴ فوریه ۱۹۱۸ پس از قرن‌ها حکومت‌های منطقه‌ای محاسبه می‌شود.",
      en: "Independence declared on 24 February 1918 following the collapse of the Russian Empire."
    },
    summary: {
      fa: "پیشگام دیجیتال جهان در کرانه‌های خلیج فنلاند با جنگل‌های بکر و زبان فین‌واوگری کهن.",
      en: "Baltic digital powerhouse boasting medieval Tallinn and advanced e-governance."
    },
    facts: {
      capital: { fa: "تالین", en: "Tallinn" },
      language: { fa: "استونیایی", en: "Estonian" },
      population: { fa: "حدود ۱٫۳ میلیون نفر", en: "About 1.3 million" }
    },
    overview: {
      fa: [
        "استونی با فرهنگ فین‌واوگری و پایتخت قرون وسطایی تالین، امروزه پیشرفته‌ترین جامعه‌ی دیجیتال جهان به‌شمار می‌رود."
      ],
      en: [
        "With deep Finno-Ugric heritage, Estonia rebuilt itself after 1991 into the world's most sophisticated digital society."
      ]
    },
    timeline: [
      { year: 1918, title: { fa: "بیانیه استقلال", en: "Manifesto to the Peoples of Estonia" }, text: { fa: "اعلام جمهوری دموکراتیک مستقل.", en: "Declaration of independence." } },
      { year: 1991, title: { fa: "احیای استقلال", en: "Restoration of Independence" }, text: { fa: "پایان اشغال شوروی با انقلاب آواز.", en: "Singing Revolution restored freedom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "iceland",
    name: { fa: "ایسلند", en: "Iceland" },
    flag: ["#02529C"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 18'><rect width='25' height='18' fill='%2302529C'/><path d='M0 9h25M9 0v18' stroke='white' stroke-width='4'/><path d='M0 9h25M9 0v18' stroke='%23DC1E35' stroke-width='2'/></svg>",
    founded: 930,
    foundedNote: {
      fa: "قدمت ایسلند از سال ۹۳۰ میلادی با تأسیس آلتینگ (Althingi)، کهن‌ترین پارلمان جهان که هنوز به کار خود ادامه می‌دهد، حساب می‌شود.",
      en: "Counted from 930 CE and the establishment of the Althing, the world's oldest active parliament."
    },
    summary: {
      fa: "سرزمین آتش و یخ، آتشفشان‌ها، یخچال‌های طبیعی و سروده‌های حماسی کهن نورس.",
      en: "Land of fire and ice, volcanic wonder, sagas, and the world's oldest parliament."
    },
    facts: {
      capital: { fa: "ریکیاویک", en: "Reykjavik" },
      language: { fa: "ایسلندی", en: "Icelandic" },
      population: { fa: "حدود ۳۹۰ هزار نفر", en: "About 390,000" }
    },
    overview: {
      fa: [
        "ایسلند در شمال اقیانوس اطلس، توسط مهاجران نورس در سده نهم مسکونی شد و زبان کهن خود را دست‌نخورده نگه داشته است."
      ],
      en: [
        "Settled by Norse explorers in the 9th century, Iceland preserves the ancient Old Norse language and unique geothermal power."
      ]
    },
    timeline: [
      { year: 930, title: { fa: "تأسیس آلتینگ", en: "Founding of the Althing" }, text: { fa: "پایه‌ریزی کهن‌ترین مجلس قانون‌گذاری جهان در تینگ‌وتلیر.", en: "World's oldest parliament founded at Thingvellir." } },
      { year: 1944, title: { fa: "تأسیس جمهوری ایسلند", en: "Republic of Iceland" }, text: { fa: "استقلال رسمی و انحلال اتحاد با دانمارک.", en: "Independence from Danish rule." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "latvia",
    name: { fa: "لتونی", en: "Latvia" },
    flag: ["#9E3039", "#FFFFFF", "#9E3039"],
    founded: 1918,
    foundedNote: {
      fa: "قدمت لتونی از ۱۸ نوامبر ۱۹۱۸ با اعلام استقلال جمهوری لتونی در ریگا حساب می‌شود.",
      en: "Counted from 18 November 1918 when the Republic of Latvia declared independence."
    },
    summary: {
      fa: "کشور بالتیک با پایتخت پرآوازه‌ی ریگا، شاهکارهای معماری آرنوو و سواحل شنی کهربا.",
      en: "Baltic nation celebrated for Riga's Art Nouveau splendor and amber coastline."
    },
    facts: {
      capital: { fa: "ریگا", en: "Riga" },
      language: { fa: "لتونیایی", en: "Latvian" },
      population: { fa: "حدود ۱٫۹ میلیون نفر", en: "About 1.9 million" }
    },
    overview: {
      fa: [
        "لتونی در کرانه‌های دریای بالتیک، از بنادر تجاری اتحادیه هانزا تا استقلال و عضویت در اتحادیه اروپا، هویت متمایز خود را پاس داشته است."
      ],
      en: [
        "Centuries of Hanseatic commerce in Riga shaped Latvia, leading to its cultural renaissance and restoration of independence in 1991."
      ]
    },
    timeline: [
      { year: 1918, title: { fa: "اعلام استقلال لتونی", en: "Independence Declared" }, text: { fa: "تأسیس جمهوری لتونی در ۱۸ نوامبر.", en: "Sovereignty proclaimed in Riga." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "liechtenstein",
    name: { fa: "لیختن‌اشتاین", en: "Liechtenstein" },
    flag: ["#002B7F", "#CE1126"],
    founded: 1719,
    foundedNote: {
      fa: "قدمت لیختن‌اشتاین از سال ۱۷۱۹ با فرمان شارل ششم، امپراتور مقدس روم، که لردشین‌های فادوتس و شلنبرگ را به یک شاهزاده‌نشین تبدیل کرد حساب می‌شود.",
      en: "Counted from 1719 when Emperor Charles VI created the Principality of Liechtenstein."
    },
    summary: {
      fa: "شاهزاده‌نشین آلپی میان سوئیس و اتریش، از مرفه‌ترین و باثبات‌ترین کشورهای جهان.",
      en: "A prosperous Alpine principality renowned for precision manufacturing and scenic alpine castles."
    },
    facts: {
      capital: { fa: "فادوتس", en: "Vaduz" },
      language: { fa: "آلمانی", en: "German" },
      population: { fa: "حدود ۴۰ هزار نفر", en: "About 40,000" }
    },
    overview: {
      fa: [
        "لیختن‌اشتاین با حاکمیت دودمان شاهزادگان لیختن‌اشتاین و بهره‌مندی از اقتصادی مدرن و بدون ارتش، یکی از پایدارترین نظام‌های اروپاست."
      ],
      en: [
        "Covering scenic Rhine valley peaks, Liechtenstein is one of only two doubly landlocked countries in the world."
      ]
    },
    timeline: [
      { year: 1719, title: { fa: "تأسیس شاهزاده‌نشین", en: "Principality Created" }, text: { fa: "فرمان امپراتور مقدس روم.", en: "Elevated to an imperial principality." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "lithuania",
    name: { fa: "لیتوانی", en: "Lithuania" },
    flag: ["#FDB913", "#006A44", "#C1272D"],
    founded: 1253,
    foundedNote: {
      fa: "قدمت لیتوانی از سال ۱۲۵۳ میلادی و تاج‌گذاری میندائوگاس به‌عنوان نخستین پادشاه لیتوانی حساب می‌شود.",
      en: "Counted from 6 July 1253, the coronation of Mindaugas as King of Lithuania."
    },
    summary: {
      fa: "بزرگ‌ترین کشور حوزه بالتیک با زبان بالتیک باستانی و پیشینه‌ای از دوک‌نشین بزرگ قرون وسطی.",
      en: "Baltic nation preserving an archaic Indo-European tongue and grand medieval duchy history."
    },
    facts: {
      capital: { fa: "ویلنیوس", en: "Vilnius" },
      language: { fa: "لیتوانیایی", en: "Lithuanian" },
      population: { fa: "حدود ۲٫۸ میلیون نفر", en: "About 2.8 million" }
    },
    overview: {
      fa: [
        "دوک‌نشین بزرگ لیتوانی در سده‌های ۱۴ و ۱۵ از دریای بالتیک تا دریای سیاه گسترده بود و نخستین جمهوری بود که در ۱۹۹۰ از شوروی اعلام استقلال کرد."
      ],
      en: [
        "Once Europe's largest state stretching from Baltic to Black Sea, Lithuania was the first Soviet republic to restore independence in 1990."
      ]
    },
    timeline: [
      { year: 1253, title: { fa: "تاج‌گذاری میندائوگاس", en: "Coronation of Mindaugas" }, text: { fa: "پایه‌ریزی دولت پادشاهی لیتوانی.", en: "Creation of the Kingdom of Lithuania." } },
      { year: 1990, title: { fa: "اعلام احیای استقلال", en: "Act of Independence" }, text: { fa: "نخستین کشور جداشده از اتحاد شوروی.", en: "First republic to break from the USSR." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "luxembourg",
    name: { fa: "لوکزامبورگ", en: "Luxembourg" },
    flag: ["#EA141D", "#FFFFFF", "#00A1DE"],
    founded: 963,
    foundedNote: {
      fa: "قدمت لوکزامبورگ از سال ۹۶۳ میلادی و خرید دژ لوکیلین‌بوروهک به دست کنت زیگفرید حساب می‌شود.",
      en: "Counted from 963 CE when Count Siegfried acquired Lucilinburhuc castle."
    },
    summary: {
      fa: "تنها دوک‌نشین بزرگ جهان، کانون مالی بین‌المللی و از بنیان‌گذاران اروپای متحد.",
      en: "The world's only sovereign Grand Duchy, a premier global financial hub."
    },
    facts: {
      capital: { fa: "لوکزامبورگ", en: "Luxembourg City" },
      language: { fa: "لوکزامبورگی، فرانسوی، آلمانی", en: "Luxembourgish, French, German" },
      population: { fa: "حدود ۶۶۰ هزار نفر", en: "About 660,000" }
    },
    overview: {
      fa: [
        "لوکزامبورگ دژی نفوذناپذیر در قلب اروپا بود که بعدها به نماد یکپارچگی اقتصادی و دیپلماسی اروپایی بدل شد."
      ],
      en: [
        "From an impenetrable medieval fortress on the Alzette River, Luxembourg evolved into a founding pillar of the European Union."
      ]
    },
    timeline: [
      { year: 963, title: { fa: "خرید دژ لوکزامبورگ", en: "Acquisition of Lucilinburhuc" }, text: { fa: "کنت زیگفرید سنگ بنای کشور را نهاد.", en: "Siegfried founded Luxembourg." } },
      { year: 1867, title: { fa: "پیمان لندن", en: "Treaty of London" }, text: { fa: "تضمین بی‌طرفی و استقلال کامل.", en: "Perpetual neutrality guaranteed." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "malta",
    name: { fa: "مالت", en: "Malta" },
    flag: ["#FFFFFF", "#CF142B"],
    flagDirection: "vertical",
    founded: 1964,
    foundedNote: {
      fa: "قدمت استقلال مالت از ۲۱ سپتامبر ۱۹۶۴ از بریتانیا حساب می‌شود؛ معابد مگالیتیک آن قدمتی بیش از ۵۰۰۰ سال دارند.",
      en: "Independence gained on 21 September 1964; megalithic temples predate the Pyramids."
    },
    summary: {
      fa: "مجمع‌الجزایر صخره‌ای مدیترانه، پایگاه شوالیه‌های سنت جان و معابد سنگی ماقبل تاریخ.",
      en: "Mediterranean archipelago famed for Knights Hospitaller fortresses and prehistoric temples."
    },
    facts: {
      capital: { fa: "والتا", en: "Valletta" },
      language: { fa: "مالتی، انگلیسی", en: "Maltese, English" },
      population: { fa: "حدود ۵۳۰ هزار نفر", en: "About 530,000" }
    },
    overview: {
      fa: [
        "مالت با موقعیت استراتژیک در میانه‌ی مدیترانه، قرن‌ها سنگرگاه شوالیه‌های مهمان‌نواز و دژ مقاومت در جنگ دوم جهانی بود."
      ],
      en: [
        "At the crossroads of the Mediterranean, Malta was held by Phoenicians, Romans, Knights Hospitaller, and the British."
      ]
    },
    timeline: [
      { year: 1565, title: { fa: "محاصره بزرگ مالت", en: "Great Siege of Malta" }, text: { fa: "شوالیه‌ها ناوگان عثمانی را پس راندند.", en: "Knights of St. John repelled Ottoman forces." } },
      { year: 1964, title: { fa: "استقلال مالت", en: "Independence" }, text: { fa: "استقلال از امپراتوری بریتانیا.", en: "Sovereignty granted by Britain." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "moldova",
    name: { fa: "مولداوی", en: "Moldova" },
    flag: ["#003DA5", "#FFD100", "#C8102E"],
    flagDirection: "vertical",
    founded: 1359,
    foundedNote: {
      fa: "قدمت شاهزاده‌نشین مولداوی به سال ۱۳۵۹ میلادی با بنیان‌گذاری آن به دست بوگدان اول بازمی‌گردد؛ استقلال نوین در ۱۹۹۱ رقم خورد.",
      en: "Principality of Moldavia founded in 1359 by Bogdan I; modern sovereignty proclaimed in 1991."
    },
    summary: {
      fa: "سرزمین تاکستان‌های نامدار و سرداب‌های کهن شراب میان رومانی و اوکراین.",
      en: "Eastern European nation celebrated for rich winemaking traditions and historic monasteries."
    },
    facts: {
      capital: { fa: "کیشیناو", en: "Chisinau" },
      language: { fa: "رومانیایی", en: "Romanian" },
      population: { fa: "حدود ۲٫۵ میلیون نفر", en: "About 2.5 million" }
    },
    overview: {
      fa: [
        "مولداوی با گذشته‌ای غنی در عصر استفان کبیر و تولید باکیفیت‌ترین شراب‌های جهان، پلی میان شرق و غرب اروپاست."
      ],
      en: [
        "Steeped in the medieval legacy of Stephen the Great, Moldova preserves celebrated vineyards and vast underground wine cellars."
      ]
    },
    timeline: [
      { year: 1359, title: { fa: "بنیان‌گذاری پرنس‌نشین مولداوی", en: "Founding of Moldavia" }, text: { fa: "بوگدان اول حاکمیت مستقل را اعلام کرد.", en: "Bogdan I secured independence." } },
      { year: 1991, title: { fa: "اعلام استقلال نوین", en: "Independence of Moldova" }, text: { fa: "جدایی رسمی از اتحاد شوروی.", en: "Sovereignty declared from the USSR." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "monaco",
    name: { fa: "موناکو", en: "Monaco" },
    flag: ["#CE1126", "#FFFFFF"],
    founded: 1297,
    foundedNote: {
      fa: "قدمت حاکمیت دودمان گریمالدی در موناکو از سال ۱۲۹۷ با فتح قلعه به دست فرانسوا گریمالدی حساب می‌شود.",
      en: "Counted from 1297 when François Grimaldi captured the Rock of Monaco."
    },
    summary: {
      fa: "دومین کشور کوچک جهان در ساحل لاجوردی فرانسه؛ نماد شکوه، مسابقات فرمول یک و بندر قایق‌های مجلل.",
      en: "Riviera principality famous for Monte Carlo, Grand Prix racing, and glamour."
    },
    facts: {
      capital: { fa: "موناکو", en: "Monaco" },
      language: { fa: "فرانسوی", en: "French" },
      population: { fa: "حدود ۳۹ هزار نفر", en: "About 39,000" }
    },
    overview: {
      fa: [
        "شاهزاده‌نشین موناکو با بیش از هفت قرن حکومت خاندان گریمالدی در ساحل مدیترانه، مهد گردشگری لوکس و ثبات اقتصادی است."
      ],
      en: [
        "Ruled by the House of Grimaldi for over seven centuries, Monaco is an iconic center of global prestige on the Côte d'Azur."
      ]
    },
    timeline: [
      { year: 1297, title: { fa: "تسخیر قلعه به دست گریمالدی", en: "Grimaldi rule begins" }, text: { fa: "فرانسوا گریمالدی با لباس مبدل وارد قلعه شد.", en: "François Grimaldi seized the Rock." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "montenegro",
    name: { fa: "مونته‌نگرو", en: "Montenegro" },
    flag: ["#C40308"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'><rect width='20' height='10' fill='%23C40308' stroke='%23D4AF37'/><circle cx='10' cy='5' r='2' fill='%23D4AF37'/></svg>",
    founded: 1878,
    foundedNote: {
      fa: "قدمت استقلال بین‌المللی مونته‌نگرو از کنگره برلین در سال ۱۸۷۸ محاسبه می‌شود؛ بازگشت دوباره به استقلال در ۲۰۰۶ رخ داد.",
      en: "International recognition achieved at the Congress of Berlin in 1878; independence renewed in 2006."
    },
    summary: {
      fa: "«کوه سیاه» در کرانه‌های آدریاتیک، خلیج باشکوه کوتور و دلاوری‌های تاریخی کوه‌نشینان.",
      en: "Fjord-like Bay of Kotor and rugged peaks of the Black Mountain."
    },
    facts: {
      capital: { fa: "پودگوریتسا", en: "Podgorica" },
      language: { fa: "مونته‌نگرویی", en: "Montenegrin" },
      population: { fa: "حدود ۶۲۰ هزار نفر", en: "About 620,000" }
    },
    overview: {
      fa: [
        "مونته‌نگرو با کوه‌های سر به فلک کشیده و قلعه‌های خلیج کوتور، قرن‌ها خودمختاری سرسختانه‌ی خود را در برابر امپراتوری‌ها حفظ کرد."
      ],
      en: [
        "Known for fiercely defending its independence under prince-bishops, Montenegro boasts striking Adriatic fjords and mountain passes."
      ]
    },
    timeline: [
      { year: 1878, title: { fa: "کنگره برلین", en: "Congress of Berlin" }, text: { fa: "شناسایی رسمی استقلال پادشاهی مونته‌نگرو.", en: "Recognition of independence." } },
      { year: 2006, title: { fa: "همه‌پرسی استقلال ۲۰۰۶", en: "Independence Referendum" }, text: { fa: "احیای استقلال کامل پس از اتحاد با صربستان.", en: "Peaceful restoration of sovereignty." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "north-macedonia",
    name: { fa: "مقدونیه شمالی", en: "North Macedonia" },
    flag: ["#D20000"],
    flagImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'><rect width='20' height='10' fill='%23D20000'/><circle cx='10' cy='5' r='2' fill='%23FFE600'/></svg>",
    founded: 1991,
    foundedNote: {
      fa: "قدمت مقدونیه شمالی از ۸ سپتامبر ۱۹۹۱ و همه‌پرسی استقلال از یوگسلاوی حساب می‌شود.",
      en: "Independence declared on 8 September 1991 following a nationwide referendum."
    },
    summary: {
      fa: "سرزمین دریاچه‌ی باستانی اوهرید، پایتخت تاریخی اسکوپیه و پیوندگاه تمدن‌های کهن بالکان.",
      en: "Home to ancient Lake Ohrid, Ottoman bazaars, and crossroad cultures of the Balkans."
    },
    facts: {
      capital: { fa: "اسکوپیه", en: "Skopje" },
      language: { fa: "مقدونی، آلبانیایی", en: "Macedonian, Albanian" },
      population: { fa: "حدود ۱٫۸ میلیون نفر", en: "About 1.8 million" }
    },
    overview: {
      fa: [
        "مقدونیه شمالی با دریاچه میراث جهانی اوهرید و کلیساها و مساجد کهن، تابلویی زنده از تاریخ چندفرهنگی بالکان است."
      ],
      en: [
        "Encompassing ancient Lake Ohrid and scenic mountain ranges, North Macedonia preserves Byzantine and Ottoman heritage."
      ]
    },
    timeline: [
      { year: 1991, title: { fa: "استقلال مقدونیه", en: "Independence" }, text: { fa: "خروج مسالمت‌آمیز از فدراسیون یوگسلاوی.", en: "Peaceful withdrawal from Yugoslavia." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "romania",
    name: { fa: "رومانی", en: "Romania" },
    flag: ["#002B7F", "#FCD116", "#CE1126"],
    flagDirection: "vertical",
    founded: 1859,
    foundedNote: {
      fa: "قدمت رومانی از اتحاد شاهزاده‌نشین‌های والاچیا و مولداوی به رهبری الکساندر جان کوزا در سال ۱۸۵۹ حساب می‌شود؛ ریشه‌های داسیایی آن باستان است.",
      en: "Counted from the 1859 union of Wallachia and Moldavia under Alexandru Ioan Cuza."
    },
    summary: {
      fa: "سرزمین قلعه‌های ترانسیلوانیا، کوه‌های کارپات، دلتای دانوب و میراث زبان لاتین در شرق اروپا.",
      en: "Land of Transylvanian castles, the Carpathian wilderness, and Latin heritage in the East."
    },
    facts: {
      capital: { fa: "بخارست", en: "Bucharest" },
      language: { fa: "رومانیایی", en: "Romanian" },
      population: { fa: "حدود ۱۹ میلیون نفر", en: "About 19 million" }
    },
    overview: {
      fa: [
        "رومانی با تبار رومی و داسیایی، تنها کشور رومانس‌زبان در اروپای شرقی است و کوه‌های کارپات و قلعه بران نمادهای مشهور آنند."
      ],
      en: [
        "Bearing the name of Rome, Romania preserves a Romance tongue surrounded by Slavic neighbours and boasts UNESCO-listed monasteries."
      ]
    },
    timeline: [
      { year: 1859, title: { fa: "اتحاد شاهزاده‌نشین‌ها", en: "Union of the Principalities" }, text: { fa: "آغاز شکل‌گیری دولت مدرن رومانی.", en: "Union of Moldavia and Wallachia." } },
      { year: 1918, title: { fa: "اتحاد بزرگ ۱۹۱۸", en: "Great Union of 1918" }, text: { fa: "پیوستن ترانسیلوانیا به رومانی.", en: "Transylvania joined to form Greater Romania." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "san-marino",
    name: { fa: "سان مارینو", en: "San Marino" },
    flag: ["#FFFFFF", "#5EB6E4"],
    founded: 301,
    foundedNote: {
      fa: "قدمت سان مارینو از ۳ سپتامبر سال ۳۰۱ میلادی و پناهندگی سنت مارینوس در کوه تیتانو حساب می‌شود؛ کهن‌ترین جمهوری مستقل موجود در جهان.",
      en: "Counted from 3 September 301 CE by Saint Marinus, making it the world's oldest surviving sovereign republic."
    },
    summary: {
      fa: "کهن‌ترین جمهوری جهان بر فراز کوه تیتانو با سه برج سنگی افسانه‌ای و سنت آزادی پایدار.",
      en: "The world's oldest surviving constitutional republic, atop Mount Titano."
    },
    facts: {
      capital: { fa: "سان مارینو", en: "San Marino" },
      language: { fa: "ایتالیایی", en: "Italian" },
      population: { fa: "حدود ۳۴ هزار نفر", en: "About 34,000" }
    },
    overview: {
      fa: [
        "جمهوری سان مارینو محصور در خاک ایتالیا با قانون اساسی سال ۱۶۰۰ میلادی، قرن‌ها آزادی و دموکراسی بدون گسست را تجربه کرده است."
      ],
      en: [
        "Enclaved by Italy, San Marino's constitution of 1600 is among the oldest governing documents still in force."
      ]
    },
    timeline: [
      { year: 301, title: { fa: "بنیان‌گذاری به دست سنت مارینوس", en: "Founding by Saint Marinus" }, text: { fa: "تأسیس پناهگاه آزادی بر فراز کوه تیتانو.", en: "Founding of the community of freedom." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "serbia",
    name: { fa: "صربستان", en: "Serbia" },
    flag: ["#C6363C", "#0C4076", "#FFFFFF"],
    founded: 1217,
    foundedNote: {
      fa: "قدمت صربستان از تاج‌گذاری استفان نمانیا به‌عنوان پادشاه صربستان در سال ۱۲۱۷ میلادی محاسبه می‌شود.",
      en: "Counted from 1217 CE and the coronation of Stefan the First-Crowned by the Pope."
    },
    summary: {
      fa: "تقاطع تمدنی در کرانه‌های دانوب و ساوا با صومعه‌های قرون وسطایی نمانجیچ و پایتخت بلگراد.",
      en: "Crossroad of the Danube and Sava with profound Nemanjic heritage and bustling Belgrade."
    },
    facts: {
      capital: { fa: "بلگراد", en: "Belgrade" },
      language: { fa: "صربی", en: "Serbian" },
      population: { fa: "حدود ۶٫۶ میلیون نفر", en: "About 6.6 million" }
    },
    overview: {
      fa: [
        "صربستان با نبرد مشهور کوزوو در ۱۳۸۹ و استقلال در سده‌ی نوزدهم، نقشی تعیین‌کننده در تحولات سیاسی و فرهنگی بالکان داشته است."
      ],
      en: [
        "Serbia's medieval empire reached its peak under Stefan Dušan, later playing a central role in Yugoslav and Balkan history."
      ]
    },
    timeline: [
      { year: 1217, title: { fa: "پادشاهی استفان اول", en: "Kingdom of Serbia" }, text: { fa: "رسمیت پادشاهی قرون وسطایی صربستان.", en: "Stefan crowned first King of Serbia." } },
      { year: 1878, title: { fa: "استقلال در کنگره برلین", en: "Congress of Berlin" }, text: { fa: "شناسایی استقلال از امپراتوری عثمانی.", en: "International recognition of independence." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "slovakia",
    name: { fa: "اسلواکی", en: "Slovakia" },
    flag: ["#FFFFFF", "#0B4EA2", "#EE1C25"],
    founded: 1993,
    foundedNote: {
      fa: "قدمت استقلال اسلواکی از اول ژانویه ۱۹۹۳ و انحلال مسالمت‌آمیز چکسلواکی (طلاق مخملی) حساب می‌شود.",
      en: "Independent statehood established on 1 January 1993 following the Velvet Divorce."
    },
    summary: {
      fa: "سرزمین قلعه‌های کوهستانی، رشته‌کوه‌های تاترا و پایتخت تاریخی براتیسلاوا در کنار دانوب.",
      en: "Land of the High Tatras, fairy-tale castles, and Danube beauty at Bratislava."
    },
    facts: {
      capital: { fa: "براتیسلاوا", en: "Bratislava" },
      language: { fa: "اسلواکی", en: "Slovak" },
      population: { fa: "حدود ۵٫۴ میلیون نفر", en: "About 5.4 million" }
    },
    overview: {
      fa: [
        "اسلواکی با قلعه‌های دیدنی چون اسپیژ و قله‌های آلپی تاترا، پس از جدایی مسالمت‌آمیز از چک، به عضو فعال اتحادیه اروپا و ناتو تبدیل شد."
      ],
      en: [
        "Boasting dramatic Carpathian castles and caves, Slovakia transitioned into a thriving European economy."
      ]
    },
    timeline: [
      { year: 1993, title: { fa: "تولد جمهوری اسلواکی", en: "Velvet Divorce" }, text: { fa: "اسلواکی و چک در کمال صلح از هم جدا شدند.", en: "Peaceful establishment of sovereign Slovakia." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "slovenia",
    name: { fa: "اسلوونی", en: "Slovenia" },
    flag: ["#FFFFFF", "#005CE6", "#ED1C24"],
    founded: 1991,
    foundedNote: {
      fa: "قدمت استقلال اسلوونی از ۲۵ ژوئن ۱۹۹۱ با اعلام استقلال از یوگسلاوی محاسبه می‌شود.",
      en: "Independence proclaimed on 25 June 1991 from Yugoslavia."
    },
    summary: {
      fa: "بهشت سرسبز آلپ جولیان با دریاچه‌ی افسانه‌ای بلد و غارهای شگفت‌انگیز پستوینا.",
      en: "Scenic Alpine nation featuring Lake Bled and Postojna Caves."
    },
    facts: {
      capital: { fa: "لیوبلیانا", en: "Ljubljana" },
      language: { fa: "اسلوونیایی", en: "Slovene" },
      population: { fa: "حدود ۲٫۱ میلیون نفر", en: "About 2.1 million" }
    },
    overview: {
      fa: [
        "اسلوونی پیوندگاه کوه‌های آلپ، دریای آدریاتیک و دشت‌های پانونی است و با معماری یوژه پلچنیک در لیوبلیانا شناخته می‌شود."
      ],
      en: [
        "Slovenia blends Alpine peaks and Mediterranean coastlines, celebrated for pristine nature and green living."
      ]
    },
    timeline: [
      { year: 1991, title: { fa: "استقلال اسلوونی", en: "Independence" }, text: { fa: "جنگ ده روزه و تثبیت استقلال کامل.", en: "Ten-Day War secured Slovenian sovereignty." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "ukraine",
    name: { fa: "اوکراین", en: "Ukraine" },
    flag: ["#0057B7", "#FFD700"],
    founded: 1991,
    foundedNote: {
      fa: "قدمت استقلال اوکراین نوین از ۲۴ اوت ۱۹۹۱ اعلام شده است؛ ریشه‌های روس کی‌یف در آن به سده نهم میلادی می‌رسد.",
      en: "Sovereignty proclaimed on 24 August 1991; historic root in Kievan Rus dates to the 9th century."
    },
    summary: {
      fa: "انبار غله‌ی اروپا در کرانه‌های دنیپر با تاریخ کی‌یف باستان، گنبدهای زرین و فرهنگ کوزاک‌ها.",
      en: "Breadbasket of Europe with ancient Kievan Rus golden domes and Cossack traditions."
    },
    facts: {
      capital: { fa: "کی‌یف", en: "Kyiv" },
      language: { fa: "اوکراینی", en: "Ukrainian" },
      population: { fa: "حدود ۳۸ میلیون نفر", en: "About 38 million" }
    },
    overview: {
      fa: [
        "اوکراین بزرگ‌ترین کشور کاملاً اروپایی است و رودخانه‌ی دنیپر از میان دشت‌های حاصلخیز آن به دریای سیاه می‌ریزد."
      ],
      en: [
        "Ukraine occupies a vital expanse of fertile plains, centered on the ancient Slavic capital of Kyiv."
      ]
    },
    timeline: [
      { year: 988, title: { fa: "تعمید کی‌یف", en: "Christianization of Kyiv" }, text: { fa: "ولادیمیر کبیر کی‌یف را کانون مسیحیت کرد.", en: "Kyivan Rus adopted Christianity." } },
      { year: 1991, title: { fa: "اعلام استقلال اوکراین", en: "Act of Declaration of Independence" }, text: { fa: "استقلال رسمی در ۲۴ اوت تصویب شد.", en: "Parliament declared independence from the USSR." } }
    ],
    added: "2026-10-10"
  },
  {
    id: "vatican-city",
    name: { fa: "واتیکان", en: "Vatican City" },
    flag: ["#FFE000", "#FFFFFF"],
    flagDirection: "vertical",
    founded: 1929,
    foundedNote: {
      fa: "قدمت کشور مستقل واتیکان از ۱۱ فوریه ۱۹۲۹ و امضای پیمان لاتران میان پاپ پیوس یازدهم و پادشاهی ایتالیا حساب می‌شود.",
      en: "Established as an independent state on 11 February 1929 under the Lateran Treaty."
    },
    summary: {
      fa: "کوچک‌ترین کشور مستقل جهان در قلب رم؛ مقر پاپ و کلیسای کاتولیک، گنجینه‌ی شاهکارهای میکلانژ.",
      en: "The world's smallest sovereign state, Holy See headquarters, and home to St. Peter's."
    },
    facts: {
      capital: { fa: "واتیکان", en: "Vatican City" },
      language: { fa: "ایتالیایی، لاتین", en: "Italian, Latin" },
      population: { fa: "حدود ۸۰۰ نفر", en: "About 800" }
    },
    overview: {
      fa: [
        "شهر واتیکان کانون معنوی بیش از یک میلیارد مسیحی کاتولیک در جهان است و کلیسای سنت پیتر و موزه‌های آن بی‌نظیرند."
      ],
      en: [
        "Walled enclave in Rome, Vatican City is the administrative center of the Catholic Church and holds the Sistine Chapel."
      ]
    },
    timeline: [
      { year: 1929, title: { fa: "پیمان لاتران", en: "Lateran Treaty" }, text: { fa: "شناسایی استقلال کامل شهر واتیکان.", en: "Holy See recognized as sovereign state." } }
    ],
    added: "2026-10-10"
  }
];
