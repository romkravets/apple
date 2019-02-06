/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 373);
/******/ })
/************************************************************************/
/******/ ({

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(374);


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lighter = __webpack_require__(375);

__webpack_require__(376);

var itemLightHtmlElements = document.querySelectorAll('.bulb-lighter');

for (var i = 0; i < itemLightHtmlElements.length; i++) {
  (0, _lighter.lampWidget)(itemLightHtmlElements[i]);
};

var accordion = document.querySelector('#accordion');
accordion.addEventListener('click', toggleAccordion);
var accordionHeaders = accordion.querySelectorAll('.item__header');

function toggleAccordion(e) {
  var itemHeader = e.target.closest('.item__header');
  if (itemHeader) {
    itemHeader.parentNode.classList.toggle('item--open');
    toggleOtherItems(itemHeader);
  }
}function toggleOtherItems(accordionHeader) {
  Array.from(accordionHeaders).forEach(function (header) {
    if (header != accordionHeader) {
      header.parentNode.classList.remove('item--open');
    }
  });
}

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lampWidget = lampWidget;
function lampWidget(element) {

  var initBtn = element.querySelector('.bulb-lighter__btn');
  var itemLight = element.querySelector('.bulb-lighter__item');

  initBtn.addEventListener("click", function () {
    itemLight.classList.toggle('active');
  });
};

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });