import { useState, useEffect } from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography, CircularProgress } from "@mui/material";
import chartData from "@/ui/blockchain.json";
import { RowStack } from "@web-insight/component-library";

interface ChartDataProps {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export const LineChart = () => {
  const [chart, setChart] = useState<ChartDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const data = chartData.tokenChart;
      setChart(data);
      setLoading(false);
    } catch (error) {
      setError("Failed to load chart data");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
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
          data={chart}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ stroke: "#8F46F8", strokeWidth: 1 }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { name, uv } = payload[0].payload; // token detail API can be added here
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
                    {/** The token detail Api can be displayed here */}
                    <Typography variant="body2">04 April, 2024</Typography>
                    <RowStack spacing={"13px"} marginTop={"10px"}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: (theme) => theme.tokenDetails.tokenChart.text.primary,
                          fontWeight: 600,
                        }}
                      >
                        1,211.88
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          backgroundColor: "#DDF6E6",
                          borderRadius: "4px",
                          fontWeight: 500,
                          color: "#27A963",
                          padding: "5px 10px",
                        }}
                      >
                        +3.4%
                      </Typography>
                    </RowStack>
                  </Box>
                );
              }
              return null;
            }}
          />
          <Line type="monotone" dataKey="uv" stroke="#8F46F8" dot={false} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </Box>
  );
};
