import { CountrySection, TimelineEvent } from '../../../types';

/** Batch 03: full histories (sections + timeline). */
export interface DetailedHistory03 {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const BATCH_03_HISTORIES: Record<string, DetailedHistory03> = {
  "greece": {
    "sections": [
      {
        "id": "bronze-age",
        "title": {
          "fa": "عصر مفرغ: مینوسی‌ها و میکنی‌ها",
          "en": "The Bronze Age: the Minoans and Mycenaeans"
        },
        "text": {
          "fa": [
            "نخستین کشاورزان در یونان از حدود ۷۰۰۰ پیش از میلاد زندگی می‌کردند. تمدن مینوسی در جزیره‌ی کرت (حدود ۳۰۰۰ تا ۱۱۰۰ پیش از میلاد) نخستین تمدن بزرگ اروپا بود: کاخ‌های باشکوه مانند کنوسوس با نقاشی‌های دیواری، تجارت دریایی و خطی که هنوز به‌طور کامل خوانده نشده است. حدود ۱۶۰۰ پیش از میلاد فوران آتشفشان سانتورینی (تیرا) ضربه‌ای سخت به این تمدن زد و میکنی‌ها از سرزمین اصلی پیش افتادند.",
            "میکنی‌ها (حدود ۱۶۰۰ تا ۱۱۰۰ پیش از میلاد) نخستین یونانی‌زبانان شناخته‌شده‌اند. دژهای سنگی بزرگ ساختند (میکنای، تیرینس، پیلوس) و با خط «خطی ب» که در ۱۹۵۲ مایکل ونتریس آن را به‌عنوان یونانی رمزگشایی کرد، لوح‌های اداری می‌نوشتند. حدود ۱۲۰۰ پیش از میلاد «فروپاشی عصر مفرغ» رخ داد و کاخ‌ها ویران شدند؛ علت آن، که شاید ترکیبی از زلزله، خشکسالی، شورش و اقوام مهاجم بود، محل بحث است."
          ],
          "en": [
            "The first farmers in Greece lived from about 7000 BCE. The Minoan civilization on the island of Crete (about 3000 to 1100 BCE) was Europe’s first great civilization: splendid palaces such as Knossos with wall paintings, sea trade and a script that has still not been fully read. About 1600 BCE the eruption of the Santorini (Thera) volcano dealt this civilization a severe blow and the Mycenaeans took the lead from the mainland.",
            "The Mycenaeans (about 1600 to 1100 BCE) are the first known Greek speakers. They built great stone citadels (Mycenae, Tiryns, Pylos) and wrote administrative tablets in the ‘Linear B’ script, which Michael Ventris deciphered as Greek in 1952. About 1200 BCE the ‘Bronze Age collapse’ took place and the palaces were destroyed; its cause, perhaps a mix of earthquakes, drought, revolts and invading peoples, is debated."
          ]
        }
      },
      {
        "id": "archaic",
        "title": {
          "fa": "دوران تاریک و دوره‌ی باستانی: شهرهای-دولت",
          "en": "The Dark Age and the Archaic period: the city-states"
        },
        "text": {
          "fa": [
            "پس از فروپاشی، «دوران تاریک» (حدود ۱۱۰۰ تا ۸۰۰ پیش از میلاد) فرارسید: جمعیت کم و نوشتن فراموش شد. حدود ۸۰۰ پیش از میلاد یونانی‌ها الفبای فنیقی را گرفتند و با افزودن حروف صدادار الفبای یونانی را ساختند. هومر در قرن هشتم پیش از میلاد «ایلیاد» و «ادیسه» را سروده است. نخستین بازی‌های المپیک، بنا بر سنت، در ۷۷۶ پیش از میلاد برگزار شد.",
            "یونان به صدها «پولیس» (شهر-دولت) مستقل تقسیم بود. اسپارت جامعه‌ای نظامی بود که مردم بومی «هلوت» را به بردگی می‌گرفت. آتن از پادشاهی و اشرافیت به‌تدریج به سوی مردم‌سالاری رفت: سولون در حدود ۵۹۴ پیش از میلاد بردگی ناشی از بدهی را لغو کرد و کلیستنس در ۵۰۸ تا ۵۰۷ پیش از میلاد نظام دموکراسی آتنی را بنیان گذاشت. از قرن هشتم تا ششم یونانی‌ها مستعمره‌هایی در سیسیل، جنوب ایتالیا، دریای سیاه و سراسر مدیترانه ساختند."
          ],
          "en": [
            "After the collapse the ‘Dark Age’ (about 1100 to 800 BCE) followed: population was low and writing was forgotten. About 800 BCE the Greeks took the Phoenician alphabet and by adding vowels made the Greek alphabet. Homer is said to have composed the Iliad and the Odyssey in the eighth century BCE. The first Olympic Games, according to tradition, were held in 776 BCE.",
            "Greece was divided into hundreds of independent ‘poleis’ (city-states). Sparta was a military society that enslaved the native ‘helots’. Athens moved gradually from monarchy and aristocracy to rule by the people: Solon about 594 BCE abolished debt slavery and Cleisthenes in 508 to 507 BCE founded the Athenian democratic system. From the eighth to the sixth century the Greeks built colonies in Sicily, southern Italy, the Black Sea and across the Mediterranean."
          ]
        }
      },
      {
        "id": "persian-wars",
        "title": {
          "fa": "جنگ‌های ایران و یونان",
          "en": "The Persian Wars"
        },
        "text": {
          "fa": [
            "شهرهای یونانی آسیای صغیر در ۴۹۹ پیش از میلاد علیه ایران شورش کردند و آتن به آن‌ها کمک کرد. داریوش بزرگ در ۴۹۰ پیش از میلاد سپاهی به یونان فرستاد؛ آتنی‌ها به رهبری میلتیادس در ماراتن پیروز شدند. خشایارشا در ۴۸۰ پیش از میلاد با سپاه و ناوگان بزرگی حمله کرد. لئونیداس، پادشاه اسپارت، با گروهی اندک در تنگه‌ی ترموپیل ایستاد و سپس کشته شد؛ ایرانی‌ها آتن را گرفتند و سوزاندند.",
            "اما ناوگان یونانی به رهبری تمیستوکلس در نبرد دریایی سالامیس (۴۸۰ پیش از میلاد) و ارتش یونان در پلاتایا (۴۷۹) پیروز شدند و ایران از یونان عقب نشست. پس از آن آتن «اتحادیه‌ی دلوس» را (۴۷۸) رهبری کرد، ناوگان قدرتمندی ساخت و به بزرگ‌ترین شهر یونان بدل شد. این جنگ‌ها در «تاریخ» هرودوت ثبت شده‌اند و از نگاه ایرانیان و یونانیان متفاوت دیده می‌شوند؛ این نوشته به روایت یونانی‌ها که منبع اصلی است تکیه دارد."
          ],
          "en": [
            "The Greek cities of Asia Minor revolted against Iran in 499 BCE and Athens helped them. Darius the Great sent an army to Greece in 490 BCE; the Athenians under Miltiades won at Marathon. Xerxes attacked in 480 BCE with a great army and fleet. Leonidas, king of Sparta, held the pass at Thermopylae with a small force and was then killed; the Persians took and burned Athens.",
            "But the Greek fleet under Themistocles won the naval battle of Salamis (480 BCE) and the Greek army at Plataea (479), and Iran withdrew from Greece. After that Athens led the ‘Delian League’ (478), built a powerful fleet and became Greece’s greatest city. These wars are recorded in Herodotus’s ‘Histories’ and look different from the Iranian and Greek sides; this text draws on the Greek account, which is the main source."
          ]
        }
      },
      {
        "id": "classical",
        "title": {
          "fa": "دوره‌ی کلاسیک: آتن پریکلس و جنگ پلوپونز",
          "en": "The Classical period: Periclean Athens and the Peloponnesian War"
        },
        "text": {
          "fa": [
            "عصر پریکلس (حدود ۴۶۱ تا ۴۲۹ پیش از میلاد) اوج آتن بود. در دموکراسی آتنی همه‌ی شهروندان مرد آزاد در مجمع رأی می‌دادند، هرچند زنان، بردگان و بیگانگان از آن بیرون بودند. پارتنون در ۴۴۷ تا ۴۳۲ پیش از میلاد بر آکروپولیس ساخته شد. نمایشنامه‌نویسانی مانند سوفوکل، اوریپید و آریستوفان، مورخانی مانند هرودوت و توسیدید و فیلسوفانی مانند سقراط (که در ۳۹۹ پیش از میلاد محاکمه و اعدام شد) در این دوران بودند.",
            "رقابت آتن و اسپارت به جنگ پلوپونز (۴۳۱ تا ۴۰۴ پیش از میلاد) انجامید. طاعون آتن (۴۳۰ تا ۴۲۶) پریکلس را کشت و در ۴۰۴ آتن تسلیم اسپارت شد. جنگ‌های بعدی میان شهرها یونان را فرسود. افلاطون آکادمی را حدود ۳۸۷ پیش از میلاد و ارسطو لوکیون را در ۳۳۵ بنیان گذاشتند؛ اندیشه‌ی آن‌ها بر فلسفه و علم جهان تأثیر ماندگار گذاشت."
          ],
          "en": [
            "The age of Pericles (about 461 to 429 BCE) was Athens’s peak. In Athenian democracy all free male citizens voted in the assembly, though women, slaves and foreigners were excluded. The Parthenon was built on the Acropolis in 447 to 432 BCE. Playwrights such as Sophocles, Euripides and Aristophanes, historians such as Herodotus and Thucydides and philosophers such as Socrates (who was tried and executed in 399 BCE) belong to this time.",
            "The rivalry of Athens and Sparta led to the Peloponnesian War (431 to 404 BCE). The plague of Athens (430 to 426) killed Pericles and in 404 Athens surrendered to Sparta. Later wars between the cities wore Greece down. Plato founded the Academy about 387 BCE and Aristotle the Lyceum in 335; their thought left a lasting mark on the world’s philosophy and science."
          ]
        }
      },
      {
        "id": "macedon-alexander",
        "title": {
          "fa": "مقدونیه و اسکندر",
          "en": "Macedon and Alexander"
        },
        "text": {
          "fa": [
            "فیلیپ دوم، پادشاه مقدونیه (۳۵۹ تا ۳۳۶ پیش از میلاد)، ارتش نیرومندی ساخت و در نبرد خایرونیا (۳۳۸ پیش از میلاد) آتن و تب را شکست داد؛ شهرهای یونان زیر رهبری مقدونیه متحد شدند. او در ۳۳۶ پیش از میلاد ترور شد و پسرش اسکندر بیست‌ساله پادشاه شد.",
            "اسکندر در ۳۳۴ پیش از میلاد به آسیا گذشت، هخامنشیان را در گرانیکوس، ایسوس (۳۳۳) و گوگمل (۳۳۱) شکست داد، مصر و ایران را گرفت (تخت جمشید ۳۳۰) و تا رود سند رفت. او در ۳۲۳ پیش از میلاد در بابل در سی‌وسه‌سالگی درگذشت. امپراتوری‌اش میان سردارانش تقسیم شد. فتوحات او فرهنگ یونانی را از مدیترانه تا آسیای مرکزی گسترش داد و «دوران هلنیستی» را آغاز کرد."
          ],
          "en": [
            "Philip II, king of Macedon (359 to 336 BCE), built a strong army and defeated Athens and Thebes at the Battle of Chaeronea (338 BCE); the Greek cities were united under Macedonian leadership. He was assassinated in 336 BCE and his twenty-year-old son Alexander became king.",
            "Alexander crossed into Asia in 334 BCE, defeated the Achaemenids at the Granicus, Issus (333) and Gaugamela (331), took Egypt and Iran (Persepolis in 330) and went as far as the Indus. He died in Babylon in 323 BCE at the age of thirty-three. His empire was divided among his generals. His conquests spread Greek culture from the Mediterranean to Central Asia and began the ‘Hellenistic age’."
          ]
        }
      },
      {
        "id": "hellenistic-roman-byzantine",
        "title": {
          "fa": "دوران هلنیستی، روم و بیزانس",
          "en": "The Hellenistic age, Rome and Byzantium"
        },
        "text": {
          "fa": [
            "پس از اسکندر، جانشینان او (بطلمیوسیان در مصر، سلوکیان در آسیا و آنتیگونیان در مقدونیه) حکم راندند و شهرهایی مانند اسکندریه مراکز علم شدند. روم در ۱۴۶ پیش از میلاد کورنت را ویران کرد و یونان را زیر سلطه گرفت؛ ایالت «آخائیا» در ۲۷ پیش از میلاد شکل گرفت. با این حال روم فرهنگ یونانی را پذیرفت و یونانی زبان فرهنگ و تجارت در شرق ماند.",
            "امپراتور کنستانتین در ۳۳۰ میلادی قسطنطنیه را پایتخت کرد و امپراتوری شرقی روم (بیزانس)، که یونانی‌زبان و ارتدکس بود، تا ۱۴۵۳ دوام آورد. اسلاوها از قرن ششم به یونان آمدند. صلیبیان چهارم در ۱۲۰۴ قسطنطنیه را غارت کردند و ایتالیایی‌ها و فرانک‌ها بخش‌هایی از یونان را گرفتند؛ بیزانس در ۱۲۶۱ قسطنطنیه را باز پس گرفت اما ضعیف مانده بود."
          ],
          "en": [
            "After Alexander his successors (the Ptolemies in Egypt, the Seleucids in Asia and the Antigonids in Macedon) ruled and cities such as Alexandria became centres of learning. Rome destroyed Corinth in 146 BCE and brought Greece under its control; the province of ‘Achaea’ took shape in 27 BCE. Nevertheless Rome adopted Greek culture and Greek remained the language of culture and trade in the east.",
            "Emperor Constantine made Constantinople the capital in 330 CE and the eastern Roman (Byzantine) Empire, Greek-speaking and Orthodox, lasted until 1453. Slavs came to Greece from the sixth century. The Fourth Crusade sacked Constantinople in 1204 and Italians and Franks took parts of Greece; Byzantium retook Constantinople in 1261 but stayed weak."
          ]
        }
      },
      {
        "id": "ottoman-rule",
        "title": {
          "fa": "حکومت عثمانی",
          "en": "Ottoman rule"
        },
        "text": {
          "fa": [
            "عثمانی‌ها قسطنطنیه را در ۲۹ مه ۱۴۵۳، آتن را در ۱۴۵۸ و موره را در ۱۴۶۰ گرفتند. ونیزی‌ها کرت را تا ۱۶۶۹ نگه داشتند. یونانی‌ها در «ملت روم» به رهبری کلیسای ارتدکس سازمان یافتند و زبان، دین و هویتشان را حفظ کردند. تاجران یونانی در دریا و در شهرهای عثمانی ثروت اندوختند و «فاناریوت‌ها»، خاندان‌های یونانی در قسطنطنیه، مقام‌های بلند دیوانی گرفتند.",
            "ایده‌های روشنگری و انقلاب فرانسه در قرن هجدهم و آغاز قرن نوزدهم به یونانی‌ها رسید. ریگاس فرایوس، شاعر و انقلابی، که خواب یونانی آزاد را می‌دید، در ۱۷۹۸ به‌دست عثمانی اعدام شد. «فیلیکی اتریا» (انجمن دوستان) در ۱۸۱۴ در اودسا برای آزادی یونان تأسیس شد."
          ],
          "en": [
            "The Ottomans took Constantinople on 29 May 1453, Athens in 1458 and the Morea in 1460. The Venetians held Crete until 1669. The Greeks were organized in the ‘Rum millet’ under the leadership of the Orthodox Church and preserved their language, religion and identity. Greek merchants amassed wealth at sea and in Ottoman cities, and the ‘Phanariots’, Greek families in Constantinople, took high official posts.",
            "The ideas of the Enlightenment and the French Revolution reached the Greeks in the eighteenth and early nineteenth century. Rigas Feraios, a poet and revolutionary who dreamed of a free Greece, was executed by the Ottomans in 1798. The ‘Filiki Eteria’ (Society of Friends) was founded in Odessa in 1814 for the liberation of Greece."
          ]
        }
      },
      {
        "id": "independence",
        "title": {
          "fa": "جنگ استقلال و یونان نو",
          "en": "The War of Independence and modern Greece"
        },
        "text": {
          "fa": [
            "قیام در مارس ۱۸۲۱ آغاز شد (تاریخ نمادین آن ۲۵ مارس است) و در موره و جزایر گسترش یافت. جنگ با خشونت و کشتار هر دو سو همراه بود (غارت تریپولیتسا ۱۸۲۱، کشتار خیوس ۱۸۲۲). اعلامیه‌ی استقلال در ۱ ژانویه‌ی ۱۸۲۲ صادر شد. شاعر بریتانیایی لرد بایرون برای یاری یونانی‌ها آمد و در ۱۸۲۴ در میسولونگی درگذشت. نیروی دریایی بریتانیا، فرانسه و روسیه در ۲۰ اکتبر ۱۸۲۷ ناوگان عثمانی و مصر را در ناوارینو شکست داد. پروتکل لندن در ۳ فوریه‌ی ۱۸۳۰ استقلال یونان را به رسمیت شناخت.",
            "ایوانیس کاپودیستریاس نخستین رئیس دولت (۱۸۲۸ تا ۱۸۳۱) بود و ترور شد. قدرت‌های بزرگ در ۱۸۳۲ اتو از بایرن را پادشاه کردند؛ آتن در ۱۸۳۴ پایتخت شد. کشور کوچک بود و در ۱۸۶۳ با جورج اول و در جنگ‌های بالکان (۱۹۱۲ تا ۱۹۱۳) به‌تدریج بزرگ‌تر شد؛ ایونی (۱۸۶۴)، تسالی (۱۸۸۱)، مقدونیه، اپیروس و کرت (۱۹۱۳) و دودکانیز (۱۹۴۷) به آن پیوستند. نخستین المپیک نوین در ۱۸۹۶ در آتن برگزار شد."
          ],
          "en": [
            "The uprising began in March 1821 (its symbolic date is 25 March) and spread through the Morea and the islands. The war came with violence and killing on both sides (the sack of Tripolitsa in 1821, the massacre on Chios in 1822). The declaration of independence was issued on 1 January 1822. The British poet Lord Byron came to help the Greeks and died at Missolonghi in 1824. The British, French and Russian navies on 20 October 1827 defeated the Ottoman and Egyptian fleet at Navarino. The London Protocol of 3 February 1830 recognized Greek independence.",
            "Ioannis Kapodistrias was the first head of state (1828 to 1831) and was assassinated. In 1832 the great powers made Otto of Bavaria king; Athens became the capital in 1834. The country was small and gradually grew larger under George I from 1863 and in the Balkan Wars (1912 to 1913); the Ionian Islands (1864), Thessaly (1881), Macedonia, Epirus and Crete (1913) and the Dodecanese (1947) joined it. The first modern Olympic Games were held in Athens in 1896."
          ]
        }
      },
      {
        "id": "twentieth-century",
        "title": {
          "fa": "قرن بیستم: فاجعه‌ی آسیای صغیر، جنگ جهانی و جنگ داخلی",
          "en": "The twentieth century: Asia Minor, world war and civil war"
        },
        "text": {
          "fa": [
            "یونان در جنگ جهانی اول در کنار متفقین وارد شد؛ اختلاف ونیزلوس و شاه کنستانتین «شکاف ملی» را آفرید. در جنگ یونان و ترکیه (۱۹۱۹ تا ۱۹۲۲) ارتش یونان به آناتولی حمله کرد و شکست خورد؛ آتش‌سوزی ازمیر در سپتامبر ۱۹۲۲ و آوارگی صدها هزار نفر «فاجعه‌ی آسیای صغیر» نام گرفت. پیمان لوزان (۱۹۲۳) به مبادله‌ی جمعیت انجامید: حدود ۱٫۲ میلیون مسیحی ارتدکس به یونان و حدود ۴۰۰ هزار مسلمان به ترکیه رفتند. جمهوری در ۱۹۲۴ اعلام شد و در ۱۹۳۵ پادشاهی بازگشت؛ ژنرال متاکساس از ۱۹۳۶ دیکتاتور شد.",
            "یونان در ۲۸ اکتبر ۱۹۴۰ پیشنهاد تسلیم ایتالیا را رد کرد («روز نه») و ایتالیایی‌ها را از آلبانی عقب راند، اما آلمان در آوریل ۱۹۴۱ حمله کرد. اشغال (آلمان، ایتالیا و بلغارستان) با قحطی بزرگ زمستان ۱۹۴۱ تا ۱۹۴۲ و کشتار بیشتر یهودیان یونان (حدود ۸۰ درصد) همراه بود. پس از آزادسازی در اکتبر ۱۹۴۴، جنگ داخلی میان دولت و کمونیست‌ها (۱۹۴۶ تا ۱۹۴۹) هزاران کشته و آواره برجا گذاشت. یونان در ۱۹۵۲ به ناتو پیوست."
          ],
          "en": [
            "Greece entered the First World War on the Allied side; the dispute between Venizelos and King Constantine created the ‘National Schism’. In the Greco-Turkish War (1919 to 1922) the Greek army attacked into Anatolia and was defeated; the fire at Smyrna in September 1922 and the displacement of hundreds of thousands was called the ‘Asia Minor Catastrophe’. The Treaty of Lausanne (1923) led to a population exchange: about 1.2 million Orthodox Christians went to Greece and about 400,000 Muslims to Turkey. A republic was proclaimed in 1924 and in 1935 the monarchy returned; General Metaxas became dictator from 1936.",
            "On 28 October 1940 Greece rejected an Italian ultimatum (‘Ohi Day’) and drove the Italians back into Albania, but Germany attacked in April 1941. The occupation (German, Italian and Bulgarian) came with the great famine of the winter of 1941 to 1942 and the murder of most of Greece’s Jews (about 80 percent). After liberation in October 1944 a civil war between the government and the communists (1946 to 1949) left thousands dead and displaced. Greece joined NATO in 1952."
          ]
        }
      },
      {
        "id": "democracy-today",
        "title": {
          "fa": "ژنرال‌ها، دموکراسی و یونان امروز",
          "en": "The colonels, democracy and Greece today"
        },
        "text": {
          "fa": [
            "در ۲۱ آوریل ۱۹۶۷ گروهی از افسران («سرهنگ‌ها») کودتا کردند و تا ۱۹۷۴ حکومت نظامی برقرار کردند. قیام دانشکده‌ی پلی‌تکنیک آتن (۱۷ نوامبر ۱۹۷۳) سرکوب شد. با کودتای حکومت نظامی در قبرس و حمله‌ی ترکیه (ژوئیه‌ی ۱۹۷۴) حکومت سرهنگ‌ها سقوط کرد. کنستانتینوس کارامانلیس بازگشت و در همه‌پرسی ۸ دسامبر ۱۹۷۴ مردم پادشاهی را رد کردند و جمهوری برقرار شد. یونان در ۱ ژانویه‌ی ۱۹۸۱ به جامعه‌ی اروپا پیوست و در ۲۰۰۱ یورو را پذیرفت. المپیک آتن در ۲۰۰۴ برگزار شد.",
            "بحران بدهی از اواخر ۲۰۰۹ آغاز شد: یونان با بدهی سنگین و کسری بودجه روبه‌رو شد و در مه ۲۰۱۰ نخستین وام نجات را از اتحادیه‌ی اروپا و صندوق بین‌المللی پول گرفت؛ سه برنامه‌ی نجات با ریاضت اقتصادی شدید همراه بود، اقتصاد یونان حدود یک‌چهارم کوچک شد و برنامه‌ها در اوت ۲۰۱۸ پایان یافت. یونان امروز جمهوری پارلمانی با حدود ۱۰٫۴ میلیون نفر جمعیت و عضو اتحادیه‌ی اروپا و ناتو است؛ میراث باستان و گردشگری از ستون‌های اقتصادش است."
          ],
          "en": [
            "On 21 April 1967 a group of officers (the ‘colonels’) staged a coup and held military rule until 1974. The uprising at the Athens Polytechnic (17 November 1973) was suppressed. With the junta’s coup in Cyprus and Turkey’s invasion (July 1974) the colonels’ rule fell. Konstantinos Karamanlis returned and in the referendum of 8 December 1974 the people rejected the monarchy and a republic was established. Greece joined the European Community on 1 January 1981 and adopted the euro in 2001. The Athens Olympics were held in 2004.",
            "The debt crisis began in late 2009: Greece faced heavy debt and a budget deficit and in May 2010 took its first bailout loan from the European Union and the International Monetary Fund; the three bailout programmes came with severe austerity, Greece’s economy shrank by about a quarter and the programmes ended in August 2018. Today Greece is a parliamentary republic of about 10.4 million people and a member of the European Union and NATO; its ancient heritage and tourism are pillars of its economy."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -7000,
        "title": {
          "fa": "نخستین کشاورزان یونان (حدود)",
          "en": "The first farmers of Greece (about)"
        },
        "text": {
          "fa": "کشاورزی از آسیای صغیر به یونان رسید.",
          "en": "Farming reached Greece from Asia Minor."
        }
      },
      {
        "year": -3000,
        "yearText": {
          "fa": "حدود ۳۰۰۰ تا ۱۱۰۰ پ.م.",
          "en": "about 3000 to 1100 BCE"
        },
        "title": {
          "fa": "تمدن مینوسی",
          "en": "The Minoan civilization"
        },
        "text": {
          "fa": "نخستین تمدن بزرگ اروپا در کرت.",
          "en": "Europe’s first great civilization, on Crete."
        }
      },
      {
        "year": -1600,
        "yearText": {
          "fa": "حدود ۱۶۰۰ تا ۱۱۰۰ پ.م.",
          "en": "about 1600 to 1100 BCE"
        },
        "title": {
          "fa": "تمدن میکنی",
          "en": "The Mycenaean civilization"
        },
        "text": {
          "fa": "نخستین یونانی‌زبانان شناخته‌شده؛ خط «خطی ب».",
          "en": "The first known Greek speakers; the ‘Linear B’ script."
        }
      },
      {
        "year": -1200,
        "title": {
          "fa": "فروپاشی عصر مفرغ (حدود)",
          "en": "The Bronze Age collapse (about)"
        },
        "text": {
          "fa": "کاخ‌ها ویران شدند و دوران تاریک آغاز شد.",
          "en": "The palaces were destroyed and the Dark Age began."
        }
      },
      {
        "year": -800,
        "title": {
          "fa": "الفبای یونانی (حدود)",
          "en": "The Greek alphabet (about)"
        },
        "text": {
          "fa": "یونانی‌ها الفبای فنیقی را گرفتند و حروف صدادار افزودند.",
          "en": "The Greeks took the Phoenician alphabet and added vowels."
        }
      },
      {
        "year": -776,
        "title": {
          "fa": "نخستین بازی‌های المپیک (بنا بر سنت)",
          "en": "The first Olympic Games (according to tradition)"
        },
        "text": {
          "fa": "در المپیا برگزار شد.",
          "en": "Held at Olympia."
        }
      },
      {
        "year": -594,
        "title": {
          "fa": "اصلاحات سولون (حدود)",
          "en": "Solon’s reforms (about)"
        },
        "text": {
          "fa": "بردگی ناشی از بدهی در آتن لغو شد.",
          "en": "Debt slavery was abolished in Athens."
        }
      },
      {
        "year": -508,
        "title": {
          "fa": "دموکراسی آتنی",
          "en": "Athenian democracy"
        },
        "text": {
          "fa": "کلیستنس نظام دموکراسی را بنیان گذاشت.",
          "en": "Cleisthenes founded the democratic system."
        }
      },
      {
        "year": -490,
        "title": {
          "fa": "نبرد ماراتن",
          "en": "The Battle of Marathon"
        },
        "text": {
          "fa": "آتنی‌ها ارتش داریوش را شکست دادند.",
          "en": "The Athenians defeated Darius’s army."
        }
      },
      {
        "year": -480,
        "title": {
          "fa": "ترموپیل و سالامیس",
          "en": "Thermopylae and Salamis"
        },
        "text": {
          "fa": "خشایارشا آتن را گرفت، اما ناوگانش در سالامیس شکست خورد.",
          "en": "Xerxes took Athens, but his fleet was defeated at Salamis."
        }
      },
      {
        "year": -479,
        "title": {
          "fa": "نبرد پلاتایا",
          "en": "The Battle of Plataea"
        },
        "text": {
          "fa": "ایرانی‌ها از یونان عقب نشستند.",
          "en": "The Persians withdrew from Greece."
        }
      },
      {
        "year": -447,
        "yearText": {
          "fa": "۴۴۷ تا ۴۳۲ پ.م.",
          "en": "447 to 432 BCE"
        },
        "title": {
          "fa": "ساخت پارتنون",
          "en": "The building of the Parthenon"
        },
        "text": {
          "fa": "معبد آتنا بر آکروپولیس ساخته شد.",
          "en": "The temple of Athena was built on the Acropolis."
        }
      },
      {
        "year": -431,
        "yearText": {
          "fa": "۴۳۱ تا ۴۰۴ پ.م.",
          "en": "431 to 404 BCE"
        },
        "title": {
          "fa": "جنگ پلوپونز",
          "en": "The Peloponnesian War"
        },
        "text": {
          "fa": "اسپارت آتن را شکست داد.",
          "en": "Sparta defeated Athens."
        }
      },
      {
        "year": -399,
        "title": {
          "fa": "محاکمه‌ی سقراط",
          "en": "The trial of Socrates"
        },
        "text": {
          "fa": "سقراط محکوم به مرگ شد.",
          "en": "Socrates was condemned to death."
        }
      },
      {
        "year": -387,
        "title": {
          "fa": "آکادمی افلاطون (حدود)",
          "en": "Plato’s Academy (about)"
        },
        "text": {
          "fa": "نخستین مدرسه‌ی فلسفی بزرگ.",
          "en": "The first great philosophical school."
        }
      },
      {
        "year": -338,
        "title": {
          "fa": "نبرد خایرونیا",
          "en": "The Battle of Chaeronea"
        },
        "text": {
          "fa": "فیلیپ دوم شهرهای یونان را زیر رهبری مقدونیه آورد.",
          "en": "Philip II brought the Greek cities under Macedonian leadership."
        }
      },
      {
        "year": -334,
        "yearText": {
          "fa": "۳۳۴ تا ۳۲۳ پ.م.",
          "en": "334 to 323 BCE"
        },
        "title": {
          "fa": "فتوحات اسکندر",
          "en": "Alexander’s conquests"
        },
        "text": {
          "fa": "از آسیای صغیر تا رود سند.",
          "en": "From Asia Minor to the Indus."
        }
      },
      {
        "year": -323,
        "title": {
          "fa": "مرگ اسکندر",
          "en": "The death of Alexander"
        },
        "text": {
          "fa": "در بابل درگذشت و امپراتوری تقسیم شد.",
          "en": "He died in Babylon and the empire was divided."
        }
      },
      {
        "year": -146,
        "title": {
          "fa": "ویرانی کورنت",
          "en": "The destruction of Corinth"
        },
        "text": {
          "fa": "روم یونان را زیر سلطه گرفت.",
          "en": "Rome brought Greece under its control."
        }
      },
      {
        "year": 330,
        "title": {
          "fa": "قسطنطنیه پایتخت می‌شود",
          "en": "Constantinople becomes the capital"
        },
        "text": {
          "fa": "آغاز امپراتوری شرقی روم (بیزانس) یونانی‌زبان.",
          "en": "The start of the Greek-speaking eastern Roman (Byzantine) Empire."
        }
      },
      {
        "year": 1204,
        "title": {
          "fa": "جنگ صلیبی چهارم",
          "en": "The Fourth Crusade"
        },
        "text": {
          "fa": "صلیبیان قسطنطنیه را غارت کردند.",
          "en": "The Crusaders sacked Constantinople."
        }
      },
      {
        "year": 1453,
        "title": {
          "fa": "سقوط قسطنطنیه",
          "en": "The fall of Constantinople"
        },
        "text": {
          "fa": "در ۲۹ مه عثمانی‌ها شهر را گرفتند.",
          "en": "On 29 May the Ottomans took the city."
        }
      },
      {
        "year": 1458,
        "title": {
          "fa": "تصرف آتن",
          "en": "The capture of Athens"
        },
        "text": {
          "fa": "موره در ۱۴۶۰ گرفته شد.",
          "en": "The Morea was taken in 1460."
        }
      },
      {
        "year": 1798,
        "title": {
          "fa": "اعدام ریگاس فرایوس",
          "en": "The execution of Rigas Feraios"
        },
        "text": {
          "fa": "شاعر و انقلابی آرزوی یونان آزاد.",
          "en": "The poet and revolutionary who dreamed of a free Greece."
        }
      },
      {
        "year": 1814,
        "title": {
          "fa": "فیلیکی اتریا",
          "en": "The Filiki Eteria"
        },
        "text": {
          "fa": "انجمن مخفی آزادی یونان در اودسا بنیان گذاشته شد.",
          "en": "The secret society for Greek liberation was founded in Odessa."
        }
      },
      {
        "year": 1821,
        "title": {
          "fa": "آغاز قیام یونان",
          "en": "The start of the Greek uprising"
        },
        "text": {
          "fa": "تاریخ نمادین ۲۵ مارس؛ قیام در موره گسترش یافت.",
          "en": "The symbolic date is 25 March; the uprising spread in the Morea."
        }
      },
      {
        "year": 1822,
        "title": {
          "fa": "اعلامیه‌ی استقلال",
          "en": "The declaration of independence"
        },
        "text": {
          "fa": "در ۱ ژانویه در اپیداوروس صادر شد.",
          "en": "Issued at Epidaurus on 1 January."
        }
      },
      {
        "year": 1827,
        "title": {
          "fa": "نبرد ناوارینو",
          "en": "The Battle of Navarino"
        },
        "text": {
          "fa": "در ۲۰ اکتبر متحدان ناوگان عثمانی و مصر را نابود کردند.",
          "en": "On 20 October the allies destroyed the Ottoman and Egyptian fleet."
        }
      },
      {
        "year": 1830,
        "title": {
          "fa": "به رسمیت‌شناختن استقلال",
          "en": "Recognition of independence"
        },
        "text": {
          "fa": "پروتکل لندن در ۳ فوریه.",
          "en": "The London Protocol on 3 February."
        }
      },
      {
        "year": 1832,
        "title": {
          "fa": "پادشاهی اتو",
          "en": "The reign of Otto"
        },
        "text": {
          "fa": "اتو از بایرن نخستین پادشاه شد؛ آتن در ۱۸۳۴ پایتخت شد.",
          "en": "Otto of Bavaria became the first king; Athens became the capital in 1834."
        }
      },
      {
        "year": 1863,
        "title": {
          "fa": "جورج اول",
          "en": "George I"
        },
        "text": {
          "fa": "پادشاه جدید؛ ایونی در ۱۸۶۴ به یونان پیوست.",
          "en": "A new king; the Ionian Islands joined Greece in 1864."
        }
      },
      {
        "year": 1896,
        "title": {
          "fa": "نخستین المپیک نوین",
          "en": "The first modern Olympics"
        },
        "text": {
          "fa": "در آتن برگزار شد.",
          "en": "Held in Athens."
        }
      },
      {
        "year": 1912,
        "yearText": {
          "fa": "۱۹۱۲ تا ۱۹۱۳",
          "en": "1912 to 1913"
        },
        "title": {
          "fa": "جنگ‌های بالکان",
          "en": "The Balkan Wars"
        },
        "text": {
          "fa": "مقدونیه، اپیروس و کرت به یونان پیوستند.",
          "en": "Macedonia, Epirus and Crete joined Greece."
        }
      },
      {
        "year": 1919,
        "yearText": {
          "fa": "۱۹۱۹ تا ۱۹۲۲",
          "en": "1919 to 1922"
        },
        "title": {
          "fa": "جنگ یونان و ترکیه",
          "en": "The Greco-Turkish War"
        },
        "text": {
          "fa": "ارتش یونان در آناتولی شکست خورد؛ آتش‌سوزی ازمیر در سپتامبر ۱۹۲۲.",
          "en": "The Greek army was defeated in Anatolia; the fire at Smyrna in September 1922."
        }
      },
      {
        "year": 1923,
        "title": {
          "fa": "پیمان لوزان و مبادله‌ی جمعیت",
          "en": "The Treaty of Lausanne and the population exchange"
        },
        "text": {
          "fa": "حدود ۱٫۲ میلیون مسیحی به یونان و ۴۰۰ هزار مسلمان به ترکیه رفتند.",
          "en": "About 1.2 million Christians went to Greece and 400,000 Muslims to Turkey."
        }
      },
      {
        "year": 1924,
        "title": {
          "fa": "جمهوری دوم",
          "en": "The Second Republic"
        },
        "text": {
          "fa": "پادشاهی برچیده شد؛ در ۱۹۳۵ بازگشت.",
          "en": "The monarchy was abolished; it returned in 1935."
        }
      },
      {
        "year": 1936,
        "title": {
          "fa": "دیکتاتوری متاکساس",
          "en": "The Metaxas dictatorship"
        },
        "text": {
          "fa": "ژنرال متاکساس در ۴ اوت قدرت را در دست گرفت.",
          "en": "General Metaxas took power on 4 August."
        }
      },
      {
        "year": 1940,
        "title": {
          "fa": "روز «نه»",
          "en": "‘Ohi Day’"
        },
        "text": {
          "fa": "در ۲۸ اکتبر یونان پیشنهاد تسلیم ایتالیا را رد کرد.",
          "en": "On 28 October Greece rejected the Italian ultimatum."
        }
      },
      {
        "year": 1941,
        "title": {
          "fa": "اشغال یونان",
          "en": "The occupation of Greece"
        },
        "text": {
          "fa": "آلمان در آوریل حمله کرد؛ قحطی بزرگ زمستان ۱۹۴۱ تا ۱۹۴۲.",
          "en": "Germany attacked in April; the great famine of the winter of 1941 to 1942."
        }
      },
      {
        "year": 1944,
        "title": {
          "fa": "آزادسازی",
          "en": "Liberation"
        },
        "text": {
          "fa": "آلمانی‌ها در اکتبر آتن را ترک کردند.",
          "en": "The Germans left Athens in October."
        }
      },
      {
        "year": 1946,
        "yearText": {
          "fa": "۱۹۴۶ تا ۱۹۴۹",
          "en": "1946 to 1949"
        },
        "title": {
          "fa": "جنگ داخلی",
          "en": "The Civil War"
        },
        "text": {
          "fa": "نبرد دولت و کمونیست‌ها.",
          "en": "The struggle between the government and the communists."
        }
      },
      {
        "year": 1952,
        "title": {
          "fa": "عضویت در ناتو",
          "en": "Joining NATO"
        },
        "text": {
          "fa": "یونان و ترکیه با هم به ناتو پیوستند.",
          "en": "Greece and Turkey joined NATO together."
        }
      },
      {
        "year": 1967,
        "yearText": {
          "fa": "۱۹۶۷ تا ۱۹۷۴",
          "en": "1967 to 1974"
        },
        "title": {
          "fa": "حکومت سرهنگ‌ها",
          "en": "The rule of the colonels"
        },
        "text": {
          "fa": "کودتا در ۲۱ آوریل.",
          "en": "A coup on 21 April."
        }
      },
      {
        "year": 1973,
        "title": {
          "fa": "قیام پلی‌تکنیک",
          "en": "The Polytechnic uprising"
        },
        "text": {
          "fa": "دانشجویان در ۱۷ نوامبر علیه حکومت نظامی قیام کردند.",
          "en": "Students rose against the junta on 17 November."
        }
      },
      {
        "year": 1974,
        "title": {
          "fa": "سقوط سرهنگ‌ها و همه‌پرسی",
          "en": "The fall of the colonels and the referendum"
        },
        "text": {
          "fa": "پس از بحران قبرس حکومت سقوط کرد؛ جمهوری در ۸ دسامبر برقرار شد.",
          "en": "The regime fell after the Cyprus crisis; the republic was established on 8 December."
        }
      },
      {
        "year": 1981,
        "title": {
          "fa": "پیوستن به جامعه‌ی اروپا",
          "en": "Joining the European Community"
        },
        "text": {
          "fa": "در ۱ ژانویه عضو شد.",
          "en": "Joined on 1 January."
        }
      },
      {
        "year": 2001,
        "title": {
          "fa": "ورود به منطقه‌ی یورو",
          "en": "Joining the eurozone"
        },
        "text": {
          "fa": "در ۱ ژانویه یورو پذیرفته شد.",
          "en": "The euro was adopted on 1 January."
        }
      },
      {
        "year": 2004,
        "title": {
          "fa": "المپیک آتن",
          "en": "The Athens Olympics"
        },
        "text": {
          "fa": "بازی‌های المپیک تابستانی در آتن.",
          "en": "The Summer Olympic Games in Athens."
        }
      },
      {
        "year": 2009,
        "yearText": {
          "fa": "۲۰۰۹ تا ۲۰۱۸",
          "en": "2009 to 2018"
        },
        "title": {
          "fa": "بحران بدهی",
          "en": "The debt crisis"
        },
        "text": {
          "fa": "سه برنامه‌ی نجات با ریاضت اقتصادی؛ پایان در اوت ۲۰۱۸.",
          "en": "Three bailout programmes with austerity; they ended in August 2018."
        }
      }
    ]
  }
};
