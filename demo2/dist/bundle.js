/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//define(['jquery'], function ($) {
	//
	//})
	var avalon = __webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(4);
	var t = __webpack_require__(5);
	console.log($.fn.jquery);
	avalon.ajax({
	    url: 'http://op.juhe.cn/onebox/weather/query',
	    type: 'get',
	    dataType: 'jsonp',
	    success: function (e) {
	        console.log(e);
	    }
	})


	var obj = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	var app = {
	    $id: 'test',
	    a: '123',
	    arr: ['aaa', 'bbb', 'ccc'],
	    obj: obj,
	    font: t,
	    fuc: function () {
	        alert(123);
	    }
	}
	avalon.define(app)


	avalon.effect('animate', {
	    enter: function (el, done) {
	        $(el).animate({width: 300}, 1000, done)
	    },
	    leave: function (el, done) {
	        $(el).animate({width: 100}, 1000, done)
	    }
	})
	var vm = avalon.define({
	    $id: 'effect',
	    aaa: "test",
	    action: 'enter',
	    enterCb: function () {
	        avalon.log('动画完成')
	    },
	    leaveCb: function () {
	        avalon.log('动画回到原点')
	    }
	})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*! built in 2016-5-20:16 version 2.01 by 司徒正美 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["avalon"] = factory();
		else
			root["avalon"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		
		var avalon = __webpack_require__(1) //这个版本兼容IE6

		__webpack_require__(8)
		__webpack_require__(15)
		__webpack_require__(19)
		__webpack_require__(35)
		__webpack_require__(71)
		__webpack_require__(75)
		__webpack_require__(76)

		module.exports = avalon




	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		
		__webpack_require__(2)
		var avalon = __webpack_require__(3)
		var browser = __webpack_require__(4)

		avalon.shadowCopy(avalon, browser)

		__webpack_require__(5)
		__webpack_require__(6)
		__webpack_require__(7)

		module.exports = avalon

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		
		/**
		 * 此模块不依赖任何模块,用于修复语言的底层缺陷
		 */

		var ohasOwn = Object.prototype.hasOwnProperty

		if (!'司徒正美'.trim) {
		    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
		    String.prototype.trim = function () {
		        return this.replace(rtrim, '')
		    }
		}
		var hasDontEnumBug = !({
		    'toString': null
		}).propertyIsEnumerable('toString'),
		        hasProtoEnumBug = (function () {
		        }).propertyIsEnumerable('prototype'),
		        dontEnums = [
		            'toString',
		            'toLocaleString',
		            'valueOf',
		            'hasOwnProperty',
		            'isPrototypeOf',
		            'propertyIsEnumerable',
		            'constructor'
		        ],
		        dontEnumsLength = dontEnums.length;
		if (!Object.keys) {
		    Object.keys = function (object) { //ecma262v5 15.2.3.14
		        var theKeys = []
		        var skipProto = hasProtoEnumBug && typeof object === 'function'
		        if (typeof object === 'string' || (object && object.callee)) {
		            for (var i = 0; i < object.length; ++i) {
		                theKeys.push(String(i))
		            }
		        } else {
		            for (var name in object) {
		                if (!(skipProto && name === 'prototype') &&
		                        ohasOwn.call(object, name)) {
		                    theKeys.push(String(name))
		                }
		            }
		        }

		        if (hasDontEnumBug) {
		            var ctor = object.constructor,
		                    skipConstructor = ctor && ctor.prototype === object
		            for (var j = 0; j < dontEnumsLength; j++) {
		                var dontEnum = dontEnums[j]
		                if (!(skipConstructor && dontEnum === 'constructor') && ohasOwn.call(object, dontEnum)) {
		                    theKeys.push(dontEnum)
		                }
		            }
		        }
		        return theKeys
		    }
		}
		if (!Array.isArray) {
		    Array.isArray = function (a) {
		        return Object.prototype.toString.call(a) === '[object Array]'
		    }
		}

		if (!Array.isArray.bind) {
		    Function.prototype.bind = function (scope) {
		        if (arguments.length < 2 && scope === void 0)
		            return this
		        var fn = this,
		                argv = arguments
		        return function () {
		            var args = [],
		                    i
		            for (i = 1; i < argv.length; i++)
		                args.push(argv[i])
		            for (i = 0; i < arguments.length; i++)
		                args.push(arguments[i])
		            return fn.apply(scope, args)
		        }
		    }
		}
		//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
		/**
		* Shim for "fixing" IE's lack of support (IE < 9) for applying slice
		* on host objects like NamedNodeMap, NodeList, and HTMLCollection
		* (technically, since host objects have been implementation-dependent,
		* at least before ES6, IE hasn't needed to work this way).
		* Also works on strings, fixes IE < 9 to allow an explicit undefined
		* for the 2nd argument (as in Firefox), and prevents errors when
		* called on other DOM objects.
		*/

		var _slice = Array.prototype.slice
		try {
		    // Can't be used with DOM elements in IE < 9
		    _slice.call(document.documentElement)
		} catch (e) { // Fails in IE < 9
		    // This will work for genuine arrays, array-like objects,
		    // NamedNodeMap (attributes, entities, notations),
		    // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
		    // and will not fail on other DOM objects (as do DOM elements in IE < 9)
		    Array.prototype.slice = function (begin, end) {
		        // IE < 9 gets unhappy with an undefined end argument
		        end = (typeof end !== 'undefined') ? end : this.length

		        // For native Array objects, we use the native slice function
		        if (Array.isArray(this) ) {
		            return _slice.call(this, begin, end)
		        }

		        // For array like object we handle it ourselves.
		        var i, cloned = [],
		                size, len = this.length

		        // Handle negative value for "begin"
		        var start = begin || 0
		        start = (start >= 0) ? start : len + start

		        // Handle negative value for "end"
		        var upTo = (end) ? end : len
		        if (end < 0) {
		            upTo = len + end
		        }

		        // Actual expected size of the slice
		        size = upTo - start

		        if (size > 0) {
		            cloned = new Array(size)
		            if (this.charAt) {
		                for (i = 0; i < size; i++) {
		                    cloned[i] = this.charAt(start + i)
		                }
		            } else {
		                for (i = 0; i < size; i++) {
		                    cloned[i] = this[start + i]
		                }
		            }
		        }

		        return cloned
		    }
		}

		function iterator(vars, body, ret) {
		    var fun = 'for(var ' + vars + 'i=0,n = this.length; i < n; i++){' +
		            body.replace('_', '((i in this) && fn.call(scope,this[i],i,this))') +
		            '}' + ret
		    /* jshint ignore:start */
		    return Function('fn,scope', fun)
		    /* jshint ignore:end */
		}

		var ap = Array.prototype
		if (!/\[native code\]/.test(ap.map)) {
		    var shim = {
		        //定位操作，返回数组中第一个等于给定参数的元素的索引值。
		        indexOf: function (item, index) {
		            var n = this.length,
		                    i = ~~index
		            if (i < 0)
		                i += n
		            for (; i < n; i++)
		                if (this[i] === item)
		                    return i
		            return -1
		        },
		        //定位操作，同上，不过是从后遍历。
		        lastIndexOf: function (item, index) {
		            var n = this.length,
		                    i = index == null ? n - 1 : index
		            if (i < 0)
		                i = Math.max(0, n + i)
		            for (; i >= 0; i--)
		                if (this[i] === item)
		                    return i
		            return -1
		        },
		        //迭代操作，将数组的元素挨个儿传入一个函数中执行。Prototype.js的对应名字为each。
		        forEach: iterator('', '_', ''),
		        //迭代类 在数组中的每个项上运行一个函数，如果此函数的值为真，则此元素作为新数组的元素收集起来，并返回新数组
		        filter: iterator('r=[],j=0,', 'if(_)r[j++]=this[i]', 'return r'),
		        //收集操作，将数组的元素挨个儿传入一个函数中执行，然后把它们的返回值组成一个新数组返回。Prototype.js的对应名字为collect。
		        map: iterator('r=[],', 'r[i]=_', 'return r'),
		        //只要数组中有一个元素满足条件（放进给定函数返回true），那么它就返回true。Prototype.js的对应名字为any。
		        some: iterator('', 'if(_)return true', 'return false'),
		        //只有数组中的元素都满足条件（放进给定函数返回true），它才返回true。Prototype.js的对应名字为all。
		        every: iterator('', 'if(!_)return false', 'return true')
		    }

		    for (var i in shim) {
		        ap[i] = shim[i]
		    }
		}
		module.exports = {}

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {//avalon的核心,这里都是一些不存在异议的*核心*方法与属性
		function avalon(el) {
		    return new avalon.init(el)
		}

		global.avalon = avalon
		if(typeof window !== 'undefined'){
		    window.avalon = avalon
		}

		avalon.init = function (el) {
		    this[0] = this.element = el
		}

		avalon.fn = avalon.prototype = avalon.init.prototype


		avalon.shadowCopy = function (destination, source) {
		    for (var property in source) {
		        destination[property] = source[property]
		    }
		    return destination
		}

		var rword = /[^, ]+/g

		var hasConsole = global.console

		avalon.shadowCopy(avalon, {
		    noop: function () {
		    },
		    //切割字符串为一个个小块，以空格或逗号分开它们，结合replace实现字符串的forEach
		    rword: rword,
		    inspect: ({}).toString,
		    ohasOwn: ({}).hasOwnProperty,
		    log: function () {
		        if (hasConsole && avalon.config.debug) {
		            // http://stackoverflow.com/questions/8785624/how-to-safely-wrap-console-log
		            Function.apply.call(console.log, console, arguments)
		        }
		    },
		    warn: function () {
		        if (hasConsole && avalon.config.debug) {
		            var method = console.warn || console.log
		            // http://qiang106.iteye.com/blog/1721425
		            Function.apply.call(method, console, arguments)
		        }
		    },
		    error: function (str, e) {
		        throw (e || Error)(str)
		    },
		    //将一个以空格或逗号隔开的字符串或数组,转换成一个键值都为1的对象
		    oneObject: function (array, val) {
		        if (typeof array === 'string') {
		            array = array.match(rword) || []
		        }
		        var result = {},
		                value = val !== void 0 ? val : 1
		        for (var i = 0, n = array.length; i < n; i++) {
		            result[array[i]] = value
		        }
		        return result
		    }

		})

		module.exports = avalon
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {var window = global
		var browser = {
		    window: window,
		    document: {//方便在nodejs环境不会报错
		        createElement: function () {
		            return {}
		        },
		        createElementNS: function(){
		            return {}
		        },
		        contains: Boolean
		    },
		    root: {
		        outerHTML: 'x'
		    },
		    msie: NaN,
		    modern: true,
		    avalonDiv: {},
		    avalonFragment: null
		}

		if(window.location && window.navigator && window.window){
		    var document = window.document
		    browser.document = document
		    browser.modern = window.dispatchEvent
		    browser.root = document.documentElement
		    browser.avalonDiv = document.createElement('div')
		    browser.avalonFragment = document.createDocumentFragment()
		    if (window.VBArray) {
		        browser.msie = document.documentMode || (window.XMLHttpRequest ? 7 : 6)
		    }
		}


		module.exports = browser
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		//这里放置存在异议的方法

		var serialize = avalon.inspect
		var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/
		var rnative = /\[native code\]/ //判定是否原生函数
		var rarraylike = /(Array|List|Collection|Map|Arguments)\]$/
		var ohasOwn = avalon.ohasOwn
		// avalon.quote
		//https://github.com/bestiejs/json3/blob/master/lib/json3.js
		var Escapes = {
		    92: "\\\\",
		    34: '\\"',
		    8: "\\b",
		    12: "\\f",
		    10: "\\n",
		    13: "\\r",
		    9: "\\t"
		}

		// Internal: Converts `value` into a zero-padded string such that its
		// length is at least equal to `width`. The `width` must be <= 6.
		var leadingZeroes = "000000"
		var toPaddedString = function (width, value) {
		    // The `|| 0` expression is necessary to work around a bug in
		    // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
		    return (leadingZeroes + (value || 0)).slice(-width)
		};
		var unicodePrefix = "\\u00"
		var escapeChar = function (character) {
		    var charCode = character.charCodeAt(0), escaped = Escapes[charCode]
		    if (escaped) {
		        return escaped
		    }
		    return unicodePrefix + toPaddedString(2, charCode.toString(16))
		};
		var reEscape = /[\x00-\x1f\x22\x5c]/g
		function quote(value) {
		    reEscape.lastIndex = 0
		    return '"' + ( reEscape.test(value)? String(value).replace(reEscape, escapeChar) : value ) + '"'
		}

		avalon.quote = typeof JSON !== 'undefined' ? JSON.stringify : quote

		// avalon.type
		var class2type = {}
		'Boolean Number String Function Array Date RegExp Object Error'.replace(avalon.rword, function (name) {
		    class2type['[object ' + name + ']'] = name.toLowerCase()
		})

		avalon.type = function (obj) { //取得目标的类型
		    if (obj == null) {
		        return String(obj)
		    }
		    // 早期的webkit内核浏览器实现了已废弃的ecma262v4标准，可以将正则字面量当作函数使用，因此typeof在判定正则时会返回function
		    return typeof obj === 'object' || typeof obj === 'function' ?
		            class2type[serialize.call(obj)] || 'object' :
		            typeof obj
		}

		var rfunction = /^\s*\bfunction\b/

		avalon.isFunction = typeof alert === 'object' ? function (fn) {
		    try {
		        return rfunction.test(fn + '')
		    } catch (e) {
		        return false
		    }
		} : function (fn) {
		    return serialize.call(fn) === '[object Function]'
		}

		avalon.isWindow = function (obj) {
		    if (!obj)
		        return false
		    // 利用IE678 window == document为true,document == window竟然为false的神奇特性
		    // 标准浏览器及IE9，IE10等使用 正则检测
		    return obj == obj.document && obj.document != obj //jshint ignore:line
		}


		function isWindow(obj) {
		    return rwindow.test(serialize.call(obj))
		}

		if (isWindow(avalon.window)) {
		    avalon.isWindow = isWindow
		}

		var enu, enumerateBUG
		for (enu in avalon({})) {
		    break
		}
		enumerateBUG = enu !== '0' //IE6下为true, 其他为false

		/*判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例*/
		avalon.isPlainObject = function (obj, key) {
		    if (!obj || avalon.type(obj) !== 'object' || obj.nodeType || avalon.isWindow(obj)) {
		        return false
		    }
		    try { //IE内置对象没有constructor
		        if (obj.constructor &&
		                !ohasOwn.call(obj, 'constructor') &&
		                !ohasOwn.call(obj.constructor.prototype || {}, 'isPrototypeOf')) {
		            return false
		        }
		    } catch (e) { //IE8 9会在这里抛错
		        return false
		    }
		    if (enumerateBUG) {
		        for (key in obj) {
		            return ohasOwn.call(obj, key)
		        }
		    }
		    for (key in obj) {
		    }
		    return key === void 0 || ohasOwn.call(obj, key)
		}


		if (rnative.test(Object.getPrototypeOf)) {
		    avalon.isPlainObject = function (obj) {
		        // 简单的 typeof obj === 'object'检测，会致使用isPlainObject(window)在opera下通不过
		        return serialize.call(obj) === '[object Object]' &&
		                Object.getPrototypeOf(obj) === Object.prototype
		    }
		}

		//与jQuery.extend方法，可用于浅拷贝，深拷贝
		avalon.mix = avalon.fn.mix = function () {
		    var options, name, src, copy, copyIsArray, clone,
		            target = arguments[0] || {},
		            i = 1,
		            length = arguments.length,
		            deep = false

		    // 如果第一个参数为布尔,判定是否深拷贝
		    if (typeof target === 'boolean') {
		        deep = target
		        target = arguments[1] || {}
		        i++
		    }

		    //确保接受方为一个复杂的数据类型
		    if (typeof target !== 'object' && !avalon.isFunction(target)) {
		        target = {}
		    }

		    //如果只有一个参数，那么新成员添加于mix所在的对象上
		    if (i === length) {
		        target = this
		        i--
		    }

		    for (; i < length; i++) {
		        //只处理非空参数
		        if ((options = arguments[i]) != null) {
		            for (name in options) {
		                try {
		                    src = target[name]
		                    copy = options[name] //当options为VBS对象时报错
		                } catch (e) {
		                    continue
		                }

		                // 防止环引用
		                if (target === copy) {
		                    continue
		                }
		                if (deep && copy && (avalon.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

		                    if (copyIsArray) {
		                        copyIsArray = false
		                        clone = src && Array.isArray(src) ? src : []

		                    } else {
		                        clone = src && avalon.isPlainObject(src) ? src : {}
		                    }

		                    target[name] = avalon.mix(deep, clone, copy)
		                } else if (copy !== void 0) {
		                    target[name] = copy
		                }
		            }
		        }
		    }
		    return target
		}

		/*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
		function isArrayLike(obj) {
		    if (!obj)
		        return false
		    var n = obj.length
		    if (n === (n >>> 0)) { //检测length属性是否为非负整数
		        var type = serialize.call(obj).slice(8, -1)
		        if (rarraylike.test(type))
		            return false
		        if (type === 'Array')
		            return true
		        try {
		            if ({}.propertyIsEnumerable.call(obj, 'length') === false) { //如果是原生对象
		                return rfunction.test(obj.item || obj.callee)
		            }
		            return true
		        } catch (e) { //IE的NodeList直接抛错
		            return !obj.window //IE6-8 window
		        }
		    }
		    return false
		}


		avalon.each = function (obj, fn) {
		    if (obj) { //排除null, undefined
		        var i = 0
		        if (isArrayLike(obj)) {
		            for (var n = obj.length; i < n; i++) {
		                if (fn(i, obj[i]) === false)
		                    break
		            }
		        } else {
		            for (i in obj) {
		                if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
		                    break
		                }
		            }
		        }
		    }
		}

		module.exports = {
		    avalon: avalon,
		    isArrayLike: isArrayLike
		}



	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		var cssHooks = {}
		var rhyphen = /([a-z\d])([A-Z]+)/g
		var rcamelize = /[-_][^-_]/g
		var rhashcode = /\d\.\d{4}/
		var rescape = /[-.*+?^${}()|[\]\/\\]/g

		var _slice = [].slice
		avalon.shadowCopy(avalon, {
		    caches: {}, //avalon2.0 新增
		    vmodels: {},
		    filters: {},
		    components: {},//放置组件的类
		    resolvedComponents:{},//放置组件的实例
		    directives: {},
		    eventHooks: {},
		    eventListeners: {},
		    validators: {},
		    cssHooks: cssHooks,
		    parsers: {
		        number: function (a) {
		            return a === '' ? '' : parseFloat(a) || 0
		        },
		        string: function (a) {
		            return a === null || a === void 0 ? '' : a + ''
		        },
		        boolean: function (a) {
		            return a === 'true'
		        }
		    },
		    version: "2.01",
		    slice: function (nodes, start, end) {
		        return _slice.call(nodes, start, end)
		    },
		    css: function (node, name, value, fn) {
		        //读写删除元素节点的样式
		        if (node instanceof avalon) {
		            node = node[0]
		        }
		        var prop = avalon.camelize(name)
		        name = avalon.cssName(prop) || prop
		        if (value === void 0 || typeof value === 'boolean') { //获取样式
		            fn = cssHooks[prop + ':get'] || cssHooks['@:get']
		            if (name === 'background') {
		                name = 'backgroundColor'
		            }
		            var val = fn(node, name)
		            return value === true ? parseFloat(val) || 0 : val
		        } else if (value === '') { //请除样式
		            node.style[name] = ''
		        } else { //设置样式
		            if (value == null || value !== value) {
		                return
		            }
		            if (isFinite(value) && !avalon.cssNumber[prop]) {
		                value += 'px'
		            }
		            fn = cssHooks[prop + ':set'] || cssHooks['@:set']
		            fn(node, name, value)
		        }
		    },
		    directive: function (name, definition) {
		        return this.directives[name] = definition
		    },
		    isObject: function (a) {//1.6新增
		        return a !== null && typeof a === 'object'
		    },
		    /* avalon.range(10)
		     => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		     avalon.range(1, 11)
		     => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		     avalon.range(0, 30, 5)
		     => [0, 5, 10, 15, 20, 25]
		     avalon.range(0, -10, -1)
		     => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
		     avalon.range(0)
		     => []*/
		    range: function (start, end, step) { // 用于生成整数数组
		        step || (step = 1)
		        if (end == null) {
		            end = start || 0
		            start = 0
		        }
		        var index = -1,
		                length = Math.max(0, Math.ceil((end - start) / step)),
		                result = new Array(length)
		        while (++index < length) {
		            result[index] = start
		            start += step
		        }
		        return result
		    },
		    hyphen: function (target) {
		        //转换为连字符线风格
		        return target.replace(rhyphen, '$1-$2').toLowerCase()
		    },
		    camelize: function (target) {
		        //提前判断，提高getStyle等的效率
		        if (!target || target.indexOf('-') < 0 && target.indexOf('_') < 0) {
		            return target
		        }
		        //转换为驼峰风格
		        return target.replace(rcamelize, function (match) {
		            return match.charAt(1).toUpperCase()
		        })
		    },
		    //生成UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
		    makeHashCode: function (prefix) {
		        prefix = prefix || 'avalon'
		        return String(Math.random() + Math.random()).replace(rhashcode, prefix)
		    },
		    escapeRegExp: function (target) {
		        //http://stevenlevithan.com/regex/xregexp/
		        //将字符串安全格式化为正则表达式的源码
		        return (target + '').replace(rescape, '\\$&')
		    },
		    Array: {
		        merge: function (target, other) {
		            //合并两个数组 avalon2新增
		            target.push.apply(target, other)
		        },
		        ensure: function (target, item) {
		            //只有当前数组不存在此元素时只添加它
		            if (target.indexOf(item) === -1) {
		                return target.push(item)
		            }
		        },
		        removeAt: function (target, index) {
		            //移除数组中指定位置的元素，返回布尔表示成功与否
		            return !!target.splice(index, 1).length
		        },
		        remove: function (target, item) {
		            //移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否
		            var index = target.indexOf(item)
		            if (~index)
		                return avalon.Array.removeAt(target, index)
		            return false
		        }
		    }
		})

		var UUID = 1
		module.exports = {
		    //生成事件回调的UUID(用户通过ms-on指令)
		    avalon: avalon,
		    getLongID: function (fn) {
		        return fn.uuid || (fn.uuid = avalon.makeHashCode('e'))
		    },
		    //生成事件回调的UUID(用户通过avalon.bind)
		    getShortID: function (fn) {
		        return fn.uuid || (fn.uuid = '_' + (++UUID))
		    }
		}


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		
		function kernel(settings) {
		    for (var p in settings) {
		        if (!avalon.ohasOwn.call(settings, p))
		            continue
		        var val = settings[p]
		        if (typeof kernel.plugins[p] === 'function') {
		            kernel.plugins[p](val)
		        } else if (typeof kernel[p] === 'object') {
		            avalon.shadowCopy(kernel[p], val)
		        } else {
		            kernel[p] = val
		        }
		    }
		    return this
		}

		avalon.config = kernel

		var plugins = {
		    interpolate: function (array) {
		        var openTag = array[0]
		        var closeTag = array[1]
		        /*eslint-disable */
		        if (openTag === closeTag) {
		            throw new SyntaxError('openTag!==closeTag')
		        }
		        var test = openTag + 'test' + closeTag
		        var div = avalon.avalonDiv
		        div.innerHTML = test
		        if (div.innerHTML !== test && div.innerHTML.indexOf('&lt;') > -1) {
		            throw new SyntaxError('此定界符不合法')
		        }
		        div.innerHTML = ''
		        /*eslint-enable */
		        kernel.openTag = openTag
		        kernel.closeTag = closeTag
		        var o = avalon.escapeRegExp(openTag)
		        var c = avalon.escapeRegExp(closeTag)
		        kernel.rexpr = new RegExp(o + '([\\ss\\S]*)' + c)
		        kernel.rexprg = new RegExp(o + '([\\ss\\S]*)' + c, 'g')
		        kernel.rbind = new RegExp(o + '[\\ss\\S]*' + c + '|\\bms-|\\bslot\\b')
		    }
		}
		kernel.plugins = plugins
		kernel.plugins['interpolate'](['{{', '}}'])
		//kernel.showDiff = true
		kernel.debug = true


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		
		var number = __webpack_require__(9)
		var escape = __webpack_require__(10)
		var sanitize = __webpack_require__(11)
		var date = __webpack_require__(12)
		var arrayFilters = __webpack_require__(13)
		var eventFilters = __webpack_require__(14)
		var filters = avalon.filters

		function K(a) {
		    return a
		}

		avalon.__format__ = function (name) {
		    var fn = filters[name]
		    if (fn) {
		        return fn.get ? fn.get : fn
		    }
		    return K
		}


		avalon.mix(filters, {
		    uppercase: function (str) {
		        return str.toUpperCase()
		    },
		    lowercase: function (str) {
		        return str.toLowerCase()
		    },
		    truncate: function (str, length, truncation) {
		        //length，新字符串长度，truncation，新字符串的结尾的字段,返回新字符串
		        length = length || 30
		        truncation = typeof truncation === "string" ? truncation : "..."
		        return str.length > length ?
		                str.slice(0, length - truncation.length) + truncation :
		                String(str)
		    },
		    camelize: avalon.camelize,
		    date: date,
		    escape: escape,
		    sanitize: sanitize,
		    number: number,
		    currency: function (amount, symbol, fractionSize) {
		        return (symbol || "\uFFE5") +
		                number(amount,
		                        isFinite(fractionSize) ? fractionSize : 2)
		    }
		}, arrayFilters, eventFilters)







		module.exports = avalon

	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		function number(number, decimals, point, thousands) {
		    //form http://phpjs.org/functions/number_format/
		    //number 必需，要格式化的数字
		    //decimals 可选，规定多少个小数位。
		    //point 可选，规定用作小数点的字符串（默认为 . ）。
		    //thousands 可选，规定用作千位分隔符的字符串（默认为 , ），如果设置了该参数，那么所有其他参数都是必需的。
		    number = (number + '')
		            .replace(/[^0-9+\-Ee.]/g, '')
		    var n = !isFinite(+number) ? 0 : +number,
		            prec = !isFinite(+decimals) ? 3 : Math.abs(decimals),
		            sep = thousands || ",",
		            dec = point || ".",
		            s = '',
		            toFixedFix = function (n, prec) {
		                var k = Math.pow(10, prec)
		                return '' + (Math.round(n * k) / k)
		                        .toFixed(prec)
		            }
		    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
		    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
		            .split('.')
		    if (s[0].length > 3) {
		        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
		    }
		    if ((s[1] || '')
		            .length < prec) {
		        s[1] = s[1] || ''
		        s[1] += new Array(prec - s[1].length + 1)
		                .join('0')
		    }
		    return s.join(dec)
		}

		module.exports = number

		//处理 货币 http://openexchangerates.github.io/accounting.js/

	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		
		var rsurrogate = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
		var rnoalphanumeric = /([^\#-~| |!])/g

		function escape(str) {
		    //将字符串经过 str 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt 
		    return String(str).
		            replace(/&/g, '&amp;').
		            replace(rsurrogate, function (value) {
		                var hi = value.charCodeAt(0)
		                var low = value.charCodeAt(1)
		                return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';'
		            }).
		            replace(rnoalphanumeric, function (value) {
		                return '&#' + value.charCodeAt(0) + ';'
		            }).
		            replace(/</g, '&lt;').
		            replace(/>/g, '&gt;')
		}

		module.exports = escape

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		var rscripts = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim
		var ron = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g
		var ropen = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig
		var rsanitize = {
		    a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
		    img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
		    form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
		}


		//https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
		//    <a href="javasc&NewLine;ript&colon;alert('XSS')">chrome</a> 
		//    <a href="data:text/html;base64, PGltZyBzcmM9eCBvbmVycm9yPWFsZXJ0KDEpPg==">chrome</a>
		//    <a href="jav	ascript:alert('XSS');">IE67chrome</a>
		//    <a href="jav&#x09;ascript:alert('XSS');">IE67chrome</a>
		//    <a href="jav&#x0A;ascript:alert('XSS');">IE67chrome</a>
		module.exports = function sanitize(str) {
		    return str.replace(rscripts, "").replace(ropen, function (a, b) {
		        var match = a.toLowerCase().match(/<(\w+)\s/)
		        if (match) { //处理a标签的href属性，img标签的src属性，form标签的action属性
		            var reg = rsanitize[match[1]]
		            if (reg) {
		                a = a.replace(reg, function (s, name, value) {
		                    var quote = value.charAt(0)
		                    return name + "=" + quote + "javascript:void(0)" + quote// jshint ignore:line
		                })
		            }
		        }
		        return a.replace(ron, " ").replace(/\s+/g, " ") //移除onXXX事件
		    })
		}


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		/*
		 'yyyy': 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
		 'yy': 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
		 'y': 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
		 'MMMM': Month in year (January-December)
		 'MMM': Month in year (Jan-Dec)
		 'MM': Month in year, padded (01-12)
		 'M': Month in year (1-12)
		 'dd': Day in month, padded (01-31)
		 'd': Day in month (1-31)
		 'EEEE': Day in Week,(Sunday-Saturday)
		 'EEE': Day in Week, (Sun-Sat)
		 'HH': Hour in day, padded (00-23)
		 'H': Hour in day (0-23)
		 'hh': Hour in am/pm, padded (01-12)
		 'h': Hour in am/pm, (1-12)
		 'mm': Minute in hour, padded (00-59)
		 'm': Minute in hour (0-59)
		 'ss': Second in minute, padded (00-59)
		 's': Second in minute (0-59)
		 'a': am/pm marker
		 'Z': 4 digit (+sign) representation of the timezone offset (-1200-+1200)
		 format string can also be one of the following predefined localizable formats:
		 
		 'medium': equivalent to 'MMM d, y h:mm:ss a' for en_US locale (e.g. Sep 3, 2010 12:05:08 pm)
		 'short': equivalent to 'M/d/yy h:mm a' for en_US locale (e.g. 9/3/10 12:05 pm)
		 'fullDate': equivalent to 'EEEE, MMMM d,y' for en_US locale (e.g. Friday, September 3, 2010)
		 'longDate': equivalent to 'MMMM d, y' for en_US locale (e.g. September 3, 2010
		 'mediumDate': equivalent to 'MMM d, y' for en_US locale (e.g. Sep 3, 2010)
		 'shortDate': equivalent to 'M/d/yy' for en_US locale (e.g. 9/3/10)
		 'mediumTime': equivalent to 'h:mm:ss a' for en_US locale (e.g. 12:05:08 pm)
		 'shortTime': equivalent to 'h:mm a' for en_US locale (e.g. 12:05 pm)
		 */

		function toInt(str) {
		    return parseInt(str, 10) || 0
		}

		function padNumber(num, digits, trim) {
		    var neg = ""
		    if (num < 0) {
		        neg = '-'
		        num = -num
		    }
		    num = "" + num
		    while (num.length < digits)
		        num = "0" + num
		    if (trim)
		        num = num.substr(num.length - digits)
		    return neg + num
		}

		function dateGetter(name, size, offset, trim) {
		    return function (date) {
		        var value = date["get" + name]()
		        if (offset > 0 || value > -offset)
		            value += offset
		        if (value === 0 && offset === -12) {
		            value = 12
		        }
		        return padNumber(value, size, trim)
		    }
		}

		function dateStrGetter(name, shortForm) {
		    return function (date, formats) {
		        var value = date["get" + name]()
		        var get = (shortForm ? ("SHORT" + name) : name).toUpperCase()
		        return formats[get][value]
		    }
		}

		function timeZoneGetter(date) {
		    var zone = -1 * date.getTimezoneOffset()
		    var paddedZone = (zone >= 0) ? "+" : ""
		    paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2)
		    return paddedZone
		}
		//取得上午下午

		function ampmGetter(date, formats) {
		    return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1]
		}
		var DATE_FORMATS = {
		    yyyy: dateGetter("FullYear", 4),
		    yy: dateGetter("FullYear", 2, 0, true),
		    y: dateGetter("FullYear", 1),
		    MMMM: dateStrGetter("Month"),
		    MMM: dateStrGetter("Month", true),
		    MM: dateGetter("Month", 2, 1),
		    M: dateGetter("Month", 1, 1),
		    dd: dateGetter("Date", 2),
		    d: dateGetter("Date", 1),
		    HH: dateGetter("Hours", 2),
		    H: dateGetter("Hours", 1),
		    hh: dateGetter("Hours", 2, -12),
		    h: dateGetter("Hours", 1, -12),
		    mm: dateGetter("Minutes", 2),
		    m: dateGetter("Minutes", 1),
		    ss: dateGetter("Seconds", 2),
		    s: dateGetter("Seconds", 1),
		    sss: dateGetter("Milliseconds", 3),
		    EEEE: dateStrGetter("Day"),
		    EEE: dateStrGetter("Day", true),
		    a: ampmGetter,
		    Z: timeZoneGetter
		}
		var rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/
		var raspnetjson = /^\/Date\((\d+)\)\/$/
		function dateFilter(date, format) {
		    var locate = dateFilter.locate,
		            text = "",
		            parts = [],
		            fn, match
		    format = format || "mediumDate"
		    format = locate[format] || format
		    if (typeof date === "string") {
		        if (/^\d+$/.test(date)) {
		            date = toInt(date)
		        } else if (raspnetjson.test(date)) {
		            date = +RegExp.$1
		        } else {
		            var trimDate = date.trim()
		            var dateArray = [0, 0, 0, 0, 0, 0, 0]
		            var oDate = new Date(0)
		            //取得年月日
		            trimDate = trimDate.replace(/^(\d+)\D(\d+)\D(\d+)/, function (_, a, b, c) {
		                var array = c.length === 4 ? [c, a, b] : [a, b, c]
		                dateArray[0] = toInt(array[0])     //年
		                dateArray[1] = toInt(array[1]) - 1 //月
		                dateArray[2] = toInt(array[2])     //日
		                return ""
		            })
		            var dateSetter = oDate.setFullYear
		            var timeSetter = oDate.setHours
		            trimDate = trimDate.replace(/[T\s](\d+):(\d+):?(\d+)?\.?(\d)?/, function (_, a, b, c, d) {
		                dateArray[3] = toInt(a) //小时
		                dateArray[4] = toInt(b) //分钟
		                dateArray[5] = toInt(c) //秒
		                if (d) {                //毫秒
		                    dateArray[6] = Math.round(parseFloat("0." + d) * 1000)
		                }
		                return ""
		            })
		            var tzHour = 0
		            var tzMin = 0
		            trimDate = trimDate.replace(/Z|([+-])(\d\d):?(\d\d)/, function (z, symbol, c, d) {
		                dateSetter = oDate.setUTCFullYear
		                timeSetter = oDate.setUTCHours
		                if (symbol) {
		                    tzHour = toInt(symbol + c)
		                    tzMin = toInt(symbol + d)
		                }
		                return ""
		            })

		            dateArray[3] -= tzHour
		            dateArray[4] -= tzMin
		            dateSetter.apply(oDate, dateArray.slice(0, 3))
		            timeSetter.apply(oDate, dateArray.slice(3))
		            date = oDate
		        }
		    }
		    if (typeof date === "number") {
		        date = new Date(date)
		    }
		    if (avalon.type(date) !== "date") {
		        return
		    }
		    while (format) {
		        match = rdateFormat.exec(format)
		        if (match) {
		            parts = parts.concat(match.slice(1))
		            format = parts.pop()
		        } else {
		            parts.push(format)
		            format = null
		        }
		    }
		    parts.forEach(function (value) {
		        fn = DATE_FORMATS[value]
		        text += fn ? fn(date, locate) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'")
		    })
		    return text
		}


		var locate = {
		    AMPMS: {
		        0: "上午",
		        1: "下午"
		    },
		    DAY: {
		        0: "星期日",
		        1: "星期一",
		        2: "星期二",
		        3: "星期三",
		        4: "星期四",
		        5: "星期五",
		        6: "星期六"
		    },
		    MONTH: {
		        0: "1月",
		        1: "2月",
		        2: "3月",
		        3: "4月",
		        4: "5月",
		        5: "6月",
		        6: "7月",
		        7: "8月",
		        8: "9月",
		        9: "10月",
		        10: "11月",
		        11: "12月"
		    },
		    SHORTDAY: {
		        "0": "周日",
		        "1": "周一",
		        "2": "周二",
		        "3": "周三",
		        "4": "周四",
		        "5": "周五",
		        "6": "周六"
		    },
		    fullDate: "y年M月d日EEEE",
		    longDate: "y年M月d日",
		    medium: "yyyy-M-d H:mm:ss",
		    mediumDate: "yyyy-M-d",
		    mediumTime: "H:mm:ss",
		    "short": "yy-M-d ah:mm",
		    shortDate: "yy-M-d",
		    shortTime: "ah:mm"
		}
		locate.SHORTMONTH = locate.MONTH
		dateFilter.locate = locate

		module.exports = dateFilter

	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		
		function orderBy(array, criteria, reverse) {
		    var type = avalon.type(array)
		    if (type !== 'array' && type !== 'object')
		        throw 'orderBy只能处理对象或数组'
		    var order = (reverse && reverse < 0) ? -1 : 1

		    if (typeof criteria === 'string') {
		        var key = criteria
		        criteria = function (a) {
		            return a && a[key]
		        }
		    }
		    array = convertArray(array)
		    array.forEach(function (el) {
		        el.order = criteria(el.value, el.key)
		    })
		    array.sort(function (left, right) {
		        var a = left.order
		        var b = right.order
		        if (Number.isNaN(a) && Number.isNaN(b)) {
		            return 0
		        }
		        return a === b ? 0 : a > b ? order : -order
		    })
		    var isArray = type === 'array'
		    var target = isArray ? [] : {}
		    return recovery(target, array, function (el) {
		        if (isArray) {
		            target.push(el.value)
		        } else {
		            target[el.key] = el.value
		        }
		    })
		}

		function filterBy(array, search) {
		    var type = avalon.type(array)
		    if (type !== 'array' && type !== 'object')
		        throw 'filterBy只能处理对象或数组'
		    var args = avalon.slice(arguments, 2)
		    var stype = avalon.type(search)
		    if (stype === 'function') {
		        var criteria = search
		    } else if (stype === 'string' || stype === 'number' ) {
		        if (search === '') {
		            return array
		        } else {
		            var reg = new RegExp(avalon.escapeRegExp(search), 'i')
		            criteria = function(el){
		                return reg.test(el)
		            }
		        }
		    } else {
		        return array
		    }

		    array = convertArray(array).filter(function (el, i) {
		         return !!criteria.apply(el, [el.value,i].concat(args) )
		    })
		    var isArray = type === 'array'
		    var target = isArray ? [] : {}
		    return recovery(target, array, function (el) {
		        if (isArray) {
		            target.push(el.value)
		        } else {
		            target[el.key] = el.value
		        }
		    })
		}

		function selectBy(data, array, defaults) {
		    if (avalon.isObject(data) && !Array.isArray(data)) {
		        var target = []
		        return recovery(target, array, function (name) {
		            target.push(data.hasOwnProperty(name) ? data[name] : defaults ? defaults[name] : '')
		        })
		    } else {
		        return data
		    }
		}

		Number.isNaN = Number.isNaN || function (a) {
		    return a !== a
		}

		function limitBy(input, limit, begin) {
		    var type = avalon.type(input)
		    if (type !== 'array' && type !== 'object')
		        throw 'filterBy只能处理对象或数组'
		    //尝试将limit转换数值
		    if (Math.abs(Number(limit)) === Infinity) {
		        limit = Number(limit)
		    } else {
		        limit = parseInt(limit, 10)
		    }
		    //转换不了返回
		    if (Number.isNaN(limit)) {
		        return input
		    }
		    //将目标转换为数组
		    if (type === 'object') {
		        input = convertArray(input)
		    }
		    limit = Math.min(input.length, limit)
		    begin = (!begin || Number.isNaN(begin)) ? 0 : ~~begin
		    if (begin < 0) {
		        begin = Math.max(0, input.length + begin)
		    }

		    var data = []
		    for (var i = begin; i < limit; i++) {
		        data.push(input[i])
		    }
		    var isArray = type === 'array'
		    if (isArray) {
		        return data
		    }
		    var target = {}
		    return recovery(target, data, function (el) {
		        target[el.key] = el.value
		    })
		}

		function recovery(ret, array, callback) {
		    for (var i = 0, n = array.length; i < n; i++) {
		        callback(array[i])
		    }
		    return ret
		}


		function convertArray(array) {
		    var ret = [], i = 0
		    avalon.each(array, function (key, value) {
		        ret[i++] = {
		            value: value,
		            key: key
		        }
		    })
		    return ret
		}

		module.exports = {
		    limitBy: limitBy,
		    orderBy: orderBy,
		    selectBy: selectBy,
		    filterBy: filterBy
		}

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		
		var eventFilters = {
		    stop: function (e) {
		        e.stopPropagation()
		        return e
		    },
		    prevent: function (e) {
		        e.preventDefault()
		        return e
		    }
		}
		var keyCode = {
		    esc: 27,
		    tab: 9,
		    enter: 13,
		    space: 32,
		    del: 46,
		    up: 38,
		    left: 37,
		    right: 39,
		    down: 40
		}

		avalon.each(keyCode, function (name, keyCode) {
		    eventFilters[name] = function (e) {
		        if (e.which !== keyCode) {
		            e.$return = true
		        }
		        return e
		    }
		})

		module.exports = eventFilters

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * 虚拟DOM的4大构造器
		 */
		var VText = __webpack_require__(16)
		var VComment = __webpack_require__(17)
		var VElement = __webpack_require__(18)

		avalon.vdomAdaptor = function (obj, method) {
		    if(!obj){//obj在ms-for循环里面可能是null
		        return (method === "toHTML" ? '' :
		                avalon.avalonFragment.cloneNode(false))
		    }
		    switch (obj.nodeType) {
		        case 3:
		            return VText.prototype[method].call(obj) 
		        case 8:
		            return VComment.prototype[method].call(obj)
		        default:
		            return VElement.prototype[method].call(obj)
		    }
		}

		module.exports = {
		    VText: VText,
		    VComment: VComment,
		    VElement: VElement
		}


	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		var rexpr = avalon.config.rexpr

		function VText(text) {
		    if (typeof text === 'string') {
		        this.type = '#text'
		        this.nodeValue = text
		        this.skipContent = !rexpr.test(text)
		        this.nodeType = 3
		    } else {
		        for (var i in text) {
		            this[i] = text[i]
		        }
		    }
		}

		VText.prototype = {
		    constructor: VText,
		    toDOM: function () {
		        return document.createTextNode(this.nodeValue)
		    },
		    toHTML: function () {
		        return this.nodeValue
		    }
		}

		module.exports = VText

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		
		function VComment(text) {
		    if (typeof text === 'string') {
		        this.type = '#comment'
		        this.nodeValue = text
		        this.skipContent = true
		        this.nodeType = 8
		    } else {
		        for (var i in text) {
		            this[i] = text[i]
		        }
		    }
		}
		VComment.prototype = {
		    constructor: VComment,
		    toDOM: function () {
		        return document.createComment(this.nodeValue)
		    },
		    toHTML: function () {
		        return '<!--' + this.nodeValue + '-->'
		    }
		}

		module.exports = VComment

	/***/ },
	/* 18 */
	/***/ function(module, exports) {

		
		function VElement(type, props, children) {
		    if (typeof type === 'object') {
		        for (var i in type) {
		            this[i] = type[i]
		        }
		    } else {
		        this.nodeType = 1
		        this.type = type
		        this.props = props
		        this.children = children
		        this.template = ''
		    }
		}
		function skipFalseAndFunction(a) {
		    return a !== false && (Object(a) !== a)
		}
		var specal = {
		    "class": function (dom, val) {
		        dom.className = val
		    },
		    style: function (dom, val) {
		        dom.style.cssText = val
		    },
		    'for': function (dom, val) {
		        dom.htmlFor = val
		    }
		}
		VElement.prototype = {
		    constructor: VElement,
		    toDOM: function () {
		        var dom = document.createElement(this.type)
		        for (var i in this.props) {
		            var val = this.props[i]
		            if (skipFalseAndFunction(val)) {
		                if (specal[i] && avalon.msie < 8) {
		                    specal[i](dom, val)
		                } else {
		                    dom.setAttribute(i, val + '')
		                }
		            }
		        }
		        if (this.skipContent) {
		            switch (this.type) {
		                case 'script':
		                    dom.text = this.template
		                    break
		                case 'style':
		                case 'template':
		                    dom.innerHTML = this.template
		                    break
		                case 'noscript':
		                    dom.textContent = this.template
		                    break
		                default:
		                    var a = avalon.parseHTML(this.template)
		                    dom.appendChild(a)
		                    break
		            }

		        } else if (!this.isVoidTag) {
		            if (this.children.length) {
		                this.children.forEach(function (c) {
		                    c && dom.appendChild(avalon.vdomAdaptor(c, 'toDOM'))
		                })
		            } else {
		                dom.appendChild(avalon.parseHTML(this.template))
		            }
		        }
		        return dom
		    },
		    toHTML: function () {
		        var arr = []
		        for (var i in this.props) {
		            var val = this.props[i]
		            if (skipFalseAndFunction(val)) {
		                arr.push(i + '=' + avalon.quote(this.props[i] + ''))
		            }
		        }
		        arr = arr.length ? ' ' + arr.join(' ') : ''
		        var str = '<' + this.type + arr
		        if (this.isVoidTag) {
		            return str + '/>'
		        }
		        str += '>'
		        if (this.children.length) {
		            str += this.children.map(function (c) {
		                return c ? avalon.vdomAdaptor(c, 'toHTML'): ''
		            }).join('')
		        } else {
		            str += this.template
		        }
		        return str + '</' + this.type + '>'
		    }
		}

		module.exports = VElement

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 *                          DOM Api
		 * shim,class,data,css,val,html,event,ready  
		 * ------------------------------------------------------------
		 */
		__webpack_require__(20)
		__webpack_require__(21)
		__webpack_require__(22)
		__webpack_require__(23)
		__webpack_require__(24)
		__webpack_require__(25)
		__webpack_require__(31)
		__webpack_require__(33)

		module.exports = avalon

	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		function fixContains(root, el) {
		    try { //IE6-8,游离于DOM树外的文本节点，访问parentNode有时会抛错
		        while ((el = el.parentNode))
		            if (el === root)
		                return true
		        return false
		    } catch (e) {
		        return false
		    }
		}

		avalon.contains = fixContains
		//IE6-11的文档对象没有contains
		if (!avalon.document.contains) {
		    avalon.document.contains = function (b) {
		        return fixContains(document, b)
		    }
		}

		function outerHTML() {
		    return new XMLSerializer().serializeToString(this)
		}

		if (avalon.window.SVGElement) {
		    //safari5+是把contains方法放在Element.prototype上而不是Node.prototype
		    if (!document.createTextNode('x').contains) {
		        Node.prototype.contains = function (arg) {//IE6-8没有Node对象
		            return !!(this.compareDocumentPosition(arg) & 16)
		        }
		    }

		    var svgns = 'http://www.w3.org/2000/svg'
		    var svg = avalon.document.createElementNS(svgns, 'svg')

		    svg.innerHTML = '<circle fill="red" />'
		  //IE9-11,firefox,ios7,8的chrome不支持SVG元素的innerHTML,outerHTML属性
		    if (!/^\[object SVG\w*Element\]$/.test(svg.firstChild)) {
		        function createSVG(node, parent) {
		            /* jshint ignore:start */
		            if (node && node.childNodes) {
		                var nodes = node.childNodes
		                for (var i = 0, el; el = nodes[i++]; ) {
		                    if (el.nodeType === 1) {
		                        var svg = document.createElementNS(svgns, el.nodeName.toLowerCase())
		                        avalon.each(el.attributes, function (a, attr) {
		                            svg.setAttribute(attr.name, attr.value)
		                        })
		                        createSVG(el, svg)
		                        parent.appendChild(svg)
		                    } else {
		                        parent.appendChild(el.cloneNode(true))
		                    }
		                }
		            }
		            /* jshint ignore:end */
		        }
		       
		        Object.defineProperties(SVGElement.prototype, {
		            outerHTML: {
		                configurable: true,
		                get: outerHTML,
		                set: function (html) {
		                    var tagName = this.tagName.toLowerCase()
		                    var parent = this.parent
		                    var parsed = avalon.parseHTML(html)
		                    if (tagName === 'svg') {
		                        parent.insertBefore(parsed, this)
		                    } else {
		                        var empty = document.createDocumentFragment()
		                        createSVG(parsed, empty)
		                        parent.insertBefore(empty, this)
		                    }
		                    parent.removeChild(this)
		                }
		            },
		            innerHTML: {
		                configurable: true,
		                get: function () {
		                    var s = this.outerHTML
		                    var ropen = new RegExp('<' + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', 'i')
		                    var rclose = new RegExp('<\/' + this.nodeName + '>$', 'i')
		                    return s.replace(ropen, '').replace(rclose, '')
		                },
		                set: function (html) {
		                    if (avalon.clearHTML) {
		                        avalon.clearHTML(this)
		                        var frag = avalon.parseHTML(html)
		                        createSVG(frag, this)
		                    }
		                }
		            }
		        })
		    }
		}
		//firefox 到11时才有outerHTML
		if (!avalon.root.outerHTML && window.HTMLElement) { 
		    HTMLElement.prototype.__defineGetter__('outerHTML', outerHTML)
		}




	/***/ },
	/* 21 */
	/***/ function(module, exports) {

		var rnowhite = /\S+/g
		var fakeClassListMethods = {
		    _toString: function () {
		        var node = this.node
		        var cls = node.className
		        var str = typeof cls === 'string' ? cls : cls.baseVal
		        var match = str.match(rnowhite)
		        return match ? match.join(' ') : ''
		    },
		    _contains: function (cls) {
		        return (' ' + this + ' ').indexOf(' ' + cls + ' ') > -1
		    },
		    _add: function (cls) {
		        if (!this.contains(cls)) {
		            this._set(this + ' ' + cls)
		        }
		    },
		    _remove: function (cls) {
		        this._set((' ' + this + ' ').replace(' ' + cls + ' ', ' '))
		    },
		    __set: function (cls) {
		        cls = cls.trim()
		        var node = this.node
		        if (typeof node.className === 'object') {
		            //SVG元素的className是一个对象 SVGAnimatedString { baseVal='', animVal=''}，只能通过set/getAttribute操作
		            node.setAttribute('class', cls)
		        } else {
		            node.className = cls
		        }
		    } //toggle存在版本差异，因此不使用它
		}

		function fakeClassList(node) {
		    if (!('classList' in node)) {
		        node.classList = {
		            node: node
		        }
		        for (var k in fakeClassListMethods) {
		            node.classList[k.slice(1)] = fakeClassListMethods[k]
		        }
		    }
		    return node.classList
		}


		'add,remove'.replace(avalon.rword, function (method) {
		    avalon.fn[method + 'Class'] = function (cls) {
		        var el = this[0] || {}
		        //https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox/Releases/26
		        if (cls && typeof cls === 'string' && el.nodeType === 1) {
		            cls.replace(rnowhite, function (c) {
		                fakeClassList(el)[method](c)
		            })
		        }
		        return this
		    }
		})

		avalon.fn.mix({
		    hasClass: function (cls) {
		        var el = this[0] || {}
		        return el.nodeType === 1 && fakeClassList(el).contains(cls)
		    },
		    toggleClass: function (value, stateVal) {
		        var isBool = typeof stateVal === 'boolean'
		        var me = this
		        String(value).replace(rnowhite, function (c) {
		            var state = isBool ? stateVal : !me.hasClass(c)
		            me[state ? 'addClass' : 'removeClass'](c)
		        })
		        return this
		    }
		})



	/***/ },
	/* 22 */
	/***/ function(module, exports) {

		
		var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		        rvalidchars = /^[\],:{}\s]*$/,
		        rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
		        rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		        rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g

		avalon.parseJSON = avalon.window.JSON ? JSON.parse : function (data) {
		    if (typeof data === 'string') {
		        data = data.trim();
		        if (data) {
		            if (rvalidchars.test(data.replace(rvalidescape, '@')
		                    .replace(rvalidtokens, ']')
		                    .replace(rvalidbraces, ''))) {
		                return (new Function('return ' + data))() // jshint ignore:line
		            }
		        }
		        avalon.error('Invalid JSON: ' + data)
		    }
		    return data
		}

		function parseData(data) {
		    try {
		        if (typeof data === 'object')
		            return data
		        data = data === 'true' ? true :
		                data === 'false' ? false :
		                data === 'null' ? null : +data + '' === data ? +data :
		                rbrace.test(data) ? avalon.parseJSON(data) : data
		    } catch (e) {
		    }
		    return data
		}

		avalon.fn.attr = function (name, value) {
		    if (arguments.length === 2) {
		        this[0].setAttribute(name, value)
		        return this
		    } else {
		        return this[0].getAttribute(name)
		    }
		}

		avalon.fn.data = function (name, value) {
		    name = 'data-' + avalon.hyphen(name || '')
		    switch (arguments.length) {
		        case 2:
		            this.attr(name, value)
		            return this
		        case 1:
		            var val = this.attr(name)
		            return parseData(val)
		        case 0:
		            var ret = {}
		            avalon.each(this[0].attributes, function (i, attr) {
		                if (attr) {
		                    name = attr.name
		                    if (!name.indexOf('data-')) {
		                        name = avalon.camelize(name.slice(5))
		                        ret[name] = parseData(attr.value)
		                    }
		                }
		            })
		            return ret
		    }
		}



	/***/ },
	/* 23 */
	/***/ function(module, exports) {

		var root = avalon.root
		var window = avalon.window
		var camelize = avalon.camelize
		var cssHooks = avalon.cssHooks

		var prefixes = ['', '-webkit-', '-o-', '-moz-', '-ms-']
		var cssMap = {
		    'float': window.Range ? 'cssFloat' : 'styleFloat'
		}
		avalon.cssNumber = avalon.oneObject('animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom')

		avalon.cssName = function (name, host, camelCase) {
		    if (cssMap[name]) {
		        return cssMap[name]
		    }
		    host = host || root.style || {}
		    for (var i = 0, n = prefixes.length; i < n; i++) {
		        camelCase = camelize(prefixes[i] + name)
		        if (camelCase in host) {
		            return (cssMap[name] = camelCase)
		        }
		    }
		    return null
		}


		avalon.fn.css = function (name, value) {
		    if (avalon.isPlainObject(name)) {
		        for (var i in name) {
		            avalon.css(this, i, name[i])
		        }
		    } else {
		        var ret = avalon.css(this, name, value)
		    }
		    return ret !== void 0 ? ret : this
		}

		avalon.fn.position = function () {
		    var offsetParent, offset,
		            elem = this[0],
		            parentOffset = {
		                top: 0,
		                left: 0
		            }
		    if (!elem) {
		        return parentOffset
		    }
		    if (this.css('position') === 'fixed') {
		        offset = elem.getBoundingClientRect()
		    } else {
		        offsetParent = this.offsetParent() //得到真正的offsetParent
		        offset = this.offset() // 得到正确的offsetParent
		        if (offsetParent[0].tagName !== 'HTML') {
		            parentOffset = offsetParent.offset()
		        }
		        parentOffset.top += avalon.css(offsetParent[0], 'borderTopWidth', true)
		        parentOffset.left += avalon.css(offsetParent[0], 'borderLeftWidth', true)

		        // Subtract offsetParent scroll positions
		        parentOffset.top -= offsetParent.scrollTop()
		        parentOffset.left -= offsetParent.scrollLeft()
		    }
		    return {
		        top: offset.top - parentOffset.top - avalon.css(elem, 'marginTop', true),
		        left: offset.left - parentOffset.left - avalon.css(elem, 'marginLeft', true)
		    }
		}
		avalon.fn.offsetParent = function () {
		    var offsetParent = this[0].offsetParent
		    while (offsetParent && avalon.css(offsetParent, 'position') === 'static') {
		        offsetParent = offsetParent.offsetParent;
		    }
		    return avalon(offsetParent || root)
		}

		cssHooks['@:set'] = function (node, name, value) {
		    try {
		        //node.style.width = NaN;node.style.width = 'xxxxxxx';
		        //node.style.width = undefine 在旧式IE下会抛异常
		        node.style[name] = value
		    } catch (e) {
		    }
		}

		if (window.getComputedStyle) {
		    cssHooks['@:get'] = function (node, name) {
		        if (!node || !node.style) {
		            throw new Error('getComputedStyle要求传入一个节点 ' + node)
		        }
		        var ret, styles = getComputedStyle(node, null)
		        if (styles) {
		            ret = name === 'filter' ? styles.getPropertyValue(name) : styles[name]
		            if (ret === '') {
		                ret = node.style[name] //其他浏览器需要我们手动取内联样式
		            }
		        }
		        return ret
		    }
		    cssHooks['opacity:get'] = function (node) {
		        var ret = cssHooks['@:get'](node, 'opacity')
		        return ret === '' ? '1' : ret
		    }
		} else {
		    var rnumnonpx = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i
		    var rposition = /^(top|right|bottom|left)$/
		    var ralpha = /alpha\([^)]*\)/i
		    var ie8 = !!window.XDomainRequest
		    var salpha = 'DXImageTransform.Microsoft.Alpha'
		    var border = {
		        thin: ie8 ? '1px' : '2px',
		        medium: ie8 ? '3px' : '4px',
		        thick: ie8 ? '5px' : '6px'
		    }
		    cssHooks['@:get'] = function (node, name) {
		        //取得精确值，不过它有可能是带em,pc,mm,pt,%等单位
		        var currentStyle = node.currentStyle
		        var ret = currentStyle[name]
		        if ((rnumnonpx.test(ret) && !rposition.test(ret))) {
		            //①，保存原有的style.left, runtimeStyle.left,
		            var style = node.style,
		                    left = style.left,
		                    rsLeft = node.runtimeStyle.left
		            //②由于③处的style.left = xxx会影响到currentStyle.left，
		            //因此把它currentStyle.left放到runtimeStyle.left，
		            //runtimeStyle.left拥有最高优先级，不会style.left影响
		            node.runtimeStyle.left = currentStyle.left
		            //③将精确值赋给到style.left，然后通过IE的另一个私有属性 style.pixelLeft
		            //得到单位为px的结果；fontSize的分支见http://bugs.jquery.com/ticket/760
		            style.left = name === 'fontSize' ? '1em' : (ret || 0)
		            ret = style.pixelLeft + 'px'
		            //④还原 style.left，runtimeStyle.left
		            style.left = left
		            node.runtimeStyle.left = rsLeft
		        }
		        if (ret === 'medium') {
		            name = name.replace('Width', 'Style')
		            //border width 默认值为medium，即使其为0'
		            if (currentStyle[name] === 'none') {
		                ret = '0px'
		            }
		        }
		        return ret === '' ? 'auto' : border[ret] || ret
		    }
		    cssHooks['opacity:set'] = function (node, name, value) {
		        var style = node.style
		        var opacity = isFinite(value) && value <= 1 ? 'alpha(opacity=' + value * 100 + ')' : ''
		        var filter = style.filter || '';
		        style.zoom = 1
		        //不能使用以下方式设置透明度
		        //node.filters.alpha.opacity = value * 100
		        style.filter = (ralpha.test(filter) ?
		                filter.replace(ralpha, opacity) :
		                filter + ' ' + opacity).trim()
		        if (!style.filter) {
		            style.removeAttribute('filter')
		        }
		    }
		    cssHooks['opacity:get'] = function (node) {
		        //这是最快的获取IE透明值的方式，不需要动用正则了！
		        var alpha = node.filters.alpha || node.filters[salpha],
		                op = alpha && alpha.enabled ? alpha.opacity : 100
		        return (op / 100) + '' //确保返回的是字符串
		    }
		}

		'top,left'.replace(avalon.rword, function (name) {
		    cssHooks[name + ':get'] = function (node) {
		        var computed = cssHooks['@:get'](node, name)
		        return /px$/.test(computed) ? computed :
		                avalon(node).position()[name] + 'px'
		    }
		})

		var cssShow = {
		    position: 'absolute',
		    visibility: 'hidden',
		    display: 'block'
		}

		var rdisplayswap = /^(none|table(?!-c[ea]).+)/

		function showHidden(node, array) {
		    //http://www.cnblogs.com/rubylouvre/archive/2012/10/27/2742529.html
		    if (node.offsetWidth <= 0) { //opera.offsetWidth可能小于0
		        if (rdisplayswap.test(cssHooks['@:get'](node, 'display'))) {
		            var obj = {
		                node: node
		            }
		            for (var name in cssShow) {
		                obj[name] = node.style[name]
		                node.style[name] = cssShow[name]
		            }
		            array.push(obj)
		        }
		        var parent = node.parentNode
		        if (parent && parent.nodeType === 1) {
		            showHidden(parent, array)
		        }
		    }
		}
		avalon.each({
		    Width: 'width',
		    Height: 'height'
		}, function (name, method) {
		    var clientProp = 'client' + name,
		            scrollProp = 'scroll' + name,
		            offsetProp = 'offset' + name
		    cssHooks[method + ':get'] = function (node, which, override) {
		        var boxSizing = -4
		        if (typeof override === 'number') {
		            boxSizing = override
		        }
		        which = name === 'Width' ? ['Left', 'Right'] : ['Top', 'Bottom']
		        var ret = node[offsetProp] // border-box 0
		        if (boxSizing === 2) { // margin-box 2
		            return ret + avalon.css(node, 'margin' + which[0], true) + avalon.css(node, 'margin' + which[1], true)
		        }
		        if (boxSizing < 0) { // padding-box  -2
		            ret = ret - avalon.css(node, 'border' + which[0] + 'Width', true) - avalon.css(node, 'border' + which[1] + 'Width', true)
		        }
		        if (boxSizing === -4) { // content-box -4
		            ret = ret - avalon.css(node, 'padding' + which[0], true) - avalon.css(node, 'padding' + which[1], true)
		        }
		        return ret
		    }
		    cssHooks[method + '&get'] = function (node) {
		        var hidden = [];
		        showHidden(node, hidden);
		        var val = cssHooks[method + ':get'](node)
		        for (var i = 0, obj; obj = hidden[i++]; ) {
		            node = obj.node
		            for (var n in obj) {
		                if (typeof obj[n] === 'string') {
		                    node.style[n] = obj[n]
		                }
		            }
		        }
		        return val
		    }
		    avalon.fn[method] = function (value) { //会忽视其display
		        var node = this[0]
		        if (arguments.length === 0) {
		            if (node.setTimeout) { //取得窗口尺寸
		                return node['inner' + name] ||
		                        node.document.documentElement[clientProp] ||
		                        node.document.body[clientProp] //IE6下前两个分别为undefined,0
		            }
		            if (node.nodeType === 9) { //取得页面尺寸
		                var doc = node.documentElement
		                //FF chrome    html.scrollHeight< body.scrollHeight
		                //IE 标准模式 : html.scrollHeight> body.scrollHeight
		                //IE 怪异模式 : html.scrollHeight 最大等于可视窗口多一点？
		                return Math.max(node.body[scrollProp], doc[scrollProp], node.body[offsetProp], doc[offsetProp], doc[clientProp])
		            }
		            return cssHooks[method + '&get'](node)
		        } else {
		            return this.css(method, value)
		        }
		    }
		    avalon.fn['inner' + name] = function () {
		        return cssHooks[method + ':get'](this[0], void 0, -2)
		    }
		    avalon.fn['outer' + name] = function (includeMargin) {
		        return cssHooks[method + ':get'](this[0], void 0, includeMargin === true ? 2 : 0)
		    }
		})

		avalon.fn.offset = function () { //取得距离页面左右角的坐标
		    var node = this[0],
		            box = {
		                left: 0,
		                top: 0
		            }
		    if (!node || !node.tagName || !node.ownerDocument) {
		        return box
		    }
		    var doc = node.ownerDocument,
		            body = doc.body,
		            root = doc.documentElement,
		            win = doc.defaultView || doc.parentWindow
		    if (!avalon.contains(root, node)) {
		        return box
		    }
		    //http://hkom.blog1.fc2.com/?mode=m&no=750 body的偏移量是不包含margin的
		    //我们可以通过getBoundingClientRect来获得元素相对于client的rect.
		    //http://msdn.microsoft.com/en-us/library/ms536433.aspx
		    if (node.getBoundingClientRect) {
		        box = node.getBoundingClientRect() // BlackBerry 5, iOS 3 (original iPhone)
		    }
		    //chrome/IE6: body.scrollTop, firefox/other: root.scrollTop
		    var clientTop = root.clientTop || body.clientTop,
		            clientLeft = root.clientLeft || body.clientLeft,
		            scrollTop = Math.max(win.pageYOffset || 0, root.scrollTop, body.scrollTop),
		            scrollLeft = Math.max(win.pageXOffset || 0, root.scrollLeft, body.scrollLeft)
		    // 把滚动距离加到left,top中去。
		    // IE一些版本中会自动为HTML元素加上2px的border，我们需要去掉它
		    // http://msdn.microsoft.com/en-us/library/ms533564(VS.85).aspx
		    return {
		        top: box.top + scrollTop - clientTop,
		        left: box.left + scrollLeft - clientLeft
		    }
		}

		//生成avalon.fn.scrollLeft, avalon.fn.scrollTop方法
		avalon.each({
		    scrollLeft: 'pageXOffset',
		    scrollTop: 'pageYOffset'
		}, function (method, prop) {
		    avalon.fn[method] = function (val) {
		        var node = this[0] || {},
		                win = getWindow(node),
		                top = method === 'scrollTop'
		        if (!arguments.length) {
		            return win ? (prop in win) ? win[prop] : root[method] : node[method]
		        } else {
		            if (win) {
		                win.scrollTo(!top ? val : avalon(win).scrollLeft(), top ? val : avalon(win).scrollTop())
		            } else {
		                node[method] = val
		            }
		        }
		    }
		})

		function getWindow(node) {
		    return node.window && node.document ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
		}

	/***/ },
	/* 24 */
	/***/ function(module, exports) {

		function getValType(elem) {
		    var ret = elem.tagName.toLowerCase()
		    return ret === 'input' && /checkbox|radio/.test(elem.type) ? 'checked' : ret
		}
		var roption = /^<option(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s+value[\s=]/i
		var valHooks = {
		    'option:get': avalon.msie ? function (node) {
		        //在IE11及W3C，如果没有指定value，那么node.value默认为node.text（存在trim作），但IE9-10则是取innerHTML(没trim操作)
		        //specified并不可靠，因此通过分析outerHTML判定用户有没有显示定义value
		        return roption.test(node.outerHTML) ? node.value : node.text.trim()
		    } : function (node) {
		        return node.value
		    },
		    'select:get': function (node, value) {
		        var option, options = node.options,
		                index = node.selectedIndex,
		                getter = valHooks['option:get'],
		                one = node.type === 'select-one' || index < 0,
		                values = one ? null : [],
		                max = one ? index + 1 : options.length,
		                i = index < 0 ? max : one ? index : 0
		        for (; i < max; i++) {
		            option = options[i]
		            //IE6-9在reset后不会改变selected，需要改用i === index判定
		            //我们过滤所有disabled的option元素，但在safari5下，
		            //如果设置optgroup为disable，那么其所有孩子都disable
		            //因此当一个元素为disable，需要检测其是否显式设置了disable及其父节点的disable情况
		            if ((option.selected || i === index) && !option.disabled &&
		                    (!option.parentNode.disabled || option.parentNode.tagName !== 'OPTGROUP')
		                    ) {
		                value = getter(option)
		                if (one) {
		                    return value
		                }
		                //收集所有selected值组成数组返回
		                values.push(value)
		            }
		        }
		        return values
		    },
		    'select:set': function (node, values, optionSet) {
		        values = [].concat(values) //强制转换为数组
		        var getter = valHooks['option:get']
		        for (var i = 0, el; el = node.options[i++]; ) {
		            if ((el.selected = values.indexOf(getter(el)) > -1)) {
		                optionSet = true
		            }
		        }
		        if (!optionSet) {
		            node.selectedIndex = -1
		        }
		    }
		}

		avalon.fn.val = function (value) {
		    var node = this[0]
		    if (node && node.nodeType === 1) {
		        var get = arguments.length === 0
		        var access = get ? ':get' : ':set'
		        var fn = valHooks[getValType(node) + access]
		        if (fn) {
		            var val = fn(node, value)
		        } else if (get) {
		            return (node.value || '').replace(/\r/g, '')
		        } else {
		            node.value = value
		        }
		    }
		    return get ? val : this
		}

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		var Cache = __webpack_require__(26)
		var fixScript = __webpack_require__(27)
		var fixTbodyVML = __webpack_require__(28)
		var fixCloneNode = __webpack_require__(30)

		var tagHooks = {
		    area: [1, '<map>', '</map>'],
		    param: [1, '<object>', '</object>'],
		    col: [2, '<table><colgroup>', '</colgroup></table>'],
		    legend: [1, '<fieldset>', '</fieldset>'],
		    option: [1, '<select multiple="multiple">', '</select>'],
		    thead: [1, '<table>', '</table>'],
		    tr: [2, '<table>', '</table>'],
		    td: [3, '<table><tr>', '</tr></table>'],
		    g: [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">', '</svg>'],
		    //IE6-8在用innerHTML生成节点时，不能直接创建no-scope元素与HTML5的新标签
		    _default: avalon.modern ? [0, '', ''] : [1, 'X<div>', '</div>'] //div可以不用闭合
		}
		tagHooks.th = tagHooks.td
		tagHooks.optgroup = tagHooks.option
		tagHooks.tbody = tagHooks.tfoot = tagHooks.colgroup = tagHooks.caption = tagHooks.thead
		String('circle,defs,ellipse,image,line,path,polygon,polyline,rect,symbol,text,use').replace(avalon.rword, function (tag) {
		    tagHooks[tag] = tagHooks.g //处理SVG
		})

		var rtagName = /<([\w:]+)/ //取得其tagName
		var rxhtml = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
		var rcreate = avalon.modern ? /[^\d\D]/ : /(<(?:script|link|style|meta|noscript))/ig
		var rnest = /<(?:tb|td|tf|th|tr|col|opt|leg|cap|area)/ //需要处理套嵌关系的标签
		var rhtml = /<|&#?\w+;/
		var htmlCache = new Cache(128)
		avalon.parseHTML = function (html) {
		    var fragment = avalon.avalonFragment.cloneNode(false), firstChild
		    //处理非字符串
		    if (typeof html !== 'string') {
		        return fragment
		    }
		    //处理非HTML字符串
		    if (!rhtml.test(html)) {
		        fragment.appendChild(document.createTextNode(html))
		        return fragment
		    }

		    html = html.replace(rxhtml, '<$1></$2>').trim()
		    var hasCache = htmlCache.get(html)
		    if (hasCache) {
		        return fixCloneNode(hasCache)
		    }

		    var tag = (rtagName.exec(html) || ['', ''])[1].toLowerCase()
		    var wrap = tagHooks[tag] || tagHooks._default
		    var wrapper = avalon.avalonDiv

		    wrapper.innerHTML = wrap[1] + html + wrap[2]

		    //使用innerHTML生成的script节点不会发出请求与执行text属性
		    fixScript(wrapper)

		    if (!avalon.modern) { //fix IE
		        fixTbodyVML(wrapper, wrap, tag)
		    }

		    //移除我们为了符合套嵌关系而添加的标签
		    for (var i = wrap[0]; i--; wrapper = wrapper.lastChild) {
		    }
		    while (firstChild = wrapper.firstChild) { // 将wrapper上的节点转移到文档碎片上！
		        fragment.appendChild(firstChild)
		    }
		    if (html.length < 1024) {
		        htmlCache.put(html, fixCloneNode(fragment))
		    }
		    return fragment
		}


		avalon.innerHTML = function (node, html) {
		    if (!avalon.modern && (!rcreate.test(html) && !rnest.test(html))) {
		        try {
		            node.innerHTML = html
		            return
		        } catch (e) {
		        }
		    }
		    var parsed = this.parseHTML(html)
		    this.clearHTML(node).appendChild(parsed)
		}

		avalon.clearHTML = function (node) {
		    avalon.$$unbind(node)
		    node.textContent = ''
		    while (node.lastChild) {
		        node.removeChild(node.lastChild)
		    }
		    return node
		}



	/***/ },
	/* 26 */
	/***/ function(module, exports) {

		// https://github.com/rsms/js-lru
		function LRU(maxLength) {
		    this.size = 0
		    this.limit = maxLength
		    this.head = this.tail = void 0
		    this._keymap = {}
		}

		var p = LRU.prototype

		p.put = function (key, value) {
		    var entry = {
		        key: key,
		        value: value
		    }
		    this._keymap[key] = entry
		    if (this.tail) {
		        this.tail.newer = entry
		        entry.older = this.tail
		    } else {
		        this.head = entry
		    }
		    this.tail = entry
		    if (this.size === this.limit) {
		        this.shift()
		    } else {
		        this.size++
		    }
		    return value
		}

		p.shift = function () {
		    var entry = this.head
		    if (entry) {
		        this.head = this.head.newer
		        this.head.older =
		                entry.newer =
		                entry.older =
		                this._keymap[entry.key] = void 0
		        delete this._keymap[entry.key] //#1029
		    }
		}
		p.get = function (key) {
		    var entry = this._keymap[key]
		    if (entry === void 0)
		        return
		    if (entry === this.tail) {
		        return  entry.value
		    }
		    // HEAD--------------TAIL
		    //   <.older   .newer>
		    //  <--- add direction --
		    //   A  B  C  <D>  E
		    if (entry.newer) {
		        if (entry === this.head) {
		            this.head = entry.newer
		        }
		        entry.newer.older = entry.older // C <-- E.
		    }
		    if (entry.older) {
		        entry.older.newer = entry.newer // C. --> E
		    }
		    entry.newer = void 0 // D --x
		    entry.older = this.tail // D. --> E
		    if (this.tail) {
		        this.tail.newer = entry // E. <-- D
		    }
		    this.tail = entry
		    return entry.value
		}

		module.exports = LRU


	/***/ },
	/* 27 */
	/***/ function(module, exports) {

		
		var scriptNode = avalon.document.createElement('script')
		var scriptTypes = avalon.oneObject(['', 'text/javascript', 'text/ecmascript',
		    'application/ecmascript', 'application/javascript'])

		function fixScript(wrapper) {
		    var els = typeof  wrapper.querySelectorAll !== 'undefined'?
		       wrapper.querySelectorAll('script'): wrapper.getElementsByTagName('script')
		    if (els.length) {
		        for (var i = 0, el; el = els[i++]; ) {
		            if (scriptTypes[el.type]) {
		                //以偷龙转凤方式恢复执行脚本功能
		                var neo = scriptNode.cloneNode(false) //FF不能省略参数
		                Array.prototype.forEach.call(el.attributes, function (attr) {
		                    if (attr && attr.specified) {
		                        neo[attr.name] = attr.value //复制其属性
		                        neo.setAttribute(attr.name, attr.value)
		                    }
		                }) // jshint ignore:line
		                neo.text = el.text
		                el.parentNode.replaceChild(neo, el) //替换节点
		            }
		        }
		    }
		}

		module.exports = fixScript


	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		var isVML = __webpack_require__(29)
		function fixTbody(wrapper, wrap, tag) {
		    var target = wrap[1] === 'X<div>' ? wrapper.lastChild.firstChild : wrapper.lastChild
		    if (target && target.tagName === 'TABLE' && tag !== 'tbody') {
		        //IE6-7处理 <thead> --> <thead>,<tbody>
		        //<tfoot> --> <tfoot>,<tbody>
		        //<table> --> <table><tbody></table>
		        for (var els = target.childNodes, i = 0, el; el = els[i++]; ) {
		            if (el.tagName === 'TBODY' && !el.innerHTML) {
		                target.removeChild(el)
		                break
		            }
		        }
		    }

		    for (els = wrapper.all, i = 0; el = els[i++]; ) { //fix VML
		        if (isVML(el)) {
		            fixVML(el)
		        }
		    }
		}

		function fixVML(node) {
		    if (node.currentStyle.behavior !== 'url(#default#VML)') {
		        node.style.behavior = 'url(#default#VML)'
		        node.style.display = 'inline-block'
		        node.style.zoom = 1 //hasLayout
		    }
		}

		module.exports = fixTbody


	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		function isVML(src) {
		    var nodeName = src.nodeName
		    return nodeName.toLowerCase() === nodeName && src.scopeName && src.outerText === ''
		}

		module.exports = isVML

	/***/ },
	/* 30 */
	/***/ function(module, exports) {

		var rcheckedType = /radio|checkbox/

		function fix(dest, src) {
		    if (dest.nodeType !== 1) {
		        return
		    }
		    var nodeName = dest.nodeName.toLowerCase()
		    if (nodeName === 'object') {
		        if (dest.parentNode) {
		            dest.outerHTML = src.outerHTML
		        }

		    } else if (nodeName === 'input' && rcheckedType.test(src.type)) {

		        dest.defaultChecked = dest.checked = src.checked

		        if (dest.value !== src.value) {
		            dest.value = src.value
		        }

		    } else if (nodeName === 'option') {
		        dest.defaultSelected = dest.selected = src.defaultSelected
		    } else if (nodeName === 'input' || nodeName === 'textarea') {
		        dest.defaultValue = src.defaultValue
		    }
		}


		function getAll(el) {
		    if (el.getElementsByTagName) {
		        return el.getElementsByTagName('*')
		    } else {
		        return el.querySelectorAll('*')
		    }
		}

		function fixCloneNode(src) {
		    var target = src.cloneNode(true)
		    if(avalon.modern)
		        return target
		    var t = getAll(target)
		    var s = getAll(src)
		    avalon.each(s, function (i) {
		        fix(t[i], s[i])
		    })
		    return target
		}

		module.exports = fixCloneNode

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		var document = avalon.document
		var window = avalon.window
		var root = avalon.root
		var W3C = avalon.modern

		var getShortID = __webpack_require__(6).getShortID
		//http://www.feiesoft.com/html/events.html
		//http://segmentfault.com/q/1010000000687977/a-1020000000688757
		var canBubbleUp = __webpack_require__(32)

		if (!W3C) {
		    delete canBubbleUp.change
		    delete canBubbleUp.select
		}


		var eventHooks = avalon.eventHooks
		/*绑定事件*/
		avalon.bind = function (elem, type, fn) {
		    if (elem.nodeType === 1) {
		        var value = elem.getAttribute('avalon-events') || ''
		        //如果是使用ms-on-*绑定的回调,其uuid格式为e12122324,
		        //如果是使用bind方法绑定的回调,其uuid格式为_12
		        var uuid = getShortID(fn)
		        var key = type + ':' + uuid
		        var hook = eventHooks[type]
		        if (hook) {
		            type = hook.type
		            if (hook.fix) {
		                fn = hook.fix(elem, fn)
		                fn.uuid = uuid + '0'
		            }
		            key = type + ':' + fn.uuid
		        }
		        avalon.eventListeners[fn.uuid] = fn
		        if (value.indexOf(type + ':') === -1) {//同一种事件只绑定一次
		            if (canBubbleUp[type] || (avalon.modern && focusBlur[type])) {
		                delegateEvent(type)
		            } else {
		                nativeBind(elem, type, dispatch)
		            }
		        }
		        var keys = value.split('??')
		        if (keys[0] === '') {
		            keys.shift()
		        }
		        if (keys.indexOf(key) === -1) {
		            keys.push(key)
		            elem.setAttribute('avalon-events', keys.join('??'))
		            //将令牌放进avalon-events属性中
		        }

		    } else {
		        nativeBind(elem, type, fn)
		    }
		    return fn //兼容之前的版本
		}

		avalon.unbind = function (elem, type, fn) {
		    if (elem.nodeType === 1) {
		        var value = elem.getAttribute('avalon-events') || ''
		        switch (arguments.length) {
		            case 1:
		                nativeUnBind(elem, type, dispatch)
		                elem.removeAttribute('avalon-events')
		                break
		            case 2:
		                value = value.split('??').filter(function (str) {
		                    return str.indexOf(type + ':') === -1
		                }).join('??')
		                elem.setAttribute('avalon-events', value)
		                break
		            default:
		                var search = type + ':' + fn.uuid
		                value = value.split('??').filter(function (str) {
		                    return str !== search
		                }).join('??')
		                elem.setAttribute('avalon-events', value)
		                delete avalon.eventListeners[fn.uuid]
		                break
		        }
		    } else {
		        nativeUnBind(elem, type, fn)
		    }
		}

		var reventNames = /[^\s\?]+/g
		var last = +new Date()
		var typeRegExp = {}
		function collectHandlers(elem, type, handlers) {
		    var value = elem.getAttribute('avalon-events')
		    if (value && (elem.disabled !== true || type !== 'click')) {
		        var uuids = []
		        var reg = typeRegExp[type] || (typeRegExp[type] = new RegExp(type + '\\:([^?\s]+)', 'g'))
		        value.replace(reg, function (a, b) {
		            uuids.push(b)
		            return a
		        })
		        if (uuids.length) {
		            handlers.push({
		                elem: elem,
		                uuids: uuids
		            })
		        }
		    }
		    elem = elem.parentNode
		    if (elem && elem.getAttribute && canBubbleUp[type]) {
		        collectHandlers(elem, type, handlers)
		    }

		}
		var rhandleHasVm = /^e\d+/
		var rneedSmooth = /move|scroll/
		function dispatch(event) {
		    event = new avEvent(event)
		    var type = event.type
		    var elem = event.target
		    var handlers = []
		    collectHandlers(elem, type, handlers)
		    var i = 0, j, uuid, handler
		    while ((handler = handlers[i++]) && !event.cancelBubble) {
		        event.currentTarget = handler.elem
		        j = 0
		        while ((uuid = handler.uuids[ j++ ]) &&
		                !event.isImmediatePropagationStopped) {
		            var fn = avalon.eventListeners[uuid]
		            if (fn) {
		                var vm = rhandleHasVm.test(uuid) ? handler.elem._ms_context_ : 0
		                if (vm && vm.$hashcode === false) {
		                    return avalon.unbind(elem, type, fn)
		                }
		                if (rneedSmooth.test(type)) {
		                    var curr = +new Date()
		                    if (curr - last > 16) {
		                        fn.call(vm || elem, event)
		                        last = curr
		                    }
		                } else {
		                    fn.call(vm || elem, event)
		                }
		            }
		        }
		    }
		}

		var focusBlur = {
		    focus: true,
		    blur: true
		}
		var nativeBind = W3C ? function (el, type, fn, capture) {
		    el.addEventListener(type, fn, capture)
		} : function (el, type, fn) {
		    el.attachEvent('on' + type, fn)
		}
		var nativeUnBind = W3C ? function (el, type, fn) {
		    el.removeEventListener(type, fn)
		} : function (el, type, fn) {
		    el.detachEvent('on' + type, fn)
		}

		function delegateEvent(type) {
		    var value = root.getAttribute('delegate-events') || ''
		    if (value.indexOf(type) === -1) {
		        var arr = value.match(reventNames) || []
		        arr.push(type)
		        root.setAttribute('delegate-events', arr.join('??'))
		        nativeBind(root, type, dispatch, !!focusBlur[type])
		    }
		}

		avalon.fireDom = function (elem, type, opts) {
		    if (document.createEvent) {
		        var hackEvent = document.createEvent('Events')
		        hackEvent.initEvent(type, true, true, opts)
		        avalon.shadowCopy(hackEvent, opts)

		        elem.dispatchEvent(hackEvent)
		    } else if (root.contains(elem)) {//IE6-8触发事件必须保证在DOM树中,否则报'SCRIPT16389: 未指明的错误'
		        hackEvent = document.createEventObject()
		        avalon.shadowCopy(hackEvent, opts)
		        elem.fireEvent('on' + type, hackEvent)
		    }
		}

		var rmouseEvent = /^(?:mouse|contextmenu|drag)|click/
		var rvendor = /^(?:ms|webkit|moz)/
		function avEvent(event) {
		    if (event.originalEvent) {
		        return this
		    }
		    for (var i in event) {
		        if (!rvendor.test(i) && typeof event[i] !== 'function') {
		            this[i] = event[i]
		        }
		    }
		    if (!this.target) {
		        this.target = event.srcElement
		    }
		    var target = this.target
		    if (event.type.indexOf('key') === 0) {
		        this.which = event.charCode != null ? event.charCode : event.keyCode
		    } else if (rmouseEvent.test(event.type) && !('pageX' in this)) {
		        var doc = target.ownerDocument || document
		        var box = doc.compatMode === 'BackCompat' ? doc.body : doc.documentElement
		        this.pageX = event.clientX + (box.scrollLeft >> 0) - (box.clientLeft >> 0)
		        this.pageY = event.clientY + (box.scrollTop >> 0) - (box.clientTop >> 0)
		        this.wheelDeltaY = this.wheelDelta
		        this.wheelDeltaX = 0
		    }
		    this.timeStamp = new Date() - 0
		    this.originalEvent = event
		}
		avEvent.prototype = {
		    preventDefault: function () {
		        var e = this.originalEvent;
		        this.returnValue = false
		        if (e) {
		            e.returnValue = false
		            if (e.preventDefault) {
		                e.preventDefault()
		            }
		        }
		    },
		    stopPropagation: function () {
		        var e = this.originalEvent
		        this.cancelBubble = true
		        if (e) {
		            e.cancelBubble = true
		            if (e.stopPropagation) {
		                e.stopPropagation()
		            }
		        }
		    },
		    stopImmediatePropagation: function () {
		        var e = this.originalEvent
		        this.isImmediatePropagationStopped = true
		        if (e.stopImmediatePropagation) {
		            e.stopImmediatePropagation()
		        }
		        this.stopPropagation()
		    }
		}

		//针对firefox, chrome修正mouseenter, mouseleave
		if (!('onmouseenter' in root)) {
		    avalon.each({
		        mouseenter: 'mouseover',
		        mouseleave: 'mouseout'
		    }, function (origType, fixType) {
		        eventHooks[origType] = {
		            type: fixType,
		            fix: function (elem, fn) {
		                return function (e) {
		                    var t = e.relatedTarget
		                    if (!t || (t !== elem && !(elem.compareDocumentPosition(t) & 16))) {
		                        delete e.type
		                        e.type = origType
		                        return fn.apply(this, arguments)
		                    }
		                }
		            }
		        }
		    })
		}
		//针对IE9+, w3c修正animationend
		avalon.each({
		    AnimationEvent: 'animationend',
		    WebKitAnimationEvent: 'webkitAnimationEnd'
		}, function (construct, fixType) {
		    if (window[construct] && !eventHooks.animationend) {
		        eventHooks.animationend = {
		            type: fixType
		        }
		    }
		})
		//针对IE6-8修正input
		if (!('oninput' in document.createElement('input'))) {
		    eventHooks.input = {
		        type: 'propertychange',
		        fix: function (elem, fn) {
		            return function (e) {
		                if (e.propertyName === 'value') {
		                    e.type = 'input'
		                    return fn.apply(this, arguments)
		                }
		            }
		        }
		    }
		}
		if (document.onmousewheel === void 0) {
		    /* IE6-11 chrome mousewheel wheelDetla 下 -120 上 120
		     firefox DOMMouseScroll detail 下3 上-3
		     firefox wheel detlaY 下3 上-3
		     IE9-11 wheel deltaY 下40 上-40
		     chrome wheel deltaY 下100 上-100 */
		    var fixWheelType = document.onwheel !== void 0 ? 'wheel' : 'DOMMouseScroll'
		    var fixWheelDelta = fixWheelType === 'wheel' ? 'deltaY' : 'detail'
		    eventHooks.mousewheel = {
		        type: fixWheelType,
		        fix: function (elem, fn) {
		            return function (e) {
		                var delta = e[fixWheelDelta] > 0 ? -120 : 120
		                e.wheelDelta = ~~elem._ms_wheel_ + delta
		                elem._ms_wheel_ = e.wheelDeltaY = e.wheelDelta

		                e.wheelDeltaX = 0
		                if (Object.defineProperty) {
		                    Object.defineProperty(e, 'type', {
		                        value: 'mousewheel'
		                    })
		                }
		                return fn.apply(this, arguments)
		            }
		        }
		    }
		}

		avalon.fn.bind = function (type, fn, phase) {
		    if (this[0]) { //此方法不会链
		        return avalon.bind(this[0], type, fn, phase)
		    }
		}

		avalon.fn.unbind = function (type, fn, phase) {
		    if (this[0]) {
		        avalon.unbind(this[0], type, fn, phase)
		    }
		    return this
		}
		avalon.$$unbind = function (node) {
		    var nodes = node.getElementsByTagName('*')
		    //IE6-7这样取所有子孙节点会混入注释节点
		    avalon.each(nodes, function (i, el) {
		        if (el.nodeType === 1 && el.getAttribute('avalon-events')) {
		            avalon.unbind(el)
		        }
		    })
		}

	/***/ },
	/* 32 */
	/***/ function(module, exports) {

		//http://www.feiesoft.com/html/events.html
		//http://segmentfault.com/q/1010000000687977/a-1020000000688757
		module.exports = {
		    click: true,
		    dblclick: true,
		    keydown: true,
		    keypress: true,
		    keyup: true,
		    mousedown: true,
		    mousemove: true,
		    mouseup: true,
		    mouseover: true,
		    mouseout: true,
		    wheel: true,
		    mousewheel: true,
		    input: true,
		    change: true,
		    beforeinput: true,
		    compositionstart: true,
		    compositionupdate: true,
		    compositionend: true,
		    select: true,
		    //http://blog.csdn.net/lee_magnum/article/details/17761441
		    cut: true,
		    copy: true,
		    paste: true,
		    beforecut: true,
		    beforecopy: true,
		    beforepaste: true,
		    focusin: true,
		    focusout: true,
		    DOMFocusIn: true,
		    DOMFocusOut: true,
		    DOMActivate: true,
		    dragend: true,
		    datasetchanged: true
		}

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		var scan = __webpack_require__(34)

		var document = avalon.document
		var window = avalon.window
		var root = avalon.root

		var readyList = [], isReady
		var fireReady = function (fn) {
		    isReady = true

		    while (fn = readyList.shift()) {
		        fn(avalon)
		    }
		}

		function doScrollCheck() {
		    try { //IE下通过doScrollCheck检测DOM树是否建完
		        root.doScroll('left')
		        fireReady()
		    } catch (e) {
		        setTimeout(doScrollCheck)
		    }
		}

		if (document.readyState === 'complete') {
		    setTimeout(fireReady) //如果在domReady之外加载
		} else if (document.addEventListener) {
		    document.addEventListener('DOMContentLoaded', fireReady)
		} else if (document.attachEvent) {
		    document.attachEvent('onreadystatechange', function () {
		        if (document.readyState === 'complete') {
		            fireReady()
		        }
		    })
		    try {
		        var isTop = window.frameElement === null
		    } catch (e) {
		    }
		    if (root.doScroll && isTop && window.external) {//fix IE iframe BUG
		        doScrollCheck()
		    }
		}
		if (window.document) {
		    avalon.bind(window, 'load', fireReady)
		}
		avalon.ready = function (fn) {
		    if (!isReady) {
		        readyList.push(fn)
		    } else {
		        fn(avalon)
		    }
		}

		avalon.ready(function(){
		    scan(document.body)
		})



	/***/ },
	/* 34 */
	/***/ function(module, exports) {

		var scanStatistics = 0
		function scan(nodes) {
		    for (var i = 0, elem; elem = nodes[i++]; ) {
		        if (elem.nodeType === 1) {
		            var $id = getController(elem)
		            if ($id) {
		                ++scanStatistics
		            }
		            var vm = avalon.vmodels[$id]
		            if (vm && !vm.$element) {
		                cleanWhitespace(elem)//减少虚拟DOM的规模及diff, patch的时间
		                avalon(elem).removeClass('ms-controller')
		                vm.$element = elem
		                var now = new Date()
		                //IE6-8下元素的outerHTML前面会有空白
		                elem.vtree = avalon.lexer(elem.outerHTML.trim())
		                var now2 = new Date()
		                avalon.log('create primitive vtree', now2 - now)
		                vm.$render = avalon.render(elem.vtree)
		                var now3 = new Date()
		                avalon.log('create template Function ', now3 - now2)
		                avalon.rerenderStart = now3
		                avalon.batch($id, true)

		            } else if (!$id) {
		                scan(elem.childNodes)
		            }
		        }
		    }
		}
		var notWhitespace = /\S/
		function cleanWhitespace(target) {
		    var keep
		    for (var i = 0; i < target.childNodes.length; i++) {
		        var node = target.childNodes[i]
		        if ((node.nodeType === 3) && (!notWhitespace.test(node.nodeValue))) {
		            keep = target.removeChild(node)
		            i--
		        } else if (node.nodeType === 1) {
		            cleanWhitespace(node)
		        }
		    }
		    if (target.childNodes.length === 0 && keep) {
		        target.appendChild(keep)
		    }
		}
		module.exports = avalon.scan = function (a) {
		    if (!a || !a.nodeType) {
		        avalon.warn('[avalon.scan] first argument must be element , documentFragment, or document')
		        return
		    }
		    scan([a])
		    if (scanStatistics === 0) {
		        avalon.warn('[avalon.scan] your nodes must has "ms-controller" attribute')
		    }
		    scanStatistics = 0
		}

		function getController(a) {
		    return a.getAttribute('ms-controller')
		}

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(36)
		__webpack_require__(44)
		//处理属性样式
		__webpack_require__(45)
		__webpack_require__(48)
		__webpack_require__(49)
		//处理内容
		__webpack_require__(50)
		__webpack_require__(51)
		__webpack_require__(52)
		//需要用到事件的
		__webpack_require__(53)
		__webpack_require__(54)
		__webpack_require__(55)
		__webpack_require__(62)
		__webpack_require__(63)

		//处理逻辑
		__webpack_require__(64)
		__webpack_require__(66)

		__webpack_require__(67)
		__webpack_require__(69)
		//优先级 ms-important, ms-controller, ms-for, ms-widget, ms-effect, ms-if
		//.......
		//ms-duplex

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		var parseView = __webpack_require__(37)
		var update = __webpack_require__(43)

		avalon.important = function (elem, vid) {
		    //如果vmodel还不存在,直接返回
		    var wid = elem.props.wid
		    var vm = avalon.vmodels[vid]
		    if(!vm){
		        return elem
		    }else if (typeof avalon.caches[wid] === 'string') {
		        var body = avalon.caches[wid] 
		        //生成模板函数,并进行相关缓存
		        body = '__vmodel__ =  avalon.vmodels[' +
		                avalon.quote(vid) + ']\n' + body
		        var render = Function('__vmodel__', body)
		        var child = render()
		        elem = avalon.caches[wid] = child[0]
		        elem.order = 'ms-important'
		        elem.skipAttrs = false
		        elem.props['ms-important'] = vid
		        elem.render = render
		        return elem
		    } else {
		        elem = avalon.caches[wid]
		        elem.skipAttrs = elem.skipContent = true
		        return elem
		    }
		}
		avalon.directive("important", {
		    priority: 1,
		    parse: function (binding, num, elem) {
		        delete elem.props['ms-important']
		        var wid = elem.props.wid || (elem.props.wid = avalon.makeHashCode('w'))
		        var fn = parseView([elem], num) + '\n\nreturn vnodes' + num
		        //将渲染函数的某一部分存起来,渲在c方法中转换为函数
		        avalon.caches[wid] = fn
		        elem.isVoidTag = true
		        return ['vnode' + num + '.props.wid = ' + avalon.quote(wid),
		            'vnode' + num + ' = avalon.important(vnode' + num + ',' +
		                    avalon.quote(binding.expr) + ')'].join('\n') + '\n'

		    },
		    diff: function (cur, pre, steps, name) {
		        if (pre.props[name] !== cur.props[name]) {
		            update(cur, this.update, steps, 'important' )
		        }
		    },
		    update: function (node, vnode) {
		        var vid = vnode.props['ms-important']
		        var vm = avalon.vmodels[vid]
		        vm.$render = vnode.render
		        vm.$element = node
		    }
		})



	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		
		var parseExpr = __webpack_require__(38)
		var parseBindings = __webpack_require__(41)
		var parseDelimiter = __webpack_require__(42)
		var rexpr = avalon.config.rexpr
		var quote = avalon.quote
		var makeHashCode = avalon.makeHashCode
		var r = __webpack_require__(40)
		var rident = r.ident
		var rsp = r.sp
		function wrapDelimiter(expr) {
		    return rident.test(expr) ? expr : parseExpr(expr, 'text')
		}

		function wrap(a, num) {
		    return '(function(){\n\n' + a + '\n\nreturn vnodes' + num + '\n})();\n'
		}

		var rmsFor = /^\s*ms\-for:/
		var rmsForEnd = /^\s*ms\-for\-end:/

		function parseView(arr, num, scan) {
		    num = num || String(new Date - 0).slice(0, 5)

		    var forstack = []
		    var hasIf = false
		    var children = 'vnodes' + num
		    var vnode = 'vnode' + num
		    var str = 'var ' + children + ' = []\n'
		    for (var i = 0; i < arr.length; i++) {
		        var el = arr[i]
		        if (el.nodeType === 3) {
		            str += 'var ' + vnode + ' = {type:"#text",nodeType:3,skipContent:true}\n'
		            var hasDelimiter = rexpr.test(el.nodeValue)

		            if (hasDelimiter) {
		                var array = parseDelimiter(el.nodeValue)
		                if (array.length === 1) {
		                    var a = parseExpr(array[0].expr)
		                    str += vnode + '.nodeValue = ' + wrapDelimiter(array[0].expr) + '\n'
		                } else {
		                    a = array.map(function (el) {
		                        return el.type ? wrapDelimiter(el.expr) : quote(el.expr)
		                    }).join(' + ')
		                    str += vnode + '.nodeValue = String(' + a + ')\n'
		                }
		                str += vnode + '.fixIESkip = true\n'
		                /* jshint ignore:start */
		                str += vnode + '.skipContent = false\n'
		            } else {
		                if (rsp.test(el.nodeValue)) {
		                    str += vnode + '.nodeValue = "\\n"\n'
		                } else {
		                    str += vnode + '.nodeValue = ' + quote(el.nodeValue) + '\n'
		                }
		            }
		            str += children + '.push(' + vnode + ')\n'
		            continue
		        } else if (el.nodeType === 8) {
		            var nodeValue = el.nodeValue
		            if (rmsFor.test(nodeValue)) {// 处理ms-for指令
		                if (nodeValue.indexOf('ms-for:') !== 0) {
		                    avalon.error('ms-for指令前不能有空格')
		                }
		                var signature = el.signature
		                forstack.push(signature)
		                str += '\nvar ' + signature + ' = {' +
		                        '\n\tnodeType:8,' +
		                        '\n\ttype:"#comment",' +
		                        '\n\tvmodel:__vmodel__,' +
		                        '\n\tdirective:"for",' +
		                        '\n\tskipContent:false,' +
		                        '\n\tcid:' + quote(el.cid) + ',' +
		                        '\n\tstart:' + children + '.length,' +
		                        '\n\tsignature:' + quote(signature) + ',' +
		                        '\n\ttemplate:' + quote(el.template) + ',' +
		                        '\n\tnodeValue:' + quote(nodeValue) +
		                        '\n}\n'
		                str += children + '.push(' + signature + ')\n'

		                str += avalon.directives['for'].parse(el, num)

		            } else if (rmsForEnd.test(nodeValue)) {
		                var signature = forstack[forstack.length - 1]
		                if (nodeValue.indexOf('ms-for-end:') !== 0) {
		                    avalon.error('ms-for-end指令前不能有空格')
		                }
		                str += children + '.push({' +
		                        '\n\tnodeType: 8,' +
		                        '\n\ttype:"#comment",' +
		                        '\n\tskipContent: true,' +
		                        '\n\tnodeValue:' + quote(signature) + ',' +
		                        '\n\tkey:traceKey\n})\n'
		                str += '\n})\n' //结束循环
		                if (forstack.length) {
		                    var signature = forstack[forstack.length - 1]
		                    str += signature + '.end =' + children + '.push({' +
		                            '\n\tnodeType: 8,' +
		                            '\n\ttype:"#comment",' +
		                            '\n\tskipContent: true,' +
		                            '\n\tsignature: ' + quote(signature) + ',' +
		                            '\n\tnodeValue: "ms-for-end:"' +
		                            '\n})\n'
		                    forstack.pop()
		                }
		            } else if (nodeValue.indexOf('ms-js:') === 0) {//插入普通JS代码
		                str += parseExpr(nodeValue.replace('ms-js:', ''), 'js') + '\n'
		            } else {
		                str += children + '.push(' + quote(el) + ')\n\n\n'
		            }
		            continue
		        } else { //处理元素节点

		            str += 'var ' + vnode + ' = {' +
		                    '\n\tnodeType:1,' +
		                    '\n\ttype: ' + quote(el.type) + ',' +
		                    '\n\tprops:{},' +
		                    '\n\tchildren: [],' +
		                    '\n\tisVoidTag: ' + !!el.isVoidTag + ',' +
		                    '\n\ttemplate: ""}\n'

		            var hasWidget = el.props['ms-widget']
		            if (!hasWidget && el.type.indexOf('-') > 0 && !el.props.resolved) {
		                el.props['ms-widget'] = '@' + el.type.replace(/-/g, "_")
		            }
		            var hasBindings = ''
		            var vmID = el.props['ms-controller']

		            hasBindings = parseBindings(el.props, num, el)
		            if (hasBindings) {
		                str += hasBindings
		            }
		            if (!el.isVoidTag) {
		                if (el.children.length) {
		                    var hasIf = el.props['ms-if']
		                    if (hasIf) {
		                        str += 'if(' + vnode + '&&' + vnode + '.nodeType === 1 ){\n'
		                    }
		                    str += vnode + '.children = ' + wrap(parseView(el.children, num), num) + '\n'
		                    if (hasIf) {
		                        str += '}\n'
		                    }
		                } else {
		                    str += vnode + '.template = ' + quote(el.template) + '\n'
		                }
		            }
		            str += children + '.push(' + vnode + ')\n'
		            if (vmID) {//闭合ms-controller指令中avalon.skipController分支
		                str += '}'
		            }
		        }

		    }
		    return str
		}
		avalon.htmlFactory = function (str, num) {
		    var vtree = avalon.lexer(str + "")
		    avalon.__html = []
		    var render = parseView(vtree, num) + '\nreturn (avalon.__html = vnodes' + num + ')'
		    return {
		        render: render
		    }
		}

		module.exports = parseView

	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		

		//缓存求值函数，以便多次利用
		var evaluatorPool = __webpack_require__(39)

		var rregexp = /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/g
		var rstring = __webpack_require__(40).string
		var rfill = /\?\?\d+/g
		var brackets = /\(([^)]*)\)/
		var rAt = /(^|[^\w\u00c0-\uFFFF_])(@|#)(?=\w)/g
		var rhandleName = /^(?:\@|\#)[$\w]+$/
		var rshortCircuit = /\|\|/g
		var rpipeline = /\|(?=\w)/
		var ruselessSp = /\s*(\.|\|)\s*/g
		var wrapDuplex = function(arr){
		    return '(function(){ return ' +arr.join('\n')+'})();\n'
		}
		function parseExpr(str, category) {

		    var binding = {}
		    category = category || 'other'
		    if (typeof str === 'object') {
		        category = str.type
		        binding = str
		        str = binding.expr
		    }
		    if (typeof str !== 'string')
		        return ''
		    var cacheID = str
		    var cacheStr = evaluatorPool.get(category + ':' + cacheID)

		    if (cacheStr) {
		        return cacheStr
		    }

		    var number = 1
		//相同的表达式生成相同的函数
		    var maps = {}
		    function dig(a) {
		        var key = '??' + number++
		        maps[key] = a
		        return key
		    }

		    function fill(a) {
		        return maps[a]
		    }

		    var input = str.replace(rregexp, dig).//移除所有正则
		            replace(rstring, dig).//移除所有字符串
		            replace(rshortCircuit, dig).//移除所有短路或
		            replace(ruselessSp, '$1').//移除. |两端空白
		            split(rpipeline) //使用管道符分离所有过滤器及表达式的正体

		//还原body
		    var body = input.shift().replace(rfill, fill).trim()
		    if (category === 'on' && rhandleName.test(body)) {
		        body = body + '($event)'
		    }

		    body = body.replace(rAt, '$1__vmodel__.')
		    if (category === 'js') {
		        return evaluatorPool.put(category + ':' + cacheID, body)
		    }

		//处理表达式的过滤器部分

		    var filters = input.map(function (str) {

		        str = str.replace(rfill, fill).replace(rAt, '$1__vmodel__.') //还原
		        var hasBracket = false
		        str = str.replace(brackets, function (a, b) {
		            hasBracket = true
		            return /\S/.test(b) ?
		                    '(__value__,' + b + ');' :
		                    '(__value__);'
		        })
		        if (!hasBracket) {
		            str += '(__value__);'
		        }
		        str = str.replace(/(\w+)/, 'avalon.__format__("$1")')
		        return '__value__ = ' + str
		    })
		    var ret = []
		    if (category === 'on') {
		        filters = filters.map(function (el) {
		            return el.replace(/__value__/g, '$event')
		        })
		        if (filters.length) {
		            filters.push('if($event.$return){\n\treturn;\n}')
		        }
		        if(!avalon.modern){
		            body = body.replace(/__vmodel__\.([^(]+)\(([^)]*)\)/,function(a, b, c){
		                return '__vmodel__.'+b+".call(__vmodel__"+ (/\S/.test(c) ? ','+c: "")+")"
		            })
		        }
		        ret = ['function self($event){',
		            'try{',
		            '\tvar __vmodel__ = this;',
		            '\t' + body,
		            '}catch(e){',
		            quoteError(str, category),
		            '}',
		            '}']
		        filters.unshift(2, 0)
		    } else if (category === 'duplex') {

		        //从vm中得到当前属性的值
		        var getterBody = [
		            'function (__vmodel__){',
		            'try{',
		            'return ' + body + '\n',
		            '}catch(e){',
		            quoteError(str, category),
		            '}',
		            '}']
		        evaluatorPool.put('duplex:' + cacheID,wrapDuplex(getterBody))
		        //给vm同步某个属性
		        var setterBody = [
		            'function (__vmodel__,__value__){',
		            'try{',
		            '\t' + body + ' = __value__',
		            '}catch(e){',
		            quoteError(str, category),
		            '}',
		            '}']
		        evaluatorPool.put('duplex:set:' + cacheID, wrapDuplex(setterBody))
		        //对某个值进行格式化
		        if (input.length) {
		            var formatBody = [
		                'function (__vmodel__, __value__){',
		                'try{',
		                filters.join('\n'),
		                'return __value__\n',
		                '}catch(e){',
		                quoteError(str, category),
		                '}',
		                '}']
		            evaluatorPool.put('duplex:format:' + cacheID, wrapDuplex(formatBody))
		        }
		        return
		    } else {
		        ret = [
		            '(function(){',
		            'try{',
		            'var __value__ = ' + body,
		            ( category === 'text'? 
		            'return __value__ == null ? "" :__value__': 
		            'return __value__'),
		            '}catch(e){',
		            quoteError(str, category),
		            '\treturn ""',
		            '}',
		            '})()'
		        ]
		        filters.unshift(3, 0)
		    }
		    ret.splice.apply(ret, filters)
		    cacheStr = ret.join('\n')
		    evaluatorPool.put(category + ':' + cacheID, cacheStr)
		    return cacheStr

		}

		function quoteError(str, type) {
		    return '\tavalon.warn(e, ' +
		            avalon.quote('parse ' + type + ' binding【 ' + str + ' 】fail')
		            + ')'
		}

		module.exports = avalon.parseExpr = parseExpr


	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		
		var Cache = __webpack_require__(26)
		//缓存求值函数，以便多次利用
		module.exports = new Cache(512)


	/***/ },
	/* 40 */
	/***/ function(module, exports) {

		module.exports = {
		    ident: /^[$a-zA-Z_][$a-zA-Z0-9_]*$/,
		    sp: /^\s+$/, //全部都是空白,
		    leftSp: /^\s+/, //左边空白
		    rightSp: /s+$/, //右边空白,
		    binding: /^ms-(\w+)-?(.*)/, //绑定属性,
		    string: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/g
		}

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		var rneedQuote = /[W-]/
		var quote = avalon.quote
		var directives = avalon.directives
		var rbinding = __webpack_require__(40).binding
		var eventMap = avalon.oneObject('animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit')
		var keyMap = avalon.oneObject("break,case,catch,continue,debugger,default,delete,do,else,false," +
		        "finally,for,function,if,in,instanceof,new,null,return,switch,this," +
		        "throw,true,try,typeof,var,void,while,with," + /* 关键字*/
		        "abstract,boolean,byte,char,class,const,double,enum,export,extends," +
		        "final,float,goto,implements,import,int,interface,long,native," +
		        "package,private,protected,public,short,static,super,synchronized," +
		        "throws,transient,volatile")
		function parseBindings(props, num, elem) {
		    var bindings = []
		    var skip = 'ms-skip' in props
		    var ret = ''
		    var uniq = {}
		    for (var i in props) {
		        var value = props[i], match

		        if (!skip &&  (match = i.match(rbinding))) {
		            var type = match[1]
		            var param = match[2] || ''
		            var name = i
		            if (eventMap[type]) {
		                var order = parseFloat(param) || 0
		                param = type
		                type = 'on'
		            }
		            name = 'ms-' + type + (param ? '-' + param : '')
		            if (i !== name) {
		                delete props[i]
		                props[name] = value
		            }
		            if (directives[type]) {
		                var binding = {
		                    type: type,
		                    param: param,
		                    name: name,
		                    expr: value,
		                    priority: directives[type].priority || type.charCodeAt(0) * 100
		                }
		                if (type === 'on') {
		                    order = order || 0
		                    binding.name += '-' + order
		                    binding.priority += param.charCodeAt(0) * 100 + order
		                }
		                if(!uniq[binding.name]){
		                    uniq[binding.name] = 1
		                    bindings.push(binding)
		                }
		            }
		        } else {
		            //IE6-8下关键字不能直接当做对象的键名，需要用引号括起来
		            if (rneedQuote.test(i) || keyMap[i]) {//收集非绑定属性
		                ret += 'vnode' + num + '.props[' + quote(i) + '] = ' + quote(value) + '\n'
		            } else {
		                ret += 'vnode' + num + '.props.' + i + ' = ' + quote(value) + '\n'
		            }
		        }
		    }

		    if (!bindings.length) {
		        ret += '\tvnode' + num + '.skipAttrs = true\n'
		    } else {
		        bindings.sort(byPriority)
		        ret += ('vnode' + num + '.order = "'+ bindings.map(function(a){
		            return a.name
		        }).join(';;')+'"\n')
		        //优化处理ms-widget
		        var first = bindings[0]
		        var isWidget = first && first.type === 'widget'
		        if (isWidget) {
		            bindings.shift()
		            bindings.forEach(function (binding) {
		                ret += 'vnode' + num + '.props[' + quote(binding.name) + '] = ' + quote(binding.expr) + '\n'
		            })
		            ret += directives['widget'].parse(first, num, elem)
		        } else {
		            bindings.forEach(function (binding) {
		                ret += directives[binding.type].parse(binding, num, elem)
		            })
		        }

		    }
		    return ret

		}

		function byPriority(a, b) {
		    return a.priority - b.priority
		}

		module.exports = parseBindings

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		var rline = /\r?\n/g
		var r = __webpack_require__(40)

		function parseDelimiter(str) {
		    var tokens = [],
		            value, start = 0,
		            stop
		    do {
		        stop = str.indexOf(avalon.config.openTag, start)
		        if (stop === -1) {
		            break
		        }
		        value = str.slice(start, stop)
		        if (start === 0) {
		            value = value.replace(r.leftSp, '')
		        }
		        if (value) { // {{ 左边的文本
		            tokens.push({
		                expr: value
		            })
		        }
		        start = stop + avalon.config.openTag.length
		        stop = str.indexOf(avalon.config.closeTag, start)
		        if (stop === -1) {
		            break
		        }
		        value = str.slice(start, stop)
		        if (value) { //处理{{ }}插值表达式
		            tokens.push({
		                expr: value.replace(rline, ''),
		                type: '{{}}'
		            })
		        }
		        start = stop + avalon.config.closeTag.length
		    } while (1)
		    value = str.slice(start)

		    var lastText = value.replace(r.rightSp, '')
		    if (lastText) { //}} 右边的文本
		        tokens.push({
		            expr: lastText
		        })
		    }
		    return tokens
		}

		module.exports = parseDelimiter


	/***/ },
	/* 43 */
	/***/ function(module, exports) {

		module.exports = function (cur, update, steps,  type, hookName) {
		    hookName = hookName || 'change'
		    var list = cur[hookName] || (cur[hookName] = [])
		    if (avalon.Array.ensure(list, update)) {
		        steps.count += 1
		        avalon.config.showDiff && avalon.log(type+ ' change')
		    }
		}


	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		// 抽离出来公用
		var update = __webpack_require__(43)

		avalon.skipController = function (fast, vm, iv) {
		    if (fast) {
		        var id = vm.$render ? vm.$render.$id : vm.$id
		        if (fast.length > id.length) {
		            return fast.indexOf(id + ';;') !== 0
		        }
		        return id.indexOf(fast) !== 0
		    }
		    return false
		}

		avalon.directive('controller', {
		    priority: 2,
		    parse: function (binding, num, elem) {
		        var id = avalon.quote(binding.expr)
		        delete elem.props['ms-controller']
		        var vm = 'vm' + num
		        var ret = [
		            'if(!vnodes' + num + '.vm){ vnodes' + num + '.vm = __vmodel__}',
		            '__vmodel__ = vnodes' + num + '.vm || __vmodel__',
		            'vnode' + num + '.props["ms-controller"] = ' + id + ';',
		            'var ' + vm + ' = avalon.vmodels[' + id + ']',
		            'if(!' + vm + '){return }',
		            'vnode' + num + '.bottom = ' + vm,
		            'if(__vmodel__){',
		            'vnode' + num + '.top = __vmodel__',
		            'var __id__ = __vmodel__.$id+ "_" + ' + id,
		            "__vmodel__ = avalon.caches[__id__] || (avalon.caches[__id__] = avalon.mediatorFactory(__vmodel__," + vm + '))',
		            'vnode' + num + '.mediator = __vmodel__',
		            '}else{',
		            '__vmodel__ = ' + vm,
		            '}',
		            'if(!avalon.skipController(__fast__, vnode' + num + '.bottom)){ '
		        ]
		        return ret.join('\n') + '\n'
		    },
		    diff: function (cur, pre, steps, name) {
		        if (pre.props[name] !== cur.props[name]) {
		            console.log('controller',steps)
		            update(cur, this.update, steps, 'controller' )
		        }
		    },
		    update: function (node, vnode) {
		        var top = vnode.top //位于上方的顶层vm或mediator vm
		        var bottom = vnode.bottom //位于下方的顶层vm
		        var mediator = vnode.mediator //新合成的mediator vm
		        if(!(top && bottom)){
		            return
		        }
		        bottom.$element =  (top && top.$element) || node
		        vnode.top = vnode.mediator = vnode.bottom = 0
		        if (!bottom.$render) {
		            var topRender = top.$render
		            if (!topRender.$id) {
		                topRender.$id = top.$id
		            }
		            function bottomRender() {
		                return topRender(0, bottomRender.$id)
		            }
		            bottom.$render = bottomRender
		            bottomRender.dom = bottom.$element  //方便以后更换扫描起点
		            bottomRender.$id = topRender.$id + ';;' + bottom.$id
		            if(mediator){
		               mediator.$render = bottomRender
		            }
		        }
		    }
		})

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		
		var attrUpdate = __webpack_require__(46)
		var update = __webpack_require__(43)

		avalon.directive('attr', {
		    parse: function (binding, num) {
		        return 'vnode' + num + '.props["ms-attr"] = ' + avalon.parseExpr(binding) + ';\n'

		    },
		    diff: function (cur, pre, steps, name) {
		        var a = cur.props[name]
		        var p = pre.props[name]
		        if (a && typeof a === 'object') {
		            if (Array.isArray(a)) {
		                a = cur.props[name] = avalon.mix.apply({}, a)
		            }
		            if (typeof p !== 'object') {
		                cur.changeAttr = a
		            } else {
		                var patch = {}
		                var hasChange = false
		                for (var i in a) {
		                    if (a[i] !== p[i]) {
		                        hasChange = true
		                        patch[i] = a[i]
		                    }
		                }
		                if (hasChange) {
		                    cur.changeAttr = patch
		                }
		            }
		            if (cur.changeAttr) { 
		                update(cur, this.update, steps, 'attr' )
		            }
		        } else {
		            cur.props[name] = p
		        }
		        pre.changeAttr = null
		    },
		    //dom, vnode
		    update: attrUpdate
		})



	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		
		var propMap = __webpack_require__(47)
		var isVML = __webpack_require__(29)
		var rsvg =/^\[object SVG\w*Element\]$/
		var ramp = /&amp;/g

		function attrUpdate(node, vnode) {
		    var attrs = vnode.changeAttr
		    if (!node || node.nodeType !== 1 ) {
		        return
		    }
		    if (attrs) {
		        for (var attrName in attrs) {
		            var val = attrs[attrName]
		            // 处理路径属性
		            if (attrName === 'href' || attrName === 'src') {
		                if (!node.hasAttribute) {
		                    val = String(val).replace(ramp, '&') //处理IE67自动转义的问题
		                }
		                node[attrName] = val
		                if (window.chrome && node.tagName === 'EMBED') {
		                    var parent = node.parentNode //#525  chrome1-37下embed标签动态设置src不能发生请求
		                    var comment = document.createComment('ms-src')
		                    parent.replaceChild(comment, node)
		                    parent.replaceChild(node, comment)
		                }
		                //处理HTML5 data-*属性
		            } else if (attrName.indexOf('data-') === 0) {
		                node.setAttribute(attrName, val)

		            } else {
		                var propName = propMap[attrName] || attrName
		                if (typeof node[propName] === 'boolean') {
		                    node[propName] = !!val
		                  
		                    //布尔属性必须使用el.xxx = true|false方式设值
		                    //如果为false, IE全系列下相当于setAttribute(xxx,''),
		                    //会影响到样式,需要进一步处理
		                }

		                if (val === false ) {//移除属性
		                    node.removeAttribute(propName)
		                    continue
		                }
		                //SVG只能使用setAttribute(xxx, yyy), VML只能使用node.xxx = yyy ,
		                //HTML的固有属性必须node.xxx = yyy
		                var isInnate = rsvg.test(node) ? false :
		                        (document.namespaces && isVML(node)) ? true :
		                        attrName in node.cloneNode(false)
		                if (isInnate) {
		                    node[propName] = val + ''
		                } else {
		                    node.setAttribute(attrName, val)
		                }

		            }

		        }
		        vnode.changeAttr = null
		    }
		}

		module.exports = attrUpdate

	/***/ },
	/* 47 */
	/***/ function(module, exports) {

		var propMap = {//不规则的属性名映射
		    'accept-charset': 'acceptCharset',
		    'char': 'ch',
		    charoff: 'chOff',
		    'class': 'className',
		    'for': 'htmlFor',
		    'http-equiv': 'httpEquiv'
		}
		/*
		contenteditable不是布尔属性
		http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/
		contenteditable=''
		contenteditable='events'
		contenteditable='caret'
		contenteditable='plaintext-only'
		contenteditable='true'
		contenteditable='false'
		 */
		var bools = ['autofocus,autoplay,async,allowTransparency,checked,controls',
		    'declare,disabled,defer,defaultChecked,defaultSelected,',
		    'isMap,loop,multiple,noHref,noResize,noShade',
		    'open,readOnly,selected'
		].join(',')

		bools.replace(/\w+/g, function (name) {
		    propMap[name.toLowerCase()] = name
		})

		var anomaly = ['accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan',
		    'dateTime,defaultValue,contentEditable,frameBorder,longDesc,maxLength,'+
		    'marginWidth,marginHeight,rowSpan,tabIndex,useMap,vSpace,valueType,vAlign'
		].join(',')

		anomaly.replace(/\w+/g, function (name) {
		    propMap[name.toLowerCase()] = name
		})

		module.exports = propMap


	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		
		var update = __webpack_require__(43)

		avalon.directive('css', {
		    parse: function (binding, num) {
		        return 'vnode' + num + '.props["ms-css"] = ' + avalon.parseExpr(binding) + ';\n'
		    },
		    diff: function (cur, pre, steps, name) {
		        var a = cur.props[name]
		        var p = pre.props[name]
		        if (Object(a) === a) {
		            if (Array.isArray(a)) {
		                a = cur.props[name] = avalon.mix.apply({}, a)
		            }
		            if (typeof p !== 'object') {
		                cur.changeStyle = a
		            } else {
		                var patch = {}
		                var hasChange = false
		                for (var i in a) {
		                    if (a[i] !== p[i]) {
		                        hasChange = true
		                        patch[i] = a[i]
		                    }
		                }
		                if (hasChange) {
		                    cur.changeStyle = patch
		                }
		            }
		            if (cur.changeStyle) {
		                update(cur, this.update, steps, 'css')
		            }
		        } else {
		            cur.props[name] = p
		        }
		    },
		    update: function (node, vnode) {
		        var change = vnode.changeStyle
		        var wrap = avalon(node)
		        for (var name in change) {
		            wrap.css(name, change[name])
		        }
		        delete vnode.changeStyle
		    }
		})


	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(43)

		var none = 'none'
		function parseDisplay(elem, val) {
		    //用于取得此类标签的默认display值
		    var doc = elem.ownerDocument
		    var nodeName = elem.nodeName
		    var key = '_' + nodeName
		    if (!parseDisplay[key]) {
		        var temp = doc.body.appendChild(doc.createElement(nodeName))
		        if (avalon.modern) {
		            val = getComputedStyle(temp, null).display
		        } else {
		            val = temp.currentStyle.display
		        }
		        doc.body.removeChild(temp)
		        if (val === none) {
		            val = 'block'
		        }
		        parseDisplay[key] = val
		    }
		    return parseDisplay[key]
		}

		avalon.parseDisplay = parseDisplay

		avalon.directive('visible', {
		    parse: function (binding, num) {
		        return 'vnode' + num + '.props["ms-visible"] = ' + avalon.parseExpr(binding) + ';\n'
		    },
		    diff: function (cur, pre, steps, name) {
		        var c = cur.props[name] = !!cur.props[name]
		        cur.displayValue = pre.displayValue
		        if (c !== pre.props[name]) {
		            update(cur, this.update, steps, 'visible' )
		        }
		    },
		    update: function (node, vnode) {
		        var show = vnode.props['ms-visible']
		        var display = node.style.display
		        var value
		        if (show) {
		            if (display === none) {
		                value = vnode.displayValue
		                if (!value) {
		                    node.style.display = ''
		                }
		            }
		            if (node.style.display === '' && avalon(node).css('display') === none &&
		                    // fix firefox BUG,必须挂到页面上
		                    avalon.contains(node.ownerDocument, node)) {

		                value = parseDisplay(node)
		            }
		        } else {
		            if (display !== none) {
		                value = none
		                vnode.displayValue = display
		            }
		        }
		        function cb(){
		           if (value !== void 0) {
		              node.style.display = value
		           }
		        }
		        avalon.applyEffect(node, vnode, {
		            hook: show ? 'onEnterDone': 'onLeaveDone',
		            cb: cb
		        })
		    }
		})



	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(43)

		avalon.directive('expr', {
		    parse: function () {
		    },
		    diff: function (cur, pre, steps) {
		        cur.fixIESkip = !avalon.modern
		        var dom = cur.dom = pre.dom
		        if (cur.nodeValue !== pre.nodeValue) {
		            if (dom && avalon.contains(avalon.root,dom)) {
		                this.update(dom, cur)
		            } else {
		                update(cur, this.update, steps, 'expr' )
		            }
		        }
		        pre.dom = null
		    },
		    update: function (node, vnode, parent) {
		        if (node.nodeType !== 3) {
		            var textNode = document.createTextNode(vnode.nodeValue)
		            parent.replaceChild(textNode, node)
		        } else {
		           
		            node.nodeValue = vnode.nodeValue
		            textNode = node
		        }
		        vnode.dom = textNode
		    }
		})

	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		var rident = __webpack_require__(40).ident
		var update = __webpack_require__(43)

		avalon.directive('text', {
		    parse: function (binding, num, vnode) {
		        vnode.children = [{type: '#text', nodeType: 3, nodeValue: ''}]
		        var val = rident.test(binding.expr) ? binding.expr : avalon.parseExpr(binding)
		        return 'vnode' + num + '.props["ms-text"] =' + val + '\n'
		    },
		    diff: function (cur, pre, steps, name) {
		        var curValue = cur.props[name]
		        var preValue = pre.props[name]
		        cur.children = pre.children
		        cur.skipContent = true
		        var dom = cur.dom = pre.dom
		        if (curValue !== preValue) {
		            if (!cur.children[0]) cur.children[0] = {type:"#text",nodeType:3}
		            cur.children[0].nodeValue = curValue
		            if (dom) {
		                this.update(dom, cur)
		            } else {
		                update(cur, this.update, steps, 'text' )
		            }
		        }
		        pre.dom = null
		        return false
		    },
		    update: function (node, vnode) {
		        var nodeValue = vnode.props['ms-text']
		        if ('textContent' in node) {
		            node.textContent = nodeValue + ''
		        } else {
		            node.innerText = nodeValue + ''
		        }
		        vnode.dom = node
		    }
		})

	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(43)

		avalon.directive('html', {
		    parse: function (binding, num,el) {
		        var isVoidTag = !!el.isVoidTag
		        el.isVoidTag = false
		        var ret = ["var htmlId =  " + avalon.parseExpr(binding),
		            'vnode' + num + '.props["ms-html"]  = htmlId;',
		            'vnode' + num + '._isVoidTag  = '+isVoidTag,
		            'var obj  = avalon.htmlFactory(htmlId,' + num + ');',
		            'try{eval(" new function(){"+ obj.render +"}")}catch(e){};',
		            'vnode' + num + '.children = avalon.__html;']
		        return ret.join('\n')+'\n'
		    },
		    diff: function (cur, pre, steps, name) {
		        var curValue = cur.props[name]
		        var preValue = pre.props[name]
		        cur.isVoidTag = cur._isVoidTag
		        if (curValue !== preValue) {
		            update(cur, this.update, steps, 'html' )
		        }
		    },
		    update: function (node, vnode) {
		        if (node.nodeType !== 1) {
		            return
		        }
		        //添加节点
		        avalon.clearHTML(node)
		        var fragment = document.createDocumentFragment()
		        vnode.children.forEach(function (c) {
		            c && fragment.appendChild(avalon.vdomAdaptor(c, 'toDOM'))
		        })
		        node.appendChild(fragment)
		    }
		})


	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		//根据VM的属性值或表达式的值切换类名，ms-class='xxx yyy zzz:flag'
		//http://www.cnblogs.com/rubylouvre/archive/2012/12/17/2818540.html
		var markID = __webpack_require__(6).getLongID
		var update = __webpack_require__(43)

		var directives = avalon.directives
		avalon.directive('class', {
		    parse: function (binding, num) {
		        //必须是布尔对象或字符串数组
		        return 'vnode' + num + '.props["' + binding.name + '"] = ' + avalon.parseExpr(binding) + ';\n'
		    },
		    diff: function (cur, pre, steps, name) {
		        var type = name.slice(3)
		        var curValue = cur.props[name]
		        var preValue = pre.props[name]
		        if (!pre.classEvent) {
		            var classEvent = {}
		            if (type === 'hover') {//在移出移入时切换类名
		                classEvent.mouseenter = activateClass
		                classEvent.mouseleave = abandonClass
		            } else if (type === 'active') {//在获得焦点时切换类名
		                cur.props.tabindex = cur.props.tabindex || -1
		                classEvent.tabIndex = cur.props.tabindex
		                classEvent.mousedown = activateClass
		                classEvent.mouseup = abandonClass
		                classEvent.mouseleave = abandonClass
		            }
		            cur.classEvent = classEvent
		        } else {
		            cur.classEvent = pre.classEvent
		        }
		        pre.classEvent = null

		        var className = avalon.noop
		        if (Array.isArray(curValue)) {
		            //处理复杂的一维数组
		           className = curValue.map(function(el){
		                return el && typeof el === 'object' ? processBooleanObject(el) :
		                        el ? el : ''
		            }).join(' ')
		        } else if (avalon.isObject(curValue)) {
		            //处理布尔对象
		            className = processBooleanObject(curValue)
		        } else if (curValue) {
		            //处理其他真值，如字符串，数字
		            className = String(curValue)
		        }
		        if(className === avalon.noop){
		            return
		        }
		        className = cur.props[name] = className.trim().replace(/\s+/, ' ')
		        if (preValue !== className) {
		            cur['change-' + type] = className
		            update(cur, this.update, steps, type )
		        }
		    },
		    update: function (node, vnode) {
		   
		        if(!node || node.nodeType !==1)
		            return
		        var classEvent = vnode.classEvent
		        if (classEvent) {
		            for (var i in classEvent) {
		                if (i === 'tabIndex') {
		                    node[i] = classEvent[i]
		                } else {
		                    avalon.bind(node, i, classEvent[i])
		                }
		            }
		            vnode.classEvent = {}
		        }
		        var names = ['class', 'hover', 'active']
		        names.forEach(function (type) {
		            var name = 'change-' + type
		            var value = vnode[ name ]
		            if (value === void 0)
		                return
		            if (type === 'class') {
		                node && setClass(node, vnode)
		            } else {
		                var oldType = node.getAttribute('change-'+type)
		                if (oldType) {
		                    avalon(node).removeClass(oldType)
		                }
		                node.setAttribute(name, value)
		            }
		        })
		    }
		})

		directives.active = directives.hover = directives['class']

		function processBooleanObject(obj) {
		    return Object.keys(obj).filter(function (name) {
		        return obj[name]
		    }).join(' ')
		}

		var classMap = {
		    mouseenter: 'change-hover',
		    mouseleave: 'change-hover',
		    mousedown: 'change-active',
		    mouseup: 'change-active'
		}

		function activateClass(e) {
		    var elem = e.target
		    avalon(elem).addClass(elem.getAttribute(classMap[e.type]) || '')
		}

		function abandonClass(e) {
		    var elem = e.target
		    var name = classMap[e.type]
		    avalon(elem).removeClass(elem.getAttribute(name) || '')
		    if (name !== 'change-active') {
		        avalon(elem).removeClass(elem.getAttribute('change-active') || '')
		    }
		}

		function setClass(node, vnode) {
		    var old = node.getAttribute('old-change-class') || ''
		    var neo = vnode.props['ms-class']
		    avalon(node).removeClass(old).addClass(neo)
		    node.setAttribute('old-change-class', neo)
		}

		markID(activateClass)
		markID(abandonClass)




	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		var markID = __webpack_require__(6).getLongID
		var Cache = __webpack_require__(26)
		var eventCache = new Cache(128)
		var quote = avalon.quote
		var update = __webpack_require__(43)

		//Ref: http://developers.whatwg.org/webappapis.html#event-handler-idl-attributes
		// The assumption is that future DOM event attribute names will begin with
		// 'on' and be composed of only English letters.
		var revent = /^ms-on-([a-z]+)/ 
		var rfilters = /\|.+/g
		var rvar = /([@$]?\w+)/g
		var rstring = __webpack_require__(40).string
		//基于事件代理的高性能事件绑定
		avalon.directive('on', {
		    priority: 3000,
		    parse: function (binding, num) {
		        var vars = binding.expr.replace(rstring, ' ').replace(rfilters, '').match(rvar)
		        var canCache = vars.every(function (el) {
		            return el.charAt(0) === '@' || el.charAt(0) === '#' || el === '$event'
		        })
		        var vmDefine = 'vnode' + num + '.onVm = __vmodel__\n'
		        var pid = quote(binding.name)
		       
		        if (canCache) {
		            var key = binding.expr
		            var fn = eventCache.get(key)
		            if(!fn){
		                var fn = Function('return ' + avalon.parseExpr(binding, 'on'))()
		                var uuid = markID(fn)
		               eventCache.put(key, fn)
		            }
		            avalon.eventListeners[uuid] = fn
		            return vmDefine + 'vnode' + num + '.props[' + pid +
		                    '] = avalon.eventListeners.' + uuid + '\n'
		        } else {//如果闭包引用其他变量
		            return vmDefine + 'vnode' + num + '.props[' + pid +
		                    '] = ' + avalon.parseExpr(binding, 'on') + '\n'
		        }
		    },
		    diff: function (cur, pre, steps, name) {
		      
		        var fn0 = cur.props[name]
		        var fn1 = (pre.props || {})[name]
		        if ( fn0 +''!== fn1+''  ) {
		            var match = name.match(revent)
		            var type = match[1]
		            var search = type + ':' + markID(fn0)
		            cur.addEvents = cur.addEvents || {}
		            cur.addEvents[search] = fn0

		            if (typeof fn1 === 'function') {
		                cur.removeEvents = cur.removeEvents || {}
		                cur.removeEvents[type + ':' + fn1.uuid] = fn1
		            }
		            update(cur, this.update, steps, 'on' )
		            
		        }
		    },
		    update: function (node, vnode) {
		        if(!node || node.nodeType > 1) //在循环绑定中，这里为null
		          return
		        var key, type, listener
		        node._ms_context_ = vnode.onVm
		        delete vnode.onVm
		        for (key in vnode.removeEvents) {
		            type = key.split(':').shift()
		            listener = vnode.removeEvents[key]
		            avalon.unbind(node, type, listener)
		        }
		        delete vnode.removeEvents
		        for (key in vnode.addEvents) {
		            type = key.split(':').shift()
		            listener = vnode.addEvents[key]
		            avalon.bind(node, type, listener)
		        }
		        delete vnode.addEvents
		    }
		})






	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		
		var valueHijack = __webpack_require__(56)

		var newField = __webpack_require__(57)
		var initField = __webpack_require__(58)
		var updateField = __webpack_require__(60)
		var addField = __webpack_require__(61)
		var update = __webpack_require__(43)
		var evaluatorPool = __webpack_require__(39)
		avalon.directive('duplex', {
		    priority: 2000,
		    parse: function (binding, num, vnode) {
		        var id = binding.expr
		        newField(binding, vnode)
		        avalon.caches[id] = vnode.field
		        var ret = 'vnode' + num + '.duplexVm = __vmodel__;\n' +
		                'vnode' + num + '.props["ms-duplex"] = ' + avalon.quote(id) + ';\n' +
		                'vnode' + num + '.props["data-duplex-get"] = ' + evaluatorPool.get('duplex:' + id) +'\n'+
		                'vnode' + num + '.props["data-duplex-set"] = ' + evaluatorPool.get('duplex:set:' + id)+'\n'
		        var format = evaluatorPool.get('duplex:format:' + id)
		        if (format) {
		            ret += 'vnode' + num + '.props["data-duplex-format"] = ' + format
		        }
		        return ret
		    },
		    diff: function (cur, pre, steps) {
		        var duplexID = cur.props["ms-duplex"]
		        cur.field = pre.field || avalon.mix( {}, avalon.caches[duplexID])
		        var field = cur.field
		        if (!field.set) {
		            initField(cur)
		        }

		        cur.duplexVm = null
		        var value = cur.props.value = field.get(field.vmodel)

		        if (cur.type === 'select' && !cur.children.length) {
		            avalon.Array.merge(cur.children, avalon.lexer(cur.template, 0, 2))
		            fixVirtualOptionSelected(cur, value)
		        }

		        if (!field.element) {
		            var isEqual = false
		        } else {
		            var preValue = pre.props.value

		            if (Array.isArray(value)) {
		                isEqual = value + '' === preValue + ''
		            } else {
		                isEqual = value === preValue
		            }
		        }

		        if (!isEqual) {
		            field.modelValue = value
		            update(cur, this.update, steps, 'duplex', 'afterChange')
		  
		        }
		    },
		    update: function (node, vnode) {
		        var field = node._ms_field_ = vnode.field
		        if (!field.element) {//这是一次性绑定
		            field.element = node //方便进行垃圾回收
		            var events = field.events
		            for (var name in events) {
		                avalon.bind(node, name, events[name])
		                delete events[name]
		            }
		        }
		        addField(node, vnode)
		        if (!avalon.msie && valueHijack === false && !node.valueHijack) {
		            //chrome 42及以下版本需要这个hack
		            node.valueHijack = field.update
		            var intervalID = setInterval(function () {
		                if (!avalon.contains(avalon.root, node)) {
		                    clearInterval(intervalID)
		                } else {
		                    node.valueHijack()
		                }
		            }, 30)
		        }
		        var viewValue = field.format(field.modelValue)
		        if (field.viewValue !== viewValue) {
		            field.viewValue = viewValue
		            updateField[field.type].call(field)
		            if (node.caret) {
		                var pos = field.caretPos
		                pos && field.updateCaret(node, pos.start, pos.end)
		                field.caretPos = null
		            }
		        }
		    }
		})


		function fixVirtualOptionSelected(cur, curValue) {
		    var options = []
		    cur.children.forEach(function (a) {
		        if (a.type === 'option') {
		            options.push(a)
		        } else if (a.type === 'optgroup') {
		            a.children.forEach(function (c) {
		                if (c.type === 'option') {
		                    options.push(c)
		                }
		            })
		        }
		    })
		    var multi = cur.props.multiple
		    var map = {}
		    var one = multi === null || multi === void 0 || multi === false
		    if (Array.isArray(curValue)) {
		        curValue.forEach(function (a) {
		            map[a] = 1
		        })
		    } else {
		        map[curValue] = 1
		    }
		    for (var i = 0, option; option = options[i++]; ) {
		        var v = 'value' in option.props ? option.props.value :
		                (option.children[0] || {nodeValue: ''}).nodeValue.trim()
		        option.props.selected = !!map[v]
		        if (map[v] && one) {
		            break
		        }
		    }
		}


	/***/ },
	/* 56 */
	/***/ function(module, exports) {

		var valueHijack = false
		try { //#272 IE9-IE11, firefox
		    var setters = {}
		    var aproto = HTMLInputElement.prototype
		    var bproto = HTMLTextAreaElement.prototype
		    function newSetter(value) { // jshint ignore:line
		        setters[this.tagName].call(this, value)
		        if (!this.caret && this._ms_field_) {
		            this._ms_field_.update.call(this)
		        }
		    }
		    var inputProto = HTMLInputElement.prototype
		    Object.getOwnPropertyNames(inputProto) //故意引发IE6-8等浏览器报错
		    setters['INPUT'] = Object.getOwnPropertyDescriptor(aproto, 'value').set

		    Object.defineProperty(aproto, 'value', {
		        set: newSetter
		    })
		    setters['TEXTAREA'] = Object.getOwnPropertyDescriptor(bproto, 'value').set
		    Object.defineProperty(bproto, 'value', {
		        set: newSetter
		    })
		    valueHijack = true
		} catch (e) {
		    //在chrome 43中 ms-duplex终于不需要使用定时器实现双向绑定了
		    // http://updates.html5rocks.com/2015/04/DOM-attributes-now-on-the-prototype
		    // https://docs.google.com/document/d/1jwA8mtClwxI-QJuHT7872Z0pxpZz8PBkf2bGAbsUtqs/edit?pli=1
		}
		module.exports = valueHijack

	/***/ },
	/* 57 */
	/***/ function(module, exports) {

		var rchangeFilter = /\|\s*change\b/
		var rcheckedType = /^(?:checkbox|radio)$/
		var rdebounceFilter = /\|\s*debounce(?:\(([^)]+)\))?/
		var rnoduplexInput = /^(file|button|reset|submit|checkbox|radio|range)$/

		function newField(binding, vnode) {
		    var expr = binding.expr
		    var etype = vnode.props.type
		    //处理数据转换器
		    var ptype = binding.param
		    var isChecked = ptype === 'checked'

		    var field = vnode.field = {
		        parsers: [],
		        formatters: [],
		        modelValue: NaN,
		        viewValue: NaN,
		        validators: '',
		        parse: parse,
		        format: format
		    }
		    if (isChecked) {
		        if (rcheckedType.test(etype)) {
		            field.isChecked = true
		            field.type = 'radio'
		        } else {
		            ptype = null
		        }
		    }
		    var changed = vnode.props['data-duplex-changed']
		    if (changed) {
		        var cid = changed+':cb'
		        if(!avalon.caches[cid]){
		            var fn = Function('return '+ avalon.parseExpr(changed, 'on'))
		            avalon.caches[cid] = field.callback = fn()
		        }else{
		            field.callback = avalon.caches[cid]
		        }
		    }
		    var parser = avalon.parsers[ptype]
		    if (parser) {
		        field.parsers.push(parser)
		    }
		    if (rchangeFilter.test(expr)) {
		      //  expr = expr.replace(rchangeFilter, '')
		        if (rnoduplexInput.test(etype)) {
		            avalon.warn(etype + '不支持change过滤器')
		        } else {
		            field.isChanged = true
		        }
		    }

		    var match = expr.match(rdebounceFilter)
		    if (match) {
		       // expr = expr.replace(rdebounceFilter, '')
		        if (!field.isChanged) {
		            field.debounceTime = parseInt(match[1], 10) || 300
		        }
		    }
		    binding.expr = field.expr = expr.trim()
		    if (!/input|textarea|select/.test(vnode.type)) {
		        if ('contenteditable' in vnode.props) {
		            field.type = 'contenteditable'
		        }
		    } else if (!field.type) {
		        field.type = vnode.type === 'select' ? 'select' :
		                etype === 'checkbox' ? 'checkbox' :
		                etype === 'radio' ? 'radio' :
		                'input'
		    }
		    avalon.parseExpr(binding, 'duplex')
		}

		function parse(val) {
		    for (var i = 0, fn; fn = this.parsers[i++]; ) {
		        val = fn.call(this, val)
		    }
		    return val
		}

		function format(val) {
		    var formatters = this.formatters
		    var index = formatters.length
		    while (index--) {
		        val = formatters[index](val)
		    }
		    return val
		}

		module.exports = newField


	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		var msie = avalon.msie
		var window = avalon.window
		var document = avalon.document
		var refreshModel = __webpack_require__(59)
		var markID = __webpack_require__(6).getShortID


		function initControl(cur) {

		    var field = cur.field
		    field.update = updateModel
		    field.updateCaret = setCaret
		    field.get = cur.props['data-duplex-get']
		    field.set = cur.props['data-duplex-set']
		    var format = cur.props['data-duplex-format']
		    if (format) {
		        field.formatters.push(function (v) {
		            return format(field.vmodel, v)
		        })
		    }
		    field.vmodel = cur.duplexVm

		    var events = field.events = {}
		    //添加需要监听的事件
		    switch (field.type) {
		        case 'radio':
		            if (cur.props.type === 'radio') {
		                events.click = updateModel
		            } else {
		                events[msie < 9 ? 'click' : 'change'] = updateModel
		            }
		            break
		        case 'checkbox':
		        case 'select':
		            events.change = updateModel
		            break
		        case 'contenteditable':
		            if (field.isChanged) {
		                events.blur = updateModel
		            } else {
		                if (avalon.modern) {
		                    if (window.webkitURL) {
		                        // http://code.metager.de/source/xref/WebKit/LayoutTests/fast/events/
		                        // https://bugs.webkit.org/show_bug.cgi?id=110742
		                        events.webkitEditableContentChanged = updateModel
		                    } else if (window.MutationEvent) {
		                        events.DOMCharacterDataModified = updateModel
		                    }
		                    events.input = updateModel
		                } else {

		                    events.keydown = updateModelKeyDown
		                    events.paste = updateModelDelay
		                    events.cut = updateModelDelay
		                    events.focus = closeComposition
		                    events.blur = openComposition

		                }

		            }
		            break
		        case 'input':
		            if (field.isChanged) {
		                events.change = updateModel
		            } else {

		                //http://www.cnblogs.com/rubylouvre/archive/2013/02/17/2914604.html
		                //http://www.matts411.com/post/internet-explorer-9-oninput/
		                if (avalon.msie < 10) {
		                    // Internet Explorer <= 8 doesn't support the 'input' event, but does include 'propertychange' that fires whenever
		                    // any property of an element changes. Unlike 'input', it also fires if a property is changed from JavaScript code,
		                    // but that's an acceptable compromise for this binding. IE 9 does support 'input', but since it doesn't fire it
		                    // when using autocomplete, we'll use 'propertychange' for it also.
		                    events.propertychange = updateModelHack
		                    if (msie > 7 ) {
		                        // IE 8 has a bug where it fails to fire 'propertychange' on the first update following a value change from
		                        // JavaScript code. It also doesn't fire if you clear the entire value. To fix this, we bind to the following
		                        // events too.
		                        events.keyup = updateModel      // A single keystoke
		                        events.keydown = updateModel    // The first character when a key is held down
		                    }
		                    if (msie > 8) {
		                        // Internet Explorer 9 doesn't fire the 'input' event when deleting text, including using
		                        // the backspace, delete, or field-x keys, clicking the 'x' to clear the input, dragging text
		                        // out of the field, and cutting or deleting text using the context menu. 'selectionchange'
		                        // can detect all of those except dragging text out of the field, for which we use 'dragend'.
		                        // These are also needed in IE8 because of the bug described above.
		                        cur.valueHijack = updateModel  // 'selectionchange' covers cut, paste, drop, delete, etc.
		                        events.dragend = updateModelDelay
		                    }
		                } else {
		                    events.input = updateModel
		                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
		                    //如果当前浏览器支持Int8Array,那么我们就不需要以下这些事件来打补丁了
		                    if (!/\[native code\]/.test(window.Int8Array)) {
		                        events.keydown = updateModelKeyDown //safari < 5 opera < 11
		                        events.paste = updateModelDelay//safari < 5
		                        events.cut = updateModelDelay//safari < 5 
		                        if (window.netscape) {
		                            // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
		                            events.DOMAutoComplete = updateModel
		                        }
		                    }
		                    if(!avalon.msie){
		                    //https://github.com/RubyLouvre/avalon/issues/1368#issuecomment-220503284
		                        events.compositionstart = openComposition
		                        events.compositionend = closeComposition
		                    }

		                }
		            }
		            break
		    }

		    if (/password|text/.test(cur.props.type)) {
		        events.focus = openCaret
		        events.blur = closeCaret
		    }
		}


		function updateModel() {
		    var elem = this

		    var field = this._ms_field_
		    if (elem.composing)
		        return
		    if (elem.caret) {
		        try {
		            var pos = getCaret(elem)
		            if (pos.start === pos.end || pos.start + 1 === pos.end) {
		                field.caretPos = pos
		            }
		        } catch (e) {
		            avalon.warn('fixCaret error', e)
		        }
		    }
		    if (field.debounceTime > 4) {
		        var timestamp = new Date()
		        var left = timestamp - field.time || 0
		        field.time = timestamp
		        if (left >= field.debounceTime) {
		            refreshModel[field.type].call(field)
		        } else {
		            clearTimeout(field.debounceID)
		            field.debounceID = setTimeout(function () {
		                refreshModel[field.type].call(field)
		            }, left)
		        }
		    } else {
		        refreshModel[field.type].call(field)
		    }
		}


		function updateModelHack(e) {
		    if (e.propertyName === 'value') {
		        updateModel.call(this, e)
		    }
		}

		function updateModelDelay(e) {
		    var elem = this
		    setTimeout(function () {
		        updateModel.call(elem, e)
		    }, 17)
		}


		function openCaret() {
		    this.caret = true
		}

		function closeCaret() {
		    this.caret = false
		}
		function openComposition() {
		    this.composing = true
		}

		function closeComposition(e) {
		    this.composing = false
		}
		function updateModelKeyDown(e) {
		    var key = e.keyCode;
		    // ignore
		    //    command            modifiers                   arrows
		    if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
		        return
		    updateModelDelay.call(this, e)
		}

		markID(openCaret)
		markID(closeCaret)
		markID(openComposition)
		markID(closeComposition)
		markID(updateModel)
		markID(updateModelHack)
		markID(updateModelDelay)
		markID(updateModelKeyDown)

		if (msie >= 8 && msie < 10) {
		    avalon.bind(document, 'selectionchange', function (e) {
		        var el = document.activeElement || {}
		        if (!el.caret && el.valueHijack) {
		            el.valueHijack()
		        }
		    })
		}

		function getCaret(field) {
		    var start = NaN, end = NaN
		    if (field.setSelectionRange) {
		        start = field.selectionStart
		        end = field.selectionEnd
		    } else if (document.selection && document.selection.createRange) {
		        var range = document.selection.createRange()
		        start = 0 - range.duplicate().moveStart('character', -100000)
		        end = start + range.text.length
		    }
		    return {
		        start: start,
		        end: end
		    }
		}

		function setCaret(field, begin, end) {
		    if (!field.value || field.readOnly)
		        return
		    if (field.createTextRange) {//IE6-8
		        var range = field.createTextRange()
		        range.collapse(true)
		        range.moveStart('character', begin)
		        range.select()
		    } else {
		        field.selectionStart = begin
		        field.selectionEnd = end
		    }
		}

		module.exports = initControl

	/***/ },
	/* 59 */
	/***/ function(module, exports) {

		
		/**
		 * ------------------------------------------------------------
		 * refreshModel
		 * 在事件回调与value的setter中调用这些方法,来同步vm
		 * ------------------------------------------------------------
		 */
		var refreshModel = {
		    input: function (prop) {//处理单个value值处理
		        var field = this
		        prop = prop || 'value'
		        var viewValue = field.element[prop]
		        var rawValue = viewValue

		        viewValue = field.format(viewValue)
		        //vm.aaa = '1234567890'
		        //处理 <input ms-duplex='@aaa|limitBy(8)'/>{{@aaa}} 这种格式化同步不一致的情况 
		        var val = field.parse(viewValue)
		        viewValue = val + ''

		        if (val !== field.modelValue) {
		            field.set(field.vmodel, val)
		            callback(field)
		        }

		        if (rawValue !== viewValue) {
		            field.viewValue = viewValue
		            field.element[prop] = viewValue
		        }

		    },
		    radio: function () {
		        var field = this
		        if (field.isChecked) {
		            var val = field.modelValue = !field.modelValue
		            field.set(field.vmodel, val)
		            callback(field)
		        } else {
		            refreshModel.input.call(field)
		        }
		    },
		    checkbox: function () {
		        var field = this
		        var array = field.modelValue
		        if (!Array.isArray(array)) {
		            avalon.warn('ms-duplex应用于checkbox上要对应一个数组')
		            array = [array]
		        }
		        var method = field.element.checked ? 'ensure' : 'remove'
		        if (array[method]) {
		            var val = field.parse(field.element.value)
		            array[method](val)
		            callback(field)
		        }

		    },
		    select: function () {
		        var field = this
		        var val = avalon(field.element).val() //字符串或字符串数组
		        if (val + '' !== this.modelValue + '') {
		            if (Array.isArray(val)) { //转换布尔数组或其他
		                val = val.map(function (v) {
		                    return field.parse(v)
		                })
		            } else {
		                val = field.parse(val)
		            }
		            field.modelValue = val
		            field.set(field.vmodel, val)
		            callback(field)
		        }
		    },
		    contenteditable: function () {
		        refreshModel.input.call(this, 'innerHTML')
		    }
		}

		function callback(field) {
		    if (field.validator) {
		        avalon.directives.validate.validate(field, false)
		    }
		    if (field.callback) {
		        field.callback.call(field.vmodel, {
		            type: 'changed',
		            target: field.element
		        })
		    }
		}
		module.exports = refreshModel

	/***/ },
	/* 60 */
	/***/ function(module, exports) {

		
		var updateField = {
		    input: function () {//处理单个value值处理
		        this.element.value = this.viewValue
		    },
		    radio: function () {//处理单个checked属性
		        var checked
		        if (this.isChecked) {
		            checked = !!this.viewValue
		        } else {
		            checked = this.viewValue + '' === this.element.value
		        }
		        var element = this.element
		        if (avalon.msie === 6) {
		            setTimeout(function () {
		                //IE8 checkbox, radio是使用defaultChecked控制选中状态，
		                //并且要先设置defaultChecked后设置checked
		                //并且必须设置延迟
		                element.defaultChecked = checked
		                element.checked = checked
		            }, 31)
		        } else {
		            element.checked = checked
		        }
		    },
		    checkbox: function () {//处理多个checked属性
		        var checked = false
		        var element = this.element
		        var value = element.value
		        for (var i = 0; i < this.modelValue.length; i++) {
		            var el = this.modelValue[i]
		            if (el + '' === value) {
		                checked = true
		            }
		        }
		        element.checked = checked
		    },
		    select: function () {//处理子级的selected属性
		        var a = Array.isArray(this.viewValue) ? this.viewValue.map(String): this.viewValue+''
		        avalon(this.element).val(a)
		    },
		    contenteditable: function () {//处理单个innerHTML
		        this.element.innerHTML = this.viewValue
		        this.update.call(this.element)
		    }
		}

		module.exports = updateField

	/***/ },
	/* 61 */
	/***/ function(module, exports) {

		
		module.exports = function addField(node, vnode) {
		    var field = vnode.field
		    var rules = vnode.props['ms-rules']
		    if (rules && !field.validator) {
		        while (node && node.nodeType === 1) {
		            var validator = node._ms_validator_
		            if (validator) {
		                field.rules = rules
		                field.validator = validator
		                if(avalon.Array.ensure(validator.fields, field)){
		                    validator.addField(field)
		                }
		                break
		            }
		            node = node.parentNode
		        }
		    }
		}


	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(43)

		var dir = avalon.directive('validate', {
		//验证单个表单元素
		    parse: function (binding, num) {
		        return 'vnode' + num + '.props["ms-validate"] = ' + avalon.parseExpr(binding) + ';\n'
		    },
		    diff: function (cur, pre, steps, name) {
		        var validator = cur.props[name]
		        var p = pre.props[name]
		        if (p && p.onError && p.addField) {
		            cur.props[name] = p
		        } else if (Object(validator) === validator) {
		            if(validator.$id){//转换为普通对象
		                validator = validator.$model
		            }
		            cur.props[name] = validator
		            for(var name in dir.defaults){
		                if(!validator[name]){
		                    validator[name] = dir.defaults[name]
		                }
		            }
		            validator.fields = validator.fields || []
		            update(cur, this.update, steps, 'validate' )

		        }
		    },
		    update: function (node, vnode) {
		        var validator = vnode.props['ms-validate']
		        node._ms_validator_ = validator
		        validator.element = node
		        node.setAttribute("novalidate", "novalidate");
		        if (validator.validateAllInSubmit) {
		            avalon.bind(node, "submit", function (e) {
		                e.preventDefault()
		                dir.validateAll.call(validator, validator.onValidateAll)
		            })
		        }
		        if (typeof validator.onInit === "function") { //vmodels是不包括vmodel的
		            validator.onInit.call(node)
		        }
		    },
		    validateAll: function (callback) {
		        var validator = this
		        var fn = typeof callback === "function" ? callback : validator.onValidateAll
		        var promise = validator.fields.filter(function (field) {
		            var el = field.element
		            return el && !el.disabled && validator.element.contains(el)
		        }).map(function (field) {
		            return dir.validate(field, true)
		        })
		        var reasons = []
		        Promise.all(promise).then(function (array) {
		            for (var i = 0, el; el = array[i++]; ) {
		                reasons = reasons.concat(el)
		            }
		            if (validator.deduplicateInValidateAll) {
		                var uniq = {}
		                reasons = reasons.filter(function (field) {
		                    var el = field.element
		                    var uuid = el.uniqueID || (el.uniqueID = setTimeout("1"))
		                    if (uniq[uuid]) {
		                        return false
		                    } else {
		                        uniq[uuid] = true
		                        return true
		                    }
		                })
		            }
		            fn.call(validator.element, reasons) //这里只放置未通过验证的组件
		        })
		    },
		    addField: function (field) {
		        var validator = this
		        var node = field.element
		        if (validator.validateInKeyup && (!field.isChanged &&!field.debounceTime)) {
		            avalon.bind(node, 'keyup', function (e) {
		                 dir.validate(field, 0, e)
		            })
		        }
		        if (validator.validateInBlur) {
		            avalon.bind(node, 'blur', function (e) {
		                dir.validate(field, 0, e)
		            })
		        }
		        if (validator.resetInFocus) {
		            avalon.bind(node, 'focus', function (e) {
		                validator.onReset.call(node, e, field)
		            })
		        }
		    },
		    validate: function (field, isValidateAll, event) {
		        var promises = []
		        var value = field.get(field.vmodel)
		        var elem = field.element
		        var validator = field.validator
		        if (elem.disabled)
		            return
		        for (var ruleName in field.rules) {
		            var ruleValue = field.rules[ruleName]
		            if (ruleValue === false)
		                continue
		            var hook = avalon.validators[ruleName]
		            var resolve, reject
		            promises.push(new Promise(function (a, b) {
		                resolve = a
		                reject = b
		            }))
		            var next = function (a) {
		                if (field.norequired && value === "") {
		                    a = true
		                }
		                if (a) {
		                    resolve(true)
		                } else {
		                    var reason = {
		                        element: elem,
		                        data: field.data,
		                        message: elem.getAttribute("data-" + ruleName + "-message") || elem.getAttribute("data-message") || hook.message,
		                        validateRule: ruleName,
		                        getMessage: getMessage
		                    }
		                    resolve(reason)
		                }
		            }
		            field.data = {}
		            field.data[ruleName] = ruleValue
		            hook.get(value, field, next)
		        }
		        var reasons = []
		        //如果promises不为空，说明经过验证拦截器
		        var lastPromise = Promise.all(promises).then(function (array) {
		            for (var i = 0, el; el = array[i++]; ) {
		                if (typeof el === "object") {
		                    reasons.push(el)
		                }
		            }
		            if (!isValidateAll) {
		                if (reasons.length) {
		                    validator.onError.call(elem, reasons, event)
		                } else {
		                    validator.onSuccess.call(elem, reasons, event)
		                }
		                validator.onComplete.call(elem, reasons, event)
		            }
		            return reasons
		        })
		        return lastPromise
		    }
		})

		var rformat = /\\?{{([^{}]+)\}}/gm

		function getMessage() {
		    var data = this.data || {}
		    return this.message.replace(rformat, function (_, name) {
		        return data[name] == null ? "" : data[name]
		    })
		}
		dir.defaults = {
		    addField: dir.addField,
		    onError: avalon.noop,
		    onSuccess: avalon.noop,
		    onComplete: avalon.noop,
		    onReset: avalon.noop,
		    validateInBlur: true, //@config {Boolean} true，在blur事件中进行验证,触发onSuccess, onError, onComplete回调
		    validateInKeyup: true, //@config {Boolean} true，在keyup事件中进行验证,触发onSuccess, onError, onComplete回调
		    validateAllInSubmit: true, //@config {Boolean} true，在submit事件中执行onValidateAll回调
		    resetInFocus: true, //@config {Boolean} true，在focus事件中执行onReset回调,
		    deduplicateInValidateAll: false //@config {Boolean} false，在validateAll回调中对reason数组根据元素节点进行去重
		}

	/***/ },
	/* 63 */
	/***/ function(module, exports) {

		avalon.directive('rules', {
		    parse: function (binding, num) {
		        var rules = binding.expr
		        if (/{.+}/.test(rules)) {
		            return 'vnode' + num + '.props["ms-rules"] = ' + avalon.parseExpr(binding) + ';\n'
		        }
		    },
		    diff: avalon.noop
		})
		function isRegExp(value) {
		    return avalon.type(value) === 'regexp'
		}
		var rmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i
		var rurl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
		function isCorrectDate(value) {
		    if (typeof value === "string" && value) { //是字符串但不能是空字符
		        var arr = value.split("-") //可以被-切成3份，并且第1个是4个字符
		        if (arr.length === 3 && arr[0].length === 4) {
		            var year = ~~arr[0] //全部转换为非负整数
		            var month = ~~arr[1] - 1
		            var date = ~~arr[2]
		            var d = new Date(year, month, date)
		            return d.getFullYear() === year && d.getMonth() === month && d.getDate() === date
		        }
		    }
		    return false
		}
		avalon.shadowCopy(avalon.validators, {
		    pattern: {
		        message: '必须匹配{{pattern}}这样的格式',
		        get: function (value, field, next) {
		            var elem = field.element
		            var data = field.data
		            if (!isRegExp(data.pattern)) {
		                var h5pattern = elem.getAttribute("pattern")
		                data.pattern = new RegExp('^(?:' + h5pattern + ')$')
		            }
		            next(data.pattern.test(value))
		            return value
		        }
		    },
		    digits: {
		        message: '必须整数',
		        get: function (value, field, next) {//整数
		            next(/^\-?\d+$/.test(value))
		            return value
		        }
		    },
		    number: {
		        message: '必须数字',
		        get: function (value, field, next) {//数值
		            next(isFinite(value))
		            return value
		        }
		    },
		    required: {
		        message: '必须填写',
		        get: function (value, field, next) {
		            next(value !== "")
		            return value
		        }
		    },
		    equalto: {
		        message: '密码输入不一致',
		        get: function (value, field, next) {
		            var id = String(field.data.equalto)
		            var other = avalon(document.getElementById(id)).val() || ""
		            next(value === other)
		            return value
		        }
		    },
		    date: {
		        message: '日期格式不正确',
		        get: function (value, field, next) {
		            var data = field.data
		            if (avalon.type(data.date) === 'regexp') {
		                next(data.date.test(value))
		            } else {
		                next(isCorrectDate(value))
		            }
		            return value
		        }
		    },
		    url: {
		        message: 'URL格式不正确',
		        get: function (value, field, next) {
		            next(rurl.test(value))
		            return value
		        }
		    },
		    email: {
		        message: 'email格式不正确',
		        get: function (value, field, next) {
		            next(rmail.test(value))
		            return value
		        }
		    },
		    minlength: {
		        message: '最少输入{{minlength}}个字',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.minlength, 10)
		            next(value.length >= num)
		            return value
		        }
		    },
		    maxlength: {
		        message: '最多输入{{maxlength}}个字',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.maxlength, 10)
		            next(value.length <= num)
		            return value
		        }
		    },
		    min: {
		        message: '输入值不能小于{{min}}',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.min, 10)
		            next(parseFloat(value) >= num)
		            return value
		        }
		    },
		    max: {
		        message: '输入值不能大于{{max}}',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.max, 10)
		            next(parseFloat(value) <= num)
		            return value
		        }
		    },
		    chs: {
		        message: '必须是中文字符',
		        get: function (value, field, next) {
		            next(/^[\u4e00-\u9fa5]+$/.test(value))
		            return value
		        }
		    }
		})

	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		var patch = __webpack_require__(65)
		var update = __webpack_require__(43)

		//ms-imporant ms-controller ms-for ms-widget ms-effect ms-if   ...
		avalon.directive('if', {
		    priority: 6,
		    parse: function (binding, num) {
		        var vnode = 'vnode' + num
		        var ret = [
		            'var ifVar = ' + avalon.parseExpr(binding, 'if'),
		            vnode + '.props["ms-if"] = ifVar;',
		            'if(!ifVar){',
		            vnode + '.nodeType = 8;',
		            vnode + '.directive="if";',
		            vnode + '.nodeValue="ms-if"', '}'
		        ]
		        return ret.join('\n') + '\n'
		    },
		    diff: function (cur, pre, steps) {
		        cur.dom = pre.dom
		        if (cur.nodeType !== pre.nodeType) {
		            cur.steps = steps
		            update(cur, this.update, steps, 'if' )
		        }
		    },
		    update: function (node, vnode, parent) {
		        var dtype = node.nodeType
		        var vtype = vnode.nodeType
		        if (dtype !== vtype) {
		            if (vtype === 1) {
		                //要插入元素节点,将原位置上的注释节点移除并cache
		                var element = vnode.dom
		                if (!element) {
		                    element = avalon.vdomAdaptor(vnode, 'toDOM')
		                    vnode.dom = element
		                    var props = vnode.props
		                    for (var prop in props) {//如果一开始是隐藏,那么事件会没有绑上
		                        if (prop.match(/ms\-on/g)) {
		                            var fun = props[prop]
		                            if (typeof fun === 'function') {
		                                element._ms_context_ = vnode.onVm
		                                avalon.bind(element, prop.split('-')[2], fun)
		                            }
		                        }
		                    }
		                    if (vnode.onVm) delete vnode.onVm
		                }
		                parent.replaceChild(element, node)
		                if (vnode.steps.count) {
		                    patch([element], [vnode], parent, vnode.steps)
		                }
		                avalon.applyEffect(node, vnode, {
		                    hook: 'onEnterDone'
		                })
		                return (vnode.steps = false)
		            } else if (vtype === 8) {
		                //要移除元素节点,在对应位置上插入注释节点
		                avalon.applyEffect(node, vnode, {
		                    hook: 'onLeaveDone',
		                    cb: function () {
		                        var comment = node._ms_if_ ||
		                                (node._ms_if_ = document.createComment(vnode.nodeValue))

		                        parent.replaceChild(comment, node)
		                    }
		                })
		            }
		        }
		    }
		})



	/***/ },
	/* 65 */
	/***/ function(module, exports) {

		/**
		 * ------------------------------------------------------------
		 * patch 对某一个视图根据对应的虚拟DOM树进行全量更新
		 * ------------------------------------------------------------
		 */
		var sp = /^\s*$/
		function patch(nodes, vnodes, parent, steps) {
		    var next = nodes[0]
		    if ((!next && !parent) || !steps.count) {
		        return
		    }
		    parent = parent || next.parentNode
		    for (var i = 0, vn = vnodes.length; i < vn; i++) {
		        var vnode = vnodes[i]
		        var node = next
		        //IE6-8不会生成空白的文本节点，造成虚拟DOM与真实DOM的个数不一致，需要跳过,#1333
		        if (avalon.msie < 9 && !vnode.fixIESkip && vnode.nodeType === 3 && sp.test(vnode.nodeValue) ) {
		            continue
		        }

		        if (node) {
		            next = node.nextSibling
		        }
		        if (vnode.directive === 'for') {
		            if (vnode.hasChange) {
		                if (!node) {
		                    return
		                }
		                if (node.nodeType === 1) {
		                    var startRepeat = document.createComment(vnode.nodeValue)
		                    parent.insertBefore(startRepeat, node)
		                    vnode.endRepeat = document.createComment('ms-for-end:')
		                    parent.insertBefore(vnode.endRepeat, node.nextSibling)
		                    node = startRepeat
		                } else {//如果是注释节点
		                    if (!vnode.endRepeat) {
		                        vnode.endRepeat = getEndRepeat(node)
		                    }
		                }
		                if(node.nodeType !== 8){//fix IE6-8
		                    node = node.nextSibling
		                }
		                next = vnode.endRepeat.nextSibling
		            }
		        }
		        //ms-for, ms-if, ms-widget会返回false
		        if (false === execHooks(node, vnode, parent, steps, 'change')) {
		            if (vnode.repeatCount) {
		                i += vnode.repeatCount + 1 //修正索引值
		            }
		            execHooks(node, vnode, parent, steps, 'afterChange')
		            continue
		        }
		        if (!vnode.skipContent && vnode.children && node && node.nodeType === 1) {
		            //处理子节点
		            patch(avalon.slice(node.childNodes), vnode.children, node, steps)
		        }
		        // ms-if=false内的ms-controller无法正确的关联dom
		        var vmID = vnode.props && vnode.props['ms-controller']
		        if (vmID && node) {
		            var vm = avalon.vmodels[vmID]
		            if (vm.$render) vm.$render.dom = node
		        }
		        //ms-duplex
		        execHooks(node, vnode, parent, steps, 'afterChange')
		        if (!steps.count)
		            break
		    }
		}

		function getEndRepeat(node) {
		    var isBreak = 0, ret = [], node
		    while (node) {
		        if (node.nodeType === 8) {
		            if (node.nodeValue.indexOf('ms-for:') === 0) {
		                ++isBreak
		            } else if (node.nodeValue.indexOf('ms-for-end:') === 0) {
		                --isBreak
		            }
		        }
		        ret.push(node)
		        node = node.nextSibling
		        if (isBreak === 0) {
		            break
		        }
		    }
		    return ret.pop()
		}

		function execHooks(node, vnode, parent, steps, hookName) {
		    var hooks = vnode[hookName]
		    if (hooks) {
		        for (var hook; hook = hooks.shift(); ) {
		            steps.count -= 1
		            if (false === hook(node, vnode, parent)) {
		                return false
		            }
		        }
		        delete vnode[hookName]
		    }
		}

		module.exports = patch

	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		var patch = __webpack_require__(65)
		var rforPrefix = /ms-for\:\s*/
		var rforLeft = /^\s*\(\s*/
		var rforRight = /\s*\)\s*$/
		var rforSplit = /\s*,\s*/
		var rforAs = /\s+as\s+([$\w]+)/
		var rident = __webpack_require__(40).ident
		var update = __webpack_require__(43)
		var Cache = __webpack_require__(26)
		var loopCache = new Cache(600)
		var rinvalid = /^(null|undefined|NaN|window|this|\$index|\$id)$/
		function getTrackKey(item) {
		    var type = typeof item
		    return item && type === 'object' ? item.$hashcode : type + item
		}

		avalon._each = function (obj, fn) {
		    if (Array.isArray(obj)) {
		        for (var i = 0; i < obj.length; i++) {
		            var item = obj[i]
		            var key = getTrackKey(item)
		            fn(i, item, key)
		        }
		    } else {
		        for (var i in obj) {
		            if (obj.hasOwnProperty(i)) {
		                fn(i, obj[i], i)
		            }
		        }
		    }
		}

		function getLoopValue(object) {
		    if (Array.isArray(object)) {
		        return object.length + "|" + object.map(getTrackKey).join(';;')
		    } else {
		        var size = 0
		        var arr = []
		        for (var i in object) {
		            if (object.hasOwnProperty(i)) {
		                size++
		                arr.push(i)
		            }
		        }
		        return size + "|" + arr.join(';;')
		    }
		}

		avalon._checkLoopChange = function (key, obj) {
		    var cur = getLoopValue(obj)
		    var old = loopCache.get(key)
		    if (typeof old !== 'string' || cur !== old) {
		        loopCache.put(key, cur)
		        return true
		    }
		    return false
		}

		avalon.directive('for', {
		    priority: 3,
		    parse: function (el, num) {
		        var str = el.nodeValue, aliasAs
		        str = str.replace(rforAs, function (a, b) {
		            if (!rident.test(b) || rinvalid.test(b)) {
		                avalon.error('alias ' + b + ' is invalid --- must be a valid JS identifier which is not a reserved name.')
		            } else {
		                aliasAs = b
		            }
		            return ''
		        })

		        var arr = str.replace(rforPrefix, '').split(' in ')
		        var assign = 'var loop' + num + ' = ' + avalon.parseExpr(arr[1]) + '\n'
		        var isChange = el.signature + '.hasChange = avalon._checkLoopChange("' + el.signature + '", loop' + num + ')\n'

		        var alias = aliasAs ? 'var ' + aliasAs + ' = loop' + num + '\n' : ''
		        var kv = arr[0].replace(rforLeft, '').replace(rforRight, '').split(rforSplit)
		        if (kv.length === 1) {//确保avalon._each的回调有三个参数
		            kv.unshift('$key')
		        }
		        //分别创建isArray, ____n, ___i, ___v, ___trackKey变量
		        return assign + isChange + alias + 'avalon._each(loop' + num + ', function(' + kv + ', traceKey){\n'

		    },
		    diff: function (current, previous, steps, __index__) {
		        var cur = current[__index__]
		        var pre = previous[__index__] || {}

		        var isInit = !('directive' in pre)
		        var isChange = false, i, c, p
		        if (isInit) {
		            pre.components = []
		            pre.repeatCount = 0
		        }

		        var quota = pre.components.length
		        var nodes = current.slice(cur.start, cur.end)
		        cur.endRepeat = pre.endRepeat
		        cur.components = getComponents(nodes.slice(1, -1), cur.signature)
		        var n = Math.max(nodes.length - 2, 0) - pre.repeatCount
		        if (n > 0) {
		            var spliceArgs = [__index__ + 1, 0]
		            for (var i = 0, n = n - 1; i < n; i++) {
		                spliceArgs.push(null)
		            }
		            previous.splice.apply(previous, spliceArgs)
		        } else if (n < 0) {
		            previous.splice.apply(previous, [__index__, Math.abs(n)])
		        }
		        cur.action = isInit ? 'init' : 'update'
		        if (isInit) {
		            /* eslint-disable no-cond-assign */
		            var oldCount = steps.count
		            var cache = cur.cache = {}
		            for (i = 0; c = cur.components[i++]; ) {
		                /* eslint-enable no-cond-assign */
		                avalon.diff(c.children, [], steps)
		                saveInCache(cache, c)
		            }
		            cur.removedComponents = {}
		            //如果没有孩子也要处理一下
		            isChange = cur.components.length === 0 ||
		                    steps.count !== oldCount

		        } else {
		            var cache = pre.cache
		            var newCache = cur.cache = {}
		            /* eslint-disable no-cond-assign */
		            for (i = 0; c = cur.components[i++]; ) {
		                /* eslint-enable no-cond-assign */
		                var p = isInCache(cache, c.key)
		                if (p) {
		                    if (!isChange) {//如果位置发生了变化
		                        isChange = c.index !== p.index
		                    }
		                    quota--
		                    c.nodes = p.nodes
		                    avalon.diff(c.children, p.children, steps)
		                } else if (quota) {
		                    p = fuzzyMatchCache(cache, c.key)
		                    if (p) {
		                        quota--
		                        isChange = true //内容发生变化
		                        c.nodes = p.nodes
		                        avalon.diff(c.children, p.children, steps)
		                    }
		                }
		                if (!c.nodes) {//这是新添加的元素
		                    isChange = true
		                    avalon.diff(c.children, [], steps)
		                }

		                saveInCache(newCache, c)
		            }

		            for (i in cache) {
		                cur.removedComponents = cache
		                isChange = true
		                break
		            }

		        }
		        pre.components.length = 0 //release memory
		        delete pre.cache
		        if (isChange) {
		            cur.steps = steps
		            update(cur, this.update, steps, 'for')
		        }

		        return __index__ + nodes.length - 1

		    },
		    update: function (startRepeat, vnode, parent) {
		        var action = vnode.action
		        var endRepeat = vnode.endRepeat
		        var fragment = document.createDocumentFragment()
		        if (action === 'init') {
		            //在ms-widget中,这部分内容会先行被渲染出来
		            var hasRender = false
		            var node = startRepeat.nextSibling
		            while (node && node !== endRepeat) {
		                if (node.nodeType === 8) {
		                    hasRender = node.nodeValue === vnode.signature
		                    if (hasRender) {
		                        vnode.hasRender = true
		                        break
		                    }
		                }
		                node = node.nextSibling

		            }
		            if (!hasRender) {
		                node = startRepeat.nextSibling
		                while (node && node !== endRepeat) {
		                    parent.removeChild(node)
		                    node = startRepeat.nextSibling
		                }
		            }
		        }

		        var domTemplate = avalon.parseHTML(vnode.template)

		        var key = vnode.signature
		        for (var i in vnode.removedComponents) {
		            var el = vnode.removedComponents[i]
		            if (el.nodes) {
		                el.nodes.forEach(function (n, k) {
		                    if (n.parentNode) {
		                        avalon.applyEffect(n, el.children[k], {
		                            hook: 'onLeaveDone',
		                            cb: function () {
		                                n.parentNode.removeChild(n)
		                            },
		                            staggerKey: key + 'leave'
		                        })
		                    }
		                })
		                el.nodes.length = el.children.length = 0
		            }
		        }

		        delete vnode.removedComponents

		        var insertPoint = startRepeat

		        for (var i = 0; i < vnode.components.length; i++) {
		            var com = vnode.components[i]
		            var cnodes = com.nodes
		            if (cnodes) {
		                if (insertPoint.nextSibling !== cnodes[0]) {
		                    var moveFragment = fragment.cloneNode(false)
		                    for (var k = 0, cc; cc = cnodes[k++]; ) {
		                        moveFragment.appendChild(cc)
		                    }
		                    parent.insertBefore(moveFragment, insertPoint.nextSibling)
		                    applyEffects(com.nodes, com.children, {
		                        hook: 'onMoveDone',
		                        staggerKey: key + 'move'
		                    })
		                }
		            } else if (vnode.hasRender) {
		                //添加nodes属性但不用插入节点
		                var cnodes = com.nodes = []
		                insertPoint = insertPoint.nextSibling
		                while (insertPoint && insertPoint !== vnode.endRepeat) {
		                    cnodes.push(insertPoint)
		                    if (insertPoint.nodeValue === vnode.signature) {
		                        break
		                    }
		                    insertPoint = insertPoint.nextSibling
		                }
		            } else {
		                //添加nodes属性并插入节点
		                var newFragment = domTemplate.cloneNode(true)
		                newFragment.appendChild(document.createComment(vnode.signature))
		                cnodes = com.nodes = avalon.slice(newFragment.childNodes)
		                parent.insertBefore(newFragment, insertPoint.nextSibling)
		                applyEffects(com.nodes, com.children, {
		                    hook: 'onEnterDone',
		                    staggerKey: key + 'enter'
		                })
		            }
		            insertPoint = cnodes[cnodes.length - 1]
		            if (!insertPoint) {
		                break
		            }
		        }
		        var entity = [], vnodes = []
		        vnode.components.forEach(function (c) {
		            entity.push.apply(entity, c.nodes)
		            vnodes.push.apply(vnodes, c.children)
		        })
		        vnode.repeatCount = vnodes.length
		        patch(entity, vnodes, parent, vnode.steps)
		        var cb = avalon.caches[vnode.cid]
		        if (cb) {
		            cb.call(vnode.vmodel, {
		                type: "rendered",
		                target: startRepeat,
		                endRepeat: endRepeat,
		                signature: vnode.signature
		            })
		        }
		        return false
		    }

		})

		function getRepeatRange(nodes, i) {
		    var isBreak = 0, ret = [], node
		    while (node = nodes[i++]) {
		        if (node.type === '#comment') {
		            if (node.nodeValue.indexOf('ms-for:') === 0) {
		                isBreak++
		            } else if (node.nodeValue.indexOf('ms-for-end:') === 0) {
		                isBreak--
		            }
		        }
		        ret.push(node)
		        if (isBreak === 0) {
		            break
		        }
		    }
		    return ret
		}


		//将要循环的节点根据锚点元素再分成一个个更大的单元,用于diff
		function getComponents(nodes, signature) {
		    var components = []
		    var com = {
		        children: []
		    }
		    for (var i = 0, el; el = nodes[i]; i++) {
		        if (el.nodeType === 8 && el.nodeValue === signature) {
		            com.children.push(el)
		            com.key = el.key
		            com.index = components.length
		            components.push(com)
		            com = {
		                children: []
		            }
		        } else {
		            com.children.push(el)
		        }
		    }
		    return components
		}

		var rfuzzy = /^(string|number|boolean)/
		var rkfuzzy = /^_*(string|number|boolean)/
		function fuzzyMatchCache(cache, id) {
		    var m = id.match(rfuzzy)
		    if (m) {
		        var fid = m[1]
		        for (var i in cache) {
		            var n = i.match(rkfuzzy)
		            if (n && n[1] === fid) {
		                return isInCache(cache, i)
		            }
		        }
		    }
		}

		// 新位置: 旧位置
		function isInCache(cache, id) {
		    var c = cache[id], cid = id
		    if (c) {
		        var ctack = cache["***" + id]
		        if (ctack) {
		            var a = ctack.pop()
		            delete cache[a.id]
		            if (ctack.length == 0)
		                delete cache["***" + id]
		            return a.c
		        }
		        var stack = [{id: id, c: c}]
		        while (1) {
		            id += '_'
		            if (cache[id]) {
		                stack.push({
		                    id: id,
		                    c: cache[id]
		                })
		            } else {
		                break
		            }
		        }
		        var a = stack.pop()
		        delete cache[a.id]
		        if (stack.length) {
		            cache['***' + cid] = stack
		        }
		        return a.c
		    }
		    return c
		}

		function saveInCache(cache, component) {
		    var trackId = component.key
		    if (!cache[trackId]) {
		        cache[trackId] = component
		    } else {
		        while (1) {
		            trackId += '_'
		            if (!cache[trackId]) {
		                cache[trackId] = component
		                break
		            }
		        }
		    }
		}
		var applyEffects = function (nodes, vnodes, opts) {
		    vnodes.forEach(function (el, i) {
		        avalon.applyEffect(nodes[i], vnodes[i], opts)
		    })
		}



	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		var disposeDetectStrategy = __webpack_require__(68)
		var patch = __webpack_require__(65)
		var update = __webpack_require__(43)

		//插入点机制,组件的模板中有一些slot元素,用于等待被外面的元素替代
		var dir = avalon.directive('widget', {
		    priority: 4,
		    parse: function (binding, num, elem) {
		        var isVoidTag = !!elem.isVoidTag
		        elem.isVoidTag = true
		        var wid = elem.props.wid || (elem.props.wid = avalon.makeHashCode('w'))
		        avalon.resolvedComponents[wid] = {
		            props: avalon.shadowCopy({}, elem.props),
		            template: elem.template
		        }
		        var ret = [
		            'vnode' + num + '._isVoidTag = ' + isVoidTag,
		            'vnode' + num + '.props.wid = "' + wid + '"',
		            'vnode' + num + '.template = ' + avalon.quote(elem.template),
		            'vnode' + num + '.props["ms-widget"] = ' + avalon.parseExpr(binding, 'widget'),
		            'vnode' + num + ' = avalon.component(vnode' + num + ', __vmodel__)',
		            'if(typeof vnode' + num + '.render === "string"){',
		            'avalon.__widget = [];',
		            'var __backup__ = __vmodel__;',
		            '__vmodel__ = vnode' + num + '.vmodel;',
		            'try{eval(" new function(){"+ vnode' + num + '.render +"}");',
		            '}catch(e){avalon.warn(e)', '}',
		            'vnode' + num + ' = avalon.renderComponent(avalon.__widget[0])', '}',
		            '__vmodel__ = __backup__;']
		        return ret.join('\n') + '\n'
		    },
		    define: function () {
		        return avalon.mediatorFactory.apply(this, arguments)
		    },
		    diff: function (cur, pre, steps) {
		        var coms = avalon.resolvedComponents
		        var wid = cur.props.wid
		        var docker = coms[wid]
		        if (!docker || !docker.renderCount) {
		            steps.count += 1
		            cur.change = [this.replaceByComment]
		        } else if (docker.renderCount && docker.renderCount < 2) {
		            cur.steps = steps
		            update(cur, this.replaceByComponent, steps, 'widget' )

		            function fireReady(dom, vnode) {
		                cur.vmodel.$fire('onReady', {
		                    type: 'ready',
		                    target: dom,
		                    wid: wid,
		                    vmodel: vnode.vmodel
		                })
		                docker.renderCount = 2
		            }
		            update(cur, fireReady, steps, 'widget', 'afterChange' )

		        } else {
		            var needUpdate = !cur.diff || cur.diff(cur, pre, steps)
		            cur.skipContent = !needUpdate
		            var viewChangeObservers = cur.vmodel.$events.onViewChange
		            if (viewChangeObservers && viewChangeObservers.length) {
		                steps.count += 1
		                cur.afterChange = [function (dom, vnode) {
		                        var preHTML = pre.outerHTML
		                        var curHTML = cur.outerHTML || 
		                                (cur.outerHTML = avalon.vdomAdaptor(cur, 'toHTML'))
		                        if (preHTML !== curHTML) {
		                            cur.vmodel.$fire('onViewChange', {
		                                type: 'viewchange',
		                                target: dom,
		                                wid: wid,
		                                vmodel: vnode.vmodel
		                            })
		                        }
		                        docker.renderCount++
		                    }]
		            }

		        }
		    },
		    addDisposeMonitor: function (dom) {
		        if (window.chrome && window.MutationEvent) {
		            disposeDetectStrategy.byMutationEvent(dom)
		        } else if (Object.defineProperty && window.Node) {
		            disposeDetectStrategy.byRewritePrototype(dom)
		        } else {
		            disposeDetectStrategy.byPolling(dom)
		        }
		    },
		    replaceByComment: function (dom, node, parent) {
		        var comment = document.createComment(node.nodeValue)
		        if (dom) {
		            parent.replaceChild(comment, dom)
		        } else {
		            parent.appendChild(comment)
		        }
		    },
		    replaceByComponent: function (dom, node, parent) {
		        var hasDdash = node.type.indexOf('-') > 0
		        var hasDetect = false
		        if (hasDdash && document.registerElement) {
		            //必须在自定义标签实例化时,注册它
		            disposeDetectStrategy.byCustomElement(node.type)
		            hasDetect = true
		        }
		        var com = avalon.vdomAdaptor(node, 'toDOM')
		        node.ouerHTML = avalon.vdomAdaptor(node, 'toHTML')
		        if (dom) {
		            parent.replaceChild(com, dom)
		        } else {
		            parent.appendChild(com)
		        }
		        patch([com], [node], parent, node.steps)
		        if (!hasDetect) {
		            dir.addDisposeMonitor(com)
		        }
		        return false
		    }
		})




		// http://www.besteric.com/2014/11/16/build-blog-mirror-site-on-gitcafe/

	/***/ },
	/* 68 */
	/***/ function(module, exports) {

		//用于chrome, safari
		var tags = {}
		function byCustomElement(name) {
		    if (tags[name])
		        return
		    tags[name] = true
		    var prototype = Object.create(HTMLElement.prototype)
		    prototype.detachedCallback = function () {
		        var dom = this
		        setTimeout(function () {
		            fireDisposeHook(dom)
		        })
		    }
		    document.registerElement(name, prototype)
		}

		//http://stackoverflow.com/questions/11425209/are-dom-mutation-observers-slower-than-dom-mutation-events
		//http://stackoverflow.com/questions/31798816/simple-mutationobserver-version-of-domnoderemovedfromdocument
		function byMutationEvent(dom) {
		    dom.addEventListener("DOMNodeRemovedFromDocument", function () {
		        setTimeout(function () {
		            fireDisposeHook(dom)
		        })
		    })
		}
		//用于IE8+, firefox
		function byRewritePrototype() {
		    if (byRewritePrototype.execute) {
		        return
		    }

		    byRewritePrototype.execute = true
		    var p = Node.prototype
		    var _removeChild = p.removeChild
		    p.removeChild = function (a, b) {
		        _removeChild.call(this, a, b)
		        if (a.nodeType === 1) {
		            setTimeout(function () {
		                fireDisposeHook(a)
		            })
		        }
		        return a
		    }
		    var _replaceChild = p.replaceChild
		    p.replaceChild = function (a, b) {
		        _replaceChild.call(this, a, b)
		        if (a.nodeType === 1) {
		            setTimeout(function () {
		                fireDisposeHook(a)
		            })
		        }
		        return a
		    }
		    var _innerHTML = p.innerHTML
		    p.innerHTML = function (html) {
		        var all = this.getElementsByTagName('*')
		        _innerHTML.call(this, html)
		        fireDisposedComponents(all)
		    }
		    var _appendChild = p.appendChild
		    p.appendChild = function (a) {
		        _appendChild.call(this, a)
		        if (a.nodeType === 1 && this.nodeType === 11) {
		            setTimeout(function () {
		                fireDisposeHook(a)
		            })
		        }
		        return a
		    }
		    var _insertBefore = p.insertBefore
		    p.insertBefore = function (a) {
		        _insertBefore.call(this, a)
		        if (a.nodeType === 1 && this.nodeType === 11) {
		            setTimeout(function () {
		                fireDisposeHook(a)
		            })
		        }
		        return a
		    }
		}


		//用于IE6,7
		var checkDisposeNodes = []
		var checkID = 0
		function byPolling(dom) {
		    avalon.Array.ensure(checkDisposeNodes, dom)
		    if (!checkID) {
		        checkID = setInterval(function () {
		            for (var i = 0, el; el = checkDisposeNodes[i++]; ) {
		                if (false === fireDisposeHook(el)) {
		                    avalon.Array.removeAt(checkDisposeNodes, i)
		                    --i
		                }
		            }
		            if (checkDisposeNodes.length == 0) {
		                clearInterval(checkID)
		                checkID = 0
		            }
		        }, 1000)
		    }
		}


		module.exports = {
		    byPolling: byPolling,
		    byMutationEvent: byMutationEvent,
		    byCustomElement: byCustomElement,
		    byRewritePrototype: byRewritePrototype
		}

		function fireDisposeHook(el) {
		    if (el.nodeType === 1 && el.getAttribute('wid') && !avalon.contains(avalon.root, el)) {
		        var wid = el.getAttribute('wid')
		        var docker = avalon.resolvedComponents[ wid ]
		        var vm = docker.vmodel
		        var cached = !!docker.cached 
		        docker.vmodel.$fire("onDispose", {
		            type: 'dispose',
		            target: el,
		            vmodel: vm,
		            cached: cached
		        })
		        if (docker && docker.vmodel && !cached) {
		            vm.$element = null
		            vm.$hashcode = false
		            delete docker.vmodel
		            delete avalon.resolvedComponents[ wid ]
		        }
		        return false
		    }
		}

		function fireDisposedComponents(nodes) {
		    for (var i = 0, el; el = nodes[i++]; ) {
		        fireDisposeHook(el)
		    }
		}

	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {

		var support = __webpack_require__(70)
		var Cache = __webpack_require__(26)
		var update = __webpack_require__(43)

		avalon.directive('effect', {
		    priority: 5,
		    parse: function (binding, num) {
		        return 'vnode' + num + '.props["ms-effect"] = ' + avalon.parseExpr(binding) + ';\n'
		    },
		    diff: function (cur, pre, steps, name) {
		        var curObj = cur.props[name]
		        if(typeof curObj === 'string'){
		            var is = curObj
		            curObj = cur.props[name] = {
		                is: is
		            }
		           
		        }else if (Array.isArray(curObj)) {
		            curObj = cur.props[name] = avalon.mix.apply({}, curObj)
		        }
		    
		        curObj.action = curObj.action || 'enter'
		       
		        if (Object(curObj) === curObj) {
		            var preObj = pre.props[name]
		            if ( Object(preObj) !== preObj || diffObj(curObj, preObj ))  {
		                update(cur, this.update, steps, 'effect', 'afterChange')

		            }
		        }
		    },
		    update: function (dom, vnode, parent, option) {
		        if(dom.animating ){
		            return
		        }
		        dom.animating = true
		        var localeOption = vnode.props['ms-effect']
		        var type = localeOption.is
		        option = option || {}
		        if(!type){//如果没有指定类型
		            return avalon.warn('need is option')
		        }
		      
		        var effects = avalon.effects
		        if(support.css && !effects[type]){
		            avalon.effect(type, {})
		        }
		        var globalOption = effects[type]
		        if(!globalOption){//如果没有定义特效
		            return avalon.warn(type+' effect is undefined')
		        }
		        var action = option.action || localeOption.action
		        var Effect = avalon.Effect
		        if (typeof Effect.prototype[action] !== 'function'){
		            return avalon.warn(action+' action is undefined')
		        }   
		        var effect = new Effect(dom)
		        var finalOption = avalon.mix(option, globalOption, localeOption)
		        if (finalOption.queue) {
		            animationQueue.push(function () {
		                effect[action](finalOption)
		            })
		            callNextAnimation()
		        } else {
		            setTimeout(function(){
		               effect[action](finalOption)
		            },4)
		        }
		    }
		})
		function diffObj(a, b){
		    for(var i in a){
		        if(a[i] !== b[i])
		            return true
		    }
		    return false
		}

		var animationQueue = []
		function callNextAnimation() {
		    if (animationQueue.lock)
		        return
		    var fn = animationQueue[0]
		    if (fn) {
		       callNextAnimation.lock = true
		       fn()
		    }
		}

		avalon.effects = {}
		//这里定义CSS动画


		avalon.effect = function (name, definition) {
		    avalon.effects[name] = definition || {}
		    if (support.css) {
		        if (!definition.enterClass) {
		            definition.enterClass = name + '-enter'
		        }
		        if (!definition.enterActiveClass) {
		            definition.enterActiveClass = definition.enterClass + '-active'
		        }
		        if (!definition.leaveClass) {
		            definition.leaveClass = name + '-leave'
		        }
		        if (!definition.leaveActiveClass) {
		            definition.leaveActiveClass = definition.leaveClass + '-active'
		        }
		    }
		    if (!definition.action) {
		        definition.action = 'enter'
		    }
		}


		var Effect = function (el) {
		    this.el = el
		}
		avalon.Effect = Effect
		Effect.prototype = {
		    enter: createAction('Enter'),
		    leave: createAction('Leave'),
		    move: createAction('Move')
		}

		var rsecond = /\d+s$/
		function toMillisecond(str){
		   var ratio = rsecond.test(str) ? 1000 : 1
		   return parseFloat(str) * ratio
		}

		function execHooks(options, name, el) {
		    var list = options[name]
		    list = Array.isArray(list) ? list : typeof list === 'function' ? [list] : []
		    list.forEach(function (fn) {
		       fn && fn(el)
		    })
		}
		 var staggerCache = new Cache(128)

		function createAction(action) {
		    var lower = action.toLowerCase()
		    return function (option) {
		        var elem = this.el
		        var $el = avalon(elem)
		        var enterAnimateDone
		        var staggerTime = isFinite(option.stagger) ? option.stagger * 1000 : 0
		        if(staggerTime){
		            if(option.staggerKey){
		                var stagger = staggerCache.get(option.staggerKey) || 
		                        staggerCache.put(option.staggerKey, {
		                    count:0,
		                    items:0
		                })
		                stagger.count++
		                stagger.items++
		            }
		        }
		        var staggerIndex = stagger && stagger.count || 0
		        var animationDone = function(e) {
		            var isOk = e !== false
		            elem.animating = void 0
		            enterAnimateDone = true
		            var dirWord = isOk ? 'Done' : 'Abort'
		            execHooks(option, 'on' + action + dirWord, elem)
		            avalon.unbind(elem,support.transitionEndEvent)
		            avalon.unbind(elem,support.animationEndEvent)
		            if(stagger){
		                if(--stagger.items === 0){
		                    stagger.count = 0
		                }
		            }
		            if(option.queue){
		                animationQueue.lock = false
		                animationQueue.shift()
		                callNextAnimation()
		            }
		        }
		        execHooks(option, 'onBefore' + action, elem)

		        if (option[lower]) {
		            option[lower](elem, function (ok) {
		                animationDone(ok !== false)
		            })
		        } else if (support.css) {
		            
		            $el.addClass(option[lower + 'Class'])
		            if(lower === 'leave'){
		                $el.removeClass(option.enterClass+' '+option.enterActiveClass)
		            }else if(lower === 'enter'){
		                $el.removeClass(option.leaveClass+' '+option.leaveActiveClass)
		            }

		            $el.bind(support.transitionEndEvent, animationDone)
		            $el.bind(support.animationEndEvent, animationDone)
		            setTimeout(function () {
		                enterAnimateDone = avalon.root.offsetWidth === NaN
		                $el.addClass(option[lower + 'ActiveClass'])
		                var computedStyles = window.getComputedStyle(elem)
		                var tranDuration = computedStyles[support.transitionDuration]
		                var animDuration = computedStyles[support.animationDuration]
		                var time = toMillisecond(tranDuration) || toMillisecond(animDuration)
		                if (!time === 0) {
		                    animationDone(false)
		                }else if(!staggerTime ){
		                    setTimeout(function(){
		                        if(!enterAnimateDone){
		                            animationDone(false)
		                        }
		                    },time + 130 )
		                }
		            }, 17+ staggerTime * staggerIndex)// = 1000/60
		        }
		    }
		}

		avalon.applyEffect = function(node, vnode, opts){
		    var cb = opts.cb
		    var hook = opts.hook
		    var curEffect = vnode.props && vnode.props['ms-effect']
		    if(curEffect && !avalon.document.hidden ){
		        var old = curEffect[hook]
		        if(cb){
		            if(Array.isArray(old)){
		                old.push(cb)
		            }else if(old){
		                curEffect[hook] = [old, cb]
		            }else{
		                curEffect[hook] = [cb]
		            }
		        }
		        getAction(opts)
		        node.animate = true
		        avalon.directives.effect.update(node,vnode, 0, avalon.shadowCopy({},opts) ) 

		    }else if(cb){
		        cb()
		    }
		}

		function getAction(opts){
		    if(!opts.acton){
		        opts.action = opts.hook.replace(/^on/,'').replace(/Done$/,'').toLowerCase()
		    }
		}



	/***/ },
	/* 70 */
	/***/ function(module, exports) {

		/**
		 * ------------------------------------------------------------
		 * 检测浏览器对CSS动画的支持与API名
		 * ------------------------------------------------------------
		 */
		var supportTransition = false
		var supportAnimation = false
		var supportCSS = false
		var transitionEndEvent
		var animationEndEvent
		var transitionDuration = avalon.cssName("transition-duration")
		var animationDuration = avalon.cssName("animation-duration")

		var checker = {
		    'TransitionEvent': 'transitionend',
		    'WebKitTransitionEvent': 'webkitTransitionEnd',
		    'OTransitionEvent': 'oTransitionEnd',
		    'otransitionEvent': 'otransitionEnd'
		}
		var window = avalon.window
		var tran
		//有的浏览器同时支持私有实现与标准写法，比如webkit支持前两种，Opera支持1、3、4
		for (var name in checker) {
		    if (window[name]) {
		        tran = checker[name]
		        break
		    }
		    try {
		        var a = document.createEvent(name)
		        tran = checker[name]
		        break;
		    } catch (e) {
		    }
		}
		if (typeof tran === "string") {
		    supportTransition = true
		    supportCSS = true
		    transitionEndEvent = tran
		}

		//animationend有两个可用形态
		//IE10+, Firefox 16+ & Opera 12.1+: animationend
		//Chrome/Safari: webkitAnimationEnd
		//http://blogs.msdn.com/b/davrous/archive/2011/12/06/introduction-to-css3-animat ions.aspx
		//IE10也可以使用MSAnimationEnd监听，但是回调里的事件 type依然为animationend
		//  el.addEventListener("MSAnimationEnd", function(e) {
		//     alert(e.type)// animationend！！！
		// })
		checker = {
		    'AnimationEvent': 'animationend',
		    'WebKitAnimationEvent': 'webkitAnimationEnd'
		}
		var ani
		for (name in checker) {
		    if (window[name]) {
		        ani = checker[name];
		        break;
		    }
		}
		if (typeof ani === "string") {
		    supportAnimation = true
		    supportCSS = true
		    animationEndEvent = ani
		}

		module.exports = {
		    transition: supportTransition,
		    animation: supportAnimation,
		    css: supportCSS,
		    transitionEndEvent: transitionEndEvent,
		    animationEndEvent: animationEndEvent,
		    transitionDuration: transitionDuration,
		    animationDuration: animationDuration
		}

	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {

		
		avalon.lexer = __webpack_require__(72)
		avalon.diff = __webpack_require__(73)
		avalon.batch = __webpack_require__(74)
		// dispatch与patch 为内置模块

		var parseView = __webpack_require__(37)

		function render(vtree, num, scan) {
		    var num = num || String(new Date - 0).slice(0, 6)
		    var body = parseView(vtree, num, scan) + '\n\nreturn vnodes' + num
		    var fn = Function('__vmodel__','__fast__', body)
		    return fn
		}
		avalon.render = render

		module.exports = avalon


	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 * lexer 将字符串变成一个虚拟DOM树,方便以后进一步变成模板函数
		 * 此阶段只会生成VElement,VText,VComment
		 * ------------------------------------------------------------
		 */

		var makeHashCode = avalon.makeHashCode
		var vdom = __webpack_require__(15)
		var VText = vdom.VText
		var VComment = vdom.VComment


		//匹配只有开标签的无内容元素（Void elements 或 self-contained tags）
		//http://www.colorglare.com/2014/02/03/to-close-or-not-to-close.html
		//http://blog.jobbole.com/61514/

		var rfullTag = /^<([^\s>\/=.$<]+)(?:\s+[^=\s]+(?:=[^>\s]+)?)*\s*>(?:[\s\S]*)<\/\1>/
		var rvoidTag = /^<([^\s>\/=.$<]+)\s*([^>]*?)\/?>/

		var rtext = /^[^<]+/
		var rcomment = /^<!--([\w\W]*?)-->/

		var rnumber = /\d+/g
		var rspAfterForStart = /^\s*ms-for\:/
		var rspBeforeForEnd = /^\s*ms-for-end\:/
		var r = __webpack_require__(40)
		var rsp = r.sp
		var rfill = /\?\?\d+/g
		var rleftSp = r.leftSp
		var rstring = r.string


		var rbind = avalon.config.rbind


		var maps = {}
		var number = 1
		function dig(a) {
		    var key = '??' + number++
		    maps[key] = a
		    return key
		}
		function fill(a) {
		    var val = maps[a]
		    return val
		}
		var rhasString = /=["']/
		var rlineSp = /\n\s*/g
		function fixLongAttrValue(attr) {
		    return rhasString.test(attr) ?
		            attr.replace(rlineSp, '').replace(rstring, dig) : attr
		}
		function lexer(text, curDeep, maxDeep) {
		    var nodes = []
		    maxDeep = maxDeep || 1
		    if (typeof curDeep !== 'number') {
		        curDeep = 0
		    } else {
		        curDeep = curDeep + 1
		    }
		    if (curDeep >= maxDeep && !rbind.test(text)) {
		        return nodes
		    }
		    if (!curDeep) {
		        text = text.replace(rstring, dig)
		    }
		    do {
		        var outerHTML = ''
		        var node = false
		        var match = text.match(rtext)
		        if (match) {//尝试匹配文本
		            outerHTML = match[0]
		            node = new VText(outerHTML.replace(rfill, fill))
		        }

		        if (!node) {//尝试匹配注释
		            match = text.match(rcomment)
		            if (match) {
		                outerHTML = match[0]
		                node = new VComment(match[1].replace(rfill, fill))
		                var nodeValue = node.nodeValue
		                if (rspBeforeForEnd.test(nodeValue)) {
		                    var sp = nodes[nodes.length - 1]
		                    //移除紧挨着<!--ms-for-end:xxxx-->前的空白节点
		                    if (sp && sp.nodeType === 3 && rsp.test(sp.nodeValue)) {
		                        nodes.pop()
		                    }
		                    getForTemplate(nodes)
		                }
		            }
		        }


		        if (!node) {//尝试匹配拥有闭标签的元素节点
		            match = text.match(rfullTag)
		            if (match) {
		                outerHTML = match[0]//贪婪匹配 outerHTML,可能匹配过多
		                var type = match[1].toLowerCase()//nodeName
		                outerHTML = clipOuterHTML(outerHTML, type)

		                match = outerHTML.match(rvoidTag) //抽取所有属性

		                var props = {}
		                if (match[2]) {
		                    handleProps(fixLongAttrValue(match[2]), props)
		                }

		                var innerHTML = outerHTML.slice(match[0].length,
		                        (type.length + 3) * -1) //抽取innerHTML

		                node = {
		                    nodeType: 1,
		                    type: type,
		                    props: props,
		                    template: innerHTML.replace(rfill, fill).trim(),
		                    children: []
		                }
		                node = modifyProps(node, innerHTML, nodes, curDeep, maxDeep)
		            }
		        }

		        if (!node) {
		            match = text.match(rvoidTag)
		            if (match) {//尝试匹配自闭合标签
		                outerHTML = match[0]
		                type = match[1].toLowerCase()
		                props = {}
		                if (match[2]) {
		                    handleProps(fixLongAttrValue(match[2]), props)
		                }
		                node = {
		                    nodeType: 1,
		                    type: type,
		                    props: props,
		                    template: '',
		                    children: [],
		                    isVoidTag: true
		                }
		                modifyProps(node, '', nodes, curDeep, maxDeep)
		            }
		        }

		        if (node) {//从text中移除被匹配的部分
		            nodes.push(node)
		            text = text.slice(outerHTML.length)
		            if (node.nodeType === 8 && rspAfterForStart.test(node.nodeValue)) {
		                node.signature = makeHashCode('for')
		                //移除紧挨着<!--ms-for:xxxx-->后的空白节点
		                text = text.replace(rleftSp, '')
		            }
		        } else {
		            break
		        }
		    } while (1);
		    if (!curDeep) {
		        maps = {}
		    }
		    return nodes
		}

		function getForTemplate(nodes){
		    var i = 1, el, k = nodes.length, ret = []
		    while(el = nodes[--k]){
		        if(el.nodeType === 8){
		            if(rspAfterForStart.test(el.nodeValue)){
		                i -= 1
		            }else if(rspBeforeForEnd.test(el.nodeValue)){
		                i += 1
		            }
		            if(i === 0){
		                break
		            }
		        }
		        ret.push(avalon.vdomAdaptor(el, 'toHTML'))
		    }
		    return el.template = ret.reverse().join('')
		}

		//用于创建适配某一种标签的正则表达式
		var openStr = '(?:\\s+[^>=]*?(?:=[^>]+?)?)*>'
		var tagCache = {}// 缓存所有匹配开标签闭标签的正则
		var rchar = /./g
		var regArgs = avalon.msie < 9 ? 'ig' : 'g'//IE6-8，标签名都是大写
		function clipOuterHTML(matchText, type) {
		    var opens = []
		    var closes = []
		    var ropen = tagCache[type + 'open'] ||
		            (tagCache[type + 'open'] = new RegExp('<' + type + openStr, regArgs))
		    var rclose = tagCache[type + 'close'] ||
		            (tagCache[type + 'close'] = new RegExp('<\/' + type + '>', regArgs))

		    /* jshint ignore:start */
		    matchText.replace(ropen, function (_, b) {
		        //注意,页面有时很长,b的数值就很大,如
		        //000000000<000000011>000000041<000000066>000000096<000000107>
		        opens.push(('0000000000' + b + '<').slice(-10))//取得所有开标签的位置
		        return _.replace(rchar, '1')
		    }).replace(rclose, function (_, b) {
		        closes.push(('0000000000' + b + '>').slice(-10))//取得所有闭标签的位置               
		    })

		    /* jshint ignore:end */
		    //<div><div>01</div><div>02</div></div><div>222</div><div>333</div>
		    //会变成000<005<012>018<025>031>037<045>051<059>
		    //再变成<<><>><><>
		    //最后获取正确的>的索引值,这里为<<><>>的最后一个字符,
		    var pos = opens.concat(closes).sort()
		    var gtlt = pos.join('').replace(rnumber, '')
		    var k = 0, last = 0

		    for (var i = 0, n = gtlt.length; i < n; i++) {
		        var c = gtlt.charAt(i)
		        if (c === '<') {
		            k += 1
		        } else {
		            k -= 1
		        }
		        if (k === 0) {
		            last = i
		            break
		        }
		    }
		    var findex = parseFloat(pos[last]) + type.length + 3 // (</>为三个字符)
		    return  matchText.slice(0, findex) //取得正确的outerHTML
		}


		function modifyProps(node, innerHTML, nodes, curDeep, maxDeep) {
		    var type = node.type
		    if ('ms-skip' in node.props) {
		        node.skipContent = true
		    } else {
		        switch (type) {
		            case 'style':
		            case 'script':
		            case 'noscript':
		            case 'template':
		            case 'textarea':
		                node.skipContent = true
		                if (type === 'textarea') {
		                    node.props.type = 'textarea'
		                }
		                break
		            case 'input':
		                if (!node.props.type) {
		                    node.props.type = 'text'
		                }
		            case 'xmp':
		                node.children.push(new VText(node.template))
		                break
		            case 'option':
		                node.children.push(new VText(trimHTML(node.template)))
		                break
		            default:

		                if (!node.isVoidTag) {
		                    var childs = lexer(innerHTML, curDeep, maxDeep)
		                    node.children = childs
		                    if (type === 'table') {
		                        addTbody(node.children)
		                    }
		                }
		                break
		        }
		        var forExpr = node.props['ms-for']
		        if (forExpr) {
		            var cb = node.props['data-for-rendered']
		            var cid = cb+':cb'
		            delete node.props['ms-for']
		            nodes.push({
		                nodeType: 8,
		                type: '#comment',
		                nodeValue: 'ms-for:' + forExpr,
		                signature: makeHashCode('for'),
		                cid: cid,
		                template: avalon.vdomAdaptor(node, 'toHTML')
		            })
		            
		            if(cb && !avalon.caches[cid]){
		                avalon.caches[cid] = Function('return '+ avalon.parseExpr(cb, 'on'))()  
		            }
		           
		            nodes.push(node)
		            node = {
		                nodeType: 8,
		                skipContent: true,
		                type: '#comment',
		                nodeValue: 'ms-for-end:'
		            }
		        }
		    }
		    return node
		}
		//如果直接将tr元素写table下面,那么浏览器将将它们(相邻的那几个),放到一个动态创建的tbody底下
		function addTbody(nodes) {
		    var tbody, needAddTbody = false, count = 0, start = 0, n = nodes.length
		    for (var i = 0; i < n; i++) {
		        var node = nodes[i]
		        if (!tbody) {
		            if (node.type === 'tr') {
		                tbody = {
		                    nodeType: 1,
		                    type: 'tbody',
		                    template: '',
		                    children: [],
		                    props: {}
		                }
		                tbody.children.push(node)
		                needAddTbody = true
		                if (start === 0)
		                    start = i
		                nodes[i] = tbody
		            }
		        } else {
		            if (node.type !== 'tr' && node.nodeType === 1) {
		                tbody = false
		            } else {
		                tbody.children.push(node)
		                count++
		                nodes[i] = 0
		            }
		        }
		    }

		    if (needAddTbody) {
		        for (i = start; i < n; i++) {
		            if (nodes[i] === 0) {
		                nodes.splice(i, 1)
		                i--
		                count--
		                if (count === 0) {
		                    break
		                }
		            }
		        }
		    }
		}


		var ramp = /&amp;/g
		var rnowhite = /\S+/g
		var rquote = /&quot;/g
		var rnogutter = /\s*=\s*/g
		function handleProps(str, props) {
		    str.replace(rnogutter, '=').replace(rnowhite, function (el) {
		        var arr = el.split('='), value = arr[1] || '',
		                name = arr[0].toLowerCase()
		        if (arr.length === 2) {
		            if (value.indexOf('??') === 0) {
		                value = value.replace(rfill, fill).
		                        slice(1, -1).
		                        replace(ramp, '&').
		                        replace(rquote, '"')
		            }
		        }
		        props[name] = value
		    })
		}

		//form prototype.js
		var rtrimHTML = /<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi
		function trimHTML(v) {
		    return String(v).replace(rtrimHTML, '').trim()
		}


		module.exports = lexer

	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 * diff 对比新旧两个虚拟DOM树,根据directive中的diff方法为新虚拟DOM树
		 * 添加change, afterChange更新钩子
		 * ------------------------------------------------------------
		 */
		var emptyArr = []
		// 防止被引用
		var emptyObj = function() {
		    return {
		        children: [], props: {}
		    }
		}
		var directives = avalon.directives
		var rbinding = __webpack_require__(40).binding

		function diff(current, previous, steps) {
		    if (!current)
		        return
		    for (var i = 0; i < current.length; i++) {
		        var cur = current[i]
		        var pre = previous[i] || emptyObj()
		        switch (cur.nodeType) {
		            case 3:
		                if (!cur.skipContent) {
		                    directives.expr.diff(cur, pre, steps)
		                }
		                break
		            case 8:
		                if (cur.directive === 'for' ) {
		                   if(cur.hasChange){
		                       i = directives['for'].diff(current, previous, steps, i)
		                   }else{
		                       avalon.shadowCopy(cur, previous[i])
		                       delete cur.hasChange
		                   }
		                } else if (cur.directive ) {//if widget
		                    directives[cur.directive].diff(cur, pre, steps)
		                }
		                break
		            default:
		                if (!cur.skipAttrs) {
		                    diffProps(cur, pre, steps)
		                }
		                if (!cur.skipContent) {
		                    diff(cur.children, pre.children || emptyArr, steps)
		                }
		                break
		        }
		    }
		}

		function diffProps(current, previous, steps) {
		    if (current.order) {
		        try {
		            current.order.replace(/([^;]+)/g, function (name) {
		                var match = name.match(rbinding)
		                var type = match && match[1]
		                if (directives[type]) {
		                    directives[type].diff(current, previous || emptyObj(), steps, name)
		                }
		                return name
		            })
		        } catch (e) {
		            avalon.log(current, previous, e, 'diffProps error')
		        }
		    }
		    

		}
		avalon.diffProps = diffProps
		module.exports = diff


	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {

		
		/**
		 * ------------------------------------------------------------
		 * batch 同时对N个视图进行全量更新
		 * ------------------------------------------------------------
		 */

		var patch = __webpack_require__(65)


		//如果正在更新一个子树,那么将它放到
		var dirtyTrees = {}
		var needRenderIds = []
		avalon.suspendUpdate = 0
		var isBatchingUpdates = false
		function batchUpdate(id, immediate) {
		    var vm = typeof id === 'string' ? avalon.vmodels[id] || {} : id
		    id = vm.$id
		    if (dirtyTrees[id]) {
		        avalon.Array.ensure(needRenderIds, id)
		    } else {
		        dirtyTrees[id] = true
		    }
		  
		    if ( typeof vm.$render !== 'function' || !vm.$element || isBatchingUpdates) {
		        return
		    }
		    if (!document.nodeName)//如果是在mocha等测试环境中立即返回
		        return


		    var dom = vm.$element

		    flushUpdate(function () {
		        isBatchingUpdates = true
		        var vtree = vm.$render() || []
		        var steps = {count: 0}
		      
		        if (vm.$render.dom) {
		           var _vtree = findVdom(vtree, vm.$id)
		            if(_vtree){
		               dom = vm.$render.dom
		               vtree = [_vtree]
		            }
		        }
		        avalon.diff(vtree, dom.vtree || [], steps)
		        patch([ dom], vtree, null, steps)
		        steps.count = 0
		        dom.vtree = vtree
		        isBatchingUpdates = false
		        avalon.log('rerender', vm.$id, new Date - avalon.rerenderStart)
		        delete dirtyTrees[id]
		        for (var i in dirtyTrees) {//更新其他子树
		            batchUpdate(i, true)
		            break
		        }

		    }, immediate)


		}
		function findVdom(array, id) {
		    for (var i = 0, el; el = array[i++]; ) {
		        if (el.nodeType === 1) {
		            if (el.props['ms-controller'] === id) {
		                return el
		            } else if (el.children) {
		                var find = findVdom(el.children, id)
		                if(find){
		                    return find
		                }
		            }
		        }
		    }
		}
		function flushUpdate(callback, immediate ) {
		    if (immediate) {
		        callback()
		        var id = needRenderIds.shift()
		        if (id) {
		            batchUpdate(id, true)
		        }
		    } else {
		        setTimeout(callback, 0)
		    }
		}

		module.exports = avalon.batch = batchUpdate


	/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {

		
		var VText = __webpack_require__(16)
		var parseView = __webpack_require__(37)
		var resolvedComponents = avalon.resolvedComponents
		var componentContainers = {wbr:1, xmp:1, template: 1}
		var componentEvents = avalon.oneObject('onInit,onReady,onViewChange,onDispose')

		var needDel = avalon.mix({
		    is: 1,
		    diff: 1,
		    define: 1,
		    cached: 1
		}, componentEvents)
		avalon.document.createElement('slot')

		avalon.component = function (name, definition) {
		    //这是定义组件的分支,并将列队中的同类型对象移除
		    if (typeof name === 'string') {
		        if (!avalon.components[name]) {
		            avalon.components[name] = definition
		        }//这里没有返回值
		    } else {

		        var node = name //node为页面上节点对应的虚拟DOM
		        var topVm = definition
		        var wid = node.props.wid
		        //处理ms-widget的参数
		        var optionMixin = {}
		        function mixinHooks(option, index) {
		            for (var k in option) {
		                  if(!option.hasOwnProperty(k))
		                      continue
		                   var v = option[k]
		                if (componentEvents[k]) {
		                    if (k in optionMixin) {
		                        optionMixin[k].push(v)
		                    } else {
		                        optionMixin[k] = [option[k]]
		                    }
		                } else if (isFinite(index)) {
		                    optionMixin[k] = v
		                }
		            }
		        }
		        var options = node.props['ms-widget'] || {}
		        options = Array.isArray(options) ? options : [options]
		        options.forEach(mixinHooks)
		        if(optionMixin.cached){
		            var cachedVm = avalon.vmodels[optionMixin.$id]
		            if(cachedVm){
		                var _wid =  cachedVm.$events.__wid__ 
		                delete resolvedComponents[wid]
		                wid = _wid    
		            }
		        }
		      
		        var docker = resolvedComponents[wid]
		        if (!docker) {
		            resolvedComponents[wid] = node
		            docker = node
		        }
		        //如果此组件的实例已经存在,那么重新渲染
		        if (docker.render) {
		            return docker
		        } 
		        var tagName = node.type.indexOf('-') > 0 ? node.type : optionMixin.is
		        var placeholder = {
		            nodeType: 8,
		            type: '#comment',
		            directive: 'widget',
		            props: {'ms-widget': wid},
		            nodeValue: 'ms-widget placeholder'
		        }
		        if (!avalon.components[tagName]) {
		            //如果组件还没有定义,那么返回一个注释节点占位
		            return placeholder
		        } else {
		            var type = node.type
		            //判定用户传入的标签名是否符合规格
		            if (!componentContainers[type] && !isCustomTag(type)) {
		                avalon.warn(type + '不合适做组件的标签')
		            }
		            //将用户声明组件用的自定义标签(或xmp.template)的template转换成虚拟DOM
		            if (type === 'xmp' || type === 'template' || node.children.length === 0) {
		                node.children = avalon.lexer(docker.template)
		            }
		            //对于IE6-8,需要对自定义标签进行hack
		            definition = avalon.components[tagName]
		            if (!avalon.modern && !definition.fixTag) {
		                avalon.document.createElement(tagName)
		                definition.fixTag = 1
		            }
		            //对组件内置的template转换成虚拟DOM
		            var vtree = avalon.lexer(definition.template.trim())
		            if (vtree.length > 1) {
		                avalon.error('组件必须用一个元素包起来')
		            }
		            var widgetNode = vtree[0]
		            if (widgetNode.type !== tagName) {
		                avalon.warn('模板容器标签最好为' + tagName)
		            }
		            //将用户标签中的属性合并到组件标签的属性里
		            for (var k in docker.props) {
		                if(k !== 'ms-widget'){
		                    widgetNode.props[k] = docker.props[k]
		                }
		            }

		            //抽取用户标签里带slot属性的元素,替换组件的虚拟DOM树中的slot元素
		            if (definition.soleSlot) {
		                var slots = {}
		                var slotName = definition.soleSlot
		                slots[slotName] = /\S/.test(docker.template) ? node.children : new VText('{{@' + slotName + '}}')
		                mergeTempale(vtree, slots)
		            } else if (!node.isVoidTag) {
		                insertSlots(vtree, node, definition.soleSlot)
		            }
		            //开始构建组件的vm的配置对象
		            var diff = optionMixin.diff
		            var define = optionMixin.define
		            define = define || avalon.directives.widget.define
		            var $id = optionMixin.$id || avalon.makeHashCode(tagName.replace(/-/g, '_'))

		            var defaults = definition.defaults
		            mixinHooks(defaults, false)
		            var defineArgs = [topVm, defaults].concat(options)
		            var vmodel = define.apply(function (a, b) {
		                for (var k in needDel) {
		                    delete a[k]
		                    delete b[k]
		                }
		            }, defineArgs)
		            vmodel.$id = $id
		            vmodel.$element = topVm.$element
		            avalon.vmodels[$id] = vmodel
		            for (k in componentEvents) {
		                if (optionMixin[k]) {
		                    optionMixin[k].forEach(function (fn) {
		                        vmodel.$watch(k, fn)
		                    })
		                }
		            }

		            //生成组件的render
		            var num = num || String(new Date - 0).slice(0, 6)
		            var render = parseView(vtree, num) + '\nreturn (avalon.__widget = vnodes' + num + ');\n'
		            vmodel.$render = topVm.$render
		            vmodel.$events.__wid__ = wid
		            //触发onInit回调
		            vmodel.$fire('onInit', {
		                type: 'init',
		                vmodel: vmodel,
		                wid: wid,
		                target: null
		            })

		            avalon.shadowCopy(docker, {
		                diff: diff,
		                render: render,
		                vmodel: vmodel,
		                cached: !!optionMixin.cached,
		                placeholder: placeholder
		            })
		            return docker
		        }
		    }
		}

		var ralphabet = /^[a-z]+$/

		function isCustomTag(type) {
		    return type.length > 3 && type.indexOf('-') > 0 &&
		            ralphabet.test(type.charAt(0) + type.slice(-1))
		}
		avalon.renderComponent = function (widgetNode) {
		    var docker = avalon.resolvedComponents[widgetNode.props.wid]
		    var order = widgetNode.order
		    
		    widgetNode.order = order ? 
		        'ms-widget;;' + order : 'ms-widget'
		    if (!isComponentReady(widgetNode)) {
		        return docker.placeholder
		    }
		    if (!docker.renderCount) {
		        docker.renderCount = 1
		    }
		    widgetNode.props['ms-widget'] = docker.props['ms-widget']
		    widgetNode.vmodel = docker.vmodel
		    widgetNode.diff = docker.diff
		    //移除skipAttrs,以便进行diff
		    delete widgetNode.skipAttrs
		    return widgetNode
		}
		function isComponentReady(vnode) {
		    var isReady = true
		    try {
		        hasUnresolvedComponent(vnode)
		    } catch (e) {
		        isReady = false
		    }
		    return isReady
		}

		function hasUnresolvedComponent(vnode) {
		    vnode.children.forEach(function (el) {
		        if (el.nodeType === 8 && el.props) {
		            if ('ms-widget' in el.props) {
		                throw 'unresolved'
		            }
		        } else if (el.children) {
		            hasUnresolvedComponent(el)
		        }
		    })
		}

		function insertSlots(vtree, node, soleSlot) {
		    var slots = {}
		    if (soleSlot) {
		        slots[soleSlot] = node.children
		    } else {
		        node.children.forEach(function (el) {
		            if (el.nodeType === 1) {
		                var name = el.props.slot || 'default'
		                if (slots[name]) {
		                    slots[name].push(el)
		                } else {
		                    slots[name] = [el]
		                }
		            }
		        })
		    }
		    mergeTempale(vtree, slots)
		}

		function mergeTempale(vtree, slots) {
		    for (var i = 0, node; node = vtree[i++]; ) {
		        if (node.nodeType === 1) {
		            if (node.type === 'slot') {
		                var name = node.props.name || 'default'
		                if (slots[name]) {
		                    var s = slots[name]
		                    vtree.splice.apply(vtree, [i - 1, 1].concat(s))
		                    if (s.length === 1 && s[0].nodeType === 3) {
		                        removeEmptyText(vtree)
		                    }
		                }
		            } else {
		                mergeTempale(node.children, slots)
		            }
		        }
		    }

		    return vtree
		}

		function removeEmptyText(nodes) {
		    //如果定义组件时,slot元素两旁有大片空白,且slot元素又是被一个文本节点替代时,需要合并这三个文本节点
		    for (var i = 0, el; el = nodes[i]; i++) {
		        if (el.skipContent === false && el.nodeType === 3) {
		            var pre = nodes[i - 1]
		            var next = nodes[i + 1]
		            if (pre && pre.nodeType === 3 && !/\S/.test(pre.nodeValue)) {
		                avalon.Array.remove(nodes, pre)
		                --i
		            }
		            if (next && next.nodeType === 3 && !/\S/.test(next.nodeValue)) {
		                avalon.Array.remove(nodes, next)
		            }
		        }
		    }
		}


	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 * avalon基于纯净的Object.defineProperties的vm工厂 
		 * masterFactory,slaveFactory,mediatorFactory, ArrayFactory
		 * ------------------------------------------------------------
		 */

		var share = __webpack_require__(77)

		var isSkip = share.isSkip
		var toJson = share.toJson
		var $$midway = share.$$midway
		var $$skipArray = share.$$skipArray

		var makeAccessor = share.makeAccessor
		var makeObserver = share.makeObserver
		var modelAccessor = share.modelAccessor
		var modelAdaptor = share.modelAdaptor
		var makeHashCode = avalon.makeHashCode


		//一个vm总是为Observer的实例
		function Observer() {
		}

		function masterFactory(definition, heirloom, options) {

		    var $skipArray = {}
		    if (definition.$skipArray) {//收集所有不可监听属性
		        $skipArray = avalon.oneObject(definition.$skipArray)
		        delete definition.$skipArray
		    }

		    var keys = {}
		    options = options || {}
		    heirloom = heirloom || {}
		    var accessors = {}
		    var hashcode = makeHashCode('$')
		    var pathname = options.pathname || ''
		    options.id = options.id || hashcode
		    options.hashcode = options.hashcode || hashcode
		    var key, sid, spath
		    for (key in definition) {
		        if ($$skipArray[key])
		            continue
		        var val = keys[key] = definition[key]
		        if (!isSkip(key, val, $skipArray)) {
		            sid = options.id + '.' + key
		            spath = pathname ? pathname + '.' + key : key
		            accessors[key] = makeAccessor(sid, spath, heirloom)
		        }
		    }

		    accessors.$model = modelAccessor
		    var $vmodel = new Observer()
		    $vmodel = addAccessors($vmodel, accessors, definition)

		    for (key in keys) {
		        //对普通监控属性或访问器属性进行赋值
		        $vmodel[key] = keys[key]

		        //删除系统属性
		        if (key in $skipArray) {
		            delete keys[key]
		        } else {
		            keys[key] = true
		        }
		    }
		    makeObserver($vmodel, heirloom, keys, accessors, options)

		    return $vmodel
		}

		$$midway.masterFactory = masterFactory
		var addAccessors = __webpack_require__(82)
		var empty = {}
		function slaveFactory(before, after, heirloom, options) {
		    var keys = {}
		    var skips = {}
		    var accessors = {}
		    heirloom = heirloom || {}
		    var pathname = options.pathname
		    var resue = before.$accessors || {}
		    var key, sid, spath
		    for (key in after) {
		        if ($$skipArray[key])
		            continue
		        keys[key] = true//包括可监控与不可监控的
		        if (!isSkip(key, after[key], empty)) {
		            if (resue[key]) {
		                accessors[key] = resue[key]
		            } else {
		                sid = options.id + '.' + key
		                spath = pathname ? pathname + '.' + key : key
		                accessors[key] = makeAccessor(sid, spath, heirloom)
		            }
		        } else {
		            skips[key] = after[key]
		            delete after[key]
		        }
		    }

		    options.hashcode = before.$hashcode || makeHashCode('$')
		    accessors.$model = modelAccessor
		    var $vmodel = new Observer()
		    $vmodel = addAccessors($vmodel, accessors, skips)

		    for (key in skips) {
		        $vmodel[key] = skips[key]
		    }

		    makeObserver($vmodel, heirloom, keys, accessors, options)

		    return $vmodel
		}

		$$midway.slaveFactory = slaveFactory

		function mediatorFactory(before, after) {
		    var keys = {}, key
		    var accessors = {}
		    var unresolve = {}
		    var heirloom = {}
		    var arr = avalon.slice(arguments)
		    for (var i = 0; i < arr.length; i++) {
		        var obj = arr[i]
		        //收集所有键值对及访问器属性
		        var config
		        var configName
		        for (var key in obj) {
		            if(!obj.hasOwnProperty(key)){
		                continue
		            }
		            keys[key] = obj[key]
		            var $accessors = obj.$accessors
		            if ($accessors && $accessors[key]) {
		                if (arr.indexOf(obj[key]) === -1) {
		                    accessors[key] = $accessors[key]
		                } else { //去掉vm那个配置对象
		                    config = keys[key]
		                    configName = key
		                    delete keys[key]
		                }
		            } else if (typeof keys[key] !== 'function') {
		                unresolve[key] = 1
		            }
		        }
		    }

		    if (typeof this === 'function') {
		        this(keys, unresolve)
		    }
		    for (key in unresolve) {
		        //系统属性跳过,已经有访问器的属性跳过
		        if ($$skipArray[key] || accessors[key])
		            continue
		        if (!isSkip(key, keys[key], empty)) {
		            accessors[key] = makeAccessor(before.$id, key, heirloom)
		            accessors[key].set(keys[key])
		        }
		    }

		    var $vmodel = new Observer()
		    $vmodel = addAccessors($vmodel, accessors, keys)

		    for (key in keys) {
		        if (!accessors[key]) {//添加不可监控的属性
		            $vmodel[key] = keys[key]
		        }
		        //用于通过配置对象触发组件的$watch回调
		        if (configName && accessors[key] && config.hasOwnProperty(key)) {
		            var $$ = accessors[key]
		            if (!$$.get.$decompose) {
		                $$.get.$decompose = {}
		            }
		            $$.get.$decompose[configName+'.'+key] = $vmodel
		        }

		        if (key in $$skipArray) {
		            delete keys[key]
		        } else {
		            keys[key] = true
		        }

		    }

		    makeObserver($vmodel, heirloom, keys, accessors, {
		        id: before.$id,
		        hashcode: makeHashCode('$'),
		        master: true
		    })

		    return $vmodel
		}


		$$midway.mediatorFactory = avalon.mediatorFactory = mediatorFactory

		var __array__ = share.__array__


		var ap = Array.prototype
		var _splice = ap.splice
		function notifySize(array, size) {
		    if (array.length !== size) {
		        array.notify('length', array.length, size, true)
		    }
		}

		__array__.removeAll = function (all) { //移除N个元素
		    var size = this.length
		    if (Array.isArray(all)) {
		        for (var i = this.length - 1; i >= 0; i--) {
		            if (all.indexOf(this[i]) !== -1) {
		                _splice.call(this, i, 1)
		            }
		        }
		    } else if (typeof all === 'function') {
		        for (i = this.length - 1; i >= 0; i--) {
		            var el = this[i]
		            if (all(el, i)) {
		                _splice.call(this, i, 1)
		            }
		        }
		    } else {
		        _splice.call(this, 0, this.length)

		    }
		    if (!avalon.modern) {
		        this.$model = toJson(this)
		    }
		    notifySize(this, size)
		    this.notify()
		}


		var __method__ = ['push', 'pop', 'shift', 'unshift', 'splice']

		__method__.forEach(function (method) {
		    var original = ap[method]
		    __array__[method] = function (a, b) {
		        // 继续尝试劫持数组元素的属性
		        var args = [], size = this.length

		        if (method === 'splice' && Object(this[0]) === this[0]) {
		            var old = this.slice(a, b)
		            var neo = ap.slice.call(arguments, 2)
		            var args = [a, b]
		            for (var j = 0, jn = neo.length; j < jn; j++) {
		                var item = old[j]

		                args[j + 2] = modelAdaptor(neo[j], item, item && item.$events, {
		                    id: this.$id + '.*',
		                    master: true
		                })
		            }

		        } else {
		            for (var i = 0, n = arguments.length; i < n; i++) {
		                args[i] = modelAdaptor(arguments[i], 0, {}, {
		                    id: this.$id + '.*',
		                    master: true
		                })
		            }
		        }
		        var result = original.apply(this, args)
		        if (!avalon.modern) {
		            this.$model = toJson(this)
		        }
		        notifySize(this, size)
		        this.notify()
		        return result
		    }
		})

		'sort,reverse'.replace(avalon.rword, function (method) {
		    __array__[method] = function () {
		        ap[method].apply(this, arguments)
		        if (!avalon.modern) {
		            this.$model = toJson(this)
		        }
		        this.notify()
		        return this
		    }
		})


		module.exports = avalon
		//使用这个来扁平化数据  https://github.com/gaearon/normalizr
		//使用Promise  https://github.com/stefanpenner/es6-promise
		//使用这个AJAX库 https://github.com/matthew-andrews/isomorphic-fetch

	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		var share = __webpack_require__(78)
		var canHideProperty = __webpack_require__(81)
		var makeFire = share.makeFire
		function toJson(val) {
		    var xtype = avalon.type(val)
		    if (xtype === 'array') {
		        var array = []
		        for (var i = 0; i < val.length; i++) {
		            array[i] = toJson(val[i])
		        }
		        return array
		    } else if (xtype === 'object') {
		        var obj = {}
		        for (i in val) {
		            if (i === '__proxy__' || i === '__data__' || i === '__const__')
		                continue
		            if (val.hasOwnProperty(i)) {
		                var value = val[i]
		                obj[i] = value && value.nodeType ? value : toJson(value)
		            }
		        }
		        return obj
		    }
		    return val
		}

		function hideProperty(host, name, value) {
		    if (canHideProperty) {
		        Object.defineProperty(host, name, {
		            value: value,
		            writable: true,
		            enumerable: false,
		            configurable: true
		        })
		    } else {
		        host[name] = value
		    }
		}

		var modelAccessor = {
		    get: function () {
		        return toJson(this)
		    },
		    set: avalon.noop,
		    enumerable: false,
		    configurable: true
		}

		function makeObserver($vmodel, heirloom, keys, accessors, options) {

		    if (options.array) {
		        if (avalon.modern) {
		            Object.defineProperty($vmodel, '$model', modelAccessor)
		        } else {
		            $vmodel.$model = toJson($vmodel)
		        }
		    } else {
		        function hasOwnKey(key) {
		            return keys[key] === true
		        }
		        hideProperty($vmodel, '$accessors', accessors)
		        hideProperty($vmodel, 'hasOwnProperty', hasOwnKey)
		        hideProperty($vmodel, '$track', Object.keys(keys).sort().join(';;'))
		    }
		    hideProperty($vmodel, '$id', options.id)
		    hideProperty($vmodel, '$hashcode', options.hashcode)
		    if (options.master === true) {
		        hideProperty($vmodel, '$element', null)
		        hideProperty($vmodel, '$render', 0)
		        makeFire($vmodel, heirloom)
		    }
		}

		share.$$midway.makeObserver = makeObserver

		share.$$midway.hideProperty = hideProperty

		var mixin = {
		    toJson: toJson,
		    makeObserver: makeObserver,
		    modelAccessor: modelAccessor
		}
		for (var i in share) {
		    mixin[i] = share[i]
		}

		module.exports = mixin


	/***/ },
	/* 78 */
	/***/ function(module, exports, __webpack_require__) {

		
		var $$midway = {}
		var $$skipArray = __webpack_require__(79)
		var dispatch = __webpack_require__(80)
		var $emit = dispatch.$emit
		var $watch = dispatch.$watch


		function makeFire($vmodel, heirloom) {
		    heirloom.__vmodel__ = $vmodel
		    var hide = $$midway.hideProperty

		    hide($vmodel, '$events', heirloom)
		    hide($vmodel, '$watch', function () {
		        if (arguments.length === 2) {
		            return $watch.apply($vmodel, arguments)
		        } else {
		            throw '$watch方法参数不对'
		        }
		    })
		    hide($vmodel, '$fire', function (expr, a, b) {
		        var list = $vmodel.$events[expr]
		        $emit(list, $vmodel, expr, a, b)
		    })
		}


		function isSkip(key, value, skipArray) {
		    // 判定此属性能否转换访问器
		    return key.charAt(0) === '$' ||
		            skipArray[key] ||
		            (typeof value === 'function') ||
		            (value && value.nodeName && value.nodeType > 0)
		}

		function modelAdaptor(definition, old, heirloom, options) {
		    //如果数组转换为监控数组
		    if (Array.isArray(definition)) {
		        return $$midway.arrayFactory(definition, old, heirloom, options)
		    } else if (Object(definition) === definition && typeof definition !== 'function') {
		        //如果此属性原来就是一个VM,拆分里面的访问器属性
		        if (old && old.$id) {
		            ++avalon.suspendUpdate
		            //1.5带来的优化方案
		            if (old.$track !== Object.keys(definition).sort().join(';;')) {
		                var vm = $$midway.slaveFactory(old, definition, heirloom, options)
		            } else {
		                vm = old
		            }
		            for (var i in definition) {
		                if ($$skipArray[i])
		                    continue
		                vm[i] = definition[i]
		            }
		            --avalon.suspendUpdate
		            return vm
		        } else {
		            vm = $$midway.masterFactory(definition, heirloom, options)
		            return vm
		        }
		    } else {
		        return definition
		    }
		}
		$$midway.modelAdaptor = modelAdaptor


		function makeAccessor(sid, spath, heirloom) {
		    var old = NaN
		    function get() {
		        return old
		    }
		    get.heirloom = heirloom
		    return {
		        get: get,
		        set: function (val) {
		            if (old === val) {
		                return
		            }
		            if (val && typeof val === 'object') {
		                val = $$midway.modelAdaptor(val, old, heirloom, {
		                    pathname: spath,
		                    id: sid
		                })
		            }
		            var older = old
		            old = val

		            var vm = heirloom.__vmodel__
		            if (this.$hashcode && vm && !avalon.suspendUpdate) {
		                //★★确保切换到新的events中(这个events可能是来自oldProxy)               
		                if (heirloom !== vm.$events) {
		                    get.heirloom = vm.$events
		                }
		                //如果这个属性是组件配置对象中的属性,那么它需要触发组件的回调
		                emitWidget(get.$decompose, spath, val, older)
		                //触发普通属性的回调
		                if (spath.indexOf('*') === -1) {
		                    $emit(get.heirloom[spath], vm, spath, val, older)
		                }
		                //如果这个属性是数组元素上的属性
		                emitArray(sid, vm, spath, val, older)
		                //如果这个属性存在通配符
		                emitWildcard(get.heirloom, vm, spath, val, older)

		                avalon.rerenderStart = new Date
		                var dotIndex = vm.$id.indexOf('.')
		                if (dotIndex > 0) {
		                    avalon.batch(vm.$id.slice(0, dotIndex), true)
		                } else {
		                    avalon.batch(vm, true)
		                }

		            }
		        },
		        enumerable: true,
		        configurable: true
		    }
		}

		var rtopsub = /([^.]+)\.(.+)/
		function emitArray(sid, vm, spath, val, older) {
		    if (sid.indexOf('.*.') > 0) {
		        var arr = sid.match(rtopsub)
		        var top = avalon.vmodels[ arr[1] ]
		        if (top) {
		            var path = arr[2]
		            $emit(top.$events[ path ], vm, spath, val, older)
		        }
		    }
		}

		function emitWidget(whole, spath, val, older) {
		    if (whole && whole[spath]) {
		        var wvm = whole[spath]
		        if (!wvm.$hashcode) {
		            delete whole[spath]
		        } else {
		            var wpath = spath.replace(/^[^.]+\./, '')
		            if (wpath !== spath) {
		                $emit(wvm.$events[wpath], wvm, wpath, val, older)
		            }
		        }
		    }
		}

		function emitWildcard(obj, vm, spath, val, older) {
		    if (obj.__fuzzy__) {
		        obj.__fuzzy__.replace(avalon.rword, function (expr) {
		            var list = obj[expr]
		            var reg = list.reg
		            if (reg && reg.test(spath)) {
		                $emit(list, vm, spath, val, older)
		            }
		            return expr
		        })
		    }
		}


		function define(definition) {
		    var $id = definition.$id
		    if (!$id && avalon.config.debug) {
		        avalon.warn('vm.$id must be specified')
		    }
		    if (avalon.vmodels[$id]) {
		        throw Error('error:['+ $id+ '] had defined!')
		    }
		    var vm = $$midway.masterFactory(definition, {}, {
		        pathname: '',
		        id: $id,
		        master: true
		    })

		    return avalon.vmodels[$id] = vm

		}

		function arrayFactory(array, old, heirloom, options) {
		    if (old && old.splice) {
		        var args = [0, old.length].concat(array)
		        ++avalon.suspendUpdate
		        old.splice.apply(old, args)
		        --avalon.suspendUpdate
		        return old
		    } else {
		        for (var i in __array__) {
		            array[i] = __array__[i]
		        }

		        array.notify = function (a, b, c, d) {
		            var vm = heirloom.__vmodel__
		            if (vm) {
		                var path = a === null || a === void 0 ?
		                        options.pathname :
		                        options.pathname + '.' + a
		                vm.$fire(path, b, c)
		                if (!d && !avalon.suspendUpdate) {
		                    avalon.rerenderStart = new Date
		                    avalon.batch(vm, true)
		                }
		            }
		        }

		        var hashcode = avalon.makeHashCode('$')
		        options.array = true
		        options.hashcode = hashcode
		        options.id = options.id || hashcode
		        $$midway.makeObserver(array, heirloom, {}, {}, options)

		        for (var j = 0, n = array.length; j < n; j++) {
		            array[j] = modelAdaptor(array[j], 0, {}, {
		                id: array.$id + '.*',
		                master: true
		            })
		        }
		        return array
		    }
		}
		$$midway.arrayFactory = arrayFactory

		var __array__ = {
		    set: function (index, val) {
		        if (((index >>> 0) === index) && this[index] !== val) {
		            if (index > this.length) {
		                throw Error(index + 'set方法的第一个参数不能大于原数组长度')
		            }
		            this.splice(index, 1, val)
		        }
		    },
		    contains: function (el) { //判定是否包含
		        return this.indexOf(el) !== -1
		    },
		    ensure: function (el) {
		        if (!this.contains(el)) { //只有不存在才push
		            this.push(el)
		        }
		        return this
		    },
		    pushArray: function (arr) {
		        return this.push.apply(this, arr)
		    },
		    remove: function (el) { //移除第一个等于给定值的元素
		        return this.removeAt(this.indexOf(el))
		    },
		    removeAt: function (index) { //移除指定索引上的元素
		        if ((index >>> 0) === index) {
		            return this.splice(index, 1)
		        }
		        return []
		    },
		    clear: function () {
		        this.removeAll()
		        return this
		    }
		}
		avalon.define = define

		module.exports = {
		    $$midway: $$midway,
		    $$skipArray: $$skipArray,
		    isSkip: isSkip,
		    __array__: __array__,
		    makeFire: makeFire,
		    makeAccessor: makeAccessor,
		    modelAdaptor: modelAdaptor
		}

	/***/ },
	/* 79 */
	/***/ function(module, exports) {

		/**
		 * 
		$$skipArray:是系统级通用的不可监听属性
		$skipArray: 是当前对象特有的不可监听属性

		 不同点是
		 $$skipArray被hasOwnProperty后返回false
		 $skipArray被hasOwnProperty后返回true
		 */

		module.exports = avalon.oneObject('$id,$render,$track,$element,$watch,$fire,$events,$model,$skipArray,$accessors,$hashcode,__proxy__,__data__,__const__')

	/***/ },
	/* 80 */
	/***/ function(module, exports) {

		
		/**
		 * ------------------------------------------------------------
		 * 属性监听系统 
		 * ------------------------------------------------------------
		 */

		function adjustVm(vm, expr) {
		    var toppath = expr.split(".")[0], other
		    try {
		        if (vm.hasOwnProperty(toppath)) {
		            if (vm.$accessors) {
		                other = vm.$accessors[toppath].get.heirloom.__vmodel__
		            } else {
		                other = Object.getOwnPropertyDescriptor(vm, toppath).get.heirloom.__vmodel__
		            }

		        }
		    } catch (e) {
		    }
		    return other || vm
		}

		function toRegExp(expr) {
		    var arr = expr.split('.')
		    return new RegExp("^" + arr.map(function (el) {
		        return el === '*' ? '(?:[^.]+)' : el
		    }).join('\\.') + '$', 'i')
		}
		function addFuzzy(add, obj, expr) {
		    if (add) {
		        if (obj.__fuzzy__) {
		            if (obj.__fuzzy__.indexOf(',' + expr) === -1) {
		                obj.__fuzzy__ += ',' + expr
		            }
		        } else {
		            obj.__fuzzy__ = expr
		        }
		    }
		}

		function $watch(expr, callback) {
		    var fuzzy = expr.indexOf('.*') > 0 || expr === '*'
		    var vm = fuzzy ? this : $watch.adjust(this, expr)
		    var hive = vm.$events
		    var list = hive[expr] || (hive[expr] = [])
		    if (fuzzy) {
		        list.reg = list.reg || toRegExp(expr)
		    }
		    addFuzzy(fuzzy, hive, expr)
		    if (vm !== this) {
		        addFuzzy(fuzzy, this.$events, expr)
		        this.$events[expr] = list
		    }

		    avalon.Array.ensure(list, callback)

		    return function () {
		        avalon.Array.remove(list, callback)
		    }
		}

		$watch.adjust = adjustVm
		/**
		 * $fire 方法的内部实现
		 * 
		 * @param {Array} list 订阅者数组
		 * @param {Component} vm
		 * @param {String} path 监听属性名或路径
		 * @param {Any} a 当前值 
		 * @param {Any} b 过去值
		 * @param {Number} i 如果抛错,让下一个继续执行
		 * @returns {undefined}
		 */
		function $emit(list, vm, path, a, b, i) {
		    if (list && list.length) {
		        try {
		            for (i = i || list.length - 1; i >= 0; i--) {
		                var callback = list[i]
		                callback.call(vm, a, b, path)
		            }
		        } catch (e) {
		            if (i - 1 > 0)
		                $emit(list, vm, path, a, b, i - 1)
		            avalon.log(e, path)
		        }

		    }
		}


		module.exports = {
		    $emit: $emit,
		    $watch: $watch,
		    adjustVm: adjustVm
		}


	/***/ },
	/* 81 */
	/***/ function(module, exports) {

		//如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
		//标准浏览器使用__defineGetter__, __defineSetter__实现
		var flag = true
		try {
		    Object.defineProperty({}, '_', {
		        value: 'x'
		    })
		} catch (e) {
		    flag = false
		}

		module.exports = flag

	/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {

		
		var canHideProperty = __webpack_require__(81)
		var $$skipArray = __webpack_require__(79)


		var defineProperties = Object.defineProperties
		var defineProperty

		var expose = new Date() - 0

		if (!canHideProperty) {
		    if ('__defineGetter__' in avalon) {
		        defineProperty = function (obj, prop, desc) {
		            if ('value' in desc) {
		                obj[prop] = desc.value
		            }
		            if ('get' in desc) {
		                obj.__defineGetter__(prop, desc.get)
		            }
		            if ('set' in desc) {
		                obj.__defineSetter__(prop, desc.set)
		            }
		            return obj
		        }
		        defineProperties = function (obj, descs) {
		            for (var prop in descs) {
		                if (descs.hasOwnProperty(prop)) {
		                    defineProperty(obj, prop, descs[prop])
		                }
		            }
		            return obj
		        }
		    }
		    if (avalon.msie) {
		        var VBClassPool = {}
		        window.execScript([// jshint ignore:line
		            'Function parseVB(code)',
		            '\tExecuteGlobal(code)',
		            'End Function' //转换一段文本为VB代码
		        ].join('\n'), 'VBScript');
		        
		        function VBMediator(instance, accessors, name, value) {// jshint ignore:line
		            var accessor = accessors[name]
		            if (arguments.length === 4) {
		                accessor.set.call(instance, value)
		            } else {
		                return accessor.get.call(instance)
		            }
		        }
		        defineProperties = function (name, accessors, properties) {
		            // jshint ignore:line
		            var buffer = []
		            buffer.push(
		                    '\r\n\tPrivate [__data__], [__proxy__]',
		                    '\tPublic Default Function [__const__](d' + expose + ', p' + expose + ')',
		                    '\t\tSet [__data__] = d' + expose + ': set [__proxy__] = p' + expose,
		                    '\t\tSet [__const__] = Me', //链式调用
		                    '\tEnd Function')
		            //添加普通属性,因为VBScript对象不能像JS那样随意增删属性，必须在这里预先定义好
		            var uniq = {
		               __proxy__: true,
		               __data__: true,
		               __const__: true
		            }

		            //添加访问器属性 
		            for (name in accessors) {
		                uniq[name] = true
		                buffer.push(
		                        //由于不知对方会传入什么,因此set, let都用上
		                        '\tPublic Property Let [' + name + '](val' + expose + ')', //setter
		                        '\t\tCall [__proxy__](Me,[__data__], "' + name + '", val' + expose + ')',
		                        '\tEnd Property',
		                        '\tPublic Property Set [' + name + '](val' + expose + ')', //setter
		                        '\t\tCall [__proxy__](Me,[__data__], "' + name + '", val' + expose + ')',
		                        '\tEnd Property',
		                        '\tPublic Property Get [' + name + ']', //getter
		                        '\tOn Error Resume Next', //必须优先使用set语句,否则它会误将数组当字符串返回
		                        '\t\tSet[' + name + '] = [__proxy__](Me,[__data__],"' + name + '")',
		                        '\tIf Err.Number <> 0 Then',
		                        '\t\t[' + name + '] = [__proxy__](Me,[__data__],"' + name + '")',
		                        '\tEnd If',
		                        '\tOn Error Goto 0',
		                        '\tEnd Property')

		            }
		            for (name in properties) {
		                if (uniq[name] !== true) {
		                    uniq[name] = true
		                    buffer.push('\tPublic [' + name + ']')
		                }
		            }
		            for (name in $$skipArray) {
		                if (uniq[name] !== true) {
		                    uniq[name] = true
		                    buffer.push('\tPublic [' + name + ']')
		                }
		            }
		            buffer.push('\tPublic [' + 'hasOwnProperty' + ']')
		            buffer.push('End Class')
		            var body = buffer.join('\r\n')
		            var className = VBClassPool[body]
		            if (!className) {
		                className = avalon.makeHashCode('VBClass')
		                
		                window.parseVB('Class ' + className + body)
		                window.parseVB([
		                    'Function ' + className + 'Factory(a, b)', //创建实例并传入两个关键的参数
		                    '\tDim o',
		                    '\tSet o = (New ' + className + ')(a, b)',
		                    '\tSet ' + className + 'Factory = o',
		                    'End Function'
		                ].join('\r\n'))
		                VBClassPool[body] = className
		            }
		            var ret = window[className + 'Factory'](accessors, VBMediator) //得到其产品
		            return ret //得到其产品
		        }
		    }
		}

		module.exports = defineProperties


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.9.1
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2013-2-4
	 */
	(function( window, undefined ) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//"use strict";
		var
		// The deferred used on DOM ready
			readyList,

		// A central reference to the root jQuery(document)
			rootjQuery,

		// Support: IE<9
		// For `typeof node.method` instead of `node.method !== undefined`
			core_strundefined = typeof undefined,

		// Use the correct document accordingly with window argument (sandbox)
			document = window.document,
			location = window.location,

		// Map over jQuery in case of overwrite
			_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
			_$ = window.$,

		// [[Class]] -> type pairs
			class2type = {},

		// List of deleted data cache ids, so we can reuse them
			core_deletedIds = [],

			core_version = "1.9.1",

		// Save a reference to some core methods
			core_concat = core_deletedIds.concat,
			core_push = core_deletedIds.push,
			core_slice = core_deletedIds.slice,
			core_indexOf = core_deletedIds.indexOf,
			core_toString = class2type.toString,
			core_hasOwn = class2type.hasOwnProperty,
			core_trim = core_version.trim,

		// Define a local copy of jQuery
			jQuery = function( selector, context ) {
				// The jQuery object is actually just the init constructor 'enhanced'
				return new jQuery.fn.init( selector, context, rootjQuery );
			},

		// Used for matching numbers
			core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

		// Used for splitting on whitespace
			core_rnotwhite = /\S+/g,

		// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
			rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
			rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		// Match a standalone tag
			rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

		// JSON RegExp
			rvalidchars = /^[\],:{}\s]*$/,
			rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
			rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
			rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

		// Matches dashed string for camelizing
			rmsPrefix = /^-ms-/,
			rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
			fcamelCase = function( all, letter ) {
				return letter.toUpperCase();
			},

		// The ready event handler
			completed = function( event ) {

				// readyState === "complete" is good enough for us to call the dom ready in oldIE
				if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
					detach();
					jQuery.ready();
				}
			},
		// Clean-up method for dom ready events
			detach = function() {
				if ( document.addEventListener ) {
					document.removeEventListener( "DOMContentLoaded", completed, false );
					window.removeEventListener( "load", completed, false );

				} else {
					document.detachEvent( "onreadystatechange", completed );
					window.detachEvent( "onload", completed );
				}
			};

		jQuery.fn = jQuery.prototype = {
			// The current version of jQuery being used
			jquery: core_version,

			constructor: jQuery,
			init: function( selector, context, rootjQuery ) {
				var match, elem;

				// HANDLE: $(""), $(null), $(undefined), $(false)
				if ( !selector ) {
					return this;
				}

				// Handle HTML strings
				if ( typeof selector === "string" ) {
					if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
						// Assume that strings that start and end with <> are HTML and skip the regex check
						match = [ null, selector, null ];

					} else {
						match = rquickExpr.exec( selector );
					}

					// Match html or make sure no context is specified for #id
					if ( match && (match[1] || !context) ) {

						// HANDLE: $(html) -> $(array)
						if ( match[1] ) {
							context = context instanceof jQuery ? context[0] : context;

							// scripts is true for back-compat
							jQuery.merge( this, jQuery.parseHTML(
								match[1],
								context && context.nodeType ? context.ownerDocument || context : document,
								true
							) );

							// HANDLE: $(html, props)
							if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
								for ( match in context ) {
									// Properties of context are called as methods if possible
									if ( jQuery.isFunction( this[ match ] ) ) {
										this[ match ]( context[ match ] );

										// ...and otherwise set as attributes
									} else {
										this.attr( match, context[ match ] );
									}
								}
							}

							return this;

							// HANDLE: $(#id)
						} else {
							elem = document.getElementById( match[2] );

							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							if ( elem && elem.parentNode ) {
								// Handle the case where IE and Opera return items
								// by name instead of ID
								if ( elem.id !== match[2] ) {
									return rootjQuery.find( selector );
								}

								// Otherwise, we inject the element directly into the jQuery object
								this.length = 1;
								this[0] = elem;
							}

							this.context = document;
							this.selector = selector;
							return this;
						}

						// HANDLE: $(expr, $(...))
					} else if ( !context || context.jquery ) {
						return ( context || rootjQuery ).find( selector );

						// HANDLE: $(expr, context)
						// (which is just equivalent to: $(context).find(expr)
					} else {
						return this.constructor( context ).find( selector );
					}

					// HANDLE: $(DOMElement)
				} else if ( selector.nodeType ) {
					this.context = this[0] = selector;
					this.length = 1;
					return this;

					// HANDLE: $(function)
					// Shortcut for document ready
				} else if ( jQuery.isFunction( selector ) ) {
					return rootjQuery.ready( selector );
				}

				if ( selector.selector !== undefined ) {
					this.selector = selector.selector;
					this.context = selector.context;
				}

				return jQuery.makeArray( selector, this );
			},

			// Start with an empty selector
			selector: "",

			// The default length of a jQuery object is 0
			length: 0,

			// The number of elements contained in the matched element set
			size: function() {
				return this.length;
			},

			toArray: function() {
				return core_slice.call( this );
			},

			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function( num ) {
				return num == null ?

					// Return a 'clean' array
					this.toArray() :

					// Return just the object
					( num < 0 ? this[ this.length + num ] : this[ num ] );
			},

			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function( elems ) {

				// Build a new jQuery matched element set
				var ret = jQuery.merge( this.constructor(), elems );

				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;
				ret.context = this.context;

				// Return the newly-formed element set
				return ret;
			},

			// Execute a callback for every element in the matched set.
			// (You can seed the arguments with an array of args, but this is
			// only used internally.)
			each: function( callback, args ) {
				return jQuery.each( this, callback, args );
			},

			ready: function( fn ) {
				// Add the callback
				jQuery.ready.promise().done( fn );

				return this;
			},

			slice: function() {
				return this.pushStack( core_slice.apply( this, arguments ) );
			},

			first: function() {
				return this.eq( 0 );
			},

			last: function() {
				return this.eq( -1 );
			},

			eq: function( i ) {
				var len = this.length,
					j = +i + ( i < 0 ? len : 0 );
				return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
			},

			map: function( callback ) {
				return this.pushStack( jQuery.map(this, function( elem, i ) {
					return callback.call( elem, i, elem );
				}));
			},

			end: function() {
				return this.prevObject || this.constructor(null);
			},

			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: core_push,
			sort: [].sort,
			splice: [].splice
		};

	// Give the init function the jQuery prototype for later instantiation
		jQuery.fn.init.prototype = jQuery.fn;

		jQuery.extend = jQuery.fn.extend = function() {
			var src, copyIsArray, copy, name, options, clone,
				target = arguments[0] || {},
				i = 1,
				length = arguments.length,
				deep = false;

			// Handle a deep copy situation
			if ( typeof target === "boolean" ) {
				deep = target;
				target = arguments[1] || {};
				// skip the boolean and the target
				i = 2;
			}

			// Handle case when target is a string or something (possible in deep copy)
			if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
				target = {};
			}

			// extend jQuery itself if only one argument is passed
			if ( length === i ) {
				target = this;
				--i;
			}

			for ( ; i < length; i++ ) {
				// Only deal with non-null/undefined values
				if ( (options = arguments[ i ]) != null ) {
					// Extend the base object
					for ( name in options ) {
						src = target[ name ];
						copy = options[ name ];

						// Prevent never-ending loop
						if ( target === copy ) {
							continue;
						}

						// Recurse if we're merging plain objects or arrays
						if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
							if ( copyIsArray ) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];

							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[ name ] = jQuery.extend( deep, clone, copy );

							// Don't bring in undefined values
						} else if ( copy !== undefined ) {
							target[ name ] = copy;
						}
					}
				}
			}

			// Return the modified object
			return target;
		};

		jQuery.extend({
			noConflict: function( deep ) {
				if ( window.$ === jQuery ) {
					window.$ = _$;
				}

				if ( deep && window.jQuery === jQuery ) {
					window.jQuery = _jQuery;
				}

				return jQuery;
			},

			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,

			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,

			// Hold (or release) the ready event
			holdReady: function( hold ) {
				if ( hold ) {
					jQuery.readyWait++;
				} else {
					jQuery.ready( true );
				}
			},

			// Handle when the DOM is ready
			ready: function( wait ) {

				// Abort if there are pending holds or we're already ready
				if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
					return;
				}

				// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
				if ( !document.body ) {
					return setTimeout( jQuery.ready );
				}

				// Remember that the DOM is ready
				jQuery.isReady = true;

				// If a normal DOM Ready event fired, decrement, and wait if need be
				if ( wait !== true && --jQuery.readyWait > 0 ) {
					return;
				}

				// If there are functions bound, to execute
				readyList.resolveWith( document, [ jQuery ] );

				// Trigger any bound ready events
				if ( jQuery.fn.trigger ) {
					jQuery( document ).trigger("ready").off("ready");
				}
			},

			// See test/unit/core.js for details concerning isFunction.
			// Since version 1.3, DOM methods and functions like alert
			// aren't supported. They return false on IE (#2968).
			isFunction: function( obj ) {
				return jQuery.type(obj) === "function";
			},

			isArray: Array.isArray || function( obj ) {
				return jQuery.type(obj) === "array";
			},

			isWindow: function( obj ) {
				return obj != null && obj == obj.window;
			},

			isNumeric: function( obj ) {
				return !isNaN( parseFloat(obj) ) && isFinite( obj );
			},

			type: function( obj ) {
				if ( obj == null ) {
					return String( obj );
				}
				return typeof obj === "object" || typeof obj === "function" ?
				class2type[ core_toString.call(obj) ] || "object" :
					typeof obj;
			},

			isPlainObject: function( obj ) {
				// Must be an Object.
				// Because of IE, we also have to check the presence of the constructor property.
				// Make sure that DOM nodes and window objects don't pass through, as well
				if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
					return false;
				}

				try {
					// Not own constructor property must be Object
					if ( obj.constructor &&
						!core_hasOwn.call(obj, "constructor") &&
						!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
						return false;
					}
				} catch ( e ) {
					// IE8,9 Will throw exceptions on certain host objects #9897
					return false;
				}

				// Own properties are enumerated firstly, so to speed up,
				// if last one is own, then all properties are own.

				var key;
				for ( key in obj ) {}

				return key === undefined || core_hasOwn.call( obj, key );
			},

			isEmptyObject: function( obj ) {
				var name;
				for ( name in obj ) {
					return false;
				}
				return true;
			},

			error: function( msg ) {
				throw new Error( msg );
			},

			// data: string of html
			// context (optional): If specified, the fragment will be created in this context, defaults to document
			// keepScripts (optional): If true, will include scripts passed in the html string
			parseHTML: function( data, context, keepScripts ) {
				if ( !data || typeof data !== "string" ) {
					return null;
				}
				if ( typeof context === "boolean" ) {
					keepScripts = context;
					context = false;
				}
				context = context || document;

				var parsed = rsingleTag.exec( data ),
					scripts = !keepScripts && [];

				// Single tag
				if ( parsed ) {
					return [ context.createElement( parsed[1] ) ];
				}

				parsed = jQuery.buildFragment( [ data ], context, scripts );
				if ( scripts ) {
					jQuery( scripts ).remove();
				}
				return jQuery.merge( [], parsed.childNodes );
			},

			parseJSON: function( data ) {
				// Attempt to parse using the native JSON parser first
				if ( window.JSON && window.JSON.parse ) {
					return window.JSON.parse( data );
				}

				if ( data === null ) {
					return data;
				}

				if ( typeof data === "string" ) {

					// Make sure leading/trailing whitespace is removed (IE can't handle it)
					data = jQuery.trim( data );

					if ( data ) {
						// Make sure the incoming data is actual JSON
						// Logic borrowed from http://json.org/json2.js
						if ( rvalidchars.test( data.replace( rvalidescape, "@" )
								.replace( rvalidtokens, "]" )
								.replace( rvalidbraces, "")) ) {

							return ( new Function( "return " + data ) )();
						}
					}
				}

				jQuery.error( "Invalid JSON: " + data );
			},

			// Cross-browser xml parsing
			parseXML: function( data ) {
				var xml, tmp;
				if ( !data || typeof data !== "string" ) {
					return null;
				}
				try {
					if ( window.DOMParser ) { // Standard
						tmp = new DOMParser();
						xml = tmp.parseFromString( data , "text/xml" );
					} else { // IE
						xml = new ActiveXObject( "Microsoft.XMLDOM" );
						xml.async = "false";
						xml.loadXML( data );
					}
				} catch( e ) {
					xml = undefined;
				}
				if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
					jQuery.error( "Invalid XML: " + data );
				}
				return xml;
			},

			noop: function() {},

			// Evaluates a script in a global context
			// Workarounds based on findings by Jim Driscoll
			// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
			globalEval: function( data ) {
				if ( data && jQuery.trim( data ) ) {
					// We use execScript on Internet Explorer
					// We use an anonymous function so that context is window
					// rather than jQuery in Firefox
					( window.execScript || function( data ) {
						window[ "eval" ].call( window, data );
					} )( data );
				}
			},

			// Convert dashed to camelCase; used by the css and data modules
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function( string ) {
				return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
			},

			nodeName: function( elem, name ) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},

			// args is for internal usage only
			each: function( obj, callback, args ) {
				var value,
					i = 0,
					length = obj.length,
					isArray = isArraylike( obj );

				if ( args ) {
					if ( isArray ) {
						for ( ; i < length; i++ ) {
							value = callback.apply( obj[ i ], args );

							if ( value === false ) {
								break;
							}
						}
					} else {
						for ( i in obj ) {
							value = callback.apply( obj[ i ], args );

							if ( value === false ) {
								break;
							}
						}
					}

					// A special, fast, case for the most common use of each
				} else {
					if ( isArray ) {
						for ( ; i < length; i++ ) {
							value = callback.call( obj[ i ], i, obj[ i ] );

							if ( value === false ) {
								break;
							}
						}
					} else {
						for ( i in obj ) {
							value = callback.call( obj[ i ], i, obj[ i ] );

							if ( value === false ) {
								break;
							}
						}
					}
				}

				return obj;
			},

			// Use native String.trim function wherever possible
			trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
				function( text ) {
					return text == null ?
						"" :
						core_trim.call( text );
				} :

				// Otherwise use our own trimming functionality
				function( text ) {
					return text == null ?
						"" :
						( text + "" ).replace( rtrim, "" );
				},

			// results is for internal usage only
			makeArray: function( arr, results ) {
				var ret = results || [];

				if ( arr != null ) {
					if ( isArraylike( Object(arr) ) ) {
						jQuery.merge( ret,
							typeof arr === "string" ?
								[ arr ] : arr
						);
					} else {
						core_push.call( ret, arr );
					}
				}

				return ret;
			},

			inArray: function( elem, arr, i ) {
				var len;

				if ( arr ) {
					if ( core_indexOf ) {
						return core_indexOf.call( arr, elem, i );
					}

					len = arr.length;
					i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

					for ( ; i < len; i++ ) {
						// Skip accessing in sparse arrays
						if ( i in arr && arr[ i ] === elem ) {
							return i;
						}
					}
				}

				return -1;
			},

			merge: function( first, second ) {
				var l = second.length,
					i = first.length,
					j = 0;

				if ( typeof l === "number" ) {
					for ( ; j < l; j++ ) {
						first[ i++ ] = second[ j ];
					}
				} else {
					while ( second[j] !== undefined ) {
						first[ i++ ] = second[ j++ ];
					}
				}

				first.length = i;

				return first;
			},

			grep: function( elems, callback, inv ) {
				var retVal,
					ret = [],
					i = 0,
					length = elems.length;
				inv = !!inv;

				// Go through the array, only saving the items
				// that pass the validator function
				for ( ; i < length; i++ ) {
					retVal = !!callback( elems[ i ], i );
					if ( inv !== retVal ) {
						ret.push( elems[ i ] );
					}
				}

				return ret;
			},

			// arg is for internal usage only
			map: function( elems, callback, arg ) {
				var value,
					i = 0,
					length = elems.length,
					isArray = isArraylike( elems ),
					ret = [];

				// Go through the array, translating each of the items to their
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback( elems[ i ], i, arg );

						if ( value != null ) {
							ret[ ret.length ] = value;
						}
					}

					// Go through every key on the object,
				} else {
					for ( i in elems ) {
						value = callback( elems[ i ], i, arg );

						if ( value != null ) {
							ret[ ret.length ] = value;
						}
					}
				}

				// Flatten any nested arrays
				return core_concat.apply( [], ret );
			},

			// A global GUID counter for objects
			guid: 1,

			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function( fn, context ) {
				var args, proxy, tmp;

				if ( typeof context === "string" ) {
					tmp = fn[ context ];
					context = fn;
					fn = tmp;
				}

				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if ( !jQuery.isFunction( fn ) ) {
					return undefined;
				}

				// Simulated bind
				args = core_slice.call( arguments, 2 );
				proxy = function() {
					return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
				};

				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			},

			// Multifunctional method to get and set values of a collection
			// The value/s can optionally be executed if it's a function
			access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
				var i = 0,
					length = elems.length,
					bulk = key == null;

				// Sets many values
				if ( jQuery.type( key ) === "object" ) {
					chainable = true;
					for ( i in key ) {
						jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
					}

					// Sets one value
				} else if ( value !== undefined ) {
					chainable = true;

					if ( !jQuery.isFunction( value ) ) {
						raw = true;
					}

					if ( bulk ) {
						// Bulk operations run against the entire set
						if ( raw ) {
							fn.call( elems, value );
							fn = null;

							// ...except when executing function values
						} else {
							bulk = fn;
							fn = function( elem, key, value ) {
								return bulk.call( jQuery( elem ), value );
							};
						}
					}

					if ( fn ) {
						for ( ; i < length; i++ ) {
							fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
						}
					}
				}

				return chainable ?
					elems :

					// Gets
					bulk ?
						fn.call( elems ) :
						length ? fn( elems[0], key ) : emptyGet;
			},

			now: function() {
				return ( new Date() ).getTime();
			}
		});

		jQuery.ready.promise = function( obj ) {
			if ( !readyList ) {

				readyList = jQuery.Deferred();

				// Catch cases where $(document).ready() is called after the browser event has already occurred.
				// we once tried to use readyState "interactive" here, but it caused issues like the one
				// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
				if ( document.readyState === "complete" ) {
					// Handle it asynchronously to allow scripts the opportunity to delay ready
					setTimeout( jQuery.ready );

					// Standards-based browsers support DOMContentLoaded
				} else if ( document.addEventListener ) {
					// Use the handy event callback
					document.addEventListener( "DOMContentLoaded", completed, false );

					// A fallback to window.onload, that will always work
					window.addEventListener( "load", completed, false );

					// If IE event model is used
				} else {
					// Ensure firing before onload, maybe late but safe also for iframes
					document.attachEvent( "onreadystatechange", completed );

					// A fallback to window.onload, that will always work
					window.attachEvent( "onload", completed );

					// If IE and not a frame
					// continually check to see if the document is ready
					var top = false;

					try {
						top = window.frameElement == null && document.documentElement;
					} catch(e) {}

					if ( top && top.doScroll ) {
						(function doScrollCheck() {
							if ( !jQuery.isReady ) {

								try {
									// Use the trick by Diego Perini
									// http://javascript.nwbox.com/IEContentLoaded/
									top.doScroll("left");
								} catch(e) {
									return setTimeout( doScrollCheck, 50 );
								}

								// detach all dom ready events
								detach();

								// and execute any waiting functions
								jQuery.ready();
							}
						})();
					}
				}
			}
			return readyList.promise( obj );
		};

	// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
			class2type[ "[object " + name + "]" ] = name.toLowerCase();
		});

		function isArraylike( obj ) {
			var length = obj.length,
				type = jQuery.type( obj );

			if ( jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.nodeType === 1 && length ) {
				return true;
			}

			return type === "array" || type !== "function" &&
				( length === 0 ||
				typeof length === "number" && length > 0 && ( length - 1 ) in obj );
		}

	// All jQuery objects should point back to these
		rootjQuery = jQuery(document);
	// String to Object options format cache
		var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
		function createOptions( options ) {
			var object = optionsCache[ options ] = {};
			jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
				object[ flag ] = true;
			});
			return object;
		}

		/*
		 * Create a callback list using the following parameters:
		 *
		 *	options: an optional list of space-separated options that will change how
		 *			the callback list behaves or a more traditional option object
		 *
		 * By default a callback list will act like an event callback list and can be
		 * "fired" multiple times.
		 *
		 * Possible options:
		 *
		 *	once:			will ensure the callback list can only be fired once (like a Deferred)
		 *
		 *	memory:			will keep track of previous values and will call any callback added
		 *					after the list has been fired right away with the latest "memorized"
		 *					values (like a Deferred)
		 *
		 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
		 *
		 *	stopOnFalse:	interrupt callings when a callback returns false
		 *
		 */
		jQuery.Callbacks = function( options ) {

			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ?
				( optionsCache[ options ] || createOptions( options ) ) :
				jQuery.extend( {}, options );

			var // Flag to know if list is currently firing
				firing,
			// Last fire value (for non-forgettable lists)
				memory,
			// Flag to know if list was already fired
				fired,
			// End of the loop when firing
				firingLength,
			// Index of currently firing callback (modified by remove if needed)
				firingIndex,
			// First callback to fire (used internally by add and fireWith)
				firingStart,
			// Actual callback list
				list = [],
			// Stack of fire calls for repeatable lists
				stack = !options.once && [],
			// Fire callbacks
				fire = function( data ) {
					memory = options.memory && data;
					fired = true;
					firingIndex = firingStart || 0;
					firingStart = 0;
					firingLength = list.length;
					firing = true;
					for ( ; list && firingIndex < firingLength; firingIndex++ ) {
						if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
							memory = false; // To prevent further calls using add
							break;
						}
					}
					firing = false;
					if ( list ) {
						if ( stack ) {
							if ( stack.length ) {
								fire( stack.shift() );
							}
						} else if ( memory ) {
							list = [];
						} else {
							self.disable();
						}
					}
				},
			// Actual Callbacks object
				self = {
					// Add a callback or a collection of callbacks to the list
					add: function() {
						if ( list ) {
							// First, we save the current length
							var start = list.length;
							(function add( args ) {
								jQuery.each( args, function( _, arg ) {
									var type = jQuery.type( arg );
									if ( type === "function" ) {
										if ( !options.unique || !self.has( arg ) ) {
											list.push( arg );
										}
									} else if ( arg && arg.length && type !== "string" ) {
										// Inspect recursively
										add( arg );
									}
								});
							})( arguments );
							// Do we need to add the callbacks to the
							// current firing batch?
							if ( firing ) {
								firingLength = list.length;
								// With memory, if we're not firing then
								// we should call right away
							} else if ( memory ) {
								firingStart = start;
								fire( memory );
							}
						}
						return this;
					},
					// Remove a callback from the list
					remove: function() {
						if ( list ) {
							jQuery.each( arguments, function( _, arg ) {
								var index;
								while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
									list.splice( index, 1 );
									// Handle firing indexes
									if ( firing ) {
										if ( index <= firingLength ) {
											firingLength--;
										}
										if ( index <= firingIndex ) {
											firingIndex--;
										}
									}
								}
							});
						}
						return this;
					},
					// Check if a given callback is in the list.
					// If no argument is given, return whether or not list has callbacks attached.
					has: function( fn ) {
						return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
					},
					// Remove all callbacks from the list
					empty: function() {
						list = [];
						return this;
					},
					// Have the list do nothing anymore
					disable: function() {
						list = stack = memory = undefined;
						return this;
					},
					// Is it disabled?
					disabled: function() {
						return !list;
					},
					// Lock the list in its current state
					lock: function() {
						stack = undefined;
						if ( !memory ) {
							self.disable();
						}
						return this;
					},
					// Is it locked?
					locked: function() {
						return !stack;
					},
					// Call all callbacks with the given context and arguments
					fireWith: function( context, args ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( list && ( !fired || stack ) ) {
							if ( firing ) {
								stack.push( args );
							} else {
								fire( args );
							}
						}
						return this;
					},
					// Call all the callbacks with the given arguments
					fire: function() {
						self.fireWith( this, arguments );
						return this;
					},
					// To know if the callbacks have already been called at least once
					fired: function() {
						return !!fired;
					}
				};

			return self;
		};
		jQuery.extend({

			Deferred: function( func ) {
				var tuples = [
						// action, add listener, listener list, final state
						[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
						[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
						[ "notify", "progress", jQuery.Callbacks("memory") ]
					],
					state = "pending",
					promise = {
						state: function() {
							return state;
						},
						always: function() {
							deferred.done( arguments ).fail( arguments );
							return this;
						},
						then: function( /* fnDone, fnFail, fnProgress */ ) {
							var fns = arguments;
							return jQuery.Deferred(function( newDefer ) {
								jQuery.each( tuples, function( i, tuple ) {
									var action = tuple[ 0 ],
										fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
									// deferred[ done | fail | progress ] for forwarding actions to newDefer
									deferred[ tuple[1] ](function() {
										var returned = fn && fn.apply( this, arguments );
										if ( returned && jQuery.isFunction( returned.promise ) ) {
											returned.promise()
												.done( newDefer.resolve )
												.fail( newDefer.reject )
												.progress( newDefer.notify );
										} else {
											newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
										}
									});
								});
								fns = null;
							}).promise();
						},
						// Get a promise for this deferred
						// If obj is provided, the promise aspect is added to the object
						promise: function( obj ) {
							return obj != null ? jQuery.extend( obj, promise ) : promise;
						}
					},
					deferred = {};

				// Keep pipe for back-compat
				promise.pipe = promise.then;

				// Add list-specific methods
				jQuery.each( tuples, function( i, tuple ) {
					var list = tuple[ 2 ],
						stateString = tuple[ 3 ];

					// promise[ done | fail | progress ] = list.add
					promise[ tuple[1] ] = list.add;

					// Handle state
					if ( stateString ) {
						list.add(function() {
							// state = [ resolved | rejected ]
							state = stateString;

							// [ reject_list | resolve_list ].disable; progress_list.lock
						}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
					}

					// deferred[ resolve | reject | notify ]
					deferred[ tuple[0] ] = function() {
						deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
						return this;
					};
					deferred[ tuple[0] + "With" ] = list.fireWith;
				});

				// Make the deferred a promise
				promise.promise( deferred );

				// Call given func if any
				if ( func ) {
					func.call( deferred, deferred );
				}

				// All done!
				return deferred;
			},

			// Deferred helper
			when: function( subordinate /* , ..., subordinateN */ ) {
				var i = 0,
					resolveValues = core_slice.call( arguments ),
					length = resolveValues.length,

				// the count of uncompleted subordinates
					remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
					deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
					updateFunc = function( i, contexts, values ) {
						return function( value ) {
							contexts[ i ] = this;
							values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
							if( values === progressValues ) {
								deferred.notifyWith( contexts, values );
							} else if ( !( --remaining ) ) {
								deferred.resolveWith( contexts, values );
							}
						};
					},

					progressValues, progressContexts, resolveContexts;

				// add listeners to Deferred subordinates; treat others as resolved
				if ( length > 1 ) {
					progressValues = new Array( length );
					progressContexts = new Array( length );
					resolveContexts = new Array( length );
					for ( ; i < length; i++ ) {
						if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
							resolveValues[ i ].promise()
								.done( updateFunc( i, resolveContexts, resolveValues ) )
								.fail( deferred.reject )
								.progress( updateFunc( i, progressContexts, progressValues ) );
						} else {
							--remaining;
						}
					}
				}

				// if we're not waiting on anything, resolve the master
				if ( !remaining ) {
					deferred.resolveWith( resolveContexts, resolveValues );
				}

				return deferred.promise();
			}
		});
		jQuery.support = (function() {

			var support, all, a,
				input, select, fragment,
				opt, eventName, isSupported, i,
				div = document.createElement("div");

			// Setup
			div.setAttribute( "className", "t" );
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

			// Support tests won't run in some limited or non-browser environments
			all = div.getElementsByTagName("*");
			a = div.getElementsByTagName("a")[ 0 ];
			if ( !all || !a || !all.length ) {
				return {};
			}

			// First batch of tests
			select = document.createElement("select");
			opt = select.appendChild( document.createElement("option") );
			input = div.getElementsByTagName("input")[ 0 ];

			a.style.cssText = "top:1px;float:left;opacity:.5";
			support = {
				// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
				getSetAttribute: div.className !== "t",

				// IE strips leading whitespace when .innerHTML is used
				leadingWhitespace: div.firstChild.nodeType === 3,

				// Make sure that tbody elements aren't automatically inserted
				// IE will insert them into empty tables
				tbody: !div.getElementsByTagName("tbody").length,

				// Make sure that link elements get serialized correctly by innerHTML
				// This requires a wrapper element in IE
				htmlSerialize: !!div.getElementsByTagName("link").length,

				// Get the style information from getAttribute
				// (IE uses .cssText instead)
				style: /top/.test( a.getAttribute("style") ),

				// Make sure that URLs aren't manipulated
				// (IE normalizes it by default)
				hrefNormalized: a.getAttribute("href") === "/a",

				// Make sure that element opacity exists
				// (IE uses filter instead)
				// Use a regex to work around a WebKit issue. See #5145
				opacity: /^0.5/.test( a.style.opacity ),

				// Verify style float existence
				// (IE uses styleFloat instead of cssFloat)
				cssFloat: !!a.style.cssFloat,

				// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
				checkOn: !!input.value,

				// Make sure that a selected-by-default option has a working selected property.
				// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
				optSelected: opt.selected,

				// Tests for enctype support on a form (#6743)
				enctype: !!document.createElement("form").enctype,

				// Makes sure cloning an html5 element does not cause problems
				// Where outerHTML is undefined, this still works
				html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

				// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
				boxModel: document.compatMode === "CSS1Compat",

				// Will be defined later
				deleteExpando: true,
				noCloneEvent: true,
				inlineBlockNeedsLayout: false,
				shrinkWrapBlocks: false,
				reliableMarginRight: true,
				boxSizingReliable: true,
				pixelPosition: false
			};

			// Make sure checked status is properly cloned
			input.checked = true;
			support.noCloneChecked = input.cloneNode( true ).checked;

			// Make sure that the options inside disabled selects aren't marked as disabled
			// (WebKit marks them as disabled)
			select.disabled = true;
			support.optDisabled = !opt.disabled;

			// Support: IE<9
			try {
				delete div.test;
			} catch( e ) {
				support.deleteExpando = false;
			}

			// Check if we can trust getAttribute("value")
			input = document.createElement("input");
			input.setAttribute( "value", "" );
			support.input = input.getAttribute( "value" ) === "";

			// Check if an input maintains its value after becoming a radio
			input.value = "t";
			input.setAttribute( "type", "radio" );
			support.radioValue = input.value === "t";

			// #11217 - WebKit loses check when the name is after the checked attribute
			input.setAttribute( "checked", "t" );
			input.setAttribute( "name", "t" );

			fragment = document.createDocumentFragment();
			fragment.appendChild( input );

			// Check if a disconnected checkbox will retain its checked
			// value of true after appended to the DOM (IE6/7)
			support.appendChecked = input.checked;

			// WebKit doesn't clone checked state correctly in fragments
			support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

			// Support: IE<9
			// Opera does not clone events (and typeof div.attachEvent === undefined).
			// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
			if ( div.attachEvent ) {
				div.attachEvent( "onclick", function() {
					support.noCloneEvent = false;
				});

				div.cloneNode( true ).click();
			}

			// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
			for ( i in { submit: true, change: true, focusin: true }) {
				div.setAttribute( eventName = "on" + i, "t" );

				support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
			}

			div.style.backgroundClip = "content-box";
			div.cloneNode( true ).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			// Run tests that need a body at doc ready
			jQuery(function() {
				var container, marginDiv, tds,
					divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
					body = document.getElementsByTagName("body")[0];

				if ( !body ) {
					// Return for frameset docs that don't have a body
					return;
				}

				container = document.createElement("div");
				container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

				body.appendChild( container ).appendChild( div );

				// Support: IE8
				// Check if table cells still have offsetWidth/Height when they are set
				// to display:none and there are still other visible table cells in a
				// table row; if so, offsetWidth/Height are not reliable for use when
				// determining if an element has been hidden directly using
				// display:none (it is still safe to use offsets if a parent element is
				// hidden; don safety goggles and see bug #4512 for more information).
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				tds = div.getElementsByTagName("td");
				tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
				isSupported = ( tds[ 0 ].offsetHeight === 0 );

				tds[ 0 ].style.display = "";
				tds[ 1 ].style.display = "none";

				// Support: IE8
				// Check if empty table cells still have offsetWidth/Height
				support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

				// Check box-sizing and margin behavior
				div.innerHTML = "";
				div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
				support.boxSizing = ( div.offsetWidth === 4 );
				support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

				// Use window.getComputedStyle because jsdom on node.js will break without it.
				if ( window.getComputedStyle ) {
					support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
					support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// Fails in WebKit before Feb 2011 nightlies
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					marginDiv = div.appendChild( document.createElement("div") );
					marginDiv.style.cssText = div.style.cssText = divReset;
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";

					support.reliableMarginRight =
						!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
				}

				if ( typeof div.style.zoom !== core_strundefined ) {
					// Support: IE<8
					// Check if natively block-level elements act like inline-block
					// elements when setting their display to 'inline' and giving
					// them layout
					div.innerHTML = "";
					div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
					support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

					// Support: IE6
					// Check if elements with layout shrink-wrap their children
					div.style.display = "block";
					div.innerHTML = "<div></div>";
					div.firstChild.style.width = "5px";
					support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

					if ( support.inlineBlockNeedsLayout ) {
						// Prevent IE 6 from affecting layout for positioned elements #11048
						// Prevent IE from shrinking the body in IE 7 mode #12869
						// Support: IE<8
						body.style.zoom = 1;
					}
				}

				body.removeChild( container );

				// Null elements to avoid leaks in IE
				container = div = tds = marginDiv = null;
			});

			// Null elements to avoid leaks in IE
			all = select = fragment = opt = a = input = null;

			return support;
		})();

		var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
			rmultiDash = /([A-Z])/g;

		function internalData( elem, name, data, pvt /* Internal Use Only */ ){
			if ( !jQuery.acceptData( elem ) ) {
				return;
			}

			var thisCache, ret,
				internalKey = jQuery.expando,
				getByName = typeof name === "string",

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
				isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
				cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
				id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

			// Avoid doing any more work than we need to when trying to get data on an
			// object that has no data at all
			if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
				return;
			}

			if ( !id ) {
				// Only DOM nodes need a new unique ID for each element since their data
				// ends up in the global cache
				if ( isNode ) {
					elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
				} else {
					id = internalKey;
				}
			}

			if ( !cache[ id ] ) {
				cache[ id ] = {};

				// Avoids exposing jQuery metadata on plain JS objects when the object
				// is serialized using JSON.stringify
				if ( !isNode ) {
					cache[ id ].toJSON = jQuery.noop;
				}
			}

			// An object can be passed to jQuery.data instead of a key/value pair; this gets
			// shallow copied over onto the existing cache
			if ( typeof name === "object" || typeof name === "function" ) {
				if ( pvt ) {
					cache[ id ] = jQuery.extend( cache[ id ], name );
				} else {
					cache[ id ].data = jQuery.extend( cache[ id ].data, name );
				}
			}

			thisCache = cache[ id ];

			// jQuery data() is stored in a separate object inside the object's internal data
			// cache in order to avoid key collisions between internal data and user-defined
			// data.
			if ( !pvt ) {
				if ( !thisCache.data ) {
					thisCache.data = {};
				}

				thisCache = thisCache.data;
			}

			if ( data !== undefined ) {
				thisCache[ jQuery.camelCase( name ) ] = data;
			}

			// Check for both converted-to-camel and non-converted data property names
			// If a data property was specified
			if ( getByName ) {

				// First Try to find as-is property data
				ret = thisCache[ name ];

				// Test for null|undefined property data
				if ( ret == null ) {

					// Try to find the camelCased property
					ret = thisCache[ jQuery.camelCase( name ) ];
				}
			} else {
				ret = thisCache;
			}

			return ret;
		}

		function internalRemoveData( elem, name, pvt ) {
			if ( !jQuery.acceptData( elem ) ) {
				return;
			}

			var i, l, thisCache,
				isNode = elem.nodeType,

			// See jQuery.data for more information
				cache = isNode ? jQuery.cache : elem,
				id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

			// If there is already no cache entry for this object, there is no
			// purpose in continuing
			if ( !cache[ id ] ) {
				return;
			}

			if ( name ) {

				thisCache = pvt ? cache[ id ] : cache[ id ].data;

				if ( thisCache ) {

					// Support array or space separated string names for data keys
					if ( !jQuery.isArray( name ) ) {

						// try the string as a key before any manipulation
						if ( name in thisCache ) {
							name = [ name ];
						} else {

							// split the camel cased version by spaces unless a key with the spaces exists
							name = jQuery.camelCase( name );
							if ( name in thisCache ) {
								name = [ name ];
							} else {
								name = name.split(" ");
							}
						}
					} else {
						// If "name" is an array of keys...
						// When data is initially created, via ("key", "val") signature,
						// keys will be converted to camelCase.
						// Since there is no way to tell _how_ a key was added, remove
						// both plain key and camelCase key. #12786
						// This will only penalize the array argument path.
						name = name.concat( jQuery.map( name, jQuery.camelCase ) );
					}

					for ( i = 0, l = name.length; i < l; i++ ) {
						delete thisCache[ name[i] ];
					}

					// If there is no data left in the cache, we want to continue
					// and let the cache object itself get destroyed
					if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
						return;
					}
				}
			}

			// See jQuery.data for more information
			if ( !pvt ) {
				delete cache[ id ].data;

				// Don't destroy the parent cache unless the internal data object
				// had been the only thing left in it
				if ( !isEmptyDataObject( cache[ id ] ) ) {
					return;
				}
			}

			// Destroy the cache
			if ( isNode ) {
				jQuery.cleanData( [ elem ], true );

				// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
			} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
				delete cache[ id ];

				// When all else fails, null
			} else {
				cache[ id ] = null;
			}
		}

		jQuery.extend({
			cache: {},

			// Unique for each copy of jQuery on the page
			// Non-digits removed to match rinlinejQuery
			expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

			// The following elements throw uncatchable exceptions if you
			// attempt to add expando properties to them.
			noData: {
				"embed": true,
				// Ban all objects except for Flash (which handle expandos)
				"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
				"applet": true
			},

			hasData: function( elem ) {
				elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
				return !!elem && !isEmptyDataObject( elem );
			},

			data: function( elem, name, data ) {
				return internalData( elem, name, data );
			},

			removeData: function( elem, name ) {
				return internalRemoveData( elem, name );
			},

			// For internal use only.
			_data: function( elem, name, data ) {
				return internalData( elem, name, data, true );
			},

			_removeData: function( elem, name ) {
				return internalRemoveData( elem, name, true );
			},

			// A method for determining if a DOM node can handle the data expando
			acceptData: function( elem ) {
				// Do not set data on non-element because it will not be cleared (#8335).
				if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
					return false;
				}

				var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

				// nodes accept data unless otherwise specified; rejection can be conditional
				return !noData || noData !== true && elem.getAttribute("classid") === noData;
			}
		});

		jQuery.fn.extend({
			data: function( key, value ) {
				var attrs, name,
					elem = this[0],
					i = 0,
					data = null;

				// Gets all values
				if ( key === undefined ) {
					if ( this.length ) {
						data = jQuery.data( elem );

						if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
							attrs = elem.attributes;
							for ( ; i < attrs.length; i++ ) {
								name = attrs[i].name;

								if ( !name.indexOf( "data-" ) ) {
									name = jQuery.camelCase( name.slice(5) );

									dataAttr( elem, name, data[ name ] );
								}
							}
							jQuery._data( elem, "parsedAttrs", true );
						}
					}

					return data;
				}

				// Sets multiple values
				if ( typeof key === "object" ) {
					return this.each(function() {
						jQuery.data( this, key );
					});
				}

				return jQuery.access( this, function( value ) {

					if ( value === undefined ) {
						// Try to fetch any internally stored data first
						return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
					}

					this.each(function() {
						jQuery.data( this, key, value );
					});
				}, null, value, arguments.length > 1, null, true );
			},

			removeData: function( key ) {
				return this.each(function() {
					jQuery.removeData( this, key );
				});
			}
		});

		function dataAttr( elem, key, data ) {
			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if ( data === undefined && elem.nodeType === 1 ) {

				var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

				data = elem.getAttribute( name );

				if ( typeof data === "string" ) {
					try {
						data = data === "true" ? true :
							data === "false" ? false :
								data === "null" ? null :
									// Only convert to a number if it doesn't change the string
									+data + "" === data ? +data :
										rbrace.test( data ) ? jQuery.parseJSON( data ) :
											data;
					} catch( e ) {}

					// Make sure we set the data so it isn't changed later
					jQuery.data( elem, key, data );

				} else {
					data = undefined;
				}
			}

			return data;
		}

	// checks a cache object for emptiness
		function isEmptyDataObject( obj ) {
			var name;
			for ( name in obj ) {

				// if the public data object is empty, the private is still empty
				if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
					continue;
				}
				if ( name !== "toJSON" ) {
					return false;
				}
			}

			return true;
		}
		jQuery.extend({
			queue: function( elem, type, data ) {
				var queue;

				if ( elem ) {
					type = ( type || "fx" ) + "queue";
					queue = jQuery._data( elem, type );

					// Speed up dequeue by getting out quickly if this is just a lookup
					if ( data ) {
						if ( !queue || jQuery.isArray(data) ) {
							queue = jQuery._data( elem, type, jQuery.makeArray(data) );
						} else {
							queue.push( data );
						}
					}
					return queue || [];
				}
			},

			dequeue: function( elem, type ) {
				type = type || "fx";

				var queue = jQuery.queue( elem, type ),
					startLength = queue.length,
					fn = queue.shift(),
					hooks = jQuery._queueHooks( elem, type ),
					next = function() {
						jQuery.dequeue( elem, type );
					};

				// If the fx queue is dequeued, always remove the progress sentinel
				if ( fn === "inprogress" ) {
					fn = queue.shift();
					startLength--;
				}

				hooks.cur = fn;
				if ( fn ) {

					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if ( type === "fx" ) {
						queue.unshift( "inprogress" );
					}

					// clear up the last queue stop function
					delete hooks.stop;
					fn.call( elem, next, hooks );
				}

				if ( !startLength && hooks ) {
					hooks.empty.fire();
				}
			},

			// not intended for public consumption - generates a queueHooks object, or returns the current one
			_queueHooks: function( elem, type ) {
				var key = type + "queueHooks";
				return jQuery._data( elem, key ) || jQuery._data( elem, key, {
						empty: jQuery.Callbacks("once memory").add(function() {
							jQuery._removeData( elem, type + "queue" );
							jQuery._removeData( elem, key );
						})
					});
			}
		});

		jQuery.fn.extend({
			queue: function( type, data ) {
				var setter = 2;

				if ( typeof type !== "string" ) {
					data = type;
					type = "fx";
					setter--;
				}

				if ( arguments.length < setter ) {
					return jQuery.queue( this[0], type );
				}

				return data === undefined ?
					this :
					this.each(function() {
						var queue = jQuery.queue( this, type, data );

						// ensure a hooks for this queue
						jQuery._queueHooks( this, type );

						if ( type === "fx" && queue[0] !== "inprogress" ) {
							jQuery.dequeue( this, type );
						}
					});
			},
			dequeue: function( type ) {
				return this.each(function() {
					jQuery.dequeue( this, type );
				});
			},
			// Based off of the plugin by Clint Helfers, with permission.
			// http://blindsignals.com/index.php/2009/07/jquery-delay/
			delay: function( time, type ) {
				time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
				type = type || "fx";

				return this.queue( type, function( next, hooks ) {
					var timeout = setTimeout( next, time );
					hooks.stop = function() {
						clearTimeout( timeout );
					};
				});
			},
			clearQueue: function( type ) {
				return this.queue( type || "fx", [] );
			},
			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function( type, obj ) {
				var tmp,
					count = 1,
					defer = jQuery.Deferred(),
					elements = this,
					i = this.length,
					resolve = function() {
						if ( !( --count ) ) {
							defer.resolveWith( elements, [ elements ] );
						}
					};

				if ( typeof type !== "string" ) {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while( i-- ) {
					tmp = jQuery._data( elements[ i ], type + "queueHooks" );
					if ( tmp && tmp.empty ) {
						count++;
						tmp.empty.add( resolve );
					}
				}
				resolve();
				return defer.promise( obj );
			}
		});
		var nodeHook, boolHook,
			rclass = /[\t\r\n]/g,
			rreturn = /\r/g,
			rfocusable = /^(?:input|select|textarea|button|object)$/i,
			rclickable = /^(?:a|area)$/i,
			rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
			ruseDefault = /^(?:checked|selected)$/i,
			getSetAttribute = jQuery.support.getSetAttribute,
			getSetInput = jQuery.support.input;

		jQuery.fn.extend({
			attr: function( name, value ) {
				return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
			},

			removeAttr: function( name ) {
				return this.each(function() {
					jQuery.removeAttr( this, name );
				});
			},

			prop: function( name, value ) {
				return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
			},

			removeProp: function( name ) {
				name = jQuery.propFix[ name ] || name;
				return this.each(function() {
					// try/catch handles cases where IE balks (such as removing a property on window)
					try {
						this[ name ] = undefined;
						delete this[ name ];
					} catch( e ) {}
				});
			},

			addClass: function( value ) {
				var classes, elem, cur, clazz, j,
					i = 0,
					len = this.length,
					proceed = typeof value === "string" && value;

				if ( jQuery.isFunction( value ) ) {
					return this.each(function( j ) {
						jQuery( this ).addClass( value.call( this, j, this.className ) );
					});
				}

				if ( proceed ) {
					// The disjunction here is for better compressibility (see removeClass)
					classes = ( value || "" ).match( core_rnotwhite ) || [];

					for ( ; i < len; i++ ) {
						elem = this[ i ];
						cur = elem.nodeType === 1 && ( elem.className ?
									( " " + elem.className + " " ).replace( rclass, " " ) :
									" "
							);

						if ( cur ) {
							j = 0;
							while ( (clazz = classes[j++]) ) {
								if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
									cur += clazz + " ";
								}
							}
							elem.className = jQuery.trim( cur );

						}
					}
				}

				return this;
			},

			removeClass: function( value ) {
				var classes, elem, cur, clazz, j,
					i = 0,
					len = this.length,
					proceed = arguments.length === 0 || typeof value === "string" && value;

				if ( jQuery.isFunction( value ) ) {
					return this.each(function( j ) {
						jQuery( this ).removeClass( value.call( this, j, this.className ) );
					});
				}
				if ( proceed ) {
					classes = ( value || "" ).match( core_rnotwhite ) || [];

					for ( ; i < len; i++ ) {
						elem = this[ i ];
						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && ( elem.className ?
									( " " + elem.className + " " ).replace( rclass, " " ) :
									""
							);

						if ( cur ) {
							j = 0;
							while ( (clazz = classes[j++]) ) {
								// Remove *all* instances
								while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
									cur = cur.replace( " " + clazz + " ", " " );
								}
							}
							elem.className = value ? jQuery.trim( cur ) : "";
						}
					}
				}

				return this;
			},

			toggleClass: function( value, stateVal ) {
				var type = typeof value,
					isBool = typeof stateVal === "boolean";

				if ( jQuery.isFunction( value ) ) {
					return this.each(function( i ) {
						jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
					});
				}

				return this.each(function() {
					if ( type === "string" ) {
						// toggle individual class names
						var className,
							i = 0,
							self = jQuery( this ),
							state = stateVal,
							classNames = value.match( core_rnotwhite ) || [];

						while ( (className = classNames[ i++ ]) ) {
							// check each className given, space separated list
							state = isBool ? state : !self.hasClass( className );
							self[ state ? "addClass" : "removeClass" ]( className );
						}

						// Toggle whole class name
					} else if ( type === core_strundefined || type === "boolean" ) {
						if ( this.className ) {
							// store className if set
							jQuery._data( this, "__className__", this.className );
						}

						// If the element has a class name or if we're passed "false",
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
					}
				});
			},

			hasClass: function( selector ) {
				var className = " " + selector + " ",
					i = 0,
					l = this.length;
				for ( ; i < l; i++ ) {
					if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
						return true;
					}
				}

				return false;
			},

			val: function( value ) {
				var ret, hooks, isFunction,
					elem = this[0];

				if ( !arguments.length ) {
					if ( elem ) {
						hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

						if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
							return ret;
						}

						ret = elem.value;

						return typeof ret === "string" ?
							// handle most common string cases
							ret.replace(rreturn, "") :
							// handle cases where value is null/undef or number
							ret == null ? "" : ret;
					}

					return;
				}

				isFunction = jQuery.isFunction( value );

				return this.each(function( i ) {
					var val,
						self = jQuery(this);

					if ( this.nodeType !== 1 ) {
						return;
					}

					if ( isFunction ) {
						val = value.call( this, i, self.val() );
					} else {
						val = value;
					}

					// Treat null/undefined as ""; convert numbers to string
					if ( val == null ) {
						val = "";
					} else if ( typeof val === "number" ) {
						val += "";
					} else if ( jQuery.isArray( val ) ) {
						val = jQuery.map(val, function ( value ) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

					// If set returns undefined, fall back to normal setting
					if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function( elem ) {
						// attributes.value is undefined in Blackberry 4.7 but
						// uses .value. See #6932
						var val = elem.attributes.value;
						return !val || val.specified ? elem.value : elem.text;
					}
				},
				select: {
					get: function( elem ) {
						var value, option,
							options = elem.options,
							index = elem.selectedIndex,
							one = elem.type === "select-one" || index < 0,
							values = one ? null : [],
							max = one ? index + 1 : options.length,
							i = index < 0 ?
								max :
								one ? index : 0;

						// Loop through all the selected options
						for ( ; i < max; i++ ) {
							option = options[ i ];

							// oldIE doesn't update selected after form reset (#2551)
							if ( ( option.selected || i === index ) &&
									// Don't return options that are disabled or in a disabled optgroup
								( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

								// Get the specific value for the option
								value = jQuery( option ).val();

								// We don't need an array for one selects
								if ( one ) {
									return value;
								}

								// Multi-Selects return an array
								values.push( value );
							}
						}

						return values;
					},

					set: function( elem, value ) {
						var values = jQuery.makeArray( value );

						jQuery(elem).find("option").each(function() {
							this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
						});

						if ( !values.length ) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			},

			attr: function( elem, name, value ) {
				var hooks, notxml, ret,
					nType = elem.nodeType;

				// don't get/set attributes on text, comment and attribute nodes
				if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
					return;
				}

				// Fallback to prop when attributes are not supported
				if ( typeof elem.getAttribute === core_strundefined ) {
					return jQuery.prop( elem, name, value );
				}

				notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

				// All attributes are lowercase
				// Grab necessary hook if one is defined
				if ( notxml ) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
				}

				if ( value !== undefined ) {

					if ( value === null ) {
						jQuery.removeAttr( elem, name );

					} else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
						return ret;

					} else {
						elem.setAttribute( name, value + "" );
						return value;
					}

				} else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
					return ret;

				} else {

					// In IE9+, Flash objects don't have .getAttribute (#12945)
					// Support: IE9+
					if ( typeof elem.getAttribute !== core_strundefined ) {
						ret =  elem.getAttribute( name );
					}

					// Non-existent attributes return null, we normalize to undefined
					return ret == null ?
						undefined :
						ret;
				}
			},

			removeAttr: function( elem, value ) {
				var name, propName,
					i = 0,
					attrNames = value && value.match( core_rnotwhite );

				if ( attrNames && elem.nodeType === 1 ) {
					while ( (name = attrNames[i++]) ) {
						propName = jQuery.propFix[ name ] || name;

						// Boolean attributes get special treatment (#10870)
						if ( rboolean.test( name ) ) {
							// Set corresponding property to false for boolean attributes
							// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
							if ( !getSetAttribute && ruseDefault.test( name ) ) {
								elem[ jQuery.camelCase( "default-" + name ) ] =
									elem[ propName ] = false;
							} else {
								elem[ propName ] = false;
							}

							// See #9699 for explanation of this approach (setting first, then removal)
						} else {
							jQuery.attr( elem, name, "" );
						}

						elem.removeAttribute( getSetAttribute ? name : propName );
					}
				}
			},

			attrHooks: {
				type: {
					set: function( elem, value ) {
						if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
							// Setting the type on a radio button after the value resets the value in IE6-9
							// Reset value to default in case type is set after value during creation
							var val = elem.value;
							elem.setAttribute( "type", value );
							if ( val ) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			},

			propFix: {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},

			prop: function( elem, name, value ) {
				var ret, hooks, notxml,
					nType = elem.nodeType;

				// don't get/set properties on text, comment and attribute nodes
				if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
					return;
				}

				notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

				if ( notxml ) {
					// Fix name and attach hooks
					name = jQuery.propFix[ name ] || name;
					hooks = jQuery.propHooks[ name ];
				}

				if ( value !== undefined ) {
					if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
						return ret;

					} else {
						return ( elem[ name ] = value );
					}

				} else {
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
						return ret;

					} else {
						return elem[ name ];
					}
				}
			},

			propHooks: {
				tabIndex: {
					get: function( elem ) {
						// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
						// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						var attributeNode = elem.getAttributeNode("tabindex");

						return attributeNode && attributeNode.specified ?
							parseInt( attributeNode.value, 10 ) :
							rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								undefined;
					}
				}
			}
		});

	// Hook for boolean attributes
		boolHook = {
			get: function( elem, name ) {
				var
				// Use .prop to determine if this attribute is understood as boolean
					prop = jQuery.prop( elem, name ),

				// Fetch it accordingly
					attr = typeof prop === "boolean" && elem.getAttribute( name ),
					detail = typeof prop === "boolean" ?

						getSetInput && getSetAttribute ?
						attr != null :
							// oldIE fabricates an empty string for missing boolean attributes
							// and conflates checked/selected into attroperties
							ruseDefault.test( name ) ?
								elem[ jQuery.camelCase( "default-" + name ) ] :
								!!attr :

						// fetch an attribute node for properties not recognized as boolean
						elem.getAttributeNode( name );

				return detail && detail.value !== false ?
					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
					// IE<8 needs the *property* name
					elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

					// Use defaultChecked and defaultSelected for oldIE
				} else {
					elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
				}

				return name;
			}
		};

	// fix oldIE value attroperty
		if ( !getSetInput || !getSetAttribute ) {
			jQuery.attrHooks.value = {
				get: function( elem, name ) {
					var ret = elem.getAttributeNode( name );
					return jQuery.nodeName( elem, "input" ) ?

						// Ignore the value *property* by using defaultValue
						elem.defaultValue :

						ret && ret.specified ? ret.value : undefined;
				},
				set: function( elem, value, name ) {
					if ( jQuery.nodeName( elem, "input" ) ) {
						// Does not return so that setAttribute is also used
						elem.defaultValue = value;
					} else {
						// Use nodeHook if defined (#1954); otherwise setAttribute is fine
						return nodeHook && nodeHook.set( elem, value, name );
					}
				}
			};
		}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
		if ( !getSetAttribute ) {

			// Use this for any attribute in IE6/7
			// This fixes almost every IE6/7 issue
			nodeHook = jQuery.valHooks.button = {
				get: function( elem, name ) {
					var ret = elem.getAttributeNode( name );
					return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
						ret.value :
						undefined;
				},
				set: function( elem, value, name ) {
					// Set the existing or create a new attribute node
					var ret = elem.getAttributeNode( name );
					if ( !ret ) {
						elem.setAttributeNode(
							(ret = elem.ownerDocument.createAttribute( name ))
						);
					}

					ret.value = value += "";

					// Break association with cloned elements by also using setAttribute (#9646)
					return name === "value" || value === elem.getAttribute( name ) ?
						value :
						undefined;
				}
			};

			// Set contenteditable to false on removals(#10429)
			// Setting to empty string throws an error as an invalid value
			jQuery.attrHooks.contenteditable = {
				get: nodeHook.get,
				set: function( elem, value, name ) {
					nodeHook.set( elem, value === "" ? false : value, name );
				}
			};

			// Set width and height to auto instead of 0 on empty string( Bug #8150 )
			// This is for removals
			jQuery.each([ "width", "height" ], function( i, name ) {
				jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
					set: function( elem, value ) {
						if ( value === "" ) {
							elem.setAttribute( name, "auto" );
							return value;
						}
					}
				});
			});
		}


	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if ( !jQuery.support.hrefNormalized ) {
			jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
				jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
					get: function( elem ) {
						var ret = elem.getAttribute( name, 2 );
						return ret == null ? undefined : ret;
					}
				});
			});

			// href/src property should get the full normalized URL (#10299/#12915)
			jQuery.each([ "href", "src" ], function( i, name ) {
				jQuery.propHooks[ name ] = {
					get: function( elem ) {
						return elem.getAttribute( name, 4 );
					}
				};
			});
		}

		if ( !jQuery.support.style ) {
			jQuery.attrHooks.style = {
				get: function( elem ) {
					// Return undefined in the case of empty string
					// Note: IE uppercases css property names, but if we were to .toLowerCase()
					// .cssText, that would destroy case senstitivity in URL's, like in "background"
					return elem.style.cssText || undefined;
				},
				set: function( elem, value ) {
					return ( elem.style.cssText = value + "" );
				}
			};
		}

	// Safari mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
		if ( !jQuery.support.optSelected ) {
			jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
				get: function( elem ) {
					var parent = elem.parentNode;

					if ( parent ) {
						parent.selectedIndex;

						// Make sure that it also works with optgroups, see #5701
						if ( parent.parentNode ) {
							parent.parentNode.selectedIndex;
						}
					}
					return null;
				}
			});
		}

	// IE6/7 call enctype encoding
		if ( !jQuery.support.enctype ) {
			jQuery.propFix.enctype = "encoding";
		}

	// Radios and checkboxes getter/setter
		if ( !jQuery.support.checkOn ) {
			jQuery.each([ "radio", "checkbox" ], function() {
				jQuery.valHooks[ this ] = {
					get: function( elem ) {
						// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
						return elem.getAttribute("value") === null ? "on" : elem.value;
					}
				};
			});
		}
		jQuery.each([ "radio", "checkbox" ], function() {
			jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
				set: function( elem, value ) {
					if ( jQuery.isArray( value ) ) {
						return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
					}
				}
			});
		});
		var rformElems = /^(?:input|select|textarea)$/i,
			rkeyEvent = /^key/,
			rmouseEvent = /^(?:mouse|contextmenu)|click/,
			rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
			rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

		function returnTrue() {
			return true;
		}

		function returnFalse() {
			return false;
		}

		/*
		 * Helper functions for managing events -- not part of the public interface.
		 * Props to Dean Edwards' addEvent library for many of the ideas.
		 */
		jQuery.event = {

			global: {},

			add: function( elem, types, handler, data, selector ) {
				var tmp, events, t, handleObjIn,
					special, eventHandle, handleObj,
					handlers, type, namespaces, origType,
					elemData = jQuery._data( elem );

				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if ( !elemData ) {
					return;
				}

				// Caller can pass in an object of custom data in lieu of the handler
				if ( handler.handler ) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				// Make sure that the handler has a unique ID, used to find/remove it later
				if ( !handler.guid ) {
					handler.guid = jQuery.guid++;
				}

				// Init the element's event structure and main handler, if this is the first
				if ( !(events = elemData.events) ) {
					events = elemData.events = {};
				}
				if ( !(eventHandle = elemData.handle) ) {
					eventHandle = elemData.handle = function( e ) {
						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
							jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
							undefined;
					};
					// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
					eventHandle.elem = elem;
				}

				// Handle multiple events separated by a space
				// jQuery(...).bind("mouseover mouseout", fn);
				types = ( types || "" ).match( core_rnotwhite ) || [""];
				t = types.length;
				while ( t-- ) {
					tmp = rtypenamespace.exec( types[t] ) || [];
					type = origType = tmp[1];
					namespaces = ( tmp[2] || "" ).split( "." ).sort();

					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[ type ] || {};

					// If selector defined, determine special event api type, otherwise given type
					type = ( selector ? special.delegateType : special.bindType ) || type;

					// Update special based on newly reset type
					special = jQuery.event.special[ type ] || {};

					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
						namespace: namespaces.join(".")
					}, handleObjIn );

					// Init the event handler queue if we're the first
					if ( !(handlers = events[ type ]) ) {
						handlers = events[ type ] = [];
						handlers.delegateCount = 0;

						// Only use addEventListener/attachEvent if the special events handler returns false
						if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
							// Bind the global event handler to the element
							if ( elem.addEventListener ) {
								elem.addEventListener( type, eventHandle, false );

							} else if ( elem.attachEvent ) {
								elem.attachEvent( "on" + type, eventHandle );
							}
						}
					}

					if ( special.add ) {
						special.add.call( elem, handleObj );

						if ( !handleObj.handler.guid ) {
							handleObj.handler.guid = handler.guid;
						}
					}

					// Add to the element's handler list, delegates in front
					if ( selector ) {
						handlers.splice( handlers.delegateCount++, 0, handleObj );
					} else {
						handlers.push( handleObj );
					}

					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[ type ] = true;
				}

				// Nullify elem to prevent memory leaks in IE
				elem = null;
			},

			// Detach an event or set of events from an element
			remove: function( elem, types, handler, selector, mappedTypes ) {
				var j, handleObj, tmp,
					origCount, t, events,
					special, handlers, type,
					namespaces, origType,
					elemData = jQuery.hasData( elem ) && jQuery._data( elem );

				if ( !elemData || !(events = elemData.events) ) {
					return;
				}

				// Once for each type.namespace in types; type may be omitted
				types = ( types || "" ).match( core_rnotwhite ) || [""];
				t = types.length;
				while ( t-- ) {
					tmp = rtypenamespace.exec( types[t] ) || [];
					type = origType = tmp[1];
					namespaces = ( tmp[2] || "" ).split( "." ).sort();

					// Unbind all events (on this namespace, if provided) for the element
					if ( !type ) {
						for ( type in events ) {
							jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
						}
						continue;
					}

					special = jQuery.event.special[ type ] || {};
					type = ( selector ? special.delegateType : special.bindType ) || type;
					handlers = events[ type ] || [];
					tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

					// Remove matching events
					origCount = j = handlers.length;
					while ( j-- ) {
						handleObj = handlers[ j ];

						if ( ( mappedTypes || origType === handleObj.origType ) &&
							( !handler || handler.guid === handleObj.guid ) &&
							( !tmp || tmp.test( handleObj.namespace ) ) &&
							( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
							handlers.splice( j, 1 );

							if ( handleObj.selector ) {
								handlers.delegateCount--;
							}
							if ( special.remove ) {
								special.remove.call( elem, handleObj );
							}
						}
					}

					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if ( origCount && !handlers.length ) {
						if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
							jQuery.removeEvent( elem, type, elemData.handle );
						}

						delete events[ type ];
					}
				}

				// Remove the expando if it's no longer used
				if ( jQuery.isEmptyObject( events ) ) {
					delete elemData.handle;

					// removeData also checks for emptiness and clears the expando if empty
					// so use it instead of delete
					jQuery._removeData( elem, "events" );
				}
			},

			trigger: function( event, data, elem, onlyHandlers ) {
				var handle, ontype, cur,
					bubbleType, special, tmp, i,
					eventPath = [ elem || document ],
					type = core_hasOwn.call( event, "type" ) ? event.type : event,
					namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

				cur = tmp = elem = elem || document;

				// Don't do events on text and comment nodes
				if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
					return;
				}

				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
					return;
				}

				if ( type.indexOf(".") >= 0 ) {
					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[ jQuery.expando ] ?
					event :
					new jQuery.Event( type, typeof event === "object" && event );

				event.isTrigger = true;
				event.namespace = namespaces.join(".");
				event.namespace_re = event.namespace ?
					new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
					null;

				// Clean up the event in case it is being reused
				event.result = undefined;
				if ( !event.target ) {
					event.target = elem;
				}

				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ?
					[ event ] :
					jQuery.makeArray( data, [ event ] );

				// Allow special events to draw outside the lines
				special = jQuery.event.special[ type ] || {};
				if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
					return;
				}

				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

					bubbleType = special.delegateType || type;
					if ( !rfocusMorph.test( bubbleType + type ) ) {
						cur = cur.parentNode;
					}
					for ( ; cur; cur = cur.parentNode ) {
						eventPath.push( cur );
						tmp = cur;
					}

					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if ( tmp === (elem.ownerDocument || document) ) {
						eventPath.push( tmp.defaultView || tmp.parentWindow || window );
					}
				}

				// Fire handlers on the event path
				i = 0;
				while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

					event.type = i > 1 ?
						bubbleType :
					special.bindType || type;

					// jQuery handler
					handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
					if ( handle ) {
						handle.apply( cur, data );
					}

					// Native handler
					handle = ontype && cur[ ontype ];
					if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
						event.preventDefault();
					}
				}
				event.type = type;

				// If nobody prevented the default action, do it now
				if ( !onlyHandlers && !event.isDefaultPrevented() ) {

					if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
						!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

						// Call a native DOM method on the target with the same name name as the event.
						// Can't use an .isFunction() check here because IE6/7 fails that test.
						// Don't do default actions on window, that's where global variables be (#6170)
						if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ ontype ];

							if ( tmp ) {
								elem[ ontype ] = null;
							}

							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							try {
								elem[ type ]();
							} catch ( e ) {
								// IE<9 dies on focus/blur to hidden element (#1486,#12518)
								// only reproducible on winXP IE8 native, not IE9 in IE8 mode
							}
							jQuery.event.triggered = undefined;

							if ( tmp ) {
								elem[ ontype ] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			dispatch: function( event ) {

				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix( event );

				var i, ret, handleObj, matched, j,
					handlerQueue = [],
					args = core_slice.call( arguments ),
					handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
					special = jQuery.event.special[ event.type ] || {};

				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;
				event.delegateTarget = this;

				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
					return;
				}

				// Determine handlers
				handlerQueue = jQuery.event.handlers.call( this, event, handlers );

				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
					event.currentTarget = matched.elem;

					j = 0;
					while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

						// Triggered event must either 1) have no namespace, or
						// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
						if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );

							if ( ret !== undefined ) {
								if ( (event.result = ret) === false ) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				// Call the postDispatch hook for the mapped type
				if ( special.postDispatch ) {
					special.postDispatch.call( this, event );
				}

				return event.result;
			},

			handlers: function( event, handlers ) {
				var sel, handleObj, matches, i,
					handlerQueue = [],
					delegateCount = handlers.delegateCount,
					cur = event.target;

				// Find delegate handlers
				// Black-hole SVG <use> instance trees (#13180)
				// Avoid non-left-click bubbling in Firefox (#3861)
				if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

					for ( ; cur != this; cur = cur.parentNode || this ) {

						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
							matches = [];
							for ( i = 0; i < delegateCount; i++ ) {
								handleObj = handlers[ i ];

								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";

								if ( matches[ sel ] === undefined ) {
									matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
										jQuery.find( sel, this, null, [ cur ] ).length;
								}
								if ( matches[ sel ] ) {
									matches.push( handleObj );
								}
							}
							if ( matches.length ) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}

				// Add the remaining (directly-bound) handlers
				if ( delegateCount < handlers.length ) {
					handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
				}

				return handlerQueue;
			},

			fix: function( event ) {
				if ( event[ jQuery.expando ] ) {
					return event;
				}

				// Create a writable copy of the event object and normalize some properties
				var i, prop, copy,
					type = event.type,
					originalEvent = event,
					fixHook = this.fixHooks[ type ];

				if ( !fixHook ) {
					this.fixHooks[ type ] = fixHook =
						rmouseEvent.test( type ) ? this.mouseHooks :
							rkeyEvent.test( type ) ? this.keyHooks :
							{};
				}
				copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

				event = new jQuery.Event( originalEvent );

				i = copy.length;
				while ( i-- ) {
					prop = copy[ i ];
					event[ prop ] = originalEvent[ prop ];
				}

				// Support: IE<9
				// Fix target property (#1925)
				if ( !event.target ) {
					event.target = originalEvent.srcElement || document;
				}

				// Support: Chrome 23+, Safari?
				// Target should not be a text node (#504, #13143)
				if ( event.target.nodeType === 3 ) {
					event.target = event.target.parentNode;
				}

				// Support: IE<9
				// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
				event.metaKey = !!event.metaKey;

				return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
			},

			// Includes some event props shared by KeyEvent and MouseEvent
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

			fixHooks: {},

			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function( event, original ) {

					// Add which for key events
					if ( event.which == null ) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}

					return event;
				}
			},

			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function( event, original ) {
					var body, eventDoc, doc,
						button = original.button,
						fromElement = original.fromElement;

					// Calculate pageX/Y if missing and clientX/Y available
					if ( event.pageX == null && original.clientX != null ) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;

						event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
						event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
					}

					// Add relatedTarget, if necessary
					if ( !event.relatedTarget && fromElement ) {
						event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
					}

					// Add which for click: 1 === left; 2 === middle; 3 === right
					// Note: button is not normalized, so don't use it
					if ( !event.which && button !== undefined ) {
						event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
					}

					return event;
				}
			},

			special: {
				load: {
					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				click: {
					// For checkbox, fire native event so checked state will be right
					trigger: function() {
						if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
							this.click();
							return false;
						}
					}
				},
				focus: {
					// Fire native event if possible so blur/focus sequence is correct
					trigger: function() {
						if ( this !== document.activeElement && this.focus ) {
							try {
								this.focus();
								return false;
							} catch ( e ) {
								// Support: IE<9
								// If we error on focus to hidden element (#1486, #12518),
								// let .trigger() run the handlers
							}
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						if ( this === document.activeElement && this.blur ) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},

				beforeunload: {
					postDispatch: function( event ) {

						// Even when returnValue equals to undefined Firefox will still show alert
						if ( event.result !== undefined ) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			},

			simulate: function( type, elem, event, bubble ) {
				// Piggyback on a donor event to simulate a different one.
				// Fake originalEvent to avoid donor's stopPropagation, but if the
				// simulated event prevents default then we do the same on the donor.
				var e = jQuery.extend(
					new jQuery.Event(),
					event,
					{ type: type,
						isSimulated: true,
						originalEvent: {}
					}
				);
				if ( bubble ) {
					jQuery.event.trigger( e, null, elem );
				} else {
					jQuery.event.dispatch.call( elem, e );
				}
				if ( e.isDefaultPrevented() ) {
					event.preventDefault();
				}
			}
		};

		jQuery.removeEvent = document.removeEventListener ?
			function( elem, type, handle ) {
				if ( elem.removeEventListener ) {
					elem.removeEventListener( type, handle, false );
				}
			} :
			function( elem, type, handle ) {
				var name = "on" + type;

				if ( elem.detachEvent ) {

					// #8545, #7054, preventing memory leaks for custom events in IE6-8
					// detachEvent needed property on element, by name of that event, to properly expose it to GC
					if ( typeof elem[ name ] === core_strundefined ) {
						elem[ name ] = null;
					}

					elem.detachEvent( name, handle );
				}
			};

		jQuery.Event = function( src, props ) {
			// Allow instantiation without the 'new' keyword
			if ( !(this instanceof jQuery.Event) ) {
				return new jQuery.Event( src, props );
			}

			// Event object
			if ( src && src.type ) {
				this.originalEvent = src;
				this.type = src.type;

				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
				src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

				// Event type
			} else {
				this.type = src;
			}

			// Put explicitly provided properties onto the event object
			if ( props ) {
				jQuery.extend( this, props );
			}

			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();

			// Mark it as fixed
			this[ jQuery.expando ] = true;
		};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,

			preventDefault: function() {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;
				if ( !e ) {
					return;
				}

				// If preventDefault exists, run it on the original event
				if ( e.preventDefault ) {
					e.preventDefault();

					// Support: IE
					// Otherwise set the returnValue property of the original event to false
				} else {
					e.returnValue = false;
				}
			},
			stopPropagation: function() {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;
				if ( !e ) {
					return;
				}
				// If stopPropagation exists, run it on the original event
				if ( e.stopPropagation ) {
					e.stopPropagation();
				}

				// Support: IE
				// Set the cancelBubble property of the original event to true
				e.cancelBubble = true;
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = returnTrue;
				this.stopPropagation();
			}
		};

	// Create mouseenter/leave events using mouseover/out and event-time checks
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function( orig, fix ) {
			jQuery.event.special[ orig ] = {
				delegateType: fix,
				bindType: fix,

				handle: function( event ) {
					var ret,
						target = this,
						related = event.relatedTarget,
						handleObj = event.handleObj;

					// For mousenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply( this, arguments );
						event.type = fix;
					}
					return ret;
				}
			};
		});

	// IE submit delegation
		if ( !jQuery.support.submitBubbles ) {

			jQuery.event.special.submit = {
				setup: function() {
					// Only need this for delegated form submit events
					if ( jQuery.nodeName( this, "form" ) ) {
						return false;
					}

					// Lazy-add a submit handler when a descendant form may potentially be submitted
					jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
						// Node name check avoids a VML-related crash in IE (#9807)
						var elem = e.target,
							form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
						if ( form && !jQuery._data( form, "submitBubbles" ) ) {
							jQuery.event.add( form, "submit._submit", function( event ) {
								event._submit_bubble = true;
							});
							jQuery._data( form, "submitBubbles", true );
						}
					});
					// return undefined since we don't need an event listener
				},

				postDispatch: function( event ) {
					// If form was submitted by the user, bubble the event up the tree
					if ( event._submit_bubble ) {
						delete event._submit_bubble;
						if ( this.parentNode && !event.isTrigger ) {
							jQuery.event.simulate( "submit", this.parentNode, event, true );
						}
					}
				},

				teardown: function() {
					// Only need this for delegated form submit events
					if ( jQuery.nodeName( this, "form" ) ) {
						return false;
					}

					// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
					jQuery.event.remove( this, "._submit" );
				}
			};
		}

	// IE change delegation and checkbox/radio fix
		if ( !jQuery.support.changeBubbles ) {

			jQuery.event.special.change = {

				setup: function() {

					if ( rformElems.test( this.nodeName ) ) {
						// IE doesn't fire change on a check/radio until blur; trigger it on click
						// after a propertychange. Eat the blur-change in special.change.handle.
						// This still fires onchange a second time for check/radio after blur.
						if ( this.type === "checkbox" || this.type === "radio" ) {
							jQuery.event.add( this, "propertychange._change", function( event ) {
								if ( event.originalEvent.propertyName === "checked" ) {
									this._just_changed = true;
								}
							});
							jQuery.event.add( this, "click._change", function( event ) {
								if ( this._just_changed && !event.isTrigger ) {
									this._just_changed = false;
								}
								// Allow triggered, simulated change events (#11500)
								jQuery.event.simulate( "change", this, event, true );
							});
						}
						return false;
					}
					// Delegated event; lazy-add a change handler on descendant inputs
					jQuery.event.add( this, "beforeactivate._change", function( e ) {
						var elem = e.target;

						if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
							jQuery.event.add( elem, "change._change", function( event ) {
								if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
									jQuery.event.simulate( "change", this.parentNode, event, true );
								}
							});
							jQuery._data( elem, "changeBubbles", true );
						}
					});
				},

				handle: function( event ) {
					var elem = event.target;

					// Swallow native change events from checkbox/radio, we already triggered them above
					if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
						return event.handleObj.handler.apply( this, arguments );
					}
				},

				teardown: function() {
					jQuery.event.remove( this, "._change" );

					return !rformElems.test( this.nodeName );
				}
			};
		}

	// Create "bubbling" focus and blur events
		if ( !jQuery.support.focusinBubbles ) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

				// Attach a single capturing handler while someone wants focusin/focusout
				var attaches = 0,
					handler = function( event ) {
						jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
					};

				jQuery.event.special[ fix ] = {
					setup: function() {
						if ( attaches++ === 0 ) {
							document.addEventListener( orig, handler, true );
						}
					},
					teardown: function() {
						if ( --attaches === 0 ) {
							document.removeEventListener( orig, handler, true );
						}
					}
				};
			});
		}

		jQuery.fn.extend({

			on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
				var type, origFn;

				// Types can be a map of types/handlers
				if ( typeof types === "object" ) {
					// ( types-Object, selector, data )
					if ( typeof selector !== "string" ) {
						// ( types-Object, data )
						data = data || selector;
						selector = undefined;
					}
					for ( type in types ) {
						this.on( type, selector, data, types[ type ], one );
					}
					return this;
				}

				if ( data == null && fn == null ) {
					// ( types, fn )
					fn = selector;
					data = selector = undefined;
				} else if ( fn == null ) {
					if ( typeof selector === "string" ) {
						// ( types, selector, fn )
						fn = data;
						data = undefined;
					} else {
						// ( types, data, fn )
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if ( fn === false ) {
					fn = returnFalse;
				} else if ( !fn ) {
					return this;
				}

				if ( one === 1 ) {
					origFn = fn;
					fn = function( event ) {
						// Can use an empty set, since event contains the info
						jQuery().off( event );
						return origFn.apply( this, arguments );
					};
					// Use same guid so caller can remove using origFn
					fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
				}
				return this.each( function() {
					jQuery.event.add( this, types, fn, data, selector );
				});
			},
			one: function( types, selector, data, fn ) {
				return this.on( types, selector, data, fn, 1 );
			},
			off: function( types, selector, fn ) {
				var handleObj, type;
				if ( types && types.preventDefault && types.handleObj ) {
					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery( types.delegateTarget ).off(
						handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
						handleObj.selector,
						handleObj.handler
					);
					return this;
				}
				if ( typeof types === "object" ) {
					// ( types-object [, selector] )
					for ( type in types ) {
						this.off( type, selector, types[ type ] );
					}
					return this;
				}
				if ( selector === false || typeof selector === "function" ) {
					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if ( fn === false ) {
					fn = returnFalse;
				}
				return this.each(function() {
					jQuery.event.remove( this, types, fn, selector );
				});
			},

			bind: function( types, data, fn ) {
				return this.on( types, null, data, fn );
			},
			unbind: function( types, fn ) {
				return this.off( types, null, fn );
			},

			delegate: function( selector, types, data, fn ) {
				return this.on( types, selector, data, fn );
			},
			undelegate: function( selector, types, fn ) {
				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
			},

			trigger: function( type, data ) {
				return this.each(function() {
					jQuery.event.trigger( type, data, this );
				});
			},
			triggerHandler: function( type, data ) {
				var elem = this[0];
				if ( elem ) {
					return jQuery.event.trigger( type, data, elem, true );
				}
			}
		});
		/*!
		 * Sizzle CSS Selector Engine
		 * Copyright 2012 jQuery Foundation and other contributors
		 * Released under the MIT license
		 * http://sizzlejs.com/
		 */
		(function( window, undefined ) {

			var i,
				cachedruns,
				Expr,
				getText,
				isXML,
				compile,
				hasDuplicate,
				outermostContext,

			// Local document vars
				setDocument,
				document,
				docElem,
				documentIsXML,
				rbuggyQSA,
				rbuggyMatches,
				matches,
				contains,
				sortOrder,

			// Instance-specific data
				expando = "sizzle" + -(new Date()),
				preferredDoc = window.document,
				support = {},
				dirruns = 0,
				done = 0,
				classCache = createCache(),
				tokenCache = createCache(),
				compilerCache = createCache(),

			// General-purpose constants
				strundefined = typeof undefined,
				MAX_NEGATIVE = 1 << 31,

			// Array methods
				arr = [],
				pop = arr.pop,
				push = arr.push,
				slice = arr.slice,
			// Use a stripped-down indexOf if we can't use a native one
				indexOf = arr.indexOf || function( elem ) {
						var i = 0,
							len = this.length;
						for ( ; i < len; i++ ) {
							if ( this[i] === elem ) {
								return i;
							}
						}
						return -1;
					},


			// Regular expressions

			// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
				whitespace = "[\\x20\\t\\r\\n\\f]",
			// http://www.w3.org/TR/css3-syntax/#characters
				characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

			// Loosely modeled on CSS identifier characters
			// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
			// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
				identifier = characterEncoding.replace( "w", "w#" ),

			// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
				operators = "([*^$|!~]?=)",
				attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
					"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

			// Prefer arguments quoted,
			//   then not containing pseudos/brackets,
			//   then attribute selectors/non-parenthetical expressions,
			//   then anything else
			// These preferences are here to reduce the number of selectors
			//   needing tokenize in the PSEUDO preFilter
				pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
				rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

				rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
				rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
				rpseudo = new RegExp( pseudos ),
				ridentifier = new RegExp( "^" + identifier + "$" ),

				matchExpr = {
					"ID": new RegExp( "^#(" + characterEncoding + ")" ),
					"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
					"NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
					"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
					"ATTR": new RegExp( "^" + attributes ),
					"PSEUDO": new RegExp( "^" + pseudos ),
					"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
						"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
						"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
					// For use in libraries implementing .is()
					// We use this for POS matching in `select`
					"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
						whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
				},

				rsibling = /[\x20\t\r\n\f]*[+~]/,

				rnative = /^[^{]+\{\s*\[native code/,

			// Easily-parseable/retrievable ID or TAG or CLASS selectors
				rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

				rinputs = /^(?:input|select|textarea|button)$/i,
				rheader = /^h\d$/i,

				rescape = /'|\\/g,
				rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

			// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
				runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
				funescape = function( _, escaped ) {
					var high = "0x" + escaped - 0x10000;
					// NaN means non-codepoint
					return high !== high ?
						escaped :
						// BMP codepoint
						high < 0 ?
							String.fromCharCode( high + 0x10000 ) :
							// Supplemental Plane codepoint (surrogate pair)
							String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
				};

	// Use a stripped-down slice if we can't use a native one
			try {
				slice.call( preferredDoc.documentElement.childNodes, 0 )[0].nodeType;
			} catch ( e ) {
				slice = function( i ) {
					var elem,
						results = [];
					while ( (elem = this[i++]) ) {
						results.push( elem );
					}
					return results;
				};
			}

			/**
			 * For feature detection
			 * @param {Function} fn The function to test for native support
			 */
			function isNative( fn ) {
				return rnative.test( fn + "" );
			}

			/**
			 * Create key-value caches of limited size
			 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
			 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
			 *	deleting the oldest entry
			 */
			function createCache() {
				var cache,
					keys = [];

				return (cache = function( key, value ) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if ( keys.push( key += " " ) > Expr.cacheLength ) {
						// Only keep the most recent entries
						delete cache[ keys.shift() ];
					}
					return (cache[ key ] = value);
				});
			}

			/**
			 * Mark a function for special use by Sizzle
			 * @param {Function} fn The function to mark
			 */
			function markFunction( fn ) {
				fn[ expando ] = true;
				return fn;
			}

			/**
			 * Support testing using an element
			 * @param {Function} fn Passed the created div and expects a boolean result
			 */
			function assert( fn ) {
				var div = document.createElement("div");

				try {
					return fn( div );
				} catch (e) {
					return false;
				} finally {
					// release memory in IE
					div = null;
				}
			}

			function Sizzle( selector, context, results, seed ) {
				var match, elem, m, nodeType,
				// QSA vars
					i, groups, old, nid, newContext, newSelector;

				if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
					setDocument( context );
				}

				context = context || document;
				results = results || [];

				if ( !selector || typeof selector !== "string" ) {
					return results;
				}

				if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
					return [];
				}

				if ( !documentIsXML && !seed ) {

					// Shortcuts
					if ( (match = rquickExpr.exec( selector )) ) {
						// Speed-up: Sizzle("#ID")
						if ( (m = match[1]) ) {
							if ( nodeType === 9 ) {
								elem = context.getElementById( m );
								// Check parentNode to catch when Blackberry 4.6 returns
								// nodes that are no longer in the document #6963
								if ( elem && elem.parentNode ) {
									// Handle the case where IE, Opera, and Webkit return items
									// by name instead of ID
									if ( elem.id === m ) {
										results.push( elem );
										return results;
									}
								} else {
									return results;
								}
							} else {
								// Context is not a document
								if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
									contains( context, elem ) && elem.id === m ) {
									results.push( elem );
									return results;
								}
							}

							// Speed-up: Sizzle("TAG")
						} else if ( match[2] ) {
							push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
							return results;

							// Speed-up: Sizzle(".CLASS")
						} else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
							push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
							return results;
						}
					}

					// QSA path
					if ( support.qsa && !rbuggyQSA.test(selector) ) {
						old = true;
						nid = expando;
						newContext = context;
						newSelector = nodeType === 9 && selector;

						// qSA works strangely on Element-rooted queries
						// We can work around this by specifying an extra ID on the root
						// and working up from there (Thanks to Andrew Dupont for the technique)
						// IE 8 doesn't work on object elements
						if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
							groups = tokenize( selector );

							if ( (old = context.getAttribute("id")) ) {
								nid = old.replace( rescape, "\\$&" );
							} else {
								context.setAttribute( "id", nid );
							}
							nid = "[id='" + nid + "'] ";

							i = groups.length;
							while ( i-- ) {
								groups[i] = nid + toSelector( groups[i] );
							}
							newContext = rsibling.test( selector ) && context.parentNode || context;
							newSelector = groups.join(",");
						}

						if ( newSelector ) {
							try {
								push.apply( results, slice.call( newContext.querySelectorAll(
									newSelector
								), 0 ) );
								return results;
							} catch(qsaError) {
							} finally {
								if ( !old ) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}

				// All others
				return select( selector.replace( rtrim, "$1" ), context, results, seed );
			}

			/**
			 * Detect xml
			 * @param {Element|Object} elem An element or a document
			 */
			isXML = Sizzle.isXML = function( elem ) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			/**
			 * Sets document-related variables once based on the current document
			 * @param {Element|Object} [doc] An element or document object to use to set the document
			 * @returns {Object} Returns the current document
			 */
			setDocument = Sizzle.setDocument = function( node ) {
				var doc = node ? node.ownerDocument || node : preferredDoc;

				// If no document and documentElement is available, return
				if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
					return document;
				}

				// Set our document
				document = doc;
				docElem = doc.documentElement;

				// Support tests
				documentIsXML = isXML( doc );

				// Check if getElementsByTagName("*") returns only elements
				support.tagNameNoComments = assert(function( div ) {
					div.appendChild( doc.createComment("") );
					return !div.getElementsByTagName("*").length;
				});

				// Check if attributes should be retrieved by attribute nodes
				support.attributes = assert(function( div ) {
					div.innerHTML = "<select></select>";
					var type = typeof div.lastChild.getAttribute("multiple");
					// IE8 returns a string for some attributes even when not present
					return type !== "boolean" && type !== "string";
				});

				// Check if getElementsByClassName can be trusted
				support.getByClassName = assert(function( div ) {
					// Opera can't find a second classname (in 9.6)
					div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
					if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
						return false;
					}

					// Safari 3.2 caches class attributes and doesn't catch changes
					div.lastChild.className = "e";
					return div.getElementsByClassName("e").length === 2;
				});

				// Check if getElementById returns elements by name
				// Check if getElementsByName privileges form controls or returns elements by ID
				support.getByName = assert(function( div ) {
					// Inject content
					div.id = expando + 0;
					div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
					docElem.insertBefore( div, docElem.firstChild );

					// Test
					var pass = doc.getElementsByName &&
							// buggy browsers will return fewer than the correct 2
						doc.getElementsByName( expando ).length === 2 +
							// buggy browsers will return more than the correct 0
						doc.getElementsByName( expando + 0 ).length;
					support.getIdNotName = !doc.getElementById( expando );

					// Cleanup
					docElem.removeChild( div );

					return pass;
				});

				// IE6/7 return modified attributes
				Expr.attrHandle = assert(function( div ) {
					div.innerHTML = "<a href='#'></a>";
					return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
						div.firstChild.getAttribute("href") === "#";
				}) ?
				{} :
				{
					"href": function( elem ) {
						return elem.getAttribute( "href", 2 );
					},
					"type": function( elem ) {
						return elem.getAttribute("type");
					}
				};

				// ID find and filter
				if ( support.getIdNotName ) {
					Expr.find["ID"] = function( id, context ) {
						if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
							var m = context.getElementById( id );
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							return m && m.parentNode ? [m] : [];
						}
					};
					Expr.filter["ID"] = function( id ) {
						var attrId = id.replace( runescape, funescape );
						return function( elem ) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					Expr.find["ID"] = function( id, context ) {
						if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
							var m = context.getElementById( id );

							return m ?
								m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
									[m] :
									undefined :
								[];
						}
					};
					Expr.filter["ID"] =  function( id ) {
						var attrId = id.replace( runescape, funescape );
						return function( elem ) {
							var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}

				// Tag
				Expr.find["TAG"] = support.tagNameNoComments ?
					function( tag, context ) {
						if ( typeof context.getElementsByTagName !== strundefined ) {
							return context.getElementsByTagName( tag );
						}
					} :
					function( tag, context ) {
						var elem,
							tmp = [],
							i = 0,
							results = context.getElementsByTagName( tag );

						// Filter out possible comments
						if ( tag === "*" ) {
							while ( (elem = results[i++]) ) {
								if ( elem.nodeType === 1 ) {
									tmp.push( elem );
								}
							}

							return tmp;
						}
						return results;
					};

				// Name
				Expr.find["NAME"] = support.getByName && function( tag, context ) {
						if ( typeof context.getElementsByName !== strundefined ) {
							return context.getElementsByName( name );
						}
					};

				// Class
				Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
						if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
							return context.getElementsByClassName( className );
						}
					};

				// QSA and matchesSelector support

				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];

				// qSa(:focus) reports false when true (Chrome 21),
				// no need to also add to buggyMatches since matches checks buggyQSA
				// A support test would require too much code (would include document ready)
				rbuggyQSA = [ ":focus" ];

				if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function( div ) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explictly
						// setting a boolean content attribute,
						// since its presence should be enough
						// http://bugs.jquery.com/ticket/12359
						div.innerHTML = "<select><option selected=''></option></select>";

						// IE8 - Some boolean attributes are not treated correctly
						if ( !div.querySelectorAll("[selected]").length ) {
							rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
						}

						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if ( !div.querySelectorAll(":checked").length ) {
							rbuggyQSA.push(":checked");
						}
					});

					assert(function( div ) {

						// Opera 10-12/IE8 - ^= $= *= and empty values
						// Should not select anything
						div.innerHTML = "<input type='hidden' i=''/>";
						if ( div.querySelectorAll("[i^='']").length ) {
							rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
						}

						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if ( !div.querySelectorAll(":enabled").length ) {
							rbuggyQSA.push( ":enabled", ":disabled" );
						}

						// Opera 10-11 does not throw on post-comma invalid pseudos
						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
						docElem.mozMatchesSelector ||
						docElem.webkitMatchesSelector ||
						docElem.oMatchesSelector ||
						docElem.msMatchesSelector) )) ) {

					assert(function( div ) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call( div, "div" );

						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call( div, "[s!='']:x" );
						rbuggyMatches.push( "!=", pseudos );
					});
				}

				rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
				rbuggyMatches = new RegExp( rbuggyMatches.join("|") );

				// Element contains another
				// Purposefully does not implement inclusive descendent
				// As in, an element does not contain itself
				contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
					function( a, b ) {
						var adown = a.nodeType === 9 ? a.documentElement : a,
							bup = b && b.parentNode;
						return a === bup || !!( bup && bup.nodeType === 1 && (
								adown.contains ?
									adown.contains( bup ) :
								a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
							));
					} :
					function( a, b ) {
						if ( b ) {
							while ( (b = b.parentNode) ) {
								if ( b === a ) {
									return true;
								}
							}
						}
						return false;
					};

				// Document order sorting
				sortOrder = docElem.compareDocumentPosition ?
					function( a, b ) {
						var compare;

						if ( a === b ) {
							hasDuplicate = true;
							return 0;
						}

						if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
							if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
								if ( a === doc || contains( preferredDoc, a ) ) {
									return -1;
								}
								if ( b === doc || contains( preferredDoc, b ) ) {
									return 1;
								}
								return 0;
							}
							return compare & 4 ? -1 : 1;
						}

						return a.compareDocumentPosition ? -1 : 1;
					} :
					function( a, b ) {
						var cur,
							i = 0,
							aup = a.parentNode,
							bup = b.parentNode,
							ap = [ a ],
							bp = [ b ];

						// Exit early if the nodes are identical
						if ( a === b ) {
							hasDuplicate = true;
							return 0;

							// Parentless nodes are either documents or disconnected
						} else if ( !aup || !bup ) {
							return a === doc ? -1 :
								b === doc ? 1 :
									aup ? -1 :
										bup ? 1 :
											0;

							// If the nodes are siblings, we can do a quick check
						} else if ( aup === bup ) {
							return siblingCheck( a, b );
						}

						// Otherwise we need full lists of their ancestors for comparison
						cur = a;
						while ( (cur = cur.parentNode) ) {
							ap.unshift( cur );
						}
						cur = b;
						while ( (cur = cur.parentNode) ) {
							bp.unshift( cur );
						}

						// Walk down the tree looking for a discrepancy
						while ( ap[i] === bp[i] ) {
							i++;
						}

						return i ?
							// Do a sibling check if the nodes have a common ancestor
							siblingCheck( ap[i], bp[i] ) :

							// Otherwise nodes in our document sort first
							ap[i] === preferredDoc ? -1 :
								bp[i] === preferredDoc ? 1 :
									0;
					};

				// Always assume the presence of duplicates if sort doesn't
				// pass them to our comparison function (as in Google Chrome).
				hasDuplicate = false;
				[0, 0].sort( sortOrder );
				support.detectDuplicates = hasDuplicate;

				return document;
			};

			Sizzle.matches = function( expr, elements ) {
				return Sizzle( expr, null, null, elements );
			};

			Sizzle.matchesSelector = function( elem, expr ) {
				// Set document vars if needed
				if ( ( elem.ownerDocument || elem ) !== document ) {
					setDocument( elem );
				}

				// Make sure that attribute selectors are quoted
				expr = expr.replace( rattributeQuotes, "='$1']" );

				// rbuggyQSA always contains :focus, so no need for an existence check
				if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
					try {
						var ret = matches.call( elem, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || support.disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9
							elem.document && elem.document.nodeType !== 11 ) {
							return ret;
						}
					} catch(e) {}
				}

				return Sizzle( expr, document, null, [elem] ).length > 0;
			};

			Sizzle.contains = function( context, elem ) {
				// Set document vars if needed
				if ( ( context.ownerDocument || context ) !== document ) {
					setDocument( context );
				}
				return contains( context, elem );
			};

			Sizzle.attr = function( elem, name ) {
				var val;

				// Set document vars if needed
				if ( ( elem.ownerDocument || elem ) !== document ) {
					setDocument( elem );
				}

				if ( !documentIsXML ) {
					name = name.toLowerCase();
				}
				if ( (val = Expr.attrHandle[ name ]) ) {
					return val( elem );
				}
				if ( documentIsXML || support.attributes ) {
					return elem.getAttribute( name );
				}
				return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
					name :
					val && val.specified ? val.value : null;
			};

			Sizzle.error = function( msg ) {
				throw new Error( "Syntax error, unrecognized expression: " + msg );
			};

	// Document sorting and removing duplicates
			Sizzle.uniqueSort = function( results ) {
				var elem,
					duplicates = [],
					i = 1,
					j = 0;

				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				results.sort( sortOrder );

				if ( hasDuplicate ) {
					for ( ; (elem = results[i]); i++ ) {
						if ( elem === results[ i - 1 ] ) {
							j = duplicates.push( i );
						}
					}
					while ( j-- ) {
						results.splice( duplicates[ j ], 1 );
					}
				}

				return results;
			};

			function siblingCheck( a, b ) {
				var cur = b && a,
					diff = cur && ( ~b.sourceIndex || MAX_NEGATIVE ) - ( ~a.sourceIndex || MAX_NEGATIVE );

				// Use IE sourceIndex if available on both nodes
				if ( diff ) {
					return diff;
				}

				// Check if b follows a
				if ( cur ) {
					while ( (cur = cur.nextSibling) ) {
						if ( cur === b ) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

	// Returns a function to use in pseudos for input types
			function createInputPseudo( type ) {
				return function( elem ) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

	// Returns a function to use in pseudos for buttons
			function createButtonPseudo( type ) {
				return function( elem ) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

	// Returns a function to use in pseudos for positionals
			function createPositionalPseudo( fn ) {
				return markFunction(function( argument ) {
					argument = +argument;
					return markFunction(function( seed, matches ) {
						var j,
							matchIndexes = fn( [], seed.length, argument ),
							i = matchIndexes.length;

						// Match elements found at the specified indexes
						while ( i-- ) {
							if ( seed[ (j = matchIndexes[i]) ] ) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			/**
			 * Utility function for retrieving the text value of an array of DOM nodes
			 * @param {Array|Element} elem
			 */
			getText = Sizzle.getText = function( elem ) {
				var node,
					ret = "",
					i = 0,
					nodeType = elem.nodeType;

				if ( !nodeType ) {
					// If no nodeType, this is expected to be an array
					for ( ; (node = elem[i]); i++ ) {
						// Do not traverse comment nodes
						ret += getText( node );
					}
				} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (see #11153)
					if ( typeof elem.textContent === "string" ) {
						return elem.textContent;
					} else {
						// Traverse its children
						for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
							ret += getText( elem );
						}
					}
				} else if ( nodeType === 3 || nodeType === 4 ) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes

				return ret;
			};

			Expr = Sizzle.selectors = {

				// Can be adjusted by the user
				cacheLength: 50,

				createPseudo: markFunction,

				match: matchExpr,

				find: {},

				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},

				preFilter: {
					"ATTR": function( match ) {
						match[1] = match[1].replace( runescape, funescape );

						// Move the given value to match[3] whether quoted or unquoted
						match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

						if ( match[2] === "~=" ) {
							match[3] = " " + match[3] + " ";
						}

						return match.slice( 0, 4 );
					},

					"CHILD": function( match ) {
						/* matches from matchExpr["CHILD"]
						 1 type (only|nth|...)
						 2 what (child|of-type)
						 3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
						 4 xn-component of xn+y argument ([+-]?\d*n|)
						 5 sign of xn-component
						 6 x of xn-component
						 7 sign of y-component
						 8 y of y-component
						 */
						match[1] = match[1].toLowerCase();

						if ( match[1].slice( 0, 3 ) === "nth" ) {
							// nth-* requires argument
							if ( !match[3] ) {
								Sizzle.error( match[0] );
							}

							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
							match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

							// other types prohibit arguments
						} else if ( match[3] ) {
							Sizzle.error( match[0] );
						}

						return match;
					},

					"PSEUDO": function( match ) {
						var excess,
							unquoted = !match[5] && match[2];

						if ( matchExpr["CHILD"].test( match[0] ) ) {
							return null;
						}

						// Accept quoted arguments as-is
						if ( match[4] ) {
							match[2] = match[4];

							// Strip excess characters from unquoted arguments
						} else if ( unquoted && rpseudo.test( unquoted ) &&
								// Get excess from tokenize (recursively)
							(excess = tokenize( unquoted, true )) &&
								// advance to the next closing parenthesis
							(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

							// excess is a negative index
							match[0] = match[0].slice( 0, excess );
							match[2] = unquoted.slice( 0, excess );
						}

						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice( 0, 3 );
					}
				},

				filter: {

					"TAG": function( nodeName ) {
						if ( nodeName === "*" ) {
							return function() { return true; };
						}

						nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
						return function( elem ) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					"CLASS": function( className ) {
						var pattern = classCache[ className + " " ];

						return pattern ||
							(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
							classCache( className, function( elem ) {
								return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
							});
					},

					"ATTR": function( name, operator, check ) {
						return function( elem ) {
							var result = Sizzle.attr( elem, name );

							if ( result == null ) {
								return operator === "!=";
							}
							if ( !operator ) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check :
								operator === "!=" ? result !== check :
									operator === "^=" ? check && result.indexOf( check ) === 0 :
										operator === "*=" ? check && result.indexOf( check ) > -1 :
											operator === "$=" ? check && result.slice( -check.length ) === check :
												operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
													operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
														false;
						};
					},

					"CHILD": function( type, what, argument, first, last ) {
						var simple = type.slice( 0, 3 ) !== "nth",
							forward = type.slice( -4 ) !== "last",
							ofType = what === "of-type";

						return first === 1 && last === 0 ?

							// Shortcut for :nth-*(n)
							function( elem ) {
								return !!elem.parentNode;
							} :

							function( elem, context, xml ) {
								var cache, outerCache, node, diff, nodeIndex, start,
									dir = simple !== forward ? "nextSibling" : "previousSibling",
									parent = elem.parentNode,
									name = ofType && elem.nodeName.toLowerCase(),
									useCache = !xml && !ofType;

								if ( parent ) {

									// :(first|last|only)-(child|of-type)
									if ( simple ) {
										while ( dir ) {
											node = elem;
											while ( (node = node[ dir ]) ) {
												if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
													return false;
												}
											}
											// Reverse direction for :only-* (if we haven't yet done so)
											start = dir = type === "only" && !start && "nextSibling";
										}
										return true;
									}

									start = [ forward ? parent.firstChild : parent.lastChild ];

									// non-xml :nth-child(...) stores cache data on `parent`
									if ( forward && useCache ) {
										// Seek `elem` from a previously-cached index
										outerCache = parent[ expando ] || (parent[ expando ] = {});
										cache = outerCache[ type ] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = cache[0] === dirruns && cache[2];
										node = nodeIndex && parent.childNodes[ nodeIndex ];

										while ( (node = ++nodeIndex && node && node[ dir ] ||

												// Fallback to seeking `elem` from the start
											(diff = nodeIndex = 0) || start.pop()) ) {

											// When found, cache indexes on `parent` and break
											if ( node.nodeType === 1 && ++diff && node === elem ) {
												outerCache[ type ] = [ dirruns, nodeIndex, diff ];
												break;
											}
										}

										// Use previously-cached element index if available
									} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
										diff = cache[1];

										// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
									} else {
										// Use the same loop as above to seek `elem` from the start
										while ( (node = ++nodeIndex && node && node[ dir ] ||
											(diff = nodeIndex = 0) || start.pop()) ) {

											if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
												// Cache the index of each encountered element
												if ( useCache ) {
													(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
												}

												if ( node === elem ) {
													break;
												}
											}
										}
									}

									// Incorporate the offset, then check against cycle size
									diff -= last;
									return diff === first || ( diff % first === 0 && diff / first >= 0 );
								}
							};
					},

					"PSEUDO": function( pseudo, argument ) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
							fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
								Sizzle.error( "unsupported pseudo: " + pseudo );

						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if ( fn[ expando ] ) {
							return fn( argument );
						}

						// But maintain support for old signatures
						if ( fn.length > 1 ) {
							args = [ pseudo, pseudo, "", argument ];
							return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
								markFunction(function( seed, matches ) {
									var idx,
										matched = fn( seed, argument ),
										i = matched.length;
									while ( i-- ) {
										idx = indexOf.call( seed, matched[i] );
										seed[ idx ] = !( matches[ idx ] = matched[i] );
									}
								}) :
								function( elem ) {
									return fn( elem, 0, args );
								};
						}

						return fn;
					}
				},

				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function( selector ) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
							results = [],
							matcher = compile( selector.replace( rtrim, "$1" ) );

						return matcher[ expando ] ?
							markFunction(function( seed, matches, context, xml ) {
								var elem,
									unmatched = matcher( seed, null, xml, [] ),
									i = seed.length;

								// Match elements unmatched by `matcher`
								while ( i-- ) {
									if ( (elem = unmatched[i]) ) {
										seed[i] = !(matches[i] = elem);
									}
								}
							}) :
							function( elem, context, xml ) {
								input[0] = elem;
								matcher( input, null, xml, results );
								return !results.pop();
							};
					}),

					"has": markFunction(function( selector ) {
						return function( elem ) {
							return Sizzle( selector, elem ).length > 0;
						};
					}),

					"contains": markFunction(function( text ) {
						return function( elem ) {
							return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
						};
					}),

					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction( function( lang ) {
						// lang value must be a valid identifider
						if ( !ridentifier.test(lang || "") ) {
							Sizzle.error( "unsupported lang: " + lang );
						}
						lang = lang.replace( runescape, funescape ).toLowerCase();
						return function( elem ) {
							var elemLang;
							do {
								if ( (elemLang = documentIsXML ?
									elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
										elem.lang) ) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
								}
							} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
							return false;
						};
					}),

					// Miscellaneous
					"target": function( elem ) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice( 1 ) === elem.id;
					},

					"root": function( elem ) {
						return elem === docElem;
					},

					"focus": function( elem ) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					// Boolean properties
					"enabled": function( elem ) {
						return elem.disabled === false;
					},

					"disabled": function( elem ) {
						return elem.disabled === true;
					},

					"checked": function( elem ) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
					},

					"selected": function( elem ) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if ( elem.parentNode ) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					// Contents
					"empty": function( elem ) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
						//   not comment, processing instructions, or others
						// Thanks to Diego Perini for the nodeName shortcut
						//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
						for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
							if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
								return false;
							}
						}
						return true;
					},

					"parent": function( elem ) {
						return !Expr.pseudos["empty"]( elem );
					},

					// Element/input types
					"header": function( elem ) {
						return rheader.test( elem.nodeName );
					},

					"input": function( elem ) {
						return rinputs.test( elem.nodeName );
					},

					"button": function( elem ) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function( elem ) {
						var attr;
						// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
						// use getAttribute instead to test this case
						return elem.nodeName.toLowerCase() === "input" &&
							elem.type === "text" &&
							( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
					},

					// Position-in-collection
					"first": createPositionalPseudo(function() {
						return [ 0 ];
					}),

					"last": createPositionalPseudo(function( matchIndexes, length ) {
						return [ length - 1 ];
					}),

					"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
						return [ argument < 0 ? argument + length : argument ];
					}),

					"even": createPositionalPseudo(function( matchIndexes, length ) {
						var i = 0;
						for ( ; i < length; i += 2 ) {
							matchIndexes.push( i );
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function( matchIndexes, length ) {
						var i = 1;
						for ( ; i < length; i += 2 ) {
							matchIndexes.push( i );
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
						var i = argument < 0 ? argument + length : argument;
						for ( ; --i >= 0; ) {
							matchIndexes.push( i );
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
						var i = argument < 0 ? argument + length : argument;
						for ( ; ++i < length; ) {
							matchIndexes.push( i );
						}
						return matchIndexes;
					})
				}
			};

	// Add button/input type pseudos
			for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
				Expr.pseudos[ i ] = createInputPseudo( i );
			}
			for ( i in { submit: true, reset: true } ) {
				Expr.pseudos[ i ] = createButtonPseudo( i );
			}

			function tokenize( selector, parseOnly ) {
				var matched, match, tokens, type,
					soFar, groups, preFilters,
					cached = tokenCache[ selector + " " ];

				if ( cached ) {
					return parseOnly ? 0 : cached.slice( 0 );
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while ( soFar ) {

					// Comma and first run
					if ( !matched || (match = rcomma.exec( soFar )) ) {
						if ( match ) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice( match[0].length ) || soFar;
						}
						groups.push( tokens = [] );
					}

					matched = false;

					// Combinators
					if ( (match = rcombinators.exec( soFar )) ) {
						matched = match.shift();
						tokens.push( {
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace( rtrim, " " )
						} );
						soFar = soFar.slice( matched.length );
					}

					// Filters
					for ( type in Expr.filter ) {
						if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
							(match = preFilters[ type ]( match ))) ) {
							matched = match.shift();
							tokens.push( {
								value: matched,
								type: type,
								matches: match
							} );
							soFar = soFar.slice( matched.length );
						}
					}

					if ( !matched ) {
						break;
					}
				}

				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ?
					soFar.length :
					soFar ?
						Sizzle.error( selector ) :
						// Cache the tokens
						tokenCache( selector, groups ).slice( 0 );
			}

			function toSelector( tokens ) {
				var i = 0,
					len = tokens.length,
					selector = "";
				for ( ; i < len; i++ ) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator( matcher, combinator, base ) {
				var dir = combinator.dir,
					checkNonElements = base && dir === "parentNode",
					doneName = done++;

				return combinator.first ?
					// Check against closest ancestor/preceding element
					function( elem, context, xml ) {
						while ( (elem = elem[ dir ]) ) {
							if ( elem.nodeType === 1 || checkNonElements ) {
								return matcher( elem, context, xml );
							}
						}
					} :

					// Check against all ancestor/preceding elements
					function( elem, context, xml ) {
						var data, cache, outerCache,
							dirkey = dirruns + " " + doneName;

						// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
						if ( xml ) {
							while ( (elem = elem[ dir ]) ) {
								if ( elem.nodeType === 1 || checkNonElements ) {
									if ( matcher( elem, context, xml ) ) {
										return true;
									}
								}
							}
						} else {
							while ( (elem = elem[ dir ]) ) {
								if ( elem.nodeType === 1 || checkNonElements ) {
									outerCache = elem[ expando ] || (elem[ expando ] = {});
									if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
										if ( (data = cache[1]) === true || data === cachedruns ) {
											return data === true;
										}
									} else {
										cache = outerCache[ dir ] = [ dirkey ];
										cache[1] = matcher( elem, context, xml ) || cachedruns;
										if ( cache[1] === true ) {
											return true;
										}
									}
								}
							}
						}
					};
			}

			function elementMatcher( matchers ) {
				return matchers.length > 1 ?
					function( elem, context, xml ) {
						var i = matchers.length;
						while ( i-- ) {
							if ( !matchers[i]( elem, context, xml ) ) {
								return false;
							}
						}
						return true;
					} :
					matchers[0];
			}

			function condense( unmatched, map, filter, context, xml ) {
				var elem,
					newUnmatched = [],
					i = 0,
					len = unmatched.length,
					mapped = map != null;

				for ( ; i < len; i++ ) {
					if ( (elem = unmatched[i]) ) {
						if ( !filter || filter( elem, context, xml ) ) {
							newUnmatched.push( elem );
							if ( mapped ) {
								map.push( i );
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
				if ( postFilter && !postFilter[ expando ] ) {
					postFilter = setMatcher( postFilter );
				}
				if ( postFinder && !postFinder[ expando ] ) {
					postFinder = setMatcher( postFinder, postSelector );
				}
				return markFunction(function( seed, results, context, xml ) {
					var temp, i, elem,
						preMap = [],
						postMap = [],
						preexisting = results.length,

					// Get initial elements from seed or context
						elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

					// Prefilter to get matcher input, preserving a map for seed-results synchronization
						matcherIn = preFilter && ( seed || !selector ) ?
							condense( elems, preMap, preFilter, context, xml ) :
							elems,

						matcherOut = matcher ?
							// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
							postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

								// ...intermediate processing is necessary
								[] :

								// ...otherwise use results directly
								results :
							matcherIn;

					// Find primary matches
					if ( matcher ) {
						matcher( matcherIn, matcherOut, context, xml );
					}

					// Apply postFilter
					if ( postFilter ) {
						temp = condense( matcherOut, postMap );
						postFilter( temp, [], context, xml );

						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while ( i-- ) {
							if ( (elem = temp[i]) ) {
								matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
							}
						}
					}

					if ( seed ) {
						if ( postFinder || preFilter ) {
							if ( postFinder ) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while ( i-- ) {
									if ( (elem = matcherOut[i]) ) {
										// Restore matcherIn since elem is not yet a final match
										temp.push( (matcherIn[i] = elem) );
									}
								}
								postFinder( null, (matcherOut = []), temp, xml );
							}

							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while ( i-- ) {
								if ( (elem = matcherOut[i]) &&
									(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}

						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(
							matcherOut === results ?
								matcherOut.splice( preexisting, matcherOut.length ) :
								matcherOut
						);
						if ( postFinder ) {
							postFinder( null, results, matcherOut, xml );
						} else {
							push.apply( results, matcherOut );
						}
					}
				});
			}

			function matcherFromTokens( tokens ) {
				var checkContext, matcher, j,
					len = tokens.length,
					leadingRelative = Expr.relative[ tokens[0].type ],
					implicitRelative = leadingRelative || Expr.relative[" "],
					i = leadingRelative ? 1 : 0,

				// The foundational matcher ensures that elements are reachable from top-level context(s)
					matchContext = addCombinator( function( elem ) {
						return elem === checkContext;
					}, implicitRelative, true ),
					matchAnyContext = addCombinator( function( elem ) {
						return indexOf.call( checkContext, elem ) > -1;
					}, implicitRelative, true ),
					matchers = [ function( elem, context, xml ) {
						return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
								(checkContext = context).nodeType ?
									matchContext( elem, context, xml ) :
									matchAnyContext( elem, context, xml ) );
					} ];

				for ( ; i < len; i++ ) {
					if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
						matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
					} else {
						matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

						// Return special upon seeing a positional matcher
						if ( matcher[ expando ] ) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for ( ; j < len; j++ ) {
								if ( Expr.relative[ tokens[j].type ] ) {
									break;
								}
							}
							return setMatcher(
								i > 1 && elementMatcher( matchers ),
								i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
								matcher,
								i < j && matcherFromTokens( tokens.slice( i, j ) ),
								j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
								j < len && toSelector( tokens )
							);
						}
						matchers.push( matcher );
					}
				}

				return elementMatcher( matchers );
			}

			function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
				// A counter to specify which element is currently being matched
				var matcherCachedRuns = 0,
					bySet = setMatchers.length > 0,
					byElement = elementMatchers.length > 0,
					superMatcher = function( seed, context, xml, results, expandContext ) {
						var elem, j, matcher,
							setMatched = [],
							matchedCount = 0,
							i = "0",
							unmatched = seed && [],
							outermost = expandContext != null,
							contextBackup = outermostContext,
						// We must always have either seed elements or context
							elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
						// Use integer dirruns iff this is the outermost matcher
							dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

						if ( outermost ) {
							outermostContext = context !== document && context;
							cachedruns = matcherCachedRuns;
						}

						// Add elements passing elementMatchers directly to results
						// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
						for ( ; (elem = elems[i]) != null; i++ ) {
							if ( byElement && elem ) {
								j = 0;
								while ( (matcher = elementMatchers[j++]) ) {
									if ( matcher( elem, context, xml ) ) {
										results.push( elem );
										break;
									}
								}
								if ( outermost ) {
									dirruns = dirrunsUnique;
									cachedruns = ++matcherCachedRuns;
								}
							}

							// Track unmatched elements for set filters
							if ( bySet ) {
								// They will have gone through all possible matchers
								if ( (elem = !matcher && elem) ) {
									matchedCount--;
								}

								// Lengthen the array for every element, matched or not
								if ( seed ) {
									unmatched.push( elem );
								}
							}
						}

						// Apply set filters to unmatched elements
						matchedCount += i;
						if ( bySet && i !== matchedCount ) {
							j = 0;
							while ( (matcher = setMatchers[j++]) ) {
								matcher( unmatched, setMatched, context, xml );
							}

							if ( seed ) {
								// Reintegrate element matches to eliminate the need for sorting
								if ( matchedCount > 0 ) {
									while ( i-- ) {
										if ( !(unmatched[i] || setMatched[i]) ) {
											setMatched[i] = pop.call( results );
										}
									}
								}

								// Discard index placeholder values to get only actual matches
								setMatched = condense( setMatched );
							}

							// Add matches to results
							push.apply( results, setMatched );

							// Seedless set matches succeeding multiple successful matchers stipulate sorting
							if ( outermost && !seed && setMatched.length > 0 &&
								( matchedCount + setMatchers.length ) > 1 ) {

								Sizzle.uniqueSort( results );
							}
						}

						// Override manipulation of globals by nested matchers
						if ( outermost ) {
							dirruns = dirrunsUnique;
							outermostContext = contextBackup;
						}

						return unmatched;
					};

				return bySet ?
					markFunction( superMatcher ) :
					superMatcher;
			}

			compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
				var i,
					setMatchers = [],
					elementMatchers = [],
					cached = compilerCache[ selector + " " ];

				if ( !cached ) {
					// Generate a function of recursive functions that can be used to check each element
					if ( !group ) {
						group = tokenize( selector );
					}
					i = group.length;
					while ( i-- ) {
						cached = matcherFromTokens( group[i] );
						if ( cached[ expando ] ) {
							setMatchers.push( cached );
						} else {
							elementMatchers.push( cached );
						}
					}

					// Cache the compiled function
					cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
				}
				return cached;
			};

			function multipleContexts( selector, contexts, results ) {
				var i = 0,
					len = contexts.length;
				for ( ; i < len; i++ ) {
					Sizzle( selector, contexts[i], results );
				}
				return results;
			}

			function select( selector, context, results, seed ) {
				var i, tokens, token, type, find,
					match = tokenize( selector );

				if ( !seed ) {
					// Try to minimize operations if there is only one group
					if ( match.length === 1 ) {

						// Take a shortcut and set the context if the root selector is an ID
						tokens = match[0] = match[0].slice( 0 );
						if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
							context.nodeType === 9 && !documentIsXML &&
							Expr.relative[ tokens[1].type ] ) {

							context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
							if ( !context ) {
								return results;
							}

							selector = selector.slice( tokens.shift().value.length );
						}

						// Fetch a seed set for right-to-left matching
						i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
						while ( i-- ) {
							token = tokens[i];

							// Abort if we hit a combinator
							if ( Expr.relative[ (type = token.type) ] ) {
								break;
							}
							if ( (find = Expr.find[ type ]) ) {
								// Search, expanding context for leading sibling combinators
								if ( (seed = find(
										token.matches[0].replace( runescape, funescape ),
										rsibling.test( tokens[0].type ) && context.parentNode || context
									)) ) {

									// If seed is empty or no tokens remain, we can return early
									tokens.splice( i, 1 );
									selector = seed.length && toSelector( tokens );
									if ( !selector ) {
										push.apply( results, slice.call( seed, 0 ) );
										return results;
									}

									break;
								}
							}
						}
					}
				}

				// Compile and execute a filtering function
				// Provide `match` to avoid retokenization if we modified the selector above
				compile( selector, match )(
					seed,
					context,
					documentIsXML,
					results,
					rsibling.test( selector )
				);
				return results;
			}

	// Deprecated
			Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Easy API for creating new setFilters
			function setFilters() {}
			Expr.filters = setFilters.prototype = Expr.pseudos;
			Expr.setFilters = new setFilters();

	// Initialize with the default document
			setDocument();

	// Override sizzle attribute retrieval
			Sizzle.attr = jQuery.attr;
			jQuery.find = Sizzle;
			jQuery.expr = Sizzle.selectors;
			jQuery.expr[":"] = jQuery.expr.pseudos;
			jQuery.unique = Sizzle.uniqueSort;
			jQuery.text = Sizzle.getText;
			jQuery.isXMLDoc = Sizzle.isXML;
			jQuery.contains = Sizzle.contains;


		})( window );
		var runtil = /Until$/,
			rparentsprev = /^(?:parents|prev(?:Until|All))/,
			isSimple = /^.[^:#\[\.,]*$/,
			rneedsContext = jQuery.expr.match.needsContext,
		// methods guaranteed to produce a unique set when starting from a unique set
			guaranteedUnique = {
				children: true,
				contents: true,
				next: true,
				prev: true
			};

		jQuery.fn.extend({
			find: function( selector ) {
				var i, ret, self,
					len = this.length;

				if ( typeof selector !== "string" ) {
					self = this;
					return this.pushStack( jQuery( selector ).filter(function() {
						for ( i = 0; i < len; i++ ) {
							if ( jQuery.contains( self[ i ], this ) ) {
								return true;
							}
						}
					}) );
				}

				ret = [];
				for ( i = 0; i < len; i++ ) {
					jQuery.find( selector, this[ i ], ret );
				}

				// Needed because $( selector, context ) becomes $( context ).find( selector )
				ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
				ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
				return ret;
			},

			has: function( target ) {
				var i,
					targets = jQuery( target, this ),
					len = targets.length;

				return this.filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( this, targets[i] ) ) {
							return true;
						}
					}
				});
			},

			not: function( selector ) {
				return this.pushStack( winnow(this, selector, false) );
			},

			filter: function( selector ) {
				return this.pushStack( winnow(this, selector, true) );
			},

			is: function( selector ) {
				return !!selector && (
						typeof selector === "string" ?
							// If this is a positional/relative selector, check membership in the returned set
							// so $("p:first").is("p:last") won't return true for a doc with two "p".
							rneedsContext.test( selector ) ?
							jQuery( selector, this.context ).index( this[0] ) >= 0 :
							jQuery.filter( selector, this ).length > 0 :
						this.filter( selector ).length > 0 );
			},

			closest: function( selectors, context ) {
				var cur,
					i = 0,
					l = this.length,
					ret = [],
					pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
						jQuery( selectors, context || this.context ) :
						0;

				for ( ; i < l; i++ ) {
					cur = this[i];

					while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
						if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
							ret.push( cur );
							break;
						}
						cur = cur.parentNode;
					}
				}

				return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
			},

			// Determine the position of an element within
			// the matched set of elements
			index: function( elem ) {

				// No argument, return index in parent
				if ( !elem ) {
					return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
				}

				// index in selector
				if ( typeof elem === "string" ) {
					return jQuery.inArray( this[0], jQuery( elem ) );
				}

				// Locate the position of the desired element
				return jQuery.inArray(
					// If it receives a jQuery object, the first element is used
					elem.jquery ? elem[0] : elem, this );
			},

			add: function( selector, context ) {
				var set = typeof selector === "string" ?
						jQuery( selector, context ) :
						jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
					all = jQuery.merge( this.get(), set );

				return this.pushStack( jQuery.unique(all) );
			},

			addBack: function( selector ) {
				return this.add( selector == null ?
					this.prevObject : this.prevObject.filter(selector)
				);
			}
		});

		jQuery.fn.andSelf = jQuery.fn.addBack;

		function sibling( cur, dir ) {
			do {
				cur = cur[ dir ];
			} while ( cur && cur.nodeType !== 1 );

			return cur;
		}

		jQuery.each({
			parent: function( elem ) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function( elem ) {
				return jQuery.dir( elem, "parentNode" );
			},
			parentsUntil: function( elem, i, until ) {
				return jQuery.dir( elem, "parentNode", until );
			},
			next: function( elem ) {
				return sibling( elem, "nextSibling" );
			},
			prev: function( elem ) {
				return sibling( elem, "previousSibling" );
			},
			nextAll: function( elem ) {
				return jQuery.dir( elem, "nextSibling" );
			},
			prevAll: function( elem ) {
				return jQuery.dir( elem, "previousSibling" );
			},
			nextUntil: function( elem, i, until ) {
				return jQuery.dir( elem, "nextSibling", until );
			},
			prevUntil: function( elem, i, until ) {
				return jQuery.dir( elem, "previousSibling", until );
			},
			siblings: function( elem ) {
				return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
			},
			children: function( elem ) {
				return jQuery.sibling( elem.firstChild );
			},
			contents: function( elem ) {
				return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
					jQuery.merge( [], elem.childNodes );
			}
		}, function( name, fn ) {
			jQuery.fn[ name ] = function( until, selector ) {
				var ret = jQuery.map( this, fn, until );

				if ( !runtil.test( name ) ) {
					selector = until;
				}

				if ( selector && typeof selector === "string" ) {
					ret = jQuery.filter( selector, ret );
				}

				ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

				if ( this.length > 1 && rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}

				return this.pushStack( ret );
			};
		});

		jQuery.extend({
			filter: function( expr, elems, not ) {
				if ( not ) {
					expr = ":not(" + expr + ")";
				}

				return elems.length === 1 ?
					jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
					jQuery.find.matches(expr, elems);
			},

			dir: function( elem, dir, until ) {
				var matched = [],
					cur = elem[ dir ];

				while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
					if ( cur.nodeType === 1 ) {
						matched.push( cur );
					}
					cur = cur[dir];
				}
				return matched;
			},

			sibling: function( n, elem ) {
				var r = [];

				for ( ; n; n = n.nextSibling ) {
					if ( n.nodeType === 1 && n !== elem ) {
						r.push( n );
					}
				}

				return r;
			}
		});

	// Implement the identical functionality for filter and not
		function winnow( elements, qualifier, keep ) {

			// Can't pass null or undefined to indexOf in Firefox 4
			// Set to 0 to skip string check
			qualifier = qualifier || 0;

			if ( jQuery.isFunction( qualifier ) ) {
				return jQuery.grep(elements, function( elem, i ) {
					var retVal = !!qualifier.call( elem, i, elem );
					return retVal === keep;
				});

			} else if ( qualifier.nodeType ) {
				return jQuery.grep(elements, function( elem ) {
					return ( elem === qualifier ) === keep;
				});

			} else if ( typeof qualifier === "string" ) {
				var filtered = jQuery.grep(elements, function( elem ) {
					return elem.nodeType === 1;
				});

				if ( isSimple.test( qualifier ) ) {
					return jQuery.filter(qualifier, filtered, !keep);
				} else {
					qualifier = jQuery.filter( qualifier, filtered );
				}
			}

			return jQuery.grep(elements, function( elem ) {
				return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
			});
		}
		function createSafeFragment( document ) {
			var list = nodeNames.split( "|" ),
				safeFrag = document.createDocumentFragment();

			if ( safeFrag.createElement ) {
				while ( list.length ) {
					safeFrag.createElement(
						list.pop()
					);
				}
			}
			return safeFrag;
		}

		var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
				"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
			rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
			rleadingWhitespace = /^\s+/,
			rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			rtagName = /<([\w:]+)/,
			rtbody = /<tbody/i,
			rhtml = /<|&#?\w+;/,
			rnoInnerhtml = /<(?:script|style|link)/i,
			manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
		// checked="checked" or checked
			rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
			rscriptType = /^$|\/(?:java|ecma)script/i,
			rscriptTypeMasked = /^true\/(.*)/,
			rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

		// We have to close these tags to support XHTML (#13200)
			wrapMap = {
				option: [ 1, "<select multiple='multiple'>", "</select>" ],
				legend: [ 1, "<fieldset>", "</fieldset>" ],
				area: [ 1, "<map>", "</map>" ],
				param: [ 1, "<object>", "</object>" ],
				thead: [ 1, "<table>", "</table>" ],
				tr: [ 2, "<table><tbody>", "</tbody></table>" ],
				col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
				td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

				// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
				// unless wrapped in a div with non-breaking characters in front of it.
				_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
			},
			safeFragment = createSafeFragment( document ),
			fragmentDiv = safeFragment.appendChild( document.createElement("div") );

		wrapMap.optgroup = wrapMap.option;
		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		jQuery.fn.extend({
			text: function( value ) {
				return jQuery.access( this, function( value ) {
					return value === undefined ?
						jQuery.text( this ) :
						this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
				}, null, value, arguments.length );
			},

			wrapAll: function( html ) {
				if ( jQuery.isFunction( html ) ) {
					return this.each(function(i) {
						jQuery(this).wrapAll( html.call(this, i) );
					});
				}

				if ( this[0] ) {
					// The elements to wrap the target around
					var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

					if ( this[0].parentNode ) {
						wrap.insertBefore( this[0] );
					}

					wrap.map(function() {
						var elem = this;

						while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
							elem = elem.firstChild;
						}

						return elem;
					}).append( this );
				}

				return this;
			},

			wrapInner: function( html ) {
				if ( jQuery.isFunction( html ) ) {
					return this.each(function(i) {
						jQuery(this).wrapInner( html.call(this, i) );
					});
				}

				return this.each(function() {
					var self = jQuery( this ),
						contents = self.contents();

					if ( contents.length ) {
						contents.wrapAll( html );

					} else {
						self.append( html );
					}
				});
			},

			wrap: function( html ) {
				var isFunction = jQuery.isFunction( html );

				return this.each(function(i) {
					jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
				});
			},

			unwrap: function() {
				return this.parent().each(function() {
					if ( !jQuery.nodeName( this, "body" ) ) {
						jQuery( this ).replaceWith( this.childNodes );
					}
				}).end();
			},

			append: function() {
				return this.domManip(arguments, true, function( elem ) {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.appendChild( elem );
					}
				});
			},

			prepend: function() {
				return this.domManip(arguments, true, function( elem ) {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.insertBefore( elem, this.firstChild );
					}
				});
			},

			before: function() {
				return this.domManip( arguments, false, function( elem ) {
					if ( this.parentNode ) {
						this.parentNode.insertBefore( elem, this );
					}
				});
			},

			after: function() {
				return this.domManip( arguments, false, function( elem ) {
					if ( this.parentNode ) {
						this.parentNode.insertBefore( elem, this.nextSibling );
					}
				});
			},

			// keepData is for internal use only--do not document
			remove: function( selector, keepData ) {
				var elem,
					i = 0;

				for ( ; (elem = this[i]) != null; i++ ) {
					if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
						if ( !keepData && elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem ) );
						}

						if ( elem.parentNode ) {
							if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
								setGlobalEval( getAll( elem, "script" ) );
							}
							elem.parentNode.removeChild( elem );
						}
					}
				}

				return this;
			},

			empty: function() {
				var elem,
					i = 0;

				for ( ; (elem = this[i]) != null; i++ ) {
					// Remove element nodes and prevent memory leaks
					if ( elem.nodeType === 1 ) {
						jQuery.cleanData( getAll( elem, false ) );
					}

					// Remove any remaining nodes
					while ( elem.firstChild ) {
						elem.removeChild( elem.firstChild );
					}

					// If this is a select, ensure that it displays empty (#12336)
					// Support: IE<9
					if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
						elem.options.length = 0;
					}
				}

				return this;
			},

			clone: function( dataAndEvents, deepDataAndEvents ) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map( function () {
					return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
				});
			},

			html: function( value ) {
				return jQuery.access( this, function( value ) {
					var elem = this[0] || {},
						i = 0,
						l = this.length;

					if ( value === undefined ) {
						return elem.nodeType === 1 ?
							elem.innerHTML.replace( rinlinejQuery, "" ) :
							undefined;
					}

					// See if we can take a shortcut and just use innerHTML
					if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
						( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
						( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
						!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

						value = value.replace( rxhtmlTag, "<$1></$2>" );

						try {
							for (; i < l; i++ ) {
								// Remove element nodes and prevent memory leaks
								elem = this[i] || {};
								if ( elem.nodeType === 1 ) {
									jQuery.cleanData( getAll( elem, false ) );
									elem.innerHTML = value;
								}
							}

							elem = 0;

							// If using innerHTML throws an exception, use the fallback method
						} catch(e) {}
					}

					if ( elem ) {
						this.empty().append( value );
					}
				}, null, value, arguments.length );
			},

			replaceWith: function( value ) {
				var isFunc = jQuery.isFunction( value );

				// Make sure that the elements are removed from the DOM before they are inserted
				// this can help fix replacing a parent with child elements
				if ( !isFunc && typeof value !== "string" ) {
					value = jQuery( value ).not( this ).detach();
				}

				return this.domManip( [ value ], true, function( elem ) {
					var next = this.nextSibling,
						parent = this.parentNode;

					if ( parent ) {
						jQuery( this ).remove();
						parent.insertBefore( elem, next );
					}
				});
			},

			detach: function( selector ) {
				return this.remove( selector, true );
			},

			domManip: function( args, table, callback ) {

				// Flatten any nested arrays
				args = core_concat.apply( [], args );

				var first, node, hasScripts,
					scripts, doc, fragment,
					i = 0,
					l = this.length,
					set = this,
					iNoClone = l - 1,
					value = args[0],
					isFunction = jQuery.isFunction( value );

				// We can't cloneNode fragments that contain checked, in WebKit
				if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
					return this.each(function( index ) {
						var self = set.eq( index );
						if ( isFunction ) {
							args[0] = value.call( this, index, table ? self.html() : undefined );
						}
						self.domManip( args, table, callback );
					});
				}

				if ( l ) {
					fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
					first = fragment.firstChild;

					if ( fragment.childNodes.length === 1 ) {
						fragment = first;
					}

					if ( first ) {
						table = table && jQuery.nodeName( first, "tr" );
						scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
						hasScripts = scripts.length;

						// Use the original fragment for the last item instead of the first because it can end up
						// being emptied incorrectly in certain situations (#8070).
						for ( ; i < l; i++ ) {
							node = fragment;

							if ( i !== iNoClone ) {
								node = jQuery.clone( node, true, true );

								// Keep references to cloned scripts for later restoration
								if ( hasScripts ) {
									jQuery.merge( scripts, getAll( node, "script" ) );
								}
							}

							callback.call(
								table && jQuery.nodeName( this[i], "table" ) ?
									findOrAppend( this[i], "tbody" ) :
									this[i],
								node,
								i
							);
						}

						if ( hasScripts ) {
							doc = scripts[ scripts.length - 1 ].ownerDocument;

							// Reenable scripts
							jQuery.map( scripts, restoreScript );

							// Evaluate executable scripts on first document insertion
							for ( i = 0; i < hasScripts; i++ ) {
								node = scripts[ i ];
								if ( rscriptType.test( node.type || "" ) &&
									!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

									if ( node.src ) {
										// Hope ajax is available...
										jQuery.ajax({
											url: node.src,
											type: "GET",
											dataType: "script",
											async: false,
											global: false,
											"throws": true
										});
									} else {
										jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
									}
								}
							}
						}

						// Fix #11809: Avoid leaking memory
						fragment = first = null;
					}
				}

				return this;
			}
		});

		function findOrAppend( elem, tag ) {
			return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
		}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript( elem ) {
			var attr = elem.getAttributeNode("type");
			elem.type = ( attr && attr.specified ) + "/" + elem.type;
			return elem;
		}
		function restoreScript( elem ) {
			var match = rscriptTypeMasked.exec( elem.type );
			if ( match ) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}
			return elem;
		}

	// Mark scripts as having already been evaluated
		function setGlobalEval( elems, refElements ) {
			var elem,
				i = 0;
			for ( ; (elem = elems[i]) != null; i++ ) {
				jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
			}
		}

		function cloneCopyEvent( src, dest ) {

			if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
				return;
			}

			var type, i, l,
				oldData = jQuery._data( src ),
				curData = jQuery._data( dest, oldData ),
				events = oldData.events;

			if ( events ) {
				delete curData.handle;
				curData.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}

			// make the cloned public data object a copy from the original
			if ( curData.data ) {
				curData.data = jQuery.extend( {}, curData.data );
			}
		}

		function fixCloneNodeIssues( src, dest ) {
			var nodeName, e, data;

			// We do not need to do anything for non-Elements
			if ( dest.nodeType !== 1 ) {
				return;
			}

			nodeName = dest.nodeName.toLowerCase();

			// IE6-8 copies events bound via attachEvent when using cloneNode.
			if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
				data = jQuery._data( dest );

				for ( e in data.events ) {
					jQuery.removeEvent( dest, e, data.handle );
				}

				// Event data gets referenced instead of copied if the expando gets copied too
				dest.removeAttribute( jQuery.expando );
			}

			// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
			if ( nodeName === "script" && dest.text !== src.text ) {
				disableScript( dest ).text = src.text;
				restoreScript( dest );

				// IE6-10 improperly clones children of object elements using classid.
				// IE10 throws NoModificationAllowedError if parent is null, #12132.
			} else if ( nodeName === "object" ) {
				if ( dest.parentNode ) {
					dest.outerHTML = src.outerHTML;
				}

				// This path appears unavoidable for IE9. When cloning an object
				// element in IE9, the outerHTML strategy above is not sufficient.
				// If the src has innerHTML and the destination does not,
				// copy the src.innerHTML into the dest.innerHTML. #10324
				if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
					dest.innerHTML = src.innerHTML;
				}

			} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
				// IE6-8 fails to persist the checked state of a cloned checkbox
				// or radio button. Worse, IE6-7 fail to give the cloned element
				// a checked appearance if the defaultChecked value isn't also set

				dest.defaultChecked = dest.checked = src.checked;

				// IE6-7 get confused and end up setting the value of a cloned
				// checkbox/radio button to an empty string instead of "on"
				if ( dest.value !== src.value ) {
					dest.value = src.value;
				}

				// IE6-8 fails to return the selected option to the default selected
				// state when cloning options
			} else if ( nodeName === "option" ) {
				dest.defaultSelected = dest.selected = src.defaultSelected;

				// IE6-8 fails to set the defaultValue to the correct value when
				// cloning other types of input fields
			} else if ( nodeName === "input" || nodeName === "textarea" ) {
				dest.defaultValue = src.defaultValue;
			}
		}

		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function( name, original ) {
			jQuery.fn[ name ] = function( selector ) {
				var elems,
					i = 0,
					ret = [],
					insert = jQuery( selector ),
					last = insert.length - 1;

				for ( ; i <= last; i++ ) {
					elems = i === last ? this : this.clone(true);
					jQuery( insert[i] )[ original ]( elems );

					// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
					core_push.apply( ret, elems.get() );
				}

				return this.pushStack( ret );
			};
		});

		function getAll( context, tag ) {
			var elems, elem,
				i = 0,
				found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
					typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
						undefined;

			if ( !found ) {
				for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
					if ( !tag || jQuery.nodeName( elem, tag ) ) {
						found.push( elem );
					} else {
						jQuery.merge( found, getAll( elem, tag ) );
					}
				}
			}

			return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
				jQuery.merge( [ context ], found ) :
				found;
		}

	// Used in buildFragment, fixes the defaultChecked property
		function fixDefaultChecked( elem ) {
			if ( manipulation_rcheckableType.test( elem.type ) ) {
				elem.defaultChecked = elem.checked;
			}
		}

		jQuery.extend({
			clone: function( elem, dataAndEvents, deepDataAndEvents ) {
				var destElements, node, clone, i, srcElements,
					inPage = jQuery.contains( elem.ownerDocument, elem );

				if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
					clone = elem.cloneNode( true );

					// IE<=8 does not properly clone detached, unknown element nodes
				} else {
					fragmentDiv.innerHTML = elem.outerHTML;
					fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
				}

				if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
					(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

					// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
					destElements = getAll( clone );
					srcElements = getAll( elem );

					// Fix all IE cloning issues
					for ( i = 0; (node = srcElements[i]) != null; ++i ) {
						// Ensure that the destination node is not null; Fixes #9587
						if ( destElements[i] ) {
							fixCloneNodeIssues( node, destElements[i] );
						}
					}
				}

				// Copy the events from the original to the clone
				if ( dataAndEvents ) {
					if ( deepDataAndEvents ) {
						srcElements = srcElements || getAll( elem );
						destElements = destElements || getAll( clone );

						for ( i = 0; (node = srcElements[i]) != null; i++ ) {
							cloneCopyEvent( node, destElements[i] );
						}
					} else {
						cloneCopyEvent( elem, clone );
					}
				}

				// Preserve script evaluation history
				destElements = getAll( clone, "script" );
				if ( destElements.length > 0 ) {
					setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
				}

				destElements = srcElements = node = null;

				// Return the cloned set
				return clone;
			},

			buildFragment: function( elems, context, scripts, selection ) {
				var j, elem, contains,
					tmp, tag, tbody, wrap,
					l = elems.length,

				// Ensure a safe fragment
					safe = createSafeFragment( context ),

					nodes = [],
					i = 0;

				for ( ; i < l; i++ ) {
					elem = elems[ i ];

					if ( elem || elem === 0 ) {

						// Add nodes directly
						if ( jQuery.type( elem ) === "object" ) {
							jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

							// Convert non-html into a text node
						} else if ( !rhtml.test( elem ) ) {
							nodes.push( context.createTextNode( elem ) );

							// Convert html into DOM nodes
						} else {
							tmp = tmp || safe.appendChild( context.createElement("div") );

							// Deserialize a standard representation
							tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
							wrap = wrapMap[ tag ] || wrapMap._default;

							tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

							// Descend through wrappers to the right content
							j = wrap[0];
							while ( j-- ) {
								tmp = tmp.lastChild;
							}

							// Manually add leading whitespace removed by IE
							if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
								nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
							}

							// Remove IE's autoinserted <tbody> from table fragments
							if ( !jQuery.support.tbody ) {

								// String was a <table>, *may* have spurious <tbody>
								elem = tag === "table" && !rtbody.test( elem ) ?
									tmp.firstChild :

									// String was a bare <thead> or <tfoot>
									wrap[1] === "<table>" && !rtbody.test( elem ) ?
										tmp :
										0;

								j = elem && elem.childNodes.length;
								while ( j-- ) {
									if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
										elem.removeChild( tbody );
									}
								}
							}

							jQuery.merge( nodes, tmp.childNodes );

							// Fix #12392 for WebKit and IE > 9
							tmp.textContent = "";

							// Fix #12392 for oldIE
							while ( tmp.firstChild ) {
								tmp.removeChild( tmp.firstChild );
							}

							// Remember the top-level container for proper cleanup
							tmp = safe.lastChild;
						}
					}
				}

				// Fix #11356: Clear elements from fragment
				if ( tmp ) {
					safe.removeChild( tmp );
				}

				// Reset defaultChecked for any radios and checkboxes
				// about to be appended to the DOM in IE 6/7 (#8060)
				if ( !jQuery.support.appendChecked ) {
					jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
				}

				i = 0;
				while ( (elem = nodes[ i++ ]) ) {

					// #4087 - If origin and destination elements are the same, and this is
					// that element, do not do anything
					if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
						continue;
					}

					contains = jQuery.contains( elem.ownerDocument, elem );

					// Append to fragment
					tmp = getAll( safe.appendChild( elem ), "script" );

					// Preserve script evaluation history
					if ( contains ) {
						setGlobalEval( tmp );
					}

					// Capture executables
					if ( scripts ) {
						j = 0;
						while ( (elem = tmp[ j++ ]) ) {
							if ( rscriptType.test( elem.type || "" ) ) {
								scripts.push( elem );
							}
						}
					}
				}

				tmp = null;

				return safe;
			},

			cleanData: function( elems, /* internal */ acceptData ) {
				var elem, type, id, data,
					i = 0,
					internalKey = jQuery.expando,
					cache = jQuery.cache,
					deleteExpando = jQuery.support.deleteExpando,
					special = jQuery.event.special;

				for ( ; (elem = elems[i]) != null; i++ ) {

					if ( acceptData || jQuery.acceptData( elem ) ) {

						id = elem[ internalKey ];
						data = id && cache[ id ];

						if ( data ) {
							if ( data.events ) {
								for ( type in data.events ) {
									if ( special[ type ] ) {
										jQuery.event.remove( elem, type );

										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent( elem, type, data.handle );
									}
								}
							}

							// Remove cache only if it was not already removed by jQuery.event.remove
							if ( cache[ id ] ) {

								delete cache[ id ];

								// IE does not allow us to delete expando properties from nodes,
								// nor does it have a removeAttribute function on Document nodes;
								// we must handle all of these cases
								if ( deleteExpando ) {
									delete elem[ internalKey ];

								} else if ( typeof elem.removeAttribute !== core_strundefined ) {
									elem.removeAttribute( internalKey );

								} else {
									elem[ internalKey ] = null;
								}

								core_deletedIds.push( id );
							}
						}
					}
				}
			}
		});
		var iframe, getStyles, curCSS,
			ralpha = /alpha\([^)]*\)/i,
			ropacity = /opacity\s*=\s*([^)]*)/,
			rposition = /^(top|right|bottom|left)$/,
		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
			rdisplayswap = /^(none|table(?!-c[ea]).+)/,
			rmargin = /^margin/,
			rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
			rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
			rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
			elemdisplay = { BODY: "block" },

			cssShow = { position: "absolute", visibility: "hidden", display: "block" },
			cssNormalTransform = {
				letterSpacing: 0,
				fontWeight: 400
			},

			cssExpand = [ "Top", "Right", "Bottom", "Left" ],
			cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

	// return a css property mapped to a potentially vendor prefixed property
		function vendorPropName( style, name ) {

			// shortcut for names that are not vendor prefixed
			if ( name in style ) {
				return name;
			}

			// check for vendor prefixed names
			var capName = name.charAt(0).toUpperCase() + name.slice(1),
				origName = name,
				i = cssPrefixes.length;

			while ( i-- ) {
				name = cssPrefixes[ i ] + capName;
				if ( name in style ) {
					return name;
				}
			}

			return origName;
		}

		function isHidden( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		}

		function showHide( elements, show ) {
			var display, elem, hidden,
				values = [],
				index = 0,
				length = elements.length;

			for ( ; index < length; index++ ) {
				elem = elements[ index ];
				if ( !elem.style ) {
					continue;
				}

				values[ index ] = jQuery._data( elem, "olddisplay" );
				display = elem.style.display;
				if ( show ) {
					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if ( !values[ index ] && display === "none" ) {
						elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if ( elem.style.display === "" && isHidden( elem ) ) {
						values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
					}
				} else {

					if ( !values[ index ] ) {
						hidden = isHidden( elem );

						if ( display && display !== "none" || !hidden ) {
							jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
						}
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for ( index = 0; index < length; index++ ) {
				elem = elements[ index ];
				if ( !elem.style ) {
					continue;
				}
				if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
					elem.style.display = show ? values[ index ] || "" : "none";
				}
			}

			return elements;
		}

		jQuery.fn.extend({
			css: function( name, value ) {
				return jQuery.access( this, function( elem, name, value ) {
					var len, styles,
						map = {},
						i = 0;

					if ( jQuery.isArray( name ) ) {
						styles = getStyles( elem );
						len = name.length;

						for ( ; i < len; i++ ) {
							map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
						}

						return map;
					}

					return value !== undefined ?
						jQuery.style( elem, name, value ) :
						jQuery.css( elem, name );
				}, name, value, arguments.length > 1 );
			},
			show: function() {
				return showHide( this, true );
			},
			hide: function() {
				return showHide( this );
			},
			toggle: function( state ) {
				var bool = typeof state === "boolean";

				return this.each(function() {
					if ( bool ? state : isHidden( this ) ) {
						jQuery( this ).show();
					} else {
						jQuery( this ).hide();
					}
				});
			}
		});

		jQuery.extend({
			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function( elem, computed ) {
						if ( computed ) {
							// We should always get a number back from opacity
							var ret = curCSS( elem, "opacity" );
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

			// Exclude the following css properties to add px
			cssNumber: {
				"columnCount": true,
				"fillOpacity": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},

			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {
				// normalize float css property
				"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
			},

			// Get and set the style property on a DOM Node
			style: function( elem, name, value, extra ) {
				// Don't set styles on text and comment nodes
				if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
					return;
				}

				// Make sure that we're working with the right name
				var ret, type, hooks,
					origName = jQuery.camelCase( name ),
					style = elem.style;

				name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

				// Check if we're setting a value
				if ( value !== undefined ) {
					type = typeof value;

					// convert relative number strings (+= or -=) to relative numbers. #7345
					if ( type === "string" && (ret = rrelNum.exec( value )) ) {
						value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
						// Fixes bug #9237
						type = "number";
					}

					// Make sure that NaN and null values aren't set. See: #7116
					if ( value == null || type === "number" && isNaN( value ) ) {
						return;
					}

					// If a number was passed in, add 'px' to the (except for certain CSS properties)
					if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
						value += "px";
					}

					// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
					// but it would mean to define eight (for every problematic property) identical functions
					if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
						style[ name ] = "inherit";
					}

					// If a hook was provided, use that value, otherwise just set the specified value
					if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

						// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
						// Fixes bug #5509
						try {
							style[ name ] = value;
						} catch(e) {}
					}

				} else {
					// If a hook was provided get the non-computed value from there
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
						return ret;
					}

					// Otherwise just get the value from the style object
					return style[ name ];
				}
			},

			css: function( elem, name, extra, styles ) {
				var num, val, hooks,
					origName = jQuery.camelCase( name );

				// Make sure that we're working with the right name
				name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

				// If a hook was provided get the computed value from there
				if ( hooks && "get" in hooks ) {
					val = hooks.get( elem, true, extra );
				}

				// Otherwise, if a way to get the computed value exists, use that
				if ( val === undefined ) {
					val = curCSS( elem, name, styles );
				}

				//convert "normal" to computed value
				if ( val === "normal" && name in cssNormalTransform ) {
					val = cssNormalTransform[ name ];
				}

				// Return, converting to number if forced or a qualifier was provided and val looks numeric
				if ( extra === "" || extra ) {
					num = parseFloat( val );
					return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
				}
				return val;
			},

			// A method for quickly swapping in/out CSS properties to get correct calculations
			swap: function( elem, options, callback, args ) {
				var ret, name,
					old = {};

				// Remember the old values, and insert the new ones
				for ( name in options ) {
					old[ name ] = elem.style[ name ];
					elem.style[ name ] = options[ name ];
				}

				ret = callback.apply( elem, args || [] );

				// Revert the old values
				for ( name in options ) {
					elem.style[ name ] = old[ name ];
				}

				return ret;
			}
		});

	// NOTE: we've included the "window" in window.getComputedStyle
	// because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			getStyles = function( elem ) {
				return window.getComputedStyle( elem, null );
			};

			curCSS = function( elem, name, _computed ) {
				var width, minWidth, maxWidth,
					computed = _computed || getStyles( elem ),

				// getPropertyValue is only needed for .css('filter') in IE9, see #12537
					ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
					style = elem.style;

				if ( computed ) {

					if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
						ret = jQuery.style( elem, name );
					}

					// A tribute to the "awesome hack by Dean Edwards"
					// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
					// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
					// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
					if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

						// Remember the original values
						width = style.width;
						minWidth = style.minWidth;
						maxWidth = style.maxWidth;

						// Put in the new values to get a computed value out
						style.minWidth = style.maxWidth = style.width = ret;
						ret = computed.width;

						// Revert the changed values
						style.width = width;
						style.minWidth = minWidth;
						style.maxWidth = maxWidth;
					}
				}

				return ret;
			};
		} else if ( document.documentElement.currentStyle ) {
			getStyles = function( elem ) {
				return elem.currentStyle;
			};

			curCSS = function( elem, name, _computed ) {
				var left, rs, rsLeft,
					computed = _computed || getStyles( elem ),
					ret = computed ? computed[ name ] : undefined,
					style = elem.style;

				// Avoid setting ret to empty string here
				// so we don't default to auto
				if ( ret == null && style && style[ name ] ) {
					ret = style[ name ];
				}

				// From the awesome hack by Dean Edwards
				// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

				// If we're not dealing with a regular pixel number
				// but a number that has a weird ending, we need to convert it to pixels
				// but not position css attributes, as those are proportional to the parent element instead
				// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
				if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

					// Remember the original values
					left = style.left;
					rs = elem.runtimeStyle;
					rsLeft = rs && rs.left;

					// Put in the new values to get a computed value out
					if ( rsLeft ) {
						rs.left = elem.currentStyle.left;
					}
					style.left = name === "fontSize" ? "1em" : ret;
					ret = style.pixelLeft + "px";

					// Revert the changed values
					style.left = left;
					if ( rsLeft ) {
						rs.left = rsLeft;
					}
				}

				return ret === "" ? "auto" : ret;
			};
		}

		function setPositiveNumber( elem, value, subtract ) {
			var matches = rnumsplit.exec( value );
			return matches ?
				// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
				value;
		}

		function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
			var i = extra === ( isBorderBox ? "border" : "content" ) ?
					// If we already have the right measurement, avoid augmentation
					4 :
					// Otherwise initialize for horizontal or vertical properties
					name === "width" ? 1 : 0,

				val = 0;

			for ( ; i < 4; i += 2 ) {
				// both box models exclude margin, so add it if we want it
				if ( extra === "margin" ) {
					val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
				}

				if ( isBorderBox ) {
					// border-box includes padding, so remove it if we want content
					if ( extra === "content" ) {
						val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
					}

					// at this point, extra isn't border nor margin, so remove border
					if ( extra !== "margin" ) {
						val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
					}
				} else {
					// at this point, extra isn't content, so add padding
					val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

					// at this point, extra isn't content nor padding, so add border
					if ( extra !== "padding" ) {
						val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
					}
				}
			}

			return val;
		}

		function getWidthOrHeight( elem, name, extra ) {

			// Start with offset property, which is equivalent to the border-box value
			var valueIsBorderBox = true,
				val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
				styles = getStyles( elem ),
				isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

			// some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if ( val <= 0 || val == null ) {
				// Fall back to computed then uncomputed css if necessary
				val = curCSS( elem, name, styles );
				if ( val < 0 || val == null ) {
					val = elem.style[ name ];
				}

				// Computed unit is not pixels. Stop here and return.
				if ( rnumnonpx.test(val) ) {
					return val;
				}

				// we need the check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

				// Normalize "", auto, and prepare for extra
				val = parseFloat( val ) || 0;
			}

			// use the active box-sizing model to add/subtract irrelevant styles
			return ( val +
					augmentWidthOrHeight(
						elem,
						name,
						extra || ( isBorderBox ? "border" : "content" ),
						valueIsBorderBox,
						styles
					)
				) + "px";
		}

	// Try to determine the default display value of an element
		function css_defaultDisplay( nodeName ) {
			var doc = document,
				display = elemdisplay[ nodeName ];

			if ( !display ) {
				display = actualDisplay( nodeName, doc );

				// If the simple way fails, read from inside an iframe
				if ( display === "none" || !display ) {
					// Use the already-created iframe if possible
					iframe = ( iframe ||
						jQuery("<iframe frameborder='0' width='0' height='0'/>")
							.css( "cssText", "display:block !important" )
					).appendTo( doc.documentElement );

					// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
					doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
					doc.write("<!doctype html><html><body>");
					doc.close();

					display = actualDisplay( nodeName, doc );
					iframe.detach();
				}

				// Store the correct default display
				elemdisplay[ nodeName ] = display;
			}

			return display;
		}

	// Called ONLY from within css_defaultDisplay
		function actualDisplay( name, doc ) {
			var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
				display = jQuery.css( elem[0], "display" );
			elem.remove();
			return display;
		}

		jQuery.each([ "height", "width" ], function( i, name ) {
			jQuery.cssHooks[ name ] = {
				get: function( elem, computed, extra ) {
					if ( computed ) {
						// certain elements can have dimension info if we invisibly show them
						// however, it must have a current display style that would benefit from this
						return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
							jQuery.swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							}) :
							getWidthOrHeight( elem, name, extra );
					}
				},

				set: function( elem, value, extra ) {
					var styles = extra && getStyles( elem );
					return setPositiveNumber( elem, value, extra ?
						augmentWidthOrHeight(
							elem,
							name,
							extra,
							jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
							styles
						) : 0
					);
				}
			};
		});

		if ( !jQuery.support.opacity ) {
			jQuery.cssHooks.opacity = {
				get: function( elem, computed ) {
					// IE uses filters for opacity
					return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
						computed ? "1" : "";
				},

				set: function( elem, value ) {
					var style = elem.style,
						currentStyle = elem.currentStyle,
						opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
						filter = currentStyle && currentStyle.filter || style.filter || "";

					// IE has trouble with opacity if it does not have layout
					// Force it by setting the zoom level
					style.zoom = 1;

					// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
					// if value === "", then remove inline opacity #12685
					if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {

						// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
						// if "filter:" is present at all, clearType is disabled, we want to avoid this
						// style.removeAttribute is IE Only, but so apparently is this code path...
						style.removeAttribute( "filter" );

						// if there is no filter style applied in a css rule or unset inline opacity, we are done
						if ( value === "" || currentStyle && !currentStyle.filter ) {
							return;
						}
					}

					// otherwise, set new filter values
					style.filter = ralpha.test( filter ) ?
						filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
				}
			};
		}

	// These hooks cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
		jQuery(function() {
			if ( !jQuery.support.reliableMarginRight ) {
				jQuery.cssHooks.marginRight = {
					get: function( elem, computed ) {
						if ( computed ) {
							// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
							// Work around by temporarily setting element display to inline-block
							return jQuery.swap( elem, { "display": "inline-block" },
								curCSS, [ elem, "marginRight" ] );
						}
					}
				};
			}

			// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
			// getComputedStyle returns percent when specified for top/left/bottom/right
			// rather than make the css module depend on the offset module, we just check for it here
			if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
				jQuery.each( [ "top", "left" ], function( i, prop ) {
					jQuery.cssHooks[ prop ] = {
						get: function( elem, computed ) {
							if ( computed ) {
								computed = curCSS( elem, prop );
								// if curCSS returns percentage, fallback to offset
								return rnumnonpx.test( computed ) ?
								jQuery( elem ).position()[ prop ] + "px" :
									computed;
							}
						}
					};
				});
			}

		});

		if ( jQuery.expr && jQuery.expr.filters ) {
			jQuery.expr.filters.hidden = function( elem ) {
				// Support: Opera <= 12.12
				// Opera reports offsetWidths and offsetHeights less than zero on some elements
				return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
					(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
			};

			jQuery.expr.filters.visible = function( elem ) {
				return !jQuery.expr.filters.hidden( elem );
			};
		}

	// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function( prefix, suffix ) {
			jQuery.cssHooks[ prefix + suffix ] = {
				expand: function( value ) {
					var i = 0,
						expanded = {},

					// assumes a single number if not a string
						parts = typeof value === "string" ? value.split(" ") : [ value ];

					for ( ; i < 4; i++ ) {
						expanded[ prefix + cssExpand[ i ] + suffix ] =
							parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
					}

					return expanded;
				}
			};

			if ( !rmargin.test( prefix ) ) {
				jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
			}
		});
		var r20 = /%20/g,
			rbracket = /\[\]$/,
			rCRLF = /\r?\n/g,
			rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
			rsubmittable = /^(?:input|select|textarea|keygen)/i;

		jQuery.fn.extend({
			serialize: function() {
				return jQuery.param( this.serializeArray() );
			},
			serializeArray: function() {
				return this.map(function(){
						// Can add propHook for "elements" to filter or add form elements
						var elements = jQuery.prop( this, "elements" );
						return elements ? jQuery.makeArray( elements ) : this;
					})
					.filter(function(){
						var type = this.type;
						// Use .is(":disabled") so that fieldset[disabled] works
						return this.name && !jQuery( this ).is( ":disabled" ) &&
							rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
							( this.checked || !manipulation_rcheckableType.test( type ) );
					})
					.map(function( i, elem ){
						var val = jQuery( this ).val();

						return val == null ?
							null :
							jQuery.isArray( val ) ?
								jQuery.map( val, function( val ){
									return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
								}) :
							{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}).get();
			}
		});

	//Serialize an array of form elements or a set of
	//key/values into a query string
		jQuery.param = function( a, traditional ) {
			var prefix,
				s = [],
				add = function( key, value ) {
					// If value is a function, invoke it and return its value
					value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
					s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
				};

			// Set traditional to true for jQuery <= 1.3.2 behavior.
			if ( traditional === undefined ) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}

			// If an array was passed in, assume that it is an array of form elements.
			if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
				// Serialize the form elements
				jQuery.each( a, function() {
					add( this.name, this.value );
				});

			} else {
				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for ( prefix in a ) {
					buildParams( prefix, a[ prefix ], traditional, add );
				}
			}

			// Return the resulting serialization
			return s.join( "&" ).replace( r20, "+" );
		};

		function buildParams( prefix, obj, traditional, add ) {
			var name;

			if ( jQuery.isArray( obj ) ) {
				// Serialize array item.
				jQuery.each( obj, function( i, v ) {
					if ( traditional || rbracket.test( prefix ) ) {
						// Treat each array item as a scalar.
						add( prefix, v );

					} else {
						// Item is non-scalar (array or object), encode its numeric index.
						buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
					}
				});

			} else if ( !traditional && jQuery.type( obj ) === "object" ) {
				// Serialize object item.
				for ( name in obj ) {
					buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
				}

			} else {
				// Serialize scalar item.
				add( prefix, obj );
			}
		}
		jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

			// Handle event binding
			jQuery.fn[ name ] = function( data, fn ) {
				return arguments.length > 0 ?
					this.on( name, null, data, fn ) :
					this.trigger( name );
			};
		});

		jQuery.fn.hover = function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		};
		var
		// Document location
			ajaxLocParts,
			ajaxLocation,
			ajax_nonce = jQuery.now(),

			ajax_rquery = /\?/,
			rhash = /#.*$/,
			rts = /([?&])_=[^&]*/,
			rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
			rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			rnoContent = /^(?:GET|HEAD)$/,
			rprotocol = /^\/\//,
			rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

		// Keep a copy of the old load method
			_load = jQuery.fn.load,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
			prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
			transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
			allTypes = "*/".concat("*");

	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
		try {
			ajaxLocation = location.href;
		} catch( e ) {
			// Use the href attribute of an A element
			// since IE will modify it given document.location
			ajaxLocation = document.createElement( "a" );
			ajaxLocation.href = "";
			ajaxLocation = ajaxLocation.href;
		}

	// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports( structure ) {

			// dataTypeExpression is optional and defaults to "*"
			return function( dataTypeExpression, func ) {

				if ( typeof dataTypeExpression !== "string" ) {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
					i = 0,
					dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

				if ( jQuery.isFunction( func ) ) {
					// For each dataType in the dataTypeExpression
					while ( (dataType = dataTypes[i++]) ) {
						// Prepend if requested
						if ( dataType[0] === "+" ) {
							dataType = dataType.slice( 1 ) || "*";
							(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

							// Otherwise append
						} else {
							(structure[ dataType ] = structure[ dataType ] || []).push( func );
						}
					}
				}
			};
		}

	// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

			var inspected = {},
				seekingTransport = ( structure === transports );

			function inspect( dataType ) {
				var selected;
				inspected[ dataType ] = true;
				jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
					var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
					if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
						options.dataTypes.unshift( dataTypeOrTransport );
						inspect( dataTypeOrTransport );
						return false;
					} else if ( seekingTransport ) {
						return !( selected = dataTypeOrTransport );
					}
				});
				return selected;
			}

			return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
		}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
		function ajaxExtend( target, src ) {
			var deep, key,
				flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for ( key in src ) {
				if ( src[ key ] !== undefined ) {
					( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
				}
			}
			if ( deep ) {
				jQuery.extend( true, target, deep );
			}

			return target;
		}

		jQuery.fn.load = function( url, params, callback ) {
			if ( typeof url !== "string" && _load ) {
				return _load.apply( this, arguments );
			}

			var selector, response, type,
				self = this,
				off = url.indexOf(" ");

			if ( off >= 0 ) {
				selector = url.slice( off, url.length );
				url = url.slice( 0, off );
			}

			// If it's a function
			if ( jQuery.isFunction( params ) ) {

				// We assume that it's the callback
				callback = params;
				params = undefined;

				// Otherwise, build a param string
			} else if ( params && typeof params === "object" ) {
				type = "POST";
			}

			// If we have elements to modify, make the request
			if ( self.length > 0 ) {
				jQuery.ajax({
					url: url,

					// if "type" variable is undefined, then "GET" method will be used
					type: type,
					dataType: "html",
					data: params
				}).done(function( responseText ) {

					// Save response for use in complete callback
					response = arguments;

					self.html( selector ?

						// If a selector was specified, locate the right elements in a dummy div
						// Exclude scripts to avoid IE 'Permission Denied' errors
						jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

						// Otherwise use the full result
						responseText );

				}).complete( callback && function( jqXHR, status ) {
						self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
					});
			}

			return this;
		};

	// Attach a bunch of functions for handling common AJAX events
		jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
			jQuery.fn[ type ] = function( fn ){
				return this.on( type, fn );
			};
		});

		jQuery.each( [ "get", "post" ], function( i, method ) {
			jQuery[ method ] = function( url, data, callback, type ) {
				// shift arguments if data argument was omitted
				if ( jQuery.isFunction( data ) ) {
					type = type || callback;
					callback = data;
					data = undefined;
				}

				return jQuery.ajax({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				});
			};
		});

		jQuery.extend({

			// Counter for holding the number of active queries
			active: 0,

			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: ajaxLocation,
				type: "GET",
				isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				/*
				 timeout: 0,
				 data: null,
				 dataType: null,
				 username: null,
				 password: null,
				 cache: null,
				 throws: false,
				 traditional: false,
				 headers: {},
				 */

				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},

				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},

				responseFields: {
					xml: "responseXML",
					text: "responseText"
				},

				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {

					// Convert anything to text
					"* text": window.String,

					// Text to html (true = no transformation)
					"text html": true,

					// Evaluate text as a json expression
					"text json": jQuery.parseJSON,

					// Parse text as xml
					"text xml": jQuery.parseXML
				},

				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},

			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function( target, settings ) {
				return settings ?

					// Building a settings object
					ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

					// Extending ajaxSettings
					ajaxExtend( jQuery.ajaxSettings, target );
			},

			ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
			ajaxTransport: addToPrefiltersOrTransports( transports ),

			// Main method
			ajax: function( url, options ) {

				// If url is an object, simulate pre-1.5 signature
				if ( typeof url === "object" ) {
					options = url;
					url = undefined;
				}

				// Force options to be an object
				options = options || {};

				var // Cross-domain detection vars
					parts,
				// Loop variable
					i,
				// URL without anti-cache param
					cacheURL,
				// Response headers as string
					responseHeadersString,
				// timeout handle
					timeoutTimer,

				// To know if global events are to be dispatched
					fireGlobals,

					transport,
				// Response headers
					responseHeaders,
				// Create the final options object
					s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
					callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
					globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
				// Deferreds
					deferred = jQuery.Deferred(),
					completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
					statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
					requestHeaders = {},
					requestHeadersNames = {},
				// The jqXHR state
					state = 0,
				// Default abort message
					strAbort = "canceled",
				// Fake xhr
					jqXHR = {
						readyState: 0,

						// Builds headers hashtable if needed
						getResponseHeader: function( key ) {
							var match;
							if ( state === 2 ) {
								if ( !responseHeaders ) {
									responseHeaders = {};
									while ( (match = rheaders.exec( responseHeadersString )) ) {
										responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
									}
								}
								match = responseHeaders[ key.toLowerCase() ];
							}
							return match == null ? null : match;
						},

						// Raw string
						getAllResponseHeaders: function() {
							return state === 2 ? responseHeadersString : null;
						},

						// Caches the header
						setRequestHeader: function( name, value ) {
							var lname = name.toLowerCase();
							if ( !state ) {
								name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
								requestHeaders[ name ] = value;
							}
							return this;
						},

						// Overrides response content-type header
						overrideMimeType: function( type ) {
							if ( !state ) {
								s.mimeType = type;
							}
							return this;
						},

						// Status-dependent callbacks
						statusCode: function( map ) {
							var code;
							if ( map ) {
								if ( state < 2 ) {
									for ( code in map ) {
										// Lazy-add the new callback in a way that preserves old ones
										statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
									}
								} else {
									// Execute the appropriate callbacks
									jqXHR.always( map[ jqXHR.status ] );
								}
							}
							return this;
						},

						// Cancel the request
						abort: function( statusText ) {
							var finalText = statusText || strAbort;
							if ( transport ) {
								transport.abort( finalText );
							}
							done( 0, finalText );
							return this;
						}
					};

				// Attach deferreds
				deferred.promise( jqXHR ).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;

				// Remove hash character (#7531: and string promotion)
				// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;

				// Extract dataTypes list
				s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

				// A cross-domain request is in order when we have a protocol:host:port mismatch
				if ( s.crossDomain == null ) {
					parts = rurl.exec( s.url.toLowerCase() );
					s.crossDomain = !!( parts &&
						( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
					);
				}

				// Convert data if not already a string
				if ( s.data && s.processData && typeof s.data !== "string" ) {
					s.data = jQuery.param( s.data, s.traditional );
				}

				// Apply prefilters
				inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

				// If request was aborted inside a prefilter, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// We can fire global events as of now if asked to
				fireGlobals = s.global;

				// Watch for a new set of requests
				if ( fireGlobals && jQuery.active++ === 0 ) {
					jQuery.event.trigger("ajaxStart");
				}

				// Uppercase the type
				s.type = s.type.toUpperCase();

				// Determine if request has content
				s.hasContent = !rnoContent.test( s.type );

				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				cacheURL = s.url;

				// More options handling for requests with no content
				if ( !s.hasContent ) {

					// If data is available, append data to url
					if ( s.data ) {
						cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}

					// Add anti-cache in url if needed
					if ( s.cache === false ) {
						s.url = rts.test( cacheURL ) ?

							// If there is already a '_' parameter, set its value
							cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

							// Otherwise add one to the end
						cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
					}
				}

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					if ( jQuery.lastModified[ cacheURL ] ) {
						jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
					}
					if ( jQuery.etag[ cacheURL ] ) {
						jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
					}
				}

				// Set the correct header, if data is being sent
				if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
					jqXHR.setRequestHeader( "Content-Type", s.contentType );
				}

				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader(
					"Accept",
					s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
						s.accepts[ "*" ]
				);

				// Check for headers option
				for ( i in s.headers ) {
					jqXHR.setRequestHeader( i, s.headers[ i ] );
				}

				// Allow custom headers/mimetypes and early abort
				if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
					// Abort if not done already and return
					return jqXHR.abort();
				}

				// aborting is no longer a cancellation
				strAbort = "abort";

				// Install callbacks on deferreds
				for ( i in { success: 1, error: 1, complete: 1 } ) {
					jqXHR[ i ]( s[ i ] );
				}

				// Get transport
				transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

				// If no transport, we auto-abort
				if ( !transport ) {
					done( -1, "No Transport" );
				} else {
					jqXHR.readyState = 1;

					// Send global event
					if ( fireGlobals ) {
						globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
					}
					// Timeout
					if ( s.async && s.timeout > 0 ) {
						timeoutTimer = setTimeout(function() {
							jqXHR.abort("timeout");
						}, s.timeout );
					}

					try {
						state = 1;
						transport.send( requestHeaders, done );
					} catch ( e ) {
						// Propagate exception as error if not done
						if ( state < 2 ) {
							done( -1, e );
							// Simply rethrow otherwise
						} else {
							throw e;
						}
					}
				}

				// Callback for when everything is done
				function done( status, nativeStatusText, responses, headers ) {
					var isSuccess, success, error, response, modified,
						statusText = nativeStatusText;

					// Called once
					if ( state === 2 ) {
						return;
					}

					// State is "done" now
					state = 2;

					// Clear timeout if it exists
					if ( timeoutTimer ) {
						clearTimeout( timeoutTimer );
					}

					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;

					// Cache response headers
					responseHeadersString = headers || "";

					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;

					// Get response data
					if ( responses ) {
						response = ajaxHandleResponses( s, jqXHR, responses );
					}

					// If successful, handle type chaining
					if ( status >= 200 && status < 300 || status === 304 ) {

						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if ( s.ifModified ) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if ( modified ) {
								jQuery.lastModified[ cacheURL ] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if ( modified ) {
								jQuery.etag[ cacheURL ] = modified;
							}
						}

						// if no content
						if ( status === 204 ) {
							isSuccess = true;
							statusText = "nocontent";

							// if not modified
						} else if ( status === 304 ) {
							isSuccess = true;
							statusText = "notmodified";

							// If we have data, let's convert it
						} else {
							isSuccess = ajaxConvert( s, response );
							statusText = isSuccess.state;
							success = isSuccess.data;
							error = isSuccess.error;
							isSuccess = !error;
						}
					} else {
						// We extract error from statusText
						// then normalize statusText and status for non-aborts
						error = statusText;
						if ( status || !statusText ) {
							statusText = "error";
							if ( status < 0 ) {
								status = 0;
							}
						}
					}

					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = ( nativeStatusText || statusText ) + "";

					// Success/Error
					if ( isSuccess ) {
						deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
					} else {
						deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
					}

					// Status-dependent callbacks
					jqXHR.statusCode( statusCode );
					statusCode = undefined;

					if ( fireGlobals ) {
						globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
							[ jqXHR, s, isSuccess ? success : error ] );
					}

					// Complete
					completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

					if ( fireGlobals ) {
						globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
						// Handle the global AJAX counter
						if ( !( --jQuery.active ) ) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getScript: function( url, callback ) {
				return jQuery.get( url, undefined, callback, "script" );
			},

			getJSON: function( url, data, callback ) {
				return jQuery.get( url, data, callback, "json" );
			}
		});

		/* Handles responses to an ajax request:
		 * - sets all responseXXX fields accordingly
		 * - finds the right dataType (mediates between content-type and expected dataType)
		 * - returns the corresponding response
		 */
		function ajaxHandleResponses( s, jqXHR, responses ) {
			var firstDataType, ct, finalDataType, type,
				contents = s.contents,
				dataTypes = s.dataTypes,
				responseFields = s.responseFields;

			// Fill responseXXX fields
			for ( type in responseFields ) {
				if ( type in responses ) {
					jqXHR[ responseFields[type] ] = responses[ type ];
				}
			}

			// Remove auto dataType and get content-type in the process
			while( dataTypes[ 0 ] === "*" ) {
				dataTypes.shift();
				if ( ct === undefined ) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			// Check if we're dealing with a known content-type
			if ( ct ) {
				for ( type in contents ) {
					if ( contents[ type ] && contents[ type ].test( ct ) ) {
						dataTypes.unshift( type );
						break;
					}
				}
			}

			// Check to see if we have a response for the expected dataType
			if ( dataTypes[ 0 ] in responses ) {
				finalDataType = dataTypes[ 0 ];
			} else {
				// Try convertible dataTypes
				for ( type in responses ) {
					if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
						finalDataType = type;
						break;
					}
					if ( !firstDataType ) {
						firstDataType = type;
					}
				}
				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}

			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if ( finalDataType ) {
				if ( finalDataType !== dataTypes[ 0 ] ) {
					dataTypes.unshift( finalDataType );
				}
				return responses[ finalDataType ];
			}
		}

	// Chain conversions given the request and the original response
		function ajaxConvert( s, response ) {
			var conv2, current, conv, tmp,
				converters = {},
				i = 0,
			// Work with a copy of dataTypes in case we need to modify it for conversion
				dataTypes = s.dataTypes.slice(),
				prev = dataTypes[ 0 ];

			// Apply the dataFilter if provided
			if ( s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			// Create converters map with lowercased keys
			if ( dataTypes[ 1 ] ) {
				for ( conv in s.converters ) {
					converters[ conv.toLowerCase() ] = s.converters[ conv ];
				}
			}

			// Convert to each sequential dataType, tolerating list modification
			for ( ; (current = dataTypes[++i]); ) {

				// There's only work to do if current dataType is non-auto
				if ( current !== "*" ) {

					// Convert response if prev dataType is non-auto and differs from current
					if ( prev !== "*" && prev !== current ) {

						// Seek a direct converter
						conv = converters[ prev + " " + current ] || converters[ "* " + current ];

						// If none found, seek a pair
						if ( !conv ) {
							for ( conv2 in converters ) {

								// If conv2 outputs current
								tmp = conv2.split(" ");
								if ( tmp[ 1 ] === current ) {

									// If prev can be converted to accepted input
									conv = converters[ prev + " " + tmp[ 0 ] ] ||
										converters[ "* " + tmp[ 0 ] ];
									if ( conv ) {
										// Condense equivalence converters
										if ( conv === true ) {
											conv = converters[ conv2 ];

											// Otherwise, insert the intermediate dataType
										} else if ( converters[ conv2 ] !== true ) {
											current = tmp[ 0 ];
											dataTypes.splice( i--, 0, current );
										}

										break;
									}
								}
							}
						}

						// Apply converter (if not an equivalence)
						if ( conv !== true ) {

							// Unless errors are allowed to bubble, catch and return them
							if ( conv && s["throws"] ) {
								response = conv( response );
							} else {
								try {
									response = conv( response );
								} catch ( e ) {
									return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
								}
							}
						}
					}

					// Update prev for next iteration
					prev = current;
				}
			}

			return { state: "success", data: response };
		}
	// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function( text ) {
					jQuery.globalEval( text );
					return text;
				}
			}
		});

	// Handle cache's special case and global
		jQuery.ajaxPrefilter( "script", function( s ) {
			if ( s.cache === undefined ) {
				s.cache = false;
			}
			if ( s.crossDomain ) {
				s.type = "GET";
				s.global = false;
			}
		});

	// Bind script tag hack transport
		jQuery.ajaxTransport( "script", function(s) {

			// This transport only deals with cross domain requests
			if ( s.crossDomain ) {

				var script,
					head = document.head || jQuery("head")[0] || document.documentElement;

				return {

					send: function( _, callback ) {

						script = document.createElement("script");

						script.async = true;

						if ( s.scriptCharset ) {
							script.charset = s.scriptCharset;
						}

						script.src = s.url;

						// Attach handlers for all browsers
						script.onload = script.onreadystatechange = function( _, isAbort ) {

							if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

								// Handle memory leak in IE
								script.onload = script.onreadystatechange = null;

								// Remove the script
								if ( script.parentNode ) {
									script.parentNode.removeChild( script );
								}

								// Dereference the script
								script = null;

								// Callback if not abort
								if ( !isAbort ) {
									callback( 200, "success" );
								}
							}
						};

						// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
						// Use native DOM manipulation to avoid our domManip AJAX trickery
						head.insertBefore( script, head.firstChild );
					},

					abort: function() {
						if ( script ) {
							script.onload( undefined, true );
						}
					}
				};
			}
		});
		var oldCallbacks = [],
			rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
				this[ callback ] = true;
				return callback;
			}
		});

	// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

			var callbackName, overwritten, responseContainer,
				jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
							"url" :
						typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
					);

			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
					s.jsonpCallback() :
					s.jsonpCallback;

				// Insert callback into url or form data
				if ( jsonProp ) {
					s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
				} else if ( s.jsonp !== false ) {
					s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
				}

				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function() {
					if ( !responseContainer ) {
						jQuery.error( callbackName + " was not called" );
					}
					return responseContainer[ 0 ];
				};

				// force json dataType
				s.dataTypes[ 0 ] = "json";

				// Install callback
				overwritten = window[ callbackName ];
				window[ callbackName ] = function() {
					responseContainer = arguments;
				};

				// Clean-up function (fires after converters)
				jqXHR.always(function() {
					// Restore preexisting value
					window[ callbackName ] = overwritten;

					// Save back as free
					if ( s[ callbackName ] ) {
						// make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;

						// save the callback name for future use
						oldCallbacks.push( callbackName );
					}

					// Call if it was a function and we have a response
					if ( responseContainer && jQuery.isFunction( overwritten ) ) {
						overwritten( responseContainer[ 0 ] );
					}

					responseContainer = overwritten = undefined;
				});

				// Delegate to script
				return "script";
			}
		});
		var xhrCallbacks, xhrSupported,
			xhrId = 0,
		// #5280: Internet Explorer will keep connections alive if we don't abort on unload
			xhrOnUnloadAbort = window.ActiveXObject && function() {
					// Abort all pending requests
					var key;
					for ( key in xhrCallbacks ) {
						xhrCallbacks[ key ]( undefined, true );
					}
				};

	// Functions to create xhrs
		function createStandardXHR() {
			try {
				return new window.XMLHttpRequest();
			} catch( e ) {}
		}

		function createActiveXHR() {
			try {
				return new window.ActiveXObject("Microsoft.XMLHTTP");
			} catch( e ) {}
		}

	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
		jQuery.ajaxSettings.xhr = window.ActiveXObject ?
			/* Microsoft failed to properly
			 * implement the XMLHttpRequest in IE7 (can't request local files),
			 * so we use the ActiveXObject when it is available
			 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
			 * we need a fallback.
			 */
			function() {
				return !this.isLocal && createStandardXHR() || createActiveXHR();
			} :
			// For all other browsers, use the standard XMLHttpRequest object
			createStandardXHR;

	// Determine support properties
		xhrSupported = jQuery.ajaxSettings.xhr();
		jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
		xhrSupported = jQuery.support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
		if ( xhrSupported ) {

			jQuery.ajaxTransport(function( s ) {
				// Cross domain only allowed if supported through XMLHttpRequest
				if ( !s.crossDomain || jQuery.support.cors ) {

					var callback;

					return {
						send: function( headers, complete ) {

							// Get a new xhr
							var handle, i,
								xhr = s.xhr();

							// Open the socket
							// Passing null username, generates a login popup on Opera (#2865)
							if ( s.username ) {
								xhr.open( s.type, s.url, s.async, s.username, s.password );
							} else {
								xhr.open( s.type, s.url, s.async );
							}

							// Apply custom fields if provided
							if ( s.xhrFields ) {
								for ( i in s.xhrFields ) {
									xhr[ i ] = s.xhrFields[ i ];
								}
							}

							// Override mime type if needed
							if ( s.mimeType && xhr.overrideMimeType ) {
								xhr.overrideMimeType( s.mimeType );
							}

							// X-Requested-With header
							// For cross-domain requests, seeing as conditions for a preflight are
							// akin to a jigsaw puzzle, we simply never set it to be sure.
							// (it can always be set on a per-request basis or even using ajaxSetup)
							// For same-domain requests, won't change header if already provided.
							if ( !s.crossDomain && !headers["X-Requested-With"] ) {
								headers["X-Requested-With"] = "XMLHttpRequest";
							}

							// Need an extra try/catch for cross domain requests in Firefox 3
							try {
								for ( i in headers ) {
									xhr.setRequestHeader( i, headers[ i ] );
								}
							} catch( err ) {}

							// Do send the request
							// This may raise an exception which is actually
							// handled in jQuery.ajax (so no try/catch here)
							xhr.send( ( s.hasContent && s.data ) || null );

							// Listener
							callback = function( _, isAbort ) {
								var status, responseHeaders, statusText, responses;

								// Firefox throws exceptions when accessing properties
								// of an xhr when a network error occurred
								// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
								try {

									// Was never called and is aborted or complete
									if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

										// Only called once
										callback = undefined;

										// Do not keep as active anymore
										if ( handle ) {
											xhr.onreadystatechange = jQuery.noop;
											if ( xhrOnUnloadAbort ) {
												delete xhrCallbacks[ handle ];
											}
										}

										// If it's an abort
										if ( isAbort ) {
											// Abort it manually if needed
											if ( xhr.readyState !== 4 ) {
												xhr.abort();
											}
										} else {
											responses = {};
											status = xhr.status;
											responseHeaders = xhr.getAllResponseHeaders();

											// When requesting binary data, IE6-9 will throw an exception
											// on any attempt to access responseText (#11426)
											if ( typeof xhr.responseText === "string" ) {
												responses.text = xhr.responseText;
											}

											// Firefox throws an exception when accessing
											// statusText for faulty cross-domain requests
											try {
												statusText = xhr.statusText;
											} catch( e ) {
												// We normalize with Webkit giving an empty statusText
												statusText = "";
											}

											// Filter status for non standard behaviors

											// If the request is local and we have data: assume a success
											// (success with no data won't get notified, that's the best we
											// can do given current implementations)
											if ( !status && s.isLocal && !s.crossDomain ) {
												status = responses.text ? 200 : 404;
												// IE - #1450: sometimes returns 1223 when it should be 204
											} else if ( status === 1223 ) {
												status = 204;
											}
										}
									}
								} catch( firefoxAccessException ) {
									if ( !isAbort ) {
										complete( -1, firefoxAccessException );
									}
								}

								// Call complete if needed
								if ( responses ) {
									complete( status, statusText, responses, responseHeaders );
								}
							};

							if ( !s.async ) {
								// if we're in sync mode we fire the callback
								callback();
							} else if ( xhr.readyState === 4 ) {
								// (IE6 & IE7) if it's in cache and has been
								// retrieved directly we need to fire the callback
								setTimeout( callback );
							} else {
								handle = ++xhrId;
								if ( xhrOnUnloadAbort ) {
									// Create the active xhrs callbacks list if needed
									// and attach the unload handler
									if ( !xhrCallbacks ) {
										xhrCallbacks = {};
										jQuery( window ).unload( xhrOnUnloadAbort );
									}
									// Add to list of active xhrs callbacks
									xhrCallbacks[ handle ] = callback;
								}
								xhr.onreadystatechange = callback;
							}
						},

						abort: function() {
							if ( callback ) {
								callback( undefined, true );
							}
						}
					};
				}
			});
		}
		var fxNow, timerId,
			rfxtypes = /^(?:toggle|show|hide)$/,
			rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
			rrun = /queueHooks$/,
			animationPrefilters = [ defaultPrefilter ],
			tweeners = {
				"*": [function( prop, value ) {
					var end, unit,
						tween = this.createTween( prop, value ),
						parts = rfxnum.exec( value ),
						target = tween.cur(),
						start = +target || 0,
						scale = 1,
						maxIterations = 20;

					if ( parts ) {
						end = +parts[2];
						unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

						// We need to compute starting value
						if ( unit !== "px" && start ) {
							// Iteratively approximate from a nonzero starting point
							// Prefer the current property, because this process will be trivial if it uses the same units
							// Fallback to end or a simple constant
							start = jQuery.css( tween.elem, prop, true ) || end || 1;

							do {
								// If previous iteration zeroed out, double until we get *something*
								// Use a string for doubling factor so we don't accidentally see scale as unchanged below
								scale = scale || ".5";

								// Adjust and apply
								start = start / scale;
								jQuery.style( tween.elem, prop, start + unit );

								// Update scale, tolerating zero or NaN from tween.cur()
								// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
							} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
						}

						tween.unit = unit;
						tween.start = start;
						// If a +=/-= token was provided, we're doing a relative animation
						tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
					}
					return tween;
				}]
			};

	// Animations created synchronously will run synchronously
		function createFxNow() {
			setTimeout(function() {
				fxNow = undefined;
			});
			return ( fxNow = jQuery.now() );
		}

		function createTweens( animation, props ) {
			jQuery.each( props, function( prop, value ) {
				var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
					index = 0,
					length = collection.length;
				for ( ; index < length; index++ ) {
					if ( collection[ index ].call( animation, prop, value ) ) {

						// we're done with this property
						return;
					}
				}
			});
		}

		function Animation( elem, properties, options ) {
			var result,
				stopped,
				index = 0,
				length = animationPrefilters.length,
				deferred = jQuery.Deferred().always( function() {
					// don't match elem in the :animated selector
					delete tick.elem;
				}),
				tick = function() {
					if ( stopped ) {
						return false;
					}
					var currentTime = fxNow || createFxNow(),
						remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
						temp = remaining / animation.duration || 0,
						percent = 1 - temp,
						index = 0,
						length = animation.tweens.length;

					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( percent );
					}

					deferred.notifyWith( elem, [ animation, percent, remaining ]);

					if ( percent < 1 && length ) {
						return remaining;
					} else {
						deferred.resolveWith( elem, [ animation ] );
						return false;
					}
				},
				animation = deferred.promise({
					elem: elem,
					props: jQuery.extend( {}, properties ),
					opts: jQuery.extend( true, { specialEasing: {} }, options ),
					originalProperties: properties,
					originalOptions: options,
					startTime: fxNow || createFxNow(),
					duration: options.duration,
					tweens: [],
					createTween: function( prop, end ) {
						var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
						animation.tweens.push( tween );
						return tween;
					},
					stop: function( gotoEnd ) {
						var index = 0,
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
							length = gotoEnd ? animation.tweens.length : 0;
						if ( stopped ) {
							return this;
						}
						stopped = true;
						for ( ; index < length ; index++ ) {
							animation.tweens[ index ].run( 1 );
						}

						// resolve when we played the last frame
						// otherwise, reject
						if ( gotoEnd ) {
							deferred.resolveWith( elem, [ animation, gotoEnd ] );
						} else {
							deferred.rejectWith( elem, [ animation, gotoEnd ] );
						}
						return this;
					}
				}),
				props = animation.props;

			propFilter( props, animation.opts.specialEasing );

			for ( ; index < length ; index++ ) {
				result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
				if ( result ) {
					return result;
				}
			}

			createTweens( animation, props );

			if ( jQuery.isFunction( animation.opts.start ) ) {
				animation.opts.start.call( elem, animation );
			}

			jQuery.fx.timer(
				jQuery.extend( tick, {
					elem: elem,
					anim: animation,
					queue: animation.opts.queue
				})
			);

			// attach callbacks from options
			return animation.progress( animation.opts.progress )
				.done( animation.opts.done, animation.opts.complete )
				.fail( animation.opts.fail )
				.always( animation.opts.always );
		}

		function propFilter( props, specialEasing ) {
			var value, name, index, easing, hooks;

			// camelCase, specialEasing and expand cssHook pass
			for ( index in props ) {
				name = jQuery.camelCase( index );
				easing = specialEasing[ name ];
				value = props[ index ];
				if ( jQuery.isArray( value ) ) {
					easing = value[ 1 ];
					value = props[ index ] = value[ 0 ];
				}

				if ( index !== name ) {
					props[ name ] = value;
					delete props[ index ];
				}

				hooks = jQuery.cssHooks[ name ];
				if ( hooks && "expand" in hooks ) {
					value = hooks.expand( value );
					delete props[ name ];

					// not quite $.extend, this wont overwrite keys already present.
					// also - reusing 'index' from above because we have the correct "name"
					for ( index in value ) {
						if ( !( index in props ) ) {
							props[ index ] = value[ index ];
							specialEasing[ index ] = easing;
						}
					}
				} else {
					specialEasing[ name ] = easing;
				}
			}
		}

		jQuery.Animation = jQuery.extend( Animation, {

			tweener: function( props, callback ) {
				if ( jQuery.isFunction( props ) ) {
					callback = props;
					props = [ "*" ];
				} else {
					props = props.split(" ");
				}

				var prop,
					index = 0,
					length = props.length;

				for ( ; index < length ; index++ ) {
					prop = props[ index ];
					tweeners[ prop ] = tweeners[ prop ] || [];
					tweeners[ prop ].unshift( callback );
				}
			},

			prefilter: function( callback, prepend ) {
				if ( prepend ) {
					animationPrefilters.unshift( callback );
				} else {
					animationPrefilters.push( callback );
				}
			}
		});

		function defaultPrefilter( elem, props, opts ) {
			/*jshint validthis:true */
			var prop, index, length,
				value, dataShow, toggle,
				tween, hooks, oldfire,
				anim = this,
				style = elem.style,
				orig = {},
				handled = [],
				hidden = elem.nodeType && isHidden( elem );

			// handle queue: false promises
			if ( !opts.queue ) {
				hooks = jQuery._queueHooks( elem, "fx" );
				if ( hooks.unqueued == null ) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function() {
						if ( !hooks.unqueued ) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function() {
					// doing this makes sure that the complete handler will be called
					// before this completes
					anim.always(function() {
						hooks.unqueued--;
						if ( !jQuery.queue( elem, "fx" ).length ) {
							hooks.empty.fire();
						}
					});
				});
			}

			// height/width overflow pass
			if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
				// Make sure that nothing sneaks out
				// Record all 3 overflow attributes because IE does not
				// change the overflow attribute when overflowX and
				// overflowY are set to the same value
				opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

				// Set display property to inline-block for height/width
				// animations on inline elements that are having width/height animated
				if ( jQuery.css( elem, "display" ) === "inline" &&
					jQuery.css( elem, "float" ) === "none" ) {

					// inline-level elements accept inline-block;
					// block-level elements need to be inline with layout
					if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
						style.display = "inline-block";

					} else {
						style.zoom = 1;
					}
				}
			}

			if ( opts.overflow ) {
				style.overflow = "hidden";
				if ( !jQuery.support.shrinkWrapBlocks ) {
					anim.always(function() {
						style.overflow = opts.overflow[ 0 ];
						style.overflowX = opts.overflow[ 1 ];
						style.overflowY = opts.overflow[ 2 ];
					});
				}
			}


			// show/hide pass
			for ( index in props ) {
				value = props[ index ];
				if ( rfxtypes.exec( value ) ) {
					delete props[ index ];
					toggle = toggle || value === "toggle";
					if ( value === ( hidden ? "hide" : "show" ) ) {
						continue;
					}
					handled.push( index );
				}
			}

			length = handled.length;
			if ( length ) {
				dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}

				// store state if its toggle - enables .stop().toggle() to "reverse"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
				if ( hidden ) {
					jQuery( elem ).show();
				} else {
					anim.done(function() {
						jQuery( elem ).hide();
					});
				}
				anim.done(function() {
					var prop;
					jQuery._removeData( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				});
				for ( index = 0 ; index < length ; index++ ) {
					prop = handled[ index ];
					tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
					orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

					if ( !( prop in dataShow ) ) {
						dataShow[ prop ] = tween.start;
						if ( hidden ) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}
			}
		}

		function Tween( elem, options, prop, end, easing ) {
			return new Tween.prototype.init( elem, options, prop, end, easing );
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function( elem, options, prop, end, easing, unit ) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || "swing";
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
			},
			cur: function() {
				var hooks = Tween.propHooks[ this.prop ];

				return hooks && hooks.get ?
					hooks.get( this ) :
					Tween.propHooks._default.get( this );
			},
			run: function( percent ) {
				var eased,
					hooks = Tween.propHooks[ this.prop ];

				if ( this.options.duration ) {
					this.pos = eased = jQuery.easing[ this.easing ](
						percent, this.options.duration * percent, 0, 1, this.options.duration
					);
				} else {
					this.pos = eased = percent;
				}
				this.now = ( this.end - this.start ) * eased + this.start;

				if ( this.options.step ) {
					this.options.step.call( this.elem, this.now, this );
				}

				if ( hooks && hooks.set ) {
					hooks.set( this );
				} else {
					Tween.propHooks._default.set( this );
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function( tween ) {
					var result;

					if ( tween.elem[ tween.prop ] != null &&
						(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
						return tween.elem[ tween.prop ];
					}

					// passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails
					// so, simple values such as "10px" are parsed to Float.
					// complex values such as "rotate(1rad)" are returned as is.
					result = jQuery.css( tween.elem, tween.prop, "" );
					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function( tween ) {
					// use step hook for back compat - use cssHook if its there - use .style if its
					// available and use plain properties where available
					if ( jQuery.fx.step[ tween.prop ] ) {
						jQuery.fx.step[ tween.prop ]( tween );
					} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
						jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
					} else {
						tween.elem[ tween.prop ] = tween.now;
					}
				}
			}
		};

	// Remove in 2.0 - this supports IE8's panic based approach
	// to setting things on disconnected nodes

		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function( tween ) {
				if ( tween.elem.nodeType && tween.elem.parentNode ) {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		};

		jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
			var cssFn = jQuery.fn[ name ];
			jQuery.fn[ name ] = function( speed, easing, callback ) {
				return speed == null || typeof speed === "boolean" ?
					cssFn.apply( this, arguments ) :
					this.animate( genFx( name, true ), speed, easing, callback );
			};
		});

		jQuery.fn.extend({
			fadeTo: function( speed, to, easing, callback ) {

				// show any hidden elements after setting opacity to 0
				return this.filter( isHidden ).css( "opacity", 0 ).show()

					// animate to the value specified
					.end().animate({ opacity: to }, speed, easing, callback );
			},
			animate: function( prop, speed, easing, callback ) {
				var empty = jQuery.isEmptyObject( prop ),
					optall = jQuery.speed( speed, easing, callback ),
					doAnimation = function() {
						// Operate on a copy of prop so per-property easing won't be lost
						var anim = Animation( this, jQuery.extend( {}, prop ), optall );
						doAnimation.finish = function() {
							anim.stop( true );
						};
						// Empty animations, or finishing resolves immediately
						if ( empty || jQuery._data( this, "finish" ) ) {
							anim.stop( true );
						}
					};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ?
					this.each( doAnimation ) :
					this.queue( optall.queue, doAnimation );
			},
			stop: function( type, clearQueue, gotoEnd ) {
				var stopQueue = function( hooks ) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop( gotoEnd );
				};

				if ( typeof type !== "string" ) {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if ( clearQueue && type !== false ) {
					this.queue( type || "fx", [] );
				}

				return this.each(function() {
					var dequeue = true,
						index = type != null && type + "queueHooks",
						timers = jQuery.timers,
						data = jQuery._data( this );

					if ( index ) {
						if ( data[ index ] && data[ index ].stop ) {
							stopQueue( data[ index ] );
						}
					} else {
						for ( index in data ) {
							if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
								stopQueue( data[ index ] );
							}
						}
					}

					for ( index = timers.length; index--; ) {
						if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
							timers[ index ].anim.stop( gotoEnd );
							dequeue = false;
							timers.splice( index, 1 );
						}
					}

					// start the next in the queue if the last step wasn't forced
					// timers currently will call their complete callbacks, which will dequeue
					// but only if they were gotoEnd
					if ( dequeue || !gotoEnd ) {
						jQuery.dequeue( this, type );
					}
				});
			},
			finish: function( type ) {
				if ( type !== false ) {
					type = type || "fx";
				}
				return this.each(function() {
					var index,
						data = jQuery._data( this ),
						queue = data[ type + "queue" ],
						hooks = data[ type + "queueHooks" ],
						timers = jQuery.timers,
						length = queue ? queue.length : 0;

					// enable finishing flag on private data
					data.finish = true;

					// empty the queue first
					jQuery.queue( this, type, [] );

					if ( hooks && hooks.cur && hooks.cur.finish ) {
						hooks.cur.finish.call( this );
					}

					// look for any active animations, and finish them
					for ( index = timers.length; index--; ) {
						if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
							timers[ index ].anim.stop( true );
							timers.splice( index, 1 );
						}
					}

					// look for any animations in the old queue and finish them
					for ( index = 0; index < length; index++ ) {
						if ( queue[ index ] && queue[ index ].finish ) {
							queue[ index ].finish.call( this );
						}
					}

					// turn off finishing flag
					delete data.finish;
				});
			}
		});

	// Generate parameters to create a standard animation
		function genFx( type, includeWidth ) {
			var which,
				attrs = { height: type },
				i = 0;

			// if we include width, step value is 1 to do all cssExpand values,
			// if we don't include width, step value is 2 to skip over Left and Right
			includeWidth = includeWidth? 1 : 0;
			for( ; i < 4 ; i += 2 - includeWidth ) {
				which = cssExpand[ i ];
				attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
			}

			if ( includeWidth ) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

	// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function( name, props ) {
			jQuery.fn[ name ] = function( speed, easing, callback ) {
				return this.animate( props, speed, easing, callback );
			};
		});

		jQuery.speed = function( speed, easing, fn ) {
			var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
				complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
			};

			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
				opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

			// normalize opt.queue - true/undefined/null -> "fx"
			if ( opt.queue == null || opt.queue === true ) {
				opt.queue = "fx";
			}

			// Queueing
			opt.old = opt.complete;

			opt.complete = function() {
				if ( jQuery.isFunction( opt.old ) ) {
					opt.old.call( this );
				}

				if ( opt.queue ) {
					jQuery.dequeue( this, opt.queue );
				}
			};

			return opt;
		};

		jQuery.easing = {
			linear: function( p ) {
				return p;
			},
			swing: function( p ) {
				return 0.5 - Math.cos( p*Math.PI ) / 2;
			}
		};

		jQuery.timers = [];
		jQuery.fx = Tween.prototype.init;
		jQuery.fx.tick = function() {
			var timer,
				timers = jQuery.timers,
				i = 0;

			fxNow = jQuery.now();

			for ( ; i < timers.length; i++ ) {
				timer = timers[ i ];
				// Checks the timer has not already been removed
				if ( !timer() && timers[ i ] === timer ) {
					timers.splice( i--, 1 );
				}
			}

			if ( !timers.length ) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function( timer ) {
			if ( timer() && jQuery.timers.push( timer ) ) {
				jQuery.fx.start();
			}
		};

		jQuery.fx.interval = 13;

		jQuery.fx.start = function() {
			if ( !timerId ) {
				timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
			}
		};

		jQuery.fx.stop = function() {
			clearInterval( timerId );
			timerId = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,
			// Default speed
			_default: 400
		};

	// Back Compat <1.8 extension point
		jQuery.fx.step = {};

		if ( jQuery.expr && jQuery.expr.filters ) {
			jQuery.expr.filters.animated = function( elem ) {
				return jQuery.grep(jQuery.timers, function( fn ) {
					return elem === fn.elem;
				}).length;
			};
		}
		jQuery.fn.offset = function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}

			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		};

		jQuery.offset = {

			setOffset: function( elem, options, i ) {
				var position = jQuery.css( elem, "position" );

				// set position first, in-case top/left are set even on static elem
				if ( position === "static" ) {
					elem.style.position = "relative";
				}

				var curElem = jQuery( elem ),
					curOffset = curElem.offset(),
					curCSSTop = jQuery.css( elem, "top" ),
					curCSSLeft = jQuery.css( elem, "left" ),
					calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
					props = {}, curPosition = {}, curTop, curLeft;

				// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
				if ( calculatePosition ) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat( curCSSTop ) || 0;
					curLeft = parseFloat( curCSSLeft ) || 0;
				}

				if ( jQuery.isFunction( options ) ) {
					options = options.call( elem, i, curOffset );
				}

				if ( options.top != null ) {
					props.top = ( options.top - curOffset.top ) + curTop;
				}
				if ( options.left != null ) {
					props.left = ( options.left - curOffset.left ) + curLeft;
				}

				if ( "using" in options ) {
					options.using.call( elem, props );
				} else {
					curElem.css( props );
				}
			}
		};


		jQuery.fn.extend({

			position: function() {
				if ( !this[ 0 ] ) {
					return;
				}

				var offsetParent, offset,
					parentOffset = { top: 0, left: 0 },
					elem = this[ 0 ];

				// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
				if ( jQuery.css( elem, "position" ) === "fixed" ) {
					// we assume that getBoundingClientRect is available when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {
					// Get *real* offsetParent
					offsetParent = this.offsetParent();

					// Get correct offsets
					offset = this.offset();
					if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
						parentOffset = offsetParent.offset();
					}

					// Add offsetParent borders
					parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
				}

				// Subtract parent offsets and element margins
				// note: when an element has margin: auto the offsetLeft and marginLeft
				// are the same in Safari causing offset.left to incorrectly be 0
				return {
					top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
					left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
				};
			},

			offsetParent: function() {
				return this.map(function() {
					var offsetParent = this.offsetParent || document.documentElement;
					while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
						offsetParent = offsetParent.offsetParent;
					}
					return offsetParent || document.documentElement;
				});
			}
		});


	// Create scrollLeft and scrollTop methods
		jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
			var top = /Y/.test( prop );

			jQuery.fn[ method ] = function( val ) {
				return jQuery.access( this, function( elem, method, val ) {
					var win = getWindow( elem );

					if ( val === undefined ) {
						return win ? (prop in win) ? win[ prop ] :
							win.document.documentElement[ method ] :
							elem[ method ];
					}

					if ( win ) {
						win.scrollTo(
							!top ? val : jQuery( win ).scrollLeft(),
							top ? val : jQuery( win ).scrollTop()
						);

					} else {
						elem[ method ] = val;
					}
				}, method, val, arguments.length, null );
			};
		});

		function getWindow( elem ) {
			return jQuery.isWindow( elem ) ?
				elem :
				elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
					false;
		}
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
			jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
				// margin is only for outerHeight, outerWidth
				jQuery.fn[ funcName ] = function( margin, value ) {
					var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
						extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

					return jQuery.access( this, function( elem, type, value ) {
						var doc;

						if ( jQuery.isWindow( elem ) ) {
							// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
							// isn't a whole lot we can do. See pull request at this URL for discussion:
							// https://github.com/jquery/jquery/pull/764
							return elem.document.documentElement[ "client" + name ];
						}

						// Get document width or height
						if ( elem.nodeType === 9 ) {
							doc = elem.documentElement;

							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
							// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
							return Math.max(
								elem.body[ "scroll" + name ], doc[ "scroll" + name ],
								elem.body[ "offset" + name ], doc[ "offset" + name ],
								doc[ "client" + name ]
							);
						}

						return value === undefined ?
							// Get width or height on the element, requesting but not forcing parseFloat
							jQuery.css( elem, type, extra ) :

							// Set width or height on the element
							jQuery.style( elem, type, value, extra );
					}, type, chainable ? margin : undefined, chainable, null );
				};
			});
		});
	// Limit scope pollution from any deprecated API
	// (function() {

	// })();
	// Expose jQuery to the global object
		window.jQuery = window.$ = jQuery;

	// Expose jQuery as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase jquery is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
		if ( "function" === "function" && __webpack_require__(3) && __webpack_require__(3).jQuery ) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () { return jQuery; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}

	})( window );

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {"jquery":true}))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * built in 2016-7-13:1 version 0.44 by 司徒正美
	 * 2011.8.31
	 *      将会传送器的abort方法上传到avalon.XHR.abort去处理
	 *      修复serializeArray的bug
	 *      对XMLHttpRequest.abort进行try...catch
	 *      2012.3.31 v2 大重构,支持XMLHttpRequest Level2
	 *      2013.4.8 v3 大重构 支持二进制上传与下载
	 *      http://www.cnblogs.com/heyuquan/archive/2013/05/13/3076465.html
	 *      2014.12.25  v4 大重构
	 *      2015.3.2   去掉mmPromise
	 *      2015.3.13  使用加强版mmPromise
	 *      2015.3.17  增加 xhr 的 onprogress 回调
	 *      2016.7.2 fix跨域检测
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["avalon"] = factory();
		else
			root["avalon"] = factory();
	})(this, function() {
		return /******/ (function(modules) { // webpackBootstrap
			/******/ 	// The module cache
			/******/ 	var installedModules = {};

			/******/ 	// The require function
			/******/ 	function __webpack_require__(moduleId) {

				/******/ 		// Check if module is in cache
				/******/ 		if(installedModules[moduleId])
				/******/ 			return installedModules[moduleId].exports;

				/******/ 		// Create a new module (and put it into the cache)
				/******/ 		var module = installedModules[moduleId] = {
					/******/ 			exports: {},
					/******/ 			id: moduleId,
					/******/ 			loaded: false
					/******/ 		};

				/******/ 		// Execute the module function
				/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ 		// Flag the module as loaded
				/******/ 		module.loaded = true;

				/******/ 		// Return the exports of the module
				/******/ 		return module.exports;
				/******/ 	}


			/******/ 	// expose the modules object (__webpack_modules__)
			/******/ 	__webpack_require__.m = modules;

			/******/ 	// expose the module cache
			/******/ 	__webpack_require__.c = installedModules;

			/******/ 	// __webpack_public_path__
			/******/ 	__webpack_require__.p = "";

			/******/ 	// Load entry module and return exports
			/******/ 	return __webpack_require__(0);
			/******/ })
		/************************************************************************/
		/******/ ([
			/* 0 */
			/***/ function(module, exports, __webpack_require__) {

				var ajaxExtend = __webpack_require__(1)
				var XHRMethods = __webpack_require__(3)
				var rjsonp = __webpack_require__(4)


				var Promise = avalon.Promise = __webpack_require__(5)
				function done(onSuccess) {//添加成功回调
					return this.then(onSuccess, ng)
				}
				function fail(onFail) {//添加出错回调
					return this.then(ok, onFail)
				}
				Promise.prototype.done = done
				Promise.prototype.fail = fail
				__webpack_require__(6)

				var supportCors = __webpack_require__(8)
				var rjsonp = __webpack_require__(4)
				var transports = __webpack_require__(9)
				var accepts = __webpack_require__(11)
				__webpack_require__(12)
				__webpack_require__(13)
				__webpack_require__(14)
				__webpack_require__(15)
				__webpack_require__(16)

				/**
				 * global event handler
				 */
				// 记录当前活跃的 ajax 数
				var ajaxActive = 0

				//ajax主函数
				avalon.ajax = function (opts, promise) {
					if (!opts || !opts.url) {
						avalon.error("参数必须为Object并且拥有url属性")
					}
					opts = ajaxExtend(opts)  //处理用户参数，比如生成querystring, type大写化
					//创建一个伪XMLHttpRequest,能处理complete,success,error等多投事件
					var XHRProperties = {
						responseHeadersString: "",
						responseHeaders: {},
						requestHeaders: {},
						querystring: opts.querystring,
						readyState: 0,
						uniqueID: ("" + Math.random()).replace(/0\./, ""),
						status: 0
					}
					var _reject, _resolve
					var promise = new Promise(function (resolve, reject) {
						_resolve = resolve
						_reject = reject
					})

					promise.options = opts
					promise._reject = _reject
					promise._resolve = _resolve

					var doneList = [], failList = []

					Array("done", "fail", "always").forEach(function (method) {
						promise[method] = function (fn) {
							if (typeof fn === "function") {
								if (method !== "fail")
									doneList.push(fn)
								if (method !== "done")
									failList.push(fn)
							}
							return this
						}
					})

					var isSync = opts.async === false
					if (isSync) {
						avalon.log("warnning:与jquery1.8一样,async:false这配置已经被废弃")
						promise.async = false
					}


					avalon.mix(promise, XHRProperties, XHRMethods)

					promise.then(function (value) {
						value = Array.isArray(value) ? value : value === void 0 ? [] : [value]
						for (var i = 0, fn; fn = doneList[i++]; ) {
							fn.apply(promise, value)
						}
						return value
					}, function (value) {
						value = Array.isArray(value) ? value : value === void 0 ? [] : [value]
						for (var i = 0, fn; fn = failList[i++]; ) {
							fn.apply(promise, value)
						}
						return value
					})


					promise.done(opts.success).fail(opts.error).always(opts.complete)

					var dataType = opts.dataType  //目标返回数据类型

					if ((opts.crossDomain && !supportCors || rjsonp.test(opts.url)) && dataType === "json" && opts.type === "GET") {
						dataType = opts.dataType = "jsonp"
					}
					var name = opts.form ? "upload" : dataType
					var transport = transports[name] || transports.xhr
					avalon.mix(promise, transport)  //取得传送器的request, respond, preproccess
					if (promise.preproccess) { //这用于jsonp upload传送器
						dataType = promise.preproccess() || dataType
					}
					//设置首部 1、Content-Type首部
					if (opts.contentType) {
						promise.setRequestHeader("Content-Type", opts.contentType)
					}
					//2.处理Accept首部
					promise.setRequestHeader("Accept", accepts[dataType] ? accepts[dataType] + ", */*; q=0.01" : accepts["*"])
					for (var i in opts.headers) { //3. 处理headers里面的首部
						promise.setRequestHeader(i, opts.headers[i])
					}
					// 4.处理超时
					if (opts.async && opts.timeout > 0) {
						promise.timeoutID = setTimeout(function () {
							promise.abort("timeout")
							promise.dispatch(0, "timeout")
						}, opts.timeout)
					}

					/**
					 * global event handler
					 */
					if (ajaxActive === 0) {
						// 第一个
						avalon.ajaxGlobalEvents.start()
					}
					avalon.ajaxGlobalEvents.send(promise, opts)
					ajaxActive++

					promise.request()
					return promise
				};
				"get,post".replace(avalon.rword, function (method) {
					avalon[method] = function (url, data, callback, type) {
						if (typeof data === "function") {
							type = type || callback
							callback = data
							data = void 0
						}
						return avalon.ajax({
							type: method,
							url: url,
							data: data,
							success: callback,
							dataType: type
						})
					};
				})
				function ok(val) {
					return val
				}
				function ng(e) {
					throw e
				}
				avalon.getScript = function (url, callback) {
					return avalon.get(url, null, callback, "script")
				}
				avalon.getJSON = function (url, data, callback) {
					return avalon.get(url, data, callback, "json")
				}
				avalon.upload = function (url, form, data, callback, dataType) {
					if (typeof data === "function") {
						dataType = callback;
						callback = data;
						data = void 0;
					}
					return avalon.ajax({
						url: url,
						type: "post",
						dataType: dataType,
						form: form,
						data: data,
						success: callback
					})
				}


				/**
				 * global event handler
				 */
				avalon.ajaxGlobalEvents = {};

				["start", "stop", "complete", "error", "success", "send"].forEach(function (method) {
					avalon.ajaxGlobalEvents[method] = avalon.noop
				})


				//-----------

				if (!String.prototype.startsWith) {
					String.prototype.startsWith = function (searchString, position) {
						position = position || 0;
						return this.lastIndexOf(searchString, position) === position;
					}
				}

				if (!Date.prototype.toISOString) {
					function pad(number) {
						if (number < 10) {
							return '0' + number
						}
						return number
					}
					Date.prototype.toISOString = function () {
						return this.getUTCFullYear() +
							'-' + pad(this.getUTCMonth() + 1) +
							'-' + pad(this.getUTCDate()) +
							'T' + pad(this.getUTCHours()) +
							':' + pad(this.getUTCMinutes()) +
							':' + pad(this.getUTCSeconds()) +
							'.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
							'Z';
					}
				}

				module.exports = avalon

				/***/ },
			/* 1 */
			/***/ function(module, exports, __webpack_require__) {

				//ajaxExtend是一个非常重要的内部方法，负责将用法参数进行规整化
				//1. data转换为字符串
				//2. type转换为大写
				//3. url正常化，加querystring, 加时间戮
				//4. 判定有没有跨域
				//5. 添加hasContent参数
				var defaults = {
					type: "GET",
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					async: true,
					jsonp: "callback"
				}
				var originAnchor = __webpack_require__(2)
				var rnoContent = /^(?:GET|HEAD)$/
				var rprotocol = /^\/\//
				var rhash = /#.*$/
				var rquery = /\?/


				function ajaxExtend(opts) {
					opts = avalon.mix({}, defaults, opts)
					opts.type = opts.type.toUpperCase()
					var querystring = typeof opts.data === "string" ? opts.data : avalon.param(opts.data)
					opts.querystring = querystring || ""
					opts.url = opts.url.replace(rhash, "").replace(rprotocol, location.protocol + "//")

					if (typeof opts.crossDomain !== "boolean") { //判定是否跨域
						var urlAnchor = document.createElement("a")
						// Support: IE6-11+
						// IE throws exception if url is malformed, e.g. http://example.com:80x/
						try {
							urlAnchor.href = opts.url
							// in IE7-, get the absolute path
							var absUrl = !"1"[0] ? urlAnchor.getAttribute("href", 4) : urlAnchor.href
							urlAnchor.href = absUrl
							opts.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host
						} catch (e) {
							opts.crossDomain = true
						}
					}
					opts.hasContent = !rnoContent.test(opts.type)  //是否为post请求
					if (!opts.hasContent) {
						if (querystring) { //如果为GET请求,则参数依附于url上
							opts.url += (rquery.test(opts.url) ? "&" : "?") + querystring
						}
						if (opts.cache === false) { //添加时间截
							opts.url += (rquery.test(opts.url) ? "&" : "?") + "_time=" + (new Date() - 0)
						}
					}
					return opts
				}

				module.exports = ajaxExtend

				/***/ },
			/* 2 */
			/***/ function(module, exports) {

				//用于判定是否跨域
				var originAnchor = document.createElement("a")
				originAnchor.href = location.href

				module.exports = originAnchor

				/***/ },
			/* 3 */
			/***/ function(module, exports) {

				/**
				 * 伪XMLHttpRequest类,用于屏蔽浏览器差异性
				 * var ajax = new(self.XMLHttpRequest||ActiveXObject)("Microsoft.XMLHTTP")
				 * ajax.onreadystatechange = function(){
		 *   if (ajax.readyState==4 && ajax.status==200){
		 *        alert(ajax.responseText)
		 *   }
		 * }
				 * ajax.open("POST", url, true)
				 * ajax.send("key=val&key1=val2")
				 */
				var rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg

				var XHRMethods = {
					setRequestHeader: function (name, value) {
						this.requestHeaders[name] = value
						return this
					},
					getAllResponseHeaders: function () {
						return this.readyState === 4 ? this.responseHeadersString : null
					},
					getResponseHeader: function (name, match) {
						if (this.readyState === 4) {
							while ((match = rheaders.exec(this.responseHeadersString))) {
								this.responseHeaders[match[1]] = match[2]
							}
							match = this.responseHeaders[name]
						}
						return match === undefined ? null : match
					},
					overrideMimeType: function (type) {
						this.mimeType = type
						return this
					},
					// 中止请求
					abort: function (statusText) {
						statusText = statusText || "abort"
						if (this.transport) {
							this.respond(0, statusText)
						}
						return this
					},
					/**
					 * 用于派发success,error,complete等回调
					 * http://www.cnblogs.com/rubylouvre/archive/2011/05/18/2049989.html
					 * @param {Number} status 状态码
					 * @param {String} statusText 对应的扼要描述
					 */
					dispatch: function (status, nativeStatusText) {
						var statusText = nativeStatusText
						// 只能执行一次，防止重复执行
						if (!this.transport) { //2:已执行回调
							return
						}
						this.readyState = 4
						var isSuccess = status >= 200 && status < 300 || status === 304
						if (isSuccess) {
							if (status === 204) {
								statusText = "nocontent"
							} else if (status === 304) {
								statusText = "notmodified"
							} else {
								//如果浏览器能直接返回转换好的数据就最好不过,否则需要手动转换
								if (typeof this.response === "undefined") {
									var dataType = this.options.dataType || this.options.mimeType
									if (!dataType && this.responseText || this.responseXML) { //如果没有指定dataType，则根据mimeType或Content-Type进行揣测
										dataType = this.getResponseHeader("Content-Type") || ""
										dataType = dataType.match(/json|xml|script|html/i) || ["text"]
										dataType = dataType[0].toLowerCase()
									}
									var responseText = this.responseText || '',
										responseXML = this.responseXML || ''
									try {
										this.response = avalon.ajaxConverters[dataType].call(this, responseText, responseXML)
									} catch (e) {
										isSuccess = false
										this.error = e
										statusText = "parsererror"
									}
								}
							}
						}
						this.status = status
						this.statusText = statusText + ""
						if (this.timeoutID) {
							clearTimeout(this.timeoutID)
							delete this.timeoutID
						}
						this._transport = this.transport

						/**
						 * global event handler
						 */
						var that = this

						// 到这要么成功，调用success, 要么失败，调用 error, 最终都会调用 complete
						if (isSuccess) {
							this._resolve([this.response, statusText, this])
							/**
							 * global event handler
							 */
							window.setTimeout(function() {
								avalon.ajaxGlobalEvents.success(that, that.options, that.response)
							}, 0)
						} else {
							this._reject([this, statusText, this.error])
							/**
							 * global event handler
							 */
							window.setTimeout(function() {
								avalon.ajaxGlobalEvents.error(that, that.options, statusText)
							}, 0)
						}
						delete this.transport

						/**
						 * global event handler
						 */
						ajaxActive--;

						window.setTimeout(function() {
							avalon.ajaxGlobalEvents.complete(that, that.options)
						}, 0)

						if (ajaxActive === 0) {
							// 最后一个
							window.setTimeout(function() {
								avalon.ajaxGlobalEvents.stop()
							}, 0)
						}

					}
				}

				module.exports = XHRMethods

				/***/ },
			/* 4 */
			/***/ function(module, exports) {

				module.exports = /(=)\?(?=&|$)|\?\?/

				/***/ },
			/* 5 */
			/***/ function(module, exports) {

				var nativePromise = window.Promise
				if (/native code/.test(nativePromise)) {
					module.exports = nativePromise
				} else {
					var RESOLVED = 0
					var REJECTED = 1
					var PENDING = 2


					function Promise(executor) {

						this.state = PENDING
						this.value = undefined
						this.deferred = []

						var promise = this

						try {
							executor(function (x) {
								promise.resolve(x)
							}, function (r) {
								promise.reject(r)
							})
						} catch (e) {
							promise.reject(e)
						}
					}

					Promise.reject = function (r) {
						return new Promise(function (resolve, reject) {
							reject(r)
						})
					}

					Promise.resolve = function (x) {
						return new Promise(function (resolve, reject) {
							resolve(x)
						})
					}

					Promise.all = function (iterable) {
						return new Promise(function (resolve, reject) {
							var count = 0, result = []

							if (iterable.length === 0) {
								resolve(result)
							}

							function resolver(i) {
								return function (x) {
									result[i] = x
									count += 1

									if (count === iterable.length) {
										resolve(result)
									}
								}
							}

							for (var i = 0; i < iterable.length; i += 1) {
								Promise.resolve(iterable[i]).then(resolver(i), reject)
							}
						})
					}

					Promise.race = function (iterable) {
						return new Promise(function (resolve, reject) {
							for (var i = 0; i < iterable.length; i += 1) {
								Promise.resolve(iterable[i]).then(resolve, reject)
							}
						})
					}

					var p = Promise.prototype

					p.resolve = function resolve(x) {
						var promise = this

						if (promise.state === PENDING) {
							if (x === promise) {
								throw new TypeError('Promise settled with itself.')
							}

							var called = false

							try {
								var then = x && x['then']

								if (x !== null && typeof x === 'object' && typeof then === 'function') {
									then.call(x, function (x) {
										if (!called) {
											promise.resolve(x)
										}
										called = true

									}, function (r) {
										if (!called) {
											promise.reject(r)
										}
										called = true
									})
									return
								}
							} catch (e) {
								if (!called) {
									promise.reject(e)
								}
								return
							}

							promise.state = RESOLVED
							promise.value = x
							promise.notify()
						}
					}

					p.reject = function reject(reason) {
						var promise = this

						if (promise.state === PENDING) {
							if (reason === promise) {
								throw new TypeError('Promise settled with itself.')
							}

							promise.state = REJECTED
							promise.value = reason
							promise.notify()
						}
					}

					p.notify = function notify() {
						var promise = this

						nextTick(function () {
							if (promise.state !== PENDING) {
								while (promise.deferred.length) {
									var deferred = promise.deferred.shift(),
										onResolved = deferred[0],
										onRejected = deferred[1],
										resolve = deferred[2],
										reject = deferred[3]

									try {
										if (promise.state === RESOLVED) {
											if (typeof onResolved === 'function') {
												resolve(onResolved.call(undefined, promise.value))
											} else {
												resolve(promise.value)
											}
										} else if (promise.state === REJECTED) {
											if (typeof onRejected === 'function') {
												resolve(onRejected.call(undefined, promise.value))
											} else {
												reject(promise.value)
											}
										}
									} catch (e) {
										reject(e)
									}
								}
							}
						})
					}

					p.then = function then(onResolved, onRejected) {
						var promise = this

						return new Promise(function (resolve, reject) {
							promise.deferred.push([onResolved, onRejected, resolve, reject])
							promise.notify()
						})
					}

					p.catch = function (onRejected) {
						return this.then(undefined, onRejected)
					}


					function oneObject(array, val) {
						if (typeof array === "string") {
							array = array.match(rword) || []
						}
						var result = {},
							value = val !== void 0 ? val : 1
						for (var i = 0, n = array.length; i < n; i++) {
							result[array[i]] = value
						}
						return result
					}


					/*视浏览器情况采用最快的异步回调*/
					var nextTick = new function () {// jshint ignore:line
						var tickImmediate = window.setImmediate
						var tickObserver = window.MutationObserver
						if (tickImmediate) {
							return tickImmediate.bind(window)
						}

						var queue = []
						function callback() {
							var n = queue.length
							for (var i = 0; i < n; i++) {
								queue[i]()
							}
							queue = queue.slice(n)
						}

						if (tickObserver) {
							var node = document.createTextNode("avalon")
							new tickObserver(callback).observe(node, {characterData: true})// jshint ignore:line
							var bool = false
							return function (fn) {
								queue.push(fn)
								bool = !bool
								node.data = bool
							}
						}


						return function (fn) {
							setTimeout(fn, 4)
						}
					}

					module.exports = Promise
				}


				//https://github.com/ecomfe/er/blob/master/src/Deferred.js
				//http://jser.info/post/77696682011/es6-promises


				/***/ },
			/* 6 */
			/***/ function(module, exports, __webpack_require__) {

				var isLocal = false
				var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
				var ie = __webpack_require__(7)
				try {
					//在IE下如果重置了document.domain，直接访问window.location会抛错，但用document.URL就ok了
					//http://www.cnblogs.com/WuQiang/archive/2012/09/21/2697474.html
					isLocal = rlocalProtocol.test(location.protocol)
				} catch (e) {
				}

				//http://www.cnblogs.com/rubylouvre/archive/2010/04/20/1716486.html
				var s = ["XMLHttpRequest",
					"ActiveXObject('MSXML2.XMLHTTP.6.0')",
					"ActiveXObject('MSXML2.XMLHTTP.3.0')",
					"ActiveXObject('MSXML2.XMLHTTP')",
					"ActiveXObject('Microsoft.XMLHTTP')"
				]
				s[0] = ie < 8 && ie !== 0 && isLocal ? "!" : s[0] //IE下只能使用ActiveXObject
				for (var i = 0, axo; axo = s[i++]; ) {
					try {
						if (eval("new " + axo)) {
							avalon.xhr = new Function("return new " + axo)
							break
						}
					} catch (e) {
					}
				}



				/***/ },
			/* 7 */
			/***/ function(module, exports) {

				var msie = 0
				if (window.VBArray) {
					msie = document.documentMode || (window.XMLHttpRequest ? 7 : 6)
				}

				module.exports = msie

				/***/ },
			/* 8 */
			/***/ function(module, exports, __webpack_require__) {

				var ie = __webpack_require__(7)
				var ret = false
				if (ie >= 9) {
					var xhr = new XMLHttpRequest()
					ret = typeof xhr.withCredentials === 'boolean'
				}

				module.exports = ret


				/***/ },
			/* 9 */
			/***/ function(module, exports, __webpack_require__) {

				var rhash = /#.*$/
				var rquery = /\?/
				var rjsonp = __webpack_require__(4)
				var head = __webpack_require__(10)
				var supportCors = __webpack_require__(8)
				var ie = __webpack_require__(7)

				var useOnload = ie === 0 || ie > 8
				var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/

				var isLocal = rlocalProtocol.test(location.protocol)


				var transports = avalon.ajaxTransports = {
					xhr: {
						//发送请求
						request: function() {
							var self = this
							var opts = this.options
							var transport = this.transport = new avalon.xhr
							transport.open(opts.type, opts.url, opts.async, opts.username, opts.password)
							if (this.mimeType && transport.overrideMimeType) {
								transport.overrideMimeType(this.mimeType)
							}
							//IE6下，如果transport中没有withCredentials，直接设置会报错
							if (opts.crossDomain && supportCors) {
								transport.withCredentials = true
							}

							/*
							 * header 中设置 X-Requested-With 用来给后端做标示：
							 * 这是一个 ajax 请求。
							 *
							 * 在 Chrome、Firefox 3.5+ 和 Safari 4+ 下，
							 * 在进行跨域请求时设置自定义 header，会触发 preflighted requests，
							 * 会预先发送 method 为 OPTIONS 的请求。
							 *
							 * 于是，如果跨域，禁用此功能。
							 */
							if (!opts.crossDomain) {
								this.requestHeaders["X-Requested-With"] = "XMLHttpRequest"
							}

							for (var i in this.requestHeaders) {
								transport.setRequestHeader(i, this.requestHeaders[i] + "")
							}

							/*
							 * progress
							 */
							if (opts.progressCallback) {
								// 判断是否 ie6-9
								var isOldIE = document.all && !window.atob
								if (!isOldIE) {
									transport.upload.onprogress = opts.progressCallback
								}
							}

							var dataType = opts.dataType
							if ("responseType" in transport && /^(blob|arraybuffer|text)$/.test(dataType)) {
								transport.responseType = dataType
								this.useResponseType = true
							}
							//必须要支持 FormData 和 file.fileList 的浏览器 才能用 xhr 发送
							//标准规定的 multipart/form-data 发送必须用 utf-8 格式， 记得 ie 会受到 document.charset 的影响
							transport.send(opts.hasContent && (this.formdata || this.querystring) || null)
							//在同步模式中,IE6,7可能会直接从缓存中读取数据而不会发出请求,因此我们需要手动发出请求

							if (!opts.async || transport.readyState === 4) {
								this.respond()
							} else {
								if (useOnload) { //如果支持onerror, onload新API
									transport.onload = transport.onerror = function(e) {
										this.readyState = 4 //IE9+
										this.status = e.type === "load" ? 200 : 500
										self.respond()
									}
								} else {
									transport.onreadystatechange = function() {
										self.respond()
									}
								}
							}
						},
						//用于获取原始的responseXMLresponseText 修正status statusText
						//第二个参数为1时中止清求
						respond: function(event, forceAbort) {
							var transport = this.transport
							if (!transport) {
								return
							}
							// by zilong：避免abort后还继续派发onerror等事件
							if (forceAbort && this.timeoutID) {
								clearTimeout(this.timeoutID)
								delete this.timeoutID
							}
							try {
								var completed = transport.readyState === 4
								if (forceAbort || completed) {
									transport.onreadystatechange = avalon.noop
									if (useOnload) {//IE6下对XHR对象设置onerror属性可能报错
										transport.onerror = transport.onload = null
									}
									if (forceAbort) {
										if (!completed && typeof transport.abort === "function") { // 完成以后 abort 不要调用
											transport.abort()
										}
									} else {
										var status = transport.status
										//设置responseText
										var text = transport.responseText

										this.responseText = typeof text === "string" ? text : void 0
										//设置responseXML
										try {
											//当responseXML为[Exception: DOMException]时，
											//访问它会抛“An attempt was made to use an object that is not, or is no longer, usable”异常
											var xml = transport.responseXML
											this.responseXML = xml.documentElement
										} catch (e) {
										}
										//设置response
										if (this.useResponseType) {
											this.response = transport.response
										}
										//设置responseHeadersString
										this.responseHeadersString = transport.getAllResponseHeaders()

										try { //火狐在跨城请求时访问statusText值会抛出异常
											var statusText = transport.statusText
										} catch (e) {
											this.error = e
											statusText = "firefoxAccessError"
										}
										//用于处理特殊情况,如果是一个本地请求,只要我们能获取数据就假当它是成功的
										if (!status && isLocal && !this.options.crossDomain) {
											status = this.responseText ? 200 : 404
											//IE有时会把204当作为1223
										} else if (status === 1223) {
											status = 204
										}
										this.dispatch(status, statusText)
									}
								}
							} catch (err) {
								// 如果网络问题时访问XHR的属性，在FF会抛异常
								// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
								if (!forceAbort) {
									this.dispatch(500, err)
								}
							}
						}
					},
					jsonp: {
						preproccess: function() {
							var opts = this.options
							var name = this.jsonpCallback = opts.jsonpCallback || "avalon.jsonp" + setTimeout("1")
							if (rjsonp.test(opts.url)) {
								opts.url = opts.url.replace(rjsonp, "$1" + name)
							} else {
								opts.url = opts.url + (rquery.test(opts.url) ? "&" : "?") + opts.jsonp + "=" + name
							}
							//将后台返回的json保存在惰性函数中
							if (name.startsWith('avalon.')) {
								name = name.replace(/avalon\./, '')
								avalon[name] = function(json) {
									avalon[name] = json
								}
							} else {
								window[name] = function(json) {
									window[name] = json
								}
							}
							return "script"
						}
					},
					script: {
						request: function() {
							var opts = this.options
							var node = this.transport = document.createElement("script")
							if (opts.charset) {
								node.charset = opts.charset
							}
							var self = this
							node.onerror = node[useOnload ? "onload" : "onreadystatechange"] = function() {
								self.respond()
							}
							node.src = opts.url
							head.insertBefore(node, head.firstChild)
						},
						respond: function(event, forceAbort) {
							var node = this.transport
							if (!node) {
								return
							}
							// by zilong：避免abort后还继续派发onerror等事件
							if (forceAbort && this.timeoutID) {
								clearTimeout(this.timeoutID)
								delete this.timeoutID
							}
							var execute = /loaded|complete|undefined/i.test(node.readyState)
							if (forceAbort || execute) {
								node.onerror = node.onload = node.onreadystatechange = null
								var parent = node.parentNode
								if (parent) {
									parent.removeChild(node)
								}
								if (!forceAbort) {
									var args
									if (this.jsonpCallback) {
										var jsonpCallback = this.jsonpCallback.startsWith('avalon.') ? avalon[this.jsonpCallback.replace(/avalon\./, '')] : window[this.jsonpCallback]
										args = typeof jsonpCallback === "function" ? [500, "error"] : [200, "success"]
									} else {
										args = [200, "success"]
									}

									this.dispatch.apply(this, args)
								}
							}
						}
					},
					upload: {
						preproccess: function() {
							var opts = this.options, formdata
							if (typeof opts.form.append === "function") { //简单判断opts.form是否为FormData
								formdata = opts.form
								opts.contentType = ''
							} else {
								formdata = new FormData(opts.form)  //将二进制什么一下子打包到formdata
							}
							avalon.each(opts.data, function(key, val) {
								formdata.append(key, val)  //添加客外数据
							})
							this.formdata = formdata
						}
					}
				}

				module.exports = transports

				avalon.mix(transports.jsonp, transports.script)
				avalon.mix(transports.upload, transports.xhr)

				if (!window.FormData) {
					var str = 'Function BinaryToArray(binary)\r\n\
		                 Dim oDic\r\n\
		                 Set oDic = CreateObject("scripting.dictionary")\r\n\
		                 length = LenB(binary) - 1\r\n\
		                 For i = 1 To length\r\n\
		                     oDic.add i, AscB(MidB(binary, i, 1))\r\n\
		                 Next\r\n\
		                 BinaryToArray = oDic.Items\r\n\
		              End Function'
					execScript(str, "VBScript")
					avalon.fixAjax = function() {
						avalon.ajaxConverters.arraybuffer = function() {
							var body = this.tranport && this.tranport.responseBody
							if (body) {
								return  new VBArray(BinaryToArray(body)).toArray()
							}
						}
						function createIframe(ID) {
							var iframe = avalon.parseHTML("<iframe " + " id='" + ID + "'" +
								" name='" + ID + "'" + " style='position:absolute;left:-9999px;top:-9999px;'/>").firstChild
							return (document.body || document.documentElement).insertBefore(iframe, null)
						}
						function addDataToForm(form, data) {
							var ret = [],
								d, isArray, vs, i, e
							for (d in data) {
								isArray = Array.isArray(data[d])
								vs = isArray ? data[d] : [data[d]]
								// 数组和原生一样对待，创建多个同名输入域
								for (i = 0; i < vs.length; i++) {
									e = document.createElement("input")
									e.type = 'hidden'
									e.name = d
									e.value = vs[i]
									form.appendChild(e)
									ret.push(e)
								}
							}
							return ret
						}
						//https://github.com/codenothing/Pure-Javascript-Upload/blob/master/src/upload.js
						avalon.ajaxTransports.upload = {
							request: function() {
								var self = this
								var opts = this.options
								var ID = "iframe-upload-" + this.uniqueID
								var form = opts.form
								var iframe = this.transport = createIframe(ID)
								//form.enctype的值
								//1:application/x-www-form-urlencoded   在发送前编码所有字符（默认）
								//2:multipart/form-data 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。
								//3:text/plain  空格转换为 "+" 加号，但不对特殊字符编码。
								var backups = {
									target: form.target || "",
									action: form.action || "",
									enctype: form.enctype,
									method: form.method
								}
								var fields = opts.data ? addDataToForm(form, opts.data) : []
								//必须指定method与enctype，要不在FF报错
								//表单包含文件域时，如果缺少 method=POST 以及 enctype=multipart/form-data，
								// 设置target到隐藏iframe，避免整页刷新
								form.target = ID
								form.action = opts.url
								form.method = "POST"
								form.enctype = "multipart/form-data"
								this.uploadcallback = avalon.bind(iframe, "load", function(event) {
									self.respond(event)
								})
								form.submit()
								//还原form的属性
								for (var i in backups) {
									form[i] = backups[i]
								}
								//移除之前动态添加的节点
								fields.forEach(function(input) {
									form.removeChild(input)
								})
							},
							respond: function(event) {
								var node = this.transport, child
								// 防止重复调用,成功后 abort
								if (!node) {
									return
								}
								if (event && event.type === "load") {
									var doc = node.contentWindow.document
									this.responseXML = doc
									if (doc.body) {//如果存在body属性,说明不是返回XML
										this.responseText = doc.body.innerHTML
										//当MIME为'application/javascript' 'text/javascript",浏览器会把内容放到一个PRE标签中
										if ((child = doc.body.firstChild) && child.nodeName.toUpperCase() === 'PRE' && child.firstChild) {
											this.responseText = child.firstChild.nodeValue
										}
									}
									this.dispatch(200, "success")
								}
								this.uploadcallback = avalon.unbind(node, "load", this.uploadcallback)
								delete this.uploadcallback
								setTimeout(function() {  // Fix busy state in FF3
									node.parentNode.removeChild(node)
								})
							}
						}
						delete avalon.fixAjax
					}
					avalon.fixAjax()
				}

				/***/ },
			/* 10 */
			/***/ function(module, exports) {

				module.exports = document.getElementsByTagName('head')[0]



				/***/ },
			/* 11 */
			/***/ function(module, exports) {

				module.exports = {
					xml: "application/xml, text/xml",
					html: "text/html",
					text: "text/plain",
					json: "application/json, text/javascript",
					script: "text/javascript, application/javascript",
					"*": ["*/"] + ["*"] //避免被压缩掉
				}


				/***/ },
			/* 12 */
			/***/ function(module, exports, __webpack_require__) {

				function parseJS(code) {
					var indirect = eval
					code = code.trim()
					if (code) {
						if (code.indexOf("use strict") === 1) {
							var script = document.createElement("script")
							script.text = code
							head.appendChild(script).parentNode.removeChild(script)
						} else {
							indirect(code)
						}
					}
				}
				var head = __webpack_require__(10)

				avalon.ajaxConverters = {//转换器，返回用户想要做的数据
					text: function(text) {
						// return text || "";
						return text
					},
					xml: function(text, xml) {
						return xml !== void 0 ? xml : avalon.parseXML(text)
					},
					html: function(text) {
						return avalon.parseHTML(text)  //一个文档碎片,方便直接插入DOM树
					},
					json: function(text) {
						return avalon.parseJSON(text)
					},
					script: function(text) {
						parseJS(text)
						return text
					},
					jsonp: function() {
						var json, callbackName
						if (this.jsonpCallback.startsWith('avalon.')) {
							callbackName = this.jsonpCallback.replace(/avalon\./,'')
							json = avalon[callbackName]
							delete avalon[callbackName]
						} else {
							json = window[this.jsonpCallback]
						}
						return json
					}
				}



				/***/ },
			/* 13 */
			/***/ function(module, exports) {

				var rbracket = /\[\]$/
				var r20 = /%20/g

				avalon.param = function (obj) {
					var prefix,
						s = [],
						add = function (key, value) {
							// If value is a function, invoke it and return its value
							value = typeof value === "function" ? value() : (value == null ? "" : value)
							s[ s.length ] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
						}
					// 处理数组与类数组的jquery对象
					if (Array.isArray(obj)) {
						// Serialize the form elements
						avalon.each(obj, add)

					} else {
						for (prefix in obj) {
							paramInner(prefix, obj[ prefix ], add)
						}
					}

					// Return the resulting serialization
					return s.join("&").replace(r20, "+")
				}

				function paramInner(prefix, obj, add) {
					var name
					if (Array.isArray(obj)) {
						// Serialize array item.
						avalon.each(obj, function (i, v) {
							if (rbracket.test(prefix)) {
								// Treat each array item as a scalar.
								add(prefix, v)
							} else {
								// Item is non-scalar (array or object), encode its numeric index.
								paramInner(
									prefix + "[" + (typeof v === "object" ? i : "") + "]",
									v,
									add  )
							}
						})
					} else if (avalon.isPlainObject(obj)) {
						// Serialize object item.
						for (name in obj) {
							paramInner(prefix + "[" + name + "]", obj[ name ], add)
						}

					} else {
						// Serialize scalar item.
						add(prefix, obj)
					}
				}

				/***/ },
			/* 14 */
			/***/ function(module, exports) {

				//将一个字符串转换为对象
				function tryDecodeURIComponent(value) {
					try {
						return decodeURIComponent(value)
					} catch (e) {
						return value
					}
				}
				var radd = /\+/g
				var r5b5d = /%5B(.*?)%5D$/

				//a%5B0%5D%5Bvalue%5D a%5B1%5D%5B%5D
				function addSubObject(host, text, value) {
					var match = text.match(r5b5d)
					if (!match) {
						return true
					}

					var steps = []
					var first = true
					var step, index, key
					while (index = text.lastIndexOf("%5B")) {
						if (index === -1) {
							break
						}
						key = text.slice(index).slice(3, -3)
						text = text.slice(0, index)
						if (key === "") {
							steps.unshift({
								action: "pushArrayElement"
							})
						} else if ((key >>> 0) + "" === key) {
							steps.unshift({
								action: "setSubArray",
								value: key
							})
						} else {
							if (first) {
								steps.unshift({
									action: "setObjectProperty",
									value: tryDecodeURIComponent(key)
								})
							} else {
								steps.unshift({
									action: "setSubObjet",
									value: tryDecodeURIComponent(key)
								})
							}
						}
						first = false
					}
					first = true
					while (step = steps.shift()) {
						var isObject = /Object/.test(step.action)
						if (first) {
							if (!(text in host)) {
								host[text] = isObject ? {} : []
							}
							first = false
							host = host[text]
						}
						switch (step.action) {
							case "pushArrayElement":
								host.push(value)
								break
							case "setObjectProperty":
								host[step.value] = value
								break
							case "setSubObjet":
								if (!(step.value in host)) {
									host[step.value] = {}
								}
								host = host[step.value]
								break
							case "setSubArray":
								if (!(step.value in host)) {
									host[step.value] = []
								}
								host = host[step.value]
								break
						}
					}
				}
				//  function add
				avalon.unparam = function(qs, sep, eq) {
					sep = sep || '&'
					eq = eq || '='
					var obj = {}
					if ((typeof qs !== "string") || qs.length === 0) {
						return obj
					}
					if(qs.indexOf("?") !== -1){
						qs = qs.split("?").pop()
					}
					var array = qs.split(sep)
					for (var i = 0, el; el = array[i++]; ) {
						var arr = el.split("=")
						if (arr.length === 1) {//处理只有键名没键值的情况
							obj[arr[0]] = ""
						} else {
							var key = arr[0].replace(radd, '%20')
							var v = tryDecodeURIComponent(arr.slice(1).join("=").replace(radd, ' '))
							if (addSubObject(obj, key, v)) { //处理存在中括号的情况
								var k = tryDecodeURIComponent(key) //处理不存在中括号的简单的情况
								if (!Object.prototype.hasOwnProperty.call(obj, k)) {
									obj[k] = v
								} else if (Array.isArray(obj[k])) {
									obj[k].push(v)
								} else {
									obj[k] = [obj[k], v]
								}
							}
						}
					}

					return obj
				}

				/***/ },
			/* 15 */
			/***/ function(module, exports) {

				var rinput = /select|input|button|textarea/i
				var rcheckbox = /radio|checkbox/
				var rline = /\r?\n/g
				function trimLine(val) {
					return val.replace(rline, "\r\n")
				}
				//表单元素变字符串, form为一个元素节点
				avalon.serialize = function(form) {
					var json = {}
					// 不直接转换form.elements，防止以下情况：   <form > <input name="elements"/><input name="test"/></form>
					Array.prototype.filter.call(form.getElementsByTagName("*"), function(el) {
						if (rinput.test(el.nodeName) && el.name && !el.disabled) {
							return  rcheckbox.test(el.type) ? el.checked : true //只处理拥有name并且没有disabled的表单元素
						}
					}).forEach(function(el) {
						var val = avalon(el).val()
						val = Array.isArray(val) ? val.map(trimLine) : trimLine(val)
						var name = el.name
						if (name in json) {
							if (Array.isArray(val)) {
								json[name].push(val)
							} else {
								json[name] = [json[name], val]
							}
						} else {
							json[name] = val
						}
					})
					return avalon.param(json, false)  // 名值键值对序列化,数组元素名字前不加 []
				}


				/***/ },
			/* 16 */
			/***/ function(module, exports) {

				module.exports = function parseXML(data, xml, tmp) {
					try {
						var mode = document.documentMode
						if (window.DOMParser && (!mode || mode > 8)) { // Standard
							tmp = new DOMParser()
							xml = tmp.parseFromString(data, "text/xml")
						} else { // IE
							xml = new ActiveXObject("Microsoft.XMLDOM")  //"Microsoft.XMLDOM"
							xml.async = "false";
							xml.loadXML(data)
						}
					} catch (e) {
						xml = void  0
					}
					if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
						avalon.error("Invalid XML: " + data)
					}
					return xml
				}


				/***/ }
			/******/ ])
	});
	;


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<ul>\r\n    <li ms-for=\"el in @obj\" ms-click=\"@fuc()\">{{el}}</li>\r\n</ul>\r\n\r\n"

/***/ }
/******/ ]);