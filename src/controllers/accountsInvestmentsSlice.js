import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
};

export const accountsInvestmentsSlice = createSlice({
    name: 'investments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addCase(getStripeInvoice.fulfilled, (state, action) => {
        state.invoiceLoading = false;
        state.invoiceError = null;
        state.stripe_invoice_id = action.payload.id;
        state.status = action.payload.status;
        state.company_name = action.payload.name;
        state.account_country = action.payload.account_country;
        state.currency = action.payload.currency;
        state.stripe_customer_id = action.payload.customer;
        state.customer_name = action.payload.customer_name;
        state.customer_tax_ids = action.payload.customer_tax_ids;
        state.address_line_1 = action.payload.customer_address.line1;
        state.address_line_2 = action.payload.customer_address.line2;
        state.city = action.payload.customer_address.city;
        state.state = action.payload.customer_address.state;
        state.postal_code = action.payload.customer_address.postal_code;
        state.customer_phone = action.payload.customer_phone;
        state.customer_email = action.payload.customer_email;
        state.subtotal = action.payload.subtotal;
        state.tax = action.payload.tax;
        state.due_date = action.payload.due_date;
        state.amount_due = action.payload.amount_due;
        state.amount_paid = action.payload.amount_paid;
        state.amount_remaining = action.payload.amount_remaining;
        state.payment_date = action.payload.status_transitions.paid_at;
        state.stripe_customer_id = action.payload.customer;
        state.payment_intent_id = action.payload.payment_intent;
        state.invoice_pdf = action.payload.invoice_pdf;
        state.items = action.payload.lines.data;
    })
    .addCase(getPaymentIntent.fulfilled, (state, action) => {
        state.loading = false
        state.paymentError = ''
        state.client_secret = action.payload.client_secret
        state.paymentStatus = action.payload.status
        state.payment_method_id = action.payload.payment_method
      })
    .addMatcher(isAnyOf(
        getStripeInvoice.pending,
        getPaymentIntent.pending
    ), (state) => {
        state.invoiceLoading = true;
        state.invoiceError = null;
    })
    .addMatcher(isAnyOf(
        getStripeInvoice.rejected,
        getPaymentIntent.rejected
    ),
        (state, action) => {
            state.invoiceLoading = false;
            state.invoiceError = action.error.message;
        });
    }
});

export default accountsInvestmentsSlice;