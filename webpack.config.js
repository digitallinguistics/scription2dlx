const babelOptions = require(`./babel.config.js`);
const CopyPlugin   = require(`copy-webpack-plugin`);
const path         = require(`path`);

module.exports = {
  entry:  path.resolve(__dirname, `./src/index.mjs`),
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
  node: {
    fs: `empty`,
  },
  output: {
    filename:      `scription2dlx.js`,
    globalObject:  `this`,
    library:       `scription2dlx`,
    libraryExport: `default`,
    libraryTarget: `umd`,
    path:          path.resolve(__dirname),
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, `scription2dlx.js`),
        to:   path.join(__dirname, `test/scription2dlx.js`),
      },
    ]),
  ],
};
