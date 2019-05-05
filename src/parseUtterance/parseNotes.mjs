import {
  getLines,
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

  return Object.entries(noteLines)
  .map(([rawCode, data]) => {

    const code                    = rawCode.replace(numberedRegExp, `n`);
    const [source, text = source] = data.split(/:\s+/u);
    const [, language = `en`]     = code.split(`-`, 1);

    return {
      language,
      source,
      text,
    };

  });

}
