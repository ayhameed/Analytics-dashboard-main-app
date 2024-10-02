"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";
import { Header, SideBar } from "@/ui/modules/partials";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "250px",
          },
          height: "100%",
          overflowY: "auto",
          "::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          borderRight: {
            xs: "1px solid #e0e0e0",
          },
          overflowX: "hidden",
          transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out",
          backgroundColor:'#F9FAFB '
        }}
      >
        <SideBar />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflowY: "hidden",
          flexGrow: 1,
          transition: "width 0.3s ease-in-out",
        }}
      >
        <Box 
          sx={{ flexShrink: 0}}>
          <Header />
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            "::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            padding: {
             // sm: "0 10px",
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
