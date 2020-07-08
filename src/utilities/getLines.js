import getLineType from './getLineType.js';

/**
 * Extracts the provided line types from a lines hash, and returns them in a new object
 * @param  {Array}  lines An array of line types to get
 * @return {Object}
 */
export default function getLines(types, lines) {

  const wordLineEntries = Object.entries(lines)
  .filter(([code]) => types.includes(getLineType(code)));

  if (!wordLineEntries.length) return null;

  return Object.fromEntries(wordLineEntries);

}
