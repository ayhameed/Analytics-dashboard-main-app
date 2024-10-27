import { Stack, Typography } from "@mui/material";
import { AppButton, pxToRem, StyledLink } from "@web-insight/component-library";

export const LinkSignIn = () => {
  return (
    <Stack
      spacing={"20px"}
      sx={{
        position: "absolute",
        right: "8%",
        bottom: "20%",
      }}
    >
      <Typography
        sx={{
          color: "#101928",
          textAlign: "center",
          fontSize: pxToRem(24),
          fontWeight: 500,
          lineHeight: "150%",
        }}
      >
        Kindly sign in to <br /> view all result
      </Typography>

      <StyledLink href={"/login"}>
        <AppButton sx={{ borderRadius: "12px" }}>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Poppins",
              fontSize: pxToRem(16),
              fontWeight: 500,
            }}
          >
            Sign IN
          </Typography>
        </AppButton>
      </StyledLink>
    </Stack>
  );
};
