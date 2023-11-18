import groupLines from '../utilities/groupLines.js'

/**
 * Extracts, validates, and cleans the transcript lines from the lines hash
 * @param  {String}        lineCode            The line code for the transcript lines
 * @param  {Object}        lines               The lines hash
 * @param  {Object}        options             The options hash
 * @param  {String}        options.orthography The abbreviation to use for the transcript orthography if none is present
 * @return {String|Object}
 */
export default function parseTranscript(lineCode, lines, options) {

  const data = groupLines(lineCode, lines)

  if (typeof data === `string`) return { [options.orthography]: data }

  return data || null

}
