import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) =>{
            state.user = action.payload;
        },
        logout: (state) =>{
            state.user = null;  // By this, if we logout, user set to null
        },
    },
});

export const { login, logout} = userSlice.actions;


export const selectUser = (state) => state.user.user; // by this we pull user to the components.


export default userSlice.reducer;