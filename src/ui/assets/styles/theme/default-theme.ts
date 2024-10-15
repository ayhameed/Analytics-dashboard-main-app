import { useMemo } from "react";
import { createAppTheme } from "@web-insight/component-library";
import { useApplicationTheme } from "@/common";

// Define light and dark theme styles for different components
const lightThemeStyles = {
  dashboard: {},
  userPage: {},
  authPage: {
    authLeft: {
      background: "#F8F9FB",
      header: "#1E2025",
      input: "#61656C",
      placeholder: "#61656C",
    },
    emailSuccess: {
      text: {
        color: "#1E2025",
      },
    },
  },
};

const darkThemeStyles = {
  dashboard: {},
  userPage: {},
  authPage: {
    authLeft: {
      background: "#17191C",
      header: "#C5C5C5",
      placeholder: "#AEB4BD",
      input: "#C5C5C5",
    },
    emailSuccess: {
      text: {
        color: "#C5C5C5",
      },
    },
  },
};

export const useDefaultTheme = () => {
  const { isDarkMode } = useApplicationTheme();

  return useMemo(
    () =>
      createAppTheme(
        {
          dashboard: isDarkMode ? darkThemeStyles.dashboard : lightThemeStyles.dashboard,
          userPage: isDarkMode ? darkThemeStyles.userPage : lightThemeStyles.userPage,
          authPage: isDarkMode ? darkThemeStyles.authPage : lightThemeStyles.authPage,
        },
        isDarkMode,
      ),
    [isDarkMode],
  );
};
