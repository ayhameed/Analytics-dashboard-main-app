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
  stakingPool: {};
};

type UserPageStyle = {};

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
};

// Extend the BaseThemeExtension with custom properties
interface ThemeExtension extends BaseThemeExtension {
  dashboard: DashboardStyle;
  userPage: UserPageStyle;
  authPage: AuthPageStyle;
  sideBar: sideBarStyles;
  navBar: navBarStyles;
  tokenDetails: TokenDetailsStyle;
}

// Augment the existing MUI `Theme` and `ThemeOptions` interfaces
declare module "@mui/material/styles" {
  interface Theme extends ThemeExtension {}

  interface ThemeOptions extends ThemeExtension {}
}

export {};
