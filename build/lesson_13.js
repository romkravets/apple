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
/******/ 	return __webpack_require__(__webpack_require__.s = 390);
/******/ })
/************************************************************************/
/******/ ({

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(394);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toggler = exports.Toggler = function () {
  function Toggler(rootElement, title, backgroundColor) {
    _classCallCheck(this, Toggler);

    this.rootElement = rootElement;
    this.title = title;
    this.backgroundColor = backgroundColor || 'red';
    this.render();
    this.isEnable = false;
  }

  _createClass(Toggler, [{
    key: 'render',
    value: function render() {
      var _this = this;

      this.btn = document.createElement('button');
      this.btn.classList.add('toggler');
      this.btn.textContent = this.title;
      this.btn.addEventListener('click', function () {
        return _this.toggle();
      });
      this.rootElement.appendChild(this.btn);
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
      this.btn.style.backgroundColor = this.backgroundColor;
      this.isEnable = true;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.btn.style.backgroundColor = '';
      this.isEnable = false;
    }
  }]);

  return Toggler;
}();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tabs = __webpack_require__(392);

var _toggler = __webpack_require__(143);

__webpack_require__(395);

var _togglerControl = __webpack_require__(396);

(0, _tabs.tabs)(document.querySelector('#firstTabs'), [{
  title: 'Section 1',
  content: 'test-test 1'
}, {
  title: 'Section 2',
  content: 'test-0test 2'
}]);
(0, _tabs.tabs)(document.querySelector('#secondTabs'), [{
  title: 'Section 1',
  content: 'test 1'
}, {
  title: 'Section 2',
  content: 'test 2'
}]);

var t = new _toggler.Toggler(document.querySelector('#togglerFirst'), 'HELLO WORLD!', 'green');
var u = new _toggler.Toggler(document.querySelector('#togglerSecond'), 'HELLO WORLD 2!');
// t.render();
console.log(t);
console.log(u);

var globalController = new _togglerControl.TogglerControl(document.querySelector('#togglerController'));
console.dir(globalController);

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabs = tabs;

__webpack_require__(393);

var ACTIVE_CONTENT_CLASS_NAME = 'tabs__content-item_active';
var ACTIVE_CONTROL_CLASS_NAME = 'tabs__control_active';

function tabs(rootElement, tabsContent) {
  var controls = {};
  var contentItems = {};
  var selectedItemIndex = 0;

  function clickHandler() {
    var currentElementIndex = this.getAttribute('data-control-for');
    var selectedContentItem = contentItems[currentElementIndex];

    controls[selectedItemIndex].classList.remove(ACTIVE_CONTROL_CLASS_NAME);
    contentItems[selectedItemIndex].classList.remove(ACTIVE_CONTENT_CLASS_NAME);

    selectedContentItem.classList.add(ACTIVE_CONTENT_CLASS_NAME);
    this.classList.add(ACTIVE_CONTROL_CLASS_NAME);
    selectedItemIndex = currentElementIndex;
  }

  function render() {
    var tabsControlsElement = document.createElement('nav');
    var tabsContentElement = document.createElement('div');

    tabsContent.forEach(function (tabContent, i) {
      var control = document.createElement('button');
      var contentItem = document.createElement('div');

      control.classList.add('tabs__control');
      control.innerHTML = tabContent.title;

      control.setAttribute('data-control-for', i);
      contentItem.setAttribute('data-content-name', i);

      contentItem.classList.add('tabs__content-item');
      contentItem.innerHTML = tabContent.content;

      control.addEventListener('click', clickHandler);

      controls[i] = control;
      contentItems[i] = contentItem;

      tabsControlsElement.appendChild(control);
      tabsContentElement.appendChild(contentItem);

      if (i === selectedItemIndex) {
        control.classList.add(ACTIVE_CONTROL_CLASS_NAME);
        contentItem.classList.add(ACTIVE_CONTENT_CLASS_NAME);
      }
    });

    rootElement.classList.add('tabs');
    rootElement.appendChild(tabsControlsElement);
    rootElement.appendChild(tabsContentElement);
  }

  render();
}

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TogglerControl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toggler = __webpack_require__(143);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TogglerControl = exports.TogglerControl = function () {
  function TogglerControl(rootElement) {
    _classCallCheck(this, TogglerControl);

    this.rootElement = rootElement;
    this.togglers = [];
    this.render();
  }

  _createClass(TogglerControl, [{
    key: 'render',
    value: function render() {
      var _this = this;

      this.addBtn = document.createElement('button');
      this.enableAllBtn = document.createElement('button');
      this.contentBlock = document.createElement('div');
      this.counterElement = document.createElement('span');

      this.addBtn.textContent = 'ADD';
      this.enableAllBtn.textContent = 'TOGGLE ALL';
      this.counterElement.textContent = 0;
      this.contentBlock.classList.add('div');

      this.addBtn.addEventListener('click', function () {
        return _this.addToggler();
      });
      this.enableAllBtn.addEventListener('click', function () {
        return _this.toggleAll();
      });

      this.rootElement.appendChild(this.addBtn);
      this.rootElement.appendChild(this.enableAllBtn);
      this.rootElement.appendChild(this.counterElement);

      this.rootElement.appendChild(this.contentBlock);
    }
  }, {
    key: 'addToggler',
    value: function addToggler() {
      this.togglers.push(new _toggler.Toggler(this.contentBlock, 'TEST', this.generateColor()));
      this.counterElement.textContent = this.togglers.length;
    }
  }, {
    key: 'toggleAll',
    value: function toggleAll() {
      var isSomeEnabled = false;
      this.togglers.forEach(function (toggler) {
        if (toggler.isEnable) {
          isSomeEnabled = true;
        }
      });

      if (isSomeEnabled) {
        this.disableAll();
      } else {
        this.enableAll();
      }
    }
  }, {
    key: 'disableAll',
    value: function disableAll() {
      this.togglers.forEach(function (toggler) {
        toggler.disable();
      });
    }
  }, {
    key: 'enableAll',
    value: function enableAll() {
      this.togglers.forEach(function (toggler) {
        toggler.enable();
      });
    }
  }, {
    key: 'generateColor',
    value: function generateColor() {
      var getRandValue = function getRandValue() {
        return Math.round(Math.random() * (0 - 255) + 255);
      };

      return 'rgb(' + getRandValue() + ', ' + getRandValue() + ', ' + getRandValue() + ')';
    }
  }]);

  return TogglerControl;
}();

/***/ })

/******/ });