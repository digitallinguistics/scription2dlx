const babelOptions = require(`./babel.config`);
const path         = require(`path`);

module.exports = {
  // devtool: `inline-source-map`,
  entry:   path.resolve(__dirname, `./src/index.mjs`),
  mode:    process.env.NODE_ENV || `production`,
  module:  {
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
  output:  {
    filename:      `scription2dlx.js`,
    globalObject:  `this`,
    library:       `scription2dlx`,
    libraryExport: `default`,
    libraryTarget: `umd`,
    path:          path.resolve(__dirname),
  },
  plugins: [],
};
