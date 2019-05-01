import cleanLine from './cleanLine.mjs';
import getLine   from './getLine.mjs';
import getLines  from './getLines.mjs';
import getNotes  from './getNotes.mjs';
import types     from './types.json';

const lineDataRegExp = /^\\(?:(?:\w|-)+)(?<lineData>.*)$/u;
const newlineRegExp  = /\r?\n/gu;
const speakerRegExp  = /^[A-Za-z0-9]+$/u;

const singleLines = [
  `phon`,
  `sp`,
];

/**
 * Checks whether a value is defined
 * @param  {Any}     val The value to check
 * @return {Boolean}
 */
function isDefined(val) {
  return typeof val !== undefined; // eslint-disable-line no-undefined
}

/**
 * Checks whether a speaker abbreviation is validly formatted
 * @param  {Any}     speaker The speaker value to validate
 * @return {Boolean}
 */
function isValidSpeaker(speaker) {
  return speakerRegExp.test(speaker);
}

/**
 * Performs simple validation on some (but not all) properties of the utterance
 * @param  {Object} utterance The Utterance data to validate
 */
function validateUtterance({ speaker }) {

  try {

    if (isDefined(speaker)) {
      if (!isValidSpeaker(speaker)) {
        throw new Error(`${speaker} is not a valid value for the speaker line.`);
      }
    }

  } catch (e) {

    throw new Error(`[validateUtterance] Error validating utterance data: ${e.message}`);

  }

}

/**
 * Parses an individual utterance as a string and returns it as a DLx Utterance object
 * @param  {String} utteranceString The utterance string to parse
 * @param  {Array}  schema          An interlinear gloss schema, as an array of backslash codes (without leading slashes)
 * @return {Object}                 Returns a DLx Utterance object, or null if there is no data
 */
export default function parseUtterance(utteranceString, schema) {

  try {

    // Create an arry of line objects with information about each line

    const lines = utteranceString
    .split(newlineRegExp)
    .map(line => line.trim())
    .map((line, i) => {

      const code   = schema[i] || `n`; // treat extra lines as notes
      const [type] = code.split(`-`, 1);
      const match  = line.match(lineDataRegExp);
      let data     = (match ? match.groups.lineData : line).trim();
      data         = cleanLine(type, data);

      return { code, data, type };

    });

    // Return null if the utterance contains no data

    const noData = lines.every(({ data }) => data === ``);
    if (noData) return null;

    // Extract known utterance properties and populate the utterance

    const literal       = getLines(`lit`, lines);
    const notes         = getNotes(lines);
    const phonetic      = getLine(`phon`, lines);
    const speaker       = getLine(`sp`, lines);
    const transcript    = getLines(`trs`, lines);
    const transcription = getLines(`txn`, lines) || ``;
    const translation   = getLines(`tln`, lines) || ``;

    const utterance = {
      ...literal ? { literal } : {},
      ...notes.length ? { notes } : {},
      ...phonetic ? { phonetic } : {},
      ...speaker ? { speaker } : {},
      ...transcript ? { transcript } : {},
      transcription,
      translation,
    };

    // Add remaining (custom) lines to utterance

    lines.forEach(({ code, data, type }) => {

      const isCustomType = !types.includes(type);
      if (isCustomType) utterance[type] = getLines(type, lines);

      const isCustomCode = singleLines.includes(type) && code.startsWith(`${type}-`);
      if (isCustomCode) utterance[code] = data;

    });

    validateUtterance(utterance);

    return utterance;

  } catch (e) {

    e.message = `[parseUtterance] ${e.message}\n\nUtterance text:\n\n${utteranceString}`;
    throw e;

  }

}
