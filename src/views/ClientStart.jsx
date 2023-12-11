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
  addTaxID,
  deleteTaxID,
  splitName,
  splitShippingName,
  updateTaxIDType,
  updateTaxID,
} from '../controllers/accountsUserSlice.js';

import LoadingComponent from '../loading/LoadingComponent.jsx';
import ErrorComponent from '../error/ErrorComponent.jsx';
import StatusBar from './components/StatusBar.jsx';

import countries from '../utils/Country.js';

function ClientComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [messageType, setMessageType] = useState('info');
  const [message, setMessage] = useState(
    'To receive a quote, please fill out the form above with the required information.'
  );
  const [isFomCompleted, setIsFormCompleted] = useState(false);
  const [taxInfo, setTaxInfo] = useState('');

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
    tax_id,
  } = useSelector((state) => state.accountsUser);

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

  const handleAddCompanyTaxID = (e) => {
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
    const confirmDeletion = window.confirm(
      'Are you sure you want to delete this Tax ID?'
    );

    if (confirmDeletion) {
      dispatch(deleteTaxID(taxID)).then((response) => {
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
    dispatch(updateTaxIDType(selectedCountry.enum));
  };

  const handleTaxID = (e, tax_id) => {
    e.preventDefault();
    dispatch(updateTaxID(tax_id));
  };

  const handleAddTaxID = (e) => {
    e.preventDefault();
    const confirm = window.confirm('Are you sure you want to add this Tax ID?');

    if (confirm && tax_id_type && tax_id) {
      dispatch(addTaxID({ tax_id_type: tax_id_type, tax_id: tax_id })).then(
        (response) => {
          if (response.error !== undefined) {
            console.error(response.error.message);
            setMessageType('error');
            setMessage(response.error.message);
          } else {
            window.location.reload();
          }
        }
      );
    }
  };

  const handleCancelTaxID = (e) => {
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
    } else if (
      (isFomCompleted && stripe_customer_id === '') ||
      stripe_customer_id === undefined
    ) {
      dispatch(addUser()).then((response) => {
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
      dispatch(updateUser()).then((response) => {
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
                <th colSpan={3}>
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
                  <th colSpan={3}>
                    <h5 className="title">billing address</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2}>
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
                  <td colSpan={2}>
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
                  <th colSpan={3}>
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
                  <td colSpan={2}>
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
                  <td colSpan={2}>
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
                <th colSpan={3}>
                  <h5 className="title">company</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>
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
            {tax_ids && tax_ids.length > 0 ? (
              <>
                <thead>
                  <tr>
                    <th colSpan={5}>
                      <h5 className="title">
                        company tax id<span>s</span>
                      </h5>
                    </th>
                  </tr>
                  <tr>
                    <th>Type</th>
                    <th>ID</th>
                    <th>Verified</th>
                    <th colSpan={2}></th>
                  </tr>
                </thead>
                <tbody>
                  {tax_ids.map((tax_id) => (
                    <tr key={tax_id.id}>
                      <td>{tax_id.type.replace(/_/g, ' ').toUpperCase()}</td>
                      <td>{tax_id.value}</td>
                      <td className="status">{tax_id.verification.status}</td>
                      <td>
                        <button
                          className="add-button"
                          onClick={(e) => handleAddCompanyTaxID(e)}>
                          <h4>add</h4>
                        </button>
                      </td>
                      <td>
                        <button
                          className="delete-button"
                          onClick={(e) => handleDeleteTaxID(e, tax_id.id)}>
                          <h4>delete</h4>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            ) : (
              <button
                className="add-button"
                onClick={(e) => handleAddCompanyTaxID(e)}>
                <h3>add company tax id</h3>
              </button>
            )}
            <tfoot></tfoot>
          </table>

          <div className="modal">
            <table className="card">
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h5>add company tax id</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="">Select Country:</label>
                  </td>
                  <td>
                    <select
                      className="select"
                      name="country"
                      id="country"
                      onChange={(e) =>
                        handleTaxIDType(e, JSON.parse(e.target.value))
                      }>
                      {countries &&
                        countries.length > 0 &&
                        countries.map((country) => (
                          <option
                            key={country.country}
                            value={JSON.stringify(country)}>
                            {country.country}
                          </option>
                        ))}
                    </select>
                  </td>
                </tr>
                {tax_id_type && taxInfo && Object.keys(taxInfo).length > 0 ? (
                  <tr>
                    <td>
                      <label htmlFor="tax_id">{taxInfo.description}</label>
                    </td>
                    <td>
                      <input
                        className="input"
                        name={taxInfo.description}
                        id={`tax_id`}
                        placeholder={`${taxInfo.example}`}
                        onChange={(e) => handleTaxID(e, e.target.value)}
                      />
                    </td>
                  </tr>
                ) : (
                  ''
                )}
                <tr>
                  <td>
                    {tax_id_type && tax_id ? (
                      <button
                        className="add-button"
                        onClick={(e) => handleAddTaxID(e)}>
                        <h4>add</h4>
                      </button>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    <button
                      className="cancel-button"
                      onClick={(e) => handleCancelTaxID(e)}>
                      <h4>cancel</h4>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>

        <StatusBar message={message} messageType={messageType} />

        <div className="action">
          {stripe_customer_id === '' ? (
            <button onClick={handleSave}>
              <h3>save</h3>
            </button>
          ) : (
            ''
          )}

          {stripe_customer_id ? (
            <button onClick={handleUpdate}>
              <h3>update</h3>
            </button>
          ) : (
            ''
          )}

          {stripe_customer_id ? (
            <button onClick={handleSelections}>
              <h3>selections</h3>
            </button>
          ) : (
            ''
          )}
        </div>
      </section>
    </>
  );
}

export default ClientComponent;
