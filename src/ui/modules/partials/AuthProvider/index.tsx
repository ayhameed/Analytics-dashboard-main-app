"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export type AuthContextProps = {
  isSignedIn: boolean;
  setSignedIn: (status: boolean) => void;
  signOut: () => void;
};

// Create context
export const AuthContext = createContext<AuthContextProps>({
  isSignedIn: false,
  setSignedIn: () => {},
  signOut: () => {},
});

export type AuthProviderProps = {
  children: ReactNode;
};

// Provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Check for token on initial render to set auth state
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log({ token });
    setIsSignedIn(!!token);
  }, []);

  // Function to update sign-in status
  const setSignedIn = (status: boolean) => {
    setIsSignedIn(status);
    if (!status) {
      localStorage.removeItem("access_token");
    }
  };

  // Function to sign out
  const signOut = () => {
    setSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, setSignedIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
