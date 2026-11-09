import { Figure } from '../../../types';

/**
 * Batch 07: Adolf Hitler.
 * No 'achievements' list is given on purpose: the biography states the facts, including the crimes of the regime.
 */
export const FIGURES_BATCH_07: Figure[] = [
  {
    id: 'adolf-hitler',
    name: { fa: 'آدولف هیتلر', en: 'Adolf Hitler' },
    country: 'germany',
    field: 'politics',
    born: 1889,
    died: 1945,
    summary: {
      fa: 'دیکتاتور آلمان نازی (۱۹۳۳ تا ۱۹۴۵)؛ مسئول آغاز جنگ جهانی دوم در اروپا و هولوکاست',
      en: 'Dictator of Nazi Germany (1933 to 1945); responsible for the start of the Second World War in Europe and for the Holocaust'
    },
    bio: {
      fa: [
        'آدولف هیتلر در ۲۰ آوریل ۱۸۸۹ در برانائو آم این در اتریش-مجارستان (اتریش امروز) به دنیا آمد، چهارمین فرزند از شش فرزند آلویس هیتلر، مأمور گمرک، و کلارا پؤلتسل. او در ۱۹۰۷ و ۱۹۰۸ در آزمون ورودی آکادمی هنرهای زیبای وین رد شد و تا ۱۹۱۳ در وین در تنگدستی زندگی کرد؛ در همین سال‌ها به باورهای ملی‌گرایانه، نژادپرستانه و ضدیهودی رسید. در ۱۹۱۳ به مونیخ رفت.',
        'در جنگ جهانی اول داوطلب ارتش بایرن شد، به‌عنوان پیام‌رسان در جبهه‌ی غرب خدمت کرد و نشان صلیب آهنین گرفت. او شکست آلمان را نتیجه‌ی «خیانت» می‌دانست، روایتی که پایه‌ی تاریخی ندارد (افسانه‌ی «خنجر از پشت»). در ۱۹۱۹ به «حزب کارگران آلمان» پیوست که بعدها «حزب کارگران ملی‌سوسیالیست آلمان» (نازی) نام گرفت و از ۱۹۲۱ رهبر آن بود. کودتای ناکام «میخانه‌ی آبجو» (۸ و ۹ نوامبر ۱۹۲۳) او را به زندان انداخت؛ حدود نُه ماه زندانی بود و در آن زمان «نبرد من» را نوشت که ایدئولوژی نژادپرستانه و ضدیهودی او را شرح می‌دهد.',
        'با رکود بزرگ و بحران اقتصادی آلمان، حزب نازی در ۱۹۳۲ بزرگ‌ترین حزب پارلمان شد. در ۳۰ ژانویه‌ی ۱۹۳۳ رئیس‌جمهور هیندنبورگ، با فشار رهبران محافظه‌کار، او را به صدراعظمی منصوب کرد. پس از آتش‌سوزی رایشتاگ (۲۷ فوریه‌ی ۱۹۳۳) آزادی‌های مدنی لغو شد و «قانون اختیارات ویژه» (۲۳ مارس ۱۹۳۳) به او اجازه‌ی وضع قانون بدون پارلمان داد. احزاب دیگر ممنوع شدند و پس از مرگ هیندنبورگ (۲ اوت ۱۹۳۴) او خود را «پیشوا و صدراعظم» نامید و دیکتاتوری یک‌نفره برقرار کرد.',
        'رژیم او یهودیان، روما (کولی‌ها)، معلولان، مخالفان سیاسی و گروه‌های دیگر را سرکوب کرد: قوانین نورنبرگ (۱۹۳۵) حقوق یهودیان را سلب کرد و در «شب بلورین» (۹ و ۱۰ نوامبر ۱۹۳۸) به آنان در سراسر کشور حمله شد. او ارتش را مسلح کرد، منطقه‌ی راین را در ۱۹۳۶ به اشغال نظامی درآورد، اتریش را در ۱۹۳۸ و بخش‌هایی از چکسلواکی را در ۱۹۳۸ و ۱۹۳۹ ضمیمه کرد و با حمله به لهستان در ۱ سپتامبر ۱۹۳۹ جنگ جهانی دوم را در اروپا آغاز کرد.',
        'در جنگ، آلمان بیشتر اروپای قاره‌ای را گرفت و در ۲۲ ژوئن ۱۹۴۱ به اتحاد شوروی حمله کرد؛ در ۱۱ دسامبر ۱۹۴۱ به آمریکا اعلام جنگ کرد. رژیم او «راه‌حل نهایی» را اجرا کرد: قتل سازمان‌یافته‌ی حدود شش میلیون یهودی (هولوکاست) در اردوگاه‌های مرگ و با تیرباران‌های دسته‌جمعی، و کشتن میلیون‌ها نفر دیگر، از جمله لهستانی‌ها، اسیران جنگی شوروی، روما و معلولان. جنگ در مجموع جان ده‌ها میلیون نفر را گرفت.',
        'پس از شکست استالینگراد (فوریه‌ی ۱۹۴۳) و فرود نرماندی (۶ ژوئن ۱۹۴۴) آلمان عقب نشست. هیتلر از سوءقصد ۲۰ ژوئیه‌ی ۱۹۴۴ جان به در برد. او در ۳۰ آوریل ۱۹۴۵، هنگامی که ارتش سرخ در برلین پیش می‌رفت، در پناهگاه زیرزمینی خود با خودکشی به زندگی‌اش پایان داد، یک روز پس از ازدواج با اوا براون. آلمان در ۸ مه ۱۹۴۵ تسلیم شد. امروز در آلمان نمادهای نازی ممنوع است و انکار هولوکاست جرم است.'
      ],
      en: [
        'Adolf Hitler was born on 20 April 1889 in Braunau am Inn in Austria-Hungary (today’s Austria), the fourth of six children of Alois Hitler, a customs official, and Klara Pölzl. In 1907 and 1908 he failed the entrance exam of the Academy of Fine Arts in Vienna and lived in poverty in Vienna until 1913; in these years he came to nationalist, racist and antisemitic beliefs. In 1913 he moved to Munich.',
        'In the First World War he volunteered for the Bavarian army, served as a messenger on the Western Front and received the Iron Cross. He regarded Germany’s defeat as the result of ‘betrayal’, an account with no historical basis (the ‘stab-in-the-back’ myth). In 1919 he joined the ‘German Workers’ Party’, later called the ‘National Socialist German Workers’ Party’ (the Nazi Party), and from 1921 he was its leader. The failed ‘Beer Hall Putsch’ (8 and 9 November 1923) sent him to prison; he was imprisoned for about nine months and in that time wrote ‘Mein Kampf’, which sets out his racist and antisemitic ideology.',
        'With the Great Depression and Germany’s economic crisis, the Nazi Party became the largest party in parliament in 1932. On 30 January 1933 President Hindenburg, under pressure from conservative leaders, appointed him chancellor. After the Reichstag fire (27 February 1933) civil liberties were abolished and the ‘Enabling Act’ (23 March 1933) allowed him to make laws without parliament. Other parties were banned and after Hindenburg’s death (2 August 1934) he named himself ‘Führer and Chancellor’ and established a one-man dictatorship.',
        'His regime persecuted Jews, the Roma, disabled people, political opponents and other groups: the Nuremberg Laws (1935) stripped Jews of their rights and in ‘Kristallnacht’ (9 and 10 November 1938) they were attacked across the country. He rearmed the army, militarily reoccupied the Rhineland in 1936, annexed Austria in 1938 and parts of Czechoslovakia in 1938 and 1939, and with the invasion of Poland on 1 September 1939 began the Second World War in Europe.',
        'In the war Germany took most of continental Europe and on 22 June 1941 attacked the Soviet Union; on 11 December 1941 it declared war on America. His regime carried out the ‘Final Solution’: the organized murder of about six million Jews (the Holocaust) in extermination camps and in mass shootings, and the killing of millions of others, among them Poles, Soviet prisoners of war, the Roma and disabled people. The war as a whole took the lives of tens of millions of people.',
        'After the defeat at Stalingrad (February 1943) and the Normandy landings (6 June 1944) Germany fell back. Hitler survived the assassination attempt of 20 July 1944. On 30 April 1945, as the Red Army advanced in Berlin, he ended his life by suicide in his underground bunker, a day after marrying Eva Braun. Germany surrendered on 8 May 1945. Today in Germany Nazi symbols are banned and denial of the Holocaust is a crime.'
      ]
    },
    added: '2026-10-31'
  }
];
