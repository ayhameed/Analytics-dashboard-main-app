"use client";
import React, { useEffect, useState } from "react";
import { pxToRem, RowStack, StyledImage } from "@web-insight/component-library";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import profileAvatar from "@/ui/modules/partials/Header/ui/assets/icon/Avatar.jpg";
import logOut from "../assets/icon/logout.svg";
import profileIcon from "@/ui/modules/partials/Header/ui/assets/icon/arrow-circle-down.svg";
import { useApplicationTheme } from "@/common";
import { SearchBar } from "@/ui/modules/partials/Header/ui/components";
import { useRouter } from "next/navigation";

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

export const Header: React.FC = () => {
  const router = useRouter();
  const [displayLogout, setDisplayLogout] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      if (displayLogout) {
        setDisplayLogout(false);
      }
    };

    // Add click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [displayLogout]);

  const handleProfileIconClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setDisplayLogout(!displayLogout);
  };

  const handleLogoutClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    // Add your logout logic here
    console.log("Logging out...");
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        padding: "16px 39px 15px 5px",
        background: (theme) => theme.navBar.background,
        overflow: "visible", // Changed to visible to show dropdown
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
              maxWidth: "70%",
              minWidth: "200px",
              overflow: "hidden",
            }}
          >
            <CoinGeckoWidget />
          </Box>

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
            <SearchBar />

            <RowStack
              sx={{
                alignItems: "center",
                gap: "15px",
                flexShrink: 0,
                position: "relative",
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
                  cursor: "pointer",
                }}
                onClick={() => router.push("/users")}
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
                  onClick={() => router.push("/users")}
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
                    cursor: "pointer",
                  }}
                  title="Yemi@fig.com"
                  onClick={() => router.push("/users")}
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
                  cursor: "pointer",
                  transform: displayLogout ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
                onClick={handleProfileIconClick}
              />

              {displayLogout && (
                <Box
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
                    right: 0,
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
                    sx={{ height: "24px", width: "24px", display: "block" }}
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
