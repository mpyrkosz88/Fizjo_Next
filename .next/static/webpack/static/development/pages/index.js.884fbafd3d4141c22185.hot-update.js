webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./assets/images/banner1.jpg":
/*!***********************************!*\
  !*** ./assets/images/banner1.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner1-9b77b69a427a458d7d34c36d74888809.jpg";

/***/ }),

/***/ "./assets/images/banner2.jpg":
/*!***********************************!*\
  !*** ./assets/images/banner2.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner2-937dc3fc3abc67603201256d3c45a686.jpg";

/***/ }),

/***/ "./assets/images/banner3.jpg":
/*!***********************************!*\
  !*** ./assets/images/banner3.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner3-be079e8792acbdcbcc07de9b151b0cf3.jpg";

/***/ }),

/***/ "./assets/images/banner4.jpg":
/*!***********************************!*\
  !*** ./assets/images/banner4.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner4-9e11c62f446cbe1073032ef375d695b4.jpg";

/***/ }),

/***/ "./assets/images/banner5.jpg":
/*!***********************************!*\
  !*** ./assets/images/banner5.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner5-a325e3a1cb15be9bc8097a0b238c6899.jpg";

/***/ }),

/***/ "./components/Slider/Slider.js":
/*!*************************************!*\
  !*** ./components/Slider/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Slider_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Slider.scss */ "./components/Slider/Slider.scss");
/* harmony import */ var _Slider_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Slider_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data */ "./components/Slider/data.js");
/* harmony import */ var _SliderItem_SliderItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SliderItem/SliderItem */ "./components/Slider/SliderItem/SliderItem.js");







var _jsxFileName = "E:\\Programowanie\\Projekty\\Fizjoterapia_NextJs\\components\\Slider\\Slider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
//libraries



 // const data = [
//   {
//     "id": 1,
//     "imgUrl": 'static/images/banner1.jpg',
//   },
//   {
//     "id": 2,
//     "imgUrl": 'static/images/banner2.jpg',
//   }, 
// ]

var Slider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Slider, _Component);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      'number': 1
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "startInterval", function () {
      _this.interval = setInterval(function () {
        return _this.changeSlide();
      }, 5000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeSlide", function () {
      var number = _this.state.number;
      number++;

      if (number > 5) {
        number = 1;
      }

      _this.setState({
        number: number
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startInterval();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("section", {
        className: _Slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Slider,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("ul", {
        className: _Slider_scss__WEBPACK_IMPORTED_MODULE_8___default.a.SliderList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, _data__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (index) {
        console.log(index);
        var background;

        if (_this2.state.number === index.id) {
          background = true;
        } else {
          background = false;
        }

        return __jsx(_SliderItem_SliderItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          imgUrl: index.imgUrl,
          key: index.id,
          background: background,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        });
      })));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/Slider/data.js":
/*!***********************************!*\
  !*** ./components/Slider/data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_banner1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/images/banner1.jpg */ "./assets/images/banner1.jpg");
/* harmony import */ var _assets_images_banner1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_banner1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_banner2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/images/banner2.jpg */ "./assets/images/banner2.jpg");
/* harmony import */ var _assets_images_banner2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_banner2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_banner3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/images/banner3.jpg */ "./assets/images/banner3.jpg");
/* harmony import */ var _assets_images_banner3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_banner3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_banner4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/images/banner4.jpg */ "./assets/images/banner4.jpg");
/* harmony import */ var _assets_images_banner4_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_banner4_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_banner5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/images/banner5.jpg */ "./assets/images/banner5.jpg");
/* harmony import */ var _assets_images_banner5_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_banner5_jpg__WEBPACK_IMPORTED_MODULE_4__);





var data = [{
  "id": 1,
  "imgUrl": '.' + _assets_images_banner1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  "id": 2,
  "imgUrl": '.' + _assets_images_banner2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a
}, {
  "id": 3,
  "imgUrl": '.' + _assets_images_banner3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
}, {
  "id": 4,
  "imgUrl": '.' + _assets_images_banner4_jpg__WEBPACK_IMPORTED_MODULE_3___default.a
}, {
  "id": 5,
  "imgUrl": '.' + _assets_images_banner5_jpg__WEBPACK_IMPORTED_MODULE_4___default.a
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ })

})
//# sourceMappingURL=index.js.884fbafd3d4141c22185.hot-update.js.map