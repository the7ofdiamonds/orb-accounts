"use strict";
(globalThis["webpackChunkorb_accounts"] = globalThis["webpackChunkorb_accounts"] || []).push([["src_views_BillingPaymentCard_jsx"],{

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

/***/ "./src/utils/FormatCreditNumber.js":
/*!*****************************************!*\
  !*** ./src/utils/FormatCreditNumber.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatCreditNumber: () => (/* binding */ FormatCreditNumber)
/* harmony export */ });
const FormatCreditNumber = number => number.split('').reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += ' ';
  return seed + next;
}, '');

/***/ }),

/***/ "./src/utils/FormatCurrency.js":
/*!*************************************!*\
  !*** ./src/utils/FormatCurrency.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatCurrency: () => (/* binding */ FormatCurrency)
/* harmony export */ });
const FormatCurrency = (number, locales, currency) => {
  const Number = number / 100;
  const Locales = locales ? locales.toLowerCase() : 'us';
  const Currency = currency || 'USD';
  return new Intl.NumberFormat(Locales, {
    style: 'currency',
    currency: Currency
  }).format(Number);
};

/***/ }),

/***/ "./src/utils/PaymentMethod.js":
/*!************************************!*\
  !*** ./src/utils/PaymentMethod.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentMethodGenerator: () => (/* binding */ PaymentMethodGenerator)
/* harmony export */ });
function PaymentMethodGenerator(payment_method) {
  let paymentMethod = '';
  if (payment_method) {
    const paymentType = payment_method.type;
    const paymentCard = payment_method.card;
    const paymentFundingType = paymentCard.funding;
    const paymentBrand = paymentCard.brand;
    const country = paymentCard.country;
    const last4 = paymentCard.last4;
    const wallet = payment_method.wallet;
    if (paymentType === 'card') {
      paymentMethod = `${paymentFundingType !== 'unknown' ? paymentFundingType : ''} ${paymentType} ${country} ${paymentBrand} ${last4}`;
    } else if (paymentType === 'wallet' && wallet !== null) {
      paymentMethod = wallet;
    } else {
      paymentMethod = paymentType;
    }
    if (payment_method.card_present) {
      const cardPresent = payment_method.card_present;
      const cardPresentFunding = cardPresent.card_present;
      const cardPresentBrand = cardPresent.brand;
      const cardPresentCountry = cardPresent.country;
      const cardPresentLast4 = cardPresent.last4;
      paymentMethod = `${cardPresentFunding !== 'unknown' ? cardPresentFunding : ''} ${paymentType} ${cardPresentCountry} ${cardPresentBrand} ${cardPresentLast4}`;
    }
  }
  return paymentMethod;
}

/***/ }),

/***/ "./src/views/BillingPaymentCard.jsx":
/*!******************************************!*\
  !*** ./src/views/BillingPaymentCard.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PaymentNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PaymentNavigation */ "./src/views/components/PaymentNavigation.jsx");
/* harmony import */ var _controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/accountsUsersSlice.js */ "./src/controllers/accountsUsersSlice.js");
/* harmony import */ var _controllers_accountsInvoiceSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/accountsInvoiceSlice */ "./src/controllers/accountsInvoiceSlice.js");
/* harmony import */ var _controllers_accountsReceiptSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/accountsReceiptSlice */ "./src/controllers/accountsReceiptSlice.js");
/* harmony import */ var _controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controllers/accountsStripeSlice.js */ "./src/controllers/accountsStripeSlice.js");
/* harmony import */ var _utils_PaymentMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/PaymentMethod */ "./src/utils/PaymentMethod.js");
/* harmony import */ var _utils_FormatCreditNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/FormatCreditNumber */ "./src/utils/FormatCreditNumber.js");
/* harmony import */ var _utils_FormatCurrency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/FormatCurrency */ "./src/utils/FormatCurrency.js");
/* harmony import */ var _loading_LoadingComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loading/LoadingComponent */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");
/* harmony import */ var _components_StatusBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/StatusBar */ "./src/views/components/StatusBar.jsx");
















