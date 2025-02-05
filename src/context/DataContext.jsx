import { createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  console.log(children);
  const username = 'John with context';
  const email = 'abc@gmail.com';
  return (
    <DataContext.Provider value={{ username, email }}>
      {children}
    </DataContext.Provider>
  );
};
