import { useState, useEffect } from 'react';
import {
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import LoadingComponent from '../loading/LoadingComponent.jsx';
import ErrorComponent from '../error/ErrorComponent.jsx';

import PaymentNavigationComponent from './components/PaymentNavigation';
import StatusBar from './components/StatusBar.jsx';

const WalletComponent = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [messageType, setMessageType] = useState('info');
  const [message, setMessage] = useState(
    'Please enter your card number, expiration date, and the code on the back.'
  );
  const { setPaymentRequest, paymentRequest } = useState();

  const { paymentLoading, paymentError, client_secret } = useSelector(
    (state) => state.accountsPayment
  );
  const { receipt_id, payment_method } = useSelector((state) => state.accountsReceipt);

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    const paymentRequest = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      requestPayerEmail: true,
      requestPayerName: true,
      total: {
        label: 'Total',
        amount: 1000, // Amount in cents
      },
    });

    paymentRequest.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(paymentRequest);
      }
    });
  }, [stripe, elements, setPaymentRequest]);

  if (paymentLoading) {
    return <LoadingComponent />;
  }

  if (paymentError) {
    return <ErrorComponent error={servicesError} />;
  }

  return (
    <>
      <section className="payment">
        <PaymentNavigationComponent />
        {paymentRequest && (
          <PaymentRequestButtonElement options={{ paymentRequest }} />
        )}

        <StatusBar message={message} messageType={messageType} />
      </section>
    </>
  );
};

export default WalletComponent;
