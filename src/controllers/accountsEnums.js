import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    enumsLoading: false,
    enumsError: '',
    taxIDInfo: '',
};

export const getCountries = createAsyncThunk('enums/getCountries', async () => {
    try {
        const response = await fetch(`/wp-json/orb/enums/v1/countries`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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

export const getTaxIDInfo = createAsyncThunk('enums/getTaxIDInfo', async () => {
    try {
        const response = await fetch(`/wp-json/orb/enums/v1/countries/tax-id`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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

export const accountsEnumsSlice = createSlice({
    name: 'enums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCountries.fulfilled, (state, action) => {
                state.enumsLoading = true;
                state.enumsError = '';
                state.countries = action.payload
            })
            .addCase(getTaxIDInfo.fulfilled, (state, action) => {
                state.enumsLoading = true;
                state.enumsError = '';
                state.taxIDInfo = action.payload
            })
            .addMatcher(isAnyOf(
                getTaxIDInfo.pending,
                getCountries.pending
            ), (state) => {
                state.enumsLoading = true;
                state.enumsError = null;
            })
            .addMatcher(isAnyOf(
                getTaxIDInfo.rejected,
                getCountries.rejected
            ),
                (state, action) => {
                    state.enumsLoading = false;
                    state.enumsError = action.error.message;
                });
    }
});

export default accountsEnumsSlice;