"use strict";
(globalThis["webpackChunkorb_accounts"] = globalThis["webpackChunkorb_accounts"] || []).push([["src_views_BillingInvoices_jsx"],{

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

/***/ "./src/views/BillingInvoices.jsx":
/*!***************************************!*\
  !*** ./src/views/BillingInvoices.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controllers_accountsUserSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsUserSlice */ "./src/controllers/accountsUserSlice.js");
/* harmony import */ var _controllers_accountsInvoiceSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/accountsInvoiceSlice */ "./src/controllers/accountsInvoiceSlice.js");
/* harmony import */ var _loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/LoadingComponent.jsx */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");







function BillingInvoices() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    user_email,
    stripe_customer_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsUser);
  const {
    invoiceLoading,
    invoiceError,
    invoices
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsInvoice);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsUserSlice__WEBPACK_IMPORTED_MODULE_2__.getUser)());
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsInvoiceSlice__WEBPACK_IMPORTED_MODULE_3__.getClientInvoices)());
    }
  }, [stripe_customer_id, dispatch]);
  if (invoiceLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }
  if (invoiceError) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      error: invoiceError
    });
  }
  const now = new Date().getTime();
  let sortedInvoices = [];
  if (Array.isArray(invoices)) {
    sortedInvoices = invoices.slice().sort((a, b) => {
      const timeDiffA = Math.abs(a.due_date - now);
      const timeDiffB = Math.abs(b.due_date - now);
      return timeDiffA - timeDiffB;
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "invoices"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "title"
  }, "Invoices"), Array.isArray(sortedInvoices) && sortedInvoices.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card invoice"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Invoice ID")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Status")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Balance")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Due Date")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Quote ID")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Page")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, sortedInvoices.map(invoice => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.status), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(invoice.amount_remaining)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.due_date ? new Date(invoice.due_date * 1000).toLocaleString() : ''), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.quote_id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.status === 'deleted' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Deleted") : invoice.status === 'paid' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `/services/invoice/${invoice.id}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "View"))) : invoice.status === 'void' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Void") : invoice.status === 'uncollectible' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Uncollectible") : invoice.status === 'open' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `/services/invoice/${invoice.id}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Continue")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: console.log('invoice deleted')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Delete")))))))))) : ''));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingInvoices);

/***/ })

}]);
//# sourceMappingURL=src_views_BillingInvoices_jsx.js.map