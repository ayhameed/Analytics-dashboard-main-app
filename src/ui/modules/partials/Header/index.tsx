"use client";
import React, { useEffect, useState, useRef } from "react";
import { pxToRem, RowStack, StyledImage, AppButton } from "@web-insight/component-library";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import profileAvatar from "@/ui/modules/partials/Header/ui/assets/icon/Avatar.jpg";
import logOut from "../assets/icon/logout.svg";
import profileIcon from "@/ui/modules/partials/Header/ui/assets/icon/arrow-circle-down.svg";
import { getUserInfo, useApplicationTheme, useUserApi } from "@/common";
import { SearchBar, Navigator } from "@/ui/modules/partials/Header/ui/components";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import searchIcon from "./ui/assets/icon/search_icon.svg";
import searchIconDark from "./ui/assets/icon/search_icon_dark.svg";

const CoinGeckoWidget: React.FC = () => {
  const { isDarkMode } = useApplicationTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "40px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <gecko-coin-price-marquee-widget
        coin-ids={""}
        initial-currency="usd"
        dark-mode={isDarkMode ? "true" : "false"}
      />
    </Box>
  );
};

interface UserInfo {
  name: string;
  imageUrl: StaticImageData | string;
  email: string;
}

export const Header: React.FC = () => {
  const { isDarkMode } = useApplicationTheme();
  const router = useRouter();
  const { logout } = useUserApi();
  const [displayLogout, setDisplayLogout] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "User",
    email: "user@user.com",
    imageUrl: profileAvatar,
  });

  // Refs for detecting outside clicks
  const searchRef = useRef<HTMLDivElement>(null);
  const logoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Detect if click is outside logout menu
      if (logoutRef.current && !logoutRef.current.contains(event.target as Node) && displayLogout) {
        setDisplayLogout(false);
      }

      // Detect if click is outside search bar
      if (searchRef.current && !searchRef.current.contains(event.target as Node) && displaySearch) {
        setDisplaySearch(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Initial check for mobile
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 900);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [displaySearch, displayLogout]);

  useEffect(() => {
    const storedUserInfo = getUserInfo();
    setUserInfo({
      name: storedUserInfo.name || "User",
      email: storedUserInfo.email || "user@user.com",
      imageUrl: storedUserInfo.imageUrl || profileAvatar,
    });
  }, []);

  const handleProfileIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDisplayLogout(!displayLogout);
  };

  const handleLogoutClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await logout();
    if (success) {
      router.push("/login");
    }
  };

  const toggleSearch = () => {
    setDisplaySearch(!displaySearch);
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        padding: {
          xs: "16px 15px 15px 5px",
          sm: "16px 39px 15px 5px",
        },
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
          {/* CoinGecko Widget */}
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

          {/* Search for mobile view */}
          <StyledImage
            src={isDarkMode ? searchIconDark : searchIcon}
            alt="Search Icon"
            onClick={toggleSearch}
            sx={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              margin: "0 -10px",
              display: { xs: "block", md: "none" },
            }}
          />

          {/* mobile navigators */}
          <RowStack
            sx={{
              "@media (min-width: 600px)": {
                display: "none",
              },
              height: "40px",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <AppButton
              onClick={() => router.push("/sign-up")}
              disableArrow
              sx={{
                height: "100%",
                width: "100%",
                maxWidth: "120px",
                padding: "4px 10px ",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  fontSize: pxToRem(14),
                  lineHeight: "21px",
                }}
              >
                Get Started
              </Typography>
            </AppButton>
            <Navigator />
          </RowStack>

          {/* SearchBar and Profile Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexShrink: 0,
              maxWidth: "500px",
            }}
          >
            {(displaySearch && isMobile) || !isMobile ? (
              <Box ref={searchRef}
                sx={{
                  display: "block" ,
                  width: "100%"
                }}
              >
                <SearchBar />
              </Box>
            ) : null}


            <RowStack
              sx={{
                display: { xs: "none", sm: "flex" },
                "@media (max-width: 599px)": {
                  display: "none",
                },
                alignItems: "center",
                gap: "15px",
                flexShrink: 0,
                position: "relative",
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
                  cursor: "pointer",
                }}
                onClick={() => router.push("/user")}
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
                    cursor: "pointer",
                  }}
                  title="Opeyemi Adeboye"
                  onClick={() => router.push("/user")}
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
                  title="Yemi@fig.com"
                  onClick={() => router.push("/user")}
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
                  cursor: "pointer",
                  transform: displayLogout ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
                onClick={handleProfileIconClick}
              />

              {displayLogout && (
                <Box
                  ref={logoutRef}
                  onClick={handleLogoutClick}
                  sx={{
                    display: "flex",
                    padding: "15px 0 15px 10px",
                    alignItems: "flex-start",
                    borderRadius: "9px",
                    backgroundColor: (theme) => theme.navBar.logOut.background,
                    boxShadow: "0px 4px 27.1px -6px rgba(92, 92, 92, 0.25)",
                    gap: "8px",
                    width: "252px",
                    position: "absolute",
                    top: "70px",
                    right: { sm: "10px", md: 0 },
                    marginTop: "10px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform: "scaleY(1)",
                    transformOrigin: "top",
                    zIndex: 2000,
                  }}
                >
                  <StyledImage
                    src={logOut}
                    alt="logOutIcon"
                    sx={{
                      height: "24px",
                      width: "24px",
                      display: "block",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: pxToRem(16),
                      fontWeight: 400,
                      lineHeight: "150%",
                      color: (theme) => theme.navBar.logOut.color,
                    }}
                  >
                    Log Out
                  </Typography>
                </Box>
              )}
            </RowStack>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
