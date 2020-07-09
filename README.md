# scription2dlx

[![GitHub version](https://img.shields.io/github/v/release/digitallinguistics/scription2dlx?label=version)][releases]
[![downloads](https://img.shields.io/npm/dt/@digitallinguistics/scription2dlx.svg)][npm]
[![GitHub issues](https://img.shields.io/github/issues/digitallinguistics/scription2dlx.svg)][issues]
[![tests status](https://github.com/digitallinguistics/scription2dlx/workflows/tests/badge.svg)][actions]
[![license](https://img.shields.io/github/license/digitallinguistics/scription2dlx.svg)][license]
[![GitHub stars](https://img.shields.io/github/stars/digitallinguistics/scription2dlx.svg?style=social)][GitHub]

A JavaScript library that converts linguistic texts in [scription format][scription] to the [Data Format for Digital Linguistics (DaFoDiL)][DaFoDiL]. This library is useful for language researchers who want to work with their data in text formats that are simple to type and read ([scription][scription]), but want to convert their data for use in other [Digital Linguistics][DLx] tools.

## Quick Links

* [Report a bug or request a feature][issues]
* [View project on GitHub][GitHub]
* [View project on npm][npm]
* [Download the latest release][releases]

## Contents

<!-- TOC -->

- [Basic Usage](#basic-usage)
- [Notes](#notes)
- [Options](#options)

<!-- /TOC -->

## Basic Usage

1. Install the library using npm or yarn:

  ```cmd
  npm i @digitallinguistics/scription2dlx
  yarn add @digitallinguistics/scription2dlx
  ```

  Or download the latest release from the [releases page][releases].

1. Import the library into your project:

  **Node:**
  ```js
  import convert from '@digitallinguistics/scription2dlx';
  ```

  **HTML:**
  ```html
  <script src=scription2dlx.js type=module></script>
  ```

1. The library exports a single function which accepts a string and returns a [DaFoDiL Text Object][Text].

  **data.txt**
  ```
  ---
  title: How the world began
  ---
  waxdungu qasi
  one day a man
  ```

  **script.js**
  ```js
  const data = await fetch(`data.txt`);
  const text = scription2dlx(data);

  console.log(text.utterances.transcription); // "waxdungu qasi"
  ```

  You may also pass an options hash as the second option. See the [Options](#options) section below.

  ```js
  const text = scription2dlx(data, { /* options */ });
  ```

## Notes

* If your project does not support ES modules and/or the latest JavaScript syntax, you may need to transpile this library using tools like [Babel][Babel], and possibly bundle the library using a [JavaScript bundler][bundlers].

* The `scription2dlx` library does **not** perform validation on the text data. You should use another validator like [AJV][AJV] to validate your data against the [DLx DaFoDiL format][DaFoDiL].

* In order to keep this library small and dependency-free, `scription2dlx` does **not** automatically parse the YAML header of a scription document. Instead, the header string is returned as a `header` property on the text object. If you would like `scription2dlx` to parse the header, pass a YAML parser to the `parser` option when calling the `scription2dlx` function:

  ```js
  import yaml from 'yaml'; // use your preferred YAML parsing library

  const text = scription2dlx(data, { parser: yaml.parse });
  ```

## Options

Option              | Default     | Description
--------------------|-------------|------------
`alignmentError`    | `"warn"`    | This option specifies whether the library should throw an error when it encounters an utterance which has a different number of words on each line, or a different number of morphemes in each word. The [Leipzig glossing rules][Leipzig] state that each line in an interlinear example must have the same number of words and morphemes on each line. By default, this option is set to `"warn"`, which displays a warning if an alignment problem is encountered. To turn off warnings entirely, set this option to `false`; to throw an error, set this option to `true`.
`codes`             | `{}`        | This option allows you to use custom backslash codes in your interlinear glosses. It should be a hash containing the scription code as a key (without a leading backslash), and the custom code as the value; ex: `"txn": "t"` will allow you to write `\t` instead of `\txn` for transcription lines.
`parser`            | `undefined` | A YAML parser to use in parsing the header of a scription document. If none is present, the header will be provided as a string in the `header` property of the returned object.
`utteranceMetadata` | `true`      | Whether to parse the utterance metadata line (the first line when it begins with `#`). If set to `true`, a `metadata` property will be added to each utterance that has it.

[actions]:   https://github.com/digitallinguistics/scription2dlx/actions/
[AJV]:       https://www.npmjs.com/package/ajv
[Babel]:     https://babeljs.io/
[bundlers]:  https://blog.bitsrc.io/choosing-the-right-javascript-bundler-in-2020-f9b1eae0d12b
[DaFoDiL]:   https://format.digitallinguistics.io
[DLx]:       https://digitallinguistics.io
[GitHub]:    https://github.com/digitallinguistics/scription2dlx
[Leipzig]:   https://www.eva.mpg.de/lingua/resources/glossing-rules.php
[license]:   https://github.com/digitallinguistics/scription2dlx/blob/master/LICENSE.md
[issues]:    https://github.com/digitallinguistics/scription2dlx/issues
[npm]:       https://www.npmjs.com/package/@digitallinguistics/scription2dlx
[releases]:  https://github.com/digitallinguistics/scription2dlx/releases
[scription]: https://scription.digitallinguistics.io
[Text]:      https://format.digitallinguistics.io/schemas/Text.html
