/**
 * Extracts the line type from a backslash code
 * @param  {String} code The line code to extract the line type from
 * @return {String}      The line type
 */
export default function getLineType(code) {
  const [type] = code.split(`-`, 1);
  return type;
}
