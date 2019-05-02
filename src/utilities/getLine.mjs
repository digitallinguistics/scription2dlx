/**
 * Gets data for a line that only allows one language / orthography
 * @param  {String} type  The line type to get
 * @param  {Array}  lines The array of line objects
 * @return {String}
 */
export default function getLine(type, lines) {
  try {

    const line = lines.find(({ code }) => code === type) || {};
    return line.data;

  } catch (e) {

    e.message = `[getLine] ${e.message}`;
    throw e;

  }
}
