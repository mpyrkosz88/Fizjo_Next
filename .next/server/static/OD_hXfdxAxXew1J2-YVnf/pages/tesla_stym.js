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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("iRcw");


/***/ }),

/***/ "Aj0R":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/TeslaStym-330cb0fce1863e9edde55dd16035c9cb.jpg";

/***/ }),

/***/ "ByUh":
/***/ (function(module, exports) {

module.exports = {
	"Image": "_3ldQfhLZx5SpxpTJOWRSSS"
};

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

/***/ "EdZY":
/***/ (function(module, exports) {

module.exports = {
	"TeslaStym": "_20FqENAkZEXW7Zc0Ugd18I"
};

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "YPhW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ByUh");
/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Image_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries
 //styles



const image = props => __jsx("div", {
  className: _Image_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Image
}, __jsx("img", {
  src: props.src,
  alt: props.alt
}, props.children));

/* harmony default export */ __webpack_exports__["a"] = (image);

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

/***/ "fpHq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Headings_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aMS0");
/* harmony import */ var _Headings_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Headings_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries
 //styles



const heading4 = props => __jsx("h3", {
  className: _Headings_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Heading3
}, props.children);

/* harmony default export */ __webpack_exports__["a"] = (heading4);

/***/ }),

/***/ "iRcw":
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
/* harmony import */ var _components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("s7/U");
/* harmony import */ var _components_UI_Headings_Heading4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fpHq");
/* harmony import */ var _components_UI_Image_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YPhW");
/* harmony import */ var _styles_TeslaStym_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("EdZY");
/* harmony import */ var _styles_TeslaStym_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_TeslaStym_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Cpty");
/* harmony import */ var _assets_images_TeslaStym_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Aj0R");
/* harmony import */ var _assets_images_TeslaStym_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_TeslaStym_jpg__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries


 //components






 //images



class TeslaStym extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
      name: "Description",
      content: "Tesla Stym. Terapia Polem Magnetycznym. Jak dzia\u0142a g\u0142\u0119boka stymulacja elektromagnetyczna?"
    }), __jsx("title", null, "Tesla Stym. Terapia Polem Magnetycznym.")), __jsx("main", {
      className: _styles_TeslaStym_scss__WEBPACK_IMPORTED_MODULE_7___default.a.TeslaStym
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      justify: "space-between"
    }, __jsx(_components_UI_Headings_Heading2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, "Tesla Stym"), __jsx(_components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "Terapia Polem Magnetycznym"), __jsx(_components_UI_Headings_Heading4__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, "Jak dzia\u0142a g\u0142\u0119boka stymulacja elektromagnetyczna?"), __jsx("p", null, "G\u0142\u0119boko\u015B\u0107 efektywnej stymulacji polem elektromagnetycznym za pomoc\u0105 urz\u0105dzenia Tesla Stym si\u0119ga do 10 cm."), __jsx("p", null, "Indukcja ta jest oko\u0142o 150 razy wi\u0119ksza od najmocniejszych stososwanych do tej pory aparat\xF3w do magnetoterapii."), __jsx(_components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "Wskazania"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      sm: 6
    }, __jsx("ul", null, __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Schorzenia kr\u0119gos\u0142upa (np. ostry / przewlek\u0142y b\xF3l, rwa kulszowa, zmiany zwyrodnieniowe"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Zaburzenia uk\u0142adu nerwowego"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Zaburzenia uk\u0142adu mi\u0119\u015Bniowo-szkieletowego"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Rehabitacja sportowa (os\u0142abienie i zaniki mi\u0119\u015Bni)"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Zaburzenia uk\u0142adu moczowo-p\u0142ciowego"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Terapia nietrzymania moczu"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Z\u0142amania"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      sm: 6
    }, __jsx(_components_UI_Image_Image__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      src: _assets_images_TeslaStym_jpg__WEBPACK_IMPORTED_MODULE_9___default.a
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TeslaStym);

/***/ }),

/***/ "o6Mx":
/***/ (function(module, exports) {

module.exports = {
	"ListItem": "K66bgHPJ6W9Nz6slOTAt4"
};

/***/ }),

/***/ "s7/U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Headings_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aMS0");
/* harmony import */ var _Headings_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Headings_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries
 //styles



const heading3 = props => __jsx("h2", {
  className: _Headings_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Heading2
}, props.children);

/* harmony default export */ __webpack_exports__["a"] = (heading3);

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