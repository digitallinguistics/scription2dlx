import { getSchema }  from './utilities/index.mjs';
import parseUtterance from './parseUtterance/index.mjs';

/**
 * Creates a regular expression to match one or more empty lines
 * @return {RegExp}
 */
function createBlankLinesRegExp() {

  // const whitespacePattern = `[ \\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]`;
  // const blankLinePattern  = `${whitespacePattern}*\\r?\\n`;
  // const blankLinesPattern = `(?:${blankLinePattern}){2,}`;
  // return new RegExp(blankLinesPattern, `gsu`);

  // NB: Writing the RegExp this way allows Babel to parse the "s" flag correctly
  return /(?:[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*\r?\n){2,}/gsu;

}

/**
 * Finds the text of the utterances portion of a scription text and returns it
 * @param  {String} text The scription text
 * @return {String}
 */
function getUtterancesString(text) {

  const parts = text
  .split(/---/gsu)
  .map(part => part.trim());

  return parts.pop();

}

/**
 * Isolates the utterances in a scription text string and returns them as an array of DLx Utterance objects
 * @param  {String} scription The scription text
 * @return {Array}
 */
export default function parseUtterances(scription) {

  try {

    const utterancesString = getUtterancesString(scription);
    const blankLinesRegExp = createBlankLinesRegExp();

    if (!utterancesString) return [];

    const utterancesStrings = utterancesString.split(blankLinesRegExp);
    const schema            = getSchema(utterancesStrings[0]);
    const parse             = utteranceString => parseUtterance(utteranceString, schema);

    return utterancesString
    .split(blankLinesRegExp)
    .map(parse)
    .filter(Boolean);

  } catch (e) {

    const textPreviewLength = 250;

    e.message = `[parseUtterances] ${e.message}\n\nError parsing utterances for the following text:\n\n${scription.slice(0, textPreviewLength)}`;

    throw e;

  }

}
