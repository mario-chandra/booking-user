"use strict";
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 3087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DataForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7903);
/* harmony import */ var _hooks_useToast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3899);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6803);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3777);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const LoginForm = ()=>{
    const { notify  } = (0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { register , formState: { errors  } , handleSubmit ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
            email: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Email Required")
        })),
        defaultValues: {
            email: ""
        }
    });
    const mutation = (0,_hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("/login");
    const onSubmit = (data)=>{
        mutation.mutate(data, {
            onSuccess: (res)=>{
                console.log("res", res, data);
                notify("success", "Success Login!!");
                return router.push({
                    pathname: "/auth/verify-otp",
                    query: {
                        token: res.token,
                        email: data.email
                    }
                });
            },
            onError: ()=>{
                notify("error", "Sorry Something went wrong!");
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                forms: [
                    {
                        label: "Student Email",
                        name: "email",
                        placeholder: "YourEmail@student.uph.edu",
                        type: "TextInput"
                    }, 
                ],
                register: register,
                errors: errors
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-12 text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                    title: "Login",
                    onClick: handleSubmit(onSubmit)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4090:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1881);
/* harmony import */ var _components_Form_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3087);
/* harmony import */ var _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Form_LoginForm__WEBPACK_IMPORTED_MODULE_2__, _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Form_LoginForm__WEBPACK_IMPORTED_MODULE_2__, _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Login = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container_Content__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "LOGIN",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_LoginForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
};
Login.layout = _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;