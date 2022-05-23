"use strict";
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 7903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Form_DataForm)
});

// NAMESPACE OBJECT: ./components/Form/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, {
  "PassInput": () => (components_PassInput),
  "SelectInput": () => (components_SelectInput),
  "TextInput": () => (components_TextInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ErrorMessage/index.jsx

const ErrorMessage = ({ message  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: "mt-2 error-text",
        children: message
    });
};
/* harmony default export */ const components_ErrorMessage = (ErrorMessage);

// EXTERNAL MODULE: ./helpers/classNames.js
var classNames = __webpack_require__(6822);
;// CONCATENATED MODULE: ./components/Form/components/TextInput.jsx



const TextInput = ({ name , inputType ="text" , placeholder , label , register =()=>{} , errors ,  })=>{
    var ref;
    const isError = errors && errors[name];
    const r = register(name);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "label",
                for: name,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (0,classNames/* default */.Z)(isError && "error-input", "input"),
                id: name,
                type: inputType,
                placeholder: placeholder,
                // value={input}
                name: r === null || r === void 0 ? void 0 : r.name,
                onBlur: r === null || r === void 0 ? void 0 : r.onBlur,
                onChange: r === null || r === void 0 ? void 0 : r.onChange,
                ref: r === null || r === void 0 ? void 0 : r.ref
            }),
            isError && /*#__PURE__*/ jsx_runtime_.jsx(components_ErrorMessage, {
                message: (ref = errors[name]) === null || ref === void 0 ? void 0 : ref.message
            })
        ]
    }, name);
};
/* harmony default export */ const components_TextInput = (TextInput);

;// CONCATENATED MODULE: ./components/IconButton/index.jsx

const IconButton = ({ children , title , onClick  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: onClick,
        className: "cursor-pointer bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center",
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const components_IconButton = (IconButton);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Form/components/InputIcon.jsx


const InputIcon = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "absolute top-1/2 right-0 -translate-y-2/4",
        children: children
    });
};
/* harmony default export */ const components_InputIcon = (InputIcon);

// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
;// CONCATENATED MODULE: ./components/Form/components/PassInput.jsx



// import EyeIcon from '../../../public/icons/eye.svg';
// import OffEyeIcon from '../../../public/icons/eye-off.svg';



const PassInput = ({ name , placeholder , label , register , errors  })=>{
    var ref;
    const { 0: passHidden , 1: setPassHidden  } = (0,external_react_.useState)(true);
    const tooglePass = ()=>{
        setPassHidden((prev)=>!prev
        );
    };
    const isError = errors && errors[name];
    const r = register(name);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "label",
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "input w-full h-full",
                        placeholder: placeholder,
                        type: passHidden ? "password" : "text",
                        name: r === null || r === void 0 ? void 0 : r.name,
                        onBlur: r === null || r === void 0 ? void 0 : r.onBlur,
                        onChange: r === null || r === void 0 ? void 0 : r.onChange,
                        ref: r === null || r === void 0 ? void 0 : r.ref
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_InputIcon, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_IconButton, {
                            onClick: tooglePass,
                            children: passHidden ? /*#__PURE__*/ jsx_runtime_.jsx(solid_.EyeOffIcon, {
                                width: 20
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(solid_.EyeIcon, {
                                width: 20
                            })
                        })
                    })
                ]
            }),
            isError && /*#__PURE__*/ jsx_runtime_.jsx(components_ErrorMessage, {
                message: (ref = errors[name]) === null || ref === void 0 ? void 0 : ref.message
            })
        ]
    }, name);
};
/* harmony default export */ const components_PassInput = (PassInput);

// EXTERNAL MODULE: ./public/icons/Outline/Chevron Up.svg
var Chevron_Up = __webpack_require__(9876);
// EXTERNAL MODULE: ./public/icons/Outline/Chevron Down.svg
var Chevron_Down = __webpack_require__(9749);
// EXTERNAL MODULE: ./hooks/useGetQuery.js
var useGetQuery = __webpack_require__(4424);
;// CONCATENATED MODULE: ./components/Dropdowns/index.jsx






const Dropdowns = ({ r , path , itemId , itemLabel , placeholder , setValue  })=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)("");
    const handleClick = ()=>{
        setOpen((prev)=>!prev
        );
    };
    const handleSelect = (item)=>{
        setOpen(false);
        setSelected(item[itemLabel]);
        setValue(r.name, item[itemId]);
    };
    const { data , isFetching  } = (0,useGetQuery/* default */.Z)("asdf", path, {
        onSuccess: ()=>{},
        onError: ()=>{},
        enabled: open
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "box-border relative h-[56px] w-[468px]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: handleClick,
                    // tabIndex="0"
                    className: "rounded-full flex w-full justify-between items-center px-4 py-4 border h-full bg-shade-FG border-shade-BD",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (0,classNames/* default */.Z)(selected ? "text-gray-700" : "text-shade-BD", "ml-2 text-sm"),
                            children: selected ? selected : placeholder
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " flex justify-center",
                            children: open ? /*#__PURE__*/ jsx_runtime_.jsx(Chevron_Down/* default */.Z, {
                                width: 20,
                                height: 20
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(Chevron_Up/* default */.Z, {
                                width: 20,
                                height: 20
                            })
                        })
                    ]
                }),
                open && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    // tabIndex="0"
                    className: "absolute z-40 shadow-md w-full overflow-hidden mt-2 menu text-gray-700 bg-shade-FG rounded-3 ",
                    children: isFetching ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-gray-800",
                        children: "Loading"
                    }) : data.map((item)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "hover:bg-gray-300 cursor-pointer py-4 px-6",
                            onClick: ()=>handleSelect(item)
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: item[itemLabel]
                            })
                        }, item[itemId]);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Dropdowns = (Dropdowns);

;// CONCATENATED MODULE: ./components/Form/components/SelectInput.jsx


const SelectInput = ({ path , itemId ="id" , itemLabel ="" , name , placeholder , label , register =()=>{} , setValue ,  })=>{
    const r = register(name);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "label",
                for: name,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Dropdowns, {
                r: r,
                path: path,
                itemId: itemId,
                itemLabel: itemLabel,
                placeholder: placeholder,
                setValue: setValue
            })
        ]
    }, name);
};
/* harmony default export */ const components_SelectInput = (SelectInput);

;// CONCATENATED MODULE: ./components/Form/components/index.js




;// CONCATENATED MODULE: ./components/Form/DataForm.jsx


const DataForm = ({ forms =[] , register , control , errors , setValue , getValues ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: forms.map((form)=>{
            const Comp = components_namespaceObject[form.type];
            return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
                register: register,
                errors: errors,
                control: control,
                setValue: setValue,
                getValues: getValues,
                ...form
            }, form.name);
        })
    });
};
/* harmony default export */ const Form_DataForm = (DataForm);


/***/ })

};
;