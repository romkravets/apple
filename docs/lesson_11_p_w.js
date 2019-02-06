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
/******/ 	return __webpack_require__(__webpack_require__.s = 377);
/******/ })
/************************************************************************/
/******/ ({

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(378);


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _trafficLighter = __webpack_require__(379);

__webpack_require__(380);

var _dropDownDynamic = __webpack_require__(381);

var _dropDown = __webpack_require__(382);

var lightersHtmlElements = document.querySelectorAll('.traffic-lighter');

for (var i = 0; i < lightersHtmlElements.length; i++) {
  (0, _trafficLighter.trafficLighter)(lightersHtmlElements[i]);
}

(0, _dropDownDynamic.dropDownDynamic)('#dropDownLanguages', ['ENGLISH', 'GERMANY', 'ITALIAN', 'TURKISH']);
(0, _dropDownDynamic.dropDownDynamic)('#dropDownCurrencies', ['USD', 'EUR', 'CAD', 'UHR', 'FRA']);

(0, _dropDown.tab)('#tabMenu1');
(0, _dropDown.tab)('#tabMenu2');
(0, _dropDown.tab)('#tabMenu3');

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trafficLighter = trafficLighter;
function trafficLighter(targetElement) {
  var ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
  var lights = targetElement.querySelectorAll('.traffic-lighter__lamp');
  var activeElement = void 0;

  function tornOnLight(element) {
    if (activeElement !== undefined) {
      activeElement.classList.remove(ACTIVE_CLASS_NAME);
    }
    activeElement = element;
    element.classList.toggle(ACTIVE_CLASS_NAME);
  }

  var _loop = function _loop(i) {
    lights[i].onclick = function () {
      tornOnLight(lights[i]);
    };
  };

  for (var i = 0; i < lights.length; i += 1) {
    _loop(i);
  }
}

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tab = tab;

/*export function dropDownDynamic(selector, options) {
  const menuParent = document.querySelector(selector);
  let btn;
  let lamp;

  function render() {
    btn = document.createElement('div');
    lamp = document.createElement('button');

    btn.classList.add('traffic-lighter');
    lamp.classList.add('traffic-lighter__lamp');

    menuParent.appendChild(btn);
    menuParent.appendChild(lamp);
  }

  function buttonList() {
    for (let i = 0; i < options.length; i++) {
      let li = document.createElement('li');
      let option = document.createElement('button');

      li.classList.add('drop-down-menu__item');
      option.classList.add('drop-down-menu__option');

      option.textContent = options[i];

      li.appendChild(option);
      lamp.appendChild(li);
    }
  }

  function close() {
    console.log('CLOSED');
    list.classList.remove('drop-down-menu__list_expand');
    document.removeEventListener('click', close)
  }

  function handleEvents() {
    list.addEventListener('click', function(event) {
      btn.textContent = event.target.textContent;
      list.classList.remove('drop-down-menu__list_expand');
      event.stopPropagation();
    });

    btn.addEventListener('click', function () {
      event.stopPropagation();

      if (list.classList.contains('drop-down-menu__list_expand')) {
        list.classList.remove('drop-down-menu__list_expand');
        document.removeEventListener('click', close)
      } else {
        list.classList.add('drop-down-menu__list_expand');
        document.addEventListener('click', close);
      }

    });
    render();
  }*/

/*export function dropDown(selector) {
const menuParent = document.querySelector(selector);
const btn = menuParent.querySelector('.drop-down-menu__btn');
const list = menuParent.querySelector('.drop-down-menu__list');
const options = menuParent.querySelectorAll('.drop-down-menu__option');

for (let i = 0; i < options.length; i++) {
  options[i].onclick = function () {
    btn.textContent = options[i].textContent;
    list.classList.remove('drop-down-menu__list_expand');
  }
}
 btn.onclick = function () {
  list.classList.toggle('drop-down-menu__list_expand');
};
}*/

function tab(selector) {
  var menuParent = document.querySelector(selector);
  var btn = menuParent.querySelector('.tab-container-menu__link');
  var list = menuParent.querySelector('.tab-container-menu__list');
  var content = menuParent.querySelector('.tab-container-menu__content');
  console.log(list);

  function clickBtn() {
    btn.addEventListener('click', function () {
      content.classList.toggle('tab-container-menu__content_expand');
    });
  };
  clickBtn();
}

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })

/******/ });