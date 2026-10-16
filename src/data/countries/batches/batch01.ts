import { CountrySection, TimelineEvent } from '../../../types';

/** Batch 01: full histories (sections + timeline) for the United States, Russia and India. */
export interface DetailedHistory {
  sections: CountrySection[];
  timeline: TimelineEvent[];
}

export const BATCH_01_HISTORIES: Record<string, DetailedHistory> = {
  "united-states": {
    "sections": [
      {
        "id": "indigenous",
        "title": {
          "fa": "مردمان بومی پیش از اروپایی‌ها",
          "en": "Indigenous peoples before the Europeans"
        },
        "text": {
          "fa": [
            "بنا بر نظریه‌ی غالب، نخستین مردمان حدود ۱۵ هزار سال پیش از میلاد (و شاید بسیار پیش‌تر) از سیبری از راه بریجینیا، پل خشکی میان آسیا و آلاسکا در عصر یخبندان، به آمریکای شمالی رسیدند؛ زمان و راه دقیق این مهاجرت هنوز محل بحث است. حدود ۱۰ هزار سال پیش از میلاد انسان در سراسر قاره پراکنده بود. فرهنگ کلوویس (حدود ۹۱۰۰ تا ۸۸۵۰ پیش از میلاد) با نیزه‌های سنگی ویژه‌اش شناخته می‌شود. کشاورزی ذرت، لوبیا و کدو از مکزیک به شمال گسترش یافت و تا ۳۰۰۰ پیش از میلاد ذرت در دره‌های آریزونا و نیومکزیکو کاشته می‌شد.",
            "«تپه‌سازان» تپه‌های خاکی بزرگ ساختند: مجموعه‌ی واتسون بریک در لوئیزیانا (حدود ۳۵۰۰ پیش از میلاد)، پاورتی پوینت (حدود ۱۷۰۰ پیش از میلاد)، سپس فرهنگ‌های آدنا و هوپول در دره‌ی اوهایو. کاهوکیا، شهر بزرگ فرهنگ می‌سی‌سی‌پی نزدیک سنت‌لوئیس امروز، در قرن دوازدهم حدود ۲۰ هزار نفر جمعیت داشت. در جنوب غربی، پوئبلوها خانه‌هایی از سنگ و خشت ساختند، از جمله در پوئبلو بونیتو با حدود ۸۰۰ اتاق. کنفدراسیون ایروکوا از پنج قبیله در ایالت نیویورک شکل گرفت (زمان آن، از قرن دوازدهم تا میانه‌ی قرن پانزدهم، محل بحث است). هاوایی میان ۹۴۰ و ۱۱۳۰ میلادی برای نخستین بار مسکونی شد."
          ],
          "en": [
            "According to the prevailing theory, the first peoples reached North America from Siberia around 15,000 BCE (and perhaps much earlier) across Beringia, the land bridge between Asia and Alaska in the Ice Age; the exact time and route of this migration are still debated. By about 10,000 BCE humans were spread across the continent. The Clovis culture (about 9100 to 8850 BCE) is known for its distinctive stone spear points. Farming of maize, beans and squash spread north from Mexico, and by 3000 BCE maize was grown in the valleys of Arizona and New Mexico.",
            "The ‘Mound Builders’ made great earthen mounds: the Watson Brake complex in Louisiana (about 3500 BCE), Poverty Point (about 1700 BCE), and then the Adena and Hopewell cultures in the Ohio valley. Cahokia, the great city of the Mississippian culture near today’s St Louis, had about 20,000 inhabitants in the twelfth century. In the south-west the Pueblo peoples built houses of stone and adobe, among them Pueblo Bonito with about 800 rooms. The Iroquois Confederacy of five nations formed in what is now New York State (its date, anywhere from the twelfth to the mid-fifteenth century, is debated). Hawaii was first settled between 940 and 1130 CE."
          ]
        }
      },
      {
        "id": "colonization",
        "title": {
          "fa": "رسیدن اروپایی‌ها و مستعمره‌ها",
          "en": "The arrival of the Europeans and the colonies"
        },
        "text": {
          "fa": [
            "نروژی‌ها حدود ۱۰۰۰ میلادی به شمال‌شرق آمریکای شمالی رسیدند (استقرار لانس‌اوموادوز در کانادای امروز)، اما تأثیر پایداری نگذاشتند. پس از سفر کلمب در ۱۴۹۲، اسپانیایی‌ها پیش افتادند: پونسه د لئون در ۱۵۱۳ به فلوریدا رسید و سن آگوستین، کهن‌ترین شهر دائمی اروپایی در ایالات متحده‌ی کنونی، در ۱۵۶۵ بنیان گذاشته شد. فرانسوی‌ها در امتداد رود سنت‌لارنس و می‌سی‌سی‌پی تجارت خز را گسترش دادند و هلندی‌ها از ۱۶۲۱ مستعمره‌ی نیونیدرلند (بعدها نیویورک) را ساختند.",
            "نخستین مستعمره‌ی دائمی انگلیسی، جیمزتاون در ویرجینیا، در ۱۶۰۷ پایه‌گذاری شد. در ۱۶۲۰ زائران مسافر کشتی میفلاور در پلیموث پیاده شدند و «پیمان میفلاور» را نوشتند؛ دسته‌ی بزرگ‌تر پیوریتن‌ها در ۱۶۳۰ مستعمره‌ی خلیج ماساچوست را ساخت. پنسیلوانیا را ویلیام پن در ۱۶۸۱ برای کواکرها و دیگر گروه‌های دینی بنیان گذاشت و جورجیا در ۱۷۳۲ سیزدهمین مستعمره شد. در ۱۶۱۹ نخستین آفریقایی‌های برده‌شده به ویرجینیا رسیدند و برده‌داری به‌تدریج در جنوب جا افتاد. بیماری‌های تازه، به‌ویژه آبله و سرخک، شمار بسیار زیادی از مردمان بومی را از میان برد."
          ],
          "en": [
            "Norse seafarers reached north-eastern North America around 1000 CE (the settlement at L’Anse aux Meadows in today’s Canada), but left no lasting effect. After Columbus’s voyage in 1492 the Spanish took the lead: Ponce de León reached Florida in 1513 and St Augustine, the oldest lasting European city in today’s United States, was founded in 1565. The French spread the fur trade along the St Lawrence and Mississippi and the Dutch built the colony of New Netherland (later New York) from 1621.",
            "The first lasting English colony, Jamestown in Virginia, was founded in 1607. In 1620 the Pilgrims on the Mayflower landed at Plymouth and wrote the Mayflower Compact; the larger group of Puritans built the Massachusetts Bay Colony in 1630. Pennsylvania was founded by William Penn in 1681 for Quakers and other religious groups, and Georgia became the thirteenth colony in 1732. In 1619 the first enslaved Africans reached Virginia and slavery gradually took root in the south. New diseases, above all smallpox and measles, killed very large numbers of Indigenous people."
          ]
        }
      },
      {
        "id": "colonial-life",
        "title": {
          "fa": "زندگی در مستعمره‌ها و جنگ فرانسه و سرخ‌پوستان",
          "en": "Colonial life and the French and Indian War"
        },
        "text": {
          "fa": [
            "بیش از نیمی از مهاجران اروپایی خدمتکار قراردادی بودند: چند سال کار می‌کردند تا هزینه‌ی سفر پرداخته شود. برده‌داری از دهه‌ی ۱۶۶۰ به‌صورت مادام‌العمر درآمد و در ۱۷۷۰ حدود یک‌پنجم جمعیت را آفریقایی‌های برده تشکیل می‌دادند. هر مستعمره حاکمی منصوب از لندن و مجلسی منتخب داشت و بریتانیا سال‌ها قوانین را سخت اجرا نمی‌کرد، چیزی که به «بی‌توجهی سودمند» معروف است. «بیداری بزرگ نخست» در دهه‌ی ۱۷۴۰ موج بزرگی از احیای مذهبی بود.",
            "جنگ فرانسه و سرخ‌پوستان (۱۷۵۴ تا ۱۷۶۳)، بخشی از جنگ هفت‌ساله، با پیروزی بریتانیا بر فرانسه پایان یافت و کانادا و سرزمین‌های شرق می‌سی‌سی‌پی به بریتانیا رسید. اعلامیه‌ی سلطنتی ۱۷۶۳ پادشاه جورج سوم گسترش مستعمره‌نشین‌ها به غرب کوه‌های آپالاش را ممنوع کرد تا از بومیان محافظت کند. پایان تهدید فرانسه و هزینه‌ی سنگین جنگ، بریتانیا را به وضع مالیات‌های تازه واداشت."
          ],
          "en": [
            "More than half of European immigrants were indentured servants who worked for a number of years to pay for the voyage. Slavery became lifelong from the 1660s and by 1770 enslaved Africans made up about a fifth of the population. Each colony had a governor appointed from London and an elected assembly, and for years Britain did not strictly enforce its laws, a policy known as ‘salutary neglect’. The ‘First Great Awakening’ in the 1740s was a great wave of religious revival.",
            "The French and Indian War (1754 to 1763), part of the Seven Years’ War, ended with British victory over France, and Canada and the lands east of the Mississippi passed to Britain. King George III’s Royal Proclamation of 1763 banned settlers from moving west of the Appalachians in order to protect Native peoples. The end of the French threat and the heavy cost of the war drove Britain to impose new taxes."
          ]
        }
      },
      {
        "id": "revolution",
        "title": {
          "fa": "انقلاب و تأسیس کشور",
          "en": "The Revolution and the founding of the nation"
        },
        "text": {
          "fa": [
            "قانون تمبر (۱۷۶۵) نخستین مالیات مستقیم پارلمان بریتانیا بر مستعمره‌ها بود و با شعار «مالیات بدون نمایندگی نه» روبه‌رو شد. «مهمانی چای بوستون» (۱۶ دسامبر ۱۷۷۳) اعتراضی به مالیات چای بود و «قوانین تحمل‌ناپذیر» ۱۷۷۴ ماساچوست را از خودگردانی محروم کرد. جنگ در ۱۹ آوریل ۱۷۷۵ با نبردهای لکسینگتون و کنکورد آغاز شد. کنگره‌ی دوم قاره‌ای جورج واشینگتن را فرمانده‌ی ارتش قاره‌ای کرد و در ۴ ژوئیه‌ی ۱۷۷۶ اعلامیه‌ی استقلال، که عمدتاً به قلم توماس جفرسون بود، را پذیرفت.",
            "پیروزی در ساراتوگا (۱۷۷۷) فرانسه و بعد اسپانیا و هلند را به یاری آمریکا آورد. بریتانیا در محاصره‌ی یورک‌تاون در ۱۹ اکتبر ۱۷۸۱ شکست خورد و پیمان پاریس در ۳ سپتامبر ۱۷۸۳ استقلال را به رسمیت شناخت. «اصول کنفدراسیون» دولت مرکزی ضعیفی ساخته بود که نمی‌توانست مالیات بگیرد. در ۱۷۸۷ نمایندگان در فیلادلفیا قانون اساسی تازه‌ای نوشتند که دولت فدرال با سه قوه‌ی جدا ساخت. قانون اساسی در ۱۷۸۸ تصویب شد، واشینگتن در ۱۷۸۹ نخستین رئیس‌جمهور شد و «منشور حقوق» (ده اصلاحیه‌ی نخست) در ۱۷۹۱ افزوده شد."
          ],
          "en": [
            "The Stamp Act (1765) was the first direct tax by the British Parliament on the colonies and met the cry ‘no taxation without representation’. The ‘Boston Tea Party’ (16 December 1773) was a protest against the tea tax and the ‘Intolerable Acts’ of 1774 deprived Massachusetts of self-government. The war began on 19 April 1775 with the battles of Lexington and Concord. The Second Continental Congress made George Washington commander of the Continental Army and on 4 July 1776 adopted the Declaration of Independence, written mainly by Thomas Jefferson.",
            "Victory at Saratoga (1777) brought France, and later Spain and the Netherlands, to America’s aid. Britain was defeated at the siege of Yorktown on 19 October 1781 and the Treaty of Paris on 3 September 1783 recognized independence. The ‘Articles of Confederation’ had created a weak central government that could not collect taxes. In 1787 delegates in Philadelphia wrote a new constitution that built a federal government with three separate branches. The Constitution was ratified in 1788, Washington became the first president in 1789 and the ‘Bill of Rights’ (the first ten amendments) was added in 1791."
          ]
        }
      },
      {
        "id": "expansion",
        "title": {
          "fa": "گسترش به غرب و مسئله‌ی برده‌داری",
          "en": "Westward expansion and the question of slavery"
        },
        "text": {
          "fa": [
            "خرید لوئیزیانا از فرانسه در ۱۸۰۳ اندازه‌ی کشور را دو برابر کرد و سفر لوئیس و کلارک (۱۸۰۴ تا ۱۸۰۶) آن را کاوش کرد. جنگ ۱۸۱۲ با بریتانیا (۱۸۱۲ تا ۱۸۱۵) بی‌نتیجه اما برای هویت ملی مهم بود. دکترین مونرو (۱۸۲۳) اعلام کرد که قدرت‌های اروپایی نباید در قاره‌ی آمریکا دخالت یا مستعمره‌سازی کنند. «قانون کوچاندن سرخ‌پوستان» (۱۸۳۰) مردمان بومی جنوب شرق را به غرب می‌سی‌سی‌پی راند؛ «راه اشک» چروکی‌ها (۱۸۳۸ تا ۱۸۳۹) هزاران کشته داشت.",
            "با «سرنوشت آشکار» و الحاق تگزاس (۱۸۴۵) جنگ با مکزیک (۱۸۴۶ تا ۱۸۴۸) درگرفت و پیمان گوادالوپه هیدالگو کالیفرنیا و نیومکزیکو را به ایالات متحده داد. کشف طلا در کالیفرنیا (۱۸۴۸) موج بزرگی از مهاجرت را به غرب کشاند. در همین دوران شمال به‌تدریج برده‌داری را برچید، اما جنوب با پنبه به آن وابسته‌تر شد. مصالحه‌ی میزوری (۱۸۲۰)، مصالحه‌ی ۱۸۵۰، قانون کانزاس-نبراسکا (۱۸۵۴) و حکم دردسکات (۱۸۵۷) کشمکش بر سر گسترش برده‌داری را شدیدتر کرد. فردریک داگلاس و هریت تابمن از رهبران مبارزه با برده‌داری بودند و کنوانسیون سنکا فالز (۱۸۴۸) آغاز جنبش حق رأی زنان شد."
          ],
          "en": [
            "The Louisiana Purchase from France in 1803 doubled the size of the country and the Lewis and Clark expedition (1804 to 1806) explored it. The War of 1812 with Britain (1812 to 1815) was inconclusive but important for national identity. The Monroe Doctrine (1823) declared that European powers should not interfere in or colonize the Americas. The ‘Indian Removal Act’ (1830) drove the Native peoples of the south-east west of the Mississippi; the Cherokee ‘Trail of Tears’ (1838 to 1839) cost thousands of lives.",
            "With ‘manifest destiny’ and the annexation of Texas (1845), war with Mexico (1846 to 1848) broke out and the Treaty of Guadalupe Hidalgo gave California and New Mexico to the United States. The discovery of gold in California (1848) drew a great wave of migration west. In the same period the north gradually abolished slavery, but the south became more dependent on it through cotton. The Missouri Compromise (1820), the Compromise of 1850, the Kansas–Nebraska Act (1854) and the Dred Scott decision (1857) sharpened the struggle over the spread of slavery. Frederick Douglass and Harriet Tubman were leaders of the anti-slavery struggle and the Seneca Falls Convention (1848) began the women’s suffrage movement."
          ]
        }
      },
      {
        "id": "civil-war",
        "title": {
          "fa": "جنگ داخلی و بازسازی",
          "en": "The Civil War and Reconstruction"
        },
        "text": {
          "fa": [
            "پس از پیروزی آبراهام لینکلن در انتخابات نوامبر ۱۸۶۰، ایالت‌های جنوبی یکی‌پس‌از‌دیگری جدا شدند و در فوریه‌ی ۱۸۶۱ «ایالات کنفدره‌ی آمریکا» را ساختند. جنگ در ۱۲ آوریل ۱۸۶۱ با حمله‌ی کنفدره‌ها به قلعه‌ی سامتر آغاز شد. لینکلن در ۱ ژانویه‌ی ۱۸۶۳ «اعلامیه‌ی آزادی» را صادر کرد که بردگان در مناطق تحت کنترل کنفدره را آزاد اعلام می‌کرد. نبرد گتیسبورگ (۱ تا ۳ ژوئیه‌ی ۱۸۶۳) و سقوط ویکسبرگ (۴ ژوئیه) نقطه‌ی عطف بودند و ژنرال لی در ۹ آوریل ۱۸۶۵ در آپوماتوکس تسلیم شد. حدود ۷۵۰ هزار سرباز کشته شدند، بیشترین تلفات در تاریخ جنگ‌های آمریکا. لینکلن پنج روز بعد ترور شد.",
            "اصلاحیه‌ی سیزدهم (۱۸۶۵) برده‌داری را لغو کرد، چهاردهم (۱۸۶۸) شهروندی و برابری حقوقی را تضمین کرد و پانزدهم (۱۸۷۰) رأی مردان سیاه‌پوست را. «دوران بازسازی» تا ۱۸۷۷ طول کشید. پس از آن دموکرات‌های سفیدپوست جنوب قدرت را بازپس گرفتند و با «قوانین جیم کرو» جدایی نژادی را قانونی کردند؛ حکم پلسی علیه فرگوسن (۱۸۹۶) آن را تأیید کرد و تا جنبش حقوق مدنی دوام آورد."
          ],
          "en": [
            "After Abraham Lincoln won the election of November 1860, the southern states seceded one after another and in February 1861 formed the ‘Confederate States of America’. The war began on 12 April 1861 when the Confederates attacked Fort Sumter. On 1 January 1863 Lincoln issued the ‘Emancipation Proclamation’, declaring the enslaved in Confederate-held areas free. The Battle of Gettysburg (1 to 3 July 1863) and the fall of Vicksburg (4 July) were turning points, and General Lee surrendered at Appomattox on 9 April 1865. About 750,000 soldiers died, the highest toll of any American war. Lincoln was assassinated five days later.",
            "The Thirteenth Amendment (1865) abolished slavery, the Fourteenth (1868) guaranteed citizenship and equal protection and the Fifteenth (1870) the vote for Black men. ‘Reconstruction’ lasted until 1877. After that southern white Democrats took back power and made racial segregation law with the ‘Jim Crow laws’; Plessy v. Ferguson (1896) upheld it and it lasted until the civil rights movement."
          ]
        }
      },
      {
        "id": "industrial-age",
        "title": {
          "fa": "عصر صنعتی، امپریالیسم و اصلاحات",
          "en": "The industrial age, imperialism and reform"
        },
        "text": {
          "fa": [
            "راه‌آهن سراسری در ۱۰ مه ۱۸۶۹ تکمیل شد. از ۱۸۸۰ تا ۱۹۱۴ بیش از ۲۲ میلیون مهاجر به ایالات متحده آمدند و کارگر صنایع و معدن‌ها شدند. «عصر زراندود» (مارک تواین) دوره‌ی ثروت‌های عظیم و فساد سیاسی بود. در ۱۸۹۰ تولید صنعتی آمریکا از همه‌ی کشورها پیشی گرفت. قانون منع مهاجرت چینی‌ها (۱۸۸۲) نخستین قانون بزرگ محدودکننده‌ی مهاجرت بود. تا ۱۸۹۰ تقریباً کل خاک قاره‌ای کشور پر شده بود.",
            "جنگ اسپانیا و آمریکا (۱۸۹۸) فیلیپین، پورتوریکو و گوام را به ایالات متحده داد و کوبا مستقل شد؛ هاوایی هم همان سال الحاق شد. کانال پاناما در ۱۹۱۴ افتتاح شد. «جنبش پیشرو» (از ۱۸۹۰ تا ۱۹۲۰) فساد را هدف گرفت و به اصلاحیه‌های شانزدهم تا نوزدهم انجامید: مالیات بر درآمد، انتخاب مستقیم سناتورها، ممنوعیت الکل و حق رأی زنان (۱۹۲۰). تئودور روزولت (۱۹۰۱ تا ۱۹۰۹) با شکستن انحصارها و حفاظت از طبیعت شناخته می‌شود."
          ],
          "en": [
            "The transcontinental railroad was completed on 10 May 1869. From 1880 to 1914 more than 22 million immigrants came to the United States and became workers in industry and mines. The ‘Gilded Age’ (Mark Twain’s term) was a period of enormous fortunes and political corruption. In 1890 American industrial output overtook that of every other country. The Chinese Exclusion Act (1882) was the first major law restricting immigration. By 1890 almost all the country’s continental land had been settled.",
            "The Spanish–American War (1898) gave the Philippines, Puerto Rico and Guam to the United States and Cuba became independent; Hawaii was annexed the same year. The Panama Canal opened in 1914. The ‘Progressive movement’ (from 1890 to 1920) targeted corruption and led to the Sixteenth to Nineteenth Amendments: the income tax, direct election of senators, alcohol prohibition and votes for women (1920). Theodore Roosevelt (1901 to 1909) is known for breaking up monopolies and for conservation."
          ]
        }
      },
      {
        "id": "world-wars",
        "title": {
          "fa": "جنگ‌های جهانی و رکود بزرگ",
          "en": "The world wars and the Great Depression"
        },
        "text": {
          "fa": [
            "ایالات متحده ابتدا در جنگ جهانی اول بی‌طرف بود و پس از غرق‌شدن کشتی‌ها و تلگراف زیمرمان در ۶ آوریل ۱۹۱۷ به آلمان اعلام جنگ کرد. دهه‌ی ۱۹۲۰ دوران رونق («بیست‌های خروشان») و ممنوعیت الکل (۱۹۲۰ تا ۱۹۳۳) بود. سقوط بورس در ۲۹ اکتبر ۱۹۲۹ رکود بزرگ را آغاز کرد: بیکاری از ۳ درصد در ۱۹۲۹ به ۲۵ درصد در ۱۹۳۳ رسید. فرانکلین روزولت با «نیو دیل» (از ۱۹۳۳)، از جمله بیمه‌ی اجتماعی (۱۹۳۵)، دولت را در اقتصاد فعال کرد.",
            "حمله‌ی ژاپن به پرل هاربر در ۷ دسامبر ۱۹۴۱ آمریکا را وارد جنگ جهانی دوم کرد. تولید صنعتی آمریکا نقش بزرگی در پیروزی متفقین داشت. در فوریه‌ی ۱۹۴۲ فرمان اجرایی ۹۰۶۶ بیش از ۱۲۰ هزار ژاپنی‌تبار، که دو سومشان شهروند آمریکایی بودند، را به اردوگاه‌ها فرستاد. طرح منهتن نخستین بمب اتمی را ساخت و در اوت ۱۹۴۵ بر هیروشیما و ناگازاکی افکنده شد. ایالات متحده از جنگ بدون ویرانی در خاک خود بیرون آمد و قدرتمندترین اقتصاد جهان را داشت."
          ],
          "en": [
            "The United States was at first neutral in the First World War and, after ship sinkings and the Zimmermann Telegram, declared war on Germany on 6 April 1917. The 1920s were a time of prosperity (the ‘Roaring Twenties’) and alcohol prohibition (1920 to 1933). The stock market crash of 29 October 1929 began the Great Depression: unemployment rose from 3 percent in 1929 to 25 percent in 1933. Franklin Roosevelt’s ‘New Deal’ (from 1933), including social security (1935), made the government active in the economy.",
            "Japan’s attack on Pearl Harbor on 7 December 1941 brought America into the Second World War. American industrial output played a great part in the Allied victory. In February 1942 Executive Order 9066 sent more than 120,000 people of Japanese descent, two-thirds of them American citizens, to camps. The Manhattan Project built the first atomic bomb and in August 1945 it was dropped on Hiroshima and Nagasaki. The United States came out of the war without devastation on its own soil and with the world’s strongest economy."
          ]
        }
      },
      {
        "id": "cold-war",
        "title": {
          "fa": "جنگ سرد و جنبش حقوق مدنی",
          "en": "The Cold War and the civil rights movement"
        },
        "text": {
          "fa": [
            "پس از ۱۹۴۵ ایالات متحده و اتحاد شوروی دو ابرقدرت شدند. دکترین ترومن (۱۹۴۷)، طرح مارشال (۱۹۴۸) و ناتو (۱۹۴۹) سیاست مهار کمونیسم بودند. جنگ کره (۱۹۵۰ تا ۱۹۵۳) و جنگ ویتنام (حضور رزمی گسترده از ۱۹۶۵ تا ۱۹۷۳، سقوط سایگون ۳۰ آوریل ۱۹۷۵) دو جنگ نیابتی بزرگ بودند و در ویتنام حدود ۵۸ هزار آمریکایی کشته شدند. رقابت فضایی با اتحاد شوروی در ۲۰ ژوئیه‌ی ۱۹۶۹ با فرود آپولو ۱۱ بر ماه به نفع آمریکا پایان یافت. رسوایی واترگیت رئیس‌جمهور نیکسون را در ۹ اوت ۱۹۷۴ به استعفا واداشت.",
            "جنبش حقوق مدنی علیه جدایی نژادی با حکم براون علیه هیئت آموزش (۱۹۵۴) و تحریم اتوبوس‌های مونتگومری (۱۹۵۵ تا ۱۹۵۶) شتاب گرفت. راهپیمایی واشینگتن (۲۸ اوت ۱۹۶۳) با سخنرانی «من رؤیایی دارم» مارتین لوتر کینگ همراه بود. قانون حقوق مدنی (۱۹۶۴) و قانون حق رأی (۱۹۶۵) جدایی قانونی را برچیدند. کینگ در ۴ آوریل ۱۹۶۸ ترور شد. رونالد ریگان در دهه‌ی ۱۹۸۰ سیاست را به سمت کاهش مالیات و مقررات برد و جنگ سرد با فروپاشی شوروی در ۱۹۹۱ پایان یافت."
          ],
          "en": [
            "After 1945 the United States and the Soviet Union became the two superpowers. The Truman Doctrine (1947), the Marshall Plan (1948) and NATO (1949) were policies of containing communism. The Korean War (1950 to 1953) and the Vietnam War (large combat presence from 1965 to 1973, fall of Saigon on 30 April 1975) were two major proxy wars, and about 58,000 Americans died in Vietnam. The space race with the Soviet Union ended in America’s favour on 20 July 1969 with the Apollo 11 Moon landing. The Watergate scandal forced President Nixon to resign on 9 August 1974.",
            "The civil rights movement against racial segregation gathered pace with Brown v. Board of Education (1954) and the Montgomery bus boycott (1955 to 1956). The March on Washington (28 August 1963) came with Martin Luther King Jr.’s ‘I Have a Dream’ speech. The Civil Rights Act (1964) and the Voting Rights Act (1965) dismantled legal segregation. King was assassinated on 4 April 1968. In the 1980s Ronald Reagan moved politics towards lower taxes and less regulation, and the Cold War ended with the Soviet collapse in 1991."
          ]
        }
      },
      {
        "id": "contemporary",
        "title": {
          "fa": "ایالات متحده‌ی امروز",
          "en": "The United States today"
        },
        "text": {
          "fa": [
            "در ۱۱ سپتامبر ۲۰۰۱ ربایندگان القاعده چهار هواپیما را ربودند و دو برج مرکز تجارت جهانی و بخشی از پنتاگون را هدف گرفتند؛ حدود ۲۹۷۷ نفر کشته شدند. پاسخ آمریکا حمله به افغانستان (اکتبر ۲۰۰۱) و عراق (۲۰۰۳) بود. بحران مالی ۲۰۰۸ بزرگ‌ترین رکود از دوران رکود بزرگ بود و باراک اوباما در نوامبر همان سال نخستین رئیس‌جمهور سیاه‌پوست شد. پاندمی کووید-۱۹ از ۲۰۲۰ جان بیش از یک میلیون آمریکایی را گرفت.",
            "ایالات متحده فدراسیونی از ۵۰ ایالت است؛ آلاسکا و هاوایی در ۱۹۵۹ ایالت شدند. با بزرگ‌ترین اقتصاد جهان از ۱۸۹۰، ارتش و دانشگاه‌های اثرگذار، یکی از قدرت‌های اصلی جهان است. جامعه‌ی آن بسیار متنوع و سیاستش از دهه‌ها پیش قطبی است."
          ],
          "en": [
            "On 11 September 2001 al-Qaeda hijackers seized four airliners and struck the two towers of the World Trade Center and part of the Pentagon; about 2,977 people were killed. America’s response was the invasion of Afghanistan (October 2001) and of Iraq (2003). The financial crisis of 2008 was the biggest downturn since the Great Depression and in November that year Barack Obama became the first Black president. The COVID-19 pandemic from 2020 took the lives of more than a million Americans.",
            "The United States is a federation of 50 states; Alaska and Hawaii became states in 1959. With the world’s largest economy since 1890 and influential armed forces and universities, it is one of the main powers of the world. Its society is very diverse and its politics have been polarized for decades."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -15000,
        "title": {
          "fa": "نخستین مردمان در آمریکای شمالی (حدود)",
          "en": "The first peoples in North America (about)"
        },
        "text": {
          "fa": "بنا بر نظریه‌ی غالب از راه بریجینیا آمدند؛ زمان دقیق محل بحث است و شاید بسیار پیش‌تر بوده.",
          "en": "According to the prevailing theory they came across Beringia; the exact time is debated and may be much earlier."
        }
      },
      {
        "year": -3500,
        "title": {
          "fa": "تپه‌های واتسون بریک (حدود)",
          "en": "The Watson Brake mounds (about)"
        },
        "text": {
          "fa": "از کهن‌ترین سازه‌های خاکی آمریکای شمالی در لوئیزیانا.",
          "en": "Among the oldest earthworks of North America, in Louisiana."
        }
      },
      {
        "year": 1000,
        "title": {
          "fa": "نروژی‌ها در آمریکای شمالی (حدود)",
          "en": "Norse in North America (about)"
        },
        "text": {
          "fa": "استقرار لانس‌اوموادوز در کانادای امروز.",
          "en": "The settlement at L’Anse aux Meadows in today’s Canada."
        }
      },
      {
        "year": 1492,
        "title": {
          "fa": "سفر کلمب",
          "en": "Columbus’s voyage"
        },
        "text": {
          "fa": "آغاز کاوش و مستعمره‌سازی اروپایی در قاره‌ی آمریکا.",
          "en": "The start of European exploration and colonization in the Americas."
        }
      },
      {
        "year": 1513,
        "title": {
          "fa": "پونسه د لئون در فلوریدا",
          "en": "Ponce de León in Florida"
        },
        "text": {
          "fa": "نخستین سفر ثبت‌شده‌ی اسپانیایی‌ها به خاک امروزی ایالات متحده.",
          "en": "The first recorded Spanish landing on what is today United States soil."
        }
      },
      {
        "year": 1565,
        "title": {
          "fa": "تأسیس سن آگوستین",
          "en": "Founding of St Augustine"
        },
        "text": {
          "fa": "کهن‌ترین شهر دائمی اروپایی در ایالات متحده‌ی کنونی.",
          "en": "The oldest lasting European city in today’s United States."
        }
      },
      {
        "year": 1607,
        "title": {
          "fa": "جیمزتاون",
          "en": "Jamestown"
        },
        "text": {
          "fa": "نخستین مستعمره‌ی دائمی انگلیسی در ویرجینیا.",
          "en": "The first lasting English colony, in Virginia."
        }
      },
      {
        "year": 1619,
        "title": {
          "fa": "نخستین آفریقایی‌های برده‌شده در ویرجینیا",
          "en": "The first enslaved Africans in Virginia"
        },
        "text": {
          "fa": "برده‌داری به‌تدریج در مستعمره‌ها جا افتاد.",
          "en": "Slavery gradually took root in the colonies."
        }
      },
      {
        "year": 1620,
        "title": {
          "fa": "میفلاور و پلیموث",
          "en": "The Mayflower and Plymouth"
        },
        "text": {
          "fa": "زائران پیمان میفلاور را نوشتند.",
          "en": "The Pilgrims wrote the Mayflower Compact."
        }
      },
      {
        "year": 1630,
        "title": {
          "fa": "مستعمره‌ی خلیج ماساچوست",
          "en": "The Massachusetts Bay Colony"
        },
        "text": {
          "fa": "پیوریتن‌ها بوستون را بنا کردند.",
          "en": "The Puritans built Boston."
        }
      },
      {
        "year": 1664,
        "title": {
          "fa": "انگلیسی‌ها نیو آمستردام را می‌گیرند",
          "en": "The English take New Amsterdam"
        },
        "text": {
          "fa": "نیونیدرلند هلندی به نیویورک تبدیل شد.",
          "en": "Dutch New Netherland became New York."
        }
      },
      {
        "year": 1681,
        "title": {
          "fa": "پنسیلوانیا",
          "en": "Pennsylvania"
        },
        "text": {
          "fa": "ویلیام پن مستعمره‌ای برای کواکرها بنیان گذاشت.",
          "en": "William Penn founded a colony for Quakers."
        }
      },
      {
        "year": 1732,
        "title": {
          "fa": "جورجیا",
          "en": "Georgia"
        },
        "text": {
          "fa": "سیزدهمین و آخرین مستعمره‌ی انگلیسی.",
          "en": "The thirteenth and last English colony."
        }
      },
      {
        "year": 1754,
        "yearText": {
          "fa": "۱۷۵۴ تا ۱۷۶۳",
          "en": "1754 to 1763"
        },
        "title": {
          "fa": "جنگ فرانسه و سرخ‌پوستان",
          "en": "The French and Indian War"
        },
        "text": {
          "fa": "بریتانیا بر فرانسه پیروز شد و کانادا را گرفت.",
          "en": "Britain defeated France and took Canada."
        }
      },
      {
        "year": 1765,
        "title": {
          "fa": "قانون تمبر",
          "en": "The Stamp Act"
        },
        "text": {
          "fa": "نخستین مالیات مستقیم پارلمان بر مستعمره‌ها؛ اعتراض‌ها با شعار «مالیات بدون نمایندگی نه».",
          "en": "The first direct parliamentary tax on the colonies; protests under the cry ‘no taxation without representation’."
        }
      },
      {
        "year": 1773,
        "title": {
          "fa": "مهمانی چای بوستون",
          "en": "The Boston Tea Party"
        },
        "text": {
          "fa": "در ۱۶ دسامبر محموله‌ی چای به دریا ریخته شد.",
          "en": "On 16 December a cargo of tea was thrown into the harbour."
        }
      },
      {
        "year": 1775,
        "title": {
          "fa": "لکسینگتون و کنکورد",
          "en": "Lexington and Concord"
        },
        "text": {
          "fa": "در ۱۹ آوریل نخستین نبردهای جنگ انقلاب رخ داد.",
          "en": "On 19 April the first battles of the Revolutionary War took place."
        }
      },
      {
        "year": 1776,
        "title": {
          "fa": "اعلامیه‌ی استقلال",
          "en": "The Declaration of Independence"
        },
        "text": {
          "fa": "در ۴ ژوئیه کنگره‌ی قاره‌ای استقلال سیزده مستعمره را اعلام کرد.",
          "en": "On 4 July the Continental Congress declared the independence of the thirteen colonies."
        }
      },
      {
        "year": 1777,
        "title": {
          "fa": "پیروزی در ساراتوگا",
          "en": "Victory at Saratoga"
        },
        "text": {
          "fa": "این پیروزی فرانسه را به یاری آمریکا آورد.",
          "en": "The victory brought France to America’s aid."
        }
      },
      {
        "year": 1781,
        "title": {
          "fa": "محاصره‌ی یورک‌تاون",
          "en": "The siege of Yorktown"
        },
        "text": {
          "fa": "در ۱۹ اکتبر ارتش بریتانیا تسلیم شد.",
          "en": "On 19 October the British army surrendered."
        }
      },
      {
        "year": 1783,
        "title": {
          "fa": "پیمان پاریس",
          "en": "The Treaty of Paris"
        },
        "text": {
          "fa": "در ۳ سپتامبر بریتانیا استقلال ایالات متحده را به رسمیت شناخت.",
          "en": "On 3 September Britain recognized the independence of the United States."
        }
      },
      {
        "year": 1787,
        "title": {
          "fa": "قانون اساسی",
          "en": "The Constitution"
        },
        "text": {
          "fa": "کنوانسیون فیلادلفیا قانون اساسی فدرال را نوشت؛ در ۱۷۸۸ تصویب شد.",
          "en": "The Philadelphia Convention wrote the federal constitution; it was ratified in 1788."
        }
      },
      {
        "year": 1789,
        "title": {
          "fa": "واشینگتن نخستین رئیس‌جمهور",
          "en": "Washington becomes the first president"
        },
        "text": {
          "fa": "جورج واشینگتن در ۳۰ آوریل سوگند یاد کرد.",
          "en": "George Washington took the oath on 30 April."
        }
      },
      {
        "year": 1791,
        "title": {
          "fa": "منشور حقوق",
          "en": "The Bill of Rights"
        },
        "text": {
          "fa": "ده اصلاحیه‌ی نخست قانون اساسی اضافه شد.",
          "en": "The first ten amendments were added to the Constitution."
        }
      },
      {
        "year": 1803,
        "title": {
          "fa": "خرید لوئیزیانا",
          "en": "The Louisiana Purchase"
        },
        "text": {
          "fa": "اندازه‌ی کشور دو برابر شد.",
          "en": "The size of the country doubled."
        }
      },
      {
        "year": 1804,
        "yearText": {
          "fa": "۱۸۰۴ تا ۱۸۰۶",
          "en": "1804 to 1806"
        },
        "title": {
          "fa": "سفر لوئیس و کلارک",
          "en": "The Lewis and Clark expedition"
        },
        "text": {
          "fa": "کاوش غرب تا اقیانوس آرام.",
          "en": "An exploration of the west to the Pacific."
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
          "fa": "جنگ با بریتانیا که با حفظ مرزها پایان یافت.",
          "en": "A war with Britain that ended with the borders unchanged."
        }
      },
      {
        "year": 1820,
        "title": {
          "fa": "مصالحه‌ی میزوری",
          "en": "The Missouri Compromise"
        },
        "text": {
          "fa": "تلاشی برای مهار کشمکش بر سر گسترش برده‌داری.",
          "en": "An attempt to contain the struggle over the spread of slavery."
        }
      },
      {
        "year": 1823,
        "title": {
          "fa": "دکترین مونرو",
          "en": "The Monroe Doctrine"
        },
        "text": {
          "fa": "اروپا نباید در قاره‌ی آمریکا دخالت کند.",
          "en": "Europe should not interfere in the Americas."
        }
      },
      {
        "year": 1830,
        "title": {
          "fa": "قانون کوچاندن سرخ‌پوستان",
          "en": "The Indian Removal Act"
        },
        "text": {
          "fa": "مردمان بومی جنوب شرق به غرب می‌سی‌سی‌پی رانده شدند.",
          "en": "The Native peoples of the south-east were driven west of the Mississippi."
        }
      },
      {
        "year": 1838,
        "yearText": {
          "fa": "۱۸۳۸ تا ۱۸۳۹",
          "en": "1838 to 1839"
        },
        "title": {
          "fa": "راه اشک",
          "en": "The Trail of Tears"
        },
        "text": {
          "fa": "کوچ اجباری چروکی‌ها با هزاران کشته.",
          "en": "The forced removal of the Cherokee with thousands of deaths."
        }
      },
      {
        "year": 1845,
        "title": {
          "fa": "الحاق تگزاس",
          "en": "The annexation of Texas"
        },
        "text": {
          "fa": "تگزاس به ایالات متحده پیوست.",
          "en": "Texas joined the United States."
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
          "fa": "پیمان گوادالوپه هیدالگو کالیفرنیا و نیومکزیکو را به آمریکا داد.",
          "en": "The Treaty of Guadalupe Hidalgo gave California and New Mexico to the United States."
        }
      },
      {
        "year": 1848,
        "title": {
          "fa": "سنکا فالز و تب طلا",
          "en": "Seneca Falls and the Gold Rush"
        },
        "text": {
          "fa": "کنوانسیون حقوق زنان و کشف طلا در کالیفرنیا.",
          "en": "The women’s rights convention and the discovery of gold in California."
        }
      },
      {
        "year": 1850,
        "title": {
          "fa": "مصالحه‌ی ۱۸۵۰",
          "en": "The Compromise of 1850"
        },
        "text": {
          "fa": "کالیفرنیا ایالت آزاد شد و قانون بردگان گریخته سخت‌تر شد.",
          "en": "California became a free state and the fugitive slave law was tightened."
        }
      },
      {
        "year": 1854,
        "title": {
          "fa": "قانون کانزاس-نبراسکا",
          "en": "The Kansas–Nebraska Act"
        },
        "text": {
          "fa": "حزب جمهوری‌خواه در واکنش شکل گرفت.",
          "en": "The Republican Party formed in reaction."
        }
      },
      {
        "year": 1857,
        "title": {
          "fa": "حکم دردسکات",
          "en": "The Dred Scott decision"
        },
        "text": {
          "fa": "دیوان عالی گفت سیاه‌پوستان شهروند نیستند.",
          "en": "The Supreme Court said Black people were not citizens."
        }
      },
      {
        "year": 1860,
        "title": {
          "fa": "انتخاب لینکلن",
          "en": "Lincoln’s election"
        },
        "text": {
          "fa": "ایالت‌های جنوبی از دسامبر جدا شدن را آغاز کردند.",
          "en": "Southern states began to secede in December."
        }
      },
      {
        "year": 1861,
        "title": {
          "fa": "آغاز جنگ داخلی",
          "en": "The Civil War begins"
        },
        "text": {
          "fa": "در ۱۲ آوریل کنفدره‌ها به قلعه‌ی سامتر حمله کردند.",
          "en": "On 12 April the Confederates attacked Fort Sumter."
        }
      },
      {
        "year": 1863,
        "title": {
          "fa": "اعلامیه‌ی آزادی و گتیسبورگ",
          "en": "The Emancipation Proclamation and Gettysburg"
        },
        "text": {
          "fa": "اعلامیه در ۱ ژانویه صادر شد و نبرد گتیسبورگ ۱ تا ۳ ژوئیه بود.",
          "en": "The proclamation was issued on 1 January and the Battle of Gettysburg was on 1 to 3 July."
        }
      },
      {
        "year": 1865,
        "title": {
          "fa": "پایان جنگ و ترور لینکلن",
          "en": "End of the war and Lincoln’s assassination"
        },
        "text": {
          "fa": "لی در ۹ آوریل تسلیم شد؛ لینکلن در ۱۴ آوریل مورد سوءقصد قرار گرفت و فردای آن درگذشت؛ اصلاحیه‌ی سیزدهم برده‌داری را لغو کرد.",
          "en": "Lee surrendered on 9 April; Lincoln was shot on 14 April and died the next day; the Thirteenth Amendment abolished slavery."
        }
      },
      {
        "year": 1868,
        "title": {
          "fa": "اصلاحیه‌ی چهاردهم",
          "en": "The Fourteenth Amendment"
        },
        "text": {
          "fa": "شهروندی و برابری حقوقی تضمین شد.",
          "en": "Citizenship and equal protection were guaranteed."
        }
      },
      {
        "year": 1869,
        "title": {
          "fa": "راه‌آهن سراسری",
          "en": "The transcontinental railroad"
        },
        "text": {
          "fa": "در ۱۰ مه شرق و غرب با راه‌آهن به هم وصل شدند.",
          "en": "On 10 May east and west were joined by rail."
        }
      },
      {
        "year": 1877,
        "title": {
          "fa": "پایان بازسازی",
          "en": "The end of Reconstruction"
        },
        "text": {
          "fa": "نیروهای فدرال از جنوب خارج شدند.",
          "en": "Federal troops withdrew from the south."
        }
      },
      {
        "year": 1882,
        "title": {
          "fa": "قانون منع مهاجرت چینی‌ها",
          "en": "The Chinese Exclusion Act"
        },
        "text": {
          "fa": "نخستین قانون بزرگ محدودکننده‌ی مهاجرت.",
          "en": "The first major law restricting immigration."
        }
      },
      {
        "year": 1896,
        "title": {
          "fa": "حکم پلسی علیه فرگوسن",
          "en": "Plessy v. Ferguson"
        },
        "text": {
          "fa": "دیوان عالی جدایی نژادی را قانونی دانست.",
          "en": "The Supreme Court held racial segregation lawful."
        }
      },
      {
        "year": 1898,
        "title": {
          "fa": "جنگ اسپانیا و آمریکا",
          "en": "The Spanish–American War"
        },
        "text": {
          "fa": "آمریکا فیلیپین، پورتوریکو و گوام را گرفت.",
          "en": "America took the Philippines, Puerto Rico and Guam."
        }
      },
      {
        "year": 1903,
        "title": {
          "fa": "نخستین پرواز برادران رایت",
          "en": "The first flight of the Wright brothers"
        },
        "text": {
          "fa": "در ۱۷ دسامبر نخستین پرواز با موتور و کنترل‌شده در کیتی‌هاک.",
          "en": "On 17 December the first powered, controlled flight at Kitty Hawk."
        }
      },
      {
        "year": 1914,
        "title": {
          "fa": "کانال پاناما",
          "en": "The Panama Canal"
        },
        "text": {
          "fa": "کانال به روی کشتی‌ها باز شد.",
          "en": "The canal opened to shipping."
        }
      },
      {
        "year": 1917,
        "title": {
          "fa": "ورود به جنگ جهانی اول",
          "en": "Entry into the First World War"
        },
        "text": {
          "fa": "در ۶ آوریل آمریکا به آلمان اعلام جنگ کرد.",
          "en": "On 6 April America declared war on Germany."
        }
      },
      {
        "year": 1920,
        "title": {
          "fa": "حق رأی زنان",
          "en": "Votes for women"
        },
        "text": {
          "fa": "اصلاحیه‌ی نوزدهم در اوت تصویب شد؛ ممنوعیت الکل در ژانویه آغاز شد.",
          "en": "The Nineteenth Amendment was ratified in August; prohibition of alcohol began in January."
        }
      },
      {
        "year": 1929,
        "title": {
          "fa": "سقوط بورس",
          "en": "The stock market crash"
        },
        "text": {
          "fa": "در ۲۹ اکتبر رکود بزرگ آغاز شد.",
          "en": "On 29 October the Great Depression began."
        }
      },
      {
        "year": 1933,
        "title": {
          "fa": "نیو دیل",
          "en": "The New Deal"
        },
        "text": {
          "fa": "فرانکلین روزولت در ۴ مارس رئیس‌جمهور شد و برنامه‌های اصلاحات را آغاز کرد.",
          "en": "Franklin Roosevelt became president on 4 March and began his reform programmes."
        }
      },
      {
        "year": 1941,
        "title": {
          "fa": "پرل هاربر",
          "en": "Pearl Harbor"
        },
        "text": {
          "fa": "حمله‌ی ژاپن در ۷ دسامبر آمریکا را وارد جنگ کرد.",
          "en": "Japan’s attack on 7 December brought America into the war."
        }
      },
      {
        "year": 1942,
        "title": {
          "fa": "اردوگاه‌های ژاپنی‌تبارها",
          "en": "The camps for people of Japanese descent"
        },
        "text": {
          "fa": "فرمان اجرایی ۹۰۶۶ بیش از ۱۲۰ هزار نفر را به اردوگاه فرستاد.",
          "en": "Executive Order 9066 sent more than 120,000 people to camps."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "بمب اتمی و پایان جنگ",
          "en": "The atomic bombs and the end of the war"
        },
        "text": {
          "fa": "هیروشیما و ناگازاکی در اوت بمباران شدند و جنگ پایان یافت.",
          "en": "Hiroshima and Nagasaki were bombed in August and the war ended."
        }
      },
      {
        "year": 1947,
        "title": {
          "fa": "دکترین ترومن",
          "en": "The Truman Doctrine"
        },
        "text": {
          "fa": "آمریکا به یونان و ترکیه کمک کرد تا کمونیسم مهار شود.",
          "en": "America aided Greece and Turkey to contain communism."
        }
      },
      {
        "year": 1948,
        "title": {
          "fa": "طرح مارشال",
          "en": "The Marshall Plan"
        },
        "text": {
          "fa": "کمک اقتصادی گسترده به بازسازی اروپای غربی.",
          "en": "Large-scale economic aid to rebuild western Europe."
        }
      },
      {
        "year": 1949,
        "title": {
          "fa": "تأسیس ناتو",
          "en": "Founding of NATO"
        },
        "text": {
          "fa": "در ۴ آوریل پیمان آتلانتیک شمالی امضا شد.",
          "en": "On 4 April the North Atlantic Treaty was signed."
        }
      },
      {
        "year": 1950,
        "yearText": {
          "fa": "۱۹۵۰ تا ۱۹۵۳",
          "en": "1950 to 1953"
        },
        "title": {
          "fa": "جنگ کره",
          "en": "The Korean War"
        },
        "text": {
          "fa": "جنگ نیابتی میان بلوک غرب و شرق.",
          "en": "A proxy war between the western and eastern blocs."
        }
      },
      {
        "year": 1954,
        "title": {
          "fa": "براون علیه هیئت آموزش",
          "en": "Brown v. Board of Education"
        },
        "text": {
          "fa": "دیوان عالی جدایی نژادی در مدرسه‌ها را مغایر قانون اساسی دانست.",
          "en": "The Supreme Court held racial segregation in schools unconstitutional."
        }
      },
      {
        "year": 1955,
        "title": {
          "fa": "تحریم اتوبوس‌های مونتگومری",
          "en": "The Montgomery bus boycott"
        },
        "text": {
          "fa": "پس از بازداشت رزا پارکس در ۱ دسامبر آغاز شد.",
          "en": "It began after Rosa Parks was arrested on 1 December."
        }
      },
      {
        "year": 1959,
        "title": {
          "fa": "آلاسکا و هاوایی",
          "en": "Alaska and Hawaii"
        },
        "text": {
          "fa": "دو ایالت ۴۹ و ۵۰ شدند.",
          "en": "They became the 49th and 50th states."
        }
      },
      {
        "year": 1963,
        "title": {
          "fa": "راهپیمایی واشینگتن و ترور کندی",
          "en": "The March on Washington and Kennedy’s assassination"
        },
        "text": {
          "fa": "کینگ در ۲۸ اوت سخنرانی کرد؛ کندی در ۲۲ نوامبر ترور شد.",
          "en": "King spoke on 28 August; Kennedy was assassinated on 22 November."
        }
      },
      {
        "year": 1964,
        "title": {
          "fa": "قانون حقوق مدنی",
          "en": "The Civil Rights Act"
        },
        "text": {
          "fa": "جدایی نژادی در اماکن عمومی ممنوع شد.",
          "en": "Racial segregation in public places was banned."
        }
      },
      {
        "year": 1965,
        "title": {
          "fa": "قانون حق رأی",
          "en": "The Voting Rights Act"
        },
        "text": {
          "fa": "موانع نژادی رأی‌دادن برداشته شد.",
          "en": "Racial barriers to voting were removed."
        }
      },
      {
        "year": 1968,
        "title": {
          "fa": "ترور مارتین لوتر کینگ",
          "en": "The assassination of Martin Luther King Jr."
        },
        "text": {
          "fa": "کینگ در ۴ آوریل در ممفیس ترور شد.",
          "en": "King was assassinated in Memphis on 4 April."
        }
      },
      {
        "year": 1969,
        "title": {
          "fa": "فرود بر ماه",
          "en": "The Moon landing"
        },
        "text": {
          "fa": "آپولو ۱۱ در ۲۰ ژوئیه نیل آرمسترانگ و باز آلدرین را بر ماه نشاند.",
          "en": "On 20 July Apollo 11 put Neil Armstrong and Buzz Aldrin on the Moon."
        }
      },
      {
        "year": 1974,
        "title": {
          "fa": "استعفای نیکسون",
          "en": "Nixon’s resignation"
        },
        "text": {
          "fa": "رسوایی واترگیت در ۹ اوت رئیس‌جمهور را از قدرت انداخت.",
          "en": "The Watergate scandal drove the president from office on 9 August."
        }
      },
      {
        "year": 1975,
        "title": {
          "fa": "سقوط سایگون",
          "en": "The fall of Saigon"
        },
        "text": {
          "fa": "در ۳۰ آوریل جنگ ویتنام پایان یافت.",
          "en": "On 30 April the Vietnam War ended."
        }
      },
      {
        "year": 1979,
        "yearText": {
          "fa": "۱۹۷۹ تا ۱۹۸۱",
          "en": "1979 to 1981"
        },
        "title": {
          "fa": "گروگان‌گیری در تهران",
          "en": "The hostage crisis in Tehran"
        },
        "text": {
          "fa": "۴۴۴ روز؛ از ۴ نوامبر ۱۹۷۹ تا ۲۰ ژانویه‌ی ۱۹۸۱.",
          "en": "444 days, from 4 November 1979 to 20 January 1981."
        }
      },
      {
        "year": 1991,
        "title": {
          "fa": "پایان جنگ سرد",
          "en": "The end of the Cold War"
        },
        "text": {
          "fa": "اتحاد شوروی در دسامبر فروپاشید.",
          "en": "The Soviet Union collapsed in December."
        }
      },
      {
        "year": 2001,
        "title": {
          "fa": "حمله‌های ۱۱ سپتامبر",
          "en": "The attacks of 11 September"
        },
        "text": {
          "fa": "حدود ۲۹۷۷ نفر کشته شدند و جنگ افغانستان آغاز شد.",
          "en": "About 2,977 people were killed and the war in Afghanistan began."
        }
      },
      {
        "year": 2008,
        "title": {
          "fa": "بحران مالی و انتخاب اوباما",
          "en": "The financial crisis and Obama’s election"
        },
        "text": {
          "fa": "باراک اوباما در ۴ نوامبر نخستین رئیس‌جمهور سیاه‌پوست شد.",
          "en": "On 4 November Barack Obama became the first Black president."
        }
      },
      {
        "year": 2020,
        "title": {
          "fa": "پاندمی کووید-۱۹",
          "en": "The COVID-19 pandemic"
        },
        "text": {
          "fa": "سازمان جهانی بهداشت در ۱۱ مارس آن را پاندمی اعلام کرد.",
          "en": "The World Health Organization declared it a pandemic on 11 March."
        }
      }
    ]
  },
  "russia": {
    "sections": [
      {
        "id": "kievan-rus",
        "title": {
          "fa": "اسلاوهای شرقی و روس کی‌یف",
          "en": "The Eastern Slavs and Kievan Rus’"
        },
        "text": {
          "fa": [
            "اسلاوهای شرقی از نخستین هزاره‌ی میلادی در جنگل‌ها و دشت‌های شرق اروپا می‌زیستند. بنا بر روایت تاریخ‌نامه‌ها، در ۸۶۲ شهرهای شمالی روریک، رهبری وارنگی (اسکاندیناویایی)، را به حکومت دعوت کردند؛ سنت، این را آغاز دولت روس می‌داند و تاریخ دقیق و جزئیاتش محل بحث مورخان است. جانشین او اولگ در ۸۸۲ نووگورود و کی‌یف را یکی کرد و «روس کی‌یف» شکل گرفت؛ دولتی از شهرهای مستقل با شاهزاده‌ی بزرگ در کی‌یف که از دریای بالتیک تا دریای سیاه را کنترل می‌کرد.",
            "ولادیمیر کبیر، شاهزاده‌ی کی‌یف (حدود ۹۸۰ تا ۱۰۱۵)، در ۹۸۸ مسیحیت ارتدکس را از بیزانس پذیرفت و آیین مردم را تغییر داد. یاروسلاو حکیم (۱۰۱۹ تا ۱۰۵۴) مجموعه‌ی قوانین «حقیقت روس» را گرد آورد و کی‌یف را به مرکز بزرگ فرهنگ و تجارت تبدیل کرد. پس از مرگ او دولت به شاهزاده‌نشین‌های رقیب تقسیم شد و ضعیف گشت."
          ],
          "en": [
            "The Eastern Slavs lived in the forests and steppes of eastern Europe from the first millennium CE. According to the chronicles, in 862 the northern towns invited Rurik, a Varangian (Scandinavian) leader, to rule; tradition regards this as the start of the Rus’ state, and its exact date and details are debated by historians. His successor Oleg united Novgorod and Kyiv in 882 and ‘Kievan Rus’’ took shape: a state of separate towns with a grand prince in Kyiv that controlled the land from the Baltic to the Black Sea.",
            "Vladimir the Great, prince of Kyiv (about 980 to 1015), accepted Orthodox Christianity from Byzantium in 988 and changed the people’s religion. Yaroslav the Wise (1019 to 1054) gathered the law code ‘Russkaya Pravda’ and made Kyiv a great centre of culture and trade. After his death the state split into rival principalities and weakened."
          ]
        }
      },
      {
        "id": "mongols",
        "title": {
          "fa": "حمله‌ی مغول و برآمدن مسکو",
          "en": "The Mongol invasion and the rise of Moscow"
        },
        "text": {
          "fa": [
            "مغول‌ها در ۱۲۳۷ تا ۱۲۴۰ به سرزمین‌های روس حمله کردند و کی‌یف را در ۱۲۴۰ ویران کردند. شاهزاده‌نشین‌ها باج‌گزار «اردوی زرین» شدند، دولت مغولی که از ولگا حکم می‌راند. الکساندر نوسکی در ۱۲۴۰ بر سوئدی‌ها در رود نوا و در ۱۲۴۲ بر شوالیه‌های توتونی در دریاچه‌ی پیپوس پیروز شد، اما با اردو سازش کرد.",
            "مسکو، که نخستین بار در ۱۱۴۷ در تاریخ‌نامه‌ها از آن نام برده شد، به‌تدریج با همکاری با اردو و گردآوری باج قدرتمند شد. دمیتری دونسکوی در نبرد کولیکوو (۸ سپتامبر ۱۳۸۰) لشکری از اردو را شکست داد؛ هرچند دو سال بعد مسکو غارت شد. ایوان سوم (۱۴۶۲ تا ۱۵۰۵) نووگورود را گرفت و در ۱۴۸۰ با «ایستادگی بر رود اوگرا» باج‌گزاری را پایان داد. مسکو خود را وارث بیزانس و «روم سوم» می‌دانست و عقاب دوسر را نشان گرفت."
          ],
          "en": [
            "The Mongols invaded the Rus’ lands in 1237 to 1240 and destroyed Kyiv in 1240. The principalities became tributaries of the ‘Golden Horde’, the Mongol state ruling from the Volga. Alexander Nevsky defeated the Swedes on the Neva in 1240 and the Teutonic Knights on Lake Peipus in 1242, but he made terms with the Horde.",
            "Moscow, first named in the chronicles in 1147, gradually grew strong by cooperating with the Horde and collecting tribute. Dmitry Donskoy defeated an army of the Horde at the Battle of Kulikovo (8 September 1380), though Moscow was sacked two years later. Ivan III (1462 to 1505) took Novgorod and in 1480 ended the tribute with the ‘Great Stand on the Ugra River’. Moscow saw itself as heir of Byzantium and the ‘Third Rome’ and took the double-headed eagle as its emblem."
          ]
        }
      },
      {
        "id": "tsardom",
        "title": {
          "fa": "تزارستان و دوران آشوب",
          "en": "The Tsardom and the Time of Troubles"
        },
        "text": {
          "fa": [
            "ایوان چهارم (ایوان مخوف) در ۱۵۴۷ نخستین کسی بود که با عنوان «تزار همه‌ی روس‌ها» تاج‌گذاری کرد. او کازان (۱۵۵۲) و آستاراخان (۱۵۵۶) را گرفت و راه را به سیبری و ولگا باز کرد. جنگ لیوونی (۱۵۵۸ تا ۱۵۸۳) بی‌نتیجه ماند. او در «اوپریچنینا» (۱۵۶۵ تا ۱۵۷۲) با سرکوب شدید نجبا و مردم نظامی از ترس و خشونت ساخت.",
            "با مرگ فئودور، آخرین تزار خاندان روریک، در ۱۵۹۸ «دوران آشوب» آغاز شد: قحطی، مدعیان دروغین تاج‌وتخت و اشغال مسکو توسط لهستان (۱۶۱۰ تا ۱۶۱۲). مردم برای آزادسازی مسکو بسیج شدند و در ۱۶۱۳ میخائیل رمانوف را به تزاری برگزیدند و خاندان رمانوف تا ۱۹۱۷ بر روسیه حکم راند. در قرن هفدهم روسیه به اقیانوس آرام رسید و اختلاف کلیسایی (۱۶۶۶) روس‌ها را به دو گروه تقسیم کرد."
          ],
          "en": [
            "Ivan IV (Ivan the Terrible) was in 1547 the first to be crowned with the title ‘Tsar of All the Russias’. He took Kazan (1552) and Astrakhan (1556) and opened the way to Siberia and the Volga. The Livonian War (1558 to 1583) came to nothing. In the ‘oprichnina’ (1565 to 1572) he made a military regime of fear and violence with severe repression of nobles and people.",
            "With the death of Feodor, the last tsar of the Rurik line, in 1598 the ‘Time of Troubles’ began: famine, false claimants to the throne and the occupation of Moscow by Poland (1610 to 1612). The people mobilized to free Moscow and in 1613 chose Michael Romanov as tsar, and the Romanov dynasty ruled Russia until 1917. In the seventeenth century Russia reached the Pacific, and the church schism (1666) divided Russians into two camps."
          ]
        }
      },
      {
        "id": "peter-catherine",
        "title": {
          "fa": "پتر کبیر و کاترین کبیر",
          "en": "Peter the Great and Catherine the Great"
        },
        "text": {
          "fa": [
            "پتر اول (تزار از ۱۶۸۲، حاکم مستقل از ۱۶۹۶) با سفر به اروپا (۱۶۹۷ تا ۱۶۹۸) به غربی‌کردن کشور پرداخت: ارتش و نیروی دریایی نوین، تقویم، لباس، آموزش. در جنگ بزرگ شمال (۱۷۰۰ تا ۱۷۲۱) سوئد را شکست داد (پولتاوا ۱۷۰۹)، سن‌پترزبورگ را در ۱۷۰۳ بنیان گذاشت و در ۱۷۲۱ خود را «امپراتور» اعلام کرد. آکادمی علوم در ۱۷۲۴ تأسیس شد.",
            "کاترین دوم (۱۷۶۲ تا ۱۷۹۶)، شاهزاده‌ی آلمانی‌تبار که با کودتا بر همسرش پتر سوم پیروز شد، روسیه را گسترش داد: مرزها به دریای سیاه رسید (الحاق کریمه ۱۷۸۳) و لهستان در سه تقسیم (۱۷۷۲، ۱۷۹۳، ۱۷۹۵) میان روسیه، پروس و اتریش تقسیم شد. او با ولتر و دیدرو مکاتبه می‌کرد و خود را فرمانروای روشن‌اندیش می‌دانست، اما شورش پوگاچف (۱۷۷۳ تا ۱۷۷۵) را سرکوب کرد و بردگی دهقانان (سرف‌ها) را تشدید کرد."
          ],
          "en": [
            "Peter I (tsar from 1682, sole ruler from 1696) set about westernizing the country after travelling in Europe (1697 to 1698): a modern army and navy, the calendar, dress, education. In the Great Northern War (1700 to 1721) he defeated Sweden (Poltava 1709), founded St Petersburg in 1703 and in 1721 proclaimed himself ‘Emperor’. The Academy of Sciences was founded in 1724.",
            "Catherine II (1762 to 1796), a German-born princess who won through a coup against her husband Peter III, expanded Russia: its borders reached the Black Sea (annexation of Crimea in 1783) and Poland was divided among Russia, Prussia and Austria in three partitions (1772, 1793, 1795). She corresponded with Voltaire and Diderot and saw herself as an enlightened ruler, but she put down the Pugachev rebellion (1773 to 1775) and tightened the bondage of the peasants (serfs)."
          ]
        }
      },
      {
        "id": "nineteenth-century",
        "title": {
          "fa": "قرن نوزدهم: ناپلئون، اصلاحات و ادبیات",
          "en": "The nineteenth century: Napoleon, reform and literature"
        },
        "text": {
          "fa": [
            "ناپلئون در ۱۸۱۲ با سپاه بزرگی به روسیه حمله کرد. پس از نبرد بورودینو (۷ سپتامبر) مسکو را گرفت اما آتش‌سوزی شهر، سرما و کمبود آذوقه او را به عقب‌نشینی واداشت و بیشتر سپاهش نابود شد. روسیه در ۱۸۱۴ با متفقین وارد پاریس شد. شورش «دکابریست‌ها» در ۱۸۲۵ علیه خودکامگی سرکوب شد. نیکلای اول (۱۸۲۵ تا ۱۸۵۵) حکومتی سخت‌گیر داشت و روسیه در جنگ کریمه (۱۸۵۳ تا ۱۸۵۶) از بریتانیا، فرانسه و عثمانی شکست خورد.",
            "الکساندر دوم در ۱۹ فوریه‌ی ۱۸۶۱ (طبق تقویم قدیم؛ ۳ مارس میلادی) بردگی دهقانان را لغو کرد و اصلاحاتی در قضا و ارتش آورد. او در ۱۸۶۷ آلاسکا را به آمریکا فروخت و در ۱۸۸۱ ترور شد. روسیه در دهه‌های پایانی قرن به آسیای مرکزی گسترش یافت و ساخت راه‌آهن سراسری سیبری از ۱۸۹۱ آغاز شد. قرن نوزدهم «عصر طلایی» ادبیات روس بود: پوشکین، تولستوی، داستایوفسکی و چخوف."
          ],
          "en": [
            "Napoleon invaded Russia in 1812 with a vast army. After the Battle of Borodino (7 September) he took Moscow, but the burning of the city, the cold and shortage of supplies forced him to retreat and most of his army was destroyed. Russia entered Paris with the allies in 1814. The ‘Decembrist’ revolt of 1825 against autocracy was put down. Nicholas I (1825 to 1855) ruled severely and Russia was defeated by Britain, France and the Ottomans in the Crimean War (1853 to 1856).",
            "Alexander II abolished the bondage of the peasants on 19 February 1861 (old style; 3 March by the Gregorian calendar) and brought reforms in the courts and army. In 1867 he sold Alaska to America and in 1881 he was assassinated. In the last decades of the century Russia expanded into Central Asia and construction of the Trans-Siberian Railway began in 1891. The nineteenth century was the ‘Golden Age’ of Russian literature: Pushkin, Tolstoy, Dostoevsky and Chekhov."
          ]
        }
      },
      {
        "id": "revolutions",
        "title": {
          "fa": "انقلاب‌های ۱۹۰۵ و ۱۹۱۷ و جنگ داخلی",
          "en": "The revolutions of 1905 and 1917 and the Civil War"
        },
        "text": {
          "fa": [
            "شکست در جنگ با ژاپن (۱۹۰۴ تا ۱۹۰۵) و «یکشنبه‌ی خونین» (۲۲ ژانویه‌ی ۱۹۰۵) انقلاب ۱۹۰۵ را برانگیخت. نیکلای دوم با «بیانیه‌ی اکتبر» پارلمان (دوما) را پذیرفت. شرکت در جنگ جهانی اول (از ۱۹۱۴) با تلفات سنگین و کمبود غذا کشور را فرسود. «انقلاب فوریه» در مارس ۱۹۱۷ (طبق تقویم میلادی) تزار را برکنار کرد و دولت موقت شکل گرفت.",
            "بلشویک‌ها به رهبری لنین در «انقلاب اکتبر» (۷ نوامبر ۱۹۱۷ میلادی؛ ۲۵ اکتبر تقویم قدیم) قدرت را گرفتند. پیمان برست-لیتوفسک (مارس ۱۹۱۸) روسیه را از جنگ جهانی بیرون برد. جنگ داخلی میان «سرخ‌ها» و «سفیدها» تا ۱۹۲۲ ادامه یافت و میلیون‌ها نفر در جنگ، قحطی و بیماری مردند. خاندان رمانوف در ۱۷ ژوئیه‌ی ۱۹۱۸ اعدام شد. در ۳۰ دسامبر ۱۹۲۲ اتحاد جماهیر شوروی بنیان گذاشته شد."
          ],
          "en": [
            "Defeat in the war with Japan (1904 to 1905) and ‘Bloody Sunday’ (22 January 1905) set off the 1905 revolution. Nicholas II accepted a parliament (the Duma) with the ‘October Manifesto’. Taking part in the First World War (from 1914) wore the country down with heavy losses and food shortages. The ‘February Revolution’ in March 1917 (Gregorian calendar) removed the tsar and a provisional government took shape.",
            "The Bolsheviks under Lenin took power in the ‘October Revolution’ (7 November 1917 by the Gregorian calendar; 25 October old style). The Treaty of Brest-Litovsk (March 1918) took Russia out of the First World War. The Civil War between the ‘Reds’ and the ‘Whites’ lasted until 1922 and millions died in the fighting, famine and disease. The Romanov family was executed on 17 July 1918. On 30 December 1922 the Union of Soviet Socialist Republics was founded."
          ]
        }
      },
      {
        "id": "soviet-union",
        "title": {
          "fa": "اتحاد شوروی: لنین، استالین و جنگ جهانی دوم",
          "en": "The Soviet Union: Lenin, Stalin and the Second World War"
        },
        "text": {
          "fa": [
            "لنین در ۲۱ ژانویه‌ی ۱۹۲۴ درگذشت و استالین پس از رقابت قدرت را در دست گرفت. برنامه‌های پنج‌ساله (از ۱۹۲۸) صنعتی‌سازی شتابان و اشتراکی‌کردن کشاورزی را پیش بردند. قحطی ۱۹۳۲ تا ۱۹۳۳ در اوکراین و بخش‌هایی از شوروی میلیون‌ها نفر را کشت. «ترور بزرگ» (۱۹۳۶ تا ۱۹۳۸) صدها هزار نفر را اعدام و میلیون‌ها نفر را در گولاگ زندانی کرد. پیمان مولوتوف-ریبنتروپ (۲۳ اوت ۱۹۳۹) آلمان و شوروی را موقتاً متحد کرد.",
            "آلمان در ۲۲ ژوئن ۱۹۴۱ به شوروی حمله کرد. نبرد استالینگراد (اوت ۱۹۴۲ تا ۲ فوریه‌ی ۱۹۴۳) نقطه‌ی عطف شد و ارتش سرخ در مه ۱۹۴۵ برلین را گرفت. شوروی در «جنگ بزرگ میهنی» حدود ۲۷ میلیون نفر از دست داد، بیشتر از هر کشور دیگر. استالین در ۵ مارس ۱۹۵۳ درگذشت. حکومت او با سرکوب شدید و مرگ میلیون‌ها نفر همراه بود."
          ],
          "en": [
            "Lenin died on 21 January 1924 and Stalin took power after a struggle. The five-year plans (from 1928) pushed rapid industrialization and the collectivization of farming. The famine of 1932 to 1933 in Ukraine and parts of the Soviet Union killed millions. The ‘Great Terror’ (1936 to 1938) executed hundreds of thousands and imprisoned millions in the Gulag. The Molotov–Ribbentrop Pact (23 August 1939) briefly allied Germany and the Soviet Union.",
            "Germany invaded the Soviet Union on 22 June 1941. The Battle of Stalingrad (August 1942 to 2 February 1943) was the turning point and the Red Army took Berlin in May 1945. The Soviet Union lost about 27 million people in the ‘Great Patriotic War’, more than any other country. Stalin died on 5 March 1953. His rule was marked by severe repression and the deaths of millions."
          ]
        }
      },
      {
        "id": "cold-war",
        "title": {
          "fa": "جنگ سرد و فروپاشی",
          "en": "The Cold War and the collapse"
        },
        "text": {
          "fa": [
            "پس از جنگ، شوروی ابرقدرت شد و اروپای شرقی را زیر نفوذ آورد. نخستین بمب اتمی شوروی در ۲۹ اوت ۱۹۴۹ آزمایش شد. خروشچف در ۲۵ فوریه‌ی ۱۹۵۶ در «سخنرانی محرمانه» جنایت‌های استالین را نکوهید. رقابت فضایی با آمریکا با پرتاب اسپوتنیک (۴ اکتبر ۱۹۵۷) و پرواز یوری گاگارین (۱۲ آوریل ۱۹۶۱)، نخستین انسان در فضا، به نفع شوروی آغاز شد. بحران موشکی کوبا (اکتبر ۱۹۶۲) جهان را به لبه‌ی جنگ اتمی کشاند. برژنف (۱۹۶۴ تا ۱۹۸۲) دوران رکود را رقم زد و حمله به افغانستان (۱۹۷۹ تا ۱۹۸۹) کشور را فرسود.",
            "گورباچف از ۱۹۸۵ با «گلاسنوست» (شفافیت) و «پرسترویکا» (بازسازی) کوشید نظام را اصلاح کند. حادثه‌ی نیروگاه چرنوبیل (۲۶ آوریل ۱۹۸۶) اعتماد مردم را ضربه زد. در ۱۹۸۹ حکومت‌های کمونیست اروپای شرقی سقوط کردند. پس از کودتای ناکام اوت ۱۹۹۱، جمهوری‌ها یکی‌یکی استقلال گرفتند. گورباچف در ۲۵ دسامبر ۱۹۹۱ استعفا داد و شوروی در پایان ۱۹۹۱ منحل شد."
          ],
          "en": [
            "After the war the Soviet Union became a superpower and brought eastern Europe under its influence. The first Soviet atomic bomb was tested on 29 August 1949. Khrushchev condemned Stalin’s crimes in a ‘secret speech’ on 25 February 1956. The space race with America began in the Soviet Union’s favour with the launch of Sputnik (4 October 1957) and the flight of Yuri Gagarin (12 April 1961), the first person in space. The Cuban Missile Crisis (October 1962) brought the world to the edge of nuclear war. Brezhnev (1964 to 1982) presided over an era of stagnation and the invasion of Afghanistan (1979 to 1989) wore the country down.",
            "From 1985 Gorbachev tried to reform the system with ‘glasnost’ (openness) and ‘perestroika’ (restructuring). The Chernobyl nuclear plant accident (26 April 1986) dealt a blow to public trust. In 1989 the communist governments of eastern Europe fell. After the failed coup of August 1991 the republics gained independence one after another. Gorbachev resigned on 25 December 1991 and the Soviet Union was dissolved at the end of 1991."
          ]
        }
      },
      {
        "id": "russian-federation",
        "title": {
          "fa": "فدراسیون روسیه",
          "en": "The Russian Federation"
        },
        "text": {
          "fa": [
            "بوریس یلتسین، نخستین رئیس‌جمهور فدراسیون روسیه (۱۹۹۱ تا ۱۹۹۹)، اقتصاد را با اصلاحات شتابان به بازار آزاد برد، اما دهه‌ی ۱۹۹۰ دوران فقر، تورم و آشوب بود. بحران قانون‌گذاری اکتبر ۱۹۹۳ به‌دست ارتش پایان یافت و قانون اساسی جدید در ۱۲ دسامبر ۱۹۹۳ تصویب شد. جنگ‌های چچن (۱۹۹۴ تا ۱۹۹۶ و از ۱۹۹۹) هزاران کشته داشت. بحران مالی ۱۹۹۸ به بی‌اعتباری یلتسین انجامید.",
            "ولادیمیر پوتین از ۱۹۹۹ به قدرت رسید: نخست‌وزیر، رئیس‌جمهور از ۲۰۰۰ تا ۲۰۰۸، نخست‌وزیر ۲۰۰۸ تا ۲۰۱۲ و دوباره رئیس‌جمهور از ۲۰۱۲. اقتصاد روسیه با فروش نفت و گاز رشد کرد. جنگ با گرجستان (۲۰۰۸)، الحاق کریمه (۲۰۱۴) که اغلب کشورها و مجمع عمومی سازمان ملل آن را به رسمیت نشناختند، و حمله‌ی گسترده به اوکراین در ۲۴ فوریه‌ی ۲۰۲۲ که مجمع عمومی سازمان ملل آن را محکوم کرد، روابط روسیه با غرب را بحرانی کرد و تحریم‌های گسترده در پی آمد. پیامدهای انسانی و سیاسی این جنگ بزرگ است و گزارش‌های آن هنوز تغییر می‌کند."
          ],
          "en": [
            "Boris Yeltsin, the first president of the Russian Federation (1991 to 1999), took the economy to a free market with rapid reforms, but the 1990s were a time of poverty, inflation and turmoil. The constitutional crisis of October 1993 was ended by the army and a new constitution was approved on 12 December 1993. The Chechen wars (1994 to 1996 and from 1999) had thousands of dead. The financial crisis of 1998 discredited Yeltsin.",
            "Vladimir Putin rose to power in 1999: prime minister, president from 2000 to 2008, prime minister from 2008 to 2012 and president again from 2012. Russia’s economy grew on oil and gas sales. The war with Georgia (2008), the annexation of Crimea (2014), which most countries and the UN General Assembly did not recognize, and the large-scale invasion of Ukraine on 24 February 2022, which the UN General Assembly condemned, put Russia’s relations with the West into crisis and led to wide-ranging sanctions. The human and political consequences of this war are great and reports on it are still changing."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": 862,
        "title": {
          "fa": "دعوت از روریک (بنا بر سنت)",
          "en": "The invitation to Rurik (according to tradition)"
        },
        "text": {
          "fa": "بنا بر تاریخ‌نامه‌ها، آغاز دولت روس؛ جزئیات آن محل بحث است.",
          "en": "According to the chronicles, the start of the Rus’ state; its details are debated."
        }
      },
      {
        "year": 882,
        "title": {
          "fa": "اولگ نووگورود و کی‌یف را یکی می‌کند",
          "en": "Oleg unites Novgorod and Kyiv"
        },
        "text": {
          "fa": "روس کی‌یف شکل گرفت.",
          "en": "Kievan Rus’ took shape."
        }
      },
      {
        "year": 988,
        "title": {
          "fa": "پذیرش مسیحیت ارتدکس",
          "en": "The adoption of Orthodox Christianity"
        },
        "text": {
          "fa": "ولادیمیر کبیر آیین بیزانس را پذیرفت.",
          "en": "Vladimir the Great accepted the Byzantine faith."
        }
      },
      {
        "year": 1019,
        "yearText": {
          "fa": "۱۰۱۹ تا ۱۰۵۴",
          "en": "1019 to 1054"
        },
        "title": {
          "fa": "یاروسلاو حکیم",
          "en": "Yaroslav the Wise"
        },
        "text": {
          "fa": "«حقیقت روس» گرد آمد و کی‌یف به اوج رسید.",
          "en": "‘Russkaya Pravda’ was gathered and Kyiv reached its peak."
        }
      },
      {
        "year": 1147,
        "title": {
          "fa": "نخستین یادکرد مسکو",
          "en": "The first mention of Moscow"
        },
        "text": {
          "fa": "تاریخ‌نامه‌ها نخستین بار از مسکو نام بردند.",
          "en": "The chronicles first named Moscow."
        }
      },
      {
        "year": 1237,
        "yearText": {
          "fa": "۱۲۳۷ تا ۱۲۴۰",
          "en": "1237 to 1240"
        },
        "title": {
          "fa": "حمله‌ی مغول",
          "en": "The Mongol invasion"
        },
        "text": {
          "fa": "کی‌یف در ۱۲۴۰ ویران شد.",
          "en": "Kyiv was destroyed in 1240."
        }
      },
      {
        "year": 1240,
        "title": {
          "fa": "نبرد نوا",
          "en": "The Battle of the Neva"
        },
        "text": {
          "fa": "الکساندر نوسکی سوئدی‌ها را شکست داد؛ در ۱۲۴۲ بر شوالیه‌های توتونی در دریاچه‌ی پیپوس پیروز شد.",
          "en": "Alexander Nevsky defeated the Swedes; in 1242 he beat the Teutonic Knights on Lake Peipus."
        }
      },
      {
        "year": 1380,
        "title": {
          "fa": "نبرد کولیکوو",
          "en": "The Battle of Kulikovo"
        },
        "text": {
          "fa": "دمیتری دونسکوی در ۸ سپتامبر لشکری از اردوی زرین را شکست داد.",
          "en": "On 8 September Dmitry Donskoy defeated an army of the Golden Horde."
        }
      },
      {
        "year": 1480,
        "title": {
          "fa": "ایستادگی بر رود اوگرا",
          "en": "The Great Stand on the Ugra"
        },
        "text": {
          "fa": "باج‌گزاری به اردو به پایان رسید.",
          "en": "Tribute to the Horde ended."
        }
      },
      {
        "year": 1547,
        "title": {
          "fa": "تاج‌گذاری ایوان مخوف",
          "en": "The coronation of Ivan the Terrible"
        },
        "text": {
          "fa": "نخستین «تزار همه‌ی روس‌ها».",
          "en": "The first ‘Tsar of All the Russias’."
        }
      },
      {
        "year": 1552,
        "title": {
          "fa": "تصرف کازان",
          "en": "The capture of Kazan"
        },
        "text": {
          "fa": "آستاراخان در ۱۵۵۶ هم گرفته شد.",
          "en": "Astrakhan was also taken in 1556."
        }
      },
      {
        "year": 1598,
        "title": {
          "fa": "آغاز دوران آشوب",
          "en": "The start of the Time of Troubles"
        },
        "text": {
          "fa": "با مرگ فئودور، خاندان روریک پایان یافت.",
          "en": "With the death of Feodor the Rurik line ended."
        }
      },
      {
        "year": 1613,
        "title": {
          "fa": "آغاز خاندان رمانوف",
          "en": "The Romanov dynasty begins"
        },
        "text": {
          "fa": "میخائیل رمانوف به تزاری برگزیده شد.",
          "en": "Michael Romanov was chosen as tsar."
        }
      },
      {
        "year": 1682,
        "title": {
          "fa": "پتر اول بر تخت می‌نشیند",
          "en": "Peter I comes to the throne"
        },
        "text": {
          "fa": "او از ۱۶۹۶ حاکم مستقل بود.",
          "en": "He was sole ruler from 1696."
        }
      },
      {
        "year": 1700,
        "yearText": {
          "fa": "۱۷۰۰ تا ۱۷۲۱",
          "en": "1700 to 1721"
        },
        "title": {
          "fa": "جنگ بزرگ شمال",
          "en": "The Great Northern War"
        },
        "text": {
          "fa": "روسیه سوئد را شکست داد و به بالتیک رسید.",
          "en": "Russia defeated Sweden and reached the Baltic."
        }
      },
      {
        "year": 1703,
        "title": {
          "fa": "تأسیس سن‌پترزبورگ",
          "en": "The founding of St Petersburg"
        },
        "text": {
          "fa": "شهری که بعدها پایتخت امپراتوری شد.",
          "en": "The city that later became the imperial capital."
        }
      },
      {
        "year": 1721,
        "title": {
          "fa": "امپراتوری روسیه",
          "en": "The Russian Empire"
        },
        "text": {
          "fa": "پتر خود را «امپراتور» اعلام کرد.",
          "en": "Peter proclaimed himself ‘Emperor’."
        }
      },
      {
        "year": 1755,
        "title": {
          "fa": "دانشگاه مسکو",
          "en": "Moscow University"
        },
        "text": {
          "fa": "به همت لومونوسوف بنیان گذاشته شد.",
          "en": "Founded through the efforts of Lomonosov."
        }
      },
      {
        "year": 1762,
        "title": {
          "fa": "کاترین دوم",
          "en": "Catherine II"
        },
        "text": {
          "fa": "با کودتا بر همسرش پیروز شد و امپراتریس شد.",
          "en": "She won through a coup against her husband and became empress."
        }
      },
      {
        "year": 1773,
        "yearText": {
          "fa": "۱۷۷۳ تا ۱۷۷۵",
          "en": "1773 to 1775"
        },
        "title": {
          "fa": "شورش پوگاچف",
          "en": "The Pugachev rebellion"
        },
        "text": {
          "fa": "بزرگ‌ترین شورش دهقانی قرن هجدهم سرکوب شد.",
          "en": "The greatest peasant revolt of the eighteenth century was put down."
        }
      },
      {
        "year": 1783,
        "title": {
          "fa": "الحاق کریمه",
          "en": "The annexation of Crimea"
        },
        "text": {
          "fa": "روسیه به دریای سیاه دست یافت.",
          "en": "Russia gained access to the Black Sea."
        }
      },
      {
        "year": 1812,
        "title": {
          "fa": "حمله‌ی ناپلئون",
          "en": "Napoleon’s invasion"
        },
        "text": {
          "fa": "سپاه بزرگ او پس از اشغال مسکو نابود شد.",
          "en": "His great army was destroyed after he occupied Moscow."
        }
      },
      {
        "year": 1825,
        "title": {
          "fa": "شورش دکابریست‌ها",
          "en": "The Decembrist revolt"
        },
        "text": {
          "fa": "شورش افسران علیه خودکامگی سرکوب شد.",
          "en": "The officers’ revolt against autocracy was put down."
        }
      },
      {
        "year": 1853,
        "yearText": {
          "fa": "۱۸۵۳ تا ۱۸۵۶",
          "en": "1853 to 1856"
        },
        "title": {
          "fa": "جنگ کریمه",
          "en": "The Crimean War"
        },
        "text": {
          "fa": "روسیه از بریتانیا، فرانسه و عثمانی شکست خورد.",
          "en": "Russia was defeated by Britain, France and the Ottomans."
        }
      },
      {
        "year": 1861,
        "title": {
          "fa": "لغو بردگی دهقانان",
          "en": "The abolition of serfdom"
        },
        "text": {
          "fa": "الکساندر دوم در ۱۹ فوریه (تقویم قدیم) فرمان را امضا کرد.",
          "en": "Alexander II signed the decree on 19 February (old style)."
        }
      },
      {
        "year": 1867,
        "title": {
          "fa": "فروش آلاسکا",
          "en": "The sale of Alaska"
        },
        "text": {
          "fa": "آلاسکا به ایالات متحده فروخته شد.",
          "en": "Alaska was sold to the United States."
        }
      },
      {
        "year": 1891,
        "title": {
          "fa": "آغاز راه‌آهن سراسری سیبری",
          "en": "The start of the Trans-Siberian Railway"
        },
        "text": {
          "fa": "ساخت خط تا ۱۹۱۶ ادامه یافت.",
          "en": "Construction of the line continued until 1916."
        }
      },
      {
        "year": 1904,
        "yearText": {
          "fa": "۱۹۰۴ تا ۱۹۰۵",
          "en": "1904 to 1905"
        },
        "title": {
          "fa": "جنگ با ژاپن",
          "en": "The war with Japan"
        },
        "text": {
          "fa": "شکست روسیه انقلاب ۱۹۰۵ را برانگیخت.",
          "en": "Russia’s defeat set off the 1905 revolution."
        }
      },
      {
        "year": 1905,
        "title": {
          "fa": "یکشنبه‌ی خونین",
          "en": "Bloody Sunday"
        },
        "text": {
          "fa": "در ۲۲ ژانویه راهپیمایی مسالمت‌آمیز به گلوله بسته شد.",
          "en": "On 22 January a peaceful march was fired on."
        }
      },
      {
        "year": 1914,
        "yearText": {
          "fa": "۱۹۱۴ تا ۱۹۱۷",
          "en": "1914 to 1917"
        },
        "title": {
          "fa": "روسیه در جنگ جهانی اول",
          "en": "Russia in the First World War"
        },
        "text": {
          "fa": "تلفات سنگین کشور را فرسود.",
          "en": "Heavy losses wore the country down."
        }
      },
      {
        "year": 1917,
        "title": {
          "fa": "انقلاب فوریه",
          "en": "The February Revolution"
        },
        "text": {
          "fa": "در مارس نیکلای دوم برکنار شد.",
          "en": "In March Nicholas II was removed."
        }
      },
      {
        "year": 1917,
        "title": {
          "fa": "انقلاب اکتبر",
          "en": "The October Revolution"
        },
        "text": {
          "fa": "بلشویک‌ها در ۷ نوامبر قدرت را گرفتند.",
          "en": "The Bolsheviks took power on 7 November."
        }
      },
      {
        "year": 1918,
        "yearText": {
          "fa": "۱۹۱۸ تا ۱۹۲۲",
          "en": "1918 to 1922"
        },
        "title": {
          "fa": "جنگ داخلی",
          "en": "The Civil War"
        },
        "text": {
          "fa": "نبرد سرخ‌ها و سفیدها؛ خاندان رمانوف در ۱۷ ژوئیه‌ی ۱۹۱۸ اعدام شد.",
          "en": "The struggle of Reds and Whites; the Romanov family was executed on 17 July 1918."
        }
      },
      {
        "year": 1922,
        "title": {
          "fa": "تأسیس اتحاد شوروی",
          "en": "The founding of the Soviet Union"
        },
        "text": {
          "fa": "در ۳۰ دسامبر اتحاد جماهیر شوروی بنیان گذاشته شد.",
          "en": "On 30 December the Union of Soviet Socialist Republics was founded."
        }
      },
      {
        "year": 1924,
        "title": {
          "fa": "مرگ لنین",
          "en": "The death of Lenin"
        },
        "text": {
          "fa": "در ۲۱ ژانویه درگذشت و استالین بالا آمد.",
          "en": "He died on 21 January and Stalin rose."
        }
      },
      {
        "year": 1928,
        "title": {
          "fa": "نخستین برنامه‌ی پنج‌ساله",
          "en": "The first five-year plan"
        },
        "text": {
          "fa": "صنعتی‌سازی شتابان و اشتراکی‌کردن کشاورزی.",
          "en": "Rapid industrialization and the collectivization of farming."
        }
      },
      {
        "year": 1932,
        "yearText": {
          "fa": "۱۹۳۲ تا ۱۹۳۳",
          "en": "1932 to 1933"
        },
        "title": {
          "fa": "قحطی بزرگ",
          "en": "The great famine"
        },
        "text": {
          "fa": "میلیون‌ها نفر در اوکراین و بخش‌هایی از شوروی مردند.",
          "en": "Millions died in Ukraine and parts of the Soviet Union."
        }
      },
      {
        "year": 1936,
        "yearText": {
          "fa": "۱۹۳۶ تا ۱۹۳۸",
          "en": "1936 to 1938"
        },
        "title": {
          "fa": "ترور بزرگ",
          "en": "The Great Terror"
        },
        "text": {
          "fa": "صدها هزار اعدام و میلیون‌ها زندانی در گولاگ.",
          "en": "Hundreds of thousands executed and millions imprisoned in the Gulag."
        }
      },
      {
        "year": 1939,
        "title": {
          "fa": "پیمان مولوتوف-ریبنتروپ",
          "en": "The Molotov–Ribbentrop Pact"
        },
        "text": {
          "fa": "پیمان عدم تجاوز شوروی و آلمان در ۲۳ اوت.",
          "en": "The Soviet–German non-aggression pact of 23 August."
        }
      },
      {
        "year": 1941,
        "title": {
          "fa": "حمله‌ی آلمان به شوروی",
          "en": "Germany invades the Soviet Union"
        },
        "text": {
          "fa": "در ۲۲ ژوئن «جنگ بزرگ میهنی» آغاز شد.",
          "en": "On 22 June the ‘Great Patriotic War’ began."
        }
      },
      {
        "year": 1942,
        "yearText": {
          "fa": "۱۹۴۲ تا ۱۹۴۳",
          "en": "1942 to 1943"
        },
        "title": {
          "fa": "نبرد استالینگراد",
          "en": "The Battle of Stalingrad"
        },
        "text": {
          "fa": "نقطه‌ی عطف جنگ؛ آلمان در ۲ فوریه‌ی ۱۹۴۳ تسلیم شد.",
          "en": "The turning point of the war; the Germans surrendered on 2 February 1943."
        }
      },
      {
        "year": 1945,
        "title": {
          "fa": "پیروزی بر آلمان",
          "en": "Victory over Germany"
        },
        "text": {
          "fa": "ارتش سرخ برلین را گرفت؛ ۹ مه در روسیه روز پیروزی است.",
          "en": "The Red Army took Berlin; 9 May is Victory Day in Russia."
        }
      },
      {
        "year": 1949,
        "title": {
          "fa": "نخستین بمب اتمی شوروی",
          "en": "The first Soviet atomic bomb"
        },
        "text": {
          "fa": "در ۲۹ اوت آزمایش شد.",
          "en": "Tested on 29 August."
        }
      },
      {
        "year": 1953,
        "title": {
          "fa": "مرگ استالین",
          "en": "The death of Stalin"
        },
        "text": {
          "fa": "در ۵ مارس درگذشت.",
          "en": "He died on 5 March."
        }
      },
      {
        "year": 1956,
        "title": {
          "fa": "سخنرانی محرمانه‌ی خروشچف",
          "en": "Khrushchev’s secret speech"
        },
        "text": {
          "fa": "در ۲۵ فوریه جنایت‌های استالین را نکوهید.",
          "en": "On 25 February he condemned Stalin’s crimes."
        }
      },
      {
        "year": 1957,
        "title": {
          "fa": "اسپوتنیک",
          "en": "Sputnik"
        },
        "text": {
          "fa": "نخستین ماهواره‌ی جهان در ۴ اکتبر پرتاب شد.",
          "en": "The world’s first satellite was launched on 4 October."
        }
      },
      {
        "year": 1961,
        "title": {
          "fa": "پرواز گاگارین",
          "en": "Gagarin’s flight"
        },
        "text": {
          "fa": "در ۱۲ آوریل نخستین انسان در فضا.",
          "en": "On 12 April the first person in space."
        }
      },
      {
        "year": 1962,
        "title": {
          "fa": "بحران موشکی کوبا",
          "en": "The Cuban Missile Crisis"
        },
        "text": {
          "fa": "جهان به لبه‌ی جنگ اتمی رسید.",
          "en": "The world came to the edge of nuclear war."
        }
      },
      {
        "year": 1979,
        "yearText": {
          "fa": "۱۹۷۹ تا ۱۹۸۹",
          "en": "1979 to 1989"
        },
        "title": {
          "fa": "جنگ افغانستان",
          "en": "The war in Afghanistan"
        },
        "text": {
          "fa": "حمله و حضور نظامی شوروی در افغانستان.",
          "en": "The Soviet invasion and military presence in Afghanistan."
        }
      },
      {
        "year": 1985,
        "title": {
          "fa": "گورباچف و پرسترویکا",
          "en": "Gorbachev and perestroika"
        },
        "text": {
          "fa": "اصلاحات گلاسنوست و پرسترویکا آغاز شد.",
          "en": "The reforms of glasnost and perestroika began."
        }
      },
      {
        "year": 1986,
        "title": {
          "fa": "حادثه‌ی چرنوبیل",
          "en": "The Chernobyl disaster"
        },
        "text": {
          "fa": "در ۲۶ آوریل نیروگاه هسته‌ای منفجر شد.",
          "en": "On 26 April the nuclear plant exploded."
        }
      },
      {
        "year": 1991,
        "title": {
          "fa": "فروپاشی شوروی",
          "en": "The collapse of the Soviet Union"
        },
        "text": {
          "fa": "گورباچف در ۲۵ دسامبر استعفا داد.",
          "en": "Gorbachev resigned on 25 December."
        }
      },
      {
        "year": 1993,
        "title": {
          "fa": "قانون اساسی جدید",
          "en": "The new constitution"
        },
        "text": {
          "fa": "در ۱۲ دسامبر تصویب شد.",
          "en": "Approved on 12 December."
        }
      },
      {
        "year": 1994,
        "yearText": {
          "fa": "۱۹۹۴ تا ۱۹۹۶",
          "en": "1994 to 1996"
        },
        "title": {
          "fa": "جنگ نخست چچن",
          "en": "The First Chechen War"
        },
        "text": {
          "fa": "جنگی با هزاران کشته؛ جنگ دوم از ۱۹۹۹ آغاز شد.",
          "en": "A war with thousands of dead; the second war began in 1999."
        }
      },
      {
        "year": 2000,
        "title": {
          "fa": "پوتین رئیس‌جمهور می‌شود",
          "en": "Putin becomes president"
        },
        "text": {
          "fa": "پس از استعفای یلتسین در پایان ۱۹۹۹ انتخاب شد.",
          "en": "Elected after Yeltsin’s resignation at the end of 1999."
        }
      },
      {
        "year": 2014,
        "title": {
          "fa": "الحاق کریمه",
          "en": "The annexation of Crimea"
        },
        "text": {
          "fa": "بیشتر کشورها و مجمع عمومی سازمان ملل آن را به رسمیت نشناختند.",
          "en": "Most countries and the UN General Assembly did not recognize it."
        }
      },
      {
        "year": 2022,
        "title": {
          "fa": "حمله‌ی گسترده به اوکراین",
          "en": "The large-scale invasion of Ukraine"
        },
        "text": {
          "fa": "در ۲۴ فوریه آغاز شد؛ مجمع عمومی سازمان ملل آن را محکوم کرد.",
          "en": "It began on 24 February; the UN General Assembly condemned it."
        }
      }
    ]
  },
  "india": {
    "sections": [
      {
        "id": "indus",
        "title": {
          "fa": "پیش از تاریخ و تمدن دره‌ی سند",
          "en": "Prehistory and the Indus Valley Civilization"
        },
        "text": {
          "fa": [
            "نشانه‌های زندگی انسان در شبه‌قاره‌ی هند به صدها هزار سال پیش برمی‌گردد. کشاورزی و دامداری در مهرگره (در پاکستان امروز) از حدود ۷۰۰۰ پیش از میلاد شناخته شده است. تمدن دره‌ی سند (حدود ۳۳۰۰ تا ۱۳۰۰ پیش از میلاد؛ دوره‌ی شکوفایی آن حدود ۲۶۰۰ تا ۱۹۰۰ پیش از میلاد) از کهن‌ترین تمدن‌های شهری جهان بود و در امتداد رود سند و رودهای شاخه‌اش گسترش یافت.",
            "شهرهای هراپا و موهنجودارو (هر دو در پاکستان امروز)، دولاویرا و لوتال (در هند امروز) خیابان‌های منظم، سیستم فاضلاب، خانه‌های آجری و وزنه‌های استاندارد داشتند. این مردم با بین‌النهرین تجارت می‌کردند و خط داشتند، اما خط آن‌ها هنوز خوانده نشده است. از حدود ۱۹۰۰ پیش از میلاد، احتمالاً در پی تغییر آب‌وهوا و تغییر مسیر رودها، شهرها رها شدند؛ علت دقیق آن محل بحث است."
          ],
          "en": [
            "Signs of human life in the Indian subcontinent go back hundreds of thousands of years. Farming and herding are known at Mehrgarh (in today’s Pakistan) from about 7000 BCE. The Indus Valley Civilization (about 3300 to 1300 BCE; its mature period about 2600 to 1900 BCE) was one of the world’s oldest urban civilizations and spread along the Indus and its tributaries.",
            "The cities of Harappa and Mohenjo-daro (both in today’s Pakistan), Dholavira and Lothal (in today’s India) had regular streets, drainage systems, brick houses and standard weights. These people traded with Mesopotamia and had a script, but their script has still not been deciphered. From about 1900 BCE, probably after climate change and shifts in the rivers’ courses, the cities were abandoned; the exact cause is debated."
          ]
        }
      },
      {
        "id": "vedic",
        "title": {
          "fa": "دوران ودایی و برآمدن بودا",
          "en": "The Vedic age and the rise of the Buddha"
        },
        "text": {
          "fa": [
            "دوران ودایی (حدود ۱۵۰۰ تا ۵۰۰ پیش از میلاد) پس از تمدن سند شکل گرفت. «ریگ‌ودا»، کهن‌ترین متن مقدس هندو، حدود ۱۵۰۰ تا ۱۲۰۰ پیش از میلاد به زبان سانسکریت سروده شد و سپس سایر ودا‌ها و اوپانیشادها آمدند. جامعه به‌تدریج به طبقه‌هایی (ورنا) تقسیم شد و مرکز قدرت به دره‌ی گنگ رفت.",
            "از حدود ۶۰۰ پیش از میلاد شانزده دولت بزرگ («مهاجناپاده») در شمال شکل گرفت. در همین دوران دو آیین بزرگ پدید آمد: بودا (سیدارتا گوتاما، که بنا بر سنت حدود ۵۶۳ تا ۴۸۳ پیش از میلاد می‌زیست و پژوهشگران امروز زمان زندگی‌اش را قرن پنجم پیش از میلاد می‌دانند) در لومبینی زاده شد و در بودگایا به روشن‌شدگی رسید، و ماهاویرا آیین جین را گسترش داد."
          ],
          "en": [
            "The Vedic age (about 1500 to 500 BCE) took shape after the Indus civilization. The ‘Rigveda’, the oldest Hindu sacred text, was composed about 1500 to 1200 BCE in Sanskrit and then came the other Vedas and the Upanishads. Society gradually divided into classes (varna) and the centre of power moved to the Ganges valley.",
            "From about 600 BCE sixteen great states (the ‘Mahajanapadas’) formed in the north. In the same period two great religions arose: the Buddha (Siddhartha Gautama, who according to tradition lived about 563 to 483 BCE and whom today’s scholars date to the fifth century BCE) was born at Lumbini and reached enlightenment at Bodh Gaya, and Mahavira spread Jainism."
          ]
        }
      },
      {
        "id": "maurya",
        "title": {
          "fa": "امپراتوری موریا و آشوکا",
          "en": "The Maurya Empire and Ashoka"
        },
        "text": {
          "fa": [
            "چاندراگوپتا موریا با کمک چانکیا حدود ۳۲۱ پیش از میلاد خاندان نندا را برانداخت و نخستین امپراتوری بزرگ سراسر شبه‌قاره را بنیان گذاشت. او حدود ۳۰۵ پیش از میلاد با سلوکوس اول، جانشین اسکندر در شرق، پیمان بست و پایتختش پاتالی‌پوترا (پاتنای امروز) بود.",
            "آشوکا (حدود ۲۶۸ تا ۲۳۲ پیش از میلاد) پس از جنگ خونین کالینگا (حدود ۲۶۱ پیش از میلاد) که صدها هزار تلفات داشت، از جنگ دست کشید و آیین بودا و «دهرمه»، یعنی اخلاق و مدارا، را ترویج کرد. فرمان‌هایش را بر ستون‌ها و صخره‌ها حک کرد و سرستون شیر او نشان ملی هند امروز شد. امپراتوری موریا حدود ۱۸۵ پیش از میلاد پایان یافت."
          ],
          "en": [
            "Chandragupta Maurya, with the help of Chanakya, overthrew the Nanda dynasty about 321 BCE and founded the first great empire covering the whole subcontinent. About 305 BCE he made a treaty with Seleucus I, Alexander’s successor in the east, and his capital was Pataliputra (today’s Patna).",
            "Ashoka (about 268 to 232 BCE), after the bloody Kalinga war (about 261 BCE), which had hundreds of thousands of casualties, gave up war and promoted Buddhism and ‘dhamma’, meaning ethics and tolerance. He carved his edicts on pillars and rocks and his lion capital became the national emblem of today’s India. The Maurya Empire ended about 185 BCE."
          ]
        }
      },
      {
        "id": "classical",
        "title": {
          "fa": "دوران کلاسیک: گوپتا و جنوب هند",
          "en": "The classical age: the Guptas and southern India"
        },
        "text": {
          "fa": [
            "پس از موریا، دولت‌های کوشانی در شمال و ساتاواهانه در دکن حکم راندند و تجارت دریایی با روم و آسیای جنوب شرقی رونق گرفت. بودیسم از هند به آسیای مرکزی، چین و جنوب شرقی آسیا رسید.",
            "امپراتوری گوپتا (حدود ۳۲۰ تا ۵۵۰ میلادی) را «عصر طلایی» هند می‌دانند: نظام دهدهی و مفهوم صفر در این دوران شکل گرفت، آریابهاتا (متولد ۴۷۶) در ریاضی و ستاره‌شناسی کار کرد و دانشگاه نالاندا مرکز دانش بودایی شد. کالیداسا نمایشنامه‌نویس و شاعر این دوره بود. در جنوب، سلسله‌ی چولا (قرن نهم تا سیزدهم) با ناوگان دریایی تا جنوب شرقی آسیا نفوذ یافت و راجاراجا چولای اول (۹۸۵ تا ۱۰۱۴) معبد بزرگ تانجاور را ساخت."
          ],
          "en": [
            "After the Mauryas, the Kushan states in the north and the Satavahanas in the Deccan ruled and maritime trade with Rome and South-East Asia flourished. Buddhism spread from India to Central Asia, China and South-East Asia.",
            "The Gupta Empire (about 320 to 550 CE) is regarded as India’s ‘Golden Age’: the decimal system and the concept of zero took shape in this period, Aryabhata (born 476) worked in mathematics and astronomy and Nalanda University became a centre of Buddhist learning. Kalidasa was the playwright and poet of this period. In the south the Chola dynasty (ninth to thirteenth century) extended its influence as far as South-East Asia with its navy, and Rajaraja Chola I (985 to 1014) built the great temple at Thanjavur."
          ]
        }
      },
      {
        "id": "sultanate",
        "title": {
          "fa": "سلطنت دهلی و ویجایاناگارا",
          "en": "The Delhi Sultanate and Vijayanagara"
        },
        "text": {
          "fa": [
            "عرب‌ها در ۷۱۱ سند را گرفتند و محمود غزنوی از ۱۰۰۱ تا ۱۰۲۷ بارها به شمال هند حمله کرد. قطب‌الدین ایبک در ۱۲۰۶ سلطنت دهلی را بنیان گذاشت؛ سلسله‌هایی که تا ۱۵۲۶ بر شمال هند حکم راندند (مملوک، خلجی، تغلق، سادات و لودی). علاءالدین خلجی قلمرو را گسترش داد و قطب‌منار ساخته شد. تیمور در ۱۳۹۸ دهلی را غارت کرد.",
            "در جنوب، امپراتوری ویجایاناگارا (۱۳۳۶ تا ۱۶۴۶) از آیین هندو دفاع کرد و فرهنگ و معماری درخشانی داشت. جنبش‌های «بهاکتی» (عشق به خدا) و صوفیان مسلمان در هند گسترش یافت و فرهنگ‌ها را به هم نزدیک کرد. گورو نانک (۱۴۶۹ تا ۱۵۳۹) آیین سیک را بنیان گذاشت. واسکو دا گاما پرتغالی در ۱۴۹۸ با کشتی به کالیکوت رسید و راه دریایی اروپا به هند باز شد."
          ],
          "en": [
            "The Arabs took Sindh in 711 and Mahmud of Ghazni raided northern India repeatedly from 1001 to 1027. Qutb ud-Din Aibak founded the Delhi Sultanate in 1206; the dynasties that ruled northern India until 1526 (the Mamluk, Khalji, Tughlaq, Sayyid and Lodi). Alauddin Khalji expanded the realm and the Qutb Minar was built. Timur sacked Delhi in 1398.",
            "In the south the Vijayanagara Empire (1336 to 1646) defended the Hindu faith and had a brilliant culture and architecture. The ‘Bhakti’ movements (love of God) and Muslim Sufis spread in India and brought cultures closer together. Guru Nanak (1469 to 1539) founded Sikhism. The Portuguese Vasco da Gama reached Calicut by sea in 1498 and the sea route from Europe to India opened."
          ]
        }
      },
      {
        "id": "mughals",
        "title": {
          "fa": "امپراتوری مغول (گورکانیان)",
          "en": "The Mughal Empire"
        },
        "text": {
          "fa": [
            "بابر، از نسل تیمور و چنگیز، در نبرد اول پانی‌پت (۲۱ آوریل ۱۵۲۶) ابراهیم لودی را شکست داد و امپراتوری مغول را بنیان گذاشت. اکبر (۱۵۵۶ تا ۱۶۰۵) قلمرو را گسترش داد، با سیاست «صلح کل» به همه‌ی ادیان احترام گذاشت، مالیات جزیه را لغو کرد (۱۵۶۴) و نظام اداری منظمی ساخت. شاه‌جهان (۱۶۲۸ تا ۱۶۵۸) تاج‌محل را برای همسرش ممتازمحل در آگره ساخت (حدود ۱۶۳۲ تا ۱۶۵۳).",
            "اورنگ‌زیب (۱۶۵۸ تا ۱۷۰۷) امپراتوری را به وسیع‌ترین حد رساند، اما جنگ‌های طولانی در دکن و سیاست‌های سخت‌گیرانه‌ی مذهبی‌اش مخالفت‌ها را برانگیخت. ماراتاها به رهبری شیواجی (تاج‌گذاری ۱۶۷۴) در غرب هند قدرت گرفتند. پس از ۱۷۰۷ قدرت مغول‌ها رو به افول گذاشت و نادرشاه در ۱۷۳۹ دهلی را غارت کرد و تخت طاووس را برد. رنجیت سینگ در ۱۷۹۹ امپراتوری سیک را در پنجاب بنیان گذاشت."
          ],
          "en": [
            "Babur, a descendant of Timur and Genghis, defeated Ibrahim Lodi at the First Battle of Panipat (21 April 1526) and founded the Mughal Empire. Akbar (1556 to 1605) expanded the realm, showed respect to all religions with the policy of ‘sulh-i-kul’ (universal peace), abolished the jizya tax (1564) and built an orderly administration. Shah Jahan (1628 to 1658) built the Taj Mahal at Agra for his wife Mumtaz Mahal (about 1632 to 1653).",
            "Aurangzeb (1658 to 1707) brought the empire to its greatest extent, but long wars in the Deccan and his strict religious policies provoked opposition. The Marathas under Shivaji (crowned in 1674) gained power in western India. After 1707 Mughal power declined and Nader Shah sacked Delhi in 1739 and took the Peacock Throne. Ranjit Singh founded the Sikh Empire in Punjab in 1799."
          ]
        }
      },
      {
        "id": "british-rule",
        "title": {
          "fa": "حکومت بریتانیا",
          "en": "British rule"
        },
        "text": {
          "fa": [
            "شرکت هند شرقی بریتانیا که در ۱۶۰۰ تأسیس شد، با نبرد پلاسی (۲۳ ژوئن ۱۷۵۷) بنگال را گرفت و در ۱۷۶۴ پس از نبرد بوکسار قدرتش تثبیت شد. شرکت به‌تدریج بر بیشتر هند مسلط شد؛ قحطی ۱۷۷۰ در بنگال میلیون‌ها نفر را کشت. نخستین راه‌آهن در ۱۸۵۳ میان بمبئی و تانه کشیده شد. قیام بزرگ ۱۸۵۷ که از ۱۰ مه در میروت آغاز شد، سرکوب شد و در ۱۸۵۸ هند مستقیماً به تاج بریتانیا رسید و «راج بریتانیا» آغاز شد.",
            "کنگره‌ی ملی هند در ۱۸۸۵ تأسیس شد. تجزیه‌ی بنگال (۱۹۰۵) اعتراض‌ها را برانگیخت. کشتار جلیانوالاباغ (۱۳ آوریل ۱۹۱۹) که سربازان بریتانیایی در آن به جمعیتی بی‌سلاح در امریتسار آتش گشودند، دست‌کم ۳۷۹ کشته بنا بر آمار رسمی (برآوردهای هندی بیش از ۱۰۰۰) داشت. گاندی از ۱۹۱۵ جنبش عدم‌همکاری و «ساتیاگراها» (مقاومت بدون خشونت) را رهبری کرد. راهپیمایی نمک (۱۲ مارس تا ۶ آوریل ۱۹۳۰) و «جنبش خروج از هند» (۸ اوت ۱۹۴۲) از نقاط عطف بود. قحطی ۱۹۴۳ بنگال حدود دو تا سه میلیون نفر را کشت."
          ],
          "en": [
            "The British East India Company, founded in 1600, took Bengal with the Battle of Plassey (23 June 1757) and its power was consolidated after the Battle of Buxar in 1764. The Company gradually came to dominate most of India; the famine of 1770 in Bengal killed millions. The first railway was laid in 1853 between Bombay and Thane. The great revolt of 1857, which began at Meerut on 10 May, was put down and in 1858 India passed directly to the British Crown and the ‘British Raj’ began.",
            "The Indian National Congress was founded in 1885. The partition of Bengal (1905) provoked protests. The Jallianwala Bagh massacre (13 April 1919), in which British soldiers fired on an unarmed crowd in Amritsar, had at least 379 dead by official count (Indian estimates are over 1,000). From 1915 Gandhi led the non-cooperation movement and ‘satyagraha’ (non-violent resistance). The Salt March (12 March to 6 April 1930) and the ‘Quit India’ movement (8 August 1942) were turning points. The Bengal famine of 1943 killed about two to three million people."
          ]
        }
      },
      {
        "id": "independence",
        "title": {
          "fa": "استقلال و تجزیه",
          "en": "Independence and partition"
        },
        "text": {
          "fa": [
            "پس از جنگ جهانی دوم بریتانیا تصمیم به ترک هند گرفت. بر پایه‌ی اختلاف مسلمانان و هندوها، کشور تجزیه شد: پاکستان در ۱۴ اوت ۱۹۴۷ و هند در ۱۵ اوت ۱۹۴۷ مستقل شد. جواهرلعل نهرو نخستین نخست‌وزیر هند شد و در نیمه‌شب ۱۴ به ۱۵ اوت سخنرانی «وعده‌گاه با سرنوشت» را ایراد کرد.",
            "تجزیه با یکی از بزرگ‌ترین کوچ‌های اجباری تاریخ همراه بود: ۱۰ تا ۲۰ میلیون نفر مجبور به ترک خانه‌ها شدند و کشتارهای مذهبی در پنجاب و بنگال رخ داد؛ برآورد شمار کشته‌ها از چند صد هزار تا حدود دو میلیون متفاوت است. گاندی در ۳۰ ژانویه‌ی ۱۹۴۸ به‌دست ناتورام گودسه ترور شد. نخستین جنگ هند و پاکستان بر سر کشمیر در ۱۹۴۷ تا ۱۹۴۸ رخ داد. قانون اساسی هند، که امبدکار رئیس کمیته‌ی تدوین آن بود، در ۲۶ ژانویه‌ی ۱۹۵۰ (روز جمهوری) اجرا شد."
          ],
          "en": [
            "After the Second World War Britain decided to leave India. Along the lines of the Muslim–Hindu divide the country was partitioned: Pakistan became independent on 14 August 1947 and India on 15 August 1947. Jawaharlal Nehru became India’s first prime minister and at midnight on 14 to 15 August gave his ‘Tryst with Destiny’ speech.",
            "Partition came with one of the greatest forced migrations in history: 10 to 20 million people had to leave their homes and religious massacres took place in Punjab and Bengal; estimates of the dead range from several hundred thousand to about two million. Gandhi was assassinated on 30 January 1948 by Nathuram Godse. The first India–Pakistan war over Kashmir took place in 1947 to 1948. India’s constitution, whose drafting committee Ambedkar chaired, came into force on 26 January 1950 (Republic Day)."
          ]
        }
      },
      {
        "id": "republic",
        "title": {
          "fa": "جمهوری هند",
          "en": "The Republic of India"
        },
        "text": {
          "fa": [
            "نهرو تا مرگش در ۱۹۶۴ نخست‌وزیر بود و سیاست «عدم تعهد» را پیش برد. نخستین انتخابات عمومی در ۱۹۵۱ تا ۱۹۵۲ با شرکت میلیون‌ها نفر برگزار شد. استان‌ها در ۱۹۵۶ بر اساس زبان بازسازمان‌دهی شدند. «انقلاب سبز» در دهه‌ی ۱۹۶۰ تولید غله را بالا برد. هند در ۱۹۶۲ در جنگ با چین شکست خورد و در ۱۹۶۵ و ۱۹۷۱ با پاکستان جنگید؛ جنگ ۱۹۷۱ به استقلال بنگلادش انجامید.",
            "ایندیرا گاندی (۱۹۶۶ تا ۱۹۷۷ و ۱۹۸۰ تا ۱۹۸۴) در ژوئن ۱۹۷۵ وضعیت اضطراری اعلام کرد که تا مارس ۱۹۷۷ آزادی‌ها را محدود کرد. او در ۳۱ اکتبر ۱۹۸۴ به‌دست محافظانش ترور شد. در ۱۹۹۱ اصلاحات اقتصادی بازار را باز کرد و رشد شتاب گرفت. هند در مه ۱۹۹۸ آزمایش‌های هسته‌ای انجام داد. در ۲۰۲۳ چاندراین‌۳ هند را به چهارمین کشوری رساند که بر ماه فرود آمد و نخستین کشوری بود که نزدیک قطب جنوب ماه فرود آمد. بنا بر برآوردهای سازمان ملل، هند در ۲۰۲۳ پرجمعیت‌ترین کشور جهان شد."
          ],
          "en": [
            "Nehru was prime minister until his death in 1964 and pursued a policy of ‘non-alignment’. The first general election in 1951 to 1952 was held with millions taking part. States were reorganized along linguistic lines in 1956. The ‘Green Revolution’ in the 1960s raised grain output. India was defeated by China in 1962 and fought Pakistan in 1965 and 1971; the 1971 war led to the independence of Bangladesh.",
            "Indira Gandhi (1966 to 1977 and 1980 to 1984) declared a state of emergency in June 1975, which limited freedoms until March 1977. She was assassinated by her bodyguards on 31 October 1984. In 1991 economic reforms opened the market and growth picked up. India carried out nuclear tests in May 1998. In 2023 Chandrayaan-3 made India the fourth country to land on the Moon and the first to land near its south pole. According to UN estimates, India became the world’s most populous country in 2023."
          ]
        }
      }
    ],
    "timeline": [
      {
        "year": -7000,
        "title": {
          "fa": "کشاورزی در مهرگره (حدود)",
          "en": "Farming at Mehrgarh (about)"
        },
        "text": {
          "fa": "از کهن‌ترین جوامع کشاورز جنوب آسیا.",
          "en": "Among the oldest farming communities of South Asia."
        }
      },
      {
        "year": -3300,
        "title": {
          "fa": "آغاز تمدن دره‌ی سند (حدود)",
          "en": "The Indus Valley Civilization begins (about)"
        },
        "text": {
          "fa": "یکی از کهن‌ترین تمدن‌های شهری جهان.",
          "en": "One of the world’s oldest urban civilizations."
        }
      },
      {
        "year": -2600,
        "title": {
          "fa": "دوره‌ی شکوفایی هراپا (حدود)",
          "en": "The mature Harappan period (about)"
        },
        "text": {
          "fa": "شهرهای هراپا و موهنجودارو در اوج.",
          "en": "The cities of Harappa and Mohenjo-daro at their height."
        }
      },
      {
        "year": -1900,
        "title": {
          "fa": "افول تمدن سند (حدود)",
          "en": "The decline of the Indus civilization (about)"
        },
        "text": {
          "fa": "شهرها رها شدند؛ علت دقیق محل بحث است.",
          "en": "The cities were abandoned; the exact cause is debated."
        }
      },
      {
        "year": -1500,
        "title": {
          "fa": "آغاز دوران ودایی (حدود)",
          "en": "The start of the Vedic age (about)"
        },
        "text": {
          "fa": "ریگ‌ودا به سانسکریت سروده شد.",
          "en": "The Rigveda was composed in Sanskrit."
        }
      },
      {
        "year": -600,
        "title": {
          "fa": "مهاجناپاده‌ها (حدود)",
          "en": "The Mahajanapadas (about)"
        },
        "text": {
          "fa": "شانزده دولت بزرگ در شمال شکل گرفت.",
          "en": "Sixteen great states formed in the north."
        }
      },
      {
        "year": -321,
        "title": {
          "fa": "آغاز امپراتوری موریا (حدود)",
          "en": "The Maurya Empire begins (about)"
        },
        "text": {
          "fa": "چاندراگوپتا خاندان نندا را برانداخت.",
          "en": "Chandragupta overthrew the Nanda dynasty."
        }
      },
      {
        "year": -261,
        "title": {
          "fa": "جنگ کالینگا (حدود)",
          "en": "The Kalinga war (about)"
        },
        "text": {
          "fa": "پشیمانی آشوکا او را به آیین بودا و دهرمه کشاند.",
          "en": "Ashoka’s remorse turned him to Buddhism and dhamma."
        }
      },
      {
        "year": -185,
        "title": {
          "fa": "پایان امپراتوری موریا (حدود)",
          "en": "The end of the Maurya Empire (about)"
        },
        "text": {
          "fa": "آخرین شاه موریا کشته شد.",
          "en": "The last Maurya king was killed."
        }
      },
      {
        "year": 320,
        "title": {
          "fa": "آغاز امپراتوری گوپتا (حدود)",
          "en": "The Gupta Empire begins (about)"
        },
        "text": {
          "fa": "«عصر طلایی» هند.",
          "en": "India’s ‘Golden Age’."
        }
      },
      {
        "year": 499,
        "title": {
          "fa": "آریابهاتیه",
          "en": "The Aryabhatiya"
        },
        "text": {
          "fa": "آریابهاتا، متولد ۴۷۶، کتاب ریاضی و ستاره‌شناسی خود را نوشت.",
          "en": "Aryabhata, born in 476, wrote his book of mathematics and astronomy."
        }
      },
      {
        "year": 711,
        "title": {
          "fa": "فتح سند به‌دست عرب‌ها",
          "en": "The Arab conquest of Sindh"
        },
        "text": {
          "fa": "نخستین حضور پایدار مسلمانان در شبه‌قاره.",
          "en": "The first lasting Muslim presence in the subcontinent."
        }
      },
      {
        "year": 985,
        "yearText": {
          "fa": "۹۸۵ تا ۱۰۱۴",
          "en": "985 to 1014"
        },
        "title": {
          "fa": "راجاراجا چولای اول",
          "en": "Rajaraja Chola I"
        },
        "text": {
          "fa": "معبد بزرگ تانجاور ساخته شد.",
          "en": "The great temple at Thanjavur was built."
        }
      },
      {
        "year": 1001,
        "yearText": {
          "fa": "۱۰۰۱ تا ۱۰۲۷",
          "en": "1001 to 1027"
        },
        "title": {
          "fa": "حمله‌های محمود غزنوی",
          "en": "The raids of Mahmud of Ghazni"
        },
        "text": {
          "fa": "حمله‌های مکرر به شمال هند.",
          "en": "Repeated raids on northern India."
        }
      },
      {
        "year": 1206,
        "title": {
          "fa": "سلطنت دهلی",
          "en": "The Delhi Sultanate"
        },
        "text": {
          "fa": "قطب‌الدین ایبک سلطنت را بنیان گذاشت.",
          "en": "Qutb ud-Din Aibak founded the sultanate."
        }
      },
      {
        "year": 1336,
        "title": {
          "fa": "امپراتوری ویجایاناگارا",
          "en": "The Vijayanagara Empire"
        },
        "text": {
          "fa": "دولتی هندو در جنوب هند.",
          "en": "A Hindu state in southern India."
        }
      },
      {
        "year": 1398,
        "title": {
          "fa": "تیمور دهلی را غارت می‌کند",
          "en": "Timur sacks Delhi"
        },
        "text": {
          "fa": "ضربه‌ای سخت به سلطنت دهلی.",
          "en": "A severe blow to the Delhi Sultanate."
        }
      },
      {
        "year": 1469,
        "title": {
          "fa": "زادروز گورو نانک",
          "en": "The birth of Guru Nanak"
        },
        "text": {
          "fa": "بنیان‌گذار آیین سیک.",
          "en": "The founder of Sikhism."
        }
      },
      {
        "year": 1498,
        "title": {
          "fa": "واسکو دا گاما در کالیکوت",
          "en": "Vasco da Gama at Calicut"
        },
        "text": {
          "fa": "راه دریایی اروپا به هند باز شد.",
          "en": "The sea route from Europe to India opened."
        }
      },
      {
        "year": 1526,
        "title": {
          "fa": "نبرد اول پانی‌پت",
          "en": "The First Battle of Panipat"
        },
        "text": {
          "fa": "بابر در ۲۱ آوریل امپراتوری مغول را بنیان گذاشت.",
          "en": "On 21 April Babur founded the Mughal Empire."
        }
      },
      {
        "year": 1556,
        "title": {
          "fa": "اکبر بر تخت می‌نشیند",
          "en": "Akbar comes to the throne"
        },
        "text": {
          "fa": "در سیزده‌سالگی امپراتور شد.",
          "en": "He became emperor at the age of thirteen."
        }
      },
      {
        "year": 1600,
        "title": {
          "fa": "شرکت هند شرقی بریتانیا",
          "en": "The British East India Company"
        },
        "text": {
          "fa": "شرکتی بازرگانی که بعدها بر هند حکم راند.",
          "en": "A trading company that later ruled India."
        }
      },
      {
        "year": 1632,
        "yearText": {
          "fa": "۱۶۳۲ تا ۱۶۵۳",
          "en": "1632 to 1653"
        },
        "title": {
          "fa": "ساخت تاج‌محل",
          "en": "The building of the Taj Mahal"
        },
        "text": {
          "fa": "شاه‌جهان آن را برای ممتازمحل ساخت.",
          "en": "Shah Jahan built it for Mumtaz Mahal."
        }
      },
      {
        "year": 1674,
        "title": {
          "fa": "تاج‌گذاری شیواجی",
          "en": "The coronation of Shivaji"
        },
        "text": {
          "fa": "آغاز دولت ماراتا.",
          "en": "The start of the Maratha state."
        }
      },
      {
        "year": 1707,
        "title": {
          "fa": "مرگ اورنگ‌زیب",
          "en": "The death of Aurangzeb"
        },
        "text": {
          "fa": "افول قدرت مغول‌ها آغاز شد.",
          "en": "The decline of Mughal power began."
        }
      },
      {
        "year": 1739,
        "title": {
          "fa": "نادرشاه دهلی را غارت می‌کند",
          "en": "Nader Shah sacks Delhi"
        },
        "text": {
          "fa": "تخت طاووس به ایران برده شد.",
          "en": "The Peacock Throne was taken to Iran."
        }
      },
      {
        "year": 1757,
        "title": {
          "fa": "نبرد پلاسی",
          "en": "The Battle of Plassey"
        },
        "text": {
          "fa": "در ۲۳ ژوئن شرکت هند شرقی بنگال را گرفت.",
          "en": "On 23 June the East India Company took Bengal."
        }
      },
      {
        "year": 1764,
        "title": {
          "fa": "نبرد بوکسار",
          "en": "The Battle of Buxar"
        },
        "text": {
          "fa": "قدرت شرکت در شرق هند تثبیت شد.",
          "en": "The Company’s power in eastern India was consolidated."
        }
      },
      {
        "year": 1799,
        "title": {
          "fa": "امپراتوری سیک",
          "en": "The Sikh Empire"
        },
        "text": {
          "fa": "رنجیت سینگ لاهور را گرفت و دولت سیک را در پنجاب ساخت.",
          "en": "Ranjit Singh took Lahore and built the Sikh state in Punjab."
        }
      },
      {
        "year": 1853,
        "title": {
          "fa": "نخستین راه‌آهن",
          "en": "The first railway"
        },
        "text": {
          "fa": "خط بمبئی به تانه در ۱۶ آوریل افتتاح شد.",
          "en": "The Bombay to Thane line opened on 16 April."
        }
      },
      {
        "year": 1857,
        "title": {
          "fa": "قیام بزرگ",
          "en": "The great revolt"
        },
        "text": {
          "fa": "از ۱۰ مه در میروت آغاز شد و سرکوب شد.",
          "en": "It began at Meerut on 10 May and was put down."
        }
      },
      {
        "year": 1858,
        "title": {
          "fa": "آغاز راج بریتانیا",
          "en": "The British Raj begins"
        },
        "text": {
          "fa": "هند مستقیماً زیر تاج بریتانیا درآمد.",
          "en": "India came directly under the British Crown."
        }
      },
      {
        "year": 1885,
        "title": {
          "fa": "تأسیس کنگره‌ی ملی هند",
          "en": "Founding of the Indian National Congress"
        },
        "text": {
          "fa": "آغاز جنبش ملی‌گرایانه‌ی سازمان‌یافته.",
          "en": "The start of an organized nationalist movement."
        }
      },
      {
        "year": 1905,
        "title": {
          "fa": "تجزیه‌ی بنگال",
          "en": "The partition of Bengal"
        },
        "text": {
          "fa": "اعتراض‌های گسترده‌ای برانگیخت.",
          "en": "It provoked widespread protests."
        }
      },
      {
        "year": 1915,
        "title": {
          "fa": "بازگشت گاندی",
          "en": "Gandhi’s return"
        },
        "text": {
          "fa": "گاندی از آفریقای جنوبی به هند بازگشت.",
          "en": "Gandhi returned to India from South Africa."
        }
      },
      {
        "year": 1919,
        "title": {
          "fa": "کشتار جلیانوالاباغ",
          "en": "The Jallianwala Bagh massacre"
        },
        "text": {
          "fa": "در ۱۳ آوریل در امریتسار به جمعیتی بی‌سلاح آتش گشوده شد.",
          "en": "On 13 April an unarmed crowd was fired on in Amritsar."
        }
      },
      {
        "year": 1930,
        "title": {
          "fa": "راهپیمایی نمک",
          "en": "The Salt March"
        },
        "text": {
          "fa": "گاندی از ۱۲ مارس تا ۶ آوریل به دریا پیاده رفت.",
          "en": "From 12 March to 6 April Gandhi walked to the sea."
        }
      },
      {
        "year": 1942,
        "title": {
          "fa": "جنبش خروج از هند",
          "en": "The Quit India movement"
        },
        "text": {
          "fa": "در ۸ اوت آغاز شد.",
          "en": "It began on 8 August."
        }
      },
      {
        "year": 1943,
        "title": {
          "fa": "قحطی بنگال",
          "en": "The Bengal famine"
        },
        "text": {
          "fa": "حدود دو تا سه میلیون نفر مردند.",
          "en": "About two to three million people died."
        }
      },
      {
        "year": 1947,
        "title": {
          "fa": "استقلال و تجزیه",
          "en": "Independence and partition"
        },
        "text": {
          "fa": "پاکستان در ۱۴ اوت و هند در ۱۵ اوت مستقل شد.",
          "en": "Pakistan became independent on 14 August and India on 15 August."
        }
      },
      {
        "year": 1948,
        "title": {
          "fa": "ترور گاندی",
          "en": "The assassination of Gandhi"
        },
        "text": {
          "fa": "در ۳۰ ژانویه گاندی ترور شد.",
          "en": "On 30 January Gandhi was assassinated."
        }
      },
      {
        "year": 1950,
        "title": {
          "fa": "روز جمهوری",
          "en": "Republic Day"
        },
        "text": {
          "fa": "قانون اساسی هند در ۲۶ ژانویه اجرا شد.",
          "en": "India’s constitution came into force on 26 January."
        }
      },
      {
        "year": 1951,
        "yearText": {
          "fa": "۱۹۵۱ تا ۱۹۵۲",
          "en": "1951 to 1952"
        },
        "title": {
          "fa": "نخستین انتخابات عمومی",
          "en": "The first general election"
        },
        "text": {
          "fa": "یکی از بزرگ‌ترین انتخابات تاریخ تا آن زمان.",
          "en": "One of the largest elections in history up to that time."
        }
      },
      {
        "year": 1962,
        "title": {
          "fa": "جنگ هند و چین",
          "en": "The India–China war"
        },
        "text": {
          "fa": "هند شکست خورد.",
          "en": "India was defeated."
        }
      },
      {
        "year": 1971,
        "title": {
          "fa": "جنگ هند و پاکستان و استقلال بنگلادش",
          "en": "The India–Pakistan war and Bangladesh’s independence"
        },
        "text": {
          "fa": "جنگ در دسامبر به استقلال بنگلادش انجامید.",
          "en": "The war in December led to the independence of Bangladesh."
        }
      },
      {
        "year": 1975,
        "yearText": {
          "fa": "۱۹۷۵ تا ۱۹۷۷",
          "en": "1975 to 1977"
        },
        "title": {
          "fa": "وضعیت اضطراری",
          "en": "The Emergency"
        },
        "text": {
          "fa": "ایندیرا گاندی آزادی‌ها را محدود کرد.",
          "en": "Indira Gandhi restricted freedoms."
        }
      },
      {
        "year": 1984,
        "title": {
          "fa": "ترور ایندیرا گاندی",
          "en": "The assassination of Indira Gandhi"
        },
        "text": {
          "fa": "در ۳۱ اکتبر به‌دست محافظانش کشته شد.",
          "en": "On 31 October she was killed by her bodyguards."
        }
      },
      {
        "year": 1991,
        "title": {
          "fa": "اصلاحات اقتصادی",
          "en": "The economic reforms"
        },
        "text": {
          "fa": "اقتصاد هند به روی بازار باز شد.",
          "en": "India’s economy was opened to the market."
        }
      },
      {
        "year": 1998,
        "title": {
          "fa": "آزمایش‌های هسته‌ای",
          "en": "The nuclear tests"
        },
        "text": {
          "fa": "هند در مه آزمایش‌های هسته‌ای انجام داد.",
          "en": "India carried out nuclear tests in May."
        }
      },
      {
        "year": 2008,
        "title": {
          "fa": "حمله‌های مومبای",
          "en": "The Mumbai attacks"
        },
        "text": {
          "fa": "در ۲۶ نوامبر حمله‌های تروریستی رخ داد.",
          "en": "Terrorist attacks took place on 26 November."
        }
      },
      {
        "year": 2023,
        "title": {
          "fa": "چاندراین‌۳ و پرجمعیت‌ترین کشور",
          "en": "Chandrayaan-3 and the most populous country"
        },
        "text": {
          "fa": "فرود در نزدیکی قطب جنوب ماه در ۲۳ اوت؛ هند بنا بر برآوردهای سازمان ملل از چین پیش افتاد.",
          "en": "A landing near the Moon’s south pole on 23 August; India passed China according to UN estimates."
        }
      }
    ]
  }
};
