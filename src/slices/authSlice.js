import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isLoggedIn: false,
    credentials: {
        userName: '',
        name: '',
        avatar: ''
    },
    error: false
};
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
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
        signUp(state, action) {
            state.isLoggedIn = true;
            state.credentials.userName = action.payload.userName;
            state.credentials.name = action.payload.name;
            state.credentials.avatar = action.payload.avatar;
        },
        loginFail(state) {
            state.error = true;
            state.isLoggedIn = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;