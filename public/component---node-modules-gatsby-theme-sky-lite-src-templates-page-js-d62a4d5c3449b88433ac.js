(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0hkM":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return y})),r.d(e,"pageQuery",(function(){return m}));var n=r("q1tI"),o=r.n(n),c=r("RD7I"),a=r("9eSz"),i=r.n(a),u=r("A2+M"),f=r("wkRo"),l=r("hlFM"),p=r("ofer"),s=Object(c.a)((function(){return{article:{lineHeight:1.6,fontFamily:"Merriweather, Georgia, serif",fontSize:"1.1rem","& blockquote":{borderLeft:"3px solid #303032",marginLeft:-16,paddingLeft:13,fontStyle:"italic"}}}}));function y(t){var e=t.data,r=s(),n=e.mdx,c=n.frontmatter,a=c.featuredImage,y=c.title,m=n.body;return o.a.createElement(f.a,null,o.a.createElement(l.a,{flexGrow:1,width:"100%",maxWidth:960,marginX:"auto"},o.a.createElement(l.a,{padding:2},o.a.createElement(l.a,{marginBottom:1},o.a.createElement(p.a,{variant:"h4",style:{fontFamily:"Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif"}},y)),o.a.createElement(i.a,{fluid:a.childImageSharp.fluid,style:{borderRadius:2}}),o.a.createElement("article",{className:r.article},o.a.createElement(u.MDXRenderer,null,m)))))}var m="3761546879"},"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},I5cv:function(t,e,r){var n=r("XKFU"),o=r("Kuth"),c=r("2OiF"),a=r("y3w9"),i=r("0/R4"),u=r("eeVq"),f=r("8MEG"),l=(r("dyZX").Reflect||{}).construct,p=u((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),s=!u((function(){l((function(){}))}));n(n.S+n.F*(p||s),"Reflect",{construct:function(t,e){c(t),a(e);var r=arguments.length<3?t:c(arguments[2]);if(s&&!p)return l(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(f.apply(t,n))}var u=r.prototype,y=o(i(u)?u:Object.prototype),m=Function.apply.call(t,y,e);return i(m)?m:y}})},X8hv:function(t,e,r){function n(t,e,r){return(n=o()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("jm62"),r("yt8O"),r("RW0V"),r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("f3/d"),r("a1Th"),r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var p=r("q1tI"),s=r("7ljp"),y=s.useMDXComponents,m=s.mdx,d=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,o=t.children,c=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["scope","components","children"]),i=y(r),u=d(e),l=p.useMemo((function(){if(!o)return null;var t=f({React:p,mdx:m},u),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(a(e),[""+o])).apply(void 0,[{}].concat(a(r)))}),[o,e]);return p.createElement(l,f({components:i},c))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-sky-lite-src-templates-page-js-d62a4d5c3449b88433ac.js.map