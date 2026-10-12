import { Country } from '../../types';
import { EUROPE_COUNTRIES } from './europe';
import { ASIA_COUNTRIES } from './asia';
import { AFRICA_COUNTRIES } from './africa';
import { AMERICAS_COUNTRIES } from './americas';
import { OCEANIA_AND_REMAINING_COUNTRIES } from './oceaniaAndRemaining';
import { DETAILED_HISTORIES } from './detailedHistories';

// Combine all 195 countries ensuring uniqueness by id
const map = new Map<string, Country>();

const allCountryLists: Country[][] = [
  EUROPE_COUNTRIES,
  ASIA_COUNTRIES,
  AFRICA_COUNTRIES,
  AMERICAS_COUNTRIES,
  OCEANIA_AND_REMAINING_COUNTRIES
];

for (const list of allCountryLists) {
  for (const c of list) {
    if (!map.has(c.id)) {
      map.set(c.id, c);
    }
  }
}

// Countries with a full written history (sections + long timeline) get it applied here.
export const ALL_COUNTRIES: Country[] = Array.from(map.values()).map((c) => {
  const detail = DETAILED_HISTORIES[c.id];
  return detail ? { ...c, sections: detail.sections, timeline: detail.timeline } : c;
});
