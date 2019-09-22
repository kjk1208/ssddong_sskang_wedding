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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _css_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_default_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_default_css__WEBPACK_IMPORTED_MODULE_0__);


var importAllDefaultImages = function importAllDefaultImages() {
  var images = __webpack_require__(2);

  var fonts = __webpack_require__(14);

  images.keys().forEach(images);
  fonts.keys().forEach(fonts);
};

var initializeOverlay = function initializeOverlay() {
  var overlay = document.getElementById('js-overlay');
  var headerMenu = document.getElementById('js-header__menu');
  var overlayCloseBtn = document.getElementById('js-overlay__closeBtn');
  headerMenu.addEventListener('click', function () {
    return overlay.classList.add('open');
  });
  overlayCloseBtn.addEventListener('click', function () {
    return overlay.classList.remove('open');
  });
};

window.addEventListener('DOMContentLoaded', function () {
  initializeOverlay();
  importAllDefaultImages();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./backBtn-black.svg": 3,
	"./backBtn-white.svg": 4,
	"./loader.svg": 5,
	"./logo-red.png": 6,
	"./logo-white.png": 7,
	"./melon.png": 8,
	"./social.png": 9,
	"./transparent.png": 10,
	"./upBtn-black.svg": 11,
	"./upBtn-white.svg": 12,
	"./youtube.png": 13
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/backBtn-black.svg?1304";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/backBtn-white.svg?c62a";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/loader.svg?d675";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/logo-red.png?c055";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/logo-white.png?995d";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/melon.png?62f8";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/social.png?35da";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/transparent.png?1b01";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/upBtn-black.svg?bf8f";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/upBtn-white.svg?9fa7";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/youtube.png?36df";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Anton.woff": 15,
	"./Julietta.woff": 16,
	"./NanumMyeongjo.woff": 17
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 14;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/Anton.woff?329c";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/Julietta.woff?2d6c";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/NanumMyeongjo.woff?b19a";

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_1__);



var importAllDefaultImages = function importAllDefaultImages() {
  var images = __webpack_require__(25);

  images.keys().forEach(images);
};

var initLoader = function initLoader() {
  var loadedCount = 0;
  var bgImgs = document.querySelectorAll('.bg__img');
  bgImgs.forEach(function (bgImg) {
    var image = new Image();

    image.onload = function () {
      if (image.complete) {
        loadedCount += 1;
      }

      if (loadedCount === bgImgs.length) {
        document.getElementById('js-loader').classList.add('hide');
        document.getElementById('js-main').classList.add('show');
        document.getElementById('js-header').classList.add('show');
        document.getElementById('js-footer').classList.add('show');
      }
    };

    image.src = bgImg.dataset.src;
  });
};

window.addEventListener('DOMContentLoaded', function () {
  return initLoader();
});
window.onlaod = importAllDefaultImages;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index-irene.jpg": 26,
	"./index-joy.jpg": 27,
	"./index-seulgi.jpg": 28,
	"./index-wendy.jpg": 29,
	"./index-yeri.jpg": 30
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 25;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/index-irene.jpg?e394";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/index-joy.jpg?0f7d";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/index-seulgi.jpg?3629";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/index-wendy.jpg?b8ac";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/index-yeri.jpg?1bce";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvZGVmYXVsdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzIHN5bmMgLipcXC4oc3ZnfHBuZykkIiwid2VicGFjazovLy8uL2ltYWdlcy9iYWNrQnRuLWJsYWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmFja0J0bi13aGl0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2xvYWRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2xvZ28tcmVkLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbG9nby13aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL21lbG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvc29jaWFsLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvdHJhbnNwYXJlbnQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy91cEJ0bi1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3VwQnRuLXdoaXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMveW91dHViZS5wbmciLCJ3ZWJwYWNrOi8vLy4vZm9udHMgc3luYyAuKlxcLndvZmYkIiwid2VicGFjazovLy8uL2ZvbnRzL0FudG9uLndvZmYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvSnVsaWV0dGEud29mZiIsIndlYnBhY2s6Ly8vLi9mb250cy9OYW51bU15ZW9uZ2pvLndvZmYiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMgc3luYyBpbmRleC0uKlxcLmpwZyQiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2luZGV4LWlyZW5lLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW5kZXgtam95LmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW5kZXgtc2V1bGdpLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW5kZXgtd2VuZHkuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbmRleC15ZXJpLmpwZyJdLCJuYW1lcyI6WyJpbXBvcnRBbGxEZWZhdWx0SW1hZ2VzIiwiaW1hZ2VzIiwicmVxdWlyZSIsImZvbnRzIiwia2V5cyIsImZvckVhY2giLCJpbml0aWFsaXplT3ZlcmxheSIsIm92ZXJsYXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVyTWVudSIsIm92ZXJsYXlDbG9zZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJpbml0TG9hZGVyIiwibG9hZGVkQ291bnQiLCJiZ0ltZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYmdJbWciLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiY29tcGxldGUiLCJsZW5ndGgiLCJzcmMiLCJkYXRhc2V0Iiwib25sYW9kIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFB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QWlCLHFCQUF1QiwrQjs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsa0M7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGlDOzs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixnQyIsImZpbGUiOiJpbmRleC4zZTlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIzKTtcbiIsImltcG9ydCAnLi4vY3NzL2RlZmF1bHQuY3NzJztcblxuY29uc3QgaW1wb3J0QWxsRGVmYXVsdEltYWdlcyA9IGZ1bmN0aW9uIGltcG9ydEFsbERlZmF1bHRJbWFnZXMoKSB7XG4gIGNvbnN0IGltYWdlcyA9IHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzLycsIHRydWUsIC8uKlxcLihzdmd8cG5nKSQvKTtcbiAgY29uc3QgZm9udHMgPSByZXF1aXJlLmNvbnRleHQoJy4uL2ZvbnRzLycsIHRydWUsIC8uKlxcLndvZmYkLyk7XG4gIGltYWdlcy5rZXlzKCkuZm9yRWFjaChpbWFnZXMpO1xuICBmb250cy5rZXlzKCkuZm9yRWFjaChmb250cyk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplT3ZlcmxheSA9IGZ1bmN0aW9uIGluaXRpYWxpemVPdmVybGF5KCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW92ZXJsYXknKTtcbiAgY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1oZWFkZXJfX21lbnUnKTtcbiAgY29uc3Qgb3ZlcmxheUNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW92ZXJsYXlfX2Nsb3NlQnRuJyk7XG5cbiAgaGVhZGVyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3BlbicpKTtcbiAgb3ZlcmxheUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJykpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGluaXRpYWxpemVPdmVybGF5KCk7XG4gIGltcG9ydEFsbERlZmF1bHRJbWFnZXMoKTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2JhY2tCdG4tYmxhY2suc3ZnXCI6IDMsXG5cdFwiLi9iYWNrQnRuLXdoaXRlLnN2Z1wiOiA0LFxuXHRcIi4vbG9hZGVyLnN2Z1wiOiA1LFxuXHRcIi4vbG9nby1yZWQucG5nXCI6IDYsXG5cdFwiLi9sb2dvLXdoaXRlLnBuZ1wiOiA3LFxuXHRcIi4vbWVsb24ucG5nXCI6IDgsXG5cdFwiLi9zb2NpYWwucG5nXCI6IDksXG5cdFwiLi90cmFuc3BhcmVudC5wbmdcIjogMTAsXG5cdFwiLi91cEJ0bi1ibGFjay5zdmdcIjogMTEsXG5cdFwiLi91cEJ0bi13aGl0ZS5zdmdcIjogMTIsXG5cdFwiLi95b3V0dWJlLnBuZ1wiOiAxM1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2JhY2tCdG4tYmxhY2suc3ZnPzEzMDRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYmFja0J0bi13aGl0ZS5zdmc/YzYyYVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9sb2FkZXIuc3ZnP2Q2NzVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvbG9nby1yZWQucG5nP2MwNTVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvbG9nby13aGl0ZS5wbmc/OTk1ZFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9tZWxvbi5wbmc/NjJmOFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9zb2NpYWwucG5nPzM1ZGFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvdHJhbnNwYXJlbnQucG5nPzFiMDFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvdXBCdG4tYmxhY2suc3ZnP2JmOGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvdXBCdG4td2hpdGUuc3ZnPzlmYTdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMveW91dHViZS5wbmc/MzZkZlwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BbnRvbi53b2ZmXCI6IDE1LFxuXHRcIi4vSnVsaWV0dGEud29mZlwiOiAxNixcblx0XCIuL05hbnVtTXllb25nam8ud29mZlwiOiAxN1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDE0OyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9BbnRvbi53b2ZmPzMyOWNcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvSnVsaWV0dGEud29mZj8yZDZjXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL05hbnVtTXllb25nam8ud29mZj9iMTlhXCI7IiwiaW1wb3J0ICcuL2RlZmF1bHQnO1xuaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcblxuY29uc3QgaW1wb3J0QWxsRGVmYXVsdEltYWdlcyA9IGZ1bmN0aW9uIGltcG9ydEFsbERlZmF1bHRJbWFnZXMoKSB7XG4gIGNvbnN0IGltYWdlcyA9IHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzLycsIHRydWUsIC9pbmRleC0uKlxcLmpwZyQvKTtcbiAgaW1hZ2VzLmtleXMoKS5mb3JFYWNoKGltYWdlcyk7XG59O1xuXG5jb25zdCBpbml0TG9hZGVyID0gZnVuY3Rpb24gaW5pdExvYWRlcigpIHtcbiAgbGV0IGxvYWRlZENvdW50ID0gMDtcbiAgY29uc3QgYmdJbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJnX19pbWcnKTtcbiAgYmdJbWdzLmZvckVhY2goKGJnSW1nKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZiAoaW1hZ2UuY29tcGxldGUpIHtcbiAgICAgICAgbG9hZGVkQ291bnQgKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChsb2FkZWRDb3VudCA9PT0gYmdJbWdzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbG9hZGVyJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWFpbicpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWhlYWRlcicpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWZvb3RlcicpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGltYWdlLnNyYyA9IGJnSW1nLmRhdGFzZXQuc3JjO1xuICB9KTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gaW5pdExvYWRlcigpKTtcbndpbmRvdy5vbmxhb2QgPSBpbXBvcnRBbGxEZWZhdWx0SW1hZ2VzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2luZGV4LWlyZW5lLmpwZ1wiOiAyNixcblx0XCIuL2luZGV4LWpveS5qcGdcIjogMjcsXG5cdFwiLi9pbmRleC1zZXVsZ2kuanBnXCI6IDI4LFxuXHRcIi4vaW5kZXgtd2VuZHkuanBnXCI6IDI5LFxuXHRcIi4vaW5kZXgteWVyaS5qcGdcIjogMzBcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW5kZXgtaXJlbmUuanBnP2UzOTRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW5kZXgtam95LmpwZz8wZjdkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2luZGV4LXNldWxnaS5qcGc/MzYyOVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbmRleC13ZW5keS5qcGc/YjhhY1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbmRleC15ZXJpLmpwZz8xYmNlXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==