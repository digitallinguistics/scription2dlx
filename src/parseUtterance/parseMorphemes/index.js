import getDuplicateMorphemes from './getDuplicateMorphemes.js';
import separateInfix         from './separateInfix.js';

import {
  difference,
  zip,
} from '../../utilities/js/index.js';

import {
  getLines,
  groupLines,
  mergeTranscriptions,
  validateNumItems,
} from '../../utilities/index.js';

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

  return Array.from(string.matchAll(morphemeRegExp))
  .map(([result]) => result);

}

/**
 * Accepts an lines hash for a word (morpheme and gloss lines) and returns an array of DLx Morpheme objects
 * @param  {Object} codes    The hash of line codes
 * @param  {Object} wordHash The lines hash for the word
 * @return {Array}           Returns an array of DLx Morpheme objeccts
 */
export default function parseMorphemes(codes, wordHash) {

  debugger;

  const morphemeLines = getLines([codes.gl, codes.m], wordHash);

  if (!morphemeLines) return [];

  const morphemesHash = createMorphemesHash(morphemeLines);

  validateNumItems(morphemesHash);

  let morphemes = zip(morphemesHash)
  .flatMap(morpheme => separateInfix(codes.gl, morpheme))
  .map(data => {

    const transcription = groupLines(codes.m, data) || ``;
    const gloss         = groupLines(codes.gl, data);

    return {
      transcription,
      ...gloss ? { gloss } : {},
    };

  });

  if (!morphemes.length) return [];

  const duplicateMorphemes = getDuplicateMorphemes(morphemes);
  morphemes                = difference(morphemes, duplicateMorphemes.flat());

  const discontinuousMorphemes = duplicateMorphemes.map(dups => ({
    transcription: mergeTranscriptions(dups.map(({ transcription }) => transcription), `…`),
    analysis:      dups[0].analysis, // eslint-disable-line sort-keys
    gloss:         dups[0].gloss,
  }));

  return [...morphemes, ...discontinuousMorphemes];

}
