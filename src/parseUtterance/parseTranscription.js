import groupLines     from '../utilities/groupLines.js'
import removeBrackets from '../utilities/removeBrackets.js'
import removeEmphasis from '../utilities/removeEmphasis.js'

/**
 * Extracts, validates, and cleans the transcription lines from the lines hash
 * @param  {String}        lineCode            The code to use for transcription lines
 * @param  {Object}        lines               The lines hash
 * @param  {Object}        options             The options hash
 * @param  {String}        options.orthography An abbreviation to use for the orthography if one is not specified
 * @return {String|Object}
 */
export default function parseTranscription(lineCode, lines, options) {

  let data = groupLines(lineCode, lines)

  if (!data) return null

  // NB: Do not use lineCode for removeBrackets here
  // removeBrackets takes an abstract type, not a line code, as its first argument
  if (options.emphasis === false) data = removeEmphasis(data)
  data = removeBrackets(`txn`, data)

  if (typeof data === `string`) return { [options.orthography]: data }

  return data

}
