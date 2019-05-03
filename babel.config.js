module.exports = {
  plugins: [`@babel/plugin-transform-named-capturing-groups-regex`],
  presets: [
    [
      `@babel/preset-env`,
      {
        corejs:  `core-js@3`,
        targets: {
          browsers: [
            `last 2 Chrome major versions`,
            `last 2 Edge major versions`,
            `last 2 Firefox major versions`,
            `last 2 iOS major versions`,
            `last 2 Safari major versions`,
            `maintained node versions`,
          ],
        },
        useBuiltIns: `entry`,
      },
    ],
  ],
};
