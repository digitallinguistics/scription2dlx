# scription2dlx

[![npm (scoped)](https://img.shields.io/npm/v/@digitallinguistics/scription2dlx.svg)][GitHub]
[![npm](https://img.shields.io/npm/dt/@digitallinguistics/scription2dlx.svg)][npm]
![GitHub issues](https://img.shields.io/github/issues/digitallinguistics/scription2dlx.svg)
[![Travis (.org) branch](https://img.shields.io/travis/digitallinguistics/scription2dlx/master.svg)][Travis CI]
[![GitHub](https://img.shields.io/github/license/digitallinguistics/scription2dlx.svg)][license]
[![GitHub stars](https://img.shields.io/github/stars/digitallinguistics/scription2dlx.svg?style=social)][GitHub]

A JavaScript library that converts linguistic texts in [scription format][scription] to the [Data Format for Digital Linguistics (DaFoDiL)][DaFoDiL] in JSON. It runs in recent versions of browsers and Node.js. It is useful for language researchers who want to work with their data in text formats that are simple to type and read ([scription][scription]), but want to convert their data for use in other [Digital Linguistics][DLx] tools.

## Installation

### Node

Install the library in your project from the command line: `npm i @digitallinguistics/scription2dlx`

### Browser

**Option 1:** Include the `scription2dlx` library as a script in your HTML from the DLx CDN:

```html
<script src=https://cdn.digitallinguistics.io/scripts/scription2dlx-0.1.0.js></script>
```

**Option 2:** Download the `scription2dlx.js` file from the [releases page][releases] and include it in a script tag in your HTML:

```html
<script src=scription2dlx.js></script>
```

**Option 3:** Install `scription2dlx` in your project using **npm** (see above), and then include the script in your HTML with a script tag. You may choose to use either the bundled distribution or the distribution that supports ES modules:

```html
<script src=node_modules/@digitallinguistics/scription2dlx/scription2dlx.js></script>
```

Both options will make a global `scription2dlx` function available in the browser.

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
console.log(text.title); // "How the world began"
```

[DaFoDiL]:   https://spec.digitallinguistics.io
[DLx]:       https://digitallinguistics.io
[GitHub]:    https://github.com/digitallinguistics/scription2dlx
[license]:   https://github.com/digitallinguistics/scription2dlx/blob/master/LICENSE.md
[npm]:       https://www.npmjs.com/package/@digitallinguistics/scription2dlx
[releases]:  https://github.com/digitallinguistics/scription2dlx/releases
[scription]: https://developer.digitallinguistics.io/scription
[Text]:      https://spec.digitallinguistics.io/schemas/Text.html
[Travis CI]: https://travis-ci.org/digitallinguistics/scription2dlx
