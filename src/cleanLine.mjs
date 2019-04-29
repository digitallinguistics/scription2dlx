const literalBracketsRegExp = new RegExp(`^\\[(?<data>.*)\\]$`, `u`);
const phonemicSlashesRegExp = /^\/(?<data>.*)\/$/u;

function cleanLiteral(line) {
  const match = line.match(literalBracketsRegExp);
  if (!match) return line;
  return match.groups.data.trim();
}

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
  if (code.startsWith(`lit`)) return cleanLiteral(line);
  if (code.startsWith(`txn`)) return cleanTranscription(line);
  return line;
}
