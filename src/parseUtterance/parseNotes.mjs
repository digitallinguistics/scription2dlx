import {
  getLines,
  isValidTag,
} from '../utilities/index.mjs';

/**
 * Accepts the lines hash and returns an array of DLx Note objects
 * @param  {Object} lines The lines hash
 * @return {Array}        Returns the "notes" property of the utterance (or null)
 */
export default function parseNotes(lines) {

  const noteLines = getLines(`n`, lines);

  if (!noteLines) return [];

  const numberedRegExp = /n-[0-9]/u;
  const noteRegExp     = /^(?:\s*(?<source>.+?)\s*:\s*)?(?<text>.+)$/u;

  return Object.entries(noteLines)
  .map(([rawCode, data]) => {

    const code                = rawCode.replace(numberedRegExp, `n`);
    const [, language = `en`] = code.split(`-`, 2);
    const { source, text }    = data.match(noteRegExp).groups;

    if (!isValidTag(language)) {
      throw new Error(`The ${language} language tag is invalid. It must be a valid IETF language tag.`);
    }

    return {
      language,
      source,
      text,
    };

  });

}
