"use strict";
(globalThis["webpackChunkorb_accounts"] = globalThis["webpackChunkorb_accounts"] || []).push([["src_views_BillingQuotes_jsx"],{

/***/ "./src/error/ErrorComponent.jsx":
/*!**************************************!*\
  !*** ./src/error/ErrorComponent.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ErrorComponent(props) {
  const {
    error
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
    className: "error"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "status-bar card error"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, error)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorComponent);

/***/ }),

/***/ "./src/loading/LoadingComponent.jsx":
/*!******************************************!*\
  !*** ./src/loading/LoadingComponent.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function LoadingComponent() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "loading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Loading......"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingComponent);

/***/ }),

/***/ "./src/views/BillingQuotes.jsx":
/*!*************************************!*\
  !*** ./src/views/BillingQuotes.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controllers_accountsUserSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsUserSlice */ "./src/controllers/accountsUserSlice.js");
/* harmony import */ var _controllers_accountsQuoteSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/accountsQuoteSlice */ "./src/controllers/accountsQuoteSlice.js");
/* harmony import */ var _loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/LoadingComponent.jsx */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");







function BillingQuotes() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    user_email,
    stripe_customer_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsUser);
  const {
    quoteLoading,
    quoteError,
    quotes,
    pdf
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsQuote);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsUserSlice__WEBPACK_IMPORTED_MODULE_2__.getUser)());
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsQuoteSlice__WEBPACK_IMPORTED_MODULE_3__.getClientQuotes)());
    }
  }, [stripe_customer_id, dispatch]);
  if (quoteLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }
  if (quoteError) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      error: quoteError
    });
  }
  const now = new Date().getTime();
  let sortedQuotes = [];
  if (Array.isArray(quotes)) {
    sortedQuotes = quotes.slice().sort((a, b) => {
      const timeDiffA = Math.abs(a.expires_at - now);
      const timeDiffB = Math.abs(b.expires_at - now);
      return timeDiffA - timeDiffB;
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "quotes"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "title"
  }, "Quotes"), Array.isArray(sortedQuotes) && sortedQuotes.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card quote"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Quote ID")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Status")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Total")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Page")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, sortedQuotes.map(quote => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, quote.id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, quote.status), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(quote.amount_total)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, quote.status === 'accepted' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Accepted") : quote.status === 'canceled' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Canceled") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `/services/quote/${quote.id}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Confirm"))))))))) : ''));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingQuotes);

/***/ })

}]);
//# sourceMappingURL=src_views_BillingQuotes_jsx.js.map