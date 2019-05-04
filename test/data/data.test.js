describe(`data`, function() {

  let data;

  beforeAll(async function() {
    data = await loadData();
  });

  it(`parses Chitimacha`, () => {
    const test = () => convert(data.Chitimacha);
    expect(test).not.toThrow();
  });

  it(`parses Nuuchahnulth`, () => {
    // pending(`Writing another test to isolate the issue here.`);
    const test = () => convert(data.Nuuchahnulth);
    expect(test).not.toThrow();
  });

  it(`parses Old Latin`, () => {
    const test = () => convert(data.OldLatin);
    expect(test).not.toThrow();
  });

});
