/**
 * @param  {String} rawLine The raw metadata line to parse
 * @return {String}
 */
export default function parseMetadata(rawLine) {
  return rawLine.replace(/^#\s+/u, ``)
}
