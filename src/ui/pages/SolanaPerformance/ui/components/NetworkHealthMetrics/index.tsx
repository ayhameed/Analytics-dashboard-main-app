"use client";
import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import arrowDdownicon from "./components/assets/icon/arrow-down-01.svg";
import arrowLightIcon from "./components/assets/icon/arrow_down_light.svg";
import { Chart } from "./components/Chart";
import { useApplicationTheme } from "@/common";

export const NetworkHealthMetrics = () => {
  const { isDarkMode } = useApplicationTheme();

  return (
    <Box
      sx={{
        gridColumn: "span 4",
        gridRow: "2/3",
        padding: "20px 24px 14px 9px",
        margin: "15px 47px 0 0",
        borderRadius: "10px",
        border: (theme) => `0.8px solid ${theme.tokenDetails.tokenChart.border}`,
        backgroundColor: (theme) => theme.tokenDetails.tokenChart.background,
      }}
    >
      <RowStack marginBottom={"66px"}>
        <Stack flexGrow="1">
          <Typography
            sx={{
              color: (theme) => theme.tokenDetails.tokenChart.text.primary,
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontSize: pxToRem(16),
              fontWeight: 600,
              lineHeight: "24px",
              marginLeft: "15px",
            }}
          >
            Network health Metrics <br />
            <Typography
              component="span"
              sx={{
                color: "#747474",
                fontSize: pxToRem(14),
                fontWeight: 400,
                lineHeight: "24px",
                fontFeatureSettings: "'liga' off, 'clig' off",
              }}
            >
              Success Vote vs Non-Vote Transactions
            </Typography>
          </Typography>
        </Stack>

        <RowStack
          sx={{
            backgroundColor: "rgba(223, 215, 246, 0.40)",
            padding: "8px",
            gap: "4px",
            borderRadius: "6px",
          }}
        >
          <Typography
            sx={{
              fontSize: pxToRem(14),
              fontWeight: 600,
              color: "#582FD0",
              fontFeatureSettings: "'liga' off, 'clig' off",
              lineHeight: "20px",
              letterSpacing: "0.25",
            }}
          >
            Today
          </Typography>

          <StyledImage
            src={isDarkMode ? arrowLightIcon : arrowDdownicon}
            alt=""
            sx={{ width: "24px", height: "24px" }}
          />
        </RowStack>
      </RowStack>
      <Chart />
    </Box>
  );
};
