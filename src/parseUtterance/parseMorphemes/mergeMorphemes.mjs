/* eslint-disable
  no-param-reassign,
*/

import { isString } from '../../utilities/index.mjs';

/**
 * Merges the data of two transcription objects
 * @param  {Object} m1
 * @param  {Object} m2
 * @return {Object}
 */
function mergeTranscriptions(m1, m2) {
  Object.entries(m2).forEach(([code, txn]) => {
    m1.transcription[code] = `…${txn}`;
  });
}

/**
 * Takes an array of morphemes and merges their transcriptions, separating the transcriptions with ellipses. Only the first gloss is maintained.
 * @param  {Array}  morphemes An array of morphemes to merge
 * @return {Object}           Returns a single merged Morpheme object
 */
export default morphemes => morphemes.reduce((m, { transcription }) => {

  if (isString(transcription)) m.transcription += `…${transcription}`;
  else mergeTranscriptions(m.transcription, transcription);

  return m;

});
