import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PaymentNavigationComponent from './components/PaymentNavigation.jsx';

import { getUser } from '../controllers/accountsUsersSlice.js';
import { getInvoiceByID } from '../controllers/accountsInvoiceSlice.js';
import { getReceipt } from '../controllers/accountsReceiptSlice.js';
import {
  getStripeInvoice,
  getPaymentIntent,
} from '../controllers/accountsStripeSlice.js';

import LoadingComponent from '../loading/LoadingComponent.jsx';
import ErrorComponent from '../error/ErrorComponent.jsx';
import StatusBar from './components/StatusBar.jsx';

function PaymentComponent() {
  const { id } = useParams();

  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');

  const { user_email } = useSelector((state) => state.accountsUsers);
  const { stripe_invoice_id, status, amount_remaining } = useSelector(
    (state) => state.accountsInvoice
  );
  const { receipt_id } = useSelector((state) => state.accountsReceipt);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user_email) {
      dispatch(getUser()).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          dispatch(
            getInvoiceByID(id, response.payload.stripe_customer_id)
          ).then((response) => {
            if (response.error !== undefined) {
              console.error(response.error.message);
              setMessageType('error');
              setMessage(response.error.message);
            } else {
              dispatch(
                getStripeInvoice(response.payload.stripe_invoice_id)
              ).then((response) => {
                if (response.error !== undefined) {
                  console.error(response.error.message);
                  setMessageType('error');
                  setMessage(response.error.message);
                } else {
                  dispatch(
                    getPaymentIntent(response.payload.payment_intent_id)
                  ).then((response) => {
                    if (response.error !== undefined) {
                      console.error(response.error.message);
                      setMessageType('error');
                      setMessage(response.error.message);
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  }, [user_email, dispatch]);
  // Check to see if payment intent
  useEffect(() => {
    if (status === 'open') {
      setMessage('Choose a payment method');
    } else if (status === 'paid' && amount_remaining === 0) {
      setMessage('This invoice has been paid in full.');
    }
  }, [status, amount_remaining]);

  useEffect(() => {
    if (stripe_invoice_id) {
      dispatch(getReceipt()).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [stripe_invoice_id, dispatch]);

  const handleClick = () => {
    if (receipt_id) {
      window.location.href = `/billing/receipt/${receipt_id}`;
    }
  };

  return (
    <>
      <section className="payment">
        <h2 className="title">PAYMENT</h2>

        {status === 'open' ? <PaymentNavigationComponent /> : ''}

        <StatusBar message={message} messageType={messageType} />

        {receipt_id && status == 'paid' ? (
          <button onClick={handleClick}>
            <h3>RECEIPT</h3>
          </button>
        ) : (
          ''
        )}
      </section>
    </>
  );
}

export default PaymentComponent;
