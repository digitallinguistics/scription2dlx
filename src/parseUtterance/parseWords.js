import getLines         from '../utilities/getLines.js'
import groupLines       from '../utilities/groupLines.js'
import parseMorphemes   from './parseMorphemes/index.js'
import removeBrackets   from '../utilities/removeBrackets.js'
import removeEmphasis   from '../utilities/removeEmphasis.js'
import validateNumItems from '../utilities/validateNumItems.js'
import { wordTypes }    from '../utilities/constants/index.js'
import zip              from '../utilities/js/zip.js'

/**
 * Parses the word hash into a DLx Word object
 * @param  {Object}  codes               The hash of line codes
 * @param  {Object}  data                The word hash
 * @param  {Object}  options             The options hash
 * @param  {Boolean} options.emphasis    Whether to retain empahsis in the output
 * @param  {String}  options.orthography The orthography abbreviation to use if one is not specified
 * @return {Object}                      Returns a DLx Word object
 */
function parseWord(codes, data, options) {

  if (options.emphasis === false) data = removeEmphasis(data) // eslint-disable-line no-param-reassign

  let transcription = groupLines(codes.w, data) || ``
  let analysis      = groupLines(codes.m, data)
  const gloss       = groupLines(codes.gl, data)
  const literal     = groupLines(codes.wlt, data)
  const morphemes   = parseMorphemes(codes, data, options)

  if (typeof transcription === `string`) transcription = { [options.orthography]: transcription }
  if (typeof analysis === `string`) analysis = { [options.orthography]: analysis }

  return {
    transcription,
    ...analysis ? { analysis } : {},
    ...gloss ? { gloss } : {},
    ...literal ? { literal } : {},
    ...morphemes.length ? { morphemes } : {},
  }

}

/**
 * Tokenizes the string on white space, returning an array of word tokens
 * @param  {String} string The string to tokenize
 * @return {Array}         Returns an array of word tokens
 */
function tokenizeLine(string) {

  const wordRegExp = /(?<bracketed>\S*\[.*?\]\S*)|(?<unbracketed>\S+)/gu

  return Array.from(string.matchAll(wordRegExp))
  .map(([result]) => result)

}

/**
 * Extracts word-specific lines from the lines hash and converts them into an array of DLx Word objects
 * @param  {Object} codes               The line codes hash
 * @param  {Object} lines               The lines hash
 * @param  {Object} options             The options hash
 * @param  {String} options.orthography The abbreviation to use for the orthography if one is not specified
 * @return {Array}                      Returns an array of DLx Word objects
 */
export default function parseWords(codesHash, lines, options) {

  const wordLineCodes = wordTypes.map(type => codesHash[type])
  const wordLines     = getLines(wordLineCodes, lines)

  if (!wordLines) return []

  // tokenizes the words in each line
  const wordsHash = Object.entries(wordLines)
  .reduce((hash, [code, data]) => {
    hash[code] = tokenizeLine(data)
    return hash
  }, {})

  validateNumItems(wordsHash)

  const wordsData = zip(wordsHash)
  const words     = wordsData.map(data => parseWord(codesHash, data, options))

  for (const word of words) {
    word.analysis &&= removeBrackets(`grouping`, word.analysis)
    word.gloss    &&= removeBrackets(`grouping`, word.gloss)
  }

  return words

}
