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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0eNn":
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
/* harmony import */ var _styles_FalaUderzeniowa_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("HPQo");
/* harmony import */ var _styles_FalaUderzeniowa_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_FalaUderzeniowa_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Cpty");
/* harmony import */ var _assets_images_fala2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("SvrT");
/* harmony import */ var _assets_images_fala2_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fala2_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_fala3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ySS/");
/* harmony import */ var _assets_images_fala3_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fala3_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_fala4_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("PNCN");
/* harmony import */ var _assets_images_fala4_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fala4_jpg__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries


 //components






 //images





class FalaUderzeniowa extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
      name: "Description",
      content: "Fala uderzeniowa. Walka z b\xF3lem. Jak dzia\u0142a fala uderzeniowa? \u0141okie\u0107 tenisisty golfisty, zapalenie przyczep\xF3w mi\u0119\u015Bniowyc"
    }), __jsx("title", null, "Fala uderzeniowa. Skuteczna walka z b\xF3lem narz\u0105d\xF3w ruchu")), __jsx("main", {
      className: _styles_FalaUderzeniowa_scss__WEBPACK_IMPORTED_MODULE_7___default.a.FalaUderzeniowa
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      justify: "space-between"
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      sm: 12
    }, __jsx(_components_UI_Headings_Heading2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, "Fala uderzeniowa"), __jsx(_components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "Skuteczna walka z b\xF3lem narz\u0105d\xF3w ruchu"), __jsx(_components_UI_Headings_Heading4__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, "Jak dzia\u0142a fala uderzeniowa?"), __jsx("p", null, "Fala uderzeniowa przyspiesza procesy lecznicze poprzez stymulacj\u0119 cia\u0142a do samouzdrowienia. Poprawia metabolizm i polepsza kr\u0105\u017Cenie krwi. Uszkodzona tkanka stopniowo regeneruje si\u0119 a\u017C w ko\u0144cu zostaje wyleczona.")), __jsx(_components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "Wskazania"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      sm: 6
    }, __jsx("div", {
      className: _styles_FalaUderzeniowa_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Pics
    }, __jsx(_components_UI_Image_Image__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      src: _assets_images_fala2_jpg__WEBPACK_IMPORTED_MODULE_9___default.a
    }), __jsx(_components_UI_Image_Image__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      src: _assets_images_fala3_jpg__WEBPACK_IMPORTED_MODULE_10___default.a
    }), __jsx(_components_UI_Image_Image__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      src: _assets_images_fala4_jpg__WEBPACK_IMPORTED_MODULE_11___default.a
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      sm: 6
    }, __jsx("ul", null, __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Ostroga pi\u0119towa"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "\u0141okie\u0107 tenisisty i golfisty"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Zapalenie \u015Bci\u0119gien mi\u0119\u015Bni rotator\xF3w stawu barkowego"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "B\xF3l barku"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Zapalenie \u015Bci\u0119gna rzepkowego"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Zapalenie \u015Bci\u0119gna Achillesa"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "B\xF3l biodra, nadgarstka, szyi i plec\xF3w"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Mi\u0119\u015Bniowo-powi\u0119ziowe punkty spustowe"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Zesp\xF3\u0142 mi\u0119\u015Bnia piszczelowego przedniego"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Przewlek\u0142e zapalenie przyczep\xF3w mi\u0119\u015Bniowych"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FalaUderzeniowa);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0eNn");


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

/***/ "HPQo":
/***/ (function(module, exports) {

module.exports = {
	"FalaUderzeniowa": "_2k56Jmmj5XfsSg9l6bgOC9",
	"Pics": "Pj_vuHwscD8weh1iv5uLH"
};

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "PNCN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fala4-aec257d12d0bcc484348b62a7d6ee5ec.jpg";

/***/ }),

/***/ "SvrT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fala2-390f5f340bf0f2544fced23be3f7a82f.jpg";

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

/***/ }),

/***/ "ySS/":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fala3-78b4fd5a0a7a12d390e347eafd497f97.jpg";

/***/ })

/******/ });