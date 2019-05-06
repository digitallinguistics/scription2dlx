import getDuplicateMorphemes from './getDuplicateMorphemes.mjs';
import separateInfix         from './separateInfix.mjs';

import {
  difference,
  getMatches,
  groupLines,
  mergeTranscriptions,
  validateNumItems,
  zip,
} from '../../utilities/index.mjs';

/**
 * Creates a morphemes hash of line codes and an array of morphemes based on the word lines
 * @param  {Object} wordData The word data object
 * @return {Object}
 */
function createMorphemesHash(wordLines) {
  return Object.entries(wordLines)
  .reduce((hash, [code, data]) => {
    hash[code] = tokenizeWord(data); // eslint-disable-line no-param-reassign
    return hash;
  }, {});
}

/**
 * Tokenizes a string representation of a word into its respective morphemes / glosses
 * @param  {String} string The word string to tokenize
 * @return {Array}         Returns an array of morpheme / gloss strings
 */
function tokenizeWord(string) {

  // NOTE: Using the unicode escape \u005D is necessary here for Babel to transpile the regexp correctly
  const morphemeRegExp = /(?<bracketed>\[.*?\u005D)|(?<unbracketed>[^-=~\s]+)/gu;

  return getMatches(morphemeRegExp, string)
  .map(({ bracketed, unbracketed }) => bracketed || unbracketed);

}

/**
 * Accepts an lines hash for a word (morpheme and gloss lines) and returns an array of DLx Morpheme objects
 * @param  {Object} wordLines A lines hash for a word
 * @return {Array}            Returns an array of DLx Morpheme objeccts
 */
export default function parseMorphemes(wordLines) {

  const noData = !Object.values(wordLines).every(line => line.length);

  if (noData) return [];

  const morphemesHash = createMorphemesHash(wordLines);

  validateNumItems(morphemesHash);

  let morphemes = zip(morphemesHash)
  .flatMap(separateInfix)
  .map(data => ({
    transcription: groupLines(`m`, data),
    gloss:         groupLines(`gl`, data), // eslint-disable-line sort-keys
  }));

  if (!morphemes.length) return [];

  const duplicateMorphemes = getDuplicateMorphemes(morphemes);
  morphemes                = difference(morphemes, duplicateMorphemes.flat());

  const discontinuousMorphemes = duplicateMorphemes.map(dups => ({
    transcription: mergeTranscriptions(dups.map(({ transcription }) => transcription), `…`),
    gloss:         dups[0].gloss, // eslint-disable-line sort-keys
  }));

  return [...morphemes, ...discontinuousMorphemes];

}
