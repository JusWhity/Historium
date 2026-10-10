import { HistoriumData } from '../types';
import { HISTORICAL_ERAS, HISTORICAL_FIELDS } from './erasAndFields';
import { ALL_COUNTRIES } from './countries';
import { ALL_FIGURES } from './figures';
import { ON_THIS_DAY_EVENTS } from './onThisDay';

export const HISTORIUM_DATA: HistoriumData = {
  eras: HISTORICAL_ERAS,
  fields: HISTORICAL_FIELDS,
  countries: ALL_COUNTRIES,
  figures: ALL_FIGURES,
  onThisDay: ON_THIS_DAY_EVENTS
};

export { HISTORICAL_ERAS, HISTORICAL_FIELDS } from './erasAndFields';
export { ALL_COUNTRIES } from './countries';
export { ALL_FIGURES } from './figures';
export { ON_THIS_DAY_EVENTS } from './onThisDay';
export { HISTORIUM_STRINGS, MONTH_NAMES } from './strings';
