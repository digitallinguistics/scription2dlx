/**
 * This test suite applies tests that check the text as a whole
 */

describe(`text`, () => {

  it(`may be called without any arguments`, () => {
    expect(JSON.stringify(convert())).toBe(`{}`);
  });

  it(`may be blank`, () => {

    const text = ``;

    const result = convert(text);

    expect(JSON.stringify(result)).toBe(`{}`);

  });

});
