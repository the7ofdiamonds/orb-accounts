"use strict";
(self["webpackChunkorb_accounts"] = self["webpackChunkorb_accounts"] || []).push([["src_views_Accounts_jsx"],{

/***/ "./src/views/Accounts.jsx":
/*!********************************!*\
  !*** ./src/views/Accounts.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controllers_accountsSlice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsSlice.js */ "./src/controllers/accountsSlice.js");




function Accounts() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accounts;
    }),
    msg = _useSelector.msg;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_controllers_accountsSlice_js__WEBPACK_IMPORTED_MODULE_2__.getAccounts)());
  }, [dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "accounts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "title"
  }, "accounts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    key: msg.pagename
  }, msg.pagename))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accounts);

/***/ })

}]);
//# sourceMappingURL=src_views_Accounts_jsx.index.js.map