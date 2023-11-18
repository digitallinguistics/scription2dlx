import convert    from '../src/index.js';
import { expect } from 'chai';

describe(`errors`, function() {

  const text = `
  \\m  waxdungu qasi
  \\gl day-one  man
  `;

  it(`default`, function() {
    const test = () => convert(text);
    expect(test).not.to.throw();
  });

  it(`"warn"`, function() {
    const test = () => convert(text, { errors: `warn` });
    expect(test).not.to.throw();
  });

  it(`false`, function() {
    const test = () => convert(text, { errors: false });
    expect(test).not.to.throw();
  });

  it(`true`, function() {
    const test = () => convert(text, { errors: true });
    expect(test).to.throw(`same number`);
  });

});
