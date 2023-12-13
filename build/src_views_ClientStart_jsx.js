"use strict";
(globalThis["webpackChunkorb_accounts"] = globalThis["webpackChunkorb_accounts"] || []).push([["src_views_ClientStart_jsx"],{

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










// import countries from '../utils/Country.js';

function ClientComponent() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const [messageType, setMessageType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('info');
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('To receive a quote, please fill out the form above with the required information.');
  const [isFomCompleted, setIsFormCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [taxInfo, setTaxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    clientLoading,
    stripe_customer_id,
    name,
    first_name,
    last_name,
    user_email,
    phone,
    address_line_1,
    address_line_2,
    city,
    state,
    zipcode,
    country,
    shipping_name,
    shipping_first_name,
    shipping_last_name,
    shipping_phone,
    shipping_address_line_1,
    shipping_address_line_2,
    shipping_city,
    shipping_state,
    shipping_zipcode,
    shipping_country,
    company_name,
    tax_exempt,
    tax_ids,
    tax_id_type,
    tax_id
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsUsers);
  const {
    countries,
    taxIDInfo
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsEnums);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.getUser)());
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (first_name && last_name && address_line_1 && city && state && zipcode) {
      setIsFormCompleted(true);
    }
  }, [first_name, last_name, address_line_1, city, state, zipcode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (name) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.splitName)(name));
    }
  }, [name, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shipping_name) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.splitShippingName)(shipping_name));
    }
  }, [shipping_name, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_controllers_accountsEnums_js__WEBPACK_IMPORTED_MODULE_6__.getCountries)());
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_controllers_accountsEnums_js__WEBPACK_IMPORTED_MODULE_6__.getTaxIDInfo)());
  }, [dispatch]);
  const handleFirstNameChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateFirstName)(event.target.value));
  };
  const handleLastNameChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateLastName)(event.target.value));
  };
  const handlePhoneChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updatePhone)(event.target.value));
  };
  const handleAddressChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateAddress)(event.target.value));
  };
  const handleAddressChange2 = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateAddress2)(event.target.value));
  };
  const handleCityChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateCity)(event.target.value));
  };
  const handleStateChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateState)(event.target.value));
  };
  const handleZipcodeChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateZipcode)(event.target.value));
  };
  const handleCountryChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateCountry)(event.target.value));
  };
  const handleShippingFirstNameChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingFirstName)(event.target.value));
  };
  const handleShippingLastNameChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingLastName)(event.target.value));
  };
  const handleShippingPhoneChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingPhone)(event.target.value));
  };
  const handleShippingAddressChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingAddress)(event.target.value));
  };
  const handleShippingAddressChange2 = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingAddress2)(event.target.value));
  };
  const handleShippingCityChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingCity)(event.target.value));
  };
  const handleShippingStateChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingState)(event.target.value));
  };
  const handleShippingZipcodeChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingZipcode)(event.target.value));
  };
  const handleShippingCountryChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingCountry)(event.target.value));
  };
  const handleCompanyNameChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateCompanyName)(event.target.value));
  };
  const handleTaxExemptChange = event => {
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateTaxExempt)(event.target.value));
  };
  const handleAddCompanyTaxID = e => {
    e.preventDefault();
    var modalElement = document.querySelector('.modal');
    if (modalElement) {
      modalElement.style.display = 'block';
    } else {
      console.error('Modal element not found');
    }
  };
  const handleDeleteTaxID = (e, taxID) => {
    e.preventDefault();
    const confirmDeletion = window.confirm('Are you sure you want to delete this Tax ID?');
    if (confirmDeletion) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.deleteTaxID)(taxID)).then(response => {
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
  const handleTaxIDType = (e, selectedCountry) => {
    e.preventDefault();
    setTaxInfo(selectedCountry);
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateTaxIDType)(selectedCountry.enum));
  };
  const handleTaxID = (e, tax_id) => {
    e.preventDefault();
    dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateTaxID)(tax_id));
  };
  const handleAddTaxID = e => {
    e.preventDefault();
    const confirm = window.confirm('Are you sure you want to add this Tax ID?');
    if (confirm && tax_id_type && tax_id) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.addTaxID)({
        tax_id_type: tax_id_type,
        tax_id: tax_id
      })).then(response => {
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
  const handleCancelTaxID = e => {
    e.preventDefault();
    var modalElement = document.querySelector('.modal');
    if (modalElement) {
      modalElement.style.display = 'none';
    } else {
      console.error('Modal element not found');
    }
  };
  const handleSave = () => {
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
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.addUser)()).then(response => {
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
  const handleUpdate = () => {
    if (stripe_customer_id) {
      dispatch((0,_controllers_accountsUsersSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateUser)()).then(response => {
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
  const handleSelections = () => {
    window.location.href = '/client/selections';
  };
  if (clientLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "title"
  }, "user details"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colSpan: 3
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "title"
  }, "contact")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "first_name",
    id: "first_name",
    placeholder: "First Name",
    onChange: handleFirstNameChange,
    value: first_name
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "last_name",
    id: "last_name",
    placeholder: "Last Name",
    onChange: handleLastNameChange,
    value: last_name
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "phone",
    type: "tel",
    placeholder: "Phone",
    onChange: handlePhoneChange,
    value: phone
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "address"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colSpan: 3
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "title"
  }, "billing address")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: 2
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "address_line_1",
    id: "bill_to_street",
    placeholder: "Street Address",
    onChange: handleAddressChange,
    value: address_line_1
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "address_line_2",
    id: "bill_to_street2",
    placeholder: "Suite #",
    onChange: handleAddressChange2,
    value: address_line_2
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "city",
    id: "bill_to_city",
    placeholder: "City",
    onChange: handleCityChange,
    value: city
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "state",
    id: "bill_to_state",
    placeholder: "State",
    onChange: handleStateChange,
    value: state
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "zipcode",
    id: "bill_to_zipcode",
    placeholder: "Zipcode",
    onChange: handleZipcodeChange,
    value: zipcode
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "country"
  }, "Country")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "select",
    name: "country",
    id: "country",
    onChange: e => handleCountryChange(e, e.target.value),
    value: country
  }, countries && countries.length > 0 && countries.map(country => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: country.code,
    value: country.code
  }, country.country))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colSpan: 3
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "title"
  }, "shipping")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "shipping_first_name",
    id: "shipping_first_name",
    placeholder: "First Name",
    onChange: handleShippingFirstNameChange,
    value: shipping_first_name
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "shipping_last_name",
    id: "shipping_last_name",
    placeholder: "Last Name",
    onChange: handleShippingLastNameChange,
    value: shipping_last_name
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "shipping_phone",
    type: "tel",
    placeholder: "Phone",
    onChange: handleShippingPhoneChange,
    value: shipping_phone
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: 2
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "shipping_address_line_1",
    id: "shipping_street",
    placeholder: "Shipping Street Address",
    onChange: handleShippingAddressChange,
    value: shipping_address_line_1
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "shipping_address_line_2",
    id: "shipping_street2",
    placeholder: "Suite #",
    onChange: handleShippingAddressChange2,
    value: shipping_address_line_2
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "shipping_city",
    id: "shipping_city",
    placeholder: "Shipping City",
    onChange: handleShippingCityChange,
    value: shipping_city
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "shipping_state",
    id: "shipping_state",
    placeholder: "Shipping State",
    onChange: handleShippingStateChange,
    value: shipping_state
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "shipping_zipcode",
    id: "shipping_zipcode",
    placeholder: "Shipping Zipcode",
    onChange: handleShippingZipcodeChange,
    value: shipping_zipcode
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "shipping_country"
  }, "Shipping Country")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "select",
    name: "shipping_country",
    id: "shipping_country",
    placeholder: "Shipping Country",
    onChange: e => handleShippingCountryChange(e, e.target.value),
    value: shipping_country
  }, countries && countries.length > 0 && countries.map(country => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: country.code,
    value: country.code
  }, country.country)))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colSpan: 3
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "title"
  }, "company")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: 2
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "company_name",
    id: "company_name",
    placeholder: "Company Name",
    onChange: handleCompanyNameChange,
    value: company_name
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "tax-exempt"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Tax Exempt: "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "select",
    name: "tax_exempt",
    id: "tax_exempt",
    onChange: handleTaxExemptChange,
    value: tax_exempt
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "None")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "exempt"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Exempt")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "reverse"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Reverse"))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "card"
  }, tax_ids && tax_ids.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colSpan: 5
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    className: "title"
  }, "company tax id", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "s")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Type"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "ID"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, "Verified"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colSpan: 2
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, tax_ids.map(tax_id => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: tax_id.id
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, tax_id.type.replace(/_/g, ' ').toUpperCase()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, tax_id.value), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "status"
  }, tax_id.verification.status), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "add-button",
    onClick: e => handleAddCompanyTaxID(e)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "add"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "delete-button",
    onClick: e => handleDeleteTaxID(e, tax_id.id)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "delete"))))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "add-button",
    onClick: e => handleAddCompanyTaxID(e)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "add company tax id")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colSpan: 2
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "add company tax id")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: ""
  }, "Select Country:")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "select",
    name: "tax_id_country",
    id: "tax_id_country",
    onChange: e => handleTaxIDType(e, JSON.parse(e.target.value))
  }, taxIDInfo && taxIDInfo.length > 0 && taxIDInfo.map(country => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: country.country,
    value: JSON.stringify(country)
  }, country.country))))), tax_id_type && taxInfo && Object.keys(taxInfo).length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "tax_id"
  }, taxInfo.description)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: taxInfo.description,
    id: `tax_id`,
    placeholder: `${taxInfo.example}`,
    onChange: e => handleTaxID(e, e.target.value)
  }))) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, tax_id_type && tax_id ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "add-button",
    onClick: e => handleAddTaxID(e)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "add")) : ''), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "cancel-button",
    onClick: e => handleCancelTaxID(e)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "cancel")))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: message,
    messageType: messageType
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "action"
  }, stripe_customer_id === '' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleSave
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "save")) : '', stripe_customer_id ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleUpdate
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "update")) : '', stripe_customer_id ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleSelections
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "selections")) : '')));
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
//# sourceMappingURL=src_views_ClientStart_jsx.js.map