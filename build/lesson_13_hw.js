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
/******/ 	return __webpack_require__(__webpack_require__.s = 386);
/******/ })
/************************************************************************/
/******/ ({

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(388);

var _clock = __webpack_require__(389);

var clock = new _clock.Clock(document.querySelector('.clock'));

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = exports.Clock = function () {
    function Clock(rootElement) {
        _classCallCheck(this, Clock);

        this.rootElement = rootElement;
        this.render();
        this.startUpdate();
        this.toggle();
        this.isEnable = false;
        this.isEnableTime = false;
    }

    _createClass(Clock, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var currentDate = new Date();
            this.btn = document.querySelector('div');

            this.clockHour = document.createElement('span');
            this.clockHour.classList.add('clock__hours');
            this.rootElement.appendChild(this.clockHour);
            this.clockHour.textContent = currentDate.getHours() + ' :';

            this.clockMin = document.createElement('span');
            this.clockMin.classList.add('clock__minutes');
            this.rootElement.appendChild(this.clockMin);
            this.clockMin.textContent = currentDate.getMinutes();

            this.clockSec = document.createElement('span');
            this.clockSec.classList.add('clock__seconds');
            this.rootElement.appendChild(this.clockSec);
            this.clockSec.textContent = ' : ' + currentDate.getSeconds();

            this.dateTime = document.createElement('div');
            this.dateTime.classList.add('clock__date');
            this.rootElement.appendChild(this.dateTime);
            this.dateTime.textContent = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();

            this.btn.addEventListener('contextmenu', function () {
                return _this.toggleTime();
            });
            this.btn.addEventListener('click', function () {
                return _this.toggle();
            });
        }
    }, {
        key: 'startUpdate',
        value: function startUpdate() {
            var _this2 = this;

            setInterval(function () {
                var currentDate = new Date();
                _this2.clockHour.textContent = currentDate.getHours() + ' :';
                _this2.clockMin.textContent = currentDate.getMinutes();
                _this2.clockSec.textContent = ' : ' + currentDate.getSeconds();
            }, 1000);
        }
    }, {
        key: 'toggle',
        value: function toggle() {

            if (this.isEnable) {
                this.disable();
            } else {
                this.enable();
            }
        }
    }, {
        key: 'enable',
        value: function enable() {
            this.clockSec.style.display = "none";
            this.isEnable = true;
        }
    }, {
        key: 'disable',
        value: function disable() {
            this.clockSec.style.display = "flex";
            this.isEnable = false;
        }
    }, {
        key: 'toggleTime',
        value: function toggleTime() {
            if (this.isEnableTime) {
                this.disableTime();
            } else {
                this.enableTime();
            }
        }
    }, {
        key: 'enableTime',
        value: function enableTime() {
            this.dateTime.style.display = "none";
            this.isEnableTime = true;
        }
    }, {
        key: 'disableTime',
        value: function disableTime() {
            this.dateTime.style.display = "flex";
            this.isEnableTime = false;
        }
    }]);

    return Clock;
}();

/***/ })

/******/ });