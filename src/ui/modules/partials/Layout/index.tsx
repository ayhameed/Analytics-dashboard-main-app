"use client";

import React, { ReactNode } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { Header, SideBar } from "@/ui/modules/partials";
import { useMenu, useApplicationTheme } from "@/common";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Common styles for hiding scrollbars
  const hideScrollbar: SxProps<Theme> = {
    "::-webkit-scrollbar": { display: "none" },
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  const {isDarkMode} = useApplicationTheme();

  const {openMenu} = useMenu();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
    <Box
      component="aside"
      sx={{
        width: {
          xs: "250px",
        },
        height: "100%",
        overflowY: "auto",
        ...hideScrollbar,
        borderRight: (theme) => `2px solid ${theme.sideBar.borderRight}`,
        overflowX: "hidden",
        transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out",
        background: (theme) => theme.sideBar.background,
        zIndex: {
          xs: 10,
          sm: 0,
        },
        transform: {
          xs: openMenu ? "translateX(0)" : "translateX(-100%)",
          sm: "translateX(0)",
        },
        position: { xs: "absolute", sm: "static" },
        top: {xs:"88px", sm: 0},
        left: 0,
      }}
    >
      <SideBar />
    </Box>

    {/* mobile overlay */}
   { /*<Box
      sx={{
        display: {
          xs: openMenu ? "block" : "none",
          sm: "none",
        },
        position: "fixed",
        top: "88px",
        right: 0,
        width: "calc(100% - 248px)",
        height: "calc(100% - 88px)",
        background: isDarkMode ? "rgba(0, 0, 0, 0.86)218, 0.5)" : "rgba(7, 7, 7, 0.86)218, 0.5)",
        zIndex: 9,
      }}
    />*/}

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflowY: "hidden"
        }}
      >
        {/* Header */}
        <Box component="header" sx={{ flexShrink: 0 }}>
          <Header />
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            ...hideScrollbar,
            padding: {
              sm: "28px 17px 0 25px",
              xl: "0 30.5px",
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
