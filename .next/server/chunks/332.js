"use strict";
exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 6998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useToast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3899);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6803);
/* harmony import */ var _DataForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7903);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3777);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_8__]);
([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const RegisterForm = ()=>{
    const { notify  } = (0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const mutation = (0,_hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("/students");
    const { setValue , register , formState: { errors  } , handleSubmit ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(yup__WEBPACK_IMPORTED_MODULE_6__.object().shape({
            nim: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Student ID is Required!"),
            nama: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Student Name is Required!"),
            kelas: yup__WEBPACK_IMPORTED_MODULE_6__.string().required("Student Class is Required!"),
            id_program: yup__WEBPACK_IMPORTED_MODULE_6__.number()
        })),
        defaultValues: {
            nim: null,
            nama: null,
            kelas: null,
            id_program: null
        }
    });
    console.log("errors", errors);
    const onSubmit = (data)=>{
        console.log("data regis", data);
        mutation.mutate({
            ...data,
            email: js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get("email")
        }, {
            onSuccess: (res)=>{
                console.log("res", res);
                js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].set("nim", data.nim);
                notify("success", "Register Success!");
                router.replace("/");
            },
            onError: (err)=>{
                console.log("err", err);
                notify("error", "Register Error!");
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                forms: [
                    {
                        label: "Student ID",
                        name: "nim",
                        placeholder: "ex. 03082180005",
                        type: "TextInput"
                    },
                    {
                        label: "Name",
                        name: "nama",
                        placeholder: "ex. Farandi Sutanto",
                        type: "TextInput"
                    },
                    {
                        label: "Class",
                        name: "kelas",
                        placeholder: "ex. 18Ti2",
                        type: "TextInput"
                    },
                    {
                        label: "Program",
                        itemId: "id_program",
                        itemLabel: "program_name",
                        name: "id_program",
                        placeholder: "Select your study program",
                        path: "/program",
                        type: "SelectInput"
                    }, 
                ],
                register: register,
                errors: errors,
                setValue: setValue
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-12 text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                    title: "Continue",
                    onClick: handleSubmit(onSubmit)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1881);
/* harmony import */ var _components_Form_RegisterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6998);
/* harmony import */ var _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8634);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Form_RegisterForm__WEBPACK_IMPORTED_MODULE_3__, _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Form_RegisterForm__WEBPACK_IMPORTED_MODULE_3__, _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const getServerSideProps = async ({ req  })=>{
    const email = req.cookies.email;
    const token = req.cookies.token;
    if (!Boolean(email) && !Boolean(token)) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false
            }
        };
    }
    const data = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${"http://44.204.27.29:8000"}/students/byEmail?email=${email}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        return response.data[0];
    });
    if (Boolean(data)) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
};
const Register = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container_Content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Input Your Data",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_RegisterForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    });
};
Register.layout = _layout_AuthLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;