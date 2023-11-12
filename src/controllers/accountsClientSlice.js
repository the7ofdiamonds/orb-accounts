import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    clientLoading: false,
    clientError: '',
    client_id: '',
    stripe_customer_id: '',
    user_email: sessionStorage.getItem('user_email'),
    first_name: '',
    last_name: '',
};

export const addClient = createAsyncThunk('accountsClient/addClient', async (_, { getState }) => {
    const { user_email } = getState().accountsClient;
    const {
        company_name,
        tax_id,
        first_name,
        last_name,
        phone,
        address_line_1,
        address_line_2,
        city,
        state,
        zipcode,
        country
    } = getState().accountsCustomer;

    try {
        const response = await fetch('/wp-json/orb/v1/users/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name: company_name,
                tax_id: tax_id,
                first_name: first_name,
                last_name: last_name,
                user_email: user_email,
                phone: phone,
                address_line_1: address_line_1,
                address_line_2: address_line_2,
                city: city,
                state: state,
                zipcode: zipcode,
                country: country
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

export const getClient = createAsyncThunk('accountsClient/getClient', async (_, { getState }) => {
    const { user_email } = getState().accountsClient;
    const encodedEmail = encodeURIComponent(user_email);

    try {
        const response = await fetch(`/wp-json/orb/v1/users/client/${encodedEmail}`, {
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

export const accountsClientSlice = createSlice({
    name: 'accountsClient',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addClient.fulfilled, (state, action) => {
                state.clientLoading = false
                state.clientError = ''
                state.client_id = action.payload.client_id
                state.stripe_customer_id = action.payload.stripe_customer_id
            })
            .addCase(getClient.fulfilled, (state, action) => {
                state.clientLoading = false;
                state.clientError = '';
                state.client_id = action.payload.id
                state.first_name = action.payload.first_name
                state.last_name = action.payload.last_name
                state.stripe_customer_id = action.payload.stripe_customer_id
            })
            .addMatcher(isAnyOf(
                addClient.pending,
                getClient.pending,
            ), (state) => {
                state.clientLoading = true;
                state.clientError = null;
            })
            .addMatcher(isAnyOf(
                addClient.rejected,
                getClient.rejected,
            ),
                (state, action) => {
                    state.clientLoading = false;
                    state.clientError = action.error.message;
                });
    }
})

export default accountsClientSlice;