import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isLoggedIn: false,
    credentials: {
        userName: ''
    }
};
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action){
            state.isLoggedIn = true;
            state.credentials.userName = action.payload.userName;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.credentials.userName = '';
        },
        signUp(state, action){
            state.isLoggedIn = true;
            state.credentials.userName = action.payload.userName;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;