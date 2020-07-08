/**
 * Accepts an array of raw lines in an utterance, and returns the data for the metadata line, if present (returns null otherwise)
 * @param  {Array}  rawLines An array of raw line strings
 * @return {String}
 */
export default function parseMetadata(rawLines) {

  const metadataLine = rawLines.find(line => line.startsWith(`#`));

  return metadataLine ? metadataLine.replace(/^#\s+/u, ``) : null;

}
