import { useEffect, useState } from "react";
import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Box, CircularProgress, Typography } from "@mui/material";
import { RowStack } from "@web-insight/component-library";
import { format } from "date-fns";

interface HistoryData {
  [date: string]: {
    volume: number;
    percentage_change: number | null;
  };
}

interface FormattedData {
  date: string;
  volume: number;
  percentage: number | null;
}

interface LineChartProps {
  data: HistoryData | null;
}

export const LineChart = ({ data }: LineChartProps) => {
  const [formattedData, setFormattedData] = useState<FormattedData[]>([]);

  useEffect(() => {
    if (data) {
      const formatted = Object.entries(data).map(([date, values]) => ({
        date: format(new Date(date), "dd MMM, yyyy"),
        volume: values.volume,
        percentage: values.percentage_change,
      }));
      setFormattedData(formatted);
    }
  }, [data]);

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        backgroundColor: "background.paper",
        borderRadius: 2,
      }}
    >
      <ResponsiveContainer width="100%" height={259}>
        <RechartsLineChart
          data={formattedData}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <XAxis dataKey="date" axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ stroke: "#8F46F8", strokeWidth: 1 }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload as FormattedData;
                return (
                  <Box
                    sx={{
                      backgroundColor: (theme) =>
                        theme.tokenDetails.tokenChart.indicatorDetails.background,
                      p: 1,
                      borderRadius: 1,
                      boxShadow: "0px 4px 12px 0px rgba(32, 38, 65, 0.03)",
                      position: "relative",
                      left: "-100px",
                      top: "-50px",
                    }}
                  >
                    <Typography variant="body2">{data.date}</Typography>
                    <RowStack spacing={"13px"} marginTop={"10px"}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: (theme) => theme.tokenDetails.tokenChart.text.primary,
                          fontWeight: 600,
                        }}
                      >
                        {data.volume.toLocaleString()}
                      </Typography>
                      {data.percentage !== null && (
                        <Typography
                          variant="body2"
                          sx={{
                            backgroundColor: data.percentage >= 0 ? "#DDF6E6" : "#FFE6E6",
                            borderRadius: "4px",
                            fontWeight: 500,
                            color: data.percentage >= 0 ? "#27A963" : "#FF4545",
                            padding: "5px 10px",
                          }}
                        >
                          {data.percentage >= 0 ? "+" : ""}
                          {data.percentage.toFixed(2)}%
                        </Typography>
                      )}
                    </RowStack>
                  </Box>
                );
              }
              return null;
            }}
          />
          <Line type="monotone" dataKey="volume" stroke="#8F46F8" dot={false} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </Box>
  );
};
