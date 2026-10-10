export interface LocalizedString {
  fa: string;
  en: string;
  [key: string]: string | undefined;
}

export interface LocalizedParagraphs {
  fa: string[];
  en: string[];
  [key: string]: string[] | undefined;
}

export interface FactItem {
  capital?: LocalizedString;
  language?: LocalizedString;
  population?: LocalizedString;
  [key: string]: LocalizedString | undefined;
}

export interface CountrySection {
  id: string;
  title: LocalizedString;
  text: LocalizedParagraphs;
}

export interface TimelineEvent {
  year: number;
  yearText?: LocalizedString;
  title: LocalizedString;
  text: LocalizedString;
}

export interface GalleryItem {
  src: string;
  caption: LocalizedString;
}

export interface Country {
  id: string;
  name: LocalizedString;
  flag?: string[];
  flagDirection?: 'vertical' | 'horizontal';
  flagImage?: string;
  founded: number;
  foundedNote?: LocalizedString;
  summary: LocalizedString;
  facts: FactItem;
  overview: LocalizedParagraphs;
  sections?: CountrySection[];
  timeline?: TimelineEvent[];
  gallery?: GalleryItem[];
  added?: string;
}

export interface Figure {
  id: string;
  name: LocalizedString;
  country: string;
  field: 'politics' | 'science' | 'arts' | 'thought' | 'invention' | 'exploration' | 'sport';
  born: number;
  died: number | null;
  era?: string;
  summary: LocalizedString;
  bio: LocalizedParagraphs;
  achievements?: LocalizedParagraphs;
  quote?: LocalizedString | null;
  image?: string;
  added?: string;
}

export interface Era {
  id: string;
  from: number;
  to: number;
  color: string;
  name: LocalizedString;
  desc: LocalizedString;
}

export interface OnThisDayEvent {
  month: number;
  day: number;
  year: number;
  country?: string;
  title: LocalizedString;
  text: LocalizedString;
}

export interface HistoriumData {
  eras: Era[];
  fields: Record<string, LocalizedString>;
  countries: Country[];
  figures: Figure[];
  onThisDay: OnThisDayEvent[];
}
