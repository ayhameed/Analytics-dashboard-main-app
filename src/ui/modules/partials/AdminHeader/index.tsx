"use client";

import React from "react";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import profileAvatar from "@/ui/modules/partials/Header/ui/assets/icon/Avatar.jpg";
import profileIcon from "@/ui/modules/partials/Header/ui/assets/icon/arrow-circle-down.svg";
import { useApplicationTheme } from "@/common";

export const AdminHeader: React.FC = () => {
  const { isDarkMode } = useApplicationTheme();
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        padding: "16px 39px 15px 5px",
        background: (theme) => theme.navBar.background,
        overflow: "hidden",
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexShrink: 0,
            maxWidth: "500px",
            marginLeft: "auto",
          }}
        >
          <RowStack
            sx={{
              alignItems: "center",
              gap: "15px",
              flexShrink: 0,
            }}
          >
            <StyledImage
              src={profileAvatar}
              alt="Profile Avatar"
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  fontSize: pxToRem(16),
                  fontWeight: 700,
                  lineHeight: "150%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title="Opeyemi Adeboye"
              >
                Opeyemi Adeboye
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
                }}
                title="Yemi@fig.com"
              >
                Yemi@fig.com
              </Typography>
            </Box>
            <StyledImage
              src={profileIcon}
              alt="Profile Dropdown"
              sx={{
                width: "24px",
                height: "24px",
                marginLeft: "24px",
                flexShrink: 0,
              }}
            />
          </RowStack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
