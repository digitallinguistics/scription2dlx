import { getSchema }  from './utilities/index.mjs';
import parseUtterance from './parseUtterance/index.mjs';

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
 * @return {Array}
 */
export default function parseUtterances(scription) {

  const utterancesString = getUtterancesString(scription);

  if (!utterancesString) return [];

  const blankLinesRegExp  = /(?:[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*\r?\n){2,}/gsu;
  const utterancesStrings = utterancesString.split(blankLinesRegExp);
  const schema            = getSchema(utterancesStrings[0]);
  const parse             = utteranceString => parseUtterance(utteranceString, schema);

  return utterancesString
  .split(blankLinesRegExp)
  .map(parse)
  .filter(Boolean);

}
