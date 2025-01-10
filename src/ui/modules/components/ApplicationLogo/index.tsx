"use client";

// import logoLight from "./ui/assets/icons/logo_light.png";
import logoDark from "./ui/assets/icons/logo_dark.png";
import { StyledImage } from "@web-insight/component-library";

export const ApplicationLogo = () => {
  return <StyledImage src={logoDark} alt="Web Insight" sx={{ width: "350px", height: "300px" }} />;
};
