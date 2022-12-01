import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isLoggedIn: false,
    credentials: {
        userName: ''
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
            state.error = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.credentials.userName = '';
        },
        signUp(state, action) {
            state.isLoggedIn = true;
            state.credentials.userName = action.payload.userName;
        },
        loginFail(state) {
            state.error = true;
            state.isLoggedIn = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;