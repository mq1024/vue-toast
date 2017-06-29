!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["mz-vue-toast"]=e():t["mz-vue-toast"]=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,n){n(7);var o=n(5)(n(1),n(6),"data-v-796c756f",null);t.exports=o.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{shown:!1}},props:{message:String,type:{type:String,default:"info"},duration:{type:Number,default:3e3},className:[String,Array],position:{type:String,default:"middle"},callback:Function},computed:{toastClass:function(){var t=[],e=this.className;return e&&("string"==typeof e&&t.push(e),Array.isArray(e)&&(t=t.concat(e))),t.join(" ")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n.n(o),a={install:function(t){var e=t.extend(r.a),n=[],o=function(){if(n.length){var t=n[0];return n.splice(0,1),t}return new e({el:document.createElement("div")})},a=function(t){t&&n.push(t)},s=function(t){t.parentNode&&t.parentNode.removeChild(t)};e.prototype.hide=function(t){this.shown=!1,s(this.$el),this.closed=!0,a(this),t&&t()};var i=function(t){return"string"==typeof t&&(t={message:t}),t||{}},c=function(e){var n=o();return n.closed=!1,clearTimeout(n.timer),n.timer=null,n.message=e.message||"",n.duration="number"==typeof e.duration&&e.duration>0?e.duration:3e3,n.type=e.type||"info",n.position=e.position||"middle",n.callback=e.callback||null,document.body.appendChild(n.$el),t.nextTick(function(){n.shown=!0,n.timer=setTimeout(function(){n.closed||n.hide(e.callback)},n.duration)}),n},u=function(t){return t=i(t),t=Object.assign({type:"info"},t),c(t)},d=function(t){return t=i(t),t=Object.assign({type:"success",position:"top"},t),c(t)},l=function(t){return t=i(t),t=Object.assign({type:"error"},t),c(t)},p={info:u,success:d,error:l};t.toast=t.prototype.$toast=p}};e.default=a},function(t,e,n){e=t.exports=n(4)(),e.push([t.i,"[data-v-796c756f]{box-sizing:border-box}.toast-mask[data-v-796c756f]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:transparent;z-index:1000}.toast[data-v-796c756f]{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);max-width:80%;padding:8px 16px;border-radius:4px;background:rgba(0,0,0,.6);color:#fff;box-sizing:border-box;text-align:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.toast-top[data-v-796c756f]{top:44px;left:50%;transform:translate3d(-50%,20px,0)}.toast-top-enter[data-v-796c756f]{opacity:0;transform:translate3d(-50%,0,0)}.toast-top-enter-active[data-v-796c756f]{transition:all .5s ease}.v-enter[data-v-796c756f]{opacity:0;transform:translate3d(-50%,20px,0)}.v-enter-active[data-v-796c756f]{transition:all .5s ease}.v-leave[data-v-796c756f]{opacity:1}.v-leave-active[data-v-796c756f]{transition:all .5s ease;opacity:0}.toast-message[data-v-796c756f]{font-size:14px;text-align:middle}.toast-icon[data-v-796c756f]{display:inline-block;width:20px;height:20px;border:1px solid;vertical-align:middle}@keyframes slideUp{0%{opacity:0;transform:translate3d(-50%,0,0)}to{opacity:1;transform:translate3d(-50%,20px,0)}}.slide-up[data-v-796c756f]{animation:slideUp .5s ease}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e){t.exports=function(t,e,n,o){var r,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,a=t.default);var i="function"==typeof a?a.options:a;if(e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),n&&(i._scopeId=n),o){var c=Object.create(i.computed||null);Object.keys(o).forEach(function(t){var e=o[t];c[t]=function(){return e}}),i.computed=c}return{esModule:r,exports:a,options:i}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],staticClass:"toast-mask"},[n("transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.shown&&"middle"==t.position,expression:"shown && position=='middle'"}],staticClass:"toast",class:t.toastClass},["info"!=t.type?n("i",{class:["toast-icon",t.type+"-icon"]}):t._e(),t._v(" "),n("span",{staticClass:"toast-message",domProps:{textContent:t._s(t.message)}})])]),t._v(" "),n("transition",{attrs:{name:"toast-top"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.shown&&"top"==t.position,expression:"shown && position=='top'"}],staticClass:"toast toast-top",class:t.toastClass},["info"!=t.type?n("i",{class:["toast-icon",t.type+"-icon"]}):t._e(),t._v(" "),n("span",{staticClass:"toast-message",domProps:{textContent:t._s(t.message)}})])])],1)},staticRenderFns:[]}},function(t,e,n){var o=n(3);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(8)("2aa32305",o,!0)},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=d[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(a(n.parts[r]));d[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function a(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(v)return m;o.parentNode.removeChild(o)}if(h){var a=f++;o=p||(p=r()),e=s.bind(null,o,a,!1),n=s.bind(null,o,a,!0)}else o=r(),e=i.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function s(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var a=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function i(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(9),d={},l=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var r=u(t,e);return o(r),function(e){for(var n=[],a=0;a<r.length;a++){var s=r[a],i=d[s.id];i.refs--,n.push(i)}e?(r=u(t,e),o(r)):r=[];for(var a=0;a<n.length;a++){var i=n[a];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete d[i.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],s=a[0],i=a[1],c=a[2],u=a[3],d={id:t+":"+r,css:i,media:c,sourceMap:u};o[s]?o[s].parts.push(d):n.push(o[s]={id:s,parts:[d]})}return n}}])});
//# sourceMappingURL=mz-vue-toast.js.map