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
        }),
        // remove from cart
        removeFromCart: builder.mutation({
            query: (body) => ({
                url: `api/v1/cart/remove-from-cart/${body.cartId}`,
                headers: { Authorization: token },
                method: 'PUT'
            })
        }),

        // increase cart
        increaseCartProduct: builder.mutation({
            query: (body) => ({
                url: `api/v1/cart/increase-cart/${body.cartId}`,
                headers: { Authorization: token },
                method: 'PUT'
            })
        }),

        // decrease cart
        decreaseCartProduct: builder.mutation({
            query: (body) => ({
                url: `api/v1/cart/decrease-cart/${body.cartId}`,
                headers: { Authorization: token },
                method: 'PUT'
            })
        }),

        // create order
        createOrder: builder.mutation({
            query: (body) => ({
                url: 'api/v1/orders/create',
                headers: { Authorization: token },
                method: 'POST',
                body
            })
        })
    })
});

export const {
    useLoginMutation,
    useCreateProductMutation,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useIncreaseCartProductMutation,
    useDecreaseCartProductMutation,
    useCreateOrderMutation
} = appApi;

export default appApi;
