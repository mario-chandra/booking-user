"use strict";
exports.id = 397;
exports.ids = [397];
exports.modules = {

/***/ 397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LoadingModal": () => (/* reexport */ Loading_LoadingModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Loading/LoadingModal.jsx

const LoadingModal = ({ title ="Connecting to client..."  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-75",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-shade-FG border py-4 px-5 rounded-2 flex items-center flex-col",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "loader-dots block relative w-20 h-5 mt-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary-500"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary-500"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary-500"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary-500"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-gray-500 text-xs font-medium mt-2 text-center",
                    children: title
                })
            ]
        })
    });
};
/* harmony default export */ const Loading_LoadingModal = (LoadingModal);

;// CONCATENATED MODULE: ./components/Loading/index.js



/***/ })

};
;