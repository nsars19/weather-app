(()=>{"use strict";var e={679:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,'*,*::before,*::after{box-sizing:border-box;padding:0;margin:0}body{background:#8cf;position:relative}header{height:50px;margin:30px 20px}header .searchbar{position:relative}header input{height:40px;padding:10px;padding-left:32px;border:none;border-radius:20px;background:#ddd;font-size:16px}header i{position:absolute;top:-10px;left:-2px;padding:10px 0;padding-left:10px;padding-right:6px}.error-text{margin-right:30px;right:20px;line-height:35px;width:300px}.app-wrapper{font-family:"Courier New",Courier,monospace;color:#111;position:absolute;top:130px;left:20px}.app-wrapper>h4:not(h4:first-child){position:relative;margin:10px 10px}.app-wrapper h4:not(h4:first-child),.app-wrapper h4::before{animation-name:comefromleft;animation-duration:.25s;animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1.275)}.app-wrapper .weather,.app-wrapper .temp,.app-wrapper .feelsLike,.app-wrapper .humidity,.app-wrapper .wind{position:relative;animation-name:comefromleft;animation-duration:.25s;animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1.275)}.name{position:absolute;top:-50px;font-size:26px;animation-name:comefromleft;animation-duration:.2s;animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1.275)}.weather,.weather::before{animation-delay:.1s}.temp,.temp::before{animation-delay:.2s}.feelsLike,.feelsLike::before{animation-delay:.3s}.humidity,.humidity::before{animation-delay:.45s}.wind,.wind::before{animation-delay:.55s}.temp::before{content:"temp:";margin-right:8px}.feelsLike::before{content:"feels like:";margin-right:8px}.humidity::before{content:"humidity:";margin-right:8px}.wind::before{content:"wind speed:";margin-right:8px}.temp::after,.feelsLike::after{content:"°f"}.humidity::after{content:"%"}.wind::after{content:" mph"}.bg-img{position:absolute;top:0;z-index:-1;opacity:50%;height:350px}.cloudy{animation:moveacross 20s linear 0s infinite normal none}@keyframes moveacross{from{margin-left:-270px}to{margin-left:100%}}.sunny{animation:none 20s linear 0s infinite normal none}@keyframes comefromleft{from{left:-180px}to{left:10px}}',""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function o(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var c=e[i],s=t.base?c[0]+t.base:c[0],p=n[s]||0,d="".concat(s," ").concat(p);n[s]=p+1;var l=o(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:h(f,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function l(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u=null,m=0;function h(e,t){var n,r,i;if(t.singleton){var a=m++;n=u||(u=s(t)),r=l.bind(null,n,a,!1),i=l.bind(null,n,a,!0)}else n=s(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=o(n[r]);a[i].references--}for(var s=c(e,t),p=0;p<n.length;p++){var d=o(n[p]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=s}}}},280:(e,t,n)=>{e.exports=n.p+"24f9a4741fe33f66bc0d.svg"},800:(e,t,n)=>{e.exports=n.p+"c33ef66438b2725bead5.svg"},581:(e,t,n)=>{e.exports=n.p+"9305701c616e797ab473.svg"},397:(e,t,n)=>{e.exports=n.p+"dce3f5e7e7d2c7e342ff.svg"},596:(e,t,n)=>{e.exports=n.p+"19ff3c30164844769f3c.svg"}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(679);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i=n(280),a=n(581),o=n(397),c=n(596),s=n(800);function p(e){const t=document.querySelector("body"),n=document.createElement("div");n.classList.add("app-wrapper"),t.appendChild(n),l(e).forEach((e=>n.append(e))),function(e){const t=document.querySelector("body"),n=document.createElement("img");switch(n.classList.add("bg-img"),t.appendChild(n),e){case"Clouds":n.src=i,n.classList.add("cloudy");break;case"Clear":n.src=s,n.classList.add("sunny");break;case"Rain":case"Mist":n.src=a,n.classList.add("rainy");break;case"Snow":n.src=o,n.classList.add("snowy");break;case"Thunderstorm":n.src=c,n.classList.add("thundery")}}(e.weather)}function d(e,t,n){const r=document.createElement(e);return r.innerText=t,r.classList.add(n),r}function l(e,t=[]){for(let n in e)"object"==typeof e[n]?l(e[n],t):t.push(d("h4",e[n],n));return t}!function(){function e(e="Boston"){(async function(e="Boston"){const t="https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=imperial&appid=0ef688ca35703421279c3bde4d9ca4e6",n=await fetch(t,{mode:"cors"});return await n.json()})(e).then((e=>function(e){return{name:e.name,weather:e.weather[0].main,main:{temp:parseInt(e.main.temp),feelsLike:parseInt(e.main.feels_like),humidity:parseInt(e.main.humidity)},wind:e.wind.speed}}(e))).then((e=>p(e))).catch((e=>function(e){console.log(e);const t=document.querySelector("body"),n=document.createElement("h2");n.innerText="I couldn't find that place, sorry!",n.classList.add("app-wrapper"),n.classList.add("error-text"),t.appendChild(n)}(e)))}!function(){const t=document.querySelector(".search-submit"),n=document.querySelector(".search");t.addEventListener("click",(()=>{const t=n.value||"Boston";!function(){const e=document.querySelectorAll(".app-wrapper"),t=document.querySelectorAll(".bg-img");if(t.length>0&&[...t].forEach((e=>e.remove())),e.length>0){for(;e.firstChild;)e.firstChild.remove();[...e].forEach((e=>e.remove()))}}(),e(t)}))}(),e()}()})()})();