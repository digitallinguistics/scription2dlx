/* eslint-disable
  no-param-reassign,
*/

const bracketTypes = {
  lit:  [`[`, `]`],
  phon: [`[`, `]`],
  txn:  [`/`, `/`],
};

/**
 * Removes leading/trailing brackets/symbols from a string
 * @param  {String} start The leading character to trim
 * @param  {String} end   The trailing character to trim
 * @param  {string} str   The string to trim
 * @return {string}       Returns the trimmed string
 */
function trimBrackets(start, end, str) {

  if (str.startsWith(start) && str.endsWith(end)) {
    return str.slice(1, str.length - 1).trim();
  }

  return str;

}

/**
 * Cleans the brackets / slashes from various data types
 * @param  {String}        type The type of data that's being cleaned
 * @param  {String|Object} data The data to clean
 * @return {String|Object}
 */
export default function cleanBrackets(type, data) {

  try {

    const brackets = bracketTypes[type];

    if (typeof data === `string`) return trimBrackets(...brackets, data);

    const trimmedEntries = Object.entries(data)
    .map(([lang, text]) => [lang, trimBrackets(...brackets, text)]);

    return Object.fromEntries(trimmedEntries);

  } catch (e) {

    e.message = `[cleanBrackets] ${e.message}`;
    throw e;

  }

}
