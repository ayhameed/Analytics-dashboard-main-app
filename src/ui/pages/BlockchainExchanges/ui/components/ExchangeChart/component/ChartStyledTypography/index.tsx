import { Typography } from "@mui/material";
import { pxToRem } from "@web-insight/component-library";

interface ChartStyledTypographyProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const ChartStyledTypography = ({
  children,
  isActive,
  onClick,
}: ChartStyledTypographyProps) => {
  return (
    <Typography
      onClick={onClick}
      sx={{
        cursor: "pointer",
        color: (theme) => theme.tokenDetails.tokenChart.text.primary,
        fontFeatureSettings: "'liga' off, 'clig' off",
        fontSize: pxToRem(14),
        fontWeight: 600,
        lineHeight: "20px",
        letterSpacing: "0.25px",
        backgroundColor: (theme) =>
          !isActive
            ? theme.tokenDetails.tokenChart.btnBackground.primary
            : theme.tokenDetails.tokenChart.btnBackground.secondary,
        borderRadius: "6px",
        padding: "13px 24px 13px 27px",
      }}
    >
      {children}
    </Typography>
  );
};
