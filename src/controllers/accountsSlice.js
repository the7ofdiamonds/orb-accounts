import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    accountsLoading: false,
    accountsError: '',
    stripe_customer_id: '',
    msg: '',
};

export const getAccounts = createAsyncThunk('accounts/getAccounts', async () => {
    try {
        // Add stripe customer number on the plugins using stripe (Accounts & Etc.)
        // const { stripe_customer_id } = getState().accountsClient;

        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');

        const response = await fetch(`http://localhost:8080/accounts`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            credentials: "include",
            // body: JSON.stringify({
            //     stripe_customer_id: stripe_customer_id,
            // }
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            throw new Error(errorMessage);
        }
console.log(response.body);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.log(error);
        throw error.message;
    }
});

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isAnyOf(
                getAccounts.pending,
            ), (state) => {
                state.accountsLoading = true;
                state.accountsError = "";
            })
            .addMatcher(isAnyOf(
                getAccounts.fulfilled,
            ), (state, action) => {
                state.accountsLoading = false;
                state.accountsError = null;
                state.msg = action.payload
            })
            .addMatcher(isAnyOf(
                getAccounts.rejected,
            ), (state, action) => {
                state.accountsLoading = false;
                state.accountsError = action.error.message;
            })
    }
});

export default accountsSlice;