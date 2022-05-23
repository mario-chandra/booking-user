(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,344,461];
exports.modules = {

/***/ 8870:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);
/* harmony import */ var _pages_auth_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4090);
/* harmony import */ var _pages_auth_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5332);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_1__, _pages_auth_login__WEBPACK_IMPORTED_MODULE_2__, _pages_auth_register__WEBPACK_IMPORTED_MODULE_3__]);
([_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_1__, _pages_auth_login__WEBPACK_IMPORTED_MODULE_2__, _pages_auth_register__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const { LoadingModal  } = __webpack_require__(397);
const ProtectedRoutes = ({ children  })=>{
    const { isAuthenticated , isLoading  } = useAuth();
    const router = useRouter();
    console.log("isAuthenticated", isAuthenticated, router.pathname.includes("/"));
    if (isLoading) {
        return /*#__PURE__*/ _jsx(LoadingModal, {
            title: "Loading..."
        });
    }
    if (!isAuthenticated && router.pathname !== "/") {
        console.log("protec");
        return router.push("/auth/login");
    }
    // if (!Boolean(dataStudent)) return router.push('/auth/register');
    // if (!Boolean(dataStudent)) {
    //   router.replace('/auth/register');
    // }
    return children;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ProtectedRoutes)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5184);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5918);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(528);
/* harmony import */ var _axios_ProtectedRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8870);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(397);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7073);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_7__, _axios_ProtectedRoutes__WEBPACK_IMPORTED_MODULE_8__]);
([_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_7__, _axios_ProtectedRoutes__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function MyFallbackComponent({ error , resetErrorBoundary  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        role: "alert",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Something went wrong:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                children: error.message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: resetErrorBoundary,
                children: "Try again"
            })
        ]
    });
}
function MyApp({ Component , pageProps  }) {
    const { 0: showChild , 1: setShowChild  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
                refetchOnmount: true,
                refetchOnReconnect: true,
                retry: true,
                staleTime: 5 * 60 * 1000
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowChild(true);
        const jssStyle = document.querySelector("#jss-server-side");
        if (jssStyle) {
            jssStyle.parentElement.removeChild(jssStyle);
        }
    }, []);
    // for handle error hydrade ui
    if (!showChild) {
        return null;
    }
    if (true) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    const Layout = Component.layout || (({ children  })=>{
        children;
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_2__.ErrorBoundary, {
        FallbackComponent: MyFallbackComponent,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
            client: queryClient,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_7__/* .AuthProvider */ .H, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Layout, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_9__.LoadingModal, {
                                    title: "Loading ...."
                                }),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                newestOnTop: false,
                                closeOnClick: true,
                                rtl: false,
                                pauseOnFocusLoss: true,
                                draggable: true,
                                pauseOnHover: true
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__.ReactQueryDevtools, {
                    initialIsOpen: false,
                    position: "bottom-right"
                })
            ]
        })
    });
}
// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   // ctx.store.dispatch({})
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};
//   return { pageProps };
// };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 1143:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7073:
/***/ ((module) => {

"use strict";
module.exports = require("react-dates/initialize");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("react-error-boundary");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 5918:
/***/ ((module) => {

"use strict";
module.exports = require("react-query/devtools");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

"use strict";
module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,500,608,700,903,397,332,90], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();