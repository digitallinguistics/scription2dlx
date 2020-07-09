import {
  removeBrackets,
  removeEmphasis,
} from '../utilities/index.js';

/**
 * Cleans and validates the phonetic line
 * @param  {String} line The phonetic line
 * @return {String}
 */
export default function parsePhonetic(line) {
  if (!line) return;
  // removeBrackets accepts an abstract type, not a line code, as the first argument
  return removeBrackets(`phon`, removeEmphasis(line));
}
