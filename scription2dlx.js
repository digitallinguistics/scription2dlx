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

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var UNSCOPABLES = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\")('unscopables');\n\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  hide(ArrayPrototype, UNSCOPABLES, create(null));\n}\n\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar codePointAt = __webpack_require__(/*! ../internals/string-at */ \"./node_modules/core-js/internals/string-at.js\");\n\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? codePointAt(S, index, true).length : 1);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      if (value != value) return true;\n    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    }\n    return !IS_INCLUDES && -1;\n  };\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar SPECIES = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\")('species');\n\nmodule.exports = function (originalArray, length) {\n  var C;\n\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  }\n\n  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n\n  switch (length) {\n    case 0:\n      return function () {\n        return fn.call(that);\n      };\n\n    case 1:\n      return function (a) {\n        return fn.call(that, a);\n      };\n\n    case 2:\n      return function (a, b) {\n        return fn.call(that, a, b);\n      };\n\n    case 3:\n      return function (a, b, c) {\n        return fn.call(that, a, b, c);\n      };\n  }\n\n  return function () {\n    return fn.apply(that, arguments);\n  };\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  } catch (error) {\n    var returnMethod = iterator['return'];\n    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));\n    throw error;\n  }\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar TO_STRING_TAG = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\")('toStringTag');\n\nvar CORRECT_ARGUMENTS = classofRaw(function () {\n  return arguments;\n}()) == 'Arguments';\n\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) {}\n};\n\nmodule.exports = function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\n\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\")(function () {\n  function F() {}\n\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\").IteratorPrototype;\n\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar returnThis = function () {\n  return this;\n};\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, {\n    next: createPropertyDescriptor(1, next)\n  });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nvar $export = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\n\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js/internals/create-iterator-constructor.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js/internals/object-set-prototype-of.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js/internals/set-to-string-tag.js\");\n\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\")('iterator');\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () {\n  return this;\n};\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n\n    switch (KIND) {\n      case KEYS:\n        return function keys() {\n          return new IteratorConstructor(this, KIND);\n        };\n\n      case VALUES:\n        return function values() {\n          return new IteratorConstructor(this, KIND);\n        };\n\n      case ENTRIES:\n        return function entries() {\n          return new IteratorConstructor(this, KIND);\n        };\n    }\n\n    return function () {\n      return new IteratorConstructor(this);\n    };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          hide(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n\n    defaultIterator = function values() {\n      return nativeIterator.call(this);\n    };\n  }\n\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    hide(IterablePrototype, ITERATOR, defaultIterator);\n  }\n\n  Iterators[NAME] = defaultIterator;\n\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $export({\n      target: NAME,\n      proto: true,\n      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME\n    }, methods);\n  }\n\n  return methods;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\")(function () {\n  return Object.defineProperty({}, 'a', {\n    get: function () {\n      return 7;\n    }\n  }).a != 7;\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\").document;\n\nvar exist = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return exist ? document.createElement(it) : {};\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\n\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n\n    if (options.sham || targetProperty && targetProperty.sham) {\n      hide(sourceProperty, 'sham', true);\n    }\n\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  var re = /./;\n\n  re.exec = function () {\n    var result = [];\n    result.groups = {\n      a: '7'\n    };\n    return result;\n  };\n\n  return ''.replace(re, '$<a>') !== '7';\n});\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {\n  var re = /(?:)/;\n  var originalExec = re.exec;\n\n  re.exec = function () {\n    return originalExec.apply(this, arguments);\n  };\n\n  var result = 'ab'.split(re);\n  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';\n});\n\nmodule.exports = function (KEY, length, exec, sham) {\n  var SYMBOL = wellKnownSymbol(KEY);\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    var O = {};\n\n    O[SYMBOL] = function () {\n      return 7;\n    };\n\n    return ''[KEY](O) != 7;\n  });\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    var execCalled = false;\n    var re = /a/;\n\n    re.exec = function () {\n      execCalled = true;\n      return null;\n    };\n\n    if (KEY === 'split') {\n      re.constructor = {};\n\n      re.constructor[SPECIES] = function () {\n        return re;\n      };\n    }\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      if (regexp.exec === regexpExec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          return {\n            done: true,\n            value: nativeRegExpMethod.call(regexp, str, arg2)\n          };\n        }\n\n        return {\n          done: true,\n          value: nativeMethod.call(str, regexp, arg2)\n        };\n      }\n\n      return {\n        done: false\n      };\n    });\n    var stringMethod = methods[0];\n    var regexMethod = methods[1];\n    redefine(String.prototype, KEY, stringMethod);\n    redefine(RegExp.prototype, SYMBOL, length == 2 ? function (string, arg) {\n      return regexMethod.call(string, this, arg);\n    } : function (string) {\n      return regexMethod.call(string, this);\n    });\n    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);\n  }\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/flatten-into-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js/internals/bind-context.js\");\n\nvar flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;\n  var element;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      if (depth > 0 && isArray(element)) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n\n    sourceIndex++;\n  }\n\n  return targetIndex;\n};\n\nmodule.exports = flattenIntoArray;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/forced-string-trim-method.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-trim-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar non = '\\u200B\\u0085\\u180E';\n\nmodule.exports = function (METHOD_NAME) {\n  return fails(function () {\n    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;\n  });\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/forced-string-trim-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\")('native-function-to-string', Function.toString);\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js/internals/classof.js\");\n\nvar ITERATOR = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\")('iterator');\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = typeof window == 'object' && window && window.Math == Math ? window : typeof self == 'object' && self && self.Math == Math ? self : Function('return this')();\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\") ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/hide.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\").document;\n\nmodule.exports = document && document.documentElement;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\") && !__webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\")('div'), 'a', {\n    get: function () {\n      return 7;\n    }\n  }).a != 7;\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\nmodule.exports = fails(function () {\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\").WeakMap;\n\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    }\n\n    return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n\n  set = function (it, metadata) {\n    hide(it, STATE, metadata);\n    return metadata;\n  };\n\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar ITERATOR = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\")('iterator');\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\nmodule.exports = isForced;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js/internals/is-array-iterator-method.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js/internals/bind-context.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js/internals/get-iterator-method.js\");\n\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js/internals/call-with-safe-iteration-closing.js\");\n\nvar BREAK = {};\n\nvar exports = module.exports = function (iterable, fn, that, ENTRIES, ITERATOR) {\n  var boundFunction = bind(fn, that, ENTRIES ? 2 : 1);\n  var iterator, iterFn, index, length, result, step;\n\n  if (ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');\n\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = toLength(iterable.length); length > index; index++) {\n        result = ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);\n        if (result === BREAK) return BREAK;\n      }\n\n      return;\n    }\n\n    iterator = iterFn.call(iterable);\n  }\n\n  while (!(step = iterator.next()).done) {\n    if (callWithSafeIterationClosing(iterator, boundFunction, step.value, ENTRIES) === BREAK) return BREAK;\n  }\n};\n\nexports.BREAK = BREAK;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js/internals/object-get-prototype-of.js\");\n\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar ITERATOR = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\")('iterator');\n\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () {\n  return this;\n};\n\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n\nmodule.exports = !__webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\")(function () {\n  return !String(Symbol());\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"./node_modules/core-js/internals/function-to-string.js\");\n\nvar WeakMap = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\").WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\n\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\nvar IE_PROTO = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\")('IE_PROTO');\n\nvar PROTOTYPE = 'prototype';\n\nvar Empty = function () {};\n\nvar createDict = function () {\n  var iframe = documentCreateElement('iframe');\n  var length = enumBugKeys.length;\n  var lt = '<';\n  var script = 'script';\n  var gt = '>';\n  var js = 'java' + script + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  iframe.src = String(js);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n\n  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];\n\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    result[IE_PROTO] = O;\n  } else result = createDict();\n\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\n__webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\")[IE_PROTO] = true;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var key;\n\n  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);\n\n  return O;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) {}\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) {}\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar IE_PROTO = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\")('IE_PROTO');\n\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js/internals/correct-prototype-getter.js\");\n\nvar ObjectPrototype = Object.prototype;\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  }\n\n  return O instanceof Object ? ObjectPrototype : null;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar arrayIndexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\")(false);\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({\n  1: 2\n}, 1);\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = nativeGetOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ \"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js\");\n\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var correctSetter = false;\n  var test = {};\n  var setter;\n\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    correctSetter = test instanceof Array;\n  } catch (error) {}\n\n  return function setPrototypeOf(O, proto) {\n    validateSetPrototypeOfArguments(O, proto);\n    if (correctSetter) setter.call(O, proto);else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\n\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar Reflect = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\").Reflect;\n\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"./node_modules/core-js/internals/function-to-string.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(nativeFunctionToString).split('toString');\n\n__webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\")('inspectSource', function (it) {\n  return nativeFunctionToString.call(it);\n});\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n\n  if (O === global) {\n    if (simple) O[key] = value;else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n\n  if (simple) O[key] = value;else hide(O, key, value);\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar regexpExec = __webpack_require__(/*! ./regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n\n    if (typeof result !== 'object') {\n      throw TypeError('RegExp exec method returned something other than an Object or null');\n    }\n\n    return result;\n  }\n\n  if (classof(R) !== 'RegExp') {\n    throw TypeError('RegExp#exec called on incompatible receiver');\n  }\n\n  return regexpExec.call(R, S);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n\nvar regexpFlags = __webpack_require__(/*! ./regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\nvar nativeReplace = String.prototype.replace;\nvar patchedExec = nativeExec;\n\nvar UPDATES_LAST_INDEX_WRONG = function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n}();\n\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    hide(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  }\n\n  return value;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar TO_STRING_TAG = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\")('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC) {\n  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {\n    defineProperty(it, TO_STRING_TAG, {\n      configurable: true,\n      value: TAG\n    });\n  }\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\")('keys');\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.0.1',\n  mode: __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (that, pos, CONVERT_TO_STRING) {\n  var S = String(requireObjectCoercible(that));\n  var position = toInteger(pos);\n  var size = S.length;\n  var first, second;\n  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n  first = S.charCodeAt(position);\n  return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar whitespace = '[' + __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\") + ']';\nvar ltrim = RegExp('^' + whitespace + whitespace + '*');\nvar rtrim = RegExp(whitespace + whitespace + '*$');\n\nmodule.exports = function (string, TYPE) {\n  string = String(requireObjectCoercible(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0;\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nmodule.exports = function (O, proto) {\n  anObject(O);\n\n  if (!isObject(proto) && proto !== null) {\n    throw TypeError(\"Can't set \" + String(proto) + ' as a prototype');\n  }\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/validate-set-prototype-of-arguments.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\")('wks');\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar Symbol = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\").Symbol;\n\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = function (name) {\n  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name] || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/internals/whitespaces.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ \"./node_modules/core-js/internals/flatten-into-array.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\n__webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\")({\n  target: 'Array',\n  proto: true\n}, {\n  flatMap: function flatMap(callbackfn) {\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A;\n    aFunction(callbackfn);\n    A = arraySpeciesCreate(O, 0);\n    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/es.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.flat.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ \"./node_modules/core-js/internals/flatten-into-array.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\n__webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\")({\n  target: 'Array',\n  proto: true\n}, {\n  flat: function flat() {\n    var depthArg = arguments[0];\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A = arraySpeciesCreate(O, 0);\n    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));\n    return A;\n  }\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/es.array.flat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\n\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js/internals/iterators.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated),\n    index: 0,\n    kind: kind\n  });\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return {\n      value: undefined,\n      done: true\n    };\n  }\n\n  if (kind == 'keys') return {\n    value: index,\n    done: false\n  };\n  if (kind == 'values') return {\n    value: target[index],\n    done: false\n  };\n  return {\n    value: [index, target[index]],\n    done: false\n  };\n}, 'values');\nIterators.Arguments = Iterators.Array;\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat-map.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\")('flatMap');\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/es.array.unscopables.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unscopables.flat.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\")('flat');\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/es.array.unscopables.flat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.from-entries.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.from-entries.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js/internals/iterate.js\");\n\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\n\n__webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\")({\n  target: 'Object',\n  stat: true\n}, {\n  fromEntries: function fromEntries(iterable) {\n    var obj = {};\n    iterate(iterable, function (k, v) {\n      createProperty(obj, k, v);\n    }, undefined, true);\n    return obj;\n  }\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/es.object.from-entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\n\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\n\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\n\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n__webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\")('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {\n  return [function replace(searchValue, replaceValue) {\n    var O = requireObjectCoercible(this);\n    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];\n    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);\n  }, function (regexp, replaceValue) {\n    var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);\n    if (res.done) return res.value;\n    var rx = anObject(regexp);\n    var S = String(this);\n    var functionalReplace = typeof replaceValue === 'function';\n    if (!functionalReplace) replaceValue = String(replaceValue);\n    var global = rx.global;\n\n    if (global) {\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n    }\n\n    var results = [];\n\n    while (true) {\n      var result = regExpExec(rx, S);\n      if (result === null) break;\n      results.push(result);\n      if (!global) break;\n      var matchStr = String(result[0]);\n      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n    }\n\n    var accumulatedResult = '';\n    var nextSourcePosition = 0;\n\n    for (var i = 0; i < results.length; i++) {\n      result = results[i];\n      var matched = String(result[0]);\n      var position = max(min(toInteger(result.index), S.length), 0);\n      var captures = [];\n\n      for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n\n      var namedCaptures = result.groups;\n\n      if (functionalReplace) {\n        var replacerArgs = [matched].concat(captures, position, S);\n        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n        var replacement = String(replaceValue.apply(undefined, replacerArgs));\n      } else {\n        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n      }\n\n      if (position >= nextSourcePosition) {\n        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n        nextSourcePosition = position + matched.length;\n      }\n    }\n\n    return accumulatedResult + S.slice(nextSourcePosition);\n  }];\n\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n\n    return nativeReplace.call(replacement, symbols, function (match, ch) {\n      var capture;\n\n      switch (ch.charAt(0)) {\n        case '$':\n          return '$';\n\n        case '&':\n          return matched;\n\n        case '`':\n          return str.slice(0, position);\n\n        case \"'\":\n          return str.slice(tailPos);\n\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n\n        default:\n          var n = +ch;\n          if (n === 0) return match;\n\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n\n          capture = captures[n - 1];\n      }\n\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/es.string.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar internalStringTrim = __webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\");\n\nvar FORCED = __webpack_require__(/*! ../internals/forced-string-trim-method */ \"./node_modules/core-js/internals/forced-string-trim-method.js\")('trim');\n\n__webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\")({\n  target: 'String',\n  proto: true,\n  forced: FORCED\n}, {\n  trim: function trim() {\n    return internalStringTrim(this, 3);\n  }\n});\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/es.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar NativeSymbol = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\").Symbol;\n\nif (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || NativeSymbol().description !== undefined)) {\n  var EmptyStringDescriptionStore = {};\n\n  var SymbolWrapper = function Symbol() {\n    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var result = this instanceof SymbolWrapper ? new NativeSymbol(description) : description === undefined ? NativeSymbol() : NativeSymbol(description);\n    if (description === '') EmptyStringDescriptionStore[result] = true;\n    return result;\n  };\n\n  copyConstructorProperties(SymbolWrapper, NativeSymbol);\n  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;\n  symbolPrototype.constructor = SymbolWrapper;\n  var symbolToString = symbolPrototype.toString;\n  var native = String(NativeSymbol('test')) == 'Symbol(test)';\n  var regexp = /^Symbol\\((.*)\\)[^)]+$/;\n  defineProperty(symbolPrototype, 'description', {\n    configurable: true,\n    get: function description() {\n      var symbol = isObject(this) ? this.valueOf() : this;\n      var string = symbolToString.call(symbol);\n      if (has(EmptyStringDescriptionStore, symbol)) return '';\n      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');\n      return desc === '' ? undefined : desc;\n    }\n  });\n\n  __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\")({\n    global: true,\n    forced: true\n  }, {\n    Symbol: SymbolWrapper\n  });\n}\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/es.symbol.description.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\n\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n\n  if (CollectionPrototype) {\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      hide(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n    if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://scription2dlx/./node_modules/core-js/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./src/constants/index.mjs":
/*!*********************************!*\
  !*** ./src/constants/index.mjs ***!
  \*********************************/
