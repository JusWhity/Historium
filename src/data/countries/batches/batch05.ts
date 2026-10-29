import { CountrySection, TimelineEvent } from '../../../types';

/** Batch 05: full histories (sections + timeline). */
export interface DetailedHistory05 {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const BATCH_05_HISTORIES: Record<string, DetailedHistory05> = {
  "mexico": {
    "sections": [
      {
        "id": "early-mesoamerica",
        "title": {
          "fa": "نخستین مردمان و اولمک‌ها",
          "en": "The first peoples and the Olmecs"
        },
        "text": {
          "fa": [
            "نخستین مردمان هزاران سال پیش از میلاد به سرزمین مکزیک امروزی رسیدند. حدود ۷۰۰۰ تا ۵۰۰۰ پیش از میلاد ذرت در این منطقه اهلی شد؛ ذرت، لوبیا و کدو پایه‌ی تمدن‌های «مزوآمریکا» شد، منطقه‌ای فرهنگی که از مرکز مکزیک تا آمریکای مرکزی کشیده می‌شد.",
            "اولمک‌ها (حدود ۱۲۰۰ تا ۴۰۰ پیش از میلاد) در سواحل خلیج مکزیک نخستین تمدن بزرگ مزوآمریکا را ساختند: مراکزی مانند سن لورنسو و لا ونتا و «سرهای عظیم» سنگی. بسیاری از ویژگی‌های بعدی، از جمله بازی توپ و تقویم، از آن‌ها گرفته شد. زاپوتک‌ها حدود ۵۰۰ پیش از میلاد شهر مونته آلبان را در اوآخاکا ساختند و از نخستین مردمان مزوآمریکا بودند که خط به کار بردند."
          ],
          "en": [
            "The first peoples reached the land of today’s Mexico thousands of years BCE. About 7000 to 5000 BCE maize was domesticated in this region; maize, beans and squash became the base of the civilizations of ‘Mesoamerica’, a cultural area stretching from central Mexico to Central America.",
            "The Olmecs (about 1200 to 400 BCE) on the Gulf coast built Mesoamerica’s first great civilization: centres such as San Lorenzo and La Venta and the colossal stone ‘heads’. Many later features, including the ball game and the calendar, were taken from them. The Zapotecs about 500 BCE built the city of Monte Albán in Oaxaca and were among the first Mesoamerican peoples to use writing."
          ]
        }
      },
      {
        "id": "classic",
        "title": {
          "fa": "تئوتیواکان و مایاها",
          "en": "Teotihuacan and the Maya"
        },
        "text": {
          "fa": [
            "تئوتیواکان، نزدیک مکزیکوسیتی امروز، از حدود ۱۰۰ پیش از میلاد تا حدود ۵۵۰ میلادی یکی از بزرگ‌ترین شهرهای جهان بود، با بیش از ۱۰۰ هزار نفر جمعیت، خیابان مردگان و اهرام خورشید و ماه. نام بنیان‌گذارانش نامعلوم است و آزتک‌ها بعدها نامش را (یعنی «جایی که خدایان ساخته شدند») گذاشتند. شهر حدود ۵۵۰ میلادی دچار آشوب و آتش شد.",
            "مایاها در جنوب مکزیک، گواتمالا و بلیز از حدود ۲۵۰ تا ۹۰۰ میلادی (دوره‌ی کلاسیک) شهرهای مستقل با اهرام و معابد ساختند، مانند پالنکه، تیکال و بعدها چیچن ایتسا. آن‌ها خط هیروگلیفی، ریاضیات با عدد صفر و تقویمی دقیق داشتند. در حدود ۹۰۰ میلادی بسیاری از شهرهای جنوبی رها شدند؛ علت آن، که شاید خشکسالی، جنگ و فرسایش زمین بود، محل بحث است. مایاها هرگز نابود نشدند و میلیون‌ها نفر از آن‌ها امروز در مکزیک و گواتمالا زندگی می‌کنند."
          ],
          "en": [
            "Teotihuacan, near today’s Mexico City, from about 100 BCE to about 550 CE was one of the largest cities in the world, with more than 100,000 people, the Avenue of the Dead and the Pyramids of the Sun and Moon. The name of its founders is unknown and the Aztecs later gave it its name (meaning ‘the place where the gods were made’). The city fell into turmoil and fire about 550 CE.",
            "The Maya in southern Mexico, Guatemala and Belize from about 250 to 900 CE (the Classic period) built independent cities with pyramids and temples, such as Palenque, Tikal and later Chichén Itzá. They had hieroglyphic writing, mathematics with the number zero and an exact calendar. About 900 CE many of the southern cities were abandoned; the cause, perhaps drought, war and soil exhaustion, is debated. The Maya were never wiped out and millions of their descendants live in Mexico and Guatemala today."
          ]
        }
      },
      {
        "id": "aztecs",
        "title": {
          "fa": "تولتک‌ها و امپراتوری آزتک",
          "en": "The Toltecs and the Aztec Empire"
        },
        "text": {
          "fa": [
            "تولتک‌ها (حدود ۹۰۰ تا ۱۱۵۰ میلادی) از تولا در مرکز مکزیک حکم راندند و آزتک‌ها بعدها آن‌ها را الگوی فرهنگ خود دانستند. آزتک‌ها (مکسیکا) بنا بر سنت در ۱۳۲۵ شهر تنوچتیتلان را بر جزیره‌ای در دریاچه‌ی تکسکوکو بنیان گذاشتند. در ۱۴۲۸ با دو شهر دیگر «اتحاد سه‌گانه» را ساختند و بر بیشتر مرکز و جنوب مکزیک باج تحمیل کردند.",
            "تنوچتیتلان با حدود ۲۰۰ هزار نفر از بزرگ‌ترین شهرهای جهان بود، با کانال‌ها، بازار بزرگ و معبد بزرگ. کشاورزی بر «چینامپا» (باغ‌های شناور) استوار بود. دین آزتک‌ها قربانی انسان را برای تغذیه‌ی خورشید لازم می‌دید؛ آنها جنگ‌هایی برای اسیرگرفتن می‌کردند و بسیاری از مردمان زیر سلطه از آنان متنفر بودند. موکتزوما دوم (۱۵۰۲ تا ۱۵۲۰) امپراتوری را به اوج رساند."
          ],
          "en": [
            "The Toltecs (about 900 to 1150 CE) ruled from Tula in central Mexico and the Aztecs later regarded them as the model of their culture. The Aztecs (the Mexica), according to tradition, founded the city of Tenochtitlan in 1325 on an island in Lake Texcoco. In 1428 they formed the ‘Triple Alliance’ with two other cities and imposed tribute on most of central and southern Mexico.",
            "Tenochtitlan, with about 200,000 people, was one of the largest cities in the world, with canals, a great market and the Templo Mayor. Farming rested on ‘chinampas’ (floating gardens). Aztec religion held that human sacrifice was needed to nourish the sun; they fought wars to take captives and many subject peoples hated them. Moctezuma II (1502 to 1520) brought the empire to its peak."
          ]
        }
      },
      {
        "id": "conquest",
        "title": {
          "fa": "فتح اسپانیایی‌ها",
          "en": "The Spanish conquest"
        },
        "text": {
          "fa": [
            "ارنان کورتس در ۱۵۱۹ با حدود ۵۰۰ سرباز در ساحل وراکروز پیاده شد. او با مردمان رقیب آزتک‌ها، به‌ویژه تلاشکالاها، متحد شد و از مترجمی به نام مالینچه (دونیا مارینا) کمک گرفت. موکتزوما او را در نوامبر ۱۵۱۹ وارد تنوچتیتلان کرد. در ژوئن ۱۵۲۰ موکتزوما در دوران اسارت درگذشت (چگونگی مرگش محل بحث است) و اسپانیایی‌ها در «شب اندوه» (۳۰ ژوئن تا ۱ ژوئیه) با تلفات سنگین از شهر گریختند.",
            "همه‌گیری آبله، که اسپانیایی‌ها آوردند، آزتک‌ها را فروکشید. کورتس با هزاران متحد بومی شهر را محاصره کرد و تنوچتیتلان در ۱۳ اوت ۱۵۲۱ سقوط کرد. جمعیت بومی مکزیک مرکزی در یک قرن، بر اثر بیماری، جنگ و کار اجباری، به برآورد ۸۰ تا ۹۰ درصد کاهش یافت. فتح مکزیک نتیجه‌ی ترکیب سلاح، بیماری و ائتلاف با دشمنان آزتک‌ها بود، نه تنها نیروی اسپانیایی‌ها."
          ],
          "en": [
            "Hernán Cortés landed on the coast at Veracruz in 1519 with about 500 soldiers. He allied with peoples who were rivals of the Aztecs, above all the Tlaxcalans, and was helped by an interpreter named Malinche (Doña Marina). Moctezuma let him enter Tenochtitlan in November 1519. In June 1520 Moctezuma died in captivity (how he died is debated) and in the ‘Noche Triste’ (30 June to 1 July) the Spanish fled the city with heavy losses.",
            "An epidemic of smallpox, which the Spanish brought, struck the Aztecs. Cortés besieged the city with thousands of native allies and Tenochtitlan fell on 13 August 1521. The native population of central Mexico fell in a century, through disease, war and forced labour, by an estimated 80 to 90 percent. The conquest of Mexico was the result of a combination of weapons, disease and alliances with the Aztecs’ enemies, not of Spanish force alone."
          ]
        }
      },
      {
        "id": "new-spain",
        "title": {
          "fa": "نیواسپین: سه قرن حکومت اسپانیا",
          "en": "New Spain: three centuries of Spanish rule"
        },
        "text": {
          "fa": [
            "اسپانیا مکزیک را «نیواسپین» نامید و در ۱۵۳۵ نایب‌السلطنه‌ای (آنتونیو د مندوزا) فرستاد. مکزیکوسیتی بر ویرانه‌های تنوچتیتلان بنا شد و دانشگاه آن در ۱۵۵۱ تأسیس شد. کشف معادن نقره در زاکاتکاس (۱۵۴۶) و گواناخواتو ثروتی عظیم آورد و نیواسپین را به یکی از ثروتمندترین مستعمره‌ها تبدیل کرد. کشتی‌های «گالئون مانیل» از ۱۵۶۵ نقره را از آکاپولکو به فیلیپین و کالاهای آسیایی را به مکزیک می‌بردند.",
            "جامعه بر پایه‌ی نژاد سلسله‌مراتبی بود: اسپانیایی‌های متولد اسپانیا در رأس و پس از آن «کریولو» (اسپانیایی‌تبار متولد مکزیک)، «مستیزو» (آمیخته)، بومیان و آفریقایی‌تباران. کلیسای کاتولیک بر آموزش و زندگی روزمره مسلط بود و مبلغان بومیان را مسیحی می‌کردند. دادگاه تفتیش عقاید از ۱۵۷۱ کار می‌کرد. شاعر و دانشمند سور خوانا اینس د لا کروز (۱۶۴۸ یا ۱۶۵۱ تا ۱۶۹۵) از چهره‌های فرهنگی این دوران بود."
          ],
          "en": [
            "Spain called Mexico ‘New Spain’ and in 1535 sent a viceroy (Antonio de Mendoza). Mexico City was built on the ruins of Tenochtitlan and its university was founded in 1551. The discovery of silver mines at Zacatecas (1546) and Guanajuato brought enormous wealth and made New Spain one of the richest colonies. The ‘Manila galleons’ from 1565 carried silver from Acapulco to the Philippines and Asian goods to Mexico.",
            "Society was hierarchical by race: Spaniards born in Spain at the top, then ‘criollos’ (people of Spanish descent born in Mexico), ‘mestizos’ (mixed), Indigenous people and people of African descent. The Catholic Church dominated education and daily life and missionaries converted the Indigenous. The Inquisition worked from 1571. The poet and scholar Sor Juana Inés de la Cruz (1648 or 1651 to 1695) was among the cultural figures of this period."
          ]
        }
      },
      {
        "id": "independence",
        "title": {
          "fa": "جنگ استقلال",
          "en": "The War of Independence"
        },
        "text": {
          "fa": [
            "اصلاحات بوربن‌ها در قرن هجدهم و حمله‌ی ناپلئون به اسپانیا (۱۸۰۸) مستعمره را متزلزل کرد. در ۱۶ سپتامبر ۱۸۱۰ کشیش میگل هیدالگو در شهر دولورس ناقوس کلیسا را به صدا درآورد و مردم را به قیام فراخواند («فریاد دولورس»)؛ سپاهی از دهقانان و بومیان گرد آمد. هیدالگو در ۱۸۱۱ دستگیر و اعدام شد. خوزه ماریا مورلوس، کشیش دیگر، رهبری را گرفت و «احساسات ملت» (۱۸۱۳) را نوشت که برابری و لغو برده‌داری را می‌خواست؛ او در ۱۸۱۵ اعدام شد.",
            "در ۱۸۲۰ انقلاب لیبرال در اسپانیا محافظه‌کاران مکزیک را نگران کرد. آگوستین د ایتوربیده، افسر سابق ارتش اسپانیا، «طرح ایگوالا» (۲۴ فوریه‌ی ۱۸۲۱) را با شورشیان بست و استقلال در ۲۷ سپتامبر ۱۸۲۱ تحقق یافت. ایتوربیده در ۱۸۲۲ امپراتور شد، اما در ۱۸۲۳ برکنار شد. قانون اساسی ۱۸۲۴ جمهوری فدرال را برقرار کرد و گوادالوپه ویکتوریا نخستین رئیس‌جمهور شد."
          ],
          "en": [
            "The Bourbon reforms of the eighteenth century and Napoleon’s invasion of Spain (1808) shook the colony. On 16 September 1810 the priest Miguel Hidalgo rang the church bell in the town of Dolores and called the people to rise (the ‘Grito de Dolores’); an army of peasants and Indigenous people gathered. Hidalgo was captured and executed in 1811. José María Morelos, another priest, took over the leadership and wrote the ‘Sentiments of the Nation’ (1813), which called for equality and the abolition of slavery; he was executed in 1815.",
            "In 1820 the liberal revolution in Spain alarmed Mexico’s conservatives. Agustín de Iturbide, a former officer of the Spanish army, made the ‘Plan of Iguala’ (24 February 1821) with the rebels and independence came on 27 September 1821. Iturbide became emperor in 1822 but was removed in 1823. The constitution of 1824 established a federal republic and Guadalupe Victoria became the first president."
          ]
        }
      },
      {
        "id": "territory-reform",
        "title": {
          "fa": "از دست رفتن خاک، اصلاحات و مداخله‌ی فرانسه",
          "en": "Lost territory, the Reform and the French intervention"
        },
        "text": {
          "fa": [
            "مکزیک در دهه‌های نخست استقلال ناپایدار بود. آنتونیو لوپس د سانتا آنا چندین بار رئیس‌جمهور شد. مهاجران آمریکایی در تگزاس در ۱۸۳۶ شورش کردند (آلامو، نبرد سن‌خاسینتو، ۲۱ آوریل) و ایالات متحده در ۱۸۴۵ تگزاس را ضمیمه کرد. در جنگ مکزیک و آمریکا (۱۸۴۶ تا ۱۸۴۸) آمریکا مکزیکوسیتی را گرفت و در پیمان گوادالوپه هیدالگو (۲ فوریه‌ی ۱۸۴۸) مکزیک بیش از نیمی از خاک خود، از جمله کالیفرنیا و نیومکزیکو، را از دست داد.",
            "«اصلاحات» لیبرال‌ها به رهبری بنیتو خوارس، از مردم زاپوتک و نخستین رئیس‌جمهور بومی‌تبار، قدرت کلیسا و ارتش را محدود کرد. قانون اساسی ۱۸۵۷ و جنگ اصلاحات (۱۸۵۷ تا ۱۸۶۱) به پیروزی لیبرال‌ها انجامید. فرانسه به بهانه‌ی بدهی در ۱۸۶۱ مداخله کرد و ماکسیمیلیان اتریشی را در ۱۸۶۴ امپراتور کرد. مکزیکی‌ها در نبرد پوئبلا (۵ مه ۱۸۶۲، «سینکو د مایو») فرانسوی‌ها را شکست دادند و خوارس بازگشت؛ ماکسیمیلیان در ۱۹ ژوئن ۱۸۶۷ اعدام شد."
          ],
          "en": [
            "Mexico was unstable in the first decades of independence. Antonio López de Santa Anna was president several times. American settlers in Texas rebelled in 1836 (the Alamo, the Battle of San Jacinto on 21 April) and the United States annexed Texas in 1845. In the Mexican–American War (1846 to 1848) America took Mexico City and in the Treaty of Guadalupe Hidalgo (2 February 1848) Mexico lost more than half its territory, including California and New Mexico.",
            "The liberal ‘Reform’ led by Benito Juárez, a Zapotec and the first president of Indigenous descent, limited the power of the church and the army. The constitution of 1857 and the Reform War (1857 to 1861) ended in the liberals’ victory. France intervened in 1861 on the pretext of debt and made the Austrian Maximilian emperor in 1864. The Mexicans defeated the French at the Battle of Puebla (5 May 1862, ‘Cinco de Mayo’) and Juárez returned; Maximilian was executed on 19 June 1867."
          ]
        }
      },
      {
        "id": "porfiriato-revolution",
        "title": {
          "fa": "پورفیریاتو و انقلاب مکزیک",
          "en": "The Porfiriato and the Mexican Revolution"
        },
        "text": {
          "fa": [
            "پورفیریو دیاس (۱۸۷۶ تا ۱۹۱۱، با وقفه‌ای کوتاه) با شعار «نظم و پیشرفت» حکم راند. راه‌آهن، سرمایه‌ی خارجی و صنعت رشد کرد، اما مخالفان سرکوب شدند، زمین دهقانان به مالکان بزرگ رسید و نابرابری عمیق شد. در ۱۹۱۰ فرانسیسکو مادرو، که از او خواسته بود انتخابات آزاد باشد، قیام را در ۲۰ نوامبر اعلام کرد. دیاس در مه ۱۹۱۱ استعفا داد و به پاریس رفت.",
            "انقلاب (۱۹۱۰ تا ۱۹۲۰) به جنگ داخلی چندجانبه تبدیل شد: امیلیانو ساپاتا در جنوب برای زمین («زمین و آزادی»)، پانچو ویا در شمال، و کارانسا و اوبرگون. مادرو در فوریه‌ی ۱۹۱۳ با کودتای ویکتوریانو اوئرتا ترور شد. ساپاتا در ۱۹۱۹ و ویا در ۱۹۲۳ ترور شدند. بین یک تا دو میلیون نفر کشته شدند. قانون اساسی ۵ فوریه‌ی ۱۹۱۷ ماده‌هایی درباره‌ی مالکیت ملی زمین و منابع زیرزمینی (ماده‌ی ۲۷)، حقوق کارگران (ماده‌ی ۱۲۳) و آموزش سکولار دارد و هنوز پایه‌ی نظام کشور است."
          ],
          "en": [
            "Porfirio Díaz (1876 to 1911, with a short break) ruled under the slogan ‘order and progress’. Railways, foreign capital and industry grew, but opponents were repressed, peasants’ land went to great landowners and inequality deepened. In 1910 Francisco Madero, who had demanded free elections, announced the uprising on 20 November. Díaz resigned in May 1911 and went to Paris.",
            "The revolution (1910 to 1920) turned into a many-sided civil war: Emiliano Zapata in the south for land (‘Land and Liberty’), Pancho Villa in the north, and Carranza and Obregón. Madero was assassinated in February 1913 in the coup of Victoriano Huerta. Zapata was assassinated in 1919 and Villa in 1923. Between one and two million people died. The constitution of 5 February 1917 contains articles on national ownership of land and subsoil resources (Article 27), workers’ rights (Article 123) and secular education and is still the basis of the country’s system."
          ]
        }
      },
      {
        "id": "pri-era",
        "title": {
          "fa": "حکومت حزب و دوران مدرن",
          "en": "One-party dominance and the modern era"
        },
        "text": {
          "fa": [
            "حزب انقلابی نهادی (پ‌ری‌آی، از ۱۹۲۹ با نام‌های پیشین) بیش از ۷۰ سال، تا ۲۰۰۰، رئیس‌جمهورها را برگزید. لاسارو کاردناس (۱۹۳۴ تا ۱۹۴۰) اصلاحات ارضی را گسترش داد و صنعت نفت را در ۱۸ مارس ۱۹۳۸ ملی کرد. از ۱۹۴۰ تا ۱۹۷۰ «معجزه‌ی مکزیک» رشد اقتصادی پایدار آورد. زنان در ۱۹۵۳ حق رأی سراسری گرفتند. در ۲ اکتبر ۱۹۶۸، ده روز پیش از المپیک مکزیکوسیتی، نیروهای دولتی در میدان تلاتلولکو به دانشجویان معترض آتش گشودند؛ دست‌کم ده‌ها و به برآوردهایی صدها نفر کشته شدند.",
            "زلزله‌ی ۱۹ سپتامبر ۱۹۸۵ هزاران نفر را در مکزیکوسیتی کشت. پیمان تجارت آزاد آمریکای شمالی (نفتا) در ۱ ژانویه‌ی ۱۹۹۴ آغاز شد و همان روز «ارتش آزادی‌بخش ملی زاپاتیستا» در چیاپاس قیام کرد. در ۲۰۰۰ ویسنته فوکس از حزب اقدام ملی به ریاست‌جمهوری رسید و حاکمیت پ‌ری‌آی پایان یافت. جنگ دولت با کارتل‌های مواد مخدر از ۲۰۰۶ صدها هزار کشته به همراه داشته است. در ۲۰۲۴ کلاودیا شینباوم نخستین رئیس‌جمهور زن مکزیک انتخاب شد. مکزیک با بیش از ۱۲۰ میلیون نفر پرجمعیت‌ترین کشور اسپانیایی‌زبان جهان است."
          ],
          "en": [
            "The Institutional Revolutionary Party (the PRI, under earlier names from 1929) chose the presidents for more than 70 years, until 2000. Lázaro Cárdenas (1934 to 1940) expanded land reform and nationalized the oil industry on 18 March 1938. From 1940 to 1970 the ‘Mexican miracle’ brought steady economic growth. Women gained the national vote in 1953. On 2 October 1968, ten days before the Mexico City Olympics, government forces fired on protesting students in the Tlatelolco square; at least dozens and by some estimates hundreds were killed.",
            "The earthquake of 19 September 1985 killed thousands in Mexico City. The North American Free Trade Agreement (NAFTA) began on 1 January 1994 and the same day the ‘Zapatista Army of National Liberation’ rose in Chiapas. In 2000 Vicente Fox of the National Action Party became president and the PRI’s dominance ended. The government’s war against drug cartels since 2006 has cost hundreds of thousands of lives. In 2024 Claudia Sheinbaum was elected Mexico’s first woman president. With more than 120 million people Mexico is the most populous Spanish-speaking country in the world."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -7000,
        "yearText": {
          "fa": "حدود ۷۰۰۰ تا ۵۰۰۰ پ.م.",
          "en": "about 7000 to 5000 BCE"
        },
        "title": {
          "fa": "اهلی‌شدن ذرت",
          "en": "The domestication of maize"
        },
        "text": {
          "fa": "پایه‌ی تمدن‌های مزوآمریکا.",
          "en": "The base of the Mesoamerican civilizations."
        }
      },
      {
        "year": -1200,
        "yearText": {
          "fa": "حدود ۱۲۰۰ تا ۴۰۰ پ.م.",
          "en": "about 1200 to 400 BCE"
        },
        "title": {
          "fa": "تمدن اولمک",
          "en": "The Olmec civilization"
        },
        "text": {
          "fa": "نخستین تمدن بزرگ مزوآمریکا؛ «سرهای عظیم».",
          "en": "Mesoamerica’s first great civilization; the colossal ‘heads’."
        }
      },
      {
        "year": -500,
        "title": {
          "fa": "مونته آلبان (حدود)",
          "en": "Monte Albán (about)"
        },
        "text": {
          "fa": "زاپوتک‌ها این شهر را در اوآخاکا ساختند.",
          "en": "The Zapotecs built this city in Oaxaca."
        }
      },
      {
        "year": -100,
        "yearText": {
          "fa": "حدود ۱۰۰ پ.م. تا ۵۵۰ م.",
          "en": "about 100 BCE to 550 CE"
        },
        "title": {
          "fa": "تئوتیواکان",
          "en": "Teotihuacan"
        },
        "text": {
          "fa": "یکی از بزرگ‌ترین شهرهای جهان.",
          "en": "One of the largest cities in the world."
        }
      },
      {
        "year": 250,
        "yearText": {
          "fa": "حدود ۲۵۰ تا ۹۰۰",
          "en": "about 250 to 900"
        },
        "title": {
          "fa": "دوره‌ی کلاسیک مایا",
          "en": "The Classic Maya period"
        },
        "text": {
          "fa": "شهرهای پالنکه، تیکال و دیگر مراکز.",
          "en": "The cities of Palenque, Tikal and other centres."
        }
      },
      {
        "year": 900,
        "title": {
          "fa": "افول شهرهای مایای جنوبی (حدود)",
          "en": "The decline of the southern Maya cities (about)"
        },
        "text": {
          "fa": "بسیاری از شهرها رها شدند.",
          "en": "Many of the cities were abandoned."
        }
      },
      {
        "year": 1325,
        "title": {
          "fa": "بنیان تنوچتیتلان (بنا بر سنت)",
          "en": "The founding of Tenochtitlan (according to tradition)"
        },
        "text": {
          "fa": "پایتخت آزتک‌ها بر جزیره‌ای در دریاچه‌ی تکسکوکو.",
          "en": "The Aztec capital on an island in Lake Texcoco."
        }
      },
      {
        "year": 1428,
        "title": {
          "fa": "اتحاد سه‌گانه",
          "en": "The Triple Alliance"
        },
        "text": {
          "fa": "آغاز امپراتوری آزتک.",
          "en": "The start of the Aztec Empire."
        }
      },
      {
        "year": 1502,
        "title": {
          "fa": "موکتزوما دوم",
          "en": "Moctezuma II"
        },
        "text": {
          "fa": "تا ۱۵۲۰ بر امپراتوری حکم راند.",
          "en": "He ruled the empire until 1520."
        }
      },
      {
        "year": 1519,
        "title": {
          "fa": "ورود کورتس",
          "en": "The arrival of Cortés"
        },
        "text": {
          "fa": "کورتس در وراکروز پیاده شد.",
          "en": "Cortés landed at Veracruz."
        }
      },
      {
        "year": 1520,
        "title": {
          "fa": "شب اندوه",
          "en": "The Noche Triste"
        },
        "text": {
          "fa": "اسپانیایی‌ها با تلفات سنگین از تنوچتیتلان گریختند.",
          "en": "The Spanish fled Tenochtitlan with heavy losses."
        }
      },
      {
        "year": 1521,
        "title": {
          "fa": "سقوط تنوچتیتلان",
          "en": "The fall of Tenochtitlan"
        },
        "text": {
          "fa": "در ۱۳ اوت شهر پس از محاصره سقوط کرد.",
          "en": "On 13 August the city fell after a siege."
        }
      },
      {
        "year": 1535,
        "title": {
          "fa": "نایب‌السلطنه‌ی نیواسپین",
          "en": "The viceroyalty of New Spain"
        },
        "text": {
          "fa": "آنتونیو د مندوزا نخستین نایب‌السلطنه شد.",
          "en": "Antonio de Mendoza became the first viceroy."
        }
      },
      {
        "year": 1546,
        "title": {
          "fa": "نقره‌ی زاکاتکاس",
          "en": "The silver of Zacatecas"
        },
        "text": {
          "fa": "ثروت عظیم نقره‌ی مکزیک آغاز شد.",
          "en": "Mexico’s great silver wealth began."
        }
      },
      {
        "year": 1551,
        "title": {
          "fa": "دانشگاه مکزیکوسیتی",
          "en": "The University of Mexico"
        },
        "text": {
          "fa": "یکی از نخستین دانشگاه‌های قاره‌ی آمریکا.",
          "en": "One of the first universities in the Americas."
        }
      },
      {
        "year": 1565,
        "title": {
          "fa": "گالئون مانیل",
          "en": "The Manila galleon"
        },
        "text": {
          "fa": "مسیر دریایی آکاپولکو به فیلیپین آغاز شد.",
          "en": "The sea route from Acapulco to the Philippines began."
        }
      },
      {
        "year": 1810,
        "title": {
          "fa": "فریاد دولورس",
          "en": "The Grito de Dolores"
        },
        "text": {
          "fa": "در ۱۶ سپتامبر هیدالگو مردم را به قیام فراخواند.",
          "en": "On 16 September Hidalgo called the people to rise."
        }
      },
      {
        "year": 1811,
        "title": {
          "fa": "اعدام هیدالگو",
          "en": "The execution of Hidalgo"
        },
        "text": {
          "fa": "مورلوس رهبری قیام را گرفت.",
          "en": "Morelos took over the leadership of the revolt."
        }
      },
      {
        "year": 1815,
        "title": {
          "fa": "اعدام مورلوس",
          "en": "The execution of Morelos"
        },
        "text": {
          "fa": "رهبر دوم قیام استقلال اعدام شد.",
          "en": "The second leader of the independence revolt was executed."
        }
      },
      {
        "year": 1821,
        "title": {
          "fa": "استقلال مکزیک",
          "en": "Mexican independence"
        },
        "text": {
          "fa": "در ۲۷ سپتامبر استقلال تحقق یافت.",
          "en": "Independence came on 27 September."
        }
      },
      {
        "year": 1822,
        "title": {
          "fa": "نخستین امپراتوری مکزیک",
          "en": "The First Mexican Empire"
        },
        "text": {
          "fa": "ایتوربیده امپراتور شد؛ در ۱۸۲۳ برکنار شد.",
          "en": "Iturbide became emperor; he was removed in 1823."
        }
      },
      {
        "year": 1824,
        "title": {
          "fa": "جمهوری فدرال",
          "en": "The federal republic"
        },
        "text": {
          "fa": "قانون اساسی ۱۸۲۴؛ ویکتوریا نخستین رئیس‌جمهور.",
          "en": "The constitution of 1824; Victoria the first president."
        }
      },
      {
        "year": 1836,
        "title": {
          "fa": "استقلال تگزاس",
          "en": "Texas independence"
        },
        "text": {
          "fa": "آلامو و نبرد سن‌خاسینتو (۲۱ آوریل).",
          "en": "The Alamo and the Battle of San Jacinto (21 April)."
        }
      },
      {
        "year": 1846,
        "yearText": {
          "fa": "۱۸۴۶ تا ۱۸۴۸",
          "en": "1846 to 1848"
        },
        "title": {
          "fa": "جنگ مکزیک و آمریکا",
          "en": "The Mexican–American War"
        },
        "text": {
          "fa": "مکزیک بیش از نیمی از خاک خود را از دست داد.",
          "en": "Mexico lost more than half of its territory."
        }
      },
      {
        "year": 1848,
        "title": {
          "fa": "پیمان گوادالوپه هیدالگو",
          "en": "The Treaty of Guadalupe Hidalgo"
        },
        "text": {
          "fa": "در ۲ فوریه کالیفرنیا و نیومکزیکو به آمریکا رسید.",
          "en": "On 2 February California and New Mexico passed to America."
        }
      },
      {
        "year": 1854,
        "title": {
          "fa": "انقلاب آیوتلا",
          "en": "The Ayutla Revolution"
        },
        "text": {
          "fa": "سانتا آنا برکنار شد و اصلاحات لیبرال‌ها آغاز شد.",
          "en": "Santa Anna was removed and the liberals’ Reform began."
        }
      },
      {
        "year": 1857,
        "title": {
          "fa": "قانون اساسی ۱۸۵۷",
          "en": "The constitution of 1857"
        },
        "text": {
          "fa": "جنگ اصلاحات (۱۸۵۷ تا ۱۸۶۱) در پی آن آمد.",
          "en": "The Reform War (1857 to 1861) followed."
        }
      },
      {
        "year": 1862,
        "title": {
          "fa": "نبرد پوئبلا",
          "en": "The Battle of Puebla"
        },
        "text": {
          "fa": "در ۵ مه («سینکو د مایو») مکزیکی‌ها فرانسوی‌ها را شکست دادند.",
          "en": "On 5 May (‘Cinco de Mayo’) the Mexicans defeated the French."
        }
      },
      {
        "year": 1864,
        "title": {
          "fa": "امپراتوری ماکسیمیلیان",
          "en": "Maximilian’s empire"
        },
        "text": {
          "fa": "فرانسه ماکسیمیلیان اتریشی را امپراتور کرد.",
          "en": "France made the Austrian Maximilian emperor."
        }
      },
      {
        "year": 1867,
        "title": {
          "fa": "اعدام ماکسیمیلیان",
          "en": "The execution of Maximilian"
        },
        "text": {
          "fa": "در ۱۹ ژوئن جمهوری بازگشت.",
          "en": "On 19 June the republic returned."
        }
      },
      {
        "year": 1876,
        "title": {
          "fa": "آغاز پورفیریاتو",
          "en": "The start of the Porfiriato"
        },
        "text": {
          "fa": "پورفیریو دیاس قدرت را گرفت.",
          "en": "Porfirio Díaz took power."
        }
      },
      {
        "year": 1910,
        "title": {
          "fa": "آغاز انقلاب مکزیک",
          "en": "The start of the Mexican Revolution"
        },
        "text": {
          "fa": "مادرو قیام را در ۲۰ نوامبر اعلام کرد.",
          "en": "Madero announced the uprising on 20 November."
        }
      },
      {
        "year": 1911,
        "title": {
          "fa": "استعفای دیاس",
          "en": "Díaz resigns"
        },
        "text": {
          "fa": "مادرو رئیس‌جمهور شد.",
          "en": "Madero became president."
        }
      },
      {
        "year": 1913,
        "title": {
          "fa": "ترور مادرو",
          "en": "The assassination of Madero"
        },
        "text": {
          "fa": "در ۲۲ فوریه در کودتای اوئرتا ترور شد.",
          "en": "On 22 February he was assassinated in Huerta’s coup."
        }
      },
      {
        "year": 1917,
        "title": {
          "fa": "قانون اساسی ۱۹۱۷",
          "en": "The constitution of 1917"
        },
        "text": {
          "fa": "در ۵ فوریه تصویب شد؛ هنوز پایه‌ی نظام کشور است.",
          "en": "Approved on 5 February; it is still the basis of the country’s system."
        }
      },
      {
        "year": 1919,
        "title": {
          "fa": "ترور ساپاتا",
          "en": "The assassination of Zapata"
        },
        "text": {
          "fa": "در ۱۰ آوریل ساپاتا ترور شد.",
          "en": "On 10 April Zapata was assassinated."
        }
      },
      {
        "year": 1929,
        "title": {
          "fa": "تأسیس حزب حاکم",
          "en": "Founding of the ruling party"
        },
        "text": {
          "fa": "حزب که بعدها پ‌ری‌آی نام گرفت تا ۲۰۰۰ حکم راند.",
          "en": "The party, later called the PRI, ruled until 2000."
        }
      },
      {
        "year": 1938,
        "title": {
          "fa": "ملی‌شدن نفت",
          "en": "The nationalization of oil"
        },
        "text": {
          "fa": "کاردناس در ۱۸ مارس صنعت نفت را ملی کرد.",
          "en": "Cárdenas nationalized the oil industry on 18 March."
        }
      },
      {
        "year": 1953,
        "title": {
          "fa": "حق رأی سراسری زنان",
          "en": "National votes for women"
        },
        "text": {
          "fa": "زنان در انتخابات سراسری رأی دادند.",
          "en": "Women voted in national elections."
        }
      },
      {
        "year": 1968,
        "title": {
          "fa": "کشتار تلاتلولکو",
          "en": "The Tlatelolco massacre"
        },
        "text": {
          "fa": "در ۲ اکتبر به دانشجویان معترض آتش گشوده شد؛ المپیک ده روز بعد آغاز شد.",
          "en": "On 2 October protesting students were fired on; the Olympics began ten days later."
        }
      },
      {
        "year": 1985,
        "title": {
          "fa": "زلزله‌ی مکزیکوسیتی",
          "en": "The Mexico City earthquake"
        },
        "text": {
          "fa": "در ۱۹ سپتامبر هزاران نفر کشته شدند.",
          "en": "On 19 September thousands were killed."
        }
      },
      {
        "year": 1994,
        "title": {
          "fa": "نفتا و قیام زاپاتیستاها",
          "en": "NAFTA and the Zapatista uprising"
        },
        "text": {
          "fa": "هر دو در ۱ ژانویه آغاز شد.",
          "en": "Both began on 1 January."
        }
      },
      {
        "year": 2000,
        "title": {
          "fa": "پایان حاکمیت پ‌ری‌آی",
          "en": "The end of PRI rule"
        },
        "text": {
          "fa": "ویسنته فوکس رئیس‌جمهور شد.",
          "en": "Vicente Fox became president."
        }
      },
      {
        "year": 2006,
        "title": {
          "fa": "آغاز جنگ با کارتل‌ها",
          "en": "The start of the war on the cartels"
        },
        "text": {
          "fa": "از آن زمان صدها هزار نفر کشته شده‌اند.",
          "en": "Hundreds of thousands have been killed since."
        }
      },
      {
        "year": 2018,
        "title": {
          "fa": "انتخاب لوپس اوبرادور",
          "en": "The election of López Obrador"
        },
        "text": {
          "fa": "در ۱ ژوئیه انتخاب شد.",
          "en": "Elected on 1 July."
        }
      },
      {
        "year": 2020,
        "title": {
          "fa": "پیمان یو.اس.ام.سی.ای",
          "en": "The USMCA treaty"
        },
        "text": {
          "fa": "جایگزین نفتا شد.",
          "en": "It replaced NAFTA."
        }
      },
      {
        "year": 2024,
        "title": {
          "fa": "نخستین رئیس‌جمهور زن",
          "en": "The first woman president"
        },
        "text": {
          "fa": "کلاودیا شینباوم انتخاب شد و در ۱ اکتبر سوگند یاد کرد.",
          "en": "Claudia Sheinbaum was elected and took office on 1 October."
        }
      }
    ]
  }
};
