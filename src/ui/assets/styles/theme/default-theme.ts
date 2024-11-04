import { useMemo } from "react";
import { createAppTheme } from "@web-insight/component-library";
import { useApplicationTheme } from "@/common";

// Define light and dark theme styles for different components
const lightThemeStyles = {
  tokenDetails: {
    card: {
      background: "#F9F9F9",
      border: "rgba(228, 231, 236, 0.50)",
      text: {
        primary: "#101928",
        secondary: "#344054",
      },
    },
    stakingPool: {},
  },
  dashboard: {
    text: {
      header: "#101928",
      subHeader: "#667185",
      filter: "#475367",
    },
    search: {
      border: "#E4E7EC",
      background: "#FFF",
      color: "#667185",
    },
    blockchain: {
      background: "#FFF",
      border: "rgba(228, 231, 236, 0.50)",
      text: {
        primary: "#101928",
        secondary: "#344054",
      },
    },
  },
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
  sideBar: {
    background: "#F8F9FB",
    borderRight: "#F0F2F5",
    text: {
      link: "#667185",
      color: "#475367",
    },
    toggle: {
      border: "#E4E7EC",
      background: "#F9FAFB",
      boxShadow: "0px 0px 0px 3px rgba(241, 241, 241, 0.37), -2px -2px 8px 0px #E9E9E9 inset",
    },
    btn: {
      border: "#76A8ED",
      background:
        "linear-gradient(90deg, rgba(103, 180, 238, 0.30) 0%, rgba(172, 125, 234, 0.30) 100%)",
      text: {
        color: "#134432",
      },
    },
  },
  navBar: {
    background: "linear-gradient(90deg, rgba(249, 250, 251, 0.00) 26.49%, #F9FAFB 45.45%)",
    search: {
      border: "#E4E7EC",
      background: "#FFF",
      color: "#667185",
      endAdornment: {
        background: "#F7F9FC",
      },
    },
  },
};

const darkThemeStyles = {
  tokenDetails: {
    card: {
      background: "#202326",
      border: "rgba(228, 231, 236, 0.50)",
      text: {
        primary: "#C5C5C5",
        secondary: "#C5C5C5",
      },
    },
    stakingPool: {},
  },
  dashboard: {
    text: {
      header: "#C5C5C5",
      subHeader: "#C5C5C5",
      filter: "#C5C5C5",
    },
    search: {
      border: "#353A41",
      background: "#101114",
      color: "#C5C5C5",
    },
    blockchain: {
      background: "#101114",
      border: "rgba(88, 88, 88, 0.50)",
      text: {
        primary: "#C5C5C5",
        secondary: "#C5C5C5",
      },
    },
  },
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
  sideBar: {
    background: "#17191C",
    borderRight: "#272A2F",
    text: {
      link: "#C5C5C5",
      color: "#AEB4BD",
    },
    toggle: {
      border: "#E4E7EC",
      background: "#F9FAFB",
      boxShadow: "0px 0px 0px 3px rgba(241, 241, 241, 0.37), -2px -2px 8px 0px #E9E9E9 inset",
    },
    btn: {
      border: "#76A8ED",
      background:
        "linear-gradient(90deg, rgba(103, 180, 238, 0.30) 0%, rgba(172, 125, 234, 0.30) 100%)",
      text: {
        color: "#AC7DEA",
      },
    },
  },
  navBar: {
    background: "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 26.49%, #000 45.45%)",
    search: {
      border: "#353A41",
      background: "#101114",
      color: "#AEB4BD",
      endAdornment: {
        background: "#17191C",
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
          sideBar: isDarkMode ? darkThemeStyles.sideBar : lightThemeStyles.sideBar,
          navBar: isDarkMode ? darkThemeStyles.navBar : lightThemeStyles.navBar,
          tokenDetails: isDarkMode ? darkThemeStyles.tokenDetails : lightThemeStyles.tokenDetails,
        },
        isDarkMode,
      ),
    [isDarkMode],
  );
};
