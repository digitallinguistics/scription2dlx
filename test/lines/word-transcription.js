import convert from '../../src/index.js';
import expect  from 'expect.js';

describe(`phonemic transcription (word)`, () => {

  it(`may be in multiple orthographies`, () => {

    const mod  = `waxdungu`;
    const swad = `wašdungu`;

    const text = `
    \\w-mod  ${mod}
    \\w-swad ${swad}
    \\m      waxt-qungu
    \\gl     day-one
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.transcription.mod).to.be(mod);
    expect(word.transcription.swad).to.be(swad);

  });

  it(`default orthography`, () => {

    const text = `
    \\w  waxdungu
    \\m  waxt-qungu
    \\gl day-one
    `;

    const { utterances: [{ words: [word] }] } = convert(text);
    expect(Object.keys(word.transcription)[0]).to.be(`default`);

  });

  it(`option: orthography`, () => {

    const text = `
    \\w  waxdungu
    \\m  waxt-qungu
    \\gl day-one
    `;

    const { utterances: [{ words: [word] }] } = convert(text, { orthography: `Mod` });
    expect(Object.keys(word.transcription)[0]).to.be(`Mod`);

  });

});
