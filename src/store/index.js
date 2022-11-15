import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialAuthState = {
    isLoggedIn : false, 
    credentials: {
        useName: ''
    }
};
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, payload){
            state.credentials.userName = payload.userName;
        },
        logout(state){},
        signin(state, payload){}
    }
});

export const authActions = authSlice.actions;

const store = configureStore({
    reducer: authSlice.reducer
});

export default store;

/*
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';

import authReducer from './../slices/authSlice';

const reducer = combineReducers({
    auth: authReducer
});

//blacklist: After render state will reset to init
//whitelist: After render state will not update your current state
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['auth'],
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store;
*/