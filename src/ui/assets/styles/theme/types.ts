import { BaseThemeExtension } from "@web-insight/component-library";
import "@mui/material/styles";

type dashboardStyle = {};

type userPageStyle = {};

interface ThemeExtension extends BaseThemeExtension {
  dashboard: dashboardStyle;
  userPage: userPageStyle;
}

declare module "@mui/material/styles" {
  interface Theme extends ThemeExtension {}

  interface ThemeOptions {
    dashboard?: dashboardStyle;
    userPage?: userPageStyle;
  }

  interface ThemeOptions extends ThemeExtension {}
}

export {};
