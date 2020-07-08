/* eslint-disable
  max-statements,
*/

import { newlineRegExp } from '../utilities/regexp/index.js';

import parseLiteral       from './parseLiteral.js';
import parseMetadata      from './parseMetadata.js';
import parseMisc          from './parseMisc.js';
import parseNotes         from './parseNotes.js';
import parsePhonetic      from './parsePhonetic.js';
import parseSource        from './parseSource.js';
import parseSpeaker       from './parseSpeaker.js';
import parseTranscript    from './parseTranscript.js';
import parseTranscription from './parseTranscription.js';
import parseTranslation   from './parseTranslation.js';
import parseWords         from './parseWords.js';

import {
  getCode,
  getSchema,
  mergeTranscriptions,
} from '../utilities/index.js';

/**
 * A regular expression to match the line data (excludes the leading backslash code)
 * @type {RegExp}
 */
const lineDataRegExp = /^\\(?:(?:\w|-)+)(?<lineData>.*)$/u;

/**
 * Create a lines hash from an array of strings and an array of line codes
 * @param  {Array}  lines
 * @param  {Array}  schema
 * @return {Object}
 */
function createLinesHash(lines, schema) {
  return lines.reduce((hash, line, i) => {

    const code  = schema[i] || `n-${i}`; // treat extra lines as notes
    const match = line.match(lineDataRegExp);
    const data  = (match ? match.groups.lineData : line).trim();

    hash[code] = data; // eslint-disable-line no-param-reassign

    return hash;

  }, {});
}

/**
 * Parses an individual utterance as a string and returns it as a DLx Utterance object
 * @param  {String} utteranceString The utterance string to parse
 * @param  {Array}  schema          An interlinear gloss schema, as an array of backslash codes (without leading slashes)
 * @param  {Object} codesHash       The line codes to use for each line type
 * @param  {Object} [options]       An options hash
 * @return {Object}                 Returns a DLx Utterance object, or null if there is no data
 */
export default function parseUtterance(utteranceString, schema, codesHash, { utteranceMetadata }) {

  try {

    const {
      lit,
      n,
      phon,
      tln,
      trs,
      txn,
      s,
      sp,
    } = codesHash;

    const rawLines = utteranceString
    .split(newlineRegExp)
    .map(line => line.trim());

    const lines = rawLines.filter(line => !line.startsWith(`#`));
    const codes = lines.map(getCode).filter(Boolean);

    if (codes.length) schema = getSchema(utteranceString); // eslint-disable-line no-param-reassign

    const linesHash = createLinesHash(lines, schema);
    const noData    = !Object.values(linesHash).every(Boolean);

    if (noData) return null;

    // Extract known utterance properties and populate the utterance

    const metadata    = parseMetadata(rawLines);
    const speaker     = parseSpeaker(linesHash[sp]);
    const transcript  = parseTranscript(trs, linesHash);
    let transcription = parseTranscription(txn, linesHash);
    const phonetic    = parsePhonetic(linesHash[phon]);
    const literal     = parseLiteral(lit, linesHash);
    const translation = parseTranslation(tln, linesHash) || ``;
    const source      = parseSource(linesHash[s]);
    const notes       = parseNotes(n, linesHash);
    const words       = parseWords(codesHash, linesHash);
    const misc        = parseMisc(codesHash, linesHash);

    if (!transcription) {
      const wordTranscriptions = words.map(({ transcription: t }) => t);
      transcription = mergeTranscriptions(wordTranscriptions, ` `) || ``;
    }

    return {
      ...utteranceMetadata && metadata ? { metadata } : {},
      ...speaker ? { speaker } : {},
      ...transcript ? { transcript } : {},
      transcription,
      ...phonetic ? { phonetic } : {},
      ...literal ? { literal } : {},
      translation,
      ...source ? { source } : {},
      ...notes.length ? { notes } : {},
      ...words.length ? { words } : {},
      ...misc,
    };

  } catch (e) {

    const utteranceText = utteranceString
    .split(newlineRegExp)
    .map(str => str.trim())
    .join(`\n`);

    e.name    = `ParseUtterranceError`;
    e.message = `${e.message}\n\nUtterance text:\n\n${utteranceText}`;
    throw e;

  }

}
