import { configureStore } from '@reduxjs/toolkit';
import { accountsEmailSlice } from '../controllers/accountsEmail.js';
import { accountsInvoiceSlice } from '../controllers/accountsInvoiceSlice.js';
import { accountsProductsSlice } from '../controllers/accountsProductsSlice.js';
import { accountsQuoteSlice } from '../controllers/accountsQuoteSlice.js';
import { accountsReceiptSlice } from '../controllers/accountsReceiptSlice.js';
import { accountsServicesSlice } from '../controllers/accountsServicesSlice.js';
import { accountsStripeSlice } from '../controllers/accountsStripeSlice.js';
import { accountsUserSlice } from '../controllers/accountsUserSlice.js';
import { accountsEnumsSlice } from '../controllers/accountsEnums.js';

const store = configureStore({
  reducer: {
    accountsEmail: accountsEmailSlice.reducer,
    accountsInvoice: accountsInvoiceSlice.reducer,
    accountsProducts: accountsProductsSlice.reducer,
    accountsQuote: accountsQuoteSlice.reducer,
    accountsReceipt: accountsReceiptSlice.reducer,
    accountsServices: accountsServicesSlice.reducer,
    accountsStripe: accountsStripeSlice.reducer,
    accountsUser: accountsUserSlice.reducer,
    accountsEnums: accountsEnumsSlice.reducer
  },
});

export default store;
