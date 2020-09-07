/*!
 * Vue-intercom v0.0.1
 * (c) 2019-2020 Mathieu Stanowski
 */
import t from"vue";var e=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};var n=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r};var r=function(t){if(Array.isArray(t))return n(t)};var o=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)};var i=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}};var c=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var a=function(t){return r(t)||o(t)||i(t)||c()};function u(){var t;if(window.Intercom)return(t=window).Intercom.apply(t,arguments)}function f(t,e){t.app_id||(t.app_id=e),e?u("boot",t):console.warn("You didn't specified Itercom appId. Please check your configuration.")}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var n=arguments,r=1;r<arguments.length;r++){var o=null!=n[r]?n[r]:{};r%2?s(Object(o),!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function d(t,n){var r=n.appId,o=new t({data:function(){return{ready:!1,visible:!1,unreadCount:0}}}),i={_vm:o};return Object.defineProperties(i,function(t,n){return n.reduce((function(n,r){return p(p({},n),{},e({},r,{get:function(){return t[r]}}))}),{})}(o,["ready","visible","unreadCount"])),i._call=u,i._init=function(){return function(t){t.ready=!0,u("onHide",(function(){return t.visible=!1})),u("onShow",(function(){return t.visible=!0})),u("onUnreadCountChange",(function(e){return t.unreadCount=e}))}(o)},i.boot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f(t,r)},i.shutdown=function(){return u("shutdown")},i.update=function(){for(var t=arguments,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=t[r];return u.apply(void 0,["update"].concat(n))},i.show=function(){return u("show")},i.hide=function(){return u("hide")},i.showMessages=function(){return u("showMessages")},i.showNewMessage=function(t){return u.apply(void 0,["showNewMessage"].concat(a((n=t)instanceof(e=String)||null!=n&&n.constructor===e?[t]:[])));var e,n},i.trackEvent=function(t){for(var e=arguments,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=e[o];return u.apply(void 0,["trackEvent"].concat([t].concat(r)))},i.startTour=function(t){for(var e=arguments,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=e[o];return u.apply(void 0,["startTour"].concat([t].concat(r)))},i.getVisitorId=function(){return u("getVisitorId")},i}function l(t,e){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.intercom.io/widget/".concat(t);var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r),n.onload=e}function v(t,e){if(window&&document){var n=function(){return l(t,e)};"complete"===document.readyState?l(t,e):window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1)}}var y=!1;var w={version:"0.0.1",install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t!==e&&console.error("Multiple instances of Vue detected.");var r=n.appId,o=d(e,{appId:r});Object.defineProperty(e.prototype,"$intercom",{get:function(){return o}}),e.mixin({beforeCreate:function(){var t=this;if(!y){if("function"==typeof window.Intercom)this.$intercom._init(),this.$intercom._call("reattach_activator"),this.$intercom.update();else{var e=function t(){for(var e=arguments,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=e[o];return t.c(r)};e.q=[],e.c=function(t){return e.q.push(t)},window.Intercom=e,v(r,(function(){return t.$intercom._init()}))}y=!0}}})}};function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var g=w.install;w.install=function(t,n){g.call(w,t,function(t){for(var n=arguments,r=1;r<arguments.length;r++){var o=null!=n[r]?n[r]:{};r%2?b(Object(o),!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},n))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(w);export default w;