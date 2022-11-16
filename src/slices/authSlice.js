import {createSlice} from '@reduxjs/toolkit';

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
        login(state, action){
            state.isLoggedIn = true;
            state.credentials.userName = action.payload.userName;
        },
        logout(state){},
        signUp(state, action){
            state.isLoggedIn = true;
            state.credentials.userName = action.payload.userName;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;