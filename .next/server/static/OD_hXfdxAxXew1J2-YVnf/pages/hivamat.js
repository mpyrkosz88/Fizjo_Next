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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("C9yd");


/***/ }),

/***/ "ByUh":
/***/ (function(module, exports) {

module.exports = {
	"Image": "_3ldQfhLZx5SpxpTJOWRSSS"
};

/***/ }),

/***/ "C9yd":
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
/* harmony import */ var _components_UI_Image_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YPhW");
/* harmony import */ var _styles_Hivamat_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dYJO");
/* harmony import */ var _styles_Hivamat_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Hivamat_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Cpty");
/* harmony import */ var _assets_images_Hivamat_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("k2Np");
/* harmony import */ var _assets_images_Hivamat_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Hivamat_jpg__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries


 //components





 //images



class Hivamat extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
      name: "Description",
      content: "Hivamat. Oscylacja g\u0142\u0119boka. Uszkodzenia neurologiczne. Gojenie ran"
    }), __jsx("title", null, "Hivamat. Oscylacja g\u0142\u0119boka")), __jsx("main", {
      className: _styles_Hivamat_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Hivamat
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      justify: "space-between"
    }, __jsx(_components_UI_Headings_Heading2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, "Hivamat 200 "), __jsx(_components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "Zabiegi z wykorzystaniem oscylacji g\u0142\u0119bokiej"), __jsx(_components_UI_Image_Image__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      src: _assets_images_Hivamat_jpg__WEBPACK_IMPORTED_MODULE_8___default.a
    }), __jsx("p", null, "Oscylacja g\u0142\u0119boka jest unikaln\u0105, opatentowan\u0105 metod\u0105 terapeutyczn\u0105. Jej specyficzny charakter pozwala na wytwarzanie w tkankach biologiczne efekty oscylacji wykorzystuj\u0105cych elektrostatyczne przyci\u0105ganie i odpychanie."), __jsx("p", null, "W przeciwie\u0144stwie do innych rodzaj\xF3w terapii, HIVAMAT 200 oddzia\u0142uje g\u0142\u0119boko na wszystkie warstwy tkanek (sk\xF3ra, tkanka \u0142\u0105czna, tkanka t\u0142uszczowa podsk\xF3rna, mi\u0119\u015Bnie, naczynia krwiono\u015Bne i limfatyczne), przy czym nie towarzysz\u0105 temu nieprzyjemne odczucia."), __jsx(_components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "Wskazania"), __jsx("ul", null, __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Urazy mechaniczne i przeci\u0105\u017Ceniowe"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Uszkodzenie neurologiczne"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Zespo\u0142y b\xF3lowe"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Regneracja po treningu i stabilizacja wydolno\u015Bci"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Dzia\u0142anie przeciwobrz\u0119kowe i przeciwzw\u0142\xF3knieniowe"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Wspomaganie gojenia ran")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Hivamat);

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

/***/ "dYJO":
/***/ (function(module, exports) {

module.exports = {
	"Hivamat": "_2Rfv9OM7CzjOjRiSbnuC-O"
};

/***/ }),

/***/ "k2Np":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Hivamat-ed9f79165a3d6e9d0152a3a6dc6142a6.jpg";

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