import { Figure } from '../../types';
import { FIGURES_PART_1 } from './figuresPart1';
import { FIGURES_PART_2 } from './figuresPart2';
import { FIGURES_EUROPE_AMERICAS } from './figuresEuropeAmericas';
import { FIGURES_ASIA } from './figuresAsia';
import { FIGURES_WORLD_ADDITIONAL } from './figuresWorld';
import { FIGURES_DETAILED } from './figuresDetailed';

const map = new Map<string, Figure>();

const lists: Figure[][] = [
  FIGURES_PART_1,
  FIGURES_PART_2,
  FIGURES_EUROPE_AMERICAS,
  FIGURES_ASIA,
  FIGURES_WORLD_ADDITIONAL
];

for (const list of lists) {
  for (const f of list) {
    if (!map.has(f.id)) {
      map.set(f.id, f);
    }
  }
}

// Detailed biographies: new figures are added; for figures that already exist the
// biography/achievements/era come from the detailed entry, while name, summary,
// quote and 'added' stay as they were.
for (const d of FIGURES_DETAILED) {
  const existing = map.get(d.id);
  map.set(
    d.id,
    existing
      ? {
          ...d,
          name: existing.name,
          summary: existing.summary,
          quote: existing.quote ?? d.quote,
          added: existing.added ?? d.added
        }
      : d
  );
}

export const ALL_FIGURES: Figure[] = Array.from(map.values());
