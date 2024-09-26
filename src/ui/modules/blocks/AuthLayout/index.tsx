import { ReactNode } from "react";
import { Box, Grid } from "@mui/material";
import { AuthRight } from "@/ui/modules/blocks";
import { AppLogo } from "@web-insight/component-library";

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        minHeight: "100vh",
        width: "100vw",
        pt: { xs: "29px", md: "49px" },
        px: { xs: "29px", md: "49px" },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ maxWidth: "150px", mb: 4, mt: "16px", ml: "36px" }}>
          <AppLogo />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          py: { xs: "29px", md: "49px" },
        }}
      >
        <AuthRight />
      </Grid>
    </Grid>
  );
}
