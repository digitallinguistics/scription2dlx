/**
 * Removes leading/trailing brackets/symbols from a string
 * @param  {String} start The leading character to trim
 * @param  {String} end   The trailing character to trim
 * @param  {string} str   The string to trim
 * @return {string}       Returns the trimmed string
 */
export default function trimBrackets(start, end, str) {

  try {

    if (str.startsWith(start) && str.endsWith(end)) {
      return str.slice(1, str.length - 1).trim();
    }

    return str;

  } catch (e) {

    e.message = `[trimBrackets] ${e.message}`;
    throw e;

  }

}
