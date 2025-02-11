import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    count: counterReducer,
    product: productReducer,
  },
});

export default store;
