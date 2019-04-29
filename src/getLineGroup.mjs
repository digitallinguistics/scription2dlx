/**
 * Extracts all the lines of the provided type from the lines Map, and returns them as a string or object as appropriate. Mutates the original Map by deleting each line when finished.
 * @param  {String}        code           The code for the line type to extract
 * @param  {Map}           utteranceLines A Map of lines in the utterance
 * @return {String|Object}
 */
export default function getLineGroup(type, utteranceLines) {

  try {

    const typedLines = Array.from(utteranceLines.keys())
    .filter(code => code.startsWith(type));

    if (!typedLines.length) return; // return undefined

    if (typedLines.length === 1 && typedLines[0] === type) {

      const data = utteranceLines.get(type);
      utteranceLines.delete(type);
      return data;

    }

    return typedLines.reduce((hash, code) => {
      const data    = utteranceLines.get(code);
      const subtype = code.replace(`${type}-`, ``);
      hash[subtype] = data; // eslint-disable-line no-param-reassign
      utteranceLines.delete(code);
      return hash;
    }, {});

  } catch (e) {

    e.message = `[getLineGroup] ${e.message}\n\n${utteranceLines}`;

  }

}
