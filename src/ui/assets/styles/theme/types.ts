import { BaseThemeExtension } from "@web-insight/component-library";
import "@mui/material/styles";

// Define the structure for your custom styles
type DashboardStyle = {};
type UserPageStyle = {};

interface AuthPageStyle {
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
}

// Extend the BaseThemeExtension with custom properties
interface ThemeExtension extends BaseThemeExtension {
  dashboard: DashboardStyle;
  userPage: UserPageStyle;
  authPage: AuthPageStyle;
}

// Augment the existing MUI `Theme` and `ThemeOptions` interfaces
declare module "@mui/material/styles" {
  interface Theme extends ThemeExtension {}

  interface ThemeOptions extends Partial<ThemeExtension> {} // Make these optional for ThemeOptions
}

export {};
