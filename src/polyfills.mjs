/*
These polyfills allow the source code for the library to run on Node 10.x
 */

/* eslint-disable */

if (!Array.prototype.flat) {
  Array.prototype.flat = function() {
    var depth = arguments[0];
    depth = depth === undefined ? 1 : Math.floor(depth);
    if (depth < 1) return Array.prototype.slice.call(this);
    return (function flat(arr, depth) {
      var len = arr.length >>> 0;
      var flattened = [];
      var i = 0;
      while (i < len) {
        if (i in arr) {
          var el = arr[i];
          if (Array.isArray(el) && depth > 0)
            flattened = flattened.concat(flat(el, depth - 1));
          else flattened.push(el);
        }
        i++;
      }
      return flattened;
    })(this, depth);
  };
}

if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function flatMap() {
    return Array.prototype.map.apply(this, arguments).flat(1);
  };
}

if (!Object.fromEntries) {

  function fromEntries(iterable) {
    return [...iterable].reduce((obj, { 0: key, 1: val }) => Object.assign(obj, { [key]: val }), {});
  }

  Object.defineProperty(Object.prototype, `fromEntries`, {
    configurable: true,
    enumerable:   false,
    value:        fromEntries,
    writable:     true,
  });

}
