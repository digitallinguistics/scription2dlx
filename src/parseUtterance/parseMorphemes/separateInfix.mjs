import { getLineType } from '../../utilities/index.mjs';

/**
 * Checks a Morpheme object for infixes, and returns an array of two morphemes if one is present
 * @param  {Object}       morpheme The morepheme object to check for infixes
 * @return {Object|Array}          Returns an array of two morpheme objects, in order, if an infixed morpheme is present in the original morpheme object. Returns the original morpheme object otherwise.
 */
export default function separateInfix(morpheme) {

  const infixRegExp    = /(?<pre>.*)<(?<infix>.+)>(?<post>.*)/u;
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
