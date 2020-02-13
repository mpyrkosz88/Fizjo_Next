module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vsrf");


/***/ }),

/***/ "Cpty":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o6Mx");
/* harmony import */ var _ListItem_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListItem_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries
 //styles



const ListItem = props => __jsx("li", {
  className: _ListItem_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ListItem
}, props.children);

/* harmony default export */ __webpack_exports__["a"] = (ListItem);

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "aMS0":
/***/ (function(module, exports) {

module.exports = {
	"MainHeading": "jhGAZDd54seRFtpztRMfk",
	"Heading1": "_3SlMg2SoAEE482eUifPiX",
	"Heading2": "_2MDpDoMsx6jZ0t80Zx6y7O",
	"Heading3": "_1w5Q0L7Zc_dW_XtzTTCcl2"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mg2d":
/***/ (function(module, exports) {

module.exports = {
	"Cennik": "_2abCJ6be9b14WFNGHzrmaF"
};

/***/ }),

/***/ "o6Mx":
/***/ (function(module, exports) {

module.exports = {
	"ListItem": "K66bgHPJ6W9Nz6slOTAt4"
};

/***/ }),

/***/ "vsrf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_Headings_Heading2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wIQ1");
/* harmony import */ var _styles_Cennik_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mg2d");
/* harmony import */ var _styles_Cennik_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Cennik_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Cpty");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries


 //components





class Cennik extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
      name: "Description",
      content: "Cennik. Fizjoterapia Legnica. Zabiegi. Kinezyterapia. Mgr Arnold Doleczych"
    }), __jsx("title", null, "Cennik. Fizjoterapia Legnica. Mgr Arnold Doleczych")), __jsx("main", {
      className: _styles_Cennik_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Cennik
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      justify: "space-between"
    }, __jsx(_components_UI_Headings_Heading2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, "Cennik"), __jsx("ul", null, __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Galwanizacja"), __jsx("div", null, "5 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Jonofereza (z lekiem)"), __jsx("div", null, "5 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Diadynami(DD)"), __jsx("div", null, "5 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Tens"), __jsx("div", null, "8 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Interdyn (ID)"), __jsx("div", null, "5 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Ultrad\u017Awi\u0119ki (UD)"), __jsx("div", null, "6 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Ultrad\u017Awi\u0119ki z lekiem"), __jsx("div", null, "8 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Magnetoterapia"), __jsx("div", null, "6 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Laser"), __jsx("div", null, "6 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Lampa Solux"), __jsx("div", null, "5 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Terapia skojrzeniowa"), __jsx("div", null, "8 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Terapia przeciwobrz\u0119kowa"), __jsx("div", null, "10 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Krioterapia miejscowa"), __jsx("div", null, "15 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Masa\u017C wibracyjny"), __jsx("div", null, "20 z\u0142")), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", null, "Kinezyterapia"), __jsx("div", null, "od 20 z\u0142"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cennik);

/***/ }),

/***/ "wIQ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Headings_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aMS0");
/* harmony import */ var _Headings_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Headings_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries
 //styles



const heading2 = props => __jsx("h1", {
  className: _Headings_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Heading1
}, props.children);

/* harmony default export */ __webpack_exports__["a"] = (heading2);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });