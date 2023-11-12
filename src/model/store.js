import { configureStore } from '@reduxjs/toolkit';
import { accountsClientSlice } from '../controllers/accountsClientSlice.js';
import { accountsCustomerSlice } from '../controllers/accountsCustomerSlice.js';
import { accountsServicesSlice } from '../controllers/accountsServicesSlice.js';
import { accountsQuoteSlice } from '../controllers/accountsQuoteSlice.js';
import { accountsInvoiceSlice } from '../controllers/accountsInvoiceSlice.js';
import { accountsPaymentSlice } from '../controllers/accountsPaymentSlice.js';
import { accountsReceiptSlice } from '../controllers/accountsReceiptSlice.js';

const store = configureStore({
  reducer: {
    accountsClient: accountsClientSlice.reducer,
    accountsCustomer: accountsCustomerSlice.reducer,
    accountsServices: accountsServicesSlice.reducer,
    accountsQuote: accountsQuoteSlice.reducer,
    accountsInvoice: accountsInvoiceSlice.reducer,
    accountsPayment: accountsPaymentSlice.reducer,
    accountsReceipt: accountsReceiptSlice.reducer,
  },
});

export default store;
