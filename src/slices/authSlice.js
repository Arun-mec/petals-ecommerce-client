import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthCredentials: (state, action) => {
            state.auth = action.payload;
            localStorage.setItem("auth", JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.auth = null;
            localStorage.setItem("auth", JSON.stringify(action.payload));
        }
    }
});

export const { setAuthCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
