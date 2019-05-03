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
  try {

    const lineCodes = Object.keys(lines);
    const lineTypes = lineCodes.map(getLineType);

    const customLineTypes = lineTypes.filter(type => !types.includes(type));

    const customTypes = customLineTypes.reduce((hash, type) => {
      hash[type] = groupLines(type, lines);
      return hash;
    }, {});

    const customLineCodes = lineCodes.filter(code => {
      const type         = getLineType(code);
      const isSingleLine = singleLines.includes(type);
      return isSingleLine && code.startsWith(`${type}-`);
    });

    const customCodes = customLineCodes.reduce((hash, code) => {
      hash[code] = lines[code];
      return hash;
    }, {});

    return { ...customCodes, ...customTypes };

  } catch (e) {

    e.message = `[parseCustom] ${e.message}`;
    throw e;

  }
}
