/* eslint-disable
  no-param-reassign,
*/

import { lineCodes as scriptionCodes } from '../utilities/constants/index.js';

/**
 * Extracts any unspecified lines from the lines hash and returns them in an object
 * @param  {Object} customCodes A hash of scription codes => custom codes
 * @param  {Object} lines       The lines hash
 * @return {Object}
 */
export default function parseCustom(lineCodes, lines) {
  return Object.entries(lines)
  .filter(([code]) => !code.startsWith(`n-`))
  .reduce((hash, [code, line]) => {
    if (code in scriptionCodes) return hash;
    hash[code] = line;
    return hash;
  }, {});
}
