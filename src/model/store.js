import { configureStore } from '@reduxjs/toolkit';
import { accountsUserSlice } from '../controllers/accountsUserSlice.js';
import { accountsCustomerSlice } from '../controllers/accountsCustomerSlice.js';
import { accountsEmailSlice } from '../controllers/accountsEmail.js';
import { accountsInvoiceSlice } from '../controllers/accountsInvoiceSlice.js';
import { accountsInvestmentsSlice } from '../controllers/accountsInvestmentsSlice.js';
import { accountsProductsSlice } from '../controllers/accountsProductsSlice.js';
import { accountsQuoteSlice } from '../controllers/accountsQuoteSlice.js';
import { accountsReceiptSlice } from '../controllers/accountsReceiptSlice.js';
import { accountsServicesSlice } from '../controllers/accountsServicesSlice.js';
import { accountsStripeSlice } from '../controllers/accountsStripeSlice.js';

const store = configureStore({
  reducer: {
    accountsUser: accountsUserSlice.reducer,
    accountsCustomer: accountsCustomerSlice.reducer,
    accountsEmail: accountsEmailSlice.reducer,
    accountsInvoice: accountsInvoiceSlice.reducer,
    accountsInvestments: accountsInvestmentsSlice.reducer,
    accountsProducts: accountsProductsSlice.reducer,
    accountsQuote: accountsQuoteSlice.reducer,
    accountsReceipt: accountsReceiptSlice.reducer,
    accountsServices: accountsServicesSlice.reducer,
    accountsStripe: accountsStripeSlice.reducer,
  },
});

export default store;
