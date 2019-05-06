import {
  cleanBrackets,
  groupLines,
} from '../utilities/index.mjs';

/**
 * Parses, validates, and cleans the literal translation lines
 * @param  {Object}        lines The lines hash
 * @return {String|Object}
 */
export default function parseLiteral(lines) {
  let data = groupLines(`lit`, lines);
  if (!data) return null;
  data = cleanBrackets(`lit`, data);
  return data;
}
