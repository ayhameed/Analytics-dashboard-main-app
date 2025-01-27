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

interface UserSearchHistory {
  id: number;
  user_id: number;
  search_term: string;
  search_time: string;
}

export const UserSearchHistory = () => {
  const { isDarkMode } = useApplicationTheme();
  const [searchHistory, setSearchHistory] = useState<UserSearchHistory[] | null>(null);
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
          // Remove duplicates based on `search_term`
          const uniqueData = Array.from(
            new Map(data.map((item) => [item.search_term.toLowerCase(), item])).values(),
          );
          setSearchHistory(uniqueData);
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
    <Box sx={{ margin: { xs: "20px", md: 0 } }}>
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
                key={data.id}
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
                  {data.search_term}
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
                  {new Date(data.search_time).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
