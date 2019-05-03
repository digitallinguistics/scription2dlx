import {
  cleanBrackets,
  groupLines,
  validateLanguages,
} from '../utilities/index.mjs';

/**
 * Parses, validates, and cleans the literal translation lines
 * @param  {Object}        lines The lines hash
 * @return {String|Object}
 */
export default function parseLiteral(lines) {

  try {

    let data = groupLines(`lit`, lines);
    if (!data) return null;
    data = cleanBrackets(`lit`, data);
    validateLanguages(data);
    return data;

  } catch (e) {

    e.message = `[parseLiteral] ${e.message}`;
    throw e;

  }

}
