module.exports = {
  comments: false,
  plugins:  [`@babel/plugin-transform-named-capturing-groups-regex`],
  presets:  [
    [
      `@babel/preset-env`,
      {
        corejs:  3,
        targets: {
          browsers: [
            `last 2 Chrome major versions`,
            `last 2 Edge major versions`,
            `last 2 Firefox major versions`,
            `last 2 iOS major versions`,
            `last 2 Safari major versions`,
          ],
          node: true,
        },
        useBuiltIns: `entry`,
      },
    ],
  ],
  sourceType: `unambiguous`,
};
