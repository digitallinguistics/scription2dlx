/**
 * Accepts the text of the note line, and returns a valid DLx Note object
 * @param  {String} data The text of the note line
 * @return {Object}      Returns a valid DLx Note object
 */
function parseNote(data) {

  try {

    const noteRegExp     = /^(?:\s*(?<meta>.+)\s*:)?\s*(?<text>.+)\s*$/u;
    const { meta, text } = noteRegExp.exec(data).groups;

    return { text };

  } catch (e) {

    e.message = `Error parsing note line: ${e.message}\n\nNote line data: ${data}`;
    throw e;

  }

}

/**
 * Accepts the lines hash and returns an array of DLx Note objects
 * @param  {Object} lines The lines hash
 * @return {Array}        Returns the "notes" property of the utterance (or null)
 */
export default function parseNotes(lines) {

  try {

    const noteLines = Object.entries(lines)
    .filter(([code]) => code === `n`);

    if (!noteLines.length) return [];

    return noteLines.map(([, data]) => parseNote(data));

  } catch (e) {

    e.message = `[parseNotes] ${e.message}`;
    throw e;

  }

}
