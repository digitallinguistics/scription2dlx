import"core-js/modules/es.symbol.description";import"core-js/modules/es.array.iterator";import"core-js/modules/web.dom-collections.iterator";function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}import isString from"./isString.mjs";export default function mergeTranscriptions(transcriptions){let separator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";if(!transcriptions.length)return"";return transcriptions.reduce((txn,part)=>{if(isString(part))return"".concat(txn).concat(separator).concat(part);Object.entries(part).forEach((_ref)=>{let _ref2=_slicedToArray(_ref,2),lang=_ref2[0],data=_ref2[1];txn[lang]+="".concat(separator).concat(data)});return txn})}