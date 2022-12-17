import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    products: [],
    error: ""
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
    return fetch("Products.json")
                .then((res) => res.json())
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.loading = false
            let data = action.payload
            data.forEach((item) => item.qty = 1)
            state.products = data
            state.error = ""
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})

export default productsSlice.reducer