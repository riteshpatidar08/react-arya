import React, { useState } from 'react';

function SearchInput({ getDataFromChild }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    getDataFromChild(inputValue);
  };
  return (
    <div className="m-10 p-2 border-2 border-red-500 h-48">
      <h1 className="text-3xl font-bold">Child</h1>
      <form>
        <input
          onChange={handleChange}
          className="p-4 border w-96 rounded-4xl"
          type="text"
        />
      </form>
      <p>{inputValue}</p>
    </div>
  );
}

export default SearchInput;
