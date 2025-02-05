import React, { useState, useReducer } from 'react';
import axios from 'axios';
function DataFetch() {
  const initialState = {
    loading: false,
    data: null,
  };

  const fetchReducer = (state, action) => {
    if (action.type === 'PENDING') {
      return { loading: true };
    } else if (action.type === 'SUCCESS') {
      return { data: action.payload, loading: false };
    } else {
      state;
    }
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const handleClick = async () => {
    try {
      dispatch({ type: 'PENDING' });
      const res = await axios.get('https://randomuser.me/api/');
      console.log(res.data);
      dispatch({ type: 'SUCCESS', payload: res.data.results });
    } catch (error) {}
  };
  return (
    <div className="mt-16">
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-indigo-600 font-bold text-white rounded-3xl"
      >
        {state.loading ? 'Fetchinng...' : 'Fetch Data'}
      </button>
      <p>{JSON.stringify(state.data)}</p>
    </div>
  );
}

export default DataFetch;
