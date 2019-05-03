import {
  cleanBrackets,
  groupLines,
} from '../utilities/index.mjs';

/**
 * Extracts, validates, and cleans the transcription lines from the lines hash
 * @param  {Object}        lines The lines hash
 * @return {String|Object}
 */
export default function parseTranscription(lines) {

  try {

    let data = groupLines(`txn`, lines);
    if (!data) return null;
    data = cleanBrackets(`txn`, data);
    return data;

  } catch (e) {

    e.message = `[parseTranscription] ${e.message}`;
    throw e;

  }


}
