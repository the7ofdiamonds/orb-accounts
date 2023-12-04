import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  getClient,
  addClient,
  updateClient,
  updatePhone,
  updateName,
  updateAddress,
  updateAddress2,
  updateCity,
  updateState,
  updateZipcode,
} from '../controllers/accountsClientSlice.js';

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
    user_email,
    clientLoading,
    stripe_customer_id,
    name,
    address_line_1,
    address_line_2,
    city,
    state,
    zipcode,
    phone,
  } = useSelector((state) => state.accountsClient);

  const handleNameChange = (event) => {
    dispatch(updateName(event.target.value));
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

  const [isFomCompleted, setIsFormCompleted] = useState(false);

  useEffect(() => {
    if (user_email) {
      dispatch(getClient(user_email)).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [user_email, dispatch]);

  useEffect(() => {
    if (address_line_1 && city && state && zipcode) {
      setIsFormCompleted(true);
    }
  }, [name, address_line_1, city, state, zipcode]);

  const handleClick = async () => {
    if (name === '') {
      setMessage('Please provide a first name.');
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
      dispatch(addClient()).then((response) => {
        if (response.error === undefined) {
          window.location.href = '/client/selections';
        } else {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    } else if (stripe_customer_id) {
      dispatch(updateClient()).then((response) => {
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
        <h2 className="title">CLIENT DETAILS</h2>

        <div className="client-details card" id="client-details">
          <form>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <input
                      className="input"
                      name="name"
                      id="name"
                      placeholder="Name"
                      onChange={handleNameChange}
                      value={name}
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
              </tbody>
              <tfoot></tfoot>
            </table>
          </form>
        </div>

        <StatusBar message={message} messageType={messageType} />

        <button id="selections_button" onClick={handleClick}>
          <h3 className="title">selections</h3>
        </button>
      </section>
    </>
  );
}

export default ClientComponent;
