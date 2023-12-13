import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    stripeLoading: false,
    stripeError: '',
    stripe_customer_id: '',
    stripe_quote_id: '',
    quote_created: '',
    quote_status: '',
    quote_status_transitions: '',
    quote_description: '',
    amount_subtotal: '',
    amount_total: '',
    stripe_invoice_id: '',
    invoice_created: '',
    paid: '',
    invoice_status: '',
    invoice_status_transitions: '',
    invoice_description: '',
    items: '',
    stripe_subscription_id: '',
    due_date: '',
    currency: '',
    starting_balance: '',
    subtotal: '',
    tax: '',
    discounts: '',
    amount_due: '',
    amount_paid: '',
    amount_remaining: '',
    amount_shipping: '',
    ending_balance: '',
    shipping_cost: '',
    shipping_details: '',
    invoice_pdf: '',
    statement_descriptor: '',
    payment_date: '',
    receipt_number: '',
    invoice_pdf: '',
    payment_intent_id: '',
    client_secret: '',
    payment_status: '',
    payment_method_id: '',
    email: '',
    name: '',
    phone: '',
    address_line_1: '',
    address_line_2: '',
    state: '',
    city: '',
    postal_code: '',
    country: '',
    brand: '',
    card_country: '',
    exp_month: '',
    exp_year: '',
    funding: '',
    generated_from: '',
    last4: '',
    wallet: '',
    created: '',
    type: '',
    paymentMethod: ''
}

