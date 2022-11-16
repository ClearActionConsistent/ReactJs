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

            console.log('login action');
            state.isLoggedIn = true;
            state.credentials.userName = action.payload.userName;
            //somehow to call api and return login status
        },
        logout(state){},
        signin(state, action){}
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;