import { cleanBrackets } from '../utilities/index.mjs';

/**
 * Cleans and validates the phonetic line
 * @param  {String} line The phonetic line
 * @return {String}
 */
export default function parsePhonetic(line) {
  if (!line) return null;
  // NB: Do not use the lineCode variable here:
  // cleanBrackets accepts an abstract type, not a line code, as the first argument
  return cleanBrackets(`phon`, line);
}
