import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../controllers/accountsUsersSlice.js';
import { getReceiptByID } from '../controllers/accountsReceiptSlice.js';
import {
  getStripeInvoice,
  getPaymentIntent,
  getPaymentMethod,
} from '../controllers/accountsStripeSlice.js';
import { getInvoice } from '../controllers/accountsInvoiceSlice.js';
import { getQuote } from '../controllers/accountsQuoteSlice.js';

import formatPhoneNumber from '../utils/PhoneNumberFormatter.js';

import LoadingComponent from '../loading/LoadingComponent.jsx';
import ErrorComponent from '../error/ErrorComponent.jsx';
import StatusBar from './components/StatusBar.jsx';

function ReceiptComponent() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [messageType, setMessageType] = useState('info');
  const [message, setMessage] = useState('');

  const {
    user_email,
    stripe_customer_id,
    address_line_1,
    address_line_2,
    city,
    state,
    zipcode,
    phone
  } = useSelector((state) => state.accountsUsers);
  const {
    receiptLoading,
    receiptError,
    stripe_invoice_id,
    payment_intent_id,
    payment_method_id,
    payment_method,
    name,
    onboarding_links
  } = useSelector((state) => state.accountsReceipt);
  const {
    subtotal,
    tax,
    amount_due,
    amount_paid,
    amount_remaining,
    payment_date,
    stripe_quote_id,
  } = useSelector((state) => state.accountsInvoice);
  const { selections } = useSelector((state) => state.accountsQuote);
  
  const timestamp = payment_date * 1000;
  const paymentDate = new Date(timestamp);
  const formattedPhone = formatPhoneNumber(phone);
  const Subtotal = subtotal / 100;
  const Tax = tax / 100;
  const amountDue = amount_due / 100;
  const amountPaid = amount_paid / 100;
  const Balance = amount_remaining / 100;

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
  }, [dispatch, user_email]);

  useEffect(() => {
    if (stripe_customer_id) {
      dispatch(getReceiptByID(id)).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          dispatch(getPaymentMethod(response.payload.payment_method_id)).then(
            (response) => {
              if (response.error !== undefined) {
                console.error(response.error.message);
                setMessageType('error');
                setMessage(response.error.message);
              }
            }
          );
        }
      });
    }
  }, [dispatch, id, stripe_customer_id]);

  useEffect(() => {
    if (stripe_invoice_id) {
      dispatch(getStripeInvoice(stripe_invoice_id)).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        } else {
          console.log(response);
        }
      });
    }
  }, [dispatch, stripe_invoice_id]);

  useEffect(() => {
    if (stripe_invoice_id) {
      dispatch(getInvoice(stripe_invoice_id));
    }
  }, [dispatch, stripe_invoice_id]);

  useEffect(() => {
    if (stripe_quote_id) {
      dispatch(getQuote(stripe_quote_id));
    }
  }, [dispatch, stripe_quote_id]);

  useEffect(() => {
    if (payment_intent_id) {
      dispatch(getPaymentIntent(payment_intent_id)).then((response) => {
        if (response.error !== undefined) {
          console.error(response.error.message);
          setMessageType('error');
          setMessage(response.error.message);
        }
      });
    }
  }, [dispatch, payment_intent_id]);

  const handleClickDashboard = () => {
    window.location = '/dashboard';
  };

  const handleClickBilling = () => {
    window.location = '/billing';
  };

  if (receiptLoading) {
    return <LoadingComponent />;
  }

  if (receiptError) {
    return <ErrorComponent error={receiptError} />;
  }

  return (
    <>
      <section className="receipt">
        <h2 className="title">RECEIPT</h2>

        <div className="receipt-card card">
          <div className="thead">
            <div className="tr receipt-number">
              <div className="th">
                <h4>RECEIPT NUMBER</h4>
              </div>
              <div className="td">
                <h5>{id}</h5>
              </div>
            </div>
            <div className="tr payment-date">
              <div className="th">
                <h4>PAYMENT DATE</h4>
              </div>
              <div className="td">
                <h5>{paymentDate.toLocaleString()}</h5>
              </div>
            </div>
            <div className="tr payment-method">
              <div className="th">
                <h4>PAYMENT TYPE</h4>
              </div>
              <div className="td">
                <h5>{payment_method}</h5>
              </div>
            </div>
            <div className="tr client-details">
              <div className="th">
                <h4>PAID BY</h4>
              </div>
              <div className="td">
                <h5>
                  {name}
                </h5>
              </div>
              <div className="tr address-line-1">
                <div className="td">
                  <h5>{address_line_1}</h5>
                </div>
                <div className="td">
                  <h5>{address_line_2}</h5>
                </div>
              </div>
              <div className="tr address-line-2">
                <div className="td">
                  <h5>{`${city},`}</h5>
                </div>
                <div className="td">
                  <h5>{state}</h5>
                </div>
                <div className="td">
                  <h5>{zipcode}</h5>
                </div>
              </div>
              <div className="tr phone">
                <div className="td">
                  <a href={`tel:${phone}`}>
                    <h5>{formattedPhone}</h5>
                  </a>
                </div>
              </div>
              <div className="tr email">
                <div className="td">
                  <h5>{user_email}</h5>
                </div>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <th>
                <h4>NO.</h4>
              </th>
              <th>
                <h4>DESCRIPTION</h4>
              </th>
              <th>
                <h4>TOTAL</h4>
              </th>
            </thead>
            <tbody>
              {selections &&
                selections.length > 0 &&
                selections.map((selection) => (
                  <tr>
                    <td>
                      <h5>{selection.id}</h5>
                    </td>
                    <td>
                      <h5>{selection.description}</h5>
                    </td>
                    <td className="selections-cost">
                      <h5>
                        {new Intl.NumberFormat('us', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(selection.cost)}
                      </h5>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="tfoot">
            <div className="tr subtotal">
              <div className="th subtotal-label">
                <h4>SUBTOTAL</h4>
              </div>
              <div className="td subtotal-number">
                <h5>
                  {new Intl.NumberFormat('us', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(Subtotal)}
                </h5>
              </div>
            </div>
            <div className="tr tax">
              <div className="th tax-label">
                <h4>TAX</h4>
              </div>
              <div className="td tax-number">
                <h5>
                  {new Intl.NumberFormat('us', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(Tax)}
                </h5>
              </div>
            </div>
            <div className="tr grand-total">
              <div className="th grand-total-label">
                <h4>GRAND TOTAL</h4>
              </div>
              <div className="td grand-total-number">
                <h5>
                  {new Intl.NumberFormat('us', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(amountDue)}
                </h5>
              </div>
            </div>
            <div className="tr amount-paid">
              <div className="th amount-paid-label">
                <h4>AMOUNT PAID</h4>
              </div>
              <div className="td amount-paid-number">
                <h5>
                  {new Intl.NumberFormat('us', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(amountPaid)}
                </h5>
              </div>
            </div>
            <div className="tr balance">
              <div className="th balance-label">
                <h4>BALANCE</h4>
              </div>
              <div className="td balance-number">
                <h5>
                  {new Intl.NumberFormat('us', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(Balance)}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <StatusBar message={message} messageType={messageType} />

        <div className="actions">
          <button onClick={handleClickDashboard}>
            <h3>DASHBOARD</h3>
          </button>
          <button onClick={handleClickBilling}>
            <h3>BILLING</h3>
          </button>
        </div>
      </section>
    </>
  );
}

export default ReceiptComponent;