/*! exports provided: types */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.mjs */ \"./src/constants/types.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return _types_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://scription2dlx/./src/constants/index.mjs?");

/***/ }),

/***/ "./src/constants/types.mjs":
/*!*********************************!*\
  !*** ./src/constants/types.mjs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\"gl\", \"lit\", \"m\", \"n\", \"phon\", \"sp\", \"tln\", \"trs\", \"txn\"]);\n\n//# sourceURL=webpack://scription2dlx/./src/constants/types.mjs?");

/***/ }),

/***/ "./src/index.mjs":
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return scription2dlx; });\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var _parseHeader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseHeader.mjs */ \"./src/parseHeader.mjs\");\n/* harmony import */ var _parseUtterances_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseUtterances.mjs */ \"./src/parseUtterances.mjs\");\n\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction scription2dlx(scription = \"\", {\n  parser\n} = {}) {\n  const isEmpty = scription.trim() === \"\";\n  if (isEmpty) return {};\n  const header = Object(_parseHeader_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scription, parser);\n  const utterances = Object(_parseUtterances_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(scription);\n  return _objectSpread({}, header, {\n    utterances\n  });\n}\n\n//# sourceURL=webpack://scription2dlx/./src/index.mjs?");

/***/ }),

/***/ "./src/parseHeader.mjs":
/*!*****************************!*\
  !*** ./src/parseHeader.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseHeader; });\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\n\n\n\n\nfunction _wrapRegExp(re, groups) { _wrapRegExp = function (re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== \"object\") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (typeof call === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nfunction getHeaderString(text) {\n  const headerRegExp = _wrapRegExp(/\\x2D\\x2D\\x2D((?:[\\0-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+?)\\x2D\\x2D\\x2D/g, {\n    header: 1\n  });\n\n  const result = headerRegExp.exec(text);\n  return result ? result.groups.header.trim() : null;\n}\n\nfunction validateHeader(header) {\n  if (!header) throw new Error(\"The metadata header must not be empty.\");\n  if (Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__[\"isString\"])(header)) throw new Error(\"The metadata header could not be parsed as a JavaScript Object.\");\n  const {\n    title,\n    utterances\n  } = header;\n  if (!title) throw new Error(\"The metadata header must have a \\\"title\\\" attribute.\");\n  if (utterances) throw new Error(\"The metadata header must not have an \\\"utterances\\\" attribute.\");\n}\n\nfunction parseHeader(text, parse) {\n  const headerString = getHeaderString(text);\n  const isMissing = headerString === null;\n  if (isMissing) return {};\n\n  if (parse) {\n    const header = parse(headerString);\n    validateHeader(header);\n    return header;\n  }\n\n  return {\n    header: headerString\n  };\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseHeader.mjs?");

/***/ }),

