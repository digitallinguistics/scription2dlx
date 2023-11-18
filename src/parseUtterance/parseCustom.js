import { getLineType } from '../utilities/index.js'

/**
 * Extracts any unspecified lines from the lines hash and returns them in an object
 * @param  {Object} customCodes A hash of scription codes => custom codes
 * @param  {Object} lines       The lines hash
 * @return {Object}
 */
export default function parseCustom(codesHash, lines) {
  return Object.entries(lines)
  .filter(([code]) => !code.startsWith(`n-`))
  .reduce((hash, [code, line]) => {
    const type = getLineType(code)
    if (type in codesHash) return hash
    hash[code] = line
    return hash
  }, {})
}
