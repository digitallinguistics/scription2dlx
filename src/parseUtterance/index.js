/* eslint-disable
  max-statements,
*/

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
  getLineType,
  mergeTranscriptions,
} from '../utilities/index.js';

/**
 * Parses an individual utterance as a string and returns it as a DLx Utterance object
 * @param  {String} rawLines  An array of utterance lines to parse
 * @param  {Array}  schema    An interlinear gloss schema, as an array of backslash codes (without leading slashes)
 * @param  {Object} codesHash The line codes to use for each line type
 * @param  {Object} options   The options hash
 * @return {Object}           Returns a DLx Utterance object, or null if there is no data
 */
export default function parseUtterance(rawLines, schema, codesHash, options) {

  const { alignmentError, utteranceMetadata } = options;
  const utterance = {};

  try {

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

    const types = schema.map(getLineType);

    if (types.includes(`sp`)) {
      utterance.speaker = parseSpeaker(lines[codesHash.sp]);
    }

    if (types.includes(`trs`)) {
      utterance.transcript  = parseTranscript(codesHash.trs, lines);
    }

    utterance.transcription = parseTranscription(codesHash.txn, lines);

    if (types.includes(`phon`)) {
      utterance.phonetic = parsePhonetic(lines[codesHash.phon]);
    }

    if (types.includes(`lit`)) {
      utterance.literal = parseLiteral(codesHash.lit, lines);
    }

    utterance.translation = parseTranslation(codesHash.tln, lines) || ``;

    if (types.includes(`s`)) {
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

    if (e.name === `AlignmentError`) {

      if (alignmentError === false) return;

      if (alignmentError === `warn`) {
        return console.warn(`${e.message} Skipping the following utterance:\n\n${utteranceText}`);
      }

    }

    e.name    = `ParseUtterranceError`;
    e.message = `${e.message}\n\nUtterance text:\n\n${utteranceText}`;
    throw e;

  }

}
