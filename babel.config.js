module.exports = {
  presets: [
    [
      `@babel/preset-env`,
      {
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
      },
    ],
  ],
};
