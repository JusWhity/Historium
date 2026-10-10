import { Era, LocalizedString } from '../types';

export const HISTORICAL_ERAS: Era[] = [
  {
    id: "ancient",
    from: -100000,
    to: 499,
    color: "#8a6d3b",
    name: { fa: "عصر باستان", en: "Ancient era" },
    desc: { fa: "از آغاز تمدن‌ها تا سقوط امپراتوری روم غربی.", en: "From the first civilizations to the fall of the Western Roman Empire." }
  },
  {
    id: "medieval",
    from: 500,
    to: 1399,
    color: "#5b3b22",
    name: { fa: "قرون وسطی", en: "Middle Ages" },
    desc: { fa: "از سال ۵۰۰ تا حدود ۱۴۰۰ میلادی.", en: "From about 500 to about 1400 CE." }
  },
  {
    id: "renaissance",
    from: 1400,
    to: 1599,
    color: "#7a3b2e",
    name: { fa: "رنسانس", en: "Renaissance" },
    desc: { fa: "دوران بازگشت به دانش و هنر، چاپ و اصلاحات دینی.", en: "An age of revived learning and art, of printing and religious reform." }
  },
  {
    id: "enlightenment",
    from: 1600,
    to: 1799,
    color: "#3e5c55",
    name: { fa: "روشنگری", en: "Enlightenment" },
    desc: { fa: "قرن‌های هفدهم و هجدهم؛ عصر خرد، علم و فلسفه.", en: "The seventeenth and eighteenth centuries: an age of reason, science and philosophy." }
  },
  {
    id: "modern",
    from: 1800,
    to: 1944,
    color: "#4a4a6a",
    name: { fa: "دوران مدرن", en: "Modern era" },
    desc: { fa: "از انقلاب صنعتی تا پایان جنگ جهانی دوم.", en: "From the Industrial Revolution to the end of the Second World War." }
  },
  {
    id: "contemporary",
    from: 1945,
    to: 100000,
    color: "#6f1f1c",
    name: { fa: "دوران معاصر", en: "Contemporary era" },
    desc: { fa: "از سال ۱۹۴۵ تا امروز.", en: "From 1945 to today." }
  }
];

export const HISTORICAL_FIELDS: Record<string, LocalizedString> = {
  politics: { fa: "سیاست و حکومت", en: "Politics and rule" },
  science: { fa: "علم", en: "Science" },
  arts: { fa: "هنر و ادبیات", en: "Arts and letters" },
  thought: { fa: "اندیشه و دین", en: "Thought and faith" },
  invention: { fa: "اختراع و فناوری", en: "Invention and technology" },
  exploration: { fa: "اکتشاف و دریانوردی", en: "Exploration" },
  sport: { fa: "ورزش", en: "Sport" }
};
