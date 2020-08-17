import parseMorphemes from './parseMorphemes/index.js';
import { wordTypes }  from '../utilities/constants/index.js';
import { zip }        from '../utilities/js/index.js';

import {
  getLines,
  groupLines,
  removeEmphasis,
  validateNumItems,
} from '../utilities/index.js';

/**
 * Parses the word hash into a DLx Word object
 * @param  {Object} codes       The hash of line codes
 * @param  {Object} data        The word hash
 * @param  {String} orthography The orthography abbreviation to use if one is not specified
 * @return {Object}             Returns a DLx Word object
 */
function parseWord(codes, data, orthography) {

  data = removeEmphasis(data); // eslint-disable-line no-param-reassign

  let transcription = groupLines(codes.w, data) || ``;
  let analysis      = groupLines(codes.m, data);
  const gloss       = groupLines(codes.gl, data);
  const literal     = groupLines(codes.wlt, data);
  const morphemes   = parseMorphemes(codes, data, orthography);

  if (typeof transcription === `string`) transcription = { [orthography]: transcription };
  if (typeof analysis === `string`) analysis = { [orthography]: analysis };

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

  const wordRegExp = /(?<bracketed>\S*\[.*?\]\S*)|(?<unbracketed>\S+)/gu;

  return Array.from(string.matchAll(wordRegExp))
  .map(([result]) => result);

}

/**
 * Extracts word-specific lines from the lines hash and converts them into an array of DLx Word objects
 * @param  {Object} codes       The line codes hash
 * @param  {Object} lines       The lines hash
 * @param  {String} orthography The abbreviation to use for the orthography if one is not specified
 * @return {Array}              Returns an array of DLx Word objects
 */
export default function parseWords(codesHash, lines, orthography) {

  const wordLineCodes = wordTypes.map(type => codesHash[type]);
  const wordLines     = getLines(wordLineCodes, lines);

  if (!wordLines) return [];

  // tokenizes the words in each line
  const wordsHash = Object.entries(wordLines)
  .reduce((hash, [code, data]) => {
    hash[code] = tokenizeLine(data); // eslint-disable-line no-param-reassign
    return hash;
  }, {});

  validateNumItems(wordsHash);

  return zip(wordsHash)
  .map(wordData => parseWord(codesHash, wordData, orthography));

}
