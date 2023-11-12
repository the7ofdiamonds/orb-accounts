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
    accountsUsers: accountsUsersSlice.reducer,
    accountsClient: accountsClientSlice.reducer,
    accountsCustomer: accountsCustomerSlice.reducer,
    accountsServices: accountsServicesSlice.reducer,
    accountsQuote: accountsQuoteSlice.reducer,
    accountsInvoice: accountsInvoiceSlice.reducer,
    accountsPayment: accountsPaymentSlice.reducer,
    accountsReceipt: accountsReceiptSlice.reducer,
    accountsSchedule: accountsScheduleSlice.reducer,
  },
});

export default store;
