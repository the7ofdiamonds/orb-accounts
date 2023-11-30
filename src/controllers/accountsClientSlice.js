import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    clientLoading: false,
    clientError: '',
    client_id: '',
    stripe_customer_id: '',
    user_email: sessionStorage.getItem('email'),
    first_name: '',
    last_name: '',
};

export const addClient = createAsyncThunk('client/addClient', async (_, { getState }) => {
    try {
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

        const response = await fetch('/wp-json/orb/user/client/v1/add', {
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

export const getClient = createAsyncThunk('client/getClient', async (_, { getState }) => {
    try {
        const { user_email } = getState().accountsClient;
        const encodedEmail = encodeURIComponent(user_email);

        const response = await fetch(`/wp-json/orb/user/client/v1/${encodedEmail}`, {
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

export const updateClient = createAsyncThunk('client/updateClient');

export const accountsClientSlice = createSlice({
    name: 'client',
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
            .addCase(updateClient.fulfilled, (state, action) => {
                state.clientLoading = false;
                state.clientError = '';
                state.stripe_customer_id = action.payload.id;
                state.company_name = action.payload.name;
                state.first_name = action.payload.first_name;
                state.last_name = action.payload.last_name;
                state.address_line_1 = action.payload.address.line1
                state.address_line_2 = action.payload.address.line2
                state.city = action.payload.address.city
                state.state = action.payload.address.state
                state.zipcode = action.payload.address.postal_code
                state.email = action.payload.email
                state.phone = action.payload.phone
             })
            .addMatcher(isAnyOf(
                addClient.pending,
                getClient.pending,
                updateClient.pending
            ), (state) => {
                state.clientLoading = true;
                state.clientError = null;
            })
            .addMatcher(isAnyOf(
                addClient.rejected,
                getClient.rejected,
                updateClient.rejected
            ),
                (state, action) => {
                    state.clientLoading = false;
                    state.clientError = action.error.message;
                });
    }
})

export default accountsClientSlice;