!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/js/index.js")}({"./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */function(module,exports){eval('console.log("Higher baby"); //menu hide and show\n\ndocument.addEventListener("DOMContentLoaded", function () {\n  window.addEventListener("scroll", function () {\n    if (window.scrollY > 200) {\n      document.getElementById("navbar_top").classList.add("fixed-top"); // add padding top to show content behind navbar\n\n      navbar_height = document.querySelector(".navbar").offsetHeight;\n      document.body.style.paddingTop = navbar_height + "px";\n    } else {\n      document.getElementById("navbar_top").classList.remove("fixed-top"); // remove padding top from body\n\n      document.body.style.paddingTop = "0";\n    }\n  });\n}); // collapse menu on click\n\n$(".navbar-nav>li>a").on("click", function () {\n  $(".navbar-collapse").collapse("hide");\n});\n\n//# sourceURL=webpack:///./src/js/index.js?')}});
//# sourceMappingURL=index.js.map
