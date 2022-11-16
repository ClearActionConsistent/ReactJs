import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';

import countReducer from './../slices/countSlice';
import popupReducer from './../slices/popupSlice'
import authReducer from './../slices/authSlice';

const reducer = combineReducers({
    count: countReducer,
    popup: popupReducer,
    auth: authReducer
});

//blacklist: After render state will reset to init
//whitelist: After render state will not update your current state
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['count', 'popup', 'auth'],
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store;