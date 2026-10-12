import { CountrySection, TimelineEvent } from '../../types';

/**
 * Full history (sections + timeline) for the nine countries that were written in detail.
 * src/data/countries/index.ts applies these on top of the short country entries,
 * so the cards, quick facts, overview and flags keep coming from the regional files.
 * To change a country's long history, edit it here.
 */
export interface DetailedHistory {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const DETAILED_HISTORIES: Record<string, DetailedHistory> = {
  "germany": {
    "sections": [
      {
        "id": "origins",
        "title": {
          "fa": "ریشه‌ها: ژرمن‌ها و روم",
          "en": "Roots: the Germanic tribes and Rome"
        },
        "text": {
          "fa": [
            "رومی‌ها قبایلی را که در شرق رود راین و شمال رود دانوب زندگی می‌کردند «ژرمن» می‌نامیدند. این قبایل یک ملت یکپارچه نبودند و هر کدام رهبران و سرزمین خودشان را داشتند.",
            "در سال ۹ میلادی ائتلافی از این قبایل به رهبری آرمینیوس در جنگل توتوبورگ سه لژیون رومی را نابود کرد. پس از آن روم نتوانست بیشتر سرزمین‌های شرق راین را به‌طور پایدار تصرف کند و این رود سال‌ها مرز اصلی میان دنیای رومی و دنیای ژرمنی ماند."
          ],
          "en": [
            "The Romans used the name ‘Germani’ for the tribes living east of the Rhine and north of the Danube. These tribes were not a single people; each had its own leaders and land.",
            "In 9 CE a coalition of tribes led by Arminius destroyed three Roman legions in the Teutoburg Forest. After that Rome never managed to take most of the land east of the Rhine permanently, and the river remained the main border between the Roman and Germanic worlds for years."
          ]
        }
      },
      {
        "id": "empire",
        "title": {
          "fa": "از فرانک‌ها تا امپراتوری مقدس روم",
          "en": "From the Franks to the Holy Roman Empire"
        },
        "text": {
          "fa": [
            "پس از سقوط روم غربی، فرانک‌ها قدرتمندترین قدرت غرب اروپا شدند. شارلمانی، پادشاه فرانک‌ها، در سال ۸۰۰ در رم امپراتور شد. پس از مرگ او و جانشینش، در سال ۸۴۳ پیمان وردون امپراتوری را میان سه وارث تقسیم کرد و بخش شرقی آن به لویی ژرمنی رسید؛ این بخش بعدها هسته‌ی آلمان شد.",
            "در سال ۹۶۲ اتو اول در رم تاج امپراتوری گرفت و این تاریخ را آغاز امپراتوری مقدس روم می‌دانند، امپراتوری‌ای که تا ۱۸۰۶ دوام آورد. این امپراتوری دولتی یکپارچه نبود؛ مجموعه‌ای سست از شاهزاده‌نشین‌ها، دوک‌نشین‌ها و شهرهای آزاد بود. فرمان زرین ۱۳۵۶ مشخص کرد که امپراتور را هفت شاهزاده‌ی انتخاب‌کننده برمی‌گزینند."
          ],
          "en": [
            "After the fall of the Western Roman Empire the Franks became the strongest power in western Europe. Charlemagne, king of the Franks, was crowned emperor in Rome in 800. After his death and that of his successor, the Treaty of Verdun in 843 divided the empire among three heirs, and its eastern part went to Louis the German; this part later became the core of Germany.",
            "In 962 Otto I was crowned emperor in Rome, and this date is traditionally seen as the beginning of the Holy Roman Empire, which lasted until 1806. It was not a unified state but a loose collection of principalities, duchies and free cities. The Golden Bull of 1356 fixed that the emperor would be chosen by seven prince-electors."
          ]
        }
      },
      {
        "id": "reformation",
        "title": {
          "fa": "اصلاحات دینی و جنگ سی‌ساله",
          "en": "The Reformation and the Thirty Years’ War"
        },
        "text": {
          "fa": [
            "بنا بر روایت سنتی، مارتین لوتر در ۳۱ اکتبر ۱۵۱۷ نود و پنج تز خود را درباره‌ی فروش آمرزش‌نامه‌ها اعلام کرد. این اعتراض به جنبش اصلاحات دینی تبدیل شد و مسیحیت غربی را به کاتولیک و پروتستان تقسیم کرد. صلح آگسبورگ در ۱۵۵۵ به شاهزادگان آلمانی اجازه داد مذهب لوتری یا کاتولیک را برای قلمرو خود برگزینند.",
            "اختلاف‌های مذهبی و سیاسی سرانجام به جنگ سی‌ساله (۱۶۱۸ تا ۱۶۴۸) رسید؛ جنگی که بخش‌های بزرگی از سرزمین‌های آلمانی را ویران کرد و با صلح وستفالی پایان یافت."
          ],
          "en": [
            "According to tradition, Martin Luther announced his Ninety-five Theses on the sale of indulgences on 31 October 1517. The protest grew into the Reformation and split Western Christianity into Catholic and Protestant churches. The Peace of Augsburg in 1555 allowed German princes to choose Lutheranism or Catholicism for their own territory.",
            "Religious and political conflict finally led to the Thirty Years’ War (1618 to 1648), which devastated large parts of the German lands and ended with the Peace of Westphalia."
          ]
        }
      },
      {
        "id": "unification",
        "title": {
          "fa": "راه اتحاد و امپراتوری آلمان",
          "en": "The road to unification and the German Empire"
        },
        "text": {
          "fa": [
            "در سال ۱۸۰۶، در جریان جنگ‌های ناپلئون، امپراتوری مقدس روم منحل شد. کنگره‌ی وین در ۱۸۱۵ کنفدراسیون آلمان را شامل ۳۹ دولت ساخت. در انقلاب‌های ۱۸۴۸ مجلس فرانکفورت برای ساختن آلمانی متحد و مشروطه تشکیل شد، اما به نتیجه نرسید.",
            "سرانجام پروس به رهبری اتو فون بیسمارک در جنگ‌هایی علیه دانمارک (۱۸۶۴)، اتریش (۱۸۶۶) و فرانسه (۱۸۷۰ تا ۱۸۷۱) پیروز شد. در ۱۸ ژانویه‌ی ۱۸۷۱ در تالار آینه‌ی کاخ ورسای، ویلهلم اول امپراتور آلمان اعلام شد. آلمان در دهه‌های بعد به سرعت صنعتی شد."
          ],
          "en": [
            "In 1806, during the Napoleonic Wars, the Holy Roman Empire was dissolved. The Congress of Vienna created the German Confederation of 39 states in 1815. During the revolutions of 1848 the Frankfurt Parliament met to build a united, constitutional Germany, but did not succeed.",
            "In the end Prussia, led by Otto von Bismarck, won wars against Denmark (1864), Austria (1866) and France (1870 to 1871). On 18 January 1871, in the Hall of Mirrors at Versailles, Wilhelm I was proclaimed German Emperor. In the following decades Germany industrialized rapidly."
          ]
        }
      },
      {
        "id": "ww1",
        "title": {
          "fa": "جنگ جهانی اول و جمهوری وایمار",
          "en": "The First World War and the Weimar Republic"
        },
        "text": {
          "fa": [
            "آلمان در جنگ جهانی اول (۱۹۱۴ تا ۱۹۱۸) در کنار اتریش-مجارستان جنگید و شکست خورد. در نوامبر ۱۹۱۸ ویلهلم دوم کناره‌گیری کرد و جمهوری اعلام شد. معاهده‌ی ورسای در ۱۹۱۹ بخشی از خاک آلمان را از آن گرفت، ارتش آن را محدود کرد و غرامت بر آن تحمیل کرد.",
            "جمهوری وایمار (۱۹۱۹ تا ۱۹۳۳) نخستین دموکراسی پایدار آلمان در نظر گرفته می‌شود و دوره‌ای پرشور در هنر و فرهنگ بود. اما ابرتورم ۱۹۲۳ و بحران بزرگ اقتصادی پس از ۱۹۲۹ آن را به‌شدت تضعیف کرد."
          ],
          "en": [
            "Germany fought in the First World War (1914 to 1918) alongside Austria-Hungary and was defeated. In November 1918 Wilhelm II abdicated and a republic was proclaimed. The Treaty of Versailles in 1919 took away part of German territory, limited its army and imposed reparations.",
            "The Weimar Republic (1919 to 1933) is regarded as Germany’s first lasting democracy, and it was a lively period in art and culture. But the hyperinflation of 1923 and the Great Depression after 1929 weakened it badly."
          ]
        }
      },
      {
        "id": "nazi",
        "title": {
          "fa": "دوره‌ی نازی‌ها و جنگ جهانی دوم",
          "en": "The Nazi era and the Second World War"
        },
        "text": {
          "fa": [
            "در ۳۰ ژانویه‌ی ۱۹۳۳ آدولف هیتلر، رهبر حزب نازی، به صدراعظمی منصوب شد. در ماه‌های بعد حکومت دموکراتیک برچیده شد و دیکتاتوری تک‌حزبی برقرار شد. رژیم نازی یهودیان و دیگر گروه‌ها را تحت پیگرد قرار داد؛ قوانین نورنبرگ (۱۹۳۵) حقوق یهودیان را سلب کرد و در شب بلورین (۹ و ۱۰ نوامبر ۱۹۳۸) به یهودیان، کنیسه‌ها و مغازه‌هایشان در سراسر کشور حمله شد.",
            "جنگ جهانی دوم با حمله‌ی آلمان به لهستان در اول سپتامبر ۱۹۳۹ آغاز شد. در دل این جنگ، رژیم نازی و همدستانش حدود شش میلیون یهودی را کشتند و میلیون‌ها نفر دیگر، از جمله رومی‌ها، معلولان، اسیران جنگی شوروی و مخالفان سیاسی، نیز قربانی شدند.",
            "هیتلر در ۳۰ آوریل ۱۹۴۵ در برلین درگذشت و آلمان در ماه مه تسلیم شد. رژیم نازی پایان یافت و کشور میان چهار قدرت پیروز تقسیم شد. دادگاه نورنبرگ (۱۹۴۵ تا ۱۹۴۶) رهبران ارشد نازی را محاکمه کرد."
          ],
          "en": [
            "On 30 January 1933 Adolf Hitler, leader of the Nazi Party, was appointed chancellor. Over the following months democratic government was dismantled and a one-party dictatorship was set up. The Nazi regime persecuted Jews and other groups; the Nuremberg Laws (1935) stripped Jews of their rights, and during Kristallnacht (9 and 10 November 1938) Jews, their synagogues and their shops were attacked across the country.",
            "The Second World War began when Germany invaded Poland on 1 September 1939. During the war the Nazi regime and its collaborators murdered about six million Jews, and millions of others were also killed.",
            "Hitler died in Berlin on 30 April 1945 and Germany surrendered in May. The Nazi regime ended and the country was divided among the four victorious powers. The Nuremberg trials (1945 to 1946) put the top Nazi leaders on trial."
          ]
        }
      },
      {
        "id": "division",
        "title": {
          "fa": "تقسیم و اتحاد دوباره",
          "en": "Division and reunification"
        },
        "text": {
          "fa": [
            "پس از جنگ، آلمان و پایتختش برلین میان آمریکا، بریتانیا، فرانسه و شوروی تقسیم شد. در سال ۱۹۴۹ دو دولت پدید آمد: جمهوری فدرال آلمان (غربی) و جمهوری دموکراتیک آلمان (شرقی). در ۱۳ اوت ۱۹۶۱ دیوار برلین ساخته شد تا مردم نتوانند از شرق به غرب بروند.",
            "در ۹ نوامبر ۱۹۸۹ مرزها باز شد و دیوار برلین فروریخت. آلمان شرقی در ۳ اکتبر ۱۹۹۰ به جمهوری فدرال پیوست و آلمان دوباره یک کشور شد."
          ],
          "en": [
            "After the war Germany and its capital Berlin were divided among the United States, Britain, France and the Soviet Union. In 1949 two states appeared: the Federal Republic of Germany (West) and the German Democratic Republic (East). On 13 August 1961 the Berlin Wall was built to stop people from going from East to West.",
            "On 9 November 1989 the border opened and the Berlin Wall fell. East Germany joined the Federal Republic on 3 October 1990 and Germany became one country again."
          ]
        }
      },
      {
        "id": "today",
        "title": {
          "fa": "آلمان امروز",
          "en": "Germany today"
        },
        "text": {
          "fa": [
            "آلمان امروز یک جمهوری پارلمانی فدرال است و پایتختش دوباره برلین است. این کشور عضو اتحادیه‌ی اروپا و ناتو است و بزرگ‌ترین اقتصاد اتحادیه‌ی اروپا را دارد."
          ],
          "en": [
            "Today Germany is a federal parliamentary republic and its capital is once again Berlin. It is a member of the European Union and NATO and has the largest economy in the European Union."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": 9,
        "title": {
          "fa": "نبرد جنگل توتوبورگ",
          "en": "Battle of the Teutoburg Forest"
        },
        "text": {
          "fa": "ائتلافی از قبایل ژرمن به رهبری آرمینیوس سه لژیون رومی را نابود کرد.",
          "en": "A coalition of Germanic tribes led by Arminius destroyed three Roman legions."
        }
      },
      {
        "year": 800,
        "title": {
          "fa": "تاج‌گذاری شارلمانی",
          "en": "Coronation of Charlemagne"
        },
        "text": {
          "fa": "شارلمانی، پادشاه فرانک‌ها، روز کریسمس در رم از سوی پاپ لئوی سوم امپراتور شد.",
          "en": "Charlemagne, king of the Franks, was crowned emperor in Rome by Pope Leo III on Christmas Day."
        }
      },
      {
        "year": 843,
        "title": {
          "fa": "پیمان وردون",
          "en": "Treaty of Verdun"
        },
        "text": {
          "fa": "امپراتوری کارولنژی میان سه وارث تقسیم شد. لویی ژرمنی بخش شرقی را گرفت که بعدها هسته‌ی آلمان شد.",
          "en": "The Carolingian Empire was divided among three heirs. Louis the German received the eastern part, which later became the core of Germany."
        }
      },
      {
        "year": 962,
        "title": {
          "fa": "اتو اول امپراتور می‌شود",
          "en": "Otto I becomes emperor"
        },
        "text": {
          "fa": "اتو اول در رم تاج امپراتوری گرفت؛ آغاز سنتی امپراتوری مقدس روم.",
          "en": "Otto I was crowned emperor in Rome, the traditional beginning of the Holy Roman Empire."
        }
      },
      {
        "year": 1356,
        "title": {
          "fa": "فرمان زرین",
          "en": "The Golden Bull"
        },
        "text": {
          "fa": "امپراتور شارل چهارم قاعده‌ی انتخاب امپراتور را مشخص کرد: هفت شاهزاده‌ی انتخاب‌کننده.",
          "en": "Emperor Charles IV fixed the rule for choosing the emperor: seven prince-electors."
        }
      },
      {
        "year": 1517,
        "title": {
          "fa": "نود و پنج تز لوتر",
          "en": "Luther’s Ninety-five Theses"
        },
        "text": {
          "fa": "بنا بر روایت سنتی، مارتین لوتر در ۳۱ اکتبر نود و پنج تز خود را اعلام کرد؛ آغاز اصلاحات دینی.",
          "en": "According to tradition, Martin Luther announced his Ninety-five Theses on 31 October, the start of the Reformation."
        }
      },
      {
        "year": 1555,
        "title": {
          "fa": "صلح آگسبورگ",
          "en": "Peace of Augsburg"
        },
        "text": {
          "fa": "شاهزادگان آلمانی حق یافتند مذهب لوتری یا کاتولیک را برای قلمرو خود برگزینند.",
          "en": "German princes gained the right to choose Lutheranism or Catholicism for their territory."
        }
      },
      {
        "year": 1618,
        "title": {
          "fa": "آغاز جنگ سی‌ساله",
          "en": "The Thirty Years’ War begins"
        },
        "text": {
          "fa": "جنگی مذهبی و سیاسی که بخش‌های بزرگی از سرزمین‌های آلمانی را ویران کرد.",
          "en": "A religious and political war that devastated large parts of the German lands."
        }
      },
      {
        "year": 1648,
        "title": {
          "fa": "صلح وستفالی",
          "en": "Peace of Westphalia"
        },
        "text": {
          "fa": "جنگ سی‌ساله پایان یافت.",
          "en": "The Thirty Years’ War ended."
        }
      },
      {
        "year": 1806,
        "title": {
          "fa": "پایان امپراتوری مقدس روم",
          "en": "End of the Holy Roman Empire"
        },
        "text": {
          "fa": "فرانتس دوم در پی فشار ناپلئون از مقام امپراتوری کناره‌گیری کرد.",
          "en": "Francis II gave up the imperial title under pressure from Napoleon."
        }
      },
      {
        "year": 1815,
        "title": {
          "fa": "کنفدراسیون آلمان",
          "en": "The German Confederation"
        },
        "text": {
          "fa": "کنگره‌ی وین اتحادیه‌ای سست از ۳۹ دولت آلمانی پدید آمد.",
          "en": "The Congress of Vienna created a loose union of 39 German states."
        }
      },
      {
        "year": 1848,
        "title": {
          "fa": "انقلاب‌های ۱۸۴۸",
          "en": "The revolutions of 1848"
        },
        "text": {
          "fa": "مجلس فرانکفورت برای ساختن آلمانی متحد و مشروطه تشکیل شد، اما به نتیجه نرسید.",
          "en": "The Frankfurt Parliament met to build a united, constitutional Germany, but did not succeed."
        }
      },
      {
        "year": 1871,
        "title": {
          "fa": "تأسیس امپراتوری آلمان",
          "en": "Founding of the German Empire"
        },
        "text": {
          "fa": "در ۱۸ ژانویه در تالار آینه‌ی ورسای ویلهلم اول امپراتور آلمان اعلام شد. بیسمارک صدراعظم بود.",
          "en": "On 18 January, in the Hall of Mirrors at Versailles, Wilhelm I was proclaimed German Emperor. Bismarck was chancellor."
        }
      },
      {
        "year": 1914,
        "title": {
          "fa": "آغاز جنگ جهانی اول",
          "en": "The First World War begins"
        },
        "text": {
          "fa": "آلمان در کنار اتریش-مجارستان وارد جنگی شد که تا ۱۹۱۸ ادامه یافت.",
          "en": "Germany entered, alongside Austria-Hungary, a war that lasted until 1918."
        }
      },
      {
        "year": 1918,
        "title": {
          "fa": "پایان جنگ و سقوط قیصر",
          "en": "End of the war and the fall of the Kaiser"
        },
        "text": {
          "fa": "ویلهلم دوم کناره‌گیری کرد و جمهوری اعلام شد.",
          "en": "Wilhelm II abdicated and a republic was proclaimed."
        }
      },
      {
        "year": 1919,
        "title": {
          "fa": "معاهده‌ی ورسای و جمهوری وایمار",
          "en": "Treaty of Versailles and the Weimar Republic"
        },
        "text": {
          "fa": "آلمان بخشی از خاک خود را از دست داد و غرامت پرداخت. جمهوری وایمار پایه‌گذاری شد.",
          "en": "Germany lost part of its territory and paid reparations. The Weimar Republic was founded."
        }
      },
      {
        "year": 1933,
        "title": {
          "fa": "هیتلر صدراعظم می‌شود",
          "en": "Hitler becomes chancellor"
        },
        "text": {
          "fa": "در ۳۰ ژانویه آدولف هیتلر به صدراعظمی منصوب شد و ظرف چند ماه دیکتاتوری تک‌حزبی نازی‌ها برقرار شد.",
          "en": "On 30 January Adolf Hitler was appointed chancellor, and within months a one-party Nazi dictatorship was in place."
        }
      },
      {
        "year": 1938,
        "title": {
          "fa": "شب بلورین",
          "en": "Kristallnacht"
        },
        "text": {
          "fa": "۹ و ۱۰ نوامبر: حمله‌ی سازمان‌یافته به یهودیان، کنیسه‌ها و مغازه‌هایشان در سراسر آلمان.",
          "en": "9 and 10 November: organized attacks on Jews, their synagogues and their shops across Germany."
        }
      },
      {
        "year": 1939,
        "title": {
          "fa": "آغاز جنگ جهانی دوم",
          "en": "The Second World War begins"
        },
        "text": {
          "fa": "در اول سپتامبر آلمان به لهستان حمله کرد.",
          "en": "On 1 September Germany invaded Poland."
        }
      },
      {
        "year": 1941,
        "yearText": {
          "fa": "۱۹۴۱ تا ۱۹۴۵",
          "en": "1941 to 1945"
        },
        "title": {
          "fa": "هولوکاست",
          "en": "The Holocaust"
        },
        "text": {
          "fa": "رژیم نازی و همدستانش حدود شش میلیون یهودی را کشتند و میلیون‌ها نفر دیگر، از جمله رومی‌ها، معلولان، اسیران جنگی شوروی و مخالفان سیاسی، نیز قربانی شدند.",
          "en": "The Nazi regime and its collaborators murdered about six million Jews, and millions of others were also killed."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "پایان جنگ و رژیم نازی",
          "en": "End of the war and the Nazi regime"
        },
        "text": {
          "fa": "هیتلر ۳۰ آوریل در برلین درگذشت و آلمان در ماه مه تسلیم شد. رژیم نازی پایان یافت و کشور میان چهار قدرت پیروز تقسیم شد.",
          "en": "Hitler died in Berlin on 30 April and Germany surrendered in May. The Nazi regime ended and the country was divided among the four victorious powers."
        }
      },
      {
        "year": 1945,
        "yearText": {
          "fa": "۱۹۴۵ تا ۱۹۴۶",
          "en": "1945 to 1946"
        },
        "title": {
          "fa": "دادگاه نورنبرگ",
          "en": "The Nuremberg trials"
        },
        "text": {
          "fa": "رهبران ارشد نازی در یک دادگاه بین‌المللی محاکمه شدند.",
          "en": "The top Nazi leaders were tried by an international tribunal."
        }
      },
      {
        "year": 1949,
        "title": {
          "fa": "تأسیس دو دولت آلمانی",
          "en": "Two German states are founded"
        },
        "text": {
          "fa": "جمهوری فدرال آلمان (غربی) در ماه مه و جمهوری دموکراتیک آلمان (شرقی) در اکتبر تأسیس شد.",
          "en": "The Federal Republic (West) was founded in May and the German Democratic Republic (East) in October."
        }
      },
      {
        "year": 1961,
        "title": {
          "fa": "ساخت دیوار برلین",
          "en": "Building of the Berlin Wall"
        },
        "text": {
          "fa": "دیوار در ۱۳ اوت ساخته شد.",
          "en": "The wall was built on 13 August."
        }
      },
      {
        "year": 1989,
        "title": {
          "fa": "سقوط دیوار برلین",
          "en": "The Berlin Wall falls"
        },
        "text": {
          "fa": "در ۹ نوامبر مرزها باز شد.",
          "en": "On 9 November the border opened."
        }
      },
      {
        "year": 1990,
        "title": {
          "fa": "اتحاد دوباره‌ی آلمان",
          "en": "German reunification"
        },
        "text": {
          "fa": "در ۳ اکتبر آلمان شرقی به جمهوری فدرال پیوست.",
          "en": "On 3 October East Germany joined the Federal Republic."
        }
      }
    ]
  },
  "italy": {
    "sections": [
      {
        "id": "origins",
        "title": {
          "fa": "ریشه‌ها: اتروسک‌ها، یونانیان و رم آغازین",
          "en": "Roots: the Etruscans, the Greeks and early Rome"
        },
        "text": {
          "fa": [
            "پیش از رم، مردمان گوناگونی در ایتالیا زندگی می‌کردند. اتروسک‌ها در مرکز شبه‌جزیره (توسکانای امروز) تمدنی پیشرفته داشتند و یونانیان از قرن هشتم پیش از میلاد در جنوب ایتالیا و سیسیل شهرهای مستعمره ساختند؛ منطقه‌ای که بعدها «یونان بزرگ» نام گرفت.",
            "بنا بر روایت سنتی، رم در سال ۷۵۳ پیش از میلاد بنا شد و آن را پادشاهان اداره می‌کردند. در سال ۵۰۹ پیش از میلاد (باز هم بنا بر سنت) پادشاهی برچیده شد و جمهوری روم آغاز شد؛ نظامی که قدرت را میان مجلس سنا و مقام‌های انتخابی تقسیم می‌کرد."
          ],
          "en": [
            "Before Rome, many different peoples lived in Italy. The Etruscans in the centre of the peninsula (today’s Tuscany) had an advanced civilization, and from the eighth century BCE the Greeks founded colonies in southern Italy and Sicily, a region later called ‘Magna Graecia’.",
            "According to tradition Rome was founded in 753 BCE and was ruled by kings. In 509 BCE (again according to tradition) the monarchy was abolished and the Roman Republic began, a system that shared power between the Senate and elected magistrates."
          ]
        }
      },
      {
        "id": "rome",
        "title": {
          "fa": "از جمهوری تا امپراتوری روم",
          "en": "From the Republic to the Roman Empire"
        },
        "text": {
          "fa": [
            "روم در قرن‌های بعد ابتدا کل شبه‌جزیره‌ی ایتالیا را زیر نفوذ گرفت و سپس در جنگ‌های پونیک (۲۶۴ تا ۱۴۶ پیش از میلاد) با کارتاژ رقابت کرد. هانیبال، سردار کارتاژی، در ۲۱۸ پیش از میلاد از آلپ گذشت و به ایتالیا حمله کرد، اما سرانجام روم پیروز شد.",
            "رقابت سیاسی و جنگ‌های داخلی جمهوری را فرسود. ژولیوس سزار در ۴۹ پیش از میلاد از رود روبیکون گذشت و در ۴۴ پیش از میلاد ترور شد. پس از جنگ‌های داخلی بیشتر، اکتاویان در ۲۷ پیش از میلاد لقب آگوستوس گرفت و نخستین امپراتور روم شد. امپراتوری در زمان تراژان (۱۱۷ میلادی) به بیشترین وسعت خود رسید.",
            "در ۳۱۳ میلادی فرمان میلان آزادی دین را برای مسیحیان تضمین کرد. سرانجام در ۴۷۶ میلادی اودوآکر، سردار ژرمن، آخرین امپراتور روم غربی را برکنار کرد و این تاریخ را پایان روم غربی می‌دانند."
          ],
          "en": [
            "In the following centuries Rome first brought the whole Italian peninsula under its influence and then fought Carthage in the Punic Wars (264 to 146 BCE). Hannibal, the Carthaginian general, crossed the Alps and invaded Italy in 218 BCE, but Rome finally won.",
            "Political rivalry and civil wars wore the Republic down. Julius Caesar crossed the Rubicon in 49 BCE and was assassinated in 44 BCE. After further civil wars, Octavian took the title Augustus in 27 BCE and became the first Roman emperor. The empire reached its greatest extent under Trajan (117 CE).",
            "In 313 CE the Edict of Milan guaranteed freedom of religion for Christians. Finally in 476 CE Odoacer, a Germanic general, deposed the last Western Roman emperor, and this date is regarded as the end of the Western Roman Empire."
          ]
        }
      },
      {
        "id": "middle-ages",
        "title": {
          "fa": "قرون وسطی: پاپ‌ها، لومباردها و شهرهای آزاد",
          "en": "The Middle Ages: popes, Lombards and free cities"
        },
        "text": {
          "fa": [
            "پس از ۴۷۶ ایتالیا زیر حکومت اوستروگوت‌ها و سپس بخشی زیر بیزانس بود. در ۵۶۸ لومباردها به شمال ایتالیا آمدند. در ۷۵۶ پیپن کوتاه سرزمین‌هایی را به پاپ بخشید که پایه‌ی دولت پاپی شد؛ دولتی که تا ۱۸۷۰ در مرکز ایتالیا باقی ماند. در جنوب، نورمان‌ها در ۱۱۳۰ پادشاهی سیسیل را بنیان گذاشتند.",
            "از قرن یازدهم، شهرهایی مانند ونیز، جنوا، پیزا و فلورانس با تجارت دریایی و بانکداری ثروتمند و تقریباً مستقل شدند. اختلاف میان حامیان پاپ (گولف‌ها) و حامیان امپراتور (گیبلین‌ها) شهرها را درگیر می‌کرد. طاعون سیاه در ۱۳۴۷ از راه دریا به ایتالیا رسید و بخش بزرگی از جمعیت شهرها را از میان برد."
          ],
          "en": [
            "After 476 Italy was ruled by the Ostrogoths and then partly by Byzantium. In 568 the Lombards came to northern Italy. In 756 Pepin the Short gave lands to the pope that became the basis of the Papal States, a state that remained in central Italy until 1870. In the south the Normans founded the Kingdom of Sicily in 1130.",
            "From the eleventh century cities such as Venice, Genoa, Pisa and Florence grew rich through maritime trade and banking and became almost independent. The conflict between supporters of the pope (the Guelphs) and supporters of the emperor (the Ghibellines) drew the cities in. The Black Death reached Italy by sea in 1347 and wiped out a large part of the population of the cities."
          ]
        }
      },
      {
        "id": "renaissance",
        "title": {
          "fa": "رنسانس",
          "en": "The Renaissance"
        },
        "text": {
          "fa": [
            "رنسانس از قرن چهاردهم در شهرهای ایتالیا، به‌ویژه فلورانس، آغاز شد. خانواده‌ی مدیچی که از ۱۴۳۴ بر فلورانس نفوذ یافت، هنرمندان و دانشمندان را حمایت می‌کرد. دانته، لئوناردو داوینچی، میکلانژ، رافائل و گالیله از چهره‌های این دوران‌اند. نگاه تازه به دانش، هنر و انسان در همه‌ی اروپا پخش شد.",
            "اما ایتالیا از نظر سیاسی ضعیف و پراکنده بود. با حمله‌ی شارل هشتم فرانسه در ۱۴۹۴، جنگ‌های ایتالیا آغاز شد و فرانسه، اسپانیا و امپراتوری قدرت‌های بزرگ را در ایتالیا درگیر کرد. در ۱۵۲۷ سپاهیان امپراتور شارل پنجم رم را غارت کردند. با پیمان کاتو-کامبرزی در ۱۵۵۹ جنگ‌ها پایان یافت و اسپانیا قدرت اصلی ایتالیا شد."
          ],
          "en": [
            "The Renaissance began in the fourteenth century in the cities of Italy, above all Florence. The Medici family, who gained influence over Florence from 1434, supported artists and scholars. Dante, Leonardo da Vinci, Michelangelo, Raphael and Galileo are among the figures of this age. A new view of learning, art and the human being spread across Europe.",
            "But Italy was politically weak and divided. With the invasion by Charles VIII of France in 1494 the Italian Wars began, and France, Spain and the Empire fought over Italy. In 1527 the troops of Emperor Charles V sacked Rome. The Peace of Cateau-Cambrésis in 1559 ended the wars and left Spain the main power in Italy."
          ]
        }
      },
      {
        "id": "early-modern",
        "title": {
          "fa": "زیر سایه‌ی قدرت‌های خارجی",
          "en": "Under foreign powers"
        },
        "text": {
          "fa": [
            "در قرن‌های هفدهم و هجدهم ایتالیا همچنان از چند دولت کوچک و بزرگ تشکیل می‌شد. اسپانیا بر میلان و ناپل تسلط داشت و پس از پیمان اوترخت (۱۷۱۳) بخش زیادی از این قلمروها به اتریش رسید. این دوره‌ی عصر باروک و علم نوین بود؛ در ۱۶۳۳ گالیله به‌خاطر دفاع از نظریه‌ی خورشیدمرکزی از سوی تفتیش عقاید محکوم شد.",
            "در ۱۷۹۶ ناپلئون به ایتالیا لشکر کشید و نظام قدیمی را برهم زد. پس از شکست او، کنگره‌ی وین در ۱۸۱۵ بیشتر حاکمان پیشین را بازگرداند و اتریش بر شمال شرقی (لومباردی-ونیزیا) تسلط یافت. اما ایده‌ی ایتالیای متحد در میان روشنفکران رشد کرده بود."
          ],
          "en": [
            "In the seventeenth and eighteenth centuries Italy still consisted of several smaller and larger states. Spain controlled Milan and Naples, and after the Treaty of Utrecht (1713) much of these territories passed to Austria. It was the age of the Baroque and of the new science; in 1633 Galileo was condemned by the Inquisition for defending the heliocentric theory.",
            "In 1796 Napoleon marched into Italy and shook the old order. After his defeat the Congress of Vienna in 1815 restored most of the former rulers, and Austria dominated the north-east (Lombardy-Venetia). But the idea of a united Italy had grown among intellectuals."
          ]
        }
      },
      {
        "id": "unification",
        "title": {
          "fa": "ریسورجیمنتو و اتحاد ایتالیا",
          "en": "The Risorgimento and unification"
        },
        "text": {
          "fa": [
            "جنبش اتحاد ایتالیا «ریسورجیمنتو» (رستاخیز) نام دارد. در انقلاب‌های ۱۸۴۸ پیمونت-ساردنی علیه اتریش جنگید اما شکست خورد. پس از آن کاونت، نخست‌وزیر پیمونت، با دیپلماسی و اتحاد با فرانسه کار را پی گرفت. در ۱۸۶۰ جوزپه گاریبالدی با هزار داوطلب («سرخ‌پوشان») به سیسیل رفت و جنوب ایتالیا را تصرف کرد.",
            "در ۱۷ مارس ۱۸۶۱ پادشاهی ایتالیا با ویکتور امانوئل دوم به‌عنوان پادشاه اعلام شد. ونیز در ۱۸۶۶ و رم در ۱۸۷۰ به آن پیوست و رم در ۱۸۷۱ پایتخت شد. پاپ خود را «زندانی واتیکان» می‌دانست و این اختلاف تا ۱۹۲۹ ادامه یافت."
          ],
          "en": [
            "The movement for Italian unity is called the ‘Risorgimento’ (resurgence). In the revolutions of 1848 Piedmont-Sardinia fought Austria but was defeated. After that Cavour, the prime minister of Piedmont, continued the work through diplomacy and an alliance with France. In 1860 Giuseppe Garibaldi sailed to Sicily with a thousand volunteers (the ‘Redshirts’) and took southern Italy.",
            "On 17 March 1861 the Kingdom of Italy was proclaimed with Victor Emmanuel II as king. Venice joined in 1866 and Rome in 1870, and Rome became the capital in 1871. The pope considered himself a ‘prisoner in the Vatican’, and the dispute lasted until 1929."
          ]
        }
      },
      {
        "id": "fascism",
        "title": {
          "fa": "جنگ جهانی اول، فاشیسم و جنگ جهانی دوم",
          "en": "The First World War, fascism and the Second World War"
        },
        "text": {
          "fa": [
            "ایتالیا در ۱۹۱۵ در کنار متفقین وارد جنگ جهانی اول شد. پس از جنگ، نارضایتی از نتایج صلح و بحران‌های اقتصادی و اجتماعی به رشد فاشیسم کمک کرد. در اکتبر ۱۹۲۲ پس از «راهپیمایی به سوی رم»، پادشاه بنیتو موسولینی را نخست‌وزیر کرد و او در چند سال حکومتی دیکتاتوری ساخت. ایتالیا در ۱۹۳۵ به اتیوپی حمله کرد و در ۱۹۳۸ قوانین نژادپرستانه علیه یهودیان تصویب شد.",
            "ایتالیا در ۱۹۴۰ در کنار آلمان نازی وارد جنگ جهانی دوم شد. پس از حمله‌ی متفقین به سیسیل، موسولینی در ژوییه‌ی ۱۹۴۳ برکنار شد و در ۸ سپتامبر آتش‌بس با متفقین اعلام شد. آلمان شمال ایتالیا را اشغال کرد و جنبش مقاومت (پارتیزان‌ها) علیه اشغالگران و فاشیست‌ها جنگید. ۲۵ آوریل ۱۹۴۵ روز آزادی ایتالیا است و موسولینی چند روز بعد به‌دست پارتیزان‌ها کشته شد."
          ],
          "en": [
            "Italy entered the First World War in 1915 on the side of the Allies. After the war, discontent with the peace and economic and social crises helped fascism grow. In October 1922, after the ‘March on Rome’, the king appointed Benito Mussolini prime minister, and within a few years he built a dictatorship. Italy invaded Ethiopia in 1935, and in 1938 racist laws were passed against Jews.",
            "Italy entered the Second World War in 1940 alongside Nazi Germany. After the Allied invasion of Sicily, Mussolini was removed in July 1943, and an armistice with the Allies was announced on 8 September. Germany occupied northern Italy, and the resistance movement (the partisans) fought the occupiers and the fascists. 25 April 1945 is Liberation Day, and Mussolini was killed by partisans a few days later."
          ]
        }
      },
      {
        "id": "republic",
        "title": {
          "fa": "جمهوری ایتالیا",
          "en": "The Italian Republic"
        },
        "text": {
          "fa": [
            "در ۲ ژوئن ۱۹۴۶ ایتالیایی‌ها در همه‌پرسی با اکثریت آرا جمهوری را بر پادشاهی ترجیح دادند و برای نخستین بار زنان هم در رأی‌گیری ملی شرکت کردند. قانون اساسی جدید از ۱ ژانویه‌ی ۱۹۴۸ اجرا شد.",
            "ایتالیا از بنیان‌گذاران جامعه‌ی زغال‌سنگ و فولاد اروپا (۱۹۵۱) و جامعه‌ی اقتصادی اروپا بود؛ پیمان رم در ۲۵ مارس ۱۹۵۷ در همین شهر امضا شد. دهه‌های ۱۹۵۰ و ۱۹۶۰ «معجزه‌ی اقتصادی» نام گرفت. امروز ایتالیا جمهوری پارلمانی و عضو اتحادیه‌ی اروپا، منطقه‌ی یورو و گروه ۷ است."
          ],
          "en": [
            "On 2 June 1946 Italians chose a republic over the monarchy by majority vote in a referendum, and women took part in a national vote for the first time. The new constitution came into force on 1 January 1948.",
            "Italy was a founder of the European Coal and Steel Community (1951) and the European Economic Community; the Treaty of Rome was signed in that city on 25 March 1957. The 1950s and 1960s were called the ‘economic miracle’. Today Italy is a parliamentary republic and a member of the European Union, the eurozone and the G7."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -753,
        "title": {
          "fa": "بنیان‌گذاری رم (بنا بر سنت)",
          "en": "Founding of Rome (according to tradition)"
        },
        "text": {
          "fa": "بنا بر روایت سنتی، رم در این سال بنا شد. این تاریخ اسطوره‌ای-سنتی است و مورخان درباره‌ی آن اتفاق‌نظر ندارند.",
          "en": "According to tradition Rome was founded this year. The date is traditional and legendary, and historians do not agree on it."
        }
      },
      {
        "year": -509,
        "title": {
          "fa": "آغاز جمهوری روم (بنا بر سنت)",
          "en": "Start of the Roman Republic (according to tradition)"
        },
        "text": {
          "fa": "پادشاهی برچیده شد و قدرت میان سنا و مقام‌های انتخابی تقسیم شد.",
          "en": "The monarchy was abolished and power was shared between the Senate and elected magistrates."
        }
      },
      {
        "year": -264,
        "title": {
          "fa": "آغاز جنگ‌های پونیک",
          "en": "The Punic Wars begin"
        },
        "text": {
          "fa": "رقابت روم و کارتاژ بر سر مدیترانه آغاز شد و تا ۱۴۶ پیش از میلاد ادامه یافت.",
          "en": "The rivalry of Rome and Carthage for the Mediterranean began and lasted until 146 BCE."
        }
      },
      {
        "year": -218,
        "title": {
          "fa": "هانیبال از آلپ می‌گذرد",
          "en": "Hannibal crosses the Alps"
        },
        "text": {
          "fa": "سردار کارتاژی با سپاه خود به ایتالیا حمله کرد.",
          "en": "The Carthaginian general invaded Italy with his army."
        }
      },
      {
        "year": -49,
        "title": {
          "fa": "سزار از روبیکون می‌گذرد",
          "en": "Caesar crosses the Rubicon"
        },
        "text": {
          "fa": "ژولیوس سزار با سپاهش از رود روبیکون گذشت و جنگ داخلی آغاز شد.",
          "en": "Julius Caesar crossed the Rubicon with his army and civil war began."
        }
      },
      {
        "year": -44,
        "title": {
          "fa": "ترور سزار",
          "en": "Assassination of Caesar"
        },
        "text": {
          "fa": "در ۱۵ مارس گروهی از سناتورها ژولیوس سزار را کشتند.",
          "en": "On 15 March a group of senators killed Julius Caesar."
        }
      },
      {
        "year": -27,
        "title": {
          "fa": "آگوستوس نخستین امپراتور",
          "en": "Augustus, the first emperor"
        },
        "text": {
          "fa": "اکتاویان لقب آگوستوس گرفت و نظام امپراتوری آغاز شد.",
          "en": "Octavian took the title Augustus and the imperial system began."
        }
      },
      {
        "year": 117,
        "title": {
          "fa": "بیشترین وسعت امپراتوری",
          "en": "The empire at its greatest extent"
        },
        "text": {
          "fa": "در پایان فرمانروایی تراژان، امپراتوری روم به بزرگ‌ترین وسعت خود رسید.",
          "en": "At the end of Trajan’s reign the Roman Empire reached its greatest size."
        }
      },
      {
        "year": 313,
        "title": {
          "fa": "فرمان میلان",
          "en": "The Edict of Milan"
        },
        "text": {
          "fa": "کنستانتین و لیکینیوس آزادی دین را برای مسیحیان و دیگران اعلام کردند.",
          "en": "Constantine and Licinius proclaimed freedom of religion for Christians and others."
        }
      },
      {
        "year": 476,
        "title": {
          "fa": "پایان روم غربی",
          "en": "End of the Western Roman Empire"
        },
        "text": {
          "fa": "اودوآکر آخرین امپراتور روم غربی، رومولوس آگوستولوس، را برکنار کرد.",
          "en": "Odoacer deposed the last Western Roman emperor, Romulus Augustulus."
        }
      },
      {
        "year": 568,
        "title": {
          "fa": "ورود لومباردها",
          "en": "Arrival of the Lombards"
        },
        "text": {
          "fa": "لومباردها به رهبری آلبوین به شمال ایتالیا آمدند.",
          "en": "The Lombards under Alboin entered northern Italy."
        }
      },
      {
        "year": 756,
        "title": {
          "fa": "بخشش پیپن و دولت پاپی",
          "en": "The Donation of Pepin and the Papal States"
        },
        "text": {
          "fa": "پیپن کوتاه سرزمین‌هایی به پاپ بخشید که پایه‌ی دولت پاپی شد.",
          "en": "Pepin the Short gave lands to the pope that became the basis of the Papal States."
        }
      },
      {
        "year": 1130,
        "title": {
          "fa": "پادشاهی سیسیل",
          "en": "The Kingdom of Sicily"
        },
        "text": {
          "fa": "راجر دوم نورمان به پادشاهی سیسیل تاج‌گذاری کرد.",
          "en": "Roger II the Norman was crowned king of Sicily."
        }
      },
      {
        "year": 1347,
        "title": {
          "fa": "ورود طاعون سیاه",
          "en": "The Black Death arrives"
        },
        "text": {
          "fa": "طاعون سیاه با کشتی‌ها به ایتالیا رسید و در سال بعد شهرهایی مانند فلورانس را درهم کوبید.",
          "en": "The Black Death reached Italy by ship and the following year struck cities such as Florence."
        }
      },
      {
        "year": 1434,
        "title": {
          "fa": "برتری مدیچی‌ها در فلورانس",
          "en": "The Medici rise in Florence"
        },
        "text": {
          "fa": "کوزیمو دو مدیچی به فلورانس بازگشت و نفوذ خانواده‌ی مدیچی بر شهر آغاز شد.",
          "en": "Cosimo de’ Medici returned to Florence and the family’s influence over the city began."
        }
      },
      {
        "year": 1494,
        "title": {
          "fa": "آغاز جنگ‌های ایتالیا",
          "en": "The Italian Wars begin"
        },
        "text": {
          "fa": "شارل هشتم فرانسه به ایتالیا حمله کرد.",
          "en": "Charles VIII of France invaded Italy."
        }
      },
      {
        "year": 1527,
        "title": {
          "fa": "غارت رم",
          "en": "The Sack of Rome"
        },
        "text": {
          "fa": "سپاهیان امپراتور شارل پنجم رم را غارت کردند.",
          "en": "The troops of Emperor Charles V sacked Rome."
        }
      },
      {
        "year": 1559,
        "title": {
          "fa": "پیمان کاتو-کامبرزی",
          "en": "Peace of Cateau-Cambrésis"
        },
        "text": {
          "fa": "جنگ‌های ایتالیا پایان یافت و اسپانیا قدرت اصلی ایتالیا شد.",
          "en": "The Italian Wars ended and Spain became the main power in Italy."
        }
      },
      {
        "year": 1633,
        "title": {
          "fa": "محاکمه‌ی گالیله",
          "en": "The trial of Galileo"
        },
        "text": {
          "fa": "تفتیش عقاید گالیله را به‌خاطر دفاع از نظریه‌ی خورشیدمرکزی محکوم کرد.",
          "en": "The Inquisition condemned Galileo for defending the heliocentric theory."
        }
      },
      {
        "year": 1713,
        "title": {
          "fa": "پیمان اوترخت",
          "en": "Treaty of Utrecht"
        },
        "text": {
          "fa": "بخش زیادی از قلمروهای اسپانیا در ایتالیا به اتریش رسید.",
          "en": "Much of Spain’s territory in Italy passed to Austria."
        }
      },
      {
        "year": 1796,
        "title": {
          "fa": "لشکرکشی ناپلئون به ایتالیا",
          "en": "Napoleon’s Italian campaign"
        },
        "text": {
          "fa": "ناپلئون به شمال ایتالیا حمله کرد و نظم قدیمی را برهم زد.",
          "en": "Napoleon invaded northern Italy and shook the old order."
        }
      },
      {
        "year": 1815,
        "title": {
          "fa": "کنگره‌ی وین",
          "en": "The Congress of Vienna"
        },
        "text": {
          "fa": "بیشتر حاکمان پیشین بازگشتند و اتریش بر شمال شرقی ایتالیا تسلط یافت.",
          "en": "Most former rulers returned and Austria dominated north-eastern Italy."
        }
      },
      {
        "year": 1848,
        "title": {
          "fa": "انقلاب‌ها و نخستین جنگ استقلال",
          "en": "Revolutions and the First War of Independence"
        },
        "text": {
          "fa": "پیمونت-ساردنی علیه اتریش جنگید اما شکست خورد.",
          "en": "Piedmont-Sardinia fought Austria but was defeated."
        }
      },
      {
        "year": 1860,
        "title": {
          "fa": "لشکرکشی هزار تن",
          "en": "The Expedition of the Thousand"
        },
        "text": {
          "fa": "گاریبالدی با هزار داوطلب به سیسیل رفت و جنوب ایتالیا را گرفت.",
          "en": "Garibaldi sailed to Sicily with a thousand volunteers and took southern Italy."
        }
      },
      {
        "year": 1861,
        "title": {
          "fa": "اعلام پادشاهی ایتالیا",
          "en": "Proclamation of the Kingdom of Italy"
        },
        "text": {
          "fa": "در ۱۷ مارس ویکتور امانوئل دوم پادشاه ایتالیا اعلام شد.",
          "en": "On 17 March Victor Emmanuel II was proclaimed king of Italy."
        }
      },
      {
        "year": 1870,
        "title": {
          "fa": "تصرف رم",
          "en": "The capture of Rome"
        },
        "text": {
          "fa": "در ۲۰ سپتامبر نیروهای ایتالیا وارد رم شدند و دولت پاپی پایان یافت.",
          "en": "On 20 September Italian forces entered Rome and the Papal States ended."
        }
      },
      {
        "year": 1915,
        "title": {
          "fa": "ورود به جنگ جهانی اول",
          "en": "Entry into the First World War"
        },
        "text": {
          "fa": "ایتالیا در کنار متفقین علیه اتریش-مجارستان وارد جنگ شد.",
          "en": "Italy entered the war on the Allied side against Austria-Hungary."
        }
      },
      {
        "year": 1922,
        "title": {
          "fa": "راهپیمایی به سوی رم",
          "en": "The March on Rome"
        },
        "text": {
          "fa": "پادشاه موسولینی را نخست‌وزیر کرد و دوره‌ی فاشیسم آغاز شد.",
          "en": "The king appointed Mussolini prime minister and the fascist era began."
        }
      },
      {
        "year": 1940,
        "title": {
          "fa": "ورود به جنگ جهانی دوم",
          "en": "Entry into the Second World War"
        },
        "text": {
          "fa": "ایتالیا در ۱۰ ژوئن در کنار آلمان نازی وارد جنگ شد.",
          "en": "On 10 June Italy entered the war alongside Nazi Germany."
        }
      },
      {
        "year": 1943,
        "title": {
          "fa": "سقوط موسولینی و آتش‌بس",
          "en": "Fall of Mussolini and the armistice"
        },
        "text": {
          "fa": "موسولینی در ژوییه برکنار شد و در ۸ سپتامبر آتش‌بس با متفقین اعلام شد.",
          "en": "Mussolini was removed in July and an armistice with the Allies was announced on 8 September."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "آزادی ایتالیا",
          "en": "Liberation of Italy"
        },
        "text": {
          "fa": "۲۵ آوریل پارتیزان‌ها و متفقین شمال ایتالیا را آزاد کردند.",
          "en": "On 25 April the partisans and the Allies liberated northern Italy."
        }
      },
      {
        "year": 1946,
        "title": {
          "fa": "همه‌پرسی و جمهوری",
          "en": "The referendum and the republic"
        },
        "text": {
          "fa": "در ۲ ژوئن مردم جمهوری را بر پادشاهی ترجیح دادند.",
          "en": "On 2 June the people chose a republic over the monarchy."
        }
      },
      {
        "year": 1957,
        "title": {
          "fa": "پیمان رم",
          "en": "The Treaty of Rome"
        },
        "text": {
          "fa": "در ۲۵ مارس جامعه‌ی اقتصادی اروپا در رم تأسیس شد و ایتالیا از بنیان‌گذاران آن بود.",
          "en": "On 25 March the European Economic Community was founded in Rome, with Italy among its founders."
        }
      }
    ]
  },
  "spain": {
    "sections": [
      {
        "id": "origins",
        "title": {
          "fa": "ریشه‌ها: ایبری‌ها، فنیقی‌ها و روم",
          "en": "Roots: the Iberians, the Phoenicians and Rome"
        },
        "text": {
          "fa": [
            "در شبه‌جزیره‌ی ایبری مردمانی مانند ایبری‌ها و سلت‌ها زندگی می‌کردند. فنیقی‌ها و یونانیان در کرانه‌ها پایگاه‌های تجاری ساختند؛ از جمله گادیر (کادیس امروز). کارتاژیان نیز بخش‌هایی از جنوب و شرق را گرفتند.",
            "رومیان در ۲۱۸ پیش از میلاد، در جریان جنگ دوم پونیک، پا به شبه‌جزیره گذاشتند و فتح کامل آن تا ۱۹ پیش از میلاد در زمان آگوستوس طول کشید. ایالت «هیسپانیا» شهرها، جاده‌ها و لاتین را آورد؛ زبان اسپانیایی از لاتین پدید آمد. امپراتور تراژان در ایتالیکا در هیسپانیا به دنیا آمد."
          ],
          "en": [
            "Peoples such as the Iberians and the Celts lived on the Iberian Peninsula. The Phoenicians and Greeks built trading bases on the coasts, among them Gadir (modern Cádiz). The Carthaginians also took parts of the south and east.",
            "The Romans set foot on the peninsula in 218 BCE during the Second Punic War, and its complete conquest took until 19 BCE under Augustus. The province of ‘Hispania’ brought cities, roads and Latin; the Spanish language developed from Latin. The emperor Trajan was born in Italica in Hispania."
          ]
        }
      },
      {
        "id": "visigoths",
        "title": {
          "fa": "ویزیگوت‌ها",
          "en": "The Visigoths"
        },
        "text": {
          "fa": [
            "در ۴۰۹ وندال‌ها، سوئب‌ها و آلان‌ها از پیرنه گذشتند و وارد شبه‌جزیره شدند. ویزیگوت‌ها بعدها پادشاهی نیرومندی در ایبری ساختند که پایتخت آن تولدو بود.",
            "ریکارد، پادشاه ویزیگوت‌ها، به مذهب کاتولیک گروید و این تغییر در سومین شورای تولدو در ۵۸۹ تأیید شد. این کار به یکپارچگی دینی میان ویزیگوت‌ها و مردم رومی‌تبار کمک کرد."
          ],
          "en": [
            "In 409 the Vandals, Suebi and Alans crossed the Pyrenees and entered the peninsula. The Visigoths later built a strong kingdom in Iberia whose capital was Toledo.",
            "Reccared, king of the Visigoths, converted to Catholicism, and this change was confirmed at the Third Council of Toledo in 589. It helped create religious unity between the Visigoths and the Roman-descended population."
          ]
        }
      },
      {
        "id": "al-andalus",
        "title": {
          "fa": "اندلس و بازپس‌گیری",
          "en": "Al-Andalus and the Reconquista"
        },
        "text": {
          "fa": [
            "در ۷۱۱ طارق بن زیاد با سپاهی از شمال آفریقا به شبه‌جزیره آمد و پادشاه ویزیگوت‌ها، رودریگو، را شکست داد. در چند سال بیشتر شبه‌جزیره زیر حکومت مسلمانان درآمد و «اندلس» نامیده شد. در ۷۵۶ عبدالرحمان اول امارت مستقل اموی را در قرطبه برپا کرد و در ۹۲۹ عبدالرحمان سوم خود را خلیفه نامید. قرطبه در آن زمان یکی از بزرگ‌ترین مراکز علم و فرهنگ اروپا بود و مسلمانان، مسیحیان و یهودیان در کنار هم زندگی می‌کردند، هرچند این همزیستی همیشه آرام نبود.",
            "پس از فروپاشی خلافت در ۱۰۳۱، اندلس به دولت‌شهرهای کوچک (طایفه‌ها) تقسیم شد. در شمال، پادشاهی‌های مسیحی مانند آستوریاس، لئون، کاستیل و آراگون به‌تدریج به جنوب پیش رفتند؛ روندی که «ریکنکیستا» (بازپس‌گیری) نام دارد. تولدو در ۱۰۸۵ گرفته شد و پیروزی در لاس ناواس د تولوسا در ۱۲۱۲ نقطه‌ی عطفی بود. قرطبه در ۱۲۳۶ و سویل در ۱۲۴۸ به کاستیل رسید و تنها امیرنشین بنی‌نصر گرانادا تا ۱۴۹۲ باقی ماند."
          ],
          "en": [
            "In 711 Tariq ibn Ziyad came to the peninsula with an army from North Africa and defeated the Visigothic king Roderic. Within a few years most of the peninsula came under Muslim rule and was called ‘al-Andalus’. In 756 Abd al-Rahman I set up an independent Umayyad emirate in Córdoba, and in 929 Abd al-Rahman III declared himself caliph. Córdoba was then one of the greatest centres of learning and culture in Europe, and Muslims, Christians and Jews lived side by side, though this coexistence was not always peaceful.",
            "After the caliphate collapsed in 1031, al-Andalus split into small city-states (the taifas). In the north the Christian kingdoms such as Asturias, León, Castile and Aragon gradually advanced south, a process called the ‘Reconquista’. Toledo was taken in 1085 and the victory at Las Navas de Tolosa in 1212 was a turning point. Córdoba fell to Castile in 1236 and Seville in 1248, and only the Nasrid emirate of Granada remained until 1492."
          ]
        }
      },
      {
        "id": "unification",
        "title": {
          "fa": "اتحاد پادشاهی‌ها و سال ۱۴۹۲",
          "en": "The union of the crowns and the year 1492"
        },
        "text": {
          "fa": [
            "ایزابل، ملکه‌ی کاستیل از ۱۴۷۴، در ۱۴۶۹ با فردیناند، شاهزاده‌ی آراگون، ازدواج کرد. با پادشاهی فردیناند بر آراگون در ۱۴۷۹ دو پادشاهی بزرگ شبه‌جزیره در یک خاندان فرمانروایی متحد شدند، هرچند هر پادشاهی قوانین و نهادهای خودش را نگه داشت. پاپ بعدها آن‌ها را «پادشاهان کاتولیک» نامید.",
            "سال ۱۴۹۲ سه رویداد بزرگ را به همراه داشت: در ۲ ژانویه گرانادا تسلیم شد و حکومت مسلمانان در شبه‌جزیره پایان یافت؛ در مارس فرمان آلهامبرا یهودیانی را که مسیحی نمی‌شدند از قلمرو بیرون راند؛ و در اکتبر کریستف کلمب، با حمایت ایزابل، به جزایر قاره‌ی آمریکا رسید. تفتیش عقاید اسپانیا نیز از ۱۴۷۸ آغاز به کار کرده بود."
          ],
          "en": [
            "Isabella, queen of Castile from 1474, married Ferdinand, prince of Aragon, in 1469. With Ferdinand’s reign in Aragon in 1479 the two large kingdoms of the peninsula were united under one ruling couple, though each kingdom kept its own laws and institutions. The pope later called them the ‘Catholic Monarchs’.",
            "The year 1492 brought three great events: on 2 January Granada surrendered and Muslim rule on the peninsula ended; in March the Alhambra Decree expelled Jews who would not convert to Christianity from the realm; and in October Christopher Columbus, backed by Isabella, reached the islands of the Americas. The Spanish Inquisition had also begun work in 1478."
          ]
        }
      },
      {
        "id": "empire",
        "title": {
          "fa": "امپراتوری و عصر طلایی",
          "en": "Empire and the Golden Age"
        },
        "text": {
          "fa": [
            "نوه‌ی ایزابل و فردیناند، شارل اول، از ۱۵۱۶ پادشاه اسپانیا و از ۱۵۱۹ امپراتور مقدس روم (به نام شارل پنجم) بود. در همان دوران ارنان کورتس امپراتوری آزتک را (۱۵۱۹ تا ۱۵۲۱) و فرانسیسکو پیزارو امپراتوری اینکا را (۱۵۳۲) تصرف کردند. این فتوحات با خشونت، بیماری‌های واگیر و مرگ شمار زیادی از بومیان آمریکا همراه بود. نقره‌ی آمریکا ثروت زیادی به اسپانیا آورد.",
            "در دوره‌ی فیلیپ دوم (۱۵۵۶ تا ۱۵۹۸) اسپانیا در اوج قدرت بود: در ۱۵۷۱ در لپانتو عثمانی را شکست داد، اما ناوگان بزرگ آن (آرمادا) در ۱۵۸۸ در حمله به انگلیس ناکام ماند. دوره‌ی بعد «عصر طلایی» فرهنگ اسپانیا بود، با سروانتس، ولاسکز و لوپه دو وگا. جنگ‌های پرهزینه اما کشور را بارها ورشکسته کرد."
          ],
          "en": [
            "The grandson of Isabella and Ferdinand, Charles I, was king of Spain from 1516 and Holy Roman Emperor from 1519 (as Charles V). In the same period Hernán Cortés took the Aztec Empire (1519 to 1521) and Francisco Pizarro the Inca Empire (1532). These conquests came with violence, epidemic disease and the deaths of very many native Americans. American silver brought great wealth to Spain.",
            "In the reign of Philip II (1556 to 1598) Spain was at the peak of its power: in 1571 it defeated the Ottomans at Lepanto, but its great fleet (the Armada) failed in its attack on England in 1588. The period that followed was the ‘Golden Age’ of Spanish culture, with Cervantes, Velázquez and Lope de Vega. Costly wars, however, bankrupted the country several times."
          ]
        }
      },
      {
        "id": "decline",
        "title": {
          "fa": "افول، بوربن‌ها و ناپلئون",
          "en": "Decline, the Bourbons and Napoleon"
        },
        "text": {
          "fa": [
            "قرن هفدهم دوران افول بود. پرتغال و کاتالونیا در ۱۶۴۰ شورش کردند و اسپانیا در ۱۶۴۸ استقلال هلند را به رسمیت شناخت. با مرگ شارل دوم بدون وارث در ۱۷۰۰، جنگ جانشینی اسپانیا (۱۷۰۱ تا ۱۷۱۴) درگرفت. فیلیپ پنجم از خاندان بوربن پادشاه ماند اما در پیمان اوترخت (۱۷۱۳) قلمروهای اروپایی‌اش را از دست داد و جبل‌الطارق و منورکا به بریتانیا رسید. فرمان‌های نوئوا پلانتا (۱۷۰۷ تا ۱۷۱۶) نهادهای تاج آراگون را برچید.",
            "ناپلئون در ۱۸۰۸ به اسپانیا حمله کرد و برادرش ژوزف را پادشاه کرد. مردم شورش کردند و جنگ استقلال (۱۸۰۸ تا ۱۸۱۴) درگرفت. قانون اساسی کادیس در ۱۸۱۲ نخستین قانون اساسی لیبرال اسپانیا بود. در همان سال‌ها بیشتر مستعمرات قاره‌ی آمریکا شورش کردند و تا حدود ۱۸۲۵ مستقل شدند. در ۱۸۹۸ اسپانیا در جنگ با آمریکا کوبا، پورتوریکو و فیلیپین را از دست داد."
          ],
          "en": [
            "The seventeenth century was a time of decline. Portugal and Catalonia rebelled in 1640 and Spain recognized Dutch independence in 1648. When Charles II died without an heir in 1700, the War of the Spanish Succession (1701 to 1714) broke out. Philip V of the Bourbon house stayed king but in the Treaty of Utrecht (1713) lost his European territories, and Gibraltar and Minorca passed to Britain. The Nueva Planta decrees (1707 to 1716) abolished the institutions of the Crown of Aragon.",
            "Napoleon invaded Spain in 1808 and made his brother Joseph king. The people rose up and the War of Independence (1808 to 1814) began. The Constitution of Cádiz in 1812 was Spain’s first liberal constitution. In the same years most colonies on the American mainland rebelled and by about 1825 had become independent. In 1898 Spain lost Cuba, Puerto Rico and the Philippines in the war with the United States."
          ]
        }
      },
      {
        "id": "civil-war",
        "title": {
          "fa": "جمهوری دوم، جنگ داخلی و فرانکو",
          "en": "The Second Republic, the Civil War and Franco"
        },
        "text": {
          "fa": [
            "پس از دیکتاتوری پریمو دو ریورا (۱۹۲۳ تا ۱۹۳۰) و برگزاری انتخابات شهری، پادشاه آلفونسو سیزدهم کشور را ترک کرد و جمهوری دوم در ۱۴ آوریل ۱۹۳۱ اعلام شد. جامعه به‌شدت قطبی شد و در ژوییه‌ی ۱۹۳۶ بخشی از ارتش به رهبری ژنرال‌ها از جمله فرانکو کودتا کرد.",
            "کودتا به جنگ داخلی (۱۹۳۶ تا ۱۹۳۹) تبدیل شد. ناسیونالیست‌ها از آلمان نازی و ایتالیای فاشیست کمک گرفتند و جمهوری‌خواهان از شوروی و تعدادی داوطلب خارجی (بریگاد‌های بین‌المللی). بمباران شهر گرنیکا در آوریل ۱۹۳۷ نماد خشونت علیه غیرنظامیان شد. جنگ با پیروزی فرانکو پایان یافت و صدها هزار نفر کشته شدند. فرانکو تا مرگش در ۱۹۷۵ با دیکتاتوری حکومت کرد."
          ],
          "en": [
            "After the dictatorship of Primo de Rivera (1923 to 1930) and municipal elections, King Alfonso XIII left the country and the Second Republic was proclaimed on 14 April 1931. Society became sharply polarized, and in July 1936 part of the army led by generals, among them Franco, rose in a coup.",
            "The coup turned into a civil war (1936 to 1939). The Nationalists received help from Nazi Germany and fascist Italy, and the Republicans from the Soviet Union and a number of foreign volunteers (the International Brigades). The bombing of the town of Guernica in April 1937 became a symbol of violence against civilians. The war ended with Franco’s victory and hundreds of thousands of people were killed. Franco ruled as a dictator until his death in 1975."
          ]
        }
      },
      {
        "id": "democracy",
        "title": {
          "fa": "گذار به دموکراسی",
          "en": "The transition to democracy"
        },
        "text": {
          "fa": [
            "فرانکو در ۲۰ نوامبر ۱۹۷۵ درگذشت و خوان کارلوس اول پادشاه شد. او به‌جای ادامه‌ی دیکتاتوری، گذار به دموکراسی را پیش برد. قانون اساسی جدید در همه‌پرسی ۶ دسامبر ۱۹۷۸ تصویب شد و کشور را به جوامع خودمختار تقسیم کرد. در ۲۳ فوریه‌ی ۱۹۸۱ کودتای نافرجامی رخ داد که با موضع پادشاه شکست خورد.",
            "اسپانیا در ۱۹۸۲ عضو ناتو و در ۱ ژانویه‌ی ۱۹۸۶ عضو جامعه‌ی اقتصادی اروپا شد. در ۱۹۹۲ میزبان بازی‌های المپیک بارسلونا و نمایشگاه جهانی سویل بود. خوان کارلوس در ۲۰۱۴ کناره‌گیری کرد و پسرش فیلیپ ششم پادشاه شد. امروز اسپانیا پادشاهی مشروطه‌ی پارلمانی است."
          ],
          "en": [
            "Franco died on 20 November 1975 and Juan Carlos I became king. Instead of continuing the dictatorship he advanced the transition to democracy. The new constitution was approved in the referendum of 6 December 1978 and divided the country into autonomous communities. On 23 February 1981 an attempted coup took place that failed because of the king’s stand.",
            "Spain joined NATO in 1982 and the European Economic Community on 1 January 1986. In 1992 it hosted the Barcelona Olympic Games and the Seville World Expo. Juan Carlos abdicated in 2014 and his son Felipe VI became king. Today Spain is a parliamentary constitutional monarchy."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -218,
        "title": {
          "fa": "ورود رومیان",
          "en": "The Romans arrive"
        },
        "text": {
          "fa": "در جنگ دوم پونیک نیروهای رومی در شبه‌جزیره‌ی ایبری پیاده شدند.",
          "en": "In the Second Punic War Roman forces landed on the Iberian Peninsula."
        }
      },
      {
        "year": -19,
        "title": {
          "fa": "پایان فتح روم",
          "en": "End of the Roman conquest"
        },
        "text": {
          "fa": "در زمان آگوستوس فتح کامل شبه‌جزیره به پایان رسید.",
          "en": "Under Augustus the complete conquest of the peninsula ended."
        }
      },
      {
        "year": 409,
        "title": {
          "fa": "ورود وندال‌ها، سوئب‌ها و آلان‌ها",
          "en": "Arrival of the Vandals, Suebi and Alans"
        },
        "text": {
          "fa": "این اقوام از پیرنه گذشتند و وارد ایبری شدند.",
          "en": "These peoples crossed the Pyrenees and entered Iberia."
        }
      },
      {
        "year": 589,
        "title": {
          "fa": "سومین شورای تولدو",
          "en": "The Third Council of Toledo"
        },
        "text": {
          "fa": "گرویدن ریکارد، پادشاه ویزیگوت‌ها، به کاتولیک تأیید شد.",
          "en": "The conversion of Reccared, king of the Visigoths, to Catholicism was confirmed."
        }
      },
      {
        "year": 711,
        "title": {
          "fa": "ورود مسلمانان",
          "en": "The Muslim conquest begins"
        },
        "text": {
          "fa": "طارق بن زیاد از شمال آفریقا آمد و پادشاه ویزیگوت‌ها را شکست داد.",
          "en": "Tariq ibn Ziyad came from North Africa and defeated the Visigothic king."
        }
      },
      {
        "year": 756,
        "title": {
          "fa": "امارت قرطبه",
          "en": "The Emirate of Córdoba"
        },
        "text": {
          "fa": "عبدالرحمان اول امارت مستقل اموی را در قرطبه برپا کرد.",
          "en": "Abd al-Rahman I set up an independent Umayyad emirate in Córdoba."
        }
      },
      {
        "year": 929,
        "title": {
          "fa": "خلافت قرطبه",
          "en": "The Caliphate of Córdoba"
        },
        "text": {
          "fa": "عبدالرحمان سوم خود را خلیفه نامید.",
          "en": "Abd al-Rahman III declared himself caliph."
        }
      },
      {
        "year": 1031,
        "title": {
          "fa": "فروپاشی خلافت",
          "en": "Collapse of the caliphate"
        },
        "text": {
          "fa": "اندلس به دولت‌شهرهای کوچک (طایفه‌ها) تقسیم شد.",
          "en": "Al-Andalus split into small city-states (the taifas)."
        }
      },
      {
        "year": 1085,
        "title": {
          "fa": "تصرف تولدو",
          "en": "The capture of Toledo"
        },
        "text": {
          "fa": "آلفونسو ششم، پادشاه لئون و کاستیل، تولدو را گرفت.",
          "en": "Alfonso VI, king of León and Castile, took Toledo."
        }
      },
      {
        "year": 1212,
        "title": {
          "fa": "نبرد لاس ناواس د تولوسا",
          "en": "Battle of Las Navas de Tolosa"
        },
        "text": {
          "fa": "ائتلاف پادشاهی‌های مسیحی نیروهای مرابطان و موحدان را شکست داد؛ نقطه‌ی عطفی در بازپس‌گیری.",
          "en": "A coalition of Christian kingdoms defeated the Almohad forces, a turning point in the Reconquista."
        }
      },
      {
        "year": 1236,
        "title": {
          "fa": "تصرف قرطبه",
          "en": "The capture of Córdoba"
        },
        "text": {
          "fa": "فردیناند سوم، پادشاه کاستیل، قرطبه را گرفت؛ سویل در ۱۲۴۸ سقوط کرد.",
          "en": "Ferdinand III, king of Castile, took Córdoba; Seville fell in 1248."
        }
      },
      {
        "year": 1469,
        "title": {
          "fa": "ازدواج ایزابل و فردیناند",
          "en": "Marriage of Isabella and Ferdinand"
        },
        "text": {
          "fa": "ایزابل، وارث کاستیل، با فردیناند، وارث آراگون، ازدواج کرد.",
          "en": "Isabella, heir of Castile, married Ferdinand, heir of Aragon."
        }
      },
      {
        "year": 1478,
        "title": {
          "fa": "آغاز تفتیش عقاید اسپانیا",
          "en": "The Spanish Inquisition begins"
        },
        "text": {
          "fa": "با تأیید پاپ، تفتیش عقاید زیر نظر پادشاهان آغاز شد.",
          "en": "With the pope’s approval the Inquisition began under the control of the monarchs."
        }
      },
      {
        "year": 1479,
        "title": {
          "fa": "اتحاد تاج‌های کاستیل و آراگون",
          "en": "The crowns of Castile and Aragon unite"
        },
        "text": {
          "fa": "فردیناند پادشاه آراگون شد و دو پادشاهی در یک خاندان متحد شدند.",
          "en": "Ferdinand became king of Aragon and the two kingdoms were united under one ruling couple."
        }
      },
      {
        "year": 1492,
        "title": {
          "fa": "گرانادا، کلمب و فرمان آلهامبرا",
          "en": "Granada, Columbus and the Alhambra Decree"
        },
        "text": {
          "fa": "در ۲ ژانویه گرانادا تسلیم شد، در مارس یهودیانی که مسیحی نمی‌شدند از قلمرو رانده شدند و در ۱۲ اکتبر کلمب به جزایر آمریکا رسید.",
          "en": "On 2 January Granada surrendered, in March Jews who would not convert were expelled from the realm, and on 12 October Columbus reached the islands of the Americas."
        }
      },
      {
        "year": 1519,
        "yearText": {
          "fa": "۱۵۱۹ تا ۱۵۲۱",
          "en": "1519 to 1521"
        },
        "title": {
          "fa": "فتح امپراتوری آزتک",
          "en": "The conquest of the Aztec Empire"
        },
        "text": {
          "fa": "ارنان کورتس با متحدان بومی تنوچتیتلان را گرفت.",
          "en": "Hernán Cortés and his native allies took Tenochtitlan."
        }
      },
      {
        "year": 1556,
        "title": {
          "fa": "فیلیپ دوم پادشاه می‌شود",
          "en": "Philip II becomes king"
        },
        "text": {
          "fa": "شارل پنجم کناره‌گیری کرد و پسرش فیلیپ دوم پادشاه اسپانیا شد.",
          "en": "Charles V abdicated and his son Philip II became king of Spain."
        }
      },
      {
        "year": 1571,
        "title": {
          "fa": "نبرد لپانتو",
          "en": "Battle of Lepanto"
        },
        "text": {
          "fa": "اتحادیه‌ی مقدس، با رهبری اسپانیا، ناوگان عثمانی را شکست داد.",
          "en": "The Holy League, led by Spain, defeated the Ottoman fleet."
        }
      },
      {
        "year": 1588,
        "title": {
          "fa": "شکست آرمادا",
          "en": "Defeat of the Armada"
        },
        "text": {
          "fa": "ناوگان بزرگ اسپانیا در حمله به انگلیس ناکام ماند.",
          "en": "Spain’s great fleet failed in its attack on England."
        }
      },
      {
        "year": 1609,
        "yearText": {
          "fa": "۱۶۰۹ تا ۱۶۱۴",
          "en": "1609 to 1614"
        },
        "title": {
          "fa": "اخراج موریسکوها",
          "en": "Expulsion of the Moriscos"
        },
        "text": {
          "fa": "مسلمانان مسیحی‌شده (موریسکوها) از اسپانیا رانده شدند.",
          "en": "The converted Muslims (Moriscos) were expelled from Spain."
        }
      },
      {
        "year": 1648,
        "title": {
          "fa": "به رسمیت شناختن استقلال هلند",
          "en": "Recognition of Dutch independence"
        },
        "text": {
          "fa": "اسپانیا در پایان جنگ هشتاد ساله استقلال هلند را پذیرفت.",
          "en": "At the end of the Eighty Years’ War Spain accepted Dutch independence."
        }
      },
      {
        "year": 1700,
        "title": {
          "fa": "مرگ شارل دوم",
          "en": "Death of Charles II"
        },
        "text": {
          "fa": "شارل دوم بدون وارث مرد و جنگ جانشینی اسپانیا درگرفت.",
          "en": "Charles II died without an heir and the War of the Spanish Succession broke out."
        }
      },
      {
        "year": 1713,
        "title": {
          "fa": "پیمان اوترخت",
          "en": "Treaty of Utrecht"
        },
        "text": {
          "fa": "فیلیپ پنجم به‌عنوان پادشاه شناخته شد اما اسپانیا قلمروهای اروپایی‌اش را از دست داد.",
          "en": "Philip V was recognized as king but Spain lost its European territories."
        }
      },
      {
        "year": 1808,
        "title": {
          "fa": "حمله‌ی ناپلئون و جنگ استقلال",
          "en": "Napoleon’s invasion and the War of Independence"
        },
        "text": {
          "fa": "ناپلئون برادرش ژوزف را پادشاه کرد و مردم علیه اشغال شورش کردند.",
          "en": "Napoleon made his brother Joseph king and the people rose against the occupation."
        }
      },
      {
        "year": 1812,
        "title": {
          "fa": "قانون اساسی کادیس",
          "en": "The Constitution of Cádiz"
        },
        "text": {
          "fa": "نخستین قانون اساسی لیبرال اسپانیا تصویب شد.",
          "en": "Spain’s first liberal constitution was approved."
        }
      },
      {
        "year": 1898,
        "title": {
          "fa": "از دست رفتن کوبا، پورتوریکو و فیلیپین",
          "en": "Loss of Cuba, Puerto Rico and the Philippines"
        },
        "text": {
          "fa": "اسپانیا در جنگ با آمریکا شکست خورد و باقی‌مانده‌ی مستعمراتش را از دست داد.",
          "en": "Spain was defeated in the war with the United States and lost the rest of its colonies."
        }
      },
      {
        "year": 1931,
        "title": {
          "fa": "جمهوری دوم",
          "en": "The Second Republic"
        },
        "text": {
          "fa": "در ۱۴ آوریل جمهوری اعلام شد و پادشاه کشور را ترک کرد.",
          "en": "On 14 April the republic was proclaimed and the king left the country."
        }
      },
      {
        "year": 1936,
        "title": {
          "fa": "آغاز جنگ داخلی",
          "en": "The Civil War begins"
        },
        "text": {
          "fa": "در ژوییه بخشی از ارتش علیه جمهوری کودتا کرد.",
          "en": "In July part of the army rose against the republic."
        }
      },
      {
        "year": 1939,
        "title": {
          "fa": "پایان جنگ داخلی",
          "en": "End of the Civil War"
        },
        "text": {
          "fa": "فرانکو پیروز شد و دیکتاتوری او آغاز شد.",
          "en": "Franco won and his dictatorship began."
        }
      },
      {
        "year": 1975,
        "title": {
          "fa": "مرگ فرانکو",
          "en": "Death of Franco"
        },
        "text": {
          "fa": "فرانکو در ۲۰ نوامبر درگذشت و خوان کارلوس پادشاه شد.",
          "en": "Franco died on 20 November and Juan Carlos became king."
        }
      },
      {
        "year": 1978,
        "title": {
          "fa": "قانون اساسی کنونی",
          "en": "The present constitution"
        },
        "text": {
          "fa": "قانون اساسی در همه‌پرسی ۶ دسامبر تصویب شد.",
          "en": "The constitution was approved in the referendum of 6 December."
        }
      },
      {
        "year": 1981,
        "title": {
          "fa": "کودتای نافرجام ۲۳ فوریه",
          "en": "The failed coup of 23 February"
        },
        "text": {
          "fa": "کودتایی علیه دموکراسی با مخالفت پادشاه شکست خورد.",
          "en": "A coup against democracy failed because of the king’s opposition."
        }
      },
      {
        "year": 1986,
        "title": {
          "fa": "عضویت در جامعه‌ی اقتصادی اروپا",
          "en": "Joining the European Economic Community"
        },
        "text": {
          "fa": "اسپانیا در ۱ ژانویه به جامعه‌ی اقتصادی اروپا پیوست.",
          "en": "Spain joined the European Economic Community on 1 January."
        }
      }
    ]
  },
  "france": {
    "sections": [
      {
        "id": "gaul",
        "title": {
          "fa": "گال و روم",
          "en": "Gaul and Rome"
        },
        "text": {
          "fa": [
            "پیش از رومیان، سرزمین فرانسه‌ی امروز خانه‌ی قبایل سلتی بود که رومیان آن‌ها را گال می‌نامیدند. یونانیان از حدود ۶۰۰ پیش از میلاد شهر ماسالیا (مارسی) را در جنوب بنا کردند.",
            "ژولیوس سزار در جنگ‌های گال (۵۸ تا ۵۰ پیش از میلاد) گال را فتح کرد. ورسینژتوریکس، رهبر گال‌ها، در ۵۲ پیش از میلاد در آلزیا شکست خورد و تسلیم شد. گال در دوران روم شهرها، جاده‌ها و زبان لاتین را پذیرفت و زبان فرانسوی از لاتین پدید آمد."
          ],
          "en": [
            "Before the Romans, the land of present-day France was home to Celtic tribes that the Romans called Gauls. From about 600 BCE the Greeks founded the city of Massalia (Marseille) in the south.",
            "Julius Caesar conquered Gaul in the Gallic Wars (58 to 50 BCE). Vercingetorix, the Gallic leader, was defeated at Alesia in 52 BCE and surrendered. Under Rome Gaul adopted cities, roads and the Latin language, and French developed from Latin."
          ]
        }
      },
      {
        "id": "franks",
        "title": {
          "fa": "فرانک‌ها و کارولنژی‌ها",
          "en": "The Franks and the Carolingians"
        },
        "text": {
          "fa": [
            "پس از سقوط روم غربی، فرانک‌ها در گال قدرت گرفتند. کلوویس اول، پادشاه فرانک‌ها (از ۴۸۱)، در ۴۸۶ در سواسون فرمانروای رومی‌تبار را شکست داد و نزدیک ۴۹۶ (به نظر برخی مورخان بعدتر) به مذهب کاتولیک گروید؛ کاری که حمایت کلیسا و مردم رومی‌تبار را برایش آورد.",
            "چارلز مارتل در ۷۳۲ در نبرد تور پیشروی نیروهای مسلمان اندلس را متوقف کرد. نوه‌اش شارلمانی در ۸۰۰ امپراتور شد. پس از او امپراتوری تکه‌تکه شد و پیمان وردون در ۸۴۳ بخش غربی را به شارل کچل داد؛ فرانکیای غربی که بعدها فرانسه شد."
          ],
          "en": [
            "After the fall of the Western Roman Empire the Franks gained power in Gaul. Clovis I, king of the Franks (from 481), defeated the Roman-descended ruler at Soissons in 486 and around 496 (later, according to some historians) converted to Catholicism, which won him the support of the Church and the Roman-descended population.",
            "Charles Martel halted the advance of Muslim forces from al-Andalus at the Battle of Tours in 732. His grandson Charlemagne became emperor in 800. After him the empire broke apart, and the Treaty of Verdun in 843 gave the western part to Charles the Bald, West Francia, which later became France."
          ]
        }
      },
      {
        "id": "middle-ages",
        "title": {
          "fa": "پادشاهی کاپتی و جنگ صد ساله",
          "en": "The Capetian kingdom and the Hundred Years’ War"
        },
        "text": {
          "fa": [
            "در ۹۸۷ هوگ کاپه پادشاه شد و خاندانش (کاپتی‌ها) قرن‌ها بر فرانسه حکومت کرد. در ۱۰۶۶ ویلیام، دوک نورماندی، انگلستان را فتح کرد و این رشته‌ی طولانی رقابت میان دو پادشاهی را آغاز کرد. ساخت کلیسای نوتردام پاریس در ۱۱۶۳ آغاز شد؛ دوره‌ی اوج معماری گوتیک.",
            "جنگ صد ساله (۱۳۳۷ تا ۱۴۵۳) میان فرانسه و انگلستان بر سر تاج فرانسه بود. طاعون سیاه در ۱۳۴۷ و ۱۳۴۸ فرانسه را درهم کوبید. ژاندارک، دختری روستایی، در ۱۴۲۹ به نیروهای فرانسه کمک کرد محاصره‌ی اورلئان را بشکنند. او در ۱۴۳۱ به‌دست انگلیسی‌ها و در پی محاکمه‌ی کلیسایی سوزانده شد. جنگ با پیروزی فرانسه در ۱۴۵۳ پایان یافت."
          ],
          "en": [
            "In 987 Hugh Capet became king and his dynasty (the Capetians) ruled France for centuries. In 1066 William, duke of Normandy, conquered England and began a long line of rivalry between the two kingdoms. Construction of Notre-Dame cathedral in Paris began in 1163, the peak period of Gothic architecture.",
            "The Hundred Years’ War (1337 to 1453) between France and England was over the French crown. The Black Death struck France in 1347 and 1348. Joan of Arc, a peasant girl, helped French forces break the siege of Orléans in 1429. She was burned in 1431 by the English after a church trial. The war ended with a French victory in 1453."
          ]
        }
      },
      {
        "id": "renaissance",
        "title": {
          "fa": "رنسانس و جنگ‌های مذهبی",
          "en": "The Renaissance and the Wars of Religion"
        },
        "text": {
          "fa": [
            "فرانسوای اول (پادشاه از ۱۵۱۵) رنسانس ایتالیایی را به فرانسه آورد. لئوناردو داوینچی به دعوت او به فرانسه رفت و قصرهای دره‌ی لوار ساخته شد.",
            "اصلاحات دینی فرانسه را درگیر جنگ‌های مذهبی (۱۵۶۲ تا ۱۵۹۸) میان کاتولیک‌ها و پروتستان‌ها (هوگونوها) کرد. در شب سنت بارتولومی (اوت ۱۵۷۲) هزاران پروتستان در پاریس و شهرهای دیگر کشته شدند. هانری چهارم، که برای پادشاهی به کاتولیک گروید، در ۱۵۹۸ با فرمان نانت به پروتستان‌ها حقوقی داد."
          ],
          "en": [
            "Francis I (king from 1515) brought the Italian Renaissance to France. Leonardo da Vinci went to France at his invitation and the châteaux of the Loire valley were built.",
            "The Reformation drew France into the Wars of Religion (1562 to 1598) between Catholics and Protestants (Huguenots). In the St Bartholomew’s Day massacre (August 1572) thousands of Protestants were killed in Paris and other cities. Henry IV, who converted to Catholicism to become king, granted rights to Protestants with the Edict of Nantes in 1598."
          ]
        }
      },
      {
        "id": "absolutism",
        "title": {
          "fa": "پادشاهی مطلقه و روشنگری",
          "en": "Absolute monarchy and the Enlightenment"
        },
        "text": {
          "fa": [
            "لویی چهاردهم در ۱۶۴۳ در چهارسالگی پادشاه شد و از ۱۶۶۱ خود حکومت را به دست گرفت. او ۷۲ سال سلطنت کرد، دربار را به ورسای برد (۱۶۸۲) و قدرت پادشاه را متمرکز کرد. در ۱۶۸۵ فرمان نانت را لغو کرد و بسیاری از پروتستان‌ها از فرانسه گریختند.",
            "در قرن هجدهم فرانسه مرکز روشنگری بود. ولتر، دیدرو، منتسکیو و دیگران درباره‌ی آزادی، خرد و حقوق انسان نوشتند. دولت به‌خاطر جنگ‌ها، از جمله حمایت از انقلاب آمریکا، با بحران مالی روبه‌رو بود."
          ],
          "en": [
            "Louis XIV became king in 1643 at the age of four and took government into his own hands from 1661. He reigned for 72 years, moved the court to Versailles (1682) and centralized the king’s power. In 1685 he revoked the Edict of Nantes and many Protestants fled France.",
            "In the eighteenth century France was the centre of the Enlightenment. Voltaire, Diderot, Montesquieu and others wrote about liberty, reason and human rights. The state faced a financial crisis because of wars, including its support for the American Revolution."
          ]
        }
      },
      {
        "id": "revolution",
        "title": {
          "fa": "انقلاب فرانسه و ناپلئون",
          "en": "The French Revolution and Napoleon"
        },
        "text": {
          "fa": [
            "در ۱۷۸۹ مجلس طبقات تشکیل شد و در ۱۴ ژوییه مردم پاریس به زندان باستیل حمله کردند. در اوت همان سال «اعلامیه‌ی حقوق بشر و شهروند» تصویب شد. پادشاهی در سپتامبر ۱۷۹۲ برچیده شد و جمهوری اول اعلام شد. لویی شانزدهم در ژانویه‌ی ۱۷۹۳ اعدام شد و دوران وحشت (۱۷۹۳ تا ۱۷۹۴) هزاران نفر را به گیوتین سپرد.",
            "ناپلئون بناپارت در ۱۷۹۹ با کودتا قدرت را گرفت و در ۱۸۰۴ خود را امپراتور کرد. قانون مدنی او (۱۸۰۴) بر حقوق بسیاری از کشورها اثر گذاشت. او بیشتر اروپا را فتح کرد اما در ۱۸۱۵ در واترلو شکست خورد و تبعید شد."
          ],
          "en": [
            "In 1789 the Estates-General met and on 14 July the people of Paris stormed the Bastille prison. In August of that year the Declaration of the Rights of Man and of the Citizen was adopted. The monarchy was abolished in September 1792 and the First Republic was proclaimed. Louis XVI was executed in January 1793 and the Reign of Terror (1793 to 1794) sent thousands to the guillotine.",
            "Napoleon Bonaparte seized power in a coup in 1799 and made himself emperor in 1804. His Civil Code (1804) influenced the law of many countries. He conquered much of Europe but was defeated at Waterloo in 1815 and exiled."
          ]
        }
      },
      {
        "id": "nineteenth",
        "title": {
          "fa": "قرن نوزدهم: جمهوری، امپراتوری و جمهوری سوم",
          "en": "The nineteenth century: republics, empire and the Third Republic"
        },
        "text": {
          "fa": [
            "پس از ناپلئون پادشاهی بوربن بازگشت. انقلاب ژوییه‌ی ۱۸۳۰ و انقلاب ۱۸۴۸ دو بار حکومت را عوض کرد. ناپلئون سوم، برادرزاده‌ی ناپلئون، پس از جمهوری دوم در ۱۸۵۲ امپراتور شد.",
            "در جنگ فرانسه و پروس (۱۸۷۰ تا ۱۸۷۱) ناپلئون سوم در سدان اسیر شد و جمهوری سوم اعلام شد. فرانسه آلزاس و بخشی از لورن را به آلمان داد. کمون پاریس در ۱۸۷۱ سرکوب شد. ماجرای دریفوس (از ۱۸۹۴) جامعه را بر سر مسئله‌ی عدالت و یهودستیزی دوپاره کرد. فرانسه در همین دوران امپراتوری استعماری بزرگی در آفریقا و آسیا ساخت."
          ],
          "en": [
            "After Napoleon the Bourbon monarchy returned. The July Revolution of 1830 and the revolution of 1848 changed the government twice. Napoleon III, Napoleon’s nephew, became emperor in 1852 after the Second Republic.",
            "In the Franco-Prussian War (1870 to 1871) Napoleon III was captured at Sedan and the Third Republic was proclaimed. France gave Alsace and part of Lorraine to Germany. The Paris Commune was crushed in 1871. The Dreyfus affair (from 1894) split society over justice and antisemitism. In the same period France built a large colonial empire in Africa and Asia."
          ]
        }
      },
      {
        "id": "twentieth",
        "title": {
          "fa": "قرن بیستم",
          "en": "The twentieth century"
        },
        "text": {
          "fa": [
            "فرانسه در جنگ جهانی اول (۱۹۱۴ تا ۱۹۱۸) حدود ۱٫۴ میلیون سرباز از دست داد. در جنگ جهانی دوم آلمان در مه ۱۹۴۰ حمله کرد و در ۲۲ ژوئن آتش‌بس امضا شد. شمال فرانسه اشغال شد و در جنوب دولت ویشی به رهبری پتن همکاری با آلمان را پیش گرفت و از جمله به تبعید یهودیان یاری رساند. ژنرال دوگل از لندن مقاومت را فراخواند و جنبش مقاومت در داخل هم فعال بود. پاریس در ۲۵ اوت ۱۹۴۴ آزاد شد.",
            "پس از جنگ، جمهوری چهارم (۱۹۴۶ تا ۱۹۵۸) با جنگ‌های استعماری در هندوچین و الجزایر درگیر شد. با بحران الجزایر دوگل بازگشت و جمهوری پنجم در ۱۹۵۸ آغاز شد. الجزایر در ۱۹۶۲ مستقل شد. فرانسه در ۱۹۵۰ با اعلامیه‌ی شومان به پایه‌گذاری همگرایی اروپا کمک کرد و از بنیان‌گذاران جامعه‌ی اقتصادی اروپا (۱۹۵۷) بود. در مه ۱۹۶۸ اعتراض‌های دانشجویی و اعتصاب عمومی جامعه را تکان داد. امروز فرانسه جمهوری نیمه‌ریاستی و یکی از اعضای دائم شورای امنیت سازمان ملل است."
          ],
          "en": [
            "France lost about 1.4 million soldiers in the First World War (1914 to 1918). In the Second World War Germany attacked in May 1940 and an armistice was signed on 22 June. Northern France was occupied, and in the south the Vichy government under Pétain chose collaboration with Germany, including helping with the deportation of Jews. General de Gaulle called for resistance from London, and a resistance movement was also active inside the country. Paris was liberated on 25 August 1944.",
            "After the war the Fourth Republic (1946 to 1958) was caught up in colonial wars in Indochina and Algeria. With the Algerian crisis de Gaulle returned and the Fifth Republic began in 1958. Algeria became independent in 1962. In 1950 France helped start European integration with the Schuman Declaration and was a founder of the European Economic Community (1957). In May 1968 student protests and a general strike shook society. Today France is a semi-presidential republic and a permanent member of the UN Security Council."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -58,
        "yearText": {
          "fa": "۵۸ تا ۵۰ پ.م.",
          "en": "58 to 50 BCE"
        },
        "title": {
          "fa": "جنگ‌های گال",
          "en": "The Gallic Wars"
        },
        "text": {
          "fa": "ژولیوس سزار گال را برای روم فتح کرد.",
          "en": "Julius Caesar conquered Gaul for Rome."
        }
      },
      {
        "year": -52,
        "title": {
          "fa": "نبرد آلزیا",
          "en": "Battle of Alesia"
        },
        "text": {
          "fa": "ورسینژتوریکس، رهبر گال‌ها، شکست خورد و تسلیم شد.",
          "en": "Vercingetorix, the Gallic leader, was defeated and surrendered."
        }
      },
      {
        "year": 486,
        "title": {
          "fa": "پیروزی کلوویس در سواسون",
          "en": "Clovis’s victory at Soissons"
        },
        "text": {
          "fa": "کلوویس آخرین فرمانروای رومی‌تبار شمال گال را شکست داد.",
          "en": "Clovis defeated the last Roman-descended ruler of northern Gaul."
        }
      },
      {
        "year": 496,
        "title": {
          "fa": "تعمید کلوویس (حدود)",
          "en": "The baptism of Clovis (about)"
        },
        "text": {
          "fa": "کلوویس به مذهب کاتولیک گروید؛ برخی مورخان این رویداد را بعدتر می‌دانند.",
          "en": "Clovis converted to Catholicism; some historians date this event later."
        }
      },
      {
        "year": 732,
        "title": {
          "fa": "نبرد تور",
          "en": "Battle of Tours"
        },
        "text": {
          "fa": "چارلز مارتل پیشروی نیروهای اندلس را متوقف کرد.",
          "en": "Charles Martel halted the advance of forces from al-Andalus."
        }
      },
      {
        "year": 800,
        "title": {
          "fa": "تاج‌گذاری شارلمانی",
          "en": "Coronation of Charlemagne"
        },
        "text": {
          "fa": "شارلمانی در رم امپراتور شد.",
          "en": "Charlemagne was crowned emperor in Rome."
        }
      },
      {
        "year": 843,
        "title": {
          "fa": "پیمان وردون",
          "en": "Treaty of Verdun"
        },
        "text": {
          "fa": "فرانکیای غربی به شارل کچل رسید؛ هسته‌ی پادشاهی فرانسه.",
          "en": "West Francia went to Charles the Bald, the core of the kingdom of France."
        }
      },
      {
        "year": 987,
        "title": {
          "fa": "هوگ کاپه پادشاه می‌شود",
          "en": "Hugh Capet becomes king"
        },
        "text": {
          "fa": "حکومت خاندان کاپتی بر فرانسه آغاز شد.",
          "en": "The Capetian dynasty’s rule over France began."
        }
      },
      {
        "year": 1066,
        "title": {
          "fa": "فتح انگلستان به‌دست نورمان‌ها",
          "en": "The Norman conquest of England"
        },
        "text": {
          "fa": "ویلیام، دوک نورماندی، در نبرد هستینگز انگلستان را گرفت.",
          "en": "William, duke of Normandy, took England at the Battle of Hastings."
        }
      },
      {
        "year": 1163,
        "title": {
          "fa": "آغاز ساخت نوتردام",
          "en": "Construction of Notre-Dame begins"
        },
        "text": {
          "fa": "ساخت کلیسای جامع پاریس آغاز شد.",
          "en": "Construction of the cathedral of Paris began."
        }
      },
      {
        "year": 1337,
        "title": {
          "fa": "آغاز جنگ صد ساله",
          "en": "The Hundred Years’ War begins"
        },
        "text": {
          "fa": "جنگ میان فرانسه و انگلستان بر سر تاج فرانسه آغاز شد.",
          "en": "The war between France and England over the French crown began."
        }
      },
      {
        "year": 1348,
        "title": {
          "fa": "طاعون سیاه",
          "en": "The Black Death"
        },
        "text": {
          "fa": "طاعون سیاه پس از رسیدن به مارسی در ۱۳۴۷ در سراسر فرانسه گسترش یافت.",
          "en": "After reaching Marseille in 1347 the Black Death spread across France."
        }
      },
      {
        "year": 1429,
        "title": {
          "fa": "ژاندارک در اورلئان",
          "en": "Joan of Arc at Orléans"
        },
        "text": {
          "fa": "محاصره‌ی اورلئان شکسته شد و شارل هفتم در ژوئیه در ریمس تاج‌گذاری کرد.",
          "en": "The siege of Orléans was broken and in July Charles VII was crowned at Reims."
        }
      },
      {
        "year": 1431,
        "title": {
          "fa": "اعدام ژاندارک",
          "en": "The execution of Joan of Arc"
        },
        "text": {
          "fa": "ژاندارک در ۳۰ مه در روئن سوزانده شد.",
          "en": "Joan of Arc was burned at Rouen on 30 May."
        }
      },
      {
        "year": 1453,
        "title": {
          "fa": "پایان جنگ صد ساله",
          "en": "End of the Hundred Years’ War"
        },
        "text": {
          "fa": "فرانسه با پیروزی در نبرد کاستیون جنگ را برد.",
          "en": "France won the war with its victory at the Battle of Castillon."
        }
      },
      {
        "year": 1515,
        "title": {
          "fa": "فرانسوای اول پادشاه می‌شود",
          "en": "Francis I becomes king"
        },
        "text": {
          "fa": "فرانسوای اول رنسانس ایتالیایی را به فرانسه آورد.",
          "en": "Francis I brought the Italian Renaissance to France."
        }
      },
      {
        "year": 1562,
        "title": {
          "fa": "آغاز جنگ‌های مذهبی",
          "en": "The Wars of Religion begin"
        },
        "text": {
          "fa": "درگیری میان کاتولیک‌ها و هوگونوها آغاز شد.",
          "en": "Conflict between Catholics and Huguenots began."
        }
      },
      {
        "year": 1572,
        "title": {
          "fa": "شب سنت بارتولومی",
          "en": "St Bartholomew’s Day massacre"
        },
        "text": {
          "fa": "در ۲۴ اوت هزاران پروتستان در پاریس و شهرهای دیگر کشته شدند.",
          "en": "On 24 August thousands of Protestants were killed in Paris and other cities."
        }
      },
      {
        "year": 1598,
        "title": {
          "fa": "فرمان نانت",
          "en": "The Edict of Nantes"
        },
        "text": {
          "fa": "هانری چهارم به پروتستان‌ها حقوق دینی داد.",
          "en": "Henry IV granted Protestants religious rights."
        }
      },
      {
        "year": 1643,
        "title": {
          "fa": "لویی چهاردهم پادشاه می‌شود",
          "en": "Louis XIV becomes king"
        },
        "text": {
          "fa": "لویی چهاردهم در چهارسالگی بر تخت نشست و ۷۲ سال سلطنت کرد.",
          "en": "Louis XIV came to the throne at the age of four and reigned for 72 years."
        }
      },
      {
        "year": 1682,
        "title": {
          "fa": "انتقال دربار به ورسای",
          "en": "The court moves to Versailles"
        },
        "text": {
          "fa": "کاخ ورسای مقر دربار و دولت شد.",
          "en": "The palace of Versailles became the seat of the court and government."
        }
      },
      {
        "year": 1685,
        "title": {
          "fa": "لغو فرمان نانت",
          "en": "Revocation of the Edict of Nantes"
        },
        "text": {
          "fa": "حقوق پروتستان‌ها لغو شد و بسیاری از آن‌ها از فرانسه گریختند.",
          "en": "Protestant rights were revoked and many Protestants fled France."
        }
      },
      {
        "year": 1789,
        "title": {
          "fa": "سقوط باستیل",
          "en": "The fall of the Bastille"
        },
        "text": {
          "fa": "در ۱۴ ژوئیه مردم پاریس به زندان باستیل حمله کردند؛ نماد آغاز انقلاب.",
          "en": "On 14 July the people of Paris stormed the Bastille prison, a symbol of the start of the Revolution."
        }
      },
      {
        "year": 1792,
        "title": {
          "fa": "جمهوری اول",
          "en": "The First Republic"
        },
        "text": {
          "fa": "در سپتامبر پادشاهی برچیده شد و جمهوری اعلام شد.",
          "en": "In September the monarchy was abolished and the republic proclaimed."
        }
      },
      {
        "year": 1793,
        "title": {
          "fa": "اعدام لویی شانزدهم",
          "en": "The execution of Louis XVI"
        },
        "text": {
          "fa": "در ۲۱ ژانویه پادشاه سابق به گیوتین سپرده شد و دوران وحشت آغاز شد.",
          "en": "On 21 January the former king was guillotined and the Reign of Terror began."
        }
      },
      {
        "year": 1799,
        "title": {
          "fa": "کودتای ناپلئون",
          "en": "Napoleon’s coup"
        },
        "text": {
          "fa": "ناپلئون بناپارت قدرت را در دست گرفت.",
          "en": "Napoleon Bonaparte seized power."
        }
      },
      {
        "year": 1804,
        "title": {
          "fa": "امپراتوری ناپلئون و قانون مدنی",
          "en": "Napoleon’s empire and the Civil Code"
        },
        "text": {
          "fa": "ناپلئون امپراتور شد و قانون مدنی فرانسه تصویب شد.",
          "en": "Napoleon became emperor and the French Civil Code was adopted."
        }
      },
      {
        "year": 1815,
        "title": {
          "fa": "نبرد واترلو",
          "en": "Battle of Waterloo"
        },
        "text": {
          "fa": "در ۱۸ ژوئن ناپلئون شکست خورد و به سنت هلنا تبعید شد.",
          "en": "On 18 June Napoleon was defeated and exiled to Saint Helena."
        }
      },
      {
        "year": 1830,
        "title": {
          "fa": "انقلاب ژوییه",
          "en": "The July Revolution"
        },
        "text": {
          "fa": "شارل دهم سرنگون شد و لویی فیلیپ پادشاه شد.",
          "en": "Charles X was overthrown and Louis-Philippe became king."
        }
      },
      {
        "year": 1848,
        "title": {
          "fa": "انقلاب ۱۸۴۸ و جمهوری دوم",
          "en": "The Revolution of 1848 and the Second Republic"
        },
        "text": {
          "fa": "پادشاهی سرنگون شد و جمهوری دوم برپا شد.",
          "en": "The monarchy was overthrown and the Second Republic set up."
        }
      },
      {
        "year": 1852,
        "title": {
          "fa": "امپراتوری دوم",
          "en": "The Second Empire"
        },
        "text": {
          "fa": "ناپلئون سوم امپراتور شد.",
          "en": "Napoleon III became emperor."
        }
      },
      {
        "year": 1870,
        "title": {
          "fa": "شکست سدان و جمهوری سوم",
          "en": "Defeat at Sedan and the Third Republic"
        },
        "text": {
          "fa": "ناپلئون سوم اسیر شد و جمهوری اعلام شد.",
          "en": "Napoleon III was captured and the republic was proclaimed."
        }
      },
      {
        "year": 1871,
        "title": {
          "fa": "کمون پاریس",
          "en": "The Paris Commune"
        },
        "text": {
          "fa": "شورش پاریس در ماه مه سرکوب شد.",
          "en": "The Paris uprising was crushed in May."
        }
      },
      {
        "year": 1914,
        "title": {
          "fa": "آغاز جنگ جهانی اول",
          "en": "The First World War begins"
        },
        "text": {
          "fa": "فرانسه وارد جنگی شد که تا ۱۹۱۸ ادامه یافت.",
          "en": "France entered a war that lasted until 1918."
        }
      },
      {
        "year": 1940,
        "title": {
          "fa": "سقوط فرانسه",
          "en": "The fall of France"
        },
        "text": {
          "fa": "آلمان در مه حمله کرد و در ۲۲ ژوئن آتش‌بس امضا شد؛ دولت ویشی شکل گرفت.",
          "en": "Germany attacked in May and an armistice was signed on 22 June; the Vichy government was formed."
        }
      },
      {
        "year": 1944,
        "title": {
          "fa": "آزادی پاریس",
          "en": "The liberation of Paris"
        },
        "text": {
          "fa": "پاریس در ۲۵ اوت از اشغال آزاد شد.",
          "en": "Paris was freed from occupation on 25 August."
        }
      },
      {
        "year": 1957,
        "title": {
          "fa": "پیمان رم",
          "en": "The Treaty of Rome"
        },
        "text": {
          "fa": "فرانسه از بنیان‌گذاران جامعه‌ی اقتصادی اروپا شد.",
          "en": "France became a founder of the European Economic Community."
        }
      },
      {
        "year": 1958,
        "title": {
          "fa": "جمهوری پنجم",
          "en": "The Fifth Republic"
        },
        "text": {
          "fa": "قانون اساسی جدید با رهبری دوگل تصویب شد.",
          "en": "A new constitution was approved under de Gaulle’s leadership."
        }
      },
      {
        "year": 1962,
        "title": {
          "fa": "استقلال الجزایر",
          "en": "Algerian independence"
        },
        "text": {
          "fa": "پس از جنگ الجزایر، آن کشور مستقل شد.",
          "en": "After the Algerian War that country became independent."
        }
      },
      {
        "year": 1968,
        "title": {
          "fa": "اعتراض‌های مه ۱۹۶۸",
          "en": "The protests of May 1968"
        },
        "text": {
          "fa": "اعتراض‌های دانشجویی و اعتصاب عمومی جامعه را تکان داد.",
          "en": "Student protests and a general strike shook society."
        }
      }
    ]
  },
  "united-kingdom": {
    "sections": [
      {
        "id": "roman-britain",
        "title": {
          "fa": "پیش از تاریخ و بریتانیای رومی",
          "en": "Prehistory and Roman Britain"
        },
        "text": {
          "fa": [
            "استون‌هنج، بنای سنگی نمادین جنوب انگلستان، از حدود ۳۰۰۰ پیش از میلاد در مراحل ساخته شد و سنگ‌های بزرگ آن حدود ۲۵۰۰ پیش از میلاد برافراشته شدند. در جزیره مردمانی سلتی‌زبان به نام بریتون‌ها زندگی می‌کردند.",
            "رومی‌ها در ۴۳ میلادی به فرمان امپراتور کلودیوس به جزیره حمله کردند و بخش بزرگی از آن (انگلستان و ویلز امروزی) را به ایالت «بریتانیا» تبدیل کردند. شورش بودیکا، ملکه‌ی قبیله‌ی ایسنی، در سال‌های ۶۰ و ۶۱ لندینیوم (لندن) را سوزاند و سرکوب شد. دیوار هادریان از ۱۲۲ ساخته شد تا مرز شمالی ایالت را نشان دهد. رومی‌ها حدود ۴۱۰ جزیره را ترک کردند."
          ],
          "en": [
            "Stonehenge, the iconic stone monument of southern England, was built in stages from about 3000 BCE and its great stones were raised around 2500 BCE. The island was home to Celtic-speaking peoples called the Britons.",
            "In 43 CE the Romans invaded the island on the order of Emperor Claudius and turned much of it (today’s England and Wales) into the province of ‘Britannia’. The revolt of Boudica, queen of the Iceni tribe, in 60 and 61 burned Londinium (London) and was put down. Hadrian’s Wall was built from 122 to mark the northern edge of the province. The Romans left the island around 410."
          ]
        }
      },
      {
        "id": "anglo-saxons",
        "title": {
          "fa": "آنگلوساکسون‌ها و وایکینگ‌ها",
          "en": "The Anglo-Saxons and the Vikings"
        },
        "text": {
          "fa": [
            "پس از رفتن رومی‌ها، اقوام ژرمن (آنگل‌ها، ساکسون‌ها و جوت‌ها) از قرن پنجم به جزیره آمدند و پادشاهی‌های کوچکی ساختند. نام «انگلستان» (سرزمین آنگل‌ها) از آن‌هاست. آگوستین قدیس در ۵۹۷ برای گسترش مسیحیت به کنت رسید. بید (حدود ۶۷۳ تا ۷۳۵) نخستین تاریخ‌نامه‌ی انگلستان را نوشت.",
            "وایکینگ‌ها از ۷۹۳ (حمله به صومعه‌ی لیندیسفارن) به جزیره حمله کردند و بخش بزرگی از شرق و شمال را زیر نفوذ آوردند (دنلو). آلفرد کبیر، پادشاه وسکس (۸۷۱ تا ۸۹۹)، در ۸۷۸ در ادینگتون دانمارکی‌ها را شکست داد. در ۹۲۷ آتل‌استان یورک را گرفت و به‌عنوان نخستین پادشاه همه‌ی انگلستان شناخته می‌شود. کنوت دانمارکی از ۱۰۱۶ تا ۱۰۳۵ بر انگلستان فرمان راند."
          ],
          "en": [
            "After the Romans left, Germanic peoples (the Angles, Saxons and Jutes) came to the island from the fifth century and built small kingdoms. The name ‘England’ (land of the Angles) comes from them. Saint Augustine arrived in Kent in 597 to spread Christianity. Bede (about 673 to 735) wrote the first history of England.",
            "The Vikings raided the island from 793 (the attack on the monastery of Lindisfarne) and brought much of the east and north under their influence (the Danelaw). Alfred the Great, king of Wessex (871 to 899), defeated the Danes at Edington in 878. In 927 Æthelstan took York and is regarded as the first king of all England. Cnut the Dane ruled England from 1016 to 1035."
          ]
        }
      },
      {
        "id": "normans",
        "title": {
          "fa": "نورمان‌ها و قرون وسطی",
          "en": "The Normans and the Middle Ages"
        },
        "text": {
          "fa": [
            "در ۱۴ اکتبر ۱۰۶۶ ویلیام، دوک نورماندی، در نبرد هستینگز هرولد گادوینسون، پادشاه انگلستان، را شکست داد و در روز کریسمس همان سال تاج‌گذاری کرد. نورمان‌ها قلعه‌ها ساختند، زمین را میان بزرگان فرانسوی‌زبان بخش کردند و در ۱۰۸۶ «کتاب دومزدی»، سیاهه‌ی املاک کشور، را تدوین کردند. زبان فرانسوی نورمانی تا قرن‌ها زبان دربار بود و واژه‌های بسیاری از آن به انگلیسی وارد شد.",
            "در ۱۲۱۵ بزرگان شاه جان را در رانیمید به امضای «منشور کبیر» (مگنا کارتا) واداشتند؛ سندی که قدرت شاه را محدود می‌کرد و بعدها نماد حکومت قانون شد. نخستین مجالس نمایندگان در قرن سیزدهم شکل گرفت (۱۲۶۵ مجلس سیمون دو مونفور). ادوارد اول ویلز را در ۱۲۸۲ و ۱۲۸۳ فتح کرد. اسکاتلند با رهبرانی چون ویلیام والاس و رابرت بروس در برابر انگلستان ایستاد و در بنوکبرن (۱۳۱۴) پیروز شد."
          ],
          "en": [
            "On 14 October 1066 William, duke of Normandy, defeated Harold Godwinson, king of England, at the Battle of Hastings and was crowned on Christmas Day that year. The Normans built castles, divided the land among French-speaking nobles and in 1086 compiled the Domesday Book, a survey of the country’s estates. Norman French was the language of the court for centuries and many words from it entered English.",
            "In 1215 the barons forced King John at Runnymede to seal Magna Carta, a document that limited the king’s power and later became a symbol of the rule of law. The first assemblies of representatives took shape in the thirteenth century (Simon de Montfort’s Parliament of 1265). Edward I conquered Wales in 1282 and 1283. Scotland stood against England with leaders such as William Wallace and Robert the Bruce and won at Bannockburn (1314)."
          ]
        }
      },
      {
        "id": "late-medieval",
        "title": {
          "fa": "جنگ صد ساله، طاعون و جنگ‌های گل‌ها",
          "en": "The Hundred Years’ War, plague and the Wars of the Roses"
        },
        "text": {
          "fa": [
            "جنگ صد ساله (۱۳۳۷ تا ۱۴۵۳) با فرانسه بر سر تاج فرانسه بود و انگلستان در پایان همه‌ی سرزمین‌هایش در فرانسه، جز کاله، را از دست داد. طاعون سیاه در ۱۳۴۸ به انگلستان رسید و حدود یک‌سوم تا نیمی از جمعیت را از میان برد. کمبود کارگر و مالیات‌های سنگین به شورش دهقانان در ۱۳۸۱ انجامید.",
            "جنگ‌های گل‌ها (۱۴۵۵ تا ۱۴۸۷) میان دو شاخه‌ی خاندان پلانتاجنت، لنکستر و یورک، درگرفت. ریچارد سوم در نبرد بوزورث (۲۲ اوت ۱۴۸۵) کشته شد و هنری تودور پادشاه شد (هنری هفتم)؛ آغاز دوره‌ی تودورها."
          ],
          "en": [
            "The Hundred Years’ War (1337 to 1453) with France was over the French crown and at the end England lost all its lands in France except Calais. The Black Death reached England in 1348 and wiped out about a third to a half of the population. Labour shortages and heavy taxes led to the Peasants’ Revolt in 1381.",
            "The Wars of the Roses (1455 to 1487) were fought between two branches of the Plantagenet house, Lancaster and York. Richard III was killed at the Battle of Bosworth (22 August 1485) and Henry Tudor became king (Henry VII), the start of the Tudor period."
          ]
        }
      },
      {
        "id": "tudors",
        "title": {
          "fa": "تودورها و جدایی از رم",
          "en": "The Tudors and the break with Rome"
        },
        "text": {
          "fa": [
            "هنری هشتم (۱۵۰۹ تا ۱۵۴۷) پس از اختلاف با پاپ بر سر طلاقش، در ۱۵۳۴ با «قانون برتری» خود را رهبر کلیسای انگلستان اعلام کرد و کلیسای انگلیکن را از رم جدا کرد. صومعه‌ها در ۱۵۳۶ تا ۱۵۴۱ برچیده شد و زمین‌هایشان به تاج و اشراف رسید. ویلز در قوانین ۱۵۳۵ و ۱۵۴۲ با انگلستان یکی شد.",
            "الیزابت اول (۱۵۵۸ تا ۱۶۰۳) سازش دینی پروتستانی را برقرار کرد. در ۱۵۸۸ ناوگان بزرگ اسپانیا (آرمادا) در حمله به انگلستان ناکام ماند. این دوران «عصر الیزابتی» بود: شکسپیر، کاوشگران دریایی و آغاز شرکت هند شرقی (۱۶۰۰)."
          ],
          "en": [
            "Henry VIII (1509 to 1547), after a dispute with the pope over his divorce, declared himself head of the Church of England with the Act of Supremacy in 1534 and separated the Anglican Church from Rome. The monasteries were dissolved from 1536 to 1541 and their lands passed to the crown and the nobility. Wales was united with England by the laws of 1535 and 1542.",
            "Elizabeth I (1558 to 1603) established a Protestant religious settlement. In 1588 Spain’s great fleet (the Armada) failed in its attack on England. This was the ‘Elizabethan age’: Shakespeare, seafaring explorers and the start of the East India Company (1600)."
          ]
        }
      },
      {
        "id": "stuarts",
        "title": {
          "fa": "استوارت‌ها، جنگ داخلی و اتحاد",
          "en": "The Stuarts, the Civil War and the Union"
        },
        "text": {
          "fa": [
            "پس از مرگ الیزابت، جیمز ششم اسکاتلند در ۱۶۰۳ جیمز اول انگلستان شد و دو تاج در یک شخص جمع شد (دو پادشاهی و دو پارلمان جدا ماندند). طرح باروت (۱۶۰۵) و نخستین مستعمره‌ی دائمی انگلیسی در آمریکا، جیمزتاون (۱۶۰۷)، از رویدادهای این دوره‌اند.",
            "اختلاف شاه و پارلمان بر سر مالیات و دین به جنگ داخلی (۱۶۴۲ تا ۱۶۵۱) انجامید. چارلز اول در ۳۰ ژانویه‌ی ۱۶۴۹ اعدام شد و انگلستان برای مدتی جمهوری بود؛ الیور کرامول از ۱۶۵۳ «لرد حامی» بود. با بازگشت پادشاهی در ۱۶۶۰ چارلز دوم بر تخت نشست. طاعون بزرگ (۱۶۶۵) و آتش‌سوزی بزرگ لندن (۲ تا ۶ سپتامبر ۱۶۶۶) لندن را ویران کرد. «انقلاب شکوهمند» ۱۶۸۸ جیمز دوم را برکنار کرد و «اعلامیه‌ی حقوق» (۱۶۸۹) قدرت پارلمان را تثبیت کرد.",
            "قوانین اتحاد (۱ مه ۱۷۰۷) انگلستان و اسکاتلند را در «پادشاهی بریتانیای کبیر» با یک پارلمان یکی کرد. از ۱۷۱۴ خاندان هانوفر بر بریتانیا حکم راند. قیام‌های ژاکوبیت‌ها که می‌خواستند استوارت‌ها را برگردانند، در نبرد کالودن (۱۶ آوریل ۱۷۴۶) شکست خورد."
          ],
          "en": [
            "After Elizabeth’s death, James VI of Scotland became James I of England in 1603 and the two crowns were held by one person (the two kingdoms and two parliaments stayed separate). The Gunpowder Plot (1605) and the first permanent English colony in America, Jamestown (1607), are among the events of this period.",
            "The dispute between king and parliament over taxes and religion led to civil war (1642 to 1651). Charles I was executed on 30 January 1649 and England was for a time a republic; Oliver Cromwell was ‘Lord Protector’ from 1653. With the return of the monarchy in 1660 Charles II took the throne. The Great Plague (1665) and the Great Fire of London (2 to 6 September 1666) devastated London. The ‘Glorious Revolution’ of 1688 removed James II and the Bill of Rights (1689) fixed the power of parliament.",
            "The Acts of Union (1 May 1707) joined England and Scotland in the ‘Kingdom of Great Britain’ with one parliament. From 1714 the house of Hanover ruled Britain. The Jacobite risings, which wanted to bring back the Stuarts, were defeated at the Battle of Culloden (16 April 1746)."
          ]
        }
      },
      {
        "id": "empire",
        "title": {
          "fa": "انقلاب صنعتی و امپراتوری",
          "en": "The Industrial Revolution and the Empire"
        },
        "text": {
          "fa": [
            "انقلاب صنعتی از حدود ۱۷۶۰ در بریتانیا آغاز شد: ماشین بخار جیمز وات، کارخانه‌های نساجی، زغال‌سنگ و آهن، و راه‌آهن (استاکتون-دارلینگتون، ۱۸۲۵). شهرها به‌سرعت رشد کردند و جامعه دگرگون شد؛ همراه با کار سخت کودکان و کارگران در کارخانه‌ها و معدن‌ها. بریتانیا در ۱۷۷۶ تا ۱۷۸۳ سیزده مستعمره‌ی آمریکایی را از دست داد، اما در جنگ‌های ناپلئونی (نبرد ترافالگار ۱۸۰۵ و واترلو ۱۸۱۵) پیروز شد. در ۱۸۰۱ ایرلند با بریتانیا یکی شد.",
            "بریتانیا یکی از بزرگ‌ترین بازرگانان برده بود. «قانون لغو تجارت برده» (۱۸۰۷) تجارت برده و «قانون لغو برده‌داری» (۱۸۳۳) خود برده‌داری را در امپراتوری لغو کرد؛ ولی غرامت به برده‌داران پرداخت شد، نه به بردگان. در دوره‌ی ویکتوریا (۱۸۳۷ تا ۱۹۰۱) امپراتوری بریتانیا بر هند (از ۱۸۵۸ مستقیم تحت تاج)، بخش‌های بزرگی از آفریقا، کانادا، استرالیا و جاهای دیگر گسترش یافت و در دهه‌ی ۱۹۲۰ حدود یک‌چهارم زمین و جمعیت جهان را دربر می‌گرفت. استعمار با خشونت، قحطی و استثمار همراه بود؛ از جمله قحطی بزرگ ایرلند (۱۸۴۵ تا ۱۸۵۲) که حدود یک میلیون نفر در آن مردند و شمار مشابهی مهاجرت کردند.",
            "در داخل، قوانین اصلاحات (۱۸۳۲، ۱۸۶۷، ۱۸۸۴) حق رأی را گسترش داد و جنبش‌های کارگری و حقوق زنان شکل گرفت. نمایشگاه بزرگ ۱۸۵۱ در کاخ بلورین لندن شکوه صنعتی بریتانیا را نشان داد."
          ],
          "en": [
            "The Industrial Revolution began in Britain around 1760: James Watt’s steam engine, textile factories, coal and iron, and railways (Stockton and Darlington, 1825). Cities grew quickly and society was transformed, along with hard labour by children and workers in factories and mines. Britain lost the thirteen American colonies in 1776 to 1783 but won the Napoleonic Wars (the battles of Trafalgar 1805 and Waterloo 1815). In 1801 Ireland was united with Britain.",
            "Britain was one of the largest slave-trading nations. The Slave Trade Act (1807) abolished the trade and the Slavery Abolition Act (1833) abolished slavery itself in the empire; but compensation was paid to the slave owners, not to the enslaved. In the Victorian period (1837 to 1901) the British Empire spread over India (under direct Crown rule from 1858), large parts of Africa, Canada, Australia and other places, and in the 1920s covered about a quarter of the world’s land and population. Colonialism came with violence, famine and exploitation; among these was the Great Irish Famine (1845 to 1852), in which about a million people died and a similar number emigrated.",
            "At home, the Reform Acts (1832, 1867, 1884) widened the vote and labour and women’s rights movements took shape. The Great Exhibition of 1851 in London’s Crystal Palace showed Britain’s industrial grandeur."
          ]
        }
      },
      {
        "id": "world-wars",
        "title": {
          "fa": "جنگ‌های جهانی و استقلال ایرلند",
          "en": "The world wars and Irish independence"
        },
        "text": {
          "fa": [
            "بریتانیا در جنگ جهانی اول (۱۹۱۴ تا ۱۹۱۸) نزدیک به یک میلیون سرباز از بریتانیا و امپراتوری‌اش را از دست داد. در ۱۹۱۸ زنان بالای ۳۰ سال حق رأی گرفتند (و ۱۹۲۸ حق رأی برابر). قیام عید پاک (۱۹۱۶) در دوبلین و جنگ استقلال ایرلند (۱۹۱۹ تا ۱۹۲۱) به پیمان انگلیس و ایرلند (۱۹۲۱) انجامید: بخش بزرگی از ایرلند در ۱۹۲۲ «دولت آزاد ایرلند» شد و شش شهرستان شمال‌شرقی، ایرلند شمالی، در بریتانیا ماندند.",
            "بریتانیا در ۳ سپتامبر ۱۹۳۹ به آلمان نازی اعلام جنگ کرد. وینستون چرچیل از ۱۰ مه ۱۹۴۰ نخست‌وزیر بود. بیش از ۳۳۰ هزار سرباز متفقین در دانکرک (مه تا ژوئن ۱۹۴۰) تخلیه شدند و در نبرد بریتانیا (ژوئیه تا اکتبر ۱۹۴۰) نیروی هوایی بریتانیا حمله‌ی هوایی آلمان را دفع کرد. بمباران شهرها (بلیتز) از سپتامبر ۱۹۴۰ تا مه ۱۹۴۱ ادامه یافت. بریتانیا با شوروی و آمریکا هم‌پیمان شد و پس از فرود نرماندی (۶ ژوئن ۱۹۴۴) و پیروزی در اروپا (۸ مه ۱۹۴۵) جنگ را برد؛ ولی کشور از نظر اقتصادی بسیار ضعیف شد."
          ],
          "en": [
            "In the First World War (1914 to 1918) Britain lost close to a million soldiers from Britain and its empire. In 1918 women over 30 got the vote (and equal voting rights in 1928). The Easter Rising (1916) in Dublin and the Irish War of Independence (1919 to 1921) led to the Anglo-Irish Treaty (1921): the larger part of Ireland became the ‘Irish Free State’ in 1922 and six north-eastern counties, Northern Ireland, stayed in the United Kingdom.",
            "Britain declared war on Nazi Germany on 3 September 1939. Winston Churchill was prime minister from 10 May 1940. More than 330,000 Allied soldiers were evacuated at Dunkirk (May to June 1940) and in the Battle of Britain (July to October 1940) the Royal Air Force repelled the German air attack. The bombing of cities (the Blitz) continued from September 1940 to May 1941. Britain allied with the Soviet Union and the United States and won the war after the Normandy landings (6 June 1944) and victory in Europe (8 May 1945); but the country was left economically very weak."
          ]
        }
      },
      {
        "id": "postwar",
        "title": {
          "fa": "پس از جنگ: رفاه، پایان امپراتوری و اروپا",
          "en": "After the war: welfare, the end of empire and Europe"
        },
        "text": {
          "fa": [
            "دولت کارگری کلمنت اتلی (۱۹۴۵) «دولت رفاه» را بنا کرد و سازمان خدمات بهداشت ملی (ان‌اچ‌اس) در ۵ ژوئیه‌ی ۱۹۴۸ آغاز به کار کرد. هند و پاکستان در ۱۴ و ۱۵ اوت ۱۹۴۷ مستقل شدند و پس از آن بیشتر مستعمرات یکی پس از دیگری استقلال یافتند (غنا ۱۹۵۷ و بسیاری دیگر). بحران سوئز (۱۹۵۶) نشان داد که بریتانیا دیگر ابرقدرت نیست. الیزابت دوم از ۱۹۵۲ ملکه بود. بریتانیا در ۱ ژانویه‌ی ۱۹۷۳ به جامعه‌ی اقتصادی اروپا پیوست.",
            "ایرلند شمالی از ۱۹۶۸ تا ۱۹۹۸ دوره‌ی خشونت‌آمیز «مشکلات» را میان ملی‌گرایان ایرلندی و یونیونیست‌ها گذراند که با موافقت‌نامه‌ی جمعه‌ی خوب (۱۰ آوریل ۱۹۹۸) پایان یافت. مارگارت تاچر (۱۹۷۹ تا ۱۹۹۰) خصوصی‌سازی و کاهش نقش دولت را پیش برد؛ در ۱۹۸۲ بریتانیا در جنگ فالکلند آرژانتین را شکست داد. در ۱۹۹۷ هنگ‌کنگ به چین بازگردانده شد. در ۱۹۹۹ پارلمان اسکاتلند و مجمع ملی ویلز آغاز به کار کردند.",
            "در همه‌پرسی اسکاتلند (۱۸ سپتامبر ۲۰۱۴) حدود ۵۵ درصد به ماندن در بریتانیا رأی دادند. در همه‌پرسی ۲۳ ژوئن ۲۰۱۶ حدود ۵۲ درصد به خروج از اتحادیه‌ی اروپا رأی دادند و بریتانیا در ۳۱ ژانویه‌ی ۲۰۲۰ از آن خارج شد. الیزابت دوم در ۸ سپتامبر ۲۰۲۲ پس از ۷۰ سال سلطنت درگذشت و چارلز سوم پادشاه شد. امروز بریتانیا پادشاهی مشروطه‌ی پارلمانی، عضو دائم شورای امنیت سازمان ملل و از اعضای اصلی کشورهای مشترک‌المنافع است."
          ],
          "en": [
            "Clement Attlee’s Labour government (1945) built the ‘welfare state’ and the National Health Service (NHS) began work on 5 July 1948. Pakistan and India became independent on 14 and 15 August 1947 and after that most colonies gained independence one after another (Ghana in 1957 and many others). The Suez Crisis (1956) showed that Britain was no longer a superpower. Elizabeth II was queen from 1952. Britain joined the European Economic Community on 1 January 1973.",
            "From 1968 to 1998 Northern Ireland went through the violent period of ‘the Troubles’ between Irish nationalists and unionists, which ended with the Good Friday Agreement (10 April 1998). Margaret Thatcher (1979 to 1990) pushed privatization and a smaller role for the state; in 1982 Britain defeated Argentina in the Falklands War. In 1997 Hong Kong was returned to China. In 1999 the Scottish Parliament and the National Assembly for Wales began work.",
            "In the Scottish referendum (18 September 2014) about 55 percent voted to stay in the United Kingdom. In the referendum of 23 June 2016 about 52 percent voted to leave the European Union and Britain left it on 31 January 2020. Elizabeth II died on 8 September 2022 after a reign of 70 years and Charles III became king. Today the United Kingdom is a parliamentary constitutional monarchy, a permanent member of the UN Security Council and a core member of the Commonwealth."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -3000,
        "title": {
          "fa": "آغاز ساخت استون‌هنج (حدود)",
          "en": "Construction of Stonehenge begins (about)"
        },
        "text": {
          "fa": "نخستین مرحله‌ی ساخت در حدود ۳۰۰۰ پیش از میلاد؛ سنگ‌های بزرگ حدود ۲۵۰۰ پیش از میلاد برافراشته شدند.",
          "en": "The first stage of construction at about 3000 BCE; the great stones were raised around 2500 BCE."
        }
      },
      {
        "year": 43,
        "title": {
          "fa": "حمله‌ی رومی‌ها",
          "en": "The Roman invasion"
        },
        "text": {
          "fa": "کلودیوس بریتانیا را به ایالتی رومی تبدیل کرد.",
          "en": "Claudius turned Britain into a Roman province."
        }
      },
      {
        "year": 60,
        "title": {
          "fa": "شورش بودیکا",
          "en": "The revolt of Boudica"
        },
        "text": {
          "fa": "در سال‌های ۶۰ و ۶۱ ملکه‌ی ایسنی لندینیوم را سوزاند؛ شورش سرکوب شد.",
          "en": "In 60 and 61 the queen of the Iceni burned Londinium; the revolt was put down."
        }
      },
      {
        "year": 122,
        "title": {
          "fa": "آغاز ساخت دیوار هادریان",
          "en": "Hadrian’s Wall is begun"
        },
        "text": {
          "fa": "دیوار مرز شمالی ایالت رومی را نشان می‌داد.",
          "en": "The wall marked the northern edge of the Roman province."
        }
      },
      {
        "year": 410,
        "title": {
          "fa": "رفتن رومی‌ها (حدود)",
          "en": "The Romans leave (about)"
        },
        "text": {
          "fa": "حکومت رومی بریتانیا پایان یافت.",
          "en": "Roman rule in Britain ended."
        }
      },
      {
        "year": 597,
        "title": {
          "fa": "ورود آگوستین قدیس",
          "en": "The arrival of Saint Augustine"
        },
        "text": {
          "fa": "آگوستین برای گسترش مسیحیت به کنت رسید.",
          "en": "Augustine arrived in Kent to spread Christianity."
        }
      },
      {
        "year": 793,
        "title": {
          "fa": "حمله‌ی وایکینگ‌ها به لیندیسفارن",
          "en": "The Viking raid on Lindisfarne"
        },
        "text": {
          "fa": "آغاز دوره‌ی حمله‌های وایکینگ‌ها.",
          "en": "The start of the age of Viking raids."
        }
      },
      {
        "year": 878,
        "title": {
          "fa": "پیروزی آلفرد در ادینگتون",
          "en": "Alfred’s victory at Edington"
        },
        "text": {
          "fa": "آلفرد کبیر دانمارکی‌ها را شکست داد و وسکس را نجات داد.",
          "en": "Alfred the Great defeated the Danes and saved Wessex."
        }
      },
      {
        "year": 927,
        "title": {
          "fa": "آتل‌استان و پادشاهی انگلستان",
          "en": "Æthelstan and the kingdom of England"
        },
        "text": {
          "fa": "آتل‌استان یورک را گرفت و نخستین پادشاه همه‌ی انگلستان شد.",
          "en": "Æthelstan took York and became the first king of all England."
        }
      },
      {
        "year": 1016,
        "title": {
          "fa": "کنوت پادشاه انگلستان می‌شود",
          "en": "Cnut becomes king of England"
        },
        "text": {
          "fa": "انگلستان بخشی از امپراتوری دریای شمال شد.",
          "en": "England became part of a North Sea empire."
        }
      },
      {
        "year": 1066,
        "title": {
          "fa": "نبرد هستینگز و فتح نورمان‌ها",
          "en": "The Battle of Hastings and the Norman Conquest"
        },
        "text": {
          "fa": "در ۱۴ اکتبر ویلیام هرولد را شکست داد و در کریسمس تاج‌گذاری کرد.",
          "en": "On 14 October William defeated Harold and was crowned at Christmas."
        }
      },
      {
        "year": 1086,
        "title": {
          "fa": "کتاب دومزدی",
          "en": "The Domesday Book"
        },
        "text": {
          "fa": "سیاهه‌ی املاک و ثروت کشور تدوین شد.",
          "en": "A survey of the country’s estates and wealth was compiled."
        }
      },
      {
        "year": 1215,
        "title": {
          "fa": "منشور کبیر",
          "en": "Magna Carta"
        },
        "text": {
          "fa": "در ۱۵ ژوئن شاه جان در رانیمید منشور را امضا کرد.",
          "en": "On 15 June King John sealed the charter at Runnymede."
        }
      },
      {
        "year": 1265,
        "title": {
          "fa": "مجلس سیمون دو مونفور",
          "en": "Simon de Montfort’s Parliament"
        },
        "text": {
          "fa": "یکی از نخستین مجالس که شهروندان در آن نماینده داشتند.",
          "en": "One of the first parliaments in which townspeople had representatives."
        }
      },
      {
        "year": 1282,
        "yearText": {
          "fa": "۱۲۸۲ تا ۱۲۸۳",
          "en": "1282 to 1283"
        },
        "title": {
          "fa": "فتح ویلز",
          "en": "The conquest of Wales"
        },
        "text": {
          "fa": "ادوارد اول ویلز را فتح کرد.",
          "en": "Edward I conquered Wales."
        }
      },
      {
        "year": 1314,
        "title": {
          "fa": "نبرد بنوکبرن",
          "en": "The Battle of Bannockburn"
        },
        "text": {
          "fa": "رابرت بروس انگلیسی‌ها را شکست داد و استقلال اسکاتلند را حفظ کرد.",
          "en": "Robert the Bruce defeated the English and kept Scotland independent."
        }
      },
      {
        "year": 1337,
        "yearText": {
          "fa": "۱۳۳۷ تا ۱۴۵۳",
          "en": "1337 to 1453"
        },
        "title": {
          "fa": "جنگ صد ساله",
          "en": "The Hundred Years’ War"
        },
        "text": {
          "fa": "جنگ انگلستان و فرانسه بر سر تاج فرانسه.",
          "en": "The war of England and France over the French crown."
        }
      },
      {
        "year": 1348,
        "title": {
          "fa": "طاعون سیاه",
          "en": "The Black Death"
        },
        "text": {
          "fa": "طاعون به انگلستان رسید و یک‌سوم تا نیمی از جمعیت را از میان برد.",
          "en": "The plague reached England and wiped out a third to a half of the population."
        }
      },
      {
        "year": 1381,
        "title": {
          "fa": "شورش دهقانان",
          "en": "The Peasants’ Revolt"
        },
        "text": {
          "fa": "دهقانان به مالیات سنگین اعتراض کردند.",
          "en": "Peasants protested against heavy taxes."
        }
      },
      {
        "year": 1455,
        "yearText": {
          "fa": "۱۴۵۵ تا ۱۴۸۷",
          "en": "1455 to 1487"
        },
        "title": {
          "fa": "جنگ‌های گل‌ها",
          "en": "The Wars of the Roses"
        },
        "text": {
          "fa": "جنگ میان لنکستر و یورک بر سر تاج.",
          "en": "War between Lancaster and York over the crown."
        }
      },
      {
        "year": 1485,
        "title": {
          "fa": "نبرد بوزورث",
          "en": "The Battle of Bosworth"
        },
        "text": {
          "fa": "ریچارد سوم کشته شد و هنری تودور پادشاه شد.",
          "en": "Richard III was killed and Henry Tudor became king."
        }
      },
      {
        "year": 1534,
        "title": {
          "fa": "قانون برتری",
          "en": "The Act of Supremacy"
        },
        "text": {
          "fa": "هنری هشتم رهبر کلیسای انگلستان شد و از رم جدا شد.",
          "en": "Henry VIII became head of the Church of England and broke from Rome."
        }
      },
      {
        "year": 1535,
        "title": {
          "fa": "یکی‌شدن ویلز با انگلستان",
          "en": "Wales is united with England"
        },
        "text": {
          "fa": "قوانین ۱۵۳۵ و ۱۵۴۲ ویلز را به انگلستان پیوند دادند.",
          "en": "The laws of 1535 and 1542 bound Wales to England."
        }
      },
      {
        "year": 1558,
        "title": {
          "fa": "الیزابت اول بر تخت می‌نشیند",
          "en": "Elizabeth I comes to the throne"
        },
        "text": {
          "fa": "آغاز عصر الیزابتی.",
          "en": "The start of the Elizabethan age."
        }
      },
      {
        "year": 1588,
        "title": {
          "fa": "شکست آرمادا",
          "en": "Defeat of the Armada"
        },
        "text": {
          "fa": "ناوگان بزرگ اسپانیا در حمله به انگلستان ناکام ماند.",
          "en": "Spain’s great fleet failed in its attack on England."
        }
      },
      {
        "year": 1600,
        "title": {
          "fa": "شرکت هند شرقی",
          "en": "The East India Company"
        },
        "text": {
          "fa": "شرکتی بازرگانی که بعدها بر بخش بزرگی از هند حاکم شد.",
          "en": "A trading company that later came to rule much of India."
        }
      },
      {
        "year": 1603,
        "title": {
          "fa": "اتحاد دو تاج",
          "en": "The union of the crowns"
        },
        "text": {
          "fa": "جیمز ششم اسکاتلند جیمز اول انگلستان هم شد.",
          "en": "James VI of Scotland also became James I of England."
        }
      },
      {
        "year": 1605,
        "title": {
          "fa": "طرح باروت",
          "en": "The Gunpowder Plot"
        },
        "text": {
          "fa": "در ۵ نوامبر توطئه برای منفجرکردن پارلمان کشف شد.",
          "en": "On 5 November a plot to blow up Parliament was discovered."
        }
      },
      {
        "year": 1607,
        "title": {
          "fa": "جیمزتاون",
          "en": "Jamestown"
        },
        "text": {
          "fa": "نخستین مستعمره‌ی دائمی انگلیسی در آمریکا بنیان گذاشته شد.",
          "en": "The first permanent English colony in America was founded."
        }
      },
      {
        "year": 1642,
        "yearText": {
          "fa": "۱۶۴۲ تا ۱۶۵۱",
          "en": "1642 to 1651"
        },
        "title": {
          "fa": "جنگ داخلی انگلستان",
          "en": "The English Civil War"
        },
        "text": {
          "fa": "جنگ میان هواداران شاه و پارلمان.",
          "en": "War between the supporters of the king and of Parliament."
        }
      },
      {
        "year": 1649,
        "title": {
          "fa": "اعدام چارلز اول",
          "en": "The execution of Charles I"
        },
        "text": {
          "fa": "در ۳۰ ژانویه شاه اعدام شد و انگلستان برای مدتی جمهوری شد.",
          "en": "On 30 January the king was executed and England became a republic for a time."
        }
      },
      {
        "year": 1660,
        "title": {
          "fa": "بازگشت پادشاهی",
          "en": "The Restoration"
        },
        "text": {
          "fa": "چارلز دوم بر تخت نشست.",
          "en": "Charles II took the throne."
        }
      },
      {
        "year": 1666,
        "title": {
          "fa": "آتش‌سوزی بزرگ لندن",
          "en": "The Great Fire of London"
        },
        "text": {
          "fa": "از ۲ تا ۶ سپتامبر بخش بزرگی از شهر سوخت.",
          "en": "From 2 to 6 September a large part of the city burned."
        }
      },
      {
        "year": 1688,
        "title": {
          "fa": "انقلاب شکوهمند",
          "en": "The Glorious Revolution"
        },
        "text": {
          "fa": "جیمز دوم برکنار شد و ویلیام اورنج به پادشاهی رسید؛ اعلامیه‌ی حقوق در ۱۶۸۹ تصویب شد.",
          "en": "James II was removed and William of Orange came to the throne; the Bill of Rights was passed in 1689."
        }
      },
      {
        "year": 1707,
        "title": {
          "fa": "قوانین اتحاد",
          "en": "The Acts of Union"
        },
        "text": {
          "fa": "در ۱ مه انگلستان و اسکاتلند در بریتانیای کبیر یکی شدند.",
          "en": "On 1 May England and Scotland were joined in Great Britain."
        }
      },
      {
        "year": 1746,
        "title": {
          "fa": "نبرد کالودن",
          "en": "The Battle of Culloden"
        },
        "text": {
          "fa": "قیام ژاکوبیت‌ها در ۱۶ آوریل شکست خورد.",
          "en": "The Jacobite rising was defeated on 16 April."
        }
      },
      {
        "year": 1776,
        "yearText": {
          "fa": "۱۷۷۶ تا ۱۷۸۳",
          "en": "1776 to 1783"
        },
        "title": {
          "fa": "از دست رفتن مستعمرات آمریکایی",
          "en": "The loss of the American colonies"
        },
        "text": {
          "fa": "آمریکا استقلال خود را اعلام کرد و بریتانیا آن را در ۱۷۸۳ پذیرفت.",
          "en": "America declared independence and Britain accepted it in 1783."
        }
      },
      {
        "year": 1801,
        "title": {
          "fa": "اتحاد با ایرلند",
          "en": "The union with Ireland"
        },
        "text": {
          "fa": "در ۱ ژانویه «پادشاهی متحد بریتانیای کبیر و ایرلند» شکل گرفت.",
          "en": "On 1 January the ‘United Kingdom of Great Britain and Ireland’ was formed."
        }
      },
      {
        "year": 1805,
        "title": {
          "fa": "نبرد ترافالگار",
          "en": "The Battle of Trafalgar"
        },
        "text": {
          "fa": "نلسون در ۲۱ اکتبر ناوگان فرانسه و اسپانیا را شکست داد و کشته شد.",
          "en": "On 21 October Nelson defeated the French and Spanish fleets and was killed."
        }
      },
      {
        "year": 1807,
        "title": {
          "fa": "لغو تجارت برده",
          "en": "Abolition of the slave trade"
        },
        "text": {
          "fa": "تجارت برده در امپراتوری بریتانیا ممنوع شد.",
          "en": "The slave trade was banned in the British Empire."
        }
      },
      {
        "year": 1815,
        "title": {
          "fa": "نبرد واترلو",
          "en": "The Battle of Waterloo"
        },
        "text": {
          "fa": "ولینگتون و متحدانش ناپلئون را شکست دادند.",
          "en": "Wellington and his allies defeated Napoleon."
        }
      },
      {
        "year": 1825,
        "title": {
          "fa": "راه‌آهن استاکتون-دارلینگتون",
          "en": "The Stockton and Darlington Railway"
        },
        "text": {
          "fa": "نخستین راه‌آهن عمومی با لوکوموتیو بخار.",
          "en": "The first public railway with steam locomotives."
        }
      },
      {
        "year": 1832,
        "title": {
          "fa": "قانون اصلاحات بزرگ",
          "en": "The Great Reform Act"
        },
        "text": {
          "fa": "حق رأی گسترش یافت و حوزه‌های فاسد برچیده شد.",
          "en": "The vote was widened and rotten boroughs were abolished."
        }
      },
      {
        "year": 1833,
        "title": {
          "fa": "قانون لغو برده‌داری",
          "en": "The Slavery Abolition Act"
        },
        "text": {
          "fa": "برده‌داری در امپراتوری لغو شد؛ به برده‌داران غرامت پرداخت شد.",
          "en": "Slavery was abolished in the empire; compensation was paid to slave owners."
        }
      },
      {
        "year": 1837,
        "title": {
          "fa": "ویکتوریا ملکه می‌شود",
          "en": "Victoria becomes queen"
        },
        "text": {
          "fa": "آغاز دوره‌ی ویکتوریایی که تا ۱۹۰۱ ادامه یافت.",
          "en": "The start of the Victorian era, which lasted until 1901."
        }
      },
      {
        "year": 1845,
        "yearText": {
          "fa": "۱۸۴۵ تا ۱۸۵۲",
          "en": "1845 to 1852"
        },
        "title": {
          "fa": "قحطی بزرگ ایرلند",
          "en": "The Great Irish Famine"
        },
        "text": {
          "fa": "حدود یک میلیون نفر مردند و شمار مشابهی مهاجرت کردند.",
          "en": "About a million people died and a similar number emigrated."
        }
      },
      {
        "year": 1851,
        "title": {
          "fa": "نمایشگاه بزرگ",
          "en": "The Great Exhibition"
        },
        "text": {
          "fa": "نمایشگاه صنعتی در کاخ بلورین لندن.",
          "en": "An industrial exhibition in the Crystal Palace in London."
        }
      },
      {
        "year": 1857,
        "title": {
          "fa": "قیام بزرگ هند",
          "en": "The Indian Rebellion"
        },
        "text": {
          "fa": "پس از سرکوب آن، از ۱۸۵۸ هند مستقیماً زیر تاج بریتانیا درآمد.",
          "en": "After it was put down, from 1858 India came directly under the British Crown."
        }
      },
      {
        "year": 1914,
        "yearText": {
          "fa": "۱۹۱۴ تا ۱۹۱۸",
          "en": "1914 to 1918"
        },
        "title": {
          "fa": "جنگ جهانی اول",
          "en": "The First World War"
        },
        "text": {
          "fa": "بریتانیا نزدیک به یک میلیون سرباز از بریتانیا و امپراتوری‌اش را از دست داد.",
          "en": "Britain lost close to a million soldiers from Britain and its empire."
        }
      },
      {
        "year": 1916,
        "title": {
          "fa": "قیام عید پاک",
          "en": "The Easter Rising"
        },
        "text": {
          "fa": "قیام ایرلندی‌ها در دوبلین سرکوب شد و بعدها جنبش استقلال را تقویت کرد.",
          "en": "The Irish rising in Dublin was put down and later strengthened the independence movement."
        }
      },
      {
        "year": 1918,
        "title": {
          "fa": "حق رأی زنان",
          "en": "Votes for women"
        },
        "text": {
          "fa": "زنان بالای ۳۰ سال حق رأی گرفتند؛ حق رأی برابر در ۱۹۲۸.",
          "en": "Women over 30 got the vote; equal voting rights followed in 1928."
        }
      },
      {
        "year": 1922,
        "title": {
          "fa": "دولت آزاد ایرلند",
          "en": "The Irish Free State"
        },
        "text": {
          "fa": "بخش بزرگی از ایرلند جدا شد و ایرلند شمالی در بریتانیا ماند.",
          "en": "The larger part of Ireland left and Northern Ireland stayed in the United Kingdom."
        }
      },
      {
        "year": 1939,
        "title": {
          "fa": "ورود به جنگ جهانی دوم",
          "en": "Entry into the Second World War"
        },
        "text": {
          "fa": "در ۳ سپتامبر بریتانیا به آلمان نازی اعلام جنگ کرد.",
          "en": "On 3 September Britain declared war on Nazi Germany."
        }
      },
      {
        "year": 1940,
        "title": {
          "fa": "چرچیل، دانکرک و نبرد بریتانیا",
          "en": "Churchill, Dunkirk and the Battle of Britain"
        },
        "text": {
          "fa": "چرچیل در ۱۰ مه نخست‌وزیر شد؛ دانکرک تخلیه شد و نیروی هوایی بریتانیا حمله‌ی هوایی آلمان را دفع کرد.",
          "en": "Churchill became prime minister on 10 May; Dunkirk was evacuated and the RAF repelled the German air attack."
        }
      },
      {
        "year": 1944,
        "title": {
          "fa": "فرود نرماندی",
          "en": "The Normandy landings"
        },
        "text": {
          "fa": "در ۶ ژوئن نیروهای متفقین، از جمله بریتانیا، در فرانسه پیاده شدند.",
          "en": "On 6 June Allied forces, including Britain, landed in France."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "پایان جنگ و دولت کارگری",
          "en": "End of the war and the Labour government"
        },
        "text": {
          "fa": "جنگ در اروپا در ۸ مه پایان یافت و کارگرها در انتخابات ژوییه پیروز شدند.",
          "en": "The war in Europe ended on 8 May and Labour won the July election."
        }
      },
      {
        "year": 1947,
        "title": {
          "fa": "استقلال هند و پاکستان",
          "en": "Independence of India and Pakistan"
        },
        "text": {
          "fa": "حکومت بریتانیا در شبه‌قاره در ۱۴ و ۱۵ اوت پایان یافت.",
          "en": "British rule in the subcontinent ended on 14 and 15 August."
        }
      },
      {
        "year": 1948,
        "title": {
          "fa": "آغاز کار خدمات بهداشت ملی",
          "en": "The National Health Service begins"
        },
        "text": {
          "fa": "در ۵ ژوئیه درمان همگانی رایگان آغاز شد.",
          "en": "On 5 July free universal healthcare began."
        }
      },
      {
        "year": 1952,
        "title": {
          "fa": "الیزابت دوم ملکه می‌شود",
          "en": "Elizabeth II becomes queen"
        },
        "text": {
          "fa": "در ۶ فوریه سلطنت او آغاز شد؛ تا ۲۰۲۲ ادامه یافت.",
          "en": "Her reign began on 6 February and lasted until 2022."
        }
      },
      {
        "year": 1956,
        "title": {
          "fa": "بحران سوئز",
          "en": "The Suez Crisis"
        },
        "text": {
          "fa": "حمله‌ی بریتانیا و فرانسه به مصر با فشار آمریکا و شوروی متوقف شد.",
          "en": "The British and French attack on Egypt was halted under American and Soviet pressure."
        }
      },
      {
        "year": 1973,
        "title": {
          "fa": "پیوستن به جامعه‌ی اقتصادی اروپا",
          "en": "Joining the European Economic Community"
        },
        "text": {
          "fa": "بریتانیا در ۱ ژانویه عضو شد.",
          "en": "Britain joined on 1 January."
        }
      },
      {
        "year": 1982,
        "title": {
          "fa": "جنگ فالکلند",
          "en": "The Falklands War"
        },
        "text": {
          "fa": "بریتانیا آرژانتین را در جنگ بر سر جزایر فالکلند شکست داد.",
          "en": "Britain defeated Argentina in the war over the Falkland Islands."
        }
      },
      {
        "year": 1998,
        "title": {
          "fa": "موافقت‌نامه‌ی جمعه‌ی خوب",
          "en": "The Good Friday Agreement"
        },
        "text": {
          "fa": "در ۱۰ آوریل توافقی به دوره‌ی خشونت در ایرلند شمالی پایان داد.",
          "en": "On 10 April an agreement ended the period of violence in Northern Ireland."
        }
      },
      {
        "year": 1999,
        "title": {
          "fa": "واگذاری اختیارات",
          "en": "Devolution"
        },
        "text": {
          "fa": "پارلمان اسکاتلند و مجمع ملی ویلز آغاز به کار کردند.",
          "en": "The Scottish Parliament and the National Assembly for Wales began work."
        }
      },
      {
        "year": 2016,
        "title": {
          "fa": "همه‌پرسی برگزیت",
          "en": "The Brexit referendum"
        },
        "text": {
          "fa": "در ۲۳ ژوئن حدود ۵۲ درصد به خروج از اتحادیه‌ی اروپا رأی دادند.",
          "en": "On 23 June about 52 percent voted to leave the European Union."
        }
      },
      {
        "year": 2020,
        "title": {
          "fa": "خروج از اتحادیه‌ی اروپا",
          "en": "Leaving the European Union"
        },
        "text": {
          "fa": "بریتانیا در ۳۱ ژانویه رسماً از اتحادیه‌ی اروپا خارج شد.",
          "en": "Britain formally left the European Union on 31 January."
        }
      },
      {
        "year": 2022,
        "title": {
          "fa": "مرگ الیزابت دوم",
          "en": "The death of Elizabeth II"
        },
        "text": {
          "fa": "در ۸ سپتامبر ملکه پس از ۷۰ سال سلطنت درگذشت و چارلز سوم پادشاه شد.",
          "en": "On 8 September the queen died after 70 years on the throne and Charles III became king."
        }
      }
    ]
  },
  "brazil": {
    "sections": [
      {
        "id": "indigenous",
        "title": {
          "fa": "مردمان بومی پیش از ۱۵۰۰",
          "en": "Indigenous peoples before 1500"
        },
        "text": {
          "fa": [
            "پیش از رسیدن اروپایی‌ها، سرزمین برزیل خانه‌ی احتمالاً چند میلیون نفر از مردمان بومی بود که صدها زبان گوناگون داشتند. در ساحل، مردمان توپی-گوارانی زندگی می‌کردند و در حوضه‌ی آمازون جوامعی با روستاهای بزرگ و کشاورزی پیشرفته وجود داشت.",
            "با ورود اروپایی‌ها، بیماری‌های تازه، جنگ و بردگی شمار بسیار زیادی از بومیان را از میان برد. امروز طبق سرشماری ۲۰۲۲ حدود ۱٫۷ میلیون نفر در برزیل خود را بومی می‌دانند."
          ],
          "en": [
            "Before the Europeans arrived, the land of Brazil was home to probably several million Indigenous people who spoke hundreds of different languages. On the coast lived the Tupi-Guarani peoples, and in the Amazon basin there were societies with large villages and advanced farming.",
            "With the arrival of the Europeans, new diseases, war and slavery wiped out a very large number of Indigenous people. Today, according to the 2022 census, about 1.7 million people in Brazil identify as Indigenous."
          ]
        }
      },
      {
        "id": "colony",
        "title": {
          "fa": "رسیدن پرتغالی‌ها و دوران استعمار",
          "en": "The Portuguese arrival and the colonial period"
        },
        "text": {
          "fa": [
            "پیمان تورسیلیاس در ۱۴۹۴ جهان تازه را میان اسپانیا و پرتغال تقسیم کرد و بخش شرقی، که بعدها برزیل شد، به پرتغال رسید. در ۲۲ آوریل ۱۵۰۰ پدرو آلوارس کابرال، که به‌سوی هند می‌رفت، به ساحل برزیل رسید و آن را از آن پرتغال اعلام کرد. نام برزیل از «پائو-برازیل»، چوب سرخ‌رنگی که صادر می‌شد، آمده است.",
            "پرتغال از ۱۵۳۴ سرزمین را به «کاپیتانی‌ها» تقسیم کرد و در ۱۵۴۹ نخستین فرماندار کل را با پایتختی در سالوادور فرستاد. در شمال شرق مزارع بزرگ نیشکر پدید آمد که ابتدا با بومیان و سپس با آفریقایی‌های برده‌شده کار می‌کرد. نزدیک به پنج میلیون آفریقایی به برزیل برده شدند، بیش از هر کشور دیگر آمریکا."
          ],
          "en": [
            "The Treaty of Tordesillas in 1494 divided the new world between Spain and Portugal, and the eastern part, which later became Brazil, went to Portugal. On 22 April 1500 Pedro Álvares Cabral, on his way to India, reached the coast of Brazil and claimed it for Portugal. The name Brazil comes from ‘pau-brasil’, a red wood that was exported.",
            "From 1534 Portugal divided the land into ‘captaincies’ and in 1549 sent the first governor-general, with Salvador as capital. In the north-east large sugar plantations appeared, worked first by Indigenous people and then by enslaved Africans. Nearly five million Africans were taken to Brazil, more than to any other country in the Americas."
          ]
        }
      },
      {
        "id": "expansion",
        "title": {
          "fa": "گسترش، مقاومت و طلا",
          "en": "Expansion, resistance and gold"
        },
        "text": {
          "fa": [
            "از قرن هفدهم، گروه‌های مهاجم موسوم به «بانده‌یرانت‌ها» به درون سرزمین پیش رفتند و مرزهای مستعمره را بسیار فراتر از خط تورسیلیاس بردند؛ پیمان مادرید (۱۷۵۰) بخش بزرگی از این گسترش را به رسمیت شناخت. هلندی‌ها از ۱۶۳۰ تا ۱۶۵۴ بخشی از شمال شرق را در اختیار داشتند.",
            "بردگان فراری شهرک‌هایی به نام «کیلومبو» ساختند. بزرگ‌ترین آن‌ها پالمارس بود که بیشتر قرن هفدهم در برابر نیروهای استعماری ایستاد. زومبی، رهبر آن، در ۱۶۹۵ کشته شد. در دهه‌ی ۱۶۹۰ طلا در ایالت میناس جرایس پیدا شد و هجوم طلاجویان آغاز شد. پایتخت در ۱۷۶۳ از سالوادور به ریو دو ژانیرو منتقل شد."
          ],
          "en": [
            "From the seventeenth century raiding groups called the ‘bandeirantes’ pushed into the interior and carried the colony’s borders far beyond the Tordesillas line; the Treaty of Madrid (1750) recognized much of this expansion. The Dutch held part of the north-east from 1630 to 1654.",
            "Escaped enslaved people built settlements called ‘quilombos’. The largest was Palmares, which resisted colonial forces for most of the seventeenth century. Its leader Zumbi was killed in 1695. In the 1690s gold was found in the state of Minas Gerais and a gold rush began. The capital was moved from Salvador to Rio de Janeiro in 1763."
          ]
        }
      },
      {
        "id": "independence",
        "title": {
          "fa": "استقلال",
          "en": "Independence"
        },
        "text": {
          "fa": [
            "در ۱۸۰۷ سپاه ناپلئون به پرتغال نزدیک شد و خاندان سلطنتی پرتغال با هزاران درباری به برزیل گریخت و در ۱۸۰۸ به ریو رسید. ریو پایتخت امپراتوری پرتغال شد و در ۱۸۱۵ برزیل به‌عنوان پادشاهی در کنار پرتغال شناخته شد؛ رویدادی بی‌همتا که یک مستعمره پایتخت یک امپراتوری شد.",
            "در ۱۸۲۱ پادشاه ژائو ششم به لیسبون بازگشت و مجلس پرتغال خواست برزیل را به وضع استعماری برگرداند. شاهزاده پدرو، پسر پادشاه که در برزیل ماند، در ۹ ژانویه‌ی ۱۸۲۲ اعلام کرد می‌ماند. در ۷ سپتامبر ۱۸۲۲ کنار رود ایپیرانگا استقلال را اعلام کرد و در اکتبر امپراتور برزیل شد. پرتغال در ۱۸۲۵ استقلال را به رسمیت شناخت."
          ],
          "en": [
            "In 1807 Napoleon’s army approached Portugal and the Portuguese royal family fled to Brazil with thousands of courtiers, arriving in Rio in 1808. Rio became the capital of the Portuguese empire and in 1815 Brazil was recognized as a kingdom alongside Portugal, an unusual case of a colony becoming the capital of an empire.",
            "In 1821 King João VI returned to Lisbon and the Portuguese parliament wanted to return Brazil to colonial status. Prince Pedro, the king’s son who stayed in Brazil, announced on 9 January 1822 that he would remain. On 7 September 1822 he declared independence beside the Ipiranga River and in October became emperor of Brazil. Portugal recognized independence in 1825."
          ]
        }
      },
      {
        "id": "empire",
        "title": {
          "fa": "امپراتوری و پایان برده‌داری",
          "en": "The empire and the end of slavery"
        },
        "text": {
          "fa": [
            "پدرو اول در ۱۸۳۱ به نفع پسر پنج‌ساله‌اش کناره‌گیری کرد. پدرو دوم از ۱۸۴۰، در چهارده‌سالگی، حکومت را به دست گرفت و تا ۱۸۸۹ امپراتور بود؛ دوره‌ای نسبتاً باثبات که اقتصاد آن بر قهوه استوار بود. جنگ پاراگوئه (۱۸۶۴ تا ۱۸۷۰) را برزیل، آرژانتین و اروگوئه علیه پاراگوئه پیش بردند.",
            "تجارت برده از آفریقا در ۱۸۵۰ ممنوع شد و گام‌به‌گام قوانین دیگری آمد. سرانجام در ۱۳ مه ۱۸۸۸ «قانون زرین» به امضای شاهزاده ایزابل، دختر امپراتور، برده‌داری را به‌طور کامل لغو کرد؛ برزیل آخرین کشور قاره‌ی آمریکا بود که این کار را کرد."
          ],
          "en": [
            "Pedro I abdicated in 1831 in favour of his five-year-old son. Pedro II took government into his own hands in 1840, at the age of fourteen, and was emperor until 1889, a relatively stable period whose economy rested on coffee. The Paraguayan War (1864 to 1870) was fought by Brazil, Argentina and Uruguay against Paraguay.",
            "The slave trade from Africa was banned in 1850 and further laws followed step by step. Finally, on 13 May 1888, the ‘Golden Law’, signed by Princess Isabel, the emperor’s daughter, abolished slavery completely; Brazil was the last country in the Americas to do so."
          ]
        }
      },
      {
        "id": "republic",
        "title": {
          "fa": "جمهوری و دوران وارگاس",
          "en": "The republic and the Vargas era"
        },
        "text": {
          "fa": [
            "در ۱۵ نوامبر ۱۸۸۹ کودتای نظامی به رهبری مارشال دئودورو دا فونسکا پادشاهی را برچید و جمهوری را اعلام کرد؛ پدرو دوم به اروپا تبعید شد. «جمهوری قدیم» را بیشتر قهوه‌کاران ایالت‌های سائوپائولو و میناس جرایس اداره می‌کردند.",
            "در ۱۹۳۰، پس از یک انقلاب، ژتولیو وارگاس به قدرت رسید و تا ۱۹۴۵ بر برزیل حکم راند، از جمله با دیکتاتوری «دولت نو» (۱۹۳۷ تا ۱۹۴۵). او قوانین کار را تصویب کرد و صنعتی‌شدن را پیش برد. برزیل در جنگ جهانی دوم در کنار متفقین بود و حدود ۲۵ هزار سرباز به ایتالیا فرستاد. وارگاس در ۱۹۴۵ برکنار شد، در ۱۹۵۰ دوباره انتخاب شد و در ۱۹۵۴ در مقام ریاست‌جمهوری درگذشت."
          ],
          "en": [
            "On 15 November 1889 a military coup led by Marshal Deodoro da Fonseca abolished the monarchy and proclaimed a republic; Pedro II was exiled to Europe. The ‘Old Republic’ was run mainly by the coffee growers of the states of São Paulo and Minas Gerais.",
            "In 1930 Getúlio Vargas came to power and ruled Brazil until 1945, including through the ‘New State’ dictatorship (1937 to 1945). He passed labour laws and pushed industrialization. Brazil was on the Allied side in the Second World War and sent about 25,000 soldiers to Italy. Vargas was removed in 1945, was elected again in 1950 and died in office in 1954."
          ]
        }
      },
      {
        "id": "dictatorship",
        "title": {
          "fa": "برازیلیا و رژیم نظامی",
          "en": "Brasília and the military regime"
        },
        "text": {
          "fa": [
            "ژوشلینو کوبیچک، رئیس‌جمهور از ۱۹۵۶، وعده داد «پنجاه سال پیشرفت در پنج سال» و پایتخت تازه‌ای در دل کشور ساخت. برازیلیا با طرح شهرسازی لوسیو کوستا و ساختمان‌های اسکار نیمایر در ۲۱ آوریل ۱۹۶۰ افتتاح شد.",
            "در ۳۱ مارس و ۱ آوریل ۱۹۶۴ کودتای نظامی ژائو گولارت، رئیس‌جمهور را برکنار کرد و ارتش تا ۱۹۸۵ حکومت کرد. «قانون نهادی شماره‌ی ۵» در دسامبر ۱۹۶۸ سانسور و سرکوب را شدت داد و شکنجه و ناپدیدشدن مخالفان رخ داد. در آن سال‌ها «معجزه‌ی اقتصادی» رشد زیادی آورد، اما نابرابری و بدهی خارجی هم بیشتر شد. جنبش «انتخابات مستقیم، حالا» در ۱۹۸۳ و ۱۹۸۴ میلیون‌ها نفر را به خیابان آورد و در ۱۹۸۵ حکومت غیرنظامی بازگشت."
          ],
          "en": [
            "Juscelino Kubitschek, president from 1956, promised ‘fifty years of progress in five’ and built a new capital in the heart of the country. Brasília, with Lúcio Costa’s urban plan and Oscar Niemeyer’s buildings, was inaugurated on 21 April 1960.",
            "On 31 March and 1 April 1964 a military coup removed President João Goulart and the army ruled until 1985. ‘Institutional Act No. 5’ in December 1968 intensified censorship and repression, and opponents were tortured and disappeared. In those years the ‘economic miracle’ brought strong growth, but inequality and foreign debt also rose. The ‘Direct Elections Now’ movement brought millions into the streets in 1983 and 1984, and civilian rule returned in 1985."
          ]
        }
      },
      {
        "id": "democracy",
        "title": {
          "fa": "دموکراسی و برزیل امروز",
          "en": "Democracy and Brazil today"
        },
        "text": {
          "fa": [
            "قانون اساسی جدید در ۵ اکتبر ۱۹۸۸ تصویب شد و در ۱۹۸۹ نخستین انتخابات مستقیم ریاست‌جمهوری پس از ۱۹۶۰ برگزار شد. «طرح رئال» در ۱۹۹۴ ابرتورم را مهار کرد. برزیل میزبان جام جهانی فوتبال ۲۰۱۴ و المپیک ریو ۲۰۱۶، نخستین المپیک در آمریکای جنوبی، بود.",
            "امروز برزیل جمهوری فدرال ریاست‌جمهوری با ۲۶ ایالت و یک ناحیه‌ی فدرال است. این کشور بزرگ‌ترین اقتصاد آمریکای لاتین را دارد و حدود ۶۰ درصد جنگل آمازون در قلمرو آن است؛ جنگلی که حفاظت از آن مسئله‌ای جهانی شده است."
          ],
          "en": [
            "The new constitution was approved on 5 October 1988 and in 1989 the first direct presidential election since 1960 was held. The ‘Real Plan’ in 1994 brought hyperinflation under control. Brazil hosted the 2014 FIFA World Cup and the 2016 Rio Olympics, the first Olympics in South America.",
            "Today Brazil is a federal presidential republic with 26 states and a federal district. It has the largest economy in Latin America and about 60 percent of the Amazon rainforest lies within it, a forest whose protection has become a global issue."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": 1494,
        "title": {
          "fa": "پیمان تورسیلیاس",
          "en": "The Treaty of Tordesillas"
        },
        "text": {
          "fa": "اسپانیا و پرتغال جهان تازه را میان خود تقسیم کردند؛ بخش شرقی، که بعدها برزیل شد، به پرتغال رسید.",
          "en": "Spain and Portugal divided the new world between them; the eastern part, which later became Brazil, went to Portugal."
        }
      },
      {
        "year": 1500,
        "title": {
          "fa": "رسیدن کابرال",
          "en": "Cabral’s arrival"
        },
        "text": {
          "fa": "در ۲۲ آوریل پدرو آلوارس کابرال به ساحل برزیل رسید و آن را از آن پرتغال اعلام کرد.",
          "en": "On 22 April Pedro Álvares Cabral reached the coast of Brazil and claimed it for Portugal."
        }
      },
      {
        "year": 1534,
        "title": {
          "fa": "تقسیم به کاپیتانی‌ها",
          "en": "Division into captaincies"
        },
        "text": {
          "fa": "پرتغال سرزمین را به قلمروهای موروثی تقسیم کرد تا مستعمره‌نشین بفرستد.",
          "en": "Portugal divided the land into hereditary territories in order to attract settlers."
        }
      },
      {
        "year": 1549,
        "title": {
          "fa": "فرماندار کل و سالوادور",
          "en": "The governor-general and Salvador"
        },
        "text": {
          "fa": "نخستین فرماندار کل رسید و سالوادور پایتخت مستعمره شد.",
          "en": "The first governor-general arrived and Salvador became the capital of the colony."
        }
      },
      {
        "year": 1565,
        "title": {
          "fa": "بنیان ریو دو ژانیرو",
          "en": "Founding of Rio de Janeiro"
        },
        "text": {
          "fa": "شهر در اول مارس بنا شد.",
          "en": "The city was founded on 1 March."
        }
      },
      {
        "year": 1630,
        "yearText": {
          "fa": "۱۶۳۰ تا ۱۶۵۴",
          "en": "1630 to 1654"
        },
        "title": {
          "fa": "تصرف هلندی‌ها در شمال شرق",
          "en": "Dutch control in the north-east"
        },
        "text": {
          "fa": "هلندی‌ها بخشی از پرنامبوکو را در دست داشتند تا اینکه رانده شدند.",
          "en": "The Dutch held part of Pernambuco until they were driven out."
        }
      },
      {
        "year": 1693,
        "title": {
          "fa": "کشف طلا در میناس جرایس",
          "en": "Gold is found in Minas Gerais"
        },
        "text": {
          "fa": "در پایان قرن هفدهم هجوم طلاجویان به این منطقه آغاز شد.",
          "en": "At the end of the seventeenth century a gold rush to the region began."
        }
      },
      {
        "year": 1695,
        "title": {
          "fa": "کشته‌شدن زومبی",
          "en": "The death of Zumbi"
        },
        "text": {
          "fa": "در ۲۰ نوامبر زومبی، رهبر پالمارس، کشته شد. این روز را روز آگاهی سیاه‌پوستان می‌نامند.",
          "en": "On 20 November Zumbi, the leader of Palmares, was killed. The day is marked as Black Awareness Day."
        }
      },
      {
        "year": 1750,
        "title": {
          "fa": "پیمان مادرید",
          "en": "The Treaty of Madrid"
        },
        "text": {
          "fa": "اسپانیا و پرتغال مرزهای جدید را، که بسیار فراتر از خط تورسیلیاس بود، پذیرفتند.",
          "en": "Spain and Portugal accepted new borders far beyond the Tordesillas line."
        }
      },
      {
        "year": 1763,
        "title": {
          "fa": "انتقال پایتخت به ریو",
          "en": "The capital moves to Rio"
        },
        "text": {
          "fa": "پایتخت مستعمره از سالوادور به ریو دو ژانیرو منتقل شد.",
          "en": "The capital of the colony moved from Salvador to Rio de Janeiro."
        }
      },
      {
        "year": 1789,
        "title": {
          "fa": "توطئه‌ی میناس (اینفیدنسیا)",
          "en": "The Minas conspiracy (Inconfidência)"
        },
        "text": {
          "fa": "گروهی در میناس جرایس علیه حکومت پرتغال توطئه کردند؛ تیرادنتس در ۱۷۹۲ اعدام شد.",
          "en": "A group in Minas Gerais plotted against Portuguese rule; Tiradentes was executed in 1792."
        }
      },
      {
        "year": 1808,
        "title": {
          "fa": "ورود دربار پرتغال به ریو",
          "en": "The Portuguese court arrives in Rio"
        },
        "text": {
          "fa": "خاندان سلطنتی از ناپلئون گریخت و ریو پایتخت امپراتوری پرتغال شد.",
          "en": "The royal family fled Napoleon and Rio became the capital of the Portuguese empire."
        }
      },
      {
        "year": 1815,
        "title": {
          "fa": "پادشاهی متحد",
          "en": "The United Kingdom"
        },
        "text": {
          "fa": "برزیل به‌عنوان پادشاهی در کنار پرتغال و آلگارو شناخته شد.",
          "en": "Brazil was recognized as a kingdom alongside Portugal and the Algarves."
        }
      },
      {
        "year": 1822,
        "title": {
          "fa": "اعلام استقلال",
          "en": "Declaration of independence"
        },
        "text": {
          "fa": "در ۷ سپتامبر شاهزاده پدرو کنار رود ایپیرانگا استقلال را اعلام کرد.",
          "en": "On 7 September Prince Pedro declared independence beside the Ipiranga River."
        }
      },
      {
        "year": 1825,
        "title": {
          "fa": "به رسمیت شناختن استقلال",
          "en": "Recognition of independence"
        },
        "text": {
          "fa": "پرتغال استقلال برزیل را پذیرفت.",
          "en": "Portugal accepted Brazil’s independence."
        }
      },
      {
        "year": 1831,
        "title": {
          "fa": "کناره‌گیری پدرو اول",
          "en": "Pedro I abdicates"
        },
        "text": {
          "fa": "پدرو اول به نفع پسر پنج‌ساله‌اش کنار رفت.",
          "en": "Pedro I stepped down in favour of his five-year-old son."
        }
      },
      {
        "year": 1840,
        "title": {
          "fa": "آغاز حکومت شخصی پدرو دوم",
          "en": "Pedro II begins to rule"
        },
        "text": {
          "fa": "پدرو دوم در چهارده‌سالگی بالغ اعلام شد و حکومت را به دست گرفت.",
          "en": "Pedro II was declared of age at fourteen and took over government."
        }
      },
      {
        "year": 1850,
        "title": {
          "fa": "ممنوعیت تجارت برده",
          "en": "The slave trade is banned"
        },
        "text": {
          "fa": "ورود بردگان جدید از آفریقا قانوناً ممنوع شد.",
          "en": "The import of new enslaved people from Africa was banned by law."
        }
      },
      {
        "year": 1864,
        "yearText": {
          "fa": "۱۸۶۴ تا ۱۸۷۰",
          "en": "1864 to 1870"
        },
        "title": {
          "fa": "جنگ پاراگوئه",
          "en": "The Paraguayan War"
        },
        "text": {
          "fa": "برزیل، آرژانتین و اروگوئه علیه پاراگوئه جنگیدند.",
          "en": "Brazil, Argentina and Uruguay fought against Paraguay."
        }
      },
      {
        "year": 1888,
        "title": {
          "fa": "قانون زرین",
          "en": "The Golden Law"
        },
        "text": {
          "fa": "در ۱۳ مه برده‌داری به‌طور کامل لغو شد.",
          "en": "On 13 May slavery was abolished completely."
        }
      },
      {
        "year": 1889,
        "title": {
          "fa": "اعلام جمهوری",
          "en": "Proclamation of the republic"
        },
        "text": {
          "fa": "در ۱۵ نوامبر کودتای نظامی پادشاهی را برچید و پدرو دوم تبعید شد.",
          "en": "On 15 November a military coup abolished the monarchy and Pedro II was exiled."
        }
      },
      {
        "year": 1930,
        "title": {
          "fa": "وارگاس به قدرت می‌رسد",
          "en": "Vargas takes power"
        },
        "text": {
          "fa": "ژتولیو وارگاس پس از انقلاب ۱۹۳۰ رئیس دولت شد.",
          "en": "Getúlio Vargas became head of government after the revolution of 1930."
        }
      },
      {
        "year": 1937,
        "title": {
          "fa": "دولت نو",
          "en": "The New State"
        },
        "text": {
          "fa": "وارگاس دیکتاتوری «دولت نو» را برقرار کرد که تا ۱۹۴۵ ادامه یافت.",
          "en": "Vargas set up the ‘New State’ dictatorship, which lasted until 1945."
        }
      },
      {
        "year": 1944,
        "title": {
          "fa": "سربازان برزیلی در ایتالیا",
          "en": "Brazilian soldiers in Italy"
        },
        "text": {
          "fa": "نیروی اعزامی برزیل در جنگ جهانی دوم در کنار متفقین در ایتالیا جنگید.",
          "en": "The Brazilian Expeditionary Force fought alongside the Allies in Italy in the Second World War."
        }
      },
      {
        "year": 1954,
        "title": {
          "fa": "مرگ وارگاس",
          "en": "The death of Vargas"
        },
        "text": {
          "fa": "وارگاس در اوت در مقام ریاست‌جمهوری درگذشت.",
          "en": "Vargas died in office in August."
        }
      },
      {
        "year": 1960,
        "title": {
          "fa": "افتتاح برازیلیا",
          "en": "Inauguration of Brasília"
        },
        "text": {
          "fa": "در ۲۱ آوریل پایتخت از ریو به شهر تازه‌ساز برازیلیا منتقل شد.",
          "en": "On 21 April the capital moved from Rio to the newly built Brasília."
        }
      },
      {
        "year": 1964,
        "title": {
          "fa": "کودتای نظامی",
          "en": "The military coup"
        },
        "text": {
          "fa": "ارتش رئیس‌جمهور گولارت را برکنار کرد و تا ۱۹۸۵ حکومت کرد.",
          "en": "The army removed President Goulart and ruled until 1985."
        }
      },
      {
        "year": 1968,
        "title": {
          "fa": "قانون نهادی شماره‌ی ۵",
          "en": "Institutional Act No. 5"
        },
        "text": {
          "fa": "در دسامبر سانسور و سرکوب سیاسی شدت گرفت.",
          "en": "In December censorship and political repression intensified."
        }
      },
      {
        "year": 1985,
        "title": {
          "fa": "بازگشت حکومت غیرنظامی",
          "en": "Return of civilian rule"
        },
        "text": {
          "fa": "پس از ۲۱ سال، حکومت نظامی پایان یافت.",
          "en": "After 21 years the military regime ended."
        }
      },
      {
        "year": 1988,
        "title": {
          "fa": "قانون اساسی کنونی",
          "en": "The present constitution"
        },
        "text": {
          "fa": "قانون اساسی دموکراتیک جدید در ۵ اکتبر تصویب شد.",
          "en": "The new democratic constitution was approved on 5 October."
        }
      },
      {
        "year": 1994,
        "title": {
          "fa": "طرح رئال",
          "en": "The Real Plan"
        },
        "text": {
          "fa": "برنامه‌ی اقتصادی جدید ابرتورم را مهار کرد.",
          "en": "A new economic programme brought hyperinflation under control."
        }
      },
      {
        "year": 2016,
        "title": {
          "fa": "المپیک ریو",
          "en": "The Rio Olympics"
        },
        "text": {
          "fa": "نخستین بازی‌های المپیک در آمریکای جنوبی در ریو دو ژانیرو برگزار شد.",
          "en": "The first Olympic Games in South America were held in Rio de Janeiro."
        }
      }
    ]
  },
  "china": {
    "sections": [
      {
        "id": "origins",
        "title": {
          "fa": "سرچشمه‌ها: شیا، شانگ و ژو",
          "en": "Origins: Xia, Shang and Zhou"
        },
        "text": {
          "fa": [
            "در دوره‌ی نوسنگی، فرهنگ‌هایی مانند یانگشائو و لونگشان در حوضه‌ی رود زرد کشاورزی را پایه گذاشتند. روایت سنتی چین از سلسله‌ی شیا (حدود ۲۰۷۰ پیش از میلاد) آغاز می‌شود، اما شواهد باستان‌شناختی آن هنوز محل بحث است.",
            "سلسله‌ی شانگ (حدود ۱۶۰۰ تا ۱۰۴۶ پیش از میلاد) نخستین سلسله‌ای است که با نوشته‌ها تأیید شده است: استخوان‌های پیشگویی با خط باستانی و ظرف‌های برنزی از آن دوره مانده‌اند. سلسله‌ی ژو در حدود ۱۰۴۶ پیش از میلاد شانگ را شکست داد و ایده‌ی «مأموریت آسمان» را پیش آورد: فرمانروا تا وقتی عادل باشد حق حکومت دارد و اگر ستمگر شود آسمان این حق را از او می‌گیرد."
          ],
          "en": [
            "In the Neolithic period cultures such as Yangshao and Longshan in the Yellow River basin laid the foundations of farming. The traditional Chinese account begins with the Xia dynasty (about 2070 BCE), but the archaeological evidence for it is still debated.",
            "The Shang dynasty (about 1600 to 1046 BCE) is the first dynasty confirmed by writing: oracle bones with ancient script and bronze vessels survive from that period. The Zhou dynasty defeated the Shang around 1046 BCE and put forward the idea of the ‘Mandate of Heaven’: a ruler has the right to rule as long as he is just, and if he becomes a tyrant Heaven takes this right from him."
          ]
        }
      },
      {
        "id": "philosophers",
        "title": {
          "fa": "دوره‌ی نبردهای دولت‌ها و فیلسوفان",
          "en": "The age of warring states and philosophers"
        },
        "text": {
          "fa": [
            "قدرت ژو به‌تدریج کاهش یافت و کشور به چند دولت رقیب تقسیم شد. دوره‌ی بهار و پاییز و پس از آن دوره‌ی دولت‌های متخاصم (۴۷۵ تا ۲۲۱ پیش از میلاد) پر از جنگ بود.",
            "همین دوره دوران «صد مکتب فکری» هم بود. کنفوسیوس (۵۵۱ تا ۴۷۹ پیش از میلاد) بر اخلاق، آموزش و احترام به خانواده تأکید کرد. لائوزی و مکتب دائو به هماهنگی با طبیعت اندیشیدند، موزی از مهر همگانی گفت و قانون‌گرایان مانند هان فی‌زی بر قوانین سخت و دولت نیرومند اصرار داشتند. این اندیشه‌ها فرهنگ چین را تا امروز شکل داده‌اند."
          ],
          "en": [
            "Zhou power gradually declined and the country split into several rival states. The Spring and Autumn period and then the Warring States period (475 to 221 BCE) were full of war.",
            "This was also the age of the ‘Hundred Schools of Thought’. Confucius (551 to 479 BCE) stressed ethics, education and respect for the family. Laozi and the Daoist school thought about harmony with nature, Mozi spoke of universal love, and the Legalists such as Han Feizi insisted on strict laws and a strong state. These ideas have shaped Chinese culture to this day."
          ]
        }
      },
      {
        "id": "qin-han",
        "title": {
          "fa": "کین و هان: نخستین امپراتوری‌ها",
          "en": "Qin and Han: the first empires"
        },
        "text": {
          "fa": [
            "در ۲۲۱ پیش از میلاد پادشاه کین، که از آن پس خود را «شی هوانگ‌دی» (نخستین امپراتور) نامید، همه‌ی دولت‌ها را یکی کرد. او خط، واحد وزن و اندازه و پول را یکسان کرد و دیوارهای مرزی را به هم پیوست؛ پیش‌درآمد دیوار بزرگ چین. آرامگاه او در نزدیکی شی‌آن با هزاران سرباز سفالین مشهور است. حکومت سخت کین پس از مرگ او (۲۱۰ پیش از میلاد) دوام نیاورد و در ۲۰۶ پیش از میلاد فروپاشید.",
            "سلسله‌ی هان (۲۰۲ پیش از میلاد تا ۲۲۰ میلادی) حدود چهار قرن بر چین حکم راند. در زمان امپراتور وو، آیین کنفوسیوس پایه‌ی آموزش دولتی شد و جاده‌ی ابریشم راه‌های چین را به آسیای مرکزی و غرب وصل کرد. سیما چیان «یادداشت‌های مورخ بزرگ» را نوشت و کای لون در ۱۰۵ میلادی روش بهبودیافته‌ی ساخت کاغذ را به دربار ارائه داد."
          ],
          "en": [
            "In 221 BCE the king of Qin, who from then on called himself ‘Qin Shi Huang’ (the First Emperor), united all the states. He standardized the script, weights and measures and money, and joined border walls together, a forerunner of the Great Wall. His tomb near Xi’an is famous for its thousands of terracotta soldiers. Qin’s harsh rule did not outlast his death (210 BCE) and collapsed in 206 BCE.",
            "The Han dynasty (202 BCE to 220 CE) ruled China for about four centuries. Under Emperor Wu, Confucianism became the basis of state education, and the Silk Road linked China’s routes with Central Asia and the West. Sima Qian wrote the Records of the Grand Historian, and in 105 CE Cai Lun presented an improved method of making paper to the court."
          ]
        }
      },
      {
        "id": "division-tang",
        "title": {
          "fa": "تفرقه، سویی و عصر طلایی تانگ",
          "en": "Division, the Sui and the Golden Age of the Tang"
        },
        "text": {
          "fa": [
            "پس از هان، چین به دوره‌ی سه پادشاهی (۲۲۰ تا ۲۸۰) و قرن‌ها تفرقه و جنگ افتاد. آیین بودا در این دوران در چین ریشه دواند. سلسله‌ی سوئی (۵۸۱ تا ۶۱۸) در ۵۸۹ چین را دوباره یکی کرد و کانال بزرگ را ساخت که شمال و جنوب را وصل می‌کرد.",
            "سلسله‌ی تانگ (۶۱۸ تا ۹۰۷) را عصر طلایی چین می‌دانند. پایتخت آن چانگ‌آن (شی‌آن امروز) از بزرگ‌ترین شهرهای جهان بود و شعر به اوج رسید؛ لی‌بای و دوفو از شاعران این دوره‌اند. ووجه‌تیان تنها زنی بود که خود به‌عنوان امپراتور بر چین حکم راند (۶۹۰ تا ۷۰۵). شورش آن لوشان (۷۵۵ تا ۷۶۳) تانگ را سخت تضعیف کرد. چاپ با قالب چوبی هم در این دوران رواج یافت و قدیمی‌ترین کتاب چاپی با تاریخ مشخص («سوترای الماس») به ۸۶۸ برمی‌گردد."
          ],
          "en": [
            "After the Han, China fell into the Three Kingdoms period (220 to 280) and centuries of division and war. Buddhism took root in China in this age. The Sui dynasty (581 to 618) reunified China in 589 and built the Grand Canal, which linked north and south.",
            "The Tang dynasty (618 to 907) is regarded as China’s golden age. Its capital Chang’an (today’s Xi’an) was one of the largest cities in the world and poetry reached its peak; Li Bai and Du Fu are among the poets of this period. Wu Zetian was the only woman who ruled China as emperor in her own right (690 to 705). The An Lushan rebellion (755 to 763) badly weakened the Tang. Woodblock printing also spread in this period, and the oldest dated printed book (the Diamond Sutra) goes back to 868."
          ]
        }
      },
      {
        "id": "song-yuan",
        "title": {
          "fa": "سونگ و یوآن",
          "en": "The Song and the Yuan"
        },
        "text": {
          "fa": [
            "سلسله‌ی سونگ (۹۶۰ تا ۱۲۷۹) دوره‌ی شکوفایی اقتصاد، شهرها و فناوری بود. پول کاغذی رایج شد، از قطب‌نما برای دریانوردی استفاده شد، باروت پیشرفت کرد و حدود ۱۰۴۰ بی شنگ حروف متحرک سفالین را ابداع کرد. در ۱۱۲۷ قبایل ژورچن شمال چین را گرفتند و سونگ جنوبی در جنوب باقی ماند.",
            "چنگیزخان در ۱۲۰۶ مغول‌ها را یکی کرد. نوه‌اش قوبیلای خان در ۱۲۷۱ سلسله‌ی یوآن را بنیان گذاشت و در ۱۲۷۹ سونگ جنوبی را برانداخت؛ برای نخستین بار همه‌ی چین زیر فرمان بیگانه بود. پایتخت یوآن در پکن بود و تجارت و ارتباط با غرب رونق گرفت."
          ],
          "en": [
            "The Song dynasty (960 to 1279) was a period of flourishing economy, cities and technology. Paper money came into use, the compass was used for navigation, gunpowder advanced, and around 1040 Bi Sheng invented movable type in clay. In 1127 the Jurchen took northern China and the Southern Song remained in the south.",
            "Genghis Khan united the Mongols in 1206. His grandson Kublai Khan founded the Yuan dynasty in 1271 and overthrew the Southern Song in 1279, so for the first time all of China was under foreign rule. The Yuan capital was in Beijing and trade and contact with the West flourished."
          ]
        }
      },
      {
        "id": "ming",
        "title": {
          "fa": "سلسله‌ی مینگ",
          "en": "The Ming dynasty"
        },
        "text": {
          "fa": [
            "ژو یوانجانگ، که از دهقانان برخاست، مغول‌ها را راند و در ۱۳۶۸ سلسله‌ی مینگ را بنیان گذاشت. امپراتور یونگله پایتخت را به پکن برد (۱۴۲۱) و شهر ممنوعه (ساخته‌شده ۱۴۰۶ تا ۱۴۲۰) را بنا کرد.",
            "ژنگ هه، دریاسالار مسلمان دربار، میان ۱۴۰۵ و ۱۴۳۳ هفت سفر دریایی با ناوگانی بزرگ به آسیای جنوب شرقی، هند، عربستان و شرق آفریقا انجام داد. بخش‌های بزرگی از دیوار بزرگ چین در این دوره بازسازی شد. حکومت مینگ در ۱۶۴۴، پس از شورش دهقانی و گرفتن پکن، فرو ریخت."
          ],
          "en": [
            "Zhu Yuanzhang, who rose from the peasantry, drove out the Mongols and founded the Ming dynasty in 1368. The Yongle Emperor moved the capital to Beijing (1421) and built the Forbidden City (constructed 1406 to 1420).",
            "Zheng He, the court’s Muslim admiral, made seven sea voyages between 1405 and 1433 with a great fleet to South-East Asia, India, Arabia and East Africa. Large sections of the Great Wall were rebuilt in this period. Ming rule collapsed in 1644, after a peasant rebellion and the taking of Beijing."
          ]
        }
      },
      {
        "id": "qing",
        "title": {
          "fa": "سلسله‌ی چینگ و جنگ‌های تریاک",
          "en": "The Qing dynasty and the Opium Wars"
        },
        "text": {
          "fa": [
            "مانچوها در ۱۶۴۴ پکن را گرفتند و سلسله‌ی چینگ (۱۶۴۴ تا ۱۹۱۲) را بنیان گذاشتند، آخرین سلسله‌ی چین. امپراتورانی مانند کانگ‌شی و چیان‌لونگ قلمرو را بسیار گسترش دادند: تایوان در ۱۶۸۳ به چینگ پیوست و سین‌کیانگ، تبت و مغولستان هم زیر نفوذ آمدند. جمعیت چین در این دوران به‌شدت افزایش یافت.",
            "در قرن نوزدهم چین در برابر قدرت‌های اروپایی ضعیف شد. جنگ نخست تریاک (۱۸۳۹ تا ۱۸۴۲) با پیمان نانجینگ پایان یافت و هنگ‌کنگ به بریتانیا رسید. شورش تایپینگ (۱۸۵۰ تا ۱۸۶۴) یکی از خونین‌ترین جنگ‌های تاریخ بود و دست‌کم ده‌ها میلیون نفر جان باختند. چین در ۱۸۹۴ و ۱۸۹۵ از ژاپن شکست خورد و تایوان را از دست داد، و شورش بوکسورها (۱۸۹۹ تا ۱۹۰۱) با دخالت نیروهای خارجی سرکوب شد."
          ],
          "en": [
            "The Manchus took Beijing in 1644 and founded the Qing dynasty (1644 to 1912), the last dynasty of China. Emperors such as Kangxi and Qianlong greatly expanded the realm: Taiwan joined the Qing in 1683 and Xinjiang, Tibet and Mongolia also came under its influence. China’s population grew sharply in this period.",
            "In the nineteenth century China became weak against the European powers. The First Opium War (1839 to 1842) ended with the Treaty of Nanjing and Hong Kong passed to Britain. The Taiping Rebellion (1850 to 1864) was one of the bloodiest wars in history, and at least tens of millions died. China was defeated by Japan in 1894 and 1895 and lost Taiwan, and the Boxer Uprising (1899 to 1901) was suppressed with the intervention of foreign forces."
          ]
        }
      },
      {
        "id": "republic",
        "title": {
          "fa": "پایان امپراتوری و جمهوری چین",
          "en": "The end of the empire and the Republic of China"
        },
        "text": {
          "fa": [
            "قیام ووچانگ در ۱۰ اکتبر ۱۹۱۱ انقلاب شین‌های را آغاز کرد. سان یات‌سن رئیس‌جمهور موقت شد و جمهوری چین در ۱ ژانویه‌ی ۱۹۱۲ اعلام شد. پو یی، آخرین امپراتور کودک، در ۱۲ فوریه‌ی ۱۹۱۲ کناره‌گیری کرد.",
            "کشور سال‌ها میان جنگ‌سالاران تقسیم شد. جنبش چهارم مه (۱۹۱۹) روشنفکران را به‌سوی اصلاحات فرهنگی و سیاسی برد و حزب کمونیست چین در ۱۹۲۱ تأسیس شد. چیانگ کای‌شک رهبر حزب ملی‌گرا (گومیندان) شد و میان او و کمونیست‌ها جنگ درگرفت. ژاپن در ۱۹۳۱ به منچوری حمله کرد و در ۱۹۳۷ جنگ تمام‌عیار آغاز شد؛ در قتل‌عام نانجینگ (دسامبر ۱۹۳۷) صدها هزار نفر کشته شدند. پس از پایان جنگ جهانی دوم، جنگ داخلی (۱۹۴۶ تا ۱۹۴۹) با پیروزی کمونیست‌ها پایان یافت."
          ],
          "en": [
            "The Wuchang Uprising on 10 October 1911 began the Xinhai Revolution. Sun Yat-sen became provisional president and the Republic of China was proclaimed on 1 January 1912. Puyi, the last emperor, a child, abdicated on 12 February 1912.",
            "The country was divided among warlords for years. The May Fourth Movement (1919) led intellectuals towards cultural and political reform, and the Chinese Communist Party was founded in 1921. Chiang Kai-shek became leader of the Nationalist Party (Kuomintang) and war broke out between him and the Communists. Japan invaded Manchuria in 1931 and full-scale war began in 1937; hundreds of thousands were killed in the Nanjing Massacre (December 1937). After the end of the Second World War the civil war (1946 to 1949) ended with a Communist victory."
          ]
        }
      },
      {
        "id": "prc",
        "title": {
          "fa": "جمهوری خلق چین",
          "en": "The People’s Republic of China"
        },
        "text": {
          "fa": [
            "مائو تسه‌تونگ در ۱ اکتبر ۱۹۴۹ در پکن جمهوری خلق چین را اعلام کرد و دولت جمهوری چین به تایوان رفت. چین در ۱۹۵۰ وارد جنگ کره شد. «جهش بزرگ به جلو» (۱۹۵۸ تا ۱۹۶۲) به قحطی بزرگی انجامید که ده‌ها میلیون نفر در آن مردند، و «انقلاب فرهنگی» (۱۹۶۶ تا ۱۹۷۶) دوره‌ی آشوب و آزار سیاسی گسترده بود. مائو در ۹ سپتامبر ۱۹۷۶ درگذشت.",
            "از ۱۹۷۸ دنگ شیائوپینگ سیاست «اصلاحات و درهای باز» را پیش برد: مناطق ویژه‌ی اقتصادی، سرمایه‌ی خارجی و بازار. اقتصاد چین دهه‌ها با رشد بالا پیش رفت. اعتراض‌های میدان تیان‌آن‌من در ژوئن ۱۹۸۹ با نیروی نظامی پایان یافت و شمار قربانیان محل اختلاف است. هنگ‌کنگ در ۱۹۹۷ و ماکائو در ۱۹۹۹ به چین بازگشتند. چین در ۲۰۰۱ عضو سازمان تجارت جهانی شد و در ۲۰۰۸ میزبان المپیک پکن بود. امروز چین دومین اقتصاد بزرگ جهان است."
          ],
          "en": [
            "On 1 October 1949 Mao Zedong proclaimed the People’s Republic of China in Beijing and the government of the Republic of China went to Taiwan. China entered the Korean War in 1950. The ‘Great Leap Forward’ (1958 to 1962) led to a great famine in which tens of millions died, and the ‘Cultural Revolution’ (1966 to 1976) was a period of turmoil and widespread political persecution. Mao died on 9 September 1976.",
            "From 1978 Deng Xiaoping pursued the policy of ‘reform and opening up’: special economic zones, foreign capital and markets. China’s economy grew at a high rate for decades. The protests in Tiananmen Square in June 1989 ended with military force, and the number of victims is disputed. Hong Kong returned to China in 1997 and Macau in 1999. China joined the World Trade Organization in 2001 and hosted the Beijing Olympics in 2008. Today China is the second-largest economy in the world."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -2070,
        "title": {
          "fa": "سلسله‌ی شیا (حدود، بنا بر روایت سنتی)",
          "en": "The Xia dynasty (about, according to tradition)"
        },
        "text": {
          "fa": "نخستین سلسله بنا بر روایت سنتی چین؛ شواهد باستان‌شناختی آن محل بحث است.",
          "en": "The first dynasty according to Chinese tradition; its archaeological evidence is debated."
        }
      },
      {
        "year": -1600,
        "title": {
          "fa": "سلسله‌ی شانگ (حدود)",
          "en": "The Shang dynasty (about)"
        },
        "text": {
          "fa": "نخستین سلسله‌ای که با نوشته‌های باستانی تأیید شده است.",
          "en": "The first dynasty confirmed by ancient writing."
        }
      },
      {
        "year": -1046,
        "title": {
          "fa": "ژو بر شانگ پیروز می‌شود (حدود)",
          "en": "The Zhou defeat the Shang (about)"
        },
        "text": {
          "fa": "سلسله‌ی ژو آغاز شد و ایده‌ی «مأموریت آسمان» مطرح شد.",
          "en": "The Zhou dynasty began and the idea of the ‘Mandate of Heaven’ was put forward."
        }
      },
      {
        "year": -551,
        "title": {
          "fa": "زادروز کنفوسیوس",
          "en": "Birth of Confucius"
        },
        "text": {
          "fa": "کنفوسیوس، فیلسوفی که آموزه‌هایش فرهنگ چین را شکل داد، به دنیا آمد.",
          "en": "Confucius, the philosopher whose teachings shaped Chinese culture, was born."
        }
      },
      {
        "year": -475,
        "title": {
          "fa": "آغاز دوره‌ی دولت‌های متخاصم",
          "en": "Start of the Warring States period"
        },
        "text": {
          "fa": "دولت‌های رقیب با هم جنگیدند تا ۲۲۱ پیش از میلاد.",
          "en": "Rival states fought each other until 221 BCE."
        }
      },
      {
        "year": -221,
        "title": {
          "fa": "یکپارچگی چین به‌دست کین",
          "en": "Qin unifies China"
        },
        "text": {
          "fa": "شی هوانگ‌دی نخستین امپراتور چین شد.",
          "en": "Qin Shi Huang became the first emperor of China."
        }
      },
      {
        "year": -206,
        "title": {
          "fa": "فروپاشی سلسله‌ی کین",
          "en": "The Qin dynasty collapses"
        },
        "text": {
          "fa": "پس از شورش‌ها حکومت کین سقوط کرد.",
          "en": "After rebellions Qin rule fell."
        }
      },
      {
        "year": -202,
        "title": {
          "fa": "آغاز سلسله‌ی هان",
          "en": "The Han dynasty begins"
        },
        "text": {
          "fa": "لیو بانگ خود را امپراتور اعلام کرد و حکومت هان آغاز شد.",
          "en": "Liu Bang proclaimed himself emperor and Han rule began."
        }
      },
      {
        "year": -138,
        "title": {
          "fa": "مأموریت ژانگ چیان",
          "en": "The mission of Zhang Qian"
        },
        "text": {
          "fa": "امپراتور وو او را به آسیای مرکزی فرستاد؛ گامی در شکل‌گیری جاده‌ی ابریشم.",
          "en": "Emperor Wu sent him to Central Asia, a step in the formation of the Silk Road."
        }
      },
      {
        "year": 105,
        "title": {
          "fa": "کاغذ و کای لون",
          "en": "Paper and Cai Lun"
        },
        "text": {
          "fa": "کای لون روش بهبودیافته‌ی ساخت کاغذ را به دربار هان ارائه داد.",
          "en": "Cai Lun presented an improved method of making paper to the Han court."
        }
      },
      {
        "year": 220,
        "title": {
          "fa": "پایان هان",
          "en": "The end of the Han"
        },
        "text": {
          "fa": "هان سقوط کرد و دوره‌ی سه پادشاهی آغاز شد.",
          "en": "The Han fell and the Three Kingdoms period began."
        }
      },
      {
        "year": 589,
        "title": {
          "fa": "یکپارچگی دوباره به‌دست سوئی",
          "en": "Reunification under the Sui"
        },
        "text": {
          "fa": "پس از قرن‌ها تفرقه، سلسله‌ی سوئی چین را یکی کرد و بعد کانال بزرگ را ساخت.",
          "en": "After centuries of division the Sui dynasty reunified China and then built the Grand Canal."
        }
      },
      {
        "year": 618,
        "title": {
          "fa": "آغاز سلسله‌ی تانگ",
          "en": "The Tang dynasty begins"
        },
        "text": {
          "fa": "تانگ، عصر طلایی چین، آغاز شد.",
          "en": "The Tang, China’s golden age, began."
        }
      },
      {
        "year": 690,
        "title": {
          "fa": "ووجه‌تیان امپراتور می‌شود",
          "en": "Wu Zetian becomes emperor"
        },
        "text": {
          "fa": "تنها زنی که خود بر تخت امپراتوری چین نشست.",
          "en": "The only woman to sit on the Chinese imperial throne in her own right."
        }
      },
      {
        "year": 755,
        "yearText": {
          "fa": "۷۵۵ تا ۷۶۳",
          "en": "755 to 763"
        },
        "title": {
          "fa": "شورش آن لوشان",
          "en": "The An Lushan rebellion"
        },
        "text": {
          "fa": "شورشی بزرگ که تانگ را سخت تضعیف کرد.",
          "en": "A great rebellion that badly weakened the Tang."
        }
      },
      {
        "year": 868,
        "title": {
          "fa": "سوترای الماس",
          "en": "The Diamond Sutra"
        },
        "text": {
          "fa": "قدیمی‌ترین کتاب چاپی با تاریخ مشخص در جهان.",
          "en": "The oldest dated printed book in the world."
        }
      },
      {
        "year": 960,
        "title": {
          "fa": "آغاز سلسله‌ی سونگ",
          "en": "The Song dynasty begins"
        },
        "text": {
          "fa": "دوره‌ی شکوفایی اقتصاد و فناوری آغاز شد.",
          "en": "A period of flourishing economy and technology began."
        }
      },
      {
        "year": 1040,
        "title": {
          "fa": "حروف متحرک بی شنگ (حدود)",
          "en": "Bi Sheng’s movable type (about)"
        },
        "text": {
          "fa": "بی شنگ حروف متحرک سفالین را ابداع کرد.",
          "en": "Bi Sheng invented movable type in clay."
        }
      },
      {
        "year": 1127,
        "title": {
          "fa": "سقوط سونگ شمالی",
          "en": "The fall of the Northern Song"
        },
        "text": {
          "fa": "ژورچن‌ها شمال چین را گرفتند و سونگ جنوبی در جنوب ماند.",
          "en": "The Jurchen took northern China and the Southern Song remained in the south."
        }
      },
      {
        "year": 1206,
        "title": {
          "fa": "چنگیزخان مغول‌ها را یکی می‌کند",
          "en": "Genghis Khan unites the Mongols"
        },
        "text": {
          "fa": "آغاز گسترش مغول‌ها که به فتح چین انجامید.",
          "en": "The start of the Mongol expansion that led to the conquest of China."
        }
      },
      {
        "year": 1271,
        "title": {
          "fa": "سلسله‌ی یوآن",
          "en": "The Yuan dynasty"
        },
        "text": {
          "fa": "قوبیلای خان سلسله‌ی یوآن را بنیان گذاشت.",
          "en": "Kublai Khan founded the Yuan dynasty."
        }
      },
      {
        "year": 1279,
        "title": {
          "fa": "پایان سونگ جنوبی",
          "en": "End of the Southern Song"
        },
        "text": {
          "fa": "مغول‌ها فتح همه‌ی چین را تکمیل کردند.",
          "en": "The Mongols completed the conquest of all China."
        }
      },
      {
        "year": 1368,
        "title": {
          "fa": "آغاز سلسله‌ی مینگ",
          "en": "The Ming dynasty begins"
        },
        "text": {
          "fa": "ژو یوانجانگ مغول‌ها را راند و مینگ را بنیان گذاشت.",
          "en": "Zhu Yuanzhang drove out the Mongols and founded the Ming."
        }
      },
      {
        "year": 1405,
        "yearText": {
          "fa": "۱۴۰۵ تا ۱۴۳۳",
          "en": "1405 to 1433"
        },
        "title": {
          "fa": "سفرهای دریایی ژنگ هه",
          "en": "The voyages of Zheng He"
        },
        "text": {
          "fa": "هفت سفر ناوگان بزرگ مینگ تا شرق آفریقا.",
          "en": "Seven voyages of the great Ming fleet as far as East Africa."
        }
      },
      {
        "year": 1421,
        "title": {
          "fa": "پکن پایتخت می‌شود",
          "en": "Beijing becomes the capital"
        },
        "text": {
          "fa": "امپراتور یونگله پایتخت را به پکن برد و شهر ممنوع آماده شد.",
          "en": "The Yongle Emperor moved the capital to Beijing and the Forbidden City was ready."
        }
      },
      {
        "year": 1644,
        "title": {
          "fa": "سقوط مینگ و آغاز چینگ",
          "en": "The fall of the Ming and the start of the Qing"
        },
        "text": {
          "fa": "مانچوها پکن را گرفتند و آخرین سلسله‌ی چین آغاز شد.",
          "en": "The Manchus took Beijing and the last dynasty of China began."
        }
      },
      {
        "year": 1683,
        "title": {
          "fa": "تایوان به چینگ می‌پیوندد",
          "en": "Taiwan joins the Qing"
        },
        "text": {
          "fa": "نیروهای چینگ تایوان را گرفتند.",
          "en": "Qing forces took Taiwan."
        }
      },
      {
        "year": 1839,
        "yearText": {
          "fa": "۱۸۳۹ تا ۱۸۴۲",
          "en": "1839 to 1842"
        },
        "title": {
          "fa": "جنگ نخست تریاک",
          "en": "The First Opium War"
        },
        "text": {
          "fa": "جنگ با بریتانیا بر سر تجارت تریاک و تجارت آزاد.",
          "en": "A war with Britain over the opium trade and free trade."
        }
      },
      {
        "year": 1842,
        "title": {
          "fa": "پیمان نانجینگ",
          "en": "The Treaty of Nanjing"
        },
        "text": {
          "fa": "هنگ‌کنگ به بریتانیا واگذار شد و بنادری به تجارت خارجی باز شد.",
          "en": "Hong Kong was ceded to Britain and ports were opened to foreign trade."
        }
      },
      {
        "year": 1850,
        "yearText": {
          "fa": "۱۸۵۰ تا ۱۸۶۴",
          "en": "1850 to 1864"
        },
        "title": {
          "fa": "شورش تایپینگ",
          "en": "The Taiping Rebellion"
        },
        "text": {
          "fa": "یکی از خونین‌ترین جنگ‌های تاریخ؛ دست‌کم ده‌ها میلیون نفر کشته شدند.",
          "en": "One of the bloodiest wars in history; at least tens of millions died."
        }
      },
      {
        "year": 1894,
        "yearText": {
          "fa": "۱۸۹۴ تا ۱۸۹۵",
          "en": "1894 to 1895"
        },
        "title": {
          "fa": "جنگ چین و ژاپن",
          "en": "The Sino-Japanese War"
        },
        "text": {
          "fa": "چین شکست خورد و تایوان را به ژاپن واگذار کرد.",
          "en": "China was defeated and ceded Taiwan to Japan."
        }
      },
      {
        "year": 1911,
        "title": {
          "fa": "انقلاب شین‌های",
          "en": "The Xinhai Revolution"
        },
        "text": {
          "fa": "قیام ووچانگ در ۱۰ اکتبر سلسله‌ی چینگ را به سقوط کشاند.",
          "en": "The Wuchang Uprising on 10 October brought down the Qing dynasty."
        }
      },
      {
        "year": 1912,
        "title": {
          "fa": "جمهوری چین",
          "en": "The Republic of China"
        },
        "text": {
          "fa": "در ۱ ژانویه جمهوری اعلام شد و در ۱۲ فوریه پو یی کناره‌گیری کرد.",
          "en": "On 1 January the republic was proclaimed and on 12 February Puyi abdicated."
        }
      },
      {
        "year": 1919,
        "title": {
          "fa": "جنبش چهارم مه",
          "en": "The May Fourth Movement"
        },
        "text": {
          "fa": "اعتراض‌های دانشجویی که اصلاحات فرهنگی و سیاسی را پیش برد.",
          "en": "Student protests that advanced cultural and political reform."
        }
      },
      {
        "year": 1921,
        "title": {
          "fa": "تأسیس حزب کمونیست چین",
          "en": "Founding of the Chinese Communist Party"
        },
        "text": {
          "fa": "حزب کمونیست چین در شانگهای بنیان گذاشته شد.",
          "en": "The Chinese Communist Party was founded in Shanghai."
        }
      },
      {
        "year": 1934,
        "yearText": {
          "fa": "۱۹۳۴ تا ۱۹۳۵",
          "en": "1934 to 1935"
        },
        "title": {
          "fa": "راهپیمایی بزرگ",
          "en": "The Long March"
        },
        "text": {
          "fa": "کمونیست‌ها در عقب‌نشینی طولانی به شمال غربی رفتند؛ مائو در این دوران به رهبری رسید.",
          "en": "The Communists retreated on a long march to the north-west; Mao rose to leadership in this period."
        }
      },
      {
        "year": 1937,
        "title": {
          "fa": "جنگ تمام‌عیار با ژاپن",
          "en": "Full-scale war with Japan"
        },
        "text": {
          "fa": "از ۷ ژوئیه جنگ آغاز شد و در دسامبر قتل‌عام نانجینگ رخ داد.",
          "en": "War began on 7 July and the Nanjing Massacre took place in December."
        }
      },
      {
        "year": 1949,
        "title": {
          "fa": "جمهوری خلق چین",
          "en": "The People’s Republic of China"
        },
        "text": {
          "fa": "مائو در ۱ اکتبر در پکن جمهوری خلق چین را اعلام کرد.",
          "en": "On 1 October Mao proclaimed the People’s Republic of China in Beijing."
        }
      },
      {
        "year": 1950,
        "title": {
          "fa": "ورود به جنگ کره",
          "en": "Entry into the Korean War"
        },
        "text": {
          "fa": "نیروهای داوطلب چین در اکتبر به کره فرستاده شدند.",
          "en": "Chinese volunteer forces were sent to Korea in October."
        }
      },
      {
        "year": 1958,
        "yearText": {
          "fa": "۱۹۵۸ تا ۱۹۶۲",
          "en": "1958 to 1962"
        },
        "title": {
          "fa": "جهش بزرگ به جلو",
          "en": "The Great Leap Forward"
        },
        "text": {
          "fa": "برنامه‌ی صنعتی‌سازی شتابان که به قحطی بزرگی انجامید.",
          "en": "A rapid industrialization campaign that led to a great famine."
        }
      },
      {
        "year": 1966,
        "yearText": {
          "fa": "۱۹۶۶ تا ۱۹۷۶",
          "en": "1966 to 1976"
        },
        "title": {
          "fa": "انقلاب فرهنگی",
          "en": "The Cultural Revolution"
        },
        "text": {
          "fa": "دهه‌ای از آشوب و آزار سیاسی گسترده.",
          "en": "A decade of turmoil and widespread political persecution."
        }
      },
      {
        "year": 1976,
        "title": {
          "fa": "مرگ مائو",
          "en": "The death of Mao"
        },
        "text": {
          "fa": "مائو در ۹ سپتامبر درگذشت.",
          "en": "Mao died on 9 September."
        }
      },
      {
        "year": 1978,
        "title": {
          "fa": "اصلاحات و درهای باز",
          "en": "Reform and opening up"
        },
        "text": {
          "fa": "دنگ شیائوپینگ اصلاحات اقتصادی را آغاز کرد.",
          "en": "Deng Xiaoping began the economic reforms."
        }
      },
      {
        "year": 1989,
        "title": {
          "fa": "اعتراض‌های تیان‌آن‌من",
          "en": "The Tiananmen protests"
        },
        "text": {
          "fa": "اعتراض‌های بهار ۱۹۸۹ در ۳ و ۴ ژوئن با نیروی نظامی پایان یافت.",
          "en": "The protests of spring 1989 ended with military force on 3 and 4 June."
        }
      },
      {
        "year": 1997,
        "title": {
          "fa": "بازگشت هنگ‌کنگ",
          "en": "The return of Hong Kong"
        },
        "text": {
          "fa": "هنگ‌کنگ در ۱ ژوئیه از بریتانیا به چین بازگشت.",
          "en": "Hong Kong returned from Britain to China on 1 July."
        }
      },
      {
        "year": 2001,
        "title": {
          "fa": "عضویت در سازمان تجارت جهانی",
          "en": "Joining the World Trade Organization"
        },
        "text": {
          "fa": "چین در دسامبر عضو سازمان تجارت جهانی شد.",
          "en": "China joined the World Trade Organization in December."
        }
      },
      {
        "year": 2008,
        "title": {
          "fa": "المپیک پکن",
          "en": "The Beijing Olympics"
        },
        "text": {
          "fa": "پکن میزبان بازی‌های المپیک تابستانی بود.",
          "en": "Beijing hosted the Summer Olympic Games."
        }
      }
    ]
  },
  "japan": {
    "sections": [
      {
        "id": "prehistory",
        "title": {
          "fa": "پیش از تاریخ: ژومون و یایوی",
          "en": "Prehistory: the Jōmon and Yayoi"
        },
        "text": {
          "fa": [
            "دوره‌ی ژومون (از حدود ۱۴۰۰۰ تا ۳۰۰ پیش از میلاد) با شکارگران و گردآورندگان غذا و سفال‌های طناب‌نقش شناخته می‌شود. از حدود ۳۰۰ پیش از میلاد دوره‌ی یایوی آغاز شد: کشت برنج، فلزکاری و شهرک‌های بزرگ‌تر که با مهاجرت‌ها و تأثیر خشکی آسیا همراه بود.",
            "منابع چینی در قرن سوم از سرزمینی به نام یاماتای و ملکه‌ای به نام هیمیکو نوشته‌اند که در ۲۳۹ فرستاده‌ای به دربار چین فرستاد. مورخان هنوز بر سر مکان دقیق یاماتای اختلاف دارند."
          ],
          "en": [
            "The Jōmon period (from about 14,000 to 300 BCE) is known for hunter-gatherers and cord-marked pottery. From about 300 BCE the Yayoi period began: rice farming, metalworking and larger settlements, accompanied by migrations and influence from the Asian mainland.",
            "Chinese sources of the third century write of a land called Yamatai and a queen named Himiko who sent an envoy to the Chinese court in 239. Historians still disagree about the exact location of Yamatai."
          ]
        }
      },
      {
        "id": "yamato",
        "title": {
          "fa": "یاماتو و شکل‌گیری دولت",
          "en": "Yamato and the formation of the state"
        },
        "text": {
          "fa": [
            "در دوره‌ی کوفون (حدود ۲۵۰ تا ۵۳۸) سران قدرتمند آرامگاه‌های بزرگ کلیدسوراخی ساختند. دربار یاماتو در مرکز ژاپن به‌تدریج قدرت گرفت و خاندانی که امروز امپراتوری ژاپن به آن می‌رسد از همین دربار برخاست. آیین بودا در سده‌ی ششم از کره وارد ژاپن شد.",
            "شاهزاده شوتوکو (۵۷۴ تا ۶۲۲)، نایب‌السلطنه‌ی ملکه سویکو، در ۶۰۴ «قانون اساسی هفده‌ماده‌ای» را نوشت و از بودا و آموزه‌های کنفوسیوس بهره گرفت. اصلاحات تایکا در ۶۴۵ مالکیت زمین را زیر نظر دولت آورد و در ۷۰۱ قانون تایهو دولت متمرکز و دیوان‌سالار را بر الگوی چین تانگ سامان داد."
          ],
          "en": [
            "In the Kofun period (about 250 to 538) powerful chiefs built large keyhole-shaped tombs. The Yamato court in central Japan gradually grew in power, and the family to which the Japanese imperial line is traced today rose from this court. Buddhism entered Japan from Korea in the sixth century.",
            "Prince Shōtoku (574 to 622), regent for Empress Suiko, wrote the ‘Seventeen-Article Constitution’ in 604, drawing on Buddhism and Confucian teaching. The Taika reforms in 645 put land ownership under the state, and in 701 the Taihō Code organized a centralized, bureaucratic state on the model of Tang China."
          ]
        }
      },
      {
        "id": "nara-heian",
        "title": {
          "fa": "نارا و هیان: دوران دربار",
          "en": "Nara and Heian: the age of the court"
        },
        "text": {
          "fa": [
            "نارا (هیجوکیو) در ۷۱۰ نخستین پایتخت دائمی شد. «کوجیکی» (۷۱۲) و «نیهون شوکی» (۷۲۰) کهن‌ترین تاریخ‌نامه‌های ژاپن‌اند و در ۷۵۲ مجسمه‌ی بزرگ بودا در معبد تودای‌جی تقدیس شد.",
            "در ۷۹۴ پایتخت به هیان‌کیو (کیوتو امروز) رفت و دوره‌ی هیان (۷۹۴ تا ۱۱۸۵) آغاز شد. خاندان فوجی‌وارا به‌عنوان نایب‌السلطنه قدرت واقعی را داشت. خط کانا پدید آمد و ادبیات درباری شکوفا شد: مورازاکی شیکیبو «حکایت گنجی» را (حدود ۱۰۰۰ تا ۱۰۱۰) نوشت که آن را نخستین رمان جهان می‌خوانند و سی‌شوناگون «کتاب بالش» را."
          ],
          "en": [
            "Nara (Heijō-kyō) became the first permanent capital in 710. The Kojiki (712) and the Nihon Shoki (720) are Japan’s oldest chronicles, and in 752 the great statue of the Buddha at Tōdai-ji was consecrated.",
            "In 794 the capital moved to Heian-kyō (today’s Kyoto) and the Heian period (794 to 1185) began. The Fujiwara family held real power as regents. The kana script appeared and court literature flourished: Murasaki Shikibu wrote the Tale of Genji (about 1000 to 1010), often called the world’s first novel, and Sei Shōnagon wrote the Pillow Book."
          ]
        }
      },
      {
        "id": "shoguns",
        "title": {
          "fa": "کاماکورا و موروماچی: شوگون‌ها و سامورایی‌ها",
          "en": "Kamakura and Muromachi: shoguns and samurai"
        },
        "text": {
          "fa": [
            "جنگ گنپی (۱۱۸۰ تا ۱۱۸۵) میان دو خاندان جنگجو، تایرا و میناموتو، درگرفت. میناموتو نو یوریتومو پیروز شد و در ۱۱۹۲ لقب «شوگون» را گرفت و در کاماکورا حکومت نظامی (شوگونی) را بنیان گذاشت. امپراتور در کیوتو ماند اما قدرت واقعی با شوگون و سامورایی‌ها بود. مغول‌ها در ۱۲۷۴ و ۱۲۸۱ به ژاپن حمله کردند و هر دو بار شکست خوردند؛ توفان‌ها نقش بزرگی در شکست آن‌ها داشتند.",
            "حکومت کاماکورا در ۱۳۳۳ فروپاشید و در ۱۳۳۶ آشیکاگا تاکائوجی شوگونی موروماچی را برپا کرد (۱۳۳۶ تا ۱۵۷۳). این دوره زمان بالندگی هنرهایی مانند آیین زن، نمایش نو و آیین چای بود. جنگ اونین (۱۴۶۷ تا ۱۴۷۷) قدرت مرکزی را از میان برد و ژاپن به «دوره‌ی کشورهای در حال جنگ» (سنگوکو) افتاد."
          ],
          "en": [
            "The Genpei War (1180 to 1185) was fought between two warrior families, the Taira and the Minamoto. Minamoto no Yoritomo won, took the title ‘shogun’ in 1192 and founded military rule (the shogunate) at Kamakura. The emperor remained in Kyoto, but real power lay with the shogun and the samurai. The Mongols invaded Japan in 1274 and 1281 and were defeated both times; typhoons played a major part in their defeat.",
            "Kamakura rule collapsed in 1333, and in 1336 Ashikaga Takauji set up the Muromachi shogunate (1336 to 1573). This period saw the flowering of arts such as Zen, Noh theatre and the tea ceremony. The Ōnin War (1467 to 1477) destroyed central authority and Japan fell into the ‘Warring States period’ (Sengoku)."
          ]
        }
      },
      {
        "id": "unification",
        "title": {
          "fa": "یکپارچگی دوباره: نوبوناگا، هیده‌یوشی و ایه‌یاسو",
          "en": "Reunification: Nobunaga, Hideyoshi and Ieyasu"
        },
        "text": {
          "fa": [
            "پرتغالی‌ها در ۱۵۴۳ در جزیره‌ی تانه‌گاشیما به ژاپن رسیدند و تفنگ آوردند و در ۱۵۴۹ فرانسیس خاویر مسیحیت را معرفی کرد. اودا نوبوناگا با استفاده از تفنگ قدرت گرفت و در ۱۵۷۳ آخرین شوگون آشیکاگا را برکنار کرد؛ او در ۱۵۸۲ در معبد هونو‌جی به‌دست یکی از سردارانش کشته شد.",
            "تویوتومی هیده‌یوشی، که از خانواده‌ای روستایی برخاسته بود، کار او را ادامه داد و در ۱۵۹۰ ژاپن را یکی کرد. او در ۱۵۹۲ و ۱۵۹۷ به کره حمله کرد که بی‌نتیجه ماند. پس از مرگ او در ۱۵۹۸، توکوگاوا ایه‌یاسو در نبرد سکیگاهارا (۲۱ اکتبر ۱۶۰۰) پیروز شد و در ۱۶۰۳ شوگون شد."
          ],
          "en": [
            "The Portuguese reached Japan in 1543 on the island of Tanegashima and brought firearms, and in 1549 Francis Xavier introduced Christianity. Oda Nobunaga rose to power using firearms and in 1573 deposed the last Ashikaga shogun; in 1582 he was killed at the Honnō-ji temple by one of his own generals.",
            "Toyotomi Hideyoshi, who had risen from a peasant family, continued his work and unified Japan in 1590. He invaded Korea in 1592 and 1597, which came to nothing. After his death in 1598, Tokugawa Ieyasu won the Battle of Sekigahara (21 October 1600) and became shogun in 1603."
          ]
        }
      },
      {
        "id": "edo",
        "title": {
          "fa": "دوره‌ی ادو و «کشور بسته»",
          "en": "The Edo period and the ‘closed country’"
        },
        "text": {
          "fa": [
            "شوگونی توکوگاوا (۱۶۰۳ تا ۱۸۶۸) نزدیک به ۲۵۰ سال صلح داخلی آورد. پایتخت آن ادو (توکیو امروز) تا قرن هجدهم به شهری حدود یک میلیون نفری رسید. جامعه به چهار طبقه تقسیم بود: سامورایی، کشاورز، صنعتگر و بازرگان.",
            "پس از شورش شیماباارا (۱۶۳۷ تا ۱۶۳۸) و جنگ با مسیحیت، سیاست «کشور بسته» (ساکوکو) اجرا شد: ژاپنی‌ها حق خروج نداشتند و تجارت خارجی تنها با هلندی‌ها و چینی‌ها در ناگازاکی ادامه یافت. در همین دوران هنرهای بومی رونق گرفت: نمایش کابوکی، چاپ‌های اوکیو-ائه و شعر هایکو که باشو آن را به اوج رساند."
          ],
          "en": [
            "The Tokugawa shogunate (1603 to 1868) brought nearly 250 years of internal peace. Its capital Edo (today’s Tokyo) grew to a city of about a million people by the eighteenth century. Society was divided into four classes: samurai, farmers, artisans and merchants.",
            "After the Shimabara Rebellion (1637 to 1638) and the campaign against Christianity, the ‘closed country’ (sakoku) policy was enforced: Japanese were not allowed to leave and foreign trade continued only with the Dutch and Chinese at Nagasaki. Native arts flourished in the same period: kabuki theatre, ukiyo-e prints and haiku poetry, which Bashō brought to its peak."
          ]
        }
      },
      {
        "id": "meiji",
        "title": {
          "fa": "احیای میجی و ژاپن مدرن",
          "en": "The Meiji Restoration and modern Japan"
        },
        "text": {
          "fa": [
            "در ۱۸۵۳ ناوگان آمریکایی به فرماندهی کامودور پری وارد خلیج ادو شد و ژاپن را وادار کرد به روی تجارت باز شود (پیمان کاناگاوا، ۱۸۵۴). این فشار شوگونی را تضعیف کرد و در ژانویه‌ی ۱۸۶۸ قدرت به امپراتور میجی بازگشت (احیای میجی). پایتخت به ادو منتقل و توکیو نامیده شد.",
            "دولت میجی نظام فئودالی را برچید (۱۸۷۱)، خدمت اجباری سربازی (۱۸۷۳) و آموزش همگانی را برقرار کرد و قانون اساسی میجی را در ۱۸۸۹ صادر کرد. ژاپن به‌سرعت صنعتی و نظامی شد؛ در جنگ با چین (۱۸۹۴ تا ۱۸۹۵) تایوان را گرفت، در جنگ با روسیه (۱۹۰۴ تا ۱۹۰۵) پیروز شد و در ۱۹۱۰ کره را ضمیمه کرد."
          ],
          "en": [
            "In 1853 an American fleet commanded by Commodore Perry entered Edo Bay and forced Japan to open to trade (the Treaty of Kanagawa, 1854). This pressure weakened the shogunate and in January 1868 power returned to Emperor Meiji (the Meiji Restoration). The capital moved to Edo, which was renamed Tokyo.",
            "The Meiji government abolished the feudal system (1871), established conscription (1873) and universal education, and issued the Meiji Constitution in 1889. Japan became industrial and military quickly; in the war with China (1894 to 1895) it took Taiwan, it won the war with Russia (1904 to 1905) and in 1910 it annexed Korea."
          ]
        }
      },
      {
        "id": "war",
        "title": {
          "fa": "میلیتاریسم و جنگ جهانی دوم",
          "en": "Militarism and the Second World War"
        },
        "text": {
          "fa": [
            "در جنگ جهانی اول ژاپن در کنار متفقین بود. زمین‌لرزه‌ی بزرگ کانتو در ۱ سپتامبر ۱۹۲۳ توکیو و یوکوهاما را ویران کرد و بیش از صد هزار نفر کشته شدند. در دهه‌ی ۱۹۳۰ نظامیان قدرت را در دست گرفتند: ژاپن در ۱۹۳۱ به منچوری حمله کرد و در ۱۹۳۷ جنگ تمام‌عیار با چین آغاز شد. پیمان با آلمان و ایتالیا در ۱۹۴۰ بسته شد و در ۷ دسامبر ۱۹۴۱ ژاپن به پرل هاربر حمله کرد و وارد جنگ با آمریکا شد.",
            "اشغال کشورهای دیگر، از جمله کره، چین و بخش‌هایی از جنوب شرق آسیا، رنج بسیار بزرگی برای میلیون‌ها نفر به همراه داشت. در ۶ و ۹ اوت ۱۹۴۵ آمریکا به هیروشیما و ناگازاکی بمب اتمی انداخت و بیش از صد هزار نفر کشته شدند؛ بسیاری در لحظه‌های نخست و بسیاری دیگر در ماه‌های بعد بر اثر جراحت و تابش. امپراتور هیروهیتو در ۱۵ اوت تسلیم را از رادیو اعلام کرد و سند تسلیم در ۲ سپتامبر امضا شد."
          ],
          "en": [
            "In the First World War Japan was on the Allied side. The Great Kantō earthquake on 1 September 1923 devastated Tokyo and Yokohama and more than a hundred thousand people died. In the 1930s the military took power: Japan invaded Manchuria in 1931 and full-scale war with China began in 1937. A pact with Germany and Italy was signed in 1940 and on 7 December 1941 Japan attacked Pearl Harbor and entered the war with the United States.",
            "The occupation of other countries, including Korea, China and parts of South-East Asia, brought immense suffering to millions of people. On 6 and 9 August 1945 the United States dropped atomic bombs on Hiroshima and Nagasaki and more than a hundred thousand people died, many in the first moments and many more in the following months from injuries and radiation. Emperor Hirohito announced the surrender on the radio on 15 August and the surrender document was signed on 2 September."
          ]
        }
      },
      {
        "id": "postwar",
        "title": {
          "fa": "پس از جنگ: اشغال، معجزه‌ی اقتصادی و ژاپن امروز",
          "en": "After the war: occupation, the economic miracle and Japan today"
        },
        "text": {
          "fa": [
            "ژاپن از ۱۹۴۵ تا ۱۹۵۲ زیر اشغال متفقین، بیشتر آمریکا و به فرماندهی ژنرال مک‌آرتور، بود. قانون اساسی جدید که از ۳ مه ۱۹۴۷ اجرا شد، امپراتور را نماد ملی کرد و در ماده‌ی ۹ از جنگ به‌عنوان ابزار سیاست دست کشید. اشغال در ۱۹۵۲ پایان یافت.",
            "دهه‌های ۱۹۵۰ تا ۱۹۷۰ «معجزه‌ی اقتصادی» بود: المپیک توکیو و آغاز قطار سریع‌السیر شینکانسن در ۱۹۶۴، و در ۱۹۶۸ ژاپن دومین اقتصاد بزرگ جهان شد (تا ۲۰۱۰ که چین از آن پیش گرفت). از اوایل دهه‌ی ۱۹۹۰ رشد کند شد. در ۱۱ مارس ۲۰۱۱ زمین‌لرزه و سونامی تهوکو نزدیک به بیست هزار کشته و ناپدید برجا گذاشت و حادثه‌ی نیروگاه هسته‌ای فوکوشیما رخ داد. در ۲۰۱۹ امپراتور آکیهیتو کناره‌گیری کرد و ناروهیتو امپراتور شد؛ دوره‌ی ریوا آغاز شد. امروز ژاپن پادشاهی مشروطه‌ی پارلمانی و از بزرگ‌ترین اقتصادهای جهان است."
          ],
          "en": [
            "From 1945 to 1952 Japan was under Allied occupation, mostly American and commanded by General MacArthur. The new constitution, in force from 3 May 1947, made the emperor a national symbol and, in Article 9, renounced war as an instrument of policy. The occupation ended in 1952.",
            "The 1950s to the 1970s were the ‘economic miracle’: the Tokyo Olympics and the start of the Shinkansen bullet train in 1964, and in 1968 Japan became the world’s second-largest economy (until China overtook it in 2010). From the early 1990s growth slowed. On 11 March 2011 the Tōhoku earthquake and tsunami left nearly twenty thousand dead and missing and the Fukushima nuclear plant accident took place. In 2019 Emperor Akihito abdicated and Naruhito became emperor; the Reiwa era began. Today Japan is a parliamentary constitutional monarchy and one of the world’s largest economies."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -14000,
        "title": {
          "fa": "آغاز دوره‌ی ژومون (حدود)",
          "en": "Start of the Jōmon period (about)"
        },
        "text": {
          "fa": "شکارگران و گردآورندگان با سفال‌های طناب‌نقش.",
          "en": "Hunter-gatherers with cord-marked pottery."
        }
      },
      {
        "year": -300,
        "title": {
          "fa": "آغاز دوره‌ی یایوی (حدود)",
          "en": "Start of the Yayoi period (about)"
        },
        "text": {
          "fa": "کشت برنج و فلزکاری رواج یافت.",
          "en": "Rice farming and metalworking spread."
        }
      },
      {
        "year": 239,
        "title": {
          "fa": "فرستاده‌ی ملکه هیمیکو به چین",
          "en": "Queen Himiko’s envoy to China"
        },
        "text": {
          "fa": "بنا بر منابع چینی، ملکه‌ی یاماتای فرستاده‌ای به دربار چین فرستاد.",
          "en": "According to Chinese sources the queen of Yamatai sent an envoy to the Chinese court."
        }
      },
      {
        "year": 538,
        "title": {
          "fa": "ورود بودا (بنا بر سنت)",
          "en": "The arrival of Buddhism (according to tradition)"
        },
        "text": {
          "fa": "آیین بودا از کره وارد دربار ژاپن شد؛ برخی منابع ۵۵۲ را ذکر می‌کنند.",
          "en": "Buddhism entered the Japanese court from Korea; some sources give 552."
        }
      },
      {
        "year": 604,
        "title": {
          "fa": "قانون اساسی هفده‌ماده‌ای",
          "en": "The Seventeen-Article Constitution"
        },
        "text": {
          "fa": "شاهزاده شوتوکو اصول اخلاقی و حکومتی را نوشت.",
          "en": "Prince Shōtoku wrote principles of ethics and government."
        }
      },
      {
        "year": 645,
        "title": {
          "fa": "اصلاحات تایکا",
          "en": "The Taika reforms"
        },
        "text": {
          "fa": "زمین و مالیات زیر نظر دولت درآمد.",
          "en": "Land and taxation were brought under the state."
        }
      },
      {
        "year": 701,
        "title": {
          "fa": "قانون تایهو",
          "en": "The Taihō Code"
        },
        "text": {
          "fa": "دولت متمرکز و دیوان‌سالار بر الگوی چین تانگ سامان یافت.",
          "en": "A centralized, bureaucratic state was organized on the model of Tang China."
        }
      },
      {
        "year": 710,
        "title": {
          "fa": "پایتختی نارا",
          "en": "Nara becomes the capital"
        },
        "text": {
          "fa": "هیجوکیو (نارا) نخستین پایتخت دائمی شد.",
          "en": "Heijō-kyō (Nara) became the first permanent capital."
        }
      },
      {
        "year": 712,
        "title": {
          "fa": "کوجیکی",
          "en": "The Kojiki"
        },
        "text": {
          "fa": "کهن‌ترین تاریخ‌نامه‌ی ژاپن تدوین شد.",
          "en": "Japan’s oldest chronicle was compiled."
        }
      },
      {
        "year": 752,
        "title": {
          "fa": "بودای بزرگ تودای‌جی",
          "en": "The Great Buddha of Tōdai-ji"
        },
        "text": {
          "fa": "مجسمه‌ی بزرگ بودا در نارا تقدیس شد.",
          "en": "The great statue of the Buddha at Nara was consecrated."
        }
      },
      {
        "year": 794,
        "title": {
          "fa": "پایتختی هیان‌کیو (کیوتو)",
          "en": "Heian-kyō (Kyoto) becomes the capital"
        },
        "text": {
          "fa": "دوره‌ی هیان آغاز شد.",
          "en": "The Heian period began."
        }
      },
      {
        "year": 1008,
        "title": {
          "fa": "حکایت گنجی (حدود)",
          "en": "The Tale of Genji (about)"
        },
        "text": {
          "fa": "مورازاکی شیکیبو در همین سال‌ها رمان خود را می‌نوشت و در ۱۰۰۸ نخستین یادکرد از آن ثبت شد.",
          "en": "Murasaki Shikibu was writing her novel around these years, and the first mention of it was recorded in 1008."
        }
      },
      {
        "year": 1185,
        "title": {
          "fa": "پایان جنگ گنپی",
          "en": "End of the Genpei War"
        },
        "text": {
          "fa": "در نبرد دان‌نوئورا خاندان تایرا شکست خورد.",
          "en": "At the Battle of Dan-no-ura the Taira clan was defeated."
        }
      },
      {
        "year": 1192,
        "title": {
          "fa": "یوریتومو شوگون می‌شود",
          "en": "Yoritomo becomes shogun"
        },
        "text": {
          "fa": "شوگونی کاماکورا، نخستین حکومت نظامی، شکل گرفت.",
          "en": "The Kamakura shogunate, the first military government, took shape."
        }
      },
      {
        "year": 1274,
        "title": {
          "fa": "نخستین حمله‌ی مغول‌ها",
          "en": "The first Mongol invasion"
        },
        "text": {
          "fa": "مغول‌ها به ژاپن حمله کردند و عقب رانده شدند؛ حمله‌ی دوم در ۱۲۸۱ بود.",
          "en": "The Mongols attacked Japan and were driven back; the second invasion was in 1281."
        }
      },
      {
        "year": 1333,
        "title": {
          "fa": "فروپاشی شوگونی کاماکورا",
          "en": "The Kamakura shogunate falls"
        },
        "text": {
          "fa": "امپراتور گو-دایگو برای مدتی قدرت را به دست گرفت.",
          "en": "Emperor Go-Daigo took power for a time."
        }
      },
      {
        "year": 1336,
        "title": {
          "fa": "شوگونی موروماچی",
          "en": "The Muromachi shogunate"
        },
        "text": {
          "fa": "آشیکاگا تاکائوجی حکومت نظامی تازه‌ای در کیوتو بنیان گذاشت.",
          "en": "Ashikaga Takauji founded a new military government in Kyoto."
        }
      },
      {
        "year": 1467,
        "yearText": {
          "fa": "۱۴۶۷ تا ۱۴۷۷",
          "en": "1467 to 1477"
        },
        "title": {
          "fa": "جنگ اونین",
          "en": "The Ōnin War"
        },
        "text": {
          "fa": "قدرت مرکزی از میان رفت و دوره‌ی کشورهای در حال جنگ آغاز شد.",
          "en": "Central authority collapsed and the Warring States period began."
        }
      },
      {
        "year": 1543,
        "title": {
          "fa": "رسیدن پرتغالی‌ها",
          "en": "The Portuguese arrive"
        },
        "text": {
          "fa": "پرتغالی‌ها در تانه‌گاشیما تفنگ آوردند.",
          "en": "The Portuguese brought firearms at Tanegashima."
        }
      },
      {
        "year": 1549,
        "title": {
          "fa": "فرانسیس خاویر در ژاپن",
          "en": "Francis Xavier in Japan"
        },
        "text": {
          "fa": "مسیحیت در ژاپن معرفی شد.",
          "en": "Christianity was introduced in Japan."
        }
      },
      {
        "year": 1573,
        "title": {
          "fa": "پایان شوگونی آشیکاگا",
          "en": "End of the Ashikaga shogunate"
        },
        "text": {
          "fa": "نوبوناگا آخرین شوگون آشیکاگا را برکنار کرد.",
          "en": "Nobunaga deposed the last Ashikaga shogun."
        }
      },
      {
        "year": 1590,
        "title": {
          "fa": "یکپارچگی ژاپن",
          "en": "The unification of Japan"
        },
        "text": {
          "fa": "هیده‌یوشی با تصرف اوداوارا ژاپن را یکی کرد.",
          "en": "Hideyoshi unified Japan by taking Odawara."
        }
      },
      {
        "year": 1592,
        "title": {
          "fa": "حمله به کره",
          "en": "The invasion of Korea"
        },
        "text": {
          "fa": "هیده‌یوشی به کره حمله کرد؛ جنگ تا ۱۵۹۸ ادامه یافت و بی‌نتیجه ماند.",
          "en": "Hideyoshi invaded Korea; the war lasted until 1598 and came to nothing."
        }
      },
      {
        "year": 1600,
        "title": {
          "fa": "نبرد سکیگاهارا",
          "en": "The Battle of Sekigahara"
        },
        "text": {
          "fa": "در ۲۱ اکتبر ایه‌یاسو بر رقبای خود پیروز شد.",
          "en": "On 21 October Ieyasu defeated his rivals."
        }
      },
      {
        "year": 1603,
        "title": {
          "fa": "شوگونی توکوگاوا",
          "en": "The Tokugawa shogunate"
        },
        "text": {
          "fa": "ایه‌یاسو شوگون شد؛ آغاز دوره‌ی ادو.",
          "en": "Ieyasu became shogun; the start of the Edo period."
        }
      },
      {
        "year": 1637,
        "yearText": {
          "fa": "۱۶۳۷ تا ۱۶۳۸",
          "en": "1637 to 1638"
        },
        "title": {
          "fa": "شورش شیماباارا",
          "en": "The Shimabara Rebellion"
        },
        "text": {
          "fa": "شورش دهقانان و مسیحیان در کیوشو سرکوب شد.",
          "en": "A rebellion of peasants and Christians in Kyushu was put down."
        }
      },
      {
        "year": 1639,
        "title": {
          "fa": "تکمیل سیاست کشور بسته",
          "en": "The closed-country policy is completed"
        },
        "text": {
          "fa": "پرتغالی‌ها اخراج شدند و تجارت فقط با هلندی‌ها و چینی‌ها در ناگازاکی ماند.",
          "en": "The Portuguese were expelled and trade remained only with the Dutch and Chinese at Nagasaki."
        }
      },
      {
        "year": 1853,
        "title": {
          "fa": "ورود پری",
          "en": "The arrival of Perry"
        },
        "text": {
          "fa": "ناوگان آمریکایی در خلیج ادو لنگر انداخت.",
          "en": "An American fleet anchored in Edo Bay."
        }
      },
      {
        "year": 1854,
        "title": {
          "fa": "پیمان کاناگاوا",
          "en": "The Treaty of Kanagawa"
        },
        "text": {
          "fa": "دو بندر ژاپن به روی کشتی‌های آمریکایی باز شد.",
          "en": "Two Japanese ports were opened to American ships."
        }
      },
      {
        "year": 1868,
        "title": {
          "fa": "احیای میجی",
          "en": "The Meiji Restoration"
        },
        "text": {
          "fa": "قدرت به امپراتور بازگشت و ادو توکیو نامیده شد.",
          "en": "Power returned to the emperor and Edo was renamed Tokyo."
        }
      },
      {
        "year": 1871,
        "title": {
          "fa": "برچیدن حکومت‌های فئودالی",
          "en": "Abolition of the feudal domains"
        },
        "text": {
          "fa": "حکومت‌های محلی سنتی به استان‌ها تبدیل شدند.",
          "en": "The traditional domains were turned into prefectures."
        }
      },
      {
        "year": 1889,
        "title": {
          "fa": "قانون اساسی میجی",
          "en": "The Meiji Constitution"
        },
        "text": {
          "fa": "در ۱۱ فوریه نخستین قانون اساسی ژاپن صادر شد.",
          "en": "On 11 February Japan’s first constitution was issued."
        }
      },
      {
        "year": 1894,
        "yearText": {
          "fa": "۱۸۹۴ تا ۱۸۹۵",
          "en": "1894 to 1895"
        },
        "title": {
          "fa": "جنگ با چین",
          "en": "The war with China"
        },
        "text": {
          "fa": "ژاپن پیروز شد و تایوان را گرفت.",
          "en": "Japan won and took Taiwan."
        }
      },
      {
        "year": 1904,
        "yearText": {
          "fa": "۱۹۰۴ تا ۱۹۰۵",
          "en": "1904 to 1905"
        },
        "title": {
          "fa": "جنگ با روسیه",
          "en": "The war with Russia"
        },
        "text": {
          "fa": "پیروزی ژاپن نشان داد یک قدرت آسیایی می‌تواند قدرتی اروپایی را شکست دهد.",
          "en": "Japan’s victory showed that an Asian power could defeat a European one."
        }
      },
      {
        "year": 1910,
        "title": {
          "fa": "ضمیمه‌شدن کره",
          "en": "The annexation of Korea"
        },
        "text": {
          "fa": "کره تا ۱۹۴۵ زیر حکومت ژاپن بود.",
          "en": "Korea remained under Japanese rule until 1945."
        }
      },
      {
        "year": 1923,
        "title": {
          "fa": "زمین‌لرزه‌ی بزرگ کانتو",
          "en": "The Great Kantō earthquake"
        },
        "text": {
          "fa": "در ۱ سپتامبر توکیو و یوکوهاما ویران شد و بیش از صد هزار نفر کشته شدند.",
          "en": "On 1 September Tokyo and Yokohama were devastated and more than a hundred thousand people died."
        }
      },
      {
        "year": 1931,
        "title": {
          "fa": "حمله به منچوری",
          "en": "The invasion of Manchuria"
        },
        "text": {
          "fa": "نیروهای ژاپنی منچوری را گرفتند.",
          "en": "Japanese forces took Manchuria."
        }
      },
      {
        "year": 1937,
        "title": {
          "fa": "جنگ تمام‌عیار با چین",
          "en": "Full-scale war with China"
        },
        "text": {
          "fa": "جنگ دوم چین و ژاپن آغاز شد.",
          "en": "The Second Sino-Japanese War began."
        }
      },
      {
        "year": 1941,
        "title": {
          "fa": "حمله به پرل هاربر",
          "en": "The attack on Pearl Harbor"
        },
        "text": {
          "fa": "در ۷ دسامبر ژاپن به پایگاه آمریکا حمله کرد و جنگ اقیانوس آرام آغاز شد.",
          "en": "On 7 December Japan attacked the American base and the Pacific War began."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "بمباران اتمی هیروشیما و ناگازاکی",
          "en": "The atomic bombings of Hiroshima and Nagasaki"
        },
        "text": {
          "fa": "در ۶ و ۹ اوت بیش از صد هزار نفر کشته شدند.",
          "en": "On 6 and 9 August more than a hundred thousand people died."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "تسلیم ژاپن",
          "en": "The surrender of Japan"
        },
        "text": {
          "fa": "امپراتور در ۱۵ اوت تسلیم را اعلام کرد و سند تسلیم در ۲ سپتامبر امضا شد.",
          "en": "The emperor announced the surrender on 15 August and the surrender document was signed on 2 September."
        }
      },
      {
        "year": 1947,
        "title": {
          "fa": "قانون اساسی جدید",
          "en": "The new constitution"
        },
        "text": {
          "fa": "از ۳ مه اجرا شد و ماده‌ی ۹ از جنگ دست کشید.",
          "en": "In force from 3 May, with Article 9 renouncing war."
        }
      },
      {
        "year": 1952,
        "title": {
          "fa": "پایان اشغال",
          "en": "End of the occupation"
        },
        "text": {
          "fa": "ژاپن استقلال کامل را بازیافت.",
          "en": "Japan regained full sovereignty."
        }
      },
      {
        "year": 1964,
        "title": {
          "fa": "المپیک توکیو و شینکانسن",
          "en": "The Tokyo Olympics and the Shinkansen"
        },
        "text": {
          "fa": "نخستین قطار سریع‌السیر جهان در آستانه‌ی بازی‌ها راه‌اندازی شد.",
          "en": "The world’s first high-speed train line opened just before the Games."
        }
      },
      {
        "year": 1968,
        "title": {
          "fa": "دومین اقتصاد جهان",
          "en": "The world’s second-largest economy"
        },
        "text": {
          "fa": "ژاپن از نظر اقتصادی از آلمان غربی پیش افتاد.",
          "en": "Japan overtook West Germany economically."
        }
      },
      {
        "year": 2011,
        "title": {
          "fa": "زمین‌لرزه و سونامی تهوکو",
          "en": "The Tōhoku earthquake and tsunami"
        },
        "text": {
          "fa": "در ۱۱ مارس نزدیک به بیست هزار کشته و ناپدید برجا ماند و حادثه‌ی فوکوشیما رخ داد.",
          "en": "On 11 March nearly twenty thousand were left dead or missing and the Fukushima accident occurred."
        }
      },
      {
        "year": 2019,
        "title": {
          "fa": "آغاز دوره‌ی ریوا",
          "en": "The start of the Reiwa era"
        },
        "text": {
          "fa": "آکیهیتو کناره‌گیری کرد و ناروهیتو امپراتور شد.",
          "en": "Akihito abdicated and Naruhito became emperor."
        }
      }
    ]
  },
  "iran": {
    "sections": [
      {
        "id": "origins",
        "title": {
          "fa": "ریشه‌ها: فلات ایران و ایلام",
          "en": "Roots: the Iranian plateau and Elam"
        },
        "text": {
          "fa": [
            "نشانه‌های زندگی ساکن و کشاورزی در فلات ایران به بیش از هفت هزار سال پیش از میلاد برمی‌گردد؛ از جمله در تپه‌ی سیلک نزدیک کاشان. تمدن ایلام در جنوب غربی (خوزستان امروز) با پایتخت شوش، از حدود ۲۷۰۰ پیش از میلاد تا ۵۳۹ پیش از میلاد از کهن‌ترین تمدن‌های جهان بود و خط و زبان خود را داشت. در جنوب شرقی، فرهنگ جیرفت در هزاره‌ی سوم پیش از میلاد شناخته شده است.",
            "اقوام ایرانی‌زبان، از جمله مادها و پارس‌ها، از هزاره‌ی دوم تا آغاز هزاره‌ی نخست پیش از میلاد به فلات ایران آمدند و با مردمان بومی درآمیختند. «ایران» به معنای سرزمین آریایی‌هاست."
          ],
          "en": [
            "Signs of settled life and farming on the Iranian plateau go back more than seven thousand years BCE, among them Tepe Sialk near Kashan. The Elamite civilization in the south-west (today’s Khuzestan), with its capital at Susa, was from about 2700 BCE to 539 BCE one of the world’s oldest civilizations and had its own script and language. In the south-east the Jiroft culture is known from the third millennium BCE.",
            "Iranian-speaking peoples, among them the Medes and the Persians, came to the Iranian plateau between the second and the start of the first millennium BCE and mixed with the native peoples. ‘Iran’ means the land of the Aryans."
          ]
        }
      },
      {
        "id": "achaemenids",
        "title": {
          "fa": "ماد و هخامنشیان",
          "en": "The Medes and the Achaemenids"
        },
        "text": {
          "fa": [
            "مادها در قرن هفتم پیش از میلاد نخستین دولت ایرانی بزرگ را با پایتخت هگمتانه (همدان) ساختند و با بابل متحد شدند تا آشور را بشکنند؛ نینوا در ۶۱۲ پیش از میلاد سقوط کرد. کوروش دوم (کوروش بزرگ)، پادشاه پارس، حدود ۵۵۰ پیش از میلاد ماد را شکست داد و شاهنشاهی هخامنشی را بنیان گذاشت. او لیدیه را گرفت و در ۵۳۹ پیش از میلاد وارد بابل شد. «استوانه‌ی کوروش» که درباره‌ی رفتار او با مردم بابل است، برخی آن را یکی از نخستین بیانیه‌های حقوق انسان می‌دانند؛ این برداشت محل بحث مورخان است. بنا بر روایت کتاب عزرا، او به یهودیان تبعیدی اجازه‌ی بازگشت داد.",
            "داریوش بزرگ (۵۲۲ تا ۴۸۶ پیش از میلاد) شاهنشاهی را به ایالت‌هایی (ساتراپی) تقسیم کرد، راه شاهی و نظام مالیاتی ساخت و ساخت تخت جمشید را از حدود ۵۱۸ پیش از میلاد آغاز کرد. شاهنشاهی هخامنشی از دره‌ی سند تا مصر و آسیای صغیر گسترده بود. جنگ‌های ایران و یونان (ماراتن ۴۹۰، سالامیس ۴۸۰ پیش از میلاد) بی‌نتیجه ماند. اسکندر مقدونی در ۳۳۱ پیش از میلاد در گوگمل داریوش سوم را شکست داد و در ۳۳۰ تخت جمشید را سوزاند."
          ],
          "en": [
            "In the seventh century BCE the Medes built the first great Iranian state with its capital at Ecbatana (Hamadan) and allied with Babylon to break Assyria; Nineveh fell in 612 BCE. Cyrus II (Cyrus the Great), king of Persia, defeated the Medes around 550 BCE and founded the Achaemenid Empire. He took Lydia and entered Babylon in 539 BCE. The ‘Cyrus Cylinder’, about his treatment of the people of Babylon, is regarded by some as one of the first declarations of human rights; historians debate this view. According to the Book of Ezra he allowed exiled Jews to return.",
            "Darius the Great (522 to 486 BCE) divided the empire into provinces (satrapies), built the Royal Road and a tax system, and began the construction of Persepolis from about 518 BCE. The Achaemenid Empire stretched from the Indus valley to Egypt and Asia Minor. The Greco-Persian wars (Marathon 490, Salamis 480 BCE) came to no decisive end. Alexander of Macedon defeated Darius III at Gaugamela in 331 BCE and burned Persepolis in 330."
          ]
        }
      },
      {
        "id": "parthians",
        "title": {
          "fa": "اسکندر، سلوکیان و اشکانیان",
          "en": "Alexander, the Seleucids and the Parthians"
        },
        "text": {
          "fa": [
            "پس از اسکندر، سلوکیان از ۳۱۲ پیش از میلاد بر بخش بزرگی از ایران حکم راندند و فرهنگ یونانی در شهرهای ایران نفوذ کرد. حدود ۲۴۷ پیش از میلاد اشک اول، رهبر قبیله‌ی پرنی، قدرت اشکانیان را بنیان گذاشت.",
            "اشکانیان (حدود ۲۴۷ پیش از میلاد تا ۲۲۴ میلادی) نزدیک پنج قرن با روم رقابت کردند. در نبرد حران (۵۳ پیش از میلاد) سپاه ایران به سرداری سورنا کراسوس، سردار روم، را شکست داد. شاهنشاهی اشکانی نظامی نیمه‌متمرکز داشت و راه ابریشم را میان چین و روم کنترل می‌کرد."
          ],
          "en": [
            "After Alexander, the Seleucids ruled much of Iran from 312 BCE and Greek culture spread in Iranian cities. Around 247 BCE Arsaces I, leader of the Parni tribe, founded Parthian power.",
            "The Parthians (about 247 BCE to 224 CE) competed with Rome for nearly five centuries. At the Battle of Carrhae (53 BCE) the Iranian army under Surena defeated the Roman general Crassus. The Parthian Empire had a semi-centralized system and controlled the Silk Road between China and Rome."
          ]
        }
      },
      {
        "id": "sasanians",
        "title": {
          "fa": "ساسانیان",
          "en": "The Sasanians"
        },
        "text": {
          "fa": [
            "اردشیر اول در ۲۲۴ میلادی آخرین شاه اشکانی را شکست داد و شاهنشاهی ساسانی (۲۲۴ تا ۶۵۱) را بنیان گذاشت. ساسانیان دولتی بسیار متمرکز ساختند و آیین زرتشتی را به دین رسمی تبدیل کردند. شاپور اول در ۲۶۰ والریانوس، امپراتور روم، را اسیر کرد؛ رویدادی که در نقش‌برجسته‌های نقش رستم و بیشاپور ثبت شده است.",
            "خسرو اول (انوشیروان، ۵۳۱ تا ۵۷۹) اصلاحات مالیاتی و اداری انجام داد و شهر جندی‌شاپور مرکز دانش پزشکی و فلسفه بود. جنگ‌های طولانی با روم شرقی (بیزانس)، از جمله در دوره‌ی خسرو دوم (۶۰۲ تا ۶۲۸)، هر دو دولت را فرسود. سپاه عرب در نبردهای قادسیه (حدود ۶۳۶) و نهاوند (۶۴۲) ایران را شکست داد و یزدگرد سوم آخرین شاه ساسانی در ۶۵۱ کشته شد."
          ],
          "en": [
            "In 224 CE Ardashir I defeated the last Parthian king and founded the Sasanian Empire (224 to 651). The Sasanians built a highly centralized state and made Zoroastrianism the state religion. In 260 Shapur I captured Valerian, the Roman emperor, an event recorded in the rock reliefs at Naqsh-e Rostam and Bishapur.",
            "Khosrow I (Anushirvan, 531 to 579) carried out tax and administrative reforms, and the city of Gundeshapur was a centre of medical and philosophical learning. Long wars with the Eastern Roman (Byzantine) Empire, including under Khosrow II (602 to 628), wore both states down. The Arab army defeated Iran at the battles of al-Qadisiyyah (about 636) and Nahavand (642), and Yazdegerd III, the last Sasanian king, was killed in 651."
          ]
        }
      },
      {
        "id": "islamic-age",
        "title": {
          "fa": "ایران پس از اسلام و احیای زبان فارسی",
          "en": "Iran after Islam and the revival of Persian"
        },
        "text": {
          "fa": [
            "گرویدن ایرانیان به اسلام تدریجی بود و چند قرن طول کشید. ایرانیان در خلافت عباسی (از ۷۵۰، با انقلابی که از خراسان آغاز شد) نقش بزرگی در دیوان‌سالاری، علم و فرهنگ داشتند. زبان فارسی به خط عربی و با واژه‌های عربی نوشته شد، اما زنده ماند: سامانیان (۸۱۹ تا ۹۹۹) در خراسان و ماوراءالنهر شعر و نثر فارسی را حمایت کردند. رودکی را پدر شعر فارسی می‌دانند و فردوسی «شاهنامه» را در ۱۰۱۰ به پایان رساند، منظومه‌ای حدود پنجاه هزار بیتی که تاریخ و اسطوره‌ی ایران باستان را روایت می‌کند.",
            "در همین دوران دانشمندان ایرانی‌تبار در جهان اسلام از بزرگ‌ترین دانشمندان جهان بودند: خوارزمی در ریاضی، رازی در پزشکی، ابن سینا که «قانون در طب» او قرن‌ها در اروپا تدریس شد، و ابوریحان بیرونی."
          ],
          "en": [
            "The conversion of Iranians to Islam was gradual and took several centuries. Iranians played a great part in administration, science and culture under the Abbasid caliphate (from 750, with a revolution that began in Khorasan). The Persian language was written in the Arabic script and with Arabic words, but it survived: the Samanids (819 to 999) in Khorasan and Transoxiana supported Persian poetry and prose. Rudaki is regarded as the father of Persian poetry and Ferdowsi finished the Shahnameh in 1010, a poem of about fifty thousand couplets that tells the history and myths of ancient Iran.",
            "In the same period Iranian-born scholars were among the world’s greatest: al-Khwarizmi in mathematics, al-Razi in medicine, Ibn Sina, whose Canon of Medicine was taught in Europe for centuries, and Abu Rayhan al-Biruni."
          ]
        }
      },
      {
        "id": "turkic-mongol",
        "title": {
          "fa": "غزنویان، سلجوقیان، مغول و تیموریان",
          "en": "The Ghaznavids, Seljuks, Mongols and Timurids"
        },
        "text": {
          "fa": [
            "از قرن دهم میلادی سلسله‌های ترک‌تبار بر ایران حکم راندند: غزنویان (۹۷۷ تا ۱۱۸۶) و سلجوقیان (از ۱۰۳۷). طغرل سلجوقی در ۱۰۵۵ بغداد را گرفت. خواجه نظام‌الملک، وزیر سلجوقیان، نظام آموزشی و اداری را سامان داد و خیام در همین دوران ریاضی‌دان و ستاره‌شناس بود. ادبیات فارسی در قرن‌های بعد به اوج رسید: عطار، مولوی، سعدی (گلستان، ۱۲۵۸) و حافظ.",
            "حمله‌ی مغول (۱۲۱۹ تا ۱۲۲۱) به ایران کشتار و ویرانی بسیار آورد. هولاکو در ۱۲۵۸ بغداد را گرفت و ایلخانان در ایران حکم راندند؛ غازان در ۱۲۹۵ اسلام را پذیرفت. تیمور در پایان قرن چهاردهم دوباره شهرها را ویران کرد، اما جانشینانش (تیموریان) در هرات و سمرقند دوره‌ی شکوفایی هنر و معماری را رقم زدند."
          ],
          "en": [
            "From the tenth century CE Turkic-descended dynasties ruled Iran: the Ghaznavids (977 to 1186) and the Seljuks (from 1037). The Seljuk Tughril took Baghdad in 1055. Nizam al-Mulk, vizier of the Seljuks, organized the education and administrative system, and Khayyam was a mathematician and astronomer in the same period. Persian literature reached its peak in the following centuries: Attar, Rumi, Saadi (Gulistan, 1258) and Hafez.",
            "The Mongol invasion (1219 to 1221) brought great killing and destruction to Iran. Hulagu took Baghdad in 1258 and the Ilkhans ruled in Iran; Ghazan accepted Islam in 1295. Timur destroyed cities again at the end of the fourteenth century, but his successors (the Timurids) brought about a flowering of art and architecture in Herat and Samarkand."
          ]
        }
      },
      {
        "id": "safavids",
        "title": {
          "fa": "صفویان",
          "en": "The Safavids"
        },
        "text": {
          "fa": [
            "شاه اسماعیل اول در ۱۵۰۱ در تبریز خود را شاه اعلام کرد و مذهب شیعه‌ی دوازده‌امامی را مذهب رسمی ایران ساخت؛ تصمیمی که هویت ایران را تا امروز شکل داده است. او در ۱۵۱۴ در چالدران از عثمانی شکست خورد.",
            "شاه عباس اول (۱۵۸۸ تا ۱۶۲۹) اوج صفویان بود: ارتش را اصلاح کرد، در ۱۵۹۸ پایتخت را به اصفهان برد و میدان نقش جهان و مسجد شاه را ساخت. در ۱۶۲۲ هرمز را از پرتغالی‌ها پس گرفت. ایران در این دوران با صنایع دستی، به‌ویژه فرش و ابریشم، با اروپا تجارت می‌کرد. صفویان پس از شاه عباس کم‌کم ضعیف شدند و در ۱۷۲۲ افغان‌ها به رهبری محمود هوتک اصفهان را گرفتند."
          ],
          "en": [
            "Shah Ismail I declared himself shah in Tabriz in 1501 and made Twelver Shia Islam the official religion of Iran, a decision that has shaped Iran’s identity to this day. He was defeated by the Ottomans at Chaldiran in 1514.",
            "Shah Abbas I (1588 to 1629) was the peak of the Safavids: he reformed the army, moved the capital to Isfahan in 1598, and built Naqsh-e Jahan Square and the Shah Mosque. In 1622 he retook Hormuz from the Portuguese. In this period Iran traded with Europe in handicrafts, above all carpets and silk. After Shah Abbas the Safavids gradually weakened, and in 1722 the Afghans under Mahmud Hotak took Isfahan."
          ]
        }
      },
      {
        "id": "qajar",
        "title": {
          "fa": "افشاریان، زندیان و قاجاریان",
          "en": "The Afsharids, Zands and Qajars"
        },
        "text": {
          "fa": [
            "نادر شاه افشار افغان‌ها را راند و در ۱۷۳۶ شاه شد. در ۱۷۳۹ دهلی را گرفت و تخت طاووس و الماس کوه نور را به ایران آورد. او در ۱۷۴۷ ترور شد. کریم‌خان زند (۱۷۵۱ تا ۱۷۷۹) از شیراز دوره‌ای نسبتاً آرام را برپا کرد.",
            "آقامحمدخان قاجار تهران را پایتخت کرد و در ۱۷۹۶ تاج‌گذاری کرد. قاجاریان (۱۷۹۶ تا ۱۹۲۵) در جنگ با روسیه سرزمین‌های قفقاز را از دست دادند؛ پیمان گلستان (۱۸۱۳) و ترکمانچای (۱۸۲۸). ایران میان رقابت روسیه و بریتانیا (بازی بزرگ) قرار گرفت. امیرکبیر، صدراعظم ناصرالدین‌شاه، دارالفنون را در ۱۸۵۱ بنیان گذاشت و در ۱۸۵۲ کشته شد. اعتراض تنباکو (۱۲۷۰ خورشیدی، ۱۸۹۱ تا ۱۸۹۲) نشان داد که علما و مردم می‌توانند بر دولت اثر بگذارند."
          ],
          "en": [
            "Nader Shah Afshar drove out the Afghans and became shah in 1736. In 1739 he took Delhi and brought the Peacock Throne and the Koh-i-Noor diamond to Iran. He was assassinated in 1747. Karim Khan Zand (1751 to 1779) set up a relatively calm period from Shiraz.",
            "Agha Mohammad Khan Qajar made Tehran the capital and was crowned in 1796. The Qajars (1796 to 1925) lost the Caucasus territories in wars with Russia; the treaties of Gulistan (1813) and Turkmenchay (1828). Iran was caught between the rivalry of Russia and Britain (the Great Game). Amir Kabir, chief minister of Naser al-Din Shah, founded Dar ul-Funun in 1851 and was killed in 1852. The Tobacco Protest (1891 to 1892) showed that the clergy and the people could influence the state."
          ]
        }
      },
      {
        "id": "pahlavi",
        "title": {
          "fa": "مشروطه و دوره‌ی پهلوی",
          "en": "The Constitutional Revolution and the Pahlavi period"
        },
        "text": {
          "fa": [
            "انقلاب مشروطه (۱۲۸۵ تا ۱۲۹۰ خورشیدی، ۱۹۰۵ تا ۱۹۱۱) استبداد را محدود کرد: مظفرالدین‌شاه در ۱۴ مرداد ۱۲۸۵ (۵ اوت ۱۹۰۶) فرمان مشروطه را امضا کرد و نخستین مجلس شورای ملی گشایش یافت. محمدعلی‌شاه در ۱۹۰۸ مجلس را به توپ بست و بعد از مقاومت مشروطه‌خواهان برکنار شد. در ۱۹۰۸ نفت در مسجد سلیمان کشف شد و شرکت نفت انگلیس و ایران (۱۹۰۹) شکل گرفت.",
            "رضاخان در ۱۲۹۹ خورشیدی (۱۹۲۱) کودتا کرد، در ۱۹۲۵ شاه شد و پهلوی را بنیان گذاشت. او ارتش، راه‌آهن، دانشگاه تهران (۱۹۳۴) و آموزش نوین را گسترش داد و دولت را متمرکز کرد؛ سیاست‌های او مانند کشف حجاب اجباری (۱۹۳۶) مخالفان بسیار داشت. در ۱۹۴۱ متفقین ایران را اشغال کردند و او کنار رفت. پسرش محمدرضا پهلوی شاه شد.",
            "دکتر محمد مصدق، نخست‌وزیر از ۱۹۵۱، صنعت نفت را ملی کرد. با کودتای ۲۸ مرداد ۱۳۳۲ (۱۹ اوت ۱۹۵۳) که با دخالت سازمان‌های اطلاعاتی آمریکا و بریتانیا انجام شد، او برکنار شد. شاه در دهه‌های بعد با اصلاحات «انقلاب سفید» (۱۹۶۳، شامل اصلاحات ارضی و حق رأی زنان) و درآمد نفت کشور را نوسازی کرد، اما حکومت او استبدادی بود و ساواک مخالفان را سرکوب می‌کرد."
          ],
          "en": [
            "The Constitutional Revolution (1905 to 1911) limited autocracy: Mozaffar ad-Din Shah signed the constitutional decree on 5 August 1906 and the first National Consultative Assembly opened. Mohammad Ali Shah bombarded the Majlis in 1908 and was removed after the resistance of the constitutionalists. In 1908 oil was discovered at Masjed Soleiman and the Anglo-Persian Oil Company (1909) took shape.",
            "Reza Khan staged a coup in 1921, became shah in 1925 and founded the Pahlavi dynasty. He expanded the army, the railway, the University of Tehran (1934) and modern education and centralized the state; his policies, such as the compulsory unveiling of 1936, had many opponents. In 1941 the Allies occupied Iran and he stepped down. His son Mohammad Reza Pahlavi became shah.",
            "Dr Mohammad Mosaddegh, prime minister from 1951, nationalized the oil industry. In the coup of 19 August 1953, carried out with the involvement of American and British intelligence services, he was removed. In the following decades the shah modernized the country with the ‘White Revolution’ reforms (1963, including land reform and the vote for women) and oil income, but his rule was autocratic and SAVAK suppressed opponents."
          ]
        }
      },
      {
        "id": "revolution",
        "title": {
          "fa": "انقلاب ۱۳۵۷ و جمهوری اسلامی",
          "en": "The 1979 revolution and the Islamic Republic"
        },
        "text": {
          "fa": [
            "اعتراض‌ها از ۱۳۵۶ خورشیدی (۱۹۷۷) آغاز شد و در سال ۱۳۵۷ گسترده شد؛ مخالفان از گروه‌های مذهبی، چپ و ملی‌گرا بودند. شاه در ۲۶ دی ۱۳۵۷ (۱۶ ژانویه ۱۹۷۹) از ایران رفت و آیت‌الله خمینی در ۱۲ بهمن (۱ فوریه) از تبعید بازگشت. پیروزی انقلاب را ۲۲ بهمن ۱۳۵۷ (۱۱ فوریه ۱۹۷۹) می‌دانند. پس از همه‌پرسی (۱۰ و ۱۱ فروردین ۱۳۵۸)، جمهوری اسلامی در ۱۲ فروردین (۱ آوریل ۱۹۷۹) اعلام شد و قانون اساسی آن در پاییز همان سال تصویب شد؛ قانونی که بر پایه‌ی ولایت فقیه نهادهای انتخابی (رئیس‌جمهور، مجلس) و نهادهای غیرانتخابی زیر نظر رهبر را کنار هم می‌گذارد. گروگان‌گیری دیپلمات‌های آمریکایی در سفارت آمریکا از ۱۳ آبان ۱۳۵۸ (۴ نوامبر ۱۹۷۹) به‌مدت ۴۴۴ روز طول کشید.",
            "عراق در ۳۱ شهریور ۱۳۵۹ (۲۲ سپتامبر ۱۹۸۰) به ایران حمله کرد و جنگ ایران و عراق هشت سال طول کشید؛ قطعنامه‌ی آتش‌بس در ۲۹ مرداد ۱۳۶۷ (۲۰ اوت ۱۹۸۸) پذیرفته شد و صدها هزار نفر از دو طرف جان باختند. آیت‌الله خمینی در ۱۳ خرداد ۱۳۶۸ (۳ ژوئن ۱۹۸۹) درگذشت. پس از آن دوره‌های سازندگی، اصلاحات (از ۱۳۷۶) و دولت‌های گوناگون آمدند. توافق هسته‌ای ۲۰۱۵ میان ایران و قدرت‌های بزرگ امضا شد و آمریکا در ۲۰۱۸ از آن خارج شد. اعتراض‌های بزرگ در ۱۳۸۸، ۱۳۹۶، ۱۳۹۸ و ۱۴۰۱ با پاسخ شدید نیروهای امنیتی روبه‌رو شد. امروز ایران جمهوری اسلامی است و رهبر جمهوری اسلامی بالاترین مقام کشور است."
          ],
          "en": [
            "Protests began in 1977 and spread in 1978; the opposition came from religious, leftist and nationalist groups. The shah left Iran on 16 January 1979 and Ayatollah Khomeini returned from exile on 1 February. The victory of the revolution is dated 11 February 1979. After a referendum on 30 and 31 March the Islamic Republic was proclaimed on 1 April 1979 and its constitution was approved in the autumn of the same year; a constitution that, on the basis of the guardianship of the jurist, places elected institutions (president, parliament) alongside unelected institutions under the Supreme Leader. The hostage-taking of American diplomats at the US embassy lasted 444 days from 4 November 1979.",
            "Iraq invaded Iran on 22 September 1980 and the Iran–Iraq War lasted eight years; the ceasefire resolution was accepted on 20 August 1988 and hundreds of thousands of people died on both sides. Ayatollah Khomeini died on 3 June 1989. After that came the periods of reconstruction, reform (from 1997) and various governments. The nuclear agreement of 2015 was signed between Iran and the great powers and the United States withdrew from it in 2018. Large protests in 2009, 2017 to 2018, 2019 and 2022 were met with a heavy security response. Today Iran is an Islamic Republic and the Supreme Leader is the highest authority in the country."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -2700,
        "title": {
          "fa": "تمدن ایلام (حدود)",
          "en": "The Elamite civilization (about)"
        },
        "text": {
          "fa": "یکی از کهن‌ترین تمدن‌های جهان با پایتخت شوش در جنوب غربی ایران.",
          "en": "One of the world’s oldest civilizations, with its capital at Susa in south-western Iran."
        }
      },
      {
        "year": -612,
        "title": {
          "fa": "سقوط نینوا",
          "en": "The fall of Nineveh"
        },
        "text": {
          "fa": "مادها و بابلی‌ها آشور را شکستند.",
          "en": "The Medes and Babylonians broke Assyria."
        }
      },
      {
        "year": -550,
        "title": {
          "fa": "کوروش بر ماد پیروز می‌شود",
          "en": "Cyrus defeats the Medes"
        },
        "text": {
          "fa": "شاهنشاهی هخامنشی بنیان گذاشته شد.",
          "en": "The Achaemenid Empire was founded."
        }
      },
      {
        "year": -539,
        "title": {
          "fa": "فتح بابل و استوانه‌ی کوروش",
          "en": "The conquest of Babylon and the Cyrus Cylinder"
        },
        "text": {
          "fa": "کوروش وارد بابل شد؛ استوانه‌ی او درباره‌ی رفتارش با مردم بابل است.",
          "en": "Cyrus entered Babylon; his cylinder is about his treatment of the people of Babylon."
        }
      },
      {
        "year": -518,
        "title": {
          "fa": "آغاز ساخت تخت جمشید (حدود)",
          "en": "Construction of Persepolis begins (about)"
        },
        "text": {
          "fa": "داریوش بزرگ ساخت پایتخت تشریفاتی را آغاز کرد.",
          "en": "Darius the Great began building the ceremonial capital."
        }
      },
      {
        "year": -490,
        "title": {
          "fa": "نبرد ماراتن",
          "en": "The Battle of Marathon"
        },
        "text": {
          "fa": "سپاه ایران در جنگ با یونانیان در ماراتن شکست خورد.",
          "en": "The Iranian army was defeated by the Greeks at Marathon."
        }
      },
      {
        "year": -480,
        "title": {
          "fa": "لشکرکشی خشایارشا",
          "en": "Xerxes’s campaign"
        },
        "text": {
          "fa": "خشایارشا به یونان حمله کرد؛ نبرد دریایی سالامیس شکست او را رقم زد.",
          "en": "Xerxes invaded Greece; the naval battle of Salamis sealed his defeat."
        }
      },
      {
        "year": -330,
        "title": {
          "fa": "سقوط شاهنشاهی هخامنشی",
          "en": "The fall of the Achaemenid Empire"
        },
        "text": {
          "fa": "اسکندر تخت جمشید را سوزاند و داریوش سوم کشته شد.",
          "en": "Alexander burned Persepolis and Darius III was killed."
        }
      },
      {
        "year": -312,
        "title": {
          "fa": "آغاز سلوکیان",
          "en": "The Seleucids begin"
        },
        "text": {
          "fa": "سلوکوس بر بخش بزرگی از ایران فرمان راند.",
          "en": "Seleucus ruled much of Iran."
        }
      },
      {
        "year": -247,
        "title": {
          "fa": "آغاز اشکانیان (حدود)",
          "en": "The Parthians begin (about)"
        },
        "text": {
          "fa": "اشک اول قدرت اشکانی را بنیان گذاشت.",
          "en": "Arsaces I founded Parthian power."
        }
      },
      {
        "year": -53,
        "title": {
          "fa": "نبرد حران",
          "en": "The Battle of Carrhae"
        },
        "text": {
          "fa": "سپاه اشکانی به سرداری سورنا کراسوس، سردار روم، را شکست داد.",
          "en": "The Parthian army under Surena defeated the Roman general Crassus."
        }
      },
      {
        "year": 224,
        "title": {
          "fa": "آغاز ساسانیان",
          "en": "The Sasanians begin"
        },
        "text": {
          "fa": "اردشیر اول آخرین شاه اشکانی را شکست داد.",
          "en": "Ardashir I defeated the last Parthian king."
        }
      },
      {
        "year": 260,
        "title": {
          "fa": "اسارت والریانوس",
          "en": "The capture of Valerian"
        },
        "text": {
          "fa": "شاپور اول امپراتور روم را اسیر کرد.",
          "en": "Shapur I captured the Roman emperor."
        }
      },
      {
        "year": 531,
        "title": {
          "fa": "آغاز پادشاهی خسرو انوشیروان",
          "en": "The reign of Khosrow Anushirvan begins"
        },
        "text": {
          "fa": "خسرو اول اصلاحات مالیاتی و اداری انجام داد.",
          "en": "Khosrow I carried out tax and administrative reforms."
        }
      },
      {
        "year": 642,
        "title": {
          "fa": "نبرد نهاوند",
          "en": "The Battle of Nahavand"
        },
        "text": {
          "fa": "نیروهای عرب سپاه ساسانی را شکست دادند؛ یزدگرد سوم در ۶۵۱ کشته شد.",
          "en": "Arab forces defeated the Sasanian army; Yazdegerd III was killed in 651."
        }
      },
      {
        "year": 750,
        "title": {
          "fa": "انقلاب عباسی",
          "en": "The Abbasid Revolution"
        },
        "text": {
          "fa": "انقلابی که از خراسان آغاز شد، خلافت عباسی را به قدرت رساند.",
          "en": "A revolution that began in Khorasan brought the Abbasid caliphate to power."
        }
      },
      {
        "year": 819,
        "title": {
          "fa": "آغاز سامانیان",
          "en": "The Samanids begin"
        },
        "text": {
          "fa": "سامانیان در خراسان و ماوراءالنهر زبان و ادب فارسی را حمایت کردند.",
          "en": "The Samanids in Khorasan and Transoxiana supported the Persian language and literature."
        }
      },
      {
        "year": 1010,
        "title": {
          "fa": "پایان شاهنامه",
          "en": "The Shahnameh is completed"
        },
        "text": {
          "fa": "فردوسی منظومه‌ی شاهنامه را به پایان رساند.",
          "en": "Ferdowsi completed the Shahnameh."
        }
      },
      {
        "year": 1037,
        "title": {
          "fa": "آغاز سلجوقیان",
          "en": "The Seljuks begin"
        },
        "text": {
          "fa": "طغرل در نیشابور سلطنت خود را اعلام کرد.",
          "en": "Tughril announced his sultanate at Nishapur."
        }
      },
      {
        "year": 1055,
        "title": {
          "fa": "ورود سلجوقیان به بغداد",
          "en": "The Seljuks enter Baghdad"
        },
        "text": {
          "fa": "طغرل بغداد را گرفت.",
          "en": "Tughril took Baghdad."
        }
      },
      {
        "year": 1219,
        "yearText": {
          "fa": "۱۲۱۹ تا ۱۲۲۱",
          "en": "1219 to 1221"
        },
        "title": {
          "fa": "حمله‌ی مغول",
          "en": "The Mongol invasion"
        },
        "text": {
          "fa": "چنگیزخان به ایران حمله کرد و کشتار و ویرانی بسیار آمد.",
          "en": "Genghis Khan invaded Iran and great killing and destruction followed."
        }
      },
      {
        "year": 1258,
        "title": {
          "fa": "سقوط بغداد و آغاز ایلخانان",
          "en": "The fall of Baghdad and the start of the Ilkhans"
        },
        "text": {
          "fa": "هولاکو بغداد را گرفت و ایلخانان در ایران حکم راندند.",
          "en": "Hulagu took Baghdad and the Ilkhans ruled in Iran."
        }
      },
      {
        "year": 1295,
        "title": {
          "fa": "غازان اسلام را می‌پذیرد",
          "en": "Ghazan accepts Islam"
        },
        "text": {
          "fa": "ایلخان غازان مسلمان شد.",
          "en": "The Ilkhan Ghazan became a Muslim."
        }
      },
      {
        "year": 1370,
        "title": {
          "fa": "آغاز حکومت تیمور",
          "en": "The rule of Timur begins"
        },
        "text": {
          "fa": "تیمور در پایان قرن چهاردهم شهرهای ایران را ویران کرد.",
          "en": "Timur destroyed Iranian cities at the end of the fourteenth century."
        }
      },
      {
        "year": 1501,
        "title": {
          "fa": "آغاز صفویان",
          "en": "The Safavids begin"
        },
        "text": {
          "fa": "شاه اسماعیل در تبریز مذهب شیعه‌ی دوازده‌امامی را مذهب رسمی کرد.",
          "en": "Shah Ismail made Twelver Shia Islam the official religion at Tabriz."
        }
      },
      {
        "year": 1514,
        "title": {
          "fa": "نبرد چالدران",
          "en": "The Battle of Chaldiran"
        },
        "text": {
          "fa": "سپاه صفوی از عثمانی شکست خورد.",
          "en": "The Safavid army was defeated by the Ottomans."
        }
      },
      {
        "year": 1598,
        "title": {
          "fa": "اصفهان پایتخت می‌شود",
          "en": "Isfahan becomes the capital"
        },
        "text": {
          "fa": "شاه عباس اول پایتخت را به اصفهان برد.",
          "en": "Shah Abbas I moved the capital to Isfahan."
        }
      },
      {
        "year": 1622,
        "title": {
          "fa": "بازپس‌گیری هرمز",
          "en": "The recapture of Hormuz"
        },
        "text": {
          "fa": "شاه عباس هرمز را از پرتغالی‌ها پس گرفت.",
          "en": "Shah Abbas retook Hormuz from the Portuguese."
        }
      },
      {
        "year": 1722,
        "title": {
          "fa": "سقوط اصفهان",
          "en": "The fall of Isfahan"
        },
        "text": {
          "fa": "افغان‌ها اصفهان را گرفتند و صفویان فروپاشیدند.",
          "en": "The Afghans took Isfahan and the Safavids collapsed."
        }
      },
      {
        "year": 1736,
        "title": {
          "fa": "نادر شاه شاه می‌شود",
          "en": "Nader Shah becomes shah"
        },
        "text": {
          "fa": "نادر در دشت مغان به شاهی رسید.",
          "en": "Nader came to the throne on the Mughan plain."
        }
      },
      {
        "year": 1739,
        "title": {
          "fa": "تصرف دهلی",
          "en": "The capture of Delhi"
        },
        "text": {
          "fa": "نادر شاه تخت طاووس و الماس کوه نور را به ایران آورد.",
          "en": "Nader Shah brought the Peacock Throne and the Koh-i-Noor diamond to Iran."
        }
      },
      {
        "year": 1751,
        "title": {
          "fa": "آغاز حکومت کریم‌خان زند",
          "en": "The rule of Karim Khan Zand begins"
        },
        "text": {
          "fa": "شیراز مرکز حکومت زندیان شد.",
          "en": "Shiraz became the seat of the Zands."
        }
      },
      {
        "year": 1796,
        "title": {
          "fa": "تاج‌گذاری آقامحمدخان قاجار",
          "en": "Coronation of Agha Mohammad Khan Qajar"
        },
        "text": {
          "fa": "قاجاریان تهران را پایتخت کردند.",
          "en": "The Qajars made Tehran the capital."
        }
      },
      {
        "year": 1813,
        "title": {
          "fa": "پیمان گلستان",
          "en": "The Treaty of Gulistan"
        },
        "text": {
          "fa": "ایران بخشی از قفقاز را به روسیه واگذار کرد؛ پیمان ترکمانچای در ۱۸۲۸ آن را کامل کرد.",
          "en": "Iran ceded part of the Caucasus to Russia; the Treaty of Turkmenchay completed this in 1828."
        }
      },
      {
        "year": 1851,
        "title": {
          "fa": "تأسیس دارالفنون",
          "en": "Founding of Dar ul-Funun"
        },
        "text": {
          "fa": "امیرکبیر نخستین دانشکده‌ی نوین ایران را بنیان گذاشت.",
          "en": "Amir Kabir founded Iran’s first modern college."
        }
      },
      {
        "year": 1891,
        "yearText": {
          "fa": "۱۸۹۱ تا ۱۸۹۲",
          "en": "1891 to 1892"
        },
        "title": {
          "fa": "اعتراض تنباکو",
          "en": "The Tobacco Protest"
        },
        "text": {
          "fa": "اعتراض مردم و علما به امتیاز تنباکو به انگلیسی‌ها، که به لغو آن انجامید.",
          "en": "A protest by people and clergy against the tobacco concession to the British, which led to its cancellation."
        }
      },
      {
        "year": 1906,
        "title": {
          "fa": "مشروطیت",
          "en": "The constitution"
        },
        "text": {
          "fa": "در ۵ اوت فرمان مشروطه امضا شد و نخستین مجلس گشایش یافت.",
          "en": "On 5 August the constitutional decree was signed and the first Majlis opened."
        }
      },
      {
        "year": 1908,
        "title": {
          "fa": "کشف نفت در مسجد سلیمان",
          "en": "Oil discovered at Masjed Soleiman"
        },
        "text": {
          "fa": "نخستین چاه نفت خاورمیانه به‌طور تجاری در ایران حفر شد.",
          "en": "The Middle East’s first commercial oil well was drilled in Iran."
        }
      },
      {
        "year": 1921,
        "title": {
          "fa": "کودتای رضاخان",
          "en": "Reza Khan’s coup"
        },
        "text": {
          "fa": "در ۳ اسفند ۱۲۹۹ رضاخان قدرت را به دست گرفت.",
          "en": "Reza Khan seized power on 21 February."
        }
      },
      {
        "year": 1925,
        "title": {
          "fa": "رضاشاه و آغاز پهلوی",
          "en": "Reza Shah and the start of the Pahlavis"
        },
        "text": {
          "fa": "مجلس سلطنت را به رضاخان واگذار کرد.",
          "en": "The Majlis handed the crown to Reza Khan."
        }
      },
      {
        "year": 1935,
        "title": {
          "fa": "نام ایران در جهان",
          "en": "The name Iran in the world"
        },
        "text": {
          "fa": "به درخواست رضاشاه نام «ایران» به‌طور رسمی در جهان به کار رفت.",
          "en": "At Reza Shah’s request the name ‘Iran’ came into official use in the world."
        }
      },
      {
        "year": 1941,
        "title": {
          "fa": "اشغال ایران",
          "en": "The occupation of Iran"
        },
        "text": {
          "fa": "متفقین ایران را اشغال کردند و رضاشاه کنار رفت.",
          "en": "The Allies occupied Iran and Reza Shah stepped down."
        }
      },
      {
        "year": 1951,
        "title": {
          "fa": "ملی‌شدن صنعت نفت",
          "en": "Nationalization of the oil industry"
        },
        "text": {
          "fa": "قانون ملی‌شدن نفت در ۲۹ اسفند ۱۳۲۹ به تصویب نهایی رسید و مصدق در اردیبهشت ۱۳۳۰ نخست‌وزیر شد.",
          "en": "The oil nationalization law received final approval on 20 March and Mosaddegh became prime minister in April."
        }
      },
      {
        "year": 1953,
        "title": {
          "fa": "کودتای ۲۸ مرداد",
          "en": "The coup of 19 August"
        },
        "text": {
          "fa": "مصدق با کودتایی که آمریکا و بریتانیا در آن دخیل بودند برکنار شد.",
          "en": "Mosaddegh was removed in a coup in which the United States and Britain were involved."
        }
      },
      {
        "year": 1963,
        "title": {
          "fa": "انقلاب سفید",
          "en": "The White Revolution"
        },
        "text": {
          "fa": "اصلاحات ارضی و حق رأی زنان از جمله‌ی آن‌ها بود.",
          "en": "Land reform and the vote for women were among its measures."
        }
      },
      {
        "year": 1971,
        "title": {
          "fa": "جشن‌های دوهزار و پانصدساله",
          "en": "The 2,500-year celebrations"
        },
        "text": {
          "fa": "جشن بزرگ در تخت جمشید برگزار شد.",
          "en": "A grand celebration was held at Persepolis."
        }
      },
      {
        "year": 1979,
        "title": {
          "fa": "انقلاب ۱۳۵۷",
          "en": "The 1979 revolution"
        },
        "text": {
          "fa": "شاه ایران را ترک کرد، خمینی بازگشت و در ۲۲ بهمن انقلاب پیروز شد؛ در ۱۲ فروردین ۱۳۵۸ جمهوری اسلامی اعلام شد.",
          "en": "The shah left Iran, Khomeini returned and the revolution won on 11 February; the Islamic Republic was proclaimed on 1 April."
        }
      },
      {
        "year": 1979,
        "title": {
          "fa": "گروگان‌گیری در سفارت آمریکا",
          "en": "The hostage crisis at the US embassy"
        },
        "text": {
          "fa": "از ۴ نوامبر ۴۴۴ روز طول کشید.",
          "en": "It lasted 444 days from 4 November."
        }
      },
      {
        "year": 1980,
        "yearText": {
          "fa": "۱۹۸۰ تا ۱۹۸۸",
          "en": "1980 to 1988"
        },
        "title": {
          "fa": "جنگ ایران و عراق",
          "en": "The Iran–Iraq War"
        },
        "text": {
          "fa": "هشت سال جنگ که با آتش‌بس در ۲۰ اوت ۱۹۸۸ پایان یافت.",
          "en": "Eight years of war that ended with a ceasefire on 20 August 1988."
        }
      },
      {
        "year": 1989,
        "title": {
          "fa": "درگذشت آیت‌الله خمینی",
          "en": "The death of Ayatollah Khomeini"
        },
        "text": {
          "fa": "در ۱۳ خرداد ۱۳۶۸ (۳ ژوئن) درگذشت.",
          "en": "He died on 3 June."
        }
      },
      {
        "year": 1997,
        "title": {
          "fa": "دوره‌ی اصلاحات",
          "en": "The reform period"
        },
        "text": {
          "fa": "محمد خاتمی به ریاست‌جمهوری رسید.",
          "en": "Mohammad Khatami was elected president."
        }
      },
      {
        "year": 2015,
        "title": {
          "fa": "توافق هسته‌ای",
          "en": "The nuclear agreement"
        },
        "text": {
          "fa": "در ۱۴ ژوئیه ایران و قدرت‌های بزرگ توافق کردند؛ آمریکا در ۲۰۱۸ از آن خارج شد.",
          "en": "On 14 July Iran and the great powers reached an agreement; the United States withdrew in 2018."
        }
      }
    ]
  }
};
