"use client";

import { Box, Stack, Typography } from "@mui/material";
import { ApplicationLogo } from "@/ui/modules/components";
import { Centered, pxToRem, StyledImage } from "@web-insight/component-library";

import envelope from "./ui/assets/images/envelope.png";
import { useSearchParams } from "next/navigation";

export const EmailSuccess = () => {
  const searchParams = useSearchParams();

  const initialEmail = searchParams.get("email") || "";

  return (
    <Box
      sx={{
        p: "49px 81px",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <ApplicationLogo />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Centered>
          <Stack>
            <Centered>
              <StyledImage
                src={envelope}
                alt={"envelope"}
                width={100}
                height={100}
                sx={{ width: "161px", height: "139px", mb: "35px" }}
              />
            </Centered>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: pxToRem(32),
                color: (theme) => theme.authPage.emailSuccess.text.color,
                fontWeight: 500,
                lineHeight: "150%",
              }}
            >
              A link has been sent to your email address{" "}
              <Box component={"span"} sx={{ fontWeight: 700 }}>
                {initialEmail}
              </Box>{" "}
              kindly click on the link in the mail to continue
            </Typography>
          </Stack>
        </Centered>
      </Box>
    </Box>
  );
};
