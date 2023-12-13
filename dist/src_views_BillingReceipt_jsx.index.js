"use strict";
(self["webpackChunkorb_accounts"] = self["webpackChunkorb_accounts"] || []).push([["src_views_BillingReceipt_jsx"],{

/***/ "./src/error/ErrorComponent.jsx":
/*!**************************************!*\
  !*** ./src/error/ErrorComponent.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ErrorComponent(props) {
  var error = props.error;
  return /*#__PURE__*/React.createElement("main", {
    className: "error"
  }, /*#__PURE__*/React.createElement("div", {
    className: "status-bar card error"
  }, /*#__PURE__*/React.createElement("span", null, error)));
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
function LoadingComponent() {
  return /*#__PURE__*/React.createElement("div", {
    className: "loading"
  }, /*#__PURE__*/React.createElement("h1", null, "Loading......"));
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
var formatPhoneNumber = function formatPhoneNumber(phoneNumber) {
  if (typeof phoneNumber !== 'string' || phoneNumber.trim() === '') {
    return ''; // Return an empty string for invalid phone numbers
  }

  // Remove all non-digit characters from the phone number
  var cleaned = phoneNumber.replace(/\D/g, '');

  // Apply the desired phone number format
  var regex = /^(\d{1})(\d{3})(\d{3})(\d{4})$/;
  var formatted = cleaned.replace(regex, '+$1 ($2) $3-$4');
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
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}












function ReceiptComponent() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)(),
    id = _useParams.id;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('info'),
    _useState2 = _slicedToArray(_useState, 2),
    messageType = _useState2[0],
    setMessageType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsUsers;
    }),
    user_email = _useSelector.user_email,
    stripe_customer_id = _useSelector.stripe_customer_id,
    address_line_1 = _useSelector.address_line_1,
    address_line_2 = _useSelector.address_line_2,
    city = _useSelector.city,
    state = _useSelector.state,
    zipcode = _useSelector.zipcode,
    phone = _useSelector.phone;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsReceipt;
    }),
    receiptLoading = _useSelector2.receiptLoading,
    receiptError = _useSelector2.receiptError,
    stripe_invoice_id = _useSelector2.stripe_invoice_id,
    payment_intent_id = _useSelector2.payment_intent_id,
    payment_method_id = _useSelector2.payment_method_id,
    payment_method = _useSelector2.payment_method,
    name = _useSelector2.name,
    onboarding_links = _useSelector2.onboarding_links;
  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsInvoice;
    }),
    subtotal = _useSelector3.subtotal,
    tax = _useSelector3.tax,
    amount_due = _useSelector3.amount_due,
    amount_paid = _useSelector3.amount_paid,
    amount_remaining = _useSelector3.amount_remaining,
    payment_date = _useSelector3.payment_date,
    stripe_quote_id = _useSelector3.stripe_quote_id;
  var _useSelector4 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsQuote;
    }),
    selections = _useSelector4.selections;
  var timestamp = payment_date * 1000;
  var paymentDate = new Date(timestamp);
  var formattedPhone = (0,_utils_PhoneNumberFormatter_js__WEBPACK_IMPORTED_MODULE_7__["default"])(phone);
  var Subtotal = subtotal / 100;
  var Tax = tax / 100;
  var amountDue = amount_due / 100;
  var amountPaid = amount_paid / 100;
  var Balance = amount_remaining / 100;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user_email) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.getUser)()).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [dispatch, user_email]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsReceiptSlice_js__WEBPACK_IMPORTED_MODULE_3__.getReceiptByID)(id)).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_4__.getPaymentMethod)(response.payload.payment_method_id)).then(function (response) {
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (stripe_invoice_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_4__.getStripeInvoice)(stripe_invoice_id)).then(function (response) {
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (stripe_invoice_id) {
      dispatch((0,_controllers_accountsInvoiceSlice_js__WEBPACK_IMPORTED_MODULE_5__.getInvoice)(stripe_invoice_id));
    }
  }, [dispatch, stripe_invoice_id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (stripe_quote_id) {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_6__.getQuote)(stripe_quote_id));
    }
  }, [dispatch, stripe_quote_id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (payment_intent_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_4__.getPaymentIntent)(payment_intent_id)).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [dispatch, payment_intent_id]);
  var handleClickDashboard = function handleClickDashboard() {
    window.location = '/dashboard';
  };
  var handleClickBilling = function handleClickBilling() {
    window.location = '/billing';
  };
  if (receiptLoading) {
    return /*#__PURE__*/React.createElement(_loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }
  if (receiptError) {
    return /*#__PURE__*/React.createElement(_error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
      error: receiptError
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "receipt"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, "RECEIPT"), /*#__PURE__*/React.createElement("div", {
    className: "receipt-card card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "thead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr receipt-number"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th"
  }, /*#__PURE__*/React.createElement("h4", null, "RECEIPT NUMBER")), /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, id))), /*#__PURE__*/React.createElement("div", {
    className: "tr payment-date"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th"
  }, /*#__PURE__*/React.createElement("h4", null, "PAYMENT DATE")), /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, paymentDate.toLocaleString()))), /*#__PURE__*/React.createElement("div", {
    className: "tr payment-method"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th"
  }, /*#__PURE__*/React.createElement("h4", null, "PAYMENT TYPE")), /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, payment_method))), /*#__PURE__*/React.createElement("div", {
    className: "tr client-details"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th"
  }, /*#__PURE__*/React.createElement("h4", null, "PAID BY")), /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, name)), /*#__PURE__*/React.createElement("div", {
    className: "tr address-line-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, address_line_1)), /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, address_line_2))), /*#__PURE__*/React.createElement("div", {
    className: "tr address-line-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, "".concat(city, ","))), /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, state)), /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, zipcode))), /*#__PURE__*/React.createElement("div", {
    className: "tr phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:".concat(phone)
  }, /*#__PURE__*/React.createElement("h5", null, formattedPhone)))), /*#__PURE__*/React.createElement("div", {
    className: "tr email"
  }, /*#__PURE__*/React.createElement("div", {
    className: "td"
  }, /*#__PURE__*/React.createElement("h5", null, user_email))))), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("h4", null, "NO.")), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("h4", null, "DESCRIPTION")), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("h4", null, "TOTAL"))), /*#__PURE__*/React.createElement("tbody", null, selections && selections.length > 0 && selections.map(function (selection) {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("h5", null, selection.id)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("h5", null, selection.description)), /*#__PURE__*/React.createElement("td", {
      className: "selections-cost"
    }, /*#__PURE__*/React.createElement("h5", null, new Intl.NumberFormat('us', {
      style: 'currency',
      currency: 'USD'
    }).format(selection.cost))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tfoot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr subtotal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th subtotal-label"
  }, /*#__PURE__*/React.createElement("h4", null, "SUBTOTAL")), /*#__PURE__*/React.createElement("div", {
    className: "td subtotal-number"
  }, /*#__PURE__*/React.createElement("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(Subtotal)))), /*#__PURE__*/React.createElement("div", {
    className: "tr tax"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th tax-label"
  }, /*#__PURE__*/React.createElement("h4", null, "TAX")), /*#__PURE__*/React.createElement("div", {
    className: "td tax-number"
  }, /*#__PURE__*/React.createElement("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(Tax)))), /*#__PURE__*/React.createElement("div", {
    className: "tr grand-total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th grand-total-label"
  }, /*#__PURE__*/React.createElement("h4", null, "GRAND TOTAL")), /*#__PURE__*/React.createElement("div", {
    className: "td grand-total-number"
  }, /*#__PURE__*/React.createElement("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(amountDue)))), /*#__PURE__*/React.createElement("div", {
    className: "tr amount-paid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th amount-paid-label"
  }, /*#__PURE__*/React.createElement("h4", null, "AMOUNT PAID")), /*#__PURE__*/React.createElement("div", {
    className: "td amount-paid-number"
  }, /*#__PURE__*/React.createElement("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(amountPaid)))), /*#__PURE__*/React.createElement("div", {
    className: "tr balance"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th balance-label"
  }, /*#__PURE__*/React.createElement("h4", null, "BALANCE")), /*#__PURE__*/React.createElement("div", {
    className: "td balance-number"
  }, /*#__PURE__*/React.createElement("h5", null, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(Balance)))))), /*#__PURE__*/React.createElement(_components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    message: message,
    messageType: messageType
  }), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleClickDashboard
  }, /*#__PURE__*/React.createElement("h3", null, "DASHBOARD")), /*#__PURE__*/React.createElement("button", {
    onClick: handleClickBilling
  }, /*#__PURE__*/React.createElement("h3", null, "BILLING")))));
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
function StatusBarComponent(props) {
  var message = props.message,
    messageType = props.messageType;
  return /*#__PURE__*/React.createElement(React.Fragment, null, message && /*#__PURE__*/React.createElement("div", {
    className: "status-bar card ".concat(messageType)
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("h4", null, message))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatusBarComponent);

/***/ })

}]);
//# sourceMappingURL=src_views_BillingReceipt_jsx.index.js.map