"use strict";
(globalThis["webpackChunkorb_accounts"] = globalThis["webpackChunkorb_accounts"] || []).push([["src_views_ClientSelections_jsx"],{

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









function SelectionsComponent() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [messageType, setMessageType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('info');
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Check the boxes next to the services you would like performed.');
  const [checkedItems, setCheckedItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    servicesLoading,
    servicesError,
    services
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsServices);
  const {
    user_email,
    stripe_customer_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsUser);
  const {
    quoteLoading,
    quoteError,
    stripe_quote_id,
    quotes,
    quote_id,
    quote_status,
    selections,
    total
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsQuote);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_3__.getUser)()).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.getClientQuotes)());
    }
  }, [stripe_customer_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Array.isArray(quotes) && quotes.length > 0) {
      const filteredQuotes = [];
      quotes.forEach(quote => {
        const timestampNow = Math.floor(Date.now() / 1000);
        const timestamp = parseInt(quote.expires_at);
        const createdAt = new Date(quote.created_at).getTime();
        const status = quote.status;
        if (timestampNow < timestamp) {
          if (status === 'draft' || status === 'open' || status === 'accepted') {
            filteredQuotes.push(createdAt);
          }
        }
      });
      if (filteredQuotes.length > 0) {
        const earliestDate = Math.min(...filteredQuotes);
        quotes.forEach(quote => {
          if (new Date(quote.created_at).getTime() === earliestDate) {
            dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.getQuote)(quote.stripe_quote_id));
          }
        });
      }
    }
  }, [quotes, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsServicesSlice_js__WEBPACK_IMPORTED_MODULE_2__.fetchServices)());
    }
  }, [stripe_customer_id, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.addSelections)(checkedItems));
  }, [dispatch, checkedItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.calculateSelections)(services.price));
  }, [dispatch, services.price, checkedItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.addOnboardingLink)());
  }, [dispatch, checkedItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stripe_quote_id) {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.getQuote)()).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [stripe_quote_id, dispatch]);
  const handleCheckboxChange = (event, id, price_id, description, price, onboarding_link) => {
    const isChecked = event.target.checked;
    setCheckedItems(prevItems => {
      if (isChecked) {
        const newItem = {
          id,
          price_id,
          description,
          price,
          onboarding_link
        };
        return [...prevItems, newItem];
      } else {
        return prevItems.filter(item => item.id !== id);
      }
    });
  };
  const handleClick = () => {
    if (quote_id && (quote_status === 'open' || quote_status === 'accepted')) {
      window.location.href = `/billing/quote/${quote_id}`;
    }
    if (quote_status === 'draft') {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.updateQuote)()).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.finalizeQuote)()).then(response => {
            if (response.error !== undefined) {
              console.error(response.error.message);
              setMessageType('error');
              setMessage(response.error.message);
            } else {
              window.location.href = `/billing/quote/${response.payload.quote_id}`;
            }
          });
        }
      });
    }
    if (stripe_quote_id === '' || quote_status === 'canceled') {
      dispatch((0,_controllers_accountsQuoteSlice_js__WEBPACK_IMPORTED_MODULE_4__.createQuote)()).then(response => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          window.location.href = `/billing/quote/${response.payload}`;
        }
      });
    }
  };
  if (servicesLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }
  if (servicesError) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: servicesError
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "selections"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "title"
  }, "selections"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "quote-card card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colSpan: "2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "title"
  }, "service")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "title"
  }, "cost")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, services && services.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, services.map(service => {
    const {
      id,
      price_id,
      description,
      price,
      onboarding_link
    } = service;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: id,
      id: "quote_option"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "input selection feature-selection",
      type: "checkbox",
      name: "quote[checkbox][]",
      checked: checkedItems.some(item => item.id === id),
      onChange: event => handleCheckboxChange(event, id, price_id, description, price, onboarding_link)
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "feature-description"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, description)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "feature-cost table-number",
      id: "feature_cost"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, new Intl.NumberFormat('us', {
      style: 'currency',
      currency: 'USD'
    }).format(price))));
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: "3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "No services to show yet")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colSpan: "2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "title"
  }, "TOTAL")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "subtotal"
  }, new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD'
  }).format(total))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    message: message,
    messageType: messageType
  }), Array.isArray(selections) && selections.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleClick
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "QUOTE")) : ''));
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
//# sourceMappingURL=src_views_ClientSelections_jsx.js.map