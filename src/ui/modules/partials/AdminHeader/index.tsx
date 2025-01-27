"use client";

import React, { useEffect, useRef, useState } from "react";
import { RowStack } from "@web-insight/component-library";
import { AppBar, Box, Toolbar } from "@mui/material";
import profileAvatar from "@/ui/modules/partials/Header/ui/assets/icon/Avatar.jpg";
import { getUserInfo, useClickOutside, useIsMobile, UserInfo, useUserApi } from "@/common";
import { useRouter } from "next/navigation";
import { GetStartedButton, UserProfileSection } from "@/ui/modules/components";
import { Navigator } from "@/ui/modules/partials/Header/ui/components";

export const AdminHeader: React.FC = () => {
  const router = useRouter();
  const { logout } = useUserApi();
  const [displayLogout, setDisplayLogout] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const isMobile = useIsMobile();
  const searchRef = useRef<HTMLDivElement>(null);

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

  useClickOutside({
    ref: searchRef,
    callback: () => displaySearch && setDisplaySearch(false),
  });

  const handleLogoutClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await logout();
    if (success) router.push("/check-email");
  };

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
        padding: { xs: "16px 15px 15px 5px", sm: "16px 39px 15px 5px" },
        background: (theme) => theme.navBar.background,
        overflow: "visible",
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
              display: { xs: "flex", md: "none" },
              height: "40px",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            {userInfo.name === "User" ? (
              <GetStartedButton onClick={() => router.push("/check-email")} />
            ) : (
              <UserProfileSection
                userData={userInfo}
                displayLogout={displayLogout}
                onProfileClick={() => router.push("/user")}
                onProfileIconClick={(e) => {
                  e.stopPropagation();
                  setDisplayLogout(!displayLogout);
                }}
                onLogoutClick={handleLogoutClick}
                isMobileView={true}
              />
            )}
            <Navigator />
          </RowStack>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "24px",
              flexShrink: 0,
              maxWidth: "500px",
            }}
          >
            {userInfo.name === "User" ? (
              <GetStartedButton onClick={() => router.push("/check-email")} />
            ) : (
              <UserProfileSection
                userData={userInfo}
                displayLogout={displayLogout}
                onProfileClick={() => router.push("/user")}
                onProfileIconClick={(e) => {
                  e.stopPropagation();
                  setDisplayLogout(!displayLogout);
                }}
                onLogoutClick={handleLogoutClick}
                isMobileView={false}
              />
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
