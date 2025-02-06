// import TodoSlice from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";


const store = configureStore({
    reducer: {
        task: todoSlice,
    }
})

export default store;

