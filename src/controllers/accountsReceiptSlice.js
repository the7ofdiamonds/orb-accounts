import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  receiptLoading: false,
  receiptError: '',
  receipt_id: '',
  invoice_id: '',
  stripe_invoice_id: '',
  payment_intent_id: '',
  payment_method_id: '',
  payment_date: '',
  currency: '',
  amount_paid: '',
  balance: '',
  type: '',
  brand: '',
  last4: '',
  payment_method: '',
  stripe_customer_id: '',
  name: '',
  receipt_pdf_url: '',
  onboarding_links: '',
  receipts: '',
};

export const updateReceiptID = (receiptID) => {
  return {
    type: 'payment/updateReceiptID',
    payload: receiptID
  };
};

export const saveReceipt = createAsyncThunk('receipt/saveReceipt', async (_, { getState }) => {
  try {
    const { stripe_customer_id } = getState().client;
    const { invoice_id } = getState().accountsInvoice;
  
    const response = await fetch('/wp-json/orb/receipt/v1/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        invoice_id: invoice_id,
        stripe_customer_id: stripe_customer_id,
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
    throw error.message;
  }
});

export const getReceipt = createAsyncThunk('receipt/getReceipt', async (_, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;
    const { stripe_invoice_id } = getState().accountsInvoice;
  
    const response = await fetch(`/wp-json/orb/receipt/v1/${stripe_invoice_id}`, {
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
    throw error.message;
  }
});

export const getReceiptByID = createAsyncThunk('receipt/getReceiptByID', async (id, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;

    const response = await fetch(`/wp-json/orb/receipt/v1/id/${id}`, {
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
    throw error.message;
  }
});

export const getClientReceipts = createAsyncThunk('Receipt/getClientReceipts', async (_, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;

    const response = await fetch(`/wp-json/orb/receipt/v1/client/${stripe_customer_id}`, {
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

export const accountsReceiptSlice = createSlice({
  name: 'receipt',
  initialState,
  reducers: {
    updateReceiptID: (state, action) => {
      state.receipt_id = action.payload;
    },
    updatePaymentMethod: (state, action) => {
      state.payment_method = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveReceipt.fulfilled, (state, action) => {
        state.receiptLoading = false;
        state.receiptError = null;
        state.receipt_id = action.payload
      })
      .addCase(getReceipt.fulfilled, (state, action) => {
        state.receiptLoading = false;
        state.receiptError = null;
        state.receipt_id = action.payload.id
        state.created_at = action.payload.created_at
        state.stripe_invoice_id = action.payload.stripe_invoice_id
        state.payment_intent_id = action.payload.payment_intent_id
        state.payment_method_id = action.payload.payment_method_id
        state.payment_date = action.payload.payment_date
        state.currency = action.payload.currency
        state.amount_paid = action.payload.amount_paid
        state.balance = action.payload.balance
        state.payment_method = action.payload.payment_method
        state.stripe_customer_id = action.payload.stripe_customer_id
        state.name = action.payload.name
        state.receipt_pdf_url = action.payload.receipt_pdf_url
        state.onboarding_links = action.payload.onboarding_links
      })
      .addCase(getReceiptByID.fulfilled, (state, action) => {
        state.receiptLoading = false;
        state.receiptError = null;
        state.receipt_id = action.payload.id
        state.created_at = action.payload.created_at
        state.stripe_invoice_id = action.payload.stripe_invoice_id
        state.payment_intent_id = action.payload.payment_intent_id
        state.payment_method_id = action.payload.payment_method_id
        state.payment_date = action.payload.payment_date
        state.currency = action.payload.currency
        state.amount_paid = action.payload.amount_paid
        state.balance = action.payload.balance
        state.payment_method = action.payload.payment_method
        state.stripe_customer_id = action.payload.stripe_customer_id
        state.name = action.payload.name
        state.receipt_pdf_url = action.payload.receipt_pdf_url
        state.onboarding_links = action.payload.onboarding_links
      })
      .addCase(getClientReceipts.fulfilled, (state, action) => {
        state.receiptLoading = false;
        state.receiptError = null;
        state.receipts = action.payload
      })
      .addMatcher(isAnyOf(
        saveReceipt.pending,
        getReceipt.pending,
        getReceiptByID.pending,
        getClientReceipts.pending,
      ), (state) => {
        state.receiptLoading = true;
        state.receiptError = null;
      })
      .addMatcher(isAnyOf(
        saveReceipt.rejected,
        getReceipt.rejected,
        getReceiptByID.rejected,
        getClientReceipts.rejected,
      ),
        (state, action) => {
          state.receiptLoading = false;
          state.receiptError = action.error.message;
        });
  }
});