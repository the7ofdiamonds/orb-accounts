import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    user_email: sessionStorage.getItem('email'),
    customerLoading: false,
    customerError: '',
    customer_id: '',
    stripe_customer_id: '',
    company_name: '',
    tax_id: '',
    first_name: '',
    last_name: '',
    phone: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
};

export const addCustomer = createAsyncThunk('customer/addCustomer', async (_, { getState }) => {
    try {
        const {
            customer_id,
            user_email
        } = getState().accountsClient;
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

        const response = await fetch('/wp-json/orb/customer/v1/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customer_id: customer_id,
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

export const getCustomer = createAsyncThunk('customer/getCustomer', async (stripeCustomerID, { getState }) => {
    try {
        const { stripe_customer_id } = getState().accountsClient;

        const response = await fetch(`/wp-json/orb/customer/v1/${stripeCustomerID ? stripeCustomerID : stripe_customer_id}`, {
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

export const updateCustomer = createAsyncThunk('customer/updateCustomer', async (_, { getState }) => {
    try {
        const {
            client_id,
            user_email,
            stripe_customer_id
        } = getState().accountsClient;
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

        const response = await fetch(`/wp-json/orb/customer/v1/update/${stripe_customer_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customer_id: customer_id,
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
        })

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

export const accountsCustomerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        updateCompanyName: (state, action) => {
            state.company_name = action.payload;
        },
        updateTaxID: (state, action) => {
            state.tax_id = action.payload;
        },
        updateFirstName: (state, action) => {
            state.first_name = action.payload;
        },
        updateLastName: (state, action) => {
            state.last_name = action.payload;
        },
        updateEmail: (state, action) => {
            state.user_email = action.payload;
        },
        updatePhone: (state, action) => {
            state.phone = action.payload;
        },
        updateAddress: (state, action) => {
            state.address_line_1 = action.payload;
        },
        updateAddress2: (state, action) => {
            state.address_line_2 = action.payload;
        },
        updateCity: (state, action) => {
            state.city = action.payload;
        },
        updateState: (state, action) => {
            state.state = action.payload;
        },
        updateZipcode: (state, action) => {
            state.zipcode = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCustomer.fulfilled, (state, action) => {
                state.customerLoading = false
                state.customer_error = null
                state.stripe_customer_id = action.payload
            })
            .addCase(getCustomer.fulfilled, (state, action) => {
                state.customerLoading = false
                state.customer_error = null;
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
            .addCase(updateCustomer.fulfilled, (state, action) => {
                state.customerLoading = false
                state.customer_error = null
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
                addCustomer.pending,
                getCustomer.pending,
                updateCustomer.pending
            ), (state) => {
                state.clientLoading = true;
                state.clientError = null;
            })
            .addMatcher(isAnyOf(
                addCustomer.rejected,
                getCustomer.rejected,
                updateCustomer.rejected
            ),
                (state, action) => {
                    state.clientLoading = false;
                    state.clientError = action.error.message;
                });
    }
})

export const {
    updateEmail,
    updatePhone,
    updateCompanyName,
    updateTaxID,
    updateFirstName,
    updateLastName,
    updateAddress,
    updateAddress2,
    updateCity,
    updateState,
    updateZipcode,
} = accountsCustomerSlice.actions;

export default accountsCustomerSlice;