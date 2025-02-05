import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import UseReducer from './components/UseReducer';
import DataFetch from './components/DataFetch';

function App() {
  const [dataChild, setDataChild] = useState('');
  const getDataFromChild = (data) => {
    setDataChild(data);
  };
  return (
    <div className="border-2 border-sky-500 h-96 ">
      <SearchInput getDataFromChild={getDataFromChild} />
      <p>{dataChild}</p>
      <UseReducer/>
      <DataFetch/>
    </div>
  );
}

export default App;
