const speakerRegExp = /^[A-Za-z0-9]+$/u;

/**
 * Checks whether a speaker abbreviation is validly formatted
 * @param  {Any}     speaker The speaker value to validate
 * @return {Boolean}
 */
function isValidSpeaker(speaker) {
  return speakerRegExp.test(speaker);
}

/**
 * Cleans and validates the speaker line
 * @param  {Object}  line The speaker line
 * @return {String}
 */
export default function parseSpeaker(data) {

  try {

    if (!data) return null;

    if (!isValidSpeaker(data)) {
      throw new Error(`${data} is not a valid value for the speaker line.`);
    }

    return data;

  } catch (e) {

    e.message = `[parseSpeaker] ${e.message}`;
    throw e;

  }

}
