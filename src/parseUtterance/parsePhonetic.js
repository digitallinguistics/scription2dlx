import removeBrackets from '../utilities/removeBrackets.js'
import removeEmphasis from '../utilities/removeEmphasis.js'

/**
 * Cleans and validates the phonetic line
 * @param  {String}  line             The phonetic line
 * @param  {Object}  options          The options hash
 * @param  {Boolean} options.emphasis Whether to retain emphasis in the output
 * @return {String}
 */
export default function parsePhonetic(line, options) {
  if (!line) return null
  // NB: Do not use the lineCode variable as the first argument to removeBrackets
  // removeBrackets accept an abstract type, not a line code, as its first argument
  if (options.emphasis === false) line = removeEmphasis(line)
  return removeBrackets(`phon`, line)
}
