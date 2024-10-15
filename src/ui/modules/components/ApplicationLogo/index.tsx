"use client";

import { useApplicationTheme } from "@/common";
import logoLight from "./ui/assets/icons/logo_light.png";
import logoDark from "./ui/assets/icons/logo_dark.png";
import { StyledImage } from "@web-insight/component-library";

export const ApplicationLogo = () => {
  const { isDarkMode } = useApplicationTheme();

  return (
    <StyledImage
      src={isDarkMode ? logoDark : logoLight}
      alt="Web Insight"
      sx={{ width: "164px", height: "57px" }}
    />
  );
};
