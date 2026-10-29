import { CountrySection, TimelineEvent } from '../../../types';

/** Batch 06: full histories (sections + timeline). */
export interface DetailedHistory06 {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const BATCH_06_HISTORIES: Record<string, DetailedHistory06> = {
  "australia": {
    "sections": [
      {
        "id": "first-australians",
        "title": {
          "fa": "نخستین استرالیایی‌ها",
          "en": "The First Australians"
        },
        "text": {
          "fa": [
            "مردمان بومی استرالیا (آبوریجین‌ها) دست‌کم ۵۰ هزار و شاید حدود ۶۵ هزار سال پیش از راه آسیای جنوب شرقی با قایق به قاره رسیدند؛ زمان دقیق آن محل بحث است و تکیه بر شواهدی مانند مکان باستانی ماجدبه‌بی در سرزمین شمالی دارد. این‌ها از کهن‌ترین فرهنگ‌های زنده‌ی جهان‌اند. پیش از رسیدن اروپایی‌ها صدها ملت و حدود ۲۵۰ زبان در قاره وجود داشت.",
            "بومیان با «آتش‌کاری» (سوزاندن کنترل‌شده‌ی بوته‌زارها) و شیوه‌های دقیق مدیریت زمین زندگی می‌کردند. در بود جیم (ویکتوریا) سامانه‌های پیچیده‌ی پرورش مارماهی ساخته شد که هزاران سال قدمت دارد. «زمان رؤیا» روایت‌های دینی درباره‌ی پیدایش زمین و ارتباط مردم با آن است. نقاشی‌های صخره‌ای در کاکادو و مورجوگا از کهن‌ترین هنرهای جهان‌اند. مردم جزایر تنگه‌ی تورس، با ریشه‌ی ملانزیایی، فرهنگ جداگانه‌ی خود را دارند."
          ],
          "en": [
            "The Indigenous peoples of Australia (Aboriginal Australians) reached the continent by boat from South-East Asia at least 50,000 and perhaps about 65,000 years ago; the exact time is debated and rests on evidence such as the ancient site of Madjedbebe in the Northern Territory. They are among the oldest living cultures in the world. Before the Europeans arrived there were hundreds of nations and about 250 languages on the continent.",
            "Indigenous people lived with ‘fire-stick farming’ (controlled burning of scrub) and careful methods of land management. At Budj Bim (Victoria) complex systems for farming eels were built that are thousands of years old. The ‘Dreaming’ is the religious account of the origin of the land and people’s connection to it. The rock paintings at Kakadu and Murujuga are among the oldest art in the world. The people of the Torres Strait Islands, of Melanesian origin, have their own distinct culture."
          ]
        }
      },
      {
        "id": "european-arrival",
        "title": {
          "fa": "رسیدن اروپایی‌ها",
          "en": "The arrival of the Europeans"
        },
        "text": {
          "fa": [
            "نخستین اروپایی ثبت‌شده‌ای که به استرالیا رسید ویلم یانسون هلندی بود که در ۱۶۰۶ به شمال شبه‌جزیره‌ی کیپ یورک رسید. دیرک هارتوگ در ۱۶۱۶ به غرب و آبل تاسمن در ۱۶۴۲ به تاسمانی («سرزمین ون دیمن») رسیدند. هلندی‌ها آن را «نیوهالند» نامیدند، اما چون سرزمین را بی‌ارزش می‌دانستند مستعمره نساختند.",
            "جیمز کوک، دریانورد بریتانیایی، با کشتی «اندیور» در ۲۹ آوریل ۱۷۷۰ در خلیج بوتانی پیاده شد و سواحل شرقی را نقشه‌برداری کرد. او در ۲۲ اوت ۱۷۷۰ در جزیره‌ی پاسشن سواحل شرقی را به نام بریتانیا «نیوسات ولز» نامید. بریتانیا، با این استدلال که سرزمین «ترا نولیوس» (بی‌صاحب) است، به حقوق مالکیت و حاکمیت بومیان بی‌اعتنا بود؛ این دکترین تا ۱۹۹۲ در حقوق استرالیا ماند."
          ],
          "en": [
            "The first recorded European to reach Australia was the Dutchman Willem Janszoon, who reached the north of the Cape York Peninsula in 1606. Dirk Hartog reached the west in 1616 and Abel Tasman reached Tasmania (‘Van Diemen’s Land’) in 1642. The Dutch called it ‘New Holland’ but did not colonize it, since they thought the land worthless.",
            "James Cook, a British navigator, landed at Botany Bay in the ‘Endeavour’ on 29 April 1770 and charted the east coast. On 22 August 1770 on Possession Island he named the east coast ‘New South Wales’ for Britain. Britain, arguing that the land was ‘terra nullius’ (nobody’s land), disregarded Indigenous rights of ownership and sovereignty; this doctrine stayed in Australian law until 1992."
          ]
        }
      },
      {
        "id": "convict-colony",
        "title": {
          "fa": "مستعمره‌ی زندانیان",
          "en": "The convict colony"
        },
        "text": {
          "fa": [
            "پس از از دست رفتن مستعمره‌های آمریکایی، بریتانیا که زندان‌هایش پر بود تصمیم گرفت زندانیان را به استرالیا بفرستد. «ناوگان نخست»، یازده کشتی با حدود هزار زندانی و نظامی، به فرماندهی آرتور فیلیپ در ژانویه‌ی ۱۷۸۸ به خلیج بوتانی رسید و در ۲۶ ژانویه در سیدنی کوو مستقر شد؛ این روز بعدها «روز استرالیا» نام گرفت و بسیاری از بومیان آن را «روز هجوم» یا «روز بقا» می‌نامند.",
            "از ۱۷۸۸ تا ۱۸۶۸ حدود ۱۶۰ هزار زندانی به استرالیا تبعید شدند. بسیاری پس از اتمام محکومیت کشاورز یا صنعتگر شدند. مستعمره‌های تازه شکل گرفتند: تاسمانی (۱۸۰۳)، استرالیای غربی (۱۸۲۹)، استرالیای جنوبی (۱۸۳۶، مستعمره‌ای برای مهاجران آزاد) و ویکتوریا و کوئینزلند بعدها. پشم گوسفند مهم‌ترین صادرات شد. لاکلان مک‌کوآری، فرماندار از ۱۸۱۰ تا ۱۸۲۱، به ساختن شهر و راه و به ادغام زندانیان آزادشده کمک کرد."
          ],
          "en": [
            "After losing the American colonies, Britain, whose prisons were full, decided to send convicts to Australia. The ‘First Fleet’, eleven ships with about a thousand convicts and marines under Arthur Phillip, reached Botany Bay in January 1788 and on 26 January settled at Sydney Cove; this day was later named ‘Australia Day’ and many Indigenous people call it ‘Invasion Day’ or ‘Survival Day’.",
            "From 1788 to 1868 about 160,000 convicts were transported to Australia. Many became farmers or craftsmen after serving their sentences. New colonies took shape: Tasmania (1803), Western Australia (1829), South Australia (1836, a colony for free settlers) and later Victoria and Queensland. Wool became the most important export. Lachlan Macquarie, governor from 1810 to 1821, helped build towns and roads and to integrate freed convicts."
          ]
        }
      },
      {
        "id": "frontier",
        "title": {
          "fa": "مرز استعمار و ازدست‌رفتن سرزمین",
          "en": "The frontier and the loss of land"
        },
        "text": {
          "fa": [
            "گسترش مستعمره‌ها برای بومیان فاجعه بود: از دست رفتن زمین، بیماری‌های تازه مانند آبله (از ۱۷۸۹) و خشونت. جمعیت بومی در دهه‌های پس از ۱۷۸۸ به‌شدت کاهش یافت. مقاومت‌هایی رخ داد، مانند پمولوی در منطقه‌ی سیدنی (که در ۱۸۰۲ کشته شد) و «جنگ سیاه» در تاسمانی. کشتارهای بسیاری رخ داد؛ در ۱۸۳۸ در مایال کریک هفت نفر از مهاجران به‌خاطر قتل بومیان اعدام شدند، یکی از معدود مواردی که مجازات شد.",
            "در قرن نوزدهم و بیستم «هیئت‌های حفاظت از آبوریجین‌ها» زندگی بومیان را به‌شدت کنترل می‌کردند و آنان را به «ایستگاه‌ها» و حاشیه‌ها می‌راندند. از حدود ۱۹۱۰ تا دهه‌ی ۱۹۷۰ دولت‌ها کودکان بسیاری از بومیان را از خانواده‌ها جدا کردند («نسل‌های دزدیده‌شده»). این سیاست‌ها اثر عمیق و ماندگاری بر جامعه‌ی بومی داشته است."
          ],
          "en": [
            "The expansion of the colonies was a catastrophe for Indigenous people: loss of land, new diseases such as smallpox (from 1789) and violence. The Indigenous population fell sharply in the decades after 1788. There was resistance, such as Pemulwuy in the Sydney region (who was killed in 1802) and the ‘Black War’ in Tasmania. Many massacres took place; in 1838 at Myall Creek seven settlers were hanged for murdering Aboriginal people, one of the few cases in which anyone was punished.",
            "In the nineteenth and twentieth centuries ‘Aboriginal Protection Boards’ controlled Indigenous people’s lives tightly and pushed them to ‘stations’ and the margins. From about 1910 to the 1970s governments took many Indigenous children from their families (the ‘Stolen Generations’). These policies have had a deep and lasting effect on Indigenous communities."
          ]
        }
      },
      {
        "id": "gold-self-government",
        "title": {
          "fa": "تب طلا و خودگردانی",
          "en": "The gold rush and self-government"
        },
        "text": {
          "fa": [
            "کشف طلا در نیوساوت ولز و ویکتوریا در ۱۸۵۱ موجی بزرگ از مهاجران، از جمله چینی‌ها، آورد و جمعیت استرالیا در یک دهه تقریباً سه برابر شد. در ۳ دسامبر ۱۸۵۴ معدن‌چیان ویکتوریا که به مالیات و مجوزهای معدن اعتراض داشتند، در «استوکید اورکا» با سربازان درگیر شدند؛ ده‌ها نفر کشته شدند و رهبرانی مانند پیتر لالور بعدها در سیاست راه یافتند. در ۱۸۶۱ در لمبینگ فلت درگیری‌های ضدچینی رخ داد.",
            "مستعمره‌ها در دهه‌ی ۱۸۵۰ خودگردانی گرفتند و مجلس منتخب (و در برخی شکل‌ها حق رأی گسترده‌ی مردان) شکل گرفت. ساکنان بسیاری با وجود برنامه‌های اکتشافی (مانند سفر برک و ویلز، ۱۸۶۰ تا ۱۸۶۱ که هر دو در آن مردند) به درون قاره می‌رفتند و دامداری گسترش یافت. ند کلی، قانون‌شکن مشهور، در ۱۸۸۰ اعدام شد و به نماد مقاومت در برابر قدرت تبدیل شد."
          ],
          "en": [
            "The discovery of gold in New South Wales and Victoria in 1851 brought a great wave of migrants, among them Chinese, and Australia’s population nearly tripled in a decade. On 3 December 1854 Victorian miners who protested the tax and mining licences clashed with soldiers at the ‘Eureka Stockade’; dozens were killed and leaders such as Peter Lalor later entered politics. In 1861 anti-Chinese riots took place at Lambing Flat.",
            "The colonies gained self-government in the 1850s and elected parliaments (and in some, wide voting rights for men) took shape. Many settlers went into the interior, with exploring expeditions (such as the Burke and Wills expedition of 1860 to 1861, in which both men died), and pastoral farming spread. Ned Kelly, a famous outlaw, was hanged in 1880 and became a symbol of resistance to authority."
          ]
        }
      },
      {
        "id": "federation",
        "title": {
          "fa": "فدراسیون و «استرالیای سفید»",
          "en": "Federation and ‘White Australia’"
        },
        "text": {
          "fa": [
            "شش مستعمره‌ی استرالیا پس از یک دهه گفت‌وگو و همه‌پرسی‌ها در ۱ ژانویه‌ی ۱۹۰۱ به «کشورهای مشترک‌المنافع استرالیا» پیوستند. ادموند بارتون نخستین نخست‌وزیر شد. قانون اساسی دولت فدرال با دو مجلس و ایالت‌ها ساخت و هنوز پادشاه بریتانیا رئیس کشور بود. شهر کانبرا برای پایتخت جدید در ۱۹۱۳ بنیان گذاشته شد.",
            "قانون محدودیت مهاجرت ۱۹۰۱ پایه‌ی سیاست «استرالیای سفید» شد که تقریباً مهاجرت غیراروپایی را ممنوع می‌کرد؛ سیاستی نژادپرستانه که تا دهه‌ی ۱۹۶۰ و ۱۹۷۰ برچیده نشد. زنان سفیدپوست در ۱۹۰۲ در انتخابات فدرال حق رأی گرفتند، یکی از نخستین کشورها. اما بومیان از رأی و حقوق بسیاری محروم ماندند. «مزد زندگی» و حداقل دستمزد (۱۹۰۷) از ابتکارهای اجتماعی استرالیا بود."
          ],
          "en": [
            "After a decade of discussion and referendums the six Australian colonies joined as the ‘Commonwealth of Australia’ on 1 January 1901. Edmund Barton became the first prime minister. The constitution built a federal government with two houses and states, and the British monarch was still head of state. The city of Canberra was founded in 1913 for the new capital.",
            "The Immigration Restriction Act of 1901 became the basis of the ‘White Australia’ policy, which almost banned non-European immigration; a racist policy that was not dismantled until the 1960s and 1970s. White women gained the vote in federal elections in 1902, among the first countries. But Indigenous people remained excluded from the vote and many rights. The ‘living wage’ and minimum wage (1907) were among Australia’s social innovations."
          ]
        }
      },
      {
        "id": "world-wars",
        "title": {
          "fa": "جنگ‌های جهانی",
          "en": "The world wars"
        },
        "text": {
          "fa": [
            "استرالیا در ۱۹۱۴ در کنار بریتانیا وارد جنگ جهانی اول شد؛ حدود ۴۱۶ هزار نفر از پنج میلیون نفر جمعیت داوطلب شدند. سربازان استرالیایی و نیوزیلندی («آنزاک») در ۲۵ آوریل ۱۹۱۵ در گالیپولی پیاده شدند؛ عملیاتی ناکام که به نماد ملی بدل شد و ۲۵ آوریل «روز آنزاک» است. حدود ۶۰ هزار استرالیایی در جنگ کشته شدند. دو همه‌پرسی خدمت اجباری (۱۹۱۶ و ۱۹۱۷) رد شد. ژنرال جان موناش در ۱۹۱۸ سپاه استرالیا را فرماندهی کرد.",
            "رکود بزرگ در دهه‌ی ۱۹۳۰ بیکاری را تا حدود ۳۰ درصد بالا برد. در جنگ جهانی دوم، پس از سقوط سنگاپور (فوریه‌ی ۱۹۴۲) و بمباران داروین (۱۹ فوریه‌ی ۱۹۴۲) که نخستین حمله‌ی مستقیم به خاک استرالیا بود، نخست‌وزیر جان کرتین به آمریکا روی آورد و به ژاپن در گینه‌ی نو و در «مسیر کوکودا» مقاومت شد. استرالیا در ۱۹۴۲ قانون وست‌مینستر را پذیرفت و در ۱۹۵۱ پیمان «انزوس» را با آمریکا و نیوزیلند امضا کرد."
          ],
          "en": [
            "Australia entered the First World War alongside Britain in 1914; about 416,000 of a population of five million volunteered. Australian and New Zealand soldiers (the ‘Anzacs’) landed at Gallipoli on 25 April 1915, an unsuccessful operation that became a national symbol, and 25 April is ‘Anzac Day’. About 60,000 Australians died in the war. Two conscription referendums (1916 and 1917) were rejected. General John Monash commanded the Australian Corps in 1918.",
            "The Great Depression in the 1930s raised unemployment to about 30 percent. In the Second World War, after the fall of Singapore (February 1942) and the bombing of Darwin (19 February 1942), the first direct attack on Australian soil, Prime Minister John Curtin turned to America and the Japanese were resisted in New Guinea and on the ‘Kokoda Track’. Australia adopted the Statute of Westminster in 1942 and in 1951 signed the ANZUS treaty with America and New Zealand."
          ]
        }
      },
      {
        "id": "postwar-rights",
        "title": {
          "fa": "پس از جنگ: مهاجرت، چندفرهنگی و حقوق بومیان",
          "en": "After the war: immigration, multiculturalism and Indigenous rights"
        },
        "text": {
          "fa": [
            "پس از ۱۹۴۵ برنامه‌ی بزرگ مهاجرت («جمعیت بپذیر یا نابود شو») میلیون‌ها نفر را، نخست از بریتانیا و اروپا و بعد از جنوب‌شرق اروپا، خاورمیانه و آسیا، آورد. سیاست «استرالیای سفید» از ۱۹۶۶ تا ۱۹۷۳ برچیده شد و استرالیا به جامعه‌ای چندفرهنگی تبدیل شد. رابرت منزیس (۱۹۳۹ تا ۱۹۴۱ و ۱۹۴۹ تا ۱۹۶۶) طولانی‌ترین دوره‌ی نخست‌وزیری را داشت. در ۱۱ نوامبر ۱۹۷۵ فرماندار کل، جان کر، دولت گاف ویتلم را برکنار کرد؛ بحران قانون اساسی بی‌سابقه.",
            "همه‌پرسی ۲۷ مه ۱۹۶۷ با حدود ۹۱ درصد رأی مثبت بومیان را در سرشماری گنجاند و به دولت فدرال اجازه‌ی وضع قوانین برای آن‌ها داد. «قانون حقوق زمین» سرزمین شمالی (۱۹۷۶) نخستین قانون بزرگ زمین بومیان بود. در ۳ ژوئن ۱۹۹۲، در پرونده‌ی ادی مابو از جزایر تنگه‌ی تورس، دیوان عالی «ترا نولیوس» را رد کرد و «حق مالکیت بومی» را به رسمیت شناخت؛ قانون مالکیت بومی در ۱۹۹۳ آن را تدوین کرد. گزارش «آن‌ها را به خانه بیاورید» (۱۹۹۷) نسل‌های دزدیده‌شده را بررسی کرد و کوین راد در ۱۳ فوریه‌ی ۲۰۰۸ به‌نام دولت از آن‌ها عذرخواهی کرد."
          ],
          "en": [
            "After 1945 a great immigration programme (‘populate or perish’) brought millions of people, first from Britain and Europe and then from south-eastern Europe, the Middle East and Asia. The ‘White Australia’ policy was dismantled from 1966 to 1973 and Australia became a multicultural society. Robert Menzies (1939 to 1941 and 1949 to 1966) had the longest term as prime minister. On 11 November 1975 the governor-general, John Kerr, dismissed the government of Gough Whitlam, an unprecedented constitutional crisis.",
            "The referendum of 27 May 1967, with about 91 percent in favour, included Indigenous people in the census and allowed the federal government to make laws for them. The Northern Territory Land Rights Act (1976) was the first major Indigenous land law. On 3 June 1992, in the case of Eddie Mabo from the Torres Strait Islands, the High Court rejected ‘terra nullius’ and recognized ‘native title’; the Native Title Act in 1993 codified it. The ‘Bringing Them Home’ report (1997) examined the Stolen Generations and Kevin Rudd apologized to them on behalf of the government on 13 February 2008."
          ]
        }
      },
      {
        "id": "modern-australia",
        "title": {
          "fa": "استرالیای امروز",
          "en": "Australia today"
        },
        "text": {
          "fa": [
            "استرالیا کشوری با حدود ۲۷ میلیون نفر جمعیت است که بیشترشان در شهرهای ساحلی شرق و جنوب‌شرق زندگی می‌کنند. اقتصاد آن بر صادرات معدنی (سنگ آهن، زغال‌سنگ، گاز) به آسیا، کشاورزی، آموزش و خدمات استوار است. بیش از یک‌چهارم جمعیت در خارج به دنیا آمده است. المپیک سیدنی در ۲۰۰۰ برگزار شد. در ۶ نوامبر ۱۹۹۹ همه‌پرسی جمهوری‌شدن با حدود ۵۵ درصد رأی منفی رد شد؛ پادشاه بریتانیا هنوز رئیس کشور است.",
            "آتش‌سوزی‌های بزرگ «شنبه‌ی سیاه» (۷ فوریه‌ی ۲۰۰۹) و «تابستان سیاه» (۲۰۱۹ تا ۲۰۲۰) میلیون‌ها هکتار را سوزاند و تغییر اقلیم را به بحثی مهم بدل کرد. استرالیا در ۲۰۲۱ پیمان «آوکوس» را با بریتانیا و آمریکا امضا کرد. در ۱۴ اکتبر ۲۰۲۳ همه‌پرسی «صدا» برای ایجاد نهاد مشورتی بومیان در پارلمان با حدود ۶۰ درصد رأی منفی رد شد. نسبت به حقوق، آشتی و تاریخ بومیان بحث در جامعه ادامه دارد."
          ],
          "en": [
            "Australia is a country of about 27 million people, most of whom live in the coastal cities of the east and south-east. Its economy rests on mineral exports (iron ore, coal, gas) to Asia, agriculture, education and services. More than a quarter of the population was born overseas. The Sydney Olympics were held in 2000. On 6 November 1999 a referendum on becoming a republic was rejected with about 55 percent voting no; the British monarch is still head of state.",
            "The great ‘Black Saturday’ fires (7 February 2009) and ‘Black Summer’ (2019 to 2020) burned millions of hectares and made climate change an important debate. In 2021 Australia signed the ‘AUKUS’ pact with Britain and America. On 14 October 2023 the ‘Voice’ referendum, to create an Indigenous advisory body in parliament, was rejected with about 60 percent voting no. The debate over Indigenous rights, reconciliation and history continues in society."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -65000,
        "yearText": {
          "fa": "دست‌کم ۵۰ تا ۶۵ هزار سال پیش",
          "en": "at least 50,000 to 65,000 years ago"
        },
        "title": {
          "fa": "رسیدن نخستین استرالیایی‌ها",
          "en": "The arrival of the first Australians"
        },
        "text": {
          "fa": "مردمان بومی با قایق از آسیای جنوب شرقی آمدند؛ زمان دقیق محل بحث است.",
          "en": "Indigenous peoples came by boat from South-East Asia; the exact time is debated."
        }
      },
      {
        "year": 1606,
        "title": {
          "fa": "ویلم یانسون",
          "en": "Willem Janszoon"
        },
        "text": {
          "fa": "نخستین اروپایی ثبت‌شده در استرالیا.",
          "en": "The first recorded European in Australia."
        }
      },
      {
        "year": 1616,
        "title": {
          "fa": "دیرک هارتوگ",
          "en": "Dirk Hartog"
        },
        "text": {
          "fa": "به سواحل غرب رسید.",
          "en": "He reached the west coast."
        }
      },
      {
        "year": 1642,
        "title": {
          "fa": "آبل تاسمن",
          "en": "Abel Tasman"
        },
        "text": {
          "fa": "به تاسمانی (سرزمین ون دیمن) رسید.",
          "en": "He reached Tasmania (Van Diemen’s Land)."
        }
      },
      {
        "year": 1770,
        "title": {
          "fa": "جیمز کوک",
          "en": "James Cook"
        },
        "text": {
          "fa": "در ۲۹ آوریل در خلیج بوتانی پیاده شد و سواحل شرقی را به نام بریتانیا ادعا کرد.",
          "en": "On 29 April he landed at Botany Bay and claimed the east coast for Britain."
        }
      },
      {
        "year": 1788,
        "title": {
          "fa": "ناوگان نخست",
          "en": "The First Fleet"
        },
        "text": {
          "fa": "در ۲۶ ژانویه در سیدنی کوو مستعمره‌ی زندانیان بنیان گذاشته شد.",
          "en": "On 26 January the convict colony was founded at Sydney Cove."
        }
      },
      {
        "year": 1789,
        "title": {
          "fa": "همه‌گیری آبله",
          "en": "The smallpox epidemic"
        },
        "text": {
          "fa": "بیماری شمار زیادی از بومیان منطقه‌ی سیدنی را کشت.",
          "en": "The disease killed many Indigenous people in the Sydney area."
        }
      },
      {
        "year": 1802,
        "title": {
          "fa": "کشته‌شدن پمولوی",
          "en": "The death of Pemulwuy"
        },
        "text": {
          "fa": "رهبر مقاومت بومی در منطقه‌ی سیدنی کشته شد.",
          "en": "The leader of Indigenous resistance in the Sydney area was killed."
        }
      },
      {
        "year": 1803,
        "title": {
          "fa": "استقرار در تاسمانی",
          "en": "Settlement in Tasmania"
        },
        "text": {
          "fa": "هوبارت در ۱۸۰۴ بنیان گذاشته شد.",
          "en": "Hobart was founded in 1804."
        }
      },
      {
        "year": 1829,
        "title": {
          "fa": "مستعمره‌ی رود سوان",
          "en": "The Swan River Colony"
        },
        "text": {
          "fa": "آغاز استرالیای غربی.",
          "en": "The start of Western Australia."
        }
      },
      {
        "year": 1836,
        "title": {
          "fa": "استرالیای جنوبی",
          "en": "South Australia"
        },
        "text": {
          "fa": "مستعمره‌ای برای مهاجران آزاد؛ ادلاید بنیان گذاشته شد.",
          "en": "A colony for free settlers; Adelaide was founded."
        }
      },
      {
        "year": 1838,
        "title": {
          "fa": "کشتار مایال کریک",
          "en": "The Myall Creek massacre"
        },
        "text": {
          "fa": "هفت مهاجر به‌خاطر قتل بومیان اعدام شدند.",
          "en": "Seven settlers were hanged for murdering Aboriginal people."
        }
      },
      {
        "year": 1840,
        "title": {
          "fa": "پایان تبعید به نیوساوت ولز",
          "en": "The end of transportation to New South Wales"
        },
        "text": {
          "fa": "تبعید به استرالیای غربی تا ۱۸۶۸ ادامه یافت.",
          "en": "Transportation to Western Australia lasted until 1868."
        }
      },
      {
        "year": 1851,
        "title": {
          "fa": "تب طلا",
          "en": "The gold rush"
        },
        "text": {
          "fa": "کشف طلا در نیوساوت ولز و ویکتوریا موج مهاجرت آورد.",
          "en": "The discovery of gold in New South Wales and Victoria brought a wave of migration."
        }
      },
      {
        "year": 1854,
        "title": {
          "fa": "استوکید اورکا",
          "en": "The Eureka Stockade"
        },
        "text": {
          "fa": "در ۳ دسامبر معدن‌چیان با سربازان درگیر شدند.",
          "en": "On 3 December miners clashed with soldiers."
        }
      },
      {
        "year": 1856,
        "title": {
          "fa": "خودگردانی مستعمره‌ها",
          "en": "Self-government of the colonies"
        },
        "text": {
          "fa": "نخستین مجلس‌های منتخب در دهه‌ی ۱۸۵۰.",
          "en": "The first elected parliaments in the 1850s."
        }
      },
      {
        "year": 1860,
        "yearText": {
          "fa": "۱۸۶۰ تا ۱۸۶۱",
          "en": "1860 to 1861"
        },
        "title": {
          "fa": "سفر برک و ویلز",
          "en": "The Burke and Wills expedition"
        },
        "text": {
          "fa": "نخستین گذر از قاره از جنوب به شمال؛ هر دو رهبر مردند.",
          "en": "The first crossing of the continent from south to north; both leaders died."
        }
      },
      {
        "year": 1880,
        "title": {
          "fa": "اعدام ند کلی",
          "en": "The hanging of Ned Kelly"
        },
        "text": {
          "fa": "قانون‌شکن مشهور در ۱۱ نوامبر اعدام شد.",
          "en": "The famous outlaw was hanged on 11 November."
        }
      },
      {
        "year": 1901,
        "title": {
          "fa": "فدراسیون",
          "en": "Federation"
        },
        "text": {
          "fa": "در ۱ ژانویه شش مستعمره کشور مشترک‌المنافع استرالیا را ساختند.",
          "en": "On 1 January the six colonies formed the Commonwealth of Australia."
        }
      },
      {
        "year": 1902,
        "title": {
          "fa": "حق رأی زنان",
          "en": "Votes for women"
        },
        "text": {
          "fa": "زنان سفیدپوست در انتخابات فدرال رأی دادند.",
          "en": "White women voted in federal elections."
        }
      },
      {
        "year": 1913,
        "title": {
          "fa": "تأسیس کانبرا",
          "en": "The founding of Canberra"
        },
        "text": {
          "fa": "پایتخت جدید ساخته شد.",
          "en": "The new capital was built."
        }
      },
      {
        "year": 1915,
        "title": {
          "fa": "گالیپولی",
          "en": "Gallipoli"
        },
        "text": {
          "fa": "در ۲۵ آوریل سربازان آنزاک پیاده شدند؛ روز آنزاک.",
          "en": "On 25 April the Anzac troops landed; Anzac Day."
        }
      },
      {
        "year": 1916,
        "yearText": {
          "fa": "۱۹۱۶ و ۱۹۱۷",
          "en": "1916 and 1917"
        },
        "title": {
          "fa": "همه‌پرسی‌های خدمت اجباری",
          "en": "The conscription referendums"
        },
        "text": {
          "fa": "هر دو رد شد.",
          "en": "Both were rejected."
        }
      },
      {
        "year": 1918,
        "title": {
          "fa": "نبرد هامل",
          "en": "The Battle of Hamel"
        },
        "text": {
          "fa": "ژنرال جان موناش سپاه استرالیا را به پیروزی رساند.",
          "en": "General John Monash led the Australian Corps to victory."
        }
      },
      {
        "year": 1932,
        "title": {
          "fa": "پل بندر سیدنی",
          "en": "The Sydney Harbour Bridge"
        },
        "text": {
          "fa": "در میانه‌ی رکود بزرگ افتتاح شد.",
          "en": "Opened in the middle of the Great Depression."
        }
      },
      {
        "year": 1942,
        "title": {
          "fa": "بمباران داروین",
          "en": "The bombing of Darwin"
        },
        "text": {
          "fa": "در ۱۹ فوریه نخستین حمله‌ی مستقیم به خاک استرالیا.",
          "en": "On 19 February, the first direct attack on Australian soil."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "برنامه‌ی بزرگ مهاجرت",
          "en": "The great immigration programme"
        },
        "text": {
          "fa": "وزارت مهاجرت تأسیس شد.",
          "en": "The Department of Immigration was set up."
        }
      },
      {
        "year": 1951,
        "title": {
          "fa": "پیمان انزوس",
          "en": "The ANZUS treaty"
        },
        "text": {
          "fa": "اتحاد دفاعی استرالیا، نیوزیلند و آمریکا.",
          "en": "The defence alliance of Australia, New Zealand and America."
        }
      },
      {
        "year": 1956,
        "title": {
          "fa": "المپیک ملبورن",
          "en": "The Melbourne Olympics"
        },
        "text": {
          "fa": "نخستین المپیک در نیمکره‌ی جنوبی.",
          "en": "The first Olympics in the southern hemisphere."
        }
      },
      {
        "year": 1967,
        "title": {
          "fa": "همه‌پرسی ۱۹۶۷",
          "en": "The 1967 referendum"
        },
        "text": {
          "fa": "در ۲۷ مه حدود ۹۱ درصد به گنجاندن بومیان در سرشماری رأی دادند.",
          "en": "On 27 May about 91 percent voted to include Indigenous people in the census."
        }
      },
      {
        "year": 1973,
        "title": {
          "fa": "پایان استرالیای سفید",
          "en": "The end of White Australia"
        },
        "text": {
          "fa": "برچیدن سیاست محدودیت نژادی مهاجرت.",
          "en": "The racial limits on immigration were dismantled."
        }
      },
      {
        "year": 1975,
        "title": {
          "fa": "برکناری دولت ویتلم",
          "en": "The dismissal of the Whitlam government"
        },
        "text": {
          "fa": "در ۱۱ نوامبر فرماندار کل نخست‌وزیر را برکنار کرد.",
          "en": "On 11 November the governor-general dismissed the prime minister."
        }
      },
      {
        "year": 1976,
        "title": {
          "fa": "قانون حقوق زمین سرزمین شمالی",
          "en": "The Northern Territory Land Rights Act"
        },
        "text": {
          "fa": "نخستین قانون بزرگ زمین بومیان.",
          "en": "The first major Indigenous land law."
        }
      },
      {
        "year": 1986,
        "title": {
          "fa": "قانون استرالیا",
          "en": "The Australia Act"
        },
        "text": {
          "fa": "پایان نقش حقوقی پارلمان بریتانیا در استرالیا.",
          "en": "The end of the British Parliament’s legal role in Australia."
        }
      },
      {
        "year": 1992,
        "title": {
          "fa": "پرونده‌ی مابو",
          "en": "The Mabo decision"
        },
        "text": {
          "fa": "در ۳ ژوئن دیوان عالی «ترا نولیوس» را رد کرد.",
          "en": "On 3 June the High Court rejected ‘terra nullius’."
        }
      },
      {
        "year": 1993,
        "title": {
          "fa": "قانون مالکیت بومی",
          "en": "The Native Title Act"
        },
        "text": {
          "fa": "حق مالکیت بومی تدوین شد.",
          "en": "Native title was codified."
        }
      },
      {
        "year": 1999,
        "title": {
          "fa": "همه‌پرسی جمهوری",
          "en": "The republic referendum"
        },
        "text": {
          "fa": "در ۶ نوامبر با حدود ۵۵ درصد رأی منفی رد شد.",
          "en": "On 6 November it was rejected with about 55 percent voting no."
        }
      },
      {
        "year": 2000,
        "title": {
          "fa": "المپیک سیدنی",
          "en": "The Sydney Olympics"
        },
        "text": {
          "fa": "بازی‌های المپیک تابستانی در سیدنی.",
          "en": "The Summer Olympic Games in Sydney."
        }
      },
      {
        "year": 2008,
        "title": {
          "fa": "عذرخواهی از نسل‌های دزدیده‌شده",
          "en": "The apology to the Stolen Generations"
        },
        "text": {
          "fa": "کوین راد در ۱۳ فوریه به‌نام دولت عذرخواهی کرد.",
          "en": "On 13 February Kevin Rudd apologized on behalf of the government."
        }
      },
      {
        "year": 2019,
        "yearText": {
          "fa": "۲۰۱۹ تا ۲۰۲۰",
          "en": "2019 to 2020"
        },
        "title": {
          "fa": "آتش‌سوزی تابستان سیاه",
          "en": "The Black Summer fires"
        },
        "text": {
          "fa": "میلیون‌ها هکتار سوخت.",
          "en": "Millions of hectares burned."
        }
      },
      {
        "year": 2023,
        "title": {
          "fa": "همه‌پرسی «صدا»",
          "en": "The ‘Voice’ referendum"
        },
        "text": {
          "fa": "در ۱۴ اکتبر با حدود ۶۰ درصد رأی منفی رد شد.",
          "en": "On 14 October it was rejected with about 60 percent voting no."
        }
      }
    ]
  }
};
