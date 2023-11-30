import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  quoteLoading: false,
  quoteError: '',
  stripe_customer_id: '',
  quotes: '',
  quote_id: '',
  stripe_quote_id: '',
  amount_subtotal: '',
  amount_total: '',
  status: '',
  selections: '',
  total: '',
  pdf: ''
};

export const updateQuoteID = (stripe_quote_id) => {
  return {
    type: 'quote/updateQuoteID',
    payload: stripe_quote_id
  };
};

export const createQuote = createAsyncThunk('quote/createQuote', async (_, { getState }) => {
  try {
    const { stripe_customer_id } = getState().accountsClient;
    const { selections } = getState().accountsQuote;
  
    const response = await fetch('/wp-json/orb/quote/v1/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stripe_customer_id: stripe_customer_id,
        selections: selections
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


export const getQuote = createAsyncThunk('quote/getQuote', async (stripeQuoteID, { getState }) => {
  try {
    const { stripe_quote_id } = getState().accountsQuote;
    const { stripe_customer_id } = getState().accountsClient;
  
    const response = await fetch(`/wp-json/orb/quote/v1/${stripeQuoteID ? stripeQuoteID : stripe_quote_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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

export const getQuoteByID = createAsyncThunk('quote/getQuoteByID', async (quoteID, { getState }) => {
  try {
    const { quote_id } = getState().accountsQuote;
    const { stripe_customer_id } = getState().accountsClient;
  
    const response = await fetch(`/wp-json/orb/quote/v1/id/${quoteID ? quoteID : quote_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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

export const updateQuote = createAsyncThunk('quote/updateQuote', async (_, { getState }) => {
  try {
    const { stripe_quote_id, selections } = getState().accountsQuote;

    const response = await fetch(`/wp-json/orb/v1/quote/update/${stripe_quote_id}`, {
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

export const finalizeQuote = createAsyncThunk('quote/finalizeQuote', async (_, { getState }) => {

  try {
    const response = await fetch(`/wp-json/orb/quote/v1/finalize/${stripe_quote_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        selections: selections
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

export const updateQuoteStatus = createAsyncThunk('quote/updateQuoteStatus', async (_, { getState }) => {
  const { stripe_quote_id } = getState().accountsQuote;

  try {
    const response = await fetch(`/wp-json/orb/quote/v1/update/status/${stripe_quote_id}`, {
      method: 'PATCH',
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

export const acceptQuote = createAsyncThunk('quote/acceptQuote', async (_, { getState }) => {
  const { stripe_quote_id } = getState().accountsQuote;

  try {
    const response = await fetch(`/wp-json/orb/quotes/v1/accept/${stripe_quote_id}/accept`, {
      method: 'POST',
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

export const cancelQuote = createAsyncThunk('quote/cancelQuote', async (_, { getState }) => {
  const { stripe_quote_id } = getState().accountsQuote;

  try {
    const response = await fetch(`/wp-json/orb/quote/v1/cancel/${stripe_quote_id}/cancel`, {
      method: 'POST',
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

export const getClientQuotes = createAsyncThunk('quote/getClientQuotes', async (_, { getState }) => {
  const { stripe_customer_id } = getState().accountsClient;

  try {
    const response = await fetch(`/wp-json/orb/quote/v1/client/${stripe_customer_id}`, {
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

export const accountsQuoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    addSelections: (state, action) => {
      state.selections = action.payload;
    },
    calculateSelections: (state) => {
      let total = 0.00;

      state.selections.forEach((item) => {
        const serviceCost = parseFloat(item.price);

        if (isNaN(serviceCost)) {
          total += 0;
        } else {
          total += serviceCost;
        }
      });

      state.total = total;
    },
    updateQuoteID: (state, action) => {
      state.stripe_quote_id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createQuote.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.stripe_quote_id = action.payload.id;
        state.stripe_customer_id = action.payload.stripe_customer_id;
        state.amount_subtotal = action.payload.amount_subtotal;
        state.amount_total = action.payload.amount_total;
        state.status = action.payload.status;
        state.total = action.payload.total;
      })
      .addCase(getQuote.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.quote_id = action.payload.id;
        state.stripe_quote_id = action.payload.stripe_quote_id;
        state.status = action.payload.status;
        state.selections = action.payload.selections;
        state.amount_subtotal = action.payload.amount_subtotal
        state.amount_total = action.payload.amount_total
      })
      .addCase(getQuoteByID.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.quote_id = action.payload.id;
        state.stripe_quote_id = action.payload.stripe_quote_id;
        state.status = action.payload.status;
        state.selections = action.payload.selections;
        state.amount_subtotal = action.payload.amount_subtotal
        state.amount_total = action.payload.amount_total
      })
      .addCase(getStripeQuote.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.stripe_quote_id = action.payload.id;
        state.status = action.payload.status;
        state.amount_subtotal = action.payload.amount_subtotal
        state.amount_total = action.payload.amount_total;
      })
      .addCase(updateQuote.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.stripe_quote_id = action.payload.id;
        state.status = action.payload.status;
        state.amount_subtotal = action.payload.amount_subtotal
        state.amount_total = action.payload.amount_total
      })
      .addCase(updateQuoteStatus.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.status = action.payload;
        state.stripe_quote_id = action.payload.id;
        state.status = action.payload.status;
        state.amount_subtotal = action.payload.amount_subtotal
        state.amount_total = action.payload.amount_total
      })
      .addCase(getClientQuotes.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.quotes = action.payload;
      })
      .addCase(finalizeQuote.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.quote_id = action.payload.quote_id;
        state.stripe_quote_id = action.payload.stripe_quote_id;
        state.stripe_customer_id = action.payload.customer;
        state.status = action.payload.status;
        state.amount_subtotal = action.payload.amount_subtotal;
        state.amount_discount = action.payload.amount_discount;
        state.amount_shipping = action.payload.amount_shipping;
        state.amount_total = action.payload.amount_total;
      })
      .addCase(acceptQuote.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.status = action.payload.status;
        state.stripe_invoice_id = action.payload.invoice;
        state.stripe_quote_id = action.payload.id;
        state.stripe_customer_id = action.payload.customer;
        state.status = action.payload.status;
        state.amount_subtotal = action.payload.amount_subtotal;
        state.amount_discount = action.payload.amount_discount;
        state.amount_shipping = action.payload.amount_shipping;
        state.amount_total = action.payload.amount_total;
      })
      .addCase(cancelQuote.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = '';
        state.status = action.payload;
      })
      .addMatcher(isAnyOf(
        createQuote.pending,
        getQuote.pending,
        getQuoteByID.pending,
        getStripeQuote.pending,
        updateQuote.pending,
        updateQuoteStatus.pending,
        getClientQuotes.pending,
        getStripeClientQuotes.pending,
        finalizeQuote.pending,
        acceptQuote.pending,
        cancelQuote.pending
      ), (state) => {
        state.quoteLoading = true;
        state.quoteError = null;
      })
      .addMatcher(isAnyOf(
        createQuote.rejected,
        getQuote.rejected,
        getQuoteByID.rejected,
        getStripeQuote.rejected,
        updateQuote.rejected,
        updateQuoteStatus.rejected,
        getClientQuotes.rejected,
        getStripeClientQuotes.rejected,
        finalizeQuote.rejected,
        acceptQuote.rejected,
        cancelQuote.rejected
      ),
        (state, action) => {
          state.quoteLoading = false;
          state.quoteError = action.error.message;
        });
  }
});

export const { addSelections, calculateSelections } = accountsQuoteSlice.actions;
export default accountsQuoteSlice;