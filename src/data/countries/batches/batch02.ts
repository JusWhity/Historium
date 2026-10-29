import { CountrySection, TimelineEvent } from '../../../types';

/** Batch 02: full histories (sections + timeline). */
export interface DetailedHistory02 {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const BATCH_02_HISTORIES: Record<string, DetailedHistory02> = {
  "egypt": {
    "sections": [
      {
        "id": "predynastic",
        "title": {
          "fa": "پیش از تاریخ و یکپارچگی مصر",
          "en": "Prehistory and the unification of Egypt"
        },
        "text": {
          "fa": [
            "نشانه‌های زندگی در دره‌ی نیل به صدها هزار سال پیش برمی‌گردد. با خشک‌شدن صحرا، مردم حدود ۸۰۰۰ تا ۶۰۰۰ پیش از میلاد به کنار رود نیل کوچیدند. در دوره‌ی پیشاسلسله‌ای (حدود ۴۴۰۰ تا ۳۱۰۰ پیش از میلاد) فرهنگ‌های بداری، نقاده و گرزه شکل گرفت؛ کشاورزی با سیلاب سالانه‌ی نیل و فن‌هایی مانند سفال‌گری و مس‌کاری رونق گرفت.",
            "بنا بر سنت، پادشاهی به نام نارمر یا منس حدود ۳۱۰۰ تا ۳۰۰۰ پیش از میلاد مصر شمالی (دلتا) و جنوبی (صعید) را یکی کرد و «مصر باستان» پدید آمد؛ هویت و زمان دقیق او محل بحث است و همه‌ی تاریخ‌های پیش از ۶۶۴ پیش از میلاد تقریبی‌اند. دوره‌ی «اولین و دومین سلسله» (حدود ۳۰۰۰ تا ۲۶۷۵ پیش از میلاد) پایتخت در ممفیس و ریشه‌های خط هیروگلیف و دولت را ساخت."
          ],
          "en": [
            "Signs of life in the Nile valley go back hundreds of thousands of years. As the Sahara dried, people moved to the banks of the Nile about 8000 to 6000 BCE. In the Predynastic period (about 4400 to 3100 BCE) the Badarian, Naqada and Gerzean cultures took shape; farming flourished with the annual flood of the Nile, along with crafts such as pottery and copper working.",
            "According to tradition a king named Narmer or Menes united northern (the Delta) and southern (Upper) Egypt about 3100 to 3000 BCE and ‘ancient Egypt’ came into being; his identity and exact date are debated, and all dates before 664 BCE are approximate. The ‘First and Second Dynasties’ (about 3000 to 2675 BCE) built the capital at Memphis and the roots of hieroglyphic writing and the state."
          ]
        }
      },
      {
        "id": "old-kingdom",
        "title": {
          "fa": "پادشاهی کهن: عصر اهرام",
          "en": "The Old Kingdom: the age of the pyramids"
        },
        "text": {
          "fa": [
            "پادشاهی کهن (حدود ۲۶۷۵ تا ۲۱۳۰ پیش از میلاد) را «عصر اهرام» می‌نامند. پادشاه (فرعون) خدا-شاه بود و دولتی متمرکز با وزیر و دیوان‌سالاران اداره می‌کرد. جوزر، فرعون سلسله‌ی سوم، با طراحی ایمهوتپ در سقاره هرم پله‌ای را ساخت (حدود ۲۶۵۰ پیش از میلاد)، نخستین بنای بزرگ سنگی جهان.",
            "فرعون‌های سلسله‌ی چهارم هرم‌های جیزه را حدود ۲۶۰۰ تا ۲۵۰۰ پیش از میلاد ساختند؛ هرم بزرگ خوفو بلندترین سازه‌ی جهان بود و بیش از ۳۸۰۰ سال این عنوان را نگه داشت. ابوالهول هم در همین دوران ساخته شد. در پایان دوره، خشکسالی، رشد قدرت فرمانداران و ضعف شاه به فروپاشی دولت مرکزی و «دوره‌ی میانی نخست» (حدود ۲۱۳۰ تا ۱۹۸۰ پیش از میلاد) انجامید."
          ],
          "en": [
            "The Old Kingdom (about 2675 to 2130 BCE) is called the ‘age of the pyramids’. The king (pharaoh) was a god-king and ruled through a centralized state with a vizier and officials. Djoser, pharaoh of the Third Dynasty, with Imhotep as designer, built the Step Pyramid at Saqqara (about 2650 BCE), the world’s first great stone building.",
            "The pharaohs of the Fourth Dynasty built the pyramids at Giza about 2600 to 2500 BCE; Khufu’s Great Pyramid was the tallest structure in the world and kept that title for more than 3,800 years. The Sphinx was also built in this period. At the end of the period drought, the growing power of governors and the weakness of the king led to the collapse of the central state and the ‘First Intermediate Period’ (about 2130 to 1980 BCE)."
          ]
        }
      },
      {
        "id": "middle-kingdom",
        "title": {
          "fa": "پادشاهی میانه",
          "en": "The Middle Kingdom"
        },
        "text": {
          "fa": [
            "منتوهوتپ دوم از تب (لوکسور امروز) حدود ۲۰۵۵ پیش از میلاد مصر را دوباره یکی کرد و پادشاهی میانه (حدود ۱۹۸۰ تا ۱۶۳۰ پیش از میلاد) آغاز شد. این دوره را «عصر کلاسیک» ادبیات و هنر مصر می‌دانند. فرعون‌های سلسله‌ی دوازدهم، مانند سنوسرت سوم، نوبه را فتح کردند، قلعه‌ها ساختند و با کنعان تجارت کردند.",
            "پس از ضعف سلسله‌ی سیزدهم، مهاجران آسیایی به نام هیکسوس حدود ۱۶۵۰ پیش از میلاد دلتا را گرفتند و «دوره‌ی میانی دوم» (حدود ۱۶۳۰ تا ۱۵۳۹ پیش از میلاد) آغاز شد. هیکسوس اسب، ارابه و سلاح‌های برنزی را به مصر آوردند. شاهزادگان تب در جنوب مقاومت کردند."
          ],
          "en": [
            "Mentuhotep II of Thebes (today’s Luxor) reunited Egypt about 2055 BCE and the Middle Kingdom (about 1980 to 1630 BCE) began. This period is regarded as the ‘classical age’ of Egyptian literature and art. The pharaohs of the Twelfth Dynasty, such as Senusret III, conquered Nubia, built fortresses and traded with Canaan.",
            "After the weakening of the Thirteenth Dynasty, Asiatic settlers called the Hyksos took the Delta about 1650 BCE and the ‘Second Intermediate Period’ (about 1630 to 1539 BCE) began. The Hyksos brought horses, chariots and bronze weapons to Egypt. The princes of Thebes in the south resisted."
          ]
        }
      },
      {
        "id": "new-kingdom",
        "title": {
          "fa": "پادشاهی نو: امپراتوری مصر",
          "en": "The New Kingdom: the Egyptian empire"
        },
        "text": {
          "fa": [
            "احمس اول حدود ۱۵۵۰ پیش از میلاد هیکسوس را راند و پادشاهی نو (حدود ۱۵۳۹ تا ۱۰۷۵ پیش از میلاد) را بنیان گذاشت. حتشپسوت (حدود ۱۴۷۹ تا ۱۴۵۸) که به‌عنوان فرعون حکم راند، تجارت با سرزمین پونت را گسترش داد. تحتمس سوم (حدود ۱۴۷۹ تا ۱۴۲۵) با ده‌ها لشکرکشی مصر را از نوبه تا فرات رساند و بزرگ‌ترین امپراتوری مصر را ساخت. معبدهای کرنک و وادی پادشاهان در تب از این دوران‌اند.",
            "آخناتون (حدود ۱۳۵۳ تا ۱۳۳۶) پرستش خدای واحد آتون را برقرار کرد و پایتخت را به آمارنا برد؛ پس از مرگش دین کهن بازگشت. توت‌عنخ‌آمون (حدود ۱۳۳۲ تا ۱۳۲۳) جوان مرد و آرامگاه تقریباً دست‌نخورده‌اش در ۴ نوامبر ۱۹۲۲ توسط هوارد کارتر کشف شد. رامسس دوم (حدود ۱۲۷۹ تا ۱۲۱۳) در نبرد قادش (حدود ۱۲۷۴) با هیتی‌ها جنگید و حدود ۱۲۵۹ با آن‌ها نخستین پیمان صلح مکتوب جهان را بست. حدود ۱۱۷۷ رامسس سوم «اقوام دریایی» را شکست داد، اما دولت رو به ضعف رفت."
          ],
          "en": [
            "Ahmose I drove out the Hyksos about 1550 BCE and founded the New Kingdom (about 1539 to 1075 BCE). Hatshepsut (about 1479 to 1458), who ruled as pharaoh, expanded trade with the land of Punt. Thutmose III (about 1479 to 1425) in dozens of campaigns brought Egypt from Nubia to the Euphrates and built Egypt’s greatest empire. The temples of Karnak and the Valley of the Kings at Thebes belong to this period.",
            "Akhenaten (about 1353 to 1336) established the worship of the single god Aten and moved the capital to Amarna; after his death the old religion returned. Tutankhamun (about 1332 to 1323) died young and his almost untouched tomb was discovered by Howard Carter on 4 November 1922. Ramesses II (about 1279 to 1213) fought the Hittites at the Battle of Kadesh (about 1274) and about 1259 made with them the world’s first written peace treaty. About 1177 Ramesses III defeated the ‘Sea Peoples’, but the state slid into weakness."
          ]
        }
      },
      {
        "id": "late-period",
        "title": {
          "fa": "دوران پس از امپراتوری و فتح‌های بیگانه",
          "en": "After the empire and foreign conquests"
        },
        "text": {
          "fa": [
            "«دوره‌ی میانی سوم» (حدود ۱۰۷۵ تا ۶۶۴ پیش از میلاد) با تقسیم قدرت میان خاندان‌های دلتا و کاهنان تب همراه بود. سلسله‌ی بیست‌وپنجم (حدود ۷۴۷ تا ۶۵۶) از نوبه (کوش) بر مصر حکم راند. آشوری‌ها در ۶۷۱ پیش از میلاد ممفیس را گرفتند و تب را در ۶۶۳ غارت کردند.",
            "سلسله‌ی بیست‌وششم مصر را دوباره یکی کرد (۶۶۴ تا ۵۲۵)، اما کمبوجیه، پادشاه هخامنشی، در ۵۲۵ پیش از میلاد مصر را گرفت. مصر با چند دوره‌ی استقلال کوتاه تا ۳۳۲ پیش از میلاد زیر نفوذ ایران بود. سپس اسکندر مقدونی بدون جنگ بزرگی وارد مصر شد و مردم او را آزادکننده خواندند."
          ],
          "en": [
            "The ‘Third Intermediate Period’ (about 1075 to 664 BCE) saw power divided among Delta families and the priests of Thebes. The Twenty-fifth Dynasty (about 747 to 656) ruled Egypt from Nubia (Kush). The Assyrians took Memphis in 671 BCE and sacked Thebes in 663.",
            "The Twenty-sixth Dynasty reunited Egypt (664 to 525), but the Achaemenid king Cambyses took Egypt in 525 BCE. Egypt was under Iranian influence, with a few short periods of independence, until 332 BCE. Then Alexander of Macedon entered Egypt without a great battle and the people hailed him as a liberator."
          ]
        }
      },
      {
        "id": "ptolemaic-roman",
        "title": {
          "fa": "بطلمیوسی‌ها و روم",
          "en": "The Ptolemies and Rome"
        },
        "text": {
          "fa": [
            "اسکندر در ۳۳۱ پیش از میلاد اسکندریه را بنیان گذاشت. پس از مرگ او، سردارش بطلمیوس اول در ۳۰۵ پیش از میلاد پادشاه شد و خاندان بطلمیوسی تا ۳۰ پیش از میلاد حکم راند. اسکندریه مرکز علم و فرهنگ جهان شد؛ کتابخانه و موزیون آن دانشمندان بسیاری را گرد آورد. «سنگ رشید» (۱۹۶ پیش از میلاد) فرمانی به سه خط هیروگلیف، دموتیک و یونانی است که بعدها کلید خواندن هیروگلیف شد.",
            "کلئوپاترای هفتم، آخرین فرمانروای بطلمیوسی، با ژولیوس سزار و سپس مارک آنتونی متحد شد، اما در نبرد آکتیوم (۲ سپتامبر ۳۱ پیش از میلاد) شکست خورد و در ۳۰ پیش از میلاد درگذشت. مصر ایالتی رومی و انبار غله‌ی امپراتوری شد. مسیحیت از قرن اول در اسکندریه ریشه دواند و کلیسای قبطی شکل گرفت؛ پس از شورای کلسدون (۴۵۱) قبطی‌ها از کلیسای بیزانس جدا شدند."
          ],
          "en": [
            "Alexander founded Alexandria in 331 BCE. After his death his general Ptolemy I became king in 305 BCE and the Ptolemaic dynasty ruled until 30 BCE. Alexandria became the world’s centre of learning and culture; its library and Museion gathered many scholars. The ‘Rosetta Stone’ (196 BCE) is a decree in three scripts, hieroglyphic, Demotic and Greek, which later became the key to reading hieroglyphs.",
            "Cleopatra VII, the last Ptolemaic ruler, allied with Julius Caesar and then Mark Antony, but was defeated at the Battle of Actium (2 September 31 BCE) and died in 30 BCE. Egypt became a Roman province and the empire’s granary. Christianity took root in Alexandria from the first century and the Coptic Church took shape; after the Council of Chalcedon (451) the Copts separated from the Byzantine church."
          ]
        }
      },
      {
        "id": "islamic-egypt",
        "title": {
          "fa": "مصر اسلامی: فاطمیان، ایوبیان و مملوکان",
          "en": "Islamic Egypt: the Fatimids, Ayyubids and Mamluks"
        },
        "text": {
          "fa": [
            "عمرو بن عاص در ۶۳۹ تا ۶۴۲ مصر را برای خلافت اسلامی فتح کرد و فسطاط را بنیان گذاشت. با گذر قرن‌ها، مصر اسلامی و عربی‌زبان شد، هرچند اقلیت بزرگ قبطی ماند. فاطمیان (شیعه‌ی اسماعیلی) در ۹۶۹ مصر را گرفتند و قاهره را بنا کردند؛ دانشگاه الازهر در ۹۷۰ تا ۹۷۲ بنیان گذاشته شد.",
            "صلاح‌الدین ایوبی در ۱۱۷۱ خلافت فاطمیان را برانداخت و بعدها قدس را از صلیبیان پس گرفت (۱۱۸۷). مملوکان، سربازان برده‌ی ترک‌تبار، در ۱۲۵۰ قدرت را گرفتند و تا ۱۵۱۷ حکم راندند. آن‌ها در نبرد عین جالوت (۳ سپتامبر ۱۲۶۰) مغول‌ها را شکست دادند. قاهره در این دوران یکی از بزرگ‌ترین شهرهای جهان بود. پس از ۱۵۱۷ مصر ایالتی از امپراتوری عثمانی شد."
          ],
          "en": [
            "Amr ibn al-As conquered Egypt for the Islamic caliphate in 639 to 642 and founded Fustat. Over the centuries Egypt became Islamic and Arabic-speaking, though a large Coptic minority remained. The Fatimids (Ismaili Shia) took Egypt in 969 and built Cairo; Al-Azhar was founded in 970 to 972.",
            "Saladin ended the Fatimid caliphate in 1171 and later retook Jerusalem from the Crusaders (1187). The Mamluks, slave soldiers of Turkic origin, took power in 1250 and ruled until 1517. They defeated the Mongols at the Battle of Ain Jalut (3 September 1260). Cairo was one of the largest cities in the world in this period. After 1517 Egypt became a province of the Ottoman Empire."
          ]
        }
      },
      {
        "id": "modern-egypt",
        "title": {
          "fa": "مصر نو: ناپلئون، محمدعلی و کانال سوئز",
          "en": "Modern Egypt: Napoleon, Muhammad Ali and the Suez Canal"
        },
        "text": {
          "fa": [
            "ناپلئون در ژوئیه‌ی ۱۷۹۸ به مصر حمله کرد و در نبرد اهرام (۲۱ ژوئیه) مملوکان را شکست داد؛ همراه سپاه او دانشمندانی بودند که مصرشناسی را بنیان گذاشتند و سنگ رشید در ۱۷۹۹ کشف شد. شامپولیون خط هیروگلیف را در ۱۸۲۲ رمزگشایی کرد. پس از رفتن فرانسوی‌ها (۱۸۰۱)، محمدعلی پاشا، افسر عثمانی، از ۱۸۰۵ والی مصر شد، مملوکان را در ۱۸۱۱ کشتار کرد و ارتش، صنعت و آموزش نوین ساخت؛ خاندان او تا ۱۹۵۲ حکم راند.",
            "کانال سوئز در ۱۷ نوامبر ۱۸۶۹ گشوده شد، اما بدهی مصر به اروپا به دخالت بریتانیا انجامید و بریتانیا در ۱۸۸۲ مصر را اشغال کرد. انقلاب ۱۹۱۹ به رهبری سعد زغلول علیه اشغال بود و بریتانیا در ۲۸ فوریه‌ی ۱۹۲۲ استقلال نمایشی مصر را اعلام کرد؛ نیروهای بریتانیا ماندند. در ۲۳ ژوئیه‌ی ۱۹۵۲ «افسران آزاد» به رهبری محمد نجیب و جمال عبدالناصر شاه فاروق را برکنار کردند و جمهوری در ۱۸ ژوئن ۱۹۵۳ اعلام شد."
          ],
          "en": [
            "Napoleon invaded Egypt in July 1798 and defeated the Mamluks at the Battle of the Pyramids (21 July); with his army were scholars who founded Egyptology, and the Rosetta Stone was found in 1799. Champollion deciphered hieroglyphic writing in 1822. After the French left (1801), Muhammad Ali Pasha, an Ottoman officer, became governor of Egypt from 1805, massacred the Mamluks in 1811 and built a modern army, industry and education; his family ruled until 1952.",
            "The Suez Canal opened on 17 November 1869, but Egypt’s debt to Europe led to British interference and Britain occupied Egypt in 1882. The revolution of 1919 under Saad Zaghloul was against the occupation and Britain declared a limited Egyptian independence on 28 February 1922; British forces stayed. On 23 July 1952 the ‘Free Officers’ under Muhammad Naguib and Gamal Abdel Nasser removed King Farouk and the republic was proclaimed on 18 June 1953."
          ]
        }
      },
      {
        "id": "nasser-sadat",
        "title": {
          "fa": "ناصر، سادات و مبارک",
          "en": "Nasser, Sadat and Mubarak"
        },
        "text": {
          "fa": [
            "جمال عبدالناصر از ۱۹۵۶ رئیس‌جمهور بود. او در ۲۶ ژوئیه‌ی ۱۹۵۶ کانال سوئز را ملی کرد؛ بریتانیا، فرانسه و اسرائیل حمله کردند، اما با فشار آمریکا و شوروی عقب نشستند و ناصر قهرمان جهان عرب شد. مصر از ۱۹۵۸ تا ۱۹۶۱ با سوریه «جمهوری متحد عربی» را ساخت. سد بلند اسوان (۱۹۶۰ تا ۱۹۷۰) برق و آبیاری آورد. شکست در جنگ شش‌روزه (ژوئن ۱۹۶۷) و از دست رفتن سینا ضربه‌ی سختی بود. ناصر در ۲۸ سپتامبر ۱۹۷۰ درگذشت.",
            "انور سادات در جنگ اکتبر ۱۹۷۳ (۶ اکتبر) حمله‌ی غافلگیرانه به اسرائیل کرد، سپس در نوامبر ۱۹۷۷ به قدس رفت. پیمان کمپ دیوید (۱۹۷۸) به پیمان صلح با اسرائیل در ۲۶ مارس ۱۹۷۹ انجامید؛ مصر نخستین کشور عربی بود که اسرائیل را به رسمیت شناخت و سینا بازگردانده شد. سادات در ۶ اکتبر ۱۹۸۱ در رژه‌ی نظامی ترور شد. حسنی مبارک از ۱۹۸۱ تا ۲۰۱۱ حکم راند."
          ],
          "en": [
            "Gamal Abdel Nasser was president from 1956. On 26 July 1956 he nationalized the Suez Canal; Britain, France and Israel attacked, but withdrew under American and Soviet pressure and Nasser became a hero of the Arab world. From 1958 to 1961 Egypt formed the ‘United Arab Republic’ with Syria. The Aswan High Dam (1960 to 1970) brought electricity and irrigation. Defeat in the Six-Day War (June 1967) and the loss of Sinai was a heavy blow. Nasser died on 28 September 1970.",
            "Anwar Sadat launched a surprise attack on Israel in the October War of 1973 (6 October), then in November 1977 went to Jerusalem. The Camp David accords (1978) led to a peace treaty with Israel on 26 March 1979; Egypt was the first Arab country to recognize Israel and Sinai was returned. Sadat was assassinated at a military parade on 6 October 1981. Hosni Mubarak ruled from 1981 to 2011."
          ]
        }
      },
      {
        "id": "revolution-2011",
        "title": {
          "fa": "انقلاب ۲۰۱۱ و پس از آن",
          "en": "The 2011 revolution and after"
        },
        "text": {
          "fa": [
            "اعتراض‌های ۲۵ ژانویه‌ی ۲۰۱۱ در میدان تحریر قاهره، که با «بهار عربی» هم‌زمان بود، علیه فقر، فساد و سرکوب بود. مبارک در ۱۱ فوریه‌ی ۲۰۱۱ استعفا داد. محمد مرسی از اخوان‌المسلمین در ژوئن ۲۰۱۲ نخستین رئیس‌جمهور منتخب شد، اما ارتش در ۳ ژوئیه‌ی ۲۰۱۳ پس از اعتراض‌های بزرگ او را برکنار کرد. عبدالفتاح سیسی در ۲۰۱۴ رئیس‌جمهور شد.",
            "مصر با حدود ۱۱۰ میلیون نفر پرجمعیت‌ترین کشور عرب است. اقتصاد آن بر کشاورزی در دره‌ی نیل، گردشگری، کانال سوئز و گاز استوار است. اهرام جیزه، معابد لوکسور و کرنک و مصر باستان همچنان از مهم‌ترین مقصدهای گردشگری جهان‌اند."
          ],
          "en": [
            "The protests of 25 January 2011 in Cairo’s Tahrir Square, which coincided with the ‘Arab Spring’, were against poverty, corruption and repression. Mubarak resigned on 11 February 2011. Mohamed Morsi of the Muslim Brotherhood became the first elected president in June 2012, but the army removed him on 3 July 2013 after large protests. Abdel Fattah el-Sisi became president in 2014.",
            "With about 110 million people Egypt is the most populous Arab country. Its economy rests on farming in the Nile valley, tourism, the Suez Canal and gas. The pyramids of Giza, the temples of Luxor and Karnak and ancient Egypt remain among the world’s most important tourist destinations."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -8000,
        "yearText": {
          "fa": "حدود ۸۰۰۰ تا ۶۰۰۰ پ.م.",
          "en": "about 8000 to 6000 BCE"
        },
        "title": {
          "fa": "کوچ به کنار نیل",
          "en": "The move to the Nile"
        },
        "text": {
          "fa": "با خشک‌شدن صحرا مردم به کنار رود آمدند.",
          "en": "As the Sahara dried, people came to the river."
        }
      },
      {
        "year": -4400,
        "yearText": {
          "fa": "حدود ۴۴۰۰ تا ۳۱۰۰ پ.م.",
          "en": "about 4400 to 3100 BCE"
        },
        "title": {
          "fa": "دوره‌ی پیشاسلسله‌ای",
          "en": "The Predynastic period"
        },
        "text": {
          "fa": "فرهنگ‌های بداری، نقاده و گرزه.",
          "en": "The Badarian, Naqada and Gerzean cultures."
        }
      },
      {
        "year": -3100,
        "title": {
          "fa": "یکپارچگی مصر (حدود)",
          "en": "The unification of Egypt (about)"
        },
        "text": {
          "fa": "بنا بر سنت نارمر یا منس شمال و جنوب را یکی کرد.",
          "en": "According to tradition Narmer or Menes united north and south."
        }
      },
      {
        "year": -2675,
        "title": {
          "fa": "آغاز پادشاهی کهن (حدود)",
          "en": "The Old Kingdom begins (about)"
        },
        "text": {
          "fa": "پایتخت در ممفیس و آغاز ساخت بناهای بزرگ سنگی.",
          "en": "The capital at Memphis and the start of great stone building."
        }
      },
      {
        "year": -2650,
        "title": {
          "fa": "هرم پله‌ای جوزر (حدود)",
          "en": "Djoser’s Step Pyramid (about)"
        },
        "text": {
          "fa": "ایمهوتپ نخستین بنای بزرگ سنگی جهان را در سقاره طراحی کرد.",
          "en": "Imhotep designed the world’s first great stone building at Saqqara."
        }
      },
      {
        "year": -2600,
        "title": {
          "fa": "هرم‌های جیزه (حدود)",
          "en": "The pyramids of Giza (about)"
        },
        "text": {
          "fa": "هرم بزرگ خوفو و ابوالهول در سلسله‌ی چهارم.",
          "en": "Khufu’s Great Pyramid and the Sphinx in the Fourth Dynasty."
        }
      },
      {
        "year": -2130,
        "title": {
          "fa": "فروپاشی دولت مرکزی (حدود)",
          "en": "The central state collapses (about)"
        },
        "text": {
          "fa": "آغاز دوره‌ی میانی نخست.",
          "en": "The start of the First Intermediate Period."
        }
      },
      {
        "year": -2055,
        "title": {
          "fa": "منتوهوتپ دوم مصر را یکی می‌کند (حدود)",
          "en": "Mentuhotep II reunites Egypt (about)"
        },
        "text": {
          "fa": "آغاز پادشاهی میانه با پایتخت در تب.",
          "en": "The start of the Middle Kingdom with its capital at Thebes."
        }
      },
      {
        "year": -1650,
        "title": {
          "fa": "هیکسوس در دلتا (حدود)",
          "en": "The Hyksos in the Delta (about)"
        },
        "text": {
          "fa": "مهاجران آسیایی اسب و ارابه آوردند.",
          "en": "Asiatic settlers brought horses and chariots."
        }
      },
      {
        "year": -1550,
        "title": {
          "fa": "احمس اول هیکسوس را می‌راند (حدود)",
          "en": "Ahmose I expels the Hyksos (about)"
        },
        "text": {
          "fa": "آغاز پادشاهی نو.",
          "en": "The start of the New Kingdom."
        }
      },
      {
        "year": -1479,
        "title": {
          "fa": "حتشپسوت فرعون می‌شود (حدود)",
          "en": "Hatshepsut becomes pharaoh (about)"
        },
        "text": {
          "fa": "او تا حدود ۱۴۵۸ پیش از میلاد حکم راند.",
          "en": "She ruled until about 1458 BCE."
        }
      },
      {
        "year": -1457,
        "title": {
          "fa": "تحتمس سوم و بزرگ‌ترین امپراتوری (حدود)",
          "en": "Thutmose III and the greatest empire (about)"
        },
        "text": {
          "fa": "مصر از نوبه تا فرات رسید.",
          "en": "Egypt reached from Nubia to the Euphrates."
        }
      },
      {
        "year": -1353,
        "title": {
          "fa": "آخناتون و دین آتون (حدود)",
          "en": "Akhenaten and the religion of Aten (about)"
        },
        "text": {
          "fa": "پایتخت به آمارنا رفت.",
          "en": "The capital moved to Amarna."
        }
      },
      {
        "year": -1332,
        "title": {
          "fa": "توت‌عنخ‌آمون (حدود)",
          "en": "Tutankhamun (about)"
        },
        "text": {
          "fa": "فرعون جوان؛ آرامگاهش در ۱۹۲۲ کشف شد.",
          "en": "The young pharaoh; his tomb was found in 1922."
        }
      },
      {
        "year": -1274,
        "title": {
          "fa": "نبرد قادش (حدود)",
          "en": "The Battle of Kadesh (about)"
        },
        "text": {
          "fa": "رامسس دوم با هیتی‌ها جنگید؛ حدود ۱۲۵۹ پیمان صلح بستند.",
          "en": "Ramesses II fought the Hittites; about 1259 they made a peace treaty."
        }
      },
      {
        "year": -1177,
        "title": {
          "fa": "اقوام دریایی (حدود)",
          "en": "The Sea Peoples (about)"
        },
        "text": {
          "fa": "رامسس سوم آن‌ها را شکست داد، اما دولت ضعیف شد.",
          "en": "Ramesses III defeated them, but the state weakened."
        }
      },
      {
        "year": -747,
        "yearText": {
          "fa": "حدود ۷۴۷ تا ۶۵۶ پ.م.",
          "en": "about 747 to 656 BCE"
        },
        "title": {
          "fa": "سلسله‌ی کوشی",
          "en": "The Kushite dynasty"
        },
        "text": {
          "fa": "فرعون‌های نوبه‌ای بر مصر حکم راندند.",
          "en": "Pharaohs from Nubia ruled Egypt."
        }
      },
      {
        "year": -671,
        "title": {
          "fa": "آشوری‌ها ممفیس را می‌گیرند",
          "en": "The Assyrians take Memphis"
        },
        "text": {
          "fa": "تب در ۶۶۳ پیش از میلاد غارت شد.",
          "en": "Thebes was sacked in 663 BCE."
        }
      },
      {
        "year": -525,
        "title": {
          "fa": "فتح مصر به‌دست کمبوجیه",
          "en": "The conquest of Egypt by Cambyses"
        },
        "text": {
          "fa": "مصر بخشی از شاهنشاهی هخامنشی شد.",
          "en": "Egypt became part of the Achaemenid Empire."
        }
      },
      {
        "year": -332,
        "title": {
          "fa": "اسکندر وارد مصر می‌شود",
          "en": "Alexander enters Egypt"
        },
        "text": {
          "fa": "در ۳۳۱ اسکندریه را بنیان گذاشت.",
          "en": "In 331 he founded Alexandria."
        }
      },
      {
        "year": -305,
        "title": {
          "fa": "بطلمیوس اول پادشاه می‌شود",
          "en": "Ptolemy I becomes king"
        },
        "text": {
          "fa": "آغاز خاندان بطلمیوسی.",
          "en": "The start of the Ptolemaic dynasty."
        }
      },
      {
        "year": -196,
        "title": {
          "fa": "سنگ رشید",
          "en": "The Rosetta Stone"
        },
        "text": {
          "fa": "فرمانی به سه خط که بعدها کلید خواندن هیروگلیف شد.",
          "en": "A decree in three scripts that later became the key to reading hieroglyphs."
        }
      },
      {
        "year": -31,
        "title": {
          "fa": "نبرد آکتیوم",
          "en": "The Battle of Actium"
        },
        "text": {
          "fa": "در ۲ سپتامبر کلئوپاترا و آنتونی شکست خوردند.",
          "en": "On 2 September Cleopatra and Antony were defeated."
        }
      },
      {
        "year": -30,
        "title": {
          "fa": "مصر ایالتی رومی می‌شود",
          "en": "Egypt becomes a Roman province"
        },
        "text": {
          "fa": "کلئوپاترا درگذشت.",
          "en": "Cleopatra died."
        }
      },
      {
        "year": 451,
        "title": {
          "fa": "شورای کلسدون",
          "en": "The Council of Chalcedon"
        },
        "text": {
          "fa": "کلیسای قبطی از کلیسای بیزانس جدا شد.",
          "en": "The Coptic Church separated from the Byzantine church."
        }
      },
      {
        "year": 639,
        "yearText": {
          "fa": "۶۳۹ تا ۶۴۲",
          "en": "639 to 642"
        },
        "title": {
          "fa": "فتح عرب‌ها",
          "en": "The Arab conquest"
        },
        "text": {
          "fa": "عمرو بن عاص مصر را فتح کرد و فسطاط را بنیان گذاشت.",
          "en": "Amr ibn al-As conquered Egypt and founded Fustat."
        }
      },
      {
        "year": 969,
        "title": {
          "fa": "تأسیس قاهره",
          "en": "The founding of Cairo"
        },
        "text": {
          "fa": "فاطمیان مصر را گرفتند و قاهره را ساختند.",
          "en": "The Fatimids took Egypt and built Cairo."
        }
      },
      {
        "year": 970,
        "title": {
          "fa": "الازهر",
          "en": "Al-Azhar"
        },
        "text": {
          "fa": "مسجد و دانشگاه الازهر بنیان گذاشته شد.",
          "en": "The Al-Azhar mosque and university was founded."
        }
      },
      {
        "year": 1171,
        "title": {
          "fa": "صلاح‌الدین خلافت فاطمی را برمی‌اندازد",
          "en": "Saladin ends the Fatimid caliphate"
        },
        "text": {
          "fa": "آغاز حکومت ایوبیان.",
          "en": "The start of Ayyubid rule."
        }
      },
      {
        "year": 1250,
        "title": {
          "fa": "آغاز حکومت مملوکان",
          "en": "Mamluk rule begins"
        },
        "text": {
          "fa": "تا ۱۵۱۷ ادامه یافت.",
          "en": "It lasted until 1517."
        }
      },
      {
        "year": 1260,
        "title": {
          "fa": "نبرد عین جالوت",
          "en": "The Battle of Ain Jalut"
        },
        "text": {
          "fa": "مملوکان در ۳ سپتامبر مغول‌ها را شکست دادند.",
          "en": "On 3 September the Mamluks defeated the Mongols."
        }
      },
      {
        "year": 1517,
        "title": {
          "fa": "فتح مصر به‌دست عثمانی",
          "en": "The Ottoman conquest of Egypt"
        },
        "text": {
          "fa": "مصر ایالتی از امپراتوری عثمانی شد.",
          "en": "Egypt became a province of the Ottoman Empire."
        }
      },
      {
        "year": 1798,
        "title": {
          "fa": "حمله‌ی ناپلئون",
          "en": "Napoleon’s invasion"
        },
        "text": {
          "fa": "نبرد اهرام در ۲۱ ژوئیه؛ سنگ رشید در ۱۷۹۹ کشف شد.",
          "en": "The Battle of the Pyramids on 21 July; the Rosetta Stone was found in 1799."
        }
      },
      {
        "year": 1805,
        "title": {
          "fa": "محمدعلی والی مصر می‌شود",
          "en": "Muhammad Ali becomes governor of Egypt"
        },
        "text": {
          "fa": "خاندان او تا ۱۹۵۲ حکم راند.",
          "en": "His family ruled until 1952."
        }
      },
      {
        "year": 1822,
        "title": {
          "fa": "رمزگشایی هیروگلیف",
          "en": "The decipherment of hieroglyphs"
        },
        "text": {
          "fa": "شامپولیون با سنگ رشید خط را خواند.",
          "en": "Champollion read the script with the Rosetta Stone."
        }
      },
      {
        "year": 1869,
        "title": {
          "fa": "گشایش کانال سوئز",
          "en": "The opening of the Suez Canal"
        },
        "text": {
          "fa": "در ۱۷ نوامبر کانال گشوده شد.",
          "en": "The canal opened on 17 November."
        }
      },
      {
        "year": 1882,
        "title": {
          "fa": "اشغال مصر به‌دست بریتانیا",
          "en": "The British occupation of Egypt"
        },
        "text": {
          "fa": "پس از شکست ارتش مصر در تل‌الکبیر.",
          "en": "After the Egyptian army’s defeat at Tel el-Kebir."
        }
      },
      {
        "year": 1919,
        "title": {
          "fa": "انقلاب ۱۹۱۹",
          "en": "The revolution of 1919"
        },
        "text": {
          "fa": "سعد زغلول علیه اشغال بریتانیا رهبری کرد.",
          "en": "Saad Zaghloul led the struggle against the British occupation."
        }
      },
      {
        "year": 1922,
        "title": {
          "fa": "استقلال نمایشی",
          "en": "Limited independence"
        },
        "text": {
          "fa": "در ۲۸ فوریه بریتانیا آن را اعلام کرد؛ نیروهایش ماندند.",
          "en": "Britain declared it on 28 February; its forces stayed."
        }
      },
      {
        "year": 1952,
        "title": {
          "fa": "انقلاب افسران آزاد",
          "en": "The Free Officers revolution"
        },
        "text": {
          "fa": "در ۲۳ ژوئیه شاه فاروق برکنار شد؛ جمهوری در ۱۸ ژوئن ۱۹۵۳ اعلام شد.",
          "en": "On 23 July King Farouk was removed; the republic was proclaimed on 18 June 1953."
        }
      },
      {
        "year": 1956,
        "title": {
          "fa": "ملی‌شدن کانال سوئز",
          "en": "The nationalization of the Suez Canal"
        },
        "text": {
          "fa": "ناصر در ۲۶ ژوئیه کانال را ملی کرد و بحران سوئز رخ داد.",
          "en": "Nasser nationalized the canal on 26 July and the Suez Crisis followed."
        }
      },
      {
        "year": 1967,
        "title": {
          "fa": "جنگ شش‌روزه",
          "en": "The Six-Day War"
        },
        "text": {
          "fa": "مصر شکست خورد و سینا را از دست داد.",
          "en": "Egypt was defeated and lost Sinai."
        }
      },
      {
        "year": 1970,
        "title": {
          "fa": "مرگ ناصر",
          "en": "The death of Nasser"
        },
        "text": {
          "fa": "ناصر در ۲۸ سپتامبر درگذشت و سادات رئیس‌جمهور شد.",
          "en": "Nasser died on 28 September and Sadat became president."
        }
      },
      {
        "year": 1973,
        "title": {
          "fa": "جنگ اکتبر",
          "en": "The October War"
        },
        "text": {
          "fa": "حمله‌ی غافلگیرانه‌ی مصر و سوریه در ۶ اکتبر.",
          "en": "The surprise attack by Egypt and Syria on 6 October."
        }
      },
      {
        "year": 1979,
        "title": {
          "fa": "پیمان صلح با اسرائیل",
          "en": "The peace treaty with Israel"
        },
        "text": {
          "fa": "در ۲۶ مارس امضا شد.",
          "en": "Signed on 26 March."
        }
      },
      {
        "year": 1981,
        "title": {
          "fa": "ترور سادات",
          "en": "The assassination of Sadat"
        },
        "text": {
          "fa": "در ۶ اکتبر در رژه‌ی نظامی ترور شد؛ مبارک جانشین او شد.",
          "en": "On 6 October he was assassinated at a military parade; Mubarak succeeded him."
        }
      },
      {
        "year": 2011,
        "title": {
          "fa": "انقلاب ۲۵ ژانویه",
          "en": "The revolution of 25 January"
        },
        "text": {
          "fa": "مبارک در ۱۱ فوریه استعفا داد.",
          "en": "Mubarak resigned on 11 February."
        }
      },
      {
        "year": 2013,
        "title": {
          "fa": "برکناری مرسی",
          "en": "The removal of Morsi"
        },
        "text": {
          "fa": "ارتش در ۳ ژوئیه او را پس از اعتراض‌های بزرگ برکنار کرد.",
          "en": "On 3 July the army removed him after large protests."
        }
      }
    ]
  }
};
