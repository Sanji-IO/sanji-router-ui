!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("sanji-logger-ui"),require("angular-ui-router")):"function"==typeof define&&define.amd?define(["angular","sanji-logger-ui","angular-ui-router"],t):"object"==typeof exports?exports.sjRouter=t(require("angular"),require("sanji-logger-ui"),require("angular-ui-router")):e.sjRouter=t(e.angular,e.sjLogger,e.uiRouter)}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,t,r){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=["$stateProvider","$urlRouterProvider"],u=function(){function e(){for(var t=this,n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];r(this,e),e.$inject.forEach(function(e,r){return t[e]=o[r]}),this.config={defaultRoute:"/",docTitle:void 0,resolveAlways:{}},this.configure=function(e){return Object.assign(t.config,e)}}return n(e,[{key:"$get",value:["$location","$rootScope","$state","logger",function(e,t,r,n){"ngInject";function o(){u(),i()}function u(){t.$on("$stateChangeError",function(t,r,o,u,i,a){if(!g){p.errors++,g=!0;var c=r&&(r.title||r.name||r.loadedTemplateUrl)||"unknown target",s="Error routing to "+c+". "+a;n.error(s,[r]),e.path(l.defaultRoute)}})}function i(){t.$on("$stateChangeSuccess",function(e,r){p.changes++,g=!1;var n=l.docTitle+" "+(r.title||"");t.title=n})}function a(e,t){e.forEach(function(e){e.config.resolve=Object.assign(e.config.resolve||{},l.resolveAlways),s.state(e.state,e.config)}),t&&!d&&(d=!0,f.otherwise(t))}function c(){return r.get()}var s=this.$stateProvider,f=this.$urlRouterProvider,l=this.config,g=!1,d=!1,p={errors:0,changes:0};return o(),{stateCounts:p,configureStates:a,getStates:c}}]}]),e}();u.$inject=o,t.default=u},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.sjRouter=void 0;var o=r(1),u=n(o),i=r(3),a=n(i),c=r(2),s=r(0),f=n(s),l=u.default.module("sanji.router",[a.default,c.sjLogger]).provider("routerHelper",f.default).name;t.sjRouter=l}])});