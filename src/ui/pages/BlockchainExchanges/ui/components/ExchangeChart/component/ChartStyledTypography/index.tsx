import { Typography } from "@mui/material";
import { pxToRem } from "@web-insight/component-library";

interface StyledTypographyProps {
  children: React.ReactNode;
}

export const ChartStyledTypography = ({ children }: StyledTypographyProps) => {
  return (
    <Typography
      sx={{
        color: (theme) => theme.tokenDetails.tokenChart.text.primary,
        fontFeatureSettings: "'liga' off, 'clig' off",
        fontSize: pxToRem(14),
        fontWeight: 600,
        lineHeight: "20px",
        letterSpacing: "0.25px",
        backgroundColor: (theme) => theme.tokenDetails.tokenChart.btnBackground.primary,
        borderRadius: "6px",
        padding: "13px 24px 13px 27px",
      }}
    >
      {children}
    </Typography>
  );
};
