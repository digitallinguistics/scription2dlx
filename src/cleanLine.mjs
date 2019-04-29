const phonemicSlashesRegExp = /^\/(?<data>.*)\/$/u;

function cleanTranscription(line) {
  const match = line.match(phonemicSlashesRegExp);
  if (!match) return line;
  return match.groups.data.trim();
}

/**
 * Cleans the data in an utterance line of the specified type
 * @param  {String} code The code for the line type to clean
 * @param  {String} line The line data (excluding backslash codes)
 * @return {String}
 */
export default function cleanLine(code, line) {
  if (code.startsWith(`txn`)) return cleanTranscription(line);
  return line;
}
