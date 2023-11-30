import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  paymentLoading: false,
  paymentError: '',
  payment_intent_id: '',
  amount_due: '',
  due_date: '',
  client_secret: '',
  paymentStatus: '',
  payment_method_id: '',
  payment_method: ''
};

export const updateClientSecret = (clientSecret) => {
  return {
    type: 'payment/updateClientSecret',
    payload: clientSecret
  };
};

export const accountsPaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    updateClientSecret: (state, action) => {
      state.client_secret = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPaymentIntent.fulfilled, (state, action) => {
        state.loading = false
        state.paymentError = ''
        state.client_secret = action.payload.client_secret
        state.paymentStatus = action.payload.status
        state.payment_method_id = action.payload.payment_method
      })
      .addMatcher(isAnyOf(
        getPaymentIntent.pending,
      ), (state) => {
        state.paymentLoading = true;
        state.paymentError = null;
      })
      .addMatcher(isAnyOf(
        getPaymentIntent.rejected,
      ),
        (state, action) => {
          state.paymentLoading = false;
          state.paymentError = action.error.message;
        });
  }
});