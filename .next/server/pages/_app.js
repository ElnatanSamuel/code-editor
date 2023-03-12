/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/clickContext.js":
/*!**********************************!*\
  !*** ./contexts/clickContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClickContext\": () => (/* binding */ ClickContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ClickContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9jbGlja0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRS9CLE1BQU1DLDZCQUFlRCxvREFBYUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1jb2RlLWVkaXRvci8uL2NvbnRleHRzL2NsaWNrQ29udGV4dC5qcz9mMDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGlja0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiQ2xpY2tDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/clickContext.js\n");

/***/ }),

/***/ "./hooks/useLocalStorage.js":
/*!**********************************!*\
  !*** ./hooks/useLocalStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PREFIX = \"cache-\";\nlet jsonValue;\nfunction useLocalStorage(key, initialValue) {\n    const prefixedKey = PREFIX + key;\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{\n        if (false) {}\n        if (jsonValue != null) {\n            return JSON.parse(jsonValue);\n        }\n        if (typeof initialValue === \"function\") {\n            return initialValue();\n        } else {\n            return initialValue;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (false) {}\n    }, [\n        prefixedKey,\n        value\n    ]);\n    return [\n        value,\n        setValue\n    ];\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VMb2NhbFN0b3JhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1FLFNBQVM7QUFDZixJQUFJQztBQUVKLFNBQVNDLGdCQUFnQkMsR0FBRyxFQUFFQyxZQUFZLEVBQUU7SUFDMUMsTUFBTUMsY0FBY0wsU0FBU0c7SUFFN0IsTUFBTSxDQUFDRyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLElBQU07UUFDdkMsSUFBSSxLQUE2QixFQUFFLEVBRWxDO1FBRUQsSUFBSUcsYUFBYSxJQUFJLEVBQUU7WUFDckIsT0FBT1MsS0FBS0MsS0FBSyxDQUFDVjtRQUNwQixDQUFDO1FBRUQsSUFBSSxPQUFPRyxpQkFBaUIsWUFBWTtZQUN0QyxPQUFPQTtRQUNULE9BQU87WUFDTCxPQUFPQTtRQUNULENBQUM7SUFDSDtJQUVBTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxLQUE2QixFQUFFLEVBRWxDO0lBQ0gsR0FBRztRQUFDTTtRQUFhQztLQUFNO0lBRXZCLE9BQU87UUFBQ0E7UUFBT0M7S0FBUztBQUMxQjtBQUVBLGlFQUFlTCxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLWNvZGUtZWRpdG9yLy4vaG9va3MvdXNlTG9jYWxTdG9yYWdlLmpzPzMzZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUFJFRklYID0gXCJjYWNoZS1cIjtcclxubGV0IGpzb25WYWx1ZTtcclxuXHJcbmZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZShrZXksIGluaXRpYWxWYWx1ZSkge1xyXG4gIGNvbnN0IHByZWZpeGVkS2V5ID0gUFJFRklYICsga2V5O1xyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGpzb25WYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByZWZpeGVkS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoanNvblZhbHVlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGluaXRpYWxWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHJldHVybiBpbml0aWFsVmFsdWUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcmVmaXhlZEtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxuICB9LCBbcHJlZml4ZWRLZXksIHZhbHVlXSk7XHJcblxyXG4gIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxTdG9yYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQUkVGSVgiLCJqc29uVmFsdWUiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJrZXkiLCJpbml0aWFsVmFsdWUiLCJwcmVmaXhlZEtleSIsInZhbHVlIiwic2V0VmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useLocalStorage.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_clickContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/clickContext */ \"./contexts/clickContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLocalStorage */ \"./hooks/useLocalStorage.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const [isHtml, setIsHtml] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"htmlState\", true);\n    const [isCss, setIsCss] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"cssState\", false);\n    const [isJs, setIsJs] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"jsState\", false);\n    const [html, setHtml] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"html\", \"<h1>Hello world!!!</h1>\");\n    const [css, setCss] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"css\", \"body{}\");\n    const [js, setJs] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"js\", \"const start = 10;\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_clickContext__WEBPACK_IMPORTED_MODULE_1__.ClickContext.Provider, {\n        value: {\n            isCss,\n            isHtml,\n            isJs,\n            setIsCss,\n            setIsHtml,\n            setIsJs,\n            html,\n            setHtml,\n            css,\n            setCss,\n            js,\n            setJs\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/mnt/c/portfolioProjects/online-code-editor/pages/_app.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/mnt/c/portfolioProjects/online-code-editor/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3RDtBQUN6QjtBQUN3QjtBQUV4QyxTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLGtFQUFlQSxDQUFDLGFBQWEsSUFBSTtJQUM3RCxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1Asa0VBQWVBLENBQUMsWUFBWSxLQUFLO0lBQzNELE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCxrRUFBZUEsQ0FBQyxXQUFXLEtBQUs7SUFFeEQsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLGtFQUFlQSxDQUFDLFFBQVE7SUFDaEQsTUFBTSxDQUFDWSxLQUFLQyxPQUFPLEdBQUdiLGtFQUFlQSxDQUFDLE9BQU87SUFDN0MsTUFBTSxDQUFDYyxJQUFJQyxNQUFNLEdBQUdmLGtFQUFlQSxDQUFDLE1BQU07SUFFMUMscUJBQ0UsOERBQUNELHlFQUFxQjtRQUNwQmtCLE9BQU87WUFDTFg7WUFDQUY7WUFDQUk7WUFDQUQ7WUFDQUY7WUFDQUk7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtrQkFFQSw0RUFBQ2I7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLWNvZGUtZWRpdG9yLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWNrQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9jbGlja0NvbnRleHRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZSBmcm9tIFwiLi4vaG9va3MvdXNlTG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2lzSHRtbCwgc2V0SXNIdG1sXSA9IHVzZUxvY2FsU3RvcmFnZShcImh0bWxTdGF0ZVwiLCB0cnVlKTtcbiAgY29uc3QgW2lzQ3NzLCBzZXRJc0Nzc10gPSB1c2VMb2NhbFN0b3JhZ2UoXCJjc3NTdGF0ZVwiLCBmYWxzZSk7XG4gIGNvbnN0IFtpc0pzLCBzZXRJc0pzXSA9IHVzZUxvY2FsU3RvcmFnZShcImpzU3RhdGVcIiwgZmFsc2UpO1xuXG4gIGNvbnN0IFtodG1sLCBzZXRIdG1sXSA9IHVzZUxvY2FsU3RvcmFnZShcImh0bWxcIiwgXCI8aDE+SGVsbG8gd29ybGQhISE8L2gxPlwiKTtcbiAgY29uc3QgW2Nzcywgc2V0Q3NzXSA9IHVzZUxvY2FsU3RvcmFnZShcImNzc1wiLCBcImJvZHl7fVwiKTtcbiAgY29uc3QgW2pzLCBzZXRKc10gPSB1c2VMb2NhbFN0b3JhZ2UoXCJqc1wiLCBcImNvbnN0IHN0YXJ0ID0gMTA7XCIpO1xuXG4gIHJldHVybiAoXG4gICAgPENsaWNrQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNDc3MsXG4gICAgICAgIGlzSHRtbCxcbiAgICAgICAgaXNKcyxcbiAgICAgICAgc2V0SXNDc3MsXG4gICAgICAgIHNldElzSHRtbCxcbiAgICAgICAgc2V0SXNKcyxcbiAgICAgICAgaHRtbCxcbiAgICAgICAgc2V0SHRtbCxcbiAgICAgICAgY3NzLFxuICAgICAgICBzZXRDc3MsXG4gICAgICAgIGpzLFxuICAgICAgICBzZXRKcyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ2xpY2tDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNsaWNrQ29udGV4dCIsInVzZUxvY2FsU3RvcmFnZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzSHRtbCIsInNldElzSHRtbCIsImlzQ3NzIiwic2V0SXNDc3MiLCJpc0pzIiwic2V0SXNKcyIsImh0bWwiLCJzZXRIdG1sIiwiY3NzIiwic2V0Q3NzIiwianMiLCJzZXRKcyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();