import {
  getLine,
  trimBrackets,
} from '../utilities/index.mjs';

/**
 * Extracts the phonetic transcription data from the lines array
 * @param  {Array}  lines The array of line objects
 * @return {String}
 */
export default function parsePhonetic(lines) {

  try {

    let data = getLine(`phon`, lines);

    if (!data) return null;

    data = trimBrackets(`[`, `]`, data);

    return data;

  } catch (e) {

    e.message = `[parsePhonetic] ${e.message}`;
    throw e;

  }

}
