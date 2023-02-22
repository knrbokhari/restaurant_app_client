import { configureStore } from '@reduxjs/toolkit';
import manuReducer from '../fetaures/menu/menuSlice';

const store = configureStore({
    reducer: {
        menu: manuReducer
    }
});

const { dispatch } = store;

export { store, dispatch };
