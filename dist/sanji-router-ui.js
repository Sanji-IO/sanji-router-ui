!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("angular"),require("sanji-logger-ui"),require("angular-ui-router")):"function"==typeof define&&define.amd?define(["angular","sanji-logger-ui","angular-ui-router"],r):"object"==typeof exports?exports.sjRouter=r(require("angular"),require("sanji-logger-ui"),require("angular-ui-router")):e.sjRouter=r(e.angular,e.sjLogger,e.uiRouter)}(this,function(e,r,t){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,r,t){Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=4)}([function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),u=["$stateProvider","$urlRouterProvider"],i=function(){function e(){for(var r=this,t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];n(this,e),e.$inject.forEach(function(e,t){return r[e]=o[t]}),this.config={defaultRoute:"/",docTitle:void 0,resolveAlways:{}},this.configure=function(e){return Object.assign(r.config,e)}}return o(e,[{key:"$get",value:function(e,r,t,n){"ngInject";function o(){u(),i()}function u(){r.$on("$stateChangeError",function(r,t,o,u,i,a){if(!g){p.errors++,g=!0;var c=t&&(t.title||t.name||t.loadedTemplateUrl)||"unknown target",f="Error routing to "+c+". "+a;n.error(f,[t]),e.path(l.defaultRoute)}})}function i(){r.$on("$stateChangeSuccess",function(e,t){p.changes++,g=!1;var n=l.docTitle+" "+(t.title||"");r.title=n})}function a(e,r){e.forEach(function(e){e.config.resolve=Object.assign(e.config.resolve||{},l.resolveAlways),f.state(e.state,e.config)}),r&&!d&&(d=!0,s.otherwise(r))}function c(){return t.get()}var f=this.$stateProvider,s=this.$urlRouterProvider,l=this.config,g=!1,d=!1,p={errors:0,changes:0};return o(),{stateCounts:p,configureStates:a,getStates:c}}}]),e}();i.$inject=u,r.a=i},function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r){e.exports=t},function(e,r,t){"use strict";var n=t(1),o=n&&n.__esModule?function(){return n.default}:function(){return n};t.d(o,"a",o);var u=t(3),i=u&&u.__esModule?function(){return u.default}:function(){return u};t.d(i,"a",i);var a=t(2),c=a&&a.__esModule?function(){return a.default}:function(){return a};t.d(c,"a",c);var f=t(0);t.d(r,"sjRouter",function(){return s});var s=o.a.module("sanji.router",[i.a,a.sjLogger]).provider("routerHelper",f.a).name}])});
