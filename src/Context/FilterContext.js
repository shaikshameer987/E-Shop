import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "./ProductsContext";

const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const {products} = useProducts()
    const initialState = {
        filteredProducts : [],
        sort : "",
        brands: [],
        minPrice : 0,
        maxPrice: Infinity,
        size: [] 
    }
    const [state, setState] = useState(initialState)

    useEffect(() => {
        setState({
            filteredProducts : [...products],
            sort : "Price: Low to High",
            brands: [],
            minPrice : 0,
            maxPrice: Infinity,
            size: [] 
        })
    },[products])

    const dispatch = (action) => {
        switch(action.type){
            case "category" : {
                let list = [...products].filter((item) => item.category.toLowerCase().includes(action.payload))
                setState({...state, 
                            filteredProducts: list, 
                            sort : "Price: Low to High", 
                            brands: [],
                            size: []
                        })
                break
            }
            case "sort" : {
                setState({...state, sort : action.payload})
                break
            }
            case "pricerange" : {
                console.log(action)
                setState({...state, minPrice : action.minPrice, maxPrice: action.maxPrice})
                break
            }
            case "addbrand" : {
                const brands = [...state.brands, action.payload]
                setState({...state, brands : brands})
                break
            }
            case "removebrand" : {
                const brands = state.brands.filter((item) => item !== action.payload)
                setState({...state, brands : brands})
                break
            }
            case "addsize" : {
                let tempSize = [...state.size, +action.payload]
                setState({...state, size : tempSize})
                break
            }
            case "removesize" : {
                const tempSize = state.size.filter((size) => size !== +action.payload)
                setState({...state, size : tempSize})
                break
            }
            default : return state
        }
    }

    return  <FilterContext.Provider value={{state, dispatch}}>
            {children}
            </FilterContext.Provider>
}

export const useFilteredProducts = () => useContext(FilterContext)


