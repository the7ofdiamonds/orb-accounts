"use strict";
(globalThis["webpackChunkorb_accounts"] = globalThis["webpackChunkorb_accounts"] || []).push([["src_views_Billing_jsx"],{

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

/***/ "./src/views/Billing.jsx":
/*!*******************************!*\
  !*** ./src/views/Billing.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BillingReceipts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BillingReceipts */ "./src/views/BillingReceipts.jsx");
/* harmony import */ var _BillingInvoices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BillingInvoices */ "./src/views/BillingInvoices.jsx");
/* harmony import */ var _BillingQuotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BillingQuotes */ "./src/views/BillingQuotes.jsx");





function Billing() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "billing"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "title"
  }, "billing"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BillingReceipts__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BillingInvoices__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BillingQuotes__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Billing);

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
/* harmony import */ var _controllers_accountsClientSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsClientSlice */ "./src/controllers/accountsClientSlice.js");
/* harmony import */ var _controllers_accountsInvoiceSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/accountsInvoiceSlice */ "./src/controllers/accountsInvoiceSlice.js");
/* harmony import */ var _loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/LoadingComponent.jsx */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");







function BillingInvoices() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    user_email,
    stripe_customer_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsClient);
  const {
    invoiceLoading,
    invoiceError,
    invoices
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsInvoice);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsClientSlice__WEBPACK_IMPORTED_MODULE_2__.getClient)());
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Array.isArray(sortedInvoices) && sortedInvoices.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card invoice"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Invoice ID")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Status")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Balance")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Due Date")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Quote ID")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Page")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, sortedInvoices.map(invoice => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.status), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(invoice.amount_remaining)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.due_date ? new Date(invoice.due_date * 1000).toLocaleString() : ''), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.quote_id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, invoice.status === 'deleted' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Deleted") : invoice.status === 'paid' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `/services/invoice/${invoice.id}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "View"))) : invoice.status === 'void' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Void") : invoice.status === 'uncollectible' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Uncollectible") : invoice.status === 'open' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `/services/invoice/${invoice.id}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Continue")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: async () => await dispatch((0,_controllers_accountsInvoiceSlice__WEBPACK_IMPORTED_MODULE_3__.deleteInvoice)(invoice.stripe_invoice_id)).then(() => {
      dispatch((0,_controllers_accountsInvoiceSlice__WEBPACK_IMPORTED_MODULE_3__.getClientInvoices)());
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Delete")))))))))) : '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingInvoices);

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
/* harmony import */ var _controllers_accountsClientSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsClientSlice */ "./src/controllers/accountsClientSlice.js");
/* harmony import */ var _controllers_accountsQuoteSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/accountsQuoteSlice */ "./src/controllers/accountsQuoteSlice.js");
/* harmony import */ var _loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/LoadingComponent.jsx */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");







function BillingQuotes() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    user_email,
    stripe_customer_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsClient);
  const {
    quoteLoading,
    quoteError,
    quotes,
    pdf
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsQuote);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsClientSlice__WEBPACK_IMPORTED_MODULE_2__.getClient)());
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Array.isArray(sortedQuotes) && sortedQuotes.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card quote"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Quote ID")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Status")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Total")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Page")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, sortedQuotes.map(quote => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, quote.id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, quote.status), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(quote.amount_total)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, quote.status === 'accepted' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Accepted") : quote.status === 'canceled' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Canceled") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `/services/quote/${quote.id}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Confirm"))))))))) : '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingQuotes);

/***/ }),

/***/ "./src/views/BillingReceipts.jsx":
/*!***************************************!*\
  !*** ./src/views/BillingReceipts.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controllers_accountsClientSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsClientSlice */ "./src/controllers/accountsClientSlice.js");
/* harmony import */ var _controllers_accountsReceiptSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/accountsReceiptSlice */ "./src/controllers/accountsReceiptSlice.js");
/* harmony import */ var _loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading/LoadingComponent.jsx */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");







function BillingReceipts() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    user_email,
    stripe_customer_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsClient);
  const {
    receiptLoading,
    receiptError,
    receipts
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsReceipt);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsClientSlice__WEBPACK_IMPORTED_MODULE_2__.getClient)());
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsReceiptSlice__WEBPACK_IMPORTED_MODULE_3__.getClientReceipts)());
    }
  }, [stripe_customer_id, dispatch]);
  if (receiptLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }
  if (receiptError) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      error: receiptError
    });
  }
  const now = new Date().getTime();
  let sortedReceipts = [];
  if (Array.isArray(receipts)) {
    sortedReceipts = receipts.slice().sort((a, b) => {
      const timeDiffA = Math.abs(a.payment_date - now);
      const timeDiffB = Math.abs(b.payment_date - now);
      return timeDiffA - timeDiffB;
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Array.isArray(sortedReceipts) && sortedReceipts.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card receipt"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Receipt ID")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Amount Paid")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Balance")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Invoice ID")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "PDF")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, sortedReceipts.map(receipt => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: receipt.id
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, receipt.id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(receipt.amount_paid)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(receipt.balance)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, receipt.invoice_id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: receipt.receipt_pdf_url,
    target: "_blank"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Download")))))))))) : '');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BillingReceipts);

/***/ })

}]);
//# sourceMappingURL=src_views_Billing_jsx.js.map