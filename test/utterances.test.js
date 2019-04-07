/**
 * This file applies tests for the utterances section of the scription file
 */

const convert = require(`../scription2dlx`);

describe(`utterances`, () => {

  it(`are separated by one or more empty lines`, () => {

    const text = `
    ---
    title: How the world began
    ---

    wetkš hus na·nča·kamankš wetk hi hokmiʔi
    He left his brothers.

    kun ču·gš ču·gš še·nink hup hi ničwiʔi
    He went and went till he came to the edge of a pond.


    wetkš hus na·nča·kamankš wetk hi hokmiʔi
    He left his brothers.
    `;

    const { utterances } = convert(text);

    expect(utterances.length).toBe(2);

  });

});
