/* eslint-disable
  no-param-reassign,
*/

import { types } from '../constants/index.mjs';

import {
  getLineType,
  groupLines,
} from '../utilities/index.mjs';

const singleLines = [
  `phon`,
  `sp`,
];

/**
 * Extracts any custom lines from the lines hash and returns them in an object
 * @param  {Object} lines The lines hash
 * @return {Object}
 */
export default function parseCustom(lines) {

  const lineCodes = Object.keys(lines);

  const customTypes = lineCodes
  .map(getLineType)
  .filter(type => !types.includes(type))
  .reduce((hash, type) => {
    hash[type] = groupLines(type, lines);
    return hash;
  }, {});

  const customCodes = lineCodes.filter(code => {
    const type         = getLineType(code);
    const isSingleLine = singleLines.includes(type);
    const hasSubType   = code.startsWith(`${type}-`);
    return isSingleLine && hasSubType;
  })
  .reduce((hash, code) => {
    hash[code] = lines[code];
    return hash;
  }, {});

  return { ...customCodes, ...customTypes };

}
