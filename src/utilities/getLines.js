import getLineType from './getLineType.js';

/**
 * Extracts all lines of the provided types from a lines hash, and returns them in a new object
 * @param  {Array}  lines An array of line types to get
 * @return {Object}
 */
export default function getLines(types, lines) {

  const entries = Object.entries(lines)
  .filter(([code]) => types.includes(getLineType(code)));

  if (!entries.length) return null;

  return Object.fromEntries(entries);

}
