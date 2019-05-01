/**
 * Extracts a specific line from the lines Map. Only use this for individual lines, not line groups.
 * @param  {String} code  The backslash code for the line to get
 * @param  {Map}    lines The Map of lines
 * @return {String}       Returns the data for that line
 */
export default function getLine(code, lines) {
  const data = lines.get(code);
  lines.delete(code);
  return data;
}
