import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('Products.json')
            .then((res) => {
                return res.json()
            }).then((res) => {
                res.forEach((o) => o.qty = 1)
                setProducts(res)
            })
    },[])
    return  <ProductContext.Provider value={{products}}>
            {children}
            </ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext)