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
        px: { xs: "40px", md: "70px" },
        paddingTop: { xs: "70px", md: "150px" },
        paddingBottom: { xs: "46px", md: "86px" },
        maxWidth: "610px",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: pxToRem(64),
          fontWeight: 700,
          lineHeight: "120%",
          textAlign: "center",
          mb: "40px",
        }}
      >
        Kinikan <br />
        Kinikan <br />
        Kinikan
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
        Lorem ipsum dolor sit amet consectetur. Sagittis eget non consequat felis tristique sapien.
        Molestie risus platea ullamcorper pharetra sed bibendum dictumst convallis.
      </Typography>
    </Stack>
  );
};
