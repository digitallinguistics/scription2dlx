import { isString } from '../../utilities/index.mjs';

/**
 * Check for duplicate glosses on a specific line in a set of morphemes, and return an array of the duplicates
 * @param  {String}        code      The code of the line to check for duplicates
 * @param  {Array}         morphemes The array of morphemes to check
 * @return {Array<Object>}
 */
function getDuplicateGlosses(code, morphemes) {

  if (!morphemes.length) return [];

  const glosses = morphemes.map(({ gloss }) => (code === `string` ? gloss : gloss[code]));

  const glossCounts = glosses.reduce((counts, gl) => {
    const currentCount = counts.get(gl) || 0;
    counts.set(gl, currentCount + 1);
    return counts;
  }, new Map);

  return Array.from(glossCounts.entries())
  .filter(([, count]) => count > 1)
  .map(([gl]) => gl);

}

/**
 * Get an array of arrays of morphemes with the same gloss
 * @param  {Array} morphemes The array of morphemes to check for duplicates
 * @return {Array}           Returns an array of arrays of duplicate morphemes
 */
export default function getDuplicateMorphemes(morphemes) {

  const [{ gloss }] = morphemes;

  if (!gloss) return [];

  const isBareString     = isString(gloss);
  const glossToCheck     = isBareString ? `string` : Object.keys(gloss)[0];
  const duplicateGlosses = getDuplicateGlosses(glossToCheck, morphemes);

  if (!duplicateGlosses) return [];

  return duplicateGlosses.map(gl => morphemes.filter(({ gloss: g }) => {
    if (isString(g)) return g === gl;
    return g[glossToCheck] === gl;
  }));

}
