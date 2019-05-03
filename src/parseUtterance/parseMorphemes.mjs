import {
  groupLines,
  zip,
} from '../utilities/index.mjs';

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

  // TODO: extract infixes
  // TODO: extract discontinuous morphemes

  return string
  .split(/[-=~]/gu)
  .map(str => str.trim());

}

/**
 * Accepts an lines hash for a word (morpheme and gloss lines) and returns an array of DLx Morpheme objects
 * @param  {Object} wordLines A lines hash for a word
 * @return {Array}            Returns an array of DLx Morpheme objeccts
 */
export default function parseMorphemes(wordLines) {
  try {

    const morphemesHash = createMorphemesHash(wordLines);
    const morphemesData = zip(morphemesHash);

    const morphemes = morphemesData.map(data => ({
      transcription: groupLines(`m`, data),
      gloss:         groupLines(`gl`, data), // eslint-disable-line sort-keys
    }));

    return morphemes;

  } catch (e) {

    e.message = `[parseMorphemes] ${e.message}`;
    throw e;

  }
}
