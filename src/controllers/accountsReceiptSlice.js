import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  receiptLoading: false,
  receiptError: '',
  receipts: [],
  receipt_id: '',
  invoice_id: '',
  stripe_invoice_id: '',
  stripe_customer_id: '',
  payment_method_id: '',
  amount_paid: '',
  payment_date: '',
  balance: '',
  type: '',
  brand: '',
  last4: '',
  payment_method: '',
  amount_remaining: '',
};

export const updateReceiptID = (receiptID) => {
  return {
    type: 'payment/updateReceiptID',
    payload: receiptID
  };
};

export const saveReceipt = createAsyncThunk('receipt/saveReceipt', async (_, { getState }) => {
  try {
    const { stripe_customer_id, first_name, last_name } = getState().accountsClient;
    const { invoice_id, stripe_invoice_id } = getState().accountsInvoice;
    const { payment_method_id, amount_paid, payment_date, balance, payment_method } = getState().accountsReceipt;
  
    const response = await fetch('/wp-json/orb/receipt/v1/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stripe_customer_id: stripe_customer_id,
        invoice_id: invoice_id,
        stripe_invoice_id: stripe_invoice_id,
        payment_method_id: payment_method_id,
        amount_paid: amount_paid,
        payment_date: payment_date,
        balance: balance,
        payment_method: payment_method,
        first_name: first_name,
        last_name: last_name,
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

export const getClientReceipts = createAsyncThunk('receipt/getClientReceipts', async (_, { getState }) => {
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
      .addCase(getPaymentMethod.fulfilled, (state, action) => {
        state.receiptLoading = false;
        state.receiptError = '';
        state.payment_method_id = action.payload.id;
        state.billing_details = action.payload.billing_details;
        state.card = action.payload.card;
        state.created = action.payload.created;
        state.customer = action.payload.customer;
        state.livemode = action.payload.livemode;
        state.metadata = action.payload.metadata;
        state.type = action.payload.type;
      })
      .addCase(postReceipt.fulfilled, (state, action) => {
        state.receiptLoading = false;
        state.receiptError = '';
        state.receipt_id = action.payload;
      })
      .addCase(getReceipt.fulfilled, (state, action) => {
        state.receiptLoading = false;
        state.receiptError = '';
        state.receipt_id = action.payload.id;
        state.created_at = action.payload.created_at;
        state.stripe_invoice_id = action.payload.stripe_invoice_id;
        state.stripe_customer_id = action.payload.stripe_customer_id;
        state.payment_method_id = action.payload.payment_method_id;
        state.amount_paid = action.payload.amount_paid;
        state.payment_date = action.payload.payment_date;
        state.balance = action.payload.balance;
        state.payment_method = action.payload.payment_method;
        state.first_name = action.payload.first_name;
        state.last_name = action.payload.last_name;
      })
      .addCase(getReceiptByID.fulfilled, (state, action) => {
        state.receiptLoading = false;
        state.receiptError = '';
        state.receipt_id = action.payload.id;
        state.created_at = action.payload.created_at;
        state.stripe_invoice_id = action.payload.stripe_invoice_id;
        state.stripe_customer_id = action.payload.stripe_customer_id;
        state.payment_method_id = action.payload.payment_method_id;
        state.amount_paid = action.payload.amount_paid;
        state.payment_date = action.payload.payment_date;
        state.balance = action.payload.balance;
        state.payment_method = action.payload.payment_method;
        state.first_name = action.payload.first_name;
        state.last_name = action.payload.last_name;
      })
      .addCase(getClientReceipts.fulfilled, (state, action) => {
        state.receiptLoading = false;
        state.receiptError = '';
        state.receipts = action.payload;
      })
      .addMatcher(isAnyOf(
        getPaymentMethod.pending,
        postReceipt.pending,
        getReceipt.pending,
        getReceiptByID.pending,
        getClientReceipts.pending,
      ), (state) => {
        state.receiptLoading = true;
        state.receiptError = null;
      })
      .addMatcher(isAnyOf(
        getPaymentMethod.rejected,
        postReceipt.rejected,
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