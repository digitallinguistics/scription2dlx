import cleanLine    from './cleanLine.mjs';
import getLine      from './getLine.mjs';
import getLineGroup from './getLineGroup.mjs';

const lineDataRegExp = /^\\(?:(?:\w|-)+)(?<lineData>.*)$/u;
const newlineRegExp  = /\r?\n/gu;
const speakerRegExp  = /^[A-Za-z0-9]+$/u;

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
 * Reducer that creates a hash of backslash codes and their data
 * @return {Object}
 */
function zipLines(map, [code, line]) {
  const match = line.match(lineDataRegExp);
  let data  = (match ? match.groups.lineData : line).trim();
  data      = cleanLine(code, data);
  map.set(code, data);
  return map;
}

/**
 * Parses an individual utterance as a string and returns it as a DLx Utterance object
 * @param  {String} utteranceString The utterance string to parse
 * @param  {Array}  schema          An interlinear gloss schema, as an array of backslash codes (without leading slashes)
 * @return {Object}                 Returns a DLx Utterance object, or null if there is no data
 */
export default function parseUtterance(utteranceString, schema) {

  try {

    // Create a Map of lines and their backslash codes

    const lines = utteranceString
    .split(newlineRegExp)
    .map(line => line.trim())
    .map((line, i) => [schema[i], line])
    .reduce(zipLines, new Map);

    // Return null if the utterance contains no data

    const linesData = Array.from(lines.values());
    const noData    = linesData.every(line => line === ``);

    if (noData) return null;

    // Extract known utterance properties and populate the utterance
    // NB: The lines object is mutated by each of the following functions

    const utterance = {
      literal:       getLineGroup(`lit`, lines),
      phonetic:      getLine(`phon`, lines),
      speaker:       getLine(`sp`, lines),
      transcript:    getLineGroup(`trs`, lines),
      transcription: getLineGroup(`txn`, lines) || ``,
      translation:   getLineGroup(`tln`, lines) || ``,
    };

    validateUtterance(utterance);

    // Add remaining (custom) lines to utterance

    lines.forEach((data, key) => {
      utterance[key] = data;
      lines.delete(key);
    });

    return utterance;

  } catch (e) {

    e.message = `[parseUtterance] ${e.message}\n\nUtterance text:\n\n${utteranceString}`;
    throw e;

  }

}
