describe(`data`, () => {

  it(`parses Chitimacha`, () => {
    const test = () => convert(data.Chitimacha);
    expect(test).not.toThrow();
  });

  it(`parses Nuuchahnulth`, () => {
    const test = () => convert(data.Nuuchahnulth);
    expect(test).not.toThrow();
  });

  it(`parses Old Latin`, () => {
    const test = () => convert(data.OldLatin);
    expect(test).not.toThrow();
  });

});
