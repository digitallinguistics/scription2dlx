import convert from '../../src/index.js';
import expect  from 'expect.js';

describe(`data`, () => {

  it(`parses Chitimacha`, () => {
    const test = () => convert(data.Chitimacha);
    expect(test).not.to.throwError();
  });

  it(`parses Nuuchahnulth`, () => {
    const test = () => convert(data.Nuuchahnulth);
    expect(test).not.to.throwError();
  });

  it(`parses Old Latin`, () => {
    const test = () => convert(data.OldLatin);
    expect(test).not.to.throwError();
  });

});
