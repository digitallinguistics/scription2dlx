import getLines from './getLines.js'

/**
 * Takes a hash of line codes and their data and groups lines of a certain type
 * @param  {String} type      The line type to group
 * @param  {Object} linesHash The hash of lines
 * @return {Object}
 */
export default function groupLines(type, linesHash) {

  const typedLines = getLines([type], linesHash)

  if (!typedLines) return null

  const codes    = Object.keys(typedLines)
  const isString = codes.length === 1 && codes[0] === type

  if (isString) return linesHash[type]

  return Object.entries(typedLines)
  .reduce((hash, [code, data]) => {
    const subtype = code.replace(`${ type }-`, ``)
    hash[subtype] = data  
    return hash
  }, {})

}
