import groupLines     from '../utilities/groupLines.js'
import removeBrackets from '../utilities/removeBrackets.js'
import removeEmphasis from '../utilities/removeEmphasis.js'

/**
 * Extracts, validates, and cleans the translation lines from the lines hash
 * @param  {String}        lineCode         The line code to use for translations lines
 * @param  {Object}        lines            The lines hash
 * @param  {Object}        options          The options hash
 * @param  {Boolean}       options.emphasis Whether to retain emphasis in the output
 * @return {String|Object}
 */
export default function parseTranslation(lineCode, lines, options) {
  let data = groupLines(lineCode, lines)
  if (!data) return null
  if (options.emphasis === false) data = removeEmphasis(data)
  // NB: removeBrackets accepts an abstract line type, not a specific line code
  // as its first argument
  data = removeBrackets(`tln`, data)
  return data
}
