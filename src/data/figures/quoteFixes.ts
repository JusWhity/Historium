import { Figure } from '../../types';

/**
 * Corrections to quotations whose wording or attribution could not be verified.
 * figures/index.ts applies these on top of the original entries.
 *  - cyrus: the line is now the self-description at the start of the Cyrus Cylinder.
 *  - mahatma-gandhi: 'be the change you wish to see' has no source in Gandhi's writings;
 *    replaced by 'My life is my message', which is documented.
 *  - churchill: the exact words of the speech of 4 June 1940.
 *  - nelson-mandela: the closing words of his Rivonia trial speech (1964).
 *  - rumi: the popular English line is a loose modern rendering, so it is removed.
 */
export const QUOTE_FIXES: Record<string, Figure['quote']> = {
  cyrus: {
    fa: 'من کوروش، شاه جهان، شاه بزرگ، شاه توانا، شاه بابل، شاه سومر و اکد، شاه چهار گوشه‌ی جهان هستم.',
    en: 'I am Cyrus, king of the world, great king, mighty king, king of Babylon, king of Sumer and Akkad, king of the four quarters of the world.'
  },
  'mahatma-gandhi': { fa: 'زندگی من پیام من است.', en: 'My life is my message.' },
  churchill: { fa: 'ما هرگز تسلیم نخواهیم شد.', en: 'We shall never surrender.' },
  'nelson-mandela': { fa: 'این آرمانی است که حاضرم برایش بمیرم.', en: 'It is an ideal for which I am prepared to die.' },
  rumi: null
};
