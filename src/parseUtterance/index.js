/* eslint-disable
  max-statements,
*/

import { mergeTranscriptions } from '../utilities/index.js';

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

/**
 * Parses an individual utterance as a string and returns it as a DLx Utterance object
 * @param  {String} rawLines  An array of utterance lines to parse
 * @param  {Array}  schema    An interlinear gloss schema, as an array of backslash codes (without leading slashes)
 * @param  {Object} codesHash The line codes to use for each line type
 * @param  {Object} [options] An options hash
 * @return {Object}           Returns a DLx Utterance object, or null if there is no data
 */
export default function parseUtterance(rawLines, schema, codesHash, { utteranceMetadata }) {

  try {

    const utterance = {};

    // metadata

    const hasMetadata = rawLines[0].startsWith(`#`);

    if (hasMetadata) {

      const rawMetadata = rawLines.shift();

      if (utteranceMetadata === true) {
        const metadata = parseMetadata(rawMetadata);
        if (metadata) utterance.metadata = metadata;
      }

    }

    // create lines hash

    const lines = rawLines.reduce((hash, line, i) => {

      // A regular exprssion to match line data (excluding leading backslash code)
      const lineDataRegExp = /^\\(?:(?:\w|-)+)(?<lineData>.*)$/u;

      const code  = schema[i] ?? `n-${i}`;
      const match = line.match(lineDataRegExp);
      const data  = (match ? match.groups.lineData : line).trim();

      hash[code] = data; // eslint-disable-line no-param-reassign

      return hash;

    }, {});

    // check for no data

    const noData = !Object.values(lines).every(Boolean);

    if (noData) return null;

    // process individual lines

    if (schema.includes(`sp`)) {
      utterance.speaker = parseSpeaker(lines[codesHash.sp]);
    }

    if (schema.includes(`trs`)) {
      utterance.transcript  = parseTranscript(codesHash.trs, lines);
    }

    utterance.transcription = parseTranscription(codesHash.txn, lines);

    if (schema.includes(`phon`)) {
      utterance.phonetic = parsePhonetic(lines[codesHash.phon]);
    }

    if (schema.includes(`lit`)) {
      utterance.literal = parseLiteral(codesHash.li, lines);
    }

    utterance.translation = parseTranslation(codesHash.tln, lines) || ``;

    if (schema.includes(`s`)) {
      utterance.source = parseSource(lines[codesHash.s]);
    }

    const words = parseWords(codesHash, lines);
    if (words.length) utterance.words = words;

    const notes = parseNotes(codesHash.n, lines);
    if (notes.length) utterance.notes = notes;

    const misc = parseMisc(codesHash, lines);
    Object.assign(utterance, misc);

    // construct transcription if not present

    if (!utterance.transcription) {
      const wordTranscriptions = utterance.words?.map(({ transcription: t }) => t) || [];
      utterance.transcription = mergeTranscriptions(wordTranscriptions, ` `);
    }

    return utterance;

  } catch (e) {

    const utteranceText = rawLines.join(`\n`);

    e.name    = `ParseUtterranceError`;
    e.message = `${e.message}\n\nUtterance text:\n\n${utteranceText}`;
    throw e;

  }

}
