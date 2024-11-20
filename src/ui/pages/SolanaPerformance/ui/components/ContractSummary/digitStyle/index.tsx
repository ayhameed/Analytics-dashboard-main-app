"use client";
import { pxToRem } from "@web-insight/component-library";
import { Typography } from "@mui/material";

interface TypographyDigitProp {
  numberValue: number | string;
}

export const TypographyDigit = ({ numberValue }: TypographyDigitProp) => {
  const formattedNumber =
    typeof numberValue === "number"
      ? new Intl.NumberFormat("en-US").format(numberValue)
      : numberValue;

  return (
    <Typography
      sx={{
        color: (theme) => theme.solanaPerformance.contractSummary.text.secondary,
        fontFeatureSettings: "'cv03' on, 'cv04' on",
        fontSize: pxToRem(16),
        fontWeight: 500,
        letterSpacing: "-0.08px",
        lineHeight: "26px",
      }}
    >
      {formattedNumber}
    </Typography>
  );
};
