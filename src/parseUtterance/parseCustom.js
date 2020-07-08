/* eslint-disable
  no-param-reassign,
*/

import { types as scriptionTypes } from '../constants/index.js';

import {
  getLineType,
  groupLines,
} from '../utilities/index.js';

/**
 * Extracts any custom lines from the lines hash and returns them in an object
 * @param  {Object} lineCodes The line codes hash
 * @param  {Object} lines     The lines hash
 * @return {Object}
 */
export default function parseCustom(codesMap, lines) {

  const lineCodes = Object.keys(lines);
  const types     = scriptionTypes.map(type => codesMap[type]);

  const customTypes = lineCodes
  .map(getLineType)
  .filter(type => !types.includes(type))
  .reduce((hash, type) => {
    hash[type] = groupLines(type, lines);
    return hash;
  }, {});

  const singleLines = [codesMap.phon, codesMap.sp];

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
