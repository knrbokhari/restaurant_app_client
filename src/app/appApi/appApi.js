import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { baseURL } from '../../axios';

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
