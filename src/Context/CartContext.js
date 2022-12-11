import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM" : {
            let index = state.findIndex((i) => i.id === action.data.id)
            return index === -1 ? [...state, action.data] : state
        }
        case "REMOVE_ITEM" : {
            return state.filter((i) => i.id !== action.data.id)
        }
        case "CHANGE_QTY" : {
            let index = state.findIndex((i) => i.id === action.data.id)
            state[index] = action.data
            return [...state]
        }
        default : {
            return state
        }
    }
}

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, dispatch] = useReducer(reducer, [])

    return  <CartContext.Provider value={{cartItems, dispatch}}>
                {children}
            </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

