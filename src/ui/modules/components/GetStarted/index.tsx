import React from "react";
import { AppButton, pxToRem } from "@web-insight/component-library";
import { Typography } from "@mui/material";

export const GetStartedButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <AppButton
    onClick={onClick}
    disableArrow
    sx={{
      height: "100%",
      width: "100%",
      maxWidth: "120px",
      padding: "4px 10px",
      borderRadius: "8px",
    }}
  >
    <Typography sx={{ fontSize: pxToRem(14), lineHeight: "21px" }}>Get Started</Typography>
  </AppButton>
);
