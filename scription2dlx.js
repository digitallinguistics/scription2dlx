(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scription2dlx"] = factory();
	else
		root["scription2dlx"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var UNSCOPABLES = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('unscopables');

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var ArrayPrototype = Array.prototype;

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  hide(ArrayPrototype, UNSCOPABLES, create(null));
}

module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");

module.exports = function (S, index, unicode) {
  return index + (unicode ? codePointAt(S, index, true).length : 1);
};

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var SPECIES = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('species');

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor;
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var TO_STRING_TAG = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('toStringTag');

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments';

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {}
};

module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");

var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;

  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) {}
  }

  return false;
};

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js")(function () {
  function F() {}

  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function returnThis() {
  return this;
};

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");




var $export = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('iterator');

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function getIterationMethod(KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }

      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  }

  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }

  Iterators[NAME] = defaultIterator;

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $export({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/core-js/internals/wrapped-well-known-symbol.js");

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js").document;

var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }

    if (options.sham || targetProperty && targetProperty.sham) {
      hide(sourceProperty, 'sham', true);
    }

    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");







var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var SPECIES = wellKnownSymbol('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
});
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    var execCalled = false;
    var re = /a/;

    re.exec = function () {
      execCalled = true;
      return null;
    };

    if (KEY === 'split') {
      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };
    }

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];
    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2 ? function (string, arg) {
      return regexMethod.call(string, this, arg);
    } : function (string) {
      return regexMethod.call(string, this);
    });
    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/flatten-into-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
};

module.exports = flattenIntoArray;

/***/ }),

/***/ "./node_modules/core-js/internals/forced-string-trim-method.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-trim-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

module.exports = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js")('native-function-to-string', Function.toString);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var ITERATOR = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('iterator');

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = typeof window == 'object' && window && window.Math == Math ? window : typeof self == 'object' && self && self.Math == Math ? self : Function('return this')();

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js") ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js") && !__webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;
module.exports = fails(function () {
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js").WeakMap;

var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('iterator');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var MATCH = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var BREAK = {};

var exports = module.exports = function (iterable, fn, that, ENTRIES, ITERATOR) {
  var boundFunction = bind(fn, that, ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, step;

  if (ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
        if (result === BREAK) return BREAK;
      }

      return;
    }

    iterator = iterFn.call(iterable);
  }

  while (!(step = iterator.next()).done) {
    if (callWithSafeIterationClosing(iterator, boundFunction, step.value, ENTRIES) === BREAK) return BREAK;
  }
};

exports.BREAK = BREAK;

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('iterator');

var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function returnThis() {
  return this;
};

var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

module.exports = !__webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js")(function () {
  return !String(Symbol());
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js").WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");

var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var IE_PROTO = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js")('IE_PROTO');

var PROTOTYPE = 'prototype';

var Empty = function Empty() {};

var _createDict = function createDict() {
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (length--) delete _createDict[PROTOTYPE][enumBugKeys[length]];

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

__webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js")[IE_PROTO] = true;

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;

  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) {}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {}
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var IE_PROTO = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js")('IE_PROTO');

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var ObjectPrototype = Object.prototype;
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype : null;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var arrayIndexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js")(false);

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);

  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
  1: 2
}, 1);
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = nativeGetOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;

  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) {}

  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");

var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js").Reflect;

module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

__webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js")('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else hide(O, key, value);
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);






var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var C = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;
  if (DESCRIPTORS && C && !C[SPECIES]) defineProperty(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var TO_STRING_TAG = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js")('keys');

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.0.1',
  mode: __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var SPECIES = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('species');

module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);




var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var whitespace = '[' + __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js") + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

module.exports = function (string, TYPE) {
  string = String(requireObjectCoercible(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0;
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");


var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);

  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/validate-string-method-arguments.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-string-method-arguments.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) {
    throw TypeError('String.prototype.' + NAME + " doesn't accept regex");
  }

  return String(requireObjectCoercible(that));
};

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js")('wks');

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var Symbol = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js").Symbol;

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name] || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),

/***/ "./node_modules/core-js/internals/wrapped-well-known-symbol.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/wrapped-well-known-symbol.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "./node_modules/core-js/internals/flatten-into-array.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

__webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js")({
  target: 'Array',
  proto: true
}, {
  flatMap: function flatMap(callbackfn) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "./node_modules/core-js/internals/flatten-into-array.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

__webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js")({
  target: 'Array',
  proto: true
}, {
  flat: function flat() {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    index: 0,
    kind: kind
  });
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values');
Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js")('flatMap');

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js")('flat');

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.from-entries.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.from-entries.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");

var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

__webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js")({
  target: 'Object',
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, undefined, true);
    return obj;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");



var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var MATCH = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js")('match');

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

var getFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
var CORRECT_NEW = new NativeRegExp(re1) !== re1;
var FORCED = isForced('RegExp', DESCRIPTORS && (!CORRECT_NEW || fails(function () {
  re2[MATCH] = false;
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    return !thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined ? pattern : inheritIfRequired(CORRECT_NEW ? new NativeRegExp(patternIsRegExp && !flagsAreUndefined ? pattern.source : pattern, flags) : NativeRegExp((patternIsRegExp = pattern instanceof RegExpWrapper) ? pattern.source : pattern, patternIsRegExp && flagsAreUndefined ? getFlags.call(pattern) : flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
  };

  var proxy = function proxy(key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function get() {
        return NativeRegExp[key];
      },
      set: function set(it) {
        NativeRegExp[key] = it;
      }
    });
  };

  var keys = getOwnPropertyNames(NativeRegExp);
  var i = 0;

  while (i < keys.length) proxy(keys[i++]);

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

__webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js")('RegExp');

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.flags.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.flags.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.flags */ "./node_modules/core-js/modules/es.regexp.flags.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");




if (__webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js") && /./g.flags != 'g') {
  __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f(RegExp.prototype, 'flags', {
    configurable: true,
    get: __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js")
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.flags */ "./node_modules/core-js/modules/es.regexp.flags.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");






var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var TO_STRING = 'toString';
var nativeToString = /./[TO_STRING];
var NOT_GENERIC = fails(function () {
  return nativeToString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
});
var INCORRECT_NAME = nativeToString.name != TO_STRING;

if (NOT_GENERIC || INCORRECT_NAME) {
  __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js")(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? flags.call(R) : undefined);
  }, {
    unsafe: true
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.ends-with.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.ends-with */ "./node_modules/core-js/modules/es.string.ends-with.js");




var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var validateArguments = __webpack_require__(/*! ../internals/validate-string-method-arguments */ "./node_modules/core-js/internals/validate-string-method-arguments.js");

var ENDS_WITH = 'endsWith';
var nativeEndsWith = ''[ENDS_WITH];
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js")(ENDS_WITH);

__webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js")({
  target: 'String',
  proto: true,
  forced: !CORRECT_IS_REGEXP_LOGIC
}, {
  endsWith: function endsWith(searchString) {
    var that = validateArguments(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith ? nativeEndsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validateArguments = __webpack_require__(/*! ../internals/validate-string-method-arguments */ "./node_modules/core-js/internals/validate-string-method-arguments.js");

var INCLUDES = 'includes';

var CORRECT_IS_REGEXP_LOGIC = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js")(INCLUDES);

__webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js")({
  target: 'String',
  proto: true,
  forced: !CORRECT_IS_REGEXP_LOGIC
}, {
  includes: function includes(searchString) {
    return !!~validateArguments(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");





var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");

var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

__webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js")('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [function match(regexp) {
    var O = requireObjectCoercible(this);
    var matcher = regexp == undefined ? undefined : regexp[MATCH];
    return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, function (regexp) {
    var res = maybeCallNative(nativeMatch, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");

var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
};

__webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js")('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
  }, function (regexp, replaceValue) {
    var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = [];

      for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }];

  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");






var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;
var SUPPORTS_Y = !fails(function () {
  return !RegExp(MAX_UINT32, 'y');
});

__webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js")('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    internalSplit = function internalSplit(separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];

      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++;
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output.length > lim ? output.slice(0, lim) : output;
    };
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');
    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
}, !SUPPORTS_Y);

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");




var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var validateArguments = __webpack_require__(/*! ../internals/validate-string-method-arguments */ "./node_modules/core-js/internals/validate-string-method-arguments.js");

var STARTS_WITH = 'startsWith';

var CORRECT_IS_REGEXP_LOGIC = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js")(STARTS_WITH);

var nativeStartsWith = ''[STARTS_WITH];

__webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js")({
  target: 'String',
  proto: true,
  forced: !CORRECT_IS_REGEXP_LOGIC
}, {
  startsWith: function startsWith(searchString) {
    var that = validateArguments(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith ? nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var internalStringTrim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js");

var FORCED = __webpack_require__(/*! ../internals/forced-string-trim-method */ "./node_modules/core-js/internals/forced-string-trim-method.js")('trim');

__webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js")({
  target: 'String',
  proto: true,
  forced: FORCED
}, {
  trim: function trim() {
    return internalStringTrim(this, 3);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);






var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js").Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || NativeSymbol().description !== undefined)) {
  var EmptyStringDescriptionStore = {};

  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper ? new NativeSymbol(description) : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;
  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js")({
    global: true,
    forced: true
  }, {
    Symbol: SymbolWrapper
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js")('replace');

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");


var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");

var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;

  if (CollectionPrototype) {
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      hide(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule);
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/constants/index.mjs":
/*!*********************************!*\
  !*** ./src/constants/index.mjs ***!
  \*********************************/
/*! exports provided: types */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.mjs */ "./src/constants/types.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "types", function() { return _types_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/constants/types.mjs":
/*!*********************************!*\
  !*** ./src/constants/types.mjs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (["gl", "lit", "m", "n", "phon", "sp", "tln", "trs", "txn"]);

/***/ }),

/***/ "./src/index.mjs":
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scription2dlx; });
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var _parseHeader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseHeader.mjs */ "./src/parseHeader.mjs");
/* harmony import */ var _parseUtterances_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseUtterances.mjs */ "./src/parseUtterances.mjs");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function scription2dlx() {
  let scription = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      parser = _ref.parser;

  const isEmpty = scription.trim() === "";
  if (isEmpty) return {};
  const header = Object(_parseHeader_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(scription, parser);
  const utterances = Object(_parseUtterances_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(scription);
  return _objectSpread({}, header, {
    utterances
  });
}

/***/ }),

/***/ "./src/parseHeader.mjs":
/*!*****************************!*\
  !*** ./src/parseHeader.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseHeader; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.replace */ "./node_modules/core-js/modules/es.symbol.replace.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/index.mjs */ "./src/utilities/index.mjs");








function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function getHeaderString(text) {
  const headerRegExp = _wrapRegExp(/\x2D\x2D\x2D((?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+?)\x2D\x2D\x2D/g, {
    header: 1
  });

  const result = headerRegExp.exec(text);
  return result ? result.groups.header.trim() : null;
}

function validateHeader(header) {
  if (!header) throw new Error("The metadata header must not be empty.");
  if (Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["isString"])(header)) throw new Error("The metadata header could not be parsed as a JavaScript Object.");
  const title = header.title,
        utterances = header.utterances;
  if (!title) throw new Error("The metadata header must have a \"title\" attribute.");
  if (utterances) throw new Error("The metadata header must not have an \"utterances\" attribute.");
}

function parseHeader(text, parse) {
  const headerString = getHeaderString(text);
  const isMissing = headerString === null;
  if (isMissing) return {};

  if (parse) {
    const header = parse(headerString);
    validateHeader(header);
    return header;
  }

  return {
    header: headerString
  };
}

/***/ }),

/***/ "./src/parseUtterance/index.mjs":
/*!**************************************!*\
  !*** ./src/parseUtterance/index.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseUtterance; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.replace */ "./node_modules/core-js/modules/es.symbol.replace.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _parseCustom_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parseCustom.mjs */ "./src/parseUtterance/parseCustom.mjs");
/* harmony import */ var _parseLiteral_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parseLiteral.mjs */ "./src/parseUtterance/parseLiteral.mjs");
/* harmony import */ var _parseNotes_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parseNotes.mjs */ "./src/parseUtterance/parseNotes.mjs");
/* harmony import */ var _parsePhonetic_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsePhonetic.mjs */ "./src/parseUtterance/parsePhonetic.mjs");
/* harmony import */ var _parseSpeaker_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parseSpeaker.mjs */ "./src/parseUtterance/parseSpeaker.mjs");
/* harmony import */ var _parseTranscript_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parseTranscript.mjs */ "./src/parseUtterance/parseTranscript.mjs");
/* harmony import */ var _parseTranscription_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parseTranscription.mjs */ "./src/parseUtterance/parseTranscription.mjs");
/* harmony import */ var _parseTranslation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parseTranslation.mjs */ "./src/parseUtterance/parseTranslation.mjs");
/* harmony import */ var _parseWords_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parseWords.mjs */ "./src/parseUtterance/parseWords.mjs");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utilities/index.mjs */ "./src/utilities/index.mjs");










function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












const lineDataRegExp = _wrapRegExp(/^\\(?:(?:[0-9A-Z_a-z]|\x2D)+)((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)$/, {
  lineData: 1
});

const newlineRegExp = /\r?\n/g;
const wordTypes = ["gl", "m", "w", "wlt"];

function createLinesHash(lines, schema) {
  return lines.reduce((hash, line, i) => {
    const code = schema[i] || "n-".concat(i);
    const match = line.match(lineDataRegExp);
    const data = (match ? match.groups.lineData : line).trim();
    hash[code] = data;
    return hash;
  }, {});
}

function parseUtterance(utteranceString, schema) {
  try {
    const lines = utteranceString.split(newlineRegExp).map(line => line.trim());
    const codes = lines.map(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_18__["getCode"]).filter(Boolean);
    if (codes.length) schema = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_18__["getSchema"])(utteranceString);
    const linesHash = createLinesHash(lines, schema);
    const noData = !Object.values(linesHash).every(Boolean);
    if (noData) return null;
    const speaker = Object(_parseSpeaker_mjs__WEBPACK_IMPORTED_MODULE_13__["default"])(linesHash.sp);
    const transcript = Object(_parseTranscript_mjs__WEBPACK_IMPORTED_MODULE_14__["default"])(linesHash);
    let transcription = Object(_parseTranscription_mjs__WEBPACK_IMPORTED_MODULE_15__["default"])(linesHash);
    const phonetic = Object(_parsePhonetic_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])(linesHash.phon);
    const literal = Object(_parseLiteral_mjs__WEBPACK_IMPORTED_MODULE_10__["default"])(linesHash);
    const translation = Object(_parseTranslation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"])(linesHash) || "";
    const notes = Object(_parseNotes_mjs__WEBPACK_IMPORTED_MODULE_11__["default"])(linesHash);
    const words = Object(_parseWords_mjs__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_18__["getLines"])(wordTypes, linesHash) || {});
    const custom = Object(_parseCustom_mjs__WEBPACK_IMPORTED_MODULE_9__["default"])(linesHash);

    if (!transcription) {
      const wordTranscriptions = words.map((_ref) => {
        let txn = _ref.transcription;
        return txn;
      });
      transcription = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_18__["mergeTranscriptions"])(wordTranscriptions, " ") || "";
    }

    return _objectSpread({}, speaker ? {
      speaker
    } : {}, transcript ? {
      transcript
    } : {}, {
      transcription
    }, phonetic ? {
      phonetic
    } : {}, literal ? {
      literal
    } : {}, {
      translation
    }, notes.length ? {
      notes
    } : {}, words.length ? {
      words
    } : {}, custom);
  } catch (e) {
    const utteranceText = utteranceString.split(newlineRegExp).map(str => str.trim()).join("\n");
    e.name = parseUtterance.name;
    e.message = "".concat(e.message, "\n\nUtterance text:\n\n").concat(utteranceText);
    throw e;
  }
}

/***/ }),

/***/ "./src/parseUtterance/parseCustom.mjs":
/*!********************************************!*\
  !*** ./src/parseUtterance/parseCustom.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseCustom; });
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var _constants_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.mjs */ "./src/constants/index.mjs");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/index.mjs */ "./src/utilities/index.mjs");



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const singleLines = ["phon", "sp"];
function parseCustom(lines) {
  const lineCodes = Object.keys(lines);
  const customTypes = lineCodes.map(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_3__["getLineType"]).filter(type => !_constants_index_mjs__WEBPACK_IMPORTED_MODULE_2__["types"].includes(type)).reduce((hash, type) => {
    hash[type] = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_3__["groupLines"])(type, lines);
    return hash;
  }, {});
  const customCodes = lineCodes.filter(code => {
    const type = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_3__["getLineType"])(code);
    const isSingleLine = singleLines.includes(type);
    const hasSubType = code.startsWith("".concat(type, "-"));
    return isSingleLine && hasSubType;
  }).reduce((hash, code) => {
    hash[code] = lines[code];
    return hash;
  }, {});
  return _objectSpread({}, customCodes, customTypes);
}

/***/ }),

/***/ "./src/parseUtterance/parseLiteral.mjs":
/*!*********************************************!*\
  !*** ./src/parseUtterance/parseLiteral.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseLiteral; });
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ "./src/utilities/index.mjs");

function parseLiteral(lines) {
  let data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__["groupLines"])("lit", lines);
  if (!data) return null;
  data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__["cleanBrackets"])("lit", data);
  Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__["validateLanguages"])(data);
  return data;
}

/***/ }),

/***/ "./src/parseUtterance/parseMorphemes/getDuplicateMorphemes.mjs":
/*!*********************************************************************!*\
  !*** ./src/parseUtterance/parseMorphemes/getDuplicateMorphemes.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDuplicateMorphemes; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.mjs */ "./src/utilities/index.mjs");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function getDuplicateGlosses(code, morphemes) {
  if (!morphemes.length) return [];
  const glosses = morphemes.map((_ref) => {
    let gloss = _ref.gloss;
    return code === "string" ? gloss : gloss[code];
  });
  const glossCounts = glosses.reduce((counts, gl) => {
    const currentCount = counts.get(gl) || 0;
    counts.set(gl, currentCount + 1);
    return counts;
  }, new Map());
  return Array.from(glossCounts.entries()).filter((_ref2) => {
    let _ref3 = _slicedToArray(_ref2, 2),
        count = _ref3[1];

    return count > 1;
  }).map((_ref4) => {
    let _ref5 = _slicedToArray(_ref4, 1),
        gl = _ref5[0];

    return gl;
  });
}

function getFirstGlossCode(_ref6) {
  let gloss = _ref6.gloss;
  const isBareString = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isString"])(gloss);
  return isBareString ? "string" : Object.keys(gloss)[0];
}

function getDuplicateMorphemes(morphemes) {
  const glossToCheck = getFirstGlossCode(morphemes[0]);
  const duplicateGlosses = getDuplicateGlosses(glossToCheck, morphemes);
  if (!duplicateGlosses) return [];
  return duplicateGlosses.map(gl => morphemes.filter((_ref7) => {
    let gloss = _ref7.gloss;
    if (Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isString"])(gloss)) return gloss === gl;
    return gloss[glossToCheck] === gl;
  }));
}

/***/ }),

/***/ "./src/parseUtterance/parseMorphemes/index.mjs":
/*!*****************************************************!*\
  !*** ./src/parseUtterance/parseMorphemes/index.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseMorphemes; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.replace */ "./node_modules/core-js/modules/es.symbol.replace.js");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "./node_modules/core-js/modules/es.array.flat.js");
/* harmony import */ var core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.flat-map */ "./node_modules/core-js/modules/es.array.flat-map.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "./node_modules/core-js/modules/es.array.unscopables.flat.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map */ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _getDuplicateMorphemes_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getDuplicateMorphemes.mjs */ "./src/parseUtterance/parseMorphemes/getDuplicateMorphemes.mjs");
/* harmony import */ var _separateInfix_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./separateInfix.mjs */ "./src/parseUtterance/parseMorphemes/separateInfix.mjs");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/index.mjs */ "./src/utilities/index.mjs");











function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function createMorphemesHash(wordLines) {
  return Object.entries(wordLines).reduce((hash, _ref) => {
    let _ref2 = _slicedToArray(_ref, 2),
        code = _ref2[0],
        data = _ref2[1];

    hash[code] = tokenizeWord(data);
    return hash;
  }, {});
}

function tokenizeWord(string) {
  const morphemeRegExp = _wrapRegExp(/(\[(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\])|((?:[\0-\x08\x0E-\x1F!-,\.-<>-\}\x7F-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g, {
    bracketed: 1,
    unbracketed: 2
  });

  return Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__["getMatches"])(morphemeRegExp, string).map((_ref3) => {
    let bracketed = _ref3.bracketed,
        unbracketed = _ref3.unbracketed;
    return bracketed || unbracketed;
  });
}

function parseMorphemes(wordLines) {
  const noData = !Object.values(wordLines).every(line => line.length);
  if (noData) return [];
  const morphemesHash = createMorphemesHash(wordLines);
  Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__["validateNumItems"])(morphemesHash);
  let morphemes = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__["zip"])(morphemesHash).flatMap(_separateInfix_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]).map(data => ({
    transcription: Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__["groupLines"])("m", data),
    gloss: Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__["groupLines"])("gl", data)
  }));
  if (!morphemes.length) return [];
  morphemes.forEach(m => {
    Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__["validateLanguages"])(m.transcription);
    Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__["validateLanguages"])(m.gloss);
  });
  const duplicateMorphemes = Object(_getDuplicateMorphemes_mjs__WEBPACK_IMPORTED_MODULE_10__["default"])(morphemes);
  morphemes = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__["difference"])(morphemes, duplicateMorphemes.flat());
  const discontinuousMorphemes = duplicateMorphemes.map(dups => ({
    transcription: Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_12__["mergeTranscriptions"])(dups.map((_ref4) => {
      let transcription = _ref4.transcription;
      return transcription;
    }), "\u2026"),
    gloss: dups[0].gloss
  }));
  return [...morphemes, ...discontinuousMorphemes];
}

/***/ }),

/***/ "./src/parseUtterance/parseMorphemes/separateInfix.mjs":
/*!*************************************************************!*\
  !*** ./src/parseUtterance/parseMorphemes/separateInfix.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return separateInfix; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.replace */ "./node_modules/core-js/modules/es.symbol.replace.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/index.mjs */ "./src/utilities/index.mjs");








function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


