import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit'

const initialState = {
  serviceLoading: false,
  serviceError: '',
  service_id: '',
  title: '',
  price: '',
  description: '',
  content: '',
  features: '',
  onboarding_link: '',
  icon: '',
  action_word: '',
  slug: '',
  price_id: '',
  services: ''
}

export const fetchService = createAsyncThunk('service/fetchService', async () => {
  try {
    const response = await fetch(`/wp-json/orb/service/v1/${serviceSlug}`, {
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

export const fetchServices = createAsyncThunk('service/fetchServices', async () => {
  try {
    const response = await fetch(`/wp-json/orb/services/v1/all`, {
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
  name: 'services',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchService.fulfilled, (state, action) => {
        state.serviceLoading = false;
        state.serviceError = '';
        state.service_id = action.payload.service_id
        state.title = action.payload.title
        state.price = action.payload.price
        state.description = action.payload.description
        state.content = action.payload.content
        state.features = action.payload.features
        state.onboarding_link = action.payload.onboarding_link
        state.icon = action.payload.icon
        state.action_word = action.payload.action_word
        state.slug = action.payload.slug
        state.price_id = action.payload.price_id
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.serviceLoading = false;
        state.serviceError = '';
        state.services = action.payload
      })
      .addMatcher(isAnyOf(
        fetchService.pending,
        fetchServices.pending,
      ), (state) => {
        state.serviceLoading = true;
        state.serviceError = null;
      })
      .addMatcher(isAnyOf(
        fetchService.rejected,
        fetchServices.rejected,
      ),
        (state, action) => {
          state.serviceLoading = false;
          state.serviceError = action.error.message;
        });
  }
})


export default accountsServicesSlice;