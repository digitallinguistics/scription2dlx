import getHeader      from './getHeader.mjs';
import getUtterances  from './getUtterances.mjs';

/**
 * Converts a scription-format text to DLx format
 * @param  {String} scription The text of the Scription file to parse
 * @return {Object}           Returns a plain JavaScript object formatted according to the DLx Text format
 */
export default function scription2dlx(scription) {

  const isEmpty = scription.trim() === ``;

  if (isEmpty) return {};

  const header     = getHeader(scription);
  const utterances = getUtterances(scription);

  return { ...header, utterances };

}
