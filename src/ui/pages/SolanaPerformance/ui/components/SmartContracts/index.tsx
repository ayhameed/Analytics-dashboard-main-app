"use client";
import { useState, useEffect } from "react";
import { pxToRem } from "@web-insight/component-library";
import SmartContractData from "@/ui/blockchain.json";
import {
  Stack,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Table,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useApplicationTheme } from "@/common";

type smartContractProps = {
  Token: string;
  ContractAddress: string;
  Interactions: number;
};

export const SmartContracts = () => {
  const { isDarkMode } = useApplicationTheme();
  const [smartContract, setSmartContract] = useState<smartContractProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Set data from the JSON file as initial state
      const data = SmartContractData.SmartContracts;
      setSmartContract(data);
      setLoading(false);
    } catch (error) {
      setError("Failed to load user data");
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
    <Stack
      sx={{
        gridColumn: "span 3",
        gridRow: "1/2",
        borderRadius: "10px",
        border: (theme) => `0.8px solid ${theme.tokenDetails.stakingPool.border}`,
        backgroundColor: (theme) => theme.tokenDetails.stakingPool.background,
        margin: "0 39px 15px 16px",
        padding: "20px 12px",
      }}
    >
      <Typography
        sx={{
          color: (theme) => theme.tokenDetails.stakingPool.text.secondary,
          fontSize: pxToRem(20),
          fontWeight: 600,
          lineHeight: "26px",
          letterSpacing: "-0.1px",
          marginBottom: "20px",
        }}
      >
        Smart Contracts
      </Typography>

      {/* the whole of the table makes use of fontFamily: 
            Lato.their size nd width have been  implemented already*/}
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table
          sx={{
            borderCollapse: "separate",
            "&, & *": { border: "none" },
          }}
        >
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
                  padding: "8px 12px",
                  color: (theme) => theme.tokenDetails.stakingPool.text.secondary,
                  border: "none",
                }}
              >
                Token
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  color: (theme) => theme.tokenDetails.stakingPool.text.secondary,
                  border: "none",
                }}
              >
                Contract Address
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  color: (theme) => theme.tokenDetails.stakingPool.text.secondary,
                  border: "none",
                }}
              >
                Interactions
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
            {smartContract &&
              smartContract.map((Contracts, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: (theme) =>
                        index % 2
                          ? theme.tokenDetails.stakingPool.tableBackground.secondary
                          : theme.tokenDetails.stakingPool.tableBackground.primary,
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: pxToRem(16),
                        fontWeight: 400,
                        color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                        padding: index % 2 ? "12px" : "8px 12px",
                        border: "none",
                      }}
                    >
                      {Contracts.Token}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: pxToRem(16),
                        fontWeight: 400,
                        color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                        textAlign: "center",
                        padding: index % 2 ? "12px" : "8px 12px",
                        border: "none",
                      }}
                    >
                      {Contracts.ContractAddress}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: pxToRem(16),
                        fontWeight: 400,
                        color: (theme) => theme.tokenDetails.stakingPool.text.primary,
                        textAlign: "center",
                        padding: index % 2 ? "12px" : "8px 12px",
                        border: "none",
                      }}
                    >
                      {Contracts.Interactions}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
