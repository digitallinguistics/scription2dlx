import getCode     from './getCode.mjs';
import getLineType from './getLineType.mjs';
import isString    from './isString.mjs';
import isValidCode from './isValidCode.mjs';
import isValidTag  from './isValidTag.mjs';

// NB: Does not include `n` - this is tested elsewhere
const multiLangTypes = [`gl`, `lit`, `tln`, `wlt`];

/**
 * Valides an array of backslash codes, without leading slashes
 * @param  {Array} codes The array of backslash codes to validate
 */
function validateSchema(rawCodes) {

  // Check that if any line has a backslash code, all lines do
  // NB: This validation must come first

  const someLinesHaveCodes = rawCodes.some(code => isString(code));
  const allLinesHaveCodes  = rawCodes.every(code => isString(code));

  if (someLinesHaveCodes && !allLinesHaveCodes) {
    throw new Error(`If one line in an utterance has a backslash code, all lines in the utterance must have backslash codes.`);
  }

  const codes = rawCodes.filter(Boolean);
  const types = codes.map(getLineType);
  // NB: Items in the types array may not be unique (and later code depends on this fact)

  // Check that codes are valid

  codes.forEach(code => {
    if (!isValidCode(code)) {
      throw new Error(`The backslash code ${code} is invalid. Only characters A-Z, a-z, 0-9, and hyphens are allowed. Diacritics are not permitted.`);
    }
  });

  // Check that there are no duplicate codes

  const codeCounts = codes.reduce((counts, code) => {
    const currentCount = counts.get(code) || 0;
    counts.set(code, currentCount + 1);
    return counts;
  }, new Map);

  codeCounts.forEach((count, code) => {
    if (code !== `n` && count > 1) {
      throw new Error(`The ${code} code appears more than once in the utterance. Each backslash code may only appear once.`);
    }
  });

  // Check that morphemes and glosses lines are bidependent

  const hasMorphemes = types.some(type => type === `m`);
  const hasGlosses   = types.some(type => type === `gl`);

  if ((hasMorphemes || hasGlosses) && !(hasMorphemes && hasGlosses)) {
    throw new Error(`If either the morphemes or glosses line is present, the other must be present as well.`);
  }

  // Check that language tags are valid IETF tags

  codes.forEach((code, i) => {

    const type = types[i];

    if (!multiLangTypes.includes(type)) return;

    const lang = code.replace(`${type}-`, ``);

    if (lang && !isValidTag(lang)) {
      throw new Error(`Language codes must be valid IETF language tags. The tag ${lang} is not valid.`);
    }

  });

}

/**
 * Adjust the codes at the beginning of each line to number the notes lines
 * @param  {Array<String>} lines An array of line strings
 * @return {Array<String>}
 */
function numberNotes(code, i) {
  const type = getLineType(code);
  if (type !== `n`) return code;
  return code.replace(`n`, `n-${i + 1}`);
}

/**
 * Accepts the text of a scription utterance and returns an array representing its interlinear gloss schema, where each item in the array is a backslash code (without the leading slash)
 * @param  {String} utteranceString The scription utterance to get the interlinear schema for
 * @return {Array}                  Returns an array of backslash codes (without the leading slash)
 */
export default function getSchema(utteranceString) {

  try {

    const newlineRegExp = /\r?\n/gu;

    const lines = utteranceString
    .split(newlineRegExp)
    .map(line => line.trim())
    .filter(line => !line.startsWith(`#`)); // filter out utterance metadata

    const codes = lines
    .map(getCode);

    validateSchema(codes);

    const hasCodes = codes.filter(Boolean).length;

    if (!hasCodes) {

      const lineCount = lines.length;

      /* eslint-disable no-magic-numbers */
      if (lineCount === 2) return [`txn`, `tln`];
      if (lineCount === 3) return [`m`, `gl`, `tln`];
      if (lineCount >= 4)  return [`txn`, `m`, `gl`, `tln`].fill(`n`, 4);
      /* eslint-enable no-magic-numbers */

      throw new Error(`Cannot infer an interlinear gloss schema for utterances with one line.`);

    }

    return codes.map(numberNotes);

  } catch (e) {

    e.name    = getSchema.name;
    e.message = `${e.message}\n\nUtterance text:\n\n${utteranceString}`;
    throw e;

  }

}
