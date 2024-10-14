"use client";

import { ReactNode } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { Header, SideBar } from "@/ui/modules/partials";

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

  return (
    <Box
      sx={{
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
          borderRight: (theme) => `1px solid ${theme.palette.divider}`,
          overflowX: "hidden",
          transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <SideBar />
      </Box>

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflowY: "hidden",
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
              md: "28px 17px 0 25px",
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
