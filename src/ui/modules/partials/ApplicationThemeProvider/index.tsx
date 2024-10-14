"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

export type ApplicationThemeContextProps = {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
};

export const ApplicationThemeContext = createContext<ApplicationThemeContextProps | undefined>(
  undefined,
);

export type ApplicationProviderProps = {
  children: ReactNode;
};

export const ApplicationThemeProvider = ({ children }: ApplicationProviderProps) => {
  const [isDarkMode, setDarkMode] = useState(true); // Default to true

  useEffect(() => {
    // Check localStorage only on the client side
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme ? savedTheme === "dark" : true);
  }, []);

  const handleSetDarkMode = (isDark: boolean) => {
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <ApplicationThemeContext.Provider
      value={{
        isDarkMode,
        setDarkMode: handleSetDarkMode,
      }}
    >
      {children}
    </ApplicationThemeContext.Provider>
  );
};
