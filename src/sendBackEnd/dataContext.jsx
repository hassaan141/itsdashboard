import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [centerData, setCenterData] = useState([]);
  const [responseData, setResponseData] = useState(null);
  const [congestionEvent, setCongestionEvent] = useState(null); // Add state for tracking congestion event

  return (
    <DataContext.Provider value={{ centerData, setCenterData, responseData, setResponseData, congestionEvent, setCongestionEvent }}>
      {children}
    </DataContext.Provider>
  );
};
// Custom hook to use the context
export const useData = () => useContext(DataContext);