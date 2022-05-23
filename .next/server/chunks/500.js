"use strict";
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 5508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.3603d54a.png","height":36,"width":171,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/AbaUm8Tb2ubLb5Lc9C4xChT5/gDMFRIKtfn6/BUAAADtAbaZmMPb0+XMb57m3joxCefz+f7/EQ4Iv/n6/Rv/AAD3xx8k/0HIicAAAAAASUVORK5CYII="});

/***/ }),

/***/ 260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: `${"http://44.204.27.29:8000"}`,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    responseType: "json"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ 6803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ Buttons_Button)
});

// UNUSED EXPORTS: ButtonWithIcon

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./helpers/classNames.js
var helpers_classNames = __webpack_require__(6822);
;// CONCATENATED MODULE: ./components/Buttons/Button.jsx


const Button = ({ title , outlinedClass ="outlined-btn" , outlined =false , onClick , isDisabled =false ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        disabled: isDisabled,
        className: (0,helpers_classNames/* default */.Z)(outlined ? outlinedClass : "btn", "rounded-full self-center duration-300 text-white shadow"),
        type: "submit",
        onClick: onClick,
        children: title
    });
};
/* harmony default export */ const Buttons_Button = (Button);

;// CONCATENATED MODULE: ./components/Buttons/ButtonWithIcon.jsx


const ButtonWithIcon = ({ title , Icon , position ="left" , isDisabled =false , onClick ,  })=>{
    return /*#__PURE__*/ _jsxs("button", {
        className: "btn rounded-full w-full flex justify-between mt-12 self-center duration-300 text-white shadow",
        type: "submit",
        onClick: onClick,
        disabled: isDisabled,
        children: [
            /*#__PURE__*/ _jsx("p", {
                className: classNames(position === "left" && "order-last"),
                children: title
            }),
            /*#__PURE__*/ _jsx(Icon, {
                className: "w-6"
            })
        ]
    });
};
/* harmony default export */ const Buttons_ButtonWithIcon = ((/* unused pure expression or super */ null && (ButtonWithIcon)));

;// CONCATENATED MODULE: ./components/Buttons/index.js




/***/ }),

/***/ 6078:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(528);
/* harmony import */ var _components_Icons_Logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8598);
/* harmony import */ var _components_Icons_HamburgerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7557);
/* harmony import */ var _components_Icons_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6718);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_3__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const menu = [
    {
        name: "Profile",
        path: "/profile"
    },
    {
        name: "My Seat",
        path: "/my-seat"
    },
    {
        name: "History",
        path: "/history"
    },
    {
        name: "Logout",
        icon: _components_Icons_Logout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
    }, 
];
const LoggedButton = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { logout  } = (0,_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const handleDirectPage = (action, path)=>{
        if (action === "Logout") {
            logout();
            return;
        }
        return router.push(path);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
            className: "relative",
            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
                            className: `
                ${open ? "" : "text-opacity-90"}
                group px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-opacity-75`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row space-x-3 rounded-full justify-between w-fit bg-shade-FG px-8 py-2.5 border border-black-10 hover:bg-black-20",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_HamburgerMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Icons_User__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
                                className: "absolute max-w-sm px-4 mt-3 transform -translate-x-1/2 left-0 min-w-max w-80 sm:px-0 md:max-w-3xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "overflow-hidden rounded-2 shadow-lg ring-1 ring-shade-FG",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative flex flex-col divide-y divide-black-10 bg-shade-FG",
                                        children: menu.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>handleDirectPage(item.name, item.path)
                                                ,
                                                className: "flex cursor-pointer items-center py-4 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row justify-between mx-4 w-full",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-sm font-medium text-gray-500",
                                                            children: item.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: item.description
                                                        }),
                                                        item.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                            "aria-hidden": "true",
                                                            fill: "#AFB7C4"
                                                        })
                                                    ]
                                                })
                                            }, item.name)
                                        )
                                    })
                                })
                            })
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoggedButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const HamburgerMenu = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 6h16M4 12h8m-8 6h16"
            })
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HamburgerMenu);


/***/ }),

/***/ 8598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Logout = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            })
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);


/***/ }),

