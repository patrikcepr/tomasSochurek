!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s="./src/js/index.js")}({"./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */function(module,exports){eval('//menu hide and show\ndocument.addEventListener("DOMContentLoaded", function () {\n  window.addEventListener("scroll", function () {\n    if (window.scrollY > 200) {\n      document.getElementById("navbar_top").classList.add("fixed-top"); // add padding top to show content behind navbar\n\n      navbar_height = document.querySelector(".navbar").offsetHeight;\n      document.body.style.paddingTop = navbar_height + "px";\n    } else {\n      document.getElementById("navbar_top").classList.remove("fixed-top"); // remove padding top from body\n\n      document.body.style.paddingTop = "0";\n    }\n  });\n}); // collapse menu on click\n\n$(".navbar-nav>li>a").on("click", function () {\n  $(".navbar-collapse").collapse("hide");\n}); // smooth scrolling\n\nvar scroll = new SmoothScroll(\'a[href*="#"]\', {\n  // Selectors\n  ignore: "[data-scroll-ignore]",\n  header: "#navbar-top",\n  // topOnEmptyHash: true,\n  // Speed & Duration\n  speed: 500,\n  speedAsDuration: false,\n  // durationMax: null,\n  // durationMin: null,\n  // clip: true,\n  // offset: 0,\n  // Easing\n  easing: "easeInOutCubic",\n  // customEasing: null,\n  // History\n  updateURL: true,\n  popstate: true // Custom Events\n  // emitEvents: true,\n\n});\n\n//# sourceURL=webpack:///./src/js/index.js?')}});
//# sourceMappingURL=index.js.map
