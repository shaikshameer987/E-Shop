import { createContext, useContext, useReducer } from "react";

const SearchContext = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case "setState" : {
            return action.data
        } 
        default : return state
    }
}

export const SearchProvider = ({children}) => {
    const [searchValue, dispatch] = useReducer(reducer, "")

    return  <SearchContext.Provider value={{searchValue, dispatch}}>
            {children}
            </SearchContext.Provider>
}

export const useSearch = () => useContext(SearchContext)