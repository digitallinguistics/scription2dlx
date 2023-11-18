import groupLines     from '../utilities/groupLines.js'
import removeBrackets from '../utilities/removeBrackets.js'
import removeEmphasis from '../utilities/removeEmphasis.js'

/**
 * Parses, validates, and cleans the literal translation lines
 * @param  {String}        lineCode The line code to use for literal lines
 * @param  {Object}        lines    The lines hash
 * @return {String|Object}
 */
export default function parseLiteral(lineCode, lines) {
  let data = groupLines(lineCode, lines)
  if (!data) return null
  data = removeEmphasis(data)
  // NB: Do not use the lineCode variable as the first argument to removeBrackets
  // removeBrackets accept an abstract type, not a line code, as its first argument.
  // Use both `lit` and `tln` to remove square brackets and multiple types of single quotes
  data = removeBrackets(`lit`, data)
  data = removeBrackets(`tln`, data)
  return data
}
