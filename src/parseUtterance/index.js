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

    // TODO: Is this the best way to do this? Can you do this inline?
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

    const lines = rawLines.reduce((hash, line, i) => {

      // A regular exprssion to match line data (excluding leading backslash code)
      const lineDataRegExp = /^\\(?:(?:\w|-)+)(?<lineData>.*)$/u;

      const code  = schema[i] || `n-${i}`; // treat extra lines as notes; index is removed later
      const match = line.match(lineDataRegExp);
      const data  = (match ? match.groups.lineData : line).trim();

      hash[code] = data; // eslint-disable-line no-param-reassign

      return hash;

    }, {});

    const noData = !Object.values(lines).every(Boolean);

    if (noData) return null;

    // Extract known utterance properties and populate the utterance

    const metadata    = parseMetadata(rawLines);
    const speaker     = parseSpeaker(lines[sp]);
    const transcript  = parseTranscript(trs, lines);
    let transcription = parseTranscription(txn, lines);
    const phonetic    = parsePhonetic(lines[phon]);
    const literal     = parseLiteral(lit, lines);
    const translation = parseTranslation(tln, lines) || ``;
    const source      = parseSource(lines[s]);
    const notes       = parseNotes(n, lines);
    const words       = parseWords(codesHash, lines);
    const misc        = parseMisc(codesHash, lines);

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

    const utteranceText = rawLines.join(`\n`);

    e.name    = `ParseUtterranceError`;
    e.message = `${e.message}\n\nUtterance text:\n\n${utteranceText}`;
    throw e;

  }

}
