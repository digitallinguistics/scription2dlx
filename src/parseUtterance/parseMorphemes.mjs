import {
  getLineType,
  getMatches,
  groupLines,
  isString,
  validateLanguages,
  validateNumItems,
  zip,
} from '../utilities/index.mjs';

const infixRegExp = /(?<pre>.*)<(?<infix>.+)>(?<post>.*)/u;

/**
 * Filters an array of morphemes for duplicate glosses, and returns an array of the duplicate glosses
 * @param  {Array} morphemes An array of DLx Morpheme objects
 * @return {Array}           Returns an array of duplicate glosses
 */
function getDuplicateGlosses(morphemes) {

  const [{ gloss: firstGloss }] = morphemes;
  const isBareString            = isString(firstGloss);
  const code                    = isBareString ? `string` : Object.keys(firstGloss)[0];

  const glosses = morphemes
  .map(({ gloss }) => (isBareString ? gloss : gloss[code]));

  const glossCounts = glosses.reduce((counts, gl) => {
    const currentCount = counts.get(gl) || 0;
    counts.set(gl, currentCount + 1);
    return counts;
  }, new Map);

  const duplicateGlosses = Array.from(glossCounts.entries())
  .filter(([, count]) => count > 1)
  .map(([gl]) => gl);

  return {
    code,
    glosses: duplicateGlosses,
  };

}

/**
 * Searches an array of morphemes for any discontinuous morphemes and merges them if they exist
 * @param  {Array} morphemes An array of DLx Morpheme objects
 * @return {Array}           Returns a new array with the discontinuous morphemes merged
 */
function combineDiscontinuousMorphemes(morphemes) {

  const { code, glosses } = getDuplicateGlosses(morphemes);

  return glosses.reduce((arr, gl) => {

    const discontinuousMorphemes = [];
    const plainMorphemes         = [];

    arr.forEach(morpheme => {

      const { gloss }    = morpheme;
      const glossToCheck = code === `string` ? gloss : gloss[code];

      if (glossToCheck === gl) discontinuousMorphemes.push(morpheme);
      else plainMorphemes.push(morpheme);

    });

    const discontinuousMorpheme = mergeDiscontinuousMorphemes(discontinuousMorphemes);

    return [...plainMorphemes, discontinuousMorpheme];

  }, morphemes);

}

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
 * Takes an array of morphemes and merges their transcriptions and glosses, separating the transcriptions with hyphens
 * @param  {Array}  discontinuousMorphemes An array of morphemes to merge
 * @return {Object}                        Returns a single merged Morpheme object
 */
function mergeDiscontinuousMorphemes(discontinuousMorphemes) {
  return discontinuousMorphemes.reduce((discontinuous, { transcription }) => {

    if (isString(transcription)) {

      discontinuous.transcription += `…${transcription}`; // eslint-disable-line no-param-reassign

    } else {

      Object.entries(transcription).forEach(([code, txn]) => {
        discontinuous.transcription[code] += `…${txn}`; // eslint-disable-line no-param-reassign
      });

    }

    return discontinuous;

  });
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

  const regExp = /\[(?<bracketed>[^[\u005d]+)\u005d|(?<unbracketed>[^-=~]+)/gu;

  return string.split(regExp)
  .filter(Boolean);

}

/**
 * Accepts an lines hash for a word (morpheme and gloss lines) and returns an array of DLx Morpheme objects
 * @param  {Object} wordLines A lines hash for a word
 * @return {Array}            Returns an array of DLx Morpheme objeccts
 */
export default function parseMorphemes(wordLines) {
  try {

    const morphemesHash = createMorphemesHash(wordLines);

    validateNumItems(morphemesHash);

    const morphemes = zip(morphemesHash)
    .flatMap(separateInfix)
    .map(data => ({
      transcription: groupLines(`m`, data),
      gloss:         groupLines(`gl`, data), // eslint-disable-line sort-keys
    }));

    morphemes.forEach(m => {
      validateLanguages(m.transcription);
      validateLanguages(m.gloss);
    });

    return combineDiscontinuousMorphemes(morphemes);

  } catch (e) {

    e.message = `[parseMorphemes] ${e.message}`;
    throw e;

  }
}
