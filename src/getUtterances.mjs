import getSchema       from './getSchema.mjs';
import UtteranceParser from './UtteranceParser.mjs';

/**
 * Creates a regular expression to match one or more empty lines
 * @return {RegExp}
 */
function createBlankLinesRegExp() {
  const whitespacePattern = `[ \\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]`;
  const blankLinePattern  = `${whitespacePattern}*\\r?\\n`;
  const blankLinesPattern = `(?:${blankLinePattern}){2,}`;
  return new RegExp(blankLinesPattern, `gsu`);
}

/**
 * Finds the text of the utterances portion of a scription text and returns it
 * @param  {String} text The scription text
 * @return {String}
 */
function getUtterancesString(text) {

  try {

    const parts = text
    .split(/---/gsu)
    .map(part => part.trim());

    return parts.pop();

  } catch (e) {

    e.message = `[getUtterances.getUtterancesString] ${e.message}`;
    throw e;

  }

}

/**
 * Isolates the utterances in a scription text string and returns them as an array of DLx Utterance objects
 * @param  {String} scription The scription text
 * @return {Array}
 */
export default function getUtterances(scription) {

  try {

    const utterancesString = getUtterancesString(scription);
    const blankLinesRegExp = createBlankLinesRegExp();

    if (!utterancesString) return [];

    const utterancesStrings = utterancesString.split(blankLinesRegExp);
    const schema            = getSchema(utterancesStrings[0]);
    const parseUtterance    = new UtteranceParser(schema);

    return utterancesString
    .split(blankLinesRegExp)
    .map(parseUtterance);

  } catch (e) {

    e.message = `[scription2dlx.getUtterances] ${e.message}`;
    throw e;

  }

}
