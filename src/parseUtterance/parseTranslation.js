import {
  groupLines,
  removeBrackets,
  removeEmphasis,
} from '../utilities/index.js';

/**
 * Extracts, validates, and cleans the translation lines from the lines hash
 * @param  {String}        lineCode The line code to use for translations lines
 * @param  {Object}        lines    The lines hash
 * @return {String|Object}
 */
export default function parseTranslation(lineCode, lines) {
  let data = groupLines(lineCode, lines);
  if (!data) return null;
  data = removeEmphasis(data);
  data = removeBrackets(`tln`, data);
  return data;
}
