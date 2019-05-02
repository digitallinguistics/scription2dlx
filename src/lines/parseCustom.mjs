/* eslint-disable
  no-param-reassign,
*/

import { getLines } from '../utilities/index.mjs';
import { types }    from '../constants/index.mjs';

const singleLines = [
  `phon`,
  `sp`,
];

/**
 * Extracts any custom lines from the lines array and returns them in an object
 * @param  {Array}  lines The array of line objects
 * @return {Object}
 */
export default function parseCustom(lines) {
  try {

    return lines.reduce((hash, { code, data, type }) => {

      const isCustomType = !types.includes(type);
      if (isCustomType) hash[type] = getLines(type, lines);

      const isCustomCode = singleLines.includes(type) && code.startsWith(`${type}-`);
      if (isCustomCode) hash[code] = data;

      return hash;

    }, {});

  } catch (e) {

    e.message = `[parseCustom] ${e.message}`;
    throw e;

  }
}
