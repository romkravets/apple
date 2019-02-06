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
/******/ 	return __webpack_require__(__webpack_require__.s = 397);
/******/ })
/************************************************************************/
/******/ ({

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _comments = __webpack_require__(399);

__webpack_require__(401);

new _comments.CommentsList(document.querySelector('#commentslist'));

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentsList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpService = __webpack_require__(400);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BTN_DEL_CLASS_NAME = 'btn_del';
var LIST_ITEM_TEMPLATE = '<div class="list_item" id={{id}}>\n<img class="list__img" src="https://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80"> \n<div class="list__text">{{title}}</div>\n<button type="button" class="' + BTN_DEL_CLASS_NAME + '">DELETE</button>\n</div>';
var URL = 'http://localhost:4001/list';
var TASK_ID_PREFIX = 'taskId';

var CommentsList = exports.CommentsList = function () {
    function CommentsList(rootElement) {
        _classCallCheck(this, CommentsList);

        this.rootElement = rootElement;
        this.httpService = new _httpService.HTTPService();
        this.render();
        this.getList();
    }

    _createClass(CommentsList, [{
        key: 'getList',
        value: function getList() {
            var _this = this;

            this.httpService.get(URL, function (response) {
                return _this.renderLists(response);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.title = document.createElement('h3');
            this.title.classList.add('h3');
            this.title.textContent = 'Comments';
            this.rootElement.appendChild(this.title);

            this.form = document.createElement('form');
            this.form.classList.add('comments__form');
            this.input = document.createElement('textarea');
            this.input.classList.add('comments__textarea');
            this.input.setAttribute("placeholder", "Add comment...");

            this.submitBtn = document.createElement('button');
            this.submitBtn.classList.add('comments__button');

            this.submitBtn.textContent = 'Add Comment';

            this.form.appendChild(this.input);
            this.form.appendChild(this.submitBtn);
            this.form.addEventListener('submit', function (e) {
                return _this2.onSubmit(e);
            });

            this.rootElement.appendChild(this.form);
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(e) {
            var _this3 = this;

            e.preventDefault();
            var title = this.input.value;
            this.input.value = "";
            this.httpService.post(URL, { title: title }, function (task) {
                _this3.renderOne(task);
            });
        }
    }, {
        key: 'deleteItem',
        value: function deleteItem(taskId) {
            var _this4 = this;

            this.httpService.delete(URL + '/' + taskId, function () {
                var elementForRemove = _this4.list.querySelector('#' + (TASK_ID_PREFIX + taskId));
                _this4.list.removeChild(elementForRemove);
            });
        }
    }, {
        key: 'renderOne',
        value: function renderOne(task) {
            var divItem = LIST_ITEM_TEMPLATE.replace('{{id}}', TASK_ID_PREFIX + task.id).replace('{{title}}', task.title);
            this.list.innerHTML = this.list.innerHTML + divItem;
        }
    }, {
        key: 'renderLists',
        value: function renderLists(tasks) {
            var _this5 = this;

            this.list = document.createElement('div');
            this.list.classList.add('list');

            tasks.forEach(function (task) {
                return _this5.renderOne(task);
            });

            this.list.addEventListener('click', function (e) {
                if (e.target.classList.contains(BTN_DEL_CLASS_NAME)) {
                    e.stopPropagation();
                    var id = e.target.closest('div').getAttribute('id').replace(TASK_ID_PREFIX, '');
                    _this5.deleteItem(id);
                }
            });
            this.rootElement.appendChild(this.list);
        }
    }]);

    return CommentsList;
}();

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTTPService = exports.HTTPService = function () {
    function HTTPService() {
        _classCallCheck(this, HTTPService);
    }

    _createClass(HTTPService, [{
        key: 'get',
        value: function get(url, successCallBack, errorCallback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var parsedData = JSON.parse(xhr.response);
                        successCallBack(parsedData);
                    } else {
                        errorCallback(xhr);
                        //console.log(readyState);
                    }
                }
            };
        }
    }, {
        key: 'post',
        value: function post(url, data, successCallback, errorCallback) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.send(typeof data !== 'stryng' ? JSON.stringify(data) : data);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var parsedData = JSON.parse(xhr.response);
                        successCallback(parsedData);
                    } else {
                        errorCallback(xhr);
                    }
                }
            };
        }
    }, {
        key: 'delete',
        value: function _delete(url, successCallback, errorCallback) {
            var xhr = new XMLHttpRequest();
            xhr.open('DELETE', url);

            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var parsedData = JSON.parse(xhr.response);
                        successCallback(parsedData);
                    } else {
                        errorCallback(xhr);
                    }
                }
            };
        }
    }]);

    return HTTPService;
}();

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });