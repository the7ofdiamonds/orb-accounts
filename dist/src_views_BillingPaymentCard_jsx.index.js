"use strict";
(self["webpackChunkorb_accounts"] = self["webpackChunkorb_accounts"] || []).push([["src_views_BillingPaymentCard_jsx"],{

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

/***/ "./src/utils/FormatCreditNumber.js":
/*!*****************************************!*\
  !*** ./src/utils/FormatCreditNumber.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatCreditNumber: () => (/* binding */ FormatCreditNumber)
/* harmony export */ });
var FormatCreditNumber = function FormatCreditNumber(number) {
  return number.split('').reduce(function (seed, next, index) {
    if (index !== 0 && !(index % 4)) seed += ' ';
    return seed + next;
  }, '');
};

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
var FormatCurrency = function FormatCurrency(number, locales, currency) {
  var Number = number / 100;
  var Locales = locales ? locales.toLowerCase() : 'us';
  var Currency = currency || 'USD';
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
  var paymentMethod = '';
  if (payment_method) {
    var paymentType = payment_method.type;
    var paymentCard = payment_method.card;
    var paymentFundingType = paymentCard.funding;
    var paymentBrand = paymentCard.brand;
    var country = paymentCard.country;
    var last4 = paymentCard.last4;
    var wallet = payment_method.wallet;
    if (paymentType === 'card') {
      paymentMethod = "".concat(paymentFundingType !== 'unknown' ? paymentFundingType : '', " ").concat(paymentType, " ").concat(country, " ").concat(paymentBrand, " ").concat(last4);
    } else if (paymentType === 'wallet' && wallet !== null) {
      paymentMethod = wallet;
    } else {
      paymentMethod = paymentType;
    }
    if (payment_method.card_present) {
      var cardPresent = payment_method.card_present;
      var cardPresentFunding = cardPresent.card_present;
      var cardPresentBrand = cardPresent.brand;
      var cardPresentCountry = cardPresent.country;
      var cardPresentLast4 = cardPresent.last4;
      paymentMethod = "".concat(cardPresentFunding !== 'unknown' ? cardPresentFunding : '', " ").concat(paymentType, " ").concat(cardPresentCountry, " ").concat(cardPresentBrand, " ").concat(cardPresentLast4);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PaymentNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PaymentNavigation */ "./src/views/components/PaymentNavigation.jsx");
/* harmony import */ var _controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/accountsUsersSlice.js */ "./src/controllers/accountsUsersSlice.js");
/* harmony import */ var _controllers_accountsInvoiceSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/accountsInvoiceSlice */ "./src/controllers/accountsInvoiceSlice.js");
/* harmony import */ var _controllers_accountsReceiptSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/accountsReceiptSlice */ "./src/controllers/accountsReceiptSlice.js");
/* harmony import */ var _controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controllers/accountsStripeSlice.js */ "./src/controllers/accountsStripeSlice.js");
/* harmony import */ var _controllers_accountsImagesSlice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controllers/accountsImagesSlice.js */ "./src/controllers/accountsImagesSlice.js");
/* harmony import */ var _utils_PaymentMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/PaymentMethod */ "./src/utils/PaymentMethod.js");
/* harmony import */ var _utils_FormatCreditNumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/FormatCreditNumber */ "./src/utils/FormatCreditNumber.js");
/* harmony import */ var _utils_FormatCurrency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/FormatCurrency */ "./src/utils/FormatCurrency.js");
/* harmony import */ var _loading_LoadingComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loading/LoadingComponent */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");
/* harmony import */ var _components_StatusBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/StatusBar */ "./src/views/components/StatusBar.jsx");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
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
















