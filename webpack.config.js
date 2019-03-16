const babelOptions = require(`./babel.config.js`);
const path         = require(`path`);

module.exports = {
  entry:  path.resolve(__dirname, `./src/index.js`),
  mode:   `production`,
  module: {
    rules: [
      {
        test: /\.m?js$/u,
        use:  {
          loader:  `babel-loader`,
          options: babelOptions,
        },
      },
    ],
  },
  output: {
    filename:      `scription2dlx.js`,
    globalObject:  `this`,
    library:       `scription2dlx`,
    libraryExport: `default`,
    libraryTarget: `umd`,
    path:          path.resolve(__dirname),
  },
};
