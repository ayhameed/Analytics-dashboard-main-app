"use client";
import { useEffect, useState } from "react";
import SearchHistoryDatas from "@/ui/blockchain.json";
import { pxToRem } from "@web-insight/component-library";
import {
  Box,
  CircularProgress,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Table,
  Paper,
  Typography,
} from "@mui/material";
import { useApplicationTheme } from "@/common";

type searchedHistoryDataProp = {
  tokenSearched: string;
  time: string;
};

export const UserSearchHistory = () => {
  const { isDarkMode } = useApplicationTheme();
  const [seachedHistory, setSearchedHistory] = useState<searchedHistoryDataProp[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Set data from the JSON file as initial state
      const data = SearchHistoryDatas.searchHistoryData;
      setSearchedHistory(data);
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
    <Box>
      <Typography
        sx={{
          color: (theme) => theme.userPage.searchHistory.text.primary,
          fontSize: pxToRem(16),
          fontWeight: 700,
          lineHeight: "150%",
          marginBottom: "8px",
        }}
      >
        Search History
      </Typography>

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
              backgroundColor: (theme) => theme.userPage.searchHistory.background.tableHead,
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  border: "none",
                  textAlign: "left",
                  color: (theme) => theme.userPage.searchHistory.text.tableHead,
                }}
              >
                Token Name
              </TableCell>
              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  border: "none",
                  textAlign: "right",
                  color: (theme) => theme.userPage.searchHistory.text.tableHead,
                }}
              >
                Time
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell
                colSpan={2}
                sx={{
                  backgroundColor: isDarkMode ? "#101114" : "transparent",
                  border: "none",
                  height: "24px",
                  padding: 0,
                }}
              />
            </TableRow>
            {seachedHistory &&
              seachedHistory.map((data, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: (theme) =>
                      index % 2
                        ? theme.userPage.searchHistory.background.secondary
                        : theme.userPage.searchHistory.background.primary,
                  }}
                >
                  <TableCell
                    sx={{
                      fontSize: pxToRem(16),
                      fontWeight: 400,
                      color: (theme) => theme.userPage.searchHistory.text.tableBody,
                      padding: index % 2 ? "12px" : "8px 12px",
                      border: "none",
                      textAlign: "left",
                    }}
                  >
                    {data.tokenSearched}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: pxToRem(16),
                      fontWeight: 400,
                      color: (theme) => theme.userPage.searchHistory.text.tableBody,
                      padding: index % 2 ? "12px" : "8px 12px",
                      border: "none",
                      textAlign: "right",
                    }}
                  >
                    {data.time}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
