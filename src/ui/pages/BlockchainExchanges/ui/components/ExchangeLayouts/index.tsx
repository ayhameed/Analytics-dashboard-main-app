"use client";
import { ExchangeCard } from "../ExchangeCard";
import { ExchangeChart } from "../ExchangeChart";
import { StakingPool } from "../StakingPool";
import { GasFeeTracker } from "../GasFeeTracker";
import { ExchangeTokenHolder } from "../ExchangeTokenHolder";
import { Box } from "@mui/material";

export const ExchangeLayouts = () => {
  return (
    <Box sx={{ padding: {xs: "24px", sm:"24px 0 0 0"}  }}>
      <Box component={ExchangeCard} sx={{ width: "100%" }} />
      <Box component={ExchangeChart} sx={{ width: "100%" }} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {xs: "1fr", md:"repeat(2, 1fr)"},
          gap: "18px",
        }}
      >
        <Box component={StakingPool} />
        <Box component={GasFeeTracker} />
      </Box>
      <Box component={ExchangeTokenHolder} sx={{ width: "100%" }} />
    </Box>
  );
};
