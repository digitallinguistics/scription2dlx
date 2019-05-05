import"core-js/modules/es.symbol.description";import"core-js/modules/es.symbol.replace";import"core-js/modules/es.array.flat";import"core-js/modules/es.array.flat-map";import"core-js/modules/es.array.iterator";import"core-js/modules/es.array.unscopables.flat";import"core-js/modules/es.array.unscopables.flat-map";import"core-js/modules/es.regexp.constructor";import"core-js/modules/es.regexp.to-string";import"core-js/modules/es.string.replace";import"core-js/modules/web.dom-collections.iterator";function _wrapRegExp(re,groups){_wrapRegExp=function _wrapRegExp(re,groups){return new BabelRegExp(re,groups)};var _RegExp=_wrapNativeSuper(RegExp);var _super=RegExp.prototype;var _groups=new WeakMap;function BabelRegExp(re,groups){var _this=_RegExp.call(this,re);_groups.set(_this,groups);return _this}_inherits(BabelRegExp,_RegExp);BabelRegExp.prototype.exec=function(str){var result=_super.exec.call(this,str);if(result)result.groups=buildGroups(result,this);return result};BabelRegExp.prototype[Symbol.replace]=function(str,substitution){if(typeof substitution==="string"){var groups=_groups.get(this);return _super[Symbol.replace].call(this,str,substitution.replace(/\$<([^>]+)>/g,function(_,name){return"$"+groups[name]}))}else if(typeof substitution==="function"){var _this=this;return _super[Symbol.replace].call(this,str,function(){var args=[];args.push.apply(args,arguments);if(typeof args[args.length-1]!=="object"){args.push(buildGroups(args,_this))}return substitution.apply(this,args)})}else{return _super[Symbol.replace].call(this,str,substitution)}};function buildGroups(result,re){var g=_groups.get(re);return Object.keys(g).reduce(function(groups,name){groups[name]=result[g[name]];return groups},Object.create(null))}return _wrapRegExp.apply(this,arguments)}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map:undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class)};return _wrapNativeSuper(Class)}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor;if(Class)_setPrototypeOf(instance,Class.prototype);return instance}}return _construct.apply(null,arguments)}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}import getDuplicateMorphemes from"./getDuplicateMorphemes.mjs";import separateInfix from"./separateInfix.mjs";import{difference,getMatches,groupLines,mergeTranscriptions,validateLanguages,validateNumItems,zip}from"../../utilities/index.mjs";function createMorphemesHash(wordLines){return Object.entries(wordLines).reduce((hash,_ref)=>{let _ref2=_slicedToArray(_ref,2),code=_ref2[0],data=_ref2[1];hash[code]=tokenizeWord(data);return hash},{})}function tokenizeWord(string){const morphemeRegExp=_wrapRegExp(/(\[(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\])|((?:[\0-\x08\x0E-\x1F!-,\.-<>-\}\x7F-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g,{bracketed:1,unbracketed:2});return getMatches(morphemeRegExp,string).map((_ref3)=>{let bracketed=_ref3.bracketed,unbracketed=_ref3.unbracketed;return bracketed||unbracketed})}export default function parseMorphemes(wordLines){const noData=!Object.values(wordLines).every(line=>line.length);if(noData)return[];const morphemesHash=createMorphemesHash(wordLines);validateNumItems(morphemesHash);let morphemes=zip(morphemesHash).flatMap(separateInfix).map(data=>({transcription:groupLines("m",data),gloss:groupLines("gl",data)}));if(!morphemes.length)return[];morphemes.forEach(m=>{validateLanguages(m.transcription);validateLanguages(m.gloss)});const duplicateMorphemes=getDuplicateMorphemes(morphemes);morphemes=difference(morphemes,duplicateMorphemes.flat());const discontinuousMorphemes=duplicateMorphemes.map(dups=>({transcription:mergeTranscriptions(dups.map((_ref4)=>{let transcription=_ref4.transcription;return transcription}),"\u2026"),gloss:dups[0].gloss}));return[...morphemes,...discontinuousMorphemes]}