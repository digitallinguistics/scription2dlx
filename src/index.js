import { lineCodes as defaultCodes } from './utilities/constants/index.js';
import { isString }                  from './utilities/types/index.js';
import parseHeader                   from './parseHeader.js';
import parseUtterances               from './parseUtterances.js';

/**
 * Converts a scription-format text to DLx format
 * @param  {String} scription The text of the Scription file to parse
 * @param  {Object} options   An options hash
 * @return {Object}           Returns a plain JavaScript object formatted according to the DLx Text format
 */
export default function scription2dlx(scription = ``, {
  codes = {},
  parser,
  utteranceMetadata = true,
} = {}) {

  if (scription.trim() === ``) return {};

  if (!(codes instanceof Object && Object.values(codes).every(isString))) {
    const e = new TypeError(`The "codes" option must be an Object whose values are Strings.`);
    e.name  = `InvalidCodesHashError`;
    throw e;
  }

  const lineCodes  = Object.assign({}, defaultCodes, codes || {});
  const header     = parseHeader(scription, parser);
  const utterances = parseUtterances(scription, lineCodes, { utteranceMetadata });

  return { ...header, utterances };

}
