"use client";
import { useEffect, useState } from "react";
import { TotalUsers } from "../TotalUsers";
import { pxToRem } from "@web-insight/component-library";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useUserApi } from "@/common";

type Users = {
  Name: string;
  SearchNumber: number;
  dateJoined: string;
};

export const AdminUsersPage = () => {
  const { getUserSearchInsights } = useUserApi();
  const [Users, setUsers] = useState<Users[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserSearchInsights();
        if (data) {
          const formattedUsers = data.map((item) => ({
            Name: item.user_data.name || "Unknown User",
            SearchNumber: item.search_count,
            dateJoined: new Date(item.user_data.created_at).toLocaleDateString(),
          }));
          setUsers(formattedUsers);
        } else {
          setError("No data found");
        }
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [getUserSearchInsights]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography
        color="error"
        sx={{
          textAlign: "center",
          fontSize: pxToRem(18),
          fontWeight: 500,
        }}
      >
        {error}
      </Typography>
    );
  }

  return (
    <Box position={"relative"}>
      <TotalUsers />

      <Typography
        sx={{
          fontSize: pxToRem(24),
          fontWeight: 700,
          lineHeight: "150%",
          marginBottom: "8px",
          padding: "0 17px 0 7px",
          color: "#FFFFFF",
        }}
      >
        Users
      </Typography>

      <TableContainer
        sx={{
          padding: "0 17px 0 7px",
          backgroundColor: "transparent !important",
          boxShadow: "none",
        }}
      >
        <Table
          sx={{
            borderCollapse: "separate",
            "&, & *": { border: "none" },
          }}
        >
          <TableHead
            sx={{
              backgroundColor: "#303030",
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  border: "none",
                  color: "#FFFFFF",
                }}
              >
                Full Name
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  border: "none",
                  color: "#FFFFFF",
                }}
              >
                Number Of Searches
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  border: "none",
                  color: "#FFFFFF",
                }}
              >
                Date Joined
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Users &&
              Users.map((user, index) => {
                const isWhiteBackground = index % 2 === 0;
                return (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: isWhiteBackground ? "#424242" : "#303030",
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: pxToRem(16),
                        fontWeight: 400,
                        color: "#E0E0E0",
                        padding: "12px",
                        border: "none",
                      }}
                    >
                      {user.Name}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: pxToRem(16),
                        fontWeight: 400,
                        color: "#E0E0E0",
                        padding: "12px",
                        border: "none",
                      }}
                    >
                      {user.SearchNumber}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: pxToRem(16),
                        fontWeight: 400,
                        color: "#E0E0E0",
                        padding: "12px",
                        border: "none",
                      }}
                    >
                      {user.dateJoined}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
