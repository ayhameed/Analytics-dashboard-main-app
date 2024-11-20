"use client";

import { Stack } from "@mui/material";
import { TypographyText } from "./TextStyle";
import { TypographyDigit } from "./digitStyle";
import { useEffect, useState } from "react";
import { useCryptoApi } from "@/common";

interface SolanaMetrics {
  validators: number;
  daily_active_programs: number | null;
  total_non_vote_fees: number | null;
  tps: number | null;
}

export const ContractSummary = () => {
  const { getSolanaMetrics } = useCryptoApi();
  const [metrics, setMetrics] = useState<SolanaMetrics | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      const data = await getSolanaMetrics();
      if (data) setMetrics(data);
    };
    fetchMetrics();
  }, [getSolanaMetrics]);

  const formatNumber = (value: number | null | undefined): string => {
    if (value === null || value === undefined) return "N/A";
    return new Intl.NumberFormat("en-US").format(value);
  };

  return (
    <Stack
      padding={"20px 12px"}
      gridColumn={"1/2"}
      gridRow={"1/2"}
      spacing={"20px"}
      sx={{
        backgroundColor: (theme) => theme.solanaPerformance.contractSummary.background.primary,
        border: (theme) => `1px solid ${theme.solanaPerformance.contractSummary.border}`,
        borderRadius: "12px",
      }}
    >
      <Stack
        spacing={"12px"}
        padding={"8px"}
        sx={{
          backgroundColor: (theme) => theme.solanaPerformance.contractSummary.background.secondary,
          borderRadius: "6px",
        }}
      >
        <TypographyText text={"TPS for the last 1 hour"} />
        <TypographyDigit numberValue={formatNumber(metrics?.tps)} />
      </Stack>

      <Stack
        spacing={"12px"}
        padding={"8px"}
        sx={{
          backgroundColor: (theme) => theme.solanaPerformance.contractSummary.background.secondary,
          borderRadius: "6px",
        }}
      >
        <TypographyText text={"Total Fees of Non-Vote Transactions Over 24h (SOL)"} />
        <TypographyDigit numberValue={formatNumber(metrics?.total_non_vote_fees)} />
      </Stack>

      <Stack
        spacing={"12px"}
        padding={"8px"}
        sx={{
          backgroundColor: (theme) => theme.solanaPerformance.contractSummary.background.secondary,
          borderRadius: "6px",
        }}
      >
        <TypographyText text={"Validators"} />
        <TypographyDigit numberValue={formatNumber(metrics?.validators)} />
      </Stack>

      <Stack
        spacing={"12px"}
        padding={"8px"}
        sx={{
          backgroundColor: (theme) => theme.solanaPerformance.contractSummary.background.secondary,
          borderRadius: "6px",
        }}
      >
        <TypographyText text={"Daily Active Programs"} />
        <TypographyDigit numberValue={formatNumber(metrics?.daily_active_programs)} />
      </Stack>
    </Stack>
  );
};
