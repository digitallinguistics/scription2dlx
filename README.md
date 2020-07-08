# scription2dlx

[![GitHub version](https://img.shields.io/github/v/release/digitallinguistics/scription2dlx?label=version)][releases]
[![downloads](https://img.shields.io/npm/dt/@digitallinguistics/scription2dlx.svg)][npm]
[![GitHub issues](https://img.shields.io/github/issues/digitallinguistics/scription2dlx.svg)][issues]
[![tests status](https://github.com/digitallinguistics/scription2dlx/workflows/tests/badge.svg)][actions]
[![license](https://img.shields.io/github/license/digitallinguistics/scription2dlx.svg)][license]
[![GitHub stars](https://img.shields.io/github/stars/digitallinguistics/scription2dlx.svg?style=social)][GitHub]

A JavaScript library that converts linguistic texts in [scription format][scription] to the [Data Format for Digital Linguistics (DaFoDiL)][DaFoDiL]. It runs in recent versions of browsers and Node.js. This library is useful for language researchers who want to work with their data in text formats that are simple to type and read ([scription][scription]), but want to convert their data for use in other [Digital Linguistics][DLx] tools.

## Quick Links

* [Report a bug or request a feature][issues]
* [View project on GitHub][GitHub]
* [View project on npm][npm]
* [Download the latest release][releases]

## Contents

<!-- TOC -->

- [Installation](#installation)
  - [Node](#node)
  - [Browser](#browser)
- [Usage](#usage)
- [Notes](#notes)
- [Options](#options)
- [Using as a Dependency](#using-as-a-dependency)

<!-- /TOC -->

## Installation

### Node

Install the library in your project from the command line: `npm i @digitallinguistics/scription2dlx`

### Browser

**Option 1:** Download the `scription2dlx.js` file from the [releases page][releases] and include it in a script tag in your HTML:

```html
<script src=scription2dlx.js></script>
```

**Option 2:** Install `scription2dlx` in your project using **npm** (see above), and then include the script in your HTML with a script tag. You may choose to use either the bundled distribution or the distribution that supports ES modules:

```html
<script src=node_modules/@digitallinguistics/scription2dlx/scription2dlx.js></script>
```

## Usage

The library exports a single function, `scription2dlx`, which accepts a String and returns a [DaFoDiL Text Object][Text].

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

You may also pass an options hash as the second option. The available options are shown below.

```js
const text = scription2dlx(data, { /* options */ });
```

## Notes

* The `scription2dlx` library does **not** perform validation on the text data. You should use another validator like [AJV][AJV] to validate your data against the DLx DaFoDiL format.

* In order to keep this library small and dependency-free, `scription2dlx` does **not** automatically parse the YAML header of a scription document. Instead, the header string is returned as a `header` property on the text object. If you would like `scription2dlx` to parse the header, pass a YAML parser to the `parser` option when calling the `scription2dlx` function:

  ```js
  import yaml from 'yaml'; // use your preferred YAML parsing library

  const text = scription2dlx(data, { parser: yaml.parse });
  ```

## Options

Option | Default   | Description
-------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
codes  | `{}`      | This option allows you to use custom backslash codes in your interlinear glosses. It should be a hash containing the scription code as a key (without a leading backslash), and the custom code as the value; ex: `"txn": "t"` will allow you to write `\t` instead of `\txn` for transcription lines.
parser | undefined | A YAML parser to use to parse the header of a scription document. If none is present, the header will be provided as a string in the `header` property of the returned object.

## Using as a Dependency

If you would like to include `scription2dlx` as a dependency in your own library, you can use the files in the `/src` directory to transpile / bundle `scription2dlx` with your own code. The source code for `scription2dlx` is written using ES modules and the latest JavaScript syntax.

[actions]:   https://github.com/digitallinguistics/scription2dlx/actions/
[AJV]:       https://www.npmjs.com/package/ajv
[DaFoDiL]:   https://format.digitallinguistics.io
[DLx]:       https://digitallinguistics.io
[GitHub]:    https://github.com/digitallinguistics/scription2dlx
[license]:   https://github.com/digitallinguistics/scription2dlx/blob/master/LICENSE.md
[issues]:    https://github.com/digitallinguistics/scription2dlx/issues
[npm]:       https://www.npmjs.com/package/@digitallinguistics/scription2dlx
[releases]:  https://github.com/digitallinguistics/scription2dlx/releases
[scription]: https://scription.digitallinguistics.io
[Text]:      https://format.digitallinguistics.io/schemas/Text.html
