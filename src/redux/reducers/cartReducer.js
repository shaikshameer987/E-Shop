import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem : (state, action) => {
            let index = state.cartItems.findIndex((i) => i.id === action.payload.id)
            if(index === -1){
                state.cartItems.push(action.payload)
            }
        },
        removeItem : (state,action) => {
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id)
        },
        changeQty : (state,action) => {
            let index = state.cartItems.findIndex((i) => i.id === action.payload[0].id)
            state.cartItems[index].qty = action.payload[1]  
        }
    }
})

export const {addItem, removeItem, changeQty} = cartSlice.actions

export default cartSlice.reducer