"use client";
import { useState } from "react";
import { MenuContext } from "@/common";

interface MenuProviderProps {
  children: React.ReactNode;
}

export const NavigatorProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <MenuContext.Provider value={{ openMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
