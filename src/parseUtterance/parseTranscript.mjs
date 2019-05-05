import { groupLines } from '../utilities/index.mjs';

/**
 * Extracts, validates, and cleans the transcript lines from the lines hash
 * @param  {Object}        lines The lines hash
 * @return {String|Object}
 */
export default function parseTranscript(lines) {
  const data = groupLines(`trs`, lines);
  return data || null;
}
