import { BATCH_01_HISTORIES } from './batch01';
import { BATCH_02_HISTORIES } from './batch02';
import { BATCH_03_HISTORIES } from './batch03';
import { BATCH_04_HISTORIES } from './batch04';
import { BATCH_05_HISTORIES } from './batch05';
import { BATCH_06_HISTORIES } from './batch06';
import { BATCH_08_HISTORIES } from './batch08';
import { BATCH_09_HISTORIES } from './batch09';
import { BATCH_10_HISTORIES } from './batch10';

/**
 * All full-history batches. To add a new batch: create batchNN.ts next to the others
 * (same format) and add it here.
 */
export const BATCH_HISTORIES = {
  ...BATCH_01_HISTORIES,
  ...BATCH_02_HISTORIES,
  ...BATCH_03_HISTORIES,
  ...BATCH_04_HISTORIES,
  ...BATCH_05_HISTORIES,
  ...BATCH_06_HISTORIES,
  ...BATCH_08_HISTORIES,
  ...BATCH_09_HISTORIES,
  ...BATCH_10_HISTORIES
};
