import { Box, Stack, Typography } from "@mui/material";
import { pxToRem, RowStack } from "@web-insight/component-library";
import { ChartStyledTypography } from "./component/ChartStyledTypography";
import { LineChart } from "./component/LineChart";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCryptoApi } from "@/common";

type TimeSpan = "24h" | "7d" | "30d" | "1Y";
type VolumeData = { volume: number; percentage_change: number | null };

interface HistoryData {
  [date: string]: VolumeData;
}

export const ExchangeChart = () => {
  const params = useParams();
  const tokenId = Number(params.id);
  const [timeSpan, setTimeSpan] = useState<TimeSpan>("7d");
  const [historyData, setHistoryData] = useState<HistoryData | null>(null);
  const { getTokenHistory } = useCryptoApi();

  useEffect(() => {
    const fetchData = async () => {
      if (!tokenId) return;
      const data = await getTokenHistory(tokenId, timeSpan);
      if (data) setHistoryData(data);
    };
    fetchData();
  }, [tokenId, timeSpan, getTokenHistory]);

  const handleTimeSpanChange = (newTimeSpan: TimeSpan) => {
    setTimeSpan(newTimeSpan);
  };

  return (
    <Stack
      spacing={"40px"}
      sx={{
        marginTop: "20px",
        padding: "20px 24px 0 24px",
        minWidth: {xs: "auto", md: "662px"},
        borderRadius: "10px",
        border: (theme) => `0.8px solid ${theme.tokenDetails.tokenChart.border}`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "space-between",
          alignItems: {xs: "start", md: "center"}
        }}
      >
        <Typography
          sx={{
            color: (theme) => theme.tokenDetails.tokenChart.text.primary,
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontSize: pxToRem(14),
            fontWeight: 600,
            lineHeight: "20px",
            letterSpacing: "0.25px",
            borderRadius: "6px",
            padding: {xs: 0, md: "13px 24px 13px 27px"},
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
          <ChartStyledTypography
            isActive={timeSpan === "24h"}
            onClick={() => handleTimeSpanChange("24h")}
          >
            Today
          </ChartStyledTypography>

          <ChartStyledTypography
            isActive={timeSpan === "7d"}
            onClick={() => handleTimeSpanChange("7d")}
          >
            Past Week
          </ChartStyledTypography>

          <ChartStyledTypography
            isActive={timeSpan === "30d"}
            onClick={() => handleTimeSpanChange("30d")}
          >
            Month
          </ChartStyledTypography>

          <ChartStyledTypography
            isActive={timeSpan === "1Y"}
            onClick={() => handleTimeSpanChange("1Y")}
          >
            Year
          </ChartStyledTypography>
        </Box>
      </Box>

      <Box>
        <LineChart data={historyData} />
      </Box>
    </Stack>
  );
};
