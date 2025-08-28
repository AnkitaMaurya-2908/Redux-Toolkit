import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state,action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.loading = false;
            state.items = action.payload;
        })
         builder.addCase(fetchProducts.rejected, (state,action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer