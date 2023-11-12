import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit'

const initialState = {
  servicesLoading: false,
  servicesError: '',
  services: [],
  availableServices: []
}

export const fetchServices = createAsyncThunk('accountsServices/fetchServices', async () => {
  try {
    const response = await fetch(`/wp-json/orb/v1/services`, {
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

export const getAvailableServices = createAsyncThunk('accountsServices/getAvailableServices', async () => {

  try {
    const response = await fetch(`/wp-json/orb/v1/services/available`, {
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

export const accountsServicesSlice = createSlice({
  name: 'accountsServices',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.servicesLoading = false
        state.servicesError = ''
        state.services = action.payload
      })
      .addCase(getAvailableServices.fulfilled, (state, action) => {
        state.servicesLoading = false
        state.availableServices = action.payload
      })
      .addMatcher(isAnyOf(
        fetchServices.pending,
        getAvailableServices.pending
      ), (state) => {
        state.servicesLoading = true
        state.servicesError = null
      })
      .addMatcher(isAnyOf(
        fetchServices.rejected,
        getAvailableServices.rejected
      ),
        (state, action) => {
          state.servicesLoading = false
          state.servicesError = action.error.message
        });

  }
})


export default accountsServicesSlice;