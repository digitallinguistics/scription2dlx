import parseMorphemes from './parseMorphemes/index.js';
import { wordTypes }  from '../utilities/constants/index.js';
import { zip }        from '../utilities/js/index.js';

import {
  getLines,
  getMatches,
  groupLines,
  removeEmphasis,
  validateNumItems,
} from '../utilities/index.js';

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
 * @param  {Object} codes The hash of line codes
 * @param  {Object} data  The word hash
 * @return {Object}       Returns a DLx Word object
 */
function parseWord(codes, data) {

  const {
    gl,
    m,
    w,
    wlt,
  } = codes;

  data = removeEmphasis(data); // eslint-disable-line no-param-reassign

  const transcription = groupLines(w, data) || ``;
  const analysis      = groupLines(m, data);
  const gloss         = groupLines(gl, data);
  const literal       = groupLines(wlt, data);
  const morphemes     = parseMorphemes(codes, data);

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

  // NOTE: Using the unicode escape \u005D is necessary for Babel to transpile the regexp correctly
  const wordRegExp = /(?<bracketed>\[.*?\u005D)|(?<unbracketed>[^\s]+)/gu;

  return getMatches(wordRegExp, string)
  .map(({ bracketed, unbracketed }) => bracketed || unbracketed);

}

/**
 * Extracts word-specific lines from the lines hash and converts them into an array of DLx Word objects
 * @param  {Object} codes The line codes hash
 * @param  {Object} lines The lines hash
 * @return {Array}        Returns an array of DLx Word objects
 */
export default function parseWords(codesHash, lines) {

  const wordLineCodes = wordTypes.map(type => codesHash[type]);

  const wordLines = getLines(wordLineCodes, lines);

  if (!wordLines) return [];

  const wordsHash = getWordsHash(wordLines);

  validateNumItems(wordsHash);

  return zip(wordsHash)
  .map(wordData => parseWord(codesHash, wordData));

}