var CardPaymentComponent = function CardPaymentComponent() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
    id = _useParams.id;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('info'),
    _useState2 = _slicedToArray(_useState, 2),
    messageType = _useState2[0],
    setMessageType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Please enter your card number, expiration date, and the code on the back.'),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsUsers;
    }),
    user_email = _useSelector.user_email,
    first_name = _useSelector.first_name,
    last_name = _useSelector.last_name,
    stripe_customer_id = _useSelector.stripe_customer_id;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsInvoice;
    }),
    stripe_invoice_id = _useSelector2.stripe_invoice_id;
  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsStripe;
    }),
    stripeLoading = _useSelector3.stripeLoading,
    stripeError = _useSelector3.stripeError,
    payment_intent_id = _useSelector3.payment_intent_id,
    status = _useSelector3.status,
    name = _useSelector3.name,
    account_country = _useSelector3.account_country,
    currency = _useSelector3.currency,
    amount_due = _useSelector3.amount_due,
    amount_paid = _useSelector3.amount_paid,
    amount_remaining = _useSelector3.amount_remaining,
    onboarding_links = _useSelector3.onboarding_links,
    client_secret = _useSelector3.client_secret,
    payment_method_id = _useSelector3.payment_method_id,
    paymentMethod = _useSelector3.paymentMethod;
  var _useSelector4 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsReceipt;
    }),
    receipt_id = _useSelector4.receipt_id;
  var _useSelector5 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsImages;
    }),
    logo_url = _useSelector5.logo_url;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user_email) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_4__.getUser)(user_email)).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
          // } else {
          //   dispatch(getInvoiceByID(id)).then((response) => {
          //     if (response.error !== undefined) {
          //       console.error(response.error.message);
          //       setMessageType('error');
          //       setMessage(response.error.message);
          //     }
          //   });
        }
      });
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (stripe_invoice_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__.getStripeInvoice)(stripe_invoice_id));
    }
  }, [stripe_invoice_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (payment_intent_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__.getPaymentIntent)(payment_intent_id));
    }
  }, [payment_intent_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (payment_method_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__.getPaymentMethod)(payment_method_id));
    }
  }, [payment_method_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (payment_method_id) {
      dispatch((0,_controllers_accountsStripeSlice_js__WEBPACK_IMPORTED_MODULE_7__.updatePaymentMethod)((0,_utils_PaymentMethod__WEBPACK_IMPORTED_MODULE_9__.PaymentMethodGenerator)(payment_method_id)));
    }
  }, [payment_method_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (status === 'paid' && paymentMethod) {
      dispatch((0,_controllers_accountsReceiptSlice__WEBPACK_IMPORTED_MODULE_6__.saveReceipt)()).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [status, paymentMethod, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          dispatch((0,_controllers_accountsImagesSlice_js__WEBPACK_IMPORTED_MODULE_8__.getCompanyLogo)());
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), []);
  var handlePay = function handlePay() {
    if (client_secret) {}
  };
  var handleReceipt = function handleReceipt() {
    if (receipt_id) {
      window.location.href = "/billing/receipt/".concat(receipt_id);
    }
  };
  var handleOnboarding = function handleOnboarding() {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "payment-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PaymentNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "credit-card-form card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-front"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: logo_url,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-chip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/wp-content/plugins/orb-accounts/Assets/Images/pngegg.png",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-holder-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-back"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-magnetic-strip"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "signature-line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-number-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardNumberElement, {
    placeholder: "1234 5678 9012 3456"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-expiration-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardExpiryElement, {
    placeholder: "MM/YY"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-cvc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardCvcElement, {
    placeholder: "123"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_StatusBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    message: message,
    messageType: messageType
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "amount"
  }, amount_paid ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Amount Paid:", (0,_utils_FormatCurrency__WEBPACK_IMPORTED_MODULE_11__.FormatCurrency)(amount_paid, account_country, currency)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Balance:", ' ', (0,_utils_FormatCurrency__WEBPACK_IMPORTED_MODULE_11__.FormatCurrency)(amount_remaining, account_country, currency))) : amount_due ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Amount: ", (0,_utils_FormatCurrency__WEBPACK_IMPORTED_MODULE_11__.FormatCurrency)(amount_due, account_country, currency)) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action"
  }, amount_due && client_secret ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handlePay
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "pay")) : '', receipt_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleReceipt
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "receipt")) : '', receipt_id && onboarding_links ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleOnboarding
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "onboarding")) : '')));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");


function PaymentNavigationComponent() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useParams)(),
    id = _useParams.id;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "payment-options"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/billing/payment/wallet/".concat(id)
  }, /*#__PURE__*/React.createElement("button", {
    className: "mobile-btn",
    id: "mobile-btn"
  }, /*#__PURE__*/React.createElement("h3", null, "WALLET"))), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/billing/payment/card/".concat(id)
  }, /*#__PURE__*/React.createElement("button", {
    className: "debit-credit-btn",
    id: "debit-credit-btn"
  }, /*#__PURE__*/React.createElement("h3", null, "CARD")))));
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
//# sourceMappingURL=src_views_BillingPaymentCard_jsx.index.js.map