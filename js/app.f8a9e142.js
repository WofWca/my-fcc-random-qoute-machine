(function(t){function e(e){for(var n,u,i=e[0],c=e[1],s=e[2],f=0,d=[];f<i.length;f++)u=i[f],o[u]&&d.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={app:0},a=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:{backgroundColor:t.backgroundColor},attrs:{id:"app"}},[r("div",{attrs:{id:"quote-box"}},[r("span",{attrs:{id:"text"}},[t._v(t._s(t.currQuote.text))]),r("span",{attrs:{id:"author"}},[t._v(t._s(t.currQuote.author))]),r("button",{attrs:{id:"new-quote"},on:{click:t.changeQuote}},[t._v("New Quote")]),r("div",{staticClass:"share-buttons"},[r("a",{attrs:{id:"tweet-quote",target:"_blank",href:t.tweetButtonHref,"data-size":"large"}},[t._v("\n        Tweet\n      ")])])])])},a=[],u=r("d225"),i=r("b0b4"),c=r("308d"),s=r("6bb5"),l=r("4e2b"),f=r("9ab4"),d=r("60a3"),h=function(t){function e(){var t;Object(u["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).call(this)),t.quotes=[{text:"With great power comes great responsibility",author:"Uncle Ben? idk"},{text:"That's one small step for a man, one giant leap for mankind",author:"Neil Armstrong"},{text:"Small loan of a millon dollars",author:"Donald J. Trump"},{text:"It drowned",author:"Vladimir Putin"}],t.backgroundColor="#555";var r=Math.floor(Math.random()*t.quotes.length);return t.currQuote=t.quotes[r],t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"changeQuote",value:function(){var t=Math.floor(Math.random()*this.quotes.length);if(t===this.quotes.indexOf(this.currQuote)){var e=this.quotes.length-1;t===e?t=0:t++}this.currQuote=this.quotes[t]}},{key:"tweetButtonHref",get:function(){var t=encodeURI('"'.concat(this.currQuote.text,'" – ').concat(this.currQuote.author)),e="quotes,freeCodeCamp,VueJS";return"https://twitter.com/intent/tweet?text=".concat(t,"&hashtags=").concat(e)}}]),e}(d["b"]);h=f["a"]([d["a"]],h);var p=h,b=p,v=(r("5c0b"),r("2877")),g=Object(v["a"])(b,o,a,!1,null,null,null),m=g.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.f8a9e142.js.map