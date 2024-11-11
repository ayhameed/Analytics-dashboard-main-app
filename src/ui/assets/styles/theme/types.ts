import { BaseThemeExtension } from "@web-insight/component-library";
import "@mui/material/styles";

// Define the structure for your custom styles
type DashboardStyle = {
  text: {
    header: string;
    subHeader: string;
    filter: string;
  };
  search: {
    border: string;
    background: string;
    color: string;
  };
  blockchain: {
    background: string;
    border: string;
    text: {
      primary: string;
      secondary: string;
    };
  };
};

type TokenDetailsStyle = {
  card: {
    background: string;
    border: string;
    text: {
      primary: string;
      secondary: string;
    };
  };
  tokenChart: {
    background: string;
    border: string;
    text: {
      primary: string;
      secondary: string;
    };
    btnBackground: {
      primary: string;
      secondary: string;
    };
    indicatorDetails: {
      background: string;
    };
  };
  stakingPool: {
    background: string;
    border: string;
    text: {
      primary: string;
      secondary: string;
    };
    tableBackground: {
      primary: string;
      secondary: string;
      tHead: string;
    };
  };
  gasFeesTracker: {
    border: string;
    background: string;
    primary: string;
    PNGcolor: string;
  };
};

type solanaPerformanceStyle = {
  contractSummary: {
    background: {
      primary: string;
      secondary: string;
    };
    border: string;
    text: {
      primary: string;
      secondary: string;
    };
  };
};

type UserPageStyle = {
  profile: {
    background: string;
    primaryCl: string;
    secondaryCl: string;
    dateCl: string;
  };
  searchHistory: {
    text: {
      tableBody: string;
      tableHead: string;
      primary: string;
    };
    background: {
      tableHead: string;
      primary: string;
      secondary: string;
    };
  };
};

type AuthPageStyle = {
  authLeft: {
    background: string;
    header: string;
    placeholder: string;
    input: string;
  };
  emailSuccess: {
    text: {
      color: string;
    };
  };
};

type sideBarStyles = {
  background: string;
  borderRight: string;
  text: {
    link: string;
    color: string;
  };
  btn: {
    border: string;
    background: string;
    text: {
      color: string;
    };
  };
  toggle: {
    border: string;
    background: string;
    boxShadow: string;
  };
};

type navBarStyles = {
  background: string;
  search: {
    border: string;
    background: string;
    color: string;
    endAdornment: {
      background: string;
    };
  };
  logOut: {
    color: string;
    background: string;
  };
};

// Extend the BaseThemeExtension with custom properties
interface ThemeExtension extends BaseThemeExtension {
  dashboard: DashboardStyle;
  userPage: UserPageStyle;
  authPage: AuthPageStyle;
  sideBar: sideBarStyles;
  navBar: navBarStyles;
  tokenDetails: TokenDetailsStyle;
  solanaPerformance: solanaPerformanceStyle;
}

// Augment the existing MUI `Theme` and `ThemeOptions` interfaces
declare module "@mui/material/styles" {
  interface Theme extends ThemeExtension {}

  interface ThemeOptions extends ThemeExtension {}
}

export {};
