import {
  cleanBrackets,
  groupLines,
} from '../utilities/index.mjs';

/**
 * Parses, validates, and cleans the literal translation lines
 * @param  {String}        lineCode The line code to use for the phonetic line
 * @param  {Object}        lines    The lines hash
 * @return {String|Object}
 */
export default function parseLiteral(lineCode, lines) {
  let data = groupLines(lineCode, lines);
  if (!data) return null;
  // NB: Do not use the lineCode variable here
  // cleanBrackets accept an abstract type, not a line code, as its first argument
  data = cleanBrackets(`lit`, data);
  return data;
}
