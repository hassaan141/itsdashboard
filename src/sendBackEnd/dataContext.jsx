import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [centerData, setCenterData] = useState([]);

  return (
    <DataContext.Provider value={{ centerData, setCenterData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the context
export const useData = () => useContext(DataContext);