export const getStripeQuote = createAsyncThunk('stripe/getStripeQuote', async (stripeQuoteID, { getState }) => {
    try {
        const { stripe_quote_id } = getState().accountsQuote;

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

export const getStripeClientQuotes = createAsyncThunk('stripe/getStripeClientQuotes', async (_, { getState }) => {
    try {
        const { stripe_customer_id } = getState().accountsClient;

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

export const updateStripeQuote = createAsyncThunk('stripe/updateStripeQuote', async (_, { getState }) => {
    try {
        const { stripe_quote_id, selections } = getState().accountsQuote;

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

export const getStripeInvoice = createAsyncThunk('stripe/getStripeInvoice', async (stripe_invoice_id) => {
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

export const getPaymentIntent = createAsyncThunk('stripe/getPaymentIntent', async (paymentIntentID, { getState }) => {
    try {
        const { payment_intent_id } = getState().accountsInvoice;

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

export const updateClientSecret = (clientSecret) => {
    return {
        type: 'stripe/updateClientSecret',
        payload: clientSecret
    };
};

export const updatePaymentMethod = (paymentMethod) => {
    return {
        type: 'stripe/updatePaymentMethod',
        payload: paymentMethod
    };
};

export const getPaymentMethod = createAsyncThunk('stripe/getPaymentMethod', async (payment_method_id) => {
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

export const accountsStripeSlice = createSlice({
    name: 'stripe',
    initialState,
    reducers: {
        updateClientSecret: (state, action) => {
            state.client_secret = action.payload;
        },
        updatePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStripeQuote.fulfilled, (state, action) => {
                state.stripeLoading = false;
                state.stripeError = null;
                state.stripe_quote_id = action.payload.id
                state.quote_status = action.payload.status
                state.quote_status_transitions = action.payload.status_transitions
                state.amount_subtotal = action.payload.amount_subtotal
                state.amount_total = action.payload.amount_total
                state.currency = action.payload.currency
                state.stripe_customer_id = action.payload.customer
                state.quote_description = action.payload.description
                state.discounts = action.payload.discounts
                state.expires_at = action.payload.expires_at
                state.subscription = action.payload.subscription
                state.subscription_data = action.payload.subscription_data
                state.subscription_schedule = action.payload.subscription_schedule
                state.total_details = action.payload.total_details
                state.items = action.payload.line_items
                state.stripe_invoice_id = action.payload.invoice
            })
            .addCase(getStripeClientQuotes.fulfilled, (state, action) => {
                state.stripeLoading = false;
                state.stripeError = null;
                state.stripe_quote_id = action.payload.id
                state.quote_status = action.payload.status
                state.quote_status_transitions = action.payload.status_transitions
                state.amount_subtotal = action.payload.amount_subtotal
                state.amount_total = action.payload.amount_total
                state.currency = action.payload.currency
                state.stripe_customer_id = action.payload.customer
                state.quote_description = action.payload.description
                state.discounts = action.payload.discounts
                state.expires_at = action.payload.expires_at
                state.subscription = action.payload.subscription
                state.subscription_data = action.payload.subscription_data
                state.subscription_schedule = action.payload.subscription_schedule
                state.total_details = action.payload.total_details
                state.items = action.payload.line_items
                state.stripe_invoice_id = action.payload.invoice
            })
            .addCase(updateStripeQuote.fulfilled, (state, action) => {
                state.stripeLoading = false;
                state.stripeError = null;
                state.stripe_quote_id = action.payload.id
                state.quote_status = action.payload.status
                state.quote_status_transitions = action.payload.status_transitions
                state.amount_subtotal = action.payload.amount_subtotal
                state.amount_total = action.payload.amount_total
                state.currency = action.payload.currency
                state.stripe_customer_id = action.payload.customer
                state.quote_description = action.payload.description
                state.discounts = action.payload.discounts
                state.expires_at = action.payload.expires_at
                state.subscription = action.payload.subscription
                state.subscription_data = action.payload.subscription_data
                state.subscription_schedule = action.payload.subscription_schedule
                state.total_details = action.payload.total_details
                state.items = action.payload.line_items
                state.stripe_invoice_id = action.payload.invoice
            })
            .addCase(getStripeInvoice.fulfilled, (state, action) => {
                state.stripeLoading = false;
                state.stripeError = null;
                state.paid = action.payload.paid
                state.invoice_status = action.payload.status
                state.stripe_quote_id = action.payload.quote
                state.invoice_description = action.payload.description
                state.items = action.payload.lines.data;
                state.stripe_subscription_id = action.payload.subscription
                state.due_date = action.payload.due_date
                state.currency = action.payload.currency
                state.starting_balance = action.payload.starting_balance
                state.subtotal = action.payload.subtotal
                state.tax = action.payload.tax
                state.discounts = action.payload.discounts
                state.amount_due = action.payload.amount_due
                state.amount_paid = action.payload.amount_paid
                state.amount_remaining = action.payload.amount_remaining
                state.amount_shipping = action.payload.amount_shipping
                state.ending_balance = action.payload.ending_balance
                state.shipping_cost = action.payload.shipping_cost
                state.shipping_details = action.payload.shipping_details
                state.stripe_customer_id = action.payload.customer
                state.invoice_pdf = action.payload.hosted_invoice_url
                state.statement_descriptor = action.payload.statement_descriptor
                state.status_transitions = action.payload.status_transitions
                state.payment_date = action.payload.status_transitions.paid_at
                state.receipt_number = action.payload.receipt_number
                state.payment_intent_id = action.payload.payment_intent
            })
            .addCase(getPaymentIntent.fulfilled, (state, action) => {
                state.stripeLoading = false;
                state.stripeError = null;
                state.client_secret = action.payload.client_secret
                state.payment_status = action.payload.status
                state.payment_method_id = action.payload.payment_method
            })
            .addCase(getPaymentMethod.fulfilled, (state, action) => {
                state.stripeLoading = false;
                state.stripeError = null;
                state.billing_name = action.payload.billing_details.name
                state.billing_email = action.payload.billing_details.email
                state.billing_phone = action.payload.billing_details.phone
                state.billing_address_line_1 = action.payload.billing_details.address.line1
                state.billing_address_line_2 = action.payload.billing_details.address.line2
                state.billing_city = action.payload.billing_details.address.city
                state.billing_state = action.payload.billing_details.address.state
                state.billing_postal_code = action.payload.billing_details.address.postal_code
                state.billing_country = action.payload.billing_details.address.country
                state.brand = action.payload.card.brand
                state.card_country = action.payload.card.country
                state.exp_month = action.payload.card.exp_month
                state.exp_year = action.payload.card.exp_year
                state.last4 = action.payload.card.last4
                state.funding = action.payload.card.funding
                state.generated_from = action.payload.card.generated_from
                state.wallet = action.payload.wallet
                state.created = action.payload.created
                state.type = action.payload.type
            })
            .addMatcher(isAnyOf(
                getStripeQuote.pending,
                getStripeClientQuotes.pending,
                updateStripeQuote.pending,
                getStripeInvoice.pending,
                getPaymentIntent.pending,
                getPaymentMethod.pending
            ), (state) => {
                state.stripeLoading = true;
                state.stripeError = null;
            })
            .addMatcher(isAnyOf(
                getStripeQuote.rejected,
                getStripeClientQuotes.rejected,
                updateStripeQuote.rejected,
                getStripeInvoice.rejected,
                getPaymentIntent.rejected,
                getPaymentMethod.rejected
            ),
                (state, action) => {
                    state.stripeLoading = false;
                    state.stripeError = action.error.message;
                });
    }
});

export default accountsStripeSlice;