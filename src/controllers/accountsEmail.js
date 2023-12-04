import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    emailLoading: false,
    emailError: '',
    user_email: sessionStorage.getItem('email'),
    first_name: '',
    last_name: '',
};

export const sendQuoteEmail = createAsyncThunk('accountsEmail/sendQuoteEmail',);

export const sendInvoiceEmail = createAsyncThunk('accountsEmail/sendInvoiceEmail',);

export const sendReceiptEmail = createAsyncThunk('accountsEmail/sendReceiptEmail',);

export const sendOnboardingEmail = createAsyncThunk('accountsEmail/sendOnboardingEmail',);

export const accountsEmailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addMatcher(isAnyOf(
        sendQuoteEmail.pending,
        sendInvoiceEmail.pending,
        sendReceiptEmail.pending,
        sendOnboardingEmail.pending
    ), (state) => {
        state.emailLoading = true;
        state.emailError = null;
    })
    .addMatcher(isAnyOf(
        sendQuoteEmail.rejected,
        sendInvoiceEmail.rejected,
        sendReceiptEmail.rejected,
        sendOnboardingEmail.rejected
    ),
        (state, action) => {
            state.emailLoading = false;
            state.emailError = action.error.message;
        });
    }
});

export default accountsEmailSlice;