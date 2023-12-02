import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  invoiceLoading: false,
  invoiceError: '',
  quote_id: '',
  invoices: [],
  invoice_id: '',
  status: '',
  stripe_customer_id: '',
  payment_intent_id: '',
  items: '',
  stripe_invoice_id: '',
  payment_intent_id: '',
  client_secret: '',
  selections: '',
  subtotal: '',
  tax: '',
  due_date: '',
  amount_due: '',
  amount_paid: '',
  amount_remaining: '',
  payment_date: '',
  invoice_pdf: ''
};

export const saveInvoice = createAsyncThunk('invoice/saveInvoice', async (stripeInvoiceID, { getState }) => {
  try {
    const { quote_id, stripe_invoice_id } = getState().quote;

    const response = await fetch(`/wp-json/orb/invoice/v1/save/${stripeInvoiceID ? stripeInvoiceID : stripe_invoice_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quote_id: quote_id
      })
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

export const getInvoice = createAsyncThunk('invoice/getInvoice', async (stripeInvoiceID, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;
    const { stripe_invoice_id } = getState().accountsInvoice;
    
    const response = await fetch(`/wp-json/orb/invoice/v1/${stripeInvoiceID ? stripeInvoiceID : stripe_invoice_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stripe_customer_id: stripe_customer_id
      })
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

export const getInvoiceByID = createAsyncThunk('invoice/getInvoiceByID', async (id, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;

    const response = await fetch(`/wp-json/orb/invoice/v1/id/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stripe_customer_id: stripe_customer_id
      })
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

export const getInvoiceByQuoteID = createAsyncThunk('invoice/getInvoiceByQuoteID', async (quoteID, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;
    const { quote_id } = getState().quote;
  
    const response = await fetch(`/wp-json/orb/invoice/v1/quoteid/${quoteID ? quoteID : quote_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stripe_customer_id: stripe_customer_id
      })
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

export const updateInvoice = createAsyncThunk('invoice/updateInvoice', async (_, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;
    const { invoice_id, stripe_invoice_id } = getState().accountsInvoice;
  
    const response = await fetch(`/wp-json/orb/v1/invoice/update/${invoice_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stripe_customer_id: stripe_customer_id,
        stripe_invoice_id: stripe_invoice_id
      })
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

export const updateInvoiceStatus = createAsyncThunk('invoice/updateInvoiceStatus', async (_, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;
    const { invoice_id, stripe_invoice_id } = getState().accountsInvoice;
  
    const response = await fetch(`/wp-json/orb/invoice/v1/update/status/${invoice_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stripe_customer_id: stripe_customer_id,
        stripe_invoice_id: stripe_invoice_id
      })
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

export const getClientInvoices = createAsyncThunk('invoice/getClientInvoices', async (_, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;

    const response = await fetch(`/wp-json/orb/invoice/v1/client/${stripe_customer_id}`, {
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
    throw error;
  }
});

export const finalizeInvoice = createAsyncThunk('invoice/finalizeInvoice', async (_, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;
    const { stripe_invoice_id } = getState().accountsInvoice;
  
    const response = await fetch(`/wp-json/orb/invoice/v1/finalize/${stripe_invoice_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stripe_customer_id: stripe_customer_id
      })
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

export const accountsInvoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    quoteToInvoice: (state, action) => {
      state.selections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveInvoice.fulfilled, (state, action) => {
        state.invoiceLoading = false;
        state.invoice_id = action.payload;
      })
      .addCase(getInvoice.fulfilled, (state, action) => {
        state.invoiceLoading = false
        state.invoiceError = '';
        state.invoice_id = action.payload.id
        state.status = action.payload.status;
        state.stripe_customer_id = action.payload.stripe_customer_id;
        state.quote_id = action.payload.quote_id;
        state.stripe_invoice_id = action.payload.stripe_invoice_id;
        state.payment_intent_id = action.payload.payment_intent_id;
        state.client_secret = action.payload.client_secret;
        state.subtotal = action.payload.subtotal;
        state.invoice_pdf = action.payload.invoice_pdf_URL;
      })
      .addCase(getInvoiceByID.fulfilled, (state, action) => {
        state.invoiceLoading = false
        state.invoiceError = null;
        state.invoice_id = action.payload.id
        state.status = action.payload.status;
        state.stripe_customer_id = action.payload.stripe_customer_id;
        state.quote_id = action.payload.quote_id;
        state.stripe_invoice_id = action.payload.stripe_invoice_id;
        state.payment_intent_id = action.payload.payment_intent_id;
        state.client_secret = action.payload.client_secret;
        state.subtotal = action.payload.subtotal;
        state.invoice_pdf = action.payload.invoice_pdf_URL;
      })
      .addCase(getInvoiceByQuoteID.fulfilled, (state, action) => {
        state.invoiceLoading = false
        state.invoiceError = null;
        state.invoice_id = action.payload.id
        state.status = action.payload.status;
        state.stripe_customer_id = action.payload.stripe_customer_id;
        state.quote_id = action.payload.quote_id;
        state.stripe_invoice_id = action.payload.stripe_invoice_id;
        state.payment_intent_id = action.payload.payment_intent_id;
        state.client_secret = action.payload.client_secret;
        state.subtotal = action.payload.subtotal;
        state.invoice_pdf = action.payload.invoice_pdf_URL;
      })
      .addCase(updateInvoice.fulfilled, (state, action) => {
        state.invoiceLoading = false;
      })
      .addCase(updateInvoiceStatus.fulfilled, (state, action) => {
        state.status = action.payload;
      })
      .addCase(getClientInvoices.fulfilled, (state, action) => {
        state.invoiceLoading = false;
        state.invoiceError = '';
        state.invoices = action.payload;
      })
      .addCase(finalizeInvoice.fulfilled, (state, action) => {
        state.invoiceLoading = false;
        state.client_secret = action.payload.client_secret;
        state.payment_intent_id = action.payload.payment_intent_id;
        state.status = action.payload.status;
        state.invoiceError = null;
      })
      .addMatcher(isAnyOf(
        saveInvoice.pending,
        getInvoice.pending,
        getInvoiceByID.pending,
        updateInvoice.pending,
        updateInvoiceStatus.pending,
        getClientInvoices.pending,
        finalizeInvoice.pending,
      ), (state) => {
        state.invoiceLoading = true;
        state.invoiceError = null;
      })
      .addMatcher(isAnyOf(
        saveInvoice.rejected,
        getInvoice.rejected,
        getInvoiceByID.rejected,
        updateInvoice.rejected,
        updateInvoiceStatus.rejected,
        getClientInvoices.rejected,
        finalizeInvoice.rejected,
      ),
        (state, action) => {
          state.invoiceLoading = false;
          state.invoiceError = action.error.message;
        });
  }
});

export default accountsInvoiceSlice;