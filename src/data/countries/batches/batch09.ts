import { CountrySection, TimelineEvent } from '../../../types';

/** Batch 09: full histories (sections + timeline). */
export interface DetailedHistory09 {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const BATCH_09_HISTORIES: Record<string, DetailedHistory09> = {
  "canada": {
    "sections": [
      {
        "id": "first-peoples",
        "title": {
          "fa": "مردمان بومی و نخستین دیدارها با اروپا",
          "en": "Indigenous peoples and the first contacts with Europe"
        },
        "text": {
          "fa": [
            "نخستین مردمان دست‌کم ۱۴ تا ۱۵ هزار سال پیش، و بنا بر برخی یافته‌ها پیش‌تر، به سرزمین کانادای امروزی رسیدند. پیش از آمدن اروپایی‌ها دهها ملت با زبان‌ها و فرهنگ‌های متفاوت در این سرزمین می‌زیستند: مردمان الگونکین و ایروکوا در شرق و جنگل‌های بزرگ، مردمان ساحل اقیانوس آرام مانند هایدا و سالیش، مردمان دشت‌ها و شکارچیان بوفالو، و اینوئیت‌ها در شمال یخ‌زده که اجدادشان (فرهنگ تولی) حدود ۱۰۰۰ میلادی از آلاسکا گسترش یافتند. امروز مردمان بومی کانادا سه گروه شناخته‌شده‌اند: «ملت‌های اول»، «اینوئیت» و «متیس» (با نیاکان بومی و اروپایی که قوم مشخصی از قرن هفدهم و هجدهم شد).",
            "نروژی‌ها حدود ۱۰۰۰ میلادی در لانس‌اوموادوز در نیوفاندلند استقراری کوچک ساختند که دیری نپایید؛ این محل در فهرست میراث جهانی یونسکو است. جان کابوت، دریانورد ایتالیایی در خدمت انگلستان، در ۱۴۹۷ به سواحل شرقی (نیوفاندلند یا کیپ برتون) رسید. ماهیگیران باسک، فرانسوی و پرتغالی در قرن شانزدهم در بانک‌های ماهی آن‌جا کار می‌کردند و با بومیان داد و ستد می‌کردند."
          ],
          "en": [
            "The first peoples reached the land of today’s Canada at least 14,000 to 15,000 years ago, and according to some finds earlier. Before the Europeans came, dozens of nations with different languages and cultures lived in this land: Algonquian and Iroquoian peoples in the east and the great forests, Pacific coast peoples such as the Haida and Salish, peoples of the plains and the buffalo hunters, and the Inuit in the frozen north whose ancestors (the Thule culture) spread from Alaska about 1000 CE. Today the Indigenous peoples of Canada are three recognized groups: the ‘First Nations’, the ‘Inuit’ and the ‘Métis’ (with Indigenous and European ancestors, who became a distinct people from the seventeenth and eighteenth centuries).",
            "The Norse about 1000 CE built a small settlement at L’Anse aux Meadows in Newfoundland that did not last; the site is a UNESCO World Heritage Site. John Cabot, an Italian navigator in the service of England, reached the east coast (Newfoundland or Cape Breton) in 1497. Basque, French and Portuguese fishermen worked the fishing banks there in the sixteenth century and traded with Indigenous people."
          ]
        }
      },
      {
        "id": "new-france",
        "title": {
          "fa": "نیوفرانس",
          "en": "New France"
        },
        "text": {
          "fa": [
            "ژاک کارتیه، دریانورد فرانسوی، در ۱۵۳۴ در گاسپه پرچم فرانسه را برافراشت و در سفرهای ۱۵۳۵ و ۱۵۴۱ رود سنت‌لارنس را کاوید. کلمه‌ی «کانادا» از واژه‌ای ایروکوایی (کاناتا، به معنی «روستا») آمده است. ساموئل دو شانپلن در ۳ ژوئیه‌ی ۱۶۰۸ شهر کبک را بنیان گذاشت و مونترال (ویل‌ماری) در ۱۶۴۲ ساخته شد. اقتصاد نیوفرانس بر تجارت خز و اتحاد با ملت‌هایی مانند هورون-وندات و الگونکین‌ها استوار بود؛ جنگ‌هایی علیه کنفدراسیون ایروکوا درگرفت.",
            "جمعیت نیوفرانس کوچک ماند: تا ۱۷۶۰ حدود ۶۵ هزار نفر. نظام «سینیوری» زمین را میان خانوارها تقسیم می‌کرد و کلیسای کاتولیک نقش بزرگی داشت. در ۱۶۷۰ شرکت خلیج هادسون، با منشور سلطنتی انگلستان، انحصار تجارت خز در «سرزمین روپرت»، بخش بزرگی از کانادای امروز، را گرفت. فرانسه آکادیا (نواسکوشیای امروز) را در ۱۷۱۳ در پیمان اوترخت به بریتانیا داد."
          ],
          "en": [
            "Jacques Cartier, a French navigator, raised the French flag at Gaspé in 1534 and explored the St Lawrence River on the voyages of 1535 and 1541. The word ‘Canada’ comes from an Iroquoian word (kanata, meaning ‘village’). Samuel de Champlain founded the city of Quebec on 3 July 1608 and Montreal (Ville-Marie) was built in 1642. The economy of New France rested on the fur trade and alliances with nations such as the Huron-Wendat and the Algonquin; wars were fought against the Iroquois Confederacy.",
            "The population of New France stayed small: about 65,000 by 1760. The ‘seigneurial’ system divided land among households and the Catholic Church played a large role. In 1670 the Hudson’s Bay Company, under an English royal charter, took a monopoly of the fur trade in ‘Rupert’s Land’, a large part of today’s Canada. France gave Acadia (today’s Nova Scotia) to Britain in the Treaty of Utrecht in 1713."
          ]
        }
      },
      {
        "id": "british-conquest",
        "title": {
          "fa": "فتح بریتانیا و آمریکای شمالی بریتانیایی",
          "en": "The British conquest and British North America"
        },
        "text": {
          "fa": [
            "از ۱۷۵۵ تا ۱۷۶۴ بریتانیا «تبعید بزرگ» آکادیایی‌ها را اجرا کرد: ده‌ها هزار فرانسوی‌زبان آکادیا، بنا بر برآوردها حدود ۱۱ هزار نفر، از سرزمین خود اخراج شدند و بسیاری مردند. در جنگ هفت‌ساله بریتانیا در ۱۳ سپتامبر ۱۷۵۹ در «دشت‌های ابراهام» نزدیک کبک پیروز شد؛ هر دو فرمانده، ولف و مونکالم، کشته شدند. مونترال در ۱۷۶۰ تسلیم شد و فرانسه در پیمان پاریس (۱۷۶۳) نیوفرانس را به بریتانیا داد.",
            "«اعلامیه‌ی سلطنتی» ۱۷۶۳ مرزهای مستعمره‌ی بریتانیایی را مشخص و زمین‌های بومیان را به رسمیت شناخت؛ سندی که هنوز در حقوق بومیان اهمیت دارد. «قانون کبک» (۱۷۷۴) به فرانسوی‌زبانان حق دین کاتولیک و حقوق مدنی فرانسوی را داد و باعث ناخشنودی در سیزده مستعمره شد. پس از انقلاب آمریکا حدود ۴۰ تا ۵۰ هزار «وفادار» به پادشاه به شمال گریختند. «قانون اساسی ۱۷۹۱» مستعمره را به کانادای فرانسوی‌زبان (پایین) و انگلیسی‌زبان (بالا) تقسیم کرد."
          ],
          "en": [
            "From 1755 to 1764 Britain carried out the ‘Great Upheaval’ of the Acadians: tens of thousands of French-speakers of Acadia, by estimates about 11,000 people, were expelled from their land and many died. In the Seven Years’ War Britain won on 13 September 1759 on the ‘Plains of Abraham’ near Quebec; both commanders, Wolfe and Montcalm, were killed. Montreal surrendered in 1760 and France gave New France to Britain in the Treaty of Paris (1763).",
            "The ‘Royal Proclamation’ of 1763 set the boundaries of the British colony and recognized Indigenous land; a document that still matters in Indigenous law. The ‘Quebec Act’ (1774) gave French-speakers the right to the Catholic religion and French civil law and caused resentment in the thirteen colonies. After the American Revolution about 40,000 to 50,000 ‘Loyalists’ to the king fled north. The ‘Constitutional Act of 1791’ divided the colony into French-speaking (Lower) and English-speaking (Upper) Canada."
          ]
        }
      },
      {
        "id": "nineteenth-century",
        "title": {
          "fa": "قرن نوزدهم و کنفدراسیون",
          "en": "The nineteenth century and Confederation"
        },
        "text": {
          "fa": [
            "در جنگ ۱۸۱۲ (۱۸۱۲ تا ۱۸۱۵) ایالات متحده به آمریکای شمالی بریتانیایی حمله کرد و مرزها تغییر نکرد؛ این جنگ هویت کانادایی را تقویت کرد. رهبر شاونی، تکومسه، در کنار بریتانیا جنگید و در ۱۸۱۳ کشته شد. شورش‌های ۱۸۳۷ تا ۱۸۳۸ در کانادای بالا و پایین علیه نخبگان استعماری سرکوب شد، اما گزارش لرد دورهام (۱۸۳۹) به «قانون اتحاد» (۱۸۴۰) و «حکومت مسئول» (۱۸۴۸) انجامید. هزاران سیاه‌پوست گریخته از بردگی در آمریکا از راه «راه‌آهن زیرزمینی» به کانادا پناه آوردند. قحطی ایرلند (۱۸۴۷) ده‌ها هزار مهاجر ایرلندی آورد و بسیاری در جزیره‌ی قرنطینه‌ی گروسی مردند.",
            "کنفرانس شارلوت‌تاون (سپتامبر ۱۸۶۴) و کنفرانس کبک (اکتبر ۱۸۶۴) طرح اتحاد مستعمره‌ها را ریختند. «قانون آمریکای شمالی بریتانیا» (۲۹ مارس ۱۸۶۷) در ۱ ژوئیه‌ی ۱۸۶۷ نخستین «دومینیون کانادا» را با چهار استان (انتاریو، کبک، نواسکوشیا و نیوبرانزویک) ساخت. جان ای. مک‌دونالد نخستین نخست‌وزیر شد. این روز امروز «روز کانادا» است. بومیان در مذاکرات کنفدراسیون نقشی نداشتند."
          ],
          "en": [
            "In the War of 1812 (1812 to 1815) the United States attacked British North America and the borders did not change; the war strengthened a Canadian identity. The Shawnee leader Tecumseh fought alongside Britain and was killed in 1813. The rebellions of 1837 to 1838 in Upper and Lower Canada against the colonial elite were put down, but Lord Durham’s report (1839) led to the ‘Act of Union’ (1840) and ‘responsible government’ (1848). Thousands of Black people who escaped slavery in America found refuge in Canada by way of the ‘Underground Railroad’. The Irish famine (1847) brought tens of thousands of Irish immigrants and many died on the quarantine island of Grosse Île.",
            "The Charlottetown Conference (September 1864) and the Quebec Conference (October 1864) drew up the plan for a union of the colonies. The ‘British North America Act’ (29 March 1867) created the first ‘Dominion of Canada’ on 1 July 1867 with four provinces (Ontario, Quebec, Nova Scotia and New Brunswick). John A. Macdonald became the first prime minister. This day is today’s ‘Canada Day’. Indigenous peoples had no role in the Confederation negotiations."
          ]
        }
      },
      {
        "id": "west-expansion",
        "title": {
          "fa": "گسترش به غرب و شمال",
          "en": "Expansion to the west and north"
        },
        "text": {
          "fa": [
            "کانادا در ۱۸۶۹ و ۱۸۷۰ «سرزمین روپرت» را از شرکت خلیج هادسون خرید. متیس‌های رود سرخ به رهبری لویی ریل، که از حقوق زبان و زمین خود می‌ترسیدند، حکومت موقتی ساختند و مانیتوبا در ۱۵ ژوئیه‌ی ۱۸۷۰ پنجمین استان شد. بریتیش کلمبیا در ۱۸۷۱ و جزیره‌ی پرنس ادوارد در ۱۸۷۳ پیوستند. پلیس سوار شمال‌غرب در ۱۸۷۳ برای مهار قلمرو غرب ساخته شد. دولت با ملت‌های اول «پیمان‌های شماره‌دار» (۱۸۷۱ تا ۱۹۲۱، یازده پیمان) بست تا زمین دشت‌ها را برای مهاجرت بگیرد؛ «قانون هندی» (۱۸۷۶) زندگی ملت‌های اول را زیر کنترل شدید دولت گذاشت.",
            "راه‌آهن اقیانوس‌آرام کانادا (سی‌پی‌آر) در ۷ نوامبر ۱۸۸۵ تکمیل شد و کارگران چینی که برای ساخت آن به کار گرفته شدند بعدها مالیات سرانه‌ی سنگین («مالیات سر») پرداختند. ریل در ۱۸۸۵ رهبری قیام دوم متیس‌ها در ساسکاچوان را برعهده گرفت؛ ارتش آن را سرکوب کرد و او در ۱۶ نوامبر ۱۸۸۵ به اتهام خیانت اعدام شد. دوران لوریه (نخست‌وزیر ۱۸۹۶ تا ۱۹۱۱، نخستین نخست‌وزیر فرانسوی‌زبان) مهاجرت بزرگ به غرب و تب طلای کلوندایک (۱۸۹۶ تا ۱۸۹۹) را دید؛ آلبرتا و ساسکاچوان در ۱ سپتامبر ۱۹۰۵ استان شدند."
          ],
          "en": [
            "In 1869 and 1870 Canada bought ‘Rupert’s Land’ from the Hudson’s Bay Company. The Métis of the Red River under Louis Riel, who feared for their language and land rights, formed a provisional government and Manitoba became the fifth province on 15 July 1870. British Columbia joined in 1871 and Prince Edward Island in 1873. The North-West Mounted Police was created in 1873 to control the western territory. The government made ‘Numbered Treaties’ with First Nations (1871 to 1921, eleven treaties) to take the land of the prairies for settlement; the ‘Indian Act’ (1876) placed First Nations life under heavy government control.",
            "The Canadian Pacific Railway was completed on 7 November 1885 and the Chinese workers employed to build it later paid a heavy per-person tax (the ‘head tax’). In 1885 Riel took the leadership of the second Métis uprising in Saskatchewan; the army put it down and he was executed for treason on 16 November 1885. The Laurier years (prime minister 1896 to 1911, the first French-speaking prime minister) saw the great migration to the west and the Klondike gold rush (1896 to 1899); Alberta and Saskatchewan became provinces on 1 September 1905."
          ]
        }
      },
      {
        "id": "residential-schools",
        "title": {
          "fa": "سیاست دولت نسبت به بومیان و مدارس شبانه‌روزی",
          "en": "Government policy towards Indigenous peoples and the residential schools"
        },
        "text": {
          "fa": [
            "دولت کانادا از ۱۸۷۴ در اداره‌ی «مدارس شبانه‌روزی هندی» نقش داشت؛ مدارسی که بیشتر را کلیساها (کاتولیک، انگلیکن، متحد و پرسبیتری) می‌گرداندند و هدفشان، به گفته‌ی خود دولت، جذب کودکان بومی در فرهنگ اروپایی بود. از ۱۹۲۰ حضور کودکان ۷ تا ۱۵ ساله اجباری شد. حدود ۱۵۰ هزار کودک ملت اول، اینوئیت و متیس از خانواده‌هایشان جدا شدند. در بسیاری از مدارس استفاده از زبان بومی ممنوع بود و غذا و پزشکی ناکافی، و کودکان قربانی آزار جسمی و جنسی شدند. آخرین مدرسه‌ی فدرال در ۱۹۹۶ بسته شد.",
            "«کمیسیون حقیقت و آشتی» (۲۰۰۸ تا ۲۰۱۵) هزاران شهادت شنید. گزارش نهایی ۲۰۱۵ دست‌کم ۳۲۰۰ مرگ ثبت‌شده را شمرد و برآورد کرد که شمار واقعی ممکن است بیش از ۶۰۰۰ باشد؛ ثبت ملی بعدی بیش از ۴۱۰۰ نام را شناسایی کرده است. کمیسیون این نظام را «نسل‌کشی فرهنگی» نامید و ۹۴ «فراخوان به اقدام» داد. نخست‌وزیر استفن هارپر در ۱۱ ژوئن ۲۰۰۸ از طرف دولت عذرخواهی کرد. در ۲۰۲۱ گزارش یافتن قبرهای بی‌نشان احتمالی نزدیک مدرسه‌ی کاملوپس با رادار بحث ملی را برانگیخت. پاپ فرانسیس در ژوئیه‌ی ۲۰۲۲ در کانادا از «شرم و اندوه» سخن گفت و در بازگشت این نظام را «نسل‌کشی» نامید و مجلس عوام در ۲۷ اکتبر ۲۰۲۲ به اتفاق آرا طرحی تصویب کرد که این نظام را نسل‌کشی می‌شناسد؛ این طرح نظر مجلس است نه سیاست رسمی دولت. ۳۰ سپتامبر از ۲۰۲۱ «روز ملی حقیقت و آشتی» است."
          ],
          "en": [
            "The Canadian government played a role in running the ‘Indian Residential Schools’ from 1874; schools mostly run by churches (Catholic, Anglican, United and Presbyterian) whose aim, in the government’s own words, was to assimilate Indigenous children into European culture. From 1920 attendance of children aged 7 to 15 was compulsory. About 150,000 First Nations, Inuit and Métis children were separated from their families. In many schools the use of Indigenous languages was banned, food and medical care were inadequate, and children were victims of physical and sexual abuse. The last federal school closed in 1996.",
            "The ‘Truth and Reconciliation Commission’ (2008 to 2015) heard thousands of testimonies. Its 2015 final report counted at least 3,200 recorded deaths and estimated that the real number might be more than 6,000; the later national register has identified more than 4,100 names. The commission called the system ‘cultural genocide’ and made 94 ‘Calls to Action’. Prime Minister Stephen Harper apologized on behalf of the government on 11 June 2008. In 2021 reports of possible unmarked graves found by radar near the Kamloops school sparked a national debate. Pope Francis in July 2022 in Canada spoke of ‘shame and sorrow’ and on the flight home called the system ‘genocide’, and on 27 October 2022 the House of Commons by unanimous consent passed a motion recognizing the system as genocide; this motion is the view of Parliament, not official government policy. From 2021 30 September has been the ‘National Day for Truth and Reconciliation’."
          ]
        }
      },
      {
        "id": "world-wars",
        "title": {
          "fa": "جنگ‌های جهانی و میان‌دو‌جنگ",
          "en": "The world wars and the interwar years"
        },
        "text": {
          "fa": [
            "کانادا در ۱۹۱۴ به‌عنوان بخشی از امپراتوری بریتانیا وارد جنگ جهانی اول شد؛ حدود ۶۲۰ هزار نفر خدمت کردند و بیش از ۶۱ هزار کشته شدند. در نبرد ویمی (۹ تا ۱۲ آوریل ۱۹۱۷) سپاه کانادا برای نخستین بار با هم جنگید و تپه را گرفت؛ این نبرد نماد هویت ملی شد. بحران خدمت اجباری (۱۹۱۷) فرانسوی‌زبانان را از انگلیسی‌زبانان جدا کرد. انفجار هالیفاکس (۶ دسامبر ۱۹۱۷) حدود ۲۰۰۰ نفر را کشت. بیشتر زنان در ۱۹۱۸ حق رأی فدرال گرفتند. اعتصاب عمومی وینیپگ در ۱۹۱۹ سرکوب شد.",
            "«قانون وست‌مینستر» (۱۹۳۱) کانادا را در سیاست خارجی مستقل کرد. رکود بزرگ دهه‌ی ۱۹۳۰ بیکاری را در غرب به‌شدت بالا برد. در ۱۹۲۱ تا ۱۹۲۲ در تورنتو فردریک بنتینگ و چارلز بست انسولین را برای دیابت جدا و آماده کردند. کانادا در ۱۰ سپتامبر ۱۹۳۹، یک هفته پس از بریتانیا، جداگانه به آلمان اعلام جنگ کرد. حدود ۱٫۱ میلیون نفر خدمت کردند و حدود ۴۵ هزار نفر کشته شدند. در دیپ (۱۹ اوت ۱۹۴۲) تلفات سنگین بود و در ۶ ژوئن ۱۹۴۴ کانادایی‌ها در ساحل جونو پیاده شدند. در ۱۹۴۲ حدود ۲۲ هزار کانادایی ژاپنی‌تبار، بیشترشان شهروند، از ساحل غربی به اردوگاه‌ها فرستاده شدند و دارایی‌شان فروخته شد؛ دولت در ۱۹۸۸ عذرخواهی کرد."
          ],
          "en": [
            "Canada entered the First World War in 1914 as part of the British Empire; about 620,000 served and more than 61,000 died. At the Battle of Vimy Ridge (9 to 12 April 1917) the Canadian Corps fought together for the first time and took the ridge; the battle became a symbol of national identity. The conscription crisis (1917) divided French-speakers from English-speakers. The Halifax explosion (6 December 1917) killed about 2,000 people. Most women gained the federal vote in 1918. The Winnipeg General Strike of 1919 was suppressed.",
            "The ‘Statute of Westminster’ (1931) made Canada independent in foreign policy. The Great Depression of the 1930s raised unemployment sharply in the west. In 1921 to 1922 in Toronto Frederick Banting and Charles Best isolated and prepared insulin for diabetes. Canada declared war on Germany separately on 10 September 1939, a week after Britain. About 1.1 million served and about 45,000 died. At Dieppe (19 August 1942) losses were heavy and on 6 June 1944 Canadians landed on Juno Beach. In 1942 about 22,000 Japanese Canadians, most of them citizens, were sent from the west coast to camps and their property was sold; the government apologized in 1988."
          ]
        }
      },
      {
        "id": "postwar-quebec",
        "title": {
          "fa": "پس از جنگ، انقلاب آرام و کبک",
          "en": "After the war, the Quiet Revolution and Quebec"
        },
        "text": {
          "fa": [
            "نیوفاندلند در ۳۱ مارس ۱۹۴۹ دهمین استان شد. کانادا از بنیان‌گذاران ناتو (۱۹۴۹) بود و لستر پیرسون، وزیر خارجه، با طرح نیروی حافظ صلح در بحران سوئز (۱۹۵۶) جایزه‌ی صلح نوبل ۱۹۵۷ را گرفت. دوران رونق، مهاجرت از سراسر جهان، شبکه‌ی بیمه‌ی درمان همگانی (که تامی داگلاس در ساسکاچوان آغاز کرد و در ۱۹۶۶ ملی شد) و پرچم برگ افرا (۱۵ فوریه‌ی ۱۹۶۵) ساخته شد. نمایشگاه جهانی «اکسپو ۶۷» در مونترال جشن صدسالگی بود.",
            "در کبک «انقلاب آرام» (دهه‌ی ۱۹۶۰) قدرت کلیسا را کاهش داد و ملی‌گرایی فرانسوی‌زبان را بالا برد. در «بحران اکتبر» ۱۹۷۰ گروه تندروی «جبهه‌ی آزادی‌بخش کبک» دو نفر را ربود و پیر لاپورت، وزیر کبک، را کشت؛ نخست‌وزیر پیر ترودو «قانون اقدامات جنگی» را برای نخستین‌بار در زمان صلح به کار گرفت و حدود ۵۰۰ نفر بازداشت شدند. «قانون زبان‌های رسمی» (۱۹۶۹) انگلیسی و فرانسوی را برابر کرد و سیاست «چندفرهنگی» در ۱۹۷۱ اعلام شد. «حزب کبک» در ۱۹۷۶ به قدرت رسید و «منشور زبان فرانسه» (قانون ۱۰۱، ۱۹۷۷) فرانسوی را زبان رسمی کبک کرد. در همه‌پرسی ۱۹۸۰ حدود ۶۰ درصد به «حاکمیت-اتحاد» رأی منفی دادند."
          ],
          "en": [
            "Newfoundland became the tenth province on 31 March 1949. Canada was a founder of NATO (1949) and Lester Pearson, the foreign minister, won the 1957 Nobel Peace Prize for the peacekeeping-force plan in the Suez Crisis (1956). Prosperity, immigration from across the world, a national health-insurance system (which Tommy Douglas began in Saskatchewan and which was made national in 1966) and the maple-leaf flag (15 February 1965) were established. The world exhibition ‘Expo 67’ in Montreal was a centennial celebration.",
            "In Quebec the ‘Quiet Revolution’ (1960s) reduced the church’s power and raised French-speaking nationalism. In the ‘October Crisis’ of 1970 the radical ‘Front de libération du Québec’ kidnapped two men and killed Pierre Laporte, a Quebec minister; Prime Minister Pierre Trudeau used the ‘War Measures Act’ for the first time in peacetime and about 500 people were detained. The ‘Official Languages Act’ (1969) made English and French equal and the ‘multiculturalism’ policy was announced in 1971. The ‘Parti Québécois’ came to power in 1976 and the ‘Charter of the French Language’ (Bill 101, 1977) made French Quebec’s official language. In the referendum of 1980 about 60 percent voted no to ‘sovereignty-association’."
          ]
        }
      },
      {
        "id": "constitution-today",
        "title": {
          "fa": "قانون اساسی ۱۹۸۲ و کانادای امروز",
          "en": "The constitution of 1982 and Canada today"
        },
        "text": {
          "fa": [
            "«قانون اساسی ۱۹۸۲» که در ۱۷ آوریل ۱۹۸۲ اعلام شد، قانون اساسی را از بریتانیا به کانادا آورد («بازگشت قانون اساسی») و «منشور حقوق و آزادی‌ها» را در آن گنجاند. کبک آن را امضا نکرد. تلاش‌ها برای جلب رضایت کبک، «توافق دریاچه‌ی میچ» (۱۹۸۷، شکست ۱۹۹۰) و «توافق شارلوت‌تاون» (رد در همه‌پرسی ۲۶ اکتبر ۱۹۹۲)، ناکام ماند. در همه‌پرسی ۳۰ اکتبر ۱۹۹۵ رأی «نه» با ۵۰٫۵۸ درصد در برابر ۴۹٫۴۲ درصد برنده شد. «قانون وضوح» (۲۰۰۰) شرایط جدایی را روشن کرد. قیام اوکا (تابستان ۱۹۹۰) مناقشه‌ای مسلحانه میان مردم موهاک و دولت بر سر زمین بود. «نوناووت» در ۱ آوریل ۱۹۹۹ قلمرو خودگردان اینوئیت شد. توافق تجارت آزاد با آمریکا (۱۹۸۹) و نفتا (۱۹۹۴) اقتصاد کانادا را به آمریکا پیوند زد.",
            "کانادا در ۲۰۰۵ چهارمین کشور جهان بود که ازدواج هم‌جنس‌گرایان را قانونی کرد و در ۲۰۱۸ مصرف تفریحی شاهدانه را قانونی کرد. کشور دومین کشور بزرگ جهان از نظر مساحت است و با حدود ۴۰ میلیون نفر، ده استان و سه قلمرو دارد. از هر پنج نفر حدود یک نفر در خارج به دنیا آمده است. کانادا پادشاهی مشروطه‌ی فدرال است که رئیس کشور آن همان پادشاه بریتانیا و در عمل نماینده‌اش فرماندار کل است. پس از ۲۰۱۵ آشتی با بومیان، نابرابری‌های بهداشتی و آب آشامیدنی ملت‌های اول و پیگیری فراخوان‌های کمیسیون از موضوع‌های اصلی سیاست بوده است."
          ],
          "en": [
            "The ‘Constitution Act, 1982’, proclaimed on 17 April 1982, brought the constitution from Britain to Canada (‘patriation’) and included the ‘Charter of Rights and Freedoms’. Quebec did not sign it. Efforts to win Quebec’s consent, the ‘Meech Lake Accord’ (1987, failed 1990) and the ‘Charlottetown Accord’ (rejected in the referendum of 26 October 1992), failed. In the referendum of 30 October 1995 the ‘No’ side won with 50.58 percent against 49.42 percent. The ‘Clarity Act’ (2000) set out the conditions for secession. The Oka Crisis (summer 1990) was an armed dispute between the Mohawk people and the government over land. ‘Nunavut’ became a self-governing Inuit territory on 1 April 1999. The free-trade agreement with America (1989) and NAFTA (1994) tied Canada’s economy to America.",
            "In 2005 Canada was the fourth country in the world to legalize same-sex marriage and in 2018 it legalized recreational cannabis. It is the second-largest country in the world by area and, with about 40 million people, has ten provinces and three territories. About one in five people was born abroad. Canada is a federal constitutional monarchy whose head of state is the British monarch and in practice his representative is the governor general. Since 2015 reconciliation with Indigenous peoples, health inequalities and drinking-water problems of First Nations and following up the commission’s calls have been among the main issues of politics."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -13000,
        "yearText": {
          "fa": "دست‌کم ۱۴ تا ۱۵ هزار سال پیش",
          "en": "at least 14,000 to 15,000 years ago"
        },
        "title": {
          "fa": "رسیدن نخستین مردمان",
          "en": "The arrival of the first peoples"
        },
        "text": {
          "fa": "مردمان بومی به سرزمین کانادای امروزی رسیدند؛ برخی یافته‌ها از زمانی پیش‌تر خبر می‌دهند.",
          "en": "Indigenous peoples reached today’s Canada; some finds point to an earlier time."
        }
      },
      {
        "year": 1000,
        "title": {
          "fa": "نروژی‌ها در لانس‌اوموادوز (حدود)",
          "en": "The Norse at L’Anse aux Meadows (about)"
        },
        "text": {
          "fa": "نخستین استقرار اروپایی در آمریکای شمالی؛ دیری نپایید.",
          "en": "The first European settlement in North America; it did not last."
        }
      },
      {
        "year": 1497,
        "title": {
          "fa": "جان کابوت",
          "en": "John Cabot"
        },
        "text": {
          "fa": "به سواحل شرقی رسید و آن را برای انگلستان مدعی شد.",
          "en": "He reached the east coast and claimed it for England."
        }
      },
      {
        "year": 1534,
        "title": {
          "fa": "ژاک کارتیه در گاسپه",
          "en": "Jacques Cartier at Gaspé"
        },
        "text": {
          "fa": "در ۲۴ ژوئیه پرچم فرانسه را برافراشت.",
          "en": "On 24 July he raised the French flag."
        }
      },
      {
        "year": 1608,
        "title": {
          "fa": "بنیان کبک",
          "en": "The founding of Quebec"
        },
        "text": {
          "fa": "شانپلن در ۳ ژوئیه شهر را بنیان گذاشت.",
          "en": "Champlain founded the city on 3 July."
        }
      },
      {
        "year": 1642,
        "title": {
          "fa": "بنیان مونترال",
          "en": "The founding of Montreal"
        },
        "text": {
          "fa": "ویل‌ماری ساخته شد.",
          "en": "Ville-Marie was built."
        }
      },
      {
        "year": 1670,
        "title": {
          "fa": "شرکت خلیج هادسون",
          "en": "The Hudson’s Bay Company"
        },
        "text": {
          "fa": "منشور سلطنتی انحصار تجارت خز سرزمین روپرت را داد.",
          "en": "The royal charter gave it the fur-trade monopoly of Rupert’s Land."
        }
      },
      {
        "year": 1713,
        "title": {
          "fa": "پیمان اوترخت",
          "en": "The Treaty of Utrecht"
        },
        "text": {
          "fa": "فرانسه آکادیا را به بریتانیا داد.",
          "en": "France gave Acadia to Britain."
        }
      },
      {
        "year": 1755,
        "yearText": {
          "fa": "۱۷۵۵ تا ۱۷۶۴",
          "en": "1755 to 1764"
        },
        "title": {
          "fa": "تبعید بزرگ آکادیایی‌ها",
          "en": "The Great Upheaval of the Acadians"
        },
        "text": {
          "fa": "حدود ۱۱ هزار آکادیایی اخراج شدند.",
          "en": "About 11,000 Acadians were expelled."
        }
      },
      {
        "year": 1759,
        "title": {
          "fa": "نبرد دشت‌های ابراهام",
          "en": "The Battle of the Plains of Abraham"
        },
        "text": {
          "fa": "در ۱۳ سپتامبر بریتانیا کبک را گرفت.",
          "en": "On 13 September Britain took Quebec."
        }
      },
      {
        "year": 1763,
        "title": {
          "fa": "پیمان پاریس و اعلامیه‌ی سلطنتی",
          "en": "The Treaty of Paris and the Royal Proclamation"
        },
        "text": {
          "fa": "فرانسه نیوفرانس را داد؛ زمین بومیان به رسمیت شناخته شد.",
          "en": "France gave up New France; Indigenous land was recognized."
        }
      },
      {
        "year": 1774,
        "title": {
          "fa": "قانون کبک",
          "en": "The Quebec Act"
        },
        "text": {
          "fa": "حقوق دینی و مدنی فرانسوی‌زبانان تضمین شد.",
          "en": "The religious and civil rights of French-speakers were guaranteed."
        }
      },
      {
        "year": 1791,
        "title": {
          "fa": "قانون اساسی ۱۷۹۱",
          "en": "The Constitutional Act of 1791"
        },
        "text": {
          "fa": "کانادای بالا و پایین ساخته شد.",
          "en": "Upper and Lower Canada were created."
        }
      },
      {
        "year": 1812,
        "yearText": {
          "fa": "۱۸۱۲ تا ۱۸۱۵",
          "en": "1812 to 1815"
        },
        "title": {
          "fa": "جنگ ۱۸۱۲",
          "en": "The War of 1812"
        },
        "text": {
          "fa": "حمله‌ی آمریکا ناکام ماند؛ مرزها تغییر نکرد.",
          "en": "The American invasion failed; the borders did not change."
        }
      },
      {
        "year": 1837,
        "yearText": {
          "fa": "۱۸۳۷ تا ۱۸۳۸",
          "en": "1837 to 1838"
        },
        "title": {
          "fa": "شورش‌ها",
          "en": "The rebellions"
        },
        "text": {
          "fa": "شورش در کانادای بالا و پایین سرکوب شد.",
          "en": "The rebellions in Upper and Lower Canada were put down."
        }
      },
      {
        "year": 1840,
        "title": {
          "fa": "قانون اتحاد",
          "en": "The Act of Union"
        },
        "text": {
          "fa": "کانادای بالا و پایین یکی شدند.",
          "en": "Upper and Lower Canada were joined."
        }
      },
      {
        "year": 1848,
        "title": {
          "fa": "حکومت مسئول",
          "en": "Responsible government"
        },
        "text": {
          "fa": "دولت پاسخگوی مجلس منتخب شد.",
          "en": "The government became answerable to the elected assembly."
        }
      },
      {
        "year": 1864,
        "title": {
          "fa": "کنفرانس‌های شارلوت‌تاون و کبک",
          "en": "The Charlottetown and Quebec conferences"
        },
        "text": {
          "fa": "طرح کنفدراسیون ریخته شد.",
          "en": "The plan of Confederation was drawn up."
        }
      },
      {
        "year": 1867,
        "title": {
          "fa": "کنفدراسیون",
          "en": "Confederation"
        },
        "text": {
          "fa": "در ۱ ژوئیه دومینیون کانادا با چهار استان بنیان گذاشته شد؛ مک‌دونالد نخست‌وزیر.",
          "en": "On 1 July the Dominion of Canada was founded with four provinces; Macdonald prime minister."
        }
      },
      {
        "year": 1870,
        "title": {
          "fa": "مانیتوبا",
          "en": "Manitoba"
        },
        "text": {
          "fa": "در ۱۵ ژوئیه پنجمین استان شد.",
          "en": "On 15 July it became the fifth province."
        }
      },
      {
        "year": 1871,
        "title": {
          "fa": "بریتیش کلمبیا",
          "en": "British Columbia"
        },
        "text": {
          "fa": "به کنفدراسیون پیوست؛ نخستین پیمان شماره‌دار.",
          "en": "It joined Confederation; the first Numbered Treaty."
        }
      },
      {
        "year": 1873,
        "title": {
          "fa": "جزیره‌ی پرنس ادوارد و پلیس سوار",
          "en": "Prince Edward Island and the Mounted Police"
        },
        "text": {
          "fa": "پیوست؛ پلیس سوار شمال‌غرب ساخته شد.",
          "en": "It joined; the North-West Mounted Police was created."
        }
      },
      {
        "year": 1876,
        "title": {
          "fa": "قانون هندی",
          "en": "The Indian Act"
        },
        "text": {
          "fa": "زندگی ملت‌های اول زیر کنترل شدید دولت رفت.",
          "en": "First Nations life was placed under heavy government control."
        }
      },
      {
        "year": 1885,
        "title": {
          "fa": "راه‌آهن اقیانوس‌آرام و اعدام ریل",
          "en": "The Pacific railway and Riel’s execution"
        },
        "text": {
          "fa": "راه‌آهن ۷ نوامبر تکمیل شد؛ ریل ۱۶ نوامبر اعدام شد.",
          "en": "The railway was completed on 7 November; Riel was executed on 16 November."
        }
      },
      {
        "year": 1896,
        "yearText": {
          "fa": "۱۸۹۶ تا ۱۸۹۹",
          "en": "1896 to 1899"
        },
        "title": {
          "fa": "تب طلای کلوندایک",
          "en": "The Klondike gold rush"
        },
        "text": {
          "fa": "هزاران نفر به یوکان رفتند؛ لوریه نخست‌وزیر شد.",
          "en": "Thousands went to the Yukon; Laurier became prime minister."
        }
      },
      {
        "year": 1905,
        "title": {
          "fa": "آلبرتا و ساسکاچوان",
          "en": "Alberta and Saskatchewan"
        },
        "text": {
          "fa": "در ۱ سپتامبر استان شدند.",
          "en": "On 1 September they became provinces."
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
          "fa": "حدود ۶۲۰ هزار نفر خدمت کردند و بیش از ۶۱ هزار کشته شدند.",
          "en": "About 620,000 served and more than 61,000 died."
        }
      },
      {
        "year": 1917,
        "title": {
          "fa": "ویمی و بحران خدمت اجباری",
          "en": "Vimy and the conscription crisis"
        },
        "text": {
          "fa": "نبرد ویمی در ۹ تا ۱۲ آوریل؛ انفجار هالیفاکس در ۶ دسامبر.",
          "en": "The Battle of Vimy on 9 to 12 April; the Halifax explosion on 6 December."
        }
      },
      {
        "year": 1918,
        "title": {
          "fa": "حق رأی زنان",
          "en": "Votes for women"
        },
        "text": {
          "fa": "بیشتر زنان حق رأی فدرال گرفتند.",
          "en": "Most women gained the federal vote."
        }
      },
      {
        "year": 1921,
        "title": {
          "fa": "انسولین",
          "en": "Insulin"
        },
        "text": {
          "fa": "بنتینگ و بست در تورنتو؛ نوبل ۱۹۲۳.",
          "en": "Banting and Best in Toronto; the Nobel Prize of 1923."
        }
      },
      {
        "year": 1931,
        "title": {
          "fa": "قانون وست‌مینستر",
          "en": "The Statute of Westminster"
        },
        "text": {
          "fa": "کانادا در سیاست خارجی مستقل شد.",
          "en": "Canada became independent in foreign policy."
        }
      },
      {
        "year": 1939,
        "title": {
          "fa": "ورود به جنگ جهانی دوم",
          "en": "Entry into the Second World War"
        },
        "text": {
          "fa": "در ۱۰ سپتامبر کانادا جداگانه به آلمان اعلام جنگ کرد.",
          "en": "On 10 September Canada declared war on Germany separately."
        }
      },
      {
        "year": 1942,
        "title": {
          "fa": "دیپ و اردوگاه‌های ژاپنی‌تبارها",
          "en": "Dieppe and the camps for Japanese Canadians"
        },
        "text": {
          "fa": "حمله‌ی دیپ ۱۹ اوت؛ حدود ۲۲ هزار ژاپنی‌تبار به اردوگاه رفتند.",
          "en": "The Dieppe raid on 19 August; about 22,000 Japanese Canadians were sent to camps."
        }
      },
      {
        "year": 1944,
        "title": {
          "fa": "فرود در ساحل جونو",
          "en": "The landing at Juno Beach"
        },
        "text": {
          "fa": "در ۶ ژوئن، روز دی.",
          "en": "On 6 June, D-Day."
        }
      },
      {
        "year": 1949,
        "title": {
          "fa": "نیوفاندلند و ناتو",
          "en": "Newfoundland and NATO"
        },
        "text": {
          "fa": "نیوفاندلند ۳۱ مارس استان شد؛ کانادا ناتو را بنیان گذاشت.",
          "en": "Newfoundland became a province on 31 March; Canada helped found NATO."
        }
      },
      {
        "year": 1957,
        "title": {
          "fa": "نوبل صلح پیرسون",
          "en": "Pearson’s Nobel Peace Prize"
        },
        "text": {
          "fa": "به‌خاطر نیروی حافظ صلح در بحران سوئز.",
          "en": "For the peacekeeping force in the Suez Crisis."
        }
      },
      {
        "year": 1960,
        "title": {
          "fa": "آغاز انقلاب آرام",
          "en": "The start of the Quiet Revolution"
        },
        "text": {
          "fa": "نوسازی و ملی‌گرایی فرانسوی‌زبان در کبک.",
          "en": "Modernization and French-speaking nationalism in Quebec."
        }
      },
      {
        "year": 1965,
        "title": {
          "fa": "پرچم برگ افرا",
          "en": "The maple-leaf flag"
        },
        "text": {
          "fa": "در ۱۵ فوریه برافراشته شد.",
          "en": "It was raised on 15 February."
        }
      },
      {
        "year": 1966,
        "title": {
          "fa": "بیمه‌ی درمان همگانی",
          "en": "National health insurance"
        },
        "text": {
          "fa": "برنامه‌ی ملی که از ساسکاچوان آغاز شده بود.",
          "en": "A national programme that had begun in Saskatchewan."
        }
      },
      {
        "year": 1967,
        "title": {
          "fa": "اکسپو ۶۷",
          "en": "Expo 67"
        },
        "text": {
          "fa": "جشن صدسالگی کنفدراسیون در مونترال.",
          "en": "The centennial of Confederation celebrated in Montreal."
        }
      },
      {
        "year": 1969,
        "title": {
          "fa": "قانون زبان‌های رسمی",
          "en": "The Official Languages Act"
        },
        "text": {
          "fa": "انگلیسی و فرانسه رسمی و برابر شدند.",
          "en": "English and French became official and equal."
        }
      },
      {
        "year": 1970,
        "title": {
          "fa": "بحران اکتبر",
          "en": "The October Crisis"
        },
        "text": {
          "fa": "ربایش و کشته‌شدن لاپورت؛ قانون اقدامات جنگی.",
          "en": "The kidnappings and the killing of Laporte; the War Measures Act."
        }
      },
      {
        "year": 1971,
        "title": {
          "fa": "سیاست چندفرهنگی",
          "en": "The multiculturalism policy"
        },
        "text": {
          "fa": "کانادا نخستین کشوری بود که چندفرهنگی را سیاست رسمی کرد.",
          "en": "Canada was the first country to make multiculturalism official policy."
        }
      },
      {
        "year": 1976,
        "title": {
          "fa": "پیروزی حزب کبک",
          "en": "The Parti Québécois victory"
        },
        "text": {
          "fa": "رنه لوسک در ۱۵ نوامبر به قدرت رسید؛ قانون ۱۰۱ در ۱۹۷۷.",
          "en": "René Lévesque came to power on 15 November; Bill 101 followed in 1977."
        }
      },
      {
        "year": 1980,
        "title": {
          "fa": "همه‌پرسی کبک",
          "en": "The Quebec referendum"
        },
        "text": {
          "fa": "حدود ۶۰ درصد به حاکمیت-اتحاد «نه» گفتند.",
          "en": "About 60 percent said no to sovereignty-association."
        }
      },
      {
        "year": 1982,
        "title": {
          "fa": "قانون اساسی و منشور حقوق",
          "en": "The constitution and the Charter"
        },
        "text": {
          "fa": "در ۱۷ آوریل قانون اساسی بازگشت.",
          "en": "On 17 April the constitution was patriated."
        }
      },
      {
        "year": 1987,
        "yearText": {
          "fa": "۱۹۸۷ تا ۱۹۹۲",
          "en": "1987 to 1992"
        },
        "title": {
          "fa": "دریاچه‌ی میچ و شارلوت‌تاون",
          "en": "Meech Lake and Charlottetown"
        },
        "text": {
          "fa": "هر دو توافق ناکام ماند.",
          "en": "Both accords failed."
        }
      },
      {
        "year": 1990,
        "title": {
          "fa": "بحران اوکا",
          "en": "The Oka Crisis"
        },
        "text": {
          "fa": "مناقشه‌ی مسلحانه‌ی موهاک‌ها و دولت بر سر زمین.",
          "en": "An armed dispute between the Mohawk and the government over land."
        }
      },
      {
        "year": 1994,
        "title": {
          "fa": "نفتا",
          "en": "NAFTA"
        },
        "text": {
          "fa": "پیمان تجارت آزاد با آمریکا و مکزیک.",
          "en": "The free-trade agreement with America and Mexico."
        }
      },
      {
        "year": 1995,
        "title": {
          "fa": "دومین همه‌پرسی کبک",
          "en": "The second Quebec referendum"
        },
        "text": {
          "fa": "۳۰ اکتبر؛ «نه» با ۵۰٫۵۸ درصد.",
          "en": "30 October; ‘No’ with 50.58 percent."
        }
      },
      {
        "year": 1996,
        "title": {
          "fa": "بسته‌شدن آخرین مدرسه‌ی شبانه‌روزی",
          "en": "The last residential school closes"
        },
        "text": {
          "fa": "آخرین مدرسه‌ی فدرال بسته شد.",
          "en": "The last federal school closed."
        }
      },
      {
        "year": 1999,
        "title": {
          "fa": "نوناووت",
          "en": "Nunavut"
        },
        "text": {
          "fa": "در ۱ آوریل قلمرو خودگردان اینوئیت‌ها ساخته شد.",
          "en": "On 1 April the self-governing Inuit territory was created."
        }
      },
      {
        "year": 2005,
        "title": {
          "fa": "ازدواج هم‌جنس‌گرایان",
          "en": "Same-sex marriage"
        },
        "text": {
          "fa": "کانادا چهارمین کشوری بود که آن را قانونی کرد.",
          "en": "Canada was the fourth country to legalize it."
        }
      },
      {
        "year": 2008,
        "title": {
          "fa": "عذرخواهی هارپر",
          "en": "Harper’s apology"
        },
        "text": {
          "fa": "در ۱۱ ژوئن دولت از قربانیان مدارس شبانه‌روزی عذرخواهی کرد.",
          "en": "On 11 June the government apologized to the residential school survivors."
        }
      },
      {
        "year": 2015,
        "title": {
          "fa": "گزارش کمیسیون حقیقت و آشتی",
          "en": "The Truth and Reconciliation Commission report"
        },
        "text": {
          "fa": "۹۴ فراخوان به اقدام؛ «نسل‌کشی فرهنگی».",
          "en": "94 Calls to Action; ‘cultural genocide’."
        }
      },
      {
        "year": 2018,
        "title": {
          "fa": "قانونی‌شدن شاهدانه",
          "en": "Cannabis legalized"
        },
        "text": {
          "fa": "مصرف تفریحی در ۱۷ اکتبر قانونی شد.",
          "en": "Recreational use became legal on 17 October."
        }
      },
      {
        "year": 2021,
        "title": {
          "fa": "کاملوپس و روز ملی حقیقت و آشتی",
          "en": "Kamloops and the National Day for Truth and Reconciliation"
        },
        "text": {
          "fa": "گزارش قبرهای احتمالی؛ ۳۰ سپتامبر روز ملی شد.",
          "en": "The report of possible graves; 30 September became a national day."
        }
      },
      {
        "year": 2022,
        "title": {
          "fa": "سفر پاپ و طرح مجلس عوام",
          "en": "The Pope’s visit and the House of Commons motion"
        },
        "text": {
          "fa": "پاپ فرانسیس در ژوئیه؛ مجلس عوام در ۲۷ اکتبر نظام مدارس را نسل‌کشی شناخت.",
          "en": "Pope Francis in July; on 27 October the House of Commons recognized the school system as genocide."
        }
      }
    ]
  }
};
