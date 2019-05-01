const lineBrackets = {
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
 * Cleans the data in an utterance line of the specified type
 * @param  {String} code The code for the line type to clean
 * @param  {String} line The line data (excluding backslash codes)
 * @return {String}
 */
export default function cleanLine(type, line) {

  if (Object.keys(lineBrackets).includes(type)) {
    return trimBrackets(...lineBrackets[type], line);
  }

  return line;

}
