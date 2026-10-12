import { Figure } from '../../types';

/**
 * Detailed biographies for the figures of the nine detailed countries.
 * src/data/figures/index.ts merges them with the shorter entries:
 * the biography, achievements and era come from here, while name, summary,
 * quote and 'added' are kept from the original entries when a figure exists in both.
 */
export const FIGURES_DETAILED: Figure[] = [
  {
    "id": "otto-i",
    "name": {
      "fa": "اتو اول",
      "en": "Otto I"
    },
    "country": "germany",
    "field": "politics",
    "born": 912,
    "died": 973,
    "summary": {
      "fa": "نخستین امپراتور امپراتوری مقدس روم",
      "en": "First emperor of the Holy Roman Empire"
    },
    "bio": {
      "fa": [
        "اتو اول از سال ۹۳۶ پادشاه شرق فرانکی بود و در سال ۹۶۲ در رم از سوی پاپ یوحنای دوازدهم تاج امپراتوری گرفت. تاج‌گذاری او را آغاز سنتی امپراتوری مقدس روم می‌دانند."
      ],
      "en": [
        "Otto I was king of East Francia from 936 and was crowned emperor in Rome by Pope John XII in 962. His coronation is traditionally seen as the beginning of the Holy Roman Empire."
      ]
    },
    "achievements": {
      "fa": [
        "پیروزی بر مجارها در نبرد لخفلد (۹۵۵)",
        "تاج امپراتوری در سال ۹۶۲",
        "تقویت قدرت پادشاه در برابر دوک‌های بزرگ"
      ],
      "en": [
        "Victory over the Magyars at the Battle of Lechfeld (955)",
        "Imperial crown in 962",
        "Strengthened royal power against the great dukes"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "gutenberg",
    "name": {
      "fa": "یوهانس گوتنبرگ",
      "en": "Johannes Gutenberg"
    },
    "country": "germany",
    "field": "invention",
    "born": 1400,
    "died": 1468,
    "summary": {
      "fa": "مخترع چاپ با حروف متحرک در اروپا",
      "en": "Introduced movable-type printing to Europe"
    },
    "bio": {
      "fa": [
        "گوتنبرگ زرگر و مخترعی اهل ماینتس بود. زندگی او در منابع کم‌سند است و سال تولدش حدود ۱۴۰۰ برآورد می‌شود.",
        "او حدود سال ۱۴۵۰ ماشین چاپ با حروف متحرک را در اروپا به کار انداخت. «انجیل گوتنبرگ» که حدود ۱۴۵۵ چاپ شد، از نخستین کتاب‌های بزرگ چاپی اروپاست."
      ],
      "en": [
        "Gutenberg was a goldsmith and inventor from Mainz. His life is poorly documented and his birth year is estimated at about 1400.",
        "Around 1450 he put the movable-type printing press into use in Europe. The Gutenberg Bible, printed about 1455, is among the first major printed books in Europe."
      ]
    },
    "achievements": {
      "fa": [
        "چاپ با حروف متحرک در اروپا",
        "انجیل گوتنبرگ (حدود ۱۴۵۵)",
        "ارزان‌تر و پرشمارتر شدن کتاب"
      ],
      "en": [
        "Movable-type printing in Europe",
        "The Gutenberg Bible (about 1455)",
        "Made books cheaper and more numerous"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "luther",
    "name": {
      "fa": "مارتین لوتر",
      "en": "Martin Luther"
    },
    "country": "germany",
    "field": "thought",
    "born": 1483,
    "died": 1546,
    "summary": {
      "fa": "راهب و الهی‌دان، آغازگر اصلاحات دینی",
      "en": "Monk and theologian who started the Reformation"
    },
    "bio": {
      "fa": [
        "مارتین لوتر راهب و استاد الهیات بود. در ۱۵۱۷ نود و پنج تز او درباره‌ی فروش آمرزش‌نامه‌ها جنبشی را آغاز کرد که مسیحیت غربی را دگرگون کرد.",
        "او عهد جدید را به آلمانی ترجمه کرد (۱۵۲۲) و ترجمه‌ی کامل کتاب مقدس او در ۱۵۳۴ منتشر شد؛ کاری که در شکل‌گیری زبان نوشتاری آلمانی نقش مهمی داشت."
      ],
      "en": [
        "Martin Luther was a monk and professor of theology. In 1517 his Ninety-five Theses on the sale of indulgences started a movement that changed Western Christianity.",
        "He translated the New Testament into German (1522), and his complete Bible translation appeared in 1534, a work that played a major role in shaping written German."
      ]
    },
    "achievements": {
      "fa": [
        "نود و پنج تز (۱۵۱۷)",
        "ترجمه‌ی کتاب مقدس به آلمانی",
        "آغاز اصلاحات پروتستانی"
      ],
      "en": [
        "The Ninety-five Theses (1517)",
        "Translation of the Bible into German",
        "Start of the Protestant Reformation"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "kepler",
    "name": {
      "fa": "یوهانس کپلر",
      "en": "Johannes Kepler"
    },
    "country": "germany",
    "field": "science",
    "born": 1571,
    "died": 1630,
    "summary": {
      "fa": "ستاره‌شناس و کاشف قوانین حرکت سیارات",
      "en": "Astronomer who discovered the laws of planetary motion"
    },
    "bio": {
      "fa": [
        "کپلر ستاره‌شناس و ریاضی‌دان آلمانی بود. او با تحلیل مشاهدات دقیق تیکو براهه نشان داد که سیارات در مدارهایی بیضوی به دور خورشید می‌گردند."
      ],
      "en": [
        "Kepler was a German astronomer and mathematician. By analysing the precise observations of Tycho Brahe he showed that the planets move around the Sun in elliptical orbits."
      ]
    },
    "achievements": {
      "fa": [
        "سه قانون حرکت سیارات (۱۶۰۹ و ۱۶۱۹)",
        "کتاب «ستاره‌شناسی نوین» (۱۶۰۹)"
      ],
      "en": [
        "Three laws of planetary motion (1609 and 1619)",
        "The book Astronomia nova (1609)"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "bach",
    "name": {
      "fa": "یوهان سباستین باخ",
      "en": "Johann Sebastian Bach"
    },
    "country": "germany",
    "field": "arts",
    "born": 1685,
    "died": 1750,
    "summary": {
      "fa": "آهنگساز بزرگ دوره‌ی باروک",
      "en": "Great composer of the Baroque period"
    },
    "bio": {
      "fa": [
        "باخ در آیزناخ به دنیا آمد و بیشتر عمرش را به‌عنوان نوازنده‌ی ارگ و رهبر موسیقی کلیسا و دربار کار کرد؛ سال‌های پایانی عمرش را در لایپزیگ گذراند. موسیقی او در زمان زندگی‌اش بیشتر در آلمان شناخته بود و ارزش جهانی‌اش بعدها شناخته شد."
      ],
      "en": [
        "Bach was born in Eisenach and spent most of his life as an organist and as a director of music for churches and courts; he spent his last years in Leipzig. During his lifetime his music was known mainly in Germany, and its worldwide value was recognized later."
      ]
    },
    "achievements": {
      "fa": [
        "کنسرتوهای براندنبورگ",
        "گذر مسیح بر اساس متی",
        "مس در سی مینور",
        "کلاویه‌ی خوش‌کوک"
      ],
      "en": [
        "The Brandenburg Concertos",
        "St Matthew Passion",
        "Mass in B minor",
        "The Well-Tempered Clavier"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "kant",
    "name": {
      "fa": "ایمانوئل کانت",
      "en": "Immanuel Kant"
    },
    "country": "germany",
    "field": "thought",
    "born": 1724,
    "died": 1804,
    "summary": {
      "fa": "فیلسوف بزرگ عصر روشنگری",
      "en": "Major philosopher of the Enlightenment"
    },
    "bio": {
      "fa": [
        "کانت در کونیگسبرگ، که آن زمان در پروس بود (امروز کالینینگراد در روسیه)، به دنیا آمد و تقریباً تمام عمرش را همان‌جا گذراند و تدریس کرد.",
        "کتاب «نقد عقل محض» (۱۷۸۱) او پرسش‌هایی درباره‌ی حدود شناخت انسان را مطرح کرد و بر فلسفه‌ی پس از خود اثری عمیق گذاشت."
      ],
      "en": [
        "Kant was born in Königsberg, then in Prussia (today Kaliningrad in Russia), and spent almost his whole life teaching there.",
        "His Critique of Pure Reason (1781) raised questions about the limits of human knowledge and left a deep mark on later philosophy."
      ]
    },
    "achievements": {
      "fa": [
        "نقد عقل محض (۱۷۸۱)",
        "مقاله‌ی «روشنگری چیست؟» (۱۷۸۴)",
        "آثار مهم در اخلاق"
      ],
      "en": [
        "Critique of Pure Reason (1781)",
        "The essay ‘What Is Enlightenment?’ (1784)",
        "Major works on ethics"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "goethe",
    "name": {
      "fa": "یوهان ولفگانگ فون گوته",
      "en": "Johann Wolfgang von Goethe"
    },
    "country": "germany",
    "field": "arts",
    "born": 1749,
    "died": 1832,
    "summary": {
      "fa": "شاعر، نمایشنامه‌نویس و دانشمند",
      "en": "Poet, playwright and scientist"
    },
    "bio": {
      "fa": [
        "گوته در فرانکفورت به دنیا آمد و بیشتر عمرش را در وایمار گذراند. جز ادبیات، در زمینه‌ی گیاه‌شناسی و نظریه‌ی رنگ هم نوشت."
      ],
      "en": [
        "Goethe was born in Frankfurt and spent most of his life in Weimar. Besides literature he also wrote on botany and on the theory of colour."
      ]
    },
    "achievements": {
      "fa": [
        "نمایشنامه‌ی فاوست",
        "رمان «رنج‌های ورتر جوان» (۱۷۷۴)",
        "نوشته‌های علمی درباره‌ی رنگ و گیاهان"
      ],
      "en": [
        "The play Faust",
        "The novel The Sorrows of Young Werther (1774)",
        "Scientific writings on colour and plants"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "beethoven",
    "name": {
      "fa": "لودویگ فان بتهوون",
      "en": "Ludwig van Beethoven"
    },
    "country": "germany",
    "field": "arts",
    "era": "modern",
    "born": 1770,
    "died": 1827,
    "summary": {
      "fa": "آهنگساز نه سمفونی بزرگ",
      "en": "Composer of nine great symphonies"
    },
    "bio": {
      "fa": [
        "بتهوون در بن به دنیا آمد (سال تولد ۱۷۷۰ است و تاریخ دقیق آن مشخص نیست) و بیشتر عمرش را در وین گذراند. شنوایی‌اش به‌تدریج ضعیف شد و او در سال‌های پایانی عمر کاملاً ناشنوا بود، اما به آهنگسازی ادامه داد."
      ],
      "en": [
        "Beethoven was born in Bonn (the year was 1770, the exact date is unknown) and spent most of his life in Vienna. His hearing gradually failed and he was completely deaf in his last years, but he kept composing."
      ]
    },
    "achievements": {
      "fa": [
        "نه سمفونی",
        "سونات‌های پیانو",
        "سمفونی نهم با سرود شادی"
      ],
      "en": [
        "Nine symphonies",
        "Piano sonatas",
        "The Ninth Symphony with its Ode to Joy"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "bismarck",
    "name": {
      "fa": "اتو فون بیسمارک",
      "en": "Otto von Bismarck"
    },
    "country": "germany",
    "field": "politics",
    "born": 1815,
    "died": 1898,
    "summary": {
      "fa": "سیاستمدار پروسی و نخستین صدراعظم امپراتوری آلمان",
      "en": "Prussian statesman and first chancellor of the German Empire"
    },
    "bio": {
      "fa": [
        "بیسمارک از ۱۸۶۲ نخست‌وزیر پروس بود و پس از اتحاد آلمان در ۱۸۷۱ تا ۱۸۹۰ صدراعظم امپراتوری آلمان بود.",
        "در دهه‌ی ۱۸۸۰ قوانین بیمه‌ی درمانی (۱۸۸۳)، حوادث (۱۸۸۴) و بازنشستگی (۱۸۸۹) در دوران او تصویب شد."
      ],
      "en": [
        "Bismarck was minister-president of Prussia from 1862 and, after unification in 1871, chancellor of the German Empire until 1890.",
        "In the 1880s health insurance (1883), accident insurance (1884) and old-age insurance (1889) laws were passed during his time in office."
      ]
    },
    "achievements": {
      "fa": [
        "رهبری سیاسی اتحاد آلمان (۱۸۷۱)",
        "صدراعظمی از ۱۸۷۱ تا ۱۸۹۰",
        "قوانین بیمه‌ی اجتماعی در دهه‌ی ۱۸۸۰"
      ],
      "en": [
        "Political leadership of German unification (1871)",
        "Chancellor from 1871 to 1890",
        "Social insurance laws in the 1880s"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "einstein",
    "name": {
      "fa": "آلبرت اینشتین",
      "en": "Albert Einstein"
    },
    "country": "germany",
    "field": "science",
    "born": 1879,
    "died": 1955,
    "summary": {
      "fa": "فیزیک‌دان و پدید‌آورنده‌ی نظریه‌ی نسبیت",
      "en": "Physicist who developed the theory of relativity"
    },
    "bio": {
      "fa": [
        "اینشتین در اولم آلمان به دنیا آمد. نسبیت خاص را در ۱۹۰۵ و نسبیت عام را در ۱۹۱۵ ارائه کرد و در ۱۹۲۱ جایزه‌ی نوبل فیزیک را برای توضیح اثر فوتوالکتریک گرفت.",
        "در ۱۹۳۳، هنگام قدرت‌گیری نازی‌ها، تصمیم گرفت به آلمان برنگردد و سال‌های پایانی عمرش را در آمریکا گذراند."
      ],
      "en": [
        "Einstein was born in Ulm, Germany. He presented special relativity in 1905 and general relativity in 1915, and in 1921 he received the Nobel Prize in Physics for explaining the photoelectric effect.",
        "In 1933, as the Nazis took power, he decided not to return to Germany and spent his last years in the United States."
      ]
    },
    "achievements": {
      "fa": [
        "نسبیت خاص (۱۹۰۵)",
        "نسبیت عام (۱۹۱۵)",
        "جایزه‌ی نوبل فیزیک (۱۹۲۱)"
      ],
      "en": [
        "Special relativity (1905)",
        "General relativity (1915)",
        "Nobel Prize in Physics (1921)"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "merkel",
    "name": {
      "fa": "آنگلا مرکل",
      "en": "Angela Merkel"
    },
    "country": "germany",
    "field": "politics",
    "born": 1954,
    "died": null,
    "summary": {
      "fa": "نخستین زن صدراعظم آلمان",
      "en": "First woman to serve as chancellor of Germany"
    },
    "bio": {
      "fa": [
        "مرکل در هامبورگ به دنیا آمد و در آلمان شرقی بزرگ شد. او در رشته‌ی فیزیک تحصیل کرد و دکترای شیمی کوانتومی دارد. از ۲۰۰۵ تا ۲۰۲۱ صدراعظم آلمان بود و نخستین زنی است که این مقام را داشته است."
      ],
      "en": [
        "Merkel was born in Hamburg and grew up in East Germany. She studied physics and holds a doctorate in quantum chemistry. She was chancellor of Germany from 2005 to 2021 and is the first woman to hold the office."
      ]
    },
    "achievements": {
      "fa": [
        "صدراعظمی از ۲۰۰۵ تا ۲۰۲۱",
        "رهبری حزب دموکرات مسیحی (۲۰۰۰ تا ۲۰۱۸)"
      ],
      "en": [
        "Chancellor from 2005 to 2021",
        "Leader of the Christian Democratic Union (2000 to 2018)"
      ]
    },
    "added": "2026-10-06"
  },
  {
    "id": "julius-caesar",
    "name": {
      "fa": "ژولیوس سزار",
      "en": "Julius Caesar"
    },
    "country": "italy",
    "field": "politics",
    "born": -100,
    "died": -44,
    "summary": {
      "fa": "سردار و سیاستمدار رومی که نظام جمهوری را به سوی امپراتوری برد",
      "en": "Roman general and statesman who pushed the Republic towards empire"
    },
    "bio": {
      "fa": [
        "سزار در سال ۱۰۰ پیش از میلاد به دنیا آمد و در جنگ‌های گال (۵۸ تا ۵۰ پیش از میلاد) کل گال را به روم افزود. در ۴۹ پیش از میلاد از روبیکون گذشت و در جنگ داخلی پیروز شد.",
        "او دیکتاتور روم شد و اصلاحاتی از جمله تقویم ژولیانی را اجرا کرد. در ۱۵ مارس ۴۴ پیش از میلاد گروهی از سناتورها او را ترور کردند."
      ],
      "en": [
        "Caesar was born in 100 BCE and in the Gallic Wars (58 to 50 BCE) added all of Gaul to Rome. In 49 BCE he crossed the Rubicon and won the civil war.",
        "He became dictator of Rome and carried out reforms, among them the Julian calendar. On 15 March 44 BCE a group of senators assassinated him."
      ]
    },
    "achievements": {
      "fa": [
        "فتح گال",
        "تقویم ژولیانی",
        "برنده‌ی جنگ داخلی ۴۹ تا ۴۵ پیش از میلاد"
      ],
      "en": [
        "Conquest of Gaul",
        "The Julian calendar",
        "Winner of the civil war of 49 to 45 BCE"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "augustus",
    "name": {
      "fa": "آگوستوس",
      "en": "Augustus"
    },
    "country": "italy",
    "field": "politics",
    "born": -63,
    "died": 14,
    "summary": {
      "fa": "نخستین امپراتور روم",
      "en": "The first Roman emperor"
    },
    "bio": {
      "fa": [
        "اکتاویان، پسرخوانده‌ی سزار، پس از ترور او وارد رقابت قدرت شد و پس از جنگ‌های داخلی بر روم مسلط شد. در ۲۷ پیش از میلاد سنا لقب آگوستوس را به او داد.",
        "دوره‌ی او دوران آرامش نسبی («صلح رومی») بود و تا مرگش در ۱۴ میلادی نظام امپراتوری را پایدار کرد."
      ],
      "en": [
        "Octavian, Caesar’s adopted son, entered the struggle for power after Caesar’s assassination and came to dominate Rome after the civil wars. In 27 BCE the Senate gave him the title Augustus.",
        "His reign was a period of relative peace (the ‘Pax Romana’), and until his death in 14 CE he made the imperial system lasting."
      ]
    },
    "achievements": {
      "fa": [
        "بنیان‌گذاری نظام امپراتوری",
        "صلح رومی",
        "بازسازی شهر رم"
      ],
      "en": [
        "Founding of the imperial system",
        "The Pax Romana",
        "Rebuilding of the city of Rome"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "dante",
    "name": {
      "fa": "دانته آلیگیری",
      "en": "Dante Alighieri"
    },
    "country": "italy",
    "field": "arts",
    "born": 1265,
    "died": 1321,
    "summary": {
      "fa": "شاعر «کمدی الهی»",
      "en": "Poet of the Divine Comedy"
    },
    "bio": {
      "fa": [
        "دانته در فلورانس به دنیا آمد. در ۱۳۰۲ در جریان کشمکش‌های سیاسی از شهر تبعید شد و دیگر بازنگشت و در راونا درگذشت.",
        "او «کمدی الهی» (حدود ۱۳۰۸ تا ۱۳۲۰) را به زبان ایتالیایی توسکانی نوشت، نه لاتین، و این کار در شکل‌گیری زبان ادبی ایتالیایی نقش مهمی داشت."
      ],
      "en": [
        "Dante was born in Florence. In 1302, amid political conflicts, he was exiled from the city and never returned; he died in Ravenna.",
        "He wrote the Divine Comedy (about 1308 to 1320) in Tuscan Italian rather than Latin, and this played an important role in shaping the Italian literary language."
      ]
    },
    "achievements": {
      "fa": [
        "کمدی الهی (دوزخ، برزخ، بهشت)",
        "پایه‌گذاری زبان ادبی ایتالیایی"
      ],
      "en": [
        "The Divine Comedy (Inferno, Purgatorio, Paradiso)",
        "Laying the base of the Italian literary language"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "leonardo",
    "name": {
      "fa": "لئوناردو داوینچی",
      "en": "Leonardo da Vinci"
    },
    "country": "italy",
    "field": "arts",
    "born": 1452,
    "died": 1519,
    "summary": {
      "fa": "نقاش، مهندس و دانشمند رنسانس",
      "en": "Painter, engineer and scientist of the Renaissance"
    },
    "bio": {
      "fa": [
        "لئوناردو در وینچی نزدیک فلورانس به دنیا آمد و در فلورانس، میلان و رم کار کرد. در ۱۵۱۶ به دعوت پادشاه فرانسه به آن کشور رفت و در ۱۵۱۹ در آمبواز درگذشت.",
        "او افزون بر نقاشی، هزاران صفحه یادداشت و طرح درباره‌ی آناتومی، مهندسی و طبیعت به جا گذاشت."
      ],
      "en": [
        "Leonardo was born in Vinci near Florence and worked in Florence, Milan and Rome. In 1516 he went to France at the invitation of its king and died in Amboise in 1519.",
        "Besides painting he left thousands of pages of notes and drawings on anatomy, engineering and nature."
      ]
    },
    "achievements": {
      "fa": [
        "مونالیزا",
        "شام آخر (حدود ۱۴۹۵ تا ۱۴۹۸)",
        "دفترچه‌های علمی و مهندسی"
      ],
      "en": [
        "The Mona Lisa",
        "The Last Supper (about 1495 to 1498)",
        "Scientific and engineering notebooks"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "michelangelo",
    "name": {
      "fa": "میکلانژ",
      "en": "Michelangelo"
    },
    "country": "italy",
    "field": "arts",
    "born": 1475,
    "died": 1564,
    "summary": {
      "fa": "مجسمه‌ساز، نقاش و معمار رنسانس",
      "en": "Sculptor, painter and architect of the Renaissance"
    },
    "bio": {
      "fa": [
        "میکلانژ در کاپرِزه به دنیا آمد و در فلورانس و رم کار کرد. او خود را پیش از هر چیز مجسمه‌ساز می‌دانست.",
        "نقاشی سقف کلیسای سیستین (۱۵۰۸ تا ۱۵۱۲) را به سفارش پاپ انجام داد و در سال‌های پایانی عمر طراحی گنبد کلیسای سنت پیتر را بر عهده داشت."
      ],
      "en": [
        "Michelangelo was born in Caprese and worked in Florence and Rome. He regarded himself above all as a sculptor.",
        "He painted the ceiling of the Sistine Chapel (1508 to 1512) for the pope, and in his last years he was in charge of designing the dome of St Peter’s."
      ]
    },
    "achievements": {
      "fa": [
        "مجسمه‌ی داوود (۱۵۰۱ تا ۱۵۰۴)",
        "سقف کلیسای سیستین",
        "پیتا (۱۴۹۸ تا ۱۴۹۹)"
      ],
      "en": [
        "The statue of David (1501 to 1504)",
        "The Sistine Chapel ceiling",
        "The Pietà (1498 to 1499)"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "machiavelli",
    "name": {
      "fa": "نیکولو ماکیاولی",
      "en": "Niccolò Machiavelli"
    },
    "country": "italy",
    "field": "thought",
    "born": 1469,
    "died": 1527,
    "summary": {
      "fa": "اندیشمند سیاسی فلورانسی",
      "en": "Florentine political thinker"
    },
    "bio": {
      "fa": [
        "ماکیاولی در فلورانس به دنیا آمد و در دوران جمهوری فلورانس دیپلمات و مقام دولتی بود. پس از بازگشت مدیچی‌ها در ۱۵۱۲ از مقام خود کنار گذاشته شد.",
        "کتاب «شهریار» را در ۱۵۱۳ نوشت (چاپ آن در ۱۵۳۲ بود) و در آن درباره‌ی واقعیت‌های کسب و نگهداری قدرت می‌نویسد."
      ],
      "en": [
        "Machiavelli was born in Florence and during the Florentine Republic was a diplomat and government official. After the Medici returned in 1512 he was removed from office.",
        "He wrote The Prince in 1513 (it was printed in 1532), in which he writes about the realities of winning and holding power."
      ]
    },
    "achievements": {
      "fa": [
        "شهریار",
        "گفتارها (درباره‌ی لیوی)",
        "از بنیان‌گذاران اندیشه‌ی سیاسی مدرن"
      ],
      "en": [
        "The Prince",
        "Discourses on Livy",
        "A founder of modern political thought"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "galileo",
    "name": {
      "fa": "گالیله گالیلی",
      "en": "Galileo Galilei"
    },
    "country": "italy",
    "field": "science",
    "born": 1564,
    "died": 1642,
    "summary": {
      "fa": "ستاره‌شناس و فیزیک‌دان، پدر علم نوین",
      "en": "Astronomer and physicist, a father of modern science"
    },
    "bio": {
      "fa": [
        "گالیله در پیزا به دنیا آمد. در ۱۶۰۹ و ۱۶۱۰ با تلسکوپ بهبودیافته قمرهای مشتری را دید و یافته‌هایش را در «پیام ستاره‌ای» منتشر کرد.",
        "او از نظریه‌ی خورشیدمرکزی کوپرنیک دفاع کرد. در ۱۶۳۳ تفتیش عقاید او را محکوم کرد و تا پایان عمر در حبس خانگی ماند."
      ],
      "en": [
        "Galileo was born in Pisa. In 1609 and 1610 he saw the moons of Jupiter through an improved telescope and published his findings in the Starry Messenger.",
        "He defended Copernicus’s heliocentric theory. In 1633 the Inquisition condemned him and he remained under house arrest for the rest of his life."
      ]
    },
    "achievements": {
      "fa": [
        "دیدن قمرهای مشتری",
        "پیام ستاره‌ای (۱۶۱۰)",
        "پایه‌گذاری روش آزمایشی در فیزیک"
      ],
      "en": [
        "Seeing the moons of Jupiter",
        "The Starry Messenger (1610)",
        "Laying the base of the experimental method in physics"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "garibaldi",
    "name": {
      "fa": "جوزپه گاریبالدی",
      "en": "Giuseppe Garibaldi"
    },
    "country": "italy",
    "field": "politics",
    "born": 1807,
    "died": 1882,
    "summary": {
      "fa": "رهبر نظامی اتحاد ایتالیا",
      "en": "Military leader of Italian unification"
    },
    "bio": {
      "fa": [
        "گاریبالدی در نیس، که آن زمان زیر نفوذ فرانسه بود و بعدها به پیمونت-ساردنی تعلق یافت، به دنیا آمد. سال‌ها در آمریکای جنوبی جنگید و در ۱۸۴۸ و ۱۸۴۹ از جمهوری رم دفاع کرد.",
        "در ۱۸۶۰ با هزار داوطلب به سیسیل رفت، سیسیل و ناپل را گرفت و آن‌ها را به ویکتور امانوئل دوم سپرد."
      ],
      "en": [
        "Garibaldi was born in Nice, which at the time was under French influence and later belonged to Piedmont-Sardinia. He fought for years in South America and in 1848 and 1849 defended the Roman Republic.",
        "In 1860 he sailed to Sicily with a thousand volunteers, took Sicily and Naples and handed them to Victor Emmanuel II."
      ]
    },
    "achievements": {
      "fa": [
        "لشکرکشی هزار تن (۱۸۶۰)",
        "تسخیر سیسیل و ناپل",
        "نقش کلیدی در اتحاد ایتالیا"
      ],
      "en": [
        "The Expedition of the Thousand (1860)",
        "The conquest of Sicily and Naples",
        "A key role in Italian unification"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "verdi",
    "name": {
      "fa": "جوزپه وردی",
      "en": "Giuseppe Verdi"
    },
    "country": "italy",
    "field": "arts",
    "born": 1813,
    "died": 1901,
    "summary": {
      "fa": "آهنگساز بزرگ اپرای ایتالیایی",
      "en": "Great composer of Italian opera"
    },
    "bio": {
      "fa": [
        "وردی در لو رونکول نزدیک پارما به دنیا آمد و در میلان کار کرد. اپراهای او در دوران ریسورجیمنتو در میان ایتالیایی‌ها محبوب بود.",
        "در ۱۸۷۱ اپرای «آیدا» و در ۱۸۷۴ «رکوییم» او اجرا شد."
      ],
      "en": [
        "Verdi was born in Le Roncole near Parma and worked in Milan. His operas were popular among Italians in the age of the Risorgimento.",
        "His opera Aida was performed in 1871 and his Requiem in 1874."
      ]
    },
    "achievements": {
      "fa": [
        "ریگولتو (۱۸۵۱)",
        "لا تراویاتا (۱۸۵۳)",
        "آیدا (۱۸۷۱)"
      ],
      "en": [
        "Rigoletto (1851)",
        "La traviata (1853)",
        "Aida (1871)"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "fermi",
    "name": {
      "fa": "انریکو فرمی",
      "en": "Enrico Fermi"
    },
    "country": "italy",
    "field": "science",
    "born": 1901,
    "died": 1954,
    "summary": {
      "fa": "فیزیک‌دان و سازنده‌ی نخستین رآکتور هسته‌ای",
      "en": "Physicist who built the first nuclear reactor"
    },
    "bio": {
      "fa": [
        "فرمی در رم به دنیا آمد و در ۱۹۳۸ جایزه‌ی نوبل فیزیک گرفت. پس از دریافت جایزه، به‌خاطر قوانین نژادپرستانه‌ی ایتالیا (همسرش یهودی بود) به آمریکا رفت.",
        "او در ۱۹۴۲ در دانشگاه شیکاگو نخستین رآکتور هسته‌ای با واکنش زنجیره‌ای کنترل‌شده را ساخت."
      ],
      "en": [
        "Fermi was born in Rome and received the Nobel Prize in Physics in 1938. After receiving the prize he went to the United States because of Italy’s racist laws (his wife was Jewish).",
        "In 1942 at the University of Chicago he built the first nuclear reactor with a controlled chain reaction."
      ]
    },
    "achievements": {
      "fa": [
        "جایزه‌ی نوبل فیزیک (۱۹۳۸)",
        "نخستین رآکتور هسته‌ای (۱۹۴۲)"
      ],
      "en": [
        "Nobel Prize in Physics (1938)",
        "The first nuclear reactor (1942)"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "trajan",
    "name": {
      "fa": "تراژان",
      "en": "Trajan"
    },
    "country": "spain",
    "field": "politics",
    "born": 53,
    "died": 117,
    "summary": {
      "fa": "امپراتور رومی زاده‌ی هیسپانیا",
      "en": "Roman emperor born in Hispania"
    },
    "bio": {
      "fa": [
        "تراژان در ایتالیکا، نزدیک سویل امروزی، به دنیا آمد و نخستین امپراتور رومی بود که از ایالتی بیرون از ایتالیا برخاست. از ۹۸ تا ۱۱۷ میلادی امپراتور بود.",
        "با فتح داچیا (۱۰۱ تا ۱۰۶) و لشکرکشی به پارت، امپراتوری روم در زمان او به بیشترین وسعت خود رسید."
      ],
      "en": [
        "Trajan was born in Italica, near modern Seville, and was the first Roman emperor to come from a province outside Italy. He was emperor from 98 to 117 CE.",
        "With the conquest of Dacia (101 to 106) and the campaign against Parthia, the Roman Empire reached its greatest extent in his time."
      ]
    },
    "achievements": {
      "fa": [
        "فتح داچیا",
        "بیشترین وسعت امپراتوری روم",
        "پروژه‌های عمرانی بزرگ در رم"
      ],
      "en": [
        "The conquest of Dacia",
        "The greatest extent of the Roman Empire",
        "Large building projects in Rome"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "averroes",
    "name": {
      "fa": "ابن رشد",
      "en": "Averroes (Ibn Rushd)"
    },
    "country": "spain",
    "field": "thought",
    "born": 1126,
    "died": 1198,
    "summary": {
      "fa": "فیلسوف، پزشک و قاضی قرطبه",
      "en": "Philosopher, physician and judge of Córdoba"
    },
    "bio": {
      "fa": [
        "ابن رشد در قرطبه به دنیا آمد و در دوران موحدان قاضی و پزشک بود. در سال‌های پایانی عمر در مراکش درگذشت.",
        "شرح‌های او بر آثار ارسطو در اروپای لاتینی بسیار تأثیرگذار بود، تا حدی که او را «شارح» می‌نامیدند."
      ],
      "en": [
        "Ibn Rushd was born in Córdoba and was a judge and physician in the Almohad period. He died in Marrakesh at the end of his life.",
        "His commentaries on the works of Aristotle were very influential in Latin Europe, so much so that he was called ‘the Commentator’."
      ]
    },
    "achievements": {
      "fa": [
        "شرح‌هایی بر آثار ارسطو",
        "کتاب «کلیات» در پزشکی",
        "تأثیر بر فلسفه‌ی مدرسی اروپا"
      ],
      "en": [
        "Commentaries on the works of Aristotle",
        "The medical book Kitab al-Kulliyyat",
        "Influence on European scholastic philosophy"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "isabella-i",
    "name": {
      "fa": "ایزابل اول",
      "en": "Isabella I of Castile"
    },
    "country": "spain",
    "field": "politics",
    "born": 1451,
    "died": 1504,
    "summary": {
      "fa": "ملکه‌ی کاستیل و یکی از «پادشاهان کاتولیک»",
      "en": "Queen of Castile and one of the ‘Catholic Monarchs’"
    },
    "bio": {
      "fa": [
        "ایزابل از ۱۴۷۴ ملکه‌ی کاستیل بود و در ۱۴۶۹ با فردیناند آراگون ازدواج کرد. دو پادشاهی آن‌ها در عمل متحد شدند و بنیان اسپانیای یکپارچه گذاشته شد.",
        "او در ۱۴۹۲ گرانادا را گرفت و سفر کلمب را حمایت کرد. در دوران او تفتیش عقاید اسپانیا و اخراج یهودیان هم اتفاق افتاد، که از جنبه‌های بحث‌برانگیز دوران اوست."
      ],
      "en": [
        "Isabella was queen of Castile from 1474 and married Ferdinand of Aragon in 1469. Their two kingdoms were in practice united, and the basis of a united Spain was laid.",
        "In 1492 she took Granada and supported Columbus’s voyage. Her reign also saw the Spanish Inquisition and the expulsion of the Jews, which are among the controversial aspects of her time."
      ]
    },
    "achievements": {
      "fa": [
        "اتحاد کاستیل و آراگون",
        "فتح گرانادا (۱۴۹۲)",
        "حمایت از سفر کلمب"
      ],
      "en": [
        "The union of Castile and Aragon",
        "The conquest of Granada (1492)",
        "Support for Columbus’s voyage"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "cervantes",
    "name": {
      "fa": "میگل د سروانتس",
      "en": "Miguel de Cervantes"
    },
    "country": "spain",
    "field": "arts",
    "born": 1547,
    "died": 1616,
    "summary": {
      "fa": "نویسنده‌ی «دن کیشوت»",
      "en": "Author of Don Quixote"
    },
    "bio": {
      "fa": [
        "سروانتس در آلکالا د هنارس به دنیا آمد. در نبرد لپانتو (۱۵۷۱) جنگید و دست چپش آسیب دید. در ۱۵۷۵ دزدان دریایی الجزایر او را اسیر کردند و پنج سال در اسارت ماند.",
        "قسمت اول «دن کیشوت» در ۱۶۰۵ و قسمت دوم در ۱۶۱۵ منتشر شد. این کتاب از نخستین رمان‌های مدرن دانسته می‌شود."
      ],
      "en": [
        "Cervantes was born in Alcalá de Henares. He fought at the Battle of Lepanto (1571) and was wounded in his left hand. In 1575 corsairs from Algiers captured him and he remained a captive for five years.",
        "The first part of Don Quixote appeared in 1605 and the second in 1615. The book is regarded as one of the first modern novels."
      ]
    },
    "achievements": {
      "fa": [
        "دن کیشوت (۱۶۰۵ و ۱۶۱۵)",
        "نمونه‌ی ادبیات عصر طلایی اسپانیا"
      ],
      "en": [
        "Don Quixote (1605 and 1615)",
        "A model of Spain’s Golden Age literature"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "velazquez",
    "name": {
      "fa": "دیه‌گو ولاسکز",
      "en": "Diego Velázquez"
    },
    "country": "spain",
    "field": "arts",
    "era": "enlightenment",
    "born": 1599,
    "died": 1660,
    "summary": {
      "fa": "نقاش دربار فیلیپ چهارم",
      "en": "Court painter of Philip IV"
    },
    "bio": {
      "fa": [
        "ولاسکز در سویل به دنیا آمد و از ۱۶۲۳ نقاش دربار فیلیپ چهارم در مادرید بود. بخش بزرگی از عمرش را در دربار گذراند.",
        "تابلوی «ندیمه‌ها» (حدود ۱۶۵۶) مشهورترین اثر اوست و یکی از مهم‌ترین نقاشی‌های تاریخ هنر غرب دانسته می‌شود."
      ],
      "en": [
        "Velázquez was born in Seville and from 1623 was court painter to Philip IV in Madrid. He spent a large part of his life at court.",
        "Las Meninas (about 1656) is his most famous work and is regarded as one of the most important paintings in the history of Western art."
      ]
    },
    "achievements": {
      "fa": [
        "ندیمه‌ها (حدود ۱۶۵۶)",
        "تسلیم بردا",
        "پرتره‌های دربار"
      ],
      "en": [
        "Las Meninas (about 1656)",
        "The Surrender of Breda",
        "Court portraits"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "goya",
    "name": {
      "fa": "فرانسیسکو گویا",
      "en": "Francisco Goya"
    },
    "country": "spain",
    "field": "arts",
    "born": 1746,
    "died": 1828,
    "summary": {
      "fa": "نقاش و چاپگر؛ شاهد جنگ‌های ناپلئونی",
      "en": "Painter and printmaker; witness of the Napoleonic wars"
    },
    "bio": {
      "fa": [
        "گویا در فوئنده‌تودوس در آراگون به دنیا آمد و نقاش دربار اسپانیا شد. در ۱۷۹۲ و ۱۷۹۳ بر اثر بیماری شنوایی‌اش را از دست داد.",
        "«سوم مه ۱۸۰۸» (۱۸۱۴) را درباره‌ی اعدام شورشیان اسپانیایی به‌دست نیروهای فرانسه کشید و مجموعه‌ی «ویرانی‌های جنگ» نگاهی بی‌پرده به خشونت جنگ دارد. او در بوردو فرانسه درگذشت."
      ],
      "en": [
        "Goya was born in Fuendetodos in Aragon and became a court painter of Spain. In 1792 and 1793 he lost his hearing through illness.",
        "He painted The Third of May 1808 (1814) about the shooting of Spanish rebels by French forces, and his series The Disasters of War takes an unflinching look at the violence of war. He died in Bordeaux, France."
      ]
    },
    "achievements": {
      "fa": [
        "سوم مه ۱۸۰۸ (۱۸۱۴)",
        "هوس‌ها (۱۷۹۹)",
        "نقاشی‌های سیاه"
      ],
      "en": [
        "The Third of May 1808 (1814)",
        "Los Caprichos (1799)",
        "The Black Paintings"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "ramon-y-cajal",
    "name": {
      "fa": "سانتیاگو رامون ای کخال",
      "en": "Santiago Ramón y Cajal"
    },
    "country": "spain",
    "field": "science",
    "born": 1852,
    "died": 1934,
    "summary": {
      "fa": "پدر علوم اعصاب نوین",
      "en": "Father of modern neuroscience"
    },
    "bio": {
      "fa": [
        "رامون ای کخال در پتیا در آراگون به دنیا آمد و پزشک و استاد بافت‌شناسی بود. با مطالعه‌ی بافت مغز نشان داد که دستگاه عصبی از سلول‌های جداگانه‌ای به نام نورون ساخته شده است.",
        "در ۱۹۰۶ به‌طور مشترک با کامیلو گلژی جایزه‌ی نوبل فیزیولوژی یا پزشکی را گرفت."
      ],
      "en": [
        "Ramón y Cajal was born in Petilla in Aragon and was a physician and professor of histology. By studying brain tissue he showed that the nervous system is made of separate cells called neurons.",
        "In 1906 he shared the Nobel Prize in Physiology or Medicine with Camillo Golgi."
      ]
    },
    "achievements": {
      "fa": [
        "نظریه‌ی نورونی",
        "جایزه‌ی نوبل پزشکی (۱۹۰۶)"
      ],
      "en": [
        "The neuron doctrine",
        "Nobel Prize in Physiology or Medicine (1906)"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "gaudi",
    "name": {
      "fa": "آنتونی گائودی",
      "en": "Antoni Gaudí"
    },
    "country": "spain",
    "field": "arts",
    "born": 1852,
    "died": 1926,
    "summary": {
      "fa": "معمار کاتالان و سازنده‌ی ساگرادا فامیلیا",
      "en": "Catalan architect and designer of the Sagrada Família"
    },
    "bio": {
      "fa": [
        "گائودی در کاتالونیا به دنیا آمد (زادگاه دقیقش، ریوس یا ریودومس، مورد اختلاف است) و بیشتر عمرش را در بارسلون کار کرد. سبک او آرنوو و طبیعت‌گرایانه است.",
        "او از ۱۸۸۳ طراحی کلیسای ساگرادا فامیلیا را بر عهده گرفت و تا پایان عمر روی آن کار کرد. در ۱۹۲۶ در بارسلون بر اثر برخورد با تراموا درگذشت."
      ],
      "en": [
        "Gaudí was born in Catalonia (his exact birthplace, Reus or Riudoms, is disputed) and worked mostly in Barcelona. His style is Art Nouveau-related and inspired by nature.",
        "From 1883 he took charge of designing the Sagrada Família church and worked on it until the end of his life. He died in Barcelona in 1926 after being hit by a tram."
      ]
    },
    "achievements": {
      "fa": [
        "ساگرادا فامیلیا",
        "پارک گوئل",
        "کازا باتیو و کازا میلا"
      ],
      "en": [
        "The Sagrada Família",
        "Park Güell",
        "Casa Batlló and Casa Milà"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "picasso",
    "name": {
      "fa": "پابلو پیکاسو",
      "en": "Pablo Picasso"
    },
    "country": "spain",
    "field": "arts",
    "born": 1881,
    "died": 1973,
    "summary": {
      "fa": "نقاش و مجسمه‌ساز، از بنیان‌گذاران کوبیسم",
      "en": "Painter and sculptor, a founder of Cubism"
    },
    "bio": {
      "fa": [
        "پیکاسو در مالاگا به دنیا آمد و بیشتر زندگی بزرگسالی‌اش را در فرانسه گذراند. همراه ژرژ براک کوبیسم را بنیان گذاشت.",
        "«دوشیزگان آوینیون» (۱۹۰۷) از آثار آغازین کوبیسم است و «گرنیکا» (۱۹۳۷) را درباره‌ی بمباران شهر گرنیکا در جنگ داخلی اسپانیا کشید."
      ],
      "en": [
        "Picasso was born in Málaga and spent most of his adult life in France. Together with Georges Braque he founded Cubism.",
        "Les Demoiselles d’Avignon (1907) is among the early works of Cubism, and he painted Guernica (1937) about the bombing of the town of Guernica in the Spanish Civil War."
      ]
    },
    "achievements": {
      "fa": [
        "بنیان‌گذاری کوبیسم",
        "دوشیزگان آوینیون (۱۹۰۷)",
        "گرنیکا (۱۹۳۷)"
      ],
      "en": [
        "Co-founding Cubism",
        "Les Demoiselles d’Avignon (1907)",
        "Guernica (1937)"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "lorca",
    "name": {
      "fa": "فدریکو گارسیا لورکا",
      "en": "Federico García Lorca"
    },
    "country": "spain",
    "field": "arts",
    "born": 1898,
    "died": 1936,
    "summary": {
      "fa": "شاعر و نمایشنامه‌نویس اسپانیایی",
      "en": "Spanish poet and playwright"
    },
    "bio": {
      "fa": [
        "لورکا در فوئنته واکروس نزدیک گرانادا به دنیا آمد. شعرها و نمایشنامه‌هایش از فرهنگ و فولکلور آندلس الهام می‌گیرد.",
        "«عروسی خون» (۱۹۳۳) از مهم‌ترین نمایشنامه‌های اوست. او در ماه‌های آغازین جنگ داخلی، در اوت ۱۹۳۶، نزدیک گرانادا به‌دست نیروهای ناسیونالیست کشته شد."
      ],
      "en": [
        "Lorca was born in Fuente Vaqueros near Granada. His poems and plays draw on Andalusian culture and folklore.",
        "Blood Wedding (1933) is among his most important plays. In the first months of the civil war, in August 1936, he was killed near Granada by Nationalist forces."
      ]
    },
    "achievements": {
      "fa": [
        "رومانسه‌ی کولی‌ها (۱۹۲۸)",
        "عروسی خون (۱۹۳۳)"
      ],
      "en": [
        "Gypsy Ballads (1928)",
        "Blood Wedding (1933)"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "vercingetorix",
    "name": {
      "fa": "ورسینژتوریکس",
      "en": "Vercingetorix"
    },
    "country": "france",
    "field": "politics",
    "born": -82,
    "died": -46,
    "summary": {
      "fa": "رهبر گال‌ها در برابر سزار",
      "en": "Leader of the Gauls against Caesar"
    },
    "bio": {
      "fa": [
        "ورسینژتوریکس رئیس قبیله‌ی آرورنی بود (سال تولدش تقریبی است). در ۵۲ پیش از میلاد قبایل گال را در شورشی بزرگ علیه روم متحد کرد و در گرگوویا پیروز شد.",
        "در آلزیا محاصره شد و تسلیم شد. سال‌ها اسیر بود و در ۴۶ پیش از میلاد پس از جشن پیروزی سزار در روم اعدام شد."
      ],
      "en": [
        "Vercingetorix was chief of the Arverni tribe (his birth year is approximate). In 52 BCE he united the Gallic tribes in a great revolt against Rome and won at Gergovia.",
        "He was besieged at Alesia and surrendered. He was held captive for years and executed in Rome in 46 BCE after Caesar’s triumph."
      ]
    },
    "achievements": {
      "fa": [
        "اتحاد قبایل گال در ۵۲ پیش از میلاد",
        "پیروزی در گرگوویا"
      ],
      "en": [
        "Uniting the Gallic tribes in 52 BCE",
        "Victory at Gergovia"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "joan-of-arc",
    "name": {
      "fa": "ژاندارک",
      "en": "Joan of Arc"
    },
    "country": "france",
    "field": "politics",
    "born": 1412,
    "died": 1431,
    "summary": {
      "fa": "دختر روستایی و قهرمان ملی فرانسه",
      "en": "Peasant girl and French national hero"
    },
    "bio": {
      "fa": [
        "ژاندارک حدود ۱۴۱۲ در دومرمی به دنیا آمد. او می‌گفت ندایی از آسمان شنیده که او را مأمور نجات فرانسه کرده است. در ۱۴۲۹ به نیروهای فرانسه یاری کرد محاصره‌ی اورلئان را بشکنند و شارل هفتم در ریمس تاج‌گذاری کرد.",
        "در ۱۴۳۰ اسیر شد و پس از محاکمه‌ی کلیسایی به‌اتهام بدعت در ۳۰ مه ۱۴۳۱ در روئن سوزانده شد. کلیسا بعدها او را بی‌گناه شناخت و در ۱۹۲۰ قدیس اعلام کرد."
      ],
      "en": [
        "Joan of Arc was born around 1412 in Domrémy. She said she had heard a voice from heaven that gave her the mission to save France. In 1429 she helped French forces break the siege of Orléans and Charles VII was crowned at Reims.",
        "She was captured in 1430 and, after a church trial on charges of heresy, burned at Rouen on 30 May 1431. The Church later declared her innocent and made her a saint in 1920."
      ]
    },
    "achievements": {
      "fa": [
        "پایان محاصره‌ی اورلئان (۱۴۲۹)",
        "تاج‌گذاری شارل هفتم در ریمس"
      ],
      "en": [
        "The end of the siege of Orléans (1429)",
        "The coronation of Charles VII at Reims"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "descartes",
    "name": {
      "fa": "رنه دکارت",
      "en": "René Descartes"
    },
    "country": "france",
    "field": "thought",
    "era": "enlightenment",
    "born": 1596,
    "died": 1650,
    "summary": {
      "fa": "فیلسوف و ریاضی‌دان، پدر فلسفه‌ی نوین",
      "en": "Philosopher and mathematician, a father of modern philosophy"
    },
    "bio": {
      "fa": [
        "دکارت در لا هه در تورِن به دنیا آمد و بخش بزرگی از عمرش را در هلند گذراند. در ۱۶۴۹ به دعوت ملکه‌ی سوئد به استکهلم رفت و در ۱۶۵۰ همان‌جا درگذشت.",
        "او در «گفتار در روش» (۱۶۳۷) شک روشمند را مطرح کرد که به عبارت معروف «می‌اندیشم، پس هستم» می‌رسد. دستگاه مختصات دکارتی هم از نام او گرفته شده است."
      ],
      "en": [
        "Descartes was born in La Haye in Touraine and spent a large part of his life in the Netherlands. In 1649 he went to Stockholm at the invitation of the queen of Sweden and died there in 1650.",
        "In the Discourse on the Method (1637) he put forward methodical doubt, which leads to the famous phrase ‘I think, therefore I am’. Cartesian coordinates are named after him."
      ]
    },
    "achievements": {
      "fa": [
        "گفتار در روش (۱۶۳۷)",
        "تأملات (۱۶۴۱)",
        "هندسه‌ی تحلیلی"
      ],
      "en": [
        "Discourse on the Method (1637)",
        "Meditations (1641)",
        "Analytic geometry"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "louis-xiv",
    "name": {
      "fa": "لویی چهاردهم",
      "en": "Louis XIV"
    },
    "country": "france",
    "field": "politics",
    "born": 1638,
    "died": 1715,
    "summary": {
      "fa": "«شاه خورشید»، نماد پادشاهی مطلقه",
      "en": "The ‘Sun King’, symbol of absolute monarchy"
    },
    "bio": {
      "fa": [
        "لویی چهاردهم در ۱۶۴۳ پادشاه شد و پس از مرگ مازارن در ۱۶۶۱ خود حکومت را به دست گرفت. ۷۲ سال سلطنت کرد، که از طولانی‌ترین دوره‌های سلطنت در تاریخ اروپاست.",
        "کاخ ورسای را مقر دربار کرد و قدرت را در دست پادشاه متمرکز کرد. در ۱۶۸۵ فرمان نانت را لغو کرد. جنگ‌های بسیارش خزانه را تهی کرد."
      ],
      "en": [
        "Louis XIV became king in 1643 and took government into his own hands after Mazarin’s death in 1661. He reigned for 72 years, one of the longest reigns in European history.",
        "He made the palace of Versailles the seat of the court and concentrated power in the king’s hands. In 1685 he revoked the Edict of Nantes. His many wars emptied the treasury."
      ]
    },
    "achievements": {
      "fa": [
        "ورسای",
        "تمرکز قدرت در فرانسه",
        "حمایت از هنر و علم"
      ],
      "en": [
        "Versailles",
        "Centralization of power in France",
        "Patronage of art and science"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "voltaire",
    "name": {
      "fa": "ولتر",
      "en": "Voltaire"
    },
    "country": "france",
    "field": "thought",
    "born": 1694,
    "died": 1778,
    "summary": {
      "fa": "نویسنده و فیلسوف روشنگری، مدافع تساهل",
      "en": "Enlightenment writer and philosopher, defender of tolerance"
    },
    "bio": {
      "fa": [
        "ولتر (فرانسوا-ماری آروئه) در پاریس به دنیا آمد. به‌خاطر نوشته‌های انتقادی‌اش زندانی و تبعید شد و مدتی در انگلستان زیست.",
        "او برای تساهل دینی و آزادی بیان نوشت. «کاندید» (۱۷۵۹) و «رساله درباره‌ی تساهل» (۱۷۶۳) از آثار مشهور اوست."
      ],
      "en": [
        "Voltaire (François-Marie Arouet) was born in Paris. He was imprisoned and exiled for his critical writings and lived for a time in England.",
        "He wrote for religious tolerance and freedom of speech. Candide (1759) and the Treatise on Tolerance (1763) are among his well-known works."
      ]
    },
    "achievements": {
      "fa": [
        "کاندید (۱۷۵۹)",
        "رساله درباره‌ی تساهل (۱۷۶۳)",
        "دفاع از آزادی بیان"
      ],
      "en": [
        "Candide (1759)",
        "Treatise on Tolerance (1763)",
        "Defence of freedom of speech"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "napoleon",
    "name": {
      "fa": "ناپلئون بناپارت",
      "en": "Napoleon Bonaparte"
    },
    "country": "france",
    "field": "politics",
    "era": "modern",
    "born": 1769,
    "died": 1821,
    "summary": {
      "fa": "ژنرال و امپراتور فرانسه",
      "en": "General and emperor of France"
    },
    "bio": {
      "fa": [
        "ناپلئون در آژاکسیو در کورس به دنیا آمد. در انقلاب فرانسه به‌عنوان افسر برجسته شد، در ۱۷۹۹ با کودتا قدرت را گرفت و در ۱۸۰۴ امپراتور شد.",
        "او بیشتر اروپا را فتح کرد، اما در ۱۸۱۲ لشکرکشی به روسیه ناکام ماند و در ۱۸۱۵ در واترلو شکست خورد. تا پایان عمر در تبعید در جزیره‌ی سنت هلنا ماند."
      ],
      "en": [
        "Napoleon was born in Ajaccio in Corsica. He rose as an officer during the French Revolution, seized power in a coup in 1799 and became emperor in 1804.",
        "He conquered much of Europe, but his campaign in Russia failed in 1812 and he was defeated at Waterloo in 1815. He remained in exile on the island of Saint Helena until the end of his life."
      ]
    },
    "achievements": {
      "fa": [
        "قانون مدنی ناپلئون (۱۸۰۴)",
        "فتح بیشتر اروپا",
        "اصلاحات اداری و آموزشی"
      ],
      "en": [
        "The Napoleonic Civil Code (1804)",
        "The conquest of much of Europe",
        "Administrative and educational reforms"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "victor-hugo",
    "name": {
      "fa": "ویکتور هوگو",
      "en": "Victor Hugo"
    },
    "country": "france",
    "field": "arts",
    "born": 1802,
    "died": 1885,
    "summary": {
      "fa": "شاعر و رمان‌نویس، نویسنده‌ی «بینوایان»",
      "en": "Poet and novelist, author of Les Misérables"
    },
    "bio": {
      "fa": [
        "هوگو در بزانسون به دنیا آمد. با ناپلئون سوم مخالف بود و از ۱۸۵۱ تا ۱۸۷۰ در تبعید زیست. پس از بازگشت به‌عنوان قهرمان ملی استقبال شد.",
        "«گوژپشت نوتردام» (۱۸۳۱) و «بینوایان» (۱۸۶۲) از مشهورترین رمان‌های اوست."
      ],
      "en": [
        "Hugo was born in Besançon. He opposed Napoleon III and lived in exile from 1851 to 1870. On his return he was welcomed as a national hero.",
        "The Hunchback of Notre-Dame (1831) and Les Misérables (1862) are among his most famous novels."
      ]
    },
    "achievements": {
      "fa": [
        "گوژپشت نوتردام (۱۸۳۱)",
        "بینوایان (۱۸۶۲)"
      ],
      "en": [
        "The Hunchback of Notre-Dame (1831)",
        "Les Misérables (1862)"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "pasteur",
    "name": {
      "fa": "لویی پاستور",
      "en": "Louis Pasteur"
    },
    "country": "france",
    "field": "science",
    "born": 1822,
    "died": 1895,
    "summary": {
      "fa": "شیمی‌دان و زیست‌شناس، پایه‌گذار میکروب‌شناسی",
      "en": "Chemist and biologist, a founder of microbiology"
    },
    "bio": {
      "fa": [
        "پاستور در دُل به دنیا آمد. نشان داد که تخمیر و فساد کار میکروب‌هاست و نظریه‌ی خودزایی را رد کرد.",
        "او فرایند پاستوریزه‌کردن را به کار برد و واکسن‌هایی ساخت، از جمله واکسن هاری (۱۸۸۵)."
      ],
      "en": [
        "Pasteur was born in Dole. He showed that fermentation and spoilage are the work of microbes and refuted the theory of spontaneous generation.",
        "He applied the process of pasteurization and developed vaccines, among them the rabies vaccine (1885)."
      ]
    },
    "achievements": {
      "fa": [
        "پاستوریزه‌کردن",
        "واکسن هاری (۱۸۸۵)",
        "رد نظریه‌ی خودزایی"
      ],
      "en": [
        "Pasteurization",
        "The rabies vaccine (1885)",
        "Refuting spontaneous generation"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "monet",
    "name": {
      "fa": "کلود مونه",
      "en": "Claude Monet"
    },
    "country": "france",
    "field": "arts",
    "born": 1840,
    "died": 1926,
    "summary": {
      "fa": "نقاش و از بنیان‌گذاران امپرسیونیسم",
      "en": "Painter and a founder of Impressionism"
    },
    "bio": {
      "fa": [
        "مونه در پاریس به دنیا آمد و بیشتر عمرش را در ژیورنی گذراند. نقاشی «امپرسیون، طلوع خورشید» (۱۸۷۲) او نام جنبش امپرسیونیسم را رقم زد.",
        "او در سال‌های پایانی عمر مجموعه‌ی «نیلوفرهای آبی» را از باغ خود در ژیورنی کشید."
      ],
      "en": [
        "Monet was born in Paris and spent most of his life in Giverny. His painting Impression, Sunrise (1872) gave the Impressionist movement its name.",
        "In his last years he painted the Water Lilies series from his garden at Giverny."
      ]
    },
    "achievements": {
      "fa": [
        "امپرسیون، طلوع خورشید (۱۸۷۲)",
        "مجموعه‌ی نیلوفرهای آبی"
      ],
      "en": [
        "Impression, Sunrise (1872)",
        "The Water Lilies series"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "de-gaulle",
    "name": {
      "fa": "شارل دوگل",
      "en": "Charles de Gaulle"
    },
    "country": "france",
    "field": "politics",
    "born": 1890,
    "died": 1970,
    "summary": {
      "fa": "رهبر فرانسه‌ی آزاد و بنیان‌گذار جمهوری پنجم",
      "en": "Leader of Free France and founder of the Fifth Republic"
    },
    "bio": {
      "fa": [
        "دوگل در لیل به دنیا آمد و افسر ارتش بود. پس از آتش‌بس ۱۹۴۰ از لندن مردم را به مقاومت فراخواند (۱۸ ژوئن) و رهبر فرانسه‌ی آزاد شد. پس از آزادی پاریس در ۱۹۴۴ رئیس دولت موقت بود.",
        "در ۱۹۵۸ در بحران الجزایر بازگشت، قانون اساسی جمهوری پنجم را بنیان گذاشت و از ۱۹۵۹ تا ۱۹۶۹ رئیس‌جمهور بود."
      ],
      "en": [
        "De Gaulle was born in Lille and was an army officer. After the armistice of 1940 he called on the people from London to resist (18 June) and became the leader of Free France. After the liberation of Paris in 1944 he headed the provisional government.",
        "In 1958 he returned during the Algerian crisis, laid the foundation of the Fifth Republic’s constitution and was president from 1959 to 1969."
      ]
    },
    "achievements": {
      "fa": [
        "فراخوان ۱۸ ژوئن ۱۹۴۰",
        "بنیان‌گذاری جمهوری پنجم",
        "پایان جنگ الجزایر"
      ],
      "en": [
        "The appeal of 18 June 1940",
        "Founding the Fifth Republic",
        "Ending the Algerian War"
      ]
    },
    "added": "2026-10-08"
  },
  {
    "id": "cabral",
    "name": {
      "fa": "پدرو آلوارس کابرال",
      "en": "Pedro Álvares Cabral"
    },
    "country": "brazil",
    "field": "exploration",
    "born": 1467,
    "died": 1520,
    "summary": {
      "fa": "دریانورد پرتغالی که به برزیل رسید",
      "en": "Portuguese navigator who reached Brazil"
    },
    "bio": {
      "fa": [
        "کابرال در پرتغال به دنیا آمد (سال تولدش، ۱۴۶۷ یا ۱۴۶۸، دقیقاً معلوم نیست و سال مرگش حدود ۱۵۲۰ است). در ۱۵۰۰ فرماندهی ناوگانی را بر عهده گرفت که به‌سوی هند می‌رفت.",
        "ناوگان او در ۲۲ آوریل ۱۵۰۰ به ساحل برزیل رسید و کابرال آن سرزمین را از آن پرتغال اعلام کرد. سپس راه هند را ادامه داد."
      ],
      "en": [
        "Cabral was born in Portugal (his birth year, 1467 or 1468, is not known exactly and he died about 1520). In 1500 he took command of a fleet sailing to India.",
        "His fleet reached the coast of Brazil on 22 April 1500 and Cabral claimed the land for Portugal. He then continued on the way to India."
      ]
    },
    "achievements": {
      "fa": [
        "رسیدن به ساحل برزیل (۱۵۰۰)",
        "فرماندهی ناوگان هند در ۱۵۰۰"
      ],
      "en": [
        "Reaching the coast of Brazil (1500)",
        "Command of the 1500 India fleet"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "zumbi",
    "name": {
      "fa": "زومبی دوس پالمارس",
      "en": "Zumbi dos Palmares"
    },
    "country": "brazil",
    "field": "politics",
    "born": 1655,
    "died": 1695,
    "summary": {
      "fa": "رهبر کیلومبوی پالمارس",
      "en": "Leader of the Quilombo of Palmares"
    },
    "bio": {
      "fa": [
        "زومبی در ۱۶۵۵ در منطقه‌ی پالمارس در شمال شرق برزیل به دنیا آمد. پالمارس شهرکی از بردگان فراری و مردمان آزاد بود که بیشتر قرن هفدهم در برابر نیروهای پرتغالی ایستاد.",
        "او از حدود ۱۶۸۰ رهبر پالمارس بود و در ۲۰ نوامبر ۱۶۹۵ به‌دست نیروهای استعماری کشته شد. امروز ۲۰ نوامبر در برزیل «روز آگاهی سیاه‌پوستان» است."
      ],
      "en": [
        "Zumbi was born in 1655 in the Palmares region of north-eastern Brazil. Palmares was a settlement of escaped enslaved people and free people that resisted Portuguese forces for most of the seventeenth century.",
        "He was Palmares’s leader from about 1680 and was killed by colonial forces on 20 November 1695. Today 20 November is ‘Black Awareness Day’ in Brazil."
      ]
    },
    "achievements": {
      "fa": [
        "رهبری مقاومت پالمارس",
        "نماد مبارزه با برده‌داری در برزیل"
      ],
      "en": [
        "Leading the resistance of Palmares",
        "A symbol of the struggle against slavery in Brazil"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "tiradentes",
    "name": {
      "fa": "تیرادنتس",
      "en": "Tiradentes"
    },
    "country": "brazil",
    "field": "politics",
    "born": 1746,
    "died": 1792,
    "summary": {
      "fa": "قهرمان ملی و رهبر توطئه‌ی میناس",
      "en": "National hero and figure of the Minas conspiracy"
    },
    "bio": {
      "fa": [
        "ژوآکیم ژوزه دا سیلوا خاویر، معروف به تیرادنتس («دندان‌کش»)، در ۱۷۴۶ در میناس جرایس به دنیا آمد. او افسر ارتش بود.",
        "در توطئه‌ی میناس (۱۷۸۹) که علیه حکومت پرتغال و مالیات‌های سنگین طراحی شده بود، شرکت داشت. او تنها توطئه‌گری بود که اعدام شد (۲۱ آوریل ۱۷۹۲، در ریو) و امروز قهرمان ملی برزیل است."
      ],
      "en": [
        "Joaquim José da Silva Xavier, known as Tiradentes (‘Tooth-puller’), was born in Minas Gerais in 1746. He was an army officer.",
        "He took part in the Minas conspiracy (1789), planned against Portuguese rule and heavy taxes. He was the only conspirator who was executed (21 April 1792, in Rio) and is a national hero of Brazil today."
      ]
    },
    "achievements": {
      "fa": [
        "شرکت در توطئه‌ی میناس (۱۷۸۹)",
        "نماد استقلال‌خواهی برزیل"
      ],
      "en": [
        "Taking part in the Minas conspiracy (1789)",
        "A symbol of Brazil’s independence movement"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "pedro-i",
    "name": {
      "fa": "پدرو اول",
      "en": "Pedro I"
    },
    "country": "brazil",
    "field": "politics",
    "era": "modern",
    "born": 1798,
    "died": 1834,
    "summary": {
      "fa": "نخستین امپراتور برزیل",
      "en": "First emperor of Brazil"
    },
    "bio": {
      "fa": [
        "پدرو در پرتغال به دنیا آمد و کودکی‌اش با فرار خاندان سلطنتی به برزیل (۱۸۰۸) همراه بود. در ۱۸۲۲ استقلال برزیل را اعلام کرد و امپراتور شد.",
        "در ۱۸۳۱ به نفع پسرش پدرو دوم کناره‌گیری کرد و به پرتغال بازگشت، جایی که برای تاج دخترش جنگید. در ۱۸۳۴ درگذشت."
      ],
      "en": [
        "Pedro was born in Portugal and his childhood was marked by the royal family’s flight to Brazil (1808). In 1822 he declared Brazil’s independence and became emperor.",
        "In 1831 he abdicated in favour of his son Pedro II and returned to Portugal, where he fought for his daughter’s crown. He died in 1834."
      ]
    },
    "achievements": {
      "fa": [
        "اعلام استقلال برزیل (۱۸۲۲)",
        "نخستین قانون اساسی برزیل (۱۸۲۴)"
      ],
      "en": [
        "Declaring Brazil’s independence (1822)",
        "Brazil’s first constitution (1824)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "pedro-ii",
    "name": {
      "fa": "پدرو دوم",
      "en": "Pedro II"
    },
    "country": "brazil",
    "field": "politics",
    "born": 1825,
    "died": 1891,
    "summary": {
      "fa": "آخرین امپراتور برزیل",
      "en": "Last emperor of Brazil"
    },
    "bio": {
      "fa": [
        "پدرو دوم در ریو دو ژانیرو به دنیا آمد و در پنج‌سالگی امپراتور شد (۱۸۳۱) و از ۱۸۴۰ خود حکومت کرد. او از علم و هنر حمایت می‌کرد.",
        "در دوران او برده‌داری لغو شد (۱۸۸۸). در ۱۵ نوامبر ۱۸۸۹ کودتای جمهوری‌خواهان او را برکنار کرد و به اروپا تبعید شد. در ۱۸۹۱ در پاریس درگذشت."
      ],
      "en": [
        "Pedro II was born in Rio de Janeiro, became emperor at the age of five (1831) and ruled himself from 1840. He supported science and the arts.",
        "Slavery was abolished in his reign (1888). On 15 November 1889 a republican coup removed him and he was exiled to Europe. He died in Paris in 1891."
      ]
    },
    "achievements": {
      "fa": [
        "حکومت ۵۸ ساله (۱۸۳۱ تا ۱۸۸۹)",
        "لغو برده‌داری در دوران او"
      ],
      "en": [
        "A 58-year reign (1831 to 1889)",
        "The abolition of slavery in his reign"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "machado-de-assis",
    "name": {
      "fa": "ماشادو دو آسیس",
      "en": "Machado de Assis"
    },
    "country": "brazil",
    "field": "arts",
    "born": 1839,
    "died": 1908,
    "summary": {
      "fa": "بزرگ‌ترین نویسنده‌ی برزیل",
      "en": "Brazil’s greatest writer"
    },
    "bio": {
      "fa": [
        "ماشادو در ریو دو ژانیرو به دنیا آمد و در همان‌جا زندگی کرد. او رمان‌نویس، شاعر و نویسنده‌ی داستان کوتاه بود.",
        "«یادداشت‌های پس از مرگ براس کوباس» (۱۸۸۱) و «دون کاسمورو» (۱۸۹۹) از مشهورترین آثار او هستند. او بنیان‌گذار و نخستین رئیس فرهنگستان ادبیات برزیل (۱۸۹۷) بود."
      ],
      "en": [
        "Machado was born in Rio de Janeiro and lived there all his life. He was a novelist, poet and short-story writer.",
        "The Posthumous Memoirs of Brás Cubas (1881) and Dom Casmurro (1899) are among his most famous works. He was a founder and the first president of the Brazilian Academy of Letters (1897)."
      ]
    },
    "achievements": {
      "fa": [
        "یادداشت‌های پس از مرگ براس کوباس (۱۸۸۱)",
        "دون کاسمورو (۱۸۹۹)",
        "بنیان‌گذاری فرهنگستان ادبیات برزیل"
      ],
      "en": [
        "The Posthumous Memoirs of Brás Cubas (1881)",
        "Dom Casmurro (1899)",
        "Co-founding the Brazilian Academy of Letters"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "santos-dumont",
    "name": {
      "fa": "آلبرتو سانتوس-دومون",
      "en": "Alberto Santos-Dumont"
    },
    "country": "brazil",
    "field": "invention",
    "born": 1873,
    "died": 1932,
    "summary": {
      "fa": "پیشگام هوانوردی",
      "en": "Aviation pioneer"
    },
    "bio": {
      "fa": [
        "سانتوس-دومون در میناس جرایس به دنیا آمد و سال‌ها در پاریس کار کرد. نخست با بالن‌های هدایت‌پذیر معروف شد.",
        "در ۱۲ نوامبر ۱۹۰۶ با هواپیمای «۱۴-بیس» در پاریس پرواز کرد که از نخستین پروازهای عمومی با موتور در اروپا بود. در برزیل او را پدر هوانوردی می‌دانند، هرچند برادران رایت هم برای پرواز ۱۹۰۳ اعتبار می‌گیرند."
      ],
      "en": [
        "Santos-Dumont was born in Minas Gerais and worked for years in Paris. He first became famous with steerable balloons.",
        "On 12 November 1906 he flew the ‘14-bis’ aircraft in Paris, one of the first public powered flights in Europe. In Brazil he is regarded as the father of aviation, though the Wright brothers are also credited for their flight of 1903."
      ]
    },
    "achievements": {
      "fa": [
        "بالن‌های هدایت‌پذیر",
        "پرواز ۱۴-بیس (۱۹۰۶)"
      ],
      "en": [
        "Steerable balloons",
        "The 14-bis flight (1906)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "vargas",
    "name": {
      "fa": "ژتولیو وارگاس",
      "en": "Getúlio Vargas"
    },
    "country": "brazil",
    "field": "politics",
    "born": 1882,
    "died": 1954,
    "summary": {
      "fa": "رئیس‌جمهور و دیکتاتور برزیل در میانه‌ی قرن بیستم",
      "en": "President and dictator of Brazil in the mid-twentieth century"
    },
    "bio": {
      "fa": [
        "وارگاس در سائو بورخا به دنیا آمد. از ۱۹۳۰ تا ۱۹۴۵ بر برزیل حکم راند، از جمله با دیکتاتوری «دولت نو» (از ۱۹۳۷)، و در ۱۹۵۰ دوباره انتخاب شد.",
        "او قوانین کار (۱۹۴۳) را تصویب کرد و صنعتی‌شدن را پیش برد. پتروبراس در ۱۹۵۳ در دوران او بنیان گذاشته شد. در ۱۹۵۴ در مقام ریاست‌جمهوری درگذشت."
      ],
      "en": [
        "Vargas was born in São Borja. He ruled Brazil from 1930 to 1945, including through the ‘New State’ dictatorship (from 1937), and was elected again in 1950.",
        "He passed labour laws (1943) and pushed industrialization. Petrobras was founded in 1953 in his time. He died in office in 1954."
      ]
    },
    "achievements": {
      "fa": [
        "قوانین کار (۱۹۴۳)",
        "بنیان پتروبراس (۱۹۵۳)"
      ],
      "en": [
        "The labour laws (1943)",
        "The founding of Petrobras (1953)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "villa-lobos",
    "name": {
      "fa": "هیتور ویلا-لوبوس",
      "en": "Heitor Villa-Lobos"
    },
    "country": "brazil",
    "field": "arts",
    "born": 1887,
    "died": 1959,
    "summary": {
      "fa": "بزرگ‌ترین آهنگساز برزیل",
      "en": "Brazil’s greatest composer"
    },
    "bio": {
      "fa": [
        "ویلا-لوبوس در ریو دو ژانیرو به دنیا آمد. او موسیقی عامیانه‌ی برزیل را با سنت موسیقی کلاسیک اروپا درآمیخت.",
        "مجموعه‌ی «باخیانا برازیلیرا» (۱۹۳۰ تا ۱۹۴۵) از مشهورترین کارهای اوست."
      ],
      "en": [
        "Villa-Lobos was born in Rio de Janeiro. He blended Brazilian folk music with the European classical tradition.",
        "The Bachianas Brasileiras (1930 to 1945) is among his best-known works."
      ]
    },
    "achievements": {
      "fa": [
        "باخیانا برازیلیرا",
        "چوروش"
      ],
      "en": [
        "Bachianas Brasileiras",
        "The Chôros"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "niemeyer",
    "name": {
      "fa": "اسکار نیمایر",
      "en": "Oscar Niemeyer"
    },
    "country": "brazil",
    "field": "arts",
    "born": 1907,
    "died": 2012,
    "summary": {
      "fa": "معمار ساختمان‌های اصلی برازیلیا",
      "en": "Architect of Brasília’s main buildings"
    },
    "bio": {
      "fa": [
        "نیمایر در ریو دو ژانیرو به دنیا آمد و تا ۱۰۴سالگی زنده بود. سبک او با خطوط منحنی و بتن مشخص می‌شود.",
        "او ساختمان‌های اصلی برازیلیا از جمله کنگره‌ی ملی و کلیسای جامع را طراحی کرد؛ طرح شهرسازی از لوسیو کوستا بود. در ۱۹۸۸ جایزه‌ی پریتزکر را گرفت."
      ],
      "en": [
        "Niemeyer was born in Rio de Janeiro and lived to the age of 104. His style is marked by curved lines and concrete.",
        "He designed the main buildings of Brasília, including the National Congress and the Cathedral; the urban plan was by Lúcio Costa. He received the Pritzker Prize in 1988."
      ]
    },
    "achievements": {
      "fa": [
        "ساختمان‌های برازیلیا",
        "جایزه‌ی پریتزکر (۱۹۸۸)"
      ],
      "en": [
        "The buildings of Brasília",
        "The Pritzker Prize (1988)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "pele",
    "name": {
      "fa": "پله",
      "en": "Pelé"
    },
    "country": "brazil",
    "field": "sport",
    "era": "contemporary",
    "born": 1940,
    "died": 2022,
    "summary": {
      "fa": "فوتبالیست و قهرمان سه‌باره‌ی جام جهانی",
      "en": "Footballer and three-time World Cup winner"
    },
    "bio": {
      "fa": [
        "ادسون آرانتس دو ناسیمنتو، معروف به پله، در تره کوراسوئس به دنیا آمد. او برای سانتوس و تیم ملی برزیل بازی کرد و با برزیل در ۱۹۵۸، ۱۹۶۲ و ۱۹۷۰ قهرمان جهان شد.",
        "او از بزرگ‌ترین فوتبالیست‌های تاریخ دانسته می‌شود. در ۲۰۲۲ درگذشت."
      ],
      "en": [
        "Edson Arantes do Nascimento, known as Pelé, was born in Três Corações. He played for Santos and the Brazil national team and won the World Cup with Brazil in 1958, 1962 and 1970.",
        "He is regarded as one of the greatest footballers in history. He died in 2022."
      ]
    },
    "achievements": {
      "fa": [
        "قهرمانی جام جهانی ۱۹۵۸، ۱۹۶۲ و ۱۹۷۰"
      ],
      "en": [
        "World Cup winner in 1958, 1962 and 1970"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "confucius",
    "name": {
      "fa": "کنفوسیوس",
      "en": "Confucius"
    },
    "country": "china",
    "field": "thought",
    "born": -551,
    "died": -479,
    "summary": {
      "fa": "فیلسوف و آموزگار؛ بنیان‌گذار آیین کنفوسیوس",
      "en": "Philosopher and teacher; founder of Confucianism"
    },
    "bio": {
      "fa": [
        "کنفوسیوس در ۵۵۱ پیش از میلاد در دولت لو (چوفوی امروز در شاندونگ) به دنیا آمد و آموزگار و مشاور بود. او کوشید حاکمان را به حکومت اخلاقی ترغیب کند.",
        "شاگردانش سخنان او را در «گفتارها» گرد آوردند. آموزه‌هایش درباره‌ی انسانیت، آیین‌ها، احترام به خانواده و آموزش بیش از دو هزار سال بر فرهنگ چین و شرق آسیا اثر گذاشت."
      ],
      "en": [
        "Confucius was born in 551 BCE in the state of Lu (today’s Qufu in Shandong) and was a teacher and adviser. He tried to persuade rulers to govern ethically.",
        "His students collected his sayings in the Analects. His teachings on humaneness, ritual, respect for the family and education influenced Chinese and East Asian culture for more than two thousand years."
      ]
    },
    "achievements": {
      "fa": [
        "آموزه‌های کنفوسیوسی",
        "گفتارها (به‌دست شاگردانش)",
        "تأکید بر آموزش همگانی"
      ],
      "en": [
        "Confucian teachings",
        "The Analects (by his students)",
        "Emphasis on education for all"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "qin-shi-huang",
    "name": {
      "fa": "شی هوانگ‌دی",
      "en": "Qin Shi Huang"
    },
    "country": "china",
    "field": "politics",
    "born": -259,
    "died": -210,
    "summary": {
      "fa": "نخستین امپراتور چین",
      "en": "First emperor of China"
    },
    "bio": {
      "fa": [
        "او از ۲۴۷ پیش از میلاد پادشاه دولت کین بود و در ۲۲۱ پیش از میلاد با شکست دولت‌های دیگر چین را یکی کرد و لقب «نخستین امپراتور» گرفت.",
        "خط، واحدهای وزن و اندازه، پول و پهنای محور چرخ‌ها را یکسان کرد. حکومت او سخت بود. آرامگاهش با سپاه سفالین نزدیک شی‌آن مشهور است. در ۲۱۰ پیش از میلاد درگذشت و حکومت کین چند سال بعد فروپاشید."
      ],
      "en": [
        "He was king of Qin from 247 BCE and in 221 BCE, after defeating the other states, united China and took the title ‘First Emperor’.",
        "He standardized the script, weights and measures, money and the width of cart axles. His rule was harsh. His tomb with its terracotta army near Xi’an is famous. He died in 210 BCE and the Qin collapsed a few years later."
      ]
    },
    "achievements": {
      "fa": [
        "یکپارچگی چین (۲۲۱ پیش از میلاد)",
        "یکسان‌سازی خط و پول و اندازه‌ها",
        "آرامگاه با سپاه سفالین"
      ],
      "en": [
        "The unification of China (221 BCE)",
        "Standardizing script, money and measures",
        "The tomb with the terracotta army"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "sima-qian",
    "name": {
      "fa": "سیما چیان",
      "en": "Sima Qian"
    },
    "country": "china",
    "field": "arts",
    "born": -145,
    "died": -86,
    "summary": {
      "fa": "مورخ بزرگ دربار هان",
      "en": "The great historian of the Han court"
    },
    "bio": {
      "fa": [
        "سیما چیان مورخ و ستاره‌شناس دربار امپراتور وو بود (سال‌های تولد و مرگش تقریبی است). پس از آنکه از یک سردار شکست‌خورده دفاع کرد، به مجازات سخت محکوم شد، اما کار نوشتن را ادامه داد.",
        "کتاب «یادداشت‌های مورخ بزرگ» (شی‌جی) او تاریخ چین را از دوران افسانه‌ای تا زمان خودش روایت می‌کند و الگوی تاریخ‌نگاری چین شد."
      ],
      "en": [
        "Sima Qian was a historian and astronomer at the court of Emperor Wu (his years of birth and death are approximate). After defending a defeated general he was given a harsh punishment, but he continued writing.",
        "His Records of the Grand Historian (Shiji) tells the history of China from legendary times to his own and became the model of Chinese historiography."
      ]
    },
    "achievements": {
      "fa": [
        "یادداشت‌های مورخ بزرگ (شی‌جی)",
        "الگوی تاریخ‌نگاری چین"
      ],
      "en": [
        "The Records of the Grand Historian (Shiji)",
        "The model for Chinese historiography"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "wu-zetian",
    "name": {
      "fa": "ووجه‌تیان",
      "en": "Wu Zetian"
    },
    "country": "china",
    "field": "politics",
    "born": 624,
    "died": 705,
    "summary": {
      "fa": "تنها زن امپراتور در تاریخ چین",
      "en": "The only female emperor in Chinese history"
    },
    "bio": {
      "fa": [
        "وو در دربار تانگ همسر امپراتور شد و پس از مرگ او سال‌ها در مقام نایب‌السلطنه‌ی پسرانش قدرت را در دست داشت. در ۶۹۰ سلسله‌ی خود، ژو، را اعلام کرد و خود امپراتور شد.",
        "او دیوان‌سالاری را بر پایه‌ی امتحان‌ها تقویت کرد. در ۷۰۵ برکنار شد و همان سال درگذشت."
      ],
      "en": [
        "Wu became an emperor’s consort at the Tang court and after his death held power for years as regent for her sons. In 690 she proclaimed her own dynasty, the Zhou, and became emperor herself.",
        "She strengthened a bureaucracy based on examinations. She was deposed in 705 and died the same year."
      ]
    },
    "achievements": {
      "fa": [
        "تنها زنی که خود امپراتور چین شد (۶۹۰ تا ۷۰۵)",
        "تقویت نظام امتحانات دیوانی"
      ],
      "en": [
        "The only woman to become emperor of China in her own right (690 to 705)",
        "Strengthening the civil service examinations"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "li-bai",
    "name": {
      "fa": "لی‌بای",
      "en": "Li Bai"
    },
    "country": "china",
    "field": "arts",
    "born": 701,
    "died": 762,
    "summary": {
      "fa": "از بزرگ‌ترین شاعران چین",
      "en": "One of China’s greatest poets"
    },
    "bio": {
      "fa": [
        "لی‌بای شاعر دوره‌ی تانگ بود که در سیچوان بزرگ شد. شعرهایش با تخیل، آزادی‌خواهی و سبک روان شناخته می‌شود و حدود هزار شعر او باقی مانده است.",
        "او سال‌ها در سفر بود و برای مدتی در دربار تانگ زندگی کرد. در ۷۶۲ درگذشت."
      ],
      "en": [
        "Li Bai was a poet of the Tang period who grew up in Sichuan. His poems are known for imagination, free spirit and a flowing style, and about a thousand of them survive.",
        "He travelled for years and lived for a time at the Tang court. He died in 762."
      ]
    },
    "achievements": {
      "fa": [
        "حدود هزار شعر باقی‌مانده",
        "نماد شعر عصر تانگ"
      ],
      "en": [
        "About a thousand surviving poems",
        "A symbol of Tang poetry"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "du-fu",
    "name": {
      "fa": "دوفو",
      "en": "Du Fu"
    },
    "country": "china",
    "field": "arts",
    "born": 712,
    "died": 770,
    "summary": {
      "fa": "شاعر دوره‌ی تانگ، «شاعر-مورخ»",
      "en": "Tang poet, the ‘poet-historian’"
    },
    "bio": {
      "fa": [
        "دوفو در ایالت هنان به دنیا آمد. شورش آن لوشان را از نزدیک دید و رنج مردم و جنگ را در شعرش ثبت کرد؛ برای همین او را «شاعر-مورخ» می‌نامند.",
        "حدود ۱۴۰۰ شعر او باقی مانده است. او را همراه لی‌بای از بزرگ‌ترین شاعران چین می‌دانند."
      ],
      "en": [
        "Du Fu was born in Henan. He saw the An Lushan rebellion at close quarters and recorded the suffering of the people and of war in his poetry, which is why he is called the ‘poet-historian’.",
        "About 1,400 of his poems survive. Together with Li Bai he is regarded as one of China’s greatest poets."
      ]
    },
    "achievements": {
      "fa": [
        "حدود ۱۴۰۰ شعر باقی‌مانده",
        "ثبت رنج مردم در شعر"
      ],
      "en": [
        "About 1,400 surviving poems",
        "Recording the people’s suffering in poetry"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "zheng-he",
    "name": {
      "fa": "ژنگ هه",
      "en": "Zheng He"
    },
    "country": "china",
    "field": "exploration",
    "born": 1371,
    "died": 1433,
    "summary": {
      "fa": "دریاسالار مینگ و فرمانده سفرهای بزرگ دریایی",
      "en": "Ming admiral and commander of the great sea voyages"
    },
    "bio": {
      "fa": [
        "ژنگ هه در یوننان در خانواده‌ای مسلمان به دنیا آمد و در دربار مینگ خواجه و فرمانده شد. امپراتور یونگله او را فرمانده ناوگان بزرگ دریایی کرد.",
        "او میان ۱۴۰۵ و ۱۴۳۳ هفت سفر کرد و با ناوگانی از ده‌ها کشتی بزرگ به آسیای جنوب شرقی، هند، عربستان و شرق آفریقا رسید. در یکی از این سفرها یا پس از آن درگذشت."
      ],
      "en": [
        "Zheng He was born in Yunnan into a Muslim family and became a eunuch and commander at the Ming court. The Yongle Emperor made him commander of the great fleet.",
        "Between 1405 and 1433 he made seven voyages, reaching South-East Asia, India, Arabia and East Africa with a fleet of dozens of large ships. He died during or after one of these voyages."
      ]
    },
    "achievements": {
      "fa": [
        "هفت سفر دریایی (۱۴۰۵ تا ۱۴۳۳)",
        "گسترش دیپلماسی و تجارت مینگ"
      ],
      "en": [
        "Seven sea voyages (1405 to 1433)",
        "Spreading Ming diplomacy and trade"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "kangxi",
    "name": {
      "fa": "امپراتور کانگ‌شی",
      "en": "The Kangxi Emperor"
    },
    "country": "china",
    "field": "politics",
    "born": 1654,
    "died": 1722,
    "summary": {
      "fa": "امپراتور چینگ با ۶۱ سال سلطنت",
      "en": "Qing emperor with a 61-year reign"
    },
    "bio": {
      "fa": [
        "کانگ‌شی از ۱۶۶۱ تا ۱۷۲۲ امپراتور بود؛ از طولانی‌ترین دوره‌های سلطنت در تاریخ چین. در ۱۶۶۹ از زیر نفوذ نایب‌السلطنه‌ها بیرون آمد و خود حکومت را به دست گرفت.",
        "شورش سه فئودال را سرکوب کرد، تایوان را در ۱۶۸۳ گرفت و در ۱۶۸۹ پیمان نرچینسک را با روسیه امضا کرد. فرهنگ‌نامه‌ی کانگ‌شی (۱۷۱۶) در دوران او تدوین شد."
      ],
      "en": [
        "Kangxi was emperor from 1661 to 1722, one of the longest reigns in Chinese history. In 1669 he escaped the influence of the regents and took government into his own hands.",
        "He put down the Revolt of the Three Feudatories, took Taiwan in 1683 and signed the Treaty of Nerchinsk with Russia in 1689. The Kangxi Dictionary (1716) was compiled in his time."
      ]
    },
    "achievements": {
      "fa": [
        "سرکوب شورش سه فئودال",
        "الحاق تایوان (۱۶۸۳)",
        "پیمان نرچینسک (۱۶۸۹)"
      ],
      "en": [
        "Putting down the Revolt of the Three Feudatories",
        "The annexation of Taiwan (1683)",
        "The Treaty of Nerchinsk (1689)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "sun-yat-sen",
    "name": {
      "fa": "سان یات‌سن",
      "en": "Sun Yat-sen"
    },
    "country": "china",
    "field": "politics",
    "born": 1866,
    "died": 1925,
    "summary": {
      "fa": "رهبر انقلاب شین‌های و نخستین رئیس‌جمهور موقت چین",
      "en": "Leader of the Xinhai Revolution and first provisional president of China"
    },
    "bio": {
      "fa": [
        "سان یات‌سن در گوانگدونگ به دنیا آمد و پزشک بود. سال‌ها برای سرنگونی سلسله‌ی چینگ فعالیت کرد، بیشتر وقت‌ها در تبعید.",
        "پس از انقلاب ۱۹۱۱ رئیس‌جمهور موقت جمهوری چین شد و حزب ملی‌گرا (گومیندان) را بنیان گذاشت. «سه اصل مردم» (ملی‌گرایی، حاکمیت مردم و معیشت مردم) را مطرح کرد. در ۱۹۲۵ در پکن درگذشت."
      ],
      "en": [
        "Sun Yat-sen was born in Guangdong and was a physician. For years he worked to overthrow the Qing dynasty, most of the time in exile.",
        "After the 1911 revolution he became provisional president of the Republic of China and co-founded the Nationalist Party (Kuomintang). He put forward the ‘Three Principles of the People’ (nationalism, democracy and people’s livelihood). He died in Beijing in 1925."
      ]
    },
    "achievements": {
      "fa": [
        "رهبری انقلاب شین‌های",
        "سه اصل مردم",
        "بنیان‌گذاری گومیندان"
      ],
      "en": [
        "Leading the Xinhai Revolution",
        "The Three Principles of the People",
        "Co-founding the Kuomintang"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "mao-zedong",
    "name": {
      "fa": "مائو تسه‌تونگ",
      "en": "Mao Zedong"
    },
    "country": "china",
    "field": "politics",
    "born": 1893,
    "died": 1976,
    "summary": {
      "fa": "بنیان‌گذار جمهوری خلق چین",
      "en": "Founder of the People’s Republic of China"
    },
    "bio": {
      "fa": [
        "مائو در شائوشان در هونان به دنیا آمد. از بنیان‌گذاران حزب کمونیست چین بود و در راهپیمایی بزرگ (۱۹۳۴ تا ۱۹۳۵) به رهبری رسید. در ۱ اکتبر ۱۹۴۹ جمهوری خلق چین را اعلام کرد و تا مرگش در ۱۹۷۶ رهبر حزب ماند.",
        "حکومت او اصلاحات ارضی، گسترش سواد و بازگرداندن یکپارچگی کشور را به همراه داشت، اما «جهش بزرگ به جلو» به قحطی بزرگی انجامید و «انقلاب فرهنگی» آشوب و آزار سیاسی گسترده آورد. مورخان میراث او را بسیار متفاوت ارزیابی می‌کنند."
      ],
      "en": [
        "Mao was born in Shaoshan in Hunan. He was a founder of the Chinese Communist Party and rose to leadership during the Long March (1934 to 1935). On 1 October 1949 he proclaimed the People’s Republic of China and remained party leader until his death in 1976.",
        "His rule brought land reform, the spread of literacy and the restoration of the country’s unity, but the ‘Great Leap Forward’ led to a great famine and the ‘Cultural Revolution’ brought turmoil and widespread political persecution. Historians assess his legacy very differently."
      ]
    },
    "achievements": {
      "fa": [
        "رهبری کمونیست‌ها در جنگ داخلی",
        "اعلام جمهوری خلق چین (۱۹۴۹)"
      ],
      "en": [
        "Leading the Communists in the civil war",
        "Proclaiming the People’s Republic of China (1949)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "deng-xiaoping",
    "name": {
      "fa": "دنگ شیائوپینگ",
      "en": "Deng Xiaoping"
    },
    "country": "china",
    "field": "politics",
    "born": 1904,
    "died": 1997,
    "summary": {
      "fa": "معمار اصلاحات اقتصادی چین",
      "en": "Architect of China’s economic reforms"
    },
    "bio": {
      "fa": [
        "دنگ در سیچوان به دنیا آمد، در جوانی در فرانسه کار و تحصیل کرد و از رهبران حزب کمونیست شد. پس از مرگ مائو، از ۱۹۷۸ رهبر عملی چین بود.",
        "او اصلاحات و درهای باز را آغاز کرد: مناطق ویژه‌ی اقتصادی، سرمایه‌ی خارجی و بازار. فرمول «یک کشور، دو نظام» را برای هنگ‌کنگ مطرح کرد. او همچنین سرکوب نظامی اعتراض‌های ۱۹۸۹ را تأیید کرد. در ۱۹۹۷ درگذشت."
      ],
      "en": [
        "Deng was born in Sichuan, worked and studied in France in his youth and became one of the leaders of the Communist Party. After Mao’s death he was China’s effective leader from 1978.",
        "He started reform and opening up: special economic zones, foreign capital and markets. He put forward the ‘one country, two systems’ formula for Hong Kong. He also approved the military suppression of the 1989 protests. He died in 1997."
      ]
    },
    "achievements": {
      "fa": [
        "اصلاحات و درهای باز (از ۱۹۷۸)",
        "مناطق ویژه‌ی اقتصادی",
        "یک کشور، دو نظام"
      ],
      "en": [
        "Reform and opening up (from 1978)",
        "Special economic zones",
        "One country, two systems"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "shotoku",
    "name": {
      "fa": "شاهزاده شوتوکو",
      "en": "Prince Shōtoku"
    },
    "country": "japan",
    "field": "politics",
    "born": 574,
    "died": 622,
    "summary": {
      "fa": "نایب‌السلطنه و حامی آیین بودا در ژاپن",
      "en": "Regent and patron of Buddhism in Japan"
    },
    "bio": {
      "fa": [
        "شوتوکو نایب‌السلطنه‌ی ملکه سویکو بود و بر دربار یاماتو نفوذ بسیار داشت. او فرستادگانی به دربار سوئی در چین فرستاد (۶۰۷) تا از تمدن چین بیاموزد.",
        "«قانون اساسی هفده‌ماده‌ای» (۶۰۴) را که اصول اخلاقی و حکومتی بود نوشت و آیین بودا را حمایت کرد. معبد هوریوجی با نام او پیوند دارد."
      ],
      "en": [
        "Shōtoku was regent for Empress Suiko and had great influence at the Yamato court. He sent envoys to the Sui court in China (607) to learn from Chinese civilization.",
        "He wrote the ‘Seventeen-Article Constitution’ (604), a set of ethical and governing principles, and supported Buddhism. The Hōryū-ji temple is linked with his name."
      ]
    },
    "achievements": {
      "fa": [
        "قانون اساسی هفده‌ماده‌ای (۶۰۴)",
        "فرستادگان به چین (۶۰۷)",
        "حمایت از آیین بودا"
      ],
      "en": [
        "The Seventeen-Article Constitution (604)",
        "Envoys to China (607)",
        "Support for Buddhism"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "murasaki-shikibu",
    "name": {
      "fa": "مورازاکی شیکیبو",
      "en": "Murasaki Shikibu"
    },
    "country": "japan",
    "field": "arts",
    "born": 973,
    "died": 1014,
    "summary": {
      "fa": "نویسنده‌ی «حکایت گنجی»",
      "en": "Author of the Tale of Genji"
    },
    "bio": {
      "fa": [
        "مورازاکی شیکیبو در دربار هیان ندیمه‌ی ملکه بود (سال‌های تولد و مرگش تقریبی است و منابع درباره‌ی آن‌ها اختلاف دارند).",
        "«حکایت گنجی» او که حدود سال‌های ۱۰۰۰ تا ۱۰۱۰ نوشته شد، به‌عنوان نخستین رمان جهان شناخته می‌شود. او یادداشت‌های روزانه‌ای از زندگی دربار هم نوشت."
      ],
      "en": [
        "Murasaki Shikibu was a lady-in-waiting to the empress at the Heian court (her years of birth and death are approximate and sources disagree about them).",
        "Her Tale of Genji, written around 1000 to 1010, is regarded as the world’s first novel. She also wrote a diary of court life."
      ]
    },
    "achievements": {
      "fa": [
        "حکایت گنجی",
        "یادداشت‌های روزانه‌ی درباری"
      ],
      "en": [
        "The Tale of Genji",
        "A diary of court life"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "yoritomo",
    "name": {
      "fa": "میناموتو نو یوریتومو",
      "en": "Minamoto no Yoritomo"
    },
    "country": "japan",
    "field": "politics",
    "born": 1147,
    "died": 1199,
    "summary": {
      "fa": "نخستین شوگون و بنیان‌گذار شوگونی کاماکورا",
      "en": "First shogun and founder of the Kamakura shogunate"
    },
    "bio": {
      "fa": [
        "یوریتومو از خاندان میناموتو بود و در جنگ گنپی (۱۱۸۰ تا ۱۱۸۵) علیه خاندان تایرا جنگید. پس از پیروزی، مرکز حکومت را در کاماکورا، دور از دربار کیوتو، قرار داد.",
        "در ۱۱۹۲ امپراتور لقب شوگون را به او داد. حکومت نظامی او الگوی قرن‌ها حکومت شوگون‌ها در ژاپن شد."
      ],
      "en": [
        "Yoritomo belonged to the Minamoto clan and fought the Taira clan in the Genpei War (1180 to 1185). After victory he placed the seat of government at Kamakura, away from the Kyoto court.",
        "In 1192 the emperor gave him the title of shogun. His military government became the model for centuries of shogun rule in Japan."
      ]
    },
    "achievements": {
      "fa": [
        "پیروزی در جنگ گنپی",
        "تأسیس شوگونی کاماکورا"
      ],
      "en": [
        "Victory in the Genpei War",
        "Founding the Kamakura shogunate"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "nobunaga",
    "name": {
      "fa": "اودا نوبوناگا",
      "en": "Oda Nobunaga"
    },
    "country": "japan",
    "field": "politics",
    "born": 1534,
    "died": 1582,
    "summary": {
      "fa": "سردار جنگی که یکپارچگی ژاپن را آغاز کرد",
      "en": "Warlord who began the unification of Japan"
    },
    "bio": {
      "fa": [
        "نوبوناگا فرمانروای ایالت اواری بود. او در ۱۵۶۰ در اوکه‌هازاما به نیروی بسیار بزرگ‌تری پیروز شد و در نبرد ناگاشینو (۱۵۷۵) از تفنگ به‌صورت گسترده بهره گرفت.",
        "در ۱۵۷۳ آخرین شوگون آشیکاگا را برکنار کرد. در ۱۵۸۲ در معبد هونوجی به‌دست یکی از سردارانش، آکه‌چی میتسوهیده، محاصره شد و کشته شد."
      ],
      "en": [
        "Nobunaga was lord of Owari province. In 1560 he defeated a much larger force at Okehazama and at the Battle of Nagashino (1575) he made wide use of firearms.",
        "In 1573 he deposed the last Ashikaga shogun. In 1582 he was surrounded and killed at the Honnō-ji temple by one of his own generals, Akechi Mitsuhide."
      ]
    },
    "achievements": {
      "fa": [
        "نبرد ناگاشینو (۱۵۷۵)",
        "پایان شوگونی آشیکاگا (۱۵۷۳)"
      ],
      "en": [
        "The Battle of Nagashino (1575)",
        "The end of the Ashikaga shogunate (1573)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "hideyoshi",
    "name": {
      "fa": "تویوتومی هیده‌یوشی",
      "en": "Toyotomi Hideyoshi"
    },
    "country": "japan",
    "field": "politics",
    "born": 1537,
    "died": 1598,
    "summary": {
      "fa": "فرمانروایی که ژاپن را یکی کرد",
      "en": "The ruler who unified Japan"
    },
    "bio": {
      "fa": [
        "هیده‌یوشی از خانواده‌ای روستایی بود و در خدمت نوبوناگا بالا آمد. پس از مرگ نوبوناگا قدرت را به دست گرفت و در ۱۵۹۰ ژاپن را یکی کرد.",
        "او در ۱۵۸۸ سلاح‌های دهقانان را جمع‌آوری کرد تا طبقات را از هم جدا کند و در ۱۵۹۲ و ۱۵۹۷ به کره حمله کرد. جنگ بی‌نتیجه ماند و او در ۱۵۹۸ درگذشت."
      ],
      "en": [
        "Hideyoshi came from a peasant family and rose in Nobunaga’s service. After Nobunaga’s death he took power and in 1590 unified Japan.",
        "In 1588 he collected the peasants’ weapons to separate the classes, and in 1592 and 1597 he invaded Korea. The war came to nothing and he died in 1598."
      ]
    },
    "achievements": {
      "fa": [
        "یکپارچگی ژاپن (۱۵۹۰)",
        "شکار شمشیر (۱۵۸۸)"
      ],
      "en": [
        "The unification of Japan (1590)",
        "The sword hunt (1588)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "ieyasu",
    "name": {
      "fa": "توکوگاوا ایه‌یاسو",
      "en": "Tokugawa Ieyasu"
    },
    "country": "japan",
    "field": "politics",
    "born": 1543,
    "died": 1616,
    "summary": {
      "fa": "بنیان‌گذار شوگونی توکوگاوا",
      "en": "Founder of the Tokugawa shogunate"
    },
    "bio": {
      "fa": [
        "ایه‌یاسو متحد نوبوناگا و هیده‌یوشی بود. پس از مرگ هیده‌یوشی در نبرد سکیگاهارا (۲۱ اکتبر ۱۶۰۰) رقبایش را شکست داد و در ۱۶۰۳ شوگون شد.",
        "او در ۱۶۰۵ مقام را به پسرش واگذار کرد، اما تا پایان عمر قدرت واقعی را نگه داشت. شوگونی او تا ۱۸۶۸ دوام آورد."
      ],
      "en": [
        "Ieyasu was an ally of Nobunaga and Hideyoshi. After Hideyoshi’s death he defeated his rivals at the Battle of Sekigahara (21 October 1600) and became shogun in 1603.",
        "In 1605 he handed the office to his son but kept real power until the end of his life. His shogunate lasted until 1868."
      ]
    },
    "achievements": {
      "fa": [
        "پیروزی در سکیگاهارا (۱۶۰۰)",
        "تأسیس شوگونی توکوگاوا (۱۶۰۳)"
      ],
      "en": [
        "Victory at Sekigahara (1600)",
        "Founding the Tokugawa shogunate (1603)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "basho",
    "name": {
      "fa": "ماتسوئو باشو",
      "en": "Matsuo Bashō"
    },
    "country": "japan",
    "field": "arts",
    "born": 1644,
    "died": 1694,
    "summary": {
      "fa": "بزرگ‌ترین شاعر هایکو",
      "en": "The greatest haiku poet"
    },
    "bio": {
      "fa": [
        "باشو در دوره‌ی ادو به دنیا آمد و زندگی‌اش را وقف شعر و سفر کرد. هایکو را از یک سرگرمی به هنری جدی تبدیل کرد.",
        "سفرنامه‌ی منظوم «راه باریک شمال» او درباره‌ی سفرش در ۱۶۸۹ است و پس از مرگش (۱۷۰۲) چاپ شد."
      ],
      "en": [
        "Bashō was born in the Edo period and devoted his life to poetry and travel. He turned haiku from a pastime into a serious art.",
        "His poetic travel diary The Narrow Road to the Deep North is about his journey of 1689 and was printed after his death (1702)."
      ]
    },
    "achievements": {
      "fa": [
        "ارتقای هایکو به هنری جدی",
        "راه باریک شمال"
      ],
      "en": [
        "Raising haiku to a serious art",
        "The Narrow Road to the Deep North"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "hokusai",
    "name": {
      "fa": "کاتسوشیکا هوکوسای",
      "en": "Katsushika Hokusai"
    },
    "country": "japan",
    "field": "arts",
    "era": "modern",
    "born": 1760,
    "died": 1849,
    "summary": {
      "fa": "هنرمند اوکیو-ائه، خالق «موج بزرگ»",
      "en": "Ukiyo-e artist, creator of the ‘Great Wave’"
    },
    "bio": {
      "fa": [
        "هوکوسای نقاش و چاپگر ادو بود و در طول عمر خود بیش از سی نام هنری به کار برد. کارش را از کودکی آغاز کرد و تا پایان عمر ادامه داد.",
        "«موج بزرگ کاناگاوا» (حدود ۱۸۳۱) از مجموعه‌ی «سی‌وشش منظره از کوه فوجی» است و از شناخته‌شده‌ترین تصاویر هنر ژاپن در جهان شد."
      ],
      "en": [
        "Hokusai was a painter and printmaker of Edo and used more than thirty art names in his lifetime. He began his work in childhood and continued until the age of eighty-nine.",
        "The Great Wave off Kanagawa (about 1831) is part of the series Thirty-six Views of Mount Fuji and became one of the best-known images of Japanese art in the world."
      ]
    },
    "achievements": {
      "fa": [
        "موج بزرگ کاناگاوا (حدود ۱۸۳۱)",
        "سی‌وشش منظره از کوه فوجی",
        "هوکوسای مانگا"
      ],
      "en": [
        "The Great Wave off Kanagawa (about 1831)",
        "Thirty-six Views of Mount Fuji",
        "Hokusai Manga"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "emperor-meiji",
    "name": {
      "fa": "امپراتور میجی",
      "en": "Emperor Meiji"
    },
    "country": "japan",
    "field": "politics",
    "born": 1852,
    "died": 1912,
    "summary": {
      "fa": "امپراتور دوران نوسازی ژاپن",
      "en": "Emperor of Japan’s modernization"
    },
    "bio": {
      "fa": [
        "موتسوهیتو در ۱۸۶۷ در چهارده‌سالگی امپراتور شد. در دوره‌ی او احیای میجی (۱۸۶۸) رخ داد و ژاپن از نظام فئودالی به دولتی مدرن، صنعتی و نظامی تبدیل شد.",
        "قانون اساسی میجی در ۱۸۸۹ به نام او صادر شد. ژاپن در دوره‌ی او از چین و روسیه پیروز شد و قدرتی منطقه‌ای گشت. او در ۱۹۱۲ درگذشت."
      ],
      "en": [
        "Mutsuhito became emperor in 1867 at the age of fourteen. In his reign the Meiji Restoration (1868) took place and Japan changed from a feudal system into a modern, industrial and military state.",
        "The Meiji Constitution was issued in his name in 1889. In his reign Japan defeated China and Russia and became a regional power. He died in 1912."
      ]
    },
    "achievements": {
      "fa": [
        "احیای میجی (۱۸۶۸)",
        "قانون اساسی ۱۸۸۹",
        "نوسازی ژاپن"
      ],
      "en": [
        "The Meiji Restoration (1868)",
        "The constitution of 1889",
        "Japan’s modernization"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "fukuzawa",
    "name": {
      "fa": "فوکوزاوا یوکیچی",
      "en": "Fukuzawa Yukichi"
    },
    "country": "japan",
    "field": "thought",
    "born": 1835,
    "died": 1901,
    "summary": {
      "fa": "مربی و نویسنده، مروج دانش غربی در ژاپن",
      "en": "Educator and writer, promoter of Western learning in Japan"
    },
    "bio": {
      "fa": [
        "فوکوزاوا که از خانواده‌ای سامورایی بود، زبان هلندی و سپس انگلیسی آموخت و به آمریکا و اروپا سفر کرد. او برای معرفی دانش و نهادهای غربی نوشت.",
        "او مدرسه‌ای را بنیان گذاشت که بعدها دانشگاه کیو شد. کتاب «تشویق به آموختن» (۱۸۷۲ تا ۱۸۷۶) از مهم‌ترین آثار او و از پرفروش‌ترین کتاب‌های آن دوران است."
      ],
      "en": [
        "Fukuzawa, who came from a samurai family, learned Dutch and then English and travelled to America and Europe. He wrote to introduce Western learning and institutions.",
        "He founded a school that later became Keio University. His book An Encouragement of Learning (1872 to 1876) is among his most important works and one of the best sellers of the time."
      ]
    },
    "achievements": {
      "fa": [
        "تشویق به آموختن (۱۸۷۲ تا ۱۸۷۶)",
        "بنیان‌گذاری دانشگاه کیو"
      ],
      "en": [
        "An Encouragement of Learning (1872 to 1876)",
        "Founding Keio University"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "hirohito",
    "name": {
      "fa": "امپراتور هیروهیتو",
      "en": "Emperor Hirohito"
    },
    "country": "japan",
    "field": "politics",
    "born": 1901,
    "died": 1989,
    "summary": {
      "fa": "امپراتور شووا؛ امپراتور ژاپن در دوران جنگ و پس از آن",
      "en": "Emperor Shōwa; emperor of Japan in wartime and after"
    },
    "bio": {
      "fa": [
        "هیروهیتو از ۱۹۲۶ تا ۱۹۸۹ امپراتور بود، طولانی‌ترین دوره‌ی سلطنت در تاریخ ژاپن. او در دوران جنگ جهانی دوم امپراتور بود و در ۱۵ اوت ۱۹۴۵ تسلیم را از رادیو اعلام کرد.",
        "پس از جنگ، در دوران اشغال امپراتور ماند اما نقش او نمادین شد. مورخان درباره‌ی میزان مسئولیت او در جنگ اختلاف نظر دارند."
      ],
      "en": [
        "Hirohito was emperor from 1926 to 1989, the longest reign in Japanese history. He was emperor during the Second World War and announced the surrender on the radio on 15 August 1945.",
        "After the war he remained emperor during the occupation but his role became symbolic. Historians disagree about the extent of his responsibility for the war."
      ]
    },
    "achievements": {
      "fa": [
        "طولانی‌ترین سلطنت در تاریخ ژاپن (۱۹۲۶ تا ۱۹۸۹)",
        "اعلام تسلیم در ۱۵ اوت ۱۹۴۵"
      ],
      "en": [
        "The longest reign in Japanese history (1926 to 1989)",
        "Announcing the surrender on 15 August 1945"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "kurosawa",
    "name": {
      "fa": "آکیرا کوروساوا",
      "en": "Akira Kurosawa"
    },
    "country": "japan",
    "field": "arts",
    "born": 1910,
    "died": 1998,
    "summary": {
      "fa": "کارگردان سینما، سازنده‌ی «هفت سامورایی»",
      "en": "Film director, maker of Seven Samurai"
    },
    "bio": {
      "fa": [
        "کوروساوا در توکیو به دنیا آمد و از بزرگ‌ترین کارگردان‌های تاریخ سینما شناخته می‌شود. فیلم «راشومون» (۱۹۵۰) در ۱۹۵۱ شیر طلایی ونیز را گرفت و سینمای ژاپن را به جهان شناساند.",
        "«هفت سامورایی» (۱۹۵۴) و «ران» (۱۹۸۵) از دیگر آثار مشهور اوست. او در ۱۹۹۸ درگذشت."
      ],
      "en": [
        "Kurosawa was born in Tokyo and is regarded as one of the greatest film directors in history. His film Rashomon (1950) won the Golden Lion at Venice in 1951 and introduced Japanese cinema to the world.",
        "Seven Samurai (1954) and Ran (1985) are among his other famous works. He died in 1998."
      ]
    },
    "achievements": {
      "fa": [
        "راشومون (۱۹۵۰)",
        "هفت سامورایی (۱۹۵۴)",
        "ران (۱۹۸۵)"
      ],
      "en": [
        "Rashomon (1950)",
        "Seven Samurai (1954)",
        "Ran (1985)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "cyrus",
    "name": {
      "fa": "کوروش بزرگ",
      "en": "Cyrus the Great"
    },
    "country": "iran",
    "field": "politics",
    "born": -600,
    "died": -530,
    "summary": {
      "fa": "بنیان‌گذار شاهنشاهی هخامنشی",
      "en": "Founder of the Achaemenid Empire"
    },
    "bio": {
      "fa": [
        "کوروش دوم، پادشاه پارس، حدود ۵۵۰ پیش از میلاد ماد را شکست داد و شاهنشاهی هخامنشی را بنیان گذاشت (سال تولدش تقریبی است). او لیدیه را گرفت و در ۵۳۹ پیش از میلاد بابل را فتح کرد.",
        "«استوانه‌ی کوروش» از رفتار او با مردم بابل می‌گوید و برخی آن را یکی از نخستین بیانیه‌های حقوق انسان می‌دانند؛ مورخان درباره‌ی این برداشت اختلاف دارند. او حدود ۵۳۰ پیش از میلاد در نبرد با ماساگت‌ها درگذشت."
      ],
      "en": [
        "Cyrus II, king of Persia, defeated the Medes around 550 BCE and founded the Achaemenid Empire (his birth year is approximate). He took Lydia and conquered Babylon in 539 BCE.",
        "The ‘Cyrus Cylinder’ tells of his treatment of the people of Babylon and some regard it as one of the first declarations of human rights; historians disagree about this view. He died around 530 BCE in battle against the Massagetae."
      ]
    },
    "achievements": {
      "fa": [
        "بنیان‌گذاری شاهنشاهی هخامنشی",
        "فتح بابل (۵۳۹ پیش از میلاد)",
        "استوانه‌ی کوروش"
      ],
      "en": [
        "Founding the Achaemenid Empire",
        "The conquest of Babylon (539 BCE)",
        "The Cyrus Cylinder"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "darius-i",
    "name": {
      "fa": "داریوش بزرگ",
      "en": "Darius the Great"
    },
    "country": "iran",
    "field": "politics",
    "born": -550,
    "died": -486,
    "summary": {
      "fa": "پادشاه هخامنشی و سازنده‌ی تخت جمشید",
      "en": "Achaemenid king and builder of Persepolis"
    },
    "bio": {
      "fa": [
        "داریوش اول از ۵۲۲ تا ۴۸۶ پیش از میلاد پادشاه بود. او شاهنشاهی را به ایالت‌ها (ساتراپی) تقسیم کرد، راه شاهی، پول سکه‌ای و نظام مالیاتی ساخت.",
        "ساخت تخت جمشید را حدود ۵۱۸ پیش از میلاد آغاز کرد. کتیبه‌ی بیستون او به سه زبان (پارسی باستان، ایلامی و بابلی) از مهم‌ترین اسناد دوران هخامنشی است."
      ],
      "en": [
        "Darius I was king from 522 to 486 BCE. He divided the empire into provinces (satrapies) and built the Royal Road, a coinage and a tax system.",
        "He began the construction of Persepolis around 518 BCE. His Behistun inscription in three languages (Old Persian, Elamite and Babylonian) is among the most important documents of the Achaemenid period."
      ]
    },
    "achievements": {
      "fa": [
        "تقسیم شاهنشاهی به ساتراپی‌ها",
        "راه شاهی",
        "کتیبه‌ی بیستون",
        "آغاز ساخت تخت جمشید"
      ],
      "en": [
        "Dividing the empire into satrapies",
        "The Royal Road",
        "The Behistun inscription",
        "Starting the construction of Persepolis"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "ardashir-i",
    "name": {
      "fa": "اردشیر بابکان",
      "en": "Ardashir I"
    },
    "country": "iran",
    "field": "politics",
    "born": 180,
    "died": 242,
    "summary": {
      "fa": "بنیان‌گذار شاهنشاهی ساسانی",
      "en": "Founder of the Sasanian Empire"
    },
    "bio": {
      "fa": [
        "اردشیر در پارس به دنیا آمد (سال تولدش تقریباً ۱۸۰ میلادی است). او در ۲۲۴ میلادی آخرین شاه اشکانی، اردوان چهارم، را شکست داد و شاهنشاهی ساسانی را بنیان گذاشت.",
        "او دولتی متمرکز ساخت و آیین زرتشتی را پشتوانه‌ی حکومت کرد. در ۲۴۲ درگذشت و پسرش شاپور اول جانشین او شد."
      ],
      "en": [
        "Ardashir was born in Pars (his birth year is about 180 CE). In 224 CE he defeated the last Parthian king, Artabanus IV, and founded the Sasanian Empire.",
        "He built a centralized state and made Zoroastrianism the support of the government. He died in 242 and his son Shapur I succeeded him."
      ]
    },
    "achievements": {
      "fa": [
        "بنیان‌گذاری شاهنشاهی ساسانی (۲۲۴)",
        "ایجاد دولتی متمرکز"
      ],
      "en": [
        "Founding the Sasanian Empire (224)",
        "Creating a centralized state"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "ferdowsi",
    "name": {
      "fa": "ابوالقاسم فردوسی",
      "en": "Ferdowsi"
    },
    "country": "iran",
    "field": "arts",
    "born": 940,
    "died": 1020,
    "summary": {
      "fa": "سراینده‌ی شاهنامه",
      "en": "Poet of the Shahnameh"
    },
    "bio": {
      "fa": [
        "فردوسی در توس خراسان به دنیا آمد (سال‌های تولد و مرگش، حدود ۹۴۰ و ۱۰۲۰، تقریبی است). او حدود سی سال روی «شاهنامه» کار کرد و آن را در ۱۰۱۰ به پایان رساند.",
        "شاهنامه حدود پنجاه هزار بیت دارد و تاریخ و اسطوره‌ی ایران را از آغاز تا پایان ساسانیان روایت می‌کند. این اثر نقش بزرگی در زنده‌ماندن زبان فارسی داشته است."
      ],
      "en": [
        "Ferdowsi was born in Tus in Khorasan (his years of birth and death, about 940 and 1020, are approximate). He worked on the Shahnameh for about thirty years and finished it in 1010.",
        "The Shahnameh has about fifty thousand couplets and tells the history and myths of Iran from the beginning to the end of the Sasanians. It played a great part in keeping the Persian language alive."
      ]
    },
    "achievements": {
      "fa": [
        "شاهنامه (۱۰۱۰)",
        "پاسداری از زبان فارسی"
      ],
      "en": [
        "The Shahnameh (1010)",
        "Safeguarding the Persian language"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "ibn-sina",
    "name": {
      "fa": "ابن سینا",
      "en": "Ibn Sina (Avicenna)"
    },
    "country": "iran",
    "field": "science",
    "born": 980,
    "died": 1037,
    "summary": {
      "fa": "پزشک و فیلسوف؛ نویسنده‌ی «قانون در طب»",
      "en": "Physician and philosopher; author of the Canon of Medicine"
    },
    "bio": {
      "fa": [
        "ابن سینا در افشنه نزدیک بخارا (امروز در ازبکستان) به دنیا آمد، در سرزمین‌های ایرانی زندگی کرد و در همدان درگذشت. او بیشتر آثارش را به عربی و برخی را به فارسی نوشت.",
        "«قانون در طب» (حدود ۱۰۲۵) تا قرن هفدهم در دانشگاه‌های اروپا تدریس می‌شد و «شفا» دانش‌نامه‌ای فلسفی و علمی است."
      ],
      "en": [
        "Ibn Sina was born in Afshana near Bukhara (today in Uzbekistan), lived in Iranian lands and died in Hamadan. He wrote most of his works in Arabic and some in Persian.",
        "The Canon of Medicine (about 1025) was taught in European universities until the seventeenth century, and the Book of Healing is a philosophical and scientific encyclopedia."
      ]
    },
    "achievements": {
      "fa": [
        "قانون در طب (حدود ۱۰۲۵)",
        "کتاب شفا"
      ],
      "en": [
        "The Canon of Medicine (about 1025)",
        "The Book of Healing"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "khayyam",
    "name": {
      "fa": "عمر خیام",
      "en": "Omar Khayyam"
    },
    "country": "iran",
    "field": "science",
    "born": 1048,
    "died": 1131,
    "summary": {
      "fa": "ریاضی‌دان، ستاره‌شناس و شاعر",
      "en": "Mathematician, astronomer and poet"
    },
    "bio": {
      "fa": [
        "خیام در نیشابور به دنیا آمد و همان‌جا درگذشت. او در جبر معادلات درجه‌ی سوم را بررسی کرد و در تدوین تقویم جلالی (۱۰۷۹) نقش داشت.",
        "رباعیات منسوب به او شهرت جهانی دارد؛ ولی سرایش هر رباعی به او قطعی نیست. ترجمه‌ی آزاد ادوارد فیتزجرالد (۱۸۵۹) آن را در غرب مشهور کرد."
      ],
      "en": [
        "Khayyam was born in Nishapur and died there. In algebra he studied cubic equations, and he took part in drawing up the Jalali calendar (1079).",
        "The quatrains attributed to him are world famous, but it is not certain that he wrote each one. Edward FitzGerald’s free translation (1859) made them famous in the West."
      ]
    },
    "achievements": {
      "fa": [
        "بررسی معادلات درجه‌ی سوم",
        "تقویم جلالی (۱۰۷۹)",
        "رباعیات خیام"
      ],
      "en": [
        "The study of cubic equations",
        "The Jalali calendar (1079)",
        "The Rubaiyat of Khayyam"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "saadi",
    "name": {
      "fa": "سعدی",
      "en": "Saadi"
    },
    "country": "iran",
    "field": "arts",
    "born": 1210,
    "died": 1291,
    "summary": {
      "fa": "استاد سخن؛ نویسنده‌ی «گلستان» و «بوستان»",
      "en": "Master of speech; author of the Gulistan and the Bustan"
    },
    "bio": {
      "fa": [
        "سعدی در شیراز به دنیا آمد (سال‌های تولد و مرگش تقریبی است). سال‌ها سفر کرد و سپس به شیراز بازگشت و همان‌جا درگذشت.",
        "«بوستان» (۱۲۵۷) به نظم و «گلستان» (۱۲۵۸) به نثر آمیخته با شعر نوشته شد و درباره‌ی اخلاق و زندگی است. سخنان سعدی در زبان فارسی ضرب‌المثل شده است."
      ],
      "en": [
        "Saadi was born in Shiraz (his years of birth and death are approximate). He travelled for years, then returned to Shiraz and died there.",
        "The Bustan (1257) is in verse and the Gulistan (1258) in prose mixed with verse, and they are about ethics and life. Saadi’s sayings have become proverbs in Persian."
      ]
    },
    "achievements": {
      "fa": [
        "بوستان (۱۲۵۷)",
        "گلستان (۱۲۵۸)"
      ],
      "en": [
        "The Bustan (1257)",
        "The Gulistan (1258)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "hafez",
    "name": {
      "fa": "حافظ",
      "en": "Hafez"
    },
    "country": "iran",
    "field": "arts",
    "born": 1315,
    "died": 1390,
    "summary": {
      "fa": "لسان‌الغیب؛ بزرگ‌ترین غزل‌سرای فارسی",
      "en": "The greatest writer of Persian ghazals"
    },
    "bio": {
      "fa": [
        "حافظ در شیراز به دنیا آمد (سال‌های تولد و مرگش تقریبی است) و زندگی‌اش را بیشتر در آن شهر گذراند. دیوان او شامل غزل‌هایی با لایه‌های عاشقانه، عرفانی و اجتماعی است.",
        "آرامگاهش در شیراز از مکان‌های مشهور ایران است و فال گرفتن از دیوان حافظ سنتی پرطرفدار در میان ایرانیان است."
      ],
      "en": [
        "Hafez was born in Shiraz (his years of birth and death are approximate) and spent most of his life in that city. His Divan contains ghazals with romantic, mystical and social layers.",
        "His tomb in Shiraz is among the best-known places in Iran, and consulting the Divan of Hafez for omens is a popular tradition among Iranians."
      ]
    },
    "achievements": {
      "fa": [
        "دیوان غزلیات",
        "اوج غزل فارسی"
      ],
      "en": [
        "The Divan of ghazals",
        "The peak of the Persian ghazal"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "shah-abbas",
    "name": {
      "fa": "شاه عباس اول",
      "en": "Shah Abbas I"
    },
    "country": "iran",
    "field": "politics",
    "born": 1571,
    "died": 1629,
    "summary": {
      "fa": "بزرگ‌ترین پادشاه صفوی",
      "en": "The greatest Safavid king"
    },
    "bio": {
      "fa": [
        "شاه عباس از ۱۵۸۸ تا ۱۶۲۹ پادشاه بود. ارتش را با سلاح گرم و سپاهی دائمی اصلاح کرد و در ۱۵۹۸ پایتخت را به اصفهان برد.",
        "میدان نقش جهان و مسجد شاه از آثار اوست. در ۱۶۲۲ هرمز را از پرتغالی‌ها پس گرفت و با اروپا تجارت و رابطه‌ی دیپلماتیک برقرار کرد."
      ],
      "en": [
        "Shah Abbas was king from 1588 to 1629. He reformed the army with firearms and a standing force and moved the capital to Isfahan in 1598.",
        "Naqsh-e Jahan Square and the Shah Mosque are among his works. In 1622 he retook Hormuz from the Portuguese and established trade and diplomatic relations with Europe."
      ]
    },
    "achievements": {
      "fa": [
        "اصفهان به‌عنوان پایتخت (۱۵۹۸)",
        "میدان نقش جهان",
        "بازپس‌گیری هرمز (۱۶۲۲)"
      ],
      "en": [
        "Isfahan as capital (1598)",
        "Naqsh-e Jahan Square",
        "The recapture of Hormuz (1622)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "nader-shah",
    "name": {
      "fa": "نادر شاه افشار",
      "en": "Nader Shah"
    },
    "country": "iran",
    "field": "politics",
    "born": 1688,
    "died": 1747,
    "summary": {
      "fa": "فاتح و بنیان‌گذار سلسله‌ی افشار",
      "en": "Conqueror and founder of the Afsharid dynasty"
    },
    "bio": {
      "fa": [
        "نادر شاه از طایفه‌ی افشار در خراسان بود. او افغان‌ها را از ایران راند و در ۱۷۳۶ شاه شد.",
        "در ۱۷۳۹ دهلی، پایتخت مغولان هند، را گرفت و تخت طاووس و الماس کوه نور را به ایران آورد. در ۱۷۴۷ در توطئه‌ای ترور شد."
      ],
      "en": [
        "Nader Shah was from the Afshar tribe in Khorasan. He drove the Afghans out of Iran and became shah in 1736.",
        "In 1739 he took Delhi, the capital of the Mughals of India, and brought the Peacock Throne and the Koh-i-Noor diamond to Iran. In 1747 he was assassinated in a plot."
      ]
    },
    "achievements": {
      "fa": [
        "راندن افغان‌ها",
        "تصرف دهلی (۱۷۳۹)"
      ],
      "en": [
        "Driving out the Afghans",
        "The capture of Delhi (1739)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "amir-kabir",
    "name": {
      "fa": "امیرکبیر",
      "en": "Amir Kabir"
    },
    "country": "iran",
    "field": "politics",
    "born": 1807,
    "died": 1852,
    "summary": {
      "fa": "صدراعظم اصلاح‌طلب ناصرالدین‌شاه",
      "en": "Reformist chief minister of Naser al-Din Shah"
    },
    "bio": {
      "fa": [
        "میرزا تقی‌خان فراهانی، معروف به امیرکبیر، از ۱۸۴۸ تا ۱۸۵۱ صدراعظم ناصرالدین‌شاه بود. او دربار را از هزینه‌های زیاد پاک کرد و برای کاهش وابستگی به خارج صنعت و آموزش نوین را گسترش داد.",
        "دارالفنون، نخستین مرکز آموزش عالی نوین ایران، را در ۱۸۵۱ بنیان گذاشت. در ۱۸۵۱ برکنار شد و در ژانویه‌ی ۱۸۵۲ در کاشان به فرمان شاه کشته شد."
      ],
      "en": [
        "Mirza Taqi Khan Farahani, known as Amir Kabir, was chief minister of Naser al-Din Shah from 1848 to 1851. He cut the court’s excess spending and, to reduce dependence on foreign powers, expanded industry and modern education.",
        "He founded Dar ul-Funun, Iran’s first modern institute of higher education, in 1851. He was dismissed in 1851 and killed at Kashan on the shah’s order in January 1852."
      ]
    },
    "achievements": {
      "fa": [
        "تأسیس دارالفنون (۱۸۵۱)",
        "اصلاحات اداری و اقتصادی"
      ],
      "en": [
        "Founding Dar ul-Funun (1851)",
        "Administrative and economic reforms"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "reza-shah",
    "name": {
      "fa": "رضاشاه",
      "en": "Reza Shah"
    },
    "country": "iran",
    "field": "politics",
    "born": 1878,
    "died": 1944,
    "summary": {
      "fa": "بنیان‌گذار سلسله‌ی پهلوی",
      "en": "Founder of the Pahlavi dynasty"
    },
    "bio": {
      "fa": [
        "رضاخان در آلاشت مازندران به دنیا آمد، در ارتش بالا رفت، در ۱۲۹۹ خورشیدی (۱۹۲۱) کودتا کرد و در ۱۹۲۵ شاه شد. او دولت را متمرکز کرد و ارتش، راه‌آهن سراسری (۱۹۳۸)، دانشگاه تهران (۱۹۳۴) و آموزش نوین را گسترش داد.",
        "سیاست‌های او، از جمله کشف حجاب اجباری (۱۹۳۶)، مخالفان بسیاری داشت. پس از اشغال ایران به‌دست متفقین در ۱۹۴۱ کنار رفت و در ۱۹۴۴ در تبعید در ژوهانسبورگ درگذشت."
      ],
      "en": [
        "Reza Khan was born in Alasht in Mazandaran, rose in the army, staged a coup in 1921 and became shah in 1925. He centralized the state and expanded the army, the trans-Iranian railway (1938), the University of Tehran (1934) and modern education.",
        "His policies, including the compulsory unveiling of 1936, had many opponents. After the Allied occupation of Iran in 1941 he stepped down and died in exile in Johannesburg in 1944."
      ]
    },
    "achievements": {
      "fa": [
        "متمرکزکردن دولت",
        "راه‌آهن سراسری (۱۹۳۸)",
        "دانشگاه تهران (۱۹۳۴)"
      ],
      "en": [
        "Centralizing the state",
        "The trans-Iranian railway (1938)",
        "The University of Tehran (1934)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "mosaddegh",
    "name": {
      "fa": "دکتر محمد مصدق",
      "en": "Mohammad Mosaddegh"
    },
    "country": "iran",
    "field": "politics",
    "born": 1882,
    "died": 1967,
    "summary": {
      "fa": "نخست‌وزیر و رهبر نهضت ملی‌شدن نفت",
      "en": "Prime minister and leader of the oil nationalization movement"
    },
    "bio": {
      "fa": [
        "مصدق در تهران به دنیا آمد، در سوئیس حقوق خواند و از چهره‌های مجلس بود. در ۱۹۵۱ نخست‌وزیر شد و صنعت نفت را که زیر نظر شرکت نفت انگلیس و ایران بود ملی کرد.",
        "در ۲۸ مرداد ۱۳۳۲ (۱۹ اوت ۱۹۵۳) با کودتایی که آمریکا و بریتانیا در آن دخیل بودند برکنار شد؛ دخالت سیا بعدها در اسناد منتشرشده تأیید شد. او محاکمه شد و تا پایان عمر در احمدآباد در حبس خانگی ماند."
      ],
      "en": [
        "Mosaddegh was born in Tehran, studied law in Switzerland and was a leading figure in parliament. In 1951 he became prime minister and nationalized the oil industry, which was under the Anglo-Iranian Oil Company.",
        "On 19 August 1953 he was removed in a coup in which the United States and Britain were involved; the CIA’s involvement was later confirmed in released documents. He was tried and remained under house arrest in Ahmadabad for the rest of his life."
      ]
    },
    "achievements": {
      "fa": [
        "ملی‌کردن صنعت نفت (۱۹۵۱)",
        "نخست‌وزیری ۱۹۵۱ تا ۱۹۵۳"
      ],
      "en": [
        "Nationalizing the oil industry (1951)",
        "Prime minister 1951 to 1953"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "khomeini",
    "name": {
      "fa": "آیت‌الله روح‌الله خمینی",
      "en": "Ayatollah Ruhollah Khomeini"
    },
    "country": "iran",
    "field": "politics",
    "born": 1902,
    "died": 1989,
    "summary": {
      "fa": "رهبر انقلاب ۱۳۵۷ و نخستین رهبر جمهوری اسلامی",
      "en": "Leader of the 1979 revolution and first leader of the Islamic Republic"
    },
    "bio": {
      "fa": [
        "خمینی در خمین به دنیا آمد و روحانی و مدرس حوزه‌ی علمیه‌ی قم بود. پس از اعتراض به سیاست‌های شاه در ۱۹۶۴ تبعید شد (ترکیه، نجف و در ۱۹۷۸ فرانسه).",
        "در ۱ فوریه‌ی ۱۹۷۹ به ایران بازگشت و پس از پیروزی انقلاب رهبر جمهوری اسلامی شد و تا ۱۳ خرداد ۱۳۶۸ (۳ ژوئن ۱۹۸۹) این مقام را داشت. هواداران و منتقدان او درباره‌ی میراثش دیدگاه‌های بسیار متفاوتی دارند."
      ],
      "en": [
        "Khomeini was born in Khomein and was a cleric and teacher at the seminary of Qom. After protesting the shah’s policies he was exiled in 1964 (Turkey, Najaf and in 1978 France).",
        "He returned to Iran on 1 February 1979 and after the victory of the revolution became leader of the Islamic Republic, holding the post until 3 June 1989. His supporters and critics have very different views of his legacy."
      ]
    },
    "achievements": {
      "fa": [
        "رهبری انقلاب ۱۳۵۷",
        "بنیان‌گذاری جمهوری اسلامی"
      ],
      "en": [
        "Leading the 1979 revolution",
        "Founding the Islamic Republic"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "hedayat",
    "name": {
      "fa": "صادق هدایت",
      "en": "Sadegh Hedayat"
    },
    "country": "iran",
    "field": "arts",
    "born": 1903,
    "died": 1951,
    "summary": {
      "fa": "نویسنده‌ی «بوف کور»",
      "en": "Author of The Blind Owl"
    },
    "bio": {
      "fa": [
        "هدایت در تهران به دنیا آمد و در فرانسه تحصیل کرد. او یکی از بنیان‌گذاران داستان‌نویسی نوین فارسی است و علاوه بر داستان، به فرهنگ عامه و ترجمه هم پرداخت.",
        "«بوف کور» (حدود ۱۹۳۶) مشهورترین اثر اوست و به زبان‌های بسیاری ترجمه شده است. او در ۱۹۵۱ در پاریس درگذشت."
      ],
      "en": [
        "Hedayat was born in Tehran and studied in France. He is one of the founders of modern Persian fiction and, besides stories, also worked on folklore and translation.",
        "The Blind Owl (about 1936) is his most famous work and has been translated into many languages. He died in Paris in 1951."
      ]
    },
    "achievements": {
      "fa": [
        "بوف کور (حدود ۱۹۳۶)",
        "از بنیان‌گذاران داستان‌نویسی نوین فارسی"
      ],
      "en": [
        "The Blind Owl (about 1936)",
        "A founder of modern Persian fiction"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "forough-farrokhzad",
    "name": {
      "fa": "فروغ فرخزاد",
      "en": "Forough Farrokhzad"
    },
    "country": "iran",
    "field": "arts",
    "born": 1934,
    "died": 1967,
    "summary": {
      "fa": "شاعر و فیلم‌ساز",
      "en": "Poet and filmmaker"
    },
    "bio": {
      "fa": [
        "فروغ در تهران به دنیا آمد. شعر او با زبانی تازه و بی‌پرده درباره‌ی زندگی و تجربه‌ی زنان، جایگاه ویژه‌ای در شعر نو فارسی دارد. مجموعه‌های «اسیر» (۱۹۵۵) و «تولدی دیگر» (۱۹۶۴) از آثار اوست.",
        "فیلم مستند «خانه سیاه است» (۱۹۶۲) درباره‌ی زندگی مبتلایان به جذام است. او در ۱۹۶۷، در سی‌ودو سالگی، در یک سانحه‌ی رانندگی درگذشت."
      ],
      "en": [
        "Forough was born in Tehran. Her poetry, in a new and candid language about women’s life and experience, has a special place in modern Persian poetry. The collections Captive (1955) and Another Birth (1964) are among her works.",
        "The documentary film The House Is Black (1962) is about the lives of people with leprosy. She died in 1967, at the age of thirty-two, in a car accident."
      ]
    },
    "achievements": {
      "fa": [
        "تولدی دیگر (۱۹۶۴)",
        "خانه سیاه است (۱۹۶۲)"
      ],
      "en": [
        "Another Birth (1964)",
        "The House Is Black (1962)"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "mirzakhani",
    "name": {
      "fa": "مریم میرزاخانی",
      "en": "Maryam Mirzakhani"
    },
    "country": "iran",
    "field": "science",
    "born": 1977,
    "died": 2017,
    "summary": {
      "fa": "ریاضی‌دان؛ نخستین زن برنده‌ی مدال فیلدز",
      "en": "Mathematician; the first woman to win the Fields Medal"
    },
    "bio": {
      "fa": [
        "مریم میرزاخانی در تهران به دنیا آمد و در دبیرستان فرزانگان و دانشگاه صنعتی شریف درس خواند. او در المپیادهای جهانی ریاضی مدال گرفت و بعد در دانشگاه هاروارد دکترا گرفت.",
        "او در هندسه‌ی هذلولی و پویایی سطوح ریمانی پژوهش می‌کرد. در ۲۰۱۴ نخستین زنی شد که مدال فیلدز، بالاترین جایزه‌ی ریاضیات، را گرفت. او در ۲۰۱۷ درگذشت."
      ],
      "en": [
        "Maryam Mirzakhani was born in Tehran and studied at Farzanegan high school and Sharif University of Technology. She won medals at the International Mathematical Olympiads and then received her doctorate at Harvard University.",
        "She did research on hyperbolic geometry and the dynamics of Riemann surfaces. In 2014 she became the first woman to win the Fields Medal, the highest prize in mathematics. She died in 2017."
      ]
    },
    "achievements": {
      "fa": [
        "مدال فیلدز (۲۰۱۴)",
        "پژوهش در هندسه‌ی هذلولی"
      ],
      "en": [
        "The Fields Medal (2014)",
        "Research on hyperbolic geometry"
      ]
    },
    "added": "2026-10-09"
  },
  {
    "id": "alfred-the-great",
    "name": {
      "fa": "آلفرد کبیر",
      "en": "Alfred the Great"
    },
    "country": "united-kingdom",
    "field": "politics",
    "born": 849,
    "died": 899,
    "summary": {
      "fa": "پادشاه وسکس که انگلستان را از وایکینگ‌ها نجات داد",
      "en": "King of Wessex who saved England from the Vikings"
    },
    "bio": {
      "fa": [
        "آلفرد از ۸۷۱ تا ۸۹۹ پادشاه وسکس بود. در ۸۷۸ در ادینگتون دانمارکی‌ها را شکست داد و وسکس را نجات داد.",
        "او دژهای دفاعی (برک) ساخت، ناوگانی ایجاد کرد و قوانین را گرد آورد. برای ترویج سواد، ترجمه‌ی کتاب‌های مهم از لاتین به انگلیسی را تشویق کرد. او تنها پادشاه انگلیسی است که لقب «کبیر» دارد."
      ],
      "en": [
        "Alfred was king of Wessex from 871 to 899. In 878 he defeated the Danes at Edington and saved Wessex.",
        "He built defensive forts (burhs), created a fleet and gathered the laws. To promote literacy he encouraged the translation of important books from Latin into English. He is the only English king with the title ‘the Great’."
      ]
    },
    "achievements": {
      "fa": [
        "پیروزی در ادینگتون (۸۷۸)",
        "ساخت دژهای دفاعی و ناوگان",
        "ترویج آموزش به زبان انگلیسی"
      ],
      "en": [
        "Victory at Edington (878)",
        "Building forts and a fleet",
        "Promoting learning in English"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "william-the-conqueror",
    "name": {
      "fa": "ویلیام فاتح",
      "en": "William the Conqueror"
    },
    "country": "united-kingdom",
    "field": "politics",
    "born": 1028,
    "died": 1087,
    "summary": {
      "fa": "دوک نورماندی و پادشاه انگلستان پس از فتح ۱۰۶۶",
      "en": "Duke of Normandy and king of England after the conquest of 1066"
    },
    "bio": {
      "fa": [
        "ویلیام از ۱۰۳۵ دوک نورماندی بود. او در ۱۴ اکتبر ۱۰۶۶ در نبرد هستینگز هرولد را شکست داد و در کریسمس همان سال پادشاه انگلستان شد.",
        "او قلعه‌ها ساخت، اشراف نورمان را بر انگلستان گماشت و در ۱۰۸۶ «کتاب دومزدی» را تدوین کرد. در ۱۰۸۷ در روئن درگذشت."
      ],
      "en": [
        "William was duke of Normandy from 1035. On 14 October 1066 he defeated Harold at the Battle of Hastings and became king of England at Christmas that year.",
        "He built castles, placed Norman nobles over England and in 1086 compiled the Domesday Book. He died in Rouen in 1087."
      ]
    },
    "achievements": {
      "fa": [
        "پیروزی در هستینگز (۱۰۶۶)",
        "کتاب دومزدی (۱۰۸۶)"
      ],
      "en": [
        "Victory at Hastings (1066)",
        "The Domesday Book (1086)"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "chaucer",
    "name": {
      "fa": "جفری چاسر",
      "en": "Geoffrey Chaucer"
    },
    "country": "united-kingdom",
    "field": "arts",
    "born": 1343,
    "died": 1400,
    "summary": {
      "fa": "«پدر ادبیات انگلیسی» و نویسنده‌ی «قصه‌های کانتربری»",
      "en": "‘Father of English literature’ and author of The Canterbury Tales"
    },
    "bio": {
      "fa": [
        "چاسر در لندن به دنیا آمد (سال تولدش تقریبی است). او مقام‌دار دربار و دیپلمات بود و به ایتالیا سفر کرد.",
        "او به انگلیسی (میانه) می‌نوشت، در زمانی که بسیاری از آثار ادبی هنوز به فرانسوی یا لاتین بود. «قصه‌های کانتربری» (از حدود ۱۳۸۷) مجموعه‌ی داستان‌هایی است که زائران در راه کانتربری تعریف می‌کنند. او نخستین شاعری بود که در «گوشه‌ی شاعران» وست‌مینستر دفن شد."
      ],
      "en": [
        "Chaucer was born in London (his birth year is approximate). He was a court official and diplomat and travelled to Italy.",
        "He wrote in (Middle) English at a time when many literary works were still in French or Latin. The Canterbury Tales (from about 1387) is a collection of stories told by pilgrims on the way to Canterbury. He was the first poet buried in Poets’ Corner in Westminster Abbey."
      ]
    },
    "achievements": {
      "fa": [
        "قصه‌های کانتربری (از حدود ۱۳۸۷)",
        "ادبیات به زبان انگلیسی"
      ],
      "en": [
        "The Canterbury Tales (from about 1387)",
        "Literature in the English language"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "henry-viii",
    "name": {
      "fa": "هنری هشتم",
      "en": "Henry VIII"
    },
    "country": "united-kingdom",
    "field": "politics",
    "born": 1491,
    "died": 1547,
    "summary": {
      "fa": "پادشاه تودور و بنیان‌گذار کلیسای انگلستان",
      "en": "Tudor king and founder of the Church of England"
    },
    "bio": {
      "fa": [
        "هنری از ۱۵۰۹ تا ۱۵۴۷ پادشاه بود و شش بار ازدواج کرد. پس از اختلاف با پاپ بر سر طلاقش، در ۱۵۳۴ با «قانون برتری» خود را رهبر کلیسای انگلستان اعلام کرد.",
        "او صومعه‌ها را برچید (۱۵۳۶ تا ۱۵۴۱)، ویلز را با قوانین ۱۵۳۵ و ۱۵۴۲ به انگلستان پیوست و نیروی دریایی را تقویت کرد."
      ],
      "en": [
        "Henry was king from 1509 to 1547 and married six times. After a dispute with the pope over his divorce he declared himself head of the Church of England with the Act of Supremacy in 1534.",
        "He dissolved the monasteries (1536 to 1541), joined Wales to England with the laws of 1535 and 1542 and strengthened the navy."
      ]
    },
    "achievements": {
      "fa": [
        "جدایی کلیسای انگلستان از رم (۱۵۳۴)",
        "برچیدن صومعه‌ها",
        "پیوستن ویلز به انگلستان"
      ],
      "en": [
        "Separating the Church of England from Rome (1534)",
        "Dissolving the monasteries",
        "Joining Wales to England"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "elizabeth-i",
    "name": {
      "fa": "الیزابت اول",
      "en": "Elizabeth I"
    },
    "country": "united-kingdom",
    "field": "politics",
    "born": 1533,
    "died": 1603,
    "summary": {
      "fa": "ملکه‌ی انگلستان در «عصر الیزابتی»",
      "en": "Queen of England in the ‘Elizabethan age’"
    },
    "bio": {
      "fa": [
        "الیزابت، دختر هنری هشتم و آن بولین، از ۱۵۵۸ تا ۱۶۰۳ ملکه بود. او سازش دینی پروتستانی را برقرار کرد و ازدواج نکرد.",
        "در دوران او ناوگان اسپانیا در ۱۵۸۸ شکست خورد، ادبیات و تئاتر (شکسپیر) شکوفا شد و شرکت‌های بازرگانی بنیان گذاشته شد."
      ],
      "en": [
        "Elizabeth, daughter of Henry VIII and Anne Boleyn, was queen from 1558 to 1603. She established a Protestant religious settlement and never married.",
        "In her reign the Spanish fleet was defeated in 1588, literature and theatre (Shakespeare) flourished and trading companies were founded."
      ]
    },
    "achievements": {
      "fa": [
        "پیروزی بر آرمادا (۱۵۸۸)",
        "سازش دینی ۱۵۵۹",
        "عصر طلایی ادبیات و تئاتر"
      ],
      "en": [
        "Victory over the Armada (1588)",
        "The religious settlement of 1559",
        "A golden age of literature and theatre"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "shakespeare",
    "name": {
      "fa": "ویلیام شکسپیر",
      "en": "William Shakespeare"
    },
    "country": "united-kingdom",
    "field": "arts",
    "born": 1564,
    "died": 1616,
    "summary": {
      "fa": "نمایشنامه‌نویس و شاعر، بزرگ‌ترین نویسنده‌ی زبان انگلیسی",
      "en": "Playwright and poet, the greatest writer in the English language"
    },
    "bio": {
      "fa": [
        "شکسپیر در استراتفورد روی آوون به دنیا آمد (۱۵۶۴ غسل تعمید شد) و بیشتر عمرش را در لندن، به‌عنوان بازیگر و نمایشنامه‌نویس، گذراند. او با گروهی که بعدها «مردان پادشاه» نام گرفت و تئاتر گلوب (۱۵۹۹) کار می‌کرد.",
        "حدود ۳۷ نمایشنامه و ۱۵۴ سونت از او باقی مانده است؛ از جمله «هملت»، «مکبث»، «اتلو»، «شاه لیر» و «رومئو و ژولیت». او در ۱۶۱۶ درگذشت."
      ],
      "en": [
        "Shakespeare was born in Stratford-upon-Avon (baptized in 1564) and spent most of his life in London as an actor and playwright. He worked with a company that was later called the King’s Men and with the Globe Theatre (1599).",
        "About 37 plays and 154 sonnets by him survive, among them Hamlet, Macbeth, Othello, King Lear and Romeo and Juliet. He died in 1616."
      ]
    },
    "achievements": {
      "fa": [
        "هملت، مکبث، اتلو و شاه لیر",
        "۱۵۴ سونت",
        "تئاتر گلوب"
      ],
      "en": [
        "Hamlet, Macbeth, Othello and King Lear",
        "154 sonnets",
        "The Globe Theatre"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "cromwell",
    "name": {
      "fa": "الیور کرامول",
      "en": "Oliver Cromwell"
    },
    "country": "united-kingdom",
    "field": "politics",
    "era": "enlightenment",
    "born": 1599,
    "died": 1658,
    "summary": {
      "fa": "فرمانده پارلمان و «لرد حامی» انگلستان",
      "en": "Parliamentary commander and ‘Lord Protector’ of England"
    },
    "bio": {
      "fa": [
        "کرامول زمین‌دار و نماینده‌ی پارلمان بود. در جنگ داخلی انگلستان از فرماندهان برجسته‌ی ارتش نمونه‌ی نو بود و در پیروزی بر هواداران شاه نقش داشت. او از امضاکنندگان حکم اعدام چارلز اول (۱۶۴۹) بود.",
        "از ۱۶۵۳ تا مرگش در ۱۶۵۸ «لرد حامی» بود. میراث او بحث‌برانگیز است: برخی او را مدافع پارلمان می‌دانند و برخی به‌خاطر لشکرکشی خشونت‌بار او در ایرلند (۱۶۴۹ تا ۱۶۵۰) و حکومت نظامی‌اش او را سرزنش می‌کنند."
      ],
      "en": [
        "Cromwell was a landowner and member of Parliament. In the English Civil War he was a leading commander in the New Model Army and played a part in the victory over the king’s supporters. He was among the signatories of the death warrant of Charles I (1649).",
        "From 1653 until his death in 1658 he was ‘Lord Protector’. His legacy is controversial: some regard him as a defender of Parliament while others blame him for his violent campaign in Ireland (1649 to 1650) and for his military rule."
      ]
    },
    "achievements": {
      "fa": [
        "پیروزی در جنگ داخلی",
        "لرد حامی (۱۶۵۳ تا ۱۶۵۸)"
      ],
      "en": [
        "Victory in the Civil War",
        "Lord Protector (1653 to 1658)"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "newton",
    "name": {
      "fa": "اسحاق نیوتن",
      "en": "Isaac Newton"
    },
    "country": "united-kingdom",
    "field": "science",
    "born": 1643,
    "died": 1727,
    "summary": {
      "fa": "فیزیک‌دان و ریاضی‌دان؛ قوانین حرکت و گرانش",
      "en": "Physicist and mathematician; the laws of motion and gravitation"
    },
    "bio": {
      "fa": [
        "نیوتن در وولزتورپ در لینکلن‌شایر به دنیا آمد و در دانشگاه کمبریج استاد بود. او در ۱۶۸۷ کتاب «اصول ریاضی فلسفه‌ی طبیعی» (پرینکیپیا) را منتشر کرد.",
        "او سه قانون حرکت و قانون گرانش همگانی را بیان کرد، در نور و رنگ پژوهش کرد و حساب دیفرانسیل و انتگرال را (جدا از لایب‌نیتس) پدید آورد. از ۱۷۰۳ رئیس انجمن سلطنتی بود."
      ],
      "en": [
        "Newton was born at Woolsthorpe in Lincolnshire and was a professor at the University of Cambridge. In 1687 he published the Mathematical Principles of Natural Philosophy (the Principia).",
        "He stated the three laws of motion and the law of universal gravitation, researched light and colour and developed calculus (independently of Leibniz). From 1703 he was president of the Royal Society."
      ]
    },
    "achievements": {
      "fa": [
        "پرینکیپیا (۱۶۸۷)",
        "قوانین حرکت و گرانش",
        "حساب دیفرانسیل و انتگرال"
      ],
      "en": [
        "The Principia (1687)",
        "The laws of motion and gravitation",
        "Calculus"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "adam-smith",
    "name": {
      "fa": "آدام اسمیت",
      "en": "Adam Smith"
    },
    "country": "united-kingdom",
    "field": "thought",
    "born": 1723,
    "died": 1790,
    "summary": {
      "fa": "فیلسوف و اقتصاددان اسکاتلندی",
      "en": "Scottish philosopher and economist"
    },
    "bio": {
      "fa": [
        "اسمیت در کرکالدی اسکاتلند به دنیا آمد و در دانشگاه گلاسکو استاد فلسفه‌ی اخلاق بود. او از چهره‌های روشنگری اسکاتلند است.",
        "«نظریه‌ی احساسات اخلاقی» (۱۷۵۹) و «ثروت ملل» (۱۷۷۶) از آثار اوست. ثروت ملل درباره‌ی تقسیم کار و بازار آزاد و از کتاب‌های بنیانی اقتصاد نوین است."
      ],
      "en": [
        "Smith was born in Kirkcaldy in Scotland and was a professor of moral philosophy at the University of Glasgow. He is a figure of the Scottish Enlightenment.",
        "The Theory of Moral Sentiments (1759) and The Wealth of Nations (1776) are among his works. The Wealth of Nations, on the division of labour and the free market, is a founding book of modern economics."
      ]
    },
    "achievements": {
      "fa": [
        "نظریه‌ی احساسات اخلاقی (۱۷۵۹)",
        "ثروت ملل (۱۷۷۶)"
      ],
      "en": [
        "The Theory of Moral Sentiments (1759)",
        "The Wealth of Nations (1776)"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "james-watt",
    "name": {
      "fa": "جیمز وات",
      "en": "James Watt"
    },
    "country": "united-kingdom",
    "field": "invention",
    "born": 1736,
    "died": 1819,
    "summary": {
      "fa": "مهندس و مخترع؛ بهبود ماشین بخار",
      "en": "Engineer and inventor; improver of the steam engine"
    },
    "bio": {
      "fa": [
        "وات در گرینوک اسکاتلند به دنیا آمد. او با افزودن چگالنده‌ی جداگانه (۱۷۶۵؛ حق‌امتیاز ۱۷۶۹) بازده ماشین بخار را بسیار بالا برد.",
        "ماشین او به نیروی اصلی انقلاب صنعتی تبدیل شد. واحد توان (وات) به نام او نام‌گذاری شده است."
      ],
      "en": [
        "Watt was born in Greenock in Scotland. By adding a separate condenser (1765; patented 1769) he greatly raised the efficiency of the steam engine.",
        "His engine became the main power of the Industrial Revolution. The unit of power, the watt, is named after him."
      ]
    },
    "achievements": {
      "fa": [
        "چگالنده‌ی جداگانه (۱۷۶۵)",
        "ماشین بخار بهبودیافته"
      ],
      "en": [
        "The separate condenser (1765)",
        "The improved steam engine"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "jane-austen",
    "name": {
      "fa": "جین آستین",
      "en": "Jane Austen"
    },
    "country": "united-kingdom",
    "field": "arts",
    "era": "modern",
    "born": 1775,
    "died": 1817,
    "summary": {
      "fa": "رمان‌نویس؛ نویسنده‌ی «غرور و تعصب»",
      "en": "Novelist; author of Pride and Prejudice"
    },
    "bio": {
      "fa": [
        "جین آستین در استیونتون در همپشایر به دنیا آمد و بیشتر عمرش را در روستا و شهرهای کوچک جنوب انگلستان گذراند. رمان‌هایش به طنز و دقت به زندگی طبقه‌ی زمین‌دار، ازدواج و پول می‌پردازد.",
        "«عقل و احساس» (۱۸۱۱)، «غرور و تعصب» (۱۸۱۳) و «اما» (۱۸۱۵) از مشهورترین آثار اوست. او در ۱۸۱۷ درگذشت."
      ],
      "en": [
        "Jane Austen was born in Steventon in Hampshire and spent most of her life in the countryside and small towns of southern England. Her novels deal with wit and precision with the life of the landed class, marriage and money.",
        "Sense and Sensibility (1811), Pride and Prejudice (1813) and Emma (1815) are among her best-known works. She died in 1817."
      ]
    },
    "achievements": {
      "fa": [
        "عقل و احساس (۱۸۱۱)",
        "غرور و تعصب (۱۸۱۳)",
        "اما (۱۸۱۵)"
      ],
      "en": [
        "Sense and Sensibility (1811)",
        "Pride and Prejudice (1813)",
        "Emma (1815)"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "darwin",
    "name": {
      "fa": "چارلز داروین",
      "en": "Charles Darwin"
    },
    "country": "united-kingdom",
    "field": "science",
    "born": 1809,
    "died": 1882,
    "summary": {
      "fa": "زیست‌شناس؛ نظریه‌ی تکامل با انتخاب طبیعی",
      "en": "Biologist; the theory of evolution by natural selection"
    },
    "bio": {
      "fa": [
        "داروین در شروزبری به دنیا آمد. در سفر پنج‌ساله‌ی کشتی بیگل (۱۸۳۱ تا ۱۸۳۶) گونه‌های جانوری و گیاهی بسیاری را مشاهده کرد، از جمله در جزایر گالاپاگوس.",
        "کتاب «درباره‌ی خاستگاه گونه‌ها» (۲۴ نوامبر ۱۸۵۹) نظریه‌ی تکامل را از راه انتخاب طبیعی توضیح می‌دهد و زیست‌شناسی را دگرگون کرد. او در ۱۸۸۲ درگذشت و در وست‌مینستر دفن شد."
      ],
      "en": [
        "Darwin was born in Shrewsbury. On the five-year voyage of the Beagle (1831 to 1836) he observed many animal and plant species, among them on the Galápagos Islands.",
        "His book On the Origin of Species (24 November 1859) explains the theory of evolution through natural selection and transformed biology. He died in 1882 and was buried in Westminster Abbey."
      ]
    },
    "achievements": {
      "fa": [
        "سفر بیگل (۱۸۳۱ تا ۱۸۳۶)",
        "درباره‌ی خاستگاه گونه‌ها (۱۸۵۹)"
      ],
      "en": [
        "The voyage of the Beagle (1831 to 1836)",
        "On the Origin of Species (1859)"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "dickens",
    "name": {
      "fa": "چارلز دیکنز",
      "en": "Charles Dickens"
    },
    "country": "united-kingdom",
    "field": "arts",
    "born": 1812,
    "died": 1870,
    "summary": {
      "fa": "رمان‌نویس بزرگ دوره‌ی ویکتوریایی",
      "en": "Great novelist of the Victorian era"
    },
    "bio": {
      "fa": [
        "دیکنز در پورتسموث به دنیا آمد. در کودکی به‌خاطر بدهی پدرش در کارخانه‌ای کار کرد؛ تجربه‌ای که بعدها در آثارش بازتاب یافت.",
        "او در رمان‌هایش فقر، بی‌عدالتی و زندگی شهرهای صنعتی را توصیف کرد. «الیور تویست» (۱۸۳۷ تا ۱۸۳۹)، «سرود کریسمس» (۱۸۴۳) و «آرزوهای بزرگ» (۱۸۶۰ تا ۱۸۶۱) از مشهورترین آثار او هستند."
      ],
      "en": [
        "Dickens was born in Portsmouth. As a child he worked in a factory because of his father’s debts, an experience later reflected in his works.",
        "In his novels he described poverty, injustice and the life of industrial cities. Oliver Twist (1837 to 1839), A Christmas Carol (1843) and Great Expectations (1860 to 1861) are among his best-known works."
      ]
    },
    "achievements": {
      "fa": [
        "الیور تویست",
        "سرود کریسمس (۱۸۴۳)",
        "آرزوهای بزرگ"
      ],
      "en": [
        "Oliver Twist",
        "A Christmas Carol (1843)",
        "Great Expectations"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "victoria",
    "name": {
      "fa": "ملکه ویکتوریا",
      "en": "Queen Victoria"
    },
    "country": "united-kingdom",
    "field": "politics",
    "born": 1819,
    "died": 1901,
    "summary": {
      "fa": "ملکه‌ی بریتانیا در اوج امپراتوری",
      "en": "Queen of Britain at the height of the empire"
    },
    "bio": {
      "fa": [
        "ویکتوریا در ۱۸۳۷ در هجده‌سالگی ملکه شد و تا ۱۹۰۱ سلطنت کرد (۶۳ سال). او با شاهزاده آلبرت ازدواج کرد (۱۸۴۰) و ۹ فرزند داشت که از راه ازدواج‌ها با خاندان‌های سلطنتی اروپا پیوند خوردند.",
        "در ۱۸۷۶ لقب «امپراتریس هند» را گرفت. دوره‌ی او دوران رشد صنعتی، گسترش امپراتوری و اصلاحات اجتماعی بود، هرچند با خشونت استعماری هم همراه بود."
      ],
      "en": [
        "Victoria became queen in 1837 at the age of eighteen and reigned until 1901 (63 years). She married Prince Albert (1840) and had nine children who were linked to Europe’s royal houses through marriage.",
        "In 1876 she took the title ‘Empress of India’. Her time was an age of industrial growth, imperial expansion and social reform, though it also came with colonial violence."
      ]
    },
    "achievements": {
      "fa": [
        "۶۳ سال سلطنت",
        "امپراتریس هند (۱۸۷۶)"
      ],
      "en": [
        "A 63-year reign",
        "Empress of India (1876)"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "florence-nightingale",
    "name": {
      "fa": "فلورانس نایتینگل",
      "en": "Florence Nightingale"
    },
    "country": "united-kingdom",
    "field": "science",
    "born": 1820,
    "died": 1910,
    "summary": {
      "fa": "پایه‌گذار پرستاری نوین",
      "en": "Founder of modern nursing"
    },
    "bio": {
      "fa": [
        "نایتینگل در فلورانس ایتالیا در خانواده‌ای انگلیسی به دنیا آمد. در جنگ کریمه (۱۸۵۴) با گروهی پرستار به بیمارستان نظامی اسکوتاری رفت و با رعایت بهداشت مرگ‌ومیر را کاهش داد.",
        "او آمار را برای اصلاح بهداشت به کار برد و در ۱۸۶۰ نخستین مدرسه‌ی پرستاری نوین را در بیمارستان سنت توماس لندن بنیان گذاشت."
      ],
      "en": [
        "Nightingale was born in Florence, Italy, to an English family. In the Crimean War (1854) she went with a group of nurses to the military hospital at Scutari and reduced mortality by enforcing hygiene.",
        "She used statistics to reform health care and in 1860 founded the first modern nursing school at St Thomas’ Hospital in London."
      ]
    },
    "achievements": {
      "fa": [
        "پرستاری در جنگ کریمه",
        "مدرسه‌ی پرستاری نایتینگل (۱۸۶۰)",
        "کاربرد آمار در بهداشت"
      ],
      "en": [
        "Nursing in the Crimean War",
        "The Nightingale School of Nursing (1860)",
        "Using statistics in public health"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "pankhurst",
    "name": {
      "fa": "امیلین پانکهرست",
      "en": "Emmeline Pankhurst"
    },
    "country": "united-kingdom",
    "field": "politics",
    "born": 1858,
    "died": 1928,
    "summary": {
      "fa": "رهبر جنبش حق رأی زنان (ساف‌راژت‌ها)",
      "en": "Leader of the women’s suffrage movement (the suffragettes)"
    },
    "bio": {
      "fa": [
        "پانکهرست در منچستر به دنیا آمد. در ۱۹۰۳ «اتحادیه‌ی اجتماعی و سیاسی زنان» را بنیان گذاشت که برای حق رأی زنان با شعار «کار، نه حرف» فعالیت می‌کرد.",
        "گروه او شیوه‌های مبارزه‌ی تندتری، از جمله اعتراض مستقیم و شکستن شیشه، به کار برد و بارها زندانی شد. در ۱۹۱۸ زنان بالای ۳۰ سال حق رأی گرفتند و او در ۱۹۲۸، چند هفته پیش از قانون حق رأی برابر، درگذشت."
      ],
      "en": [
        "Pankhurst was born in Manchester. In 1903 she founded the Women’s Social and Political Union, which campaigned for women’s suffrage under the slogan ‘Deeds, not words’.",
        "Her group used more militant methods, including direct protest and window-smashing, and she was imprisoned several times. In 1918 women over 30 got the vote and she died in 1928, a few weeks before the law for equal voting rights."
      ]
    },
    "achievements": {
      "fa": [
        "تأسیس اتحادیه‌ی اجتماعی و سیاسی زنان (۱۹۰۳)",
        "رهبری مبارزه برای حق رأی زنان"
      ],
      "en": [
        "Founding the Women’s Social and Political Union (1903)",
        "Leading the campaign for women’s suffrage"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "churchill",
    "name": {
      "fa": "وینستون چرچیل",
      "en": "Winston Churchill"
    },
    "country": "united-kingdom",
    "field": "politics",
    "born": 1874,
    "died": 1965,
    "summary": {
      "fa": "نخست‌وزیر بریتانیا در جنگ جهانی دوم",
      "en": "Prime minister of Britain in the Second World War"
    },
    "bio": {
      "fa": [
        "چرچیل در کاخ بلنهایم به دنیا آمد. او سیاستمدار، نویسنده و خبرنگار جنگی بود. از ۱۰ مه ۱۹۴۰ نخست‌وزیر شد و بریتانیا را در جنگ جهانی دوم رهبری کرد؛ بار دیگر از ۱۹۵۱ تا ۱۹۵۵ نخست‌وزیر بود.",
        "جایزه‌ی نوبل ادبیات را در ۱۹۵۳ گرفت. میراث او محل بحث است: او را به‌خاطر رهبری در جنگ می‌ستایند ولی سیاست‌های استعماری‌اش، از جمله نقشش در قحطی بنگال (۱۹۴۳)، مورد انتقاد قرار می‌گیرد."
      ],
      "en": [
        "Churchill was born at Blenheim Palace. He was a politician, writer and war correspondent. From 10 May 1940 he was prime minister and led Britain in the Second World War; he was prime minister again from 1951 to 1955.",
        "He received the Nobel Prize in Literature in 1953. His legacy is debated: he is praised for his wartime leadership but criticized for his colonial policies, including his role in the Bengal famine (1943)."
      ]
    },
    "achievements": {
      "fa": [
        "رهبری بریتانیا در جنگ جهانی دوم",
        "جایزه‌ی نوبل ادبیات (۱۹۵۳)"
      ],
      "en": [
        "Leading Britain in the Second World War",
        "The Nobel Prize in Literature (1953)"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "turing",
    "name": {
      "fa": "آلن تورینگ",
      "en": "Alan Turing"
    },
    "country": "united-kingdom",
    "field": "science",
    "born": 1912,
    "died": 1954,
    "summary": {
      "fa": "ریاضی‌دان و پدر علم رایانه",
      "en": "Mathematician and father of computer science"
    },
    "bio": {
      "fa": [
        "تورینگ در لندن به دنیا آمد. در ۱۹۳۶ مفهوم «ماشین تورینگ» را مطرح کرد که پایه‌ی نظری رایانه‌های امروزی است. در جنگ جهانی دوم در بلچلی پارک در شکستن رمز «انیگما»ی آلمان نقش اصلی داشت.",
        "در ۱۹۵۰ «آزمون تورینگ» را برای سنجش هوش ماشین پیشنهاد کرد. در ۱۹۵۲ طبق قوانین آن زمان به‌خاطر همجنس‌گرایی محکوم شد و در ۱۹۵۴ درگذشت. در ۲۰۱۳ عفو سلطنتی گرفت."
      ],
      "en": [
        "Turing was born in London. In 1936 he put forward the concept of the ‘Turing machine’, the theoretical basis of today’s computers. In the Second World War he played a main part at Bletchley Park in breaking Germany’s Enigma code.",
        "In 1950 he proposed the ‘Turing test’ for measuring machine intelligence. In 1952, under the laws of the time, he was convicted because he was homosexual, and he died in 1954. In 2013 he received a royal pardon."
      ]
    },
    "achievements": {
      "fa": [
        "ماشین تورینگ (۱۹۳۶)",
        "شکستن رمز انیگما در بلچلی پارک",
        "آزمون تورینگ (۱۹۵۰)"
      ],
      "en": [
        "The Turing machine (1936)",
        "Breaking the Enigma code at Bletchley Park",
        "The Turing test (1950)"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "elizabeth-ii",
    "name": {
      "fa": "الیزابت دوم",
      "en": "Elizabeth II"
    },
    "country": "united-kingdom",
    "field": "politics",
    "era": "contemporary",
    "born": 1926,
    "died": 2022,
    "summary": {
      "fa": "ملکه‌ی بریتانیا با ۷۰ سال سلطنت",
      "en": "Queen of the United Kingdom with a 70-year reign"
    },
    "bio": {
      "fa": [
        "الیزابت در لندن به دنیا آمد. پس از مرگ پدرش، جرج ششم، در ۶ فوریه‌ی ۱۹۵۲ ملکه شد و در ۲ ژوئن ۱۹۵۳ تاج‌گذاری کرد. او طولانی‌ترین سلطنت در تاریخ بریتانیا (۷۰ سال) را داشت.",
        "در دوره‌ی او امپراتوری به کشورهای مشترک‌المنافع تبدیل شد و جامعه‌ی بریتانیا تغییرات بزرگی کرد. او در ۸ سپتامبر ۲۰۲۲ در بالمورال درگذشت و پسرش چارلز سوم جانشین او شد."
      ],
      "en": [
        "Elizabeth was born in London. After the death of her father, George VI, she became queen on 6 February 1952 and was crowned on 2 June 1953. She had the longest reign in British history (70 years).",
        "In her time the empire became the Commonwealth and British society changed greatly. She died at Balmoral on 8 September 2022 and her son Charles III succeeded her."
      ]
    },
    "achievements": {
      "fa": [
        "طولانی‌ترین سلطنت در تاریخ بریتانیا (۱۹۵۲ تا ۲۰۲۲)",
        "نماد کشورهای مشترک‌المنافع"
      ],
      "en": [
        "The longest reign in British history (1952 to 2022)",
        "A symbol of the Commonwealth"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "thatcher",
    "name": {
      "fa": "مارگارت تاچر",
      "en": "Margaret Thatcher"
    },
    "country": "united-kingdom",
    "field": "politics",
    "era": "contemporary",
    "born": 1925,
    "died": 2013,
    "summary": {
      "fa": "نخستین زن نخست‌وزیر بریتانیا",
      "en": "The first woman prime minister of Britain"
    },
    "bio": {
      "fa": [
        "تاچر در گرنتم به دنیا آمد و در شیمی و حقوق تحصیل کرد. از ۱۹۷۵ رهبر حزب محافظه‌کار و از ۱۹۷۹ تا ۱۹۹۰ نخست‌وزیر بود؛ نخستین زنی که این مقام را داشت.",
        "او خصوصی‌سازی، کاهش نقش دولت و مقابله با اتحادیه‌های کارگری را پیش برد و در ۱۹۸۲ جنگ فالکلند را رهبری کرد. هواداران و منتقدانش درباره‌ی میراث او، به‌ویژه تأثیر سیاست‌هایش بر اشتغال و نابرابری، دیدگاه‌های بسیار متفاوتی دارند."
      ],
      "en": [
        "Thatcher was born in Grantham and studied chemistry and law. She was leader of the Conservative Party from 1975 and prime minister from 1979 to 1990, the first woman to hold the office.",
        "She pushed privatization, a smaller role for the state and confrontation with trade unions, and led the Falklands War in 1982. Her supporters and critics hold very different views of her legacy, above all the effect of her policies on employment and inequality."
      ]
    },
    "achievements": {
      "fa": [
        "نخستین زن نخست‌وزیر بریتانیا",
        "خصوصی‌سازی",
        "جنگ فالکلند (۱۹۸۲)"
      ],
      "en": [
        "First woman prime minister of Britain",
        "Privatization",
        "The Falklands War (1982)"
      ]
    },
    "added": "2026-10-10"
  },
  {
    "id": "berners-lee",
    "name": {
      "fa": "تیم برنرز-لی",
      "en": "Tim Berners-Lee"
    },
    "country": "united-kingdom",
    "field": "invention",
    "era": "contemporary",
    "born": 1955,
    "died": null,
    "summary": {
      "fa": "مخترع شبکه‌ی جهانی وب",
      "en": "Inventor of the World Wide Web"
    },
    "bio": {
      "fa": [
        "برنرز-لی در لندن به دنیا آمد. در ۱۹۸۹ در سرن، آزمایشگاه فیزیک ذرات در سوئیس، طرح «وب» را برای به‌اشتراک‌گذاری اطلاعات پیشنهاد کرد.",
        "او در ۱۹۹۰ نخستین مرورگر و کارگزار وب را ساخت و ۱۹۹۱ نخستین سایت به روی همگان باز شد. او وب را ثبت اختراع نکرد تا همه‌ی مردم بتوانند آزادانه از آن استفاده کنند."
      ],
      "en": [
        "Berners-Lee was born in London. In 1989 at CERN, the particle physics laboratory in Switzerland, he proposed the ‘web’ as a way of sharing information.",
        "In 1990 he built the first web browser and server and in 1991 the first website was opened to the public. He did not patent the web, so that everyone could use it freely."
      ]
    },
    "achievements": {
      "fa": [
        "طرح وب (۱۹۸۹)",
        "نخستین مرورگر و کارگزار وب (۱۹۹۰)"
      ],
      "en": [
        "The web proposal (1989)",
        "The first web browser and server (1990)"
      ]
    },
    "added": "2026-10-10"
  }
];
