import {
  cleanBrackets,
  getLines,
  validateLanguages,
} from '../utilities/index.mjs';

/**
 * Parses, validates, and cleans the literal translation lines
 * @param  {Array}         lines The array of line objects
 * @return {String|Object}
 */
export default function parseLiteral(lines) {

  try {

    let data = getLines(`lit`, lines);
    if (!data) return null;
    data = cleanBrackets(`lit`, data);
    validateLanguages(data);
    return data;

  } catch (e) {

    e.message = `[parseLiteral] ${e.message}`;
    throw e;

  }

}
