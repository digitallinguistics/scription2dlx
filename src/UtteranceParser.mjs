import parseUtterance from './parseUtterance.mjs';

/**
 * An Utterance Parser class that saves an interlinear gloss schema for repeated parsing of utterance strings
 */
export default class UtteranceParser {
  /**
   * Create a new utterance parser
   * @param {Array} schema An array of backslash codes representing the order of the lines in an interlinear gloss
   */
  constructor(schema) {
    this.schema = schema;
    return utteranceString => parseUtterance(utteranceString, this.schema);
  }
}
