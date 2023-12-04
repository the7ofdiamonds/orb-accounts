import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
};

export const accountsProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isAnyOf(
                // getProducts.pending,
                // getProduct.pending
            ), (state) => {
                state.productsLoading = true;
                state.productsError = null;
            })
            .addMatcher(isAnyOf(
                // getProducts.rejected,
                // getProduct.rejected
            ),
                (state, action) => {
                    state.productsLoading = false;
                    state.productsError = action.error.message;
                });
    }
});

export default accountsProductsSlice;