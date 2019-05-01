/**
 * Extracts all the lines of the provided type from the lines Map, and returns them as a string or object as appropriate. Mutates the original Map by deleting each line when finished.
 * @param  {String}        lineType       The code for the line type to extract
 * @param  {Array}         utteranceLines An array of line objects
 * @return {String|Object}
 */
export default function getLines(lineType, utteranceLines) {

  try {

    const typedLines = utteranceLines.filter(({ type }) => type === lineType);

    if (!typedLines.length) return null;

    // If only one line is provided, and the line has no language / orthography specified, return the raw string

    if (typedLines.length === 1 && typedLines[0].code === lineType) {
      return typedLines[0].data;
    }

    // Otherwise return an object of languages / orthographies

    return typedLines.reduce((hash, { code, data, type }) => {
      const subtype = code.replace(`${type}-`, ``);
      hash[subtype] = data; // eslint-disable-line no-param-reassign
      return hash;
    }, {});

  } catch (e) {

    e.message = `[getLineGroup] ${e.message}\n\n${utteranceLines}`;

  }

}
