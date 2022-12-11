import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "./ProductsContext";

const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const {products} = useProducts()
    const initialState = {
        filteredProducts : [],
        sort :"Price: Low to High"
    }
    const [state, setState] = useState(initialState)

    useEffect(() => {
        setState({filteredProducts: products, sort :"Price: Low to High"})
    },[products])

    const dispatch = (action) => {
        switch(action.type){
            case "category" : {
                let categoryType = action.payload
                let list = products.filter((item) => item.category.toLowerCase().includes(categoryType))
                if(categoryType === "men"){
                    list = list.filter((item) => !(item.category.toLowerCase().includes("women")))
                }
                if(categoryType === "all"){
                    list = products.sort((a,b) => a.price - b.price)
                }
                setState({...state, filteredProducts: list.sort((a,b) => a.price - b.price), sort : "Price: Low to High"})
                break
            }
            case "sort" : {
                let sortType = action.payload
                let sortedProducts
                if(sortType === "Price: Low to High"){
                    sortedProducts = state.filteredProducts.sort((a,b) => a.price - b.price)
                }else if(sortType === "Price: High to Low"){
                    sortedProducts = state.filteredProducts.sort((a,b) => b.price - a.price)
                }
                setState({...state, filteredProducts: sortedProducts})
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