import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    
}

const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counter += action.payload
            // state.counter = state.counter + action.payload
            
        },
        decrement: (state, action) => {
            state.counter -= action.payload
        }
    }
})

export default counterReducer.reducer;

export const { increment,decrement } = counterReducer.actions;