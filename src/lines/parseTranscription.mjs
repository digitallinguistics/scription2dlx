import {
  cleanBrackets,
  getLines,
} from '../utilities/index.mjs';

/**
 * Extracts, validates, and cleans the transcription lines from the lines array
 * @param  {Array}         lines The array of line objects
 * @return {String|Object}
 */
export default function parseTranscription(lines) {

  try {

    let data = getLines(`txn`, lines);
    if (!data) return null;
    data = cleanBrackets(`txn`, data);
    return data;

  } catch (e) {

    e.message = `[parseTranscription] ${e.message}`;
    throw e;

  }


}
