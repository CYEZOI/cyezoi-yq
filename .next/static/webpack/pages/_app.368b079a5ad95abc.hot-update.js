"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/.pnpm/react-bootstrap@2.10.4_@types+react@18.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/.pnpm/react-bootstrap@2.10.4_@types+react@18.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ \"./node_modules/.pnpm/react-bootstrap@2.10.4_@types+react@18.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavDropdown.js\");\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap-icons */ \"./node_modules/.pnpm/react-bootstrap-icons@1.11.4_react@18.3.1/node_modules/react-bootstrap-icons/dist/index.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/i18n */ \"./src/i18n.ts\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/.pnpm/bootstrap@5.3.3_@popperjs+core@2.11.8/node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"__barrel_optimize__?names=Container!=!./node_modules/.pnpm/react-bootstrap@2.10.4_@types+react@18.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"en\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    _i18n__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeLanguage(language);\n    const { t } = _i18n__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    const handleLanguage = (language)=>{\n        localStorage.setItem(\"language\", language);\n        _i18n__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeLanguage(language);\n        setLanguage(language);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        typeof document !== undefined && // import(\"react-bootstrap/dist/react-bootstrap\");\n        handleLanguage(localStorage.getItem(\"language\") || \"en\");\n        typeof localStorage !== undefined && setUsername(localStorage.getItem(\"username\") || \"\");\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                expand: \"lg\",\n                className: \"bg-body-tertiary mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Brand, {\n                            children: t(\"brand\")\n                        }, void 0, false, {\n                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Toggle, {}, void 0, false, {\n                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Collapse, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"me-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n                                            href: \"/\",\n                                            children: t(\"home\")\n                                        }, void 0, false, {\n                                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n                                            href: \"/student\",\n                                            children: t(\"student\")\n                                        }, void 0, false, {\n                                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n                                            href: \"/privilegeRecord\",\n                                            children: t(\"privilegeRecord\")\n                                        }, void 0, false, {\n                                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n                                            href: \"/finance\",\n                                            children: t(\"finance\")\n                                        }, void 0, false, {\n                                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_8__.Translate, {\n                                                className: \"me-2\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 37\n                                            }, void 0),\n                                            t(\"language\")\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 31\n                                    }, void 0),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                                            onClick: ()=>{\n                                                handleLanguage(\"en\");\n                                            },\n                                            children: \"English\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                                            onClick: ()=>{\n                                                handleLanguage(\"zh\");\n                                            },\n                                            children: \"中文\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 11\n                                }, this),\n                                username == \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n                                    href: \"/login\",\n                                    children: t(\"login\")\n                                }, void 0, false, {\n                                    fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    title: username,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                                        onClick: ()=>{\n                                            localStorage.removeItem(\"username\");\n                                            setUsername(\"\");\n                                        },\n                                        children: t(\"logout\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        classList: \"mt-2\"\n                    }, void 0, false, {\n                        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                            children: t(\"footer\")\n                        }, void 0, false, {\n                            fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/langningchen/cyezoi-yq/src/pages/_app.tsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"geHhQMBC8dUml8zsgLUayHr/9lc=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3NDO0FBQ007QUFDVTtBQUNKO0FBQ3hCO0FBQ2dCO0FBQ0U7QUFDQTtBQUU3QixTQUFTUSxJQUFJLEtBQWtDO1FBQWxDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZLEdBQWxDOztJQUMxQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDRiw0REFBbUIsQ0FBQ087SUFDcEIsTUFBTSxFQUFFSyxDQUFDLEVBQUUsR0FBR1osNkNBQUlBO0lBQ2xCLE1BQU1hLGlCQUFpQixDQUFDTjtRQUN0Qk8sYUFBYUMsT0FBTyxDQUFDLFlBQVlSO1FBQ2pDUCw0REFBbUIsQ0FBQ087UUFDcEJDLFlBQVlEO0lBQ2Q7SUFFQU4sZ0RBQVNBLENBQUM7UUFDUixPQUFPZSxhQUFhQyxhQUNsQixrREFBa0Q7UUFDbERKLGVBQWVDLGFBQWFJLE9BQU8sQ0FBQyxlQUFlO1FBQ3JELE9BQU9KLGlCQUFpQkcsYUFDdEJQLFlBQVlJLGFBQWFJLE9BQU8sQ0FBQyxlQUFlO0lBQ3BEO0lBRUEscUJBQU87OzBCQUNMLDhEQUFDckIsOERBQU1BO2dCQUFDc0IsUUFBTztnQkFBS0MsV0FBVTswQkFDNUIsNEVBQUNqQix1RkFBU0E7O3NDQUNSLDhEQUFDTixvRUFBWTtzQ0FFVmUsRUFBRTs7Ozs7O3NDQUVMLDhEQUFDZixxRUFBYTs7Ozs7c0NBQ2QsOERBQUNBLHVFQUFlOzs4Q0FDZCw4REFBQ0QsMkRBQUdBO29DQUFDd0IsV0FBVTs7c0RBQ2IsOERBQUN4QixnRUFBUTs0Q0FBQzZCLE1BQUs7c0RBQUtiLEVBQUU7Ozs7OztzREFDdEIsOERBQUNoQixnRUFBUTs0Q0FBQzZCLE1BQUs7c0RBQVliLEVBQUU7Ozs7OztzREFDN0IsOERBQUNoQixnRUFBUTs0Q0FBQzZCLE1BQUs7c0RBQW9CYixFQUFFOzs7Ozs7c0RBQ3JDLDhEQUFDaEIsZ0VBQVE7NENBQUM2QixNQUFLO3NEQUFZYixFQUFFOzs7Ozs7Ozs7Ozs7OENBRS9CLDhEQUFDZCxtRUFBV0E7b0NBQUM0QixxQkFBTyw4REFBQ0M7OzBEQUFLLDhEQUFDNUIsNERBQVNBO2dEQUFDcUIsV0FBVTs7Ozs7OzRDQUFVUixFQUFFOzs7Ozs7OztzREFDekQsOERBQUNkLHdFQUFnQjs0Q0FBQytCLFNBQVM7Z0RBQVFoQixlQUFlOzRDQUFPO3NEQUFHOzs7Ozs7c0RBQzVELDhEQUFDZix3RUFBZ0I7NENBQUMrQixTQUFTO2dEQUFRaEIsZUFBZTs0Q0FBTztzREFBRzs7Ozs7Ozs7Ozs7O2dDQUc1REosWUFBWSxtQkFDViw4REFBQ2IsZ0VBQVE7b0NBQUM2QixNQUFLOzhDQUFVYixFQUFFOzs7Ozt5REFDM0IsOERBQUNkLG1FQUFXQTtvQ0FBQzRCLE9BQU9qQjs4Q0FDbEIsNEVBQUNYLHdFQUFnQjt3Q0FBQytCLFNBQVM7NENBQVFmLGFBQWFnQixVQUFVLENBQUM7NENBQWFwQixZQUFZO3dDQUFLO2tEQUFJRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0zRyw4REFBQ1QsdUZBQVNBOztrQ0FDUiw4REFBQ0U7d0JBQVcsR0FBR0MsU0FBUzt3QkFBRXlCLFdBQVU7Ozs7OztrQ0FDcEMsOERBQUNDO3dCQUFJWixXQUFVO2tDQUNiLDRFQUFDYTtzQ0FBUXJCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkI7R0F2RHdCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZEcm9wZG93blwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiO1xuaW1wb3J0IGkxOG4gZnJvbSBcIkAvaTE4blwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcImVuXCIpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBpMThuLmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlKTtcbiAgY29uc3QgeyB0IH0gPSBpMThuO1xuICBjb25zdCBoYW5kbGVMYW5ndWFnZSA9IChsYW5ndWFnZTogc3RyaW5nKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYW5ndWFnZVwiLCBsYW5ndWFnZSk7XG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShsYW5ndWFnZSk7XG4gICAgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgLy8gaW1wb3J0KFwicmVhY3QtYm9vdHN0cmFwL2Rpc3QvcmVhY3QtYm9vdHN0cmFwXCIpO1xuICAgICAgaGFuZGxlTGFuZ3VhZ2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYW5ndWFnZVwiKSB8fCBcImVuXCIpO1xuICAgIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgc2V0VXNlcm5hbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKSB8fCBcIlwiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIDw+XG4gICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT1cImJnLWJvZHktdGVydGlhcnkgbWItM1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICB7LyogPGltZyBzcmM9XCIvQ1lFWk9JLnBuZ1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiIC8+ICovfVxuICAgICAgICAgIHt0KFwiYnJhbmRcIil9XG4gICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSAvPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvXCI+e3QoXCJob21lXCIpfTwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9zdHVkZW50XCI+e3QoXCJzdHVkZW50XCIpfTwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9wcml2aWxlZ2VSZWNvcmRcIj57dChcInByaXZpbGVnZVJlY29yZFwiKX08L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvZmluYW5jZVwiPnt0KFwiZmluYW5jZVwiKX08L05hdi5MaW5rPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT17PHNwYW4+PFRyYW5zbGF0ZSBjbGFzc05hbWU9XCJtZS0yXCIgLz57dChcImxhbmd1YWdlXCIpfTwvc3Bhbj59PlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4geyBoYW5kbGVMYW5ndWFnZShcImVuXCIpOyB9fT5FbmdsaXNoPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4geyBoYW5kbGVMYW5ndWFnZShcInpoXCIpOyB9fT7kuK3mloc8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB1c2VybmFtZSA9PSBcIlwiID9cbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvbG9naW5cIj57dChcImxvZ2luXCIpfTwvTmF2Lkxpbms+IDpcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXt1c2VybmFtZX0+XG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4geyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJuYW1lXCIpOyBzZXRVc2VybmFtZShcIlwiKTsgfX0+e3QoXCJsb2dvdXRcIil9PC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhciA+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gY2xhc3NMaXN0PVwibXQtMlwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgPGNlbnRlcj57dChcImZvb3RlclwiKX08L2NlbnRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICA8Lz47XG59XG4iXSwibmFtZXMiOlsiTmF2IiwiTmF2YmFyIiwiTmF2RHJvcGRvd24iLCJUcmFuc2xhdGUiLCJpMThuIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImNoYW5nZUxhbmd1YWdlIiwidCIsImhhbmRsZUxhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRvY3VtZW50IiwidW5kZWZpbmVkIiwiZ2V0SXRlbSIsImV4cGFuZCIsImNsYXNzTmFtZSIsIkJyYW5kIiwiVG9nZ2xlIiwiQ29sbGFwc2UiLCJMaW5rIiwiaHJlZiIsInRpdGxlIiwic3BhbiIsIkl0ZW0iLCJvbkNsaWNrIiwicmVtb3ZlSXRlbSIsImNsYXNzTGlzdCIsImRpdiIsImNlbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});