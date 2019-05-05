const convert = scription2dlx;
const parser  = yamljs.parse;

async function loadText(filename) {
  const res = await fetch(`data/${filename}`, { mode: `cors` });
  return res.text();
}

async function loadData() {

  const Chitimacha   = await loadText(`Chitimacha.txt`);
  const Nuuchahnulth = await loadText(`Nuuchahnulth.txt`);
  const OldLatin     = await loadText(`OldLatin.txt`);

  return {
    Chitimacha,
    Nuuchahnulth,
    OldLatin,
  };

}
