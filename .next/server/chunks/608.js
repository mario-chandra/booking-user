"use strict";
exports.id = 608;
exports.ids = [608];
exports.modules = {

/***/ 9749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgChevronDown = function SvgChevronDown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    style: {
      enableBackground: "new 0 0 24 24"
    },
    xmlSpace: "preserve"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.5 8c.3-.3.7-.3 1-.1V8l6.5 6.5L18.5 8c.3-.3.7-.3 1-.1V8c.3.3.3.7.1 1h-.1l-7 7c-.3.3-.7.3-1 .1V16l-7-7c-.3-.3-.3-.7 0-1z",
    style: {
      fill: "#1c2560"
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgChevronDown);

/***/ }),

/***/ 9876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgChevronUp = function SvgChevronUp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    style: {
      enableBackground: "new 0 0 24 24"
    },
    xmlSpace: "preserve"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M19.5 16c-.3.3-.7.3-1 .1V16L12 9.6 5.5 16c-.3.3-.7.3-1 .1V16c-.3-.3-.3-.7-.1-1h.1l7-7c.3-.3.7-.3 1-.1V8l7 7c.3.3.3.7 0 1z",
    style: {
      fill: "#afb7c4"
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgChevronUp);

/***/ }),

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
// import instance from '@/axios/instance';


const useGetQuery = (queryId = "1", path = "", config)=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(queryId, async ()=>{
        const { data  } = await _axios_instance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(path);
        return data;
    }, {
        // select: filter,
        ...config
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetQuery);


/***/ })

};
;