import {
  groupLines,
} from '../utilities/index.mjs';

/**
 * Extracts, validates, and cleans the translation lines from the lines hash
 * @param  {String}        lineCode The line code to use for translations lines
 * @param  {Object}        lines    The lines hash
 * @return {String|Object}
 */
export default function parseTranslation(lineCode, lines) {
  const data = groupLines(lineCode, lines);
  if (!data) return null;
  return data;
}
