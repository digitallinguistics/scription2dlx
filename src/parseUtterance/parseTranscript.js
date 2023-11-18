import { groupLines } from '../utilities/index.js'

/**
 * Extracts, validates, and cleans the transcript lines from the lines hash
 * @param  {String}        lineCode    The line code for the transcript lines
 * @param  {Object}        lines       The lines hash
 * @param  {String}        orthography The abbreviation to use for the transcript orthography if none is present
 * @return {String|Object}
 */
export default function parseTranscript(lineCode, lines, orthography) {

  const data = groupLines(lineCode, lines)

  if (typeof data === `string`) return { [orthography]: data }

  return data || null

}
