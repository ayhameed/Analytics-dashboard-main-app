"use client"
import { createContext, useContext, useState } from 'react';

// Create context
const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: (term: string) => {},
});

// Provider component
export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook to use the context
export const useSearch = () => useContext(SearchContext);