/***/ 6718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const User = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "fill-rule": "evenodd",
                d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                "clip-rule": "evenodd"
            })
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 9500:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5508);
/* harmony import */ var _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(528);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6803);
/* harmony import */ var _LoggedButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6078);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_4__, _LoggedButton__WEBPACK_IMPORTED_MODULE_7__]);
([_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_4__, _LoggedButton__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Navbar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { isAuthenticated  } = (0,_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    console.log("isAuthenticated123", isAuthenticated);
    const handleDirectToLogin = ()=>{
        router.push("/auth/login");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "z-50 flex justify-center items-center fixed top-0 h-nav w-full bg-shade-FG shadow-xl",
        children: router.pathname.includes("/auth") || router.pathname.includes("/lounge-location") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-[90%] w-full self-center ml-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: _public_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        objectFit: "fill"
                    })
                })
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-[80%] w-full self-center ml-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                src: _public_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                objectFit: "fill"
                            })
                        })
                    })
                }),
                isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoggedButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                    onClick: handleDirectToLogin,
                    title: "Login",
                    outlined: true
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var _hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3777);
/* harmony import */ var _axios_instance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(260);
/* harmony import */ var _hooks_useToast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3899);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const AuthProvider = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { 0: isAuthenticated , 1: setIsAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { notify  } = (0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const loginMutation = (0,_hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("/login/verify");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function loadUserFromCookies() {
            const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("token");
            if (token) {
                _axios_instance__WEBPACK_IMPORTED_MODULE_4__/* ["default"].defaults.headers.Authorization */ .Z.defaults.headers.Authorization = `Bearer ${token}`;
                setIsAuthenticated(Boolean(token));
            }
            setLoading(false);
        }
        loadUserFromCookies();
    }, [
        loading
    ]);
    const login = async (data, path = "/")=>{
        loginMutation.mutate(data, {
            onSuccess: (res)=>{
                console.log("res", res);
                if (res.type === "error") return notify("error", res.message);
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("email", res["email"]);
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("token", res.loginToken);
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("nim", res.nim);
                setIsAuthenticated(true);
                _axios_instance__WEBPACK_IMPORTED_MODULE_4__/* ["default"].defaults.headers.Authorization */ .Z.defaults.headers.Authorization = `Bearer ${res.loginToken}`;
                notify("success", "Login Success!!");
                return router.replace(path);
            },
            onError: ()=>{
                notify("error", "Sorry, Something went wrong1!");
            }
        });
    };
    const logout = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("token");
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("email");
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("nim");
        delete _axios_instance__WEBPACK_IMPORTED_MODULE_4__/* ["default"].defaults.headers.common.Authorization */ .Z.defaults.headers.common.Authorization;
        window.location.pathname = "/auth/login";
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            isAuthenticated: isAuthenticated,
            login,
            loading,
            logout
        },
        children: children
    });
};
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext)
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const classNames = (...classes)=>{
    return classes.filter(Boolean).join(" ");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classNames);


/***/ }),

/***/ 3777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axios_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);


const usePostQuery = (path = "", config)=>{
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (formData)=>{
        const { data  } = await _axios_instance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(path, formData);
        return data;
    }, {
        ...config
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePostQuery);


/***/ }),

/***/ 3899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hooks_useToast)
});

;// CONCATENATED MODULE: ./utils/toastConfig.js
const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
};
/* harmony default export */ const utils_toastConfig = (toastConfig);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: ./components/Toast/index.jsx



// import {
//   FaInfo,
//   FaCheck,
//   FaExclamationTriangle,
//   FaBug,
//   FaExclamationCircle,
// } from 'react-icons/fa';
// export const displayIcon = (type) => {
//   switch (type) {
//     case 'success':
//       return <FaCheck />;
//     case 'info':
//       return <FaInfo />;
//     case 'error':
//       return <FaExclamationCircle />;
//     case 'warning':
//       return <FaExclamationTriangle />;
//     default:
//       return <FaBug />;
//   }
// };
const Toast = ({ type , message  })=>external_react_toastify_.toast[type](message, utils_toastConfig)
;
Toast.dismiss = external_react_toastify_.toast.dismiss;
/* harmony default export */ const components_Toast = ((/* unused pure expression or super */ null && (Toast)));

;// CONCATENATED MODULE: ./hooks/useToast.js




const useToast = ()=>{
    const notify = (0,external_react_.useCallback)((type, message)=>{
        return external_react_toastify_.toast[type](message, utils_toastConfig);
    }, []);
    return {
        notify
    };
};
/* harmony default export */ const hooks_useToast = (useToast);


/***/ })

};
;