import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { format } from "date-fns";

interface GasFeeData {
  [date: string]: {
    total_gas_fees: number;
    total_transactions: number;
    priority_transactions: number;
    basic_transactions: number;
  };
}

interface FormattedGasFeeData {
  date: string;
  baseFee: number;
  priorityFee: number;
}

interface GasFeeGraphProps {
  data: GasFeeData | null;
}

const GasFeeGraph = ({ data }: GasFeeGraphProps) => {
  const [formattedData, setFormattedData] = useState<FormattedGasFeeData[]>([]);

  useEffect(() => {
    if (data) {
      const formatted = Object.entries(data).map(([date, values]) => ({
        date: format(new Date(date), "MMM dd"),
        baseFee: values.basic_transactions,
        priorityFee: values.priority_transactions,
      }));
      setFormattedData(formatted);
    }
  }, [data]);

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={formattedData} margin={{ top: 5, left: -20, bottom: 20 }} barSize={21}>
        <XAxis dataKey="date" tickLine={false} axisLine={false} />
        <YAxis
          tickFormatter={(value) => (value > 0 ? `${(value / 1000).toFixed(1)}k` : "0")}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          cursor={false}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload as FormattedGasFeeData;
              return (
                <div
                  style={{
                    background: "white",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  <p>{data.date}</p>
                  <p>Base Fee: {data.baseFee}</p>
                  <p>Priority Fee: {data.priorityFee}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar dataKey="baseFee" stackId="a" fill="#22DDD4" />
        <Bar dataKey="priorityFee" stackId="a" fill="#0E5855" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GasFeeGraph;
