import parseMorphemes from './parseMorphemes.mjs';

import {
  getLineType,
  getMatches,
  groupLines,
  validateNumItems,
  zip,
} from '../utilities/index.mjs';

/**
 * Extracts any morpheme and gloss lines from the lines array
 * @param  {Array} lines The array of line objects
 * @return {Array}
 */
function getWordLines(lines) {

  const lineEntries = Object.entries(lines)
  .filter(([code]) => {
    const type = getLineType(code);
    return type === `m` || type === `gl`;
  })
  .map(([code, data]) => [code, tokenizeLine(data)]);

  return Object.fromEntries(lineEntries);

}

/**
 * Tokenizes the string on white space, returning an array of word tokens
 * @param  {String} string The string to tokenize
 * @return {Array}         Returns an array of word tokens
 */
function tokenizeLine(string) {

  const regExp = /\[(?<bracketed>[^[\u005d]*)\u005d|(?<unbracketed>[^\s]+)/gu;

  return getMatches(regExp, string)
  .map(({ bracketed, unbracketed }) => bracketed || unbracketed);

}

/**
 * Extracts the morphemes and glosses lines from the lines hash and converts them into an array of DLx Word objects
 * @param  {Object} lines The lines hash
 * @return {Array}        Returns an array of DLx Word objects
 */
export default function parseWords(lines) {

  try {

    const wordLines = getWordLines(lines);

    if (!Object.keys(wordLines).length) return [];

    validateNumItems(wordLines);

    return zip(wordLines)
    .map(wordData => {

      const hasSpaces = Object.values(wordData).some(str => /\s/gu.test(str));

      if (hasSpaces) {
        return {
          gloss:         groupLines(`gl`, wordData),
          transcription: groupLines(`m`, wordData),
        };
      }

      return { morphemes: parseMorphemes(wordData) };

    });

  } catch (e) {

    e.message = `[parseWords] ${e.message}`;
    throw e;

  }

}
