import { createContext, useContext } from "react";

interface MenuContextType {
  openMenu: boolean;
  toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
