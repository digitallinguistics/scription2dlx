import {
  getLineType,
  groupLines,
  zip,
} from '../utilities/index.mjs';

const infixRegExp = /(?<pre>.*)<(?<infix>.+)>(?<post>.*)/u;

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
 * Checks a Morpheme object for infixes, and returns an array of two morphemes if one is present
 * @param  {Object}       morpheme The morepheme object to check for infixes
 * @return {Object|Array}          Returns an array of two morpheme objects, in order, if an infixed morpheme is present in the original morpheme object. Returns the original morpheme object otherwise.
 */
function separateInfix(morpheme) {

  const entries        = Object.entries(morpheme);
  const [, firstGloss] = entries.find(([code]) => getLineType(code) === `gl`);
  const match          = firstGloss.match(infixRegExp);

  if (!match) return morpheme;

  const infixPosition = match.groups.pre ? `right` : `left`;

  // i = new infix morpheme
  // m = new plain morpheme (with infix removed)
  const morphemes = entries.reduce(([i, m], [code, data]) => {

    const { infix, pre, post } = data.match(infixRegExp).groups;

    /* eslint-disable no-param-reassign */
    i[code] = infix;
    m[code] = `${pre}${post}`;
    /* eslint-enable no-param-reassign */

    return [i, m];

  }, [{}, {}]);

  return infixPosition === `left` ? morphemes : morphemes.reverse();

}

/**
 * Tokenizes a string representation of a word into its respective morphemes / glosses
 * @param  {String} string The word string to tokenize
 * @return {Array}         Returns an array of morpheme / gloss strings
 */
function tokenizeWord(string) {
  return string
  .split(/[-=~]/gu)
  .map(s => s.trim());
}

/**
 * Accepts an lines hash for a word (morpheme and gloss lines) and returns an array of DLx Morpheme objects
 * @param  {Object} wordLines A lines hash for a word
 * @return {Array}            Returns an array of DLx Morpheme objeccts
 */
export default function parseMorphemes(wordLines) {
  try {

    const morphemesHash = createMorphemesHash(wordLines);
    const morphemes = zip(morphemesHash)
    .flatMap(separateInfix)
    .map(data => ({
      transcription: groupLines(`m`, data),
      gloss:         groupLines(`gl`, data), // eslint-disable-line sort-keys
    }));

    return morphemes;

  } catch (e) {

    e.message = `[parseMorphemes] ${e.message}`;
    throw e;

  }
}
