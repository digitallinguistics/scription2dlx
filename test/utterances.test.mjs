/**
 * This file applies tests for the utterances section of the scription file
 */

import convert from '../src/index.mjs';

describe(`utterances`, () => {

  it(`may be blank`, () => {

    const text = `
    ---
    title: How the world began
    ---
    `;

    const { utterances } = convert(text);

    expect(utterances.length).toBe(0);

  });

  it(`are separated by one or more empty lines`, () => {

    const text = `
    ---
    title: How the world began
    ---

    wetkš hus na·nča·kamankš wetk hi hokmiʔi
    He left his brothers.
    \t
    kun ču·gš ču·gš še·nink hup hi ničwiʔi
    He went and went till he came to the edge of a pond.


    wetkš hus na·nča·kamankš wetk hi hokmiʔi
    He left his brothers.
    `;

    const { utterances } = convert(text);

    expect(utterances.length).toBe(3);

  });

});
