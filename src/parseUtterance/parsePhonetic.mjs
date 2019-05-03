import { cleanBrackets } from '../utilities/index.mjs';

/**
 * Cleans and validates the phonetic line
 * @param  {String} line The phonetic line
 * @return {String}
 */
export default function parsePhonetic(line) {

  try {

    if (!line) return null;
    return cleanBrackets(`phon`, line);

  } catch (e) {

    e.message = `[parsePhonetic] ${e.message}`;
    throw e;

  }

}
