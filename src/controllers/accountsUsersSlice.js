import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
    user_email: sessionStorage.getItem('email'),
    userLoading: false,
    userError: '',
    user_id: '',
    stripe_customer_id: '',
    name: '',
    first_name: '',
    last_name: '',
    phone: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    shipping_name: '',
    shipping_first_name: '',
    shipping_last_name: '',
    shipping_phone: '',
    shipping_address_line_1: '',
    shipping_address_line_2: '',
    shipping_city: '',
    shipping_state: '',
    shipping_zipcode: '',
    shipping_country: '',
    company_name: '',
    tax_exempt: '',
    tax_id_type: '',
    tax_id: '',
    tax_ids: ''
};

export const addUser = createAsyncThunk('user/addUser', async (_, { getState }) => {
    try {
        const {
            first_name,
            last_name,
            user_email,
            phone,
            address_line_1,
            address_line_2,
            city,
            state,
            zipcode,
            country,
            shipping_first_name,
            shipping_last_name,
            shipping_phone,
            shipping_address_line_1,
            shipping_address_line_2,
            shipping_city,
            shipping_state,
            shipping_zipcode,
            shipping_country,
            company_name,
            tax_exempt,
            tax_id_type,
            tax_id,
        } = getState().accountsUsers;

        const response = await fetch('/wp-json/orb/user/v1/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                user_email: user_email,
                phone: phone,
                address_line_1: address_line_1,
                address_line_2: address_line_2,
                city: city,
                state: state,
                zipcode: zipcode,
                country: country,
                shipping_first_name: shipping_first_name,
                shipping_last_name: shipping_last_name,
                shipping_phone: shipping_phone,
                shipping_address_line_1: shipping_address_line_1,
                shipping_address_line_2: shipping_address_line_2,
                shipping_city: shipping_city,
                shipping_state: shipping_state,
                shipping_zipcode: shipping_zipcode,
                shipping_country: shipping_country,
                company_name: company_name,
                tax_exempt: tax_exempt,
                tax_id_type: tax_id_type,
                tax_id: tax_id,
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

export const getUser = createAsyncThunk('user/getUser', async (_, { getState }) => {
    try {
        const { user_email } = getState().accountsUsers;
        const encodedEmail = encodeURIComponent(user_email);

        const response = await fetch(`/wp-json/orb/users/v1/${encodedEmail}`, {
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

export const updateUser = createAsyncThunk('user/updateUser', async (_, { getState }) => {
    try {
        const {
            stripe_customer_id,
            first_name,
            last_name,
            user_email,
            phone,
            address_line_1,
            address_line_2,
            city,
            state,
            zipcode,
            country,
            shipping_first_name,
            shipping_last_name,
            shipping_phone,
            shipping_address_line_1,
            shipping_address_line_2,
            shipping_city,
            shipping_state,
            shipping_zipcode,
            shipping_country,
            company_name,
            tax_exempt,
            tax_id_type,
            tax_id,
        } = getState().accountsUsers;

        const response = await fetch(`/wp-json/orb/user/v1/update/${stripe_customer_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                user_email: user_email,
                phone: phone,
                address_line_1: address_line_1,
                address_line_2: address_line_2,
                city: city,
                state: state,
                zipcode: zipcode,
                country: country,
                shipping_first_name: shipping_first_name,
                shipping_last_name: shipping_last_name,
                shipping_phone: shipping_phone,
                shipping_address_line_1: shipping_address_line_1,
                shipping_address_line_2: shipping_address_line_2,
                shipping_city: shipping_city,
                shipping_state: shipping_state,
                shipping_zipcode: shipping_zipcode,
                shipping_country: shipping_country,
                company_name: company_name,
                tax_exempt: tax_exempt,
                tax_id_type: tax_id_type,
                tax_id: tax_id,
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

export const addTaxID = createAsyncThunk('user/addTaxID', async (tax_id_data, { getState }) => {
    try {
        const {
            stripe_customer_id,
        } = getState().accountsUsers;

        const response = await fetch(`/wp-json/orb/user/v1/add/tax-id/${stripe_customer_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tax_id_type: tax_id_data.tax_id_type,
                tax_id: tax_id_data.tax_id,
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

export const deleteTaxID = createAsyncThunk('user/deleteTaxID', async (stripe_tax_id, { getState }) => {
    try {
        const {
            stripe_customer_id,
        } = getState().accountsUsers;

        const response = await fetch(`/wp-json/orb/user/v1/delete/tax-id/${stripe_customer_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stripe_tax_id: stripe_tax_id,
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

export const accountsUsersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFirstName: (state, action) => {
            state.first_name = action.payload;
        },
        updateLastName: (state, action) => {
            state.last_name = action.payload;
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
        updateCountry: (state, action) => {
            state.country = action.payload;
        },
        updateShippingFirstName: (state, action) => {
            state.shipping_first_name = action.payload;
        },
        updateShippingLastName: (state, action) => {
            state.shipping_last_name = action.payload;
        },
        updateShippingPhone: (state, action) => {
            state.shipping_phone = action.payload;
        },
        updateShippingAddress: (state, action) => {
            state.shipping_address_line_1 = action.payload;
        },
        updateShippingAddress2: (state, action) => {
            state.shipping_address_line_2 = action.payload;
        },
        updateShippingCity: (state, action) => {
            state.shipping_city = action.payload;
        },
        updateShippingState: (state, action) => {
            state.shipping_state = action.payload;
        },
        updateShippingZipcode: (state, action) => {
            state.shipping_zipcode = action.payload;
        },
        updateShippingCountry: (state, action) => {
            state.shipping_country = action.payload;
        },
        updateCompanyName: (state, action) => {
            state.company_name = action.payload;
        },
        updateTaxExempt: (state, action) => {
            state.tax_exempt = action.payload;
        },
        updateTaxIDType: (state, action) => {
            state.tax_id_type = action.payload;
        },
        updateTaxID: (state, action) => {
            state.tax_id = action.payload;
        },
        splitName: (state, action) => {
            const fullName = action.payload;
            const [firstName, lastName] = fullName.split(' ');

            state.first_name = firstName;
            state.last_name = lastName;
        },
        splitShippingName: (state, action) => {
            const fullName = action.payload;
            const [firstName, lastName] = fullName.split(' ');

            state.shipping_first_name = firstName;
            state.shipping_last_name = lastName;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.fulfilled, (state, action) => {
                state.userLoading = false
                state.userError = ''
                state.user_id = action.payload.user_id
                state.stripe_customer_id = action.payload.stripe_customer_id
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.userLoading = false;
                state.userError = '';
                state.stripe_customer_id = action.payload.id
                state.name = action.payload.name
                if (action.payload && action.payload.address) {
                    state.address_line_1 = action.payload.address.line1
                    state.address_line_2 = action.payload.address.line2
                    state.city = action.payload.address.city
                    state.state = action.payload.address.state
                    state.zipcode = action.payload.address.postal_code
                    state.country = action.payload.address.country
                }
                if (action.payload && action.payload.shipping) {
                    state.shipping_name = action.payload.shipping.name
                    state.shipping_phone = action.payload.shipping.phone
                    state.shipping_address_line_1 = action.payload.shipping.address.line1
                    state.shipping_address_line_2 = action.payload.shipping.address.line2
                    state.shipping_city = action.payload.shipping.address.city
                    state.shipping_state = action.payload.shipping.address.state
                    state.shipping_zipcode = action.payload.shipping.address.postal_code
                    state.shipping_country = action.payload.shipping.address.country
                }
                state.email = action.payload.email
                state.phone = action.payload.phone
                state.company_name = action.payload.metadata.company_name
                state.tax_exempt = action.payload.tax_exempt

                if (action.payload.tax_ids) {
                    state.tax_ids = action.payload.tax_ids.data
                }
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.userLoading = false;
                state.userError = '';
                state.stripe_customer_id = action.payload.id;
                state.company_name = action.payload.name;
                state.first_name = action.payload.first_name;
                state.last_name = action.payload.last_name;
                if (action.payload && action.payload.address) {
                    state.address_line_1 = action.payload.address.line1
                    state.address_line_2 = action.payload.address.line2
                    state.city = action.payload.address.city
                    state.state = action.payload.address.state
                    state.zipcode = action.payload.address.postal_code
                    state.country = action.payload.address.country
                }
                if (action.payload && action.payload.shipping) {
                    state.shipping_address_line_1 = action.payload.shipping.address.line1
                    state.shipping_address_line_2 = action.payload.shipping.address.line2
                    state.shipping_city = action.payload.shipping.address.city
                    state.shipping_state = action.payload.shipping.address.state
                    state.shipping_zipcode = action.payload.shipping.address.postal_code
                    state.shipping_country = action.payload.shipping.address.country
                }
                state.email = action.payload.email
                state.phone = action.payload.phone
            })
            .addMatcher(isAnyOf(
                addUser.pending,
                getUser.pending,
                updateUser.pending
            ), (state) => {
                state.userLoading = true;
                state.userError = null;
            })
            .addMatcher(isAnyOf(
                addUser.rejected,
                getUser.rejected,
                updateUser.rejected
            ),
                (state, action) => {
                    state.userLoading = false;
                    state.userError = action.error.message;
                });
    }
});

export const {
    updateFirstName,
    updateLastName,
    updatePhone,
    updateAddress,
    updateAddress2,
    updateCity,
    updateState,
    updateZipcode,
    updateCountry,
    updateShippingFirstName,
    updateShippingLastName,
    updateShippingPhone,
    updateShippingAddress,
    updateShippingAddress2,
    updateShippingCity,
    updateShippingState,
    updateShippingZipcode,
    updateShippingCountry,
    updateCompanyName,
    updateTaxExempt,
    updateTaxIDType,
    updateTaxID,
    splitName,
    splitShippingName
} = accountsUsersSlice.actions;

export default accountsUsersSlice;