import { CountrySection, TimelineEvent } from '../../../types';

/** Batch 08: full histories (sections + timeline). */
export interface DetailedHistory08 {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const BATCH_08_HISTORIES: Record<string, DetailedHistory08> = {
  "argentina": {
    "sections": [
      {
        "id": "first-peoples",
        "title": {
          "fa": "نخستین مردمان",
          "en": "The first peoples"
        },
        "text": {
          "fa": [
            "نخستین انسان‌ها دست‌کم حدود ۱۳ هزار سال پیش به سرزمین آرژانتین امروزی رسیدند. «غار دست‌ها» (کوئوا د لاس مانوس) در پاتاگونیا، با هزاران نقش دست و جانور بر دیواره‌ی غار که قدمتشان حدود ۹ تا ۱۳ هزار سال برآورد می‌شود، از کهن‌ترین نمونه‌های هنر در آمریکای جنوبی است و در فهرست میراث جهانی یونسکو است.",
            "پیش از آمدن اروپایی‌ها مردمان گوناگونی در این سرزمین می‌زیستند: دیاگیتاها در شمال‌غرب که کشاورز بودند و از قرن پانزدهم زیر نفوذ امپراتوری اینکا قرار گرفتند، گوارانی‌ها در شمال‌شرق، و شکارچیان کوچ‌نشین مانند تهوئلچه‌ها در پاتاگونیا و پامپاها. مردمان ماپوچه که بیشترشان از آن سوی آند، در شیلی، می‌آمدند، از قرن هفدهم تا نوزدهم در پامپا و پاتاگونیا گسترش یافتند."
          ],
          "en": [
            "The first humans reached the land of today’s Argentina at least about 13,000 years ago. The ‘Cave of the Hands’ (Cueva de las Manos) in Patagonia, with thousands of hand and animal images on its walls, estimated at about 9,000 to 13,000 years old, is among the oldest examples of art in South America and a UNESCO World Heritage Site.",
            "Before the Europeans came, various peoples lived in this land: the Diaguita in the north-west, who were farmers and from the fifteenth century came under the influence of the Inca Empire, the Guaraní in the north-east, and nomadic hunters such as the Tehuelche in Patagonia and the pampas. The Mapuche, who mostly came from across the Andes in Chile, spread into the pampas and Patagonia from the seventeenth to the nineteenth century."
          ]
        }
      },
      {
        "id": "spanish-colony",
        "title": {
          "fa": "استعمار اسپانیا و نایب‌السلطنه‌ی ریو د لا پلاتا",
          "en": "Spanish rule and the Viceroyalty of the Río de la Plata"
        },
        "text": {
          "fa": [
            "خوان دیاس د سولیس، دریانورد اسپانیایی، در ۱۵۱۶ به رود ریو د لا پلاتا رسید و در همان‌جا کشته شد. پدرو د مندوزا در ۱۵۳۶ نخستین بار بوئنوس آیرس را بنیان گذاشت، اما حمله‌ی بومیان و قحطی شهر را در ۱۵۴۱ به رها شدن کشاند؛ خوان د گاری در ۱۵۸۰ آن را بازسازی کرد. بیشتر شهرهای نخست آرژانتین (توکومان ۱۵۶۵، کوردوبا ۱۵۷۳، سالتا ۱۵۸۲) را مهاجمان از پرو و شیلی در شمال و غرب بنا کردند. تا قرن هجدهم این منطقه برای اسپانیا حاشیه‌ای کم‌اهمیت‌تر از معادن نقره‌ی پرو بود.",
            "در ۱۷۷۶ اسپانیا «نایب‌السلطنه‌ی ریو د لا پلاتا» را با پایتخت بوئنوس آیرس ساخت؛ قلمرویی که آرژانتین، اروگوئه، پاراگوئه و بولیوی امروزی را دربر می‌گرفت. بوئنوس آیرس با تجارت چرم و قاچاق ثروتمند شد. جامعه از اسپانیایی‌ها، کریولوها (متولدان آمریکا)، بومیان، آفریقایی‌تباران برده و مستیزوها (آمیخته) تشکیل می‌شد. در ۱۸۰۶ و ۱۸۰۷ بریتانیا دو بار به بوئنوس آیرس حمله کرد و مردم شهر، بدون کمک اسپانیا، آن را شکست دادند؛ این پیروزی به مردم اعتماد به نفس سیاسی داد."
          ],
          "en": [
            "Juan Díaz de Solís, a Spanish navigator, reached the Río de la Plata in 1516 and was killed there. Pedro de Mendoza first founded Buenos Aires in 1536, but attacks by native peoples and famine led to its abandonment in 1541; Juan de Garay refounded it in 1580. Most of Argentina’s first cities (Tucumán 1565, Córdoba 1573, Salta 1582) were founded by settlers from Peru and Chile in the north and west. Until the eighteenth century this region was for Spain a less important periphery than the silver mines of Peru.",
            "In 1776 Spain created the ‘Viceroyalty of the Río de la Plata’ with its capital at Buenos Aires, a realm that included today’s Argentina, Uruguay, Paraguay and Bolivia. Buenos Aires grew rich from the hide trade and smuggling. Society consisted of Spaniards, criollos (people born in America), Indigenous people, enslaved people of African descent and mestizos (mixed). In 1806 and 1807 Britain attacked Buenos Aires twice and the people of the city, without Spanish help, defeated it; this victory gave the people political self-confidence."
          ]
        }
      },
      {
        "id": "independence",
        "title": {
          "fa": "انقلاب مه و جنگ استقلال",
          "en": "The May Revolution and the War of Independence"
        },
        "text": {
          "fa": [
            "وقتی ناپلئون در ۱۸۰۸ اسپانیا را گرفت و پادشاه را برکنار کرد، اعتبار حکومت اسپانیا در مستعمره‌ها از میان رفت. در «هفته‌ی مه» (۱۸ تا ۲۵ مه ۱۸۱۰) مردم بوئنوس آیرس نایب‌السلطنه را برکنار کردند و در ۲۵ مه «نخستین هیئت حاکمه» را به رهبری کسانی مانند ماریانو مورنو شکل دادند؛ این «انقلاب مه» آغاز استقلال شد. نخستین هیئت به نام پادشاه اسپانیا حکم می‌کرد، اما در عمل خودگردان بود. مانوئل بلگرانو در ۲۷ فوریه‌ی ۱۸۱۲ پرچم آسمانی-سفید را ساخت.",
            "در ۹ ژوئیه‌ی ۱۸۱۶ کنگره‌ی توکومان رسماً استقلال «استان‌های متحد آمریکای جنوبی» را اعلام کرد. خوزه د سن مارتین، ژنرالی که در ارتش اسپانیا خدمت کرده بود، «ارتش آند» را ساخت و در ژانویه و فوریه‌ی ۱۸۱۷ با گذر از آند به شیلی رفت؛ پیروزی‌های چاکابوکو (۱۲ فوریه‌ی ۱۸۱۷) و مایپو (۵ آوریل ۱۸۱۸) شیلی را آزاد کرد و سپس به پرو رفت؛ استقلال پرو را در ۲۸ ژوئیه‌ی ۱۸۲۱ در لیما اعلام کرد. او پس از دیدار با سیمون بولیوار در گوایاکیل (۱۸۲۲) کناره گرفت و در ۱۸۵۰ در فرانسه درگذشت."
          ],
          "en": [
            "When Napoleon took Spain in 1808 and removed the king, the authority of the Spanish government in the colonies dissolved. In the ‘May Week’ (18 to 25 May 1810) the people of Buenos Aires removed the viceroy and on 25 May formed the ‘First Junta’ under people such as Mariano Moreno; this ‘May Revolution’ was the start of independence. The First Junta ruled in the name of the Spanish king but in practice was self-governing. Manuel Belgrano created the sky-blue and white flag on 27 February 1812.",
            "On 9 July 1816 the Congress of Tucumán formally declared the independence of the ‘United Provinces of South America’. José de San Martín, a general who had served in the Spanish army, built the ‘Army of the Andes’ and in January and February 1817 crossed the Andes to Chile; the victories of Chacabuco (12 February 1817) and Maipú (5 April 1818) freed Chile and he then went to Peru, whose independence he proclaimed in Lima on 28 July 1821. After meeting Simón Bolívar at Guayaquil (1822) he stepped aside and died in France in 1850."
          ]
        }
      },
      {
        "id": "civil-wars-rosas",
        "title": {
          "fa": "جنگ‌های داخلی و دوران روساس",
          "en": "The civil wars and the age of Rosas"
        },
        "text": {
          "fa": [
            "پس از استقلال، کشور دهه‌ها درگیر جنگ میان «یونیتاریوها» (که حکومت متمرکز و پایتخت بوئنوس آیرس را می‌خواستند) و «فدرالیست‌ها» (که برای استان‌ها خودمختاری می‌خواستند) بود. در جنگ با برزیل (۱۸۲۵ تا ۱۸۲۸) بر سر «ناحیه‌ی شرقی» وساطت بریتانیا به استقلال اروگوئه (۱۸۲۸) انجامید.",
            "خوان مانوئل د روساس، فدرالیست و مالک بزرگ، از ۱۸۲۹ تا ۱۸۳۲ و دوباره از ۱۸۳۵ تا ۱۸۵۲ فرماندار بوئنوس آیرس و عملاً مهم‌ترین رهبر کشور بود. حکومت او با قدرت مطلق، سرکوب مخالفان و گروه خشن «ماسورکا» همراه بود. در برابر محاصره‌ی دریایی فرانسه (۱۸۳۸ تا ۱۸۴۰) و بریتانیا و فرانسه (۱۸۴۵ تا ۱۸۵۰؛ نبرد وولتا د اوبلیگادو، ۲۰ نوامبر ۱۸۴۵) از حاکمیت کشور دفاع کرد؛ از همین‌رو برخی او را مدافع حاکمیت و برخی دیکتاتور می‌دانند. در نبرد کاسروس (۳ فوریه‌ی ۱۸۵۲) به‌دست خوستو خوسه د اورکیسا شکست خورد و به انگلستان رفت."
          ],
          "en": [
            "After independence the country was embroiled for decades in war between the ‘Unitarians’ (who wanted a centralized government and Buenos Aires as capital) and the ‘Federalists’ (who wanted autonomy for the provinces). In the war with Brazil (1825 to 1828) over the ‘Eastern Province’, British mediation led to the independence of Uruguay (1828).",
            "Juan Manuel de Rosas, a Federalist and a great landowner, was governor of Buenos Aires from 1829 to 1832 and again from 1835 to 1852 and in practice the most important leader of the country. His rule came with absolute power, repression of opponents and the violent ‘Mazorca’ group. He defended the country’s sovereignty against the French naval blockade (1838 to 1840) and Britain and France (1845 to 1850; the Battle of Vuelta de Obligado, 20 November 1845); for this reason some regard him as a defender of sovereignty and others as a dictator. At the Battle of Caseros (3 February 1852) he was defeated by Justo José de Urquiza and went to England."
          ]
        }
      },
      {
        "id": "constitution-nation",
        "title": {
          "fa": "قانون اساسی ۱۸۵۳ و ساخت کشور",
          "en": "The constitution of 1853 and nation-building"
        },
        "text": {
          "fa": [
            "قانون اساسی ۱ مه ۱۸۵۳ آرژانتین را جمهوری فدرال کرد و قانون اساسی ایالات متحده را الگو گرفت؛ همچنین برده‌داری را لغو کرد. بوئنوس آیرس از ۱۸۵۲ تا ۱۸۶۱ بیشتر از کنفدراسیون جدا بود و پس از نبرد پاوون (۱۸۶۱) به کشور پیوست. بارتولومه میتره (۱۸۶۲ تا ۱۸۶۸) نخستین رئیس‌جمهور کشور یکپارچه بود. دومینگو سارمیینتو (۱۸۶۸ تا ۱۸۷۴) مدارس همگانی را گسترش داد و روز معلم (۱۱ سپتامبر) به یاد درگذشت او است. جنگ سه‌گانه‌ی اتحاد (۱۸۶۵ تا ۱۸۷۰) علیه پاراگوئه را آرژانتین، برزیل و اروگوئه با هم پیش بردند و پاراگوئه ویران شد.",
            "ژنرال خولیو آرخنتینو روکا، رئیس‌جمهور ۱۸۸۰ تا ۱۸۸۶ و ۱۸۹۸ تا ۱۹۰۴، «فتح بیابان» (۱۸۷۸ تا ۱۸۸۵) را رهبری کرد: لشکرکشی‌ای که ده‌ها هزار کیلومتر مربع از پامپا و پاتاگونیا را از مردمان بومی، ماپوچه، تهوئلچه و دیگران، گرفت. هزاران بومی کشته یا آواره شدند و زمین‌ها میان مالکان بزرگ تقسیم شد. بسیاری از مورخان و سازمان‌های بومی آن را نسل‌کشی می‌نامند؛ در آرژانتین درباره‌ی آن بحث ادامه دارد. در ۱۸۸۰ بوئنوس آیرس پایتخت فدرال شد."
          ],
          "en": [
            "The constitution of 1 May 1853 made Argentina a federal republic and took the United States constitution as a model; it also abolished slavery. Buenos Aires was mostly separate from the Confederation from 1852 to 1861 and joined the country after the Battle of Pavón (1861). Bartolomé Mitre (1862 to 1868) was the first president of the united country. Domingo Sarmiento (1868 to 1874) expanded public schools, and Teacher’s Day (11 September) commemorates his death. The War of the Triple Alliance (1865 to 1870) against Paraguay was fought by Argentina, Brazil and Uruguay together and Paraguay was devastated.",
            "General Julio Argentino Roca, president from 1880 to 1886 and from 1898 to 1904, led the ‘Conquest of the Desert’ (1878 to 1885): a campaign that took tens of thousands of square kilometres of the pampas and Patagonia from Indigenous peoples, the Mapuche, Tehuelche and others. Thousands of Indigenous people were killed or displaced and the land was divided among great landowners. Many historians and Indigenous organizations call it genocide; in Argentina the debate continues. In 1880 Buenos Aires became the federal capital."
          ]
        }
      },
      {
        "id": "export-boom",
        "title": {
          "fa": "رونق صادرات و مهاجرت بزرگ",
          "en": "The export boom and mass immigration"
        },
        "text": {
          "fa": [
            "از ۱۸۸۰ تا ۱۹۱۴ آرژانتین با صادرات گندم، گوشت و پشم و با سرمایه‌ی بریتانیایی (راه‌آهن، بندرها) به یکی از ثروتمندترین کشورهای جهان از نظر درآمد سرانه تبدیل شد. بوئنوس آیرس به شهری بزرگ با کاخ‌ها و تئاترها، به‌ویژه «تئاتر کولون» (۱۹۰۸)، بدل شد. بیش از شش میلیون مهاجر، به‌ویژه ایتالیایی و اسپانیایی، از ۱۸۵۰ تا دهه‌ی ۱۹۵۰ به آرژانتین آمدند و جمعیت کشور و فرهنگش را دگرگون کردند؛ تانگو در پایان قرن نوزدهم در محله‌های مهاجرنشین بوئنوس آیرس و مونته‌ویدئو زاده شد.",
            "«اتحادیه‌ی شهروندی رادیکال» که از ۱۸۹۱ برای اصلاحات سیاسی مبارزه می‌کرد، پس از قانون سائنس پنیا (۱۹۱۲) که رأی مخفی و اجباری برای مردان را برقرار کرد، قدرت گرفت و هیپولیتو ایریگوین در ۱۹۱۶ رئیس‌جمهور شد. در «هفته‌ی تراژیک» (ژانویه‌ی ۱۹۱۹) اعتصاب کارگران سرکوب شد و در پاتاگونیا (۱۹۲۰ تا ۱۹۲۱) ارتش اعتصاب کارگران را با کشتار صدها و بنا بر برخی منابع حدود ۱۵۰۰ نفر پایان داد. در ۶ سپتامبر ۱۹۳۰ ارتش در نخستین کودتای قرن بیستم ایریگوین را برکنار کرد؛ آغاز «دهه‌ی بدنام» (۱۹۳۰ تا ۱۹۴۳)."
          ],
          "en": [
            "From 1880 to 1914 Argentina, with exports of wheat, beef and wool and with British capital (railways, ports), became one of the richest countries in the world by income per person. Buenos Aires became a great city with palaces and theatres, above all the ‘Teatro Colón’ (1908). More than six million immigrants, above all Italians and Spaniards, came to Argentina from 1850 to the 1950s and transformed the country’s population and culture; tango was born in the late nineteenth century in the immigrant quarters of Buenos Aires and Montevideo.",
            "The ‘Radical Civic Union’, which had campaigned for political reform since 1891, gained strength after the Sáenz Peña law (1912), which established secret and compulsory voting for men, and Hipólito Yrigoyen became president in 1916. In the ‘Tragic Week’ (January 1919) a workers’ strike was suppressed and in Patagonia (1920 to 1921) the army ended workers’ strikes with the killing of hundreds and by some accounts about 1,500 people. On 6 September 1930 the army removed Yrigoyen in the first coup of the twentieth century; the start of the ‘Infamous Decade’ (1930 to 1943)."
          ]
        }
      },
      {
        "id": "peron-era",
        "title": {
          "fa": "دوران پرون",
          "en": "The Perón era"
        },
        "text": {
          "fa": [
            "در ۴ ژوئن ۱۹۴۳ ارتش دولت را برانداخت. سرهنگ خوان دومینگو پرون، دبیر کار و بعد معاون رئیس‌جمهور، با حمایت از اتحادیه‌های کارگری پایگاه توده‌ای ساخت. وقتی در اکتبر ۱۹۴۵ بازداشت شد، در ۱۷ اکتبر صدها هزار کارگر به میدان ماه (پلازا د مایو) آمدند و او را آزاد کردند؛ این روز بنیان «پرونیسم» است. پرون در فوریه‌ی ۱۹۴۶ با رأی آزاد رئیس‌جمهور شد.",
            "دولت او دستمزدها را بالا برد، صنایع و راه‌آهن را ملی کرد و مزایای اجتماعی گسترده آورد. همسرش اوا دوآرته («اویتا») از طریق بنیاد اوا پرون به فقرا کمک می‌کرد و برای حق رأی زنان مبارزه کرد؛ قانون رأی زنان در ۱۹۴۷ تصویب شد و زنان نخستین بار در ۱۹۵۱ رأی دادند. اوا در ۲۶ ژوئیه‌ی ۱۹۵۲ در سی‌وسه‌سالگی درگذشت. اما حکومت پرون سانسور، سرکوب مخالفان و فرقه‌ی شخصیت هم داشت. در ۱۶ ژوئن ۱۹۵۵ هواپیماهای نیروی دریایی میدان ماه را بمباران کردند و صدها غیرنظامی کشته شدند، و در سپتامبر ۱۹۵۵ کودتا پرون را برکنار کرد؛ او به تبعید رفت."
          ],
          "en": [
            "On 4 June 1943 the army overthrew the government. Colonel Juan Domingo Perón, secretary of labour and then vice-president, built a mass base by supporting the labour unions. When he was arrested in October 1945, on 17 October hundreds of thousands of workers came to the Plaza de Mayo and freed him; this day is the foundation of ‘Peronism’. Perón became president in February 1946 in a free election.",
            "His government raised wages, nationalized industries and railways and brought broad social benefits. His wife Eva Duarte (‘Evita’) helped the poor through the Eva Perón Foundation and campaigned for women’s suffrage; the women’s suffrage law was passed in 1947 and women voted for the first time in 1951. Eva died on 26 July 1952 at the age of thirty-three. But Perón’s rule also had censorship, repression of opponents and a cult of personality. On 16 June 1955 navy aircraft bombed the Plaza de Mayo and hundreds of civilians were killed, and in September 1955 a coup removed Perón; he went into exile."
          ]
        }
      },
      {
        "id": "instability-violence",
        "title": {
          "fa": "ناپایداری و خشونت (۱۹۵۵ تا ۱۹۷۶)",
          "en": "Instability and violence (1955 to 1976)"
        },
        "text": {
          "fa": [
            "از ۱۹۵۵ تا ۱۹۷۳ پرونیسم ممنوع بود و کشور میان دولت‌های غیرنظامی ضعیف و کودتاها (۱۹۶۲، ۱۹۶۶) می‌چرخید. ژنرال خوان کارلوس اونگانیا از ۱۹۶۶ حکومت نظامی را برقرار کرد. «کوردوبازو» (مه ۱۹۶۹)، قیام مشترک کارگران و دانشجویان در کوردوبا، حکومت را تضعیف کرد. چریک‌های چپ (مونتونروس و ای‌آر‌پی) و گروه‌های راست‌گرا درگیری مسلحانه آغاز کردند.",
            "در مارس ۱۹۷۳ هکتور کامپورا، نامزد پرونیست‌ها، پیروز شد و پرون پس از ۱۸ سال تبعید در ۲۰ ژوئن ۱۹۷۳ بازگشت؛ فرود او با درگیری خونین میان جناح چپ و راست پرونیست‌ها در اِسیسا همراه شد. پرون در اکتبر ۱۹۷۳ با حدود ۶۲ درصد رأی رئیس‌جمهور شد و در ۱ ژوئیه‌ی ۱۹۷۴ درگذشت. همسر سومش ایزابل، که معاون او بود، جانشین شد. در این دوران گروه شبه‌نظامی راست‌گرای «ای‌اِی‌اِی» (آلیانزا آنتی‌کمونیستا آرخنتینا) صدها نفر را ترور کرد و کشور در هرج‌ومرج و تورم فرو رفت."
          ],
          "en": [
            "From 1955 to 1973 Peronism was banned and the country oscillated between weak civilian governments and coups (1962, 1966). General Juan Carlos Onganía established military rule from 1966. The ‘Cordobazo’ (May 1969), a joint uprising of workers and students in Córdoba, weakened the regime. Left-wing guerrillas (the Montoneros and the ERP) and right-wing groups began armed conflict.",
            "In March 1973 Héctor Cámpora, the Peronists’ candidate, won and Perón returned after 18 years in exile on 20 June 1973; his arrival was accompanied by bloody fighting between the left and right wings of the Peronists at Ezeiza. Perón became president in October 1973 with about 62 percent of the vote and died on 1 July 1974. His third wife Isabel, who was his vice-president, succeeded him. In this period the right-wing paramilitary group the ‘Triple A’ (Argentine Anticommunist Alliance) assassinated hundreds of people and the country sank into chaos and inflation."
          ]
        }
      },
      {
        "id": "dictatorship",
        "title": {
          "fa": "دیکتاتوری نظامی (۱۹۷۶ تا ۱۹۸۳)",
          "en": "The military dictatorship (1976 to 1983)"
        },
        "text": {
          "fa": [
            "در ۲۴ مارس ۱۹۷۶ هیئتی نظامی به رهبری ژنرال خورخه رافائل ویدلا ایزابل پرون را برکنار کرد و «فرایند بازسازمان‌دهی ملی» را آغاز کرد. این رژیم با «جنگ کثیف» علیه چریک‌ها و هر مخالف سیاسی، از جمله کارگران، دانشجویان، روزنامه‌نگاران و کشیشان، ترور دولتی را به کار برد: ربایش، شکنجه در بیش از ۳۰۰ بازداشتگاه مخفی (که کمیسیون ملی ناپدیدشدگان ۳۴۰ مورد را شناسایی کرد)، و ناپدیدکردن مخالفان («ناپدیدشدگان»). کمیسیون ملی ناپدیدشدگان (کوناکدپ) در ۱۹۸۴ حدود ۸۹۶۰ مورد را مستند کرد و سازمان‌های حقوق بشر شمار قربانیان را حدود ۳۰ هزار نفر می‌دانند. صدها نوزاد از مادران بازداشت‌شده ربوده و به خانواده‌های نظامی سپرده شدند.",
            "«مادران میدان ماه» از ۳۰ آوریل ۱۹۷۷ هر پنجشنبه با روسری‌های سفید در میدان ماه برای یافتن فرزندانشان راهپیمایی می‌کردند و به نماد مقاومت بدل شدند. آرژانتین در ۱۹۷۸ میزبان جام جهانی را برد و دیکتاتوری از آن بهره‌ی تبلیغاتی برد. اقتصاد به بحران بدهی افتاد. ژنرال لئوپولدو گالتیری در ۲ آوریل ۱۹۸۲ برای جلب حمایت مردم به جزایر فالکلند (مالویناس) حمله کرد؛ جنگ ۷۴ روزه با تسلیم آرژانتین در ۱۴ ژوئن پایان یافت: ۶۴۹ آرژانتینی، ۲۵۵ بریتانیایی و سه ساکن جزایر کشته شدند. این شکست حکومت نظامی را فروپاشاند."
          ],
          "en": [
            "On 24 March 1976 a military junta led by General Jorge Rafael Videla removed Isabel Perón and began the ‘National Reorganization Process’. With the ‘Dirty War’ against the guerrillas and any political opponent, including workers, students, journalists and priests, the regime used state terror: abductions, torture in more than 300 secret detention centres (the national commission on disappearances identified 340) and the ‘disappearance’ of opponents (the ‘disappeared’). In 1984 the National Commission on the Disappearance of Persons (CONADEP) documented about 8,960 cases and human rights organizations put the number of victims at about 30,000. Hundreds of babies were taken from detained mothers and given to military families.",
            "From 30 April 1977 the ‘Mothers of the Plaza de Mayo’ marched every Thursday in white headscarves in the Plaza de Mayo to find their children and became a symbol of resistance. Argentina hosted and won the 1978 World Cup, and the dictatorship made propaganda use of it. The economy fell into a debt crisis. General Leopoldo Galtieri on 2 April 1982, to win public support, attacked the Falkland Islands (Malvinas); the 74-day war ended with Argentina’s surrender on 14 June: 649 Argentines, 255 British and three islanders were killed. This defeat brought down the military government."
          ]
        }
      },
      {
        "id": "democracy-crises",
        "title": {
          "fa": "بازگشت دموکراسی و بحران‌ها",
          "en": "The return of democracy and the crises"
        },
        "text": {
          "fa": [
            "رائول آلفونسین در ۳۰ اکتبر ۱۹۸۳ انتخاب شد و در ۱۰ دسامبر دموکراسی بازگشت. گزارش «هرگز دیگر» (۱۹۸۴) و «محاکمه‌ی حکومت‌های نظامی» (۱۹۸۵) رهبران دیکتاتوری، از جمله ویدلا و ماسرا، را به حبس ابد محکوم کرد؛ نخستین محاکمه‌ی چنین رهبرانی توسط دادگاه غیرنظامی در یک کشور آمریکای لاتین. اما فشار ارتش به «قانون نقطه‌ی پایان» (۱۹۸۶) و «قانون اطاعت از فرمان» (۱۹۸۷) انجامید که پیگرد بسیاری را متوقف کرد؛ این قوانین در ۲۰۰۳ لغو و در ۲۰۰۵ باطل اعلام شد و محاکمه‌ها ادامه یافت. ابر‌تورم ۱۹۸۹ (بیش از ۳۰۰۰ درصد در سال) آلفونسین را وادار به واگذاری زودهنگام قدرت کرد.",
            "کارلوس منم (۱۹۸۹ تا ۱۹۹۹) با خصوصی‌سازی و «قانون تبدیل‌پذیری» (۱۹۹۱) که یک پزو را برابر یک دلار قرار داد، تورم را مهار کرد. این برنامه در پایان دهه به رکود و بدهی رسید. در دسامبر ۲۰۰۱ «بحران ۲۰۰۱» با محدودیت برداشت از بانک‌ها («کورالیتو») و اعتراض‌های بزرگ، استعفای رئیس‌جمهور فرناندو د لا روآ را در ۲۰ دسامبر آورد؛ پنج رئیس‌جمهور در حدود ده روز، و ناتوانی در پرداخت حدود ۱۰۰ میلیارد دلار بدهی خارجی. نستور کیرشنر (۲۰۰۳ تا ۲۰۰۷) و همسرش کریستینا فرناندز د کیرشنر (۲۰۰۷ تا ۲۰۱۵، نخستین زن منتخب رئیس‌جمهور) اقتصاد را بازسازی کردند. ماوریسیو ماکری (۲۰۱۵ تا ۲۰۱۹) و آلبرتو فرناندز (۲۰۱۹ تا ۲۰۲۳) رئیس‌جمهور بودند و خاویر میلی در نوامبر ۲۰۲۳ انتخاب شد. آرژانتین امروز، با حدود ۴۶ میلیون نفر، با تورم و بدهی دست‌وپنجه نرم می‌کند و در فوتبال (قهرمان جام جهانی ۱۹۷۸، ۱۹۸۶ و ۲۰۲۲)، ادبیات و تانگو شهرت جهانی دارد."
          ],
          "en": [
            "Raúl Alfonsín was elected on 30 October 1983 and democracy returned on 10 December. The ‘Never Again’ report (1984) and the ‘Trial of the Juntas’ (1985) sentenced the dictatorship’s leaders, among them Videla and Massera, to life imprisonment; the first trial of such leaders by a civilian court in a Latin American country. But army pressure led to the ‘Full Stop Law’ (1986) and the ‘Due Obedience Law’ (1987), which halted many prosecutions; these laws were annulled in 2003 and declared void in 2005 and trials continued. The hyperinflation of 1989 (more than 3,000 percent a year) forced Alfonsín to hand over power early.",
            "Carlos Menem (1989 to 1999) with privatization and the ‘Convertibility Law’ (1991), which fixed one peso at one dollar, brought inflation under control. By the end of the decade this programme led to recession and debt. In December 2001 the ‘2001 crisis’, with limits on withdrawals from banks (the ‘corralito’) and great protests, brought President Fernando de la Rúa’s resignation on 20 December; five presidents in about ten days, and the default on about 100 billion dollars of foreign debt. Néstor Kirchner (2003 to 2007) and his wife Cristina Fernández de Kirchner (2007 to 2015, the first elected woman president) rebuilt the economy. Mauricio Macri (2015 to 2019) and Alberto Fernández (2019 to 2023) were presidents and Javier Milei was elected in November 2023. Today Argentina, with about 46 million people, struggles with inflation and debt and has worldwide fame in football (World Cup champion in 1978, 1986 and 2022), literature and tango."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -11000,
        "yearText": {
          "fa": "حدود ۹ تا ۱۳ هزار سال پیش",
          "en": "about 9,000 to 13,000 years ago"
        },
        "title": {
          "fa": "نقاشی‌های غار دست‌ها",
          "en": "The paintings of the Cave of the Hands"
        },
        "text": {
          "fa": "از کهن‌ترین هنرهای آمریکای جنوبی در پاتاگونیا.",
          "en": "Among the oldest art in South America, in Patagonia."
        }
      },
      {
        "year": 1516,
        "title": {
          "fa": "رسیدن سولیس به ریو د لا پلاتا",
          "en": "Solís reaches the Río de la Plata"
        },
        "text": {
          "fa": "نخستین اروپایی که به این رود رسید در همان‌جا کشته شد.",
          "en": "The first European to reach the river was killed there."
        }
      },
      {
        "year": 1536,
        "title": {
          "fa": "نخستین بنیان بوئنوس آیرس",
          "en": "The first founding of Buenos Aires"
        },
        "text": {
          "fa": "پدرو د مندوزا شهر را ساخت؛ در ۱۵۴۱ رها شد.",
          "en": "Pedro de Mendoza built the city; it was abandoned in 1541."
        }
      },
      {
        "year": 1573,
        "title": {
          "fa": "بنیان کوردوبا",
          "en": "The founding of Córdoba"
        },
        "text": {
          "fa": "یکی از کهن‌ترین شهرهای کشور.",
          "en": "One of the country’s oldest cities."
        }
      },
      {
        "year": 1580,
        "title": {
          "fa": "بازسازی بوئنوس آیرس",
          "en": "The refounding of Buenos Aires"
        },
        "text": {
          "fa": "خوان د گاری شهر را برای همیشه بنیان گذاشت.",
          "en": "Juan de Garay founded the city for good."
        }
      },
      {
        "year": 1767,
        "title": {
          "fa": "اخراج یسوعیان",
          "en": "The expulsion of the Jesuits"
        },
        "text": {
          "fa": "پایان مأموریت‌های یسوعی در سرزمین گوارانی‌ها.",
          "en": "The end of the Jesuit missions in Guaraní country."
        }
      },
      {
        "year": 1776,
        "title": {
          "fa": "نایب‌السلطنه‌ی ریو د لا پلاتا",
          "en": "The Viceroyalty of the Río de la Plata"
        },
        "text": {
          "fa": "بوئنوس آیرس پایتخت شد.",
          "en": "Buenos Aires became the capital."
        }
      },
      {
        "year": 1806,
        "yearText": {
          "fa": "۱۸۰۶ و ۱۸۰۷",
          "en": "1806 and 1807"
        },
        "title": {
          "fa": "حمله‌های بریتانیا",
          "en": "The British invasions"
        },
        "text": {
          "fa": "مردم بوئنوس آیرس دو بار بریتانیا را شکست دادند.",
          "en": "The people of Buenos Aires twice defeated Britain."
        }
      },
      {
        "year": 1810,
        "title": {
          "fa": "انقلاب مه",
          "en": "The May Revolution"
        },
        "text": {
          "fa": "در ۲۵ مه نخستین هیئت حاکمه شکل گرفت.",
          "en": "On 25 May the First Junta was formed."
        }
      },
      {
        "year": 1812,
        "title": {
          "fa": "پرچم آرژانتین",
          "en": "The flag of Argentina"
        },
        "text": {
          "fa": "بلگرانو در ۲۷ فوریه آن را برافراشت.",
          "en": "Belgrano raised it on 27 February."
        }
      },
      {
        "year": 1813,
        "title": {
          "fa": "مجلس سال سیزدهم",
          "en": "The Assembly of Year XIII"
        },
        "text": {
          "fa": "قانون «شکم آزاد» برده‌داری را به‌تدریج پایان داد.",
          "en": "The ‘free womb’ law began to end slavery gradually."
        }
      },
      {
        "year": 1816,
        "title": {
          "fa": "اعلامیه‌ی استقلال",
          "en": "The declaration of independence"
        },
        "text": {
          "fa": "در ۹ ژوئیه کنگره‌ی توکومان استقلال را اعلام کرد.",
          "en": "On 9 July the Congress of Tucumán declared independence."
        }
      },
      {
        "year": 1817,
        "title": {
          "fa": "گذر از آند",
          "en": "The crossing of the Andes"
        },
        "text": {
          "fa": "سن مارتین به شیلی رفت؛ چاکابوکو در ۱۲ فوریه.",
          "en": "San Martín went to Chile; Chacabuco on 12 February."
        }
      },
      {
        "year": 1818,
        "title": {
          "fa": "نبرد مایپو",
          "en": "The Battle of Maipú"
        },
        "text": {
          "fa": "در ۵ آوریل استقلال شیلی تضمین شد.",
          "en": "On 5 April Chile’s independence was secured."
        }
      },
      {
        "year": 1825,
        "yearText": {
          "fa": "۱۸۲۵ تا ۱۸۲۸",
          "en": "1825 to 1828"
        },
        "title": {
          "fa": "جنگ با برزیل",
          "en": "The war with Brazil"
        },
        "text": {
          "fa": "به استقلال اروگوئه در ۱۸۲۸ انجامید.",
          "en": "It led to Uruguay’s independence in 1828."
        }
      },
      {
        "year": 1835,
        "title": {
          "fa": "روساس دوباره فرماندار می‌شود",
          "en": "Rosas becomes governor again"
        },
        "text": {
          "fa": "حکومت او تا ۱۸۵۲ ادامه یافت.",
          "en": "His rule lasted until 1852."
        }
      },
      {
        "year": 1845,
        "title": {
          "fa": "نبرد وولتا د اوبلیگادو",
          "en": "The Battle of Vuelta de Obligado"
        },
        "text": {
          "fa": "در ۲۰ نوامبر در برابر ناوگان بریتانیا و فرانسه.",
          "en": "On 20 November against the British and French fleet."
        }
      },
      {
        "year": 1852,
        "title": {
          "fa": "نبرد کاسروس",
          "en": "The Battle of Caseros"
        },
        "text": {
          "fa": "در ۳ فوریه اورکیسا روساس را شکست داد.",
          "en": "On 3 February Urquiza defeated Rosas."
        }
      },
      {
        "year": 1853,
        "title": {
          "fa": "قانون اساسی",
          "en": "The constitution"
        },
        "text": {
          "fa": "در ۱ مه آرژانتین جمهوری فدرال شد؛ برده‌داری لغو شد.",
          "en": "On 1 May Argentina became a federal republic; slavery was abolished."
        }
      },
      {
        "year": 1861,
        "title": {
          "fa": "نبرد پاوون",
          "en": "The Battle of Pavón"
        },
        "text": {
          "fa": "بوئنوس آیرس به کشور پیوست.",
          "en": "Buenos Aires joined the country."
        }
      },
      {
        "year": 1862,
        "title": {
          "fa": "میتره نخستین رئیس‌جمهور",
          "en": "Mitre, the first president"
        },
        "text": {
          "fa": "نخستین رئیس‌جمهور کشور یکپارچه.",
          "en": "The first president of the united country."
        }
      },
      {
        "year": 1865,
        "yearText": {
          "fa": "۱۸۶۵ تا ۱۸۷۰",
          "en": "1865 to 1870"
        },
        "title": {
          "fa": "جنگ پاراگوئه",
          "en": "The Paraguayan War"
        },
        "text": {
          "fa": "آرژانتین، برزیل و اروگوئه علیه پاراگوئه.",
          "en": "Argentina, Brazil and Uruguay against Paraguay."
        }
      },
      {
        "year": 1868,
        "title": {
          "fa": "سارمیینتو رئیس‌جمهور",
          "en": "Sarmiento becomes president"
        },
        "text": {
          "fa": "مدارس همگانی را گسترش داد.",
          "en": "He expanded public schools."
        }
      },
      {
        "year": 1878,
        "yearText": {
          "fa": "۱۸۷۸ تا ۱۸۸۵",
          "en": "1878 to 1885"
        },
        "title": {
          "fa": "فتح بیابان",
          "en": "The Conquest of the Desert"
        },
        "text": {
          "fa": "لشکرکشی روکا علیه مردمان بومی پامپا و پاتاگونیا.",
          "en": "Roca’s campaign against the Indigenous peoples of the pampas and Patagonia."
        }
      },
      {
        "year": 1880,
        "title": {
          "fa": "بوئنوس آیرس پایتخت فدرال",
          "en": "Buenos Aires becomes the federal capital"
        },
        "text": {
          "fa": "روکا رئیس‌جمهور شد؛ آغاز دوران رونق صادرات.",
          "en": "Roca became president; the start of the export boom."
        }
      },
      {
        "year": 1912,
        "title": {
          "fa": "قانون سائنس پنیا",
          "en": "The Sáenz Peña law"
        },
        "text": {
          "fa": "رأی مخفی و اجباری برای مردان.",
          "en": "Secret and compulsory voting for men."
        }
      },
      {
        "year": 1916,
        "title": {
          "fa": "ایریگوین رئیس‌جمهور",
          "en": "Yrigoyen becomes president"
        },
        "text": {
          "fa": "نخستین رئیس‌جمهوری که با رأی عمومی مخفی انتخاب شد.",
          "en": "The first president elected by secret popular vote."
        }
      },
      {
        "year": 1919,
        "title": {
          "fa": "هفته‌ی تراژیک",
          "en": "The Tragic Week"
        },
        "text": {
          "fa": "سرکوب اعتصاب کارگران در ژانویه.",
          "en": "The suppression of a workers’ strike in January."
        }
      },
      {
        "year": 1930,
        "title": {
          "fa": "نخستین کودتای قرن بیستم",
          "en": "The first coup of the twentieth century"
        },
        "text": {
          "fa": "در ۶ سپتامبر ایریگوین برکنار شد؛ آغاز «دهه‌ی بدنام».",
          "en": "On 6 September Yrigoyen was removed; the start of the ‘Infamous Decade’."
        }
      },
      {
        "year": 1943,
        "title": {
          "fa": "کودتای ۴ ژوئن",
          "en": "The coup of 4 June"
        },
        "text": {
          "fa": "پرون در دولت نظامی نفوذ یافت.",
          "en": "Perón gained influence in the military government."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "۱۷ اکتبر",
          "en": "17 October"
        },
        "text": {
          "fa": "کارگران پرون را از زندان آزاد کردند؛ بنیان پرونیسم.",
          "en": "Workers freed Perón from detention; the foundation of Peronism."
        }
      },
      {
        "year": 1946,
        "title": {
          "fa": "پرون رئیس‌جمهور می‌شود",
          "en": "Perón becomes president"
        },
        "text": {
          "fa": "در فوریه انتخاب شد.",
          "en": "Elected in February."
        }
      },
      {
        "year": 1947,
        "title": {
          "fa": "حق رأی زنان",
          "en": "Votes for women"
        },
        "text": {
          "fa": "قانون در ۲۳ سپتامبر؛ نخستین رأی‌دهی ۱۹۵۱.",
          "en": "The law on 23 September; the first voting in 1951."
        }
      },
      {
        "year": 1952,
        "title": {
          "fa": "مرگ اوا پرون",
          "en": "The death of Eva Perón"
        },
        "text": {
          "fa": "در ۲۶ ژوئیه در سی‌وسه‌سالگی درگذشت.",
          "en": "On 26 July she died at the age of thirty-three."
        }
      },
      {
        "year": 1955,
        "title": {
          "fa": "بمباران میدان ماه و کودتا",
          "en": "The bombing of the Plaza de Mayo and the coup"
        },
        "text": {
          "fa": "۱۶ ژوئن بمباران؛ سپتامبر برکناری پرون.",
          "en": "The bombing on 16 June; Perón’s removal in September."
        }
      },
      {
        "year": 1960,
        "title": {
          "fa": "دستگیری آیشمن",
          "en": "The capture of Eichmann"
        },
        "text": {
          "fa": "اسرائیلی‌ها او را در بوئنوس آیرس دستگیر کردند.",
          "en": "Israelis captured him in Buenos Aires."
        }
      },
      {
        "year": 1966,
        "title": {
          "fa": "کودتای اونگانیا",
          "en": "The Onganía coup"
        },
        "text": {
          "fa": "حکومت نظامی تا ۱۹۷۳.",
          "en": "Military rule until 1973."
        }
      },
      {
        "year": 1969,
        "title": {
          "fa": "کوردوبازو",
          "en": "The Cordobazo"
        },
        "text": {
          "fa": "قیام کارگران و دانشجویان در کوردوبا.",
          "en": "The uprising of workers and students in Córdoba."
        }
      },
      {
        "year": 1973,
        "title": {
          "fa": "بازگشت پرون",
          "en": "Perón’s return"
        },
        "text": {
          "fa": "در ۲۰ ژوئن بازگشت و در اکتبر رئیس‌جمهور شد.",
          "en": "He returned on 20 June and became president in October."
        }
      },
      {
        "year": 1974,
        "title": {
          "fa": "مرگ پرون",
          "en": "The death of Perón"
        },
        "text": {
          "fa": "در ۱ ژوئیه؛ ایزابل پرون جانشین شد.",
          "en": "On 1 July; Isabel Perón succeeded him."
        }
      },
      {
        "year": 1976,
        "title": {
          "fa": "کودتای ۲۴ مارس",
          "en": "The coup of 24 March"
        },
        "text": {
          "fa": "آغاز دیکتاتوری نظامی و «جنگ کثیف».",
          "en": "The start of the military dictatorship and the ‘Dirty War’."
        }
      },
      {
        "year": 1977,
        "title": {
          "fa": "مادران میدان ماه",
          "en": "The Mothers of the Plaza de Mayo"
        },
        "text": {
          "fa": "نخستین راهپیمایی در ۳۰ آوریل.",
          "en": "The first march on 30 April."
        }
      },
      {
        "year": 1978,
        "title": {
          "fa": "جام جهانی در آرژانتین",
          "en": "The World Cup in Argentina"
        },
        "text": {
          "fa": "آرژانتین قهرمان شد.",
          "en": "Argentina won."
        }
      },
      {
        "year": 1982,
        "title": {
          "fa": "جنگ فالکلند (مالویناس)",
          "en": "The Falklands (Malvinas) War"
        },
        "text": {
          "fa": "از ۲ آوریل تا ۱۴ ژوئن؛ ۶۴۹ آرژانتینی و ۲۵۵ بریتانیایی کشته شدند.",
          "en": "From 2 April to 14 June; 649 Argentines and 255 British were killed."
        }
      },
      {
        "year": 1983,
        "title": {
          "fa": "بازگشت دموکراسی",
          "en": "The return of democracy"
        },
        "text": {
          "fa": "آلفونسین در ۳۰ اکتبر انتخاب شد.",
          "en": "Alfonsín was elected on 30 October."
        }
      },
      {
        "year": 1984,
        "title": {
          "fa": "گزارش «هرگز دیگر»",
          "en": "The ‘Never Again’ report"
        },
        "text": {
          "fa": "کوناکدپ حدود ۸۹۶۰ مورد ناپدیدشدگی را مستند کرد.",
          "en": "CONADEP documented about 8,960 cases of disappearance."
        }
      },
      {
        "year": 1985,
        "title": {
          "fa": "محاکمه‌ی حکومت‌های نظامی",
          "en": "The Trial of the Juntas"
        },
        "text": {
          "fa": "ویدلا و ماسرا به حبس ابد محکوم شدند.",
          "en": "Videla and Massera were sentenced to life imprisonment."
        }
      },
      {
        "year": 1986,
        "title": {
          "fa": "جام جهانی مارادونا",
          "en": "Maradona’s World Cup"
        },
        "text": {
          "fa": "آرژانتین قهرمان شد؛ «دست خدا» در ۲۲ ژوئن.",
          "en": "Argentina won; the ‘Hand of God’ on 22 June."
        }
      },
      {
        "year": 1989,
        "title": {
          "fa": "ابرتورم و آغاز دوران منم",
          "en": "Hyperinflation and the start of the Menem era"
        },
        "text": {
          "fa": "تورم بیش از ۳۰۰۰ درصد در سال؛ منم رئیس‌جمهور شد.",
          "en": "Inflation of more than 3,000 percent a year; Menem became president."
        }
      },
      {
        "year": 1991,
        "title": {
          "fa": "قانون تبدیل‌پذیری",
          "en": "The Convertibility Law"
        },
        "text": {
          "fa": "یک پزو برابر یک دلار.",
          "en": "One peso equal to one dollar."
        }
      },
      {
        "year": 1994,
        "title": {
          "fa": "حمله به آمیا",
          "en": "The AMIA bombing"
        },
        "text": {
          "fa": "۱۸ ژوئیه حمله به مرکز یهودیان؛ ۸۵ کشته.",
          "en": "On 18 July an attack on the Jewish community centre; 85 killed."
        }
      },
      {
        "year": 2001,
        "title": {
          "fa": "بحران اقتصادی و سیاسی",
          "en": "The economic and political crisis"
        },
        "text": {
          "fa": "د لا روآ در ۲۰ دسامبر استعفا داد؛ ناتوانی در پرداخت بدهی.",
          "en": "De la Rúa resigned on 20 December; the debt default."
        }
      },
      {
        "year": 2003,
        "title": {
          "fa": "نستور کیرشنر",
          "en": "Néstor Kirchner"
        },
        "text": {
          "fa": "قوانین بخشودگی دیکتاتوری لغو شد.",
          "en": "The dictatorship amnesty laws were annulled."
        }
      },
      {
        "year": 2007,
        "title": {
          "fa": "نخستین رئیس‌جمهور منتخب زن",
          "en": "The first elected woman president"
        },
        "text": {
          "fa": "کریستینا فرناندز د کیرشنر انتخاب شد.",
          "en": "Cristina Fernández de Kirchner was elected."
        }
      },
      {
        "year": 2010,
        "title": {
          "fa": "ازدواج هم‌جنس‌گرایان",
          "en": "Same-sex marriage"
        },
        "text": {
          "fa": "آرژانتین نخستین کشور آمریکای لاتین شد که آن را قانونی کرد.",
          "en": "Argentina became the first Latin American country to legalize it."
        }
      },
      {
        "year": 2013,
        "title": {
          "fa": "پاپ فرانسیس",
          "en": "Pope Francis"
        },
        "text": {
          "fa": "کاردینال بوئنوس آیرس در ۱۳ مارس نخستین پاپ از آمریکا شد.",
          "en": "The cardinal of Buenos Aires became on 13 March the first pope from the Americas."
        }
      },
      {
        "year": 2022,
        "title": {
          "fa": "قهرمانی در جام جهانی",
          "en": "World Cup victory"
        },
        "text": {
          "fa": "در ۱۸ دسامبر با پیروزی بر فرانسه در ضربات پنالتی.",
          "en": "On 18 December by beating France on penalties."
        }
      },
      {
        "year": 2023,
        "title": {
          "fa": "انتخاب خاویر میلی",
          "en": "The election of Javier Milei"
        },
        "text": {
          "fa": "در ۱۹ نوامبر انتخاب شد و در ۱۰ دسامبر سوگند یاد کرد.",
          "en": "Elected on 19 November; sworn in on 10 December."
        }
      }
    ]
  }
};
