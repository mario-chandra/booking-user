"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 7332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var _components_OTPInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7094);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_3__]);
([_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const VerifyOTPForm = ({ token , emailTitle  })=>{
    const { 0: inputData , 1: setInputData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { login  } = (0,_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .a)();
    const handleVerifyOTP = ()=>{
        login({
            otp: inputData,
            token
        }, "/auth/register");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mb-8 text-black-40 break-words text-center text-primary-300",
                children: [
                    "Enter the verification code that send to ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " ",
                    emailTitle
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OTPInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                isNumberInput: true,
                autoFocus: true,
                length: 6,
                onChangeOTP: setInputData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 mb-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                    disable: (inputData === null || inputData === void 0 ? void 0 : inputData.length) !== 6,
                    onClick: handleVerifyOTP,
                    title: "Continue"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyOTPForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_OTPInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/usePrevious.js

const usePrevious = (value)=>{
    const ref = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
};
/* harmony default export */ const hooks_usePrevious = (usePrevious);

;// CONCATENATED MODULE: ./components/Form/components/OTPInput/SingleOTPInput.jsx



const SingleInput = ({ focus , autoFocus , ...rest })=>{
    const inputRef = (0,external_react_.useRef)(null);
    const prevFocus = hooks_usePrevious(!!focus);
    (0,external_react_.useLayoutEffect)(()=>{
        if (inputRef.current) {
            if (focus && autoFocus) {
                inputRef.current.focus();
            }
            if (focus && autoFocus && focus !== prevFocus) {
                inputRef.current.focus();
                inputRef.current.select();
            }
        }
    }, [
        autoFocus,
        focus,
        prevFocus
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        className: "w-max mr-2 p-5 text-sm-4 text-center text-gray-900 border border-gray-700 rounded bg-shade-FG",
        ref: inputRef,
        ...rest
    });
};
const SingleOTPInput = /*#__PURE__*/ (0,external_react_.memo)(SingleInput);
/* harmony default export */ const OTPInput_SingleOTPInput = (SingleOTPInput);

;// CONCATENATED MODULE: ./components/Form/components/OTPInput/index.jsx



const OTP = ({ length , autoFocus , disabled , onChangeOTP , isNumberInput  })=>{
    const { 0: activeInput , 1: setActiveInput  } = (0,external_react_.useState)(0);
    const { 0: otpValues , 1: setOTPValues  } = (0,external_react_.useState)(Array(length).fill(""));
    const handleOtpChange = (0,external_react_.useCallback)((otp)=>{
        const otpValue = otp.join("");
        onChangeOTP(otpValue);
    }, [
        onChangeOTP
    ]);
    // Helper to return value with the right type: 'text' or 'number'
    const getRightValue = (0,external_react_.useCallback)((str)=>{
        let changedValue = str;
        if (!isNumberInput || !changedValue) {
            return changedValue;
        }
        return Number(changedValue) >= 0 ? changedValue : "";
    }, [
        isNumberInput
    ]);
    // Change OTP value at focussing input
    const changeCodeAtFocus = (0,external_react_.useCallback)((str)=>{
        const updatedOTPValues = [
            ...otpValues
        ];
        updatedOTPValues[activeInput] = str[0] || "";
        setOTPValues(updatedOTPValues);
        handleOtpChange(updatedOTPValues);
    }, [
        activeInput,
        handleOtpChange,
        otpValues
    ]);
    // Focus `inputIndex` input
    const focusInput = (0,external_react_.useCallback)((inputIndex)=>{
        const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
        setActiveInput(selectedIndex);
    }, [
        length
    ]);
    const focusPrevInput = (0,external_react_.useCallback)(()=>{
        focusInput(activeInput - 1);
    }, [
        activeInput,
        focusInput
    ]);
    const focusNextInput = (0,external_react_.useCallback)(()=>{
        focusInput(activeInput + 1);
    }, [
        activeInput,
        focusInput
    ]);
    // Handle onFocus input
    const handleOnFocus = (0,external_react_.useCallback)((index)=>()=>{
            focusInput(index);
        }
    , [
        focusInput
    ]);
    // Handle onChange value for each input
    const handleOnChange = (0,external_react_.useCallback)((e)=>{
        const val = getRightValue(e.currentTarget.value);
        if (!val) {
            e.preventDefault();
            return;
        }
        changeCodeAtFocus(val);
        focusNextInput();
    }, [
        changeCodeAtFocus,
        focusNextInput,
        getRightValue
    ]);
    // Handle onBlur input
    const onBlur = (0,external_react_.useCallback)(()=>{
        setActiveInput(-1);
    }, []);
    // Handle onKeyDown input
    const handleOnKeyDown = (0,external_react_.useCallback)((e)=>{
        const pressedKey = e.key;
        switch(pressedKey){
            case "Backspace":
            case "Delete":
                {
                    e.preventDefault();
                    if (otpValues[activeInput]) {
                        changeCodeAtFocus("");
                    } else {
                        focusPrevInput();
                    }
                    break;
                }
            case "ArrowLeft":
                {
                    e.preventDefault();
                    focusPrevInput();
                    break;
                }
            case "ArrowRight":
                {
                    e.preventDefault();
                    focusNextInput();
                    break;
                }
            default:
                {
                    if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
                        e.preventDefault();
                    }
                    break;
                }
        }
    }, [
        activeInput,
        changeCodeAtFocus,
        focusNextInput,
        focusPrevInput,
        otpValues
    ]);
    const handleOnPaste = (0,external_react_.useCallback)((e)=>{
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text/plain").trim().slice(0, length - activeInput).split("");
        if (pastedData) {
            let nextFocusIndex = 0;
            const updatedOTPValues = [
                ...otpValues
            ];
            updatedOTPValues.forEach((val, index)=>{
                if (index >= activeInput) {
                    const changedValue = getRightValue(pastedData.shift() || val);
                    if (changedValue) {
                        updatedOTPValues[index] = changedValue;
                        nextFocusIndex = index;
                    }
                }
            });
            setOTPValues(updatedOTPValues);
            setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
        }
    }, [
        activeInput,
        getRightValue,
        length,
        otpValues
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: Array(length).fill("").map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(OTPInput_SingleOTPInput, {
                maxlength: "1",
                size: "1",
                type: "text",
                focus: activeInput === index,
                value: otpValues && otpValues[index],
                autoFocus: autoFocus,
                onFocus: handleOnFocus(index),
                onChange: handleOnChange,
                onKeyDown: handleOnKeyDown,
                onBlur: onBlur,
                onPaste: handleOnPaste,
                disabled: disabled
            }, `SingleInput-${index}`)
        )
    });
};
const OTPInput = /*#__PURE__*/ (0,external_react_.memo)(OTP);
/* harmony default export */ const components_OTPInput = (OTPInput);


/***/ }),

/***/ 1638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1881);
/* harmony import */ var _components_Form_VerifyOTPForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7332);
/* harmony import */ var _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Form_VerifyOTPForm__WEBPACK_IMPORTED_MODULE_2__, _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Form_VerifyOTPForm__WEBPACK_IMPORTED_MODULE_2__, _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getServerSideProps = async ({ req , query  })=>{
    const token = query === null || query === void 0 ? void 0 : query.token;
    const email = query === null || query === void 0 ? void 0 : query.email;
    if (token === null || token === undefined) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false
            }
        };
    }
    return {
        props: {
            token,
            email
        }
    };
};
const VerifyOTP = ({ token , email  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container_Content__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Verify Account",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_VerifyOTPForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            emailTitle: email,
            token: token
        })
    });
};
VerifyOTP.layout = _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyOTP);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,500,700], () => (__webpack_exec__(1638)));
module.exports = __webpack_exports__;

})();