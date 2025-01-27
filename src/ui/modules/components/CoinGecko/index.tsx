"use client";

import React from "react";
import { useApplicationTheme } from "@/common";
import { Box } from "@mui/material";

export const CoinGeckoWidget: React.FC = () => {
  const { isDarkMode } = useApplicationTheme();
  return (
    <Box sx={{ width: "100%", height: "40px", overflow: "hidden", position: "relative" }}>
      <gecko-coin-price-marquee-widget
        coin-ids=""
        initial-currency="usd"
        dark-mode={isDarkMode ? "true" : "false"}
      />
    </Box>
  );
};
