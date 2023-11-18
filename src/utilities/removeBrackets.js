import { brackets as bracketTypes } from './constants/index.js'
import { isString }                 from './types/index.js'

/**
 * Removes leading/trailing brackets/symbols from a string
 * @param  {String} start The leading character to trim
 * @param  {String} end   The trailing character to trim
 * @param  {string} str   The string to trim
 * @return {string}       Returns the trimmed string
 */
function trimBrackets(start, end, str) {

  if (str.startsWith(start) && str.endsWith(end)) {
    return str.slice(1, str.length - 1).trim()
  }

  return str

}

/**
 * Cleans the brackets / slashes from various data types
 * @param  {String}        type The type of data that's being cleaned
 * @param  {String|Object} data The data to clean
 * @return {String|Object}
 */
export default function removeBrackets(type, data) {

  if (type === `tln`) return removeBrackets(`tlnCurly`, removeBrackets(`tlnStraight`, data))

  const brackets = bracketTypes[type]

  if (isString(data)) return trimBrackets(...brackets, data)

  const trimmedEntries = Object.entries(data)
  .map(([lang, text]) => [lang, trimBrackets(...brackets, text)])

  return Object.fromEntries(trimmedEntries)

}
