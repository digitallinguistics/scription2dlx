import convert from '../../src/index.js';
import expect  from 'expect.js';

describe(`source line`, () => {

  it(`may only be in 1 language`, () => {

    const source = `Swadesh (1939)`;

    const text = `
    \\txn waxdungu qasi
    \\tln one day a man
    \\s   ${source}
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.source).to.be(source);

  });

});
