import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signin } from './loginAPI';
import jwt_decode from "jwt-decode";

// State - data (init)
const initialState = {
    userName: "",
    email: "",
    token: "",
    logged: false
};
// async (1)
// simple async method (component can call it...)
export const doSigninAsync = createAsyncThunk(
    'login/signin',
    async () => {
        const response = await signin();
        return response.data;
    }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = ""
                    state.logged = false;
                    state.userName= ""
                    state.email=""
          },
    },
    //  async  (3)
    //   happens when async done - callback
    extraReducers: (builder) => {
        builder
            .addCase(doSigninAsync.fulfilled, (state, action) => {
                console.log(action.payload.access)
                if (action.payload.access) {
                    state.token = action.payload.access
                    state.logged = true;
                    state.userName= jwt_decode(action.payload.access).username
                    state.email=jwt_decode(action.payload.access).eeemail
                    // console.log( state.email)
                }
            });
    },
});

// export sync method
export const { logout } = loginSlice.actions;

// export any part of the state
export const selectLogged = (state) => state.login.logged;
export const selectEmail = (state) => state.login.email;
export const selectUserName = (state) => state.login.userName;
export const selectToken = (state) => state.login.token;
// export the reducer to the applicaion
export default loginSlice.reducer;