function separateInfix(morpheme) {
  const infixRegExp = _wrapRegExp(/((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)<((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)>((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)/, {
    pre: 1,
    infix: 2,
    post: 3
  });

  const entries = Object.entries(morpheme);

  const _entries$find = entries.find((_ref) => {
    let _ref2 = _slicedToArray(_ref, 1),
        code = _ref2[0];

    return Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["getLineType"])(code) === "gl";
  }),
        _entries$find2 = _slicedToArray(_entries$find, 2),
        firstGloss = _entries$find2[1];

  const match = firstGloss.match(infixRegExp);
  if (!match) return morpheme;
  const infixPosition = match.groups.pre ? "right" : "left";
  const morphemes = entries.reduce((_ref3, _ref4) => {
    let _ref5 = _slicedToArray(_ref3, 2),
        i = _ref5[0],
        m = _ref5[1];

    let _ref6 = _slicedToArray(_ref4, 2),
        code = _ref6[0],
        data = _ref6[1];

    const _data$match$groups = data.match(infixRegExp).groups,
          infix = _data$match$groups.infix,
          pre = _data$match$groups.pre,
          post = _data$match$groups.post;
    i[code] = infix;
    m[code] = "".concat(pre).concat(post);
    return [i, m];
  }, [{}, {}]);
  return infixPosition === "left" ? morphemes : morphemes.reverse();
}

/***/ }),

/***/ "./src/parseUtterance/parseNotes.mjs":
/*!*******************************************!*\
  !*** ./src/parseUtterance/parseNotes.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseNotes; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.replace */ "./node_modules/core-js/modules/es.symbol.replace.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/index.mjs */ "./src/utilities/index.mjs");









function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


function parseNotes(lines) {
  const noteLines = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["getLines"])("n", lines);
  if (!noteLines) return [];
  const numberedRegExp = /n\x2D[0-9]/;

  const noteRegExp = _wrapRegExp(/^(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+?)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)$/, {
    source: 1,
    text: 2
  });

  return Object.entries(noteLines).map((_ref) => {
    let _ref2 = _slicedToArray(_ref, 2),
        rawCode = _ref2[0],
        data = _ref2[1];

    const code = rawCode.replace(numberedRegExp, "n");

    const _code$split = code.split("-", 2),
          _code$split2 = _slicedToArray(_code$split, 2),
          _code$split2$ = _code$split2[1],
          language = _code$split2$ === void 0 ? "en" : _code$split2$;

    const _data$match$groups = data.match(noteRegExp).groups,
          source = _data$match$groups.source,
          text = _data$match$groups.text;

    if (!Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["isValidTag"])(language)) {
      throw new Error("The ".concat(language, " language tag is invalid. It must be a valid IETF language tag."));
    }

    return {
      language,
      source,
      text
    };
  });
}

/***/ }),

/***/ "./src/parseUtterance/parsePhonetic.mjs":
/*!**********************************************!*\
  !*** ./src/parseUtterance/parsePhonetic.mjs ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parsePhonetic; });
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ "./src/utilities/index.mjs");

function parsePhonetic(line) {
  if (!line) return null;
  return Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__["cleanBrackets"])("phon", line);
}

/***/ }),

/***/ "./src/parseUtterance/parseSpeaker.mjs":
/*!*********************************************!*\
  !*** ./src/parseUtterance/parseSpeaker.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseSpeaker; });
const speakerRegExp = /^[0-9A-Za-z]+$/;

function isValidSpeaker(speaker) {
  return speakerRegExp.test(speaker);
}

function parseSpeaker(data) {
  if (!data) return null;

  if (!isValidSpeaker(data)) {
    throw new Error("".concat(data, " is not a valid value for the speaker line."));
  }

  return data;
}

/***/ }),

/***/ "./src/parseUtterance/parseTranscript.mjs":
/*!************************************************!*\
  !*** ./src/parseUtterance/parseTranscript.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseTranscript; });
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ "./src/utilities/index.mjs");

function parseTranscript(lines) {
  const data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__["groupLines"])("trs", lines);
  return data || null;
}

/***/ }),

/***/ "./src/parseUtterance/parseTranscription.mjs":
/*!***************************************************!*\
  !*** ./src/parseUtterance/parseTranscription.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseTranscription; });
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ "./src/utilities/index.mjs");

function parseTranscription(lines) {
  let data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__["groupLines"])("txn", lines);
  if (!data) return null;
  data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__["cleanBrackets"])("txn", data);
  return data;
}

/***/ }),

/***/ "./src/parseUtterance/parseTranslation.mjs":
/*!*************************************************!*\
  !*** ./src/parseUtterance/parseTranslation.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseTranslation; });
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ "./src/utilities/index.mjs");

function parseTranslation(lines) {
  const data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__["groupLines"])("tln", lines);
  if (!data) return null;
  Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__["validateLanguages"])(data);
  return data;
}

/***/ }),

/***/ "./src/parseUtterance/parseWords.mjs":
/*!*******************************************!*\
  !*** ./src/parseUtterance/parseWords.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseWords; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.replace */ "./node_modules/core-js/modules/es.symbol.replace.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _parseMorphemes_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parseMorphemes/index.mjs */ "./src/parseUtterance/parseMorphemes/index.mjs");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/index.mjs */ "./src/utilities/index.mjs");







function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function getWordsHash(wordLines) {
  return Object.entries(wordLines).reduce((hash, _ref) => {
    let _ref2 = _slicedToArray(_ref, 2),
        code = _ref2[0],
        data = _ref2[1];

    hash[code] = tokenizeLine(data);
    return hash;
  }, {});
}

function parseWord(data) {
  const transcription = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["groupLines"])("w", data) || "";
  const analysis = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["groupLines"])("m", data);
  const gloss = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["groupLines"])("gl", data);
  const literal = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["groupLines"])("wlt", data);
  const morphemes = Object(_parseMorphemes_index_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["getLines"])(["gl", "m"], data));
  return _objectSpread({
    transcription
  }, analysis ? {
    analysis
  } : {}, gloss ? {
    gloss
  } : {}, literal ? {
    literal
  } : {}, morphemes.length ? {
    morphemes
  } : {});
}

function tokenizeLine(string) {
  const wordRegExp = _wrapRegExp(/(\[(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\])|((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g, {
    bracketed: 1,
    unbracketed: 2
  });

  return Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["getMatches"])(wordRegExp, string).map((_ref3) => {
    let bracketed = _ref3.bracketed,
        unbracketed = _ref3.unbracketed;
    return bracketed || unbracketed;
  });
}

function parseWords(lines) {
  if (!Object.keys(lines).length) return [];
  const wordsHash = getWordsHash(lines);
  Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["validateNumItems"])(wordsHash);
  return Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_7__["zip"])(wordsHash).map(parseWord);
}

/***/ }),

/***/ "./src/parseUtterances.mjs":
/*!*********************************!*\
  !*** ./src/parseUtterances.mjs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseUtterances; });
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/index.mjs */ "./src/utilities/index.mjs");
/* harmony import */ var _parseUtterance_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseUtterance/index.mjs */ "./src/parseUtterance/index.mjs");





function getUtterancesString(text) {
  return text.split(/\x2D\x2D\x2D/g).map(part => part.trim()).pop();
}

function parseUtterances(scription) {
  const utterancesString = getUtterancesString(scription);
  if (!utterancesString) return [];
  const blankLinesRegExp = /(?:[\t\x0B \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\r?\n){2,}/g;
  const utterancesStrings = utterancesString.split(blankLinesRegExp);
  const schema = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_2__["getSchema"])(utterancesStrings[0]);

  const parse = utteranceString => Object(_parseUtterance_index_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(utteranceString, schema);

  return utterancesString.split(blankLinesRegExp).map(parse).filter(Boolean);
}

/***/ }),

/***/ "./src/utilities/cleanBrackets.mjs":
/*!*****************************************!*\
  !*** ./src/utilities/cleanBrackets.mjs ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cleanBrackets; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.from-entries */ "./node_modules/core-js/modules/es.object.from-entries.js");
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.ends-with */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _isString_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isString.mjs */ "./src/utilities/isString.mjs");







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


const bracketTypes = {
  lit: ["[", "]"],
  phon: ["[", "]"],
  txn: ["/", "/"]
};

function trimBrackets(start, end, str) {
  if (str.startsWith(start) && str.endsWith(end)) {
    return str.slice(1, str.length - 1).trim();
  }

  return str;
}

function cleanBrackets(type, data) {
  const brackets = bracketTypes[type];
  if (Object(_isString_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(data)) return trimBrackets(...brackets, data);
  const trimmedEntries = Object.entries(data).map((_ref) => {
    let _ref2 = _slicedToArray(_ref, 2),
        lang = _ref2[0],
        text = _ref2[1];

    return [lang, trimBrackets(...brackets, text)];
  });
  return Object.fromEntries(trimmedEntries);
}

/***/ }),

/***/ "./src/utilities/difference.mjs":
/*!**************************************!*\
  !*** ./src/utilities/difference.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return difference; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function difference(a, b) {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
}

/***/ }),

/***/ "./src/utilities/getCode.mjs":
/*!***********************************!*\
  !*** ./src/utilities/getCode.mjs ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCode; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.replace */ "./node_modules/core-js/modules/es.symbol.replace.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");








function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function getCode(line) {
  const backslashRegExp = _wrapRegExp(/^\\((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|$)/, {
    code: 1
  });

  const match = line.match(backslashRegExp);
  if (!match) return null;
  return match.groups.code;
}

/***/ }),

/***/ "./src/utilities/getLineType.mjs":
/*!***************************************!*\
  !*** ./src/utilities/getLineType.mjs ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLineType; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");




function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getLineType(string) {
  const _string$split = string.split("-", 1),
        _string$split2 = _slicedToArray(_string$split, 1),
        type = _string$split2[0];

  return type;
}

/***/ }),

/***/ "./src/utilities/getLines.mjs":
/*!************************************!*\
  !*** ./src/utilities/getLines.mjs ***!
  \************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLines; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.from-entries */ "./node_modules/core-js/modules/es.object.from-entries.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _getLineType_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getLineType.mjs */ "./src/utilities/getLineType.mjs");





function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function getLines(types, lines) {
  const wordLineEntries = Object.entries(lines).filter((_ref) => {
    let _ref2 = _slicedToArray(_ref, 1),
        code = _ref2[0];

    return types.includes(Object(_getLineType_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(code));
  });
  if (!wordLineEntries.length) return null;
  return Object.fromEntries(wordLineEntries);
}

/***/ }),

/***/ "./src/utilities/getMatches.mjs":
/*!**************************************!*\
  !*** ./src/utilities/getMatches.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMatches; });
function getMatches(regExp, str) {
  const matches = [];
  let match = regExp.exec(str);

  while (match !== null) {
    matches.push(match.groups);
    match = regExp.exec(str);
  }

  return matches.filter(Boolean);
}

/***/ }),

/***/ "./src/utilities/getSchema.mjs":
/*!*************************************!*\
  !*** ./src/utilities/getSchema.mjs ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSchema; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _getCode_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCode.mjs */ "./src/utilities/getCode.mjs");
/* harmony import */ var _getLineType_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getLineType.mjs */ "./src/utilities/getLineType.mjs");
/* harmony import */ var _isString_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isString.mjs */ "./src/utilities/isString.mjs");
/* harmony import */ var _isValidCode_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isValidCode.mjs */ "./src/utilities/isValidCode.mjs");









function validateSchema(rawCodes) {
  const someLinesHaveCodes = rawCodes.some(code => Object(_isString_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(code));
  const allLinesHaveCodes = rawCodes.every(code => Object(_isString_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(code));

  if (someLinesHaveCodes && !allLinesHaveCodes) {
    throw new Error("If one line in an utterance has a backslash code, all lines in the utterance must have backslash codes.");
  }

  const codes = rawCodes.filter(Boolean);
  const types = codes.map(_getLineType_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]);
  codes.forEach(code => {
    if (!Object(_isValidCode_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])(code)) {
      throw new Error("The backslash code ".concat(code, " is invalid. Only characters A-Z, a-z, 0-9, and hyphens are allowed. Diacritics are not permitted."));
    }
  });
  const codeCounts = codes.reduce((counts, code) => {
    const currentCount = counts.get(code) || 0;
    counts.set(code, currentCount + 1);
    return counts;
  }, new Map());
  codeCounts.forEach((count, code) => {
    if (code !== "n" && count > 1) {
      throw new Error("The ".concat(code, " code appears more than once in the utterance. Each backslash code may only appear once."));
    }
  });
  const hasMorphemes = types.some(type => type === "m");
  const hasGlosses = types.some(type => type === "gl");

  if ((hasMorphemes || hasGlosses) && !(hasMorphemes && hasGlosses)) {
    throw new Error("If either the morphemes or glosses line is present, the other must be present as well.");
  }
}

function numberNotes(code, i) {
  const type = Object(_getLineType_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(code);
  if (type !== "n") return code;
  return code.replace("n", "n-".concat(i + 1));
}

function getSchema(utteranceString) {
  try {
    const newlineRegExp = /\r?\n/g;
    const lines = utteranceString.split(newlineRegExp).map(line => line.trim());
    const codes = lines.map(_getCode_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]);
    validateSchema(codes);
    const hasCodes = codes.filter(Boolean).length;

    if (!hasCodes) {
      const lineCount = lines.length;
      if (lineCount === 2) return ["txn", "tln"];
      if (lineCount === 3) return ["m", "gl", "tln"];
      if (lineCount >= 4) return ["txn", "m", "gl", "tln"].fill("n", 4);
      throw new Error("Cannot infer an interlinear gloss schema for utterances with one line.");
    }

    return codes.map(numberNotes);
  } catch (e) {
    e.name = getSchema.name;
    e.message = "".concat(e.message, "\n\nUtterance text:\n\n").concat(utteranceString);
    throw e;
  }
}

/***/ }),

/***/ "./src/utilities/groupLines.mjs":
/*!**************************************!*\
  !*** ./src/utilities/groupLines.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return groupLines; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _getLines_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLines.mjs */ "./src/utilities/getLines.mjs");




function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function groupLines(type, linesHash) {
  const typedLines = Object(_getLines_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])([type], linesHash);
  if (!typedLines) return null;
  const codes = Object.keys(typedLines);
  const isString = codes.length === 1 && codes[0] === type;
  if (isString) return linesHash[type];
  return Object.entries(typedLines).reduce((hash, _ref) => {
    let _ref2 = _slicedToArray(_ref, 2),
        code = _ref2[0],
        data = _ref2[1];

    const subtype = code.replace("".concat(type, "-"), "");
    hash[subtype] = data;
    return hash;
  }, {});
}

/***/ }),

/***/ "./src/utilities/index.mjs":
/*!*********************************!*\
  !*** ./src/utilities/index.mjs ***!
  \*********************************/
/*! exports provided: cleanBrackets, difference, getCode, getLines, getLineType, getMatches, getSchema, groupLines, isString, isValidTag, mergeTranscriptions, validateLanguages, validateNumItems, zip */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cleanBrackets_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanBrackets.mjs */ "./src/utilities/cleanBrackets.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanBrackets", function() { return _cleanBrackets_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _difference_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./difference.mjs */ "./src/utilities/difference.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _difference_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _getCode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCode.mjs */ "./src/utilities/getCode.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCode", function() { return _getCode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _getLines_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLines.mjs */ "./src/utilities/getLines.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLines", function() { return _getLines_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _getLineType_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getLineType.mjs */ "./src/utilities/getLineType.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLineType", function() { return _getLineType_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _getMatches_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getMatches.mjs */ "./src/utilities/getMatches.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatches", function() { return _getMatches_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _getSchema_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getSchema.mjs */ "./src/utilities/getSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSchema", function() { return _getSchema_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _groupLines_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./groupLines.mjs */ "./src/utilities/groupLines.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupLines", function() { return _groupLines_mjs__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _isString_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isString.mjs */ "./src/utilities/isString.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _isString_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _isValidTag_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isValidTag.mjs */ "./src/utilities/isValidTag.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidTag", function() { return _isValidTag_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _mergeTranscriptions_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mergeTranscriptions.mjs */ "./src/utilities/mergeTranscriptions.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeTranscriptions", function() { return _mergeTranscriptions_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _validateLanguages_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validateLanguages.mjs */ "./src/utilities/validateLanguages.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateLanguages", function() { return _validateLanguages_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _validateNumItems_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validateNumItems.mjs */ "./src/utilities/validateNumItems.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateNumItems", function() { return _validateNumItems_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _zip_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zip.mjs */ "./src/utilities/zip.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]; });

















/***/ }),

/***/ "./src/utilities/isString.mjs":
/*!************************************!*\
  !*** ./src/utilities/isString.mjs ***!
  \************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isString; });
function isString(val) {
  return typeof val === "string";
}

/***/ }),

/***/ "./src/utilities/isValidCode.mjs":
/*!***************************************!*\
  !*** ./src/utilities/isValidCode.mjs ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isValidCode; });
const codeRegExp = /^[\x2D0-9A-Za-z]+$/;
function isValidCode(str) {
  return codeRegExp.test(str);
}

/***/ }),

/***/ "./src/utilities/isValidTag.mjs":
/*!**************************************!*\
  !*** ./src/utilities/isValidTag.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateLanguageTag; });
const langRegExp = /^(((en\x2DGB\x2Doed|i\x2Dami|i\x2Dbnn|i\x2Ddefault|i\x2Denochian|i\x2Dhak|i\x2Dklingon|i\x2Dlux|i\x2Dmingo|i\x2Dnavajo|i\x2Dpwn|i\x2Dtao|i\x2Dtay|i\x2Dtsu|sgn\x2DBE\x2DFR|sgn\x2DBE\x2DNL|sgn\x2DCH\x2DDE)|(art\x2Dlojban|cel\x2Dgaulish|no\x2Dbok|no\x2Dnyn|zh\x2Dguoyu|zh\x2Dhakka|zh\x2Dmin|zh\x2Dmin\x2Dnan|zh\x2Dxiang))|((([A-Za-z]{2,3}(\x2D([A-Za-z]{3}(\x2D[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(\x2D([A-Za-z]{4}))?(\x2D([A-Za-z]{2}|[0-9]{3}))?(\x2D([0-9A-Za-z]{5,8}|[0-9][0-9A-Za-z]{3}))*(\x2D([0-9A-WYZa-wyz](\x2D[0-9A-Za-z]{2,8})+))*(\x2D(x(\x2D[0-9A-Za-z]{1,8})+))?)|(x(\x2D[0-9A-Za-z]{1,8})+))$/;
function validateLanguageTag(tag) {
  return langRegExp.test(tag);
}

/***/ }),

/***/ "./src/utilities/mergeTranscriptions.mjs":
/*!***********************************************!*\
  !*** ./src/utilities/mergeTranscriptions.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeTranscriptions; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _isString_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isString.mjs */ "./src/utilities/isString.mjs");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function mergeTranscriptions(transcriptions) {
  let separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  if (!transcriptions.length) return "";
  return transcriptions.reduce((txn, part) => {
    if (Object(_isString_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(part)) return "".concat(txn).concat(separator).concat(part);
    Object.entries(part).forEach((_ref) => {
      let _ref2 = _slicedToArray(_ref, 2),
          lang = _ref2[0],
          data = _ref2[1];

      txn[lang] += "".concat(separator).concat(data);
    });
    return txn;
  });
}

/***/ }),

/***/ "./src/utilities/validateLanguages.mjs":
/*!*********************************************!*\
  !*** ./src/utilities/validateLanguages.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateLanguages; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _isValidTag_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isValidTag.mjs */ "./src/utilities/isValidTag.mjs");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function validateLanguages(data) {
  if (data instanceof Object) {
    Object.entries(data).forEach((_ref) => {
      let _ref2 = _slicedToArray(_ref, 1),
          lang = _ref2[0];

      if (!Object(_isValidTag_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(lang)) {
        throw new Error("".concat(lang, " is not a valid IETF language tag."));
      }
    });
  }
}

/***/ }),

/***/ "./src/utilities/validateNumItems.mjs":
/*!********************************************!*\
  !*** ./src/utilities/validateNumItems.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateNumItems; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function validateNumItems(lines) {
  const itemLists = Object.values(lines);
  const numItems = Math.max(...itemLists.map(w => w.length));
  const sameNumItems = itemLists.every(list => list.length === numItems);

  if (!sameNumItems) {
    throw new Error("All morpheme and glosses lines must have the same number of words and morphemes.");
  }
}

/***/ }),

