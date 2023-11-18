import { getSchema }  from './utilities/index.js'
import parseUtterance from './parseUtterance/index.js'

function splitUtterance(rawUtterance) {
  return rawUtterance
  .split(/\r?\n/gu) // newline regexp
  .map(line => line.trim())
}

/**
 * Isolates the utterances in a scription text string and returns them as an array of DLx Utterance objects
 * @param  {String} scription The scription text
 * @param  {Object} codes     A hash of codes to use for line types
 * @param  {Object} [options] An options hash
 * @return {Array}
 */
export default function parseUtterances(scription, codes, options) {

  const utterancesString = scription
  .split(/---/gsu)
  .map(part => part.trim())
  .pop()

  if (!utterancesString) return []

  const blankLinesRegExp = /(?:[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*\r?\n){2,}/gsu

  const utterances = utterancesString
  .split(blankLinesRegExp)
  .map(splitUtterance)

  const textSchema = getSchema(utterances[0])

  const parse = utterance => {

    // NOTE: This isn't a precise check, but this is fine because
    // the only consequence is that getSchema() is called unnecessarily below
    const hasOwnSchema = utterance
    .filter(line => !line.startsWith(`\\n`))
    .some(line => line.startsWith(`\\`))

    const utteranceSchema = hasOwnSchema ? getSchema(utterance) : textSchema

    return parseUtterance(utterance, utteranceSchema, codes, options)

  }

  return utterances
  .map(parse)
  .filter(Boolean)

}
