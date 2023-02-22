import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../axios';

console.log(baseURL);

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseURL }),
    endpoints: (builder) => ({
        // login
        login: builder.mutation({
            query: (user) => ({
                url: 'api/v1/users/login',
                method: 'POST',
                body: user
            })
        }),

        // register
        register: builder.mutation({
            query: (user) => ({
                url: 'api/v1/users/register',
                method: 'POST',
                body: user
            })
        })
    })
});

export const { useLoginMutation, useRegisterMutation } = appApi;

export default appApi;
