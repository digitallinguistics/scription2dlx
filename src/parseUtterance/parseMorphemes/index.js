import getDuplicateMorphemes from './getDuplicateMorphemes.js';
import separateInfix         from './separateInfix.js';

import {
  difference,
  getLines,
  getMatches,
  groupLines,
  mergeTranscriptions,
  validateNumItems,
  zip,
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

  return getMatches(morphemeRegExp, string)
  .map(({ bracketed, unbracketed }) => bracketed || unbracketed);

}

/**
 * Accepts an lines hash for a word (morpheme and gloss lines) and returns an array of DLx Morpheme objects
 * @param  {Object} lineCodes The hash of line codes
 * @param  {Object} wordLines The lines hash for the word
 * @return {Array}            Returns an array of DLx Morpheme objeccts
 */
export default function parseMorphemes(codes, wordHash) {

  const {
    gl,
    m,
  } = codes;

  const morphemeLines = getLines([gl, m], wordHash);

  if (!morphemeLines) return [];

  const morphemesHash = createMorphemesHash(morphemeLines);

  validateNumItems(morphemesHash);

  let morphemes = zip(morphemesHash)
  .flatMap(morpheme => separateInfix(gl, morpheme))
  .map(data => {

    const transcription = groupLines(m, data) || ``;
    const gloss         = groupLines(gl, data);

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