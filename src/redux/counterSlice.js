import { createSlice } from '@reduxjs/toolkit';

//define initial state

const initialState = {
  count: 0,
  loading: false,
};

//create a slices which handles all the state updation logic of your functionality which you are implementing

//call the createSlice and pass the configuration object to setup the slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: function (state, action) {
      state.count += 1;
    },
    decrement: function (state, action) {
      state.count -= 1;
    },
  },
});

console.log(counterSlice);
//after this we have to connect this slice to store

// counterslices/authSlice/productSlice => store => <app/>
export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
