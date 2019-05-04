/* eslint-disable
  max-statements,
*/

import parseCustom        from './parseCustom.mjs';
import parseLiteral       from './parseLiteral.mjs';
import parseNotes         from './parseNotes.mjs';
import parsePhonetic      from './parsePhonetic.mjs';
import parseSpeaker       from './parseSpeaker.mjs';
import parseTranscript    from './parseTranscript.mjs';
import parseTranscription from './parseTranscription.mjs';
import parseTranslation   from './parseTranslation.mjs';
import parseWords         from './parseWords.mjs';

import {
  getCode,
  getLineType,
  getSchema,
} from '../utilities/index.mjs';

const lineDataRegExp = /^\\(?:(?:\w|-)+)(?<lineData>.*)$/u;
const newlineRegExp  = /\r?\n/gu;

/**
 * Create a lines hash from an array of strings and an array of line codes
 * @param  {Array}  lines
 * @param  {Array}  schema
 * @return {Object}
 */
function createLinesHash(lines, schema) {
  return lines.reduce((hash, line, i) => {
    const code  = schema[i] || `n`; // treat extra lines as notes
    const match = line.match(lineDataRegExp);
    const data  = (match ? match.groups.lineData : line).trim();
    hash[code]  = data; // eslint-disable-line no-param-reassign
    return hash;
  });
}

/**
 * Adjust the codes at the beginning of each line to number the notes lines
 * @param  {Array<String>} lines An array of line strings
 * @return {Array<String>}
 */
function numberNotes(lines) {
  return lines.map((line, i) => {

    const code = getCode(line);
    const type = getLineType(code);

    if (type !== `n`) return line;

    return line.replace(/^n/u, `n-${i}`);

  });
}

/**
 * Parses an individual utterance as a string and returns it as a DLx Utterance object
 * @param  {String} utteranceString The utterance string to parse
 * @param  {Array}  schema          An interlinear gloss schema, as an array of backslash codes (without leading slashes)
 * @return {Object}                 Returns a DLx Utterance object, or null if there is no data
 */
export default function parseUtterance(utteranceString, schema) {

  try {

    let lines = utteranceString
    .split(newlineRegExp)
    .map(line => line.trim());

    const codes = lines.map(getCode).filter(Boolean);

    if (codes.length) schema = getSchema(utteranceString); // eslint-disable-line no-param-reassign

    lines           = numberNotes(lines);
    const linesHash = createLinesHash(lines, schema);
    const noData    = !Object.values(linesHash).every(Boolean);

    if (noData) return null;

    // Extract known utterance properties and populate the utterance

    const custom        = parseCustom(linesHash);
    const literal       = parseLiteral(linesHash);
    const notes         = parseNotes(linesHash);
    const phonetic      = parsePhonetic(linesHash.phon);
    const speaker       = parseSpeaker(linesHash.sp);
    const transcript    = parseTranscript(linesHash);
    const transcription = parseTranscription(linesHash) || ``;
    const translation   = parseTranslation(linesHash) || ``;
    const words         = parseWords(linesHash);

    return {
      ...custom,
      ...literal ? { literal } : {},
      ...notes.length ? { notes } : {},
      ...phonetic ? { phonetic } : {},
      ...speaker ? { speaker } : {},
      ...transcript ? { transcript } : {},
      transcription,
      translation,
      ...words.length ? { words } : {},
    };

  } catch (e) {

    e.name    = this.name;
    e.message = `${e.message}\n\nUtterance text:\n\n${utteranceString}`;
    throw e;

  }

}
