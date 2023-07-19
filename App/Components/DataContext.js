import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [dataArray, setDataArray] = useState([]);

  const setData = data => {
    setDataArray(data);
  };

  return (
    <DataContext.Provider value={{dataArray, setData}}>
      {children}
    </DataContext.Provider>
  );
};
