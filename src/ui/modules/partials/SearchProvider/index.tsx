"use client";
import React, { createContext, ReactNode, useState } from "react";

export type SearchContextProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

// Create context
export const SearchContext = createContext<SearchContextProps>({
  searchTerm: "",
  setSearchTerm: (term: string) => {},
});

export type SearchProviderProps = {
  children: ReactNode;
};

// Provider component
export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
