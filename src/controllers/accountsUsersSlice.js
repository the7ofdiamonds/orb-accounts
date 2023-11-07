import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: '',
    user_login: '',
    user_pass: '',
    user_email: '',
    first_name: '',
    last_name: '',
    client_id: ''
};

export const addClient = createAsyncThunk('users/addClient', async (client_data) => {
    try {
        const response = await fetch('/wp-json/orb/v1/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_data: client_data
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

export const accountsUsersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addClient.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(addClient.fulfilled, (state, action) => {
                state.loading = false
                state.client_id = action.payload
            })
            .addCase(addClient.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default accountsUsersSlice;