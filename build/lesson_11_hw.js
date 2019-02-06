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
/******/ 	return __webpack_require__(__webpack_require__.s = 383);
/******/ })
/************************************************************************/
/******/ ({

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(384);


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(385);

window.onload = function () {
    var links = document.querySelectorAll('.tab-menu__link');
    var content = document.querySelectorAll('.tab-menu__item');

    for (var i = 0; i < links.length; i++) {
        (function (i) {
            var link = links[i];
            link.addEventListener('click', function () {
                for (var j = 0; j < content.length; j++) {
                    var shown = window.getComputedStyle(content[j]).display;
                    if (shown == "block") {
                        content[j].style.display = "none";
                        links[j].classList.remove('tab-menu__link_active');
                    }
                }
                content[i].style.display = "block";
                links[i].classList.add('tab-menu__link_active');
            });
        })(i);
    }
};

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });