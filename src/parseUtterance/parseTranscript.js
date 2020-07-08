import { groupLines } from '../utilities/index.js';

/**
 * Extracts, validates, and cleans the transcript lines from the lines hash
 * @param  {String}        lineCode The line code for the transcript lines
 * @param  {Object}        lines    The lines hash
 * @return {String|Object}
 */
export default function parseTranscript(lineCode, lines) {
  const data = groupLines(lineCode, lines);
  return data || null;
}
