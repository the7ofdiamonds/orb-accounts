"use strict";
(globalThis["webpackChunkorb_accounts"] = globalThis["webpackChunkorb_accounts"] || []).push([["src_views_BillingReceipt_jsx"],{

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

/***/ "./src/utils/PhoneNumberFormatter.js":
/*!*******************************************!*\
  !*** ./src/utils/PhoneNumberFormatter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatPhoneNumber = phoneNumber => {
  if (typeof phoneNumber !== 'string' || phoneNumber.trim() === '') {
    return ''; // Return an empty string for invalid phone numbers
  }

  // Remove all non-digit characters from the phone number
  const cleaned = phoneNumber.replace(/\D/g, '');

  // Apply the desired phone number format
  const regex = /^(\d{1})(\d{3})(\d{3})(\d{4})$/;
  const formatted = cleaned.replace(regex, '+$1 ($2) $3-$4');
  return formatted;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatPhoneNumber);

/***/ }),

/***/ "./src/views/BillingReceipt.jsx":
/*!**************************************!*\
  !*** ./src/views/BillingReceipt.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsUsersSlice.js */ "./src/controllers/accountsUsersSlice.js");
/* harmony import */ var _controllers_accountsReceiptSlice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/accountsReceiptSlice.js */ "./src/controllers/accountsReceiptSlice.js");
/* harmony import */ var _controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/accountsStripeSlice.js */ "./src/controllers/accountsStripeSlice.js");
/* harmony import */ var _controllers_accountsInvoiceSlice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/accountsInvoiceSlice.js */ "./src/controllers/accountsInvoiceSlice.js");
/* harmony import */ var _controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/accountsQuoteSlice.js */ "./src/controllers/accountsQuoteSlice.js");
/* harmony import */ var _utils_PhoneNumberFormatter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/PhoneNumberFormatter.js */ "./src/utils/PhoneNumberFormatter.js");
/* harmony import */ var _loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading/LoadingComponent.jsx */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");
/* harmony import */ var _components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/StatusBar.jsx */ "./src/views/components/StatusBar.jsx");













function ReceiptComponent() {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [messageType, setMessageType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('info');
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    user_email,
    stripe_customer_id,
    address_line_1,
    address_line_2,
    city,
    state,
    zipcode,
    phone
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsUsers);
  const {
    receiptLoading,
    receiptError,
    stripe_invoice_id,
    payment_intent_id,
    payment_method_id,
    payment_method,
    name,
    onboarding_links
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsReceipt);
  const {
    subtotal,
    tax,
    amount_due,
    amount_paid,
    amount_remaining,
    payment_date,
    stripe_quote_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsInvoice);
  const {
    selections
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsQuote);
  const timestamp = payment_date * 1000;
  const paymentDate = new Date(timestamp);
  const formattedPhone = (0,_utils_PhoneNumberFormatter_js__WEBPACK_IMPORTED_MODULE_7__["default"])(phone);
  const Subtotal = subtotal / 100;
  const Tax = tax / 100;
  const amountDue = amount_due / 100;
  const amountPaid = amount_paid / 100;
  const Balance = amount_remaining / 100;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.getUser)()).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [dispatch, user_email]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsReceiptSlice_js__WEBPACK_IMPORTED_MODULE_3__.getReceiptByID)(id)).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_4__.getPaymentMethod)(response.payload.payment_method_id)).then(response => {
            if (response.error !== undefined) {
              console.error(response.error.message);
              setMessageType('error');
              setMessage(response.error.message);
            }
          });
        }
      });
    }
  }, [dispatch, id, stripe_customer_id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_invoice_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_4__.getStripeInvoice)(stripe_invoice_id)).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          console.log(response);
        }
      });
    }
  }, [dispatch, stripe_invoice_id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_invoice_id) {
      dispatch((0,_controllers_accountsInvoiceSlice_js__WEBPACK_IMPORTED_MODULE_5__.getInvoice)(stripe_invoice_id));
    }
  }, [dispatch, stripe_invoice_id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_quote_id) {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_6__.getQuote)(stripe_quote_id));
    }
  }, [dispatch, stripe_quote_id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (payment_intent_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_4__.getPaymentIntent)(payment_intent_id)).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [dispatch, payment_intent_id]);
  const handleClickDashboard = () => {
    window.location = '/dashboard';
  };
  const handleClickBilling = () => {
    window.location = '/billing';
  };
  if (receiptLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }
  if (receiptError) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      error: receiptError
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "receipt"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "title"
  }, "RECEIPT"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "receipt-card card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "thead"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr receipt-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "RECEIPT NUMBER")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, id))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr payment-date"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "PAYMENT DATE")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, paymentDate.toLocaleString()))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr payment-method"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "PAYMENT TYPE")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, payment_method))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr client-details"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "PAID BY")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, name)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr address-line-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, address_line_1)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, address_line_2))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr address-line-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, `${city},`)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, state)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, zipcode))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr phone"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `tel:${phone}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, formattedPhone)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr email"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, user_email))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "NO.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "DESCRIPTION")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "TOTAL"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, selections && selections.length > 0 && selections.map(selection => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, selection.id)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, selection.description)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "selections-cost"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(selection.cost))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tfoot"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr subtotal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th subtotal-label"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "SUBTOTAL")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td subtotal-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(Subtotal)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr tax"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th tax-label"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "TAX")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td tax-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(Tax)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr grand-total"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th grand-total-label"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "GRAND TOTAL")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td grand-total-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(amountDue)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr amount-paid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th amount-paid-label"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "AMOUNT PAID")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td amount-paid-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(amountPaid)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tr balance"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "th balance-label"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "BALANCE")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "td balance-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(Balance)))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    message: message,
    messageType: messageType
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleClickDashboard
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "DASHBOARD")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleClickBilling
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "BILLING")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiptComponent);

/***/ }),

/***/ "./src/views/components/StatusBar.jsx":
/*!********************************************!*\
  !*** ./src/views/components/StatusBar.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function StatusBarComponent(props) {
  const {
    message,
    messageType
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, message && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `status-bar card ${messageType}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, message))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatusBarComponent);

/***/ })

}]);
//# sourceMappingURL=src_views_BillingReceipt_jsx.js.map