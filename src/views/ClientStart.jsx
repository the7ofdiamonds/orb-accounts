import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  getUser,
  addUser,
  updateUser,
  updateFirstName,
  updateLastName,
  updatePhone,
  updateAddress,
  updateAddress2,
  updateCity,
  updateState,
  updateZipcode,
  updateCountry,
  updateShippingFirstName,
  updateShippingLastName,
  updateShippingPhone,
  updateShippingAddress,
  updateShippingAddress2,
  updateShippingCity,
  updateShippingState,
  updateShippingZipcode,
  updateShippingCountry,
  updateCompanyName,
  updateTaxExempt,
  updateTaxIDType,
  updateTaxID,
  splitName,
  splitShippingName,
} from '../controllers/accountsUserSlice.js';

import LoadingComponent from '../loading/LoadingComponent.jsx';
import ErrorComponent from '../error/ErrorComponent.jsx';
import StatusBar from './components/StatusBar.jsx';

function ClientComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [messageType, setMessageType] = useState('info');
  const [message, setMessage] = useState(
    'To receive a quote, please fill out the form above with the required information.'
  );

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
    tax_id_type,
    tax_id,
  } = useSelector((state) => state.accountsUser);

  const handleFirstNameChange = (event) => {
    dispatch(updateFirstName(event.target.value));
  };

  const handleLastNameChange = (event) => {
    dispatch(updateLastName(event.target.value));
  };

  const handlePhoneChange = (event) => {
    dispatch(updatePhone(event.target.value));
  };

  const handleAddressChange = (event) => {
    dispatch(updateAddress(event.target.value));
  };

  const handleAddressChange2 = (event) => {
    dispatch(updateAddress2(event.target.value));
  };

  const handleCityChange = (event) => {
    dispatch(updateCity(event.target.value));
  };

  const handleStateChange = (event) => {
    dispatch(updateState(event.target.value));
  };

  const handleZipcodeChange = (event) => {
    dispatch(updateZipcode(event.target.value));
  };

  const handleCountryChange = (event) => {
    dispatch(updateCountry(event.target.value));
  };

  const handleShippingFirstNameChange = (event) => {
    dispatch(updateShippingFirstName(event.target.value));
  };

  const handleShippingLastNameChange = (event) => {
    dispatch(updateShippingLastName(event.target.value));
  };

  const handleShippingPhoneChange = (event) => {
    dispatch(updateShippingPhone(event.target.value));
  };

  const handleShippingAddressChange = (event) => {
    dispatch(updateShippingAddress(event.target.value));
  };

  const handleShippingAddressChange2 = (event) => {
    dispatch(updateShippingAddress2(event.target.value));
  };

  const handleShippingCityChange = (event) => {
    dispatch(updateShippingCity(event.target.value));
  };

  const handleShippingStateChange = (event) => {
    dispatch(updateShippingState(event.target.value));
  };

  const handleShippingZipcodeChange = (event) => {
    dispatch(updateShippingZipcode(event.target.value));
  };

  const handleShippingCountryChange = (event) => {
    dispatch(updateShippingCountry(event.target.value));
  };

  const handleCompanyNameChange = (event) => {
    dispatch(updateCompanyName(event.target.value));
  };

  const handleTaxExemptChange = (event) => {
    dispatch(updateTaxExempt(event.target.value));
  };

  const handleTaxIDTypeChange = (event) => {
    dispatch(updateTaxIDType(event.target.value));
  };

  const handleTaxIDChange = (event) => {
    dispatch(updateTaxID(event.target.value));
  };

  const [isFomCompleted, setIsFormCompleted] = useState(false);

  useEffect(() => {
    if (user_email) {
      dispatch(getUser());
    }
  }, [user_email, dispatch]);

  useEffect(() => {
    if (first_name && last_name && address_line_1 && city && state && zipcode) {
      setIsFormCompleted(true);
    }
  }, [first_name, last_name, address_line_1, city, state, zipcode]);

  useEffect(() => {
    if (name) {
      dispatch(splitName(name));
    }
  }, [name, dispatch]);

  useEffect(() => {
    if (shipping_name) {
      dispatch(splitShippingName(shipping_name));
    }
  }, [shipping_name, dispatch]);

  const handleClick = async () => {
    if (stripe_customer_id) {
      dispatch(updateUser()).then((response) => {
        if (response.error === undefined) {
          window.location.href = '/client/selections';
        } else {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }

    if (name === '') {
      setMessage('Please provide a name.');
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
    } else if (
      (isFomCompleted && stripe_customer_id === '') ||
      stripe_customer_id === undefined
    ) {
      dispatch(addUser()).then((response) => {
        if (response.error === undefined) {
          window.location.href = '/client/selections';
        } else {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  };

  if (clientLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <section className="start">
        <h2 className="title">user details</h2>
        <form>
          <table className="card">
            <thead>
              <tr>
                <th>
                  <h5 className="title">contact</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    className="input"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    onChange={handleFirstNameChange}
                    value={first_name}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    onChange={handleLastNameChange}
                    value={last_name}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    onChange={handlePhoneChange}
                    value={phone}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="address">
            <table className="card">
              <thead>
                <tr>
                  <th colSpan="3">
                    <h5 className="title">address</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <input
                      className="input"
                      name="address_line_1"
                      id="bill_to_street"
                      placeholder="Street Address"
                      onChange={handleAddressChange}
                      value={address_line_1}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      name="address_line_2"
                      id="bill_to_street2"
                      placeholder="Suite #"
                      onChange={handleAddressChange2}
                      value={address_line_2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      name="city"
                      id="bill_to_city"
                      placeholder="City"
                      onChange={handleCityChange}
                      value={city}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      name="state"
                      id="bill_to_state"
                      placeholder="State"
                      onChange={handleStateChange}
                      value={state}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      name="zipcode"
                      id="bill_to_zipcode"
                      placeholder="Zipcode"
                      onChange={handleZipcodeChange}
                      value={zipcode}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input
                      className="input"
                      name="country"
                      id="country"
                      placeholder="Country"
                      onChange={handleCountryChange}
                      value={country}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="card">
              <thead>
                <tr>
                  <th colSpan="3">
                    <h5 className="title">shipping</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="input"
                      name="shipping_first_name"
                      id="shipping_first_name"
                      placeholder="First Name"
                      onChange={handleShippingFirstNameChange}
                      value={shipping_first_name}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      name="shipping_last_name"
                      id="shipping_last_name"
                      placeholder="Last Name"
                      onChange={handleShippingLastNameChange}
                      value={shipping_last_name}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      name="shipping_phone"
                      type="tel"
                      placeholder="Phone"
                      onChange={handleShippingPhoneChange}
                      value={shipping_phone}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input
                      className="input"
                      name="shipping_address_line_1"
                      id="shipping_street"
                      placeholder="Shipping Street Address"
                      onChange={handleShippingAddressChange}
                      value={shipping_address_line_1}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      name="shipping_address_line_2"
                      id="shipping_street2"
                      placeholder="Suite #"
                      onChange={handleShippingAddressChange2}
                      value={shipping_address_line_2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input"
                      name="shipping_city"
                      id="shipping_city"
                      placeholder="Shipping City"
                      onChange={handleShippingCityChange}
                      value={shipping_city}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      name="shipping_state"
                      id="shipping_state"
                      placeholder="Shipping State"
                      onChange={handleShippingStateChange}
                      value={shipping_state}
                    />
                  </td>
                  <td>
                    <input
                      className="input"
                      name="shipping_zipcode"
                      id="shipping_zipcode"
                      placeholder="Shipping Zipcode"
                      onChange={handleShippingZipcodeChange}
                      value={shipping_zipcode}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input
                      className="input"
                      name="shipping_country"
                      id="shipping_country"
                      placeholder="Shipping Country"
                      onChange={handleShippingCountryChange}
                      value={shipping_country}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <table className="card">
            <thead>
              <tr>
                <th colSpan="3">
                  <h5 className="title">company</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">
                  <input
                    className="input"
                    name="company_name"
                    id="company_name"
                    placeholder="Company Name"
                    onChange={handleCompanyNameChange}
                    value={company_name}
                  />
                </td>
                <td className="tax-exempt">
                  <label>Tax Exempt: </label>
                  <select
                    className="select"
                    name="tax_exempt"
                    id="tax_exempt"
                    onChange={handleTaxExemptChange}
                    value={tax_exempt}>
                    <option value="none">
                      <label>None</label>
                    </option>
                    <option value="exempt">
                      <label>Exempt</label>
                    </option>
                    <option value="reverse">
                      <label>Reverse</label>
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="card">
            <thead>
              <tr>
                <th colSpan="3">
                  <h5 className="title">company tax id<span>s</span></h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    className="input"
                    name="tax_id_type"
                    id="tax_id_type"
                    placeholder="Tax ID Type"
                    onChange={handleTaxIDTypeChange}
                    value={tax_id_type}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    name="tax_id"
                    id="tax_id"
                    placeholder="Tax ID"
                    onChange={handleTaxIDChange}
                    value={tax_id}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <StatusBar message={message} messageType={messageType} />

        <button id="selections_button" onClick={handleClick}>
          <h3 className="title">selections</h3>
        </button>
      </section>
    </>
  );
}

export default ClientComponent;
