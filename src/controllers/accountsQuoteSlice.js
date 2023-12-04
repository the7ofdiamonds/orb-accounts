import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  quoteLoading: false,
  quoteError: '',
  stripe_customer_id: '',
  quote_id: '',
  stripe_quote_id: '',
  amount_subtotal: '',
  amount_total: '',
  quote_status: '',
  selections: '',
  total: '',
  pdf: '',
  onboarding_links: '',
  quotes: '',
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
        selections: selections,
        onboarding_links: onboarding_links
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
    const { stripe_quote_id } = getState().accountsQuote;

    const response = await fetch(`/wp-json/orb/quote/v1/finalize/${stripe_quote_id}`, {
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
    const response = await fetch(`/wp-json/orb/quotes/v1/accept/${stripe_quote_id}`, {
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
    const response = await fetch(`/wp-json/orb/quote/v1/cancel/${stripe_quote_id}`, {
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
  try {
    const { stripe_customer_id } = getState().accountsClient;

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
    addOnboardingLink: (state, action) => {
      state.selections.forEach((item) => {
        const onboardingLink = item.onboarding_link;
        const onboardingLinks = [];

        if (onboardingLink !== '' || onboardingLink !== null) {
          onboardingLinks.push(onboardingLink);
        } 
      });

      state.onboarding_links = onboardingLinks;
    },
    updateQuoteID: (state, action) => {
      state.stripe_quote_id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClientQuotes.fulfilled, (state, action) => {
        state.quoteLoading = false;
        state.quoteError = null;
        state.quotes = action.payload;
      })
      .addMatcher(isAnyOf(
        createQuote.fulfilled,
        getQuote.fulfilled,
        getQuoteByID.fulfilled,
        updateQuote.fulfilled,
        updateQuoteStatus.fulfilled,
        finalizeQuote.fulfilled,
        acceptQuote.fulfilled,
        cancelQuote.fulfilled
      ), (state, action) => {
        state.quoteLoading = false;
        state.quoteError = null;
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
      .addMatcher(isAnyOf(
        createQuote.pending,
        getQuote.pending,
        getQuoteByID.pending,
        updateQuote.pending,
        updateQuoteStatus.pending,
        getClientQuotes.pending,
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
        updateQuote.rejected,
        updateQuoteStatus.rejected,
        getClientQuotes.rejected,
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