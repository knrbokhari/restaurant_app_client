import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'fetaures/user/userSlice';
import manuReducer from '../fetaures/menu/menuSlice';

//persit our store
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import appApi from './appApi/appApi';

//reducers
const reducer = combineReducers({
    menu: manuReducer,
    user: userReducer,
    [appApi.reducerPath]: appApi.reducer
});

const persistConfig = {
    key: 'root',
    storage,
    blackList: [appApi.reducerPath, 'user']
};

// persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// creating the store

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware]
});

export default store;
