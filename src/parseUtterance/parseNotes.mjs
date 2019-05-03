import {
  getLineType,
  isValidTag,
} from '../utilities/index.mjs';

/**
 * Accepts the text of the note line, and returns a valid DLx Note object
 * @param  {String} data The text of the note line
 * @return {Object}      Returns a valid DLx Note object
 */
function parseNote(data) {

  try {

    const noteRegExp = /^\s*(?:(?<source>[^(\s]+)?\s*(?:\((?<language>.+)\))?\s*:\s+)?(?<text>.+)\s*$/u;

    const { language = `en`, source, text } = data.match(noteRegExp).groups;

    if (language && !isValidTag(language)) {
      throw new Error(`${language} is not a valid IETF language tag.`);
    }

    return {
      language,
      source,
      text,
    };

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
    .filter(([code]) => getLineType(code) === `n`);

    if (!noteLines.length) return [];

    return noteLines.map(([, data]) => parseNote(data));

  } catch (e) {

    e.message = `[parseNotes] ${e.message}`;
    throw e;

  }

}
