import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("filter/fetchProducts", async () => {
    return fetch("Products.json")
                .then((res) => res.json())
})

const initialState = {
    allProducts: [],
    category: null,
    filteredProducts : [],
    sort : "",
    brands: [],
    minPrice : 0,
    maxPrice: Infinity,
    size: [],
    singleProduct: {}
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        category: (state,action) => {
            let cat = action.payload === "all" ? "" : action.payload
            let list = [...state.allProducts].filter((item) => item.category.toLowerCase().includes(cat))
            state.filteredProducts = list
            state.category = action.payload
            state.sort = "Price: Low to High"
            state.brands = []
            state.size = []
            state.minPrice = 0
            state.maxPrice = Infinity
        },
        sort: (state, action) => {
            state.sort = action.payload
        },
        pricerange : (state, action) => {
            state.minPrice = action.payload.minPrice
            state.maxPrice = action.payload.maxPrice
        },
        addbrand : (state, action) => {
            state.brands.push(action.payload)
        },
        removebrand : (state, action) => {
            const updatedBrands = state.brands.filter((item) => item !== action.payload)
            state.brands = updatedBrands
        },
        addsize : (state, action) => {
            state.size.push(action.payload)
        },
        removesize : (state, action) => {
            const updatedSize = state.size.filter((size) => size !== +action.payload)
            state.size = updatedSize
        },
        setall : (state) => {
            state.filteredProducts = [...state.allProducts]
        },
        singleproduct : (state, action) => {
            state.singleProduct = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            let allItems = action.payload
            allItems.forEach((item) => item.qty = 1)
            state.allProducts = allItems
            if(state.filteredProducts.length === 0){
                let cat = state.category === null || state.category === "all" ? "" : state.category
                state.filteredProducts = allItems.filter((item) => item.category.includes(cat))
            }
        })
    }
})

export const {category, sort, pricerange, addbrand, removebrand, addsize, removesize, setall, singleproduct} = filterSlice.actions

export default filterSlice.reducer