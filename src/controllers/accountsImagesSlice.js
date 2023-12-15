import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    imagesLoading: false,
    imagesError: '',
    logo_url: '',
};

export const getCompanyLogo = createAsyncThunk('images/getCompanyLogo', async () => {
    try {
        const response = await fetch('/wp-json/orb/images/v1/company/logo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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

export const accountsImagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCompanyLogo.fulfilled, (state, action) => {
                state.imagesLoading = false;
                state.imagesError = '';
                state.logo_url = action.payload
            })
            .addMatcher(isAnyOf(
                getCompanyLogo.pending,
            ), (state) => {
                state.imagesLoading = true;
                state.imagesError = '';
            })
            .addMatcher(isAnyOf(
                getCompanyLogo.rejected,
            ),
                (state, action) => {
                    state.imagesLoading = false;
                    state.imagesError = action.error.message;
                });
    }
});

export default accountsImagesSlice;