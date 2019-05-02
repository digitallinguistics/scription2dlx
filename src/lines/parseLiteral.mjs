import {
  getLines,
  trimBrackets,
} from '../utilities/index.mjs';

/**
 * Parses, validates, and cleans the literal translation lines
 * @param  {Array}         lines The array of line objects
 * @return {String|Object}
 */
export default function parseLiteral(lines) {

  try {

    const data = getLines(`lit`, lines);

    if (!data) return null;

    if (typeof data === `string`) return trimBrackets(`[`, `]`, data);

    Object.entries(data).forEach(([lang, text]) => {
      data[lang] = trimBrackets(`[`, `]`, text);
    });

    return data;

  } catch (e) {

    e.message = `[parseLiteral] ${e.message}`;
    throw e;

  }

}
