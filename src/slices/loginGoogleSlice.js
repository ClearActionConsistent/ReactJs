import { createSlice } from '@reduxjs/toolkit';

const initialLoginGoogleState = {
    isLoggedIn: false,
    credentials: {
        userName: '',
        name: '',
        avatar: ''
    },
    error: false
};

const LoginGoogleSlice = createSlice({
    name: 'loginGoogle',
    initialState: initialLoginGoogleState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.credentials.userName = action.payload.userName;
            state.credentials.name = action.payload.name;
            state.credentials.avatar = action.payload.avatar;
            state.error = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.credentials.userName = '';
            state.credentials.name = '';
            state.credentials.avatar = '';
        },
        loginFail(state) {
            state.error = true;
            state.isLoggedIn = false;
        }
    }
});

export const loginGoogleActions = LoginGoogleSlice.actions;

export default LoginGoogleSlice.reducer;