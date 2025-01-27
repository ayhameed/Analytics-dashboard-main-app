"use client";

import React, { useEffect, useRef, useState } from "react";
import { RowStack, StyledImage } from "@web-insight/component-library";
import { AppBar, Box, Toolbar } from "@mui/material";
import {
  getUserInfo,
  useApplicationTheme,
  useClickOutside,
  useIsMobile,
  UserInfo,
  useUserApi,
} from "@/common";
import { Navigator, SearchBar } from "@/ui/modules/partials/Header/ui/components";
import { useRouter } from "next/navigation";

// Import icons
import profileAvatar from "@/ui/modules/partials/Header/ui/assets/icon/Avatar.jpg";
import searchIcon from "./ui/assets/icon/search_icon.svg";
import searchIconDark from "./ui/assets/icon/search_icon_dark.svg";
import { CoinGeckoWidget, GetStartedButton, UserProfileSection } from "@/ui/modules/components";

// Main Header Component
export const Header: React.FC = () => {
  const { isDarkMode } = useApplicationTheme();
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
            width: "100%",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: { xs: "50%", sm: "70%" },
              minWidth: { xs: "150px", sm: "200px" },
              overflow: "hidden",
            }}
          >
            <CoinGeckoWidget />
          </Box>

          <StyledImage
            src={isDarkMode ? searchIconDark : searchIcon}
            alt="Search Icon"
            onClick={() => setDisplaySearch(!displaySearch)}
            sx={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              margin: "0 -20px",
              display: { xs: "block", md: "none" },
            }}
          />

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

          {(displaySearch && isMobile) || !isMobile ? (
            <Box ref={searchRef} sx={{ display: "block", width: "100%" }}>
              <SearchBar />
            </Box>
          ) : null}

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
