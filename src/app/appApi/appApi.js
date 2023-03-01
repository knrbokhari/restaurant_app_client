import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

// get Bearer token from Cookie
const token = `Bearer ${Cookies.get('token')}`;

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        // login
        login: builder.mutation({
            query: (user) => ({
                url: 'api/v1/users/login',
                method: 'POST',
                body: user,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),

        // creating product
        createProduct: builder.mutation({
            query: (product) => ({
                url: 'api/v1/products/create',
                body: product,
                method: 'POST',
                headers: { Authorization: token }
            })
        }),

        // add to cart
        addToCart: builder.mutation({
            query: (cartInfo) => ({
                url: 'api/v1/cart/add-to-cart',
                headers: { Authorization: token },
                body: cartInfo,
                method: 'POST'
            })
        })
    })
});

export const { useLoginMutation, useCreateProductMutation, useAddToCartMutation } = appApi;

export default appApi;
