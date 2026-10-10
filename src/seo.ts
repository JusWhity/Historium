import { Country, Figure } from './types';
import { HISTORIUM_STRINGS } from './data/strings';

export interface RouteSEOInfo {
  page: string;
  country?: Country | null;
  figure?: Figure | null;
  lang: 'fa' | 'en';
}

function getBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location) {
    return window.location.origin + window.location.pathname;
  }
  return 'https://historium.org/';
}

function updateOrCreateMeta(nameOrProperty: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${nameOrProperty}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, nameOrProperty);
    document.head.appendChild(el);
  }
  el.content = content;
}

function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

function updateJsonLd(data: object) {
  let script = document.getElementById('schema-json-ld') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'schema-json-ld';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data, null, 2);
}

export function applyRouteSEO(info: RouteSEOInfo): void {
  const { page, country, figure, lang } = info;
  const baseUrl = getBaseUrl();
  const fullUrl = typeof window !== 'undefined' ? window.location.href : baseUrl;
  const isFa = lang === 'fa';

  let title = 'Historium';
  let description = isFa
    ? HISTORIUM_STRINGS.siteDescription.fa
    : HISTORIUM_STRINGS.siteDescription.en;
  let schemaData: object = {};

  const siteName = isFa ? 'هیستوریوم' : 'Historium';

  if (page === '') {
    title = isFa
      ? 'هیستوریوم | دانشنامه تاریخ جهان، قدمت کشورها و شخصیت‌های بزرگ'
      : 'Historium | World History Encyclopedia, Age of Countries & Historic Figures';
    description = isFa
      ? 'سفر به تاریخ جهان با هیستوریوم: بررسی تاریخ، قدمت و خط زمانی ۱۹۵ کشور جهان و زندگی‌نامه بیش از ۱۰۰ شخصیت تأثیرگذار از باستان تا معاصر.'
      : 'Journey through world history with Historium: Explore the timelines, ages, and origins of 195 countries and over 100 historical figures.';

    schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${baseUrl}#website`,
          "url": baseUrl,
          "name": "Historium",
          "description": description,
          "inLanguage": isFa ? "fa" : "en",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}#/countries?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "EducationalOrganization",
          "@id": `${baseUrl}#organization`,
          "name": "Historium",
          "url": baseUrl,
          "logo": `${baseUrl}favicon.ico`,
          "description": description
        }
      ]
    };
  } else if (page === 'countries') {
    title = isFa
      ? 'تاریخ ۱۹۵ کشور جهان و قدمت ملت‌ها | هیستوریوم'
      : 'History of 195 Countries & Nations | Historium';
    description = isFa
      ? 'فهرست کامل تاریخ، خط زمانی و قدمت ۱۹۵ کشور جهان از آسیا، اروپا، آفریقا، قاره آمریکا و اقیانوسیه به زبان فارسی و انگلیسی.'
      : 'Comprehensive historical guide, timelines, and origins of all 195 sovereign nations across Europe, Asia, Africa, the Americas, and Oceania.';

    schemaData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": fullUrl,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": isFa ? "صفحه اصلی" : "Home", "item": `${baseUrl}#/` },
          { "@type": "ListItem", "position": 2, "name": isFa ? "کشورها" : "Countries", "item": fullUrl }
        ]
      }
    };
  } else if (page === 'country' && country) {
    const cName = isFa ? country.name.fa : country.name.en;
    const cSummary = isFa ? country.summary.fa : country.summary.en;
    const foundedYear = country.founded < 0 ? `${Math.abs(country.founded)} BCE` : `${country.founded} CE`;

    title = isFa
      ? `تاریخ ${cName}: قدمت، خط زمانی و معرفی کامل | هیستوریوم`
      : `History of ${cName}: Timeline, Origins & Age | Historium`;
    description = isFa
      ? `تاریخ کامل و خط زمانی کشور ${cName} (آغاز: ${foundedYear}). ${cSummary}`
      : `Complete history and timeline of ${cName} (Founded: ${foundedYear}). ${cSummary}`;

    schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": title,
      "description": description,
      "url": fullUrl,
      "mainEntity": {
        "@type": "Country",
        "name": cName,
        "description": cSummary,
        "capital": country.facts.capital ? (isFa ? country.facts.capital.fa : country.facts.capital.en) : undefined
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": isFa ? "صفحه اصلی" : "Home", "item": `${baseUrl}#/` },
          { "@type": "ListItem", "position": 2, "name": isFa ? "کشورها" : "Countries", "item": `${baseUrl}#/countries` },
          { "@type": "ListItem", "position": 3, "name": cName, "item": fullUrl }
        ]
      }
    };
  } else if (page === 'figures') {
    title = isFa
      ? 'شخصیت‌های مهم تاریخ جهان از باستان تا معاصر | هیستوریوم'
      : 'Important Figures in World History | Historium';
    description = isFa
      ? 'زندگی‌نامه، دستاوردها و سخنان بیش از ۱۰۰ شخصیت برجسته تاریخ بشریت بر اساس دوره‌های تاریخی و حوزه‌های سیاست، علم، هنر و اندیشه.'
      : 'Biographies, achievements, and wisdom of over 100 historical giants spanning science, politics, thought, and arts across eras.';

    schemaData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": fullUrl,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": isFa ? "صفحه اصلی" : "Home", "item": `${baseUrl}#/` },
          { "@type": "ListItem", "position": 2, "name": isFa ? "شخصیت‌ها" : "Figures", "item": fullUrl }
        ]
      }
    };
  } else if (page === 'figure' && figure) {
    const fName = isFa ? figure.name.fa : figure.name.en;
    const fSummary = isFa ? figure.summary.fa : figure.summary.en;
    const dates = `${figure.born < 0 ? Math.abs(figure.born) + ' BCE' : figure.born} - ${figure.died === null ? 'Present' : (figure.died < 0 ? Math.abs(figure.died) + ' BCE' : figure.died)}`;

    title = isFa
      ? `زندگینامه ${fName}: دستاوردها و نقش تاریخی (${dates}) | هیستوریوم`
      : `Biography of ${fName}: Legacy & Achievements (${dates}) | Historium`;
    description = isFa
      ? `زندگی‌نامه و دستاوردهای تاریخی ${fName} (${dates}): ${fSummary}`
      : `Biography and historical legacy of ${fName} (${dates}): ${fSummary}`;

    schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": title,
      "description": description,
      "url": fullUrl,
      "mainEntity": {
        "@type": "Person",
        "name": fName,
        "description": fSummary,
        "birthDate": String(figure.born),
        "deathDate": figure.died !== null ? String(figure.died) : undefined
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": isFa ? "صفحه اصلی" : "Home", "item": `${baseUrl}#/` },
          { "@type": "ListItem", "position": 2, "name": isFa ? "شخصیت‌ها" : "Figures", "item": `${baseUrl}#/figures` },
          { "@type": "ListItem", "position": 3, "name": fName, "item": fullUrl }
        ]
      }
    };
  } else if (page === 'ages') {
    title = isFa
      ? 'قدمت ۱۹۵ کشور جهان به ترتیب سال پیدایش | خط زمانی هیستوریوم'
      : 'Age of 195 Countries: Chronological Timeline of Nations | Historium';
    description = isFa
      ? 'محور زمانی قدمت کشورهای جهان: از کهن‌ترین تمدن‌های باستان تا جوان‌ترین ملت‌های قرن بیست و یکم به ترتیب سال آغاز و تشکیل.'
      : 'Chronological timeline of all 195 nations ranked from the oldest ancient civilizations to the newest 21st-century republics.';

    schemaData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": title,
      "description": description,
      "url": fullUrl,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": isFa ? "صفحه اصلی" : "Home", "item": `${baseUrl}#/` },
          { "@type": "ListItem", "position": 2, "name": isFa ? "قدمت کشورها" : "Age of Countries", "item": fullUrl }
        ]
      }
    };
  }

  // Update DOM Title and Meta Tags
  document.title = title;
  updateOrCreateMeta('description', description);
  updateOrCreateMeta('og:title', title, true);
  updateOrCreateMeta('og:description', description, true);
  updateOrCreateMeta('og:url', fullUrl, true);
  updateOrCreateMeta('og:site_name', siteName, true);
  updateOrCreateMeta('og:type', page === 'figure' ? 'profile' : (page === 'country' ? 'article' : 'website'), true);
  updateOrCreateMeta('og:locale', isFa ? 'fa_IR' : 'en_US', true);
  updateOrCreateMeta('og:locale:alternate', isFa ? 'en_US' : 'fa_IR', true);

  updateOrCreateMeta('twitter:card', 'summary_large_image');
  updateOrCreateMeta('twitter:title', title);
  updateOrCreateMeta('twitter:description', description);

  updateCanonical(fullUrl);
  updateJsonLd(schemaData);
}
