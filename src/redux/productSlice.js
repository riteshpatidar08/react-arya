import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//define initail state
const initialState = {
  products: [],
  error: null,
  loading: false,
};

export const fetchProduct = createAsyncThunk('/fetchProduct', async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  } catch (error) {}
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.products = action.payload;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
