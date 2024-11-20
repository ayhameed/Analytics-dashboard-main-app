import { ContractSummary } from "../ContractSummary";
import { NetworkHealthMetrics } from "../NetworkHealthMetrics";
import { Stack } from "@mui/material";

export const SolanaLayout = () => {
  return (
    <Stack
      sx={{
        // display: "grid",
        // gridTemplateColumns: "repeat(4, 1fr)",
        backgroundColor: "inherit",
        padding: "21px 0 0 37px",
      }}
    >
      <ContractSummary />
      {/*<SmartContracts />*/}
      <NetworkHealthMetrics />
    </Stack>
  );
};
