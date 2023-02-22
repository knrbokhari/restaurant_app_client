// types
import { createSlice } from '@reduxjs/toolkit';
import appApi from 'app/appApi/appApi';

// initial state
const initialState = null;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.login.matchFulfilled, (_, { payload }) => payload.user);
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
