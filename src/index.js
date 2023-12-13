import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { Provider } from 'react-redux';
import store from './model/store.js';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripeKey = process.env.REACT_APP_STRIPE_KEY;
console.log(stripeKey);
const stripe = loadStripe(stripeKey);

const orb = document.getElementById('orb_accounts');
if (orb) {
  ReactDOM.createRoot(orb).render(
    <React.StrictMode>
      <Provider store={store}>
        <Elements stripe={stripe}>
          <App />
        </Elements>
      </Provider>
    </React.StrictMode>
  );
}
