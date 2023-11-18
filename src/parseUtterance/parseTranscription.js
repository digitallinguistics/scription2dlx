import {
  groupLines,
  removeBrackets,
  removeEmphasis,
} from '../utilities/index.js'

/**
 * Extracts, validates, and cleans the transcription lines from the lines hash
 * @param  {String}        lineCode    The code to use for transcription lines
 * @param  {Object}        lines       The lines hash
 * @param  {String}        orthography An abbreviation to use for the orthography if one is not specified
 * @return {String|Object}
 */
export default function parseTranscription(lineCode, lines, orthography) {

  let data = groupLines(lineCode, lines)

  if (!data) return null

  // NB: Do not use lineCode for removeBrackets here
  // removeBrackets takes an abstract type, not a line code, as its first argument
  data = removeEmphasis(data)
  data = removeBrackets(`txn`, data)

  if (typeof data === `string`) return { [orthography]: data }

  return data

}
