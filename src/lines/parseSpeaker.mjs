import { getLine } from '../utilities/index.mjs';

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
 * Extracts the speaker data from the lines array
 * @param  {Array}  lines The array of line objects
 * @return {String}
 */
export default function parseSpeaker(lines) {

  try {

    const data = getLine(`sp`, lines);

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
