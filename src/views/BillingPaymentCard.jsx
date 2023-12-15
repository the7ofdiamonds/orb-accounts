import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';

import PaymentNavigationComponent from './components/PaymentNavigation';

import { getUser } from '../controllers/accountsUsersSlice.js';
import { getInvoiceByID } from '../controllers/accountsInvoiceSlice';
import { saveReceipt } from '../controllers/accountsReceiptSlice';
import {
  getStripeInvoice,
  getPaymentIntent,
  getPaymentMethod,
  updatePaymentMethod,
} from '../controllers/accountsStripeSlice.js';
import { getCompanyLogo } from '../controllers/accountsImagesSlice.js';

import { PaymentMethodGenerator } from '../utils/PaymentMethod';
import { FormatCreditNumber } from '../utils/FormatCreditNumber';
import { FormatCurrency } from '../utils/FormatCurrency';

import LoadingComponent from '../loading/LoadingComponent';
import ErrorComponent from '../error/ErrorComponent.jsx';
import StatusBar from './components/StatusBar';

const CardPaymentComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const elements = useElements();

  const [messageType, setMessageType] = useState('info');
  const [message, setMessage] = useState(
    'Please enter your card number, expiration date, and the code on the back.'
  );

  const { user_email, first_name, last_name, stripe_customer_id } = useSelector(
    (state) => state.accountsUsers
  );
  const { stripe_invoice_id } = useSelector((state) => state.accountsInvoice);
  const {
    stripeLoading,
    stripeError,
    payment_intent_id,
    status,
    name,
    account_country,
    currency,
    amount_due,
    amount_paid,
    amount_remaining,
    onboarding_links,
    client_secret,
    payment_method_id,
    paymentMethod,
  } = useSelector((state) => state.accountsStripe);
  const { receipt_id } = useSelector((state) => state.accountsReceipt);
  const { logo_url } = useSelector((state) => state.accountsImages);

  useEffect(() => {
    if (user_email) {
      dispatch(getUser(user_email)).then((response) => {
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

  useEffect(() => {
    if (stripe_invoice_id) {
      dispatch(getStripeInvoice(stripe_invoice_id));
    }
  }, [stripe_invoice_id, dispatch]);

  useEffect(() => {
    if (payment_intent_id) {
      dispatch(getPaymentIntent(payment_intent_id));
    }
  }, [payment_intent_id, dispatch]);

  useEffect(() => {
    if (payment_method_id) {
      dispatch(getPaymentMethod(payment_method_id));
    }
  }, [payment_method_id, dispatch]);

  useEffect(() => {
    if (payment_method_id) {
      dispatch(updatePaymentMethod(PaymentMethodGenerator(payment_method_id)));
    }
  }, [payment_method_id, dispatch]);

  useEffect(() => {
    if (status === 'paid' && paymentMethod) {
      dispatch(saveReceipt()).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [status, paymentMethod, dispatch]);

  useEffect(async () => {
    dispatch(getCompanyLogo());
  }, []);

  const handlePay = () => {
    if (client_secret) {
    }
  };

  const handleReceipt = () => {
    if (receipt_id) {
      window.location.href = `/billing/receipt/${receipt_id}`;
    }
  };

  const handleOnboarding = () => {};

  return (
    <>
      <section className="payment-card">
        <PaymentNavigationComponent />

        <form className="credit-card-form card">
          <div className="card-front">
            <div className="card-logo">
              <img src={logo_url} alt="" />
            </div>

            <div className="card-chip">
              <img
                src="/wp-content/plugins/orb-accounts/Assets/Images/pngegg.png"
                alt=""
              />
            </div>

            <div className="card-holder-name">
              <h5>{name}</h5>
            </div>
          </div>

          <div className="card-center"></div>
          
          <div className="card-back">
            <div className="card-magnetic-strip"></div>
            
            <div className="signature-line">
              <div className="card-number-box">
                <CardNumberElement placeholder="1234 5678 9012 3456" />
              </div>

              <div className="card-expiration-date">
                <CardExpiryElement placeholder="MM/YY" />
              </div>

              <div className="card-cvc">
                <CardCvcElement placeholder="123" />
              </div>
            </div>
          </div>
        </form>

        <StatusBar message={message} messageType={messageType} />

        <div className="amount">
          {amount_paid ? (
            <>
              <h3>
                Amount Paid:
                {FormatCurrency(amount_paid, account_country, currency)}
              </h3>
              <h3>
                Balance:{' '}
                {FormatCurrency(amount_remaining, account_country, currency)}
              </h3>
            </>
          ) : amount_due ? (
            <h3>
              Amount: {FormatCurrency(amount_due, account_country, currency)}
            </h3>
          ) : (
            ''
          )}
        </div>

        <div className="action">
          {amount_due && client_secret ? (
            <button type="submit" onClick={handlePay}>
              <h3>pay</h3>
            </button>
          ) : (
            ''
          )}

          {receipt_id ? (
            <button type="submit" onClick={handleReceipt}>
              <h3>receipt</h3>
            </button>
          ) : (
            ''
          )}

          {receipt_id && onboarding_links ? (
            <button type="submit" onClick={handleOnboarding}>
              <h3>onboarding</h3>
            </button>
          ) : (
            ''
          )}
        </div>
      </section>
    </>
  );
};

export default CardPaymentComponent;
