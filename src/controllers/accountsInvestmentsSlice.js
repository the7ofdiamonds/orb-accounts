import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
};

export const accountsInvestmentsSlice = createSlice({
    name: 'investments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
    .addMatcher(isAnyOf(
    ), (state) => {
    })
    .addMatcher(isAnyOf(
    ),
        (state, action) => {
        });
    }
});

export default accountsInvestmentsSlice;