/**
 * Extracts the backslash code for a line, without the leading slash. Returns null if none is found.
 * @param  {String} line The line of text to find the backslash code in
 * @return {String}      The backslash code that was found, without a leading slash
 */
export default function getCode(line) {
  const backslashRegExp = /^\\(?<code>\S+)(?:\s|$)/u;
  const match = line.match(backslashRegExp);
  if (!match) return null;
  return match.groups.code;
}
