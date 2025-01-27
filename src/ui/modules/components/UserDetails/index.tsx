"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { pxToRem } from "@web-insight/component-library";
import { UserInfo } from "@/common";

export const UserDetails: React.FC<{
  userInfo: UserInfo;
  onProfileClick: () => void;
}> = ({ userInfo, onProfileClick }) => (
  <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <Typography
      sx={{
        fontSize: pxToRem(16),
        fontWeight: 700,
        lineHeight: "150%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer",
      }}
      onClick={onProfileClick}
    >
      {userInfo.name}
    </Typography>
    <Typography
      sx={{
        fontSize: pxToRem(16),
        fontWeight: 400,
        lineHeight: "150%",
        color: "#5E646E",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer",
      }}
      onClick={onProfileClick}
    >
      {userInfo.email}
    </Typography>
  </Box>
);
