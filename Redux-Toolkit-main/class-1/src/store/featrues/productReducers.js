import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[],
}

const productsReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct : (state, action) => {
            state.products.push(action.payload);
        }
    }
})


export default productsReducer.reducer;

export const { addProduct } = productsReducer.actions;