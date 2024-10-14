// Custom hook to use the ApplicationThemeContext
import { useContext } from "react";
import { ApplicationThemeContext, ApplicationThemeContextProps } from "@/ui/modules/partials";

export const useApplicationTheme = (): ApplicationThemeContextProps => {
  const context = useContext(ApplicationThemeContext);
  if (!context) {
    throw new Error("useApplicationTheme must be used within an ApplicationThemeProvider");
  }
  return context;
};
