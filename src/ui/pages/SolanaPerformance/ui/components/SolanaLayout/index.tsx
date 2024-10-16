import { ContractSummary } from "../ContractSummary";
import { NetworkHealthMetrics } from "../NetworkHealthMetrics";
import { SmartContracts } from "../SmartContracts";
import { Box } from "@mui/material";

export const SolanaLayout = () => {
    return(
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                backgroundColor: "#FCFCFD",
                padding: "21px 0 0 37px"
            }}
        >
          <ContractSummary/>  
          <SmartContracts/>  
          <NetworkHealthMetrics/>  
        </Box>
    )
}