import parseTranscript    from './parseTranscript.mjs';
import parseTranscription from './parseTranscription.mjs';
import parseTranslation   from './parseTranslation.mjs';

const lineDataRegExp = /^\\(?:(?:\w|-)+)(?<lineData>.*)$/u;
const newlineRegExp  = /\r?\n/gu;

/**
 * Reducer that creates a hash of backslash codes and their data
 * @return {Object}
 */
function zipLines(map, [code, line]) {
  const match = line.match(lineDataRegExp);
  const data  = (match ? match.groups.lineData : line).trim();
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

    const lines = utteranceString
    .split(newlineRegExp)
    .map(line => line.trim())
    .map((line, i) => [schema[i], line])
    .reduce(zipLines, new Map);

    const linesData = Array.from(lines.values());
    const noData    = linesData.every(line => line === ``);

    if (noData) return null;

    const transcript = parseTranscript(lines.get(`trs`));
    lines.delete(`trs`);

    const transcription = parseTranscription(lines.get(`txn`) || ``);
    lines.delete(`txn`);

    const translation = parseTranslation(lines.get(`tln`) || ``);
    lines.delete(`tln`);

    const utterance = {
      transcript,
      transcription,
      translation,
    };

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
