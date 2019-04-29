import cleanLine    from './cleanLine.mjs';
import getLineGroup from './getLineGroup.mjs';

const lineDataRegExp = /^\\(?:(?:\w|-)+)(?<lineData>.*)$/u;
const newlineRegExp  = /\r?\n/gu;

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

    // Create a hash of lines and their backslash codes
    const lines = utteranceString
    .split(newlineRegExp)
    .map(line => line.trim())
    .map((line, i) => [schema[i], line])
    .reduce(zipLines, new Map);

    // Return null if the utterance contains no data

    const linesData = Array.from(lines.values());
    const noData    = linesData.every(line => line === ``);

    if (noData) return null;

    // Extract known utterance properties
    // NB: The lines object is mutated by each of the following functions

    const literal       = getLineGroup(`lit`, lines);
    const phonetic      = lines.get(`phon`);
    const transcript    = getLineGroup(`trs`, lines);
    const transcription = getLineGroup(`txn`, lines) || ``;
    const translation   = getLineGroup(`tln`, lines) || ``;

    // Populate the utterance

    const utterance = {
      literal,
      phonetic,
      transcript,
      transcription,
      translation,
    };

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
