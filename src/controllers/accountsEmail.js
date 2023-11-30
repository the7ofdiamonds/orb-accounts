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