!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["mz-vue-toast"]=t():e["mz-vue-toast"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t,n){n(7);var r=n(5)(n(1),n(6),"data-v-796c756f",null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{shown:!1}},props:{message:String,type:{type:String,default:"info"},duration:{type:Number,default:3e3},className:[String,Array]},computed:{toastClass:function(){var e=[],t=this.className;return t&&("string"==typeof t&&e.push(t),Array.isArray(t)&&(e=e.concat(t))),e.join(" ")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),a={install:function(e){var t=e.extend(o.a),n=null,r=function(){return n||new t({el:document.createElement("div")})},a=function(e){e.parentNode&&e.parentNode.removeChild(e)};t.prototype.remove=function(){this.shown=!1,n=null,a(this.$el)};var s=function(e){return"string"==typeof e&&(e={message:e}),e||{}},i=function(t){return n=r(),clearTimeout(n.timer),n.message=t.message||"",n.duration="number"==typeof t.duration&&t.duration>0?t.duration:1500,n.type=t.type||"info",document.body.appendChild(n.$el),e.nextTick(function(){n.shown=!0,n.timer=setTimeout(function(){n.remove(),t.callback&&t.callback()},n.duration)}),n},u=function(e){return e=s(e),e=Object.assign({type:"info"},e),i(e)},c=function(e){return e=s(e),e=Object.assign({type:"error"},e),i(e)},f=function(e){return e=s(e),e=Object.assign({type:"success"},e),i(e)},d={info:u,error:c,success:f};e.toastr=e.prototype.$toastr=d}};t.default=a},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".toast-mask[data-v-796c756f]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:transparent;z-index:1000}.toast[data-v-796c756f]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:80%;padding:8px 16px;border-radius:4px;background:rgba(0,0,0,.7);color:#fff;box-sizing:border-box;text-align:center;transition:opacity .3s;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.toast-enter[data-v-796c756f]{opacity:0;transform:translate(-40%,-50%)}.toast-enter-active[data-v-796c756f]{transition:all .5s ease}.toast-leave[data-v-796c756f]{opacity:1}.toast-leave-active[data-v-796c756f]{transition:all .5s ease;opacity:0}.toast-message[data-v-796c756f]{display:block;font-size:14px;text-align:middle;padding:10px 20px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,n,r){var o,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,a=e.default);var i="function"==typeof a?a.options:a;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),r){var u=Object.create(i.computed||null);Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}}),i.computed=u}return{esModule:o,exports:a,options:i}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"toast-mask"},[n("transition",{attrs:{name:"toast"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"toast",class:e.toastClass},[n("i",{class:["toast-icon",e.type+"-icon"]}),e._v(" "),n("span",{staticClass:"toast-message",domProps:{textContent:e._s(e.message)}})])])],1)},staticRenderFns:[]}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("2aa32305",r,!0)},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(a(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var a=p++;r=l||(l=o()),t=s.bind(null,r,a,!1),n=s.bind(null,r,a,!0)}else r=o(),t=i.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function i(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(9),f={},d=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=c(e,t);return r(o),function(t){for(var n=[],a=0;a<o.length;a++){var s=o[a],i=f[s.id];i.refs--,n.push(i)}t?(o=c(e,t),r(o)):o=[];for(var a=0;a<n.length;a++){var i=n[a];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete f[i.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],s=a[0],i=a[1],u=a[2],c=a[3],f={id:e+":"+o,css:i,media:u,sourceMap:c};r[s]?r[s].parts.push(f):n.push(r[s]={id:s,parts:[f]})}return n}}])});
//# sourceMappingURL=mz-vue-toast.js.map