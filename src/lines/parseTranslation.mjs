import { getLines } from '../utilities/index.mjs';

/**
 * Extracts, validates, and cleans the translation lines from the lines array
 * @param  {Array}         lines The array of line objects
 * @return {String|Object}
 */
export default function parseTranslation(lines) {

  try {

    const data = getLines(`tln`, lines);

    return data || null;

  } catch (e) {

    e.message = `[parseTranslation] ${e.message}`;
    throw e;

  }

}
