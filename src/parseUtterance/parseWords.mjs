import parseMorphemes from './parseMorphemes.mjs';
import {
  getLineType,
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
  return string
  .split(/\s+/gu)
  .map(str => str.trim());
}

/**
 * Checks that each line in the lines hash has the same number of words
 * @param {Object} lines The lines hash
 */
function validateNumWords(lines) {

  const wordLists = Object.values(lines);

  const numWords     = Math.max(...wordLists.map(w => w.length));
  const sameNumWords = wordLists.every(list => list.length === numWords);

  if (!sameNumWords) {
    throw new Error(`All morpheme and glosses lines must have the same number of words.`);
  }

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

    validateNumWords(wordLines);

    return zip(wordLines)
    .map(wordData => ({ morphemes: parseMorphemes(wordData) }));

  } catch (e) {

    e.message = `[parseWords] ${e.message}`;
    throw e;

  }

}
