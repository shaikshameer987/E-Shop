import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedin : false,
    name : "",
    email : "",
    phone : "",
    password : "",
    gender: "",
    profilepic: "",
    orders : [],
    address: {
        houseNo : "",
        city: "",
        state: "",
        pincode: ""
    }
}

export const userSlice  = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser : (state, action) => {
            const {name, email, password} = action.payload
            state.name = name
            state.email = email
            state.password = password
        },
        setName : (state, action) => {
            state.name = action.payload
        },
        setGender : (state, action) => {
            state.gender = action.payload
            console.log(action.payload)
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

export const {setName,setUser, setGender,   setPhone, setEmail, setPassword, setLogin, setLogout} = userSlice.actions

export default userSlice.reducer