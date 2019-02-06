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
/******/ 	return __webpack_require__(__webpack_require__.s = 367);
/******/ })
/************************************************************************/
/******/ ({

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(368);


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(369);

var logInForm = document.querySelector('#submitForm');
var commentElement = document.querySelector('.comment');

function login(e) {
  e.preventDefault();
  var nameElement = document.querySelector('#name');
  var txtElement = document.querySelector('#txt');
  if (nameElement.value && txtElement.value) {
    commentElement.innerHTML = nameElement.value + txtElement.value;
  } else {
    nameElement.style.borderColor = "red";
    txtElement.style.borderColor = "red";
  };
  document.querySelector('#submitForm').reset();
}

logInForm.onsubmit = login;

/*alert('Я - JAvaScript');

var name = "Василь";
var  admin = name;
alert(admin);

var admin, name;
name = "Василь";
admin = name;
alert(admin);


var myPlanet, name;
myPlanet = "Земля";
name = "Пертя";*/

/*var userName = prompt('Ваше імя?', 100);

//alert('Вам' + userName + 'лет');*/

/*var name = prompt ('How official name JS ?');

if (name === 'ECMAScript') {
  alert('Good answer!');
} else {
   alert('You mast find answer!');
}*/

/*var value = prompt('Write point...');

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}*/

/*var userName = prompt('How are you?');

if (userName == 'Admin'){
  var pass = prompt('Password?');
  if (pass == 'Black star'){
    alert('Welcome')
  } else if (pass === null) {
    alert('escape');
  }else {
    alert('Password?');
  }
  }else if (userName == null) {
    alert('Enter escape');
  } else {
    alert('I dont remember you');
  }*/

/*var userName = prompt('Input mane');
  if (userName == 'admin') {
  var pass = prompt('input password!');
  if (pass == "star"){
    alert('Welcome!');
  } else if (pass === null){
    alert('incorect password');
  }else {
    alert('escape');
  }
}else if(userName == null){
  alert('i dont remembet you');
} else {
  alert('enter escape');
}*/

var age = prompt('how old are you?');

if (!(age >= 14 && age <= 90)) {
  alert('ok');
} else {
  alert('dont');
}

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });