import { Typography } from "@mui/material";
import { pxToRem } from "@web-insight/component-library";

interface StyledTypographyProps {
    children: React.ReactNode;
    color?: string;
    backgroundColor?: string;
}

export const ChartStyledTypography = ({
    children,
    color = "#28292D", 
    backgroundColor = "rgba(223, 215, 246, 0.40)",
}: StyledTypographyProps) => {
    return (
        <Typography
            sx={{
                color,
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontSize: pxToRem(14),
                fontWeight: 600,
                lineHeight: "20px",
                letterSpacing: "0.25px",
                backgroundColor,
                borderRadius: "6px",
                padding: "13px 24px 13px 27px",
            }}
        >
            {children}
        </Typography>
    );
};