/***/ "./src/parseUtterance/index.mjs":
/*!**************************************!*\
  !*** ./src/parseUtterance/index.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseUtterance; });\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _parseCustom_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parseCustom.mjs */ \"./src/parseUtterance/parseCustom.mjs\");\n/* harmony import */ var _parseLiteral_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parseLiteral.mjs */ \"./src/parseUtterance/parseLiteral.mjs\");\n/* harmony import */ var _parseNotes_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parseNotes.mjs */ \"./src/parseUtterance/parseNotes.mjs\");\n/* harmony import */ var _parsePhonetic_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsePhonetic.mjs */ \"./src/parseUtterance/parsePhonetic.mjs\");\n/* harmony import */ var _parseSpeaker_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parseSpeaker.mjs */ \"./src/parseUtterance/parseSpeaker.mjs\");\n/* harmony import */ var _parseTranscript_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parseTranscript.mjs */ \"./src/parseUtterance/parseTranscript.mjs\");\n/* harmony import */ var _parseTranscription_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parseTranscription.mjs */ \"./src/parseUtterance/parseTranscription.mjs\");\n/* harmony import */ var _parseTranslation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parseTranslation.mjs */ \"./src/parseUtterance/parseTranslation.mjs\");\n/* harmony import */ var _parseWords_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parseWords.mjs */ \"./src/parseUtterance/parseWords.mjs\");\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\n\n\n\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _wrapRegExp(re, groups) { _wrapRegExp = function (re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== \"object\") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (typeof call === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n\n\n\n\nconst lineDataRegExp = _wrapRegExp(/^\\\\(?:(?:[0-9A-Z_a-z]|\\x2D)+)((?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])*)$/, {\n  lineData: 1\n});\n\nconst newlineRegExp = /\\r?\\n/g;\nconst wordTypes = [\"gl\", \"m\", \"w\", \"wlt\"];\n\nfunction createLinesHash(lines, schema) {\n  return lines.reduce((hash, line, i) => {\n    const code = schema[i] || \"n-\".concat(i);\n    const match = line.match(lineDataRegExp);\n    const data = (match ? match.groups.lineData : line).trim();\n    hash[code] = data;\n    return hash;\n  }, {});\n}\n\nfunction parseUtterance(utteranceString, schema) {\n  try {\n    const lines = utteranceString.split(newlineRegExp).map(line => line.trim());\n    const codes = lines.map(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_13__[\"getCode\"]).filter(Boolean);\n    if (codes.length) schema = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_13__[\"getSchema\"])(utteranceString);\n    const linesHash = createLinesHash(lines, schema);\n    const noData = !Object.values(linesHash).every(Boolean);\n    if (noData) return null;\n    const speaker = Object(_parseSpeaker_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(linesHash.sp);\n    const transcript = Object(_parseTranscript_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(linesHash);\n    let transcription = Object(_parseTranscription_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(linesHash);\n    const phonetic = Object(_parsePhonetic_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(linesHash.phon);\n    const literal = Object(_parseLiteral_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(linesHash);\n    const translation = Object(_parseTranslation_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(linesHash) || \"\";\n    const notes = Object(_parseNotes_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(linesHash);\n    const words = Object(_parseWords_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_13__[\"getLines\"])(wordTypes, linesHash) || {});\n    const custom = Object(_parseCustom_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(linesHash);\n\n    if (!transcription) {\n      const wordTranscriptions = words.map(({\n        transcription: txn\n      }) => txn);\n      transcription = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_13__[\"mergeTranscriptions\"])(wordTranscriptions, \" \") || \"\";\n    }\n\n    return _objectSpread({}, speaker ? {\n      speaker\n    } : {}, transcript ? {\n      transcript\n    } : {}, {\n      transcription\n    }, phonetic ? {\n      phonetic\n    } : {}, literal ? {\n      literal\n    } : {}, {\n      translation\n    }, notes.length ? {\n      notes\n    } : {}, words.length ? {\n      words\n    } : {}, custom);\n  } catch (e) {\n    const utteranceText = utteranceString.split(newlineRegExp).map(str => str.trim()).join(\"\\n\");\n    e.name = parseUtterance.name;\n    e.message = \"\".concat(e.message, \"\\n\\nUtterance text:\\n\\n\").concat(utteranceText);\n    throw e;\n  }\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/index.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseCustom.mjs":
