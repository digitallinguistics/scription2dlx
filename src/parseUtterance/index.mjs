import parseCustom        from './parseCustom.mjs';
import parseLiteral       from './parseLiteral.mjs';
import parseNotes         from './parseNotes.mjs';
import parsePhonetic      from './parsePhonetic.mjs';
import parseSpeaker       from './parseSpeaker.mjs';
import parseTranscript    from './parseTranscript.mjs';
import parseTranscription from './parseTranscription.mjs';
import parseTranslation   from './parseTranslation.mjs';
import parseWords         from './parseWords.mjs';

const lineDataRegExp = /^\\(?:(?:\w|-)+)(?<lineData>.*)$/u;
const newlineRegExp  = /\r?\n/gu;

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
    .reduce((hash, line, i) => {

      const code  = schema[i] || `n`; // treat extra lines as notes
      const match = line.match(lineDataRegExp);
      const data  = (match ? match.groups.lineData : line).trim();

      hash[code] = data; // eslint-disable-line no-param-reassign
      return hash;

    }, {});

    // Return null if the utterance contains no data
    // Return null if the utterance contains no data

    const noData = !Object.values(lines).every(Boolean);
    if (noData) return null;

    // Extract known utterance properties and populate the utterance

    const custom        = parseCustom(lines);
    const literal       = parseLiteral(lines);
    const notes         = parseNotes(lines);
    const phonetic      = parsePhonetic(lines.phon);
    const speaker       = parseSpeaker(lines.sp);
    const transcript    = parseTranscript(lines);
    const transcription = parseTranscription(lines) || ``;
    const translation   = parseTranslation(lines) || ``;
    const words         = parseWords(lines);

    const utterance = {
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

    return utterance;

  } catch (e) {

    e.message = `[parseUtterance] ${e.message}\n\nUtterance text:\n\n${utteranceString}`;
    throw e;

  }

}
