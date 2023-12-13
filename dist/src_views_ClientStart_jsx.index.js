"use strict";
(self["webpackChunkorb_accounts"] = self["webpackChunkorb_accounts"] || []).push([["src_views_ClientStart_jsx"],{

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

/***/ "./src/views/ClientStart.jsx":
/*!***********************************!*\
  !*** ./src/views/ClientStart.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsUsersSlice.js */ "./src/controllers/accountsUsersSlice.js");
/* harmony import */ var _loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading/LoadingComponent.jsx */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");
/* harmony import */ var _components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/StatusBar.jsx */ "./src/views/components/StatusBar.jsx");
/* harmony import */ var _controllers_accountsEnums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/accountsEnums.js */ "./src/controllers/accountsEnums.js");
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









// import countries from '../utils/Country.js';

function ClientComponent() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('info'),
    _useState2 = _slicedToArray(_useState, 2),
    messageType = _useState2[0],
    setMessageType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('To receive a quote, please fill out the form above with the required information.'),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isFomCompleted = _useState6[0],
    setIsFormCompleted = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    taxInfo = _useState8[0],
    setTaxInfo = _useState8[1];
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsUsers;
    }),
    clientLoading = _useSelector.clientLoading,
    stripe_customer_id = _useSelector.stripe_customer_id,
    name = _useSelector.name,
    first_name = _useSelector.first_name,
    last_name = _useSelector.last_name,
    user_email = _useSelector.user_email,
    phone = _useSelector.phone,
    address_line_1 = _useSelector.address_line_1,
    address_line_2 = _useSelector.address_line_2,
    city = _useSelector.city,
    state = _useSelector.state,
    zipcode = _useSelector.zipcode,
    country = _useSelector.country,
    shipping_name = _useSelector.shipping_name,
    shipping_first_name = _useSelector.shipping_first_name,
    shipping_last_name = _useSelector.shipping_last_name,
    shipping_phone = _useSelector.shipping_phone,
    shipping_address_line_1 = _useSelector.shipping_address_line_1,
    shipping_address_line_2 = _useSelector.shipping_address_line_2,
    shipping_city = _useSelector.shipping_city,
    shipping_state = _useSelector.shipping_state,
    shipping_zipcode = _useSelector.shipping_zipcode,
    shipping_country = _useSelector.shipping_country,
    company_name = _useSelector.company_name,
    tax_exempt = _useSelector.tax_exempt,
    tax_ids = _useSelector.tax_ids,
    tax_id_type = _useSelector.tax_id_type,
    tax_id = _useSelector.tax_id;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.accountsEnums;
    }),
    countries = _useSelector2.countries,
    taxIDInfo = _useSelector2.taxIDInfo;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user_email) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.getUser)());
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (first_name && last_name && address_line_1 && city && state && zipcode) {
      setIsFormCompleted(true);
    }
  }, [first_name, last_name, address_line_1, city, state, zipcode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (name) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.splitName)(name));
    }
  }, [name, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (shipping_name) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.splitShippingName)(shipping_name));
    }
  }, [shipping_name, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_controllers_accountsEnums_js__WEBPACK_IMPORTED_MODULE_6__.getCountries)());
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_controllers_accountsEnums_js__WEBPACK_IMPORTED_MODULE_6__.getTaxIDInfo)());
  }, [dispatch]);
  var handleFirstNameChange = function handleFirstNameChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateFirstName)(event.target.value));
  };
  var handleLastNameChange = function handleLastNameChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateLastName)(event.target.value));
  };
  var handlePhoneChange = function handlePhoneChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updatePhone)(event.target.value));
  };
  var handleAddressChange = function handleAddressChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateAddress)(event.target.value));
  };
  var handleAddressChange2 = function handleAddressChange2(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateAddress2)(event.target.value));
  };
  var handleCityChange = function handleCityChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateCity)(event.target.value));
  };
  var handleStateChange = function handleStateChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateState)(event.target.value));
  };
  var handleZipcodeChange = function handleZipcodeChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateZipcode)(event.target.value));
  };
  var handleCountryChange = function handleCountryChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateCountry)(event.target.value));
  };
  var handleShippingFirstNameChange = function handleShippingFirstNameChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingFirstName)(event.target.value));
  };
  var handleShippingLastNameChange = function handleShippingLastNameChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingLastName)(event.target.value));
  };
  var handleShippingPhoneChange = function handleShippingPhoneChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingPhone)(event.target.value));
  };
  var handleShippingAddressChange = function handleShippingAddressChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingAddress)(event.target.value));
  };
  var handleShippingAddressChange2 = function handleShippingAddressChange2(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingAddress2)(event.target.value));
  };
  var handleShippingCityChange = function handleShippingCityChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingCity)(event.target.value));
  };
  var handleShippingStateChange = function handleShippingStateChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingState)(event.target.value));
  };
  var handleShippingZipcodeChange = function handleShippingZipcodeChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingZipcode)(event.target.value));
  };
  var handleShippingCountryChange = function handleShippingCountryChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingCountry)(event.target.value));
  };
  var handleCompanyNameChange = function handleCompanyNameChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateCompanyName)(event.target.value));
  };
  var handleTaxExemptChange = function handleTaxExemptChange(event) {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateTaxExempt)(event.target.value));
  };
  var handleAddCompanyTaxID = function handleAddCompanyTaxID(e) {
    e.preventDefault();
    var modalElement = document.querySelector('.modal');
    if (modalElement) {
      modalElement.style.display = 'block';
    } else {
      console.error('Modal element not found');
    }
  };
  var handleDeleteTaxID = function handleDeleteTaxID(e, taxID) {
    e.preventDefault();
    var confirmDeletion = window.confirm('Are you sure you want to delete this Tax ID?');
    if (confirmDeletion) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.deleteTaxID)(taxID)).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          window.location.reload();
        }
      });
    }
  };
  var handleTaxIDType = function handleTaxIDType(e, selectedCountry) {
    e.preventDefault();
    setTaxInfo(selectedCountry);
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateTaxIDType)(selectedCountry["enum"]));
  };
  var handleTaxID = function handleTaxID(e, tax_id) {
    e.preventDefault();
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateTaxID)(tax_id));
  };
  var handleAddTaxID = function handleAddTaxID(e) {
    e.preventDefault();
    var confirm = window.confirm('Are you sure you want to add this Tax ID?');
    if (confirm && tax_id_type && tax_id) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.addTaxID)({
        tax_id_type: tax_id_type,
        tax_id: tax_id
      })).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          window.location.reload();
        }
      });
    }
  };
  var handleCancelTaxID = function handleCancelTaxID(e) {
    e.preventDefault();
    var modalElement = document.querySelector('.modal');
    if (modalElement) {
      modalElement.style.display = 'none';
    } else {
      console.error('Modal element not found');
    }
  };
  var handleSave = function handleSave() {
    if (first_name === '') {
      setMessage('Please provide first name.');
      setMessageType('error');
    } else if (last_name === '') {
      setMessage('Please provide last name.');
      setMessageType('error');
    } else if (address_line_1 === '') {
      setMessage('Please provide an address.');
      setMessageType('error');
    } else if (city === '') {
      setMessage('Please provide the city.');
      setMessageType('error');
    } else if (state === '') {
      setMessage('Please provide the state.');
      setMessageType('error');
    } else if (zipcode === '') {
      setMessage('Please provide zipcode.');
      setMessageType('error');
    } else if (isFomCompleted && stripe_customer_id === '' || stripe_customer_id === undefined) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.addUser)()).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          window.location.reload();
        }
      });
    }
  };
  var handleUpdate = function handleUpdate() {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateUser)()).then(function (response) {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          window.location.reload();
        }
      });
    }
  };
  var handleSelections = function handleSelections() {
    window.location.href = '/client/selections';
  };
  if (clientLoading) {
    return /*#__PURE__*/React.createElement(_loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "start"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, "user details"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("table", {
    className: "card"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: 3
  }, /*#__PURE__*/React.createElement("h5", {
    className: "title"
  }, "contact")))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "first_name",
    id: "first_name",
    placeholder: "First Name",
    onChange: handleFirstNameChange,
    value: first_name
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "last_name",
    id: "last_name",
    placeholder: "Last Name",
    onChange: handleLastNameChange,
    value: last_name
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "phone",
    type: "tel",
    placeholder: "Phone",
    onChange: handlePhoneChange,
    value: phone
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "address"
  }, /*#__PURE__*/React.createElement("table", {
    className: "card"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: 3
  }, /*#__PURE__*/React.createElement("h5", {
    className: "title"
  }, "billing address")))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "address_line_1",
    id: "bill_to_street",
    placeholder: "Street Address",
    onChange: handleAddressChange,
    value: address_line_1
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "address_line_2",
    id: "bill_to_street2",
    placeholder: "Suite #",
    onChange: handleAddressChange2,
    value: address_line_2
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "city",
    id: "bill_to_city",
    placeholder: "City",
    onChange: handleCityChange,
    value: city
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "state",
    id: "bill_to_state",
    placeholder: "State",
    onChange: handleStateChange,
    value: state
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "zipcode",
    id: "bill_to_zipcode",
    placeholder: "Zipcode",
    onChange: handleZipcodeChange,
    value: zipcode
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "country"
  }, "Country")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
    className: "select",
    name: "country",
    id: "country",
    onChange: function onChange(e) {
      return handleCountryChange(e, e.target.value);
    },
    value: country
  }, countries && countries.length > 0 && countries.map(function (country) {
    return /*#__PURE__*/React.createElement("option", {
      key: country.code,
      value: country.code
    }, country.country);
  })))))), /*#__PURE__*/React.createElement("table", {
    className: "card"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: 3
  }, /*#__PURE__*/React.createElement("h5", {
    className: "title"
  }, "shipping")))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "shipping_first_name",
    id: "shipping_first_name",
    placeholder: "First Name",
    onChange: handleShippingFirstNameChange,
    value: shipping_first_name
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "shipping_last_name",
    id: "shipping_last_name",
    placeholder: "Last Name",
    onChange: handleShippingLastNameChange,
    value: shipping_last_name
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "shipping_phone",
    type: "tel",
    placeholder: "Phone",
    onChange: handleShippingPhoneChange,
    value: shipping_phone
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "shipping_address_line_1",
    id: "shipping_street",
    placeholder: "Shipping Street Address",
    onChange: handleShippingAddressChange,
    value: shipping_address_line_1
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "shipping_address_line_2",
    id: "shipping_street2",
    placeholder: "Suite #",
    onChange: handleShippingAddressChange2,
    value: shipping_address_line_2
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "shipping_city",
    id: "shipping_city",
    placeholder: "Shipping City",
    onChange: handleShippingCityChange,
    value: shipping_city
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "shipping_state",
    id: "shipping_state",
    placeholder: "Shipping State",
    onChange: handleShippingStateChange,
    value: shipping_state
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "shipping_zipcode",
    id: "shipping_zipcode",
    placeholder: "Shipping Zipcode",
    onChange: handleShippingZipcodeChange,
    value: shipping_zipcode
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "shipping_country"
  }, "Shipping Country")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
    className: "select",
    name: "shipping_country",
    id: "shipping_country",
    placeholder: "Shipping Country",
    onChange: function onChange(e) {
      return handleShippingCountryChange(e, e.target.value);
    },
    value: shipping_country
  }, countries && countries.length > 0 && countries.map(function (country) {
    return /*#__PURE__*/React.createElement("option", {
      key: country.code,
      value: country.code
    }, country.country);
  }))))))), /*#__PURE__*/React.createElement("table", {
    className: "card"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: 3
  }, /*#__PURE__*/React.createElement("h5", {
    className: "title"
  }, "company")))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: "company_name",
    id: "company_name",
    placeholder: "Company Name",
    onChange: handleCompanyNameChange,
    value: company_name
  })), /*#__PURE__*/React.createElement("td", {
    className: "tax-exempt"
  }, /*#__PURE__*/React.createElement("label", null, "Tax Exempt: "), /*#__PURE__*/React.createElement("select", {
    className: "select",
    name: "tax_exempt",
    id: "tax_exempt",
    onChange: handleTaxExemptChange,
    value: tax_exempt
  }, /*#__PURE__*/React.createElement("option", {
    value: "none"
  }, /*#__PURE__*/React.createElement("label", null, "None")), /*#__PURE__*/React.createElement("option", {
    value: "exempt"
  }, /*#__PURE__*/React.createElement("label", null, "Exempt")), /*#__PURE__*/React.createElement("option", {
    value: "reverse"
  }, /*#__PURE__*/React.createElement("label", null, "Reverse"))))))), /*#__PURE__*/React.createElement("table", {
    className: "card"
  }, tax_ids && tax_ids.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: 5
  }, /*#__PURE__*/React.createElement("h5", {
    className: "title"
  }, "company tax id", /*#__PURE__*/React.createElement("span", null, "s")))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Verified"), /*#__PURE__*/React.createElement("th", {
    colSpan: 2
  }))), /*#__PURE__*/React.createElement("tbody", null, tax_ids.map(function (tax_id) {
    return /*#__PURE__*/React.createElement("tr", {
      key: tax_id.id
    }, /*#__PURE__*/React.createElement("td", null, tax_id.type.replace(/_/g, ' ').toUpperCase()), /*#__PURE__*/React.createElement("td", null, tax_id.value), /*#__PURE__*/React.createElement("td", {
      className: "status"
    }, tax_id.verification.status), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
      className: "add-button",
      onClick: function onClick(e) {
        return handleAddCompanyTaxID(e);
      }
    }, /*#__PURE__*/React.createElement("h4", null, "add"))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
      className: "delete-button",
      onClick: function onClick(e) {
        return handleDeleteTaxID(e, tax_id.id);
      }
    }, /*#__PURE__*/React.createElement("h4", null, "delete"))));
  }))) : /*#__PURE__*/React.createElement("button", {
    className: "add-button",
    onClick: function onClick(e) {
      return handleAddCompanyTaxID(e);
    }
  }, /*#__PURE__*/React.createElement("h3", null, "add company tax id")), /*#__PURE__*/React.createElement("tfoot", null)), /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("table", {
    className: "card"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: 2
  }, /*#__PURE__*/React.createElement("h5", null, "add company tax id")))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: ""
  }, "Select Country:")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
    className: "select",
    name: "tax_id_country",
    id: "tax_id_country",
    onChange: function onChange(e) {
      return handleTaxIDType(e, JSON.parse(e.target.value));
    }
  }, taxIDInfo && taxIDInfo.length > 0 && taxIDInfo.map(function (country) {
    return /*#__PURE__*/React.createElement("option", {
      key: country.country,
      value: JSON.stringify(country)
    }, country.country);
  })))), tax_id_type && taxInfo && Object.keys(taxInfo).length > 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "tax_id"
  }, taxInfo.description)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    name: taxInfo.description,
    id: "tax_id",
    placeholder: "".concat(taxInfo.example),
    onChange: function onChange(e) {
      return handleTaxID(e, e.target.value);
    }
  }))) : '', /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, tax_id_type && tax_id ? /*#__PURE__*/React.createElement("button", {
    className: "add-button",
    onClick: function onClick(e) {
      return handleAddTaxID(e);
    }
  }, /*#__PURE__*/React.createElement("h4", null, "add")) : ''), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    className: "cancel-button",
    onClick: function onClick(e) {
      return handleCancelTaxID(e);
    }
  }, /*#__PURE__*/React.createElement("h4", null, "cancel")))))))), /*#__PURE__*/React.createElement(_components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: message,
    messageType: messageType
  }), /*#__PURE__*/React.createElement("div", {
    className: "action"
  }, stripe_customer_id === '' ? /*#__PURE__*/React.createElement("button", {
    onClick: handleSave
  }, /*#__PURE__*/React.createElement("h3", null, "save")) : '', stripe_customer_id ? /*#__PURE__*/React.createElement("button", {
    onClick: handleUpdate
  }, /*#__PURE__*/React.createElement("h3", null, "update")) : '', stripe_customer_id ? /*#__PURE__*/React.createElement("button", {
    onClick: handleSelections
  }, /*#__PURE__*/React.createElement("h3", null, "selections")) : '')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientComponent);

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
//# sourceMappingURL=src_views_ClientStart_jsx.index.js.map