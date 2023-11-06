import { useState, useEffect } from 'react';
import {
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import PaymentNavigationComponent from './components/PaymentNavigation';

const WalletComponent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { setPaymentRequest, paymentRequest } = useState();

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

  return (
    <>
      <section className="payment">
        <PaymentNavigationComponent />
        {paymentRequest && (
          <PaymentRequestButtonElement options={{ paymentRequest }} />
        )}
      </section>
    </>
  );
};

export default WalletComponent;