/*!********************************************!*\
  !*** ./src/parseUtterance/parseCustom.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseCustom; });\n/* harmony import */ var _constants_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index.mjs */ \"./src/constants/index.mjs\");\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.mjs */ \"./src/utilities/index.mjs\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst singleLines = [\"phon\", \"sp\"];\nfunction parseCustom(lines) {\n  const lineCodes = Object.keys(lines);\n  const customTypes = lineCodes.map(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"getLineType\"]).filter(type => !_constants_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"types\"].includes(type)).reduce((hash, type) => {\n    hash[type] = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"groupLines\"])(type, lines);\n    return hash;\n  }, {});\n  const customCodes = lineCodes.filter(code => {\n    const type = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"getLineType\"])(code);\n    const isSingleLine = singleLines.includes(type);\n    const hasSubType = code.startsWith(\"\".concat(type, \"-\"));\n    return isSingleLine && hasSubType;\n  }).reduce((hash, code) => {\n    hash[code] = lines[code];\n    return hash;\n  }, {});\n  return _objectSpread({}, customCodes, customTypes);\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseCustom.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseLiteral.mjs":
/*!*********************************************!*\
  !*** ./src/parseUtterance/parseLiteral.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseLiteral; });\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\nfunction parseLiteral(lines) {\n  let data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"groupLines\"])(\"lit\", lines);\n  if (!data) return null;\n  data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"cleanBrackets\"])(\"lit\", data);\n  Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"validateLanguages\"])(data);\n  return data;\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseLiteral.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseMorphemes/getDuplicateMorphemes.mjs":
/*!*********************************************************************!*\
  !*** ./src/parseUtterance/parseMorphemes/getDuplicateMorphemes.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDuplicateMorphemes; });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\n\n\nfunction getDuplicateGlosses(code, morphemes) {\n  if (!morphemes.length) return [];\n  const glosses = morphemes.map(({\n    gloss\n  }) => code === \"string\" ? gloss : gloss[code]);\n  const glossCounts = glosses.reduce((counts, gl) => {\n    const currentCount = counts.get(gl) || 0;\n    counts.set(gl, currentCount + 1);\n    return counts;\n  }, new Map());\n  return Array.from(glossCounts.entries()).filter(([, count]) => count > 1).map(([gl]) => gl);\n}\n\nfunction getFirstGlossCode({\n  gloss\n}) {\n  const isBareString = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"isString\"])(gloss);\n  return isBareString ? \"string\" : Object.keys(gloss)[0];\n}\n\nfunction getDuplicateMorphemes(morphemes) {\n  const glossToCheck = getFirstGlossCode(morphemes[0]);\n  const duplicateGlosses = getDuplicateGlosses(glossToCheck, morphemes);\n  if (!duplicateGlosses) return [];\n  return duplicateGlosses.map(gl => morphemes.filter(({\n    gloss\n  }) => {\n    if (Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"isString\"])(gloss)) return gloss === gl;\n    return gloss[glossToCheck] === gl;\n  }));\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseMorphemes/getDuplicateMorphemes.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseMorphemes/index.mjs":
/*!*****************************************************!*\
  !*** ./src/parseUtterance/parseMorphemes/index.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseMorphemes; });\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.flat */ \"./node_modules/core-js/modules/es.array.flat.js\");\n/* harmony import */ var core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.flat-map */ \"./node_modules/core-js/modules/es.array.flat-map.js\");\n/* harmony import */ var core_js_modules_es_array_unscopables_flat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ \"./node_modules/core-js/modules/es.array.unscopables.flat.js\");\n/* harmony import */ var core_js_modules_es_array_unscopables_flat_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map */ \"./node_modules/core-js/modules/es.array.unscopables.flat-map.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _getDuplicateMorphemes_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getDuplicateMorphemes.mjs */ \"./src/parseUtterance/parseMorphemes/getDuplicateMorphemes.mjs\");\n/* harmony import */ var _separateInfix_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./separateInfix.mjs */ \"./src/parseUtterance/parseMorphemes/separateInfix.mjs\");\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\n\n\n\n\n\n\n\nfunction _wrapRegExp(re, groups) { _wrapRegExp = function (re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== \"object\") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (typeof call === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nfunction createMorphemesHash(wordLines) {\n  return Object.entries(wordLines).reduce((hash, [code, data]) => {\n    hash[code] = tokenizeWord(data);\n    return hash;\n  }, {});\n}\n\nfunction tokenizeWord(string) {\n  const morphemeRegExp = _wrapRegExp(/(\\[(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])*?\\])|((?:[\\0-\\x08\\x0E-\\x1F!-,\\.-<>-\\}\\x7F-\\x9F\\xA1-\\u167F\\u1681-\\u1FFF\\u200B-\\u2027\\u202A-\\u202E\\u2030-\\u205E\\u2060-\\u2FFF\\u3001-\\uD7FF\\uE000-\\uFEFE\\uFF00-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+)/g, {\n    bracketed: 1,\n    unbracketed: 2\n  });\n\n  return Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__[\"getMatches\"])(morphemeRegExp, string).map(({\n    bracketed,\n    unbracketed\n  }) => bracketed || unbracketed);\n}\n\nfunction parseMorphemes(wordLines) {\n  const noData = !Object.values(wordLines).every(line => line.length);\n  if (noData) return [];\n  const morphemesHash = createMorphemesHash(wordLines);\n  Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__[\"validateNumItems\"])(morphemesHash);\n  let morphemes = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__[\"zip\"])(morphemesHash).flatMap(_separateInfix_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).map(data => ({\n    transcription: Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__[\"groupLines\"])(\"m\", data),\n    gloss: Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__[\"groupLines\"])(\"gl\", data)\n  }));\n  if (!morphemes.length) return [];\n  morphemes.forEach(m => {\n    Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__[\"validateLanguages\"])(m.transcription);\n    Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__[\"validateLanguages\"])(m.gloss);\n  });\n  const duplicateMorphemes = Object(_getDuplicateMorphemes_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(morphemes);\n  morphemes = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__[\"difference\"])(morphemes, duplicateMorphemes.flat());\n  const discontinuousMorphemes = duplicateMorphemes.map(dups => ({\n    transcription: Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_9__[\"mergeTranscriptions\"])(dups.map(({\n      transcription\n    }) => transcription), \"\\u2026\"),\n    gloss: dups[0].gloss\n  }));\n  return [...morphemes, ...discontinuousMorphemes];\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseMorphemes/index.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseMorphemes/separateInfix.mjs":
