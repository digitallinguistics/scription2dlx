module.exports = {
  comments: false,
  // Order of plugins is important
  plugins:  [`@babel/plugin-transform-named-capturing-groups-regex`],
  presets:  [
    [
      `@babel/preset-env`,
      {
        corejs:      3,
        targets: {
          browsers: [
            `last 2 Chrome major versions`,
            // It seems like preset-env currently isn't transpiling for Edge correctly
            // `last 2 Edge major versions`,
            `last 2 Firefox major versions`,
            `last 2 iOS major versions`,
            `last 2 Safari major versions`,
          ],
          node: true,
        },
        useBuiltIns: `usage`,
      },
    ],
  ],
  sourceType: `unambiguous`,
};
