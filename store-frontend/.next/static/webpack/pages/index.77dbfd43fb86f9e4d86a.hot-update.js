/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductsListPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/node/app/pages/index.tsx\";\n\n\nvar products = [{\n  id: \"uuid\",\n  name: \"produto 1\",\n  description: \"muito bom\",\n  price: 50.9,\n  image_url: \"https://source.unsplash.com/random?product\",\n  slug: \"produto-1\",\n  created_at: \"2022-01-29T00:00:000\"\n}];\nfunction ProductsListPage() {\n  var _this = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Listagem de Produtos\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n      component: \"h1\",\n      variant: \"h3\",\n      color: \"textPrimary\",\n      gutterBottom: true,\n      children: \"Produtos\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, this), products.map(function (product, key) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {\n          image: product.image_url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n            component: \"h2\",\n            variant: \"h5\",\n            gutterBottom: true,\n            children: product.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardActions, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            size: \"small\",\n            color: \"primary\",\n            component: \"a\",\n            children: \"Detalhes\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 15\n        }, _this)]\n      }, key, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n_c = ProductsListPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductsListPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsicHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW1hZ2VfdXJsIiwic2x1ZyIsImNyZWF0ZWRfYXQiLCJQcm9kdWN0c0xpc3RQYWdlIiwibWFwIiwicHJvZHVjdCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBLElBQU1BLFFBQW1CLEdBQUcsQ0FDMUI7QUFDRUMsSUFBRSxFQUFFLE1BRE47QUFFRUMsTUFBSSxFQUFFLFdBRlI7QUFHRUMsYUFBVyxFQUFFLFdBSGY7QUFJRUMsT0FBSyxFQUFFLElBSlQ7QUFLRUMsV0FBUyxFQUFFLDRDQUxiO0FBTUVDLE1BQUksRUFBRSxXQU5SO0FBT0VDLFlBQVUsRUFBRTtBQVBkLENBRDBCLENBQTVCO0FBWWUsU0FBU0MsZ0JBQVQsR0FBNEI7QUFBQTs7QUFDekMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUksOERBQUMseURBQUQ7QUFBWSxlQUFTLEVBQUMsSUFBdEI7QUFBMkIsYUFBTyxFQUFDLElBQW5DO0FBQXdDLFdBQUssRUFBQyxhQUE5QztBQUE0RCxrQkFBWSxNQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLEVBVU1SLFFBQVEsQ0FBQ1MsR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsR0FBVjtBQUFBLDBCQUNYLDhEQUFDLG1EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFBVyxlQUFLLEVBQUVELE9BQU8sQ0FBQ0w7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsaUNBQ0UsOERBQUMseURBQUQ7QUFBWSxxQkFBUyxFQUFDLElBQXRCO0FBQTJCLG1CQUFPLEVBQUMsSUFBbkM7QUFBd0Msd0JBQVksTUFBcEQ7QUFBQSxzQkFDR0ssT0FBTyxDQUFDUjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBT0UsOERBQUMsMERBQUQ7QUFBQSxpQ0FDRSw4REFBQyxxREFBRDtBQUFRLGdCQUFJLEVBQUMsT0FBYjtBQUFxQixpQkFBSyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFTLEVBQUMsR0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUEsU0FBV1MsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFiLENBVk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7S0E1QnVCSCxnQiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuL21vZGVsXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2hvbWUuY3NzJztcblxuY29uc3QgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtcbiAge1xuICAgIGlkOiBcInV1aWRcIixcbiAgICBuYW1lOiBcInByb2R1dG8gMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIm11aXRvIGJvbVwiLFxuICAgIHByaWNlOiA1MC45LFxuICAgIGltYWdlX3VybDogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tP3Byb2R1Y3RcIixcbiAgICBzbHVnOiBcInByb2R1dG8tMVwiLFxuICAgIGNyZWF0ZWRfYXQ6IFwiMjAyMi0wMS0yOVQwMDowMDowMDBcIiwgXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c0xpc3RQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5MaXN0YWdlbSBkZSBQcm9kdXRvczwvdGl0bGU+XG4gICAgICAgIHsvKiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4gKi99XG4gICAgICA8L0hlYWQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgzXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICBQcm9kdXRvc1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGtleSkgPT4gKFxuICAgICAgICAgICAgPENhcmQga2V5PXtrZXl9PlxuICAgICAgICAgICAgICA8Q2FyZE1lZGlhIGltYWdlPXtwcm9kdWN0LmltYWdlX3VybH0gLz5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIGNvbXBvbmVudD1cImFcIj5EZXRhbGhlczwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgPC9kaXY+XG4gIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});