"use client";

import React, { ReactNode } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { AdminHeader } from "../AdminHeader";
import { AdminSideBar } from "../AdminSidebar";

export interface LayoutProps {
  children: ReactNode;
}

export const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
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
          borderRight: (theme) => `2px solid ${theme.sideBar.borderRight}`,
          overflowX: "hidden",
          transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out",
          background: (theme) => theme.sideBar.background,
        }}
      >
        <AdminSideBar />
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
          <AdminHeader />
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            ...hideScrollbar,
            padding: "23px 43px 81px 17px",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