/*!*************************************************************!*\
  !*** ./src/parseUtterance/parseMorphemes/separateInfix.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return separateInfix; });\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\n\n\n\nfunction _wrapRegExp(re, groups) { _wrapRegExp = function (re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== \"object\") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (typeof call === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nfunction separateInfix(morpheme) {\n  const infixRegExp = _wrapRegExp(/((?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])*)<((?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+)>((?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])*)/, {\n    pre: 1,\n    infix: 2,\n    post: 3\n  });\n\n  const entries = Object.entries(morpheme);\n  const [, firstGloss] = entries.find(([code]) => Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_3__[\"getLineType\"])(code) === \"gl\");\n  const match = firstGloss.match(infixRegExp);\n  if (!match) return morpheme;\n  const infixPosition = match.groups.pre ? \"right\" : \"left\";\n  const morphemes = entries.reduce(([i, m], [code, data]) => {\n    const {\n      infix,\n      pre,\n      post\n    } = data.match(infixRegExp).groups;\n    i[code] = infix;\n    m[code] = \"\".concat(pre).concat(post);\n    return [i, m];\n  }, [{}, {}]);\n  return infixPosition === \"left\" ? morphemes : morphemes.reverse();\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseMorphemes/separateInfix.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseNotes.mjs":
/*!*******************************************!*\
  !*** ./src/parseUtterance/parseNotes.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseNotes; });\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\n\n\n\nfunction _wrapRegExp(re, groups) { _wrapRegExp = function (re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== \"object\") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (typeof call === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nfunction parseNotes(lines) {\n  const noteLines = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_3__[\"getLines\"])(\"n\", lines);\n  if (!noteLines) return [];\n  const numberedRegExp = /n\\x2D[0-9]/;\n\n  const noteRegExp = _wrapRegExp(/^(?:[\\t-\\r \\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF]*((?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+?)[\\t-\\r \\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF]*:[\\t-\\r \\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF]*)?((?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+)$/, {\n    source: 1,\n    text: 2\n  });\n\n  return Object.entries(noteLines).map(([rawCode, data]) => {\n    const code = rawCode.replace(numberedRegExp, \"n\");\n    const [, language = \"en\"] = code.split(\"-\", 2);\n    const {\n      source,\n      text\n    } = data.match(noteRegExp).groups;\n\n    if (!Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_3__[\"isValidTag\"])(language)) {\n      throw new Error(\"The \".concat(language, \" language tag is invalid. It must be a valid IETF language tag.\"));\n    }\n\n    return {\n      language,\n      source,\n      text\n    };\n  });\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseNotes.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parsePhonetic.mjs":
/*!**********************************************!*\
  !*** ./src/parseUtterance/parsePhonetic.mjs ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parsePhonetic; });\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\nfunction parsePhonetic(line) {\n  if (!line) return null;\n  return Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"cleanBrackets\"])(\"phon\", line);\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parsePhonetic.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseSpeaker.mjs":
/*!*********************************************!*\
  !*** ./src/parseUtterance/parseSpeaker.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseSpeaker; });\nconst speakerRegExp = /^[0-9A-Za-z]+$/;\n\nfunction isValidSpeaker(speaker) {\n  return speakerRegExp.test(speaker);\n}\n\nfunction parseSpeaker(data) {\n  if (!data) return null;\n\n  if (!isValidSpeaker(data)) {\n    throw new Error(\"\".concat(data, \" is not a valid value for the speaker line.\"));\n  }\n\n  return data;\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseSpeaker.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseTranscript.mjs":
/*!************************************************!*\
  !*** ./src/parseUtterance/parseTranscript.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseTranscript; });\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\nfunction parseTranscript(lines) {\n  const data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"groupLines\"])(\"trs\", lines);\n  return data || null;\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseTranscript.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseTranscription.mjs":
/*!***************************************************!*\
  !*** ./src/parseUtterance/parseTranscription.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseTranscription; });\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\nfunction parseTranscription(lines) {\n  let data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"groupLines\"])(\"txn\", lines);\n  if (!data) return null;\n  data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"cleanBrackets\"])(\"txn\", data);\n  return data;\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseTranscription.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseTranslation.mjs":
/*!*************************************************!*\
  !*** ./src/parseUtterance/parseTranslation.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseTranslation; });\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\nfunction parseTranslation(lines) {\n  const data = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"groupLines\"])(\"tln\", lines);\n  if (!data) return null;\n  Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_0__[\"validateLanguages\"])(data);\n  return data;\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseTranslation.mjs?");

/***/ }),

