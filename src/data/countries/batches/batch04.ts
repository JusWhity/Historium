import { CountrySection, TimelineEvent } from '../../../types';

/** Batch 04: full histories (sections + timeline). */
export interface DetailedHistory04 {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const BATCH_04_HISTORIES: Record<string, DetailedHistory04> = {
  "turkey": {
    "sections": [
      {
        "id": "ancient-anatolia",
        "title": {
          "fa": "آناتولی باستان: گوبکلی‌تپه، هیتی‌ها و تروا",
          "en": "Ancient Anatolia: Göbekli Tepe, the Hittites and Troy"
        },
        "text": {
          "fa": [
            "آناتولی از کهن‌ترین سرزمین‌های مسکون جهان است. گوبکلی‌تپه (حدود ۹۵۰۰ پیش از میلاد) را، با ستون‌های سنگی بزرگ و نقش‌برجسته‌ی جانوران، کهن‌ترین مجموعه‌ی بزرگ آیینی شناخته‌شده می‌دانند، پیش از آنکه کشاورزی و سفال پدید آید. چاتال‌هویوک (حدود ۷۵۰۰ تا ۵۷۰۰ پیش از میلاد) یکی از نخستین شهرک‌های بزرگ کشاورزان بود.",
            "هیتی‌ها (حدود ۱۶۵۰ تا ۱۱۸۰ پیش از میلاد) با پایتخت هاتوسا امپراتوری‌ای در آناتولی ساختند، از نخستین کاربران آهن بودند و با مصر (نبرد قادش) رقابت کردند؛ پیمان صلح آن‌ها با رامسس دوم کهن‌ترین پیمان صلح مکتوب شناخته‌شده است. شهر تروا در شمال‌غرب، که با افسانه‌ی جنگ تروا در ایلیاد هومر پیوند دارد، از حدود ۳۰۰۰ تا ۱۱۸۰ پیش از میلاد آباد بود. پس از آن فریگیه‌ها و لیدیه (با پادشاه کرزوس و نخستین سکه‌ها حدود ۶۰۰ پیش از میلاد) و شهرهای یونانی ایونی مانند میلتوس و افسوس شکوفا شدند."
          ],
          "en": [
            "Anatolia is among the oldest inhabited lands in the world. Göbekli Tepe (about 9500 BCE), with its great stone pillars and animal reliefs, is regarded as the oldest known large ritual complex, from before farming and pottery appeared. Çatalhöyük (about 7500 to 5700 BCE) was one of the first large farming settlements.",
            "The Hittites (about 1650 to 1180 BCE), with their capital at Hattusa, built an empire in Anatolia, were among the first users of iron and competed with Egypt (the Battle of Kadesh); their peace treaty with Ramesses II is the oldest known written peace treaty. The city of Troy in the north-west, linked with the legend of the Trojan War in Homer’s Iliad, was inhabited from about 3000 to 1180 BCE. After that the Phrygians and Lydia (with king Croesus and the first coins about 600 BCE) and the Greek Ionian cities such as Miletus and Ephesus flourished."
          ]
        }
      },
      {
        "id": "persia-rome",
        "title": {
          "fa": "ایران، اسکندر و روم",
          "en": "Iran, Alexander and Rome"
        },
        "text": {
          "fa": [
            "کوروش بزرگ در ۵۴۶ پیش از میلاد لیدیه را گرفت و آناتولی بخشی از شاهنشاهی هخامنشی شد. اسکندر مقدونی در ۳۳۴ پیش از میلاد به آناتولی آمد و پس از او دولت‌های هلنیستی مانند پرگامون حکم راندند. روم از ۱۳۳ پیش از میلاد آناتولی را به‌تدریج گرفت و ایالت «آسیا» را ساخت.",
            "در دوران روم مسیحیت در آناتولی گسترش یافت: پولس رسول از تارسوس بود و نخستین کلیساها در افسس و انطاکیه شکل گرفتند. شورای نیقیه (۳۲۵ میلادی)، در ایزنیک امروز، آموزه‌ی بنیادین مسیحی را تدوین کرد. امپراتور کنستانتین در ۳۳۰ میلادی قسطنطنیه را پایتخت کرد."
          ],
          "en": [
            "Cyrus the Great took Lydia in 546 BCE and Anatolia became part of the Achaemenid Empire. Alexander of Macedon came to Anatolia in 334 BCE and after him Hellenistic states such as Pergamon ruled. From 133 BCE Rome gradually took Anatolia and made the province of ‘Asia’.",
            "In Roman times Christianity spread in Anatolia: the apostle Paul was from Tarsus and the first churches took shape at Ephesus and Antioch. The Council of Nicaea (325 CE), in today’s İznik, formulated the basic Christian creed. Emperor Constantine made Constantinople the capital in 330 CE."
          ]
        }
      },
      {
        "id": "byzantium",
        "title": {
          "fa": "بیزانس و آیاصوفیه",
          "en": "Byzantium and Hagia Sophia"
        },
        "text": {
          "fa": [
            "پس از سقوط روم غربی (۴۷۶)، امپراتوری شرقی، که ما بیزانس می‌نامیم، با پایتخت قسطنطنیه ادامه یافت. یوستینیانوس اول (۵۲۷ تا ۵۶۵) قوانین رومی را گرد آورد و کلیسای بزرگ آیاصوفیه را در ۵۳۷ تکمیل کرد. بیزانس قرن‌ها با ایران ساسانی (جنگ‌های بزرگ در ۶۰۲ تا ۶۲۸) و بعد با خلافت اسلامی رقابت کرد.",
            "قسطنطنیه یکی از بزرگ‌ترین و ثروتمندترین شهرهای جهان بود. صلیبیان چهارم آن را در ۱۲۰۴ غارت کردند و بیزانس هرگز به قدرت پیشین بازنگشت؛ بیزانسی‌ها شهر را در ۱۲۶۱ بازپس گرفتند، اما دولت ضعیف مانده بود."
          ],
          "en": [
            "After the fall of the Western Roman Empire (476), the eastern empire, which we call Byzantium, continued with its capital at Constantinople. Justinian I (527 to 565) gathered Roman law and completed the great church of Hagia Sophia in 537. For centuries Byzantium competed with Sasanian Iran (the great wars of 602 to 628) and then with the Islamic caliphate.",
            "Constantinople was one of the largest and richest cities in the world. The Fourth Crusaders sacked it in 1204 and Byzantium never returned to its former power; the Byzantines retook the city in 1261, but the state stayed weak."
          ]
        }
      },
      {
        "id": "seljuks",
        "title": {
          "fa": "سلجوقیان و بیگ‌نشین‌های ترک",
          "en": "The Seljuks and the Turkish beyliks"
        },
        "text": {
          "fa": [
            "ترکان سلجوقی در ۲۶ اوت ۱۰۷۱ در نبرد ملازگرد ارتش بیزانس را شکست دادند و امپراتور رومانوس دیوگن را اسیر کردند. پس از آن گروه‌های ترک‌زبان به آناتولی آمدند و سلطنت سلجوقیان روم (حدود ۱۰۷۷ تا ۱۳۰۸) با پایتخت قونیه شکل گرفت. فرهنگ آن دوره فارسی‌زبان بود و مولوی در قونیه می‌زیست.",
            "مغول‌ها در نبرد کوسه‌داغ (۱۲۴۳) سلجوقیان روم را شکست دادند و آناتولی به بیگ‌نشین‌های کوچک (بیلیک) تقسیم شد. یکی از آن‌ها بیگ‌نشین عثمان بود. به‌تدریج بیشتر مردم آناتولی ترک‌زبان و مسلمان شدند، هرچند یونانی‌ها، ارمنی‌ها و گروه‌های دیگر هم ماندند."
          ],
          "en": [
            "On 26 August 1071 the Seljuk Turks defeated the Byzantine army at the Battle of Manzikert and captured Emperor Romanos Diogenes. After that Turkish-speaking groups came to Anatolia and the Seljuk Sultanate of Rum (about 1077 to 1308) took shape with its capital at Konya. The culture of the period was Persian-speaking and Rumi lived in Konya.",
            "The Mongols defeated the Seljuks of Rum at the Battle of Köse Dağ (1243) and Anatolia was divided into small beyliks. One of them was the beylik of Osman. Gradually most people in Anatolia became Turkish-speaking and Muslim, though Greeks, Armenians and other groups also remained."
          ]
        }
      },
      {
        "id": "ottoman-rise",
        "title": {
          "fa": "برآمدن عثمانی و فتح قسطنطنیه",
          "en": "The rise of the Ottomans and the conquest of Constantinople"
        },
        "text": {
          "fa": [
            "عثمان اول بنیان‌گذار بیگ‌نشین عثمانی در حدود ۱۲۹۹ دانسته می‌شود. جانشینانش بورسا (۱۳۲۶) و ادرنه را گرفتند و به بالکان رسیدند؛ ادرنه حدود ۱۳۶۹ پایتخت شد. پیروزی در نبرد کوزوو (۱۳۸۹) و نیکوپولیس (۱۳۹۶) بالکان را زیر سلطه آورد. تیمور در ۱۴۰۲ در نبرد آنکارا بایزید اول را اسیر کرد و دولت دچار آشوب شد، اما بازسازی شد.",
            "محمد دوم، که با نام «فاتح» شناخته می‌شود، پس از محاصره‌ای ۵۳‌روزه در ۲۹ مه ۱۴۵۳ قسطنطنیه را با توپ‌های بزرگ گرفت و بیزانس را پایان داد. شهر «استانبول» پایتخت عثمانی شد. آیاصوفیه به مسجد تبدیل شد."
          ],
          "en": [
            "Osman I is regarded as the founder of the Ottoman beylik about 1299. His successors took Bursa (1326) and Edirne and reached the Balkans; Edirne became the capital about 1369. Victory at the Battle of Kosovo (1389) and Nicopolis (1396) brought the Balkans under their control. Timur captured Bayezid I at the Battle of Ankara in 1402 and the state fell into turmoil, but it recovered.",
            "Mehmed II, known as ‘the Conqueror’, after a 53-day siege took Constantinople with great cannon on 29 May 1453 and ended Byzantium. The city, ‘Istanbul’, became the Ottoman capital. Hagia Sophia was turned into a mosque."
          ]
        }
      },
      {
        "id": "ottoman-golden",
        "title": {
          "fa": "اوج عثمانی: سلیم و سلیمان",
          "en": "The Ottoman peak: Selim and Suleiman"
        },
        "text": {
          "fa": [
            "سلیم اول (۱۵۱۲ تا ۱۵۲۰) صفویان را در چالدران (۱۵۱۴) و مملوکان را در ۱۵۱۶ تا ۱۵۱۷ شکست داد و شام، حجاز و مصر را گرفت؛ سلطان عثمانی از آن پس مدعی خلافت اسلامی شد. سلیمان اول («قانونی»، ۱۵۲۰ تا ۱۵۶۶) رودس (۱۵۲۲) و بخش بزرگی از مجارستان را (مُهاچ ۱۵۲۶) گرفت و وین را در ۱۵۲۹ محاصره کرد. امپراتوری از الجزایر تا عراق و از مجارستان تا یمن رسید.",
            "سلیمان قوانین امپراتوری را گرد آورد و معمار سینان مسجد سلیمانیه (۱۵۵۰ تا ۱۵۵۸) و مسجد سلیمیه در ادرنه (۱۵۶۹ تا ۱۵۷۵) را ساخت. نظام «ملت» به غیرمسلمانان (مسیحیان و یهودیان) خودگردانی دینی داد. ناوگان عثمانی در نبرد لپانتو (۱۵۷۱) از اتحاد مسیحی شکست خورد، اما بازسازی شد."
          ],
          "en": [
            "Selim I (1512 to 1520) defeated the Safavids at Chaldiran (1514) and the Mamluks in 1516 to 1517 and took Syria, the Hejaz and Egypt; from then the Ottoman sultan claimed the Islamic caliphate. Suleiman I (‘the Magnificent’, 1520 to 1566) took Rhodes (1522) and much of Hungary (Mohács 1526) and besieged Vienna in 1529. The empire reached from Algeria to Iraq and from Hungary to Yemen.",
            "Suleiman gathered the empire’s laws and the architect Sinan built the Süleymaniye Mosque (1550 to 1558) and the Selimiye Mosque in Edirne (1569 to 1575). The ‘millet’ system gave non-Muslims (Christians and Jews) religious self-government. The Ottoman fleet was defeated by the Christian alliance at Lepanto (1571) but was rebuilt."
          ]
        }
      },
      {
        "id": "decline-reform",
        "title": {
          "fa": "افول، اصلاحات و جنگ‌های بالکان",
          "en": "Decline, reform and the Balkan Wars"
        },
        "text": {
          "fa": [
            "پس از شکست در محاصره‌ی دوم وین (۱۶۸۳)، پیمان کارلوویتس (۱۶۹۹) بخش‌های بزرگی از مجارستان را از عثمانی گرفت. روسیه با پیمان کوچک‌کاینارجه (۱۷۷۴) به دریای سیاه رسید. در قرن نوزدهم یونان (۱۸۳۰)، صربستان، رومانی و بلغارستان استقلال یا خودمختاری گرفتند و عثمانی «مرد بیمار اروپا» نام گرفت.",
            "«تنظیمات» (از ۱۸۳۹) اصلاحاتی برای برابری شهروندان و نوسازی ارتش و اداره آورد. قانون اساسی ۱۸۷۶ کوتاه‌مدت بود و سلطان عبدالحمید دوم از ۱۸۷۸ خودکامه حکم راند. انقلاب «ترکان جوان» در ۱۹۰۸ قانون اساسی را بازگرداند. جنگ‌های بالکان (۱۹۱۲ تا ۱۹۱۳) بیشتر خاک اروپایی عثمانی را از دست داد."
          ],
          "en": [
            "After the defeat in the second siege of Vienna (1683), the Treaty of Karlowitz (1699) took large parts of Hungary from the Ottomans. With the Treaty of Küçük Kaynarca (1774) Russia reached the Black Sea. In the nineteenth century Greece (1830), Serbia, Romania and Bulgaria gained independence or autonomy and the Ottoman Empire was called the ‘sick man of Europe’.",
            "The ‘Tanzimat’ (from 1839) brought reforms for equality of citizens and modernization of the army and administration. The constitution of 1876 was short-lived and Sultan Abdulhamid II ruled autocratically from 1878. The ‘Young Turk’ revolution of 1908 restored the constitution. The Balkan Wars (1912 to 1913) lost most of the Ottoman territory in Europe."
          ]
        }
      },
      {
        "id": "ww1-independence",
        "title": {
          "fa": "جنگ جهانی اول، کشتار ارامنه و جنگ استقلال",
          "en": "The First World War, the Armenian genocide and the War of Independence"
        },
        "text": {
          "fa": [
            "عثمانی در ۱۹۱۴ در کنار آلمان وارد جنگ جهانی اول شد. در نبرد گالیپولی (۱۹۱۵ تا ۱۹۱۶) نیروهای متفقین شکست خوردند. در ۱۹۱۵ تا ۱۹۱۶ دولت عثمانی ارامنه‌ی آناتولی را اخراج و قتل‌عام کرد؛ بیش از یک میلیون ارمنی کشته شدند (برآورد معمول حدود ۱ تا ۱٫۵ میلیون). بیشتر پژوهشگران تاریخ و بسیاری از کشورها آن را «نسل‌کشی ارامنه» می‌نامند. دولت ترکیه این عنوان را نمی‌پذیرد و درباره‌ی ماهیت و شمار کشته‌ها اختلاف نظر دارد. آشوری‌ها و یونانیان پونتی هم قربانی شدند.",
            "پس از شکست عثمانی، پیمان سور (۱۰ اوت ۱۹۲۰) خاک آن را میان متفقین تقسیم کرد و یونان در ۱۹۱۹ ازمیر را گرفت. مصطفی کمال، افسر ارتش، «جنگ استقلال» (۱۹۱۹ تا ۱۹۲۳) را رهبری کرد، یونانی‌ها را در ۱۹۲۲ بیرون راند و پیمان لوزان (۲۴ ژوئیه‌ی ۱۹۲۳) مرزهای ترکیه‌ی امروز را به رسمیت شناخت. سلطنت در ۱ نوامبر ۱۹۲۲ لغو شد و جمهوری در ۲۹ اکتبر ۱۹۲۳ اعلام شد."
          ],
          "en": [
            "The Ottoman Empire entered the First World War in 1914 alongside Germany. At Gallipoli (1915 to 1916) the Allied forces were defeated. In 1915 to 1916 the Ottoman government deported and massacred the Armenians of Anatolia; more than a million Armenians were killed (the usual estimate is about 1 to 1.5 million). Most historians and many countries call it the ‘Armenian genocide’. The Turkish government does not accept this term and disputes the nature and number of the deaths. Assyrians and Pontic Greeks were also victims.",
            "After the Ottoman defeat, the Treaty of Sèvres (10 August 1920) divided its land among the Allies and Greece took Smyrna in 1919. Mustafa Kemal, an army officer, led the ‘War of Independence’ (1919 to 1923), drove the Greeks out in 1922 and the Treaty of Lausanne (24 July 1923) recognized the borders of today’s Turkey. The sultanate was abolished on 1 November 1922 and the republic was proclaimed on 29 October 1923."
          ]
        }
      },
      {
        "id": "republic",
        "title": {
          "fa": "جمهوری ترکیه از آتاتورک تا امروز",
          "en": "The Republic of Turkey from Atatürk to today"
        },
        "text": {
          "fa": [
            "مصطفی کمال، که در ۱۹۳۴ نام «آتاتورک» (پدر ترک‌ها) گرفت، از ۱۹۲۳ تا مرگش در ۱۰ نوامبر ۱۹۳۸ رئیس‌جمهور بود. اصلاحاتش دولت را سکولار کرد: لغو خلافت (۳ مارس ۱۹۲۴)، قانون مدنی نو (۱۹۲۶)، الفبای لاتین (۱۹۲۸) و حق رأی زنان (۱۹۳۰ در انتخابات محلی و ۱۹۳۴ سراسری). ترکیه در جنگ جهانی دوم تا ۱۹۴۵ بی‌طرف ماند، در ۱۹۴۶ به نظام چندحزبی رسید و در ۱۹۵۲ به ناتو پیوست.",
            "ارتش در ۱۹۶۰، ۱۹۷۱ و ۱۹۸۰ دخالت یا کودتا کرد. ترکیه در ۱۹۷۴ به قبرس حمله کرد و منازعه‌ی کردی با «پ‌ک‌ک» از ۱۹۸۴ هزاران کشته داشت. ترکیه در ۱۹۹۹ نامزد عضویت در اتحادیه‌ی اروپا شد. حزب عدالت و توسعه از ۲۰۰۲ در قدرت است. تلاش برای کودتا در ۱۵ ژوئیه‌ی ۲۰۱۶ ناکام ماند و در پی آن بازداشت‌ها و تغییر به نظام ریاستی (همه‌پرسی ۲۰۱۷) رخ داد. زلزله‌ی ۶ فوریه‌ی ۲۰۲۳ در جنوب‌شرق بیش از ۵۰ هزار کشته در ترکیه داشت. ترکیه امروز با حدود ۸۵ میلیون نفر یکی از بزرگ‌ترین کشورهای منطقه است."
          ],
          "en": [
            "Mustafa Kemal, who took the name ‘Atatürk’ (father of the Turks) in 1934, was president from 1923 until his death on 10 November 1938. His reforms made the state secular: the abolition of the caliphate (3 March 1924), a new civil code (1926), the Latin alphabet (1928) and votes for women (1930 in local elections and 1934 nationally). Turkey stayed neutral in the Second World War until 1945, reached a multi-party system in 1946 and joined NATO in 1952.",
            "The army intervened or staged coups in 1960, 1971 and 1980. Turkey invaded Cyprus in 1974 and the Kurdish conflict with the PKK from 1984 cost thousands of lives. Turkey became a candidate for membership of the European Union in 1999. The Justice and Development Party has been in power since 2002. An attempted coup on 15 July 2016 failed and was followed by arrests and a change to a presidential system (referendum of 2017). The earthquake of 6 February 2023 in the south-east killed more than 50,000 people in Turkey. Today, with about 85 million people, Turkey is one of the largest countries in the region."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -9500,
        "title": {
          "fa": "گوبکلی‌تپه (حدود)",
          "en": "Göbekli Tepe (about)"
        },
        "text": {
          "fa": "کهن‌ترین مجموعه‌ی بزرگ آیینی شناخته‌شده.",
          "en": "The oldest known large ritual complex."
        }
      },
      {
        "year": -7500,
        "yearText": {
          "fa": "حدود ۷۵۰۰ تا ۵۷۰۰ پ.م.",
          "en": "about 7500 to 5700 BCE"
        },
        "title": {
          "fa": "چاتال‌هویوک",
          "en": "Çatalhöyük"
        },
        "text": {
          "fa": "یکی از نخستین شهرک‌های بزرگ کشاورزان.",
          "en": "One of the first large farming settlements."
        }
      },
      {
        "year": -1650,
        "yearText": {
          "fa": "حدود ۱۶۵۰ تا ۱۱۸۰ پ.م.",
          "en": "about 1650 to 1180 BCE"
        },
        "title": {
          "fa": "امپراتوری هیتی",
          "en": "The Hittite Empire"
        },
        "text": {
          "fa": "پایتخت هاتوسا؛ نخستین پیمان صلح مکتوب با مصر (حدود ۱۲۵۹).",
          "en": "Capital Hattusa; the first written peace treaty with Egypt (about 1259)."
        }
      },
      {
        "year": -1180,
        "title": {
          "fa": "ویرانی تروا (حدود)",
          "en": "The destruction of Troy (about)"
        },
        "text": {
          "fa": "شهر مرتبط با افسانه‌ی جنگ تروا.",
          "en": "The city linked with the legend of the Trojan War."
        }
      },
      {
        "year": -600,
        "title": {
          "fa": "نخستین سکه‌ها در لیدیه (حدود)",
          "en": "The first coins in Lydia (about)"
        },
        "text": {
          "fa": "پادشاه کرزوس به ثروت مشهور بود.",
          "en": "King Croesus was famed for his wealth."
        }
      },
      {
        "year": -546,
        "title": {
          "fa": "کوروش لیدیه را می‌گیرد",
          "en": "Cyrus takes Lydia"
        },
        "text": {
          "fa": "آناتولی بخشی از شاهنشاهی هخامنشی شد.",
          "en": "Anatolia became part of the Achaemenid Empire."
        }
      },
      {
        "year": -334,
        "title": {
          "fa": "اسکندر به آناتولی می‌آید",
          "en": "Alexander comes to Anatolia"
        },
        "text": {
          "fa": "آغاز دوران هلنیستی در منطقه.",
          "en": "The start of the Hellenistic age in the region."
        }
      },
      {
        "year": -133,
        "title": {
          "fa": "ایالت رومی آسیا",
          "en": "The Roman province of Asia"
        },
        "text": {
          "fa": "روم آناتولی را به‌تدریج گرفت.",
          "en": "Rome gradually took Anatolia."
        }
      },
      {
        "year": 325,
        "title": {
          "fa": "شورای نیقیه",
          "en": "The Council of Nicaea"
        },
        "text": {
          "fa": "در ایزنیک امروز آموزه‌ی مسیحی تدوین شد.",
          "en": "In today’s İznik the Christian creed was formulated."
        }
      },
      {
        "year": 330,
        "title": {
          "fa": "قسطنطنیه پایتخت می‌شود",
          "en": "Constantinople becomes the capital"
        },
        "text": {
          "fa": "کنستانتین شهر را بنیان گذاشت.",
          "en": "Constantine founded the city."
        }
      },
      {
        "year": 537,
        "title": {
          "fa": "آیاصوفیه",
          "en": "Hagia Sophia"
        },
        "text": {
          "fa": "یوستینیانوس اول کلیسا را تکمیل کرد.",
          "en": "Justinian I completed the church."
        }
      },
      {
        "year": 1071,
        "title": {
          "fa": "نبرد ملازگرد",
          "en": "The Battle of Manzikert"
        },
        "text": {
          "fa": "در ۲۶ اوت سلجوقیان بیزانس را شکست دادند.",
          "en": "On 26 August the Seljuks defeated Byzantium."
        }
      },
      {
        "year": 1077,
        "title": {
          "fa": "سلجوقیان روم",
          "en": "The Seljuks of Rum"
        },
        "text": {
          "fa": "سلطنت با پایتخت قونیه آغاز شد (حدود).",
          "en": "The sultanate began with its capital at Konya (about)."
        }
      },
      {
        "year": 1204,
        "title": {
          "fa": "جنگ صلیبی چهارم",
          "en": "The Fourth Crusade"
        },
        "text": {
          "fa": "قسطنطنیه غارت شد.",
          "en": "Constantinople was sacked."
        }
      },
      {
        "year": 1243,
        "title": {
          "fa": "نبرد کوسه‌داغ",
          "en": "The Battle of Köse Dağ"
        },
        "text": {
          "fa": "مغول‌ها سلجوقیان روم را شکست دادند.",
          "en": "The Mongols defeated the Seljuks of Rum."
        }
      },
      {
        "year": 1299,
        "title": {
          "fa": "بیگ‌نشین عثمانی (حدود)",
          "en": "The Ottoman beylik (about)"
        },
        "text": {
          "fa": "عثمان اول به‌عنوان بنیان‌گذار شناخته می‌شود.",
          "en": "Osman I is regarded as the founder."
        }
      },
      {
        "year": 1326,
        "title": {
          "fa": "فتح بورسا",
          "en": "The conquest of Bursa"
        },
        "text": {
          "fa": "نخستین پایتخت عثمانی.",
          "en": "The first Ottoman capital."
        }
      },
      {
        "year": 1389,
        "title": {
          "fa": "نبرد کوزوو",
          "en": "The Battle of Kosovo"
        },
        "text": {
          "fa": "عثمانی‌ها بالکان را زیر سلطه آوردند.",
          "en": "The Ottomans brought the Balkans under their control."
        }
      },
      {
        "year": 1402,
        "title": {
          "fa": "نبرد آنکارا",
          "en": "The Battle of Ankara"
        },
        "text": {
          "fa": "تیمور بایزید اول را اسیر کرد.",
          "en": "Timur captured Bayezid I."
        }
      },
      {
        "year": 1453,
        "title": {
          "fa": "فتح قسطنطنیه",
          "en": "The conquest of Constantinople"
        },
        "text": {
          "fa": "در ۲۹ مه محمد دوم بیزانس را پایان داد.",
          "en": "On 29 May Mehmed II ended Byzantium."
        }
      },
      {
        "year": 1514,
        "title": {
          "fa": "نبرد چالدران",
          "en": "The Battle of Chaldiran"
        },
        "text": {
          "fa": "سلیم اول صفویان را شکست داد.",
          "en": "Selim I defeated the Safavids."
        }
      },
      {
        "year": 1517,
        "title": {
          "fa": "فتح مصر و ادعای خلافت",
          "en": "The conquest of Egypt and the claim to the caliphate"
        },
        "text": {
          "fa": "مملوکان شکست خوردند.",
          "en": "The Mamluks were defeated."
        }
      },
      {
        "year": 1526,
        "title": {
          "fa": "نبرد مُهاچ",
          "en": "The Battle of Mohács"
        },
        "text": {
          "fa": "سلیمان بخش بزرگی از مجارستان را گرفت.",
          "en": "Suleiman took a large part of Hungary."
        }
      },
      {
        "year": 1529,
        "title": {
          "fa": "محاصره‌ی وین",
          "en": "The siege of Vienna"
        },
        "text": {
          "fa": "نخستین محاصره‌ی ناکام وین.",
          "en": "The first, unsuccessful siege of Vienna."
        }
      },
      {
        "year": 1550,
        "yearText": {
          "fa": "۱۵۵۰ تا ۱۵۵۸",
          "en": "1550 to 1558"
        },
        "title": {
          "fa": "مسجد سلیمانیه",
          "en": "The Süleymaniye Mosque"
        },
        "text": {
          "fa": "معمار سینان آن را ساخت.",
          "en": "The architect Sinan built it."
        }
      },
      {
        "year": 1571,
        "title": {
          "fa": "نبرد لپانتو",
          "en": "The Battle of Lepanto"
        },
        "text": {
          "fa": "ناوگان عثمانی شکست خورد.",
          "en": "The Ottoman fleet was defeated."
        }
      },
      {
        "year": 1683,
        "title": {
          "fa": "محاصره‌ی دوم وین",
          "en": "The second siege of Vienna"
        },
        "text": {
          "fa": "شکست عثمانی؛ آغاز عقب‌نشینی از اروپای مرکزی.",
          "en": "An Ottoman defeat; the start of the retreat from central Europe."
        }
      },
      {
        "year": 1699,
        "title": {
          "fa": "پیمان کارلوویتس",
          "en": "The Treaty of Karlowitz"
        },
        "text": {
          "fa": "مجارستان از دست رفت.",
          "en": "Hungary was lost."
        }
      },
      {
        "year": 1774,
        "title": {
          "fa": "پیمان کوچک‌کاینارجه",
          "en": "The Treaty of Küçük Kaynarca"
        },
        "text": {
          "fa": "روسیه به دریای سیاه رسید.",
          "en": "Russia reached the Black Sea."
        }
      },
      {
        "year": 1839,
        "title": {
          "fa": "آغاز تنظیمات",
          "en": "The start of the Tanzimat"
        },
        "text": {
          "fa": "اصلاحات برای برابری و نوسازی.",
          "en": "Reforms for equality and modernization."
        }
      },
      {
        "year": 1876,
        "title": {
          "fa": "قانون اساسی",
          "en": "The constitution"
        },
        "text": {
          "fa": "نخستین قانون اساسی عثمانی؛ کوتاه‌مدت بود.",
          "en": "The first Ottoman constitution; it was short-lived."
        }
      },
      {
        "year": 1908,
        "title": {
          "fa": "انقلاب ترکان جوان",
          "en": "The Young Turk revolution"
        },
        "text": {
          "fa": "قانون اساسی بازگردانده شد.",
          "en": "The constitution was restored."
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
          "fa": "بیشتر خاک اروپایی از دست رفت.",
          "en": "Most of the European territory was lost."
        }
      },
      {
        "year": 1915,
        "title": {
          "fa": "کشتار ارامنه و نبرد گالیپولی",
          "en": "The Armenian genocide and the Battle of Gallipoli"
        },
        "text": {
          "fa": "بیش از یک میلیون ارمنی کشته شدند؛ ترکیه این عنوان را نمی‌پذیرد. عثمانی در گالیپولی پیروز شد.",
          "en": "More than a million Armenians were killed; Turkey does not accept this term. The Ottomans won at Gallipoli."
        }
      },
      {
        "year": 1919,
        "yearText": {
          "fa": "۱۹۱۹ تا ۱۹۲۳",
          "en": "1919 to 1923"
        },
        "title": {
          "fa": "جنگ استقلال",
          "en": "The War of Independence"
        },
        "text": {
          "fa": "مصطفی کمال یونانی‌ها را در ۱۹۲۲ بیرون راند.",
          "en": "Mustafa Kemal drove the Greeks out in 1922."
        }
      },
      {
        "year": 1920,
        "title": {
          "fa": "پیمان سور",
          "en": "The Treaty of Sèvres"
        },
        "text": {
          "fa": "در ۱۰ اوت خاک عثمانی تقسیم شد؛ هرگز اجرا نشد.",
          "en": "On 10 August Ottoman land was divided; it was never carried out."
        }
      },
      {
        "year": 1923,
        "title": {
          "fa": "پیمان لوزان و جمهوری",
          "en": "The Treaty of Lausanne and the republic"
        },
        "text": {
          "fa": "پیمان در ۲۴ ژوئیه؛ جمهوری در ۲۹ اکتبر.",
          "en": "The treaty on 24 July; the republic on 29 October."
        }
      },
      {
        "year": 1924,
        "title": {
          "fa": "لغو خلافت",
          "en": "The abolition of the caliphate"
        },
        "text": {
          "fa": "در ۳ مارس خلافت برچیده شد.",
          "en": "On 3 March the caliphate was abolished."
        }
      },
      {
        "year": 1928,
        "title": {
          "fa": "الفبای لاتین",
          "en": "The Latin alphabet"
        },
        "text": {
          "fa": "جایگزین خط عربی شد.",
          "en": "It replaced the Arabic script."
        }
      },
      {
        "year": 1934,
        "title": {
          "fa": "حق رأی زنان و نام آتاتورک",
          "en": "Votes for women and the name Atatürk"
        },
        "text": {
          "fa": "زنان در انتخابات سراسری رأی دادند؛ مصطفی کمال نام آتاتورک گرفت.",
          "en": "Women voted in national elections; Mustafa Kemal took the name Atatürk."
        }
      },
      {
        "year": 1938,
        "title": {
          "fa": "مرگ آتاتورک",
          "en": "The death of Atatürk"
        },
        "text": {
          "fa": "در ۱۰ نوامبر درگذشت.",
          "en": "He died on 10 November."
        }
      },
      {
        "year": 1946,
        "title": {
          "fa": "نظام چندحزبی",
          "en": "The multi-party system"
        },
        "text": {
          "fa": "نخستین انتخابات رقابتی.",
          "en": "The first competitive elections."
        }
      },
      {
        "year": 1952,
        "title": {
          "fa": "عضویت در ناتو",
          "en": "Joining NATO"
        },
        "text": {
          "fa": "ترکیه و یونان با هم عضو شدند.",
          "en": "Turkey and Greece joined together."
        }
      },
      {
        "year": 1960,
        "title": {
          "fa": "نخستین کودتای نظامی",
          "en": "The first military coup"
        },
        "text": {
          "fa": "کودتاهای بعدی در ۱۹۷۱ و ۱۹۸۰ رخ داد.",
          "en": "Later coups followed in 1971 and 1980."
        }
      },
      {
        "year": 1974,
        "title": {
          "fa": "حمله به قبرس",
          "en": "The invasion of Cyprus"
        },
        "text": {
          "fa": "ترکیه پس از کودتای حکومت نظامی در قبرس حمله کرد.",
          "en": "Turkey invaded after the junta’s coup in Cyprus."
        }
      },
      {
        "year": 1984,
        "title": {
          "fa": "آغاز درگیری پ‌ک‌ک",
          "en": "The start of the PKK conflict"
        },
        "text": {
          "fa": "درگیری مسلحانه با هزاران کشته.",
          "en": "An armed conflict with thousands of dead."
        }
      },
      {
        "year": 1999,
        "title": {
          "fa": "نامزدی عضویت در اتحادیه‌ی اروپا",
          "en": "Candidacy for the European Union"
        },
        "text": {
          "fa": "ترکیه در هلسینکی نامزد شناخته شد.",
          "en": "Turkey was recognized as a candidate at Helsinki."
        }
      },
      {
        "year": 2002,
        "title": {
          "fa": "پیروزی حزب عدالت و توسعه",
          "en": "The victory of the Justice and Development Party"
        },
        "text": {
          "fa": "این حزب از آن زمان در قدرت است.",
          "en": "The party has been in power since then."
        }
      },
      {
        "year": 2016,
        "title": {
          "fa": "تلاش ناکام برای کودتا",
          "en": "The failed coup attempt"
        },
        "text": {
          "fa": "۱۵ ژوئیه؛ پس از آن بازداشت‌های گسترده.",
          "en": "15 July; wide-scale arrests followed."
        }
      },
      {
        "year": 2023,
        "title": {
          "fa": "زلزله‌ی ۶ فوریه",
          "en": "The earthquake of 6 February"
        },
        "text": {
          "fa": "بیش از ۵۰ هزار کشته در ترکیه.",
          "en": "More than 50,000 dead in Turkey."
        }
      }
    ]
  }
};
