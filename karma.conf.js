// Karma configuration
// Generated on Fri May 03 2019 12:48:09 GMT-0700 (Pacific Daylight Time)

module.exports = function setConfig(config) {
  config.set({

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: `test`,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      `ChromeHeadless`,
      `FirefoxHeadless`,
    ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    customLaunchers: {
      FirefoxHeadless: {
        base:  `Firefox`,
        flags: [`-headless`],
      },
    },

    // list of files / patterns to exclude
    exclude: [],

    // list of files / patterns to load in the browser
    files: [
      {
        included: false,
        pattern:  `*/*.txt`,
        served:   true,
      },
      `scription2dlx.*js`,
      `init-browser.*js`,
      `*.test.*js`,
      `*/*.test.*js`,
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [`jasmine`],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // web server port
    port: 9876,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    proxies: {
      '/data/': '/base/data/',
    },

    // test results reporter to use
    // possible values: `dots`, `progress`
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [`progress`],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

  });
};