/***/ "./src/parseUtterance/parseWords.mjs":
/*!*******************************************!*\
  !*** ./src/parseUtterance/parseWords.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseWords; });\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _parseMorphemes_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseMorphemes/index.mjs */ \"./src/parseUtterance/parseMorphemes/index.mjs\");\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/index.mjs */ \"./src/utilities/index.mjs\");\n\n\n\n\nfunction _wrapRegExp(re, groups) { _wrapRegExp = function (re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== \"object\") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (typeof call === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction getWordsHash(wordLines) {\n  return Object.entries(wordLines).reduce((hash, [code, data]) => {\n    hash[code] = tokenizeLine(data);\n    return hash;\n  }, {});\n}\n\nfunction parseWord(data) {\n  const transcription = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__[\"groupLines\"])(\"w\", data) || \"\";\n  const analysis = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__[\"groupLines\"])(\"m\", data);\n  const gloss = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__[\"groupLines\"])(\"gl\", data);\n  const literal = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__[\"groupLines\"])(\"wlt\", data);\n  const morphemes = Object(_parseMorphemes_index_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__[\"getLines\"])([\"gl\", \"m\"], data));\n  return _objectSpread({\n    transcription\n  }, analysis ? {\n    analysis\n  } : {}, gloss ? {\n    gloss\n  } : {}, literal ? {\n    literal\n  } : {}, morphemes.length ? {\n    morphemes\n  } : {});\n}\n\nfunction tokenizeLine(string) {\n  const wordRegExp = _wrapRegExp(/(\\[(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])*?\\])|((?:[\\0-\\x08\\x0E-\\x1F!-\\x9F\\xA1-\\u167F\\u1681-\\u1FFF\\u200B-\\u2027\\u202A-\\u202E\\u2030-\\u205E\\u2060-\\u2FFF\\u3001-\\uD7FF\\uE000-\\uFEFE\\uFF00-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+)/g, {\n    bracketed: 1,\n    unbracketed: 2\n  });\n\n  return Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__[\"getMatches\"])(wordRegExp, string).map(({\n    bracketed,\n    unbracketed\n  }) => bracketed || unbracketed);\n}\n\nfunction parseWords(lines) {\n  if (!Object.keys(lines).length) return [];\n  const wordsHash = getWordsHash(lines);\n  Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__[\"validateNumItems\"])(wordsHash);\n  return Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_4__[\"zip\"])(wordsHash).map(parseWord);\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterance/parseWords.mjs?");

/***/ }),

/***/ "./src/parseUtterances.mjs":
/*!*********************************!*\
  !*** ./src/parseUtterances.mjs ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseUtterances; });\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/index.mjs */ \"./src/utilities/index.mjs\");\n/* harmony import */ var _parseUtterance_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseUtterance/index.mjs */ \"./src/parseUtterance/index.mjs\");\n\n\n\n\nfunction getUtterancesString(text) {\n  return text.split(/\\x2D\\x2D\\x2D/g).map(part => part.trim()).pop();\n}\n\nfunction parseUtterances(scription) {\n  const utterancesString = getUtterancesString(scription);\n  if (!utterancesString) return [];\n  const blankLinesRegExp = /(?:[\\t\\x0B \\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF]*\\r?\\n){2,}/g;\n  const utterancesStrings = utterancesString.split(blankLinesRegExp);\n  const schema = Object(_utilities_index_mjs__WEBPACK_IMPORTED_MODULE_1__[\"getSchema\"])(utterancesStrings[0]);\n\n  const parse = utteranceString => Object(_parseUtterance_index_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(utteranceString, schema);\n\n  return utterancesString.split(blankLinesRegExp).map(parse).filter(Boolean);\n}\n\n//# sourceURL=webpack://scription2dlx/./src/parseUtterances.mjs?");

/***/ }),

/***/ "./src/utilities/cleanBrackets.mjs":
/*!*****************************************!*\
  !*** ./src/utilities/cleanBrackets.mjs ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cleanBrackets; });\n/* harmony import */ var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.from-entries */ \"./node_modules/core-js/modules/es.object.from-entries.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _isString_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isString.mjs */ \"./src/utilities/isString.mjs\");\n\n\n\n\nconst bracketTypes = {\n  lit: [\"[\", \"]\"],\n  phon: [\"[\", \"]\"],\n  txn: [\"/\", \"/\"]\n};\n\nfunction trimBrackets(start, end, str) {\n  if (str.startsWith(start) && str.endsWith(end)) {\n    return str.slice(1, str.length - 1).trim();\n  }\n\n  return str;\n}\n\nfunction cleanBrackets(type, data) {\n  const brackets = bracketTypes[type];\n  if (Object(_isString_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data)) return trimBrackets(...brackets, data);\n  const trimmedEntries = Object.entries(data).map(([lang, text]) => [lang, trimBrackets(...brackets, text)]);\n  return Object.fromEntries(trimmedEntries);\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/cleanBrackets.mjs?");

/***/ }),

/***/ "./src/utilities/difference.mjs":
/*!**************************************!*\
  !*** ./src/utilities/difference.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return difference; });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nfunction difference(a, b) {\n  const s = new Set(b);\n  return a.filter(x => !s.has(x));\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/difference.mjs?");

/***/ }),

