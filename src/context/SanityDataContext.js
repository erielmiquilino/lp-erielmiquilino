import React, { createContext, useContext } from 'react';
import { useSanityData } from '../hooks/useSanityData';

const SanityDataContext = createContext(null);

export const SanityDataProvider = ({ children }) => {
  const data = useSanityData();

  return (
    <SanityDataContext.Provider value={data}>
      {children}
    </SanityDataContext.Provider>
  );
};

export const useSanity = () => {
  const context = useContext(SanityDataContext);
  if (!context) {
    throw new Error('useSanity must be used within a SanityDataProvider');
  }
  return context;
};
