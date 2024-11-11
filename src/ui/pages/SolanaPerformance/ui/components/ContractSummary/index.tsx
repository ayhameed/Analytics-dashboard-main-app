"use client";
import { Box, Stack } from "@mui/material";
import { TypographyText } from "./TextStyle";
import { TypographyDigit } from "./digitStyle";

export const ContractSummary = () => {
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
        <TypographyDigit numberValue={2966} />
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
        <TypographyDigit numberValue={6434.247628964} />
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
        <TypographyDigit numberValue={2360} />
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
        <TypographyDigit numberValue={1457} />
      </Stack>
    </Stack>
  );
};
