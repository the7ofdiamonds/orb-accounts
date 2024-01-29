"use strict";
(self["webpackChunkorb_accounts"] = self["webpackChunkorb_accounts"] || []).push([["src_views_ClientSelections_jsx"],{

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

/***/ "./src/views/ClientSelections.jsx":
/*!****************************************!*\
  !*** ./src/views/ClientSelections.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controllers_accountsServicesSlice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsServicesSlice.js */ "./src/controllers/accountsServicesSlice.js");
/* harmony import */ var _controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/accountsUsersSlice.js */ "./src/controllers/accountsUsersSlice.js");
/* harmony import */ var _controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/accountsQuoteSlice.js */ "./src/controllers/accountsQuoteSlice.js");
/* harmony import */ var _loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading/LoadingComponent.jsx */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");
/* harmony import */ var _components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/StatusBar.jsx */ "./src/views/components/StatusBar.jsx");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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








function SelectionsComponent() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('info'),
    _useState2 = _slicedToArray(_useState, 2),
    messageType = _useState2[0],
    setMessageType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Check the boxes next to the services you would like performed.'),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    checkedItems = _useState6[0],
    setCheckedItems = _useState6[1];
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsServices;
    }),
    servicesLoading = _useSelector.servicesLoading,
    servicesError = _useSelector.servicesError,
    services = _useSelector.services;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsUsers;
    }),
    user_email = _useSelector2.user_email,
    stripe_customer_id = _useSelector2.stripe_customer_id;
  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsQuote;
    }),
    quoteLoading = _useSelector3.quoteLoading,
    quoteError = _useSelector3.quoteError,
    stripe_quote_id = _useSelector3.stripe_quote_id,
    quotes = _useSelector3.quotes,
    quote_id = _useSelector3.quote_id,
    quote_status = _useSelector3.quote_status,
    selections = _useSelector3.selections,
    total = _useSelector3.total;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user_email) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_3__.getUser)()).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.getClientQuotes)());
    }
  }, [stripe_customer_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (Array.isArray(quotes) && quotes.length > 0) {
      var filteredQuotes = [];
      quotes.forEach(function (quote) {
        var timestampNow = Math.floor(Date.now() / 1000);
        var timestamp = parseInt(quote.expires_at);
        var createdAt = new Date(quote.created_at).getTime();
        var status = quote.status;
        if (timestampNow < timestamp) {
          if (status === 'draft' || status === 'open' || status === 'accepted') {
            filteredQuotes.push(createdAt);
          }
        }
      });
      if (filteredQuotes.length > 0) {
        var earliestDate = Math.min.apply(Math, filteredQuotes);
        quotes.forEach(function (quote) {
          if (new Date(quote.created_at).getTime() === earliestDate) {
            dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.getQuote)(quote.stripe_quote_id));
          }
        });
      }
    }
  }, [quotes, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsServicesSlice_js__WEBPACK_IMPORTED_MODULE_2__.fetchServices)());
    }
  }, [stripe_customer_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.addSelections)(checkedItems));
  }, [dispatch, checkedItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.calculateSelections)(services.price));
  }, [dispatch, services.price, checkedItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.addOnboardingLink)());
  }, [dispatch, checkedItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (stripe_quote_id) {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.getQuote)()).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [stripe_quote_id, dispatch]);
  var handleCheckboxChange = function handleCheckboxChange(event, id, price_id, description, price, onboarding_link) {
    var isChecked = event.target.checked;
    setCheckedItems(function (prevItems) {
      if (isChecked) {
        var newItem = {
          id: id,
          price_id: price_id,
          description: description,
          price: price,
          onboarding_link: onboarding_link
        };
        return [].concat(_toConsumableArray(prevItems), [newItem]);
      } else {
        return prevItems.filter(function (item) {
          return item.id !== id;
        });
      }
    });
  };
  var handleClick = function handleClick() {
    if (quote_id && (quote_status === 'open' || quote_status === 'accepted')) {
      window.location.href = "/billing/quote/".concat(quote_id);
    }
    if (quote_status === 'draft') {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.updateQuote)()).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.finalizeQuote)()).then(function (response) {
            if (response.error !== undefined) {
              console.error(response.error.message);
              setMessageType('error');
              setMessage(response.error.message);
            } else {
              window.location.href = "/billing/quote/".concat(response.payload.quote_id);
            }
          });
        }
      });
    }
    if (stripe_quote_id === '' || quote_status === 'canceled') {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.createQuote)()).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          window.location.href = "/billing/quote/".concat(response.payload);
        }
      });
    }
  };
  if (servicesLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }
  if (servicesError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: servicesError
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "selections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "title"
  }, "selections"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "quote-card card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    colSpan: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "title"
  }, "service")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "title"
  }, "cost")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, services && services.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, services.map(function (service) {
    var id = service.id,
      price_id = service.price_id,
      description = service.description,
      price = service.price,
      onboarding_link = service.onboarding_link;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: id,
      id: "quote_option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      className: "input selection feature-selection",
      type: "checkbox",
      name: "quote[checkbox][]",
      checked: checkedItems.some(function (item) {
        return item.id === id;
      }),
      onChange: function onChange(event) {
        return handleCheckboxChange(event, id, price_id, description, price, onboarding_link);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "feature-description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "feature-cost table-number",
      id: "feature_cost"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, new Intl.NumberFormat('us', {
      style: 'currency',
      currency: 'USD'
    }).format(price))));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "No services to show yet")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tfoot", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    colSpan: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "title"
  }, "TOTAL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "subtotal"
  }, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(total))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: message,
    messageType: messageType
  }), Array.isArray(selections) && selections.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "QUOTE")) : ''));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionsComponent);

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
//# sourceMappingURL=src_views_ClientSelections_jsx.index.js.map