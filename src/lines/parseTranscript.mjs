import { getLines } from '../utilities/index.mjs';

/**
 * Extracts, validates, and cleans the transcript lines from the lines array
 * @param  {Array}         lines The array of line objects
 * @return {String|Object}
 */
export default function parseTranscript(lines) {

  try {

    const data = getLines(`trs`, lines);
    return data || null;

  } catch (e) {

    e.message = `[parseTranscript] ${e.message}`;
    throw e;

  }

}
