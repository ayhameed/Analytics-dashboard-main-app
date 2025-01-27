"use client";

import { useEffect, useState } from "react";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";

import managerIcon from "./assets/icons/manager.svg";
import { useUserApi } from "@/common";

export const TotalUsers = () => {
  const { getAdminUsers } = useUserApi();
  const [totalUsers, setTotalUsers] = useState<number | null>(null);
  const [activeUsers, setActiveUsers] = useState<number | null>(null);
  const [inactiveUsers, setInactiveUsers] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userStats = await getAdminUsers();
        if (userStats) {
          setTotalUsers(userStats.total_user_count);
          setActiveUsers(userStats.active_inactive_users.active_users);
          setInactiveUsers(userStats.active_inactive_users.inactive_users);
        } else {
          toast.error("Failed to fetch user statistics.");
        }
      } catch (error) {
        toast.error("An error occurred while loading user statistics.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [getAdminUsers]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <RowStack
      sx={{
        marginBottom: "19px",
        padding: "20px 12px",
        gap: "12px",
        borderRadius: "8px",
        flex: "1 0 0",
      }}
    >
      <StyledImage
        src={managerIcon}
        alt="Manager Icon"
        sx={{ alignSelf: "flex-start", paddingTop: "10px" }}
      />

      <Stack>
        <Typography
          sx={{
            fontSize: pxToRem(20),
            fontWeight: 500, // Font family => Inter
            lineHeight: "30px",
          }}
        >
          Users
        </Typography>

        <Typography
          sx={{
            fontSize: pxToRem(30),
            fontWeight: 500, // Font family => Inter
            lineHeight: "38px",
          }}
        >
          {totalUsers ?? "N/A"}
        </Typography>
      </Stack>

      <Stack marginLeft={"auto"}>
        <RowStack spacing={"20px"}>
          <RowStack>
            <Box
              sx={{
                backgroundColor: "#FF5A5A",
                width: "8.5px",
                height: "8.5px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <Typography
              sx={{
                color: "#FF5A5A",
                fontSize: pxToRem(16),
                fontWeight: 500,
                lineHeight: "120%",
              }}
            >
              Inactive
            </Typography>
          </RowStack>

          <Typography
            sx={{
              fontSize: pxToRem(20),
              fontWeight: 500,
              lineHeight: "38px",
            }}
          >
            {inactiveUsers ?? "N/A"}
          </Typography>
        </RowStack>

        <RowStack justifyContent={"space-between"}>
          <RowStack>
            <Box
              sx={{
                backgroundColor: "#009B55",
                width: "8.5px",
                height: "8.5px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <Typography
              sx={{
                color: "#009B55",
                fontSize: pxToRem(16),
                fontWeight: 500,
                lineHeight: "120%",
              }}
            >
              Active
            </Typography>
          </RowStack>

          <Typography
            sx={{
              fontSize: pxToRem(20),
              fontWeight: 500,
              lineHeight: "38px",
            }}
          >
            {activeUsers ?? "N/A"}
          </Typography>
        </RowStack>
      </Stack>
    </RowStack>
  );
};
