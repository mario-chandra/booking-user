"use strict";
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 1881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Content = ({ title , children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-1 flex-col items-center mx-auto",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-xl-1 font-bold text-primary-500",
                children: title
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ }),

/***/ 8498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gN": () => (/* reexport */ List_Field),
  "ZA": () => (/* reexport */ List_Group)
});

// UNUSED EXPORTS: DateTime, Note, Status

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/List/Group.jsx

const Group = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full mt-20 flex flex-col items-center justify-center",
        children: children
    });
};
/* harmony default export */ const List_Group = (Group);

;// CONCATENATED MODULE: ./helpers/changeFieldText.js
const changeFieldText = (text)=>{
    switch(text){
        case "pending":
            return "processing";
        case "approve":
            return "accepted";
        case "decline":
            return "decline";
        default:
            return "";
    }
};
/* harmony default export */ const helpers_changeFieldText = (changeFieldText);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/icons/Outline/Time.svg
var _style, _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgTime = function SvgTime(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    id: "Time_svg__Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    style: {
      enableBackground: "new 0 0 24 24"
    },
    xmlSpace: "preserve"
  }, props), _style || (_style = /*#__PURE__*/external_react_.createElement("style", null, ".Time_svg__st0{fill:none;stroke:#afb7c4;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}")), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    className: "Time_svg__st0",
    d: "M21.2 12c0 5.1-4.1 9.2-9.2 9.2S2.7 17.1 2.7 12s4.1-9.3 9.2-9.3 9.3 4.2 9.3 9.3z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    className: "Time_svg__st0",
    d: "m15.4 14.9-3.8-2.2V7.8"
  })));
};

/* harmony default export */ const Time = (SvgTime);
;// CONCATENATED MODULE: ./public/icons/Outline/Calendar.svg
var Calendar_style, Calendar_path;

function Calendar_extends() { Calendar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Calendar_extends.apply(this, arguments); }



var SvgCalendar = function SvgCalendar(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Calendar_extends({
    id: "Calendar_svg__Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    style: {
      enableBackground: "new 0 0 24 24"
    },
    xmlSpace: "preserve"
  }, props), Calendar_style || (Calendar_style = /*#__PURE__*/external_react_.createElement("style", null, ".Calendar_svg__st0{fill:none;stroke:#afb7c4;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}")), Calendar_path || (Calendar_path = /*#__PURE__*/external_react_.createElement("path", {
    className: "Calendar_svg__st0",
    d: "M3.1 9.4h17.8M16.4 13.3h0M12 13.3h0M7.6 13.3h0M16.4 17.2h0M12 17.2h0M7.6 17.2h0M16 2v3.3M8 2v3.3M16.2 3.6H7.8C4.8 3.6 3 5.2 3 8.2v9C3 20.3 4.8 22 7.8 22h8.5c2.9 0 4.8-1.6 4.8-4.7V8.2c-.1-3-1.9-4.6-4.9-4.6z"
  })));
};

/* harmony default export */ const Calendar = (SvgCalendar);
;// CONCATENATED MODULE: ./components/List/DateTime.jsx



const DateTime = ({ date , time  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex mt-[10px] space-x-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Time, {
                            className: "w-6 h-6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-md-4 first-letter:capitalize text-gray-600",
                        children: time
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Calendar, {
                            className: "w-6 h-6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-md-4 first-letter:capitalize text-gray-600",
                        children: date
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const List_DateTime = (DateTime);

;// CONCATENATED MODULE: ./components/List/Note.jsx

const Note = ({ acceptBy , note  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "border-[1.5px] rounded-2 p-5 bg-gray-100 border-gray-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-md-2 text-primary-300",
                children: `Messages from : ${acceptBy}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-md-3 font-medium text-primary-400",
                children: note
            })
        ]
    });
};
/* harmony default export */ const List_Note = (Note);

;// CONCATENATED MODULE: ./components/List/Status.jsx


const checkStatusStyle = (status)=>{
    switch(status){
        case "processing":
            return "status-processing";
        case "accepted":
            return "status-accepted";
        case "decline":
            return "status-decline";
        default:
            return "";
    }
};
const Status = ({ status  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${checkStatusStyle(status)} first-letter:capitalize border py-2 px-4 rounded-1`,
        children: status
    });
};
/* harmony default export */ const List_Status = (Status);

;// CONCATENATED MODULE: ./components/List/Field.jsx





const Field = ({ label , value , status , // dateTime = { date: '03 Jan 2022', time: '10.00 - 11.00' },
dateTime , // note = {
//   acceptBy: 'Admin 1',
//   note: 'Sorry, the reservation at Aryaduta Lounge has been canceled because it has reached the maximum limit',
// },
note ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col w-1/2 border-b pb-[23px] mb-8 border-black-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-1 justify-between items-end ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-md-4 first-letter:capitalize mb-[14px] text-gray-600",
                                children: label
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "text-lg-3 font-medium text-gray-800 ",
                                children: value
                            }),
                            dateTime && /*#__PURE__*/ jsx_runtime_.jsx(List_DateTime, {
                                date: dateTime.date,
                                time: dateTime.time
                            })
                        ]
                    }),
                    status && /*#__PURE__*/ jsx_runtime_.jsx(List_Status, {
                        status: helpers_changeFieldText(status)
                    })
                ]
            }),
            (note === null || note === void 0 ? void 0 : note.note) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx(List_Note, {
                    acceptBy: note.acceptBy,
                    note: note.note
                })
            })
        ]
    });
};
/* harmony default export */ const List_Field = (Field);

;// CONCATENATED MODULE: ./components/List/index.js







/***/ }),

/***/ 7851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_1__]);
_components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PageLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-nav relative w-full h-full bg-no-repeat bg-cover bg-fixed flex items-start justify-center min-h-[calc(100vh_-_76px)]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "my-20 w-full",
                    children: children
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;