/***/ "./src/utilities/getCode.mjs":
/*!***********************************!*\
  !*** ./src/utilities/getCode.mjs ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getCode; });\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\n\n\n\nfunction _wrapRegExp(re, groups) { _wrapRegExp = function (re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === \"string\") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\\$<([^>]+)>/g, function (_, name) { return \"$\" + groups[name]; })); } else if (typeof substitution === \"function\") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== \"object\") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (typeof call === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction getCode(line) {\n  const backslashRegExp = _wrapRegExp(/^\\\\((?:[\\0-\\x08\\x0E-\\x1F!-\\x9F\\xA1-\\u167F\\u1681-\\u1FFF\\u200B-\\u2027\\u202A-\\u202E\\u2030-\\u205E\\u2060-\\u2FFF\\u3001-\\uD7FF\\uE000-\\uFEFE\\uFF00-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+)(?:[\\t-\\r \\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF]|$)/, {\n    code: 1\n  });\n\n  const match = line.match(backslashRegExp);\n  if (!match) return null;\n  return match.groups.code;\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/getCode.mjs?");

/***/ }),

/***/ "./src/utilities/getLineType.mjs":
/*!***************************************!*\
  !*** ./src/utilities/getLineType.mjs ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getLineType; });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nfunction getLineType(string) {\n  const [type] = string.split(\"-\", 1);\n  return type;\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/getLineType.mjs?");

/***/ }),

/***/ "./src/utilities/getLines.mjs":
/*!************************************!*\
  !*** ./src/utilities/getLines.mjs ***!
  \************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getLines; });\n/* harmony import */ var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.from-entries */ \"./node_modules/core-js/modules/es.object.from-entries.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _getLineType_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLineType.mjs */ \"./src/utilities/getLineType.mjs\");\n\n\n\nfunction getLines(types, lines) {\n  const wordLineEntries = Object.entries(lines).filter(([code]) => types.includes(Object(_getLineType_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(code)));\n  if (!wordLineEntries.length) return null;\n  return Object.fromEntries(wordLineEntries);\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/getLines.mjs?");

/***/ }),

/***/ "./src/utilities/getMatches.mjs":
/*!**************************************!*\
  !*** ./src/utilities/getMatches.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getMatches; });\nfunction getMatches(regExp, str) {\n  const matches = [];\n  let match = regExp.exec(str);\n\n  while (match !== null) {\n    matches.push(match.groups);\n    match = regExp.exec(str);\n  }\n\n  return matches.filter(Boolean);\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/getMatches.mjs?");

/***/ }),

/***/ "./src/utilities/getSchema.mjs":
/*!*************************************!*\
  !*** ./src/utilities/getSchema.mjs ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSchema; });\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _getCode_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCode.mjs */ \"./src/utilities/getCode.mjs\");\n/* harmony import */ var _getLineType_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getLineType.mjs */ \"./src/utilities/getLineType.mjs\");\n/* harmony import */ var _isString_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isString.mjs */ \"./src/utilities/isString.mjs\");\n/* harmony import */ var _isValidCode_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isValidCode.mjs */ \"./src/utilities/isValidCode.mjs\");\n\n\n\n\n\n\n\n\nfunction validateSchema(rawCodes) {\n  const someLinesHaveCodes = rawCodes.some(code => Object(_isString_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(code));\n  const allLinesHaveCodes = rawCodes.every(code => Object(_isString_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(code));\n\n  if (someLinesHaveCodes && !allLinesHaveCodes) {\n    throw new Error(\"If one line in an utterance has a backslash code, all lines in the utterance must have backslash codes.\");\n  }\n\n  const codes = rawCodes.filter(Boolean);\n  const types = codes.map(_getLineType_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  codes.forEach(code => {\n    if (!Object(_isValidCode_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(code)) {\n      throw new Error(\"The backslash code \".concat(code, \" is invalid. Only characters A-Z, a-z, 0-9, and hyphens are allowed. Diacritics are not permitted.\"));\n    }\n  });\n  const codeCounts = codes.reduce((counts, code) => {\n    const currentCount = counts.get(code) || 0;\n    counts.set(code, currentCount + 1);\n    return counts;\n  }, new Map());\n  codeCounts.forEach((count, code) => {\n    if (code !== \"n\" && count > 1) {\n      throw new Error(\"The \".concat(code, \" code appears more than once in the utterance. Each backslash code may only appear once.\"));\n    }\n  });\n  const hasMorphemes = types.some(type => type === \"m\");\n  const hasGlosses = types.some(type => type === \"gl\");\n\n  if ((hasMorphemes || hasGlosses) && !(hasMorphemes && hasGlosses)) {\n    throw new Error(\"If either the morphemes or glosses line is present, the other must be present as well.\");\n  }\n}\n\nfunction numberNotes(code, i) {\n  const type = Object(_getLineType_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(code);\n  if (type !== \"n\") return code;\n  return code.replace(\"n\", \"n-\".concat(i + 1));\n}\n\nfunction getSchema(utteranceString) {\n  try {\n    const newlineRegExp = /\\r?\\n/g;\n    const lines = utteranceString.split(newlineRegExp).map(line => line.trim());\n    const codes = lines.map(_getCode_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    validateSchema(codes);\n    const hasCodes = codes.filter(Boolean).length;\n\n    if (!hasCodes) {\n      const lineCount = lines.length;\n      if (lineCount === 2) return [\"txn\", \"tln\"];\n      if (lineCount === 3) return [\"m\", \"gl\", \"tln\"];\n      if (lineCount >= 4) return [\"txn\", \"m\", \"gl\", \"tln\"].fill(\"n\", 4);\n      throw new Error(\"Cannot infer an interlinear gloss schema for utterances with one line.\");\n    }\n\n    return codes.map(numberNotes);\n  } catch (e) {\n    e.name = getSchema.name;\n    e.message = \"\".concat(e.message, \"\\n\\nUtterance text:\\n\\n\").concat(utteranceString);\n    throw e;\n  }\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/getSchema.mjs?");

/***/ }),

/***/ "./src/utilities/groupLines.mjs":
/*!**************************************!*\
  !*** ./src/utilities/groupLines.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return groupLines; });\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _getLines_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLines.mjs */ \"./src/utilities/getLines.mjs\");\n\n\n\nfunction groupLines(type, linesHash) {\n  const typedLines = Object(_getLines_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([type], linesHash);\n  if (!typedLines) return null;\n  const codes = Object.keys(typedLines);\n  const isString = codes.length === 1 && codes[0] === type;\n  if (isString) return linesHash[type];\n  return Object.entries(typedLines).reduce((hash, [code, data]) => {\n    const subtype = code.replace(\"\".concat(type, \"-\"), \"\");\n    hash[subtype] = data;\n    return hash;\n  }, {});\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/groupLines.mjs?");

/***/ }),

/***/ "./src/utilities/index.mjs":
/*!*********************************!*\
  !*** ./src/utilities/index.mjs ***!
  \*********************************/
