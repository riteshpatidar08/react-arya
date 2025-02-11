import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import UseReducer from './components/UseReducer';
import DataFetch from './components/DataFetch';
import Increment from './components/Increment';
import Counter from './components/Increment';
import Navbar from './components/Navbar';
import { fetchProduct } from './redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <Navbar />
      <Counter />
    </>
  );
}

export default App;
