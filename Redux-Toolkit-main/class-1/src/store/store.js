import { configureStore } from '@reduxjs/toolkit';
import counterReducers from './featrues/counterReducers';
import productReducers from './featrues/productReducers';

const store = configureStore({
    reducer: {
        counter: counterReducers,
        products:productReducers
        




    }
})

export default store;