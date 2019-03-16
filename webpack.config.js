const path = require(`path`);

module.exports = {
  entry:  path.resolve(__dirname, `./src/index.js`),
  mode:   `production`,
  output: {
    filename:      `scription2dlx.js`,
    globalObject:  `this`,
    library:       `scription2dlx`,
    libraryExport: `default`,
    libraryTarget: `umd`,
    path:          path.resolve(__dirname),
  },
};
