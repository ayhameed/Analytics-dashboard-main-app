import { useState, useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import gasFeeDatas from "@/ui/blockchain.json";

interface gasFeeGraphProps {
  name: string;
  priorityFee: number;
  baseFee: number;
}
const GasFeeGraph = () => {
  const [barChart, setBarChart] = useState<gasFeeGraphProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const data = gasFeeDatas.gasFeeData;
      setBarChart(data);
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
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={barChart} margin={{ top: 5, left: -20, bottom: 20 }} barSize={21}>
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis
          ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000]}
          tickFormatter={(value) => (value > 0 ? `${value / 1000}k` : value)}
          tickLine={false}
          axisLine={false}
        />
        <Bar dataKey="baseFee" stackId="a" fill="#22DDD4" />
        <Bar dataKey="priorityFee" stackId="a" fill="#0E5855" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GasFeeGraph;
