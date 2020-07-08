import { getSchema }  from './utilities/index.js';
import parseUtterance from './parseUtterance/index.js';

/**
 * Finds the text of the utterances portion of a scription text and returns it
 * @param  {String} text The scription text
 * @return {String}
 */
function getUtterancesString(text) {
  return text
  .split(/---/gsu)
  .map(part => part.trim())
  .pop();
}

/**
 * Isolates the utterances in a scription text string and returns them as an array of DLx Utterance objects
 * @param  {String} scription The scription text
 * @param  {Object} codes     A hash of codes to use for line types
 * @param  {Object} [options] An options hash
 * @return {Array}
 */
export default function parseUtterances(scription, codes, options) {

  const utterancesString = getUtterancesString(scription);

  if (!utterancesString) return [];

  const blankLinesRegExp = /(?:[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*\r?\n){2,}/gsu;
  const utterances       = utterancesString.split(blankLinesRegExp);
  const schema           = getSchema(utterances[0]);
  const parse            = utteranceString => parseUtterance(utteranceString, schema, codes, options);

  return utterances
  .map(parse)
  .filter(Boolean);

}
