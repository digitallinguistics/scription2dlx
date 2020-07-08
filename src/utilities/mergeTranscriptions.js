/* eslint-disable
  no-param-reassign,
*/

import { isString } from './types/index.js';

/**
 * Accepts an array of transcriptions (objects or strings) and merges them into one
 * NOTE: All items in the array must be either strings or objects
 * @param  {Array}         transcriptions
 * @param  {String}        [separator=''] A separator to join transcription strings with
 * @return {Object|String}
 */
export default function mergeTranscriptions(transcriptions, separator = ``) {

  if (!transcriptions.length) return ``;

  return transcriptions.reduce((txn, part) => {

    if (isString(part)) return `${txn}${separator}${part}`;

    Object.entries(part).forEach(([lang, data]) => {
      txn[lang] += `${separator}${data}`;
    });

    return txn;

  });

}
