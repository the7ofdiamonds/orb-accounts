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

/***/ "./src/utils/Country.js":
/*!******************************!*\
  !*** ./src/utils/Country.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countries = [{
  country: 'Andorra',
  enum: 'ad_nrt',
  description: 'Andorran NRT Number',
  example: 'A-123456-Z'
}, {
  country: 'Argentina',
  enum: 'ar_cuit',
  description: 'Argentinian Tax ID Number',
  example: '12-3456789-01'
}, {
  country: 'Australia - Business',
  enum: 'au_abn',
  description: 'Australian Business Number (AU ABN)',
  example: '12345678912'
}, {
  country: 'Australia - Taxation',
  enum: 'au_arn',
  description: 'Australian Taxation Office Reference Number',
  example: '123456789123'
}, {
  country: 'Austria',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'ATU12345678'
}, {
  country: 'Belgium',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'BE0123456789'
}, {
  country: 'Bolivia',
  enum: 'bo_tin',
  description: 'Bolivian Tax ID',
  example: '123456789'
}, {
  country: 'Brazil - CNPJ',
  enum: 'br_cnpj',
  description: 'Brazilian CNPJ Number',
  example: '01.234.456/5432-10'
}, {
  country: 'Brazil - CPF',
  enum: 'br_cpf',
  description: 'Brazilian CPF Number',
  example: '123.456.789-87'
}, {
  country: 'Bulgaria - UIC',
  enum: 'bg_uic',
  description: 'Bulgaria Unified Identification Code',
  example: '123456789'
}, {
  country: 'Bulgaria',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'BG0123456789'
}, {
  country: 'Canada - BN',
  enum: 'ca_bn',
  description: 'Canadian BN',
  example: '123456789'
}, {
  country: 'Canada - GST/HST',
  enum: 'ca_gst_hst',
  description: 'Canadian GST/HST Number',
  example: '123456789RT0002'
}, {
  country: 'Canada (British Columbia)',
  enum: 'ca_pst_bc',
  description: 'Canadian PST Number',
  example: 'PST-1234-5678'
}, {
  country: 'Canada (Manitoba)',
  enum: 'ca_pst_mb',
  description: 'Canadian PST Number',
  example: '123456-7'
}, {
  country: 'Canada (Saskatchewan)',
  enum: 'ca_pst_sk',
  description: 'Canadian PST Number',
  example: '1234567'
}, {
  country: 'Canada (Québec)',
  enum: 'ca_qst',
  description: 'Canadian QST Number',
  example: '1234567890TQ1234'
}, {
  country: 'Chile',
  enum: 'cl_tin',
  description: 'Chilean TIN',
  example: '12.345.678-K'
}, {
  country: 'China',
  enum: 'cn_tin',
  description: 'Chinese Tax ID',
  example: '123456789012345678'
}, {
  country: 'Colombia',
  enum: 'co_nit',
  description: 'Colombian NIT Number',
  example: '123.456.789-0'
}, {
  country: 'Costa Rica',
  enum: 'cr_tin',
  description: 'Costa Rican Tax ID',
  example: '1-234-567890'
}, {
  country: 'Croatia',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'HR12345678912'
}, {
  country: 'Cyprus',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'CY12345678Z'
}, {
  country: 'Czech Republic',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'CZ1234567890'
}, {
  country: 'Denmark',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'DK12345678'
}, {
  country: 'Dominican Republic',
  enum: 'do_rcn',
  description: 'Dominican RCN Number',
  example: '123-4567890-1'
}, {
  country: 'Ecuador',
  enum: 'ec_ruc',
  description: 'Ecuadorian RUC Number',
  example: '1234567890001'
}, {
  country: 'Egypt',
  enum: 'eg_tin',
  description: 'Egyptian Tax Identification Number',
  example: '123456789'
}, {
  country: 'El Salvador',
  enum: 'sv_nit',
  description: 'El Salvadorian NIT Number',
  example: '1234-567890-123-4'
}, {
  country: 'Estonia',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'EE123456789'
}, {
  country: 'Europe',
  enum: 'eu_oss_vat',
  description: 'European One Stop Shop VAT Number for non-Union scheme',
  example: 'EU123456789'
}, {
  country: 'Finland',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'FI12345678'
}, {
  country: 'France',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'FRAB123456789'
}, {
  country: 'Georgia',
  enum: 'ge_vat',
  description: 'Georgian VAT',
  example: '123456789'
}, {
  country: 'Germany',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'DE123456789'
}, {
  country: 'Greece',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'EL123456789'
}, {
  country: 'Hong Kong',
  enum: 'hk_br',
  description: 'Hong Kong BR Number',
  example: '12345678'
}, {
  country: 'Hungary',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'HU12345678'
}, {
  country: 'Hungary (adószám)',
  enum: 'hu_tin',
  description: 'Hungary Tax Number',
  example: '12345678-1-23'
}, {
  country: 'Iceland',
  enum: 'is_vat',
  description: 'Icelandic VAT',
  example: '123456'
}, {
  country: 'India',
  enum: 'in_gst',
  description: 'Indian GST Number',
  example: '12ABCDE3456FGZH'
}, {
  country: 'Indonesia',
  enum: 'id_npwp',
  description: 'Indonesian NPWP Number',
  example: '12.345.678.9-012.345'
}, {
  country: 'Ireland',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'IE1234567AB'
}, {
  country: 'Ireland (Northern)',
  enum: 'eu_vat',
  description: 'Northern Ireland VAT Number',
  example: 'XI123456789'
}, {
  country: 'Israel',
  enum: 'il_vat',
  description: 'Israel VAT',
  example: '000012345'
}, {
  country: 'Italy',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'IT12345678912'
}, {
  country: 'Japan (Hōjin Bangō)',
  enum: 'jp_cn',
  description: 'Japanese Corporate Number',
  example: '1234567891234'
}, {
  country: 'Japan (Tōroku Kokugai Jigyōsha)',
  enum: 'jp_rn',
  description: 'Japanese Registered Foreign Businesses\' Registration Number',
  example: '12345'
}, {
  country: 'Japan (Tōroku Bangō)',
  enum: 'jp_trn',
  description: 'Japanese Tax Registration Number',
  example: 'T1234567891234'
}, {
  country: 'Kenya',
  enum: 'ke_pin',
  description: 'Kenya Revenue Authority Personal Identification Number',
  example: 'P000111111A'
}, {
  country: 'Latvia',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'LV12345678912'
}, {
  country: 'Liechtenstein',
  enum: 'li_uid',
  description: 'Liechtensteinian UID Number',
  example: 'CHE123456789'
}, {
  country: 'Lithuania',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'LT123456789123'
}, {
  country: 'Luxembourg',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'LU12345678'
}, {
  country: 'Malaysia - FRP',
  enum: 'my_frp',
  description: 'Malaysian FRP Number',
  example: '12345678'
}, {
  country: 'Malaysia - ITN',
  enum: 'my_itn',
  description: 'Malaysian ITN',
  example: 'C 1234567890'
}, {
  country: 'Malaysia - SST',
  enum: 'my_sst',
  description: 'Malaysian SST Number',
  example: 'A12-3456-78912345'
}, {
  country: 'Malta',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'MT12345678'
}, {
  country: 'Mexico',
  enum: 'mx_rfc',
  description: 'Mexican RFC Number',
  example: 'ABC010203AB9'
}, {
  country: 'Netherlands',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'NL123456789B'
}, {
  country: 'New Zealand',
  enum: 'nz_gst',
  description: 'New Zealand GST Number',
  example: '123456789'
}, {
  country: 'Norway',
  enum: 'no_vat',
  description: 'Norwegian VAT Number',
  example: '123456789MVA'
}, {
  country: 'Peru',
  enum: 'pe_ruc',
  description: 'Peruvian RUC Number',
  example: '12345678901'
}, {
  country: 'Philippines',
  enum: 'ph_tin',
  description: 'Philippines Tax Identification Number',
  example: '123456789012'
}, {
  country: 'Poland',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'PL1234567890'
}, {
  country: 'Portugal',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'PT123456789'
}, {
  country: 'Romania',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'RO1234567891'
}, {
  country: 'Romania',
  enum: 'ro_tin',
  description: 'Romanian Tax ID Number',
  example: '1234567890123'
}, {
  country: 'Russia - INN',
  enum: 'ru_inn',
  description: 'Russian INN',
  example: '1234567891'
}, {
  country: 'Russia - KPP',
  enum: 'ru_kpp',
  description: 'Russian KPP',
  example: '123456789'
}, {
  country: 'Saudi Arabia',
  enum: 'sa_vat',
  description: 'Saudi Arabia VAT',
  example: '123456789012345'
}, {
  country: 'Serbia',
  enum: 'rs_pib',
  description: 'Serbian PIB Number',
  example: '123456789'
}, {
  country: 'Singapore - GST',
  enum: 'sg_gst',
  description: 'Singaporean GST',
  example: 'M12345678X'
}, {
  country: 'Singapore - UEN',
  enum: 'sg_uen',
  description: 'Singaporean UEN',
  example: '123456789F'
}, {
  country: 'Slovakia',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'SK1234567891'
}, {
  country: 'Slovenia',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'SI12345678'
}, {
  country: 'Slovenia (davčna številka)',
  enum: 'si_tin',
  description: 'Slovenia Tax Number',
  example: '12345678'
}, {
  country: 'South Africa',
  enum: 'za_vat',
  description: 'South African VAT Number',
  example: '4123456789'
}, {
  country: 'South Korea',
  enum: 'kr_brn',
  description: 'Korean BRN',
  example: '123-45-67890'
}, {
  country: 'Spain - CIF',
  enum: 'es_cif',
  description: 'Spanish NIF Number (previously Spanish CIF Number)',
  example: 'A12345678'
}, {
  country: 'Spain',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'ESA1234567Z'
}, {
  country: 'Sweden',
  enum: 'eu_vat',
  description: 'European VAT Number',
  example: 'SE123456789123'
}, {
  country: 'Switzerland',
  enum: 'ch_vat',
  description: 'Switzerland VAT Number',
  example: 'CHE-123.456.789 MWST'
}, {
  country: 'Taiwan',
  enum: 'tw_vat',
  description: 'Taiwanese VAT',
  example: '12345678'
}, {
  country: 'Thailand',
  enum: 'th_vat',
  description: 'Thai VAT',
  example: '1234567891234'
}, {
  country: 'Turkey',
  enum: 'tr_tin',
  description: 'Turkish Tax Identification Number',
  example: '0123456789'
}, {
  country: 'Ukraine',
  enum: 'ua_vat',
  description: 'Ukrainian VAT',
  example: '123456789'
}, {
  country: 'United Arab Emirates',
  enum: 'ae_trn',
  description: 'United Arab Emirates TRN',
  example: '123456789012345'
}, {
  country: 'United Kingdom',
  enum: 'gb_vat',
  description: 'United Kingdom VAT Number',
  example: 'GB123456789'
}, {
  country: 'United States',
  enum: 'us_ein',
  description: 'Employer Identification Number',
  example: '12-3456789'
}, {
  country: 'Uruguay',
  enum: 'uy_ruc',
  description: 'Uruguayan RUC Number',
  example: '123456789012'
}, {
  country: 'Venezuela',
  enum: 've_rif',
  description: 'Venezuelan RIF Number',
  example: 'A-12345678-9'
}, {
  country: 'Vietnam',
  enum: 'vn_tin',
  description: 'Vietnamese Tax ID Number',
  example: '1234567890'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countries);

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
/* harmony import */ var _controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/accountsUserSlice.js */ "./src/controllers/accountsUserSlice.js");
/* harmony import */ var _loading_LoadingComponent_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading/LoadingComponent.jsx */ "./src/loading/LoadingComponent.jsx");
/* harmony import */ var _error_ErrorComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/ErrorComponent.jsx */ "./src/error/ErrorComponent.jsx");
/* harmony import */ var _components_StatusBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/StatusBar.jsx */ "./src/views/components/StatusBar.jsx");
/* harmony import */ var _utils_Country_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Country.js */ "./src/utils/Country.js");









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
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.accountsUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user_email) {
      dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.getUser)());
    }
  }, [user_email, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (first_name && last_name && address_line_1 && city && state && zipcode) {
      setIsFormCompleted(true);
    }
  }, [first_name, last_name, address_line_1, city, state, zipcode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (name) {
      dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.splitName)(name));
    }
  }, [name, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shipping_name) {
      dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.splitShippingName)(shipping_name));
    }
  }, [shipping_name, dispatch]);
  const handleFirstNameChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateFirstName)(event.target.value));
  };
  const handleLastNameChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateLastName)(event.target.value));
  };
  const handlePhoneChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updatePhone)(event.target.value));
  };
  const handleAddressChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateAddress)(event.target.value));
  };
  const handleAddressChange2 = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateAddress2)(event.target.value));
  };
  const handleCityChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateCity)(event.target.value));
  };
  const handleStateChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateState)(event.target.value));
  };
  const handleZipcodeChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateZipcode)(event.target.value));
  };
  const handleCountryChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateCountry)(event.target.value));
  };
  const handleShippingFirstNameChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingFirstName)(event.target.value));
  };
  const handleShippingLastNameChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingLastName)(event.target.value));
  };
  const handleShippingPhoneChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingPhone)(event.target.value));
  };
  const handleShippingAddressChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingAddress)(event.target.value));
  };
  const handleShippingAddressChange2 = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingAddress2)(event.target.value));
  };
  const handleShippingCityChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingCity)(event.target.value));
  };
  const handleShippingStateChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingState)(event.target.value));
  };
  const handleShippingZipcodeChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingZipcode)(event.target.value));
  };
  const handleShippingCountryChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateShippingCountry)(event.target.value));
  };
  const handleCompanyNameChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateCompanyName)(event.target.value));
  };
  const handleTaxExemptChange = event => {
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateTaxExempt)(event.target.value));
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
      dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.deleteTaxID)(taxID)).then(response => {
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
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateTaxIDType)(selectedCountry.enum));
  };
  const handleTaxID = (e, tax_id) => {
    e.preventDefault();
    dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateTaxID)(tax_id));
  };
  const handleAddTaxID = e => {
    e.preventDefault();
    const confirm = window.confirm('Are you sure you want to add this Tax ID?');
    if (confirm && tax_id_type && tax_id) {
      dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.addTaxID)({
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
      dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.addUser)()).then(response => {
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
      dispatch((0,_controllers_accountsUserSlice_js__WEBPACK_IMPORTED_MODULE_2__.updateUser)()).then(response => {
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
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: 2
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "country",
    id: "country",
    placeholder: "Country",
    onChange: handleCountryChange,
    value: country
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
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
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: 2
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "input",
    name: "shipping_country",
    id: "shipping_country",
    placeholder: "Shipping Country",
    onChange: handleShippingCountryChange,
    value: shipping_country
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
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
    name: "country",
    id: "country",
    onChange: e => handleTaxIDType(e, JSON.parse(e.target.value))
  }, _utils_Country_js__WEBPACK_IMPORTED_MODULE_6__["default"] && _utils_Country_js__WEBPACK_IMPORTED_MODULE_6__["default"].length > 0 && _utils_Country_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(country => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
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