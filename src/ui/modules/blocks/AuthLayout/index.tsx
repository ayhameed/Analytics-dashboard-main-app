import React, { ReactNode } from "react";
import { Box, Grid, SxProps, Theme } from "@mui/material";
import { AuthRight } from "@/ui/modules/blocks";
import { ApplicationLogo } from "@/ui/modules/components";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const wrapperStyles: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100vw",
    bgcolor: "background.default",
  };

  const containerStyles: SxProps<Theme> = {
    width: "100%",
    maxWidth: "xl",
    pt: { xs: 3, sm: 4, md: 6 },
    px: { xs: 3, sm: 4, md: 6 },
  };

  const leftColumnStyles: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const logoStyles: SxProps<Theme> = {
    maxWidth: "150px",
    mb: { xs: 3, sm: 4 },
    mt: 2,
    ml: { xs: 2, sm: 3, md: 4.5 },
  };

  const contentStyles: SxProps<Theme> = {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: { xs: -4, sm: -6, md: -12 },
  };

  const rightColumnStyles: SxProps<Theme> = {
    py: { xs: 3, sm: 4, md: 6 },
    display: { xs: "none", sm: "block" },
  };

  return (
    <Box sx={wrapperStyles}>
      <Grid container spacing={{ xs: 4, md: 3, lg: 0 }} sx={containerStyles}>
        {/* Left column: Logo and main content */}
        <Grid item xs={12} sm={6} lg={7} sx={leftColumnStyles}>
          <Box sx={logoStyles}>
            <ApplicationLogo />
          </Box>
          <Box sx={contentStyles}>{children}</Box>
        </Grid>

        {/* Right column: AuthRight component */}
        <Grid item xs={12} sm={6} lg={5} sx={rightColumnStyles}>
          <AuthRight />
        </Grid>
      </Grid>
    </Box>
  );
};
