(function (b) {
     var a = (b.BFH = b.BFH || {}),
         c = (a.env = {});
     c.agt = b.navigator.userAgent.toLowerCase();
     c.browser = { firefox: !!c.agt.match(/firefox/i), chrome: !!b.chrome, ie: !!c.agt.match(/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(\d+)/i) };
     c.browser.version = (function () {
         var d;
         if (c.browser.firefox) {
             d = "firefox/";
         } else {
             if (c.browser.chrome) {
                 d = "chrome/";
             } else {
                 if (c.browser.ie) {
                     d = !!c.agt.match(/msie/i) ? "msie" : "rv:";
                 }
             }
         }
         return parseInt(c.agt.split(d)[1], 10);
     })();
 })(this);
 /*
  * jQuery JavaScript Library v1.10.2
  * http://jquery.com/
  *
  * Includes Sizzle.js
  * http://sizzlejs.com/
  *
  * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2013-07-03T13:48Z
  */
 (function (a5, aI) {
     var ak,
         A,
         aE = typeof aI,
         aN = a5.location,
         n = a5.document,
         bZ = n.documentElement,
         bl = a5.jQuery,
         K = a5.$,
         ac = {},
         a9 = [],
         v = "1.10.2",
         aK = a9.concat,
         aq = a9.push,
         a7 = a9.slice,
         aO = a9.indexOf,
         C = ac.toString,
         X = ac.hasOwnProperty,
         aS = v.trim,
         bM = function (e, b7) {
             return new bM.fn.init(e, b7, A);
         },
         bD = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
         ae = /\S+/g,
         F = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
         bu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
         a = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
         bk = /^[\],:{}\s]*$/,
         bn = /(?:^|:|,)(?:\s*\[)+/g,
         bJ = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
         a1 = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
         bV = /^-ms-/,
         aX = /-([\da-z])/gi,
         O = function (e, b7) {
             return b7.toUpperCase();
         },
         b0 = function (e) {
             if (n.addEventListener || e.type === "load" || n.readyState === "complete") {
                 bo();
                 bM.ready();
             }
         },
         bo = function () {
             if (n.addEventListener) {
                 n.removeEventListener("DOMContentLoaded", b0, false);
                 a5.removeEventListener("load", b0, false);
             } else {
                 n.detachEvent("onreadystatechange", b0);
                 a5.detachEvent("onload", b0);
             }
         };
     bM.fn = bM.prototype = {
         jquery: v,
         constructor: bM,
         init: function (e, b9, b8) {
             var b7, ca;
             if (!e) {
                 return this;
             }
             if (typeof e === "string") {
                 if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                     b7 = [null, e, null];
                 } else {
                     b7 = bu.exec(e);
                 }
                 if (b7 && (b7[1] || !b9)) {
                     if (b7[1]) {
                         b9 = b9 instanceof bM ? b9[0] : b9;
                         bM.merge(this, bM.parseHTML(b7[1], b9 && b9.nodeType ? b9.ownerDocument || b9 : n, true));
                         if (a.test(b7[1]) && bM.isPlainObject(b9)) {
                             for (b7 in b9) {
                                 if (bM.isFunction(this[b7])) {
                                     this[b7](b9[b7]);
                                 } else {
                                     this.attr(b7, b9[b7]);
                                 }
                             }
                         }
                         return this;
                     } else {
                         ca = n.getElementById(b7[2]);
                         if (ca && ca.parentNode) {
                             if (ca.id !== b7[2]) {
                                 return b8.find(e);
                             }
                             this.length = 1;
                             this[0] = ca;
                         }
                         this.context = n;
                         this.selector = e;
                         return this;
                     }
                 } else {
                     if (!b9 || b9.jquery) {
                         return (b9 || b8).find(e);
                     } else {
                         return this.constructor(b9).find(e);
                     }
                 }
             } else {
                 if (e.nodeType) {
                     this.context = this[0] = e;
                     this.length = 1;
                     return this;
                 } else {
                     if (bM.isFunction(e)) {
                         return b8.ready(e);
                     }
                 }
             }
             if (e.selector !== aI) {
                 this.selector = e.selector;
                 this.context = e.context;
             }
             return bM.makeArray(e, this);
         },
         selector: "",
         length: 0,
         toArray: function () {
             return a7.call(this);
         },
         get: function (e) {
             return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
         },
         pushStack: function (e) {
             var b7 = bM.merge(this.constructor(), e);
             b7.prevObject = this;
             b7.context = this.context;
             return b7;
         },
         each: function (b7, e) {
             return bM.each(this, b7, e);
         },
         ready: function (e) {
             bM.ready.promise().done(e);
             return this;
         },
         slice: function () {
             return this.pushStack(a7.apply(this, arguments));
         },
         first: function () {
             return this.eq(0);
         },
         last: function () {
             return this.eq(-1);
         },
         eq: function (b8) {
             var e = this.length,
                 b7 = +b8 + (b8 < 0 ? e : 0);
             return this.pushStack(b7 >= 0 && b7 < e ? [this[b7]] : []);
         },
         map: function (e) {
             return this.pushStack(
                 bM.map(this, function (b8, b7) {
                     return e.call(b8, b7, b8);
                 })
             );
         },
         end: function () {
             return this.prevObject || this.constructor(null);
         },
         push: aq,
         sort: [].sort,
         splice: [].splice,
     };
     bM.fn.init.prototype = bM.fn;
     bM.extend = bM.fn.extend = function () {
         var e,
             cc,
             b7,
             b8,
             cf,
             cd,
             cb = arguments[0] || {},
             ca = 1,
             b9 = arguments.length,
             ce = false;
         if (typeof cb === "boolean") {
             ce = cb;
             cb = arguments[1] || {};
             ca = 2;
         }
         if (typeof cb !== "object" && !bM.isFunction(cb)) {
             cb = {};
         }
         if (b9 === ca) {
             cb = this;
             --ca;
         }
         for (; ca < b9; ca++) {
             if ((cf = arguments[ca]) != null) {
                 for (b8 in cf) {
                     e = cb[b8];
                     b7 = cf[b8];
                     if (cb === b7) {
                         continue;
                     }
                     if (ce && b7 && (bM.isPlainObject(b7) || (cc = bM.isArray(b7)))) {
                         if (cc) {
                             cc = false;
                             cd = e && bM.isArray(e) ? e : [];
                         } else {
                             cd = e && bM.isPlainObject(e) ? e : {};
                         }
                         cb[b8] = bM.extend(ce, cd, b7);
                     } else {
                         if (b7 !== aI) {
                             cb[b8] = b7;
                         }
                     }
                 }
             }
         }
         return cb;
     };
     bM.extend({
         expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
         noConflict: function (e) {
             if (a5.$ === bM) {
                 a5.$ = K;
             }
             if (e && a5.jQuery === bM) {
                 a5.jQuery = bl;
             }
             return bM;
         },
         isReady: false,
         readyWait: 1,
         holdReady: function (e) {
             if (e) {
                 bM.readyWait++;
             } else {
                 bM.ready(true);
             }
         },
         ready: function (e) {
             if (e === true ? --bM.readyWait : bM.isReady) {
                 return;
             }
             if (!n.body) {
                 return setTimeout(bM.ready);
             }
             bM.isReady = true;
             if (e !== true && --bM.readyWait > 0) {
                 return;
             }
             ak.resolveWith(n, [bM]);
             if (bM.fn.trigger) {
                 bM(n).trigger("ready").off("ready");
             }
         },
         isFunction: function (e) {
             return bM.type(e) === "function";
         },
         isArray:
             Array.isArray ||
             function (e) {
                 return bM.type(e) === "array";
             },
         isWindow: function (e) {
             return e != null && e == e.window;
         },
         isNumeric: function (e) {
             return !isNaN(parseFloat(e)) && isFinite(e);
         },
         type: function (e) {
             if (e == null) {
                 return String(e);
             }
             return typeof e === "object" || typeof e === "function" ? ac[C.call(e)] || "object" : typeof e;
         },
         isPlainObject: function (b9) {
             var b7;
             if (!b9 || bM.type(b9) !== "object" || b9.nodeType || bM.isWindow(b9)) {
                 return false;
             }
             try {
                 if (b9.constructor && !X.call(b9, "constructor") && !X.call(b9.constructor.prototype, "isPrototypeOf")) {
                     return false;
                 }
             } catch (b8) {
                 return false;
             }
             if (bM.support.ownLast) {
                 for (b7 in b9) {
                     return X.call(b9, b7);
                 }
             }
             for (b7 in b9) {
             }
             return b7 === aI || X.call(b9, b7);
         },
         isEmptyObject: function (b7) {
             var e;
             for (e in b7) {
                 return false;
             }
             return true;
         },
         error: function (e) {
             throw new Error(e);
         },
         parseHTML: function (ca, b8, b9) {
             if (!ca || typeof ca !== "string") {
                 return null;
             }
             if (typeof b8 === "boolean") {
                 b9 = b8;
                 b8 = false;
             }
             b8 = b8 || n;
             var b7 = a.exec(ca),
                 e = !b9 && [];
             if (b7) {
                 return [b8.createElement(b7[1])];
             }
             b7 = bM.buildFragment([ca], b8, e);
             if (e) {
                 bM(e).remove();
             }
             return bM.merge([], b7.childNodes);
         },
         parseJSON: function (e) {
             if (a5.JSON && a5.JSON.parse) {
                 return a5.JSON.parse(e);
             }
             if (e === null) {
                 return e;
             }
             if (typeof e === "string") {
                 e = bM.trim(e);
                 if (e) {
                     if (bk.test(e.replace(bJ, "@").replace(a1, "]").replace(bn, ""))) {
                         return new Function("return " + e)();
                     }
                 }
             }
             bM.error("Invalid JSON: " + e);
         },
         parseXML: function (b9) {
             var b7, b8;
             if (!b9 || typeof b9 !== "string") {
                 return null;
             }
             try {
                 if (a5.DOMParser) {
                     b8 = new DOMParser();
                     b7 = b8.parseFromString(b9, "text/xml");
                 } else {
                     b7 = new ActiveXObject("Microsoft.XMLDOM");
                     b7.async = "false";
                     b7.loadXML(b9);
                 }
             } catch (ca) {
                 b7 = aI;
             }
             if (!b7 || !b7.documentElement || b7.getElementsByTagName("parsererror").length) {
                 bM.error("Invalid XML: " + b9);
             }
             return b7;
         },
         noop: function () {},
         globalEval: function (e) {
             if (e && bM.trim(e)) {
                 (
                     a5.execScript ||
                     function (b7) {
                         a5["eval"].call(a5, b7);
                     }
                 )(e);
             }
         },
         camelCase: function (e) {
             return e.replace(bV, "ms-").replace(aX, O);
         },
         nodeName: function (b7, e) {
             return b7.nodeName && b7.nodeName.toLowerCase() === e.toLowerCase();
         },
         each: function (cb, cc, b7) {
             var ca,
                 b8 = 0,
                 b9 = cb.length,
                 e = ad(cb);
             if (b7) {
                 if (e) {
                     for (; b8 < b9; b8++) {
                         ca = cc.apply(cb[b8], b7);
                         if (ca === false) {
                             break;
                         }
                     }
                 } else {
                     for (b8 in cb) {
                         ca = cc.apply(cb[b8], b7);
                         if (ca === false) {
                             break;
                         }
                     }
                 }
             } else {
                 if (e) {
                     for (; b8 < b9; b8++) {
                         ca = cc.call(cb[b8], b8, cb[b8]);
                         if (ca === false) {
                             break;
                         }
                     }
                 } else {
                     for (b8 in cb) {
                         ca = cc.call(cb[b8], b8, cb[b8]);
                         if (ca === false) {
                             break;
                         }
                     }
                 }
             }
             return cb;
         },
         trim:
             aS && !aS.call("\uFEFF\xA0")
                 ? function (e) {
                       return e == null ? "" : aS.call(e);
                   }
                 : function (e) {
                       return e == null ? "" : (e + "").replace(F, "");
                   },
         makeArray: function (e, b8) {
             var b7 = b8 || [];
             if (e != null) {
                 if (ad(Object(e))) {
                     bM.merge(b7, typeof e === "string" ? [e] : e);
                 } else {
                     aq.call(b7, e);
                 }
             }
             return b7;
         },
         inArray: function (b9, b7, b8) {
             var e;
             if (b7) {
                 if (aO) {
                     return aO.call(b7, b9, b8);
                 }
                 e = b7.length;
                 b8 = b8 ? (b8 < 0 ? Math.max(0, e + b8) : b8) : 0;
                 for (; b8 < e; b8++) {
                     if (b8 in b7 && b7[b8] === b9) {
                         return b8;
                     }
                 }
             }
             return -1;
         },
         merge: function (ca, b8) {
             var e = b8.length,
                 b9 = ca.length,
                 b7 = 0;
             if (typeof e === "number") {
                 for (; b7 < e; b7++) {
                     ca[b9++] = b8[b7];
                 }
             } else {
                 while (b8[b7] !== aI) {
                     ca[b9++] = b8[b7++];
                 }
             }
             ca.length = b9;
             return ca;
         },
         grep: function (b7, cc, e) {
             var cb,
                 b8 = [],
                 b9 = 0,
                 ca = b7.length;
             e = !!e;
             for (; b9 < ca; b9++) {
                 cb = !!cc(b7[b9], b9);
                 if (e !== cb) {
                     b8.push(b7[b9]);
                 }
             }
             return b8;
         },
         map: function (b8, cd, e) {
             var cc,
                 ca = 0,
                 cb = b8.length,
                 b7 = ad(b8),
                 b9 = [];
             if (b7) {
                 for (; ca < cb; ca++) {
                     cc = cd(b8[ca], ca, e);
                     if (cc != null) {
                         b9[b9.length] = cc;
                     }
                 }
             } else {
                 for (ca in b8) {
                     cc = cd(b8[ca], ca, e);
                     if (cc != null) {
                         b9[b9.length] = cc;
                     }
                 }
             }
             return aK.apply([], b9);
         },
         guid: 1,
         proxy: function (ca, b9) {
             var e, b8, b7;
             if (typeof b9 === "string") {
                 b7 = ca[b9];
                 b9 = ca;
                 ca = b7;
             }
             if (!bM.isFunction(ca)) {
                 return aI;
             }
             e = a7.call(arguments, 2);
             b8 = function () {
                 return ca.apply(b9 || this, e.concat(a7.call(arguments)));
             };
             b8.guid = ca.guid = ca.guid || bM.guid++;
             return b8;
         },
         access: function (e, cb, cd, cc, b9, cf, ce) {
             var b8 = 0,
                 b7 = e.length,
                 ca = cd == null;
             if (bM.type(cd) === "object") {
                 b9 = true;
                 for (b8 in cd) {
                     bM.access(e, cb, b8, cd[b8], true, cf, ce);
                 }
             } else {
                 if (cc !== aI) {
                     b9 = true;
                     if (!bM.isFunction(cc)) {
                         ce = true;
                     }
                     if (ca) {
                         if (ce) {
                             cb.call(e, cc);
                             cb = null;
                         } else {
                             ca = cb;
                             cb = function (ch, cg, ci) {
                                 return ca.call(bM(ch), ci);
                             };
                         }
                     }
                     if (cb) {
                         for (; b8 < b7; b8++) {
                             cb(e[b8], cd, ce ? cc : cc.call(e[b8], b8, cb(e[b8], cd)));
                         }
                     }
                 }
             }
             return b9 ? e : ca ? cb.call(e) : b7 ? cb(e[0], cd) : cf;
         },
         now: function () {
             return new Date().getTime();
         },
         swap: function (cb, ca, cc, b9) {
             var b8,
                 b7,
                 e = {};
             for (b7 in ca) {
                 e[b7] = cb.style[b7];
                 cb.style[b7] = ca[b7];
             }
             b8 = cc.apply(cb, b9 || []);
             for (b7 in ca) {
                 cb.style[b7] = e[b7];
             }
             return b8;
         },
     });
     bM.ready.promise = function (ca) {
         if (!ak) {
             ak = bM.Deferred();
             if (n.readyState === "complete") {
                 setTimeout(bM.ready);
             } else {
                 if (n.addEventListener) {
                     n.addEventListener("DOMContentLoaded", b0, false);
                     a5.addEventListener("load", b0, false);
                 } else {
                     n.attachEvent("onreadystatechange", b0);
                     a5.attachEvent("onload", b0);
                     var b9 = false;
                     try {
                         b9 = a5.frameElement == null && n.documentElement;
                     } catch (b8) {}
                     if (b9 && b9.doScroll) {
                         (function b7() {
                             if (!bM.isReady) {
                                 try {
                                     b9.doScroll("left");
                                 } catch (cb) {
                                     return setTimeout(b7, 50);
                                 }
                                 bo();
                                 bM.ready();
                             }
                         })();
                     }
                 }
             }
         }
         return ak.promise(ca);
     };
     bM.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (b7, e) {
         ac["[object " + e + "]"] = e.toLowerCase();
     });
     function ad(b8) {
         var b7 = b8.length,
             e = bM.type(b8);
         if (bM.isWindow(b8)) {
             return false;
         }
         if (b8.nodeType === 1 && b7) {
             return true;
         }
         return e === "array" || (e !== "function" && (b7 === 0 || (typeof b7 === "number" && b7 > 0 && b7 - 1 in b8)));
     }
     A = bM(n);
     /*
      * Sizzle CSS Selector Engine v1.10.2
      * http://sizzlejs.com/
      *
      * Copyright 2013 jQuery Foundation, Inc. and other contributors
      * Released under the MIT license
      * http://jquery.org/license
      *
      * Date: 2013-07-03
      */
     (function (dg, cl) {
         var cA,
             dj,
             cg,
             cq,
             cJ,
             cM,
             cX,
             dn,
             cK,
             c0,
             cE,
             cr,
             c9,
             c4,
             dh,
             cf,
             cH,
             db = "sizzle" + -new Date(),
             cL = dg.document,
             dk = 0,
             c5 = 0,
             ca = cC(),
             da = cC(),
             cI = cC(),
             cY = false,
             cG = function (dp, e) {
                 if (dp === e) {
                     cY = true;
                     return 0;
                 }
                 return 0;
             },
             df = typeof cl,
             cS = 1 << 31,
             cQ = {}.hasOwnProperty,
             dd = [],
             de = dd.pop,
             cO = dd.push,
             b8 = dd.push,
             cp = dd.slice,
             ce =
                 dd.indexOf ||
                 function (dq) {
                     var dp = 0,
                         e = this.length;
                     for (; dp < e; dp++) {
                         if (this[dp] === dq) {
                             return dp;
                         }
                     }
                     return -1;
                 },
             b9 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
             cs = "[\\x20\\t\\r\\n\\f]",
             b7 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
             cN = b7.replace("w", "w#"),
             c7 = "\\[" + cs + "*(" + b7 + ")" + cs + "*(?:([*^$|!~]?=)" + cs + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cN + ")|)|)" + cs + "*\\]",
             cn = ":(" + b7 + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + c7.replace(3, 8) + ")*)|.*)\\)|)",
             cu = new RegExp("^" + cs + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cs + "+$", "g"),
             cx = new RegExp("^" + cs + "*," + cs + "*"),
             cD = new RegExp("^" + cs + "*([>+~]|" + cs + ")" + cs + "*"),
             c2 = new RegExp(cs + "*[+~]"),
             cw = new RegExp("=" + cs + "*([^\\]'\"]*)" + cs + "*\\]", "g"),
             cU = new RegExp(cn),
             cV = new RegExp("^" + cN + "$"),
             c3 = {
                 ID: new RegExp("^#(" + b7 + ")"),
                 CLASS: new RegExp("^\\.(" + b7 + ")"),
                 TAG: new RegExp("^(" + b7.replace("w", "w*") + ")"),
                 ATTR: new RegExp("^" + c7),
                 PSEUDO: new RegExp("^" + cn),
                 CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cs + "*(even|odd|(([+-]|)(\\d*)n|)" + cs + "*(?:([+-]|)" + cs + "*(\\d+)|))" + cs + "*\\)|)", "i"),
                 bool: new RegExp("^(?:" + b9 + ")$", "i"),
                 needsContext: new RegExp("^" + cs + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cs + "*((?:-\\d)?\\d*)" + cs + "*\\)|)(?=[^-]|$)", "i"),
             },
             cR = /^[^{]+\{\s*\[native \w/,
             cT = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
             cd = /^(?:input|select|textarea|button)$/i,
             co = /^h\d$/i,
             cP = /'|\\/g,
             cv = new RegExp("\\\\([\\da-f]{1,6}" + cs + "?|(" + cs + ")|.)", "ig"),
             c6 = function (e, dr, dp) {
                 var dq = "0x" + dr - 65536;
                 return dq !== dq || dp ? dr : dq < 0 ? String.fromCharCode(dq + 65536) : String.fromCharCode((dq >> 10) | 55296, (dq & 1023) | 56320);
             };
         try {
             b8.apply((dd = cp.call(cL.childNodes)), cL.childNodes);
             dd[cL.childNodes.length].nodeType;
         } catch (cF) {
             b8 = {
                 apply: dd.length
                     ? function (dp, e) {
                           cO.apply(dp, cp.call(e));
                       }
                     : function (dr, dq) {
                           var e = dr.length,
                               dp = 0;
                           while ((dr[e++] = dq[dp++])) {}
                           dr.length = e - 1;
                       },
             };
         }
         function cy(dw, dp, dA, dC) {
             var dB, dt, du, dy, dz, ds, dr, e, dq, dx;
             if ((dp ? dp.ownerDocument || dp : cL) !== cE) {
                 c0(dp);
             }
             dp = dp || cE;
             dA = dA || [];
             if (!dw || typeof dw !== "string") {
                 return dA;
             }
             if ((dy = dp.nodeType) !== 1 && dy !== 9) {
                 return [];
             }
             if (c9 && !dC) {
                 if ((dB = cT.exec(dw))) {
                     if ((du = dB[1])) {
                         if (dy === 9) {
                             dt = dp.getElementById(du);
                             if (dt && dt.parentNode) {
                                 if (dt.id === du) {
                                     dA.push(dt);
                                     return dA;
                                 }
                             } else {
                                 return dA;
                             }
                         } else {
                             if (dp.ownerDocument && (dt = dp.ownerDocument.getElementById(du)) && cH(dp, dt) && dt.id === du) {
                                 dA.push(dt);
                                 return dA;
                             }
                         }
                     } else {
                         if (dB[2]) {
                             b8.apply(dA, dp.getElementsByTagName(dw));
                             return dA;
                         } else {
                             if ((du = dB[3]) && dj.getElementsByClassName && dp.getElementsByClassName) {
                                 b8.apply(dA, dp.getElementsByClassName(du));
                                 return dA;
                             }
                         }
                     }
                 }
                 if (dj.qsa && (!c4 || !c4.test(dw))) {
                     e = dr = db;
                     dq = dp;
                     dx = dy === 9 && dw;
                     if (dy === 1 && dp.nodeName.toLowerCase() !== "object") {
                         ds = cj(dw);
                         if ((dr = dp.getAttribute("id"))) {
                             e = dr.replace(cP, "\\$&");
                         } else {
                             dp.setAttribute("id", e);
                         }
                         e = "[id='" + e + "'] ";
                         dz = ds.length;
                         while (dz--) {
                             ds[dz] = e + ck(ds[dz]);
                         }
                         dq = (c2.test(dw) && dp.parentNode) || dp;
                         dx = ds.join(",");
                     }
                     if (dx) {
                         try {
                             b8.apply(dA, dq.querySelectorAll(dx));
                             return dA;
                         } catch (dv) {
                         } finally {
                             if (!dr) {
                                 dp.removeAttribute("id");
                             }
                         }
                     }
                 }
             }
             return di(dw.replace(cu, "$1"), dp, dA, dC);
         }
         function cC() {
             var dp = [];
             function e(dq, dr) {
                 if (dp.push((dq += " ")) > cq.cacheLength) {
                     delete e[dp.shift()];
                 }
                 return (e[dq] = dr);
             }
             return e;
         }
         function cm(e) {
             e[db] = true;
             return e;
         }
         function ch(dp) {
             var dr = cE.createElement("div");
             try {
                 return !!dp(dr);
             } catch (dq) {
                 return false;
             } finally {
                 if (dr.parentNode) {
                     dr.parentNode.removeChild(dr);
                 }
                 dr = null;
             }
         }
         function dl(dp, dr) {
             var e = dp.split("|"),
                 dq = dp.length;
             while (dq--) {
                 cq.attrHandle[e[dq]] = dr;
             }
         }
         function cb(dp, e) {
             var dr = e && dp,
                 dq = dr && dp.nodeType === 1 && e.nodeType === 1 && (~e.sourceIndex || cS) - (~dp.sourceIndex || cS);
             if (dq) {
                 return dq;
             }
             if (dr) {
                 while ((dr = dr.nextSibling)) {
                     if (dr === e) {
                         return -1;
                     }
                 }
             }
             return dp ? 1 : -1;
         }
         function cz(e) {
             return function (dq) {
                 var dp = dq.nodeName.toLowerCase();
                 return dp === "input" && dq.type === e;
             };
         }
         function cc(e) {
             return function (dq) {
                 var dp = dq.nodeName.toLowerCase();
                 return (dp === "input" || dp === "button") && dq.type === e;
             };
         }
         function c8(e) {
             return cm(function (dp) {
                 dp = +dp;
                 return cm(function (dq, du) {
                     var ds,
                         dr = e([], dq.length, dp),
                         dt = dr.length;
                     while (dt--) {
                         if (dq[(ds = dr[dt])]) {
                             dq[ds] = !(du[ds] = dq[ds]);
                         }
                     }
                 });
             });
         }
         cM = cy.isXML = function (e) {
             var dp = e && (e.ownerDocument || e).documentElement;
             return dp ? dp.nodeName !== "HTML" : false;
         };
         dj = cy.support = {};
         c0 = cy.setDocument = function (dp) {
             var dq = dp ? dp.ownerDocument || dp : cL,
                 e = dq.defaultView;
             if (dq === cE || dq.nodeType !== 9 || !dq.documentElement) {
                 return cE;
             }
             cE = dq;
             cr = dq.documentElement;
             c9 = !cM(dq);
             if (e && e.attachEvent && e !== e.top) {
                 e.attachEvent("onbeforeunload", function () {
                     c0();
                 });
             }
             dj.attributes = ch(function (dr) {
                 dr.className = "i";
                 return !dr.getAttribute("className");
             });
             dj.getElementsByTagName = ch(function (dr) {
                 dr.appendChild(dq.createComment(""));
                 return !dr.getElementsByTagName("*").length;
             });
             dj.getElementsByClassName = ch(function (dr) {
                 dr.innerHTML = "<div class='a'></div><div class='a i'></div>";
                 dr.firstChild.className = "i";
                 return dr.getElementsByClassName("i").length === 2;
             });
             dj.getById = ch(function (dr) {
                 cr.appendChild(dr).id = db;
                 return !dq.getElementsByName || !dq.getElementsByName(db).length;
             });
             if (dj.getById) {
                 cq.find.ID = function (dt, ds) {
                     if (typeof ds.getElementById !== df && c9) {
                         var dr = ds.getElementById(dt);
                         return dr && dr.parentNode ? [dr] : [];
                     }
                 };
                 cq.filter.ID = function (ds) {
                     var dr = ds.replace(cv, c6);
                     return function (dt) {
                         return dt.getAttribute("id") === dr;
                     };
                 };
             } else {
                 delete cq.find.ID;
                 cq.filter.ID = function (ds) {
                     var dr = ds.replace(cv, c6);
                     return function (du) {
                         var dt = typeof du.getAttributeNode !== df && du.getAttributeNode("id");
                         return dt && dt.value === dr;
                     };
                 };
             }
             cq.find.TAG = dj.getElementsByTagName
                 ? function (dr, ds) {
                       if (typeof ds.getElementsByTagName !== df) {
                           return ds.getElementsByTagName(dr);
                       }
                   }
                 : function (dr, dv) {
                       var dw,
                           du = [],
                           dt = 0,
                           ds = dv.getElementsByTagName(dr);
                       if (dr === "*") {
                           while ((dw = ds[dt++])) {
                               if (dw.nodeType === 1) {
                                   du.push(dw);
                               }
                           }
                           return du;
                       }
                       return ds;
                   };
             cq.find.CLASS =
                 dj.getElementsByClassName &&
                 function (ds, dr) {
                     if (typeof dr.getElementsByClassName !== df && c9) {
                         return dr.getElementsByClassName(ds);
                     }
                 };
             dh = [];
             c4 = [];
             if ((dj.qsa = cR.test(dq.querySelectorAll))) {
                 ch(function (dr) {
                     dr.innerHTML = "<select><option selected=''></option></select>";
                     if (!dr.querySelectorAll("[selected]").length) {
                         c4.push("\\[" + cs + "*(?:value|" + b9 + ")");
                     }
                     if (!dr.querySelectorAll(":checked").length) {
                         c4.push(":checked");
                     }
                 });
                 ch(function (ds) {
                     var dr = dq.createElement("input");
                     dr.setAttribute("type", "hidden");
                     ds.appendChild(dr).setAttribute("t", "");
                     if (ds.querySelectorAll("[t^='']").length) {
                         c4.push("[*^$]=" + cs + "*(?:''|\"\")");
                     }
                     if (!ds.querySelectorAll(":enabled").length) {
                         c4.push(":enabled", ":disabled");
                     }
                     ds.querySelectorAll("*,:x");
                     c4.push(",.*:");
                 });
             }
             if ((dj.matchesSelector = cR.test((cf = cr.webkitMatchesSelector || cr.mozMatchesSelector || cr.oMatchesSelector || cr.msMatchesSelector)))) {
                 ch(function (dr) {
                     dj.disconnectedMatch = cf.call(dr, "div");
                     cf.call(dr, "[s!='']:x");
                     dh.push("!=", cn);
                 });
             }
             c4 = c4.length && new RegExp(c4.join("|"));
             dh = dh.length && new RegExp(dh.join("|"));
             cH =
                 cR.test(cr.contains) || cr.compareDocumentPosition
                     ? function (ds, dr) {
                           var du = ds.nodeType === 9 ? ds.documentElement : ds,
                               dt = dr && dr.parentNode;
                           return ds === dt || !!(dt && dt.nodeType === 1 && (du.contains ? du.contains(dt) : ds.compareDocumentPosition && ds.compareDocumentPosition(dt) & 16));
                       }
                     : function (ds, dr) {
                           if (dr) {
                               while ((dr = dr.parentNode)) {
                                   if (dr === ds) {
                                       return true;
                                   }
                               }
                           }
                           return false;
                       };
             cG = cr.compareDocumentPosition
                 ? function (ds, dr) {
                       if (ds === dr) {
                           cY = true;
                           return 0;
                       }
                       var dt = dr.compareDocumentPosition && ds.compareDocumentPosition && ds.compareDocumentPosition(dr);
                       if (dt) {
                           if (dt & 1 || (!dj.sortDetached && dr.compareDocumentPosition(ds) === dt)) {
                               if (ds === dq || cH(cL, ds)) {
                                   return -1;
                               }
                               if (dr === dq || cH(cL, dr)) {
                                   return 1;
                               }
                               return cK ? ce.call(cK, ds) - ce.call(cK, dr) : 0;
                           }
                           return dt & 4 ? -1 : 1;
                       }
                       return ds.compareDocumentPosition ? -1 : 1;
                   }
                 : function (ds, dr) {
                       var dy,
                           dv = 0,
                           dx = ds.parentNode,
                           du = dr.parentNode,
                           dt = [ds],
                           dw = [dr];
                       if (ds === dr) {
                           cY = true;
                           return 0;
                       } else {
                           if (!dx || !du) {
                               return ds === dq ? -1 : dr === dq ? 1 : dx ? -1 : du ? 1 : cK ? ce.call(cK, ds) - ce.call(cK, dr) : 0;
                           } else {
                               if (dx === du) {
                                   return cb(ds, dr);
                               }
                           }
                       }
                       dy = ds;
                       while ((dy = dy.parentNode)) {
                           dt.unshift(dy);
                       }
                       dy = dr;
                       while ((dy = dy.parentNode)) {
                           dw.unshift(dy);
                       }
                       while (dt[dv] === dw[dv]) {
                           dv++;
                       }
                       return dv ? cb(dt[dv], dw[dv]) : dt[dv] === cL ? -1 : dw[dv] === cL ? 1 : 0;
                   };
             return dq;
         };
         cy.matches = function (dp, e) {
             return cy(dp, null, null, e);
         };
         cy.matchesSelector = function (dq, ds) {
             if ((dq.ownerDocument || dq) !== cE) {
                 c0(dq);
             }
             ds = ds.replace(cw, "='$1']");
             if (dj.matchesSelector && c9 && (!dh || !dh.test(ds)) && (!c4 || !c4.test(ds))) {
                 try {
                     var dp = cf.call(dq, ds);
                     if (dp || dj.disconnectedMatch || (dq.document && dq.document.nodeType !== 11)) {
                         return dp;
                     }
                 } catch (dr) {}
             }
             return cy(ds, cE, null, [dq]).length > 0;
         };
         cy.contains = function (e, dp) {
             if ((e.ownerDocument || e) !== cE) {
                 c0(e);
             }
             return cH(e, dp);
         };
         cy.attr = function (dq, e) {
             if ((dq.ownerDocument || dq) !== cE) {
                 c0(dq);
             }
             var dp = cq.attrHandle[e.toLowerCase()],
                 dr = dp && cQ.call(cq.attrHandle, e.toLowerCase()) ? dp(dq, e, !c9) : cl;
             return dr === cl ? (dj.attributes || !c9 ? dq.getAttribute(e) : (dr = dq.getAttributeNode(e)) && dr.specified ? dr.value : null) : dr;
         };
         cy.error = function (e) {
             throw new Error("Syntax error, unrecognized expression: " + e);
         };
         cy.uniqueSort = function (dq) {
             var dr,
                 ds = [],
                 e = 0,
                 dp = 0;
             cY = !dj.detectDuplicates;
             cK = !dj.sortStable && dq.slice(0);
             dq.sort(cG);
             if (cY) {
                 while ((dr = dq[dp++])) {
                     if (dr === dq[dp]) {
                         e = ds.push(dp);
                     }
                 }
                 while (e--) {
                     dq.splice(ds[e], 1);
                 }
             }
             return dq;
         };
         cJ = cy.getText = function (ds) {
             var dr,
                 dp = "",
                 dq = 0,
                 e = ds.nodeType;
             if (!e) {
                 for (; (dr = ds[dq]); dq++) {
                     dp += cJ(dr);
                 }
             } else {
                 if (e === 1 || e === 9 || e === 11) {
                     if (typeof ds.textContent === "string") {
                         return ds.textContent;
                     } else {
                         for (ds = ds.firstChild; ds; ds = ds.nextSibling) {
                             dp += cJ(ds);
                         }
                     }
                 } else {
                     if (e === 3 || e === 4) {
                         return ds.nodeValue;
                     }
                 }
             }
             return dp;
         };
         cq = cy.selectors = {
             cacheLength: 50,
             createPseudo: cm,
             match: c3,
             attrHandle: {},
             find: {},
             relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } },
             preFilter: {
                 ATTR: function (e) {
                     e[1] = e[1].replace(cv, c6);
                     e[3] = (e[4] || e[5] || "").replace(cv, c6);
                     if (e[2] === "~=") {
                         e[3] = " " + e[3] + " ";
                     }
                     return e.slice(0, 4);
                 },
                 CHILD: function (e) {
                     e[1] = e[1].toLowerCase();
                     if (e[1].slice(0, 3) === "nth") {
                         if (!e[3]) {
                             cy.error(e[0]);
                         }
                         e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                         e[5] = +(e[7] + e[8] || e[3] === "odd");
                     } else {
                         if (e[3]) {
                             cy.error(e[0]);
                         }
                     }
                     return e;
                 },
                 PSEUDO: function (dp) {
                     var e,
                         dq = !dp[5] && dp[2];
                     if (c3.CHILD.test(dp[0])) {
                         return null;
                     }
                     if (dp[3] && dp[4] !== cl) {
                         dp[2] = dp[4];
                     } else {
                         if (dq && cU.test(dq) && (e = cj(dq, true)) && (e = dq.indexOf(")", dq.length - e) - dq.length)) {
                             dp[0] = dp[0].slice(0, e);
                             dp[2] = dq.slice(0, e);
                         }
                     }
                     return dp.slice(0, 3);
                 },
             },
             filter: {
                 TAG: function (dp) {
                     var e = dp.replace(cv, c6).toLowerCase();
                     return dp === "*"
                         ? function () {
                               return true;
                           }
                         : function (dq) {
                               return dq.nodeName && dq.nodeName.toLowerCase() === e;
                           };
                 },
                 CLASS: function (e) {
                     var dp = ca[e + " "];
                     return (
                         dp ||
                         ((dp = new RegExp("(^|" + cs + ")" + e + "(" + cs + "|$)")) &&
                             ca(e, function (dq) {
                                 return dp.test((typeof dq.className === "string" && dq.className) || (typeof dq.getAttribute !== df && dq.getAttribute("class")) || "");
                             }))
                     );
                 },
                 ATTR: function (dq, dp, e) {
                     return function (ds) {
                         var dr = cy.attr(ds, dq);
                         if (dr == null) {
                             return dp === "!=";
                         }
                         if (!dp) {
                             return true;
                         }
                         dr += "";
                         return dp === "="
                             ? dr === e
                             : dp === "!="
                             ? dr !== e
                             : dp === "^="
                             ? e && dr.indexOf(e) === 0
                             : dp === "*="
                             ? e && dr.indexOf(e) > -1
                             : dp === "$="
                             ? e && dr.slice(-e.length) === e
                             : dp === "~="
                             ? (" " + dr + " ").indexOf(e) > -1
                             : dp === "|="
                             ? dr === e || dr.slice(0, e.length + 1) === e + "-"
                             : false;
                     };
                 },
                 CHILD: function (dp, ds, dr, dt, dq) {
                     var dv = dp.slice(0, 3) !== "nth",
                         e = dp.slice(-4) !== "last",
                         du = ds === "of-type";
                     return dt === 1 && dq === 0
                         ? function (dw) {
                               return !!dw.parentNode;
                           }
                         : function (dC, dA, dF) {
                               var dw,
                                   dI,
                                   dD,
                                   dH,
                                   dE,
                                   dz,
                                   dB = dv !== e ? "nextSibling" : "previousSibling",
                                   dG = dC.parentNode,
                                   dy = du && dC.nodeName.toLowerCase(),
                                   dx = !dF && !du;
                               if (dG) {
                                   if (dv) {
                                       while (dB) {
                                           dD = dC;
                                           while ((dD = dD[dB])) {
                                               if (du ? dD.nodeName.toLowerCase() === dy : dD.nodeType === 1) {
                                                   return false;
                                               }
                                           }
                                           dz = dB = dp === "only" && !dz && "nextSibling";
                                       }
                                       return true;
                                   }
                                   dz = [e ? dG.firstChild : dG.lastChild];
                                   if (e && dx) {
                                       dI = dG[db] || (dG[db] = {});
                                       dw = dI[dp] || [];
                                       dE = dw[0] === dk && dw[1];
                                       dH = dw[0] === dk && dw[2];
                                       dD = dE && dG.childNodes[dE];
                                       while ((dD = (++dE && dD && dD[dB]) || (dH = dE = 0) || dz.pop())) {
                                           if (dD.nodeType === 1 && ++dH && dD === dC) {
                                               dI[dp] = [dk, dE, dH];
                                               break;
                                           }
                                       }
                                   } else {
                                       if (dx && (dw = (dC[db] || (dC[db] = {}))[dp]) && dw[0] === dk) {
                                           dH = dw[1];
                                       } else {
                                           while ((dD = (++dE && dD && dD[dB]) || (dH = dE = 0) || dz.pop())) {
                                               if ((du ? dD.nodeName.toLowerCase() === dy : dD.nodeType === 1) && ++dH) {
                                                   if (dx) {
                                                       (dD[db] || (dD[db] = {}))[dp] = [dk, dH];
                                                   }
                                                   if (dD === dC) {
                                                       break;
                                                   }
                                               }
                                           }
                                       }
                                   }
                                   dH -= dq;
                                   return dH === dt || (dH % dt === 0 && dH / dt >= 0);
                               }
                           };
                 },
                 PSEUDO: function (dr, dq) {
                     var e,
                         dp = cq.pseudos[dr] || cq.setFilters[dr.toLowerCase()] || cy.error("unsupported pseudo: " + dr);
                     if (dp[db]) {
                         return dp(dq);
                     }
                     if (dp.length > 1) {
                         e = [dr, dr, "", dq];
                         return cq.setFilters.hasOwnProperty(dr.toLowerCase())
                             ? cm(function (du, dw) {
                                   var dt,
                                       ds = dp(du, dq),
                                       dv = ds.length;
                                   while (dv--) {
                                       dt = ce.call(du, ds[dv]);
                                       du[dt] = !(dw[dt] = ds[dv]);
                                   }
                               })
                             : function (ds) {
                                   return dp(ds, 0, e);
                               };
                     }
                     return dp;
                 },
             },
             pseudos: {
                 not: cm(function (e) {
                     var dp = [],
                         dq = [],
                         dr = cX(e.replace(cu, "$1"));
                     return dr[db]
                         ? cm(function (dt, dy, dw, du) {
                               var dx,
                                   ds = dr(dt, null, du, []),
                                   dv = dt.length;
                               while (dv--) {
                                   if ((dx = ds[dv])) {
                                       dt[dv] = !(dy[dv] = dx);
                                   }
                               }
                           })
                         : function (du, dt, ds) {
                               dp[0] = du;
                               dr(dp, null, ds, dq);
                               return !dq.pop();
                           };
                 }),
                 has: cm(function (e) {
                     return function (dp) {
                         return cy(e, dp).length > 0;
                     };
                 }),
                 contains: cm(function (e) {
                     return function (dp) {
                         return (dp.textContent || dp.innerText || cJ(dp)).indexOf(e) > -1;
                     };
                 }),
                 lang: cm(function (e) {
                     if (!cV.test(e || "")) {
                         cy.error("unsupported lang: " + e);
                     }
                     e = e.replace(cv, c6).toLowerCase();
                     return function (dq) {
                         var dp;
                         do {
                             if ((dp = c9 ? dq.lang : dq.getAttribute("xml:lang") || dq.getAttribute("lang"))) {
                                 dp = dp.toLowerCase();
                                 return dp === e || dp.indexOf(e + "-") === 0;
                             }
                         } while ((dq = dq.parentNode) && dq.nodeType === 1);
                         return false;
                     };
                 }),
                 target: function (e) {
                     var dp = dg.location && dg.location.hash;
                     return dp && dp.slice(1) === e.id;
                 },
                 root: function (e) {
                     return e === cr;
                 },
                 focus: function (e) {
                     return e === cE.activeElement && (!cE.hasFocus || cE.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                 },
                 enabled: function (e) {
                     return e.disabled === false;
                 },
                 disabled: function (e) {
                     return e.disabled === true;
                 },
                 checked: function (e) {
                     var dp = e.nodeName.toLowerCase();
                     return (dp === "input" && !!e.checked) || (dp === "option" && !!e.selected);
                 },
                 selected: function (e) {
                     if (e.parentNode) {
                         e.parentNode.selectedIndex;
                     }
                     return e.selected === true;
                 },
                 empty: function (e) {
                     for (e = e.firstChild; e; e = e.nextSibling) {
                         if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                             return false;
                         }
                     }
                     return true;
                 },
                 parent: function (e) {
                     return !cq.pseudos.empty(e);
                 },
                 header: function (e) {
                     return co.test(e.nodeName);
                 },
                 input: function (e) {
                     return cd.test(e.nodeName);
                 },
                 button: function (dp) {
                     var e = dp.nodeName.toLowerCase();
                     return (e === "input" && dp.type === "button") || e === "button";
                 },
                 text: function (dp) {
                     var e;
                     return dp.nodeName.toLowerCase() === "input" && dp.type === "text" && ((e = dp.getAttribute("type")) == null || e.toLowerCase() === dp.type);
                 },
                 first: c8(function () {
                     return [0];
                 }),
                 last: c8(function (e, dp) {
                     return [dp - 1];
                 }),
                 eq: c8(function (e, dq, dp) {
                     return [dp < 0 ? dp + dq : dp];
                 }),
                 even: c8(function (e, dq) {
                     var dp = 0;
                     for (; dp < dq; dp += 2) {
                         e.push(dp);
                     }
                     return e;
                 }),
                 odd: c8(function (e, dq) {
                     var dp = 1;
                     for (; dp < dq; dp += 2) {
                         e.push(dp);
                     }
                     return e;
                 }),
                 lt: c8(function (e, dr, dq) {
                     var dp = dq < 0 ? dq + dr : dq;
                     for (; --dp >= 0; ) {
                         e.push(dp);
                     }
                     return e;
                 }),
                 gt: c8(function (e, dr, dq) {
                     var dp = dq < 0 ? dq + dr : dq;
                     for (; ++dp < dr; ) {
                         e.push(dp);
                     }
                     return e;
                 }),
             },
         };
         cq.pseudos.nth = cq.pseudos.eq;
         for (cA in { radio: true, checkbox: true, file: true, password: true, image: true }) {
             cq.pseudos[cA] = cz(cA);
         }
         for (cA in { submit: true, reset: true }) {
             cq.pseudos[cA] = cc(cA);
         }
         function cW() {}
         cW.prototype = cq.filters = cq.pseudos;
         cq.setFilters = new cW();
         function cj(ds, dx) {
             var dp,
                 dt,
                 dv,
                 dw,
                 du,
                 dq,
                 e,
                 dr = da[ds + " "];
             if (dr) {
                 return dx ? 0 : dr.slice(0);
             }
             du = ds;
             dq = [];
             e = cq.preFilter;
             while (du) {
                 if (!dp || (dt = cx.exec(du))) {
                     if (dt) {
                         du = du.slice(dt[0].length) || du;
                     }
                     dq.push((dv = []));
                 }
                 dp = false;
                 if ((dt = cD.exec(du))) {
                     dp = dt.shift();
                     dv.push({ value: dp, type: dt[0].replace(cu, " ") });
                     du = du.slice(dp.length);
                 }
                 for (dw in cq.filter) {
                     if ((dt = c3[dw].exec(du)) && (!e[dw] || (dt = e[dw](dt)))) {
                         dp = dt.shift();
                         dv.push({ value: dp, type: dw, matches: dt });
                         du = du.slice(dp.length);
                     }
                 }
                 if (!dp) {
                     break;
                 }
             }
             return dx ? du.length : du ? cy.error(ds) : da(ds, dq).slice(0);
         }
         function ck(dr) {
             var dq = 0,
                 dp = dr.length,
                 e = "";
             for (; dq < dp; dq++) {
                 e += dr[dq].value;
             }
             return e;
         }
         function ct(ds, dq, dr) {
             var e = dq.dir,
                 dt = dr && e === "parentNode",
                 dp = c5++;
             return dq.first
                 ? function (dw, dv, du) {
                       while ((dw = dw[e])) {
                           if (dw.nodeType === 1 || dt) {
                               return ds(dw, dv, du);
                           }
                       }
                   }
                 : function (dy, dw, dv) {
                       var dA,
                           du,
                           dx,
                           dz = dk + " " + dp;
                       if (dv) {
                           while ((dy = dy[e])) {
                               if (dy.nodeType === 1 || dt) {
                                   if (ds(dy, dw, dv)) {
                                       return true;
                                   }
                               }
                           }
                       } else {
                           while ((dy = dy[e])) {
                               if (dy.nodeType === 1 || dt) {
                                   dx = dy[db] || (dy[db] = {});
                                   if ((du = dx[e]) && du[0] === dz) {
                                       if ((dA = du[1]) === true || dA === cg) {
                                           return dA === true;
                                       }
                                   } else {
                                       du = dx[e] = [dz];
                                       du[1] = ds(dy, dw, dv) || cg;
                                       if (du[1] === true) {
                                           return true;
                                       }
                                   }
                               }
                           }
                       }
                   };
         }
         function dm(e) {
             return e.length > 1
                 ? function (ds, dr, dp) {
                       var dq = e.length;
                       while (dq--) {
                           if (!e[dq](ds, dr, dp)) {
                               return false;
                           }
                       }
                       return true;
                   }
                 : e[0];
         }
         function c1(e, dp, dq, dr, du) {
             var ds,
                 dx = [],
                 dt = 0,
                 dv = e.length,
                 dw = dp != null;
             for (; dt < dv; dt++) {
                 if ((ds = e[dt])) {
                     if (!dq || dq(ds, dr, du)) {
                         dx.push(ds);
                         if (dw) {
                             dp.push(dt);
                         }
                     }
                 }
             }
             return dx;
         }
         function ci(dq, dp, ds, dr, dt, e) {
             if (dr && !dr[db]) {
                 dr = ci(dr);
             }
             if (dt && !dt[db]) {
                 dt = ci(dt, e);
             }
             return cm(function (dE, dB, dw, dD) {
                 var dG,
                     dC,
                     dy,
                     dx = [],
                     dF = [],
                     dv = dB.length,
                     du = dE || cB(dp || "*", dw.nodeType ? [dw] : dw, []),
                     dz = dq && (dE || !dp) ? c1(du, dx, dq, dw, dD) : du,
                     dA = ds ? (dt || (dE ? dq : dv || dr) ? [] : dB) : dz;
                 if (ds) {
                     ds(dz, dA, dw, dD);
                 }
                 if (dr) {
                     dG = c1(dA, dF);
                     dr(dG, [], dw, dD);
                     dC = dG.length;
                     while (dC--) {
                         if ((dy = dG[dC])) {
                             dA[dF[dC]] = !(dz[dF[dC]] = dy);
                         }
                     }
                 }
                 if (dE) {
                     if (dt || dq) {
                         if (dt) {
                             dG = [];
                             dC = dA.length;
                             while (dC--) {
                                 if ((dy = dA[dC])) {
                                     dG.push((dz[dC] = dy));
                                 }
                             }
                             dt(null, (dA = []), dG, dD);
                         }
                         dC = dA.length;
                         while (dC--) {
                             if ((dy = dA[dC]) && (dG = dt ? ce.call(dE, dy) : dx[dC]) > -1) {
                                 dE[dG] = !(dB[dG] = dy);
                             }
                         }
                     }
                 } else {
                     dA = c1(dA === dB ? dA.splice(dv, dA.length) : dA);
                     if (dt) {
                         dt(null, dB, dA, dD);
                     } else {
                         b8.apply(dB, dA);
                     }
                 }
             });
         }
         function dc(du) {
             var dp,
                 ds,
                 dq,
                 dt = du.length,
                 dx = cq.relative[du[0].type],
                 dy = dx || cq.relative[" "],
                 dr = dx ? 1 : 0,
                 dv = ct(
                     function (dz) {
                         return dz === dp;
                     },
                     dy,
                     true
                 ),
                 dw = ct(
                     function (dz) {
                         return ce.call(dp, dz) > -1;
                     },
                     dy,
                     true
                 ),
                 e = [
                     function (dB, dA, dz) {
                         return (!dx && (dz || dA !== dn)) || ((dp = dA).nodeType ? dv(dB, dA, dz) : dw(dB, dA, dz));
                     },
                 ];
             for (; dr < dt; dr++) {
                 if ((ds = cq.relative[du[dr].type])) {
                     e = [ct(dm(e), ds)];
                 } else {
                     ds = cq.filter[du[dr].type].apply(null, du[dr].matches);
                     if (ds[db]) {
                         dq = ++dr;
                         for (; dq < dt; dq++) {
                             if (cq.relative[du[dq].type]) {
                                 break;
                             }
                         }
                         return ci(
                             dr > 1 && dm(e),
                             dr > 1 && ck(du.slice(0, dr - 1).concat({ value: du[dr - 2].type === " " ? "*" : "" })).replace(cu, "$1"),
                             ds,
                             dr < dq && dc(du.slice(dr, dq)),
                             dq < dt && dc((du = du.slice(dq))),
                             dq < dt && ck(du)
                         );
                     }
                     e.push(ds);
                 }
             }
             return dm(e);
         }
         function cZ(dr, dq) {
             var dt = 0,
                 e = dq.length > 0,
                 ds = dr.length > 0,
                 dp = function (dD, dx, dC, dB, dJ) {
                     var dy,
                         dz,
                         dE,
                         dI = [],
                         dH = 0,
                         dA = "0",
                         du = dD && [],
                         dF = dJ != null,
                         dG = dn,
                         dw = dD || (ds && cq.find.TAG("*", (dJ && dx.parentNode) || dx)),
                         dv = (dk += dG == null ? 1 : Math.random() || 0.1);
                     if (dF) {
                         dn = dx !== cE && dx;
                         cg = dt;
                     }
                     for (; (dy = dw[dA]) != null; dA++) {
                         if (ds && dy) {
                             dz = 0;
                             while ((dE = dr[dz++])) {
                                 if (dE(dy, dx, dC)) {
                                     dB.push(dy);
                                     break;
                                 }
                             }
                             if (dF) {
                                 dk = dv;
                                 cg = ++dt;
                             }
                         }
                         if (e) {
                             if ((dy = !dE && dy)) {
                                 dH--;
                             }
                             if (dD) {
                                 du.push(dy);
                             }
                         }
                     }
                     dH += dA;
                     if (e && dA !== dH) {
                         dz = 0;
                         while ((dE = dq[dz++])) {
                             dE(du, dI, dx, dC);
                         }
                         if (dD) {
                             if (dH > 0) {
                                 while (dA--) {
                                     if (!(du[dA] || dI[dA])) {
                                         dI[dA] = de.call(dB);
                                     }
                                 }
                             }
                             dI = c1(dI);
                         }
                         b8.apply(dB, dI);
                         if (dF && !dD && dI.length > 0 && dH + dq.length > 1) {
                             cy.uniqueSort(dB);
                         }
                     }
                     if (dF) {
                         dk = dv;
                         dn = dG;
                     }
                     return du;
                 };
             return e ? cm(dp) : dp;
         }
         cX = cy.compile = function (e, dt) {
             var dq,
                 dp = [],
                 ds = [],
                 dr = cI[e + " "];
             if (!dr) {
                 if (!dt) {
                     dt = cj(e);
                 }
                 dq = dt.length;
                 while (dq--) {
                     dr = dc(dt[dq]);
                     if (dr[db]) {
                         dp.push(dr);
                     } else {
                         ds.push(dr);
                     }
                 }
                 dr = cI(e, cZ(ds, dp));
             }
             return dr;
         };
         function cB(dp, ds, dr) {
             var dq = 0,
                 e = ds.length;
             for (; dq < e; dq++) {
                 cy(dp, ds[dq], dr);
             }
             return dr;
         }
         function di(dq, e, dr, du) {
             var ds,
                 dw,
                 dp,
                 dx,
                 dv,
                 dt = cj(dq);
             if (!du) {
                 if (dt.length === 1) {
                     dw = dt[0] = dt[0].slice(0);
                     if (dw.length > 2 && (dp = dw[0]).type === "ID" && dj.getById && e.nodeType === 9 && c9 && cq.relative[dw[1].type]) {
                         e = (cq.find.ID(dp.matches[0].replace(cv, c6), e) || [])[0];
                         if (!e) {
                             return dr;
                         }
                         dq = dq.slice(dw.shift().value.length);
                     }
                     ds = c3.needsContext.test(dq) ? 0 : dw.length;
                     while (ds--) {
                         dp = dw[ds];
                         if (cq.relative[(dx = dp.type)]) {
                             break;
                         }
                         if ((dv = cq.find[dx])) {
                             if ((du = dv(dp.matches[0].replace(cv, c6), (c2.test(dw[0].type) && e.parentNode) || e))) {
                                 dw.splice(ds, 1);
                                 dq = du.length && ck(dw);
                                 if (!dq) {
                                     b8.apply(dr, du);
                                     return dr;
                                 }
                                 break;
                             }
                         }
                     }
                 }
             }
             cX(dq, dt)(du, e, !c9, dr, c2.test(dq));
             return dr;
         }
         dj.sortStable = db.split("").sort(cG).join("") === db;
         dj.detectDuplicates = cY;
         c0();
         dj.sortDetached = ch(function (e) {
             return e.compareDocumentPosition(cE.createElement("div")) & 1;
         });
         if (
             !ch(function (e) {
                 e.innerHTML = "<a href='#'></a>";
                 return e.firstChild.getAttribute("href") === "#";
             })
         ) {
             dl("type|href|height|width", function (dp, e, dq) {
                 if (!dq) {
                     return dp.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2);
                 }
             });
         }
         if (
             !dj.attributes ||
             !ch(function (e) {
                 e.innerHTML = "<input/>";
                 e.firstChild.setAttribute("value", "");
                 return e.firstChild.getAttribute("value") === "";
             })
         ) {
             dl("value", function (dp, e, dq) {
                 if (!dq && dp.nodeName.toLowerCase() === "input") {
                     return dp.defaultValue;
                 }
             });
         }
         if (
             !ch(function (e) {
                 return e.getAttribute("disabled") == null;
             })
         ) {
             dl(b9, function (dp, e, dr) {
                 var dq;
                 if (!dr) {
                     return (dq = dp.getAttributeNode(e)) && dq.specified ? dq.value : dp[e] === true ? e.toLowerCase() : null;
                 }
             });
         }
         bM.find = cy;
         bM.expr = cy.selectors;
         bM.expr[":"] = bM.expr.pseudos;
         bM.unique = cy.uniqueSort;
         bM.text = cy.getText;
         bM.isXMLDoc = cy.isXML;
         bM.contains = cy.contains;
     })(a5);
     var b2 = {};
     function ag(b7) {
         var e = (b2[b7] = {});
         bM.each(b7.match(ae) || [], function (b9, b8) {
             e[b8] = true;
         });
         return e;
     }
     bM.Callbacks = function (cg) {
         cg = typeof cg === "string" ? b2[cg] || ag(cg) : bM.extend({}, cg);
         var ca,
             b9,
             e,
             cb,
             cc,
             b8,
             cd = [],
             ce = !cg.once && [],
             b7 = function (ch) {
                 b9 = cg.memory && ch;
                 e = true;
                 cc = b8 || 0;
                 b8 = 0;
                 cb = cd.length;
                 ca = true;
                 for (; cd && cc < cb; cc++) {
                     if (cd[cc].apply(ch[0], ch[1]) === false && cg.stopOnFalse) {
                         b9 = false;
                         break;
                     }
                 }
                 ca = false;
                 if (cd) {
                     if (ce) {
                         if (ce.length) {
                             b7(ce.shift());
                         }
                     } else {
                         if (b9) {
                             cd = [];
                         } else {
                             cf.disable();
                         }
                     }
                 }
             },
             cf = {
                 add: function () {
                     if (cd) {
                         var ci = cd.length;
                         (function ch(cj) {
                             bM.each(cj, function (cl, ck) {
                                 var cm = bM.type(ck);
                                 if (cm === "function") {
                                     if (!cg.unique || !cf.has(ck)) {
                                         cd.push(ck);
                                     }
                                 } else {
                                     if (ck && ck.length && cm !== "string") {
                                         ch(ck);
                                     }
                                 }
                             });
                         })(arguments);
                         if (ca) {
                             cb = cd.length;
                         } else {
                             if (b9) {
                                 b8 = ci;
                                 b7(b9);
                             }
                         }
                     }
                     return this;
                 },
                 remove: function () {
                     if (cd) {
                         bM.each(arguments, function (cj, ch) {
                             var ci;
                             while ((ci = bM.inArray(ch, cd, ci)) > -1) {
                                 cd.splice(ci, 1);
                                 if (ca) {
                                     if (ci <= cb) {
                                         cb--;
                                     }
                                     if (ci <= cc) {
                                         cc--;
                                     }
                                 }
                             }
                         });
                     }
                     return this;
                 },
                 has: function (ch) {
                     return ch ? bM.inArray(ch, cd) > -1 : !!(cd && cd.length);
                 },
                 empty: function () {
                     cd = [];
                     cb = 0;
                     return this;
                 },
                 disable: function () {
                     cd = ce = b9 = aI;
                     return this;
                 },
                 disabled: function () {
                     return !cd;
                 },
                 lock: function () {
                     ce = aI;
                     if (!b9) {
                         cf.disable();
                     }
                     return this;
                 },
                 locked: function () {
                     return !ce;
                 },
                 fireWith: function (ci, ch) {
                     if (cd && (!e || ce)) {
                         ch = ch || [];
                         ch = [ci, ch.slice ? ch.slice() : ch];
                         if (ca) {
                             ce.push(ch);
                         } else {
                             b7(ch);
                         }
                     }
                     return this;
                 },
                 fire: function () {
                     cf.fireWith(this, arguments);
                     return this;
                 },
                 fired: function () {
                     return !!e;
                 },
             };
         return cf;
     };
     bM.extend({
         Deferred: function (b8) {
             var b7 = [
                     ["resolve", "done", bM.Callbacks("once memory"), "resolved"],
                     ["reject", "fail", bM.Callbacks("once memory"), "rejected"],
                     ["notify", "progress", bM.Callbacks("memory")],
                 ],
                 b9 = "pending",
                 ca = {
                     state: function () {
                         return b9;
                     },
                     always: function () {
                         e.done(arguments).fail(arguments);
                         return this;
                     },
                     then: function () {
                         var cb = arguments;
                         return bM
                             .Deferred(function (cc) {
                                 bM.each(b7, function (ce, cd) {
                                     var cg = cd[0],
                                         cf = bM.isFunction(cb[ce]) && cb[ce];
                                     e[cd[1]](function () {
                                         var ch = cf && cf.apply(this, arguments);
                                         if (ch && bM.isFunction(ch.promise)) {
                                             ch.promise().done(cc.resolve).fail(cc.reject).progress(cc.notify);
                                         } else {
                                             cc[cg + "With"](this === ca ? cc.promise() : this, cf ? [ch] : arguments);
                                         }
                                     });
                                 });
                                 cb = null;
                             })
                             .promise();
                     },
                     promise: function (cb) {
                         return cb != null ? bM.extend(cb, ca) : ca;
                     },
                 },
                 e = {};
             ca.pipe = ca.then;
             bM.each(b7, function (cc, cb) {
                 var ce = cb[2],
                     cd = cb[3];
                 ca[cb[1]] = ce.add;
                 if (cd) {
                     ce.add(
                         function () {
                             b9 = cd;
                         },
                         b7[cc ^ 1][2].disable,
                         b7[2][2].lock
                     );
                 }
                 e[cb[0]] = function () {
                     e[cb[0] + "With"](this === e ? ca : this, arguments);
                     return this;
                 };
                 e[cb[0] + "With"] = ce.fireWith;
             });
             ca.promise(e);
             if (b8) {
                 b8.call(e, e);
             }
             return e;
         },
         when: function (ca) {
             var b8 = 0,
                 cc = a7.call(arguments),
                 e = cc.length,
                 b7 = e !== 1 || (ca && bM.isFunction(ca.promise)) ? e : 0,
                 cf = b7 === 1 ? ca : bM.Deferred(),
                 b9 = function (ch, ci, cg) {
                     return function (cj) {
                         ci[ch] = this;
                         cg[ch] = arguments.length > 1 ? a7.call(arguments) : cj;
                         if (cg === ce) {
                             cf.notifyWith(ci, cg);
                         } else {
                             if (!--b7) {
                                 cf.resolveWith(ci, cg);
                             }
                         }
                     };
                 },
                 ce,
                 cb,
                 cd;
             if (e > 1) {
                 ce = new Array(e);
                 cb = new Array(e);
                 cd = new Array(e);
                 for (; b8 < e; b8++) {
                     if (cc[b8] && bM.isFunction(cc[b8].promise)) {
                         cc[b8].promise().done(b9(b8, cd, cc)).fail(cf.reject).progress(b9(b8, cb, ce));
                     } else {
                         --b7;
                     }
                 }
             }
             if (!b7) {
                 cf.resolveWith(cd, cc);
             }
             return cf.promise();
         },
     });
     bM.support = (function (ci) {
         var ch,
             cf,
             ce,
             cg,
             cd,
             b9,
             cb,
             b8,
             ca,
             b7 = n.createElement("div");
         b7.setAttribute("className", "t");
         b7.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
         ch = b7.getElementsByTagName("*") || [];
         cf = b7.getElementsByTagName("a")[0];
         if (!cf || !cf.style || !ch.length) {
             return ci;
         }
         cg = n.createElement("select");
         b9 = cg.appendChild(n.createElement("option"));
         ce = b7.getElementsByTagName("input")[0];
         cf.style.cssText = "top:1px;float:left;opacity:.5";
         ci.getSetAttribute = b7.className !== "t";
         ci.leadingWhitespace = b7.firstChild.nodeType === 3;
         ci.tbody = !b7.getElementsByTagName("tbody").length;
         ci.htmlSerialize = !!b7.getElementsByTagName("link").length;
         ci.style = /top/.test(cf.getAttribute("style"));
         ci.hrefNormalized = cf.getAttribute("href") === "/a";
         ci.opacity = /^0.5/.test(cf.style.opacity);
         ci.cssFloat = !!cf.style.cssFloat;
         ci.checkOn = !!ce.value;
         ci.optSelected = b9.selected;
         ci.enctype = !!n.createElement("form").enctype;
         ci.html5Clone = n.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
         ci.inlineBlockNeedsLayout = false;
         ci.shrinkWrapBlocks = false;
         ci.pixelPosition = false;
         ci.deleteExpando = true;
         ci.noCloneEvent = true;
         ci.reliableMarginRight = true;
         ci.boxSizingReliable = true;
         ce.checked = true;
         ci.noCloneChecked = ce.cloneNode(true).checked;
         cg.disabled = true;
         ci.optDisabled = !b9.disabled;
         try {
             delete b7.test;
         } catch (cc) {
             ci.deleteExpando = false;
         }
         ce = n.createElement("input");
         ce.setAttribute("value", "");
         ci.input = ce.getAttribute("value") === "";
         ce.value = "t";
         ce.setAttribute("type", "radio");
         ci.radioValue = ce.value === "t";
         ce.setAttribute("checked", "t");
         ce.setAttribute("name", "t");
         cd = n.createDocumentFragment();
         cd.appendChild(ce);
         ci.appendChecked = ce.checked;
         ci.checkClone = cd.cloneNode(true).cloneNode(true).lastChild.checked;
         if (b7.attachEvent) {
             b7.attachEvent("onclick", function () {
                 ci.noCloneEvent = false;
             });
             b7.cloneNode(true).click();
         }
         for (ca in { submit: true, change: true, focusin: true }) {
             b7.setAttribute((cb = "on" + ca), "t");
             ci[ca + "Bubbles"] = cb in a5 || b7.attributes[cb].expando === false;
         }
         b7.style.backgroundClip = "content-box";
         b7.cloneNode(true).style.backgroundClip = "";
         ci.clearCloneStyle = b7.style.backgroundClip === "content-box";
         for (ca in bM(ci)) {
             break;
         }
         ci.ownLast = ca !== "0";
         bM(function () {
             var cj,
                 cm,
                 cl,
                 ck = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                 e = n.getElementsByTagName("body")[0];
             if (!e) {
                 return;
             }
             cj = n.createElement("div");
             cj.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
             e.appendChild(cj).appendChild(b7);
             b7.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
             cl = b7.getElementsByTagName("td");
             cl[0].style.cssText = "padding:0;margin:0;border:0;display:none";
             b8 = cl[0].offsetHeight === 0;
             cl[0].style.display = "";
             cl[1].style.display = "none";
             ci.reliableHiddenOffsets = b8 && cl[0].offsetHeight === 0;
             b7.innerHTML = "";
             b7.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
             bM.swap(e, e.style.zoom != null ? { zoom: 1 } : {}, function () {
                 ci.boxSizing = b7.offsetWidth === 4;
             });
             if (a5.getComputedStyle) {
                 ci.pixelPosition = (a5.getComputedStyle(b7, null) || {}).top !== "1%";
                 ci.boxSizingReliable = (a5.getComputedStyle(b7, null) || { width: "4px" }).width === "4px";
                 cm = b7.appendChild(n.createElement("div"));
                 cm.style.cssText = b7.style.cssText = ck;
                 cm.style.marginRight = cm.style.width = "0";
                 b7.style.width = "1px";
                 ci.reliableMarginRight = !parseFloat((a5.getComputedStyle(cm, null) || {}).marginRight);
             }
             if (typeof b7.style.zoom !== aE) {
                 b7.innerHTML = "";
                 b7.style.cssText = ck + "width:1px;padding:1px;display:inline;zoom:1";
                 ci.inlineBlockNeedsLayout = b7.offsetWidth === 3;
                 b7.style.display = "block";
                 b7.innerHTML = "<div></div>";
                 b7.firstChild.style.width = "5px";
                 ci.shrinkWrapBlocks = b7.offsetWidth !== 3;
                 if (ci.inlineBlockNeedsLayout) {
                     e.style.zoom = 1;
                 }
             }
             e.removeChild(cj);
             cj = b7 = cl = cm = null;
         });
         ch = cg = cd = b9 = cf = ce = null;
         return ci;
     })({});
     var bz = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
         aP = /([A-Z])/g;
     function bd(b9, b7, cb, ca) {
         if (!bM.acceptData(b9)) {
             return;
         }
         var cd,
             cc,
             ce = bM.expando,
             cf = b9.nodeType,
             e = cf ? bM.cache : b9,
             b8 = cf ? b9[ce] : b9[ce] && ce;
         if ((!b8 || !e[b8] || (!ca && !e[b8].data)) && cb === aI && typeof b7 === "string") {
             return;
         }
         if (!b8) {
             if (cf) {
                 b8 = b9[ce] = a9.pop() || bM.guid++;
             } else {
                 b8 = ce;
             }
         }
         if (!e[b8]) {
             e[b8] = cf ? {} : { toJSON: bM.noop };
         }
         if (typeof b7 === "object" || typeof b7 === "function") {
             if (ca) {
                 e[b8] = bM.extend(e[b8], b7);
             } else {
                 e[b8].data = bM.extend(e[b8].data, b7);
             }
         }
         cc = e[b8];
         if (!ca) {
             if (!cc.data) {
                 cc.data = {};
             }
             cc = cc.data;
         }
         if (cb !== aI) {
             cc[bM.camelCase(b7)] = cb;
         }
         if (typeof b7 === "string") {
             cd = cc[b7];
             if (cd == null) {
                 cd = cc[bM.camelCase(b7)];
             }
         } else {
             cd = cc;
         }
         return cd;
     }
     function ab(ca, b8, e) {
         if (!bM.acceptData(ca)) {
             return;
         }
         var cc,
             b9,
             cb = ca.nodeType,
             b7 = cb ? bM.cache : ca,
             cd = cb ? ca[bM.expando] : bM.expando;
         if (!b7[cd]) {
             return;
         }
         if (b8) {
             cc = e ? b7[cd] : b7[cd].data;
             if (cc) {
                 if (!bM.isArray(b8)) {
                     if (b8 in cc) {
                         b8 = [b8];
                     } else {
                         b8 = bM.camelCase(b8);
                         if (b8 in cc) {
                             b8 = [b8];
                         } else {
                             b8 = b8.split(" ");
                         }
                     }
                 } else {
                     b8 = b8.concat(bM.map(b8, bM.camelCase));
                 }
                 b9 = b8.length;
                 while (b9--) {
                     delete cc[b8[b9]];
                 }
                 if (e ? !P(cc) : !bM.isEmptyObject(cc)) {
                     return;
                 }
             }
         }
         if (!e) {
             delete b7[cd].data;
             if (!P(b7[cd])) {
                 return;
             }
         }
         if (cb) {
             bM.cleanData([ca], true);
         } else {
             if (bM.support.deleteExpando || b7 != b7.window) {
                 delete b7[cd];
             } else {
                 b7[cd] = null;
             }
         }
     }
     bM.extend({
         cache: {},
         noData: { applet: true, embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
         hasData: function (e) {
             e = e.nodeType ? bM.cache[e[bM.expando]] : e[bM.expando];
             return !!e && !P(e);
         },
         data: function (b7, e, b8) {
             return bd(b7, e, b8);
         },
         removeData: function (b7, e) {
             return ab(b7, e);
         },
         _data: function (b7, e, b8) {
             return bd(b7, e, b8, true);
         },
         _removeData: function (b7, e) {
             return ab(b7, e, true);
         },
         acceptData: function (b7) {
             if (b7.nodeType && b7.nodeType !== 1 && b7.nodeType !== 9) {
                 return false;
             }
             var e = b7.nodeName && bM.noData[b7.nodeName.toLowerCase()];
             return !e || (e !== true && b7.getAttribute("classid") === e);
         },
     });
     bM.fn.extend({
         data: function (b9, cc) {
             var b7,
                 e,
                 cb = null,
                 b8 = 0,
                 ca = this[0];
             if (b9 === aI) {
                 if (this.length) {
                     cb = bM.data(ca);
                     if (ca.nodeType === 1 && !bM._data(ca, "parsedAttrs")) {
                         b7 = ca.attributes;
                         for (; b8 < b7.length; b8++) {
                             e = b7[b8].name;
                             if (e.indexOf("data-") === 0) {
                                 e = bM.camelCase(e.slice(5));
                                 bB(ca, e, cb[e]);
                             }
                         }
                         bM._data(ca, "parsedAttrs", true);
                     }
                 }
                 return cb;
             }
             if (typeof b9 === "object") {
                 return this.each(function () {
                     bM.data(this, b9);
                 });
             }
             return arguments.length > 1
                 ? this.each(function () {
                       bM.data(this, b9, cc);
                   })
                 : ca
                 ? bB(ca, b9, bM.data(ca, b9))
                 : null;
         },
         removeData: function (e) {
             return this.each(function () {
                 bM.removeData(this, e);
             });
         },
     });
     function bB(b9, b8, ca) {
         if (ca === aI && b9.nodeType === 1) {
             var b7 = "data-" + b8.replace(aP, "-$1").toLowerCase();
             ca = b9.getAttribute(b7);
             if (typeof ca === "string") {
                 try {
                     ca = ca === "true" ? true : ca === "false" ? false : ca === "null" ? null : +ca + "" === ca ? +ca : bz.test(ca) ? bM.parseJSON(ca) : ca;
                 } catch (cb) {}
                 bM.data(b9, b8, ca);
             } else {
                 ca = aI;
             }
         }
         return ca;
     }
     function P(b7) {
         var e;
         for (e in b7) {
             if (e === "data" && bM.isEmptyObject(b7[e])) {
                 continue;
             }
             if (e !== "toJSON") {
                 return false;
             }
         }
         return true;
     }
     bM.extend({
         queue: function (b8, b7, b9) {
             var e;
             if (b8) {
                 b7 = (b7 || "fx") + "queue";
                 e = bM._data(b8, b7);
                 if (b9) {
                     if (!e || bM.isArray(b9)) {
                         e = bM._data(b8, b7, bM.makeArray(b9));
                     } else {
                         e.push(b9);
                     }
                 }
                 return e || [];
             }
         },
         dequeue: function (cb, ca) {
             ca = ca || "fx";
             var b7 = bM.queue(cb, ca),
                 cc = b7.length,
                 b9 = b7.shift(),
                 e = bM._queueHooks(cb, ca),
                 b8 = function () {
                     bM.dequeue(cb, ca);
                 };
             if (b9 === "inprogress") {
                 b9 = b7.shift();
                 cc--;
             }
             if (b9) {
                 if (ca === "fx") {
                     b7.unshift("inprogress");
                 }
                 delete e.stop;
                 b9.call(cb, b8, e);
             }
             if (!cc && e) {
                 e.empty.fire();
             }
         },
         _queueHooks: function (b8, b7) {
             var e = b7 + "queueHooks";
             return (
                 bM._data(b8, e) ||
                 bM._data(b8, e, {
                     empty: bM.Callbacks("once memory").add(function () {
                         bM._removeData(b8, b7 + "queue");
                         bM._removeData(b8, e);
                     }),
                 })
             );
         },
     });
     bM.fn.extend({
         queue: function (e, b7) {
             var b8 = 2;
             if (typeof e !== "string") {
                 b7 = e;
                 e = "fx";
                 b8--;
             }
             if (arguments.length < b8) {
                 return bM.queue(this[0], e);
             }
             return b7 === aI
                 ? this
                 : this.each(function () {
                       var b9 = bM.queue(this, e, b7);
                       bM._queueHooks(this, e);
                       if (e === "fx" && b9[0] !== "inprogress") {
                           bM.dequeue(this, e);
                       }
                   });
         },
         dequeue: function (e) {
             return this.each(function () {
                 bM.dequeue(this, e);
             });
         },
         delay: function (b7, e) {
             b7 = bM.fx ? bM.fx.speeds[b7] || b7 : b7;
             e = e || "fx";
             return this.queue(e, function (b9, b8) {
                 var ca = setTimeout(b9, b7);
                 b8.stop = function () {
                     clearTimeout(ca);
                 };
             });
         },
         clearQueue: function (e) {
             return this.queue(e || "fx", []);
         },
         promise: function (b8, cc) {
             var b7,
                 b9 = 1,
                 cd = bM.Deferred(),
                 cb = this,
                 e = this.length,
                 ca = function () {
                     if (!--b9) {
                         cd.resolveWith(cb, [cb]);
                     }
                 };
             if (typeof b8 !== "string") {
                 cc = b8;
                 b8 = aI;
             }
             b8 = b8 || "fx";
             while (e--) {
                 b7 = bM._data(cb[e], b8 + "queueHooks");
                 if (b7 && b7.empty) {
                     b9++;
                     b7.empty.add(ca);
                 }
             }
             ca();
             return cd.promise(cc);
         },
     });
     var bb,
         b3,
         bP = /[\t\r\n\f]/g,
         al = /\r/g,
         aH = /^(?:input|select|textarea|button|object)$/i,
         G = /^(?:a|area)$/i,
         at = /^(?:checked|selected)$/i,
         bS = bM.support.getSetAttribute,
         bI = bM.support.input;
     bM.fn.extend({
         attr: function (e, b7) {
             return bM.access(this, bM.attr, e, b7, arguments.length > 1);
         },
         removeAttr: function (e) {
             return this.each(function () {
                 bM.removeAttr(this, e);
             });
         },
         prop: function (e, b7) {
             return bM.access(this, bM.prop, e, b7, arguments.length > 1);
         },
         removeProp: function (e) {
             e = bM.propFix[e] || e;
             return this.each(function () {
                 try {
                     this[e] = aI;
                     delete this[e];
                 } catch (b7) {}
             });
         },
         addClass: function (cd) {
             var b7,
                 e,
                 ce,
                 ca,
                 b8,
                 b9 = 0,
                 cb = this.length,
                 cc = typeof cd === "string" && cd;
             if (bM.isFunction(cd)) {
                 return this.each(function (cf) {
                     bM(this).addClass(cd.call(this, cf, this.className));
                 });
             }
             if (cc) {
                 b7 = (cd || "").match(ae) || [];
                 for (; b9 < cb; b9++) {
                     e = this[b9];
                     ce = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bP, " ") : " ");
                     if (ce) {
                         b8 = 0;
                         while ((ca = b7[b8++])) {
                             if (ce.indexOf(" " + ca + " ") < 0) {
                                 ce += ca + " ";
                             }
                         }
                         e.className = bM.trim(ce);
                     }
                 }
             }
             return this;
         },
         removeClass: function (cd) {
             var b7,
                 e,
                 ce,
                 ca,
                 b8,
                 b9 = 0,
                 cb = this.length,
                 cc = arguments.length === 0 || (typeof cd === "string" && cd);
             if (bM.isFunction(cd)) {
                 return this.each(function (cf) {
                     bM(this).removeClass(cd.call(this, cf, this.className));
                 });
             }
             if (cc) {
                 b7 = (cd || "").match(ae) || [];
                 for (; b9 < cb; b9++) {
                     e = this[b9];
                     ce = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bP, " ") : "");
                     if (ce) {
                         b8 = 0;
                         while ((ca = b7[b8++])) {
                             while (ce.indexOf(" " + ca + " ") >= 0) {
                                 ce = ce.replace(" " + ca + " ", " ");
                             }
                         }
                         e.className = cd ? bM.trim(ce) : "";
                     }
                 }
             }
             return this;
         },
         toggleClass: function (b8, e) {
             var b7 = typeof b8;
             if (typeof e === "boolean" && b7 === "string") {
                 return e ? this.addClass(b8) : this.removeClass(b8);
             }
             if (bM.isFunction(b8)) {
                 return this.each(function (b9) {
                     bM(this).toggleClass(b8.call(this, b9, this.className, e), e);
                 });
             }
             return this.each(function () {
                 if (b7 === "string") {
                     var cb,
                         ca = 0,
                         b9 = bM(this),
                         cc = b8.match(ae) || [];
                     while ((cb = cc[ca++])) {
                         if (b9.hasClass(cb)) {
                             b9.removeClass(cb);
                         } else {
                             b9.addClass(cb);
                         }
                     }
                 } else {
                     if (b7 === aE || b7 === "boolean") {
                         if (this.className) {
                             bM._data(this, "__className__", this.className);
                         }
                         this.className = this.className || b8 === false ? "" : bM._data(this, "__className__") || "";
                     }
                 }
             });
         },
         hasClass: function (e) {
             var b9 = " " + e + " ",
                 b8 = 0,
                 b7 = this.length;
             for (; b8 < b7; b8++) {
                 if (this[b8].nodeType === 1 && (" " + this[b8].className + " ").replace(bP, " ").indexOf(b9) >= 0) {
                     return true;
                 }
             }
             return false;
         },
         val: function (b9) {
             var b7,
                 e,
                 ca,
                 b8 = this[0];
             if (!arguments.length) {
                 if (b8) {
                     e = bM.valHooks[b8.type] || bM.valHooks[b8.nodeName.toLowerCase()];
                     if (e && "get" in e && (b7 = e.get(b8, "value")) !== aI) {
                         return b7;
                     }
                     b7 = b8.value;
                     return typeof b7 === "string" ? b7.replace(al, "") : b7 == null ? "" : b7;
                 }
                 return;
             }
             ca = bM.isFunction(b9);
             return this.each(function (cb) {
                 var cc;
                 if (this.nodeType !== 1) {
                     return;
                 }
                 if (ca) {
                     cc = b9.call(this, cb, bM(this).val());
                 } else {
                     cc = b9;
                 }
                 if (cc == null) {
                     cc = "";
                 } else {
                     if (typeof cc === "number") {
                         cc += "";
                     } else {
                         if (bM.isArray(cc)) {
                             cc = bM.map(cc, function (cd) {
                                 return cd == null ? "" : cd + "";
                             });
                         }
                     }
                 }
                 e = bM.valHooks[this.type] || bM.valHooks[this.nodeName.toLowerCase()];
                 if (!e || !("set" in e) || e.set(this, cc, "value") === aI) {
                     this.value = cc;
                 }
             });
         },
     });
     bM.extend({
         valHooks: {
             option: {
                 get: function (e) {
                     var b7 = bM.find.attr(e, "value");
                     return b7 != null ? b7 : e.text;
                 },
             },
             select: {
                 get: function (e) {
                     var cc,
                         b8,
                         ce = e.options,
                         ca = e.selectedIndex,
                         b9 = e.type === "select-one" || ca < 0,
                         cd = b9 ? null : [],
                         cb = b9 ? ca + 1 : ce.length,
                         b7 = ca < 0 ? cb : b9 ? ca : 0;
                     for (; b7 < cb; b7++) {
                         b8 = ce[b7];
                         if ((b8.selected || b7 === ca) && (bM.support.optDisabled ? !b8.disabled : b8.getAttribute("disabled") === null) && (!b8.parentNode.disabled || !bM.nodeName(b8.parentNode, "optgroup"))) {
                             cc = bM(b8).val();
                             if (b9) {
                                 return cc;
                             }
                             cd.push(cc);
                         }
                     }
                     return cd;
                 },
                 set: function (ca, cb) {
                     var cc,
                         b9,
                         b7 = ca.options,
                         e = bM.makeArray(cb),
                         b8 = b7.length;
                     while (b8--) {
                         b9 = b7[b8];
                         if ((b9.selected = bM.inArray(bM(b9).val(), e) >= 0)) {
                             cc = true;
                         }
                     }
                     if (!cc) {
                         ca.selectedIndex = -1;
                     }
                     return e;
                 },
             },
         },
         attr: function (ca, b9, cb) {
             var e,
                 b8,
                 b7 = ca.nodeType;
             if (!ca || b7 === 3 || b7 === 8 || b7 === 2) {
                 return;
             }
             if (typeof ca.getAttribute === aE) {
                 return bM.prop(ca, b9, cb);
             }
             if (b7 !== 1 || !bM.isXMLDoc(ca)) {
                 b9 = b9.toLowerCase();
                 e = bM.attrHooks[b9] || (bM.expr.match.bool.test(b9) ? b3 : bb);
             }
             if (cb !== aI) {
                 if (cb === null) {
                     bM.removeAttr(ca, b9);
                 } else {
                     if (e && "set" in e && (b8 = e.set(ca, cb, b9)) !== aI) {
                         return b8;
                     } else {
                         ca.setAttribute(b9, cb + "");
                         return cb;
                     }
                 }
             } else {
                 if (e && "get" in e && (b8 = e.get(ca, b9)) !== null) {
                     return b8;
                 } else {
                     b8 = bM.find.attr(ca, b9);
                     return b8 == null ? aI : b8;
                 }
             }
         },
         removeAttr: function (b8, ca) {
             var e,
                 b9,
                 b7 = 0,
                 cb = ca && ca.match(ae);
             if (cb && b8.nodeType === 1) {
                 while ((e = cb[b7++])) {
                     b9 = bM.propFix[e] || e;
                     if (bM.expr.match.bool.test(e)) {
                         if ((bI && bS) || !at.test(e)) {
                             b8[b9] = false;
                         } else {
                             b8[bM.camelCase("default-" + e)] = b8[b9] = false;
                         }
                     } else {
                         bM.attr(b8, e, "");
                     }
                     b8.removeAttribute(bS ? e : b9);
                 }
             }
         },
         attrHooks: {
             type: {
                 set: function (e, b7) {
                     if (!bM.support.radioValue && b7 === "radio" && bM.nodeName(e, "input")) {
                         var b8 = e.value;
                         e.setAttribute("type", b7);
                         if (b8) {
                             e.value = b8;
                         }
                         return b7;
                     }
                 },
             },
         },
         propFix: { for: "htmlFor", class: "className" },
         prop: function (cb, b9, cc) {
             var b8,
                 e,
                 ca,
                 b7 = cb.nodeType;
             if (!cb || b7 === 3 || b7 === 8 || b7 === 2) {
                 return;
             }
             ca = b7 !== 1 || !bM.isXMLDoc(cb);
             if (ca) {
                 b9 = bM.propFix[b9] || b9;
                 e = bM.propHooks[b9];
             }
             if (cc !== aI) {
                 return e && "set" in e && (b8 = e.set(cb, cc, b9)) !== aI ? b8 : (cb[b9] = cc);
             } else {
                 return e && "get" in e && (b8 = e.get(cb, b9)) !== null ? b8 : cb[b9];
             }
         },
         propHooks: {
             tabIndex: {
                 get: function (b7) {
                     var e = bM.find.attr(b7, "tabindex");
                     return e ? parseInt(e, 10) : aH.test(b7.nodeName) || (G.test(b7.nodeName) && b7.href) ? 0 : -1;
                 },
             },
         },
     });
     b3 = {
         set: function (b7, b8, e) {
             if (b8 === false) {
                 bM.removeAttr(b7, e);
             } else {
                 if ((bI && bS) || !at.test(e)) {
                     b7.setAttribute((!bS && bM.propFix[e]) || e, e);
                 } else {
                     b7[bM.camelCase("default-" + e)] = b7[e] = true;
                 }
             }
             return e;
         },
     };
     bM.each(bM.expr.match.bool.source.match(/\w+/g), function (b8, b7) {
         var e = bM.expr.attrHandle[b7] || bM.find.attr;
         bM.expr.attrHandle[b7] =
             (bI && bS) || !at.test(b7)
                 ? function (cc, ca, cd) {
                       var cb = bM.expr.attrHandle[ca],
                           b9 = cd ? aI : (bM.expr.attrHandle[ca] = aI) != e(cc, ca, cd) ? ca.toLowerCase() : null;
                       bM.expr.attrHandle[ca] = cb;
                       return b9;
                   }
                 : function (ca, b9, cb) {
                       return cb ? aI : ca[bM.camelCase("default-" + b9)] ? b9.toLowerCase() : null;
                   };
     });
     if (!bI || !bS) {
         bM.attrHooks.value = {
             set: function (b7, b8, e) {
                 if (bM.nodeName(b7, "input")) {
                     b7.defaultValue = b8;
                 } else {
                     return bb && bb.set(b7, b8, e);
                 }
             },
         };
     }
     if (!bS) {
         bb = {
             set: function (b8, b9, b7) {
                 var e = b8.getAttributeNode(b7);
                 if (!e) {
                     b8.setAttributeNode((e = b8.ownerDocument.createAttribute(b7)));
                 }
                 e.value = b9 += "";
                 return b7 === "value" || b9 === b8.getAttribute(b7) ? b9 : aI;
             },
         };
         bM.expr.attrHandle.id = bM.expr.attrHandle.name = bM.expr.attrHandle.coords = function (b8, b7, b9) {
             var e;
             return b9 ? aI : (e = b8.getAttributeNode(b7)) && e.value !== "" ? e.value : null;
         };
         bM.valHooks.button = {
             get: function (b8, b7) {
                 var e = b8.getAttributeNode(b7);
                 return e && e.specified ? e.value : aI;
             },
             set: bb.set,
         };
         bM.attrHooks.contenteditable = {
             set: function (b7, b8, e) {
                 bb.set(b7, b8 === "" ? false : b8, e);
             },
         };
         bM.each(["width", "height"], function (b7, e) {
             bM.attrHooks[e] = {
                 set: function (b8, b9) {
                     if (b9 === "") {
                         b8.setAttribute(e, "auto");
                         return b9;
                     }
                 },
             };
         });
     }
     if (!bM.support.hrefNormalized) {
         bM.each(["href", "src"], function (b7, e) {
             bM.propHooks[e] = {
                 get: function (b8) {
                     return b8.getAttribute(e, 4);
                 },
             };
         });
     }
     if (!bM.support.style) {
         bM.attrHooks.style = {
             get: function (e) {
                 return e.style.cssText || aI;
             },
             set: function (e, b7) {
                 return (e.style.cssText = b7 + "");
             },
         };
     }
     if (!bM.support.optSelected) {
         bM.propHooks.selected = {
             get: function (b7) {
                 var e = b7.parentNode;
                 if (e) {
                     e.selectedIndex;
                     if (e.parentNode) {
                         e.parentNode.selectedIndex;
                     }
                 }
                 return null;
             },
         };
     }
     bM.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
         bM.propFix[this.toLowerCase()] = this;
     });
     if (!bM.support.enctype) {
         bM.propFix.enctype = "encoding";
     }
     bM.each(["radio", "checkbox"], function () {
         bM.valHooks[this] = {
             set: function (e, b7) {
                 if (bM.isArray(b7)) {
                     return (e.checked = bM.inArray(bM(e).val(), b7) >= 0);
                 }
             },
         };
         if (!bM.support.checkOn) {
             bM.valHooks[this].get = function (e) {
                 return e.getAttribute("value") === null ? "on" : e.value;
             };
         }
     });
     var bK = /^(?:input|select|textarea)$/i,
         a6 = /^key/,
         bQ = /^(?:mouse|contextmenu)|click/,
         bE = /^(?:focusinfocus|focusoutblur)$/,
         bx = /^([^.]*)(?:\.(.+)|)$/;
     function T() {
         return true;
     }
     function Z() {
         return false;
     }
     function am() {
         try {
             return n.activeElement;
         } catch (e) {}
     }
     bM.event = {
         global: {},
         add: function (ca, cf, ck, cc, cb) {
             var cd,
                 cl,
                 cm,
                 b8,
                 ch,
                 ce,
                 cj,
                 b9,
                 ci,
                 e,
                 b7,
                 cg = bM._data(ca);
             if (!cg) {
                 return;
             }
             if (ck.handler) {
                 b8 = ck;
                 ck = b8.handler;
                 cb = b8.selector;
             }
             if (!ck.guid) {
                 ck.guid = bM.guid++;
             }
             if (!(cl = cg.events)) {
                 cl = cg.events = {};
             }
             if (!(ce = cg.handle)) {
                 ce = cg.handle = function (cn) {
                     return typeof bM !== aE && (!cn || bM.event.triggered !== cn.type) ? bM.event.dispatch.apply(ce.elem, arguments) : aI;
                 };
                 ce.elem = ca;
             }
             cf = (cf || "").match(ae) || [""];
             cm = cf.length;
             while (cm--) {
                 cd = bx.exec(cf[cm]) || [];
                 ci = b7 = cd[1];
                 e = (cd[2] || "").split(".").sort();
                 if (!ci) {
                     continue;
                 }
                 ch = bM.event.special[ci] || {};
                 ci = (cb ? ch.delegateType : ch.bindType) || ci;
                 ch = bM.event.special[ci] || {};
                 cj = bM.extend({ type: ci, origType: b7, data: cc, handler: ck, guid: ck.guid, selector: cb, needsContext: cb && bM.expr.match.needsContext.test(cb), namespace: e.join(".") }, b8);
                 if (!(b9 = cl[ci])) {
                     b9 = cl[ci] = [];
                     b9.delegateCount = 0;
                     if (!ch.setup || ch.setup.call(ca, cc, e, ce) === false) {
                         if (ca.addEventListener) {
                             ca.addEventListener(ci, ce, false);
                         } else {
                             if (ca.attachEvent) {
                                 ca.attachEvent("on" + ci, ce);
                             }
                         }
                     }
                 }
                 if (ch.add) {
                     ch.add.call(ca, cj);
                     if (!cj.handler.guid) {
                         cj.handler.guid = ck.guid;
                     }
                 }
                 if (cb) {
                     b9.splice(b9.delegateCount++, 0, cj);
                 } else {
                     b9.push(cj);
                 }
                 bM.event.global[ci] = true;
             }
             ca = null;
         },
         remove: function (b9, cf, cm, ca, ce) {
             var cc,
                 cj,
                 cd,
                 cb,
                 cl,
                 ck,
                 ch,
                 b8,
                 ci,
                 e,
                 b7,
                 cg = bM.hasData(b9) && bM._data(b9);
             if (!cg || !(ck = cg.events)) {
                 return;
             }
             cf = (cf || "").match(ae) || [""];
             cl = cf.length;
             while (cl--) {
                 cd = bx.exec(cf[cl]) || [];
                 ci = b7 = cd[1];
                 e = (cd[2] || "").split(".").sort();
                 if (!ci) {
                     for (ci in ck) {
                         bM.event.remove(b9, ci + cf[cl], cm, ca, true);
                     }
                     continue;
                 }
                 ch = bM.event.special[ci] || {};
                 ci = (ca ? ch.delegateType : ch.bindType) || ci;
                 b8 = ck[ci] || [];
                 cd = cd[2] && new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)");
                 cb = cc = b8.length;
                 while (cc--) {
                     cj = b8[cc];
                     if ((ce || b7 === cj.origType) && (!cm || cm.guid === cj.guid) && (!cd || cd.test(cj.namespace)) && (!ca || ca === cj.selector || (ca === "**" && cj.selector))) {
                         b8.splice(cc, 1);
                         if (cj.selector) {
                             b8.delegateCount--;
                         }
                         if (ch.remove) {
                             ch.remove.call(b9, cj);
                         }
                     }
                 }
                 if (cb && !b8.length) {
                     if (!ch.teardown || ch.teardown.call(b9, e, cg.handle) === false) {
                         bM.removeEvent(b9, ci, cg.handle);
                     }
                     delete ck[ci];
                 }
             }
             if (bM.isEmptyObject(ck)) {
                 delete cg.handle;
                 bM._removeData(b9, "events");
             }
         },
         trigger: function (b7, ce, ca, cl) {
             var cf,
                 b9,
                 cj,
                 ck,
                 ch,
                 cd,
                 cc,
                 cb = [ca || n],
                 ci = X.call(b7, "type") ? b7.type : b7,
                 b8 = X.call(b7, "namespace") ? b7.namespace.split(".") : [];
             cj = cd = ca = ca || n;
             if (ca.nodeType === 3 || ca.nodeType === 8) {
                 return;
             }
             if (bE.test(ci + bM.event.triggered)) {
                 return;
             }
             if (ci.indexOf(".") >= 0) {
                 b8 = ci.split(".");
                 ci = b8.shift();
                 b8.sort();
             }
             b9 = ci.indexOf(":") < 0 && "on" + ci;
             b7 = b7[bM.expando] ? b7 : new bM.Event(ci, typeof b7 === "object" && b7);
             b7.isTrigger = cl ? 2 : 3;
             b7.namespace = b8.join(".");
             b7.namespace_re = b7.namespace ? new RegExp("(^|\\.)" + b8.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
             b7.result = aI;
             if (!b7.target) {
                 b7.target = ca;
             }
             ce = ce == null ? [b7] : bM.makeArray(ce, [b7]);
             ch = bM.event.special[ci] || {};
             if (!cl && ch.trigger && ch.trigger.apply(ca, ce) === false) {
                 return;
             }
             if (!cl && !ch.noBubble && !bM.isWindow(ca)) {
                 ck = ch.delegateType || ci;
                 if (!bE.test(ck + ci)) {
                     cj = cj.parentNode;
                 }
                 for (; cj; cj = cj.parentNode) {
                     cb.push(cj);
                     cd = cj;
                 }
                 if (cd === (ca.ownerDocument || n)) {
                     cb.push(cd.defaultView || cd.parentWindow || a5);
                 }
             }
             cc = 0;
             while ((cj = cb[cc++]) && !b7.isPropagationStopped()) {
                 b7.type = cc > 1 ? ck : ch.bindType || ci;
                 cf = (bM._data(cj, "events") || {})[b7.type] && bM._data(cj, "handle");
                 if (cf) {
                     cf.apply(cj, ce);
                 }
                 cf = b9 && cj[b9];
                 if (cf && bM.acceptData(cj) && cf.apply && cf.apply(cj, ce) === false) {
                     b7.preventDefault();
                 }
             }
             b7.type = ci;
             if (!cl && !b7.isDefaultPrevented()) {
                 if ((!ch._default || ch._default.apply(cb.pop(), ce) === false) && bM.acceptData(ca)) {
                     if (b9 && ca[ci] && !bM.isWindow(ca)) {
                         cd = ca[b9];
                         if (cd) {
                             ca[b9] = null;
                         }
                         bM.event.triggered = ci;
                         try {
                             ca[ci]();
                         } catch (cg) {}
                         bM.event.triggered = aI;
                         if (cd) {
                             ca[b9] = cd;
                         }
                     }
                 }
             }
             return b7.result;
         },
         dispatch: function (e) {
             e = bM.event.fix(e);
             var ca,
                 cb,
                 cf,
                 b7,
                 b9,
                 ce = [],
                 cd = a7.call(arguments),
                 b8 = (bM._data(this, "events") || {})[e.type] || [],
                 cc = bM.event.special[e.type] || {};
             cd[0] = e;
             e.delegateTarget = this;
             if (cc.preDispatch && cc.preDispatch.call(this, e) === false) {
                 return;
             }
             ce = bM.event.handlers.call(this, e, b8);
             ca = 0;
             while ((b7 = ce[ca++]) && !e.isPropagationStopped()) {
                 e.currentTarget = b7.elem;
                 b9 = 0;
                 while ((cf = b7.handlers[b9++]) && !e.isImmediatePropagationStopped()) {
                     if (!e.namespace_re || e.namespace_re.test(cf.namespace)) {
                         e.handleObj = cf;
                         e.data = cf.data;
                         cb = ((bM.event.special[cf.origType] || {}).handle || cf.handler).apply(b7.elem, cd);
                         if (cb !== aI) {
                             if ((e.result = cb) === false) {
                                 e.preventDefault();
                                 e.stopPropagation();
                             }
                         }
                     }
                 }
             }
             if (cc.postDispatch) {
                 cc.postDispatch.call(this, e);
             }
             return e.result;
         },
         handlers: function (e, b8) {
             var b7,
                 cd,
                 cb,
                 ca,
                 cc = [],
                 b9 = b8.delegateCount,
                 ce = e.target;
             if (b9 && ce.nodeType && (!e.button || e.type !== "click")) {
                 for (; ce != this; ce = ce.parentNode || this) {
                     if (ce.nodeType === 1 && (ce.disabled !== true || e.type !== "click")) {
                         cb = [];
                         for (ca = 0; ca < b9; ca++) {
                             cd = b8[ca];
                             b7 = cd.selector + " ";
                             if (cb[b7] === aI) {
                                 cb[b7] = cd.needsContext ? bM(b7, this).index(ce) >= 0 : bM.find(b7, this, null, [ce]).length;
                             }
                             if (cb[b7]) {
                                 cb.push(cd);
                             }
                         }
                         if (cb.length) {
                             cc.push({ elem: ce, handlers: cb });
                         }
                     }
                 }
             }
             if (b9 < b8.length) {
                 cc.push({ elem: this, handlers: b8.slice(b9) });
             }
             return cc;
         },
         fix: function (b9) {
             if (b9[bM.expando]) {
                 return b9;
             }
             var b7,
                 cc,
                 cb,
                 b8 = b9.type,
                 e = b9,
                 ca = this.fixHooks[b8];
             if (!ca) {
                 this.fixHooks[b8] = ca = bQ.test(b8) ? this.mouseHooks : a6.test(b8) ? this.keyHooks : {};
             }
             cb = ca.props ? this.props.concat(ca.props) : this.props;
             b9 = new bM.Event(e);
             b7 = cb.length;
             while (b7--) {
                 cc = cb[b7];
                 b9[cc] = e[cc];
             }
             if (!b9.target) {
                 b9.target = e.srcElement || n;
             }
             if (b9.target.nodeType === 3) {
                 b9.target = b9.target.parentNode;
             }
             b9.metaKey = !!b9.metaKey;
             return ca.filter ? ca.filter(b9, e) : b9;
         },
         props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
         fixHooks: {},
         keyHooks: {
             props: "char charCode key keyCode".split(" "),
             filter: function (b7, e) {
                 if (b7.which == null) {
                     b7.which = e.charCode != null ? e.charCode : e.keyCode;
                 }
                 return b7;
             },
         },
         mouseHooks: {
             props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
             filter: function (b9, b8) {
                 var e,
                     ca,
                     cb,
                     b7 = b8.button,
                     cc = b8.fromElement;
                 if (b9.pageX == null && b8.clientX != null) {
                     ca = b9.target.ownerDocument || n;
                     cb = ca.documentElement;
                     e = ca.body;
                     b9.pageX = b8.clientX + ((cb && cb.scrollLeft) || (e && e.scrollLeft) || 0) - ((cb && cb.clientLeft) || (e && e.clientLeft) || 0);
                     b9.pageY = b8.clientY + ((cb && cb.scrollTop) || (e && e.scrollTop) || 0) - ((cb && cb.clientTop) || (e && e.clientTop) || 0);
                 }
                 if (!b9.relatedTarget && cc) {
                     b9.relatedTarget = cc === b9.target ? b8.toElement : cc;
                 }
                 if (!b9.which && b7 !== aI) {
                     b9.which = b7 & 1 ? 1 : b7 & 2 ? 3 : b7 & 4 ? 2 : 0;
                 }
                 return b9;
             },
         },
         special: {
             load: { noBubble: true },
             focus: {
                 trigger: function () {
                     if (this !== am() && this.focus) {
                         try {
                             this.focus();
                             return false;
                         } catch (b7) {}
                     }
                 },
                 delegateType: "focusin",
             },
             blur: {
                 trigger: function () {
                     if (this === am() && this.blur) {
                         this.blur();
                         return false;
                     }
                 },
                 delegateType: "focusout",
             },
             click: {
                 trigger: function () {
                     if (bM.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                         this.click();
                         return false;
                     }
                 },
                 _default: function (e) {
                     return bM.nodeName(e.target, "a");
                 },
             },
             beforeunload: {
                 postDispatch: function (e) {
                     if (e.result !== aI) {
                         e.originalEvent.returnValue = e.result;
                     }
                 },
             },
         },
         simulate: function (b8, ca, b9, b7) {
             var cb = bM.extend(new bM.Event(), b9, { type: b8, isSimulated: true, originalEvent: {} });
             if (b7) {
                 bM.event.trigger(cb, null, ca);
             } else {
                 bM.event.dispatch.call(ca, cb);
             }
             if (cb.isDefaultPrevented()) {
                 b9.preventDefault();
             }
         },
     };
     bM.removeEvent = n.removeEventListener
         ? function (b7, e, b8) {
               if (b7.removeEventListener) {
                   b7.removeEventListener(e, b8, false);
               }
           }
         : function (b8, b7, b9) {
               var e = "on" + b7;
               if (b8.detachEvent) {
                   if (typeof b8[e] === aE) {
                       b8[e] = null;
                   }
                   b8.detachEvent(e, b9);
               }
           };
     bM.Event = function (b7, e) {
         if (!(this instanceof bM.Event)) {
             return new bM.Event(b7, e);
         }
         if (b7 && b7.type) {
             this.originalEvent = b7;
             this.type = b7.type;
             this.isDefaultPrevented = b7.defaultPrevented || b7.returnValue === false || (b7.getPreventDefault && b7.getPreventDefault()) ? T : Z;
         } else {
             this.type = b7;
         }
         if (e) {
             bM.extend(this, e);
         }
         this.timeStamp = (b7 && b7.timeStamp) || bM.now();
         this[bM.expando] = true;
     };
     bM.Event.prototype = {
         isDefaultPrevented: Z,
         isPropagationStopped: Z,
         isImmediatePropagationStopped: Z,
         preventDefault: function () {
             var b7 = this.originalEvent;
             this.isDefaultPrevented = T;
             if (!b7) {
                 return;
             }
             if (b7.preventDefault) {
                 b7.preventDefault();
             } else {
                 b7.returnValue = false;
             }
         },
         stopPropagation: function () {
             var b7 = this.originalEvent;
             this.isPropagationStopped = T;
             if (!b7) {
                 return;
             }
             if (b7.stopPropagation) {
                 b7.stopPropagation();
             }
             b7.cancelBubble = true;
         },
         stopImmediatePropagation: function () {
             this.isImmediatePropagationStopped = T;
             this.stopPropagation();
         },
     };
     bM.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (b7, e) {
         bM.event.special[b7] = {
             delegateType: e,
             bindType: e,
             handle: function (ca) {
                 var b8,
                     cc = this,
                     cb = ca.relatedTarget,
                     b9 = ca.handleObj;
                 if (!cb || (cb !== cc && !bM.contains(cc, cb))) {
                     ca.type = b9.origType;
                     b8 = b9.handler.apply(this, arguments);
                     ca.type = e;
                 }
                 return b8;
             },
         };
     });
     if (!bM.support.submitBubbles) {
         bM.event.special.submit = {
             setup: function () {
                 if (bM.nodeName(this, "form")) {
                     return false;
                 }
                 bM.event.add(this, "click._submit keypress._submit", function (b9) {
                     var b8 = b9.target,
                         b7 = bM.nodeName(b8, "input") || bM.nodeName(b8, "button") ? b8.form : aI;
                     if (b7 && !bM._data(b7, "submitBubbles")) {
                         bM.event.add(b7, "submit._submit", function (e) {
                             e._submit_bubble = true;
                         });
                         bM._data(b7, "submitBubbles", true);
                     }
                 });
             },
             postDispatch: function (e) {
                 if (e._submit_bubble) {
                     delete e._submit_bubble;
                     if (this.parentNode && !e.isTrigger) {
                         bM.event.simulate("submit", this.parentNode, e, true);
                     }
                 }
             },
             teardown: function () {
                 if (bM.nodeName(this, "form")) {
                     return false;
                 }
                 bM.event.remove(this, "._submit");
             },
         };
     }
     if (!bM.support.changeBubbles) {
         bM.event.special.change = {
             setup: function () {
                 if (bK.test(this.nodeName)) {
                     if (this.type === "checkbox" || this.type === "radio") {
                         bM.event.add(this, "propertychange._change", function (e) {
                             if (e.originalEvent.propertyName === "checked") {
                                 this._just_changed = true;
                             }
                         });
                         bM.event.add(this, "click._change", function (e) {
                             if (this._just_changed && !e.isTrigger) {
                                 this._just_changed = false;
                             }
                             bM.event.simulate("change", this, e, true);
                         });
                     }
                     return false;
                 }
                 bM.event.add(this, "beforeactivate._change", function (b8) {
                     var b7 = b8.target;
                     if (bK.test(b7.nodeName) && !bM._data(b7, "changeBubbles")) {
                         bM.event.add(b7, "change._change", function (e) {
                             if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                 bM.event.simulate("change", this.parentNode, e, true);
                             }
                         });
                         bM._data(b7, "changeBubbles", true);
                     }
                 });
             },
             handle: function (b7) {
                 var e = b7.target;
                 if (this !== e || b7.isSimulated || b7.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                     return b7.handleObj.handler.apply(this, arguments);
                 }
             },
             teardown: function () {
                 bM.event.remove(this, "._change");
                 return !bK.test(this.nodeName);
             },
         };
     }
     if (!bM.support.focusinBubbles) {
         bM.each({ focus: "focusin", blur: "focusout" }, function (b9, e) {
             var b7 = 0,
                 b8 = function (ca) {
                     bM.event.simulate(e, ca.target, bM.event.fix(ca), true);
                 };
             bM.event.special[e] = {
                 setup: function () {
                     if (b7++ === 0) {
                         n.addEventListener(b9, b8, true);
                     }
                 },
                 teardown: function () {
                     if (--b7 === 0) {
                         n.removeEventListener(b9, b8, true);
                     }
                 },
             };
         });
     }
     bM.fn.extend({
         on: function (b8, e, cb, ca, b7) {
             var b9, cc;
             if (typeof b8 === "object") {
                 if (typeof e !== "string") {
                     cb = cb || e;
                     e = aI;
                 }
                 for (b9 in b8) {
                     this.on(b9, e, cb, b8[b9], b7);
                 }
                 return this;
             }
             if (cb == null && ca == null) {
                 ca = e;
                 cb = e = aI;
             } else {
                 if (ca == null) {
                     if (typeof e === "string") {
                         ca = cb;
                         cb = aI;
                     } else {
                         ca = cb;
                         cb = e;
                         e = aI;
                     }
                 }
             }
             if (ca === false) {
                 ca = Z;
             } else {
                 if (!ca) {
                     return this;
                 }
             }
             if (b7 === 1) {
                 cc = ca;
                 ca = function (cd) {
                     bM().off(cd);
                     return cc.apply(this, arguments);
                 };
                 ca.guid = cc.guid || (cc.guid = bM.guid++);
             }
             return this.each(function () {
                 bM.event.add(this, b8, ca, cb, e);
             });
         },
         one: function (b7, e, b9, b8) {
             return this.on(b7, e, b9, b8, 1);
         },
         off: function (b8, e, ca) {
             var b7, b9;
             if (b8 && b8.preventDefault && b8.handleObj) {
                 b7 = b8.handleObj;
                 bM(b8.delegateTarget).off(b7.namespace ? b7.origType + "." + b7.namespace : b7.origType, b7.selector, b7.handler);
                 return this;
             }
             if (typeof b8 === "object") {
                 for (b9 in b8) {
                     this.off(b9, e, b8[b9]);
                 }
                 return this;
             }
             if (e === false || typeof e === "function") {
                 ca = e;
                 e = aI;
             }
             if (ca === false) {
                 ca = Z;
             }
             return this.each(function () {
                 bM.event.remove(this, b8, ca, e);
             });
         },
         trigger: function (e, b7) {
             return this.each(function () {
                 bM.event.trigger(e, b7, this);
             });
         },
         triggerHandler: function (e, b8) {
             var b7 = this[0];
             if (b7) {
                 return bM.event.trigger(e, b8, b7, true);
             }
         },
     });
     var ap = /^.[^:#\[\.,]*$/,
         bw = /^(?:parents|prev(?:Until|All))/,
         B = bM.expr.match.needsContext,
         bA = { children: true, contents: true, next: true, prev: true };
     bM.fn.extend({
         find: function (b7) {
             var ca,
                 b9 = [],
                 b8 = this,
                 e = b8.length;
             if (typeof b7 !== "string") {
                 return this.pushStack(
                     bM(b7).filter(function () {
                         for (ca = 0; ca < e; ca++) {
                             if (bM.contains(b8[ca], this)) {
                                 return true;
                             }
                         }
                     })
                 );
             }
             for (ca = 0; ca < e; ca++) {
                 bM.find(b7, b8[ca], b9);
             }
             b9 = this.pushStack(e > 1 ? bM.unique(b9) : b9);
             b9.selector = this.selector ? this.selector + " " + b7 : b7;
             return b9;
         },
         has: function (b9) {
             var b8,
                 b7 = bM(b9, this),
                 e = b7.length;
             return this.filter(function () {
                 for (b8 = 0; b8 < e; b8++) {
                     if (bM.contains(this, b7[b8])) {
                         return true;
                     }
                 }
             });
         },
         not: function (e) {
             return this.pushStack(aQ(this, e || [], true));
         },
         filter: function (e) {
             return this.pushStack(aQ(this, e || [], false));
         },
         is: function (e) {
             return !!aQ(this, typeof e === "string" && B.test(e) ? bM(e) : e || [], false).length;
         },
         closest: function (ca, b9) {
             var cb,
                 b8 = 0,
                 e = this.length,
                 b7 = [],
                 cc = B.test(ca) || typeof ca !== "string" ? bM(ca, b9 || this.context) : 0;
             for (; b8 < e; b8++) {
                 for (cb = this[b8]; cb && cb !== b9; cb = cb.parentNode) {
                     if (cb.nodeType < 11 && (cc ? cc.index(cb) > -1 : cb.nodeType === 1 && bM.find.matchesSelector(cb, ca))) {
                         cb = b7.push(cb);
                         break;
                     }
                 }
             }
             return this.pushStack(b7.length > 1 ? bM.unique(b7) : b7);
         },
         index: function (e) {
             if (!e) {
                 return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
             }
             if (typeof e === "string") {
                 return bM.inArray(this[0], bM(e));
             }
             return bM.inArray(e.jquery ? e[0] : e, this);
         },
         add: function (e, b7) {
             var b9 = typeof e === "string" ? bM(e, b7) : bM.makeArray(e && e.nodeType ? [e] : e),
                 b8 = bM.merge(this.get(), b9);
             return this.pushStack(bM.unique(b8));
         },
         addBack: function (e) {
             return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
         },
     });
     function aZ(b7, e) {
         do {
             b7 = b7[e];
         } while (b7 && b7.nodeType !== 1);
         return b7;
     }
     bM.each(
         {
             parent: function (b7) {
                 var e = b7.parentNode;
                 return e && e.nodeType !== 11 ? e : null;
             },
             parents: function (e) {
                 return bM.dir(e, "parentNode");
             },
             parentsUntil: function (b7, e, b8) {
                 return bM.dir(b7, "parentNode", b8);
             },
             next: function (e) {
                 return aZ(e, "nextSibling");
             },
             prev: function (e) {
                 return aZ(e, "previousSibling");
             },
             nextAll: function (e) {
                 return bM.dir(e, "nextSibling");
             },
             prevAll: function (e) {
                 return bM.dir(e, "previousSibling");
             },
             nextUntil: function (b7, e, b8) {
                 return bM.dir(b7, "nextSibling", b8);
             },
             prevUntil: function (b7, e, b8) {
                 return bM.dir(b7, "previousSibling", b8);
             },
             siblings: function (e) {
                 return bM.sibling((e.parentNode || {}).firstChild, e);
             },
             children: function (e) {
                 return bM.sibling(e.firstChild);
             },
             contents: function (e) {
                 return bM.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bM.merge([], e.childNodes);
             },
         },
         function (e, b7) {
             bM.fn[e] = function (ca, b8) {
                 var b9 = bM.map(this, b7, ca);
                 if (e.slice(-5) !== "Until") {
                     b8 = ca;
                 }
                 if (b8 && typeof b8 === "string") {
                     b9 = bM.filter(b8, b9);
                 }
                 if (this.length > 1) {
                     if (!bA[e]) {
                         b9 = bM.unique(b9);
                     }
                     if (bw.test(e)) {
                         b9 = b9.reverse();
                     }
                 }
                 return this.pushStack(b9);
             };
         }
     );
     bM.extend({
         filter: function (b9, e, b8) {
             var b7 = e[0];
             if (b8) {
                 b9 = ":not(" + b9 + ")";
             }
             return e.length === 1 && b7.nodeType === 1
                 ? bM.find.matchesSelector(b7, b9)
                     ? [b7]
                     : []
                 : bM.find.matches(
                       b9,
                       bM.grep(e, function (ca) {
                           return ca.nodeType === 1;
                       })
                   );
         },
         dir: function (b8, b7, ca) {
             var e = [],
                 b9 = b8[b7];
             while (b9 && b9.nodeType !== 9 && (ca === aI || b9.nodeType !== 1 || !bM(b9).is(ca))) {
                 if (b9.nodeType === 1) {
                     e.push(b9);
                 }
                 b9 = b9[b7];
             }
             return e;
         },
         sibling: function (b8, b7) {
             var e = [];
             for (; b8; b8 = b8.nextSibling) {
                 if (b8.nodeType === 1 && b8 !== b7) {
                     e.push(b8);
                 }
             }
             return e;
         },
     });
     function aQ(b8, e, b7) {
         if (bM.isFunction(e)) {
             return bM.grep(b8, function (ca, b9) {
                 return !!e.call(ca, b9, ca) !== b7;
             });
         }
         if (e.nodeType) {
             return bM.grep(b8, function (b9) {
                 return (b9 === e) !== b7;
             });
         }
         if (typeof e === "string") {
             if (ap.test(e)) {
                 return bM.filter(e, b8, b7);
             }
             e = bM.filter(e, b8);
         }
         return bM.grep(b8, function (b9) {
             return bM.inArray(b9, e) >= 0 !== b7;
         });
     }
     function D(e) {
         var b8 = d.split("|"),
             b7 = e.createDocumentFragment();
         if (b7.createElement) {
             while (b8.length) {
                 b7.createElement(b8.pop());
             }
         }
         return b7;
     }
     var d = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
         aC = / jQuery\d+="(?:null|\d+)"/g,
         M = new RegExp("<(?:" + d + ")[\\s/>]", "i"),
         b6 = /^\s+/,
         aF = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
         p = /<([\w:]+)/,
         b1 = /<tbody/i,
         L = /<|&#?\w+;/,
         an = /<(?:script|style|link)/i,
         t = /^(?:checkbox|radio)$/i,
         bX = /checked\s*(?:[^=]|=\s*.checked.)/i,
         bC = /^$|\/(?:java|ecma)script/i,
         au = /^true\/(.*)/,
         aM = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
         V = {
             option: [1, "<select multiple='multiple'>", "</select>"],
             legend: [1, "<fieldset>", "</fieldset>"],
             area: [1, "<map>", "</map>"],
             param: [1, "<object>", "</object>"],
             thead: [1, "<table>", "</table>"],
             tr: [2, "<table><tbody>", "</tbody></table>"],
             col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
             td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
             _default: bM.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
         },
         aU = D(n),
         l = aU.appendChild(n.createElement("div"));
     V.optgroup = V.option;
     V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
     V.th = V.td;
     bM.fn.extend({
         text: function (e) {
             return bM.access(
                 this,
                 function (b7) {
                     return b7 === aI ? bM.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || n).createTextNode(b7));
                 },
                 null,
                 e,
                 arguments.length
             );
         },
         append: function () {
             return this.domManip(arguments, function (e) {
                 if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                     var b7 = a3(this, e);
                     b7.appendChild(e);
                 }
             });
         },
         prepend: function () {
             return this.domManip(arguments, function (e) {
                 if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                     var b7 = a3(this, e);
                     b7.insertBefore(e, b7.firstChild);
                 }
             });
         },
         before: function () {
             return this.domManip(arguments, function (e) {
                 if (this.parentNode) {
                     this.parentNode.insertBefore(e, this);
                 }
             });
         },
         after: function () {
             return this.domManip(arguments, function (e) {
                 if (this.parentNode) {
                     this.parentNode.insertBefore(e, this.nextSibling);
                 }
             });
         },
         remove: function (e, ca) {
             var b9,
                 b7 = e ? bM.filter(e, this) : this,
                 b8 = 0;
             for (; (b9 = b7[b8]) != null; b8++) {
                 if (!ca && b9.nodeType === 1) {
                     bM.cleanData(m(b9));
                 }
                 if (b9.parentNode) {
                     if (ca && bM.contains(b9.ownerDocument, b9)) {
                         bv(m(b9, "script"));
                     }
                     b9.parentNode.removeChild(b9);
                 }
             }
             return this;
         },
         empty: function () {
             var b7,
                 e = 0;
             for (; (b7 = this[e]) != null; e++) {
                 if (b7.nodeType === 1) {
                     bM.cleanData(m(b7, false));
                 }
                 while (b7.firstChild) {
                     b7.removeChild(b7.firstChild);
                 }
                 if (b7.options && bM.nodeName(b7, "select")) {
                     b7.options.length = 0;
                 }
             }
             return this;
         },
         clone: function (b7, e) {
             b7 = b7 == null ? false : b7;
             e = e == null ? b7 : e;
             return this.map(function () {
                 return bM.clone(this, b7, e);
             });
         },
         html: function (e) {
             return bM.access(
                 this,
                 function (ca) {
                     var b9 = this[0] || {},
                         b8 = 0,
                         b7 = this.length;
                     if (ca === aI) {
                         return b9.nodeType === 1 ? b9.innerHTML.replace(aC, "") : aI;
                     }
                     if (typeof ca === "string" && !an.test(ca) && (bM.support.htmlSerialize || !M.test(ca)) && (bM.support.leadingWhitespace || !b6.test(ca)) && !V[(p.exec(ca) || ["", ""])[1].toLowerCase()]) {
                         ca = ca.replace(aF, "<$1></$2>");
                         try {
                             for (; b8 < b7; b8++) {
                                 b9 = this[b8] || {};
                                 if (b9.nodeType === 1) {
                                     bM.cleanData(m(b9, false));
                                     b9.innerHTML = ca;
                                 }
                             }
                             b9 = 0;
                         } catch (cb) {}
                     }
                     if (b9) {
                         this.empty().append(ca);
                     }
                 },
                 null,
                 e,
                 arguments.length
             );
         },
         replaceWith: function () {
             var e = bM.map(this, function (b8) {
                     return [b8.nextSibling, b8.parentNode];
                 }),
                 b7 = 0;
             this.domManip(
                 arguments,
                 function (ca) {
                     var b9 = e[b7++],
                         b8 = e[b7++];
                     if (b8) {
                         if (b9 && b9.parentNode !== b8) {
                             b9 = this.nextSibling;
                         }
                         bM(this).remove();
                         b8.insertBefore(ca, b9);
                     }
                 },
                 true
             );
             return b7 ? this : this.remove();
         },
         detach: function (e) {
             return this.remove(e, true);
         },
         domManip: function (cf, ck, b8) {
             cf = aK.apply([], cf);
             var cd,
                 b9,
                 e,
                 cb,
                 ci,
                 ce,
                 cc = 0,
                 ca = this.length,
                 ch = this,
                 cj = ca - 1,
                 cg = cf[0],
                 b7 = bM.isFunction(cg);
             if (b7 || !(ca <= 1 || typeof cg !== "string" || bM.support.checkClone || !bX.test(cg))) {
                 return this.each(function (cm) {
                     var cl = ch.eq(cm);
                     if (b7) {
                         cf[0] = cg.call(this, cm, cl.html());
                     }
                     cl.domManip(cf, ck, b8);
                 });
             }
             if (ca) {
                 ce = bM.buildFragment(cf, this[0].ownerDocument, false, !b8 && this);
                 cd = ce.firstChild;
                 if (ce.childNodes.length === 1) {
                     ce = cd;
                 }
                 if (cd) {
                     cb = bM.map(m(ce, "script"), x);
                     e = cb.length;
                     for (; cc < ca; cc++) {
                         b9 = ce;
                         if (cc !== cj) {
                             b9 = bM.clone(b9, true, true);
                             if (e) {
                                 bM.merge(cb, m(b9, "script"));
                             }
                         }
                         ck.call(this[cc], b9, cc);
                     }
                     if (e) {
                         ci = cb[cb.length - 1].ownerDocument;
                         bM.map(cb, bg);
                         for (cc = 0; cc < e; cc++) {
                             b9 = cb[cc];
                             if (bC.test(b9.type || "") && !bM._data(b9, "globalEval") && bM.contains(ci, b9)) {
                                 if (b9.src) {
                                     bM._evalUrl(b9.src);
                                 } else {
                                     bM.globalEval((b9.text || b9.textContent || b9.innerHTML || "").replace(aM, ""));
                                 }
                             }
                         }
                     }
                     ce = cd = null;
                 }
             }
             return this;
         },
     });
     function a3(b7, e) {
         return bM.nodeName(b7, "table") && bM.nodeName(e.nodeType === 1 ? e : e.firstChild, "tr") ? b7.getElementsByTagName("tbody")[0] || b7.appendChild(b7.ownerDocument.createElement("tbody")) : b7;
     }
     function x(e) {
         e.type = (bM.find.attr(e, "type") !== null) + "/" + e.type;
         return e;
     }
     function bg(b7) {
         var e = au.exec(b7.type);
         if (e) {
             b7.type = e[1];
         } else {
             b7.removeAttribute("type");
         }
         return b7;
     }
     function bv(e, b8) {
         var b9,
             b7 = 0;
         for (; (b9 = e[b7]) != null; b7++) {
             bM._data(b9, "globalEval", !b8 || bM._data(b8[b7], "globalEval"));
         }
     }
     function av(cd, b7) {
         if (b7.nodeType !== 1 || !bM.hasData(cd)) {
             return;
         }
         var ca,
             b9,
             e,
             cc = bM._data(cd),
             cb = bM._data(b7, cc),
             b8 = cc.events;
         if (b8) {
             delete cb.handle;
             cb.events = {};
             for (ca in b8) {
                 for (b9 = 0, e = b8[ca].length; b9 < e; b9++) {
                     bM.event.add(b7, ca, b8[ca][b9]);
                 }
             }
         }
         if (cb.data) {
             cb.data = bM.extend({}, cb.data);
         }
     }
     function S(ca, b7) {
         var cb, b9, b8;
         if (b7.nodeType !== 1) {
             return;
         }
         cb = b7.nodeName.toLowerCase();
         if (!bM.support.noCloneEvent && b7[bM.expando]) {
             b8 = bM._data(b7);
             for (b9 in b8.events) {
                 bM.removeEvent(b7, b9, b8.handle);
             }
             b7.removeAttribute(bM.expando);
         }
         if (cb === "script" && b7.text !== ca.text) {
             x(b7).text = ca.text;
             bg(b7);
         } else {
             if (cb === "object") {
                 if (b7.parentNode) {
                     b7.outerHTML = ca.outerHTML;
                 }
                 if (bM.support.html5Clone && ca.innerHTML && !bM.trim(b7.innerHTML)) {
                     b7.innerHTML = ca.innerHTML;
                 }
             } else {
                 if (cb === "input" && t.test(ca.type)) {
                     b7.defaultChecked = b7.checked = ca.checked;
                     if (b7.value !== ca.value) {
                         b7.value = ca.value;
                     }
                 } else {
                     if (cb === "option") {
                         b7.defaultSelected = b7.selected = ca.defaultSelected;
                     } else {
                         if (cb === "input" || cb === "textarea") {
                             b7.defaultValue = ca.defaultValue;
                         }
                     }
                 }
             }
         }
     }
     bM.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, b7) {
         bM.fn[e] = function (b8) {
             var b9,
                 cb = 0,
                 ca = [],
                 cd = bM(b8),
                 cc = cd.length - 1;
             for (; cb <= cc; cb++) {
                 b9 = cb === cc ? this : this.clone(true);
                 bM(cd[cb])[b7](b9);
                 aq.apply(ca, b9.get());
             }
             return this.pushStack(ca);
         };
     });
     function m(b9, e) {
         var b7,
             ca,
             b8 = 0,
             cb = typeof b9.getElementsByTagName !== aE ? b9.getElementsByTagName(e || "*") : typeof b9.querySelectorAll !== aE ? b9.querySelectorAll(e || "*") : aI;
         if (!cb) {
             for (cb = [], b7 = b9.childNodes || b9; (ca = b7[b8]) != null; b8++) {
                 if (!e || bM.nodeName(ca, e)) {
                     cb.push(ca);
                 } else {
                     bM.merge(cb, m(ca, e));
                 }
             }
         }
         return e === aI || (e && bM.nodeName(b9, e)) ? bM.merge([b9], cb) : cb;
     }
     function bY(e) {
         if (t.test(e.type)) {
             e.defaultChecked = e.checked;
         }
     }
     bM.extend({
         clone: function (b7, b9, e) {
             var cb,
                 b8,
                 ce,
                 ca,
                 cc,
                 cd = bM.contains(b7.ownerDocument, b7);
             if (bM.support.html5Clone || bM.isXMLDoc(b7) || !M.test("<" + b7.nodeName + ">")) {
                 ce = b7.cloneNode(true);
             } else {
                 l.innerHTML = b7.outerHTML;
                 l.removeChild((ce = l.firstChild));
             }
             if ((!bM.support.noCloneEvent || !bM.support.noCloneChecked) && (b7.nodeType === 1 || b7.nodeType === 11) && !bM.isXMLDoc(b7)) {
                 cb = m(ce);
                 cc = m(b7);
                 for (ca = 0; (b8 = cc[ca]) != null; ++ca) {
                     if (cb[ca]) {
                         S(b8, cb[ca]);
                     }
                 }
             }
             if (b9) {
                 if (e) {
                     cc = cc || m(b7);
                     cb = cb || m(ce);
                     for (ca = 0; (b8 = cc[ca]) != null; ca++) {
                         av(b8, cb[ca]);
                     }
                 } else {
                     av(b7, ce);
                 }
             }
             cb = m(ce, "script");
             if (cb.length > 0) {
                 bv(cb, !cd && m(b7, "script"));
             }
             cb = cc = b8 = null;
             return ce;
         },
         buildFragment: function (b7, b9, ce, cj) {
             var cf,
                 cb,
                 cd,
                 ci,
                 ck,
                 ch,
                 b8,
                 cc = b7.length,
                 ca = D(b9),
                 e = [],
                 cg = 0;
             for (; cg < cc; cg++) {
                 cb = b7[cg];
                 if (cb || cb === 0) {
                     if (bM.type(cb) === "object") {
                         bM.merge(e, cb.nodeType ? [cb] : cb);
                     } else {
                         if (!L.test(cb)) {
                             e.push(b9.createTextNode(cb));
                         } else {
                             ci = ci || ca.appendChild(b9.createElement("div"));
                             ck = (p.exec(cb) || ["", ""])[1].toLowerCase();
                             b8 = V[ck] || V._default;
                             ci.innerHTML = b8[1] + cb.replace(aF, "<$1></$2>") + b8[2];
                             cf = b8[0];
                             while (cf--) {
                                 ci = ci.lastChild;
                             }
                             if (!bM.support.leadingWhitespace && b6.test(cb)) {
                                 e.push(b9.createTextNode(b6.exec(cb)[0]));
                             }
                             if (!bM.support.tbody) {
                                 cb = ck === "table" && !b1.test(cb) ? ci.firstChild : b8[1] === "<table>" && !b1.test(cb) ? ci : 0;
                                 cf = cb && cb.childNodes.length;
                                 while (cf--) {
                                     if (bM.nodeName((ch = cb.childNodes[cf]), "tbody") && !ch.childNodes.length) {
                                         cb.removeChild(ch);
                                     }
                                 }
                             }
                             bM.merge(e, ci.childNodes);
                             ci.textContent = "";
                             while (ci.firstChild) {
                                 ci.removeChild(ci.firstChild);
                             }
                             ci = ca.lastChild;
                         }
                     }
                 }
             }
             if (ci) {
                 ca.removeChild(ci);
             }
             if (!bM.support.appendChecked) {
                 bM.grep(m(e, "input"), bY);
             }
             cg = 0;
             while ((cb = e[cg++])) {
                 if (cj && bM.inArray(cb, cj) !== -1) {
                     continue;
                 }
                 cd = bM.contains(cb.ownerDocument, cb);
                 ci = m(ca.appendChild(cb), "script");
                 if (cd) {
                     bv(ci);
                 }
                 if (ce) {
                     cf = 0;
                     while ((cb = ci[cf++])) {
                         if (bC.test(cb.type || "")) {
                             ce.push(cb);
                         }
                     }
                 }
             }
             ci = null;
             return ca;
         },
         cleanData: function (b7, cf) {
             var b9,
                 ce,
                 b8,
                 ca,
                 cb = 0,
                 cg = bM.expando,
                 e = bM.cache,
                 cc = bM.support.deleteExpando,
                 cd = bM.event.special;
             for (; (b9 = b7[cb]) != null; cb++) {
                 if (cf || bM.acceptData(b9)) {
                     b8 = b9[cg];
                     ca = b8 && e[b8];
                     if (ca) {
                         if (ca.events) {
                             for (ce in ca.events) {
                                 if (cd[ce]) {
                                     bM.event.remove(b9, ce);
                                 } else {
                                     bM.removeEvent(b9, ce, ca.handle);
                                 }
                             }
                         }
                         if (e[b8]) {
                             delete e[b8];
                             if (cc) {
                                 delete b9[cg];
                             } else {
                                 if (typeof b9.removeAttribute !== aE) {
                                     b9.removeAttribute(cg);
                                 } else {
                                     b9[cg] = null;
                                 }
                             }
                             a9.push(b8);
                         }
                     }
                 }
             }
         },
         _evalUrl: function (e) {
             return bM.ajax({ url: e, type: "GET", dataType: "script", async: false, global: false, throws: true });
         },
     });
     bM.fn.extend({
         wrapAll: function (e) {
             if (bM.isFunction(e)) {
                 return this.each(function (b8) {
                     bM(this).wrapAll(e.call(this, b8));
                 });
             }
             if (this[0]) {
                 var b7 = bM(e, this[0].ownerDocument).eq(0).clone(true);
                 if (this[0].parentNode) {
                     b7.insertBefore(this[0]);
                 }
                 b7.map(function () {
                     var b8 = this;
                     while (b8.firstChild && b8.firstChild.nodeType === 1) {
                         b8 = b8.firstChild;
                     }
                     return b8;
                 }).append(this);
             }
             return this;
         },
         wrapInner: function (e) {
             if (bM.isFunction(e)) {
                 return this.each(function (b7) {
                     bM(this).wrapInner(e.call(this, b7));
                 });
             }
             return this.each(function () {
                 var b7 = bM(this),
                     b8 = b7.contents();
                 if (b8.length) {
                     b8.wrapAll(e);
                 } else {
                     b7.append(e);
                 }
             });
         },
         wrap: function (e) {
             var b7 = bM.isFunction(e);
             return this.each(function (b8) {
                 bM(this).wrapAll(b7 ? e.call(this, b8) : e);
             });
         },
         unwrap: function () {
             return this.parent()
                 .each(function () {
                     if (!bM.nodeName(this, "body")) {
                         bM(this).replaceWith(this.childNodes);
                     }
                 })
                 .end();
         },
     });
     var aG,
         br,
         H,
         bj = /alpha\([^)]*\)/i,
         aV = /opacity\s*=\s*([^)]*)/,
         bq = /^(top|right|bottom|left)$/,
         I = /^(none|table(?!-c[ea]).+)/,
         a0 = /^margin/,
         bc = new RegExp("^(" + bD + ")(.*)$", "i"),
         Y = new RegExp("^(" + bD + ")(?!px)[a-z%]+$", "i"),
         U = new RegExp("^([+-])=(" + bD + ")", "i"),
         bm = { BODY: "block" },
         bf = { position: "absolute", visibility: "hidden", display: "block" },
         bF = { letterSpacing: 0, fontWeight: 400 },
         bW = ["Top", "Right", "Bottom", "Left"],
         ax = ["Webkit", "O", "Moz", "ms"];
     function b(b9, b7) {
         if (b7 in b9) {
             return b7;
         }
         var ca = b7.charAt(0).toUpperCase() + b7.slice(1),
             e = b7,
             b8 = ax.length;
         while (b8--) {
             b7 = ax[b8] + ca;
             if (b7 in b9) {
                 return b7;
             }
         }
         return e;
     }
     function R(b7, e) {
         b7 = e || b7;
         return bM.css(b7, "display") === "none" || !bM.contains(b7.ownerDocument, b7);
     }
     function s(cc, e) {
         var cd,
             ca,
             cb,
             b7 = [],
             b8 = 0,
             b9 = cc.length;
         for (; b8 < b9; b8++) {
             ca = cc[b8];
             if (!ca.style) {
                 continue;
             }
             b7[b8] = bM._data(ca, "olddisplay");
             cd = ca.style.display;
             if (e) {
                 if (!b7[b8] && cd === "none") {
                     ca.style.display = "";
                 }
                 if (ca.style.display === "" && R(ca)) {
                     b7[b8] = bM._data(ca, "olddisplay", bH(ca.nodeName));
                 }
             } else {
                 if (!b7[b8]) {
                     cb = R(ca);
                     if ((cd && cd !== "none") || !cb) {
                         bM._data(ca, "olddisplay", cb ? cd : bM.css(ca, "display"));
                     }
                 }
             }
         }
         for (b8 = 0; b8 < b9; b8++) {
             ca = cc[b8];
             if (!ca.style) {
                 continue;
             }
             if (!e || ca.style.display === "none" || ca.style.display === "") {
                 ca.style.display = e ? b7[b8] || "" : "none";
             }
         }
         return cc;
     }
     bM.fn.extend({
         css: function (e, b7) {
             return bM.access(
                 this,
                 function (cc, b9, cd) {
                     var b8,
                         cb,
                         ce = {},
                         ca = 0;
                     if (bM.isArray(b9)) {
                         cb = br(cc);
                         b8 = b9.length;
                         for (; ca < b8; ca++) {
                             ce[b9[ca]] = bM.css(cc, b9[ca], false, cb);
                         }
                         return ce;
                     }
                     return cd !== aI ? bM.style(cc, b9, cd) : bM.css(cc, b9);
                 },
                 e,
                 b7,
                 arguments.length > 1
             );
         },
         show: function () {
             return s(this, true);
         },
         hide: function () {
             return s(this);
         },
         toggle: function (e) {
             if (typeof e === "boolean") {
                 return e ? this.show() : this.hide();
             }
             return this.each(function () {
                 if (R(this)) {
                     bM(this).show();
                 } else {
                     bM(this).hide();
                 }
             });
         },
     });
     bM.extend({
         cssHooks: {
             opacity: {
                 get: function (b8, b7) {
                     if (b7) {
                         var e = H(b8, "opacity");
                         return e === "" ? "1" : e;
                     }
                 },
             },
         },
         cssNumber: { columnCount: true, fillOpacity: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true },
         cssProps: { float: bM.support.cssFloat ? "cssFloat" : "styleFloat" },
         style: function (b9, b8, cf, ca) {
             if (!b9 || b9.nodeType === 3 || b9.nodeType === 8 || !b9.style) {
                 return;
             }
             var cd,
                 ce,
                 cg,
                 cb = bM.camelCase(b8),
                 b7 = b9.style;
             b8 = bM.cssProps[cb] || (bM.cssProps[cb] = b(b7, cb));
             cg = bM.cssHooks[b8] || bM.cssHooks[cb];
             if (cf !== aI) {
                 ce = typeof cf;
                 if (ce === "string" && (cd = U.exec(cf))) {
                     cf = (cd[1] + 1) * cd[2] + parseFloat(bM.css(b9, b8));
                     ce = "number";
                 }
                 if (cf == null || (ce === "number" && isNaN(cf))) {
                     return;
                 }
                 if (ce === "number" && !bM.cssNumber[cb]) {
                     cf += "px";
                 }
                 if (!bM.support.clearCloneStyle && cf === "" && b8.indexOf("background") === 0) {
                     b7[b8] = "inherit";
                 }
                 if (!cg || !("set" in cg) || (cf = cg.set(b9, cf, ca)) !== aI) {
                     try {
                         b7[b8] = cf;
                     } catch (cc) {}
                 }
             } else {
                 if (cg && "get" in cg && (cd = cg.get(b9, false, ca)) !== aI) {
                     return cd;
                 }
                 return b7[b8];
             }
         },
         css: function (cc, ca, b7, cb) {
             var b9,
                 cd,
                 e,
                 b8 = bM.camelCase(ca);
             ca = bM.cssProps[b8] || (bM.cssProps[b8] = b(cc.style, b8));
             e = bM.cssHooks[ca] || bM.cssHooks[b8];
             if (e && "get" in e) {
                 cd = e.get(cc, true, b7);
             }
             if (cd === aI) {
                 cd = H(cc, ca, cb);
             }
             if (cd === "normal" && ca in bF) {
                 cd = bF[ca];
             }
             if (b7 === "" || b7) {
                 b9 = parseFloat(cd);
                 return b7 === true || bM.isNumeric(b9) ? b9 || 0 : cd;
             }
             return cd;
         },
     });
     if (a5.getComputedStyle) {
         br = function (e) {
             return a5.getComputedStyle(e, null);
         };
         H = function (ca, b8, cc) {
             var b9,
                 b7,
                 ce,
                 cb = cc || br(ca),
                 cd = cb ? cb.getPropertyValue(b8) || cb[b8] : aI,
                 e = ca.style;
             if (cb) {
                 if (cd === "" && !bM.contains(ca.ownerDocument, ca)) {
                     cd = bM.style(ca, b8);
                 }
                 if (Y.test(cd) && a0.test(b8)) {
                     b9 = e.width;
                     b7 = e.minWidth;
                     ce = e.maxWidth;
                     e.minWidth = e.maxWidth = e.width = cd;
                     cd = cb.width;
                     e.width = b9;
                     e.minWidth = b7;
                     e.maxWidth = ce;
                 }
             }
             return cd;
         };
     } else {
         if (n.documentElement.currentStyle) {
             br = function (e) {
                 return e.currentStyle;
             };
             H = function (b9, b7, cc) {
                 var b8,
                     cb,
                     cd,
                     ca = cc || br(b9),
                     ce = ca ? ca[b7] : aI,
                     e = b9.style;
                 if (ce == null && e && e[b7]) {
                     ce = e[b7];
                 }
                 if (Y.test(ce) && !bq.test(b7)) {
                     b8 = e.left;
                     cb = b9.runtimeStyle;
                     cd = cb && cb.left;
                     if (cd) {
                         cb.left = b9.currentStyle.left;
                     }
                     e.left = b7 === "fontSize" ? "1em" : ce;
                     ce = e.pixelLeft + "px";
                     e.left = b8;
                     if (cd) {
                         cb.left = cd;
                     }
                 }
                 return ce === "" ? "auto" : ce;
             };
         }
     }
     function aL(e, b8, b9) {
         var b7 = bc.exec(b8);
         return b7 ? Math.max(0, b7[1] - (b9 || 0)) + (b7[2] || "px") : b8;
     }
     function ay(ca, b7, e, cc, b9) {
         var b8 = e === (cc ? "border" : "content") ? 4 : b7 === "width" ? 1 : 0,
             cb = 0;
         for (; b8 < 4; b8 += 2) {
             if (e === "margin") {
                 cb += bM.css(ca, e + bW[b8], true, b9);
             }
             if (cc) {
                 if (e === "content") {
                     cb -= bM.css(ca, "padding" + bW[b8], true, b9);
                 }
                 if (e !== "margin") {
                     cb -= bM.css(ca, "border" + bW[b8] + "Width", true, b9);
                 }
             } else {
                 cb += bM.css(ca, "padding" + bW[b8], true, b9);
                 if (e !== "padding") {
                     cb += bM.css(ca, "border" + bW[b8] + "Width", true, b9);
                 }
             }
         }
         return cb;
     }
     function y(ca, b7, e) {
         var b9 = true,
             cb = b7 === "width" ? ca.offsetWidth : ca.offsetHeight,
             b8 = br(ca),
             cc = bM.support.boxSizing && bM.css(ca, "boxSizing", false, b8) === "border-box";
         if (cb <= 0 || cb == null) {
             cb = H(ca, b7, b8);
             if (cb < 0 || cb == null) {
                 cb = ca.style[b7];
             }
             if (Y.test(cb)) {
                 return cb;
             }
             b9 = cc && (bM.support.boxSizingReliable || cb === ca.style[b7]);
             cb = parseFloat(cb) || 0;
         }
         return cb + ay(ca, b7, e || (cc ? "border" : "content"), b9, b8) + "px";
     }
     function bH(b8) {
         var b7 = n,
             e = bm[b8];
         if (!e) {
             e = a4(b8, b7);
             if (e === "none" || !e) {
                 aG = (aG || bM("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b7.documentElement);
                 b7 = (aG[0].contentWindow || aG[0].contentDocument).document;
                 b7.write("<!doctype html><html><body>");
                 b7.close();
                 e = a4(b8, b7);
                 aG.detach();
             }
             bm[b8] = e;
         }
         return e;
     }
     function a4(e, b9) {
         var b7 = bM(b9.createElement(e)).appendTo(b9.body),
             b8 = bM.css(b7[0], "display");
         b7.remove();
         return b8;
     }
     bM.each(["height", "width"], function (b7, e) {
         bM.cssHooks[e] = {
             get: function (ca, b9, b8) {
                 if (b9) {
                     return ca.offsetWidth === 0 && I.test(bM.css(ca, "display"))
                         ? bM.swap(ca, bf, function () {
                               return y(ca, e, b8);
                           })
                         : y(ca, e, b8);
                 }
             },
             set: function (ca, cb, b8) {
                 var b9 = b8 && br(ca);
                 return aL(ca, cb, b8 ? ay(ca, e, b8, bM.support.boxSizing && bM.css(ca, "boxSizing", false, b9) === "border-box", b9) : 0);
             },
         };
     });
     if (!bM.support.opacity) {
         bM.cssHooks.opacity = {
             get: function (b7, e) {
                 return aV.test((e && b7.currentStyle ? b7.currentStyle.filter : b7.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
             },
             set: function (ca, cb) {
                 var b9 = ca.style,
                     b7 = ca.currentStyle,
                     e = bM.isNumeric(cb) ? "alpha(opacity=" + cb * 100 + ")" : "",
                     b8 = (b7 && b7.filter) || b9.filter || "";
                 b9.zoom = 1;
                 if ((cb >= 1 || cb === "") && bM.trim(b8.replace(bj, "")) === "" && b9.removeAttribute) {
                     b9.removeAttribute("filter");
                     if (cb === "" || (b7 && !b7.filter)) {
                         return;
                     }
                 }
                 b9.filter = bj.test(b8) ? b8.replace(bj, e) : b8 + " " + e;
             },
         };
     }
     bM(function () {
         if (!bM.support.reliableMarginRight) {
             bM.cssHooks.marginRight = {
                 get: function (b7, e) {
                     if (e) {
                         return bM.swap(b7, { display: "inline-block" }, H, [b7, "marginRight"]);
                     }
                 },
             };
         }
         if (!bM.support.pixelPosition && bM.fn.position) {
             bM.each(["top", "left"], function (e, b7) {
                 bM.cssHooks[b7] = {
                     get: function (b9, b8) {
                         if (b8) {
                             b8 = H(b9, b7);
                             return Y.test(b8) ? bM(b9).position()[b7] + "px" : b8;
                         }
                     },
                 };
             });
         }
     });
     if (bM.expr && bM.expr.filters) {
         bM.expr.filters.hidden = function (e) {
             return (e.offsetWidth <= 0 && e.offsetHeight <= 0) || (!bM.support.reliableHiddenOffsets && ((e.style && e.style.display) || bM.css(e, "display")) === "none");
         };
         bM.expr.filters.visible = function (e) {
             return !bM.expr.filters.hidden(e);
         };
     }
     bM.each({ margin: "", padding: "", border: "Width" }, function (e, b7) {
         bM.cssHooks[e + b7] = {
             expand: function (ca) {
                 var b9 = 0,
                     b8 = {},
                     cb = typeof ca === "string" ? ca.split(" ") : [ca];
                 for (; b9 < 4; b9++) {
                     b8[e + bW[b9] + b7] = cb[b9] || cb[b9 - 2] || cb[0];
                 }
                 return b8;
             },
         };
         if (!a0.test(e)) {
             bM.cssHooks[e + b7].set = aL;
         }
     });
     var by = /%20/g,
         aT = /\[\]$/,
         W = /\r?\n/g,
         c = /^(?:submit|button|image|reset|file)$/i,
         aw = /^(?:input|select|textarea|keygen)/i;
     bM.fn.extend({
         serialize: function () {
             return bM.param(this.serializeArray());
         },
         serializeArray: function () {
             return this.map(function () {
                 var e = bM.prop(this, "elements");
                 return e ? bM.makeArray(e) : this;
             })
                 .filter(function () {
                     var e = this.type;
                     return this.name && !bM(this).is(":disabled") && aw.test(this.nodeName) && !c.test(e) && (this.checked || !t.test(e));
                 })
                 .map(function (e, b7) {
                     var b8 = bM(this).val();
                     return b8 == null
                         ? null
                         : bM.isArray(b8)
                         ? bM.map(b8, function (b9) {
                               return { name: b7.name, value: b9.replace(W, "\r\n") };
                           })
                         : { name: b7.name, value: b8.replace(W, "\r\n") };
                 })
                 .get();
         },
     });
     bM.param = function (e, b8) {
         var b9,
             b7 = [],
             ca = function (cb, cc) {
                 cc = bM.isFunction(cc) ? cc() : cc == null ? "" : cc;
                 b7[b7.length] = encodeURIComponent(cb) + "=" + encodeURIComponent(cc);
             };
         if (b8 === aI) {
             b8 = bM.ajaxSettings && bM.ajaxSettings.traditional;
         }
         if (bM.isArray(e) || (e.jquery && !bM.isPlainObject(e))) {
             bM.each(e, function () {
                 ca(this.name, this.value);
             });
         } else {
             for (b9 in e) {
                 k(b9, e[b9], b8, ca);
             }
         }
         return b7.join("&").replace(by, "+");
     };
     function k(b8, ca, b7, b9) {
         var e;
         if (bM.isArray(ca)) {
             bM.each(ca, function (cc, cb) {
                 if (b7 || aT.test(b8)) {
                     b9(b8, cb);
                 } else {
                     k(b8 + "[" + (typeof cb === "object" ? cc : "") + "]", cb, b7, b9);
                 }
             });
         } else {
             if (!b7 && bM.type(ca) === "object") {
                 for (e in ca) {
                     k(b8 + "[" + e + "]", ca[e], b7, b9);
                 }
             } else {
                 b9(b8, ca);
             }
         }
     }
     bM.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
         b7,
         e
     ) {
         bM.fn[e] = function (b9, b8) {
             return arguments.length > 0 ? this.on(e, null, b9, b8) : this.trigger(e);
         };
     });
     bM.fn.extend({
         hover: function (e, b7) {
             return this.mouseenter(e).mouseleave(b7 || e);
         },
         bind: function (e, b8, b7) {
             return this.on(e, null, b8, b7);
         },
         unbind: function (e, b7) {
             return this.off(e, null, b7);
         },
         delegate: function (e, b7, b9, b8) {
             return this.on(b7, e, b9, b8);
         },
         undelegate: function (e, b7, b8) {
             return arguments.length === 1 ? this.off(e, "**") : this.off(b7, e || "**", b8);
         },
     });
     var b5,
         aa,
         bR = bM.now(),
         aB = /\?/,
         ar = /#.*$/,
         Q = /([?&])_=[^&]*/,
         ai = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
         E = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
         r = /^(?:GET|HEAD)$/,
         aJ = /^\/\//,
         aW = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
         b4 = bM.fn.load,
         z = {},
         ba = {},
         aY = "*/".concat("*");
     try {
         aa = aN.href;
     } catch (bi) {
         aa = n.createElement("a");
         aa.href = "";
         aa = aa.href;
     }
     b5 = aW.exec(aa.toLowerCase()) || [];
     function bO(e) {
         return function (ca, cb) {
             if (typeof ca !== "string") {
                 cb = ca;
                 ca = "*";
             }
             var b7,
                 b8 = 0,
                 b9 = ca.toLowerCase().match(ae) || [];
             if (bM.isFunction(cb)) {
                 while ((b7 = b9[b8++])) {
                     if (b7[0] === "+") {
                         b7 = b7.slice(1) || "*";
                         (e[b7] = e[b7] || []).unshift(cb);
                     } else {
                         (e[b7] = e[b7] || []).push(cb);
                     }
                 }
             }
         };
     }
     function q(e, b8, cc, b9) {
         var b7 = {},
             ca = e === ba;
         function cb(cd) {
             var ce;
             b7[cd] = true;
             bM.each(e[cd] || [], function (cg, cf) {
                 var ch = cf(b8, cc, b9);
                 if (typeof ch === "string" && !ca && !b7[ch]) {
                     b8.dataTypes.unshift(ch);
                     cb(ch);
                     return false;
                 } else {
                     if (ca) {
                         return !(ce = ch);
                     }
                 }
             });
             return ce;
         }
         return cb(b8.dataTypes[0]) || (!b7["*"] && cb("*"));
     }
     function u(b8, b9) {
         var e,
             b7,
             ca = bM.ajaxSettings.flatOptions || {};
         for (b7 in b9) {
             if (b9[b7] !== aI) {
                 (ca[b7] ? b8 : e || (e = {}))[b7] = b9[b7];
             }
         }
         if (e) {
             bM.extend(true, b8, e);
         }
         return b8;
     }
     bM.fn.load = function (b9, cc, cd) {
         if (typeof b9 !== "string" && b4) {
             return b4.apply(this, arguments);
         }
         var e,
             b8,
             ca,
             b7 = this,
             cb = b9.indexOf(" ");
         if (cb >= 0) {
             e = b9.slice(cb, b9.length);
             b9 = b9.slice(0, cb);
         }
         if (bM.isFunction(cc)) {
             cd = cc;
             cc = aI;
         } else {
             if (cc && typeof cc === "object") {
                 ca = "POST";
             }
         }
         if (b7.length > 0) {
             bM.ajax({ url: b9, type: ca, dataType: "html", data: cc })
                 .done(function (ce) {
                     b8 = arguments;
                     b7.html(e ? bM("<div>").append(bM.parseHTML(ce)).find(e) : ce);
                 })
                 .complete(
                     cd &&
                         function (cf, ce) {
                             b7.each(cd, b8 || [cf.responseText, ce, cf]);
                         }
                 );
         }
         return this;
     };
     bM.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, b7) {
         bM.fn[b7] = function (b8) {
             return this.on(b7, b8);
         };
     });
     bM.extend({
         active: 0,
         lastModified: {},
         etag: {},
         ajaxSettings: {
             url: aa,
             type: "GET",
             isLocal: E.test(b5[1]),
             global: true,
             processData: true,
             async: true,
             contentType: "application/x-www-form-urlencoded; charset=UTF-8",
             accepts: { "*": aY, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
             contents: { xml: /xml/, html: /html/, json: /json/ },
             responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
             converters: { "* text": String, "text html": true, "text json": bM.parseJSON, "text xml": bM.parseXML },
             flatOptions: { url: true, context: true },
         },
         ajaxSetup: function (b7, e) {
             return e ? u(u(b7, bM.ajaxSettings), e) : u(bM.ajaxSettings, b7);
         },
         ajaxPrefilter: bO(z),
         ajaxTransport: bO(ba),
         ajax: function (cb, b8) {
             if (typeof cb === "object") {
                 b8 = cb;
                 cb = aI;
             }
             b8 = b8 || {};
             var ck,
                 cm,
                 cc,
                 cr,
                 cg,
                 b7,
                 cn,
                 b9,
                 cf = bM.ajaxSetup({}, b8),
                 ct = cf.context || cf,
                 ci = cf.context && (ct.nodeType || ct.jquery) ? bM(ct) : bM.event,
                 cs = bM.Deferred(),
                 cp = bM.Callbacks("once memory"),
                 cd = cf.statusCode || {},
                 cj = {},
                 cq = {},
                 ca = 0,
                 ce = "canceled",
                 cl = {
                     readyState: 0,
                     getResponseHeader: function (cu) {
                         var e;
                         if (ca === 2) {
                             if (!b9) {
                                 b9 = {};
                                 while ((e = ai.exec(cr))) {
                                     b9[e[1].toLowerCase()] = e[2];
                                 }
                             }
                             e = b9[cu.toLowerCase()];
                         }
                         return e == null ? null : e;
                     },
                     getAllResponseHeaders: function () {
                         return ca === 2 ? cr : null;
                     },
                     setRequestHeader: function (cu, cv) {
                         var e = cu.toLowerCase();
                         if (!ca) {
                             cu = cq[e] = cq[e] || cu;
                             cj[cu] = cv;
                         }
                         return this;
                     },
                     overrideMimeType: function (e) {
                         if (!ca) {
                             cf.mimeType = e;
                         }
                         return this;
                     },
                     statusCode: function (cu) {
                         var e;
                         if (cu) {
                             if (ca < 2) {
                                 for (e in cu) {
                                     cd[e] = [cd[e], cu[e]];
                                 }
                             } else {
                                 cl.always(cu[cl.status]);
                             }
                         }
                         return this;
                     },
                     abort: function (cu) {
                         var e = cu || ce;
                         if (cn) {
                             cn.abort(e);
                         }
                         ch(0, e);
                         return this;
                     },
                 };
             cs.promise(cl).complete = cp.add;
             cl.success = cl.done;
             cl.error = cl.fail;
             cf.url = ((cb || cf.url || aa) + "").replace(ar, "").replace(aJ, b5[1] + "//");
             cf.type = b8.method || b8.type || cf.method || cf.type;
             cf.dataTypes = bM
                 .trim(cf.dataType || "*")
                 .toLowerCase()
                 .match(ae) || [""];
             if (cf.crossDomain == null) {
                 ck = aW.exec(cf.url.toLowerCase());
                 cf.crossDomain = !!(ck && (ck[1] !== b5[1] || ck[2] !== b5[2] || (ck[3] || (ck[1] === "http:" ? "80" : "443")) !== (b5[3] || (b5[1] === "http:" ? "80" : "443"))));
             }
             if (cf.data && cf.processData && typeof cf.data !== "string") {
                 cf.data = bM.param(cf.data, cf.traditional);
             }
             q(z, cf, b8, cl);
             if (ca === 2) {
                 return cl;
             }
             b7 = cf.global;
             if (b7 && bM.active++ === 0) {
                 bM.event.trigger("ajaxStart");
             }
             cf.type = cf.type.toUpperCase();
             cf.hasContent = !r.test(cf.type);
             cc = cf.url;
             if (!cf.hasContent) {
                 if (cf.data) {
                     cc = cf.url += (aB.test(cc) ? "&" : "?") + cf.data;
                     delete cf.data;
                 }
                 if (cf.cache === false) {
                     cf.url = Q.test(cc) ? cc.replace(Q, "$1_=" + bR++) : cc + (aB.test(cc) ? "&" : "?") + "_=" + bR++;
                 }
             }
             if (cf.ifModified) {
                 if (bM.lastModified[cc]) {
                     cl.setRequestHeader("If-Modified-Since", bM.lastModified[cc]);
                 }
                 if (bM.etag[cc]) {
                     cl.setRequestHeader("If-None-Match", bM.etag[cc]);
                 }
             }
             if ((cf.data && cf.hasContent && cf.contentType !== false) || b8.contentType) {
                 cl.setRequestHeader("Content-Type", cf.contentType);
             }
             cl.setRequestHeader("Accept", cf.dataTypes[0] && cf.accepts[cf.dataTypes[0]] ? cf.accepts[cf.dataTypes[0]] + (cf.dataTypes[0] !== "*" ? ", " + aY + "; q=0.01" : "") : cf.accepts["*"]);
             for (cm in cf.headers) {
                 cl.setRequestHeader(cm, cf.headers[cm]);
             }
             if (cf.beforeSend && (cf.beforeSend.call(ct, cl, cf) === false || ca === 2)) {
                 return cl.abort();
             }
             ce = "abort";
             for (cm in { success: 1, error: 1, complete: 1 }) {
                 cl[cm](cf[cm]);
             }
             cn = q(ba, cf, b8, cl);
             if (!cn) {
                 ch(-1, "No Transport");
             } else {
                 cl.readyState = 1;
                 if (b7) {
                     ci.trigger("ajaxSend", [cl, cf]);
                 }
                 if (cf.async && cf.timeout > 0) {
                     cg = setTimeout(function () {
                         cl.abort("timeout");
                     }, cf.timeout);
                 }
                 try {
                     ca = 1;
                     cn.send(cj, ch);
                 } catch (co) {
                     if (ca < 2) {
                         ch(-1, co);
                     } else {
                         throw co;
                     }
                 }
             }
             function ch(cy, cu, cz, cw) {
                 var e,
                     cC,
                     cA,
                     cx,
                     cB,
                     cv = cu;
                 if (ca === 2) {
                     return;
                 }
                 ca = 2;
                 if (cg) {
                     clearTimeout(cg);
                 }
                 cn = aI;
                 cr = cw || "";
                 cl.readyState = cy > 0 ? 4 : 0;
                 e = (cy >= 200 && cy < 300) || cy === 304;
                 if (cz) {
                     cx = g(cf, cl, cz);
                 }
                 cx = ah(cf, cx, cl, e);
                 if (e) {
                     if (cf.ifModified) {
                         cB = cl.getResponseHeader("Last-Modified");
                         if (cB) {
                             bM.lastModified[cc] = cB;
                         }
                         cB = cl.getResponseHeader("etag");
                         if (cB) {
                             bM.etag[cc] = cB;
                         }
                     }
                     if (cy === 204 || cf.type === "HEAD") {
                         cv = "nocontent";
                     } else {
                         if (cy === 304) {
                             cv = "notmodified";
                         } else {
                             cv = cx.state;
                             cC = cx.data;
                             cA = cx.error;
                             e = !cA;
                         }
                     }
                 } else {
                     cA = cv;
                     if (cy || !cv) {
                         cv = "error";
                         if (cy < 0) {
                             cy = 0;
                         }
                     }
                 }
                 cl.status = cy;
                 cl.statusText = (cu || cv) + "";
                 if (e) {
                     cs.resolveWith(ct, [cC, cv, cl]);
                 } else {
                     cs.rejectWith(ct, [cl, cv, cA]);
                 }
                 cl.statusCode(cd);
                 cd = aI;
                 if (b7) {
                     ci.trigger(e ? "ajaxSuccess" : "ajaxError", [cl, cf, e ? cC : cA]);
                 }
                 cp.fireWith(ct, [cl, cv]);
                 if (b7) {
                     ci.trigger("ajaxComplete", [cl, cf]);
                     if (!--bM.active) {
                         bM.event.trigger("ajaxStop");
                     }
                 }
             }
             return cl;
         },
         getJSON: function (e, b7, b8) {
             return bM.get(e, b7, b8, "json");
         },
         getScript: function (e, b7) {
             return bM.get(e, aI, b7, "script");
         },
     });
     bM.each(["get", "post"], function (e, b7) {
         bM[b7] = function (b8, ca, cb, b9) {
             if (bM.isFunction(ca)) {
                 b9 = b9 || cb;
                 cb = ca;
                 ca = aI;
             }
             return bM.ajax({ url: b8, type: b7, dataType: b9, data: ca, success: cb });
         };
     });
     function g(ce, cd, ca) {
         var e,
             b9,
             b8,
             cb,
             b7 = ce.contents,
             cc = ce.dataTypes;
         while (cc[0] === "*") {
             cc.shift();
             if (b9 === aI) {
                 b9 = ce.mimeType || cd.getResponseHeader("Content-Type");
             }
         }
         if (b9) {
             for (cb in b7) {
                 if (b7[cb] && b7[cb].test(b9)) {
                     cc.unshift(cb);
                     break;
                 }
             }
         }
         if (cc[0] in ca) {
             b8 = cc[0];
         } else {
             for (cb in ca) {
                 if (!cc[0] || ce.converters[cb + " " + cc[0]]) {
                     b8 = cb;
                     break;
                 }
                 if (!e) {
                     e = cb;
                 }
             }
             b8 = b8 || e;
         }
         if (b8) {
             if (b8 !== cc[0]) {
                 cc.unshift(b8);
             }
             return ca[b8];
         }
     }
     function ah(ci, ca, cf, b8) {
         var b7,
             cd,
             cg,
             cb,
             b9,
             ch = {},
             ce = ci.dataTypes.slice();
         if (ce[1]) {
             for (cg in ci.converters) {
                 ch[cg.toLowerCase()] = ci.converters[cg];
             }
         }
         cd = ce.shift();
         while (cd) {
             if (ci.responseFields[cd]) {
                 cf[ci.responseFields[cd]] = ca;
             }
             if (!b9 && b8 && ci.dataFilter) {
                 ca = ci.dataFilter(ca, ci.dataType);
             }
             b9 = cd;
             cd = ce.shift();
             if (cd) {
                 if (cd === "*") {
                     cd = b9;
                 } else {
                     if (b9 !== "*" && b9 !== cd) {
                         cg = ch[b9 + " " + cd] || ch["* " + cd];
                         if (!cg) {
                             for (b7 in ch) {
                                 cb = b7.split(" ");
                                 if (cb[1] === cd) {
                                     cg = ch[b9 + " " + cb[0]] || ch["* " + cb[0]];
                                     if (cg) {
                                         if (cg === true) {
                                             cg = ch[b7];
                                         } else {
                                             if (ch[b7] !== true) {
                                                 cd = cb[0];
                                                 ce.unshift(cb[1]);
                                             }
                                         }
                                         break;
                                     }
                                 }
                             }
                         }
                         if (cg !== true) {
                             if (cg && ci["throws"]) {
                                 ca = cg(ca);
                             } else {
                                 try {
                                     ca = cg(ca);
                                 } catch (cc) {
                                     return { state: "parsererror", error: cg ? cc : "No conversion from " + b9 + " to " + cd };
                                 }
                             }
                         }
                     }
                 }
             }
         }
         return { state: "success", data: ca };
     }
     bM.ajaxSetup({
         accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
         contents: { script: /(?:java|ecma)script/ },
         converters: {
             "text script": function (e) {
                 bM.globalEval(e);
                 return e;
             },
         },
     });
     bM.ajaxPrefilter("script", function (e) {
         if (e.cache === aI) {
             e.cache = false;
         }
         if (e.crossDomain) {
             e.type = "GET";
             e.global = false;
         }
     });
     bM.ajaxTransport("script", function (b8) {
         if (b8.crossDomain) {
             var e,
                 b7 = n.head || bM("head")[0] || n.documentElement;
             return {
                 send: function (b9, ca) {
                     e = n.createElement("script");
                     e.async = true;
                     if (b8.scriptCharset) {
                         e.charset = b8.scriptCharset;
                     }
                     e.src = b8.url;
                     e.onload = e.onreadystatechange = function (cc, cb) {
                         if (cb || !e.readyState || /loaded|complete/.test(e.readyState)) {
                             e.onload = e.onreadystatechange = null;
                             if (e.parentNode) {
                                 e.parentNode.removeChild(e);
                             }
                             e = null;
                             if (!cb) {
                                 ca(200, "success");
                             }
                         }
                     };
                     b7.insertBefore(e, b7.firstChild);
                 },
                 abort: function () {
                     if (e) {
                         e.onload(aI, true);
                     }
                 },
             };
         }
     });
     var bt = [],
         a8 = /(=)\?(?=&|$)|\?\?/;
     bM.ajaxSetup({
         jsonp: "callback",
         jsonpCallback: function () {
             var e = bt.pop() || bM.expando + "_" + bR++;
             this[e] = true;
             return e;
         },
     });
     bM.ajaxPrefilter("json jsonp", function (b9, e, ca) {
         var cc,
             b7,
             b8,
             cb = b9.jsonp !== false && (a8.test(b9.url) ? "url" : typeof b9.data === "string" && !(b9.contentType || "").indexOf("application/x-www-form-urlencoded") && a8.test(b9.data) && "data");
         if (cb || b9.dataTypes[0] === "jsonp") {
             cc = b9.jsonpCallback = bM.isFunction(b9.jsonpCallback) ? b9.jsonpCallback() : b9.jsonpCallback;
             if (cb) {
                 b9[cb] = b9[cb].replace(a8, "$1" + cc);
             } else {
                 if (b9.jsonp !== false) {
                     b9.url += (aB.test(b9.url) ? "&" : "?") + b9.jsonp + "=" + cc;
                 }
             }
             b9.converters["script json"] = function () {
                 if (!b8) {
                     bM.error(cc + " was not called");
                 }
                 return b8[0];
             };
             b9.dataTypes[0] = "json";
             b7 = a5[cc];
             a5[cc] = function () {
                 b8 = arguments;
             };
             ca.always(function () {
                 a5[cc] = b7;
                 if (b9[cc]) {
                     b9.jsonpCallback = e.jsonpCallback;
                     bt.push(cc);
                 }
                 if (b8 && bM.isFunction(b7)) {
                     b7(b8[0]);
                 }
                 b8 = b7 = aI;
             });
             return "script";
         }
     });
     var aj,
         az,
         aA = 0,
         aR =
             a5.ActiveXObject &&
             function () {
                 var e;
                 for (e in aj) {
                     aj[e](aI, true);
                 }
             };
     function bG() {
         try {
             return new a5.XMLHttpRequest();
         } catch (b7) {}
     }
     function bh() {
         try {
             return new a5.ActiveXObject("Microsoft.XMLHTTP");
         } catch (b7) {}
     }
     bM.ajaxSettings.xhr = a5.ActiveXObject
         ? function () {
               return (!this.isLocal && bG()) || bh();
           }
         : bG;
     az = bM.ajaxSettings.xhr();
     bM.support.cors = !!az && "withCredentials" in az;
     az = bM.support.ajax = !!az;
     if (az) {
         bM.ajaxTransport(function (e) {
             if (!e.crossDomain || bM.support.cors) {
                 var b7;
                 return {
                     send: function (cd, b8) {
                         var cb,
                             b9,
                             cc = e.xhr();
                         if (e.username) {
                             cc.open(e.type, e.url, e.async, e.username, e.password);
                         } else {
                             cc.open(e.type, e.url, e.async);
                         }
                         if (e.xhrFields) {
                             for (b9 in e.xhrFields) {
                                 cc[b9] = e.xhrFields[b9];
                             }
                         }
                         if (e.mimeType && cc.overrideMimeType) {
                             cc.overrideMimeType(e.mimeType);
                         }
                         if (!e.crossDomain && !cd["X-Requested-With"]) {
                             cd["X-Requested-With"] = "XMLHttpRequest";
                         }
                         try {
                             for (b9 in cd) {
                                 cc.setRequestHeader(b9, cd[b9]);
                             }
                         } catch (ca) {}
                         cc.send((e.hasContent && e.data) || null);
                         b7 = function (cg, cf) {
                             var ce, ch, ck, ci;
                             try {
                                 if (b7 && (cf || cc.readyState === 4)) {
                                     b7 = aI;
                                     if (cb) {
                                         cc.onreadystatechange = bM.noop;
                                         if (aR) {
                                             delete aj[cb];
                                         }
                                     }
                                     if (cf) {
                                         if (cc.readyState !== 4) {
                                             cc.abort();
                                         }
                                     } else {
                                         ci = {};
                                         ce = cc.status;
                                         ch = cc.getAllResponseHeaders();
                                         if (typeof cc.responseText === "string") {
                                             ci.text = cc.responseText;
                                         }
                                         try {
                                             ck = cc.statusText;
                                         } catch (cj) {
                                             ck = "";
                                         }
                                         if (!ce && e.isLocal && !e.crossDomain) {
                                             ce = ci.text ? 200 : 404;
                                         } else {
                                             if (ce === 1223) {
                                                 ce = 204;
                                             }
                                         }
                                     }
                                 }
                             } catch (cl) {
                                 if (!cf) {
                                     b8(-1, cl);
                                 }
                             }
                             if (ci) {
                                 b8(ce, ck, ci, ch);
                             }
                         };
                         if (!e.async) {
                             b7();
                         } else {
                             if (cc.readyState === 4) {
                                 setTimeout(b7);
                             } else {
                                 cb = ++aA;
                                 if (aR) {
                                     if (!aj) {
                                         aj = {};
                                         bM(a5).unload(aR);
                                     }
                                     aj[cb] = b7;
                                 }
                                 cc.onreadystatechange = b7;
                             }
                         }
                     },
                     abort: function () {
                         if (b7) {
                             b7(aI, true);
                         }
                     },
                 };
             }
         });
     }
     var N,
         af,
         bU = /^(?:toggle|show|hide)$/,
         bN = new RegExp("^(?:([+-])=|)(" + bD + ")([a-z%]*)$", "i"),
         bT = /queueHooks$/,
         aD = [j],
         a2 = {
             "*": [
                 function (e, cc) {
                     var ce = this.createTween(e, cc),
                         ca = ce.cur(),
                         b9 = bN.exec(cc),
                         cd = (b9 && b9[3]) || (bM.cssNumber[e] ? "" : "px"),
                         b7 = (bM.cssNumber[e] || (cd !== "px" && +ca)) && bN.exec(bM.css(ce.elem, e)),
                         b8 = 1,
                         cb = 20;
                     if (b7 && b7[3] !== cd) {
                         cd = cd || b7[3];
                         b9 = b9 || [];
                         b7 = +ca || 1;
                         do {
                             b8 = b8 || ".5";
                             b7 = b7 / b8;
                             bM.style(ce.elem, e, b7 + cd);
                         } while (b8 !== (b8 = ce.cur() / ca) && b8 !== 1 && --cb);
                     }
                     if (b9) {
                         b7 = ce.start = +b7 || +ca || 0;
                         ce.unit = cd;
                         ce.end = b9[1] ? b7 + (b9[1] + 1) * b9[2] : +b9[2];
                     }
                     return ce;
                 },
             ],
         };
     function bp() {
         setTimeout(function () {
             N = aI;
         });
         return (N = bM.now());
     }
     function be(ca, cc, b9) {
         var b7,
             cb = (a2[cc] || []).concat(a2["*"]),
             e = 0,
             b8 = cb.length;
         for (; e < b8; e++) {
             if ((b7 = cb[e].call(b9, cc, ca))) {
                 return b7;
             }
         }
     }
     function f(b8, cc, cf) {
         var cg,
             e,
             cb = 0,
             b7 = aD.length,
             ce = bM.Deferred().always(function () {
                 delete ca.elem;
             }),
             ca = function () {
                 if (e) {
                     return false;
                 }
                 var cm = N || bp(),
                     cj = Math.max(0, b9.startTime + b9.duration - cm),
                     ch = cj / b9.duration || 0,
                     cl = 1 - ch,
                     ci = 0,
                     ck = b9.tweens.length;
                 for (; ci < ck; ci++) {
                     b9.tweens[ci].run(cl);
                 }
                 ce.notifyWith(b8, [b9, cl, cj]);
                 if (cl < 1 && ck) {
                     return cj;
                 } else {
                     ce.resolveWith(b8, [b9]);
                     return false;
                 }
             },
             b9 = ce.promise({
                 elem: b8,
                 props: bM.extend({}, cc),
                 opts: bM.extend(true, { specialEasing: {} }, cf),
                 originalProperties: cc,
                 originalOptions: cf,
                 startTime: N || bp(),
                 duration: cf.duration,
                 tweens: [],
                 createTween: function (cj, ch) {
                     var ci = bM.Tween(b8, b9.opts, cj, ch, b9.opts.specialEasing[cj] || b9.opts.easing);
                     b9.tweens.push(ci);
                     return ci;
                 },
                 stop: function (ci) {
                     var ch = 0,
                         cj = ci ? b9.tweens.length : 0;
                     if (e) {
                         return this;
                     }
                     e = true;
                     for (; ch < cj; ch++) {
                         b9.tweens[ch].run(1);
                     }
                     if (ci) {
                         ce.resolveWith(b8, [b9, ci]);
                     } else {
                         ce.rejectWith(b8, [b9, ci]);
                     }
                     return this;
                 },
             }),
             cd = b9.props;
         ao(cd, b9.opts.specialEasing);
         for (; cb < b7; cb++) {
             cg = aD[cb].call(b9, b8, cd, b9.opts);
             if (cg) {
                 return cg;
             }
         }
         bM.map(cd, be, b9);
         if (bM.isFunction(b9.opts.start)) {
             b9.opts.start.call(b8, b9);
         }
         bM.fx.timer(bM.extend(ca, { elem: b8, anim: b9, queue: b9.opts.queue }));
         return b9.progress(b9.opts.progress).done(b9.opts.done, b9.opts.complete).fail(b9.opts.fail).always(b9.opts.always);
     }
     function ao(b9, cb) {
         var b8, b7, cc, ca, e;
         for (b8 in b9) {
             b7 = bM.camelCase(b8);
             cc = cb[b7];
             ca = b9[b8];
             if (bM.isArray(ca)) {
                 cc = ca[1];
                 ca = b9[b8] = ca[0];
             }
             if (b8 !== b7) {
                 b9[b7] = ca;
                 delete b9[b8];
             }
             e = bM.cssHooks[b7];
             if (e && "expand" in e) {
                 ca = e.expand(ca);
                 delete b9[b7];
                 for (b8 in ca) {
                     if (!(b8 in b9)) {
                         b9[b8] = ca[b8];
                         cb[b8] = cc;
                     }
                 }
             } else {
                 cb[b7] = cc;
             }
         }
     }
     bM.Animation = bM.extend(f, {
         tweener: function (b7, ca) {
             if (bM.isFunction(b7)) {
                 ca = b7;
                 b7 = ["*"];
             } else {
                 b7 = b7.split(" ");
             }
             var b9,
                 e = 0,
                 b8 = b7.length;
             for (; e < b8; e++) {
                 b9 = b7[e];
                 a2[b9] = a2[b9] || [];
                 a2[b9].unshift(ca);
             }
         },
         prefilter: function (b7, e) {
             if (e) {
                 aD.unshift(b7);
             } else {
                 aD.push(b7);
             }
         },
     });
     function j(b9, cd, e) {
         var b8,
             cf,
             cb,
             ci,
             cj,
             cg,
             ca = this,
             ce = {},
             b7 = b9.style,
             cc = b9.nodeType && R(b9),
             ch = bM._data(b9, "fxshow");
         if (!e.queue) {
             cj = bM._queueHooks(b9, "fx");
             if (cj.unqueued == null) {
                 cj.unqueued = 0;
                 cg = cj.empty.fire;
                 cj.empty.fire = function () {
                     if (!cj.unqueued) {
                         cg();
                     }
                 };
             }
             cj.unqueued++;
             ca.always(function () {
                 ca.always(function () {
                     cj.unqueued--;
                     if (!bM.queue(b9, "fx").length) {
                         cj.empty.fire();
                     }
                 });
             });
         }
         if (b9.nodeType === 1 && ("height" in cd || "width" in cd)) {
             e.overflow = [b7.overflow, b7.overflowX, b7.overflowY];
             if (bM.css(b9, "display") === "inline" && bM.css(b9, "float") === "none") {
                 if (!bM.support.inlineBlockNeedsLayout || bH(b9.nodeName) === "inline") {
                     b7.display = "inline-block";
                 } else {
                     b7.zoom = 1;
                 }
             }
         }
         if (e.overflow) {
             b7.overflow = "hidden";
             if (!bM.support.shrinkWrapBlocks) {
                 ca.always(function () {
                     b7.overflow = e.overflow[0];
                     b7.overflowX = e.overflow[1];
                     b7.overflowY = e.overflow[2];
                 });
             }
         }
         for (b8 in cd) {
             cf = cd[b8];
             if (bU.exec(cf)) {
                 delete cd[b8];
                 cb = cb || cf === "toggle";
                 if (cf === (cc ? "hide" : "show")) {
                     continue;
                 }
                 ce[b8] = (ch && ch[b8]) || bM.style(b9, b8);
             }
         }
         if (!bM.isEmptyObject(ce)) {
             if (ch) {
                 if ("hidden" in ch) {
                     cc = ch.hidden;
                 }
             } else {
                 ch = bM._data(b9, "fxshow", {});
             }
             if (cb) {
                 ch.hidden = !cc;
             }
             if (cc) {
                 bM(b9).show();
             } else {
                 ca.done(function () {
                     bM(b9).hide();
                 });
             }
             ca.done(function () {
                 var ck;
                 bM._removeData(b9, "fxshow");
                 for (ck in ce) {
                     bM.style(b9, ck, ce[ck]);
                 }
             });
             for (b8 in ce) {
                 ci = be(cc ? ch[b8] : 0, b8, ca);
                 if (!(b8 in ch)) {
                     ch[b8] = ci.start;
                     if (cc) {
                         ci.end = ci.start;
                         ci.start = b8 === "width" || b8 === "height" ? 1 : 0;
                     }
                 }
             }
         }
     }
     function J(b8, b7, ca, e, b9) {
         return new J.prototype.init(b8, b7, ca, e, b9);
     }
     bM.Tween = J;
     J.prototype = {
         constructor: J,
         init: function (b9, b7, cb, e, ca, b8) {
             this.elem = b9;
             this.prop = cb;
             this.easing = ca || "swing";
             this.options = b7;
             this.start = this.now = this.cur();
             this.end = e;
             this.unit = b8 || (bM.cssNumber[cb] ? "" : "px");
         },
         cur: function () {
             var e = J.propHooks[this.prop];
             return e && e.get ? e.get(this) : J.propHooks._default.get(this);
         },
         run: function (b8) {
             var b7,
                 e = J.propHooks[this.prop];
             if (this.options.duration) {
                 this.pos = b7 = bM.easing[this.easing](b8, this.options.duration * b8, 0, 1, this.options.duration);
             } else {
                 this.pos = b7 = b8;
             }
             this.now = (this.end - this.start) * b7 + this.start;
             if (this.options.step) {
                 this.options.step.call(this.elem, this.now, this);
             }
             if (e && e.set) {
                 e.set(this);
             } else {
                 J.propHooks._default.set(this);
             }
             return this;
         },
     };
     J.prototype.init.prototype = J.prototype;
     J.propHooks = {
         _default: {
             get: function (b7) {
                 var e;
                 if (b7.elem[b7.prop] != null && (!b7.elem.style || b7.elem.style[b7.prop] == null)) {
                     return b7.elem[b7.prop];
                 }
                 e = bM.css(b7.elem, b7.prop, "");
                 return !e || e === "auto" ? 0 : e;
             },
             set: function (e) {
                 if (bM.fx.step[e.prop]) {
                     bM.fx.step[e.prop](e);
                 } else {
                     if (e.elem.style && (e.elem.style[bM.cssProps[e.prop]] != null || bM.cssHooks[e.prop])) {
                         bM.style(e.elem, e.prop, e.now + e.unit);
                     } else {
                         e.elem[e.prop] = e.now;
                     }
                 }
             },
         },
     };
     J.propHooks.scrollTop = J.propHooks.scrollLeft = {
         set: function (e) {
             if (e.elem.nodeType && e.elem.parentNode) {
                 e.elem[e.prop] = e.now;
             }
         },
     };
     bM.each(["toggle", "show", "hide"], function (b7, e) {
         var b8 = bM.fn[e];
         bM.fn[e] = function (b9, cb, ca) {
             return b9 == null || typeof b9 === "boolean" ? b8.apply(this, arguments) : this.animate(bL(e, true), b9, cb, ca);
         };
     });
     bM.fn.extend({
         fadeTo: function (e, b9, b8, b7) {
             return this.filter(R).css("opacity", 0).show().end().animate({ opacity: b9 }, e, b8, b7);
         },
         animate: function (cc, b9, cb, ca) {
             var b8 = bM.isEmptyObject(cc),
                 e = bM.speed(b9, cb, ca),
                 b7 = function () {
                     var cd = f(this, bM.extend({}, cc), e);
                     if (b8 || bM._data(this, "finish")) {
                         cd.stop(true);
                     }
                 };
             b7.finish = b7;
             return b8 || e.queue === false ? this.each(b7) : this.queue(e.queue, b7);
         },
         stop: function (b8, b7, e) {
             var b9 = function (ca) {
                 var cb = ca.stop;
                 delete ca.stop;
                 cb(e);
             };
             if (typeof b8 !== "string") {
                 e = b7;
                 b7 = b8;
                 b8 = aI;
             }
             if (b7 && b8 !== false) {
                 this.queue(b8 || "fx", []);
             }
             return this.each(function () {
                 var cd = true,
                     ca = b8 != null && b8 + "queueHooks",
                     cc = bM.timers,
                     cb = bM._data(this);
                 if (ca) {
                     if (cb[ca] && cb[ca].stop) {
                         b9(cb[ca]);
                     }
                 } else {
                     for (ca in cb) {
                         if (cb[ca] && cb[ca].stop && bT.test(ca)) {
                             b9(cb[ca]);
                         }
                     }
                 }
                 for (ca = cc.length; ca--; ) {
                     if (cc[ca].elem === this && (b8 == null || cc[ca].queue === b8)) {
                         cc[ca].anim.stop(e);
                         cd = false;
                         cc.splice(ca, 1);
                     }
                 }
                 if (cd || !e) {
                     bM.dequeue(this, b8);
                 }
             });
         },
         finish: function (e) {
             if (e !== false) {
                 e = e || "fx";
             }
             return this.each(function () {
                 var b9,
                     cc = bM._data(this),
                     b8 = cc[e + "queue"],
                     b7 = cc[e + "queueHooks"],
                     cb = bM.timers,
                     ca = b8 ? b8.length : 0;
                 cc.finish = true;
                 bM.queue(this, e, []);
                 if (b7 && b7.stop) {
                     b7.stop.call(this, true);
                 }
                 for (b9 = cb.length; b9--; ) {
                     if (cb[b9].elem === this && cb[b9].queue === e) {
                         cb[b9].anim.stop(true);
                         cb.splice(b9, 1);
                     }
                 }
                 for (b9 = 0; b9 < ca; b9++) {
                     if (b8[b9] && b8[b9].finish) {
                         b8[b9].finish.call(this);
                     }
                 }
                 delete cc.finish;
             });
         },
     });
     function bL(b8, ca) {
         var b9,
             e = { height: b8 },
             b7 = 0;
         ca = ca ? 1 : 0;
         for (; b7 < 4; b7 += 2 - ca) {
             b9 = bW[b7];
             e["margin" + b9] = e["padding" + b9] = b8;
         }
         if (ca) {
             e.opacity = e.width = b8;
         }
         return e;
     }
     bM.each({ slideDown: bL("show"), slideUp: bL("hide"), slideToggle: bL("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, b7) {
         bM.fn[e] = function (b8, ca, b9) {
             return this.animate(b7, b8, ca, b9);
         };
     });
     bM.speed = function (b8, b9, b7) {
         var e = b8 && typeof b8 === "object" ? bM.extend({}, b8) : { complete: b7 || (!b7 && b9) || (bM.isFunction(b8) && b8), duration: b8, easing: (b7 && b9) || (b9 && !bM.isFunction(b9) && b9) };
         e.duration = bM.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bM.fx.speeds ? bM.fx.speeds[e.duration] : bM.fx.speeds._default;
         if (e.queue == null || e.queue === true) {
             e.queue = "fx";
         }
         e.old = e.complete;
         e.complete = function () {
             if (bM.isFunction(e.old)) {
                 e.old.call(this);
             }
             if (e.queue) {
                 bM.dequeue(this, e.queue);
             }
         };
         return e;
     };
     bM.easing = {
         linear: function (e) {
             return e;
         },
         swing: function (e) {
             return 0.5 - Math.cos(e * Math.PI) / 2;
         },
     };
     bM.timers = [];
     bM.fx = J.prototype.init;
     bM.fx.tick = function () {
         var b8,
             b7 = bM.timers,
             e = 0;
         N = bM.now();
         for (; e < b7.length; e++) {
             b8 = b7[e];
             if (!b8() && b7[e] === b8) {
                 b7.splice(e--, 1);
             }
         }
         if (!b7.length) {
             bM.fx.stop();
         }
         N = aI;
     };
     bM.fx.timer = function (e) {
         if (e() && bM.timers.push(e)) {
             bM.fx.start();
         }
     };
     bM.fx.interval = 13;
     bM.fx.start = function () {
         if (!af) {
             af = setInterval(bM.fx.tick, bM.fx.interval);
         }
     };
     bM.fx.stop = function () {
         clearInterval(af);
         af = null;
     };
     bM.fx.speeds = { slow: 600, fast: 200, _default: 400 };
     bM.fx.step = {};
     if (bM.expr && bM.expr.filters) {
         bM.expr.filters.animated = function (e) {
             return bM.grep(bM.timers, function (b7) {
                 return e === b7.elem;
             }).length;
         };
     }
     bM.fn.offset = function (b7) {
         if (arguments.length) {
             return b7 === aI
                 ? this
                 : this.each(function (cc) {
                       bM.offset.setOffset(this, b7, cc);
                   });
         }
         var e,
             cb,
             b9 = { top: 0, left: 0 },
             b8 = this[0],
             ca = b8 && b8.ownerDocument;
         if (!ca) {
             return;
         }
         e = ca.documentElement;
         if (!bM.contains(e, b8)) {
             return b9;
         }
         if (typeof b8.getBoundingClientRect !== aE) {
             b9 = b8.getBoundingClientRect();
         }
         cb = bs(ca);
         return { top: b9.top + (cb.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: b9.left + (cb.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) };
     };
     bM.offset = {
         setOffset: function (b9, ci, cc) {
             var cd = bM.css(b9, "position");
             if (cd === "static") {
                 b9.style.position = "relative";
             }
             var cb = bM(b9),
                 b7 = cb.offset(),
                 e = bM.css(b9, "top"),
                 cg = bM.css(b9, "left"),
                 ch = (cd === "absolute" || cd === "fixed") && bM.inArray("auto", [e, cg]) > -1,
                 cf = {},
                 ce = {},
                 b8,
                 ca;
             if (ch) {
                 ce = cb.position();
                 b8 = ce.top;
                 ca = ce.left;
             } else {
                 b8 = parseFloat(e) || 0;
                 ca = parseFloat(cg) || 0;
             }
             if (bM.isFunction(ci)) {
                 ci = ci.call(b9, cc, b7);
             }
             if (ci.top != null) {
                 cf.top = ci.top - b7.top + b8;
             }
             if (ci.left != null) {
                 cf.left = ci.left - b7.left + ca;
             }
             if ("using" in ci) {
                 ci.using.call(b9, cf);
             } else {
                 cb.css(cf);
             }
         },
     };
     bM.fn.extend({
         position: function () {
             if (!this[0]) {
                 return;
             }
             var b8,
                 b9,
                 e = { top: 0, left: 0 },
                 b7 = this[0];
             if (bM.css(b7, "position") === "fixed") {
                 b9 = b7.getBoundingClientRect();
             } else {
                 b8 = this.offsetParent();
                 b9 = this.offset();
                 if (!bM.nodeName(b8[0], "html")) {
                     e = b8.offset();
                 }
                 e.top += bM.css(b8[0], "borderTopWidth", true);
                 e.left += bM.css(b8[0], "borderLeftWidth", true);
             }
             return { top: b9.top - e.top - bM.css(b7, "marginTop", true), left: b9.left - e.left - bM.css(b7, "marginLeft", true) };
         },
         offsetParent: function () {
             return this.map(function () {
                 var e = this.offsetParent || bZ;
                 while (e && !bM.nodeName(e, "html") && bM.css(e, "position") === "static") {
                     e = e.offsetParent;
                 }
                 return e || bZ;
             });
         },
     });
     bM.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b8, b7) {
         var e = /Y/.test(b7);
         bM.fn[b8] = function (b9) {
             return bM.access(
                 this,
                 function (ca, cd, cc) {
                     var cb = bs(ca);
                     if (cc === aI) {
                         return cb ? (b7 in cb ? cb[b7] : cb.document.documentElement[cd]) : ca[cd];
                     }
                     if (cb) {
                         cb.scrollTo(!e ? cc : bM(cb).scrollLeft(), e ? cc : bM(cb).scrollTop());
                     } else {
                         ca[cd] = cc;
                     }
                 },
                 b8,
                 b9,
                 arguments.length,
                 null
             );
         };
     });
     function bs(e) {
         return bM.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false;
     }
     bM.each({ Height: "height", Width: "width" }, function (e, b7) {
         bM.each({ padding: "inner" + e, content: b7, "": "outer" + e }, function (b8, b9) {
             bM.fn[b9] = function (cd, cc) {
                 var cb = arguments.length && (b8 || typeof cd !== "boolean"),
                     ca = b8 || (cd === true || cc === true ? "margin" : "border");
                 return bM.access(
                     this,
                     function (cf, ce, cg) {
                         var ch;
                         if (bM.isWindow(cf)) {
                             return cf.document.documentElement["client" + e];
                         }
                         if (cf.nodeType === 9) {
                             ch = cf.documentElement;
                             return Math.max(cf.body["scroll" + e], ch["scroll" + e], cf.body["offset" + e], ch["offset" + e], ch["client" + e]);
                         }
                         return cg === aI ? bM.css(cf, ce, ca) : bM.style(cf, ce, cg, ca);
                     },
                     b7,
                     cb ? cd : aI,
                     cb,
                     null
                 );
             };
         });
     });
     bM.fn.size = function () {
         return this.length;
     };
     bM.fn.andSelf = bM.fn.addBack;
     if (typeof module === "object" && module && typeof module.exports === "object") {
         module.exports = bM;
     } else {
         a5.jQuery = a5.$ = bM;
         if (typeof define === "function" && define.amd) {
             define("jquery", [], function () {
                 return bM;
             });
         }
     }
 })(window);
 /*
  * jQuery Migrate - v1.1.1 - 2013-02-16
  * https://github.com/jquery/jquery-migrate
  * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
  */
 (function (v, s, k) {
     var H = {};
     v.migrateWarnings = [];
     v.migrateMute = true;
     v.migrateTrace = false;
     if (!v.migrateMute && s.console && console.log) {
         console.log("JQMIGRATE: Logging is active");
     }
     if (v.migrateTrace === k) {
         v.migrateTrace = true;
     }
     v.migrateReset = function () {
         H = {};
         v.migrateWarnings.length = 0;
     };
     function j(K) {
         if (!H[K]) {
             H[K] = true;
             v.migrateWarnings.push(K);
             if (s.console && console.warn && !v.migrateMute) {
                 console.warn("JQMIGRATE: " + K);
                 if (v.migrateTrace && console.trace) {
                     console.trace();
                 }
             }
         }
     }
     function a(M, O, L, N) {
         if (Object.defineProperty) {
             try {
                 Object.defineProperty(M, O, {
                     configurable: true,
                     enumerable: true,
                     get: function () {
                         j(N);
                         return L;
                     },
                     set: function (P) {
                         j(N);
                         L = P;
                     },
                 });
                 return;
             } catch (K) {}
         }
         v._definePropertyBroken = true;
         M[O] = L;
     }
     if (document.compatMode === "BackCompat") {
         j("jQuery is not compatible with Quirks Mode");
     }
     var f = v("<input/>", { size: 1 }).attr("size") && v.attrFn,
         B = v.attr,
         A =
             (v.attrHooks.value && v.attrHooks.value.get) ||
             function () {
                 return null;
             },
         l =
             (v.attrHooks.value && v.attrHooks.value.set) ||
             function () {
                 return k;
             },
         x = /^(?:input|button)$/i,
         C = /^[238]$/,
         F = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
         m = /^(?:checked|selected)$/i;
     a(v, "attrFn", f || {}, "jQuery.attrFn is deprecated");
     v.attr = function (O, M, P, N) {
         var L = M.toLowerCase(),
             K = O && O.nodeType;
         if (N) {
             if (B.length < 4) {
                 j("jQuery.fn.attr( props, pass ) is deprecated");
             }
             if (O && !C.test(K) && (f ? M in f : v.isFunction(v.fn[M]))) {
                 return v(O)[M](P);
             }
         }
         if (M === "type" && P !== k && x.test(O.nodeName) && O.parentNode) {
             j("Can't change the 'type' of an input or button in IE 6/7/8");
         }
         if (!v.attrHooks[L] && F.test(L)) {
             v.attrHooks[L] = {
                 get: function (R, Q) {
                     var T,
                         S = v.prop(R, Q);
                     return S === true || (typeof S !== "boolean" && (T = R.getAttributeNode(Q)) && T.nodeValue !== false) ? Q.toLowerCase() : k;
                 },
                 set: function (R, T, Q) {
                     var S;
                     if (T === false) {
                         v.removeAttr(R, Q);
                     } else {
                         S = v.propFix[Q] || Q;
                         if (S in R) {
                             R[S] = true;
                         }
                         R.setAttribute(Q, Q.toLowerCase());
                     }
                     return Q;
                 },
             };
             if (m.test(L)) {
                 j("jQuery.fn.attr('" + L + "') may use property instead of attribute");
             }
         }
         return B.call(v, O, M, P);
     };
     v.attrHooks.value = {
         get: function (L, K) {
             var M = (L.nodeName || "").toLowerCase();
             if (M === "button") {
                 return A.apply(this, arguments);
             }
             if (M !== "input" && M !== "option") {
                 j("jQuery.fn.attr('value') no longer gets properties");
             }
             return K in L ? L.value : null;
         },
         set: function (K, L) {
             var M = (K.nodeName || "").toLowerCase();
             if (M === "button") {
                 return l.apply(this, arguments);
             }
             if (M !== "input" && M !== "option") {
                 j("jQuery.fn.attr('value', val) no longer sets properties");
             }
             K.value = L;
         },
     };
     var t,
         I,
         D = v.fn.init,
         E = v.parseJSON,
         z = /^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;
     v.fn.init = function (K, N, M) {
         var L;
         if (K && typeof K === "string" && !v.isPlainObject(N) && (L = z.exec(K)) && L[1]) {
             if (K.charAt(0) !== "<") {
                 j("$(html) HTML strings must start with '<' character");
             }
             if (N && N.context) {
                 N = N.context;
             }
             if (v.parseHTML) {
                 return D.call(this, v.parseHTML(v.trim(K), N, true), N, M);
             }
         }
         return D.apply(this, arguments);
     };
     v.fn.init.prototype = v.fn;
     v.parseJSON = function (K) {
         if (!K && K !== null) {
             j("jQuery.parseJSON requires a valid JSON string");
             return null;
         }
         return E.apply(this, arguments);
     };
     v.uaMatch = function (L) {
         L = L.toLowerCase();
         var K =
             /(chrome)[ \/]([\w.]+)/.exec(L) || /(webkit)[ \/]([\w.]+)/.exec(L) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(L) || /(msie) ([\w.]+)/.exec(L) || (L.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(L)) || [];
         return { browser: K[1] || "", version: K[2] || "0" };
     };
     if (!v.browser) {
         t = v.uaMatch(navigator.userAgent);
         I = {};
         if (t.browser) {
             I[t.browser] = true;
             I.version = t.version;
         }
         if (I.chrome) {
             I.webkit = true;
         } else {
             if (I.webkit) {
                 I.safari = true;
             }
         }
         v.browser = I;
     }
     a(v, "browser", v.browser, "jQuery.browser is deprecated");
     v.sub = function () {
         function K(N, O) {
             return new K.fn.init(N, O);
         }
         v.extend(true, K, this);
         K.superclass = this;
         K.fn = K.prototype = this();
         K.fn.constructor = K;
         K.sub = this.sub;
         K.fn.init = function M(N, O) {
             if (O && O instanceof v && !(O instanceof K)) {
                 O = K(O);
             }
             return v.fn.init.call(this, N, O, L);
         };
         K.fn.init.prototype = K.fn;
         var L = K(document);
         j("jQuery.sub() is deprecated");
         return K;
     };
     v.ajaxSetup({ converters: { "text json": v.parseJSON } });
     var q = v.fn.data;
     v.fn.data = function (M) {
         var L,
             K,
             N = this[0];
         if (N && M === "events" && arguments.length === 1) {
             L = v.data(N, M);
             K = v._data(N, M);
             if ((L === k || L === K) && K !== k) {
                 j("Use of jQuery.fn.data('events') is deprecated");
                 return K;
             }
         }
         return q.apply(this, arguments);
     };
     var r = /\/(java|ecma)script/i,
         y = v.fn.andSelf || v.fn.addBack;
     v.fn.andSelf = function () {
         j("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
         return y.apply(this, arguments);
     };
     if (!v.clean) {
         v.clean = function (K, L, R, N) {
             L = L || document;
             L = (!L.nodeType && L[0]) || L;
             L = L.ownerDocument || L;
             j("jQuery.clean() is deprecated");
             var O,
                 M,
                 P,
                 S,
                 Q = [];
             v.merge(Q, v.buildFragment(K, L).childNodes);
             if (R) {
                 P = function (T) {
                     if (!T.type || r.test(T.type)) {
                         return N ? N.push(T.parentNode ? T.parentNode.removeChild(T) : T) : R.appendChild(T);
                     }
                 };
                 for (O = 0; (M = Q[O]) != null; O++) {
                     if (!(v.nodeName(M, "script") && P(M))) {
                         R.appendChild(M);
                         if (typeof M.getElementsByTagName !== "undefined") {
                             S = v.grep(v.merge([], M.getElementsByTagName("script")), P);
                             Q.splice.apply(Q, [O + 1, 0].concat(S));
                             O += S.length;
                         }
                     }
                 }
             }
             return Q;
         };
     }
     var c = v.event.add,
         b = v.event.remove,
         g = v.event.trigger,
         u = v.fn.toggle,
         d = v.fn.live,
         p = v.fn.die,
         G = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
         e = new RegExp("\\b(?:" + G + ")\\b"),
         J = /(?:^|\s)hover(\.\S+|)\b/,
         n = function (K) {
             if (typeof K !== "string" || v.event.special.hover) {
                 return K;
             }
             if (J.test(K)) {
                 j("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
             }
             return K && K.replace(J, "mouseenter$1 mouseleave$1");
         };
     if (v.event.props && v.event.props[0] !== "attrChange") {
         v.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
     }
     if (v.event.dispatch) {
         a(v.event, "handle", v.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
     }
     v.event.add = function (N, L, M, O, K) {
         if (N !== document && e.test(L)) {
             j("AJAX events should be attached to document: " + L);
         }
         c.call(this, N, n(L || ""), M, O, K);
     };
     v.event.remove = function (O, M, N, K, L) {
         b.call(this, O, n(M) || "", N, K, L);
     };
     v.fn.error = function () {
         var K = Array.prototype.slice.call(arguments, 0);
         j("jQuery.fn.error() is deprecated");
         K.splice(0, 0, "error");
         if (arguments.length) {
             return this.bind.apply(this, K);
         }
         this.triggerHandler.apply(this, K);
         return this;
     };
     v.fn.toggle = function (O, M) {
         if (!v.isFunction(O) || !v.isFunction(M)) {
             return u.apply(this, arguments);
         }
         j("jQuery.fn.toggle(handler, handler...) is deprecated");
         var L = arguments,
             K = O.guid || v.guid++,
             N = 0,
             P = function (Q) {
                 var R = (v._data(this, "lastToggle" + O.guid) || 0) % N;
                 v._data(this, "lastToggle" + O.guid, R + 1);
                 Q.preventDefault();
                 return L[R].apply(this, arguments) || false;
             };
         P.guid = K;
         while (N < L.length) {
             L[N++].guid = K;
         }
         return this.click(P);
     };
     v.fn.live = function (K, M, L) {
         j("jQuery.fn.live() is deprecated");
         if (d) {
             return d.apply(this, arguments);
         }
         v(this.context).on(K, this.selector, M, L);
         return this;
     };
     v.fn.die = function (K, L) {
         j("jQuery.fn.die() is deprecated");
         if (p) {
             return p.apply(this, arguments);
         }
         v(this.context).off(K, this.selector || "**", L);
         return this;
     };
     v.event.trigger = function (M, N, L, K) {
         if (!L && !e.test(M)) {
             j("Global events are undocumented and deprecated");
         }
         return g.call(this, M, N, L || document, K);
     };
     v.each(G.split("|"), function (L, K) {
         v.event.special[K] = {
             setup: function () {
                 var M = this;
                 if (M !== document) {
                     v.event.add(document, K + "." + v.guid, function () {
                         v.event.trigger(K, null, M, true);
                     });
                     v._data(this, K, v.guid++);
                 }
                 return false;
             },
             teardown: function () {
                 if (this !== document) {
                     v.event.remove(document, K + "." + v._data(this, K));
                 }
                 return false;
             },
         };
     });
 })(jQuery, window);
 /*
  * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
  *
  * Uses the built in easing capabilities added In jQuery 1.1
  * to offer multiple easing options
  *
  * TERMS OF USE - jQuery Easing
  *
  * Open source under the BSD License.
  *
  * Copyright ?? 2008 George McGinley Smith
  * All rights reserved.
  */
 $(document).ready(function () {
     jQuery.easing.jswing = jQuery.easing.swing;
     jQuery.extend(jQuery.easing, {
         def: "easeOutQuad",
         swing: function (e, f, a, j, g) {
             return jQuery.easing[jQuery.easing.def](e, f, a, j, g);
         },
         easeInQuad: function (e, f, a, j, g) {
             return j * (f /= g) * f + a;
         },
         easeOutQuad: function (e, f, a, j, g) {
             return -j * (f /= g) * (f - 2) + a;
         },
         easeInOutQuad: function (e, f, a, j, g) {
             if ((f /= g / 2) < 1) {
                 return (j / 2) * f * f + a;
             }
             return (-j / 2) * (--f * (f - 2) - 1) + a;
         },
         easeInCubic: function (e, f, a, j, g) {
             return j * (f /= g) * f * f + a;
         },
         easeOutCubic: function (e, f, a, j, g) {
             return j * ((f = f / g - 1) * f * f + 1) + a;
         },
         easeInOutCubic: function (e, f, a, j, g) {
             if ((f /= g / 2) < 1) {
                 return (j / 2) * f * f * f + a;
             }
             return (j / 2) * ((f -= 2) * f * f + 2) + a;
         },
         easeInQuart: function (e, f, a, j, g) {
             return j * (f /= g) * f * f * f + a;
         },
         easeOutQuart: function (e, f, a, j, g) {
             return -j * ((f = f / g - 1) * f * f * f - 1) + a;
         },
         easeInOutQuart: function (e, f, a, j, g) {
             if ((f /= g / 2) < 1) {
                 return (j / 2) * f * f * f * f + a;
             }
             return (-j / 2) * ((f -= 2) * f * f * f - 2) + a;
         },
         easeInQuint: function (e, f, a, j, g) {
             return j * (f /= g) * f * f * f * f + a;
         },
         easeOutQuint: function (e, f, a, j, g) {
             return j * ((f = f / g - 1) * f * f * f * f + 1) + a;
         },
         easeInOutQuint: function (e, f, a, j, g) {
             if ((f /= g / 2) < 1) {
                 return (j / 2) * f * f * f * f * f + a;
             }
             return (j / 2) * ((f -= 2) * f * f * f * f + 2) + a;
         },
         easeInSine: function (e, f, a, j, g) {
             return -j * Math.cos((f / g) * (Math.PI / 2)) + j + a;
         },
         easeOutSine: function (e, f, a, j, g) {
             return j * Math.sin((f / g) * (Math.PI / 2)) + a;
         },
         easeInOutSine: function (e, f, a, j, g) {
             return (-j / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
         },
         easeInExpo: function (e, f, a, j, g) {
             return f == 0 ? a : j * Math.pow(2, 10 * (f / g - 1)) + a;
         },
         easeOutExpo: function (e, f, a, j, g) {
             return f == g ? a + j : j * (-Math.pow(2, (-10 * f) / g) + 1) + a;
         },
         easeInOutExpo: function (e, f, a, j, g) {
             if (f == 0) {
                 return a;
             }
             if (f == g) {
                 return a + j;
             }
             if ((f /= g / 2) < 1) {
                 return (j / 2) * Math.pow(2, 10 * (f - 1)) + a;
             }
             return (j / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
         },
         easeInCirc: function (e, f, a, j, g) {
             return -j * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
         },
         easeOutCirc: function (e, f, a, j, g) {
             return j * Math.sqrt(1 - (f = f / g - 1) * f) + a;
         },
         easeInOutCirc: function (e, f, a, j, g) {
             if ((f /= g / 2) < 1) {
                 return (-j / 2) * (Math.sqrt(1 - f * f) - 1) + a;
             }
             return (j / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
         },
         easeInElastic: function (f, j, e, n, m) {
             var k = 1.70158;
             var l = 0;
             var g = n;
             if (j == 0) {
                 return e;
             }
             if ((j /= m) == 1) {
                 return e + n;
             }
             if (!l) {
                 l = m * 0.3;
             }
             if (g < Math.abs(n)) {
                 g = n;
                 var k = l / 4;
             } else {
                 var k = (l / (2 * Math.PI)) * Math.asin(n / g);
             }
             return -(g * Math.pow(2, 10 * (j -= 1)) * Math.sin(((j * m - k) * (2 * Math.PI)) / l)) + e;
         },
         easeOutElastic: function (f, j, e, n, m) {
             var k = 1.70158;
             var l = 0;
             var g = n;
             if (j == 0) {
                 return e;
             }
             if ((j /= m) == 1) {
                 return e + n;
             }
             if (!l) {
                 l = m * 0.3;
             }
             if (g < Math.abs(n)) {
                 g = n;
                 var k = l / 4;
             } else {
                 var k = (l / (2 * Math.PI)) * Math.asin(n / g);
             }
             return g * Math.pow(2, -10 * j) * Math.sin(((j * m - k) * (2 * Math.PI)) / l) + n + e;
         },
         easeInOutElastic: function (f, j, e, n, m) {
             var k = 1.70158;
             var l = 0;
             var g = n;
             if (j == 0) {
                 return e;
             }
             if ((j /= m / 2) == 2) {
                 return e + n;
             }
             if (!l) {
                 l = m * (0.3 * 1.5);
             }
             if (g < Math.abs(n)) {
                 g = n;
                 var k = l / 4;
             } else {
                 var k = (l / (2 * Math.PI)) * Math.asin(n / g);
             }
             if (j < 1) {
                 return -0.5 * (g * Math.pow(2, 10 * (j -= 1)) * Math.sin(((j * m - k) * (2 * Math.PI)) / l)) + e;
             }
             return g * Math.pow(2, -10 * (j -= 1)) * Math.sin(((j * m - k) * (2 * Math.PI)) / l) * 0.5 + n + e;
         },
         easeInBack: function (e, f, a, k, j, g) {
             if (g == undefined) {
                 g = 1.70158;
             }
             return k * (f /= j) * f * ((g + 1) * f - g) + a;
         },
         easeOutBack: function (e, f, a, k, j, g) {
             if (g == undefined) {
                 g = 1.70158;
             }
             return k * ((f = f / j - 1) * f * ((g + 1) * f + g) + 1) + a;
         },
         easeInOutBack: function (e, f, a, k, j, g) {
             if (g == undefined) {
                 g = 1.70158;
             }
             if ((f /= j / 2) < 1) {
                 return (k / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
             }
             return (k / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
         },
         easeInBounce: function (e, f, a, j, g) {
             return j - jQuery.easing.easeOutBounce(e, g - f, 0, j, g) + a;
         },
         easeOutBounce: function (e, f, a, j, g) {
             if ((f /= g) < 1 / 2.75) {
                 return j * (7.5625 * f * f) + a;
             } else {
                 if (f < 2 / 2.75) {
                     return j * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
                 } else {
                     if (f < 2.5 / 2.75) {
                         return j * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
                     } else {
                         return j * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
                     }
                 }
             }
         },
         easeInOutBounce: function (e, f, a, j, g) {
             if (f < g / 2) {
                 return jQuery.easing.easeInBounce(e, f * 2, 0, j, g) * 0.5 + a;
             }
             return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, j, g) * 0.5 + j * 0.5 + a;
         },
     });
     (function (c) {
         var a = (c.scrollTo = function (f, e, d) {
             c(window).scrollTo(f, e, d);
         });
         a.defaults = { axis: "xy", duration: parseFloat(c.fn.jquery) >= 1.3 ? 0 : 1 };
         a.window = function (d) {
             return c(window)._scrollable();
         };
         c.fn._scrollable = function () {
             return this.map(function () {
                 var e = this,
                     d = !e.nodeName || c.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
                 if (!d) {
                     return e;
                 }
                 var f = (e.contentWindow || e).document || e.ownerDocument || e;
                 return c.browser.safari || f.compatMode == "BackCompat" ? f.body : f.documentElement;
             });
         };
         c.fn.scrollTo = function (f, e, d) {
             if (typeof e == "object") {
                 d = e;
                 e = 0;
             }
             if (typeof d == "function") {
                 d = { onAfter: d };
             }
             if (f == "max") {
                 f = 9000000000;
             }
             d = c.extend({}, a.defaults, d);
             e = e || d.speed || d.duration;
             d.queue = d.queue && d.axis.length > 1;
             if (d.queue) {
                 e /= 2;
             }
             d.offset = b(d.offset);
             d.over = b(d.over);
             return this._scrollable()
                 .each(function () {
                     var n = this,
                         l = c(n),
                         m = f,
                         k,
                         g = {},
                         p = l.is("html,body");
                     switch (typeof m) {
                         case "number":
                         case "string":
                             if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(m)) {
                                 m = b(m);
                                 break;
                             }
                             m = c(m, this);
                         case "object":
                             if (m.is || m.style) {
                                 k = (m = c(m)).offset();
                             }
                     }
                     c.each(d.axis.split(""), function (t, u) {
                         var v = u == "x" ? "Left" : "Top",
                             y = v.toLowerCase(),
                             s = "scroll" + v,
                             r = n[s],
                             q = a.max(n, u);
                         if (k) {
                             g[s] = k[y] + (p ? 0 : r - l.offset()[y]);
                             if (d.margin) {
                                 g[s] -= parseInt(m.css("margin" + v)) || 0;
                                 g[s] -= parseInt(m.css("border" + v + "Width")) || 0;
                             }
                             g[s] += d.offset[y] || 0;
                             if (d.over[y]) {
                                 g[s] += m[u == "x" ? "width" : "height"]() * d.over[y];
                             }
                         } else {
                             var x = m[y];
                             g[s] = x.slice && x.slice(-1) == "%" ? (parseFloat(x) / 100) * q : x;
                         }
                         if (/^\d+$/.test(g[s])) {
                             g[s] = g[s] <= 0 ? 0 : Math.min(g[s], q);
                         }
                         if (!t && d.queue) {
                             if (r != g[s]) {
                                 j(d.onAfterFirst);
                             }
                             delete g[s];
                         }
                     });
                     j(d.onAfter);
                     function j(q) {
                         l.animate(
                             g,
                             e,
                             d.easing,
                             q &&
                                 function () {
                                     q.call(this, f, d);
                                 }
                         );
                     }
                 })
                 .end();
         };
         a.max = function (l, k) {
             var j = k == "x" ? "Width" : "Height",
                 e = "scroll" + j;
             if (!c(l).is("html,body")) {
                 return l[e] - c(l)[j.toLowerCase()]();
             }
             var g = "client" + j,
                 f = l.ownerDocument.documentElement,
                 d = l.ownerDocument.body;
             return Math.max(f[e], d[e]) - Math.min(f[g], d[g]);
         };
         function b(d) {
             return typeof d == "object" ? d : { top: d, left: d };
         }
     })(jQuery);
 });
 /*
  * jQuery Form Plugin
  * version: 3.18 (28-SEP-2012)
  * @requires jQuery v1.5 or later
  *
  * Examples and documentation at: http://malsup.com/jquery/form/
  * Project repository: https://github.com/malsup/form
  * Dual licensed under the MIT and GPL licenses:
  *    http://malsup.github.com/mit-license.txt
  *    http://malsup.github.com/gpl-license-v2.txt
  */
 (function (e) {
     var c = {};
     c.fileapi = e("<input type='file'/>").get(0).files !== undefined;
     c.formdata = window.FormData !== undefined;
     e.fn.ajaxSubmit = function (j) {
         if (!this.length) {
             d("ajaxSubmit: skipping submit process - no element selected");
             return this;
         }
         var g,
             C,
             m,
             p = this;
         if (typeof j == "function") {
             j = { success: j };
         }
         g = this.attr("method");
         C = this.attr("action");
         m = typeof C === "string" ? e.trim(C) : "";
         m = m || window.location.href || "";
         if (m) {
             m = (m.match(/^([^#]+)/) || [])[1];
         }
         j = e.extend(true, { url: m, success: e.ajaxSettings.success, type: g || "GET", iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, j);
         var v = {};
         this.trigger("form-pre-serialize", [this, j, v]);
         if (v.veto) {
             d("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
             return this;
         }
         if (j.beforeSerialize && j.beforeSerialize(this, j) === false) {
             d("ajaxSubmit: submit aborted via beforeSerialize callback");
             return this;
         }
         var n = j.traditional;
         if (n === undefined) {
             n = e.ajaxSettings.traditional;
         }
         var t = [];
         var F,
             G = this.formToArray(j.semantic, t);
         if (j.data) {
             j.extraData = j.data;
             F = e.param(j.data, n);
         }
         if (j.beforeSubmit && j.beforeSubmit(G, this, j) === false) {
             d("ajaxSubmit: submit aborted via beforeSubmit callback");
             return this;
         }
         this.trigger("form-submit-validate", [G, this, j, v]);
         if (v.veto) {
             d("ajaxSubmit: submit vetoed via form-submit-validate trigger");
             return this;
         }
         var A = e.param(G, n);
         if (F) {
             A = A ? A + "&" + F : F;
         }
         if (j.type.toUpperCase() == "GET") {
             j.url += (j.url.indexOf("?") >= 0 ? "&" : "?") + A;
             j.data = null;
         } else {
             j.data = A;
         }
         var I = [];
         if (j.resetForm) {
             I.push(function () {
                 p.resetForm();
             });
         }
         if (j.clearForm) {
             I.push(function () {
                 p.clearForm(j.includeHidden);
             });
         }
         if (!j.dataType && j.target) {
             var l = j.success || function () {};
             I.push(function (q) {
                 var k = j.replaceTarget ? "replaceWith" : "html";
                 e(j.target)[k](q).each(l, arguments);
             });
         } else {
             if (j.success) {
                 I.push(j.success);
             }
         }
         j.success = function (L, q, M) {
             var K = j.context || this;
             for (var J = 0, k = I.length; J < k; J++) {
                 I[J].apply(K, [L, q, M || p, p]);
             }
         };
         var E = e("input:file:enabled[value]", this);
         var r = E.length > 0;
         var D = "multipart/form-data";
         var z = p.attr("enctype") == D || p.attr("encoding") == D;
         var y = c.fileapi && c.formdata;
         d("fileAPI :" + y);
         var s = (r || z) && !y;
         var x;
         if (j.iframe !== false && (j.iframe || s)) {
             if (j.closeKeepAlive) {
                 e.get(j.closeKeepAlive, function () {
                     x = H(G);
                 });
             } else {
                 x = H(G);
             }
         } else {
             if ((r || z) && y) {
                 x = u(G);
             } else {
                 x = e.ajax(j);
             }
         }
         p.removeData("jqxhr").data("jqxhr", x);
         for (var B = 0; B < t.length; B++) {
             t[B] = null;
         }
         this.trigger("form-submit-notify", [this, j]);
         return this;
         function f(L) {
             var M = e.param(L).split("&");
             var q = M.length;
             var k = {};
             var K, J;
             for (K = 0; K < q; K++) {
                 J = M[K].split("=");
                 k[decodeURIComponent(J[0])] = decodeURIComponent(J[1]);
             }
             return k;
         }
         function u(q) {
             var k = new FormData();
             for (var J = 0; J < q.length; J++) {
                 k.append(q[J].name, q[J].value);
             }
             if (j.extraData) {
                 var M = f(j.extraData);
                 for (var N in M) {
                     if (M.hasOwnProperty(N)) {
                         k.append(N, M[N]);
                     }
                 }
             }
             j.data = null;
             var L = e.extend(true, {}, e.ajaxSettings, j, { contentType: false, processData: false, cache: false, type: g || "POST" });
             if (j.uploadProgress) {
                 L.xhr = function () {
                     var O = jQuery.ajaxSettings.xhr();
                     if (O.upload) {
                         O.upload.onprogress = function (S) {
                             var R = 0;
                             var P = S.loaded || S.position;
                             var Q = S.total;
                             if (S.lengthComputable) {
                                 R = Math.ceil((P / Q) * 100);
                             }
                             j.uploadProgress(S, P, Q, R);
                         };
                     }
                     return O;
                 };
             }
             L.data = null;
             var K = L.beforeSend;
             L.beforeSend = function (P, O) {
                 O.data = k;
                 if (K) {
                     K.call(this, P, O);
                 }
             };
             return e.ajax(L);
         }
         function H(ah) {
             var M = p[0],
                 L,
                 ad,
                 X,
                 af,
                 aa,
                 O,
                 S,
                 Q,
                 R,
                 ab,
                 ae,
                 V;
             var P = !!e.fn.prop;
             var ak = e.Deferred();
             if (e(":input[name=submit],:input[id=submit]", M).length) {
                 alert('Error: Form elements must not have name or id of "submit".');
                 ak.reject();
                 return ak;
             }
             if (ah) {
                 for (ad = 0; ad < t.length; ad++) {
                     L = e(t[ad]);
                     if (P) {
                         L.prop("disabled", false);
                     } else {
                         L.removeAttr("disabled");
                     }
                 }
             }
             X = e.extend(true, {}, e.ajaxSettings, j);
             X.context = X.context || X;
             aa = "jqFormIO" + new Date().getTime();
             if (X.iframeTarget) {
                 O = e(X.iframeTarget);
                 ab = O.attr("name");
                 if (!ab) {
                     O.attr("name", aa);
                 } else {
                     aa = ab;
                 }
             } else {
                 O = e('<iframe name="' + aa + '" src="' + X.iframeSrc + '" />');
                 O.css({ position: "absolute", top: "-1000px", left: "-1000px" });
             }
             S = O[0];
             Q = {
                 aborted: 0,
                 responseText: null,
                 responseXML: null,
                 status: 0,
                 statusText: "n/a",
                 getAllResponseHeaders: function () {},
                 getResponseHeader: function () {},
                 setRequestHeader: function () {},
                 abort: function (al) {
                     var am = al === "timeout" ? "timeout" : "aborted";
                     d("aborting upload... " + am);
                     this.aborted = 1;
                     if (S.contentWindow.document.execCommand) {
                         try {
                             S.contentWindow.document.execCommand("Stop");
                         } catch (an) {}
                     }
                     O.attr("src", X.iframeSrc);
                     Q.error = am;
                     if (X.error) {
                         X.error.call(X.context, Q, am, al);
                     }
                     if (af) {
                         e.event.trigger("ajaxError", [Q, X, am]);
                     }
                     if (X.complete) {
                         X.complete.call(X.context, Q, am);
                     }
                 },
             };
             af = X.global;
             if (af && 0 === e.active++) {
                 e.event.trigger("ajaxStart");
             }
             if (af) {
                 e.event.trigger("ajaxSend", [Q, X]);
             }
             if (X.beforeSend && X.beforeSend.call(X.context, Q, X) === false) {
                 if (X.global) {
                     e.active--;
                 }
                 ak.reject();
                 return ak;
             }
             if (Q.aborted) {
                 ak.reject();
                 return ak;
             }
             R = M.clk;
             if (R) {
                 ab = R.name;
                 if (ab && !R.disabled) {
                     X.extraData = X.extraData || {};
                     X.extraData[ab] = R.value;
                     if (R.type == "image") {
                         X.extraData[ab + ".x"] = M.clk_x;
                         X.extraData[ab + ".y"] = M.clk_y;
                     }
                 }
             }
             var W = 1;
             var T = 2;
             function U(am) {
                 var al = am.contentWindow ? am.contentWindow.document : am.contentDocument ? am.contentDocument : am.document;
                 return al;
             }
             var K = e("meta[name=csrf-token]").attr("content");
             var J = e("meta[name=csrf-param]").attr("content");
             if (J && K) {
                 X.extraData = X.extraData || {};
                 X.extraData[J] = K;
             }
             function ac() {
                 var an = p.attr("target"),
                     al = p.attr("action");
                 M.setAttribute("target", aa);
                 if (!g) {
                     M.setAttribute("method", "POST");
                 }
                 if (al != X.url) {
                     M.setAttribute("action", X.url);
                 }
                 if (!X.skipEncodingOverride && (!g || /post/i.test(g))) {
                     p.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" });
                 }
                 if (X.timeout) {
                     V = setTimeout(function () {
                         ae = true;
                         Z(W);
                     }, X.timeout);
                 }
                 function ao() {
                     try {
                         var aq = U(S).readyState;
                         d("state = " + aq);
                         if (aq && aq.toLowerCase() == "uninitialized") {
                             setTimeout(ao, 50);
                         }
                     } catch (ar) {
                         d("Server abort: ", ar, " (", ar.name, ")");
                         Z(T);
                         if (V) {
                             clearTimeout(V);
                         }
                         V = undefined;
                     }
                 }
                 var am = [];
                 try {
                     if (X.extraData) {
                         for (var ap in X.extraData) {
                             if (X.extraData.hasOwnProperty(ap)) {
                                 if (e.isPlainObject(X.extraData[ap]) && X.extraData[ap].hasOwnProperty("name") && X.extraData[ap].hasOwnProperty("value")) {
                                     am.push(
                                         e('<input type="hidden" name="' + X.extraData[ap].name + '">')
                                             .attr("value", X.extraData[ap].value)
                                             .appendTo(M)[0]
                                     );
                                 } else {
                                     am.push(
                                         e('<input type="hidden" name="' + ap + '">')
                                             .attr("value", X.extraData[ap])
                                             .appendTo(M)[0]
                                     );
                                 }
                             }
                         }
                     }
                     if (!X.iframeTarget) {
                         O.appendTo("body");
                         if (S.attachEvent) {
                             S.attachEvent("onload", Z);
                         } else {
                             S.addEventListener("load", Z, false);
                         }
                     }
                     setTimeout(ao, 15);
                     M.submit();
                 } finally {
                     M.setAttribute("action", al);
                     if (an) {
                         M.setAttribute("target", an);
                     } else {
                         p.removeAttr("target");
                     }
                     e(am).remove();
                 }
             }
             if (X.forceSync) {
                 ac();
             } else {
                 setTimeout(ac, 10);
             }
             var ai,
                 aj,
                 ag = 50,
                 N;
             function Z(aq) {
                 if (Q.aborted || N) {
                     return;
                 }
                 try {
                     aj = U(S);
                 } catch (au) {
                     d("cannot access response document: ", au);
                     aq = T;
                 }
                 if (aq === W && Q) {
                     Q.abort("timeout");
                     ak.reject(Q, "timeout");
                     return;
                 } else {
                     if (aq == T && Q) {
                         Q.abort("server abort");
                         ak.reject(Q, "error", "server abort");
                         return;
                     }
                 }
                 if (!aj || aj.location.href == X.iframeSrc) {
                     if (!ae) {
                         return;
                     }
                 }
                 if (S.detachEvent) {
                     S.detachEvent("onload", Z);
                 } else {
                     S.removeEventListener("load", Z, false);
                 }
                 var ao = "success",
                     at;
                 try {
                     if (ae) {
                         throw "timeout";
                     }
                     var an = X.dataType == "xml" || aj.XMLDocument || e.isXMLDoc(aj);
                     d("isXml=" + an);
                     if (!an && window.opera && (aj.body === null || !aj.body.innerHTML)) {
                         if (--ag) {
                             d("requeing onLoad callback, DOM not available");
                             setTimeout(Z, 250);
                             return;
                         }
                     }
                     var av = aj.body ? aj.body : aj.documentElement;
                     Q.responseText = av ? av.innerHTML : null;
                     Q.responseXML = aj.XMLDocument ? aj.XMLDocument : aj;
                     if (an) {
                         X.dataType = "xml";
                     }
                     Q.getResponseHeader = function (ay) {
                         var ax = { "content-type": X.dataType };
                         return ax[ay];
                     };
                     if (av) {
                         Q.status = Number(av.getAttribute("status")) || Q.status;
                         Q.statusText = av.getAttribute("statusText") || Q.statusText;
                     }
                     var al = (X.dataType || "").toLowerCase();
                     var ar = /(json|script|text)/.test(al);
                     if (ar || X.textarea) {
                         var ap = aj.getElementsByTagName("textarea")[0];
                         if (ap) {
                             Q.responseText = ap.value;
                             Q.status = Number(ap.getAttribute("status")) || Q.status;
                             Q.statusText = ap.getAttribute("statusText") || Q.statusText;
                         } else {
                             if (ar) {
                                 var am = aj.getElementsByTagName("pre")[0];
                                 var aw = aj.getElementsByTagName("body")[0];
                                 if (am) {
                                     Q.responseText = am.textContent ? am.textContent : am.innerText;
                                 } else {
                                     if (aw) {
                                         Q.responseText = aw.textContent ? aw.textContent : aw.innerText;
                                     }
                                 }
                             }
                         }
                     } else {
                         if (al == "xml" && !Q.responseXML && Q.responseText) {
                             Q.responseXML = Y(Q.responseText);
                         }
                     }
                     try {
                         ai = k(Q, al, X);
                     } catch (aq) {
                         ao = "parsererror";
                         Q.error = at = aq || ao;
                     }
                 } catch (aq) {
                     d("error caught: ", aq);
                     ao = "error";
                     Q.error = at = aq || ao;
                 }
                 if (Q.aborted) {
                     d("upload aborted");
                     ao = null;
                 }
                 if (Q.status) {
                     ao = (Q.status >= 200 && Q.status < 300) || Q.status === 304 ? "success" : "error";
                 }
                 if (ao === "success") {
                     if (X.success) {
                         X.success.call(X.context, ai, "success", Q);
                     }
                     ak.resolve(Q.responseText, "success", Q);
                     if (af) {
                         e.event.trigger("ajaxSuccess", [Q, X]);
                     }
                 } else {
                     if (ao) {
                         if (at === undefined) {
                             at = Q.statusText;
                         }
                         if (X.error) {
                             X.error.call(X.context, Q, ao, at);
                         }
                         ak.reject(Q, "error", at);
                         if (af) {
                             e.event.trigger("ajaxError", [Q, X, at]);
                         }
                     }
                 }
                 if (af) {
                     e.event.trigger("ajaxComplete", [Q, X]);
                 }
                 if (af && !--e.active) {
                     e.event.trigger("ajaxStop");
                 }
                 if (X.complete) {
                     X.complete.call(X.context, Q, ao);
                 }
                 N = true;
                 if (X.timeout) {
                     clearTimeout(V);
                 }
                 setTimeout(function () {
                     if (!X.iframeTarget) {
                         O.remove();
                     }
                     Q.responseXML = null;
                 }, 100);
             }
             var Y =
                 e.parseXML ||
                 function (al, am) {
                     if (window.ActiveXObject) {
                         am = new ActiveXObject("Microsoft.XMLDOM");
                         am.async = "false";
                         am.loadXML(al);
                     } else {
                         am = new DOMParser().parseFromString(al, "text/xml");
                     }
                     return am && am.documentElement && am.documentElement.nodeName != "parsererror" ? am : null;
                 };
             var q =
                 e.parseJSON ||
                 function (al) {
                     return window["eval"]("(" + al + ")");
                 };
             var k = function (aq, ao, an) {
                 var am = aq.getResponseHeader("content-type") || "",
                     al = ao === "xml" || (!ao && am.indexOf("xml") >= 0),
                     ap = al ? aq.responseXML : aq.responseText;
                 if (al && ap.documentElement.nodeName === "parsererror") {
                     if (e.error) {
                         e.error("parsererror");
                     }
                 }
                 if (an && an.dataFilter) {
                     ap = an.dataFilter(ap, ao);
                 }
                 if (typeof ap === "string") {
                     if (ao === "json" || (!ao && am.indexOf("json") >= 0)) {
                         ap = q(ap);
                     } else {
                         if (ao === "script" || (!ao && am.indexOf("javascript") >= 0)) {
                             e.globalEval(ap);
                         }
                     }
                 }
                 return ap;
             };
             return ak;
         }
     };
     e.fn.ajaxForm = function (f) {
         f = f || {};
         f.delegation = f.delegation && e.isFunction(e.fn.on);
         if (!f.delegation && this.length === 0) {
             var g = { s: this.selector, c: this.context };
             if (!e.isReady && g.s) {
                 d("DOM not ready, queuing ajaxForm");
                 e(function () {
                     e(g.s, g.c).ajaxForm(f);
                 });
                 return this;
             }
             d("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)"));
             return this;
         }
         if (f.delegation) {
             e(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, a).on("submit.form-plugin", this.selector, f, b).on("click.form-plugin", this.selector, f, a);
             return this;
         }
         return this.ajaxFormUnbind().bind("submit.form-plugin", f, b).bind("click.form-plugin", f, a);
     };
     function b(g) {
         var f = g.data;
         if (!g.isDefaultPrevented()) {
             g.preventDefault();
             e(this).ajaxSubmit(f);
         }
     }
     function a(l) {
         var k = l.target;
         var g = e(k);
         if (!g.is(":submit,input:image")) {
             var f = g.closest(":submit");
             if (f.length === 0) {
                 return;
             }
             k = f[0];
         }
         var j = this;
         j.clk = k;
         if (k.type == "image") {
             if (l.offsetX !== undefined) {
                 j.clk_x = l.offsetX;
                 j.clk_y = l.offsetY;
             } else {
                 if (typeof e.fn.offset == "function") {
                     var m = g.offset();
                     j.clk_x = l.pageX - m.left;
                     j.clk_y = l.pageY - m.top;
                 } else {
                     j.clk_x = l.pageX - k.offsetLeft;
                     j.clk_y = l.pageY - k.offsetTop;
                 }
             }
         }
         setTimeout(function () {
             j.clk = j.clk_x = j.clk_y = null;
         }, 100);
     }
     e.fn.ajaxFormUnbind = function () {
         return this.unbind("submit.form-plugin click.form-plugin");
     };
     e.fn.formToArray = function (z, f) {
         var y = [];
         if (this.length === 0) {
             return y;
         }
         var l = this[0];
         var q = z ? l.getElementsByTagName("*") : l.elements;
         if (!q) {
             return y;
         }
         var s, r, p, A, m, u, k;
         for (s = 0, u = q.length; s < u; s++) {
             m = q[s];
             p = m.name;
             if (!p) {
                 continue;
             }
             if (z && l.clk && m.type == "image") {
                 if (!m.disabled && l.clk == m) {
                     y.push({ name: p, value: e(m).val(), type: m.type });
                     y.push({ name: p + ".x", value: l.clk_x }, { name: p + ".y", value: l.clk_y });
                 }
                 continue;
             }
             A = e.fieldValue(m, true);
             if (A && A.constructor == Array) {
                 if (f) {
                     f.push(m);
                 }
                 for (r = 0, k = A.length; r < k; r++) {
                     y.push({ name: p, value: A[r] });
                 }
             } else {
                 if (c.fileapi && m.type == "file" && !m.disabled) {
                     if (f) {
                         f.push(m);
                     }
                     var g = m.files;
                     if (g.length) {
                         for (r = 0; r < g.length; r++) {
                             y.push({ name: p, value: g[r], type: m.type });
                         }
                     } else {
                         y.push({ name: p, value: "", type: m.type });
                     }
                 } else {
                     if (A !== null && typeof A != "undefined") {
                         if (f) {
                             f.push(m);
                         }
                         y.push({ name: p, value: A, type: m.type, required: m.required });
                     }
                 }
             }
         }
         if (!z && l.clk) {
             var t = e(l.clk),
                 x = t[0];
             p = x.name;
             if (p && !x.disabled && x.type == "image") {
                 y.push({ name: p, value: t.val() });
                 y.push({ name: p + ".x", value: l.clk_x }, { name: p + ".y", value: l.clk_y });
             }
         }
         return y;
     };
     e.fn.formSerialize = function (f) {
         return e.param(this.formToArray(f));
     };
     e.fn.fieldSerialize = function (g) {
         var f = [];
         this.each(function () {
             var m = this.name;
             if (!m) {
                 return;
             }
             var k = e.fieldValue(this, g);
             if (k && k.constructor == Array) {
                 for (var l = 0, j = k.length; l < j; l++) {
                     f.push({ name: m, value: k[l] });
                 }
             } else {
                 if (k !== null && typeof k != "undefined") {
                     f.push({ name: this.name, value: k });
                 }
             }
         });
         return e.param(f);
     };
     e.fn.fieldValue = function (m) {
         for (var l = [], j = 0, f = this.length; j < f; j++) {
             var k = this[j];
             var g = e.fieldValue(k, m);
             if (g === null || typeof g == "undefined" || (g.constructor == Array && !g.length)) {
                 continue;
             }
             if (g.constructor == Array) {
                 e.merge(l, g);
             } else {
                 l.push(g);
             }
         }
         return l;
     };
     e.fieldValue = function (f, p) {
         var j = f.name,
             x = f.type,
             y = f.tagName.toLowerCase();
         if (p === undefined) {
             p = true;
         }
         if (p && (!j || f.disabled || x == "reset" || x == "button" || ((x == "checkbox" || x == "radio") && !f.checked) || ((x == "submit" || x == "image") && f.form && f.form.clk != f) || (y == "select" && f.selectedIndex == -1))) {
             return null;
         }
         if (y == "select") {
             var q = f.selectedIndex;
             if (q < 0) {
                 return null;
             }
             var s = [],
                 g = f.options;
             var l = x == "select-one";
             var r = l ? q + 1 : g.length;
             for (var k = l ? q : 0; k < r; k++) {
                 var m = g[k];
                 if (m.selected) {
                     var u = m.value;
                     if (!u) {
                         u = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value;
                     }
                     if (l) {
                         return u;
                     }
                     s.push(u);
                 }
             }
             return s;
         }
         return e(f).val();
     };
     e.fn.clearForm = function (f) {
         return this.each(function () {
             e("input,select,textarea", this).clearFields(f);
         });
     };
     e.fn.clearFields = e.fn.clearInputs = function (f) {
         var g = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
         return this.each(function () {
             var k = this.type,
                 j = this.tagName.toLowerCase();
             if (g.test(k) || j == "textarea") {
                 this.value = "";
             } else {
                 if (k == "checkbox" || k == "radio") {
                     this.checked = false;
                 } else {
                     if (j == "select") {
                         this.selectedIndex = -1;
                     } else {
                         if (f) {
                             if ((f === true && /hidden/.test(k)) || (typeof f == "string" && e(this).is(f))) {
                                 this.value = "";
                             }
                         }
                     }
                 }
             }
         });
     };
     e.fn.resetForm = function () {
         return this.each(function () {
             if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) {
                 this.reset();
             }
         });
     };
     e.fn.enable = function (f) {
         if (f === undefined) {
             f = true;
         }
         return this.each(function () {
             this.disabled = !f;
         });
     };
     e.fn.selected = function (f) {
         if (f === undefined) {
             f = true;
         }
         return this.each(function () {
             var g = this.type;
             if (g == "checkbox" || g == "radio") {
                 this.checked = f;
             } else {
                 if (this.tagName.toLowerCase() == "option") {
                     var j = e(this).parent("select");
                     if (f && j[0] && j[0].type == "select-one") {
                         j.find("option").selected(false);
                     }
                     this.selected = f;
                 }
             }
         });
     };
     e.fn.ajaxSubmit.debug = false;
     function d() {
         if (!e.fn.ajaxSubmit.debug) {
             return;
         }
         var f = "[jquery.form] " + Array.prototype.join.call(arguments, "");
         if (window.console && window.console.log) {
             window.console.log(f);
         } else {
             if (window.opera && window.opera.postError) {
                 window.opera.postError(f);
             }
         }
     }
 })(jQuery);
 /*
  * jquery.Jcrop.js v0.9.8
  * jQuery Image Cropping Plugin
  * @author Kelly Hallman <khallman@gmail.com>
  * Copyright (c) 2008-2009 Kelly Hallman - released under MIT License {{{
  *
  * Permission is hereby granted, free of charge, to any person
  * obtaining a copy of this software and associated documentation
  * files (the "Software"), to deal in the Software without
  * restriction, including without limitation the rights to use,
  * copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the
  * Software is furnished to do so, subject to the following
  * conditions:
  */
 (function (a) {
     a.Jcrop = function (d, B) {
         var d = d,
             B = B;
         if (typeof d !== "object") {
             d = a(d)[0];
         }
         if (typeof B !== "object") {
             B = {};
         }
         if (!("trackDocument" in B)) {
             B.trackDocument = a.browser.msie ? false : true;
             if (a.browser.msie && a.browser.version.split(".")[0] == "8") {
                 B.trackDocument = true;
             }
         }
         if (!("keySupport" in B)) {
             B.keySupport = a.browser.msie ? false : true;
         }
         var V = {
             trackDocument: false,
             baseClass: "jcrop",
             addClass: null,
             bgColor: "black",
             bgOpacity: 0.6,
             borderOpacity: 0.4,
             handleOpacity: 0.5,
             handlePad: 5,
             handleSize: 9,
             handleOffset: 5,
             edgeMargin: 14,
             aspectRatio: 0,
             keySupport: true,
             cornerHandles: true,
             sideHandles: true,
             drawBorders: true,
             dragEdges: true,
             boxWidth: 0,
             boxHeight: 0,
             boundary: 8,
             animationDelay: 20,
             swingSpeed: 3,
             allowSelect: true,
             allowMove: true,
             allowResize: true,
             minSelect: [0, 0],
             maxSize: [0, 0],
             minSize: [0, 0],
             onChange: function () {},
             onSelect: function () {},
             onkeydown: function () {},
         };
         var I = V;
         A(B);
         var X = a(d);
         var am = X.clone().removeAttr("id").css({ position: "absolute" });
         am.width(X.width());
         am.height(X.height());
         X.after(am).hide();
         U(am, I.boxWidth, I.boxHeight);
         var R = am.width(),
             P = am.height(),
             aa = a("<div />").width(R).height(P).addClass(D("holder")).css({ position: "relative", backgroundColor: I.bgColor }).insertAfter(X).append(am);
         if (I.addClass) {
             aa.addClass(I.addClass);
         }
         var J = a("<img />").attr("src", am.attr("src")).css("position", "absolute").width(R).height(P);
         var k = a("<div />").width(L(100)).height(L(100)).css({ zIndex: 310, position: "absolute", overflow: "hidden" }).append(J);
         var M = a("<div />").width(L(100)).height(L(100)).css("zIndex", 320);
         var z = a("<div />").css({ position: "absolute", zIndex: 300 }).insertBefore(am).append(k, M);
         var u = I.boundary;
         var b = af()
             .width(R + u * 2)
             .height(P + u * 2)
             .css({ position: "absolute", top: l(-u), left: l(-u), zIndex: 290 })
             .mousedown(ad);
         var y, ai, q, T;
         var N,
             e,
             n = true;
         var ae = E(am),
             s,
             ao,
             an,
             C,
             ac;
         var ab = (function () {
             var ar = 0,
                 aD = 0,
                 aq = 0,
                 aC = 0,
                 av,
                 at;
             function ax(aG) {
                 var aG = au(aG);
                 aq = ar = aG[0];
                 aC = aD = aG[1];
             }
             function aw(aG) {
                 var aG = au(aG);
                 av = aG[0] - aq;
                 at = aG[1] - aC;
                 aq = aG[0];
                 aC = aG[1];
             }
             function aF() {
                 return [av, at];
             }
             function ap(aI) {
                 var aH = aI[0],
                     aG = aI[1];
                 if (0 > ar + aH) {
                     aH -= aH + ar;
                 }
                 if (0 > aD + aG) {
                     aG -= aG + aD;
                 }
                 if (P < aC + aG) {
                     aG += P - (aC + aG);
                 }
                 if (R < aq + aH) {
                     aH += R - (aq + aH);
                 }
                 ar += aH;
                 aq += aH;
                 aD += aG;
                 aC += aG;
             }
             function ay(aG) {
                 var aH = aE();
                 switch (aG) {
                     case "ne":
                         return [aH.x2, aH.y];
                     case "nw":
                         return [aH.x, aH.y];
                     case "se":
                         return [aH.x2, aH.y2];
                     case "sw":
                         return [aH.x, aH.y2];
                 }
             }
             function aE() {
                 if (!I.aspectRatio) {
                     return aB();
                 }
                 var aI = I.aspectRatio,
                     aP = I.minSize[0] / N,
                     aO = I.minSize[1] / e,
                     aH = I.maxSize[0] / N,
                     aR = I.maxSize[1] / e,
                     aJ = aq - ar,
                     aQ = aC - aD,
                     aK = Math.abs(aJ),
                     aL = Math.abs(aQ),
                     aM = aK / aL,
                     aG,
                     aN;
                 if (aH == 0) {
                     aH = R * 10;
                 }
                 if (aR == 0) {
                     aR = P * 10;
                 }
                 if (aM < aI) {
                     aN = aC;
                     w = aL * aI;
                     aG = aJ < 0 ? ar - w : w + ar;
                     if (aG < 0) {
                         aG = 0;
                         h = Math.abs((aG - ar) / aI);
                         aN = aQ < 0 ? aD - h : h + aD;
                     } else {
                         if (aG > R) {
                             aG = R;
                             h = Math.abs((aG - ar) / aI);
                             aN = aQ < 0 ? aD - h : h + aD;
                         }
                     }
                 } else {
                     aG = aq;
                     h = aK / aI;
                     aN = aQ < 0 ? aD - h : aD + h;
                     if (aN < 0) {
                         aN = 0;
                         w = Math.abs((aN - aD) * aI);
                         aG = aJ < 0 ? ar - w : w + ar;
                     } else {
                         if (aN > P) {
                             aN = P;
                             w = Math.abs(aN - aD) * aI;
                             aG = aJ < 0 ? ar - w : w + ar;
                         }
                     }
                 }
                 if (aG > ar) {
                     if (aG - ar < aP) {
                         aG = ar + aP;
                     } else {
                         if (aG - ar > aH) {
                             aG = ar + aH;
                         }
                     }
                     if (aN > aD) {
                         aN = aD + (aG - ar) / aI;
                     } else {
                         aN = aD - (aG - ar) / aI;
                     }
                 } else {
                     if (aG < ar) {
                         if (ar - aG < aP) {
                             aG = ar - aP;
                         } else {
                             if (ar - aG > aH) {
                                 aG = ar - aH;
                             }
                         }
                         if (aN > aD) {
                             aN = aD + (ar - aG) / aI;
                         } else {
                             aN = aD - (ar - aG) / aI;
                         }
                     }
                 }
                 if (aG < 0) {
                     ar -= aG;
                     aG = 0;
                 } else {
                     if (aG > R) {
                         ar -= aG - R;
                         aG = R;
                     }
                 }
                 if (aN < 0) {
                     aD -= aN;
                     aN = 0;
                 } else {
                     if (aN > P) {
                         aD -= aN - P;
                         aN = P;
                     }
                 }
                 return (last = aA(az(ar, aD, aG, aN)));
             }
             function au(aG) {
                 if (aG[0] < 0) {
                     aG[0] = 0;
                 }
                 if (aG[1] < 0) {
                     aG[1] = 0;
                 }
                 if (aG[0] > R) {
                     aG[0] = R;
                 }
                 if (aG[1] > P) {
                     aG[1] = P;
                 }
                 return [aG[0], aG[1]];
             }
             function az(aJ, aL, aI, aK) {
                 var aN = aJ,
                     aM = aI,
                     aH = aL,
                     aG = aK;
                 if (aI < aJ) {
                     aN = aI;
                     aM = aJ;
                 }
                 if (aK < aL) {
                     aH = aK;
                     aG = aL;
                 }
                 return [Math.round(aN), Math.round(aH), Math.round(aM), Math.round(aG)];
             }
             function aB() {
                 var aH = aq - ar;
                 var aG = aC - aD;
                 if (y && Math.abs(aH) > y) {
                     aq = aH > 0 ? ar + y : ar - y;
                 }
                 if (ai && Math.abs(aG) > ai) {
                     aC = aG > 0 ? aD + ai : aD - ai;
                 }
                 if (T && Math.abs(aG) < T) {
                     aC = aG > 0 ? aD + T : aD - T;
                 }
                 if (q && Math.abs(aH) < q) {
                     aq = aH > 0 ? ar + q : ar - q;
                 }
                 if (ar < 0) {
                     aq -= ar;
                     ar -= ar;
                 }
                 if (aD < 0) {
                     aC -= aD;
                     aD -= aD;
                 }
                 if (aq < 0) {
                     ar -= aq;
                     aq -= aq;
                 }
                 if (aC < 0) {
                     aD -= aC;
                     aC -= aC;
                 }
                 if (aq > R) {
                     var aI = aq - R;
                     ar -= aI;
                     aq -= aI;
                 }
                 if (aC > P) {
                     var aI = aC - P;
                     aD -= aI;
                     aC -= aI;
                 }
                 if (ar > R) {
                     var aI = ar - P;
                     aC -= aI;
                     aD -= aI;
                 }
                 if (aD > P) {
                     var aI = aD - P;
                     aC -= aI;
                     aD -= aI;
                 }
                 return aA(az(ar, aD, aq, aC));
             }
             function aA(aG) {
                 return { x: aG[0], y: aG[1], x2: aG[2], y2: aG[3], w: aG[2] - aG[0], h: aG[3] - aG[1] };
             }
             return { flipCoords: az, setPressed: ax, setCurrent: aw, getOffset: aF, moveOffset: ap, getCorner: ay, getFixed: aE };
         })();
         var Y = (function () {
             var ax,
                 at,
                 aD,
                 aC,
                 aL = 370;
             var aw = {};
             var aP = {};
             var ar = false;
             var aB = I.handleOffset;
             if (I.drawBorders) {
                 aw = { top: ay("hline").css("top", a.browser.msie ? l(-1) : l(0)), bottom: ay("hline"), left: ay("vline"), right: ay("vline") };
             }
             if (I.dragEdges) {
                 aP.t = aK("n");
                 aP.b = aK("s");
                 aP.r = aK("e");
                 aP.l = aK("w");
             }
             I.sideHandles && aG(["n", "s", "e", "w"]);
             I.cornerHandles && aG(["sw", "nw", "ne", "se"]);
             function ay(aS) {
                 var aT = a("<div />").css({ position: "absolute", opacity: I.borderOpacity }).addClass(D(aS));
                 k.append(aT);
                 return aT;
             }
             function aq(aS, aT) {
                 var aU = a("<div />")
                     .mousedown(c(aS))
                     .css({ cursor: aS + "-resize", position: "absolute", zIndex: aT });
                 M.append(aU);
                 return aU;
             }
             function aE(aS) {
                 return aq(aS, aL++)
                     .css({ top: l(-aB + 1), left: l(-aB + 1), opacity: I.handleOpacity })
                     .addClass(D("handle"));
             }
             function aK(aU) {
                 var aX = I.handleSize,
                     aY = aB,
                     aW = aX,
                     aT = aX,
                     aV = aY,
                     aS = aY;
                 switch (aU) {
                     case "n":
                     case "s":
                         aT = L(100);
                         break;
                     case "e":
                     case "w":
                         aW = L(100);
                         break;
                 }
                 return aq(aU, aL++)
                     .width(aT)
                     .height(aW)
                     .css({ top: l(-aV + 1), left: l(-aS + 1) });
             }
             function aG(aS) {
                 for (i in aS) {
                     aP[aS[i]] = aE(aS[i]);
                 }
             }
             function aI(aZ) {
                 var aU = Math.round(aZ.h / 2 - aB),
                     aT = Math.round(aZ.w / 2 - aB),
                     aX = (west = -aB + 1),
                     aW = aZ.w - aB,
                     aV = aZ.h - aB,
                     aS,
                     aY;
                 "e" in aP && aP.e.css({ top: l(aU), left: l(aW) }) && aP.w.css({ top: l(aU) }) && aP.s.css({ top: l(aV), left: l(aT) }) && aP.n.css({ left: l(aT) });
                 "ne" in aP && aP.ne.css({ left: l(aW) }) && aP.se.css({ top: l(aV), left: l(aW) }) && aP.sw.css({ top: l(aV) });
                 "b" in aP && aP.b.css({ top: l(aV) }) && aP.r.css({ left: l(aW) });
             }
             function aA(aS, aT) {
                 J.css({ top: l(-aT), left: l(-aS) });
                 z.css({ top: l(aT), left: l(aS) });
             }
             function aR(aS, aT) {
                 z.width(aS).height(aT);
             }
             function au() {
                 var aS = ab.getFixed();
                 ab.setPressed([aS.x, aS.y]);
                 ab.setCurrent([aS.x2, aS.y2]);
                 aO();
             }
             function aO() {
                 if (aC) {
                     return az();
                 }
             }
             function az() {
                 var aS = ab.getFixed();
                 aR(aS.w, aS.h);
                 aA(aS.x, aS.y);
                 I.drawBorders && aw.right.css({ left: l(aS.w - 1) }) && aw.bottom.css({ top: l(aS.h - 1) });
                 ar && aI(aS);
                 aC || aQ();
                 I.onChange(Z(aS));
             }
             function aQ() {
                 z.show();
                 am.css("opacity", I.bgOpacity);
                 aC = true;
             }
             function aM() {
                 aN();
                 z.hide();
                 am.css("opacity", 1);
                 aC = false;
             }
             function ap() {
                 if (ar) {
                     aI(ab.getFixed());
                     M.show();
                 }
             }
             function aH() {
                 ar = true;
                 if (I.allowResize) {
                     aI(ab.getFixed());
                     M.show();
                     return true;
                 }
             }
             function aN() {
                 ar = false;
                 M.hide();
             }
             function aJ(aS) {
                 (C = aS) ? aN() : aH();
             }
             function aF() {
                 aJ(false);
                 au();
             }
             var av = af().mousedown(c("move")).css({ cursor: "move", position: "absolute", zIndex: 360 });
             k.append(av);
             aN();
             return {
                 updateVisible: aO,
                 update: az,
                 release: aM,
                 refresh: au,
                 setCursor: function (aS) {
                     av.css("cursor", aS);
                 },
                 enableHandles: aH,
                 enableOnly: function () {
                     ar = true;
                 },
                 showHandles: ap,
                 disableHandles: aN,
                 animMode: aJ,
                 done: aF,
             };
         })();
         var Q = (function () {
             var aq = function () {},
                 at = function () {},
                 ar = I.trackDocument;
             if (!ar) {
                 b.mousemove(ap).mouseup(au).mouseout(au);
             }
             function ay() {
                 b.css({ zIndex: 450 });
                 if (ar) {
                     a(document).mousemove(ap).mouseup(au);
                 }
             }
             function ax() {
                 b.css({ zIndex: 290 });
                 if (ar) {
                     a(document).unbind("mousemove", ap).unbind("mouseup", au);
                 }
             }
             function ap(az) {
                 aq(G(az));
             }
             function au(az) {
                 az.preventDefault();
                 az.stopPropagation();
                 if (s) {
                     s = false;
                     at(G(az));
                     I.onSelect(Z(ab.getFixed()));
                     ax();
                     aq = function () {};
                     at = function () {};
                 }
                 return false;
             }
             function av(aA, az) {
                 s = true;
                 aq = aA;
                 at = az;
                 ay();
                 return false;
             }
             function aw(az) {
                 b.css("cursor", az);
             }
             am.before(b);
             return { activateHandlers: av, setCursor: aw };
         })();
         var al = (function () {
             var at = a('<input type="radio" />').css({ position: "absolute", left: "-30px" }).keypress(ap).blur(au),
                 av = a("<div />").css({ position: "absolute", overflow: "hidden" }).append(at);
             function aq() {
                 if (I.keySupport) {
                     at.show();
                     at.focus();
                 }
             }
             function au(aw) {
                 at.hide();
             }
             function ar(ax, aw, ay) {
                 if (I.allowMove) {
                     ab.moveOffset([aw, ay]);
                     Y.updateVisible();
                 }
                 ax.preventDefault();
                 ax.stopPropagation();
             }
             function ap(ax) {
                 if (ax.ctrlKey) {
                     return true;
                 }
                 ac = ax.shiftKey ? true : false;
                 var aw = ac ? 10 : 1;
                 switch (ax.keyCode) {
                     case 37:
                         ar(ax, -aw, 0);
                         break;
                     case 39:
                         ar(ax, aw, 0);
                         break;
                     case 38:
                         ar(ax, 0, -aw);
                         break;
                     case 40:
                         ar(ax, 0, aw);
                         break;
                     case 27:
                         Y.release();
                         break;
                     case 9:
                         return true;
                 }
                 return I.onkeydown(ax);
             }
             if (I.keySupport) {
                 av.insertBefore(am);
             }
             return { watchKeys: aq };
         })();
         function l(ap) {
             return "" + parseInt(ap) + "px";
         }
         function L(ap) {
             return "" + parseInt(ap) + "%";
         }
         function D(ap) {
             return I.baseClass + "-" + ap;
         }
         function E(ap) {
             var aq = a(ap).offset();
             return [aq.left, aq.top];
         }
         function G(ap) {
             return [ap.pageX - ae[0], ap.pageY - ae[1]];
         }
         function F(ap) {
             if (ap != ao) {
                 Q.setCursor(ap);
                 ao = ap;
             }
         }
         function f(ar, au) {
             ae = E(am);
             Q.setCursor(ar == "move" ? ar : ar + "-resize");
             if (ar == "move") {
                 return Q.activateHandlers(S(au), p);
             }
             var ap = ab.getFixed();
             var aq = r(ar);
             var at = ab.getCorner(r(aq));
             ab.setPressed(ab.getCorner(aq));
             ab.setCurrent(at);
             Q.activateHandlers(H(ar, ap), p);
         }
         function H(aq, ap) {
             return function (ar) {
                 if (!I.aspectRatio) {
                     switch (aq) {
                         case "e":
                             ar[1] = ap.y2;
                             break;
                         case "w":
                             ar[1] = ap.y2;
                             break;
                         case "n":
                             ar[0] = ap.x2;
                             break;
                         case "s":
                             ar[0] = ap.x2;
                             break;
                     }
                 } else {
                     switch (aq) {
                         case "e":
                             ar[1] = ap.y + 1;
                             break;
                         case "w":
                             ar[1] = ap.y + 1;
                             break;
                         case "n":
                             ar[0] = ap.x + 1;
                             break;
                         case "s":
                             ar[0] = ap.x + 1;
                             break;
                     }
                 }
                 ab.setCurrent(ar);
                 Y.update();
             };
         }
         function S(aq) {
             var ap = aq;
             al.watchKeys();
             return function (ar) {
                 ab.moveOffset([ar[0] - ap[0], ar[1] - ap[1]]);
                 ap = ar;
                 Y.update();
             };
         }
         function r(ap) {
             switch (ap) {
                 case "n":
                     return "sw";
                 case "s":
                     return "nw";
                 case "e":
                     return "nw";
                 case "w":
                     return "ne";
                 case "ne":
                     return "sw";
                 case "nw":
                     return "se";
                 case "se":
                     return "nw";
                 case "sw":
                     return "ne";
             }
         }
         function c(ap) {
             return function (aq) {
                 if (I.disabled) {
                     return false;
                 }
                 if (ap == "move" && !I.allowMove) {
                     return false;
                 }
                 s = true;
                 f(ap, G(aq));
                 aq.stopPropagation();
                 aq.preventDefault();
                 return false;
             };
         }
         function U(au, aq, at) {
             var ap = au.width(),
                 ar = au.height();
             if (ap > aq && aq > 0) {
                 ap = aq;
                 ar = (aq / au.width()) * au.height();
             }
             if (ar > at && at > 0) {
                 ar = at;
                 ap = (at / au.height()) * au.width();
             }
             N = au.width() / ap;
             e = au.height() / ar;
             au.width(ap).height(ar);
         }
         function Z(ap) {
             return { x: parseInt(ap.x * N), y: parseInt(ap.y * e), x2: parseInt(ap.x2 * N), y2: parseInt(ap.y2 * e), w: parseInt(ap.w * N), h: parseInt(ap.h * e) };
         }
         function p(aq) {
             var ap = ab.getFixed();
             if (ap.w > I.minSelect[0] && ap.h > I.minSelect[1]) {
                 Y.enableHandles();
                 Y.done();
             } else {
                 Y.release();
             }
             Q.setCursor(I.allowSelect ? "crosshair" : "default");
         }
         function ad(ap) {
             if (I.disabled) {
                 return false;
             }
             if (!I.allowSelect) {
                 return false;
             }
             s = true;
             ae = E(am);
             Y.disableHandles();
             F("crosshair");
             var aq = G(ap);
             ab.setPressed(aq);
             Q.activateHandlers(ak, p);
             al.watchKeys();
             Y.update();
             ap.stopPropagation();
             ap.preventDefault();
             return false;
         }
         function ak(ap) {
             ab.setCurrent(ap);
             Y.update();
         }
         function af() {
             var ap = a("<div></div>").addClass(D("tracker"));
             a.browser.msie && ap.css({ opacity: 0, backgroundColor: "white" });
             return ap;
         }
         function t(aH) {
             var aC = aH[0] / N,
                 aq = aH[1] / e,
                 aB = aH[2] / N,
                 ap = aH[3] / e;
             if (C) {
                 return;
             }
             var aA = ab.flipCoords(aC, aq, aB, ap);
             var aF = ab.getFixed();
             var at = (initcr = [aF.x, aF.y, aF.x2, aF.y2]);
             var ar = I.animationDelay;
             var ay = at[0];
             var ax = at[1];
             var aB = at[2];
             var ap = at[3];
             var aE = aA[0] - initcr[0];
             var av = aA[1] - initcr[1];
             var aD = aA[2] - initcr[2];
             var au = aA[3] - initcr[3];
             var az = 0;
             var aw = I.swingSpeed;
             Y.animMode(true);
             var aG = (function () {
                 return function () {
                     az += (100 - az) / aw;
                     at[0] = ay + (az / 100) * aE;
                     at[1] = ax + (az / 100) * av;
                     at[2] = aB + (az / 100) * aD;
                     at[3] = ap + (az / 100) * au;
                     if (az < 100) {
                         aI();
                     } else {
                         Y.done();
                     }
                     if (az >= 99.8) {
                         az = 100;
                     }
                     aj(at);
                 };
             })();
             function aI() {
                 window.setTimeout(aG, ar);
             }
             aI();
         }
         function K(ap) {
             aj([ap[0] / N, ap[1] / e, ap[2] / N, ap[3] / e]);
         }
         function aj(ap) {
             ab.setPressed([ap[0], ap[1]]);
             ab.setCurrent([ap[2], ap[3]]);
             Y.update();
         }
         function A(ap) {
             if (typeof ap != "object") {
                 ap = {};
             }
             I = a.extend(I, ap);
             if (typeof I.onChange !== "function") {
                 I.onChange = function () {};
             }
             if (typeof I.onSelect !== "function") {
                 I.onSelect = function () {};
             }
         }
         function j() {
             return Z(ab.getFixed());
         }
         function ah() {
             return ab.getFixed();
         }
         function v(ap) {
             A(ap);
             O();
         }
         function x() {
             I.disabled = true;
             Y.disableHandles();
             Y.setCursor("default");
             Q.setCursor("default");
         }
         function W() {
             I.disabled = false;
             O();
         }
         function m() {
             Y.done();
             Q.activateHandlers(null, null);
         }
         function ag() {
             aa.remove();
             X.show();
         }
         function O(ap) {
             I.allowResize ? (ap ? Y.enableOnly() : Y.enableHandles()) : Y.disableHandles();
             Q.setCursor(I.allowSelect ? "crosshair" : "default");
             Y.setCursor(I.allowMove ? "move" : "default");
             aa.css("backgroundColor", I.bgColor);
             if ("setSelect" in I) {
                 K(B.setSelect);
                 Y.done();
                 delete I.setSelect;
             }
             if ("trueSize" in I) {
                 N = I.trueSize[0] / R;
                 e = I.trueSize[1] / P;
             }
             y = I.maxSize[0] || 0;
             ai = I.maxSize[1] || 0;
             q = I.minSize[0] || 0;
             T = I.minSize[1] || 0;
             if ("outerImage" in I) {
                 am.attr("src", I.outerImage);
                 delete I.outerImage;
             }
             Y.refresh();
         }
         M.hide();
         O(true);
         var g = {
             animateTo: t,
             setSelect: K,
             setOptions: v,
             tellSelect: j,
             tellScaled: ah,
             disable: x,
             enable: W,
             cancel: m,
             focus: al.watchKeys,
             getBounds: function () {
                 return [R * N, P * e];
             },
             getWidgetSize: function () {
                 return [R, P];
             },
             release: Y.release,
             destroy: ag,
         };
         X.data("Jcrop", g);
         return g;
     };
     a.fn.Jcrop = function (c) {
         function b(f) {
             var e = c.useImg || f.src;
             var d = new Image();
             d.onload = function () {
                 a.Jcrop(f, c);
             };
             d.src = e;
         }
         if (typeof c !== "object") {
             c = {};
         }
         this.each(function () {
             if (a(this).data("Jcrop")) {
                 if (c == "api") {
                     return a(this).data("Jcrop");
                 } else {
                     a(this).data("Jcrop").setOptions(c);
                 }
             } else {
                 b(this);
             }
         });
         return this;
     };
 })(jQuery);
 (function (a) {
     a.site = new (function () {
         function b() {
             if (!this.bodyEl) {
                 this.bodyEl = a("body");
             }
             return this.bodyEl;
         }
         function c(f) {
             return b().attr("id") == f;
         }
         function d() {
             function f(j) {
                 return b().hasClass(j);
             }
             function g(k) {
                 for (var l = k.length; l != 0; ) {
                     var j = k[--l];
                     if (a.isArray(j)) {
                         if (g(j)) {
                             return true;
                         }
                     } else {
                         if (f(j)) {
                             return true;
                         }
                     }
                 }
                 return false;
             }
             return g(arguments);
         }
         function e(g) {
             var j = 1;
             for (var f = g.length; f !== 0; --f) {
                 if (g.charAt(f - 1) === ",") {
                     ++j;
                 }
             }
             return a(g).size() === j;
         }
         return { version: "0.1", isModule: c, isAction: d, dependingElements: e };
     })();
 })(jQuery);
 (function (a) {
     jQuery.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
     a.magma = new (function () {
         var b = { layer1: 10000, layer2: 20000, layer3: 30000, layer4: 40000, layer5: 50000 };
         b.magma = { magmaFakeLinkClass: "magma-fake-link" };
         var c = b.magma;
         function r(E) {
             o = { cache: true, minlength: 4, maxlength: 16, validator: function () {}, valid: function () {}, invalid: function () {}, reset: function () {}, triggers: null };
             a.extend(o, E || {});
             o.field = a(o.field);
             if (!o.field) {
                 return;
             }
             var C,
                 D,
                 x,
                 m = {},
                 u;
             var B = a("#webpersona-message"),
                 z = a("#webpersona_name");
             function A() {
                 clearTimeout(C);
                 if (x) {
                     x.abort();
                 }
             }
             function y(F) {
                 m[u] = F;
                 o[F ? "valid" : "invalid"]();
             }
             function v() {
                 if (o.field.val().length < o.minlength || o.field.val().length > o.maxlength) {
                     A();
                     o.reset(function () {});
                     return;
                 }
                 if (D == o.field.val() && o.triggers && a(this).filter(o.triggers.selector).length == 0) {
                     return;
                 }
                 D = o.field.val();
                 o.reset(function () {
                     A();
                     u = D;
                     C = setTimeout(function () {
                         if (o.cache && D in m) {
                             o[m[D] ? "valid" : "invalid"]();
                             return;
                         }
                         x = o.validator(D, y);
                     }, 300);
                 });
             }
             o.field.keyup(v).attr("autocomplete", "off");
             if (o.triggers) {
                 a(o.triggers).change(v);
             }
         }
         b.dialog = { minTop: 10, defaultWidth: 400, fadeOutLevel: 0.15, bgOpacity: "0.75" };
         var s = (function () {
             var y;
             var m;
             a(document).ready(function () {
                 y = a("<div/>")
                     .css({ position: "fixed", height: "100%", width: "100%", top: "0", left: "0", "z-index": b.layer5++, "background-color": "#000000", opacity: b.dialog.bgOpacity })
                     .hide();
                 if (a.browser.msie && parseInt(a.browser.version) <= 6) {
                     y.css({ position: "absolute", width: a(document.body).width() + "px", height: a(document.body).height() + "px" });
                 }
                 y.appendTo(document.body);
                 y.click(x);
             });
             function x() {
                 if (typeof m === "function") {
                     m();
                 }
             }
             function u(z) {
                 m = z;
                 y.show();
             }
             function v() {
                 y.animate({ opacity: 0 }, "fast", function () {
                     a(this).hide().css("opacity", b.dialog.bgOpacity);
                 });
             }
             return { show: u, hide: v };
         })();
         function l(G) {
             var B = b.dialog;
             var x = { color: "pale", title: null, splatter: null, width: B.defaultWidth, focusInput: true, removeOnClose: true };
             a.extend(x, G || {});
             var m = (function () {
                 var J = x.color;
                 var H = x.title;
                 H = H ? '<h2 class="bfhBox-heading">' + H + "</h2>" : "";
                 var I = a(
                     '<div><a class="dialogClose"></a><div class="bfhBox bfhBox-' +
                         J +
                         '"><div class="wrapper">' +
                         H +
                         '<div class="content clearfix"><div class="box-content clearfix"></div></div></div><div class="bg"><u class="w"/><u class="e"/><i class="w"/><i class="e"/><b class="w"/><b class="e"/></div></div></div>'
                 );
                 return I;
             })();
             var u = m.find(".box-content");
             var E = m.find(".dialogClose");
             var A = false;
             var v = false;
             function z() {
                 var H = this;
                 m.appendTo(document.body)
                     .addClass("magmaDialog")
                     .css({ position: "absolute", width: x.width == "auto" ? x.width : x.width + "px", left: (a(window).width() - (x.width == "auto" ? 0 : x.width)) / 2 + "px", display: "none", zIndex: b.layer5++ });
                 E.click(function (I) {
                     I.preventDefault();
                     F();
                 });
             }
             function y() {
                 u.animate({ opacity: B.fadeOutLevel });
                 v = true;
             }
             function D() {
                 A = true;
                 s.show(function () {
                     F();
                 });
                 m.css({ display: "block" });
                 if (x.width == "auto") {
                     m.css("left", 0);
                     m.css("left", a(window).scrollLeft() + (a(window).width() - m.outerWidth()) / 2 + "px");
                 }
                 var H = a(window).scrollTop() + (a(window).height() - m.outerHeight()) / 2;
                 m.css({ top: (H < B.minTop ? B.minTop : H) + "px" });
                 if (v) {
                     u.animate({ opacity: 1 });
                 }
                 if (x.focusInput) {
                     u.find(":text,:password").eq(0).focus();
                 }
                 if (typeof x.openPost === "function") {
                     x.openPost();
                 }
             }
             function F() {
                 s.hide();
                 A = false;
                 if (typeof x.closePre === "function") {
                     x.closePre();
                 }
                 if (x.removeOnClose) {
                     m.remove();
                 } else {
                     m.css("display", "none");
                 }
             }
             function C() {
                 E.unbind("click");
                 m.remove();
             }
             return {
                 insert: z,
                 show: D,
                 close: F,
                 fade: y,
                 destroy: C,
                 html: function () {
                     return u.html(arguments[0]);
                 },
                 find: function () {
                     return u.find(arguments[0]);
                 },
                 stop: function () {
                     return u.stop(arguments[0]);
                 },
                 append: function () {
                     return u.append(arguments[0]);
                 },
             };
         }
         function t(v, u) {
             var B = b.dialog;
             var A = { color: "pale", title: v.attr("title"), splatter: null, width: B.defaultWidth, hijackForms: false, focusInput: true, redirMsg: '<img src="/static/images/loading.gif" />', removeOnClose: true };
             a.extend(A, u || {});
             if (A.title.length == 0) {
                 if (v.children().length == 0) {
                 }
                 A.title = v.html();
                 if (v.children().length == 1) {
                 }
                 A.title = v.children().eq(0).html();
             }
             var m = v.attr("href");
             var x = new l(A);
             function z(C, E) {
                 var D = E ? "post" : "get";
                 var F = false;
                 E = E || a.makeArray();
                 p({
                     type: D,
                     url: C,
                     data: E,
                     beforeRedirect: function () {
                         x.html('<div class="redirect-message">' + A.redirMsg + "</div>");
                         F = true;
                     },
                     html: function (H, G) {
                         if (G == "success") {
                             x.stop(false, true);
                             x.html(H);
                             F = true;
                         }
                     },
                     after: function () {
                         if (F) {
                             x.show();
                             if (A.hijackForms) {
                                 x.find("form").submit(y);
                             }
                         }
                     },
                 });
             }
             function y(C) {
                 C.preventDefault();
                 x.find("form").unbind("submit", y);
                 z(a(this).attr("action"), a(this).serializeArray());
                 x.fade();
             }
             v.click(function (C) {
                 C.preventDefault();
                 x.insert();
                 z(m);
             });
             v.magmaFakeLink();
         }
         function d(x, v) {
             var A = b.dialog;
             var z = { width: "auto", type: "none", removeOnClose: false };
             a.extend(z, v || {});
             var y = null;
             if (z.type == "error") {
                 y = a('<div class="magmaLightboxError">' + x + "</div>");
                 z.color = "red";
             } else {
                 if (z.type == "warning") {
                     y = a('<div class="magmaLightboxWarning">' + x + "</div>");
                     z.color = "orange";
                 } else {
                     if (z.type == "info") {
                         y = a('<div class="magmaLightboxInfo">' + x + "</div>");
                         z.color = "bluegray";
                     } else {
                         y = a(x);
                     }
                 }
             }
             box = new l(z);
             box.append(y);
             box.insert();
             var u = box.find("img, iframe");
             if (u.length > 0) {
                 var m = 0;
                 u.one("load", function () {
                     if (++m == u.length) {
                         box.show();
                     }
                 });
             } else {
                 box.show();
             }
             return box;
         }
         b.select = { disabledOpacity: 0.25 };
         function g(v, m, F) {
             var y = b.select;
             var u = { url: null };
             a.extend(u, F || {});
             v = a(v);
             m = a(m);
             var z, B, D;
             D = v.parents(".magmaFormElementWrapper").eq(0);
             B = D.find(".magmaLabel");
             B = B.eq(B.size() - 1);
             function E() {
                 D.fadeTo("fast", y.disabledOpacity);
                 v.attr("disabled", true);
             }
             function A() {
                 v.attr("disabled", false);
                 D.fadeTo("fast", 1);
             }
             function x(H) {
                 if (H.result == "success") {
                     if (typeof H.name === "string") {
                         B.html(H.name);
                     }
                     if (a.isArray(H.data)) {
                         v.html("");
                         if (H.language && typeof H.language.select_a_region === "string") {
                             a('<option value="">' + H.language.select_a_region + "</option>").appendTo(v);
                         }
                         for (var G = 0, J, I = H.data.length; G < I; ) {
                             J = H.data[G++];
                             a('<option value="' + J[0] + '">' + J[1] + "</option>").appendTo(v);
                         }
                     }
                     setTimeout(A, 10);
                 }
             }
             function C() {
                 E();
                 z = a.post(u.url, { value: m.val() }, x, "json");
             }
             m.change(C);
         }
         function k(m, v, z) {
             var y = { x: 0, y: 0, top: 0, left: 0, center: "none" };
             a.extend(y, z || {});
             m = a(m);
             v = a(v);
             var A = v.offset();
             var u = A.left + y.x;
             var x = A.top + y.y;
             if (y.top === 1 || y.top == 2) {
                 x += v.outerHeight();
             }
             if (y.top === -1 || y.top == 2) {
                 x -= m.outerHeight();
             }
             if (y.left === 1 || y.left == 2) {
                 u += v.outerWidth();
             }
             if (y.left === -1 || y.left == 2) {
                 u -= m.outerWidth();
             }
             if (y.center === "x") {
                 u += (v.outerWidth() - m.outerWidth()) / 2;
             }
             if (y.center === "y") {
                 x += (v.outerHeight() - m.outerHeight()) / 2;
             }
             m.css({ position: "absolute", top: x + "px", left: u + "px", color: m.css("color") }).appendTo(document.body);
             return m;
         }
         b.ajax = {};
         function p(m) {
             var x = b.ajax;
             var v = { url: "", type: "get", data: {}, nocache: true, beforeRedirect: null, jsonSuccess: null, jsonError: null, html: null, error: null, after: null };
             a.extend(v, m || {});
             if (typeof v.form == "object") {
                 v.url = v.form.attr("action");
                 v.type = v.form.attr("method");
                 v.data = v.form.serializeArray();
             }
             if (v.type.toLowerCase() == "get" && v.nocache) {
                 v.data = v.data || a.makeArray();
                 if (a.isArray(v.data)) {
                     v.data.push({ name: "nocache", value: Math.floor(Math.random() * 10000000000000) });
                 } else {
                     if (typeof v.data === "object") {
                         a.extend(v.data, { nocache: Math.floor(Math.random() * 10000000000000) });
                     } else {
                         if (typeof v.data === "string") {
                             v.data += "&nocache=" + Math.floor(Math.random() * 10000000000000);
                         }
                     }
                 }
             }
             return a.ajax({ type: v.type, url: v.url, data: v.data, dataType: "html", complete: u });
             function u(C, y) {
                 var A = C.getResponseHeader("Content-Type");
                 if (A.indexOf("application/json") != -1) {
                     var z;
                     try {
                         z = window["eval"]("(" + C.responseText + ")");
                     } catch (B) {}
                     if (typeof z === "object") {
                         if (z.result == "redirect") {
                             if (z.redirectUrl) {
                                 if (typeof v.beforeRedirect === "function") {
                                     v.beforeRedirect();
                                 }
                                 window.location = z.redirectUrl;
                             }
                         } else {
                             if (z.result == "success") {
                                 if (typeof v.jsonSuccess === "function") {
                                     v.jsonSuccess.call(this, z);
                                 }
                             } else {
                                 if (z.result == "error") {
                                     if (typeof v.jsonError === "function") {
                                         v.jsonError.call(this, z);
                                     }
                                 }
                             }
                         }
                     }
                 } else {
                     if (A.indexOf("text/html") != -1) {
                         if (typeof v.html === "function") {
                             v.html.call(this, C.responseText, y);
                         }
                     } else {
                         if (typeof v.error === "function") {
                             v.error.call(this, C.responseText, y, "Unsupported Content-Type: " + A);
                         }
                     }
                 }
                 if (typeof v.after === "function") {
                     v.after.call(this);
                 }
             }
         }
         b.paginator = { activePanelClass: "magma-panel-active", disableButtonClass: "disabled", pageLinksClass: "pages", firstClass: "first", lastClass: "last", activeLinkClass: "active" };
         function q(z, K) {
             var F = b.paginator;
             var x = { replace: true, wrap: false, panels: [], maxPages: 9 };
             a.extend(x, K || {});
             $el = a(z);
             var I;
             var H = $el.find(".pagenumbers");
             var y = a(x.panels);
             var E = 0,
                 C;
             var m = [];
             var v = a('<span class="spacing">...</span>').hide();
             var J = v.clone().hide();
             if (x.replace) {
                 H.hide().empty();
             }
             y.each(function (L, M) {
                 m[L] = D(y.length, L, x.maxPages);
                 if (a(M).hasClass(F.activeClass)) {
                     E = L;
                 }
                 if (x.replace) {
                     H.append(A(L, a(M)));
                 }
             });
             if (x.replace) {
                 H.show();
             }
             I = H.find("." + F.pageLinksClass)
                 .eq(0)
                 .after(v)
                 .end()
                 .eq(y.length - 1)
                 .before(J)
                 .end()
                 .hide();
             (function () {
                 var M = y.eq(0).parent();
                 var L = a("<div></div>").css("height", y.eq(E).height() + "px");
                 M.hide();
                 y.eq(0).before(L).end().appendTo(L);
                 M.show();
             })();
             H.find("." + F.pageLinksClass + ":first")
                 .addClass(F.firstClass)
                 .end()
                 .find("." + F.pageLinksClass + ":last")
                 .addClass(F.lastClass);
             var u = $el
                 .find(".prev .bfhButton")
                 .click(function (L) {
                     L.preventDefault();
                     if (!x.wrap && E == 0) {
                         return;
                     }
                     G(E - 1);
                 })
                 .magmaFakeLink();
             var B = $el
                 .find(".next .bfhButton")
                 .click(function (L) {
                     L.preventDefault();
                     if (!x.wrap && E == y.length - 1) {
                         return;
                     }
                     G(E + 1);
                 })
                 .magmaFakeLink();
             G(E);
             function G(M) {
                 C = E;
                 E = (M + y.length) % y.length;
                 y.eq(C).removeClass(F.activePanelClass).end().eq(E).addClass(F.activePanelClass);
                 I.eq(C).removeClass(F.activeLinkClass).end().eq(E).addClass(F.activeLinkClass);
                 if (y.length > x.maxPages) {
                     for (var L = 0; L < y.length; ++L) {
                         if (E == C) {
                             if (m[E][L]) {
                                 I.eq(L).show();
                             }
                         } else {
                             if (m[E][L] && !m[C][L]) {
                                 I.eq(L).show();
                             } else {
                                 if (!m[E][L] && m[C][L]) {
                                     I.eq(L).hide();
                                 }
                             }
                         }
                     }
                     if (m[E][1]) {
                         v.hide();
                     } else {
                         v.show();
                     }
                     if (m[E][y.length - 2]) {
                         J.hide();
                     } else {
                         J.show();
                     }
                 }
                 if (!x.wrap) {
                     if (E == 0) {
                         u.addClass(F.disableButtonClass);
                     } else {
                         u.removeClass(F.disableButtonClass);
                     }
                     if (E == y.length - 1) {
                         B.addClass(F.disableButtonClass);
                     } else {
                         B.removeClass(F.disableButtonClass);
                     }
                 }
             }
             function A(M, L) {
                 return a("<a>" + (M + 1) + "</a>")
                     .addClass(F.pageLinksClass)
                     .click(function () {
                         G(M);
                     })
                     .magmaFakeLink();
             }
             function D(M, P, U) {
                 function T(V) {
                     if (V >= 0 && V < M) {
                         O[V] = 1;
                     }
                 }
                 var O = [];
                 var R = Math.floor((U - 1) / 2),
                     Q = Math.ceil((U - 1) / 2),
                     S = Q - 2,
                     L = R - 2;
                 for (var N = 0; N < M; ++N) {
                     O[N] = 0;
                 }
                 O[0] = O[M - 1] = O[P] = 1;
                 for (var N = P - S; N <= P + L; ++N) {
                     T(N);
                 }
                 for (var N = P; N < Q; ++N) {
                     T(N + R - 1);
                 }
                 for (var N = M - P - 1; N < R; ++N) {
                     T(M - (N + Q));
                 }
                 if (!O[1] && O[2]) {
                     T(1);
                 }
                 if (!O[M - 2] && O[M - 3]) {
                     T(M - 2);
                 }
                 if (M - 1 == U) {
                     if (P < M / 2) {
                         O[M - 2] = O[M - 3] = 0;
                     } else {
                         O[1] = O[2] = 0;
                     }
                 }
                 return O;
             }
         }
         a.fn.magmaFakeLink = function () {
             return this.removeAttr("href").addClass(c.magmaFakeLinkClass);
         };
         a.fn.magmaHoverImage = function (m) {
             var u = { addElement: true };
             a.extend(u, m || {});
             return this.each(function () {
                 var y = a(this).hide();
                 var v;
                 if (u.addElement) {
                     if (y.css("position") !== "relative" && y.css("position") !== "absolute") {
                         y.css("position", "absolute");
                     }
                     v = a('<div class="magma-hover-image"/>').append(y.children()).appendTo(y);
                     (function x() {
                         var z, B, A;
                         A = y.css("backgroundPosition");
                         if (typeof A == "undefined") {
                             z = y.css("backgroundPositionX");
                             B = y.css("backgroundPositionY");
                             if (typeof z == "undefined") {
                                 setTimeout(x, 5000);
                                 return;
                             } else {
                                 z = parseInt(z);
                                 B = parseInt(B);
                             }
                         } else {
                             z = parseInt(A);
                             B = parseInt(A.substr(A.indexOf(" ")));
                         }
                         v.css({ width: y.width(), height: y.height(), "background-image": y.css("background-image"), "background-position": z + "px " + (B - y.height()) + "px" });
                     })();
                 } else {
                     v = y;
                 }
                 if (a.browser.msie) {
                     v.css("background-image", y.css("background-image").replace(/png/i, "gif"));
                 }
                 if (!a.browser.safari) {
                     v.css("opacity", 0);
                     v.hover(
                         function () {
                             v.stop().fadeTo("normal", 1);
                         },
                         function () {
                             v.stop().fadeTo("normal", 0);
                         }
                     );
                 }
                 y.show();
             });
         };
         b.toggle = { activeTriggerClass: "active" };
         a.fn.magmaToggle = function (m) {
             var v = b.toggle;
             var u = { distance: 0, duration: 400, hideDelay: 500, triggerClass: "trigger", popupClass: "popup", toggleOpacity: true, toggleHeight: true, onEvent: "click", offEvent: "click", appendToBody: true, easing: "jswing" };
             a.extend(u, m || {});
             if (u.offEvent == "click") {
                 u.hideDelay = 0;
             }
             if (a.browser.msie || a.browser.chrome) {
                 u.toggleOpacity = false;
             }
             if (!u.toggleOpacity && !u.toggleHeight && u.distance == 0) {
                 u.duration = 0;
             }
             return this.each(function () {
                 var G = a(this),
                     B = null,
                     N = { open: false, close: false },
                     I = false,
                     H = a("." + u.triggerClass, this),
                     x = a("." + u.popupClass, this),
                     C,
                     A,
                     J,
                     y,
                     F,
                     M = false;
                 J = { display: "block", visibility: "hidden" };
                 x.css(J);
                 f(function () {
                     if (u.appendToBody) {
                         x.magmaAppendToBody();
                     }
                     C = parseInt(x.css("top"));
                     A = x.outerHeight();
                     J = { display: "none", top: C - u.distance, visibility: "visible" };
                     if (u.toggleHeight) {
                         J.height = 0;
                     }
                     if (u.toggleOpacity) {
                         J.opacity = 0;
                     }
                     x.css(J);
                     y = {};
                     if (u.toggleOpacity) {
                         y.opacity = 1;
                     }
                     if (u.toggleHeight) {
                         y.height = A;
                     }
                     if (u.distance != 0) {
                         y.top = C;
                     }
                     F = {};
                     if (u.toggleOpacity) {
                         F.opacity = 0;
                     }
                     if (u.toggleHeight) {
                         F.height = 0;
                     }
                     if (u.distance != 0) {
                         F.top = C - u.distance;
                     }
                     if (u.duration == 0) {
                         F.display = "none";
                     }
                     M = true;
                 }, 0);
                 function K(O) {
                     if (B) {
                         clearTimeout(B);
                     }
                     if (!M) {
                         return;
                     }
                     if ((I && !N.open) || (!I && N.open)) {
                         return;
                     } else {
                         N.open = true;
                         x.stop().css({ display: "block", "z-index": b.layer1++ });
                         if (u.duration > 0) {
                             x.animate(y, u.duration, u.easing, function () {
                                 N.open = false;
                                 I = true;
                                 H.addClass(v.activeTriggerClass);
                             });
                         } else {
                             x.css(y);
                             N.open = false;
                             I = true;
                             H.addClass(v.activeTriggerClass);
                         }
                     }
                     return false;
                 }
                 function L(O) {
                     if (B) {
                         clearTimeout(B);
                     }
                     if (!M) {
                         return;
                     }
                     B = setTimeout(function () {
                         B = null;
                         N.close = true;
                         if (u.duration > 0) {
                             x.animate(F, u.duration, u.easing, function () {
                                 H.removeClass(v.activeTriggerClass);
                                 x.css("display", "none");
                                 N.close = false;
                             });
                             I = false;
                         } else {
                             x.css(F);
                             N.close = false;
                             I = false;
                             H.removeClass(v.activeTriggerClass);
                         }
                     }, u.hideDelay);
                     return false;
                 }
                 var D = [];
                 if (H.length != 0) {
                     D[D.length] = H.get(0);
                 }
                 if (x.length != 0) {
                     D[D.length] = x.get(0);
                 }
                 D = a(D);
                 var z;
                 if (u.offEvent == "click") {
                     z = H;
                 } else {
                     z = a(D);
                 }
                 if (u.onEvent == u.offEvent) {
                     var E = false;
                     D.bind(u.onEvent, function (O) {
                         if (!E) {
                             K(O);
                         } else {
                             if (
                                 u.offEvent == "click" &&
                                 x
                                     .eq(0)
                                     .find(O.target.tagName)
                                     .filter(function () {
                                         return this == O.target;
                                     }).length > 0
                             ) {
                                 return;
                             }
                             L(O);
                         }
                         E = !E;
                     });
                 } else {
                     D.bind(u.onEvent, K);
                     z.bind(u.offEvent, L);
                     if ((u.offEvent == "mouseleave" || u.offEvent == "mouseout") && (u.onEvent != "mouseenter" || u.onEvent != "mouseover")) {
                         z.bind(u.offEvent == "mouseleave" ? "mouseenter" : "mouseover", function () {
                             if (B) {
                                 clearTimeout(B);
                             }
                         });
                     }
                 }
             });
         };
         a.fn.magmaHoverToggle = function (m) {
             var u = { onEvent: "mouseenter", offEvent: "mouseleave" };
             a.extend(u, m || {});
             return this.magmaToggle(u);
         };
         a.fn.magmaNoTextSelection = function () {
             return this.mousedown(function (m) {
                 return false;
             });
         };
         b.appendToBody = {};
         a.fn.magmaAppendToBody = function () {
             var u = b.appendToBody;
             if (typeof u.bodyEl == "undefined") {
                 if (!c.cssReady) {
                     var m = this;
                     setTimeout(function () {
                         m.magmaAppendToBody();
                     }, 0);
                     return this;
                 }
                 u.bodyEl = a(".mainContentArea");
                 u.bodyElOffset = u.bodyEl.offset();
             }
             return this.each(function () {
                 var v = a(this);
                 var x = v.offset();
                 v.appendTo(u.bodyEl).css({ position: "absolute", top: x.top - u.bodyElOffset.top, left: x.left - u.bodyElOffset.left, right: "auto", bottom: "auto" });
             });
         };
         c.cssReady = false;
         a(function () {
             var u = a("#magma-cssready");
             var m = setInterval(function () {
                 if (u.css("display") == "none") {
                     clearTimeout(m);
                     u.remove();
                     c.cssReady = true;
                     a(document).trigger("cssready");
                 }
             }, 10);
         });
         function f(m, u) {
             if (typeof m == "function") {
                 if (c.cssReady) {
                     if (typeof u == "number") {
                         setTimeout(m, u);
                     } else {
                         m();
                     }
                 } else {
                     a(document).one("cssready", function () {
                         m();
                     });
                 }
             } else {
                 return c.cssReady;
             }
         }
         function e(v, x, y) {
             if (y) {
                 var u = new Date();
                 u.setTime(u.getTime() + y * 24 * 60 * 60 * 1000);
                 var m = "; expires=" + u.toGMTString();
             } else {
                 var m = "";
             }
             document.cookie = v + "=" + x + m + "; path=/";
         }
         function j(u) {
             var x = u + "=";
             var m = document.cookie.split(";");
             for (var v = 0; v < m.length; v++) {
                 var y = m[v];
                 while (y.charAt(0) == " ") {
                     y = y.substring(1, y.length);
                 }
                 if (y.indexOf(x) == 0) {
                     return y.substring(x.length, y.length);
                 }
             }
             return null;
         }
         function n(m) {
             e(m, "", -1);
         }
         return { version: "0.1", ajaxValidator: r, addDialog: t, dynamicSelect: g, positionElementRelativeTo: k, lightbox: d, ajax: p, paginator: q, cssReady: f, createCookie: e, readCookie: j, eraseCookie: n };
     })();
     a(document).ready(function () {
         a(".dialog-link").each(function () {
             var b = a(this);
             if (b.get(0).tagName.toLowerCase() !== "a") {
                 b = a("a", this);
             }
             if (b.length == 0) {
                 return;
             }
             var c = {};
             try {
                 c = window["eval"]("(" + b.attr("rel") + ")");
             } catch (d) {}
             a.magma.addDialog(b, c);
         });
     });
 })(jQuery);
 jQuery.fn.customInput = function () {
     $(this).each(function (c) {
         if ($(this).is("[type=checkbox],[type=radio]")) {
             var a = $(this);
             var b = $("label[for=" + a.attr("id") + "]");
             var d = a.is("[type=checkbox]") ? "checkbox" : "radio";
             $('<div class="custom-' + d + '"></div>')
                 .insertBefore(a)
                 .append(a, b);
             var e = $("input[name=" + a.attr("name") + "]");
             b.hover(
                 function () {
                     $(this).addClass("hover");
                     if (d == "checkbox" && a.is(":checked")) {
                         $(this).addClass("checkedHover");
                     }
                 },
                 function () {
                     $(this).removeClass("hover checkedHover");
                 }
             );
             a.bind("updateState", function () {
                 if (a.is(":checked")) {
                     if (a.is(":radio")) {
                         e.each(function () {
                             $("label[for=" + $(this).attr("id") + "]").removeClass("checked");
                         });
                     }
                     b.addClass("checked");
                 } else {
                     b.removeClass("checked checkedHover checkedFocus");
                 }
             })
                 .trigger("updateState")
                 .click(function () {
                     $(this).trigger("updateState");
                 })
                 .focus(function () {
                     b.addClass("focus");
                     if (d == "checkbox" && a.is(":checked")) {
                         $(this).addClass("checkedFocus");
                     }
                 })
                 .blur(function () {
                     b.removeClass("focus checkedFocus");
                 });
         }
     });
 };
 window.Modernizr = (function (q, x, k) {
     var e = "2.6.2",
         n = {},
         t = true,
         F = x.documentElement,
         G = "modernizr",
         D = x.createElement(G),
         r = D.style,
         f,
         A = {}.toString,
         d = "Webkit Moz O ms",
         I = d.split(" "),
         s = d.toLowerCase().split(" "),
         K = { svg: "//www.w3.org/2000/svg" },
         l = {},
         c = {},
         y = {},
         C = [],
         z = C.slice,
         b,
         v = {}.hasOwnProperty,
         E;
     if (!m(v, "undefined") && !m(v.call, "undefined")) {
         E = function (L, M) {
             return v.call(L, M);
         };
     } else {
         E = function (L, M) {
             return M in L && m(L.constructor.prototype[M], "undefined");
         };
     }
     if (!Function.prototype.bind) {
         Function.prototype.bind = function J(N) {
             var O = this;
             if (typeof O != "function") {
                 throw new TypeError();
             }
             var L = z.call(arguments, 1),
                 M = function () {
                     if (this instanceof M) {
                         var R = function () {};
                         R.prototype = O.prototype;
                         var Q = new R();
                         var P = O.apply(Q, L.concat(z.call(arguments)));
                         if (Object(P) === P) {
                             return P;
                         }
                         return Q;
                     } else {
                         return O.apply(N, L.concat(z.call(arguments)));
                     }
                 };
             return M;
         };
     }
     function u(L) {
         r.cssText = L;
     }
     function j(M, L) {
         return u(prefixes.join(M + ";") + (L || ""));
     }
     function m(M, L) {
         return typeof M === L;
     }
     function p(M, L) {
         return !!~("" + M).indexOf(L);
     }
     function H(N, L) {
         for (var M in N) {
             var O = N[M];
             if (!p(O, "-") && r[O] !== k) {
                 return L == "pfx" ? O : true;
             }
         }
         return false;
     }
     function B(M, P, O) {
         for (var L in M) {
             var N = P[M[L]];
             if (N !== k) {
                 if (O === false) {
                     return M[L];
                 }
                 if (m(N, "function")) {
                     return N.bind(O || P);
                 }
                 return N;
             }
         }
         return false;
     }
     function a(P, L, O) {
         var M = P.charAt(0).toUpperCase() + P.slice(1),
             N = (P + " " + I.join(M + " ") + M).split(" ");
         if (m(L, "string") || m(L, "undefined")) {
             return H(N, L);
         } else {
             N = (P + " " + s.join(M + " ") + M).split(" ");
             return B(N, L, O);
         }
     }
     l.csstransitions = function () {
         return a("transition");
     };
     l.svg = function () {
         return !!x.createElementNS && !!x.createElementNS(K.svg, "svg").createSVGRect;
     };
     l.inlinesvg = function () {
         var L = x.createElement("div");
         L.innerHTML = "<svg/>";
         return (L.firstChild && L.firstChild.namespaceURI) == K.svg;
     };
     l.smil = function () {
         return !!x.createElementNS && /SVGAnimate/.test(A.call(x.createElementNS(K.svg, "animate")));
     };
     l.svgclippaths = function () {
         return !!x.createElementNS && /SVGClipPath/.test(A.call(x.createElementNS(K.svg, "clipPath")));
     };
     for (var g in l) {
         if (E(l, g)) {
             b = g.toLowerCase();
             n[b] = l[g]();
             C.push((n[b] ? "" : "no-") + b);
         }
     }
     n.addTest = function (M, N) {
         if (typeof M == "object") {
             for (var L in M) {
                 if (E(M, L)) {
                     n.addTest(L, M[L]);
                 }
             }
         } else {
             M = M.toLowerCase();
             if (n[M] !== k) {
                 return n;
             }
             N = typeof N == "function" ? N() : N;
             if (typeof t !== "undefined" && t) {
                 F.className += " " + (N ? "" : "no-") + M;
             }
             n[M] = N;
         }
         return n;
     };
     u("");
     D = f = null;
     (function (U, W) {
         var O = U.html5 || {};
         var R = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
         var M = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
         var aa;
         var S = "_html5shiv";
         var L = 0;
         var Y = {};
         var P;
         (function () {
             try {
                 var ad = W.createElement("a");
                 ad.innerHTML = "<xyz></xyz>";
                 aa = "hidden" in ad;
                 P =
                     ad.childNodes.length == 1 ||
                     (function () {
                         W.createElement("a");
                         var af = W.createDocumentFragment();
                         return typeof af.cloneNode == "undefined" || typeof af.createDocumentFragment == "undefined" || typeof af.createElement == "undefined";
                     })();
             } catch (ae) {
                 aa = true;
                 P = true;
             }
         })();
         function Q(ad, af) {
             var ag = ad.createElement("p"),
                 ae = ad.getElementsByTagName("head")[0] || ad.documentElement;
             ag.innerHTML = "x<style>" + af + "</style>";
             return ae.insertBefore(ag.lastChild, ae.firstChild);
         }
         function V() {
             var ad = T.elements;
             return typeof ad == "string" ? ad.split(" ") : ad;
         }
         function Z(ad) {
             var ae = Y[ad[S]];
             if (!ae) {
                 ae = {};
                 L++;
                 ad[S] = L;
                 Y[L] = ae;
             }
             return ae;
         }
         function X(ag, ad, af) {
             if (!ad) {
                 ad = W;
             }
             if (P) {
                 return ad.createElement(ag);
             }
             if (!af) {
                 af = Z(ad);
             }
             var ae;
             if (af.cache[ag]) {
                 ae = af.cache[ag].cloneNode();
             } else {
                 if (M.test(ag)) {
                     ae = (af.cache[ag] = af.createElem(ag)).cloneNode();
                 } else {
                     ae = af.createElem(ag);
                 }
             }
             return ae.canHaveChildren && !R.test(ag) ? af.frag.appendChild(ae) : ae;
         }
         function ab(af, ah) {
             if (!af) {
                 af = W;
             }
             if (P) {
                 return af.createDocumentFragment();
             }
             ah = ah || Z(af);
             var ai = ah.frag.cloneNode(),
                 ag = 0,
                 ae = V(),
                 ad = ae.length;
             for (; ag < ad; ag++) {
                 ai.createElement(ae[ag]);
             }
             return ai;
         }
         function ac(ad, ae) {
             if (!ae.cache) {
                 ae.cache = {};
                 ae.createElem = ad.createElement;
                 ae.createFrag = ad.createDocumentFragment;
                 ae.frag = ae.createFrag();
             }
             ad.createElement = function (af) {
                 if (!T.shivMethods) {
                     return ae.createElem(af);
                 }
                 return X(af, ad, ae);
             };
             ad.createDocumentFragment = Function(
                 "h,f",
                 "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                     V()
                         .join()
                         .replace(/\w+/g, function (af) {
                             ae.createElem(af);
                             ae.frag.createElement(af);
                             return 'c("' + af + '")';
                         }) +
                     ");return n}"
             )(T, ae.frag);
         }
         function N(ad) {
             if (!ad) {
                 ad = W;
             }
             var ae = Z(ad);
             if (T.shivCSS && !aa && !ae.hasCSS) {
                 ae.hasCSS = !!Q(ad, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}");
             }
             if (!P) {
                 ac(ad, ae);
             }
             return ad;
         }
         var T = {
             elements: O.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
             shivCSS: O.shivCSS !== false,
             supportsUnknownElements: P,
             shivMethods: O.shivMethods !== false,
             type: "default",
             shivDocument: N,
             createElement: X,
             createDocumentFragment: ab,
         };
         U.html5 = T;
         N(W);
     })(this, x);
     n._version = e;
     n._domPrefixes = s;
     n._cssomPrefixes = I;
     n.testProp = function (L) {
         return H([L]);
     };
     n.testAllProps = a;
     F.className = F.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (t ? " js " + C.join(" ") : "");
     return n;
 })(this, this.document);
 (function (ad, ac, ab) {
     function aa(b) {
         return "[object Function]" == P.call(b);
     }
     function Z(b) {
         return "string" == typeof b;
     }
     function Y() {}
     function X(b) {
         return !b || "loaded" == b || "complete" == b || "uninitialized" == b;
     }
     function W() {
         var b = O.shift();
         (M = 1),
             b
                 ? b.t
                     ? R(function () {
                           ("c" == b.t ? L.injectCss : L.injectJs)(b.s, 0, b.a, b.x, b.e, 1);
                       }, 0)
                     : (b(), W())
                 : (M = 0);
     }
     function V(y, x, v, t, s, q, p) {
         function n(a) {
             if (!g && X(m.readyState) && ((z.r = g = 1), !M && W(), (m.onload = m.onreadystatechange = null), a)) {
                 "img" != y &&
                     R(function () {
                         I.removeChild(m);
                     }, 50);
                 for (var c in D[x]) {
                     D[x].hasOwnProperty(c) && D[x][c].onload();
                 }
             }
         }
         var p = p || L.errorTimeout,
             m = ac.createElement(y),
             g = 0,
             b = 0,
             z = { t: v, s: x, e: s, a: q, x: p };
         1 === D[x] && ((b = 1), (D[x] = [])),
             "object" == y ? (m.data = x) : ((m.src = x), (m.type = y)),
             (m.width = m.height = "0"),
             (m.onerror = m.onload = m.onreadystatechange = function () {
                 n.call(this, b);
             }),
             O.splice(t, 0, z),
             "img" != y && (b || 2 === D[x] ? (I.insertBefore(m, J ? null : Q), R(n, p)) : D[x].push(m));
     }
     function U(g, e, l, k, j) {
         return (M = 0), (e = e || "j"), Z(g) ? V("c" == e ? G : H, g, e, this.i++, l, k, j) : (O.splice(this.i++, 0, g), 1 == O.length && W()), this;
     }
     function T() {
         var b = L;
         return (b.loader = { load: U, i: 0 }), b;
     }
     var S = ac.documentElement,
         R = ad.setTimeout,
         Q = ac.getElementsByTagName("script")[0],
         P = {}.toString,
         O = [],
         M = 0,
         K = "MozAppearance" in S.style,
         J = K && !!ac.createRange().compareNode,
         I = J ? S : Q.parentNode,
         S = ad.opera && "[object Opera]" == P.call(ad.opera),
         S = !!ac.attachEvent && !S,
         H = K ? "object" : S ? "script" : "img",
         G = S ? "script" : H,
         F =
             Array.isArray ||
             function (b) {
                 return "[object Array]" == P.call(b);
             },
         E = [],
         D = {},
         C = {
             timeout: function (d, c) {
                 return c.length && (d.timeout = c[0]), d;
             },
         },
         N,
         L;
     (L = function (e) {
         function c(l) {
             var l = l.split("!"),
                 j = E.length,
                 t = l.pop(),
                 s = l.length,
                 t = { url: t, origUrl: t, prefixes: l },
                 r,
                 q,
                 p;
             for (q = 0; q < s; q++) {
                 (p = l[q].split("=")), (r = C[p.shift()]) && (t = r(t, p));
             }
             for (q = 0; q < j; q++) {
                 t = E[q](t);
             }
             return t;
         }
         function n(b, t, s, r, q) {
             var p = c(b),
                 l = p.autoCallback;
             p.url.split(".").pop().split("?").shift(),
                 p.bypass ||
                     (t && (t = aa(t) ? t : t[b] || t[r] || t[b.split("/").pop().split("?")[0]]),
                     p.instead
                         ? p.instead(b, t, s, r, q)
                         : (D[p.url] ? (p.noexec = !0) : (D[p.url] = 1),
                           s.load(p.url, p.forceCSS || (!p.forceJS && "css" == p.url.split(".").pop().split("?").shift()) ? "c" : ab, p.noexec, p.attrs, p.timeout),
                           (aa(t) || aa(l)) &&
                               s.load(function () {
                                   T(), t && t(p.origUrl, q, r), l && l(p.origUrl, q, r), (D[p.url] = 2);
                               })));
         }
         function m(y, x) {
             function v(b, j) {
                 if (b) {
                     if (Z(b)) {
                         j ||
                             (s = function () {
                                 var l = [].slice.call(arguments);
                                 r.apply(this, l), q();
                             }),
                             n(b, s, x, 0, u);
                     } else {
                         if (Object(b) === b) {
                             for (g in ((p = (function () {
                                 var a = 0,
                                     l;
                                 for (l in b) {
                                     b.hasOwnProperty(l) && a++;
                                 }
                                 return a;
                             })()),
                             b)) {
                                 b.hasOwnProperty(g) &&
                                     (!j &&
                                         !--p &&
                                         (aa(s)
                                             ? (s = function () {
                                                   var l = [].slice.call(arguments);
                                                   r.apply(this, l), q();
                                               })
                                             : (s[g] = (function (l) {
                                                   return function () {
                                                       var a = [].slice.call(arguments);
                                                       l && l.apply(this, a), q();
                                                   };
                                               })(r[g]))),
                                     n(b[g], s, x, g, u));
                             }
                         }
                     }
                 } else {
                     !j && q();
                 }
             }
             var u = !!y.test,
                 t = y.load || y.both,
                 s = y.callback || Y,
                 r = s,
                 q = y.complete || Y,
                 p,
                 g;
             v(u ? y.yep : y.nope, !!t), t && v(t);
         }
         var k,
             f,
             d = this.yepnope.loader;
         if (Z(e)) {
             n(e, 0, d, 0);
         } else {
             if (F(e)) {
                 for (k = 0; k < e.length; k++) {
                     (f = e[k]), Z(f) ? n(f, 0, d, 0) : F(f) ? L(f) : Object(f) === f && m(f, d);
                 }
             } else {
                 Object(e) === e && m(e, d);
             }
         }
     }),
         (L.addPrefix = function (d, c) {
             C[d] = c;
         }),
         (L.addFilter = function (b) {
             E.push(b);
         }),
         (L.errorTimeout = 10000),
         null == ac.readyState &&
             ac.addEventListener &&
             ((ac.readyState = "loading"),
             ac.addEventListener(
                 "DOMContentLoaded",
                 (N = function () {
                     ac.removeEventListener("DOMContentLoaded", N, 0), (ac.readyState = "complete");
                 }),
                 0
             )),
         (ad.yepnope = T()),
         (ad.yepnope.executeStack = W),
         (ad.yepnope.injectJs = function (s, r, q, p, n, m) {
             var g = ac.createElement("script"),
                 f,
                 b,
                 p = p || L.errorTimeout;
             g.src = s;
             for (b in q) {
                 g.setAttribute(b, q[b]);
             }
             (r = m ? W : r || Y),
                 (g.onreadystatechange = g.onload = function () {
                     !f && X(g.readyState) && ((f = 1), r(), (g.onload = g.onreadystatechange = null));
                 }),
                 R(function () {
                     f || ((f = 1), r(1));
                 }, p),
                 n ? g.onload() : Q.parentNode.insertBefore(g, Q);
         }),
         (ad.yepnope.injectCss = function (b, p, n, m, l, k) {
             var m = ac.createElement("link"),
                 f,
                 p = k ? W : p || Y;
             (m.href = b), (m.rel = "stylesheet"), (m.type = "text/css");
             for (f in n) {
                 m.setAttribute(f, n[f]);
             }
             l || (Q.parentNode.insertBefore(m, Q), R(p, 0));
         });
 })(this, document);
 Modernizr.load = function () {
     yepnope.apply(window, [].slice.call(arguments, 0));
 };
 (function (K, J, I) {
     function x(d) {
         var c = { x: d.offsetLeft, y: d.offsetTop };
         while ((d = d.offsetParent)) {
             (c.x += d.offsetLeft), (c.y += d.offsetTop);
         }
         return c;
     }
     function y(f) {
         for (var c = 1; c < arguments.length; c++) {
             var j = arguments[c];
             for (var g in j) {
                 f[g] === I && (f[g] = j[g]);
             }
         }
         return f;
     }
     function z(e, d) {
         for (var f in d) {
             e.style[A(e, f) || f] = d[f];
         }
         return e;
     }
     function A(d, c) {
         var l = d.style,
             k,
             j;
         if (l[c] !== I) {
             return c;
         }
         c = c.charAt(0).toUpperCase() + c.slice(1);
         for (j = 0; j < H.length; j++) {
             k = H[j] + c;
             if (l[k] !== I) {
                 return k;
             }
         }
     }
     function B(M, L, r, q) {
         var p = ["opacity", L, ~~(M * 100), r, q].join("-"),
             n = 0.01 + (r / q) * 100,
             m = Math.max(1 - ((1 - M) / L) * (100 - n), M),
             f = F.substring(0, F.indexOf("Animation")).toLowerCase(),
             e = (f && "-" + f + "-") || "";
         G[p] || (C.insertRule("@" + e + "keyframes " + p + "{0%{opacity:" + m + "}" + n + "%{opacity:" + M + "}" + (n + 0.01) + "%{opacity:1}" + ((n + L) % 100) + "%{opacity:" + M + "}100%{opacity:" + m + "}}", 0), (G[p] = 1));
         return p;
     }
     function D(e, d, f) {
         f && !f.parentNode && D(e, f), e.insertBefore(d, f || null);
         return e;
     }
     function E(b, j) {
         var g = J.createElement(b || "div"),
             f;
         for (f in j) {
             g[f] = j[f];
         }
         return g;
     }
     var H = ["webkit", "Moz", "ms", "O"],
         G = {},
         F,
         C = (function () {
             var b = E("style");
             D(J.getElementsByTagName("head")[0], b);
             return b.sheet || b.styleSheet;
         })(),
         v = function s(b) {
             if (!this.spin) {
                 return new s(b);
             }
             this.opts = y(b || {}, s.defaults, u);
         },
         u = (v.defaults = { lines: 12, length: 7, width: 5, radius: 10, color: "#000", speed: 1, trail: 100, opacity: 0.25, fps: 20 }),
         t = (v.prototype = {
             spin: function (R) {
                 this.stop();
                 var Q = this,
                     P = (Q.el = z(E(), { position: "relative" })),
                     O,
                     N;
                 R && ((N = x(D(R, P, R.firstChild))), (O = x(P)), z(P, { left: (R.offsetWidth >> 1) - O.x + N.x + "px", top: (R.offsetHeight >> 1) - O.y + N.y + "px" })), P.setAttribute("aria-role", "progressbar"), Q.lines(P, Q.opts);
                 if (!F) {
                     var M = Q.opts,
                         L = 0,
                         r = M.fps,
                         n = r / M.speed,
                         l = (1 - M.opacity) / ((n * M.trail) / 100),
                         g = n / M.lines;
                     (function f() {
                         L++;
                         for (var b = M.lines; b; b--) {
                             var c = Math.max(1 - ((L + b * g) % n) * l, M.opacity);
                             Q.opacity(P, M.lines - b, c, M);
                         }
                         Q.timeout = Q.el && setTimeout(f, ~~(1000 / r));
                     })();
                 }
                 return Q;
             },
             stop: function () {
                 var b = this.el;
                 b && (clearTimeout(this.timeout), b.parentNode && b.parentNode.removeChild(b), (this.el = I));
                 return this;
             },
         });
     (t.lines = function (g, f) {
         function j(b, c) {
             return z(E(), {
                 position: "absolute",
                 width: f.length + f.width + "px",
                 height: f.width + "px",
                 background: b,
                 boxShadow: c,
                 transformOrigin: "left",
                 transform: "rotate(" + ~~((360 / f.lines) * l) + "deg) translate(" + f.radius + "px,0)",
                 borderRadius: (f.width >> 1) + "px",
             });
         }
         var l = 0,
             k;
         for (; l < f.lines; l++) {
             (k = z(E(), { position: "absolute", top: 1 + ~(f.width / 2) + "px", transform: "translate3d(0,0,0)", opacity: f.opacity, animation: F && B(f.opacity, f.trail, l, f.lines) + " " + 1 / f.speed + "s linear infinite" })),
                 f.shadow && D(k, z(j("#000", "0 0 4px #000"), { top: "2px" })),
                 D(g, D(k, j(f.color, "0 0 1px rgba(0,0,0,.1)")));
         }
         return g;
     }),
         (t.opacity = function (e, d, f) {
             d < e.childNodes.length && (e.childNodes[d].style.opacity = f);
         }),
         (function () {
             var d = z(E("group"), { behavior: "url(#default#VML)" }),
                 c;
             if (!A(d, "transform") && d.adj) {
                 for (c = 4; c--; ) {
                     C.addRule(["group", "roundrect", "fill", "stroke"][c], "behavior:url(#default#VML)");
                 }
                 (t.lines = function (M, L) {
                     function g(b, f, e) {
                         D(
                             n,
                             D(
                                 z(p(), { rotation: (360 / L.lines) * b + "deg", left: ~~f }),
                                 D(z(E("roundrect", { arcsize: 1 }), { width: r, height: L.width, left: L.radius, top: -L.width >> 1, filter: e }), E("fill", { color: L.color, opacity: L.opacity }), E("stroke", { opacity: 0 }))
                             )
                         );
                     }
                     function p() {
                         return z(E("group", { coordsize: q + " " + q, coordorigin: -r + " " + -r }), { width: q, height: q });
                     }
                     var r = L.length + L.width,
                         q = 2 * r,
                         n = p(),
                         m = ~(L.length + L.radius + L.width) + "px",
                         l;
                     if (L.shadow) {
                         for (l = 1; l <= L.lines; l++) {
                             g(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                         }
                     }
                     for (l = 1; l <= L.lines; l++) {
                         g(l);
                     }
                     return D(z(M, { margin: m + " 0 0 " + m, zoom: 1 }), n);
                 }),
                     (t.opacity = function (g, f, l, k) {
                         var j = g.firstChild;
                         (k = (k.shadow && k.lines) || 0), j && f + k < j.childNodes.length && ((j = j.childNodes[f + k]), (j = j && j.firstChild), (j = j && j.firstChild), j && (j.opacity = l));
                     });
             } else {
                 F = A(d, "animation");
             }
         })(),
         (K.Spinner = v);
 })(window, document);
 (function (a) {
     a.fn.spin = function (d, c) {
         var b = { tiny: { lines: 8, length: 2, width: 2, radius: 3 }, small: { lines: 8, length: 4, width: 3, radius: 5 }, large: { lines: 10, length: 8, width: 4, radius: 8 } };
         if (Spinner) {
             return this.each(function () {
                 var f = a(this),
                     e = f.data();
                 if (e.spinner) {
                     e.spinner.stop();
                     delete e.spinner;
                 }
                 if (d !== false) {
                     if (typeof d === "string") {
                         if (d in b) {
                             d = b[d];
                         } else {
                             d = {};
                         }
                         if (c) {
                             d.color = c;
                         }
                     }
                     e.spinner = new Spinner(a.extend({ color: f.css("color") }, d)).spin(this);
                 }
             });
         } else {
             throw "Spinner class not available.";
         }
     };
 })(jQuery);
 (function () {
     var A = this;
     var m = A._;
     var H = {};
     var G = Array.prototype,
         f = Object.prototype,
         u = Function.prototype;
     var K = G.push,
         r = G.slice,
         C = G.concat,
         d = f.toString,
         l = f.hasOwnProperty;
     var O = G.forEach,
         t = G.map,
         I = G.reduce,
         c = G.reduceRight,
         b = G.filter,
         F = G.every,
         s = G.some,
         q = G.indexOf,
         n = G.lastIndexOf,
         y = Array.isArray,
         e = Object.keys,
         J = u.bind;
     var P = function (Q) {
         if (Q instanceof P) {
             return Q;
         }
         if (!(this instanceof P)) {
             return new P(Q);
         }
         this._wrapped = Q;
     };
     if (typeof exports !== "undefined") {
         if (typeof module !== "undefined" && module.exports) {
             exports = module.exports = P;
         }
         exports._ = P;
     } else {
         A._ = P;
     }
     P.VERSION = "1.4.4";
     var L = (P.each = P.forEach = function (V, U, T) {
         if (V == null) {
             return;
         }
         if (O && V.forEach === O) {
             V.forEach(U, T);
         } else {
             if (V.length === +V.length) {
                 for (var S = 0, Q = V.length; S < Q; S++) {
                     if (U.call(T, V[S], S, V) === H) {
                         return;
                     }
                 }
             } else {
                 for (var R in V) {
                     if (P.has(V, R)) {
                         if (U.call(T, V[R], R, V) === H) {
                             return;
                         }
                     }
                 }
             }
         }
     });
     P.map = P.collect = function (T, S, R) {
         var Q = [];
         if (T == null) {
             return Q;
         }
         if (t && T.map === t) {
             return T.map(S, R);
         }
         L(T, function (W, U, V) {
             Q[Q.length] = S.call(R, W, U, V);
         });
         return Q;
     };
     var g = "Reduce of empty array with no initial value";
     P.reduce = P.foldl = P.inject = function (U, T, Q, S) {
         var R = arguments.length > 2;
         if (U == null) {
             U = [];
         }
         if (I && U.reduce === I) {
             if (S) {
                 T = P.bind(T, S);
             }
             return R ? U.reduce(T, Q) : U.reduce(T);
         }
         L(U, function (X, V, W) {
             if (!R) {
                 Q = X;
                 R = true;
             } else {
                 Q = T.call(S, Q, X, V, W);
             }
         });
         if (!R) {
             throw new TypeError(g);
         }
         return Q;
     };
     P.reduceRight = P.foldr = function (W, T, Q, S) {
         var R = arguments.length > 2;
         if (W == null) {
             W = [];
         }
         if (c && W.reduceRight === c) {
             if (S) {
                 T = P.bind(T, S);
             }
             return R ? W.reduceRight(T, Q) : W.reduceRight(T);
         }
         var V = W.length;
         if (V !== +V) {
             var U = P.keys(W);
             V = U.length;
         }
         L(W, function (Z, X, Y) {
             X = U ? U[--V] : --V;
             if (!R) {
                 Q = W[X];
                 R = true;
             } else {
                 Q = T.call(S, Q, W[X], X, Y);
             }
         });
         if (!R) {
             throw new TypeError(g);
         }
         return Q;
     };
     P.find = P.detect = function (T, S, R) {
         var Q;
         E(T, function (W, U, V) {
             if (S.call(R, W, U, V)) {
                 Q = W;
                 return true;
             }
         });
         return Q;
     };
     P.filter = P.select = function (T, S, R) {
         var Q = [];
         if (T == null) {
             return Q;
         }
         if (b && T.filter === b) {
             return T.filter(S, R);
         }
         L(T, function (W, U, V) {
             if (S.call(R, W, U, V)) {
                 Q[Q.length] = W;
             }
         });
         return Q;
     };
     P.reject = function (S, R, Q) {
         return P.filter(
             S,
             function (V, T, U) {
                 return !R.call(Q, V, T, U);
             },
             Q
         );
     };
     P.every = P.all = function (T, S, R) {
         S || (S = P.identity);
         var Q = true;
         if (T == null) {
             return Q;
         }
         if (F && T.every === F) {
             return T.every(S, R);
         }
         L(T, function (W, U, V) {
             if (!(Q = Q && S.call(R, W, U, V))) {
                 return H;
             }
         });
         return !!Q;
     };
     var E = (P.some = P.any = function (T, S, R) {
         S || (S = P.identity);
         var Q = false;
         if (T == null) {
             return Q;
         }
         if (s && T.some === s) {
             return T.some(S, R);
         }
         L(T, function (W, U, V) {
             if (Q || (Q = S.call(R, W, U, V))) {
                 return H;
             }
         });
         return !!Q;
     });
     P.contains = P.include = function (R, Q) {
         if (R == null) {
             return false;
         }
         if (q && R.indexOf === q) {
             return R.indexOf(Q) != -1;
         }
         return E(R, function (S) {
             return S === Q;
         });
     };
     P.invoke = function (S, T) {
         var Q = r.call(arguments, 2);
         var R = P.isFunction(T);
         return P.map(S, function (U) {
             return (R ? T : U[T]).apply(U, Q);
         });
     };
     P.pluck = function (R, Q) {
         return P.map(R, function (S) {
             return S[Q];
         });
     };
     P.where = function (R, Q, S) {
         if (P.isEmpty(Q)) {
             return S ? null : [];
         }
         return P[S ? "find" : "filter"](R, function (U) {
             for (var T in Q) {
                 if (Q[T] !== U[T]) {
                     return false;
                 }
             }
             return true;
         });
     };
     P.findWhere = function (R, Q) {
         return P.where(R, Q, true);
     };
     P.max = function (T, S, R) {
         if (!S && P.isArray(T) && T[0] === +T[0] && T.length < 65535) {
             return Math.max.apply(Math, T);
         }
         if (!S && P.isEmpty(T)) {
             return -Infinity;
         }
         var Q = { computed: -Infinity, value: -Infinity };
         L(T, function (X, U, W) {
             var V = S ? S.call(R, X, U, W) : X;
             V >= Q.computed && (Q = { value: X, computed: V });
         });
         return Q.value;
     };
     P.min = function (T, S, R) {
         if (!S && P.isArray(T) && T[0] === +T[0] && T.length < 65535) {
             return Math.min.apply(Math, T);
         }
         if (!S && P.isEmpty(T)) {
             return Infinity;
         }
         var Q = { computed: Infinity, value: Infinity };
         L(T, function (X, U, W) {
             var V = S ? S.call(R, X, U, W) : X;
             V < Q.computed && (Q = { value: X, computed: V });
         });
         return Q.value;
     };
     P.shuffle = function (T) {
         var S;
         var R = 0;
         var Q = [];
         L(T, function (U) {
             S = P.random(R++);
             Q[R - 1] = Q[S];
             Q[S] = U;
         });
         return Q;
     };
     var a = function (Q) {
         return P.isFunction(Q)
             ? Q
             : function (R) {
                   return R[Q];
               };
     };
     P.sortBy = function (T, S, Q) {
         var R = a(S);
         return P.pluck(
             P.map(T, function (W, U, V) {
                 return { value: W, index: U, criteria: R.call(Q, W, U, V) };
             }).sort(function (X, W) {
                 var V = X.criteria;
                 var U = W.criteria;
                 if (V !== U) {
                     if (V > U || V === void 0) {
                         return 1;
                     }
                     if (V < U || U === void 0) {
                         return -1;
                     }
                 }
                 return X.index < W.index ? -1 : 1;
             }),
             "value"
         );
     };
     var x = function (V, U, R, T) {
         var Q = {};
         var S = a(U || P.identity);
         L(V, function (Y, W) {
             var X = S.call(R, Y, W, V);
             T(Q, X, Y);
         });
         return Q;
     };
     P.groupBy = function (S, R, Q) {
         return x(S, R, Q, function (T, U, V) {
             (P.has(T, U) ? T[U] : (T[U] = [])).push(V);
         });
     };
     P.countBy = function (S, R, Q) {
         return x(S, R, Q, function (T, U) {
             if (!P.has(T, U)) {
                 T[U] = 0;
             }
             T[U]++;
         });
     };
     P.sortedIndex = function (X, W, T, S) {
         T = T == null ? P.identity : a(T);
         var V = T.call(S, W);
         var Q = 0,
             U = X.length;
         while (Q < U) {
             var R = (Q + U) >>> 1;
             T.call(S, X[R]) < V ? (Q = R + 1) : (U = R);
         }
         return Q;
     };
     P.toArray = function (Q) {
         if (!Q) {
             return [];
         }
         if (P.isArray(Q)) {
             return r.call(Q);
         }
         if (Q.length === +Q.length) {
             return P.map(Q, P.identity);
         }
         return P.values(Q);
     };
     P.size = function (Q) {
         if (Q == null) {
             return 0;
         }
         return Q.length === +Q.length ? Q.length : P.keys(Q).length;
     };
     P.first = P.head = P.take = function (S, R, Q) {
         if (S == null) {
             return void 0;
         }
         return R != null && !Q ? r.call(S, 0, R) : S[0];
     };
     P.initial = function (S, R, Q) {
         return r.call(S, 0, S.length - (R == null || Q ? 1 : R));
     };
     P.last = function (S, R, Q) {
         if (S == null) {
             return void 0;
         }
         if (R != null && !Q) {
             return r.call(S, Math.max(S.length - R, 0));
         } else {
             return S[S.length - 1];
         }
     };
     P.rest = P.tail = P.drop = function (S, R, Q) {
         return r.call(S, R == null || Q ? 1 : R);
     };
     P.compact = function (Q) {
         return P.filter(Q, P.identity);
     };
     var B = function (R, S, Q) {
         L(R, function (T) {
             if (P.isArray(T)) {
                 S ? K.apply(Q, T) : B(T, S, Q);
             } else {
                 Q.push(T);
             }
         });
         return Q;
     };
     P.flatten = function (R, Q) {
         return B(R, Q, []);
     };
     P.without = function (Q) {
         return P.difference(Q, r.call(arguments, 1));
     };
     P.uniq = P.unique = function (W, V, U, T) {
         if (P.isFunction(V)) {
             T = U;
             U = V;
             V = false;
         }
         var R = U ? P.map(W, U, T) : W;
         var S = [];
         var Q = [];
         L(R, function (Y, X) {
             if (V ? !X || Q[Q.length - 1] !== Y : !P.contains(Q, Y)) {
                 Q.push(Y);
                 S.push(W[X]);
             }
         });
         return S;
     };
     P.union = function () {
         return P.uniq(C.apply(G, arguments));
     };
     P.intersection = function (R) {
         var Q = r.call(arguments, 1);
         return P.filter(P.uniq(R), function (S) {
             return P.every(Q, function (T) {
                 return P.indexOf(T, S) >= 0;
             });
         });
     };
     P.difference = function (R) {
         var Q = C.apply(G, r.call(arguments, 1));
         return P.filter(R, function (S) {
             return !P.contains(Q, S);
         });
     };
     P.zip = function () {
         var Q = r.call(arguments);
         var T = P.max(P.pluck(Q, "length"));
         var S = new Array(T);
         for (var R = 0; R < T; R++) {
             S[R] = P.pluck(Q, "" + R);
         }
         return S;
     };
     P.object = function (U, S) {
         if (U == null) {
             return {};
         }
         var Q = {};
         for (var T = 0, R = U.length; T < R; T++) {
             if (S) {
                 Q[U[T]] = S[T];
             } else {
                 Q[U[T][0]] = U[T][1];
             }
         }
         return Q;
     };
     P.indexOf = function (U, S, T) {
         if (U == null) {
             return -1;
         }
         var R = 0,
             Q = U.length;
         if (T) {
             if (typeof T == "number") {
                 R = T < 0 ? Math.max(0, Q + T) : T;
             } else {
                 R = P.sortedIndex(U, S);
                 return U[R] === S ? R : -1;
             }
         }
         if (q && U.indexOf === q) {
             return U.indexOf(S, T);
         }
         for (; R < Q; R++) {
             if (U[R] === S) {
                 return R;
             }
         }
         return -1;
     };
     P.lastIndexOf = function (U, S, T) {
         if (U == null) {
             return -1;
         }
         var Q = T != null;
         if (n && U.lastIndexOf === n) {
             return Q ? U.lastIndexOf(S, T) : U.lastIndexOf(S);
         }
         var R = Q ? T : U.length;
         while (R--) {
             if (U[R] === S) {
                 return R;
             }
         }
         return -1;
     };
     P.range = function (V, T, U) {
         if (arguments.length <= 1) {
             T = V || 0;
             V = 0;
         }
         U = arguments[2] || 1;
         var R = Math.max(Math.ceil((T - V) / U), 0);
         var Q = 0;
         var S = new Array(R);
         while (Q < R) {
             S[Q++] = V;
             V += U;
         }
         return S;
     };
     P.bind = function (S, R) {
         if (S.bind === J && J) {
             return J.apply(S, r.call(arguments, 1));
         }
         var Q = r.call(arguments, 2);
         return function () {
             return S.apply(R, Q.concat(r.call(arguments)));
         };
     };
     P.partial = function (R) {
         var Q = r.call(arguments, 1);
         return function () {
             return R.apply(this, Q.concat(r.call(arguments)));
         };
     };
     P.bindAll = function (R) {
         var Q = r.call(arguments, 1);
         if (Q.length === 0) {
             Q = P.functions(R);
         }
         L(Q, function (S) {
             R[S] = P.bind(R[S], R);
         });
         return R;
     };
     P.memoize = function (S, R) {
         var Q = {};
         R || (R = P.identity);
         return function () {
             var T = R.apply(this, arguments);
             return P.has(Q, T) ? Q[T] : (Q[T] = S.apply(this, arguments));
         };
     };
     P.delay = function (R, S) {
         var Q = r.call(arguments, 2);
         return setTimeout(function () {
             return R.apply(null, Q);
         }, S);
     };
     P.defer = function (Q) {
         return P.delay.apply(P, [Q, 1].concat(r.call(arguments, 1)));
     };
     P.throttle = function (V, X) {
         var T, S, W, Q;
         var U = 0;
         var R = function () {
             U = new Date();
             W = null;
             Q = V.apply(T, S);
         };
         return function () {
             var Y = new Date();
             var Z = X - (Y - U);
             T = this;
             S = arguments;
             if (Z <= 0) {
                 clearTimeout(W);
                 W = null;
                 U = Y;
                 Q = V.apply(T, S);
             } else {
                 if (!W) {
                     W = setTimeout(R, Z);
                 }
             }
             return Q;
         };
     };
     P.debounce = function (S, U, R) {
         var T, Q;
         return function () {
             var Y = this,
                 X = arguments;
             var W = function () {
                 T = null;
                 if (!R) {
                     Q = S.apply(Y, X);
                 }
             };
             var V = R && !T;
             clearTimeout(T);
             T = setTimeout(W, U);
             if (V) {
                 Q = S.apply(Y, X);
             }
             return Q;
         };
     };
     P.once = function (S) {
         var Q = false,
             R;
         return function () {
             if (Q) {
                 return R;
             }
             Q = true;
             R = S.apply(this, arguments);
             S = null;
             return R;
         };
     };
     P.wrap = function (Q, R) {
         return function () {
             var S = [Q];
             K.apply(S, arguments);
             return R.apply(this, S);
         };
     };
     P.compose = function () {
         var Q = arguments;
         return function () {
             var R = arguments;
             for (var S = Q.length - 1; S >= 0; S--) {
                 R = [Q[S].apply(this, R)];
             }
             return R[0];
         };
     };
     P.after = function (R, Q) {
         if (R <= 0) {
             return Q();
         }
         return function () {
             if (--R < 1) {
                 return Q.apply(this, arguments);
             }
         };
     };
     P.keys =
         e ||
         function (S) {
             if (S !== Object(S)) {
                 throw new TypeError("Invalid object");
             }
             var R = [];
             for (var Q in S) {
                 if (P.has(S, Q)) {
                     R[R.length] = Q;
                 }
             }
             return R;
         };
     P.values = function (S) {
         var Q = [];
         for (var R in S) {
             if (P.has(S, R)) {
                 Q.push(S[R]);
             }
         }
         return Q;
     };
     P.pairs = function (S) {
         var R = [];
         for (var Q in S) {
             if (P.has(S, Q)) {
                 R.push([Q, S[Q]]);
             }
         }
         return R;
     };
     P.invert = function (S) {
         var Q = {};
         for (var R in S) {
             if (P.has(S, R)) {
                 Q[S[R]] = R;
             }
         }
         return Q;
     };
     P.functions = P.methods = function (S) {
         var R = [];
         for (var Q in S) {
             if (P.isFunction(S[Q])) {
                 R.push(Q);
             }
         }
         return R.sort();
     };
     P.extend = function (Q) {
         L(r.call(arguments, 1), function (R) {
             if (R) {
                 for (var S in R) {
                     Q[S] = R[S];
                 }
             }
         });
         return Q;
     };
     P.pick = function (R) {
         var S = {};
         var Q = C.apply(G, r.call(arguments, 1));
         L(Q, function (T) {
             if (T in R) {
                 S[T] = R[T];
             }
         });
         return S;
     };
     P.omit = function (S) {
         var T = {};
         var R = C.apply(G, r.call(arguments, 1));
         for (var Q in S) {
             if (!P.contains(R, Q)) {
                 T[Q] = S[Q];
             }
         }
         return T;
     };
     P.defaults = function (Q) {
         L(r.call(arguments, 1), function (R) {
             if (R) {
                 for (var S in R) {
                     if (Q[S] == null) {
                         Q[S] = R[S];
                     }
                 }
             }
         });
         return Q;
     };
     P.clone = function (Q) {
         if (!P.isObject(Q)) {
             return Q;
         }
         return P.isArray(Q) ? Q.slice() : P.extend({}, Q);
     };
     P.tap = function (R, Q) {
         Q(R);
         return R;
     };
     var M = function (X, W, R, S) {
         if (X === W) {
             return X !== 0 || 1 / X == 1 / W;
         }
         if (X == null || W == null) {
             return X === W;
         }
         if (X instanceof P) {
             X = X._wrapped;
         }
         if (W instanceof P) {
             W = W._wrapped;
         }
         var U = d.call(X);
         if (U != d.call(W)) {
             return false;
         }
         switch (U) {
             case "[object String]":
                 return X == String(W);
             case "[object Number]":
                 return X != +X ? W != +W : X == 0 ? 1 / X == 1 / W : X == +W;
             case "[object Date]":
             case "[object Boolean]":
                 return +X == +W;
             case "[object RegExp]":
                 return X.source == W.source && X.global == W.global && X.multiline == W.multiline && X.ignoreCase == W.ignoreCase;
         }
         if (typeof X != "object" || typeof W != "object") {
             return false;
         }
         var Q = R.length;
         while (Q--) {
             if (R[Q] == X) {
                 return S[Q] == W;
             }
         }
         R.push(X);
         S.push(W);
         var Z = 0,
             aa = true;
         if (U == "[object Array]") {
             Z = X.length;
             aa = Z == W.length;
             if (aa) {
                 while (Z--) {
                     if (!(aa = M(X[Z], W[Z], R, S))) {
                         break;
                     }
                 }
             }
         } else {
             var V = X.constructor,
                 T = W.constructor;
             if (V !== T && !(P.isFunction(V) && V instanceof V && P.isFunction(T) && T instanceof T)) {
                 return false;
             }
             for (var Y in X) {
                 if (P.has(X, Y)) {
                     Z++;
                     if (!(aa = P.has(W, Y) && M(X[Y], W[Y], R, S))) {
                         break;
                     }
                 }
             }
             if (aa) {
                 for (Y in W) {
                     if (P.has(W, Y) && !Z--) {
                         break;
                     }
                 }
                 aa = !Z;
             }
         }
         R.pop();
         S.pop();
         return aa;
     };
     P.isEqual = function (R, Q) {
         return M(R, Q, [], []);
     };
     P.isEmpty = function (R) {
         if (R == null) {
             return true;
         }
         if (P.isArray(R) || P.isString(R)) {
             return R.length === 0;
         }
         for (var Q in R) {
             if (P.has(R, Q)) {
                 return false;
             }
         }
         return true;
     };
     P.isElement = function (Q) {
         return !!(Q && Q.nodeType === 1);
     };
     P.isArray =
         y ||
         function (Q) {
             return d.call(Q) == "[object Array]";
         };
     P.isObject = function (Q) {
         return Q === Object(Q);
     };
     L(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (Q) {
         P["is" + Q] = function (R) {
             return d.call(R) == "[object " + Q + "]";
         };
     });
     if (!P.isArguments(arguments)) {
         P.isArguments = function (Q) {
             return !!(Q && P.has(Q, "callee"));
         };
     }
     if (typeof /./ !== "function") {
         P.isFunction = function (Q) {
             return typeof Q === "function";
         };
     }
     P.isFinite = function (Q) {
         return isFinite(Q) && !isNaN(parseFloat(Q));
     };
     P.isNaN = function (Q) {
         return P.isNumber(Q) && Q != +Q;
     };
     P.isBoolean = function (Q) {
         return Q === true || Q === false || d.call(Q) == "[object Boolean]";
     };
     P.isNull = function (Q) {
         return Q === null;
     };
     P.isUndefined = function (Q) {
         return Q === void 0;
     };
     P.has = function (R, Q) {
         return l.call(R, Q);
     };
     P.noConflict = function () {
         A._ = m;
         return this;
     };
     P.identity = function (Q) {
         return Q;
     };
     P.times = function (U, T, S) {
         var Q = Array(U);
         for (var R = 0; R < U; R++) {
             Q[R] = T.call(S, R);
         }
         return Q;
     };
     P.random = function (R, Q) {
         if (Q == null) {
             Q = R;
             R = 0;
         }
         return R + Math.floor(Math.random() * (Q - R + 1));
     };
     var p = { escape: { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;" } };
     p.unescape = P.invert(p.escape);
     var N = { escape: new RegExp("[" + P.keys(p.escape).join("") + "]", "g"), unescape: new RegExp("(" + P.keys(p.unescape).join("|") + ")", "g") };
     P.each(["escape", "unescape"], function (Q) {
         P[Q] = function (R) {
             if (R == null) {
                 return "";
             }
             return ("" + R).replace(N[Q], function (S) {
                 return p[Q][S];
             });
         };
     });
     P.result = function (Q, S) {
         if (Q == null) {
             return null;
         }
         var R = Q[S];
         return P.isFunction(R) ? R.call(Q) : R;
     };
     P.mixin = function (Q) {
         L(P.functions(Q), function (R) {
             var S = (P[R] = Q[R]);
             P.prototype[R] = function () {
                 var T = [this._wrapped];
                 K.apply(T, arguments);
                 return v.call(this, S.apply(P, T));
             };
         });
     };
     var D = 0;
     P.uniqueId = function (Q) {
         var R = ++D + "";
         return Q ? Q + R : R;
     };
     P.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
     var z = /(.)^/;
     var j = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029" };
     var k = /\\|'|\r|\n|\t|\u2028|\u2029/g;
     P.template = function (Y, T, S) {
         var R;
         S = P.defaults({}, S, P.templateSettings);
         var U = new RegExp([(S.escape || z).source, (S.interpolate || z).source, (S.evaluate || z).source].join("|") + "|$", "g");
         var V = 0;
         var Q = "__p+='";
         Y.replace(U, function (aa, ab, Z, ad, ac) {
             Q += Y.slice(V, ac).replace(k, function (ae) {
                 return "\\" + j[ae];
             });
             if (ab) {
                 Q += "'+\n((__t=(" + ab + "))==null?'':_.escape(__t))+\n'";
             }
             if (Z) {
                 Q += "'+\n((__t=(" + Z + "))==null?'':__t)+\n'";
             }
             if (ad) {
                 Q += "';\n" + ad + "\n__p+='";
             }
             V = ac + aa.length;
             return aa;
         });
         Q += "';\n";
         if (!S.variable) {
             Q = "with(obj||{}){\n" + Q + "}\n";
         }
         Q = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + Q + "return __p;\n";
         try {
             R = new Function(S.variable || "obj", "_", Q);
         } catch (W) {
             W.source = Q;
             throw W;
         }
         if (T) {
             return R(T, P);
         }
         var X = function (Z) {
             return R.call(this, Z, P);
         };
         X.source = "function(" + (S.variable || "obj") + "){\n" + Q + "}";
         return X;
     };
     P.chain = function (Q) {
         return P(Q).chain();
     };
     var v = function (Q) {
         return this._chain ? P(Q).chain() : Q;
     };
     P.mixin(P);
     L(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (Q) {
         var R = G[Q];
         P.prototype[Q] = function () {
             var S = this._wrapped;
             R.apply(S, arguments);
             if ((Q == "shift" || Q == "splice") && S.length === 0) {
                 delete S[0];
             }
             return v.call(this, S);
         };
     });
     L(["concat", "join", "slice"], function (Q) {
         var R = G[Q];
         P.prototype[Q] = function () {
             return v.call(this, R.apply(this._wrapped, arguments));
         };
     });
     P.extend(P.prototype, {
         chain: function () {
             this._chain = true;
             return this;
         },
         value: function () {
             return this._wrapped;
         },
     });
 }.call(this));
 (function () {
     var y = this;
     var F = y.Backbone;
     var g = [];
     var H = g.push;
     var q = g.slice;
     var x = g.splice;
     var D;
     if (typeof exports !== "undefined") {
         D = exports;
     } else {
         D = y.Backbone = {};
     }
     D.VERSION = "1.0.0";
     var P = y._;
     if (!P && typeof require !== "undefined") {
         P = require("underscore");
     }
     D.$ = y.jQuery || y.Zepto || y.ender || y.$;
     D.noConflict = function () {
         y.Backbone = F;
         return this;
     };
     D.emulateHTTP = false;
     D.emulateJSON = false;
     var N = (D.Events = {
         on: function (Q, T, S) {
             if (!B(this, "on", Q, [T, S]) || !T) {
                 return this;
             }
             this._events || (this._events = {});
             var R = this._events[Q] || (this._events[Q] = []);
             R.push({ callback: T, context: S, ctx: S || this });
             return this;
         },
         once: function (R, U, S) {
             if (!B(this, "once", R, [U, S]) || !U) {
                 return this;
             }
             var Q = this;
             var T = P.once(function () {
                 Q.off(R, T);
                 U.apply(this, arguments);
             });
             T._callback = U;
             return this.on(R, T, S);
         },
         off: function (Q, Z, R) {
             var X, Y, aa, W, V, S, U, T;
             if (!this._events || !B(this, "off", Q, [Z, R])) {
                 return this;
             }
             if (!Q && !Z && !R) {
                 this._events = {};
                 return this;
             }
             W = Q ? [Q] : P.keys(this._events);
             for (V = 0, S = W.length; V < S; V++) {
                 Q = W[V];
                 if ((aa = this._events[Q])) {
                     this._events[Q] = X = [];
                     if (Z || R) {
                         for (U = 0, T = aa.length; U < T; U++) {
                             Y = aa[U];
                             if ((Z && Z !== Y.callback && Z !== Y.callback._callback) || (R && R !== Y.context)) {
                                 X.push(Y);
                             }
                         }
                     }
                     if (!X.length) {
                         delete this._events[Q];
                     }
                 }
             }
             return this;
         },
         trigger: function (S) {
             if (!this._events) {
                 return this;
             }
             var R = q.call(arguments, 1);
             if (!B(this, "trigger", S, R)) {
                 return this;
             }
             var T = this._events[S];
             var Q = this._events.all;
             if (T) {
                 b(T, R);
             }
             if (Q) {
                 b(Q, arguments);
             }
             return this;
         },
         stopListening: function (T, Q, V) {
             var R = this._listeners;
             if (!R) {
                 return this;
             }
             var S = !Q && !V;
             if (typeof Q === "object") {
                 V = this;
             }
             if (T) {
                 (R = {})[T._listenerId] = T;
             }
             for (var U in R) {
                 R[U].off(Q, V, this);
                 if (S) {
                     delete this._listeners[U];
                 }
             }
             return this;
         },
     });
     var A = /\s+/;
     var B = function (X, V, R, U) {
         if (!R) {
             return true;
         }
         if (typeof R === "object") {
             for (var T in R) {
                 X[V].apply(X, [T, R[T]].concat(U));
             }
             return false;
         }
         if (A.test(R)) {
             var W = R.split(A);
             for (var S = 0, Q = W.length; S < Q; S++) {
                 X[V].apply(X, [W[S]].concat(U));
             }
             return false;
         }
         return true;
     };
     var b = function (V, T) {
         var W,
             U = -1,
             S = V.length,
             R = T[0],
             Q = T[1],
             X = T[2];
         switch (T.length) {
             case 0:
                 while (++U < S) {
                     (W = V[U]).callback.call(W.ctx);
                 }
                 return;
             case 1:
                 while (++U < S) {
                     (W = V[U]).callback.call(W.ctx, R);
                 }
                 return;
             case 2:
                 while (++U < S) {
                     (W = V[U]).callback.call(W.ctx, R, Q);
                 }
                 return;
             case 3:
                 while (++U < S) {
                     (W = V[U]).callback.call(W.ctx, R, Q, X);
                 }
                 return;
             default:
                 while (++U < S) {
                     (W = V[U]).callback.apply(W.ctx, T);
                 }
         }
     };
     var G = { listenTo: "on", listenToOnce: "once" };
     P.each(G, function (Q, R) {
         N[R] = function (U, S, W) {
             var T = this._listeners || (this._listeners = {});
             var V = U._listenerId || (U._listenerId = P.uniqueId("l"));
             T[V] = U;
             if (typeof S === "object") {
                 W = this;
             }
             U[Q](S, W, this);
             return this;
         };
     });
     N.bind = N.on;
     N.unbind = N.off;
     P.extend(D, N);
     var I = (D.Model = function (Q, S) {
         var T;
         var R = Q || {};
         S || (S = {});
         this.cid = P.uniqueId("c");
         this.attributes = {};
         P.extend(this, P.pick(S, J));
         if (S.parse) {
             R = this.parse(R, S) || {};
         }
         if ((T = P.result(this, "defaults"))) {
             R = P.defaults({}, R, T);
         }
         this.set(R, S);
         this.changed = {};
         this.initialize.apply(this, arguments);
     });
     var J = ["url", "urlRoot", "collection"];
     P.extend(I.prototype, N, {
         changed: null,
         validationError: null,
         idAttribute: "id",
         initialize: function () {},
         toJSON: function (Q) {
             return P.clone(this.attributes);
         },
         sync: function () {
             return D.sync.apply(this, arguments);
         },
         get: function (Q) {
             return this.attributes[Q];
         },
         escape: function (Q) {
             return P.escape(this.get(Q));
         },
         has: function (Q) {
             return this.get(Q) != null;
         },
         set: function (Y, Q, ac) {
             var W, Z, aa, X, V, ab, S, U;
             if (Y == null) {
                 return this;
             }
             if (typeof Y === "object") {
                 Z = Y;
                 ac = Q;
             } else {
                 (Z = {})[Y] = Q;
             }
             ac || (ac = {});
             if (!this._validate(Z, ac)) {
                 return false;
             }
             aa = ac.unset;
             V = ac.silent;
             X = [];
             ab = this._changing;
             this._changing = true;
             if (!ab) {
                 this._previousAttributes = P.clone(this.attributes);
                 this.changed = {};
             }
             (U = this.attributes), (S = this._previousAttributes);
             if (this.idAttribute in Z) {
                 this.id = Z[this.idAttribute];
             }
             for (W in Z) {
                 Q = Z[W];
                 if (!P.isEqual(U[W], Q)) {
                     X.push(W);
                 }
                 if (!P.isEqual(S[W], Q)) {
                     this.changed[W] = Q;
                 } else {
                     delete this.changed[W];
                 }
                 aa ? delete U[W] : (U[W] = Q);
             }
             if (!V) {
                 if (X.length) {
                     this._pending = true;
                 }
                 for (var T = 0, R = X.length; T < R; T++) {
                     this.trigger("change:" + X[T], this, U[X[T]], ac);
                 }
             }
             if (ab) {
                 return this;
             }
             if (!V) {
                 while (this._pending) {
                     this._pending = false;
                     this.trigger("change", this, ac);
                 }
             }
             this._pending = false;
             this._changing = false;
             return this;
         },
         unset: function (Q, R) {
             return this.set(Q, void 0, P.extend({}, R, { unset: true }));
         },
         clear: function (R) {
             var Q = {};
             for (var S in this.attributes) {
                 Q[S] = void 0;
             }
             return this.set(Q, P.extend({}, R, { unset: true }));
         },
         hasChanged: function (Q) {
             if (Q == null) {
                 return !P.isEmpty(this.changed);
             }
             return P.has(this.changed, Q);
         },
         changedAttributes: function (S) {
             if (!S) {
                 return this.hasChanged() ? P.clone(this.changed) : false;
             }
             var U,
                 T = false;
             var R = this._changing ? this._previousAttributes : this.attributes;
             for (var Q in S) {
                 if (P.isEqual(R[Q], (U = S[Q]))) {
                     continue;
                 }
                 (T || (T = {}))[Q] = U;
             }
             return T;
         },
         previous: function (Q) {
             if (Q == null || !this._previousAttributes) {
                 return null;
             }
             return this._previousAttributes[Q];
         },
         previousAttributes: function () {
             return P.clone(this._previousAttributes);
         },
         fetch: function (R) {
             R = R ? P.clone(R) : {};
             if (R.parse === void 0) {
                 R.parse = true;
             }
             var Q = this;
             var S = R.success;
             R.success = function (T) {
                 if (!Q.set(Q.parse(T, R), R)) {
                     return false;
                 }
                 if (S) {
                     S(Q, T, R);
                 }
                 Q.trigger("sync", Q, T, R);
             };
             L(this, R);
             return this.sync("read", this, R);
         },
         save: function (U, R, Y) {
             var V,
                 Q,
                 X,
                 S = this.attributes;
             if (U == null || typeof U === "object") {
                 V = U;
                 Y = R;
             } else {
                 (V = {})[U] = R;
             }
             if (V && (!Y || !Y.wait) && !this.set(V, Y)) {
                 return false;
             }
             Y = P.extend({ validate: true }, Y);
             if (!this._validate(V, Y)) {
                 return false;
             }
             if (V && Y.wait) {
                 this.attributes = P.extend({}, S, V);
             }
             if (Y.parse === void 0) {
                 Y.parse = true;
             }
             var T = this;
             var W = Y.success;
             Y.success = function (aa) {
                 T.attributes = S;
                 var Z = T.parse(aa, Y);
                 if (Y.wait) {
                     Z = P.extend(V || {}, Z);
                 }
                 if (P.isObject(Z) && !T.set(Z, Y)) {
                     return false;
                 }
                 if (W) {
                     W(T, aa, Y);
                 }
                 T.trigger("sync", T, aa, Y);
             };
             L(this, Y);
             Q = this.isNew() ? "create" : Y.patch ? "patch" : "update";
             if (Q === "patch") {
                 Y.attrs = V;
             }
             X = this.sync(Q, this, Y);
             if (V && Y.wait) {
                 this.attributes = S;
             }
             return X;
         },
         destroy: function (R) {
             R = R ? P.clone(R) : {};
             var Q = this;
             var U = R.success;
             var S = function () {
                 Q.trigger("destroy", Q, Q.collection, R);
             };
             R.success = function (V) {
                 if (R.wait || Q.isNew()) {
                     S();
                 }
                 if (U) {
                     U(Q, V, R);
                 }
                 if (!Q.isNew()) {
                     Q.trigger("sync", Q, V, R);
                 }
             };
             if (this.isNew()) {
                 R.success();
                 return false;
             }
             L(this, R);
             var T = this.sync("delete", this, R);
             if (!R.wait) {
                 S();
             }
             return T;
         },
         url: function () {
             var Q = P.result(this, "urlRoot") || P.result(this.collection, "url") || u();
             if (this.isNew()) {
                 return Q;
             }
             return Q + (Q.charAt(Q.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id);
         },
         parse: function (R, Q) {
             return R;
         },
         clone: function () {
             return new this.constructor(this.attributes);
         },
         isNew: function () {
             return this.id == null;
         },
         isValid: function (Q) {
             return this._validate({}, P.extend(Q || {}, { validate: true }));
         },
         _validate: function (S, R) {
             if (!R.validate || !this.validate) {
                 return true;
             }
             S = P.extend({}, this.attributes, S);
             var Q = (this.validationError = this.validate(S, R) || null);
             if (!Q) {
                 return true;
             }
             this.trigger("invalid", this, Q, P.extend(R || {}, { validationError: Q }));
             return false;
         },
     });
     var a = ["keys", "values", "pairs", "invert", "pick", "omit"];
     P.each(a, function (Q) {
         I.prototype[Q] = function () {
             var R = q.call(arguments);
             R.unshift(this.attributes);
             return P[Q].apply(P, R);
         };
     });
     var c = (D.Collection = function (R, Q) {
         Q || (Q = {});
         if (Q.url) {
             this.url = Q.url;
         }
         if (Q.model) {
             this.model = Q.model;
         }
         if (Q.comparator !== void 0) {
             this.comparator = Q.comparator;
         }
         this._reset();
         this.initialize.apply(this, arguments);
         if (R) {
             this.reset(R, P.extend({ silent: true }, Q));
         }
     });
     var r = { add: true, remove: true, merge: true };
     var O = { add: true, merge: false, remove: false };
     P.extend(c.prototype, N, {
         model: I,
         initialize: function () {},
         toJSON: function (Q) {
             return this.map(function (R) {
                 return R.toJSON(Q);
             });
         },
         sync: function () {
             return D.sync.apply(this, arguments);
         },
         add: function (R, Q) {
             return this.set(R, P.defaults(Q || {}, O));
         },
         remove: function (V, T) {
             V = P.isArray(V) ? V.slice() : [V];
             T || (T = {});
             var U, Q, S, R;
             for (U = 0, Q = V.length; U < Q; U++) {
                 R = this.get(V[U]);
                 if (!R) {
                     continue;
                 }
                 delete this._byId[R.id];
                 delete this._byId[R.cid];
                 S = this.indexOf(R);
                 this.models.splice(S, 1);
                 this.length--;
                 if (!T.silent) {
                     T.index = S;
                     R.trigger("remove", R, this, T);
                 }
                 this._removeReference(R);
             }
             return this;
         },
         set: function (R, ad) {
             ad = P.defaults(ad || {}, r);
             if (ad.parse) {
                 R = this.parse(R, ad);
             }
             if (!P.isArray(R)) {
                 R = R ? [R] : [];
             }
             var Y, U, aa, ab, S, Z;
             var T = ad.at;
             var X = this.comparator && T == null && ad.sort !== false;
             var V = P.isString(this.comparator) ? this.comparator : null;
             var ac = [],
                 Q = [],
                 W = {};
             for (Y = 0, U = R.length; Y < U; Y++) {
                 if (!(aa = this._prepareModel(R[Y], ad))) {
                     continue;
                 }
                 if ((S = this.get(aa))) {
                     if (ad.remove) {
                         W[S.cid] = true;
                     }
                     if (ad.merge) {
                         S.set(aa.attributes, ad);
                         if (X && !Z && S.hasChanged(V)) {
                             Z = true;
                         }
                     }
                 } else {
                     if (ad.add) {
                         ac.push(aa);
                         aa.on("all", this._onModelEvent, this);
                         this._byId[aa.cid] = aa;
                         if (aa.id != null) {
                             this._byId[aa.id] = aa;
                         }
                     }
                 }
             }
             if (ad.remove) {
                 for (Y = 0, U = this.length; Y < U; ++Y) {
                     if (!W[(aa = this.models[Y]).cid]) {
                         Q.push(aa);
                     }
                 }
                 if (Q.length) {
                     this.remove(Q, ad);
                 }
             }
             if (ac.length) {
                 if (X) {
                     Z = true;
                 }
                 this.length += ac.length;
                 if (T != null) {
                     x.apply(this.models, [T, 0].concat(ac));
                 } else {
                     H.apply(this.models, ac);
                 }
             }
             if (Z) {
                 this.sort({ silent: true });
             }
             if (ad.silent) {
                 return this;
             }
             for (Y = 0, U = ac.length; Y < U; Y++) {
                 (aa = ac[Y]).trigger("add", aa, this, ad);
             }
             if (Z) {
                 this.trigger("sort", this, ad);
             }
             return this;
         },
         reset: function (T, R) {
             R || (R = {});
             for (var S = 0, Q = this.models.length; S < Q; S++) {
                 this._removeReference(this.models[S]);
             }
             R.previousModels = this.models;
             this._reset();
             this.add(T, P.extend({ silent: true }, R));
             if (!R.silent) {
                 this.trigger("reset", this, R);
             }
             return this;
         },
         push: function (R, Q) {
             R = this._prepareModel(R, Q);
             this.add(R, P.extend({ at: this.length }, Q));
             return R;
         },
         pop: function (R) {
             var Q = this.at(this.length - 1);
             this.remove(Q, R);
             return Q;
         },
         unshift: function (R, Q) {
             R = this._prepareModel(R, Q);
             this.add(R, P.extend({ at: 0 }, Q));
             return R;
         },
         shift: function (R) {
             var Q = this.at(0);
             this.remove(Q, R);
             return Q;
         },
         slice: function (R, Q) {
             return this.models.slice(R, Q);
         },
         get: function (Q) {
             if (Q == null) {
                 return void 0;
             }
             return this._byId[Q.id != null ? Q.id : Q.cid || Q];
         },
         at: function (Q) {
             return this.models[Q];
         },
         where: function (Q, R) {
             if (P.isEmpty(Q)) {
                 return R ? void 0 : [];
             }
             return this[R ? "find" : "filter"](function (S) {
                 for (var T in Q) {
                     if (Q[T] !== S.get(T)) {
                         return false;
                     }
                 }
                 return true;
             });
         },
         findWhere: function (Q) {
             return this.where(Q, true);
         },
         sort: function (Q) {
             if (!this.comparator) {
                 throw new Error("Cannot sort a set without a comparator");
             }
             Q || (Q = {});
             if (P.isString(this.comparator) || this.comparator.length === 1) {
                 this.models = this.sortBy(this.comparator, this);
             } else {
                 this.models.sort(P.bind(this.comparator, this));
             }
             if (!Q.silent) {
                 this.trigger("sort", this, Q);
             }
             return this;
         },
         sortedIndex: function (Q, T, R) {
             T || (T = this.comparator);
             var S = P.isFunction(T)
                 ? T
                 : function (U) {
                       return U.get(T);
                   };
             return P.sortedIndex(this.models, Q, S, R);
         },
         pluck: function (Q) {
             return P.invoke(this.models, "get", Q);
         },
         fetch: function (Q) {
             Q = Q ? P.clone(Q) : {};
             if (Q.parse === void 0) {
                 Q.parse = true;
             }
             var S = Q.success;
             var R = this;
             Q.success = function (T) {
                 var U = Q.reset ? "reset" : "set";
                 R[U](T, Q);
                 if (S) {
                     S(R, T, Q);
                 }
                 R.trigger("sync", R, T, Q);
             };
             L(this, Q);
             return this.sync("read", this, Q);
         },
         create: function (R, Q) {
             Q = Q ? P.clone(Q) : {};
             if (!(R = this._prepareModel(R, Q))) {
                 return false;
             }
             if (!Q.wait) {
                 this.add(R, Q);
             }
             var T = this;
             var S = Q.success;
             Q.success = function (U) {
                 if (Q.wait) {
                     T.add(R, Q);
                 }
                 if (S) {
                     S(R, U, Q);
                 }
             };
             R.save(null, Q);
             return R;
         },
         parse: function (R, Q) {
             return R;
         },
         clone: function () {
             return new this.constructor(this.models);
         },
         _reset: function () {
             this.length = 0;
             this.models = [];
             this._byId = {};
         },
         _prepareModel: function (S, R) {
             if (S instanceof I) {
                 if (!S.collection) {
                     S.collection = this;
                 }
                 return S;
             }
             R || (R = {});
             R.collection = this;
             var Q = new this.model(S, R);
             if (!Q._validate(S, R)) {
                 this.trigger("invalid", this, S, R);
                 return false;
             }
             return Q;
         },
         _removeReference: function (Q) {
             if (this === Q.collection) {
                 delete Q.collection;
             }
             Q.off("all", this._onModelEvent, this);
         },
         _onModelEvent: function (S, R, T, Q) {
             if ((S === "add" || S === "remove") && T !== this) {
                 return;
             }
             if (S === "destroy") {
                 this.remove(R, Q);
             }
             if (R && S === "change:" + R.idAttribute) {
                 delete this._byId[R.previous(R.idAttribute)];
                 if (R.id != null) {
                     this._byId[R.id] = R;
                 }
             }
             this.trigger.apply(this, arguments);
         },
     });
     var C = [
         "forEach",
         "each",
         "map",
         "collect",
         "reduce",
         "foldl",
         "inject",
         "reduceRight",
         "foldr",
         "find",
         "detect",
         "filter",
         "select",
         "reject",
         "every",
         "all",
         "some",
         "any",
         "include",
         "contains",
         "invoke",
         "max",
         "min",
         "toArray",
         "size",
         "first",
         "head",
         "take",
         "initial",
         "rest",
         "tail",
         "drop",
         "last",
         "without",
         "indexOf",
         "shuffle",
         "lastIndexOf",
         "isEmpty",
         "chain",
     ];
     P.each(C, function (Q) {
         c.prototype[Q] = function () {
             var R = q.call(arguments);
             R.unshift(this.models);
             return P[Q].apply(P, R);
         };
     });
     var m = ["groupBy", "countBy", "sortBy"];
     P.each(m, function (Q) {
         c.prototype[Q] = function (T, R) {
             var S = P.isFunction(T)
                 ? T
                 : function (U) {
                       return U.get(T);
                   };
             return P[Q](this.models, S, R);
         };
     });
     var K = (D.View = function (Q) {
         this.cid = P.uniqueId("view");
         this._configure(Q || {});
         this._ensureElement();
         this.initialize.apply(this, arguments);
         this.delegateEvents();
     });
     var z = /^(\S+)\s*(.*)$/;
     var e = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
     P.extend(K.prototype, N, {
         tagName: "div",
         $: function (Q) {
             return this.$el.find(Q);
         },
         initialize: function () {},
         render: function () {
             return this;
         },
         remove: function () {
             this.$el.remove();
             this.stopListening();
             return this;
         },
         setElement: function (Q, R) {
             if (this.$el) {
                 this.undelegateEvents();
             }
             this.$el = Q instanceof D.$ ? Q : D.$(Q);
             this.el = this.$el[0];
             if (R !== false) {
                 this.delegateEvents();
             }
             return this;
         },
         delegateEvents: function (U) {
             if (!(U || (U = P.result(this, "events")))) {
                 return this;
             }
             this.undelegateEvents();
             for (var T in U) {
                 var V = U[T];
                 if (!P.isFunction(V)) {
                     V = this[U[T]];
                 }
                 if (!V) {
                     continue;
                 }
                 var S = T.match(z);
                 var R = S[1],
                     Q = S[2];
                 V = P.bind(V, this);
                 R += ".delegateEvents" + this.cid;
                 if (Q === "") {
                     this.$el.on(R, V);
                 } else {
                     this.$el.on(R, Q, V);
                 }
             }
             return this;
         },
         undelegateEvents: function () {
             this.$el.off(".delegateEvents" + this.cid);
             return this;
         },
         _configure: function (Q) {
             if (this.options) {
                 Q = P.extend({}, P.result(this, "options"), Q);
             }
             P.extend(this, P.pick(Q, e));
             this.options = Q;
         },
         _ensureElement: function () {
             if (!this.el) {
                 var Q = P.extend({}, P.result(this, "attributes"));
                 if (this.id) {
                     Q.id = P.result(this, "id");
                 }
                 if (this.className) {
                     Q["class"] = P.result(this, "className");
                 }
                 var R = D.$("<" + P.result(this, "tagName") + ">").attr(Q);
                 this.setElement(R, false);
             } else {
                 this.setElement(P.result(this, "el"), false);
             }
         },
     });
     D.sync = function (W, R, Q) {
         var T = l[W];
         P.defaults(Q || (Q = {}), { emulateHTTP: D.emulateHTTP, emulateJSON: D.emulateJSON });
         var V = { type: T, dataType: "json" };
         if (!Q.url) {
             V.url = P.result(R, "url") || u();
         }
         if (Q.data == null && R && (W === "create" || W === "update" || W === "patch")) {
             V.contentType = "application/json";
             V.data = JSON.stringify(Q.attrs || R.toJSON(Q));
         }
         if (Q.emulateJSON) {
             V.contentType = "application/x-www-form-urlencoded";
             V.data = V.data ? { model: V.data } : {};
         }
         if (Q.emulateHTTP && (T === "PUT" || T === "DELETE" || T === "PATCH")) {
             V.type = "POST";
             if (Q.emulateJSON) {
                 V.data._method = T;
             }
             var S = Q.beforeSend;
             Q.beforeSend = function (X) {
                 X.setRequestHeader("X-HTTP-Method-Override", T);
                 if (S) {
                     return S.apply(this, arguments);
                 }
             };
         }
         if (V.type !== "GET" && !Q.emulateJSON) {
             V.processData = false;
         }
         if (V.type === "PATCH" && window.ActiveXObject && !(window.external && window.external.msActiveXFilteringEnabled)) {
             V.xhr = function () {
                 return new ActiveXObject("Microsoft.XMLHTTP");
             };
         }
         var U = (Q.xhr = D.ajax(P.extend(V, Q)));
         R.trigger("request", R, U, Q);
         return U;
     };
     var l = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
     D.ajax = function () {
         return D.$.ajax.apply(D.$, arguments);
     };
     var s = (D.Router = function (Q) {
         Q || (Q = {});
         if (Q.routes) {
             this.routes = Q.routes;
         }
         this._bindRoutes();
         this.initialize.apply(this, arguments);
     });
     var t = /\((.*?)\)/g;
     var v = /(\(\?)?:\w+/g;
     var d = /\*\w+/g;
     var j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
     P.extend(s.prototype, N, {
         initialize: function () {},
         route: function (R, S, T) {
             if (!P.isRegExp(R)) {
                 R = this._routeToRegExp(R);
             }
             if (P.isFunction(S)) {
                 T = S;
                 S = "";
             }
             if (!T) {
                 T = this[S];
             }
             var Q = this;
             D.history.route(R, function (V) {
                 var U = Q._extractParameters(R, V);
                 T && T.apply(Q, U);
                 Q.trigger.apply(Q, ["route:" + S].concat(U));
                 Q.trigger("route", S, U);
                 D.history.trigger("route", Q, S, U);
             });
             return this;
         },
         navigate: function (R, Q) {
             D.history.navigate(R, Q);
             return this;
         },
         _bindRoutes: function () {
             if (!this.routes) {
                 return;
             }
             this.routes = P.result(this, "routes");
             var R,
                 Q = P.keys(this.routes);
             while ((R = Q.pop()) != null) {
                 this.route(R, this.routes[R]);
             }
         },
         _routeToRegExp: function (Q) {
             Q = Q.replace(j, "\\$&")
                 .replace(t, "(?:$1)?")
                 .replace(v, function (S, R) {
                     return R ? S : "([^/]+)";
                 })
                 .replace(d, "(.*?)");
             return new RegExp("^" + Q + "$");
         },
         _extractParameters: function (Q, R) {
             var S = Q.exec(R).slice(1);
             return P.map(S, function (T) {
                 return T ? decodeURIComponent(T) : null;
             });
         },
     });
     var k = (D.History = function () {
         this.handlers = [];
         P.bindAll(this, "checkUrl");
         if (typeof window !== "undefined") {
             this.location = window.location;
             this.history = window.history;
         }
     });
     var E = /^[#\/]|\s+$/g;
     var f = /^\/+|\/+$/g;
     var M = /msie [\w.]+/;
     var p = /\/$/;
     k.started = false;
     P.extend(k.prototype, N, {
         interval: 50,
         getHash: function (R) {
             var Q = (R || this).location.href.match(/#(.*)$/);
             return Q ? Q[1] : "";
         },
         getFragment: function (S, R) {
             if (S == null) {
                 if (this._hasPushState || !this._wantsHashChange || R) {
                     S = this.location.pathname;
                     var Q = this.root.replace(p, "");
                     if (!S.indexOf(Q)) {
                         S = S.substr(Q.length);
                     }
                 } else {
                     S = this.getHash();
                 }
             }
             return S.replace(E, "");
         },
         start: function (S) {
             if (k.started) {
                 throw new Error("Backbone.history has already been started");
             }
             k.started = true;
             this.options = P.extend({}, { root: "/" }, this.options, S);
             this.root = this.options.root;
             this._wantsHashChange = this.options.hashChange !== false;
             this._wantsPushState = !!this.options.pushState;
             this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
             var R = this.getFragment();
             var Q = document.documentMode;
             var U = M.exec(navigator.userAgent.toLowerCase()) && (!Q || Q <= 7);
             this.root = ("/" + this.root + "/").replace(f, "/");
             if (U && this._wantsHashChange) {
                 this.iframe = D.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
                 this.navigate(R);
             }
             if (this._hasPushState) {
                 D.$(window).on("popstate", this.checkUrl);
             } else {
                 if (this._wantsHashChange && "onhashchange" in window && !U) {
                     D.$(window).on("hashchange", this.checkUrl);
                 } else {
                     if (this._wantsHashChange) {
                         this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
                     }
                 }
             }
             this.fragment = R;
             var V = this.location;
             var T = V.pathname.replace(/[^\/]$/, "$&/") === this.root;
             if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !T) {
                 this.fragment = this.getFragment(null, true);
                 this.location.replace(this.root + this.location.search + "#" + this.fragment);
                 return true;
             } else {
                 if (this._wantsPushState && this._hasPushState && T && V.hash) {
                     this.fragment = this.getHash().replace(E, "");
                     this.history.replaceState({}, document.title, this.root + this.fragment + V.search);
                 }
             }
             if (!this.options.silent) {
                 return this.loadUrl();
             }
         },
         stop: function () {
             D.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
             clearInterval(this._checkUrlInterval);
             k.started = false;
         },
         route: function (Q, R) {
             this.handlers.unshift({ route: Q, callback: R });
         },
         checkUrl: function (R) {
             var Q = this.getFragment();
             if (Q === this.fragment && this.iframe) {
                 Q = this.getFragment(this.getHash(this.iframe));
             }
             if (Q === this.fragment) {
                 return false;
             }
             if (this.iframe) {
                 this.navigate(Q);
             }
             this.loadUrl() || this.loadUrl(this.getHash());
         },
         loadUrl: function (S) {
             var R = (this.fragment = this.getFragment(S));
             var Q = P.any(this.handlers, function (T) {
                 if (T.route.test(R)) {
                     T.callback(R);
                     return true;
                 }
             });
             return Q;
         },
         navigate: function (S, R) {
             if (!k.started) {
                 return false;
             }
             if (!R || R === true) {
                 R = { trigger: R };
             }
             S = this.getFragment(S || "");
             if (this.fragment === S) {
                 return;
             }
             this.fragment = S;
             var Q = this.root + S;
             if (this._hasPushState) {
                 this.history[R.replace ? "replaceState" : "pushState"]({}, document.title, Q);
             } else {
                 if (this._wantsHashChange) {
                     this._updateHash(this.location, S, R.replace);
                     if (this.iframe && S !== this.getFragment(this.getHash(this.iframe))) {
                         if (!R.replace) {
                             this.iframe.document.open().close();
                         }
                         this._updateHash(this.iframe.location, S, R.replace);
                     }
                 } else {
                     return this.location.assign(Q);
                 }
             }
             if (R.trigger) {
                 this.loadUrl(S);
             }
         },
         _updateHash: function (Q, S, T) {
             if (T) {
                 var R = Q.href.replace(/(javascript:|#).*$/, "");
                 Q.replace(R + "#" + S);
             } else {
                 Q.hash = "#" + S;
             }
         },
     });
     D.history = new k();
     var n = function (Q, S) {
         var R = this;
         var U;
         if (Q && P.has(Q, "constructor")) {
             U = Q.constructor;
         } else {
             U = function () {
                 return R.apply(this, arguments);
             };
         }
         P.extend(U, R, S);
         var T = function () {
             this.constructor = U;
         };
         T.prototype = R.prototype;
         U.prototype = new T();
         if (Q) {
             P.extend(U.prototype, Q);
         }
         U.__super__ = R.prototype;
         return U;
     };
     I.extend = c.extend = s.extend = K.extend = k.extend = n;
     var u = function () {
         throw new Error('A "url" property or function must be specified');
     };
     var L = function (S, R) {
         var Q = R.error;
         R.error = function (T) {
             if (Q) {
                 Q(S, T, R);
             }
             S.trigger("error", S, T, R);
         };
     };
 }.call(this));
 (function (b) {
     var d = b._,
         e = b.jQuery,
         g = b.document,
         c = b.console || {
             log: function (k) {
                 e("body").append('<span style="display: none;">' + k + "</span>");
             },
         },
         j = b.Backbone,
         a = b.BFH,
         f = (a.Store = a.Store || {});
     f.Offer = j.Model.extend({ initialize: function (k) {} });
     f.TimeLeftView = j.View.extend({
         tagName: "div",
         className: "time-left",
         initialize: function (k) {
             this.template = e("#timeleft-template").html();
             this.time = { hours: Math.floor(k.time / 3600), minutes: Math.floor((k.time % 3600) / 60), seconds: Math.floor(k.time % 60) };
         },
         render: function () {
             var k = d.template(this.template);
             this.$el.html(k(this.time));
             return this.el;
         },
     });
     f.DotdView = j.View.extend({
         tagName: "div",
         className: "dotdOffer",
         events: {
             "click .buy": function (l) {
                 var k = new f.BuyItemView({ model: this.model, csrf: f.dotdCsrf, buyUrl: f.buyUrl, type: "dotd" });
                 return false;
             },
         },
         initialize: function (k) {
             this.template = e("#dotd-template").html();
         },
         render: function () {
             var k = d.template(this.template);
             this.$el.html(k(d(this.model.toJSON()).extend({ singleItem: this.model.get("items").length === 1 })));
             return this.el;
         },
     });
     f.BuyItemView = j.View.extend({
         tagName: "div",
         className: "buy-item-view",
         events: {
             "click .close": function (k) {
                 this.remove();
                 return false;
             },
             "click .overlay": function (k) {
                 this.remove();
                 return false;
             },
             "click .heroBox .buy": function (m) {
                 var l = m.currentTarget,
                     k = e(l).closest(".heroBox").data("id");
                 this.buyItem(k);
             },
             "click .button.buy": function (l) {
                 if (!this.model.get("isAppliedToPersona")) {
                     this.buyItem();
                 } else {
                     var k = e(l.currentTarget);
                     this.$(".heroPicker")
                         .css("right", k.parent().width() - (k.position().left + k.outerWidth()) - 17)
                         .show();
                 }
             },
             "click .buyHover": function (k) {
                 this.$(".heroPicker").hide();
             },
         },
         buyItem: function (l) {
             var n = this,
                 m = d.template(e("#item-bought-template").html() + " "),
                 p,
                 q = e(m({ id: false, image: false, name: this.model.get("name") })).addClass("noIcon loading"),
                 k = n.options.type === "dotd" ? { dealId: this.model.id, dealDiscount: true } : { offerId: this.model.id };
             q.find(".dialog .close").click(function () {
                 e(this).closest(".boughtItem").remove();
             });
             q.appendTo("body");
             p = q.find("p");
             p.css("margin-top", (p.parent().height() - p.height()) / 2);
             e(this.el).hide();
             e.ajax({ type: "GET", url: this.options.buyUrl, timeout: 15000, data: d({ personaId: l, _csrf_token: this.options.csrf, rnd: Math.random() }).extend(k) })
                 .success(function (s) {
                     if (s.statusText === "timeout" || s.status === "error") {
                         q.removeClass("loading").addClass("error");
                     } else {
                         a.accountData.set({ _PF: s.data.wallets._PF, _DV: s.data.wallets._DV });
                         var r = d(n.model.get("items")).findWhere({ id: s.data.offerId });
                         if (n.model.get("isRandom")) {
                             q.remove();
                             q = e(m({ id: false, name: r.name, image: r.image }))
                                 .addClass("loading")
                                 .removeClass("noIcon");
                             q.find(".dialog .close").click(function () {
                                 e(this).closest(".boughtItem").remove();
                             });
                             q.appendTo("body");
                             p = q.find("p");
                             p.css("margin-top", (p.parent().height() - p.height()) / 2);
                         }
                         q.removeClass("loading");
                         n.remove();
                     }
                 })
                 .error(function (r) {
                     q.removeClass("loading").addClass("error");
                 });
         },
         initialize: function () {
             this.template = e("#buy-item-template").html();
             var k = d.template(e("#hero-template").html() + " ");
             this.heroes = d
                 .map(this.model.get("heroes"), function (l) {
                     return k(l);
                 })
                 .join("");
             this.render();
         },
         render: function () {
             var k = d.template(this.template);
             this.model.set({ canAfford: a.accountData.get(this.model.get("currency")) >= this.model.get("price") });
             this.$el.html(k(this.model.toJSON()));
             this.$(".heroPicker").append(this.heroes);
             e("body").append(this.el);
         },
     });
 })(this);
 (function (b) {
     var d = b.jQuery,
         c = b._,
         e = b.Backbone,
         a = (b.BFH = b.BFH || {});
     d(function () {
         var f = e.Model.extend({
                 defaults: function () {
                     return { loaded: false, bought: false };
                 },
                 url: function () {
                     return "/miniStore/getStoreItem?itemId=" + this.get("prodId") + "&rnd=" + Math.random();
                 },
                 parse: function (n) {
                     var p;
                     if (n.result === "success") {
                         a.accountData.set({ _PF: n.data.wallets._PF, _DV: n.data.wallets._DV, _csrf_token: n.data._csrf_token });
                         p = {
                             src: n.data.storeItem.image,
                             description: String(n.data.storeItem.description !== undefined ? n.data.storeItem.description : "").replace(/\|n/g, ""),
                             name: n.data.storeItem.name,
                             pricePoints: n.data.storeItem.pricePoints,
                             heroes: n.data.personas,
                             stats: n.data.storeItem.stats,
                             loaded: true,
                             hasPremium: n.data.storeItem.hasPremiumPricePoints,
                         };
                     } else {
                         a.accountData.set({ loggedIn: false });
                         p = { loaded: true };
                     }
                     return p;
                 },
             }),
             j = e.Collection.extend({ model: f }),
             k = new j(),
             g = e.View.extend({
                 className: "ministore",
                 template: c.template(d("#item-template").html() + " "),
                 events: { "mouseenter .pricePoint.funds": "showHeroes", "click .noFunds .fund": "fund", "click .heroBox .buy": "buy" },
                 initialize: function () {
                     this.model.bind("change", this.render, this);
                     if (a.accountData.get("loggedIn") && !this.model.get("loaded") && (a.accountData.get("isPremium") || !this.model.get("isPremium"))) {
                         this.timerId = b.setTimeout(
                             c.bind(function () {
                                 this.fetch({ dataType: "json" });
                             }, this.model),
                             800
                         );
                     } else {
                         if (a.accountData.get("loggedIn") && this.model.get("isPremium") && !a.accountData.get("isPremium")) {
                             this.template = c.template(d("#get-premium-template").html() + " ");
                         }
                     }
                     this.left = false;
                 },
                 render: function (u) {
                     if (!this.model.get("bought")) {
                         this.left = false;
                         this.left = d(b).width() - d(this.model.get("el")).offset().left < 500;
                         d(this.el)
                             .html(this.template(this.model.toJSON()))
                             .css("top", d(this.model.get("el")).offset().top - 4)
                             .show();
                         if (this.left) {
                             d(this.el)
                                 .css("right", d(b).width() - d(this.model.get("el")).offset().left - 72)
                                 .addClass("left");
                         } else {
                             d(this.el).css("left", d(this.model.get("el")).offset().left - 10);
                         }
                         var t = this,
                             y = c.template(d("#stats-template").html() + " "),
                             r = c
                                 .map(this.model.get("stats"), function (A, z) {
                                     if (A !== null) {
                                         return y({ label: z, value: A[0], valueCode: A[1] });
                                     }
                                 })
                                 .join(""),
                             v = c.template(d("#pricePoint-template").html() + " "),
                             s = this.model.get("hasPremium"),
                             x =
                                 this.model.get("isPremium") && s
                                     ? c.filter(this.model.get("pricePoints"), function (z) {
                                           return z.premiumQuickGrabPrice;
                                       })
                                     : this.model.get("pricePoints"),
                             n = c
                                 .map(x, function (z) {
                                     z.noFunds = a.accountData.get(z.currency) < z.price;
                                     z.price = t.model.get("isPremium") && s ? z.premiumQuickGrabPrice : z.price;
                                     return v(z);
                                 })
                                 .join(""),
                             p = c.template(d("#hero-template").html() + " "),
                             q = c
                                 .map(this.model.get("heroes"), function (z) {
                                     return p(z);
                                 })
                                 .join("");
                         this.$(".stats").html(r);
                         this.$(".pricePoints:hidden").html(n).show();
                         this.$(".heroPicker").html(q);
                         if (d(this.el).offset().top + d(this.el).height() > d(b).height() + d(b).scrollTop()) {
                             this.el.scrollIntoView(false);
                         }
                     }
                     return this;
                 },
                 remove: function () {
                     b.clearTimeout(this.timerId);
                     e.View.prototype.remove.call(this);
                 },
                 showHeroes: function (p) {
                     var n = p.currentTarget;
                     this.$(".pricePoints").find("li").removeClass("current");
                     d(n).addClass("current");
                     d(".heroPicker")
                         .css(this.left ? "right" : "left", d(n).outerWidth() - 2)
                         .css("top", d(n).position().top)
                         .filter(":hidden")
                         .show();
                 },
                 fund: function (n) {
                     b.location.href = "/store/purchaseFunds";
                 },
                 buy: function (r) {
                     var s = this,
                         p = r.currentTarget,
                         t = d(p).closest(".heroBox").data("id"),
                         q = d(p).closest(".ministore").find(".pricePoint.current").data("id"),
                         v = c.template(d("#item-bought-template").html() + " "),
                         u = this.model.get("isPremium") && this.model.get("hasPremium") ? 1 : 0,
                         x,
                         n = d(v({ id: this.model.get("prodId"), name: this.model.get("name"), image: false, src: this.model.get("src") })).addClass("loading");
                     n.find(".dialog .close").click(function () {
                         d(this).closest(".boughtItem").remove();
                     });
                     n.appendTo("body");
                     this.model.set({ loaded: false });
                     x = d(".boughtItem").find("p");
                     x.css("margin-top", (x.parent().height() - x.height()) / 2);
                     d(this.el).hide();
                     d.get("/miniStore/buyItem", { offerId: q, personaId: t, _csrf_token: a.accountData.get("_csrf_token"), premiumDiscount: u, rnd: Math.random() }, function (y) {
                         if (y.statusText === "timeout" || y.status === "error") {
                             n.removeClass("loading").addClass("error");
                         } else {
                             a.accountData.set({ _PF: y.data.wallets._PF, _DV: y.data.wallets._DV });
                             n.removeClass("loading");
                         }
                         s.remove();
                     });
                 },
             }),
             m = e.Router.extend({
                 initialize: function () {
                     var p = new j(),
                         n = this;
                     d(".miniStoreIcon").each(function (z, B) {
                         var u = d(B).data("id"),
                             v = d(B).data("name"),
                             r = d(B).data("duration") || "",
                             x = d(B).data("usecount") || "",
                             A = d(B).hasClass("info-only"),
                             s = d(B).hasClass("premium"),
                             t = {
                                 "margin-top": d(B).css("margin-top"),
                                 "margin-right": d(B).css("margin-right"),
                                 "margin-bottom": d(B).css("margin-bottom"),
                                 "margin-left": d(B).css("margin-left"),
                                 float: d(B).css("float"),
                                 display: d(B).css("display"),
                             },
                             y = new f({ el: B, prodId: u, name: v, duration: r, useCount: x, infoOnly: A, isPremium: s }),
                             q = d('<span class="ministore_item ' + (d(B).is(".dailyspinner-feed .miniStoreIcon, .newsList .miniStoreIcon, .discountItems .miniStoreIcon") ? "store" : "info") + '"/>');
                         q.css(t).mouseenter(function () {
                             n.openInfoBox(y.cid);
                         });
                         d(B).css({ margin: "0", float: "none" }).wrap(q).after('<span class="storeIcon"/>');
                         p.add(y);
                     });
                     d(".storeitem").each(function (t, u) {
                         var v = d(u).data("id"),
                             s = d(u).data("name"),
                             r = d(u)
                                 .before('<img src="/static/images/item-icons/' + v + '.png" alt="' + s + '"/>')
                                 .prev("img"),
                             q = new f({ el: r, prodId: v, name: s, infoOnly: false }),
                             x = d('<span class="ministore_item info"/>');
                         x.mouseenter(function () {
                             n.openInfoBox(q.cid);
                         });
                         r.wrap(x).after('<span class="storeIcon"/>');
                         d(u).mouseenter(function () {
                             n.openInfoBox(q.cid);
                         });
                         p.add(q);
                     });
                     this.itemList = p;
                 },
                 openInfoBox: function (n) {
                     if (this.itemView) {
                         this.itemView.remove();
                     }
                     this.itemView = new g({ model: this.itemList.get(n) });
                     b.document.body.appendChild(this.itemView.el);
                     this.itemView.render();
                     d(this.itemView.el)
                         .mouseleave(
                             c.bind(function () {
                                 this.closeTimeout = b.setTimeout(c.bind(this.remove, this), 400);
                             }, this.itemView)
                         )
                         .mouseenter(
                             c.bind(function () {
                                 b.clearTimeout(this.closeTimeout);
                             }, this.itemView)
                         );
                 },
             }),
             l = new m();
     });
 })(this);
 (function (b) {
     var d = b.jQuery,
         c = b._,
         a = b.BFH,
         e = b.Modernizr;
     d(function () {
         var j = 3,
             l = d("#siteHeader"),
             p = l.children(".headerBar").children(".friends"),
             g = c.template(d("#friend-list-template").html() + " "),
             n = l.children(".headerBar").children(".notifications"),
             k = c.template(d("#alert-notification-template").html() + " "),
             m = c.template(d("#notification-template").html() + " "),
             f = c.template(d("#session-notification-template").html() + " "),
             q = d(".heroSelector").find(".cards");
         p.mouseenter(function (r) {
             d(r.currentTarget).off("mouseenter");
             d.getJSON(p.data("url") + "?r=" + Math.random(), function (s) {
                 var t;
                 if (s.data.friends) {
                     p.find(".indicator .number").text(s.data.friends.length);
                     for (t = 0; t < s.data.friends.length; t += 1) {
                         p.find(".friendList").children(".noFriends").hide();
                         p.find(".friendList").prepend(g(s.data.friends[t]));
                     }
                 }
             });
         });
         n.mouseenter(function (r) {
             d(r.currentTarget).off("mouseenter");
             d.getJSON(n.data("url") + "?r=" + Math.random(), function (t) {
                 var s = 0,
                     u;
                 if (t.data.notifications) {
                     for (u = 0; u < t.data.notifications.length; u += 1) {
                         n.find(".notificationList").append(m(t.data.notifications[u]));
                         s += t.data.notifications[u].ids.split(",").length - 1;
                     }
                     n.find(".webNotification")
                         .find(".dismiss")
                         .click(function (v) {
                             d.getJSON("/activities/removeImportantStatusFromActivityIdList?activityIds=" + d(v.currentTarget).data("ids"), function () {
                                 var x = d(v.currentTarget).closest(".notification").slideUp();
                                 n.find(".indicator .number").text(parseInt(n.find(".indicator .number").text(), 10) - x.text().match(/\d+/));
                             });
                             return false;
                         });
                 }
                 if (t.data.sessionNotifications) {
                     for (u = 0; u < t.data.sessionNotifications.length; u += 1) {
                         n.find(".notificationList").append(f(t.data.sessionNotifications[u]));
                         s += t.data.sessionNotifications[u].ids.split(",").length - 1;
                     }
                 }
                 if (t.data.alerts) {
                     s += t.data.alerts.length;
                     for (u = 0; u < t.data.alerts.length; u += 1) {
                         n.find(".notificationList").append(k(t.data.alerts[u]));
                     }
                 }
                 n.find(".indicator .number").text(s);
             });
         });
         l.find(".headerBar > .heroes").click(function () {
             d("#siteHeader").find(".heroSelector").slideToggle().find(".exitLeftStack, .exitRightStack").removeClass("exitLeftStack exitRightStack");
             d(this).toggleClass("open");
             d(".card .persona-avatar").each(function () {
                 d(this).attr("src", d(this).data("src"));
             });
         });
         l.find(".cards a.playNow").on("click", function () {
             var r = d(this).closest(".card").find(".name").text();
             a.Plugin.start(r);
             return false;
         });
         l.children(".playNow").click(function () {
             if (a.accountData.get("loggedIn")) {
                 a.Plugin.start();
                 return false;
             }
         });
         q.find(".defaultHero, .editMenu .makeDefault a").click(function (r) {
             d.getJSON(
                 d(this).data("url") + "?r=" + Math.random(),
                 c.bind(function (s) {
                     this.closest(".cards").find(".card.default").removeClass("default");
                     this.closest(".card").addClass("default");
                     var t = this.closest("#siteHeader").find(".displayHero");
                     t.attr("href", s.data.url);
                     t.children(".portrait").attr("src", s.data.mugshot);
                     t.children(".name").text(s.data.name);
                 }, d(r.currentTarget))
             );
             return false;
         });
         q.find(".card:not(.leftStack)").each(function (r, t) {
             if (r < j) {
                 d(t).addClass("c" + (r + 1));
             } else {
                 var s = d(t).addClass("rightStack").find(".cardBg");
                 s.attr("src", s.attr("src").replace("cardHangerLeft", "cardHangerRight"));
             }
         });
         if (e.csstransitions) {
             d(".heroSelector")
                 .find(".left")
                 .click(function () {
                     var r = q.find(".card:not(.leftStack):first").index();
                     if (r >= 1) {
                         d(this)
                             .siblings(".from")
                             .text(parseInt(d(this).siblings(".from").text(), 10) - 1);
                         d(this)
                             .siblings(".to")
                             .text(parseInt(d(this).siblings(".to").text(), 10) - 1);
                         q.find(".card").each(function (s, u) {
                             if (s === r - 1) {
                                 d(u).removeClass("leftStack").addClass("c1 exitLeftStack");
                             } else {
                                 if (s === r + j - 1) {
                                     var t = d(u)
                                         .removeClass("c" + j + " exitRightStack")
                                         .addClass("rightStack")
                                         .find(".cardBg");
                                     t.attr("src", t.attr("src").replace("cardHangerLeft", "cardHangerRight"));
                                 } else {
                                     if (s > r - 1 && s < r + j) {
                                         d(u)
                                             .removeClass("c" + (s - r + 1) + " exitLeftStack")
                                             .addClass("c" + (s - r + 2));
                                     }
                                 }
                             }
                         });
                     }
                 })
                 .siblings(".right")
                 .click(function () {
                     var s = q.find(".card:not(.leftStack):first").index(),
                         r = q.find(".card").length;
                     if (s < r - j) {
                         d(this)
                             .siblings(".from")
                             .text(parseInt(d(this).siblings(".from").text(), 10) + 1);
                         d(this)
                             .siblings(".to")
                             .text(parseInt(d(this).siblings(".to").text(), 10) + 1);
                         q.find(".card").each(function (t, v) {
                             if (t === s) {
                                 var u = d(v).removeClass("c1 exitLeftStack").addClass("leftStack").find(".cardBg");
                                 u.attr("src", u.attr("src").replace("cardHangerRight", "cardHangerLeft"));
                             } else {
                                 if (t === s + j) {
                                     d(v)
                                         .removeClass("rightStack")
                                         .addClass("c" + j + " exitRightStack");
                                 } else {
                                     if (t > s && t < s + j) {
                                         d(v)
                                             .removeClass("c" + (t - s + 1) + " exitRightStack")
                                             .addClass("c" + (t - s));
                                     }
                                 }
                             }
                         });
                     }
                 });
         } else {
             d(".heroSelector")
                 .find(".left")
                 .click(function () {
                     var r = q.data("firstcard");
                     if (r >= 1) {
                         d(this)
                             .siblings(".from")
                             .text(parseInt(d(this).siblings(".from").text(), 10) - 1);
                         d(this)
                             .siblings(".to")
                             .text(parseInt(d(this).siblings(".to").text(), 10) - 1);
                         q.find(".card").each(function (s, t) {
                             q.data("firstcard", r - 1);
                             if (s === r - 1) {
                                 d(t).animate({ left: 210, top: -18 }, function () {
                                     d(t).removeClass("leftStack").addClass("c1");
                                 });
                             } else {
                                 if (s === r + j - 1) {
                                     d(t).animate({ left: 800, top: -35 }, function () {
                                         d(t)
                                             .removeClass("c" + j)
                                             .addClass("rightStack");
                                     });
                                 } else {
                                     if (s > r - 1 && s < r + j) {
                                         d(t).animate({ left: "+=190" }, function () {
                                             d(t)
                                                 .removeClass("c" + (s - r + 1))
                                                 .addClass("c" + (s - r + 2));
                                         });
                                     }
                                 }
                             }
                         });
                     }
                 })
                 .siblings(".right")
                 .click(function () {
                     var s = q.data("firstcard"),
                         r = q.find(".card").length;
                     if (s < r - j) {
                         d(this)
                             .siblings(".from")
                             .text(parseInt(d(this).siblings(".from").text(), 10) + 1);
                         d(this)
                             .siblings(".to")
                             .text(parseInt(d(this).siblings(".to").text(), 10) + 1);
                         q.find(".card").each(function (t, u) {
                             q.data("firstcard", s + 1);
                             if (t === s) {
                                 d(u).animate({ left: -20, top: -35 }, function () {
                                     d(u).removeClass("c1").addClass("leftStack");
                                 });
                             } else {
                                 if (t === s + j) {
                                     d(u).animate({ left: 590, top: -18 }, function () {
                                         d(u)
                                             .removeClass("rightStack")
                                             .addClass("c" + j);
                                     });
                                 } else {
                                     if (t > s && t < s + j) {
                                         d(u).animate({ left: "-=190" }, function () {
                                             d(this)
                                                 .removeClass("c" + (t - s + 1))
                                                 .addClass("c" + (t - s));
                                         });
                                     }
                                 }
                             }
                         });
                     }
                 });
         }
     });
 })(this);
 (function (a) {
     a(function () {
         var b = a(".loginForm");
         b.find("input").keypress(function (c) {
             if (c.which === 13) {
                 a(this).closest("form").submit();
             }
         });
         b.find(".submit").click(function () {
             a(this).closest("form").submit();
         });
         b.submit(function () {
             a(this).addClass("submitted");
         });
     });
 })(jQuery);
 (function (a) {
     a(document).ready(function () {
         a(".cache-info-container").magmaToggle({ distance: 15, onEvent: "mousemove", offEvent: "mouseleave" });
     });
 })(jQuery);
 var swfobject = (function () {
     var aq = "undefined",
         aD = "object",
         ab = "Shockwave Flash",
         X = "ShockwaveFlash.ShockwaveFlash",
         aE = "application/x-shockwave-flash",
         ac = "SWFObjectExprInst",
         ax = "onreadystatechange",
         af = window,
         aL = document,
         aB = navigator,
         aa = false,
         Z = [aN],
         aG = [],
         ag = [],
         al = [],
         aJ,
         ad,
         ap,
         at,
         ak = false,
         aU = false,
         aH,
         an,
         aI = true,
         ah = (function () {
             var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq,
                 e = aB.userAgent.toLowerCase(),
                 c = aB.platform.toLowerCase(),
                 j = c ? /win/.test(c) : /win/.test(e),
                 l = c ? /mac/.test(c) : /mac/.test(e),
                 g = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                 d = !+"\v1",
                 f = [0, 0, 0],
                 m = null;
             if (typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
                 m = aB.plugins[ab].description;
                 if (m && !(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
                     aa = true;
                     d = false;
                     m = m.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                     f[0] = parseInt(m.replace(/^(.*)\..*$/, "$1"), 10);
                     f[1] = parseInt(m.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                     f[2] = /[a-zA-Z]/.test(m) ? parseInt(m.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
                 }
             } else {
                 if (typeof af.ActiveXObject != aq) {
                     try {
                         var k = new ActiveXObject(X);
                         if (k) {
                             m = k.GetVariable("$version");
                             if (m) {
                                 d = true;
                                 m = m.split(" ")[1].split(",");
                                 f = [parseInt(m[0], 10), parseInt(m[1], 10), parseInt(m[2], 10)];
                             }
                         }
                     } catch (b) {}
                 }
             }
             return { w3: a, pv: f, wk: g, ie: d, win: j, mac: l };
         })(),
         aK = (function () {
             if (!ah.w3) {
                 return;
             }
             if ((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
                 aP();
             }
             if (!ak) {
                 if (typeof aL.addEventListener != aq) {
                     aL.addEventListener("DOMContentLoaded", aP, false);
                 }
                 if (ah.ie && ah.win) {
                     aL.attachEvent(ax, function () {
                         if (aL.readyState == "complete") {
                             aL.detachEvent(ax, arguments.callee);
                             aP();
                         }
                     });
                     if (af == top) {
                         (function () {
                             if (ak) {
                                 return;
                             }
                             try {
                                 aL.documentElement.doScroll("left");
                             } catch (a) {
                                 setTimeout(arguments.callee, 0);
                                 return;
                             }
                             aP();
                         })();
                     }
                 }
                 if (ah.wk) {
                     (function () {
                         if (ak) {
                             return;
                         }
                         if (!/loaded|complete/.test(aL.readyState)) {
                             setTimeout(arguments.callee, 0);
                             return;
                         }
                         aP();
                     })();
                 }
                 aC(aP);
             }
         })();
     function aP() {
         if (ak) {
             return;
         }
         try {
             var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
             b.parentNode.removeChild(b);
         } catch (a) {
             return;
         }
         ak = true;
         var d = Z.length;
         for (var c = 0; c < d; c++) {
             Z[c]();
         }
     }
     function aj(a) {
         if (ak) {
             a();
         } else {
             Z[Z.length] = a;
         }
     }
     function aC(a) {
         if (typeof af.addEventListener != aq) {
             af.addEventListener("load", a, false);
         } else {
             if (typeof aL.addEventListener != aq) {
                 aL.addEventListener("load", a, false);
             } else {
                 if (typeof af.attachEvent != aq) {
                     aM(af, "onload", a);
                 } else {
                     if (typeof af.onload == "function") {
                         var b = af.onload;
                         af.onload = function () {
                             b();
                             a();
                         };
                     } else {
                         af.onload = a;
                     }
                 }
             }
         }
     }
     function aN() {
         if (aa) {
             Y();
         } else {
             am();
         }
     }
     function Y() {
         var d = aL.getElementsByTagName("body")[0];
         var b = ar(aD);
         b.setAttribute("type", aE);
         var a = d.appendChild(b);
         if (a) {
             var c = 0;
             (function () {
                 if (typeof a.GetVariable != aq) {
                     var e = a.GetVariable("$version");
                     if (e) {
                         e = e.split(" ")[1].split(",");
                         ah.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)];
                     }
                 } else {
                     if (c < 10) {
                         c++;
                         setTimeout(arguments.callee, 10);
                         return;
                     }
                 }
                 d.removeChild(b);
                 a = null;
                 am();
             })();
         } else {
             am();
         }
     }
     function am() {
         var g = aG.length;
         if (g > 0) {
             for (var j = 0; j < g; j++) {
                 var c = aG[j].id;
                 var n = aG[j].callbackFn;
                 var a = { success: false, id: c };
                 if (ah.pv[0] > 0) {
                     var k = aS(c);
                     if (k) {
                         if (ao(aG[j].swfVersion) && !(ah.wk && ah.wk < 312)) {
                             ay(c, true);
                             if (n) {
                                 a.success = true;
                                 a.ref = av(c);
                                 n(a);
                             }
                         } else {
                             if (aG[j].expressInstall && au()) {
                                 var e = {};
                                 e.data = aG[j].expressInstall;
                                 e.width = k.getAttribute("width") || "0";
                                 e.height = k.getAttribute("height") || "0";
                                 if (k.getAttribute("class")) {
                                     e.styleclass = k.getAttribute("class");
                                 }
                                 if (k.getAttribute("align")) {
                                     e.align = k.getAttribute("align");
                                 }
                                 var f = {};
                                 var d = k.getElementsByTagName("param");
                                 var m = d.length;
                                 for (var l = 0; l < m; l++) {
                                     if (d[l].getAttribute("name").toLowerCase() != "movie") {
                                         f[d[l].getAttribute("name")] = d[l].getAttribute("value");
                                     }
                                 }
                                 ae(e, f, c, n);
                             } else {
                                 aF(k);
                                 if (n) {
                                     n(a);
                                 }
                             }
                         }
                     }
                 } else {
                     ay(c, true);
                     if (n) {
                         var b = av(c);
                         if (b && typeof b.SetVariable != aq) {
                             a.success = true;
                             a.ref = b;
                         }
                         n(a);
                     }
                 }
             }
         }
     }
     function av(b) {
         var d = null;
         var c = aS(b);
         if (c && c.nodeName == "OBJECT") {
             if (typeof c.SetVariable != aq) {
                 d = c;
             } else {
                 var a = c.getElementsByTagName(aD)[0];
                 if (a) {
                     d = a;
                 }
             }
         }
         return d;
     }
     function au() {
         return !aU && ao("6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312);
     }
     function ae(f, d, j, e) {
         aU = true;
         ap = e || null;
         at = { success: false, id: j };
         var a = aS(j);
         if (a) {
             if (a.nodeName == "OBJECT") {
                 aJ = aO(a);
                 ad = null;
             } else {
                 aJ = a;
                 ad = j;
             }
             f.id = ac;
             if (typeof f.width == aq || (!/%$/.test(f.width) && parseInt(f.width, 10) < 310)) {
                 f.width = "310";
             }
             if (typeof f.height == aq || (!/%$/.test(f.height) && parseInt(f.height, 10) < 137)) {
                 f.height = "137";
             }
             aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
             var b = ah.ie && ah.win ? "ActiveX" : "PlugIn",
                 c = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
             if (typeof d.flashvars != aq) {
                 d.flashvars += "&" + c;
             } else {
                 d.flashvars = c;
             }
             if (ah.ie && ah.win && a.readyState != 4) {
                 var g = ar("div");
                 j += "SWFObjectNew";
                 g.setAttribute("id", j);
                 a.parentNode.insertBefore(g, a);
                 a.style.display = "none";
                 (function () {
                     if (a.readyState == 4) {
                         a.parentNode.removeChild(a);
                     } else {
                         setTimeout(arguments.callee, 10);
                     }
                 })();
             }
             aA(f, d, j);
         }
     }
     function aF(a) {
         if (ah.ie && ah.win && a.readyState != 4) {
             var b = ar("div");
             a.parentNode.insertBefore(b, a);
             b.parentNode.replaceChild(aO(a), b);
             a.style.display = "none";
             (function () {
                 if (a.readyState == 4) {
                     a.parentNode.removeChild(a);
                 } else {
                     setTimeout(arguments.callee, 10);
                 }
             })();
         } else {
             a.parentNode.replaceChild(aO(a), a);
         }
     }
     function aO(b) {
         var d = ar("div");
         if (ah.win && ah.ie) {
             d.innerHTML = b.innerHTML;
         } else {
             var e = b.getElementsByTagName(aD)[0];
             if (e) {
                 var a = e.childNodes;
                 if (a) {
                     var f = a.length;
                     for (var c = 0; c < f; c++) {
                         if (!(a[c].nodeType == 1 && a[c].nodeName == "PARAM") && !(a[c].nodeType == 8)) {
                             d.appendChild(a[c].cloneNode(true));
                         }
                     }
                 }
             }
         }
         return d;
     }
     function aA(e, g, c) {
         var d,
             a = aS(c);
         if (ah.wk && ah.wk < 312) {
             return d;
         }
         if (a) {
             if (typeof e.id == aq) {
                 e.id = c;
             }
             if (ah.ie && ah.win) {
                 var f = "";
                 for (var k in e) {
                     if (e[k] != Object.prototype[k]) {
                         if (k.toLowerCase() == "data") {
                             g.movie = e[k];
                         } else {
                             if (k.toLowerCase() == "styleclass") {
                                 f += ' class="' + e[k] + '"';
                             } else {
                                 if (k.toLowerCase() != "classid") {
                                     f += " " + k + '="' + e[k] + '"';
                                 }
                             }
                         }
                     }
                 }
                 var j = "";
                 for (var l in g) {
                     if (g[l] != Object.prototype[l]) {
                         j += '<param name="' + l + '" value="' + g[l] + '" />';
                     }
                 }
                 a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + j + "</object>";
                 ag[ag.length] = e.id;
                 d = aS(e.id);
             } else {
                 var b = ar(aD);
                 b.setAttribute("type", aE);
                 for (var m in e) {
                     if (e[m] != Object.prototype[m]) {
                         if (m.toLowerCase() == "styleclass") {
                             b.setAttribute("class", e[m]);
                         } else {
                             if (m.toLowerCase() != "classid") {
                                 b.setAttribute(m, e[m]);
                             }
                         }
                     }
                 }
                 for (var n in g) {
                     if (g[n] != Object.prototype[n] && n.toLowerCase() != "movie") {
                         aQ(b, n, g[n]);
                     }
                 }
                 a.parentNode.replaceChild(b, a);
                 d = b;
             }
         }
         return d;
     }
     function aQ(b, d, c) {
         var a = ar("param");
         a.setAttribute("name", d);
         a.setAttribute("value", c);
         b.appendChild(a);
     }
     function aw(a) {
         var b = aS(a);
         if (b && b.nodeName == "OBJECT") {
             if (ah.ie && ah.win) {
                 b.style.display = "none";
                 (function () {
                     if (b.readyState == 4) {
                         aT(a);
                     } else {
                         setTimeout(arguments.callee, 10);
                     }
                 })();
             } else {
                 b.parentNode.removeChild(b);
             }
         }
     }
     function aT(a) {
         var b = aS(a);
         if (b) {
             for (var c in b) {
                 if (typeof b[c] == "function") {
                     b[c] = null;
                 }
             }
             b.parentNode.removeChild(b);
         }
     }
     function aS(a) {
         var c = null;
         try {
             c = aL.getElementById(a);
         } catch (b) {}
         return c;
     }
     function ar(a) {
         return aL.createElement(a);
     }
     function aM(a, c, b) {
         a.attachEvent(c, b);
         al[al.length] = [a, c, b];
     }
     function ao(a) {
         var b = ah.pv,
             c = a.split(".");
         c[0] = parseInt(c[0], 10);
         c[1] = parseInt(c[1], 10) || 0;
         c[2] = parseInt(c[2], 10) || 0;
         return b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2]) ? true : false;
     }
     function az(b, f, a, c) {
         if (ah.ie && ah.mac) {
             return;
         }
         var e = aL.getElementsByTagName("head")[0];
         if (!e) {
             return;
         }
         var g = a && typeof a == "string" ? a : "screen";
         if (c) {
             aH = null;
             an = null;
         }
         if (!aH || an != g) {
             var d = ar("style");
             d.setAttribute("type", "text/css");
             d.setAttribute("media", g);
             aH = e.appendChild(d);
             if (ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                 aH = aL.styleSheets[aL.styleSheets.length - 1];
             }
             an = g;
         }
         if (ah.ie && ah.win) {
             if (aH && typeof aH.addRule == aD) {
                 aH.addRule(b, f);
             }
         } else {
             if (aH && typeof aL.createTextNode != aq) {
                 aH.appendChild(aL.createTextNode(b + " {" + f + "}"));
             }
         }
     }
     function ay(a, c) {
         if (!aI) {
             return;
         }
         var b = c ? "visible" : "hidden";
         if (ak && aS(a)) {
             aS(a).style.visibility = b;
         } else {
             az("#" + a, "visibility:" + b);
         }
     }
     function ai(b) {
         var a = /[\\\"<>\.;]/;
         var c = a.exec(b) != null;
         return c && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b;
     }
     var aR = (function () {
         if (ah.ie && ah.win) {
             window.attachEvent("onunload", function () {
                 var a = al.length;
                 for (var b = 0; b < a; b++) {
                     al[b][0].detachEvent(al[b][1], al[b][2]);
                 }
                 var d = ag.length;
                 for (var c = 0; c < d; c++) {
                     aw(ag[c]);
                 }
                 for (var e in ah) {
                     ah[e] = null;
                 }
                 ah = null;
                 for (var f in swfobject) {
                     swfobject[f] = null;
                 }
                 swfobject = null;
             });
         }
     })();
     return {
         registerObject: function (a, e, c, b) {
             if (ah.w3 && a && e) {
                 var d = {};
                 d.id = a;
                 d.swfVersion = e;
                 d.expressInstall = c;
                 d.callbackFn = b;
                 aG[aG.length] = d;
                 ay(a, false);
             } else {
                 if (b) {
                     b({ success: false, id: a });
                 }
             }
         },
         getObjectById: function (a) {
             if (ah.w3) {
                 return av(a);
             }
         },
         embedSWF: function (m, e, j, f, c, a, b, k, g, l) {
             var d = { success: false, id: e };
             if (ah.w3 && !(ah.wk && ah.wk < 312) && m && e && j && f && c) {
                 ay(e, false);
                 aj(function () {
                     j += "";
                     f += "";
                     var t = {};
                     if (g && typeof g === aD) {
                         for (var r in g) {
                             t[r] = g[r];
                         }
                     }
                     t.data = m;
                     t.width = j;
                     t.height = f;
                     var q = {};
                     if (k && typeof k === aD) {
                         for (var s in k) {
                             q[s] = k[s];
                         }
                     }
                     if (b && typeof b === aD) {
                         for (var n in b) {
                             if (typeof q.flashvars != aq) {
                                 q.flashvars += "&" + n + "=" + b[n];
                             } else {
                                 q.flashvars = n + "=" + b[n];
                             }
                         }
                     }
                     if (ao(c)) {
                         var p = aA(t, q, e);
                         if (t.id == e) {
                             ay(e, true);
                         }
                         d.success = true;
                         d.ref = p;
                     } else {
                         if (a && au()) {
                             t.data = a;
                             ae(t, q, e, l);
                             return;
                         } else {
                             ay(e, true);
                         }
                     }
                     if (l) {
                         l(d);
                     }
                 });
             } else {
                 if (l) {
                     l(d);
                 }
             }
         },
         switchOffAutoHideShow: function () {
             aI = false;
         },
         ua: ah,
         getFlashPlayerVersion: function () {
             return { major: ah.pv[0], minor: ah.pv[1], release: ah.pv[2] };
         },
         hasFlashPlayerVersion: ao,
         createSWF: function (a, b, c) {
             if (ah.w3) {
                 return aA(a, b, c);
             } else {
                 return undefined;
             }
         },
         showExpressInstall: function (b, a, d, c) {
             if (ah.w3 && au()) {
                 ae(b, a, d, c);
             }
         },
         removeSWF: function (a) {
             if (ah.w3) {
                 aw(a);
             }
         },
         createCSS: function (b, a, c, d) {
             if (ah.w3) {
                 az(b, a, c, d);
             }
         },
         addDomLoadEvent: aj,
         addLoadEvent: aC,
         getQueryParamValue: function (b) {
             var a = aL.location.search || aL.location.hash;
             if (a) {
                 if (/\?/.test(a)) {
                     a = a.split("?")[1];
                 }
                 if (b == null) {
                     return ai(a);
                 }
                 var c = a.split("&");
                 for (var d = 0; d < c.length; d++) {
                     if (c[d].substring(0, c[d].indexOf("=")) == b) {
                         return ai(c[d].substring(c[d].indexOf("=") + 1));
                     }
                 }
             }
             return "";
         },
         expressInstallCallback: function () {
             if (aU) {
                 var a = aS(ac);
                 if (a && aJ) {
                     a.parentNode.replaceChild(aJ, a);
                     if (ad) {
                         ay(ad, true);
                         if (ah.ie && ah.win) {
                             aJ.style.display = "block";
                         }
                     }
                     if (ap) {
                         ap(at);
                     }
                 }
                 aU = false;
             }
         },
     };
 })();
 (function (a) {
     a(document).ready(function () {
         var f = a("#js-msgs #add-to-friends").html();
         var e = a("#js-msgs #remove-from-friends").html();
         function d(j) {
             return j.replace(/\s+$/g, "");
         }
         function c(j) {
             var k = d(a(j).attr("class"));
             player_class = k.split(" ").slice(-1);
             player_class = player_class[0].substr(3).replace(" ", "");
             return player_class;
         }
         function g(m) {
             var l = a(".headerBar .account a").html().split(" ")[0];
             var j = a(".friends").data("url");
             var k = m.map(function () {
                 $this = a(this);
                 var n = null;
                 a($this.parent().attr("class").split(" ")).each(function (p) {
                     if (this.substr(0, 3) == "uid") {
                         n = this.substr(4);
                     }
                 });
                 return n;
             });
             j += "/" + k.get().join(",");
             if (k.length == 0) {
                 return;
             }
             a.post(
                 j,
                 function (p) {
                     if (p.result == "success") {
                         var n = p.data.friends;
                         friends_map = n.map(function (q) {
                             return q.name;
                         });
                         a(m).each(function (s) {
                             $this = a(this);
                             var r = c($this);
                             var q = a.inArray(r, friends_map);
                             if (q != -1) {
                                 if (n[q].status == "online") {
                                     $this.append(' <a title="' + e + '" href="#" class="friendlink friendlink-online">-Friend</a>');
                                 } else {
                                     $this.append(' <a title="' + e + '" href="#" class="friendlink friendlink-friend">-Friend</a>');
                                 }
                             } else {
                                 if (r != l) {
                                     $this.append(' <a title="' + f + '" href="#" class="friendlink friendlink-add">+Friend</a>');
                                 }
                             }
                         });
                     }
                 },
                 "",
                 "json"
             );
         }
         function b(l) {
             l.preventDefault();
             var p = a(this);
             var j;
             var n;
             var k = /\d+$/;
             var q = p.siblings("a").attr("href");
             q = k.exec(q);
             var m = c(p.parent());
             if (a(".forum .largetext").length > 0) {
                 j = a("#js-msgs #friend-url").html() + "/increase/mybb/" + q;
                 n = a("#js-msgs #friend-url").html() + "/decrease/mybb/" + q;
             } else {
                 j = a("#js-msgs #friend-url").html() + "/increase/" + q;
                 n = a("#js-msgs #friend-url").html() + "/decrease/" + q;
             }
             if (p.hasClass("friendlink-add")) {
                 a.post(
                     j,
                     function (r) {
                         if (r.result == "success") {
                             a(".pn-" + m + " .friendlink")
                                 .addClass("friendlink-friend")
                                 .removeClass("friendlink-add")
                                 .attr("title", e);
                         }
                     },
                     "",
                     "json"
                 );
             } else {
                 a.post(
                     n,
                     function (r) {
                         if (r.result == "success") {
                             a(".pn-" + m + " .friendlink")
                                 .addClass("friendlink-add")
                                 .removeClass("friendlink-friend")
                                 .attr("title", f);
                         }
                     },
                     "",
                     "json"
                 );
             }
         }
         if (a(".headerBar .account").length > 0) {
             if (a(".forum .largetext").length > 0) {
                 g(a(".forum .largetext .player-name"));
             }
             if (a(".viewHeroProfile").length > 0 || a(".viewUserProfile").length > 0) {
                 g(a(".player-name"));
             }
             if (!a("#friends.manage").length > 0) {
                 a(".friendlink").live("click", b);
             }
         }
     });
 })(jQuery);
 function insertAd(a, e, d) {
     var e = (location.protocol == "https:" ? "https" : "http") + "://" + e;
     var b = e + "/ad/ajs.php";
     var c = Math.floor(Math.random() * 99999999999);
     var g = getLangFromPath();
     if (!document.MAX_used) {
         document.MAX_used = ",";
     }
     var f = "<script id='adscript' type='text/javascript' src='" + b + "?zoneid=" + a + "&amp;cb=" + c;
     if (document.MAX_used != ",") {
         f += "&amp;exclude=" + document.MAX_used;
     }
     f += document.charset ? "&amp;charset=" + document.charset : document.characterSet ? "&amp;charset=" + document.characterSet : "";
     f += "&amp;loc=" + escape(window.location);
     if (d) {
         f += "&amp;ch=" + d;
     }
     if (g) {
         f += "&amp;lang=" + g;
     }
     if (document.referrer) {
         f += "&amp;referer=" + escape(document.referrer);
     }
     if (document.context) {
         f += "&context=" + escape(document.context);
     }
     if (document.mmm_fo) {
         f += "&amp;mmm_fo=1";
     }
     f += "'></script>";
     document.write(f);
 }
 function getLangFromPath() {
     var c = location.pathname;
     var b = /^\/(..)\//;
     var a = b.exec(c);
     if (a != null) {
         return a[1];
     }
     return getCookie("language");
 }
 function getCookie(a) {
     if (document.cookie.length > 0) {
         cookieStart = document.cookie.indexOf(a + "=");
         if (cookieStart != -1) {
             cookieStart = cookieStart + a.length + 1;
             cookieEnd = document.cookie.indexOf(";", cookieStart);
             if (cookieEnd == -1) {
                 cookieEnd = document.cookie.length;
             }
             return unescape(document.cookie.substring(cookieStart, cookieEnd));
         }
     }
     return "en";
 }
 if (!window.__twttrlr) {
     (function (ay, ai) {
         function ad(c) {
             for (var a = 1, d; (d = arguments[a]); a++) {
                 for (var b in d) {
                     c[b] = d[b];
                 }
             }
             return c;
         }
         function aB(a) {
             return Array.prototype.slice.call(a);
         }
         function Y(c, a) {
             for (var d = 0, b; (b = c[d]); d++) {
                 if (a == b) {
                     return d;
                 }
             }
             return -1;
         }
         function G() {
             var c = aB(arguments),
                 a = [];
             for (var d = 0, b = c.length; d < b; d++) {
                 c[d].length > 0 && a.push(c[d].replace(/\/$/, ""));
             }
             return a.join("/");
         }
         function ae(f, b, g) {
             var d = b.split("/"),
                 a = f;
             while (d.length > 1) {
                 var c = d.shift();
                 a = a[c] = a[c] || {};
             }
             a[d[0]] = g;
         }
         function z() {}
         function Q(b, a) {
             (this.id = this.path = b), (this.force = !!a);
         }
         function aa(b, a) {
             (this.id = b), (this.body = a), typeof a == "undefined" && (this.path = this.resolvePath(b));
         }
         function ar(b, a) {
             (this.deps = b), (this.collectResults = a), this.deps.length == 0 && this.complete();
         }
         function U(b, a) {
             (this.deps = b), (this.collectResults = a);
         }
         function ac() {
             for (var a in ak) {
                 if (ak[a].readyState == "interactive") {
                     return aA[ak[a].id];
                 }
             }
         }
         function K(c, a) {
             var b;
             return !c && ao && (b = aq || ac()), b ? (delete aA[b.scriptId], (b.body = a), b.execute()) : ((ax = b = new aa(c, a)), (aC[b.id] = b)), b;
         }
         function R() {
             var b = aB(arguments),
                 a,
                 c;
             return typeof b[0] == "string" && (a = b.shift()), (c = b.shift()), K(a, c);
         }
         function aD(d, b) {
             var f = b.id || "",
                 c = f.split("/");
             c.pop();
             var a = c.join("/");
             return d.replace(/^\./, a);
         }
         function Z(f, b) {
             function d(j) {
                 return aa.exports[aD(j, b)];
             }
             var g = [];
             for (var a = 0, c = f.length; a < c; a++) {
                 if (f[a] == "require") {
                     g.push(d);
                     continue;
                 }
                 if (f[a] == "exports") {
                     (b.exports = b.exports || {}), g.push(b.exports);
                     continue;
                 }
                 g.push(d(f[a]));
             }
             return g;
         }
         function J() {
             var c = aB(arguments),
                 a = [],
                 d,
                 b;
             return (
                 typeof c[0] == "string" && (d = c.shift()),
                 af(c[0]) && (a = c.shift()),
                 (b = c.shift()),
                 K(d, function (l) {
                     function k() {
                         var e = Z(aB(a), p),
                             n;
                         typeof b == "function" ? (n = b.apply(p, e)) : (n = b), typeof n == "undefined" && (n = p.exports), l(n);
                     }
                     var p = this,
                         j = [];
                     for (var m = 0, g = a.length; m < g; m++) {
                         var f = a[m];
                         Y(["require", "exports"], f) == -1 && j.push(aD(f, p));
                     }
                     j.length > 0 ? W.apply(this, j.concat(k)) : k();
                 })
             );
         }
         function W() {
             var c = aB(arguments),
                 a,
                 d;
             typeof c[c.length - 1] == "function" && (a = c.pop()), typeof c[c.length - 1] == "boolean" && (d = c.pop());
             var b = new ar(ab(c, d), d);
             return a && b.then(a), b;
         }
         function ab(d, b) {
             var f = [];
             for (var c = 0, a; (a = d[c]); c++) {
                 typeof a == "string" && (a = at(a)), af(a) && (a = new U(ab(a, b), b)), f.push(a);
             }
             return f;
         }
         function at(f) {
             var b, j;
             for (var d = 0, a; (a = W.matchers[d]); d++) {
                 var c = a[0],
                     g = a[1];
                 if ((b = f.match(c))) {
                     return g(f);
                 }
             }
             throw new Error(f + " was not recognised by loader");
         }
         function V() {
             return (ay.using = av), (ay.provide = am), (ay.define = az), (ay.loadrunner = ag), X;
         }
         function al(b) {
             for (var a = 0; a < W.bundles.length; a++) {
                 for (var c in W.bundles[a]) {
                     if (c != b && Y(W.bundles[a][c], b) > -1) {
                         return c;
                     }
                 }
             }
         }
         var ao = ay.attachEvent && !ay.opera,
             ak = ai.getElementsByTagName("script"),
             au = 0,
             aj,
             an = ai.createElement("script"),
             ah = {},
             aC = {},
             ax,
             aq,
             aA = {},
             av = ay.using,
             am = ay.provide,
             az = ay.define,
             ag = ay.loadrunner;
         for (var ap = 0, aw; (aw = ak[ap]); ap++) {
             if (aw.src.match(/loadrunner\.js(\?|#|$)/)) {
                 aj = aw;
                 break;
             }
         }
         var af =
             Array.isArray ||
             function (a) {
                 return a.constructor == Array;
             };
         (z.prototype.then = function (a) {
             var b = this;
             return this.started || ((this.started = !0), this.start()), this.completed ? a.apply(ay, this.results) : ((this.callbacks = this.callbacks || []), this.callbacks.push(a)), this;
         }),
             (z.prototype.start = function () {}),
             (z.prototype.complete = function () {
                 if (!this.completed) {
                     (this.results = aB(arguments)), (this.completed = !0);
                     if (this.callbacks) {
                         for (var a = 0, b; (b = this.callbacks[a]); a++) {
                             b.apply(ay, this.results);
                         }
                     }
                 }
             }),
             (Q.loaded = []),
             (Q.prototype = new z()),
             (Q.prototype.start = function () {
                 var c = this,
                     a,
                     d,
                     b;
                 return (b = aC[this.id])
                     ? (b.then(function () {
                           c.complete();
                       }),
                       this)
                     : ((a = ah[this.id])
                           ? a.then(function () {
                                 c.loaded();
                             })
                           : !this.force && Y(Q.loaded, this.id) > -1
                           ? this.loaded()
                           : (d = al(this.id))
                           ? W(d, function () {
                                 c.loaded();
                             })
                           : this.load(),
                       this);
             }),
             (Q.prototype.load = function () {
                 var a = this;
                 ah[this.id] = a;
                 var b = an.cloneNode(!1);
                 (this.scriptId = b.id = "LR" + ++au),
                     (b.type = "text/javascript"),
                     (b.async = !0),
                     (b.onerror = function () {
                         throw new Error(a.path + " not loaded");
                     }),
                     (b.onreadystatechange = b.onload = function (c) {
                         c = ay.event || c;
                         if (c.type == "load" || Y(["loaded", "complete"], this.readyState) > -1) {
                             (this.onreadystatechange = null), a.loaded();
                         }
                     }),
                     (b.src = this.path),
                     (aq = this),
                     ak[0].parentNode.insertBefore(b, ak[0]),
                     (aq = null),
                     (aA[b.id] = this);
             }),
             (Q.prototype.loaded = function () {
                 this.complete();
             }),
             (Q.prototype.complete = function () {
                 Y(Q.loaded, this.id) == -1 && Q.loaded.push(this.id), delete ah[this.id], z.prototype.complete.apply(this, arguments);
             }),
             (aa.exports = {}),
             (aa.prototype = new Q()),
             (aa.prototype.resolvePath = function (a) {
                 return G(W.path, a + ".js");
             }),
             (aa.prototype.start = function () {
                 var c,
                     a,
                     d = this,
                     b;
                 this.body
                     ? this.execute()
                     : (c = aa.exports[this.id])
                     ? this.exp(c)
                     : (a = aC[this.id])
                     ? a.then(function (f) {
                           d.exp(f);
                       })
                     : (bundle = al(this.id))
                     ? W(bundle, function () {
                           d.start();
                       })
                     : ((aC[this.id] = this), this.load());
             }),
             (aa.prototype.loaded = function () {
                 var c,
                     a,
                     b = this;
                 ao
                     ? (a = aa.exports[this.id])
                         ? this.exp(a)
                         : (c = aC[this.id]) &&
                           c.then(function (d) {
                               b.exp(d);
                           })
                     : ((c = ax),
                       (ax = null),
                       (c.id = c.id || this.id),
                       c.then(function (d) {
                           b.exp(d);
                       }));
             }),
             (aa.prototype.complete = function () {
                 delete aC[this.id], Q.prototype.complete.apply(this, arguments);
             }),
             (aa.prototype.execute = function () {
                 var a = this;
                 typeof this.body == "object"
                     ? this.exp(this.body)
                     : typeof this.body == "function" &&
                       this.body.apply(window, [
                           function (b) {
                               a.exp(b);
                           },
                       ]);
             }),
             (aa.prototype.exp = function (a) {
                 this.complete((this.exports = aa.exports[this.id] = a || {}));
             }),
             (ar.prototype = new z()),
             (ar.prototype.start = function () {
                 function a() {
                     var e = [];
                     c.collectResults && (e[0] = {});
                     for (var g = 0, f; (f = c.deps[g]); g++) {
                         if (!f.completed) {
                             return;
                         }
                         f.results.length > 0 && (c.collectResults ? (f instanceof U ? ad(e[0], f.results[0]) : ae(e[0], f.id, f.results[0])) : (e = e.concat(f.results)));
                     }
                     c.complete.apply(c, e);
                 }
                 var c = this;
                 for (var d = 0, b; (b = this.deps[d]); d++) {
                     b.then(a);
                 }
                 return this;
             }),
             (U.prototype = new z()),
             (U.prototype.start = function () {
                 var c = this,
                     a = 0,
                     d = [];
                 return (
                     c.collectResults && (d[0] = {}),
                     (function b() {
                         var e = c.deps[a++];
                         e
                             ? e.then(function (f) {
                                   e.results.length > 0 && (c.collectResults ? (e instanceof U ? ad(d[0], e.results[0]) : ae(d[0], e.id, e.results[0])) : d.push(e.results[0])), b();
                               })
                             : c.complete.apply(c, d);
                     })(),
                     this
                 );
             }),
             (J.amd = {});
         var X = function (a) {
             return a(W, R, X, define);
         };
         (X.Script = Q),
             (X.Module = aa),
             (X.Collection = ar),
             (X.Sequence = U),
             (X.Dependency = z),
             (X.noConflict = V),
             (ay.loadrunner = X),
             (ay.using = W),
             (ay.provide = R),
             (ay.define = J),
             (W.path = ""),
             (W.matchers = []),
             (W.matchers.add = function (b, a) {
                 this.unshift([b, a]);
             }),
             W.matchers.add(/(^script!|\.js$)/, function (b) {
                 var a = new Q(b.replace(/^\$/, W.path.replace(/\/$/, "") + "/").replace(/^script!/, ""), !1);
                 return (a.id = b), a;
             }),
             W.matchers.add(/^[a-zA-Z0-9_\-\/]+$/, function (a) {
                 return new aa(a);
             }),
             (W.bundles = []),
             aj && ((W.path = window.__twttrLoadRunnerPath || aj.getAttribute("data-path") || aj.src.split(/loadrunner\.js/)[0] || ""), (main = aj.getAttribute("data-main")) && W.apply(ay, main.split(/\s*,\s*/)).then(function () {}));
     })(this, document);
     window.__twttrlr = loadrunner.noConflict();
 }
 __twttrlr(function (using, provide, loadrunner, define) {
     provide("util/util", function (e) {
         function t(e) {
             return e && String(e).toLowerCase().indexOf("[native code]") > -1;
         }
         function n(e) {
             return (
                 o(arguments, function (t) {
                     s(t, function (t, n) {
                         e[t] = n;
                     });
                 }),
                 e
             );
         }
         function r(e) {
             return (
                 s(e, function (t, n) {
                     v(n) && (r(n), m(n) && delete e[t]), (n === undefined || n === null || n === "") && delete e[t];
                 }),
                 e
             );
         }
         function s(e, t) {
             for (var n in e) {
                 (!e.hasOwnProperty || e.hasOwnProperty(n)) && t(n, e[n]);
             }
             return e;
         }
         function c(e) {
             return {}.toString
                 .call(e)
                 .match(/\s([a-zA-Z]+)/)[1]
                 .toLowerCase();
         }
         function h(e, t) {
             return e == c(t);
         }
         function p(e, t, n) {
             return (
                 (n = n || []),
                 function () {
                     var r = a(arguments, function (e) {
                         return e;
                     });
                     return e.apply(t, n.concat(r));
                 }
             );
         }
         function v(e) {
             return e === Object(e);
         }
         function m(e) {
             if (!v(e)) {
                 return !1;
             }
             if (Object.keys) {
                 return !Object.keys(e).length;
             }
             for (var t in e) {
                 if (e.hasOwnProperty(t)) {
                     return !1;
                 }
             }
             return !0;
         }
         var i = (function () {
                 var e = Array.prototype.indexOf;
                 return t(e)
                     ? function (t, n) {
                           return t ? e.apply(t, [n]) : -1;
                       }
                     : function (e, t) {
                           if (!e) {
                               return -1;
                           }
                           for (var n = 0, r = e.length; n < r; n++) {
                               if (t == e[n]) {
                                   return n;
                               }
                           }
                           return -1;
                       };
             })(),
             o = (function () {
                 var e = Array.prototype.forEach;
                 return t(e)
                     ? function (t, n) {
                           if (!t) {
                               return;
                           }
                           if (!n) {
                               return;
                           }
                           e.apply(t, [n]);
                       }
                     : function (e, t) {
                           if (!e) {
                               return;
                           }
                           if (!t) {
                               return;
                           }
                           for (var n = 0, r = e.length; n < r; n++) {
                               t(e[n], n);
                           }
                       };
             })(),
             u = (function () {
                 var e = Array.prototype.filter;
                 return t(e)
                     ? function (t, n) {
                           return t ? (n ? e.apply(t, [n]) : t) : null;
                       }
                     : function (e, t) {
                           if (!e) {
                               return null;
                           }
                           if (!t) {
                               return e;
                           }
                           var n = [],
                               r = 0,
                               i = e.length;
                           for (; r < i; r++) {
                               t(e[r]) && n.push(e[r]);
                           }
                           return n;
                       };
             })(),
             a = (function () {
                 var e = Array.prototype.map;
                 return t(e)
                     ? function (t, n) {
                           return t ? (n ? e.apply(t, [n]) : t) : null;
                       }
                     : function (e, t) {
                           if (!e) {
                               return null;
                           }
                           if (!t) {
                               return e;
                           }
                           var n = [],
                               r = 0,
                               i = e.length;
                           for (; r < i; r++) {
                               n.push(t(e[r]));
                           }
                           return n;
                       };
             })(),
             f = (function () {
                 var e = Array.prototype.reduce;
                 return t(e)
                     ? function (t, n, r) {
                           return t ? (n ? e.apply(t, [n, r]) : r) : null;
                       }
                     : function (e, t, n) {
                           if (!e) {
                               return null;
                           }
                           if (!t) {
                               return n;
                           }
                           var r = n,
                               i = 0,
                               s = e.length;
                           for (; i < s; i++) {
                               r = t(r, e[i], i, e);
                           }
                           return r;
                       };
             })(),
             l = (function () {
                 var e = String.prototype.trim;
                 return t(e)
                     ? function (t) {
                           return t && e.apply(t);
                       }
                     : function (e) {
                           return e && e.replace(/(^\s+|\s+$)/g, "");
                       };
             })(),
             d = t(Object.create)
                 ? Object.create
                 : function (e) {
                       function t() {}
                       return (t.prototype = e), new t();
                   };
         e({ aug: n, compact: r, forIn: s, forEach: o, filter: u, map: a, reduce: f, trim: l, indexOf: i, isNative: t, isObject: v, isEmptyObject: m, createObject: d, bind: p, toType: c, isType: h });
     });
     provide("util/events", function (e) {
         using("util/util", function (t) {
             function r() {
                 (this.completed = !1), (this.callbacks = []);
             }
             var n = {
                 bind: function (e, t) {
                     return (this._handlers = this._handlers || {}), (this._handlers[e] = this._handlers[e] || []), this._handlers[e].push(t);
                 },
                 unbind: function (e, n) {
                     if (!this._handlers[e]) {
                         return;
                     }
                     if (n) {
                         var r = t.indexOf(this._handlers[e], n);
                         r >= 0 && this._handlers[e].splice(r, 1);
                     } else {
                         this._handlers[e] = [];
                     }
                 },
                 trigger: function (e, t) {
                     var n = this._handlers && this._handlers[e];
                     t.type = e;
                     if (n) {
                         for (var r = 0, i; (i = n[r]); r++) {
                             i.call(this, t);
                         }
                     }
                 },
             };
             (r.prototype.addCallback = function (e) {
                 this.completed ? e.apply(this, this.results) : this.callbacks.push(e);
             }),
                 (r.prototype.complete = function () {
                     (this.results = makeArray(arguments)), (this.completed = !0);
                     for (var e = 0, t; (t = this.callbacks[e]); e++) {
                         t.apply(this, this.results);
                     }
                 }),
                 e({ Emitter: n, Promise: r });
         });
     });
     provide("$xd/json2.js", function (exports) {
         window.JSON || (window.JSON = {}),
             (function () {
                 function f(e) {
                     return e < 10 ? "0" + e : e;
                 }
                 function quote(e) {
                     return (
                         (escapable.lastIndex = 0),
                         escapable.test(e)
                             ? '"' +
                               e.replace(escapable, function (e) {
                                   var t = meta[e];
                                   return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                               }) +
                               '"'
                             : '"' + e + '"'
                     );
                 }
                 function str(e, t) {
                     var n,
                         r,
                         i,
                         s,
                         o = gap,
                         u,
                         a = t[e];
                     a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
                     switch (typeof a) {
                         case "string":
                             return quote(a);
                         case "number":
                             return isFinite(a) ? String(a) : "null";
                         case "boolean":
                         case "null":
                             return String(a);
                         case "object":
                             if (!a) {
                                 return "null";
                             }
                             (gap += indent), (u = []);
                             if (Object.prototype.toString.apply(a) === "[object Array]") {
                                 s = a.length;
                                 for (n = 0; n < s; n += 1) {
                                     u[n] = str(n, a) || "null";
                                 }
                                 return (i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]"), (gap = o), i;
                             }
                             if (rep && typeof rep == "object") {
                                 s = rep.length;
                                 for (n = 0; n < s; n += 1) {
                                     (r = rep[n]), typeof r == "string" && ((i = str(r, a)), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                                 }
                             } else {
                                 for (r in a) {
                                     Object.hasOwnProperty.call(a, r) && ((i = str(r, a)), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                                 }
                             }
                             return (i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}"), (gap = o), i;
                     }
                 }
                 typeof Date.prototype.toJSON != "function" &&
                     ((Date.prototype.toJSON = function (e) {
                         return isFinite(this.valueOf())
                             ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
                             : null;
                     }),
                     (String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
                         return this.valueOf();
                     }));
                 var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                     escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                     gap,
                     indent,
                     meta = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
                     rep;
                 typeof JSON.stringify != "function" &&
                     (JSON.stringify = function (e, t, n) {
                         var r;
                         (gap = ""), (indent = "");
                         if (typeof n == "number") {
                             for (r = 0; r < n; r += 1) {
                                 indent += " ";
                             }
                         } else {
                             typeof n == "string" && (indent = n);
                         }
                         rep = t;
                         if (!t || typeof t == "function" || (typeof t == "object" && typeof t.length == "number")) {
                             return str("", { "": e });
                         }
                         throw new Error("JSON.stringify");
                     }),
                     typeof JSON.parse != "function" &&
                         (JSON.parse = function (text, reviver) {
                             function walk(e, t) {
                                 var n,
                                     r,
                                     i = e[t];
                                 if (i && typeof i == "object") {
                                     for (n in i) {
                                         Object.hasOwnProperty.call(i, n) && ((r = walk(i, n)), r !== undefined ? (i[n] = r) : delete i[n]);
                                     }
                                 }
                                 return reviver.call(e, t, i);
                             }
                             var j;
                             (cx.lastIndex = 0),
                                 cx.test(text) &&
                                     (text = text.replace(cx, function (e) {
                                         return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                                     }));
                             if (
                                 /^[\],:{}\s]*$/.test(
                                     text
                                         .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                                         .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
                                         .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
                                 )
                             ) {
                                 return (j = eval("(" + text + ")")), typeof reviver == "function" ? walk({ "": j }, "") : j;
                             }
                             throw new SyntaxError("JSON.parse");
                         });
             })();
         exports();
         loadrunner.Script.loaded.push("$xd/json2.js");
     });
     provide("util/querystring", function (e) {
         function t(e) {
             return encodeURIComponent(e).replace(/\+/g, "%2B");
         }
         function n(e) {
             return decodeURIComponent(e);
         }
         function r(e) {
             var n = [],
                 r;
             for (r in e) {
                 e[r] !== null && typeof e[r] != "undefined" && n.push(t(r) + "=" + t(e[r]));
             }
             return n.sort().join("&");
         }
         function i(e) {
             var t = {},
                 r,
                 i,
                 s,
                 o;
             if (e) {
                 r = e.split("&");
                 for (o = 0; (s = r[o]); o++) {
                     (i = s.split("=")), i.length == 2 && (t[n(i[0])] = n(i[1]));
                 }
             }
             return t;
         }
         function s(e, t) {
             var n = r(t);
             return n.length > 0 ? (e.indexOf("?") >= 0 ? e + "&" + r(t) : e + "?" + r(t)) : e;
         }
         function o(e) {
             var t = e && e.split("?");
             return t.length == 2 ? i(t[1]) : {};
         }
         e({ url: s, decodeURL: o, decode: i, encode: r, encodePart: t, decodePart: n });
     });
     provide("util/twitter", function (e) {
         using("util/querystring", function (t) {
             function o(e) {
                 return typeof e == "string" && n.test(e) && RegExp.$1.length <= 20;
             }
             function u(e) {
                 if (o(e)) {
                     return RegExp.$1;
                 }
             }
             function a(e) {
                 var n = t.decodeURL(e);
                 n.screen_name = u(e);
                 if (n.screen_name) {
                     return t.url("//twitter.com/intent/user", n);
                 }
             }
             function f(e) {
                 return typeof e == "string" && s.test(e);
             }
             function l(e, t) {
                 t = t === undefined ? !0 : t;
                 if (f(e)) {
                     return (t ? "#" : "") + RegExp.$1;
                 }
             }
             function c(e) {
                 return typeof e == "string" && r.test(e);
             }
             function h(e) {
                 return c(e) && RegExp.$1;
             }
             function p(e) {
                 return i.test(e);
             }
             var n = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
                 r = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
                 i = /^http(s?):\/\/((www\.)?)twitter\.com\//,
                 s = /^#?([^.,<>!\s\/#\-\(\)\'\"]+)$/;
             e({ isHashTag: f, hashTag: l, isScreenName: o, screenName: u, isStatus: c, status: h, intentForProfileURL: a, isTwitterURL: p, regexen: { profile: n } });
         });
     });
     provide("util/uri", function (e) {
         using("util/querystring", "util/util", "util/twitter", function (t, n, r) {
             function i(e, t) {
                 var n, r;
                 return (
                     (t = t || location),
                     /^https?:\/\//.test(e)
                         ? e
                         : /^\/\//.test(e)
                         ? t.protocol + e
                         : ((n = t.host + (t.port.length ? ":" + t.port : "")), e.indexOf("/") !== 0 && ((r = t.pathname.split("/")), r.pop(), r.push(e), (e = "/" + r.join("/"))), [t.protocol, "//", n, e].join(""))
                 );
             }
             function s() {
                 var e = document.getElementsByTagName("link"),
                     t = 0,
                     n;
                 for (; (n = e[t]); t++) {
                     if (n.rel == "canonical") {
                         return i(n.href);
                     }
                 }
             }
             function o() {
                 var e = document.getElementsByTagName("a"),
                     t = document.getElementsByTagName("link"),
                     n = [e, t],
                     i,
                     s,
                     o = 0,
                     u = 0,
                     a = /\bme\b/,
                     f;
                 for (; (i = n[o]); o++) {
                     for (u = 0; (s = i[u]); u++) {
                         if (a.test(s.rel) && (f = r.screenName(s.href))) {
                             return f;
                         }
                     }
                 }
             }
             e({ absolutize: i, getCanonicalURL: s, getScreenNameFromPage: o });
         });
     });
     provide("util/typevalidator", function (e) {
         using("util/util", function (t) {
             function n(e) {
                 return e !== undefined && e !== null && e !== "";
             }
             function r(e) {
                 return s(e) && e % 1 === 0;
             }
             function i(e) {
                 return s(e) && !r(e);
             }
             function s(e) {
                 return n(e) && !isNaN(e);
             }
             function o(e) {
                 return n(e) && t.toType(e) == "array";
             }
             function u(e) {
                 if (!n(e)) {
                     return !1;
                 }
                 switch (e) {
                     case "on":
                     case "ON":
                     case "true":
                     case "TRUE":
                         return !0;
                     case "off":
                     case "OFF":
                     case "false":
                     case "FALSE":
                         return !1;
                     default:
                         return !!e;
                 }
             }
             function a(e) {
                 if (s(e)) {
                     return e;
                 }
             }
             function f(e) {
                 if (i(e)) {
                     return e;
                 }
             }
             function l(e) {
                 if (r(e)) {
                     return e;
                 }
             }
             e({ hasValue: n, isInt: r, isFloat: i, isNumber: s, isArray: o, asInt: l, asFloat: f, asNumber: a, asBoolean: u });
         });
     });
     provide("tfw/util/globals", function (e) {
         using("util/typevalidator", function (t) {
             function r() {
                 var e = document.getElementsByTagName("meta"),
                     t,
                     r,
                     i = 0;
                 n = {};
                 for (; (t = e[i]); i++) {
                     if (!/^twitter:/.test(t.name)) {
                         continue;
                     }
                     (r = t.name.replace(/^twitter:/, "")), (n[r] = t.content);
                 }
             }
             function i(e) {
                 return n[e];
             }
             function s(e) {
                 return t.asBoolean(e) && (n.dnt = !0), t.asBoolean(n.dnt);
             }
             var n;
             r(), e({ init: r, val: i, dnt: s });
         });
     });
     provide("util/logger", function (e) {
         function n(e, n, r, i, s) {
             window[t] && window[t].log && window[t].log(e, n, r, i, s);
         }
         function r(e, n, r, i, s) {
             window[t] && window[t].warn && window[t].warn(e, n, r, i, s);
         }
         function i(e, n, r, i, s) {
             window[t] && window[t].error && window[t].error(e, n, r, i, s);
         }
         var t = ["con", "sole"].join("");
         e({ info: n, warn: r, error: i });
     });
     provide("util/domready", function (e) {
         function l() {
             t = 1;
             for (var e = 0, r = n.length; e < r; e++) {
                 n[e]();
             }
         }
         var t = 0,
             n = [],
             r,
             i,
             s = !1,
             o = document.createElement("a"),
             u = "DOMContentLoaded",
             a = "addEventListener",
             f = "onreadystatechange";
         /^loade|c/.test(document.readyState) && (t = 1),
             document[a] &&
                 document[a](
                     u,
                     (i = function () {
                         document.removeEventListener(u, i, s), l();
                     }),
                     s
                 ),
             o.doScroll &&
                 document.attachEvent(
                     f,
                     (r = function () {
                         /^c/.test(document.readyState) && (document.detachEvent(f, r), l());
                     })
                 );
         var c = o.doScroll
             ? function (e) {
                   self != top
                       ? t
                           ? e()
                           : n.push(e)
                       : !(function () {
                             try {
                                 o.doScroll("left");
                             } catch (t) {
                                 return setTimeout(function () {
                                     c(e);
                                 }, 50);
                             }
                             e();
                         })();
               }
             : function (e) {
                   t ? e() : n.push(e);
               };
         e(c);
     });
     provide("util/env", function (e) {
         using("util/domready", "util/typevalidator", "util/logger", "tfw/util/globals", function (t, n, r, i) {
             function f() {
                 return window.devicePixelRatio ? window.devicePixelRatio >= 1.5 : window.matchMedia ? window.matchMedia("only screen and (min-resolution: 144dpi)").matches : !1;
             }
             function l() {
                 return /MSIE \d/.test(s);
             }
             function c() {
                 return /MSIE 6/.test(s);
             }
             function h() {
                 return /MSIE 7/.test(s);
             }
             function p() {
                 return /MSIE 9/.test(s);
             }
             function d() {
                 return /(iPad|iPhone|iPod)/.test(s);
             }
             function v() {
                 return /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(s);
             }
             function m() {
                 return o;
             }
             function g() {
                 return "ontouchstart" in window || /Opera Mini/.test(s) || navigator.msMaxTouchPoints > 0;
             }
             function y() {
                 var e = document.body.style;
                 return e.transition !== undefined || e.webkitTransition !== undefined || e.mozTransition !== undefined || e.oTransition !== undefined || e.msTransition !== undefined;
             }
             var s = window.navigator.userAgent,
                 o = !1,
                 u = !1,
                 a = "twitter-csp-test";
             (window.twttr = window.twttr || {}),
                 (twttr.verifyCSP = function (e) {
                     var t = document.getElementById(a);
                     (u = !0), (o = !!e), t && t.parentNode.removeChild(t);
                 }),
                 t(function () {
                     var e;
                     if (c() || h()) {
                         return (o = !1);
                     }
                     if (n.asBoolean(i.val("widgets:csp"))) {
                         return (o = !0);
                     }
                     (e = document.createElement("script")),
                         (e.id = a),
                         (e.text = "twttr.verifyCSP(false);"),
                         document.body.appendChild(e),
                         window.setTimeout(function () {
                             if (u) {
                                 return;
                             }
                             r.warn('TWITTER: Content Security Policy restrictions may be applied to your site. Add <meta name="twitter:widgets:csp" content="on"> to supress this warning.'),
                                 r.warn("TWITTER: Please note: Not all embedded timeline and embedded Tweet functionality is supported when CSP is applied.");
                         }, 5000);
                 }),
                 e({ retina: f, anyIE: l, ie6: c, ie7: h, ie9: p, ios: d, android: v, cspEnabled: m, touch: g, cssTransitions: y });
         });
     });
     provide("dom/delegate", function (e) {
         using("util/env", function (t) {
             function i(e) {
                 var t = e.getAttribute("data-twitter-event-id");
                 return t ? t : (e.setAttribute("data-twitter-event-id", ++r), r);
             }
             function s(e, t, n) {
                 var r = 0,
                     i = (e && e.length) || 0;
                 for (r = 0; r < i; r++) {
                     e[r].call(t, n);
                 }
             }
             function o(e, t, n) {
                 var r = n || e.target || e.srcElement,
                     i = r.className.split(" "),
                     u = 0,
                     a,
                     f = i.length;
                 for (; u < f; u++) {
                     s(t["." + i[u]], r, e);
                 }
                 s(t[r.tagName], r, e);
                 if (e.cease) {
                     return;
                 }
                 r !== this && o.call(this, e, t, r.parentElement || r.parentNode);
             }
             function u(e, t, n) {
                 if (e.addEventListener) {
                     e.addEventListener(
                         t,
                         function (r) {
                             o.call(e, r, n[t]);
                         },
                         !1
                     );
                     return;
                 }
                 e.attachEvent &&
                     e.attachEvent("on" + t, function () {
                         o.call(e, e.ownerDocument.parentWindow.event, n[t]);
                     });
             }
             function a(e, t, r, s) {
                 var o = i(e);
                 (n[o] = n[o] || {}), n[o][t] || ((n[o][t] = {}), u(e, t, n[o])), (n[o][t][r] = n[o][t][r] || []), n[o][t][r].push(s);
             }
             function f(e, t, n) {
                 e.addEventListener
                     ? e.addEventListener(t, n, !1)
                     : e.attachEvent("on" + t, function () {
                           n(window.event);
                       });
             }
             function l(e, t, r) {
                 var s = i(t),
                     u = n[s] && n[s];
                 o.call(t, { target: r }, u[e]);
             }
             function c(e) {
                 return p(e), h(e), !1;
             }
             function h(e) {
                 e && e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
             }
             function p(e) {
                 e && (e.cease = !0) && e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
             }
             var n = {},
                 r = -1;
             e({ stop: c, stopPropagation: p, preventDefault: h, delegate: a, on: f, simulate: l });
         });
     });
     provide("tfw/util/article", function (e) {
         using("dom/delegate", "tfw/util/globals", "util/uri", "$xd/json2.js", function (t, n, r) {
             function o() {
                 i = r.getCanonicalURL() || "" + document.location;
                 if (!window.top.postMessage) {
                     return;
                 }
                 if (window == window.top) {
                     t.on(window, "message", function (e) {
                         var t;
                         if (e.data && e.data[0] != "{") {
                             return;
                         }
                         try {
                             t = JSON.parse(e.data);
                         } catch (r) {}
                         t && t.name == "twttr:private:requestArticleUrl" && e.source.postMessage(JSON.stringify({ name: "twttr:private:provideArticleUrl", data: { url: i, dnt: n.dnt() } }), "*");
                     });
                     return;
                 }
                 t.on(window, "message", function (e) {
                     var t;
                     if (e.data && e.data[0] != "{") {
                         return;
                     }
                     try {
                         t = JSON.parse(e.data);
                     } catch (r) {}
                     t && t.name == "twttr:private:provideArticleUrl" && ((i = t.data && t.data.url), n.dnt(t.data.dnt), (s = document.location.href));
                 }),
                     window.top.postMessage(JSON.stringify({ name: "twttr:private:requestArticleUrl" }), "*");
             }
             var i,
                 s = "";
             o(),
                 e({
                     url: function () {
                         return i;
                     },
                     frameUrl: function () {
                         return s;
                     },
                 });
         });
     });
     provide("util/promise", function (e) {
         using("util/util", function (t) {
             var n = function (e, t) {
                     setTimeout(function () {
                         e.call(t);
                     }, 1);
                 },
                 r = function (e) {
                     try {
                         var t = e.then;
                         if (typeof t == "function") {
                             return !0;
                         }
                     } catch (n) {}
                     return !1;
                 },
                 i = function (e) {
                     Error.call(this, e);
                 };
             i.prototype = t.createObject(Error.prototype);
             var s = function () {
                     var e = [];
                     return (
                         (e.pump = function (t) {
                             n(function () {
                                 var n = e.length,
                                     r = 0;
                                 while (r < n) {
                                     r++, e.shift()(t);
                                 }
                             });
                         }),
                         e
                     );
                 },
                 o = function (e, t, i, s, o, u) {
                     var a = !1,
                         f = this,
                         l = function (e) {
                             n(function () {
                                 u("fulfilled"), s(e), t.pump(e);
                             });
                         },
                         c = function (e) {
                             n(function () {
                                 u("rejected"), o(e), i.pump(e);
                             });
                         },
                         h = function (e) {
                             if (r(e)) {
                                 e.then(h, c);
                                 return;
                             }
                             l(e);
                         },
                         p = function (e, t) {
                             return function (t) {
                                 a || ((a = !0), e(t));
                             };
                         };
                     (this.resolve = p(h, "resolve")),
                         (this.fulfill = p(l, "fulfill")),
                         (this.reject = p(c, "reject")),
                         (this.cancel = function () {
                             f.reject(new Error("Cancel"));
                         }),
                         (this.timeout = function () {
                             f.reject(new Error("Timeout"));
                         }),
                         u("pending");
                 },
                 u = function (e) {
                     var t = new s(),
                         n = new s(),
                         r,
                         i,
                         u = "pending";
                     (this._addAcceptCallback = function (e) {
                         t.push(e), u == "fulfilled" && t.pump(r);
                     }),
                         (this._addRejectCallback = function (e) {
                             n.push(e), u == "rejected" && n.pump(i);
                         });
                     var a = new o(
                         this,
                         t,
                         n,
                         function (e) {
                             r = e;
                         },
                         function (e) {
                             i = e;
                         },
                         function (e) {
                             u = e;
                         }
                     );
                     try {
                         e && e(a);
                     } catch (f) {
                         a.reject(f);
                     }
                 },
                 a = function (e) {
                     return typeof e == "function";
                 },
                 f = function (e, n, r) {
                     return a(e)
                         ? function () {
                               try {
                                   var t = e.apply(null, arguments);
                                   n.resolve(t);
                               } catch (r) {
                                   n.reject(r);
                               }
                           }
                         : t.bind(n[r], n);
                 },
                 l = function (e, t, n) {
                     return a(e) && n._addAcceptCallback(e), a(t) && n._addRejectCallback(t), n;
                 };
             t.aug(u.prototype, {
                 then: function (e, t) {
                     var n = this;
                     return new u(function (r) {
                         l(f(e, r, "resolve"), f(t, r, "reject"), n);
                     });
                 },
                 catch: function (e) {
                     var t = this;
                     return new u(function (n) {
                         l(null, f(e, n, "reject"), t);
                     });
                 },
             }),
                 (u.isThenable = r);
             var c = function (e) {
                 return t.map(e, u.resolve);
             };
             (u.any = function () {
                 var e = c(arguments);
                 return new u(function (n) {
                     if (!e.length) {
                         n.reject("No futures passed to Promise.any()");
                     } else {
                         var r = !1,
                             i = function (e) {
                                 if (r) {
                                     return;
                                 }
                                 (r = !0), n.resolve(e);
                             },
                             s = function (e) {
                                 if (r) {
                                     return;
                                 }
                                 (r = !0), n.reject(e);
                             };
                         t.forEach(e, function (e, t) {
                             e.then(i, s);
                         });
                     }
                 });
             }),
                 (u.every = function () {
                     var e = c(arguments);
                     return new u(function (n) {
                         if (!e.length) {
                             n.reject("No futures passed to Promise.every()");
                         } else {
                             var r = new Array(e.length),
                                 i = 0,
                                 s = function (t, s) {
                                     i++, (r[t] = s), i == e.length && n.resolve(r);
                                 };
                             t.forEach(e, function (e, r) {
                                 e.then(t.bind(s, null, [r]), n.reject);
                             });
                         }
                     });
                 }),
                 (u.some = function () {
                     var e = c(arguments);
                     return new u(function (n) {
                         if (!e.length) {
                             n.reject("No futures passed to Promise.some()");
                         } else {
                             var r = 0,
                                 i = function (t) {
                                     r++, r == e.length && n.reject();
                                 };
                             t.forEach(e, function (e, t) {
                                 e.then(n.resolve, i);
                             });
                         }
                     });
                 }),
                 (u.fulfill = function (e) {
                     return new u(function (t) {
                         t.fulfill(e);
                     });
                 }),
                 (u.resolve = function (e) {
                     return new u(function (t) {
                         t.resolve(e);
                     });
                 }),
                 (u.reject = function (e) {
                     return new u(function (t) {
                         t.reject(e);
                     });
                 }),
                 e(u);
         });
     });
     provide("util/layout", function (e) {
         using("util/promise", "util/logger", function (t, n) {
             function s() {}
             var r = [],
                 i;
             (s.prototype.enqueue = function (e, n) {
                 return new t(function (t) {
                     r.push({ action: e, resolver: t, note: n });
                 });
             }),
                 (s.prototype.exec = function () {
                     var e = r,
                         t;
                     if (!e.length) {
                         return;
                     }
                     r = [];
                     while (e.length) {
                         (t = e.shift()), t && t.action ? t.resolver.fulfill(t.action()) : t.resolver.reject();
                     }
                 }),
                 (s.prototype.delayedExec = function () {
                     i && window.clearTimeout(i), (i = window.setTimeout(this.exec, 100));
                 }),
                 e(s);
         });
     });
     provide("util/iframe", function (e) {
         using("util/util", function (t) {
             e(function (e, n, r) {
                 var i;
                 (r = r || document), (e = e || {}), (n = n || {});
                 if (e.name) {
                     try {
                         i = r.createElement('<iframe name="' + e.name + '"></iframe>');
                     } catch (s) {
                         (i = r.createElement("iframe")), (i.name = e.name);
                     }
                     delete e.name;
                 } else {
                     i = r.createElement("iframe");
                 }
                 return (
                     e.id && ((i.id = e.id), delete e.id),
                     (i.allowtransparency = "true"),
                     (i.scrolling = "no"),
                     i.setAttribute("frameBorder", 0),
                     i.setAttribute("allowTransparency", !0),
                     t.forIn(e, function (e, t) {
                         i.setAttribute(e, t);
                     }),
                     t.forIn(n, function (e, t) {
                         i.style[e] = t;
                     }),
                     i
                 );
             });
         });
     });
     provide("dom/get", function (e) {
         using("util/util", function (t) {
             function r(e, t, r) {
                 return n(e, t, r, 1)[0];
             }
             function i(e, n, r) {
                 var s = n && n.parentNode,
                     o;
                 if (!s || s === r) {
                     return;
                 }
                 return s.tagName == e ? s : ((o = s.className.split(" ")), 0 === e.indexOf(".") && ~t.indexOf(o, e.slice(1)) ? s : i(e, s, r));
             }
             var n = (function () {
                 var e = document.getElementsByClassName;
                 return t.isNative(e)
                     ? function (n, r, i, s) {
                           var o = r ? r.getElementsByClassName(n) : e.call(document, n),
                               u = t.filter(o, function (e) {
                                   return !i || e.tagName.toLowerCase() == i.toLowerCase();
                               });
                           return [].slice.call(u, 0, s || u.length);
                       }
                     : function (e, n, r, i) {
                           var s,
                               o,
                               u = [],
                               a,
                               f,
                               l,
                               c,
                               h,
                               p;
                           (n = n || document), (a = e.split(" ")), (c = a.length), (s = n.getElementsByTagName(r || "*")), (p = s.length);
                           for (l = 0; l < c && p > 0; l++) {
                               (u = []), (f = a[l]);
                               for (h = 0; h < p; h++) {
                                   (o = s[h]), ~t.indexOf(o.className.split(" "), f) && u.push(o);
                                   if (l + 1 == c && u.length === i) {
                                       break;
                                   }
                               }
                               (s = u), (p = s.length);
                           }
                           return u;
                       };
             })();
             e({ all: n, one: r, ancestor: i });
         });
     });
     provide("tfw/widget/base", function (e) {
         using("dom/get", "util/domready", "util/iframe", "util/layout", "util/promise", "util/querystring", "util/typevalidator", "util/util", "tfw/util/globals", function (t, n, r, i, s, o, u, a, f) {
             function g(e) {
                 var t;
                 if (!e) {
                     return;
                 }
                 e.ownerDocument ? ((this.srcEl = e), (this.classAttr = e.className.split(" "))) : ((this.srcOb = e), (this.classAttr = [])),
                     (t = this.params()),
                     (this.id = this.generateId()),
                     this.setLanguage(),
                     (this.related = t.related || this.dataAttr("related")),
                     (this.partner = t.partner || this.dataAttr("partner") || f.val("partner")),
                     (this.dnt = t.dnt || this.dataAttr("dnt") || f.dnt() || ""),
                     (this.styleAttr = []),
                     (this.targetEl = e.targetEl),
                     (this.completePromise = new s(
                         a.bind(function (e) {
                             this.completeResolver = e;
                         }, this)
                     )),
                     this.completed().then(function (e) {
                         if (!e || e == document.body) {
                             return;
                         }
                         twttr.events.trigger("rendered", { target: e });
                     });
             }
             function y() {
                 a.forEach(p, function (e) {
                     e();
                 }),
                     g.doLayout();
             }
             function b(e) {
                 if (!e) {
                     return;
                 }
                 return e.lang ? e.lang : b(e.parentNode);
             }
             var l = 0,
                 c,
                 h = { list: [], byId: {} },
                 p = [],
                 d = new i(),
                 v = "data-twttr-rendered",
                 m = {
                     ar: {
                         "%{followers_count} followers": "?????? ?????????????????? %{followers_count}",
                         "100K+": "+100 ??????",
                         "10k unit": "10 ???????? ????????",
                         Follow: "??????????",
                         "Follow %{screen_name}": "?????????? %{screen_name}",
                         K: "??????",
                         M: "??????????",
                         Tweet: "??????????",
                         "Tweet %{hashtag}": "?????????? %{hashtag}",
                         "Tweet to %{name}": "?????????? ???? %{name}",
                     },
                     da: { "%{followers_count} followers": "%{followers_count} f??lgere", "10k unit": "10k enhed", Follow: "F??lg", "Follow %{screen_name}": "F??lg %{screen_name}", "Tweet to %{name}": "Tweet til %{name}" },
                     de: {
                         "%{followers_count} followers": "%{followers_count} Follower",
                         "100K+": "100Tsd+",
                         "10k unit": "10tsd-Einheit",
                         Follow: "Folgen",
                         "Follow %{screen_name}": "%{screen_name} folgen",
                         K: "Tsd",
                         Tweet: "Twittern",
                         "Tweet to %{name}": "Tweet an %{name}",
                     },
                     es: {
                         "%{followers_count} followers": "%{followers_count} seguidores",
                         "10k unit": "10k unidad",
                         Follow: "Seguir",
                         "Follow %{screen_name}": "Seguir a %{screen_name}",
                         Tweet: "Twittear",
                         "Tweet %{hashtag}": "Twittear %{hashtag}",
                         "Tweet to %{name}": "Twittear a %{name}",
                     },
                     fa: {
                         "%{followers_count} followers": "%{followers_count} ???????????????????????",
                         "100K+": ">??????????????",
                         "10k unit": "???????????? ????????",
                         Follow: "?????????? ????????",
                         "Follow %{screen_name}": "?????????? ???????? %{screen_name}",
                         K: "????????",
                         M: "????????????",
                         Tweet: "??????????",
                         "Tweet %{hashtag}": "?????????? ???????? %{hashtag}",
                         "Tweet to %{name}": "???? %{name} ?????????? ????????",
                     },
                     fi: {
                         "%{followers_count} followers": "%{followers_count} seuraajaa",
                         "100K+": "100 000+",
                         "10k unit": "10 000 yksikk????",
                         Follow: "Seuraa",
                         "Follow %{screen_name}": "Seuraa k??ytt??j???? %{screen_name}",
                         K: "tuhatta",
                         M: "milj.",
                         Tweet: "Twiittaa",
                         "Tweet %{hashtag}": "Twiittaa %{hashtag}",
                         "Tweet to %{name}": "Twiittaa k??ytt??j??lle %{name}",
                     },
                     fil: {
                         "%{followers_count} followers": "%{followers_count} mga tagasunod",
                         "10k unit": "10k yunit",
                         Follow: "Sundan",
                         "Follow %{screen_name}": "Sundan si %{screen_name}",
                         Tweet: "I-tweet",
                         "Tweet %{hashtag}": "I-tweet ang %{hashtag}",
                         "Tweet to %{name}": "Mag-Tweet kay %{name}",
                     },
                     fr: {
                         "%{followers_count} followers": "%{followers_count} abonn??s",
                         "10k unit": "unit?? de 10k",
                         Follow: "Suivre",
                         "Follow %{screen_name}": "Suivre %{screen_name}",
                         Tweet: "Tweeter",
                         "Tweet %{hashtag}": "Tweeter %{hashtag}",
                         "Tweet to %{name}": "Tweeter ?? %{name}",
                     },
                     he: {
                         "%{followers_count} followers": "%{followers_count} ????????????",
                         "100K+": "???????? ??????????",
                         "10k unit": "?????????? ??????????",
                         Follow: "????????",
                         "Follow %{screen_name}": "?????????? ?????? %{screen_name}",
                         K: "??????",
                         M: "????????????",
                         Tweet: "????????",
                         "Tweet %{hashtag}": "?????????? %{hashtag}",
                         "Tweet to %{name}": "???????? ???? %{name}",
                     },
                     hi: {
                         "%{followers_count} followers": "%{followers_count} ???????????????????????????",
                         "100K+": "1 ?????????+",
                         "10k unit": "10 ???????????? ?????????????????????",
                         Follow: "???????????????",
                         "Follow %{screen_name}": "%{screen_name} ?????? ??????????????? ????????????",
                         K: "????????????",
                         M: "??????????????????",
                         Tweet: "???????????????",
                         "Tweet %{hashtag}": "??????????????? %{hashtag}",
                         "Tweet to %{name}": "%{name} ?????? ??????????????? ????????????",
                     },
                     hu: {
                         "%{followers_count} followers": "%{followers_count} k??vet??",
                         "100K+": "100E+",
                         "10k unit": "10E+",
                         Follow: "K??vet??s",
                         "Follow %{screen_name}": "%{screen_name} k??vet??se",
                         K: "E",
                         "Tweet %{hashtag}": "%{hashtag} tweetel??se",
                         "Tweet to %{name}": "Tweet k??ld??se neki: %{name}",
                     },
                     id: {
                         "%{followers_count} followers": "%{followers_count} pengikut",
                         "100K+": "100 ribu+",
                         "10k unit": "10 ribu unit",
                         Follow: "Ikuti",
                         "Follow %{screen_name}": "Ikuti %{screen_name}",
                         K: "&nbsp;ribu",
                         M: "&nbsp;juta",
                         "Tweet to %{name}": "Tweet ke %{name}",
                     },
                     it: {
                         "%{followers_count} followers": "%{followers_count} follower",
                         "10k unit": "10k unit??",
                         Follow: "Segui",
                         "Follow %{screen_name}": "Segui %{screen_name}",
                         "Tweet %{hashtag}": "Twitta %{hashtag}",
                         "Tweet to %{name}": "Twitta a %{name}",
                     },
                     ja: {
                         "%{followers_count} followers": "%{followers_count}?????????????????????",
                         "100K+": "100K??????",
                         "10k unit": "???",
                         Follow: "??????????????????",
                         "Follow %{screen_name}": "%{screen_name}?????????????????????",
                         Tweet: "????????????",
                         "Tweet %{hashtag}": "%{hashtag} ?????????????????????",
                         "Tweet to %{name}": "%{name}???????????????????????????",
                     },
                     ko: {
                         "%{followers_count} followers": "%{followers_count}?????? ?????????",
                         "100K+": "100??? ??????",
                         "10k unit": "??? ??????",
                         Follow: "?????????",
                         "Follow %{screen_name}": "%{screen_name} ??? ???????????????",
                         K: "???",
                         M: "??????",
                         Tweet: "??????",
                         "Tweet %{hashtag}": "%{hashtag} ?????? ????????????",
                         "Tweet to %{name}": "%{name}????????? ????????????",
                     },
                     msa: {
                         "%{followers_count} followers": "%{followers_count} pengikut",
                         "100K+": "100 ribu+",
                         "10k unit": "10 ribu unit",
                         Follow: "Ikut",
                         "Follow %{screen_name}": "Ikut %{screen_name}",
                         K: "ribu",
                         M: "juta",
                         "Tweet to %{name}": "Tweet kepada %{name}",
                     },
                     nl: {
                         "%{followers_count} followers": "%{followers_count} volgers",
                         "100K+": "100k+",
                         "10k unit": "10k-eenheid",
                         Follow: "Volgen",
                         "Follow %{screen_name}": "%{screen_name} volgen",
                         K: "k",
                         M: " mln.",
                         Tweet: "Tweeten",
                         "Tweet %{hashtag}": "%{hashtag} tweeten",
                         "Tweet to %{name}": "Tweeten naar %{name}",
                     },
                     no: {
                         "%{followers_count} followers": "%{followers_count} f??lgere",
                         "100K+": "100 K+",
                         "10k unit": "10-K-enhet",
                         Follow: "F??lg",
                         "Follow %{screen_name}": "F??lg %{screen_name}",
                         "Tweet to %{name}": "Send en tweet til %{name}",
                     },
                     pl: {
                         "%{followers_count} followers": "%{followers_count} obserwuj??cych",
                         "100K+": "100 tys.+",
                         "10k unit": "10 tys.",
                         Follow: "Obserwuj",
                         "Follow %{screen_name}": "Obserwuj %{screen_name}",
                         K: "tys.",
                         M: "mln",
                         Tweet: "Tweetnij",
                         "Tweet %{hashtag}": "Tweetnij %{hashtag}",
                         "Tweet to %{name}": "Tweetnij do %{name}",
                     },
                     pt: {
                         "%{followers_count} followers": "%{followers_count} seguidores",
                         "100K+": "+100 mil",
                         "10k unit": "10 mil unidades",
                         Follow: "Seguir",
                         "Follow %{screen_name}": "Seguir %{screen_name}",
                         K: "Mil",
                         Tweet: "Tweetar",
                         "Tweet %{hashtag}": "Tweetar %{hashtag}",
                         "Tweet to %{name}": "Tweetar para %{name}",
                     },
                     ru: {
                         "%{followers_count} followers": "????????????????: %{followers_count} ",
                         "100K+": "100 ??????.+",
                         "10k unit": "???????? 10k",
                         Follow: "????????????",
                         "Follow %{screen_name}": "???????????? %{screen_name}",
                         K: "??????.",
                         M: "??????.",
                         Tweet: "????????????????",
                         "Tweet %{hashtag}": "???????????????? %{hashtag}",
                         "Tweet to %{name}": "???????????????? %{name}",
                     },
                     sv: {
                         "%{followers_count} followers": "%{followers_count} f??ljare",
                         "10k unit": "10k",
                         Follow: "F??lj",
                         "Follow %{screen_name}": "F??lj %{screen_name}",
                         Tweet: "Tweeta",
                         "Tweet %{hashtag}": "Tweeta %{hashtag}",
                         "Tweet to %{name}": "Tweeta till %{name}",
                     },
                     th: {
                         "%{followers_count} followers": "%{followers_count} ???????????????????????????",
                         "100K+": "100?????????+",
                         "10k unit": "??????????????? 10?????????",
                         Follow: "??????????????????",
                         "Follow %{screen_name}": "?????????????????? %{screen_name}",
                         M: "????????????",
                         Tweet: "????????????",
                         "Tweet %{hashtag}": "???????????? %{hashtag}",
                         "Tweet to %{name}": "????????????????????? %{name}",
                     },
                     tr: {
                         "%{followers_count} followers": "%{followers_count} takip??i",
                         "100K+": "+100 bin",
                         "10k unit": "10 bin birim",
                         Follow: "Takip et",
                         "Follow %{screen_name}": "Takip et: %{screen_name}",
                         K: "bin",
                         M: "milyon",
                         Tweet: "Tweetle",
                         "Tweet %{hashtag}": "Tweetle: %{hashtag}",
                         "Tweet to %{name}": "Tweetle: %{name}",
                     },
                     ur: {
                         "%{followers_count} followers": "%{followers_count} ????????????",
                         "100K+": "?????? ???????? ???? ??????????",
                         "10k unit": "???? ???????? ????????",
                         Follow: "???????? ????????",
                         "Follow %{screen_name}": "%{screen_name} ???? ???????? ????????",
                         K: "????????",
                         M: "????????",
                         Tweet: "???????? ????????",
                         "Tweet %{hashtag}": "%{hashtag} ???????? ????????",
                         "Tweet to %{name}": "%{name} ???? ???????? ????????",
                     },
                     "zh-cn": {
                         "%{followers_count} followers": "%{followers_count} ?????????",
                         "100K+": "10???+",
                         "10k unit": "1?????????",
                         Follow: "??????",
                         "Follow %{screen_name}": "?????? %{screen_name}",
                         K: "???",
                         M: "??????",
                         Tweet: "??????",
                         "Tweet %{hashtag}": "??? %{hashtag} ??????",
                         "Tweet to %{name}": "????????? %{name}",
                     },
                     "zh-tw": {
                         "%{followers_count} followers": "%{followers_count} ????????????",
                         "100K+": "????????????",
                         "10k unit": "1??? ??????",
                         Follow: "??????",
                         "Follow %{screen_name}": "?????? %{screen_name}",
                         K: "???",
                         M: "??????",
                         Tweet: "??????",
                         "Tweet %{hashtag}": "??????%{hashtag}",
                         "Tweet to %{name}": "?????????%{name}",
                     },
                 };
             a.aug(g.prototype, {
                 setLanguage: function (e) {
                     var t;
                     e || (e = this.params().lang || this.dataAttr("lang") || b(this.srcEl)), (e = e && e.toLowerCase());
                     if (!e) {
                         return (this.lang = "en");
                     }
                     if (m[e]) {
                         return (this.lang = e);
                     }
                     t = e.replace(/[\-_].*/, "");
                     if (m[t]) {
                         return (this.lang = t);
                     }
                     this.lang = "en";
                 },
                 _: function (e, t) {
                     var n = this.lang;
                     t = t || {};
                     if (!n || !m.hasOwnProperty(n)) {
                         n = this.lang = "en";
                     }
                     return (e = (m[n] && m[n][e]) || e), this.ringo(e, t, /%\{([\w_]+)\}/g);
                 },
                 ringo: function (e, t, n) {
                     return (
                         (n = n || /\{\{([\w_]+)\}\}/g),
                         e.replace(n, function (e, n) {
                             return t[n] !== undefined ? t[n] : e;
                         })
                     );
                 },
                 add: function (e) {
                     h.list.push(this), (h.byId[this.id] = e);
                 },
                 create: function (e, t, n) {
                     var i = this,
                         o;
                     return (
                         (n[v] = !0),
                         (o = r(a.aug({ id: this.id, src: e, class: this.classAttr.join(" ") }, n), t, this.targetEl && this.targetEl.ownerDocument)),
                         this.srcEl
                             ? this.layout(function () {
                                   return i.srcEl.parentNode.replaceChild(o, i.srcEl), i.completeResolver.fulfill(o), o;
                               })
                             : this.targetEl
                             ? this.layout(function () {
                                   return i.targetEl.appendChild(o), i.completeResolver.fulfill(o), o;
                               })
                             : s.reject("Did not append widget")
                     );
                 },
                 params: function () {
                     var e, t;
                     return (
                         this.srcOb ? (t = this.srcOb) : ((e = this.srcEl && this.srcEl.href && this.srcEl.href.split("?")[1]), (t = e ? o.decode(e) : {})),
                         (this.params = function () {
                             return t;
                         }),
                         t
                     );
                 },
                 dataAttr: function (e) {
                     return this.srcEl && this.srcEl.getAttribute("data-" + e);
                 },
                 attr: function (e) {
                     return this.srcEl && this.srcEl.getAttribute(e);
                 },
                 layout: function (e) {
                     return d.enqueue(e);
                 },
                 styles: {
                     base: [
                         ["font", "normal normal normal 11px/18px 'Helvetica Neue', Arial, sans-serif"],
                         ["margin", "0"],
                         ["padding", "0"],
                         ["whiteSpace", "nowrap"],
                     ],
                     button: [
                         ["fontWeight", "bold"],
                         ["textShadow", "0 1px 0 rgba(255,255,255,.5)"],
                     ],
                     large: [
                         ["fontSize", "13px"],
                         ["lineHeight", "26px"],
                     ],
                     vbubble: [["fontSize", "16px"]],
                 },
                 width: function () {
                     throw new Error(name + " not implemented");
                 },
                 height: function () {
                     return this.size == "m" ? 20 : 28;
                 },
                 minWidth: function () {},
                 maxWidth: function () {},
                 minHeight: function () {},
                 maxHeight: function () {},
                 dimensions: function () {
                     function e(e) {
                         switch (typeof e) {
                             case "string":
                                 return e;
                             case "undefined":
                                 return;
                             default:
                                 return e + "px";
                         }
                     }
                     var t = { width: this.width(), height: this.height() };
                     return (
                         this.minWidth() && (t["min-width"] = this.minWidth()),
                         this.maxWidth() && (t["max-width"] = this.maxWidth()),
                         this.minHeight() && (t["min-height"] = this.minHeight()),
                         this.maxHeight() && (t["max-height"] = this.maxHeight()),
                         a.forIn(t, function (n, r) {
                             t[n] = e(r);
                         }),
                         t
                     );
                 },
                 generateId: function () {
                     return (this.srcEl && this.srcEl.id) || "twitter-widget-" + l++;
                 },
                 completed: function () {
                     return this.completePromise;
                 },
             }),
                 (g.afterLoad = function (e) {
                     p.push(e);
                 }),
                 (g.doLayout = function () {
                     d.exec();
                 }),
                 (g.doLayoutAsync = function () {
                     d.delayedExec();
                 }),
                 (g.init = function (e) {
                     c = e;
                 }),
                 (g.find = function (e) {
                     return e && h.byId[e] ? h.byId[e].element : null;
                 }),
                 (g.embed = function (e) {
                     var n = c.widgets,
                         r = [],
                         i = [];
                     u.isArray(e) || (e = [e || document]),
                         a.forEach(e, function (e) {
                             a.forIn(n, function (n, i) {
                                 var s, o;
                                 n.match(/\./) ? ((s = n.split(".")), (o = t.all(s[1], e, s[0]))) : (o = e.getElementsByTagName(n)),
                                     a.forEach(o, function (e) {
                                         if (e.getAttribute(v)) {
                                             return;
                                         }
                                         e.setAttribute(v, "true"), r.push(new i(e));
                                     });
                             });
                         }),
                         g.doLayout(),
                         a.forEach(r, function (e) {
                             (h.byId[e.id] = e), h.list.push(e), i.push(e.completed()), e.render(c);
                         }),
                         s.every.apply(null, i).then(function (e) {
                             e = a.filter(e, function (t) {
                                 return t;
                             });
                             if (!e.length) {
                                 return;
                             }
                             twttr.events.trigger("loaded", { widgets: e });
                         }),
                         g.doLayoutAsync(),
                         y();
                 }),
                 window.setInterval(function () {
                     g.doLayout();
                 }, 500),
                 e(g);
         });
     });
     provide("tfw/widget/intent", function (e) {
         using("tfw/widget/base", "util/util", "util/querystring", "util/uri", "util/promise", function (t, n, r, i, s) {
             function p(e) {
                 var t = Math.round(c / 2 - a / 2),
                     n = 0;
                 l > f && (n = Math.round(l / 2 - f / 2)), window.open(e, undefined, [u, "width=" + a, "height=" + f, "left=" + t, "top=" + n].join(","));
             }
             function d(e, t) {
                 using("tfw/hub/client", function (n) {
                     n.openIntent(e, t);
                 });
             }
             function v(e) {
                 var t = "original_referer=" + location.href;
                 return [e, t].join(e.indexOf("?") == -1 ? "?" : "&");
             }
             function m(e) {
                 var t, r, i, s;
                 (e = e || window.event), (t = e.target || e.srcElement);
                 if (e.altKey || e.metaKey || e.shiftKey) {
                     return;
                 }
                 while (t) {
                     if (~n.indexOf(["A", "AREA"], t.nodeName)) {
                         break;
                     }
                     t = t.parentNode;
                 }
                 t && t.href && ((r = t.href.match(o)), r && ((s = v(t.href)), (s = s.replace(/^http[:]/, "https:")), (s = s.replace(/^\/\//, "https://")), g(s, t), (e.returnValue = !1), e.preventDefault && e.preventDefault()));
             }
             function g(e, t) {
                 if (twttr.events.hub && t) {
                     var n = new y(h.generateId(), t);
                     h.add(n), d(e, t), twttr.events.trigger("click", { target: t, region: "intent", type: "click", data: {} });
                 } else {
                     p(e);
                 }
             }
             function y(e, t) {
                 (this.id = e), (this.element = this.srcEl = t);
             }
             function b(e) {
                 (this.srcEl = []), (this.element = e);
             }
             var o = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
                 u = "scrollbars=yes,resizable=yes,toolbar=no,location=yes",
                 a = 550,
                 f = 520,
                 l = screen.height,
                 c = screen.width,
                 h;
             (b.prototype = new t()),
                 n.aug(b.prototype, {
                     render: function (e) {
                         return (
                             (h = this),
                             window.__twitterIntentHandler || (document.addEventListener ? document.addEventListener("click", m, !1) : document.attachEvent && document.attachEvent("onclick", m), (window.__twitterIntentHandler = !0)),
                             s.fulfill(document.body)
                         );
                     },
                 }),
                 (b.open = g),
                 e(b);
         });
     });
     provide("dom/classname", function (e) {
         function t(e) {
             return new RegExp("\\b" + e + "\\b", "g");
         }
         function n(e, n) {
             if (e.classList) {
                 e.classList.add(n);
                 return;
             }
             t(n).test(e.className) || (e.className += " " + n);
         }
         function r(e, n) {
             if (e.classList) {
                 e.classList.remove(n);
                 return;
             }
             e.className = e.className.replace(t(n), " ");
         }
         function i(e, t, i) {
             return e.classList && e.classList.toggle ? e.classList.toggle(t, i) : (i ? n(e, t) : r(e, t), i);
         }
         function s(e, i, s) {
             if (e.classList && o(e, i)) {
                 r(e, i), n(e, s);
                 return;
             }
             e.className = e.className.replace(t(i), s);
         }
         function o(e, n) {
             return e.classList ? e.classList.contains(n) : t(n).test(e.className);
         }
         e({ add: n, remove: r, replace: s, toggle: i, present: o });
     });
     provide("util/throttle", function (e) {
         function t(e, t, n) {
             function o() {
                 var n = +new Date();
                 window.clearTimeout(s);
                 if (n - i > t) {
                     (i = n), e.call(r);
                     return;
                 }
                 s = window.setTimeout(o, t);
             }
             var r = n || this,
                 i = 0,
                 s;
             return o;
         }
         e(t);
     });
     provide("util/css", function (e) {
         using("util/util", function (t) {
             e({
                 sanitize: function (e, n, r) {
                     var i = /^[\w ,%\/"'\-_#]+$/,
                         s =
                             e &&
                             t.map(e.split(";"), function (e) {
                                 return t.map(e.split(":").slice(0, 2), function (e) {
                                     return t.trim(e);
                                 });
                             }),
                         o = 0,
                         u,
                         a = [],
                         f = r ? "!important" : "";
                     n = n || /^(font|text\-|letter\-|color|line\-)[\w\-]*$/;
                     for (; s && (u = s[o]); o++) {
                         u[0].match(n) && u[1].match(i) && a.push(u.join(":") + f);
                     }
                     return a.join(";");
                 },
             });
         });
     });
     provide("tfw/util/params", function (e) {
         using("util/querystring", "util/twitter", function (t, n) {
             e(function (e, r) {
                 return function (i) {
                     var s,
                         o = "data-tw-params",
                         u,
                         a = i.innerHTML;
                     if (!i) {
                         return;
                     }
                     if (!n.isTwitterURL(i.href)) {
                         return;
                     }
                     if (i.getAttribute(o)) {
                         return;
                     }
                     i.setAttribute(o, !0);
                     if (typeof r == "function") {
                         s = r.call(this, i);
                         for (u in s) {
                             s.hasOwnProperty(u) && (e[u] = s[u]);
                         }
                     }
                     i.href = t.url(i.href, e);
                 };
             });
         });
     });
     provide("util/params", function (e) {
         using("util/querystring", function (t) {
             var n = function (e) {
                     var n = e.search.substr(1);
                     return t.decode(n);
                 },
                 r = function (e) {
                     var n = e.href,
                         r = n.indexOf("#"),
                         i = r < 0 ? "" : n.substring(r + 1);
                     return t.decode(i);
                 },
                 i = function (e) {
                     var t = {},
                         i = n(e),
                         s = r(e);
                     for (var o in i) {
                         i.hasOwnProperty(o) && (t[o] = i[o]);
                     }
                     for (var o in s) {
                         s.hasOwnProperty(o) && (t[o] = s[o]);
                     }
                     return t;
                 };
             e({ combined: i, fromQuery: n, fromFragment: r });
         });
     });
     provide("tfw/util/env", function (e) {
         using("util/params", function (t) {
             function r() {
                 var e = 3600000,
                     r = t.combined(document.location)._;
                 return n !== undefined ? n : ((n = !1), r && /^\d+$/.test(r) && (n = +new Date() - parseInt(r) < e), n);
             }
             var n;
             e({ isDynamicWidget: r });
         });
     });
     provide("dom/cookie", function (e) {
         using("util/util", function (t) {
             e(function (e, n, r) {
                 var i = t.aug({}, r);
                 if (arguments.length > 1 && String(n) !== "[object Object]") {
                     if (n === null || n === undefined) {
                         i.expires = -1;
                     }
                     if (typeof i.expires == "number") {
                         var s = i.expires,
                             o = new Date(new Date().getTime() + s * 60 * 1000);
                         i.expires = o;
                     }
                     return (
                         (n = String(n)),
                         (document.cookie = [
                             encodeURIComponent(e),
                             "=",
                             i.raw ? n : encodeURIComponent(n),
                             i.expires ? "; expires=" + i.expires.toUTCString() : "",
                             i.path ? "; path=" + i.path : "",
                             i.domain ? "; domain=" + i.domain : "",
                             i.secure ? "; secure" : "",
                         ].join(""))
                     );
                 }
                 i = n || {};
                 var u,
                     a = i.raw
                         ? function (e) {
                               return e;
                           }
                         : decodeURIComponent;
                 return (u = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? a(u[1]) : null;
             });
         });
     });
     provide("util/donottrack", function (e) {
         using("dom/cookie", function (t) {
             e(function (e, n) {
                 var r = /\.(gov|mil)(:\d+)?$/i,
                     i = /https?:\/\/([^\/]+).*/i;
                 return (
                     (e = e || document.referrer),
                     (e = i.test(e) && i.exec(e)[1]),
                     (n = n || document.location.host),
                     t("dnt") ? !0 : r.test(n) ? !0 : e && r.test(e) ? !0 : document.navigator ? document.navigator.doNotTrack == 1 : navigator ? navigator.doNotTrack == 1 || navigator.msDoNotTrack == 1 : !1
                 );
             });
         });
     });
     provide("tfw/util/guest_cookie", function (e) {
         using("dom/cookie", "util/donottrack", function (t, n) {
             function i() {}
             function s() {
                 t(r) && t(r, null, { domain: ".twitter.com", path: "/" });
             }
             function o() {
                 n() && s();
             }
             var r = "pid";
             e({ set: o, destroy: s, forceNewCookie: i, guest_id_cookie: r });
         });
     });
     provide("sandbox/baseframe", function (e) {
         using("util/domready", "util/env", "util/iframe", "util/promise", "util/util", function (t, n, r, i, s) {
             function u(e, t, n, o) {
                 var u;
                 (this.readyPromise = new i(
                     s.bind(function (e) {
                         this.resolver = e;
                     }, this)
                 )),
                     (this.attrs = e || {}),
                     (this.styles = t || {}),
                     (this.appender =
                         n ||
                         function (e) {
                             document.body.appendChild(e);
                         }),
                     (this.layout =
                         o ||
                         function (e) {
                             return new i(function (t) {
                                 return t.fulfill(e());
                             });
                         }),
                     (this.frame = u = r(this.attrs, this.styles)),
                     (u.onreadystatechange = u.onload = this.getCallback(this.onLoad)),
                     this.layout(
                         s.bind(function () {
                             this.appender(u);
                         }, this)
                     );
             }
             var o = 0;
             (window.twttr = window.twttr || {}),
                 (window.twttr.sandbox = window.twttr.sandbox || {}),
                 (u.prototype.getCallback = function (e) {
                     var t = this,
                         n = !1;
                     return function () {
                         n || ((n = !0), e.call(t));
                     };
                 }),
                 (u.prototype.registerCallback = function (e) {
                     var t = "cb" + o++;
                     return (window.twttr.sandbox[t] = e), t;
                 }),
                 (u.prototype.onLoad = function () {
                     try {
                         this.document = this.frame.contentWindow.document;
                     } catch (e) {
                         this.setDocDomain();
                         return;
                     }
                     this.writeStandardsDoc(), this.resolver.fulfill(this);
                 }),
                 (u.prototype.ready = function () {
                     return this.readyPromise;
                 }),
                 (u.prototype.setDocDomain = function () {
                     var e = r(this.attrs, this.styles),
                         t = this.registerCallback(this.getCallback(this.onLoad));
                     (e.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", "catch (e) {", 'document.domain="' + document.domain + '";', "}", 'window.parent.twttr.sandbox["' + t + '"]();'].join("")),
                         this.layout(
                             s.bind(function () {
                                 this.frame.parentNode.removeChild(this.frame), (this.frame = null), this.appender ? this.appender(e) : document.body.appendChild(e), (this.frame = e);
                             }, this)
                         );
                 }),
                 (u.prototype.writeStandardsDoc = function () {
                     if (!n.anyIE() || n.cspEnabled()) {
                         return;
                     }
                     var e = ["<!DOCTYPE html>", "<html>", "<head>", "<scr", "ipt>", "try { window.parent.document; }", 'catch (e) {document.domain="' + document.domain + '";}', "</scr", "ipt>", "</head>", "<body></body>", "</html>"].join(
                         ""
                     );
                     this.document.write(e), this.document.close();
                 }),
                 e(u);
         });
     });
     provide("sandbox/minimal", function (e) {
         using("sandbox/baseframe", "util/env", "util/promise", "util/util", function (t, n, r, i) {
             function s(e, t) {
                 if (!e) {
                     return;
                 }
                 (this._frame = e), (this._win = e.contentWindow), (this._doc = this._win.document), (this._body = this._doc.body), (this._head = this._body.parentNode.children[0]), (this.layout = t);
             }
             i.aug(s.prototype, {
                 createElement: function (e) {
                     return this._doc.createElement(e);
                 },
                 createDocumentFragment: function () {
                     return this._doc.createDocumentFragment();
                 },
                 appendChild: function (e) {
                     return this.layout(
                         i.bind(function () {
                             return this._body.appendChild(e);
                         }, this)
                     );
                 },
                 setBaseTarget: function (e) {
                     var t = this._doc.createElement("base");
                     return (
                         (t.target = e),
                         this.layout(
                             i.bind(function () {
                                 return this._head.appendChild(t);
                             }, this)
                         )
                     );
                 },
                 setTitle: function (e) {
                     if (!e) {
                         return;
                     }
                     this._frame.title = e;
                 },
                 element: function () {
                     return this._frame;
                 },
                 document: function () {
                     return this._doc;
                 },
             }),
                 (s.createSandbox = function (e, n, r, i) {
                     var o = new t(e, n, r, i);
                     return o.ready().then(function (e) {
                         return new s(e.frame, e.layout);
                     });
                 }),
                 e(s);
         });
     });
     provide("tfw/util/tracking", function (e) {
         using("dom/cookie", "dom/delegate", "sandbox/minimal", "util/donottrack", "util/promise", "tfw/util/guest_cookie", "tfw/util/env", "util/iframe", "util/util", "$xd/json2.js", function (t, n, r, i, s, o, u, a, f) {
             function E() {
                 return y
                     ? y
                     : (y = r.createSandbox({ id: "rufous-sandbox" }, { display: "none" }).then(
                           f.bind(function (e) {
                               (g = e), (p = D()), (d = P());
                               while (v[0]) {
                                   k.apply(this, v.shift());
                               }
                               return m ? L() : [p, d];
                           }, this)
                       ));
             }
             function S(e, t, n, r) {
                 var i = !f.isObject(e),
                     s = t ? !f.isObject(t) : !1,
                     o,
                     u;
                 if (i || s) {
                     return;
                 }
                 (o = O(e)), (u = M(t, !!n, !!r)), C(o, u, !0);
             }
             function x(e, t, n, r, i) {
                 var s = T(e.target || e.srcElement);
                 (s.action = i || "click"), S(s, t, n, r);
             }
             function T(e, t) {
                 var n;
                 return (
                     (t = t || {}),
                     !e || e.nodeType !== 1
                         ? t
                         : ((n = e.getAttribute("data-scribe")) &&
                               f.forEach(n.split(" "), function (e) {
                                   var n = f.trim(e).split(":"),
                                       r = n[0],
                                       i = n[1];
                                   r && i && !t[r] && (t[r] = i);
                               }),
                           T(e.parentNode, t))
                 );
             }
             function N(e, t, n) {
                 var r = l + t;
                 if (!e) {
                     return;
                 }
                 return (e[r] = n), e;
             }
             function C(e, t, n) {
                 var r,
                     i,
                     s,
                     o,
                     u = b + "?";
                 if (!f.isObject(e) || !f.isObject(t)) {
                     return;
                 }
                 (s = f.aug({}, t, { event_namespace: e })),
                     n ? ((u += _({ l: j(s) })), H(u)) : ((r = p.firstChild), (r.value = +r.value || +s.dnt), (o = j(s)), (i = g.createElement("input")), (i.type = "hidden"), (i.name = "l"), (i.value = o), p.appendChild(i));
             }
             function k(e, t, n, r) {
                 var i = !f.isObject(e),
                     s = t ? !f.isObject(t) : !1,
                     o,
                     u;
                 if (i || s) {
                     return;
                 }
                 if (!g || !p) {
                     v.push([e, t, n, r]);
                     return;
                 }
                 (o = O(e)), (u = M(t, !!n, !!r)), C(o, u);
             }
             function L() {
                 if (!p) {
                     return (m = !0), y || s.reject();
                 }
                 if (p.children.length <= 2) {
                     return s.reject();
                 }
                 var e = s.every(g.appendChild(p), g.appendChild(d)).then(function (e) {
                     var t = e[0],
                         r = e[1];
                     return (
                         n.on(r, "load", function () {
                             window.setTimeout(A(t, r), 0);
                         }),
                         t.submit(),
                         e
                     );
                 });
                 return (p = D()), (d = P()), e;
             }
             function A(e, t) {
                 return function () {
                     var n = e.parentNode;
                     if (!n) {
                         return;
                     }
                     n.removeChild(e), n.removeChild(t);
                 };
             }
             function O(e) {
                 return f.aug({ client: "tfw" }, e || {});
             }
             function M(e, t, n) {
                 var r = { _category_: "tfw_client_event" },
                     s,
                     o;
                 return (
                     (t = !!t),
                     (n = !!n),
                     (s = f.aug(r, e || {})),
                     (o = s.widget_origin || document.referrer),
                     (s.format_version = 1),
                     (s.dnt = n = n || i(o)),
                     (s.triggered_on = s.triggered_on || +new Date()),
                     t || (s.widget_origin = o),
                     n && B(s),
                     s
                 );
             }
             function _(e) {
                 var t = [],
                     n,
                     r,
                     i;
                 for (n in e) {
                     e.hasOwnProperty(n) && ((r = encodeURIComponent(n)), (i = encodeURIComponent(e[n])), (i = i.replace(/'/g, "%27")), t.push(r + "=" + i));
                 }
                 return t.join("&");
             }
             function D() {
                 var e = g.createElement("form"),
                     t = g.createElement("input"),
                     n = g.createElement("input");
                 return (
                     h++,
                     (e.action = b),
                     (e.method = "POST"),
                     (e.target = "rufous-frame-" + h),
                     (e.id = "rufous-form-" + h),
                     (t.type = "hidden"),
                     (t.name = "dnt"),
                     (t.value = 0),
                     (n.type = "hidden"),
                     (n.name = "tfw_redirect"),
                     (n.value = w),
                     e.appendChild(t),
                     e.appendChild(n),
                     e
                 );
             }
             function P() {
                 var e = "rufous-frame-" + h;
                 return a({ id: e, name: e, width: 0, height: 0, border: 0 }, { display: "none" }, g.document());
             }
             function H(e) {
                 var t = new Image();
                 t.src = e;
             }
             function B(e) {
                 f.forIn(e, function (t) {
                     ~f.indexOf(c, t) && delete e[t];
                 });
             }
             function j(e) {
                 var t = Array.prototype.toJSON,
                     n;
                 return delete Array.prototype.toJSON, (n = JSON.stringify(e)), t && (Array.prototype.toJSON = t), n;
             }
             var l = "twttr_",
                 c = ["hask", "li", "logged_in", "pid", "user_id", o.guest_id_cookie, l + "hask", l + "li", l + o.guest_id_cookie],
                 h = 0,
                 p,
                 d,
                 v = [],
                 m,
                 g,
                 y,
                 b = "//twitter.com/i/jot",
                 w = "//platform.twitter.com/jot.html";
             o.forceNewCookie(), e({ enqueue: k, flush: L, initPostLogging: E, scribeInteraction: x, extractTermsFromDOM: T, addPixel: S, addVar: N });
         });
     });
     provide("tfw/util/data", function (e) {
         using("util/logger", "util/util", "util/querystring", function (t, n, r) {
             function c(e) {
                 return function (n) {
                     n.error ? e.error && e.error(n) : n.headers && n.headers.status != 200 ? (e.error && e.error(n), t.warn(n.headers.message)) : e.success && e.success(n), e.complete && e.complete(n), h(e);
                 };
             }
             function h(e) {
                 var t = e.script;
                 t && ((t.onload = t.onreadystatechange = null), t.parentNode && t.parentNode.removeChild(t), (e.script = undefined), (t = undefined)),
                     e.callbackName && twttr.tfw.callbacks[e.callbackName] && delete twttr.tfw.callbacks[e.callbackName];
             }
             function p(e) {
                 var t = {};
                 return e.success && n.isType("function", e.success) && (t.success = e.success), e.error && n.isType("function", e.error) && (t.error = e.error), e.complete && n.isType("function", e.complete) && (t.complete = e.complete), t;
             }
             (window.twttr = window.twttr || {}), (twttr.tfw = twttr.tfw || {}), (twttr.tfw.callbacks = twttr.tfw.callbacks || {});
             var i = "twttr.tfw.callbacks",
                 s = twttr.tfw.callbacks,
                 o = "cb",
                 u = 0,
                 a = !1,
                 f = {},
                 l = {
                     tweets: "//syndication.twitter.com/tweets.json",
                     timeline: "//cdn.syndication.twimg.com/widgets/timelines/",
                     timelinePoll: "//syndication.twitter.com/widgets/timelines/paged/",
                     timelinePreview: "//syndication.twitter.com/widgets/timelines/preview/",
                 };
             twttr.widgets && twttr.widgets.endpoints && n.aug(l, twttr.widgets.endpoints),
                 (f.jsonp = function (e, t, n) {
                     var f = n || o + u,
                         l = i + "." + f,
                         h = document.createElement("script"),
                         p = { callback: l, suppress_response_codes: !0 };
                     s[f] = c(t);
                     if (a || !/^https?\:$/.test(window.location.protocol)) {
                         e = e.replace(/^\/\//, "https://");
                     }
                     (h.src = r.url(e, p)), (h.async = "async"), document.body.appendChild(h), (t.script = h), (t.callbackName = f), n || u++;
                 }),
                 (f.config = function (e) {
                     if (e.forceSSL === !0 || e.forceSSL === !1) {
                         a = e.forceSSL;
                     }
                 }),
                 (f.tweets = function (e) {
                     var t = arguments[0],
                         n = p(t),
                         i = { ids: e.ids.join(","), lang: e.lang },
                         s = r.url(l.tweets, i);
                     this.jsonp(s, n);
                 }),
                 (f.timeline = function (e) {
                     var t = arguments[0],
                         i = p(t),
                         s,
                         o = 900000,
                         u = Math.floor(+new Date() / o),
                         a = {
                             lang: e.lang,
                             t: u,
                             domain: window.location.host,
                             dnt: e.dnt,
                             override_type: e.overrideType,
                             override_id: e.overrideId,
                             override_name: e.overrideName,
                             override_owner_id: e.overrideOwnerId,
                             override_owner_name: e.overrideOwnerName,
                             with_replies: e.withReplies,
                         };
                     n.compact(a), (s = r.url(l.timeline + e.id, a)), this.jsonp(s, i, "tl_" + e.id + "_" + e.instanceId);
                 }),
                 (f.timelinePoll = function (e) {
                     var t = arguments[0],
                         i = p(t),
                         s = {
                             lang: e.lang,
                             since_id: e.sinceId,
                             max_id: e.maxId,
                             min_position: e.minPosition,
                             max_position: e.maxPosition,
                             domain: window.location.host,
                             dnt: e.dnt,
                             override_type: e.overrideType,
                             override_id: e.overrideId,
                             override_name: e.overrideName,
                             override_owner_id: e.overrideOwnerId,
                             override_owner_name: e.overrideOwnerName,
                             with_replies: e.withReplies,
                         },
                         o;
                     n.compact(s), (o = r.url(l.timelinePoll + e.id, s)), this.jsonp(o, i, "tlPoll_" + e.id + "_" + e.instanceId + "_" + (e.sinceId || e.maxId || e.maxPosition || e.minPosition));
                 }),
                 (f.timelinePreview = function (e) {
                     var t = arguments[0],
                         n = p(t),
                         i = e.params,
                         s = r.url(l.timelinePreview, i);
                     this.jsonp(s, n);
                 }),
                 e(f);
         });
     });
     provide("anim/transition", function (e) {
         function t(e, t) {
             var n;
             return (
                 (t = t || window),
                 (n =
                     t.requestAnimationFrame ||
                     t.webkitRequestAnimationFrame ||
                     t.mozRequestAnimationFrame ||
                     t.msRequestAnimationFrame ||
                     t.oRequestAnimationFrame ||
                     function (n) {
                         t.setTimeout(function () {
                             e(+new Date());
                         }, 1000 / 60);
                     }),
                 n(e)
             );
         }
         function n(e, t) {
             return Math.sin((Math.PI / 2) * t) * e;
         }
         function r(e, n, r, i, s) {
             function a() {
                 var u = +new Date(),
                     f = u - o,
                     l = Math.min(f / r, 1),
                     c = i ? i(n, l) : n * l;
                 e(c);
                 if (l == 1) {
                     return;
                 }
                 t(a, s);
             }
             var o = +new Date(),
                 u;
             t(a);
         }
         e({ animate: r, requestAnimationFrame: t, easeOut: n });
     });
     provide("util/datetime", function (e) {
         using("util/util", function (t) {
             function h(e) {
                 return e < 10 ? "0" + e : e;
             }
             function p(e) {
                 function i(e, n) {
                     return (
                         t && t[e] && (e = t[e]),
                         e.replace(/%\{([\w_]+)\}/g, function (e, t) {
                             return n[t] !== undefined ? n[t] : e;
                         })
                     );
                 }
                 var t = e && e.phrases,
                     n = (e && e.months) || s,
                     r = (e && e.formats) || o;
                 (this.timeAgo = function (e) {
                     var t = p.parseDate(e),
                         s = +new Date(),
                         o = s - t,
                         h;
                     return t
                         ? isNaN(o) || o < u * 2
                             ? i("now")
                             : o < a
                             ? ((h = Math.floor(o / u)), i(r.abbr, { number: h, symbol: i(c, { abbr: i("s"), expanded: h > 1 ? i("seconds") : i("second") }) }))
                             : o < f
                             ? ((h = Math.floor(o / a)), i(r.abbr, { number: h, symbol: i(c, { abbr: i("m"), expanded: h > 1 ? i("minutes") : i("minute") }) }))
                             : o < l
                             ? ((h = Math.floor(o / f)), i(r.abbr, { number: h, symbol: i(c, { abbr: i("h"), expanded: h > 1 ? i("hours") : i("hour") }) }))
                             : o < l * 365
                             ? i(r.shortdate, { day: t.getDate(), month: i(n[t.getMonth()]) })
                             : i(r.longdate, { day: t.getDate(), month: i(n[t.getMonth()]), year: t.getFullYear().toString().slice(2) })
                         : "";
                 }),
                     (this.localTimeStamp = function (e) {
                         var t = p.parseDate(e),
                             s = t && t.getHours();
                         return t
                             ? i(r.full, {
                                   day: t.getDate(),
                                   month: i(n[t.getMonth()]),
                                   year: t.getFullYear(),
                                   hours24: h(s),
                                   hours12: s < 13 ? (s ? s : "12") : s - 12,
                                   minutes: h(t.getMinutes()),
                                   seconds: h(t.getSeconds()),
                                   amPm: s < 12 ? i("AM") : i("PM"),
                               })
                             : "";
                     });
             }
             var n = /(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/,
                 r = /[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i,
                 i = /^\d+$/,
                 s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                 o = { abbr: "%{number}%{symbol}", shortdate: "%{day} %{month}", longdate: "%{day} %{month} %{year}", full: "%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}" },
                 u = 1000,
                 a = u * 60,
                 f = a * 60,
                 l = f * 24,
                 c = '<abbr title="%{expanded}">%{abbr}</abbr>';
             (p.parseDate = function (e) {
                 var o = e || "",
                     u = o.toString(),
                     a,
                     f;
                 return (
                     (a = (function () {
                         var e;
                         if (i.test(u)) {
                             return parseInt(u, 10);
                         }
                         if ((e = u.match(r))) {
                             return Date.UTC(e[7], t.indexOf(s, e[1]), e[2], e[3], e[4], e[5]);
                         }
                         if ((e = u.match(n))) {
                             return Date.UTC(e[1], e[2] - 1, e[3], e[4], e[5], e[6]);
                         }
                     })()),
                     a ? ((f = new Date(a)), !isNaN(f.getTime()) && f) : !1
                 );
             }),
                 e(p);
         });
     });
     provide("sandbox/frame", function (e) {
         using("sandbox/baseframe", "sandbox/minimal", "util/env", "util/promise", "util/util", function (t, n, r, i, s) {
             function h() {
                 var e, t;
                 a = {};
                 if (f) {
                     return;
                 }
                 (e = document.body.offsetHeight), (t = document.body.offsetWidth);
                 if (e == c && t == l) {
                     return;
                 }
                 s.forEach(u, function (e) {
                     e.dispatchFrameResize(l, c);
                 }),
                     (c = e),
                     (l = t);
             }
             function p(e) {
                 var t;
                 return e.id ? e.id : (t = e.getAttribute("data-twttr-id")) ? t : ((t = "twttr-sandbox-" + o++), e.setAttribute("data-twttr-id", t), t);
             }
             function d(e, t) {
                 n.apply(this, [e, t]),
                     (this._resizeHandlers = []),
                     u.push(this),
                     this._win.addEventListener
                         ? this._win.addEventListener(
                               "resize",
                               s.bind(function () {
                                   this.dispatchFrameResize();
                               }, this),
                               !0
                           )
                         : this._win.attachEvent(
                               "onresize",
                               s.bind(function () {
                                   this.dispatchFrameResize(this._win.event);
                               }, this)
                           );
             }
             var o = 0,
                 u = [],
                 a = {},
                 f,
                 l = 0,
                 c = 0;
             window.addEventListener
                 ? window.addEventListener("resize", h, !0)
                 : document.body.attachEvent("onresize", function () {
                       h(window.event);
                   }),
                 (d.prototype = new n()),
                 s.aug(d.prototype, {
                     dispatchFrameResize: function () {
                         var e = this._frame.parentNode,
                             t = p(e),
                             n = a[t];
                         f = !0;
                         if (!this._resizeHandlers.length) {
                             return;
                         }
                         n || (n = a[t] = { w: this._frame.offsetWidth, h: this._frame.offsetHeight });
                         if (this._frameWidth == n.w && this._frameHeight == n.h) {
                             return;
                         }
                         (this._frameWidth = n.w),
                             (this._frameHeight = n.h),
                             s.forEach(this._resizeHandlers, function (e) {
                                 e(n.w, n.h);
                             }),
                             window.setTimeout(function () {
                                 a = {};
                             }, 50);
                     },
                     appendStyleSheet: function (e) {
                         var t = this._doc.createElement("link");
                         return (
                             (t.type = "text/css"),
                             (t.rel = "stylesheet"),
                             (t.href = e),
                             this.layout(
                                 s.bind(function () {
                                     return this._head.appendChild(t);
                                 }, this)
                             )
                         );
                     },
                     appendCss: function (e) {
                         var t;
                         return r.cspEnabled()
                             ? i.reject("CSP enabled; cannot embed inline styles.")
                             : ((t = this._doc.createElement("style")),
                               (t.type = "text/css"),
                               t.styleSheet ? (t.styleSheet.cssText = e) : t.appendChild(this._doc.createTextNode(e)),
                               this.layout(
                                   s.bind(function () {
                                       return this._head.appendChild(t);
                                   }, this)
                               ));
                     },
                     style: function (e) {
                         return this.layout(
                             s.bind(function () {
                                 s.forIn(
                                     e,
                                     s.bind(function (e, t) {
                                         this._frame.style[e] = t;
                                     }, this)
                                 );
                             }, this)
                         );
                     },
                     onresize: function (e) {
                         this._resizeHandlers.push(e);
                     },
                     width: function (e) {
                         return e !== undefined && (this._frame.width = e), r.ios() ? Math.min(this._frame.parentNode.offsetWidth, this._frame.offsetWidth) : this._frame.offsetWidth;
                     },
                     height: function (e) {
                         return e !== undefined && (this._frame.height = e), this._frame.offsetHeight;
                     },
                 }),
                 (d.createSandbox = function (e, n, r, i) {
                     var s = new t(e, n, r, i);
                     return s.ready().then(function (e) {
                         return new d(e.frame, e.layout);
                     });
                 }),
                 e(d);
         });
     });
     provide("tfw/util/assets", function (e) {
         using("util/env", function (t) {
             function r(e, r) {
                 var i = n[e],
                     s;
                 return t.retina() ? (s = "2x") : t.ie6() || t.ie7() ? (s = "gif") : (s = "default"), r && (s += ".rtl"), i[s];
             }
             var n = {
                 "embed/timeline.css": {
                     default: "embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.default.css",
                     "2x": "embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.2x.css",
                     gif: "embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.gif.css",
                     "default.rtl": "embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.default.rtl.css",
                     "2x.rtl": "embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.2x.rtl.css",
                     "gif.rtl": "embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.gif.rtl.css",
                 },
             };
             e(r);
         });
     });
     provide("tfw/widget/syndicatedbase", function (e) {
         using(
             "tfw/widget/base",
             "tfw/widget/intent",
             "tfw/util/assets",
             "tfw/util/globals",
             "tfw/util/tracking",
             "dom/classname",
             "dom/get",
             "dom/delegate",
             "sandbox/frame",
             "util/env",
             "util/promise",
             "util/twitter",
             "util/typevalidator",
             "util/util",
             function (t, n, r, i, s, o, u, a, f, l, c, h, p, d) {
                 function C() {
                     (b = k.VALID_COLOR.test(i.val("widgets:link-color")) && RegExp.$1), (E = k.VALID_COLOR.test(i.val("widgets:border-color")) && RegExp.$1), (w = i.val("widgets:theme"));
                 }
                 function k(e) {
                     if (!e) {
                         return;
                     }
                     var n;
                     (this.readyPromise = new c(
                         d.bind(function (e) {
                             this.readyResolver = e;
                         }, this)
                     )),
                         (this.renderedPromise = new c(
                             d.bind(function (e) {
                                 this.renderResolver = e;
                             }, this)
                         )),
                         t.apply(this, [e]),
                         (n = this.params()),
                         (this.targetEl = (this.srcEl && this.srcEl.parentNode) || n.targetEl || document.body),
                         (this.predefinedWidth = k.VALID_UNIT.test(n.width || this.attr("width")) && RegExp.$1),
                         this.layout(
                             d.bind(function () {
                                 return (this.containerWidth = this.targetEl && this.targetEl.offsetWidth);
                             }, this)
                         ).then(
                             d.bind(function (e) {
                                 var t = this.predefinedWidth || e || this.dimensions.DEFAULT_WIDTH;
                                 (this.height = k.VALID_UNIT.test(n.height || this.attr("height")) && RegExp.$1), (this.width = Math.max(this.dimensions.MIN_WIDTH, Math.min(t, this.dimensions.DEFAULT_WIDTH)));
                             }, this)
                         ),
                         k.VALID_COLOR.test(n.linkColor || this.dataAttr("link-color")) ? (this.linkColor = RegExp.$1) : (this.linkColor = b),
                         k.VALID_COLOR.test(n.borderColor || this.dataAttr("border-color")) ? (this.borderColor = RegExp.$1) : (this.borderColor = E),
                         (this.theme = n.theme || this.attr("data-theme") || w),
                         (this.theme = /(dark|light)/.test(this.theme) ? this.theme : ""),
                         this.classAttr.push(l.touch() ? "is-touch" : "not-touch"),
                         l.ie9() && this.classAttr.push("ie9"),
                         f
                             .createSandbox(
                                 { class: this.renderedClassNames, id: this.id },
                                 { width: "1px", height: "0px", border: "none", position: "absolute", visibility: "hidden" },
                                 d.bind(function (e) {
                                     this.srcEl ? this.targetEl.insertBefore(e, this.srcEl) : this.targetEl.appendChild(e);
                                 }, this),
                                 this.layout
                             )
                             .then(
                                 d.bind(function (e) {
                                     this.setupSandbox(e);
                                 }, this)
                             );
                 }
                 function L(e, t) {
                     return e + t;
                 }
                 function A(e, t) {
                     return e == 2 || (e == 3 && t == 0);
                 }
                 var v = [
                         ".customisable",
                         ".customisable:link",
                         ".customisable:visited",
                         ".customisable:hover",
                         ".customisable:focus",
                         ".customisable:active",
                         ".customisable-highlight:hover",
                         ".customisable-highlight:focus",
                         "a:hover .customisable-highlight",
                         "a:focus .customisable-highlight",
                     ],
                     m = ["a:hover .ic-mask", "a:focus .ic-mask"],
                     g = [".customisable-border"],
                     y = [".timeline-header h1.summary", ".timeline-header h1.summary a:link", ".timeline-header h1.summary a:visited"],
                     b,
                     w,
                     E,
                     S = { TWEET: 0, RETWEET: 10 },
                     x = 6,
                     T = 8 / 9,
                     N = 16 / 9;
                 (k.prototype = new t()),
                     d.aug(k.prototype, {
                         setupSandbox: function (e) {
                             (this.sandbox = e),
                                 c.some(e.appendCss("body{display:none}"), e.setBaseTarget("_blank"), e.appendStyleSheet(twttr.widgets.config.assetUrl() + "/" + r("embed/timeline.css"))).then(
                                     d.bind(function () {
                                         this.readyResolver.fulfill(e);
                                     }, this)
                                 );
                         },
                         ready: function () {
                             return this.readyPromise;
                         },
                         rendered: function () {
                             return this.renderedPromise;
                         },
                         contentWidth: function (e) {
                             var t = this.dimensions,
                                 n = this.fullBleedPhoto ? 0 : this.chromeless && this.narrow ? t.NARROW_MEDIA_PADDING_CL : this.chromeless ? t.WIDE_MEDIA_PADDING_CL : this.narrow ? t.NARROW_MEDIA_PADDING : t.WIDE_MEDIA_PADDING;
                             return (e || this.width) - n;
                         },
                         addSiteStyles: function () {
                             var e = d.bind(function (e) {
                                     return (this.theme == "dark" ? ".thm-dark " : "") + e;
                                 }, this),
                                 t = [];
                             this.headingStyle && t.push(d.map(y, e).join(",") + "{" + this.headingStyle + "}"),
                                 this.linkColor && (t.push(d.map(v, e).join(",") + "{color:" + this.linkColor + "}"), t.push(d.map(m, e).join(",") + "{background-color:" + this.linkColor + "}")),
                                 this.borderColor &&
                                     t.push(
                                         d
                                             .map(g, e)
                                             .concat(this.theme == "dark" ? [".thm-dark.customisable-border"] : [])
                                             .join(",") +
                                             "{border-color:" +
                                             this.borderColor +
                                             "}"
                                     );
                             if (!t.length) {
                                 return;
                             }
                             return this.sandbox.appendCss(t.join(""));
                         },
                         setNarrow: function () {
                             var e = this.narrow;
                             return (
                                 (this.narrow = this.width < this.dimensions.NARROW_WIDTH),
                                 e != this.narrow
                                     ? this.layout(
                                           d.bind(function () {
                                               return o.toggle(this.element, "var-narrow", this.narrow);
                                           }, this)
                                       )
                                     : c.fulfill(this.narrow)
                             );
                         },
                         bindIntentHandlers: function () {
                             function r(n) {
                                 var r = u.ancestor(".tweet", this, t),
                                     i = d.aug({}, e.baseScribeData(), e.extractTweetScribeDetails(r));
                                 s.scribeInteraction(n, i, !0, e.dnt);
                             }
                             var e = this,
                                 t = this.element;
                             a.delegate(t, "click", "A", r),
                                 a.delegate(t, "click", "BUTTON", r),
                                 a.delegate(t, "click", ".profile", function () {
                                     e.addUrlParams(this);
                                 }),
                                 a.delegate(t, "click", ".follow-button", function (t) {
                                     var r;
                                     if (t.altKey || t.metaKey || t.shiftKey) {
                                         return;
                                     }
                                     if (l.ios() || l.android()) {
                                         return;
                                     }
                                     if (p.asBoolean(this.getAttribute("data-age-gate"))) {
                                         return;
                                     }
                                     (r = h.intentForProfileURL(this.href)), r && (n.open(r, e.sandbox.element()), a.preventDefault(t));
                                 }),
                                 a.delegate(t, "click", ".web-intent", function (t) {
                                     e.addUrlParams(this);
                                     if (t.altKey || t.metaKey || t.shiftKey) {
                                         return;
                                     }
                                     n.open(this.href, e.sandbox.element()), a.preventDefault(t);
                                 });
                         },
                         baseScribeData: function () {
                             return {};
                         },
                         extractTweetScribeDetails: function (e) {
                             var t,
                                 n,
                                 r = {};
                             return e
                                 ? ((t = e.getAttribute("data-tweet-id")),
                                   (n = e.getAttribute("data-rendered-tweet-id") || t),
                                   n == t ? (r[n] = { item_type: S.TWEET }) : t && (r[n] = { item_type: S.RETWEET, target_type: S.TWEET, target_id: t }),
                                   r)
                                 : r;
                         },
                         constrainMedia: function (e, t) {
                             var n = 0,
                                 r = this.fullBleedPhoto ? 600 : 375,
                                 i = u.one("multi-photo", e, "DIV"),
                                 s = i && +i.getAttribute("data-photo-count");
                             (e = e || this.element), (t = t || this.contentWidth());
                             if (!e) {
                                 return;
                             }
                             return (
                                 d.forEach(
                                     u.all("autosized-media", e),
                                     d.bind(function (e) {
                                         var i = k.scaleDimensions(e.getAttribute("data-width"), e.getAttribute("data-height"), t, r);
                                         this.layout(function () {
                                             (e.width = i.width), (e.height = i.height);
                                         }),
                                             (n = i.height > n ? i.height : n);
                                     }, this)
                                 ),
                                 d.forEach(
                                     u.all("cropped-media", e, "IMG"),
                                     d.bind(function (e) {
                                         var i = t - 12,
                                             o = e.parentNode,
                                             u = e.getAttribute("data-crop-x") || 0,
                                             a = e.getAttribute("data-crop-y") || 0,
                                             f,
                                             l,
                                             c = A(s, e.getAttribute("data-image-index")),
                                             h = Math.floor(i / 2 - x),
                                             p = Math.floor(h / (c ? T : N)),
                                             d;
                                         c || (p -= x / 2),
                                             (d = k.scaleDimensions(e.getAttribute("data-width"), e.getAttribute("data-height"), h, r, h, p)),
                                             (f = d.width - h - u),
                                             (l = d.height - p - a),
                                             f < 0 && Math.max(0, (u += f)),
                                             l < 0 && Math.max(0, (a += l)),
                                             this.layout(function () {
                                                 (e.width = d.width),
                                                     (e.height = d.height),
                                                     (o.style.width = h - 1 + "px"),
                                                     (o.style.height = p + "px"),
                                                     u && (e.style.marginLeft = "-" + Math.floor((d.width * u) / 100) + "px"),
                                                     a && (e.style.marginTop = "-" + Math.floor((d.height * a) / 100) + "px");
                                             }),
                                             (n = d.height * (c ? 2 : 1) > n ? d.height : n);
                                     }, this)
                                 ),
                                 n
                             );
                         },
                         collapseRegions: function () {
                             d.forEach(
                                 u.all("collapsible-container", this.element),
                                 d.bind(function (e) {
                                     var t = e.children,
                                         n = t.length && e.offsetWidth,
                                         r =
                                             t.length &&
                                             d.map(t, function (e) {
                                                 return e.offsetWidth;
                                             }),
                                         i = t.length,
                                         s,
                                         u;
                                     if (!t.length) {
                                         return;
                                     }
                                     while (i > 0) {
                                         i--, (s = d.reduce(r, L, 0));
                                         if (!n || !s) {
                                             return;
                                         }
                                         if (s < n) {
                                             return;
                                         }
                                         u = t[i].getAttribute("data-collapsed-class");
                                         if (!u) {
                                             continue;
                                         }
                                         o.add(this.element, u), (r[i] = t[i].offsetWidth);
                                     }
                                 }, this)
                             );
                         },
                     }),
                     (k.VALID_UNIT = /^([0-9]+)( ?px)?$/),
                     (k.VALID_COLOR = /^(#(?:[0-9a-f]{3}|[0-9a-f]{6}))$/i),
                     (k.retinize = function (e) {
                         if (!l.retina()) {
                             return;
                         }
                         d.forEach(e.getElementsByTagName("IMG"), function (e) {
                             var t = e.getAttribute("data-src-2x");
                             t && (e.src = t);
                         });
                     }),
                     (k.scaleDimensions = function (e, t, n, r, i, s) {
                         return (
                             (n = n || e),
                             (r = r || t),
                             (i = i || 0),
                             (s = s || 0),
                             e > n && ((t *= n / e), (e = n)),
                             t > r && ((e *= r / t), (t = r)),
                             e < i && ((t *= i / e), (e = i)),
                             t < s && ((e *= s / t), (t = s)),
                             { width: Math.floor(e), height: Math.floor(t) }
                         );
                     }),
                     C(),
                     e(k);
             }
         );
     });
     provide("tfw/widget/timeline", function (e) {
         using(
             "tfw/widget/base",
             "tfw/widget/syndicatedbase",
             "util/datetime",
             "util/promise",
             "anim/transition",
             "tfw/util/article",
             "tfw/util/data",
             "tfw/util/tracking",
             "tfw/util/params",
             "util/css",
             "util/env",
             "util/throttle",
             "util/twitter",
             "util/querystring",
             "util/typevalidator",
             "util/util",
             "dom/delegate",
             "dom/classname",
             "dom/get",
             function (t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b) {
                 function I(e) {
                     if (!e) {
                         return;
                     }
                     var t, r, i, s, o, u, a, f;
                     n.apply(this, [e]),
                         (t = this.params()),
                         (r = (t.chrome || this.dataAttr("chrome") || "").split(" ")),
                         (this.preview = t.previewParams),
                         (this.widgetId = t.widgetId || this.dataAttr("widget-id")),
                         (this.instanceId = ++F),
                         (this.cursors = { maxPosition: 0, minPosition: 0 }),
                         (s = t.screenName || this.dataAttr("screen-name")) || (o = t.userId || this.dataAttr("user-id"))
                             ? (this.override = { overrideType: "user", overrideId: o, overrideName: s, withReplies: v.asBoolean(t.showReplies || this.dataAttr("show-replies")) ? "true" : "false" })
                             : (s = t.favoritesScreenName || this.dataAttr("favorites-screen-name")) || (o = t.favoritesUserId || this.dataAttr("favorites-user-id"))
                             ? (this.override = { overrideType: "favorites", overrideId: o, overrideName: s })
                             : ((s = t.listOwnerScreenName || this.dataAttr("list-owner-screen-name")) || (o = t.listOwnerId || this.dataAttr("list-owner-id"))) &&
                               ((u = t.listId || this.dataAttr("list-id")) || (a = t.listSlug || this.dataAttr("list-slug")))
                             ? (this.override = { overrideType: "list", overrideOwnerId: o, overrideOwnerName: s, overrideId: u, overrideName: a })
                             : (f = t.customTimelineId || this.dataAttr("custom-timeline-id"))
                             ? (this.override = { overrideType: "custom", overrideId: f })
                             : (this.override = {}),
                         (this.tweetLimit = v.asInt(t.tweetLimit || this.dataAttr("tweet-limit"))),
                         (this.staticTimeline = this.tweetLimit > 0),
                         r.length &&
                             ((i = ~m.indexOf(r, "none")),
                             (this.chromeless = i || ~m.indexOf(r, "transparent")),
                             (this.headerless = i || ~m.indexOf(r, "noheader")),
                             (this.footerless = i || ~m.indexOf(r, "nofooter")),
                             (this.borderless = i || ~m.indexOf(r, "noborders")),
                             (this.noscrollbar = ~m.indexOf(r, "noscrollbar"))),
                         (this.headingStyle = l.sanitize(t.headingStyle || this.dataAttr("heading-style"), undefined, !0)),
                         this.classAttr.push("twitter-timeline-rendered"),
                         (this.ariaPolite = t.ariaPolite || this.dataAttr("aria-polite"));
                 }
                 var w = "1.0",
                     E = { CLIENT_SIDE_USER: 0, CLIENT_SIDE_APP: 2 },
                     S = "timeline",
                     x = "new-tweets-bar",
                     T = "timeline-header",
                     N = "timeline-footer",
                     C = "stream",
                     k = "h-feed",
                     L = "tweet",
                     A = "expanded",
                     O = "detail-expander",
                     M = "expand",
                     _ = "permalink",
                     D = "twitter-follow-button",
                     P = "no-more-pane",
                     H = "pending-scroll-in",
                     B = "pending-new-tweet",
                     j = "pending-new-tweet-display",
                     F = 0;
                 (I.prototype = new n()),
                     m.aug(I.prototype, {
                         renderedClassNames: "twitter-timeline twitter-timeline-rendered",
                         dimensions: {
                             DEFAULT_HEIGHT: "600",
                             DEFAULT_WIDTH: "520",
                             NARROW_WIDTH: "320",
                             MIN_WIDTH: "180",
                             MIN_HEIGHT: "200",
                             WIDE_MEDIA_PADDING: 81,
                             NARROW_MEDIA_PADDING: 16,
                             WIDE_MEDIA_PADDING_CL: 60,
                             NARROW_MEDIA_PADDING_CL: 12,
                         },
                         create: function (e) {
                             var r = this.sandbox.createElement("div"),
                                 i,
                                 s,
                                 o,
                                 u = [],
                                 f;
                             (r.innerHTML = e.body), (i = r.children[0] || !1);
                             if (!i) {
                                 return;
                             }
                             return (
                                 this.reconfigure(e.config),
                                 this.discardStaticOverflow(i),
                                 this.sandbox.setTitle(i.getAttribute("data-iframe-title") || "Timeline"),
                                 n.retinize(i),
                                 this.constrainMedia(i),
                                 (this.searchQuery = i.getAttribute("data-search-query")),
                                 (this.profileId = i.getAttribute("data-profile-id")),
                                 (this.timelineType = i.getAttribute("data-timeline-type")),
                                 (f = this.getTweetDetails(r)),
                                 m.forIn(f, function (e) {
                                     u.push(e);
                                 }),
                                 (o = this.baseScribeData()),
                                 (o.item_ids = u),
                                 (o.item_details = f),
                                 this.timelineType && a.enqueue({ page: this.timelineType + "_timeline", component: "timeline", element: "initial", action: u.length ? "results" : "no_results" }, o, !0, this.dnt),
                                 a.enqueue({ page: "timeline", component: "timeline", element: "initial", action: u.length ? "results" : "no_results" }, o, !0, this.dnt),
                                 a.flush(),
                                 this.ariaPolite == "assertive" && ((s = b.one(x, i, "DIV")), s.setAttribute("aria-polite", "assertive")),
                                 (i.id = this.id),
                                 (i.className += " " + this.classAttr.join(" ")),
                                 (i.lang = this.lang),
                                 this.augmentWidgets(i),
                                 this.ready().then(
                                     m.bind(function (e) {
                                         e.appendChild(i).then(
                                             m.bind(function () {
                                                 this.renderResolver.fulfill(this.sandbox);
                                             }, this)
                                         ),
                                             e.style({ cssText: "", border: "none", maxWidth: "100%", minWidth: this.dimensions.MIN_WIDTH + "px" }),
                                             this.layout(
                                                 m.bind(function () {
                                                     this.srcEl && this.srcEl.parentNode && this.srcEl.parentNode.removeChild(this.srcEl),
                                                         (this.predefinedWidth = this.width),
                                                         (this.predefinedHeight = this.height),
                                                         (this.width = e.width(this.width)),
                                                         (this.height = e.height(this.height));
                                                 }, this)
                                             ).then(
                                                 m.bind(function () {
                                                     this.completeResolver.fulfill(this.sandbox.element()),
                                                         this.width < this.predefinedWidth &&
                                                             (this.layout(
                                                                 m.bind(function () {
                                                                     this.width = e.width(this.predefinedWidth);
                                                                 }, this)
                                                             ),
                                                             t.doLayoutAsync()),
                                                         this.height < this.predefinedHeight &&
                                                             (this.layout(
                                                                 m.bind(function () {
                                                                     (this.height = e.height(this.predefinedHeight)), this.recalculateStreamHeight();
                                                                 }, this)
                                                             ),
                                                             t.doLayoutAsync());
                                                 }, this)
                                             ),
                                             this.setNarrow().then(
                                                 m.bind(function () {
                                                     this.sandbox.onresize(m.bind(this.handleResize, this));
                                                 }, this)
                                             );
                                     }, this)
                                 ),
                                 i
                             );
                         },
                         render: function (e, n) {
                             return !this.preview && !this.widgetId
                                 ? (this.completeResolver.reject(400), this.completed())
                                 : (this.staticTimeline
                                       ? this.rendered().then(
                                             m.bind(function (e) {
                                                 this.layout(
                                                     m.bind(function () {
                                                         e.height((this.height = this.element.offsetHeight));
                                                     }, this)
                                                 ),
                                                     t.doLayoutAsync();
                                             }, this)
                                         )
                                       : this.rendered().then(
                                             m.bind(function () {
                                                 this.recalculateStreamHeight(), t.doLayoutAsync();
                                             }, this)
                                         ),
                                   this.preview ? this.getPreviewTimeline() : this.getTimeline(),
                                   n && this.completed().then(n),
                                   this.completed());
                         },
                         getPreviewTimeline: function () {
                             u.timelinePreview({
                                 success: m.bind(function (e) {
                                     this.ready().then(
                                         m.bind(function () {
                                             (this.element = this.create(e)), this.readTranslations(), this.bindInteractions(), this.updateCursors(e.headers, { initial: !0 }), t.doLayoutAsync();
                                         }, this)
                                     );
                                 }, this),
                                 error: function (e) {
                                     if (!e || !e.headers) {
                                         this.completeResolver.fulfill(this.srcEl);
                                         return;
                                     }
                                     this.completeResolver.reject(e.headers.status);
                                 },
                                 params: this.preview,
                             });
                         },
                         getTimeline: function () {
                             a.initPostLogging(),
                                 u.timeline(
                                     m.aug(
                                         {
                                             id: this.widgetId,
                                             instanceId: this.instanceId,
                                             dnt: this.dnt,
                                             lang: this.lang,
                                             success: m.bind(function (e) {
                                                 this.ready().then(
                                                     m.bind(function () {
                                                         (this.element = this.create(e)),
                                                             this.readTranslations(),
                                                             this.bindInteractions(),
                                                             this.updateTimeStamps(),
                                                             this.updateCursors(e.headers, { initial: !0 }),
                                                             e.headers.xPolling && /\d/.test(e.headers.xPolling) && (this.pollInterval = e.headers.xPolling * 1000),
                                                             this.staticTimeline || this.schedulePolling(),
                                                             t.doLayoutAsync();
                                                     }, this)
                                                 );
                                             }, this),
                                             error: function (e) {
                                                 if (!e || !e.headers) {
                                                     this.completeResolver.fulfill(this.srcEl);
                                                     return;
                                                 }
                                                 this.completeResolver.reject(e.headers.status);
                                             },
                                         },
                                         this.override
                                     )
                                 );
                         },
                         reconfigure: function (e) {
                             (this.lang = e.lang),
                                 this.theme || (this.theme = e.theme),
                                 this.theme == "dark" && this.classAttr.push("thm-dark"),
                                 this.chromeless && this.classAttr.push("var-chromeless"),
                                 this.borderless && this.classAttr.push("var-borderless"),
                                 this.headerless && this.classAttr.push("var-headerless"),
                                 this.footerless && this.classAttr.push("var-footerless"),
                                 this.staticTimeline && this.classAttr.push("var-static"),
                                 !this.linkColor && e.linkColor && n.VALID_COLOR.test(e.linkColor) && (this.linkColor = RegExp.$1),
                                 !this.height && n.VALID_UNIT.test(e.height) && (this.height = RegExp.$1),
                                 (this.height = Math.max(this.dimensions.MIN_HEIGHT, this.height ? this.height : this.dimensions.DEFAULT_HEIGHT)),
                                 this.preview && this.classAttr.push("var-preview"),
                                 (this.narrow = this.width <= this.dimensions.NARROW_WIDTH),
                                 this.narrow && this.classAttr.push("var-narrow"),
                                 this.addSiteStyles();
                         },
                         getTweetDetails: function (e) {
                             var t = b.one(k, e),
                                 n,
                                 r = {},
                                 i,
                                 s,
                                 o = 0;
                             n = (t && t.children) || [];
                             for (; (i = n[o]); o++) {
                                 (s = b.one(_, i, "A")), m.aug(r, this.extractTweetScribeDetails(i));
                             }
                             return r;
                         },
                         baseScribeData: function () {
                             return { widget_id: this.widgetId, widget_origin: o.url(), client_version: w, message: this.partner, query: this.searchQuery, profile_id: this.profileId };
                         },
                         bindInteractions: function () {
                             var e = this,
                                 t = this.element,
                                 n = !0;
                             this.bindIntentHandlers(),
                                 g.delegate(t, "click", ".load-tweets", function (t) {
                                     n && ((n = !1), e.forceLoad(), g.stop(t));
                                 }),
                                 g.delegate(t, "click", ".display-sensitive-image", function (n) {
                                     e.showNSFW(b.ancestor("." + L, this, t)), g.stop(n);
                                 }),
                                 g.delegate(t, "mouseover", "." + S, function () {
                                     e.mouseOver = !0;
                                 }),
                                 g.delegate(t, "mouseout", "." + S, function () {
                                     e.mouseOver = !1;
                                 }),
                                 g.delegate(t, "mouseover", "." + x, function () {
                                     e.mouseOverNotifier = !0;
                                 }),
                                 g.delegate(t, "mouseout", "." + x, function () {
                                     (e.mouseOverNotifier = !1),
                                         window.setTimeout(function () {
                                             e.hideNewTweetNotifier();
                                         }, 3000);
                                 });
                             if (this.staticTimeline) {
                                 return;
                             }
                             g.delegate(t, "click", "." + M, function (n) {
                                 if (n.altKey || n.metaKey || n.shiftKey) {
                                     return;
                                 }
                                 e.toggleExpando(b.ancestor("." + L, this, t)), g.stop(n);
                             }),
                                 g.delegate(t, "click", "A", function (e) {
                                     g.stopPropagation(e);
                                 }),
                                 g.delegate(t, "click", ".with-expansion", function (t) {
                                     e.toggleExpando(this), g.stop(t);
                                 }),
                                 g.delegate(t, "click", ".load-more", function () {
                                     e.loadMore();
                                 }),
                                 g.delegate(t, "click", "." + x, function () {
                                     e.scrollToTop(), e.hideNewTweetNotifier(!0);
                                 });
                         },
                         scrollToTop: function () {
                             var e = b.one(C, this.element, "DIV");
                             (e.scrollTop = 0), e.focus();
                         },
                         update: function () {
                             var e = this,
                                 t = b.one(k, this.element),
                                 n = t && t.children[0],
                                 r = n && n.getAttribute("data-tweet-id");
                             this.updateTimeStamps(),
                                 this.requestTweets(r, !0, function (t) {
                                     t.childNodes.length > 0 && e.insertNewTweets(t);
                                 });
                         },
                         loadMore: function () {
                             var e = this,
                                 t = b.all(L, this.element, "LI").pop(),
                                 n = t && t.getAttribute("data-tweet-id");
                             this.requestTweets(n, !1, function (t) {
                                 var r = b.one(P, e.element, "P"),
                                     i = t.childNodes[0];
                                 (r.style.cssText = ""), i && i.getAttribute("data-tweet-id") == n && t.removeChild(i);
                                 if (t.childNodes.length > 0) {
                                     e.appendTweets(t);
                                     return;
                                 }
                                 y.add(e.element, "no-more"), r.focus();
                             });
                         },
                         forceLoad: function () {
                             var e = this,
                                 t = !!b.all(k, this.element, "OL").length;
                             this.requestTweets(1, !0, function (n) {
                                 n.childNodes.length && (e[t ? "insertNewTweets" : "appendTweets"](n), y.add(e.element, "has-tweets"));
                             });
                         },
                         schedulePolling: function (e) {
                             var t = this;
                             if (this.pollInterval === null) {
                                 return;
                             }
                             (e = twttr.widgets.poll || e || this.pollInterval || 10000),
                                 e > -1 &&
                                     window.setTimeout(function () {
                                         this.isUpdating || t.update(), t.schedulePolling();
                                     }, e);
                         },
                         updateCursors: function (e, t) {
                             (t || {}).initial
                                 ? ((this.cursors.maxPosition = e.maxPosition), (this.cursors.minPosition = e.minPosition))
                                 : (t || {}).newer
                                 ? (this.cursors.maxPosition = e.maxPosition || this.cursors.maxPosition)
                                 : (this.cursors.minPosition = e.minPosition || this.cursors.minPosition);
                         },
                         requestTweets: function (e, t, r) {
                             var i = this,
                                 s = { id: this.widgetId, instanceId: this.instanceId, screenName: this.widgetScreenName, userId: this.widgetUserId, withReplies: this.widgetShowReplies, dnt: this.dnt, lang: this.lang };
                             t && this.cursors.maxPosition ? (s.minPosition = this.cursors.maxPosition) : !t && this.cursors.minPosition ? (s.maxPosition = this.cursors.minPosition) : t ? (s.sinceId = e) : (s.maxId = e),
                                 (s.complete = function () {
                                     this.isUpdating = !1;
                                 }),
                                 (s.error = function (e) {
                                     if (e && e.headers) {
                                         if (e.headers.status == "404") {
                                             i.pollInterval = null;
                                             return;
                                         }
                                         if (e.headers.status == "503") {
                                             i.pollInterval *= 1.5;
                                             return;
                                         }
                                     }
                                 }),
                                 (s.success = function (e) {
                                     var s = i.sandbox.createDocumentFragment(),
                                         o = i.sandbox.createElement("div"),
                                         u,
                                         f = [],
                                         l,
                                         c;
                                     i.updateCursors(e.headers, { newer: t }), e && e.headers && e.headers.xPolling && /\d+/.test(e.headers.xPolling) && (i.pollInterval = e.headers.xPolling * 1000);
                                     if (e && e.body !== undefined) {
                                         o.innerHTML = e.body;
                                         if (o.children[0] && o.children[0].tagName != "LI") {
                                             return;
                                         }
                                         l = i.getTweetDetails(o);
                                         for (c in l) {
                                             l.hasOwnProperty(c) && f.push(c);
                                         }
                                         f.length &&
                                             ((u = i.baseScribeData()),
                                             (u.item_ids = f),
                                             (u.item_details = l),
                                             (u.event_initiator = t ? E.CLIENT_SIDE_APP : E.CLIENT_SIDE_USER),
                                             this.timelineType && a.enqueue({ page: this.timelineType + "_timeline", component: "timeline", element: "initial", action: f.length ? "results" : "no_results" }, u, !0, this.dnt),
                                             a.enqueue({ page: "timeline", component: "timeline", element: t ? "newer" : "older", action: "results" }, u, !0, i.dnt),
                                             a.flush()),
                                             n.retinize(o),
                                             i.constrainMedia(o);
                                         while (o.children[0]) {
                                             s.appendChild(o.children[0]);
                                         }
                                         r(s);
                                     }
                                 }),
                                 u.timelinePoll(m.aug(s, this.override));
                         },
                         insertNewTweets: function (e) {
                             var t = this,
                                 n = b.one(C, this.element, "DIV"),
                                 r = b.one(k, n, "OL"),
                                 i = r.offsetHeight,
                                 o;
                             r.insertBefore(e, r.firstChild), (o = r.offsetHeight - i);
                             if (n.scrollTop > 40 || this.mouseIsOver()) {
                                 (n.scrollTop = n.scrollTop + o), this.updateTimeStamps(), this.showNewTweetNotifier();
                                 return;
                             }
                             y.remove(this.element, H),
                                 (r.style.cssText = "margin-top: -" + o + "px"),
                                 window.setTimeout(function () {
                                     (n.scrollTop = 0),
                                         y.add(t.element, H),
                                         c.cssTransitions()
                                             ? (r.style.cssText = "")
                                             : s.animate(
                                                   function (e) {
                                                       e < o ? (r.style.cssText = "margin-top: -" + (o - e) + "px") : (r.style.cssText = "");
                                                   },
                                                   o,
                                                   500,
                                                   s.easeOut
                                               );
                                 }, 500),
                                 this.updateTimeStamps(),
                                 this.timelineType != "custom" && this.gcTweets(50);
                         },
                         appendTweets: function (e) {
                             var t = b.one(C, this.element, "DIV"),
                                 n = b.one(k, t, "OL");
                             n.appendChild(e), this.updateTimeStamps();
                         },
                         gcTweets: function (e) {
                             var t = b.one(k, this.element, "OL"),
                                 n = t.children.length,
                                 r;
                             e = e || 50;
                             for (; n > e && (r = t.children[n - 1]); n--) {
                                 t.removeChild(r);
                             }
                         },
                         showNewTweetNotifier: function () {
                             var e = this,
                                 t = b.one(x, this.element, "DIV"),
                                 n = t.children[0];
                             (t.style.cssText = ""),
                                 t.removeChild(n),
                                 t.appendChild(n),
                                 y.add(this.element, j),
                                 window.setTimeout(function () {
                                     y.add(e.element, B);
                                 }, 10),
                                 (this.newNoticeDisplayTime = +new Date()),
                                 window.setTimeout(function () {
                                     e.hideNewTweetNotifier();
                                 }, 5000);
                         },
                         hideNewTweetNotifier: function (e) {
                             var t = this;
                             if (!e && this.mouseOverNotifier) {
                                 return;
                             }
                             y.remove(this.element, B),
                                 window.setTimeout(function () {
                                     y.remove(t.element, j);
                                 }, 500);
                         },
                         augmentWidgets: function (e) {
                             var t = b.one(D, e, "A");
                             if (!t) {
                                 return;
                             }
                             t.setAttribute("data-related", this.related),
                                 t.setAttribute("data-partner", this.partner),
                                 t.setAttribute("data-dnt", this.dnt),
                                 t.setAttribute("data-search-query", this.searchQuery),
                                 t.setAttribute("data-profile-id", this.profileId),
                                 this.width < 250 && t.setAttribute("data-show-screen-name", "false"),
                                 twttr.widgets.load(t.parentNode);
                         },
                         discardStaticOverflow: function (e) {
                             var t = b.one(k, e, "OL"),
                                 n;
                             if (this.staticTimeline) {
                                 this.height = 0;
                                 while ((n = t.children[this.tweetLimit])) {
                                     t.removeChild(n);
                                 }
                             }
                         },
                         hideStreamScrollBar: function () {
                             var e = b.one(C, this.element, "DIV"),
                                 t = b.one(k, this.element, "OL"),
                                 n;
                             (e.style.width = ""), (n = this.element.offsetWidth - t.offsetWidth), n > 0 && (e.style.width = this.element.offsetWidth + n + "px");
                         },
                         readTranslations: function () {
                             var e = this.element,
                                 t = "data-dt-";
                             this.datetime = new r(
                                 m.compact({
                                     phrases: {
                                         now: e.getAttribute(t + "now"),
                                         s: e.getAttribute(t + "s"),
                                         m: e.getAttribute(t + "m"),
                                         h: e.getAttribute(t + "h"),
                                         second: e.getAttribute(t + "second"),
                                         seconds: e.getAttribute(t + "seconds"),
                                         minute: e.getAttribute(t + "minute"),
                                         minutes: e.getAttribute(t + "minutes"),
                                         hour: e.getAttribute(t + "hour"),
                                         hours: e.getAttribute(t + "hours"),
                                     },
                                     months: e.getAttribute(t + "months").split("|"),
                                     formats: { abbr: e.getAttribute(t + "abbr"), shortdate: e.getAttribute(t + "short"), longdate: e.getAttribute(t + "long") },
                                 })
                             );
                         },
                         updateTimeStamps: function () {
                             var e = b.all(_, this.element, "A"),
                                 t,
                                 n,
                                 r = 0,
                                 i,
                                 s;
                             for (; (t = e[r]); r++) {
                                 (i = t.getAttribute("data-datetime")), (s = i && this.datetime.timeAgo(i, this.i18n)), (n = t.getElementsByTagName("TIME")[0]);
                                 if (!s) {
                                     continue;
                                 }
                                 if (n && n.innerHTML) {
                                     n.innerHTML = s;
                                     continue;
                                 }
                                 t.innerHTML = s;
                             }
                         },
                         mouseIsOver: function () {
                             return this.mouseOver;
                         },
                         addUrlParams: function (e) {
                             var t = this,
                                 n = { tw_w: this.widgetId, related: this.related, partner: this.partner, query: this.searchQuery, profile_id: this.profileId, original_referer: o.url(), tw_p: "embeddedtimeline" };
                             return (
                                 (this.addUrlParams = f(n, function (e) {
                                     var n = b.ancestor("." + L, e, t.element);
                                     return n && { tw_i: n.getAttribute("data-tweet-id") };
                                 })),
                                 this.addUrlParams(e)
                             );
                         },
                         showNSFW: function (e) {
                             var t = b.one("nsfw", e, "DIV"),
                                 r,
                                 i,
                                 s = 0,
                                 o,
                                 u,
                                 a,
                                 f;
                             if (!t) {
                                 return;
                             }
                             (i = n.scaleDimensions(t.getAttribute("data-width"), t.getAttribute("data-height"), this.contentWidth(), t.getAttribute("data-height"))),
                                 (r = !!(u = t.getAttribute("data-player"))),
                                 r
                                     ? (a = this.sandbox.createElement("iframe"))
                                     : ((a = this.sandbox.createElement("img")),
                                       (u = t.getAttribute(c.retina() ? "data-image-2x" : "data-image")),
                                       (a.alt = t.getAttribute("data-alt")),
                                       (f = this.sandbox.createElement("a")),
                                       (f.href = t.getAttribute("data-href")),
                                       f.appendChild(a)),
                                 (a.title = t.getAttribute("data-title")),
                                 (a.src = u),
                                 (a.width = i.width),
                                 (a.height = i.height),
                                 (o = b.ancestor("." + O, t, e)),
                                 (s = i.height - t.offsetHeight),
                                 t.parentNode.replaceChild(r ? a : f, t),
                                 (o.style.cssText = "height:" + (o.offsetHeight + s) + "px");
                         },
                         toggleExpando: function (e) {
                             var r = b.one(O, e, "DIV"),
                                 i = r && r.children[0],
                                 s = i && i.getAttribute("data-expanded-media"),
                                 o,
                                 u = 0,
                                 a = b.one(M, e, "A"),
                                 f = a && a.getElementsByTagName("B")[0],
                                 l = f && (f.innerText || f.textContent),
                                 c;
                             if (!f) {
                                 return;
                             }
                             this.layout(function () {
                                 (f.innerHTML = a.getAttribute("data-toggled-text")), a.setAttribute("data-toggled-text", l);
                             });
                             if (y.present(e, A)) {
                                 this.layout(function () {
                                     y.remove(e, A);
                                 });
                                 if (!r) {
                                     t.doLayout();
                                     return;
                                 }
                                 this.layout(function () {
                                     (r.style.cssText = ""), (i.innerHTML = "");
                                 }),
                                     t.doLayout();
                                 return;
                             }
                             s &&
                                 ((o = this.sandbox.createElement("DIV")),
                                 (o.innerHTML = s),
                                 n.retinize(o),
                                 (u = this.constrainMedia(o)),
                                 this.layout(function () {
                                     i.appendChild(o);
                                 })),
                                 r &&
                                     this.layout(function () {
                                         (c = Math.max(i.offsetHeight, u)), (r.style.cssText = "height:" + c + "px");
                                     }),
                                 this.layout(function () {
                                     y.add(e, A);
                                 }),
                                 t.doLayout();
                         },
                         recalculateStreamHeight: function (e) {
                             var t = b.one(T, this.element, "DIV"),
                                 n = b.one(N, this.element, "DIV"),
                                 r = b.one(C, this.element, "DIV");
                             this.layout(
                                 m.bind(function () {
                                     var i = t.offsetHeight + (n ? n.offsetHeight : 0),
                                         s = e || this.sandbox.height();
                                     (r.style.cssText = "height:" + (s - i - 2) + "px"), this.noscrollbar && this.hideStreamScrollBar();
                                 }, this)
                             );
                         },
                         handleResize: function (e, n) {
                             var r = Math.min(this.dimensions.DEFAULT_WIDTH, Math.max(this.dimensions.MIN_WIDTH, Math.min(this.predefinedWidth || this.dimensions.DEFAULT_WIDTH, e)));
                             if (r == this.width && n == this.height) {
                                 return;
                             }
                             (this.width = r),
                                 (this.height = n),
                                 this.setNarrow(),
                                 this.constrainMedia(this.element, this.contentWidth(r)),
                                 this.staticTimeline
                                     ? this.layout(
                                           m.bind(function () {
                                               (this.height = this.element.offsetHeight), this.sandbox.height(this.height);
                                           }, this)
                                       )
                                     : this.recalculateStreamHeight(n),
                                 t.doLayoutAsync();
                         },
                     }),
                     e(I);
             }
         );
     });
     provide("tfw/widget/embed", function (e) {
         using(
             "tfw/widget/base",
             "tfw/widget/syndicatedbase",
             "util/datetime",
             "tfw/util/params",
             "dom/classname",
             "dom/get",
             "util/env",
             "util/promise",
             "util/util",
             "util/throttle",
             "util/twitter",
             "tfw/util/article",
             "tfw/util/data",
             "tfw/util/tracking",
             function (t, n, r, i, s, o, u, a, f, l, c, h, p, d) {
                 function w(e, t, n, r) {
                     var i = o.one("subject", e, "BLOCKQUOTE"),
                         s = o.one("reply", e, "BLOCKQUOTE"),
                         u = i && i.getAttribute("data-tweet-id"),
                         a = s && s.getAttribute("data-tweet-id"),
                         l = {},
                         c = {};
                     if (!u) {
                         return;
                     }
                     (l[u] = { item_type: 0 }), d.enqueue({ page: "tweet", section: "subject", component: "tweet", action: "results" }, f.aug({}, t, { item_ids: [u], item_details: l }), !0, r);
                     if (!a) {
                         return;
                     }
                     (c[a] = { item_type: 0 }),
                         d.enqueue({ page: "tweet", section: "conversation", component: "tweet", action: "results" }, f.aug({}, t, { item_ids: [a], item_details: c, associations: { 4: { association_id: u, association_type: 4 } } }), !0, r);
                 }
                 function E(e, t, n) {
                     var r = {};
                     if (!e) {
                         return;
                     }
                     (r[e] = { item_type: 0 }),
                         d.enqueue(
                             { page: "tweet", section: "subject", component: "rawembedcode", action: "no_results" },
                             { client_version: v, widget_origin: h.url(), widget_frame: h.frameUrl(), message: t, item_ids: [e], item_details: r },
                             !0,
                             n
                         );
                 }
                 function S(e, t, n, r) {
                     (g[e] = g[e] || []), g[e].push({ s: n, f: r, lang: t });
                 }
                 function x() {
                     b.length && twttr.widgets.load(b);
                 }
                 function T(e) {
                     if (!e) {
                         return;
                     }
                     var t, r, i;
                     n.apply(this, [e]),
                         (t = this.params()),
                         (r = this.srcEl && this.srcEl.getElementsByTagName("A")),
                         (i = r && r[r.length - 1]),
                         (this.hideThread = (t.conversation || this.dataAttr("conversation")) == "none" || ~f.indexOf(this.classAttr, "tw-hide-thread")),
                         (this.hideCard = (t.cards || this.dataAttr("cards")) == "hidden" || ~f.indexOf(this.classAttr, "tw-hide-media"));
                     if ((t.align || this.attr("align")) == "left" || ~f.indexOf(this.classAttr, "tw-align-left")) {
                         this.align = "left";
                     } else {
                         if ((t.align || this.attr("align")) == "right" || ~f.indexOf(this.classAttr, "tw-align-right")) {
                             this.align = "right";
                         } else {
                             if ((t.align || this.attr("align")) == "center" || ~f.indexOf(this.classAttr, "tw-align-center")) {
                                 (this.align = "center"), this.containerWidth > this.dimensions.MIN_WIDTH * (1 / 0.7) && this.width > this.containerWidth * 0.7 && (this.width = this.containerWidth * 0.7);
                             }
                         }
                     }
                     (this.narrow = t.narrow || this.width <= this.dimensions.NARROW_WIDTH), this.narrow && this.classAttr.push("var-narrow"), (this.tweetId = t.tweetId || (i && c.status(i.href)));
                 }
                 var v = "2.0",
                     m = "tweetembed",
                     g = {},
                     y = [],
                     b = [];
                 (T.prototype = new n()),
                     f.aug(T.prototype, {
                         renderedClassNames: "twitter-tweet twitter-tweet-rendered",
                         dimensions: { DEFAULT_HEIGHT: "0", DEFAULT_WIDTH: "500", NARROW_WIDTH: "350", MIN_WIDTH: "220", MIN_HEIGHT: "0", WIDE_MEDIA_PADDING: 32, NARROW_MEDIA_PADDING: 32 },
                         create: function (e) {
                             var t = this.sandbox.createElement("div"),
                                 r,
                                 i;
                             (t.innerHTML = e), (r = t.children[0] || !1);
                             if (!r) {
                                 return;
                             }
                             return (
                                 this.theme == "dark" && this.classAttr.push("thm-dark"),
                                 this.linkColor && this.addSiteStyles(),
                                 s.present(r, "media-forward") && (this.fullBleedPhoto = !0),
                                 this.augmentWidgets(r),
                                 n.retinize(r),
                                 (r.id = this.id),
                                 (r.className += " " + this.classAttr.join(" ")),
                                 (r.lang = this.lang),
                                 this.sandbox.setTitle(r.getAttribute("data-iframe-title") || "Tweet"),
                                 this.sandbox.appendChild(r).then(
                                     f.bind(function () {
                                         this.renderResolver.fulfill(this.sandbox);
                                     }, this)
                                 ),
                                 this.sandbox.style({
                                     cssText: "",
                                     display: "block",
                                     maxWidth: "99%",
                                     minWidth: this.dimensions.MIN_WIDTH + "px",
                                     padding: "0",
                                     borderRadius: "5px",
                                     margin: "10px 0",
                                     border: "#ddd 1px solid",
                                     borderTopColor: "#eee",
                                     borderBottomColor: "#bbb",
                                     boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                                     position: "absolute",
                                     visibility: "hidden",
                                 }),
                                 (i = this.layout(
                                     f.bind(function () {
                                         (this.predefinedWidth = this.width), (this.width = this.sandbox.width(this.width)), this.collapseRegions();
                                     }, this),
                                     "Insert Sandbox"
                                 )),
                                 i.then(
                                     f.bind(function () {
                                         this.constrainMedia(r, this.contentWidth(this.width)),
                                             this.setNarrow().then(
                                                 f.bind(function () {
                                                     this.layout(
                                                         f.bind(function () {
                                                             this.completeResolver.fulfill(this.sandbox.element());
                                                         }, this)
                                                     );
                                                 }, this)
                                             );
                                     }, this)
                                 ),
                                 w(r, this.baseScribeData(), this.partner, this.dnt),
                                 r
                             );
                         },
                         render: function (e, n) {
                             var r = "",
                                 i = this.tweetId;
                             return i
                                 ? (this.hideCard && (r += "c"),
                                   this.hideThread && (r += "t"),
                                   r && (i += "-" + r),
                                   this.rendered().then(
                                       f.bind(function (e) {
                                           this.srcEl &&
                                               this.srcEl.parentNode &&
                                               this.layout(
                                                   f.bind(function () {
                                                       this.srcEl && this.srcEl.parentNode && this.srcEl.parentNode.removeChild(this.srcEl);
                                                   }, this),
                                                   "Remove Embed Code"
                                               ),
                                               this.align == "center"
                                                   ? e.style({ margin: "7px auto", cssFloat: "none" })
                                                   : this.align && (this.width == this.dimensions.DEFAULT_WIDTH && (this.predefinedWidth = this.width = this.dimensions.NARROW_WIDTH), e.style({ cssFloat: this.align })),
                                               this.layout(
                                                   f.bind(function () {
                                                       this.height = this.sandbox.height(this.element.offsetHeight);
                                                   }, this)
                                               )
                                                   .then(
                                                       f.bind(function () {
                                                           return (
                                                               t.doLayoutAsync(),
                                                               this.layout(
                                                                   f.bind(function () {
                                                                       this.height = this.sandbox.height(this.element.offsetHeight);
                                                                   }, this)
                                                               )
                                                           );
                                                       }, this)
                                                   )
                                                   .then(
                                                       f.bind(function () {
                                                           e.onresize(f.bind(this.handleResize, this));
                                                       }, this)
                                                   ),
                                               e.style({ position: "static", visibility: "visible" }),
                                               t.doLayoutAsync();
                                       }, this)
                                   ),
                                   S(
                                       i,
                                       this.lang,
                                       f.bind(function (n) {
                                           this.ready().then(
                                               f.bind(function () {
                                                   (this.element = this.create(n)), this.readTimestampTranslations(), this.updateTimeStamps(), this.bindIntentHandlers(), t.doLayoutAsync();
                                               }, this)
                                           );
                                       }, this),
                                       f.bind(function () {
                                           E(this.tweetId, this.partner, this.dnt), this.completeResolver.fulfill(this.srcEl);
                                       }, this)
                                   ),
                                   y.push(this.rendered()),
                                   n && this.completed().then(n),
                                   this.completed())
                                 : (this.completeResolver.fulfill(this.srcEl), this.completed());
                         },
                         augmentWidgets: function (e) {
                             var t = o.one("twitter-follow-button", e, "A");
                             if (!t) {
                                 return;
                             }
                             t.setAttribute("data-related", this.related), t.setAttribute("data-partner", this.partner), t.setAttribute("data-dnt", this.dnt), t.setAttribute("data-show-screen-name", "false"), b.push(t.parentNode);
                         },
                         addUrlParams: function (e) {
                             var t = this,
                                 n = { related: this.related, partner: this.partner, original_referer: h.url(), tw_p: m };
                             return (
                                 (this.addUrlParams = i(n, function (e) {
                                     var n = o.ancestor(".tweet", e, t.element);
                                     return { tw_i: n.getAttribute("data-tweet-id") };
                                 })),
                                 this.addUrlParams(e)
                             );
                         },
                         baseScribeData: function () {
                             return { client_version: v, widget_origin: h.url(), widget_frame: h.frameUrl(), message: this.partner };
                         },
                         handleResize: function (e) {
                             var n = Math.min(this.dimensions.DEFAULT_WIDTH, Math.max(this.dimensions.MIN_WIDTH, Math.min(this.predefinedWidth || this.dimensions.DEFAULT_WIDTH, e)));
                             if (n == this.width) {
                                 return;
                             }
                             (this.width = n),
                                 this.setNarrow(),
                                 this.constrainMedia(this.element, this.contentWidth(n)),
                                 this.collapseRegions(),
                                 this.layout(
                                     f.bind(function () {
                                         (this.height = this.element.offsetHeight), this.sandbox.height(this.height);
                                     }, this),
                                     "Embed Resize"
                                 ),
                                 t.doLayoutAsync();
                         },
                         readTimestampTranslations: function () {
                             var e = this.element,
                                 t = "data-dt-",
                                 n = e.getAttribute(t + "months") || "";
                             this.datetime = new r(f.compact({ phrases: { AM: e.getAttribute(t + "am"), PM: e.getAttribute(t + "pm") }, months: n.split("|"), formats: { full: e.getAttribute(t + "full") } }));
                         },
                         updateTimeStamps: function () {
                             var e = o.one("long-permalink", this.element, "A"),
                                 n = e.getAttribute("data-datetime"),
                                 r = n && this.datetime.localTimeStamp(n),
                                 i = e.getElementsByTagName("TIME")[0];
                             if (!r) {
                                 return;
                             }
                             this.layout(function () {
                                 if (i && i.innerHTML) {
                                     i.innerHTML = r;
                                     return;
                                 }
                                 e.innerHTML = r;
                             }, "Update Timestamp"),
                                 t.doLayoutAsync();
                         },
                     }),
                     (T.fetchAndRender = function () {
                         var e = g,
                             n = [],
                             r,
                             i;
                         g = {};
                         if (e.keys) {
                             n = e.keys();
                         } else {
                             for (r in e) {
                                 e.hasOwnProperty(r) && n.push(r);
                             }
                         }
                         if (!n.length) {
                             return;
                         }
                         d.initPostLogging(),
                             (i = e[n[0]][0].lang),
                             p.tweets({
                                 ids: n.sort(),
                                 lang: i,
                                 complete: function (n) {
                                     f.forIn(n, function (t, n) {
                                         var r = e[t];
                                         f.forEach(r, function (e) {
                                             e.s && e.s.call(this, n);
                                         }),
                                             delete e[t];
                                     }),
                                         t.doLayout(),
                                         f.forIn(e, function (e, t) {
                                             f.forEach(t, function (t) {
                                                 t.f && t.f.call(this, e);
                                             });
                                         }),
                                         t.doLayout();
                                 },
                             }),
                             a.every.apply(null, y).then(function () {
                                 x(), d.flush();
                             });
                     }),
                     t.afterLoad(T.fetchAndRender),
                     e(T);
             }
         );
     });
     provide("dom/textsize", function (e) {
         function n(e, t, n) {
             var r = [],
                 i = 0,
                 s;
             for (; (s = n[i]); i++) {
                 r.push(s[0]), r.push(s[1]);
             }
             return e + t + r.join(":");
         }
         function r(e) {
             var t = e || "";
             return t.replace(/([A-Z])/g, function (e) {
                 return "-" + e.toLowerCase();
             });
         }
         var t = {};
         e(function (e, i, s) {
             var o = document.createElement("span"),
                 u = {},
                 a = "",
                 f,
                 l = 0,
                 c = 0,
                 h = [];
             (s = s || []), (i = i || ""), (a = n(e, i, s));
             if (t[a]) {
                 return t[a];
             }
             o.className = i + " twitter-measurement";
             try {
                 for (; (f = s[l]); l++) {
                     o.style[f[0]] = f[1];
                 }
             } catch (p) {
                 for (; (f = s[c]); c++) {
                     h.push(r(f[0]) + ":" + f[1]);
                 }
                 o.setAttribute("style", h.join(";") + ";");
             }
             return (o.innerHTML = e), document.body.appendChild(o), (u.width = o.clientWidth || o.offsetWidth), (u.height = o.clientHeight || o.offsetHeight), document.body.removeChild(o), delete o, (t[a] = u);
         });
     });
     provide("tfw/widget/tweetbase", function (e) {
         using("util/util", "tfw/widget/base", "util/querystring", "util/twitter", function (t, n, r, i) {
             function s(e) {
                 if (!e) {
                     return;
                 }
                 var t;
                 n.apply(this, [e]),
                     (t = this.params()),
                     (this.text = t.text || this.dataAttr("text")),
                     this.text && /\+/.test(this.text) && !/ /.test(this.text) && (this.text = this.text.replace(/\+/g, " ")),
                     (this.align = t.align || this.dataAttr("align") || ""),
                     (this.via = t.via || this.dataAttr("via")),
                     (this.placeid = t.placeid || this.dataAttr("placeid")),
                     (this.hashtags = t.hashtags || this.dataAttr("hashtags")),
                     (this.screen_name = i.screenName(t.screen_name || t.screenName || this.dataAttr("button-screen-name"))),
                     (this.url = t.url || this.dataAttr("url"));
             }
             (s.prototype = new n()),
                 t.aug(s.prototype, {
                     parameters: function () {
                         var e = {
                             text: this.text,
                             url: this.url,
                             related: this.related,
                             lang: this.lang,
                             placeid: this.placeid,
                             original_referer: location.href,
                             id: this.id,
                             screen_name: this.screen_name,
                             hashtags: this.hashtags,
                             partner: this.partner,
                             dnt: this.dnt,
                             _: +new Date(),
                         };
                         return t.compact(e), r.encode(e);
                     },
                 }),
                 e(s);
         });
     });
     provide("tfw/widget/tweetbutton", function (e) {
         using("tfw/widget/tweetbase", "util/util", "util/querystring", "util/uri", "util/twitter", "dom/textsize", function (t, n, r, i, s, o) {
             function l(e) {
                 t.apply(this, [e]);
                 var r = this.params(),
                     o = r.count || this.dataAttr("count"),
                     l = r.size || this.dataAttr("size"),
                     c = i.getScreenNameFromPage();
                 this.classAttr.push("twitter-tweet-button");
                 if (r.type == "hashtag" || ~n.indexOf(this.classAttr, "twitter-hashtag-button")) {
                     (this.type = "hashtag"), this.classAttr.push("twitter-hashtag-button");
                 } else {
                     if (r.type == "mention" || ~n.indexOf(this.classAttr, "twitter-mention-button")) {
                         (this.type = "mention"), this.classAttr.push("twitter-mention-button");
                     }
                 }
                 (this.counturl = r.counturl || this.dataAttr("counturl")),
                     (this.searchlink = r.searchlink || this.dataAttr("searchlink")),
                     (this.button_hashtag = s.hashTag(r.button_hashtag || r.hashtag || this.dataAttr("button-hashtag"), !1)),
                     (this.size = l == "large" ? "l" : "m"),
                     this.type
                         ? ((this.count = "none"), c && (this.related = this.related ? c + "," + this.related : c))
                         : ((this.text = this.text || u),
                           (this.url = this.url || i.getCanonicalURL() || a),
                           (this.count = ~n.indexOf(f, o) ? o : "horizontal"),
                           (this.count = this.count == "vertical" && this.size == "l" ? "none" : this.count),
                           (this.via = this.via || c));
             }
             var u = document.title,
                 a = encodeURI(location.href),
                 f = ["vertical", "horizontal", "none"];
             (l.prototype = new t()),
                 n.aug(l.prototype, {
                     parameters: function () {
                         var e = {
                             text: this.text,
                             url: this.url,
                             via: this.via,
                             related: this.related,
                             count: this.count,
                             lang: this.lang,
                             counturl: this.counturl,
                             searchlink: this.searchlink,
                             placeid: this.placeid,
                             original_referer: location.href,
                             id: this.id,
                             size: this.size,
                             type: this.type,
                             screen_name: this.screen_name,
                             button_hashtag: this.button_hashtag,
                             hashtags: this.hashtags,
                             align: this.align,
                             partner: this.partner,
                             dnt: this.dnt,
                             _: +new Date(),
                         };
                         return n.compact(e), r.encode(e);
                     },
                     height: function () {
                         return this.count == "vertical" ? 62 : this.size == "m" ? 20 : 28;
                     },
                     width: function () {
                         var e = { ver: 8, cnt: 14, btn: 24, xlcnt: 18, xlbtn: 38 },
                             t = this.count == "vertical",
                             r = this.type == "hashtag" && this.button_hashtag ? "Tweet %{hashtag}" : this.type == "mention" && this.screen_name ? "Tweet to %{name}" : "Tweet",
                             i = this._(r, { name: "@" + this.screen_name, hashtag: "#" + this.button_hashtag }),
                             s = this._("K"),
                             u = this._("100K+"),
                             a = (t ? "8888" : "88888") + s,
                             f = 0,
                             l = 0,
                             c = 0,
                             h = 0,
                             p = this.styles.base,
                             d = p;
                         return (
                             ~n.indexOf(["ja", "ko"], this.lang) ? (a += this._("10k unit")) : (a = a.length > u.length ? a : u),
                             t ? ((d = p.concat(this.styles.vbubble)), (h = e.ver), (c = e.btn)) : this.size == "l" ? ((p = d = p.concat(this.styles.large)), (c = e.xlbtn), (h = e.xlcnt)) : ((c = e.btn), (h = e.cnt)),
                             this.count != "none" && (l = o(a, "", d).width + h),
                             (f = o(i, "", p.concat(this.styles.button)).width + c),
                             t ? (f > l ? f : l) : (this.calculatedWidth = f + l)
                         );
                     },
                     render: function (e, t) {
                         var r = twttr.widgets.config.assetUrl() + "/widgets/tweet_button.1395870373.html#" + this.parameters(),
                             i;
                         return (
                             this.count && this.classAttr.push("twitter-count-" + this.count),
                             (i = this.create(r, this.dimensions(), { title: this._("Twitter Tweet Button") }).then(
                                 n.bind(function (e) {
                                     return (this.element = e);
                                 }, this)
                             )),
                             t && i.then(t),
                             i
                         );
                     },
                 }),
                 e(l);
         });
     });
     provide("tfw/widget/follow", function (e) {
         using("util/util", "tfw/widget/base", "util/querystring", "util/uri", "util/twitter", "util/promise", "dom/textsize", function (t, n, r, i, s, o, u) {
             function a(e) {
                 if (!e) {
                     return;
                 }
                 var t, r, i, o;
                 n.apply(this, [e]),
                     (t = this.params()),
                     (r = t.size || this.dataAttr("size")),
                     (i = t.showScreenName || this.dataAttr("show-screen-name")),
                     (o = t.count || this.dataAttr("count")),
                     this.classAttr.push("twitter-follow-button"),
                     (this.showScreenName = i != "false"),
                     (this.showCount = t.showCount !== !1 && this.dataAttr("show-count") != "false"),
                     o == "none" && (this.showCount = !1),
                     (this.explicitWidth = t.width || this.dataAttr("width") || ""),
                     (this.screenName = t.screen_name || t.screenName || s.screenName(this.attr("href"))),
                     (this.preview = t.preview || this.dataAttr("preview") || ""),
                     (this.align = t.align || this.dataAttr("align") || ""),
                     (this.size = r == "large" ? "l" : "m");
             }
             (a.prototype = new n()),
                 t.aug(a.prototype, {
                     parameters: function () {
                         var e = {
                             screen_name: this.screenName,
                             lang: this.lang,
                             show_count: this.showCount,
                             show_screen_name: this.showScreenName,
                             align: this.align,
                             id: this.id,
                             preview: this.preview,
                             size: this.size,
                             partner: this.partner,
                             dnt: this.dnt,
                             _: +new Date(),
                         };
                         return t.compact(e), r.encode(e);
                     },
                     width: function () {
                         if (this.calculatedWidth) {
                             return this.calculatedWidth;
                         }
                         if (this.explicitWidth) {
                             return this.explicitWidth;
                         }
                         var e = { cnt: 13, btn: 24, xlcnt: 22, xlbtn: 38 },
                             n = this.showScreenName ? "Follow %{screen_name}" : "Follow",
                             r = this._(n, { screen_name: "@" + this.screenName }),
                             i = ~t.indexOf(["ja", "ko"], this.lang) ? this._("10k unit") : this._("M"),
                             s = this._("%{followers_count} followers", { followers_count: "88888" + i }),
                             o = 0,
                             a = 0,
                             f,
                             l,
                             c = this.styles.base;
                         return (
                             this.size == "l" ? ((c = c.concat(this.styles.large)), (f = e.xlbtn), (l = e.xlcnt)) : ((f = e.btn), (l = e.cnt)),
                             this.showCount && (a = u(s, "", c).width + l),
                             (o = u(r, "", c.concat(this.styles.button)).width + f),
                             (this.calculatedWidth = o + a)
                         );
                     },
                     render: function (e, n) {
                         if (!this.screenName) {
                             return o.reject("Missing Screen Name").then(n);
                         }
                         var r = twttr.widgets.config.assetUrl() + "/widgets/follow_button.1395870373.html#" + this.parameters(),
                             i = this.create(r, this.dimensions(), { title: this._("Twitter Follow Button") }).then(
                                 t.bind(function (e) {
                                     return (this.element = e);
                                 }, this)
                             );
                         return n && i.then(n), i;
                     },
                 }),
                 e(a);
         });
     });
     !(function () {
         (window.twttr = window.twttr || {}),
             (twttr.host = twttr.host || "platform.twitter.com"),
             using("util/domready", "util/env", function (e, t) {
                 function n(e) {
                     return (e || !/^http\:$/.test(window.location.protocol)) && !twttr.ignoreSSL ? "https" : "http";
                 }
                 if (t.ie6()) {
                     return;
                 }
                 if (twttr.widgets && twttr.widgets.loaded) {
                     return twttr.widgets.load(), !1;
                 }
                 if (twttr.init) {
                     return !1;
                 }
                 (twttr.init = !0),
                     (twttr._e = twttr._e || []),
                     (twttr.ready =
                         twttr.ready ||
                         function (e) {
                             twttr.widgets && twttr.widgets.loaded ? e(twttr) : twttr._e.push(e);
                         }),
                     using.path.length || (using.path = n() + "://" + twttr.host + "/js"),
                     (twttr.ignoreSSL = twttr.ignoreSSL || !1);
                 var r = [];
                 (twttr.events = {
                     bind: function (e, t) {
                         return r.push([e, t]);
                     },
                 }),
                     e(function () {
                         using("tfw/widget/base", "tfw/widget/follow", "tfw/widget/tweetbutton", "tfw/widget/embed", "tfw/widget/timeline", "tfw/widget/intent", "tfw/util/article", "util/events", "util/util", function (
                             e,
                             t,
                             i,
                             s,
                             o,
                             u,
                             a,
                             f,
                             l
                         ) {
                             function m(e) {
                                 var t = twttr.host;
                                 return n(e) == "https" && twttr.secureHost && (t = twttr.secureHost), n(e) + "://" + t;
                             }
                             function g() {
                                 using("tfw/hub/client", function (e) {
                                     (twttr.events.hub = e.init(p)), e.init(p, !0);
                                 });
                             }
                             var c,
                                 h,
                                 p = {
                                     widgets: {
                                         "a.twitter-share-button": i,
                                         "a.twitter-mention-button": i,
                                         "a.twitter-hashtag-button": i,
                                         "a.twitter-follow-button": t,
                                         "blockquote.twitter-tweet": s,
                                         "a.twitter-timeline": o,
                                         "div.twitter-timeline": o,
                                         body: u,
                                     },
                                 },
                                 d = twttr.events && twttr.events.hub ? twttr.events : {},
                                 v;
                             (p.assetUrl = m),
                                 (twttr.widgets = twttr.widgets || {}),
                                 l.aug(twttr.widgets, {
                                     config: { assetUrl: m },
                                     load: function (t) {
                                         e.init(p), e.embed(t), (twttr.widgets.loaded = !0);
                                     },
                                     createShareButton: function (t, n, r, s) {
                                         if (!t || !n) {
                                             return r && r(!1);
                                         }
                                         s = l.aug({}, s || {}, { url: t, targetEl: n });
                                         var o = new i(s);
                                         return e.doLayout(), o.render(p, r), o.completed();
                                     },
                                     createHashtagButton: function (t, n, r, s) {
                                         if (!t || !n) {
                                             return r && r(!1);
                                         }
                                         s = l.aug({}, s || {}, { hashtag: t, targetEl: n, type: "hashtag" });
                                         var o = new i(s);
                                         return e.doLayout(), o.render(p, r), o.completed();
                                     },
                                     createMentionButton: function (t, n, r, s) {
                                         if (!t || !n) {
                                             return r && r(!1);
                                         }
                                         s = l.aug({}, s || {}, { screenName: t, targetEl: n, type: "mention" });
                                         var o = new i(s);
                                         return e.doLayout(), o.render(p, r), o.completed();
                                     },
                                     createFollowButton: function (n, r, i, s) {
                                         if (!n || !r) {
                                             return i && i(!1);
                                         }
                                         s = l.aug({}, s || {}, { screenName: n, targetEl: r });
                                         var o = new t(s);
                                         return e.doLayout(), o.render(p, i), o.completed();
                                     },
                                     createTweet: function (t, n, r, i) {
                                         if (!t || !n) {
                                             return r && r(!1);
                                         }
                                         i = l.aug({}, i || {}, { tweetId: t, targetEl: n });
                                         var o = new s(i);
                                         return e.doLayout(), o.render(p, r), s.fetchAndRender(), o.completed();
                                     },
                                     createTimeline: function (t, n, r, i) {
                                         if (!t || !n) {
                                             return r && r(!1);
                                         }
                                         i = l.aug({}, i || {}, { widgetId: t, targetEl: n });
                                         var s = new o(i);
                                         return e.doLayout(), s.render(p, r), s.completed();
                                     },
                                 }),
                                 l.aug(twttr.events, d, f.Emitter),
                                 (v = twttr.events.bind),
                                 (twttr.events.bind = function (e, t) {
                                     g(), (this.bind = v), this.bind(e, t);
                                 });
                             for (c = 0; (h = r[c]); c++) {
                                 twttr.events.bind(h[0], h[1]);
                             }
                             for (c = 0; (h = twttr._e[c]); c++) {
                                 h(twttr);
                             }
                             (twttr.ready = function (e) {
                                 e(twttr);
                             }),
                                 /twitter\.com(\:\d+)?$/.test(document.location.host) &&
                                     (twttr.widgets.createTimelinePreview = function (t, n, r) {
                                         if (!p || !n) {
                                             return r && r(!1);
                                         }
                                         var i = new o({ previewParams: t, targetEl: n, linkColor: t.link_color, theme: t.theme, height: t.height });
                                         return e.doLayout(), i.render(p, r), i.completed();
                                     }),
                                 (twttr.widgets.createTweetEmbed = twttr.widgets.createTweet),
                                 twttr.widgets.load();
                         });
                     });
             });
     })();
 });
 
 /*
  * Hot deals scripts
  * file: store/js/hotdeals.js
  *
  * Adding functions for expiring animation and
  * counting down time until expired.
  *
  * @author	Andreas Lanjerud, alanjerud@ea.com
  * @created	2009-12-08
  */
 (function (b) {
     var e = b.$,
         c = b._,
         a = b.BFH,
         f = a.Store,
         d = function (g) {
             return g < 10 ? "0" + g : g;
         };
     e.fn.animBg = function (m, g) {
         if (m && typeof m === "string") {
             b.clearInterval(e(this).data("anim"));
             return this;
         }
         var k = e(this);
         var l = { interval: 100 };
         g = typeof m === "object" && g === undefined ? m : g;
         var l = e.extend({}, l, g);
         var j;
         if (!l.step && !l.steps) {
             return this;
         }
         j = b.setInterval(function () {
             var n = parseInt(k.css("background-position"), 10);
             k.css("background-position", (-(l.step * l.steps) >= n - l.step ? 0 : n - l.step) + "px 0");
         }, l.interval);
         k.data("anim", j);
         return this;
     };
     e.fn.countdownTime = function () {
         var j = e(this),
             l = new Date(),
             k = new Date(),
             g = b.setInterval(function () {
                 var n = j.data("seconds_to_expire"),
                     q = ["s", "m", "h"],
                     s = 0,
                     r = 0,
                     p,
                     m = "";
                 if (n === undefined) {
                     n = 0;
                     p = e.trim(j.html());
                     c(p.split(" ")).each(function (v) {
                         var u = /\d+/.exec(v),
                             t;
                         if (u !== null) {
                             u = u[0];
                             n += u * Math.pow(60, 2 - s);
                             t = v.replace(u, "");
                             if (t.length > 0) {
                                 j.data(q[r], t);
                                 r += 1;
                             }
                             s += 1;
                         } else {
                             j.data(q[r], " " + v);
                             r += 1;
                         }
                     });
                     k.setTime(l.getTime() + parseInt(n, 10) * 1000);
                 }
                 if (n <= 0) {
                     return;
                 }
                 n = Math.floor((k - new Date()) / 1000);
                 j.data("seconds_to_expire", n);
                 c(c.range(0, 3)).each(function (u) {
                     var v = Math.floor((u === 0 ? n : n % Math.pow(60, 3 - u)) / Math.pow(60, 2 - u)),
                         t = j.data(q[u]) || "";
                     m = m + d(v) + t + " ";
                 });
                 j.html(m);
             }, 998);
         return this;
     };
     e(function () {
         e(".expires_time").each(function () {
             e(this).countdownTime();
         });
         if (e("body").is(".hotDeals ")) {
             var j = e("#hotdeals .hotdeal_status"),
                 g = j.find(".item_container");
             j.click(function (l) {
                 l.preventDefault();
                 var m = e(this).data("id"),
                     k = new f.BuyItemView({ model: new f.Offer(c(f.hotDealItems).findWhere({ id: m })), csrf: f.hotdealsCsrf, buyUrl: f.buyUrl });
             });
             j.filter(".hotdeal_expiring").find(".hotdeal_icon").animBg({ step: 120, steps: 3, interval: 250 });
             b.setTimeout(function () {
                 var k = c(g).max(function (l) {
                     return e(l).height();
                 });
                 g.height(e(k).height());
             }, 2000);
         }
     });
 })(this);
 (function (a) {
     var b = a._,
         c = a.jQuery,
         d = a.document,
         e = a.Backbone;
     c(function () {
         var f = a.BFH,
             j = f.Store,
             g = c("#deal-of-the-day").find(".inner");
         b(j.customDeals).each(function (l) {
             var m = new j.Offer(l),
                 k = new j.DotdView({ model: m });
             g.append(new j.TimeLeftView({ time: m.get("timeLeft") }).render());
             g.append(k.render());
         });
         if (j.randomDeals && j.randomDeals.length > 0) {
             g.append(new j.TimeLeftView({ time: j.randomDealsTimeLeft }).render());
             b(j.randomDeals).each(function (l) {
                 var m = new j.Offer(l),
                     k = new j.DotdView({ model: m });
                 g.append(k.render());
             });
         }
         g.find(".expires_time").each(function () {
             c(this).countdownTime();
         });
     });
 })(this);
 (function (q) {
     var j = q.jQuery,
         t = (q.BFH = q.BFH || {}),
         d = (t.Plugin = t.Plugin || {}),
         x = t.env.browser,
         a = q.location,
         p = q.chrome,
         l = t.env.agt,
         s = q.InstallTrigger,
         r = q.console || {
             log: function (z) {
                 j("body").append('<span style="display: none;">' + z + "</span>");
             },
         },
         g = function (A, z) {
             if (z === 0) {
                 r.log("install succeeded");
             } else {
                 r.log("install failed");
             }
         },
         c = function (B, z) {
             var A;
             r.log("Installed: " + B + ", latest: " + z);
             for (A = 0; A < z.length; A += 1) {
                 if (z[A] > B[A]) {
                     return true;
                 }
             }
             return false;
         },
         n = function (z) {
             if (typeof z.start === "function" || typeof z.start === "unknown") {
                 return !c(z.getVersion().split("."), d.settings.latestVersion);
             }
             return false;
         },
         e = function () {
             if (x.firefox) {
                 s.install({ "Battlefield Heroes Updater": d.settings.firefoxUrl }, g);
             } else {
                 if (x.chrome) {
                     j(".ch_install .install").attr("href", d.settings.chromeUrl);
                     j(".instructions.ch_install .install").click(function () {
                         r.log("install!");
                         p.webstore.install(
                             undefined,
                             function (z) {
                                 r.log("success");
                                 a.href = t.patcher.redirectURL;
                             },
                             function (z) {
                                 r.log("error");
                                 r.log(z);
                             }
                         );
                     });
                 }
             }
         },
         k = function (D, B) {
             var F = d.params,
                 C = parseInt(F.start, 10),
                 A = new Date(),
                 G = Date.UTC(A.getUTCFullYear(), A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), 0),
                 z = (C - G) / 1000,
                 E = "";
             E += '-sessionId "' + F.sessionId + '" ';
             E += '-serverDeltaTime "' + z + '" ';
             E += '-loggedIn "' + F.loggedIn + '" ';
             E += '-showStaticAdImage "false" ';
             E += '-lang "' + F.lang + '" ';
             E += '-ip "' + F.ip + '" ';
             E += '-soldierName "' + (B || F.soldierName) + '" ';
             E += "-logIntoSoldier " + F.logIntoSoldier + " ";
             if (F.dc) {
                 E += "-dc 1 ";
             }
             r.log(E);
             D.start(E, "");
         },
         u = function () {
             return l.indexOf("win") !== -1 || l.indexOf("16bit") !== -1;
         },
         y = function () {
             var z = x.firefox && x.version > 1.8,
                 B = x.chrome,
                 A = x.ie && x.version >= 7;
             return z || B || A;
         },
         m = function () {
             var A,
                 z = j("body");
             j("#westPatcher").remove();
             if (x.ie) {
                 A = j('<object id="westPatcher" classid="clsid:' + d.settings.activexClassID + '" codebase="' + (l.indexOf("x64") !== -1 ? d.settings.activex64Url : d.settings.activexUrl) + '" width="0" height="0" />');
             } else {
                 A = j('<object id="westPatcher" type="' + d.settings.mimeType + '" width="0" height="0" />');
             }
             z.append(A);
             return A[0];
         },
         f = function () {
             var z = m();
             r.log("placePlugin", z.start);
             if (z && n(z)) {
                 r.log("Redirect to launch page");
                 a.href = d.params.launchURL;
             } else {
                 if (u() && y()) {
                     r.log("Download");
                     e();
                 } else {
                     if (u()) {
                         r.log("Browser not supported.");
                         j(".supported").hide();
                         j(".notSupportedBrowser").show();
                     } else {
                         r.log("OS not supported.");
                         j(".supported").hide();
                         j(".notWindows").show();
                     }
                 }
             }
         },
         v = function (B, z) {
             var A = new Date().getTime();
             p.webstore.install(
                 undefined,
                 function (C) {
                     r.log("success", C);
                     k(B, z);
                 },
                 function (D) {
                     var C = new Date().getTime();
                     r.log("error", D, C - A);
                     if (C - A > 200) {
                         r.log("chrome hack redirect");
                         a.href = d.params.installURL;
                     } else {
                         r.log("start manual");
                         k(B, z);
                     }
                 }
             );
         },
         b = function (A, z) {
             var B = m();
             r.log("placePlugin", B.start);
             if (!x.chrome) {
                 if (B && n(B)) {
                     r.log("start");
                     k(B, A);
                 } else {
                     r.log("else");
                     a.href = d.params.installURL;
                 }
             } else {
                 if (B && typeof B.start === "function") {
                     if (d.chromeWebstoreInstalled()) {
                         r.log("start");
                         k(B, A);
                     } else {
                         if (z) {
                             k(B, A);
                         } else {
                             v(B, A);
                         }
                     }
                 } else {
                     a.href = d.params.installURL;
                 }
             }
         };
     d.start = b;
     d.install = f;
     d.isManualChromeInstallation = function () {
         var z = m();
         return z && typeof z.start === "function" && !d.chromeWebstoreInstalled();
     };
     d.chromeWebstoreInstalled = function () {
         return p && p.app && p.app.getDetails() && !!p.app.getDetails().update_url;
     };
 })(this);
 (function (b) {
     var a = (b.BFH = b.BFH || {}),
         d = "5,0,203,0",
         c = d.replace(/,/g, ".");
     a.Plugin = a.Plugin || {};
     a.Plugin.settings = {
         latestVersion: d.split(","),
         mimeType: "application/x-ea-bfhupdater",
         ffPluginDLLResourceName: "EA Battlefield Heroes Updater",
         activexUrl: "/static/updater/BFHUpdater_" + c + ".cab#version=" + d,
         activex64Url: "/static/updater/BFHUpdater_x64_" + c + ".cab#version=" + d,
         activexClassID: "784797A8-342D-4072-9486-03C8D0F2F0A1",
         firefoxUrl: "/static/updater/BFHUpdater_" + c + ".xpi",
         chromeUrl: "/static/updater/BFHUpdater_" + c + ".crx",
     };
 })(this);
 