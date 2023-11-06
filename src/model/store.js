import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from '../controllers/usersSlice.js';
import { clientSlice } from '../controllers/clientSlice.js';
import { customerSlice } from '../controllers/customerSlice.js';
import { quoteSlice } from '../controllers/quoteSlice.js';
import { invoiceSlice } from '../controllers/invoiceSlice.js';
import { scheduleSlice } from '../controllers/scheduleSlice.js';
import { paymentSlice } from '../controllers/paymentSlice.js';
import { receiptSlice } from '../controllers/receiptSlice.js';

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    client: clientSlice.reducer,
    customer: customerSlice.reducer,
    quote: quoteSlice.reducer,
    invoice: invoiceSlice.reducer,
    schedule: scheduleSlice.reducer,
    payment: paymentSlice.reducer,
    receipt: receiptSlice.reducer,
  },
});

export default store;
