!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("angular"),require("sanji-logger-ui"),require("angular-ui-router")):"function"==typeof define&&define.amd?define(["angular","sanji-logger-ui","angular-ui-router"],n):"object"==typeof exports?exports.sjRouter=n(require("angular"),require("sanji-logger-ui"),require("angular-ui-router")):t.sjRouter=n(t.angular,t.sjLogger,t.uiRouter)}(this,function(t,n,e){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(44),u=r(o),i=e(46),f=r(i),c=e(45),a=r(c),s=e(43),l=r(s),p=u["default"].module("sanji.router",[f["default"],a["default"]]);p.provider("routerHelper",l["default"]),n["default"]=p=p.name,t.exports=n["default"]},function(t,n,e){t.exports=!e(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(4),o=e(2),u=e(22),i=e(26),f="prototype",c=function(t,n,e){var a,s,l,p=t&c.F,d=t&c.G,v=t&c.S,g=t&c.P,h=t&c.B,y=t&c.W,x=d?o:o[n]||(o[n]={}),b=x[f],j=d?r:v?r[n]:(r[n]||{})[f];d&&(e=n);for(a in e)s=!p&&j&&void 0!==j[a],s&&a in x||(l=s?j[a]:e[a],x[a]=d&&"function"!=typeof j[a]?e[a]:h&&s?u(l,r):y&&j[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(l):g&&"function"==typeof l?u(Function.call,l):l,g&&((x.virtual||(x.virtual={}))[a]=l,t&c.R&&b&&!b[a]&&i(b,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(19),o=e(27),u=e(39),i=Object.defineProperty;n.f=e(1)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(8),o=e(6);t.exports=function(t){return r(o(t))}},function(t,n,e){t.exports={"default":e(16),__esModule:!0}},function(t,n,e){t.exports={"default":e(17),__esModule:!0}},function(t,n){"use strict";n.__esModule=!0,n["default"]=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(13),u=r(o);n["default"]=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u["default"])(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){e(41),t.exports=e(2).Object.assign},function(t,n,e){e(42);var r=e(2).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(11),o=e(37),u=e(36);t.exports=function(t){return function(n,e,i){var f,c=r(n),a=o(c.length),s=u(i,a);if(t&&e!=e){for(;a>s;)if(f=c[s++],f!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(5),o=e(4).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(9),o=e(33);t.exports=e(1)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(1)&&!e(3)(function(){return 7!=Object.defineProperty(e(23)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(31),o=e(29),u=e(32),i=e(38),f=e(8),c=Object.assign;t.exports=!c||e(3)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=i(t),c=arguments.length,a=1,s=o.f,l=u.f;c>a;)for(var p,d=f(arguments[a++]),v=s?r(d).concat(s(d)):r(d),g=v.length,h=0;g>h;)l.call(d,p=v[h++])&&(e[p]=d[p]);return e}:c},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(25),o=e(11),u=e(20)(!1),i=e(34)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=i&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~u(a,e)||a.push(e));return a}},function(t,n,e){var r=e(30),o=e(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(35)("keys"),o=e(40);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(4),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,n,e){var r=e(10),o=Math.max,u=Math.min;t.exports=function(t,n){return t=r(t),0>t?o(t+n,0):u(t,n)}},function(t,n,e){var r=e(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(6);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(7);r(r.S+r.F,"Object",{assign:e(28)})},function(t,n,e){var r=e(7);r(r.S+r.F*!e(1),"Object",{defineProperty:e(9).f})},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(12),u=r(o),i=e(14),f=r(i),c=e(15),a=r(c),s=["$stateProvider","$urlRouterProvider"],l=function(){function t(){for(var n=this,e=arguments.length,r=Array(e),o=0;e>o;o++)r[o]=arguments[o];(0,f["default"])(this,t),t.$inject.forEach(function(t,e){return n[t]=r[e]}),this.config={defaultRoute:"/",docTitle:void 0,resolveAlways:{}},this.configure=function(t){return(0,u["default"])(n.config,t)}}return(0,a["default"])(t,[{key:"$get",value:["$location","$rootScope","$state","logger",function(t,n,e,r){"ngInject";function o(){i(),f()}function i(){n.$on("$stateChangeError",function(n,e,o,u,i,f){if(!d){g.errors++,d=!0;var c=e&&(e.title||e.name||e.loadedTemplateUrl)||"unknown target",a="Error routing to "+c+". "+f;r.error(a,[e]),t.path(p.defaultRoute)}})}function f(){n.$on("$stateChangeSuccess",function(t,e){g.changes++,d=!1;var r=p.docTitle+" "+(e.title||"");n.title=r})}function c(t,n){t.forEach(function(t){t.config.resolve=(0,u["default"])(t.config.resolve||{},p.resolveAlways),s.state(t.state,t.config)}),n&&!v&&(v=!0,l.otherwise(n))}function a(){return e.get()}var s=this.$stateProvider,l=this.$urlRouterProvider,p=this.config,d=!1,v=!1,g={errors:0,changes:0};return o(),{stateCounts:g,configureStates:c,getStates:a}}]}]),t}();l.$inject=s,n["default"]=l,t.exports=n["default"]},function(n,e){n.exports=t},function(t,e){t.exports=n},function(t,n){t.exports=e}])});
//# sourceMappingURL=sanji-router-ui.js.map