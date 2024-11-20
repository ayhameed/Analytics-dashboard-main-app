"use client";

import React, { useEffect, useState } from "react";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import profileAvatar from "@/ui/modules/partials/Header/ui/assets/icon/Avatar.jpg";
import profileIcon from "@/ui/modules/partials/Header/ui/assets/icon/arrow-circle-down.svg";
import { getUserInfo, useApplicationTheme } from "@/common";
import { StaticImageData } from "next/image";

interface UserInfo {
  name: string;
  imageUrl: StaticImageData | string;
  email: string;
}

export const AdminHeader: React.FC = () => {
  const { isDarkMode } = useApplicationTheme();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "User",
    email: "user@user.com",
    imageUrl: profileAvatar,
  });

  useEffect(() => {
    const storedUserInfo = getUserInfo();
    setUserInfo({
      name: storedUserInfo.name || "User",
      email: storedUserInfo.email || "user@user.com",
      imageUrl: storedUserInfo.imageUrl || profileAvatar,
    });
  }, []);

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
              src={userInfo.imageUrl}
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
                }}
                title="Yemi@fig.com"
              >
                {userInfo.email}
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
