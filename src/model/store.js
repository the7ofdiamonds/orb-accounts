import { configureStore } from '@reduxjs/toolkit';
import { accountsUsersSlice } from '../controllers/accountsUsersSlice.js';
import { accountsClientSlice } from '../controllers/accountsClientSlice.js';
import { accountsCustomerSlice } from '../controllers/accountsCustomerSlice.js';
import { accountsServicesSlice } from '../controllers/accountsServicesSlice.js';
import { accountsQuoteSlice } from '../controllers/accountsQuoteSlice.js';
import { accountsInvoiceSlice } from '../controllers/accountsInvoiceSlice.js';
import { accountsPaymentSlice } from '../controllers/accountsPaymentSlice.js';
import { accountsReceiptSlice } from '../controllers/accountsReceiptSlice.js';
import { accountsScheduleSlice } from '../controllers/accountsScheduleSlice.js';

const store = configureStore({
  reducer: {
    users: accountsUsersSlice.reducer,
    client: accountsClientSlice.reducer,
    customer: accountsCustomerSlice.reducer,
    services: accountsServicesSlice.reducer,
    quote: accountsQuoteSlice.reducer,
    invoice: accountsInvoiceSlice.reducer,
    payment: accountsPaymentSlice.reducer,
    receipt: accountsReceiptSlice.reducer,
    schedule: accountsScheduleSlice.reducer,
  },
});

export default store;