const CardPaymentComponent = () => {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useParams)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();

  // const CardNumber = elements.create(cardNumber);

  const [messageType, setMessageType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('info');
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Please enter your card number, expiration date, and the code on the back.');
  const {
    user_email,
    first_name,
    last_name,
    stripe_customer_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsUsers);
  const {
    stripe_invoice_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsInvoice);
  const {
    stripeLoading,
    stripeError,
    payment_intent_id,
    status,
    account_country,
    currency,
    amount_due,
    amount_paid,
    amount_remaining,
    onboarding_links,
    client_secret,
    payment_method_id,
    paymentMethod
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsStripe);
  const {
    receipt_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsReceipt);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_4__.getUser)(user_email)).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          dispatch((0,_controllers_accountsInvoiceSlice__WEBPACK_IMPORTED_MODULE_5__.getInvoiceByID)(id)).then(response => {
            if (response.error !== undefined) {
              console.error(response.error.message);
              setMessageType('error');
              setMessage(response.error.message);
            }
          });
        }
      });
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_invoice_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__.getStripeInvoice)(stripe_invoice_id));
    }
  }, [stripe_invoice_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (payment_intent_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__.getPaymentIntent)(payment_intent_id));
    }
  }, [payment_intent_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (payment_method_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__.getPaymentMethod)(payment_method_id));
    }
  }, [payment_method_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (payment_method_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__.updatePaymentMethod)((0,_utils_PaymentMethod__WEBPACK_IMPORTED_MODULE_8__.PaymentMethodGenerator)(payment_method_id)));
    }
  }, [payment_method_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status === 'paid' && paymentMethod) {
      dispatch((0,_controllers_accountsReceiptSlice__WEBPACK_IMPORTED_MODULE_6__.saveReceipt)()).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [status, paymentMethod, dispatch]);
  const handlePay = () => {
    if (client_secret) {}
  };
  const handleReceipt = () => {
    if (receipt_id) {
      window.location.href = `/billing/receipt/${receipt_id}`;
    }
  };
  const handleOnboarding = () => {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "payment"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PaymentNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "debit-credit-card card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-number-box"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardNumberElement, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardExpiryElement, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardCvcElement, {
    className: "cvv-box"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_StatusBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    message: message,
    messageType: messageType
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "amount"
  }, amount_paid ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Amount Paid:", (0,_utils_FormatCurrency__WEBPACK_IMPORTED_MODULE_10__.FormatCurrency)(amount_paid, account_country, currency)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Balance:", ' ', (0,_utils_FormatCurrency__WEBPACK_IMPORTED_MODULE_10__.FormatCurrency)(amount_remaining, account_country, currency))) : amount_due ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Amount: ", (0,_utils_FormatCurrency__WEBPACK_IMPORTED_MODULE_10__.FormatCurrency)(amount_due, account_country, currency)) : ''), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "action"
  }, amount_due && client_secret ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    onClick: handlePay
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "pay")) : '', receipt_id ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    onClick: handleReceipt
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "receipt")) : '', receipt_id && onboarding_links ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    onClick: handleOnboarding
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "onboarding")) : '')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardPaymentComponent);

/***/ }),

/***/ "./src/views/components/PaymentNavigation.jsx":
/*!****************************************************!*\
  !*** ./src/views/components/PaymentNavigation.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");



function PaymentNavigationComponent() {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "payment-options"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: `/billing/payment/wallet/${id}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "mobile-btn",
    id: "mobile-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "WALLET"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    to: `/billing/payment/card/${id}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "debit-credit-btn",
    id: "debit-credit-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "CARD")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentNavigationComponent);

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
//# sourceMappingURL=src_views_BillingPaymentCard_jsx.js.map