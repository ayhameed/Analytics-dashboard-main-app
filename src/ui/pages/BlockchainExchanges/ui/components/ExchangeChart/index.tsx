import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { ChartStyledTypography } from "./component/ChartStyledTypography";
import { LineChart } from "./component/LineChart";

export const ExchangeChart = () => {
  return (
    <Stack
      spacing={"40px"}
      sx={{
        marginTop: "20px",
        padding: "20px 24px 0 24px",
        minWidth: "662px",
        borderRadius: "10px",
        border: "0.8px solid var(--Light-Divider-2, #D7D8DC)",
        overflow: "hidden",
      }}
    >
      <RowStack sx={{ justifyContent: "space-between" }}>
        <Typography
          sx={{
            color: (theme) => theme.tokenDetails.tokenChart.text.primary,
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontSize: pxToRem(14),
            fontWeight: 600,
            lineHeight: "20px",
            letterSpacing: "0.25px",
            borderRadius: "6px",
            padding: "13px 24px 13px 27px",
          }}
        >
          Transaction volume
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              color: (theme) => theme.tokenDetails.tokenChart.text.secondary,
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontSize: pxToRem(14),
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.25px",
              backgroundColor: (theme) => theme.tokenDetails.tokenChart.btnBackground.secondary,
              borderRadius: "6px",
              padding: "13px 24px 13px 27px",
            }}
          >
            Today
          </Typography>
          <ChartStyledTypography>Past Week</ChartStyledTypography>
          <ChartStyledTypography>Month</ChartStyledTypography>
          <ChartStyledTypography>Year</ChartStyledTypography>
        </Box>
      </RowStack>

      <Box>
        <LineChart />
      </Box>
    </Stack>
  );
};
