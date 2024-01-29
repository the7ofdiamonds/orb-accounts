import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchServices } from '../controllers/accountsServicesSlice.js';
import { getUser } from '../controllers/accountsUsersSlice.js';
import {
  addSelections,
  calculateSelections,
  addOnboardingLink,
  createQuote,
  updateQuote,
  finalizeQuote,
  getClientQuotes,
  getQuote,
} from '../controllers/accountsQuoteSlice.js';

import LoadingComponent from '../loading/LoadingComponent.jsx';
import ErrorComponent from '../error/ErrorComponent.jsx';
import StatusBar from './components/StatusBar.jsx';

function SelectionsComponent() {
  const dispatch = useDispatch();

  const [messageType, setMessageType] = useState('info');
  const [message, setMessage] = useState(
    'Check the boxes next to the services you would like performed.'
  );
  const [checkedItems, setCheckedItems] = useState([]);

  const { servicesLoading, servicesError, services } = useSelector(
    (state) => state.accountsServices
  );
  const { user_email, stripe_customer_id } = useSelector(
    (state) => state.accountsUsers
  );
  const {
    quoteLoading,
    quoteError,
    stripe_quote_id,
    quotes,
    quote_id,
    quote_status,
    selections,
    total,
  } = useSelector((state) => state.accountsQuote);

  useEffect(() => {
    if (user_email) {
      dispatch(getUser()).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [user_email, dispatch]);

  useEffect(() => {
    if (stripe_customer_id) {
      dispatch(getClientQuotes());
    }
  }, [stripe_customer_id, dispatch]);

  useEffect(() => {
    if (Array.isArray(quotes) && quotes.length > 0) {
      const filteredQuotes = [];

      quotes.forEach((quote) => {
        const timestampNow = Math.floor(Date.now() / 1000);
        const timestamp = parseInt(quote.expires_at);
        const createdAt = new Date(quote.created_at).getTime();
        const status = quote.status;

        if (timestampNow < timestamp) {
          if (
            status === 'draft' ||
            status === 'open' ||
            status === 'accepted'
          ) {
            filteredQuotes.push(createdAt);
          }
        }
      });

      if (filteredQuotes.length > 0) {
        const earliestDate = Math.min(...filteredQuotes);

        quotes.forEach((quote) => {
          if (new Date(quote.created_at).getTime() === earliestDate) {
            dispatch(getQuote(quote.stripe_quote_id));
          }
        });
      }
    }
  }, [quotes, dispatch]);

  useEffect(() => {
    if (stripe_customer_id) {
      dispatch(fetchServices());
    }
  }, [stripe_customer_id, dispatch]);

  useEffect(() => {
    dispatch(addSelections(checkedItems));
  }, [dispatch, checkedItems]);

  useEffect(() => {
    dispatch(calculateSelections(services.price));
  }, [dispatch, services.price, checkedItems]);

  useEffect(() => {
    dispatch(addOnboardingLink());
  }, [dispatch, checkedItems]);

  useEffect(() => {
    if (stripe_quote_id) {
      dispatch(getQuote()).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [stripe_quote_id, dispatch]);

  const handleCheckboxChange = (
    event,
    id,
    price_id,
    description,
    price,
    onboarding_link
  ) => {
    const isChecked = event.target.checked;

    setCheckedItems((prevItems) => {
      if (isChecked) {
        const newItem = { id, price_id, description, price, onboarding_link };
        return [...prevItems, newItem];
      } else {
        return prevItems.filter((item) => item.id !== id);
      }
    });
  };

  const handleClick = () => {
    if (quote_id && (quote_status === 'open' || quote_status === 'accepted')) {
      window.location.href = `/billing/quote/${quote_id}`;
    }

    if (quote_status === 'draft') {
      dispatch(updateQuote()).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          dispatch(finalizeQuote()).then((response) => {
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
      dispatch(createQuote()).then((response) => {
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
    return <LoadingComponent />;
  }

  if (servicesError) {
    return <ErrorComponent error={servicesError} />;
  }

  return (
    <>
      <section className="selections">
        <h2 className="title">selections</h2>

        <div className="quote-card card">
          <table>
            <thead>
              <tr>
                <th colSpan="2">
                  <h5 className="title">service</h5>
                </th>
                <th>
                  <h5 className="title">cost</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {services && services.length ? (
                <React.Fragment>
                  {services.map((service) => {
                    const {
                      id,
                      price_id,
                      description,
                      price,
                      onboarding_link,
                    } = service;

                    return (
                      <tr key={id} id="quote_option">
                        <td>
                          <input
                            className="input selection feature-selection"
                            type="checkbox"
                            name="quote[checkbox][]"
                            checked={checkedItems.some(
                              (item) => item.id === id
                            )}
                            onChange={(event) =>
                              handleCheckboxChange(
                                event,
                                id,
                                price_id,
                                description,
                                price,
                                onboarding_link
                              )
                            }
                          />
                        </td>
                        <td className="feature-description">
                          <h5>{description}</h5>
                        </td>
                        <td
                          className="feature-cost table-number"
                          id="feature_cost">
                          <h5>
                            {new Intl.NumberFormat('us', {
                              style: 'currency',
                              currency: 'USD',
                            }).format(price)}
                          </h5>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ) : (
                <tr>
                  <td colSpan="3">
                    <h5>No services to show yet</h5>
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="2">
                  <h5 className="title">TOTAL</h5>
                </th>
                <th>
                  <h5 className="subtotal">
                    {new Intl.NumberFormat('us', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(total)}
                  </h5>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        <StatusBar message={message} messageType={messageType} />

        {Array.isArray(selections) && selections.length > 0 ? (
          <button onClick={handleClick}>
            <h3>QUOTE</h3>
          </button>
        ) : (
          ''
        )}
      </section>
    </>
  );
}

export default SelectionsComponent;
