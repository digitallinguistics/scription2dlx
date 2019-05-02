import createLangRegExp from 'ietf-language-tag-regex';

import {
  cleanBrackets,
  getLines,
} from '../utilities/index.mjs';

/**
 * Validates the data for the "literal" field
 * @param  {String|Object} data The data to validate
 */
function validateLiteral(data) {

  if (typeof data === `object`) {

    const langRegExp = createLangRegExp();
    const isValidTag = tag => langRegExp.test(tag);

    Object.entries(data).forEach(([lang]) => {
      if (!isValidTag(lang)) {
        throw new Error(`${lang} is not a valid IETF language tag.`);
      }
    });

  }

}

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
    validateLiteral(data);
    return data;

  } catch (e) {

    e.message = `[parseLiteral] ${e.message}`;
    throw e;

  }

}
