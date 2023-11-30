export const getStripeQuote = createAsyncThunk('accountsQuote/getStripeQuote', async (stripeQuoteID, { getState }) => {
    const { stripe_quote_id } = getState().accountsQuote;

    try {
        const response = await fetch(`/wp-json/orb/v1/stripe/quotes/${stripeQuoteID ? stripeQuoteID : stripe_quote_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            throw new Error(errorMessage);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error.message;
    }
});

export const updateStripeQuote = createAsyncThunk('accountsQuote/updateStripeQuote', async (_, { getState }) => {
    const { stripe_quote_id, selections } = getState().accountsQuote;

    try {
        const response = await fetch(`/wp-json/orb/v1/stripe/quote/${stripe_quote_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selections)
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            throw new Error(errorMessage);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error.message;
    }
});

export const getStripeClientQuotes = createAsyncThunk('accountsQuote/getStripeClientQuotes', async (_, { getState }) => {
    const { stripe_customer_id } = getState().accountsClient;

    try {
        const response = await fetch(`/wp-json/orb/v1/stripe/quotes/${stripe_customer_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            throw new Error(errorMessage);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error.message;
    }
});

export const getStripeInvoice = createAsyncThunk('invoice/getStripeInvoice', async (stripe_invoice_id) => {

    try {
        const response = await fetch(`/wp-json/orb/v1/stripe/invoices/${stripe_invoice_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            throw new Error(errorMessage);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error;
    }
});

export const pdfInvoice = createAsyncThunk('invoice/pdfInvoice', async (_, { getState }) => {
    try {
        const { stripe_invoice_id } = getState().accountsInvoice;

        const response = await fetch(`/wp-json/orb/v1/stripe/invoices/pdf/${stripe_invoice_id}/pdf`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            throw new Error(errorMessage);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error;
    }
});

export const getPaymentMethod = createAsyncThunk('receipt/getPaymentMethod', async (payment_method_id) => {
    try {
        const response = await fetch(`/wp-json/orb/v1/stripe/payment_methods/${payment_method_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            throw new Error(errorMessage);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error.message;
    }
});

export const updatePaymentMethod = (paymentMethod) => {
    return {
        type: 'receipt/updatePaymentMethod',
        payload: paymentMethod
    };
};

export const getPaymentIntent = createAsyncThunk('payment/getPaymentIntent', async (paymentIntentID, { getState }) => {
    const { payment_intent_id } = getState().accountsInvoice;

    try {
        const response = await fetch(`/wp-json/orb/v1/stripe/payment_intents/${paymentIntentID ? paymentIntentID : payment_intent_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            throw new Error(errorMessage);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error.message;
    }
});

export const accountsStripeSlice = createSlice({
    name: 'stripe',
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
    .addMatcher(isAnyOf(
        getStripeInvoice.pending,
    ), (state) => {
        state.invoiceLoading = true;
        state.invoiceError = null;
    })
    .addMatcher(isAnyOf(
        getStripeInvoice.rejected,
    ),
        (state, action) => {
            state.invoiceLoading = false;
            state.invoiceError = action.error.message;
        });
    }
});

export default accountsStripeSlice;