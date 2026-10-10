import { Country, Figure, Era } from './types';
import { HISTORIUM_DATA } from './data';
import { HISTORIUM_STRINGS, MONTH_NAMES } from './data/strings';
import { applyRouteSEO } from './seo';

export function initHistoriumApp(): void {
  const D = HISTORIUM_DATA;
  const S = HISTORIUM_STRINGS;

  const appEl = document.getElementById('app');
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  const progressEl = document.getElementById('progress');
  const skipEl = document.getElementById('skip-link');

  if (!appEl || !headerEl || !footerEl) return;
  const appContainer = appEl;
  const headerContainer = headerEl;
  const footerContainer = footerEl;

  let lang: 'fa' | 'en' = 'fa';
  try {
    const saved = localStorage.getItem('historium-lang');
    if (saved === 'fa' || saved === 'en') {
      lang = saved;
    }
  } catch {
    /* storage may be unavailable */
  }

  const reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const figFilter = { country: '', field: '' };

  /* ---------- helpers ---------- */
  function esc(s: unknown): string {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } as Record<string, string>)[c] || c;
    });
  }

  function L(o: { fa?: string; en?: string } | string | undefined | null): string {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    return o[lang] || o.en || o.fa || '';
  }

  function t(key: string): string {
    const v = S[key];
    if (!v) return key;
    return v[lang] || v.en || '';
  }

  function num(n: number | string): string {
    const s = String(n);
    if (lang !== 'fa') return s;
    return s.replace(/\d/g, function (d) {
      return '۰۱۲۳۴۵۶۷۸۹'.charAt(+d);
    });
  }

  function yearLabel(y: number): string {
    return y < 0 ? num(-y) + ' ' + t('bce') : num(y);
  }

  function paragraphs(list: { fa?: string[]; en?: string[] } | string[] | undefined | null): string {
    const arr: string[] = Array.isArray(list)
      ? list
      : (list ? (list[lang] || list.en || list.fa || []) : []);
    return arr.map(function (p) {
      return '<p>' + esc(p) + '</p>';
    }).join('');
  }

  function listOf(obj: { fa?: string[]; en?: string[] } | undefined | null): string[] {
    return (obj && (obj[lang] || obj.en || obj.fa)) || [];
  }

  function norm(s: string): string {
    return String(s).toLowerCase().replace(/\u064A/g, '\u06CC').replace(/\u0643/g, '\u06A9');
  }

  function firstChar(s: string): string {
    const a = Array.from(String(s).trim());
    return a.length ? a[0] : '?';
  }

  function fmtDate(month: number, day: number, year: number): string {
    return num(day) + ' ' + MONTH_NAMES[lang][month - 1] + ' ' + yearLabel(year);
  }

  function fmtISO(iso: string): string {
    const p = String(iso).split('-');
    if (p.length !== 3) return esc(iso);
    return num(+p[2]) + ' ' + MONTH_NAMES[lang][+p[1] - 1] + ' ' + num(+p[0]);
  }

  function ageOf(c: Country): number {
    const y = new Date().getFullYear();
    return c.founded < 0 ? y - c.founded - 1 : y - c.founded;
  }

  function ageText(c: Country): string {
    return t('ageText').replace('{n}', num(ageOf(c)));
  }

  function findCountry(id: string): Country | null {
    for (let i = 0; i < D.countries.length; i++) {
      if (D.countries[i].id === id) return D.countries[i];
    }
    return null;
  }

  function findFigure(id: string): Figure | null {
    for (let i = 0; i < D.figures.length; i++) {
      if (D.figures[i].id === id) return D.figures[i];
    }
    return null;
  }

  function eraOf(f: Figure): Era {
    let i: number, e: Era;
    if (f.era) {
      for (i = 0; i < D.eras.length; i++) {
        if (D.eras[i].id === f.era) return D.eras[i];
      }
    }
    for (i = 0; i < D.eras.length; i++) {
      e = D.eras[i];
      if (f.born >= e.from && f.born <= e.to) return e;
    }
    return D.eras[D.eras.length - 1];
  }

  function lifespan(f: Figure): string {
    if (f.died == null) return t('bornPrefix') + ' ' + yearLabel(f.born);
    return yearLabel(f.born) + ' \u2013 ' + yearLabel(f.died);
  }

  function flagHTML(c: Country, cls: string): string {
    if (c.flagImage) {
      return '<span class="' + cls + '" aria-hidden="true"><img class="flag-img" src="' + esc(c.flagImage) + '" alt=""></span>';
    }
    const colors = c.flag && c.flag.length ? c.flag : ['#999999'];
    const n = colors.length, parts: string[] = [];
    for (let i = 0; i < n; i++) {
      parts.push(colors[i] + ' ' + (i * 100 / n).toFixed(2) + '% ' + ((i + 1) * 100 / n).toFixed(2) + '%');
    }
    const dir = c.flagDirection === 'vertical' ? 'to right' : 'to bottom';
    return '<span class="' + cls + '" aria-hidden="true"><span class="flag" style="background:linear-gradient(' + dir + ',' + esc(parts.join(',')) + ')"></span></span>';
  }

  function monoHTML(f: Figure, big: boolean): string {
    const inner = f.image
      ? '<img src="' + esc(f.image) + '" alt="">'
      : esc(firstChar(L(f.name)));
    return '<span class="mono' + (big ? ' big' : '') + '" aria-hidden="true">' + inner + '</span>';
  }

  const ICONS: Record<string, string> = {
    countries: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18"/><ellipse cx="24" cy="24" rx="8" ry="18"/><path d="M6 24h36M9 14h30M9 34h30"/></svg>',
    figures: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="16" r="8"/><path d="M8 42c0-9 7-15 16-15s16 6 16 15z"/></svg>',
    ages: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 6h24M12 42h24M14 6c0 10 10 12 10 18S14 32 14 42M34 6c0 10-10 12-10 18s10 8 10 18"/></svg>'
  };

  /* ---------- chrome (header and footer) ---------- */
  function renderChrome(section: string) {
    const links = [
      ['/', 'navHome'],
      ['/countries', 'navCountries'],
      ['/figures', 'navFigures'],
      ['/ages', 'navAges']
    ];
    const nav = links.map(function (l) {
      const cur = l[0] === section ? ' aria-current="page"' : '';
      return '<a href="#' + l[0] + '"' + cur + '>' + esc(t(l[1])) + '</a>';
    }).join('');
    const other = lang === 'fa' ? 'en' : 'fa';
    headerContainer.innerHTML =
      '<a class="logo" href="#/">Historium</a>' +
      '<nav class="main-nav" aria-label="Historium">' + nav + '</nav>' +
      '<button type="button" class="lang-btn" id="lang-btn" lang="' + other + '" aria-label="' + esc(t('langSwitchLabel')) + '">' + esc(t('langSwitch')) + '</button>';
    footerContainer.innerHTML =
      '<p>' + esc(t('footerText')) + '</p>' +
      '<p style="font-size:0.8em; margin-top:0.45rem; opacity:0.85;">' + esc(t('footerLove')) + '</p>' +
      '<p style="font-size:0.85em;margin-top:0.4rem">© Historium ' + num(new Date().getFullYear()) + '</p>';
    if (skipEl) {
      skipEl.textContent = t('skip');
    }
  }

  /* ---------- reusable pieces ---------- */
  function sectionTitle(text: string, extra?: string): string {
    return '<div class="section-title"><h2>' + esc(text) + '</h2>' + (extra || '') + '</div>';
  }

  function countryCard(c: Country): string {
    const search = norm(L(c.name) + ' ' + (c.name.fa || '') + ' ' + (c.name.en || ''));
    return '<a class="country-card frame" href="#/country/' + esc(c.id) + '" data-search="' + esc(search) + '">' +
      flagHTML(c, 'flag-band') +
      '<span class="body"><h3>' + esc(L(c.name)) + '</h3>' +
      '<p class="age">' + esc(ageText(c)) + '</p>' +
      '<p class="sum">' + esc(L(c.summary)) + '</p></span></a>';
  }

  function figCard(f: Figure): string {
    const c = findCountry(f.country);
    return '<a class="fig-card frame" href="#/figure/' + esc(f.id) + '">' + monoHTML(f, false) +
      '<span><span class="nm">' + esc(L(f.name)) + '</span><br>' +
      '<span class="yr">' + esc(lifespan(f)) + (c ? ' \u2013 ' + esc(L(c.name)) : '') + '</span><br>' +
      '<span class="kn">' + esc(L(f.summary)) + '</span></span></a>';
  }

  /* ---------- views ---------- */
  function pickToday() {
    const list = D.onThisDay || [];
    if (!list.length) return null;
    const now = new Date(), m = now.getMonth() + 1, d = now.getDate();
    const exact = list.filter(function (e) { return e.month === m && e.day === d; });
    if (exact.length) return { entries: exact, exact: true };
    const key = function (mm: number, dd: number) { return mm * 40 + dd; };
    const cur = key(m, d);
    let best = list[0], bestDist = 1e9;
    list.forEach(function (e) {
      let dist = key(e.month, e.day) - cur;
      if (dist < 0) { dist += 12 * 40; }
      if (dist < bestDist) { bestDist = dist; best = e; }
    });
    const same = list.filter(function (e) { return e.month === best.month && e.day === best.day; });
    return { entries: same, exact: false };
  }

  function viewHome(): string {
    const other = lang === 'fa' ? 'en' : 'fa';
    const hero =
      '<section class="hero" aria-labelledby="slogan"><div class="scroll">' +
      '<div class="scroll-rod"></div>' +
      '<div class="scroll-sheet">' +
      '<h1 class="slogan" id="slogan">' + esc(L(S.slogan)) + '</h1>' +
      '<p class="slogan-alt" lang="' + other + '" dir="' + (other === 'fa' ? 'rtl' : 'ltr') + '">' + esc(S.slogan[other]) + '</p>' +
      '<p class="tagline">' + esc(t('tagline')) + '</p>' +
      '</div><div class="scroll-rod"></div></div></section>';

    const entries = [
      ['/countries', 'countries', 'cardCountriesTitle', 'cardCountriesText'],
      ['/figures', 'figures', 'cardFiguresTitle', 'cardFiguresText'],
      ['/ages', 'ages', 'cardAgesTitle', 'cardAgesText']
    ].map(function (e) {
      return '<a class="entry frame" href="#' + e[0] + '">' + ICONS[e[1]] +
        '<h3>' + esc(t(e[2])) + '</h3><p>' + esc(t(e[3])) + '</p></a>';
    }).join('');

    let html = hero + '<div class="page">' +
      sectionTitle(t('introTitle')) + '<p class="lead">' + esc(t('intro')) + '</p>' +
      '<div class="entry-grid" style="margin-top:2rem">' + entries + '</div>';

    const today = pickToday();
    if (today) {
      html += sectionTitle(t('todayTitle'));
      html += '<div class="today frame">';
      html += '<p class="note">' + esc(today.exact ? t('todayExact') : t('todayNext')) + '</p>';
      today.entries.forEach(function (e, i) {
        html += '<div' + (i ? ' style="margin-top:1.25rem"' : '') + '>' +
          '<p class="date">' + esc(fmtDate(e.month, e.day, e.year)) + '</p>' +
          '<h3>' + esc(L(e.title)) + '</h3><p>' + esc(L(e.text)) + '</p>' +
          (e.country && findCountry(e.country) ? '<a href="#/country/' + esc(e.country) + '">' + esc(t('readMore')) + '</a>' : '') +
          '</div>';
      });
      html += '</div>';
    }

    const items: { kind: string; href: string; name: string; added: string }[] = [];
    D.countries.forEach(function (c) {
      if (c.added) {
        items.push({ kind: 'typeCountry', href: '#/country/' + c.id, name: L(c.name), added: c.added });
      }
    });
    D.figures.forEach(function (f) {
      if (f.added) {
        items.push({ kind: 'typeFigure', href: '#/figure/' + f.id, name: L(f.name), added: f.added });
      }
    });
    items.sort(function (a, b) { return a.added < b.added ? 1 : (a.added > b.added ? -1 : 0); });
    const topItems = items.slice(0, 5);
    if (topItems.length) {
      html += sectionTitle(t('latestTitle'));
      html += '<div class="frame" style="padding:0.75rem 1.5rem"><ul class="latest-list">' + topItems.map(function (it) {
        return '<li><span class="kind">' + esc(t(it.kind)) + '</span><a href="' + esc(it.href) + '">' + esc(it.name) + '</a>' +
          '<span class="when">' + fmtISO(it.added) + '</span></li>';
      }).join('') + '</ul></div>';
    }
    return html + '</div>';
  }

  function viewCountries(): string {
    return '<div class="page"><h1>' + esc(t('countriesTitle')) + '</h1>' +
      '<p class="lead">' + esc(t('countriesLead')) + '</p>' +
      '<div class="searchbar"><label for="q" class="sr-only">' + esc(t('searchLabel')) + '</label>' +
      '<input id="q" type="search" autocomplete="off" placeholder="' + esc(t('searchPlaceholder')) + '"></div>' +
      '<div class="card-grid" id="country-grid">' + D.countries.map(countryCard).join('') + '</div>' +
      '<p class="empty" id="no-results" hidden>' + esc(t('noResults')) + '</p></div>';
  }

  function viewCountry(c: Country): string {
    const idx = D.countries.indexOf(c);
    const prev = D.countries[idx - 1], next = D.countries[idx + 1];
    const figs = D.figures.filter(function (f) { return f.country === c.id; }).sort(function (a, b) { return a.born - b.born; });
    const toc: [string, string][] = [['sec-overview', t('overviewTitle')]];
    (c.sections || []).forEach(function (s) { toc.push(['sec-' + s.id, L(s.title)]); });
    if (c.timeline && c.timeline.length) { toc.push(['sec-timeline', t('timelineTitle')]); }
    if (figs.length) { toc.push(['sec-figures', t('figuresOfCountry')]); }
    if (c.gallery && c.gallery.length) { toc.push(['sec-gallery', t('galleryTitle')]); }

    let facts = '<div><dt>' + esc(t('factFounded')) + '</dt><dd>' + esc(yearLabel(c.founded)) + '</dd></div>';
    if (c.facts) {
      ([['capital', 'factCapital'], ['language', 'factLanguage'], ['population', 'factPopulation']] as const).forEach(function (k) {
        if (c.facts[k[0]]) { facts += '<div><dt>' + esc(t(k[1])) + '</dt><dd>' + esc(L(c.facts[k[0]])) + '</dd></div>'; }
      });
    }

    let html = '<div class="page">' +
      '<p class="crumb"><a href="#/countries">' + esc(t('backToCountries')) + '</a></p>' +
      '<header class="country-head">' + flagHTML(c, 'flag-big') +
      '<div><h1>' + esc(L(c.name)) + '</h1><p class="lead" style="margin:0.25rem 0 0">' + esc(L(c.summary)) + '</p></div>' +
      '<a class="seal" href="#/ages" aria-label="' + esc(t('ageBadgeLabel')) + '"><span class="n">' + esc(num(ageOf(c))) + '</span><span class="u">' + esc(t('ageSealUnit')) + '</span></a>' +
      '</header>' +
      '<div class="country-layout"><div class="country-main">';

    html += '<section id="sec-overview"><h2>' + esc(t('overviewTitle')) + '</h2>' + paragraphs(c.overview);
    if (c.foundedNote) {
      html += '<div class="why-date"><strong>' + esc(t('whyDate')) + '</strong><p>' + esc(L(c.foundedNote)) + '</p></div>';
    }
    html += '</section>';

    (c.sections || []).forEach(function (s) {
      html += '<section id="sec-' + esc(s.id) + '"><h2>' + esc(L(s.title)) + '</h2>' + paragraphs(s.text) + '</section>';
    });

    if (c.timeline && c.timeline.length) {
      html += '<section id="sec-timeline"><h2>' + esc(t('timelineTitle')) + '</h2><p class="hint">' + esc(t('timelineHint')) + '</p><ol class="timeline">';
      c.timeline.forEach(function (ev) {
        html += '<li><details><summary><span class="t-year">' + esc(ev.yearText ? L(ev.yearText) : yearLabel(ev.year)) + '</span>' +
          '<span class="t-title">' + esc(L(ev.title)) + '</span></summary>' +
          '<p class="t-text">' + esc(L(ev.text)) + '</p></details></li>';
      });
      html += '</ol></section>';
    }

    if (figs.length) {
      html += '<section id="sec-figures"><h2>' + esc(t('figuresOfCountry')) + '</h2><div class="mini-grid">' + figs.map(figCard).join('') + '</div></section>';
    }
    if (c.gallery && c.gallery.length) {
      html += '<section id="sec-gallery"><h2>' + esc(t('galleryTitle')) + '</h2><div class="gallery">' + c.gallery.map(function (g) {
        return '<figure class="frame"><img src="' + esc(g.src) + '" alt="' + esc(L(g.caption)) + '" loading="lazy"><figcaption>' + esc(L(g.caption)) + '</figcaption></figure>';
      }).join('') + '</div></section>';
    }

    html += '</div><aside class="side">' +
      '<div class="box frame"><h2>' + esc(t('quickFacts')) + '</h2><dl class="facts">' + facts + '</dl></div>' +
      '<nav class="box frame" aria-label="' + esc(t('toc')) + '"><h2>' + esc(t('toc')) + '</h2><ul class="toc">' +
      toc.map(function (x) { return '<li><a href="#/country/' + esc(c.id) + '" data-scroll="' + esc(x[0]) + '">' + esc(x[1]) + '</a></li>'; }).join('') +
      '</ul></nav></aside></div>';

    if (prev || next) {
      html += '<nav class="pager" aria-label="' + esc(t('navCountries')) + '">' +
        (prev ? '<a href="#/country/' + esc(prev.id) + '"><small>' + esc(t('prevCountry')) + '</small>' + esc(L(prev.name)) + '</a>' : '<span></span>') +
        (next ? '<a href="#/country/' + esc(next.id) + '"><small>' + esc(t('nextCountry')) + '</small>' + esc(L(next.name)) + '</a>' : '<span></span>') +
        '</nav>';
    }
    return html + '</div>';
  }

  function figResults(): string {
    const list = D.figures.filter(function (f) {
      return (!figFilter.country || f.country === figFilter.country) && (!figFilter.field || f.field === figFilter.field);
    });
    if (!list.length) return '<p class="empty">' + esc(t('noFigures')) + '</p>';
    const groups: { era: Era; list: Figure[] }[] = [];
    D.eras.forEach(function (e) {
      const inEra = list.filter(function (f) { return eraOf(f) === e; }).sort(function (a, b) { return a.born - b.born; });
      if (inEra.length) groups.push({ era: e, list: inEra });
    });
    const nav = '<nav class="era-nav" aria-label="' + esc(t('eraNav')) + '">' + groups.map(function (g) {
      return '<a href="#/figures" data-scroll="era-' + esc(g.era.id) + '">' + esc(L(g.era.name)) + '</a>';
    }).join('') + '</nav>';
    const body = groups.map(function (g) {
      const from = g.era.from < -5000 ? '' : yearLabel(g.era.from);
      const to = g.era.to > 5000 ? '' : yearLabel(g.era.to);
      const range = from && to ? from + ' \u2013 ' + to : (from ? from + ' \u2013' : '\u2013 ' + to);
      return '<section class="era" id="era-' + esc(g.era.id) + '" style="--era:' + esc(g.era.color) + '">' +
        '<div class="era-banner"><h2>' + esc(L(g.era.name)) + '</h2><div class="range">' + esc(range) + '</div><p>' + esc(L(g.era.desc)) + '</p></div>' +
        '<div class="mini-grid">' + g.list.map(figCard).join('') + '</div></section>';
    }).join('');
    return nav + body;
  }

  function viewFigures(): string {
    const usedCountries: string[] = [], usedFields: string[] = [];
    D.figures.forEach(function (f) {
      if (usedCountries.indexOf(f.country) < 0) usedCountries.push(f.country);
      if (usedFields.indexOf(f.field) < 0) usedFields.push(f.field);
    });
    usedCountries.sort();
    const cOpts = '<option value="">' + esc(t('all')) + '</option>' + usedCountries.map(function (id) {
      const c = findCountry(id);
      return '<option value="' + esc(id) + '"' + (figFilter.country === id ? ' selected' : '') + '>' + esc(c ? L(c.name) : id) + '</option>';
    }).join('');
    const fOpts = '<option value="">' + esc(t('all')) + '</option>' + usedFields.map(function (k) {
      return '<option value="' + esc(k) + '"' + (figFilter.field === k ? ' selected' : '') + '>' + esc(D.fields[k] ? L(D.fields[k]) : k) + '</option>';
    }).join('');
    return '<div class="page"><h1>' + esc(t('figuresTitle')) + '</h1><p class="lead">' + esc(t('figuresLead')) + '</p>' +
      '<div class="filters">' +
      '<div><label for="f-country">' + esc(t('filterCountry')) + '</label><select id="f-country">' + cOpts + '</select></div>' +
      '<div><label for="f-field">' + esc(t('filterField')) + '</label><select id="f-field">' + fOpts + '</select></div>' +
      '<div><button type="button" class="btn" id="random-fig">' + esc(t('randomFigure')) + '</button></div>' +
      '</div><div id="fig-results">' + figResults() + '</div></div>';
  }

  function viewFigure(f: Figure): string {
    const c = findCountry(f.country), era = eraOf(f);
    const end = f.died == null ? new Date().getFullYear() : f.died;
    const near = D.figures.filter(function (o) { return o !== f; }).map(function (o) {
      const oEnd = o.died == null ? new Date().getFullYear() : o.died;
      return { f: o, overlap: Math.min(end, oEnd) - Math.max(f.born, o.born) };
    }).filter(function (x) { return x.overlap >= 20; })
      .sort(function (a, b) { return b.overlap - a.overlap; }).slice(0, 4);

    let html = '<div class="page"><p class="crumb"><a href="#/figures">' + esc(t('backToFigures')) + '</a></p>' +
      '<header class="fig-head">' + monoHTML(f, true) + '<div><h1>' + esc(L(f.name)) + '</h1>' +
      '<p class="meta" style="margin:0">' + esc(lifespan(f)) + '</p>' +
      '<p class="meta" style="margin:0.25rem 0 0">' +
      (c ? esc(t('fromCountry')) + ': <a href="#/country/' + esc(c.id) + '">' + esc(L(c.name)) + '</a>. ' : '') +
      esc(t('fieldLabel')) + ': ' + esc(D.fields[f.field] ? L(D.fields[f.field]) : f.field) + '. ' +
      esc(t('eraLabel')) + ': ' + esc(L(era.name)) + '.</p></div></header>' +
      '<div class="fig-body"><p class="lead">' + esc(L(f.summary)) + '</p>' +
      '<h2>' + esc(t('biography')) + '</h2>' + paragraphs(f.bio);
    const ach = listOf(f.achievements);
    if (ach.length) {
      html += '<h2>' + esc(t('achievements')) + '</h2><ul>' + ach.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul>';
    }
    if (f.quote && L(f.quote)) {
      html += '<h2>' + esc(t('famousQuote')) + '</h2><blockquote class="quote">' + esc(L(f.quote)) + '</blockquote>';
    }
    html += '</div>';
    if (near.length) {
      html += sectionTitle(t('contemporaries')) + '<div class="mini-grid">' + near.map(function (x) { return figCard(x.f); }).join('') + '</div>';
    }
    return html + '</div>';
  }

  function viewAges(): string {
    const list = D.countries.slice().sort(function (a, b) { return a.founded - b.founded; });
    const items = list.map(function (c) {
      return '<li class="age-item"><span class="yr">' + esc(yearLabel(c.founded)) + '</span><span class="dot"></span>' +
        '<div class="age-card frame"><h3><a href="#/country/' + esc(c.id) + '">' + esc(L(c.name)) + '</a></h3>' +
        '<div class="big-n">' + esc(ageText(c)) + '</div>' +
        (c.foundedNote ? '<details><summary>' + esc(t('whyDate')) + '</summary><p>' + esc(L(c.foundedNote)) + '</p></details>' : '') +
        '</div></li>';
    }).join('');
    return '<div class="page"><h1>' + esc(t('agesTitle')) + '</h1><p class="lead">' + esc(t('agesLead')) + '</p>' +
      '<p class="hint">' + esc(t('agesHint')) + '</p>' +
      '<div class="ages-scroller" tabindex="0" role="region" aria-label="' + esc(t('agesTitle')) + '"><ol class="ages-track" style="list-style:none;margin:0;padding-inline:0">' + items + '</ol></div></div>';
  }

  function viewNotFound(): string {
    return '<div class="page"><h1>' + esc(t('notFoundTitle')) + '</h1><p class="lead">' + esc(t('notFoundText')) + '</p>' +
      '<p><a href="#/">' + esc(t('navHome')) + '</a></p></div>';
  }

  /* ---------- router ---------- */
  function parseHash(): string[] {
    const h = (location.hash || '').replace(/^#/, '');
    if (h.charAt(0) !== '/') return [''];
    return h.split('/').filter(Boolean).map(function (x) {
      try { return decodeURIComponent(x); } catch { return x; }
    });
  }

  function route(isLangChange: boolean) {
    const p = parseHash();
    const page = p[0] || '';
    let view = '';
    let section = '/';
    let c: Country | null = null;
    let f: Figure | null = null;

    document.body.classList.remove('has-progress');

    if (page === '') {
      view = viewHome();
    } else if (page === 'countries' && !p[1]) {
      view = viewCountries();
      section = '/countries';
    } else if (page === 'country' && (c = findCountry(p[1]))) {
      view = viewCountry(c);
      section = '/countries';
      document.body.classList.add('has-progress');
    } else if (page === 'figures' && !p[1]) {
      view = viewFigures();
      section = '/figures';
    } else if (page === 'figure' && (f = findFigure(p[1]))) {
      view = viewFigure(f);
      section = '/figures';
    } else if (page === 'ages' && !p[1]) {
      view = viewAges();
      section = '/ages';
    } else {
      view = viewNotFound();
    }

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    renderChrome(section);
    appContainer.innerHTML = view;

    // Apply route-specific global SEO metadata, title, and Schema markup
    applyRouteSEO({
      page,
      country: c,
      figure: f,
      lang
    });

    if (!isLangChange) {
      window.scrollTo(0, 0);
      try { appContainer.focus({ preventScroll: true }); } catch { /* ignore */ }
    }
    updateProgress();
  }

  function updateProgress() {
    if (!document.body.classList.contains('has-progress') || !progressEl) return;
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const r = max > 0 ? h.scrollTop / max : 0;
    progressEl.style.transform = 'scaleX(' + Math.min(1, Math.max(0, r)) + ')';
  }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    const target = e.target as HTMLElement | null;
    if (!target || !target.closest) return;

    if (target.closest('#lang-btn')) {
      lang = lang === 'fa' ? 'en' : 'fa';
      try { localStorage.setItem('historium-lang', lang); } catch { /* ignore */ }
      route(true);
      return;
    }
    const sc = target.closest('[data-scroll]');
    if (sc) {
      e.preventDefault();
      const id = sc.getAttribute('data-scroll');
      if (id) {
        const el = document.getElementById(id);
        if (el) { el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); }
      }
      return;
    }
    if (target.closest('#random-fig')) {
      const pool = D.figures;
      if (pool.length) { location.hash = '#/figure/' + pool[Math.floor(Math.random() * pool.length)].id; }
    }
  });

  document.addEventListener('change', function (e) {
    const target = e.target as HTMLSelectElement | null;
    const id = target && target.id;
    if (id === 'f-country' || id === 'f-field') {
      const cEl = document.getElementById('f-country') as HTMLSelectElement | null;
      const fEl = document.getElementById('f-field') as HTMLSelectElement | null;
      figFilter.country = cEl ? cEl.value : '';
      figFilter.field = fEl ? fEl.value : '';
      const res = document.getElementById('fig-results');
      if (res) {
        res.innerHTML = figResults();
      }
    }
  });

  document.addEventListener('input', function (e) {
    const target = e.target as HTMLInputElement | null;
    if (!target || target.id !== 'q') return;
    const q = norm(target.value.trim());
    const cards = document.querySelectorAll('#country-grid [data-search]');
    let shown = 0;
    Array.prototype.forEach.call(cards, function (card: HTMLElement) {
      const match = !q || card.getAttribute('data-search')!.indexOf(q) !== -1;
      card.hidden = !match;
      if (match) { shown++; }
    });
    const noRes = document.getElementById('no-results');
    if (noRes) {
      noRes.hidden = shown !== 0;
    }
  });

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  window.addEventListener('hashchange', function () { route(false); });

  route(false);
}
