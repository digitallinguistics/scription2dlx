import getDuplicateMorphemes from './getDuplicateMorphemes.mjs';
import mergeMorphemes        from './mergeMorphemes.mjs';
import separateInfix         from './separateInfix.mjs';

import {
  difference,
  groupLines,
  validateLanguages,
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
  return string.split(/(?:\s|[-=~]+)/gu)
  .map(str => str.trim());
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

  morphemes.forEach(m => {
    validateLanguages(m.transcription);
    validateLanguages(m.gloss);
  });

  const duplicateMorphemes     = getDuplicateMorphemes(morphemes);
  morphemes                    = difference(morphemes, duplicateMorphemes.flat());
  const discontinuousMorphemes = duplicateMorphemes.map(mergeMorphemes);

  return [...morphemes, discontinuousMorphemes];

}
