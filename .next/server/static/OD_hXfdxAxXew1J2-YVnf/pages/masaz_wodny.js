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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("37E0");


/***/ }),

/***/ "37E0":
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
/* harmony import */ var _styles_MasazWodny_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("DA6/");
/* harmony import */ var _styles_MasazWodny_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_MasazWodny_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Cpty");
/* harmony import */ var _assets_images_VelusJet_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("P8OK");
/* harmony import */ var _assets_images_VelusJet_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_VelusJet_jpg__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries


 //components





 //images



class Velus extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
      name: "Description",
      content: "VelusJet. Suchy masa\u017C wodny. Strefowy masa\u017C membranowy. Masa\u017C karku, masa\u017C mi\u0119\u015Bni."
    }), __jsx("title", null, "VelusJet. Suchy masa\u017C wodny. Strefowy masa\u017C membranowy")), __jsx("main", {
      className: _styles_MasazWodny_scss__WEBPACK_IMPORTED_MODULE_6___default.a.MasazWodny
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      container: true,
      justify: "space-between"
    }, __jsx(_components_UI_Headings_Heading2__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, "Suchy masa\u017C wodny"), __jsx(_components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "VelusJet - Urz\u0105dzenie do strefowego masa\u017Cu membranowego"), __jsx("p", null, "Masa\u017Ce na VelusJet dostosowywane s\u0105 z dok\u0142adno\u015Bci\u0105 do 1 cm, przez co terapeuta ma mo\u017Cliwo\u015B\u0107 dostosowania masa\u017Cu do indywidualnych potrzeb ka\u017Cdego pacjenta."), __jsx("p", null, "R\xF3\u017Cnorodno\u015B\u0107 typ\xF3w masa\u017Cu pozwala pacjentom osi\u0105gn\u0105\u0107 najwy\u017Cszy mo\u017Cliwy poziom dostosowania terapii do indywidualnych potrzeb."), __jsx(_components_UI_Image_Image__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      src: _assets_images_VelusJet_jpg__WEBPACK_IMPORTED_MODULE_8___default.a
    }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      sm: 6
    }, __jsx(_components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "Wp\u0142yw VelusJet na ustr\xF3j"), __jsx("ul", null, __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Pobudza uk\u0142ad krwiono\u015Bny i limfatyczny do pracy, zapewniaja\u0107 us\u0142ugi transportowe, od\u017Cywcze, oczyszczaj\u0105ce i regeneracyjne."), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Likwiduje objawy zastoinowe, a tak\u017Ce przy\u015Bpiesza wch\u0142anianie obrz\u0119k\xF3w."), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Zwi\u0119ksza elastyczno\u015B\u0107 i wytrzyma\u0142o\u015B\u0107 aparatu wi\u0119zad\u0142owego oraz ruchomo\u015B\u0107 staw\xF3w."), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Masa\u017C karku, grzbietu oraz odcinka l\u0119d\u017Awiowo-krzy\u017Cowego oddzia\u0142uje na nerwy rdzeniowe i ich sploty, a tym samym korzystnie dzia\u0142a na funkcje ko\u0144czyn g\xF3rnych i dolnych."), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Masa\u017C mi\u0119\u015Bni przykr\u0119gos\u0142upowych wp\u0142ywa na autonomiczny uk\u0142ad nerwowy, reguluj\u0105c jego czynno\u015B\u0107."))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      sm: 6
    }, __jsx(_components_UI_Headings_Heading3__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, "Wskazania do stosowania"), __jsx("ul", null, __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Stany zm\u0119czenie po intensywnym wysi\u0142ku fizycznym"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Mi\u0119\u015Bniob\xF3le z przeci\u0105\u017Cenia i spowodowane \"z\u0142\u0105\" postaw\u0105 cia\u0142a"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Zaniki, niedow\u0142ady, neurogenne zaniki mi\u0119\u015Bniowe"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Choroby zwyrodnieniowe staw\xF3w kr\u0119gos\u0142upa i obwodowych"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Choroba Bechterewa (ZZSK)"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Przewlek\u0142e zapalenia staw\xF3w"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Lumbago"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Uszkodzenia nerw\xF3w obwodowych"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Stany po (MPD) m\xF3zgowym pora\u017Ceniu dzieci\u0119cym"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Zaburzenia kr\u0105\u017Cenia obwodowego"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Nadmierna wiotko\u015B\u0107 tkanki sk\xF3rnej"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Obrz\u0119ki limfatyczne"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Oty\u0142o\u015B\u0107"), __jsx(_components_UI_List_ListItem__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "Cellulitis"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Velus);

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

/***/ "DA6/":
/***/ (function(module, exports) {

module.exports = {
	"MasazWodny": "_1YOvl-oWBwmh4_qi8YeC_Z"
};

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "P8OK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/VelusJet-baf9c9f433a72cb11ca97abeaaa8af28.jpg";

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