"use client";
import { useEffect, useState } from "react";
import { pxToRem } from "@web-insight/component-library";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { getUserId, useApplicationTheme, useUserApi } from "@/common";

interface SearchHistoryResponse {
  token_searched: string;
  timestamp: string;
}

type SearchHistoryItem = {
  tokenSearched: string;
  time: string;
};

export const UserSearchHistory = () => {
  const { isDarkMode } = useApplicationTheme();
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = getUserId();
  const { getUserSearchHistory } = useUserApi();

  useEffect(() => {
    const fetchSearchHistory = async () => {
      if (!userId) {
        setError("User ID not found");
        setLoading(false);
        return;
      }

      try {
        const { success, data } = await getUserSearchHistory(userId);

        if (success && data) {
          const transformedData = (data as SearchHistoryResponse[]).map((item) => ({
            tokenSearched: item.token_searched,
            time: new Date(item.timestamp).toLocaleString(),
          }));

          setSearchHistory(transformedData);
        } else {
          setError("Failed to load search history");
        }
      } catch (err) {
        setError("An error occurred while fetching search history");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchHistory();
  }, [userId, getUserSearchHistory]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!searchHistory || searchHistory.length === 0) {
    return (
      <Box sx={{ padding: "2rem", textAlign: "center" }}>
        <Typography>No search history found</Typography>
      </Box>
    );
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
            {searchHistory.map((data, index) => (
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
