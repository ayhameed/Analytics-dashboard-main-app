"use client";
import { pxToRem } from "@web-insight/component-library";
import { Typography } from "@mui/material";

interface TypographyTextProp {
  text: string;
}

export const TypographyText = ({ text }: TypographyTextProp) => {
  return (
    <Typography
      sx={{
        color: (theme) => theme.solanaPerformance.contractSummary.text.primary,
        fontFeatureSettings: "'cv03' on, 'cv04' on",
        fontSize: pxToRem(14),
        fontWeight: 400,
        letterSpacing: "-0.07px",
        lineHeight: "16.8px",
      }}
    >
      {text}
    </Typography>
  );
};
