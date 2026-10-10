import { Country } from '../../types';
import { EUROPE_COUNTRIES } from './europe';
import { ASIA_COUNTRIES } from './asia';
import { AFRICA_COUNTRIES } from './africa';
import { AMERICAS_COUNTRIES } from './americas';
import { OCEANIA_AND_REMAINING_COUNTRIES } from './oceaniaAndRemaining';

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

export const ALL_COUNTRIES: Country[] = Array.from(map.values());
