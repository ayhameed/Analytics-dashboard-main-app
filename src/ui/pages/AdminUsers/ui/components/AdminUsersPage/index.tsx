"use client";
import { useEffect, useState } from "react";
import { TotalUsers } from "../TotalUsers";
import UserData from "@/ui/blockchain.json";
import { pxToRem } from "@web-insight/component-library";
import {
  Box,
  CircularProgress,
  Stack,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Table,
  Paper,
  Typography,
} from "@mui/material";

type Users = {
  Name: string;
  SearchNumber: number;
  dateJoined: string;
};

export const AdminUsersPage = () => {
  const [Users, setUsers] = useState<Users[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Set data from the JSON file as initial state
      const data = UserData.AdminUsers;
      setUsers(data);
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
    <Box position={"relative"}>
      <TotalUsers />

      <Typography
        sx={{
          color: "#444", //fontFamily: Lato
          fontSize: pxToRem(24),
          fontWeight: 700,
          lineHeight: "150%",
          marginBottom: "8px",
          padding: "0 17px 0 7px",
        }}
      >
        Users
      </Typography>

      {/**note pls the entire table uses "lato as font but all font weight nd sizes has been implemented" */}
      <TableContainer component={Paper} sx={{ padding: "0 17px 0 7px", boxShadow: "none" }}>
        <Table
          sx={{
            borderCollapse: "separate",
            "&, & *": { border: "none" },
          }}
        >
          <TableHead
            sx={{
              padding: 0,
              backgroundColor: "#F2EEFB",
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  border: "none"
                }}
              >
                Full Name
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  border: "none"
                }}
              >
                Number Of Searches
              </TableCell>

              <TableCell
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  padding: "8px 12px",
                  border: "none"
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
                      backgroundColor: isWhiteBackground ? "#ffffff" : "#F9FAFB",
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: pxToRem(16),
                        fontWeight: 400,
                        color: "#606060",
                        padding: isWhiteBackground ? "12px" : "8px 12px",
                        border: "none"
                      }}
                      
                    >
                      {user.Name}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: pxToRem(16),
                        fontWeight: 400,
                        color: "#606060",
                        padding: isWhiteBackground ? "12px" : "8px 12px",
                        border: "none"
                      }}
                    >
                      {user.SearchNumber}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: pxToRem(16),
                        fontWeight: 400,
                        color: "#606060",
                        padding: isWhiteBackground ? "12px" : "8px 12px",
                        border: "none"
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
