/**
 * This file applies tests for the speaker line
 */

import convert from '../../src/index.js';
import expect  from 'expect.js';

describe(`speaker`, () => {

  it(`must be a valid abbreviation`, () => {

    const text = `
    \\sp  Benjamin Paul
    \\txn wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln He left his brothers.
    `;

    const test = () => convert(text);

    expect(test).to.throwError(/valid/u);

  });

});
