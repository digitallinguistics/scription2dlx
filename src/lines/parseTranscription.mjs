import {
  getLines,
  trimBrackets,
} from '../utilities/index.mjs';

/**
 * Extracts, validates, and cleans the transcription lines from the lines array
 * @param  {Array}         lines The array of line objects
 * @return {String|Object}
 */
export default function parseTranscription(lines) {

  try {

    const data = getLines(`txn`, lines);

    if (!data) return null;

    if (typeof data === `string`) return trimBrackets(`/`, `/`, data);

    Object.entries(data).forEach(([lang, text]) => {
      data[lang] = trimBrackets(`/`, `/`, text);
    });

    return data;

  } catch (e) {

    e.message = `[parseTranscription] ${e.message}`;
    throw e;

  }


}
