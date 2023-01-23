import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth : (state, action) => {
            state.value = action.payload
            return
        }
    }
})

export const {setAuth} = authSlice.actions

export default authSlice.reducer