/***/ "./src/utilities/zip.mjs":
/*!*******************************!*\
  !*** ./src/utilities/zip.mjs ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return zip; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function zip(hash) {
  const numItems = Math.max(...Object.values(hash).map(w => w.length));
  const items = [];

  for (let i = 0; i < numItems; i++) {
    const item = Object.entries(hash).reduce((o, _ref) => {
      let _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          arr = _ref2[1];

      o[key] = arr[i];
      return o;
    }, {});
    items.push(item);
  }

  return items;
}

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2JpbmQtY29udGV4dC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZsYXR0ZW4taW50by1hcnJheS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZvcmNlZC1zdHJpbmctdHJpbS1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRlLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1mbGFncy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtc2V0LXByb3RvdHlwZS1vZi1hcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1zdHJpbmctbWV0aG9kLWFyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93cmFwcGVkLXdlbGwta25vd24tc3ltYm9sLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZsYXQtbWFwLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZsYXQuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkudW5zY29wYWJsZXMuZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkudW5zY29wYWJsZXMuZmxhdC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZnJvbS1lbnRyaWVzLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuZW5kcy13aXRoLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcubWF0Y2guanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zdGFydHMtd2l0aC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Lyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvY29uc3RhbnRzL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL2NvbnN0YW50cy90eXBlcy5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy9wYXJzZUhlYWRlci5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy9wYXJzZVV0dGVyYW5jZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy9wYXJzZVV0dGVyYW5jZS9wYXJzZUN1c3RvbS5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy9wYXJzZVV0dGVyYW5jZS9wYXJzZUxpdGVyYWwubWpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvcGFyc2VVdHRlcmFuY2UvcGFyc2VNb3JwaGVtZXMvZ2V0RHVwbGljYXRlTW9ycGhlbWVzLm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3BhcnNlVXR0ZXJhbmNlL3BhcnNlTW9ycGhlbWVzL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3BhcnNlVXR0ZXJhbmNlL3BhcnNlTW9ycGhlbWVzL3NlcGFyYXRlSW5maXgubWpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvcGFyc2VVdHRlcmFuY2UvcGFyc2VOb3Rlcy5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy9wYXJzZVV0dGVyYW5jZS9wYXJzZVBob25ldGljLm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3BhcnNlVXR0ZXJhbmNlL3BhcnNlU3BlYWtlci5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy9wYXJzZVV0dGVyYW5jZS9wYXJzZVRyYW5zY3JpcHQubWpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvcGFyc2VVdHRlcmFuY2UvcGFyc2VUcmFuc2NyaXB0aW9uLm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3BhcnNlVXR0ZXJhbmNlL3BhcnNlVHJhbnNsYXRpb24ubWpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvcGFyc2VVdHRlcmFuY2UvcGFyc2VXb3Jkcy5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy9wYXJzZVV0dGVyYW5jZXMubWpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvdXRpbGl0aWVzL2NsZWFuQnJhY2tldHMubWpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvdXRpbGl0aWVzL2RpZmZlcmVuY2UubWpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvdXRpbGl0aWVzL2dldENvZGUubWpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvdXRpbGl0aWVzL2dldExpbmVUeXBlLm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3V0aWxpdGllcy9nZXRMaW5lcy5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy91dGlsaXRpZXMvZ2V0TWF0Y2hlcy5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy91dGlsaXRpZXMvZ2V0U2NoZW1hLm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3V0aWxpdGllcy9ncm91cExpbmVzLm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3V0aWxpdGllcy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy91dGlsaXRpZXMvaXNTdHJpbmcubWpzIiwid2VicGFjazovL3NjcmlwdGlvbjJkbHgvLi9zcmMvdXRpbGl0aWVzL2lzVmFsaWRDb2RlLm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3V0aWxpdGllcy9pc1ZhbGlkVGFnLm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3V0aWxpdGllcy9tZXJnZVRyYW5zY3JpcHRpb25zLm1qcyIsIndlYnBhY2s6Ly9zY3JpcHRpb24yZGx4Ly4vc3JjL3V0aWxpdGllcy92YWxpZGF0ZUxhbmd1YWdlcy5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy91dGlsaXRpZXMvdmFsaWRhdGVOdW1JdGVtcy5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0aW9uMmRseC8uL3NyYy91dGlsaXRpZXMvemlwLm1qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaXQiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJVTlNDT1BBQkxFUyIsInJlcXVpcmUiLCJjcmVhdGUiLCJoaWRlIiwiQXJyYXlQcm90b3R5cGUiLCJBcnJheSIsInByb3RvdHlwZSIsInVuZGVmaW5lZCIsImtleSIsImNvZGVQb2ludEF0IiwiUyIsImluZGV4IiwidW5pY29kZSIsImxlbmd0aCIsImlzT2JqZWN0IiwidG9JbmRleGVkT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJPIiwidmFsdWUiLCJpc0FycmF5IiwiU1BFQ0lFUyIsIm9yaWdpbmFsQXJyYXkiLCJDIiwiY29uc3RydWN0b3IiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJjYWxsIiwiYSIsImIiLCJjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhbk9iamVjdCIsIml0ZXJhdG9yIiwiRU5UUklFUyIsImVycm9yIiwicmV0dXJuTWV0aG9kIiwidG9TdHJpbmciLCJzbGljZSIsImNsYXNzb2ZSYXciLCJUT19TVFJJTkdfVEFHIiwiQ09SUkVDVF9BUkdVTUVOVFMiLCJ0cnlHZXQiLCJ0YWciLCJyZXN1bHQiLCJPYmplY3QiLCJjYWxsZWUiLCJoYXMiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlIiwiZGVmaW5lUHJvcGVydHlNb2R1bGUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJrZXlzIiwiZGVmaW5lUHJvcGVydHkiLCJmIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaSIsIk1BVENIIiwiTUVUSE9EX05BTUUiLCJyZWdleHAiLCJlIiwiRiIsImdldFByb3RvdHlwZU9mIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IiLCJzZXRUb1N0cmluZ1RhZyIsIkl0ZXJhdG9ycyIsInJldHVyblRoaXMiLCJJdGVyYXRvckNvbnN0cnVjdG9yIiwiTkFNRSIsIm5leHQiLCJiaXRtYXAiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ0b1ByaW1pdGl2ZSIsIm9iamVjdCIsInByb3BlcnR5S2V5IiwiJGV4cG9ydCIsImNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IiLCJzZXRQcm90b3R5cGVPZiIsInJlZGVmaW5lIiwiSVNfUFVSRSIsIklURVJBVE9SIiwiSXRlcmF0b3JzQ29yZSIsIkJVR0dZX1NBRkFSSV9JVEVSQVRPUlMiLCJLRVlTIiwiVkFMVUVTIiwiSXRlcmFibGUiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0SXRlcmF0aW9uTWV0aG9kIiwiS0lORCIsImRlZmF1bHRJdGVyYXRvciIsIkl0ZXJhYmxlUHJvdG90eXBlIiwidmFsdWVzIiwiZW50cmllcyIsIklOQ09SUkVDVF9WQUxVRVNfTkFNRSIsIm5hdGl2ZUl0ZXJhdG9yIiwiYW55TmF0aXZlSXRlcmF0b3IiLCJDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUiLCJtZXRob2RzIiwiS0VZIiwibmFtZSIsInByb3RvIiwiZm9yY2VkIiwicGF0aCIsIndyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUiLCJTeW1ib2wiLCJnZXQiLCJkb2N1bWVudCIsImV4aXN0IiwiY3JlYXRlRWxlbWVudCIsIkNTU1J1bGVMaXN0IiwiQ1NTU3R5bGVEZWNsYXJhdGlvbiIsIkNTU1ZhbHVlTGlzdCIsIkNsaWVudFJlY3RMaXN0IiwiRE9NUmVjdExpc3QiLCJET01TdHJpbmdMaXN0IiwiRE9NVG9rZW5MaXN0IiwiRGF0YVRyYW5zZmVySXRlbUxpc3QiLCJGaWxlTGlzdCIsIkhUTUxBbGxDb2xsZWN0aW9uIiwiSFRNTENvbGxlY3Rpb24iLCJIVE1MRm9ybUVsZW1lbnQiLCJIVE1MU2VsZWN0RWxlbWVudCIsIk1lZGlhTGlzdCIsIk1pbWVUeXBlQXJyYXkiLCJOYW1lZE5vZGVNYXAiLCJOb2RlTGlzdCIsIlBhaW50UmVxdWVzdExpc3QiLCJQbHVnaW4iLCJQbHVnaW5BcnJheSIsIlNWR0xlbmd0aExpc3QiLCJTVkdOdW1iZXJMaXN0IiwiU1ZHUGF0aFNlZ0xpc3QiLCJTVkdQb2ludExpc3QiLCJTVkdTdHJpbmdMaXN0IiwiU1ZHVHJhbnNmb3JtTGlzdCIsIlNvdXJjZUJ1ZmZlckxpc3QiLCJTdHlsZVNoZWV0TGlzdCIsIlRleHRUcmFja0N1ZUxpc3QiLCJUZXh0VHJhY2tMaXN0IiwiVG91Y2hMaXN0IiwiZ2xvYmFsIiwic2V0R2xvYmFsIiwiY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyIsImlzRm9yY2VkIiwib3B0aW9ucyIsIlRBUkdFVCIsIkdMT0JBTCIsIlNUQVRJQyIsInN0YXQiLCJ0YXJnZXRQcm9wZXJ0eSIsInNvdXJjZVByb3BlcnR5IiwiZGVzY3JpcHRvciIsIm5vVGFyZ2V0R2V0Iiwic2hhbSIsImV4ZWMiLCJmYWlscyIsIndlbGxLbm93blN5bWJvbCIsInJlZ2V4cEV4ZWMiLCJSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyIsInJlIiwiZ3JvdXBzIiwicmVwbGFjZSIsIlNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyIsIm9yaWdpbmFsRXhlYyIsInNwbGl0IiwiU1lNQk9MIiwiREVMRUdBVEVTX1RPX1NZTUJPTCIsIkRFTEVHQVRFU19UT19FWEVDIiwiZXhlY0NhbGxlZCIsIm5hdGl2ZVJlZ0V4cE1ldGhvZCIsIm5hdGl2ZU1ldGhvZCIsInN0ciIsImFyZzIiLCJmb3JjZVN0cmluZ01ldGhvZCIsImRvbmUiLCJzdHJpbmdNZXRob2QiLCJyZWdleE1ldGhvZCIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsImJpbmQiLCJmbGF0dGVuSW50b0FycmF5Iiwib3JpZ2luYWwiLCJzb3VyY2VMZW4iLCJzdGFydCIsImRlcHRoIiwibWFwcGVyIiwidGhpc0FyZyIsInRhcmdldEluZGV4Iiwic291cmNlSW5kZXgiLCJtYXBGbiIsImVsZW1lbnQiLCJ3aGl0ZXNwYWNlcyIsIm5vbiIsIkZ1bmN0aW9uIiwidmFyaWFibGUiLCJuYW1lc3BhY2UiLCJtZXRob2QiLCJjbGFzc29mIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJoYXNPd25Qcm9wZXJ0eSIsImRvY3VtZW50RWxlbWVudCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiUCIsIk5BVElWRV9XRUFLX01BUCIsIm9iamVjdEhhcyIsInNoYXJlZEtleSIsImhpZGRlbktleXMiLCJXZWFrTWFwIiwic2V0IiwiZW5mb3JjZSIsImdldHRlckZvciIsIlRZUEUiLCJzdGF0ZSIsInR5cGUiLCJzdG9yZSIsIndtZ2V0Iiwid21oYXMiLCJ3bXNldCIsIm1ldGFkYXRhIiwiU1RBVEUiLCJyZXBsYWNlbWVudCIsImZlYXR1cmUiLCJkZXRlY3Rpb24iLCJkYXRhIiwibm9ybWFsaXplIiwiUE9MWUZJTEwiLCJOQVRJVkUiLCJ0b0xvd2VyQ2FzZSIsImlzUmVnRXhwIiwiaXNBcnJheUl0ZXJhdG9yTWV0aG9kIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nIiwiQlJFQUsiLCJpdGVyYWJsZSIsImJvdW5kRnVuY3Rpb24iLCJpdGVyRm4iLCJzdGVwIiwiUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlIiwiYXJyYXlJdGVyYXRvciIsIm5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmciLCJ0ZXN0IiwiZGVmaW5lUHJvcGVydGllcyIsImVudW1CdWdLZXlzIiwiaHRtbCIsImRvY3VtZW50Q3JlYXRlRWxlbWVudCIsIklFX1BST1RPIiwiUFJPVE9UWVBFIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJzY3JpcHQiLCJndCIsImpzIiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJERVNDUklQVE9SUyIsIm9iamVjdEtleXMiLCJJRThfRE9NX0RFRklORSIsIm5hdGl2ZURlZmluZVByb3BlcnR5IiwiQXR0cmlidXRlcyIsInByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlIiwibmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW50ZXJuYWxPYmplY3RLZXlzIiwiY29uY2F0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInRvT2JqZWN0IiwiQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSIiwiT2JqZWN0UHJvdG90eXBlIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJwdXNoIiwibmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUiLCJOQVNIT1JOX0JVRyIsIlYiLCJ2YWxpZGF0ZVNldFByb3RvdHlwZU9mQXJndW1lbnRzIiwiY29ycmVjdFNldHRlciIsInNldHRlciIsIl9fcHJvdG9fXyIsImdldE93blByb3BlcnR5TmFtZXNNb2R1bGUiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUiLCJSZWZsZWN0IiwiSW50ZXJuYWxTdGF0ZU1vZHVsZSIsImdldEludGVybmFsU3RhdGUiLCJlbmZvcmNlSW50ZXJuYWxTdGF0ZSIsIlRFTVBMQVRFIiwidW5zYWZlIiwic2ltcGxlIiwiam9pbiIsIlIiLCJyZWdleHBGbGFncyIsIm5hdGl2ZUV4ZWMiLCJuYXRpdmVSZXBsYWNlIiwicGF0Y2hlZEV4ZWMiLCJVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkciLCJyZTEiLCJyZTIiLCJsYXN0SW5kZXgiLCJOUENHX0lOQ0xVREVEIiwiUEFUQ0giLCJyZUNvcHkiLCJtYXRjaCIsImlnbm9yZUNhc2UiLCJtdWx0aWxpbmUiLCJzdGlja3kiLCJnZXRCdWlsdEluIiwiQ09OU1RSVUNUT1JfTkFNRSIsIlRBRyIsInNoYXJlZCIsInVpZCIsIlNIQVJFRCIsInZlcnNpb24iLCJtb2RlIiwiY29weXJpZ2h0IiwiZGVmYXVsdENvbnN0cnVjdG9yIiwidG9JbnRlZ2VyIiwicmVxdWlyZU9iamVjdENvZXJjaWJsZSIsInBvcyIsIkNPTlZFUlRfVE9fU1RSSU5HIiwicG9zaXRpb24iLCJzaXplIiwiZmlyc3QiLCJzZWNvbmQiLCJjaGFyQ29kZUF0IiwiY2hhckF0Iiwid2hpdGVzcGFjZSIsImx0cmltIiwicnRyaW0iLCJtYXgiLCJtaW4iLCJpbnRlZ2VyIiwiSW5kZXhlZE9iamVjdCIsImNlaWwiLCJmbG9vciIsImFyZ3VtZW50IiwiaXNOYU4iLCJ2YWwiLCJ2YWx1ZU9mIiwiaWQiLCJwb3N0Zml4IiwicmFuZG9tIiwic2VhcmNoU3RyaW5nIiwiTkFUSVZFX1NZTUJPTCIsImFycmF5U3BlY2llc0NyZWF0ZSIsImZsYXRNYXAiLCJjYWxsYmFja2ZuIiwiQSIsImZsYXQiLCJkZXB0aEFyZyIsImFkZFRvVW5zY29wYWJsZXMiLCJkZWZpbmVJdGVyYXRvciIsIkFSUkFZX0lURVJBVE9SIiwic2V0SW50ZXJuYWxTdGF0ZSIsIml0ZXJhdGVkIiwia2luZCIsIkFyZ3VtZW50cyIsIml0ZXJhdGUiLCJjcmVhdGVQcm9wZXJ0eSIsImZyb21FbnRyaWVzIiwib2JqIiwiayIsInYiLCJpbmhlcml0SWZSZXF1aXJlZCIsImdldEZsYWdzIiwiTmF0aXZlUmVnRXhwIiwiUmVnRXhwUHJvdG90eXBlIiwiQ09SUkVDVF9ORVciLCJSZWdFeHBXcmFwcGVyIiwicGF0dGVybiIsImZsYWdzIiwidGhpc0lzUmVnRXhwIiwicGF0dGVybklzUmVnRXhwIiwiZmxhZ3NBcmVVbmRlZmluZWQiLCJwcm94eSIsIlRPX1NUUklORyIsIm5hdGl2ZVRvU3RyaW5nIiwiTk9UX0dFTkVSSUMiLCJJTkNPUlJFQ1RfTkFNRSIsInZhbGlkYXRlQXJndW1lbnRzIiwiRU5EU19XSVRIIiwibmF0aXZlRW5kc1dpdGgiLCJDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyIsImVuZHNXaXRoIiwiZW5kUG9zaXRpb24iLCJsZW4iLCJlbmQiLCJzZWFyY2giLCJJTkNMVURFUyIsImluY2x1ZGVzIiwiaW5kZXhPZiIsImFkdmFuY2VTdHJpbmdJbmRleCIsInJlZ0V4cEV4ZWMiLCJuYXRpdmVNYXRjaCIsIm1heWJlQ2FsbE5hdGl2ZSIsIm1hdGNoZXIiLCJyZXMiLCJyeCIsImZ1bGxVbmljb2RlIiwibiIsIm1hdGNoU3RyIiwiU1VCU1RJVFVUSU9OX1NZTUJPTFMiLCJTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCIsIm1heWJlVG9TdHJpbmciLCJSRVBMQUNFIiwic2VhcmNoVmFsdWUiLCJyZXBsYWNlVmFsdWUiLCJyZXBsYWNlciIsImZ1bmN0aW9uYWxSZXBsYWNlIiwicmVzdWx0cyIsImFjY3VtdWxhdGVkUmVzdWx0IiwibmV4dFNvdXJjZVBvc2l0aW9uIiwibWF0Y2hlZCIsImNhcHR1cmVzIiwiaiIsIm5hbWVkQ2FwdHVyZXMiLCJyZXBsYWNlckFyZ3MiLCJnZXRTdWJzdGl0dXRpb24iLCJ0YWlsUG9zIiwibSIsInN5bWJvbHMiLCJjaCIsImNhcHR1cmUiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJjYWxsUmVnRXhwRXhlYyIsImFycmF5UHVzaCIsIk1BWF9VSU5UMzIiLCJTVVBQT1JUU19ZIiwiU1BMSVQiLCJuYXRpdmVTcGxpdCIsImludGVybmFsU3BsaXQiLCJzZXBhcmF0b3IiLCJsaW1pdCIsImxpbSIsIm91dHB1dCIsImxhc3RMYXN0SW5kZXgiLCJzZXBhcmF0b3JDb3B5IiwibGFzdExlbmd0aCIsInNwbGl0dGVyIiwidW5pY29kZU1hdGNoaW5nIiwicCIsInEiLCJ6IiwiU1RBUlRTX1dJVEgiLCJuYXRpdmVTdGFydHNXaXRoIiwic3RhcnRzV2l0aCIsImludGVybmFsU3RyaW5nVHJpbSIsInRyaW0iLCJOYXRpdmVTeW1ib2wiLCJkZXNjcmlwdGlvbiIsIkVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSIsIlN5bWJvbFdyYXBwZXIiLCJzeW1ib2xQcm90b3R5cGUiLCJzeW1ib2xUb1N0cmluZyIsIm5hdGl2ZSIsInN5bWJvbCIsImRlc2MiLCJET01JdGVyYWJsZXMiLCJBcnJheUl0ZXJhdG9yTWV0aG9kcyIsIkFycmF5VmFsdWVzIiwiQ09MTEVDVElPTl9OQU1FIiwiQ29sbGVjdGlvbiIsIkNvbGxlY3Rpb25Qcm90b3R5cGUiLCJvcmlnaW5hbE1vZHVsZSIsIndlYnBhY2tQb2x5ZmlsbCIsImNoaWxkcmVuIiwibCIsInNjcmlwdGlvbjJkbHgiLCJzY3JpcHRpb24iLCJwYXJzZXIiLCJpc0VtcHR5IiwiaGVhZGVyIiwicGFyc2VIZWFkZXIiLCJ1dHRlcmFuY2VzIiwicGFyc2VVdHRlcmFuY2VzIiwiZ2V0SGVhZGVyU3RyaW5nIiwidGV4dCIsImhlYWRlclJlZ0V4cCIsInZhbGlkYXRlSGVhZGVyIiwiRXJyb3IiLCJpc1N0cmluZyIsInRpdGxlIiwicGFyc2UiLCJoZWFkZXJTdHJpbmciLCJpc01pc3NpbmciLCJsaW5lRGF0YVJlZ0V4cCIsIm5ld2xpbmVSZWdFeHAiLCJ3b3JkVHlwZXMiLCJjcmVhdGVMaW5lc0hhc2giLCJsaW5lcyIsInNjaGVtYSIsInJlZHVjZSIsImhhc2giLCJsaW5lIiwiY29kZSIsImxpbmVEYXRhIiwicGFyc2VVdHRlcmFuY2UiLCJ1dHRlcmFuY2VTdHJpbmciLCJtYXAiLCJjb2RlcyIsImdldENvZGUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiZ2V0U2NoZW1hIiwibGluZXNIYXNoIiwibm9EYXRhIiwiZXZlcnkiLCJzcGVha2VyIiwicGFyc2VTcGVha2VyIiwic3AiLCJ0cmFuc2NyaXB0IiwicGFyc2VUcmFuc2NyaXB0IiwidHJhbnNjcmlwdGlvbiIsInBhcnNlVHJhbnNjcmlwdGlvbiIsInBob25ldGljIiwicGFyc2VQaG9uZXRpYyIsInBob24iLCJsaXRlcmFsIiwicGFyc2VMaXRlcmFsIiwidHJhbnNsYXRpb24iLCJwYXJzZVRyYW5zbGF0aW9uIiwibm90ZXMiLCJwYXJzZU5vdGVzIiwid29yZHMiLCJwYXJzZVdvcmRzIiwiZ2V0TGluZXMiLCJjdXN0b20iLCJwYXJzZUN1c3RvbSIsIndvcmRUcmFuc2NyaXB0aW9ucyIsInR4biIsIm1lcmdlVHJhbnNjcmlwdGlvbnMiLCJ1dHRlcmFuY2VUZXh0IiwibWVzc2FnZSIsInNpbmdsZUxpbmVzIiwibGluZUNvZGVzIiwiY3VzdG9tVHlwZXMiLCJnZXRMaW5lVHlwZSIsInR5cGVzIiwiZ3JvdXBMaW5lcyIsImN1c3RvbUNvZGVzIiwiaXNTaW5nbGVMaW5lIiwiaGFzU3ViVHlwZSIsImNsZWFuQnJhY2tldHMiLCJ2YWxpZGF0ZUxhbmd1YWdlcyIsImdldER1cGxpY2F0ZUdsb3NzZXMiLCJtb3JwaGVtZXMiLCJnbG9zc2VzIiwiZ2xvc3MiLCJnbG9zc0NvdW50cyIsImNvdW50cyIsImdsIiwiY3VycmVudENvdW50IiwiTWFwIiwiZnJvbSIsImNvdW50IiwiZ2V0Rmlyc3RHbG9zc0NvZGUiLCJpc0JhcmVTdHJpbmciLCJnZXREdXBsaWNhdGVNb3JwaGVtZXMiLCJnbG9zc1RvQ2hlY2siLCJkdXBsaWNhdGVHbG9zc2VzIiwiY3JlYXRlTW9ycGhlbWVzSGFzaCIsIndvcmRMaW5lcyIsInRva2VuaXplV29yZCIsIm1vcnBoZW1lUmVnRXhwIiwiZ2V0TWF0Y2hlcyIsImJyYWNrZXRlZCIsInVuYnJhY2tldGVkIiwicGFyc2VNb3JwaGVtZXMiLCJtb3JwaGVtZXNIYXNoIiwidmFsaWRhdGVOdW1JdGVtcyIsInppcCIsInNlcGFyYXRlSW5maXgiLCJmb3JFYWNoIiwiZHVwbGljYXRlTW9ycGhlbWVzIiwiZGlmZmVyZW5jZSIsImRpc2NvbnRpbnVvdXNNb3JwaGVtZXMiLCJkdXBzIiwibW9ycGhlbWUiLCJpbmZpeFJlZ0V4cCIsImZpbmQiLCJmaXJzdEdsb3NzIiwiaW5maXhQb3NpdGlvbiIsInByZSIsImluZml4IiwicG9zdCIsInJldmVyc2UiLCJub3RlTGluZXMiLCJudW1iZXJlZFJlZ0V4cCIsIm5vdGVSZWdFeHAiLCJyYXdDb2RlIiwibGFuZ3VhZ2UiLCJpc1ZhbGlkVGFnIiwic3BlYWtlclJlZ0V4cCIsImlzVmFsaWRTcGVha2VyIiwiZ2V0V29yZHNIYXNoIiwidG9rZW5pemVMaW5lIiwicGFyc2VXb3JkIiwiYW5hbHlzaXMiLCJ3b3JkUmVnRXhwIiwid29yZHNIYXNoIiwiZ2V0VXR0ZXJhbmNlc1N0cmluZyIsInBhcnQiLCJwb3AiLCJ1dHRlcmFuY2VzU3RyaW5nIiwiYmxhbmtMaW5lc1JlZ0V4cCIsInV0dGVyYW5jZXNTdHJpbmdzIiwiYnJhY2tldFR5cGVzIiwibGl0IiwidHJpbUJyYWNrZXRzIiwiYnJhY2tldHMiLCJ0cmltbWVkRW50cmllcyIsImxhbmciLCJzIiwiU2V0IiwieCIsImJhY2tzbGFzaFJlZ0V4cCIsIndvcmRMaW5lRW50cmllcyIsInJlZ0V4cCIsIm1hdGNoZXMiLCJ2YWxpZGF0ZVNjaGVtYSIsInJhd0NvZGVzIiwic29tZUxpbmVzSGF2ZUNvZGVzIiwic29tZSIsImFsbExpbmVzSGF2ZUNvZGVzIiwiaXNWYWxpZENvZGUiLCJjb2RlQ291bnRzIiwiaGFzTW9ycGhlbWVzIiwiaGFzR2xvc3NlcyIsIm51bWJlck5vdGVzIiwiaGFzQ29kZXMiLCJsaW5lQ291bnQiLCJmaWxsIiwidHlwZWRMaW5lcyIsInN1YnR5cGUiLCJjb2RlUmVnRXhwIiwibGFuZ1JlZ0V4cCIsInZhbGlkYXRlTGFuZ3VhZ2VUYWciLCJ0cmFuc2NyaXB0aW9ucyIsIml0ZW1MaXN0cyIsIm51bUl0ZW1zIiwidyIsInNhbWVOdW1JdGVtcyIsImxpc3QiLCJpdGVtcyIsIml0ZW0iLCJvIiwiYXJyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERB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ZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNjcmlwdGlvbjJkbHhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic2NyaXB0aW9uMmRseFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4Lm1qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKSgndW5zY29wYWJsZXMnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZScpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBoaWRlKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywgY3JlYXRlKG51bGwpKTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY29kZVBvaW50QXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLWF0Jyk7XG5cbi8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGNvZGVQb2ludEF0KFMsIGluZGV4LCB0cnVlKS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxuLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJykoJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHZhciByZXR1cm5NZXRob2QgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXR1cm5NZXRob2QuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcbiIsInZhciBNQVRDSCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlZ2V4cFtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgICB9IGNhdGNoIChmKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIEYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbnVsbDtcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEl0ZXJhdG9yc0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IEl0ZXJhdG9yc0NvcmUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xudmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cbiAgdmFyIGdldEl0ZXJhdGlvbk1ldGhvZCA9IGZ1bmN0aW9uIChLSU5EKSB7XG4gICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG4gIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcbiAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG4gIC8vIGZpeCBuYXRpdmVcbiAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG4gICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBoaWRlKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGhpZGUoSXRlcmFibGVQcm90b3R5cGUsIElURVJBVE9SLCBkZWZhdWx0SXRlcmF0b3IpO1xuICB9XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuICAvLyBleHBvcnQgYWRkaXRpb25hbCBtZXRob2RzXG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogZ2V0SXRlcmF0aW9uTWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyBkZWZhdWx0SXRlcmF0b3IgOiBnZXRJdGVyYXRpb25NZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiBnZXRJdGVyYXRpb25NZXRob2QoRU5UUklFUylcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoS0VZIGluIG1ldGhvZHMpIHtcbiAgICAgIGlmIChCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB8fCAhKEtFWSBpbiBJdGVyYWJsZVByb3RvdHlwZSkpIHtcbiAgICAgICAgcmVkZWZpbmUoSXRlcmFibGVQcm90b3R5cGUsIEtFWSwgbWV0aG9kc1tLRVldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgJGV4cG9ydCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfSwgbWV0aG9kcyk7XG4gIH1cblxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd3JhcHBlZC13ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHZhciBTeW1ib2wgPSBwYXRoLlN5bWJvbCB8fCAocGF0aC5TeW1ib2wgPSB7fSk7XG4gIGlmICghaGFzKFN5bWJvbCwgTkFNRSkpIGRlZmluZVByb3BlcnR5KFN5bWJvbCwgTkFNRSwge1xuICAgIHZhbHVlOiB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYoTkFNRSlcbiAgfSk7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgZXhpc3QgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBleGlzdCA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGhpZGUoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG4vLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbi8vIFdlZXggSlMgaGFzIGZyb3plbiBidWlsdC1pbiBwcm90b3R5cGVzLCBzbyB1c2UgdHJ5IC8gY2F0Y2ggd3JhcHBlclxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCByZXN1bHRbMF0gIT09ICdhJyB8fCByZXN1bHRbMV0gIT09ICdiJztcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYywgc2hhbSkge1xuICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgIH1cblxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9KTtcbiAgICB2YXIgc3RyaW5nTWV0aG9kID0gbWV0aG9kc1swXTtcbiAgICB2YXIgcmVnZXhNZXRob2QgPSBtZXRob2RzWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJpbmdNZXRob2QpO1xuICAgIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICAgIGlmIChzaGFtKSBoaWRlKFJlZ0V4cC5wcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcblxuLy8gYEZsYXR0ZW5JbnRvQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1mbGF0TWFwLyNzZWMtRmxhdHRlbkludG9BcnJheVxudmFyIGZsYXR0ZW5JbnRvQXJyYXkgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcmlnaW5hbCwgc291cmNlLCBzb3VyY2VMZW4sIHN0YXJ0LCBkZXB0aCwgbWFwcGVyLCB0aGlzQXJnKSB7XG4gIHZhciB0YXJnZXRJbmRleCA9IHN0YXJ0O1xuICB2YXIgc291cmNlSW5kZXggPSAwO1xuICB2YXIgbWFwRm4gPSBtYXBwZXIgPyBiaW5kKG1hcHBlciwgdGhpc0FyZywgMykgOiBmYWxzZTtcbiAgdmFyIGVsZW1lbnQ7XG5cbiAgd2hpbGUgKHNvdXJjZUluZGV4IDwgc291cmNlTGVuKSB7XG4gICAgaWYgKHNvdXJjZUluZGV4IGluIHNvdXJjZSkge1xuICAgICAgZWxlbWVudCA9IG1hcEZuID8gbWFwRm4oc291cmNlW3NvdXJjZUluZGV4XSwgc291cmNlSW5kZXgsIG9yaWdpbmFsKSA6IHNvdXJjZVtzb3VyY2VJbmRleF07XG5cbiAgICAgIGlmIChkZXB0aCA+IDAgJiYgaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgICB0YXJnZXRJbmRleCA9IGZsYXR0ZW5JbnRvQXJyYXkodGFyZ2V0LCBvcmlnaW5hbCwgZWxlbWVudCwgdG9MZW5ndGgoZWxlbWVudC5sZW5ndGgpLCB0YXJnZXRJbmRleCwgZGVwdGggLSAxKSAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPj0gMHgxRkZGRkZGRkZGRkZGRikgdGhyb3cgVHlwZUVycm9yKCdFeGNlZWQgdGhlIGFjY2VwdGFibGUgYXJyYXkgbGVuZ3RoJyk7XG4gICAgICAgIHRhcmdldFt0YXJnZXRJbmRleF0gPSBlbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0YXJnZXRJbmRleCsrO1xuICAgIH1cbiAgICBzb3VyY2VJbmRleCsrO1xuICB9XG4gIHJldHVybiB0YXJnZXRJbmRleDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkludG9BcnJheTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPSBub24gfHwgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FO1xuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoID8gd2luZG93XG4gIDogdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKS5kb2N1bWVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpKCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRlJyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIFdlYWtNYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJykuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVApIHtcbiAgdmFyIHN0b3JlID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBoaWRlKGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKSgnbWF0Y2gnKTtcblxuLy8gYElzUmVnRXhwYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzcmVnZXhwXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjbGFzc29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2JpbmQtY29udGV4dCcpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgQlJFQUsgPSB7fTtcblxudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZm4sIHRoYXQsIEVOVFJJRVMsIElURVJBVE9SKSB7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChmbiwgdGhhdCwgRU5UUklFUyA/IDIgOiAxKTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgc3RlcDtcblxuICBpZiAoSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IEVOVFJJRVMgPyBib3VuZEZ1bmN0aW9uKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGJvdW5kRnVuY3Rpb24oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gQlJFQUspIHJldHVybiBCUkVBSztcbiAgICAgIH0gcmV0dXJuO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTtcbiAgfVxuXG4gIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICBpZiAoY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgYm91bmRGdW5jdGlvbiwgc3RlcC52YWx1ZSwgRU5UUklFUykgPT09IEJSRUFLKSByZXR1cm4gQlJFQUs7XG4gIH1cbn07XG5cbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxuaWYgKEl0ZXJhdG9yUHJvdG90eXBlID09IHVuZGVmaW5lZCkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbmlmICghSVNfUFVSRSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgcmV0dXJuICFTdHJpbmcoU3ltYm9sKCkpO1xufSk7XG4iLCJ2YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBXZWFrTWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbChXZWFrTWFwKSk7XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgc2NyaXB0ID0gJ3NjcmlwdCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGpzID0gJ2phdmEnICsgc2NyaXB0ICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoanMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgc2NyaXB0ICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnLycgKyBzY3JpcHQgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxucmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJylbSUVfUFJPVE9dID0gdHJ1ZTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZURlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgIW5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIHZhbGlkYXRlU2V0UHJvdG90eXBlT2ZBcmd1bWVudHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtc2V0LXByb3RvdHlwZS1vZi1hcmd1bWVudHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgY29ycmVjdFNldHRlciA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgY29ycmVjdFNldHRlciA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICB2YWxpZGF0ZVNldFByb3RvdHlwZU9mQXJndW1lbnRzKE8sIHByb3RvKTtcbiAgICBpZiAoY29ycmVjdFNldHRlcikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCJ2YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgUmVmbGVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKS5SZWZsZWN0O1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBuYXRpdmVGdW5jdGlvblRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcobmF0aXZlRnVuY3Rpb25Ub1N0cmluZykuc3BsaXQoJ3RvU3RyaW5nJyk7XG5cbnJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKSgnaW5zcGVjdFNvdXJjZScsIGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gbmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbn0pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIGhpZGUodmFsdWUsICduYW1lJywga2V5KTtcbiAgICBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSkuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgaGlkZShPLCBrZXksIHZhbHVlKTtcbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChjbGFzc29mKFIpICE9PSAnUmVnRXhwJykge1xuICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG5cbiAgcmV0dXJuIHJlZ2V4cEV4ZWMuY2FsbChSLCBTKTtcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9yZWdleHAtZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvO1xuICB2YXIgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRDtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyByZS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIHJlZ2V4cEZsYWdzLmNhbGwocmUpKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGhpZGUoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQyA9IGdldEJ1aWx0SW4oQ09OU1RSVUNUT1JfTkFNRSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkZWZpbmVQcm9wZXJ0eShDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMC4xJyxcbiAgbW9kZTogcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJykoJ3NwZWNpZXMnKTtcblxuLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBkZWZhdWx0Q29uc3RydWN0b3IgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbi8vIENPTlZFUlRfVE9fU1RSSU5HOiB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIENPTlZFUlRfVE9fU1RSSU5HOiBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHBvcywgQ09OVkVSVF9UT19TVFJJTkcpIHtcbiAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGF0KSk7XG4gIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlcihwb3MpO1xuICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgZmlyc3QgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgfHwgKHNlY29uZCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgID8gQ09OVkVSVF9UT19TVFJJTkcgPyBTLmNoYXJBdChwb3NpdGlvbikgOiBmaXJzdFxuICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2UgPSAnWycgKyByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKSArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gMSAtPiBTdHJpbmcjdHJpbVN0YXJ0XG4vLyAyIC0+IFN0cmluZyN0cmltRW5kXG4vLyAzIC0+IFN0cmluZyN0cmltXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJpbmcsIFRZUEUpIHtcbiAgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoc3RyaW5nKSk7XG4gIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICByZXR1cm4gc3RyaW5nO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGxlbmd0aCwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhwcm90bykgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH1cbn07XG4iLCIvLyBoZWxwZXIgZm9yIFN0cmluZyN7c3RhcnRzV2l0aCwgZW5kc1dpdGgsIGluY2x1ZGVzfVxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHNlYXJjaFN0cmluZywgTkFNRSkge1xuICBpZiAoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5nLnByb3RvdHlwZS4nICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4XCIpO1xuICB9IHJldHVybiBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGF0KSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpLlN5bWJvbDtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV1cbiAgICB8fCAoTkFUSVZFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZsYXR0ZW4taW50by1hcnJheScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmxhdE1hcGAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1mbGF0TWFwXG5yZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0JykoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgZmxhdE1hcDogZnVuY3Rpb24gZmxhdE1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIHNvdXJjZUxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgQTtcbiAgICBhRnVuY3Rpb24oY2FsbGJhY2tmbik7XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICBBLmxlbmd0aCA9IGZsYXR0ZW5JbnRvQXJyYXkoQSwgTywgTywgc291cmNlTGVuLCAwLCAxLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZsYXR0ZW4taW50by1hcnJheScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmxhdGAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1mbGF0TWFwXG5yZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0JykoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgZmxhdDogZnVuY3Rpb24gZmxhdCgvKiBkZXB0aEFyZyA9IDEgKi8pIHtcbiAgICB2YXIgZGVwdGhBcmcgPSBhcmd1bWVudHNbMF07XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgc291cmNlTGVuID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIEEubGVuZ3RoID0gZmxhdHRlbkludG9BcnJheShBLCBPLCBPLCBzb3VyY2VMZW4sIDAsIGRlcHRoQXJnID09PSB1bmRlZmluZWQgPyAxIDogdG9JbnRlZ2VyKGRlcHRoQXJnKSk7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZW50cmllc1xuLy8gYEFycmF5LnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5rZXlzXG4vLyBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4vLyBgQ3JlYXRlQXJyYXlJdGVyYXRvcmAgaW50ZXJuYWwgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVhcnJheWl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZUl0ZXJhdG9yKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogQVJSQVlfSVRFUkFUT1IsXG4gICAgdGFyZ2V0OiB0b0luZGV4ZWRPYmplY3QoaXRlcmF0ZWQpLCAvLyB0YXJnZXRcbiAgICBpbmRleDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgICBraW5kOiBraW5kICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgfSk7XG4vLyBgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlbWFwcGVkYXJndW1lbnRzb2JqZWN0XG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIvLyB0aGlzIG1ldGhvZCB3YXMgYWRkZWQgdG8gdW5zY29wYWJsZXMgYWZ0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGluIHBvcHVsYXIgZW5naW5lcywgc28gaXQncyBtb3ZlZCB0byBhIHNlcGFyYXRlIG1vZHVsZVxucmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpKCdmbGF0TWFwJyk7XG4iLCIvLyB0aGlzIG1ldGhvZCB3YXMgYWRkZWQgdG8gdW5zY29wYWJsZXMgYWZ0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGluIHBvcHVsYXIgZW5naW5lcywgc28gaXQncyBtb3ZlZCB0byBhIHNlcGFyYXRlIG1vZHVsZVxucmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpKCdmbGF0Jyk7XG4iLCJ2YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZnJvbUVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LWZyb20tZW50cmllc1xucmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIGZyb21FbnRyaWVzOiBmdW5jdGlvbiBmcm9tRW50cmllcyhpdGVyYWJsZSkge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAoaywgdikge1xuICAgICAgY3JlYXRlUHJvcGVydHkob2JqLCBrLCB2KTtcbiAgICB9LCB1bmRlZmluZWQsIHRydWUpO1xuICAgIHJldHVybiBvYmo7XG4gIH1cbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgTUFUQ0ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKSgnbWF0Y2gnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xudmFyIGdldEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBOYXRpdmVSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IE5hdGl2ZVJlZ0V4cC5wcm90b3R5cGU7XG52YXIgcmUxID0gL2EvZztcbnZhciByZTIgPSAvYS9nO1xuXG4vLyBcIm5ld1wiIHNob3VsZCBjcmVhdGUgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z1xudmFyIENPUlJFQ1RfTkVXID0gbmV3IE5hdGl2ZVJlZ0V4cChyZTEpICE9PSByZTE7XG5cbnZhciBGT1JDRUQgPSBpc0ZvcmNlZCgnUmVnRXhwJywgREVTQ1JJUFRPUlMgJiYgKCFDT1JSRUNUX05FVyB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJlMltNQVRDSF0gPSBmYWxzZTtcbiAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcbiAgcmV0dXJuIE5hdGl2ZVJlZ0V4cChyZTEpICE9IHJlMSB8fCBOYXRpdmVSZWdFeHAocmUyKSA9PSByZTIgfHwgTmF0aXZlUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpO1xuXG4vLyBgUmVnRXhwYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLWNvbnN0cnVjdG9yXG5pZiAoRk9SQ0VEKSB7XG4gIHZhciBSZWdFeHBXcmFwcGVyID0gZnVuY3Rpb24gUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSB7XG4gICAgdmFyIHRoaXNJc1JlZ0V4cCA9IHRoaXMgaW5zdGFuY2VvZiBSZWdFeHBXcmFwcGVyO1xuICAgIHZhciBwYXR0ZXJuSXNSZWdFeHAgPSBpc1JlZ0V4cChwYXR0ZXJuKTtcbiAgICB2YXIgZmxhZ3NBcmVVbmRlZmluZWQgPSBmbGFncyA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhdGhpc0lzUmVnRXhwICYmIHBhdHRlcm5Jc1JlZ0V4cCAmJiBwYXR0ZXJuLmNvbnN0cnVjdG9yID09PSBSZWdFeHBXcmFwcGVyICYmIGZsYWdzQXJlVW5kZWZpbmVkID8gcGF0dGVyblxuICAgICAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBOYXRpdmVSZWdFeHAocGF0dGVybklzUmVnRXhwICYmICFmbGFnc0FyZVVuZGVmaW5lZCA/IHBhdHRlcm4uc291cmNlIDogcGF0dGVybiwgZmxhZ3MpXG4gICAgICAgIDogTmF0aXZlUmVnRXhwKChwYXR0ZXJuSXNSZWdFeHAgPSBwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwV3JhcHBlcilcbiAgICAgICAgICA/IHBhdHRlcm4uc291cmNlXG4gICAgICAgICAgOiBwYXR0ZXJuLCBwYXR0ZXJuSXNSZWdFeHAgJiYgZmxhZ3NBcmVVbmRlZmluZWQgPyBnZXRGbGFncy5jYWxsKHBhdHRlcm4pIDogZmxhZ3MpXG4gICAgICAsIHRoaXNJc1JlZ0V4cCA/IHRoaXMgOiBSZWdFeHBQcm90b3R5cGUsIFJlZ0V4cFdyYXBwZXIpO1xuICB9O1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAga2V5IGluIFJlZ0V4cFdyYXBwZXIgfHwgZGVmaW5lUHJvcGVydHkoUmVnRXhwV3JhcHBlciwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5hdGl2ZVJlZ0V4cFtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgTmF0aXZlUmVnRXhwW2tleV0gPSBpdDsgfVxuICAgIH0pO1xuICB9O1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlUmVnRXhwKTtcbiAgdmFyIGkgPSAwO1xuICB3aGlsZSAoaSA8IGtleXMubGVuZ3RoKSBwcm94eShrZXlzW2krK10pO1xuICBSZWdFeHBQcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWdFeHBXcmFwcGVyO1xuICBSZWdFeHBXcmFwcGVyLnByb3RvdHlwZSA9IFJlZ0V4cFByb3RvdHlwZTtcbiAgcmVkZWZpbmUoZ2xvYmFsLCAnUmVnRXhwJywgUmVnRXhwV3JhcHBlcik7XG59XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAtQEBzcGVjaWVzXG5yZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKSgnUmVnRXhwJyk7XG4iLCIvLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xuaWYgKHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSB7XG4gIHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpXG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIG5hdGl2ZVRvU3RyaW5nID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBOT1RfR0VORVJJQyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZVRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbnZhciBJTkNPUlJFQ1RfTkFNRSA9IG5hdGl2ZVRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoTk9UX0dFTkVSSUMgfHwgSU5DT1JSRUNUX05BTUUpIHtcbiAgcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG4gICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIURFU0NSSVBUT1JTICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyBmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtc3RyaW5nLW1ldGhvZC1hcmd1bWVudHMnKTtcbnZhciBFTkRTX1dJVEggPSAnZW5kc1dpdGgnO1xudmFyIG5hdGl2ZUVuZHNXaXRoID0gJydbRU5EU19XSVRIXTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxudmFyIENPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJykoRU5EU19XSVRIKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGhgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5lbmRzd2l0aFxucmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIUNPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDIH0sIHtcbiAgZW5kc1dpdGg6IGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaFN0cmluZyAvKiAsIGVuZFBvc2l0aW9uID0gQGxlbmd0aCAqLykge1xuICAgIHZhciB0aGF0ID0gdmFsaWRhdGVBcmd1bWVudHModGhpcywgc2VhcmNoU3RyaW5nLCBFTkRTX1dJVEgpO1xuICAgIHZhciBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aCk7XG4gICAgdmFyIGVuZCA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBtaW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pO1xuICAgIHZhciBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gbmF0aXZlRW5kc1dpdGhcbiAgICAgID8gbmF0aXZlRW5kc1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGVuZClcbiAgICAgIDogdGhhdC5zbGljZShlbmQgLSBzZWFyY2gubGVuZ3RoLCBlbmQpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLXN0cmluZy1tZXRob2QtYXJndW1lbnRzJyk7XG52YXIgSU5DTFVERVMgPSAnaW5jbHVkZXMnO1xuXG52YXIgQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMnKShJTkNMVURFUyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbnJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKSh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+dmFsaWRhdGVBcmd1bWVudHModGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQG1hdGNoIGxvZ2ljXG5yZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpKFxuICAnbWF0Y2gnLFxuICAxLFxuICBmdW5jdGlvbiAoTUFUQ0gsIG5hdGl2ZU1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgICAgdmFyIG1hdGNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIgIT09IHVuZGVmaW5lZCA/IG1hdGNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgICAgfSxcbiAgICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1hdGNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcblxuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICB2YXIgQSA9IFtdO1xuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgICAgbisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgICB9XG4gICAgXTtcbiAgfVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCZgJ118XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCZgJ118XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbnJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJykoXG4gICdyZXBsYWNlJyxcbiAgMixcbiAgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICAgIHJldHVybiByZXBsYWNlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyByZXBsYWNlci5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICAgIH0sXG4gICAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVSZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuXG4gICAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICAgIHZhciBtYXRjaGVkID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gICAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgICAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVSZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICAgIHN3aXRjaCAoY2guY2hhckF0KDApKSB7XG4gICAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICAgIGNhc2UgJ2AnOiByZXR1cm4gc3RyLnNsaWNlKDAsIHBvc2l0aW9uKTtcbiAgICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbY2guc2xpY2UoMSwgLTEpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICAgIHZhciBuID0gK2NoO1xuICAgICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICB2YXIgZiA9IGZsb29yKG4gLyAxMCk7XG4gICAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYXJyYXlQdXNoID0gW10ucHVzaDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuICFSZWdFeHAoTUFYX1VJTlQzMiwgJ3knKTsgfSk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJykoXG4gICdzcGxpdCcsXG4gIDIsXG4gIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHZhciBpbnRlcm5hbFNwbGl0O1xuICAgIGlmIChcbiAgICAgICdhYmJjJy5zcGxpdCgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICAgJ3Rlc3QnLnNwbGl0KC8oPzopLywgLTEpLmxlbmd0aCAhPSA0IHx8XG4gICAgICAnYWInLnNwbGl0KC8oPzphYikqLykubGVuZ3RoICE9IDIgfHxcbiAgICAgICcuJy5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGggIT0gNCB8fFxuICAgICAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxuICAgICAgJycuc3BsaXQoLy4/LykubGVuZ3RoXG4gICAgKSB7XG4gICAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHJldHVybiBbc3RyaW5nXTtcbiAgICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZVNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHkubGFzdEluZGV4O1xuICAgICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nLmxlbmd0aCkgYXJyYXlQdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBsaW0pIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VwYXJhdG9yQ29weS5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dC5sZW5ndGggPiBsaW0gPyBvdXRwdXQuc2xpY2UoMCwgbGltKSA6IG91dHB1dDtcbiAgICAgIH07XG4gICAgLy8gQ2hha3JhLCBWOFxuICAgIH0gZWxzZSBpZiAoJzAnLnNwbGl0KHVuZGVmaW5lZCwgMCkubGVuZ3RoKSB7XG4gICAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBuYXRpdmVTcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaW50ZXJuYWxTcGxpdCA9IG5hdGl2ZVNwbGl0O1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgfSxcbiAgICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgICAgLy9cbiAgICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gbmF0aXZlU3BsaXQpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICB2YXIgcSA9IDA7XG4gICAgICAgIHZhciBBID0gW107XG4gICAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgICAoZSA9IG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgICAgcmV0dXJuIEE7XG4gICAgICB9XG4gICAgXTtcbiAgfSxcbiAgIVNVUFBPUlRTX1lcbik7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtc3RyaW5nLW1ldGhvZC1hcmd1bWVudHMnKTtcbnZhciBTVEFSVFNfV0lUSCA9ICdzdGFydHNXaXRoJztcbnZhciBDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpKFNUQVJUU19XSVRIKTtcbnZhciBuYXRpdmVTdGFydHNXaXRoID0gJydbU1RBUlRTX1dJVEhdO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3RhcnRzd2l0aFxucmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIUNPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDIH0sIHtcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICB2YXIgdGhhdCA9IHZhbGlkYXRlQXJndW1lbnRzKHRoaXMsIHNlYXJjaFN0cmluZywgU1RBUlRTX1dJVEgpO1xuICAgIHZhciBpbmRleCA9IHRvTGVuZ3RoKE1hdGgubWluKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0aGF0Lmxlbmd0aCkpO1xuICAgIHZhciBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gbmF0aXZlU3RhcnRzV2l0aFxuICAgICAgPyBuYXRpdmVTdGFydHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBpbmRleClcbiAgICAgIDogdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbFN0cmluZ1RyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKTtcbnZhciBGT1JDRUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZm9yY2VkLXN0cmluZy10cmltLW1ldGhvZCcpKCd0cmltJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG5yZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0JykoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiBpbnRlcm5hbFN0cmluZ1RyaW0odGhpcywgMyk7XG4gIH1cbn0pO1xuIiwiLy8gYFN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25gIGdldHRlclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvblxuJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgTmF0aXZlU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpLlN5bWJvbDtcblxuaWYgKERFU0NSSVBUT1JTICYmIHR5cGVvZiBOYXRpdmVTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAoISgnZGVzY3JpcHRpb24nIGluIE5hdGl2ZVN5bWJvbC5wcm90b3R5cGUpIHx8XG4gIC8vIFNhZmFyaSAxMiBidWdcbiAgTmF0aXZlU3ltYm9sKCkuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZFxuKSkge1xuICB2YXIgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlID0ge307XG4gIC8vIHdyYXAgU3ltYm9sIGNvbnN0cnVjdG9yIGZvciBjb3JyZWN0IHdvcmsgd2l0aCB1bmRlZmluZWQgZGVzY3JpcHRpb25cbiAgdmFyIFN5bWJvbFdyYXBwZXIgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyBpbnN0YW5jZW9mIFN5bWJvbFdyYXBwZXJcbiAgICAgID8gbmV3IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbilcbiAgICAgIC8vIGluIEVkZ2UgMTMsIFN0cmluZyhTeW1ib2wodW5kZWZpbmVkKSkgPT09ICdTeW1ib2wodW5kZWZpbmVkKSdcbiAgICAgIDogZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/IE5hdGl2ZVN5bWJvbCgpIDogTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICBpZiAoZGVzY3JpcHRpb24gPT09ICcnKSBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmVbcmVzdWx0XSA9IHRydWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhTeW1ib2xXcmFwcGVyLCBOYXRpdmVTeW1ib2wpO1xuICB2YXIgc3ltYm9sUHJvdG90eXBlID0gU3ltYm9sV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVTeW1ib2wucHJvdG90eXBlO1xuICBzeW1ib2xQcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeW1ib2xXcmFwcGVyO1xuXG4gIHZhciBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIG5hdGl2ZSA9IFN0cmluZyhOYXRpdmVTeW1ib2woJ3Rlc3QnKSkgPT0gJ1N5bWJvbCh0ZXN0KSc7XG4gIHZhciByZWdleHAgPSAvXlN5bWJvbFxcKCguKilcXClbXildKyQvO1xuICBkZWZpbmVQcm9wZXJ0eShzeW1ib2xQcm90b3R5cGUsICdkZXNjcmlwdGlvbicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHZhciBzeW1ib2wgPSBpc09iamVjdCh0aGlzKSA/IHRoaXMudmFsdWVPZigpIDogdGhpcztcbiAgICAgIHZhciBzdHJpbmcgPSBzeW1ib2xUb1N0cmluZy5jYWxsKHN5bWJvbCk7XG4gICAgICBpZiAoaGFzKEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSwgc3ltYm9sKSkgcmV0dXJuICcnO1xuICAgICAgdmFyIGRlc2MgPSBuYXRpdmUgPyBzdHJpbmcuc2xpY2UoNywgLTEpIDogc3RyaW5nLnJlcGxhY2UocmVnZXhwLCAnJDEnKTtcbiAgICAgIHJldHVybiBkZXNjID09PSAnJyA/IHVuZGVmaW5lZCA6IGRlc2M7XG4gICAgfVxuICB9KTtcblxuICByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0JykoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7IFN5bWJvbDogU3ltYm9sV3JhcHBlciB9KTtcbn1cbiIsIi8vIGBTeW1ib2wucmVwbGFjZWAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5yZXBsYWNlXG5yZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJykoJ3JlcGxhY2UnKTtcbiIsInZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIEFycmF5SXRlcmF0b3JNZXRob2RzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gQXJyYXlJdGVyYXRvck1ldGhvZHMudmFsdWVzO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gIT09IEFycmF5VmFsdWVzKSB0cnkge1xuICAgICAgaGlkZShDb2xsZWN0aW9uUHJvdG90eXBlLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSA9IEFycmF5VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoIUNvbGxlY3Rpb25Qcm90b3R5cGVbVE9fU1RSSU5HX1RBR10pIGhpZGUoQ29sbGVjdGlvblByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgQ09MTEVDVElPTl9OQU1FKTtcbiAgICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIGZvciAodmFyIE1FVEhPRF9OQU1FIGluIEFycmF5SXRlcmF0b3JNZXRob2RzKSB7XG4gICAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSAhPT0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKSB0cnkge1xuICAgICAgICBoaWRlKENvbGxlY3Rpb25Qcm90b3R5cGUsIE1FVEhPRF9OQU1FLCBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgQ29sbGVjdGlvblByb3RvdHlwZVtNRVRIT0RfTkFNRV0gPSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHR5cGVzIGZyb20gJy4vdHlwZXMubWpzJztcclxuXHJcbmV4cG9ydCB7IHR5cGVzIH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICBgZ2xgLFxyXG4gIGBsaXRgLFxyXG4gIGBtYCxcclxuICBgbmAsXHJcbiAgYHBob25gLFxyXG4gIGBzcGAsXHJcbiAgYHRsbmAsXHJcbiAgYHRyc2AsXHJcbiAgYHR4bmAsXHJcbl07XHJcbiIsImltcG9ydCBwYXJzZUhlYWRlciAgICAgZnJvbSAnLi9wYXJzZUhlYWRlci5tanMnO1xyXG5pbXBvcnQgcGFyc2VVdHRlcmFuY2VzIGZyb20gJy4vcGFyc2VVdHRlcmFuY2VzLm1qcyc7XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBzY3JpcHRpb24tZm9ybWF0IHRleHQgdG8gREx4IGZvcm1hdFxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHNjcmlwdGlvbiBUaGUgdGV4dCBvZiB0aGUgU2NyaXB0aW9uIGZpbGUgdG8gcGFyc2VcclxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgUmV0dXJucyBhIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0IGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIERMeCBUZXh0IGZvcm1hdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2NyaXB0aW9uMmRseChzY3JpcHRpb24gPSBgYCwgeyBwYXJzZXIgfSA9IHt9KSB7XHJcblxyXG4gIGNvbnN0IGlzRW1wdHkgPSBzY3JpcHRpb24udHJpbSgpID09PSBgYDtcclxuXHJcbiAgaWYgKGlzRW1wdHkpIHJldHVybiB7fTtcclxuXHJcbiAgY29uc3QgaGVhZGVyICAgICA9IHBhcnNlSGVhZGVyKHNjcmlwdGlvbiwgcGFyc2VyKTtcclxuICBjb25zdCB1dHRlcmFuY2VzID0gcGFyc2VVdHRlcmFuY2VzKHNjcmlwdGlvbik7XHJcblxyXG4gIHJldHVybiB7IC4uLmhlYWRlciwgdXR0ZXJhbmNlcyB9O1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vdXRpbGl0aWVzL2luZGV4Lm1qcyc7XHJcblxyXG4vKipcclxuICogRXh0cmFjdHMgdGhlIHRleHQgb2YgdGhlIGhlYWRlciBtZXRhZGF0YSwgaWYgcHJlc2VudFxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHRleHQgVGhlIHNjcmlwdGlvbiB0ZXh0XHJcbiAqIEByZXR1cm4ge1N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGdldEhlYWRlclN0cmluZyh0ZXh0KSB7XHJcblxyXG4gIGNvbnN0IGhlYWRlclJlZ0V4cCA9IC8tLS0oPzxoZWFkZXI+Lis/KS0tLS9nc3U7XHJcbiAgY29uc3QgcmVzdWx0ICAgICAgID0gaGVhZGVyUmVnRXhwLmV4ZWModGV4dCk7XHJcblxyXG4gIHJldHVybiByZXN1bHQgPyByZXN1bHQuZ3JvdXBzLmhlYWRlci50cmltKCkgOiBudWxsO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyB0aGUgZGF0YSB3aXRoaW4gdGhlIG1ldGFkYXRhIGhlYWRlclxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IGhlYWRlciBUaGUgbWV0YWRhdGEgaGVhZGVyIHRvIHZhbGlkYXRlLCBhcyBhIEphdmFTY3JpcHQgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUhlYWRlcihoZWFkZXIpIHtcclxuXHJcbiAgaWYgKCFoZWFkZXIpIHRocm93IG5ldyBFcnJvcihgVGhlIG1ldGFkYXRhIGhlYWRlciBtdXN0IG5vdCBiZSBlbXB0eS5gKTtcclxuICBpZiAoaXNTdHJpbmcoaGVhZGVyKSkgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWV0YWRhdGEgaGVhZGVyIGNvdWxkIG5vdCBiZSBwYXJzZWQgYXMgYSBKYXZhU2NyaXB0IE9iamVjdC5gKTtcclxuXHJcbiAgY29uc3QgeyB0aXRsZSwgdXR0ZXJhbmNlcyB9ID0gaGVhZGVyO1xyXG5cclxuICBpZiAoIXRpdGxlKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtZXRhZGF0YSBoZWFkZXIgbXVzdCBoYXZlIGEgXCJ0aXRsZVwiIGF0dHJpYnV0ZS5gKTtcclxuICBpZiAodXR0ZXJhbmNlcykgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWV0YWRhdGEgaGVhZGVyIG11c3Qgbm90IGhhdmUgYW4gXCJ1dHRlcmFuY2VzXCIgYXR0cmlidXRlLmApO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHJpZXZlcyB0aGUgaGVhZGVyIGZyb20gYSBzY3JpcHRpb24gZmlsZSBhbmQgcmV0dXJucyB0aGUgbWV0YWRhdGEgYXMgYSBKYXZhU2NyaXB0IG9iamVjdCBjb250YWluaW5nIGVpdGhlciBhIHByb3BlcnR5IGBoZWFkZXJgIChpZiBubyBwYXJzZXIgaXMgcHJvdmlkZWQpIG9yIGFsbCB0aGUgcHJvcGVydGllcyBpbiB0aGUgaGVhZGVyIGlmIG9uZSBpcy5cclxuICogQHBhcmFtICB7U3RyaW5nfSAgIHRleHQgICBUaGUgc2NyaXB0aW9uIHRleHRcclxuICogQHBhcmFtICB7RnVuY3Rpb259IHBhcnNlciBBIFlBTUwgcGFyc2VyIHRvIHVzZSB0byBwYXJzZXIgdGhlIGhlYWRlclxyXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgIFRoZSB0ZXh0IG1ldGFkYXRhLCBhcyBhIEphdmFTY3JpcHQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUhlYWRlcih0ZXh0LCBwYXJzZSkge1xyXG5cclxuICBjb25zdCBoZWFkZXJTdHJpbmcgPSBnZXRIZWFkZXJTdHJpbmcodGV4dCk7XHJcbiAgY29uc3QgaXNNaXNzaW5nICAgID0gaGVhZGVyU3RyaW5nID09PSBudWxsO1xyXG5cclxuICBpZiAoaXNNaXNzaW5nKSByZXR1cm4ge307XHJcblxyXG4gIGlmIChwYXJzZSkge1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IHBhcnNlKGhlYWRlclN0cmluZyk7XHJcblxyXG4gICAgdmFsaWRhdGVIZWFkZXIoaGVhZGVyKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiB7IGhlYWRlcjogaGVhZGVyU3RyaW5nIH07XHJcblxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlXHJcbiAgbWF4LXN0YXRlbWVudHMsXHJcbiovXHJcblxyXG5pbXBvcnQgcGFyc2VDdXN0b20gICAgICAgIGZyb20gJy4vcGFyc2VDdXN0b20ubWpzJztcclxuaW1wb3J0IHBhcnNlTGl0ZXJhbCAgICAgICBmcm9tICcuL3BhcnNlTGl0ZXJhbC5tanMnO1xyXG5pbXBvcnQgcGFyc2VOb3RlcyAgICAgICAgIGZyb20gJy4vcGFyc2VOb3Rlcy5tanMnO1xyXG5pbXBvcnQgcGFyc2VQaG9uZXRpYyAgICAgIGZyb20gJy4vcGFyc2VQaG9uZXRpYy5tanMnO1xyXG5pbXBvcnQgcGFyc2VTcGVha2VyICAgICAgIGZyb20gJy4vcGFyc2VTcGVha2VyLm1qcyc7XHJcbmltcG9ydCBwYXJzZVRyYW5zY3JpcHQgICAgZnJvbSAnLi9wYXJzZVRyYW5zY3JpcHQubWpzJztcclxuaW1wb3J0IHBhcnNlVHJhbnNjcmlwdGlvbiBmcm9tICcuL3BhcnNlVHJhbnNjcmlwdGlvbi5tanMnO1xyXG5pbXBvcnQgcGFyc2VUcmFuc2xhdGlvbiAgIGZyb20gJy4vcGFyc2VUcmFuc2xhdGlvbi5tanMnO1xyXG5pbXBvcnQgcGFyc2VXb3JkcyAgICAgICAgIGZyb20gJy4vcGFyc2VXb3Jkcy5tanMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRDb2RlLFxyXG4gIGdldExpbmVzLFxyXG4gIGdldFNjaGVtYSxcclxuICBtZXJnZVRyYW5zY3JpcHRpb25zLFxyXG59IGZyb20gJy4uL3V0aWxpdGllcy9pbmRleC5tanMnO1xyXG5cclxuY29uc3QgbGluZURhdGFSZWdFeHAgPSAvXlxcXFwoPzooPzpcXHd8LSkrKSg/PGxpbmVEYXRhPi4qKSQvdTtcclxuY29uc3QgbmV3bGluZVJlZ0V4cCAgPSAvXFxyP1xcbi9ndTtcclxuXHJcbmNvbnN0IHdvcmRUeXBlcyA9IFtgZ2xgLCBgbWAsIGB3YCwgYHdsdGBdO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIGxpbmVzIGhhc2ggZnJvbSBhbiBhcnJheSBvZiBzdHJpbmdzIGFuZCBhbiBhcnJheSBvZiBsaW5lIGNvZGVzXHJcbiAqIEBwYXJhbSAge0FycmF5fSAgbGluZXNcclxuICogQHBhcmFtICB7QXJyYXl9ICBzY2hlbWFcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlTGluZXNIYXNoKGxpbmVzLCBzY2hlbWEpIHtcclxuICByZXR1cm4gbGluZXMucmVkdWNlKChoYXNoLCBsaW5lLCBpKSA9PiB7XHJcbiAgICBjb25zdCBjb2RlICA9IHNjaGVtYVtpXSB8fCBgbi0ke2l9YDsgLy8gdHJlYXQgZXh0cmEgbGluZXMgYXMgbm90ZXNcclxuICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaChsaW5lRGF0YVJlZ0V4cCk7XHJcbiAgICBjb25zdCBkYXRhICA9IChtYXRjaCA/IG1hdGNoLmdyb3Vwcy5saW5lRGF0YSA6IGxpbmUpLnRyaW0oKTtcclxuICAgIGhhc2hbY29kZV0gID0gZGF0YTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgcmV0dXJuIGhhc2g7XHJcbiAgfSwge30pO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2VzIGFuIGluZGl2aWR1YWwgdXR0ZXJhbmNlIGFzIGEgc3RyaW5nIGFuZCByZXR1cm5zIGl0IGFzIGEgREx4IFV0dGVyYW5jZSBvYmplY3RcclxuICogQHBhcmFtICB7U3RyaW5nfSB1dHRlcmFuY2VTdHJpbmcgVGhlIHV0dGVyYW5jZSBzdHJpbmcgdG8gcGFyc2VcclxuICogQHBhcmFtICB7QXJyYXl9ICBzY2hlbWEgICAgICAgICAgQW4gaW50ZXJsaW5lYXIgZ2xvc3Mgc2NoZW1hLCBhcyBhbiBhcnJheSBvZiBiYWNrc2xhc2ggY29kZXMgKHdpdGhvdXQgbGVhZGluZyBzbGFzaGVzKVxyXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICBSZXR1cm5zIGEgREx4IFV0dGVyYW5jZSBvYmplY3QsIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gZGF0YVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VVdHRlcmFuY2UodXR0ZXJhbmNlU3RyaW5nLCBzY2hlbWEpIHtcclxuXHJcbiAgdHJ5IHtcclxuXHJcbiAgICBjb25zdCBsaW5lcyA9IHV0dGVyYW5jZVN0cmluZ1xyXG4gICAgLnNwbGl0KG5ld2xpbmVSZWdFeHApXHJcbiAgICAubWFwKGxpbmUgPT4gbGluZS50cmltKCkpO1xyXG5cclxuICAgIGNvbnN0IGNvZGVzID0gbGluZXMubWFwKGdldENvZGUpLmZpbHRlcihCb29sZWFuKTtcclxuXHJcbiAgICBpZiAoY29kZXMubGVuZ3RoKSBzY2hlbWEgPSBnZXRTY2hlbWEodXR0ZXJhbmNlU3RyaW5nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG5cclxuICAgIGNvbnN0IGxpbmVzSGFzaCA9IGNyZWF0ZUxpbmVzSGFzaChsaW5lcywgc2NoZW1hKTtcclxuICAgIGNvbnN0IG5vRGF0YSAgICA9ICFPYmplY3QudmFsdWVzKGxpbmVzSGFzaCkuZXZlcnkoQm9vbGVhbik7XHJcblxyXG4gICAgaWYgKG5vRGF0YSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gRXh0cmFjdCBrbm93biB1dHRlcmFuY2UgcHJvcGVydGllcyBhbmQgcG9wdWxhdGUgdGhlIHV0dGVyYW5jZVxyXG5cclxuICAgIGNvbnN0IHNwZWFrZXIgICAgID0gcGFyc2VTcGVha2VyKGxpbmVzSGFzaC5zcCk7XHJcbiAgICBjb25zdCB0cmFuc2NyaXB0ICA9IHBhcnNlVHJhbnNjcmlwdChsaW5lc0hhc2gpO1xyXG4gICAgbGV0IHRyYW5zY3JpcHRpb24gPSBwYXJzZVRyYW5zY3JpcHRpb24obGluZXNIYXNoKTtcclxuICAgIGNvbnN0IHBob25ldGljICAgID0gcGFyc2VQaG9uZXRpYyhsaW5lc0hhc2gucGhvbik7XHJcbiAgICBjb25zdCBsaXRlcmFsICAgICA9IHBhcnNlTGl0ZXJhbChsaW5lc0hhc2gpO1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBwYXJzZVRyYW5zbGF0aW9uKGxpbmVzSGFzaCkgfHwgYGA7XHJcbiAgICBjb25zdCBub3RlcyAgICAgICA9IHBhcnNlTm90ZXMobGluZXNIYXNoKTtcclxuICAgIGNvbnN0IHdvcmRzICAgICAgID0gcGFyc2VXb3JkcyhnZXRMaW5lcyh3b3JkVHlwZXMsIGxpbmVzSGFzaCkgfHwge30pO1xyXG4gICAgY29uc3QgY3VzdG9tICAgICAgPSBwYXJzZUN1c3RvbShsaW5lc0hhc2gpO1xyXG5cclxuICAgIGlmICghdHJhbnNjcmlwdGlvbikge1xyXG4gICAgICBjb25zdCB3b3JkVHJhbnNjcmlwdGlvbnMgPSB3b3Jkcy5tYXAoKHsgdHJhbnNjcmlwdGlvbjogdHhuIH0pID0+IHR4bik7XHJcbiAgICAgIHRyYW5zY3JpcHRpb24gPSBtZXJnZVRyYW5zY3JpcHRpb25zKHdvcmRUcmFuc2NyaXB0aW9ucywgYCBgKSB8fCBgYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zcGVha2VyID8geyBzcGVha2VyIH0gOiB7fSxcclxuICAgICAgLi4udHJhbnNjcmlwdCA/IHsgdHJhbnNjcmlwdCB9IDoge30sXHJcbiAgICAgIHRyYW5zY3JpcHRpb24sXHJcbiAgICAgIC4uLnBob25ldGljID8geyBwaG9uZXRpYyB9IDoge30sXHJcbiAgICAgIC4uLmxpdGVyYWwgPyB7IGxpdGVyYWwgfSA6IHt9LFxyXG4gICAgICB0cmFuc2xhdGlvbixcclxuICAgICAgLi4ubm90ZXMubGVuZ3RoID8geyBub3RlcyB9IDoge30sXHJcbiAgICAgIC4uLndvcmRzLmxlbmd0aCA/IHsgd29yZHMgfSA6IHt9LFxyXG4gICAgICAuLi5jdXN0b20sXHJcbiAgICB9O1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcblxyXG4gICAgY29uc3QgdXR0ZXJhbmNlVGV4dCA9IHV0dGVyYW5jZVN0cmluZ1xyXG4gICAgLnNwbGl0KG5ld2xpbmVSZWdFeHApXHJcbiAgICAubWFwKHN0ciA9PiBzdHIudHJpbSgpKVxyXG4gICAgLmpvaW4oYFxcbmApO1xyXG5cclxuICAgIGUubmFtZSAgICA9IHBhcnNlVXR0ZXJhbmNlLm5hbWU7XHJcbiAgICBlLm1lc3NhZ2UgPSBgJHtlLm1lc3NhZ2V9XFxuXFxuVXR0ZXJhbmNlIHRleHQ6XFxuXFxuJHt1dHRlcmFuY2VUZXh0fWA7XHJcbiAgICB0aHJvdyBlO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlXHJcbiAgbm8tcGFyYW0tcmVhc3NpZ24sXHJcbiovXHJcblxyXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gJy4uL2NvbnN0YW50cy9pbmRleC5tanMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRMaW5lVHlwZSxcclxuICBncm91cExpbmVzLFxyXG59IGZyb20gJy4uL3V0aWxpdGllcy9pbmRleC5tanMnO1xyXG5cclxuY29uc3Qgc2luZ2xlTGluZXMgPSBbXHJcbiAgYHBob25gLFxyXG4gIGBzcGAsXHJcbl07XHJcblxyXG4vKipcclxuICogRXh0cmFjdHMgYW55IGN1c3RvbSBsaW5lcyBmcm9tIHRoZSBsaW5lcyBoYXNoIGFuZCByZXR1cm5zIHRoZW0gaW4gYW4gb2JqZWN0XHJcbiAqIEBwYXJhbSAge09iamVjdH0gbGluZXMgVGhlIGxpbmVzIGhhc2hcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VDdXN0b20obGluZXMpIHtcclxuXHJcbiAgY29uc3QgbGluZUNvZGVzID0gT2JqZWN0LmtleXMobGluZXMpO1xyXG5cclxuICBjb25zdCBjdXN0b21UeXBlcyA9IGxpbmVDb2Rlc1xyXG4gIC5tYXAoZ2V0TGluZVR5cGUpXHJcbiAgLmZpbHRlcih0eXBlID0+ICF0eXBlcy5pbmNsdWRlcyh0eXBlKSlcclxuICAucmVkdWNlKChoYXNoLCB0eXBlKSA9PiB7XHJcbiAgICBoYXNoW3R5cGVdID0gZ3JvdXBMaW5lcyh0eXBlLCBsaW5lcyk7XHJcbiAgICByZXR1cm4gaGFzaDtcclxuICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IGN1c3RvbUNvZGVzID0gbGluZUNvZGVzLmZpbHRlcihjb2RlID0+IHtcclxuICAgIGNvbnN0IHR5cGUgICAgICAgICA9IGdldExpbmVUeXBlKGNvZGUpO1xyXG4gICAgY29uc3QgaXNTaW5nbGVMaW5lID0gc2luZ2xlTGluZXMuaW5jbHVkZXModHlwZSk7XHJcbiAgICBjb25zdCBoYXNTdWJUeXBlICAgPSBjb2RlLnN0YXJ0c1dpdGgoYCR7dHlwZX0tYCk7XHJcbiAgICByZXR1cm4gaXNTaW5nbGVMaW5lICYmIGhhc1N1YlR5cGU7XHJcbiAgfSlcclxuICAucmVkdWNlKChoYXNoLCBjb2RlKSA9PiB7XHJcbiAgICBoYXNoW2NvZGVdID0gbGluZXNbY29kZV07XHJcbiAgICByZXR1cm4gaGFzaDtcclxuICB9LCB7fSk7XHJcblxyXG4gIHJldHVybiB7IC4uLmN1c3RvbUNvZGVzLCAuLi5jdXN0b21UeXBlcyB9O1xyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGNsZWFuQnJhY2tldHMsXHJcbiAgZ3JvdXBMaW5lcyxcclxuICB2YWxpZGF0ZUxhbmd1YWdlcyxcclxufSBmcm9tICcuLi91dGlsaXRpZXMvaW5kZXgubWpzJztcclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMsIHZhbGlkYXRlcywgYW5kIGNsZWFucyB0aGUgbGl0ZXJhbCB0cmFuc2xhdGlvbiBsaW5lc1xyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICBsaW5lcyBUaGUgbGluZXMgaGFzaFxyXG4gKiBAcmV0dXJuIHtTdHJpbmd8T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VMaXRlcmFsKGxpbmVzKSB7XHJcbiAgbGV0IGRhdGEgPSBncm91cExpbmVzKGBsaXRgLCBsaW5lcyk7XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuICBkYXRhID0gY2xlYW5CcmFja2V0cyhgbGl0YCwgZGF0YSk7XHJcbiAgdmFsaWRhdGVMYW5ndWFnZXMoZGF0YSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5kZXgubWpzJztcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBmb3IgZHVwbGljYXRlIGdsb3NzZXMgb24gYSBzcGVjaWZpYyBsaW5lIGluIGEgc2V0IG9mIG1vcnBoZW1lcywgYW5kIHJldHVybiBhbiBhcnJheSBvZiB0aGUgZHVwbGljYXRlc1xyXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICBjb2RlICAgICAgVGhlIGNvZGUgb2YgdGhlIGxpbmUgdG8gY2hlY2sgZm9yIGR1cGxpY2F0ZXNcclxuICogQHBhcmFtICB7QXJyYXl9ICAgICAgICAgbW9ycGhlbWVzIFRoZSBhcnJheSBvZiBtb3JwaGVtZXMgdG8gY2hlY2tcclxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cclxuICovXHJcbmZ1bmN0aW9uIGdldER1cGxpY2F0ZUdsb3NzZXMoY29kZSwgbW9ycGhlbWVzKSB7XHJcblxyXG4gIGlmICghbW9ycGhlbWVzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG5cclxuICBjb25zdCBnbG9zc2VzID0gbW9ycGhlbWVzLm1hcCgoeyBnbG9zcyB9KSA9PiAoY29kZSA9PT0gYHN0cmluZ2AgPyBnbG9zcyA6IGdsb3NzW2NvZGVdKSk7XHJcblxyXG4gIGNvbnN0IGdsb3NzQ291bnRzID0gZ2xvc3Nlcy5yZWR1Y2UoKGNvdW50cywgZ2wpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IGNvdW50cy5nZXQoZ2wpIHx8IDA7XHJcbiAgICBjb3VudHMuc2V0KGdsLCBjdXJyZW50Q291bnQgKyAxKTtcclxuICAgIHJldHVybiBjb3VudHM7XHJcbiAgfSwgbmV3IE1hcCk7XHJcblxyXG4gIHJldHVybiBBcnJheS5mcm9tKGdsb3NzQ291bnRzLmVudHJpZXMoKSlcclxuICAuZmlsdGVyKChbLCBjb3VudF0pID0+IGNvdW50ID4gMSlcclxuICAubWFwKChbZ2xdKSA9PiBnbCk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgbGluZSBjb2RlIG9mIHRoZSBmaXJzdCBnbG9zcyBsaW5lIGluIGEgbW9ycGhlbWVcclxuICogQHBhcmFtICB7T2JqZWN0fSBtb3JwaGVtZSBUaGUgbW9ycGhlbWUgdG8gZ2V0IHRoZSBjb2RlIGZvclxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRGaXJzdEdsb3NzQ29kZSh7IGdsb3NzIH0pIHtcclxuICBjb25zdCBpc0JhcmVTdHJpbmcgPSBpc1N0cmluZyhnbG9zcyk7XHJcbiAgcmV0dXJuIGlzQmFyZVN0cmluZyA/IGBzdHJpbmdgIDogT2JqZWN0LmtleXMoZ2xvc3MpWzBdO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFuIGFycmF5IG9mIGFycmF5cyBvZiBtb3JwaGVtZXMgd2l0aCB0aGUgc2FtZSBnbG9zc1xyXG4gKiBAcGFyYW0gIHtBcnJheX0gbW9ycGhlbWVzIFRoZSBhcnJheSBvZiBtb3JwaGVtZXMgdG8gY2hlY2sgZm9yIGR1cGxpY2F0ZXNcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICBSZXR1cm5zIGFuIGFycmF5IG9mIGFycmF5cyBvZiBkdXBsaWNhdGUgbW9ycGhlbWVzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREdXBsaWNhdGVNb3JwaGVtZXMobW9ycGhlbWVzKSB7XHJcblxyXG4gIGNvbnN0IGdsb3NzVG9DaGVjayAgICAgPSBnZXRGaXJzdEdsb3NzQ29kZShtb3JwaGVtZXNbMF0pO1xyXG4gIGNvbnN0IGR1cGxpY2F0ZUdsb3NzZXMgPSBnZXREdXBsaWNhdGVHbG9zc2VzKGdsb3NzVG9DaGVjaywgbW9ycGhlbWVzKTtcclxuXHJcbiAgaWYgKCFkdXBsaWNhdGVHbG9zc2VzKSByZXR1cm4gW107XHJcblxyXG4gIHJldHVybiBkdXBsaWNhdGVHbG9zc2VzLm1hcChnbCA9PiBtb3JwaGVtZXMuZmlsdGVyKCh7IGdsb3NzIH0pID0+IHtcclxuICAgIGlmIChpc1N0cmluZyhnbG9zcykpIHJldHVybiBnbG9zcyA9PT0gZ2w7XHJcbiAgICByZXR1cm4gZ2xvc3NbZ2xvc3NUb0NoZWNrXSA9PT0gZ2w7XHJcbiAgfSkpO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgZ2V0RHVwbGljYXRlTW9ycGhlbWVzIGZyb20gJy4vZ2V0RHVwbGljYXRlTW9ycGhlbWVzLm1qcyc7XHJcbmltcG9ydCBzZXBhcmF0ZUluZml4ICAgICAgICAgZnJvbSAnLi9zZXBhcmF0ZUluZml4Lm1qcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGRpZmZlcmVuY2UsXHJcbiAgZ2V0TWF0Y2hlcyxcclxuICBncm91cExpbmVzLFxyXG4gIG1lcmdlVHJhbnNjcmlwdGlvbnMsXHJcbiAgdmFsaWRhdGVMYW5ndWFnZXMsXHJcbiAgdmFsaWRhdGVOdW1JdGVtcyxcclxuICB6aXAsXHJcbn0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luZGV4Lm1qcyc7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG1vcnBoZW1lcyBoYXNoIG9mIGxpbmUgY29kZXMgYW5kIGFuIGFycmF5IG9mIG1vcnBoZW1lcyBiYXNlZCBvbiB0aGUgd29yZCBsaW5lc1xyXG4gKiBAcGFyYW0gIHtPYmplY3R9IHdvcmREYXRhIFRoZSB3b3JkIGRhdGEgb2JqZWN0XHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vcnBoZW1lc0hhc2god29yZExpbmVzKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHdvcmRMaW5lcylcclxuICAucmVkdWNlKChoYXNoLCBbY29kZSwgZGF0YV0pID0+IHtcclxuICAgIGhhc2hbY29kZV0gPSB0b2tlbml6ZVdvcmQoZGF0YSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIHJldHVybiBoYXNoO1xyXG4gIH0sIHt9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRva2VuaXplcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHdvcmQgaW50byBpdHMgcmVzcGVjdGl2ZSBtb3JwaGVtZXMgLyBnbG9zc2VzXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyaW5nIFRoZSB3b3JkIHN0cmluZyB0byB0b2tlbml6ZVxyXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICBSZXR1cm5zIGFuIGFycmF5IG9mIG1vcnBoZW1lIC8gZ2xvc3Mgc3RyaW5nc1xyXG4gKi9cclxuZnVuY3Rpb24gdG9rZW5pemVXb3JkKHN0cmluZykge1xyXG5cclxuICAvLyBOT1RFOiBVc2luZyB0aGUgdW5pY29kZSBlc2NhcGUgXFx1MDA1RCBpcyBuZWNlc3NhcnkgaGVyZSBmb3IgQmFiZWwgdG8gdHJhbnNwaWxlIHRoZSByZWdleHAgY29ycmVjdGx5XHJcbiAgY29uc3QgbW9ycGhlbWVSZWdFeHAgPSAvKD88YnJhY2tldGVkPlxcWy4qP1xcdTAwNUQpfCg/PHVuYnJhY2tldGVkPlteLT1+XFxzXSspL2d1O1xyXG5cclxuICByZXR1cm4gZ2V0TWF0Y2hlcyhtb3JwaGVtZVJlZ0V4cCwgc3RyaW5nKVxyXG4gIC5tYXAoKHsgYnJhY2tldGVkLCB1bmJyYWNrZXRlZCB9KSA9PiBicmFja2V0ZWQgfHwgdW5icmFja2V0ZWQpO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEFjY2VwdHMgYW4gbGluZXMgaGFzaCBmb3IgYSB3b3JkIChtb3JwaGVtZSBhbmQgZ2xvc3MgbGluZXMpIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIERMeCBNb3JwaGVtZSBvYmplY3RzXHJcbiAqIEBwYXJhbSAge09iamVjdH0gd29yZExpbmVzIEEgbGluZXMgaGFzaCBmb3IgYSB3b3JkXHJcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgIFJldHVybnMgYW4gYXJyYXkgb2YgREx4IE1vcnBoZW1lIG9iamVjY3RzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZU1vcnBoZW1lcyh3b3JkTGluZXMpIHtcclxuXHJcbiAgY29uc3Qgbm9EYXRhID0gIU9iamVjdC52YWx1ZXMod29yZExpbmVzKS5ldmVyeShsaW5lID0+IGxpbmUubGVuZ3RoKTtcclxuXHJcbiAgaWYgKG5vRGF0YSkgcmV0dXJuIFtdO1xyXG5cclxuICBjb25zdCBtb3JwaGVtZXNIYXNoID0gY3JlYXRlTW9ycGhlbWVzSGFzaCh3b3JkTGluZXMpO1xyXG5cclxuICB2YWxpZGF0ZU51bUl0ZW1zKG1vcnBoZW1lc0hhc2gpO1xyXG5cclxuICBsZXQgbW9ycGhlbWVzID0gemlwKG1vcnBoZW1lc0hhc2gpXHJcbiAgLmZsYXRNYXAoc2VwYXJhdGVJbmZpeClcclxuICAubWFwKGRhdGEgPT4gKHtcclxuICAgIHRyYW5zY3JpcHRpb246IGdyb3VwTGluZXMoYG1gLCBkYXRhKSxcclxuICAgIGdsb3NzOiAgICAgICAgIGdyb3VwTGluZXMoYGdsYCwgZGF0YSksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgc29ydC1rZXlzXHJcbiAgfSkpO1xyXG5cclxuICBpZiAoIW1vcnBoZW1lcy5sZW5ndGgpIHJldHVybiBbXTtcclxuXHJcbiAgbW9ycGhlbWVzLmZvckVhY2gobSA9PiB7XHJcbiAgICB2YWxpZGF0ZUxhbmd1YWdlcyhtLnRyYW5zY3JpcHRpb24pO1xyXG4gICAgdmFsaWRhdGVMYW5ndWFnZXMobS5nbG9zcyk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGR1cGxpY2F0ZU1vcnBoZW1lcyA9IGdldER1cGxpY2F0ZU1vcnBoZW1lcyhtb3JwaGVtZXMpO1xyXG4gIG1vcnBoZW1lcyAgICAgICAgICAgICAgICA9IGRpZmZlcmVuY2UobW9ycGhlbWVzLCBkdXBsaWNhdGVNb3JwaGVtZXMuZmxhdCgpKTtcclxuXHJcbiAgY29uc3QgZGlzY29udGludW91c01vcnBoZW1lcyA9IGR1cGxpY2F0ZU1vcnBoZW1lcy5tYXAoZHVwcyA9PiAoe1xyXG4gICAgdHJhbnNjcmlwdGlvbjogbWVyZ2VUcmFuc2NyaXB0aW9ucyhkdXBzLm1hcCgoeyB0cmFuc2NyaXB0aW9uIH0pID0+IHRyYW5zY3JpcHRpb24pLCBg4oCmYCksXHJcbiAgICBnbG9zczogICAgICAgICBkdXBzWzBdLmdsb3NzLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHNvcnQta2V5c1xyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIFsuLi5tb3JwaGVtZXMsIC4uLmRpc2NvbnRpbnVvdXNNb3JwaGVtZXNdO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBnZXRMaW5lVHlwZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbmRleC5tanMnO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBhIE1vcnBoZW1lIG9iamVjdCBmb3IgaW5maXhlcywgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdHdvIG1vcnBoZW1lcyBpZiBvbmUgaXMgcHJlc2VudFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIG1vcnBoZW1lIFRoZSBtb3JlcGhlbWUgb2JqZWN0IHRvIGNoZWNrIGZvciBpbmZpeGVzXHJcbiAqIEByZXR1cm4ge09iamVjdHxBcnJheX0gICAgICAgICAgUmV0dXJucyBhbiBhcnJheSBvZiB0d28gbW9ycGhlbWUgb2JqZWN0cywgaW4gb3JkZXIsIGlmIGFuIGluZml4ZWQgbW9ycGhlbWUgaXMgcHJlc2VudCBpbiB0aGUgb3JpZ2luYWwgbW9ycGhlbWUgb2JqZWN0LiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBtb3JwaGVtZSBvYmplY3Qgb3RoZXJ3aXNlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VwYXJhdGVJbmZpeChtb3JwaGVtZSkge1xyXG5cclxuICBjb25zdCBpbmZpeFJlZ0V4cCAgICA9IC8oPzxwcmU+LiopPCg/PGluZml4Pi4rKT4oPzxwb3N0Pi4qKS91O1xyXG4gIGNvbnN0IGVudHJpZXMgICAgICAgID0gT2JqZWN0LmVudHJpZXMobW9ycGhlbWUpO1xyXG4gIGNvbnN0IFssIGZpcnN0R2xvc3NdID0gZW50cmllcy5maW5kKChbY29kZV0pID0+IGdldExpbmVUeXBlKGNvZGUpID09PSBgZ2xgKTtcclxuICBjb25zdCBtYXRjaCAgICAgICAgICA9IGZpcnN0R2xvc3MubWF0Y2goaW5maXhSZWdFeHApO1xyXG5cclxuICBpZiAoIW1hdGNoKSByZXR1cm4gbW9ycGhlbWU7XHJcblxyXG4gIGNvbnN0IGluZml4UG9zaXRpb24gPSBtYXRjaC5ncm91cHMucHJlID8gYHJpZ2h0YCA6IGBsZWZ0YDtcclxuXHJcbiAgLy8gaSA9IG5ldyBpbmZpeCBtb3JwaGVtZVxyXG4gIC8vIG0gPSBuZXcgcGxhaW4gbW9ycGhlbWUgKHdpdGggaW5maXggcmVtb3ZlZClcclxuICBjb25zdCBtb3JwaGVtZXMgPSBlbnRyaWVzLnJlZHVjZSgoW2ksIG1dLCBbY29kZSwgZGF0YV0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGluZml4LCBwcmUsIHBvc3QgfSA9IGRhdGEubWF0Y2goaW5maXhSZWdFeHApLmdyb3VwcztcclxuXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4gICAgaVtjb2RlXSA9IGluZml4O1xyXG4gICAgbVtjb2RlXSA9IGAke3ByZX0ke3Bvc3R9YDtcclxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuXHJcbiAgICByZXR1cm4gW2ksIG1dO1xyXG5cclxuICB9LCBbe30sIHt9XSk7XHJcblxyXG4gIHJldHVybiBpbmZpeFBvc2l0aW9uID09PSBgbGVmdGAgPyBtb3JwaGVtZXMgOiBtb3JwaGVtZXMucmV2ZXJzZSgpO1xyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGdldExpbmVzLFxyXG4gIGlzVmFsaWRUYWcsXHJcbn0gZnJvbSAnLi4vdXRpbGl0aWVzL2luZGV4Lm1qcyc7XHJcblxyXG4vKipcclxuICogQWNjZXB0cyB0aGUgbGluZXMgaGFzaCBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBETHggTm90ZSBvYmplY3RzXHJcbiAqIEBwYXJhbSAge09iamVjdH0gbGluZXMgVGhlIGxpbmVzIGhhc2hcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICBSZXR1cm5zIHRoZSBcIm5vdGVzXCIgcHJvcGVydHkgb2YgdGhlIHV0dGVyYW5jZSAob3IgbnVsbClcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlTm90ZXMobGluZXMpIHtcclxuXHJcbiAgY29uc3Qgbm90ZUxpbmVzID0gZ2V0TGluZXMoYG5gLCBsaW5lcyk7XHJcblxyXG4gIGlmICghbm90ZUxpbmVzKSByZXR1cm4gW107XHJcblxyXG4gIGNvbnN0IG51bWJlcmVkUmVnRXhwID0gL24tWzAtOV0vdTtcclxuICBjb25zdCBub3RlUmVnRXhwICAgICA9IC9eKD86XFxzKig/PHNvdXJjZT4uKz8pXFxzKjpcXHMqKT8oPzx0ZXh0Pi4rKSQvdTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG5vdGVMaW5lcylcclxuICAubWFwKChbcmF3Q29kZSwgZGF0YV0pID0+IHtcclxuXHJcbiAgICBjb25zdCBjb2RlICAgICAgICAgICAgICAgID0gcmF3Q29kZS5yZXBsYWNlKG51bWJlcmVkUmVnRXhwLCBgbmApO1xyXG4gICAgY29uc3QgWywgbGFuZ3VhZ2UgPSBgZW5gXSA9IGNvZGUuc3BsaXQoYC1gLCAyKTtcclxuICAgIGNvbnN0IHsgc291cmNlLCB0ZXh0IH0gICAgPSBkYXRhLm1hdGNoKG5vdGVSZWdFeHApLmdyb3VwcztcclxuXHJcbiAgICBpZiAoIWlzVmFsaWRUYWcobGFuZ3VhZ2UpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICR7bGFuZ3VhZ2V9IGxhbmd1YWdlIHRhZyBpcyBpbnZhbGlkLiBJdCBtdXN0IGJlIGEgdmFsaWQgSUVURiBsYW5ndWFnZSB0YWcuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFuZ3VhZ2UsXHJcbiAgICAgIHNvdXJjZSxcclxuICAgICAgdGV4dCxcclxuICAgIH07XHJcblxyXG4gIH0pO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBjbGVhbkJyYWNrZXRzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2luZGV4Lm1qcyc7XHJcblxyXG4vKipcclxuICogQ2xlYW5zIGFuZCB2YWxpZGF0ZXMgdGhlIHBob25ldGljIGxpbmVcclxuICogQHBhcmFtICB7U3RyaW5nfSBsaW5lIFRoZSBwaG9uZXRpYyBsaW5lXHJcbiAqIEByZXR1cm4ge1N0cmluZ31cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlUGhvbmV0aWMobGluZSkge1xyXG4gIGlmICghbGluZSkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIGNsZWFuQnJhY2tldHMoYHBob25gLCBsaW5lKTtcclxufVxyXG4iLCJjb25zdCBzcGVha2VyUmVnRXhwID0gL15bQS1aYS16MC05XSskL3U7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgYSBzcGVha2VyIGFiYnJldmlhdGlvbiBpcyB2YWxpZGx5IGZvcm1hdHRlZFxyXG4gKiBAcGFyYW0gIHtBbnl9ICAgICBzcGVha2VyIFRoZSBzcGVha2VyIHZhbHVlIHRvIHZhbGlkYXRlXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZhbGlkU3BlYWtlcihzcGVha2VyKSB7XHJcbiAgcmV0dXJuIHNwZWFrZXJSZWdFeHAudGVzdChzcGVha2VyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsZWFucyBhbmQgdmFsaWRhdGVzIHRoZSBzcGVha2VyIGxpbmVcclxuICogQHBhcmFtICB7T2JqZWN0fSAgbGluZSBUaGUgc3BlYWtlciBsaW5lXHJcbiAqIEByZXR1cm4ge1N0cmluZ31cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlU3BlYWtlcihkYXRhKSB7XHJcblxyXG4gIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGlmICghaXNWYWxpZFNwZWFrZXIoZGF0YSkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgJHtkYXRhfSBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgdGhlIHNwZWFrZXIgbGluZS5gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBncm91cExpbmVzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2luZGV4Lm1qcyc7XHJcblxyXG4vKipcclxuICogRXh0cmFjdHMsIHZhbGlkYXRlcywgYW5kIGNsZWFucyB0aGUgdHJhbnNjcmlwdCBsaW5lcyBmcm9tIHRoZSBsaW5lcyBoYXNoXHJcbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgIGxpbmVzIFRoZSBsaW5lcyBoYXNoXHJcbiAqIEByZXR1cm4ge1N0cmluZ3xPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVRyYW5zY3JpcHQobGluZXMpIHtcclxuICBjb25zdCBkYXRhID0gZ3JvdXBMaW5lcyhgdHJzYCwgbGluZXMpO1xyXG4gIHJldHVybiBkYXRhIHx8IG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBjbGVhbkJyYWNrZXRzLFxyXG4gIGdyb3VwTGluZXMsXHJcbn0gZnJvbSAnLi4vdXRpbGl0aWVzL2luZGV4Lm1qcyc7XHJcblxyXG4vKipcclxuICogRXh0cmFjdHMsIHZhbGlkYXRlcywgYW5kIGNsZWFucyB0aGUgdHJhbnNjcmlwdGlvbiBsaW5lcyBmcm9tIHRoZSBsaW5lcyBoYXNoXHJcbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgIGxpbmVzIFRoZSBsaW5lcyBoYXNoXHJcbiAqIEByZXR1cm4ge1N0cmluZ3xPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVRyYW5zY3JpcHRpb24obGluZXMpIHtcclxuICBsZXQgZGF0YSA9IGdyb3VwTGluZXMoYHR4bmAsIGxpbmVzKTtcclxuICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gIGRhdGEgPSBjbGVhbkJyYWNrZXRzKGB0eG5gLCBkYXRhKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGdyb3VwTGluZXMsXHJcbiAgdmFsaWRhdGVMYW5ndWFnZXMsXHJcbn0gZnJvbSAnLi4vdXRpbGl0aWVzL2luZGV4Lm1qcyc7XHJcblxyXG4vKipcclxuICogRXh0cmFjdHMsIHZhbGlkYXRlcywgYW5kIGNsZWFucyB0aGUgdHJhbnNsYXRpb24gbGluZXMgZnJvbSB0aGUgbGluZXMgaGFzaFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICBsaW5lcyBUaGUgbGluZXMgaGFzaFxyXG4gKiBAcmV0dXJuIHtTdHJpbmd8T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VUcmFuc2xhdGlvbihsaW5lcykge1xyXG4gIGNvbnN0IGRhdGEgPSBncm91cExpbmVzKGB0bG5gLCBsaW5lcyk7XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuICB2YWxpZGF0ZUxhbmd1YWdlcyhkYXRhKTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJpbXBvcnQgcGFyc2VNb3JwaGVtZXMgZnJvbSAnLi9wYXJzZU1vcnBoZW1lcy9pbmRleC5tanMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRMaW5lcyxcclxuICBnZXRNYXRjaGVzLFxyXG4gIGdyb3VwTGluZXMsXHJcbiAgdmFsaWRhdGVOdW1JdGVtcyxcclxuICB6aXAsXHJcbn0gZnJvbSAnLi4vdXRpbGl0aWVzL2luZGV4Lm1qcyc7XHJcblxyXG4vKipcclxuICogVGFrZXMgdGhlIHdvcmRzIGxpbmUgaGFzaCBhbmQgdG9rZW5pemVzIHRoZSBkYXRhIG9uIGVhY2ggbGluZVxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IHdvcmRMaW5lcyBBIGhhc2ggb2YgcmF3IHdvcmQgbGluZXNcclxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgUmV0dXJucyBhIGhhc2ggd2l0aCB0aGUgbGluZXMgdG9rZW5pemVkXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRXb3Jkc0hhc2god29yZExpbmVzKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHdvcmRMaW5lcylcclxuICAucmVkdWNlKChoYXNoLCBbY29kZSwgZGF0YV0pID0+IHtcclxuICAgIGhhc2hbY29kZV0gPSB0b2tlbml6ZUxpbmUoZGF0YSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIHJldHVybiBoYXNoO1xyXG4gIH0sIHt9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyB0aGUgd29yZCBoYXNoIGludG8gYSBETHggV29yZCBvYmplY3RcclxuICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFRoZSB3b3JkIGhhc2hcclxuICogQHJldHVybiB7T2JqZWN0fSAgICAgIFJldHVybnMgYSBETHggV29yZCBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlV29yZChkYXRhKSB7XHJcblxyXG4gIGNvbnN0IHRyYW5zY3JpcHRpb24gPSBncm91cExpbmVzKGB3YCwgZGF0YSkgfHwgYGA7XHJcbiAgY29uc3QgYW5hbHlzaXMgICAgICA9IGdyb3VwTGluZXMoYG1gLCBkYXRhKTtcclxuICBjb25zdCBnbG9zcyAgICAgICAgID0gZ3JvdXBMaW5lcyhgZ2xgLCBkYXRhKTtcclxuICBjb25zdCBsaXRlcmFsICAgICAgID0gZ3JvdXBMaW5lcyhgd2x0YCwgZGF0YSk7XHJcbiAgY29uc3QgbW9ycGhlbWVzICAgICA9IHBhcnNlTW9ycGhlbWVzKGdldExpbmVzKFtgZ2xgLCBgbWBdLCBkYXRhKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0cmFuc2NyaXB0aW9uLFxyXG4gICAgLi4uYW5hbHlzaXMgPyB7IGFuYWx5c2lzIH0gOiB7fSxcclxuICAgIC4uLmdsb3NzID8geyBnbG9zcyB9IDoge30sXHJcbiAgICAuLi5saXRlcmFsID8geyBsaXRlcmFsIH0gOiB7fSxcclxuICAgIC4uLm1vcnBoZW1lcy5sZW5ndGggPyB7IG1vcnBoZW1lcyB9IDoge30sXHJcbiAgfTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUb2tlbml6ZXMgdGhlIHN0cmluZyBvbiB3aGl0ZSBzcGFjZSwgcmV0dXJuaW5nIGFuIGFycmF5IG9mIHdvcmQgdG9rZW5zXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdG9rZW5pemVcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgUmV0dXJucyBhbiBhcnJheSBvZiB3b3JkIHRva2Vuc1xyXG4gKi9cclxuZnVuY3Rpb24gdG9rZW5pemVMaW5lKHN0cmluZykge1xyXG5cclxuICAvLyBOT1RFOiBMZWF2ZSB0aGVzZSBoZXJlIGZvciBkZWJ1Z2dpbmcgYW5kIGRldmVsb3BtZW50XHJcbiAgLy8gY29uc3QgYnJhY2tldHNSZWdFeHAgPSAvKD88YnJhY2tldGVkPlxcWy4qP1xcXSkvZ3U7XHJcbiAgLy8gY29uc3Qgd29yZHNSZWdFeHAgICAgPSAvKD88dW5icmFja2V0ZWQ+W15cXHNdKykvZ3U7XHJcblxyXG4gIC8vIE5PVEU6IFVzaW5nIHRoZSB1bmljb2RlIGVzY2FwZSBcXHUwMDVEIGlzIG5lY2Vzc2FyeSBmb3IgQmFiZWwgdG8gdHJhbnNwaWxlIHRoZSByZWdleHAgY29ycmVjdGx5XHJcbiAgY29uc3Qgd29yZFJlZ0V4cCA9IC8oPzxicmFja2V0ZWQ+XFxbLio/XFx1MDA1RCl8KD88dW5icmFja2V0ZWQ+W15cXHNdKykvZ3U7XHJcblxyXG4gIHJldHVybiBnZXRNYXRjaGVzKHdvcmRSZWdFeHAsIHN0cmluZylcclxuICAubWFwKCh7IGJyYWNrZXRlZCwgdW5icmFja2V0ZWQgfSkgPT4gYnJhY2tldGVkIHx8IHVuYnJhY2tldGVkKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0cyB3b3JkLXNwZWNpZmljIGxpbmVzIGZyb20gdGhlIGxpbmVzIGhhc2ggYW5kIGNvbnZlcnRzIHRoZW0gaW50byBhbiBhcnJheSBvZiBETHggV29yZCBvYmplY3RzXHJcbiAqIEBwYXJhbSAge09iamVjdH0gbGluZXMgVGhlIGxpbmVzIGhhc2hcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICBSZXR1cm5zIGFuIGFycmF5IG9mIERMeCBXb3JkIG9iamVjdHNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlV29yZHMobGluZXMpIHtcclxuXHJcbiAgaWYgKCFPYmplY3Qua2V5cyhsaW5lcykubGVuZ3RoKSByZXR1cm4gW107XHJcblxyXG4gIGNvbnN0IHdvcmRzSGFzaCA9IGdldFdvcmRzSGFzaChsaW5lcyk7XHJcblxyXG4gIHZhbGlkYXRlTnVtSXRlbXMod29yZHNIYXNoKTtcclxuXHJcbiAgcmV0dXJuIHppcCh3b3Jkc0hhc2gpXHJcbiAgLm1hcChwYXJzZVdvcmQpO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBnZXRTY2hlbWEgfSAgZnJvbSAnLi91dGlsaXRpZXMvaW5kZXgubWpzJztcclxuaW1wb3J0IHBhcnNlVXR0ZXJhbmNlIGZyb20gJy4vcGFyc2VVdHRlcmFuY2UvaW5kZXgubWpzJztcclxuXHJcbi8qKlxyXG4gKiBGaW5kcyB0aGUgdGV4dCBvZiB0aGUgdXR0ZXJhbmNlcyBwb3J0aW9uIG9mIGEgc2NyaXB0aW9uIHRleHQgYW5kIHJldHVybnMgaXRcclxuICogQHBhcmFtICB7U3RyaW5nfSB0ZXh0IFRoZSBzY3JpcHRpb24gdGV4dFxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRVdHRlcmFuY2VzU3RyaW5nKHRleHQpIHtcclxuICByZXR1cm4gdGV4dFxyXG4gIC5zcGxpdCgvLS0tL2dzdSlcclxuICAubWFwKHBhcnQgPT4gcGFydC50cmltKCkpXHJcbiAgLnBvcCgpO1xyXG59XHJcblxyXG4vKipcclxuICogSXNvbGF0ZXMgdGhlIHV0dGVyYW5jZXMgaW4gYSBzY3JpcHRpb24gdGV4dCBzdHJpbmcgYW5kIHJldHVybnMgdGhlbSBhcyBhbiBhcnJheSBvZiBETHggVXR0ZXJhbmNlIG9iamVjdHNcclxuICogQHBhcmFtICB7U3RyaW5nfSBzY3JpcHRpb24gVGhlIHNjcmlwdGlvbiB0ZXh0XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VVdHRlcmFuY2VzKHNjcmlwdGlvbikge1xyXG5cclxuICBjb25zdCB1dHRlcmFuY2VzU3RyaW5nID0gZ2V0VXR0ZXJhbmNlc1N0cmluZyhzY3JpcHRpb24pO1xyXG5cclxuICBpZiAoIXV0dGVyYW5jZXNTdHJpbmcpIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3QgYmxhbmtMaW5lc1JlZ0V4cCAgPSAvKD86WyBcXHRcXHZcXHUwMGEwXFx1MTY4MFxcdTIwMDAtXFx1MjAwYVxcdTIwMjhcXHUyMDI5XFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1ZmVmZl0qXFxyP1xcbil7Mix9L2dzdTtcclxuICBjb25zdCB1dHRlcmFuY2VzU3RyaW5ncyA9IHV0dGVyYW5jZXNTdHJpbmcuc3BsaXQoYmxhbmtMaW5lc1JlZ0V4cCk7XHJcbiAgY29uc3Qgc2NoZW1hICAgICAgICAgICAgPSBnZXRTY2hlbWEodXR0ZXJhbmNlc1N0cmluZ3NbMF0pO1xyXG4gIGNvbnN0IHBhcnNlICAgICAgICAgICAgID0gdXR0ZXJhbmNlU3RyaW5nID0+IHBhcnNlVXR0ZXJhbmNlKHV0dGVyYW5jZVN0cmluZywgc2NoZW1hKTtcclxuXHJcbiAgcmV0dXJuIHV0dGVyYW5jZXNTdHJpbmdcclxuICAuc3BsaXQoYmxhbmtMaW5lc1JlZ0V4cClcclxuICAubWFwKHBhcnNlKVxyXG4gIC5maWx0ZXIoQm9vbGVhbik7XHJcblxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlXHJcbiAgbm8tcGFyYW0tcmVhc3NpZ24sXHJcbiovXHJcblxyXG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi9pc1N0cmluZy5tanMnO1xyXG5cclxuY29uc3QgYnJhY2tldFR5cGVzID0ge1xyXG4gIGxpdDogIFtgW2AsIGBdYF0sXHJcbiAgcGhvbjogW2BbYCwgYF1gXSxcclxuICB0eG46ICBbYC9gLCBgL2BdLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgbGVhZGluZy90cmFpbGluZyBicmFja2V0cy9zeW1ib2xzIGZyb20gYSBzdHJpbmdcclxuICogQHBhcmFtICB7U3RyaW5nfSBzdGFydCBUaGUgbGVhZGluZyBjaGFyYWN0ZXIgdG8gdHJpbVxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGVuZCAgIFRoZSB0cmFpbGluZyBjaGFyYWN0ZXIgdG8gdHJpbVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0ciAgIFRoZSBzdHJpbmcgdG8gdHJpbVxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgIFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmltQnJhY2tldHMoc3RhcnQsIGVuZCwgc3RyKSB7XHJcblxyXG4gIGlmIChzdHIuc3RhcnRzV2l0aChzdGFydCkgJiYgc3RyLmVuZHNXaXRoKGVuZCkpIHtcclxuICAgIHJldHVybiBzdHIuc2xpY2UoMSwgc3RyLmxlbmd0aCAtIDEpLnRyaW0oKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdHI7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2xlYW5zIHRoZSBicmFja2V0cyAvIHNsYXNoZXMgZnJvbSB2YXJpb3VzIGRhdGEgdHlwZXNcclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgdHlwZSBUaGUgdHlwZSBvZiBkYXRhIHRoYXQncyBiZWluZyBjbGVhbmVkXHJcbiAqIEBwYXJhbSAge1N0cmluZ3xPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gY2xlYW5cclxuICogQHJldHVybiB7U3RyaW5nfE9iamVjdH1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFuQnJhY2tldHModHlwZSwgZGF0YSkge1xyXG5cclxuICBjb25zdCBicmFja2V0cyA9IGJyYWNrZXRUeXBlc1t0eXBlXTtcclxuXHJcbiAgaWYgKGlzU3RyaW5nKGRhdGEpKSByZXR1cm4gdHJpbUJyYWNrZXRzKC4uLmJyYWNrZXRzLCBkYXRhKTtcclxuXHJcbiAgY29uc3QgdHJpbW1lZEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhKVxyXG4gIC5tYXAoKFtsYW5nLCB0ZXh0XSkgPT4gW2xhbmcsIHRyaW1CcmFja2V0cyguLi5icmFja2V0cywgdGV4dCldKTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyh0cmltbWVkRW50cmllcyk7XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGFycmF5cyAoZmlsdGVycyB0aGUgZmlyc3QgYXJyYXkgZm9yIHZhbHVlcyBub3QgY29udGFpbmVkIGluIHRoZSBzZWNvbmQpXHJcbiAqIEBwYXJhbSAge0FycmF5fSBhXHJcbiAqIEBwYXJhbSAge0FycmF5fSBiXHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZShhLCBiKSB7XHJcbiAgY29uc3QgcyA9IG5ldyBTZXQoYik7XHJcbiAgcmV0dXJuIGEuZmlsdGVyKHggPT4gIXMuaGFzKHgpKTtcclxufVxyXG4iLCIvKipcclxuICogRXh0cmFjdHMgdGhlIGJhY2tzbGFzaCBjb2RlIGZvciBhIGxpbmUsIHdpdGhvdXQgdGhlIGxlYWRpbmcgc2xhc2guIFJldHVybnMgbnVsbCBpZiBub25lIGlzIGZvdW5kLlxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCB0byBmaW5kIHRoZSBiYWNrc2xhc2ggY29kZSBpblxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgVGhlIGJhY2tzbGFzaCBjb2RlIHRoYXQgd2FzIGZvdW5kLCB3aXRob3V0IGEgbGVhZGluZyBzbGFzaFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29kZShsaW5lKSB7XHJcbiAgY29uc3QgYmFja3NsYXNoUmVnRXhwID0gL15cXFxcKD88Y29kZT5cXFMrKSg/Olxcc3wkKS91O1xyXG4gIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaChiYWNrc2xhc2hSZWdFeHApO1xyXG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiBtYXRjaC5ncm91cHMuY29kZTtcclxufVxyXG4iLCIvKipcclxuICogRXh0cmFjdHMgdGhlIGxpbmUgdHlwZSBmcm9tIGEgc3RyaW5nICh0eXBpY2FsbHkgZWl0aGVyIHRoZSBmdWxsIHN0cmluZyBmb3IgYSBsaW5lLCBvciBmcm9tIGEgYmFja3NsYXNoIGNvZGUpXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gZXh0cmFjdCB0aGUgbGluZSB0eXBlIGZyb21cclxuICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgVGhlIGxpbmUgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGluZVR5cGUoc3RyaW5nKSB7XHJcbiAgY29uc3QgW3R5cGVdID0gc3RyaW5nLnNwbGl0KGAtYCwgMSk7XHJcbiAgcmV0dXJuIHR5cGU7XHJcbn1cclxuIiwiaW1wb3J0IGdldExpbmVUeXBlIGZyb20gJy4vZ2V0TGluZVR5cGUubWpzJztcclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0cyB0aGUgcHJvdmlkZWQgbGluZSB0eXBlcyBmcm9tIGEgbGluZXMgaGFzaCwgYW5kIHJldHVybnMgdGhlbSBpbiBhIG5ldyBvYmplY3RcclxuICogQHBhcmFtICB7QXJyYXl9ICBsaW5lcyBBbiBhcnJheSBvZiBsaW5lIHR5cGVzIHRvIGdldFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMaW5lcyh0eXBlcywgbGluZXMpIHtcclxuXHJcbiAgY29uc3Qgd29yZExpbmVFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGluZXMpXHJcbiAgLmZpbHRlcigoW2NvZGVdKSA9PiB0eXBlcy5pbmNsdWRlcyhnZXRMaW5lVHlwZShjb2RlKSkpO1xyXG5cclxuICBpZiAoIXdvcmRMaW5lRW50cmllcy5sZW5ndGgpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHdvcmRMaW5lRW50cmllcyk7XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIGFsbCB0aGUgbWF0Y2hpbmcgY2FwdHVyZSBncm91cHMgZm9yIGEgcmVndWxhciBleHByZXNzaW9uIG9uIGEgc3RyaW5nXHJcbiAqIEBwYXJhbSAge1JlZ0V4cH0gcmVnRXhwIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gdXNlIGZvciBtYXRjaGluZ1xyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciAgICBUaGUgc3RyaW5nIHRvIG1hdGNoIGFnYWluc3RcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgUmV0dXJucyBhbiBhcnJheSBvZiBjYXB0dXJpbmcgZ3JvdXBzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYXRjaGVzKHJlZ0V4cCwgc3RyKSB7XHJcblxyXG4gIGNvbnN0IG1hdGNoZXMgPSBbXTtcclxuICBsZXQgbWF0Y2ggICAgID0gcmVnRXhwLmV4ZWMoc3RyKTtcclxuXHJcbiAgd2hpbGUgKG1hdGNoICE9PSBudWxsKSB7XHJcbiAgICBtYXRjaGVzLnB1c2gobWF0Y2guZ3JvdXBzKTtcclxuICAgIG1hdGNoID0gcmVnRXhwLmV4ZWMoc3RyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBtYXRjaGVzLmZpbHRlcihCb29sZWFuKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IGdldENvZGUgICAgIGZyb20gJy4vZ2V0Q29kZS5tanMnO1xyXG5pbXBvcnQgZ2V0TGluZVR5cGUgZnJvbSAnLi9nZXRMaW5lVHlwZS5tanMnO1xyXG5pbXBvcnQgaXNTdHJpbmcgICAgZnJvbSAnLi9pc1N0cmluZy5tanMnO1xyXG5pbXBvcnQgaXNWYWxpZENvZGUgZnJvbSAnLi9pc1ZhbGlkQ29kZS5tanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkZXMgYW4gYXJyYXkgb2YgYmFja3NsYXNoIGNvZGVzLCB3aXRob3V0IGxlYWRpbmcgc2xhc2hlc1xyXG4gKiBAcGFyYW0gIHtBcnJheX0gY29kZXMgVGhlIGFycmF5IG9mIGJhY2tzbGFzaCBjb2RlcyB0byB2YWxpZGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVTY2hlbWEocmF3Q29kZXMpIHtcclxuXHJcbiAgLy8gQ2hlY2sgdGhhdCBpZiBhbnkgbGluZSBoYXMgYSBiYWNrc2xhc2ggY29kZSwgYWxsIGxpbmVzIGRvXHJcbiAgLy8gTkI6IFRoaXMgdmFsaWRhdGlvbiBtdXN0IGNvbWUgZmlyc3RcclxuXHJcbiAgY29uc3Qgc29tZUxpbmVzSGF2ZUNvZGVzID0gcmF3Q29kZXMuc29tZShjb2RlID0+IGlzU3RyaW5nKGNvZGUpKTtcclxuICBjb25zdCBhbGxMaW5lc0hhdmVDb2RlcyAgPSByYXdDb2Rlcy5ldmVyeShjb2RlID0+IGlzU3RyaW5nKGNvZGUpKTtcclxuXHJcbiAgaWYgKHNvbWVMaW5lc0hhdmVDb2RlcyAmJiAhYWxsTGluZXNIYXZlQ29kZXMpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgSWYgb25lIGxpbmUgaW4gYW4gdXR0ZXJhbmNlIGhhcyBhIGJhY2tzbGFzaCBjb2RlLCBhbGwgbGluZXMgaW4gdGhlIHV0dGVyYW5jZSBtdXN0IGhhdmUgYmFja3NsYXNoIGNvZGVzLmApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29kZXMgPSByYXdDb2Rlcy5maWx0ZXIoQm9vbGVhbik7XHJcbiAgY29uc3QgdHlwZXMgPSBjb2Rlcy5tYXAoZ2V0TGluZVR5cGUpO1xyXG5cclxuICAvLyBDaGVjayB0aGF0IGNvZGVzIGFyZSB2YWxpZFxyXG5cclxuICBjb2Rlcy5mb3JFYWNoKGNvZGUgPT4ge1xyXG4gICAgaWYgKCFpc1ZhbGlkQ29kZShjb2RlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBiYWNrc2xhc2ggY29kZSAke2NvZGV9IGlzIGludmFsaWQuIE9ubHkgY2hhcmFjdGVycyBBLVosIGEteiwgMC05LCBhbmQgaHlwaGVucyBhcmUgYWxsb3dlZC4gRGlhY3JpdGljcyBhcmUgbm90IHBlcm1pdHRlZC5gKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQ2hlY2sgdGhhdCB0aGVyZSBhcmUgbm8gZHVwbGljYXRlIGNvZGVzXHJcblxyXG4gIGNvbnN0IGNvZGVDb3VudHMgPSBjb2Rlcy5yZWR1Y2UoKGNvdW50cywgY29kZSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudENvdW50ID0gY291bnRzLmdldChjb2RlKSB8fCAwO1xyXG4gICAgY291bnRzLnNldChjb2RlLCBjdXJyZW50Q291bnQgKyAxKTtcclxuICAgIHJldHVybiBjb3VudHM7XHJcbiAgfSwgbmV3IE1hcCk7XHJcblxyXG4gIGNvZGVDb3VudHMuZm9yRWFjaCgoY291bnQsIGNvZGUpID0+IHtcclxuICAgIGlmIChjb2RlICE9PSBgbmAgJiYgY291bnQgPiAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICR7Y29kZX0gY29kZSBhcHBlYXJzIG1vcmUgdGhhbiBvbmNlIGluIHRoZSB1dHRlcmFuY2UuIEVhY2ggYmFja3NsYXNoIGNvZGUgbWF5IG9ubHkgYXBwZWFyIG9uY2UuYCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIENoZWNrIHRoYXQgbW9ycGhlbWVzIGFuZCBnbG9zc2VzIGxpbmVzIGFyZSBiaWRlcGVuZGVudFxyXG5cclxuICBjb25zdCBoYXNNb3JwaGVtZXMgPSB0eXBlcy5zb21lKHR5cGUgPT4gdHlwZSA9PT0gYG1gKTtcclxuICBjb25zdCBoYXNHbG9zc2VzICAgPSB0eXBlcy5zb21lKHR5cGUgPT4gdHlwZSA9PT0gYGdsYCk7XHJcblxyXG4gIGlmICgoaGFzTW9ycGhlbWVzIHx8IGhhc0dsb3NzZXMpICYmICEoaGFzTW9ycGhlbWVzICYmIGhhc0dsb3NzZXMpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYElmIGVpdGhlciB0aGUgbW9ycGhlbWVzIG9yIGdsb3NzZXMgbGluZSBpcyBwcmVzZW50LCB0aGUgb3RoZXIgbXVzdCBiZSBwcmVzZW50IGFzIHdlbGwuYCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkanVzdCB0aGUgY29kZXMgYXQgdGhlIGJlZ2lubmluZyBvZiBlYWNoIGxpbmUgdG8gbnVtYmVyIHRoZSBub3RlcyBsaW5lc1xyXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSBsaW5lcyBBbiBhcnJheSBvZiBsaW5lIHN0cmluZ3NcclxuICogQHJldHVybiB7QXJyYXk8U3RyaW5nPn1cclxuICovXHJcbmZ1bmN0aW9uIG51bWJlck5vdGVzKGNvZGUsIGkpIHtcclxuICBjb25zdCB0eXBlID0gZ2V0TGluZVR5cGUoY29kZSk7XHJcbiAgaWYgKHR5cGUgIT09IGBuYCkgcmV0dXJuIGNvZGU7XHJcbiAgcmV0dXJuIGNvZGUucmVwbGFjZShgbmAsIGBuLSR7aSArIDF9YCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY2NlcHRzIHRoZSB0ZXh0IG9mIGEgc2NyaXB0aW9uIHV0dGVyYW5jZSBhbmQgcmV0dXJucyBhbiBhcnJheSByZXByZXNlbnRpbmcgaXRzIGludGVybGluZWFyIGdsb3NzIHNjaGVtYSwgd2hlcmUgZWFjaCBpdGVtIGluIHRoZSBhcnJheSBpcyBhIGJhY2tzbGFzaCBjb2RlICh3aXRob3V0IHRoZSBsZWFkaW5nIHNsYXNoKVxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHV0dGVyYW5jZVN0cmluZyBUaGUgc2NyaXB0aW9uIHV0dGVyYW5jZSB0byBnZXQgdGhlIGludGVybGluZWFyIHNjaGVtYSBmb3JcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICAgICAgUmV0dXJucyBhbiBhcnJheSBvZiBiYWNrc2xhc2ggY29kZXMgKHdpdGhvdXQgdGhlIGxlYWRpbmcgc2xhc2gpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY2hlbWEodXR0ZXJhbmNlU3RyaW5nKSB7XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc3QgbmV3bGluZVJlZ0V4cCA9IC9cXHI/XFxuL2d1O1xyXG5cclxuICAgIGNvbnN0IGxpbmVzID0gdXR0ZXJhbmNlU3RyaW5nXHJcbiAgICAuc3BsaXQobmV3bGluZVJlZ0V4cClcclxuICAgIC5tYXAobGluZSA9PiBsaW5lLnRyaW0oKSk7XHJcblxyXG4gICAgY29uc3QgY29kZXMgPSBsaW5lcy5tYXAoZ2V0Q29kZSk7XHJcblxyXG4gICAgdmFsaWRhdGVTY2hlbWEoY29kZXMpO1xyXG5cclxuICAgIGNvbnN0IGhhc0NvZGVzID0gY29kZXMuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aDtcclxuXHJcbiAgICBpZiAoIWhhc0NvZGVzKSB7XHJcblxyXG4gICAgICBjb25zdCBsaW5lQ291bnQgPSBsaW5lcy5sZW5ndGg7XHJcblxyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXHJcbiAgICAgIGlmIChsaW5lQ291bnQgPT09IDIpIHJldHVybiBbYHR4bmAsIGB0bG5gXTtcclxuICAgICAgaWYgKGxpbmVDb3VudCA9PT0gMykgcmV0dXJuIFtgbWAsIGBnbGAsIGB0bG5gXTtcclxuICAgICAgaWYgKGxpbmVDb3VudCA+PSA0KSAgcmV0dXJuIFtgdHhuYCwgYG1gLCBgZ2xgLCBgdGxuYF0uZmlsbChgbmAsIDQpO1xyXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGluZmVyIGFuIGludGVybGluZWFyIGdsb3NzIHNjaGVtYSBmb3IgdXR0ZXJhbmNlcyB3aXRoIG9uZSBsaW5lLmApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29kZXMubWFwKG51bWJlck5vdGVzKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG5cclxuICAgIGUubmFtZSAgICA9IGdldFNjaGVtYS5uYW1lO1xyXG4gICAgZS5tZXNzYWdlID0gYCR7ZS5tZXNzYWdlfVxcblxcblV0dGVyYW5jZSB0ZXh0OlxcblxcbiR7dXR0ZXJhbmNlU3RyaW5nfWA7XHJcbiAgICB0aHJvdyBlO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBnZXRMaW5lcyBmcm9tICcuL2dldExpbmVzLm1qcyc7XHJcblxyXG4vKipcclxuICogVGFrZXMgYSBoYXNoIG9mIGxpbmUgY29kZXMgYW5kIHRoZWlyIGRhdGEgYW5kIGdyb3VwcyBsaW5lcyBvZiBhIGNlcnRhaW4gdHlwZVxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGUgICAgICBUaGUgbGluZSB0eXBlIHRvIGdyb3VwXHJcbiAqIEBwYXJhbSAge09iamVjdH0gbGluZXNIYXNoIFRoZSBoYXNoIG9mIGxpbmVzXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdyb3VwTGluZXModHlwZSwgbGluZXNIYXNoKSB7XHJcblxyXG4gIGNvbnN0IHR5cGVkTGluZXMgPSBnZXRMaW5lcyhbdHlwZV0sIGxpbmVzSGFzaCk7XHJcblxyXG4gIGlmICghdHlwZWRMaW5lcykgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IGNvZGVzICAgID0gT2JqZWN0LmtleXModHlwZWRMaW5lcyk7XHJcbiAgY29uc3QgaXNTdHJpbmcgPSBjb2Rlcy5sZW5ndGggPT09IDEgJiYgY29kZXNbMF0gPT09IHR5cGU7XHJcblxyXG4gIGlmIChpc1N0cmluZykgcmV0dXJuIGxpbmVzSGFzaFt0eXBlXTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHR5cGVkTGluZXMpXHJcbiAgLnJlZHVjZSgoaGFzaCwgW2NvZGUsIGRhdGFdKSA9PiB7XHJcbiAgICBjb25zdCBzdWJ0eXBlID0gY29kZS5yZXBsYWNlKGAke3R5cGV9LWAsIGBgKTtcclxuICAgIGhhc2hbc3VidHlwZV0gPSBkYXRhOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICByZXR1cm4gaGFzaDtcclxuICB9LCB7fSk7XHJcblxyXG59XHJcbiIsImltcG9ydCBjbGVhbkJyYWNrZXRzICAgICAgIGZyb20gJy4vY2xlYW5CcmFja2V0cy5tanMnO1xyXG5pbXBvcnQgZGlmZmVyZW5jZSAgICAgICAgICBmcm9tICcuL2RpZmZlcmVuY2UubWpzJztcclxuaW1wb3J0IGdldENvZGUgICAgICAgICAgICAgZnJvbSAnLi9nZXRDb2RlLm1qcyc7XHJcbmltcG9ydCBnZXRMaW5lcyAgICAgICAgICAgIGZyb20gJy4vZ2V0TGluZXMubWpzJztcclxuaW1wb3J0IGdldExpbmVUeXBlICAgICAgICAgZnJvbSAnLi9nZXRMaW5lVHlwZS5tanMnO1xyXG5pbXBvcnQgZ2V0TWF0Y2hlcyAgICAgICAgICBmcm9tICcuL2dldE1hdGNoZXMubWpzJztcclxuaW1wb3J0IGdldFNjaGVtYSAgICAgICAgICAgZnJvbSAnLi9nZXRTY2hlbWEubWpzJztcclxuaW1wb3J0IGdyb3VwTGluZXMgICAgICAgICAgZnJvbSAnLi9ncm91cExpbmVzLm1qcyc7XHJcbmltcG9ydCBpc1N0cmluZyAgICAgICAgICAgIGZyb20gJy4vaXNTdHJpbmcubWpzJztcclxuaW1wb3J0IGlzVmFsaWRUYWcgICAgICAgICAgZnJvbSAnLi9pc1ZhbGlkVGFnLm1qcyc7XHJcbmltcG9ydCBtZXJnZVRyYW5zY3JpcHRpb25zIGZyb20gJy4vbWVyZ2VUcmFuc2NyaXB0aW9ucy5tanMnO1xyXG5pbXBvcnQgdmFsaWRhdGVMYW5ndWFnZXMgICBmcm9tICcuL3ZhbGlkYXRlTGFuZ3VhZ2VzLm1qcyc7XHJcbmltcG9ydCB2YWxpZGF0ZU51bUl0ZW1zICAgIGZyb20gJy4vdmFsaWRhdGVOdW1JdGVtcy5tanMnO1xyXG5pbXBvcnQgemlwICAgICAgICAgICAgICAgICBmcm9tICcuL3ppcC5tanMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBjbGVhbkJyYWNrZXRzLFxyXG4gIGRpZmZlcmVuY2UsXHJcbiAgZ2V0Q29kZSxcclxuICBnZXRMaW5lcyxcclxuICBnZXRMaW5lVHlwZSxcclxuICBnZXRNYXRjaGVzLFxyXG4gIGdldFNjaGVtYSxcclxuICBncm91cExpbmVzLFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzVmFsaWRUYWcsXHJcbiAgbWVyZ2VUcmFuc2NyaXB0aW9ucyxcclxuICB2YWxpZGF0ZUxhbmd1YWdlcyxcclxuICB2YWxpZGF0ZU51bUl0ZW1zLFxyXG4gIHppcCxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IGBzdHJpbmdgO1xyXG59XHJcbiIsImNvbnN0IGNvZGVSZWdFeHAgICAgICA9IC9eWy1BLVphLXowLTldKyQvdTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBhIGJhY2tzbGFzaCBjb2RlIGlzIHZhbGlkXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gIHN0ciBUaGUgc3RyaW5nIHRvIGNoZWNrLCB3aXRob3V0IGEgbGVhZGluZyBzbGFzaFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZENvZGUoc3RyKSB7XHJcbiAgcmV0dXJuIGNvZGVSZWdFeHAudGVzdChzdHIpO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlXHJcbiAgbWF4LWxlbixcclxuICBwcmVmZXItbmFtZWQtY2FwdHVyZS1ncm91cCxcclxuKi9cclxuXHJcbi8vIFRoaXMgUmVnRXhwIHdhcyBwcm9kdWNlZCB1c2luZyB0aGUgW2lldGYtbGFuZ3VhZ2UtdGFnLXJlZ2V4XShodHRwczovL2dpdGh1Yi5jb20vc2ViaW5zdWEvaWV0Zi1sYW5ndWFnZS10YWctcmVnZXgpIGxpYnJhcnlcclxuY29uc3QgbGFuZ1JlZ0V4cCA9IC9eKCgoZW4tR0Itb2VkfGktYW1pfGktYm5ufGktZGVmYXVsdHxpLWVub2NoaWFufGktaGFrfGkta2xpbmdvbnxpLWx1eHxpLW1pbmdvfGktbmF2YWpvfGktcHdufGktdGFvfGktdGF5fGktdHN1fHNnbi1CRS1GUnxzZ24tQkUtTkx8c2duLUNILURFKXwoYXJ0LWxvamJhbnxjZWwtZ2F1bGlzaHxuby1ib2t8bm8tbnlufHpoLWd1b3l1fHpoLWhha2thfHpoLW1pbnx6aC1taW4tbmFufHpoLXhpYW5nKSl8KCgoW0EtWmEtel17MiwzfSgtKFtBLVphLXpdezN9KC1bQS1aYS16XXszfSl7MCwyfSkpPyl8W0EtWmEtel17NH18W0EtWmEtel17NSw4fSkoLShbQS1aYS16XXs0fSkpPygtKFtBLVphLXpdezJ9fFswLTldezN9KSk/KC0oW0EtWmEtejAtOV17NSw4fXxbMC05XVtBLVphLXowLTldezN9KSkqKC0oWzAtOUEtV1ktWmEtd3ktel0oLVtBLVphLXowLTldezIsOH0pKykpKigtKHgoLVtBLVphLXowLTldezEsOH0pKykpPyl8KHgoLVtBLVphLXowLTldezEsOH0pKykpJC91O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVMYW5ndWFnZVRhZyh0YWcpIHtcclxuICByZXR1cm4gbGFuZ1JlZ0V4cC50ZXN0KHRhZyk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGVcclxuICBuby1wYXJhbS1yZWFzc2lnbixcclxuKi9cclxuXHJcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL2lzU3RyaW5nLm1qcyc7XHJcblxyXG4vKipcclxuICogQWNjZXB0cyBhbiBhcnJheSBvZiB0cmFuc2NyaXB0aW9ucyAob2JqZWN0cyBvciBzdHJpbmdzKSBhbmQgbWVyZ2VzIHRoZW0gaW50byBvbmVcclxuICogTk9URTogQWxsIGl0ZW1zIGluIHRoZSBhcnJheSBtdXN0IGJlIGVpdGhlciBzdHJpbmdzIG9yIG9iamVjdHNcclxuICogQHBhcmFtICB7QXJyYXl9ICAgICAgICAgdHJhbnNjcmlwdGlvbnNcclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgW3NlcGFyYXRvcj0nJ10gQSBzZXBhcmF0b3IgdG8gam9pbiB0cmFuc2NyaXB0aW9uIHN0cmluZ3Mgd2l0aFxyXG4gKiBAcmV0dXJuIHtPYmplY3R8U3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VUcmFuc2NyaXB0aW9ucyh0cmFuc2NyaXB0aW9ucywgc2VwYXJhdG9yID0gYGApIHtcclxuXHJcbiAgaWYgKCF0cmFuc2NyaXB0aW9ucy5sZW5ndGgpIHJldHVybiBgYDtcclxuXHJcbiAgcmV0dXJuIHRyYW5zY3JpcHRpb25zLnJlZHVjZSgodHhuLCBwYXJ0KSA9PiB7XHJcblxyXG4gICAgaWYgKGlzU3RyaW5nKHBhcnQpKSByZXR1cm4gYCR7dHhufSR7c2VwYXJhdG9yfSR7cGFydH1gO1xyXG5cclxuICAgIE9iamVjdC5lbnRyaWVzKHBhcnQpLmZvckVhY2goKFtsYW5nLCBkYXRhXSkgPT4ge1xyXG4gICAgICB0eG5bbGFuZ10gKz0gYCR7c2VwYXJhdG9yfSR7ZGF0YX1gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHR4bjtcclxuXHJcbiAgfSk7XHJcblxyXG59XHJcbiIsImltcG9ydCBpc1ZhbGlkVGFnIGZyb20gJy4vaXNWYWxpZFRhZy5tanMnO1xyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyB0aGUgbGFuZ3VhZ2UgdGFncyBmb3IgTXVsdGlMYW5nU3RyaW5nIGZpZWxkc1xyXG4gKiBAcGFyYW0gIHtTdHJpbmd8T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHZhbGlkYXRlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUxhbmd1YWdlcyhkYXRhKSB7XHJcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtsYW5nXSkgPT4ge1xyXG4gICAgICBpZiAoIWlzVmFsaWRUYWcobGFuZykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bGFuZ30gaXMgbm90IGEgdmFsaWQgSUVURiBsYW5ndWFnZSB0YWcuYCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogQ2hlY2tzIHRoYXQgZWFjaCBsaW5lIGluIHRoZSBsaW5lcyBoYXNoIGhhcyB0aGUgc2FtZSBudW1iZXIgb2YgaXRlbXNcclxuICogQHBhcmFtIHtPYmplY3R9IGxpbmVzIFRoZSBsaW5lcyBoYXNoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZU51bUl0ZW1zKGxpbmVzKSB7XHJcblxyXG4gIGNvbnN0IGl0ZW1MaXN0cyAgICA9IE9iamVjdC52YWx1ZXMobGluZXMpO1xyXG4gIGNvbnN0IG51bUl0ZW1zICAgICA9IE1hdGgubWF4KC4uLml0ZW1MaXN0cy5tYXAodyA9PiB3Lmxlbmd0aCkpO1xyXG4gIGNvbnN0IHNhbWVOdW1JdGVtcyA9IGl0ZW1MaXN0cy5ldmVyeShsaXN0ID0+IGxpc3QubGVuZ3RoID09PSBudW1JdGVtcyk7XHJcblxyXG4gIGlmICghc2FtZU51bUl0ZW1zKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFsbCBtb3JwaGVtZSBhbmQgZ2xvc3NlcyBsaW5lcyBtdXN0IGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHdvcmRzIGFuZCBtb3JwaGVtZXMuYCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogVGFrZXMgYW4gb2JqZWN0IGhhc2ggd2hvc2UgdmFsdWVzIGFyZSBhcnJheXMgYW5kIHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aG9zZSBrZXlzIG1hdGNoIHRob3NlIG9mIHRoZSBvcmlnaW5hbCBoYXNoXHJcbiAqIEBwYXJhbSAge09iamVjdH0gaGFzaCBBbiBvYmplY3QgaGFzaCB3aG9zZSB2YWx1ZXMgYXJlIGFycmF5c1xyXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgUmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzIHdob3NlIGtleXMgbWF0Y2ggdGhvc2Ugb2YgdGhlIG9yaWdpbmFsIGhhc2hcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHppcChoYXNoKSB7XHJcblxyXG4gIGNvbnN0IG51bUl0ZW1zID0gTWF0aC5tYXgoLi4uT2JqZWN0LnZhbHVlcyhoYXNoKS5tYXAodyA9PiB3Lmxlbmd0aCkpO1xyXG4gIGNvbnN0IGl0ZW1zICAgID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtSXRlbXM7IGkrKykge1xyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuZW50cmllcyhoYXNoKVxyXG4gICAgLnJlZHVjZSgobywgW2tleSwgYXJyXSkgPT4ge1xyXG4gICAgICBvW2tleV0gPSBhcnJbaV07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgcmV0dXJuIG87XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgaXRlbXMucHVzaChpdGVtKTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXRlbXM7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=