import { CountrySection, TimelineEvent } from '../../../types';

/** Batch 10: full histories (sections + timeline). */
export interface DetailedHistory10 {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const BATCH_10_HISTORIES: Record<string, DetailedHistory10> = {
  "south-korea": {
    "sections": [
      {
        "id": "prehistory-gojoseon",
        "title": {
          "fa": "پیش از تاریخ و گوجوسان",
          "en": "Prehistory and Gojoseon"
        },
        "text": {
          "fa": [
            "شبه‌جزیره‌ی کره، میان دریای زرد و دریای شرق (که ژاپن آن را دریای ژاپن می‌نامد)، از دوران پارینه‌سنگی مسکون بوده است. سفال «جولمون» (شانه‌ای) از حدود ۸۰۰۰ پیش از میلاد شناخته شده و کشاورزی برنج و فرهنگ «مومون» از حدود ۱۵۰۰ پیش از میلاد گسترش یافت. سنگ‌گورهای «دولمن» کره، که شماری از آن‌ها در فهرست میراث جهانی یونسکو است، از این دوران‌اند.",
            "بنا بر افسانه‌ی بنیان، «دانگون»، فرزند خدای آسمان و زنی که از خرس به انسان بدل شده بود، در ۲۳۳۳ پیش از میلاد نخستین دولت کره، «گوجوسان» (چوسون باستان)، را بنیان گذاشت. مورخان این تاریخ را اسطوره‌ای می‌دانند؛ دولتی تاریخی به نام گوجوسان از حدود قرن هفتم تا چهارم پیش از میلاد در شمال شبه‌جزیره و منچوری شکل گرفت. چین هان در ۱۰۸ پیش از میلاد گوجوسان را برانداخت و چهار «فرمانداری» در شمال برپا کرد. در جنوب، سه اتحادیه‌ی قبیله‌ای («سامهان») شکل گرفتند. روز ۳ اکتبر در کره «روز بنیان ملی» است."
          ],
          "en": [
            "The Korean peninsula, between the Yellow Sea and the East Sea (which Japan calls the Sea of Japan), has been inhabited since the Paleolithic. ‘Jeulmun’ (comb-pattern) pottery is known from about 8000 BCE and rice farming and the ‘Mumun’ culture spread from about 1500 BCE. Korea’s ‘dolmen’ stone tombs, some of which are on UNESCO’s World Heritage List, date from this period.",
            "According to the founding legend, ‘Dangun’, the son of the lord of heaven and a woman who had been a bear, founded Korea’s first state, ‘Gojoseon’ (ancient Joseon), in 2333 BCE. Historians regard this date as mythical; a historical state called Gojoseon took shape from about the seventh to the fourth century BCE in the north of the peninsula and Manchuria. Han China destroyed Gojoseon in 108 BCE and set up four ‘commanderies’ in the north. In the south, three tribal confederations (the ‘Samhan’) took shape. 3 October is ‘National Foundation Day’ in Korea."
          ]
        }
      },
      {
        "id": "three-kingdoms",
        "title": {
          "fa": "سه پادشاهی: گوگوریو، بکچه و سیلا",
          "en": "The Three Kingdoms: Goguryeo, Baekje and Silla"
        },
        "text": {
          "fa": [
            "از حدود قرن اول پیش از میلاد سه پادشاهی بر شبه‌جزیره حاکم شدند. بنا بر سنت، سیلا (۵۷ پیش از میلاد) در جنوب‌شرق، گوگوریو (۳۷ پیش از میلاد) در شمال و بکچه (۱۸ پیش از میلاد) در جنوب‌غرب بنیان گذاشته شدند؛ تاریخ‌ها سنتی‌اند. در جنوب، اتحادیه‌ی «گایا» هم تا ۵۶۲ پایداری کرد. گوگوریو نیرومندترین بود: در ۶۱۲ در نبرد «سالسو» ارتش بزرگ سوی چین را در هم شکست و سردارش اولچی مونداک را قهرمان ملی کرد. گوانگ‌گاتوی بزرگ (۳۹۱ تا ۴۱۳) قلمرو را تا منچوری گسترد.",
            "بودیسم از چین رسید: به گوگوریو (۳۷۲)، بکچه (۳۸۴) و سیلا (۵۲۷). بکچه فرهنگ، هنر و آموزه‌ی بودایی را به ژاپن برد. سیلا، که کوچک‌تر بود، با نهاد «هواراگ» (نخبگان جوان) و ملکه‌ی سوندک (۶۳۲ تا ۶۴۷)، نخستین ملکه‌ی حاکم کره، رشد کرد؛ رصدخانه‌ی «چومسونگدی» از دوران او است. سه دولت بارها با هم جنگیدند."
          ],
          "en": [
            "From about the first century BCE three kingdoms came to rule the peninsula. According to tradition, Silla (57 BCE) in the south-east, Goguryeo (37 BCE) in the north and Baekje (18 BCE) in the south-west were founded; the dates are traditional. In the south, the ‘Gaya’ confederation also lasted until 562. Goguryeo was the strongest: in 612 at the Battle of ‘Salsu’ it destroyed the great army of Sui China and made its general Eulji Mundeok a national hero. Gwanggaeto the Great (391 to 413) extended the realm to Manchuria.",
            "Buddhism arrived from China: to Goguryeo (372), Baekje (384) and Silla (527). Baekje carried culture, art and Buddhist teaching to Japan. Silla, which was smaller, grew with the ‘Hwarang’ institution (a young elite) and Queen Seondeok (632 to 647), Korea’s first ruling queen; the ‘Cheomseongdae’ observatory dates from her time. The three states fought each other repeatedly."
          ]
        }
      },
      {
        "id": "unified-silla",
        "title": {
          "fa": "سیلای متحد و بالهه",
          "en": "Unified Silla and Balhae"
        },
        "text": {
          "fa": [
            "سیلا با اتحاد با تانگ چین ابتدا بکچه (۶۶۰) و بعد گوگوریو (۶۶۸) را شکست داد. سپس با تانگ، که می‌خواست شبه‌جزیره را در دست نگه دارد، جنگید و تا ۶۷۶ بیشتر شبه‌جزیره را تحت کنترل خود درآورد؛ نخستین اتحاد سیاسی بیشتر کره. «سیلای متحد» (۶۷۶ تا ۹۳۵) از شکوفاترین دوران‌ها بود: پایتختش گیونگجو شهری بزرگ شد که بنا بر روایت‌ها حدود یک میلیون نفر جمعیت داشت و معبد بولگوکسا (۷۵۱) و غار سوکگورام از میراث بودایی آن هستند. وونهیو (۶۱۷ تا ۶۸۶) از بزرگ‌ترین راهبان و متفکران بود.",
            "در شمال، «بالهه» (۶۹۸ تا ۹۲۶) را سردار پیشین گوگوریو، دائه جویونگ، بنیان گذاشت و تا خاک امروز روسیه و منچوری گسترش داشت؛ مورخان کره آن را وارث گوگوریو می‌دانند و مورخان چین آن را دولتی از منچوری. سیلا از اواخر قرن نهم به‌خاطر کشمکش اشراف و قیام‌های دهقانی ضعیف شد و «سه پادشاهی بعدی» (۸۹۲ تا ۹۳۶) پدید آمد."
          ],
          "en": [
            "Silla, allied with Tang China, defeated first Baekje (660) and then Goguryeo (668). It then fought Tang, which wanted to keep the peninsula, and by 676 had brought most of the peninsula under its control; the first political unification of most of Korea. ‘Unified Silla’ (676 to 935) was one of the most flourishing periods: its capital Gyeongju became a great city that by tradition had about a million people and the Bulguksa temple (751) and the Seokguram grotto are part of its Buddhist heritage. Wonhyo (617 to 686) was one of the greatest monks and thinkers.",
            "In the north, ‘Balhae’ (698 to 926) was founded by Dae Jo-yeong, a former Goguryeo general, and extended into the territory of today’s Russia and Manchuria; Korean historians regard it as the heir of Goguryeo and Chinese historians as a state of Manchuria. From the late ninth century Silla weakened because of strife among the aristocracy and peasant revolts and the ‘Later Three Kingdoms’ (892 to 936) emerged."
          ]
        }
      },
      {
        "id": "goryeo",
        "title": {
          "fa": "گوریو",
          "en": "Goryeo"
        },
        "text": {
          "fa": [
            "وانگ گئون در ۹۱۸ گوریو را بنیان گذاشت و در ۹۳۶ شبه‌جزیره را دوباره یکی کرد. نام «کره» از گوریو آمده است. بودیسم دین رسمی بود و هنر گوریو، به‌ویژه سرامیک «سلادون» با لعاب سبز-آبی، در سراسر شرق آسیا مشهور شد. گوریو در برابر هجوم‌های خیتان (۹۹۳، ۱۰۱۰، ۱۰۱۸) ایستاد؛ سردار گانگ گام‌چان در نبرد «گوجو» (۱۰۱۹) ارتش خیتان را نابود کرد.",
            "چاپ در گوریو پیشرفته بود: «تریپیتاکا کورئانا» (۱۲۳۶ تا ۱۲۵۱)، مجموعه‌ی ۸۱ هزار قالب چوبی کتاب‌های بودایی، در معبد هائینسا هنوز نگهداری می‌شود و «جیکجی» (۱۳۷۷) کهن‌ترین کتاب شناخته‌شده‌ی چاپ‌شده با حروف فلزی متحرک است. مغول‌ها از ۱۲۳۱ چند بار حمله کردند؛ دربار به جزیره‌ی گانگهوا گریخت و گوریو در ۱۲۷۰ تسلیم شد و نزدیک به یک قرن تابع یوان بود. در ۱۳۸۸ ژنرال یی سونگ‌گی، که از جنگ با مینگ چین سرپیچی کرد، قدرت را گرفت."
          ],
          "en": [
            "Wang Geon founded Goryeo in 918 and reunited the peninsula in 936. The name ‘Korea’ comes from Goryeo. Buddhism was the official religion and Goryeo art, above all ‘celadon’ ceramics with a blue-green glaze, became famous across East Asia. Goryeo stood against the Khitan invasions (993, 1010, 1018); the general Gang Gam-chan destroyed the Khitan army at the Battle of ‘Kuju’ (1019).",
            "Printing was advanced in Goryeo: the ‘Tripitaka Koreana’ (1236 to 1251), a set of 81,000 woodblocks of Buddhist texts, is still kept at the Haeinsa temple, and the ‘Jikji’ (1377) is the oldest known book printed with movable metal type. The Mongols attacked several times from 1231; the court fled to Ganghwa Island and Goryeo submitted in 1270 and for nearly a century was a subordinate of the Yuan. In 1388 General Yi Seong-gye, who refused to fight Ming China, took power."
          ]
        }
      },
      {
        "id": "early-joseon",
        "title": {
          "fa": "چوسون: آغاز و سجونگ بزرگ",
          "en": "Joseon: the beginning and Sejong the Great"
        },
        "text": {
          "fa": [
            "یی سونگ‌گی در ۱۳۹۲ چوسون را بنیان گذاشت و در ۱۳۹۴ پایتخت را به هانیانگ (سئول امروز) برد. این دولت، که تا ۱۹۱۰ دوام آورد (از ۱۸۹۷ با نام «امپراتوری کره»)، یکی از بلندمدت‌ترین سلسله‌های تاریخ است. نئوکنفوسیوسیسم ایدئولوژی دولت شد؛ جامعه سلسله‌مراتبی بود: «یانگبان» (اشراف و دیوان‌سالار)، «جونگین»، مردم عادی و بردگان. زنان از کارهای عمومی دور بودند.",
            "سجونگ بزرگ (۱۴۱۸ تا ۱۴۵۰) اوج دوران چوسون بود. او با گروهی از دانشمندان «هانگول»، الفبای آوایی کره‌ای، را ساخت (۱۴۴۳) و در ۱۴۴۶ با «هونمین‌جونگئوم» (آموزش درست برای مردم) معرفی کرد تا مردم عادی بتوانند خواندن و نوشتن بیاموزند؛ در کره ۹ اکتبر «روز هانگول» است. در دوران او باران‌سنج (۱۴۴۱)، ساعت آبی و ابزارهای نجومی (کار جانگ یونگ‌سیل) ساخته شد و دانش، کشاورزی و موسیقی رشد کرد."
          ],
          "en": [
            "Yi Seong-gye founded Joseon in 1392 and in 1394 moved the capital to Hanyang (today’s Seoul). This state, which lasted until 1910 (from 1897 under the name ‘Korean Empire’), is one of the longest-lasting dynasties in history. Neo-Confucianism became the state ideology; society was hierarchical: the ‘yangban’ (aristocrats and officials), the ‘jungin’, commoners and slaves. Women were kept from public affairs.",
            "Sejong the Great (1418 to 1450) was the peak of the Joseon period. With a group of scholars he created ‘Hangul’, the phonetic Korean alphabet (1443), and in 1446 introduced it with the ‘Hunminjeongeum’ (the correct sounds for the instruction of the people) so that ordinary people could learn to read and write; in Korea 9 October is ‘Hangul Day’. In his time the rain gauge (1441), water clock and astronomical instruments (the work of Jang Yeong-sil) were made and learning, farming and music flourished."
          ]
        }
      },
      {
        "id": "imjin-war",
        "title": {
          "fa": "جنگ ایمجین و حمله‌ی منچوها",
          "en": "The Imjin War and the Manchu invasions"
        },
        "text": {
          "fa": [
            "ژاپن تحت رهبری تویوتومی هیدئیوشی در ۱۵۹۲ به کره حمله کرد (جنگ «ایمجین»، ۱۵۹۲ تا ۱۵۹۸) تا از راه کره به مینگ چین برسد. ارتش ژاپن در چند هفته به پیونگ‌یانگ رسید. نیروی دریایی کره به فرماندهی یی سون‌شین با «کشتی‌های لاک‌پشتی» پوشیده‌شده دریا را از ژاپن گرفت و خطوط تدارکات ژاپنی را برید. در نبرد «میونگ‌نیانگ» (۱۵۹۷) او با ۱۳ کشتی بر ناوگانی که بنا بر منابع کره‌ای حدود ۱۳۳ کشتی جنگی داشت، پیروز شد. یی در نبرد «نوریانگ» (۱۶ دسامبر ۱۵۹۸) در آخرین نبرد جنگ کشته شد. چین مینگ هم به کره کمک کرد؛ ژاپن عقب نشست. جنگ میلیون‌ها کشته و ویرانی گسترده داشت.",
            "منچوها در ۱۶۲۷ و ۱۶۳۶ به کره حمله کردند و چوسون پس از شکست در ۱۶۳۷ تابع دولت چینگ شد. در قرن‌های هفدهم و هجدهم چوسون بیشتر منزوی («پادشاهی گوشه‌نشین») بود. «دونگی بوگام» (۱۶۱۳)، دایره‌المعارف پزشکی هو جون، به فهرست «حافظه‌ی جهانی» یونسکو راه یافت. اصلاح‌طلبان «سیرهاک» (آموزش کاربردی) مانند جونگ یاک‌یونگ از کشاورزی و اداره‌ی بهتر دفاع کردند و پادشاه جونگجو قلعه‌ی هواسونگ (۱۷۹۶) را ساخت."
          ],
          "en": [
            "Japan under Toyotomi Hideyoshi attacked Korea in 1592 (the ‘Imjin’ War, 1592 to 1598) to reach Ming China through Korea. The Japanese army reached Pyongyang within weeks. The Korean navy under Yi Sun-sin, with armoured ‘turtle ships’, took command of the sea from Japan and cut Japanese supply lines. At the Battle of ‘Myeongnyang’ (1597) he won with 13 ships against a fleet that according to Korean sources had about 133 warships. Yi was killed at the Battle of ‘Noryang’ (16 December 1598) in the last battle of the war. Ming China also helped Korea; Japan withdrew. The war brought millions of deaths and widespread destruction.",
            "The Manchus attacked Korea in 1627 and 1636 and after defeat in 1637 Joseon became a tributary of the Qing state. In the seventeenth and eighteenth centuries Joseon was mostly isolated (the ‘Hermit Kingdom’). The ‘Dongui Bogam’ (1613), Heo Jun’s medical encyclopedia, entered UNESCO’s ‘Memory of the World’ register. The ‘Silhak’ (practical learning) reformers such as Jeong Yak-yong argued for farming and better administration and King Jeongjo built Hwaseong Fortress (1796)."
          ]
        }
      },
      {
        "id": "opening-annexation",
        "title": {
          "fa": "گشایش، امپراتوری کره و الحاق",
          "en": "Opening, the Korean Empire and annexation"
        },
        "text": {
          "fa": [
            "ژاپن با «پیمان گانگهوا» (۱۸۷۶) کره را به روی تجارت گشود و آمریکا (۱۸۸۲) و دیگر قدرت‌ها پیمان بستند. «قیام دهقانی دونگهاک» (۱۸۹۴) به جنگ چین و ژاپن (۱۸۹۴ تا ۱۸۹۵) انجامید که بر خاک کره درگرفت و چین شکست خورد. ملکه‌ی مین، که در برابر ژاپن مقاومت می‌کرد، در ۸ اکتبر ۱۸۹۵ به دست ایجنت‌های ژاپنی کشته شد. پادشاه گوجونگ در ۱۸۹۷ «امپراتوری کره» را اعلام کرد.",
            "ژاپن پس از پیروزی بر روسیه (۱۹۰۴ تا ۱۹۰۵) با «پیمان حمایت» (۱۹۰۵) سیاست خارجی کره را در دست گرفت. آن جونگ‌گون در ۲۶ اکتبر ۱۹۰۹ در هاربین ایتو هیروبومی، نخستین مقیم ژاپنی در کره، را کشت؛ او در ۱۹۱۰ اعدام شد و در کره قهرمان ملی و در ژاپن جنایتکار شناخته می‌شود. ژاپن در ۲۹ اوت ۱۹۱۰ کره را ضمیمه کرد و پایان چوسون رسید."
          ],
          "en": [
            "Japan with the ‘Treaty of Ganghwa’ (1876) opened Korea to trade and America (1882) and other powers made treaties. The ‘Donghak Peasant Revolution’ (1894) led to the Sino-Japanese War (1894 to 1895), fought on Korean soil, in which China was defeated. Queen Min, who resisted Japan, was killed by Japanese agents on 8 October 1895. King Gojong proclaimed the ‘Korean Empire’ in 1897.",
            "After its victory over Russia (1904 to 1905) Japan took over Korea’s foreign policy with the ‘Protectorate Treaty’ (1905). Ahn Jung-geun on 26 October 1909 at Harbin killed Itō Hirobumi, the first Japanese resident-general in Korea; he was executed in 1910 and in Korea is regarded as a national hero and in Japan as a criminal. Japan annexed Korea on 29 August 1910 and Joseon came to an end."
          ]
        }
      },
      {
        "id": "colonial-rule",
        "title": {
          "fa": "حکومت استعماری ژاپن (۱۹۱۰ تا ۱۹۴۵)",
          "en": "Japanese colonial rule (1910 to 1945)"
        },
        "text": {
          "fa": [
            "ژاپن بر کره با حکومت نظامی و بعد با سیاست «همسان‌سازی» حکم راند: زبان کره‌ای از مدرسه‌ها کنار گذاشته شد و از ۱۹۳۹ تا ۱۹۴۰ کره‌ای‌ها را وادار به گرفتن نام ژاپنی کردند. زمین‌های بسیاری ضبط شد و صدها هزار کره‌ای در جنگ به کار اجباری کشیده شدند. شمار زیادی از زنان کره‌ای، و زنانی از کشورهای دیگر، به بردگی جنسی در «ایستگاه‌های آسایش» ارتش ژاپن کشانده شدند؛ برآوردها از ده‌ها هزار تا بیش از صدهزار نفر بسیار متفاوت است و این مسئله هنوز اختلاف دیپلماتیک میان کره و ژاپن است.",
            "در ۱ مارس ۱۹۱۹ «جنبش اول مارس» با اعلامیه‌ی استقلال و تظاهرات مسالمت‌آمیز در سراسر کشور آغاز شد؛ ژاپن آن را با خشونت سرکوب کرد و ده‌ها هزار نفر بازداشت شدند و بنا بر برآوردهای متفاوت، از چند صد تا بیش از هفت هزار نفر کشته شدند. دختر هفده‌ساله یو گوان‌سون در زندان درگذشت. در آوریل ۱۹۱۹ «دولت موقت جمهوری کره» در شانگهای ساخته شد و کیم گو از رهبران آن بود. جنگجویان استقلال در منچوری (مانند نبرد چونگسان‌ری، ۱۹۲۰) و چین می‌جنگیدند. با تسلیم ژاپن در ۱۵ اوت ۱۹۴۵ کره آزاد شد."
          ],
          "en": [
            "Japan ruled Korea with military rule and then with a policy of ‘assimilation’: the Korean language was removed from schools and from 1939 to 1940 Koreans were forced to take Japanese names. Much land was seized and hundreds of thousands of Koreans were drawn into forced labour in the war. A large number of Korean women, and women from other countries, were forced into sexual slavery in the Japanese army’s ‘comfort stations’; estimates vary widely from tens of thousands to over a hundred thousand and the issue is still a diplomatic dispute between Korea and Japan.",
            "On 1 March 1919 the ‘March First Movement’ began with a declaration of independence and peaceful demonstrations across the country; Japan suppressed it violently and tens of thousands were arrested and by differing estimates from several hundred to more than seven thousand were killed. The seventeen-year-old girl Yu Gwan-sun died in prison. In April 1919 the ‘Provisional Government of the Republic of Korea’ was set up in Shanghai and Kim Gu was among its leaders. Independence fighters fought in Manchuria (as in the Battle of Cheongsanri, 1920) and China. With Japan’s surrender on 15 August 1945 Korea was liberated."
          ]
        }
      },
      {
        "id": "division-war",
        "title": {
          "fa": "تقسیم و جنگ کره",
          "en": "Division and the Korean War"
        },
        "text": {
          "fa": [
            "پس از ۱۹۴۵ آمریکا جنوب و شوروی شمال مدار ۳۸ درجه را اشغال کرد؛ تقسیمی موقت که دائمی شد. شورش جزیره‌ی جِجو (از ۳ آوریل ۱۹۴۸) با سرکوب شدید تا ۱۹۴۹ ده‌ها هزار کشته به همراه داشت. پس از انتخابات زیر نظر سازمان ملل در جنوب، «جمهوری کره» در ۱۵ اوت ۱۹۴۸ با ریاست‌جمهوری سینگمن ری اعلام شد و در شمال، کیم ایل‌سونگ جمهوری مردمی را در ۹ سپتامبر اعلام کرد.",
            "کره‌ی شمالی در ۲۵ ژوئن ۱۹۵۰ به جنوب حمله کرد. نیروهای سازمان ملل به رهبری آمریکا وارد شدند، فرود اینچئون (۱۵ سپتامبر ۱۹۵۰) جنگ را برگرداند و چین در اکتبر ۱۹۵۰ به کمک شمال آمد. جنگ با آتش‌بس ۲۷ ژوئیه‌ی ۱۹۵۳ در مدار ۳۸ درجه پایان یافت؛ پیمان صلح هرگز امضا نشد. برآوردها از شمار کشته‌ها از ۲ تا حدود ۳ میلیون نفر، بیشترشان غیرنظامی، فرق می‌کند و میلیون‌ها نفر خانواده‌ی خود را از دست دادند. «منطقه‌ی غیرنظامی» (دی‌ام‌زد) هنوز دو کره را جدا می‌کند. آمریکا و کره‌ی جنوبی در ۱۹۵۳ پیمان دفاعی بستند."
          ],
          "en": [
            "After 1945 America occupied the south and the Soviet Union the north of the 38th parallel; a provisional division that became permanent. The Jeju uprising (from 3 April 1948) with severe repression had tens of thousands of dead by 1949. After UN-supervised elections in the south, the ‘Republic of Korea’ was proclaimed on 15 August 1948 with Syngman Rhee as president and in the north Kim Il Sung proclaimed the people’s republic on 9 September.",
            "North Korea attacked the south on 25 June 1950. UN forces led by America came in, the Inchon landing (15 September 1950) turned the war and China came to the north’s aid in October 1950. The war ended with an armistice on 27 July 1953 at the 38th parallel; a peace treaty was never signed. Estimates of the dead range from 2 to about 3 million, most of them civilians, and millions lost their families. The ‘Demilitarized Zone’ (DMZ) still separates the two Koreas. America and South Korea made a defence treaty in 1953."
          ]
        }
      },
      {
        "id": "authoritarian-miracle",
        "title": {
          "fa": "ری، پارک و «معجزه‌ی رود هان»",
          "en": "Rhee, Park and the ‘Miracle on the Han River’"
        },
        "text": {
          "fa": [
            "سینگمن ری، نخستین رئیس‌جمهور (۱۹۴۸ تا ۱۹۶۰)، مخالفان را سرکوب کرد و انتخابات را دستکاری کرد. «انقلاب آوریل» (۱۹ آوریل ۱۹۶۰)، قیام دانشجویی، او را وادار به استعفا کرد (۲۶ آوریل) و او به هاوایی رفت. «جمهوری دوم» کوتاه بود: ژنرال پارک چونگ‌هی در ۱۶ مه ۱۹۶۱ با کودتا قدرت را گرفت.",
            "پارک (رئیس‌جمهور ۱۹۶۳ تا ۱۹۷۹) با برنامه‌های پنج‌ساله، حمایت از غول‌های صنعتی («چیبول») مانند سامسونگ و هیوندای، صادرات و روابط با ژاپن (۱۹۶۵) اقتصاد را متحول کرد؛ کره‌ی جنوبی از یکی از فقیرترین کشورهای جهان در ۱۹۶۰ به یک اقتصاد صنعتی بدل شد («معجزه‌ی رود هان»). حدود ۳۲۰ هزار سرباز کره‌ای در ویتنام جنگیدند. اما او با «قانون اساسی یوشین» (۱۹۷۲) قدرت مطلق گرفت و مخالفان را بازداشت و شکنجه کرد. در ۲۶ اکتبر ۱۹۷۹ رئیس سازمان اطلاعات، کیم جائه‌گیو، او را ترور کرد.",
            "ژنرال چون دو‌هوان با کودتای ۱۲ دسامبر ۱۹۷۹ قدرت را گرفت. «قیام گوانگجو» (۱۸ تا ۲۷ مه ۱۹۸۰) علیه حکومت نظامی با کشتار ارتش سرکوب شد؛ شمار کشته‌ها، بنا بر منابع مختلف، از حدود ۱۶۰ تا بیش از ۵۰۰ نفر برآورد می‌شود و هنوز بحث برانگیز است."
          ],
          "en": [
            "Syngman Rhee, the first president (1948 to 1960), repressed opponents and rigged elections. The ‘April Revolution’ (19 April 1960), a student uprising, forced him to resign (26 April) and he went to Hawaii. The ‘Second Republic’ was short: General Park Chung-hee took power in a coup on 16 May 1961.",
            "Park (president 1963 to 1979) with five-year plans, support for industrial giants (‘chaebol’) such as Samsung and Hyundai, exports and relations with Japan (1965) transformed the economy; South Korea went from one of the world’s poorest countries in 1960 to an industrial economy (the ‘Miracle on the Han River’). About 320,000 Korean soldiers fought in Vietnam. But with the ‘Yushin Constitution’ (1972) he took absolute power and arrested and tortured opponents. On 26 October 1979 the head of the intelligence agency, Kim Jae-gyu, assassinated him.",
            "General Chun Doo-hwan took power in the coup of 12 December 1979. The ‘Gwangju Uprising’ (18 to 27 May 1980) against military rule was suppressed by the army with a massacre; the number killed is estimated by various sources from about 160 to more than 500 and is still disputed."
          ]
        }
      },
      {
        "id": "democracy-today",
        "title": {
          "fa": "دموکراسی و کره‌ی جنوبی امروز",
          "en": "Democracy and South Korea today"
        },
        "text": {
          "fa": [
            "«مبارزه‌ی ژوئن» (۱۰ تا ۲۹ ژوئن ۱۹۸۷) با اعتراض میلیون‌ها نفر، پس از مرگ دانشجو پارک جونگ‌چول زیر شکنجه، حکومت را وادار به پذیرش انتخابات مستقیم ریاست‌جمهوری کرد. رو تائه‌وو در دسامبر ۱۹۸۷ برنده شد و دموکراسی آغاز شد. المپیک ۱۹۸۸ در سئول نمایش پیشرفت کشور بود. کره‌ی جنوبی و شمالی در ۱۹۹۱ با هم عضو سازمان ملل شدند. کیم یونگ‌سام (۱۹۹۳) نخستین رئیس‌جمهور غیرنظامی بود. بحران مالی آسیا در ۱۹۹۷ کشور را به وام ۵۸ میلیارد دلاری صندوق بین‌المللی پول کشاند، اما اقتصاد زود بازیافت.",
            "کیم دائه‌جونگ (۱۹۹۸ تا ۲۰۰۳) با «سیاست آفتاب» با شمال گفت‌وگو کرد؛ اجلاس ژوئن ۲۰۰۰ با کیم جونگ‌ایل برایش نوبل صلح آورد. کره‌ی جنوبی در ۲۰۰۲ با ژاپن میزبان جام جهانی بود و به نیمه‌نهایی رسید. پارک گئون‌هه، نخستین رئیس‌جمهور زن (۲۰۱۳)، پس از اعتراض‌های بزرگ در دسامبر ۲۰۱۶ استیضاح و در ۱۰ مارس ۲۰۱۷ برکنار شد و بعدها محکوم شد. مون جائه‌این (۲۰۱۷ تا ۲۰۲۲) سه اجلاس با کیم جونگ‌اون برگزار کرد. «پارازیت» (۲۰۱۹) نخستین فیلم غیرانگلیسی برنده‌ی اسکار بهترین فیلم شد و «موج کره‌ای» (هالیو)، از ک‌پاپ و بی‌تی‌اس تا سریال‌ها، جهانی شد.",
            "در ۳ دسامبر ۲۰۲۴ رئیس‌جمهور یون سوک‌یول حکومت نظامی اعلام کرد؛ مجلس چند ساعت بعد آن را لغو کرد. مجلس او را در ۱۴ دسامبر ۲۰۲۴ استیضاح کرد و دیوان قانون اساسی در ۴ آوریل ۲۰۲۵ به اتفاق آرا (۸ به ۰) برکناری او را تأیید کرد. در انتخابات ۳ ژوئن ۲۰۲۵ لی جائه‌میونگ رئیس‌جمهور شد. کره‌ی جنوبی با حدود ۵۱ میلیون نفر یکی از بزرگ‌ترین اقتصادهای جهان است، اما کمترین نرخ باروری جهان (حدود ۰٫۷ فرزند برای هر زن) را دارد."
          ],
          "en": [
            "The ‘June Struggle’ (10 to 29 June 1987), with protests by millions after the death of the student Park Jong-chul under torture, forced the government to accept direct presidential elections. Roh Tae-woo won in December 1987 and democracy began. The 1988 Olympics in Seoul showed the country’s progress. South and North Korea joined the United Nations together in 1991. Kim Young-sam (1993) was the first civilian president. The Asian financial crisis of 1997 took the country to a 58-billion-dollar IMF loan, but the economy recovered quickly.",
            "Kim Dae-jung (1998 to 2003) with the ‘Sunshine Policy’ held talks with the north; the June 2000 summit with Kim Jong Il won him the Nobel Peace Prize. In 2002 South Korea co-hosted the World Cup with Japan and reached the semi-finals. Park Geun-hye, the first woman president (2013), was impeached after great protests in December 2016 and removed on 10 March 2017 and later convicted. Moon Jae-in (2017 to 2022) held three summits with Kim Jong Un. ‘Parasite’ (2019) was the first non-English-language film to win the Oscar for Best Picture and the ‘Korean Wave’ (Hallyu), from K-pop and BTS to television series, went global.",
            "On 3 December 2024 President Yoon Suk Yeol declared martial law; the National Assembly lifted it a few hours later. The Assembly impeached him on 14 December 2024 and the Constitutional Court on 4 April 2025 unanimously (8 to 0) upheld his removal. In the election of 3 June 2025 Lee Jae-myung became president. With about 51 million people South Korea is one of the world’s largest economies, but has the world’s lowest fertility rate (about 0.7 children per woman)."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -2333,
        "title": {
          "fa": "بنیان گوجوسان (بنا بر افسانه)",
          "en": "The founding of Gojoseon (according to legend)"
        },
        "text": {
          "fa": "دانگون نخستین دولت کره را بنیان گذاشت؛ تاریخ اسطوره‌ای است.",
          "en": "Dangun founded Korea’s first state; the date is mythical."
        }
      },
      {
        "year": -108,
        "title": {
          "fa": "سقوط گوجوسان",
          "en": "The fall of Gojoseon"
        },
        "text": {
          "fa": "چین هان آن را برانداخت و چهار فرمانداری برپا کرد.",
          "en": "Han China destroyed it and set up four commanderies."
        }
      },
      {
        "year": -57,
        "title": {
          "fa": "بنیان سیلا (بنا بر سنت)",
          "en": "The founding of Silla (according to tradition)"
        },
        "text": {
          "fa": "نخستین از سه پادشاهی در جنوب‌شرق.",
          "en": "The first of the three kingdoms, in the south-east."
        }
      },
      {
        "year": -37,
        "title": {
          "fa": "بنیان گوگوریو (بنا بر سنت)",
          "en": "The founding of Goguryeo (according to tradition)"
        },
        "text": {
          "fa": "قدرتمندترین پادشاهی در شمال.",
          "en": "The most powerful kingdom, in the north."
        }
      },
      {
        "year": -18,
        "title": {
          "fa": "بنیان بکچه (بنا بر سنت)",
          "en": "The founding of Baekje (according to tradition)"
        },
        "text": {
          "fa": "پادشاهی جنوب‌غرب.",
          "en": "The kingdom of the south-west."
        }
      },
      {
        "year": 372,
        "title": {
          "fa": "ورود بودیسم به گوگوریو",
          "en": "Buddhism arrives in Goguryeo"
        },
        "text": {
          "fa": "بکچه در ۳۸۴ و سیلا در ۵۲۷ آن را پذیرفتند.",
          "en": "Baekje accepted it in 384 and Silla in 527."
        }
      },
      {
        "year": 391,
        "yearText": {
          "fa": "۳۹۱ تا ۴۱۳",
          "en": "391 to 413"
        },
        "title": {
          "fa": "گوانگ‌گاتوی بزرگ",
          "en": "Gwanggaeto the Great"
        },
        "text": {
          "fa": "گوگوریو تا منچوری گسترش یافت.",
          "en": "Goguryeo expanded to Manchuria."
        }
      },
      {
        "year": 612,
        "title": {
          "fa": "نبرد سالسو",
          "en": "The Battle of Salsu"
        },
        "text": {
          "fa": "گوگوریو ارتش بزرگ سوی چین را شکست داد.",
          "en": "Goguryeo defeated the great army of Sui China."
        }
      },
      {
        "year": 632,
        "yearText": {
          "fa": "۶۳۲ تا ۶۴۷",
          "en": "632 to 647"
        },
        "title": {
          "fa": "ملکه‌ی سوندک",
          "en": "Queen Seondeok"
        },
        "text": {
          "fa": "نخستین ملکه‌ی حاکم کره؛ رصدخانه‌ی چومسونگدی.",
          "en": "Korea’s first ruling queen; the Cheomseongdae observatory."
        }
      },
      {
        "year": 660,
        "title": {
          "fa": "سقوط بکچه",
          "en": "The fall of Baekje"
        },
        "text": {
          "fa": "سیلا و تانگ بکچه را شکست دادند.",
          "en": "Silla and Tang defeated Baekje."
        }
      },
      {
        "year": 668,
        "title": {
          "fa": "سقوط گوگوریو",
          "en": "The fall of Goguryeo"
        },
        "text": {
          "fa": "سیلا با تانگ گوگوریو را برانداخت.",
          "en": "Silla with Tang destroyed Goguryeo."
        }
      },
      {
        "year": 676,
        "title": {
          "fa": "اتحاد سیلا",
          "en": "The Silla unification"
        },
        "text": {
          "fa": "سیلا تانگ را راند و بیشتر شبه‌جزیره را کنترل کرد.",
          "en": "Silla drove out Tang and controlled most of the peninsula."
        }
      },
      {
        "year": 698,
        "title": {
          "fa": "بنیان بالهه",
          "en": "The founding of Balhae"
        },
        "text": {
          "fa": "دائه جویونگ در شمال بالهه را بنیان گذاشت.",
          "en": "Dae Jo-yeong founded Balhae in the north."
        }
      },
      {
        "year": 751,
        "title": {
          "fa": "ساخت بولگوکسا",
          "en": "The building of Bulguksa"
        },
        "text": {
          "fa": "معبد بودایی در گیونگجو آغاز شد.",
          "en": "The Buddhist temple at Gyeongju was begun."
        }
      },
      {
        "year": 918,
        "title": {
          "fa": "بنیان گوریو",
          "en": "The founding of Goryeo"
        },
        "text": {
          "fa": "وانگ گئون گوریو را بنیان گذاشت؛ در ۹۳۶ شبه‌جزیره را یکی کرد.",
          "en": "Wang Geon founded Goryeo; in 936 he reunified the peninsula."
        }
      },
      {
        "year": 1019,
        "title": {
          "fa": "نبرد گوجو",
          "en": "The Battle of Kuju"
        },
        "text": {
          "fa": "گانگ گام‌چان ارتش خیتان را نابود کرد.",
          "en": "Gang Gam-chan destroyed the Khitan army."
        }
      },
      {
        "year": 1231,
        "yearText": {
          "fa": "۱۲۳۱ تا ۱۲۷۰",
          "en": "1231 to 1270"
        },
        "title": {
          "fa": "حمله‌های مغول",
          "en": "The Mongol invasions"
        },
        "text": {
          "fa": "گوریو در ۱۲۷۰ تسلیم شد.",
          "en": "Goryeo submitted in 1270."
        }
      },
      {
        "year": 1236,
        "yearText": {
          "fa": "۱۲۳۶ تا ۱۲۵۱",
          "en": "1236 to 1251"
        },
        "title": {
          "fa": "تریپیتاکا کورئانا",
          "en": "The Tripitaka Koreana"
        },
        "text": {
          "fa": "۸۱ هزار قالب چوبی متون بودایی.",
          "en": "81,000 woodblocks of Buddhist texts."
        }
      },
      {
        "year": 1377,
        "title": {
          "fa": "جیکجی",
          "en": "The Jikji"
        },
        "text": {
          "fa": "کهن‌ترین کتاب شناخته‌شده‌ی چاپ‌شده با حروف فلزی متحرک.",
          "en": "The oldest known book printed with movable metal type."
        }
      },
      {
        "year": 1392,
        "title": {
          "fa": "بنیان چوسون",
          "en": "The founding of Joseon"
        },
        "text": {
          "fa": "یی سونگ‌گی سلسله‌ای را بنیان گذاشت که تا ۱۹۱۰ دوام آورد.",
          "en": "Yi Seong-gye founded the dynasty that lasted until 1910."
        }
      },
      {
        "year": 1394,
        "title": {
          "fa": "هانیانگ پایتخت می‌شود",
          "en": "Hanyang becomes the capital"
        },
        "text": {
          "fa": "شهری که بعدها سئول نام گرفت.",
          "en": "The city later called Seoul."
        }
      },
      {
        "year": 1443,
        "title": {
          "fa": "ساخت هانگول",
          "en": "The creation of Hangul"
        },
        "text": {
          "fa": "سجونگ بزرگ و دانشمندانش الفبای کره‌ای را ساختند.",
          "en": "Sejong the Great and his scholars created the Korean alphabet."
        }
      },
      {
        "year": 1446,
        "title": {
          "fa": "هونمین‌جونگئوم",
          "en": "The Hunminjeongeum"
        },
        "text": {
          "fa": "هانگول رسماً معرفی شد.",
          "en": "Hangul was formally introduced."
        }
      },
      {
        "year": 1592,
        "yearText": {
          "fa": "۱۵۹۲ تا ۱۵۹۸",
          "en": "1592 to 1598"
        },
        "title": {
          "fa": "جنگ ایمجین",
          "en": "The Imjin War"
        },
        "text": {
          "fa": "حمله‌ی ژاپن؛ یی سون‌شین ناوگان ژاپن را شکست داد.",
          "en": "Japan’s invasion; Yi Sun-sin defeated the Japanese fleet."
        }
      },
      {
        "year": 1597,
        "title": {
          "fa": "نبرد میونگ‌نیانگ",
          "en": "The Battle of Myeongnyang"
        },
        "text": {
          "fa": "یی سون‌شین با ۱۳ کشتی پیروز شد.",
          "en": "Yi Sun-sin won with 13 ships."
        }
      },
      {
        "year": 1598,
        "title": {
          "fa": "نبرد نوریانگ",
          "en": "The Battle of Noryang"
        },
        "text": {
          "fa": "در ۱۶ دسامبر آخرین نبرد جنگ؛ یی سون‌شین کشته شد.",
          "en": "On 16 December the last battle of the war; Yi Sun-sin was killed."
        }
      },
      {
        "year": 1613,
        "title": {
          "fa": "دونگی بوگام",
          "en": "The Dongui Bogam"
        },
        "text": {
          "fa": "دایره‌المعارف پزشکی هو جون.",
          "en": "Heo Jun’s medical encyclopedia."
        }
      },
      {
        "year": 1636,
        "title": {
          "fa": "حمله‌ی منچوها",
          "en": "The Manchu invasion"
        },
        "text": {
          "fa": "چوسون در ۱۶۳۷ تابع چینگ شد.",
          "en": "Joseon became a tributary of the Qing in 1637."
        }
      },
      {
        "year": 1796,
        "title": {
          "fa": "قلعه‌ی هواسونگ",
          "en": "Hwaseong Fortress"
        },
        "text": {
          "fa": "پادشاه جونگجو آن را ساخت.",
          "en": "King Jeongjo built it."
        }
      },
      {
        "year": 1876,
        "title": {
          "fa": "پیمان گانگهوا",
          "en": "The Treaty of Ganghwa"
        },
        "text": {
          "fa": "ژاپن کره را به روی تجارت گشود.",
          "en": "Japan opened Korea to trade."
        }
      },
      {
        "year": 1894,
        "title": {
          "fa": "قیام دونگهاک و جنگ چین و ژاپن",
          "en": "The Donghak revolution and the Sino-Japanese War"
        },
        "text": {
          "fa": "جنگ بر خاک کره؛ چین شکست خورد.",
          "en": "A war on Korean soil; China was defeated."
        }
      },
      {
        "year": 1895,
        "title": {
          "fa": "قتل ملکه‌ی مین",
          "en": "The killing of Queen Min"
        },
        "text": {
          "fa": "در ۸ اکتبر به دست ایجنت‌های ژاپنی.",
          "en": "On 8 October by Japanese agents."
        }
      },
      {
        "year": 1897,
        "title": {
          "fa": "امپراتوری کره",
          "en": "The Korean Empire"
        },
        "text": {
          "fa": "گوجونگ خود را امپراتور اعلام کرد.",
          "en": "Gojong proclaimed himself emperor."
        }
      },
      {
        "year": 1905,
        "title": {
          "fa": "پیمان حمایت",
          "en": "The Protectorate Treaty"
        },
        "text": {
          "fa": "ژاپن سیاست خارجی کره را به دست گرفت.",
          "en": "Japan took over Korea’s foreign policy."
        }
      },
      {
        "year": 1909,
        "title": {
          "fa": "آن جونگ‌گون ایتو را می‌کشد",
          "en": "Ahn Jung-geun kills Itō"
        },
        "text": {
          "fa": "در ۲۶ اکتبر در هاربین.",
          "en": "On 26 October at Harbin."
        }
      },
      {
        "year": 1910,
        "title": {
          "fa": "الحاق کره به ژاپن",
          "en": "The annexation of Korea by Japan"
        },
        "text": {
          "fa": "در ۲۹ اوت چوسون پایان یافت.",
          "en": "On 29 August Joseon came to an end."
        }
      },
      {
        "year": 1919,
        "title": {
          "fa": "جنبش اول مارس",
          "en": "The March First Movement"
        },
        "text": {
          "fa": "اعلامیه‌ی استقلال و تظاهرات سراسری؛ دولت موقت در شانگهای.",
          "en": "The declaration of independence and nationwide demonstrations; the provisional government in Shanghai."
        }
      },
      {
        "year": 1920,
        "title": {
          "fa": "نبرد چونگسان‌ری",
          "en": "The Battle of Cheongsanri"
        },
        "text": {
          "fa": "جنگجویان استقلال در منچوری ژاپنی‌ها را شکست دادند.",
          "en": "Independence fighters defeated the Japanese in Manchuria."
        }
      },
      {
        "year": 1939,
        "yearText": {
          "fa": "۱۹۳۹ تا ۱۹۴۰",
          "en": "1939 to 1940"
        },
        "title": {
          "fa": "تغییر اجباری نام",
          "en": "Forced name changes"
        },
        "text": {
          "fa": "کره‌ای‌ها را وادار به گرفتن نام ژاپنی کردند.",
          "en": "Koreans were forced to take Japanese names."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "آزادی و تقسیم",
          "en": "Liberation and division"
        },
        "text": {
          "fa": "ژاپن در ۱۵ اوت تسلیم شد؛ کره در مدار ۳۸ درجه تقسیم شد.",
          "en": "Japan surrendered on 15 August; Korea was divided at the 38th parallel."
        }
      },
      {
        "year": 1948,
        "title": {
          "fa": "جمهوری کره",
          "en": "The Republic of Korea"
        },
        "text": {
          "fa": "در ۱۵ اوت اعلام شد؛ شورش جِجو از ۳ آوریل.",
          "en": "Proclaimed on 15 August; the Jeju uprising from 3 April."
        }
      },
      {
        "year": 1950,
        "title": {
          "fa": "آغاز جنگ کره",
          "en": "The start of the Korean War"
        },
        "text": {
          "fa": "کره‌ی شمالی در ۲۵ ژوئن حمله کرد.",
          "en": "North Korea attacked on 25 June."
        }
      },
      {
        "year": 1953,
        "title": {
          "fa": "آتش‌بس",
          "en": "The armistice"
        },
        "text": {
          "fa": "در ۲۷ ژوئیه؛ پیمان صلح امضا نشد.",
          "en": "On 27 July; no peace treaty was signed."
        }
      },
      {
        "year": 1960,
        "title": {
          "fa": "انقلاب آوریل",
          "en": "The April Revolution"
        },
        "text": {
          "fa": "در ۱۹ آوریل قیام دانشجویان؛ ری در ۲۶ آوریل استعفا داد.",
          "en": "The students’ uprising on 19 April; Rhee resigned on 26 April."
        }
      },
      {
        "year": 1961,
        "title": {
          "fa": "کودتای پارک چونگ‌هی",
          "en": "Park Chung-hee’s coup"
        },
        "text": {
          "fa": "در ۱۶ مه.",
          "en": "On 16 May."
        }
      },
      {
        "year": 1965,
        "title": {
          "fa": "عادی‌سازی روابط با ژاپن",
          "en": "Normalization of relations with Japan"
        },
        "text": {
          "fa": "پیمان روابط میان کره‌ی جنوبی و ژاپن.",
          "en": "The treaty of relations between South Korea and Japan."
        }
      },
      {
        "year": 1972,
        "title": {
          "fa": "قانون اساسی یوشین",
          "en": "The Yushin Constitution"
        },
        "text": {
          "fa": "پارک قدرت مطلق گرفت.",
          "en": "Park took absolute power."
        }
      },
      {
        "year": 1979,
        "title": {
          "fa": "ترور پارک و کودتای چون",
          "en": "Park’s assassination and Chun’s coup"
        },
        "text": {
          "fa": "ترور در ۲۶ اکتبر؛ کودتای ۱۲ دسامبر.",
          "en": "The assassination on 26 October; the coup on 12 December."
        }
      },
      {
        "year": 1980,
        "title": {
          "fa": "قیام گوانگجو",
          "en": "The Gwangju Uprising"
        },
        "text": {
          "fa": "از ۱۸ تا ۲۷ مه؛ سرکوب خونین.",
          "en": "From 18 to 27 May; a bloody suppression."
        }
      },
      {
        "year": 1987,
        "title": {
          "fa": "مبارزه‌ی ژوئن",
          "en": "The June Struggle"
        },
        "text": {
          "fa": "انتخابات مستقیم پذیرفته شد؛ رو تائه‌وو در دسامبر برنده شد.",
          "en": "Direct elections were accepted; Roh Tae-woo won in December."
        }
      },
      {
        "year": 1988,
        "title": {
          "fa": "المپیک سئول",
          "en": "The Seoul Olympics"
        },
        "text": {
          "fa": "نمایش پیشرفت اقتصادی و دموکراسی.",
          "en": "A showcase of economic progress and democracy."
        }
      },
      {
        "year": 1991,
        "title": {
          "fa": "عضویت در سازمان ملل",
          "en": "Joining the United Nations"
        },
        "text": {
          "fa": "دو کره با هم عضو شدند.",
          "en": "The two Koreas joined together."
        }
      },
      {
        "year": 1993,
        "title": {
          "fa": "نخستین رئیس‌جمهور غیرنظامی",
          "en": "The first civilian president"
        },
        "text": {
          "fa": "کیم یونگ‌سام.",
          "en": "Kim Young-sam."
        }
      },
      {
        "year": 1997,
        "title": {
          "fa": "بحران مالی آسیا",
          "en": "The Asian financial crisis"
        },
        "text": {
          "fa": "وام ۵۸ میلیارد دلاری صندوق بین‌المللی پول.",
          "en": "A 58-billion-dollar IMF loan."
        }
      },
      {
        "year": 2000,
        "title": {
          "fa": "اجلاس دو کره و نوبل صلح",
          "en": "The inter-Korean summit and the Nobel Peace Prize"
        },
        "text": {
          "fa": "کیم دائه‌جونگ در ژوئن با کیم جونگ‌ایل دیدار کرد.",
          "en": "Kim Dae-jung met Kim Jong Il in June."
        }
      },
      {
        "year": 2002,
        "title": {
          "fa": "جام جهانی",
          "en": "The World Cup"
        },
        "text": {
          "fa": "میزبانی مشترک با ژاپن؛ رسیدن به نیمه‌نهایی.",
          "en": "Co-hosted with Japan; reaching the semi-finals."
        }
      },
      {
        "year": 2016,
        "yearText": {
          "fa": "۲۰۱۶ تا ۲۰۱۷",
          "en": "2016 to 2017"
        },
        "title": {
          "fa": "استیضاح پارک گئون‌هه",
          "en": "The impeachment of Park Geun-hye"
        },
        "text": {
          "fa": "استیضاح در دسامبر ۲۰۱۶؛ برکناری ۱۰ مارس ۲۰۱۷.",
          "en": "Impeachment in December 2016; removal on 10 March 2017."
        }
      },
      {
        "year": 2018,
        "title": {
          "fa": "المپیک پیونگ‌چانگ و اجلاس‌ها",
          "en": "The PyeongChang Olympics and the summits"
        },
        "text": {
          "fa": "اجلاس دو کره در ۲۷ آوریل.",
          "en": "The inter-Korean summit on 27 April."
        }
      },
      {
        "year": 2020,
        "title": {
          "fa": "اسکار «پارازیت»",
          "en": "The Oscar for ‘Parasite’"
        },
        "text": {
          "fa": "در ۹ فوریه نخستین فیلم غیرانگلیسی برنده‌ی بهترین فیلم.",
          "en": "On 9 February the first non-English-language film to win Best Picture."
        }
      },
      {
        "year": 2024,
        "title": {
          "fa": "حکومت نظامی و نوبل هان کانگ",
          "en": "Martial law and Han Kang’s Nobel Prize"
        },
        "text": {
          "fa": "حکومت نظامی ۳ دسامبر؛ نوبل ادبیات اکتبر.",
          "en": "Martial law on 3 December; the Nobel Prize in Literature in October."
        }
      },
      {
        "year": 2025,
        "title": {
          "fa": "برکناری یون و انتخاب لی",
          "en": "Yoon’s removal and Lee’s election"
        },
        "text": {
          "fa": "دیوان ۴ آوریل برکناری را تأیید کرد؛ انتخابات ۳ ژوئن.",
          "en": "The court upheld the removal on 4 April; the election on 3 June."
        }
      }
    ]
  }
};
