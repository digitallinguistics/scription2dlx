/**
 * This file applies tests for the literal word gloss line (`\\wlt`)
 */

import convert from '../../src/index.js';
import expect  from 'expect.js';

describe(`literal word translation (word: \\wlt)`, () => {

  it(`does not allow literal glosses with whitespace (unless bracketed)`, () => {

    const text = `
    \\m   waxt-qungu qasi
    \\gl  one-day    man
    \\wlt one.day    a man
    `;

    const test = () => convert(text, { alignmentError: true });

    expect(test).to.throwError(/same number/u);

  });

  it(`may be in multiple languages`, () => {

    const en = `one.day`;
    const es = `un.día`;

    const text = `
    \\m      waxt-qungu qasi
    \\gl     one-day    man
    \\wlt-en ${en}     [a man]
    \\wlt-es ${es}     [un hombre]
    `;

    const { utterances: [{ words: [{ literal }] }] } = convert(text);

    expect(literal.en).to.be(en);
    expect(literal.es).to.be(es);

  });

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\m       waxt-qungu qasi
    \\gl      one-day    man
    \\wlt-en- one.day    [a man]
    `;

    const test = () => convert(text);

    expect(test).to.throwError(/IETF/u);

  });

  it(`does not remove brackets`, () => {

    const text = `
    \\m   waxt-qungu qasi
    \\gl  one-day    man
    \\wlt [one day]  [a man]
    `;

    const { utterances: [{ words: [{ literal }] }] } = convert(text);

    expect(literal).to.be(`[one day]`);

  });

  it(`is stripped of emphasis`, () => {

    const literal = `day.one`;

    const text = `
    \\w waxdungu qasi
    \\wlt ${literal} a.man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.literal).to.be(literal);

  });

});
