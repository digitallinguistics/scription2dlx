/* eslint-disable
  sort-keys,
*/

import { isString }    from './utilities/index.mjs';
import parseHeader     from './parseHeader.mjs';
import parseUtterances from './parseUtterances.mjs';

const defaultCodes = {
  sp:   `sp`,
  trs:  `trs`,
  txn:  `txn`,
  w:    `w`,
  phon: `phon`,
  m:    `m`,
  gl:   `gl`,
  wlt:  `wlt`,
  lit:  `lit`,
  tln:  `tln`,
  s:    `s`,
  n:    `n`,
};

/**
 * Converts a scription-format text to DLx format
 * @param  {String} scription The text of the Scription file to parse
 * @param  {Object} options   An options hash
 * @return {Object}           Returns a plain JavaScript object formatted according to the DLx Text format
 */
export default function scription2dlx(scription = ``, {
  codes: customCodes = {},
  parser,
  utteranceMetadata = false,
} = {}) {

  const isEmpty = scription.trim() === ``;

  if (isEmpty) return {};

  if (!(customCodes instanceof Object && Object.values(customCodes).every(isString))) {
    const e = new TypeError(`The "codes" option must be an Object whose values are Strings.`);
    e.name  = `InvalidCodesHashError`;
    throw e;
  }

  const codes = Object.assign({}, defaultCodes, customCodes || {});

  const header     = parseHeader(scription, parser);
  const utterances = parseUtterances(scription, codes, { utteranceMetadata });

  return { ...header, utterances };

}
