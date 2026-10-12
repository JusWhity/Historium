import { Figure } from '../../types';
import { FIGURES_PART_1 } from './figuresPart1';
import { FIGURES_PART_2 } from './figuresPart2';
import { FIGURES_EUROPE_AMERICAS } from './figuresEuropeAmericas';
import { FIGURES_ASIA } from './figuresAsia';
import { FIGURES_WORLD_ADDITIONAL } from './figuresWorld';
import { FIGURES_EXPANSION } from './figuresExpansion';
import { FIGURES_EXPANSION_PART_2 } from './figuresExpansionPart2';

const map = new Map<string, Figure>();

const lists: Figure[][] = [
  FIGURES_PART_1,
  FIGURES_PART_2,
  FIGURES_EUROPE_AMERICAS,
  FIGURES_ASIA,
  FIGURES_WORLD_ADDITIONAL,
  FIGURES_EXPANSION,
  FIGURES_EXPANSION_PART_2
];

for (const list of lists) {
  for (const f of list) {
    if (!map.has(f.id)) {
      map.set(f.id, f);
    }
  }
}

export const ALL_FIGURES: Figure[] = Array.from(map.values());
