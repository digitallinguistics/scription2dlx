import getLineType from './getLineType.mjs';

/**
 * Takes a hash of line codes and their data and groups lines of a certain type
 * @param  {String} type      The line type to group
 * @param  {Object} linesHash The hash of lines
 * @return {Object}
 */
export default function groupLines(type, linesHash) {

  const typedLines = Object.entries(linesHash)
  .filter(([code]) => getLineType(code) === type);

  if (!typedLines.length) return null;

  const isString = typedLines.length === 1 && typedLines[0][0] === type;

  if (isString) return linesHash[type];

  return typedLines.reduce((hash, [code, data]) => {
    const subtype = code.replace(`${type}-`, ``);
    hash[subtype] = data; // eslint-disable-line no-param-reassign
    return hash;
  }, {});

}
