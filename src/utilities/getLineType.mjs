/**
 * Extracts the line type from a string (typically either the full string for a line, or from a backslash code)
 * @param  {String} string The string to extract the line type from
 * @return {String}        The line type
 */
export default function getLineType(string) {
  const [type] = string.split(`-`, 1);
  return type;
}
