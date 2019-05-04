import {
  getLineType,
} from '../utilities/index.mjs';

/**
 * Accepts the text of the note line, and returns a valid DLx Note object
 * @param  {String} data The text of the note line
 * @return {Object}      Returns a valid DLx Note object
 */
function parseNote({ code, data: text }) {

  const source   = text.split(`:`, 1);
  const language = code.split(`-`, 1)[1] || `en`;

  return {
    language,
    source,
    text,
  };

}

/**
 * Accepts the lines hash and returns an array of DLx Note objects
 * @param  {Object} lines The lines hash
 * @return {Array}        Returns the "notes" property of the utterance (or null)
 */
export default function parseNotes(lines) {

  const numberedRegExp = /n-[0-9]/u;

  const noteLines = Object.entries(lines)
  .filter(([code]) => getLineType(code) === `n`)
  .map(([code, data]) => [code.replace(numberedRegExp, `n`), data]);

  if (!noteLines.length) return [];

  return noteLines.map(parseNote);

}