/*! exports provided: cleanBrackets, difference, getCode, getLines, getLineType, getMatches, getSchema, groupLines, isString, isValidTag, mergeTranscriptions, validateLanguages, validateNumItems, zip */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cleanBrackets_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanBrackets.mjs */ \"./src/utilities/cleanBrackets.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cleanBrackets\", function() { return _cleanBrackets_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _difference_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./difference.mjs */ \"./src/utilities/difference.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _difference_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _getCode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCode.mjs */ \"./src/utilities/getCode.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getCode\", function() { return _getCode_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _getLines_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLines.mjs */ \"./src/utilities/getLines.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getLines\", function() { return _getLines_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _getLineType_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getLineType.mjs */ \"./src/utilities/getLineType.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getLineType\", function() { return _getLineType_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _getMatches_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getMatches.mjs */ \"./src/utilities/getMatches.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMatches\", function() { return _getMatches_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _getSchema_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getSchema.mjs */ \"./src/utilities/getSchema.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSchema\", function() { return _getSchema_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _groupLines_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./groupLines.mjs */ \"./src/utilities/groupLines.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"groupLines\", function() { return _groupLines_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _isString_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isString.mjs */ \"./src/utilities/isString.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return _isString_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _isValidTag_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isValidTag.mjs */ \"./src/utilities/isValidTag.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidTag\", function() { return _isValidTag_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _mergeTranscriptions_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mergeTranscriptions.mjs */ \"./src/utilities/mergeTranscriptions.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeTranscriptions\", function() { return _mergeTranscriptions_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _validateLanguages_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validateLanguages.mjs */ \"./src/utilities/validateLanguages.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateLanguages\", function() { return _validateLanguages_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _validateNumItems_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validateNumItems.mjs */ \"./src/utilities/validateNumItems.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateNumItems\", function() { return _validateNumItems_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _zip_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zip.mjs */ \"./src/utilities/zip.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zip\", function() { return _zip_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/index.mjs?");

/***/ }),

/***/ "./src/utilities/isString.mjs":
/*!************************************!*\
  !*** ./src/utilities/isString.mjs ***!
  \************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isString; });\nfunction isString(val) {\n  return typeof val === \"string\";\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/isString.mjs?");

/***/ }),

/***/ "./src/utilities/isValidCode.mjs":
/*!***************************************!*\
  !*** ./src/utilities/isValidCode.mjs ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isValidCode; });\nconst codeRegExp = /^[\\x2D0-9A-Za-z]+$/;\nfunction isValidCode(str) {\n  return codeRegExp.test(str);\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/isValidCode.mjs?");

/***/ }),

/***/ "./src/utilities/isValidTag.mjs":
/*!**************************************!*\
  !*** ./src/utilities/isValidTag.mjs ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validateLanguageTag; });\nconst langRegExp = /^(((en\\x2DGB\\x2Doed|i\\x2Dami|i\\x2Dbnn|i\\x2Ddefault|i\\x2Denochian|i\\x2Dhak|i\\x2Dklingon|i\\x2Dlux|i\\x2Dmingo|i\\x2Dnavajo|i\\x2Dpwn|i\\x2Dtao|i\\x2Dtay|i\\x2Dtsu|sgn\\x2DBE\\x2DFR|sgn\\x2DBE\\x2DNL|sgn\\x2DCH\\x2DDE)|(art\\x2Dlojban|cel\\x2Dgaulish|no\\x2Dbok|no\\x2Dnyn|zh\\x2Dguoyu|zh\\x2Dhakka|zh\\x2Dmin|zh\\x2Dmin\\x2Dnan|zh\\x2Dxiang))|((([A-Za-z]{2,3}(\\x2D([A-Za-z]{3}(\\x2D[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(\\x2D([A-Za-z]{4}))?(\\x2D([A-Za-z]{2}|[0-9]{3}))?(\\x2D([0-9A-Za-z]{5,8}|[0-9][0-9A-Za-z]{3}))*(\\x2D([0-9A-WYZa-wyz](\\x2D[0-9A-Za-z]{2,8})+))*(\\x2D(x(\\x2D[0-9A-Za-z]{1,8})+))?)|(x(\\x2D[0-9A-Za-z]{1,8})+))$/;\nfunction validateLanguageTag(tag) {\n  return langRegExp.test(tag);\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/isValidTag.mjs?");

/***/ }),

/***/ "./src/utilities/mergeTranscriptions.mjs":
/*!***********************************************!*\
  !*** ./src/utilities/mergeTranscriptions.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mergeTranscriptions; });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _isString_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isString.mjs */ \"./src/utilities/isString.mjs\");\n\n\nfunction mergeTranscriptions(transcriptions, separator = \"\") {\n  if (!transcriptions.length) return \"\";\n  return transcriptions.reduce((txn, part) => {\n    if (Object(_isString_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(part)) return \"\".concat(txn).concat(separator).concat(part);\n    Object.entries(part).forEach(([lang, data]) => {\n      txn[lang] += \"\".concat(separator).concat(data);\n    });\n    return txn;\n  });\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/mergeTranscriptions.mjs?");

/***/ }),

/***/ "./src/utilities/validateLanguages.mjs":
/*!*********************************************!*\
  !*** ./src/utilities/validateLanguages.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validateLanguages; });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var _isValidTag_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isValidTag.mjs */ \"./src/utilities/isValidTag.mjs\");\n\n\nfunction validateLanguages(data) {\n  if (data instanceof Object) {\n    Object.entries(data).forEach(([lang]) => {\n      if (!Object(_isValidTag_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lang)) {\n        throw new Error(\"\".concat(lang, \" is not a valid IETF language tag.\"));\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/validateLanguages.mjs?");

/***/ }),

/***/ "./src/utilities/validateNumItems.mjs":
/*!********************************************!*\
  !*** ./src/utilities/validateNumItems.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validateNumItems; });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nfunction validateNumItems(lines) {\n  const itemLists = Object.values(lines);\n  const numItems = Math.max(...itemLists.map(w => w.length));\n  const sameNumItems = itemLists.every(list => list.length === numItems);\n\n  if (!sameNumItems) {\n    throw new Error(\"All morpheme and glosses lines must have the same number of words and morphemes.\");\n  }\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/validateNumItems.mjs?");

/***/ }),

/***/ "./src/utilities/zip.mjs":
/*!*******************************!*\
  !*** ./src/utilities/zip.mjs ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return zip; });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nfunction zip(hash) {\n  const numItems = Math.max(...Object.values(hash).map(w => w.length));\n  const items = [];\n\n  for (let i = 0; i < numItems; i++) {\n    const item = Object.entries(hash).reduce((o, [key, arr]) => {\n      o[key] = arr[i];\n      return o;\n    }, {});\n    items.push(item);\n  }\n\n  return items;\n}\n\n//# sourceURL=webpack://scription2dlx/./src/utilities/zip.mjs?");

/***/ })

/******/ })["default"];
});