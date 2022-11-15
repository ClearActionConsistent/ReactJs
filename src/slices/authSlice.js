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
            console.log(payload.payload.userName);
            state.credentials.userName = action.payload.userName;
        },
        logout(state){},
        signin(state, action){}
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;