import {
  groupLines,
  validateLanguages,
} from '../utilities/index.mjs';

/**
 * Extracts, validates, and cleans the translation lines from the lines hash
 * @param  {Object}        lines The lines hash
 * @return {String|Object}
 */
export default function parseTranslation(lines) {

  try {

    const data = groupLines(`tln`, lines);
    if (!data) return null;
    validateLanguages(data);
    return data;

  } catch (e) {

    e.message = `[parseTranslation] ${e.message}`;
    throw e;

  }

}
