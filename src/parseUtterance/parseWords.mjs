import parseMorphemes from './parseMorphemes/index.mjs';

import {
  getLines,
  getMatches,
  groupLines,
  validateNumItems,
  zip,
} from '../utilities/index.mjs';

/**
 * Takes the words line hash and tokenizes the data on each line
 * @param  {Object} wordLines A hash of raw word lines
 * @return {Object}           Returns a hash with the lines tokenized
 */
function getWordsHash(wordLines) {
  return Object.entries(wordLines)
  .reduce((hash, [code, data]) => {
    hash[code] = tokenizeLine(data); // eslint-disable-line no-param-reassign
    return hash;
  }, {});
}

/**
 * Parses the word hash into a DLx Word object
 * @param  {Object} data The word hash
 * @return {Object}      Returns a DLx Word object
 */
function parseWord(data) {

  const transcription = groupLines(`w`, data) || ``;
  const analysis      = groupLines(`m`, data);
  const gloss         = groupLines(`gl`, data);
  const literal       = groupLines(`wlt`, data);
  const morphemes     = parseMorphemes(getLines([`gl`, `m`], data));

  return {
    transcription,
    ...analysis ? { analysis } : {},
    ...gloss ? { gloss } : {},
    ...literal ? { literal } : {},
    ...morphemes.length ? { morphemes } : {},
  };

}

/**
 * Tokenizes the string on white space, returning an array of word tokens
 * @param  {String} string The string to tokenize
 * @return {Array}         Returns an array of word tokens
 */
function tokenizeLine(string) {

  // NOTE: Leave these here for debugging and development
  // const bracketsRegExp = /(?<bracketed>\[.*?\])/gu;
  // const wordsRegExp    = /(?<unbracketed>[^\s]+)/gu;

  const wordRegExp = /(?<bracketed>\[.*?\])|(?<unbracketed>[^\s]+)/gu;

  return getMatches(wordRegExp, string)
  .map(({ bracketed, unbracketed }) => bracketed || unbracketed);

}

/**
 * Extracts word-specific lines from the lines hash and converts them into an array of DLx Word objects
 * @param  {Object} lines The lines hash
 * @return {Array}        Returns an array of DLx Word objects
 */
export default function parseWords(lines) {

  if (!Object.keys(lines).length) return [];

  const wordsHash = getWordsHash(lines);

  validateNumItems(wordsHash);

  return zip(wordsHash)
  .map(parseWord);

}
