import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'fetaures/user/userSlice';
import manuReducer from '../fetaures/menu/menuSlice';

const store = configureStore({
    reducer: {
        menu: manuReducer,
        user: userReducer
    }
});

const { dispatch } = store;

export { store, dispatch };
