"use client";

import { Typography } from "@mui/material";
import auth from "./ui/assets/images/auth.png";
import { pxToRem } from "@web-insight/component-library";
import { Stack } from "@mui/system";

export const AuthRight = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${auth.src})`,
        borderRadius: { xs: "30px", md: "40px" },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        px: { xs: "40px", md: "55px", lg: "70px" },
        paddingTop: { xs: "70px", md: "100px", lg: "150px" },
        paddingBottom: { xs: "46px", md: "86px" },
        maxWidth: "610px",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: {
            xs: pxToRem(16),
            md: pxToRem(24),
            lg: pxToRem(32),
          },
          fontWeight: 900,
          lineHeight: "150%",
          textAlign: "center",
          mb: "40px",
        }}
      >
        Discover insights, analyze trends, and track market movements—all in one place. Stay ahead
        with data that matters.
      </Typography>

      <Typography
        sx={{
          color: "#fff",
          fontSize: pxToRem(18),
          fontWeight: 400,
          lineHeight: "120%",
          textAlign: "center",
          maxWidth: "90%",
        }}
      >
        Get real-time staking data, validator performance, and rewards and Secure the network while
        you grow your assets.
      </Typography>
    </Stack>
  );
};
