import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedin : false,
    name : "",
    email : "",
    phone : "",
    password : "",
    orders : []
}

export const userSlice  = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName : (state, action) => {
            state.name = action.payload
        },
        setPhone : (state, action) => {
            state.phone = action.payload
        },
        setEmail : (state, action) => {
            state.email = action.payload
        },
        setPassword : (state, action) => {
            state.password = action.payload
        },
        setLogin : (state, action) => {
            state.isLoggedin = action.payload
        },
        setLogout : (state, action) => {
            state.isLoggedin = action.payload
        },
    }
})

export const {setName, setPhone, setEmail, setPassword, setLogin, setLogout} = userSlice.actions

export default userSlice.reducer