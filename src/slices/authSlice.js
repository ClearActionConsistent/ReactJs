import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isLoggedIn: false,
  credentials: {
    email: '',
    name: '',
    avatar: '',
    userRoles: [{ admin: false }]
  },
  error: false
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.credentials.email = action.payload.email;
      state.credentials.name = action.payload.name;
      state.credentials.avatar = action.payload.avatar;
      state.credentials.userRoles[0].admin = action.payload.userRoles[0].admin;
      state.error = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.credentials.email = '';
      state.credentials.name = '';
      state.credentials.avatar = '';
      state.credentials.userRoles[0].admin = false;

    },
    signUp(state, action) {
      state.isLoggedIn = true;
      state.credentials.email = action.payload.email;
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