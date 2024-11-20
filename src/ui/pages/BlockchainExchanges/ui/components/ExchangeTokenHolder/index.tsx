import {
  Box,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { pxToRem } from "@web-insight/component-library";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCryptoApi } from "@/common";

interface TokenHolder {
  address: string;
  amount_held: number;
  percentage_of_supply: number;
}

export const ExchangeTokenHolder = () => {
  const params = useParams();
  const tokenId = Number(params.id);
  const { getTokenHolders } = useCryptoApi();
  const [holders, setHolders] = useState<TokenHolder[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHolders = async () => {
      if (!tokenId) return;
      const data = await getTokenHolders(tokenId);
      if (data) setHolders(data);
      setLoading(false);
    };
    fetchHolders();
  }, [tokenId]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" padding="2rem">
        <CircularProgress />
      </Box>
    );
  }

  if (!holders || holders.length === 0) {
    return (
      <Box padding="2rem" textAlign="center">
        <Typography>No holder data available</Typography>
      </Box>
    );
  }

  return (
    <Stack
      spacing={"12px"}
      sx={{
        padding: "20px 12px",
        margin: "20px 0 30px 0",
        border: (theme) => `0.8px solid ${theme.tokenDetails.stakingPool.border}`,
        borderRadius: "10px",
        backgroundColor: (theme) => theme.tokenDetails.stakingPool.background,
      }}
    >
      <Typography
        sx={{
          color: (theme) => theme.tokenDetails.stakingPool.text.secondary,
          fontSize: pxToRem(20),
          fontWeight: 600,
          lineHeight: "26px",
          letterSpacing: "-0.1px",
        }}
      >
        Exchange Token holders
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ borderCollapse: "separate", border: "none" }}>
          <TableHead
            sx={{
              padding: 0,
              backgroundColor: (theme) => theme.tokenDetails.stakingPool.tableBackground.tHead,
              width: "100%",
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "12px",
                }}
              >
                Address
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "12px",
                }}
              >
                Amount of token held
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "12px",
                }}
              >
                Percentage of Supply
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell
                colSpan={3}
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  height: "10px",
                  padding: 0,
                }}
              />
            </TableRow>
            {holders.map((holder, index) => (
              <TableRow
                key={holder.address}
                sx={{
                  backgroundColor: (theme) =>
                    index % 2 === 0
                      ? theme.tokenDetails.stakingPool.tableBackground.primary
                      : theme.tokenDetails.stakingPool.tableBackground.secondary,
                }}
              >
                <TableCell
                  sx={{
                    fontSize: pxToRem(16),
                    fontWeight: 400,
                    color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                    padding: index % 2 === 0 ? "8px 12px" : "14px",
                    border: "none",
                  }}
                >
                  {holder.address}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: pxToRem(16),
                    fontWeight: 400,
                    color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                    padding: index % 2 === 0 ? "8px 12px" : "14px",
                    border: "none",
                  }}
                >
                  {holder.amount_held.toLocaleString()}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: pxToRem(16),
                    fontWeight: 400,
                    textAlign: "center",
                    color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                    padding: index % 2 === 0 ? "8px 12px" : "14px",
                    border: "none",
                  }}
                >
                  {holder.percentage_of_supply.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
