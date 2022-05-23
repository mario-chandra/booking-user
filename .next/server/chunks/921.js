"use strict";
exports.id = 921;
exports.ids = [921];
exports.modules = {

/***/ 100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/processing.5b180281.png","height":340,"width":340,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBUlEQVR42mN4/vw5IwMQAGmfJ0+fNT968rT6xYvn3nfuP2RigIGHDx5IvX33rvnEoUOz5k2Ztu/tu/ftT548CWaAASAn5M3bt01XL1+eWJRb9eXQ4eNT3r9/V3fv3n0ZhmfPnkUDjW9//uxx5dyFi644eSX9nzhx1savX7/U3r//wBqo+2nXp4/vq5cuWLs5I3fufw//2v8FRQ1337171/Lw4SM9hnfv3npfv3GzLTJ+0f+mrt2/D5+8sW3/voPXLl68XMIAA1WlXT1api1HFi7ef+/R43uN567fXXjgzBU7BgYgePXqpeSZY0cDGIDgwaMH1gdPXUrff/py7MmL1wUZGBgYAHjdmNWhwQ0TAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 5921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1881);
/* harmony import */ var _public_images_processing_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6803);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);






const EmptyStatePage = ({ title , btnTitle , contentTitle  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleClick = ()=>{
        return router.push("/");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Container_Content__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: title,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-20 w-[340px] h-[340px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    // className="mt-20"
                    src: _public_images_processing_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                    alt: "processing image",
                    width: 340,
                    height: 340,
                    quality: 100,
                    objectFit: "responsive"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-16 flex flex-col items-center justify-center text-black",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mb-3 text-xl-1 font-semibold text-primary-500",
                        children: contentTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg-3 font-medium text-primary-300",
                        children: "Please kindly wait, we will notify"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg-3 font-medium text-primary-300",
                        children: "you as soon as possible"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                title: btnTitle,
                onClick: handleClick
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyStatePage);


/***/ })

};
;