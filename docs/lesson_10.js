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
/******/ 	return __webpack_require__(__webpack_require__.s = 370);
/******/ })
/************************************************************************/
/******/ ({

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(371);


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(372);

function lampWidget(element) {

  var initBtn = element.querySelector('.bulb-lighter__btn');
  var itemLight = element.querySelector('.bulb-lighter__item');

  initBtn.addEventListener("click", function () {
    itemLight.classList.toggle('active');
  });
}

var itemLightHtmlElements = document.querySelectorAll('.bulb-lighter');

for (var i = 0; i < itemLightHtmlElements.length; i++) {
  lampWidget(itemLightHtmlElements[i]);
}

/*const panelItem = document.querySelectorAll('.accordion__panel-title');
const active = document.getElementsByClassName('accordion__panel-active');
console.log(panelItem);
console.log(active);

Array.from(panelItem).forEach(function(item, i, panelItem) {
item.addEventListener('click', function(e) {
  if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
    active[0].classList.remove('accordion__panel-active'); // убрать класс panel-active

  // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
  this.classList.toggle('accordion__panel-active');
});
});*/

var panelItem = document.querySelectorAll('.panel-title'),
    active = document.getElementsByClassName('panel-active');

Array.from(panelItem).forEach(function (item, i, panelItem) {
  item.addEventListener('click', function (e) {
    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('panel-active'); // убрать класс panel-active

    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('panel-active');
  });
});

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });